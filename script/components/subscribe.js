import {
	api
} from "../components/Api.js";
import {
	selectors
} from '../selectors.js';
import {
  buttonsSubscribe
} from '../constants.js';

const handleClick = (evt) => {
  const id = evt.target.getAttribute('data-id');
  
}

buttonsSubscribe.forEach(button => {
  button.addEventListener('click', (evt) => handleClick(evt))
}
  )
