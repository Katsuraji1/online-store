import { productInfo } from './info';
import { prodInt } from './interface';

function FiltFunc(Array: Array<number | string>, list: string) {
    if (Array.every((el) => typeof el === 'number')) {
        Array.sort((a, b) => +a - +b);
    }
    Array.forEach((el) => {
        const block = document.querySelector(`.${list}`) as HTMLElement;
        const li = block.appendChild(document.createElement('li')) as HTMLElement;
        const label = li.appendChild(document.createElement('label')) as HTMLElement;
        const input = label.appendChild(document.createElement('input')) as HTMLInputElement;
        input.type = 'checkbox';
        const span = label.appendChild(document.createElement('span')) as HTMLSpanElement;
        span.textContent = `${el}`;
    });
}

export class App {
    prod: Array<prodInt>;
    constructor(prod: Array<prodInt>) {
        this.prod = prod;
    }

    createMainPage() {
        const leftSide = document.querySelector('.left_side') as HTMLElement;
        const producerArray: Array<string> = [];
        const tasteArray: Array<string> = [];
        const vgpgArray: Array<string> = [];
        const hardnessArray: Array<number> = [];
        const nicotineArray: Array<string> = [];
        const volumeArray: Array<number> = [];
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
            addToCart.textContent = 'Купить';
            producerArray.push(el.producer);
            tasteArray.push(el.taste);
            vgpgArray.push(el.VGPG);
            hardnessArray.push(el.hardness);
            nicotineArray.push(el.nicotine);
            volumeArray.push(el.volume);
            card.addEventListener('click', () => {
                const prodInfo = new productInfo(el);
                prodInfo.createProdInfoBlock();
            });
        });
        FiltFunc([...new Set(producerArray)], 'producer_list');
        FiltFunc([...new Set(tasteArray)], 'taste_list');
        FiltFunc([...new Set(vgpgArray)], 'vg-pg_list');
        FiltFunc([...new Set(hardnessArray)], 'hardness_list');
        FiltFunc([...new Set(nicotineArray)], 'nicotine_list');
        FiltFunc([...new Set(volumeArray)], 'volume_list');
    }
}
