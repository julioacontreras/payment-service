import { FastifyInstance } from 'fastify'

import { UseCaseRoute, UseCaseMap, UseCaseFunction } from '@/adapters/serverHTTP/types'

export function createUseCases (useCases: UseCaseMap, server: FastifyInstance) {
  useCases.forEach((value, key) => {
    const useCaseRoute = value as unknown as UseCaseRoute
    
    function useHandler(useCaseExecute: UseCaseFunction, useCaseName: string) {
      async function handler (request: any, reply: any) {
        if (!useCaseExecute) {
          return reply
            .status(500)
            .send({ status: `Not exist use case ${useCaseName}` })        
        } 
        try {
          const returnHTTP = await useCaseExecute({ 
            body: request.body,
            params: request.params,
            query: request.query 
          })
          return reply
            .status(returnHTTP.code)
            .send(returnHTTP.response)
        } catch (err:any) {
          let message = {}
          if (process.env.NODE_ENV === 'development') {
            message = { message: err.message }
          }
          return reply
            .status(500)
            .send({ status: 'internal-error', ...message })
        }
      }
      return handler
    }
    

    // -------------------------
    //   route <=> use case
    // -------------------------   i
    
    server.route({
      url: useCaseRoute.route,
      method: useCaseRoute.method, 
      handler: useHandler(useCaseRoute.useCase, key)
    })    

  })
}
