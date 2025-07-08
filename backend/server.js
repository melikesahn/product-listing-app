const express = require('express');
const axios = require('axios');
const cors = require('cors');
const products = require('./products.json');

const app = express();
app.use(cors());

const GOLD_API_URL= 'https://www.goldapi.io/api/XAU/USD';
const API_KEY = 'goldapi-45f3dsmctr6g6q-io';

// Popülerlik skorunu 5 üzerinden çeviren fonksiyon
const getPopularityOutOf5 = (score) => +(score * 5).toFixed(1);

app.get('/api/products', async (req, res) => {
  try {
    // Altın fiyatını goldapi.io'dan çek
    const response = await axios.get(GOLD_API_URL, {
      headers: { 'x-access-token': API_KEY }
    });
    const goldPricePerOunce = response.data.price;
    const goldPricePerGram = goldPricePerOunce / 31.1035;

    // Ürünlerin fiyatını hesapla
    const enrichedProducts = products.map((p) => {
      const price = (p.popularityScore + 1) * p.weight * goldPricePerGram;
      return {
        ...p,
        price: price.toFixed(2),
        popularityOutOf5: getPopularityOutOf5(p.popularityScore)
      };
    });

    res.json(enrichedProducts);
  } catch (error) {
    console.error(error);
    res.status(500).send('Altın fiyatı alınamadı');
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Backend çalışıyor: http://localhost:${PORT}`));

