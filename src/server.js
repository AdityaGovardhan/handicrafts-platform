const express = require('express');

const itemsRouter = require('./items');
const usersRouter = require('./users');

const mainApp = express();

const PORT = 3001; // TODO: take from config later

// https://stackoverflow.com/a/35408810/3675724
mainApp.get('/favicon.ico', (req, res) => {
  console.log('favicon requested');
  res.status(204);
});

// static content remounted form public/assets/ to static/
mainApp.use('/static', express.static('public/assets'));

mainApp.get('/', (req, res) => res.send('main page'));
mainApp.use('/', itemsRouter);
mainApp.use('/', usersRouter);

mainApp.listen(PORT);
