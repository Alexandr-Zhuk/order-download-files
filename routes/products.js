const multer = require('multer');
const express = require('express');
const path = require('path');
const Ajv = require('ajv');
const productController = require('../controllers/productController');

const ajv = new Ajv();

const pathUp = path.join(__dirname + '/../public/uploads');
const upload = multer({dest: pathUp});
const router = express.Router();

router.post('/add', (req, res) => {
    const data = req.body;
    productController.addProduct(data);
});

router.get('/', async(req, res) => {
    const prodList = await productController.getAllProducts();
    res.json(prodList);
});

module.exports = router;