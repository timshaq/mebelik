export default function() {


const toggleDetail = document.getElementById('toggle-detail');
if (toggleDetail) {
	const contDetail = document.getElementById('detail-cont');
	const toggleShipment = document.getElementById('toggle-shipment-detail');
	const contShipment = document.getElementById('shipment-detail');

	toggleDetail.addEventListener('click', function() {
		if (contDetail.classList.contains('hidden')) {
			contDetail.classList.remove('hidden')
			toggleDetail.innerText = 'Скрыть'
		} else {
			contDetail.classList.add('hidden')
			toggleDetail.innerText = 'Показать все'
		}
	})

	toggleShipment.addEventListener('click', function() {
		if (contShipment.classList.contains('hidden')) {
			contShipment.classList.remove('hidden')
			toggleShipment.innerText = 'Скрыть'
		} else {
			contShipment.classList.add('hidden')
			toggleShipment.innerText = 'Показать все'
		}
	})

}

const toggleRowNL = document.querySelectorAll('.cabinet__order-row.toggle')
const toggleRowList = Array.prototype.slice.call(toggleRowNL);

toggleRowList.forEach(toggleRow => {
	const toggleHeader = toggleRow.querySelector('.cabinet__order-header')
	toggleHeader.addEventListener('click', function() {
		toggleRow.classList.contains('open')
		? toggleRow.classList.remove('open')
		: toggleRow.classList.add('open')
	})
})



}
