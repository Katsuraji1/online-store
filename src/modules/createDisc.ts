export function createItem(title: string, description: string) {
    const product_inf = document.querySelector('.product_inf') as HTMLElement;
    const product_inf_item = product_inf.appendChild(document.createElement('div')) as HTMLElement;
    product_inf_item.classList.add('prod-info_item');
    const prod_infotitle = product_inf_item.appendChild(document.createElement('h3')) as HTMLElement;
    prod_infotitle.classList.add('item_info-title');
    prod_infotitle.textContent = title;
    const prod_infoDescr = product_inf_item.appendChild(document.createElement('p')) as HTMLElement;
    prod_infoDescr.classList.add('item_info-description');
    prod_infoDescr.textContent = description;
}
