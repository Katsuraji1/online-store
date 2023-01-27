/* import { prodList } from './build';
import { filterList } from './filterProd'; */
import { prodList } from './build';
//import { productInfo } from './info';
import { prodInt } from './interface';
import { checkTotaPrice } from './totalPrice';

export let filtArray: Array<prodInt> = [];
export let filtProducer: Array<prodInt> = [];
export let filtVolume: Array<prodInt> = [];
export const cartArray: Array<prodInt> = [];
export const totalPriceDiv = document.querySelector('.total_price') as HTMLElement;

const producerArray: Array<string> = [];
const volumeArray: Array<number> = [];

function FiltFunc(Array: Array<number | string>, list: string) {
    if (Array.every((el) => typeof el === 'number')) {
        Array.sort((a, b) => +a - +b);
    }

    let manufArray: Array<string> = [];
    let volArr: Array<string> = [];

    Array.forEach((el) => {
        filtArray = [];
        filtProducer = [];
        filtVolume = [];
        const block = document.querySelector(`.${list}`) as HTMLElement;
        const li = block.appendChild(document.createElement('li')) as HTMLElement;
        const label = li.appendChild(document.createElement('label')) as HTMLElement;
        const input = label.appendChild(document.createElement('input')) as HTMLInputElement;
        input.classList.add(`${list}_input`);
        input.setAttribute('id', `${el}`);
        input.type = 'checkbox';
        const span = label.appendChild(document.createElement('span')) as HTMLSpanElement;
        span.textContent = `${el}`;
        const search_block = document.querySelector('.search_block') as HTMLInputElement;
        search_block.addEventListener('change', () => {
            input.checked = false;
            filtArray = [];
            filtProducer = [];
            filtVolume = [];
        });
        input.addEventListener('click', () => {
            search_block.value = '';
            if (input.checked == true && list === 'producer_list') {
                prodList.forEach((el: prodInt) => {
                    if (el.producer === input.id) {
                        filtProducer.push(el);
                    }
                });
            } else if (input.checked == false && list === 'producer_list') {
                prodList.forEach((el: prodInt) => {
                    if (el.producer === input.id) {
                        filtProducer.splice(filtProducer.indexOf(el), 1);
                    }
                });
            }
            if (input.checked == true && list === 'volume_list') {
                prodList.forEach((el: prodInt) => {
                    if (el.volume === +input.id) {
                        filtVolume.push(el);
                    }
                });
            } else if (input.checked == false && list === 'volume_list') {
                prodList.forEach((el: prodInt) => {
                    if (el.volume === +input.id) {
                        filtVolume.splice(filtVolume.indexOf(el), 1);
                    }
                });
            }
            filtArray = filtProducer.filter((i) => filtVolume.includes(i));
            if (filtVolume.length === 0) {
                manufArray = [];
                filtProducer.forEach((el: prodInt) => {
                    manufArray.push(`${el.producer}|`);
                });
                window.location.hash = `main/manufacturer=${[...new Set(manufArray)].join('')}`;
            }
            if (filtProducer.length === 0) {
                volArr = [];
                filtVolume.forEach((el: prodInt) => {
                    volArr.push(`${el.volume}|`);
                });
                window.location.hash = `main/volume=${[...new Set(volArr)].join('')}`;
            }
            if (filtProducer.length !== 0 && filtVolume.length !== 0) {
                manufArray = [];
                volArr = [];
                filtProducer.forEach((el: prodInt) => {
                    manufArray.push(`${el.producer}|`);
                });
                filtVolume.forEach((el: prodInt) => {
                    volArr.push(`${el.volume}|`);
                });
                window.location.hash = `main/manufacturer=${[...new Set(manufArray)].join('')}&volume=${[
                    ...new Set(volArr),
                ].join('')}`;
            }
            if (filtProducer.length == 0 && filtVolume.length == 0) {
                window.location.hash = 'main';
            }
            if (filtArray.length == 0 && filtProducer.length !== 0 && filtVolume.length !== 0) {
                const leftSide = document.querySelector('.left_side') as HTMLElement;
                leftSide.textContent = 'Нет резултатов';
            }
        });
    });
}

export class App {
    prod: Array<prodInt>;
    constructor(prod: Array<prodInt>) {
        this.prod = prod;
    }

    createMainPage(check?: string) {
        if (check?.toLocaleLowerCase() === 'logo') {
            filtArray = [];
            filtVolume = [];
            filtProducer = [];
        }
        if (this.prod === prodList) {
            filtArray = [];
            filtVolume = [];
            filtProducer = [];
            window.location.hash = 'main';
        }
        /* if (filtProducer.length !== 0 && filtVolume.length === 0) {

        }
        if (filtProducer.length === 0 && filtVolume.length !== 0) {
        } */
        const leftSide = document.querySelector('.left_side') as HTMLElement;
        leftSide.innerHTML = '';
        this.prod.forEach((el: prodInt) => {
            const card = leftSide.appendChild(document.createElement('div')) as HTMLElement;
            card.classList.add('card');
            const cardPic = card.appendChild(document.createElement('div')) as HTMLElement;
            cardPic.classList.add('card_pic');
            cardPic.classList.add(`${el.id}`);
            cardPic.style.backgroundImage = `url(${el.images})`;
            const cardName = card.appendChild(document.createElement('div')) as HTMLElement;
            cardName.classList.add('card_name');
            cardName.textContent = el.title;
            const cardPrice = card.appendChild(document.createElement('div')) as HTMLElement;
            cardPrice.classList.add('card_price');
            cardPrice.textContent = `${el.price}р`;
            const addToCart = card.appendChild(document.createElement('div')) as HTMLElement;
            addToCart.classList.add('addtocart');
            addToCart.textContent = cartArray.includes(el) ? 'В корзине' : 'Купить';
            producerArray.push(el.producer);
            volumeArray.push(el.volume);
            cardPic.addEventListener('click', () => {
                window.location.hash = `product-details/${el.id}`;
                /* const prodInfo = new productInfo(el);
                prodInfo.createProdInfoBlock(); */
            });
            addToCart.addEventListener('click', () => {
                if (addToCart.textContent === 'Купить') {
                    addToCart.textContent = 'В корзине';
                    cartArray.push(el);
                } else if (addToCart.textContent === 'В корзине') {
                    addToCart.textContent = 'Купить';
                    if (cartArray.includes(el)) {
                        while (cartArray.includes(el)) {
                            cartArray.splice(cartArray.indexOf(el), 1);
                        }
                    }
                }
                checkTotaPrice(cartArray);
            });
        });
    }

    createfilter() {
        FiltFunc([...new Set(producerArray)], 'producer_list');
        FiltFunc([...new Set(volumeArray)], 'volume_list');
    }
}
