const burger = document.querySelector('#burger');
const navbar = document.querySelector('#nav-link');

burger.addEventListener('click', function() {
    navbar.classList.toggle('is-active');
});