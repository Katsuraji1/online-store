import { createDiv } from './createDiv';

export async function createMainPage() {
    const mainDiv = document.querySelector('main') as HTMLElement;
    mainDiv.innerHTML = '';
    const main = mainDiv.appendChild(document.createElement('div')) as HTMLElement;
    main.classList.add('main');
    createDiv('main', 'left_side', 'div');
    createDiv('main', 'right_side', 'div');

    createDiv('right_side', 'search_block', 'input');

    const search_block = document.querySelector('.search_block') as HTMLInputElement;
    search_block.placeholder = 'Поиск';
    search_block.type = 'Text';
    search_block.oninput = () => {
        /* const filteredSearch = new App(searchProd(search_block.value));
        filteredSearch.createMainPage(); */
        if (search_block.value !== '') {
            window.location.hash = `search=${search_block.value}`;
        }
        if (search_block.value === '') {
            window.location.hash = 'main';
        }
    };
    createDiv('right_side', 'producer_block', 'div');

    createDiv('producer_block', 'producer_text', 'span', 'Производитель');
    createDiv('producer_block', 'producer-slider', 'div');
    createDiv('producer-slider', 'producer_list', 'ul');

    createDiv('right_side', 'volume', 'div');
    createDiv('volume', 'volume_text', 'span', 'Объем, мл');
    createDiv('volume', 'volume-slider', 'div');
    createDiv('volume-slider', 'volume_list', 'ul');
}
