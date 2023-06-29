const multer = require('multer');
const express = require('express');
const path = require('path');
const Ajv = require('ajv');
const orderController = require('../controllers/orderController');

const ajv = new Ajv();

const pathUp = path.join(__dirname + '/../public/uploads');
const upload = multer({dest: pathUp});
const router = express.Router();

const storageConfig = multer.diskStorage({
    destination: (req, file, cb) =>{
        cb(null, pathUp);
    },
    filename: (req, file, cb) =>{
        cb(null, file.originalname);
    }
});

router.get('/', (req, res) => {
    res.render('orders');
})

router.get('/list', async(req, res) => {
    const orderList = await orderController.getOrderList();
    res.json(orderList);
});

router.get('/add', (req, res) => {
    res.render('addOrder');
});

router.post('/add/create', multer({storage: storageConfig}).single('uploadFile'), (req, res) => {
    const data = req.body;
    const fileName = '/uploads/' + req.file.originalname;
    console.log(fileName);
    console.log(data);
    orderController.addOrder(data, fileName);
});

module.exports = router;