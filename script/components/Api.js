import {config} from '../constants.js';

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

    addNewFavourite(subId) {
        return fetch(`${this.baseUrl}/favorites`, {
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

    addNewAuthor(authorId) {
        return fetch(`${this.baseUrl}/subscriptions`, {
            method: 'POST',
            headers: this.headers,
            body: JSON.stringify({
                id: authorId
            }),
        })
            .then((res) => {
                if (res.ok) {
                    return res.json();
                }
                return Promise.reject(`error${res.status}`);
            });
    }

    deleteNewAuthor(authorId) {
        return fetch(`${this.baseUrl}/purchases/${authorId}`, {
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


//а тут все прекрасно!
    deleteNewFavourite(subId) {
        return fetch(`${this.baseUrl}/favorites/${subId}`, {
            method: 'DELETE',
            headers: this.headers,
            body: JSON.stringify({
                id: subId
            })

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


export const api = new Api(config);