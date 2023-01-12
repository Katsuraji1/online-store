import { createDiv } from './createDiv';

export async function createMainPage() {
    createDiv('main', 'left_side', 'div');
    createDiv('main', 'right_side', 'div');
    createDiv('right_side', 'price_block', 'div');
    createDiv('price_block', 'buy_text', 'p', 'Купить');
    createDiv('price_block', 'form_horizontal', 'div');
    createDiv('form_horizontal', 'min_price', 'input');
    createDiv('form_horizontal', 'max_price', 'input');
    createDiv('right_side', 'producer_block', 'div');

    createDiv('producer_block', 'producer_text', 'span', 'Производитель');
    createDiv('producer_block', 'producer-slider', 'div');
    createDiv('producer-slider', 'search_producer', 'input');
    createDiv('producer-slider', 'producer_list', 'ul');

    createDiv('right_side', 'available_taste', 'div');
    createDiv('available_taste', 'taste_text', 'span', 'Тип вкуса жидкости');
    createDiv('available_taste', 'taste-slider', 'div');
    createDiv('taste-slider', 'taste_list', 'ul');

    createDiv('right_side', 'vg-pg', 'div');
    createDiv('vg-pg', 'vg-pg_text', 'span', 'VG/PG');
    createDiv('vg-pg', 'vg-pg-slider', 'div');
    createDiv('vg-pg-slider', 'vg-pg_list', 'ul');

    createDiv('right_side', 'hardness', 'div');
    createDiv('hardness', 'hardness_text', 'span', 'Крепкость мг/мл');
    createDiv('hardness', 'hardness-slider', 'div');
    createDiv('hardness-slider', 'hardness_list', 'ul');

    createDiv('right_side', 'nicotine', 'div');
    createDiv('nicotine', 'nicotine_text', 'span', 'Никотин');
    createDiv('nicotine', 'nicotine-slider', 'div');
    createDiv('nicotine-slider', 'nicotine_list', 'ul');

    createDiv('right_side', 'volume', 'div');
    createDiv('volume', 'volume_text', 'span', 'Объем, мл');
    createDiv('volume', 'volume-slider', 'div');
    createDiv('volume-slider', 'volume_list', 'ul');
}
