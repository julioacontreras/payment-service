import { sendMoney } from './paypal'

export const payment = {
  send: (
    title: string,
    price: string,
    quantity: number,
    currency: string,
  ) => {
    return sendMoney(title, price, quantity, currency)
  },
  getMethodPayment: (accountId: string) => {
    return {}
  },
  getMethodPayments: (userId: string) => {
    return {}
  },
}
