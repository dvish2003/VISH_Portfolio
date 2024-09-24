const menuIcon = document.querySelector('#menu-icon');
const navLinks = document.querySelector('.nav_list');


menuIcon.onclick =() =>{
    navLinks.classList.toggle('active')
}
