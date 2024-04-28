function toggleCartStatus() {
  const order__wrapper = document.querySelector('.order__wrapper');

  const cartEmptyBadge = document.querySelector('[data-cart-emty]');

  if (order__wrapper.children.length == 0) {
    cartEmptyBadge.classList.add('none');
  } else {
    cartEmptyBadge.classList.remove('none');
  }
}
