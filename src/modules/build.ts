import { App } from './app';
import { createMainPage } from './createMainPage';
import { prodInt } from './interface';
import * as products from './productlist.json';
const prodList: Array<prodInt> = Object.values(products.products);
const logo = document.querySelector('.logo') as HTMLElement;
export class build {
    public async build() {
        createMainPage();
        const newApp = await new App(prodList);
        newApp.createMainPage();
        logo.addEventListener('click', () => {
            const main_prod = document.querySelector('.main_prod') as HTMLElement;
            try {
                main_prod.innerHTML = '';
                main_prod.classList.remove('main_prod');
                main_prod.classList.add('main');
                createMainPage();
                newApp.createMainPage();
            } catch (err) {
                location.reload();
            }
        });
    }
}
