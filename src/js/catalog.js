export default function() {

	const priceSlider = document.getElementById('price-slider')
	const priceFrom = document.getElementById('price-from')
	const priceTo = document.getElementById('price-to')
	const priceMin = +document.getElementById('price-cont').getAttribute('data-min')
	const priceMax = +document.getElementById('price-cont').getAttribute('data-max')

	noUiSlider.create(priceSlider, {
		start: [priceMin, priceMax],
		connect: [true, false, true],
		padding: [0, 17],
		range: {
			'min': [priceMin],
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
		priceFrom.setAttribute('value', val[0])
		priceTo.setAttribute('value', val[1])
	})

	// priceFrom.addEventListener('keydown', function(ev) {
	// 	ev.preventDefault()
	// 	var down = +ev.key
	// 	var prev = priceFrom.value
	// 	var newVal = prev + down
	// 	if (newVal) {
	// 		priceFrom.setAttribute('value', newVal)
	// 		priceSlider.noUiSlider.set([newVal, null]);
	// 	}
	// })

	priceFrom.addEventListener('keydown', function(ev) {
		priceSlider.noUiSlider.set([priceFrom.value, null]);
	})

	priceTo.addEventListener('keydown', function(ev) {
		priceSlider.noUiSlider.set([null, priceTo.value]);
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
		sortBtn.classList.contains('active')
		? sortBtn.classList.remove('active')
		: sortBtn.classList.add('active')
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

}