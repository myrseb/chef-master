const burgerButon = document.querySelector('#burger-button');
const menu = document.querySelector('#menu');

burgerButon.addEventListener('click', () => {
    menu.classList.toggle('hidden');
})