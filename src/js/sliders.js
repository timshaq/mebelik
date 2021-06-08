export default function() {
	console.log('sliders')

const desktop = 1200;
const tablet = 768;
const mobile = 0;

const previewSlider = new Swiper('.preview.swiper-container', {
	slidesPerView: 1,
	loopedSlides: 1,
	spaceBetween: 1000,
	loop: true,
	pagination: {
		el: '.swiper-pagination',
		type: 'bullets',
		clickable: true,
	},
	breakpoints: {
		320: {
			pagination: {
				el: null,
			},
		},
		768: {
			autoplay: false,
		},
		1200: {
			autoplay: false,
		},

	},

})
const newsSlider = new Swiper('.news .news__row.swiper-container', {
	watchOverflow: true,
	slidesPerView: 4,
	spaceBetween: 30,
	on: {
		imagesReady: function() {
			var height = this.height
			console.log('height')
			console.log(height)
			this.slides.forEach(slide => {
				console.log(slide)
				slide.style.height = `${height}px`
			})
		},
	},
	breakpoints: {
		320: {
			slidesPerView: 1.2,
			spaceBetween: 10,
		},
		420: {
			slidesPerView: 2,
			spaceBetween: 10,
		},
		650: {
			slidesPerView: 3,
		},
		1200: {
			slidesPerView: 4,
		},

	},

})


var productLinelist = document.querySelectorAll('.product-line');
productLinelist = Array.prototype.slice.call(productLinelist);

productLinelist.forEach(line => {
	const slider = line.querySelector('.product-line__slider .swiper-container');
	const nextBtn = line.querySelector('.slider-controls__btn.next');
	const prevBtn = line.querySelector('.slider-controls__btn.prev');
	const productLineSliders = new Swiper(slider, {
		slidesPerView: 4,
		slidesPerColumn: 1,
		spaceBetween: 30,
		allowTouchMove: false,
		watchOverflow: true,
		navigation: {
			nextEl: nextBtn,
			prevEl: prevBtn,
			hideOnClick: true,
		},
		breakpoints: {
			0: {
				slidesPerView: 2,
				spaceBetween: 10,
				allowTouchMove: true,
			},
			320: {
				slidesPerView: 2,
				spaceBetween: 10,
				allowTouchMove: true,
			},
			550: {
				slidesPerView: 3,
				spaceBetween: 10,
				allowTouchMove: true,
			},
			700: {
				width: 673,
				slidesPerView: 3.2,
				spaceBetween: 30,
			},
			735: {
				width: 708,
				slidesPerView: 3,
				spaceBetween: 30,
			},
			1200: {
				width: 1170,
				slidesPerView: 4,
				spaceBetween: 30,
			},

		},
	})
})



const productLineInsideSliders = new Swiper('.product-line__phcont-slider .swiper-container', {
  slidesPerView: 1,
  slideClass: 'swiper-slide-inside',
  lazy: true,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
    // dynamicBullets: true,
  },
	breakpoints: {
		0: {
			allowTouchMove: true,
			loop: true,
			slidesPerView: 1,
		},
	},
})


var simulateClick = function (elem) {
	// Create our event (with options)
	var evt = new MouseEvent('click', {
		bubbles: true,
		cancelable: true,
		view: window
	});
	// If cancelled, don't dispatch our event
	var canceled = !elem.dispatchEvent(evt);
};
// console.log(productLineInsideSliders)
productLineInsideSliders.forEach(slider => {
	slider.pagination.bullets.forEach( (el,ind) => {
		el.addEventListener('mouseover', function() {
			slider.slideTo(ind+1)
		})
	})
})


// const nl = document.querySelectorAll('.product-line__phcont-slider .swiper-pagination-bullet')
// const bulletList = Array.prototype.slice.call(nl);

// bulletList.forEach(bul => {
// 	bul.addEventListener('hover', function() {
//       simulateClick(this)
//     })
// })


const brandsSlider = new Swiper('.brands__slider', {
	slidesPerView: 6,
	slidesPerColumn: 1,
	navigation: {
		nextEl: '.brands .slider-controls .slider-controls__btn.next',
		prevEl: '.brands .slider-controls .slider-controls__btn.prev',
		hideOnClick: true,
	},
	breakpoints: {
		0: {
			allowTouchMove: true,
			slidesPerView: 1.8,
			spaceBetween: 60,
		},
		768: {
			slidesPerView: 4.35,
			spaceBetween: 60,
		},
		1200: {
			slidesPerView: 6,
			spaceBetween: 80,
		},
	},

})

const salesSlider = new Swiper('.sales .sales__col.slider .swiper-container', {
	slidesPerView: 2,
	spaceBetween: 30,
	breakpoints: {
		320: {
			allowTouchMove: true,
			slidesPerView: 1.2,
			spaceBetween: 10,
		},
		480: {
			allowTouchMove: true,
			slidesPerView: 1.5,
			spaceBetween: 10,
		},
		650: {
			slidesPerView: 1.9,
		},
		768: {
			slidesPerView: 2,
			spaceBetween: 30,
			navigation: {
				nextEl: '.sales .slider-controls .slider-controls__btn.next',
				prevEl: '.sales .slider-controls .slider-controls__btn.prev',
				hideOnClick: true,
			},
		},
		1200: {
			slidesPerView: 2,
			navigation: {
				nextEl: '.sales .sales__col.slider .sales__slider-arrow.next',
				prevEl: '.sales .sales__col.slider .sales__slider-arrow.prev',
				hideOnClick: true,
			},
		},
	},

})




}