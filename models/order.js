const mongoose = require('mongoose');
const productModel = require('./product');

const { Schema } = mongoose;

const orderSchema = new Schema({
    orderList: { 
        productName: {type: Schema.Types.ObjectId, ref: 'product'},
        qty: {type: Schema.Types.Number, required: true},
        photo: {type: Schema.Types.String, required: false}
    },
    date: {type: Schema.Types.Date, default: Date.now}
});

const model = mongoose.model('order', orderSchema);

module.exports = model;
