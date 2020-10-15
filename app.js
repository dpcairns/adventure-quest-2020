// import functions and grab DOM elements
import { saveUser } from './storage-utils.js';

const form = document.querySelector('form');

// initialize state

// set event listeners to update state and DOM
form.addEventListener('submit', (e) => {
    e.preventDefault();

    const data = new FormData(form);


    const user = {
        name: data.get('name'),
        class: data.get('class'),
        gold: 0,
        hp: 35,
        completed: {}
    };

    const stringyUser = JSON.stringify(user);

    localStorage.setItem('USER', stringyUser);
    // go to local storage in browser to see if this worked
});