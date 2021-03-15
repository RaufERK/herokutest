const express = require('express');
const app = express();
require('dotenv').config();

const { PORT } = process.env;

console.log('PORT ====>>', PORT);

app.get('*', (req, res) => {
  res.send(' Alll RIGHT!!!!');
});

app.listen(PORT || 3000);
