const express = require('express');
const UserDB = require('./UserDB');

const usersRouter = express.Router();

usersRouter.get('/:userId', (req, res) => {
  const { userId } = req.params;

  const userDb = new UserDB();
  userDb.findUserById(userId, (result) => {
    res.send(result[0]);
  });
});

module.exports = usersRouter;
