"use strict";

import sliders from './sliders.js';
// import mobNavigation from './mobNavigation.js';
import headerActiveClass from './headerActiveClass.js';
import toggleSearchBlock from './toggleSearchBlock.js';
import footerUlToggle from './footerUlToggle.js';
import catalog from './catalog.js';
import product from './product.js';
import cabinet from './cab.js';

document.addEventListener("DOMContentLoaded", function () {

	var header = document.getElementById('header');
	var getVW;

		const sliderCabinet = document.querySelector('#cab-slider .swiper-container')

		const cabinetTabs = new Swiper(sliderCabinet, {
			spaceBetween: 0,
			// simulateTouch: false,
			breakpoints: {
				320: {
					width: null,
					slidesPerView: 2.5,
					// simulateTouch: true,
				},
				650: {
					width: null,
					slidesPerView: 5.5,
					// simulateTouch: true,
				},
				1200: {
					width: 270,
					// simulateTouch: false,
				},

			},

		})

	function toggleCabTabs() {
	  		console.log('getVW')
	  		console.log(getVW)
	  	if (getVW >= 1200) {
	  		if (sliderCabinet) cabinetTabs.destroy(false,true)
	  		console.log('destroy')
	  	} else {
	  		if (sliderCabinet) cabinetTabs.init()
	  		console.log('init')
	  	}
	}
	
	if (window.innerWidth > 0) {
		 getVW = window.innerWidth
	} else {
		 getVW = screen.width;
	}

	toggleCabTabs()

	window.addEventListener('resize', function(event){
		if (window.innerWidth > 0) {
			 getVW = window.innerWidth
		} else {
			 getVW = screen.width;
		}
		toggleCabTabs()
	  // console.log('resize')
	  // console.log(getVW)
	});

	sliders();
	footerUlToggle(getVW);

	// mobNavigation()

	window.addEventListener('scroll', function(ev) {
		var scrollTop = window.scrollY
		// console.log(scrollTop)
		headerActiveClass()
	});

	headerActiveClass()

	toggleSearchBlock()
		const navLink = document.querySelectorAll('.header__nav-item')

	
		navLink.forEach(link => {
			link.addEventListener('click', function(ev) {
				if (getVW<=1199) {
					ev.preventDefault()
							console.log('ev')
							console.log(ev.target)

					if (getVW <= 768) {
						ev.preventDefault()
						if (ev.target === this || ev.target === this.children[0]) {
							console.log('this')
							console.log(this)
							link.classList.contains('open')
							? link.classList.remove('open')
							: link.classList.add('open');
						} else if (ev.target.classList.contains('header__more-title-link') || ev.target.classList.contains('header__more-title')) {
							var testLink;
							if (ev.target.tagName === 'A')  testLink = ev.target.getAttribute('href');
							if (ev.target.tagName === 'H2')  testLink = ev.target.children[0].getAttribute('href');
							if (testLink) location.href = testLink;

						} else if (ev.target.classList.contains('header__more-list') || ev.target.classList.contains('header__more-list-title-link') || ev.target.classList.contains('header__more-list-title')) {
							var target = ev.target;
							if (target.tagName === 'A') target = target.parentElement.parentElement.parentElement;
							if (target.tagName === 'H2') target = target.parentElement.parentElement;
							target.classList.contains('open')
							? target.classList.remove('open')
							: target.classList.add('open');
						} else if (ev.target.classList.contains('header__more-link') || ev.target.classList.contains('header__more-subtitle')) {
							if (ev.target.tagName === 'H3') location.href = ev.target.children[0].getAttribute('href')
							if (ev.target.tagName === 'A') location.href = ev.target.getAttribute('href')
						}
					}

				}

			})
		})

		const burgerBtn = document.getElementById('burger-btn')

		burgerBtn.addEventListener('click', function() {
			if (header.classList.contains('menu-open')) {
				header.classList.remove('menu-open')
				header.classList.remove('active');
				header.classList.remove('not-search');
			} else {
				header.classList.add('menu-open');
				header.classList.add('active');
				header.classList.add('not-search');
			}
			
		})

		const catalogTab = document.getElementById('catalog-tab')
		const helpTab = document.getElementById('help-tab')
		const loginTab = document.getElementById('login-tab')

		const catalogTabList = document.getElementById('catalog-tab-list')
		const helpTabList = document.getElementById('help-tab-list')
		const loginTabCont = document.getElementById('login-tab-cont')

		const tabList = [
			catalogTab,
			helpTab,
			loginTab
		]

		const tabContList = [
			catalogTabList,
			helpTabList,
			loginTabCont
		]

		tabList.forEach((tab, i) => {
			tab.addEventListener('click', function() {
				tabList.forEach(tab => tab.classList.remove('active'))
				tabList[i].classList.add('active')
				tabContList.forEach(cont => cont.classList.remove('open'))
				tabContList[i].classList.add('open')
			})

		})

		const btnLogIn = document.getElementById('btn-login')
		const btnReg = document.getElementById('btn-registr')
		const btnAuth = document.getElementById('btn-auth')

		const contAuth = document.getElementById('auth-cont')
		const closeAuth = document.getElementById('auth-close')

		const contReg = document.getElementById('registr-cont')
		const closeReg = document.getElementById('regist-close')


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


		btnLogIn.addEventListener('click', () => openEl(contAuth))
		btnReg.addEventListener('click', () => {
			closeEl(contAuth)
			openEl(contReg)
		})
		btnAuth.addEventListener('click', () => {
			closeEl(contReg)
			openEl(contAuth)
		})
		closeAuth.addEventListener('click', () => closeEl(contAuth))
		closeReg.addEventListener('click', () => closeEl(contReg))


		const btnCall = document.querySelector('.footer .navigation .navigation__tel-callback')
		const contCall = document.getElementById('call-cont')
		const closeCall = document.getElementById('call-close')

		btnCall.addEventListener('click', () => openEl(contCall))
		closeCall.addEventListener('click', () => closeEl(contCall))

		const btnReview = document.getElementById('review-btn')
		if (btnReview) {
			const contReview = document.getElementById('review-cont')
			const closeReview = document.getElementById('review-close')

			btnReview.addEventListener('click', () => openEl(contReview))
			closeReview.addEventListener('click', () => closeEl(contReview))
		}

		const btnQuest = document.getElementById('quest-btn')
		if (btnQuest) {
			const contQuest = document.getElementById('quest-cont')
			const closeQuest = document.getElementById('quest-close')

			btnQuest.addEventListener('click', () => openEl(contQuest))
			closeQuest.addEventListener('click', () => closeEl(contQuest))
		}

		catalog()
		product()
		cabinet()




});