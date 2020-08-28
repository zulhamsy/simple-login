import { http } from './vendor/easyHttp';

// UI Constructor
const UI = (function () {
    return {
        showToTable
    }

    function showToTable(data) {
        let html = '';
        data.forEach(el => {
            html += `
                <tr>
                    <th>1</th>
                    <th>${el.username}</th>
                    <th><a id="edit" href="#">edit</a> | <a id="del" href="#">delete</a></th>
                </tr>
            `;
        });
        document.querySelector('tbody').innerHTML = html;
    }
})();

// App Constructor
export const App = (function () {
    return {
        init
    }

    function init() {
        // get data from API
        http.get('user')
            // show data to UI
            .then(data => UI.showToTable(data));
    }
})();