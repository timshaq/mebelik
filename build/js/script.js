"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

!function (e) {
  var t = {};

  function n(s) {
    if (t[s]) return t[s].exports;
    var i = t[s] = {
      i: s,
      l: !1,
      exports: {}
    };
    return e[s].call(i.exports, i, i.exports, n), i.l = !0, i.exports;
  }

  n.m = e, n.c = t, n.d = function (e, t, s) {
    n.o(e, t) || Object.defineProperty(e, t, {
      enumerable: !0,
      get: s
    });
  }, n.r = function (e) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    });
  }, n.t = function (e, t) {
    if (1 & t && (e = n(e)), 8 & t) return e;
    if (4 & t && "object" == _typeof(e) && e && e.__esModule) return e;
    var s = Object.create(null);
    if (n.r(s), Object.defineProperty(s, "default", {
      enumerable: !0,
      value: e
    }), 2 & t && "string" != typeof e) for (var i in e) {
      n.d(s, i, function (t) {
        return e[t];
      }.bind(null, i));
    }
    return s;
  }, n.n = function (e) {
    var t = e && e.__esModule ? function () {
      return e["default"];
    } : function () {
      return e;
    };
    return n.d(t, "a", t), t;
  }, n.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }, n.p = "", n(n.s = 5);
}([function (e, t, n) {
  "use strict";

  n.r(t), t["default"] = function () {
    var e = document.getElementById("arrow-up");
    header.classList.remove("search"), window.scrollY >= 200 ? (header.classList.add("active"), header.classList.add("not-search"), e.classList.add("active")) : (header.classList.remove("active"), header.classList.remove("not-search"), e.classList.remove("active")), e.addEventListener("click", function () {
      return window.scrollTo(0, 0);
    });
  };
}, function (e, t, n) {
  "use strict";

  n.r(t), t["default"] = function () {
    var e = document.getElementById("price-slider"),
        t = document.getElementById("price-from"),
        n = document.getElementById("price-to"),
        s = +document.getElementById("price-cont").getAttribute("data-min"),
        i = +document.getElementById("price-cont").getAttribute("data-max");
    noUiSlider.create(e, {
      start: [s, i],
      connect: [!0, !1, !0],
      padding: [0, 17],
      range: {
        min: [s],
        max: [i]
      },
      format: {
        to: function to(e) {
          return Math.round(+e);
        },
        from: function from(e) {
          return Math.round(+e);
        }
      }
    }), e.noUiSlider.on("update", function (e) {
      t.setAttribute("value", e[0]), n.setAttribute("value", e[1]);
    }), t.addEventListener("keydown", function (n) {
      e.noUiSlider.set([t.value, null]);
    }), n.addEventListener("keydown", function (t) {
      e.noUiSlider.set([null, n.value]);
    });
    var l = document.getElementById("filter-btn"),
        r = document.getElementById("sort-btn"),
        o = document.getElementById("filter-close"),
        a = document.getElementById("filter"),
        c = document.getElementById("html");

    function d(e) {
      e.classList.remove("open"), c.style.overflowX = "hidden", c.style.overflowY = "scroll";
    }

    function u(e) {
      e.classList.add("open"), c.style.overflowX = "hidden", c.style.overflowY = "hidden";
    }

    l.addEventListener("click", function () {
      return u(a);
    }), o.addEventListener("click", function () {
      return d(a);
    }), r.addEventListener("click", function () {
      r.classList.contains("active") ? r.classList.remove("active") : r.classList.add("active");
    });
    var p = document.querySelectorAll(".filter__item"),
        m = Array.prototype.slice.call(p),
        w = document.querySelectorAll(".filter__item-title");
    Array.prototype.slice.call(w).forEach(function (e, t) {
      e.addEventListener("click", function () {
        m[t].classList.contains("hide") ? m[t].classList.remove("hide") : m[t].classList.add("hide");
      });
    });
  };
}, function (e, t, n) {
  "use strict";

  n.r(t), t["default"] = function () {
    var e = document.querySelectorAll(".navigation__link-list"),
        t = Array.prototype.slice.call(e);
    t.forEach(function (e, n) {
      e.addEventListener("click", function () {
        t[n].classList.contains("open") ? t[n].classList.remove("open") : t[n].classList.add("open"), t.forEach(function (e, t) {
          t != n && e.classList.remove("open");
        });
      });
    });
  };
}, function (e, t, n) {
  "use strict";

  n.r(t), t["default"] = function () {
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
          n = e.querySelector(".slider-controls__btn.next"),
          s = e.querySelector(".slider-controls__btn.prev");
      new Swiper(t, {
        slidesPerView: 4,
        slidesPerColumn: 1,
        spaceBetween: 30,
        allowTouchMove: !1,
        watchOverflow: !0,
        navigation: {
          nextEl: n,
          prevEl: s,
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
}, function (e, t, n) {
  "use strict";

  n.r(t), t["default"] = function () {
    document.getElementById("toggleSearch").addEventListener("click", function () {
      header.classList.add("search"), header.classList.remove("not-search");
    });
  };
}, function (e, t, n) {
  n(1), n(2), n(6), n(0), n(7), n(8), n(3), e.exports = n(4);
}, function (e, t) {}, function (e, t, n) {
  "use strict";

  n.r(t), t["default"] = function () {};
}, function (e, t, n) {
  "use strict";

  n.r(t);
  var s = n(3),
      i = n(0),
      l = n(4),
      r = n(2),
      o = n(1);
  document.addEventListener("DOMContentLoaded", function () {
    var e,
        t = document.getElementById("header");
    e = window.innerWidth > 0 ? window.innerWidth : screen.width, window.addEventListener("resize", function (t) {
      e = window.innerWidth > 0 ? window.innerWidth : screen.width, console.log("resize");
    }), Object(s["default"])(), Object(r["default"])(e), window.addEventListener("scroll", function (e) {
      var t = window.scrollY;
      console.log(t), Object(i["default"])();
    }), Object(i["default"])(), Object(l["default"])();
    document.querySelectorAll(".header__nav-item").forEach(function (t) {
      t.addEventListener("click", function (n) {
        if (n.preventDefault(), console.log("ev"), console.log(n.target), e <= 768) if (n.preventDefault(), n.target === this || n.target === this.children[0]) console.log("this"), console.log(this), t.classList.contains("open") ? t.classList.remove("open") : t.classList.add("open");else if (n.target.classList.contains("header__more-title-link") || n.target.classList.contains("header__more-title")) {
          var s;
          "A" === n.target.tagName && (s = n.target.getAttribute("href")), "H2" === n.target.tagName && (s = n.target.children[0].getAttribute("href")), s && (location.href = s);
        } else if (n.target.classList.contains("header__more-list") || n.target.classList.contains("header__more-list-title-link") || n.target.classList.contains("header__more-list-title")) {
          var i = n.target;
          "A" === i.tagName && (i = i.parentElement.parentElement.parentElement), "H2" === i.tagName && (i = i.parentElement.parentElement), i.classList.contains("open") ? i.classList.remove("open") : i.classList.add("open");
        } else (n.target.classList.contains("header__more-link") || n.target.classList.contains("header__more-subtitle")) && ("H3" === n.target.tagName && (location.href = n.target.children[0].getAttribute("href")), "A" === n.target.tagName && (location.href = n.target.getAttribute("href")));
      });
    });
    document.getElementById("burger-btn").addEventListener("click", function () {
      t.classList.contains("menu-open") ? (t.classList.remove("menu-open"), t.classList.remove("active"), t.classList.remove("not-search")) : (t.classList.add("menu-open"), t.classList.add("active"), t.classList.add("not-search"));
    });
    var n = document.getElementById("catalog-tab"),
        a = document.getElementById("help-tab"),
        c = document.getElementById("login-tab"),
        d = document.getElementById("catalog-tab-list"),
        u = document.getElementById("help-tab-list"),
        p = document.getElementById("login-tab-cont"),
        m = [n, a, c],
        w = [d, u, p];
    m.forEach(function (e, t) {
      e.addEventListener("click", function () {
        m.forEach(function (e) {
          return e.classList.remove("active");
        }), m[t].classList.add("active"), w.forEach(function (e) {
          return e.classList.remove("open");
        }), w[t].classList.add("open");
      });
    });
    var f = document.getElementById("btn-login"),
        v = document.getElementById("btn-registr"),
        g = document.getElementById("btn-auth"),
        h = document.getElementById("auth-cont"),
        y = document.getElementById("auth-close"),
        E = document.getElementById("registr-cont"),
        L = document.getElementById("regist-close");

    function b(e) {
      e.classList.remove("open"), html.style.overflowX = "hidden", html.style.overflowY = "scroll";
    }

    function _(e) {
      e.classList.add("open"), html.style.overflowX = "hidden", html.style.overflowY = "hidden";
    }

    f.addEventListener("click", function () {
      return _(h);
    }), v.addEventListener("click", function () {
      b(h), _(E);
    }), g.addEventListener("click", function () {
      b(E), _(h);
    }), y.addEventListener("click", function () {
      return b(h);
    }), L.addEventListener("click", function () {
      return b(E);
    }), Object(o["default"])();
  });
}]);