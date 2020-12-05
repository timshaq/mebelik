export default function() {

		const sliderCabinet = document.querySelector('#cab-slider .swiper-container')

		const cabinetTabs = new Swiper(sliderCabinet, {
			// on: {
			// 	init: function(ev) {
			// 		console.log('ev')
			// 		console.log(ev)
			// 		console.log('this')
			// 		console.log(this)
			// 		if (+this.currentBreakpoint < 1200) {
			// 			this.init()
			// 		} else {
			// 			this.destroy(false,true)
			// 		}
			// 	},
			// 	resize: function(ev) {
			// 		console.log('ev')
			// 		console.log(ev)
			// 		console.log('this')
			// 		console.log(this)
			// 		if (+this.currentBreakpoint < 1200) {
			// 			this.init()
			// 		} else {
			// 			this.destroy(false,true)
			// 		}
			// 	},
			// },
			spaceBetween: 0,
			simulateTouch: false,
			breakpoints: {
				320: {
					width: null,
					slidesPerView: 2.5,
					simulateTouch: true,
				},
				650: {
					width: null,
					slidesPerView: 5.5,
					simulateTouch: true,
				},
				1200: {
					width: 270,
					simulateTouch: false,
				},

			},

		})



}
