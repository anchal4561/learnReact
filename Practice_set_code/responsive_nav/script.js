
const navbar = document.querySelector('.navbar-container');
const navbarItems = document.querySelector('.navbar-items');
const burger = document.querySelector('.burger');

burger.addEventListener('click', () => {
    navbarItems.classList.toggle('show');
});