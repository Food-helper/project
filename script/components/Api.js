import {token} from '../constants.js';

class Api {
    constructor(options) {
        this.baseUrl = options.baseUrl;
        this.headers = options.headers;
    }

    getPurchasesInfo() {
        return fetch(`${this.baseUrl}/purchases`, {
            headers: this.headers,
        })
            .then((res) => {
                if (res.ok) {
                    return res.json();
                }
                return Promise.reject(`error${res.status}`);
            });
    }
//здесь все прекрасно работает, не трогать без необходимости!
    addNewPurchase(id) {
        return fetch(`${this.baseUrl}/purchases`, {
            method: 'POST',
            headers: this.headers,
            body: JSON.stringify({
                id: id
            }),
        })
            .then((res) => {
                if (res.ok) {
                    return res.json();
                }
                return Promise.reject(`error${res.status}`);
            });
    }

//здесь все прекрасно работает, не трогать без необходимости!
    deleteNewPurchase(id) {
        return fetch(`${this.baseUrl}/purchases/${id}`, {
            method: 'DELETE',
            headers: this.headers,

        })
            .then((res) => {
                if (res.ok) {
                    return res.json();
                }
                return Promise.reject(`error${res.status}`);
            });

    }
//тут что-то не так
    addNewSubscription(subId) {
        return fetch(`${this.baseUrl}/subscribtions/${subId}`, {
            method: 'POST',
            headers: this.headers,
            body: JSON.stringify({
                id: subId
            }),
        })
            .then((res) => {
                if (res.ok) {
                    return res.json();
                }
                return Promise.reject(`error${res.status}`);
            });
    }

//а тут все прекрасно!
    deleteNewSubscription(subId) {
        return fetch(`${this.baseUrl}/subscribtions/${subId}`, {
            method: 'DELETE',
            headers: this.headers,

        })
            .then((res) => {
                if (res.ok) {
                    return res.json();
                }
                return Promise.reject(`error${res.status}`);
            })
            .then((data) => data);

    }


    search(query) {
        return fetch(`${this.baseUrl}/ingredients/${query}`, {
            headers: this.headers,
        })
            .then((res) => {
                if (res.ok) {
                    return res.json();
                }
                return Promise.reject(`error${res.status}`);
            });
    }
}
;

export const api = new Api(token);