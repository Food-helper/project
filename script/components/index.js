import {
  api
} from "../components/Api.js";
import {
  addButtonsFavourites
} from '../constants.js';
import {
  selectors
} from '../selectors.js';


//здесь все прекрасно работает, не трогать без необходимости!
//при нажатии на кнопку меняет классы и блокирует ее
const handleClickPurchase = (evt) => {
  evt.target.classList.toggle(selectors.addButtonFavourite);
  evt.target.classList.toggle(selectors.addButtonActive);
  evt.target.disabled = true;
}

function addPurchase(evt) {
  const id = evt.target.getAttribute('data-id');
  api.addNewPurchase(id)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    })
    handleClickPurchase(evt);
  evt.target.innerHTML =  "Рецепт добавлен";
}

api.getPurchasesInfo()
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });

addButtonsFavourites.forEach(button => {
  button.addEventListener("click", (evt) => addPurchase(evt));
});