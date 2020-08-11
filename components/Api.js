export class Api {
    constructor(options) {
        this.baseUrl = options.baseUrl;
    }

    getCardsInfo() {
        return fetch(`http://www.buymebuyme.xyz/purchases`)
            .then((res) => {
                if (res.ok) {
                    console.log(res);
                    return res.json();
                }
                return Promise.reject(`error${res.status}`);
            });
    }


}