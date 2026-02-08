const express = require('express');
const Routes = express.Router();
const {handleAllProducts,handleProductByCategory}=require('../controller/productController');
const verifyToken = require('../middleware/auth');

Routes.route('/all').get(verifyToken,handleAllProducts);
Routes.route('/categories').get(verifyToken,handleProductByCategory);

module.exports = Routes;