import {Api} from "../components/Api.js";

export const token = {
    baseUrl: 'http://www.buymebuyme.xyz',
    headers: {
        'Content-Type': 'application/json'
    },
};


export const api = new Api(token);
const deletePurchase = document.querySelector('.list__delete');
console.log(deletePurchase)
const id = deletePurchase.getAttribute('data-id');
console.log(id);


api.deleteNewPurchase(id)
    .then((res) => {
        console.log(res)
    })


    .catch((err) => {
        console.log(err);
    })
