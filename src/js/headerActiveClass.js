export default function() {
	var arrowUp = document.getElementById('arrow-up');
	
	header.classList.remove('search')
	if (window.scrollY >= 200) {
		header.classList.add('active')
		header.classList.add('not-search')

		arrowUp.classList.add('active')
	} else {
		header.classList.remove('active')
		header.classList.remove('not-search')

		arrowUp.classList.remove('active')
	}

	const headerCatalogBtn = document.getElementById('toggle-catalog-btn')
	const headerNav = document.getElementById('header-nav')


	headerCatalogBtn.onclick = function(ev) {
		if (headerCatalogBtn.classList.contains('active')) {
			headerNav.classList.remove('active-pc')
			headerCatalogBtn.classList.remove('active')
		} else {
			headerNav.classList.add('active-pc')
			headerCatalogBtn.classList.add('active')
		}
	}

	arrowUp.addEventListener('click', () => window.scrollTo(0, 0))

}