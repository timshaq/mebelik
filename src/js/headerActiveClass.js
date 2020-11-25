export default function() {
	
	header.classList.remove('search')
	if (window.scrollY >= 200) {
		header.classList.add('active')
		header.classList.add('not-search')
	} else {
		header.classList.remove('active')
		header.classList.remove('not-search')
	}

}