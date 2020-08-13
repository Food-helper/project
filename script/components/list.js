import {api} from "../components/Api.js";

const deletePurchases = document.querySelectorAll('.list__delete');

deletePurchases.forEach(button => {
    const id = button.getAttribute('data-id');
    button.addEventListener('click', () => {
        api.deleteNewPurchase(id)
        .then((res) => {
            console.log(res)
        })
        .catch((err) => {
            console.log(err);
        });
    });
})


