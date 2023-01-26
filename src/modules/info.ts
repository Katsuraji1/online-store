import { cartArray } from './app';
import { checkoutOrder } from './checkout';
import { createItem } from './createDisc';
import { createDiv } from './createDiv';
import { prodInt } from './interface';
import { checkTotaPrice } from './totalPrice';
const mainDiv = document.querySelector('main') as HTMLElement;
export class productInfo {
    el: prodInt;
    constructor(el: prodInt) {
        this.el = el;
    }
    createProdInfoBlock() {
        window.location.hash = `product-details/${this.el.id}`;
        mainDiv.innerHTML = '';
        const main_prod = mainDiv.appendChild(document.createElement('div')) as HTMLElement;
        main_prod.classList.add('main_prod');
        createDiv('main_prod', 'product_block', 'div');
        createDiv('product_block', 'product_title', 'div', `${this.el.title}`);
        createDiv('product_block', 'product-bottom', 'div');
        createDiv('product-bottom', 'product_pic', 'div', '', `${this.el.images}`);
        createDiv('product-bottom', 'product_inf', 'div');
        createDiv('product-bottom', 'product-cart', 'div');
        createDiv('product-cart', 'product-info_price', 'h2', `${this.el.price}р`);
        createDiv('product-cart', 'buy-now', 'button', 'Купить');
        createDiv('product-cart', 'to-cart', 'button', cartArray.includes(this.el) ? 'В корзине' : 'В корзину');
        createItem('Описание', this.el.description);
        createItem('Соотношение VG/PG', this.el.VGPG);
        createItem('Объем', `${this.el.volume}мл`);
        createItem('Вкус', this.el.taste);
        createItem('Никотин', this.el.nicotine);
        createItem('Крепкость', `${this.el.hardness}мг/мл`);
        const cartBtn = document.querySelector('.to-cart') as HTMLElement;
        const confirmOrder = document.querySelector('.buy-now') as HTMLButtonElement;
        confirmOrder.addEventListener('click', () => {
            const orderForm = new checkoutOrder();
            orderForm.createOrderForm();
        });
        cartBtn.addEventListener('click', () => {
            if (cartBtn.textContent === 'В корзину') {
                cartBtn.textContent = 'В корзине';
                cartArray.push(this.el);
            } else if (cartBtn.textContent === 'В корзине') {
                cartBtn.textContent = 'В корзину';
                if (cartArray.includes(this.el)) {
                    while (cartArray.includes(this.el)) {
                        cartArray.splice(cartArray.indexOf(this.el), 1);
                    }
                }
            }
            checkTotaPrice(cartArray);
        });
    }
}
