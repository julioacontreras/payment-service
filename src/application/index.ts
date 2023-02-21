import { serverHTTP } from '@/adapters/serverHTTP'
import { createOrderCaseUse } from '@/application/useCases/createOrder'

export function startApp () {
  serverHTTP.add('create-order', {
    useCase: createOrderCaseUse,
    route: '/api/payment/create-order',
    method: 'POST'
  })
  
  serverHTTP.run()
}
