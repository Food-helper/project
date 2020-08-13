
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
const recipe = document.querySelector('.card')
const purchaseAddButton = recipe.querySelector('.buttons__add-button');
const id = purchaseAddButton.getAttribute('data-id');

//добавляет карточку в массив
function addPurchase  ()  {


    api.addNewPurchase(id)
        .then((res) => {
            console.log(res)
        })
        .catch((err) => {
            console.log(err);
        })
        //-добавить кнопке disabled
}

//забирает массив покупок и показывает что там лежит
api.getPurchasesInfo()
    .then((data) => {
        console.log(data);

    })
    .catch((err) => {
        console.log(err);
    });


purchaseAddButton.addEventListener("click", () => addPurchase());



  //тут манипуляции с кнопкой "Добавить в покупки"
  const handleClickPurchase = (evt) => {
    evt.target.classList.toggle(selectors.addButton);
  }

  addButtons.forEach(purchase => {
    purchase.addEventListener('click', handleClickPurchase);
  })

