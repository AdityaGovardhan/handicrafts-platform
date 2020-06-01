const express = require('express');
const UserDB = require('./UserDB');

const usersRouter = express.Router();

// let count = 0; // DEBUG

usersRouter.get('/:userId', (req, res) => {
  const { userId } = req.params;

  // DEBUG
  // console.log(userId);
  // count += 1;
  // console.log(count);

  const userDb = new UserDB();
  userDb.findUserById(userId, (result) => {
    // console.log(result); // DEBUG
    res.send(result[0]);
  });
});

module.exports = usersRouter;
