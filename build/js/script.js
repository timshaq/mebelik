"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

!function (e) {
  var t = {};

  function s(n) {
    if (t[n]) return t[n].exports;
    var i = t[n] = {
      i: n,
      l: !1,
      exports: {}
    };
    return e[n].call(i.exports, i, i.exports, s), i.l = !0, i.exports;
  }

  s.m = e, s.c = t, s.d = function (e, t, n) {
    s.o(e, t) || Object.defineProperty(e, t, {
      enumerable: !0,
      get: n
    });
  }, s.r = function (e) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    });
  }, s.t = function (e, t) {
    if (1 & t && (e = s(e)), 8 & t) return e;
    if (4 & t && "object" == _typeof(e) && e && e.__esModule) return e;
    var n = Object.create(null);
    if (s.r(n), Object.defineProperty(n, "default", {
      enumerable: !0,
      value: e
    }), 2 & t && "string" != typeof e) for (var i in e) {
      s.d(n, i, function (t) {
        return e[t];
      }.bind(null, i));
    }
    return n;
  }, s.n = function (e) {
    var t = e && e.__esModule ? function () {
      return e["default"];
    } : function () {
      return e;
    };
    return s.d(t, "a", t), t;
  }, s.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }, s.p = "", s(s.s = 3);
}([function (e, t, s) {
  "use strict";

  s.r(t), t["default"] = function () {
    header.classList.remove("search"), window.scrollY >= 200 ? (header.classList.add("active"), header.classList.add("not-search")) : (header.classList.remove("active"), header.classList.remove("not-search"));
  };
}, function (e, t, s) {
  "use strict";

  s.r(t), t["default"] = function () {
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
      var t = e.querySelector(".product-line__slider .swiper-container"),
          s = e.querySelector(".slider-controls__btn.next"),
          n = e.querySelector(".slider-controls__btn.prev");
      new Swiper(t, {
        slidesPerView: 4,
        slidesPerColumn: 1,
        spaceBetween: 30,
        allowTouchMove: !1,
        navigation: {
          nextEl: s,
          prevEl: n,
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
}, function (e, t, s) {
  "use strict";

  s.r(t), t["default"] = function () {
    document.getElementById("toggleSearch").addEventListener("click", function () {
      header.classList.add("search"), header.classList.remove("not-search");
    });
  };
}, function (e, t, s) {
  s(4), s(0), s(5), s(6), s(1), e.exports = s(2);
}, function (e, t) {}, function (e, t, s) {
  "use strict";

  s.r(t), t["default"] = function () {};
}, function (e, t, s) {
  "use strict";

  s.r(t);
  var n = s(1),
      i = s(0),
      r = s(2);
  document.addEventListener("DOMContentLoaded", function () {
    var e = document.getElementById("header");
    Object(n["default"])(), window.addEventListener("scroll", function (e) {
      var t = window.scrollY;
      console.log(t), Object(i["default"])();
    }), Object(i["default"])(), Object(r["default"])();
    document.querySelectorAll(".header__nav-item").forEach(function (e) {
      e.addEventListener("click", function (t) {
        if (t.preventDefault(), console.log("ev"), console.log(t.target), (window.innerWidth > 0 ? window.innerWidth : screen.width) <= 768) if (t.preventDefault(), t.target === this || t.target === this.children[0]) console.log("this"), console.log(this), e.classList.contains("open") ? e.classList.remove("open") : e.classList.add("open");else if (t.target.classList.contains("header__more-title-link") || t.target.classList.contains("header__more-title")) {
          var s;
          "A" === t.target.tagName && (s = t.target.getAttribute("href")), "H2" === t.target.tagName && (s = t.target.children[0].getAttribute("href")), s && (location.href = s);
        } else if (t.target.classList.contains("header__more-list") || t.target.classList.contains("header__more-list-title-link") || t.target.classList.contains("header__more-list-title")) {
          var n = t.target;
          "A" === n.tagName && (n = n.parentElement.parentElement), "H2" === n.tagName && (n = n.parentElement), n.classList.contains("open") ? n.classList.remove("open") : n.classList.add("open");
        } else (t.target.classList.contains("header__more-link") || t.target.classList.contains("header__more-subtitle")) && ("H3" === t.target.tagName && (location.href = t.target.children[0].getAttribute("href")), "A" === t.target.tagName && (location.href = t.target.getAttribute("href")));
      });
    });
    document.getElementById("burger-btn").addEventListener("click", function () {
      e.classList.contains("menu-open") ? (e.classList.remove("menu-open"), e.classList.remove("active"), e.classList.remove("not-search")) : (e.classList.add("menu-open"), e.classList.add("active"), e.classList.add("not-search"));
    });
    var t = document.getElementById("catalog-tab"),
        s = document.getElementById("help-tab"),
        l = document.getElementById("login-tab"),
        a = document.getElementById("catalog-tab-list"),
        o = document.getElementById("help-tab-list"),
        c = document.getElementById("login-tab-cont"),
        d = [t, s, l],
        u = [a, o, c];
    d.forEach(function (e, t) {
      e.addEventListener("click", function () {
        d.forEach(function (e) {
          return e.classList.remove("active");
        }), d[t].classList.add("active"), u.forEach(function (e) {
          return e.style.display = "none";
        }), u[t].style.display = "flex";
      });
    });
  });
}]);