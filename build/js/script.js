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
  "./src/js/catalog.js":
  /*!***************************!*\
    !*** ./src/js/catalog.js ***!
    \***************************/

  /*! exports provided: default */

  /***/
  function srcJsCatalogJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function() {\r\n\r\n\tconst priceSlider = document.getElementById('price-slider')\r\n\tif (!priceSlider) return\r\n\tconst priceFrom = document.getElementById('price-from')\r\n\tconst priceTo = document.getElementById('price-to')\r\n\tconst priceMin = +document.getElementById('price-cont').getAttribute('data-min')\r\n\tconst priceMax = +document.getElementById('price-cont').getAttribute('data-max')\r\n\r\n\tconst sizeInput = (\"\"+priceMax).split(\"\").length\r\n\r\n\tnoUiSlider.create(priceSlider, {\r\n\t\tstart: [priceMin+2000, priceMax-5000],\r\n\t\tconnect: [true, false, true],\r\n\t\tpadding: [0, 17],\r\n\t\trange: {\r\n\t\t\t'min': [0],\r\n\t\t\t'max': [priceMax]\r\n\t\t},\r\n\t\tformat: {\r\n\t\t\tto: function (value) {\r\n\t\t\t\treturn Math.round(+value);\r\n\t\t\t},\r\n\t\t\tfrom: function (value) {\r\n\t\t\t\treturn Math.round(+value);\r\n\t\t\t}\r\n\t\t},\r\n\t});\r\n\r\n\tpriceSlider.noUiSlider.on('update', function(val) {\r\n\t\tpriceFrom.value = val[0]\r\n\t\tpriceTo.value = val[1]\r\n\t})\r\n\r\n\tpriceFrom.addEventListener('input', function(ev) {\r\n\t\tif (priceFrom.value.length > sizeInput) {\r\n\t\t\tpriceFrom.value = +priceFrom.value.substring(0, priceFrom.value.length - (priceFrom.value.length - sizeInput))\r\n\t\t}\r\n\t\tif (priceFrom.value > priceMax) priceFrom.value = priceMax;\r\n\t\tif (priceFrom.value < 1) priceFrom.value = priceMin;\r\n\t\t\r\n\t\tpriceSlider.noUiSlider.set([priceFrom.value, null])\r\n\t})\r\n\r\n\tpriceTo.addEventListener('input', function(ev) {\r\n\t\tif (priceTo.value.length > sizeInput) {\r\n\t\t\tpriceTo.value = +priceTo.value.substring(0, priceTo.value.length - (priceTo.value.length - sizeInput))\r\n\t\t}\r\n\t\tif (priceTo.value > priceMax) priceTo.value = priceMax;\r\n\t\tif (priceTo.value < 1) priceTo.value = priceMin;\r\n\t\t\r\n\t\tpriceSlider.noUiSlider.set([null, priceTo.value])\r\n\t})\r\n\r\n\r\n\tconst filterBtn = document.getElementById('filter-btn')\r\n\tconst sortBtn = document.getElementById('sort-btn')\r\n\tconst filterClose = document.getElementById('filter-close')\r\n\tconst filter = document.getElementById('filter')\r\n\r\n\tconst html = document.getElementById('html')\r\n\r\n\tfunction disableScroll() {\r\n\t\thtml.style.overflowX = 'hidden';\r\n\t\thtml.style.overflowY = 'hidden';\r\n\t};\r\n\r\n\tfunction enableScroll() {\r\n\t\thtml.style.overflowX = 'hidden';\r\n\t\thtml.style.overflowY = 'scroll';\r\n\t};\r\n\r\n\tfunction closeEl(el) {\r\n\t\tel.classList.remove('open');\r\n\t\tenableScroll();\r\n\t}\r\n\r\n\tfunction openEl(el) {\r\n\t\tel.classList.add('open');\r\n\t\tdisableScroll();\r\n\t}\r\n\r\n\tfilterBtn.addEventListener('click', () => openEl(filter))\r\n\tfilterClose.addEventListener('click', () => closeEl(filter))\r\n\tsortBtn.addEventListener('click', function() {\r\n\t\tif (sortBtn.classList.contains('active')) {\r\n\t\t\tsortBtn.classList.remove('active')\r\n\t\t\tenableScroll()\r\n\t\t} else {\r\n\t\t\tdisableScroll()\r\n\t\t\tsortBtn.classList.add('active')\r\n\t\t}\r\n\t})\r\n\r\n\tconst filterItemsNL = document.querySelectorAll('.filter__item');\r\n\tconst filterItems = Array.prototype.slice.call(filterItemsNL);\r\n\r\n\tconst filterTitleItemsNL = document.querySelectorAll('.filter__item-title');\r\n\tconst filterTitleItems = Array.prototype.slice.call(filterTitleItemsNL);\r\n\r\n\tfilterTitleItems.forEach((item, i) => {\r\n\t\titem.addEventListener('click', function() {\r\n\t\t\tfilterItems[i].classList.contains('hide')\r\n\t\t\t? filterItems[i].classList.remove('hide')\r\n\t\t\t: filterItems[i].classList.add('hide')\r\n\t\t})\r\n\t})\r\n\r\n\tfilterItems.forEach((item, i) => {\r\n\t\tconst moreBtn = item.querySelector('.filter__item-more-link')\r\n\t\tif (moreBtn) {\r\n\t\t\tmoreBtn.addEventListener('click', function() {\r\n\t\t\t\tif (item.classList.contains('full')) {\r\n\t\t\t\t\titem.classList.remove('full')\r\n\t\t\t\t\tmoreBtn.innerText = 'Показать еще'\r\n\t\t\t\t} else {\r\n\t\t\t\t\titem.classList.add('full')\r\n\t\t\t\t\tmoreBtn.innerText = 'Скрыть'\r\n\t\t\t\t}\r\n\r\n\t\t\t})\r\n\t\t}\r\n\t})\r\n\r\n\r\n});\n\n//# sourceURL=webpack:///./src/js/catalog.js?");
    /***/
  },

  /***/
  "./src/js/footerUlToggle.js":
  /*!**********************************!*\
    !*** ./src/js/footerUlToggle.js ***!
    \**********************************/

  /*! exports provided: default */

  /***/
  function srcJsFooterUlToggleJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function() {\r\n\t\r\n\tconst footerUlNodeList = document.querySelectorAll('.navigation__link-list');\r\n\tconst footerUlList = Array.prototype.slice.call(footerUlNodeList);\r\n\r\n\tfooterUlList.forEach((list, i) => {\r\n\t\tlist.addEventListener('click', function() {\r\n\t\t\tfooterUlList[i].classList.contains('open')\r\n\t\t\t? footerUlList[i].classList.remove('open')\r\n\t\t\t: footerUlList[i].classList.add('open')\r\n\t\t\tfooterUlList.forEach((ul, uli) => {\r\n\t\t\t\tif (uli != i) {\r\n\t\t\t\t\tul.classList.remove('open')\r\n\t\t\t\t}\r\n\t\t\t})\r\n\t\t})\r\n\t})\r\n\r\n\r\n});\n\n//# sourceURL=webpack:///./src/js/footerUlToggle.js?");
    /***/
  },

  /***/
  "./src/js/headerActions.js":
  /*!*********************************!*\
    !*** ./src/js/headerActions.js ***!
    \*********************************/

  /*! no static exports found */

  /***/
  function srcJsHeaderActionsJs(module, exports) {
    eval("\n\n//# sourceURL=webpack:///./src/js/headerActions.js?");
    /***/
  },

  /***/
  "./src/js/headerActiveClass.js":
  /*!*************************************!*\
    !*** ./src/js/headerActiveClass.js ***!
    \*************************************/

  /*! exports provided: default */

  /***/
  function srcJsHeaderActiveClassJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function() {\r\n\tvar arrowUp = document.getElementById('arrow-up');\r\n\t\r\n\theader.classList.remove('search')\r\n\tif (window.scrollY >= 200) {\r\n\t\theader.classList.add('active')\r\n\t\theader.classList.add('not-search')\r\n\r\n\t\tarrowUp.classList.add('active')\r\n\t} else {\r\n\t\theader.classList.remove('active')\r\n\t\theader.classList.remove('not-search')\r\n\r\n\t\tarrowUp.classList.remove('active')\r\n\t}\r\n\r\n\tarrowUp.addEventListener('click', () => window.scrollTo(0, 0))\r\n\r\n});\n\n//# sourceURL=webpack:///./src/js/headerActiveClass.js?");
    /***/
  },

  /***/
  "./src/js/mobNavigation.js":
  /*!*********************************!*\
    !*** ./src/js/mobNavigation.js ***!
    \*********************************/

  /*! exports provided: default */

  /***/
  function srcJsMobNavigationJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function() {\r\n\r\n\r\n\r\n});\n\n//# sourceURL=webpack:///./src/js/mobNavigation.js?");
    /***/
  },

  /***/
  "./src/js/product.js":
  /*!***************************!*\
    !*** ./src/js/product.js ***!
    \***************************/

  /*! exports provided: default */

  /***/
  function srcJsProductJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function() {\r\n\r\n\tconst itemNodeList = document.querySelectorAll('.product-description__item');\r\n\tconst itemsList = Array.prototype.slice.call(itemNodeList);\r\n\r\n\tconst tabsNodeList = document.querySelectorAll('.product-description__tabs-title');\r\n\tconst tabsList = Array.prototype.slice.call(tabsNodeList);\r\n\r\n\ttabsList.forEach((tab, i) => {\r\n\tconst tabsList2 = tabsList;\r\n\t\ttab.addEventListener('click', function() {\r\n\t\t\ttabsList2.forEach(tab2 => {\r\n\t\t\t\ttab2.classList.remove('active')\r\n\t\t\t})\r\n\t\t\ttabsList2[i].classList.add('active')\r\n\r\n\t\t\titemsList.forEach(tab2 => {\r\n\t\t\t\ttab2.classList.remove('active')\r\n\t\t\t})\r\n\t\t\titemsList[i].classList.add('active')\r\n\r\n\r\n\t\t})\r\n\t})\r\n\r\n});\n\n//# sourceURL=webpack:///./src/js/product.js?");
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

    eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sliders_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sliders.js */ \"./src/js/sliders.js\");\n/* harmony import */ var _headerActiveClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./headerActiveClass.js */ \"./src/js/headerActiveClass.js\");\n/* harmony import */ var _toggleSearchBlock_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./toggleSearchBlock.js */ \"./src/js/toggleSearchBlock.js\");\n/* harmony import */ var _footerUlToggle_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footerUlToggle.js */ \"./src/js/footerUlToggle.js\");\n/* harmony import */ var _catalog_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./catalog.js */ \"./src/js/catalog.js\");\n/* harmony import */ var _product_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./product.js */ \"./src/js/product.js\");\n\r\n\r\n\r\n// import mobNavigation from './mobNavigation.js';\r\n\r\n\r\n\r\n\r\n\r\n\r\ndocument.addEventListener(\"DOMContentLoaded\", function () {\r\n\r\n\tvar header = document.getElementById('header');\r\n\tvar getVW;\r\n\r\n\tif (window.innerWidth > 0) {\r\n\t\t getVW = window.innerWidth\r\n\t} else {\r\n\t\t getVW = screen.width;\r\n\t}\r\n\r\n\twindow.addEventListener('resize', function(event){\r\n\t\tif (window.innerWidth > 0) {\r\n\t\t\t getVW = window.innerWidth\r\n\t\t} else {\r\n\t\t\t getVW = screen.width;\r\n\t\t}\r\n\t  console.log('resize')\r\n\t});\r\n\r\n\tObject(_sliders_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n\tObject(_footerUlToggle_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(getVW);\r\n\r\n\t// mobNavigation()\r\n\r\n\twindow.addEventListener('scroll', function(ev) {\r\n\t\tvar scrollTop = window.scrollY\r\n\t\t// console.log(scrollTop)\r\n\t\tObject(_headerActiveClass_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\r\n\t});\r\n\r\n\tObject(_headerActiveClass_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\r\n\r\n\tObject(_toggleSearchBlock_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()\r\n\t\tconst navLink = document.querySelectorAll('.header__nav-item')\r\n\r\n\t\r\n\t\tnavLink.forEach(link => {\r\n\t\t\tlink.addEventListener('click', function(ev) {\r\n\t\t\t\tev.preventDefault()\r\n\t\t\t\t\t\tconsole.log('ev')\r\n\t\t\t\t\t\tconsole.log(ev.target)\r\n\r\n\t\t\t\tif (getVW <= 768) {\r\n\t\t\t\t\tev.preventDefault()\r\n\t\t\t\t\tif (ev.target === this || ev.target === this.children[0]) {\r\n\t\t\t\t\t\tconsole.log('this')\r\n\t\t\t\t\t\tconsole.log(this)\r\n\t\t\t\t\t\tlink.classList.contains('open')\r\n\t\t\t\t\t\t? link.classList.remove('open')\r\n\t\t\t\t\t\t: link.classList.add('open');\r\n\t\t\t\t\t} else if (ev.target.classList.contains('header__more-title-link') || ev.target.classList.contains('header__more-title')) {\r\n\t\t\t\t\t\tvar testLink;\r\n\t\t\t\t\t\tif (ev.target.tagName === 'A')  testLink = ev.target.getAttribute('href');\r\n\t\t\t\t\t\tif (ev.target.tagName === 'H2')  testLink = ev.target.children[0].getAttribute('href');\r\n\t\t\t\t\t\tif (testLink) location.href = testLink;\r\n\r\n\t\t\t\t\t} else if (ev.target.classList.contains('header__more-list') || ev.target.classList.contains('header__more-list-title-link') || ev.target.classList.contains('header__more-list-title')) {\r\n\t\t\t\t\t\tvar target = ev.target;\r\n\t\t\t\t\t\tif (target.tagName === 'A') target = target.parentElement.parentElement.parentElement;\r\n\t\t\t\t\t\tif (target.tagName === 'H2') target = target.parentElement.parentElement;\r\n\t\t\t\t\t\ttarget.classList.contains('open')\r\n\t\t\t\t\t\t? target.classList.remove('open')\r\n\t\t\t\t\t\t: target.classList.add('open');\r\n\t\t\t\t\t} else if (ev.target.classList.contains('header__more-link') || ev.target.classList.contains('header__more-subtitle')) {\r\n\t\t\t\t\t\tif (ev.target.tagName === 'H3') location.href = ev.target.children[0].getAttribute('href')\r\n\t\t\t\t\t\tif (ev.target.tagName === 'A') location.href = ev.target.getAttribute('href')\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\t\t\t})\r\n\t\t})\r\n\r\n\t\tconst burgerBtn = document.getElementById('burger-btn')\r\n\r\n\t\tburgerBtn.addEventListener('click', function() {\r\n\t\t\tif (header.classList.contains('menu-open')) {\r\n\t\t\t\theader.classList.remove('menu-open')\r\n\t\t\t\theader.classList.remove('active');\r\n\t\t\t\theader.classList.remove('not-search');\r\n\t\t\t} else {\r\n\t\t\t\theader.classList.add('menu-open');\r\n\t\t\t\theader.classList.add('active');\r\n\t\t\t\theader.classList.add('not-search');\r\n\t\t\t}\r\n\t\t\t\r\n\t\t})\r\n\r\n\t\tconst catalogTab = document.getElementById('catalog-tab')\r\n\t\tconst helpTab = document.getElementById('help-tab')\r\n\t\tconst loginTab = document.getElementById('login-tab')\r\n\r\n\t\tconst catalogTabList = document.getElementById('catalog-tab-list')\r\n\t\tconst helpTabList = document.getElementById('help-tab-list')\r\n\t\tconst loginTabCont = document.getElementById('login-tab-cont')\r\n\r\n\t\tconst tabList = [\r\n\t\t\tcatalogTab,\r\n\t\t\thelpTab,\r\n\t\t\tloginTab\r\n\t\t]\r\n\r\n\t\tconst tabContList = [\r\n\t\t\tcatalogTabList,\r\n\t\t\thelpTabList,\r\n\t\t\tloginTabCont\r\n\t\t]\r\n\r\n\t\ttabList.forEach((tab, i) => {\r\n\t\t\ttab.addEventListener('click', function() {\r\n\t\t\t\ttabList.forEach(tab => tab.classList.remove('active'))\r\n\t\t\t\ttabList[i].classList.add('active')\r\n\t\t\t\ttabContList.forEach(cont => cont.classList.remove('open'))\r\n\t\t\t\ttabContList[i].classList.add('open')\r\n\t\t\t})\r\n\r\n\t\t})\r\n\r\n\t\tconst btnLogIn = document.getElementById('btn-login')\r\n\t\tconst btnReg = document.getElementById('btn-registr')\r\n\t\tconst btnAuth = document.getElementById('btn-auth')\r\n\r\n\t\tconst contAuth = document.getElementById('auth-cont')\r\n\t\tconst closeAuth = document.getElementById('auth-close')\r\n\r\n\t\tconst contReg = document.getElementById('registr-cont')\r\n\t\tconst closeReg = document.getElementById('regist-close')\r\n\r\n\r\n\t\tfunction disableScroll() {\r\n\t\t\thtml.style.overflowX = 'hidden';\r\n\t\t\thtml.style.overflowY = 'hidden';\r\n\t\t};\r\n\r\n\t\tfunction enableScroll() {\r\n\t\t\thtml.style.overflowX = 'hidden';\r\n\t\t\thtml.style.overflowY = 'scroll';\r\n\t\t};\r\n\r\n\t\tfunction closeEl(el) {\r\n\t\t\tel.classList.remove('open');\r\n\t\t\tenableScroll();\r\n\t\t}\r\n\r\n\t\tfunction openEl(el) {\r\n\t\t\tel.classList.add('open');\r\n\t\t\tdisableScroll();\r\n\t\t}\r\n\r\n\r\n\t\tbtnLogIn.addEventListener('click', () => openEl(contAuth))\r\n\t\tbtnReg.addEventListener('click', () => {\r\n\t\t\tcloseEl(contAuth)\r\n\t\t\topenEl(contReg)\r\n\t\t})\r\n\t\tbtnAuth.addEventListener('click', () => {\r\n\t\t\tcloseEl(contReg)\r\n\t\t\topenEl(contAuth)\r\n\t\t})\r\n\t\tcloseAuth.addEventListener('click', () => closeEl(contAuth))\r\n\t\tcloseReg.addEventListener('click', () => closeEl(contReg))\r\n\r\n\t\tObject(_catalog_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])()\r\n\t\tObject(_product_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])()\r\n\r\n\r\n});\n\n//# sourceURL=webpack:///./src/js/script.js?");
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

    eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function() {\r\n\tconsole.log('sliders')\r\n\r\nconst desktop = 1200;\r\nconst tablet = 768;\r\nconst mobile = 0;\r\n\r\nconst previewSlider = new Swiper('.preview.swiper-container', {\r\n\tslidesPerView: 1,\r\n\tloopedSlides: 1,\r\n\tspaceBetween: 1000,\r\n\tloop: true,\r\n\tpagination: {\r\n\t\tel: '.swiper-pagination',\r\n\t\ttype: 'bullets',\r\n\t\tclickable: true,\r\n\t},\r\n\tbreakpoints: {\r\n\t\t320: {\r\n\t\t\tpagination: {\r\n\t\t\t\tel: null,\r\n\t\t\t},\r\n\t\t},\r\n\t\t768: {\r\n\t\t\tautoplay: false,\r\n\t\t},\r\n\t\t1200: {\r\n\t\t\tautoplay: false,\r\n\t\t},\r\n\r\n\t},\r\n\r\n})\r\nconst newsSlider = new Swiper('.news .news__row.swiper-container', {\r\n\twatchOverflow: true,\r\n\tslidesPerView: 4,\r\n\tspaceBetween: 30,\r\n\ton: {\r\n\t\timagesReady: function() {\r\n\t\t\tvar height = this.height\r\n\t\t\tconsole.log('height')\r\n\t\t\tconsole.log(height)\r\n\t\t\tthis.slides.forEach(slide => {\r\n\t\t\t\tconsole.log(slide)\r\n\t\t\t\tslide.style.height = `${height}px`\r\n\t\t\t})\r\n\t\t},\r\n\t},\r\n\tbreakpoints: {\r\n\t\t320: {\r\n\t\t\tslidesPerView: 1.2,\r\n\t\t\tspaceBetween: 10,\r\n\t\t},\r\n\t\t420: {\r\n\t\t\tslidesPerView: 2,\r\n\t\t\tspaceBetween: 10,\r\n\t\t},\r\n\t\t650: {\r\n\t\t\tslidesPerView: 3,\r\n\t\t},\r\n\t\t1200: {\r\n\t\t\tslidesPerView: 4,\r\n\t\t},\r\n\r\n\t},\r\n\r\n})\r\n\r\n\r\nvar productLinelist = document.querySelectorAll('.product-line');\r\nproductLinelist = Array.prototype.slice.call(productLinelist);\r\n\r\nproductLinelist.forEach(line => {\r\n\tconst slider = line.querySelector('.product-line__slider .swiper-container');\r\n\tconst nextBtn = line.querySelector('.slider-controls__btn.next');\r\n\tconst prevBtn = line.querySelector('.slider-controls__btn.prev');\r\n\tconst productLineSliders = new Swiper(slider, {\r\n\t\tslidesPerView: 4,\r\n\t\tslidesPerColumn: 1,\r\n\t\tspaceBetween: 30,\r\n\t\tallowTouchMove: false,\r\n\t\twatchOverflow: true,\r\n\t\tnavigation: {\r\n\t\t\tnextEl: nextBtn,\r\n\t\t\tprevEl: prevBtn,\r\n\t\t\thideOnClick: true,\r\n\t\t},\r\n\t\tbreakpoints: {\r\n\t\t\t0: {\r\n\t\t\t\tslidesPerView: 2,\r\n\t\t\t\tspaceBetween: 10,\r\n\t\t\t\tallowTouchMove: true,\r\n\t\t\t},\r\n\t\t\t320: {\r\n\t\t\t\tslidesPerView: 2,\r\n\t\t\t\tspaceBetween: 10,\r\n\t\t\t\tallowTouchMove: true,\r\n\t\t\t},\r\n\t\t\t550: {\r\n\t\t\t\tslidesPerView: 3,\r\n\t\t\t\tspaceBetween: 10,\r\n\t\t\t\tallowTouchMove: true,\r\n\t\t\t},\r\n\t\t\t700: {\r\n\t\t\t\twidth: 673,\r\n\t\t\t\tslidesPerView: 3.2,\r\n\t\t\t\tspaceBetween: 30,\r\n\t\t\t},\r\n\t\t\t735: {\r\n\t\t\t\twidth: 708,\r\n\t\t\t\tslidesPerView: 3,\r\n\t\t\t\tspaceBetween: 30,\r\n\t\t\t},\r\n\t\t\t1200: {\r\n\t\t\t\twidth: 1170,\r\n\t\t\t\tslidesPerView: 4,\r\n\t\t\t\tspaceBetween: 30,\r\n\t\t\t},\r\n\r\n\t\t},\r\n\t})\r\n})\r\n\r\n\r\n\r\nconst productLineInsideSliders = new Swiper('.product-line__phcont-slider .swiper-container', {\r\n  slidesPerView: 1,\r\n  slideClass: 'swiper-slide-inside',\r\n  pagination: {\r\n    el: '.swiper-pagination',\r\n    type: 'bullets',\r\n    clickable: true,\r\n  },\r\n\tbreakpoints: {\r\n\t\t0: {\r\n\t\t\tallowTouchMove: true,\r\n\t\t\tloop: true,\r\n\t\t\tslidesPerView: 1,\r\n\t\t},\r\n\t},\r\n})\r\n\r\n\r\nconst brandsSlider = new Swiper('.brands__slider', {\r\n\tslidesPerView: 6,\r\n\tslidesPerColumn: 1,\r\n\tnavigation: {\r\n\t\tnextEl: '.brands .slider-controls .slider-controls__btn.next',\r\n\t\tprevEl: '.brands .slider-controls .slider-controls__btn.prev',\r\n\t\thideOnClick: true,\r\n\t},\r\n\tbreakpoints: {\r\n\t\t0: {\r\n\t\t\tallowTouchMove: true,\r\n\t\t\tslidesPerView: 1.8,\r\n\t\t\tspaceBetween: 60,\r\n\t\t},\r\n\t\t768: {\r\n\t\t\tslidesPerView: 4.35,\r\n\t\t\tspaceBetween: 60,\r\n\t\t},\r\n\t\t1200: {\r\n\t\t\tslidesPerView: 6,\r\n\t\t\tspaceBetween: 80,\r\n\t\t},\r\n\t},\r\n\r\n})\r\n\r\nconst salesSlider = new Swiper('.sales .sales__col.slider .swiper-container', {\r\n\tslidesPerView: 2,\r\n\tspaceBetween: 30,\r\n\tbreakpoints: {\r\n\t\t320: {\r\n\t\t\tallowTouchMove: true,\r\n\t\t\tslidesPerView: 1.2,\r\n\t\t\tspaceBetween: 10,\r\n\t\t},\r\n\t\t480: {\r\n\t\t\tallowTouchMove: true,\r\n\t\t\tslidesPerView: 1.5,\r\n\t\t\tspaceBetween: 10,\r\n\t\t},\r\n\t\t650: {\r\n\t\t\tslidesPerView: 1.9,\r\n\t\t},\r\n\t\t768: {\r\n\t\t\tslidesPerView: 2,\r\n\t\t\tspaceBetween: 30,\r\n\t\t\tnavigation: {\r\n\t\t\t\tnextEl: '.sales .slider-controls .slider-controls__btn.next',\r\n\t\t\t\tprevEl: '.sales .slider-controls .slider-controls__btn.prev',\r\n\t\t\t\thideOnClick: true,\r\n\t\t\t},\r\n\t\t},\r\n\t\t1200: {\r\n\t\t\tslidesPerView: 2,\r\n\t\t\tnavigation: {\r\n\t\t\t\tnextEl: '.sales .sales__col.slider .sales__slider-arrow.next',\r\n\t\t\t\tprevEl: '.sales .sales__col.slider .sales__slider-arrow.prev',\r\n\t\t\t\thideOnClick: true,\r\n\t\t\t},\r\n\t\t},\r\n\t},\r\n\r\n})\r\n\r\n\r\n\r\n\r\n});\n\n//# sourceURL=webpack:///./src/js/sliders.js?");
    /***/
  },

  /***/
  "./src/js/toggleSearchBlock.js":
  /*!*************************************!*\
    !*** ./src/js/toggleSearchBlock.js ***!
    \*************************************/

  /*! exports provided: default */

  /***/
  function srcJsToggleSearchBlockJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function() {\r\n\r\n\tconst fakeSrchBtn = document.getElementById('toggleSearch')\r\n\r\n\tfakeSrchBtn.addEventListener('click', () => {\r\n\t\theader.classList.add('search')\r\n\t\theader.classList.remove('not-search')\r\n\t\t// var checkMisClick = function(ev) {\r\n\t\t// \tconsole.log('header')\r\n\t\t// \tconsole.log(ev.target)\r\n\t\t// \tconst test = [\r\n\t\t// \t\t'header__search-input',\r\n\t\t// \t\t'header__search-submit',\r\n\t\t// \t\t'search-icon',\r\n\t\t\t\t\r\n\t\t// \t]\r\n\t\t// \tif (!ev.target.classList.contains(test[0]) || !ev.target.classList.contains(test[1]) || !ev.target.classList.contains(test[2]) ) {\r\n\t\t// \t\theader.classList.remove('search')\r\n\t\t// \t\theader.classList.add('not-search')\r\n\t\t// \t\tdocument.removeEventListener(\"keydown\", checkMisClick);\r\n\t\t// \t}\r\n\t\t// }\r\n\t\t// document.addEventListener('click', checkMisClick)\r\n\t})\r\n\r\n});\n\n//# sourceURL=webpack:///./src/js/toggleSearchBlock.js?");
    /***/
  },

  /***/
  0:
  /*!***************************************************************************************************************************************************************************************************************************************!*\
    !*** multi ./src/js/catalog.js ./src/js/footerUlToggle.js ./src/js/headerActions.js ./src/js/headerActiveClass.js ./src/js/mobNavigation.js ./src/js/product.js ./src/js/script.js ./src/js/sliders.js ./src/js/toggleSearchBlock.js ***!
    \***************************************************************************************************************************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    eval("__webpack_require__(/*! C:\\Users\\timur\\Desktop\\mebelik\\src\\js\\catalog.js */\"./src/js/catalog.js\");\n__webpack_require__(/*! C:\\Users\\timur\\Desktop\\mebelik\\src\\js\\footerUlToggle.js */\"./src/js/footerUlToggle.js\");\n__webpack_require__(/*! C:\\Users\\timur\\Desktop\\mebelik\\src\\js\\headerActions.js */\"./src/js/headerActions.js\");\n__webpack_require__(/*! C:\\Users\\timur\\Desktop\\mebelik\\src\\js\\headerActiveClass.js */\"./src/js/headerActiveClass.js\");\n__webpack_require__(/*! C:\\Users\\timur\\Desktop\\mebelik\\src\\js\\mobNavigation.js */\"./src/js/mobNavigation.js\");\n__webpack_require__(/*! C:\\Users\\timur\\Desktop\\mebelik\\src\\js\\product.js */\"./src/js/product.js\");\n__webpack_require__(/*! C:\\Users\\timur\\Desktop\\mebelik\\src\\js\\script.js */\"./src/js/script.js\");\n__webpack_require__(/*! C:\\Users\\timur\\Desktop\\mebelik\\src\\js\\sliders.js */\"./src/js/sliders.js\");\nmodule.exports = __webpack_require__(/*! C:\\Users\\timur\\Desktop\\mebelik\\src\\js\\toggleSearchBlock.js */\"./src/js/toggleSearchBlock.js\");\n\n\n//# sourceURL=webpack:///multi_./src/js/catalog.js_./src/js/footerUlToggle.js_./src/js/headerActions.js_./src/js/headerActiveClass.js_./src/js/mobNavigation.js_./src/js/product.js_./src/js/script.js_./src/js/sliders.js_./src/js/toggleSearchBlock.js?");
    /***/
  }
  /******/

});