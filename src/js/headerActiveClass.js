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

	arrowUp.addEventListener('click', () => window.scrollTo(0, 0))

	const headerCatalogBtn = document.getElementById('catalog-btn')
	const headerNav = document.getElementById('header-nav')

	headerCatalogBtn.addEventListener('click', function(ev) {

		console.log(ev.target)
		console.log('click catalog')
		if (headerCatalogBtn.classList.contains('active')) {
			headerNav.classList.remove('active-pc')
			headerCatalogBtn.classList.remove('active')
		console.log('true')
		} else {
			headerNav.classList.add('active-pc')
			headerCatalogBtn.classList.add('active')
		console.log('false')
		}
	})

}