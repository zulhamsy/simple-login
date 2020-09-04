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
        init,
        login,
        register,
        checkUser
    }

    function init() {
        // get data from API
        http.get('user')
            // show data to UI
            .then(data => UI.showToTable(data));
    }

    function _redirect(param, link) {
        if (param) {
            window.location.href = link;
        } else {
            console.log('login failed, invalid username or password!');
        }
    }

    async function login(data) {
        // check data against db
        const loginData = await http.get(`user?username=${data.user}`);
        // check password
        if (loginData.length == 1) {
            _redirect(data.pass == loginData[0].password, 'home.html');
        }
    }

    function register(data) {
        console.log(data);
    }

    function checkUser(username) {
        console.log(username);
    }
})();