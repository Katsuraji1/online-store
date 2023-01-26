import { totalPriceDiv } from './app';
import { prodInt } from './interface';

export function checkTotaPrice(Array: Array<prodInt>): string {
    let totalPrice = 0;
    Array.forEach((el: prodInt) => {
        totalPrice += +el.price.toFixed(2);
    });
    totalPriceDiv.textContent = `${totalPrice.toFixed(2)}р`;
    return totalPrice.toFixed(2);
}
