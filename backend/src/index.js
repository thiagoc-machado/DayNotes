const express = require('express');
const app = express();
require('./config/dbConfig');

app.use(express.json());

app.get('/', (request, response) => {
  return response.json({
    nome: 'Thiago',
    profissão: 'Perigo',
  });
});

app.listen(3333);
