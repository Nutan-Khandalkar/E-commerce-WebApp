const express = require('express');
const verifyToken = require('../middleware/auth')
const Routes = express.Router();
const {handleAllProducts,handleProductByCategory, handleProductById, handleProductByCategoryId}=require('../controller/productController');

Routes.route('/all').get(verifyToken,handleAllProducts);
Routes.route('/categories').get(verifyToken,handleProductByCategory);
Routes.route('/:id').get(verifyToken,handleProductById);
Routes.route('/categories/:categoryId').get(handleProductByCategoryId);
module.exports = Routes;