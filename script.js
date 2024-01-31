const btnIncrement = document.querySelector(".btn-increment");
const btnDecrement = document.querySelector(".btn-decrement");
const textValue = document.querySelector('h2');
const btnChange = document.querySelector('.btn-change');
const body = document.querySelector('body')

let counter = 0;

btnIncrement.addEventListener('click', function() {
counter+=100;
textValue.textContent = counter;
});

btnDecrement.addEventListener('click', function() {
counter-=100;
textValue.textContent = counter;
});

body.addEventListener('click', function() {
    body.style.backgroundImage = 'url("img/logo2.jpg")';
});