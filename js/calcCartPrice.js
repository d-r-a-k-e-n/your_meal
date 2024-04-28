function calcCartPrise() {
  const orderWrapper = document.querySelector('.order__wrapper');
  const orderItem = document.querySelectorAll('.order__item');

  const orderTotal = document.querySelector('.order__total-amount');

  let totalPrise = 0;

  orderItem.forEach(function (item) {
    const prise = item.querySelector('.order__product-price');
    const amount = item.querySelector('.count__amount');

    const currentPrice = parseInt(amount.innerText) * parseInt(prise.innerText);

    totalPrise += currentPrice;
  });
  orderTotal.innerText = totalPrise;
}
