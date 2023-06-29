const mongoose = require('mongoose');

const { Schema } = mongoose;

const productSchema = new Schema({
    productName: {type: Schema.Types.String, min: 2}
});


const model = mongoose.model('product', productSchema);

module.exports = model;