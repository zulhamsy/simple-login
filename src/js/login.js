import { App } from './app';

function loginAction(e) {
    // get login info
    const login = {
        user: document.querySelector('#user-login').value,
        pass: document.querySelector('#pass-login').value
    }

    // initialize login subroutine
    if (login.user && login.pass) App.login(login);
    e.preventDefault();
}

// user submit login info
document.querySelector('form').addEventListener('submit', loginAction);