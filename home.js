let cart = [];
const prices = {
    'Carrot': 1.99,
    'Tomato': 1.49,
    'Pumpkin': 2.99,
    'Brinjal': 1.79,
    'Apple': 2.49,
    'Banana': 0.99,
    'Orange': 0.79
};

function addToCart(product, quantity) {
    const cartItemIndex = cart.findIndex(item => item.product === product);
    if (cartItemIndex !== -1) {
        cart[cartItemIndex].quantity += quantity;
    } else {
        cart.push({
            product: product,
            quantity: quantity,
            price: prices[product]
        });
    }
    localStorage.setItem('cart', JSON.stringify(cart));
}

function handleAddToCartClick(event) {
    const productContainer = event.target.closest('.product');
    const productName = productContainer.querySelector('h3').innerText;
    const quantityInput = productContainer.querySelector('input[type="number"]');
    const quantity = parseInt(quantityInput.value, 10);
    addToCart(productName, quantity);
    const flashMessage = document.getElementById('flash-message');
    flashMessage.style.display = 'block';
    setTimeout(() => {
        flashMessage.style.display = 'none';
    }, 2000);
}


document.querySelectorAll('.product button').forEach(button => {
    button.addEventListener('click', handleAddToCartClick);
});
