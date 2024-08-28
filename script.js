document.addEventListener('DOMContentLoaded', function () {
    const cartItems = document.querySelectorAll('.cart-item');
    const totalPriceElement = document.getElementById('total-price');

    cartItems.forEach(item => {
        const plusButton = item.querySelector('.plus-button');
        const minusButton = item.querySelector('.minus-button');
        const deleteButton = item.querySelector('.delete-button');
        const likeButton = item.querySelector('.like-button');
        const quantityElement = item.querySelector('.quantity');
        const itemPrice = parseFloat(item.getAttribute('data-price'));

        let quantity = parseInt(quantityElement.textContent);

        // Update total price
        function updateTotalPrice() {
            let total = 0;
            document.querySelectorAll('.cart-item').forEach(cartItem => {
                const quantity = parseInt(cartItem.querySelector('.quantity').textContent);
                const price = parseFloat(cartItem.getAttribute('data-price'));
                total += quantity * price;
            });
            totalPriceElement.textContent = total;
        }

        // Plus button event
        plusButton.addEventListener('click', () => {
            quantity++;
            quantityElement.textContent = quantity;
            updateTotalPrice();
        });

        // Minus button event
        minusButton.addEventListener('click', () => {
            if (quantity > 1) {
                quantity--;
                quantityElement.textContent = quantity;
                updateTotalPrice();
            }
        });

        // Delete button event
        deleteButton.addEventListener('click', () => {
            item.remove();
            updateTotalPrice();
        });

        // Like button event
        likeButton.addEventListener('click', () => {
            likeButton.classList.toggle('liked');
        });
    });

    // Initial total price calculation
    updateTotalPrice();
});