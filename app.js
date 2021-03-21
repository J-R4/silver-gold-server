const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 3000;

const router = require('./routes/index.js');

const errHandler = require('./middlewares/errHandler.js');

app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/', router);

app.use(errHandler);

app.listen(port, () => console.log(`S&G admin app is listening on port http://localhost:`+port));

module.exports = app;
