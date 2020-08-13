import {
    api
} from "../components/Api.js";
import {
    stars,
    addButtons,
    token
} from '../constants.js';
import {
    selectors
} from '../selectors.js';

const purchase = document.querySelector('.buttons__add-button');
const id = purchase.getAttribute('data-id');

const subscribe = document.querySelector('.tooltip');
const subId = subscribe.getAttribute('data-id');
//требует исправлений как в  index.js и subscribe.js

api.addNewPurchase(id)
    .then((res) => {
        console.log(res)
    })


    .catch((err) => {
        console.log(err);
    })



api.addNewSubscription(subId)
    .then((res) => {
        console.log(res)
    })


    .catch((err) => {
        console.log(err);
    })

api.deleteNewSubscription(subId)
    .then((res) => {
        console.log(res)
    })


    .catch((err) => {
        console.log(err);
    })

//тут манипуляции со звездой
const handleClick = (evt) => {
    evt.target.classList.toggle(selectors.tooltip);
}

stars.forEach(star => {
    star.addEventListener('click', handleClick);
})

//тут манипуляции с кнопкой "Добавить в покупки"
const handleClickPurchase = (evt) => {
    evt.target.classList.toggle(selectors.addButton);
}

addButtons.forEach(purchase => {
    purchase.addEventListener('click', handleClickPurchase);
})