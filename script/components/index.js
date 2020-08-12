import {
  Api
} from "../components/Api.js";
import {
  addButtons
} from '../constants.js';
import {
  selectors
} from '../selectors.js';

export const token = {
  baseUrl: 'http://www.buymebuyme.xyz',
  headers: {
    'Content-Type': 'application/json'
  },
};


export const api = new Api(token);
const purchase = document.querySelector('.buttons__add-button');
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

api.getPurchasesInfo()
  .then((data) => {
    console.log(data);

  })
  .catch((err) => {
    console.log(err);
  });

  //тут манипуляции с кнопкой "Добавить в покупки"
  const handleClickPurchase = (evt) => {
    evt.target.classList.toggle(selectors.addButton);
  }

  addButtons.forEach(purchase => {
    purchase.addEventListener('click', handleClickPurchase);
  })