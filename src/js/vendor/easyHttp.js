class easyHttp {
    constructor() {
        this.globalUrl = 'http://localhost:3000/';
    }

    async get(resource) {
        const url = `${this.globalUrl}${resource}`;
        const response = await fetch(url);
        const data = await response.json();
        return data;
    }

    async post(resource, submit) {
        const url = `${this.globalUrl}${resource}`;
        const response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(submit),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        });
        const data = await response.json();
        return data;
    }

    async put(resource, update) {
        const url = `${this.globalUrl}${resource}`;
        const response = await fetch(url, {
            method: 'PUT',
            body: JSON.stringify(update),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        });
        const data = await response.json();
        return data;
    }

    async del(resource) {
        const url = `${this.globalUrl}${resource}`;
        const response = await fetch(url, {
            method: 'DELETE'
        });
        const data = await response.json();
        return data;
    }
};

export const http = new easyHttp();