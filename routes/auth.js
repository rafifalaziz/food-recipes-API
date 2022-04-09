const express = require('express');
const {auth} = require('../controller')

const routes = express.Router();

routes.post('/register', auth.register);

module.exports = routes;