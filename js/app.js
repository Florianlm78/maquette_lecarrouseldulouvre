// MENU BURGER

var btn = document.querySelector('.toggle_btn');
var nav = document.querySelector('.nav');
var body = document.querySelector('body');

btn.onclick = function navbar(){
    nav.classList.toggle('nav_open');
}