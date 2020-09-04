import { App } from './app';

function registUser(e) {
    // get login info
    const login = {
        user: document.querySelector('#user-regis').value,
        pass: document.querySelector('#pass-regis').value
    }

    // initialize register subroutine
    if (login.user && login.pass) App.register(login);
    e.preventDefault();
}

function checkUsername(e) {
    const value = e.target.value;
    let userValid;
    if (value) {
        userValid = App.checkUser(value);
    }
}

// user submit register info
document.querySelector('form').addEventListener('submit', registUser);

// user after typing username in form (check if there is existing username in DB)
document.querySelector('#user-regis').addEventListener('blur', checkUsername);