const express = require('express');
const routes = express.Router();
const axios = require('axios');

// Ruta POST para realizar la petición a la API de Webpay
routes.post('/webpay', async (req, res) => {
  try {
    const { buy_order, session_id, amount } = req.body;

    // Realizar la petición POST a la API de Webpay
    const response = await axios.post(
      'https://webpay3gint.transbank.cl/rswebpaytransaction/api/webpay/v1.2/transactions',
      {
        buy_order: buy_order,
        session_id: session_id,
        amount: amount,
        return_url: 'http://localhost:3000/',
      },
      {
        headers: {
          'Tbk-Api-Key-Id': '597055555532',
          'Tbk-Api-Key-Secret': '579B532A7440BB0C9079DED94D31EA1615BACEB56610332264630D42D0A36B1C',
          'Content-Type': 'application/json',
        }
      }
    );

    console.log(response.data);
    // Aquí puedes realizar las operaciones necesarias con la respuesta

    res.json(response.data);
  } catch (error) {
    console.error('Error al realizar la petición a Webpay:', error);
    res.status(500).json({ error: 'Error al realizar la petición a Webpay' });
  }
});

module.exports = routes;
