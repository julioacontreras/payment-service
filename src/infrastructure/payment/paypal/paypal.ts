import axios from 'axios'
import { logger } from '@/adapters/logger'
import { Application } from '../../../adapters/payment/types/application';
import { Order } from '../../../adapters/payment/types/order';
import { User } from '../../../adapters/payment/types/user';

const getAccessToken = async (env: string, clientId: string, clientSecret: string): Promise<string | undefined> => {
  const params = new URLSearchParams();
  params.append('grant_type', 'client_credentials');
  const credentials = Buffer.from(`${clientId}:${clientSecret}`).toString('base64')
  const response = await axios.post(`${env}/v1/oauth2/token`, params, {
    headers: {
      'Authorization': `Basic ${credentials}`,
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  })
  return response?.data?.access_token
}

function prepareTransaction(
  order: Order,
  user: User,
  application: Application  
): unknown {
  const payload = {
    intent: 'CAPTURE',
    purchase_units: [
      {
        reference_id: order.orderId,
        amount: {
          currency_code: order.currency,
          value: order.price,
        },
        description: order.description
      },
    ],
    payment_source: {
      paypal: {
        name: {
          given_name: user.name,
          surname: '',
        },
        email_address: user.email,
        experience_context: {
          payment_method_preference: 'IMMEDIATE_PAYMENT_REQUIRED',
          payment_method_selected: 'PAYPAL',
          brand_name: application.name,
          locale: user.locale,
          landing_page: 'NO_PREFERENCE',
          shipping_preference: 'SET_PROVIDED_ADDRESS',
          user_action: 'PAY_NOW',
          return_url: application.captureOrderUrl,
          cancel_url: application.cancelOrderUrl,
        },
      },
    },
  }

  return payload
}

export async function pay(
  order: Order,
  user: User,
  application: Application     
): Promise<any> {
  const env = process.env.PAYPAL_ENV === 'sandbox' ? 'https://api-m.sandbox.paypal.com' : 'https://api-m.paypal.com'
  const { PAYPAL_CLIENT_ID, PAYPAL_SECRET, PAYPAL_ENV } = process.env
  if (!PAYPAL_CLIENT_ID || !PAYPAL_SECRET || !PAYPAL_ENV) {
    throw Error('No parameters to confgure paypal')
  }

  const accessToken = await getAccessToken(env, PAYPAL_CLIENT_ID, PAYPAL_SECRET)
  if (!accessToken) {
    throw Error('Error trying get token access')
  }

  const transaction = prepareTransaction(
    order,
    user,
    application)

  try {
    const response = await axios.post(`${env}/v2/checkout/orders`, transaction, {
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
        'PayPal-Request-Id': order.orderId
      }
    })  
    return response.data
  } catch(err: any) {
    logger.error(err.message)
    return err
  }
}
