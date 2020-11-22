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
  "./src/js/script.js":
  /*!**************************!*\
    !*** ./src/js/script.js ***!
    \**************************/

  /*! no exports provided */

  /***/
  function srcJsScriptJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sliders_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sliders.js */ \"./src/js/sliders.js\");\n\r\n\r\n\r\n\r\ndocument.addEventListener(\"DOMContentLoaded\", function () {\r\n\r\n\tObject(_sliders_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n\r\n});\n\n//# sourceURL=webpack:///./src/js/script.js?");
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

    eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function() {\r\n\tconsole.log('sliders')\r\n\r\n\r\n\r\n\r\n\r\nconst previewSlider = new Swiper('.preview.swiper-container', {\r\n  slidesPerView: 1,\r\n  loopedSlides: 1,\r\n  spaceBetween: 50,\r\n  loop: true,\r\n  pagination: {\r\n    el: '.swiper-pagination',\r\n    type: 'bullets',\r\n    clickable: true,\r\n  }\r\n\r\n})\r\n\r\nconst productLineInsideSliders = new Swiper('.product-line__phcont-slider .swiper-container', {\r\n  slidesPerView: 1,\r\n  pagination: {\r\n    el: '.swiper-pagination',\r\n    type: 'bullets',\r\n    clickable: true,\r\n  }\r\n})\r\n\r\nconst brandsSlider = new Swiper('.brands__slider', {\r\n  slidesPerView: 6,\r\n  slidesPerColumn: 1,\r\n  navigation: {\r\n    nextEl: '.brands .slider-controls .slider-controls__btn.next',\r\n    prevEl: '.brands .slider-controls .slider-controls__btn.prev',\r\n    hideOnClick: true,\r\n  },\r\n\r\n})\r\n\r\nconst salesSlider = new Swiper('.sales .sales__col.slider .swiper-container', {\r\n  slidesPerView: 2,\r\n  spaceBetween: 30,\r\n  navigation: {\r\n    nextEl: '.sales .sales__col.slider .sales__slider-arrow.next',\r\n    prevEl: '.sales .sales__col.slider .sales__slider-arrow.prev',\r\n    hideOnClick: true,\r\n  },\r\n\r\n})\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n});\n\n//# sourceURL=webpack:///./src/js/sliders.js?");
    /***/
  },

  /***/
  0:
  /*!****************************************************!*\
    !*** multi ./src/js/script.js ./src/js/sliders.js ***!
    \****************************************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    eval("__webpack_require__(/*! C:\\Users\\timur\\Desktop\\mebelik\\src\\js\\script.js */\"./src/js/script.js\");\nmodule.exports = __webpack_require__(/*! C:\\Users\\timur\\Desktop\\mebelik\\src\\js\\sliders.js */\"./src/js/sliders.js\");\n\n\n//# sourceURL=webpack:///multi_./src/js/script.js_./src/js/sliders.js?");
    /***/
  }
  /******/

});