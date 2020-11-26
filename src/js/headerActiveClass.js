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

}