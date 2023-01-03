import { serverHTTP } from '@/adapters/serverHTTP'

import { sendCaseUse } from '@/application/useCases/send'

export function useRoutesPayment () {
  serverHTTP.add('send', {
    useCase: sendCaseUse,
    route: '/api/payment/send'
  })
     
}
