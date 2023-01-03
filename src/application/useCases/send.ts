import { HTTPReturn } from '@/adapters/serverHTTP/types'
import { statusHTTP } from '@/adapters/serverHTTP'
import { payment } from '@/adapters/payment'

type PaymentResponse = {
  body: {
    title: string
    price: string
    currency: string
  }
}

export const sendCaseUse = async (settings: unknown): Promise<HTTPReturn> => {
  const response = settings as PaymentResponse
  const { title, price, currency } = response.body 
  await payment.send(title, price, 1, currency)
  return {
    response: {},
    code: statusHTTP.OK,
  }
}
