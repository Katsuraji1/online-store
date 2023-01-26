export class checkoutOrder {
    createOrderForm() {
        const RgxEmail =
            /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
        const RgxCardNum =
            /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/;
        const RgxCvv = /^([0-9]){3}/;

        const body = document.querySelector('body') as HTMLBodyElement;
        const blur_bg = body.appendChild(document.createElement('div'));
        blur_bg.classList.add('blur_bg');
        const main_cart = document.querySelector('.main_cart') as HTMLElement;
        const main_prod = document.querySelector('.main_prod') as HTMLElement;
        const order_form = (main_cart || main_prod).appendChild(document.createElement('form')) as HTMLFormElement;
        order_form.classList.add('order_form');
        const client_name = order_form.appendChild(document.createElement('input')) as HTMLInputElement;
        client_name.classList.add('client_name');
        client_name.placeholder = 'Имя';
        client_name.type = 'text';
        const client_number_phone = order_form.appendChild(document.createElement('input')) as HTMLInputElement;
        client_number_phone.classList.add('client_number_phone');
        client_number_phone.placeholder = 'Номер телефона';
        client_number_phone.type = 'text';
        const client_adress = order_form.appendChild(document.createElement('input')) as HTMLInputElement;
        client_adress.classList.add('client_adress');
        client_adress.placeholder = 'Адрес';
        client_adress.type = 'text';
        const client_email = order_form.appendChild(document.createElement('input')) as HTMLInputElement;
        client_email.classList.add('client_email');
        client_email.placeholder = 'E-mail';
        client_email.type = 'E-mail';
        const client_card_number = order_form.appendChild(document.createElement('input')) as HTMLInputElement;
        client_card_number.classList.add('client_card_number');
        client_card_number.placeholder = 'Номер карты';
        client_card_number.type = 'text';
        const client_cvv = order_form.appendChild(document.createElement('input')) as HTMLInputElement;
        client_cvv.classList.add('client_cvv');
        client_cvv.placeholder = 'CVV';
        client_cvv.type = 'text';
        const client_valid_date = order_form.appendChild(document.createElement('input')) as HTMLInputElement;
        client_valid_date.classList.add('client_valid_date');
        client_valid_date.placeholder = 'Срок';
        client_valid_date.type = 'text';
        const submit_btn = order_form.appendChild(document.createElement('button')) as HTMLButtonElement;
        submit_btn.classList.add('submit_btn');
        submit_btn.textContent = 'ОК';
        submit_btn.addEventListener('click', () => {
            blur_bg.remove();
            order_form.remove();
        });
        blur_bg.addEventListener('click', () => {
            blur_bg.remove();
            order_form.remove();
        });
        client_email.oninput = () => {
            if (RgxEmail.test(client_email.value)) {
                client_email.style.borderColor = 'green';
            } else {
                client_email.style.borderColor = 'red';
            }
        };

        client_card_number.oninput = () => {
            if (RgxCardNum.test(client_card_number.value)) {
                client_card_number.style.borderColor = 'green';
            } else {
                client_card_number.style.borderColor = 'red';
            }
        };
        client_cvv.oninput = () => {
            if (RgxCvv.test(client_cvv.value)) {
                client_cvv.style.borderColor = 'green';
            } else {
                client_cvv.style.borderColor = 'red';
            }
        };
    }
}
