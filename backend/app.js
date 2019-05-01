
//Imports
const express = require('express');
const morgan = require('morgan');
const app = express();
const cors = require('cors')
var passport = require('passport');
const apiProduct = require('./routes/product.routes');
const apiUser = require('./routes/user.routes');
const config = require('./config');
require('./config/passport');


//Middlewares
app.use(passport.initialize());
app.use(express.json());
app.use(morgan('dev'));
app.use(cors({origin:config.URL_FRONTEND}));



// error handlers

// [SH] Catch unauthorised errors
app.use(function (err, req, res, next) {
    if (err.name === 'UnauthorizedError') {
      res.status(401);
      res.json({"message" : err.name + ": " + err.message});
    }
  });




//Routes
app.use('/api',apiProduct);
app.use('/api',apiUser);


module.exports = app;