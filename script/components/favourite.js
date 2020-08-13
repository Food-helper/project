import {
	api
} from "../components/Api.js";
import {
	stars,
	addButtons
} from '../constants.js';
import {
	selectors
} from '../selectors.js';

const addFavouritePurchase = document.querySelector('.tooltip');

console.log(addFavouritePurchase)
const subId = addFavouritePurchase.getAttribute('data-id');
console.log(subId);

api.addNewSubscription(subId)
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