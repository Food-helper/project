import {
  api
} from "../components/Api.js";
import {
  addButtons
} from '../constants.js';
import {
  selectors
} from '../selectors.js';

//при нажатии на кнопку меняет классы и блокирует ее
const handleClickPurchase = (evt) => {
  evt.target.classList.toggle(selectors.addButton);
  evt.target.classList.toggle(selectors.addButtonActive);
  evt.target.disabled = true;
}

function addPurchase(evt, id) {
  api.addNewPurchase(evt, id)
    .then((res) => {
      console.log(res);
      handleClickPurchase(evt);
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

addButtons.forEach(button => {
  const id = button.getAttribute('data-id');
  button.addEventListener("click", (evt) => {
    addPurchase(evt, id);
  });
});