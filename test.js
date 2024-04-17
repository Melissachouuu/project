var swiper = new Swiper(".mySwiper", {
    effect: 'coverflow',
    slidesPerView: 1.5,
    loop: true,
    centeredSlides: true,
    coverflowEffect: {
        depth: 200,
        rotate: 30,
        stretch: 0,
        slideShadows: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });