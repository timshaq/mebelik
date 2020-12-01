export default function() {

	const itemNodeList = document.querySelectorAll('.product-description__item');
	const itemsList = Array.prototype.slice.call(itemNodeList);

	const tabsNodeList = document.querySelectorAll('.product-description__tabs-title');
	const tabsList = Array.prototype.slice.call(tabsNodeList);

	const titleMobNodeList = document.querySelectorAll('.product-description__item-title');
	const titleMobList = Array.prototype.slice.call(titleMobNodeList);

	tabsList.forEach((tab, i) => {
	const tabsList2 = tabsList;
		tab.addEventListener('click', function() {
			tabsList2.forEach(tab2 => {
				tab2.classList.remove('active')
			})
			tabsList2[i].classList.add('active')

			itemsList.forEach(tab2 => {
				tab2.classList.remove('active')
			})
			itemsList[i].classList.add('active')


		})
	})

	titleMobList.forEach((title, i) => {
		title.addEventListener('click', function() {
			itemsList[i].classList.contains('active-mob')
			? itemsList[i].classList.remove('active-mob')
			: itemsList[i].classList.add('active-mob')

		})
	})

	const galleryThumbEl = document.querySelector('.product-preview .gallery-thumbs')
	const galleryTopEl = document.querySelector('.product-preview .gallery-top')
	
	const btnNextEl = document.querySelector('.product-preview .gallery-top .swiper-button-next')
	const btnPrevEl = document.querySelector('.product-preview .gallery-top .swiper-button-prev')

	var galleryThumbs = new Swiper(galleryThumbEl, {
		breakpoints: {
			320: {
				init: false,
			},
			699: {
				init: true,
				spaceBetween: 55,
				slidesPerView: 5,
				freeMode: true,
				watchSlidesVisibility: true,
				watchSlidesProgress: true,
			},
		},
	});

	var galleryTop = new Swiper(galleryTopEl, {
		spaceBetween: 0,
		slidesPerView: 1,
		breakpoints: {
			320: {
				pagination: {
					el: '.product-preview .gallery-top .swiper-pagination',
					type: 'bullets',
				},
			},
			699: {
				thumbs: {
					swiper: galleryThumbs
				},
				navigation: {
					nextEl: btnNextEl,
					prevEl: btnPrevEl,
				},
			},
		},
	});

}