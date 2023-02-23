$('.owl-carousel').owlCarousel({
   
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})



const menu = document.querySelector('.menu');
const NavMenu = document.querySelector('.nav-menu');


console.log(menu);

menu.addEventListener('click', () => {
    menu.classList.toggle('ativo');
    NavMenu.classList.toggle('ativo');
    

})
