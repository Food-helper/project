import {api} from "../components/Api.js";
import {
    token
} from '../constants.js';

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