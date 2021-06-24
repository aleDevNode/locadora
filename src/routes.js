const express = require('express');
const usersController = require('./controllers/userController');
const authController = require('./controllers/authController');
const authApi = require('./middlewares/authApi');


const routes = express.Router();

// routes auth

routes.post('/auth',authController.auth);

// routes user
routes.get('/users',authApi.auth, usersController.index);
routes.post('/users',authApi.auth, usersController.create);
routes.put('/users',authApi.auth, usersController.update);
routes.delete('/users',authApi.auth, usersController.delete);


module.exports = routes;