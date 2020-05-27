const express = require('express');

const usersRouter = express.Router();

usersRouter.get('/:userid', (req, res) => res.send(`this should be a rest endpoint for users, to be constructed, BTW Hello ${req.params.userid}!`));

module.exports = usersRouter;
