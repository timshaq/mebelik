export default function() {

	const getVW = () => {
		return (window.innerWidth > 0) ? window.innerWidth : screen.width;
	}
		const navLink = document.querySelectorAll('.header__nav-item')

	
		navLink.forEach(link => {
			var ul2 = link.querySelector('.header__more-list')
			console.log(ul2)
			link.addEventListener('click', function(ev) {
				
				if (getVW() === 320) {
					ev.preventDefault()
					if (ev.target === this || ev.target === this.children[0]) {
						link.classList.contains('open')
						? link.classList.remove('open')
						: link.classList.add('open')
					} else if (ev.target.classList.contains('header__more-list') || ev.target.classList.contains('header__more-list-title-link')) {
						ul2.classList.contains('open')
						? ul2.classList.remove('open')
						: ul2.classList.add('open')
					} else if (ev.target.classList.contains('header__more-link')) {
						document.location.href = ev.target.getAttribute('href');
					}
				}
			})
		})

}