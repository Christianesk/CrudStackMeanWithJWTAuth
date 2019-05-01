
var jwt = require('express-jwt');
const config = require('../config');

var isAuth = jwt({
    secret: config.SECRET_TOKEN,
    userProperty: 'payload'
  });

module.exports = isAuth;
