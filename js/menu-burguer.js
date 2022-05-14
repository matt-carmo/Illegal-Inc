// const menuBurguerIcon = document.querySelector('.fa-bars')
const menuBurguerDiv = document.querySelector('.menu-burguer')
// menuBurguerIcon.addEventListener('click', () => {
const pfvFunciona = document.querySelector('.section')
// })

const nav1Icon = document.querySelector('#nav-icon1')
nav1Icon.addEventListener('click', () => {
    nav1Icon.classList.toggle('open')
    menuBurguerDiv.classList.toggle('active')
})
 pfvFunciona.addEventListener('click', (e) => {
    if (e.target !==  nav1Icon) {
        menuBurguerDiv.classList.remove('active')
        nav1Icon.classList.remove('open')
    }})



// $(document).ready(function(){
// 	$('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').click(function(){
// 		$(this).toggleClass('open');
// 	});
// });