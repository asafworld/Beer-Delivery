const express = require('express');
const { 
    getAllSellers,
    getSalesBySeller,
} = require('../controllers/Seller.controller');
const { getSalesProductsById } = require('../controllers/Sales.controller');

const checkToken = require('../middlewares/VerifyTokenMiddleware');

const sellerRoute = express.Router();

sellerRoute.get('/sales/:id', checkToken, getSalesProductsById);
sellerRoute.get('/sales', checkToken, getSalesBySeller);
sellerRoute.get('/', checkToken, getAllSellers);

module.exports = { sellerRoute };