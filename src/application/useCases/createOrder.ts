import { HTTPReturn } from '@/adapters/serverHTTP/types'
import { statusHTTP } from '@/adapters/serverHTTP'
import { payment } from '@/adapters/payment'
import { User } from '@/adapters/payment/types/user'
import { Application } from '@/adapters/payment/types/application'
import { Order } from '@/adapters/payment/types/order'

type Request = {
  body: {
    order: Order,
    user: User,
    application: Application  
  }
}

export const createOrderCaseUse = async (request: Request): Promise<HTTPReturn> => {
  const { order, user, application } = request.body 
  const response = await payment.createOrder(
    order,
    user,
    application)
  return {
    response,
    code: statusHTTP.OK,
  }
}
