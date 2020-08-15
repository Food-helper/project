
import { api } from "../components/Api.js";
import {
  ingridientInput,
  amountInput,
  ingridientSpan,
  addIngridients,
} from "../constants.js";

const query = ingridientInput.textContent;

api
  .search(query)
  .then((res) => {
    console.log(res);
    //создаем в контейнере с id result список ul с перечислением ингридиентов
    let ingridientsList = "";
    for (let i = 0; i < res.length; i++) {
      ingridientsList +=
        "<li>" + res[i].title + "</li>";   
    }

    document.getElementById("ingridient-result").innerHTML = ingridientsList;
    
    //для каждого элемента - если он не содержит значения инпута, то он скрывается классом hide
    //запускается при любом изменении инпута - так что если буква появилась - он появляется
    let array = Object.values(document.querySelectorAll(".select li"));
    console.log(array);

    ingridientInput.oninput = function () {
      let val = this.value.trim(); //значение инпута без пробелов
      
      if (val != "") {
          console.log(val);
        array.forEach((elem) => {
          if (elem.innerHTML.toLowerCase().search(val) == -1) {
            elem.classList.add("hide");
          } else {
            elem.classList.remove("hide");
            // меняет весовые значения НЕ ОТТЕСТИРОВАЛА, ТАК КАК ЛОГИКА ЗАВЯЗАНА НА 
            //МАССИВ, А НЕ РЕС
            // ingridientSpan.textContent = res(
            //   elem.innerText.search(val)
            // ).dimension;
          }
        });
      } else {
        array.forEach((elem) => {
          elem.classList.remove("hide");
        });
      }; 
      //это чтоб запомнить вводимое значение, тут я сомневаюсь
      ingridientInput.value = val;
    };

    ingridientInput.addEventListener('focus', () => {
        document.getElementById("ingridient-result").classList.toggle('select_hidden');
    })

    ingridientInput.addEventListener('blur', () => {
        document.getElementById("ingridient-result").classList.toggle('select_hidden');
    })

    amountInput.onblur = function () {
      amountInput.value = this.value;
    };
    addIngridients.addEventListener("click", () => {
      //  КОПИРУЕТ БЛОК ИНПУТС И ВСТАВЛЯЕТ В НИЗ БЛОКА ИНПУТ-БЛОКС (ДОБАВЛЯЕТ 2 ИНПУТА)
      // НАДО ТЕСТИРОВАТЬ!
      document
        .querySelector("#inputs")
        .cloneNode(true)
        .appendTo(document.querySelector(".input-block"));
    });
  })

  .catch((err) => {
    console.log(err);
  });
