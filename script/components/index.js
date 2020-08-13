import {Api} from "../components/Api.js";

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


function addPurchase  ()  {

    api.addNewPurchase(id)
        .then((res) => {
            console.log(res)
        })
        .catch((err) => {
            console.log(err);
        })
}


api.getPurchasesInfo()
    .then((data) => {
        console.log(data);

    })
    .catch((err) => {
        console.log(err);
    });


purchaseAddButton.addEventListener("click", () => addPurchase());
