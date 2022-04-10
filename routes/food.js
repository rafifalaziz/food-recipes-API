const express = require('express');
const {food} = require('../controller')
const imageUpload = require('../middleware/imageUpload');
const {verifyToken} = require('../middleware/token');

const routes = express.Router();

routes.post('/add', verifyToken, imageUpload.imageUpload, food.addFood);
routes.put('/update/:id', verifyToken, imageUpload.imageUpload, food.editFood);


module.exports = routes;