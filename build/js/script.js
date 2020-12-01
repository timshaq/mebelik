"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

!function (e) {
  var t = {};

  function n(i) {
    if (t[i]) return t[i].exports;
    var s = t[i] = {
      i: i,
      l: !1,
      exports: {}
    };
    return e[i].call(s.exports, s, s.exports, n), s.l = !0, s.exports;
  }

  n.m = e, n.c = t, n.d = function (e, t, i) {
    n.o(e, t) || Object.defineProperty(e, t, {
      enumerable: !0,
      get: i
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
    var i = Object.create(null);
    if (n.r(i), Object.defineProperty(i, "default", {
      enumerable: !0,
      value: e
    }), 2 & t && "string" != typeof e) for (var s in e) {
      n.d(i, s, function (t) {
        return e[t];
      }.bind(null, s));
    }
    return i;
  }, n.n = function (e) {
    var t = e && e.__esModule ? function () {
      return e["default"];
    } : function () {
      return e;
    };
    return n.d(t, "a", t), t;
  }, n.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }, n.p = "", n(n.s = 6);
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
    var e = document.getElementById("price-slider");
    if (!e) return;
    var t = document.getElementById("price-from"),
        n = document.getElementById("price-to"),
        i = +document.getElementById("price-cont").getAttribute("data-min"),
        s = +document.getElementById("price-cont").getAttribute("data-max"),
        l = ("" + s).split("").length;
    noUiSlider.create(e, {
      start: [i + 2e3, s - 5e3],
      connect: [!0, !1, !0],
      padding: [0, 17],
      range: {
        min: [0],
        max: [s]
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
      t.value = e[0], n.value = e[1];
    }), t.addEventListener("input", function (n) {
      t.value.length > l && (t.value = +t.value.substring(0, t.value.length - (t.value.length - l))), t.value > s && (t.value = s), t.value < 1 && (t.value = i), e.noUiSlider.set([t.value, null]);
    }), n.addEventListener("input", function (t) {
      n.value.length > l && (n.value = +n.value.substring(0, n.value.length - (n.value.length - l))), n.value > s && (n.value = s), n.value < 1 && (n.value = i), e.noUiSlider.set([null, n.value]);
    });
    var r = document.getElementById("filter-btn"),
        o = document.getElementById("sort-btn"),
        a = document.getElementById("filter-close"),
        c = document.getElementById("filter"),
        d = document.getElementById("html");

    function u() {
      d.style.overflowX = "hidden", d.style.overflowY = "hidden";
    }

    function p() {
      d.style.overflowX = "hidden", d.style.overflowY = "scroll";
    }

    r.addEventListener("click", function () {
      return c.classList.add("open"), void u();
    }), a.addEventListener("click", function () {
      return c.classList.remove("open"), void p();
    }), o.addEventListener("click", function () {
      o.classList.contains("active") ? (o.classList.remove("active"), p()) : (u(), o.classList.add("active"));
    });
    var v = document.querySelectorAll(".filter__item"),
        m = Array.prototype.slice.call(v),
        w = document.querySelectorAll(".filter__item-title");
    Array.prototype.slice.call(w).forEach(function (e, t) {
      e.addEventListener("click", function () {
        m[t].classList.contains("hide") ? m[t].classList.remove("hide") : m[t].classList.add("hide");
      });
    }), m.forEach(function (e, t) {
      var n = e.querySelector(".filter__item-more-link");
      n && n.addEventListener("click", function () {
        e.classList.contains("full") ? (e.classList.remove("full"), n.innerText = "Показать еще") : (e.classList.add("full"), n.innerText = "Скрыть");
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
    var e = document.querySelectorAll(".product-description__item"),
        t = Array.prototype.slice.call(e),
        n = document.querySelectorAll(".product-description__tabs-title"),
        i = Array.prototype.slice.call(n),
        s = document.querySelectorAll(".product-description__item-title"),
        l = Array.prototype.slice.call(s);
    i.forEach(function (e, n) {
      var s = i;
      e.addEventListener("click", function () {
        s.forEach(function (e) {
          e.classList.remove("active");
        }), s[n].classList.add("active"), t.forEach(function (e) {
          e.classList.remove("active");
        }), t[n].classList.add("active");
      });
    }), l.forEach(function (e, n) {
      e.addEventListener("click", function () {
        t[n].classList.contains("active-mob") ? t[n].classList.remove("active-mob") : t[n].classList.add("active-mob");
      });
    });
    var r = document.querySelector(".product-preview .gallery-thumbs"),
        o = document.querySelector(".product-preview .gallery-top"),
        a = document.querySelector(".product-preview .gallery-top .swiper-button-next"),
        c = document.querySelector(".product-preview .gallery-top .swiper-button-prev");
    var d = new Swiper(r, {
      breakpoints: {
        320: {
          init: !1
        },
        699: {
          init: !0,
          spaceBetween: 55,
          slidesPerView: 5,
          freeMode: !0,
          watchSlidesVisibility: !0,
          watchSlidesProgress: !0
        }
      }
    });
    new Swiper(o, {
      spaceBetween: 0,
      slidesPerView: 1,
      thumbs: {
        swiper: d
      },
      breakpoints: {
        320: {
          pagination: {
            el: ".product-preview .gallery-top .swiper-pagination",
            type: "bullets"
          }
        },
        699: {
          navigation: {
            nextEl: a,
            prevEl: c
          }
        }
      }
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
      on: {
        imagesReady: function imagesReady() {
          var e = this.height;
          console.log("height"), console.log(e), this.slides.forEach(function (t) {
            console.log(t), t.style.height = e + "px";
          });
        }
      },
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
          i = e.querySelector(".slider-controls__btn.prev");
      new Swiper(t, {
        slidesPerView: 4,
        slidesPerColumn: 1,
        spaceBetween: 30,
        allowTouchMove: !1,
        watchOverflow: !0,
        navigation: {
          nextEl: n,
          prevEl: i,
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
          spaceBetween: 60
        },
        768: {
          slidesPerView: 4.35,
          spaceBetween: 60
        },
        1200: {
          slidesPerView: 6,
          spaceBetween: 80
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
  n(1), n(2), n(7), n(0), n(8), n(3), n(9), n(4), e.exports = n(5);
}, function (e, t) {}, function (e, t, n) {
  "use strict";

  n.r(t), t["default"] = function () {};
}, function (e, t, n) {
  "use strict";

  n.r(t);
  var i = n(4),
      s = n(0),
      l = n(5),
      r = n(2),
      o = n(1),
      a = n(3);
  document.addEventListener("DOMContentLoaded", function () {
    var e,
        t = document.getElementById("header");
    e = window.innerWidth > 0 ? window.innerWidth : screen.width, window.addEventListener("resize", function (t) {
      e = window.innerWidth > 0 ? window.innerWidth : screen.width, console.log("resize"), console.log(e);
    }), Object(i["default"])(), Object(r["default"])(e), window.addEventListener("scroll", function (e) {
      window.scrollY;
      Object(s["default"])();
    }), Object(s["default"])(), Object(l["default"])();
    document.querySelectorAll(".header__nav-item").forEach(function (t) {
      t.addEventListener("click", function (n) {
        if (e <= 1199 && (n.preventDefault(), console.log("ev"), console.log(n.target), e <= 768)) if (n.preventDefault(), n.target === this || n.target === this.children[0]) console.log("this"), console.log(this), t.classList.contains("open") ? t.classList.remove("open") : t.classList.add("open");else if (n.target.classList.contains("header__more-title-link") || n.target.classList.contains("header__more-title")) {
          var i;
          "A" === n.target.tagName && (i = n.target.getAttribute("href")), "H2" === n.target.tagName && (i = n.target.children[0].getAttribute("href")), i && (location.href = i);
        } else if (n.target.classList.contains("header__more-list") || n.target.classList.contains("header__more-list-title-link") || n.target.classList.contains("header__more-list-title")) {
          var s = n.target;
          "A" === s.tagName && (s = s.parentElement.parentElement.parentElement), "H2" === s.tagName && (s = s.parentElement.parentElement), s.classList.contains("open") ? s.classList.remove("open") : s.classList.add("open");
        } else (n.target.classList.contains("header__more-link") || n.target.classList.contains("header__more-subtitle")) && ("H3" === n.target.tagName && (location.href = n.target.children[0].getAttribute("href")), "A" === n.target.tagName && (location.href = n.target.getAttribute("href")));
      });
    });
    document.getElementById("burger-btn").addEventListener("click", function () {
      t.classList.contains("menu-open") ? (t.classList.remove("menu-open"), t.classList.remove("active"), t.classList.remove("not-search")) : (t.classList.add("menu-open"), t.classList.add("active"), t.classList.add("not-search"));
    });
    var n = document.getElementById("catalog-tab"),
        c = document.getElementById("help-tab"),
        d = document.getElementById("login-tab"),
        u = document.getElementById("catalog-tab-list"),
        p = document.getElementById("help-tab-list"),
        v = document.getElementById("login-tab-cont"),
        m = [n, c, d],
        w = [u, p, v];
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
        g = document.getElementById("btn-registr"),
        h = document.getElementById("btn-auth"),
        y = document.getElementById("auth-cont"),
        L = document.getElementById("auth-close"),
        E = document.getElementById("registr-cont"),
        b = document.getElementById("regist-close");

    function _(e) {
      e.classList.remove("open"), html.style.overflowX = "hidden", html.style.overflowY = "scroll";
    }

    function B(e) {
      e.classList.add("open"), html.style.overflowX = "hidden", html.style.overflowY = "hidden";
    }

    f.addEventListener("click", function () {
      return B(y);
    }), g.addEventListener("click", function () {
      _(y), B(E);
    }), h.addEventListener("click", function () {
      _(E), B(y);
    }), L.addEventListener("click", function () {
      return _(y);
    }), b.addEventListener("click", function () {
      return _(E);
    }), Object(o["default"])(), Object(a["default"])();
  });
}]);