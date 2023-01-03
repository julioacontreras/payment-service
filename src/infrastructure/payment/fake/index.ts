export const payment = {
  send: (
    title: string,
    price: string,
    quantity: number,
    currency: string,
  ) => {},
  receive: (
    title: string,
    price: string,
    quantity: number,
    currency: string,
    methodPaymentId: string
  ) => {},
  getMethodPayment: (accountId: string) => {
    return {}
  },
  getMethodPayments: (userId: string) => {
    return {}
  },
}