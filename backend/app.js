const express = require('express');
const app = express();
const routes = require('./routes');
const { environment } = require('./config');

const isProduction = environment === 'production';
app.use(express.json());
app.use(routes);

module.exports = app;
