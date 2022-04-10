const express = require("express");
const auth = require("./auth");
const food = require("./food");

const routes = express.Router();

routes.use('/auth', auth);
routes.use('/food', food);

module.exports = routes;