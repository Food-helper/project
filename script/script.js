import {Api} from "../components/Api.js";

export const token = {
    baseUrl: 'http://www.buymebuyme.xyz/',

};
console.log('a');
export const api = new Api(token);

api.getCardsInfo();
