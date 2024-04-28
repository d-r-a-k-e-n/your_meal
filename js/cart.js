// Додаємо товари
const orderList = document.querySelector('.order__list');

// Відслідковуємо клік на сторінці
window.addEventListener('click', function (event) {
  // Перевірка чи було натиснуто на кнопку Add
  if (event.target.hasAttribute('data-cart')) {
    // Знаходимо в якій карточці було натиснуто на кнопку
    const product = event.target.closest('.product');

    // Збираємо дані з картки
    const productInfo = {
      id: product.dataset.id,
      imgSrs: product.querySelector('.product__image').getAttribute('src'),
      title: product.querySelector('.product__title').innerText,
      weight: product.querySelector('.product__weight').innerText,
      prise: product.querySelector('.product__price').innerText,
    };

    // Перевіряємо чи є товар в корзині
    const itemInCart = orderList.querySelector(`[data-id="${productInfo.id}"]`);

    if (itemInCart) {
      // Оновлюємо значення data-counter
      const counterElement = itemInCart.querySelector('[data-counter]');
      counterElement.innerText =
        parseInt(counterElement.innerText) + parseInt('1');
    } else {
      // Міняє HTML код нашими заготовками
      const cartItemHTML = `<li class="order__item">
        <img
          class="order__image"
          src="${productInfo.imgSrs}"
          alt="Super cheesy"
        />
        <div class="order__product">
          <h3 class="order__product-title">${productInfo.title}</h3>

          <p class="order__product-weight">${productInfo.weight}</p>

          <p class="order__product-price">
            ${productInfo.prise} <span class="currency">₴</span>
          </p>
        </div>

        <div class="order__product-count count">
          <button class="count__minus" data-action="minus">-</button>
          <p class="count__amount" data-counter>1</p>
          <button class="count__plus" data-action="plus">+</button>
        </div>
      </li>`;

      // Додає продукти в корзину
      orderList.insertAdjacentHTML('beforeend', cartItemHTML);

      calcCartPrise();
    }
  }
});
