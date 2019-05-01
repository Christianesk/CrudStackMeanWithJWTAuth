
const express = require('express');
const productCtrl = require('../controllers/product.controller')
const authMiddleware = require('../middlewares/auth.middleware')
const router = express.Router();


router.get('/product', authMiddleware,productCtrl.getProducts);
router.get('/product/:id', authMiddleware,productCtrl.getProductFindById);
router.post('/product', authMiddleware, productCtrl.saveProduct);
router.put('/product/:id', authMiddleware, productCtrl.updateProduct);
router.delete('/product/:id', authMiddleware, productCtrl.deleteProduct);

module.exports = router;