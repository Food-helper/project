import {Api} from "../components/Api.js";

export const token = {
    baseUrl: 'http://www.buymebuyme.xyz',
    headers: {
                'Content-Type': 'application/json'
    },
};


export const api = new Api(token);
const purchase = document.querySelector('buttons__add-button_recipe');
const id = purchase.getAttribute('id');

api.getPurchasesInfo()
    .then((data) => {
        console.log(data);

    })
    .catch((err) => {
        console.log(err);
    });

api.addNewPurchase(id)
    .then((res) => {
        console.log(res)
            })

    .catch((err) => {
        console.log(err);
    })
