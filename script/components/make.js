<<<<<<< HEAD
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
            //меняет весовые значения
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
=======
import {
    api
} from "../components/Api.js";
import {
    ingridientInput, 
    amountInput,
    ingridientSpan,
    addIngridients
} from '../constants.js';

const query = ingridientInput.textContent;

api.search(query)
    .then((res) => {
        console.log(res);
        //создаем в контейнере с id result список ul с перечислением ингридиентов
        let ingridientsList = '<ul>';
        for (let i = 0; i < res.length; i++) {
            ingridientsList += "<li class='input_ingridients-list'>" + res[i].title + "</li>";
        }
        document.getElementById("ingridient-result").innerHTML = ingridientsList;
        //для каждого элемента - если он не содержит значения инпута, то он скрывается классом hide
        //запускается при любом изменении инпута - так что если буква появилась - он появляется
        ingridientInput.oninput = function () {
            let val = this.value.trim(); //значение инпута без пробелов
            if (val != "") {
                res.forEach(elem => {
                    if (elem.innerText.search(val) == -1) {
                        elem.classList.add('hide');
                    } else {
                        elem.classList.remove('hide');
                        //меняет весовые значения
                        ingridientSpan.textContent = res(elem.innerText.search(val)).dimension;
                    }
                })
            } else {
                res.forEach(elem => {
                    elem.classList.remove('hide');
                })
            };
            //это чтоб запомнить вводимое значение, тут я сомневаюсь
            ingridientInput.value = val;
        }
        amountInput.onblur = function () {
            amountInput.value = this.value;
        }
        addIngridients.addEventListener('click', () => {
            //  КОПИРУЕТ БЛОК ИНПУТС И ВСТАВЛЯЕТ В НИЗ БЛОКА ИНПУТ-БЛОКС (ДОБАВЛЯЕТ 2 ИНПУТА)
            // НАДО ТЕСТИРОВАТЬ!
            document.querySelector("#inputs")
            .cloneNode(true)
            .appendTo(document.querySelector('.input-block'))
        })

    })
>>>>>>> f329a3544a3ce2de68b2d4fcd2114a5df271b607

    ingridientInput.addEventListener('focus', () => {
        document.getElementById("ingridient-result").classList.toggle('select_hidden');
    })

<<<<<<< HEAD
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
=======
    .catch((err) => {
        console.log(err);
    });

// чекбоксы

const menuToggle = document.querySelector('.header__menu-toggle');
menuToggle.onclick = function () {
    if (menuToggle.checked) {
        console.log("checked")
        menuToggle.setAttribute('aria-pressed', true);
        menuToggle.setAttribute('aria-expanded', true);
    } else {

        console.log("not_checked")
        menuToggle.setAttribute('aria-pressed', false);
        menuToggle.setAttribute('aria-expanded', false);
    }
}


>>>>>>> f329a3544a3ce2de68b2d4fcd2114a5df271b607
