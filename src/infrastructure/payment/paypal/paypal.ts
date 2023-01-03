import paypal from 'paypal-rest-sdk'

let isPaypalConfigurated = false

function configure() {
  if (isPaypalConfigurated) {
    return
  }
  isPaypalConfigurated = true
  const { PAYPAL_CLIENT_ID, PAYPAL_SECRET, PAYPAL_ENV } = process.env

  if (!PAYPAL_CLIENT_ID || !PAYPAL_SECRET || !PAYPAL_ENV) {
    throw Error('No parameters to confgure paypal')
  }

  paypal.configure({
    mode: PAYPAL_ENV, //sandbox or live
    client_id: PAYPAL_CLIENT_ID,
    client_secret: PAYPAL_SECRET,
  })
}

function prepareTransaction(
  title: string,
  price: string,
  quantity: number,
  currency: string,
): paypal.Payment {
  const { PAYPAL_URL_OK, PAYPAL_URL_KO } = process.env
  return {
    intent: 'sale',
    payer: {
      payment_method: 'paypal',
    },
    redirect_urls: {
      return_url: PAYPAL_URL_OK,
      cancel_url: PAYPAL_URL_KO,
    },
    transactions: [
      {
        item_list: {
          items: [
            {
              name: title,
              sku: title,
              price,
              currency,
              quantity,
            },
          ],
        },
        amount: {
          currency,
          total: price,
        },
        description: '',
      },
    ],
  }
}

export function sendMoney(
  title: string,
  price: string,
  quantity: number,
  currency: string,
) {
  configure()
  const transaction = prepareTransaction(title, price, quantity, currency)
  paypal.payment.create(transaction, function (error, payment) {
    if (error) {
      throw error
    } else {
      console.log('Create Payment Response')
      console.log(payment)
    }
  })
}
