"use strict";

import sliders from './sliders.js';
// import mobNavigation from './mobNavigation.js';
import headerActiveClass from './headerActiveClass.js';
import toggleSearchBlock from './toggleSearchBlock.js';
import footerUlToggle from './footerUlToggle.js';
document.addEventListener("DOMContentLoaded", function () {

	var header = document.getElementById('header');
	var getVW;

	if (window.innerWidth > 0) {
		 getVW = window.innerWidth
	} else {
		 getVW = screen.width;
	}

	window.addEventListener('resize', function(event){
		if (window.innerWidth > 0) {
			 getVW = window.innerWidth
		} else {
			 getVW = screen.width;
		}
	  console.log('resize')
	});

	sliders();
	footerUlToggle(getVW);

	// mobNavigation()

	window.addEventListener('scroll', function(ev) {
		var scrollTop = window.scrollY
		console.log(scrollTop)
		headerActiveClass()
	});

	headerActiveClass()

	toggleSearchBlock()
		const navLink = document.querySelectorAll('.header__nav-item')

	
		navLink.forEach(link => {
			link.addEventListener('click', function(ev) {
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
});