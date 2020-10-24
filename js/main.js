console.log("Файл JS подключен");

let menuToggle = document.querySelector('#menu-toggle');
let menu = document.querySelector('.sidebar')


console.log(menuToggle);

menuToggle = addEventListener('click', function (event) {
   console.log("Клик по кнопке меню")
   event.preventDefault();
   menu.classList.toggle('visible');
})