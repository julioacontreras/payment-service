import { pay } from './paypal'
import { Application } from '../../../adapters/payment/types/application'
import { Order } from '../../../adapters/payment/types/order'
import { User } from '../../../adapters/payment/types/user'

export const payment = {
  createOrder: (
    order: Order,
    user: User,
    application: Application   
  ): Promise<any> => {
    return pay(order, user, application)
  }
}
