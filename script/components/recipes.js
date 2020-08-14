import {
  api
} from "../components/Api.js";
import {
  stars,
  addButtons
} from '../constants.js';
import {
  selectors
} from '../selectors.js';

//const purchase = document.querySelector('.add-button');
//const id = purchase.getAttribute('data-id');

//const subscribe = document.querySelector('.tooltip');
//const subId = subscribe.getAttribute('data-id');

//тут манипуляции с кнопкой "Добавить в покупки"
const handleClickPurchase = (evt, sum) => { //при нажатии на кнопку меняет классы и блокирует ее
  evt.target.classList.toggle(selectors.addButton);
  evt.target.classList.toggle(selectors.addButtonActive);
  evt.target.disabled = true;
}
const star = document.querySelector('.tooltip');
const elemId = star.getAttribute('data-id');
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
}

api.getPurchasesInfo()
  .then((data) => {
console.log(data);
//этот код проходит по массиву и пишет имеющиеся id. Как связать id с атрибутом и покрасить звездочку?
//for (let i = 0; i<data.length; i++) {
 //   console.log(data[i].id)


  })
  .catch((err) => {
    console.log(err);
  });

addButtons.forEach(button => {
  button.addEventListener("click", (evt) => addPurchase(evt));
});

//тут манипуляции со звездой
//если кнопка активна - запрос на удаление, если пассивна - запрос на добавление
const handleClick = (evt) => {
  const subId = evt.target.getAttribute('data-id');
  console.log(subId);
  console.log(evt.target.classList.contains(selectors.tooltip))
  if (evt.target.classList.contains(selectors.tooltip)) {
    api.deleteNewSubscription(subId)
      .then((res) => {
        console.log(res)
      })
      .catch((err) => {
        console.log(err);
      });
  } else {
    api.addNewSubscription(subId)
      .then((res) => {
        console.log(res)
      })
      .catch((err) => {
        console.log(err);
      })
  };
  evt.target.classList.toggle(selectors.tooltip);
}

stars.forEach(star => {
  star.addEventListener('click', handleClick);
})