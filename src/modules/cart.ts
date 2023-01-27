import { createItemsCart } from './cartItems';
import { checkoutOrder } from './checkout';
import { createDiv } from './createDiv';
import { prodInt } from './interface';
import { checkTotaPrice } from './totalPrice';
const main = document.querySelector('main') as HTMLElement;

export class cart {
    cartArr: Array<prodInt>;
    public constructor(cartArr: Array<prodInt>) {
        this.cartArr = cartArr;
    }

    public createCartPage() {
        main.innerHTML = '';
        const main_cart = main.appendChild(document.createElement('div')) as HTMLElement;
        main_cart.classList.add('main_cart');
        createDiv('main_cart', 'cart_item_div', 'div');
        createDiv('main_cart', 'summary', 'div');
        createDiv('summary', 'products_count', 'span', `Количкство: ${this.cartArr.length}`);
        createDiv('summary', 'products_total_price', 'span', `Итоговая стоимость: ${checkTotaPrice(this.cartArr)}`);
        const inputPromo = (document.querySelector('.summary') as HTMLElement).appendChild(
            document.createElement('input')
        ) as HTMLInputElement;
        const products_total_price = document.querySelector('.products_total_price') as HTMLElement;
        inputPromo.type = 'text';
        inputPromo.classList.add('promo');
        inputPromo.placeholder = 'Введите промокод';
        inputPromo.oninput = () => {
            if (inputPromo.value.toLocaleLowerCase() === 'promo') {
                products_total_price.textContent = `Итоговая стоимость: ${(+checkTotaPrice(this.cartArr) * 0.9).toFixed(
                    2
                )}`;
            } else {
                products_total_price.textContent = `Итоговая стоимость: ${checkTotaPrice(this.cartArr)}`;
            }
        };
        createDiv('summary', 'buy_now_button', 'button', 'КУПИТЬ');
        const confirmOrder = document.querySelector('.buy_now_button') as HTMLButtonElement;
        confirmOrder.addEventListener('click', () => {
            const orderForm = new checkoutOrder();
            orderForm.createOrderForm();
        });
        if (this.cartArr.length === 0) {
            main_cart.textContent = 'Ваша корзина пуста';
        } else {
            [...new Set(this.cartArr)].forEach((el) => {
                createItemsCart(el);
            });
        }
    }
}
