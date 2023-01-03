export interface MethodPayment {

}

export interface Payment {
  send: (
    title: string,
    price: string,
    quantity: number,
    currency: string
  ) => void
  receive: (
    title: string,
    price: string,
    quantity: number,
    currency: string,
    methodPaymentId: string
  ) => void
  getMethodPayment: (accountId: string) => MethodPayment
  getMethodPayments: (userId: string) => MethodPayment
}
