const express = require('express');
const usersController = require('./controllers/userController');
const userController = require('./controllers/userController')
const routes = express.Router();

routes.get('/users', usersController.index)



module.exports = routes;