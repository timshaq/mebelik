"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

!function (e) {
  var s = {};

  function r(l) {
    if (s[l]) return s[l].exports;
    var i = s[l] = {
      i: l,
      l: !1,
      exports: {}
    };
    return e[l].call(i.exports, i, i.exports, r), i.l = !0, i.exports;
  }

  r.m = e, r.c = s, r.d = function (e, s, l) {
    r.o(e, s) || Object.defineProperty(e, s, {
      enumerable: !0,
      get: l
    });
  }, r.r = function (e) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    });
  }, r.t = function (e, s) {
    if (1 & s && (e = r(e)), 8 & s) return e;
    if (4 & s && "object" == _typeof(e) && e && e.__esModule) return e;
    var l = Object.create(null);
    if (r.r(l), Object.defineProperty(l, "default", {
      enumerable: !0,
      value: e
    }), 2 & s && "string" != typeof e) for (var i in e) {
      r.d(l, i, function (s) {
        return e[s];
      }.bind(null, i));
    }
    return l;
  }, r.n = function (e) {
    var s = e && e.__esModule ? function () {
      return e["default"];
    } : function () {
      return e;
    };
    return r.d(s, "a", s), s;
  }, r.o = function (e, s) {
    return Object.prototype.hasOwnProperty.call(e, s);
  }, r.p = "", r(r.s = 2);
}([function (e, s, r) {
  "use strict";

  r.r(s), s["default"] = function () {};
}, function (e, s, r) {
  "use strict";

  r.r(s), s["default"] = function () {
    console.log("sliders");
    new Swiper(".preview.swiper-container", {
      slidesPerView: 1,
      loopedSlides: 1,
      spaceBetween: 1e3,
      loop: !0,
      pagination: {
        el: ".swiper-pagination",
        type: "bullets",
        clickable: !0
      },
      breakpoints: {
        320: {
          pagination: {
            el: null
          }
        },
        768: {
          autoplay: !1
        },
        1200: {
          autoplay: !1
        }
      }
    }), new Swiper(".news .news__row.swiper-container", {
      watchOverflow: !0,
      slidesPerView: 4,
      spaceBetween: 30,
      breakpoints: {
        320: {
          slidesPerView: 1.2,
          spaceBetween: 10
        },
        420: {
          slidesPerView: 2,
          spaceBetween: 10
        },
        650: {
          slidesPerView: 3
        },
        1200: {
          slidesPerView: 4
        }
      }
    });
    document.querySelectorAll(".product-line").forEach(function (e) {
      var s = e.querySelector(".product-line__slider .swiper-container"),
          r = e.querySelector(".slider-controls__btn.next"),
          l = e.querySelector(".slider-controls__btn.prev");
      new Swiper(s, {
        slidesPerView: 4,
        slidesPerColumn: 1,
        spaceBetween: 30,
        allowTouchMove: !1,
        navigation: {
          nextEl: r,
          prevEl: l,
          hideOnClick: !0
        },
        breakpoints: {
          0: {
            slidesPerView: 2,
            spaceBetween: 10,
            allowTouchMove: !0
          },
          320: {
            slidesPerView: 2,
            spaceBetween: 10,
            allowTouchMove: !0
          },
          550: {
            slidesPerView: 3,
            spaceBetween: 10,
            allowTouchMove: !0
          },
          700: {
            width: 673,
            slidesPerView: 3.2,
            spaceBetween: 30
          },
          735: {
            width: 708,
            slidesPerView: 3,
            spaceBetween: 30
          },
          1200: {
            width: 1170,
            slidesPerView: 4,
            spaceBetween: 30
          }
        }
      });
    });
    new Swiper(".product-line__phcont-slider .swiper-container", {
      slidesPerView: 1,
      slideClass: "swiper-slide-inside",
      pagination: {
        el: ".swiper-pagination",
        type: "bullets",
        clickable: !0
      },
      breakpoints: {
        0: {
          allowTouchMove: !0,
          loop: !0,
          slidesPerView: 1
        }
      }
    }), new Swiper(".brands__slider", {
      slidesPerView: 6,
      slidesPerColumn: 1,
      navigation: {
        nextEl: ".brands .slider-controls .slider-controls__btn.next",
        prevEl: ".brands .slider-controls .slider-controls__btn.prev",
        hideOnClick: !0
      },
      breakpoints: {
        0: {
          allowTouchMove: !0,
          slidesPerView: 1.8,
          spaceBetween: 10
        },
        768: {
          slidesPerView: 4.35,
          spaceBetween: 0,
          navigation: {
            nextEl: ".sales .slider-controls .slider-controls__btn.next",
            prevEl: ".sales .slider-controls .slider-controls__btn.prev",
            hideOnClick: !0
          }
        },
        1200: {
          navigation: {
            nextEl: ".sales .sales__col.slider .sales__slider-arrow.next",
            prevEl: ".sales .sales__col.slider .sales__slider-arrow.prev",
            hideOnClick: !0
          }
        }
      }
    }), new Swiper(".sales .sales__col.slider .swiper-container", {
      slidesPerView: 2,
      spaceBetween: 30,
      breakpoints: {
        320: {
          allowTouchMove: !0,
          slidesPerView: 1.2,
          spaceBetween: 10
        },
        480: {
          allowTouchMove: !0,
          slidesPerView: 1.5,
          spaceBetween: 10
        },
        650: {
          slidesPerView: 1.9
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 30,
          navigation: {
            nextEl: ".sales .slider-controls .slider-controls__btn.next",
            prevEl: ".sales .slider-controls .slider-controls__btn.prev",
            hideOnClick: !0
          }
        },
        1200: {
          slidesPerView: 2,
          navigation: {
            nextEl: ".sales .sales__col.slider .sales__slider-arrow.next",
            prevEl: ".sales .sales__col.slider .sales__slider-arrow.prev",
            hideOnClick: !0
          }
        }
      }
    });
  };
}, function (e, s, r) {
  r(0), r(3), e.exports = r(1);
}, function (e, s, r) {
  "use strict";

  r.r(s);
  var l = r(1),
      i = r(0);
  document.addEventListener("DOMContentLoaded", function () {
    Object(l["default"])(), Object(i["default"])();
  });
}]);