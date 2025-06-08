const productCards = document.querySelectorAll('.product-card');
const totalPriceElement = document.querySelector('.total-price');

function updateSelection() {
  let selected = null;

  productCards.forEach(card => {
    const radio = card.querySelector('input[type="radio"]');
    const details = card.querySelector('.product-details');

    if (radio.checked) {
      selected = card;
      card.classList.add('selected');
      details.style.display = 'flex';
    } else {
      card.classList.remove('selected');
      details.style.display = 'none';
    }
  });

  if (selected) {
    const priceText = selected.querySelector('.price-display').textContent;
    const price = parseFloat(priceText.replace(/[^\d.]/g, ''));
    totalPriceElement.textContent = `Total: $${price.toFixed(2)}`;
  } else {
    totalPriceElement.textContent = 'Total: $0.00';
  }
}

document.querySelectorAll('input[name="product"]').forEach(radio => {
  radio.addEventListener('change', updateSelection);
});

updateSelection(); 
