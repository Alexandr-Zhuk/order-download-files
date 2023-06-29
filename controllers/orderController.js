const orderModel = require('../models/order');

const addOrder = (data, file = null) => {
    const newOrder = {
        orderList: {
            productName: data['product-item'],
            qty: Number(data['product-qty']),
        }
    };
    if(file !== null){
        newOrder.orderList['photo'] = file;
    }
    console.log(newOrder);
    orderModel.create(newOrder);
};

const getOrderList = async() => {
    return await orderModel.find({}).populate({
        path: 'orderList',
        populate: { 
            path: 'productName'
        }
    });
};


module.exports.addOrder = addOrder;
module.exports.getOrderList = getOrderList;