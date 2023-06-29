const productList = document.querySelector('.products-in-form');
const prodQty = document.querySelector('.prod-qty');
const inputQty = document.querySelector('input[name=product-qty]');
const orderForm = document.querySelector('.add-order-form');

const renderProdList = (data) => {
    let html = '';
    data.data.forEach(elem => {
        html += `<input type="radio" name="product-item" data-id="${elem._id}" value="${elem._id}">${elem.productName}<br>`;
    });
    productList.innerHTML = html;
    
};

const getProductList = async() => {
    const prodList = await axios.get('/products');
    console.log(prodList);
    renderProdList(prodList);
};

prodQty.addEventListener('click', (ev) => {
    if(ev.target.classList.contains('plus')){
        inputQty.value = Number(inputQty.value) + 1;
    }
    if(ev.target.classList.contains('minus')){
        if(inputQty.value !== '1'){
            inputQty.value = Number(inputQty.value) - 1;
        }
    }
});

getProductList();

const sendOrder = async(ev) => {
    ev.preventDefault();
    
    const formData = new FormData(ev.target); 
    await axios.post('/orders/add/create', formData); 
};

orderForm.addEventListener('submit', sendOrder);