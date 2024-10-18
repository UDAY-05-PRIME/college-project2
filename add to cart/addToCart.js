
document.addEventListener('DOMContentLoaded', displayCartItems);

function displayCartItems() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartItemsContainer = document.getElementById('cartItemsContainer');
    const emptyCartMessage = document.getElementById('emptyCartMessage');

    cartItemsContainer.innerHTML = '';

    if (cart.length === 0) {
        emptyCartMessage.style.display = 'block';
        return;
    } else {
        emptyCartMessage.style.display = 'none';
    }

    cart.forEach((item, index) => {

        const totalPrice = item.price * item.quantity;  // Calculate total price based on quantity

        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}" class="cart-item-image">
            <div class="cart-item-details">
                <h3>${item.name}</h3>
                <p>Total Price: ₹${totalPrice}</p>  <!-- Display the calculated total price -->
                <p>Quantity: ${item.quantity}</p>
                <button onclick="removeFromCart(${index})" class="remove-btn">Remove</button>
            </div>
        `;
        cartItemsContainer.appendChild(cartItem);
    });
}

function removeFromCart(index) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    displayCartItems();
}
