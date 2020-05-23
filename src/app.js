const express = require('express');

const itemsRouter = require('./items');
const usersRouter = require('./user-profiles');

const mainApp = express();

const PORT = 3000; // take from config later

mainApp.get('/', (req, res) => res.send('main page'));

mainApp.use('/', itemsRouter);
mainApp.use('/', usersRouter);

mainApp.listen(PORT);