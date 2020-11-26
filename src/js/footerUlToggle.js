export default function() {
	
	const footerUlNodeList = document.querySelectorAll('.navigation__link-list');
	const footerUlList = Array.prototype.slice.call(footerUlNodeList);

	footerUlList.forEach((list, i) => {
		list.addEventListener('click', function() {
			footerUlList[i].classList.contains('open')
			? footerUlList[i].classList.remove('open')
			: footerUlList[i].classList.add('open')
			footerUlList.forEach((ul, uli) => {
				if (uli != i) {
					ul.classList.remove('open')
				}
			})
		})
	})


}