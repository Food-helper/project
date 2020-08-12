import {Api} from "../components/Api.js";

export const token = {
    baseUrl: 'http://www.buymebuyme.xyz',
    headers: {
        'Content-Type': 'application/json'
    },
};


export const api = new Api(token);
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
