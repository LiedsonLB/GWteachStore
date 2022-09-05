const menuBtn = document.getElementById("menu");
const screen = document.getElementById("screen-main");
const loginClose = document.getElementById("close-login");
const loginForm = document.getElementById("container-login");
const nav = document.getElementsByClassName("nav");

menuBtn.addEventListener('click', () => {
    loginForm.classList.toggle('hide');
    screen.classList.toggle('blur');
})
loginClose.addEventListener('click', () => {
    loginForm.classList.toggle('hide');
    screen.classList.toggle('blur');
})