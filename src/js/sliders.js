export default function() {
	console.log('sliders')

const desktop = 1200;
const tablet = 768;
const mobile = 0;



const previewSlider = new Swiper('.preview.swiper-container', {
	width: 1170,
	slidesPerView: 1,
	loopedSlides: 1,
	spaceBetween: 50,
	loop: true,
	autoplay: {
		delay: 3000,
		disableOnInteraction: false,
	},
	pagination: {
		el: '.swiper-pagination',
		type: 'bullets',
		clickable: true,
	},
	breakpoints: {
		0: {
			width: 320,
			spaceBetween: 0,
			pagination: {
				el: null,
			},
		},
		768: {
			width: 708,
			autoplay: false,
		},
		1200: {
			width: 1170,
			autoplay: false,
		},

	},

})

var productLinelist = document.querySelectorAll('.product-line');
// productLinelist = Array.prototype.slice.call(productLinelist);

productLinelist.forEach(line => {
	const slider = line.querySelector('.product-line__slider .swiper-container');
	const nextBtn = line.querySelector('.slider-controls__btn.next');
	const prevBtn = line.querySelector('.slider-controls__btn.prev');
	const productLineSliders = new Swiper(slider, {
		width: 1170,
		slidesPerView: 4,
		slidesPerColumn: 1,
		spaceBetween: 30,
		allowTouchMove: false,
		navigation: {
			nextEl: nextBtn,
			prevEl: prevBtn,
			hideOnClick: true,
		},
		breakpoints: {
			0: {
				width: 320,
				slidesPerView: 2,
				spaceBetween: 10,
				allowTouchMove: true,
			},
			768: {
				width: 708,
				slidesPerView: 3,
			},
			1200: {
				width: 1170,
			},

		},
	})
})



const productLineInsideSliders = new Swiper('.product-line__phcont-slider .swiper-container', {
  slidesPerView: 1,
  slideClass: 'swiper-slide-inside',
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
	breakpoints: {
		0: {
			allowTouchMove: false,
		},
	},
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