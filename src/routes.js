const express = require('express');
const usersController = require('./controllers/userController');
const authController = require('./controllers/authController');
const routes = express.Router();

// routes auth

routes.post('/auth',authController.auth);

// routes user
routes.get('/users', usersController.index);
routes.post('/users', usersController.create);
routes.put('/users', usersController.update);
routes.delete('/users', usersController.delete);

module.exports = routes;