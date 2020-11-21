"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

!function (e) {
  var n = {};

  function r(t) {
    if (n[t]) return n[t].exports;
    var i = n[t] = {
      i: t,
      l: !1,
      exports: {}
    };
    return e[t].call(i.exports, i, i.exports, r), i.l = !0, i.exports;
  }

  r.m = e, r.c = n, r.d = function (e, n, t) {
    r.o(e, n) || Object.defineProperty(e, n, {
      enumerable: !0,
      get: t
    });
  }, r.r = function (e) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    });
  }, r.t = function (e, n) {
    if (1 & n && (e = r(e)), 8 & n) return e;
    if (4 & n && "object" == _typeof(e) && e && e.__esModule) return e;
    var t = Object.create(null);
    if (r.r(t), Object.defineProperty(t, "default", {
      enumerable: !0,
      value: e
    }), 2 & n && "string" != typeof e) for (var i in e) {
      r.d(t, i, function (n) {
        return e[n];
      }.bind(null, i));
    }
    return t;
  }, r.n = function (e) {
    var n = e && e.__esModule ? function () {
      return e["default"];
    } : function () {
      return e;
    };
    return r.d(n, "a", n), n;
  }, r.o = function (e, n) {
    return Object.prototype.hasOwnProperty.call(e, n);
  }, r.p = "", r(r.s = 1);
}([function (e, n, r) {
  "use strict";

  r.r(n), n["default"] = function () {
    console.log("sliders");
    new Swiper(".preview.swiper-container", {
      slidesPerView: 1,
      loopedSlides: 1,
      spaceBetween: 50,
      loop: !0,
      pagination: {
        el: ".swiper-pagination",
        type: "bullets",
        clickable: !0
      }
    }), new Swiper(".product-line__phcont-slider.swiper-container", {
      slidesPerView: 1,
      spaceBetween: 50,
      pagination: {
        el: ".swiper-pagination",
        type: "bullets",
        clickable: !0
      }
    }), new Swiper(".brands__slider", {
      slidesPerView: 6,
      slidesPerColumn: 1,
      navigation: {
        nextEl: ".brands .slider-controls .slider-controls__btn.next",
        prevEl: ".brands .slider-controls .slider-controls__btn.prev",
        hideOnClick: !0
      }
    }), new Swiper(".sales .sales__col.slider .swiper-container", {
      slidesPerView: 2,
      spaceBetween: 30,
      navigation: {
        nextEl: ".sales .sales__col.slider .sales__slider-arrow.next",
        prevEl: ".sales .sales__col.slider .sales__slider-arrow.prev",
        hideOnClick: !0
      }
    });
  };
}, function (e, n, r) {
  r(2), e.exports = r(0);
}, function (e, n, r) {
  "use strict";

  r.r(n);
  var t = r(0);
  document.addEventListener("DOMContentLoaded", function () {
    Object(t["default"])();
  });
}]);