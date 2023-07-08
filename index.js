const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());

const apiRoutes = require('./api');
app.use('/api', apiRoutes);

app.listen(3000, () => {
  console.log('Servidor Express escuchando en el puerto 3000');
});
