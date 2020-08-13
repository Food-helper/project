import {Api} from "../components/Api.js";

export const token = {
    baseUrl: 'http://www.buymebuyme.xyz',
    headers: {
        'Content-Type': 'application/json'
    },
};


export const api = new Api(token);
const input = document.querySelector('.input_ingridients');
const query = input.textContent;



api.search(query)
    .then((res) => {
        console.log(res)
    })


    .catch((err) => {
        console.log(err);
    })

const menuToggle = document.querySelector('.header__menu-toggle');
menuToggle.onclick = function () {
    if (menuToggle.checked) {
        console.log("checked")
        menuToggle.setAttribute('aria-pressed', true);
        menuToggle.setAttribute('aria-expanded', true);
    } else {

        console.log("not_checked")
        menuToggle.setAttribute('aria-pressed', false);
        menuToggle.setAttribute('aria-expanded', false);
    }
}