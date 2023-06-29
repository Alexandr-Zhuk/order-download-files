const orderList = document.querySelector('.order-list');
console.log(orderList);

const renderOrders = (data) => {
    console.log(data);
    let html = 'Состав заказа:';
    data.data.forEach(item => {
        html += 
            `<div>
                <p>Номер заказа: ${item._id}</p>
                <p>Название товара: ${item.orderList.productName.productName}
                    <br>Кол-во: ${item.orderList.qty}
                    <br>Дата: ${item.date}
                </p>
                <div class="order-photo">`;
        if(item.orderList.photo){
            html += `<img src=".${item.orderList.photo}" width="150px" height="150px"></div></div>`;
        }else{
            html += `Фото нет</div></div>`
        }
    });
    orderList.innerHTML = html;
};

const getAllOrders = async() => {
    const allOrders = await axios.get('/orders/list');
    renderOrders(allOrders);
};

getAllOrders();
