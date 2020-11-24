"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/******/
(function (modules) {
  // webpackBootstrap

  /******/
  // The module cache

  /******/
  var installedModules = {};
  /******/

  /******/
  // The require function

  /******/

  function __webpack_require__(moduleId) {
    /******/

    /******/
    // Check if module is in cache

    /******/
    if (installedModules[moduleId]) {
      /******/
      return installedModules[moduleId].exports;
      /******/
    }
    /******/
    // Create a new module (and put it into the cache)

    /******/


    var module = installedModules[moduleId] = {
      /******/
      i: moduleId,

      /******/
      l: false,

      /******/
      exports: {}
      /******/

    };
    /******/

    /******/
    // Execute the module function

    /******/

    modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
    /******/

    /******/
    // Flag the module as loaded

    /******/

    module.l = true;
    /******/

    /******/
    // Return the exports of the module

    /******/

    return module.exports;
    /******/
  }
  /******/

  /******/

  /******/
  // expose the modules object (__webpack_modules__)

  /******/


  __webpack_require__.m = modules;
  /******/

  /******/
  // expose the module cache

  /******/

  __webpack_require__.c = installedModules;
  /******/

  /******/
  // define getter function for harmony exports

  /******/

  __webpack_require__.d = function (exports, name, getter) {
    /******/
    if (!__webpack_require__.o(exports, name)) {
      /******/
      Object.defineProperty(exports, name, {
        enumerable: true,
        get: getter
      });
      /******/
    }
    /******/

  };
  /******/

  /******/
  // define __esModule on exports

  /******/


  __webpack_require__.r = function (exports) {
    /******/
    if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
      /******/
      Object.defineProperty(exports, Symbol.toStringTag, {
        value: 'Module'
      });
      /******/
    }
    /******/


    Object.defineProperty(exports, '__esModule', {
      value: true
    });
    /******/
  };
  /******/

  /******/
  // create a fake namespace object

  /******/
  // mode & 1: value is a module id, require it

  /******/
  // mode & 2: merge all properties of value into the ns

  /******/
  // mode & 4: return value when already ns object

  /******/
  // mode & 8|1: behave like require

  /******/


  __webpack_require__.t = function (value, mode) {
    /******/
    if (mode & 1) value = __webpack_require__(value);
    /******/

    if (mode & 8) return value;
    /******/

    if (mode & 4 && _typeof(value) === 'object' && value && value.__esModule) return value;
    /******/

    var ns = Object.create(null);
    /******/

    __webpack_require__.r(ns);
    /******/


    Object.defineProperty(ns, 'default', {
      enumerable: true,
      value: value
    });
    /******/

    if (mode & 2 && typeof value != 'string') for (var key in value) {
      __webpack_require__.d(ns, key, function (key) {
        return value[key];
      }.bind(null, key));
    }
    /******/

    return ns;
    /******/
  };
  /******/

  /******/
  // getDefaultExport function for compatibility with non-harmony modules

  /******/


  __webpack_require__.n = function (module) {
    /******/
    var getter = module && module.__esModule ?
    /******/
    function getDefault() {
      return module['default'];
    } :
    /******/
    function getModuleExports() {
      return module;
    };
    /******/

    __webpack_require__.d(getter, 'a', getter);
    /******/


    return getter;
    /******/
  };
  /******/

  /******/
  // Object.prototype.hasOwnProperty.call

  /******/


  __webpack_require__.o = function (object, property) {
    return Object.prototype.hasOwnProperty.call(object, property);
  };
  /******/

  /******/
  // __webpack_public_path__

  /******/


  __webpack_require__.p = "";
  /******/

  /******/

  /******/
  // Load entry module and return exports

  /******/

  return __webpack_require__(__webpack_require__.s = 0);
  /******/
})(
/************************************************************************/

/******/
{
  /***/
  "./src/js/mobNavigation.js":
  /*!*********************************!*\
    !*** ./src/js/mobNavigation.js ***!
    \*********************************/

  /*! exports provided: default */

  /***/
  function srcJsMobNavigationJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function() {\r\n\r\n\tconst getVW = () => {\r\n\t\treturn (window.innerWidth > 0) ? window.innerWidth : screen.width;\r\n\t}\r\n\t\tconst navLink = document.querySelectorAll('.header__nav-item')\r\n\r\n\t\r\n\t\tnavLink.forEach(link => {\r\n\t\t\tvar ul2 = link.querySelector('.header__more-list')\r\n\t\t\tconsole.log(ul2)\r\n\t\t\tlink.addEventListener('click', function(ev) {\r\n\t\t\t\t\r\n\t\t\t\tif (getVW() === 320) {\r\n\t\t\t\t\tev.preventDefault()\r\n\t\t\t\t\tif (ev.target === this || ev.target === this.children[0]) {\r\n\t\t\t\t\t\tlink.classList.contains('open')\r\n\t\t\t\t\t\t? link.classList.remove('open')\r\n\t\t\t\t\t\t: link.classList.add('open')\r\n\t\t\t\t\t} else if (ev.target.classList.contains('header__more-list') || ev.target.classList.contains('header__more-list-title-link')) {\r\n\t\t\t\t\t\tul2.classList.contains('open')\r\n\t\t\t\t\t\t? ul2.classList.remove('open')\r\n\t\t\t\t\t\t: ul2.classList.add('open')\r\n\t\t\t\t\t} else if (ev.target.classList.contains('header__more-link')) {\r\n\t\t\t\t\t\tdocument.location.href = ev.target.getAttribute('href');\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\t\t\t})\r\n\t\t})\r\n\r\n});\n\n//# sourceURL=webpack:///./src/js/mobNavigation.js?");
    /***/
  },

  /***/
  "./src/js/script.js":
  /*!**************************!*\
    !*** ./src/js/script.js ***!
    \**************************/

  /*! no exports provided */

  /***/
  function srcJsScriptJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sliders_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sliders.js */ \"./src/js/sliders.js\");\n/* harmony import */ var _mobNavigation_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mobNavigation.js */ \"./src/js/mobNavigation.js\");\n\r\n\r\n\r\n\r\n\r\ndocument.addEventListener(\"DOMContentLoaded\", function () {\r\n\r\n\tObject(_sliders_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n\r\n\tObject(_mobNavigation_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\r\n\r\n\r\n\r\n\twindow.addEventListener('resize', function(event){\r\n\t  Object(_mobNavigation_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\r\n\t  console.log('resize')\r\n\t});\r\n\r\n});\n\n//# sourceURL=webpack:///./src/js/script.js?");
    /***/
  },

  /***/
  "./src/js/sliders.js":
  /*!***************************!*\
    !*** ./src/js/sliders.js ***!
    \***************************/

  /*! exports provided: default */

  /***/
  function srcJsSlidersJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function() {\r\n\tconsole.log('sliders')\r\n\r\nconst desktop = 1200;\r\nconst tablet = 768;\r\nconst mobile = 0;\r\n\r\n\r\n\r\nconst previewSlider = new Swiper('.preview.swiper-container', {\r\n\twidth: 1170,\r\n\tslidesPerView: 1,\r\n\tloopedSlides: 1,\r\n\tspaceBetween: 50,\r\n\tloop: true,\r\n\tautoplay: {\r\n\t\tdelay: 3000,\r\n\t\tdisableOnInteraction: false,\r\n\t},\r\n\tpagination: {\r\n\t\tel: '.swiper-pagination',\r\n\t\ttype: 'bullets',\r\n\t\tclickable: true,\r\n\t},\r\n\tbreakpoints: {\r\n\t\t0: {\r\n\t\t\twidth: 320,\r\n\t\t\tspaceBetween: 0,\r\n\t\t\tpagination: {\r\n\t\t\t\tel: null,\r\n\t\t\t},\r\n\t\t},\r\n\t\t768: {\r\n\t\t\twidth: 708,\r\n\t\t\tautoplay: false,\r\n\t\t},\r\n\t\t1200: {\r\n\t\t\twidth: 1170,\r\n\t\t\tautoplay: false,\r\n\t\t},\r\n\r\n\t},\r\n\r\n})\r\n\r\nvar productLinelist = document.querySelectorAll('.product-line');\r\n// productLinelist = Array.prototype.slice.call(productLinelist);\r\n\r\nproductLinelist.forEach(line => {\r\n\tconst slider = line.querySelector('.product-line__slider .swiper-container');\r\n\tconst nextBtn = line.querySelector('.slider-controls__btn.next');\r\n\tconst prevBtn = line.querySelector('.slider-controls__btn.prev');\r\n\tconst productLineSliders = new Swiper(slider, {\r\n\t\twidth: 1170,\r\n\t\tslidesPerView: 4,\r\n\t\tslidesPerColumn: 1,\r\n\t\tspaceBetween: 30,\r\n\t\tallowTouchMove: false,\r\n\t\tnavigation: {\r\n\t\t\tnextEl: nextBtn,\r\n\t\t\tprevEl: prevBtn,\r\n\t\t\thideOnClick: true,\r\n\t\t},\r\n\t\tbreakpoints: {\r\n\t\t\t0: {\r\n\t\t\t\twidth: 320,\r\n\t\t\t\tslidesPerView: 2,\r\n\t\t\t\tspaceBetween: 10,\r\n\t\t\t\tallowTouchMove: true,\r\n\t\t\t},\r\n\t\t\t768: {\r\n\t\t\t\twidth: 708,\r\n\t\t\t\tslidesPerView: 3,\r\n\t\t\t},\r\n\t\t\t1200: {\r\n\t\t\t\twidth: 1170,\r\n\t\t\t},\r\n\r\n\t\t},\r\n\t})\r\n})\r\n\r\n\r\n\r\nconst productLineInsideSliders = new Swiper('.product-line__phcont-slider .swiper-container', {\r\n  slidesPerView: 1,\r\n  slideClass: 'swiper-slide-inside',\r\n  pagination: {\r\n    el: '.swiper-pagination',\r\n    type: 'bullets',\r\n    clickable: true,\r\n  },\r\n\tbreakpoints: {\r\n\t\t0: {\r\n\t\t\tallowTouchMove: false,\r\n\t\t},\r\n\t},\r\n})\r\n\r\nconst brandsSlider = new Swiper('.brands__slider', {\r\n\tslidesPerView: 6,\r\n\tslidesPerColumn: 1,\r\n\tnavigation: {\r\n\t\tnextEl: '.brands .slider-controls .slider-controls__btn.next',\r\n\t\tprevEl: '.brands .slider-controls .slider-controls__btn.prev',\r\n\t\thideOnClick: true,\r\n\t},\r\n\r\n})\r\n\r\nconst salesSlider = new Swiper('.sales .sales__col.slider .swiper-container', {\r\n\tslidesPerView: 2,\r\n\tspaceBetween: 30,\r\n\tnavigation: {\r\n\t\tnextEl: '.sales .sales__col.slider .sales__slider-arrow.next',\r\n\t\tprevEl: '.sales .sales__col.slider .sales__slider-arrow.prev',\r\n\t\thideOnClick: true,\r\n\t},\r\n\r\n})\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n});\n\n//# sourceURL=webpack:///./src/js/sliders.js?");
    /***/
  },

  /***/
  0:
  /*!******************************************************************************!*\
    !*** multi ./src/js/mobNavigation.js ./src/js/script.js ./src/js/sliders.js ***!
    \******************************************************************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    eval("__webpack_require__(/*! C:\\Users\\timur\\Desktop\\mebelik\\src\\js\\mobNavigation.js */\"./src/js/mobNavigation.js\");\n__webpack_require__(/*! C:\\Users\\timur\\Desktop\\mebelik\\src\\js\\script.js */\"./src/js/script.js\");\nmodule.exports = __webpack_require__(/*! C:\\Users\\timur\\Desktop\\mebelik\\src\\js\\sliders.js */\"./src/js/sliders.js\");\n\n\n//# sourceURL=webpack:///multi_./src/js/mobNavigation.js_./src/js/script.js_./src/js/sliders.js?");
    /***/
  }
  /******/

});