"use strict";

import sliders from './sliders.js';
import mobNavigation from './mobNavigation.js';

document.addEventListener("DOMContentLoaded", function () {

	sliders();

	mobNavigation()



	window.addEventListener('resize', function(event){
	  mobNavigation()
	  console.log('resize')
	});

});