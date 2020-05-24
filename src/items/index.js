const express = require('express');

const itemsRouter = express.Router();

itemsRouter.get('/items', (req, res) => res.send('this should be a rest endpoint for items, to be constructed'));

itemsRouter.get('/items/random', (req, res) => res.send('this endpoint should return a random list of objects for now'));

itemsRouter.get('/items/:id', (req, res) => res.send(`Are you looking for ${req.params.id}? It will be available soon!`));

module.exports = itemsRouter;
