const express = require('express');
const app = express();

const { config } = require('./config');
const {
  errorHandler,
  logErrors,
  wrapErrors,
} = require('./utils/middleware/errorHandlers');
const notFoundHandler = require('./utils/middleware/notFoundHandler.js');

const moviesApi = require('./routes/movies');
app.use(express.json());
moviesApi(app);

app.use(notFoundHandler);

app.use(logErrors);
app.use(wrapErrors);
app.use(errorHandler);
app.listen(config.port, () => {
  console.log(
    'Servidor corriendo en el puerto http://127.0.0.1:%s',
    config.port
  );
});
