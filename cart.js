
let cart = JSON.parse(localStorage.getItem('cart')) || [];

function displayCart() {
    const cartContents = document.getElementById('cart-contents');
    const totalAmountElement = document.getElementById('total-amount');
    const cartTable = document.getElementById('cart-table');
    const emptyCartMessage = document.getElementById('empty-cart-message');

    cartContents.innerHTML = ''; 

    let totalAmount = 0;

    if (cart.length === 0) {
        cartTable.style.display = 'none'; 
        emptyCartMessage.style.display = 'block'; 
    } else {
        cartTable.style.display = 'table'; 
        emptyCartMessage.style.display = 'none';
        const thead = document.createElement('thead');
        thead.innerHTML = `
            <tr>
                <th>Product</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Total Price</th>
                <th>Actions</th>
            </tr>
        `;
        cartContents.appendChild(thead);
        const tbody = document.createElement('tbody');
        for (let i = 0; i < cart.length; i++) {
            const index = i
            const item = cart[i];
            const totalPrice = item.quantity * item.price;
            totalAmount += totalPrice;
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${item.product}</td>
                <td>
                    <input type="number" min="0" value="${item.quantity}" data-index="${index}" class="quantity-input" />
                </td>
                <td>$${item.price.toFixed(2)}</td>
                <td>$${totalPrice.toFixed(2)}</td>
                <td><button class="remove-btn" data-index="${index}">Remove</button></td>
            `;
            tbody.appendChild(row);
        };
        cartContents.appendChild(tbody);
        totalAmountElement.textContent = `$${totalAmount.toFixed(2)}`;
        const quantityInputs = document.querySelectorAll('.quantity-input');
        quantityInputs.forEach(input => {
            input.addEventListener('input', updateQuantity);
        });

        const removeButtons = document.querySelectorAll('.remove-btn');
        removeButtons.forEach(button => {
            button.addEventListener('click', removeItem);
        });
        const checkoutButton = document.getElementById('checkout-btn');
        checkoutButton.addEventListener('click', () => {
            window.location.href = '/order.html';
        });
    }
}

function updateQuantity(event) {
    const input = event.target;
    const index = input.dataset.index;
    const newQuantity = parseInt(input.value);
    if (newQuantity === 0) {
        cart.splice(index, 1);
    } else {
        cart[index].quantity = newQuantity;
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    displayCart();
}

function removeItem(event) {
    const button = event.target;
    const index = button.dataset.index;
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    displayCart();
}

window.onload = displayCart;
