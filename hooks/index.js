const express = require('express')
const app = express()
const port = 3012


app.get('/capture-order', (req, res) => {
  /*
  const payerId = req.query.PayerID
  const paymentId = req.query.paymentId
  const execute_payment_json = {
    payer_id: payerId,
    transactions: [
      {
        amount: {
          currency: 'USD',
          total: '25.00',
        },
      },
    ],
  }
  */
  res.send('captured')
})


app.get('/cancel-order', (req, res) => res.send('Cancelled'))


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
