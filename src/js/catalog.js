export default function() {

	const priceSlider = document.getElementById('price-slider')
	if (!priceSlider) return
	const priceFrom = document.getElementById('price-from')
	const priceTo = document.getElementById('price-to')
	const priceMin = +document.getElementById('price-cont').getAttribute('data-min')
	const priceMax = +document.getElementById('price-cont').getAttribute('data-max')

	const sizeInput = (""+priceMax).split("").length

	noUiSlider.create(priceSlider, {
		start: [priceMin+2000, priceMax-5000],
		connect: [true, false, true],
		padding: [0, 17],
		range: {
			'min': [0],
			'max': [priceMax]
		},
		format: {
			to: function (value) {
				return Math.round(+value);
			},
			from: function (value) {
				return Math.round(+value);
			}
		},
	});

	priceSlider.noUiSlider.on('update', function(val) {
		priceFrom.value = val[0]
		priceTo.value = val[1]
	})

	priceFrom.addEventListener('input', function(ev) {
		if (priceFrom.value.length > sizeInput) {
			priceFrom.value = +priceFrom.value.substring(0, priceFrom.value.length - (priceFrom.value.length - sizeInput))
		}
		if (priceFrom.value > priceMax) priceFrom.value = priceMax;
		if (priceFrom.value < 1) priceFrom.value = priceMin;
		
		priceSlider.noUiSlider.set([priceFrom.value, null])
	})

	priceTo.addEventListener('input', function(ev) {
		if (priceTo.value.length > sizeInput) {
			priceTo.value = +priceTo.value.substring(0, priceTo.value.length - (priceTo.value.length - sizeInput))
		}
		if (priceTo.value > priceMax) priceTo.value = priceMax;
		if (priceTo.value < 1) priceTo.value = priceMin;
		
		priceSlider.noUiSlider.set([null, priceTo.value])
	})


	const filterBtn = document.getElementById('filter-btn')
	const sortBtn = document.getElementById('sort-btn')
	const filterClose = document.getElementById('filter-close')
	const filter = document.getElementById('filter')

	const html = document.getElementById('html')

	function disableScroll() {
		html.style.overflowX = 'hidden';
		html.style.overflowY = 'hidden';
	};

	function enableScroll() {
		html.style.overflowX = 'hidden';
		html.style.overflowY = 'scroll';
	};

	function closeEl(el) {
		el.classList.remove('open');
		enableScroll();
	}

	function openEl(el) {
		el.classList.add('open');
		disableScroll();
	}

	filterBtn.addEventListener('click', () => openEl(filter))
	filterClose.addEventListener('click', () => closeEl(filter))
	sortBtn.addEventListener('click', function() {
		if (sortBtn.classList.contains('active')) {
			sortBtn.classList.remove('active')
			enableScroll()
		} else {
			disableScroll()
			sortBtn.classList.add('active')
		}
	})

	const filterItemsNL = document.querySelectorAll('.filter__item');
	const filterItems = Array.prototype.slice.call(filterItemsNL);

	const filterTitleItemsNL = document.querySelectorAll('.filter__item-title');
	const filterTitleItems = Array.prototype.slice.call(filterTitleItemsNL);

	filterTitleItems.forEach((item, i) => {
		item.addEventListener('click', function() {
			filterItems[i].classList.contains('hide')
			? filterItems[i].classList.remove('hide')
			: filterItems[i].classList.add('hide')
		})
	})

	filterItems.forEach((item, i) => {
		const moreBtn = item.querySelector('.filter__item-more-link')
		if (moreBtn) {
			moreBtn.addEventListener('click', function() {
				if (item.classList.contains('full')) {
					item.classList.remove('full')
					moreBtn.innerText = 'Показать еще'
				} else {
					item.classList.add('full')
					moreBtn.innerText = 'Скрыть'
				}

			})
		}
	})


}