const express = require('express');
const app = express();

const { config } = require('./config/index');
const moviesApi = require('./routes/movies');

moviesApi(app);

app.listen(config.port, () => {
  console.log(
    'Servidor corriendo en el puerto http://127.0.0.1:%s',
    config.port
  );
});
