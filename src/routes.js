const express = require('express');
const usersController = require('./controllers/userController');
const userController = require('./controllers/userController')
const routes = express.Router();

// routes user
routes.get('/users', usersController.index)
routes.post('/users', usersController.create)
routes.put('/users', usersController.update)
routes.delete('/users', usersController.delete)

module.exports = routes;