window.addEventListener('DOMContentLoaded', () => {
  const swiper = new Swiper('.carousel', {
    //autoplay:false,
    autoplay: { delay: 5000,},
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.pagination',
      type: 'bullets',
      clickable: true,
    }, 

    slidesPerView: 1,
    slidesPerGroup : 1,
    breakpoints: {
      500:{
        slidesPerView: 2,
        slidesPerGroup : 2,
      },
      1000: {
        slidesPerView: 3,
        slidesPerGroup : 3,
      },
      1200: {
        slidesPerView: 4,
        slidesPerGroup : 4,
      },
    }

  });
})