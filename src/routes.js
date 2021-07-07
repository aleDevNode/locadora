const express = require('express');
const usersController = require('./controllers/userController');
const authController = require('./controllers/authController');
const modelController = require('./controllers/modelController')
const authApi = require('./middlewares/authApi');


const routes = express.Router();

// routes auth

routes.post('/auth',authController.auth);

// Routes private
routes.use(authApi.auth)
// routes user
routes.get('/users', usersController.index);
routes.post('/users', usersController.create);
routes.put('/users', usersController.update);
routes.delete('/users', usersController.delete);

// routes models
routes.get('/models',modelController.index);


module.exports = routes;