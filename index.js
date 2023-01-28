const navBar = document.querySelector('.navbar');
const container = document.querySelector('.container');



function openMenu() {
    // console.log(navBar)
    navBar.style.visibility = 'visible';
    // container.classList.add('overlay');

}

function closeMenu() {
    // console.log(navBar)
    navBar.style.visibility = 'hidden';
    // container.classList.remove('overlay');
}