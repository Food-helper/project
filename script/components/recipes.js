<<<<<<< HEAD
import {Api} from "../components/Api.js";

export const token = {
    baseUrl: 'http://www.buymebuyme.xyz',
    headers: {
        'Content-Type': 'application/json'
    },
};


export const api = new Api(token);
const purchase = document.querySelector('.buttons__add-button_recipe');
console.log(purchase)
const id = purchase.getAttribute('data-id');
console.log(id);


api.addNewPurchase(id)
    .then((res) => {
        console.log(res)
    })


    .catch((err) => {
        console.log(err);
    })
=======
import {stars} from '../constants.js';
// import {api} from '../components/Api.js';
import {selectors} from '../selectors.js';

const handleClick = (evt) => {
  evt.target.classList.toggle(selectors.tooltip);
}

stars.forEach(star => {
  star.addEventListener('click', handleClick);
})
>>>>>>> f0e021c... коммит для rebase
