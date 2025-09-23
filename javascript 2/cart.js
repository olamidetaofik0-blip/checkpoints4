// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', () => {
  // Function to update total price
  function updateTotal() {
    let total = 0;
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
      const priceText = card.querySelector('.unit-price').textContent;
      const price = parseFloat(priceText.replace('$', '').trim());
      const quantity = parseInt(card.querySelector('.quantity').textContent);
      total += price * quantity;
    });
    document.querySelector('.total').textContent = `${total} $`;
  }

  // Handle "+" button
  document.querySelectorAll('.fa-plus-circle').forEach(button => {
    button.addEventListener('click', () => {
      const quantityEl = button.nextElementSibling;
      quantityEl.textContent = parseInt(quantityEl.textContent) + 1;
      updateTotal();
    });
  });

  // Handle "−" button
  document.querySelectorAll('.fa-minus-circle').forEach(button => {
    button.addEventListener('click', () => {
      const quantityEl = button.previousElementSibling;
      let currentQty = parseInt(quantityEl.textContent);
      if (currentQty > 0) {
        quantityEl.textContent = currentQty - 1;
        updateTotal();
      }
    });
  });

  // Handle delete button
  document.querySelectorAll('.fa-trash-alt').forEach(button => {
    button.addEventListener('click', () => {
      const cardBody = button.closest('.card-body');
      cardBody.remove();
      updateTotal();
    });
  });

  // Handle like button
  document.querySelectorAll('.fa-heart').forEach(button => {
    button.addEventListener('click', () => {
      button.classList.toggle('liked');
      button.style.color = button.classList.contains('liked') ? 'red' : 'black';
    });
  });

  // Initial total calculation
  updateTotal();
});
