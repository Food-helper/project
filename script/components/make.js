import {api} from "../components/Api.js";

const input = document.querySelector('.input_ingridients');
const query = input.textContent;



api.search(query)
    .then((res) => {
        console.log(res)
    })


    .catch((err) => {
        console.log(err);
    })
