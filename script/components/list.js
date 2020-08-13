import {api} from "../components/Api.js";
import {
    token
} from '../constants.js';

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
