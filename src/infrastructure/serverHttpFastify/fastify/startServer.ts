import fastify from 'fastify'

import { UseCaseMap } from '@/adapters/serverHTTP/types'
import { logger } from '@/adapters/logger'

import { createUseCases } from './createUseCases'

export function startServer (useCases: UseCaseMap): void {
  const server = fastify()

  // -------------------------
  //   set CORS
  // -------------------------
  if ((process.env.NODE_ENV === 'development')) {
    server.register(import('@fastify/cors'))
  }

  // -------------------------
  //   add use cases from application
  // -------------------------
  createUseCases(useCases, server)

  // -------------------------
  //   start server
  // -------------------------
  const port = process.env.PORT
  if (!port) {
    throw 'Dont have port selected in server'
  }
  server.listen(port, (err, address) => {
    if (err) {
      logger.error(err.toString())
      process.exit(1)
    }
    console.info(`Server listening at ${address}`)
  })
}
