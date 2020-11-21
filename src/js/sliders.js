export default function() {
	console.log('sliders')





const previewSlider = new Swiper('.preview.swiper-container', {
  slidesPerView: 1,
  loopedSlides: 1,
  spaceBetween: 50,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  }

})

const productDetailSliders = new Swiper('.product-line__phcont-slider.swiper-container', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  }

})

const brandsSlider = new Swiper('.brands__slider', {
  slidesPerView: 6,
  slidesPerColumn: 1,
  navigation: {
    nextEl: '.brands .slider-controls .slider-controls__btn.next',
    prevEl: '.brands .slider-controls .slider-controls__btn.prev',
    hideOnClick: true,
  },

})

const salesSlider = new Swiper('.sales .sales__col.slider .swiper-container', {
  slidesPerView: 2,
  spaceBetween: 30,
  navigation: {
    nextEl: '.sales .sales__col.slider .sales__slider-arrow.next',
    prevEl: '.sales .sales__col.slider .sales__slider-arrow.prev',
    hideOnClick: true,
  },

})










}