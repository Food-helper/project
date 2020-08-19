import {
    api
} from "../components/Api.js";
import {
    authorSubscribe,
} from '../constants.js';
import {
    selectors
} from '../selectors.js';

function deleteAuthor(evt) {
    const id = evt.target.getAttribute('data-id');
    api.deleteNewAuthor(id)
        .then((res) => {
            console.log(res);
            evt.target.disabled = true;

        })
        .catch((err) => {
            console.log(err);
        })
    evt.target.disabled = true;
}



authorSubscribe.forEach(buttonSubscribe => {
    buttonSubscribe.addEventListener('click', deleteAuthor);
})