import { Application } from "@/adapters/payment/types/application"
import { User } from "@/adapters/payment/types/user"
import { Order } from "@/adapters/payment/types/order"

export interface MethodPayment {

}

export interface Payment {
  createOrder: (
    order: Order,
    user: User,
    application: Application  
  ) => Promise<any>

}
