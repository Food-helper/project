export class Api {
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

    getSubscriptionsInfo() {
        return fetch(`${this.baseUrl}/subscriptions`, {
            headers: this.headers,
        })
            .then((res) => {
                if (res.ok) {
                    return res.json();
                }
                return Promise.reject(`error${res.status}`);
            });
    }


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

    addNewSubscription(subId) {
        return fetch(`${this.baseUrl}/subscriptions`, {
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


    deleteNewSubscription(subId) {
        return fetch(`${this.baseUrl}/subscribtions/${id}`, {
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
}
;

/*fetch('https://example.com')
    .then((res) => {
        return res.json();
    })
    .then((data) => {
        console.log(data.user.name); // если мы попали в этот then, data — это объект
    })
    .catch((err) => {
        console.log('Ошибка. Запрос не выполнен: ', err);
    });*/