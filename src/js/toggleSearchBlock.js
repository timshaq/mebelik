export default function() {

	const fakeSrchBtn = document.getElementById('toggleSearch')

	fakeSrchBtn.addEventListener('click', () => {
		header.classList.add('search')
		header.classList.remove('not-search')
		// var checkMisClick = function(ev) {
		// 	console.log('header')
		// 	console.log(ev.target)
		// 	const test = [
		// 		'header__search-input',
		// 		'header__search-submit',
		// 		'search-icon',
				
		// 	]
		// 	if (!ev.target.classList.contains(test[0]) || !ev.target.classList.contains(test[1]) || !ev.target.classList.contains(test[2]) ) {
		// 		header.classList.remove('search')
		// 		header.classList.add('not-search')
		// 		document.removeEventListener("keydown", checkMisClick);
		// 	}
		// }
		// document.addEventListener('click', checkMisClick)
	})

}