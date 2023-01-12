import { createItem } from './createDisc';
import { createDiv } from './createDiv';
import { prodInt } from './interface';
const main = document.querySelector('.main') as HTMLElement;

export class productInfo {
    el: prodInt;
    constructor(el: prodInt) {
        this.el = el;
    }
    createProdInfoBlock() {
        main.classList.remove('main');
        main.innerHTML = '';
        main.classList.add('main_prod');
        createDiv('main_prod', 'product_block', 'div');
        createDiv('product_block', 'product_title', 'div', `${this.el.title}`);
        createDiv('product_block', 'product-bottom', 'div');
        createDiv('product-bottom', 'product_pic', 'div', '', `${this.el.images}`);
        createDiv('product-bottom', 'product_inf', 'div');
        createDiv('product-bottom', 'product-cart', 'div');
        createDiv('product-cart', 'product-info_price', 'h2', `${this.el.price}р`);
        createDiv('product-cart', 'buy-now', 'button', 'BUY NOW');
        createDiv('product-cart', 'to-cart', 'button', 'ADD TO CART');
        createItem('Описание', this.el.description);
        createItem('Соотношение VG/PG', this.el.VGPG);
        createItem('Объем', `${this.el.volume}мл`);
        createItem('Вкус', this.el.taste);
        createItem('Никотин', this.el.nicotine);
        createItem('Крепкость', `${this.el.hardness}мг/мл`);
    }
}
