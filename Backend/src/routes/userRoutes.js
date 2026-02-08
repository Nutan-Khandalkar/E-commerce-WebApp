const express = require('express');
const Routes = express.Router();
const {handlePostSignup,handlePostLogin}=require('../controller/userController');

Routes.route('/signup').post(handlePostSignup);
Routes.route('/login').post(handlePostLogin);


module.exports = Routes;