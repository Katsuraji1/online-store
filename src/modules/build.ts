import { App, cartArray } from './app';
import { cart } from './cart';
import { createMainPage } from './createMainPage';
import { productInfo } from './info';
import { prodInt } from './interface';
import * as products from './productlist.json';
import { searchProd } from './search';
export const prodList: Array<prodInt> = Object.values(products.products);
const logo = document.querySelector('.logo') as HTMLElement;
const basket = document.querySelector('.basket_pic') as HTMLElement;
export class build {
    public async build() {
        createMainPage();
        const newApp = await new App(prodList);
        newApp.createMainPage();
        newApp.createfilter();
        logo.addEventListener('click', () => {
            try {
                window.location.hash = 'main';
                /* createMainPage();
                newApp.createMainPage('logo');
                newApp.createfilter(); */
            } catch (err) {
                console.log(err);
            }
        });
        basket.addEventListener('click', () => {
            window.location.hash = 'cart';
        });

        window.addEventListener('hashchange', () => {
            switch (window.location.hash) {
                case '#cart':
                    const cartPage = new cart(cartArray);
                    cartPage.createCartPage();
                    break;
                case '#main':
                    createMainPage();
                    const newMainPage = new App(prodList);
                    newMainPage.createMainPage();
                    newMainPage.createfilter();
                    break;
            }
            prodList.forEach((el: prodInt) => {
                if (window.location.hash === `#product-details/${el.id}`) {
                    const newInfo = new productInfo(el);
                    newInfo.createProdInfoBlock();
                }
            });
            if (window.location.hash.includes('#main/manufacturer=') && !window.location.hash.includes(`&volume`)) {
                const hashManArr: Array<prodInt> = [];
                const newManArr = window.location.hash
                    .replace('#main/manufacturer=', '')
                    .replace('%20', ' ')
                    .split('|')
                    .filter((el: string) => el !== '');
                prodList.forEach((el: prodInt) => {
                    if (newManArr.includes(`${el.producer}`)) {
                        hashManArr.push(el);
                    }
                });
                const filterListClass = new App(hashManArr);
                filterListClass.createMainPage();
            }
            if (
                window.location.hash.includes('#main/volume=') &&
                !window.location.hash.includes('#main/manufacturer=')
            ) {
                const hashVolArr: Array<prodInt> = [];
                const newVolArr = window.location.hash
                    .replace('#main/volume=', '')
                    .replace('%20', ' ')
                    .split('|')
                    .filter((el: string) => el !== '');
                prodList.forEach((el: prodInt) => {
                    if (newVolArr.includes(`${el.volume}`)) {
                        hashVolArr.push(el);
                    }
                });
                const filterListClass = new App(hashVolArr);
                filterListClass.createMainPage();
            }
            if (window.location.hash.includes(`#main/manufacturer=`) && window.location.hash.includes(`&volume`)) {
                const hashManArr: Array<prodInt> = [];
                const hashVolArr: Array<prodInt> = [];
                let newFiltArray: Array<prodInt> = [];
                const hash = window.location.hash;
                const volumeArray = hash
                    .substring(hash.indexOf('volume') + 'volume='.length, hash.length - 1)
                    .split('|');

                const manArray = hash
                    .substring(hash.indexOf('manufacturer') + 'manufacturer='.length, hash.indexOf('&volume') - 1)
                    .split('|');

                prodList.forEach((el: prodInt) => {
                    if (manArray.includes(`${el.producer}`)) {
                        hashManArr.push(el);
                    }
                    if (volumeArray.includes(`${el.volume}`)) {
                        hashVolArr.push(el);
                    }
                });

                newFiltArray = hashManArr.filter((i) => hashVolArr.includes(i));
                const filterListClass = new App(newFiltArray);
                filterListClass.createMainPage();
            }
            if (window.location.hash.includes(`#search=`)) {
                //console.log(searchProd(window.location.hash.replace('#search=', '').replace('%20', ' ')));
                const filteredSearch = new App(searchProd(decodeURI(window.location.hash.replace('#search=', ''))));
                filteredSearch.createMainPage();
            }
        });
    }
}
