import { App } from './app';

function editAction(e) {
    if (e.target.id == 'edit') {
        console.log('edited');
    }
    e.preventDefault;
}

function deleteAction(e) {
    if (e.target.id == 'del') {
        console.log('deleted');
    }
    e.preventDefault;
}

// App initialization
App.init();

// User click edit button
document.querySelector('tbody').addEventListener('click', editAction);

// User click delete button
document.querySelector('tbody').addEventListener('click', deleteAction);