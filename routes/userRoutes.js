const express = require("express");
const userRouter = express.Router();
const { index, store, show, update, destroy } = require('../controllers/userController');

userRouter.route('/')
    .get(index)
    .post(store);

userRouter.route('/:id')
    .get(show)
    .put(update)
    .delete(destroy);

module.exports = userRouter;