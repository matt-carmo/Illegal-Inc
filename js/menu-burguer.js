const menuBurguerIcon = document.querySelector('.fa-bars')
const menuBurguerDiv = document.querySelector('.menu-burguer')
menuBurguerIcon.addEventListener('click', () => {
    menuBurguerDiv.classList.toggle('active')
    menuBurguerIcon.classList.toggle('active')
})