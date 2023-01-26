import { prodList } from './build';
import { prodInt } from './interface';

export function searchProd(value: string) {
    const rgx = new RegExp(value, 'i');
    const filteredArray = prodList.filter((card: prodInt) => {
        if (rgx.test(card.title)) {
            return true;
        } else {
            return false;
        }
    });
    return filteredArray;
}
