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
  }, s.p = "", s(s.s = 4);
}([function (e, t, s) {
  "use strict";

  s.r(t), t["default"] = function () {
    header.classList.remove("search"), window.scrollY >= 200 ? (header.classList.add("active"), header.classList.add("not-search")) : (header.classList.remove("active"), header.classList.remove("not-search"));
  };
}, function (e, t, s) {
  "use strict";

  s.r(t), t["default"] = function () {
    var e = document.querySelectorAll(".navigation__link-list"),
        t = Array.prototype.slice.call(e);
    t.forEach(function (e, s) {
      e.addEventListener("click", function () {
        t[s].classList.contains("open") ? t[s].classList.remove("open") : t[s].classList.add("open"), t.forEach(function (e, t) {
          t != s && e.classList.remove("open");
        });
      });
    });
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
    var e = document.querySelectorAll(".product-line");
    (e = Array.prototype.slice.call(e)).forEach(function (e) {
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
          spaceBetween: 0
        },
        1200: {
          slidesPerView: 6,
          spaceBetween: 0
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
  s(1), s(5), s(0), s(6), s(7), s(2), e.exports = s(3);
}, function (e, t) {}, function (e, t, s) {
  "use strict";

  s.r(t), t["default"] = function () {};
}, function (e, t, s) {
  "use strict";

  s.r(t);
  var n = s(2),
      i = s(0),
      r = s(3),
      l = s(1);
  document.addEventListener("DOMContentLoaded", function () {
    var e,
        t = document.getElementById("header");
    e = window.innerWidth > 0 ? window.innerWidth : screen.width, window.addEventListener("resize", function (t) {
      e = window.innerWidth > 0 ? window.innerWidth : screen.width, console.log("resize");
    }), Object(n["default"])(), Object(l["default"])(e), window.addEventListener("scroll", function (e) {
      var t = window.scrollY;
      console.log(t), Object(i["default"])();
    }), Object(i["default"])(), Object(r["default"])();
    document.querySelectorAll(".header__nav-item").forEach(function (t) {
      t.addEventListener("click", function (s) {
        if (s.preventDefault(), console.log("ev"), console.log(s.target), e <= 768) if (s.preventDefault(), s.target === this || s.target === this.children[0]) console.log("this"), console.log(this), t.classList.contains("open") ? t.classList.remove("open") : t.classList.add("open");else if (s.target.classList.contains("header__more-title-link") || s.target.classList.contains("header__more-title")) {
          var n;
          "A" === s.target.tagName && (n = s.target.getAttribute("href")), "H2" === s.target.tagName && (n = s.target.children[0].getAttribute("href")), n && (location.href = n);
        } else if (s.target.classList.contains("header__more-list") || s.target.classList.contains("header__more-list-title-link") || s.target.classList.contains("header__more-list-title")) {
          var i = s.target;
          "A" === i.tagName && (i = i.parentElement.parentElement), "H2" === i.tagName && (i = i.parentElement), i.classList.contains("open") ? i.classList.remove("open") : i.classList.add("open");
        } else (s.target.classList.contains("header__more-link") || s.target.classList.contains("header__more-subtitle")) && ("H3" === s.target.tagName && (location.href = s.target.children[0].getAttribute("href")), "A" === s.target.tagName && (location.href = s.target.getAttribute("href")));
      });
    });
    document.getElementById("burger-btn").addEventListener("click", function () {
      t.classList.contains("menu-open") ? (t.classList.remove("menu-open"), t.classList.remove("active"), t.classList.remove("not-search")) : (t.classList.add("menu-open"), t.classList.add("active"), t.classList.add("not-search"));
    });
    var s = document.getElementById("catalog-tab"),
        o = document.getElementById("help-tab"),
        a = document.getElementById("login-tab"),
        c = document.getElementById("catalog-tab-list"),
        d = document.getElementById("help-tab-list"),
        u = document.getElementById("login-tab-cont"),
        p = [s, o, a],
        w = [c, d, u];
    p.forEach(function (e, t) {
      e.addEventListener("click", function () {
        p.forEach(function (e) {
          return e.classList.remove("active");
        }), p[t].classList.add("active"), w.forEach(function (e) {
          return e.classList.remove("open");
        }), w[t].classList.add("open");
      });
    });
  });
}]);