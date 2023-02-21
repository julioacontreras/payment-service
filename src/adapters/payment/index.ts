import { Payment } from './types/payment'

export let payment: Payment

export function setPayment (newPayment: Payment) {
  payment = newPayment
}
