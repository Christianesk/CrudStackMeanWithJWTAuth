var express = require('express');
var router = express.Router();
const authMiddleware = require('../middlewares/auth.middleware');



var ctrlProfile = require('../controllers/profile');
var ctrlAuth = require('../controllers/user.controller');

// profile
router.get('/profile', authMiddleware, ctrlProfile.profileRead);

// authentication
router.post('/register', ctrlAuth.register);
router.post('/login', ctrlAuth.login);

module.exports = router;