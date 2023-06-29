const express = require('express');
const orderRouter = require('./routes/orders');
const productRouter = require('./routes/products');

const server = express();
const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/orderPages');

server.listen(3000);

server.set('view engine', 'ejs');
server.set('views', __dirname + '/views');

server.use(express.json());
server.use(express.urlencoded({extended: false}));

server.use(express.static(__dirname + '/public'));
server.use('/orders', orderRouter);
server.use('/products', productRouter);
