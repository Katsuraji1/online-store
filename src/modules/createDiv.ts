export function createDiv(parents: string, child: string, typeEl: string, description?: string, bgimg?: string) {
    const el = document.querySelector(`.${parents}`) as HTMLElement;
    const children = el.appendChild(document.createElement(`${typeEl}`)) as HTMLElement;
    children.classList.add(`${child}`);
    if (description !== undefined) {
        children.textContent = `${description}`;
    }
    if (bgimg !== undefined) {
        children.style.backgroundImage = `url(${bgimg})`;
    }
}
