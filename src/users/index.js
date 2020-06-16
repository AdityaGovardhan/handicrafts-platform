const express = require('express');

const usersRouter = express.Router();

usersRouter.get('/:userid', (req, res) => res.send(`{"name": "Backend reached, I Am ${req.params.userid}"}`));

module.exports = usersRouter;
