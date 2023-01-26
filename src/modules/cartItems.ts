import { cartArray } from './app';
import { prodInt } from './interface';
import { checkTotaPrice } from './totalPrice';

function repeated(array: Array<prodInt>, el: prodInt) {
    return array.filter((i) => i == el).length;
}

export function createItemsCart(el: prodInt) {
    const products_count = document.querySelector('.products_count') as HTMLElement;
    const products_total_price = document.querySelector('.products_total_price') as HTMLElement;
    const cart_item_div = document.querySelector('.cart_item_div') as HTMLElement;
    const cart_item = cart_item_div.appendChild(document.createElement('div')) as HTMLElement;
    cart_item.classList.add('cart-item');
    const item_pic = cart_item.appendChild(document.createElement('div')) as HTMLElement;
    item_pic.classList.add('item_pic');
    item_pic.style.backgroundImage = `url(${el.images})`;
    const item_full_description = cart_item.appendChild(document.createElement('div')) as HTMLElement;
    item_full_description.classList.add('item_full_description');
    const item_title = item_full_description.appendChild(document.createElement('div')) as HTMLElement;
    item_title.classList.add('item_title');
    item_title.textContent = `${el.title}`;
    const item_description = item_full_description.appendChild(document.createElement('div')) as HTMLElement;
    item_description.classList.add('item_description');
    item_description.textContent = `${el.description}`;
    const item_count_price = cart_item.appendChild(document.createElement('div')) as HTMLElement;
    item_count_price.classList.add('item-count-price');
    item_count_price.textContent = `${el.price}`;
    const item_count_info = item_count_price.appendChild(document.createElement('div')) as HTMLElement;
    item_count_info.classList.add('item_count_info');
    const count_negative = item_count_info.appendChild(document.createElement('div')) as HTMLElement;
    count_negative.classList.add('count_negative');
    count_negative.textContent = '-';
    const span_count = item_count_info.appendChild(document.createElement('span')) as HTMLSpanElement;
    span_count.classList.add('span_count');
    span_count.textContent = `${repeated(cartArray, el)}`;
    const count_plus = item_count_info.appendChild(document.createElement('div')) as HTMLElement;
    count_plus.classList.add('count_plus');
    count_plus.textContent = '+';
    const common_item_price = item_count_price.appendChild(document.createElement('div')) as HTMLElement;
    common_item_price.classList.add('common-item-price');
    count_plus.addEventListener('click', () => {
        cartArray.push(el);
        span_count.textContent = `${repeated(cartArray, el)}`;
        products_count.textContent = `Количество: ${cartArray.length}`;
        products_total_price.textContent = `Итоговая стоимость: ${checkTotaPrice(cartArray)}`;
        checkTotaPrice(cartArray);
    });
    count_negative.addEventListener('click', () => {
        if (cartArray.includes(el)) {
            cartArray.splice(cartArray.indexOf(el), 1);
        }
        products_total_price.textContent = `Итоговая стоимость: ${checkTotaPrice(cartArray)}`;
        checkTotaPrice(cartArray);
        products_count.textContent = `Количество: ${cartArray.length}`;
        span_count.textContent = `${repeated(cartArray, el)}`;
    });
}
