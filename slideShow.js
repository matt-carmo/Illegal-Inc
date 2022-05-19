var splide = new Splide('.splide', {
  perPage: 4,
  cover: true,
  height: '30rem',
  lazyLoad: 'nearby',

});

if (window.matchMedia("(max-width: 600px)").matches) {
  var splide = new Splide('.splide', {
    perPage: 1,
    cover: true,
    height: '30rem',
    lazyLoad: 'nearby',
    
  });
  splide.mount();
  
} 
else {

}


splide.mount();