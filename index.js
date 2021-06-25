const express = require('express');
const app = express();

const { config } = require('./config');
const moviesApi = require('./routes/movies');
app.use(express.json());
moviesApi(app);
app.listen(config.port, () => {
  console.log(
    'Servidor corriendo en el puerto http://127.0.0.1:%s',
    config.port
  );
});
