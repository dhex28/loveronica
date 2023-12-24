// Toggle Hamburger Icon
// (() => {const ul = document.querySelector('.header-nav-lists');

// const hamburger = document.querySelector('.header-hamburger-icon');

// hamburger.addEventListener('click', () => {
// ul.classList.toggle('show');
// hamburger.classList.toggle('show');
// })})()


// toggleHamburger.js
// export default function () {
//     const ul = document.querySelector('.header-nav-lists');
//     const hamburger = document.querySelector('.header-hamburger-icon');

//     hamburger.addEventListener('click', () => {
//         ul.classList.toggle('show');
//         hamburger.classList.toggle('show');
//     });
// }

document.addEventListener('DOMContentLoaded', () => {
    const ul = document.querySelector('.header-nav-lists');
    const hamburger = document.querySelector('.header-hamburger-icon');

    if (ul && hamburger) {
        hamburger.addEventListener('click', () => {
            ul.classList.toggle('show');
            hamburger.classList.toggle('show');
        });
    }
});

