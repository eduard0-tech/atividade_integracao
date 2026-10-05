require('dotenv').config();

const express = require('express');
const rotaFornecedor = require('./routes/rotaFornecedor');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(rotaFornecedor);

app.listen(port, () => {
    console.log(`Servidor iniciado em http://localhost:${port}`);
});
    