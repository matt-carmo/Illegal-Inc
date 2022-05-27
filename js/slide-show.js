

const splider = document.querySelectorAll('.splide')

splider.forEach(element => {
  var splide = new Splide(element, {
    perPage: 3,
    cover: true,
    
    lazyLoad: 'nearby',
    autoScroll:true,
    
    type   : 'loop',
    drag   : 'free',
    focus  : 'center',
    autoScroll: {
      speed: 1,
    },  
    
  
  });
  splide.mount();

  

if (window.matchMedia("(max-width: 600px)").matches) {
  splide.destroy()
 
  var splide1 = new Splide(element, {
    perPage: 1,
    cover: true,
    lazyLoad: 'nearby',    
  });
  splide1.mount();
  
} 
else {

}

  
  

});








