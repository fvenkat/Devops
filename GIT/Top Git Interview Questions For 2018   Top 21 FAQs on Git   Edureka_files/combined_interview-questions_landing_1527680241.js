/*Start/home/release/www/blog_180530_1650/wp-content/themes/edu-hiran/js/bootstrap.min.js*/
/*
 * Bootstrap v3.3.6 (http://getbootstrap.com)
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under the MIT license
 */
if ("undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery"); + function(a) { "use strict"; var b = a.fn.jquery.split(" ")[0].split("."); if (b[0] < 2 && b[1] < 9 || 1 == b[0] && 9 == b[1] && b[2] < 1 || b[0] > 2) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 3") }(jQuery), + function(a) {
    "use strict";

    function b() {
        var a = document.createElement("bootstrap"),
            b = { WebkitTransition: "webkitTransitionEnd", MozTransition: "transitionend", OTransition: "oTransitionEnd otransitionend", transition: "transitionend" };
        for (var c in b)
            if (void 0 !== a.style[c]) return { end: b[c] };
        return !1
    }
    a.fn.emulateTransitionEnd = function(b) {
        var c = !1,
            d = this;
        a(this).one("bsTransitionEnd", function() { c = !0 });
        var e = function() { c || a(d).trigger(a.support.transition.end) };
        return setTimeout(e, b), this
    }, a(function() { a.support.transition = b(), a.support.transition && (a.event.special.bsTransitionEnd = { bindType: a.support.transition.end, delegateType: a.support.transition.end, handle: function(b) { return a(b.target).is(this) ? b.handleObj.handler.apply(this, arguments) : void 0 } }) })
}(jQuery), + function(a) {
    "use strict";

    function b(b) {
        return this.each(function() {
            var c = a(this),
                e = c.data("bs.alert");
            e || c.data("bs.alert", e = new d(this)), "string" == typeof b && e[b].call(c)
        })
    }
    var c = '[data-dismiss="alert"]',
        d = function(b) { a(b).on("click", c, this.close) };
    d.VERSION = "3.3.6", d.TRANSITION_DURATION = 150, d.prototype.close = function(b) {
        function c() { g.detach().trigger("closed.bs.alert").remove() }
        var e = a(this),
            f = e.attr("data-target");
        f || (f = e.attr("href"), f = f && f.replace(/.*(?=#[^\s]*$)/, ""));
        var g = a(f);
        b && b.preventDefault(), g.length || (g = e.closest(".alert")), g.trigger(b = a.Event("close.bs.alert")), b.isDefaultPrevented() || (g.removeClass("in"), a.support.transition && g.hasClass("fade") ? g.one("bsTransitionEnd", c).emulateTransitionEnd(d.TRANSITION_DURATION) : c())
    };
    var e = a.fn.alert;
    a.fn.alert = b, a.fn.alert.Constructor = d, a.fn.alert.noConflict = function() { return a.fn.alert = e, this }, a(document).on("click.bs.alert.data-api", c, d.prototype.close)
}(jQuery), + function(a) {
    "use strict";

    function b(b) {
        return this.each(function() {
            var d = a(this),
                e = d.data("bs.button"),
                f = "object" == typeof b && b;
            e || d.data("bs.button", e = new c(this, f)), "toggle" == b ? e.toggle() : b && e.setState(b)
        })
    }
    var c = function(b, d) { this.$element = a(b), this.options = a.extend({}, c.DEFAULTS, d), this.isLoading = !1 };
    c.VERSION = "3.3.6", c.DEFAULTS = { loadingText: "loading..." }, c.prototype.setState = function(b) {
        var c = "disabled",
            d = this.$element,
            e = d.is("input") ? "val" : "html",
            f = d.data();
        b += "Text", null == f.resetText && d.data("resetText", d[e]()), setTimeout(a.proxy(function() { d[e](null == f[b] ? this.options[b] : f[b]), "loadingText" == b ? (this.isLoading = !0, d.addClass(c).attr(c, c)) : this.isLoading && (this.isLoading = !1, d.removeClass(c).removeAttr(c)) }, this), 0)
    }, c.prototype.toggle = function() {
        var a = !0,
            b = this.$element.closest('[data-toggle="buttons"]');
        if (b.length) { var c = this.$element.find("input"); "radio" == c.prop("type") ? (c.prop("checked") && (a = !1), b.find(".active").removeClass("active"), this.$element.addClass("active")) : "checkbox" == c.prop("type") && (c.prop("checked") !== this.$element.hasClass("active") && (a = !1), this.$element.toggleClass("active")), c.prop("checked", this.$element.hasClass("active")), a && c.trigger("change") } else this.$element.attr("aria-pressed", !this.$element.hasClass("active")), this.$element.toggleClass("active")
    };
    var d = a.fn.button;
    a.fn.button = b, a.fn.button.Constructor = c, a.fn.button.noConflict = function() { return a.fn.button = d, this }, a(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function(c) {
        var d = a(c.target);
        d.hasClass("btn") || (d = d.closest(".btn")), b.call(d, "toggle"), a(c.target).is('input[type="radio"]') || a(c.target).is('input[type="checkbox"]') || c.preventDefault()
    }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function(b) { a(b.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(b.type)) })
}(jQuery), + function(a) {
    "use strict";

    function b(b) {
        return this.each(function() {
            var d = a(this),
                e = d.data("bs.carousel"),
                f = a.extend({}, c.DEFAULTS, d.data(), "object" == typeof b && b),
                g = "string" == typeof b ? b : f.slide;
            e || d.data("bs.carousel", e = new c(this, f)), "number" == typeof b ? e.to(b) : g ? e[g]() : f.interval && e.pause().cycle()
        })
    }
    var c = function(b, c) { this.$element = a(b), this.$indicators = this.$element.find(".carousel-indicators"), this.options = c, this.paused = null, this.sliding = null, this.interval = null, this.$active = null, this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", a.proxy(this.keydown, this)), "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", a.proxy(this.pause, this)).on("mouseleave.bs.carousel", a.proxy(this.cycle, this)) };
    c.VERSION = "3.3.6", c.TRANSITION_DURATION = 600, c.DEFAULTS = { interval: 5e3, pause: "hover", wrap: !0, keyboard: !0 }, c.prototype.keydown = function(a) {
        if (!/input|textarea/i.test(a.target.tagName)) {
            switch (a.which) {
                case 37:
                    this.prev();
                    break;
                case 39:
                    this.next();
                    break;
                default:
                    return
            }
            a.preventDefault()
        }
    }, c.prototype.cycle = function(b) { return b || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(a.proxy(this.next, this), this.options.interval)), this }, c.prototype.getItemIndex = function(a) { return this.$items = a.parent().children(".item"), this.$items.index(a || this.$active) }, c.prototype.getItemForDirection = function(a, b) {
        var c = this.getItemIndex(b),
            d = "prev" == a && 0 === c || "next" == a && c == this.$items.length - 1;
        if (d && !this.options.wrap) return b;
        var e = "prev" == a ? -1 : 1,
            f = (c + e) % this.$items.length;
        return this.$items.eq(f)
    }, c.prototype.to = function(a) {
        var b = this,
            c = this.getItemIndex(this.$active = this.$element.find(".item.active"));
        return a > this.$items.length - 1 || 0 > a ? void 0 : this.sliding ? this.$element.one("slid.bs.carousel", function() { b.to(a) }) : c == a ? this.pause().cycle() : this.slide(a > c ? "next" : "prev", this.$items.eq(a))
    }, c.prototype.pause = function(b) { return b || (this.paused = !0), this.$element.find(".next, .prev").length && a.support.transition && (this.$element.trigger(a.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this }, c.prototype.next = function() { return this.sliding ? void 0 : this.slide("next") }, c.prototype.prev = function() { return this.sliding ? void 0 : this.slide("prev") }, c.prototype.slide = function(b, d) {
        var e = this.$element.find(".item.active"),
            f = d || this.getItemForDirection(b, e),
            g = this.interval,
            h = "next" == b ? "left" : "right",
            i = this;
        if (f.hasClass("active")) return this.sliding = !1;
        var j = f[0],
            k = a.Event("slide.bs.carousel", { relatedTarget: j, direction: h });
        if (this.$element.trigger(k), !k.isDefaultPrevented()) {
            if (this.sliding = !0, g && this.pause(), this.$indicators.length) {
                this.$indicators.find(".active").removeClass("active");
                var l = a(this.$indicators.children()[this.getItemIndex(f)]);
                l && l.addClass("active")
            }
            var m = a.Event("slid.bs.carousel", { relatedTarget: j, direction: h });
            return a.support.transition && this.$element.hasClass("slide") ? (f.addClass(b), f[0].offsetWidth, e.addClass(h), f.addClass(h), e.one("bsTransitionEnd", function() { f.removeClass([b, h].join(" ")).addClass("active"), e.removeClass(["active", h].join(" ")), i.sliding = !1, setTimeout(function() { i.$element.trigger(m) }, 0) }).emulateTransitionEnd(c.TRANSITION_DURATION)) : (e.removeClass("active"), f.addClass("active"), this.sliding = !1, this.$element.trigger(m)), g && this.cycle(), this
        }
    };
    var d = a.fn.carousel;
    a.fn.carousel = b, a.fn.carousel.Constructor = c, a.fn.carousel.noConflict = function() { return a.fn.carousel = d, this };
    var e = function(c) {
        var d, e = a(this),
            f = a(e.attr("data-target") || (d = e.attr("href")) && d.replace(/.*(?=#[^\s]+$)/, ""));
        if (f.hasClass("carousel")) {
            var g = a.extend({}, f.data(), e.data()),
                h = e.attr("data-slide-to");
            h && (g.interval = !1), b.call(f, g), h && f.data("bs.carousel").to(h), c.preventDefault()
        }
    };
    a(document).on("click.bs.carousel.data-api", "[data-slide]", e).on("click.bs.carousel.data-api", "[data-slide-to]", e), a(window).on("load", function() {
        a('[data-ride="carousel"]').each(function() {
            var c = a(this);
            b.call(c, c.data())
        })
    })
}(jQuery), + function(a) {
    "use strict";

    function b(b) { var c, d = b.attr("data-target") || (c = b.attr("href")) && c.replace(/.*(?=#[^\s]+$)/, ""); return a(d) }

    function c(b) {
        return this.each(function() {
            var c = a(this),
                e = c.data("bs.collapse"),
                f = a.extend({}, d.DEFAULTS, c.data(), "object" == typeof b && b);
            !e && f.toggle && /show|hide/.test(b) && (f.toggle = !1), e || c.data("bs.collapse", e = new d(this, f)), "string" == typeof b && e[b]()
        })
    }
    var d = function(b, c) { this.$element = a(b), this.options = a.extend({}, d.DEFAULTS, c), this.$trigger = a('[data-toggle="collapse"][href="#' + b.id + '"],[data-toggle="collapse"][data-target="#' + b.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle() };
    d.VERSION = "3.3.6", d.TRANSITION_DURATION = 350, d.DEFAULTS = { toggle: !0 }, d.prototype.dimension = function() { var a = this.$element.hasClass("width"); return a ? "width" : "height" }, d.prototype.show = function() {
        if (!this.transitioning && !this.$element.hasClass("in")) {
            var b, e = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
            if (!(e && e.length && (b = e.data("bs.collapse"), b && b.transitioning))) {
                var f = a.Event("show.bs.collapse");
                if (this.$element.trigger(f), !f.isDefaultPrevented()) {
                    e && e.length && (c.call(e, "hide"), b || e.data("bs.collapse", null));
                    var g = this.dimension();
                    this.$element.removeClass("collapse").addClass("collapsing")[g](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;
                    var h = function() { this.$element.removeClass("collapsing").addClass("collapse in")[g](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse") };
                    if (!a.support.transition) return h.call(this);
                    var i = a.camelCase(["scroll", g].join("-"));
                    this.$element.one("bsTransitionEnd", a.proxy(h, this)).emulateTransitionEnd(d.TRANSITION_DURATION)[g](this.$element[0][i])
                }
            }
        }
    }, d.prototype.hide = function() {
        if (!this.transitioning && this.$element.hasClass("in")) {
            var b = a.Event("hide.bs.collapse");
            if (this.$element.trigger(b), !b.isDefaultPrevented()) {
                var c = this.dimension();
                this.$element[c](this.$element[c]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;
                var e = function() { this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse") };
                return a.support.transition ? void this.$element[c](0).one("bsTransitionEnd", a.proxy(e, this)).emulateTransitionEnd(d.TRANSITION_DURATION) : e.call(this)
            }
        }
    }, d.prototype.toggle = function() { this[this.$element.hasClass("in") ? "hide" : "show"]() }, d.prototype.getParent = function() {
        return a(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(a.proxy(function(c, d) {
            var e = a(d);
            this.addAriaAndCollapsedClass(b(e), e)
        }, this)).end()
    }, d.prototype.addAriaAndCollapsedClass = function(a, b) {
        var c = a.hasClass("in");
        a.attr("aria-expanded", c), b.toggleClass("collapsed", !c).attr("aria-expanded", c)
    };
    var e = a.fn.collapse;
    a.fn.collapse = c, a.fn.collapse.Constructor = d, a.fn.collapse.noConflict = function() { return a.fn.collapse = e, this }, a(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(d) {
        var e = a(this);
        e.attr("data-target") || d.preventDefault();
        var f = b(e),
            g = f.data("bs.collapse"),
            h = g ? "toggle" : e.data();
        c.call(f, h)
    })
}(jQuery), + function(a) {
    "use strict";

    function b(b) {
        var c = b.attr("data-target");
        c || (c = b.attr("href"), c = c && /#[A-Za-z]/.test(c) && c.replace(/.*(?=#[^\s]*$)/, ""));
        var d = c && a(c);
        return d && d.length ? d : b.parent()
    }

    function c(c) {
        c && 3 === c.which || (a(e).remove(), a(f).each(function() {
            var d = a(this),
                e = b(d),
                f = { relatedTarget: this };
            e.hasClass("open") && (c && "click" == c.type && /input|textarea/i.test(c.target.tagName) && a.contains(e[0], c.target) || (e.trigger(c = a.Event("hide.bs.dropdown", f)), c.isDefaultPrevented() || (d.attr("aria-expanded", "false"), e.removeClass("open").trigger(a.Event("hidden.bs.dropdown", f)))))
        }))
    }

    function d(b) {
        return this.each(function() {
            var c = a(this),
                d = c.data("bs.dropdown");
            d || c.data("bs.dropdown", d = new g(this)), "string" == typeof b && d[b].call(c)
        })
    }
    var e = ".dropdown-backdrop",
        f = '[data-toggle="dropdown"]',
        g = function(b) { a(b).on("click.bs.dropdown", this.toggle) };
    g.VERSION = "3.3.6", g.prototype.toggle = function(d) {
        var e = a(this);
        if (!e.is(".disabled, :disabled")) {
            var f = b(e),
                g = f.hasClass("open");
            if (c(), !g) {
                "ontouchstart" in document.documentElement && !f.closest(".navbar-nav").length && a(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(a(this)).on("click", c);
                var h = { relatedTarget: this };
                if (f.trigger(d = a.Event("show.bs.dropdown", h)), d.isDefaultPrevented()) return;
                e.trigger("focus").attr("aria-expanded", "true"), f.toggleClass("open").trigger(a.Event("shown.bs.dropdown", h))
            }
            return !1
        }
    }, g.prototype.keydown = function(c) {
        if (/(38|40|27|32)/.test(c.which) && !/input|textarea/i.test(c.target.tagName)) {
            var d = a(this);
            if (c.preventDefault(), c.stopPropagation(), !d.is(".disabled, :disabled")) {
                var e = b(d),
                    g = e.hasClass("open");
                if (!g && 27 != c.which || g && 27 == c.which) return 27 == c.which && e.find(f).trigger("focus"), d.trigger("click");
                var h = " li:not(.disabled):visible a",
                    i = e.find(".dropdown-menu" + h);
                if (i.length) {
                    var j = i.index(c.target);
                    38 == c.which && j > 0 && j--, 40 == c.which && j < i.length - 1 && j++, ~j || (j = 0), i.eq(j).trigger("focus")
                }
            }
        }
    };
    var h = a.fn.dropdown;
    a.fn.dropdown = d, a.fn.dropdown.Constructor = g, a.fn.dropdown.noConflict = function() { return a.fn.dropdown = h, this }, a(document).on("click.bs.dropdown.data-api", c).on("click.bs.dropdown.data-api", ".dropdown form", function(a) { a.stopPropagation() }).on("click.bs.dropdown.data-api", f, g.prototype.toggle).on("keydown.bs.dropdown.data-api", f, g.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", g.prototype.keydown)
}(jQuery), + function(a) {
    "use strict";

    function b(b, d) {
        return this.each(function() {
            var e = a(this),
                f = e.data("bs.modal"),
                g = a.extend({}, c.DEFAULTS, e.data(), "object" == typeof b && b);
            f || e.data("bs.modal", f = new c(this, g)), "string" == typeof b ? f[b](d) : g.show && f.show(d)
        })
    }
    var c = function(b, c) { this.options = c, this.$body = a(document.body), this.$element = a(b), this.$dialog = this.$element.find(".modal-dialog"), this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, this.ignoreBackdropClick = !1, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, a.proxy(function() { this.$element.trigger("loaded.bs.modal") }, this)) };
    c.VERSION = "3.3.6", c.TRANSITION_DURATION = 300, c.BACKDROP_TRANSITION_DURATION = 150, c.DEFAULTS = { backdrop: !0, keyboard: !0, show: !0 }, c.prototype.toggle = function(a) { return this.isShown ? this.hide() : this.show(a) }, c.prototype.show = function(b) {
        var d = this,
            e = a.Event("show.bs.modal", { relatedTarget: b });
        this.$element.trigger(e), this.isShown || e.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', a.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function() { d.$element.one("mouseup.dismiss.bs.modal", function(b) { a(b.target).is(d.$element) && (d.ignoreBackdropClick = !0) }) }), this.backdrop(function() {
            var e = a.support.transition && d.$element.hasClass("fade");
            d.$element.parent().length || d.$element.appendTo(d.$body), d.$element.show().scrollTop(0), d.adjustDialog(), e && d.$element[0].offsetWidth, d.$element.addClass("in"), d.enforceFocus();
            var f = a.Event("shown.bs.modal", { relatedTarget: b });
            e ? d.$dialog.one("bsTransitionEnd", function() { d.$element.trigger("focus").trigger(f) }).emulateTransitionEnd(c.TRANSITION_DURATION) : d.$element.trigger("focus").trigger(f)
        }))
    }, c.prototype.hide = function(b) { b && b.preventDefault(), b = a.Event("hide.bs.modal"), this.$element.trigger(b), this.isShown && !b.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), a(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), a.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", a.proxy(this.hideModal, this)).emulateTransitionEnd(c.TRANSITION_DURATION) : this.hideModal()) }, c.prototype.enforceFocus = function() { a(document).off("focusin.bs.modal").on("focusin.bs.modal", a.proxy(function(a) { this.$element[0] === a.target || this.$element.has(a.target).length || this.$element.trigger("focus") }, this)) }, c.prototype.escape = function() { this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", a.proxy(function(a) { 27 == a.which && this.hide() }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal") }, c.prototype.resize = function() { this.isShown ? a(window).on("resize.bs.modal", a.proxy(this.handleUpdate, this)) : a(window).off("resize.bs.modal") }, c.prototype.hideModal = function() {
        var a = this;
        this.$element.hide(), this.backdrop(function() { a.$body.removeClass("modal-open"), a.resetAdjustments(), a.resetScrollbar(), a.$element.trigger("hidden.bs.modal") })
    }, c.prototype.removeBackdrop = function() { this.$backdrop && this.$backdrop.remove(), this.$backdrop = null }, c.prototype.backdrop = function(b) {
        var d = this,
            e = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
            var f = a.support.transition && e;
            if (this.$backdrop = a(document.createElement("div")).addClass("modal-backdrop " + e).appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", a.proxy(function(a) { return this.ignoreBackdropClick ? void(this.ignoreBackdropClick = !1) : void(a.target === a.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide())) }, this)), f && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !b) return;
            f ? this.$backdrop.one("bsTransitionEnd", b).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION) : b()
        } else if (!this.isShown && this.$backdrop) {
            this.$backdrop.removeClass("in");
            var g = function() { d.removeBackdrop(), b && b() };
            a.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", g).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION) : g()
        } else b && b()
    }, c.prototype.handleUpdate = function() { this.adjustDialog() }, c.prototype.adjustDialog = function() {
        var a = this.$element[0].scrollHeight > document.documentElement.clientHeight;
        this.$element.css({ paddingLeft: !this.bodyIsOverflowing && a ? this.scrollbarWidth : "", paddingRight: this.bodyIsOverflowing && !a ? this.scrollbarWidth : "" })
    }, c.prototype.resetAdjustments = function() { this.$element.css({ paddingLeft: "", paddingRight: "" }) }, c.prototype.checkScrollbar = function() {
        var a = window.innerWidth;
        if (!a) {
            var b = document.documentElement.getBoundingClientRect();
            a = b.right - Math.abs(b.left)
        }
        this.bodyIsOverflowing = document.body.clientWidth < a, this.scrollbarWidth = this.measureScrollbar()
    }, c.prototype.setScrollbar = function() {
        var a = parseInt(this.$body.css("padding-right") || 0, 10);
        this.originalBodyPad = document.body.style.paddingRight || "", this.bodyIsOverflowing && this.$body.css("padding-right", a + this.scrollbarWidth)
    }, c.prototype.resetScrollbar = function() { this.$body.css("padding-right", this.originalBodyPad) }, c.prototype.measureScrollbar = function() {
        var a = document.createElement("div");
        a.className = "modal-scrollbar-measure", this.$body.append(a);
        var b = a.offsetWidth - a.clientWidth;
        return this.$body[0].removeChild(a), b
    };
    var d = a.fn.modal;
    a.fn.modal = b, a.fn.modal.Constructor = c, a.fn.modal.noConflict = function() { return a.fn.modal = d, this }, a(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(c) {
        var d = a(this),
            e = d.attr("href"),
            f = a(d.attr("data-target") || e && e.replace(/.*(?=#[^\s]+$)/, "")),
            g = f.data("bs.modal") ? "toggle" : a.extend({ remote: !/#/.test(e) && e }, f.data(), d.data());
        d.is("a") && c.preventDefault(), f.one("show.bs.modal", function(a) { a.isDefaultPrevented() || f.one("hidden.bs.modal", function() { d.is(":visible") && d.trigger("focus") }) }), b.call(f, g, this)
    })
}(jQuery), + function(a) {
    "use strict";

    function b(b) {
        return this.each(function() {
            var d = a(this),
                e = d.data("bs.tooltip"),
                f = "object" == typeof b && b;
            (e || !/destroy|hide/.test(b)) && (e || d.data("bs.tooltip", e = new c(this, f)), "string" == typeof b && e[b]())
        })
    }
    var c = function(a, b) { this.type = null, this.options = null, this.enabled = null, this.timeout = null, this.hoverState = null, this.$element = null, this.inState = null, this.init("tooltip", a, b) };
    c.VERSION = "3.3.6", c.TRANSITION_DURATION = 150, c.DEFAULTS = { animation: !0, placement: "top", selector: !1, template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>', trigger: "hover focus", title: "", delay: 0, html: !1, container: !1, viewport: { selector: "body", padding: 0 } }, c.prototype.init = function(b, c, d) {
        if (this.enabled = !0, this.type = b, this.$element = a(c), this.options = this.getOptions(d), this.$viewport = this.options.viewport && a(a.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport), this.inState = { click: !1, hover: !1, focus: !1 }, this.$element[0] instanceof document.constructor && !this.options.selector) throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
        for (var e = this.options.trigger.split(" "), f = e.length; f--;) {
            var g = e[f];
            if ("click" == g) this.$element.on("click." + this.type, this.options.selector, a.proxy(this.toggle, this));
            else if ("manual" != g) {
                var h = "hover" == g ? "mouseenter" : "focusin",
                    i = "hover" == g ? "mouseleave" : "focusout";
                this.$element.on(h + "." + this.type, this.options.selector, a.proxy(this.enter, this)), this.$element.on(i + "." + this.type, this.options.selector, a.proxy(this.leave, this))
            }
        }
        this.options.selector ? this._options = a.extend({}, this.options, { trigger: "manual", selector: "" }) : this.fixTitle()
    }, c.prototype.getDefaults = function() { return c.DEFAULTS }, c.prototype.getOptions = function(b) { return b = a.extend({}, this.getDefaults(), this.$element.data(), b), b.delay && "number" == typeof b.delay && (b.delay = { show: b.delay, hide: b.delay }), b }, c.prototype.getDelegateOptions = function() {
        var b = {},
            c = this.getDefaults();
        return this._options && a.each(this._options, function(a, d) { c[a] != d && (b[a] = d) }), b
    }, c.prototype.enter = function(b) { var c = b instanceof this.constructor ? b : a(b.currentTarget).data("bs." + this.type); return c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c)), b instanceof a.Event && (c.inState["focusin" == b.type ? "focus" : "hover"] = !0), c.tip().hasClass("in") || "in" == c.hoverState ? void(c.hoverState = "in") : (clearTimeout(c.timeout), c.hoverState = "in", c.options.delay && c.options.delay.show ? void(c.timeout = setTimeout(function() { "in" == c.hoverState && c.show() }, c.options.delay.show)) : c.show()) }, c.prototype.isInStateTrue = function() {
        for (var a in this.inState)
            if (this.inState[a]) return !0;
        return !1
    }, c.prototype.leave = function(b) { var c = b instanceof this.constructor ? b : a(b.currentTarget).data("bs." + this.type); return c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c)), b instanceof a.Event && (c.inState["focusout" == b.type ? "focus" : "hover"] = !1), c.isInStateTrue() ? void 0 : (clearTimeout(c.timeout), c.hoverState = "out", c.options.delay && c.options.delay.hide ? void(c.timeout = setTimeout(function() { "out" == c.hoverState && c.hide() }, c.options.delay.hide)) : c.hide()) }, c.prototype.show = function() {
        var b = a.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
            this.$element.trigger(b);
            var d = a.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
            if (b.isDefaultPrevented() || !d) return;
            var e = this,
                f = this.tip(),
                g = this.getUID(this.type);
            this.setContent(), f.attr("id", g), this.$element.attr("aria-describedby", g), this.options.animation && f.addClass("fade");
            var h = "function" == typeof this.options.placement ? this.options.placement.call(this, f[0], this.$element[0]) : this.options.placement,
                i = /\s?auto?\s?/i,
                j = i.test(h);
            j && (h = h.replace(i, "") || "top"), f.detach().css({ top: 0, left: 0, display: "block" }).addClass(h).data("bs." + this.type, this), this.options.container ? f.appendTo(this.options.container) : f.insertAfter(this.$element), this.$element.trigger("inserted.bs." + this.type);
            var k = this.getPosition(),
                l = f[0].offsetWidth,
                m = f[0].offsetHeight;
            if (j) {
                var n = h,
                    o = this.getPosition(this.$viewport);
                h = "bottom" == h && k.bottom + m > o.bottom ? "top" : "top" == h && k.top - m < o.top ? "bottom" : "right" == h && k.right + l > o.width ? "left" : "left" == h && k.left - l < o.left ? "right" : h, f.removeClass(n).addClass(h)
            }
            var p = this.getCalculatedOffset(h, k, l, m);
            this.applyPlacement(p, h);
            var q = function() {
                var a = e.hoverState;
                e.$element.trigger("shown.bs." + e.type), e.hoverState = null, "out" == a && e.leave(e)
            };
            a.support.transition && this.$tip.hasClass("fade") ? f.one("bsTransitionEnd", q).emulateTransitionEnd(c.TRANSITION_DURATION) : q()
        }
    }, c.prototype.applyPlacement = function(b, c) {
        var d = this.tip(),
            e = d[0].offsetWidth,
            f = d[0].offsetHeight,
            g = parseInt(d.css("margin-top"), 10),
            h = parseInt(d.css("margin-left"), 10);
        isNaN(g) && (g = 0), isNaN(h) && (h = 0), b.top += g, b.left += h, a.offset.setOffset(d[0], a.extend({ using: function(a) { d.css({ top: Math.round(a.top), left: Math.round(a.left) }) } }, b), 0), d.addClass("in");
        var i = d[0].offsetWidth,
            j = d[0].offsetHeight;
        "top" == c && j != f && (b.top = b.top + f - j);
        var k = this.getViewportAdjustedDelta(c, b, i, j);
        k.left ? b.left += k.left : b.top += k.top;
        var l = /top|bottom/.test(c),
            m = l ? 2 * k.left - e + i : 2 * k.top - f + j,
            n = l ? "offsetWidth" : "offsetHeight";
        d.offset(b), this.replaceArrow(m, d[0][n], l)
    }, c.prototype.replaceArrow = function(a, b, c) { this.arrow().css(c ? "left" : "top", 50 * (1 - a / b) + "%").css(c ? "top" : "left", "") }, c.prototype.setContent = function() {
        var a = this.tip(),
            b = this.getTitle();
        a.find(".tooltip-inner")[this.options.html ? "html" : "text"](b), a.removeClass("fade in top bottom left right")
    }, c.prototype.hide = function(b) {
        function d() { "in" != e.hoverState && f.detach(), e.$element.removeAttr("aria-describedby").trigger("hidden.bs." + e.type), b && b() }
        var e = this,
            f = a(this.$tip),
            g = a.Event("hide.bs." + this.type);
        return this.$element.trigger(g), g.isDefaultPrevented() ? void 0 : (f.removeClass("in"), a.support.transition && f.hasClass("fade") ? f.one("bsTransitionEnd", d).emulateTransitionEnd(c.TRANSITION_DURATION) : d(), this.hoverState = null, this)
    }, c.prototype.fixTitle = function() {
        var a = this.$element;
        (a.attr("title") || "string" != typeof a.attr("data-original-title")) && a.attr("data-original-title", a.attr("title") || "").attr("title", "")
    }, c.prototype.hasContent = function() { return this.getTitle() }, c.prototype.getPosition = function(b) {
        b = b || this.$element;
        var c = b[0],
            d = "BODY" == c.tagName,
            e = c.getBoundingClientRect();
        null == e.width && (e = a.extend({}, e, { width: e.right - e.left, height: e.bottom - e.top }));
        var f = d ? { top: 0, left: 0 } : b.offset(),
            g = { scroll: d ? document.documentElement.scrollTop || document.body.scrollTop : b.scrollTop() },
            h = d ? { width: a(window).width(), height: a(window).height() } : null;
        return a.extend({}, e, g, h, f)
    }, c.prototype.getCalculatedOffset = function(a, b, c, d) { return "bottom" == a ? { top: b.top + b.height, left: b.left + b.width / 2 - c / 2 } : "top" == a ? { top: b.top - d, left: b.left + b.width / 2 - c / 2 } : "left" == a ? { top: b.top + b.height / 2 - d / 2, left: b.left - c } : { top: b.top + b.height / 2 - d / 2, left: b.left + b.width } }, c.prototype.getViewportAdjustedDelta = function(a, b, c, d) {
        var e = { top: 0, left: 0 };
        if (!this.$viewport) return e;
        var f = this.options.viewport && this.options.viewport.padding || 0,
            g = this.getPosition(this.$viewport);
        if (/right|left/.test(a)) {
            var h = b.top - f - g.scroll,
                i = b.top + f - g.scroll + d;
            h < g.top ? e.top = g.top - h : i > g.top + g.height && (e.top = g.top + g.height - i)
        } else {
            var j = b.left - f,
                k = b.left + f + c;
            j < g.left ? e.left = g.left - j : k > g.right && (e.left = g.left + g.width - k)
        }
        return e
    }, c.prototype.getTitle = function() {
        var a, b = this.$element,
            c = this.options;
        return a = b.attr("data-original-title") || ("function" == typeof c.title ? c.title.call(b[0]) : c.title)
    }, c.prototype.getUID = function(a) { do a += ~~(1e6 * Math.random()); while (document.getElementById(a)); return a }, c.prototype.tip = function() { if (!this.$tip && (this.$tip = a(this.options.template), 1 != this.$tip.length)) throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!"); return this.$tip }, c.prototype.arrow = function() { return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow") }, c.prototype.enable = function() { this.enabled = !0 }, c.prototype.disable = function() { this.enabled = !1 }, c.prototype.toggleEnabled = function() { this.enabled = !this.enabled }, c.prototype.toggle = function(b) {
        var c = this;
        b && (c = a(b.currentTarget).data("bs." + this.type), c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c))), b ? (c.inState.click = !c.inState.click, c.isInStateTrue() ? c.enter(c) : c.leave(c)) : c.tip().hasClass("in") ? c.leave(c) : c.enter(c)
    }, c.prototype.destroy = function() {
        var a = this;
        clearTimeout(this.timeout), this.hide(function() { a.$element.off("." + a.type).removeData("bs." + a.type), a.$tip && a.$tip.detach(), a.$tip = null, a.$arrow = null, a.$viewport = null })
    };
    var d = a.fn.tooltip;
    a.fn.tooltip = b, a.fn.tooltip.Constructor = c, a.fn.tooltip.noConflict = function() { return a.fn.tooltip = d, this }
}(jQuery), + function(a) {
    "use strict";

    function b(b) {
        return this.each(function() {
            var d = a(this),
                e = d.data("bs.popover"),
                f = "object" == typeof b && b;
            (e || !/destroy|hide/.test(b)) && (e || d.data("bs.popover", e = new c(this, f)), "string" == typeof b && e[b]())
        })
    }
    var c = function(a, b) { this.init("popover", a, b) };
    if (!a.fn.tooltip) throw new Error("Popover requires tooltip.js");
    c.VERSION = "3.3.6", c.DEFAULTS = a.extend({}, a.fn.tooltip.Constructor.DEFAULTS, { placement: "right", trigger: "click", content: "", template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>' }), c.prototype = a.extend({}, a.fn.tooltip.Constructor.prototype), c.prototype.constructor = c, c.prototype.getDefaults = function() { return c.DEFAULTS }, c.prototype.setContent = function() {
        var a = this.tip(),
            b = this.getTitle(),
            c = this.getContent();
        a.find(".popover-title")[this.options.html ? "html" : "text"](b), a.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof c ? "html" : "append" : "text"](c), a.removeClass("fade top bottom left right in"), a.find(".popover-title").html() || a.find(".popover-title").hide()
    }, c.prototype.hasContent = function() { return this.getTitle() || this.getContent() }, c.prototype.getContent = function() {
        var a = this.$element,
            b = this.options;
        return a.attr("data-content") || ("function" == typeof b.content ? b.content.call(a[0]) : b.content)
    }, c.prototype.arrow = function() { return this.$arrow = this.$arrow || this.tip().find(".arrow") };
    var d = a.fn.popover;
    a.fn.popover = b, a.fn.popover.Constructor = c, a.fn.popover.noConflict = function() { return a.fn.popover = d, this }
}(jQuery), + function(a) {
    "use strict";

    function b(c, d) { this.$body = a(document.body), this.$scrollElement = a(a(c).is(document.body) ? window : c), this.options = a.extend({}, b.DEFAULTS, d), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", a.proxy(this.process, this)), this.refresh(), this.process() }

    function c(c) {
        return this.each(function() {
            var d = a(this),
                e = d.data("bs.scrollspy"),
                f = "object" == typeof c && c;
            e || d.data("bs.scrollspy", e = new b(this, f)), "string" == typeof c && e[c]()
        })
    }
    b.VERSION = "3.3.6", b.DEFAULTS = { offset: 10 }, b.prototype.getScrollHeight = function() { return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight) }, b.prototype.refresh = function() {
        var b = this,
            c = "offset",
            d = 0;
        this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight(), a.isWindow(this.$scrollElement[0]) || (c = "position", d = this.$scrollElement.scrollTop()), this.$body.find(this.selector).map(function() {
            var b = a(this),
                e = b.data("target") || b.attr("href"),
                f = /^#./.test(e) && a(e);
            return f && f.length && f.is(":visible") && [
                [f[c]().top + d, e]
            ] || null
        }).sort(function(a, b) { return a[0] - b[0] }).each(function() { b.offsets.push(this[0]), b.targets.push(this[1]) })
    }, b.prototype.process = function() {
        var a, b = this.$scrollElement.scrollTop() + this.options.offset,
            c = this.getScrollHeight(),
            d = this.options.offset + c - this.$scrollElement.height(),
            e = this.offsets,
            f = this.targets,
            g = this.activeTarget;
        if (this.scrollHeight != c && this.refresh(), b >= d) return g != (a = f[f.length - 1]) && this.activate(a);
        if (g && b < e[0]) return this.activeTarget = null, this.clear();
        for (a = e.length; a--;) g != f[a] && b >= e[a] && (void 0 === e[a + 1] || b < e[a + 1]) && this.activate(f[a])
    }, b.prototype.activate = function(b) {
        this.activeTarget = b, this.clear();
        var c = this.selector + '[data-target="' + b + '"],' + this.selector + '[href="' + b + '"]',
            d = a(c).parents("li").addClass("active");
        d.parent(".dropdown-menu").length && (d = d.closest("li.dropdown").addClass("active")), d.trigger("activate.bs.scrollspy")
    }, b.prototype.clear = function() { a(this.selector).parentsUntil(this.options.target, ".active").removeClass("active") };
    var d = a.fn.scrollspy;
    a.fn.scrollspy = c, a.fn.scrollspy.Constructor = b, a.fn.scrollspy.noConflict = function() { return a.fn.scrollspy = d, this }, a(window).on("load.bs.scrollspy.data-api", function() {
        a('[data-spy="scroll"]').each(function() {
            var b = a(this);
            c.call(b, b.data())
        })
    })
}(jQuery), + function(a) {
    "use strict";

    function b(b) {
        return this.each(function() {
            var d = a(this),
                e = d.data("bs.tab");
            e || d.data("bs.tab", e = new c(this)), "string" == typeof b && e[b]()
        })
    }
    var c = function(b) { this.element = a(b) };
    c.VERSION = "3.3.6", c.TRANSITION_DURATION = 150, c.prototype.show = function() {
        var b = this.element,
            c = b.closest("ul:not(.dropdown-menu)"),
            d = b.data("target");
        if (d || (d = b.attr("href"), d = d && d.replace(/.*(?=#[^\s]*$)/, "")), !b.parent("li").hasClass("active")) {
            var e = c.find(".active:last a"),
                f = a.Event("hide.bs.tab", { relatedTarget: b[0] }),
                g = a.Event("show.bs.tab", { relatedTarget: e[0] });
            if (e.trigger(f), b.trigger(g), !g.isDefaultPrevented() && !f.isDefaultPrevented()) {
                var h = a(d);
                this.activate(b.closest("li"), c), this.activate(h, h.parent(), function() { e.trigger({ type: "hidden.bs.tab", relatedTarget: b[0] }), b.trigger({ type: "shown.bs.tab", relatedTarget: e[0] }) })
            }
        }
    }, c.prototype.activate = function(b, d, e) {
        function f() { g.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), b.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), h ? (b[0].offsetWidth, b.addClass("in")) : b.removeClass("fade"), b.parent(".dropdown-menu").length && b.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), e && e() }
        var g = d.find("> .active"),
            h = e && a.support.transition && (g.length && g.hasClass("fade") || !!d.find("> .fade").length);
        g.length && h ? g.one("bsTransitionEnd", f).emulateTransitionEnd(c.TRANSITION_DURATION) : f(), g.removeClass("in")
    };
    var d = a.fn.tab;
    a.fn.tab = b, a.fn.tab.Constructor = c, a.fn.tab.noConflict = function() { return a.fn.tab = d, this };
    var e = function(c) { c.preventDefault(), b.call(a(this), "show") };
    a(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', e).on("click.bs.tab.data-api", '[data-toggle="pill"]', e)
}(jQuery), + function(a) {
    "use strict";

    function b(b) {
        return this.each(function() {
            var d = a(this),
                e = d.data("bs.affix"),
                f = "object" == typeof b && b;
            e || d.data("bs.affix", e = new c(this, f)), "string" == typeof b && e[b]()
        })
    }
    var c = function(b, d) { this.options = a.extend({}, c.DEFAULTS, d), this.$target = a(this.options.target).on("scroll.bs.affix.data-api", a.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", a.proxy(this.checkPositionWithEventLoop, this)), this.$element = a(b), this.affixed = null, this.unpin = null, this.pinnedOffset = null, this.checkPosition() };
    c.VERSION = "3.3.6", c.RESET = "affix affix-top affix-bottom", c.DEFAULTS = { offset: 0, target: window }, c.prototype.getState = function(a, b, c, d) {
        var e = this.$target.scrollTop(),
            f = this.$element.offset(),
            g = this.$target.height();
        if (null != c && "top" == this.affixed) return c > e ? "top" : !1;
        if ("bottom" == this.affixed) return null != c ? e + this.unpin <= f.top ? !1 : "bottom" : a - d >= e + g ? !1 : "bottom";
        var h = null == this.affixed,
            i = h ? e : f.top,
            j = h ? g : b;
        return null != c && c >= e ? "top" : null != d && i + j >= a - d ? "bottom" : !1
    }, c.prototype.getPinnedOffset = function() {
        if (this.pinnedOffset) return this.pinnedOffset;
        this.$element.removeClass(c.RESET).addClass("affix");
        var a = this.$target.scrollTop(),
            b = this.$element.offset();
        return this.pinnedOffset = b.top - a
    }, c.prototype.checkPositionWithEventLoop = function() { setTimeout(a.proxy(this.checkPosition, this), 1) }, c.prototype.checkPosition = function() {
        if (this.$element.is(":visible")) {
            var b = this.$element.height(),
                d = this.options.offset,
                e = d.top,
                f = d.bottom,
                g = Math.max(a(document).height(), a(document.body).height());
            "object" != typeof d && (f = e = d), "function" == typeof e && (e = d.top(this.$element)), "function" == typeof f && (f = d.bottom(this.$element));
            var h = this.getState(g, b, e, f);
            if (this.affixed != h) {
                null != this.unpin && this.$element.css("top", "");
                var i = "affix" + (h ? "-" + h : ""),
                    j = a.Event(i + ".bs.affix");
                if (this.$element.trigger(j), j.isDefaultPrevented()) return;
                this.affixed = h, this.unpin = "bottom" == h ? this.getPinnedOffset() : null, this.$element.removeClass(c.RESET).addClass(i).trigger(i.replace("affix", "affixed") + ".bs.affix")
            }
            "bottom" == h && this.$element.offset({ top: g - b - f })
        }
    };
    var d = a.fn.affix;
    a.fn.affix = b, a.fn.affix.Constructor = c, a.fn.affix.noConflict = function() { return a.fn.affix = d, this }, a(window).on("load", function() {
        a('[data-spy="affix"]').each(function() {
            var c = a(this),
                d = c.data();
            d.offset = d.offset || {}, null != d.offsetBottom && (d.offset.bottom = d.offsetBottom), null != d.offsetTop && (d.offset.top = d.offsetTop), b.call(c, d)
        })
    })
}(jQuery);/*END*/
/*Start/home/release/www/blog_180530_1650/wp-content/themes/edu-hiran/js/masonry.pkgd.min.js*/
/*!
 * Masonry PACKAGED v4.0.0
 * Cascading grid layout library
 * http://masonry.desandro.com
 * MIT License
 * by David DeSandro
 */

!function(t,e){"use strict";"function"==typeof define&&define.amd?define("jquery-bridget/jquery-bridget",["jquery"],function(i){e(t,i)}):"object"==typeof module&&module.exports?module.exports=e(t,require("jquery")):t.jQueryBridget=e(t,t.jQuery)}(window,function(t,e){"use strict";function i(i,r,a){function h(t,e,n){var o,r="$()."+i+'("'+e+'")';return t.each(function(t,h){var u=a.data(h,i);if(!u)return void s(i+" not initialized. Cannot call methods, i.e. "+r);var d=u[e];if(!d||"_"==e.charAt(0))return void s(r+" is not a valid method");var c=d.apply(u,n);o=void 0===o?c:o}),void 0!==o?o:t}function u(t,e){t.each(function(t,n){var o=a.data(n,i);o?(o.option(e),o._init()):(o=new r(n,e),a.data(n,i,o))})}a=a||e||t.jQuery,a&&(r.prototype.option||(r.prototype.option=function(t){a.isPlainObject(t)&&(this.options=a.extend(!0,this.options,t))}),a.fn[i]=function(t){if("string"==typeof t){var e=o.call(arguments,1);return h(this,t,e)}return u(this,t),this},n(a))}function n(t){!t||t&&t.bridget||(t.bridget=i)}var o=Array.prototype.slice,r=t.console,s="undefined"==typeof r?function(){}:function(t){r.error(t)};return n(e||t.jQuery),i}),function(t,e){"function"==typeof define&&define.amd?define("ev-emitter/ev-emitter",e):"object"==typeof module&&module.exports?module.exports=e():t.EvEmitter=e()}(this,function(){function t(){}var e=t.prototype;return e.on=function(t,e){if(t&&e){var i=this._events=this._events||{},n=i[t]=i[t]||[];return-1==n.indexOf(e)&&n.push(e),this}},e.once=function(t,e){if(t&&e){this.on(t,e);var i=this._onceEvents=this._onceEvents||{},n=i[t]=i[t]||[];return n[e]=!0,this}},e.off=function(t,e){var i=this._events&&this._events[t];if(i&&i.length){var n=i.indexOf(e);return-1!=n&&i.splice(n,1),this}},e.emitEvent=function(t,e){var i=this._events&&this._events[t];if(i&&i.length){var n=0,o=i[n];e=e||[];for(var r=this._onceEvents&&this._onceEvents[t];o;){var s=r&&r[o];s&&(this.off(t,o),delete r[o]),o.apply(this,e),n+=s?0:1,o=i[n]}return this}},t}),function(t,e){"use strict";"function"==typeof define&&define.amd?define("get-size/get-size",[],function(){return e()}):"object"==typeof module&&module.exports?module.exports=e():t.getSize=e()}(window,function(){"use strict";function t(t){var e=parseFloat(t),i=-1==t.indexOf("%")&&!isNaN(e);return i&&e}function e(){}function i(){for(var t={width:0,height:0,innerWidth:0,innerHeight:0,outerWidth:0,outerHeight:0},e=0;u>e;e++){var i=h[e];t[i]=0}return t}function n(t){var e=getComputedStyle(t);return e||a("Style returned "+e+". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"),e}function o(){if(!d){d=!0;var e=document.createElement("div");e.style.width="200px",e.style.padding="1px 2px 3px 4px",e.style.borderStyle="solid",e.style.borderWidth="1px 2px 3px 4px",e.style.boxSizing="border-box";var i=document.body||document.documentElement;i.appendChild(e);var o=n(e);r.isBoxSizeOuter=s=200==t(o.width),i.removeChild(e)}}function r(e){if(o(),"string"==typeof e&&(e=document.querySelector(e)),e&&"object"==typeof e&&e.nodeType){var r=n(e);if("none"==r.display)return i();var a={};a.width=e.offsetWidth,a.height=e.offsetHeight;for(var d=a.isBorderBox="border-box"==r.boxSizing,c=0;u>c;c++){var l=h[c],f=r[l],m=parseFloat(f);a[l]=isNaN(m)?0:m}var p=a.paddingLeft+a.paddingRight,g=a.paddingTop+a.paddingBottom,y=a.marginLeft+a.marginRight,v=a.marginTop+a.marginBottom,_=a.borderLeftWidth+a.borderRightWidth,E=a.borderTopWidth+a.borderBottomWidth,z=d&&s,b=t(r.width);b!==!1&&(a.width=b+(z?0:p+_));var x=t(r.height);return x!==!1&&(a.height=x+(z?0:g+E)),a.innerWidth=a.width-(p+_),a.innerHeight=a.height-(g+E),a.outerWidth=a.width+y,a.outerHeight=a.height+v,a}}var s,a="undefined"==typeof console?e:function(t){console.error(t)},h=["paddingLeft","paddingRight","paddingTop","paddingBottom","marginLeft","marginRight","marginTop","marginBottom","borderLeftWidth","borderRightWidth","borderTopWidth","borderBottomWidth"],u=h.length,d=!1;return r}),function(t,e){"use strict";"function"==typeof define&&define.amd?define("matches-selector/matches-selector",e):"object"==typeof module&&module.exports?module.exports=e():t.matchesSelector=e()}(window,function(){"use strict";var t=function(){var t=Element.prototype;if(t.matches)return"matches";if(t.matchesSelector)return"matchesSelector";for(var e=["webkit","moz","ms","o"],i=0;i<e.length;i++){var n=e[i],o=n+"MatchesSelector";if(t[o])return o}}();return function(e,i){return e[t](i)}}),function(t,e){"use strict";"function"==typeof define&&define.amd?define("fizzy-ui-utils/utils",["matches-selector/matches-selector"],function(i){return e(t,i)}):"object"==typeof module&&module.exports?module.exports=e(t,require("desandro-matches-selector")):t.fizzyUIUtils=e(t,t.matchesSelector)}(window,function(t,e){var i={};i.extend=function(t,e){for(var i in e)t[i]=e[i];return t},i.modulo=function(t,e){return(t%e+e)%e},i.makeArray=function(t){var e=[];if(Array.isArray(t))e=t;else if(t&&"number"==typeof t.length)for(var i=0;i<t.length;i++)e.push(t[i]);else e.push(t);return e},i.removeFrom=function(t,e){var i=t.indexOf(e);-1!=i&&t.splice(i,1)},i.getParent=function(t,i){for(;t!=document.body;)if(t=t.parentNode,e(t,i))return t},i.getQueryElement=function(t){return"string"==typeof t?document.querySelector(t):t},i.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},i.filterFindElements=function(t,n){t=i.makeArray(t);var o=[];return t.forEach(function(t){if(t instanceof HTMLElement){if(!n)return void o.push(t);e(t,n)&&o.push(t);for(var i=t.querySelectorAll(n),r=0;r<i.length;r++)o.push(i[r])}}),o},i.debounceMethod=function(t,e,i){var n=t.prototype[e],o=e+"Timeout";t.prototype[e]=function(){var t=this[o];t&&clearTimeout(t);var e=arguments,r=this;this[o]=setTimeout(function(){n.apply(r,e),delete r[o]},i||100)}},i.docReady=function(t){"complete"==document.readyState?t():document.addEventListener("DOMContentLoaded",t)},i.toDashed=function(t){return t.replace(/(.)([A-Z])/g,function(t,e,i){return e+"-"+i}).toLowerCase()};var n=t.console;return i.htmlInit=function(e,o){i.docReady(function(){var r=i.toDashed(o),s="data-"+r,a=document.querySelectorAll("["+s+"]"),h=document.querySelectorAll(".js-"+r),u=i.makeArray(a).concat(i.makeArray(h)),d=s+"-options",c=t.jQuery;u.forEach(function(t){var i,r=t.getAttribute(s)||t.getAttribute(d);try{i=r&&JSON.parse(r)}catch(a){return void(n&&n.error("Error parsing "+s+" on "+t.className+": "+a))}var h=new e(t,i);c&&c.data(t,o,h)})})},i}),function(t,e){"function"==typeof define&&define.amd?define("outlayer/item",["ev-emitter/ev-emitter","get-size/get-size"],function(i,n){return e(t,i,n)}):"object"==typeof module&&module.exports?module.exports=e(t,require("ev-emitter"),require("get-size")):(t.Outlayer={},t.Outlayer.Item=e(t,t.EvEmitter,t.getSize))}(window,function(t,e,i){"use strict";function n(t){for(var e in t)return!1;return e=null,!0}function o(t,e){t&&(this.element=t,this.layout=e,this.position={x:0,y:0},this._create())}function r(t){return t.replace(/([A-Z])/g,function(t){return"-"+t.toLowerCase()})}var s=document.documentElement.style,a="string"==typeof s.transition?"transition":"WebkitTransition",h="string"==typeof s.transform?"transform":"WebkitTransform",u={WebkitTransition:"webkitTransitionEnd",transition:"transitionend"}[a],d=[h,a,a+"Duration",a+"Property"],c=o.prototype=Object.create(e.prototype);c.constructor=o,c._create=function(){this._transn={ingProperties:{},clean:{},onEnd:{}},this.css({position:"absolute"})},c.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},c.getSize=function(){this.size=i(this.element)},c.css=function(t){var e=this.element.style;for(var i in t){var n=d[i]||i;e[n]=t[i]}},c.getPosition=function(){var t=getComputedStyle(this.element),e=this.layout._getOption("originLeft"),i=this.layout._getOption("originTop"),n=t[e?"left":"right"],o=t[i?"top":"bottom"],r=this.layout.size,s=-1!=n.indexOf("%")?parseFloat(n)/100*r.width:parseInt(n,10),a=-1!=o.indexOf("%")?parseFloat(o)/100*r.height:parseInt(o,10);s=isNaN(s)?0:s,a=isNaN(a)?0:a,s-=e?r.paddingLeft:r.paddingRight,a-=i?r.paddingTop:r.paddingBottom,this.position.x=s,this.position.y=a},c.layoutPosition=function(){var t=this.layout.size,e={},i=this.layout._getOption("originLeft"),n=this.layout._getOption("originTop"),o=i?"paddingLeft":"paddingRight",r=i?"left":"right",s=i?"right":"left",a=this.position.x+t[o];e[r]=this.getXValue(a),e[s]="";var h=n?"paddingTop":"paddingBottom",u=n?"top":"bottom",d=n?"bottom":"top",c=this.position.y+t[h];e[u]=this.getYValue(c),e[d]="",this.css(e),this.emitEvent("layout",[this])},c.getXValue=function(t){var e=this.layout._getOption("horizontal");return this.layout.options.percentPosition&&!e?t/this.layout.size.width*100+"%":t+"px"},c.getYValue=function(t){var e=this.layout._getOption("horizontal");return this.layout.options.percentPosition&&e?t/this.layout.size.height*100+"%":t+"px"},c._transitionTo=function(t,e){this.getPosition();var i=this.position.x,n=this.position.y,o=parseInt(t,10),r=parseInt(e,10),s=o===this.position.x&&r===this.position.y;if(this.setPosition(t,e),s&&!this.isTransitioning)return void this.layoutPosition();var a=t-i,h=e-n,u={};u.transform=this.getTranslate(a,h),this.transition({to:u,onTransitionEnd:{transform:this.layoutPosition},isCleaning:!0})},c.getTranslate=function(t,e){var i=this.layout._getOption("originLeft"),n=this.layout._getOption("originTop");return t=i?t:-t,e=n?e:-e,"translate3d("+t+"px, "+e+"px, 0)"},c.goTo=function(t,e){this.setPosition(t,e),this.layoutPosition()},c.moveTo=c._transitionTo,c.setPosition=function(t,e){this.position.x=parseInt(t,10),this.position.y=parseInt(e,10)},c._nonTransition=function(t){this.css(t.to),t.isCleaning&&this._removeStyles(t.to);for(var e in t.onTransitionEnd)t.onTransitionEnd[e].call(this)},c._transition=function(t){if(!parseFloat(this.layout.options.transitionDuration))return void this._nonTransition(t);var e=this._transn;for(var i in t.onTransitionEnd)e.onEnd[i]=t.onTransitionEnd[i];for(i in t.to)e.ingProperties[i]=!0,t.isCleaning&&(e.clean[i]=!0);if(t.from){this.css(t.from);var n=this.element.offsetHeight;n=null}this.enableTransition(t.to),this.css(t.to),this.isTransitioning=!0};var l="opacity,"+r(d.transform||"transform");c.enableTransition=function(){this.isTransitioning||(this.css({transitionProperty:l,transitionDuration:this.layout.options.transitionDuration}),this.element.addEventListener(u,this,!1))},c.transition=o.prototype[a?"_transition":"_nonTransition"],c.onwebkitTransitionEnd=function(t){this.ontransitionend(t)},c.onotransitionend=function(t){this.ontransitionend(t)};var f={"-webkit-transform":"transform"};c.ontransitionend=function(t){if(t.target===this.element){var e=this._transn,i=f[t.propertyName]||t.propertyName;if(delete e.ingProperties[i],n(e.ingProperties)&&this.disableTransition(),i in e.clean&&(this.element.style[t.propertyName]="",delete e.clean[i]),i in e.onEnd){var o=e.onEnd[i];o.call(this),delete e.onEnd[i]}this.emitEvent("transitionEnd",[this])}},c.disableTransition=function(){this.removeTransitionStyles(),this.element.removeEventListener(u,this,!1),this.isTransitioning=!1},c._removeStyles=function(t){var e={};for(var i in t)e[i]="";this.css(e)};var m={transitionProperty:"",transitionDuration:""};return c.removeTransitionStyles=function(){this.css(m)},c.removeElem=function(){this.element.parentNode.removeChild(this.element),this.css({display:""}),this.emitEvent("remove",[this])},c.remove=function(){return a&&parseFloat(this.layout.options.transitionDuration)?(this.once("transitionEnd",function(){this.removeElem()}),void this.hide()):void this.removeElem()},c.reveal=function(){delete this.isHidden,this.css({display:""});var t=this.layout.options,e={},i=this.getHideRevealTransitionEndProperty("visibleStyle");e[i]=this.onRevealTransitionEnd,this.transition({from:t.hiddenStyle,to:t.visibleStyle,isCleaning:!0,onTransitionEnd:e})},c.onRevealTransitionEnd=function(){this.isHidden||this.emitEvent("reveal")},c.getHideRevealTransitionEndProperty=function(t){var e=this.layout.options[t];if(e.opacity)return"opacity";for(var i in e)return i},c.hide=function(){this.isHidden=!0,this.css({display:""});var t=this.layout.options,e={},i=this.getHideRevealTransitionEndProperty("hiddenStyle");e[i]=this.onHideTransitionEnd,this.transition({from:t.visibleStyle,to:t.hiddenStyle,isCleaning:!0,onTransitionEnd:e})},c.onHideTransitionEnd=function(){this.isHidden&&(this.css({display:"none"}),this.emitEvent("hide"))},c.destroy=function(){this.css({position:"",left:"",right:"",top:"",bottom:"",transition:"",transform:""})},o}),function(t,e){"use strict";"function"==typeof define&&define.amd?define("outlayer/outlayer",["ev-emitter/ev-emitter","get-size/get-size","fizzy-ui-utils/utils","./item"],function(i,n,o,r){return e(t,i,n,o,r)}):"object"==typeof module&&module.exports?module.exports=e(t,require("ev-emitter"),require("get-size"),require("fizzy-ui-utils"),require("./item")):t.Outlayer=e(t,t.EvEmitter,t.getSize,t.fizzyUIUtils,t.Outlayer.Item)}(window,function(t,e,i,n,o){"use strict";function r(t,e){var i=n.getQueryElement(t);if(!i)return void(a&&a.error("Bad element for "+this.constructor.namespace+": "+(i||t)));this.element=i,h&&(this.$element=h(this.element)),this.options=n.extend({},this.constructor.defaults),this.option(e);var o=++d;this.element.outlayerGUID=o,c[o]=this,this._create();var r=this._getOption("initLayout");r&&this.layout()}function s(t){function e(){t.apply(this,arguments)}return e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e}var a=t.console,h=t.jQuery,u=function(){},d=0,c={};r.namespace="outlayer",r.Item=o,r.defaults={containerStyle:{position:"relative"},initLayout:!0,originLeft:!0,originTop:!0,resize:!0,resizeContainer:!0,transitionDuration:"0.4s",hiddenStyle:{opacity:0,transform:"scale(0.001)"},visibleStyle:{opacity:1,transform:"scale(1)"}};var l=r.prototype;return n.extend(l,e.prototype),l.option=function(t){n.extend(this.options,t)},l._getOption=function(t){var e=this.constructor.compatOptions[t];return e&&void 0!==this.options[e]?this.options[e]:this.options[t]},r.compatOptions={initLayout:"isInitLayout",horizontal:"isHorizontal",layoutInstant:"isLayoutInstant",originLeft:"isOriginLeft",originTop:"isOriginTop",resize:"isResizeBound",resizeContainer:"isResizingContainer"},l._create=function(){this.reloadItems(),this.stamps=[],this.stamp(this.options.stamp),n.extend(this.element.style,this.options.containerStyle);var t=this._getOption("resize");t&&this.bindResize()},l.reloadItems=function(){this.items=this._itemize(this.element.children)},l._itemize=function(t){for(var e=this._filterFindItemElements(t),i=this.constructor.Item,n=[],o=0;o<e.length;o++){var r=e[o],s=new i(r,this);n.push(s)}return n},l._filterFindItemElements=function(t){return n.filterFindElements(t,this.options.itemSelector)},l.getItemElements=function(){return this.items.map(function(t){return t.element})},l.layout=function(){this._resetLayout(),this._manageStamps();var t=this._getOption("layoutInstant"),e=void 0!==t?t:!this._isLayoutInited;this.layoutItems(this.items,e),this._isLayoutInited=!0},l._init=l.layout,l._resetLayout=function(){this.getSize()},l.getSize=function(){this.size=i(this.element)},l._getMeasurement=function(t,e){var n,o=this.options[t];o?("string"==typeof o?n=this.element.querySelector(o):o instanceof HTMLElement&&(n=o),this[t]=n?i(n)[e]:o):this[t]=0},l.layoutItems=function(t,e){t=this._getItemsForLayout(t),this._layoutItems(t,e),this._postLayout()},l._getItemsForLayout=function(t){return t.filter(function(t){return!t.isIgnored})},l._layoutItems=function(t,e){if(this._emitCompleteOnItems("layout",t),t&&t.length){var i=[];t.forEach(function(t){var n=this._getItemLayoutPosition(t);n.item=t,n.isInstant=e||t.isLayoutInstant,i.push(n)},this),this._processLayoutQueue(i)}},l._getItemLayoutPosition=function(){return{x:0,y:0}},l._processLayoutQueue=function(t){t.forEach(function(t){this._positionItem(t.item,t.x,t.y,t.isInstant)},this)},l._positionItem=function(t,e,i,n){n?t.goTo(e,i):t.moveTo(e,i)},l._postLayout=function(){this.resizeContainer()},l.resizeContainer=function(){var t=this._getOption("resizeContainer");if(t){var e=this._getContainerSize();e&&(this._setContainerMeasure(e.width,!0),this._setContainerMeasure(e.height,!1))}},l._getContainerSize=u,l._setContainerMeasure=function(t,e){if(void 0!==t){var i=this.size;i.isBorderBox&&(t+=e?i.paddingLeft+i.paddingRight+i.borderLeftWidth+i.borderRightWidth:i.paddingBottom+i.paddingTop+i.borderTopWidth+i.borderBottomWidth),t=Math.max(t,0),this.element.style[e?"width":"height"]=t+"px"}},l._emitCompleteOnItems=function(t,e){function i(){o.dispatchEvent(t+"Complete",null,[e])}function n(){s++,s==r&&i()}var o=this,r=e.length;if(!e||!r)return void i();var s=0;e.forEach(function(e){e.once(t,n)})},l.dispatchEvent=function(t,e,i){var n=e?[e].concat(i):i;if(this.emitEvent(t,n),h)if(this.$element=this.$element||h(this.element),e){var o=h.Event(e);o.type=t,this.$element.trigger(o,i)}else this.$element.trigger(t,i)},l.ignore=function(t){var e=this.getItem(t);e&&(e.isIgnored=!0)},l.unignore=function(t){var e=this.getItem(t);e&&delete e.isIgnored},l.stamp=function(t){t=this._find(t),t&&(this.stamps=this.stamps.concat(t),t.forEach(this.ignore,this))},l.unstamp=function(t){t=this._find(t),t&&t.forEach(function(t){n.removeFrom(this.stamps,t),this.unignore(t)},this)},l._find=function(t){return t?("string"==typeof t&&(t=this.element.querySelectorAll(t)),t=n.makeArray(t)):void 0},l._manageStamps=function(){this.stamps&&this.stamps.length&&(this._getBoundingRect(),this.stamps.forEach(this._manageStamp,this))},l._getBoundingRect=function(){var t=this.element.getBoundingClientRect(),e=this.size;this._boundingRect={left:t.left+e.paddingLeft+e.borderLeftWidth,top:t.top+e.paddingTop+e.borderTopWidth,right:t.right-(e.paddingRight+e.borderRightWidth),bottom:t.bottom-(e.paddingBottom+e.borderBottomWidth)}},l._manageStamp=u,l._getElementOffset=function(t){var e=t.getBoundingClientRect(),n=this._boundingRect,o=i(t),r={left:e.left-n.left-o.marginLeft,top:e.top-n.top-o.marginTop,right:n.right-e.right-o.marginRight,bottom:n.bottom-e.bottom-o.marginBottom};return r},l.handleEvent=n.handleEvent,l.bindResize=function(){t.addEventListener("resize",this),this.isResizeBound=!0},l.unbindResize=function(){t.removeEventListener("resize",this),this.isResizeBound=!1},l.onresize=function(){this.resize()},n.debounceMethod(r,"onresize",100),l.resize=function(){this.isResizeBound&&this.needsResizeLayout()&&this.layout()},l.needsResizeLayout=function(){var t=i(this.element),e=this.size&&t;return e&&t.innerWidth!==this.size.innerWidth},l.addItems=function(t){var e=this._itemize(t);return e.length&&(this.items=this.items.concat(e)),e},l.appended=function(t){var e=this.addItems(t);e.length&&(this.layoutItems(e,!0),this.reveal(e))},l.prepended=function(t){var e=this._itemize(t);if(e.length){var i=this.items.slice(0);this.items=e.concat(i),this._resetLayout(),this._manageStamps(),this.layoutItems(e,!0),this.reveal(e),this.layoutItems(i)}},l.reveal=function(t){this._emitCompleteOnItems("reveal",t),t&&t.length&&t.forEach(function(t){t.reveal()})},l.hide=function(t){this._emitCompleteOnItems("hide",t),t&&t.length&&t.forEach(function(t){t.hide()})},l.revealItemElements=function(t){var e=this.getItems(t);this.reveal(e)},l.hideItemElements=function(t){var e=this.getItems(t);this.hide(e)},l.getItem=function(t){for(var e=0;e<this.items.length;e++){var i=this.items[e];if(i.element==t)return i}},l.getItems=function(t){t=n.makeArray(t);var e=[];return t.forEach(function(t){var i=this.getItem(t);i&&e.push(i)},this),e},l.remove=function(t){var e=this.getItems(t);this._emitCompleteOnItems("remove",e),e&&e.length&&e.forEach(function(t){t.remove(),n.removeFrom(this.items,t)},this)},l.destroy=function(){var t=this.element.style;t.height="",t.position="",t.width="",this.items.forEach(function(t){t.destroy()}),this.unbindResize();var e=this.element.outlayerGUID;delete c[e],delete this.element.outlayerGUID,h&&h.removeData(this.element,this.constructor.namespace)},r.data=function(t){t=n.getQueryElement(t);var e=t&&t.outlayerGUID;return e&&c[e]},r.create=function(t,e){var i=s(r);return i.defaults=n.extend({},r.defaults),n.extend(i.defaults,e),i.compatOptions=n.extend({},r.compatOptions),i.namespace=t,i.data=r.data,i.Item=s(o),n.htmlInit(i,t),h&&h.bridget&&h.bridget(t,i),i},r.Item=o,r}),function(t,e){"function"==typeof define&&define.amd?define(["outlayer/outlayer","get-size/get-size"],e):"object"==typeof module&&module.exports?module.exports=e(require("outlayer"),require("get-size")):t.Masonry=e(t.Outlayer,t.getSize)}(window,function(t,e){var i=t.create("masonry");return i.compatOptions.fitWidth="isFitWidth",i.prototype._resetLayout=function(){this.getSize(),this._getMeasurement("columnWidth","outerWidth"),this._getMeasurement("gutter","outerWidth"),this.measureColumns(),this.colYs=[];for(var t=0;t<this.cols;t++)this.colYs.push(0);this.maxY=0},i.prototype.measureColumns=function(){if(this.getContainerWidth(),!this.columnWidth){var t=this.items[0],i=t&&t.element;this.columnWidth=i&&e(i).outerWidth||this.containerWidth}var n=this.columnWidth+=this.gutter,o=this.containerWidth+this.gutter,r=o/n,s=n-o%n,a=s&&1>s?"round":"floor";r=Math[a](r),this.cols=Math.max(r,1)},i.prototype.getContainerWidth=function(){var t=this._getOption("fitWidth"),i=t?this.element.parentNode:this.element,n=e(i);this.containerWidth=n&&n.innerWidth},i.prototype._getItemLayoutPosition=function(t){t.getSize();var e=t.size.outerWidth%this.columnWidth,i=e&&1>e?"round":"ceil",n=Math[i](t.size.outerWidth/this.columnWidth);n=Math.min(n,this.cols);for(var o=this._getColGroup(n),r=Math.min.apply(Math,o),s=o.indexOf(r),a={x:this.columnWidth*s,y:r},h=r+t.size.outerHeight,u=this.cols+1-o.length,d=0;u>d;d++)this.colYs[s+d]=h;return a},i.prototype._getColGroup=function(t){if(2>t)return this.colYs;for(var e=[],i=this.cols+1-t,n=0;i>n;n++){var o=this.colYs.slice(n,n+t);e[n]=Math.max.apply(Math,o)}return e},i.prototype._manageStamp=function(t){var i=e(t),n=this._getElementOffset(t),o=this._getOption("originLeft"),r=o?n.left:n.right,s=r+i.outerWidth,a=Math.floor(r/this.columnWidth);a=Math.max(0,a);var h=Math.floor(s/this.columnWidth);h-=s%this.columnWidth?0:1,h=Math.min(this.cols-1,h);for(var u=this._getOption("originTop"),d=(u?n.top:n.bottom)+i.outerHeight,c=a;h>=c;c++)this.colYs[c]=Math.max(d,this.colYs[c])},i.prototype._getContainerSize=function(){this.maxY=Math.max.apply(Math,this.colYs);var t={height:this.maxY};return this._getOption("fitWidth")&&(t.width=this._getContainerFitWidth()),t},i.prototype._getContainerFitWidth=function(){for(var t=0,e=this.cols;--e&&0===this.colYs[e];)t++;return(this.cols-t)*this.columnWidth-this.gutter},i.prototype.needsResizeLayout=function(){var t=this.containerWidth;return this.getContainerWidth(),t!=this.containerWidth},i});/*END*/
/*Start/home/release/www/blog_180530_1650/wp-content/themes/edu-hiran/js/imagesloaded.pkgd.min.js*/
/*!
 * imagesLoaded PACKAGED v4.1.0
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */

!function(t,e){"function"==typeof define&&define.amd?define("ev-emitter/ev-emitter",e):"object"==typeof module&&module.exports?module.exports=e():t.EvEmitter=e()}(this,function(){function t(){}var e=t.prototype;return e.on=function(t,e){if(t&&e){var i=this._events=this._events||{},n=i[t]=i[t]||[];return-1==n.indexOf(e)&&n.push(e),this}},e.once=function(t,e){if(t&&e){this.on(t,e);var i=this._onceEvents=this._onceEvents||{},n=i[t]=i[t]||[];return n[e]=!0,this}},e.off=function(t,e){var i=this._events&&this._events[t];if(i&&i.length){var n=i.indexOf(e);return-1!=n&&i.splice(n,1),this}},e.emitEvent=function(t,e){var i=this._events&&this._events[t];if(i&&i.length){var n=0,o=i[n];e=e||[];for(var r=this._onceEvents&&this._onceEvents[t];o;){var s=r&&r[o];s&&(this.off(t,o),delete r[o]),o.apply(this,e),n+=s?0:1,o=i[n]}return this}},t}),function(t,e){"use strict";"function"==typeof define&&define.amd?define(["ev-emitter/ev-emitter"],function(i){return e(t,i)}):"object"==typeof module&&module.exports?module.exports=e(t,require("ev-emitter")):t.imagesLoaded=e(t,t.EvEmitter)}(window,function(t,e){function i(t,e){for(var i in e)t[i]=e[i];return t}function n(t){var e=[];if(Array.isArray(t))e=t;else if("number"==typeof t.length)for(var i=0;i<t.length;i++)e.push(t[i]);else e.push(t);return e}function o(t,e,r){return this instanceof o?("string"==typeof t&&(t=document.querySelectorAll(t)),this.elements=n(t),this.options=i({},this.options),"function"==typeof e?r=e:i(this.options,e),r&&this.on("always",r),this.getImages(),h&&(this.jqDeferred=new h.Deferred),void setTimeout(function(){this.check()}.bind(this))):new o(t,e,r)}function r(t){this.img=t}function s(t,e){this.url=t,this.element=e,this.img=new Image}var h=t.jQuery,a=t.console;o.prototype=Object.create(e.prototype),o.prototype.options={},o.prototype.getImages=function(){this.images=[],this.elements.forEach(this.addElementImages,this)},o.prototype.addElementImages=function(t){"IMG"==t.nodeName&&this.addImage(t),this.options.background===!0&&this.addElementBackgroundImages(t);var e=t.nodeType;if(e&&d[e]){for(var i=t.querySelectorAll("img"),n=0;n<i.length;n++){var o=i[n];this.addImage(o)}if("string"==typeof this.options.background){var r=t.querySelectorAll(this.options.background);for(n=0;n<r.length;n++){var s=r[n];this.addElementBackgroundImages(s)}}}};var d={1:!0,9:!0,11:!0};return o.prototype.addElementBackgroundImages=function(t){var e=getComputedStyle(t);if(e)for(var i=/url\((['"])?(.*?)\1\)/gi,n=i.exec(e.backgroundImage);null!==n;){var o=n&&n[2];o&&this.addBackground(o,t),n=i.exec(e.backgroundImage)}},o.prototype.addImage=function(t){var e=new r(t);this.images.push(e)},o.prototype.addBackground=function(t,e){var i=new s(t,e);this.images.push(i)},o.prototype.check=function(){function t(t,i,n){setTimeout(function(){e.progress(t,i,n)})}var e=this;return this.progressedCount=0,this.hasAnyBroken=!1,this.images.length?void this.images.forEach(function(e){e.once("progress",t),e.check()}):void this.complete()},o.prototype.progress=function(t,e,i){this.progressedCount++,this.hasAnyBroken=this.hasAnyBroken||!t.isLoaded,this.emitEvent("progress",[this,t,e]),this.jqDeferred&&this.jqDeferred.notify&&this.jqDeferred.notify(this,t),this.progressedCount==this.images.length&&this.complete(),this.options.debug&&a&&a.log("progress: "+i,t,e)},o.prototype.complete=function(){var t=this.hasAnyBroken?"fail":"done";if(this.isComplete=!0,this.emitEvent(t,[this]),this.emitEvent("always",[this]),this.jqDeferred){var e=this.hasAnyBroken?"reject":"resolve";this.jqDeferred[e](this)}},r.prototype=Object.create(e.prototype),r.prototype.check=function(){var t=this.getIsImageComplete();return t?void this.confirm(0!==this.img.naturalWidth,"naturalWidth"):(this.proxyImage=new Image,this.proxyImage.addEventListener("load",this),this.proxyImage.addEventListener("error",this),this.img.addEventListener("load",this),this.img.addEventListener("error",this),void(this.proxyImage.src=this.img.src))},r.prototype.getIsImageComplete=function(){return this.img.complete&&void 0!==this.img.naturalWidth},r.prototype.confirm=function(t,e){this.isLoaded=t,this.emitEvent("progress",[this,this.img,e])},r.prototype.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},r.prototype.onload=function(){this.confirm(!0,"onload"),this.unbindEvents()},r.prototype.onerror=function(){this.confirm(!1,"onerror"),this.unbindEvents()},r.prototype.unbindEvents=function(){this.proxyImage.removeEventListener("load",this),this.proxyImage.removeEventListener("error",this),this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},s.prototype=Object.create(r.prototype),s.prototype.check=function(){this.img.addEventListener("load",this),this.img.addEventListener("error",this),this.img.src=this.url;var t=this.getIsImageComplete();t&&(this.confirm(0!==this.img.naturalWidth,"naturalWidth"),this.unbindEvents())},s.prototype.unbindEvents=function(){this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},s.prototype.confirm=function(t,e){this.isLoaded=t,this.emitEvent("progress",[this,this.element,e])},o.makeJQueryPlugin=function(e){e=e||t.jQuery,e&&(h=e,h.fn.imagesLoaded=function(t,e){var i=new o(this,t,e);return i.jqDeferred.promise(h(this))})},o.makeJQueryPlugin(),o});/*END*/
/*Start/home/release/www/blog_180530_1650/wp-content/themes/edu-hiran/js/jquery.bootpag.min.js*/
/*

 bootpag - jQuery plugin for dynamic pagination

 Copyright (c) 2015 botmonster@7items.com

 Licensed under the MIT license:
   http://www.opensource.org/licenses/mit-license.php

 Project home:
   http://botmonster.com/jquery-bootpag/

 Version:  1.0.7

*/
(function(h,q){h.fn.bootpag=function(p){function m(c,b){b=parseInt(b,10);var d,e=0==a.maxVisible?1:a.maxVisible,k=1==a.maxVisible?0:1,n=Math.floor((b-1)/e)*e,f=c.find("li");a.page=b=0>b?0:b>a.total?a.total:b;f.removeClass(a.activeClass);d=1>b-1?1:a.leaps&&b-1>=a.maxVisible?Math.floor((b-1)/e)*e:b-1;a.firstLastUse&&f.first().toggleClass(a.disabledClass,1===b);e=f.first();a.firstLastUse&&(e=e.next());e.toggleClass(a.disabledClass,1===b).attr("data-lp",d).find("a").attr("href",g(d));k=1==a.maxVisible?
0:1;d=b+1>a.total?a.total:a.leaps&&b+1<a.total-a.maxVisible?n+a.maxVisible+k:b+1;e=f.last();a.firstLastUse&&(e=e.prev());e.toggleClass(a.disabledClass,b===a.total).attr("data-lp",d).find("a").attr("href",g(d));f.last().toggleClass(a.disabledClass,b===a.total);e=f.filter("[data-lp="+b+"]");k="."+[a.nextClass,a.prevClass,a.firstClass,a.lastClass].join(",.");if(!e.not(k).length){var m=b<=n?-a.maxVisible:0;f.not(k).each(function(b){d=b+1+n+m;h(this).attr("data-lp",d).toggle(d<=a.total).find("a").html(d).attr("href",
g(d))});e=f.filter("[data-lp="+b+"]")}e.not(k).addClass(a.activeClass);l.data("settings",a)}function g(c){return a.href.replace(a.hrefVariable,c)}var l=this,a=h.extend({total:0,page:1,maxVisible:null,leaps:!0,href:"javascript:void(0);",hrefVariable:"{{number}}",next:"&raquo;",prev:"&laquo;",firstLastUse:!1,first:'<span aria-hidden="true">&larr;</span>',last:'<span aria-hidden="true">&rarr;</span>',wrapClass:"pagination",activeClass:"active",disabledClass:"disabled",nextClass:"next",prevClass:"prev",
lastClass:"last",firstClass:"first"},l.data("settings")||{},p||{});if(0>=a.total)return this;h.isNumeric(a.maxVisible)||a.maxVisible||(a.maxVisible=parseInt(a.total,10));l.data("settings",a);return this.each(function(){var c,b,d=h(this);c=['<ul class="',a.wrapClass,' bootpag">'];a.firstLastUse&&(c=c.concat(['<li data-lp="1" class="',a.firstClass,'"><a href="',g(1),'">',a.first,"</a></li>"]));a.prev&&(c=c.concat(['<li data-lp="1" class="',a.prevClass,'"><a href="',g(1),'">',a.prev,"</a></li>"]));for(b=
1;b<=Math.min(a.total,a.maxVisible);b++)c=c.concat(['<li data-lp="',b,'"><a href="',g(b),'">',b,"</a></li>"]);a.next&&(b=a.leaps&&a.total>a.maxVisible?Math.min(a.maxVisible+1,a.total):2,c=c.concat(['<li data-lp="',b,'" class="',a.nextClass,'"><a href="',g(b),'">',a.next,"</a></li>"]));a.firstLastUse&&(c=c.concat(['<li data-lp="',a.total,'" class="last"><a href="',g(a.total),'">',a.last,"</a></li>"]));c.push("</ul>");d.find("ul.bootpag").remove();d.append(c.join(""));c=d.find("ul.bootpag");d.find("li").click(function(){var b=
h(this);if(!b.hasClass(a.disabledClass)&&!b.hasClass(a.activeClass)){var c=parseInt(b.attr("data-lp"),10);l.find("ul.bootpag").each(function(){m(h(this),c)});l.trigger("page",c)}});m(c,a.page)})}})(jQuery,window);
/*END*/
/*Start/home/release/www/blog_180530_1650/wp-content/themes/edu-hiran/js/nprogress.js*/
/* NProgress, (c) 2013, 2014 Rico Sta. Cruz - http://ricostacruz.com/nprogress
 * @license MIT */

;(function(root, factory) {

  if (typeof define === 'function' && define.amd) {
    define(factory);
  } else if (typeof exports === 'object') {
    module.exports = factory();
  } else {
    root.NProgress = factory();
  }

})(this, function() {
  var NProgress = {};

  NProgress.version = '0.2.0';

  var Settings = NProgress.settings = {
    minimum: 0.08,
    easing: 'linear',
    positionUsing: '',
    speed: 350,
    trickle: true,
    trickleSpeed: 250,
    showSpinner: true,
    barSelector: '[role="bar"]',
    spinnerSelector: '[role="spinner"]',
    parent: 'body',
    template: '<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
  };

  /**
   * Updates configuration.
   *
   *     NProgress.configure({
   *       minimum: 0.1
   *     });
   */
  NProgress.configure = function(options) {
    var key, value;
    for (key in options) {
      value = options[key];
      if (value !== undefined && options.hasOwnProperty(key)) Settings[key] = value;
    }

    return this;
  };

  /**
   * Last number.
   */

  NProgress.status = null;

  /**
   * Sets the progress bar status, where `n` is a number from `0.0` to `1.0`.
   *
   *     NProgress.set(0.4);
   *     NProgress.set(1.0);
   */

  NProgress.set = function(n) {
    var started = NProgress.isStarted();

    n = clamp(n, Settings.minimum, 1);
    NProgress.status = (n === 1 ? null : n);

    var progress = NProgress.render(!started),
        bar      = progress.querySelector(Settings.barSelector),
        speed    = Settings.speed,
        ease     = Settings.easing;

    progress.offsetWidth; /* Repaint */

    queue(function(next) {
      // Set positionUsing if it hasn't already been set
      if (Settings.positionUsing === '') Settings.positionUsing = NProgress.getPositioningCSS();

      // Add transition
      css(bar, barPositionCSS(n, speed, ease));

      if (n === 1) {
        // Fade out
        css(progress, {
          transition: 'none',
          opacity: 1
        });
        progress.offsetWidth; /* Repaint */

        setTimeout(function() {
          css(progress, {
            transition: 'all ' + speed + 'ms linear',
            opacity: 0
          });
          setTimeout(function() {
            NProgress.remove();
            next();
          }, speed);
        }, speed);
      } else {
        setTimeout(next, speed);
      }
    });

    return this;
  };

  NProgress.isStarted = function() {
    return typeof NProgress.status === 'number';
  };

  /**
   * Shows the progress bar.
   * This is the same as setting the status to 0%, except that it doesn't go backwards.
   *
   *     NProgress.start();
   *
   */
  NProgress.start = function() {
    if (!NProgress.status) NProgress.set(0);

    var work = function() {
      setTimeout(function() {
        if (!NProgress.status) return;
        NProgress.trickle();
        work();
      }, Settings.trickleSpeed);
    };

    if (Settings.trickle) work();

    return this;
  };

  /**
   * Hides the progress bar.
   * This is the *sort of* the same as setting the status to 100%, with the
   * difference being `done()` makes some placebo effect of some realistic motion.
   *
   *     NProgress.done();
   *
   * If `true` is passed, it will show the progress bar even if its hidden.
   *
   *     NProgress.done(true);
   */

  NProgress.done = function(force) {
    if (!force && !NProgress.status) return this;

    return NProgress.inc(0.3 + 0.5 * Math.random()).set(1);
  };

  /**
   * Increments by a random amount.
   */

  NProgress.inc = function(amount) {
    var n = NProgress.status;

    if (!n) {
      return NProgress.start();
    } else if(n > 1) {
      return;
    } else {
      if (typeof amount !== 'number') {
        if (n >= 0 && n < 0.25) {
          // Start out between 3 - 6% increments
          amount = (Math.random() * (5 - 3 + 1) + 3) / 100;
        } else if (n >= 0.25 && n < 0.65) {
          // increment between 0 - 3%
          amount = (Math.random() * 3) / 100;
        } else if (n >= 0.65 && n < 0.9) {
          // increment between 0 - 2%
          amount = (Math.random() * 2) / 100;
        } else if (n >= 0.9 && n < 0.99) {
          // finally, increment it .5 %
          amount = 0.005;
        } else {
          // after 99%, don't increment:
          amount = 0;
        }
      }

      n = clamp(n + amount, 0, 0.994);
      return NProgress.set(n);
    }
  };

  NProgress.trickle = function() {
    return NProgress.inc();
  };

  /**
   * Waits for all supplied jQuery promises and
   * increases the progress as the promises resolve.
   *
   * @param $promise jQUery Promise
   */
  (function() {
    var initial = 0, current = 0;

    NProgress.promise = function($promise) {
      if (!$promise || $promise.state() === "resolved") {
        return this;
      }

      if (current === 0) {
        NProgress.start();
      }

      initial++;
      current++;

      $promise.always(function() {
        current--;
        if (current === 0) {
            initial = 0;
            NProgress.done();
        } else {
            NProgress.set((initial - current) / initial);
        }
      });

      return this;
    };

  })();

  /**
   * (Internal) renders the progress bar markup based on the `template`
   * setting.
   */

  NProgress.render = function(fromStart) {
    if (NProgress.isRendered()) return document.getElementById('nprogress');

    addClass(document.documentElement, 'nprogress-busy');

    var progress = document.createElement('div');
    progress.id = 'nprogress';
    progress.innerHTML = Settings.template;

    var bar      = progress.querySelector(Settings.barSelector),
        perc     = fromStart ? '-100' : toBarPerc(NProgress.status || 0),
        parent   = document.querySelector(Settings.parent),
        spinner;

    css(bar, {
      transition: 'all 0 linear',
      transform: 'translate3d(' + perc + '%,0,0)'
    });

    if (!Settings.showSpinner) {
      spinner = progress.querySelector(Settings.spinnerSelector);
      spinner && removeElement(spinner);
    }

    if (parent != document.body) {
      addClass(parent, 'nprogress-custom-parent');
    }

    parent.appendChild(progress);
    return progress;
  };

  /**
   * Removes the element. Opposite of render().
   */

  NProgress.remove = function() {
    removeClass(document.documentElement, 'nprogress-busy');
    removeClass(document.querySelector(Settings.parent), 'nprogress-custom-parent');
    var progress = document.getElementById('nprogress');
    progress && removeElement(progress);
  };

  /**
   * Checks if the progress bar is rendered.
   */

  NProgress.isRendered = function() {
    return !!document.getElementById('nprogress');
  };

  /**
   * Determine which positioning CSS rule to use.
   */

  NProgress.getPositioningCSS = function() {
    // Sniff on document.body.style
    var bodyStyle = document.body.style;

    // Sniff prefixes
    var vendorPrefix = ('WebkitTransform' in bodyStyle) ? 'Webkit' :
                       ('MozTransform' in bodyStyle) ? 'Moz' :
                       ('msTransform' in bodyStyle) ? 'ms' :
                       ('OTransform' in bodyStyle) ? 'O' : '';

    if (vendorPrefix + 'Perspective' in bodyStyle) {
      // Modern browsers with 3D support, e.g. Webkit, IE10
      return 'translate3d';
    } else if (vendorPrefix + 'Transform' in bodyStyle) {
      // Browsers without 3D support, e.g. IE9
      return 'translate';
    } else {
      // Browsers without translate() support, e.g. IE7-8
      return 'margin';
    }
  };

  /**
   * Helpers
   */

  function clamp(n, min, max) {
    if (n < min) return min;
    if (n > max) return max;
    return n;
  }

  /**
   * (Internal) converts a percentage (`0..1`) to a bar translateX
   * percentage (`-100%..0%`).
   */

  function toBarPerc(n) {
    return (-1 + n) * 100;
  }


  /**
   * (Internal) returns the correct CSS for changing the bar's
   * position given an n percentage, and speed and ease from Settings
   */

  function barPositionCSS(n, speed, ease) {
    var barCSS;

    if (Settings.positionUsing === 'translate3d') {
      barCSS = { transform: 'translate3d('+toBarPerc(n)+'%,0,0)' };
    } else if (Settings.positionUsing === 'translate') {
      barCSS = { transform: 'translate('+toBarPerc(n)+'%,0)' };
    } else {
      barCSS = { 'margin-left': toBarPerc(n)+'%' };
    }

    barCSS.transition = 'all '+speed+'ms '+ease;

    return barCSS;
  }

  /**
   * (Internal) Queues a function to be executed.
   */

  var queue = (function() {
    var pending = [];

    function next() {
      var fn = pending.shift();
      if (fn) {
        fn(next);
      }
    }

    return function(fn) {
      pending.push(fn);
      if (pending.length == 1) next();
    };
  })();

  /**
   * (Internal) Applies css properties to an element, similar to the jQuery
   * css method.
   *
   * While this helper does assist with vendor prefixed property names, it
   * does not perform any manipulation of values prior to setting styles.
   */

  var css = (function() {
    var cssPrefixes = [ 'Webkit', 'O', 'Moz', 'ms' ],
        cssProps    = {};

    function camelCase(string) {
      return string.replace(/^-ms-/, 'ms-').replace(/-([\da-z])/gi, function(match, letter) {
        return letter.toUpperCase();
      });
    }

    function getVendorProp(name) {
      var style = document.body.style;
      if (name in style) return name;

      var i = cssPrefixes.length,
          capName = name.charAt(0).toUpperCase() + name.slice(1),
          vendorName;
      while (i--) {
        vendorName = cssPrefixes[i] + capName;
        if (vendorName in style) return vendorName;
      }

      return name;
    }

    function getStyleProp(name) {
      name = camelCase(name);
      return cssProps[name] || (cssProps[name] = getVendorProp(name));
    }

    function applyCss(element, prop, value) {
      prop = getStyleProp(prop);
      element.style[prop] = value;
    }

    return function(element, properties) {
      var args = arguments,
          prop,
          value;

      if (args.length == 2) {
        for (prop in properties) {
          value = properties[prop];
          if (value !== undefined && properties.hasOwnProperty(prop)) applyCss(element, prop, value);
        }
      } else {
        applyCss(element, args[1], args[2]);
      }
    }
  })();

  /**
   * (Internal) Determines if an element or space separated list of class names contains a class name.
   */

  function hasClass(element, name) {
    var list = typeof element == 'string' ? element : classList(element);
    return list.indexOf(' ' + name + ' ') >= 0;
  }

  /**
   * (Internal) Adds a class to an element.
   */

  function addClass(element, name) {
    var oldList = classList(element),
        newList = oldList + name;

    if (hasClass(oldList, name)) return;

    // Trim the opening space.
    element.className = newList.substring(1);
  }

  /**
   * (Internal) Removes a class from an element.
   */

  function removeClass(element, name) {
    var oldList = classList(element),
        newList;

    if (!hasClass(element, name)) return;

    // Replace the class name.
    newList = oldList.replace(' ' + name + ' ', ' ');

    // Trim the opening and closing spaces.
    element.className = newList.substring(1, newList.length - 1);
  }

  /**
   * (Internal) Gets a space separated list of the class names on the element.
   * The list is wrapped with a single space on each end to facilitate finding
   * matches within the list.
   */

  function classList(element) {
    return (' ' + (element && element.className || '') + ' ').replace(/\s+/gi, ' ');
  }

  /**
   * (Internal) Removes an element from the DOM.
   */

  function removeElement(element) {
    element && element.parentNode && element.parentNode.removeChild(element);
  }

  return NProgress;
});
/*END*/
/*Start/home/release/www/blog_180530_1650/wp-content/themes/edu-hiran/js/CustomScrollbar.min.js*/
/* == jquery mousewheel plugin == Version: 3.1.12, License: MIT License (MIT) */ ! function(a) {
    "function" == typeof define && define.amd ? define(["jquery"], a) : "object" == typeof exports ? module.exports = a : a(jQuery)
}(function(a) {
    function b(b) {
        var g = b || window.event,
            h = i.call(arguments, 1),
            j = 0,
            l = 0,
            m = 0,
            n = 0,
            o = 0,
            p = 0;
        if (b = a.event.fix(g), b.type = "mousewheel", "detail" in g && (m = -1 * g.detail), "wheelDelta" in g && (m = g.wheelDelta), "wheelDeltaY" in g && (m = g.wheelDeltaY), "wheelDeltaX" in g && (l = -1 * g.wheelDeltaX), "axis" in g && g.axis === g.HORIZONTAL_AXIS && (l = -1 * m, m = 0), j = 0 === m ? l : m, "deltaY" in g && (m = -1 * g.deltaY, j = m), "deltaX" in g && (l = g.deltaX, 0 === m && (j = -1 * l)), 0 !== m || 0 !== l) {
            if (1 === g.deltaMode) {
                var q = a.data(this, "mousewheel-line-height");
                j *= q, m *= q, l *= q
            } else if (2 === g.deltaMode) {
                var r = a.data(this, "mousewheel-page-height");
                j *= r, m *= r, l *= r
            }
            if (n = Math.max(Math.abs(m), Math.abs(l)), (!f || f > n) && (f = n, d(g, n) && (f /= 40)), d(g, n) && (j /= 40, l /= 40, m /= 40), j = Math[j >= 1 ? "floor" : "ceil"](j / f), l = Math[l >= 1 ? "floor" : "ceil"](l / f), m = Math[m >= 1 ? "floor" : "ceil"](m / f), k.settings.normalizeOffset && this.getBoundingClientRect) {
                var s = this.getBoundingClientRect();
                o = b.clientX - s.left, p = b.clientY - s.top
            }
            return b.deltaX = l, b.deltaY = m, b.deltaFactor = f, b.offsetX = o, b.offsetY = p, b.deltaMode = 0, h.unshift(b, j, l, m), e && clearTimeout(e), e = setTimeout(c, 200), (a.event.dispatch || a.event.handle).apply(this, h)
        }
    }

    function c() {
        f = null
    }

    function d(a, b) {
        return k.settings.adjustOldDeltas && "mousewheel" === a.type && b % 120 === 0
    }
    var e, f, g = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"],
        h = "onwheel" in document || document.documentMode >= 9 ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"],
        i = Array.prototype.slice;
    if (a.event.fixHooks)
        for (var j = g.length; j;) a.event.fixHooks[g[--j]] = a.event.mouseHooks;
    var k = a.event.special.mousewheel = {
        version: "3.1.12",
        setup: function() {
            if (this.addEventListener)
                for (var c = h.length; c;) this.addEventListener(h[--c], b, !1);
            else this.onmousewheel = b;
            a.data(this, "mousewheel-line-height", k.getLineHeight(this)), a.data(this, "mousewheel-page-height", k.getPageHeight(this))
        },
        teardown: function() {
            if (this.removeEventListener)
                for (var c = h.length; c;) this.removeEventListener(h[--c], b, !1);
            else this.onmousewheel = null;
            a.removeData(this, "mousewheel-line-height"), a.removeData(this, "mousewheel-page-height")
        },
        getLineHeight: function(b) {
            var c = a(b),
                d = c["offsetParent" in a.fn ? "offsetParent" : "parent"]();
            return d.length || (d = a("body")), parseInt(d.css("fontSize"), 10) || parseInt(c.css("fontSize"), 10) || 16
        },
        getPageHeight: function(b) {
            return a(b).height()
        },
        settings: {
            adjustOldDeltas: !0,
            normalizeOffset: !0
        }
    };
    a.fn.extend({
        mousewheel: function(a) {
            return a ? this.bind("mousewheel", a) : this.trigger("mousewheel")
        },
        unmousewheel: function(a) {
            return this.unbind("mousewheel", a)
        }
    })
});
/* == malihu jquery custom scrollbar plugin == Version: 3.0.9, License: MIT License (MIT) */
! function(e) {
    "undefined" != typeof module && module.exports ? module.exports = e : e(jQuery, window, document)
}(function(e) {
    ! function(t) {
        var o = "function" == typeof define && define.amd,
            a = "undefined" != typeof module && module.exports,
            n = "https:" == document.location.protocol ? "https:" : "http:",
            i = "cdnjs.cloudflare.com/ajax/libs/jquery-mousewheel/3.1.12/jquery.mousewheel.min.js";
        o || (a ? require("jquery-mousewheel")(e) : e.event.special.mousewheel || e("head").append(decodeURI("%3Cscript src=" + n + "//" + i + "%3E%3C/script%3E"))), t()
    }(function() {
        var t, o = "mCustomScrollbar",
            a = "mCS",
            n = ".mCustomScrollbar",
            i = {
                setTop: 0,
                setLeft: 0,
                axis: "y",
                scrollbarPosition: "inside",
                scrollInertia: 500,
                autoDraggerLength: !0,
                alwaysShowScrollbar: 0,
                snapOffset: 0,
                mouseWheel: {
                    enable: !0,
                    scrollAmount: "auto",
                    axis: "y",
                    deltaFactor: "auto",
                    disableOver: ["select", "option", "keygen", "datalist", "textarea"]
                },
                scrollButtons: {
                    scrollType: "stepless",
                    scrollAmount: "auto"
                },
                keyboard: {
                    enable: !0,
                    scrollType: "stepless",
                    scrollAmount: "auto"
                },
                contentTouchScroll: 100,
                advanced: {
                    autoScrollOnFocus: "input,textarea,select,button,datalist,keygen,a[tabindex],area,object,[contenteditable='true']",
                    updateOnContentResize: !0,
                    updateOnImageLoad: !0,
                    autoUpdateTimeout: 60
                },
                theme: "light",
                callbacks: {
                    onTotalScrollOffset: 0,
                    onTotalScrollBackOffset: 0,
                    alwaysTriggerOffsets: !0
                }
            },
            r = 0,
            l = {},
            s = window.attachEvent && !window.addEventListener ? 1 : 0,
            c = !1,
            d = ["mCSB_dragger_onDrag", "mCSB_scrollTools_onDrag", "mCS_img_loaded", "mCS_disabled", "mCS_destroyed", "mCS_no_scrollbar", "mCS-autoHide", "mCS-dir-rtl", "mCS_no_scrollbar_y", "mCS_no_scrollbar_x", "mCS_y_hidden", "mCS_x_hidden", "mCSB_draggerContainer", "mCSB_buttonUp", "mCSB_buttonDown", "mCSB_buttonLeft", "mCSB_buttonRight"],
            u = {
                init: function(t) {
                    var t = e.extend(!0, {}, i, t),
                        o = f.call(this);
                    if (t.live) {
                        var s = t.liveSelector || this.selector || n,
                            c = e(s);
                        if ("off" === t.live) return void m(s);
                        l[s] = setTimeout(function() {
                            c.mCustomScrollbar(t), "once" === t.live && c.length && m(s)
                        }, 500)
                    } else m(s);
                    return t.setWidth = t.set_width ? t.set_width : t.setWidth, t.setHeight = t.set_height ? t.set_height : t.setHeight, t.axis = t.horizontalScroll ? "x" : p(t.axis), t.scrollInertia = t.scrollInertia > 0 && t.scrollInertia < 17 ? 17 : t.scrollInertia, "object" != typeof t.mouseWheel && 1 == t.mouseWheel && (t.mouseWheel = {
                        enable: !0,
                        scrollAmount: "auto",
                        axis: "y",
                        preventDefault: !1,
                        deltaFactor: "auto",
                        normalizeDelta: !1,
                        invert: !1
                    }), t.mouseWheel.scrollAmount = t.mouseWheelPixels ? t.mouseWheelPixels : t.mouseWheel.scrollAmount, t.mouseWheel.normalizeDelta = t.advanced.normalizeMouseWheelDelta ? t.advanced.normalizeMouseWheelDelta : t.mouseWheel.normalizeDelta, t.scrollButtons.scrollType = g(t.scrollButtons.scrollType), h(t), e(o).each(function() {
                        var o = e(this);
                        if (!o.data(a)) {
                            o.data(a, {
                                idx: ++r,
                                opt: t,
                                scrollRatio: {
                                    y: null,
                                    x: null
                                },
                                overflowed: null,
                                contentReset: {
                                    y: null,
                                    x: null
                                },
                                bindEvents: !1,
                                tweenRunning: !1,
                                sequential: {},
                                langDir: o.css("direction"),
                                cbOffsets: null,
                                trigger: null
                            });
                            var n = o.data(a),
                                i = n.opt,
                                l = o.data("mcs-axis"),
                                s = o.data("mcs-scrollbar-position"),
                                c = o.data("mcs-theme");
                            l && (i.axis = l), s && (i.scrollbarPosition = s), c && (i.theme = c, h(i)), v.call(this), e("#mCSB_" + n.idx + "_container img:not(." + d[2] + ")").addClass(d[2]), u.update.call(null, o)
                        }
                    })
                },
                update: function(t, o) {
                    var n = t || f.call(this);
                    return e(n).each(function() {
                        var t = e(this);
                        if (t.data(a)) {
                            var n = t.data(a),
                                i = n.opt,
                                r = e("#mCSB_" + n.idx + "_container"),
                                l = [e("#mCSB_" + n.idx + "_dragger_vertical"), e("#mCSB_" + n.idx + "_dragger_horizontal")];
                            if (!r.length) return;
                            n.tweenRunning && V(t), t.hasClass(d[3]) && t.removeClass(d[3]), t.hasClass(d[4]) && t.removeClass(d[4]), S.call(this), _.call(this), "y" === i.axis || i.advanced.autoExpandHorizontalScroll || r.css("width", x(r.children())), n.overflowed = B.call(this), O.call(this), i.autoDraggerLength && b.call(this), C.call(this), k.call(this);
                            var s = [Math.abs(r[0].offsetTop), Math.abs(r[0].offsetLeft)];
                            "x" !== i.axis && (n.overflowed[0] ? l[0].height() > l[0].parent().height() ? T.call(this) : (Q(t, s[0].toString(), {
                                dir: "y",
                                dur: 0,
                                overwrite: "none"
                            }), n.contentReset.y = null) : (T.call(this), "y" === i.axis ? M.call(this) : "yx" === i.axis && n.overflowed[1] && Q(t, s[1].toString(), {
                                dir: "x",
                                dur: 0,
                                overwrite: "none"
                            }))), "y" !== i.axis && (n.overflowed[1] ? l[1].width() > l[1].parent().width() ? T.call(this) : (Q(t, s[1].toString(), {
                                dir: "x",
                                dur: 0,
                                overwrite: "none"
                            }), n.contentReset.x = null) : (T.call(this), "x" === i.axis ? M.call(this) : "yx" === i.axis && n.overflowed[0] && Q(t, s[0].toString(), {
                                dir: "y",
                                dur: 0,
                                overwrite: "none"
                            }))), o && n && (2 === o && i.callbacks.onImageLoad && "function" == typeof i.callbacks.onImageLoad ? i.callbacks.onImageLoad.call(this) : 3 === o && i.callbacks.onSelectorChange && "function" == typeof i.callbacks.onSelectorChange ? i.callbacks.onSelectorChange.call(this) : i.callbacks.onUpdate && "function" == typeof i.callbacks.onUpdate && i.callbacks.onUpdate.call(this)), X.call(this)
                        }
                    })
                },
                scrollTo: function(t, o) {
                    if ("undefined" != typeof t && null != t) {
                        var n = f.call(this);
                        return e(n).each(function() {
                            var n = e(this);
                            if (n.data(a)) {
                                var i = n.data(a),
                                    r = i.opt,
                                    l = {
                                        trigger: "external",
                                        scrollInertia: r.scrollInertia,
                                        scrollEasing: "mcsEaseInOut",
                                        moveDragger: !1,
                                        timeout: 60,
                                        callbacks: !0,
                                        onStart: !0,
                                        onUpdate: !0,
                                        onComplete: !0
                                    },
                                    s = e.extend(!0, {}, l, o),
                                    c = Y.call(this, t),
                                    d = s.scrollInertia > 0 && s.scrollInertia < 17 ? 17 : s.scrollInertia;
                                c[0] = j.call(this, c[0], "y"), c[1] = j.call(this, c[1], "x"), s.moveDragger && (c[0] *= i.scrollRatio.y, c[1] *= i.scrollRatio.x), s.dur = d, setTimeout(function() {
                                    null !== c[0] && "undefined" != typeof c[0] && "x" !== r.axis && i.overflowed[0] && (s.dir = "y", s.overwrite = "all", Q(n, c[0].toString(), s)), null !== c[1] && "undefined" != typeof c[1] && "y" !== r.axis && i.overflowed[1] && (s.dir = "x", s.overwrite = "none", Q(n, c[1].toString(), s))
                                }, s.timeout)
                            }
                        })
                    }
                },
                stop: function() {
                    var t = f.call(this);
                    return e(t).each(function() {
                        var t = e(this);
                        t.data(a) && V(t)
                    })
                },
                disable: function(t) {
                    var o = f.call(this);
                    return e(o).each(function() {
                        var o = e(this);
                        if (o.data(a)) {
                            {
                                o.data(a)
                            }
                            X.call(this, "remove"), M.call(this), t && T.call(this), O.call(this, !0), o.addClass(d[3])
                        }
                    })
                },
                destroy: function() {
                    var t = f.call(this);
                    return e(t).each(function() {
                        var n = e(this);
                        if (n.data(a)) {
                            var i = n.data(a),
                                r = i.opt,
                                l = e("#mCSB_" + i.idx),
                                s = e("#mCSB_" + i.idx + "_container"),
                                c = e(".mCSB_" + i.idx + "_scrollbar");
                            r.live && m(r.liveSelector || e(t).selector), X.call(this, "remove"), M.call(this), T.call(this), n.removeData(a), Z(this, "mcs"), c.remove(), s.find("img." + d[2]).removeClass(d[2]), l.replaceWith(s.contents()), n.removeClass(o + " _" + a + "_" + i.idx + " " + d[6] + " " + d[7] + " " + d[5] + " " + d[3]).addClass(d[4])
                        }
                    })
                }
            },
            f = function() {
                return "object" != typeof e(this) || e(this).length < 1 ? n : this
            },
            h = function(t) {
                var o = ["rounded", "rounded-dark", "rounded-dots", "rounded-dots-dark"],
                    a = ["rounded-dots", "rounded-dots-dark", "3d", "3d-dark", "3d-thick", "3d-thick-dark", "inset", "inset-dark", "inset-2", "inset-2-dark", "inset-3", "inset-3-dark"],
                    n = ["minimal", "minimal-dark"],
                    i = ["minimal", "minimal-dark"],
                    r = ["minimal", "minimal-dark"];
                t.autoDraggerLength = e.inArray(t.theme, o) > -1 ? !1 : t.autoDraggerLength, t.autoExpandScrollbar = e.inArray(t.theme, a) > -1 ? !1 : t.autoExpandScrollbar, t.scrollButtons.enable = e.inArray(t.theme, n) > -1 ? !1 : t.scrollButtons.enable, t.autoHideScrollbar = e.inArray(t.theme, i) > -1 ? !0 : t.autoHideScrollbar, t.scrollbarPosition = e.inArray(t.theme, r) > -1 ? "outside" : t.scrollbarPosition
            },
            m = function(e) {
                l[e] && (clearTimeout(l[e]), Z(l, e))
            },
            p = function(e) {
                return "yx" === e || "xy" === e || "auto" === e ? "yx" : "x" === e || "horizontal" === e ? "x" : "y"
            },
            g = function(e) {
                return "stepped" === e || "pixels" === e || "step" === e || "click" === e ? "stepped" : "stepless"
            },
            v = function() {
                var t = e(this),
                    n = t.data(a),
                    i = n.opt,
                    r = i.autoExpandScrollbar ? " " + d[1] + "_expand" : "",
                    l = ["<div id='mCSB_" + n.idx + "_scrollbar_vertical' class='mCSB_scrollTools mCSB_" + n.idx + "_scrollbar mCS-" + i.theme + " mCSB_scrollTools_vertical" + r + "'><div class='" + d[12] + "'><div id='mCSB_" + n.idx + "_dragger_vertical' class='mCSB_dragger' style='position:absolute;' oncontextmenu='return false;'><div class='mCSB_dragger_bar' /></div><div class='mCSB_draggerRail' /></div></div>", "<div id='mCSB_" + n.idx + "_scrollbar_horizontal' class='mCSB_scrollTools mCSB_" + n.idx + "_scrollbar mCS-" + i.theme + " mCSB_scrollTools_horizontal" + r + "'><div class='" + d[12] + "'><div id='mCSB_" + n.idx + "_dragger_horizontal' class='mCSB_dragger' style='position:absolute;' oncontextmenu='return false;'><div class='mCSB_dragger_bar' /></div><div class='mCSB_draggerRail' /></div></div>"],
                    s = "yx" === i.axis ? "mCSB_vertical_horizontal" : "x" === i.axis ? "mCSB_horizontal" : "mCSB_vertical",
                    c = "yx" === i.axis ? l[0] + l[1] : "x" === i.axis ? l[1] : l[0],
                    u = "yx" === i.axis ? "<div id='mCSB_" + n.idx + "_container_wrapper' class='mCSB_container_wrapper' />" : "",
                    f = i.autoHideScrollbar ? " " + d[6] : "",
                    h = "x" !== i.axis && "rtl" === n.langDir ? " " + d[7] : "";
                i.setWidth && t.css("width", i.setWidth), i.setHeight && t.css("height", i.setHeight), i.setLeft = "y" !== i.axis && "rtl" === n.langDir ? "989999px" : i.setLeft, t.addClass(o + " _" + a + "_" + n.idx + f + h).wrapInner("<div id='mCSB_" + n.idx + "' class='mCustomScrollBox mCS-" + i.theme + " " + s + "'><div id='mCSB_" + n.idx + "_container' class='mCSB_container' style='position:relative; top:" + i.setTop + "; left:" + i.setLeft + ";' dir=" + n.langDir + " /></div>");
                var m = e("#mCSB_" + n.idx),
                    p = e("#mCSB_" + n.idx + "_container");
                "y" === i.axis || i.advanced.autoExpandHorizontalScroll || p.css("width", x(p.children())), "outside" === i.scrollbarPosition ? ("static" === t.css("position") && t.css("position", "relative"), t.css("overflow", "visible"), m.addClass("mCSB_outside").after(c)) : (m.addClass("mCSB_inside").append(c), p.wrap(u)), w.call(this);
                var g = [e("#mCSB_" + n.idx + "_dragger_vertical"), e("#mCSB_" + n.idx + "_dragger_horizontal")];
                g[0].css("min-height", g[0].height()), g[1].css("min-width", g[1].width())
            },
            x = function(t) {
                return Math.max.apply(Math, t.map(function() {
                    return e(this).outerWidth(!0)
                }).get())
            },
            _ = function() {
                var t = e(this),
                    o = t.data(a),
                    n = o.opt,
                    i = e("#mCSB_" + o.idx + "_container");
                n.advanced.autoExpandHorizontalScroll && "y" !== n.axis && i.css({
                    position: "absolute",
                    width: "auto"
                }).wrap("<div class='mCSB_h_wrapper' style='position:relative; left:0; width:999999px;' />").css({
                    width: Math.ceil(i[0].getBoundingClientRect().right + .4) - Math.floor(i[0].getBoundingClientRect().left),
                    position: "relative"
                }).unwrap()
            },
            w = function() {
                var t = e(this),
                    o = t.data(a),
                    n = o.opt,
                    i = e(".mCSB_" + o.idx + "_scrollbar:first"),
                    r = te(n.scrollButtons.tabindex) ? "tabindex='" + n.scrollButtons.tabindex + "'" : "",
                    l = ["<a href='#' class='" + d[13] + "' oncontextmenu='return false;' " + r + " />", "<a href='#' class='" + d[14] + "' oncontextmenu='return false;' " + r + " />", "<a href='#' class='" + d[15] + "' oncontextmenu='return false;' " + r + " />", "<a href='#' class='" + d[16] + "' oncontextmenu='return false;' " + r + " />"],
                    s = ["x" === n.axis ? l[2] : l[0], "x" === n.axis ? l[3] : l[1], l[2], l[3]];
                n.scrollButtons.enable && i.prepend(s[0]).append(s[1]).next(".mCSB_scrollTools").prepend(s[2]).append(s[3])
            },
            S = function() {
                var t = e(this),
                    o = t.data(a),
                    n = e("#mCSB_" + o.idx),
                    i = t.css("max-height") || "none",
                    r = -1 !== i.indexOf("%"),
                    l = t.css("box-sizing");
                if ("none" !== i) {
                    var s = r ? t.parent().height() * parseInt(i) / 100 : parseInt(i);
                    "border-box" === l && (s -= t.innerHeight() - t.height() + (t.outerHeight() - t.innerHeight())), n.css("max-height", Math.round(s))
                }
            },
            b = function() {
                var t = e(this),
                    o = t.data(a),
                    n = e("#mCSB_" + o.idx),
                    i = e("#mCSB_" + o.idx + "_container"),
                    r = [e("#mCSB_" + o.idx + "_dragger_vertical"), e("#mCSB_" + o.idx + "_dragger_horizontal")],
                    l = [n.height() / i.outerHeight(!1), n.width() / i.outerWidth(!1)],
                    c = [parseInt(r[0].css("min-height")), Math.round(l[0] * r[0].parent().height()), parseInt(r[1].css("min-width")), Math.round(l[1] * r[1].parent().width())],
                    d = s && c[1] < c[0] ? c[0] : c[1],
                    u = s && c[3] < c[2] ? c[2] : c[3];
                r[0].css({
                    height: d,
                    "max-height": r[0].parent().height() - 10
                }).find(".mCSB_dragger_bar").css({
                    "line-height": c[0] + "px"
                }), r[1].css({
                    width: u,
                    "max-width": r[1].parent().width() - 10
                })
            },
            C = function() {
                var t = e(this),
                    o = t.data(a),
                    n = e("#mCSB_" + o.idx),
                    i = e("#mCSB_" + o.idx + "_container"),
                    r = [e("#mCSB_" + o.idx + "_dragger_vertical"), e("#mCSB_" + o.idx + "_dragger_horizontal")],
                    l = [i.outerHeight(!1) - n.height(), i.outerWidth(!1) - n.width()],
                    s = [l[0] / (r[0].parent().height() - r[0].height()), l[1] / (r[1].parent().width() - r[1].width())];
                o.scrollRatio = {
                    y: s[0],
                    x: s[1]
                }
            },
            y = function(e, t, o) {
                var a = o ? d[0] + "_expanded" : "",
                    n = e.closest(".mCSB_scrollTools");
                "active" === t ? (e.toggleClass(d[0] + " " + a), n.toggleClass(d[1]), e[0]._draggable = e[0]._draggable ? 0 : 1) : e[0]._draggable || ("hide" === t ? (e.removeClass(d[0]), n.removeClass(d[1])) : (e.addClass(d[0]), n.addClass(d[1])))
            },
            B = function() {
                var t = e(this),
                    o = t.data(a),
                    n = e("#mCSB_" + o.idx),
                    i = e("#mCSB_" + o.idx + "_container"),
                    r = null == o.overflowed ? i.height() : i.outerHeight(!1),
                    l = null == o.overflowed ? i.width() : i.outerWidth(!1);
                return [r > n.height(), l > n.width()]
            },
            T = function() {
                var t = e(this),
                    o = t.data(a),
                    n = o.opt,
                    i = e("#mCSB_" + o.idx),
                    r = e("#mCSB_" + o.idx + "_container"),
                    l = [e("#mCSB_" + o.idx + "_dragger_vertical"), e("#mCSB_" + o.idx + "_dragger_horizontal")];
                if (V(t), ("x" !== n.axis && !o.overflowed[0] || "y" === n.axis && o.overflowed[0]) && (l[0].add(r).css("top", 0), Q(t, "_resetY")), "y" !== n.axis && !o.overflowed[1] || "x" === n.axis && o.overflowed[1]) {
                    var s = dx = 0;
                    "rtl" === o.langDir && (s = i.width() - r.outerWidth(!1), dx = Math.abs(s / o.scrollRatio.x)), r.css("left", s), l[1].css("left", dx), Q(t, "_resetX")
                }
            },
            k = function() {
                function t() {
                    r = setTimeout(function() {
                        e.event.special.mousewheel ? (clearTimeout(r), W.call(o[0])) : t()
                    }, 100)
                }
                var o = e(this),
                    n = o.data(a),
                    i = n.opt;
                if (!n.bindEvents) {
                    if (R.call(this), i.contentTouchScroll && D.call(this), E.call(this), i.mouseWheel.enable) {
                        var r;
                        t()
                    }
                    P.call(this), H.call(this), i.advanced.autoScrollOnFocus && z.call(this), i.scrollButtons.enable && U.call(this), i.keyboard.enable && F.call(this), n.bindEvents = !0
                }
            },
            M = function() {
                var t = e(this),
                    o = t.data(a),
                    n = o.opt,
                    i = a + "_" + o.idx,
                    r = ".mCSB_" + o.idx + "_scrollbar",
                    l = e("#mCSB_" + o.idx + ",#mCSB_" + o.idx + "_container,#mCSB_" + o.idx + "_container_wrapper," + r + " ." + d[12] + ",#mCSB_" + o.idx + "_dragger_vertical,#mCSB_" + o.idx + "_dragger_horizontal," + r + ">a"),
                    s = e("#mCSB_" + o.idx + "_container");
                n.advanced.releaseDraggableSelectors && l.add(e(n.advanced.releaseDraggableSelectors)), o.bindEvents && (e(document).unbind("." + i), l.each(function() {
                    e(this).unbind("." + i)
                }), clearTimeout(t[0]._focusTimeout), Z(t[0], "_focusTimeout"), clearTimeout(o.sequential.step), Z(o.sequential, "step"), clearTimeout(s[0].onCompleteTimeout), Z(s[0], "onCompleteTimeout"), o.bindEvents = !1)
            },
            O = function(t) {
                var o = e(this),
                    n = o.data(a),
                    i = n.opt,
                    r = e("#mCSB_" + n.idx + "_container_wrapper"),
                    l = r.length ? r : e("#mCSB_" + n.idx + "_container"),
                    s = [e("#mCSB_" + n.idx + "_scrollbar_vertical"), e("#mCSB_" + n.idx + "_scrollbar_horizontal")],
                    c = [s[0].find(".mCSB_dragger"), s[1].find(".mCSB_dragger")];
                "x" !== i.axis && (n.overflowed[0] && !t ? (s[0].add(c[0]).add(s[0].children("a")).css("display", "block"), l.removeClass(d[8] + " " + d[10])) : (i.alwaysShowScrollbar ? (2 !== i.alwaysShowScrollbar && c[0].css("display", "none"), l.removeClass(d[10])) : (s[0].css("display", "none"), l.addClass(d[10])), l.addClass(d[8]))), "y" !== i.axis && (n.overflowed[1] && !t ? (s[1].add(c[1]).add(s[1].children("a")).css("display", "block"), l.removeClass(d[9] + " " + d[11])) : (i.alwaysShowScrollbar ? (2 !== i.alwaysShowScrollbar && c[1].css("display", "none"), l.removeClass(d[11])) : (s[1].css("display", "none"), l.addClass(d[11])), l.addClass(d[9]))), n.overflowed[0] || n.overflowed[1] ? o.removeClass(d[5]) : o.addClass(d[5])
            },
            I = function(e) {
                var t = e.type;
                switch (t) {
                    case "pointerdown":
                    case "MSPointerDown":
                    case "pointermove":
                    case "MSPointerMove":
                    case "pointerup":
                    case "MSPointerUp":
                        return e.target.ownerDocument !== document ? [e.originalEvent.screenY, e.originalEvent.screenX, !1] : [e.originalEvent.pageY, e.originalEvent.pageX, !1];
                    case "touchstart":
                    case "touchmove":
                    case "touchend":
                        var o = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0],
                            a = e.originalEvent.touches.length || e.originalEvent.changedTouches.length;
                        return e.target.ownerDocument !== document ? [o.screenY, o.screenX, a > 1] : [o.pageY, o.pageX, a > 1];
                    default:
                        return [e.pageY, e.pageX, !1]
                }
            },
            R = function() {
                function t(e) {
                    var t = m.find("iframe");
                    if (t.length) {
                        var o = e ? "auto" : "none";
                        t.css("pointer-events", o)
                    }
                }

                function o(e, t, o, a) {
                    if (m[0].idleTimer = u.scrollInertia < 233 ? 250 : 0, n.attr("id") === h[1]) var i = "x",
                        r = (n[0].offsetLeft - t + a) * d.scrollRatio.x;
                    else var i = "y",
                        r = (n[0].offsetTop - e + o) * d.scrollRatio.y;
                    Q(l, r.toString(), {
                        dir: i,
                        drag: !0
                    })
                }
                var n, i, r, l = e(this),
                    d = l.data(a),
                    u = d.opt,
                    f = a + "_" + d.idx,
                    h = ["mCSB_" + d.idx + "_dragger_vertical", "mCSB_" + d.idx + "_dragger_horizontal"],
                    m = e("#mCSB_" + d.idx + "_container"),
                    p = e("#" + h[0] + ",#" + h[1]),
                    g = u.advanced.releaseDraggableSelectors ? p.add(e(u.advanced.releaseDraggableSelectors)) : p;
                p.bind("mousedown." + f + " touchstart." + f + " pointerdown." + f + " MSPointerDown." + f, function(o) {
                    if (o.stopImmediatePropagation(), o.preventDefault(), $(o)) {
                        c = !0, s && (document.onselectstart = function() {
                            return !1
                        }), t(!1), V(l), n = e(this);
                        var a = n.offset(),
                            d = I(o)[0] - a.top,
                            f = I(o)[1] - a.left,
                            h = n.height() + a.top,
                            m = n.width() + a.left;
                        h > d && d > 0 && m > f && f > 0 && (i = d, r = f), y(n, "active", u.autoExpandScrollbar)
                    }
                }).bind("touchmove." + f, function(e) {
                    e.stopImmediatePropagation(), e.preventDefault();
                    var t = n.offset(),
                        a = I(e)[0] - t.top,
                        l = I(e)[1] - t.left;
                    o(i, r, a, l)
                }), e(document).bind("mousemove." + f + " pointermove." + f + " MSPointerMove." + f, function(e) {
                    if (n) {
                        var t = n.offset(),
                            a = I(e)[0] - t.top,
                            l = I(e)[1] - t.left;
                        if (i === a) return;
                        o(i, r, a, l)
                    }
                }).add(g).bind("mouseup." + f + " touchend." + f + " pointerup." + f + " MSPointerUp." + f, function(e) {
                    n && (y(n, "active", u.autoExpandScrollbar), n = null), c = !1, s && (document.onselectstart = null), t(!0)
                })
            },
            D = function() {
                function o(e) {
                    if (!ee(e) || c || I(e)[2]) return void(t = 0);
                    t = 1, S = 0, b = 0, C.removeClass("mCS_touch_action");
                    var o = M.offset();
                    d = I(e)[0] - o.top, u = I(e)[1] - o.left, A = [I(e)[0], I(e)[1]]
                }

                function n(e) {
                    if (ee(e) && !c && !I(e)[2] && (e.stopImmediatePropagation(), !b || S)) {
                        p = J();
                        var t = k.offset(),
                            o = I(e)[0] - t.top,
                            a = I(e)[1] - t.left,
                            n = "mcsLinearOut";
                        if (R.push(o), D.push(a), A[2] = Math.abs(I(e)[0] - A[0]), A[3] = Math.abs(I(e)[1] - A[1]), y.overflowed[0]) var i = O[0].parent().height() - O[0].height(),
                            r = d - o > 0 && o - d > -(i * y.scrollRatio.y) && (2 * A[3] < A[2] || "yx" === B.axis);
                        if (y.overflowed[1]) var l = O[1].parent().width() - O[1].width(),
                            f = u - a > 0 && a - u > -(l * y.scrollRatio.x) && (2 * A[2] < A[3] || "yx" === B.axis);
                        r || f ? (e.preventDefault(), S = 1) : (b = 1, C.addClass("mCS_touch_action")), _ = "yx" === B.axis ? [d - o, u - a] : "x" === B.axis ? [null, u - a] : [d - o, null], M[0].idleTimer = 250, y.overflowed[0] && s(_[0], E, n, "y", "all", !0), y.overflowed[1] && s(_[1], E, n, "x", W, !0)
                    }
                }

                function i(e) {
                    if (!ee(e) || c || I(e)[2]) return void(t = 0);
                    t = 1, e.stopImmediatePropagation(), V(C), m = J();
                    var o = k.offset();
                    f = I(e)[0] - o.top, h = I(e)[1] - o.left, R = [], D = []
                }

                function r(e) {
                    if (ee(e) && !c && !I(e)[2]) {
                        e.stopImmediatePropagation(), S = 0, b = 0, g = J();
                        var t = k.offset(),
                            o = I(e)[0] - t.top,
                            a = I(e)[1] - t.left;
                        if (!(g - p > 30)) {
                            x = 1e3 / (g - m);
                            var n = "mcsEaseOut",
                                i = 2.5 > x,
                                r = i ? [R[R.length - 2], D[D.length - 2]] : [0, 0];
                            v = i ? [o - r[0], a - r[1]] : [o - f, a - h];
                            var d = [Math.abs(v[0]), Math.abs(v[1])];
                            x = i ? [Math.abs(v[0] / 4), Math.abs(v[1] / 4)] : [x, x];
                            var u = [Math.abs(M[0].offsetTop) - v[0] * l(d[0] / x[0], x[0]), Math.abs(M[0].offsetLeft) - v[1] * l(d[1] / x[1], x[1])];
                            _ = "yx" === B.axis ? [u[0], u[1]] : "x" === B.axis ? [null, u[1]] : [u[0], null], w = [4 * d[0] + B.scrollInertia, 4 * d[1] + B.scrollInertia];
                            var C = parseInt(B.contentTouchScroll) || 0;
                            _[0] = d[0] > C ? _[0] : 0, _[1] = d[1] > C ? _[1] : 0, y.overflowed[0] && s(_[0], w[0], n, "y", W, !1), y.overflowed[1] && s(_[1], w[1], n, "x", W, !1)
                        }
                    }
                }

                function l(e, t) {
                    var o = [1.5 * t, 2 * t, t / 1.5, t / 2];
                    return e > 90 ? t > 4 ? o[0] : o[3] : e > 60 ? t > 3 ? o[3] : o[2] : e > 30 ? t > 8 ? o[1] : t > 6 ? o[0] : t > 4 ? t : o[2] : t > 8 ? t : o[3]
                }

                function s(e, t, o, a, n, i) {
                    e && Q(C, e.toString(), {
                        dur: t,
                        scrollEasing: o,
                        dir: a,
                        overwrite: n,
                        drag: i
                    })
                }
                var d, u, f, h, m, p, g, v, x, _, w, S, b, C = e(this),
                    y = C.data(a),
                    B = y.opt,
                    T = a + "_" + y.idx,
                    k = e("#mCSB_" + y.idx),
                    M = e("#mCSB_" + y.idx + "_container"),
                    O = [e("#mCSB_" + y.idx + "_dragger_vertical"), e("#mCSB_" + y.idx + "_dragger_horizontal")],
                    R = [],
                    D = [],
                    E = 0,
                    W = "yx" === B.axis ? "none" : "all",
                    A = [],
                    P = M.find("iframe"),
                    z = ["touchstart." + T + " pointerdown." + T + " MSPointerDown." + T, "touchmove." + T + " pointermove." + T + " MSPointerMove." + T, "touchend." + T + " pointerup." + T + " MSPointerUp." + T];
                M.bind(z[0], function(e) {
                    o(e)
                }).bind(z[1], function(e) {
                    n(e)
                }), k.bind(z[0], function(e) {
                    i(e)
                }).bind(z[2], function(e) {
                    r(e)
                }), P.length && P.each(function() {
                    e(this).load(function() {
                        L(this) && e(this.contentDocument || this.contentWindow.document).bind(z[0], function(e) {
                            o(e), i(e)
                        }).bind(z[1], function(e) {
                            n(e)
                        }).bind(z[2], function(e) {
                            r(e)
                        })
                    })
                })
            },
            E = function() {
                function o() {
                    return window.getSelection ? window.getSelection().toString() : document.selection && "Control" != document.selection.type ? document.selection.createRange().text : 0
                }

                function n(e, t, o) {
                    d.type = o && i ? "stepped" : "stepless", d.scrollAmount = 10, q(r, e, t, "mcsLinearOut", o ? 60 : null)
                }
                var i, r = e(this),
                    l = r.data(a),
                    s = l.opt,
                    d = l.sequential,
                    u = a + "_" + l.idx,
                    f = e("#mCSB_" + l.idx + "_container"),
                    h = f.parent();
                f.bind("mousedown." + u, function(e) {
                    t || i || (i = 1, c = !0)
                }).add(document).bind("mousemove." + u, function(e) {
                    if (!t && i && o()) {
                        var a = f.offset(),
                            r = I(e)[0] - a.top + f[0].offsetTop,
                            c = I(e)[1] - a.left + f[0].offsetLeft;
                        r > 0 && r < h.height() && c > 0 && c < h.width() ? d.step && n("off", null, "stepped") : ("x" !== s.axis && l.overflowed[0] && (0 > r ? n("on", 38) : r > h.height() && n("on", 40)), "y" !== s.axis && l.overflowed[1] && (0 > c ? n("on", 37) : c > h.width() && n("on", 39)))
                    }
                }).bind("mouseup." + u, function(e) {
                    t || (i && (i = 0, n("off", null)), c = !1)
                })
            },
            W = function() {
                function t(t, a) {
                    if (V(o), !A(o, t.target)) {
                        var r = "auto" !== i.mouseWheel.deltaFactor ? parseInt(i.mouseWheel.deltaFactor) : s && t.deltaFactor < 100 ? 100 : t.deltaFactor || 100;
                        if ("x" === i.axis || "x" === i.mouseWheel.axis) var d = "x",
                            u = [Math.round(r * n.scrollRatio.x), parseInt(i.mouseWheel.scrollAmount)],
                            f = "auto" !== i.mouseWheel.scrollAmount ? u[1] : u[0] >= l.width() ? .9 * l.width() : u[0],
                            h = Math.abs(e("#mCSB_" + n.idx + "_container")[0].offsetLeft),
                            m = c[1][0].offsetLeft,
                            p = c[1].parent().width() - c[1].width(),
                            g = t.deltaX || t.deltaY || a;
                        else var d = "y",
                            u = [Math.round(r * n.scrollRatio.y), parseInt(i.mouseWheel.scrollAmount)],
                            f = "auto" !== i.mouseWheel.scrollAmount ? u[1] : u[0] >= l.height() ? .9 * l.height() : u[0],
                            h = Math.abs(e("#mCSB_" + n.idx + "_container")[0].offsetTop),
                            m = c[0][0].offsetTop,
                            p = c[0].parent().height() - c[0].height(),
                            g = t.deltaY || a;
                        "y" === d && !n.overflowed[0] || "x" === d && !n.overflowed[1] || ((i.mouseWheel.invert || t.webkitDirectionInvertedFromDevice) && (g = -g), i.mouseWheel.normalizeDelta && (g = 0 > g ? -1 : 1), (g > 0 && 0 !== m || 0 > g && m !== p || i.mouseWheel.preventDefault) && (t.stopImmediatePropagation(), t.preventDefault()), Q(o, (h - g * f).toString(), {
                            dir: d
                        }))
                    }
                }
                if (e(this).data(a)) {
                    var o = e(this),
                        n = o.data(a),
                        i = n.opt,
                        r = a + "_" + n.idx,
                        l = e("#mCSB_" + n.idx),
                        c = [e("#mCSB_" + n.idx + "_dragger_vertical"), e("#mCSB_" + n.idx + "_dragger_horizontal")],
                        d = e("#mCSB_" + n.idx + "_container").find("iframe");
                    d.length && d.each(function() {
                        e(this).load(function() {
                            L(this) && e(this.contentDocument || this.contentWindow.document).bind("mousewheel." + r, function(e, o) {
                                t(e, o)
                            })
                        })
                    }), l.bind("mousewheel." + r, function(e, o) {
                        t(e, o)
                    })
                }
            },
            L = function(e) {
                var t = null;
                try {
                    var o = e.contentDocument || e.contentWindow.document;
                    t = o.body.innerHTML
                } catch (a) {}
                return null !== t
            },
            A = function(t, o) {
                var n = o.nodeName.toLowerCase(),
                    i = t.data(a).opt.mouseWheel.disableOver,
                    r = ["select", "textarea"];
                return e.inArray(n, i) > -1 && !(e.inArray(n, r) > -1 && !e(o).is(":focus"))
            },
            P = function() {
                var t = e(this),
                    o = t.data(a),
                    n = a + "_" + o.idx,
                    i = e("#mCSB_" + o.idx + "_container"),
                    r = i.parent(),
                    l = e(".mCSB_" + o.idx + "_scrollbar ." + d[12]);
                l.bind("touchstart." + n + " pointerdown." + n + " MSPointerDown." + n, function(e) {
                    c = !0
                }).bind("touchend." + n + " pointerup." + n + " MSPointerUp." + n, function(e) {
                    c = !1
                }).bind("click." + n, function(a) {
                    if (e(a.target).hasClass(d[12]) || e(a.target).hasClass("mCSB_draggerRail")) {
                        V(t);
                        var n = e(this),
                            l = n.find(".mCSB_dragger");
                        if (n.parent(".mCSB_scrollTools_horizontal").length > 0) {
                            if (!o.overflowed[1]) return;
                            var s = "x",
                                c = a.pageX > l.offset().left ? -1 : 1,
                                u = Math.abs(i[0].offsetLeft) - .9 * c * r.width()
                        } else {
                            if (!o.overflowed[0]) return;
                            var s = "y",
                                c = a.pageY > l.offset().top ? -1 : 1,
                                u = Math.abs(i[0].offsetTop) - .9 * c * r.height()
                        }
                        Q(t, u.toString(), {
                            dir: s,
                            scrollEasing: "mcsEaseInOut"
                        })
                    }
                })
            },
            z = function() {
                var t = e(this),
                    o = t.data(a),
                    n = o.opt,
                    i = a + "_" + o.idx,
                    r = e("#mCSB_" + o.idx + "_container"),
                    l = r.parent();
                r.bind("focusin." + i, function(o) {
                    var a = e(document.activeElement),
                        i = r.find(".mCustomScrollBox").length,
                        s = 0;
                    a.is(n.advanced.autoScrollOnFocus) && (V(t), clearTimeout(t[0]._focusTimeout), t[0]._focusTimer = i ? (s + 17) * i : 0, t[0]._focusTimeout = setTimeout(function() {
                        var e = [oe(a)[0], oe(a)[1]],
                            o = [r[0].offsetTop, r[0].offsetLeft],
                            i = [o[0] + e[0] >= 0 && o[0] + e[0] < l.height() - a.outerHeight(!1), o[1] + e[1] >= 0 && o[0] + e[1] < l.width() - a.outerWidth(!1)],
                            c = "yx" !== n.axis || i[0] || i[1] ? "all" : "none";
                        "x" === n.axis || i[0] || Q(t, e[0].toString(), {
                            dir: "y",
                            scrollEasing: "mcsEaseInOut",
                            overwrite: c,
                            dur: s
                        }), "y" === n.axis || i[1] || Q(t, e[1].toString(), {
                            dir: "x",
                            scrollEasing: "mcsEaseInOut",
                            overwrite: c,
                            dur: s
                        })
                    }, t[0]._focusTimer))
                })
            },
            H = function() {
                var t = e(this),
                    o = t.data(a),
                    n = a + "_" + o.idx,
                    i = e("#mCSB_" + o.idx + "_container").parent();
                i.bind("scroll." + n, function(t) {
                    (0 !== i.scrollTop() || 0 !== i.scrollLeft()) && e(".mCSB_" + o.idx + "_scrollbar").css("visibility", "hidden")
                })
            },
            U = function() {
                var t = e(this),
                    o = t.data(a),
                    n = o.opt,
                    i = o.sequential,
                    r = a + "_" + o.idx,
                    l = ".mCSB_" + o.idx + "_scrollbar",
                    s = e(l + ">a");
                s.bind("mousedown." + r + " touchstart." + r + " pointerdown." + r + " MSPointerDown." + r + " mouseup." + r + " touchend." + r + " pointerup." + r + " MSPointerUp." + r + " mouseout." + r + " pointerout." + r + " MSPointerOut." + r + " click." + r, function(a) {
                    function r(e, o) {
                        i.scrollAmount = n.snapAmount || n.scrollButtons.scrollAmount, q(t, e, o)
                    }
                    if (a.preventDefault(), $(a)) {
                        var l = e(this).attr("class");
                        switch (i.type = n.scrollButtons.scrollType, a.type) {
                            case "mousedown":
                            case "touchstart":
                            case "pointerdown":
                            case "MSPointerDown":
                                if ("stepped" === i.type) return;
                                c = !0, o.tweenRunning = !1, r("on", l);
                                break;
                            case "mouseup":
                            case "touchend":
                            case "pointerup":
                            case "MSPointerUp":
                            case "mouseout":
                            case "pointerout":
                            case "MSPointerOut":
                                if ("stepped" === i.type) return;
                                c = !1, i.dir && r("off", l);
                                break;
                            case "click":
                                if ("stepped" !== i.type || o.tweenRunning) return;
                                r("on", l)
                        }
                    }
                })
            },
            F = function() {
                function t(t) {
                    function a(e, t) {
                        r.type = i.keyboard.scrollType, r.scrollAmount = i.snapAmount || i.keyboard.scrollAmount, "stepped" === r.type && n.tweenRunning || q(o, e, t)
                    }
                    switch (t.type) {
                        case "blur":
                            n.tweenRunning && r.dir && a("off", null);
                            break;
                        case "keydown":
                        case "keyup":
                            var l = t.keyCode ? t.keyCode : t.which,
                                s = "on";
                            if ("x" !== i.axis && (38 === l || 40 === l) || "y" !== i.axis && (37 === l || 39 === l)) {
                                if ((38 === l || 40 === l) && !n.overflowed[0] || (37 === l || 39 === l) && !n.overflowed[1]) return;
                                "keyup" === t.type && (s = "off"), e(document.activeElement).is(u) || (t.preventDefault(), t.stopImmediatePropagation(), a(s, l))
                            } else if (33 === l || 34 === l) {
                                if ((n.overflowed[0] || n.overflowed[1]) && (t.preventDefault(), t.stopImmediatePropagation()), "keyup" === t.type) {
                                    V(o);
                                    var f = 34 === l ? -1 : 1;
                                    if ("x" === i.axis || "yx" === i.axis && n.overflowed[1] && !n.overflowed[0]) var h = "x",
                                        m = Math.abs(c[0].offsetLeft) - .9 * f * d.width();
                                    else var h = "y",
                                        m = Math.abs(c[0].offsetTop) - .9 * f * d.height();
                                    Q(o, m.toString(), {
                                        dir: h,
                                        scrollEasing: "mcsEaseInOut"
                                    })
                                }
                            } else if ((35 === l || 36 === l) && !e(document.activeElement).is(u) && ((n.overflowed[0] || n.overflowed[1]) && (t.preventDefault(), t.stopImmediatePropagation()), "keyup" === t.type)) {
                                if ("x" === i.axis || "yx" === i.axis && n.overflowed[1] && !n.overflowed[0]) var h = "x",
                                    m = 35 === l ? Math.abs(d.width() - c.outerWidth(!1)) : 0;
                                else var h = "y",
                                    m = 35 === l ? Math.abs(d.height() - c.outerHeight(!1)) : 0;
                                Q(o, m.toString(), {
                                    dir: h,
                                    scrollEasing: "mcsEaseInOut"
                                })
                            }
                    }
                }
                var o = e(this),
                    n = o.data(a),
                    i = n.opt,
                    r = n.sequential,
                    l = a + "_" + n.idx,
                    s = e("#mCSB_" + n.idx),
                    c = e("#mCSB_" + n.idx + "_container"),
                    d = c.parent(),
                    u = "input,textarea,select,datalist,keygen,[contenteditable='true']",
                    f = c.find("iframe"),
                    h = ["blur." + l + " keydown." + l + " keyup." + l];
                f.length && f.each(function() {
                    e(this).load(function() {
                        L(this) && e(this.contentDocument || this.contentWindow.document).bind(h[0], function(e) {
                            t(e)
                        })
                    })
                }), s.attr("tabindex", "0").bind(h[0], function(e) {
                    t(e)
                })
            },
            q = function(t, o, n, i, r) {
                function l(e) {
                    var o = "stepped" !== f.type,
                        a = r ? r : e ? o ? p / 1.5 : g : 1e3 / 60,
                        n = e ? o ? 7.5 : 40 : 2.5,
                        s = [Math.abs(h[0].offsetTop), Math.abs(h[0].offsetLeft)],
                        d = [c.scrollRatio.y > 10 ? 10 : c.scrollRatio.y, c.scrollRatio.x > 10 ? 10 : c.scrollRatio.x],
                        u = "x" === f.dir[0] ? s[1] + f.dir[1] * d[1] * n : s[0] + f.dir[1] * d[0] * n,
                        m = "x" === f.dir[0] ? s[1] + f.dir[1] * parseInt(f.scrollAmount) : s[0] + f.dir[1] * parseInt(f.scrollAmount),
                        v = "auto" !== f.scrollAmount ? m : u,
                        x = i ? i : e ? o ? "mcsLinearOut" : "mcsEaseInOut" : "mcsLinear",
                        _ = e ? !0 : !1;
                    return e && 17 > a && (v = "x" === f.dir[0] ? s[1] : s[0]), Q(t, v.toString(), {
                        dir: f.dir[0],
                        scrollEasing: x,
                        dur: a,
                        onComplete: _
                    }), e ? void(f.dir = !1) : (clearTimeout(f.step), void(f.step = setTimeout(function() {
                        l()
                    }, a)))
                }

                function s() {
                    clearTimeout(f.step), Z(f, "step"), V(t)
                }
                var c = t.data(a),
                    u = c.opt,
                    f = c.sequential,
                    h = e("#mCSB_" + c.idx + "_container"),
                    m = "stepped" === f.type ? !0 : !1,
                    p = u.scrollInertia < 26 ? 26 : u.scrollInertia,
                    g = u.scrollInertia < 1 ? 17 : u.scrollInertia;
                switch (o) {
                    case "on":
                        if (f.dir = [n === d[16] || n === d[15] || 39 === n || 37 === n ? "x" : "y", n === d[13] || n === d[15] || 38 === n || 37 === n ? -1 : 1], V(t), te(n) && "stepped" === f.type) return;
                        l(m);
                        break;
                    case "off":
                        s(), (m || c.tweenRunning && f.dir) && l(!0)
                }
            },
            Y = function(t) {
                var o = e(this).data(a).opt,
                    n = [];
                return "function" == typeof t && (t = t()), t instanceof Array ? n = t.length > 1 ? [t[0], t[1]] : "x" === o.axis ? [null, t[0]] : [t[0], null] : (n[0] = t.y ? t.y : t.x || "x" === o.axis ? null : t, n[1] = t.x ? t.x : t.y || "y" === o.axis ? null : t), "function" == typeof n[0] && (n[0] = n[0]()), "function" == typeof n[1] && (n[1] = n[1]()), n
            },
            j = function(t, o) {
                if (null != t && "undefined" != typeof t) {
                    var n = e(this),
                        i = n.data(a),
                        r = i.opt,
                        l = e("#mCSB_" + i.idx + "_container"),
                        s = l.parent(),
                        c = typeof t;
                    o || (o = "x" === r.axis ? "x" : "y");
                    var d = "x" === o ? l.outerWidth(!1) : l.outerHeight(!1),
                        f = "x" === o ? l[0].offsetLeft : l[0].offsetTop,
                        h = "x" === o ? "left" : "top";
                    switch (c) {
                        case "function":
                            return t();
                        case "object":
                            var m = t.jquery ? t : e(t);
                            if (!m.length) return;
                            return "x" === o ? oe(m)[1] : oe(m)[0];
                        case "string":
                        case "number":
                            if (te(t)) return Math.abs(t);
                            if (-1 !== t.indexOf("%")) return Math.abs(d * parseInt(t) / 100);
                            if (-1 !== t.indexOf("-=")) return Math.abs(f - parseInt(t.split("-=")[1]));
                            if (-1 !== t.indexOf("+=")) {
                                var p = f + parseInt(t.split("+=")[1]);
                                return p >= 0 ? 0 : Math.abs(p)
                            }
                            if (-1 !== t.indexOf("px") && te(t.split("px")[0])) return Math.abs(t.split("px")[0]);
                            if ("top" === t || "left" === t) return 0;
                            if ("bottom" === t) return Math.abs(s.height() - l.outerHeight(!1));
                            if ("right" === t) return Math.abs(s.width() - l.outerWidth(!1));
                            if ("first" === t || "last" === t) {
                                var m = l.find(":" + t);
                                return "x" === o ? oe(m)[1] : oe(m)[0]
                            }
                            return e(t).length ? "x" === o ? oe(e(t))[1] : oe(e(t))[0] : (l.css(h, t), void u.update.call(null, n[0]))
                    }
                }
            },
            X = function(t) {
                function o() {
                    return clearTimeout(h[0].autoUpdate), 0 === s.parents("html").length ? void(s = null) : void(h[0].autoUpdate = setTimeout(function() {
                        return f.advanced.updateOnSelectorChange && (m = r(), m !== w) ? (l(3), void(w = m)) : (f.advanced.updateOnContentResize && (p = [h.outerHeight(!1), h.outerWidth(!1), v.height(), v.width(), _()[0], _()[1]], (p[0] !== S[0] || p[1] !== S[1] || p[2] !== S[2] || p[3] !== S[3] || p[4] !== S[4] || p[5] !== S[5]) && (l(p[0] !== S[0] || p[1] !== S[1]), S = p)), f.advanced.updateOnImageLoad && (g = n(), g !== b && (h.find("img").each(function() {
                            i(this)
                        }), b = g)), void((f.advanced.updateOnSelectorChange || f.advanced.updateOnContentResize || f.advanced.updateOnImageLoad) && o()))
                    }, f.advanced.autoUpdateTimeout))
                }

                function n() {
                    var e = 0;
                    return f.advanced.updateOnImageLoad && (e = h.find("img").length), e
                }

                function i(t) {
                    function o(e, t) {
                        return function() {
                            return t.apply(e, arguments)
                        }
                    }

                    function a() {
                        this.onload = null, e(t).addClass(d[2]), l(2)
                    }
                    if (e(t).hasClass(d[2])) return void l();
                    var n = new Image;
                    n.onload = o(n, a), n.src = t.src
                }

                function r() {
                    f.advanced.updateOnSelectorChange === !0 && (f.advanced.updateOnSelectorChange = "*");
                    var t = 0,
                        o = h.find(f.advanced.updateOnSelectorChange);
                    return f.advanced.updateOnSelectorChange && o.length > 0 && o.each(function() {
                        t += e(this).height() + e(this).width()
                    }), t
                }

                function l(e) {
                    clearTimeout(h[0].autoUpdate), u.update.call(null, s[0], e)
                }
                var s = e(this),
                    c = s.data(a),
                    f = c.opt,
                    h = e("#mCSB_" + c.idx + "_container");
                if (t) return clearTimeout(h[0].autoUpdate), void Z(h[0], "autoUpdate");
                var m, p, g, v = h.parent(),
                    x = [e("#mCSB_" + c.idx + "_scrollbar_vertical"), e("#mCSB_" + c.idx + "_scrollbar_horizontal")],
                    _ = function() {
                        return [x[0].is(":visible") ? x[0].outerHeight(!0) : 0, x[1].is(":visible") ? x[1].outerWidth(!0) : 0]
                    },
                    w = r(),
                    S = [h.outerHeight(!1), h.outerWidth(!1), v.height(), v.width(), _()[0], _()[1]],
                    b = n();
                o()
            },
            N = function(e, t, o) {
                return Math.round(e / t) * t - o
            },
            V = function(t) {
                var o = t.data(a),
                    n = e("#mCSB_" + o.idx + "_container,#mCSB_" + o.idx + "_container_wrapper,#mCSB_" + o.idx + "_dragger_vertical,#mCSB_" + o.idx + "_dragger_horizontal");
                n.each(function() {
                    K.call(this)
                })
            },
            Q = function(t, o, n) {
                function i(e) {
                    return s && c.callbacks[e] && "function" == typeof c.callbacks[e]
                }

                function r() {
                    return [c.callbacks.alwaysTriggerOffsets || _ >= w[0] + b, c.callbacks.alwaysTriggerOffsets || -C >= _]
                }

                function l() {
                    var e = [h[0].offsetTop, h[0].offsetLeft],
                        o = [v[0].offsetTop, v[0].offsetLeft],
                        a = [h.outerHeight(!1), h.outerWidth(!1)],
                        i = [f.height(), f.width()];
                    t[0].mcs = {
                        content: h,
                        top: e[0],
                        left: e[1],
                        draggerTop: o[0],
                        draggerLeft: o[1],
                        topPct: Math.round(100 * Math.abs(e[0]) / (Math.abs(a[0]) - i[0])),
                        leftPct: Math.round(100 * Math.abs(e[1]) / (Math.abs(a[1]) - i[1])),
                        direction: n.dir
                    }
                }
                var s = t.data(a),
                    c = s.opt,
                    d = {
                        trigger: "internal",
                        dir: "y",
                        scrollEasing: "mcsEaseOut",
                        drag: !1,
                        dur: c.scrollInertia,
                        overwrite: "all",
                        callbacks: !0,
                        onStart: !0,
                        onUpdate: !0,
                        onComplete: !0
                    },
                    n = e.extend(d, n),
                    u = [n.dur, n.drag ? 0 : n.dur],
                    f = e("#mCSB_" + s.idx),
                    h = e("#mCSB_" + s.idx + "_container"),
                    m = h.parent(),
                    p = c.callbacks.onTotalScrollOffset ? Y.call(t, c.callbacks.onTotalScrollOffset) : [0, 0],
                    g = c.callbacks.onTotalScrollBackOffset ? Y.call(t, c.callbacks.onTotalScrollBackOffset) : [0, 0];
                if (s.trigger = n.trigger, (0 !== m.scrollTop() || 0 !== m.scrollLeft()) && (e(".mCSB_" + s.idx + "_scrollbar").css("visibility", "visible"), m.scrollTop(0).scrollLeft(0)), "_resetY" !== o || s.contentReset.y || (i("onOverflowYNone") && c.callbacks.onOverflowYNone.call(t[0]), s.contentReset.y = 1), "_resetX" !== o || s.contentReset.x || (i("onOverflowXNone") && c.callbacks.onOverflowXNone.call(t[0]), s.contentReset.x = 1), "_resetY" !== o && "_resetX" !== o) {
                    switch (!s.contentReset.y && t[0].mcs || !s.overflowed[0] || (i("onOverflowY") && c.callbacks.onOverflowY.call(t[0]), s.contentReset.x = null), !s.contentReset.x && t[0].mcs || !s.overflowed[1] || (i("onOverflowX") && c.callbacks.onOverflowX.call(t[0]), s.contentReset.x = null), c.snapAmount && (o = N(o, c.snapAmount, c.snapOffset)), n.dir) {
                        case "x":
                            var v = e("#mCSB_" + s.idx + "_dragger_horizontal"),
                                x = "left",
                                _ = h[0].offsetLeft,
                                w = [f.width() - h.outerWidth(!1), v.parent().width() - v.width()],
                                S = [o, 0 === o ? 0 : o / s.scrollRatio.x],
                                b = p[1],
                                C = g[1],
                                B = b > 0 ? b / s.scrollRatio.x : 0,
                                T = C > 0 ? C / s.scrollRatio.x : 0;
                            break;
                        case "y":
                            var v = e("#mCSB_" + s.idx + "_dragger_vertical"),
                                x = "top",
                                _ = h[0].offsetTop,
                                w = [f.height() - h.outerHeight(!1), v.parent().height() - v.height()],
                                S = [o, 0 === o ? 0 : o / s.scrollRatio.y],
                                b = p[0],
                                C = g[0],
                                B = b > 0 ? b / s.scrollRatio.y : 0,
                                T = C > 0 ? C / s.scrollRatio.y : 0
                    }
                    S[1] < 0 || 0 === S[0] && 0 === S[1] ? S = [0, 0] : S[1] >= w[1] ? S = [w[0], w[1]] : S[0] = -S[0], t[0].mcs || (l(), i("onInit") && c.callbacks.onInit.call(t[0])), clearTimeout(h[0].onCompleteTimeout), (s.tweenRunning || !(0 === _ && S[0] >= 0 || _ === w[0] && S[0] <= w[0])) && (G(v[0], x, Math.round(S[1]), u[1], n.scrollEasing), G(h[0], x, Math.round(S[0]), u[0], n.scrollEasing, n.overwrite, {
                        onStart: function() {
                            n.callbacks && n.onStart && !s.tweenRunning && (i("onScrollStart") && (l(), c.callbacks.onScrollStart.call(t[0])), s.tweenRunning = !0, y(v), s.cbOffsets = r())
                        },
                        onUpdate: function() {
                            n.callbacks && n.onUpdate && i("whileScrolling") && (l(), c.callbacks.whileScrolling.call(t[0]))
                        },
                        onComplete: function() {
                            if (n.callbacks && n.onComplete) {
                                "yx" === c.axis && clearTimeout(h[0].onCompleteTimeout);
                                var e = h[0].idleTimer || 0;
                                h[0].onCompleteTimeout = setTimeout(function() {
                                    i("onScroll") && (l(), c.callbacks.onScroll.call(t[0])), i("onTotalScroll") && S[1] >= w[1] - B && s.cbOffsets[0] && (l(), c.callbacks.onTotalScroll.call(t[0])), i("onTotalScrollBack") && S[1] <= T && s.cbOffsets[1] && (l(), c.callbacks.onTotalScrollBack.call(t[0])), s.tweenRunning = !1, h[0].idleTimer = 0, y(v, "hide")
                                }, e)
                            }
                        }
                    }))
                }
            },
            G = function(e, t, o, a, n, i, r) {
                function l() {
                    S.stop || (x || m.call(), x = J() - v, s(), x >= S.time && (S.time = x > S.time ? x + f - (x - S.time) : x + f - 1, S.time < x + 1 && (S.time = x + 1)), S.time < a ? S.id = h(l) : g.call())
                }

                function s() {
                    a > 0 ? (S.currVal = u(S.time, _, b, a, n), w[t] = Math.round(S.currVal) + "px") : w[t] = o + "px", p.call()
                }

                function c() {
                    f = 1e3 / 60, S.time = x + f, h = window.requestAnimationFrame ? window.requestAnimationFrame : function(e) {
                        return s(), setTimeout(e, .01)
                    }, S.id = h(l)
                }

                function d() {
                    null != S.id && (window.requestAnimationFrame ? window.cancelAnimationFrame(S.id) : clearTimeout(S.id), S.id = null)
                }

                function u(e, t, o, a, n) {
                    switch (n) {
                        case "linear":
                        case "mcsLinear":
                            return o * e / a + t;
                        case "mcsLinearOut":
                            return e /= a, e--, o * Math.sqrt(1 - e * e) + t;
                        case "easeInOutSmooth":
                            return e /= a / 2, 1 > e ? o / 2 * e * e + t : (e--, -o / 2 * (e * (e - 2) - 1) + t);
                        case "easeInOutStrong":
                            return e /= a / 2, 1 > e ? o / 2 * Math.pow(2, 10 * (e - 1)) + t : (e--, o / 2 * (-Math.pow(2, -10 * e) + 2) + t);
                        case "easeInOut":
                        case "mcsEaseInOut":
                            return e /= a / 2, 1 > e ? o / 2 * e * e * e + t : (e -= 2, o / 2 * (e * e * e + 2) + t);
                        case "easeOutSmooth":
                            return e /= a, e--, -o * (e * e * e * e - 1) + t;
                        case "easeOutStrong":
                            return o * (-Math.pow(2, -10 * e / a) + 1) + t;
                        case "easeOut":
                        case "mcsEaseOut":
                        default:
                            var i = (e /= a) * e,
                                r = i * e;
                            return t + o * (.499999999999997 * r * i + -2.5 * i * i + 5.5 * r + -6.5 * i + 4 * e)
                    }
                }
                e._mTween || (e._mTween = {
                    top: {},
                    left: {}
                });
                var f, h, r = r || {},
                    m = r.onStart || function() {},
                    p = r.onUpdate || function() {},
                    g = r.onComplete || function() {},
                    v = J(),
                    x = 0,
                    _ = e.offsetTop,
                    w = e.style,
                    S = e._mTween[t];
                "left" === t && (_ = e.offsetLeft);
                var b = o - _;
                S.stop = 0, "none" !== i && d(), c()
            },
            J = function() {
                return window.performance && window.performance.now ? window.performance.now() : window.performance && window.performance.webkitNow ? window.performance.webkitNow() : Date.now ? Date.now() : (new Date).getTime()
            },
            K = function() {
                var e = this;
                e._mTween || (e._mTween = {
                    top: {},
                    left: {}
                });
                for (var t = ["top", "left"], o = 0; o < t.length; o++) {
                    var a = t[o];
                    e._mTween[a].id && (window.requestAnimationFrame ? window.cancelAnimationFrame(e._mTween[a].id) : clearTimeout(e._mTween[a].id), e._mTween[a].id = null, e._mTween[a].stop = 1)
                }
            },
            Z = function(e, t) {
                try {
                    delete e[t]
                } catch (o) {
                    e[t] = null
                }
            },
            $ = function(e) {
                return !(e.which && 1 !== e.which)
            },
            ee = function(e) {
                var t = e.originalEvent.pointerType;
                return !(t && "touch" !== t && 2 !== t)
            },
            te = function(e) {
                return !isNaN(parseFloat(e)) && isFinite(e)
            },
            oe = function(e) {
                var t = e.parents(".mCSB_container");
                return [e.offset().top - t.offset().top, e.offset().left - t.offset().left]
            };
        e.fn[o] = function(t) {
            return u[t] ? u[t].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof t && t ? void e.error("Method " + t + " does not exist") : u.init.apply(this, arguments)
        }, e[o] = function(t) {
            return u[t] ? u[t].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof t && t ? void e.error("Method " + t + " does not exist") : u.init.apply(this, arguments)
        }, e[o].defaults = i, window[o] = !0, e(window).load(function() {
            e(n)[o](), e.extend(e.expr[":"], {
                mcsInView: e.expr[":"].mcsInView || function(t) {

                    var o, a, n = e(t),
                        i = n.parents(".mCSB_container");
                    if (i.length) return o = i.parent(), a = [i[0].offsetTop, i[0].offsetLeft], a[0] + oe(n)[0] >= 0 && a[0] + oe(n)[0] < o.height() - n.outerHeight(!1) && a[1] + oe(n)[1] >= 0 && a[1] + oe(n)[1] < o.width() - n.outerWidth(!1)
                },
                mcsOverflow: e.expr[":"].mcsOverflow || function(t) {
                    var o = e(t).data(a);
                    if (o) return o.overflowed[0] || o.overflowed[1]
                }
            })
        })
    })
});/*END*/
/*Start/home/release/www/blog_180530_1650/wp-content/themes/edu-hiran/js/owl.carousel.js*/
/**
 * Owl Carousel v2.2.0
 * Copyright 2013-2016 David Deutsch
 * Licensed under MIT (https://github.com/OwlCarousel2/OwlCarousel2/blob/master/LICENSE)
 */
/**
 * Owl carousel
 * @version 2.1.6
 * @author Bartosz Wojciechowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 * @todo Lazy Load Icon
 * @todo prevent animationend bubling
 * @todo itemsScaleUp
 * @todo Test Zepto
 * @todo stagePadding calculate wrong active classes
 */
;(function($, window, document, undefined) {

	/**
	 * Creates a carousel.
	 * @class The Owl Carousel.
	 * @public
	 * @param {HTMLElement|jQuery} element - The element to create the carousel for.
	 * @param {Object} [options] - The options
	 */
	function Owl(element, options) {

		/**
		 * Current settings for the carousel.
		 * @public
		 */
		this.settings = null;

		/**
		 * Current options set by the caller including defaults.
		 * @public
		 */
		this.options = $.extend({}, Owl.Defaults, options);

		/**
		 * Plugin element.
		 * @public
		 */
		this.$element = $(element);

		/**
		 * Proxied event handlers.
		 * @protected
		 */
		this._handlers = {};

		/**
		 * References to the running plugins of this carousel.
		 * @protected
		 */
		this._plugins = {};

		/**
		 * Currently suppressed events to prevent them from beeing retriggered.
		 * @protected
		 */
		this._supress = {};

		/**
		 * Absolute current position.
		 * @protected
		 */
		this._current = null;

		/**
		 * Animation speed in milliseconds.
		 * @protected
		 */
		this._speed = null;

		/**
		 * Coordinates of all items in pixel.
		 * @todo The name of this member is missleading.
		 * @protected
		 */
		this._coordinates = [];

		/**
		 * Current breakpoint.
		 * @todo Real media queries would be nice.
		 * @protected
		 */
		this._breakpoint = null;

		/**
		 * Current width of the plugin element.
		 */
		this._width = null;

		/**
		 * All real items.
		 * @protected
		 */
		this._items = [];

		/**
		 * All cloned items.
		 * @protected
		 */
		this._clones = [];

		/**
		 * Merge values of all items.
		 * @todo Maybe this could be part of a plugin.
		 * @protected
		 */
		this._mergers = [];

		/**
		 * Widths of all items.
		 */
		this._widths = [];

		/**
		 * Invalidated parts within the update process.
		 * @protected
		 */
		this._invalidated = {};

		/**
		 * Ordered list of workers for the update process.
		 * @protected
		 */
		this._pipe = [];

		/**
		 * Current state information for the drag operation.
		 * @todo #261
		 * @protected
		 */
		this._drag = {
			time: null,
			target: null,
			pointer: null,
			stage: {
				start: null,
				current: null
			},
			direction: null
		};

		/**
		 * Current state information and their tags.
		 * @type {Object}
		 * @protected
		 */
		this._states = {
			current: {},
			tags: {
				'initializing': [ 'busy' ],
				'animating': [ 'busy' ],
				'dragging': [ 'interacting' ]
			}
		};

		$.each([ 'onResize', 'onThrottledResize' ], $.proxy(function(i, handler) {
			this._handlers[handler] = $.proxy(this[handler], this);
		}, this));

		$.each(Owl.Plugins, $.proxy(function(key, plugin) {
			this._plugins[key.charAt(0).toLowerCase() + key.slice(1)]
				= new plugin(this);
		}, this));

		$.each(Owl.Workers, $.proxy(function(priority, worker) {
			this._pipe.push({
				'filter': worker.filter,
				'run': $.proxy(worker.run, this)
			});
		}, this));

		this.setup();
		this.initialize();
	}

	/**
	 * Default options for the carousel.
	 * @public
	 */
	Owl.Defaults = {
		items: 3,
		loop: false,
		center: false,
		rewind: false,

		mouseDrag: true,
		touchDrag: true,
		pullDrag: true,
		freeDrag: false,

		margin: 0,
		stagePadding: 0,

		merge: false,
		mergeFit: true,
		autoWidth: false,

		startPosition: 0,
		rtl: false,

		smartSpeed: 250,
		fluidSpeed: false,
		dragEndSpeed: false,

		responsive: {},
		responsiveRefreshRate: 200,
		responsiveBaseElement: window,

		fallbackEasing: 'swing',

		info: false,

		nestedItemSelector: false,
		itemElement: 'div',
		stageElement: 'div',

		refreshClass: 'owl-refresh',
		loadedClass: 'owl-loaded',
		loadingClass: 'owl-loading',
		rtlClass: 'owl-rtl',
		responsiveClass: 'owl-responsive',
		dragClass: 'owl-drag',
		itemClass: 'owl-item',
		stageClass: 'owl-stage',
		stageOuterClass: 'owl-stage-outer',
		grabClass: 'owl-grab'
	};

	/**
	 * Enumeration for width.
	 * @public
	 * @readonly
	 * @enum {String}
	 */
	Owl.Width = {
		Default: 'default',
		Inner: 'inner',
		Outer: 'outer'
	};

	/**
	 * Enumeration for types.
	 * @public
	 * @readonly
	 * @enum {String}
	 */
	Owl.Type = {
		Event: 'event',
		State: 'state'
	};

	/**
	 * Contains all registered plugins.
	 * @public
	 */
	Owl.Plugins = {};

	/**
	 * List of workers involved in the update process.
	 */
	Owl.Workers = [ {
		filter: [ 'width', 'settings' ],
		run: function() {
			this._width = this.$element.width();
		}
	}, {
		filter: [ 'width', 'items', 'settings' ],
		run: function(cache) {
			cache.current = this._items && this._items[this.relative(this._current)];
		}
	}, {
		filter: [ 'items', 'settings' ],
		run: function() {
			this.$stage.children('.cloned').remove();
		}
	}, {
		filter: [ 'width', 'items', 'settings' ],
		run: function(cache) {
			var margin = this.settings.margin || '',
				grid = !this.settings.autoWidth,
				rtl = this.settings.rtl,
				css = {
					'width': 'auto',
					'margin-left': rtl ? margin : '',
					'margin-right': rtl ? '' : margin
				};

			!grid && this.$stage.children().css(css);

			cache.css = css;
		}
	}, {
		filter: [ 'width', 'items', 'settings' ],
		run: function(cache) {
			var width = (this.width() / this.settings.items).toFixed(3) - this.settings.margin,
				merge = null,
				iterator = this._items.length,
				grid = !this.settings.autoWidth,
				widths = [];

			cache.items = {
				merge: false,
				width: width
			};

			while (iterator--) {
				merge = this._mergers[iterator];
				merge = this.settings.mergeFit && Math.min(merge, this.settings.items) || merge;

				cache.items.merge = merge > 1 || cache.items.merge;

				widths[iterator] = !grid ? this._items[iterator].width() : width * merge;
			}

			this._widths = widths;
		}
	}, {
		filter: [ 'items', 'settings' ],
		run: function() {
			var clones = [],
				items = this._items,
				settings = this.settings,
				view = Math.max(settings.items * 2, 4),
				size = Math.ceil(items.length / 2) * 2,
				repeat = settings.loop && items.length ? settings.rewind ? view : Math.max(view, size) : 0,
				append = '',
				prepend = '';

			repeat /= 2;

			while (repeat--) {
				clones.push(this.normalize(clones.length / 2, true));
				append = append + items[clones[clones.length - 1]][0].outerHTML;
				clones.push(this.normalize(items.length - 1 - (clones.length - 1) / 2, true));
				prepend = items[clones[clones.length - 1]][0].outerHTML + prepend;
			}

			this._clones = clones;

			$(append).addClass('cloned').appendTo(this.$stage);
			$(prepend).addClass('cloned').prependTo(this.$stage);
		}
	}, {
		filter: [ 'width', 'items', 'settings' ],
		run: function() {
			var rtl = this.settings.rtl ? 1 : -1,
				size = this._clones.length + this._items.length,
				iterator = -1,
				previous = 0,
				current = 0,
				coordinates = [];

			while (++iterator < size) {
				previous = coordinates[iterator - 1] || 0;
				current = this._widths[this.relative(iterator)] + this.settings.margin;
				coordinates.push(previous + current * rtl);
			}

			this._coordinates = coordinates;
		}
	}, {
		filter: [ 'width', 'items', 'settings' ],
		run: function() {
			var padding = this.settings.stagePadding,
				coordinates = this._coordinates,
				css = {
					'width': Math.ceil(Math.abs(coordinates[coordinates.length - 1])) + padding * 2,
					'padding-left': padding || '',
					'padding-right': padding || ''
				};

			this.$stage.css(css);
		}
	}, {
		filter: [ 'width', 'items', 'settings' ],
		run: function(cache) {
			var iterator = this._coordinates.length,
				grid = !this.settings.autoWidth,
				items = this.$stage.children();

			if (grid && cache.items.merge) {
				while (iterator--) {
					cache.css.width = this._widths[this.relative(iterator)];
					items.eq(iterator).css(cache.css);
				}
			} else if (grid) {
				cache.css.width = cache.items.width;
				items.css(cache.css);
			}
		}
	}, {
		filter: [ 'items' ],
		run: function() {
			this._coordinates.length < 1 && this.$stage.removeAttr('style');
		}
	}, {
		filter: [ 'width', 'items', 'settings' ],
		run: function(cache) {
			cache.current = cache.current ? this.$stage.children().index(cache.current) : 0;
			cache.current = Math.max(this.minimum(), Math.min(this.maximum(), cache.current));
			this.reset(cache.current);
		}
	}, {
		filter: [ 'position' ],
		run: function() {
			this.animate(this.coordinates(this._current));
		}
	}, {
		filter: [ 'width', 'position', 'items', 'settings' ],
		run: function() {
			var rtl = this.settings.rtl ? 1 : -1,
				padding = this.settings.stagePadding * 2,
				begin = this.coordinates(this.current()) + padding,
				end = begin + this.width() * rtl,
				inner, outer, matches = [], i, n;

			for (i = 0, n = this._coordinates.length; i < n; i++) {
				inner = this._coordinates[i - 1] || 0;
				outer = Math.abs(this._coordinates[i]) + padding * rtl;

				if ((this.op(inner, '<=', begin) && (this.op(inner, '>', end)))
					|| (this.op(outer, '<', begin) && this.op(outer, '>', end))) {
					matches.push(i);
				}
			}

			this.$stage.children('.active').removeClass('active');
			this.$stage.children(':eq(' + matches.join('), :eq(') + ')').addClass('active');

			if (this.settings.center) {
				this.$stage.children('.center').removeClass('center');
				this.$stage.children().eq(this.current()).addClass('center');
			}
		}
	} ];

	/**
	 * Initializes the carousel.
	 * @protected
	 */
	Owl.prototype.initialize = function() {
		this.enter('initializing');
		this.trigger('initialize');

		this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl);

		if (this.settings.autoWidth && !this.is('pre-loading')) {
			var imgs, nestedSelector, width;
			imgs = this.$element.find('img');
			nestedSelector = this.settings.nestedItemSelector ? '.' + this.settings.nestedItemSelector : undefined;
			width = this.$element.children(nestedSelector).width();

			if (imgs.length && width <= 0) {
				this.preloadAutoWidthImages(imgs);
			}
		}

		this.$element.addClass(this.options.loadingClass);

		// create stage
		this.$stage = $('<' + this.settings.stageElement + ' class="' + this.settings.stageClass + '"/>')
			.wrap('<div class="' + this.settings.stageOuterClass + '"/>');

		// append stage
		this.$element.append(this.$stage.parent());

		// append content
		this.replace(this.$element.children().not(this.$stage.parent()));

		// check visibility
		if (this.$element.is(':visible')) {
			// update view
			this.refresh();
		} else {
			// invalidate width
			this.invalidate('width');
		}

		this.$element
			.removeClass(this.options.loadingClass)
			.addClass(this.options.loadedClass);

		// register event handlers
		this.registerEventHandlers();

		this.leave('initializing');
		this.trigger('initialized');
	};

	/**
	 * Setups the current settings.
	 * @todo Remove responsive classes. Why should adaptive designs be brought into IE8?
	 * @todo Support for media queries by using `matchMedia` would be nice.
	 * @public
	 */
	Owl.prototype.setup = function() {
		var viewport = this.viewport(),
			overwrites = this.options.responsive,
			match = -1,
			settings = null;

		if (!overwrites) {
			settings = $.extend({}, this.options);
		} else {
			$.each(overwrites, function(breakpoint) {
				if (breakpoint <= viewport && breakpoint > match) {
					match = Number(breakpoint);
				}
			});

			settings = $.extend({}, this.options, overwrites[match]);
			if (typeof settings.stagePadding === 'function') {
				settings.stagePadding = settings.stagePadding();
			}
			delete settings.responsive;

			// responsive class
			if (settings.responsiveClass) {
				this.$element.attr('class',
					this.$element.attr('class').replace(new RegExp('(' + this.options.responsiveClass + '-)\\S+\\s', 'g'), '$1' + match)
				);
			}
		}

		this.trigger('change', { property: { name: 'settings', value: settings } });
		this._breakpoint = match;
		this.settings = settings;
		this.invalidate('settings');
		this.trigger('changed', { property: { name: 'settings', value: this.settings } });
	};

	/**
	 * Updates option logic if necessery.
	 * @protected
	 */
	Owl.prototype.optionsLogic = function() {
		if (this.settings.autoWidth) {
			this.settings.stagePadding = false;
			this.settings.merge = false;
		}
	};

	/**
	 * Prepares an item before add.
	 * @todo Rename event parameter `content` to `item`.
	 * @protected
	 * @returns {jQuery|HTMLElement} - The item container.
	 */
	Owl.prototype.prepare = function(item) {
		var event = this.trigger('prepare', { content: item });

		if (!event.data) {
			event.data = $('<' + this.settings.itemElement + '/>')
				.addClass(this.options.itemClass).append(item)
		}

		this.trigger('prepared', { content: event.data });

		return event.data;
	};

	/**
	 * Updates the view.
	 * @public
	 */
	Owl.prototype.update = function() {
		var i = 0,
			n = this._pipe.length,
			filter = $.proxy(function(p) { return this[p] }, this._invalidated),
			cache = {};

		while (i < n) {
			if (this._invalidated.all || $.grep(this._pipe[i].filter, filter).length > 0) {
				this._pipe[i].run(cache);
			}
			i++;
		}

		this._invalidated = {};

		!this.is('valid') && this.enter('valid');
	};

	/**
	 * Gets the width of the view.
	 * @public
	 * @param {Owl.Width} [dimension=Owl.Width.Default] - The dimension to return.
	 * @returns {Number} - The width of the view in pixel.
	 */
	Owl.prototype.width = function(dimension) {
		dimension = dimension || Owl.Width.Default;
		switch (dimension) {
			case Owl.Width.Inner:
			case Owl.Width.Outer:
				return this._width;
			default:
				return this._width - this.settings.stagePadding * 2 + this.settings.margin;
		}
	};

	/**
	 * Refreshes the carousel primarily for adaptive purposes.
	 * @public
	 */
	Owl.prototype.refresh = function() {
		this.enter('refreshing');
		this.trigger('refresh');

		this.setup();

		this.optionsLogic();

		this.$element.addClass(this.options.refreshClass);

		this.update();

		this.$element.removeClass(this.options.refreshClass);

		this.leave('refreshing');
		this.trigger('refreshed');
	};

	/**
	 * Checks window `resize` event.
	 * @protected
	 */
	Owl.prototype.onThrottledResize = function() {
		window.clearTimeout(this.resizeTimer);
		this.resizeTimer = window.setTimeout(this._handlers.onResize, this.settings.responsiveRefreshRate);
	};

	/**
	 * Checks window `resize` event.
	 * @protected
	 */
	Owl.prototype.onResize = function() {
		if (!this._items.length) {
			return false;
		}

		if (this._width === this.$element.width()) {
			return false;
		}

		if (!this.$element.is(':visible')) {
			return false;
		}

		this.enter('resizing');

		if (this.trigger('resize').isDefaultPrevented()) {
			this.leave('resizing');
			return false;
		}

		this.invalidate('width');

		this.refresh();

		this.leave('resizing');
		this.trigger('resized');
	};

	/**
	 * Registers event handlers.
	 * @todo Check `msPointerEnabled`
	 * @todo #261
	 * @protected
	 */
	Owl.prototype.registerEventHandlers = function() {
		if ($.support.transition) {
			this.$stage.on($.support.transition.end + '.owl.core', $.proxy(this.onTransitionEnd, this));
		}

		if (this.settings.responsive !== false) {
			this.on(window, 'resize', this._handlers.onThrottledResize);
		}

		if (this.settings.mouseDrag) {
			this.$element.addClass(this.options.dragClass);
			this.$stage.on('mousedown.owl.core', $.proxy(this.onDragStart, this));
			this.$stage.on('dragstart.owl.core selectstart.owl.core', function() { return false });
		}

		if (this.settings.touchDrag){
			this.$stage.on('touchstart.owl.core', $.proxy(this.onDragStart, this));
			this.$stage.on('touchcancel.owl.core', $.proxy(this.onDragEnd, this));
		}
	};

	/**
	 * Handles `touchstart` and `mousedown` events.
	 * @todo Horizontal swipe threshold as option
	 * @todo #261
	 * @protected
	 * @param {Event} event - The event arguments.
	 */
	Owl.prototype.onDragStart = function(event) {
		var stage = null;

		if (event.which === 3) {
			return;
		}

		if ($.support.transform) {
			stage = this.$stage.css('transform').replace(/.*\(|\)| /g, '').split(',');
			stage = {
				x: stage[stage.length === 16 ? 12 : 4],
				y: stage[stage.length === 16 ? 13 : 5]
			};
		} else {
			stage = this.$stage.position();
			stage = {
				x: this.settings.rtl ?
					stage.left + this.$stage.width() - this.width() + this.settings.margin :
					stage.left,
				y: stage.top
			};
		}

		if (this.is('animating')) {
			$.support.transform ? this.animate(stage.x) : this.$stage.stop()
			this.invalidate('position');
		}

		this.$element.toggleClass(this.options.grabClass, event.type === 'mousedown');

		this.speed(0);

		this._drag.time = new Date().getTime();
		this._drag.target = $(event.target);
		this._drag.stage.start = stage;
		this._drag.stage.current = stage;
		this._drag.pointer = this.pointer(event);

		$(document).on('mouseup.owl.core touchend.owl.core', $.proxy(this.onDragEnd, this));

		$(document).one('mousemove.owl.core touchmove.owl.core', $.proxy(function(event) {
			var delta = this.difference(this._drag.pointer, this.pointer(event));

			$(document).on('mousemove.owl.core touchmove.owl.core', $.proxy(this.onDragMove, this));

			if (Math.abs(delta.x) < Math.abs(delta.y) && this.is('valid')) {
				return;
			}

			event.preventDefault();

			this.enter('dragging');
			this.trigger('drag');
		}, this));
	};

	/**
	 * Handles the `touchmove` and `mousemove` events.
	 * @todo #261
	 * @protected
	 * @param {Event} event - The event arguments.
	 */
	Owl.prototype.onDragMove = function(event) {
		var minimum = null,
			maximum = null,
			pull = null,
			delta = this.difference(this._drag.pointer, this.pointer(event)),
			stage = this.difference(this._drag.stage.start, delta);

		if (!this.is('dragging')) {
			return;
		}

		event.preventDefault();

		if (this.settings.loop) {
			minimum = this.coordinates(this.minimum());
			maximum = this.coordinates(this.maximum() + 1) - minimum;
			stage.x = (((stage.x - minimum) % maximum + maximum) % maximum) + minimum;
		} else {
			minimum = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum());
			maximum = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum());
			pull = this.settings.pullDrag ? -1 * delta.x / 5 : 0;
			stage.x = Math.max(Math.min(stage.x, minimum + pull), maximum + pull);
		}

		this._drag.stage.current = stage;

		this.animate(stage.x);
	};

	/**
	 * Handles the `touchend` and `mouseup` events.
	 * @todo #261
	 * @todo Threshold for click event
	 * @protected
	 * @param {Event} event - The event arguments.
	 */
	Owl.prototype.onDragEnd = function(event) {
		var delta = this.difference(this._drag.pointer, this.pointer(event)),
			stage = this._drag.stage.current,
			direction = delta.x > 0 ^ this.settings.rtl ? 'left' : 'right';

		$(document).off('.owl.core');

		this.$element.removeClass(this.options.grabClass);

		if (delta.x !== 0 && this.is('dragging') || !this.is('valid')) {
			this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed);
			this.current(this.closest(stage.x, delta.x !== 0 ? direction : this._drag.direction));
			this.invalidate('position');
			this.update();

			this._drag.direction = direction;

			if (Math.abs(delta.x) > 3 || new Date().getTime() - this._drag.time > 300) {
				this._drag.target.one('click.owl.core', function() { return false; });
			}
		}

		if (!this.is('dragging')) {
			return;
		}

		this.leave('dragging');
		this.trigger('dragged');
	};

	/**
	 * Gets absolute position of the closest item for a coordinate.
	 * @todo Setting `freeDrag` makes `closest` not reusable. See #165.
	 * @protected
	 * @param {Number} coordinate - The coordinate in pixel.
	 * @param {String} direction - The direction to check for the closest item. Ether `left` or `right`.
	 * @return {Number} - The absolute position of the closest item.
	 */
	Owl.prototype.closest = function(coordinate, direction) {
		var position = -1,
			pull = 30,
			width = this.width(),
			coordinates = this.coordinates();

		if (!this.settings.freeDrag) {
			// check closest item
			$.each(coordinates, $.proxy(function(index, value) {
				// on a left pull, check on current index
				if (direction === 'left' && coordinate > value - pull && coordinate < value + pull) {
					position = index;
				// on a right pull, check on previous index
				// to do so, subtract width from value and set position = index + 1
				} else if (direction === 'right' && coordinate > value - width - pull && coordinate < value - width + pull) {
					position = index + 1;
				} else if (this.op(coordinate, '<', value)
					&& this.op(coordinate, '>', coordinates[index + 1] || value - width)) {
					position = direction === 'left' ? index + 1 : index;
				}
				return position === -1;
			}, this));
		}

		if (!this.settings.loop) {
			// non loop boundries
			if (this.op(coordinate, '>', coordinates[this.minimum()])) {
				position = coordinate = this.minimum();
			} else if (this.op(coordinate, '<', coordinates[this.maximum()])) {
				position = coordinate = this.maximum();
			}
		}

		return position;
	};

	/**
	 * Animates the stage.
	 * @todo #270
	 * @public
	 * @param {Number} coordinate - The coordinate in pixels.
	 */
	Owl.prototype.animate = function(coordinate) {
		var animate = this.speed() > 0;

		this.is('animating') && this.onTransitionEnd();

		if (animate) {
			this.enter('animating');
			this.trigger('translate');
		}

		if ($.support.transform3d && $.support.transition) {
			this.$stage.css({
				transform: 'translate3d(' + coordinate + 'px,0px,0px)',
				transition: (this.speed() / 1000) + 's'
			});
		} else if (animate) {
			this.$stage.animate({
				left: coordinate + 'px'
			}, this.speed(), this.settings.fallbackEasing, $.proxy(this.onTransitionEnd, this));
		} else {
			this.$stage.css({
				left: coordinate + 'px'
			});
		}
	};

	/**
	 * Checks whether the carousel is in a specific state or not.
	 * @param {String} state - The state to check.
	 * @returns {Boolean} - The flag which indicates if the carousel is busy.
	 */
	Owl.prototype.is = function(state) {
		return this._states.current[state] && this._states.current[state] > 0;
	};

	/**
	 * Sets the absolute position of the current item.
	 * @public
	 * @param {Number} [position] - The new absolute position or nothing to leave it unchanged.
	 * @returns {Number} - The absolute position of the current item.
	 */
	Owl.prototype.current = function(position) {
		if (position === undefined) {
			return this._current;
		}

		if (this._items.length === 0) {
			return undefined;
		}

		position = this.normalize(position);

		if (this._current !== position) {
			var event = this.trigger('change', { property: { name: 'position', value: position } });

			if (event.data !== undefined) {
				position = this.normalize(event.data);
			}

			this._current = position;

			this.invalidate('position');

			this.trigger('changed', { property: { name: 'position', value: this._current } });
		}

		return this._current;
	};

	/**
	 * Invalidates the given part of the update routine.
	 * @param {String} [part] - The part to invalidate.
	 * @returns {Array.<String>} - The invalidated parts.
	 */
	Owl.prototype.invalidate = function(part) {
		if ($.type(part) === 'string') {
			this._invalidated[part] = true;
			this.is('valid') && this.leave('valid');
		}
		return $.map(this._invalidated, function(v, i) { return i });
	};

	/**
	 * Resets the absolute position of the current item.
	 * @public
	 * @param {Number} position - The absolute position of the new item.
	 */
	Owl.prototype.reset = function(position) {
		position = this.normalize(position);

		if (position === undefined) {
			return;
		}

		this._speed = 0;
		this._current = position;

		this.suppress([ 'translate', 'translated' ]);

		this.animate(this.coordinates(position));

		this.release([ 'translate', 'translated' ]);
	};

	/**
	 * Normalizes an absolute or a relative position of an item.
	 * @public
	 * @param {Number} position - The absolute or relative position to normalize.
	 * @param {Boolean} [relative=false] - Whether the given position is relative or not.
	 * @returns {Number} - The normalized position.
	 */
	Owl.prototype.normalize = function(position, relative) {
		var n = this._items.length,
			m = relative ? 0 : this._clones.length;

		if (!this.isNumeric(position) || n < 1) {
			position = undefined;
		} else if (position < 0 || position >= n + m) {
			position = ((position - m / 2) % n + n) % n + m / 2;
		}

		return position;
	};

	/**
	 * Converts an absolute position of an item into a relative one.
	 * @public
	 * @param {Number} position - The absolute position to convert.
	 * @returns {Number} - The converted position.
	 */
	Owl.prototype.relative = function(position) {
		position -= this._clones.length / 2;
		return this.normalize(position, true);
	};

	/**
	 * Gets the maximum position for the current item.
	 * @public
	 * @param {Boolean} [relative=false] - Whether to return an absolute position or a relative position.
	 * @returns {Number}
	 */
	Owl.prototype.maximum = function(relative) {
		var settings = this.settings,
			maximum = this._coordinates.length,
			iterator,
			reciprocalItemsWidth,
			elementWidth;

		if (settings.loop) {
			maximum = this._clones.length / 2 + this._items.length - 1;
		} else if (settings.autoWidth || settings.merge) {
			iterator = this._items.length;
			reciprocalItemsWidth = this._items[--iterator].width();
			elementWidth = this.$element.width();
			while (iterator--) {
				reciprocalItemsWidth += this._items[iterator].width() + this.settings.margin;
				if (reciprocalItemsWidth > elementWidth) {
					break;
				}
			}
			maximum = iterator + 1;
		} else if (settings.center) {
			maximum = this._items.length - 1;
		} else {
			maximum = this._items.length - settings.items;
		}

		if (relative) {
			maximum -= this._clones.length / 2;
		}

		return Math.max(maximum, 0);
	};

	/**
	 * Gets the minimum position for the current item.
	 * @public
	 * @param {Boolean} [relative=false] - Whether to return an absolute position or a relative position.
	 * @returns {Number}
	 */
	Owl.prototype.minimum = function(relative) {
		return relative ? 0 : this._clones.length / 2;
	};

	/**
	 * Gets an item at the specified relative position.
	 * @public
	 * @param {Number} [position] - The relative position of the item.
	 * @return {jQuery|Array.<jQuery>} - The item at the given position or all items if no position was given.
	 */
	Owl.prototype.items = function(position) {
		if (position === undefined) {
			return this._items.slice();
		}

		position = this.normalize(position, true);
		return this._items[position];
	};

	/**
	 * Gets an item at the specified relative position.
	 * @public
	 * @param {Number} [position] - The relative position of the item.
	 * @return {jQuery|Array.<jQuery>} - The item at the given position or all items if no position was given.
	 */
	Owl.prototype.mergers = function(position) {
		if (position === undefined) {
			return this._mergers.slice();
		}

		position = this.normalize(position, true);
		return this._mergers[position];
	};

	/**
	 * Gets the absolute positions of clones for an item.
	 * @public
	 * @param {Number} [position] - The relative position of the item.
	 * @returns {Array.<Number>} - The absolute positions of clones for the item or all if no position was given.
	 */
	Owl.prototype.clones = function(position) {
		var odd = this._clones.length / 2,
			even = odd + this._items.length,
			map = function(index) { return index % 2 === 0 ? even + index / 2 : odd - (index + 1) / 2 };

		if (position === undefined) {
			return $.map(this._clones, function(v, i) { return map(i) });
		}

		return $.map(this._clones, function(v, i) { return v === position ? map(i) : null });
	};

	/**
	 * Sets the current animation speed.
	 * @public
	 * @param {Number} [speed] - The animation speed in milliseconds or nothing to leave it unchanged.
	 * @returns {Number} - The current animation speed in milliseconds.
	 */
	Owl.prototype.speed = function(speed) {
		if (speed !== undefined) {
			this._speed = speed;
		}

		return this._speed;
	};

	/**
	 * Gets the coordinate of an item.
	 * @todo The name of this method is missleanding.
	 * @public
	 * @param {Number} position - The absolute position of the item within `minimum()` and `maximum()`.
	 * @returns {Number|Array.<Number>} - The coordinate of the item in pixel or all coordinates.
	 */
	Owl.prototype.coordinates = function(position) {
		var multiplier = 1,
			newPosition = position - 1,
			coordinate;

		if (position === undefined) {
			return $.map(this._coordinates, $.proxy(function(coordinate, index) {
				return this.coordinates(index);
			}, this));
		}

		if (this.settings.center) {
			if (this.settings.rtl) {
				multiplier = -1;
				newPosition = position + 1;
			}

			coordinate = this._coordinates[position];
			coordinate += (this.width() - coordinate + (this._coordinates[newPosition] || 0)) / 2 * multiplier;
		} else {
			coordinate = this._coordinates[newPosition] || 0;
		}

		coordinate = Math.ceil(coordinate);

		return coordinate;
	};

	/**
	 * Calculates the speed for a translation.
	 * @protected
	 * @param {Number} from - The absolute position of the start item.
	 * @param {Number} to - The absolute position of the target item.
	 * @param {Number} [factor=undefined] - The time factor in milliseconds.
	 * @returns {Number} - The time in milliseconds for the translation.
	 */
	Owl.prototype.duration = function(from, to, factor) {
		if (factor === 0) {
			return 0;
		}

		return Math.min(Math.max(Math.abs(to - from), 1), 6) * Math.abs((factor || this.settings.smartSpeed));
	};

	/**
	 * Slides to the specified item.
	 * @public
	 * @param {Number} position - The position of the item.
	 * @param {Number} [speed] - The time in milliseconds for the transition.
	 */
	Owl.prototype.to = function(position, speed) {
		var current = this.current(),
			revert = null,
			distance = position - this.relative(current),
			direction = (distance > 0) - (distance < 0),
			items = this._items.length,
			minimum = this.minimum(),
			maximum = this.maximum();

		if (this.settings.loop) {
			if (!this.settings.rewind && Math.abs(distance) > items / 2) {
				distance += direction * -1 * items;
			}

			position = current + distance;
			revert = ((position - minimum) % items + items) % items + minimum;

			if (revert !== position && revert - distance <= maximum && revert - distance > 0) {
				current = revert - distance;
				position = revert;
				this.reset(current);
			}
		} else if (this.settings.rewind) {
			maximum += 1;
			position = (position % maximum + maximum) % maximum;
		} else {
			position = Math.max(minimum, Math.min(maximum, position));
		}

		this.speed(this.duration(current, position, speed));
		this.current(position);

		if (this.$element.is(':visible')) {
			this.update();
		}
	};

	/**
	 * Slides to the next item.
	 * @public
	 * @param {Number} [speed] - The time in milliseconds for the transition.
	 */
	Owl.prototype.next = function(speed) {
		speed = speed || false;
		this.to(this.relative(this.current()) + 1, speed);
	};

	/**
	 * Slides to the previous item.
	 * @public
	 * @param {Number} [speed] - The time in milliseconds for the transition.
	 */
	Owl.prototype.prev = function(speed) {
		speed = speed || false;
		this.to(this.relative(this.current()) - 1, speed);
	};

	/**
	 * Handles the end of an animation.
	 * @protected
	 * @param {Event} event - The event arguments.
	 */
	Owl.prototype.onTransitionEnd = function(event) {

		// if css2 animation then event object is undefined
		if (event !== undefined) {
			event.stopPropagation();

			// Catch only owl-stage transitionEnd event
			if ((event.target || event.srcElement || event.originalTarget) !== this.$stage.get(0)) {
				return false;
			}
		}

		this.leave('animating');
		this.trigger('translated');
	};

	/**
	 * Gets viewport width.
	 * @protected
	 * @return {Number} - The width in pixel.
	 */
	Owl.prototype.viewport = function() {
		var width;
		if (this.options.responsiveBaseElement !== window) {
			width = $(this.options.responsiveBaseElement).width();
		} else if (window.innerWidth) {
			width = window.innerWidth;
		} else if (document.documentElement && document.documentElement.clientWidth) {
			width = document.documentElement.clientWidth;
		} else {
			throw 'Can not detect viewport width.';
		}
		return width;
	};

	/**
	 * Replaces the current content.
	 * @public
	 * @param {HTMLElement|jQuery|String} content - The new content.
	 */
	Owl.prototype.replace = function(content) {
		this.$stage.empty();
		this._items = [];

		if (content) {
			content = (content instanceof jQuery) ? content : $(content);
		}

		if (this.settings.nestedItemSelector) {
			content = content.find('.' + this.settings.nestedItemSelector);
		}

		content.filter(function() {
			return this.nodeType === 1;
		}).each($.proxy(function(index, item) {
			item = this.prepare(item);
			this.$stage.append(item);
			this._items.push(item);
			this._mergers.push(item.find('[data-merge]').addBack('[data-merge]').attr('data-merge') * 1 || 1);
		}, this));

		this.reset(this.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0);

		this.invalidate('items');
	};

	/**
	 * Adds an item.
	 * @todo Use `item` instead of `content` for the event arguments.
	 * @public
	 * @param {HTMLElement|jQuery|String} content - The item content to add.
	 * @param {Number} [position] - The relative position at which to insert the item otherwise the item will be added to the end.
	 */
	Owl.prototype.add = function(content, position) {
		var current = this.relative(this._current);

		position = position === undefined ? this._items.length : this.normalize(position, true);
		content = content instanceof jQuery ? content : $(content);

		this.trigger('add', { content: content, position: position });

		content = this.prepare(content);

		if (this._items.length === 0 || position === this._items.length) {
			this._items.length === 0 && this.$stage.append(content);
			this._items.length !== 0 && this._items[position - 1].after(content);
			this._items.push(content);
			this._mergers.push(content.find('[data-merge]').addBack('[data-merge]').attr('data-merge') * 1 || 1);
		} else {
			this._items[position].before(content);
			this._items.splice(position, 0, content);
			this._mergers.splice(position, 0, content.find('[data-merge]').addBack('[data-merge]').attr('data-merge') * 1 || 1);
		}

		this._items[current] && this.reset(this._items[current].index());

		this.invalidate('items');

		this.trigger('added', { content: content, position: position });
	};

	/**
	 * Removes an item by its position.
	 * @todo Use `item` instead of `content` for the event arguments.
	 * @public
	 * @param {Number} position - The relative position of the item to remove.
	 */
	Owl.prototype.remove = function(position) {
		position = this.normalize(position, true);

		if (position === undefined) {
			return;
		}

		this.trigger('remove', { content: this._items[position], position: position });

		this._items[position].remove();
		this._items.splice(position, 1);
		this._mergers.splice(position, 1);

		this.invalidate('items');

		this.trigger('removed', { content: null, position: position });
	};

	/**
	 * Preloads images with auto width.
	 * @todo Replace by a more generic approach
	 * @protected
	 */
	Owl.prototype.preloadAutoWidthImages = function(images) {
		images.each($.proxy(function(i, element) {
			this.enter('pre-loading');
			element = $(element);
			$(new Image()).one('load', $.proxy(function(e) {
				element.attr('src', e.target.src);
				element.css('opacity', 1);
				this.leave('pre-loading');
				!this.is('pre-loading') && !this.is('initializing') && this.refresh();
			}, this)).attr('src', element.attr('src') || element.attr('data-src') || element.attr('data-src-retina'));
		}, this));
	};

	/**
	 * Destroys the carousel.
	 * @public
	 */
	Owl.prototype.destroy = function() {

		this.$element.off('.owl.core');
		this.$stage.off('.owl.core');
		$(document).off('.owl.core');

		if (this.settings.responsive !== false) {
			window.clearTimeout(this.resizeTimer);
			this.off(window, 'resize', this._handlers.onThrottledResize);
		}

		for (var i in this._plugins) {
			this._plugins[i].destroy();
		}

		this.$stage.children('.cloned').remove();

		this.$stage.unwrap();
		this.$stage.children().contents().unwrap();
		this.$stage.children().unwrap();

		this.$element
			.removeClass(this.options.refreshClass)
			.removeClass(this.options.loadingClass)
			.removeClass(this.options.loadedClass)
			.removeClass(this.options.rtlClass)
			.removeClass(this.options.dragClass)
			.removeClass(this.options.grabClass)
			.attr('class', this.$element.attr('class').replace(new RegExp(this.options.responsiveClass + '-\\S+\\s', 'g'), ''))
			.removeData('owl.carousel');
	};

	/**
	 * Operators to calculate right-to-left and left-to-right.
	 * @protected
	 * @param {Number} [a] - The left side operand.
	 * @param {String} [o] - The operator.
	 * @param {Number} [b] - The right side operand.
	 */
	Owl.prototype.op = function(a, o, b) {
		var rtl = this.settings.rtl;
		switch (o) {
			case '<':
				return rtl ? a > b : a < b;
			case '>':
				return rtl ? a < b : a > b;
			case '>=':
				return rtl ? a <= b : a >= b;
			case '<=':
				return rtl ? a >= b : a <= b;
			default:
				break;
		}
	};

	/**
	 * Attaches to an internal event.
	 * @protected
	 * @param {HTMLElement} element - The event source.
	 * @param {String} event - The event name.
	 * @param {Function} listener - The event handler to attach.
	 * @param {Boolean} capture - Wether the event should be handled at the capturing phase or not.
	 */
	Owl.prototype.on = function(element, event, listener, capture) {
		if (element.addEventListener) {
			element.addEventListener(event, listener, capture);
		} else if (element.attachEvent) {
			element.attachEvent('on' + event, listener);
		}
	};

	/**
	 * Detaches from an internal event.
	 * @protected
	 * @param {HTMLElement} element - The event source.
	 * @param {String} event - The event name.
	 * @param {Function} listener - The attached event handler to detach.
	 * @param {Boolean} capture - Wether the attached event handler was registered as a capturing listener or not.
	 */
	Owl.prototype.off = function(element, event, listener, capture) {
		if (element.removeEventListener) {
			element.removeEventListener(event, listener, capture);
		} else if (element.detachEvent) {
			element.detachEvent('on' + event, listener);
		}
	};

	/**
	 * Triggers a public event.
	 * @todo Remove `status`, `relatedTarget` should be used instead.
	 * @protected
	 * @param {String} name - The event name.
	 * @param {*} [data=null] - The event data.
	 * @param {String} [namespace=carousel] - The event namespace.
	 * @param {String} [state] - The state which is associated with the event.
	 * @param {Boolean} [enter=false] - Indicates if the call enters the specified state or not.
	 * @returns {Event} - The event arguments.
	 */
	Owl.prototype.trigger = function(name, data, namespace, state, enter) {
		var status = {
			item: { count: this._items.length, index: this.current() }
		}, handler = $.camelCase(
			$.grep([ 'on', name, namespace ], function(v) { return v })
				.join('-').toLowerCase()
		), event = $.Event(
			[ name, 'owl', namespace || 'carousel' ].join('.').toLowerCase(),
			$.extend({ relatedTarget: this }, status, data)
		);

		if (!this._supress[name]) {
			$.each(this._plugins, function(name, plugin) {
				if (plugin.onTrigger) {
					plugin.onTrigger(event);
				}
			});

			this.register({ type: Owl.Type.Event, name: name });
			this.$element.trigger(event);

			if (this.settings && typeof this.settings[handler] === 'function') {
				this.settings[handler].call(this, event);
			}
		}

		return event;
	};

	/**
	 * Enters a state.
	 * @param name - The state name.
	 */
	Owl.prototype.enter = function(name) {
		$.each([ name ].concat(this._states.tags[name] || []), $.proxy(function(i, name) {
			if (this._states.current[name] === undefined) {
				this._states.current[name] = 0;
			}

			this._states.current[name]++;
		}, this));
	};

	/**
	 * Leaves a state.
	 * @param name - The state name.
	 */
	Owl.prototype.leave = function(name) {
		$.each([ name ].concat(this._states.tags[name] || []), $.proxy(function(i, name) {
			this._states.current[name]--;
		}, this));
	};

	/**
	 * Registers an event or state.
	 * @public
	 * @param {Object} object - The event or state to register.
	 */
	Owl.prototype.register = function(object) {
		if (object.type === Owl.Type.Event) {
			if (!$.event.special[object.name]) {
				$.event.special[object.name] = {};
			}

			if (!$.event.special[object.name].owl) {
				var _default = $.event.special[object.name]._default;
				$.event.special[object.name]._default = function(e) {
					if (_default && _default.apply && (!e.namespace || e.namespace.indexOf('owl') === -1)) {
						return _default.apply(this, arguments);
					}
					return e.namespace && e.namespace.indexOf('owl') > -1;
				};
				$.event.special[object.name].owl = true;
			}
		} else if (object.type === Owl.Type.State) {
			if (!this._states.tags[object.name]) {
				this._states.tags[object.name] = object.tags;
			} else {
				this._states.tags[object.name] = this._states.tags[object.name].concat(object.tags);
			}

			this._states.tags[object.name] = $.grep(this._states.tags[object.name], $.proxy(function(tag, i) {
				return $.inArray(tag, this._states.tags[object.name]) === i;
			}, this));
		}
	};

	/**
	 * Suppresses events.
	 * @protected
	 * @param {Array.<String>} events - The events to suppress.
	 */
	Owl.prototype.suppress = function(events) {
		$.each(events, $.proxy(function(index, event) {
			this._supress[event] = true;
		}, this));
	};

	/**
	 * Releases suppressed events.
	 * @protected
	 * @param {Array.<String>} events - The events to release.
	 */
	Owl.prototype.release = function(events) {
		$.each(events, $.proxy(function(index, event) {
			delete this._supress[event];
		}, this));
	};

	/**
	 * Gets unified pointer coordinates from event.
	 * @todo #261
	 * @protected
	 * @param {Event} - The `mousedown` or `touchstart` event.
	 * @returns {Object} - Contains `x` and `y` coordinates of current pointer position.
	 */
	Owl.prototype.pointer = function(event) {
		var result = { x: null, y: null };

		event = event.originalEvent || event || window.event;

		event = event.touches && event.touches.length ?
			event.touches[0] : event.changedTouches && event.changedTouches.length ?
				event.changedTouches[0] : event;

		if (event.pageX) {
			result.x = event.pageX;
			result.y = event.pageY;
		} else {
			result.x = event.clientX;
			result.y = event.clientY;
		}

		return result;
	};

	/**
	 * Determines if the input is a Number or something that can be coerced to a Number
	 * @protected
	 * @param {Number|String|Object|Array|Boolean|RegExp|Function|Symbol} - The input to be tested
	 * @returns {Boolean} - An indication if the input is a Number or can be coerced to a Number
	 */
	Owl.prototype.isNumeric = function(number) {
		return !isNaN(parseFloat(number));
	};

	/**
	 * Gets the difference of two vectors.
	 * @todo #261
	 * @protected
	 * @param {Object} - The first vector.
	 * @param {Object} - The second vector.
	 * @returns {Object} - The difference.
	 */
	Owl.prototype.difference = function(first, second) {
		return {
			x: first.x - second.x,
			y: first.y - second.y
		};
	};

	/**
	 * The jQuery Plugin for the Owl Carousel
	 * @todo Navigation plugin `next` and `prev`
	 * @public
	 */
	$.fn.owlCarousel = function(option) {
		var args = Array.prototype.slice.call(arguments, 1);

		return this.each(function() {
			var $this = $(this),
				data = $this.data('owl.carousel');

			if (!data) {
				data = new Owl(this, typeof option == 'object' && option);
				$this.data('owl.carousel', data);

				$.each([
					'next', 'prev', 'to', 'destroy', 'refresh', 'replace', 'add', 'remove'
				], function(i, event) {
					data.register({ type: Owl.Type.Event, name: event });
					data.$element.on(event + '.owl.carousel.core', $.proxy(function(e) {
						if (e.namespace && e.relatedTarget !== this) {
							this.suppress([ event ]);
							data[event].apply(this, [].slice.call(arguments, 1));
							this.release([ event ]);
						}
					}, data));
				});
			}

			if (typeof option == 'string' && option.charAt(0) !== '_') {
				data[option].apply(data, args);
			}
		});
	};

	/**
	 * The constructor for the jQuery Plugin
	 * @public
	 */
	$.fn.owlCarousel.Constructor = Owl;

})(window.Zepto || window.jQuery, window, document);

/**
 * AutoRefresh Plugin
 * @version 2.1.0
 * @author Artus Kolanowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {

	/**
	 * Creates the auto refresh plugin.
	 * @class The Auto Refresh Plugin
	 * @param {Owl} carousel - The Owl Carousel
	 */
	var AutoRefresh = function(carousel) {
		/**
		 * Reference to the core.
		 * @protected
		 * @type {Owl}
		 */
		this._core = carousel;

		/**
		 * Refresh interval.
		 * @protected
		 * @type {number}
		 */
		this._interval = null;

		/**
		 * Whether the element is currently visible or not.
		 * @protected
		 * @type {Boolean}
		 */
		this._visible = null;

		/**
		 * All event handlers.
		 * @protected
		 * @type {Object}
		 */
		this._handlers = {
			'initialized.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._core.settings.autoRefresh) {
					this.watch();
				}
			}, this)
		};

		// set default options
		this._core.options = $.extend({}, AutoRefresh.Defaults, this._core.options);

		// register event handlers
		this._core.$element.on(this._handlers);
	};

	/**
	 * Default options.
	 * @public
	 */
	AutoRefresh.Defaults = {
		autoRefresh: true,
		autoRefreshInterval: 500
	};

	/**
	 * Watches the element.
	 */
	AutoRefresh.prototype.watch = function() {
		if (this._interval) {
			return;
		}

		this._visible = this._core.$element.is(':visible');
		this._interval = window.setInterval($.proxy(this.refresh, this), this._core.settings.autoRefreshInterval);
	};

	/**
	 * Refreshes the element.
	 */
	AutoRefresh.prototype.refresh = function() {
		if (this._core.$element.is(':visible') === this._visible) {
			return;
		}

		this._visible = !this._visible;

		this._core.$element.toggleClass('owl-hidden', !this._visible);

		this._visible && (this._core.invalidate('width') && this._core.refresh());
	};

	/**
	 * Destroys the plugin.
	 */
	AutoRefresh.prototype.destroy = function() {
		var handler, property;

		window.clearInterval(this._interval);

		for (handler in this._handlers) {
			this._core.$element.off(handler, this._handlers[handler]);
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.AutoRefresh = AutoRefresh;

})(window.Zepto || window.jQuery, window, document);

/**
 * Lazy Plugin
 * @version 2.1.0
 * @author Bartosz Wojciechowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {

	/**
	 * Creates the lazy plugin.
	 * @class The Lazy Plugin
	 * @param {Owl} carousel - The Owl Carousel
	 */
	var Lazy = function(carousel) {

		/**
		 * Reference to the core.
		 * @protected
		 * @type {Owl}
		 */
		this._core = carousel;

		/**
		 * Already loaded items.
		 * @protected
		 * @type {Array.<jQuery>}
		 */
		this._loaded = [];

		/**
		 * Event handlers.
		 * @protected
		 * @type {Object}
		 */
		this._handlers = {
			'initialized.owl.carousel change.owl.carousel resized.owl.carousel': $.proxy(function(e) {
				if (!e.namespace) {
					return;
				}

				if (!this._core.settings || !this._core.settings.lazyLoad) {
					return;
				}

				if ((e.property && e.property.name == 'position') || e.type == 'initialized') {
					var settings = this._core.settings,
						n = (settings.center && Math.ceil(settings.items / 2) || settings.items),
						i = ((settings.center && n * -1) || 0),
						position = (e.property && e.property.value !== undefined ? e.property.value : this._core.current()) + i,
						clones = this._core.clones().length,
						load = $.proxy(function(i, v) { this.load(v) }, this);

					while (i++ < n) {
						this.load(clones / 2 + this._core.relative(position));
						clones && $.each(this._core.clones(this._core.relative(position)), load);
						position++;
					}
				}
			}, this)
		};

		// set the default options
		this._core.options = $.extend({}, Lazy.Defaults, this._core.options);

		// register event handler
		this._core.$element.on(this._handlers);
	};

	/**
	 * Default options.
	 * @public
	 */
	Lazy.Defaults = {
		lazyLoad: false
	};

	/**
	 * Loads all resources of an item at the specified position.
	 * @param {Number} position - The absolute position of the item.
	 * @protected
	 */
	Lazy.prototype.load = function(position) {
		var $item = this._core.$stage.children().eq(position),
			$elements = $item && $item.find('.owl-lazy');

		if (!$elements || $.inArray($item.get(0), this._loaded) > -1) {
			return;
		}

		$elements.each($.proxy(function(index, element) {
			var $element = $(element), image,
				url = (window.devicePixelRatio > 1 && $element.attr('data-src-retina')) || $element.attr('data-src');

			this._core.trigger('load', { element: $element, url: url }, 'lazy');

			if ($element.is('img')) {
				$element.one('load.owl.lazy', $.proxy(function() {
					$element.css('opacity', 1);
					this._core.trigger('loaded', { element: $element, url: url }, 'lazy');
				}, this)).attr('src', url);
			} else {
				image = new Image();
				image.onload = $.proxy(function() {
					$element.css({
						'background-image': 'url(' + url + ')',
						'opacity': '1'
					});
					this._core.trigger('loaded', { element: $element, url: url }, 'lazy');
				}, this);
				image.src = url;
			}
		}, this));

		this._loaded.push($item.get(0));
	};

	/**
	 * Destroys the plugin.
	 * @public
	 */
	Lazy.prototype.destroy = function() {
		var handler, property;

		for (handler in this.handlers) {
			this._core.$element.off(handler, this.handlers[handler]);
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.Lazy = Lazy;

})(window.Zepto || window.jQuery, window, document);

/**
 * AutoHeight Plugin
 * @version 2.1.0
 * @author Bartosz Wojciechowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {

	/**
	 * Creates the auto height plugin.
	 * @class The Auto Height Plugin
	 * @param {Owl} carousel - The Owl Carousel
	 */
	var AutoHeight = function(carousel) {
		/**
		 * Reference to the core.
		 * @protected
		 * @type {Owl}
		 */
		this._core = carousel;

		/**
		 * All event handlers.
		 * @protected
		 * @type {Object}
		 */
		this._handlers = {
			'initialized.owl.carousel refreshed.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._core.settings.autoHeight) {
					this.update();
				}
			}, this),
			'changed.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._core.settings.autoHeight && e.property.name == 'position'){
					this.update();
				}
			}, this),
			'loaded.owl.lazy': $.proxy(function(e) {
				if (e.namespace && this._core.settings.autoHeight
					&& e.element.closest('.' + this._core.settings.itemClass).index() === this._core.current()) {
					this.update();
				}
			}, this)
		};

		// set default options
		this._core.options = $.extend({}, AutoHeight.Defaults, this._core.options);

		// register event handlers
		this._core.$element.on(this._handlers);
	};

	/**
	 * Default options.
	 * @public
	 */
	AutoHeight.Defaults = {
		autoHeight: false,
		autoHeightClass: 'owl-height'
	};

	/**
	 * Updates the view.
	 */
	AutoHeight.prototype.update = function() {
		var start = this._core._current,
			end = start + this._core.settings.items,
			visible = this._core.$stage.children().toArray().slice(start, end),
			heights = [],
			maxheight = 0;

		$.each(visible, function(index, item) {
			heights.push($(item).height());
		});

		maxheight = Math.max.apply(null, heights);

		this._core.$stage.parent()
			.height(maxheight)
			.addClass(this._core.settings.autoHeightClass);
	};

	AutoHeight.prototype.destroy = function() {
		var handler, property;

		for (handler in this._handlers) {
			this._core.$element.off(handler, this._handlers[handler]);
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.AutoHeight = AutoHeight;

})(window.Zepto || window.jQuery, window, document);

/**
 * Video Plugin
 * @version 2.1.0
 * @author Bartosz Wojciechowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {

	/**
	 * Creates the video plugin.
	 * @class The Video Plugin
	 * @param {Owl} carousel - The Owl Carousel
	 */
	var Video = function(carousel) {
		/**
		 * Reference to the core.
		 * @protected
		 * @type {Owl}
		 */
		this._core = carousel;

		/**
		 * Cache all video URLs.
		 * @protected
		 * @type {Object}
		 */
		this._videos = {};

		/**
		 * Current playing item.
		 * @protected
		 * @type {jQuery}
		 */
		this._playing = null;

		/**
		 * All event handlers.
		 * @todo The cloned content removale is too late
		 * @protected
		 * @type {Object}
		 */
		this._handlers = {
			'initialized.owl.carousel': $.proxy(function(e) {
				if (e.namespace) {
					this._core.register({ type: 'state', name: 'playing', tags: [ 'interacting' ] });
				}
			}, this),
			'resize.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._core.settings.video && this.isInFullScreen()) {
					e.preventDefault();
				}
			}, this),
			'refreshed.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._core.is('resizing')) {
					this._core.$stage.find('.cloned .owl-video-frame').remove();
				}
			}, this),
			'changed.owl.carousel': $.proxy(function(e) {
				if (e.namespace && e.property.name === 'position' && this._playing) {
					this.stop();
				}
			}, this),
			'prepared.owl.carousel': $.proxy(function(e) {
				if (!e.namespace) {
					return;
				}

				var $element = $(e.content).find('.owl-video');

				if ($element.length) {
					$element.css('display', 'none');
					this.fetch($element, $(e.content));
				}
			}, this)
		};

		// set default options
		this._core.options = $.extend({}, Video.Defaults, this._core.options);

		// register event handlers
		this._core.$element.on(this._handlers);

		this._core.$element.on('click.owl.video', '.owl-video-play-icon', $.proxy(function(e) {
			this.play(e);
		}, this));
	};

	/**
	 * Default options.
	 * @public
	 */
	Video.Defaults = {
		video: false,
		videoHeight: false,
		videoWidth: false
	};

	/**
	 * Gets the video ID and the type (YouTube/Vimeo/vzaar only).
	 * @protected
	 * @param {jQuery} target - The target containing the video data.
	 * @param {jQuery} item - The item containing the video.
	 */
	Video.prototype.fetch = function(target, item) {
			var type = (function() {
					if (target.attr('data-vimeo-id')) {
						return 'vimeo';
					} else if (target.attr('data-vzaar-id')) {
						return 'vzaar'
					} else {
						return 'youtube';
					}
				})(),
				id = target.attr('data-vimeo-id') || target.attr('data-youtube-id') || target.attr('data-vzaar-id'),
				width = target.attr('data-width') || this._core.settings.videoWidth,
				height = target.attr('data-height') || this._core.settings.videoHeight,
				url = target.attr('href');

		if (url) {

			/*
					Parses the id's out of the following urls (and probably more):
					https://www.youtube.com/watch?v=:id
					https://youtu.be/:id
					https://vimeo.com/:id
					https://vimeo.com/channels/:channel/:id
					https://vimeo.com/groups/:group/videos/:id
					https://app.vzaar.com/videos/:id

					Visual example: https://regexper.com/#(http%3A%7Chttps%3A%7C)%5C%2F%5C%2F(player.%7Cwww.%7Capp.)%3F(vimeo%5C.com%7Cyoutu(be%5C.com%7C%5C.be%7Cbe%5C.googleapis%5C.com)%7Cvzaar%5C.com)%5C%2F(video%5C%2F%7Cvideos%5C%2F%7Cembed%5C%2F%7Cchannels%5C%2F.%2B%5C%2F%7Cgroups%5C%2F.%2B%5C%2F%7Cwatch%5C%3Fv%3D%7Cv%5C%2F)%3F(%5BA-Za-z0-9._%25-%5D*)(%5C%26%5CS%2B)%3F
			*/

			id = url.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/);

			if (id[3].indexOf('youtu') > -1) {
				type = 'youtube';
			} else if (id[3].indexOf('vimeo') > -1) {
				type = 'vimeo';
			} else if (id[3].indexOf('vzaar') > -1) {
				type = 'vzaar';
			} else {
				throw new Error('Video URL not supported.');
			}
			id = id[6];
		} else {
			throw new Error('Missing video URL.');
		}

		this._videos[url] = {
			type: type,
			id: id,
			width: width,
			height: height
		};

		item.attr('data-video', url);

		this.thumbnail(target, this._videos[url]);
	};

	/**
	 * Creates video thumbnail.
	 * @protected
	 * @param {jQuery} target - The target containing the video data.
	 * @param {Object} info - The video info object.
	 * @see `fetch`
	 */
	Video.prototype.thumbnail = function(target, video) {
		var tnLink,
			icon,
			path,
			dimensions = video.width && video.height ? 'style="width:' + video.width + 'px;height:' + video.height + 'px;"' : '',
			customTn = target.find('img'),
			srcType = 'src',
			lazyClass = '',
			settings = this._core.settings,
			create = function(path) {
				icon = '<div class="owl-video-play-icon"></div>';

				if (settings.lazyLoad) {
					tnLink = '<div class="owl-video-tn ' + lazyClass + '" ' + srcType + '="' + path + '"></div>';
				} else {
					tnLink = '<div class="owl-video-tn" style="opacity:1;background-image:url(' + path + ')"></div>';
				}
				target.after(tnLink);
				target.after(icon);
			};

		// wrap video content into owl-video-wrapper div
		target.wrap('<div class="owl-video-wrapper"' + dimensions + '></div>');

		if (this._core.settings.lazyLoad) {
			srcType = 'data-src';
			lazyClass = 'owl-lazy';
		}

		// custom thumbnail
		if (customTn.length) {
			create(customTn.attr(srcType));
			customTn.remove();
			return false;
		}

		if (video.type === 'youtube') {
			path = "//img.youtube.com/vi/" + video.id + "/hqdefault.jpg";
			create(path);
		} else if (video.type === 'vimeo') {
			$.ajax({
				type: 'GET',
				url: '//vimeo.com/api/v2/video/' + video.id + '.json',
				jsonp: 'callback',
				dataType: 'jsonp',
				success: function(data) {
					path = data[0].thumbnail_large;
					create(path);
				}
			});
		} else if (video.type === 'vzaar') {
			$.ajax({
				type: 'GET',
				url: '//vzaar.com/api/videos/' + video.id + '.json',
				jsonp: 'callback',
				dataType: 'jsonp',
				success: function(data) {
					path = data.framegrab_url;
					create(path);
				}
			});
		}
	};

	/**
	 * Stops the current video.
	 * @public
	 */
	Video.prototype.stop = function() {
		this._core.trigger('stop', null, 'video');
		this._playing.find('.owl-video-frame').remove();
		this._playing.removeClass('owl-video-playing');
		this._playing = null;
		this._core.leave('playing');
		this._core.trigger('stopped', null, 'video');
	};

	/**
	 * Starts the current video.
	 * @public
	 * @param {Event} event - The event arguments.
	 */
	Video.prototype.play = function(event) {
		var target = $(event.target),
			item = target.closest('.' + this._core.settings.itemClass),
			video = this._videos[item.attr('data-video')],
			width = video.width || '100%',
			height = video.height || this._core.$stage.height(),
			html;

		if (this._playing) {
			return;
		}

		this._core.enter('playing');
		this._core.trigger('play', null, 'video');

		item = this._core.items(this._core.relative(item.index()));

		this._core.reset(item.index());

		if (video.type === 'youtube') {
			html = '<iframe width="' + width + '" height="' + height + '" src="//www.youtube.com/embed/' +
				video.id + '?autoplay=1&v=' + video.id + '" frameborder="0" allowfullscreen></iframe>';
		} else if (video.type === 'vimeo') {
			html = '<iframe src="//player.vimeo.com/video/' + video.id +
				'?autoplay=1" width="' + width + '" height="' + height +
				'" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>';
		} else if (video.type === 'vzaar') {
			html = '<iframe frameborder="0"' + 'height="' + height + '"' + 'width="' + width +
				'" allowfullscreen mozallowfullscreen webkitAllowFullScreen ' +
				'src="//view.vzaar.com/' + video.id + '/player?autoplay=true"></iframe>';
		}

		$('<div class="owl-video-frame">' + html + '</div>').insertAfter(item.find('.owl-video'));

		this._playing = item.addClass('owl-video-playing');
	};

	/**
	 * Checks whether an video is currently in full screen mode or not.
	 * @todo Bad style because looks like a readonly method but changes members.
	 * @protected
	 * @returns {Boolean}
	 */
	Video.prototype.isInFullScreen = function() {
		var element = document.fullscreenElement || document.mozFullScreenElement ||
				document.webkitFullscreenElement;

		return element && $(element).parent().hasClass('owl-video-frame');
	};

	/**
	 * Destroys the plugin.
	 */
	Video.prototype.destroy = function() {
		var handler, property;

		this._core.$element.off('click.owl.video');

		for (handler in this._handlers) {
			this._core.$element.off(handler, this._handlers[handler]);
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.Video = Video;

})(window.Zepto || window.jQuery, window, document);

/**
 * Animate Plugin
 * @version 2.1.0
 * @author Bartosz Wojciechowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {

	/**
	 * Creates the animate plugin.
	 * @class The Navigation Plugin
	 * @param {Owl} scope - The Owl Carousel
	 */
	var Animate = function(scope) {
		this.core = scope;
		this.core.options = $.extend({}, Animate.Defaults, this.core.options);
		this.swapping = true;
		this.previous = undefined;
		this.next = undefined;

		this.handlers = {
			'change.owl.carousel': $.proxy(function(e) {
				if (e.namespace && e.property.name == 'position') {
					this.previous = this.core.current();
					this.next = e.property.value;
				}
			}, this),
			'drag.owl.carousel dragged.owl.carousel translated.owl.carousel': $.proxy(function(e) {
				if (e.namespace) {
					this.swapping = e.type == 'translated';
				}
			}, this),
			'translate.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this.swapping && (this.core.options.animateOut || this.core.options.animateIn)) {
					this.swap();
				}
			}, this)
		};

		this.core.$element.on(this.handlers);
	};

	/**
	 * Default options.
	 * @public
	 */
	Animate.Defaults = {
		animateOut: false,
		animateIn: false
	};

	/**
	 * Toggles the animation classes whenever an translations starts.
	 * @protected
	 * @returns {Boolean|undefined}
	 */
	Animate.prototype.swap = function() {

		if (this.core.settings.items !== 1) {
			return;
		}

		if (!$.support.animation || !$.support.transition) {
			return;
		}

		this.core.speed(0);

		var left,
			clear = $.proxy(this.clear, this),
			previous = this.core.$stage.children().eq(this.previous),
			next = this.core.$stage.children().eq(this.next),
			incoming = this.core.settings.animateIn,
			outgoing = this.core.settings.animateOut;

		if (this.core.current() === this.previous) {
			return;
		}

		if (outgoing) {
			left = this.core.coordinates(this.previous) - this.core.coordinates(this.next);
			previous.one($.support.animation.end, clear)
				.css( { 'left': left + 'px' } )
				.addClass('animated owl-animated-out')
				.addClass(outgoing);
		}

		if (incoming) {
			next.one($.support.animation.end, clear)
				.addClass('animated owl-animated-in')
				.addClass(incoming);
		}
	};

	Animate.prototype.clear = function(e) {
		$(e.target).css( { 'left': '' } )
			.removeClass('animated owl-animated-out owl-animated-in')
			.removeClass(this.core.settings.animateIn)
			.removeClass(this.core.settings.animateOut);
		this.core.onTransitionEnd();
	};

	/**
	 * Destroys the plugin.
	 * @public
	 */
	Animate.prototype.destroy = function() {
		var handler, property;

		for (handler in this.handlers) {
			this.core.$element.off(handler, this.handlers[handler]);
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.Animate = Animate;

})(window.Zepto || window.jQuery, window, document);

/**
 * Autoplay Plugin
 * @version 2.1.0
 * @author Bartosz Wojciechowski
 * @author Artus Kolanowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {

	/**
	 * Creates the autoplay plugin.
	 * @class The Autoplay Plugin
	 * @param {Owl} scope - The Owl Carousel
	 */
	var Autoplay = function(carousel) {
		/**
		 * Reference to the core.
		 * @protected
		 * @type {Owl}
		 */
		this._core = carousel;

		/**
		 * The autoplay timeout.
		 * @type {Timeout}
		 */
		this._timeout = null;

		/**
		 * Indicates whenever the autoplay is paused.
		 * @type {Boolean}
		 */
		this._paused = false;

		/**
		 * All event handlers.
		 * @protected
		 * @type {Object}
		 */
		this._handlers = {
			'changed.owl.carousel': $.proxy(function(e) {
				if (e.namespace && e.property.name === 'settings') {
					if (this._core.settings.autoplay) {
						this.play();
					} else {
						this.stop();
					}
				} else if (e.namespace && e.property.name === 'position') {
					//console.log('play?', e);
					if (this._core.settings.autoplay) {
						this._setAutoPlayInterval();
					}
				}
			}, this),
			'initialized.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._core.settings.autoplay) {
					this.play();
				}
			}, this),
			'play.owl.autoplay': $.proxy(function(e, t, s) {
				if (e.namespace) {
					this.play(t, s);
				}
			}, this),
			'stop.owl.autoplay': $.proxy(function(e) {
				if (e.namespace) {
					this.stop();
				}
			}, this),
			'mouseover.owl.autoplay': $.proxy(function() {
				if (this._core.settings.autoplayHoverPause && this._core.is('rotating')) {
					this.pause();
				}
			}, this),
			'mouseleave.owl.autoplay': $.proxy(function() {
				if (this._core.settings.autoplayHoverPause && this._core.is('rotating')) {
					this.play();
				}
			}, this),
			'touchstart.owl.core': $.proxy(function() {
				if (this._core.settings.autoplayHoverPause && this._core.is('rotating')) {
					this.pause();
				}
			}, this),
			'touchend.owl.core': $.proxy(function() {
				if (this._core.settings.autoplayHoverPause) {
					this.play();
				}
			}, this)
		};

		// register event handlers
		this._core.$element.on(this._handlers);

		// set default options
		this._core.options = $.extend({}, Autoplay.Defaults, this._core.options);
	};

	/**
	 * Default options.
	 * @public
	 */
	Autoplay.Defaults = {
		autoplay: false,
		autoplayTimeout: 5000,
		autoplayHoverPause: false,
		autoplaySpeed: false
	};

	/**
	 * Starts the autoplay.
	 * @public
	 * @param {Number} [timeout] - The interval before the next animation starts.
	 * @param {Number} [speed] - The animation speed for the animations.
	 */
	Autoplay.prototype.play = function(timeout, speed) {
		this._paused = false;

		if (this._core.is('rotating')) {
			return;
		}

		this._core.enter('rotating');

		this._setAutoPlayInterval();
	};

	/**
	 * Gets a new timeout
	 * @private
	 * @param {Number} [timeout] - The interval before the next animation starts.
	 * @param {Number} [speed] - The animation speed for the animations.
	 * @return {Timeout}
	 */
	Autoplay.prototype._getNextTimeout = function(timeout, speed) {
		if ( this._timeout ) {
			window.clearTimeout(this._timeout);
		}
		return window.setTimeout($.proxy(function() {
			if (this._paused || this._core.is('busy') || this._core.is('interacting') || document.hidden) {
				return;
			}
			this._core.next(speed || this._core.settings.autoplaySpeed);
		}, this), timeout || this._core.settings.autoplayTimeout);
	};

	/**
	 * Sets autoplay in motion.
	 * @private
	 */
	Autoplay.prototype._setAutoPlayInterval = function() {
		this._timeout = this._getNextTimeout();
	};

	/**
	 * Stops the autoplay.
	 * @public
	 */
	Autoplay.prototype.stop = function() {
		if (!this._core.is('rotating')) {
			return;
		}

		window.clearTimeout(this._timeout);
		this._core.leave('rotating');
	};

	/**
	 * Stops the autoplay.
	 * @public
	 */
	Autoplay.prototype.pause = function() {
		if (!this._core.is('rotating')) {
			return;
		}

		this._paused = true;
	};

	/**
	 * Destroys the plugin.
	 */
	Autoplay.prototype.destroy = function() {
		var handler, property;

		this.stop();

		for (handler in this._handlers) {
			this._core.$element.off(handler, this._handlers[handler]);
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.autoplay = Autoplay;

})(window.Zepto || window.jQuery, window, document);

/**
 * Navigation Plugin
 * @version 2.1.0
 * @author Artus Kolanowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {
	'use strict';

	/**
	 * Creates the navigation plugin.
	 * @class The Navigation Plugin
	 * @param {Owl} carousel - The Owl Carousel.
	 */
	var Navigation = function(carousel) {
		/**
		 * Reference to the core.
		 * @protected
		 * @type {Owl}
		 */
		this._core = carousel;

		/**
		 * Indicates whether the plugin is initialized or not.
		 * @protected
		 * @type {Boolean}
		 */
		this._initialized = false;

		/**
		 * The current paging indexes.
		 * @protected
		 * @type {Array}
		 */
		this._pages = [];

		/**
		 * All DOM elements of the user interface.
		 * @protected
		 * @type {Object}
		 */
		this._controls = {};

		/**
		 * Markup for an indicator.
		 * @protected
		 * @type {Array.<String>}
		 */
		this._templates = [];

		/**
		 * The carousel element.
		 * @type {jQuery}
		 */
		this.$element = this._core.$element;

		/**
		 * Overridden methods of the carousel.
		 * @protected
		 * @type {Object}
		 */
		this._overrides = {
			next: this._core.next,
			prev: this._core.prev,
			to: this._core.to
		};

		/**
		 * All event handlers.
		 * @protected
		 * @type {Object}
		 */
		this._handlers = {
			'prepared.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._core.settings.dotsData) {
					this._templates.push('<div class="' + this._core.settings.dotClass + '">' +
						$(e.content).find('[data-dot]').addBack('[data-dot]').attr('data-dot') + '</div>');
				}
			}, this),
			'added.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._core.settings.dotsData) {
					this._templates.splice(e.position, 0, this._templates.pop());
				}
			}, this),
			'remove.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._core.settings.dotsData) {
					this._templates.splice(e.position, 1);
				}
			}, this),
			'changed.owl.carousel': $.proxy(function(e) {
				if (e.namespace && e.property.name == 'position') {
					this.draw();
				}
			}, this),
			'initialized.owl.carousel': $.proxy(function(e) {
				if (e.namespace && !this._initialized) {
					this._core.trigger('initialize', null, 'navigation');
					this.initialize();
					this.update();
					this.draw();
					this._initialized = true;
					this._core.trigger('initialized', null, 'navigation');
				}
			}, this),
			'refreshed.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._initialized) {
					this._core.trigger('refresh', null, 'navigation');
					this.update();
					this.draw();
					this._core.trigger('refreshed', null, 'navigation');
				}
			}, this)
		};

		// set default options
		this._core.options = $.extend({}, Navigation.Defaults, this._core.options);

		// register event handlers
		this.$element.on(this._handlers);
	};

	/**
	 * Default options.
	 * @public
	 * @todo Rename `slideBy` to `navBy`
	 */
	Navigation.Defaults = {
		nav: false,
		navText: [ 'prev', 'next' ],
		navSpeed: false,
		navElement: 'div',
		navContainer: false,
		navContainerClass: 'owl-nav',
		navClass: [ 'owl-prev', 'owl-next' ],
		slideBy: 1,
		dotClass: 'owl-dot',
		dotsClass: 'owl-dots',
		dots: true,
		dotsEach: false,
		dotsData: false,
		dotsSpeed: false,
		dotsContainer: false
	};

	/**
	 * Initializes the layout of the plugin and extends the carousel.
	 * @protected
	 */
	Navigation.prototype.initialize = function() {
		var override,
			settings = this._core.settings;

		// create DOM structure for relative navigation
		this._controls.$relative = (settings.navContainer ? $(settings.navContainer)
			: $('<div>').addClass(settings.navContainerClass).appendTo(this.$element)).addClass('disabled');

		this._controls.$previous = $('<' + settings.navElement + '>')
			.addClass(settings.navClass[0])
			.html(settings.navText[0])
			.prependTo(this._controls.$relative)
			.on('click', $.proxy(function(e) {
				this.prev(settings.navSpeed);
			}, this));
		this._controls.$next = $('<' + settings.navElement + '>')
			.addClass(settings.navClass[1])
			.html(settings.navText[1])
			.appendTo(this._controls.$relative)
			.on('click', $.proxy(function(e) {
				this.next(settings.navSpeed);
			}, this));

		// create DOM structure for absolute navigation
		if (!settings.dotsData) {
			this._templates = [ $('<div>')
				.addClass(settings.dotClass)
				.append($('<span>'))
				.prop('outerHTML') ];
		}

		this._controls.$absolute = (settings.dotsContainer ? $(settings.dotsContainer)
			: $('<div>').addClass(settings.dotsClass).appendTo(this.$element)).addClass('disabled');

		this._controls.$absolute.on('click', 'div', $.proxy(function(e) {
			var index = $(e.target).parent().is(this._controls.$absolute)
				? $(e.target).index() : $(e.target).parent().index();

			e.preventDefault();

			this.to(index, settings.dotsSpeed);
		}, this));

		// override public methods of the carousel
		for (override in this._overrides) {
			this._core[override] = $.proxy(this[override], this);
		}
	};

	/**
	 * Destroys the plugin.
	 * @protected
	 */
	Navigation.prototype.destroy = function() {
		var handler, control, property, override;

		for (handler in this._handlers) {
			this.$element.off(handler, this._handlers[handler]);
		}
		for (control in this._controls) {
			this._controls[control].remove();
		}
		for (override in this.overides) {
			this._core[override] = this._overrides[override];
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	};

	/**
	 * Updates the internal state.
	 * @protected
	 */
	Navigation.prototype.update = function() {
		var i, j, k,
			lower = this._core.clones().length / 2,
			upper = lower + this._core.items().length,
			maximum = this._core.maximum(true),
			settings = this._core.settings,
			size = settings.center || settings.autoWidth || settings.dotsData
				? 1 : settings.dotsEach || settings.items;

		if (settings.slideBy !== 'page') {
			settings.slideBy = Math.min(settings.slideBy, settings.items);
		}

		if (settings.dots || settings.slideBy == 'page') {
			this._pages = [];

			for (i = lower, j = 0, k = 0; i < upper; i++) {
				if (j >= size || j === 0) {
					this._pages.push({
						start: Math.min(maximum, i - lower),
						end: i - lower + size - 1
					});
					if (Math.min(maximum, i - lower) === maximum) {
						break;
					}
					j = 0, ++k;
				}
				j += this._core.mergers(this._core.relative(i));
			}
		}
	};

	/**
	 * Draws the user interface.
	 * @todo The option `dotsData` wont work.
	 * @protected
	 */
	Navigation.prototype.draw = function() {
		var difference,
			settings = this._core.settings,
			disabled = this._core.items().length <= settings.items,
			index = this._core.relative(this._core.current()),
			loop = settings.loop || settings.rewind;

		this._controls.$relative.toggleClass('disabled', !settings.nav || disabled);

		if (settings.nav) {
			this._controls.$previous.toggleClass('disabled', !loop && index <= this._core.minimum(true));
			this._controls.$next.toggleClass('disabled', !loop && index >= this._core.maximum(true));
		}

		this._controls.$absolute.toggleClass('disabled', !settings.dots || disabled);

		if (settings.dots) {
			difference = this._pages.length - this._controls.$absolute.children().length;

			if (settings.dotsData && difference !== 0) {
				this._controls.$absolute.html(this._templates.join(''));
			} else if (difference > 0) {
				this._controls.$absolute.append(new Array(difference + 1).join(this._templates[0]));
			} else if (difference < 0) {
				this._controls.$absolute.children().slice(difference).remove();
			}

			this._controls.$absolute.find('.active').removeClass('active');
			this._controls.$absolute.children().eq($.inArray(this.current(), this._pages)).addClass('active');
		}
	};

	/**
	 * Extends event data.
	 * @protected
	 * @param {Event} event - The event object which gets thrown.
	 */
	Navigation.prototype.onTrigger = function(event) {
		var settings = this._core.settings;

		event.page = {
			index: $.inArray(this.current(), this._pages),
			count: this._pages.length,
			size: settings && (settings.center || settings.autoWidth || settings.dotsData
				? 1 : settings.dotsEach || settings.items)
		};
	};

	/**
	 * Gets the current page position of the carousel.
	 * @protected
	 * @returns {Number}
	 */
	Navigation.prototype.current = function() {
		var current = this._core.relative(this._core.current());
		return $.grep(this._pages, $.proxy(function(page, index) {
			return page.start <= current && page.end >= current;
		}, this)).pop();
	};

	/**
	 * Gets the current succesor/predecessor position.
	 * @protected
	 * @returns {Number}
	 */
	Navigation.prototype.getPosition = function(successor) {
		var position, length,
			settings = this._core.settings;

		if (settings.slideBy == 'page') {
			position = $.inArray(this.current(), this._pages);
			length = this._pages.length;
			successor ? ++position : --position;
			position = this._pages[((position % length) + length) % length].start;
		} else {
			position = this._core.relative(this._core.current());
			length = this._core.items().length;
			successor ? position += settings.slideBy : position -= settings.slideBy;
		}

		return position;
	};

	/**
	 * Slides to the next item or page.
	 * @public
	 * @param {Number} [speed=false] - The time in milliseconds for the transition.
	 */
	Navigation.prototype.next = function(speed) {
		$.proxy(this._overrides.to, this._core)(this.getPosition(true), speed);
	};

	/**
	 * Slides to the previous item or page.
	 * @public
	 * @param {Number} [speed=false] - The time in milliseconds for the transition.
	 */
	Navigation.prototype.prev = function(speed) {
		$.proxy(this._overrides.to, this._core)(this.getPosition(false), speed);
	};

	/**
	 * Slides to the specified item or page.
	 * @public
	 * @param {Number} position - The position of the item or page.
	 * @param {Number} [speed] - The time in milliseconds for the transition.
	 * @param {Boolean} [standard=false] - Whether to use the standard behaviour or not.
	 */
	Navigation.prototype.to = function(position, speed, standard) {
		var length;

		if (!standard && this._pages.length) {
			length = this._pages.length;
			$.proxy(this._overrides.to, this._core)(this._pages[((position % length) + length) % length].start, speed);
		} else {
			$.proxy(this._overrides.to, this._core)(position, speed);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.Navigation = Navigation;

})(window.Zepto || window.jQuery, window, document);

/**
 * Hash Plugin
 * @version 2.1.0
 * @author Artus Kolanowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {
	'use strict';

	/**
	 * Creates the hash plugin.
	 * @class The Hash Plugin
	 * @param {Owl} carousel - The Owl Carousel
	 */
	var Hash = function(carousel) {
		/**
		 * Reference to the core.
		 * @protected
		 * @type {Owl}
		 */
		this._core = carousel;

		/**
		 * Hash index for the items.
		 * @protected
		 * @type {Object}
		 */
		this._hashes = {};

		/**
		 * The carousel element.
		 * @type {jQuery}
		 */
		this.$element = this._core.$element;

		/**
		 * All event handlers.
		 * @protected
		 * @type {Object}
		 */
		this._handlers = {
			'initialized.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._core.settings.startPosition === 'URLHash') {
					$(window).trigger('hashchange.owl.navigation');
				}
			}, this),
			'prepared.owl.carousel': $.proxy(function(e) {
				if (e.namespace) {
					var hash = $(e.content).find('[data-hash]').addBack('[data-hash]').attr('data-hash');

					if (!hash) {
						return;
					}

					this._hashes[hash] = e.content;
				}
			}, this),
			'changed.owl.carousel': $.proxy(function(e) {
				if (e.namespace && e.property.name === 'position') {
					var current = this._core.items(this._core.relative(this._core.current())),
						hash = $.map(this._hashes, function(item, hash) {
							return item === current ? hash : null;
						}).join();

					if (!hash || window.location.hash.slice(1) === hash) {
						return;
					}

					window.location.hash = hash;
				}
			}, this)
		};

		// set default options
		this._core.options = $.extend({}, Hash.Defaults, this._core.options);

		// register the event handlers
		this.$element.on(this._handlers);

		// register event listener for hash navigation
		$(window).on('hashchange.owl.navigation', $.proxy(function(e) {
			var hash = window.location.hash.substring(1),
				items = this._core.$stage.children(),
				position = this._hashes[hash] && items.index(this._hashes[hash]);

			if (position === undefined || position === this._core.current()) {
				return;
			}

			this._core.to(this._core.relative(position), false, true);
		}, this));
	};

	/**
	 * Default options.
	 * @public
	 */
	Hash.Defaults = {
		URLhashListener: false
	};

	/**
	 * Destroys the plugin.
	 * @public
	 */
	Hash.prototype.destroy = function() {
		var handler, property;

		$(window).off('hashchange.owl.navigation');

		for (handler in this._handlers) {
			this._core.$element.off(handler, this._handlers[handler]);
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.Hash = Hash;

})(window.Zepto || window.jQuery, window, document);

/**
 * Support Plugin
 *
 * @version 2.1.0
 * @author Vivid Planet Software GmbH
 * @author Artus Kolanowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {

	var style = $('<support>').get(0).style,
		prefixes = 'Webkit Moz O ms'.split(' '),
		events = {
			transition: {
				end: {
					WebkitTransition: 'webkitTransitionEnd',
					MozTransition: 'transitionend',
					OTransition: 'oTransitionEnd',
					transition: 'transitionend'
				}
			},
			animation: {
				end: {
					WebkitAnimation: 'webkitAnimationEnd',
					MozAnimation: 'animationend',
					OAnimation: 'oAnimationEnd',
					animation: 'animationend'
				}
			}
		},
		tests = {
			csstransforms: function() {
				return !!test('transform');
			},
			csstransforms3d: function() {
				return !!test('perspective');
			},
			csstransitions: function() {
				return !!test('transition');
			},
			cssanimations: function() {
				return !!test('animation');
			}
		};

	function test(property, prefixed) {
		var result = false,
			upper = property.charAt(0).toUpperCase() + property.slice(1);

		$.each((property + ' ' + prefixes.join(upper + ' ') + upper).split(' '), function(i, property) {
			if (style[property] !== undefined) {
				result = prefixed ? property : true;
				return false;
			}
		});

		return result;
	}

	function prefixed(property) {
		return test(property, true);
	}

	if (tests.csstransitions()) {
		/* jshint -W053 */
		$.support.transition = new String(prefixed('transition'))
		$.support.transition.end = events.transition.end[ $.support.transition ];
	}

	if (tests.cssanimations()) {
		/* jshint -W053 */
		$.support.animation = new String(prefixed('animation'))
		$.support.animation.end = events.animation.end[ $.support.animation ];
	}

	if (tests.csstransforms()) {
		/* jshint -W053 */
		$.support.transform = new String(prefixed('transform'));
		$.support.transform3d = tests.csstransforms3d();
	}

})(window.Zepto || window.jQuery, window, document);
/*END*/
/*Start/home/release/www/blog_180530_1650/wp-content/themes/edu-hiran/js/0187-formValidation.js*/
/*!
 * FormValidation (http://formvalidation.io)
 * The best jQuery plugin to validate form fields. Support Bootstrap, Foundation, Pure, SemanticUI, UIKit and custom frameworks
 *
 * @version     v0.6.2-dev, built on 2015-03-13 8:15:45 AM
 * @author      https://twitter.com/nghuuphuoc
 * @copyright   (c) 2013 - 2015 Nguyen Huu Phuoc
 * @license     http://formvalidation.io/license/
 */
// Register the namespace
window.FormValidation = {
    AddOn:     {},  // Add-ons
    Framework: {},  // Supported frameworks
    I18n:      {},  // i18n
    Validator: {}   // Available validators
};

if (typeof jQuery === 'undefined') {
    throw new Error('FormValidation requires jQuery');
}

(function($) {
    var version = $.fn.jquery.split(' ')[0].split('.');
    if ((+version[0] < 2 && +version[1] < 9) || (+version[0] === 1 && +version[1] === 9 && +version[2] < 1)) {
        throw new Error('FormValidation requires jQuery version 1.9.1 or higher');
    }
}(jQuery));

(function($) {
    // TODO: Remove backward compatibility in v0.7.0
    /**
     * Constructor
     *
     * @param {jQuery|String} form The form element or selector
     * @param {Object} options The options
     * @param {String} [namespace] The optional namespace which is used for data-{namespace}-xxx attributes and internal data.
     * Currently, it's used to support backward version
     * @constructor
     */
    FormValidation.Base = function(form, options, namespace) {
        this.$form      = $(form);
        this.options    = $.extend({}, $.fn.formValidation.DEFAULT_OPTIONS, options);
        this._namespace = namespace || 'fv';

        this.$invalidFields = $([]);    // Array of invalid fields
        this.$submitButton  = null;     // The submit button which is clicked to submit form
        this.$hiddenButton  = null;

        // Validating status
        this.STATUS_NOT_VALIDATED = 'NOT_VALIDATED';
        this.STATUS_VALIDATING    = 'VALIDATING';
        this.STATUS_INVALID       = 'INVALID';
        this.STATUS_VALID         = 'VALID';
        this.STATUS_IGNORED       = 'IGNORED';

        // Determine the event that is fired when user change the field value
        // Most modern browsers supports input event except IE 7, 8.
        // IE 9 supports input event but the event is still not fired if I press the backspace key.
        // Get IE version
        // https://gist.github.com/padolsey/527683/#comment-7595
        var ieVersion = (function() {
            var v = 3, div = document.createElement('div'), a = div.all || [];
            while (div.innerHTML = '<!--[if gt IE '+(++v)+']><br><![endif]-->', a[0]) {}
            return v > 4 ? v : !v;
        }());

        var el = document.createElement('div');
        this._changeEvent = (ieVersion === 9 || !('oninput' in el)) ? 'keyup' : 'input';

        // The flag to indicate that the form is ready to submit when a remote/callback validator returns
        this._submitIfValid = null;

        // Field elements
        this._cacheFields = {};

        this._init();
    };

    FormValidation.Base.prototype = {
        constructor: FormValidation.Base,

        /**
         * Check if the number of characters of field value exceed the threshold or not
         *
         * @param {jQuery} $field The field element
         * @returns {Boolean}
         */
        _exceedThreshold: function($field) {
            var ns        = this._namespace,
                field     = $field.attr('data-' + ns + '-field'),
                threshold = this.options.fields[field].threshold || this.options.threshold;
            if (!threshold) {
                return true;
            }
            var cannotType = $.inArray($field.attr('type'), ['button', 'checkbox', 'file', 'hidden', 'image', 'radio', 'reset', 'submit']) !== -1;
            return (cannotType || $field.val().length >= threshold);
        },

        /**
         * Init form
         */
        _init: function() {
            var that    = this,
                ns      = this._namespace,
                options = {
                    addOns:         {},
                    autoFocus:      this.$form.attr('data-' + ns + '-autofocus'),
                    button: {
                        selector: this.$form.attr('data-' + ns + '-button-selector') || this.$form.attr('data-' + ns + '-submitbuttons'), // Support backward
                        disabled: this.$form.attr('data-' + ns + '-button-disabled')
                    },
                    control: {
                        valid:   this.$form.attr('data-' + ns + '-control-valid'),
                        invalid: this.$form.attr('data-' + ns + '-control-invalid')
                    },
                    err: {
                        clazz:     this.$form.attr('data-' + ns + '-err-clazz'),
                        container: this.$form.attr('data-' + ns + '-err-container') || this.$form.attr('data-' + ns + '-container'), // Support backward
                        parent:    this.$form.attr('data-' + ns + '-err-parent')
                    },
                    events: {
                        formInit:         this.$form.attr('data-' + ns + '-events-form-init'),
                        formError:        this.$form.attr('data-' + ns + '-events-form-error'),
                        formSuccess:      this.$form.attr('data-' + ns + '-events-form-success'),
                        fieldAdded:       this.$form.attr('data-' + ns + '-events-field-added'),
                        fieldRemoved:     this.$form.attr('data-' + ns + '-events-field-removed'),
                        fieldInit:        this.$form.attr('data-' + ns + '-events-field-init'),
                        fieldError:       this.$form.attr('data-' + ns + '-events-field-error'),
                        fieldSuccess:     this.$form.attr('data-' + ns + '-events-field-success'),
                        fieldStatus:      this.$form.attr('data-' + ns + '-events-field-status'),
                        localeChanged:    this.$form.attr('data-' + ns + '-events-locale-changed'),
                        validatorError:   this.$form.attr('data-' + ns + '-events-validator-error'),
                        validatorSuccess: this.$form.attr('data-' + ns + '-events-validator-success'),
                        validatorIgnored: this.$form.attr('data-' + ns + '-events-validator-ignored')
                    },
                    excluded:      this.$form.attr('data-' + ns + '-excluded'),
                    icon: {
                        valid:      this.$form.attr('data-' + ns + '-icon-valid')      || this.$form.attr('data-' + ns + '-feedbackicons-valid'),      // Support backward
                        invalid:    this.$form.attr('data-' + ns + '-icon-invalid')    || this.$form.attr('data-' + ns + '-feedbackicons-invalid'),    // Support backward
                        validating: this.$form.attr('data-' + ns + '-icon-validating') || this.$form.attr('data-' + ns + '-feedbackicons-validating'), // Support backward
                        feedback:   this.$form.attr('data-' + ns + '-icon-feedback')
                    },
                    live:          this.$form.attr('data-' + ns + '-live'),
                    locale:        this.$form.attr('data-' + ns + '-locale'),
                    message:       this.$form.attr('data-' + ns + '-message'),
                    onError:       this.$form.attr('data-' + ns + '-onerror'),
                    onSuccess:     this.$form.attr('data-' + ns + '-onsuccess'),
                    row: {
                        selector: this.$form.attr('data-' + ns + '-row-selector') || this.$form.attr('data-' + ns + '-group'), // Support backward
                        valid:    this.$form.attr('data-' + ns + '-row-valid'),
                        invalid:  this.$form.attr('data-' + ns + '-row-invalid'),
                        feedback: this.$form.attr('data-' + ns + '-row-feedback')
                    },
                    threshold:     this.$form.attr('data-' + ns + '-threshold'),
                    trigger:       this.$form.attr('data-' + ns + '-trigger'),
                    verbose:       this.$form.attr('data-' + ns + '-verbose'),
                    fields:        {}
                };

            this.$form
                // Disable client side validation in HTML 5
                .attr('novalidate', 'novalidate')
                .addClass(this.options.elementClass)
                // Disable the default submission first
                .on('submit.' + ns, function(e) {
                    e.preventDefault();
                    that.validate();
                })
                .on('click.' + ns, this.options.button.selector, function() {
                    that.$submitButton  = $(this);
                    // The user just click the submit button
                    that._submitIfValid = true;
                });

            if (this.options.declarative === true || this.options.declarative === 'true') {
                // Find all fields which have either "name" or "data-{namespace}-field" attribute
                this.$form
                    .find('[name], [data-' + ns + '-field]')
                    .each(function () {
                        var $field = $(this),
                            field  = $field.attr('name') || $field.attr('data-' + ns + '-field'),
                            opts   = that._parseOptions($field);
                        if (opts) {
                            $field.attr('data-' + ns + '-field', field);
                            options.fields[field] = $.extend({}, opts, options.fields[field]);
                        }
                    });
            }

            this.options = $.extend(true, this.options, options);

            // Normalize the err.parent option
            if ('string' === typeof this.options.err.parent) {
                this.options.err.parent = new RegExp(this.options.err.parent);
            }

            // Support backward
            if (this.options.container) {
                this.options.err.container = this.options.container;
                delete this.options.container;
            }
            if (this.options.feedbackIcons) {
                this.options.icon = $.extend(true, this.options.icon, this.options.feedbackIcons);
                delete this.options.feedbackIcons;
            }
            if (this.options.group) {
                this.options.row.selector = this.options.group;
                delete this.options.group;
            }
            if (this.options.submitButtons) {
                this.options.button.selector = this.options.submitButtons;
                delete this.options.submitButtons;
            }

            // If the locale is not found, reset it to default one
            if (!FormValidation.I18n[this.options.locale]) {
                this.options.locale = $.fn.formValidation.DEFAULT_OPTIONS.locale;
            }

            // Parse the add-on options from HTML attributes
            if (this.options.declarative === true || this.options.declarative === 'true') {
                this.options = $.extend(true, this.options, { addOns: this._parseAddOnOptions() });
            }

            // When pressing Enter on any field in the form, the first submit button will do its job.
            // The form then will be submitted.
            // I create a first hidden submit button
            this.$hiddenButton = $('<button/>')
                                    .attr('type', 'submit')
                                    .prependTo(this.$form)
                                    .addClass('fv-hidden-submit')
                                    .css({ display: 'none', width: 0, height: 0 });

            this.$form
                .on('click.' +  this._namespace, '[type="submit"]', function(e) {
                    // #746: Check if the button click handler returns false
                    if (!e.isDefaultPrevented()) {
                        var $target = $(e.target),
                            // The button might contain HTML tag
                            $button = $target.is('[type="submit"]') ? $target.eq(0) : $target.parent('[type="submit"]').eq(0);

                        // Don't perform validation when clicking on the submit button/input
                        // which aren't defined by the 'button.selector' option
                        if (that.options.button.selector && !$button.is(that.options.button.selector) && !$button.is(that.$hiddenButton)) {
                            that.$form.off('submit.' + that._namespace).submit();
                        }
                    }
                });

            for (var field in this.options.fields) {
                this._initField(field);
            }

            // Init the add-ons
            for (var addOn in this.options.addOns) {
                if ('function' === typeof FormValidation.AddOn[addOn].init) {
                    FormValidation.AddOn[addOn].init(this, this.options.addOns[addOn]);
                }
            }

            this.$form.trigger($.Event(this.options.events.formInit), {
                bv: this,   // Support backward
                fv: this,
                options: this.options
            });

            // Prepare the events
            if (this.options.onSuccess) {
                this.$form.on(this.options.events.formSuccess, function(e) {
                    FormValidation.Helper.call(that.options.onSuccess, [e]);
                });
            }
            if (this.options.onError) {
                this.$form.on(this.options.events.formError, function(e) {
                    FormValidation.Helper.call(that.options.onError, [e]);
                });
            }
        },

        /**
         * Init field
         *
         * @param {String|jQuery} field The field name or field element
         */
        _initField: function(field) {
            var ns     = this._namespace,
                fields = $([]);
            switch (typeof field) {
                case 'object':
                    fields = field;
                    field  = field.attr('data-' + ns + '-field');
                    break;
                case 'string':
                    fields = this.getFieldElements(field);
                    fields.attr('data-' + ns + '-field', field);
                    break;
                default:
                    break;
            }

            // We don't need to validate non-existing fields
            if (fields.length === 0) {
                return;
            }

            if (this.options.fields[field] === null || this.options.fields[field].validators === null) {
                return;
            }

            var validatorName;
            for (validatorName in this.options.fields[field].validators) {
                if (!FormValidation.Validator[validatorName]) {
                    delete this.options.fields[field].validators[validatorName];
                }
            }
            if (this.options.fields[field].enabled === null) {
                this.options.fields[field].enabled = true;
            }

            var that      = this,
                total     = fields.length,
                type      = fields.attr('type'),
                updateAll = (total === 1) || ('radio' === type) || ('checkbox' === type),
                trigger   = this._getFieldTrigger(fields.eq(0)),
                events    = $.map(trigger, function(item) {
                    return item + '.update.' + ns;
                }).join(' ');

            for (var i = 0; i < total; i++) {
                var $field    = fields.eq(i),
                    row       = this.options.fields[field].row || this.options.row.selector,
                    $parent   = $field.closest(row),
                    // Allow user to indicate where the error messages are shown
                    // Support backward
                    container = ('function' === typeof (this.options.fields[field].container || this.options.fields[field].err || this.options.err.container))
                                ? (this.options.fields[field].container || this.options.fields[field].err || this.options.err.container).call(this, $field, this)
                                : (this.options.fields[field].container || this.options.fields[field].err || this.options.err.container),
                    $message  = (container && container !== 'tooltip' && container !== 'popover') ? $(container) : this._getMessageContainer($field, row);

                if (container && container !== 'tooltip' && container !== 'popover') {
                    $message.addClass(this.options.err.clazz);
                }

                // Remove all error messages and feedback icons
                $message.find('.' + this.options.err.clazz.split(' ').join('.') + '[data-' + ns + '-validator][data-' + ns + '-for="' + field + '"]').remove();
                $parent.find('i[data-' + ns + '-icon-for="' + field + '"]').remove();

                // Whenever the user change the field value, mark it as not validated yet
                $field.off(events).on(events, function() {
                    that.updateStatus($(this), that.STATUS_NOT_VALIDATED);
                });

                // Create help block elements for showing the error messages
                $field.data(ns + '.messages', $message);
                for (validatorName in this.options.fields[field].validators) {
                    $field.data(ns + '.result.' + validatorName, this.STATUS_NOT_VALIDATED);

                    if (!updateAll || i === total - 1) {
                        $('<small/>')
                            .css('display', 'none')
                            .addClass(this.options.err.clazz)
                            .attr('data-' + ns + '-validator', validatorName)
                            .attr('data-' + ns + '-for', field)
                            .attr('data-' + ns + '-result', this.STATUS_NOT_VALIDATED)
                            .html(this._getMessage(field, validatorName))
                            .appendTo($message);
                    }

                    // Init the validator
                    if ('function' === typeof FormValidation.Validator[validatorName].init) {
                        FormValidation.Validator[validatorName].init(this, $field, this.options.fields[field].validators[validatorName]);
                    }
                }

                // Prepare the feedback icons
                if (this.options.fields[field].icon !== false && this.options.fields[field].icon !== 'false'
                    && this.options.icon
                    && this.options.icon.valid && this.options.icon.invalid && this.options.icon.validating
                    && (!updateAll || i === total - 1))
                {
                    // $parent.removeClass(this.options.row.valid).removeClass(this.options.row.invalid).addClass(this.options.row.feedback);
                    // Keep error messages which are populated from back-end
                    $parent.addClass(this.options.row.feedback);
                    var $icon = $('<i/>')
                                    .css('display', 'none')
                                    .addClass(this.options.icon.feedback)
                                    .attr('data-' + ns + '-icon-for', field)
                                    .insertAfter($field);

                    // Store the icon as a data of field element
                    (!updateAll ? $field : fields).data(ns + '.icon', $icon);

                    if ('tooltip' === container || 'popover' === container) {
                        (!updateAll ? $field : fields)
                            .on(this.options.events.fieldError, function() {
                                $parent.addClass('fv-has-tooltip');
                            })
                            .on(this.options.events.fieldSuccess, function() {
                                $parent.removeClass('fv-has-tooltip');
                            });

                        $field
                            // Show tooltip/popover message when field gets focus
                            .off('focus.container.' + ns)
                            .on('focus.container.' + ns, function() {
                                that._showTooltip($field, container);
                            })
                            // and hide them when losing focus
                            .off('blur.container.' + ns)
                            .on('blur.container.' + ns, function() {
                                that._hideTooltip($field, container);
                            });
                    }

                    if ('string' === typeof this.options.fields[field].icon && this.options.fields[field].icon !== 'true') {
                        $icon.appendTo($(this.options.fields[field].icon));
                    } else {
                        this._fixIcon($field, $icon);
                    }
                }
            }

            // Prepare the events
            fields
                .on(this.options.events.fieldSuccess, function(e, data) {
                    var onSuccess = that.getOptions(data.field, null, 'onSuccess');
                    if (onSuccess) {
                        FormValidation.Helper.call(onSuccess, [e, data]);
                    }
                })
                .on(this.options.events.fieldError, function(e, data) {
                    var onError = that.getOptions(data.field, null, 'onError');
                    if (onError) {
                        FormValidation.Helper.call(onError, [e, data]);
                    }
                })
                .on(this.options.events.fieldStatus, function(e, data) {
                    var onStatus = that.getOptions(data.field, null, 'onStatus');
                    if (onStatus) {
                        FormValidation.Helper.call(onStatus, [e, data]);
                    }
                })
                .on(this.options.events.validatorError, function(e, data) {
                    var onError = that.getOptions(data.field, data.validator, 'onError');
                    if (onError) {
                        FormValidation.Helper.call(onError, [e, data]);
                    }
                })
                .on(this.options.events.validatorSuccess, function(e, data) {
                    var onSuccess = that.getOptions(data.field, data.validator, 'onSuccess');
                    if (onSuccess) {
                        FormValidation.Helper.call(onSuccess, [e, data]);
                    }
                });

            // Set live mode
            this.onLiveChange(fields, 'live', function() {
                if (that._exceedThreshold($(this))) {
                    that.validateField($(this));
                }
            });

            fields.trigger($.Event(this.options.events.fieldInit), {
                bv: this,   // Support backward
                fv: this,
                field: field,
                element: fields
            });
        },

        /**
         * Check if the field is excluded.
         * Returning true means that the field will not be validated
         *
         * @param {jQuery} $field The field element
         * @returns {Boolean}
         */
        _isExcluded: function($field) {
            var ns           = this._namespace,
                excludedAttr = $field.attr('data-' + ns + '-excluded'),
                // I still need to check the 'name' attribute while initializing the field
                field        = $field.attr('data-' + ns + '-field') || $field.attr('name');

            switch (true) {
                case (!!field && this.options.fields && this.options.fields[field] && (this.options.fields[field].excluded === 'true' || this.options.fields[field].excluded === true)):
                case (excludedAttr === 'true'):
                case (excludedAttr === ''):
                    return true;

                case (!!field && this.options.fields && this.options.fields[field] && (this.options.fields[field].excluded === 'false' || this.options.fields[field].excluded === false)):
                case (excludedAttr === 'false'):
                    return false;

                case (!!field && this.options.fields && this.options.fields[field] && 'function' === typeof this.options.fields[field].excluded):
                    return this.options.fields[field].excluded.call(this, $field, this);

                case (!!field && this.options.fields && this.options.fields[field] && 'string' === typeof this.options.fields[field].excluded):
                case (excludedAttr):
                    return FormValidation.Helper.call(this.options.fields[field].excluded, [$field, this]);

                default:
                    if (this.options.excluded) {
                        // Convert to array first
                        if ('string' === typeof this.options.excluded) {
                            this.options.excluded = $.map(this.options.excluded.split(','), function(item) {
                                // Trim the spaces
                                return $.trim(item);
                            });
                        }

                        var length = this.options.excluded.length;
                        for (var i = 0; i < length; i++) {
                            if (('string' === typeof this.options.excluded[i] && $field.is(this.options.excluded[i]))
                                || ('function' === typeof this.options.excluded[i] && this.options.excluded[i].call(this, $field, this) === true))
                            {
                                return true;
                            }
                        }
                    }
                    return false;
            }
        },

        /**
         * Get a field changed trigger event
         *
         * @param {jQuery} $field The field element
         * @returns {String[]} The event names triggered on field change
         */
        _getFieldTrigger: function($field) {
            var ns      = this._namespace,
                trigger = $field.data(ns + '.trigger');
            if (trigger) {
                return trigger;
            }

            var type  = $field.attr('type'),
                name  = $field.attr('data-' + ns + '-field'),
                event = ('radio' === type || 'checkbox' === type || 'file' === type || 'SELECT' === $field.get(0).tagName) ? 'change' : this._changeEvent;
            trigger   = ((this.options.fields[name] ? this.options.fields[name].trigger : null) || this.options.trigger || event).split(' ');

            // Since the trigger data is used many times, I need to cache it to use later
            $field.data(ns + '.trigger', trigger);

            return trigger;
        },

        /**
         * Get the error message for given field and validator
         *
         * @param {String} field The field name
         * @param {String} validatorName The validator name
         * @returns {String}
         */
        _getMessage: function(field, validatorName) {
            if (!this.options.fields[field] || !FormValidation.Validator[validatorName]
                || !this.options.fields[field].validators || !this.options.fields[field].validators[validatorName])
            {
                return '';
            }

            switch (true) {
                case !!this.options.fields[field].validators[validatorName].message:
                    return this.options.fields[field].validators[validatorName].message;
                case !!this.options.fields[field].message:
                    return this.options.fields[field].message;
                case (!!FormValidation.I18n[this.options.locale] && !!FormValidation.I18n[this.options.locale][validatorName] && !!FormValidation.I18n[this.options.locale][validatorName]['default']):
                    return FormValidation.I18n[this.options.locale][validatorName]['default'];
                default:
                    return this.options.message;
            }
        },

        /**
         * Get the element to place the error messages
         *
         * @param {jQuery} $field The field element
         * @param {String} row
         * @returns {jQuery}
         */
        _getMessageContainer: function($field, row) {
            if (!this.options.err.parent) {
                throw new Error('The err.parent option is not defined');
            }

            var $parent = $field.parent();
            if ($parent.is(row)) {
                return $parent;
            }

            var cssClasses = $parent.attr('class');
            if (!cssClasses) {
                return this._getMessageContainer($parent, row);
            }

            if (this.options.err.parent.test(cssClasses)) {
                return $parent;
            }

            return this._getMessageContainer($parent, row);
        },

        /**
         * Parse the add-on options from HTML attributes
         *
         * @returns {Object}
         */
        _parseAddOnOptions: function() {
            var ns     = this._namespace,
                names  = this.$form.attr('data-' + ns + '-addons'),
                addOns = this.options.addOns || {};

            if (names) {
                names = names.replace(/\s/g, '').split(',');
                for (var i = 0; i < names.length; i++) {
                    if (!addOns[names[i]]) {
                        addOns[names[i]] = {};
                    }
                }
            }

            // Try to parse each add-on options
            var addOn, attrMap, attr, option;
            for (addOn in addOns) {
                if (!FormValidation.AddOn[addOn]) {
                    // Add-on is not found
                    delete addOns[addOn];
                    continue;
                }

                attrMap = FormValidation.AddOn[addOn].html5Attributes;
                if (attrMap) {
                    for (attr in attrMap) {
                        option = this.$form.attr('data-' + ns + '-addons-' + addOn.toLowerCase() + '-' + attr.toLowerCase());
                        if (option) {
                            addOns[addOn][attrMap[attr]] = option;
                        }
                    }
                }
            }

            return addOns;
        },

        /**
         * Parse the validator options from HTML attributes
         *
         * @param {jQuery} $field The field element
         * @returns {Object}
         */
        _parseOptions: function($field) {
            var ns         = this._namespace,
                field      = $field.attr('name') || $field.attr('data-' + ns + '-field'),
                validators = {},
                validator,
                v,          // Validator name
                attrName,
                enabled,
                optionName,
                optionAttrName,
                optionValue,
                html5AttrName,
                html5AttrMap;

            for (v in FormValidation.Validator) {
                validator    = FormValidation.Validator[v];
                attrName     = 'data-' + ns + '-' + v.toLowerCase(),
                enabled      = $field.attr(attrName) + '';
                html5AttrMap = ('function' === typeof validator.enableByHtml5) ? validator.enableByHtml5($field) : null;

                if ((html5AttrMap && enabled !== 'false')
                    || (html5AttrMap !== true && ('' === enabled || 'true' === enabled || attrName === enabled.toLowerCase())))
                {
                    // Try to parse the options via attributes
                    validator.html5Attributes = $.extend({}, {
                                                    message: 'message',
                                                    onerror: 'onError',
                                                    onsuccess: 'onSuccess',
                                                    transformer: 'transformer'
                                                }, validator.html5Attributes);
                    validators[v] = $.extend({}, html5AttrMap === true ? {} : html5AttrMap, validators[v]);

                    for (html5AttrName in validator.html5Attributes) {
                        optionName  = validator.html5Attributes[html5AttrName];
                        optionAttrName = 'data-' + ns + '-' + v.toLowerCase() + '-' + html5AttrName,
                        optionValue = $field.attr(optionAttrName);
                        if (optionValue) {
                            if ('true' === optionValue || optionAttrName === optionValue.toLowerCase()) {
                                optionValue = true;
                            } else if ('false' === optionValue) {
                                optionValue = false;
                            }
                            validators[v][optionName] = optionValue;
                        }
                    }
                }
            }

            var opts = {
                    autoFocus:   $field.attr('data-' + ns + '-autofocus'),
                    err:         $field.attr('data-' + ns + '-err-container') || $field.attr('data-' + ns + '-container'), // Support backward
                    excluded:    $field.attr('data-' + ns + '-excluded'),
                    icon:        $field.attr('data-' + ns + '-icon') || $field.attr('data-' + ns + '-feedbackicons') || (this.options.fields && this.options.fields[field] ? this.options.fields[field].feedbackIcons : null), // Support backward
                    message:     $field.attr('data-' + ns + '-message'),
                    onError:     $field.attr('data-' + ns + '-onerror'),
                    onStatus:    $field.attr('data-' + ns + '-onstatus'),
                    onSuccess:   $field.attr('data-' + ns + '-onsuccess'),
                    row:         $field.attr('data-' + ns + '-row') || $field.attr('data-' + ns + '-group') || (this.options.fields && this.options.fields[field] ? this.options.fields[field].group : null), // Support backward
                    selector:    $field.attr('data-' + ns + '-selector'),
                    threshold:   $field.attr('data-' + ns + '-threshold'),
                    transformer: $field.attr('data-' + ns + '-transformer'),
                    trigger:     $field.attr('data-' + ns + '-trigger'),
                    verbose:     $field.attr('data-' + ns + '-verbose'),
                    validators:  validators
                },
                emptyOptions    = $.isEmptyObject(opts),        // Check if the field options are set using HTML attributes
                emptyValidators = $.isEmptyObject(validators);  // Check if the field validators are set using HTML attributes

            if (!emptyValidators || (!emptyOptions && this.options.fields && this.options.fields[field])) {
                opts.validators = validators;
                return opts;
            } else {
                return null;
            }
        },

        /**
         * Called when all validations are completed
         */
        _submit: function() {
            var isValid = this.isValid();
            if (isValid === null) {
                return;
            }

            var eventType = isValid ? this.options.events.formSuccess : this.options.events.formError,
                e         = $.Event(eventType);

            this.$form.trigger(e);

            // Call default handler
            // Check if whether the submit button is clicked
            if (this.$submitButton) {
                isValid ? this._onSuccess(e) : this._onError(e);
            }
        },

        // ~~~~~~
        // Events
        // ~~~~~~

        /**
         * The default handler of error.form.fv event.
         * It will be called when there is a invalid field
         *
         * @param {jQuery.Event} e The jQuery event object
         */
        _onError: function(e) {
            if (e.isDefaultPrevented()) {
                return;
            }

            if ('submitted' === this.options.live) {
                // Enable live mode
                this.options.live = 'enabled';

                var that = this;
                for (var field in this.options.fields) {
                    (function(f) {
                        var fields  = that.getFieldElements(f);
                        if (fields.length) {
                            that.onLiveChange(fields, 'live', function() {
                                if (that._exceedThreshold($(this))) {
                                    that.validateField($(this));
                                }
                            });
                        }
                    })(field);
                }
            }

            // Determined the first invalid field which will be focused on automatically
            var ns = this._namespace;
            for (var i = 0; i < this.$invalidFields.length; i++) {
                var $field    = this.$invalidFields.eq(i),
                    autoFocus = this.isOptionEnabled($field.attr('data-' + ns + '-field'), 'autoFocus');
                if (autoFocus) {
                    // Focus the field
                    $field.focus();
                    break;
                }
            }
        },

        /**
         * Called after validating a field element
         *
         * @param {jQuery} $field The field element
         * @param {String} [validatorName] The validator name
         */
        _onFieldValidated: function($field, validatorName) {
            var ns            = this._namespace,
                field         = $field.attr('data-' + ns + '-field'),
                validators    = this.options.fields[field].validators,
                counter       = {},
                numValidators = 0,
                data          = {
                    bv: this,   // Support backward
                    fv: this,
                    field: field,
                    element: $field,
                    validator: validatorName,
                    result: $field.data(ns + '.response.' + validatorName)
                };

            // Trigger an event after given validator completes
            if (validatorName) {
                switch ($field.data(ns + '.result.' + validatorName)) {
                    case this.STATUS_INVALID:
                        $field.trigger($.Event(this.options.events.validatorError), data);
                        break;
                    case this.STATUS_VALID:
                        $field.trigger($.Event(this.options.events.validatorSuccess), data);
                        break;
                    case this.STATUS_IGNORED:
                        $field.trigger($.Event(this.options.events.validatorIgnored), data);
                        break;
                    default:
                        break;
                }
            }

            counter[this.STATUS_NOT_VALIDATED] = 0;
            counter[this.STATUS_VALIDATING]    = 0;
            counter[this.STATUS_INVALID]       = 0;
            counter[this.STATUS_VALID]         = 0;
            counter[this.STATUS_IGNORED]       = 0;

            for (var v in validators) {
                if (validators[v].enabled === false) {
                    continue;
                }

                numValidators++;
                var result = $field.data(ns + '.result.' + v);
                if (result) {
                    counter[result]++;
                }
            }

            // The sum of valid fields now also include ignored fields
            if (counter[this.STATUS_VALID] + counter[this.STATUS_IGNORED] === numValidators) {
                // Remove from the list of invalid fields
                this.$invalidFields = this.$invalidFields.not($field);

                $field.trigger($.Event(this.options.events.fieldSuccess), data);
            }
            // If all validators are completed and there is at least one validator which doesn't pass
            else if ((counter[this.STATUS_NOT_VALIDATED] === 0 || !this.isOptionEnabled(field, 'verbose')) && counter[this.STATUS_VALIDATING] === 0 && counter[this.STATUS_INVALID] > 0) {
                // Add to the list of invalid fields
                this.$invalidFields = this.$invalidFields.add($field);

                $field.trigger($.Event(this.options.events.fieldError), data);
            }
        },

        /**
         * The default handler of success.form.fv event.
         * It will be called when all the fields are valid
         *
         * @param {jQuery.Event} e The jQuery event object
         */
        _onSuccess: function(e) {
            if (e.isDefaultPrevented()) {
                return;
            }

            // Submit the form
            this.disableSubmitButtons(true).defaultSubmit();
        },

        // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
        // Abstract methods
        // Need to be implemented by sub-class that supports specific framework
        // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

        /**
         * Specific framework might need to adjust the icon position
         *
         * @param {jQuery} $field The field element
         * @param {jQuery} $icon The icon element
         */
        _fixIcon: function($field, $icon) {
        },

        /**
         * Create a tooltip or popover
         * It will be shown when focusing on the field
         *
         * @param {jQuery} $field The field element
         * @param {String} message The message
         * @param {String} type Can be 'tooltip' or 'popover'
         */
        _createTooltip: function($field, message, type) {
        },

        /**
         * Destroy the tooltip or popover
         *
         * @param {jQuery} $field The field element
         * @param {String} type Can be 'tooltip' or 'popover'
         */
        _destroyTooltip: function($field, type) {
        },

        /**
         * Hide a tooltip or popover
         *
         * @param {jQuery} $field The field element
         * @param {String} type Can be 'tooltip' or 'popover'
         */
        _hideTooltip: function($field, type) {
        },

        /**
         * Show a tooltip or popover
         *
         * @param {jQuery} $field The field element
         * @param {String} type Can be 'tooltip' or 'popover'
         */
        _showTooltip: function($field, type) {
        },

        // ~~~~~~~~~~~~~~
        // Public methods
        // ~~~~~~~~~~~~~~

        /**
         * Submit the form using default submission.
         * It also does not perform any validations when submitting the form
         */
        defaultSubmit: function() {
            var ns = this._namespace;
            if (this.$submitButton) {
                // Create hidden input to send the submit buttons
                $('<input/>')
                    .attr({
                        'type': 'hidden',
                        name: this.$submitButton.attr('name')
                    })
                    .attr('data-' + ns + '-submit-hidden', '')
                    .val(this.$submitButton.val())
                    .appendTo(this.$form);
            }

            // Submit form
            this.$form.off('submit.' + ns).submit();
        },

        /**
         * Disable/enable submit buttons
         *
         * @param {Boolean} disabled Can be true or false
         * @returns {FormValidation.Base}
         */
        disableSubmitButtons: function(disabled) {
            if (!disabled) {
                this.$form
                    .find(this.options.button.selector)
                        .removeAttr('disabled')
                        .removeClass(this.options.button.disabled);
            } else if (this.options.live !== 'disabled') {
                // Don't disable if the live validating mode is disabled
                this.$form
                    .find(this.options.button.selector)
                        .attr('disabled', 'disabled')
                        .addClass(this.options.button.disabled);
            }

            return this;
        },

        /**
         * Retrieve the field elements by given name
         *
         * @param {String} field The field name
         * @returns {null|jQuery[]}
         */
        getFieldElements: function(field) {
            if (!this._cacheFields[field]) {
                if (this.options.fields[field] && this.options.fields[field].selector) {
                    // Look for the field inside the form first
                    var f = this.$form.find(this.options.fields[field].selector);
                    // If not found, search in entire document
                    this._cacheFields[field] = f.length ? f : $(this.options.fields[field].selector);
                } else {
                    this._cacheFields[field] = this.$form.find('[name="' + field + '"]');
                }
            }

            return this._cacheFields[field];
        },

        /**
         * Get the field value after applying transformer
         *
         * @param {String|jQuery} field The field name or field element
         * @param {String} validatorName The validator name
         * @returns {String}
         */
        getFieldValue: function(field, validatorName) {
            var $field, ns = this._namespace;
            if ('string' === typeof field) {
                $field = this.getFieldElements(field);
                if ($field.length === 0) {
                    return null;
                }
            } else {
                $field = field;
                field  = $field.attr('data-' + ns + '-field');
            }

            if (!field || !this.options.fields[field]) {
                return $field.val();
            }

            var transformer = (this.options.fields[field].validators && this.options.fields[field].validators[validatorName]
                                ? this.options.fields[field].validators[validatorName].transformer : null)
                                || this.options.fields[field].transformer;
            return transformer ? FormValidation.Helper.call(transformer, [$field, validatorName, this]) : $field.val();
        },

        /**
         * Get the namespace
         *
         * @returns {String}
         */
        getNamespace: function() {
            return this._namespace;
        },

        /**
         * Get the field options
         *
         * @param {String|jQuery} [field] The field name or field element. If it is not set, the method returns the form options
         * @param {String} [validator] The name of validator. It null, the method returns form options
         * @param {String} [option] The option name
         * @return {String|Object}
         */
        getOptions: function(field, validator, option) {
            var ns = this._namespace;
            if (!field) {
                return option ? this.options[option] : this.options;
            }
            if ('object' === typeof field) {
                field = field.attr('data-' + ns + '-field');
            }
            if (!this.options.fields[field]) {
                return null;
            }

            var options = this.options.fields[field];
            if (!validator) {
                return option ? options[option] : options;
            }
            if (!options.validators || !options.validators[validator]) {
                return null;
            }

            return option ? options.validators[validator][option] : options.validators[validator];
        },

        /**
         * Get the validating result of field
         *
         * @param {String|jQuery} field The field name or field element
         * @param {String} validatorName The validator name
         * @returns {String} The status. Can be 'NOT_VALIDATED', 'VALIDATING', 'INVALID', 'VALID' or 'IGNORED'
         */
        getStatus: function(field, validatorName) {
            var ns = this._namespace;
            switch (typeof field) {
                case 'object':
                    return field.data(ns + '.result.' + validatorName);
                case 'string':
                /* falls through */
                default:
                    return this.getFieldElements(field).eq(0).data(ns + '.result.' + validatorName);
            }
        },

        /**
         * Check whether or not a field option is enabled
         *
         * @param {String} field The field name
         * @param {String} option The option name, "verbose", "autoFocus", for example
         * @returns {Boolean}
         */
        isOptionEnabled: function(field, option) {
            if (this.options.fields[field] && (this.options.fields[field][option] === 'true' || this.options.fields[field][option] === true)) {
                return true;
            }
            if (this.options.fields[field] && (this.options.fields[field][option] === 'false' || this.options.fields[field][option] === false)) {
                return false;
            }
            return this.options[option] === 'true' || this.options[option] === true;
        },

        /**
         * Check the form validity
         *
         * @returns {Boolean|null} Returns one of three values
         * - true, if all fields are valid
         * - false, if there is one invalid field
         * - null, if there is at least one field which is not validated yet or being validated
         */
        isValid: function() {
            for (var field in this.options.fields) {
                var isValidField = this.isValidField(field);
                if (isValidField === null) {
                    return null;
                }
                if (isValidField === false) {
                    return false;
                }
            }

            return true;
        },

        /**
         * Check if all fields inside a given container are valid.
         * It's useful when working with a wizard-like such as tab, collapse
         *
         * @param {String|jQuery} container The container selector or element
         * @returns {Boolean|null} Returns one of three values
         * - true, if all fields inside the container are valid
         * - false, if there is one invalid field inside the container
         * - null, if the container consists of at least one field which is not validated yet or being validated
         */
        isValidContainer: function(container) {
            var that       = this,
                ns         = this._namespace,
                fields     = [],
                $container = ('string' === typeof container) ? $(container) : container;
            if ($container.length === 0) {
                return true;
            }

            $container.find('[data-' + ns + '-field]').each(function() {
                var $field = $(this);
                if (!that._isExcluded($field)) {
                    fields.push($field);
                }
            });

            var total = fields.length;
            for (var i = 0; i < total; i++) {
                var $f      = fields[i],
                    field   = $f.attr('data-' + ns + '-field'),
                    $errors = $f.data(ns + '.messages')
                                .find('.' + this.options.err.clazz.split(' ').join('.') + '[data-' + ns + '-validator][data-' + ns + '-for="' + field + '"]');

                if ($errors.filter('[data-' + ns + '-result="' + this.STATUS_INVALID + '"]').length > 0) {
                    return false;
                }

                // If the field is not validated
                if ($errors.filter('[data-' + ns + '-result="' + this.STATUS_NOT_VALIDATED + '"]').length > 0
                    || $errors.filter('[data-' + ns + '-result="' + this.STATUS_VALIDATING + '"]').length > 0)
                {
                    return null;
                }
            }

            return true;
        },

        /**
         * Check if the field is valid or not
         *
         * @param {String|jQuery} field The field name or field element
         * @returns {Boolean|null} Returns one of three values
         * - true, if the field passes all validators
         * - false, if the field doesn't pass any validator
         * - null, if there is at least one validator which isn't validated yet or being validated
         */
        isValidField: function(field) {
            var ns     = this._namespace,
                fields = $([]);
            switch (typeof field) {
                case 'object':
                    fields = field;
                    field  = field.attr('data-' + ns + '-field');
                    break;
                case 'string':
                    fields = this.getFieldElements(field);
                    break;
                default:
                    break;
            }
            if (fields.length === 0 || !this.options.fields[field] || this.options.fields[field].enabled === false) {
                return true;
            }

            var type  = fields.attr('type'),
                total = ('radio' === type || 'checkbox' === type) ? 1 : fields.length,
                $field, validatorName, status;
            for (var i = 0; i < total; i++) {
                $field = fields.eq(i);
                if (this._isExcluded($field)) {
                    continue;
                }

                for (validatorName in this.options.fields[field].validators) {
                    if (this.options.fields[field].validators[validatorName].enabled === false) {
                        continue;
                    }

                    status = $field.data(ns + '.result.' + validatorName);
                    if (status === this.STATUS_VALIDATING || status === this.STATUS_NOT_VALIDATED) {
                        return null;
                    } else if (status === this.STATUS_INVALID) {
                        return false;
                    }
                }
            }

            return true;
        },

        /**
         * Detach a handler function for a field live change event
         *
         * @param {jQuery[]} $fields The field elements
         * @param {String} namespace The event namespace
         * @returns {FormValidation.Base}
         */
        offLiveChange: function($fields, namespace) {
            if ($fields === null || $fields.length === 0) {
                return this;
            }

            var ns      = this._namespace,
                trigger = this._getFieldTrigger($fields.eq(0)),
                events  = $.map(trigger, function(item) {
                    return item + '.' + namespace + '.' + ns;
                }).join(' ');

            $fields.off(events);
            return this;
        },

        /**
         * Attach a handler function for a field live change event
         *
         * @param {jQuery[]} $fields The field elements
         * @param {String} namespace The event namespace
         * @param {Function} handler The handler function
         * @returns {FormValidation.Base}
         */
        onLiveChange: function($fields, namespace, handler) {
            if ($fields === null || $fields.length === 0) {
                return this;
            }

            var ns      = this._namespace,
                trigger = this._getFieldTrigger($fields.eq(0)),
                events  = $.map(trigger, function(item) {
                    return item + '.' + namespace + '.' + ns;
                }).join(' ');

            switch (this.options.live) {
                case 'submitted':
                    break;
                case 'disabled':
                    $fields.off(events);
                    break;
                case 'enabled':
                /* falls through */
                default:
                    $fields.off(events).on(events, function(e) {
                        handler.apply(this, arguments);
                    });
                    break;
            }

            return this;
        },

        /**
         * Update the error message
         *
         * @param {String|jQuery} field The field name or field element
         * @param {String} validator The validator name
         * @param {String} message The message
         * @returns {FormValidation.Base}
         */
        updateMessage: function(field, validator, message) {
            var that    = this,
                ns      = this._namespace,
                $fields = $([]);
            switch (typeof field) {
                case 'object':
                    $fields = field;
                    field   = field.attr('data-' + ns + '-field');
                    break;
                case 'string':
                    $fields = this.getFieldElements(field);
                    break;
                default:
                    break;
            }

            $fields.each(function() {
                $(this)
                    .data(ns + '.messages')
                    .find('.' + that.options.err.clazz + '[data-' + ns + '-validator="' + validator + '"][data-' + ns + '-for="' + field + '"]').html(message);
            });

            return this;
        },

        /**
         * Update all validating results of field
         *
         * @param {String|jQuery} field The field name or field element
         * @param {String} status The status. Can be 'NOT_VALIDATED', 'VALIDATING', 'INVALID', 'VALID' or 'IGNORED'
         * @param {String} [validatorName] The validator name. If null, the method updates validity result for all validators
         * @returns {FormValidation.Base}
         */
        updateStatus: function(field, status, validatorName) {
            var ns     = this._namespace,
                fields = $([]);
            switch (typeof field) {
                case 'object':
                    fields = field;
                    field  = field.attr('data-' + ns + '-field');
                    break;
                case 'string':
                    fields = this.getFieldElements(field);
                    break;
                default:
                    break;
            }

            if (!field || !this.options.fields[field]) {
                return this;
            }

            if (status === this.STATUS_NOT_VALIDATED) {
                // Reset the flag
                // To prevent the form from doing submit when a deferred validator returns true while typing
                this._submitIfValid = false;
            }

            var that  = this,
                type  = fields.attr('type'),
                row   = this.options.fields[field].row || this.options.row.selector,
                total = ('radio' === type || 'checkbox' === type) ? 1 : fields.length;

            for (var i = 0; i < total; i++) {
                var $field       = fields.eq(i);
                if (this._isExcluded($field)) {
                    continue;
                }

                var $parent      = $field.closest(row),
                    $message     = $field.data(ns + '.messages'),
                    $allErrors   = $message.find('.' + this.options.err.clazz.split(' ').join('.') + '[data-' + ns + '-validator][data-' + ns + '-for="' + field + '"]'),
                    $errors      = validatorName ? $allErrors.filter('[data-' + ns + '-validator="' + validatorName + '"]') : $allErrors,
                    $icon        = $field.data(ns + '.icon'),
                    // Support backward
                    container    = ('function' === typeof (this.options.fields[field].container || this.options.fields[field].err || this.options.err.container))
                                    ? (this.options.fields[field].container || this.options.fields[field].err || this.options.err.container).call(this, $field, this)
                                    : (this.options.fields[field].container || this.options.fields[field].err || this.options.err.container),
                    isValidField = null,
                    isValidating,
                    isNotValidated;

                // Update status
                if (validatorName) {
                    $field.data(ns + '.result.' + validatorName, status);
                } else {
                    for (var v in this.options.fields[field].validators) {
                        $field.data(ns + '.result.' + v, status);
                    }
                }

                // Show/hide error elements and feedback icons
                $errors.attr('data-' + ns + '-result', status);

                switch (status) {
                    case this.STATUS_VALIDATING:
                        isValidField = null;
                        this.disableSubmitButtons(true);
                        $field.removeClass(this.options.control.valid).removeClass(this.options.control.invalid);
                        $parent.removeClass(this.options.row.valid).removeClass(this.options.row.invalid);
                        if ($icon) {
                            $icon.removeClass(this.options.icon.valid).removeClass(this.options.icon.invalid).addClass(this.options.icon.validating).show();
                        }
                        break;

                    case this.STATUS_INVALID:
                        isValidField = false;
                        this.disableSubmitButtons(true);
                        $field.removeClass(this.options.control.valid).addClass(this.options.control.invalid);
                        $parent.removeClass(this.options.row.valid).addClass(this.options.row.invalid);
                        if ($icon) {
                            $icon.removeClass(this.options.icon.valid).removeClass(this.options.icon.validating).addClass(this.options.icon.invalid).show();
                        }
                        break;

                    case this.STATUS_VALID:
                    case this.STATUS_IGNORED:       // Treat ignored fields like they are valid with some specialties
                        isValidating   = ($allErrors.filter('[data-' + ns + '-result="' + this.STATUS_VALIDATING +'"]').length > 0);
                        isNotValidated = ($allErrors.filter('[data-' + ns + '-result="' + this.STATUS_NOT_VALIDATED +'"]').length > 0);

                        // If the field is valid (passes all validators)
                        isValidField   = (isValidating || isNotValidated)     // There are some validators that have not done
                                       ? null
                                       : ($allErrors.filter('[data-' + ns + '-result="' + this.STATUS_VALID +'"]').length
                                        + $allErrors.filter('[data-' + ns + '-result="' + this.STATUS_IGNORED +'"]').length === $allErrors.length); // All validators are completed

                        $field.removeClass(this.options.control.valid).removeClass(this.options.control.invalid);

                        if (isValidField === true) {
                            this.disableSubmitButtons(this.isValid() === false);
                            if (status === this.STATUS_VALID) {
                                $field.addClass(this.options.control.valid);
                            }
                        } else if (isValidField === false) {
                            this.disableSubmitButtons(true);
                            if (status === this.STATUS_VALID) {
                                $field.addClass(this.options.control.invalid);
                            }
                        }

                        if ($icon) {
                            $icon.removeClass(this.options.icon.invalid).removeClass(this.options.icon.validating).removeClass(this.options.icon.valid);
                            if (status === this.STATUS_VALID) {
                                $icon.addClass(isValidField === null
                                        ? '' : (isValidField ? this.options.icon.valid : (isValidating ? this.options.icon.validating : this.options.icon.invalid)))
                                     .show();
                            }
                        }

                        var isValidContainer = this.isValidContainer($parent);
                        if (isValidContainer !== null) {
                            $parent.removeClass(this.options.row.valid).removeClass(this.options.row.invalid);

                            if (status === this.STATUS_VALID || $allErrors.length > 1) {
                                $parent.addClass(isValidContainer ? this.options.row.valid : this.options.row.invalid);
                            }
                        }
                        break;

                    case this.STATUS_NOT_VALIDATED:
                    /* falls through */
                    default:
                        isValidField = null;
                        this.disableSubmitButtons(false);
                        $field.removeClass(this.options.control.valid).removeClass(this.options.control.invalid);
                        $parent.removeClass(this.options.row.valid).removeClass(this.options.row.invalid);
                        if ($icon) {
                            $icon.removeClass(this.options.icon.valid).removeClass(this.options.icon.invalid).removeClass(this.options.icon.validating).hide();
                        }
                        break;
                }

                if ($icon && ('tooltip' === container || 'popover' === container)) {
                    (isValidField === false)
                        // Only show the first error message
                        ? this._createTooltip($field, $allErrors.filter('[data-' + ns + '-result="' + that.STATUS_INVALID + '"]').eq(0).html(), container)
                        : this._destroyTooltip($field, container);
                } else {
                    (status === this.STATUS_INVALID) ? $errors.show() : $errors.hide();
                }

                // Trigger an event
                $field.trigger($.Event(this.options.events.fieldStatus), {
                    bv: this,   // Support backward
                    fv: this,
                    field: field,
                    element: $field,
                    status: status
                });
                this._onFieldValidated($field, validatorName);
            }

            return this;
        },

        /**
         * Validate the form
         *
         * @returns {FormValidation.Base}
         */
        validate: function() {
            if ($.isEmptyObject(this.options.fields)) {
                this._submit();
                return this;
            }
            this.disableSubmitButtons(true);

            this._submitIfValid = false;
            for (var field in this.options.fields) {
                this.validateField(field);
            }

            this._submit();
            this._submitIfValid = true;

            return this;
        },

        /**
         * Validate given field
         *
         * @param {String|jQuery} field The field name or field element
         * @returns {FormValidation.Base}
         */
        validateField: function(field) {
            var ns     = this._namespace,
                fields = $([]);
            switch (typeof field) {
                case 'object':
                    fields = field;
                    field  = field.attr('data-' + ns + '-field');
                    break;
                case 'string':
                    fields = this.getFieldElements(field);
                    break;
                default:
                    break;
            }

            if (fields.length === 0 || !this.options.fields[field] || this.options.fields[field].enabled === false) {
                return this;
            }

            var that       = this,
                type       = fields.attr('type'),
                total      = ('radio' === type || 'checkbox' === type) ? 1 : fields.length,
                updateAll  = ('radio' === type || 'checkbox' === type),
                validators = this.options.fields[field].validators,
                verbose    = this.isOptionEnabled(field, 'verbose'),
                validatorName,
                validateResult;

            for (var i = 0; i < total; i++) {
                var $field = fields.eq(i);
                if (this._isExcluded($field)) {
                    continue;
                }

                var stop = false;
                for (validatorName in validators) {
                    if ($field.data(ns + '.dfs.' + validatorName)) {
                        $field.data(ns + '.dfs.' + validatorName).reject();
                    }
                    if (stop) {
                        break;
                    }

                    // Don't validate field if it is already done
                    var result = $field.data(ns + '.result.' + validatorName);
                    if (result === this.STATUS_VALID || result === this.STATUS_INVALID) {
                        this._onFieldValidated($field, validatorName);
                        continue;
                    } else if (validators[validatorName].enabled === false) {
                        this.updateStatus(updateAll ? field : $field, this.STATUS_VALID, validatorName);
                        continue;
                    }

                    $field.data(ns + '.result.' + validatorName, this.STATUS_VALIDATING);
                    validateResult = FormValidation.Validator[validatorName].validate(this, $field, validators[validatorName]);

                    // validateResult can be a $.Deferred object ...
                    if ('object' === typeof validateResult && validateResult.resolve) {
                        this.updateStatus(updateAll ? field : $field, this.STATUS_VALIDATING, validatorName);
                        $field.data(ns + '.dfs.' + validatorName, validateResult);

                        validateResult.done(function($f, v, response) {
                            // v is validator name
                            $f.removeData(ns + '.dfs.' + v).data(ns + '.response.' + v, response);
                            if (response.message) {
                                that.updateMessage($f, v, response.message);
                            }

                            that.updateStatus(updateAll ? $f.attr('data-' + ns + '-field') : $f,
                                              response.valid === true ? that.STATUS_VALID : (response.valid === false ? that.STATUS_INVALID : that.STATUS_IGNORED),
                                              v);

                            if (response.valid && that._submitIfValid === true) {
                                // If a remote validator returns true and the form is ready to submit, then do it
                                that._submit();
                            } else if (response.valid === false && !verbose) {
                                stop = true;
                            }
                        });
                    }
                    // ... or object { valid: true/false/null, message: 'dynamic message', otherKey: value, ... }
                    else if ('object' === typeof validateResult && validateResult.valid !== undefined) {
                        $field.data(ns + '.response.' + validatorName, validateResult);
                        if (validateResult.message) {
                            this.updateMessage(updateAll ? field : $field, validatorName, validateResult.message);
                        }
                        this.updateStatus(updateAll ? field : $field,
                                          validateResult.valid === true ? this.STATUS_VALID : (validateResult.valid === false ? this.STATUS_INVALID : this.STATUS_IGNORED),
                                          validatorName);
                        if (validateResult.valid === false && !verbose) {
                            break;
                        }
                    }
                    // ... or a boolean value
                    else if ('boolean' === typeof validateResult) {
                        $field.data(ns + '.response.' + validatorName, validateResult);
                        this.updateStatus(updateAll ? field : $field, validateResult ? this.STATUS_VALID : this.STATUS_INVALID, validatorName);
                        if (!validateResult && !verbose) {
                            break;
                        }
                    }
                    // ... or null/undefined
                    // to indicate that the field should be ignored for current validation
                    else if (null === validateResult || undefined === validateResult) {
                        $field.data(ns + '.response.' + validatorName, validateResult);
                        this.updateStatus(updateAll ? field : $field, this.STATUS_IGNORED, validatorName);
                    }
                }
            }

            return this;
        },

        // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
        // Useful APIs which aren't used internally
        // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

        /**
         * Add a new field
         *
         * @param {String|jQuery} field The field name or field element
         * @param {Object} [options] The validator rules
         * @returns {FormValidation.Base}
         */
        addField: function(field, options) {
            var ns     = this._namespace,
                fields = $([]);
            switch (typeof field) {
                case 'object':
                    fields = field;
                    field  = field.attr('data-' + ns + '-field') || field.attr('name');
                    break;
                case 'string':
                    delete this._cacheFields[field];
                    fields = this.getFieldElements(field);
                    break;
                default:
                    break;
            }

            fields.attr('data-' + ns + '-field', field);

            var type  = fields.attr('type'),
                total = ('radio' === type || 'checkbox' === type) ? 1 : fields.length;

            for (var i = 0; i < total; i++) {
                var $field = fields.eq(i);

                // Try to parse the options from HTML attributes
                var opts = this._parseOptions($field);
                opts = (opts === null) ? options : $.extend(true, opts, options);

                this.options.fields[field] = $.extend(true, this.options.fields[field], opts);

                // Update the cache
                this._cacheFields[field] = this._cacheFields[field] ? this._cacheFields[field].add($field) : $field;

                // Init the element
                this._initField(('checkbox' === type || 'radio' === type) ? field : $field);
            }

            this.disableSubmitButtons(false);
            // Trigger an event
            this.$form.trigger($.Event(this.options.events.fieldAdded), {
                field: field,
                element: fields,
                options: this.options.fields[field]
            });

            return this;
        },

        /**
         * Destroy the plugin
         * It will remove all error messages, feedback icons and turn off the events
         */
        destroy: function() {
            var ns = this._namespace, i, field, fields, $field, validator, $icon, row;

            // Destroy the validators first
            for (field in this.options.fields) {
                fields = this.getFieldElements(field);
                for (i = 0; i < fields.length; i++) {
                    $field = fields.eq(i);
                    for (validator in this.options.fields[field].validators) {
                        if ($field.data(ns + '.dfs.' + validator)) {
                            $field.data(ns + '.dfs.' + validator).reject();
                        }
                        $field.removeData(ns + '.result.' + validator)
                              .removeData(ns + '.response.' + validator)
                              .removeData(ns + '.dfs.' + validator);

                        // Destroy the validator
                        if ('function' === typeof FormValidation.Validator[validator].destroy) {
                            FormValidation.Validator[validator].destroy(this, $field, this.options.fields[field].validators[validator]);
                        }
                    }
                }
            }

            // Remove messages and icons
            for (field in this.options.fields) {
                fields = this.getFieldElements(field);
                row    = this.options.fields[field].row || this.options.row.selector;
                for (i = 0; i < fields.length; i++) {
                    $field = fields.eq(i);
                    $field
                        // Remove all error messages
                        .data(ns + '.messages')
                            .find('.' + this.options.err.clazz.split(' ').join('.') + '[data-' + ns + '-validator][data-' + ns + '-for="' + field + '"]').remove().end()
                            .end()
                        .removeData(ns + '.messages')
                        // Remove feedback classes
                        .closest(row)
                            .removeClass(this.options.row.valid)
                            .removeClass(this.options.row.invalid)
                            .removeClass(this.options.row.feedback)
                            .end()
                        // Turn off events
                        .off('.' + ns)
                        .removeAttr('data-' + ns + '-field');

                    // Remove feedback icons, tooltip/popover container
                    // Support backward
                    var container = ('function' === typeof (this.options.fields[field].container || this.options.fields[field].err || this.options.err.container))
                                    ? (this.options.fields[field].container || this.options.fields[field].err || this.options.err.container).call(this, $field, this)
                                    : (this.options.fields[field].container || this.options.fields[field].err || this.options.err.container);
                    if ('tooltip' === container || 'popover' === container) {
                        this._destroyTooltip($field, container);
                    }

                    $icon = $field.data(ns + '.icon');
                    if ($icon) {
                        $icon.remove();
                    }
                    $field.removeData(ns + '.icon')
                          // It's safe to remove trigger data here, because it might be used when destroying the validator
                          .removeData(ns + '.trigger');
                }
            }

            // Destroy the add-ons
            for (var addOn in this.options.addOns) {
                if ('function' === typeof FormValidation.AddOn[addOn].destroy) {
                    FormValidation.AddOn[addOn].destroy(this, this.options.addOns[addOn]);
                }
            }

            this.disableSubmitButtons(false);   // Enable submit buttons
            this.$hiddenButton.remove();        // Remove the hidden button

            this.$form
                .removeClass(this.options.elementClass)
                .off('.' + ns)
                .removeData('bootstrapValidator')   // Support backward
                .removeData('formValidation')
                // Remove generated hidden elements
                .find('[data-' + ns + '-submit-hidden]').remove().end()
                .find('[type="submit"]')
                    .off('click.' + ns);
        },

        /**
         * Enable/Disable all validators to given field
         *
         * @param {String} field The field name
         * @param {Boolean} enabled Enable/Disable field validators
         * @param {String} [validatorName] The validator name. If null, all validators will be enabled/disabled
         * @returns {FormValidation.Base}
         */
        enableFieldValidators: function(field, enabled, validatorName) {
            var validators = this.options.fields[field].validators;

            // Enable/disable particular validator
            if (validatorName
                && validators
                && validators[validatorName] && validators[validatorName].enabled !== enabled)
            {
                this.options.fields[field].validators[validatorName].enabled = enabled;
                this.updateStatus(field, this.STATUS_NOT_VALIDATED, validatorName);
            }
            // Enable/disable all validators
            else if (!validatorName && this.options.fields[field].enabled !== enabled) {
                this.options.fields[field].enabled = enabled;
                for (var v in validators) {
                    this.enableFieldValidators(field, enabled, v);
                }
            }

            return this;
        },

        /**
         * Some validators have option which its value is dynamic.
         * For example, the zipCode validator has the country option which might be changed dynamically by a select element.
         *
         * @param {jQuery|String} field The field name or element
         * @param {String|Function} option The option which can be determined by:
         * - a string
         * - name of field which defines the value
         * - name of function which returns the value
         * - a function returns the value
         *
         * The callback function has the format of
         *      callback: function(value, validator, $field) {
         *          // value is the value of field
         *          // validator is the BootstrapValidator instance
         *          // $field is the field element
         *      }
         *
         * @returns {String}
         */
        getDynamicOption: function(field, option) {
            var $field = ('string' === typeof field) ? this.getFieldElements(field) : field,
                value  = $field.val();

            // Option can be determined by
            // ... a function
            if ('function' === typeof option) {
                return FormValidation.Helper.call(option, [value, this, $field]);
            }
            // ... value of other field
            else if ('string' === typeof option) {
                var $f = this.getFieldElements(option);
                if ($f.length) {
                    return $f.val();
                }
                // ... return value of callback
                else {
                    return FormValidation.Helper.call(option, [value, this, $field]) || option;
                }
            }

            return null;
        },

        /**
         * Get the form element
         *
         * @returns {jQuery}
         */
        getForm: function() {
            return this.$form;
        },

        /**
         * Get the list of invalid fields
         *
         * @returns {jQuery[]}
         */
        getInvalidFields: function() {
            return this.$invalidFields;
        },

        /**
         * Get the current locale
         *
         * @return {String}
         */
        getLocale: function() {
            return this.options.locale;
        },

        /**
         * Get the error messages
         *
         * @param {String|jQuery} [field] The field name or field element
         * If the field is not defined, the method returns all error messages of all fields
         * @param {String} [validator] The name of validator
         * If the validator is not defined, the method returns error messages of all validators
         * @returns {String[]}
         */
        getMessages: function(field, validator) {
            var that     = this,
                ns       = this._namespace,
                messages = [],
                $fields  = $([]);

            switch (true) {
                case (field && 'object' === typeof field):
                    $fields = field;
                    break;
                case (field && 'string' === typeof field):
                    var f = this.getFieldElements(field);
                    if (f.length > 0) {
                        var type = f.attr('type');
                        $fields = ('radio' === type || 'checkbox' === type) ? f.eq(0) : f;
                    }
                    break;
                default:
                    $fields = this.$invalidFields;
                    break;
            }

            var filter = validator ? '[data-' + ns + '-validator="' + validator + '"]' : '';
            $fields.each(function() {
                messages = messages.concat(
                    $(this)
                        .data(ns + '.messages')
                        .find('.' + that.options.err.clazz + '[data-' + ns + '-for="' + $(this).attr('data-' + ns + '-field') + '"][data-' + ns + '-result="' + that.STATUS_INVALID + '"]' + filter)
                        .map(function() {
                            var v = $(this).attr('data-' + ns + '-validator'),
                                f = $(this).attr('data-' + ns + '-for');
                            return (that.options.fields[f].validators[v].enabled === false) ? '' : $(this).html();
                        })
                        .get()
                );
            });

            return messages;
        },

        /**
         * Returns the clicked submit button
         *
         * @returns {jQuery}
         */
        getSubmitButton: function() {
            return this.$submitButton;
        },

        /**
         * Remove a given field
         *
         * @param {String|jQuery} field The field name or field element
         * @returns {FormValidation.Base}
         */
        removeField: function(field) {
            var ns     = this._namespace,
                fields = $([]);
            switch (typeof field) {
                case 'object':
                    fields = field;
                    field  = field.attr('data-' + ns + '-field') || field.attr('name');
                    fields.attr('data-' + ns + '-field', field);
                    break;
                case 'string':
                    fields = this.getFieldElements(field);
                    break;
                default:
                    break;
            }

            if (fields.length === 0) {
                return this;
            }

            var type  = fields.attr('type'),
                total = ('radio' === type || 'checkbox' === type) ? 1 : fields.length;

            for (var i = 0; i < total; i++) {
                var $field = fields.eq(i);

                // Remove from the list of invalid fields
                this.$invalidFields = this.$invalidFields.not($field);

                // Update the cache
                this._cacheFields[field] = this._cacheFields[field].not($field);
            }

            if (!this._cacheFields[field] || this._cacheFields[field].length === 0) {
                delete this.options.fields[field];
            }
            if ('checkbox' === type || 'radio' === type) {
                this._initField(field);
            }

            this.disableSubmitButtons(false);
            // Trigger an event
            this.$form.trigger($.Event(this.options.events.fieldRemoved), {
                field: field,
                element: fields
            });

            return this;
        },

        /**
         * Reset given field
         *
         * @param {String|jQuery} field The field name or field element
         * @param {Boolean} [resetValue] If true, the method resets field value to empty or remove checked/selected attribute (for radio/checkbox)
         * @returns {FormValidation.Base}
         */
        resetField: function(field, resetValue) {
            var ns      = this._namespace,
                $fields = $([]);
            switch (typeof field) {
                case 'object':
                    $fields = field;
                    field   = field.attr('data-' + ns + '-field');
                    break;
                case 'string':
                    $fields = this.getFieldElements(field);
                    break;
                default:
                    break;
            }

            var total = $fields.length;
            if (this.options.fields[field]) {
                for (var i = 0; i < total; i++) {
                    for (var validator in this.options.fields[field].validators) {
                        $fields.eq(i).removeData(ns + '.dfs.' + validator);
                    }
                }
            }

            if (resetValue) {
                var type = $fields.attr('type');
                ('radio' === type || 'checkbox' === type) ? $fields.prop('checked', false).removeAttr('selected') : $fields.val('');
            }

            // Mark field as not validated yet
            this.updateStatus(field, this.STATUS_NOT_VALIDATED);

            return this;
        },

        /**
         * Reset the form
         *
         * @param {Boolean} [resetValue] If true, the method resets field value to empty or remove checked/selected attribute (for radio/checkbox)
         * @returns {FormValidation.Base}
         */
        resetForm: function(resetValue) {
            for (var field in this.options.fields) {
                this.resetField(field, resetValue);
            }

            this.$invalidFields = $([]);
            this.$submitButton  = null;

            // Enable submit buttons
            this.disableSubmitButtons(false);

            return this;
        },

        /**
         * Revalidate given field
         * It's used when you need to revalidate the field which its value is updated by other plugin
         *
         * @param {String|jQuery} field The field name of field element
         * @returns {FormValidation.Base}
         */
        revalidateField: function(field) {
            this.updateStatus(field, this.STATUS_NOT_VALIDATED)
                .validateField(field);

            return this;
        },

        /**
         * Set the locale
         *
         * @param {String} locale The locale in format of countrycode_LANGUAGECODE
         * @returns {FormValidation.Base}
         */
        setLocale: function(locale) {
            this.options.locale = locale;
            this.$form.trigger($.Event(this.options.events.localeChanged), {
                locale: locale,
                bv: this,   // Support backward
                fv: this
            });

            return this;
        },

        /**
         * Update the option of a specific validator
         *
         * @param {String|jQuery} field The field name or field element
         * @param {String} validator The validator name
         * @param {String} option The option name
         * @param {String} value The value to set
         * @returns {FormValidation.Base}
         */
        updateOption: function(field, validator, option, value) {
            var ns = this._namespace;
            if ('object' === typeof field) {
                field = field.attr('data-' + ns + '-field');
            }
            if (this.options.fields[field] && this.options.fields[field].validators[validator]) {
                this.options.fields[field].validators[validator][option] = value;
                this.updateStatus(field, this.STATUS_NOT_VALIDATED, validator);
            }

            return this;
        },

        /**
         * Validate given container
         * It can be used with isValidContainer() when you want to work with wizard form
         *
         * @param {String|jQuery} container The container selector or element
         * @returns {FormValidation.Base}
         */
        validateContainer: function(container) {
            var that       = this,
                ns         = this._namespace,
                fields     = [],
                $container = ('string' === typeof container) ? $(container) : container;
            if ($container.length === 0) {
                return this;
            }

            $container.find('[data-' + ns + '-field]').each(function() {
                var $field = $(this);
                if (!that._isExcluded($field)) {
                    fields.push($field);
                }
            });

            var total = fields.length;
            for (var i = 0; i < total; i++) {
                this.validateField(fields[i]);
            }

            return this;
        }
    };

    // Plugin definition
    $.fn.formValidation = function(option) {
        var params = arguments;
        return this.each(function() {
            var $this   = $(this),
                data    = $this.data('formValidation'),
                options = 'object' === typeof option && option;
            if (!data) {
                var framework = (options.framework || $this.attr('data-fv-framework') || 'bootstrap').toLowerCase(),
                    clazz     = framework.substr(0, 1).toUpperCase() + framework.substr(1);

                if (typeof FormValidation.Framework[clazz] === 'undefined') {
                    throw new Error('The class FormValidation.Framework.' + clazz + ' is not implemented');
                }

                data = new FormValidation.Framework[clazz](this, options);
                $this.addClass('fv-form-' + framework)
                     .data('formValidation', data);
            }

            // Allow to call plugin method
            if ('string' === typeof option) {
                data[option].apply(data, Array.prototype.slice.call(params, 1));
            }
        });
    };

    $.fn.formValidation.Constructor = FormValidation.Base;

    // The default options
    // Sorted in alphabetical order
    $.fn.formValidation.DEFAULT_OPTIONS = {
        // The first invalid field will be focused automatically
        autoFocus: true,

        // Support declarative usage (setting options via HTML 5 attributes)
        // Setting to false can improve the performance
        declarative: true,

        // The form CSS class
        elementClass: 'fv-form',

        // Use custom event name to avoid window.onerror being invoked by jQuery
        // See #630
        events: {
            // Support backward
            formInit: 'init.form.fv',
            formError: 'err.form.fv',
            formSuccess: 'success.form.fv',
            fieldAdded: 'added.field.fv',
            fieldRemoved: 'removed.field.fv',
            fieldInit: 'init.field.fv',
            fieldError: 'err.field.fv',
            fieldSuccess: 'success.field.fv',
            fieldStatus: 'status.field.fv',
            localeChanged: 'changed.locale.fv',
            validatorError: 'err.validator.fv',
            validatorSuccess: 'success.validator.fv',
            validatorIgnored: 'ignored.validator.fv'
        },

        // Indicate fields which won't be validated
        // By default, the plugin will not validate the following kind of fields:
        // - disabled
        // - hidden
        // - invisible
        //
        // The setting consists of jQuery filters. Accept 3 formats:
        // - A string. Use a comma to separate filter
        // - An array. Each element is a filter
        // - An array. Each element can be a callback function
        //      function($field, validator) {
        //          $field is jQuery object representing the field element
        //          validator is the BootstrapValidator instance
        //          return true or false;
        //      }
        //
        // The 3 following settings are equivalent:
        //
        // 1) ':disabled, :hidden, :not(:visible)'
        // 2) [':disabled', ':hidden', ':not(:visible)']
        // 3) [':disabled', ':hidden', function($field) {
        //        return !$field.is(':visible');
        //    }]
        excluded: [':disabled', ':hidden', ':not(:visible)'],

        // Map the field name with validator rules
        fields: null,

        // Live validating option
        // Can be one of 3 values:
        // - enabled: The plugin validates fields as soon as they are changed
        // - disabled: Disable the live validating. The error messages are only shown after the form is submitted
        // - submitted: The live validating is enabled after the form is submitted
        live: 'enabled',

        // Locale in the format of languagecode_COUNTRYCODE
        locale: 'en_US',

        // Default invalid message
        message: 'This value is not valid',

        // The field will not be live validated if its length is less than this number of characters
        threshold: null,

        // Whether to be verbose when validating a field or not.
        // Possible values:
        // - true:  when a field has multiple validators, all of them will be checked, and respectively - if errors occur in
        //          multiple validators, all of them will be displayed to the user
        // - false: when a field has multiple validators, validation for this field will be terminated upon the first encountered error.
        //          Thus, only the very first error message related to this field will be displayed to the user
        verbose: true,

        // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
        // These options mostly are overridden by specific framework
        // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

        button: {
            // The submit buttons selector
            // These buttons will be disabled to prevent the valid form from multiple submissions
            selector: '[type="submit"]',

            // The disabled class
            disabled: ''
        },

        control: {
            // The CSS class for valid control
            valid: '',

            // The CSS class for invalid control
            invalid: ''
        },

        err: {
            // The CSS class of each message element
            clazz: '',

            // The error messages container. It can be:
            // - 'tooltip' if you want to use Bootstrap tooltip to show error messages
            // - 'popover' if you want to use Bootstrap popover to show error messages
            // - a CSS selector indicating the container
            // In the first two cases, since the tooltip/popover should be small enough, the plugin only shows only one error message
            // You also can define the message container for particular field
            container: null,

            // Used to determine where the messages are placed
            parent: null
        },

        // Shows ok/error/loading icons based on the field validity.
        icon: {
            valid: null,
            invalid: null,
            validating: null,
            feedback: ''
        },

        row: {
            // The CSS selector for indicating the element consists of the field
            // You should adjust this option if your form group consists of many fields which not all of them need to be validated
            selector: null,
            valid: '',
            invalid: '',
            feedback: ''
        }
    };
}(jQuery));
;(function($) {
    // Helper methods, which can be used in validator class
    FormValidation.Helper = {
        /**
         * Execute a callback function
         *
         * @param {String|Function} functionName Can be
         * - name of global function
         * - name of namespace function (such as A.B.C)
         * - a function
         * @param {Array} args The callback arguments
         */
        call: function(functionName, args) {
            if ('function' === typeof functionName) {
                return functionName.apply(this, args);
            } else if ('string' === typeof functionName) {
                if ('()' === functionName.substring(functionName.length - 2)) {
                    functionName = functionName.substring(0, functionName.length - 2);
                }
                var ns      = functionName.split('.'),
                    func    = ns.pop(),
                    context = window;
                for (var i = 0; i < ns.length; i++) {
                    context = context[ns[i]];
                }

                return (typeof context[func] === 'undefined') ? null : context[func].apply(this, args);
            }
        },

        /**
         * Validate a date
         *
         * @param {Number} year The full year in 4 digits
         * @param {Number} month The month number
         * @param {Number} day The day number
         * @param {Boolean} [notInFuture] If true, the date must not be in the future
         * @returns {Boolean}
         */
        date: function(year, month, day, notInFuture) {
            if (isNaN(year) || isNaN(month) || isNaN(day)) {
                return false;
            }
            if (day.length > 2 || month.length > 2 || year.length > 4) {
                return false;
            }

            day   = parseInt(day, 10);
            month = parseInt(month, 10);
            year  = parseInt(year, 10);

            if (year < 1000 || year > 9999 || month <= 0 || month > 12) {
                return false;
            }
            var numDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
            // Update the number of days in Feb of leap year
            if (year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0)) {
                numDays[1] = 29;
            }

            // Check the day
            if (day <= 0 || day > numDays[month - 1]) {
                return false;
            }

            if (notInFuture === true) {
                var currentDate  = new Date(),
                    currentYear  = currentDate.getFullYear(),
                    currentMonth = currentDate.getMonth(),
                    currentDay   = currentDate.getDate();
                return (year < currentYear
                || (year === currentYear && month - 1 < currentMonth)
                || (year === currentYear && month - 1 === currentMonth && day < currentDay));
            }

            return true;
        },

        /**
         * Format a string
         * It's used to format the error message
         * format('The field must between %s and %s', [10, 20]) = 'The field must between 10 and 20'
         *
         * @param {String} message
         * @param {Array} parameters
         * @returns {String}
         */
        format: function(message, parameters) {
            if (!$.isArray(parameters)) {
                parameters = [parameters];
            }

            for (var i in parameters) {
                message = message.replace('%s', parameters[i]);
            }

            return message;
        },

        /**
         * Implement Luhn validation algorithm
         * Credit to https://gist.github.com/ShirtlessKirk/2134376
         *
         * @see http://en.wikipedia.org/wiki/Luhn
         * @param {String} value
         * @returns {Boolean}
         */
        luhn: function(value) {
            var length  = value.length,
                mul     = 0,
                prodArr = [[0, 1, 2, 3, 4, 5, 6, 7, 8, 9], [0, 2, 4, 6, 8, 1, 3, 5, 7, 9]],
                sum     = 0;

            while (length--) {
                sum += prodArr[mul][parseInt(value.charAt(length), 10)];
                mul ^= 1;
            }

            return (sum % 10 === 0 && sum > 0);
        },

        /**
         * Implement modulus 11, 10 (ISO 7064) algorithm
         *
         * @param {String} value
         * @returns {Boolean}
         */
        mod11And10: function(value) {
            var check  = 5,
                length = value.length;
            for (var i = 0; i < length; i++) {
                check = (((check || 10) * 2) % 11 + parseInt(value.charAt(i), 10)) % 10;
            }
            return (check === 1);
        },

        /**
         * Implements Mod 37, 36 (ISO 7064) algorithm
         * Usages:
         * mod37And36('A12425GABC1234002M')
         * mod37And36('002006673085', '0123456789')
         *
         * @param {String} value
         * @param {String} [alphabet]
         * @returns {Boolean}
         */
        mod37And36: function(value, alphabet) {
            alphabet = alphabet || '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
            var modulus = alphabet.length,
                length  = value.length,
                check   = Math.floor(modulus / 2);
            for (var i = 0; i < length; i++) {
                check = (((check || modulus) * 2) % (modulus + 1) + alphabet.indexOf(value.charAt(i))) % modulus;
            }
            return (check === 1);
        }
    };
}(jQuery));
;(function($) {
    FormValidation.I18n = $.extend(true, FormValidation.I18n || {}, {
        'en_US': {
            base64: {
                'default': 'Please enter a valid base 64 encoded'
            }
        }
    });

    FormValidation.Validator.base64 = {
        /**
         * Return true if the input value is a base 64 encoded string.
         *
         * @param {FormValidation.Base} validator The validator plugin instance
         * @param {jQuery} $field Field element
         * @param {Object} options Can consist of the following keys:
         * - message: The invalid message
         * @returns {Boolean}
         */
        validate: function(validator, $field, options) {
            var value = validator.getFieldValue($field, 'base64');
            if (value === '') {
                return true;
            }

            return /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{4})$/.test(value);
        }
    };
}(jQuery));
;(function($) {
    FormValidation.I18n = $.extend(true, FormValidation.I18n || {}, {
        'en_US': {
            between: {
                'default': 'Please enter a value between %s and %s',
                notInclusive: 'Please enter a value between %s and %s strictly'
            }
        }
    });

    FormValidation.Validator.between = {
        html5Attributes: {
            message: 'message',
            min: 'min',
            max: 'max',
            inclusive: 'inclusive'
        },

        enableByHtml5: function($field) {
            if ('range' === $field.attr('type')) {
                return {
                    min: $field.attr('min'),
                    max: $field.attr('max')
                };
            }

            return false;
        },

        /**
         * Return true if the input value is between (strictly or not) two given numbers
         *
         * @param {FormValidation.Base} validator The validator plugin instance
         * @param {jQuery} $field Field element
         * @param {Object} options Can consist of the following keys:
         * - min
         * - max
         *
         * The min, max keys define the number which the field value compares to. min, max can be
         *      - A number
         *      - Name of field which its value defines the number
         *      - Name of callback function that returns the number
         *      - A callback function that returns the number
         *
         * - inclusive [optional]: Can be true or false. Default is true
         * - message: The invalid message
         * @returns {Boolean|Object}
         */
        validate: function(validator, $field, options) {
            var value = validator.getFieldValue($field, 'between');
            if (value === '') {
                return true;
            }

			value = this._format(value);
            if (!$.isNumeric(value)) {
                return false;
            }

            var locale   = validator.getLocale(),
                min      = $.isNumeric(options.min) ? options.min : validator.getDynamicOption($field, options.min),
                max      = $.isNumeric(options.max) ? options.max : validator.getDynamicOption($field, options.max),
                minValue = this._format(min),
                maxValue = this._format(max);

            value = parseFloat(value);
			return (options.inclusive === true || options.inclusive === undefined)
                    ? {
                        valid: value >= minValue && value <= maxValue,
                        message: FormValidation.Helper.format(options.message || FormValidation.I18n[locale].between['default'], [min, max])
                    }
                    : {
                        valid: value > minValue  && value <  maxValue,
                        message: FormValidation.Helper.format(options.message || FormValidation.I18n[locale].between.notInclusive, [min, max])
                    };
        },

        _format: function(value) {
            return (value + '').replace(',', '.');
        }
    };
}(jQuery));
;(function($) {
    FormValidation.I18n = $.extend(true, FormValidation.I18n || {}, {
        'en_US': {
            bic: {
                'default': 'Please enter a valid BIC number'
            }
        }
    });

    FormValidation.Validator.bic = {
        /**
         * Validate an Business Identifier Code (BIC), also known as ISO 9362, SWIFT-BIC, SWIFT ID or SWIFT code
         *
         * For more information see http://en.wikipedia.org/wiki/ISO_9362
         *
         * @todo The 5 and 6 characters are an ISO 3166-1 country code, this could also be validated
         * @param {FormValidation.Base} validator The validator plugin instance
         * @param {jQuery} $field Field element
         * @param {Object} options Can consist of the following keys:
         * - message: The invalid message
         * @returns {Object}
         */
        validate: function(validator, $field, options) {
            var value = validator.getFieldValue($field, 'bic');
            if (value === '') {
                return true;
            }
            return /^[a-zA-Z]{6}[a-zA-Z0-9]{2}([a-zA-Z0-9]{3})?$/.test(value);
        }
    };
}(jQuery));
;(function($) {
    FormValidation.Validator.blank = {
        /**
         * Placeholder validator that can be used to display a custom validation message
         * returned from the server
         * Example:
         *
         * (1) a "blank" validator is applied to an input field.
         * (2) data is entered via the UI that is unable to be validated client-side.
         * (3) server returns a 400 with JSON data that contains the field that failed
         *     validation and an associated message.
         * (4) ajax 400 call handler does the following:
         *
         *      bv.updateMessage(field, 'blank', errorMessage);
         *      bv.updateStatus(field, 'INVALID');
         *
         * @see https://github.com/formvalidation/formvalidation/issues/542
         * @see https://github.com/formvalidation/formvalidation/pull/666
         * @param {FormValidation.Base} validator The validator plugin instance
         * @param {jQuery} $field Field element
         * @param {Object} options Can consist of the following keys:
         * - message: The invalid message
         * @returns {Boolean}
         */
        validate: function(validator, $field, options) {
            return true;
        }
    };
}(jQuery));
;(function($) {
    FormValidation.I18n = $.extend(true, FormValidation.I18n || {}, {
        'en_US': {
            callback: {
                'default': 'Please enter a valid value'
            }
        }
    });

    FormValidation.Validator.callback = {
        html5Attributes: {
            message: 'message',
            callback: 'callback'
        },

        /**
         * Return result from the callback method
         *
         * @param {FormValidation.Base} validator The validator plugin instance
         * @param {jQuery} $field Field element
         * @param {Object} options Can consist of the following keys:
         * - callback: The callback method that passes 2 parameters:
         *      callback: function(fieldValue, validator, $field) {
         *          // fieldValue is the value of field
         *          // validator is instance of BootstrapValidator
         *          // $field is the field element
         *      }
         * - message: The invalid message
         * @returns {Deferred}
         */
        validate: function(validator, $field, options) {
            var value  = validator.getFieldValue($field, 'callback'),
                dfd    = new $.Deferred(),
                result = { valid: true };

            if (options.callback) {
                var response = FormValidation.Helper.call(options.callback, [value, validator, $field]);
                result = ('boolean' === typeof response || null === response) ? { valid: response } : response;
            }

            dfd.resolve($field, 'callback', result);
            return dfd;
        }
    };
}(jQuery));
;(function($) {
    FormValidation.I18n = $.extend(true, FormValidation.I18n || {}, {
        'en_US': {
            choice: {
                'default': 'Please enter a valid value',
                less: 'Please choose %s options at minimum',
                more: 'Please choose %s options at maximum',
                between: 'Please choose %s - %s options'
            }
        }
    });

    FormValidation.Validator.choice = {
        html5Attributes: {
            message: 'message',
            min: 'min',
            max: 'max'
        },

        /**
         * Check if the number of checked boxes are less or more than a given number
         *
         * @param {FormValidation.Base} validator The validator plugin instance
         * @param {jQuery} $field Field element
         * @param {Object} options Consists of following keys:
         * - min
         * - max
         *
         * At least one of two keys is required
         * The min, max keys define the number which the field value compares to. min, max can be
         *      - A number
         *      - Name of field which its value defines the number
         *      - Name of callback function that returns the number
         *      - A callback function that returns the number
         *
         * - message: The invalid message
         * @returns {Object}
         */
        validate: function(validator, $field, options) {
            var locale     = validator.getLocale(),
                ns         = validator.getNamespace(),
                numChoices = $field.is('select')
                            ? validator.getFieldElements($field.attr('data-' + ns + '-field')).find('option').filter(':selected').length
                            : validator.getFieldElements($field.attr('data-' + ns + '-field')).filter(':checked').length,
                min        = options.min ? ($.isNumeric(options.min) ? options.min : validator.getDynamicOption($field, options.min)) : null,
                max        = options.max ? ($.isNumeric(options.max) ? options.max : validator.getDynamicOption($field, options.max)) : null,
                isValid    = true,
                message    = options.message || FormValidation.I18n[locale].choice['default'];

            if ((min && numChoices < parseInt(min, 10)) || (max && numChoices > parseInt(max, 10))) {
                isValid = false;
            }

            switch (true) {
                case (!!min && !!max):
                    message = FormValidation.Helper.format(options.message || FormValidation.I18n[locale].choice.between, [parseInt(min, 10), parseInt(max, 10)]);
                    break;

                case (!!min):
                    message = FormValidation.Helper.format(options.message || FormValidation.I18n[locale].choice.less, parseInt(min, 10));
                    break;

                case (!!max):
                    message = FormValidation.Helper.format(options.message || FormValidation.I18n[locale].choice.more, parseInt(max, 10));
                    break;

                default:
                    break;
            }

            return { valid: isValid, message: message };
        }
    };
}(jQuery));
;(function($) {
    FormValidation.I18n = $.extend(true, FormValidation.I18n || {}, {
        'en_US': {
            color: {
                'default': 'Please enter a valid color'
            }
        }
    });

    FormValidation.Validator.color = {
        html5Attributes: {
            message: 'message',
            type: 'type'
        },

        enableByHtml5: function($field) {
            return ('color' === $field.attr('type'));
        },

        SUPPORTED_TYPES: [
            'hex', 'rgb', 'rgba', 'hsl', 'hsla', 'keyword'
        ],

        KEYWORD_COLORS: [
            // Colors start with A
            'aliceblue', 'antiquewhite', 'aqua', 'aquamarine', 'azure',
            // B
            'beige', 'bisque', 'black', 'blanchedalmond', 'blue', 'blueviolet', 'brown', 'burlywood',
            // C
            'cadetblue', 'chartreuse', 'chocolate', 'coral', 'cornflowerblue', 'cornsilk', 'crimson', 'cyan',
            // D
            'darkblue', 'darkcyan', 'darkgoldenrod', 'darkgray', 'darkgreen', 'darkgrey', 'darkkhaki', 'darkmagenta',
            'darkolivegreen', 'darkorange', 'darkorchid', 'darkred', 'darksalmon', 'darkseagreen', 'darkslateblue',
            'darkslategray', 'darkslategrey', 'darkturquoise', 'darkviolet', 'deeppink', 'deepskyblue', 'dimgray',
            'dimgrey', 'dodgerblue',
            // F
            'firebrick', 'floralwhite', 'forestgreen', 'fuchsia',
            // G
            'gainsboro', 'ghostwhite', 'gold', 'goldenrod', 'gray', 'green', 'greenyellow', 'grey',
            // H
            'honeydew', 'hotpink',
            // I
            'indianred', 'indigo', 'ivory',
            // K
            'khaki',
            // L
            'lavender', 'lavenderblush', 'lawngreen', 'lemonchiffon', 'lightblue', 'lightcoral', 'lightcyan',
            'lightgoldenrodyellow', 'lightgray', 'lightgreen', 'lightgrey', 'lightpink', 'lightsalmon', 'lightseagreen',
            'lightskyblue', 'lightslategray', 'lightslategrey', 'lightsteelblue', 'lightyellow', 'lime', 'limegreen',
            'linen',
            // M
            'magenta', 'maroon', 'mediumaquamarine', 'mediumblue', 'mediumorchid', 'mediumpurple', 'mediumseagreen',
            'mediumslateblue', 'mediumspringgreen', 'mediumturquoise', 'mediumvioletred', 'midnightblue', 'mintcream',
            'mistyrose', 'moccasin',
            // N
            'navajowhite', 'navy',
            // O
            'oldlace', 'olive', 'olivedrab', 'orange', 'orangered', 'orchid',
            // P
            'palegoldenrod', 'palegreen', 'paleturquoise', 'palevioletred', 'papayawhip', 'peachpuff', 'peru', 'pink',
            'plum', 'powderblue', 'purple',
            // R
            'red', 'rosybrown', 'royalblue',
            // S
            'saddlebrown', 'salmon', 'sandybrown', 'seagreen', 'seashell', 'sienna', 'silver', 'skyblue', 'slateblue',
            'slategray', 'slategrey', 'snow', 'springgreen', 'steelblue',
            // T
            'tan', 'teal', 'thistle', 'tomato', 'transparent', 'turquoise',
            // V
            'violet',
            // W
            'wheat', 'white', 'whitesmoke',
            // Y
            'yellow', 'yellowgreen'
        ],

        /**
         * Return true if the input value is a valid color
         *
         * @param {FormValidation.Base} validator The validator plugin instance
         * @param {jQuery} $field Field element
         * @param {Object} options Can consist of the following keys:
         * - message: The invalid message
         * - type: The array of valid color types
         * @returns {Boolean}
         */
        validate: function(validator, $field, options) {
            var value = validator.getFieldValue($field, 'color');
            if (value === '') {
                return true;
            }

            // Only accept 6 hex character values due to the HTML 5 spec
            // See http://www.w3.org/TR/html-markup/input.color.html#input.color.attrs.value
            if (this.enableByHtml5($field)) {
                return /^#[0-9A-F]{6}$/i.test(value);
            }

            var types = options.type || this.SUPPORTED_TYPES;
            if (!$.isArray(types)) {
                types = types.replace(/s/g, '').split(',');
            }

            var method,
                type,
                isValid = false;

            for (var i = 0; i < types.length; i++) {
                type    = types[i];
                method  = '_' + type.toLowerCase();
                isValid = isValid || this[method](value);
                if (isValid) {
                    return true;
                }
            }

            return false;
        },

        _hex: function(value) {
            return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(value);
        },

        _hsl: function(value) {
            return /^hsl\((\s*(-?\d+)\s*,)(\s*(\b(0?\d{1,2}|100)\b%)\s*,)(\s*(\b(0?\d{1,2}|100)\b%)\s*)\)$/.test(value);
        },

        _hsla: function(value) {
            return /^hsla\((\s*(-?\d+)\s*,)(\s*(\b(0?\d{1,2}|100)\b%)\s*,){2}(\s*(0?(\.\d+)?|1(\.0+)?)\s*)\)$/.test(value);
        },

        _keyword: function(value) {
            return $.inArray(value, this.KEYWORD_COLORS) >= 0;
        },

        _rgb: function(value) {
            var regexInteger = /^rgb\((\s*(\b([01]?\d{1,2}|2[0-4]\d|25[0-5])\b)\s*,){2}(\s*(\b([01]?\d{1,2}|2[0-4]\d|25[0-5])\b)\s*)\)$/,
                regexPercent = /^rgb\((\s*(\b(0?\d{1,2}|100)\b%)\s*,){2}(\s*(\b(0?\d{1,2}|100)\b%)\s*)\)$/;
            return regexInteger.test(value) || regexPercent.test(value);
        },

        _rgba: function(value) {
            var regexInteger = /^rgba\((\s*(\b([01]?\d{1,2}|2[0-4]\d|25[0-5])\b)\s*,){3}(\s*(0?(\.\d+)?|1(\.0+)?)\s*)\)$/,
                regexPercent = /^rgba\((\s*(\b(0?\d{1,2}|100)\b%)\s*,){3}(\s*(0?(\.\d+)?|1(\.0+)?)\s*)\)$/;
            return regexInteger.test(value) || regexPercent.test(value);
        }
    };
}(jQuery));
;(function($) {
    FormValidation.I18n = $.extend(true, FormValidation.I18n || {}, {
        'en_US': {
            creditCard: {
                'default': 'Please enter a valid credit card number'
            }
        }
    });

    FormValidation.Validator.creditCard = {
        /**
         * Return true if the input value is valid credit card number
         * Based on https://gist.github.com/DiegoSalazar/4075533
         *
         * @param {FormValidation.Base} validator The validator plugin instance
         * @param {jQuery} $field Field element
         * @param {Object} [options] Can consist of the following key:
         * - message: The invalid message
         * @returns {Boolean|Object}
         */
        validate: function(validator, $field, options) {
            var value = validator.getFieldValue($field, 'creditCard');
            if (value === '') {
                return true;
            }

            // Accept only digits, dashes or spaces
            if (/[^0-9-\s]+/.test(value)) {
                return false;
            }
            value = value.replace(/\D/g, '');

            if (!FormValidation.Helper.luhn(value)) {
                return false;
            }

            // Validate the card number based on prefix (IIN ranges) and length
            var cards = {
                AMERICAN_EXPRESS: {
                    length: [15],
                    prefix: ['34', '37']
                },
                DINERS_CLUB: {
                    length: [14],
                    prefix: ['300', '301', '302', '303', '304', '305', '36']
                },
                DINERS_CLUB_US: {
                    length: [16],
                    prefix: ['54', '55']
                },
                DISCOVER: {
                    length: [16],
                    prefix: ['6011', '622126', '622127', '622128', '622129', '62213',
                             '62214', '62215', '62216', '62217', '62218', '62219',
                             '6222', '6223', '6224', '6225', '6226', '6227', '6228',
                             '62290', '62291', '622920', '622921', '622922', '622923',
                             '622924', '622925', '644', '645', '646', '647', '648',
                             '649', '65']
                },
                JCB: {
                    length: [16],
                    prefix: ['3528', '3529', '353', '354', '355', '356', '357', '358']
                },
                LASER: {
                    length: [16, 17, 18, 19],
                    prefix: ['6304', '6706', '6771', '6709']
                },
                MAESTRO: {
                    length: [12, 13, 14, 15, 16, 17, 18, 19],
                    prefix: ['5018', '5020', '5038', '6304', '6759', '6761', '6762', '6763', '6764', '6765', '6766']
                },
                MASTERCARD: {
                    length: [16],
                    prefix: ['51', '52', '53', '54', '55']
                },
                SOLO: {
                    length: [16, 18, 19],
                    prefix: ['6334', '6767']
                },
                UNIONPAY: {
                    length: [16, 17, 18, 19],
                    prefix: ['622126', '622127', '622128', '622129', '62213', '62214',
                             '62215', '62216', '62217', '62218', '62219', '6222', '6223',
                             '6224', '6225', '6226', '6227', '6228', '62290', '62291',
                             '622920', '622921', '622922', '622923', '622924', '622925']
                },
                VISA: {
                    length: [16],
                    prefix: ['4']
                }
            };

            var type, i;
            for (type in cards) {
                for (i in cards[type].prefix) {
                    if (value.substr(0, cards[type].prefix[i].length) === cards[type].prefix[i]     // Check the prefix
                        && $.inArray(value.length, cards[type].length) !== -1)                      // and length
                    {
                        return {
                            valid: true,
                            type: type
                        };
                    }
                }
            }

            return false;
        }
    };
}(jQuery));
;(function($) {
    FormValidation.I18n = $.extend(true, FormValidation.I18n || {}, {
        'en_US': {
            cusip: {
                'default': 'Please enter a valid CUSIP number'
            }
        }
    });

    FormValidation.Validator.cusip = {
        /**
         * Validate a CUSIP number
         * Examples:
         * - Valid: 037833100, 931142103, 14149YAR8, 126650BG6
         * - Invalid: 31430F200, 022615AC2
         *
         * @see http://en.wikipedia.org/wiki/CUSIP
         * @param {FormValidation.Base} validator The validator plugin instance
         * @param {jQuery} $field Field element
         * @param {Object} [options] Can consist of the following keys:
         * - message: The invalid message
         * @returns {Boolean}
         */
        validate: function(validator, $field, options) {
            var value = validator.getFieldValue($field, 'cusip');
            if (value === '') {
                return true;
            }

            value = value.toUpperCase();
            if (!/^[0-9A-Z]{9}$/.test(value)) {
                return false;
            }

            var converted = $.map(value.split(''), function(item) {
                                var code = item.charCodeAt(0);
                                return (code >= 'A'.charCodeAt(0) && code <= 'Z'.charCodeAt(0))
                                            // Replace A, B, C, ..., Z with 10, 11, ..., 35
                                            ? (code - 'A'.charCodeAt(0) + 10)
                                            : item;
                            }),
                length    = converted.length,
                sum       = 0;
            for (var i = 0; i < length - 1; i++) {
                var num = parseInt(converted[i], 10);
                if (i % 2 !== 0) {
                    num *= 2;
                }
                if (num > 9) {
                    num -= 9;
                }
                sum += num;
            }

            sum = (10 - (sum % 10)) % 10;
            return sum === parseInt(converted[length - 1], 10);
        }
    };
}(jQuery));
;(function($) {
    FormValidation.I18n = $.extend(true, FormValidation.I18n || {}, {
        'en_US': {
            cvv: {
                'default': 'Please enter a valid CVV number'
            }
        }
    });

    FormValidation.Validator.cvv = {
        html5Attributes: {
            message: 'message',
            ccfield: 'creditCardField'
        },

        /**
         * Bind the validator on the live change of the credit card field
         *
         * @param {FormValidation.Base} validator The validator plugin instance
         * @param {jQuery} $field Field element
         * @param {Object} options Consists of the following key:
         * - creditCardField: The credit card number field
         */
        init: function(validator, $field, options) {
            if (options.creditCardField) {
                var creditCardField = validator.getFieldElements(options.creditCardField);
                validator.onLiveChange(creditCardField, 'live_cvv', function() {
                    var status = validator.getStatus($field, 'cvv');
                    if (status !== validator.STATUS_NOT_VALIDATED) {
                        validator.revalidateField($field);
                    }
                });
            }
        },

        /**
         * Unbind the validator on the live change of the credit card field
         *
         * @param {FormValidation.Base} validator The validator plugin instance
         * @param {jQuery} $field Field element
         * @param {Object} options Consists of the following key:
         * - creditCardField: The credit card number field
         */
        destroy: function(validator, $field, options) {
            if (options.creditCardField) {
                var creditCardField = validator.getFieldElements(options.creditCardField);
                validator.offLiveChange(creditCardField, 'live_cvv');
            }
        },

        /**
         * Return true if the input value is a valid CVV number.
         *
         * @param {FormValidation.Base} validator The validator plugin instance
         * @param {jQuery} $field Field element
         * @param {Object} options Can consist of the following keys:
         * - creditCardField: The credit card number field. It can be null
         * - message: The invalid message
         * @returns {Boolean}
         */
        validate: function(validator, $field, options) {
            var value = validator.getFieldValue($field, 'cvv');
            if (value === '') {
                return true;
            }

            if (!/^[0-9]{3,4}$/.test(value)) {
                return false;
            }

            if (!options.creditCardField) {
                return true;
            }

            // Get the credit card number
            var creditCard = validator.getFieldElements(options.creditCardField).val();
            if (creditCard === '') {
                return true;
            }
            
            creditCard = creditCard.replace(/\D/g, '');

            // Supported credit card types
            var cards = {
                AMERICAN_EXPRESS: {
                    length: [15],
                    prefix: ['34', '37']
                },
                DINERS_CLUB: {
                    length: [14],
                    prefix: ['300', '301', '302', '303', '304', '305', '36']
                },
                DINERS_CLUB_US: {
                    length: [16],
                    prefix: ['54', '55']
                },
                DISCOVER: {
                    length: [16],
                    prefix: ['6011', '622126', '622127', '622128', '622129', '62213',
                             '62214', '62215', '62216', '62217', '62218', '62219',
                             '6222', '6223', '6224', '6225', '6226', '6227', '6228',
                             '62290', '62291', '622920', '622921', '622922', '622923',
                             '622924', '622925', '644', '645', '646', '647', '648',
                             '649', '65']
                },
                JCB: {
                    length: [16],
                    prefix: ['3528', '3529', '353', '354', '355', '356', '357', '358']
                },
                LASER: {
                    length: [16, 17, 18, 19],
                    prefix: ['6304', '6706', '6771', '6709']
                },
                MAESTRO: {
                    length: [12, 13, 14, 15, 16, 17, 18, 19],
                    prefix: ['5018', '5020', '5038', '6304', '6759', '6761', '6762', '6763', '6764', '6765', '6766']
                },
                MASTERCARD: {
                    length: [16],
                    prefix: ['51', '52', '53', '54', '55']
                },
                SOLO: {
                    length: [16, 18, 19],
                    prefix: ['6334', '6767']
                },
                UNIONPAY: {
                    length: [16, 17, 18, 19],
                    prefix: ['622126', '622127', '622128', '622129', '62213', '62214',
                             '62215', '62216', '62217', '62218', '62219', '6222', '6223',
                             '6224', '6225', '6226', '6227', '6228', '62290', '62291',
                             '622920', '622921', '622922', '622923', '622924', '622925']
                },
                VISA: {
                    length: [16],
                    prefix: ['4']
                }
            };
            var type, i, creditCardType = null;
            for (type in cards) {
                for (i in cards[type].prefix) {
                    if (creditCard.substr(0, cards[type].prefix[i].length) === cards[type].prefix[i]    // Check the prefix
                        && $.inArray(creditCard.length, cards[type].length) !== -1)                     // and length
                    {
                        creditCardType = type;
                        break;
                    }
                }
            }

            return (creditCardType === null)
                        ? false
                        : (('AMERICAN_EXPRESS' === creditCardType) ? (value.length === 4) : (value.length === 3));
        }
    };
}(jQuery));
;(function($) {
    FormValidation.I18n = $.extend(true, FormValidation.I18n || {}, {
        'en_US': {
            date: {
                'default': 'Please enter a valid date',
                min: 'Please enter a date after %s',
                max: 'Please enter a date before %s',
                range: 'Please enter a date in the range %s - %s'
            }
        }
    });

    FormValidation.Validator.date = {
        html5Attributes: {
            message: 'message',
            format: 'format',
            min: 'min',
            max: 'max',
            separator: 'separator'
        },

        /**
         * Return true if the input value is valid date
         *
         * @param {FormValidation.Base} validator The validator plugin instance
         * @param {jQuery} $field Field element
         * @param {Object} options Can consist of the following keys:
         * - message: The invalid message
         * - min: the minimum date
         * - max: the maximum date
         * - separator: Use to separate the date, month, and year.
         * By default, it is /
         * - format: The date format. Default is MM/DD/YYYY
         * The format can be:
         *
         * i) date: Consist of DD, MM, YYYY parts which are separated by the separator option
         * ii) date and time:
         * The time can consist of h, m, s parts which are separated by :
         * ii) date, time and A (indicating AM or PM)
         * @returns {Boolean|Object}
         */
        validate: function(validator, $field, options) {
            var value = validator.getFieldValue($field, 'date');
            if (value === '') {
                return true;
            }

            options.format = options.format || 'MM/DD/YYYY';

            // #683: Force the format to YYYY-MM-DD as the default browser behaviour when using type="date" attribute
            if ($field.attr('type') === 'date') {
                options.format = 'YYYY-MM-DD';
            }

            var locale     = validator.getLocale(),
                message    = options.message || FormValidation.I18n[locale].date['default'],
                formats    = options.format.split(' '),
                dateFormat = formats[0],
                timeFormat = (formats.length > 1) ? formats[1] : null,
                amOrPm     = (formats.length > 2) ? formats[2] : null,
                sections   = value.split(' '),
                date       = sections[0],
                time       = (sections.length > 1) ? sections[1] : null;

            if (formats.length !== sections.length) {
                return {
                    valid: false,
                    message: message
                };
            }

            // Determine the separator
            var separator = options.separator;
            if (!separator) {
                separator = (date.indexOf('/') !== -1)
                            ? '/'
                            : ((date.indexOf('-') !== -1) ? '-' : ((date.indexOf('.') !== -1) ? '.' : null));
            }
            if (separator === null || date.indexOf(separator) === -1) {
                return {
                    valid: false,
                    message: message
                };
            }

            // Determine the date
            date       = date.split(separator);
            dateFormat = dateFormat.split(separator);
            if (date.length !== dateFormat.length) {
                return {
                    valid: false,
                    message: message
                };
            }

            var year  = date[$.inArray('YYYY', dateFormat)],
                month = date[$.inArray('MM', dateFormat)],
                day   = date[$.inArray('DD', dateFormat)];

            if (!year || !month || !day || year.length !== 4) {
                return {
                    valid: false,
                    message: message
                };
            }

            // Determine the time
            var minutes = null, hours = null, seconds = null;
            if (timeFormat) {
                timeFormat = timeFormat.split(':');
                time       = time.split(':');

                if (timeFormat.length !== time.length) {
                    return {
                        valid: false,
                        message: message
                    };
                }

                hours   = time.length > 0 ? time[0] : null;
                minutes = time.length > 1 ? time[1] : null;
                seconds = time.length > 2 ? time[2] : null;

                if (hours === '' || minutes === '' || seconds === '') {
                    return {
                        valid: false,
                        message: message
                    };
                }

                // Validate seconds
                if (seconds) {
                    if (isNaN(seconds) || seconds.length > 2) {
                        return {
                            valid: false,
                            message: message
                        };
                    }
                    seconds = parseInt(seconds, 10);
                    if (seconds < 0 || seconds > 60) {
                        return {
                            valid: false,
                            message: message
                        };
                    }
                }

                // Validate hours
                if (hours) {
                    if (isNaN(hours) || hours.length > 2) {
                        return {
                            valid: false,
                            message: message
                        };
                    }
                    hours = parseInt(hours, 10);
                    if (hours < 0 || hours >= 24 || (amOrPm && hours > 12)) {
                        return {
                            valid: false,
                            message: message
                        };
                    }
                }

                // Validate minutes
                if (minutes) {
                    if (isNaN(minutes) || minutes.length > 2) {
                        return {
                            valid: false,
                            message: message
                        };
                    }
                    minutes = parseInt(minutes, 10);
                    if (minutes < 0 || minutes > 59) {
                        return {
                            valid: false,
                            message: message
                        };
                    }
                }
            }

            // Validate day, month, and year
            var valid     = FormValidation.Helper.date(year, month, day),
                // declare the date, min and max objects
                min       = null,
                max       = null,
                minOption = options.min,
                maxOption = options.max;

            if (minOption) {
                if (isNaN(Date.parse(minOption))) {
                    minOption = validator.getDynamicOption($field, minOption);
                }

                min       = minOption instanceof Date ? minOption : this._parseDate(minOption, dateFormat, separator);
                // In order to avoid displaying a date string like "Mon Dec 08 2014 19:14:12 GMT+0000 (WET)"
                minOption = minOption instanceof Date ? this._formatDate(minOption, options.format) : minOption;
            }

            if (maxOption) {
                if (isNaN(Date.parse(maxOption))) {
                    maxOption = validator.getDynamicOption($field, maxOption);
                }

                max       = maxOption instanceof Date ? maxOption : this._parseDate(maxOption, dateFormat, separator);
                // In order to avoid displaying a date string like "Mon Dec 08 2014 19:14:12 GMT+0000 (WET)"
                maxOption = maxOption instanceof Date ? this._formatDate(maxOption, options.format) : maxOption;
            }

            date = new Date(year, month -1, day, hours, minutes, seconds);

            switch (true) {
                case (minOption && !maxOption && valid):
                    valid   = date.getTime() >= min.getTime();
                    message = options.message || FormValidation.Helper.format(FormValidation.I18n[locale].date.min, minOption);
                    break;

                case (maxOption && !minOption && valid):
                    valid   = date.getTime() <= max.getTime();
                    message = options.message || FormValidation.Helper.format(FormValidation.I18n[locale].date.max, maxOption);
                    break;

                case (maxOption && minOption && valid):
                    valid   = date.getTime() <= max.getTime() && date.getTime() >= min.getTime();
                    message = options.message || FormValidation.Helper.format(FormValidation.I18n[locale].date.range, [minOption, maxOption]);
                    break;

                default:
                    break;
            }

            return {
                valid: valid,
                message: message
            };
        },

        /**
         * Return a date object after parsing the date string
         *
         * @param {String} date   The date string to parse
         * @param {String} format The date format
         * The format can be:
         *   - date: Consist of DD, MM, YYYY parts which are separated by the separator option
         *   - date and time:
         *     The time can consist of h, m, s parts which are separated by :
         * @param {String} separator The separator used to separate the date, month, and year
         * @returns {Date}
         */
        _parseDate: function(date, format, separator) {
            var minutes     = 0, hours = 0, seconds = 0,
                sections    = date.split(' '),
                dateSection = sections[0],
                timeSection = (sections.length > 1) ? sections[1] : null;

            dateSection = dateSection.split(separator);
            var year  = dateSection[$.inArray('YYYY', format)],
                month = dateSection[$.inArray('MM', format)],
                day   = dateSection[$.inArray('DD', format)];
            if (timeSection) {
                timeSection = timeSection.split(':');
                hours       = timeSection.length > 0 ? timeSection[0] : null;
                minutes     = timeSection.length > 1 ? timeSection[1] : null;
                seconds     = timeSection.length > 2 ? timeSection[2] : null;
            }

            return new Date(year, month -1, day, hours, minutes, seconds);
        },

        /**
         * Format date
         *
         * @param {Date} date The date object to format
         * @param {String} format The date format
         * The format can consist of the following tokens:
         *      d       Day of the month without leading zeros (1 through 31)
         *      dd      Day of the month with leading zeros (01 through 31)
         *      m       Month without leading zeros (1 through 12)
         *      mm      Month with leading zeros (01 through 12)
         *      yy      Last two digits of year (for example: 14)
         *      yyyy    Full four digits of year (for example: 2014)
         *      h       Hours without leading zeros (1 through 12)
         *      hh      Hours with leading zeros (01 through 12)
         *      H       Hours without leading zeros (0 through 23)
         *      HH      Hours with leading zeros (00 through 23)
         *      M       Minutes without leading zeros (0 through 59)
         *      MM      Minutes with leading zeros (00 through 59)
         *      s       Seconds without leading zeros (0 through 59)
         *      ss      Seconds with leading zeros (00 through 59)
         * @returns {String}
         */
        _formatDate: function(date, format) {
            format = format
                        .replace(/Y/g, 'y')
                        .replace(/M/g, 'm')
                        .replace(/D/g, 'd')
                        .replace(/:m/g, ':M')
                        .replace(/:mm/g, ':MM')
                        .replace(/:S/, ':s')
                        .replace(/:SS/, ':ss');

            var replacer = {
                d: function(date) {
                    return date.getDate();
                },
                dd: function(date) {
                    var d = date.getDate();
                    return (d < 10) ? '0' + d : d;
                },
                m: function(date) {
                    return date.getMonth() + 1;
                },
                mm: function(date) {
                    var m = date.getMonth() + 1;
                    return m < 10 ? '0' + m : m;
                },
                yy: function(date) {
                    return ('' + date.getFullYear()).substr(2);
                },
                yyyy: function(date) {
                    return date.getFullYear();
                },
                h: function(date) {
                    return date.getHours() % 12 || 12;
                },
                hh: function(date) {
                    var h = date.getHours() % 12 || 12;
                    return h < 10 ? '0' + h : h;
                },
                H: function(date) {
                    return date.getHours();
                },
                HH: function(date) {
                    var H = date.getHours();
                    return H < 10 ? '0' + H : H;
                },
                M: function(date) {
                    return date.getMinutes();
                },
                MM: function(date) {
                    var M = date.getMinutes();
                    return M < 10 ? '0' + M : M;
                },
                s: function(date) {
                    return date.getSeconds();
                },
                ss: function(date) {
                    var s = date.getSeconds();
                    return s < 10 ? '0' + s : s;
                }
            };

            return format.replace(/d{1,4}|m{1,4}|yy(?:yy)?|([HhMs])\1?|"[^"]*"|'[^']*'/g, function(match) {
                return replacer[match] ? replacer[match](date) : match.slice(1, match.length - 1);
            });
        }
    };
}(jQuery));
;(function($) {
    FormValidation.I18n = $.extend(true, FormValidation.I18n || {}, {
        'en_US': {
            different: {
                'default': 'Please enter a different value'
            }
        }
    });

    FormValidation.Validator.different = {
        html5Attributes: {
            message: 'message',
            field: 'field'
        },

        /**
         * Bind the validator on the live change of the field to compare with current one
         *
         * @param {FormValidation.Base} validator The validator plugin instance
         * @param {jQuery} $field Field element
         * @param {Object} options Consists of the following key:
         * - field: The name of field that will be used to compare with current one
         */
        init: function(validator, $field, options) {
            var fields = options.field.split(',');
            for (var i = 0; i < fields.length; i++) {
                var compareWith = validator.getFieldElements(fields[i]);
                validator.onLiveChange(compareWith, 'live_different', function() {
                    var status = validator.getStatus($field, 'different');
                    if (status !== validator.STATUS_NOT_VALIDATED) {
                        validator.revalidateField($field);
                    }
                });
            }
        },

        /**
         * Unbind the validator on the live change of the field to compare with current one
         *
         * @param {FormValidation.Base} validator The validator plugin instance
         * @param {jQuery} $field Field element
         * @param {Object} options Consists of the following key:
         * - field: The name of field that will be used to compare with current one
         */
        destroy: function(validator, $field, options) {
            var fields = options.field.split(',');
            for (var i = 0; i < fields.length; i++) {
                var compareWith = validator.getFieldElements(fields[i]);
                validator.offLiveChange(compareWith, 'live_different');
            }
        },

        /**
         * Return true if the input value is different with given field's value
         *
         * @param {FormValidation.Base} validator The validator plugin instance
         * @param {jQuery} $field Field element
         * @param {Object} options Consists of the following key:
         * - field: The name of field that will be used to compare with current one
         * - message: The invalid message
         * @returns {Boolean}
         */
        validate: function(validator, $field, options) {
            var value = validator.getFieldValue($field, 'different');
            if (value === '') {
                return true;
            }

            var fields  = options.field.split(','),
                isValid = true;

            for (var i = 0; i < fields.length; i++) {
                var compareWith = validator.getFieldElements(fields[i]);
                if (compareWith == null || compareWith.length === 0) {
                    continue;
                }

                var compareValue = validator.getFieldValue(compareWith, 'different');
                if (value === compareValue) {
                    isValid = false;
                } else if (compareValue !== '') {
                    validator.updateStatus(compareWith, validator.STATUS_VALID, 'different');
                }
            }

            return isValid;
        }
    };
}(jQuery));
;(function($) {
    FormValidation.I18n = $.extend(true, FormValidation.I18n || {}, {
        'en_US': {
            digits: {
                'default': 'Please enter only digits'
            }
        }
    });

    FormValidation.Validator.digits = {
        /**
         * Return true if the input value contains digits only
         *
         * @param {FormValidation.Base} validator Validate plugin instance
         * @param {jQuery} $field Field element
         * @param {Object} [options]
         * @returns {Boolean}
         */
        validate: function(validator, $field, options) {
            var value = validator.getFieldValue($field, 'digits');
            if (value === '') {
                return true;
            }

            return /^\d+$/.test(value);
        }
    };
}(jQuery));
;(function($) {
    FormValidation.I18n = $.extend(true, FormValidation.I18n || {}, {
        'en_US': {
            ean: {
                'default': 'Please enter a valid EAN number'
            }
        }
    });

    FormValidation.Validator.ean = {
        /**
         * Validate EAN (International Article Number)
         * Examples:
         * - Valid: 73513537, 9780471117094, 4006381333931
         * - Invalid: 73513536
         *
         * @see http://en.wikipedia.org/wiki/European_Article_Number
         * @param {FormValidation.Base} validator The validator plugin instance
         * @param {jQuery} $field Field element
         * @param {Object} options Can consist of the following keys:
         * - message: The invalid message
         * @returns {Boolean}
         */
        validate: function(validator, $field, options) {
            var value = validator.getFieldValue($field, 'ean');
            if (value === '') {
                return true;
            }

            if (!/^(\d{8}|\d{12}|\d{13})$/.test(value)) {
                return false;
            }

            var length = value.length,
                sum    = 0,
                weight = (length === 8) ? [3, 1] : [1, 3];
            for (var i = 0; i < length - 1; i++) {
                sum += parseInt(value.charAt(i), 10) * weight[i % 2];
            }
            sum = (10 - sum % 10) % 10;
            return (sum + '' === value.charAt(length - 1));
        }
    };
}(jQuery));
;(function($) {
    FormValidation.I18n = $.extend(true, FormValidation.I18n || {}, {
        'en_US': {
            ein: {
                'default': 'Please enter a valid EIN number'
            }
        }
    });

    FormValidation.Validator.ein = {
        // The first two digits are called campus
        // See http://en.wikipedia.org/wiki/Employer_Identification_Number
        // http://www.irs.gov/Businesses/Small-Businesses-&-Self-Employed/How-EINs-are-Assigned-and-Valid-EIN-Prefixes
        CAMPUS: {
            ANDOVER: ['10', '12'],
            ATLANTA: ['60', '67'],
            AUSTIN: ['50', '53'],
            BROOKHAVEN: ['01', '02', '03', '04', '05', '06', '11', '13', '14', '16', '21', '22', '23', '25', '34', '51', '52', '54', '55', '56', '57', '58', '59', '65'],
            CINCINNATI: ['30', '32', '35', '36', '37', '38', '61'],
            FRESNO: ['15', '24'],
            KANSAS_CITY: ['40', '44'],
            MEMPHIS: ['94', '95'],
            OGDEN: ['80', '90'],
            PHILADELPHIA: ['33', '39', '41', '42', '43', '46', '48', '62', '63', '64', '66', '68', '71', '72', '73', '74', '75', '76', '77', '81', '82', '83', '84', '85', '86', '87', '88', '91', '92', '93', '98', '99'],
            INTERNET: ['20', '26', '27', '45', '46'],
            SMALL_BUSINESS_ADMINISTRATION: ['31']
        },

        /**
         * Validate EIN (Employer Identification Number) which is also known as
         * Federal Employer Identification Number (FEIN) or Federal Tax Identification Number
         *
         * @param {FormValidation.Base} validator The validator plugin instance
         * @param {jQuery} $field Field element
         * @param {Object} options Can consist of the following keys:
         * - message: The invalid message
         * @returns {Object|Boolean}
         */
        validate: function(validator, $field, options) {
            var value = validator.getFieldValue($field, 'ein');
            if (value === '') {
                return true;
            }

            if (!/^[0-9]{2}-?[0-9]{7}$/.test(value)) {
                return false;
            }
            // Check the first two digits
            var campus = value.substr(0, 2) + '';
            for (var key in this.CAMPUS) {
                if ($.inArray(campus, this.CAMPUS[key]) !== -1) {
                    return {
                        valid: true,
                        campus: key
                    };
                }
            }

            return false;
        }
    };
}(jQuery));
;(function($) {
    FormValidation.I18n = $.extend(true, FormValidation.I18n || {}, {
        'en_US': {
            emailAddress: {
                'default': 'Please enter a valid email address'
            }
        }
    });

    FormValidation.Validator.emailAddress = {
        html5Attributes: {
            message: 'message',
            multiple: 'multiple',
            separator: 'separator'
        },

        enableByHtml5: function($field) {
            return ('email' === $field.attr('type'));
        },

        /**
         * Return true if and only if the input value is a valid email address
         *
         * @param {FormValidation.Base} validator Validate plugin instance
         * @param {jQuery} $field Field element
         * @param {Object} [options]
         * - multiple: Allow multiple email addresses, separated by a comma or semicolon; default is false.
         * - separator: Regex for character or characters expected as separator between addresses; default is comma /[,;]/, i.e. comma or semicolon.
         * @returns {Boolean}
         */
        validate: function(validator, $field, options) {
            var value = validator.getFieldValue($field, 'emailAddress');
            if (value === '') {
                return true;
            }

            // Email address regular expression
            // http://stackoverflow.com/questions/46155/validate-email-address-in-javascript
            var emailRegExp   = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
                allowMultiple = options.multiple === true || options.multiple === 'true';

            if (allowMultiple) {
                var separator = options.separator || /[,;]/,
                    addresses = this._splitEmailAddresses(value, separator);

                for (var i = 0; i < addresses.length; i++) {
                    if (!emailRegExp.test(addresses[i])) {
                        return false;
                    }
                }

                return true;
            } else {
                return emailRegExp.test(value);
            }
        },

        _splitEmailAddresses: function(emailAddresses, separator) {
            var quotedFragments     = emailAddresses.split(/"/),
                quotedFragmentCount = quotedFragments.length,
                emailAddressArray   = [],
                nextEmailAddress    = '';

            for (var i = 0; i < quotedFragmentCount; i++) {
                if (i % 2 === 0) {
                    var splitEmailAddressFragments     = quotedFragments[i].split(separator),
                        splitEmailAddressFragmentCount = splitEmailAddressFragments.length;

                    if (splitEmailAddressFragmentCount === 1) {
                        nextEmailAddress += splitEmailAddressFragments[0];
                    } else {
                        emailAddressArray.push(nextEmailAddress + splitEmailAddressFragments[0]);

                        for (var j = 1; j < splitEmailAddressFragmentCount - 1; j++) {
                            emailAddressArray.push(splitEmailAddressFragments[j]);
                        }
                        nextEmailAddress = splitEmailAddressFragments[splitEmailAddressFragmentCount - 1];
                    }
                } else {
                    nextEmailAddress += '"' + quotedFragments[i];
                    if (i < quotedFragmentCount - 1) {
                        nextEmailAddress += '"';
                    }
                }
            }

            emailAddressArray.push(nextEmailAddress);
            return emailAddressArray;
        }
    };
}(jQuery));
;(function($) {
    FormValidation.I18n = $.extend(true, FormValidation.I18n || {}, {
        'en_US': {
            file: {
                'default': 'Please choose a valid file'
            }
        }
    });

    FormValidation.Validator.file = {
        html5Attributes: {
            extension: 'extension',
            maxfiles: 'maxFiles',
            minfiles: 'minFiles',
            maxsize: 'maxSize',
            minsize: 'minSize',
            maxtotalsize: 'maxTotalSize',
            mintotalsize: 'minTotalSize',
            message: 'message',
            type: 'type'
        },

        /**
         * Validate upload file. Use HTML 5 API if the browser supports
         *
         * @param {FormValidation.Base} validator The validator plugin instance
         * @param {jQuery} $field Field element
         * @param {Object} options Can consist of the following keys:
         * - extension: The allowed extensions, separated by a comma
         * - maxFiles: The maximum number of files
         * - minFiles: The minimum number of files
         * - maxSize: The maximum size in bytes
         * - minSize: The minimum size in bytes
         * - maxTotalSize: The maximum size in bytes for all files
         * - minTotalSize: The minimum size in bytes for all files
         * - message: The invalid message
         * - type: The allowed MIME type, separated by a comma
         * @returns {Boolean}
         */
        validate: function(validator, $field, options) {
            var value = validator.getFieldValue($field, 'file');
            if (value === '') {
                return true;
            }

            var ext,
                extensions = options.extension ? options.extension.toLowerCase().split(',') : null,
                types      = options.type      ? options.type.toLowerCase().split(',')      : null,
                html5      = (window.File && window.FileList && window.FileReader);

            if (html5) {
                // Get FileList instance
                var files     = $field.get(0).files,
                    total     = files.length,
                    totalSize = 0;

                if ((options.maxFiles && total > parseInt(options.maxFiles, 10))        // Check the maxFiles
                    || (options.minFiles && total < parseInt(options.minFiles, 10)))    // Check the minFiles
                {
                    return false;
                }

                for (var i = 0; i < total; i++) {
                    totalSize += files[i].size;
                    ext        = files[i].name.substr(files[i].name.lastIndexOf('.') + 1);

                    if ((options.minSize && files[i].size < parseInt(options.minSize, 10))                      // Check the minSize
                        || (options.maxSize && files[i].size > parseInt(options.maxSize, 10))                   // Check the maxSize
                        || (extensions && $.inArray(ext.toLowerCase(), extensions) === -1)                      // Check file extension
                        || (files[i].type && types && $.inArray(files[i].type.toLowerCase(), types) === -1))    // Check file type
                    {
                        return false;
                    }
                }

                if ((options.maxTotalSize && totalSize > parseInt(options.maxTotalSize, 10))        // Check the maxTotalSize
                    || (options.minTotalSize && totalSize < parseInt(options.minTotalSize, 10)))    // Check the minTotalSize
                {
                    return false;
                }
            } else {
                // Check file extension
                ext = value.substr(value.lastIndexOf('.') + 1);
                if (extensions && $.inArray(ext.toLowerCase(), extensions) === -1) {
                    return false;
                }
            }

            return true;
        }
    };
}(jQuery));
;(function($) {
    FormValidation.I18n = $.extend(true, FormValidation.I18n || {}, {
        'en_US': {
            greaterThan: {
                'default': 'Please enter a value greater than or equal to %s',
                notInclusive: 'Please enter a value greater than %s'
            }
        }
    });

    FormValidation.Validator.greaterThan = {
        html5Attributes: {
            message: 'message',
            value: 'value',
            inclusive: 'inclusive'
        },

        enableByHtml5: function($field) {
            var type = $field.attr('type'),
                min  = $field.attr('min');
            if (min && type !== 'date') {
                return {
                    value: min
                };
            }

            return false;
        },

        /**
         * Return true if the input value is greater than or equals to given number
         *
         * @param {FormValidation.Base} validator Validate plugin instance
         * @param {jQuery} $field Field element
         * @param {Object} options Can consist of the following keys:
         * - value: Define the number to compare with. It can be
         *      - A number
         *      - Name of field which its value defines the number
         *      - Name of callback function that returns the number
         *      - A callback function that returns the number
         *
         * - inclusive [optional]: Can be true or false. Default is true
         * - message: The invalid message
         * @returns {Boolean|Object}
         */
        validate: function(validator, $field, options) {
            var value = validator.getFieldValue($field, 'greaterThan');
            if (value === '') {
                return true;
            }
            
            value = this._format(value);
            if (!$.isNumeric(value)) {
                return false;
            }

            var locale         = validator.getLocale(),
                compareTo      = $.isNumeric(options.value) ? options.value : validator.getDynamicOption($field, options.value),
                compareToValue = this._format(compareTo);

            value = parseFloat(value);
			return (options.inclusive === true || options.inclusive === undefined)
                    ? {
                        valid: value >= compareToValue,
                        message: FormValidation.Helper.format(options.message || FormValidation.I18n[locale].greaterThan['default'], compareTo)
                    }
                    : {
                        valid: value > compareToValue,
                        message: FormValidation.Helper.format(options.message || FormValidation.I18n[locale].greaterThan.notInclusive, compareTo)
                    };
        },

        _format: function(value) {
            return (value + '').replace(',', '.');
        }
    };
}(jQuery));
;(function($) {
    FormValidation.I18n = $.extend(true, FormValidation.I18n || {}, {
        'en_US': {
            grid: {
                'default': 'Please enter a valid GRId number'
            }
        }
    });

    FormValidation.Validator.grid = {
        /**
         * Validate GRId (Global Release Identifier)
         * Examples:
         * - Valid: A12425GABC1234002M, A1-2425G-ABC1234002-M, A1 2425G ABC1234002 M, Grid:A1-2425G-ABC1234002-M
         * - Invalid: A1-2425G-ABC1234002-Q
         *
         * @see http://en.wikipedia.org/wiki/Global_Release_Identifier
         * @param {FormValidation.Base} validator The validator plugin instance
         * @param {jQuery} $field Field element
         * @param {Object} options Can consist of the following keys:
         * - message: The invalid message
         * @returns {Boolean}
         */
        validate: function(validator, $field, options) {
            var value = validator.getFieldValue($field, 'grid');
            if (value === '') {
                return true;
            }

            value = value.toUpperCase();
            if (!/^[GRID:]*([0-9A-Z]{2})[-\s]*([0-9A-Z]{5})[-\s]*([0-9A-Z]{10})[-\s]*([0-9A-Z]{1})$/g.test(value)) {
                return false;
            }
            value = value.replace(/\s/g, '').replace(/-/g, '');
            if ('GRID:' === value.substr(0, 5)) {
                value = value.substr(5);
            }
            return FormValidation.Helper.mod37And36(value);
        }
    };
}(jQuery));
;(function($) {
    FormValidation.I18n = $.extend(true, FormValidation.I18n || {}, {
        'en_US': {
            hex: {
                'default': 'Please enter a valid hexadecimal number'
            }
        }
    });

    FormValidation.Validator.hex = {
        /**
         * Return true if and only if the input value is a valid hexadecimal number
         *
         * @param {FormValidation.Base} validator The validator plugin instance
         * @param {jQuery} $field Field element
         * @param {Object} options Consist of key:
         * - message: The invalid message
         * @returns {Boolean}
         */
        validate: function(validator, $field, options) {
            var value = validator.getFieldValue($field, 'hex');
            if (value === '') {
                return true;
            }

            return /^[0-9a-fA-F]+$/.test(value);
        }
    };
}(jQuery));
;(function($) {
    FormValidation.I18n = $.extend(true, FormValidation.I18n || {}, {
        'en_US': {
            iban: {
                'default': 'Please enter a valid IBAN number',
                country: 'Please enter a valid IBAN number in %s',
                countries: {
                    AD: 'Andorra',
                    AE: 'United Arab Emirates',
                    AL: 'Albania',
                    AO: 'Angola',
                    AT: 'Austria',
                    AZ: 'Azerbaijan',
                    BA: 'Bosnia and Herzegovina',
                    BE: 'Belgium',
                    BF: 'Burkina Faso',
                    BG: 'Bulgaria',
                    BH: 'Bahrain',
                    BI: 'Burundi',
                    BJ: 'Benin',
                    BR: 'Brazil',
                    CH: 'Switzerland',
                    CI: 'Ivory Coast',
                    CM: 'Cameroon',
                    CR: 'Costa Rica',
                    CV: 'Cape Verde',
                    CY: 'Cyprus',
                    CZ: 'Czech Republic',
                    DE: 'Germany',
                    DK: 'Denmark',
                    DO: 'Dominican Republic',
                    DZ: 'Algeria',
                    EE: 'Estonia',
                    ES: 'Spain',
                    FI: 'Finland',
                    FO: 'Faroe Islands',
                    FR: 'France',
                    GB: 'United Kingdom',
                    GE: 'Georgia',
                    GI: 'Gibraltar',
                    GL: 'Greenland',
                    GR: 'Greece',
                    GT: 'Guatemala',
                    HR: 'Croatia',
                    HU: 'Hungary',
                    IE: 'Ireland',
                    IL: 'Israel',
                    IR: 'Iran',
                    IS: 'Iceland',
                    IT: 'Italy',
                    JO: 'Jordan',
                    KW: 'Kuwait',
                    KZ: 'Kazakhstan',
                    LB: 'Lebanon',
                    LI: 'Liechtenstein',
                    LT: 'Lithuania',
                    LU: 'Luxembourg',
                    LV: 'Latvia',
                    MC: 'Monaco',
                    MD: 'Moldova',
                    ME: 'Montenegro',
                    MG: 'Madagascar',
                    MK: 'Macedonia',
                    ML: 'Mali',
                    MR: 'Mauritania',
                    MT: 'Malta',
                    MU: 'Mauritius',
                    MZ: 'Mozambique',
                    NL: 'Netherlands',
                    NO: 'Norway',
                    PK: 'Pakistan',
                    PL: 'Poland',
                    PS: 'Palestine',
                    PT: 'Portugal',
                    QA: 'Qatar',
                    RO: 'Romania',
                    RS: 'Serbia',
                    SA: 'Saudi Arabia',
                    SE: 'Sweden',
                    SI: 'Slovenia',
                    SK: 'Slovakia',
                    SM: 'San Marino',
                    SN: 'Senegal',
                    TN: 'Tunisia',
                    TR: 'Turkey',
                    VG: 'Virgin Islands, British'
                }
            }
        }
    });

    FormValidation.Validator.iban = {
        html5Attributes: {
            message: 'message',
            country: 'country'
        },

        // http://www.swift.com/dsp/resources/documents/IBAN_Registry.pdf
        // http://en.wikipedia.org/wiki/International_Bank_Account_Number#IBAN_formats_by_country
        REGEX: {
            AD: 'AD[0-9]{2}[0-9]{4}[0-9]{4}[A-Z0-9]{12}',                       // Andorra
            AE: 'AE[0-9]{2}[0-9]{3}[0-9]{16}',                                  // United Arab Emirates
            AL: 'AL[0-9]{2}[0-9]{8}[A-Z0-9]{16}',                               // Albania
            AO: 'AO[0-9]{2}[0-9]{21}',                                          // Angola
            AT: 'AT[0-9]{2}[0-9]{5}[0-9]{11}',                                  // Austria
            AZ: 'AZ[0-9]{2}[A-Z]{4}[A-Z0-9]{20}',                               // Azerbaijan
            BA: 'BA[0-9]{2}[0-9]{3}[0-9]{3}[0-9]{8}[0-9]{2}',                   // Bosnia and Herzegovina
            BE: 'BE[0-9]{2}[0-9]{3}[0-9]{7}[0-9]{2}',                           // Belgium
            BF: 'BF[0-9]{2}[0-9]{23}',                                          // Burkina Faso
            BG: 'BG[0-9]{2}[A-Z]{4}[0-9]{4}[0-9]{2}[A-Z0-9]{8}',                // Bulgaria
            BH: 'BH[0-9]{2}[A-Z]{4}[A-Z0-9]{14}',                               // Bahrain
            BI: 'BI[0-9]{2}[0-9]{12}',                                          // Burundi
            BJ: 'BJ[0-9]{2}[A-Z]{1}[0-9]{23}',                                  // Benin
            BR: 'BR[0-9]{2}[0-9]{8}[0-9]{5}[0-9]{10}[A-Z][A-Z0-9]',             // Brazil
            CH: 'CH[0-9]{2}[0-9]{5}[A-Z0-9]{12}',                               // Switzerland
            CI: 'CI[0-9]{2}[A-Z]{1}[0-9]{23}',                                  // Ivory Coast
            CM: 'CM[0-9]{2}[0-9]{23}',                                          // Cameroon
            CR: 'CR[0-9]{2}[0-9]{3}[0-9]{14}',                                  // Costa Rica
            CV: 'CV[0-9]{2}[0-9]{21}',                                          // Cape Verde
            CY: 'CY[0-9]{2}[0-9]{3}[0-9]{5}[A-Z0-9]{16}',                       // Cyprus
            CZ: 'CZ[0-9]{2}[0-9]{20}',                                          // Czech Republic
            DE: 'DE[0-9]{2}[0-9]{8}[0-9]{10}',                                  // Germany
            DK: 'DK[0-9]{2}[0-9]{14}',                                          // Denmark
            DO: 'DO[0-9]{2}[A-Z0-9]{4}[0-9]{20}',                               // Dominican Republic
            DZ: 'DZ[0-9]{2}[0-9]{20}',                                          // Algeria
            EE: 'EE[0-9]{2}[0-9]{2}[0-9]{2}[0-9]{11}[0-9]{1}',                  // Estonia
            ES: 'ES[0-9]{2}[0-9]{4}[0-9]{4}[0-9]{1}[0-9]{1}[0-9]{10}',          // Spain
            FI: 'FI[0-9]{2}[0-9]{6}[0-9]{7}[0-9]{1}',                           // Finland
            FO: 'FO[0-9]{2}[0-9]{4}[0-9]{9}[0-9]{1}',                           // Faroe Islands
            FR: 'FR[0-9]{2}[0-9]{5}[0-9]{5}[A-Z0-9]{11}[0-9]{2}',               // France
            GB: 'GB[0-9]{2}[A-Z]{4}[0-9]{6}[0-9]{8}',                           // United Kingdom
            GE: 'GE[0-9]{2}[A-Z]{2}[0-9]{16}',                                  // Georgia
            GI: 'GI[0-9]{2}[A-Z]{4}[A-Z0-9]{15}',                               // Gibraltar
            GL: 'GL[0-9]{2}[0-9]{4}[0-9]{9}[0-9]{1}',                           // Greenland
            GR: 'GR[0-9]{2}[0-9]{3}[0-9]{4}[A-Z0-9]{16}',                       // Greece
            GT: 'GT[0-9]{2}[A-Z0-9]{4}[A-Z0-9]{20}',                            // Guatemala
            HR: 'HR[0-9]{2}[0-9]{7}[0-9]{10}',                                  // Croatia
            HU: 'HU[0-9]{2}[0-9]{3}[0-9]{4}[0-9]{1}[0-9]{15}[0-9]{1}',          // Hungary
            IE: 'IE[0-9]{2}[A-Z]{4}[0-9]{6}[0-9]{8}',                           // Ireland
            IL: 'IL[0-9]{2}[0-9]{3}[0-9]{3}[0-9]{13}',                          // Israel
            IR: 'IR[0-9]{2}[0-9]{22}',                                          // Iran
            IS: 'IS[0-9]{2}[0-9]{4}[0-9]{2}[0-9]{6}[0-9]{10}',                  // Iceland
            IT: 'IT[0-9]{2}[A-Z]{1}[0-9]{5}[0-9]{5}[A-Z0-9]{12}',               // Italy
            JO: 'JO[0-9]{2}[A-Z]{4}[0-9]{4}[0]{8}[A-Z0-9]{10}',                 // Jordan
            KW: 'KW[0-9]{2}[A-Z]{4}[0-9]{22}',                                  // Kuwait
            KZ: 'KZ[0-9]{2}[0-9]{3}[A-Z0-9]{13}',                               // Kazakhstan
            LB: 'LB[0-9]{2}[0-9]{4}[A-Z0-9]{20}',                               // Lebanon
            LI: 'LI[0-9]{2}[0-9]{5}[A-Z0-9]{12}',                               // Liechtenstein
            LT: 'LT[0-9]{2}[0-9]{5}[0-9]{11}',                                  // Lithuania
            LU: 'LU[0-9]{2}[0-9]{3}[A-Z0-9]{13}',                               // Luxembourg
            LV: 'LV[0-9]{2}[A-Z]{4}[A-Z0-9]{13}',                               // Latvia
            MC: 'MC[0-9]{2}[0-9]{5}[0-9]{5}[A-Z0-9]{11}[0-9]{2}',               // Monaco
            MD: 'MD[0-9]{2}[A-Z0-9]{20}',                                       // Moldova
            ME: 'ME[0-9]{2}[0-9]{3}[0-9]{13}[0-9]{2}',                          // Montenegro
            MG: 'MG[0-9]{2}[0-9]{23}',                                          // Madagascar
            MK: 'MK[0-9]{2}[0-9]{3}[A-Z0-9]{10}[0-9]{2}',                       // Macedonia
            ML: 'ML[0-9]{2}[A-Z]{1}[0-9]{23}',                                  // Mali
            MR: 'MR13[0-9]{5}[0-9]{5}[0-9]{11}[0-9]{2}',                        // Mauritania
            MT: 'MT[0-9]{2}[A-Z]{4}[0-9]{5}[A-Z0-9]{18}',                       // Malta
            MU: 'MU[0-9]{2}[A-Z]{4}[0-9]{2}[0-9]{2}[0-9]{12}[0-9]{3}[A-Z]{3}',  // Mauritius
            MZ: 'MZ[0-9]{2}[0-9]{21}',                                          // Mozambique
            NL: 'NL[0-9]{2}[A-Z]{4}[0-9]{10}',                                  // Netherlands
            NO: 'NO[0-9]{2}[0-9]{4}[0-9]{6}[0-9]{1}',                           // Norway
            PK: 'PK[0-9]{2}[A-Z]{4}[A-Z0-9]{16}',                               // Pakistan
            PL: 'PL[0-9]{2}[0-9]{8}[0-9]{16}',                                  // Poland
            PS: 'PS[0-9]{2}[A-Z]{4}[A-Z0-9]{21}',                               // Palestinian
            PT: 'PT[0-9]{2}[0-9]{4}[0-9]{4}[0-9]{11}[0-9]{2}',                  // Portugal
            QA: 'QA[0-9]{2}[A-Z]{4}[A-Z0-9]{21}',                               // Qatar
            RO: 'RO[0-9]{2}[A-Z]{4}[A-Z0-9]{16}',                               // Romania
            RS: 'RS[0-9]{2}[0-9]{3}[0-9]{13}[0-9]{2}',                          // Serbia
            SA: 'SA[0-9]{2}[0-9]{2}[A-Z0-9]{18}',                               // Saudi Arabia
            SE: 'SE[0-9]{2}[0-9]{3}[0-9]{16}[0-9]{1}',                          // Sweden
            SI: 'SI[0-9]{2}[0-9]{5}[0-9]{8}[0-9]{2}',                           // Slovenia
            SK: 'SK[0-9]{2}[0-9]{4}[0-9]{6}[0-9]{10}',                          // Slovakia
            SM: 'SM[0-9]{2}[A-Z]{1}[0-9]{5}[0-9]{5}[A-Z0-9]{12}',               // San Marino
            SN: 'SN[0-9]{2}[A-Z]{1}[0-9]{23}',                                  // Senegal
            TN: 'TN59[0-9]{2}[0-9]{3}[0-9]{13}[0-9]{2}',                        // Tunisia
            TR: 'TR[0-9]{2}[0-9]{5}[A-Z0-9]{1}[A-Z0-9]{16}',                    // Turkey
            VG: 'VG[0-9]{2}[A-Z]{4}[0-9]{16}'                                   // Virgin Islands, British
        },

        /**
         * Validate an International Bank Account Number (IBAN)
         * To test it, take the sample IBAN from
         * http://www.nordea.com/Our+services/International+products+and+services/Cash+Management/IBAN+countries/908462.html
         *
         * @param {FormValidation.Base} validator The validator plugin instance
         * @param {jQuery} $field Field element
         * @param {Object} options Can consist of the following keys:
         * - message: The invalid message
         * - country: The ISO 3166-1 country code. It can be
         *      - A country code
         *      - Name of field which its value defines the country code
         *      - Name of callback function that returns the country code
         *      - A callback function that returns the country code
         * @returns {Boolean|Object}
         */
        validate: function(validator, $field, options) {
            var value = validator.getFieldValue($field, 'iban');
            if (value === '') {
                return true;
            }

            value = value.replace(/[^a-zA-Z0-9]/g, '').toUpperCase();
            var country = options.country;
            if (!country) {
                country = value.substr(0, 2);
            } else if (typeof country !== 'string' || !this.REGEX[country]) {
                // Determine the country code
                country = validator.getDynamicOption($field, country);
            }

            var locale = validator.getLocale();
            if (!this.REGEX[country]) {
                return true;
            }

            if (!(new RegExp('^' + this.REGEX[country] + '$')).test(value)) {
                return {
                    valid: false,
                    message: FormValidation.Helper.format(options.message || FormValidation.I18n[locale].iban.country, FormValidation.I18n[locale].iban.countries[country])
                };
            }

            value = value.substr(4) + value.substr(0, 4);
            value = $.map(value.split(''), function(n) {
                var code = n.charCodeAt(0);
                return (code >= 'A'.charCodeAt(0) && code <= 'Z'.charCodeAt(0))
                        // Replace A, B, C, ..., Z with 10, 11, ..., 35
                        ? (code - 'A'.charCodeAt(0) + 10)
                        : n;
            });
            value = value.join('');

            var temp   = parseInt(value.substr(0, 1), 10),
                length = value.length;
            for (var i = 1; i < length; ++i) {
                temp = (temp * 10 + parseInt(value.substr(i, 1), 10)) % 97;
            }

            return {
                valid: (temp === 1),
                message: FormValidation.Helper.format(options.message || FormValidation.I18n[locale].iban.country, FormValidation.I18n[locale].iban.countries[country])
            };
        }
    };
}(jQuery));
;(function($) {
    FormValidation.I18n = $.extend(true, FormValidation.I18n || {}, {
        'en_US': {
            id: {
                'default': 'Please enter a valid identification number',
                country: 'Please enter a valid identification number in %s',
                countries: {
                    BA: 'Bosnia and Herzegovina',
                    BG: 'Bulgaria',
                    BR: 'Brazil',
                    CH: 'Switzerland',
                    CL: 'Chile',
                    CN: 'China',
                    CZ: 'Czech Republic',
                    DK: 'Denmark',
                    EE: 'Estonia',
                    ES: 'Spain',
                    FI: 'Finland',
                    HR: 'Croatia',
                    IE: 'Ireland',
                    IS: 'Iceland',
                    LT: 'Lithuania',
                    LV: 'Latvia',
                    ME: 'Montenegro',
                    MK: 'Macedonia',
                    NL: 'Netherlands',
                    PL: 'Poland',
                    RO: 'Romania',
                    RS: 'Serbia',
                    SE: 'Sweden',
                    SI: 'Slovenia',
                    SK: 'Slovakia',
                    SM: 'San Marino',
                    TH: 'Thailand',
                    ZA: 'South Africa'
                }
            }
        }
    });

    FormValidation.Validator.id = {
        html5Attributes: {
            message: 'message',
            country: 'country'
        },

        // Supported country codes
        COUNTRY_CODES: [
            'BA', 'BG', 'BR', 'CH', 'CL', 'CN', 'CZ', 'DK', 'EE', 'ES', 'FI', 'HR', 'IE', 'IS', 'LT', 'LV', 'ME', 'MK', 'NL',
            'PL', 'RO', 'RS', 'SE', 'SI', 'SK', 'SM', 'TH', 'ZA'
        ],

        /**
         * Validate identification number in different countries
         *
         * @see http://en.wikipedia.org/wiki/National_identification_number
         * @param {FormValidation.Base} validator The validator plugin instance
         * @param {jQuery} $field Field element
         * @param {Object} options Consist of key:
         * - message: The invalid message
         * - country: The ISO 3166-1 country code. It can be
         *      - One of country code defined in COUNTRY_CODES
         *      - Name of field which its value defines the country code
         *      - Name of callback function that returns the country code
         *      - A callback function that returns the country code
         * @returns {Boolean|Object}
         */
        validate: function(validator, $field, options) {
            var value = validator.getFieldValue($field, 'id');
            if (value === '') {
                return true;
            }

            var locale  = validator.getLocale(),
                country = options.country;
            if (!country) {
                country = value.substr(0, 2);
            } else if (typeof country !== 'string' || $.inArray(country.toUpperCase(), this.COUNTRY_CODES) === -1) {
                // Determine the country code
                country = validator.getDynamicOption($field, country);
            }

            if ($.inArray(country, this.COUNTRY_CODES) === -1) {
                return true;
            }

            var method  = ['_', country.toLowerCase()].join('');
            return this[method](value)
                    ? true
                    : {
                        valid: false,
                        message: FormValidation.Helper.format(options.message || FormValidation.I18n[locale].id.country, FormValidation.I18n[locale].id.countries[country.toUpperCase()])
                    };
        },

        /**
         * Validate Unique Master Citizen Number which uses in
         * - Bosnia and Herzegovina (country code: BA)
         * - Macedonia (MK)
         * - Montenegro (ME)
         * - Serbia (RS)
         * - Slovenia (SI)
         *
         * @see http://en.wikipedia.org/wiki/Unique_Master_Citizen_Number
         * @param {String} value The ID
         * @param {String} countryCode The ISO country code, can be BA, MK, ME, RS, SI
         * @returns {Boolean}
         */
        _validateJMBG: function(value, countryCode) {
            if (!/^\d{13}$/.test(value)) {
                return false;
            }
            var day   = parseInt(value.substr(0, 2), 10),
                month = parseInt(value.substr(2, 2), 10),
                year  = parseInt(value.substr(4, 3), 10),
                rr    = parseInt(value.substr(7, 2), 10),
                k     = parseInt(value.substr(12, 1), 10);

            // Validate date of birth
            // FIXME: Validate the year of birth
            if (day > 31 || month > 12) {
                return false;
            }

            // Validate checksum
            var sum = 0;
            for (var i = 0; i < 6; i++) {
                sum += (7 - i) * (parseInt(value.charAt(i), 10) + parseInt(value.charAt(i + 6), 10));
            }
            sum = 11 - sum % 11;
            if (sum === 10 || sum === 11) {
                sum = 0;
            }
            if (sum !== k) {
                return false;
            }

            // Validate political region
            // rr is the political region of birth, which can be in ranges:
            // 10-19: Bosnia and Herzegovina
            // 20-29: Montenegro
            // 30-39: Croatia (not used anymore)
            // 41-49: Macedonia
            // 50-59: Slovenia (only 50 is used)
            // 70-79: Central Serbia
            // 80-89: Serbian province of Vojvodina
            // 90-99: Kosovo
            switch (countryCode.toUpperCase()) {
                case 'BA':
                    return (10 <= rr && rr <= 19);
                case 'MK':
                    return (41 <= rr && rr <= 49);
                case 'ME':
                    return (20 <= rr && rr <= 29);
                case 'RS':
                    return (70 <= rr && rr <= 99);
                case 'SI':
                    return (50 <= rr && rr <= 59);
                default:
                    return true;
            }
        },

        _ba: function(value) {
            return this._validateJMBG(value, 'BA');
        },
        _mk: function(value) {
            return this._validateJMBG(value, 'MK');
        },
        _me: function(value) {
            return this._validateJMBG(value, 'ME');
        },
        _rs: function(value) {
            return this._validateJMBG(value, 'RS');
        },

        /**
         * Examples: 0101006500006
         */
        _si: function(value) {
            return this._validateJMBG(value, 'SI');
        },

        /**
         * Validate Bulgarian national identification number (EGN)
         * Examples:
         * - Valid: 7523169263, 8032056031, 803205 603 1, 8001010008, 7501020018, 7552010005, 7542011030
         * - Invalid: 8019010008
         *
         * @see http://en.wikipedia.org/wiki/Uniform_civil_number
         * @param {String} value The ID
         * @returns {Boolean}
         */
        _bg: function(value) {
            if (!/^\d{10}$/.test(value) && !/^\d{6}\s\d{3}\s\d{1}$/.test(value)) {
                return false;
            }
            value = value.replace(/\s/g, '');
            // Check the birth date
            var year  = parseInt(value.substr(0, 2), 10) + 1900,
                month = parseInt(value.substr(2, 2), 10),
                day   = parseInt(value.substr(4, 2), 10);
            if (month > 40) {
                year += 100;
                month -= 40;
            } else if (month > 20) {
                year -= 100;
                month -= 20;
            }

            if (!FormValidation.Helper.date(year, month, day)) {
                return false;
            }

            var sum    = 0,
                weight = [2, 4, 8, 5, 10, 9, 7, 3, 6];
            for (var i = 0; i < 9; i++) {
                sum += parseInt(value.charAt(i), 10) * weight[i];
            }
            sum = (sum % 11) % 10;
            return (sum + '' === value.substr(9, 1));
        },

        /**
         * Validate Brazilian national identification number (CPF)
         * Examples:
         * - Valid: 39053344705, 390.533.447-05, 111.444.777-35
         * - Invalid: 231.002.999-00
         *
         * @see http://en.wikipedia.org/wiki/Cadastro_de_Pessoas_F%C3%ADsicas
         * @param {String} value The ID
         * @returns {Boolean}
         */
        _br: function(value) {
            value = value.replace(/\D/g, '');

            if (!/^\d{11}$/.test(value) || /^1{11}|2{11}|3{11}|4{11}|5{11}|6{11}|7{11}|8{11}|9{11}|0{11}$/.test(value)) {
                return false;
            }

            var d1 = 0;
            for (var i = 0; i < 9; i++) {
                d1 += (10 - i) * parseInt(value.charAt(i), 10);
            }
            d1 = 11 - d1 % 11;
            if (d1 === 10 || d1 === 11) {
                d1 = 0;
            }
            if (d1 + '' !== value.charAt(9)) {
                return false;
            }

            var d2 = 0;
            for (i = 0; i < 10; i++) {
                d2 += (11 - i) * parseInt(value.charAt(i), 10);
            }
            d2 = 11 - d2 % 11;
            if (d2 === 10 || d2 === 11) {
                d2 = 0;
            }

            return (d2 + '' === value.charAt(10));
        },

        /**
         * Validate Swiss Social Security Number (AHV-Nr/No AVS)
         * Examples:
         * - Valid: 756.1234.5678.95, 7561234567895
         *
         * @see http://en.wikipedia.org/wiki/National_identification_number#Switzerland
         * @see http://www.bsv.admin.ch/themen/ahv/00011/02185/index.html?lang=de
         * @param {String} value The ID
         * @returns {Boolean}
         */
        _ch: function(value) {
            if (!/^756[\.]{0,1}[0-9]{4}[\.]{0,1}[0-9]{4}[\.]{0,1}[0-9]{2}$/.test(value)) {
                return false;
            }
            value = value.replace(/\D/g, '').substr(3);
            var length = value.length,
                sum    = 0,
                weight = (length === 8) ? [3, 1] : [1, 3];
            for (var i = 0; i < length - 1; i++) {
                sum += parseInt(value.charAt(i), 10) * weight[i % 2];
            }
            sum = 10 - sum % 10;
            return (sum + '' === value.charAt(length - 1));
        },

        /**
         * Validate Chilean national identification number (RUN/RUT)
         * Examples:
         * - Valid: 76086428-5, 22060449-7, 12531909-2
         *
         * @see http://en.wikipedia.org/wiki/National_identification_number#Chile
         * @see https://palena.sii.cl/cvc/dte/ee_empresas_emisoras.html for samples
         * @param {String} value The ID
         * @returns {Boolean}
         */
        _cl: function(value) {
            if (!/^\d{7,8}[-]{0,1}[0-9K]$/i.test(value)) {
                return false;
            }
            value = value.replace(/\-/g, '');
            while (value.length < 9) {
                value = '0' + value;
            }
            var sum    = 0,
                weight = [3, 2, 7, 6, 5, 4, 3, 2];
            for (var i = 0; i < 8; i++) {
                sum += parseInt(value.charAt(i), 10) * weight[i];
            }
            sum = 11 - sum % 11;
            if (sum === 11) {
                sum = 0;
            } else if (sum === 10) {
                sum = 'K';
            }
            return sum + '' === value.charAt(8).toUpperCase();
        },

        /**
         * Validate Chinese citizen identification number
         *
         * Rules:
         * - For current 18-digit system (since 1st Oct 1999, defined by GB11643—1999 national standard):
         *     - Digit 0-5: Must be a valid administrative division code of China PR.
         *     - Digit 6-13: Must be a valid YYYYMMDD date of birth. A future date is tolerated.
         *     - Digit 14-16: Order code, any integer.
         *     - Digit 17: An ISO 7064:1983, MOD 11-2 checksum.
         *       Both upper/lower case of X are tolerated.
         * - For deprecated 15-digit system:
         *     - Digit 0-5: Must be a valid administrative division code of China PR.
         *     - Digit 6-11: Must be a valid YYMMDD date of birth, indicating the year of 19XX.
         *     - Digit 12-14: Order code, any integer.
         * Lists of valid administrative division codes of China PR can be seen here:
         * <http://www.stats.gov.cn/tjsj/tjbz/xzqhdm/>
         * Published and maintained by National Bureau of Statistics of China PR.
         * NOTE: Current and deprecated codes MUST BOTH be considered valid.
         * Many Chinese citizens born in once existed administrative divisions!
         *
         * @see http://en.wikipedia.org/wiki/Resident_Identity_Card#Identity_card_number
         * @param {String} value The ID
         * @returns {Boolean}
         */
        _cn: function(value) {
            // Basic format check (18 or 15 digits, considering X in checksum)
            value = value.trim();
            if (!/^\d{15}$/.test(value) && !/^\d{17}[\dXx]{1}$/.test(value)) {
                return false;
            }
            
            // Check China PR Administrative division code
            var adminDivisionCodes = {
                11: {
                    0: [0],
                    1: [[0, 9], [11, 17]],
                    2: [0, 28, 29]
                },
                12: {
                    0: [0],
                    1: [[0, 16]],
                    2: [0, 21, 23, 25]
                },
                13: {
                    0: [0],
                    1: [[0, 5], 7, 8, 21, [23, 33], [81, 85]],
                    2: [[0, 5], [7, 9], [23, 25], 27, 29, 30, 81, 83],
                    3: [[0, 4], [21, 24]],
                    4: [[0, 4], 6, 21, [23, 35], 81],
                    5: [[0, 3], [21, 35], 81, 82],
                    6: [[0, 4], [21, 38], [81, 84]],
                    7: [[0, 3], 5, 6, [21, 33]],
                    8: [[0, 4], [21, 28]],
                    9: [[0, 3], [21, 30], [81, 84]],
                    10: [[0, 3], [22, 26], 28, 81, 82],
                    11: [[0, 2], [21, 28], 81, 82]
                },
                14: {
                    0: [0],
                    1: [0, 1, [5, 10], [21, 23], 81],
                    2: [[0, 3], 11, 12, [21, 27]],
                    3: [[0, 3], 11, 21, 22],
                    4: [[0, 2], 11, 21, [23, 31], 81],
                    5: [[0, 2], 21, 22, 24, 25, 81],
                    6: [[0, 3], [21, 24]],
                    7: [[0, 2], [21, 29], 81],
                    8: [[0, 2], [21, 30], 81, 82],
                    9: [[0, 2], [21, 32], 81],
                    10: [[0, 2], [21, 34], 81, 82],
                    11: [[0, 2], [21, 30], 81, 82],
                    23: [[0, 3], 22, 23, [25, 30], 32, 33]
                },
                15: {
                    0: [0],
                    1: [[0, 5], [21, 25]],
                    2: [[0, 7], [21, 23]],
                    3: [[0, 4]],
                    4: [[0, 4], [21, 26], [28, 30]],
                    5: [[0, 2], [21, 26], 81],
                    6: [[0, 2], [21, 27]],
                    7: [[0, 3], [21, 27], [81, 85]],
                    8: [[0, 2], [21, 26]],
                    9: [[0, 2], [21, 29], 81],
                    22: [[0, 2], [21, 24]],
                    25: [[0, 2], [22, 31]],
                    26: [[0, 2], [24, 27], [29, 32], 34],
                    28: [0, 1, [22, 27]],
                    29: [0, [21, 23]]
                },
                21: {
                    0: [0],
                    1: [[0, 6], [11, 14], [22, 24], 81],
                    2: [[0, 4], [11, 13], 24, [81, 83]],
                    3: [[0, 4], 11, 21, 23, 81],
                    4: [[0, 4], 11, [21, 23]],
                    5: [[0, 5], 21, 22],
                    6: [[0, 4], 24, 81, 82],
                    7: [[0, 3], 11, 26, 27, 81, 82],
                    8: [[0, 4], 11, 81, 82],
                    9: [[0, 5], 11, 21, 22],
                    10: [[0, 5], 11, 21, 81],
                    11: [[0, 3], 21, 22],
                    12: [[0, 2], 4, 21, 23, 24, 81, 82],
                    13: [[0, 3], 21, 22, 24, 81, 82],
                    14: [[0, 4], 21, 22, 81]
                },
                22: {
                    0: [0],
                    1: [[0, 6], 12, 22, [81, 83]],
                    2: [[0, 4], 11, 21, [81, 84]],
                    3: [[0, 3], 22, 23, 81, 82],
                    4: [[0, 3], 21, 22],
                    5: [[0, 3], 21, 23, 24, 81, 82],
                    6: [[0, 2], 4, 5, [21, 23], 25, 81],
                    7: [[0, 2], [21, 24], 81],
                    8: [[0, 2], 21, 22, 81, 82],
                    24: [[0, 6], 24, 26]
                },
                23: {
                    0: [0],
                    1: [[0, 12], 21, [23, 29], [81, 84]],
                    2: [[0, 8], 21, [23, 25], 27, [29, 31], 81],
                    3: [[0, 7], 21, 81, 82],
                    4: [[0, 7], 21, 22],
                    5: [[0, 3], 5, 6, [21, 24]],
                    6: [[0, 6], [21, 24]],
                    7: [[0, 16], 22, 81],
                    8: [[0, 5], 11, 22, 26, 28, 33, 81, 82],
                    9: [[0, 4], 21],
                    10: [[0, 5], 24, 25, 81, [83, 85]],
                    11: [[0, 2], 21, 23, 24, 81, 82],
                    12: [[0, 2], [21, 26], [81, 83]],
                    27: [[0, 4], [21, 23]]
                },
                31: {
                    0: [0],
                    1: [0, 1, [3, 10], [12, 20]],
                    2: [0, 30]
                },
                32: {
                    0: [0],
                    1: [[0, 7], 11, [13, 18], 24, 25],
                    2: [[0, 6], 11, 81, 82],
                    3: [[0, 5], 11, 12, [21, 24], 81, 82],
                    4: [[0, 2], 4, 5, 11, 12, 81, 82],
                    5: [[0, 9], [81, 85]],
                    6: [[0, 2], 11, 12, 21, 23, [81, 84]],
                    7: [0, 1, 3, 5, 6, [21, 24]],
                    8: [[0, 4], 11, 26, [29, 31]],
                    9: [[0, 3], [21, 25], 28, 81, 82],
                    10: [[0, 3], 11, 12, 23, 81, 84, 88],
                    11: [[0, 2], 11, 12, [81, 83]],
                    12: [[0, 4], [81, 84]],
                    13: [[0, 2], 11, [21, 24]]
                },
                33: {
                    0: [0],
                    1: [[0, 6], [8, 10], 22, 27, 82, 83, 85],
                    2: [0, 1, [3, 6], 11, 12, 25, 26, [81, 83]],
                    3: [[0, 4], 22, 24, [26, 29], 81, 82],
                    4: [[0, 2], 11, 21, 24, [81, 83]],
                    5: [[0, 3], [21, 23]],
                    6: [[0, 2], 21, 24, [81, 83]],
                    7: [[0, 3], 23, 26, 27, [81, 84]],
                    8: [[0, 3], 22, 24, 25, 81],
                    9: [[0, 3], 21, 22],
                    10: [[0, 4], [21, 24], 81, 82],
                    11: [[0, 2], [21, 27], 81]
                },
                34: {
                    0: [0],
                    1: [[0, 4], 11, [21, 24], 81],
                    2: [[0, 4], 7, 8, [21, 23], 25],
                    3: [[0, 4], 11, [21, 23]],
                    4: [[0, 6], 21],
                    5: [[0, 4], 6, [21, 23]],
                    6: [[0, 4], 21],
                    7: [[0, 3], 11, 21],
                    8: [[0, 3], 11, [22, 28], 81],
                    10: [[0, 4], [21, 24]],
                    11: [[0, 3], 22, [24, 26], 81, 82],
                    12: [[0, 4], 21, 22, 25, 26, 82],
                    13: [[0, 2], [21, 24]],
                    14: [[0, 2], [21, 24]],
                    15: [[0, 3], [21, 25]],
                    16: [[0, 2], [21, 23]],
                    17: [[0, 2], [21, 23]],
                    18: [[0, 2], [21, 25], 81]
                },
                35: {
                    0: [0],
                    1: [[0, 5], 11, [21, 25], 28, 81, 82],
                    2: [[0, 6], [11, 13]],
                    3: [[0, 5], 22],
                    4: [[0, 3], 21, [23, 30], 81],
                    5: [[0, 5], 21, [24, 27], [81, 83]],
                    6: [[0, 3], [22, 29], 81],
                    7: [[0, 2], [21, 25], [81, 84]],
                    8: [[0, 2], [21, 25], 81],
                    9: [[0, 2], [21, 26], 81, 82]
                },
                36: {
                    0: [0],
                    1: [[0, 5], 11, [21, 24]],
                    2: [[0, 3], 22, 81],
                    3: [[0, 2], 13, [21, 23]],
                    4: [[0, 3], 21, [23, 30], 81, 82],
                    5: [[0, 2], 21],
                    6: [[0, 2], 22, 81],
                    7: [[0, 2], [21, 35], 81, 82],
                    8: [[0, 3], [21, 30], 81],
                    9: [[0, 2], [21, 26], [81, 83]],
                    10: [[0, 2], [21, 30]],
                    11: [[0, 2], [21, 30], 81]
                },
                37: {
                    0: [0],
                    1: [[0, 5], 12, 13, [24, 26], 81],
                    2: [[0, 3], 5, [11, 14], [81, 85]],
                    3: [[0, 6], [21, 23]],
                    4: [[0, 6], 81],
                    5: [[0, 3], [21, 23]],
                    6: [[0, 2], [11, 13], 34, [81, 87]],
                    7: [[0, 5], 24, 25, [81, 86]],
                    8: [[0, 2], 11, [26, 32], [81, 83]],
                    9: [[0, 3], 11, 21, 23, 82, 83],
                    10: [[0, 2], [81, 83]],
                    11: [[0, 3], 21, 22],
                    12: [[0, 3]],
                    13: [[0, 2], 11, 12, [21, 29]],
                    14: [[0, 2], [21, 28], 81, 82],
                    15: [[0, 2], [21, 26], 81],
                    16: [[0, 2], [21, 26]],
                    17: [[0, 2], [21, 28]]
                },
                41: {
                    0: [0],
                    1: [[0, 6], 8, 22, [81, 85]],
                    2: [[0, 5], 11, [21, 25]],
                    3: [[0, 7], 11, [22, 29], 81],
                    4: [[0, 4], 11, [21, 23], 25, 81, 82],
                    5: [[0, 3], 5, 6, 22, 23, 26, 27, 81],
                    6: [[0, 3], 11, 21, 22],
                    7: [[0, 4], 11, 21, [24, 28], 81, 82],
                    8: [[0, 4], 11, [21, 23], 25, [81, 83]],
                    9: [[0, 2], 22, 23, [26, 28]],
                    10: [[0, 2], [23, 25], 81, 82],
                    11: [[0, 4], [21, 23]],
                    12: [[0, 2], 21, 22, 24, 81, 82],
                    13: [[0, 3], [21, 30], 81],
                    14: [[0, 3], [21, 26], 81],
                    15: [[0, 3], [21, 28]],
                    16: [[0, 2], [21, 28], 81],
                    17: [[0, 2], [21, 29]],
                    90: [0, 1]
                },
                42: {
                    0: [0],
                    1: [[0, 7], [11, 17]],
                    2: [[0, 5], 22, 81],
                    3: [[0, 3], [21, 25], 81],
                    5: [[0, 6], [25, 29], [81, 83]],
                    6: [[0, 2], 6, 7, [24, 26], [82, 84]],
                    7: [[0, 4]],
                    8: [[0, 2], 4, 21, 22, 81],
                    9: [[0, 2], [21, 23], 81, 82, 84],
                    10: [[0, 3], [22, 24], 81, 83, 87],
                    11: [[0, 2], [21, 27], 81, 82],
                    12: [[0, 2], [21, 24], 81],
                    13: [[0, 3], 21, 81],
                    28: [[0, 2], 22, 23, [25, 28]],
                    90: [0, [4, 6], 21]
                },
                43: {
                    0: [0],
                    1: [[0, 5], 11, 12, 21, 22, 24, 81],
                    2: [[0, 4], 11, 21, [23, 25], 81],
                    3: [[0, 2], 4, 21, 81, 82],
                    4: [0, 1, [5, 8], 12, [21, 24], 26, 81, 82],
                    5: [[0, 3], 11, [21, 25], [27, 29], 81],
                    6: [[0, 3], 11, 21, 23, 24, 26, 81, 82],
                    7: [[0, 3], [21, 26], 81],
                    8: [[0, 2], 11, 21, 22],
                    9: [[0, 3], [21, 23], 81],
                    10: [[0, 3], [21, 28], 81],
                    11: [[0, 3], [21, 29]],
                    12: [[0, 2], [21, 30], 81],
                    13: [[0, 2], 21, 22, 81, 82],
                    31: [0, 1, [22, 27], 30]
                },
                44: {
                    0: [0],
                    1: [[0, 7], [11, 16], 83, 84],
                    2: [[0, 5], 21, 22, 24, 29, 32, 33, 81, 82],
                    3: [0, 1, [3, 8]],
                    4: [[0, 4]],
                    5: [0, 1, [6, 15], 23, 82, 83],
                    6: [0, 1, [4, 8]],
                    7: [0, 1, [3, 5], 81, [83, 85]],
                    8: [[0, 4], 11, 23, 25, [81, 83]],
                    9: [[0, 3], 23, [81, 83]],
                    12: [[0, 3], [23, 26], 83, 84],
                    13: [[0, 3], [22, 24], 81],
                    14: [[0, 2], [21, 24], 26, 27, 81],
                    15: [[0, 2], 21, 23, 81],
                    16: [[0, 2], [21, 25]],
                    17: [[0, 2], 21, 23, 81],
                    18: [[0, 3], 21, 23, [25, 27], 81, 82],
                    19: [0],
                    20: [0],
                    51: [[0, 3], 21, 22],
                    52: [[0, 3], 21, 22, 24, 81],
                    53: [[0, 2], [21, 23], 81]
                },
                45: {
                    0: [0],
                    1: [[0, 9], [21, 27]],
                    2: [[0, 5], [21, 26]],
                    3: [[0, 5], 11, 12, [21, 32]],
                    4: [0, 1, [3, 6], 11, [21, 23], 81],
                    5: [[0, 3], 12, 21],
                    6: [[0, 3], 21, 81],
                    7: [[0, 3], 21, 22],
                    8: [[0, 4], 21, 81],
                    9: [[0, 3], [21, 24], 81],
                    10: [[0, 2], [21, 31]],
                    11: [[0, 2], [21, 23]],
                    12: [[0, 2], [21, 29], 81],
                    13: [[0, 2], [21, 24], 81],
                    14: [[0, 2], [21, 25], 81]
                },
                46: {
                    0: [0],
                    1: [0, 1, [5, 8]],
                    2: [0, 1],
                    3: [0, [21, 23]],
                    90: [[0, 3], [5, 7], [21, 39]]
                },
                50: {
                    0: [0],
                    1: [[0, 19]],
                    2: [0, [22, 38], [40, 43]],
                    3: [0, [81, 84]]
                },
                51: {
                    0: [0],
                    1: [0, 1, [4, 8], [12, 15], [21, 24], 29, 31, 32, [81, 84]],
                    3: [[0, 4], 11, 21, 22],
                    4: [[0, 3], 11, 21, 22],
                    5: [[0, 4], 21, 22, 24, 25],
                    6: [0, 1, 3, 23, 26, [81, 83]],
                    7: [0, 1, 3, 4, [22, 27], 81],
                    8: [[0, 2], 11, 12, [21, 24]],
                    9: [[0, 4], [21, 23]],
                    10: [[0, 2], 11, 24, 25, 28],
                    11: [[0, 2], [11, 13], 23, 24, 26, 29, 32, 33, 81],
                    13: [[0, 4], [21, 25], 81],
                    14: [[0, 2], [21, 25]],
                    15: [[0, 3], [21, 29]],
                    16: [[0, 3], [21, 23], 81],
                    17: [[0, 3], [21, 25], 81],
                    18: [[0, 3], [21, 27]],
                    19: [[0, 3], [21, 23]],
                    20: [[0, 2], 21, 22, 81],
                    32: [0, [21, 33]],
                    33: [0, [21, 38]],
                    34: [0, 1, [22, 37]]
                },
                52: {
                    0: [0],
                    1: [[0, 3], [11, 15], [21, 23], 81],
                    2: [0, 1, 3, 21, 22],
                    3: [[0, 3], [21, 30], 81, 82],
                    4: [[0, 2], [21, 25]],
                    5: [[0, 2], [21, 27]],
                    6: [[0, 3], [21, 28]],
                    22: [0, 1, [22, 30]],
                    23: [0, 1, [22, 28]],
                    24: [0, 1, [22, 28]],
                    26: [0, 1, [22, 36]],
                    27: [[0, 2], 22, 23, [25, 32]]
                },
                53: {
                    0: [0],
                    1: [[0, 3], [11, 14], 21, 22, [24, 29], 81],
                    3: [[0, 2], [21, 26], 28, 81],
                    4: [[0, 2], [21, 28]],
                    5: [[0, 2], [21, 24]],
                    6: [[0, 2], [21, 30]],
                    7: [[0, 2], [21, 24]],
                    8: [[0, 2], [21, 29]],
                    9: [[0, 2], [21, 27]],
                    23: [0, 1, [22, 29], 31],
                    25: [[0, 4], [22, 32]],
                    26: [0, 1, [21, 28]],
                    27: [0, 1, [22, 30]], 28: [0, 1, 22, 23],
                    29: [0, 1, [22, 32]],
                    31: [0, 2, 3, [22, 24]],
                    34: [0, [21, 23]],
                    33: [0, 21, [23, 25]],
                    35: [0, [21, 28]]
                },
                54: {
                    0: [0],
                    1: [[0, 2], [21, 27]],
                    21: [0, [21, 29], 32, 33],
                    22: [0, [21, 29], [31, 33]],
                    23: [0, 1, [22, 38]],
                    24: [0, [21, 31]],
                    25: [0, [21, 27]],
                    26: [0, [21, 27]]
                },
                61: {
                    0: [0],
                    1: [[0, 4], [11, 16], 22, [24, 26]],
                    2: [[0, 4], 22],
                    3: [[0, 4], [21, 24], [26, 31]],
                    4: [[0, 4], [22, 31], 81],
                    5: [[0, 2], [21, 28], 81, 82],
                    6: [[0, 2], [21, 32]],
                    7: [[0, 2], [21, 30]],
                    8: [[0, 2], [21, 31]],
                    9: [[0, 2], [21, 29]],
                    10: [[0, 2], [21, 26]]
                },
                62: {
                    0: [0],
                    1: [[0, 5], 11, [21, 23]],
                    2: [0, 1],
                    3: [[0, 2], 21],
                    4: [[0, 3], [21, 23]],
                    5: [[0, 3], [21, 25]],
                    6: [[0, 2], [21, 23]],
                    7: [[0, 2], [21, 25]],
                    8: [[0, 2], [21, 26]],
                    9: [[0, 2], [21, 24], 81, 82],
                    10: [[0, 2], [21, 27]],
                    11: [[0, 2], [21, 26]],
                    12: [[0, 2], [21, 28]],
                    24: [0, 21, [24, 29]],
                    26: [0, 21, [23, 30]],
                    29: [0, 1, [21, 27]],
                    30: [0, 1, [21, 27]]
                },
                63: {
                    0: [0],
                    1: [[0, 5], [21, 23]],
                    2: [0, 2, [21, 25]],
                    21: [0, [21, 23], [26, 28]],
                    22: [0, [21, 24]],
                    23: [0, [21, 24]],
                    25: [0, [21, 25]],
                    26: [0, [21, 26]],
                    27: [0, 1, [21, 26]],
                    28: [[0, 2], [21, 23]]
                },
                64: {
                    0: [0],
                    1: [0, 1, [4, 6], 21, 22, 81],
                    2: [[0, 3], 5, [21, 23]],
                    3: [[0, 3], [21, 24], 81],
                    4: [[0, 2], [21, 25]],
                    5: [[0, 2], 21, 22]
                },
                65: {
                    0: [0],
                    1: [[0, 9], 21],
                    2: [[0, 5]],
                    21: [0, 1, 22, 23],
                    22: [0, 1, 22, 23],
                    23: [[0, 3], [23, 25], 27, 28],
                    28: [0, 1, [22, 29]],
                    29: [0, 1, [22, 29]],
                    30: [0, 1, [22, 24]], 31: [0, 1, [21, 31]],
                    32: [0, 1, [21, 27]],
                    40: [0, 2, 3, [21, 28]],
                    42: [[0, 2], 21, [23, 26]],
                    43: [0, 1, [21, 26]],
                    90: [[0, 4]], 27: [[0, 2], 22, 23]
                },
                71: { 0: [0] },
                81: { 0: [0] },
                82: { 0: [0] }
            };
            
            var provincial  = parseInt(value.substr(0, 2), 10),
                prefectural = parseInt(value.substr(2, 2), 10),
                county      = parseInt(value.substr(4, 2), 10);
            
            if (!adminDivisionCodes[provincial] || !adminDivisionCodes[provincial][prefectural]) {
                return false;
            }
            var inRange  = false,
                rangeDef = adminDivisionCodes[provincial][prefectural];
            for (var i = 0; i < rangeDef.length; i++) {
                if (($.isArray(rangeDef[i]) && rangeDef[i][0] <= county && county <= rangeDef[i][1])
                    || (!$.isArray(rangeDef[i]) && county === rangeDef[i]))
                {
                    inRange = true;
                    break;
                }
            }

            if (!inRange) {
                return false;
            }
            
            // Check date of birth
            var dob;
            if (value.length === 18) {
                dob = value.substr(6, 8);
            } else /* length == 15 */ { 
                dob = '19' + value.substr(6, 6);
            }
            var year  = parseInt(dob.substr(0, 4), 10),
                month = parseInt(dob.substr(4, 2), 10),
                day   = parseInt(dob.substr(6, 2), 10);
            if (!FormValidation.Helper.date(year, month, day)) {
                return false;
            }
            
            // Check checksum (18-digit system only)
            if (value.length === 18) {
                var sum    = 0,
                    weight = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
                for (i = 0; i < 17; i++) {
                    sum += parseInt(value.charAt(i), 10) * weight[i];
                }
                sum = (12 - (sum % 11)) % 11;
                var checksum = (value.charAt(17).toUpperCase() !== 'X') ? parseInt(value.charAt(17), 10) : 10;
                return checksum === sum;
            }
            
            return true;
        },
        
        /**
         * Validate Czech national identification number (RC)
         * Examples:
         * - Valid: 7103192745, 991231123
         * - Invalid: 1103492745, 590312123
         *
         * @param {String} value The ID
         * @returns {Boolean}
         */
        _cz: function(value) {
            if (!/^\d{9,10}$/.test(value)) {
                return false;
            }
            var year  = 1900 + parseInt(value.substr(0, 2), 10),
                month = parseInt(value.substr(2, 2), 10) % 50 % 20,
                day   = parseInt(value.substr(4, 2), 10);
            if (value.length === 9) {
                if (year >= 1980) {
                    year -= 100;
                }
                if (year > 1953) {
                    return false;
                }
            } else if (year < 1954) {
                year += 100;
            }

            if (!FormValidation.Helper.date(year, month, day)) {
                return false;
            }

            // Check that the birth date is not in the future
            if (value.length === 10) {
                var check = parseInt(value.substr(0, 9), 10) % 11;
                if (year < 1985) {
                    check = check % 10;
                }
                return (check + '' === value.substr(9, 1));
            }

            return true;
        },

        /**
         * Validate Danish Personal Identification number (CPR)
         * Examples:
         * - Valid: 2110625629, 211062-5629
         * - Invalid: 511062-5629
         *
         * @see https://en.wikipedia.org/wiki/Personal_identification_number_(Denmark)
         * @param {String} value The ID
         * @returns {Boolean}
         */
        _dk: function(value) {
            if (!/^[0-9]{6}[-]{0,1}[0-9]{4}$/.test(value)) {
                return false;
            }
            value = value.replace(/-/g, '');
            var day   = parseInt(value.substr(0, 2), 10),
                month = parseInt(value.substr(2, 2), 10),
                year  = parseInt(value.substr(4, 2), 10);

            switch (true) {
                case ('5678'.indexOf(value.charAt(6)) !== -1 && year >= 58):
                    year += 1800;
                    break;
                case ('0123'.indexOf(value.charAt(6)) !== -1):
                case ('49'.indexOf(value.charAt(6)) !== -1 && year >= 37):
                    year += 1900;
                    break;
                default:
                    year += 2000;
                    break;
            }

            return FormValidation.Helper.date(year, month, day);
        },

        /**
         * Validate Estonian Personal Identification Code (isikukood)
         * Examples:
         * - Valid: 37605030299
         *
         * @see http://et.wikipedia.org/wiki/Isikukood
         * @param {String} value The ID
         * @returns {Boolean}
         */
        _ee: function(value) {
            // Use the same format as Lithuanian Personal Code
            return this._lt(value);
        },

        /**
         * Validate Spanish personal identity code (DNI)
         * Support i) DNI (for Spanish citizens), ii) NIE (for foreign people)
         * and iii) CIF (for legal entities)
         *
         * Examples:
         * - Valid:
         *      i) 54362315K, 54362315-K
         *      ii) X2482300W, X-2482300W, X-2482300-W
         *      iii) A58818501, A-58818501
         * - Invalid:
         *      i) 54362315Z
         *      ii) X-2482300A
         *      iii) K58818501, G58818507
         *
         * @see https://en.wikipedia.org/wiki/National_identification_number#Spain
         * @param {String} value The ID
         * @returns {Boolean}
         */
        _es: function(value) {
            var isDNI = /^[0-9]{8}[-]{0,1}[A-HJ-NP-TV-Z]$/.test(value),
                isNIE = /^[XYZ][-]{0,1}[0-9]{7}[-]{0,1}[A-HJ-NP-TV-Z]$/.test(value),
                isCIF = /^[A-HNPQS][-]{0,1}[0-9]{7}[-]{0,1}[0-9A-J]$/.test(value);
            if (!isDNI && !isNIE && !isCIF) {
                return false;
            }

            value = value.replace(/-/g, '');
            var check;
            if (isDNI || isNIE) {
                var index = 'XYZ'.indexOf(value.charAt(0));
                if (index !== -1) {
                    // It is NIE number
                    value = index + value.substr(1) + '';
                }

                check = parseInt(value.substr(0, 8), 10);
                check = 'TRWAGMYFPDXBNJZSQVHLCKE'[check % 23];
                return (check === value.substr(8, 1));
            } else {
                check = value.substr(1, 7);
                var letter  = value[0],
                    control = value.substr(-1),
                    sum     = 0;

                // The digits in the even positions are added to the sum directly.
                // The ones in the odd positions are multiplied by 2 and then added to the sum.
                // If the result of multiplying by 2 is 10 or higher, add the two digits
                // together and add that to the sum instead
                for (var i = 0; i < check.length; i++) {
                    if (i % 2 !== 0) {
                        sum += parseInt(check[i], 10);
                    } else {
                        var tmp = '' + (parseInt(check[i], 10) * 2);
                        sum += parseInt(tmp[0], 10);
                        if (tmp.length === 2) {
                            sum += parseInt(tmp[1], 10);
                        }
                    }
                }

                // The control digit is calculated from the last digit of the sum.
                // If that last digit is not 0, subtract it from 10
                var lastDigit = sum - (Math.floor(sum / 10) * 10);
                if (lastDigit !== 0) {
                    lastDigit = 10 - lastDigit;
                }
                
                if ('KQS'.indexOf(letter) !== -1) {
                    // If the CIF starts with a K, Q or S, the control digit must be a letter
                    return (control === 'JABCDEFGHI'[lastDigit]);
                } else if ('ABEH'.indexOf(letter) !== -1) {
                    // If it starts with A, B, E or H, it has to be a number
                    return (control === ('' + lastDigit));
                } else {
                    // In any other case, it doesn't matter
                    return (control === ('' + lastDigit) || control === 'JABCDEFGHI'[lastDigit]);
                }
            }
        },

        /**
         * Validate Finnish Personal Identity Code (HETU)
         * Examples:
         * - Valid: 311280-888Y, 131052-308T
         * - Invalid: 131052-308U, 310252-308Y
         *
         * @param {String} value The ID
         * @returns {Boolean}
         */
        _fi: function(value) {
            if (!/^[0-9]{6}[-+A][0-9]{3}[0-9ABCDEFHJKLMNPRSTUVWXY]$/.test(value)) {
                return false;
            }
            var day       = parseInt(value.substr(0, 2), 10),
                month     = parseInt(value.substr(2, 2), 10),
                year      = parseInt(value.substr(4, 2), 10),
                centuries = {
                    '+': 1800,
                    '-': 1900,
                    'A': 2000
                };
            year = centuries[value.charAt(6)] + year;

            if (!FormValidation.Helper.date(year, month, day)) {
                return false;
            }

            var individual = parseInt(value.substr(7, 3), 10);
            if (individual < 2) {
                return false;
            }
            var n = value.substr(0, 6) + value.substr(7, 3) + '';
            n = parseInt(n, 10);
            return '0123456789ABCDEFHJKLMNPRSTUVWXY'.charAt(n % 31) === value.charAt(10);
        },

        /**
         * Validate Croatian personal identification number (OIB)
         * Examples:
         * - Valid: 33392005961
         * - Invalid: 33392005962
         *
         * @param {String} value The ID
         * @returns {Boolean}
         */
        _hr: function(value) {
            if (!/^[0-9]{11}$/.test(value)) {
                return false;
            }
            return FormValidation.Helper.mod11And10(value);
        },

        /**
         * Validate Irish Personal Public Service Number (PPS)
         * Examples:
         * - Valid: 6433435F, 6433435FT, 6433435FW, 6433435OA, 6433435IH, 1234567TW, 1234567FA
         * - Invalid: 6433435E, 6433435VH
         *
         * @see https://en.wikipedia.org/wiki/Personal_Public_Service_Number
         * @param {String} value The ID
         * @returns {Boolean}
         */
        _ie: function(value) {
            if (!/^\d{7}[A-W][AHWTX]?$/.test(value)) {
                return false;
            }

            var getCheckDigit = function(value) {
                while (value.length < 7) {
                    value = '0' + value;
                }
                var alphabet = 'WABCDEFGHIJKLMNOPQRSTUV',
                    sum      = 0;
                for (var i = 0; i < 7; i++) {
                    sum += parseInt(value.charAt(i), 10) * (8 - i);
                }
                sum += 9 * alphabet.indexOf(value.substr(7));
                return alphabet[sum % 23];
            };

            // 2013 format
            if (value.length === 9 && ('A' === value.charAt(8) || 'H' === value.charAt(8))) {
                return value.charAt(7) === getCheckDigit(value.substr(0, 7) + value.substr(8) + '');
            }
            // The old format
            else {
                return value.charAt(7) === getCheckDigit(value.substr(0, 7));
            }
        },

        /**
         * Validate Iceland national identification number (Kennitala)
         * Examples:
         * - Valid: 120174-3399, 1201743399, 0902862349
         *
         * @see http://en.wikipedia.org/wiki/Kennitala
         * @param {String} value The ID
         * @returns {Boolean}
         */
        _is: function(value) {
            if (!/^[0-9]{6}[-]{0,1}[0-9]{4}$/.test(value)) {
                return false;
            }
            value = value.replace(/-/g, '');
            var day     = parseInt(value.substr(0, 2), 10),
                month   = parseInt(value.substr(2, 2), 10),
                year    = parseInt(value.substr(4, 2), 10),
                century = parseInt(value.charAt(9), 10);

            year = (century === 9) ? (1900 + year) : ((20 + century) * 100 + year);
            if (!FormValidation.Helper.date(year, month, day, true)) {
                return false;
            }
            // Validate the check digit
            var sum    = 0,
                weight = [3, 2, 7, 6, 5, 4, 3, 2];
            for (var i = 0; i < 8; i++) {
                sum += parseInt(value.charAt(i), 10) * weight[i];
            }
            sum = 11 - sum % 11;
            return (sum + '' === value.charAt(8));
        },

        /**
         * Validate Lithuanian Personal Code (Asmens kodas)
         * Examples:
         * - Valid: 38703181745
         * - Invalid: 38703181746, 78703181745, 38703421745
         *
         * @see http://en.wikipedia.org/wiki/National_identification_number#Lithuania
         * @see http://www.adomas.org/midi2007/pcode.html
         * @param {String} value The ID
         * @returns {Boolean}
         */
        _lt: function(value) {
            if (!/^[0-9]{11}$/.test(value)) {
                return false;
            }
            var gender  = parseInt(value.charAt(0), 10),
                year    = parseInt(value.substr(1, 2), 10),
                month   = parseInt(value.substr(3, 2), 10),
                day     = parseInt(value.substr(5, 2), 10),
                century = (gender % 2 === 0) ? (17 + gender / 2) : (17 + (gender + 1) / 2);
            year = century * 100 + year;
            if (!FormValidation.Helper.date(year, month, day, true)) {
                return false;
            }

            // Validate the check digit
            var sum    = 0,
                weight = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1];
            for (var i = 0; i < 10; i++) {
                sum += parseInt(value.charAt(i), 10) * weight[i];
            }
            sum = sum % 11;
            if (sum !== 10) {
                return sum + '' === value.charAt(10);
            }

            // Re-calculate the check digit
            sum    = 0;
            weight = [3, 4, 5, 6, 7, 8, 9, 1, 2, 3];
            for (i = 0; i < 10; i++) {
                sum += parseInt(value.charAt(i), 10) * weight[i];
            }
            sum = sum % 11;
            if (sum === 10) {
                sum = 0;
            }
            return (sum + '' === value.charAt(10));
        },

        /**
         * Validate Latvian Personal Code (Personas kods)
         * Examples:
         * - Valid: 161175-19997, 16117519997
         * - Invalid: 161375-19997
         *
         * @see http://laacz.lv/2006/11/25/pk-parbaudes-algoritms/
         * @param {String} value The ID
         * @returns {Boolean}
         */
        _lv: function(value) {
            if (!/^[0-9]{6}[-]{0,1}[0-9]{5}$/.test(value)) {
                return false;
            }
            value = value.replace(/\D/g, '');
            // Check birth date
            var day   = parseInt(value.substr(0, 2), 10),
                month = parseInt(value.substr(2, 2), 10),
                year  = parseInt(value.substr(4, 2), 10);
            year = year + 1800 + parseInt(value.charAt(6), 10) * 100;

            if (!FormValidation.Helper.date(year, month, day, true)) {
                return false;
            }

            // Check personal code
            var sum    = 0,
                weight = [10, 5, 8, 4, 2, 1, 6, 3, 7, 9];
            for (var i = 0; i < 10; i++) {
                sum += parseInt(value.charAt(i), 10) * weight[i];
            }
            sum = (sum + 1) % 11 % 10;
            return (sum + '' === value.charAt(10));
        },

        /**
         * Validate Dutch national identification number (BSN)
         * Examples:
         * - Valid: 111222333, 941331490, 9413.31.490
         * - Invalid: 111252333
         *
         * @see https://nl.wikipedia.org/wiki/Burgerservicenummer
         * @param {String} value The ID
         * @returns {Boolean}
         */
        _nl: function(value) {
            while (value.length < 9) {
                value = '0' + value;
            }
            if (!/^[0-9]{4}[.]{0,1}[0-9]{2}[.]{0,1}[0-9]{3}$/.test(value)) {
                return false;
            }
            value = value.replace(/\./g, '');
            if (parseInt(value, 10) === 0) {
                return false;
            }
            var sum    = 0,
                length = value.length;
            for (var i = 0; i < length - 1; i++) {
                sum += (9 - i) * parseInt(value.charAt(i), 10);
            }
            sum = sum % 11;
            if (sum === 10) {
                sum = 0;
            }
            return (sum + '' === value.charAt(length - 1));
        },
        
        /**
         * Validate Poland citizen number (PESEL)
         * 
         * @see http://en.wikipedia.org/wiki/National_identification_number#Poland
         * @see http://en.wikipedia.org/wiki/PESEL
         * @param {String} value The ID
         * @returns {Boolean}
         */
        _pl: function(value) {
            if (!/^[0-9]{11}$/.test(value)) {
                return false;
            }

            var sum    = 0,
                length = value.length,
                weight = [1, 3, 7, 9, 1, 3, 7, 9, 1, 3, 7];

            for (var i = 0; i < length - 1; i++) {
                sum += weight[i] * parseInt(value.charAt(i), 10);
            }
            sum = sum % 10;
            if (sum === 0) {
                sum = 10;
            }
            sum = 10 - sum;

            return (sum + '' === value.charAt(length - 1));
        },

        /**
         * Validate Romanian numerical personal code (CNP)
         * Examples:
         * - Valid: 1630615123457, 1800101221144
         * - Invalid: 8800101221144, 1632215123457, 1630615123458
         *
         * @see http://en.wikipedia.org/wiki/National_identification_number#Romania
         * @param {String} value The ID
         * @returns {Boolean}
         */
        _ro: function(value) {
            if (!/^[0-9]{13}$/.test(value)) {
                return false;
            }
            var gender = parseInt(value.charAt(0), 10);
            if (gender === 0 || gender === 7 || gender === 8) {
                return false;
            }

            // Determine the date of birth
            var year      = parseInt(value.substr(1, 2), 10),
                month     = parseInt(value.substr(3, 2), 10),
                day       = parseInt(value.substr(5, 2), 10),
                // The year of date is determined base on the gender
                centuries = {
                    '1': 1900,  // Male born between 1900 and 1999
                    '2': 1900,  // Female born between 1900 and 1999
                    '3': 1800,  // Male born between 1800 and 1899
                    '4': 1800,  // Female born between 1800 and 1899
                    '5': 2000,  // Male born after 2000
                    '6': 2000   // Female born after 2000
                };
            if (day > 31 && month > 12) {
                return false;
            }
            if (gender !== 9) {
                year = centuries[gender + ''] + year;
                if (!FormValidation.Helper.date(year, month, day)) {
                    return false;
                }
            }

            // Validate the check digit
            var sum    = 0,
                weight = [2, 7, 9, 1, 4, 6, 3, 5, 8, 2, 7, 9],
                length = value.length;
            for (var i = 0; i < length - 1; i++) {
                sum += parseInt(value.charAt(i), 10) * weight[i];
            }
            sum = sum % 11;
            if (sum === 10) {
                sum = 1;
            }
            return (sum + '' === value.charAt(length - 1));
        },

        /**
         * Validate Swedish personal identity number (personnummer)
         * Examples:
         * - Valid: 8112289874, 811228-9874, 811228+9874
         * - Invalid: 811228-9873
         *
         * @see http://en.wikipedia.org/wiki/Personal_identity_number_(Sweden)
         * @param {String} value The ID
         * @returns {Boolean}
         */
        _se: function(value) {
            if (!/^[0-9]{10}$/.test(value) && !/^[0-9]{6}[-|+][0-9]{4}$/.test(value)) {
                return false;
            }
            value = value.replace(/[^0-9]/g, '');

            var year  = parseInt(value.substr(0, 2), 10) + 1900,
                month = parseInt(value.substr(2, 2), 10),
                day   = parseInt(value.substr(4, 2), 10);
            if (!FormValidation.Helper.date(year, month, day)) {
                return false;
            }

            // Validate the last check digit
            return FormValidation.Helper.luhn(value);
        },

        /**
         * Validate Slovak national identifier number (RC)
         * Examples:
         * - Valid: 7103192745, 991231123
         * - Invalid: 7103192746, 1103492745
         *
         * @param {String} value The ID
         * @returns {Boolean}
         */
        _sk: function(value) {
            // Slovakia uses the same format as Czech Republic
            return this._cz(value);
        },

        /**
         * Validate San Marino citizen number
         *
         * @see http://en.wikipedia.org/wiki/National_identification_number#San_Marino
         * @param {String} value The ID
         * @returns {Boolean}
         */
        _sm: function(value) {
            return /^\d{5}$/.test(value);
        },

        /**
         * Validate Thailand citizen number
         * Examples:
         * - Valid: 7145620509547, 3688699975685, 2368719339716
         * - Invalid: 1100800092310
         *
         * @see http://en.wikipedia.org/wiki/National_identification_number#Thailand
         * @param {String} value The ID
         * @returns {Boolean}
         */
        _th: function(value) {
            if (value.length !== 13) {
                return false;
            }

            var sum = 0;
            for (var i = 0; i < 12; i++) {
                sum += parseInt(value.charAt(i), 10) * (13 - i);
            }

            return (11 - sum % 11) % 10 === parseInt(value.charAt(12), 10);
        },

        /**
         * Validate South African ID
         * Example:
         * - Valid: 8001015009087
         * - Invalid: 8001015009287, 8001015009086
         *
         * @see http://en.wikipedia.org/wiki/National_identification_number#South_Africa
         * @param {String} value The ID
         * @returns {Boolean}
         */
        _za: function(value) {
            if (!/^[0-9]{10}[0|1][8|9][0-9]$/.test(value)) {
                return false;
            }
            var year        = parseInt(value.substr(0, 2), 10),
                currentYear = new Date().getFullYear() % 100,
                month       = parseInt(value.substr(2, 2), 10),
                day         = parseInt(value.substr(4, 2), 10);
            year = (year >= currentYear) ? (year + 1900) : (year + 2000);

            if (!FormValidation.Helper.date(year, month, day)) {
                return false;
            }

            // Validate the last check digit
            return FormValidation.Helper.luhn(value);
        }
    };
}(jQuery));
;(function($) {
    FormValidation.I18n = $.extend(true, FormValidation.I18n || {}, {
        'en_US': {
            identical: {
                'default': 'Please enter the same value'
            }
        }
    });

    FormValidation.Validator.identical = {
        html5Attributes: {
            message: 'message',
            field: 'field'
        },

        /**
         * Bind the validator on the live change of the field to compare with current one
         *
         * @param {FormValidation.Base} validator The validator plugin instance
         * @param {jQuery} $field Field element
         * @param {Object} options Consists of the following key:
         * - field: The name of field that will be used to compare with current one
         */
        init: function(validator, $field, options) {
            var compareWith = validator.getFieldElements(options.field);
            validator.onLiveChange(compareWith, 'live_identical', function() {
                var status = validator.getStatus($field, 'identical');
                if (status !== validator.STATUS_NOT_VALIDATED) {
                    validator.revalidateField($field);
                }
            });
        },

        /**
         * Unbind the validator on the live change of the field to compare with current one
         *
         * @param {FormValidation.Base} validator The validator plugin instance
         * @param {jQuery} $field Field element
         * @param {Object} options Consists of the following key:
         * - field: The name of field that will be used to compare with current one
         */
        destroy: function(validator, $field, options) {
            var compareWith = validator.getFieldElements(options.field);
            validator.offLiveChange(compareWith, 'live_identical');
        },

        /**
         * Check if input value equals to value of particular one
         *
         * @param {FormValidation.Base} validator The validator plugin instance
         * @param {jQuery} $field Field element
         * @param {Object} options Consists of the following key:
         * - field: The name of field that will be used to compare with current one
         * @returns {Boolean}
         */
        validate: function(validator, $field, options) {
            var value       = validator.getFieldValue($field, 'identical'),
                compareWith = validator.getFieldElements(options.field);
            if (compareWith === null || compareWith.length === 0) {
                return true;
            }

            var compareValue = validator.getFieldValue(compareWith, 'identical');
            if (value === compareValue) {
                validator.updateStatus(compareWith, validator.STATUS_VALID, 'identical');
                return true;
            }

            return false;
        }
    };
}(jQuery));
;(function($) {
    FormValidation.I18n = $.extend(true, FormValidation.I18n || {}, {
        'en_US': {
            imei: {
                'default': 'Please enter a valid IMEI number'
            }
        }
    });

    FormValidation.Validator.imei = {
        /**
         * Validate IMEI (International Mobile Station Equipment Identity)
         * Examples:
         * - Valid: 35-209900-176148-1, 35-209900-176148-23, 3568680000414120, 490154203237518
         * - Invalid: 490154203237517
         *
         * @see http://en.wikipedia.org/wiki/International_Mobile_Station_Equipment_Identity
         * @param {FormValidation.Base} validator The validator plugin instance
         * @param {jQuery} $field Field element
         * @param {Object} options Can consist of the following keys:
         * - message: The invalid message
         * @returns {Boolean}
         */
        validate: function(validator, $field, options) {
            var value = validator.getFieldValue($field, 'imei');
            if (value === '') {
                return true;
            }

            switch (true) {
                case /^\d{15}$/.test(value):
                case /^\d{2}-\d{6}-\d{6}-\d{1}$/.test(value):
                case /^\d{2}\s\d{6}\s\d{6}\s\d{1}$/.test(value):
                    value = value.replace(/[^0-9]/g, '');
                    return FormValidation.Helper.luhn(value);

                case /^\d{14}$/.test(value):
                case /^\d{16}$/.test(value):
                case /^\d{2}-\d{6}-\d{6}(|-\d{2})$/.test(value):
                case /^\d{2}\s\d{6}\s\d{6}(|\s\d{2})$/.test(value):
                    return true;

                default:
                    return false;
            }
        }
    };
}(jQuery));
;(function($) {
    FormValidation.I18n = $.extend(true, FormValidation.I18n || {}, {
        'en_US': {
            imo: {
                'default': 'Please enter a valid IMO number'
            }
        }
    });

    FormValidation.Validator.imo = {
        /**
         * Validate IMO (International Maritime Organization)
         * Examples:
         * - Valid: IMO 8814275, IMO 9176187
         * - Invalid: IMO 8814274
         *
         * @see http://en.wikipedia.org/wiki/IMO_Number
         * @param {FormValidation.Base} validator The validator plugin instance
         * @param {jQuery} $field Field element
         * @param {Object} options Can consist of the following keys:
         * - message: The invalid message
         * @returns {Boolean}
         */
        validate: function(validator, $field, options) {
            var value = validator.getFieldValue($field, 'imo');
            if (value === '') {
                return true;
            }

            if (!/^IMO \d{7}$/i.test(value)) {
                return false;
            }
            
            // Grab just the digits
            var sum    = 0,
                digits = value.replace(/^.*(\d{7})$/, '$1');
            
            // Go over each char, multiplying by the inverse of it's position
            // IMO 9176187
            // (9 * 7) + (1 * 6) + (7 * 5) + (6 * 4) + (1 * 3) + (8 * 2) = 147
            // Take the last digit of that, that's the check digit (7)
            for (var i = 6; i >= 1; i--) {
                sum += (digits.slice((6 - i), -i) * (i + 1));
            }

            return sum % 10 === parseInt(digits.charAt(6), 10);
        }
    };
}(jQuery));
;(function($) {
    FormValidation.I18n = $.extend(true, FormValidation.I18n || {}, {
        'en_US': {
            integer: {
                'default': 'Please enter a valid number'
            }
        }
    });

    FormValidation.Validator.integer = {
        enableByHtml5: function($field) {
            return ('number' === $field.attr('type')) && ($field.attr('step') === undefined || $field.attr('step') % 1 === 0);
        },

        /**
         * Return true if the input value is an integer
         *
         * @param {FormValidation.Base} validator The validator plugin instance
         * @param {jQuery} $field Field element
         * @param {Object} options Can consist of the following key:
         * - message: The invalid message
         * @returns {Boolean}
         */
        validate: function(validator, $field, options) {
            if (this.enableByHtml5($field) && $field.get(0).validity && $field.get(0).validity.badInput === true) {
                return false;
            }

            var value = validator.getFieldValue($field, 'integer');
            if (value === '') {
                return true;
            }
            return /^(?:-?(?:0|[1-9][0-9]*))$/.test(value);
        }
    };
}(jQuery));
;(function($) {
    FormValidation.I18n = $.extend(true, FormValidation.I18n || {}, {
        'en_US': {
            ip: {
                'default': 'Please enter a valid IP address',
                ipv4: 'Please enter a valid IPv4 address',
                ipv6: 'Please enter a valid IPv6 address'
            }
        }
    });

    FormValidation.Validator.ip = {
        html5Attributes: {
            message: 'message',
            ipv4: 'ipv4',
            ipv6: 'ipv6'
        },

        /**
         * Return true if the input value is a IP address.
         *
         * @param {FormValidation.Base} validator The validator plugin instance
         * @param {jQuery} $field Field element
         * @param {Object} options Can consist of the following keys:
         * - ipv4: Enable IPv4 validator, default to true
         * - ipv6: Enable IPv6 validator, default to true
         * - message: The invalid message
         * @returns {Boolean|Object}
         */
        validate: function(validator, $field, options) {
            var value = validator.getFieldValue($field, 'ip');
            if (value === '') {
                return true;
            }
            options = $.extend({}, { ipv4: true, ipv6: true }, options);

            var locale    = validator.getLocale(),
                ipv4Regex = /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/,
                ipv6Regex = /^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$/,
                valid     = false,
                message;

            switch (true) {
                case (options.ipv4 && !options.ipv6):
                    valid   = ipv4Regex.test(value);
                    message = options.message || FormValidation.I18n[locale].ip.ipv4;
                    break;

                case (!options.ipv4 && options.ipv6):
                    valid   = ipv6Regex.test(value);
                    message = options.message || FormValidation.I18n[locale].ip.ipv6;
                    break;

                case (options.ipv4 && options.ipv6):
                /* falls through */
                default:
                    valid   = ipv4Regex.test(value) || ipv6Regex.test(value);
                    message = options.message || FormValidation.I18n[locale].ip['default'];
                    break;
            }

            return {
                valid: valid,
                message: message
            };
        }
    };
}(jQuery));
;(function($) {
    FormValidation.I18n = $.extend(true, FormValidation.I18n || {}, {
        'en_US': {
            isbn: {
                'default': 'Please enter a valid ISBN number'
            }
        }
    });

    FormValidation.Validator.isbn = {
        /**
         * Return true if the input value is a valid ISBN 10 or ISBN 13 number
         * Examples:
         * - Valid:
         * ISBN 10: 99921-58-10-7, 9971-5-0210-0, 960-425-059-0, 80-902734-1-6, 85-359-0277-5, 1-84356-028-3, 0-684-84328-5, 0-8044-2957-X, 0-85131-041-9, 0-943396-04-2, 0-9752298-0-X
         * ISBN 13: 978-0-306-40615-7
         * - Invalid:
         * ISBN 10: 99921-58-10-6
         * ISBN 13: 978-0-306-40615-6
         *
         * @see http://en.wikipedia.org/wiki/International_Standard_Book_Number
         * @param {FormValidation.Base} validator The validator plugin instance
         * @param {jQuery} $field Field element
         * @param {Object} [options] Can consist of the following keys:
         * - message: The invalid message
         * @returns {Boolean}
         */
        validate: function(validator, $field, options) {
            var value = validator.getFieldValue($field, 'isbn');
            if (value === '') {
                return true;
            }

            // http://en.wikipedia.org/wiki/International_Standard_Book_Number#Overview
            // Groups are separated by a hyphen or a space
            var type;
            switch (true) {
                case /^\d{9}[\dX]$/.test(value):
                case (value.length === 13 && /^(\d+)-(\d+)-(\d+)-([\dX])$/.test(value)):
                case (value.length === 13 && /^(\d+)\s(\d+)\s(\d+)\s([\dX])$/.test(value)):
                    type = 'ISBN10';
                    break;
                case /^(978|979)\d{9}[\dX]$/.test(value):
                case (value.length === 17 && /^(978|979)-(\d+)-(\d+)-(\d+)-([\dX])$/.test(value)):
                case (value.length === 17 && /^(978|979)\s(\d+)\s(\d+)\s(\d+)\s([\dX])$/.test(value)):
                    type = 'ISBN13';
                    break;
                default:
                    return false;
            }

            // Replace all special characters except digits and X
            value = value.replace(/[^0-9X]/gi, '');
            var chars  = value.split(''),
                length = chars.length,
                sum    = 0,
                i,
                checksum;

            switch (type) {
                case 'ISBN10':
                    sum = 0;
                    for (i = 0; i < length - 1; i++) {
                        sum += parseInt(chars[i], 10) * (10 - i);
                    }
                    checksum = 11 - (sum % 11);
                    if (checksum === 11) {
                        checksum = 0;
                    } else if (checksum === 10) {
                        checksum = 'X';
                    }
                    return (checksum + '' === chars[length - 1]);

                case 'ISBN13':
                    sum = 0;
                    for (i = 0; i < length - 1; i++) {
                        sum += ((i % 2 === 0) ? parseInt(chars[i], 10) : (parseInt(chars[i], 10) * 3));
                    }
                    checksum = 10 - (sum % 10);
                    if (checksum === 10) {
                        checksum = '0';
                    }
                    return (checksum + '' === chars[length - 1]);

                default:
                    return false;
            }
        }
    };
}(jQuery));
;(function($) {
    FormValidation.I18n = $.extend(true, FormValidation.I18n || {}, {
        'en_US': {
            isin: {
                'default': 'Please enter a valid ISIN number'
            }
        }
    });

    FormValidation.Validator.isin = {
        // Available country codes
        // See http://isin.net/country-codes/
        COUNTRY_CODES: 'AF|AX|AL|DZ|AS|AD|AO|AI|AQ|AG|AR|AM|AW|AU|AT|AZ|BS|BH|BD|BB|BY|BE|BZ|BJ|BM|BT|BO|BQ|BA|BW|BV|BR|IO|BN|BG|BF|BI|KH|CM|CA|CV|KY|CF|TD|CL|CN|CX|CC|CO|KM|CG|CD|CK|CR|CI|HR|CU|CW|CY|CZ|DK|DJ|DM|DO|EC|EG|SV|GQ|ER|EE|ET|FK|FO|FJ|FI|FR|GF|PF|TF|GA|GM|GE|DE|GH|GI|GR|GL|GD|GP|GU|GT|GG|GN|GW|GY|HT|HM|VA|HN|HK|HU|IS|IN|ID|IR|IQ|IE|IM|IL|IT|JM|JP|JE|JO|KZ|KE|KI|KP|KR|KW|KG|LA|LV|LB|LS|LR|LY|LI|LT|LU|MO|MK|MG|MW|MY|MV|ML|MT|MH|MQ|MR|MU|YT|MX|FM|MD|MC|MN|ME|MS|MA|MZ|MM|NA|NR|NP|NL|NC|NZ|NI|NE|NG|NU|NF|MP|NO|OM|PK|PW|PS|PA|PG|PY|PE|PH|PN|PL|PT|PR|QA|RE|RO|RU|RW|BL|SH|KN|LC|MF|PM|VC|WS|SM|ST|SA|SN|RS|SC|SL|SG|SX|SK|SI|SB|SO|ZA|GS|SS|ES|LK|SD|SR|SJ|SZ|SE|CH|SY|TW|TJ|TZ|TH|TL|TG|TK|TO|TT|TN|TR|TM|TC|TV|UG|UA|AE|GB|US|UM|UY|UZ|VU|VE|VN|VG|VI|WF|EH|YE|ZM|ZW',

        /**
         * Validate an ISIN (International Securities Identification Number)
         * Examples:
         * - Valid: US0378331005, AU0000XVGZA3, GB0002634946
         * - Invalid: US0378331004, AA0000XVGZA3
         *
         * @see http://en.wikipedia.org/wiki/International_Securities_Identifying_Number
         * @param {FormValidation.Base} validator The validator plugin instance
         * @param {jQuery} $field Field element
         * @param {Object} options Can consist of the following keys:
         * - message: The invalid message
         * @returns {Boolean}
         */
        validate: function(validator, $field, options) {
            var value = validator.getFieldValue($field, 'isin');
            if (value === '') {
                return true;
            }

            value = value.toUpperCase();
            var regex = new RegExp('^(' + this.COUNTRY_CODES + ')[0-9A-Z]{10}$');
            if (!regex.test(value)) {
                return false;
            }

            var converted = '',
                length    = value.length;
            // Convert letters to number
            for (var i = 0; i < length - 1; i++) {
                var c = value.charCodeAt(i);
                converted += ((c > 57) ? (c - 55).toString() : value.charAt(i));
            }

            var digits = '',
                n      = converted.length,
                group  = (n % 2 !== 0) ? 0 : 1;
            for (i = 0; i < n; i++) {
                digits += (parseInt(converted[i], 10) * ((i % 2) === group ? 2 : 1) + '');
            }

            var sum = 0;
            for (i = 0; i < digits.length; i++) {
                sum += parseInt(digits.charAt(i), 10);
            }
            sum = (10 - (sum % 10)) % 10;
            return sum + '' === value.charAt(length - 1);
        }
    };
}(jQuery));
;(function($) {
    FormValidation.I18n = $.extend(true, FormValidation.I18n || {}, {
        'en_US': {
            ismn: {
                'default': 'Please enter a valid ISMN number'
            }
        }
    });

    FormValidation.Validator.ismn = {
        /**
         * Validate ISMN (International Standard Music Number)
         * Examples:
         * - Valid: M230671187, 979-0-0601-1561-5, 979 0 3452 4680 5, 9790060115615
         * - Invalid: 9790060115614
         *
         * @see http://en.wikipedia.org/wiki/International_Standard_Music_Number
         * @param {FormValidation.Base} validator The validator plugin instance
         * @param {jQuery} $field Field element
         * @param {Object} options Can consist of the following keys:
         * - message: The invalid message
         * @returns {Boolean}
         */
        validate: function(validator, $field, options) {
            var value = validator.getFieldValue($field, 'ismn');
            if (value === '') {
                return true;
            }

            // Groups are separated by a hyphen or a space
            var type;
            switch (true) {
                case /^M\d{9}$/.test(value):
                case /^M-\d{4}-\d{4}-\d{1}$/.test(value):
                case /^M\s\d{4}\s\d{4}\s\d{1}$/.test(value):
                    type = 'ISMN10';
                    break;
                case /^9790\d{9}$/.test(value):
                case /^979-0-\d{4}-\d{4}-\d{1}$/.test(value):
                case /^979\s0\s\d{4}\s\d{4}\s\d{1}$/.test(value):
                    type = 'ISMN13';
                    break;
                default:
                    return false;
            }

            if ('ISMN10' === type) {
                value = '9790' + value.substr(1);
            }

            // Replace all special characters except digits
            value = value.replace(/[^0-9]/gi, '');
            var length = value.length,
                sum    = 0,
                weight = [1, 3];
            for (var i = 0; i < length - 1; i++) {
                sum += parseInt(value.charAt(i), 10) * weight[i % 2];
            }
            sum = 10 - sum % 10;
            return (sum + '' === value.charAt(length - 1));
        }
    };
}(jQuery));
;(function($) {
    FormValidation.I18n = $.extend(true, FormValidation.I18n || {}, {
        'en_US': {
            issn: {
                'default': 'Please enter a valid ISSN number'
            }
        }
    });

    FormValidation.Validator.issn = {
        /**
         * Validate ISSN (International Standard Serial Number)
         * Examples:
         * - Valid: 0378-5955, 0024-9319, 0032-1478
         * - Invalid: 0032-147X
         *
         * @see http://en.wikipedia.org/wiki/International_Standard_Serial_Number
         * @param {FormValidation.Base} validator The validator plugin instance
         * @param {jQuery} $field Field element
         * @param {Object} options Can consist of the following keys:
         * - message: The invalid message
         * @returns {Boolean}
         */
        validate: function(validator, $field, options) {
            var value = validator.getFieldValue($field, 'issn');
            if (value === '') {
                return true;
            }

            // Groups are separated by a hyphen or a space
            if (!/^\d{4}\-\d{3}[\dX]$/.test(value)) {
                return false;
            }

            // Replace all special characters except digits and X
            value = value.replace(/[^0-9X]/gi, '');
            var chars  = value.split(''),
                length = chars.length,
                sum    = 0;

            if (chars[7] === 'X') {
                chars[7] = 10;
            }
            for (var i = 0; i < length; i++) {
                sum += parseInt(chars[i], 10) * (8 - i);
            }
            return (sum % 11 === 0);
        }
    };
}(jQuery));
;(function($) {
    FormValidation.I18n = $.extend(true, FormValidation.I18n || {}, {
        'en_US': {
            lessThan: {
                'default': 'Please enter a value less than or equal to %s',
                notInclusive: 'Please enter a value less than %s'
            }
        }
    });

    FormValidation.Validator.lessThan = {
        html5Attributes: {
            message: 'message',
            value: 'value',
            inclusive: 'inclusive'
        },

        enableByHtml5: function($field) {
            var type = $field.attr('type'),
                max  = $field.attr('max');
            if (max && type !== 'date') {
                return {
                    value: max
                };
            }

            return false;
        },

        /**
         * Return true if the input value is less than or equal to given number
         *
         * @param {FormValidation.Base} validator The validator plugin instance
         * @param {jQuery} $field Field element
         * @param {Object} options Can consist of the following keys:
         * - value: The number used to compare to. It can be
         *      - A number
         *      - Name of field which its value defines the number
         *      - Name of callback function that returns the number
         *      - A callback function that returns the number
         *
         * - inclusive [optional]: Can be true or false. Default is true
         * - message: The invalid message
         * @returns {Boolean|Object}
         */
        validate: function(validator, $field, options) {
            var value = validator.getFieldValue($field, 'lessThan');
            if (value === '') {
                return true;
            }
            
			value = this._format(value);
            if (!$.isNumeric(value)) {
                return false;
            }

            var locale         = validator.getLocale(),
                compareTo      = $.isNumeric(options.value) ? options.value : validator.getDynamicOption($field, options.value),
                compareToValue = this._format(compareTo);

            value = parseFloat(value);
            return (options.inclusive === true || options.inclusive === undefined)
                    ? {
                        valid: value <= compareToValue,
                        message: FormValidation.Helper.format(options.message || FormValidation.I18n[locale].lessThan['default'], compareTo)
                    }
                    : {
                        valid: value < compareToValue,
                        message: FormValidation.Helper.format(options.message || FormValidation.I18n[locale].lessThan.notInclusive, compareTo)
                    };
        },

        _format: function(value) {
            return (value + '').replace(',', '.');
        }
    };
}(jQuery));
;(function($) {
    FormValidation.I18n = $.extend(true, FormValidation.I18n || {}, {
        'en_US': {
            mac: {
                'default': 'Please enter a valid MAC address'
            }
        }
    });

    FormValidation.Validator.mac = {
        /**
         * Return true if the input value is a MAC address.
         *
         * @param {FormValidation.Base} validator The validator plugin instance
         * @param {jQuery} $field Field element
         * @param {Object} options Can consist of the following keys:
         * - message: The invalid message
         * @returns {Boolean}
         */
        validate: function(validator, $field, options) {
            var value = validator.getFieldValue($field, 'mac');
            if (value === '') {
                return true;
            }

            return /^([0-9A-F]{2}[:-]){5}([0-9A-F]{2})$/.test(value);
        }
    };
}(jQuery));
;(function($) {
    FormValidation.I18n = $.extend(true, FormValidation.I18n || {}, {
        'en_US': {
            meid: {
                'default': 'Please enter a valid MEID number'
            }
        }
    });

    FormValidation.Validator.meid = {
        /**
         * Validate MEID (Mobile Equipment Identifier)
         * Examples:
         * - Valid: 293608736500703710, 29360-87365-0070-3710, AF0123450ABCDE, AF-012345-0ABCDE
         * - Invalid: 2936087365007037101
         *
         * @see http://en.wikipedia.org/wiki/Mobile_equipment_identifier
         * @param {FormValidation.Base} validator The validator plugin instance
         * @param {jQuery} $field Field element
         * @param {Object} options Can consist of the following keys:
         * - message: The invalid message
         * @returns {Boolean}
         */
        validate: function(validator, $field, options) {
            var value = validator.getFieldValue($field, 'meid');
            if (value === '') {
                return true;
            }

            switch (true) {
                // 14 digit hex representation (no check digit)
                case /^[0-9A-F]{15}$/i.test(value):
                // 14 digit hex representation + dashes or spaces (no check digit)
                case /^[0-9A-F]{2}[- ][0-9A-F]{6}[- ][0-9A-F]{6}[- ][0-9A-F]$/i.test(value):
                // 18 digit decimal representation (no check digit)
                case /^\d{19}$/.test(value):
                // 18 digit decimal representation + dashes or spaces (no check digit)
                case /^\d{5}[- ]\d{5}[- ]\d{4}[- ]\d{4}[- ]\d$/.test(value):
                    // Grab the check digit
                    var cd = value.charAt(value.length - 1);

                    // Strip any non-hex chars
                    value = value.replace(/[- ]/g, '');

                    // If it's all digits, luhn base 10 is used
                    if (value.match(/^\d*$/i)) {
                        return FormValidation.Helper.luhn(value);
                    }

                    // Strip the check digit
                    value = value.slice(0, -1);

                    // Get every other char, and double it
                    var cdCalc = '';
                    for (var i = 1; i <= 13; i += 2) {
                        cdCalc += (parseInt(value.charAt(i), 16) * 2).toString(16);
                    }

                    // Get the sum of each char in the string
                    var sum = 0;
                    for (i = 0; i < cdCalc.length; i++) {
                        sum += parseInt(cdCalc.charAt(i), 16);
                    }

                    // If the last digit of the calc is 0, the check digit is 0
                    return (sum % 10 === 0)
                            ? (cd === '0')
                            // Subtract it from the next highest 10s number (64 goes to 70) and subtract the sum
                            // Double it and turn it into a hex char
                            : (cd === ((Math.floor((sum + 10) / 10) * 10 - sum) * 2).toString(16));

                // 14 digit hex representation (no check digit)
                case /^[0-9A-F]{14}$/i.test(value):
                // 14 digit hex representation + dashes or spaces (no check digit)
                case /^[0-9A-F]{2}[- ][0-9A-F]{6}[- ][0-9A-F]{6}$/i.test(value):
                // 18 digit decimal representation (no check digit)
                case /^\d{18}$/.test(value):
                // 18 digit decimal representation + dashes or spaces (no check digit)
                case /^\d{5}[- ]\d{5}[- ]\d{4}[- ]\d{4}$/.test(value):
                    return true;

                default:
                    return false;
            }
        }
    };
}(jQuery));
;(function($) {
    FormValidation.I18n = $.extend(true, FormValidation.I18n || {}, {
        'en_US': {
            notEmpty: {
                'default': 'Please enter a value'
            }
        }
    });

    FormValidation.Validator.notEmpty = {
        enableByHtml5: function($field) {
            var required = $field.attr('required') + '';
            return ('required' === required || 'true' === required);
        },

        /**
         * Check if input value is empty or not
         *
         * @param {FormValidation.Base} validator The validator plugin instance
         * @param {jQuery} $field Field element
         * @param {Object} options
         * @returns {Boolean}
         */
        validate: function(validator, $field, options) {
            var type = $field.attr('type');
            if ('radio' === type || 'checkbox' === type) {
                var ns = validator.getNamespace();
                return validator
                            .getFieldElements($field.attr('data-' + ns + '-field'))
                            .filter(':checked')
                            .length > 0;
            }

            if ('number' === type && $field.get(0).validity && $field.get(0).validity.badInput === true) {
                return true;
            }

            var value = validator.getFieldValue($field, 'notEmpty');
            return $.trim(value) !== '';
        }
    };
}(jQuery));
;(function($) {
    FormValidation.I18n = $.extend(true, FormValidation.I18n || {}, {
        'en_US': {
            numeric: {
                'default': 'Please enter a valid float number'
            }
        }
    });

    FormValidation.Validator.numeric = {
        html5Attributes: {
            message: 'message',
            separator: 'separator'
        },

        enableByHtml5: function($field) {
            return ('number' === $field.attr('type')) && ($field.attr('step') !== undefined) && ($field.attr('step') % 1 !== 0);
        },

        /**
         * Validate decimal number
         *
         * @param {FormValidation.Base} validator The validator plugin instance
         * @param {jQuery} $field Field element
         * @param {Object} options Consist of key:
         * - message: The invalid message
         * - separator: The decimal separator. Can be "." (default), ","
         * @returns {Boolean}
         */
        validate: function(validator, $field, options) {
            if (this.enableByHtml5($field) && $field.get(0).validity && $field.get(0).validity.badInput === true) {
                return false;
            }

            var value = validator.getFieldValue($field, 'numeric');
            if (value === '') {
                return true;
            }
            var separator = options.separator || '.';
            if (separator !== '.') {
                value = value.replace(separator, '.');
            }

            return !isNaN(parseFloat(value)) && isFinite(value);
        }
    };
}(jQuery));
;(function($) {
    FormValidation.I18n = $.extend(true, FormValidation.I18n || {}, {
        'en_US': {
            phone: {
                'default': 'Please enter a valid phone number',
                country: 'Please enter a valid phone number in %s',
                countries: {
                    AE: 'United Arab Emirates',
                    BG: 'Bulgaria',
                    BR: 'Brazil',
                    CN: 'China',
                    CZ: 'Czech Republic',
                    DE: 'Germany',
                    DK: 'Denmark',
                    ES: 'Spain',
                    FR: 'France',
                    GB: 'United Kingdom',
                    IN: 'India',
                    MA: 'Morocco',
                    NL: 'Netherlands',
                    PK: 'Pakistan',
                    RO: 'Romania',
                    RU: 'Russia',
                    SK: 'Slovakia',
                    TH: 'Thailand',
                    US: 'USA',
                    VE: 'Venezuela'
                }
            }
        }
    });

    FormValidation.Validator.phone = {
        html5Attributes: {
            message: 'message',
            country: 'country'
        },

        // The supported countries
        COUNTRY_CODES: ['AE', 'BG', 'BR', 'CN', 'CZ', 'DE', 'DK', 'ES', 'FR', 'GB', 'IN', 'MA', 'NL', 'PK', 'RO', 'RU', 'SK', 'TH', 'US', 'VE'],

        /**
         * Return true if the input value contains a valid phone number for the country
         * selected in the options
         *
         * @param {FormValidation.Base} validator Validate plugin instance
         * @param {jQuery} $field Field element
         * @param {Object} options Consist of key:
         * - message: The invalid message
         * - country: The ISO-3166 country code. It can be
         *      - A country code
         *      - Name of field which its value defines the country code
         *      - Name of callback function that returns the country code
         *      - A callback function that returns the country code
         *
         * @returns {Boolean|Object}
         */
        validate: function(validator, $field, options) {
            var value = validator.getFieldValue($field, 'phone');
            if (value === '') {
                return true;
            }

            var locale  = validator.getLocale(),
                country = options.country;
            if (typeof country !== 'string' || $.inArray(country, this.COUNTRY_CODES) === -1) {
                // Try to determine the country
                country = validator.getDynamicOption($field, country);
            }

            if (!country || $.inArray(country.toUpperCase(), this.COUNTRY_CODES) === -1) {
                return true;
            }

            var isValid = true;
            switch (country.toUpperCase()) {
                case 'AE':
                    // http://regexr.com/39tak
                    value   = $.trim(value);
                    isValid = (/^(((\+|00)?971[\s\.-]?(\(0\)[\s\.-]?)?|0)(\(5(0|2|5|6)\)|5(0|2|5|6)|2|3|4|6|7|9)|60)([\s\.-]?[0-9]){7}$/).test(value);
                    break;
                    
                case 'BG':
                    // https://regex101.com/r/yE6vN4/1
                    // See http://en.wikipedia.org/wiki/Telephone_numbers_in_Bulgaria
                    value   = value.replace(/\+|\s|-|\/|\(|\)/gi,'');
                    isValid = (/^(0|359|00)(((700|900)[0-9]{5}|((800)[0-9]{5}|(800)[0-9]{4}))|(87|88|89)([0-9]{7})|((2[0-9]{7})|(([3-9][0-9])(([0-9]{6})|([0-9]{5})))))$/).test(value);
                    break;

                case 'BR':
                    // http://regexr.com/399m1
                    value   = $.trim(value);
                    isValid = (/^(([\d]{4}[-.\s]{1}[\d]{2,3}[-.\s]{1}[\d]{2}[-.\s]{1}[\d]{2})|([\d]{4}[-.\s]{1}[\d]{3}[-.\s]{1}[\d]{4})|((\(?\+?[0-9]{2}\)?\s?)?(\(?\d{2}\)?\s?)?\d{4,5}[-.\s]?\d{4}))$/).test(value);
                    break;

                case 'CN':
                    // http://regexr.com/39dq4
                    value   = $.trim(value);
                    isValid = (/^((00|\+)?(86(?:-| )))?((\d{11})|(\d{3}[- ]{1}\d{4}[- ]{1}\d{4})|((\d{2,4}[- ]){1}(\d{7,8}|(\d{3,4}[- ]{1}\d{4}))([- ]{1}\d{1,4})?))$/).test(value);
                    break;

                case 'CZ':
                    // http://regexr.com/39hhl
                    isValid = /^(((00)([- ]?)|\+)(420)([- ]?))?((\d{3})([- ]?)){2}(\d{3})$/.test(value);
                    break;

                case 'DE':
                    // http://regexr.com/39pkg
                    value   = $.trim(value);
                    isValid = (/^(((((((00|\+)49[ \-/]?)|0)[1-9][0-9]{1,4})[ \-/]?)|((((00|\+)49\()|\(0)[1-9][0-9]{1,4}\)[ \-/]?))[0-9]{1,7}([ \-/]?[0-9]{1,5})?)$/).test(value);
                    break;

                case 'DK':
                    // Mathing DK phone numbers with country code in 1 of 3 formats and an
                    // 8 digit phone number not starting with a 0 or 1. Can have 1 space
                    // between each character except inside the country code.
                    // http://regex101.com/r/sS8fO4/1
                    value   = $.trim(value);
                    isValid = (/^(\+45|0045|\(45\))?\s?[2-9](\s?\d){7}$/).test(value);
                    break;

                case 'ES':
                    // http://regex101.com/r/rB9mA9/1
                    // Telephone numbers in Spain go like this:
                    //     9: Landline phones and special prefixes.
                    //     6, 7: Mobile phones.
                    //     5: VoIP lines.
                    //     8: Premium-rate services.
                    // There are also special 5-digit and 3-digit numbers, but
                    // maybe it would be overkill to include them all.
                    value   = $.trim(value);
                    isValid = (/^(?:(?:(?:\+|00)34\D?))?(?:5|6|7|8|9)(?:\d\D?){8}$/).test(value);
                    break;

                case 'FR':
                    // http://regexr.com/39a2p
                    value   = $.trim(value);
                    isValid = (/^(?:(?:(?:\+|00)33[ ]?(?:\(0\)[ ]?)?)|0){1}[1-9]{1}([ .-]?)(?:\d{2}\1?){3}\d{2}$/).test(value);
                    break;

            	case 'GB':
                    // http://aa-asterisk.org.uk/index.php/Regular_Expressions_for_Validating_and_Formatting_GB_Telephone_Numbers#Match_GB_telephone_number_in_any_format
                    // http://regexr.com/38uhv
                    value   = $.trim(value);
                    isValid = (/^\(?(?:(?:0(?:0|11)\)?[\s-]?\(?|\+)44\)?[\s-]?\(?(?:0\)?[\s-]?\(?)?|0)(?:\d{2}\)?[\s-]?\d{4}[\s-]?\d{4}|\d{3}\)?[\s-]?\d{3}[\s-]?\d{3,4}|\d{4}\)?[\s-]?(?:\d{5}|\d{3}[\s-]?\d{3})|\d{5}\)?[\s-]?\d{4,5}|8(?:00[\s-]?11[\s-]?11|45[\s-]?46[\s-]?4\d))(?:(?:[\s-]?(?:x|ext\.?\s?|\#)\d+)?)$/).test(value);
                    break;
            
                case 'IN':
                    // http://stackoverflow.com/questions/18351553/regular-expression-validation-for-indian-phone-number-and-mobile-number
                    // http://regex101.com/r/qL6eZ5/1
                    // May begin with +91. Supports mobile and land line numbers
                    value   = $.trim(value);
                    isValid = (/((\+?)((0[ -]+)*|(91 )*)(\d{12}|\d{10}))|\d{5}([- ]*)\d{6}/).test(value);
                    break;
                    
                case 'MA':
                    // http://en.wikipedia.org/wiki/Telephone_numbers_in_Morocco
                    // http://regexr.com/399n8
                    value   = $.trim(value);
                    isValid = (/^(?:(?:(?:\+|00)212[\s]?(?:[\s]?\(0\)[\s]?)?)|0){1}(?:5[\s.-]?[2-3]|6[\s.-]?[13-9]){1}[0-9]{1}(?:[\s.-]?\d{2}){3}$/).test(value);
                    break;
                
                case 'NL':
                    // http://en.wikipedia.org/wiki/Telephone_numbers_in_the_Netherlands
                    // http://regexr.com/3aevr
                    value   = $.trim(value);
                    isValid = (/^((\+|00(\s|\s?\-\s?)?)31(\s|\s?\-\s?)?(\(0\)[\-\s]?)?|0)[1-9]((\s|\s?\-\s?)?[0-9])((\s|\s?-\s?)?[0-9])((\s|\s?-\s?)?[0-9])\s?[0-9]\s?[0-9]\s?[0-9]\s?[0-9]\s?[0-9]$/gm).test(value);
                    break;
                
                case 'PK':
                    // http://regex101.com/r/yH8aV9/2
                    value   = $.trim(value);
                    isValid = (/^0?3[0-9]{2}[0-9]{7}$/).test(value);
                    break;

                case 'RO':
                    // All mobile network and land line
                    // http://regexr.com/39fv1
                    isValid = (/^(\+4|)?(07[0-8]{1}[0-9]{1}|02[0-9]{2}|03[0-9]{2}){1}?(\s|\.|\-)?([0-9]{3}(\s|\.|\-|)){2}$/g).test(value);
                    break;

                case 'RU':
                    // http://regex101.com/r/gW7yT5/5
                    isValid = (/^((8|\+7|007)[\-\.\/ ]?)?([\(\/\.]?\d{3}[\)\/\.]?[\-\.\/ ]?)?[\d\-\.\/ ]{7,10}$/g).test(value);
                    break;

                case 'SK':
                    // http://regexr.com/3a95f
                    isValid = /^(((00)([- ]?)|\+)(421)([- ]?))?((\d{3})([- ]?)){2}(\d{3})$/.test(value);
                    break;

                case 'TH':
                    // http://regex101.com/r/vM5mZ4/2
                    isValid = (/^0\(?([6|8-9]{2})*-([0-9]{3})*-([0-9]{4})$/).test(value);
                    break;

                case 'VE':
                    // http://regex101.com/r/eM2yY0/6
                    value   = $.trim(value);
                    isValid = (/^0(?:2(?:12|4[0-9]|5[1-9]|6[0-9]|7[0-8]|8[1-35-8]|9[1-5]|3[45789])|4(?:1[246]|2[46]))\d{7}$/).test(value);
                    break;
  
                case 'US':
                /* falls through */
                default:
                    // Make sure US phone numbers have 10 digits
                    // May start with 1, +1, or 1-; should discard
                    // Area code may be delimited with (), & sections may be delimited with . or -
                    // http://regexr.com/38mqi
                    isValid = (/^(?:(1\-?)|(\+1 ?))?\(?(\d{3})[\)\-\.]?(\d{3})[\-\.]?(\d{4})$/).test(value);
                    break;
            }

            return {
                valid: isValid,
                message: FormValidation.Helper.format(options.message || FormValidation.I18n[locale].phone.country, FormValidation.I18n[locale].phone.countries[country])
            };
        }
    };
}(jQuery));
;(function($) {
    FormValidation.I18n = $.extend(true, FormValidation.I18n || {}, {
        'en_US': {
            regexp: {
                'default': 'Please enter a value matching the pattern'
            }
        }
    });

    FormValidation.Validator.regexp = {
        html5Attributes: {
            message: 'message',
            regexp: 'regexp'
        },

        enableByHtml5: function($field) {
            var pattern = $field.attr('pattern');
            if (pattern) {
                return {
                    regexp: pattern
                };
            }

            return false;
        },

        /**
         * Check if the element value matches given regular expression
         *
         * @param {FormValidation.Base} validator The validator plugin instance
         * @param {jQuery} $field Field element
         * @param {Object} options Consists of the following key:
         * - regexp: The regular expression you need to check
         * @returns {Boolean}
         */
        validate: function(validator, $field, options) {
            var value = validator.getFieldValue($field, 'regexp');
            if (value === '') {
                return true;
            }

            var regexp = ('string' === typeof options.regexp) ? new RegExp(options.regexp) : options.regexp;
            return regexp.test(value);
        }
    };
}(jQuery));
;(function($) {
    FormValidation.I18n = $.extend(true, FormValidation.I18n || {}, {
        'en_US': {
            remote: {
                'default': 'Please enter a valid value'
            }
        }
    });

    FormValidation.Validator.remote = {
        html5Attributes: {
            crossdomain: 'crossDomain',
            data: 'data',
            datatype: 'dataType',
            delay: 'delay',
            message: 'message',
            name: 'name',
            type: 'type',
            url: 'url',
            validkey: 'validKey'
        },

        /**
         * Destroy the timer when destroying the FormValidation (using validator.destroy() method)
         */
        destroy: function(validator, $field, options) {
            var ns    = validator.getNamespace(),
                timer = $field.data(ns + '.remote.timer');
            if (timer) {
                clearTimeout(timer);
                $field.removeData(ns + '.remote.timer');
            }
        },

        /**
         * Request a remote server to check the input value
         *
         * @param {FormValidation.Base} validator Plugin instance
         * @param {jQuery} $field Field element
         * @param {Object} options Can consist of the following keys:
         * - crossDomain {Boolean} [optional]
         * - data {Object|Function} [optional]: By default, it will take the value
         *  {
         *      <fieldName>: <fieldValue>
         *  }
         * - dataType {String} [optional]: The type of data which is returned by remote server.
         * It can be json (default), text, script
         * - delay {Number} [optional]
         * - headers {String[]} [optional]: Additional headers
         * - message {String} [optional]: The invalid message
         * - name {String} [optional]: Override the field name for the request.
         * - type {String} [optional] Can be GET or POST (default)
         * - url {String|Function}
         * - validKey {String} [optional]: The valid key. It's "valid" by default
         * This is useful when connecting to external remote server or APIs provided by 3rd parties
         * @returns {Deferred}
         */
        validate: function(validator, $field, options) {
            var ns    = validator.getNamespace(),
                value = validator.getFieldValue($field, 'remote'),
                dfd   = new $.Deferred();
            if (value === '') {
                dfd.resolve($field, 'remote', { valid: true });
                return dfd;
            }
            var name     = $field.attr('data-' + ns + '-field'),
                data     = options.data || {},
                url      = options.url,
                validKey = options.validKey || 'valid';

            // Support dynamic data
            if ('function' === typeof data) {
                data = data.call(this, validator);
            }

            // Parse string data from HTML5 attribute
            if ('string' === typeof data) {
                data = JSON.parse(data);
            }

            // Support dynamic url
            if ('function' === typeof url) {
                url = url.call(this, validator);
            }

            data[options.name || name] = value;

            var ajaxOptions = {
                data: data,
                dataType: options.dataType || 'json',
                headers: options.headers || {},
                type: options.type || 'GET',
                url: url
            };
            if (options.crossDomain !== null) {
                ajaxOptions.crossDomain = (options.crossDomain === true || options.crossDomain === 'true');
            }

            function runCallback() {
                var xhr = $.ajax(ajaxOptions);

                xhr
                    .success(function(response) {
                        response.valid = (response[validKey] === true || response[validKey] === 'true')
                                        ? true
                                        : (response[validKey] === false || response[validKey] === 'false' ? false : null);
                        dfd.resolve($field, 'remote', response);
                    })
                    .error(function(response) {
                        dfd.resolve($field, 'remote', {
                            valid: false
                        });
                    });

                dfd.fail(function() {
                    xhr.abort();
                });

                return dfd;
            }
            
            if (options.delay) {
                // Since the form might have multiple fields with the same name
                // I have to attach the timer to the field element
                if ($field.data(ns + '.remote.timer')) {
                    clearTimeout($field.data(ns + '.remote.timer'));
                }

                $field.data(ns + '.remote.timer', setTimeout(runCallback, options.delay));
                return dfd;
            } else {
                return runCallback();
            }
        }
    };
}(jQuery));
;(function($) {
    FormValidation.I18n = $.extend(true, FormValidation.I18n || {}, {
        'en_US': {
            rtn: {
                'default': 'Please enter a valid RTN number'
            }
        }
    });

    FormValidation.Validator.rtn = {
        /**
         * Validate a RTN (Routing transit number)
         * Examples:
         * - Valid: 021200025, 789456124
         *
         * @see http://en.wikipedia.org/wiki/Routing_transit_number
         * @param {FormValidation.Base} validator The validator plugin instance
         * @param {jQuery} $field Field element
         * @param {Object} options Can consist of the following keys:
         * - message: The invalid message
         * @returns {Boolean}
         */
        validate: function(validator, $field, options) {
            var value = validator.getFieldValue($field, 'rtn');
            if (value === '') {
                return true;
            }

            if (!/^\d{9}$/.test(value)) {
                return false;
            }

            var sum = 0;
            for (var i = 0; i < value.length; i += 3) {
                sum += parseInt(value.charAt(i),     10) * 3
                    +  parseInt(value.charAt(i + 1), 10) * 7
                    +  parseInt(value.charAt(i + 2), 10);
            }
            return (sum !== 0 && sum % 10 === 0);
        }
    };
}(jQuery));
;(function($) {
    FormValidation.I18n = $.extend(true, FormValidation.I18n || {}, {
        'en_US': {
            sedol: {
                'default': 'Please enter a valid SEDOL number'
            }
        }
    });

    FormValidation.Validator.sedol = {
        /**
         * Validate a SEDOL (Stock Exchange Daily Official List)
         * Examples:
         * - Valid: 0263494, B0WNLY7
         *
         * @see http://en.wikipedia.org/wiki/SEDOL
         * @param {FormValidation.Base} validator The validator plugin instance
         * @param {jQuery} $field Field element
         * @param {Object} options Can consist of the following keys:
         * - message: The invalid message
         * @returns {Boolean}
         */
        validate: function(validator, $field, options) {
            var value = validator.getFieldValue($field, 'sedol');
            if (value === '') {
                return true;
            }

            value = value.toUpperCase();
            if (!/^[0-9A-Z]{7}$/.test(value)) {
                return false;
            }

            var sum    = 0,
                weight = [1, 3, 1, 7, 3, 9, 1],
                length = value.length;
            for (var i = 0; i < length - 1; i++) {
	            sum += weight[i] * parseInt(value.charAt(i), 36);
	        }
	        sum = (10 - sum % 10) % 10;
            return sum + '' === value.charAt(length - 1);
        }
    };
}(jQuery));
;(function($) {
    FormValidation.I18n = $.extend(true, FormValidation.I18n || {}, {
		'en_US': {
			siren: {
				'default': 'Please enter a valid SIREN number'
			}
		}
    });

	FormValidation.Validator.siren = {
		/**
		 * Check if a string is a siren number
		 *
		 * @param {FormValidation.Base} validator The validator plugin instance
		 * @param {jQuery} $field Field element
		 * @param {Object} options Consist of key:
         * - message: The invalid message
		 * @returns {Boolean}
		 */
		validate: function(validator, $field, options) {
			var value = validator.getFieldValue($field, 'siren');
			if (value === '') {
				return true;
			}

            if (!/^\d{9}$/.test(value)) {
                return false;
            }
            return FormValidation.Helper.luhn(value);
		}
	};
}(jQuery));
;(function($) {
    FormValidation.I18n = $.extend(true, FormValidation.I18n || {}, {
		'en_US': {
			siret: {
				'default': 'Please enter a valid SIRET number'
			}
		}
    });

	FormValidation.Validator.siret = {
        /**
         * Check if a string is a siret number
         *
         * @param {FormValidation.Base} validator The validator plugin instance
         * @param {jQuery} $field Field element
         * @param {Object} options Consist of key:
         * - message: The invalid message
         * @returns {Boolean}
         */
		validate: function(validator, $field, options) {
			var value = validator.getFieldValue($field, 'siret');
			if (value === '') {
				return true;
			}

			var sum    = 0,
                length = value.length,
                tmp;
			for (var i = 0; i < length; i++) {
                tmp = parseInt(value.charAt(i), 10);
				if ((i % 2) === 0) {
					tmp = tmp * 2;
					if (tmp > 9) {
						tmp -= 9;
					}
				}
				sum += tmp;
			}
			return (sum % 10 === 0);
		}
	};
}(jQuery));
;(function($) {
    FormValidation.I18n = $.extend(true, FormValidation.I18n || {}, {
        'en_US': {
            step: {
                'default': 'Please enter a valid step of %s'
            }
        }
    });

    FormValidation.Validator.step = {
        html5Attributes: {
            message: 'message',
            base: 'baseValue',
            step: 'step'
        },

        /**
         * Return true if the input value is valid step one
         *
         * @param {FormValidation.Base} validator The validator plugin instance
         * @param {jQuery} $field Field element
         * @param {Object} options Can consist of the following keys:
         * - baseValue: The base value
         * - step: The step
         * - message: The invalid message
         * @returns {Boolean|Object}
         */
        validate: function(validator, $field, options) {
            var value = validator.getFieldValue($field, 'step');
            if (value === '') {
                return true;
            }

            options = $.extend({}, { baseValue: 0, step: 1 }, options);
            value   = parseFloat(value);
            if (!$.isNumeric(value)) {
                return false;
            }

            var round = function(x, precision) {
                    var m = Math.pow(10, precision);
                    x = x * m;
                    var sign   = (x > 0) | -(x < 0),
                        isHalf = (x % 1 === 0.5 * sign);
                    if (isHalf) {
                        return (Math.floor(x) + (sign > 0)) / m;
                    } else {
                        return Math.round(x) / m;
                    }
                },
                floatMod = function(x, y) {
                    if (y === 0.0) {
                        return 1.0;
                    }
                    var dotX      = (x + '').split('.'),
                        dotY      = (y + '').split('.'),
                        precision = ((dotX.length === 1) ? 0 : dotX[1].length) + ((dotY.length === 1) ? 0 : dotY[1].length);
                    return round(x - y * Math.floor(x / y), precision);
                };

            var locale = validator.getLocale(),
                mod    = floatMod(value - options.baseValue, options.step);
            return {
                valid: mod === 0.0 || mod === options.step,
                message: FormValidation.Helper.format(options.message || FormValidation.I18n[locale].step['default'], [options.step])
            };
        }
    };
}(jQuery));
;(function($) {
    FormValidation.I18n = $.extend(true, FormValidation.I18n || {}, {
        'en_US': {
            stringCase: {
                'default': 'Please enter only lowercase characters',
                upper: 'Please enter only uppercase characters'
            }
        }
    });

    FormValidation.Validator.stringCase = {
        html5Attributes: {
            message: 'message',
            'case': 'case'
        },

        /**
         * Check if a string is a lower or upper case one
         *
         * @param {FormValidation.Base} validator The validator plugin instance
         * @param {jQuery} $field Field element
         * @param {Object} options Consist of key:
         * - message: The invalid message
         * - case: Can be 'lower' (default) or 'upper'
         * @returns {Object}
         */
        validate: function(validator, $field, options) {
            var value = validator.getFieldValue($field, 'stringCase');
            if (value === '') {
                return true;
            }

            var locale     = validator.getLocale(),
                stringCase = (options['case'] || 'lower').toLowerCase();
            return {
                valid: ('upper' === stringCase) ? value === value.toUpperCase() : value === value.toLowerCase(),
                message: options.message || (('upper' === stringCase) ? FormValidation.I18n[locale].stringCase.upper : FormValidation.I18n[locale].stringCase['default'])
            };
        }
    };
}(jQuery));
;(function($) {
    FormValidation.I18n = $.extend(true, FormValidation.I18n || {}, {
        'en_US': {
            stringLength: {
                'default': 'Please enter a value with valid length',
                less: 'Please enter less than %s characters',
                more: 'Please enter more than %s characters',
                between: 'Please enter value between %s and %s characters long'
            }
        }
    });

    FormValidation.Validator.stringLength = {
        html5Attributes: {
            message: 'message',
            min: 'min',
            max: 'max',
            trim: 'trim',
            utf8bytes: 'utf8Bytes'
        },

        enableByHtml5: function($field) {
            var options   = {},
                maxLength = $field.attr('maxlength'),
                minLength = $field.attr('minlength');
            if (maxLength) {
                options.max = parseInt(maxLength, 10);
            }
            if (minLength) {
                options.min = parseInt(minLength, 10);
            }

            return $.isEmptyObject(options) ? false : options;
        },

        /**
         * Check if the length of element value is less or more than given number
         *
         * @param {FormValidation.Base} validator The validator plugin instance
         * @param {jQuery} $field Field element
         * @param {Object} options Consists of following keys:
         * - min
         * - max
         * At least one of two keys is required
         * The min, max keys define the number which the field value compares to. min, max can be
         *      - A number
         *      - Name of field which its value defines the number
         *      - Name of callback function that returns the number
         *      - A callback function that returns the number
         *
         * - message: The invalid message
         * - trim: Indicate the length will be calculated after trimming the value or not. It is false, by default
         * - utf8bytes: Evaluate string length in UTF-8 bytes, default to false
         * @returns {Object}
         */
        validate: function(validator, $field, options) {
            var value = validator.getFieldValue($field, 'stringLength');
            if (options.trim === true || options.trim === 'true') {
                value = $.trim(value);
            }

            if (value === '') {
                return true;
            }

            var locale     = validator.getLocale(),
                min        = $.isNumeric(options.min) ? options.min : validator.getDynamicOption($field, options.min),
                max        = $.isNumeric(options.max) ? options.max : validator.getDynamicOption($field, options.max),
                // Credit to http://stackoverflow.com/a/23329386 (@lovasoa) for UTF-8 byte length code
                utf8Length = function(str) {
                                 var s = str.length;
                                 for (var i = str.length - 1; i >= 0; i--) {
                                     var code = str.charCodeAt(i);
                                     if (code > 0x7f && code <= 0x7ff) {
                                         s++;
                                     } else if (code > 0x7ff && code <= 0xffff) {
                                         s += 2;
                                     }
                                     if (code >= 0xDC00 && code <= 0xDFFF) {
                                         i--;
                                     }
                                 }
                                 return s;
                             },
                length     = options.utf8Bytes ? utf8Length(value) : value.length,
                isValid    = true,
                message    = options.message || FormValidation.I18n[locale].stringLength['default'];

            if ((min && length < parseInt(min, 10)) || (max && length > parseInt(max, 10))) {
                isValid = false;
            }

            switch (true) {
                case (!!min && !!max):
                    message = FormValidation.Helper.format(options.message || FormValidation.I18n[locale].stringLength.between, [parseInt(min, 10), parseInt(max, 10)]);
                    break;

                case (!!min):
                    message = FormValidation.Helper.format(options.message || FormValidation.I18n[locale].stringLength.more, parseInt(min, 10));
                    break;

                case (!!max):
                    message = FormValidation.Helper.format(options.message || FormValidation.I18n[locale].stringLength.less, parseInt(max, 10));
                    break;

                default:
                    break;
            }

            return {
                valid: isValid,
                message: message
            };
        }
    };
}(jQuery));
;(function($) {
    FormValidation.I18n = $.extend(true, FormValidation.I18n || {}, {
        'en_US': {
            uri: {
                'default': 'Please enter a valid URI'
            }
        }
    });

    FormValidation.Validator.uri = {
        html5Attributes: {
            message: 'message',
            allowlocal: 'allowLocal',
            allowemptyprotocol: 'allowEmptyProtocol',
            protocol: 'protocol'
        },

        enableByHtml5: function($field) {
            return ('url' === $field.attr('type'));
        },

        /**
         * Return true if the input value is a valid URL
         *
         * @param {FormValidation.Base} validator The validator plugin instance
         * @param {jQuery} $field Field element
         * @param {Object} options
         * - message: The error message
         * - allowLocal: Allow the private and local network IP. Default to false
         * - allowEmptyProtocol: Allow the URI without protocol. Default to false
         * - protocol: The protocols, separated by a comma. Default to "http, https, ftp"
         * @returns {Boolean}
         */
        validate: function(validator, $field, options) {
            var value = validator.getFieldValue($field, 'uri');
            if (value === '') {
                return true;
            }

            // Credit to https://gist.github.com/dperini/729294
            //
            // Regular Expression for URL validation
            //
            // Author: Diego Perini
            // Updated: 2010/12/05
            //
            // the regular expression composed & commented
            // could be easily tweaked for RFC compliance,
            // it was expressly modified to fit & satisfy
            // these test for an URL shortener:
            //
            //   http://mathiasbynens.be/demo/url-regex
            //
            // Notes on possible differences from a standard/generic validation:
            //
            // - utf-8 char class take in consideration the full Unicode range
            // - TLDs are mandatory unless `allowLocal` is true
            // - protocols have been restricted to ftp, http and https only as requested
            //
            // Changes:
            //
            // - IP address dotted notation validation, range: 1.0.0.0 - 223.255.255.255
            //   first and last IP address of each class is considered invalid
            //   (since they are broadcast/network addresses)
            //
            // - Added exclusion of private, reserved and/or local networks ranges
            //   unless `allowLocal` is true
            //
            // - Added possibility of choosing a custom protocol
            //
            // - Add option to validate without protocol
            //
            var allowLocal         = options.allowLocal === true || options.allowLocal === 'true',
                allowEmptyProtocol = options.allowEmptyProtocol === true || options.allowEmptyProtocol === 'true',
                protocol           = (options.protocol || 'http, https, ftp').split(',').join('|').replace(/\s/g, ''),
                urlExp             = new RegExp(
                    "^" +
                    // protocol identifier
                    "(?:(?:" + protocol + ")://)" +
                    // allow empty protocol
                    (allowEmptyProtocol ? '?' : '') +
                    // user:pass authentication
                    "(?:\\S+(?::\\S*)?@)?" +
                    "(?:" +
                    // IP address exclusion
                    // private & local networks
                    (allowLocal
                        ? ''
                        : ("(?!(?:10|127)(?:\\.\\d{1,3}){3})" +
                           "(?!(?:169\\.254|192\\.168)(?:\\.\\d{1,3}){2})" +
                           "(?!172\\.(?:1[6-9]|2\\d|3[0-1])(?:\\.\\d{1,3}){2})")) +
                    // IP address dotted notation octets
                    // excludes loopback network 0.0.0.0
                    // excludes reserved space >= 224.0.0.0
                    // excludes network & broadcast addresses
                    // (first & last IP address of each class)
                    "(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])" +
                    "(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}" +
                    "(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))" +
                    "|" +
                    // host name
                    "(?:(?:[a-z\\u00a1-\\uffff0-9]-?)*[a-z\\u00a1-\\uffff0-9]+)" +
                    // domain name
                    "(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-?)*[a-z\\u00a1-\\uffff0-9])*" +
                    // TLD identifier
                    "(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))" +
                    // Allow intranet sites (no TLD) if `allowLocal` is true
                    (allowLocal ? '?' : '') +
                    ")" +
                    // port number
                    "(?::\\d{2,5})?" +
                    // resource path
                    "(?:/[^\\s]*)?" +
                    "$", "i"
                );

            return urlExp.test(value);
        }
    };
}(jQuery));
;(function($) {
    FormValidation.I18n = $.extend(true, FormValidation.I18n || {}, {
        'en_US': {
            uuid: {
                'default': 'Please enter a valid UUID number',
                version: 'Please enter a valid UUID version %s number'
            }
        }
    });

    FormValidation.Validator.uuid = {
        html5Attributes: {
            message: 'message',
            version: 'version'
        },

        /**
         * Return true if and only if the input value is a valid UUID string
         *
         * @see http://en.wikipedia.org/wiki/Universally_unique_identifier
         * @param {FormValidation.Base} validator The validator plugin instance
         * @param {jQuery} $field Field element
         * @param {Object} options Consist of key:
         * - message: The invalid message
         * - version: Can be 3, 4, 5, null
         * @returns {Boolean|Object}
         */
        validate: function(validator, $field, options) {
            var value = validator.getFieldValue($field, 'uuid');
            if (value === '') {
                return true;
            }

            // See the format at http://en.wikipedia.org/wiki/Universally_unique_identifier#Variants_and_versions
            var locale   = validator.getLocale(),
                patterns = {
                    '3': /^[0-9A-F]{8}-[0-9A-F]{4}-3[0-9A-F]{3}-[0-9A-F]{4}-[0-9A-F]{12}$/i,
                    '4': /^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,
                    '5': /^[0-9A-F]{8}-[0-9A-F]{4}-5[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,
                    all: /^[0-9A-F]{8}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{12}$/i
                },
                version = options.version ? (options.version + '') : 'all';
            return {
                valid: (null === patterns[version]) ? true : patterns[version].test(value),
                message: options.version
                            ? FormValidation.Helper.format(options.message || FormValidation.I18n[locale].uuid.version, options.version)
                            : (options.message || FormValidation.I18n[locale].uuid['default'])
            };
        }
    };
}(jQuery));
;(function($) {
    FormValidation.I18n = $.extend(true, FormValidation.I18n || {}, {
        'en_US': {
            vat: {
                'default': 'Please enter a valid VAT number',
                country: 'Please enter a valid VAT number in %s',
                countries: {
                    AT: 'Austria',
                    BE: 'Belgium',
                    BG: 'Bulgaria',
                    BR: 'Brazil',
                    CH: 'Switzerland',
                    CY: 'Cyprus',
                    CZ: 'Czech Republic',
                    DE: 'Germany',
                    DK: 'Denmark',
                    EE: 'Estonia',
                    ES: 'Spain',
                    FI: 'Finland',
                    FR: 'France',
                    GB: 'United Kingdom',
                    GR: 'Greek',
                    EL: 'Greek',
                    HU: 'Hungary',
                    HR: 'Croatia',
                    IE: 'Ireland',
                    IS: 'Iceland',
                    IT: 'Italy',
                    LT: 'Lithuania',
                    LU: 'Luxembourg',
                    LV: 'Latvia',
                    MT: 'Malta',
                    NL: 'Netherlands',
                    NO: 'Norway',
                    PL: 'Poland',
                    PT: 'Portugal',
                    RO: 'Romania',
                    RU: 'Russia',
                    RS: 'Serbia',
                    SE: 'Sweden',
                    SI: 'Slovenia',
                    SK: 'Slovakia',
                    VE: 'Venezuela',
                    ZA: 'South Africa'
                }
            }
        }
    });

    FormValidation.Validator.vat = {
        html5Attributes: {
            message: 'message',
            country: 'country'
        },

        // Supported country codes
        COUNTRY_CODES: [
            'AT', 'BE', 'BG', 'BR', 'CH', 'CY', 'CZ', 'DE', 'DK', 'EE', 'EL', 'ES', 'FI', 'FR', 'GB', 'GR', 'HR', 'HU',
            'IE', 'IS', 'IT', 'LT', 'LU', 'LV', 'MT', 'NL', 'NO', 'PL', 'PT', 'RO', 'RU', 'RS', 'SE', 'SK', 'SI', 'VE',
            'ZA'
        ],

        /**
         * Validate an European VAT number
         *
         * @param {FormValidation.Base} validator The validator plugin instance
         * @param {jQuery} $field Field element
         * @param {Object} options Consist of key:
         * - message: The invalid message
         * - country: The ISO 3166-1 country code. It can be
         *      - One of country code defined in COUNTRY_CODES
         *      - Name of field which its value defines the country code
         *      - Name of callback function that returns the country code
         *      - A callback function that returns the country code
         * @returns {Boolean|Object}
         */
        validate: function(validator, $field, options) {
            var value = validator.getFieldValue($field, 'vat');
            if (value === '') {
                return true;
            }

            var locale  = validator.getLocale(),
                country = options.country;
            if (!country) {
                country = value.substr(0, 2);
            } else if (typeof country !== 'string' || $.inArray(country.toUpperCase(), this.COUNTRY_CODES) === -1) {
                // Determine the country code
                country = validator.getDynamicOption($field, country);
            }

            if ($.inArray(country, this.COUNTRY_CODES) === -1) {
                return true;
            }

            var method  = ['_', country.toLowerCase()].join('');
            return this[method](value)
                ? true
                : {
                    valid: false,
                    message: FormValidation.Helper.format(options.message || FormValidation.I18n[locale].vat.country, FormValidation.I18n[locale].vat.countries[country.toUpperCase()])
                };
        },

        // VAT validators

        /**
         * Validate Austrian VAT number
         * Example:
         * - Valid: ATU13585627
         * - Invalid: ATU13585626
         *
         * @param {String} value VAT number
         * @returns {Boolean}
         */
        _at: function(value) {
            if (/^ATU[0-9]{8}$/.test(value)) {
                value = value.substr(2);
            }
            if (!/^U[0-9]{8}$/.test(value)) {
                return false;
            }

            value = value.substr(1);
            var sum    = 0,
                weight = [1, 2, 1, 2, 1, 2, 1],
                temp   = 0;
            for (var i = 0; i < 7; i++) {
                temp = parseInt(value.charAt(i), 10) * weight[i];
                if (temp > 9) {
                    temp = Math.floor(temp / 10) + temp % 10;
                }
                sum += temp;
            }

            sum = 10 - (sum + 4) % 10;
            if (sum === 10) {
                sum = 0;
            }

            return (sum + '' === value.substr(7, 1));
        },

        /**
         * Validate Belgian VAT number
         * Example:
         * - Valid: BE0428759497
         * - Invalid: BE431150351
         *
         * @param {String} value VAT number
         * @returns {Boolean}
         */
        _be: function(value) {
            if (/^BE[0]{0,1}[0-9]{9}$/.test(value)) {
                value = value.substr(2);
            }
            if (!/^[0]{0,1}[0-9]{9}$/.test(value)) {
                return false;
            }

            if (value.length === 9) {
                value = '0' + value;
            }
            if (value.substr(1, 1) === '0') {
                return false;
            }

            var sum = parseInt(value.substr(0, 8), 10) + parseInt(value.substr(8, 2), 10);
            return (sum % 97 === 0);
        },

        /**
         * Validate Bulgarian VAT number
         * Example:
         * - Valid: BG175074752,
         * BG7523169263, BG8032056031,
         * BG7542011030,
         * BG7111042925
         * - Invalid: BG175074753, BG7552A10004, BG7111042922
         *
         * @param {String} value VAT number
         * @returns {Boolean}
         */
        _bg: function(value) {
            if (/^BG[0-9]{9,10}$/.test(value)) {
                value = value.substr(2);
            }
            if (!/^[0-9]{9,10}$/.test(value)) {
                return false;
            }

            var sum = 0, i = 0;

            // Legal entities
            if (value.length === 9) {
                for (i = 0; i < 8; i++) {
                    sum += parseInt(value.charAt(i), 10) * (i + 1);
                }
                sum = sum % 11;
                if (sum === 10) {
                    sum = 0;
                    for (i = 0; i < 8; i++) {
                        sum += parseInt(value.charAt(i), 10) * (i + 3);
                    }
                }
                sum = sum % 10;
                return (sum + '' === value.substr(8));
            }
            // Physical persons, foreigners and others
            else if (value.length === 10) {
                // Validate Bulgarian national identification numbers
                var egn = function(value) {
                        // Check the birth date
                        var year  = parseInt(value.substr(0, 2), 10) + 1900,
                            month = parseInt(value.substr(2, 2), 10),
                            day   = parseInt(value.substr(4, 2), 10);
                        if (month > 40) {
                            year += 100;
                            month -= 40;
                        } else if (month > 20) {
                            year -= 100;
                            month -= 20;
                        }

                        if (!FormValidation.Helper.date(year, month, day)) {
                            return false;
                        }

                        var sum    = 0,
                            weight = [2, 4, 8, 5, 10, 9, 7, 3, 6];
                        for (var i = 0; i < 9; i++) {
                            sum += parseInt(value.charAt(i), 10) * weight[i];
                        }
                        sum = (sum % 11) % 10;
                        return (sum + '' === value.substr(9, 1));
                    },
                    // Validate Bulgarian personal number of a foreigner
                    pnf = function(value) {
                        var sum    = 0,
                            weight = [21, 19, 17, 13, 11, 9, 7, 3, 1];
                        for (var i = 0; i < 9; i++) {
                            sum += parseInt(value.charAt(i), 10) * weight[i];
                        }
                        sum = sum % 10;
                        return (sum + '' === value.substr(9, 1));
                    },
                    // Finally, consider it as a VAT number
                    vat = function(value) {
                        var sum    = 0,
                            weight = [4, 3, 2, 7, 6, 5, 4, 3, 2];
                        for (var i = 0; i < 9; i++) {
                            sum += parseInt(value.charAt(i), 10) * weight[i];
                        }
                        sum = 11 - sum % 11;
                        if (sum === 10) {
                            return false;
                        }
                        if (sum === 11) {
                            sum = 0;
                        }
                        return (sum + '' === value.substr(9, 1));
                    };
                return (egn(value) || pnf(value) || vat(value));
            }

            return false;
        },
        
        /**
         * Validate Brazilian VAT number (CNPJ)
         *
         * @param {String} value VAT number
         * @returns {Boolean}
         */
        _br: function(value) {
            if (value === '') {
                return true;
            }
            var cnpj = value.replace(/[^\d]+/g, '');
            if (cnpj === '' || cnpj.length !== 14) {
                return false;
            }

            // Remove invalids CNPJs
            if (cnpj === '00000000000000' || cnpj === '11111111111111' || cnpj === '22222222222222' ||
                cnpj === '33333333333333' || cnpj === '44444444444444' || cnpj === '55555555555555' ||
                cnpj === '66666666666666' || cnpj === '77777777777777' || cnpj === '88888888888888' ||
                cnpj === '99999999999999')
            {
                return false;
            }

            // Validate verification digits
            var length  = cnpj.length - 2,
                numbers = cnpj.substring(0, length),
                digits  = cnpj.substring(length),
                sum     = 0,
                pos     = length - 7;

            for (var i = length; i >= 1; i--) {
                sum += parseInt(numbers.charAt(length - i), 10) * pos--;
                if (pos < 2) {
                    pos = 9;
                }
            }

            var result = sum % 11 < 2 ? 0 : 11 - sum % 11;
            if (result !== parseInt(digits.charAt(0), 10)) {
                return false;
            }

            length  = length + 1;
            numbers = cnpj.substring(0, length);
            sum     = 0;
            pos     = length - 7;
            for (i = length; i >= 1; i--) {
                sum += parseInt(numbers.charAt(length - i), 10) * pos--;
                if (pos < 2) {
                    pos = 9;
                }
            }

            result = sum % 11 < 2 ? 0 : 11 - sum % 11;
            return (result === parseInt(digits.charAt(1), 10));
        },

        /**
         * Validate Swiss VAT number
         *
         * @param {String} value VAT number
         * @returns {Boolean}
         */
        _ch: function(value) {
            if (/^CHE[0-9]{9}(MWST)?$/.test(value)) {
                value = value.substr(2);
            }
            if (!/^E[0-9]{9}(MWST)?$/.test(value)) {
                return false;
            }

            value = value.substr(1);
            var sum    = 0,
                weight = [5, 4, 3, 2, 7, 6, 5, 4];
            for (var i = 0; i < 8; i++) {
                sum += parseInt(value.charAt(i), 10) * weight[i];
            }

            sum = 11 - sum % 11;
            if (sum === 10) {
                return false;
            }
            if (sum === 11) {
                sum = 0;
            }

            return (sum + '' === value.substr(8, 1));
        },

        /**
         * Validate Cypriot VAT number
         * Examples:
         * - Valid: CY10259033P
         * - Invalid: CY10259033Z
         *
         * @param {String} value VAT number
         * @returns {Boolean}
         */
        _cy: function(value) {
            if (/^CY[0-5|9]{1}[0-9]{7}[A-Z]{1}$/.test(value)) {
                value = value.substr(2);
            }
            if (!/^[0-5|9]{1}[0-9]{7}[A-Z]{1}$/.test(value)) {
                return false;
            }

            // Do not allow to start with "12"
            if (value.substr(0, 2) === '12') {
                return false;
            }

            // Extract the next digit and multiply by the counter.
            var sum         = 0,
                translation = {
                    '0': 1,  '1': 0,  '2': 5,  '3': 7,  '4': 9,
                    '5': 13, '6': 15, '7': 17, '8': 19, '9': 21
                };
            for (var i = 0; i < 8; i++) {
                var temp = parseInt(value.charAt(i), 10);
                if (i % 2 === 0) {
                    temp = translation[temp + ''];
                }
                sum += temp;
            }

            sum = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'[sum % 26];
            return (sum + '' === value.substr(8, 1));
        },

        /**
         * Validate Czech Republic VAT number
         * Can be:
         * i) Legal entities (8 digit numbers)
         * ii) Individuals with a RC (the 9 or 10 digit Czech birth number)
         * iii) Individuals without a RC (9 digit numbers beginning with 6)
         *
         * Examples:
         * - Valid: i) CZ25123891; ii) CZ7103192745, CZ991231123; iii) CZ640903926
         * - Invalid: i) CZ25123890; ii) CZ1103492745, CZ590312123
         *
         * @param {String} value VAT number
         * @returns {Boolean}
         */
        _cz: function(value) {
            if (/^CZ[0-9]{8,10}$/.test(value)) {
                value = value.substr(2);
            }
            if (!/^[0-9]{8,10}$/.test(value)) {
                return false;
            }

            var sum = 0,
                i   = 0;
            if (value.length === 8) {
                // Do not allow to start with '9'
                if (value.charAt(0) + '' === '9') {
                    return false;
                }

                sum = 0;
                for (i = 0; i < 7; i++) {
                    sum += parseInt(value.charAt(i), 10) * (8 - i);
                }
                sum = 11 - sum % 11;
                if (sum === 10) {
                    sum = 0;
                }
                if (sum === 11) {
                    sum = 1;
                }

                return (sum + '' === value.substr(7, 1));
            } else if (value.length === 9 && (value.charAt(0) + '' === '6')) {
                sum = 0;
                // Skip the first (which is 6)
                for (i = 0; i < 7; i++) {
                    sum += parseInt(value.charAt(i + 1), 10) * (8 - i);
                }
                sum = 11 - sum % 11;
                if (sum === 10) {
                    sum = 0;
                }
                if (sum === 11) {
                    sum = 1;
                }
                sum = [8, 7, 6, 5, 4, 3, 2, 1, 0, 9, 10][sum - 1];
                return (sum + '' === value.substr(8, 1));
            } else if (value.length === 9 || value.length === 10) {
                // Validate Czech birth number (Rodné číslo), which is also national identifier
                var year  = 1900 + parseInt(value.substr(0, 2), 10),
                    month = parseInt(value.substr(2, 2), 10) % 50 % 20,
                    day   = parseInt(value.substr(4, 2), 10);
                if (value.length === 9) {
                    if (year >= 1980) {
                        year -= 100;
                    }
                    if (year > 1953) {
                        return false;
                    }
                } else if (year < 1954) {
                    year += 100;
                }

                if (!FormValidation.Helper.date(year, month, day)) {
                    return false;
                }

                // Check that the birth date is not in the future
                if (value.length === 10) {
                    var check = parseInt(value.substr(0, 9), 10) % 11;
                    if (year < 1985) {
                        check = check % 10;
                    }
                    return (check + '' === value.substr(9, 1));
                }

                return true;
            }

            return false;
        },

        /**
         * Validate German VAT number
         * Examples:
         * - Valid: DE136695976
         * - Invalid: DE136695978
         *
         * @param {String} value VAT number
         * @returns {Boolean}
         */
        _de: function(value) {
            if (/^DE[0-9]{9}$/.test(value)) {
                value = value.substr(2);
            }
            if (!/^[0-9]{9}$/.test(value)) {
                return false;
            }

            return FormValidation.Helper.mod11And10(value);
        },

        /**
         * Validate Danish VAT number
         * Example:
         * - Valid: DK13585628
         * - Invalid: DK13585627
         *
         * @param {String} value VAT number
         * @returns {Boolean}
         */
        _dk: function(value) {
            if (/^DK[0-9]{8}$/.test(value)) {
                value = value.substr(2);
            }
            if (!/^[0-9]{8}$/.test(value)) {
                return false;
            }

            var sum    = 0,
                weight = [2, 7, 6, 5, 4, 3, 2, 1];
            for (var i = 0; i < 8; i++) {
                sum += parseInt(value.charAt(i), 10) * weight[i];
            }

            return (sum % 11 === 0);
        },

        /**
         * Validate Estonian VAT number
         * Examples:
         * - Valid: EE100931558, EE100594102
         * - Invalid: EE100594103
         *
         * @param {String} value VAT number
         * @returns {Boolean}
         */
        _ee: function(value) {
            if (/^EE[0-9]{9}$/.test(value)) {
                value = value.substr(2);
            }
            if (!/^[0-9]{9}$/.test(value)) {
                return false;
            }

            var sum    = 0,
                weight = [3, 7, 1, 3, 7, 1, 3, 7, 1];
            for (var i = 0; i < 9; i++) {
                sum += parseInt(value.charAt(i), 10) * weight[i];
            }

            return (sum % 10 === 0);
        },

        /**
         * Validate Spanish VAT number (NIF - Número de Identificación Fiscal)
         * Can be:
         * i) DNI (Documento nacional de identidad), for Spaniards
         * ii) NIE (Número de Identificación de Extranjeros), for foreigners
         * iii) CIF (Certificado de Identificación Fiscal), for legal entities and others
         *
         * Examples:
         * - Valid: i) ES54362315K; ii) ESX2482300W, ESX5253868R; iii) ESM1234567L, ESJ99216582, ESB58378431, ESB64717838
         * - Invalid: i) ES54362315Z; ii) ESX2482300A; iii) ESJ99216583
         *
         * @param {String} value VAT number
         * @returns {Boolean}
         */
        _es: function(value) {
            if (/^ES[0-9A-Z][0-9]{7}[0-9A-Z]$/.test(value)) {
                value = value.substr(2);
            }
            if (!/^[0-9A-Z][0-9]{7}[0-9A-Z]$/.test(value)) {
                return false;
            }

            var dni = function(value) {
                    var check = parseInt(value.substr(0, 8), 10);
                    check = 'TRWAGMYFPDXBNJZSQVHLCKE'[check % 23];
                    return (check + '' === value.substr(8, 1));
                },
                nie = function(value) {
                    var check = ['XYZ'.indexOf(value.charAt(0)), value.substr(1)].join('');
                    check = parseInt(check, 10);
                    check = 'TRWAGMYFPDXBNJZSQVHLCKE'[check % 23];
                    return (check + '' === value.substr(8, 1));
                },
                cif = function(value) {
                    var first = value.charAt(0), check;
                    if ('KLM'.indexOf(first) !== -1) {
                        // K: Spanish younger than 14 year old
                        // L: Spanish living outside Spain without DNI
                        // M: Granted the tax to foreigners who have no NIE
                        check = parseInt(value.substr(1, 8), 10);
                        check = 'TRWAGMYFPDXBNJZSQVHLCKE'[check % 23];
                        return (check + '' === value.substr(8, 1));
                    } else if ('ABCDEFGHJNPQRSUVW'.indexOf(first) !== -1) {
                        var sum    = 0,
                            weight = [2, 1, 2, 1, 2, 1, 2],
                            temp   = 0;

                        for (var i = 0; i < 7; i++) {
                            temp = parseInt(value.charAt(i + 1), 10) * weight[i];
                            if (temp > 9) {
                                temp = Math.floor(temp / 10) + temp % 10;
                            }
                            sum += temp;
                        }
                        sum = 10 - sum % 10;
                        if (sum === 10) {
                            sum = 0;
                        }
                        return (sum + '' === value.substr(8, 1) || 'JABCDEFGHI'[sum] === value.substr(8, 1));
                    }

                    return false;
                };

            var first = value.charAt(0);
            if (/^[0-9]$/.test(first)) {
                return dni(value);
            } else if (/^[XYZ]$/.test(first)) {
                return nie(value);
            } else {
                return cif(value);
            }
        },

        /**
         * Validate Finnish VAT number
         * Examples:
         * - Valid: FI20774740
         * - Invalid: FI20774741
         *
         * @param {String} value VAT number
         * @returns {Boolean}
         */
        _fi: function(value) {
            if (/^FI[0-9]{8}$/.test(value)) {
                value = value.substr(2);
            }
            if (!/^[0-9]{8}$/.test(value)) {
                return false;
            }

            var sum    = 0,
                weight = [7, 9, 10, 5, 8, 4, 2, 1];
            for (var i = 0; i < 8; i++) {
                sum += parseInt(value.charAt(i), 10) * weight[i];
            }

            return (sum % 11 === 0);
        },

        /**
         * Validate French VAT number (TVA - taxe sur la valeur ajoutée)
         * It's constructed by a SIREN number, prefixed by two characters.
         *
         * Examples:
         * - Valid: FR40303265045, FR23334175221, FRK7399859412, FR4Z123456782
         * - Invalid: FR84323140391
         *
         * @param {String} value VAT number
         * @returns {Boolean}
         */
        _fr: function(value) {
            if (/^FR[0-9A-Z]{2}[0-9]{9}$/.test(value)) {
                value = value.substr(2);
            }
            if (!/^[0-9A-Z]{2}[0-9]{9}$/.test(value)) {
                return false;
            }

            if (!FormValidation.Helper.luhn(value.substr(2))) {
                return false;
            }

            if (/^[0-9]{2}$/.test(value.substr(0, 2))) {
                // First two characters are digits
                return value.substr(0, 2) === (parseInt(value.substr(2) + '12', 10) % 97 + '');
            } else {
                // The first characters cann't be O and I
                var alphabet = '0123456789ABCDEFGHJKLMNPQRSTUVWXYZ',
                    check;
                // First one is digit
                if (/^[0-9]{1}$/.test(value.charAt(0))) {
                    check = alphabet.indexOf(value.charAt(0)) * 24 + alphabet.indexOf(value.charAt(1)) - 10;
                } else {
                    check = alphabet.indexOf(value.charAt(0)) * 34 + alphabet.indexOf(value.charAt(1)) - 100;
                }
                return ((parseInt(value.substr(2), 10) + 1 + Math.floor(check / 11)) % 11) === (check % 11);
            }
        },

        /**
         * Validate United Kingdom VAT number
         * Example:
         * - Valid: GB980780684
         * - Invalid: GB802311781
         *
         * @param {String} value VAT number
         * @returns {Boolean}
         */
        _gb: function(value) {
            if (/^GB[0-9]{9}$/.test(value)             /* Standard */
                || /^GB[0-9]{12}$/.test(value)         /* Branches */
                || /^GBGD[0-9]{3}$/.test(value)        /* Government department */
                || /^GBHA[0-9]{3}$/.test(value)        /* Health authority */
                || /^GB(GD|HA)8888[0-9]{5}$/.test(value))
            {
                value = value.substr(2);
            }
            if (!/^[0-9]{9}$/.test(value)
                && !/^[0-9]{12}$/.test(value)
                && !/^GD[0-9]{3}$/.test(value)
                && !/^HA[0-9]{3}$/.test(value)
                && !/^(GD|HA)8888[0-9]{5}$/.test(value))
            {
                return false;
            }

            var length = value.length;
            if (length === 5) {
                var firstTwo  = value.substr(0, 2),
                    lastThree = parseInt(value.substr(2), 10);
                return ('GD' === firstTwo && lastThree < 500) || ('HA' === firstTwo && lastThree >= 500);
            } else if (length === 11 && ('GD8888' === value.substr(0, 6) || 'HA8888' === value.substr(0, 6))) {
                if (('GD' === value.substr(0, 2) && parseInt(value.substr(6, 3), 10) >= 500)
                    || ('HA' === value.substr(0, 2) && parseInt(value.substr(6, 3), 10) < 500))
                {
                    return false;
                }
                return (parseInt(value.substr(6, 3), 10) % 97 === parseInt(value.substr(9, 2), 10));
            } else if (length === 9 || length === 12) {
                var sum    = 0,
                    weight = [8, 7, 6, 5, 4, 3, 2, 10, 1];
                for (var i = 0; i < 9; i++) {
                    sum += parseInt(value.charAt(i), 10) * weight[i];
                }
                sum = sum % 97;

                if (parseInt(value.substr(0, 3), 10) >= 100) {
                    return (sum === 0 || sum === 42 || sum === 55);
                } else {
                    return (sum === 0);
                }
            }

            return true;
        },

        /**
         * Validate Greek VAT number
         * Examples:
         * - Valid: GR023456780, EL094259216
         * - Invalid: EL123456781
         *
         * @param {String} value VAT number
         * @returns {Boolean}
         */
        _gr: function(value) {
            if (/^(GR|EL)[0-9]{9}$/.test(value)) {
                value = value.substr(2);
            }
            if (!/^[0-9]{9}$/.test(value)) {
                return false;
            }

            if (value.length === 8) {
                value = '0' + value;
            }

            var sum    = 0,
                weight = [256, 128, 64, 32, 16, 8, 4, 2];
            for (var i = 0; i < 8; i++) {
                sum += parseInt(value.charAt(i), 10) * weight[i];
            }
            sum = (sum % 11) % 10;

            return (sum + '' === value.substr(8, 1));
        },

        // EL is traditionally prefix of Greek VAT numbers
        _el: function(value) {
            return this._gr(value);
        },

        /**
         * Validate Hungarian VAT number
         * Examples:
         * - Valid: HU12892312
         * - Invalid: HU12892313
         *
         * @param {String} value VAT number
         * @returns {Boolean}
         */
        _hu: function(value) {
            if (/^HU[0-9]{8}$/.test(value)) {
                value = value.substr(2);
            }
            if (!/^[0-9]{8}$/.test(value)) {
                return false;
            }

            var sum    = 0,
                weight = [9, 7, 3, 1, 9, 7, 3, 1];

            for (var i = 0; i < 8; i++) {
                sum += parseInt(value.charAt(i), 10) * weight[i];
            }

            return (sum % 10 === 0);
        },

        /**
         * Validate Croatian VAT number
         * Examples:
         * - Valid: HR33392005961
         * - Invalid: HR33392005962
         *
         * @param {String} value VAT number
         * @returns {Boolean}
         */
        _hr: function(value) {
            if (/^HR[0-9]{11}$/.test(value)) {
                value = value.substr(2);
            }
            if (!/^[0-9]{11}$/.test(value)) {
                return false;
            }

            return FormValidation.Helper.mod11And10(value);
        },

        /**
         * Validate Irish VAT number
         * Examples:
         * - Valid: IE6433435F, IE6433435OA, IE8D79739I
         * - Invalid: IE8D79738J
         *
         * @param {String} value VAT number
         * @returns {Boolean}
         */
        _ie: function(value) {
            if (/^IE[0-9]{1}[0-9A-Z\*\+]{1}[0-9]{5}[A-Z]{1,2}$/.test(value)) {
                value = value.substr(2);
            }
            if (!/^[0-9]{1}[0-9A-Z\*\+]{1}[0-9]{5}[A-Z]{1,2}$/.test(value)) {
                return false;
            }

            var getCheckDigit = function(value) {
                while (value.length < 7) {
                    value = '0' + value;
                }
                var alphabet = 'WABCDEFGHIJKLMNOPQRSTUV',
                    sum      = 0;
                for (var i = 0; i < 7; i++) {
                    sum += parseInt(value.charAt(i), 10) * (8 - i);
                }
                sum += 9 * alphabet.indexOf(value.substr(7));
                return alphabet[sum % 23];
            };

            // The first 7 characters are digits
            if (/^[0-9]+$/.test(value.substr(0, 7))) {
                // New system
                return value.charAt(7) === getCheckDigit(value.substr(0, 7) + value.substr(8) + '');
            } else if ('ABCDEFGHIJKLMNOPQRSTUVWXYZ+*'.indexOf(value.charAt(1)) !== -1) {
                // Old system
                return value.charAt(7) === getCheckDigit(value.substr(2, 5) + value.substr(0, 1) + '');
            }

            return true;
        },

        /**
         * Validate Icelandic VAT (VSK) number
         * Examples:
         * - Valid: 12345, 123456
         * - Invalid: 1234567
         *
         * @params {String} value VAT number
         * @returns {Boolean}
         */
        _is: function(value) {
            if (/^IS[0-9]{5,6}$/.test(value)) {
                value = value.substr(2);
            }
            return /^[0-9]{5,6}$/.test(value);
        },

        /**
         * Validate Italian VAT number, which consists of 11 digits.
         * - First 7 digits are a company identifier
         * - Next 3 are the province of residence
         * - The last one is a check digit
         *
         * Examples:
         * - Valid: IT00743110157
         * - Invalid: IT00743110158
         *
         * @param {String} value VAT number
         * @returns {Boolean}
         */
        _it: function(value) {
            if (/^IT[0-9]{11}$/.test(value)) {
                value = value.substr(2);
            }
            if (!/^[0-9]{11}$/.test(value)) {
                return false;
            }

            if (parseInt(value.substr(0, 7), 10) === 0) {
                return false;
            }

            var lastThree = parseInt(value.substr(7, 3), 10);
            if ((lastThree < 1) || (lastThree > 201) && lastThree !== 999 && lastThree !== 888) {
                return false;
            }

            return FormValidation.Helper.luhn(value);
        },

        /**
         * Validate Lithuanian VAT number
         * It can be:
         * - 9 digits, for legal entities
         * - 12 digits, for temporarily registered taxpayers
         *
         * Examples:
         * - Valid: LT119511515, LT100001919017, LT100004801610
         * - Invalid: LT100001919018
         *
         * @param {String} value VAT number
         * @returns {Boolean}
         */
        _lt: function(value) {
            if (/^LT([0-9]{7}1[0-9]{1}|[0-9]{10}1[0-9]{1})$/.test(value)) {
                value = value.substr(2);
            }
            if (!/^([0-9]{7}1[0-9]{1}|[0-9]{10}1[0-9]{1})$/.test(value)) {
                return false;
            }

            var length = value.length,
                sum    = 0,
                i;
            for (i = 0; i < length - 1; i++) {
                sum += parseInt(value.charAt(i), 10) * (1 + i % 9);
            }
            var check = sum % 11;
            if (check === 10) {
                sum = 0;
                for (i = 0; i < length - 1; i++) {
                    sum += parseInt(value.charAt(i), 10) * (1 + (i + 2) % 9);
                }
            }
            check = check % 11 % 10;
            return (check + '' === value.charAt(length - 1));
        },

        /**
         * Validate Luxembourg VAT number
         * Examples:
         * - Valid: LU15027442
         * - Invalid: LU15027443
         *
         * @param {String} value VAT number
         * @returns {Boolean}
         */
        _lu: function(value) {
            if (/^LU[0-9]{8}$/.test(value)) {
                value = value.substr(2);
            }
            if (!/^[0-9]{8}$/.test(value)) {
                return false;
            }

            return ((parseInt(value.substr(0, 6), 10) % 89) + '' === value.substr(6, 2));
        },

        /**
         * Validate Latvian VAT number
         * Examples:
         * - Valid: LV40003521600, LV16117519997
         * - Invalid: LV40003521601, LV16137519997
         *
         * @param {String} value VAT number
         * @returns {Boolean}
         */
        _lv: function(value) {
            if (/^LV[0-9]{11}$/.test(value)) {
                value = value.substr(2);
            }
            if (!/^[0-9]{11}$/.test(value)) {
                return false;
            }

            var first  = parseInt(value.charAt(0), 10),
                sum    = 0,
                weight = [],
                i,
                length = value.length;
            if (first > 3) {
                // Legal entity
                sum    = 0;
                weight = [9, 1, 4, 8, 3, 10, 2, 5, 7, 6, 1];
                for (i = 0; i < length; i++) {
                    sum += parseInt(value.charAt(i), 10) * weight[i];
                }
                sum = sum % 11;
                return (sum === 3);
            } else {
                // Check birth date
                var day   = parseInt(value.substr(0, 2), 10),
                    month = parseInt(value.substr(2, 2), 10),
                    year  = parseInt(value.substr(4, 2), 10);
                year = year + 1800 + parseInt(value.charAt(6), 10) * 100;

                if (!FormValidation.Helper.date(year, month, day)) {
                    return false;
                }

                // Check personal code
                sum    = 0;
                weight = [10, 5, 8, 4, 2, 1, 6, 3, 7, 9];
                for (i = 0; i < length - 1; i++) {
                    sum += parseInt(value.charAt(i), 10) * weight[i];
                }
                sum = (sum + 1) % 11 % 10;
                return (sum + '' === value.charAt(length - 1));
            }
        },

        /**
         * Validate Maltese VAT number
         * Examples:
         * - Valid: MT11679112
         * - Invalid: MT11679113
         *
         * @param {String} value VAT number
         * @returns {Boolean}
         */
        _mt: function(value) {
            if (/^MT[0-9]{8}$/.test(value)) {
                value = value.substr(2);
            }
            if (!/^[0-9]{8}$/.test(value)) {
                return false;
            }

            var sum    = 0,
                weight = [3, 4, 6, 7, 8, 9, 10, 1];

            for (var i = 0; i < 8; i++) {
                sum += parseInt(value.charAt(i), 10) * weight[i];
            }

            return (sum % 37 === 0);
        },

        /**
         * Validate Dutch VAT number
         * Examples:
         * - Valid: NL004495445B01
         * - Invalid: NL123456789B90
         *
         * @param {String} value VAT number
         * @returns {Boolean}
         */
        _nl: function(value) {
            if (/^NL[0-9]{9}B[0-9]{2}$/.test(value)) {
               value = value.substr(2);
            }
            if (!/^[0-9]{9}B[0-9]{2}$/.test(value)) {
               return false;
            }

            var sum    = 0,
                weight = [9, 8, 7, 6, 5, 4, 3, 2];
            for (var i = 0; i < 8; i++) {
                sum += parseInt(value.charAt(i), 10) * weight[i];
            }

            sum = sum % 11;
            if (sum > 9) {
                sum = 0;
            }
            return (sum + '' === value.substr(8, 1));
        },

        /**
         * Validate Norwegian VAT number
         *
         * @see http://www.brreg.no/english/coordination/number.html
         * @param {String} value VAT number
         * @returns {Boolean}
         */
        _no: function(value) {
            if (/^NO[0-9]{9}$/.test(value)) {
               value = value.substr(2);
            }
            if (!/^[0-9]{9}$/.test(value)) {
               return false;
            }

            var sum    = 0,
                weight = [3, 2, 7, 6, 5, 4, 3, 2];
            for (var i = 0; i < 8; i++) {
                sum += parseInt(value.charAt(i), 10) * weight[i];
            }

            sum = 11 - sum % 11;
            if (sum === 11) {
                sum = 0;
            }
            return (sum + '' === value.substr(8, 1));
        },

        /**
         * Validate Polish VAT number
         * Examples:
         * - Valid: PL8567346215
         * - Invalid: PL8567346216
         *
         * @param {String} value VAT number
         * @returns {Boolean}
         */
        _pl: function(value) {
            if (/^PL[0-9]{10}$/.test(value)) {
                value = value.substr(2);
            }
            if (!/^[0-9]{10}$/.test(value)) {
                return false;
            }

            var sum    = 0,
                weight = [6, 5, 7, 2, 3, 4, 5, 6, 7, -1];

            for (var i = 0; i < 10; i++) {
                sum += parseInt(value.charAt(i), 10) * weight[i];
            }

            return (sum % 11 === 0);
        },

        /**
         * Validate Portuguese VAT number
         * Examples:
         * - Valid: PT501964843
         * - Invalid: PT501964842
         *
         * @param {String} value VAT number
         * @returns {Boolean}
         */
        _pt: function(value) {
            if (/^PT[0-9]{9}$/.test(value)) {
                value = value.substr(2);
            }
            if (!/^[0-9]{9}$/.test(value)) {
                return false;
            }

            var sum    = 0,
                weight = [9, 8, 7, 6, 5, 4, 3, 2];

            for (var i = 0; i < 8; i++) {
                sum += parseInt(value.charAt(i), 10) * weight[i];
            }
            sum = 11 - sum % 11;
            if (sum > 9) {
                sum = 0;
            }
            return (sum + '' === value.substr(8, 1));
        },

        /**
         * Validate Romanian VAT number
         * Examples:
         * - Valid: RO18547290
         * - Invalid: RO18547291
         *
         * @param {String} value VAT number
         * @returns {Boolean}
         */
        _ro: function(value) {
            if (/^RO[1-9][0-9]{1,9}$/.test(value)) {
                value = value.substr(2);
            }
            if (!/^[1-9][0-9]{1,9}$/.test(value)) {
                return false;
            }

            var length = value.length,
                weight = [7, 5, 3, 2, 1, 7, 5, 3, 2].slice(10 - length),
                sum    = 0;
            for (var i = 0; i < length - 1; i++) {
                sum += parseInt(value.charAt(i), 10) * weight[i];
            }

            sum = (10 * sum) % 11 % 10;
            return (sum + '' === value.substr(length - 1, 1));
        },

        /**
         * Validate Russian VAT number (Taxpayer Identification Number - INN)
         *
         * @param {String} value VAT number
         * @returns {Boolean}
         */
        _ru: function(value) {
            if (/^RU([0-9]{10}|[0-9]{12})$/.test(value)) {
                value = value.substr(2);
            }
            if (!/^([0-9]{10}|[0-9]{12})$/.test(value)) {
                return false;
            }

            var i = 0;
            if (value.length === 10) {
                var sum    = 0,
                    weight = [2, 4, 10, 3, 5, 9, 4, 6, 8, 0];
                for (i = 0; i < 10; i++) {
                    sum += parseInt(value.charAt(i), 10) * weight[i];
                }
                sum = sum % 11;
                if (sum > 9) {
                    sum = sum % 10;
                }

                return (sum + '' === value.substr(9, 1));
            } else if (value.length === 12) {
                var sum1    = 0,
                    weight1 = [7, 2, 4, 10, 3, 5, 9, 4, 6, 8, 0],
                    sum2    = 0,
                    weight2 = [3, 7, 2, 4, 10, 3, 5, 9, 4, 6, 8, 0];

                for (i = 0; i < 11; i++) {
                    sum1 += parseInt(value.charAt(i), 10) * weight1[i];
                    sum2 += parseInt(value.charAt(i), 10) * weight2[i];
                }
                sum1 = sum1 % 11;
                if (sum1 > 9) {
                    sum1 = sum1 % 10;
                }
                sum2 = sum2 % 11;
                if (sum2 > 9) {
                    sum2 = sum2 % 10;
                }

                return (sum1 + '' === value.substr(10, 1) && sum2 + '' === value.substr(11, 1));
            }

            return false;
        },

        /**
         * Validate Serbian VAT number
         *
         * @param {String} value VAT number
         * @returns {Boolean}
         */
        _rs: function(value) {
            if (/^RS[0-9]{9}$/.test(value)) {
                value = value.substr(2);
            }
            if (!/^[0-9]{9}$/.test(value)) {
                return false;
            }

            var sum  = 10,
                temp = 0;
            for (var i = 0; i < 8; i++) {
                temp = (parseInt(value.charAt(i), 10) + sum) % 10;
                if (temp === 0) {
                    temp = 10;
                }
                sum = (2 * temp) % 11;
            }

            return ((sum + parseInt(value.substr(8, 1), 10)) % 10 === 1);
        },

        /**
         * Validate Swedish VAT number
         * Examples:
         * - Valid: SE123456789701
         * - Invalid: SE123456789101
         *
         * @param {String} value VAT number
         * @returns {Boolean}
         */
        _se: function(value) {
            if (/^SE[0-9]{10}01$/.test(value)) {
                value = value.substr(2);
            }
            if (!/^[0-9]{10}01$/.test(value)) {
                return false;
            }

            value = value.substr(0, 10);
            return FormValidation.Helper.luhn(value);
        },

        /**
         * Validate Slovenian VAT number
         * Examples:
         * - Valid: SI50223054
         * - Invalid: SI50223055
         * - Invalid: SI09999990
         *
         * @param {String} value VAT number
         * @returns {Boolean}
         */
        _si: function(value) {
            // The Slovenian VAT numbers don't start with zero
            var res = value.match(/^(SI)?([1-9][0-9]{7})$/);
            if (!res) {
                return false;
            }
            if (res[1]) {
                value = value.substr(2);
            }

            var sum    = 0,
                weight = [8, 7, 6, 5, 4, 3, 2];

            for (var i = 0; i < 7; i++) {
                sum += parseInt(value.charAt(i), 10) * weight[i];
            }
            sum = 11 - sum % 11;
            if (sum === 10) {
                sum = 0;
            }
            return (sum + '' === value.substr(7, 1));
        },

        /**
         * Validate Slovak VAT number
         * Examples:
         * - Valid: SK2022749619
         * - Invalid: SK2022749618
         *
         * @param {String} value VAT number
         * @returns {Boolean}
         */
        _sk: function(value) {
            if (/^SK[1-9][0-9][(2-4)|(6-9)][0-9]{7}$/.test(value)) {
                value = value.substr(2);
            }
            if (!/^[1-9][0-9][(2-4)|(6-9)][0-9]{7}$/.test(value)) {
                return false;
            }

            return (parseInt(value, 10) % 11 === 0);
        },

        /**
         * Validate Venezuelan VAT number (RIF)
         * Examples:
         * - Valid: VEJ309272292, VEV242818101, VEJ000126518, VEJ000458324, J309272292, V242818101, J000126518, J000458324
         * - Invalid: VEJ309272293, VEV242818100, J000126519, J000458323
         *
         * @param {String} value VAT number
         * @returns {Boolean}
         */
        _ve: function(value) {
            if (/^VE[VEJPG][0-9]{9}$/.test(value)) {
                value = value.substr(2);
            }
            if (!/^[VEJPG][0-9]{9}$/.test(value)) {
                return false;
            }

            var types  = {
                    'V': 4,
                    'E': 8,
                    'J': 12,
                    'P': 16,
                    'G': 20
                },
                sum    = types[value.charAt(0)],
                weight = [3, 2, 7, 6, 5, 4, 3, 2];

            for (var i = 0; i < 8; i++) {
                sum += parseInt(value.charAt(i + 1), 10) * weight[i];
            }

            sum = 11 - sum % 11;
            if (sum === 11 || sum === 10) {
                sum = 0;
            }
            return (sum + '' === value.substr(9, 1));
        },

        /**
         * Validate South African VAT number
         * Examples:
         * - Valid: 4012345678
         * - Invalid: 40123456789, 3012345678
         *
         * @params {String} value VAT number
         * @returns {Boolean}
         */
         _za: function(value) {
            if (/^ZA4[0-9]{9}$/.test(value)) {
                value = value.substr(2);
            }

            return /^4[0-9]{9}$/.test(value);
        }
    };
}(jQuery));
;(function($) {
    FormValidation.I18n = $.extend(true, FormValidation.I18n || {}, {
        'en_US': {
            vin: {
                'default': 'Please enter a valid VIN number'
            }
        }
    });

    FormValidation.Validator.vin = {
        /**
         * Validate an US VIN (Vehicle Identification Number)
         *
         * @param {FormValidation.Base} validator The validator plugin instance
         * @param {jQuery} $field Field element
         * @param {Object} options Consist of key:
         * - message: The invalid message
         * @returns {Boolean}
         */
        validate: function(validator, $field, options) {
            var value = validator.getFieldValue($field, 'vin');
            if (value === '') {
                return true;
            }

            // Don't accept I, O, Q characters
            if (!/^[a-hj-npr-z0-9]{8}[0-9xX][a-hj-npr-z0-9]{8}$/i.test(value)) {
                return false;
            }

            value = value.toUpperCase();
            var chars   = {
                    A: 1,   B: 2,   C: 3,   D: 4,   E: 5,   F: 6,   G: 7,   H: 8,
                    J: 1,   K: 2,   L: 3,   M: 4,   N: 5,           P: 7,           R: 9,
                            S: 2,   T: 3,   U: 4,   V: 5,   W: 6,   X: 7,   Y: 8,   Z: 9,
                    '1': 1, '2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9, '0': 0
                },
                weights = [8, 7, 6, 5, 4, 3, 2, 10, 0, 9, 8, 7, 6, 5, 4, 3, 2],
                sum     = 0,
                length  = value.length;
            for (var i = 0; i < length; i++) {
                sum += chars[value.charAt(i) + ''] * weights[i];
            }

            var reminder = sum % 11;
            if (reminder === 10) {
                reminder = 'X';
            }

            return (reminder + '') === value.charAt(8);
        }
    };
}(jQuery));
;(function($) {
    FormValidation.I18n = $.extend(true, FormValidation.I18n || {}, {
        'en_US': {
            zipCode: {
                'default': 'Please enter a valid postal code',
                country: 'Please enter a valid postal code in %s',
                countries: {
                    AT: 'Austria',
                    BG: 'Bulgaria',
                    BR: 'Brazil',
                    CA: 'Canada',
                    CH: 'Switzerland',
                    CZ: 'Czech Republic',
                    DE: 'Germany',
                    DK: 'Denmark',
                    ES: 'Spain',
                    FR: 'France',
                    GB: 'United Kingdom',
                    IE: 'Ireland',
                    IN: 'India',
                    IT: 'Italy',
                    MA: 'Morocco',
                    NL: 'Netherlands',
                    PL: 'Poland',
                    PT: 'Portugal',
                    RO: 'Romania',
                    RU: 'Russia',
                    SE: 'Sweden',
                    SG: 'Singapore',
                    SK: 'Slovakia',
                    US: 'USA'
                }
            }
        }
    });

    FormValidation.Validator.zipCode = {
        html5Attributes: {
            message: 'message',
            country: 'country'
        },

        COUNTRY_CODES: ['AT', 'BG', 'BR', 'CA', 'CH', 'CZ', 'DE', 'DK', 'ES', 'FR', 'GB', 'IE', 'IN', 'IT', 'MA', 'NL', 'PL', 'PT', 'RO', 'RU', 'SE', 'SG', 'SK', 'US'],

        /**
         * Return true if and only if the input value is a valid country zip code
         *
         * @param {FormValidation.Base} validator The validator plugin instance
         * @param {jQuery} $field Field element
         * @param {Object} options Consist of key:
         * - message: The invalid message
         * - country: The country
         *
         * The country can be defined by:
         * - An ISO 3166 country code
         * - Name of field which its value defines the country code
         * - Name of callback function that returns the country code
         * - A callback function that returns the country code
         *
         *  callback: function(value, validator, $field) {
         *      // value is the value of field
         *      // validator is the BootstrapValidator instance
         *      // $field is jQuery element representing the field
         *  }
         *
         * @returns {Boolean|Object}
         */
        validate: function(validator, $field, options) {
            var value = validator.getFieldValue($field, 'zipCode');
            if (value === '' || !options.country) {
                return true;
            }

            var locale  = validator.getLocale(),
                country = options.country;
            if (typeof country !== 'string' || $.inArray(country, this.COUNTRY_CODES) === -1) {
                // Try to determine the country
                country = validator.getDynamicOption($field, country);
            }

            if (!country || $.inArray(country.toUpperCase(), this.COUNTRY_CODES) === -1) {
                return true;
            }

            var isValid = false;
            country = country.toUpperCase();
            switch (country) {
                // http://en.wikipedia.org/wiki/List_of_postal_codes_in_Austria
                case 'AT':
                    isValid = /^([1-9]{1})(\d{3})$/.test(value);
                    break;

                case 'BG':
                    isValid = /^([1-9]{1}[0-9]{3})$/.test($.trim(value));
                    break;

                case 'BR':
                    isValid = /^(\d{2})([\.]?)(\d{3})([\-]?)(\d{3})$/.test(value);
                    break;

                case 'CA':
                    isValid = /^(?:A|B|C|E|G|H|J|K|L|M|N|P|R|S|T|V|X|Y){1}[0-9]{1}(?:A|B|C|E|G|H|J|K|L|M|N|P|R|S|T|V|W|X|Y|Z){1}\s?[0-9]{1}(?:A|B|C|E|G|H|J|K|L|M|N|P|R|S|T|V|W|X|Y|Z){1}[0-9]{1}$/i.test(value);
                    break;

                case 'CH':
                    isValid = /^([1-9]{1})(\d{3})$/.test(value);
                    break;

                case 'CZ':
                    // Test: http://regexr.com/39hhr
                    isValid = /^(\d{3})([ ]?)(\d{2})$/.test(value);
                    break;

                // http://stackoverflow.com/questions/7926687/regular-expression-german-zip-codes
                case 'DE':
                    isValid = /^(?!01000|99999)(0[1-9]\d{3}|[1-9]\d{4})$/.test(value);
                    break;

                case 'DK':
                    isValid = /^(DK(-|\s)?)?\d{4}$/i.test(value);
                    break;

                // Zip codes in Spain go from 01XXX to 52XXX.
                // Test: http://refiddle.com/1ufo
                case 'ES':
                    isValid = /^(?:0[1-9]|[1-4][0-9]|5[0-2])\d{3}$/.test(value);
                    break;

                // http://en.wikipedia.org/wiki/Postal_codes_in_France
                case 'FR':
                    isValid = /^[0-9]{5}$/i.test(value);
                    break;

                case 'GB':
                    isValid = this._gb(value);
                    break;

                // Indian PIN (Postal Index Number) validation
                // http://en.wikipedia.org/wiki/Postal_Index_Number
                // Test: http://regex101.com/r/kV0vH3/1
                case 'IN':
                    isValid = /^\d{3}\s?\d{3}$/.test(value);
                    break;

                // http://www.eircode.ie/docs/default-source/Common/prepare-your-business-for-eircode---published-v2.pdf?sfvrsn=2
                // Test: http://refiddle.com/1kpl
                case 'IE':
                    isValid = /^(D6W|[ACDEFHKNPRTVWXY]\d{2})\s[0-9ACDEFHKNPRTVWXY]{4}$/.test(value);
                    break;

                // http://en.wikipedia.org/wiki/List_of_postal_codes_in_Italy
                case 'IT':
                    isValid = /^(I-|IT-)?\d{5}$/i.test(value);
                    break;

                // http://en.wikipedia.org/wiki/List_of_postal_codes_in_Morocco
                case 'MA':
                    isValid = /^[1-9][0-9]{4}$/i.test(value);
                    break;

                // http://en.wikipedia.org/wiki/Postal_codes_in_the_Netherlands
                case 'NL':
                    isValid = /^[1-9][0-9]{3} ?(?!sa|sd|ss)[a-z]{2}$/i.test(value);
                    break;

                // http://en.wikipedia.org/wiki/List_of_postal_codes_in_Poland
                case 'PL':
                    isValid = /^[0-9]{2}\-[0-9]{3}$/.test(value);
                    break;

                // Test: http://refiddle.com/1l2t
                case 'PT':
                    isValid = /^[1-9]\d{3}-\d{3}$/.test(value);
                    break;

                case 'RO':
                    isValid = /^(0[1-8]{1}|[1-9]{1}[0-5]{1})?[0-9]{4}$/i.test(value);
                    break;

                case 'RU':
                    isValid = /^[0-9]{6}$/i.test(value);
                    break;

                case 'SE':
                    isValid = /^(S-)?\d{3}\s?\d{2}$/i.test(value);
                    break;

                case 'SG':
                    isValid = /^([0][1-9]|[1-6][0-9]|[7]([0-3]|[5-9])|[8][0-2])(\d{4})$/i.test(value);
                    break;

                case 'SK':
                    // Test: http://regexr.com/39hhr
                    isValid = /^(\d{3})([ ]?)(\d{2})$/.test(value);
                    break;

                case 'US':
                /* falls through */
                default:
                    isValid = /^\d{4,5}([\-]?\d{4})?$/.test(value);
                    break;
            }

            return {
                valid: isValid,
                message: FormValidation.Helper.format(options.message || FormValidation.I18n[locale].zipCode.country, FormValidation.I18n[locale].zipCode.countries[country])
            };
        },

        /**
         * Validate United Kingdom postcode
         * Examples:
         * - Standard: EC1A 1BB, W1A 1HQ, M1 1AA, B33 8TH, CR2 6XH, DN55 1PT
         * - Special cases:
         * AI-2640, ASCN 1ZZ, GIR 0AA
         *
         * @see http://en.wikipedia.org/wiki/Postcodes_in_the_United_Kingdom
         * @param {String} value The postcode
         * @returns {Boolean}
         */
        _gb: function(value) {
            var firstChar  = '[ABCDEFGHIJKLMNOPRSTUWYZ]',     // Does not accept QVX
                secondChar = '[ABCDEFGHKLMNOPQRSTUVWXY]',     // Does not accept IJZ
                thirdChar  = '[ABCDEFGHJKPMNRSTUVWXY]',
                fourthChar = '[ABEHMNPRVWXY]',
                fifthChar  = '[ABDEFGHJLNPQRSTUWXYZ]',
                regexps    = [
                    // AN NAA, ANN NAA, AAN NAA, AANN NAA format
                    new RegExp('^(' + firstChar + '{1}' + secondChar + '?[0-9]{1,2})(\\s*)([0-9]{1}' + fifthChar + '{2})$', 'i'),
                    // ANA NAA
                    new RegExp('^(' + firstChar + '{1}[0-9]{1}' + thirdChar + '{1})(\\s*)([0-9]{1}' + fifthChar + '{2})$', 'i'),
                    // AANA NAA
                    new RegExp('^(' + firstChar + '{1}' + secondChar + '{1}?[0-9]{1}' + fourthChar + '{1})(\\s*)([0-9]{1}' + fifthChar + '{2})$', 'i'),

                    new RegExp('^(BF1)(\\s*)([0-6]{1}[ABDEFGHJLNPQRST]{1}[ABDEFGHJLNPQRSTUWZYZ]{1})$', 'i'),        // BFPO postcodes
                    /^(GIR)(\s*)(0AA)$/i,                       // Special postcode GIR 0AA
                    /^(BFPO)(\s*)([0-9]{1,4})$/i,               // Standard BFPO numbers
                    /^(BFPO)(\s*)(c\/o\s*[0-9]{1,3})$/i,        // c/o BFPO numbers
                    /^([A-Z]{4})(\s*)(1ZZ)$/i,                  // Overseas Territories
                    /^(AI-2640)$/i                              // Anguilla
                ];
            for (var i = 0; i < regexps.length; i++) {
                if (regexps[i].test(value)) {
                    return true;
                }
            }

            return false;
        }
    };
}(jQuery));
/*END*/
/*Start/home/release/www/blog_180530_1650/wp-content/themes/edu-hiran/js/0188-bootstrap.js*/
/*!
 * FormValidation (http://formvalidation.io)
 * The best jQuery plugin to validate form fields. Support Bootstrap, Foundation, Pure, SemanticUI, UIKit and custom frameworks
 *
 * @version     v0.6.2-dev, built on 2015-03-13 8:15:45 AM
 * @author      https://twitter.com/nghuuphuoc
 * @copyright   (c) 2013 - 2015 Nguyen Huu Phuoc
 * @license     http://formvalidation.io/license/
 */
/**
 * This class supports validating Bootstrap form (http://getbootstrap.com/)
 */
(function($) {
    FormValidation.Framework.Bootstrap = function(element, options, namespace) {
        options = $.extend(true, {
            button: {
                selector: '[type="submit"]',
                // The class of disabled button
                // http://getbootstrap.com/css/#buttons-disabled
                disabled: 'disabled'
            },
            err: {
                // http://getbootstrap.com/css/#forms-help-text
                clazz: 'help-block',
                parent: '^(.*)col-(xs|sm|md|lg)-(offset-){0,1}[0-9]+(.*)$'
            },
            // This feature requires Bootstrap v3.1.0 or later (http://getbootstrap.com/css/#forms-control-validation).
            // Since Bootstrap doesn't provide any methods to know its version, this option cannot be on/off automatically.
            // In other word, to use this feature you have to upgrade your Bootstrap to v3.1.0 or later.
            //
            // Examples:
            // - Use Glyphicons icons:
            //  icon: {
            //      valid: 'glyphicon glyphicon-ok',
            //      invalid: 'glyphicon glyphicon-remove',
            //      validating: 'glyphicon glyphicon-refresh',
            //      feedback: 'form-control-feedback'
            //  }
            // - Use FontAwesome icons:
            //  icon: {
            //      valid: 'fa fa-check',
            //      invalid: 'fa fa-times',
            //      validating: 'fa fa-refresh',
            //      feedback: 'form-control-feedback'
            //  }
            icon: {
                valid: null,
                invalid: null,
                validating: null,
                feedback: 'form-control-feedback'
            },
            row: {
                // By default, each field is placed inside the <div class="form-group"></div>
                // http://getbootstrap.com/css/#forms
                selector: '.form-group',
                valid: 'has-success',
                invalid: 'has-error',
                feedback: 'has-feedback'
            }
        }, options);

        FormValidation.Base.apply(this, [element, options, namespace]);
    };

    FormValidation.Framework.Bootstrap.prototype = $.extend({}, FormValidation.Base.prototype, {
        /**
         * Specific framework might need to adjust the icon position
         *
         * @param {jQuery} $field The field element
         * @param {jQuery} $icon The icon element
         */
        _fixIcon: function($field, $icon) {
            var ns      = this._namespace,
                type    = $field.attr('type'),
                field   = $field.attr('data-' + ns + '-field'),
                row     = this.options.fields[field].row || this.options.row.selector,
                $parent = $field.closest(row);

            // Place it after the container of checkbox/radio
            // so when clicking the icon, it doesn't effect to the checkbox/radio element
            if ('checkbox' === type || 'radio' === type) {
                var $fieldParent = $field.parent();
                if ($fieldParent.hasClass(type)) {
                    $icon.insertAfter($fieldParent);
                } else if ($fieldParent.parent().hasClass(type)) {
                    $icon.insertAfter($fieldParent.parent());
                }
            }

            // The feedback icon does not render correctly if there is no label
            // https://github.com/twbs/bootstrap/issues/12873
            if ($parent.find('label').length === 0) {
                $icon.addClass('fv-icon-no-label');
            }
            // Fix feedback icons in input-group
            if ($parent.find('.input-group').length !== 0) {
                $icon.addClass('fv-bootstrap-icon-input-group')
                     .insertAfter($parent.find('.input-group').eq(0));
            }
        },

        /**
         * Create a tooltip or popover
         * It will be shown when focusing on the field
         *
         * @param {jQuery} $field The field element
         * @param {String} message The message
         * @param {String} type Can be 'tooltip' or 'popover'
         */
        _createTooltip: function($field, message, type) {
            var ns    = this._namespace,
                $icon = $field.data(ns + '.icon');
            if ($icon) {
                switch (type) {
                    case 'popover':
                        $icon
                            .css({
                                'cursor': 'pointer',
                                'pointer-events': 'auto'
                            })
                            .popover('destroy')
                            .popover({
                                container: 'body',
                                content: message,
                                html: true,
                                placement: 'auto top',
                                trigger: 'hover click'
                            });
                        break;

                    case 'tooltip':
                    /* falls through */
                    default:
                        $icon
                            .css({
                                'cursor': 'pointer',
                                'pointer-events': 'auto'
                            })
                            .tooltip('destroy')
                            .tooltip({
                                container: 'body',
                                html: true,
                                placement: 'auto top',
                                title: message
                            });
                        break;
                }
            }
        },

        /**
         * Destroy the tooltip or popover
         *
         * @param {jQuery} $field The field element
         * @param {String} type Can be 'tooltip' or 'popover'
         */
        _destroyTooltip: function($field, type) {
            var ns    = this._namespace,
                $icon = $field.data(ns + '.icon');
            if ($icon) {
                switch (type) {
                    case 'popover':
                        $icon
                            .css({
                                'cursor': '',
                                'pointer-events': 'none'
                            })
                            .popover('destroy');
                        break;

                    case 'tooltip':
                    /* falls through */
                    default:
                        $icon
                            .css({
                                'cursor': '',
                                'pointer-events': 'none'
                            })
                            .tooltip('destroy');
                        break;
                }
            }
        },

        /**
         * Hide a tooltip or popover
         *
         * @param {jQuery} $field The field element
         * @param {String} type Can be 'tooltip' or 'popover'
         */
        _hideTooltip: function($field, type) {
            var ns    = this._namespace,
                $icon = $field.data(ns + '.icon');
            if ($icon) {
                switch (type) {
                    case 'popover':
                        $icon.popover('hide');
                        break;

                    case 'tooltip':
                    /* falls through */
                    default:
                        $icon.tooltip('hide');
                        break;
                }
            }
        },

        /**
         * Show a tooltip or popover
         *
         * @param {jQuery} $field The field element
         * @param {String} type Can be 'tooltip' or 'popover'
         */
        _showTooltip: function($field, type) {
            var ns    = this._namespace,
                $icon = $field.data(ns + '.icon');
            if ($icon) {
                switch (type) {
                    case 'popover':
                        $icon.popover('show');
                        break;

                    case 'tooltip':
                    /* falls through */
                    default:
                        $icon.tooltip('show');
                        break;
                }
            }
        }
    });

    /**
     * Plugin definition
     * Support backward
     * @deprecated It will be removed soon. Instead of using $(form).bootstrapValidator(), use
     *  $(form).formValidation({
     *      framework: 'bootstrap'  // It's equivalent to use data-fv-framework="bootstrap" for <form>
     *  });
     */
    $.fn.bootstrapValidator = function(option) {
        var params = arguments;
        return this.each(function() {
            var $this   = $(this),
                data    = $this.data('formValidation') || $this.data('bootstrapValidator'),
                options = 'object' === typeof option && option;
            if (!data) {
                data = new FormValidation.Framework.Bootstrap(this, $.extend({}, {
                    events: {
                        // Support backward
                        formInit: 'init.form.bv',
                        formError: 'error.form.bv',
                        formSuccess: 'success.form.bv',
                        fieldAdded: 'added.field.bv',
                        fieldRemoved: 'removed.field.bv',
                        fieldInit: 'init.field.bv',
                        fieldError: 'error.field.bv',
                        fieldSuccess: 'success.field.bv',
                        fieldStatus: 'status.field.bv',
                        localeChanged: 'changed.locale.bv',
                        validatorError: 'error.validator.bv',
                        validatorSuccess: 'success.validator.bv'
                    }
                }, options), 'bv');

                $this.addClass('fv-form-bootstrap')
                     .data('formValidation', data)
                     .data('bootstrapValidator', data);
            }

            // Allow to call plugin method
            if ('string' === typeof option) {
                data[option].apply(data, Array.prototype.slice.call(params, 1));
            }
        });
    };

    $.fn.bootstrapValidator.Constructor = FormValidation.Framework.Bootstrap;
}(jQuery));
/*END*/
/*Start/var/www/html/edureka.co/blog/assets/js/typeahead.js*/
/*!
 * jQuery Typeahead
 * Copyright (C) 2015 RunningCoder.org
 * Licensed under the MIT license
 *
 * @author Tom Bertrand
 * @version 2.1.2 (2015-09-28)
 * @link http://www.runningcoder.org/jquerytypeahead/
*/
!function(a,b,c,d){a.Typeahead={version:"2.1.2"};var e={input:null,minLength:2,maxItem:8,dynamic:!1,delay:300,order:null,offset:!1,hint:!1,accent:!1,highlight:!0,group:!1,maxItemPerGroup:null,dropdownFilter:!1,dynamicFilter:null,backdrop:!1,cache:!1,ttl:36e5,compression:!1,suggestion:!1,searchOnFocus:!1,resultContainer:null,generateOnLoad:null,mustSelectItem:!1,href:null,display:["display"],template:null,correlativeTemplate:!1,emptyTemplate:!1,source:null,callback:{onInit:null,onReady:null,onSearch:null,onResult:null,onLayoutBuiltBefore:null,onLayoutBuiltAfter:null,onNavigate:null,onMouseEnter:null,onMouseLeave:null,onClickBefore:null,onClickAfter:null,onSendRequest:null,onReceiveRequest:null,onSubmit:null},selector:{container:"typeahead-container",group:"typeahead-group",result:"typeahead-result",list:"typeahead-list",display:"typeahead-display",query:"typeahead-query",filter:"typeahead-filter",filterButton:"typeahead-filter-button",filterValue:"typeahead-filter-value",dropdown:"typeahead-dropdown",dropdownCarret:"typeahead-caret",button:"typeahead-button",backdrop:"typeahead-backdrop",hint:"typeahead-hint"},debug:!1},f=".typeahead",g={from:"ãàáäâẽèéëêìíïîõòóöôùúüûñç",to:"aaaaaeeeeeiiiiooooouuuunc"},h=~navigator.appVersion.indexOf("MSIE 9."),i=function(a,b){this.rawQuery="",this.query="",this.source={},this.isGenerated=null,this.generatedGroupCount=0,this.groupCount=0,this.groupBy="group",this.result=[],this.resultCount=0,this.options=b,this.node=a,this.container=null,this.resultContainer=null,this.item=null,this.xhr={},this.hintIndex=null,this.filters={dropdown:{},dynamic:{}},this.requests={},this.backdrop={},this.hint={},this.__construct()};i.prototype={extendOptions:function(){this.options.dynamic&&(this.options.cache=!1,this.options.compression=!1),this.options.cache&&(this.options.cache=function(){var b="undefined"!=typeof a.localStorage;if(b)try{a.localStorage.setItem("typeahead","typeahead"),a.localStorage.removeItem("typeahead")}catch(c){b=!1}return b}()),this.options.compression&&("object"==typeof LZString&&this.options.cache||(this.options.compression=!1)),"undefined"==typeof this.options.maxItem||/^\d+$/.test(this.options.maxItem)&&0!==this.options.maxItem||(this.options.maxItem=1/0),this.options.maxItemPerGroup&&!/^\d+$/.test(this.options.maxItemPerGroup)&&(this.options.maxItemPerGroup=null),!this.options.display||this.options.display instanceof Array||(this.options.display=[this.options.display]),!this.options.group||this.options.group instanceof Array||(this.options.group=[this.options.group]),!this.options.dynamicFilter||this.options.dynamicFilter instanceof Array||(this.options.dynamicFilter=[this.options.dynamicFilter]),this.options.resultContainer&&("string"==typeof this.options.resultContainer&&(this.options.resultContainer=c(this.options.resultContainer)),this.options.resultContainer instanceof jQuery&&this.options.resultContainer[0]&&(this.resultContainer=this.options.resultContainer)),this.options.group&&"string"==typeof this.options.group[0]&&this.options.maxItemPerGroup&&(this.groupBy=this.options.group[0]),this.options.callback&&this.options.callback.onClick&&(this.options.callback.onClickBefore=this.options.callback.onClick,delete this.options.callback.onClick),this.options=c.extend(!0,{},e,this.options)},unifySourceFormat:function(){if(this.options.source instanceof Array)return this.options.source={group:{data:this.options.source}},this.groupCount+=1,!0;("undefined"!=typeof this.options.source.data||"undefined"!=typeof this.options.source.url)&&(this.options.source={group:this.options.source});for(var a in this.options.source)if(this.options.source.hasOwnProperty(a)){if(("string"==typeof this.options.source[a]||this.options.source[a]instanceof Array)&&(this.options.source[a]={url:this.options.source[a]}),!this.options.source[a].data&&!this.options.source[a].url)return!1;!this.options.source[a].display||this.options.source[a].display instanceof Array||(this.options.source[a].display=[this.options.source[a].display]),this.options.source[a].ignore&&(this.options.source[a].ignore instanceof RegExp||delete this.options.source[a].ignore),this.groupCount+=1}return!0},init:function(){this.helper.executeCallback(this.options.callback.onInit,[this.node]),this.container=this.node.closest("."+this.options.selector.container)},delegateEvents:function(){var a=this,b=["focus"+f,"input"+f,"propertychange"+f,"keydown"+f,"keyup"+f,"dynamic"+f,"generateOnLoad"+f];this.container.off(f).on("click"+f+" touchstart"+f,function(b){b.stopPropagation(),a.options.dropdownFilter&&a.container.find("."+a.options.selector.dropdown.replace(" ",".")).hide()}),this.node.closest("form").on("submit",function(b){return a.options.mustSelectItem&&a.helper.isEmpty(a.item)?void b.preventDefault():(a.hideLayout(),a.rawQuery="",a.query="",a.helper.executeCallback(a.options.callback.onSubmit,[a.node,this,a.item,b])?!1:void 0)});var c=!1;this.node.off(f).on(b.join(" "),function(b){switch(b.type){case"generateOnLoad":case"focus":a.isGenerated&&a.options.searchOnFocus&&a.query.length>=a.options.minLength&&a.showLayout(),null!==a.isGenerated||a.options.dynamic||a.generateSource();break;case"keydown":a.isGenerated&&a.result.length&&b.keyCode&&~[13,27,38,39,40].indexOf(b.keyCode)&&(c=!0,a.navigate(b));break;case"keyup":h&&a.node[0].value.replace(/^\s+/,"").toString().length<a.query.length&&a.node.trigger("input"+f);break;case"propertychange":if(c){c=!1;break}case"input":if(a.rawQuery=a.node[0].value.toString(),a.query=a.node[0].value.replace(/^\s+/,"").toString(),a.options.hint&&a.hint.container&&""!==a.hint.container.val()&&0!==a.hint.container.val().indexOf(a.rawQuery)&&a.hint.container.val(""),a.options.dynamic)return a.isGenerated=null,void a.helper.typeWatch(function(){a.query.length>=a.options.minLength?a.generateSource():a.hideLayout()},a.options.delay);case"dynamic":if(!a.isGenerated)break;if(a.query.length<a.options.minLength){a.hideLayout();break}a.searchResult(),a.buildLayout(),a.result.length>0||a.options.emptyTemplate?a.showLayout():a.hideLayout()}}),this.options.generateOnLoad&&this.node.trigger("generateOnLoad"+f)},generateSource:function(){if(!this.isGenerated||this.options.dynamic){if(this.generatedGroupCount=0,this.isGenerated=!1,!this.helper.isEmpty(this.xhr)){for(var b in this.xhr)this.xhr.hasOwnProperty(b)&&this.xhr[b].abort();this.xhr={}}var c,d,e;for(c in this.options.source)if(this.options.source.hasOwnProperty(c)){if(this.options.cache&&(d=a.localStorage.getItem(this.node.selector+":"+c))){this.options.compression&&(d=LZString.decompressFromUTF16(d)),e=!1;try{d=JSON.parse(d+""),d.data&&d.ttl>(new Date).getTime()?(this.populateSource(d.data,c),e=!0):a.localStorage.removeItem(this.node.selector+":"+c)}catch(f){}if(e)continue}!this.options.source[c].data||this.options.source[c].url?this.options.source[c].url&&(this.requests[c]||(this.requests[c]=this.generateRequestObject(c))):this.populateSource("function"==typeof this.options.source[c].data&&this.options.source[c].data()||this.options.source[c].data,c)}this.handleRequests()}},generateRequestObject:function(a){var b={request:{url:null,dataType:"json"},extra:{path:null,group:a,callback:{done:null,fail:null,complete:null,always:null}},validForGroup:[a]};!(this.options.source[a].url instanceof Array)&&this.options.source[a].url instanceof Object&&(this.options.source[a].url=[this.options.source[a].url]),this.options.source[a].url instanceof Array?(this.options.source[a].url[0]instanceof Object?(this.options.source[a].url[0].callback&&(b.extra.callback=this.options.source[a].url[0].callback,delete this.options.source[a].url[0].callback),b.request=c.extend(!0,b.request,this.options.source[a].url[0])):"string"==typeof this.options.source[a].url[0]&&(b.request.url=this.options.source[a].url[0]),this.options.source[a].url[1]&&"string"==typeof this.options.source[a].url[1]&&(b.extra.path=this.options.source[a].url[1])):"string"==typeof this.options.source[a].url&&(b.request.url=this.options.source[a].url),"jsonp"===b.request.dataType.toLowerCase()&&(b.request.jsonpCallback="callback_"+a);var d;for(var e in this.requests)if(this.requests.hasOwnProperty(e)&&(d=JSON.stringify(this.requests[e].request),d===JSON.stringify(b.request))){this.requests[e].validForGroup.push(a),b.isDuplicated=!0,delete b.validForGroup;break}return b},handleRequests:function(){var a=this,b=Object.keys(this.requests).length;b&&this.helper.executeCallback(this.options.callback.onSendRequest,[this.node,this.query]);for(var d in this.requests)this.requests.hasOwnProperty(d)&&(this.requests[d].isDuplicated||!function(d,e){var f;if(~e.request.url.indexOf("{{query}}")&&(e.request.url=e.request.url.replace("{{query}}",a.query)),e.request.data)for(var g in e.request.data)if(e.request.data.hasOwnProperty(g)&&~String(e.request.data[g]).indexOf("{{query}}")){e=c.extend(!0,{},e),e.request.data[g]=e.request.data[g].replace("{{query}}",a.query);break}a.xhr[d]=c.ajax(e.request).done(function(c,d,g){for(var h,i=0;i<e.validForGroup.length;i++)f=a.requests[e.validForGroup[i]],f.extra.callback.done instanceof Function&&(h=f.extra.callback.done(c,d,g),c=h instanceof Array&&h||c),a.populateSource(c,f.extra.group,f.extra.path),b-=1,0===b&&a.helper.executeCallback(a.options.callback.onReceiveRequest,[a.node,a.query])}).fail(function(b,c,d){for(var g=0;g<e.validForGroup.length;g++)f=a.requests[e.validForGroup[g]],f.extra.callback.fail instanceof Function&&f.extra.callback.fail(b,c,d)}).complete(function(b,c){for(var d=0;d<e.validForGroup.length;d++)f=a.requests[e.validForGroup[d]],f.extra.callback.complete instanceof Function&&f.extra.callback.complete(b,c)}).always(function(b,c,d){for(var g=0;g<e.validForGroup.length;g++)f=a.requests[e.validForGroup[g]],f.extra.callback.always instanceof Function&&f.extra.callback.always(b,c,d)})}(d,this.requests[d]))},populateSource:function(a,b,c){var d=this,e=this.options.source[b].url&&this.options.source[b].data;a="string"==typeof c?this.helper.namespace(c,a):a,a instanceof Array||(a=[]),e&&("function"==typeof e&&(e=e()),e instanceof Array&&(a=a.concat(e)));for(var f,g=this.options.source[b].display?"compiled"===this.options.source[b].display[0]?this.options.source[b].display[1]:this.options.source[b].display[0]:"compiled"===this.options.display[0]?this.options.display[1]:this.options.display[0],h=0;h<a.length;h++)"string"==typeof a[h]&&(f={},f[g]=a[h],a[h]=f),a[h].group=b;if(this.options.correlativeTemplate){var i=this.options.source[b].template||this.options.template;if(i){i=i.replace(/<.+?>/g,"");for(var h=0;h<a.length;h++)a[h].compiled=i.replace(/\{\{([\w\-\.]+)(?:\|(\w+))?}}/g,function(b,c){return d.helper.namespace(c,a[h],"get","")}).trim();this.options.source[b].display?~this.options.source[b].display.indexOf("compiled")||this.options.source[b].display.unshift("compiled"):~this.options.display.indexOf("compiled")||this.options.display.unshift("compiled")}else;}if(this.source[b]=a,this.options.cache&&!localStorage.getItem(this.node.selector+":"+b)){var j=JSON.stringify({data:a,ttl:(new Date).getTime()+this.options.ttl});this.options.compression&&(j=LZString.compressToUTF16(j)),localStorage.setItem(this.node.selector+":"+b,j)}this.incrementGeneratedGroup()},incrementGeneratedGroup:function(){this.generatedGroupCount+=1,this.groupCount===this.generatedGroupCount&&(this.isGenerated=!0,this.node.trigger("dynamic"+f))},navigate:function(a){this.helper.executeCallback(this.options.callback.onNavigate,[this.node,this.query,a]);var b=this.resultContainer.find("> ul > li:not([data-search-group])"),c=b.filter(".active"),d=c[0]&&b.index(c)||null;if(27===a.keyCode)return void(this.container.hasClass("result")&&(a.preventDefault(),this.hideLayout()));if(13===a.keyCode){if(c.length>0)return a.preventDefault(),a.stopPropagation(),void c.find("a:first").trigger("click");if(this.options.mustSelectItem&&this.helper.isEmpty(this.item))return;return void this.hideLayout()}if(39===a.keyCode)return void(d?b.eq(d).find("a:first").trigger("click"):this.options.hint&&""!==this.hint.container.val()&&this.helper.getCaret(this.node[0])>=this.query.length&&b.find('a[data-index="'+this.hintIndex+'"]').trigger("click"));if(b.length>0&&c.removeClass("active"),38===a.keyCode?(a.preventDefault(),c.length>0?d-1>=0&&b.eq(d-1).addClass("active"):b.last().addClass("active")):40===a.keyCode&&(a.preventDefault(),c.length>0?d+1<b.length&&b.eq(d+1).addClass("active"):b.first().addClass("active")),c=b.filter(".active"),this.options.hint&&this.hint.container&&(c.length>0?this.hint.container.css("color",this.hint.container.css("background-color")||"fff"):this.hint.container.css("color",this.hint.css.color)),c.length>0){var e=c.find("a:first").attr("data-index");e&&this.node.val(this.result[e].title)}else this.node.val(this.rawQuery)},searchResult:function(a){a||(this.item={}),this.helper.executeCallback(this.options.callback.onSearch,[this.node,this.query]),this.result=[],this.resultCount=0;var b,c,d,e,f,g,h,i,j,k=this,l=this.query.toLowerCase(),m={},n=this.filters.dropdown&&this.filters.dropdown.key||this.groupBy,o=this.filters.dynamic&&!this.helper.isEmpty(this.filters.dynamic);this.options.accent&&(l=this.helper.removeAccent(l));for(b in this.source)if(this.source.hasOwnProperty(b)&&(!this.filters.dropdown||"group"!==this.filters.dropdown.key||this.filters.dropdown.value===b)){if(this.options.maxItemPerGroup&&"group"===n)if(m[b]){if(m[b]>=this.options.maxItemPerGroup&&!this.options.callback.onResult)break}else m[b]=0;g="undefined"==typeof this.options.source[b].filter||this.options.source[b].filter===!0;for(var p=0;p<this.source[b].length&&(!(this.result.length>=this.options.maxItem)||this.options.callback.onResult);p++)if(!o||this.dynamicFilter.validate.apply(this,[this.source[b][p]])){if(c=this.source[b][p],this.options.maxItemPerGroup&&"group"!==n)if(m[c[n]]){if(m[c[n]]>=this.options.maxItemPerGroup&&!this.options.callback.onResult)continue}else m[c[n]]=0;f=this.options.source[b].display||this.options.display;for(var q=0;q<f.length;q++){if(g){if(e=c[f[q]],!e)continue;if(e=e.toString().toLowerCase(),this.options.accent&&(e=this.helper.removeAccent(e)),d=e.indexOf(l),this.options.correlativeTemplate&&"compiled"===f[q]&&0>d&&/\s/.test(l)){h=!0,i=l.split(" "),j=e;for(var r=0;r<i.length;r++)if(""!==i[r]){if(!~j.indexOf(i[r])){h=!1;break}j=j.replace(i[r],"")}}if(0>d&&!h)continue;if(this.options.offset&&0!==d)continue;if(this.options.source[b].ignore&&this.options.source[b].ignore.test(e))continue}if(!this.filters.dropdown||this.filters.dropdown.value==c[this.filters.dropdown.key]){if(this.resultCount+=1,this.options.callback.onResult&&this.result.length>=this.options.maxItem||this.options.maxItemPerGroup&&m[c[n]]>=this.options.maxItemPerGroup)break;c.matchedKey=f[q],this.result.push(c),this.options.maxItemPerGroup&&(m[c[n]]+=1);break}}}}if(this.options.order){for(var s,f=[],q=0;q<this.result.length;q++)s=this.options.source[this.result[q].group].display||this.options.display,~f.indexOf(s[0])||f.push(s[0]);this.result.sort(k.helper.sort(f,"asc"===k.options.order,function(a){return a.toString().toUpperCase()}))}this.helper.executeCallback(this.options.callback.onResult,[this.node,this.query,this.result,this.resultCount])},buildLayout:function(){this.resultContainer||(this.resultContainer=c("<div/>",{"class":this.options.selector.result}),this.container.append(this.resultContainer));var a=this.query.toLowerCase();this.options.accent&&(a=this.helper.removeAccent(a));var b=this,d=c("<ul/>",{"class":this.options.selector.list+(b.helper.isEmpty(b.result)?" empty":""),html:function(){if(b.options.emptyTemplate&&b.helper.isEmpty(b.result))return c("<li/>",{html:c("<a/>",{href:"javascript:;",html:"function"==typeof b.options.emptyTemplate&&b.options.emptyTemplate(b.query)||b.options.emptyTemplate.replace(/\{\{query}}/gi,b.query)})});for(var d in b.result)b.result.hasOwnProperty(d)&&!function(d,e,f){var g,h,i,j,k,l=e.group,m={},n=b.options.source[e.group].display||b.options.display,o=b.options.source[e.group].href||b.options.href;b.options.group&&("boolean"!=typeof b.options.group[0]&&e[b.options.group[0]]&&(l=e[b.options.group[0]]),c(f).find('li[data-search-group="'+l+'"]')[0]||c(f).append(c("<li/>",{"class":b.options.selector.group,html:c("<a/>",{href:"javascript:;",html:b.options.group[1]&&b.options.group[1].replace(/(\{\{group}})/gi,e[b.options.group[0]]||l)||l}),"data-search-group":l})));for(var p=0;p<n.length;p++)i=n[p],m[i]=e[i];g=c("<li/>",{html:c("<a/>",{href:function(){return o&&("string"==typeof o?o=o.replace(/\{\{([\w\-\.]+)(?:\|(\w+))?}}/g,function(a,c,d){var f=b.helper.namespace(c,e,"get","");return d&&"raw"===d?f:b.helper.slugify(f)}):"function"==typeof o&&(o=o(e)),e.href=o),o||"javascript:;"},"data-group":l,"data-index":d,html:function(){k=e.group&&b.options.source[e.group].template||b.options.template,h=k?k.replace(/\{\{([\w\-\.]+)(?:\|(\w+))?}}/g,function(a,c,d){var f=b.helper.namespace(c,e,"get","");return d&&"raw"===d?f:b.helper.namespace(c,m,"get","")||f}):'<span class="'+b.options.selector.display+'">'+b.helper.joinObject(m," ")+"</span>",b.options.highlight&&(h=b.helper.highlight(h,a.split(" "),b.options.accent)),c(this).append(h)},click:function(a){return b.options.mustSelectItem&&b.helper.isEmpty(e)?void a.preventDefault():(b.item=e,b.helper.executeCallback(b.options.callback.onClickBefore,[b.node,this,e,a]),void(a.isDefaultPrevented()||(a.preventDefault(),b.query=b.rawQuery=e[e.matchedKey].toString(),b.node.val(b.query).focus(),b.searchResult(!0),b.buildLayout(),b.hideLayout(),b.helper.executeCallback(b.options.callback.onClickAfter,[b.node,this,e,a]))))},mouseenter:function(a){c(this).closest("ul").find("li.active").removeClass("active"),c(this).closest("li").addClass("active"),b.helper.executeCallback(b.options.callback.onMouseEnter,[b.node,this,e,a])},mouseleave:function(a){c(this).closest("li").removeClass("active"),b.helper.executeCallback(b.options.callback.onMouseLeave,[b.node,this,e,a])}})}),b.options.group?(j=c(f).find('a[data-group="'+l+'"]:last').closest("li"),j[0]||(j=c(f).find('li[data-search-group="'+l+'"]')),c(g).insertAfter(j)):c(f).append(g)}(d,b.result[d],this)}});if(this.options.callback.onLayoutBuiltBefore){var f=this.helper.executeCallback(this.options.callback.onLayoutBuiltBefore,[this.node,this.query,this.result,d]);f instanceof jQuery&&(d=f)}if(this.container.addClass("result"),this.resultContainer.html(d),this.options.callback.onLayoutBuiltAfter&&this.helper.executeCallback(this.options.callback.onLayoutBuiltAfter,[this.node,this.query,this.result]),this.options.backdrop&&(this.backdrop.container?this.backdrop.container.show():(this.backdrop.css=c.extend({opacity:0,filter:"alpha(opacity=60)",position:"fixed",top:0,right:0,bottom:0,left:0,"z-index":1040,"background-color":"#000"},this.options.backdrop),this.backdrop.container=c("<div/>",{"class":this.options.selector.backdrop,css:this.backdrop.css,click:function(){b.hideLayout()}}).insertAfter(this.container)),this.container.addClass("backdrop").css({"z-index":this.backdrop.css["z-index"]+1,position:"relative"})),this.options.hint){var g="";if(this.result.length>0&&this.query.length>0){this.hint.container||(this.hint.css=c.extend({"border-color":"transparent",position:"absolute",top:0,display:"inline","z-index":-1,"float":"none",color:"silver","box-shadow":"none",cursor:"default","-webkit-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none"},this.options.hint),this.hint.container=c("<input/>",{type:this.node.attr("type"),"class":this.node.attr("class"),readonly:!0,unselectable:"on",tabindex:-1,click:function(){b.node.focus()}}).addClass(e.selector.hint).css(this.hint.css).insertAfter(this.node),this.node.parent().css({position:"relative"})),this.hint.container.css("color",this.hint.css.color);var h,i,j;this.hintIndex=null;for(var k=0;k<this.result.length;k++){i=this.result[k].group,h=b.options.source[i].display||b.options.display;for(var l=0;l<h.length;l++)if(j=String(this.result[k][h[l]]).toLowerCase(),this.options.accent&&(j=this.helper.removeAccent(j)),0===j.indexOf(a)){g=String(this.result[k][h[l]]),this.hintIndex=k;break}if(null!==this.hintIndex)break}}this.hint.container&&this.hint.container.val(g.length>0&&this.rawQuery+g.substring(this.query.length)||"").show()}},buildDropdownLayout:function(){function a(a){"*"===a.value?delete this.filters.dropdown:this.filters.dropdown=a,this.container.removeClass("filter").find("."+this.options.selector.filterValue).html(a.display||a.value),this.node.trigger("dynamic"+f),this.node.focus()}if(this.options.dropdownFilter){var b,d=this;if("boolean"==typeof this.options.dropdownFilter)b="all";else if("string"==typeof this.options.dropdownFilter)b=this.options.dropdownFilter;else if(this.options.dropdownFilter instanceof Array)for(var e=0;e<this.options.dropdownFilter.length;e++)if("*"===this.options.dropdownFilter[e].value&&this.options.dropdownFilter[e].display){b=this.options.dropdownFilter[e].display;break}c("<span/>",{"class":this.options.selector.filter,html:function(){c(this).append(c("<button/>",{type:"button","class":d.options.selector.filterButton,html:"<span class='"+d.options.selector.filterValue+"'>"+b+"</span> <span class='"+d.options.selector.dropdownCarret+"'></span>",click:function(a){a.stopPropagation();var b=d.container.find("."+d.options.selector.dropdown.replace(" ","."));b.is(":visible")?(d.container.removeClass("filter"),b.hide(),c("html").off(f+".dropdownFilter")):(d.container.addClass("filter"),b.show(),c("html").off(f+".dropdownFilter").on("click"+f+".dropdownFilter touchstart"+f+".dropdownFilter",function(){d.container.removeClass("filter"),b.hide(),c(this).off(f+".dropdownFilter")}))}})),c(this).append(c("<ul/>",{"class":d.options.selector.dropdown,html:function(){var b=d.options.dropdownFilter;if(~["string","boolean"].indexOf(typeof d.options.dropdownFilter)){b=[];for(var e in d.options.source)d.options.source.hasOwnProperty(e)&&b.push({key:"group",value:e});b.push({key:"group",value:"*",display:"string"==typeof d.options.dropdownFilter&&d.options.dropdownFilter||"All"})}for(var f=0;f<b.length;f++)!function(b,e,f){(e.key||"*"===e.value)&&e.value&&("*"===e.value&&c(f).append(c("<li/>",{"class":"divider"})),c(f).append(c("<li/>",{html:c("<a/>",{href:"javascript:;",html:e.display||e.value,click:function(b){b.preventDefault(),a.apply(d,[e])}})})))}(f,b[f],this)}}))}}).insertAfter(d.container.find("."+d.options.selector.query))}},dynamicFilter:{validate:function(a){var b,c,d=null,e=null;for(var f in this.filters.dynamic)if(this.filters.dynamic.hasOwnProperty(f)&&(c=~f.indexOf(".")?this.helper.namespace(f,a,"get"):a[f],"|"!==this.filters.dynamic[f].modifier||d||(d=c==this.filters.dynamic[f].value||!1),"&"===this.filters.dynamic[f].modifier)){if(c!=this.filters.dynamic[f].value){e=!1;break}e=!0}return b=d,null!==e&&(b=e,e===!0&&null!==d&&(b=d)),!!b},set:function(a,b){var c=a.match(/^([|&])?(.+)/);b?this.filters.dynamic[c[2]]={modifier:c[1]||"|",value:b}:delete this.filters.dynamic[c[2]],this.searchResult(),this.buildLayout()},bind:function(){if(this.options.dynamicFilter)for(var a,b=this,d=0;d<this.options.dynamicFilter.length;d++)a=this.options.dynamicFilter[d],"string"==typeof a.selector&&(a.selector=c(a.selector)),a.selector instanceof jQuery&&a.selector[0]&&a.key&&!function(a){a.selector.off(f).on("change"+f,function(){b.dynamicFilter.set.apply(b,[a.key,b.dynamicFilter.getValue(this)])}).trigger("change"+f)}(a)},getValue:function(a){var b;return"SELECT"===a.tagName?b=a.value:"INPUT"===a.tagName&&("checkbox"===a.type?b=a.checked||null:"radio"===a.type&&a.checked&&(b=a.value)),b}},showLayout:function(){var a=this;c("html").off(f).on("click"+f+" touchstart"+f,function(){a.hideLayout(),c(this).off(f)}),(this.result.length||this.options.emptyTemplate)&&this.container.addClass("result hint backdrop")},hideLayout:function(){this.container.removeClass("result hint backdrop filter")},__construct:function(){this.extendOptions(),this.unifySourceFormat()&&(this.init(),this.delegateEvents(),this.buildDropdownLayout(),this.dynamicFilter.bind.apply(this),this.helper.executeCallback(this.options.callback.onReady,[this.node]))},helper:{isEmpty:function(a){for(var b in a)if(a.hasOwnProperty(b))return!1;return!0},removeAccent:function(a){return"string"==typeof a?a=a.toLowerCase().replace(new RegExp("["+g.from+"]","g"),function(a){return g.to[g.from.indexOf(a)]}):void 0},slugify:function(a){return a=String(a),""!==a&&(a=this.removeAccent(a),a=a.replace(/[^-a-z0-9]+/g,"-").replace(/-+/g,"-").trim("-")),a},sort:function(a,b,c){var d=function(b){for(var d=0;d<a.length;d++)if("undefined"!=typeof b[a[d]])return c(b[a[d]])};return b=[-1,1][+!!b],function(a,c){return a=d(a),c=d(c),b*((a>c)-(c>a))}},replaceAt:function(a,b,c,d){return a.substring(0,b)+d+a.substring(b+c)},highlight:function(a,b,c){a=String(a);var d=c&&this.removeAccent(a)||a,e=[];b instanceof Array||(b=[b]),b.sort(function(a,b){return b.length-a.length});for(var f=b.length-1;f>=0;f--)""!==b[f].trim()?b[f]=b[f].replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&"):b.splice(f,1);d.replace(new RegExp("(?:"+b.join("|")+")(?!([^<]+)?>)","gi"),function(a,b,c){e.push({offset:c,length:a.length})});for(var f=e.length-1;f>=0;f--)a=this.replaceAt(a,e[f].offset,e[f].length,"<strong>"+a.substr(e[f].offset,e[f].length)+"</strong>");return a},joinObject:function(a,b){var c="",d=0;for(var e in a)a.hasOwnProperty(e)&&(0!==d&&(c+=b),c+=a[e],d++);return c},getCaret:function(a){if(a.selectionStart)return a.selectionStart;if(b.selection){a.focus();var c=b.selection.createRange();if(null==c)return 0;var d=a.createTextRange(),e=d.duplicate();return d.moveToBookmark(c.getBookmark()),e.setEndPoint("EndToStart",d),e.text.length}return 0},executeCallback:function(b,d){if(!b)return!1;var e;d[0];if("function"==typeof b)e=b;else if(("string"==typeof b||b instanceof Array)&&("string"==typeof b&&(b=[b,[]]),e=this.helper.namespace(b[0],a),"function"!=typeof e))return!1;return e.apply(this,c.merge(b[1]||[],d?d:[]))||!0},namespace:function(b,c,e,f){if("string"!=typeof b||""===b)return!1;for(var g=b.split("."),h=c||a,e=e||"get",i=f||{},j="",k=0,l=g.length;l>k;k++){if(j=g[k],"undefined"==typeof h[j]){if(~["get","delete"].indexOf(e))return"undefined"!=typeof f?f:d;h[j]={}}if(~["set","create","delete"].indexOf(e)&&k===l-1){if("set"!==e&&"create"!==e)return delete h[j],!0;h[j]=i}h=h[j]}return h},typeWatch:function(){var a=0;return function(b,c){clearTimeout(a),a=setTimeout(b,c)}}()}},c.fn.typeahead=c.typeahead=function(a){return j.typeahead(this,a)};var j={typeahead:function(b,d){if(d&&d.source&&"object"==typeof d.source){if("function"==typeof b){if(!d.input)return;b=c(d.input)}if(b.length)for(var e,f=0;f<b.length;f++)e=1===b.length?b:c(b.selector.split(",")[f].trim()),a.Typeahead[e.selector]=new i(e,d)}}};a.console=a.console||{log:function(){}},"trim"in String.prototype||(String.prototype.trim=function(){return this.replace(/^\s+/,"").replace(/\s+$/,"")}),"indexOf"in Array.prototype||(Array.prototype.indexOf=function(a,b){b===d&&(b=0),0>b&&(b+=this.length),0>b&&(b=0);for(var c=this.length;c>b;b++)if(b in this&&this[b]===a)return b;return-1}),Object.keys||(Object.keys=function(a){var b,c=[];for(b in a)Object.prototype.hasOwnProperty.call(a,b)&&c.push(b);return c})}(window,document,window.jQuery);/*END*/
/*Start/home/release/www/blog_180530_1650/wp-content/themes/edu-hiran/js/blog.js*/
var updateRequest = false;
var lastRequest = '';
var playVideo = false;

function isScrolledIntoView(elem, parent) {
    var docViewTop = $(parent).offset().top;
    var docViewBottom = docViewTop + $(parent).height();
    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height() + 30;
    return !(elemTop > docViewBottom || elemBottom > docViewBottom);
}


function isEmail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
}

(function($) {
    var $container = $('.masonry-container');
    $container.imagesLoaded(function() {
        $container.masonry({
            columnWidth: '.item',
            itemSelector: '.item'
        });
    });
    //Reinitialize masonry inside each panel after the relative tab link is clicked - 
    $('a[data-toggle=tab]').each(function() {
        var $this = $(this);
        $this.on('shown.bs.tab', function() {
            $container.masonry({
                columnWidth: '.item',
                itemSelector: '.item'
            });
            $container.imagesLoaded(function() { //                load images later ;

            });
        }); //end shown
    }); //end each
    $(window).load(function() {

        $(".dropdown-menu-scrollbar, .bfh-selectbox ul").mCustomScrollbar({
            theme: "minimal-dark",
            mouseWheel: { preventDefault: true },
            callbacks: {
                onInit: function() {
                    if (typeof $('.side-menu-blog .dropdown-menu-scrollbar') != 'undefined' && $('.side-menu-blog .dropdown-menu-scrollbar').length > 0) {

                        var elem = 'a.active-link';
                        var parentelem = '.side-menu-blog .dropdown-menu-scrollbar';
                        if (!isScrolledIntoView(elem, parentelem)) {
                            var toppos = $(elem).offset().top - $(parentelem).offset().top;
                            $(parentelem).mCustomScrollbar("scrollTo", toppos);
                        }
                    }
                    if (typeof $('.video-playlist-box .dropdown-menu-scrollbar') != 'undefined' && $('.video-playlist-box .dropdown-menu-scrollbar').length > 0) {

                        var elem = 'li.active';
                        var parentelem = '.video-playlist-box .dropdown-menu-scrollbar';
                        if ($('li.active').not(':first-child').length > 0) {
                            var toppos = $(elem).offset().top - $(parentelem).offset().top;
                            $(parentelem).mCustomScrollbar("scrollTo", toppos);
                        }

                    }
                }
            }
        });

    });

})(jQuery);
var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July',
    'August', 'September', 'October', 'November', 'December'
];
var tomorrow = new Date();
tomorrow.setTime(tomorrow.getTime() + (1000 * 3600 * 24));
//document.getElementById("spanDate").innerHTML = months[tomorrow.getMonth()] + " " + tomorrow.getDate()+ ", " + tomorrow.getFullYear();
function initLazyImages() {
    var imgDefer = document.getElementsByTagName('img');
    for (var i = 0; i < imgDefer.length; i++) {
        if (imgDefer[i].getAttribute('data-src')) {
            imgDefer[i].setAttribute('src', imgDefer[i].getAttribute('data-src'));
        }
    }
}

function breadcrumUpdate(post_type) {
    if (post_type == 'all') {
        //$('.post-type-breadcrum,.chevron-level-1').addClass('hide');
        $('.post-type-breadcrum').data('post-type', 'all').html('All Blogs').attr('href', '/blog/all');
        $(".filterblog,.filtervideo,.filterinterview").hide();
        var link = document.getElementById("post-type-breadcrum");
            link.removeAttribute("href");
    } else if (post_type == 'blogs' || post_type == '' || post_type == 'post') {
        $('.post-type-breadcrum').data('post-type', 'post').html('Blogs').attr('href', '/blog');
        $('.post-type-breadcrum,.chevron-level-1').removeClass('hide');
            var link = document.getElementById("post-type-breadcrum");
            link.removeAttribute("href");
        $(".filterblog").show();
        $(".filtervideo").hide();
        $(".filterinterview").hide();
    } else if (post_type == 'webinars') {
        $('.post-type-breadcrum').data('post-type', 'webinars').html('Videos').attr('href', '/blog/videos');
        $(".post-type-breadcrum,.chevron-level-1").removeClass('hide');
            var link = document.getElementById("post-type-breadcrum");
            link.removeAttribute("href");
        $(".filterblog").hide();
        $(".filtervideo").show();
        $(".filterinterview").hide();
    } else if (post_type == 'interview-questions') {
        $('.post-type-breadcrum').data('post-type', 'interview-questions').html('Interview Questions').attr('href', '/blog/interview-questions');
        $(".post-type-breadcrum,.chevron-level-1").removeClass('hide');
            var link = document.getElementById("post-type-breadcrum");
            link.removeAttribute("href");
        $(".filterblog").hide();
        $(".filtervideo").hide();
        $(".filterinterview").show();
    }
}
window.onload = initLazyImages;

var currentActive = 1;
if (typeof NProgress == 'object') {
    //show hide top right bar spinner
    NProgress.configure({ showSpinner: false });
    NProgress.start();
}

function positionFooter() {
    var mFoo = $("#footer_v2");
    if ((($(document.body).height() + mFoo.outerHeight()) < $(window).height() && mFoo.css("position") == "fixed") || ($(document.body).height() < $(window).height() && mFoo.css("position") != "fixed")) {
        mFoo.css({ position: "fixed", bottom: "0px" });
    } else {
        mFoo.css({ position: "static" });
    }
}

function ajaxPushState(dataVars, methodRequest, requestFlag) {
    var trending = false;
    if (typeof dataVars.trending != 'undefined' && dataVars.trending == 'gettrending')
        trending = true;

    if (typeof dataVars !== 'object') {
        var catSlug = $('input#categoryinputbox').val();
        var searchVar = $('input.searchinputbox[name=s]').val();

        var authorVar = $('input#authorinputbox').val();
        var authorVarName = authorVar != '' ? $('#author-name-placeholder').text() : '';

        var tagsVar = $('.tagfilterblog#main-tag-filter-wrapper').is(':visible') ?
            $('#main-tag-filter-wrapper.tagfilterblog .tag-blog-button-for-selected-tags').data('tag-slug') : '';
        var tagsVarName = $('.tagfilterblog#main-tag-filter-wrapper').is(':visible') ?
            $('#tag-name-placeholder').text() : '';
        var posttype = $('.blog-post-type-tabs').is(':visible') ? $('.blog-post-type-tabs li.active a').data('post_type') : 'all';

        var dataVars = {
            action: 'filter_posts', // function to execute
            afp_nonce: afp_vars.afp_nonce, // wp_nonce
            posttype: posttype, // selected tag
            searchVar: searchVar,
            category: catSlug,
            tagfilter: tagsVar,
            tagfiltername: tagsVarName,
            authorfilter: authorVar,
            authorfiltername: authorVarName,
            pageno: $('.blog-' + posttype + '-paginator .page-item.page-class.active:visible a').data('page'),
            orderby: {
                blogorder: $('.posts-order.orderby-selected').data('orderby'),
                videoorder: $('.videos-order.orderby-selected').data('orderby'),
                intervieworder: $('.interview-order.orderby-selected').data('orderby')
            }
        };

    }

    var pageurl = '/blog';
    if (trending)
        pageurl += '/trending';
    if (typeof dataVars.posttype != 'undefined' && (dataVars.posttype == 'webinars')) {
        pageurl += '/videos';
    } else if (typeof dataVars.posttype != 'undefined' && (dataVars.posttype != 'post' && dataVars.posttype != 'blogs' && dataVars.posttype != '')) {
        pageurl += '/' + dataVars.posttype;
    }
    if (typeof dataVars.category != 'undefined' && dataVars.category != '') {
        pageurl += '/category/' + dataVars.category;
    } else if (typeof dataVars.tagfilter != 'undefined' && dataVars.tagfilter != '') {
        if (methodRequest !== 'changeTab' || dataVars.posttype == 'blogs') {
            pageurl = '/blog';
            pageurl += '/tag/' + dataVars.tagfilter;
        }
    } else if (typeof dataVars.authorfilter != 'undefined' && dataVars.authorfilter != '') {
        pageurl += '/author/' + dataVars.authorfilter;
    }
    if (typeof dataVars.pageno != 'undefined' && dataVars.pageno > 1) {
        pageurl += '/page/' + dataVars.pageno;
    }
    if (typeof dataVars.searchVar != 'undefined' && dataVars.searchVar != '') {
        pageurl += '?s=' + dataVars.searchVar;
    }
    if (pageurl != window.location.href) {
        updateRequest = requestFlag;
        lastRequest = methodRequest;
        window.history.pushState({
            'method': methodRequest,
            'dataVariables': dataVars,
            'updateRequest': requestFlag
        }, '', pageurl);
    }

}

function initPopState(fnVars) {
    if (fnVars == null || typeof fnVars == 'undefined') {
        window.location.reload();
        return false;
    }
    if (typeof fnVars.dataVariables !== 'undefined') {
        var dataVars = fnVars.dataVariables;
        var posttype = dataVars.posttype;
        var categoryfilter = dataVars.category;
        var authorfilter = dataVars.authorfilter;
        var tagfilter = dataVars.tagfilter;
        var searchVar = dataVars.searchVar;
        var pageno = dataVars.pageno;
        breadcrumUpdate(posttype);

        if (categoryfilter != '') {
            $('input#categoryinputbox').val(categoryfilter);
            var catName = $('.dropdown.categories-filter-dropdown:visible li [data-slug="' + categoryfilter + '"]').text();
            var updateElem = $('.dropdown.categories-filter-dropdown .btn:first-child');
            updateElem.data('slug', categoryfilter);
            updateElem.html(' ' + catName + '<b class="caret hidden-sm hidden-xs"></b>');
            $('.cat-level-breadcrum').removeClass('hide');
            $('.cat-level-breadcrum-title').text(catName);
            $('.dropdown.categories-filter-dropdown ul li:first-child').show();
//            $('.dropdown.categories-filter-dropdown ul li:nth-child(2)').show();

        } else {
            $('.cat-level-breadcrum').addClass('hide');
            $('.cat-level-breadcrum-title').text('');
            var updateElem = $('.dropdown.categories-filter-dropdown .btn:first-child');
            updateElem.data('slug', '');
            updateElem.html(' Select Category');

            $('.dropdown.categories-filter-dropdown ul li:first-child').hide();
//            $('.dropdown.categories-filter-dropdown ul li:nth-child(2)').hide();
        }
        if (searchVar != '') {
            $('input.searchinputbox[name=s]').val(searchVar);
            $('#main-search-filter-wrapper').removeClass('hide');
            $('#search-tag-name').text(searchVar);
        } else {
            $('input.searchinputbox[name=s]').val('');
            $('#main-search-filter-wrapper').addClass('hide');
            $('#search-tag-name').text('');
        }
        if (authorfilter != '') {
            var authorName = dataVars.authorfiltername;
            $('input#authorinputbox').val(authorfilter);
            $('#main-author-filter-wrapper').removeClass('hide');
            $('#author-name-placeholder').text(authorName);
        } else {
            $('input#authorinputbox').val('');
            $('#main-author-filter-wrapper').addClass('hide');
            $('#author-name-placeholder').text('');
        }
        if (tagfilter != '') {
            var tagName = dataVars.tagfiltername;
            $('#main-tag-filter-wrapper.tagfilterblog .tag-blog-button-for-selected-tags').data('tag-slug', tagfilter);
            $('#main-tag-filter-wrapper').removeClass('hide');
            $('#tag-name-placeholder').text(tagName);
        } else {
            $('#main-tag-filter-wrapper.tagfilterblog .tag-blog-button-for-selected-tags').data('tag-slug', tagfilter);
            $('#main-tag-filter-wrapper').addClass('hide');
            $('#tag-name-placeholder').text('');
        }
        switch (fnVars.method) {
            case "sendAjaxRequest":
                sendAjaxRequest(pageno, posttype, false, false);
                break;
            case "searchAjaxRequest":
                searchAjaxRequest(true, false);
                break;
            case "changeTab":
                if (updateRequest) {
                    if (lastRequest == 'sendAjaxRequest') {
                        sendAjaxRequest(pageno, posttype, false, false);
                    } else if (lastRequest == 'searchAjaxRequest') {
                        searchAjaxRequest();
                    }
                } else {
                    $('.navhead.navheadmob .content-tab[data-post_type="' + posttype + '"]').tab('show');
                }

                break;
        }
    }
    updateRequest = fnVars.updateRequest;
}

function gaEventReferral(refCategory, refAction) {
    var userEmail = $('.loggedin-usernav-wrapper').attr('data-email');
    var refLabel = userEmail + "; timestamp:" + (Date()) + "; " + $("meta[property='og:title']").attr("content");
    if (typeof ga == 'function')
        ga('send', 'event', refCategory, refAction, refLabel, 0);
}
$(document).ready(function() {
    //Click on logo in header on blog
    $('body').on('click', '.navbar-brand', function() {
        //         Event Action : Header - logo
        gaEventReferral('Blog', 'Header - logo');
    });
    //    Click on Browse Courses in header on blog
    $('body').on('click', '.dropdownafterlogin', function() {
        gaEventReferral('Blog', 'Browse Courses - Click');
    });
    //Click on "My Courses" in Browse Courses in header on blog
    $('body').on('click', '.ga-mycourses a', function() {
        gaEventReferral('Blog', 'Browse Courses - My Courses');
    });
    //Click on "All Courses" in Browse Courses in header on blog
    $('body').on('click', '.ga-allcourses a', function() {
        gaEventReferral('Blog', 'Browse Courses - All Courses');
    });
    //Click on "Community" in header on blog
    $('body').on('click', '.logged-in-customer a', function() {
        gaEventReferral('Blog', 'Header -  Community');
    });
    //Click on "Home" in breadcrumbs
    $('body').on('click', '.brdcrumclrinac', function() {
        gaEventReferral('Blog', 'Breadcrumb -  Home');
    });
    //Click on "Home" in breadcrumbs
    $('body').on('click', '.post-type-breadcrum', function() {
        var pt = $(this).text();
        gaEventReferral('Blog', 'Breadcrumb - ' + pt);
    });
    $('body').on('click', '.custom-link-attr', function() {
        var pt = $(this).closest('thumbnailblog').find('.title-author-box .pintabheadingblog');
        var ptcontent = pt.text();
        var pttabcontent = $('.blog-post-type-tabs li.active a').text();
        gaEventReferral('Blog', pttabcontent + ' - ' + ptcontent);
    });
    $('.custom-edu-widgets').on('click', '.custom-rel-article', function() {
        var pt = $(this).text();
        var ptelement = $(this).closest('.custom-edu-widgets');
        var pttabcontent = '';
        if (ptelement.hasClass('widget_edu-trending-blogs'))
            var pttabcontent = 'Trending';
        else if (ptelement.hasClass('widget_edu-featured-blogs'))
            var pttabcontent = 'Featured';
        else if (ptelement.hasClass('widget_edu-related-blogs'))
            var pttabcontent = 'Related';

        gaEventReferral('Blog', pttabcontent + ' Blogs - ' + ptcontent);
    });

    $('.blogmaincontainer').off('click', '.related-blog .pager a');
    $('.blogmaincontainer').on('click', '.related-blog .pager a', function(e) {
        e.preventDefault();
        var selectedIndex = $('.side-menu-blog a.active-link').closest('li');
        var hrefLocation = '';
        if ($(this).hasClass('show-next-in-series')) {
            if (selectedIndex.hasClass('first-level')) {
                var targetWrapper = $('.side-menu-blog a.active-link').next('div.panel-collapse').find('li:first-child a');
                if (targetWrapper.length == 0)
                    targetWrapper = selectedIndex.next('li.first-level').children('a:first-child');
                hrefLocation = targetWrapper.attr('href');
            } else if (selectedIndex.is(':last-child')) {
                hrefLocation = selectedIndex.closest('li.first-level').next('li.first-level').children('a:first-child').attr('href');
            } else {
                hrefLocation = selectedIndex.next().children(':first-child').attr('href');
            }
        } else if ($(this).hasClass('show-prev-in-series')) {
            if (selectedIndex.hasClass('first-level')) {
                var targetWrapper = selectedIndex.prev('li.first-level').children('div.panel-collapse li:last-child a');
                if (targetWrapper.length == 0)
                    targetWrapper = selectedIndex.prev('li.first-level').children('a:first-child');
                hrefLocation = targetWrapper.attr('href');
            } else if (selectedIndex.is(':first-child')) {
                hrefLocation = selectedIndex.closest('div.panel-collapse').prev('a').attr('href');
            } else {
                hrefLocation = selectedIndex.prev('li').children('a:first-child').attr('href');
            }
        }
        if (typeof hrefLocation != 'undefined' && hrefLocation.length > 0)
            location.href = hrefLocation;
        return false;
    });
    $('.blogdescription').on('click', ".AddtoBookmark a", function(e) {
        e.preventDefault(); // this will prevent the anchor tag from going the user off to the link
        var bookmarkUrl = $(this).data('url');
        var bookmarkTitle = $(this).data('title');


        if (navigator.userAgent.toLowerCase().indexOf('chrome') > -1) {
            alert("This function is not available in Google Chrome. Click the star symbol at the end of the address-bar or hit Ctrl-D (Command+D for Macs) to create a bookmark.");
        } else if (window.sidebar && window.sidebar.addPanel) {
            // Firefox <=22
            window.sidebar.addPanel(bookmarkTitle, bookmarkURL, '');
        } else if ((window.sidebar && /Firefox/i.test(navigator.userAgent)) || (window.opera && window.print)) {
            // Firefox 23+ and Opera <=14
            $(this).attr({
                href: bookmarkUrl,
                title: bookmarkTitle,
                rel: 'sidebar'
            }).off(e);
            return true;
        } else if (window.external && ('AddFavorite' in window.external)) {
            // IE Favorites
            window.external.AddFavorite(bookmarkUrl, bookmarkTitle);
        } else { // for other browsers which does not support
            alert('Your browser does not support this bookmark action');
            return false;
        }
    });
    $('.mainsecblog').on('click', 'a.read-more', function() {
        $(this).closest('.custom-excerpts').next().removeClass('hide');
        $(this).closest('.custom-excerpts').hide().remove();
    });


    window.addEventListener("popstate", function(e) {
        // URL location
        var location = document.location;
        // state
        var state = e.state;

        if (state === null && (location.href).indexOf('#') !== false) {
            //            alert('sadsadsa');
        } else {
            initPopState(state);
        }

    });
    $(document).ajaxStart(function() {
        NProgress.done();
        NProgress.start();
    });
    $(document).ajaxError(function() {
        NProgress.done();
    });
    $(document).ajaxStop(function() {
        NProgress.done();
    });
    NProgress.done();

    positionFooter();

    $("#blogview-all").on('click', function() {
        $(".timesblog").toggle();
        $(".view-all-toggle").toggleClass('editprefrence');
        if ($.trim($(this).text()) === 'Edit Preferences') {
            $(this).text('Done');
        } else {
            $(this).text('Edit Preferences');
        }
    });

    $('.bookblog i').on('click', function() {
        if ($(this).hasClass('fa-bookmark-o')) {
            $(this).addClass('fa-bookmark').removeClass('fa-bookmark-o');
        } else {
            $(this).addClass('fa-bookmark-o').removeClass('fa-bookmark');
        }
    });

    $(".blogmobfull,.blog-sidepanel").on('hover', ".fa-bookmark-o", function() {
        $(this).addClass("fabookmark");
    }, function() {
        $(this).removeClass("fabookmark");
    });
    $(".blogmobfull,.blog-sidepanel").on('hover', '.fa-thumbs-o-up', function() {
        $(this).addClass("fathumbs");
    }, function() {
        $(this).removeClass("fathumbs");
    });
    $('.blogmobfull,.blog-sidepanel').on('click', '.page-class', function() {
        if (!$(this).hasClass('pager-next') && !$(this).hasClass('pager-prev')) {
            $('.page-class').removeClass('active');
            $(this).addClass('active');
            currentActive = parseInt($(this).children().html());
        }
    });
    $('.blogmobfull,.blog-sidepanel').on('click', '.pager-next', function() {
        var pttabcontent = $('.blog-post-type-tabs li.active a').text();
        gaEventReferral('Blog', pttabcontent + ' - Next');

        currentActive = $('.active.page-item.page-class').text();
        currentActive += 1;
        $('.page-class-' + currentActive).trigger('click');
    });
    $('.blogmobfull,.blog-sidepanel').on('click', '.pager-prev', function() {
        var pttabcontent = $('.blog-post-type-tabs li.active a').text();
        gaEventReferral('Blog', pttabcontent + ' - Previous');

        currentActive = $('.active.page-item.page-class').text();
        currentActive -= 1;
        $('.page-class-' + currentActive).trigger('click');
    });
    $('#toggle-trending-view').on('click', function() {
        if ($('#toggle-trending-view > a').html() == 'View all') {
            $('#toggle-trending-view > a').html('View less');
            $('.trending-show').addClass('show-all');
        } else {
            $('#toggle-trending-view > a').html('View all');
            $('.trending-show').removeClass('show-all');
        }
    });
    $('.followbtn').on('click', function() {
        if ($('.followbtn').html() == 'Follow') {
            $('.followbtn').html('Following');
            $(this).addClass('followingbtn');
        } else {
            $('.followbtn').html('Follow');
            $(this).removeClass('followingbtn');
        }

    });
    $('#toggle-tags-view').on('click', function() {
        if ($('#toggle-tags-view > a').html() == 'View all') {
            $('#toggle-tags-view > a').html('View less');
            $('ul.my-followed-tag-wrapper li').removeClass('view-all-toggle');
        } else {
            $('#toggle-tags-view > a').html('View all');
            $('ul.my-followed-tag-wrapper li').addClass('view-all-toggle');
        }
    });
    $('#featposts').on('click', function() {
        if ($('#featposts > a').html() == 'View all') {
            $('#featposts > a').html('View less');
            $('.featblog .featshow').addClass('show-all');
        } else {
            $('#featposts > a').html('View all');
            $('.featblog .featshow').removeClass('show-all');
        }
    });
    var activeTab = null;
    $('.blog-post-type-tabs a[data-toggle="tab"]').on('shown.bs.tab', function(e) {
        //show selected tab / active
        var clickedelem = $(e.target);
        var posttype = clickedelem.data('post_type');
        gaEventReferral('Blog', posttype + ' Tab click');
        breadcrumUpdate(posttype);
        ajaxPushState(false, 'changeTab', false);
    });

    $(window).scroll(positionFooter);
    $(window).resize(positionFooter);
    $(window).load(positionFooter);

    $(".dropTrigger").on('click', function(e) {

        $(this).fadeOut();
        $(".dropQuery").animate({
            bottom: "0"
        }, 100);
    });
    $(".closeQuery").on('click', function(e) {
        $(".dropQuery").animate({
            bottom: "-350"
        }, 100);
        $(".dropTrigger").fadeIn();
    });
    $(".call-us").on('click', function(e) {
        $(".call-us-xs").animate({
            bottom: "0"
        }, 100);
    });
    $(".close-call").on('click', function(e) {
        $(".call-us-xs").animate({
            bottom: "-150"
        }, 100);
    });
    $(".video-login-wrapper").on('click', function(e) {
        playVideo = true;
    });
    $(".signin").on('click', function(e) {
        playVideo = false;
    });

    /* Subscribe validation by vaibhav*/
    $(".Subscribeinput [name=subscription-mail]").on('keyup', function(event) {
        var keycode = (event.keyCode ? event.keyCode : event.which);
        if (keycode !== 13) {
            $('.errormessage').hide();
        }
    })
    $('#subscribe-form').on('submit', function(e) {


        e.preventDefault();
        $(".errormessage,.alreadysubscribed,.successmessage").hide();

        var email = $(".Subscribeinput [name=subscription-mail]").val();
        var error = 0;
        if (email == '') {
            $('.errormessage').text('Please enter email ID');
            $('.errormessage').show();
            $(".Subscribeinput [name=subscription-mail]").focus();
            error = 1;
            return false;
        }

        if (!isEmail(email)) {
            $('.errormessage').text('Please enter valid email Id');
            $('.errormessage').show();
            $(".Subscribeinput [name=subscription-mail]").focus();
            error = 1;
            return false;
        }
        if (error == 0) {
            $("#subscribe-button").attr("disabled", true);
            $("#loader").show();

            var email = $(".Subscribeinput [name=subscription-mail]").val();
            var postId = $(".Subscribeinput [name=subscription-postid]").val();
            $(".Subscribeinput [name=subscription-mail]").val("");

            var mydata = { "email": email };
            $.ajax({
                type: "POST",
                url: "/users/no_password_blog_registration?utm_source=blog&utm_campaign=blog_subscriber&utm_medium=blog_subscriber",
                data: mydata,
                dataType: "json",
                error: function(e) {
                    $("#loader").hide();
                    $(".errormessage").show();
                    $("#subscribe-button").attr("disabled", false);
                },
                success: function(response) {
                    if (response.statuscode == "1" && response.status == "lead") {
                        $(".successmessage").show();
                        $(".show-after-success").removeClass('hide');

                        $("#loader").hide();
                        $("#loader,#subscribe-button").hide();
                        $(".show-after-success").show();
                        $(".subscribesec-box").slideUp(function() {
                            $(".subscribesec-success").slideDown();
                        });
                        var hideform = false;
                        if ($("#is_user_loggedin").val() == 1) {
                            $("#loader").hide();
                            hideform = true;
                        }
                        setTimeout(function() {
                            $("#subscribe-form").hide(function() {
                                $("#subscribe-form").remove();
                            });
                        }, 5000);
                        do_subscribe_process(email, postId);
                    } else if (response.statuscode == "1" && response.status == null) {
                        $("#loader,#subscribe-button").hide();
                        $(".alreadysubscribed").show();
                        $(".show-after-success").removeClass('hide');
                        $(".subscribesec-box").slideUp(function() {
                            $(".subscribesec-success").slideDown();
                        });
                        var hideform = false;
                        if ($("#is_user_loggedin").val() == 1) {
                            $("#loader").hide();
                            hideform = true;
                        }
                        setTimeout(function() {
                            $("#subscribe-form").hide(function() {
                                $("#subscribe-form").remove();
                            });
                        }, 5000);
                        do_subscribe_process(email, postId);
                    } else {
                        $("#loader").hide();
                        $(".errormessage").show();
                        $(".subscribe-process").show();
                        $("#subscribe-button").attr("disabled", false);
                    }

                }

            });

        }
        return false;
    });

    /* Subscribe validation by vaibhav */
    $('.nav-stacked').affix({
        offset: {
            top: 20,
            bottom: ($('footer').outerHeight(true)) + 62
        }
    });
    var $body = $(document.body);
    var navHeight = $('.navbar').outerHeight(true) + 10;
    $body.scrollspy({
        target: '#blog-sidepanel',
        offset: navHeight
    });
    $('.relatedblogssec').on('click', function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top - 50
                }, 1000);
                return false;
            }
        }
    });

    $('.navbar-toggle').on('click', function() {
        $('.navbar-nav').toggleClass('slide-in');
        $('.side-body').toggleClass('body-slide-in');

    });
    $('span[data-toggle="collapse"]').on('click', function() {
        var clickTarget = $(this);
        var dataTarget = $(this).attr('data-target');
        $(this).toggleClass('active');
        $(this).closest('li').toggleClass('active');

        $('.side-menu ul li.first-level').not(clickTarget.closest('li')).removeClass("active");
        $('span[data-toggle="collapse"]').not(clickTarget).removeClass("active");
        $('.collapse').not('#' + dataTarget).collapse("hide");

    });
    $(document).ready(function() {
        $(window).scroll(function() {
            var hT = $('#footer_v2').offset().top - 400,
                hH = $('#footer_v2').outerHeight(),
                wH = $(window).height(),
                wS = $(this).scrollTop();
            if (wS > (hT + hH - wH)) {
                $('.left-menu-row').addClass("floatside-nav");
            } else {
                $('.left-menu-row').removeClass("floatside-nav");
            }
        });
    });

    $('.navbar-tog-open-close').on('click', function(e) {
        $('.left-menu').toggleClass("left-menu-collopenpressed"); //you can list several class names 
        e.preventDefault();
    });
    $('.sub-news-letter').on('click', function(e) {
        if (!$('.subscribesec').is(':visible')) {
            $('.subscribesec-box').show();
            $('.subscribesec-success').hide();
            $(".successmessage,.alreadysubscribed,.errormessage").hide();

        }
        // $('.subscribesec').slideToggle("slow");
    });

    $('.search_inp_mob[name="s"]').on('keyup', function() {
        $('input.searchinputbox[name=s]').val($(this).val());
    });
    $('.search_inp_mob[name="s"]').on('keyup', '.search_ico', function() {
        $('input.searchinputbox[name=s]').val($(this).val());
    });
    $('.edureka-blog-header').on('click', '.search-button-top', function(e) {
        e.preventDefault();
        $('.main-search').submit();
        return false;

    });

    $(".mob-list-show").on("click", function(e) {
        $('.video-playlist-box').toggleClass("expanded");
        $('.playlist-box-list').slideToggle();
    });
    $('#tabowl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1.8,
                loop: false,
                nav: false
            },
            360: {
                items: 2.1,
                loop: false,
                nav: false
            },
            600: {
                items: 3.8,
                loop: false,
                nav: false
            },
            1000: {
                items: 5.5,
                nav: false,
                loop: false,
                margin: 20
            }
        }

    });

    $('.owl-carousel').owlCarousel({
        margin: 10,
        loop: false,
        rewindNav: false,
        touchDrag: false,
        pullDrag: false,
        freeDrag: false,
        responsiveClass: true,
		nav: true,
                navText: [
                    "<i class='icon-Blog-left-arrow'></i>",
                    "<i class='icon-Blog-right-arrow'></i>"
                ],
        responsive: {
            0: {
                items: 1                
            },
            360: {
                items: 2
//                nav: true,
//                navText: [
//                    "<i class='icon-Left_Arrow_Related_posts_videos'></i>",
//                    "<i class='icon-Right_Arrow_Related_posts_videos'></i>"
//                ]
            },
            600: {
                items: 3
//                nav: true,
//                navText: [
//                    "<i class='icon-Left_Arrow_Related_posts_videos'></i>",
//                    "<i class='icon-Right_Arrow_Related_posts_videos'></i>"
//                ]
            },
            1000: {
                items: 5,
                nav: false
            }
        }
    });

	
	

	$("body").on("mouseover",".drop-category-menu",function(){
		var tab_id = $(this).attr('data-tab');

		$('li.drop-category-menu').removeClass('active');
		$(this).addClass('active');
		$('.sub-cat-menu:visible').hide();
		$('.sub-cat-wrapper').show(); 
		$("#"+tab_id).show();
	});
$(function () {
       $('#search-inp,#search-inp1').typeahead({

           minLength: 1,
           maxItem: 6,
           delay: 50,
           dynamic: true,
           dynamicFilter: false,
           backdrop: {
               "background-color": "#000"
           },
           template: '<span class="">' +
                   '<span class="avatar">' +
                   '<a class="title" href="https://{{course_slug}}" ><img class="img-circle img60" src="{{avatar}}"></a>' +
                   "</span>" +
                   '<a class="title" href="https://{{course_slug}}" ><span class="title">{{title}}</span></a>' +
                   "</span>",
           emptyTemplate: '<span class="">' +
                   '<span class="avatar">' +
                   "</span>" +
                   '<span class="title">No relevant results found</span>' +
                   "</span>",
           display: ["title", "post_content", "category", "get_post"],
           //href: "{{course_slug}}",
           source: {
               courses: {
                   url: [{
                           type: "POST",
                            url: afp_vars.afp_ajax_url,
                           data: {
                               searchVar: "{{query}}",
                               action: 'recommendSearchResult',
                           },
                           callback: {
                               done: function (data) {
                                   return data;
                               }
                           }
                       }, "data.courses"]
               }
           },
           callback: {
               onSendRequest: function (node, query) {
                   var selector = node.selector;
                   if (selector == "#search-inp1")
                   {
                       $("#search-button-bottom").hide();
                       $("#autosearchload_bottom").show();
                   } else {
                       $("#search-button-top").hide();
                       $("#autosearchload_top").show();
                   }
               },
               onReceiveRequest: function (node, query) {
                   var selector = node.selector;
                   if (selector == "#search-inp1")
                   {
                       $("#autosearchload_bottom").hide();
                       $("#search-button-bottom").show();
                   } else {
                       $("#autosearchload_top").hide();
                       $("#search-button-top").show();
                   }
               },
               onClick: function (node, a, obj, event) {
                   //event.preventDefault();
                   window.location.replace(course_slug);
               },
               onSubmit: function (node, form, item, event) {
                   event.preventDefault();
               }
           },
           debug: false
       });
   });
   $(".icon-search").on('click',function(){ 
       $(".ajax_loader_gif_enroll").show();
        formSubmit("search-inp",true);
   });
   $("#search-inp").on('keypress',function(e){
       if(e.which==13)
       {
          formSubmit("search-inp",true);
       }
   });
 
   function formSubmit(myfield, flag) {
   if (typeof flag === 'undefined') {
       flag = true;
   }
   var actionUrl;
   var searchKeyword = $('#' + myfield).val();
   if (searchKeyword == '') {
       $('#' + myfield).focus();
       return false;
   } else {

       actionUrl = '/blog/?s=' + cleankeyword(searchKeyword) + (enableBlogUtm ? "?utm_source=Blog&utm_medium=Blog Header Search Box&utm_campaign=" + searchKeyword : '');
       window.location.href = actionUrl;
       return false;
   }
   $(".ajax_loader_gif_enroll").show();
   window.location.href = actionUrl;
}
});





/*END*/
/*Start/home/release/www/blog_180530_1650/wp-content/themes/edu-hiran/js/modalEffects.js*/
/**
 * modalEffects.js v1.0.0
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2013, Codrops
 * http://www.codrops.com
 */
var ModalEffects = (function () {

    function init() {

        var overlay = document.querySelector('.md-overlay');
        $('body').on('click', '.md-trigger', function () {
            var el = this;
            var elem = $(this);
            var modal = document.querySelector('#' + elem.attr('data-modal')),
                    close = modal.querySelector('.md-close'),
                    onclose = modal.getAttribute('md-onclose');

            classie.add(modal, 'md-show');

            var overlay = $('#' + elem.attr('data-modal')).next();

            overlay.off('click', removeModalHandler);
            overlay.on('click', removeModalHandler);

            if (elem.hasClass('md-setperspective')) {
                setTimeout(function () {
                    classie.add(document.documentElement, 'md-perspective');
                }, 25);
            }
            $("html,body").css("overflow","hidden");
            function removeModal(hasPerspective) {
                classie.remove(modal, 'md-show');
                if (typeof onclose == 'string') {
                    var fn = window[onclose];
                    if (typeof fn === 'function')
                        fn.apply(window);
                }
                if (hasPerspective) {
                    classie.remove(document.documentElement, 'md-perspective');
                }
                $("html,body").css("overflow","visible");
            }

            function removeModalHandler() {
                removeModal(classie.has(el, 'md-setperspective'));
            }
            close.addEventListener('click', function (ev) {
                ev.stopPropagation();
                removeModalHandler();
            });

            return false;
        });
    }

    init();
})();/*END*/
/*Start/home/release/www/blog_180530_1650/wp-content/themes/edu-hiran/js/modalEffects-related.js*/
/*!
 * classie - class helper functions
 * from bonzo https://github.com/ded/bonzo
 * 
 * classie.has( elem, 'my-class' ) -> true/false
 * classie.add( elem, 'my-new-class' )
 * classie.remove( elem, 'my-unwanted-class' )
 * classie.toggle( elem, 'my-class' )
 */

/*jshint browser: true, strict: true, undef: true */
/*global define: false */

( function( window ) {

'use strict';

// class helper functions from bonzo https://github.com/ded/bonzo

function classReg( className ) {
  return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
}

// classList support for class management
// altho to be fair, the api sucks because it won't accept multiple classes at once
var hasClass, addClass, removeClass;

if ( 'classList' in document.documentElement ) {
  hasClass = function( elem, c ) {
    return elem.classList.contains( c );
  };
  addClass = function( elem, c ) {
    elem.classList.add( c );
  };
  removeClass = function( elem, c ) {
    elem.classList.remove( c );
  };
}
else {
  hasClass = function( elem, c ) {
    return classReg( c ).test( elem.className );
  };
  addClass = function( elem, c ) {
    if ( !hasClass( elem, c ) ) {
      elem.className = elem.className + ' ' + c;
    }
  };
  removeClass = function( elem, c ) {
    elem.className = elem.className.replace( classReg( c ), ' ' );
  };
}

function toggleClass( elem, c ) {
  var fn = hasClass( elem, c ) ? removeClass : addClass;
  fn( elem, c );
}

var classie = {
  // full names
  hasClass: hasClass,
  addClass: addClass,
  removeClass: removeClass,
  toggleClass: toggleClass,
  // short names
  has: hasClass,
  add: addClass,
  remove: removeClass,
  toggle: toggleClass
};

// transport
if ( typeof define === 'function' && define.amd ) {
  // AMD
  define( classie );
} else {
  // browser global
  window.classie = classie;
}

})( window );
/*END*/
/*Start/home/release/www/blog_180530_1650/wp-content/themes/edu-hiran/js/mfb.js*/
/**
 * Material floating button
 * By: Nobita
 * Repo and docs: https://github.com/nobitagit/material-floating-button
 *
 * License: MIT
 */

 // build script hook - don't remove
 ;(function ( window, document, undefined ) {
 

  'use strict';

  /**
   * Some defaults
   */
  var clickOpt = 'click',
      hoverOpt = 'hover',
      toggleMethod = 'data-mfb-toggle',
      menuState = 'data-mfb-state',
      isOpen = 'open',
      isClosed = 'closed',
      mainButtonClass = 'mfb-component__button--main';

  /**
   * Internal references
   */
  var elemsToClick,
      elemsToHover,
      mainButton,
      target,
      currentState;

  /**
   * For every menu we need to get the main button and attach the appropriate evt.
   */
  function attachEvt( elems, evt ){
    for( var i = 0, len = elems.length; i < len; i++ ){
      mainButton = elems[i].querySelector('.' + mainButtonClass);
      mainButton.addEventListener( evt , toggleButton, false);
    }
  }

  /**
   * Remove the hover option, set a click toggle and a default,
   * initial state of 'closed' to menu that's been targeted.
   */
  function replaceAttrs( elems ){
    for( var i = 0, len = elems.length; i < len; i++ ){
      elems[i].setAttribute( toggleMethod, clickOpt );
      elems[i].setAttribute( menuState, isClosed );
    }
  }

  function getElemsByToggleMethod( selector ){
    return document.querySelectorAll('[' + toggleMethod + '="' + selector + '"]');
  }

  /**
   * The open/close action is performed by toggling an attribute
   * on the menu main element.
   *
   * First, check if the target is the menu itself. If it's a child
   * keep walking up the tree until we found the main element
   * where we can toggle the state.
   */
  function toggleButton( evt ){

    target = evt.target;
    while ( target && !target.getAttribute( toggleMethod ) ){
      target = target.parentNode;
      if(!target) { return; }
    }

    currentState = target.getAttribute( menuState ) === isOpen ? isClosed : isOpen;

    target.setAttribute(menuState, currentState);

  }

  /**
   * On touch enabled devices we assume that no hover state is possible.
   * So, we get the menu with hover action configured and we set it up
   * in order to make it usable with tap/click.
   **/
  if ( window.Modernizr && Modernizr.touch ){
    elemsToHover = getElemsByToggleMethod( hoverOpt );
    replaceAttrs( elemsToHover );
  }

  elemsToClick = getElemsByToggleMethod( clickOpt );

  attachEvt( elemsToClick, 'click' );

// build script hook - don't remove
})( window, document );

/*END*/
/*Start/home/release/www/blog_180530_1650/wp-content/themes/edu-hiran/js/signup.js*/
$(document).ready(function () {
    $('#signupForm').on('click', 'button[type=submit]', function (e) {
        e.preventDefault();
        $('.has-error').addClass('highlighterror');
        $('.has-success').removeClass('highlighterror');
        $("#signup_error_message").css("display", "block");
        $("#signup_error_message, #mobileredmsg").html('<i class="fa fa-exclamation-triangle"></i> ' + "Please enter a valid input.");
        $('#mobileredclass').css("display", "block");
        $('#mobilegreenclass').css("display", "none");
        var validatorCheck = $(this).closest('form').data('bootstrapValidator');
        validatorCheck.validate();
        if (!validatorCheck.isValid()) {
            setTimeout(function () {
                $('#mobileredclass').css("display", "block");
            }, 300);
        }
        return false;
    });
    $('#signinForm').on('click', 'button[type=submit]', function (e) {
        e.preventDefault();
        $('.has-error').addClass('highlighterror');
        $('.has-success').removeClass('highlighterror');
        $("#signin_error_message").css("display", "block");
        $("#signin_error_message, #mobileredmsg").html('<i class="fa fa-exclamation-triangle"></i> ' + "Please enter a valid input.");

        var validatorCheck = $(this).closest('form').data('bootstrapValidator');
        validatorCheck.validate();
        if (!validatorCheck.isValid()) {
            setTimeout(function () {
                $('#mobileredclass').css("display", "block");
            }, 300);
        }
        return false;
    });
    if (typeof $('#signupForm').bootstrapValidator !== 'undefined') {
        $('#signupForm').bootstrapValidator({
            err: {
                container: function ($field, validator) {

                    if (validator.isValid()) {
                        $('.has-feedback').removeClass("has-error");
                    } else {
                        $('.has-feedback').addClass("has-error");
                    }
                }
            },
            feedbackIcons: {
                valid: 'fa fa-check',
                invalid: 'fa fa-close',
                validating: 'glyphicon glyphicon-refresh'
            },
            fields: {
                'data[User][name]': {
                    validators: {
                        notEmpty: {
                            message: 'Name is required.'
                        },
                        regexp: {
                            regexp: '^[a-zA-Z][a-zA-Z\\s]+$',
                            message: 'Name is required.'
                        }
                    }
                },
                'data[User][email]': {
                    validators: {
                        notEmpty: {
                            message: 'Email is required'
                        },
                        regexp: {
                            regexp: '^[^@\\s]+@([^@\\s]+\\.)+[^@\\s]{2,4}$',
                            message: 'The value is not a valid email address'
                        }
                    }
                },
                'data[User][password]': {
                    validators: {
                        notEmpty: {
                            message: 'Password is required'
                        },
                        stringLength: {
                            min: 8,
                            message: 'Password should be atleast 8 character'
                        }

                    }
                },
                'data[User][mobile]': {
                    validators: {
                        notEmpty: {
                            message: 'Mobile Number is required',
                        },
                        regexp: {
                            regexp: '^[0-9-+]+$',
                            message: 'The value is not a valid mobile number'
                        }
                    }
                }
            }
        }).on('success.form.bv', function (e) {
            // Prevent form submission
            e.preventDefault();
            var $form = $(e.target),
                    validator = $form.data('bootstrapValidator'),
                    submitButton = validator.getSubmitButton();
            if (validator.isValid()) {
                $("#signup_error_message, #mobileredclass").css("display", "none");
                $('#ajax-loader').show();
                var category_data = $("#category_desc").val();
                var sub_category_data = $("#sub_category_desc").val();
                var blog_name = $("#blog_name").val();
                $.ajax({
                    url: '/users/signup?utm_source=blog&utm_campaign=blog_signup&utm_medium=blog_signup',
                    data: $('#signupForm').serialize() + "&category=" + category_data + "&blog_name=" + blog_name + "&sub_category=" + sub_category_data,
                    type: 'POST',
                    dataType: 'json',
                    error: function (e) {
                        $('#ajax-loader').hide();
                    },
                    success: function (data) {
                        $('#ajax-loader').hide();

                        if (data.status == "success" || data.status == "my-courses" || data.status == "lead") {

                            if (playVideo) {
                                var href = window.location.href;
                                var inputs = '';
                                inputs += '<input type="hidden" name="playme" value="true" />';
                                $("body").append('<form action="' + href + '" method="post" id="poster">' + inputs + '</form>');
                                $("#poster").submit();

                            } else
                                do_login_update(true);

                        } else {
                            $(".newsignclik").show();
                            $("#signup_error_message, #mobileredmsg").html('<i class="fa fa-exclamation-triangle"></i> ' + data.msg);
                            $("#signup_error_message").css("display", "block");
                            $('#mobilegreenclass').css("display", "none");
                            $('#mobileredclass').css("display", "block");
                        }
                    }

                });
            }

            return false;
            // Do whatever you want here ...
        }).on('error.field.bv', function (e, data) {

            $('.defdisablesignup').prop('disabled', false).removeClass('disabled');

        }).on('success.field.bv', function (e, data) {

            $('.has-success').removeClass('highlighterror').removeClass('has-error');
            if (data.fv.getInvalidFields().length > 0) {    // There is invalid field
                $('.defdisablesignup').prop('disabled', false).removeClass('disabled');
                $('#mobileredclass').css("display", "none");
            }

        });

    }



    if (typeof $('#signinForm').bootstrapValidator !== 'undefined') {

        $('#signinForm').bootstrapValidator({
            err: {
                container: function ($field, validator) {

                    if (validator.isValid()) {
                        $('.has-feedback').removeClass("has-error");
                    } else {
                        $('.has-feedback').addClass("has-error");
                    }

                }
            },
            feedbackIcons: {
                valid: 'fa fa-check',
                invalid: 'fa fa-close',
                validating: 'glyphicon glyphicon-refresh'
            },
            fields: {
                'data[User][email]': {
                    validators: {
                        notEmpty: {
                            message: 'Email is required'
                        },
                        regexp: {
                            regexp: '^[^@\\s]+@([^@\\s]+\\.)+[^@\\s]{2,4}$',
                            message: 'The value is not a valid email address'
                        }
                    }
                },
                'data[User][password]': {
                    validators: {
                        notEmpty: {
                            message: 'Password is required'
                        },
                        stringLength: {
                            min: 8,
                            message: 'Password should be atleast 8 character'
                        }
                    }
                }
            }
        }).on('success.form.bv', function (e) {
            // Prevent form submission

            e.preventDefault();
            var $form = $(e.target),
                    validator = $form.data('bootstrapValidator'),
                    submitButton = validator.getSubmitButton();

            if (validator.isValid()) {
                $("#signin_error_message, #mobileredclass").css("display", "none");
                $('#ajax-loader').show();
                $('.defdisablesignin').removeClass('disabled');

                $.ajax({
                    url: '/users/signin',
                    data: $('#signinForm').serialize(),
                    type: 'POST',
                    dataType: 'json',
                    error: function () {
                        $('#ajax-loader').hide();
                    },
                    success: function (data) {
                        $('.defdisablesignin').removeClass('disabled');

//                    $('#ajax-loader').hide();
                        if (data.status == "success" || data.status == "my-courses" || data.status == "lead") {
                            if (playVideo) {
                                var href = window.location.href;
                                var inputs = '';
                                inputs += '<input type="hidden" name="playme" value="true" />';
                                $("body").append('<form action="' + href + '" method="post" id="poster">' + inputs + '</form>');
                                $("#poster").submit();

                            } else {
                                do_login_update(true);
                            }
                        } else {
                            $(".newsignclik").show();
                            $("#signin_error_message").css("display", "block");
                            $("#signin_error_message, #mobileredmsg").html('<i class="fa fa-exclamation-triangle"></i> ' + data.msg);
                            $('#mobilegreenclass').css("display", "none");
                            $('#mobileredclass').css("display", "block");
                        }
                    }
                });
            }
            return false;
            // Do whatever you want here ...
        }).on('error.field.bv', function (e, data) {

            $('.defdisablesignin').prop('disabled', false).removeClass('disabled');

        }).on('success.field.bv', function (e, data) {
            $('.has-success').removeClass('highlighterror').removeClass('has-error');
            if (data.fv.getInvalidFields().length > 0) {    // There is invalid field
                $('.defdisablesignin').prop('disabled', false).removeClass('disabled');
                $('#mobileredclass').css("display", "none");
            }

        });

    }

//    var myTag = $('.feattitle').text();
//    if (myTag.length > 30) {
//        var truncated = myTag.trim().substring(0, 30) + "…";
//        $('.feattitle').text(truncated);
//    }

    $('.has-error,.has-feedback').removeClass("has-error");

    var user_status = null;

    $('.onclicktab, .md-overlay').on('click', function (e) {
        $('#mobilegreenclass,#mobileredclass,#signin_error_message,#signup_error_message').css("display", "none");
        $('#inputName,#pwd').val("");
        $('.defdisablesignin').prop('disabled', true);
        $('.has-error,.highlighterror').removeClass("highlighterror");
        $('#pwd, #pwd3').attr("type", "password");
        $('#eye, #eye3').html("show");
        $('#pwd2, #otpfield').removeClass('highlighterror');

    });

    //  Handle the autofill for browsers where the jQuery event is not trigerred automatically.

    $("#signinForm , #resetcode, #signupForm").on('click', function (e) {
        $('#mobileredclass').css("display", "none");
        $('#mobilegreenclass').css("display", "none");
    });

    if (user_status != null) { //contains fields that show whether the user already exists in the database
        if (user_status['status'] == "failed") {
            $("#signin-modal").addClass('md-show');
            $(".newsignclik").show();
            $("#signin_error_message").css("display", "block");
            $('#inputName,#pwd,#pwd3,#mobnum, #signupemail,#signupname').val("");
            $("#signin_error_message, #mobileredmsg").html('<i class="fa fa-exclamation-triangle"></i> ' + "The reset password link has expired");
            $('#mobilegreenclass').css("display", "none");
            $('#mobileredclass').css("display", "block");
        } else {
            $("#signin-modal").addClass('md-show');
            $(".newsignclik").hide();
            $(".forgetpassnew").show();
            $("#prefilledemail, #emailfield").val(user_status['email']);
            $("#verificationfield").val(user_status['verification_code']);
            $("#messages, #mobilegreenmsg").html("Please enter the new password");
            $('#mobilegreenclass').css("display", "block");
            $(".verifycheck").hide();
            resetpass();
        }
    }
    redirectflag = $("#redirectflag").val();
    if (redirectflag == 1) {
        $(".newsignclik").show();
        $("#signin_signup_cancel").hide();
        $('.signin.md-trigger.top-signin').trigger('click');
    } else if (redirectflag == 2) {
//          $("#signin-modal").addClass('md-show');
        $("#signin_signup_cancel").hide();
        $("#LogIn").removeClass("active in");
        $("#SignUp").addClass("active in");
        $(".Signinspace").removeClass("active");
        $(".SignUpspace").addClass("active");
        $('.signin.md-trigger.top-signin').trigger('click');
    }

    var flag_reset = true;
    $("#Forgotnew , #resendcode").on('click', function (e) {
        $('#otpfield, #verificationfield, #pwd2').val("");
        var email = $('#inputName').val();
        if (isEmail(email)) {

            $('#ajax-loader').show();
            e.preventDefault();

            $.ajax({
                url: '/users/process_forgot_password',
                data: $('#signinForm').serialize(),
                type: 'POST',
                dataType: "json",
                error: function () {
                    $('#ajax-loader').hide();
                },
                success: function (data) {
                    $('#ajax-loader').hide();
                    if (data.status == "success") {
                        $(".newsignclik").hide();
                        $(".forgetpassnew").show();
                        $(".verifycheck").show();
                        $('#otpfield').removeClass('highlighterror');
                        $('#pwd2').removeClass('highlighterror');
                        $("#prefilledemail, #emailfield").val(data.email);
                        $("#messages").addClass("greenalertnew");
                        $("#messages").removeClass("redalertnew");
                        $("#messages, #mobilegreenmsg").html('<i class="fa fa-check-circle"></i> ' + data.msg);
                        $('#mobileredclass').css("display", "none");
                        $('#mobilegreenclass').css("display", "block");
                        if (flag_reset == true) {
                            flag_reset = false;
                            resetpass();
                        }
                    } else {
                        $(".newsignclik").show();
                        $("#signin_error_message").css("display", "block");
                        $("#signin_error_message, #mobileredmsg").html('<i class="fa fa-exclamation-triangle"></i> ' + data.msg);
                        $('#mobilegreenclass').css("display", "none");
                        $('#mobileredclass').css("display", "block");
                    }
//                
                }

            });
        } else {
            $("#signin_error_message, #mobileredclass").css("display", "block");
            $("#signin_error_message").removeClass("greenalertnew");
            $("#signin_error_message").addClass("redalertnew");
            $("#signin_error_message, #mobileredmsg").html('<i class="fa fa-exclamation-triangle"></i> ' + "Please enter your email id to reset password");
        }
    });
    if (typeof document.getElementById("eye") !== "undefined" && document.getElementById("eye") != null) {
        document.getElementById("eye").addEventListener("click", function (e) {
            var pwd = document.getElementById("pwd");
            if (pwd.getAttribute("type") == "password" && $('#pwd').val() != '') {
                pwd.setAttribute("type", "text");
                $('#eye').html("hide");
            } else {
                pwd.setAttribute("type", "password");
                $('#eye').html("show");
            }
        });
    }
    if (typeof document.getElementById("eye2") !== "undefined" && document.getElementById("eye2") != null) {
        document.getElementById("eye2").addEventListener("click", function (e) {
            var pwd = document.getElementById("pwd2");
            if (pwd.getAttribute("type") == "password" && $('#pwd2').val() != '') {
                pwd.setAttribute("type", "text");
                $('#eye2').html("hide");
            } else {
                pwd.setAttribute("type", "password");
                $('#eye2').html("show");
            }
        });
    }
    if (typeof document.getElementById("eye3") !== "undefined" && document.getElementById("eye3") != null) {
        document.getElementById("eye3").addEventListener("click", function (e) {
            var pwd = document.getElementById("pwd3");
            if (pwd.getAttribute("type") == "password" && $('#pwd3').val() != '') {
                pwd.setAttribute("type", "text");
                $('#eye3').html("hide");
            } else {
                pwd.setAttribute("type", "password");
                $('#eye3').html("show");
            }
        });
    }

});


function isEmail(email) {

    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
}

function resetpass() {
    $("#passresetbutton").on('click', function (e) {
        //$('#ajax-loader').show();
        e.preventDefault();
        //$(".forgetpassnew").hide();
        new_pass = $.trim($('#pwd2').val());
        if ((new_pass != '' && new_pass.toString().length >= 8) && ($('#otpfield').val() != '' || $("#verificationfield").val() != '')) {
            $('#ajax-loader').show();
            e.preventDefault();

            $.ajax({
                url: '/lms_users/recover_password',
                data: $('#resetcode').serialize(),
                type: 'POST',
                dataType: "json",
                error: function () {
                    $('#ajax-loader').hide();
                },
                success: function (data) {
                    $('#ajax-loader').hide();
                    if (data.status == "success") {
                        $(".newsignclik").show();
                        $(".forgetpassnew").hide();
                        $("#signin_error_message").css("display", "block");
                        $("#signin_error_message").removeClass("redalertnew");
                        $("#signin_error_message").addClass("greenalertnew");
                        $("#signin_error_message, #mobilegreenmsg").html('<i class="fa fa-check-circle"></i> ' + data.msg);
                        $('#mobilegreenclass').css("display", "block");
                        $('#inputName,#signupname,#pwd,#pwd3,#mobnum, #signupemail,#emailfield').val("");
                        $('.defdisable').prop('disabled', true);

                    } else {
                        $('#otpfield').addClass('highlighterror');
                        $('#pwd2').removeClass('highlighterror');
                        $(".forgetpassnew").show();
                        $("#messages").removeClass("greenalertnew");
                        $("#messages").addClass("redalertnew");
                        $('#messages, #mobileredmsg').html('<i class="fa fa-exclamation-triangle"></i> ' + data.msg);
                        $('#mobilegreenclass').css("display", "none");
                        $('#mobileredclass').css("display", "block");
                    }

                }


            });
        } else {
            $(".newsignclik").hide();
            $(".forgetpassnew").show();
            $("#messages").removeClass("greenalertnew");
            $("#messages").addClass("redalertnew");
            $('#mobilegreenclass').css("display", "none");
            $('#mobileredclass').css("display", "block");
            if ($('#otpfield').val() == '' && new_pass.toString().length > 8) {
                $('#otpfield').addClass('highlighterror');
                $('#pwd2').removeClass('highlighterror');
                $('#otpfield').focus();
                $('#messages, #mobileredmsg').html('<i class="fa fa-exclamation-triangle"></i> ' + "Please enter the OTP.");
            } else if (new_pass.toString().length < 8 && $('#otpfield').val() != '') {
                $('#otpfield').removeClass('highlighterror');
                $('#pwd2').addClass('highlighterror');
                $('#pwd2').focus();
                $('#messages, #mobileredmsg').html('<i class="fa fa-exclamation-triangle"></i> ' + "Please enter 8 digit password.");
            } else {
                $('#otpfield, #pwd2').addClass('highlighterror');
                if ($("#verificationfield").val() != '') {
                    $('#pwd2').focus();
                    $('#messages, #mobileredmsg').html('<i class="fa fa-exclamation-triangle"></i> ' + "Please enter 8 digit password.");
                } else {
                    $('#otpfield').focus();
                    $('#messages, #mobileredmsg').html('<i class="fa fa-exclamation-triangle"></i> ' + "Please enter a valid input.");
                }

            }
            return false;
        }
    });

}

function checkdisable() {
    var firstTime = true;
    if (firstTime) {
        var autofillemail = $('.signinvalid').val();
        if (autofillemail != "") {
            if ($('.signinvalid').val() != "" && $('.defdisablesignin').prop('disabled') && firstTime) {

                firstTime = false;
                $('.defdisablesignin').prop('disabled', false);
            }
        }
    }
}
function formSubmit(myfield, flag) {
    if (typeof flag === 'undefined') {
        flag = true;
    }
    var actionUrl;
    var searchKeyword = $('#' + myfield).val();
    if (searchKeyword == '') {
        $('#' + myfield).focus();
        return false;
    } else {

        actionUrl = '/search/' + cleankeyword(searchKeyword) + (enableBlogUtm ? "?utm_source=Blog&utm_medium=Blog Header Search Box&utm_campaign=" + searchKeyword : '');
        window.location.href = actionUrl;
        return false;
    }
    $(".ajax_loader_gif_enroll").show();
    window.location.href = actionUrl;
}
function cleankeyword(str) {
    //return str.replace('&amp;', '').replace(/%\D/g, '%25').replace(/[^a-zA-Z0-9@$!&%()-\/_| '-]/g, '').toLowerCase().replace(/[\/_| ]+/g, '+');
    str = str.replace(/\\/g, '').replace(/\//g, '');
    r = encodeURIComponent(str);
    r = r.replace(/\%20/g, '+').replace(/\%/g, '%25');
    return r;
}
function isEmail(email) {

    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
}
function submitenter(myfield, e) {
    var searchKeyword = $('#' + myfield).val();
//    console.log(searchKeyword);
    if ((e.which == 13) && (searchKeyword != '')) {
//        alert("1");
        var type = '';
        var actionUrl = webURL + 'search/' + cleankeyword(searchKeyword);
        if (typeof window._fbq == 'object') {
            window._fbq.push(["track", "Search", {}]);
        }
        return false;
    }
}
if (enableBlogUtm) {
    $(function () {
        $('#cb_searchbox').off("DOMSubtreeModified");
        $('#cb_searchbox').on("DOMSubtreeModified", function () {
            $('.typeahead-list li a').not('.updated').each(function () {
                var hrefdata = $(this).addClass('updated').attr('href');
                hrefdata += "?utm_source=Blog&utm_medium=Blog Header Search Box&utm_campaign=" + $('input.search_inp:visible').val();
                $(this).attr('href', hrefdata);
            });
        });
    });
}
$(document).ready(function () {
    $("#email_otp").focusin(function () {
        $("#email_otp_mgs").addClass("hide");
    });
    storeemail = null
    $("#e_otp_resend").hide();
    $("#e_otp_resend").click(function () {
        storeemail = null;
        $("#e_otp_resend").hide();
        e_otp_send();

    });
    $("#signupemail").focusout(function () {
        e_otp_send();
    });

});

function e_otp_send() {
    setTimeout(function () {
        if (!$("#signupemail").parents(".form-group").hasClass("has-error")) {
            if ($("#email_otp").length == 1 && storeemail != $("#signupemail").val() && $.trim($("#signupemail").val()) != "") {
                $("#opt_formgroup").removeClass("hide");
                $("#email_otp_mgs").removeClass("hide");
                $("#signup_error_message").css("display", "none");
                $("#email_otp_mgs").html("<i class='fa fa-check-circle'></i> Verification code sent to " + $("#signupemail").val());
                storeemail = $("#signupemail").val();
                $("#email_otp").val("");
                var data = {"email": $("#signupemail").val(), "name": $("#signupname").val()}
                $.ajax({
                    url: "/lms_users/email_verifcation_otp",
                    data: data,
                    type: 'POST',
                    dataType: 'json',
                    success: function (data) {
                        $("#e_otp_resend").show();
                        if (data.status == "success") {

                        } else {

                        }

                    }
                });
            }
        }
    }, 500);
}/*END*/
/*Start/home/release/www/blog_180530_1650/wp-content/themes/edu-hiran/js/ajax-pagination.js*/
/*scriptDATA:START*/
var php_array = {"admin_ajax":"https:\/\/www.edureka.co\/blog\/wp-admin\/admin-ajax.php"};
var wnm_custom = {"template_url":"\/blog\/wp-content\/themes\/edu-hiran"};
var myAjax = {"ajaxurl":"https:\/\/www.edureka.co\/blog\/wp-admin\/admin-ajax.php"};
/*scriptDATA:END*//* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

// add utm paramters on blog tiles for internal searc or header search

var slug = function (str) {
    var $slug = '';
    var trimmed = $.trim(str);
    $slug = trimmed.replace(/[^a-z0-9-]/gi, '-').
            replace(/-+/g, '-').
            replace(/^-|-$/g, '');
    return $slug.toLowerCase();
}
var activeTab = null;

function populateResponce(posttype, jsonResponce) {

    if (jsonResponce.trending) {
        $("#blogmobfull-populate").html(jsonResponce.response);
        $("#blogmobfull-populate").append(jsonResponce.paginator);
        $("html, body").animate({scrollTop: 0}, 1000);
    } else {
        var container = $('#blog-' + posttype + '-block-wrapper .masonry-container');
        container.find("p.no-relative-post").remove();
        $.each(container.children('.item.blogcards'), function () {
            container.masonry().masonry('remove', this)
                    .masonry('layout')
        });
        var htmlAppended = jsonResponce.response;
        var paginatorBlock = jsonResponce.paginator;
        $(htmlAppended).each(function (index, value) {
            var elemData = $(value);
            container.append(elemData).masonry().masonry('appended', elemData);
        })

        $('#blog-' + posttype + '-block-wrapper .blog-' + posttype + '-paginator').remove();
        $('#blog-' + posttype + '-block-wrapper').append(paginatorBlock);
        if ($(document).scrollTop() > $(".main-post-wrapper").offset().top)
            $("html,body").animate({
                scrollTop: $(".left-panel-wrapper").offset().top
            }, 1000);
    }
    //    var $container = ;
    $('.masonry-container:visible').masonry({
        columnWidth: '.item',
        itemSelector: '.item'
    });
    initLazyImages();
}

function do_ajax_logout() {
    var data = {
        action: 'filter_logout', // function to execute
        afp_nonce: afp_vars.afp_nonce, // wp_nonce
    };
    $.ajax({
        url: afp_vars.afp_ajax_url,
        data: data,
        //        async: false,
        type: 'POST',
        error: function () {
            $('#ajax-loader').hide();
        },
        success: function (response) {
            $('#ajax-loader').hide();
            window.location = "";
        }
    });
}


function sendAjaxRequest(pageNo, postType, trending, updatePushState) {
    updatePushState = typeof updatePushState == 'undefined' ? true : updatePushState;
    var catSlug = $('input#categoryinputbox').val();
    var searchVar = $('input.searchinputbox[name=s]').val();
    var authorVar = $('input#authorinputbox').val();
    var tagsVar = $('.tagfilterblog#main-tag-filter-wrapper').is(':visible') ?
            $('#main-tag-filter-wrapper.tagfilterblog .tag-blog-button-for-selected-tags').data('tag-slug') : '';
    var dataPost = {
        action: 'filter_posts', // function to execute
        afp_nonce: afp_vars.afp_nonce, // wp_nonce
        posttype: postType, // selected tag
        searchVar: searchVar,
        category: catSlug,
        tagfilter: tagsVar,
        authorfilter: authorVar,
        pageno: pageNo,
        orderby: {
            blogorder: $('.posts-order.orderby-selected').data('orderby'),
            videoorder: $('.videos-order.orderby-selected').data('orderby'),
            intervieworder: $('.interview-order.orderby-selected').data('orderby')
        }
    };
    if (typeof trending != 'undefined' && trending) {
        dataPost.trending = 'gettrending';
    }
    $.ajax({
        url: afp_vars.afp_ajax_url,
        data: dataPost,
        type: 'POST',
        success: function (response) {
            var jsonResponce = $.parseJSON(response);
            if (typeof jsonResponce == 'object') {
                populateResponce(postType, jsonResponce);
                if (dataPost.searchVar != "") {
                    add_utm("internal");
                }
            }

        }
    });
    if (updatePushState)
        ajaxPushState(dataPost, 'sendAjaxRequest', true);
}

function do_subscribe_process(emailid, postId) {


    var data = {
        action: 'subscribe_process', // function to execute
        afp_nonce: afp_vars.afp_nonce, // wp_nonce
        email: emailid, // wp_nonce
        postId: postId, // wp_nonce
    };
    $.ajax({
        url: afp_vars.afp_ajax_url,
        data: data,
        //        async: false,
        type: 'POST',
        success: function (response) {
            if (response.status == 200) {
                return true;
            }
        }
    });
    //sendAjaxRequest(data, postType);
}
/**
 * main search and filter function 
 * @author himanshu
 * @returns {undefined}
 */
function searchAjaxRequest(async, updatePushState, changeTab) {
    updatePushState = typeof updatePushState == 'undefined' ? true : updatePushState;
    var pageno = 1;
    var catSlug = $('input#categoryinputbox').val();
    var searchVar = $('input.searchinputbox[name=s]').val();
    var authorVar = $('input#authorinputbox').val();
    var tagsVar = $('.tagfilterblog#main-tag-filter-wrapper').is(':visible') ?
            $('#main-tag-filter-wrapper.tagfilterblog .tag-blog-button-for-selected-tags').data('tag-slug') : '';
    if (typeof async == 'undefined')
        var async = true;
    var dataPost = {
        action: 'filter_posts', // function to execute
        searchpost: 'searchpost',
        afp_nonce: afp_vars.afp_nonce, // wp_nonce
        category: catSlug, // selected tag
        searchVar: searchVar,
        tagfilter: tagsVar,
        authorfilter: authorVar,
        orderby: {
            blogorder: $('.posts-order.orderby-selected').data('orderby'),
            videoorder: $('.videos-order.orderby-selected').data('orderby'),
            intervieworder: $('.interview-order.orderby-selected').data('orderby')
        },
        pageno: pageno
    };
    if (searchVar.length > 0) {
        $('.autosearchload_top').show();
        $('.search-button-top').hide();
    }
    /*if (typeof changeTab != 'undefined') {
        $('.nav-tabs a[href="#homeall"]').tab('show');
    }*/
    $.ajax({
        url: afp_vars.afp_ajax_url,
        data: dataPost,
        type: 'POST',
        async: async,
        success: function (response) {
            var searchResponce = $.parseJSON(response);
            if (typeof searchResponce == 'object') {

                if (searchVar.length > 0) {
                    $('.autosearchload_top').hide();
                    $('.search-button-top').show();
                }

                $.each(searchResponce.searchData, function (postType, jsonResponce) {

                    populateResponce(postType, jsonResponce);
                });
                if ($('input.searchinputbox[name=s]') != "") {
                    add_utm("internal");
                }
                if (typeof changeTab != 'undefined') {
                    $('.nav-tabs a[href="#homeall"]').tab('show');
                }
            }
        }
    });
    if (updatePushState) {
        dataPost.posttype = $('.blog-post-type-tabs').is(':visible') ? $('.blog-post-type-tabs li.active a').data('post_type') : 'all';
        ajaxPushState(dataPost, 'searchAjaxRequest', true);
    }
}

function updateLastWatchQue() {
    var data = {
        action: 'update_recent_videos', // function to execute
        afp_nonce: afp_vars.afp_nonce, // wp_nonce
        pageId: post_vars.postID,
        pageType: post_vars.post_type,
    };
    $.ajax({
        url: afp_vars.afp_ajax_url,
        data: data,
        type: 'POST',
        success: function (response) {}
    });
}

function add_utm(search_type) {
    if (!enableBlogUtm)
        return false;
    $(".thumbnailblog").find(' a.custom-link-attr').each(function () {


        var search_term = (search_type == "header") ? "blog-header-search-box" : "blog-internal-search-box";
        var input_text = slug($('input.searchinputbox[name=s]').val());
        var new_url = $(this).attr('href');
        if (new_url.indexOf("?") === -1) {
            new_url = new_url + '?utm_source=blog&utm_medium=' + search_term + '&utm_campaign=' + input_text
        } else {
            new_url = new_url + '&utm_source=blog&utm_medium=' + search_term + '&utm_campaign = ' + input_text
        }
        if (!(input_text == '' || search_term == ''))
            $(this).attr('href', new_url);
    });
    return true;
}

function addutmParamsToElements() {
    var source = "blog";
    var medium = "button";
    var url = $(location).attr('href');
    var campaign = "";
    // add the utm paramters
    parts = url.split('/'), campaign = parts.pop() == '' ? parts[parts.length - 1] : parts.pop();
    if (enableBlogUtm) {
        $('.blogcontentsec').find('.maxbutton').each(function () {
            var url = $(this).attr('href');
            var text = $(this).find("span").text();
            var text_slug = slug(text);
            if (typeof url != 'undefined' && url.indexOf("utm_source") == -1)
                if (url.indexOf("?") === -1) {
                    $(this).attr('href', url + '?utm_source=' + source + '&utm_medium=' + medium + '&utm_campaign=' + campaign + "-" + text_slug);
                } else {
                    $(this).attr('href', url + '&utm_source=' + source + '&utm_medium=' + medium + '&utm_campaign=' + campaign + "-" + text_slug);
                }
        });
    }
    var searchVar = $('input.searchinputbox[name=s]').val();
    var maxChar = 110;
    if (typeof searchVar != "undefined" && searchVar != "") {
        var trimmedText = (searchVar.length <= maxChar) ? searchVar : searchVar.substring(0, maxChar - 1) + "...";
        $('.tagfilterblog#main-search-filter-wrapper #search-tag-name').html(trimmedText);
    }
    if (enableBlogUtm) {

        var url = $(location).attr('href');
        var url_query = url.substring(0, url.indexOf('?'));
        var courses_href = $("#navbar a").attr("href");
        var new_href = courses_href + '?utm_source=blog&utm_medium=courses&utm_campaign=all-courses';
        $('.left-menu .side-menu-blog a').each(function () {
            var hrefUrl = $(this).attr('href');
            if (hrefUrl.indexOf("utm_source") == -1) {

                hrefUrl = hrefUrl + "?utm_source=blog&utm_medium=left-menu&utm_campaign=" + $(this).attr('data-currpage');
                $(this).attr('href', hrefUrl);
            }
        });
        if (url_query != "") {
            add_utm("header");
        }


        // utm paramters for related post
        var utm_source = "";
        var utm_medium = "";
        var post_type = $(".blog-sidepanel .detailpagesidebar").attr('data-post_type');
        var parent_post = $(".blog-sidepanel .detailpagesidebar").attr('data-post_name');
        $("ul.related-blogs").find('article.custom-related-post a').each(function () {


            if (post_type == "post") {
                utm_source = "blog";
                utm_medium = "right-related-blogs";
            } else if (post_type == "webinars") {
                utm_source = "videos";
                utm_medium = "right-related-videos";
            } else if (post_type == "interview-questions") {
                utm_source = "interview-questions";
                utm_medium = "right-related-interview-questions";
            }

            var new_url = $(this).attr("href") + '?utm_source=' + utm_source + '&utm_medium=' + utm_medium + '&utm_campaign=' + parent_post;
            $(this).attr("href", new_url);
        });
        $(".widget_edu-related-blog-carousel").find('a.related-blog-link').each(function () {


            if (post_type == "post") {
                utm_source = "blog";
                utm_medium = "bottom-related-blog-blogs";
            } else if (post_type == "webinars") {
                utm_source = "videos";
                utm_medium = "bottom-related-blog-videos";
            } else if (post_type == "interview-questions") {
                utm_source = "interview-questions";
                utm_medium = "bottom-related-blog-interview-questions";
            }

            var new_url = $(this).attr("href") + '?utm_source=' + utm_source + '&utm_medium=' + utm_medium + '&utm_campaign=' + parent_post;
            $(this).attr("href", new_url);
        });
    }
}

function do_ajax_countupdate() {
    if (typeof afp_vars == 'object' && afp_vars.single == 1) {

        var data = {
            action: 'update_views', // function to execute
            afp_nonce: afp_vars.afp_nonce, // wp_nonce
            post: afp_vars.postID, // wp_nonce
        };
        $.ajax({
            url: afp_vars.afp_ajax_url,
            data: data,
            type: 'POST',
            success: function (response) {
                if (typeof response == 'object' && typeof response.view_count != 'undefined') {
                    var viewCount = response.view_count;
                    $('.details-page-views-count').html(viewCount);
                }
            }
        });
    }
}

function initiateOwlCarouselWatchItAgain(selectorElement) {
    if (typeof selectorElement == 'object')
        selectorElement.owlCarousel({
            loop: true,
            margin: 10,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 2,
                    loop: false,
                    nav: true,
                    navText: [
                        "<i class='icon-Left_Arrow_Related_posts_videos'></i>",
                        "<i class='icon-Right_Arrow_Related_posts_videos'></i>"
                    ]
                },
                600: {
                    items: 3,
                    loop: false,
                    nav: true,
                    navText: [
                        "<i class='icon-Left_Arrow_Related_posts_videos'></i>",
                        "<i class='icon-Right_Arrow_Related_posts_videos'></i>"
                    ],
                },
                1000: {
                    items: 5,
                    nav: true,
                    navText: [
                        "<i class='icon-Left_Arrow_Related_posts_videos'></i>",
                        "<i class='icon-Right_Arrow_Related_posts_videos'></i>"
                    ],
                    loop: false,
                    margin: 20
                }
            }
        });
}

function do_login_update(reload) {
    var data = {
        action: 'logmein', // function to execute
        afp_nonce: afp_vars.afp_nonce, // wp_nonce
    };
    $.ajax({
        url: afp_vars.afp_ajax_url,
        data: data,
        type: 'POST',
        success: function (response) {
            $('.loggedin-usernav-wrapper,.loggedout-usernav-wrapper').not('.hide').addClass('hide');
            if (response.status = 200 && response.msg == 'loggedin') {
                $('.loggedin-usernav-wrapper').removeClass('hide');
                if (typeof response.userdata == 'object' && response.userdata.customerStatus) {
                    $('.logged-in-customer').removeClass('hide').html('<a href="/communities?utm_source=blog&utm_medium=courses&utm_term=communities">Community</a>');
                }
                if (typeof response.userdata == 'object' && response.userdata.imageName) {
                    $('.user-image-icon').attr('src', response.userdata.imageName);
                }
                if (typeof response.userdata == 'object') {
                    $('.loggedin-usernav-wrapper').attr('data-email', response.userdata.email);
                    if (!response.userdata.subscribed) {
                        //$('.custom-subscribe-form-wrapper.hide').removeClass('hide');
                    } else {
                        //$('.show-after-success.hide').removeClass('hide');
                    }
                }
                if (typeof reload != 'undefined') {
                    location.reload();
                }
            } else {
                $('.loggedout-usernav-wrapper').removeClass('hide');
                //$('.custom-subscribe-form-wrapper.hide').removeClass('hide');
            }
        }
    });
}

function update_videohistory() {
    if (typeof afp_vars == 'object' && afp_vars.single == 1) {


        if ($('.continue-watch-wrapper,.watch-again-content-wrapper').length > 0) {

            var continuewatch = $('.continue-watch-wrapper');
            var watchagain = $('.watch-again-content-wrapper');
            var data = {
                action: 'videohistory', // function to execute
                afp_nonce: afp_vars.afp_nonce, // wp_nonce
                post: afp_vars.postID, // wp_nonce
                continuewatch: continuewatch.length,
                watchagain: watchagain.length
            };
            if (watchagain.length > 0) {

                var watchagainParams = {
                    listing: watchagain.attr('data-listing'),
                    hidefirst: watchagain.attr('data-hidefirst'),
                    striptitle: watchagain.attr('data-striptitle'),
                };
                data = $.extend(data, watchagainParams);
            }
            $.ajax({
                url: afp_vars.afp_ajax_url,
                data: data,
                type: 'POST',
                success: function (response) {
                    if (typeof response == 'object' && response.status == 200 && response.msg == 'video-history') {
                        if (typeof response.continueWatch == 'string' && typeof continuewatch != 'undefined' && (response.continueWatch).length > 0) {
                            continuewatch.children('.content-for-continue-watch').html(response.continueWatch);
                            continuewatch.removeClass('hide');
                        }
                        if (typeof response.watchItAgain == 'string' && typeof watchagain != 'undefined' && (response.watchItAgain).length > 0) {
                            var watchItAgainData = response.watchItAgain;
                            watchItAgainData = '<div class="owl-carousel carousel-custom carousel-watch-again-carousel" id="watch-again-carousel">' + watchItAgainData + '</div>';
                            watchagain.children('.Continue-watch-carousel').html(watchItAgainData);
                            watchagain.removeClass('hide');

                            initiateOwlCarouselWatchItAgain($('.watch-again-content-wrapper .carousel-watch-again-carousel'));
                        }
                    }
                }
            });
        }
    }
}

(function ($) {
    activeTab = $(".mainsearchpan .navheadmob li.active a").data('post_type');
    $('input.searchinputbox[name=s]').data('post-type', activeTab);
    $(document).ready(function ($) {
        if ($('#categoryinputbox').val() == '') {
            $('.dropdown.categories-filter-dropdown ul li:first-child').hide();
//            $('.dropdown.categories-filter-dropdown ul li:nth-child(2)').hide();
        }
        $("#signin-logout,#signin-logoutresp").on('click', function (e) {
            e.preventDefault();
            $('#ajax-loader').show();
            gaEventReferral('Blog', 'Header Logout');
            do_ajax_logout();

            return false;
        });
        $('.main-post-wrapper,.trending-block-wrapper').on('click', '.paginator-wrapper .ajax-pagination li.page-class a.page-link', function (event) {
            // Prevent default action - opening tag page
            var trending = false;
            if ($(this).closest('.trending-block-wrapper').attr('Class')) {
                trending = true;
                return true;
            }
            if (event.preventDefault) {
                event.preventDefault();
            } else {
                event.returnValue = false;
            }
            // Get tag slug from title attirbute
            var pageno = $(this).attr('data-page');
            var posttype = $(this).closest('.paginator-wrapper').attr('data-post-type');
            $('.masonry-container:visible').attr('data-page', pageno);
            if (posttype == 'videos')
                posttype = 'webinars';

            gaEventReferral('Blog', posttype + ' - ' + pageno);

            sendAjaxRequest(pageno, posttype, trending);
            return false;
        });
        $(".categories-filter-dropdown").on('click', '.dropdown-menu li a', function () {

            var catSlug = $(this).data('slug');
            $('.course-cat-level-breadcrum').removeClass('post-type-breadcrum');
            $('.post-type-breadcrum').removeClass('post-type-breadcrum');
            var cat_course_name = $(this).data('course-name');
            $('.course-cat-level-breadcrum').removeClass('hide');
            $('.course-cat-level-breadcrum-title').removeClass('hide');
            $('.course-cat-level-breadcrum-title').text(cat_course_name);
            var cat_course_slug = $(this).data('course-slug');
            var link = document.getElementById("course_cate_link");
            link.setAttribute("href", cat_course_slug);
            //alert(cat_course_slug);

            var catName = $(this).text();
            $('input#categoryinputbox').val(catSlug);
            var updateElem = $('.dropdown.categories-filter-dropdown .btn:first-child');
            updateElem.data('slug', catSlug);
            updateElem.html('<i class="icon-bars hidden-lg hidden-md"></i>' + catName + '<b class="caret hidden-sm hidden-xs"></b>');
            $('.cat-level-breadcrum-title').text(catName);
            $('.course-cat-level-breadcrum').removeClass('post-type-breadcrum');
            //            console.log(catSlug);
            if (catName == 'Select Category' || catSlug == '') {
                $('.cat-level-breadcrum').addClass('hide');
                $('.dropdown.categories-filter-dropdown ul li:first-child').hide();
//                $('.dropdown.categories-filter-dropdown ul li:nth-child(2)').hide();
            } else {
                gaEventReferral('Blog', 'Select Category - ' + catName);
                $('.cat-level-breadcrum').removeClass('hide');
                $('.dropdown.categories-filter-dropdown ul li:first-child').show();
//                $('.dropdown.categories-filter-dropdown ul li:nth-child(2)').show();
            }
            if (cat_course_slug== '#') {
                $('.course-cat-level-breadcrum').addClass('hide');
                $('.course-cat-level-breadcrum-title').addClass('hide');
                $('.cat-level-breadcrum-title').addClass('post-type-breadcrum');
                $('.cat-level-breadcrum').removeClass('hide');
                $('.cat-level-breadcrum-title').removeClass('hide');
                $('.cat-level-breadcrum-title').text("All Blogs");
            }
            $(".categories-filter-dropdown.open").removeClass('open');
            searchAjaxRequest(false);
            return false;
        });
        $(".edureka-blog-header").on('submit', 'form.main-search,form.form-element-mobile', function (e) {
            e.preventDefault();
            var maxChar = 110;
            var searchVar = $('input.searchinputbox[name=s]').val();
            var searchOldVar = $('input.searchinputbox[name=s]').attr('data-value');
            var trimmedText = (searchVar.length <= maxChar) ? searchVar : searchVar.substring(0, maxChar - 1) + "...";

            $('.tagfilterblog#main-search-filter-wrapper #search-tag-name').html(trimmedText);
            if (searchVar.length > 0) {
                $('.tagfilterblog#main-search-filter-wrapper,#filter-search').removeClass('hide');
            } else {
                $('.tagfilterblog#main-search-filter-wrapper,#filter-search').addClass('hide');
            }
            if ((searchVar == '' && searchOldVar == searchVar) || (searchOldVar == searchVar)) {
                return false;
            }
            if ($('body').hasClass('single')) {
                var hreflocation = '/blog/all/?s=' + searchVar;
                location.href = hreflocation;
                return false;
            }
            gaEventReferral('Blog', 'Search - word searched');
            searchAjaxRequest(true, true, true);
            $('#mobsearch').collapse('hide');
            $('input.searchinputbox[name=s]').attr('data-value', searchVar);
            return false;
        });
        $(".breadcrumb-section").on('click', '.reset-filters', function () {
            if ($('.tagfilterblog#main-tag-filter-wrapper').length == 0) {
                return true;
            }
            var catSlug = $('input#categoryinputbox').val('');
            var searchVar = $('input.searchinputbox[name=s]').val('');
            var authorVar = $('input#authorinputbox').val('');
            $('.cat-level-breadcrum-title').html('');
            $('.filter-element-block,.cat-level-breadcrum').addClass('hide');
            $('#main-tag-filter-wrapper.tagfilterblog .tag-blog-button-for-selected-tags').data('tag-slug', '');
            var updateElem = $(".dropdown.categories-filter-dropdown .btn:first-child");
            updateElem.data('slug', '').val(' Select Category <b class="caret hidden-sm hidden-xs"></b>')
                    .html(' Select Category <b class="caret hidden-sm hidden-xs"></b>');
            searchAjaxRequest();
            return false;
        });
        $(".blogmobfull.mobfullnew").on('click', '.tagcross.remove-filter', function () {
            if ($(this).hasClass('tag-filter-remove')) {
                $('#main-tag-filter-wrapper.tagfilterblog .tag-blog-button-for-selected-tags').data('tag-slug', '');
                $('#main-tag-filter-wrapper').addClass('hide');
            } else if ($(this).hasClass('author-filter-remove')) {
                $('input#authorinputbox').val('');
                $('#main-author-filter-wrapper').addClass('hide');
            }

            searchAjaxRequest();
            return false;
        });
        $('.orderby-elem').on('click', function (event) {
            if (event.preventDefault) {
                event.preventDefault();
            } else {
                event.returnValue = false;
            }
            if ($(this).hasClass('filcol')) {
                $(this).closest('.breadblogmob').find('.orderby-elem').addClass('filcol');
                $(this).closest('.breadblogmob').find('.orderby-elem').removeClass('orderby-selected');
                $(this).removeClass('filcol');
                $(this).addClass("orderby-selected");
                var pageno = 1;
                var posttype = $(this).closest('.breadblogmob').attr('data-post-type');
                var trending = false;
                var updatePushState = true;
                if ($(this).closest('.trending-block-wrapper').attr('Class')) {
                    trending = true;
                    updatePushState = false;
                }
                if (posttype == 'videos')
                    posttype = 'webinars';
                sendAjaxRequest(pageno, posttype, trending, updatePushState);
            }
            return false;
        });
        $("#main-search-filter-wrapper").on('click', '.closetag', function () {

            var searchVar = '';
            $('.tagfilterblog#main-search-filter-wrapper #search-tag-name').html(searchVar);
            $('.tagfilterblog#main-search-filter-wrapper').addClass('hide');
            var tagsVar = $('.tagfilterblog#main-tag-filter-wrapper').is(':visible') ?
                    $('#main-tag-filter-wrapper.tagfilterblog .tag-blog-button-for-selected-tags').data('tag-slug') : '';
            $('.tagfilterblog#main-search-filter-wrapper').addClass('hide');
            $('input.searchinputbox[name=s], input.search_inp.search_inp_mob').val(searchVar);
            $('.tagfilterblog#main-search-filter-wrapper #search-tag-name').html(searchVar);
            //            var updateElem = $(".dropdown.categories-filter-dropdown .btn:first-child");
            //            updateElem.data('slug', '')
            //                    .val('<i class="fa fa-bars"></i> Select Category')
            //                    .html('<i class="fa fa-bars"></i> Select Category');
            var pageno = 1;
            var data = {
                action: 'filter_posts', // function to execute
                afp_nonce: afp_vars.afp_nonce, // wp_nonce
                searchpost: 'searchpost',
                searchVar: searchVar,
                tagfilter: tagsVar,
                pageno: pageno
            };
            searchAjaxRequest(data);
            // remove utm paramters from posts title
            $(".thumbnailblog").find('article h2.pintabheadingblog a').each(function () {

                $(this).attr('href', $(this).attr('href').split('?')[0]);
            });
            return false;
        });
        $('.tagsshow,.tagshide').on('click', 'button.tagbtn', function () {
            var selectedPost = $(this);
            var searchVar = '';
            var tagsVar = $(this).data('tag-slug');
            var tagText = $(this).text();
            if ($(this).next('.timesblog').is(':visible')) {
                //              removetags code
                var data = {
                    action: 'filter_posts', // function to execute
                    afp_nonce: afp_vars.afp_nonce, // wp_nonce
                    tag: tagsVar,
                    tagname: tagText,
                    requesttype: 'remove'
                };
                $.ajax({
                    url: afp_vars.afp_ajax_url,
                    data: data,
                    type: 'POST',
                    success: function (response) {
                        selectedPost.closest('li').remove();
                    }
                });
                return false;
            }

            if ($('.tagfilterblog#main-tag-filter-wrapper').length == 0) {
                if (confirm('this will take you away from the page')) {
                    var hrefText = '/blog/tag/' + tagsVar;
                    window.location = hrefText;
                    return false;
                } else
                    return false;
            }

            $('.tagfilterblog#main-tag-filter-wrapper').removeClass('hide');
            $('#main-follow-button-for-tags').data('tag-slug', tagsVar);
            $('#main-follow-button-for-tags').data('tag-name', tagText);
            $('#main-follow-button-for-tags').addClass('followingbtn tagbtnactive').html('Following');
            $('#tag-name-placeholder').html(tagText);
            var updateElem = $(".dropdown.categories-filter-dropdown .btn:first-child");
            updateElem.data('slug', '').val('Select Category <b class="caret hidden-sm hidden-xs"></b>')
                    .html(' Select Category <b class="caret hidden-sm hidden-xs"></b>');
            var pageno = 1;
            var data = {
                action: 'filter_posts', // function to execute
                afp_nonce: afp_vars.afp_nonce, // wp_nonce
                searchpost: 'searchpost',
                searchVar: searchVar,
                tagfilter: tagsVar,
                pageno: pageno
            };
            searchAjaxRequest(data);
            return false;
        })

        $('.my-followed-tags-wrapper').on('click', '.timesblog', function () {
            $(this).prev('button.tagbtn').trigger('click');
            return false;
        });
        $('.blogmobfull,.blog-sidepanel').on('click', '.recommend-this-post', function () {
            var selectedPost = $(this);
            var likeDislike = 'add';
            if (selectedPost.children('i').hasClass('fa-thumbs-up')) {
                likeDislike = 'remove';
            }
            var data = {
                action: 'filter_posts', // function to execute
                afp_nonce: afp_vars.afp_nonce, // wp_nonce
                postid: $(this).data('postid'),
                requesttype: likeDislike,
                recommend: selectedPost.hasClass('active') ? 'remove' : 'recommend'
            };
            $.ajax({
                url: afp_vars.afp_ajax_url,
                data: data,
                type: 'POST',
                success: function (response) {
                    if (selectedPost.children('i').hasClass('fa-thumbs-o-up')) {
                        selectedPost.children('i').addClass('fa-thumbs-up').removeClass('fa-thumbs-o-up').next('.tooltiptext').text('Remove recommendation for post');
                    } else {
                        selectedPost.children('i').addClass('fa-thumbs-o-up').removeClass('fa-thumbs-up').next('.tooltiptext').text('Recommend to read this post');
                    }
                    //alert(response);
                }
            });
        });
        $('.blogmobfull,.blog-sidepanel').on('click', '.follow-this-tag', function () {
            var selectedPost = $(this);
            var selectedTag = $(this).data('tag-slug');
            var selectedTagName = $(this).data('tag-name');
            var likeDislike = 'add';
            if (selectedPost.hasClass('tagbtnactive')) {
                likeDislike = 'remove';
            }
            var data = {
                action: 'filter_posts', // function to execute
                afp_nonce: afp_vars.afp_nonce, // wp_nonce
                tag: selectedTag,
                tagname: selectedTagName,
                requesttype: likeDislike
            };
            $.ajax({
                url: afp_vars.afp_ajax_url,
                data: data,
                type: 'POST',
                success: function (response) {
                    if (selectedPost.hasClass('tagbtnactive')) {
                        selectedPost.removeClass('tagbtnactive');
                        selectedPost.next('span.tooltiptext').html('Follow');
                    } else {
                        selectedPost.addClass('tagbtnactive');
                        selectedPost.next('span.tooltiptext').html('Unfollow');
                    }
                    //alert(response);
                }
            });
        });
        $(".searchicobmobnav").click(function () {
            $(".mobileslideblognav").toggle();
        });
        addutmParamsToElements();
        do_ajax_countupdate();
        do_login_update();
        update_videohistory();
    });
})(jQuery);

/*END*/
/*Start/home/release/www/blog_180530_1650/wp-content/plugins/custom-widgets/js/fancyquote.js*/
/*scriptDATA:START*/
var postasmail = {"afp_nonce":"8c9fd918cb","afp_ajax_url":"https:\/\/www.edureka.co\/blog\/wp-admin\/admin-ajax.php"};
/*scriptDATA:END*//* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var number_format = function (price) {
    var figure = 3;
    if (price !== 'undefined' && price != null) {
        price = price.toString();
        if (price.length > figure) {
            price = price.slice(0, price.length - figure) + "," + price.slice(price.length - figure);
        }
    }
    return price;
}
function debounce(fn, duration) {
    var timer;
    return function (e) {
        clearTimeout(timer);
        timer = setTimeout(fn, duration);
    }
}
function initiateFbQuoteShare(elementText, url, hasTags) {
    FB.ui({
        method: 'share',
        href: (typeof url != 'undefined' ? url : 'https:/www.edureka.co/blog'),
        hashtag: (typeof hasTags !== 'undefined' ? hasTags : 'edureka'),
        quote: elementText,
        mobile_iframe: true
    }, function (response) {});
}
function validateEmailPost(formElement, currElem) {
    var textElem = formElement.find('input[name=name]');
    var textName = textElem.val();
    var emailElem = formElement.find('input[name=emails]');
    var emailVal = emailElem.val();
    var textNameString = textName.trim();
    if (typeof currElem == 'undefined' || (currElem.length > 0 && currElem.attr('name') == textElem.attr('name'))) {
        if (textNameString.length > 0 && /^[A-Za-z ]+$/.test(textNameString)) {
            textElem.parent().removeClass('error');
            textElem.next().hide( );
        } else {
            if (!(typeof currElem != 'undefined' && textNameString == '') && !(/^[A-Za-z ]+$/.test(textNameString))) {
                textElem.parent().addClass('error');
                textElem.next().show();
            }
        }
    }
    var inputString = emailVal.trim();
    if (typeof currElem == 'undefined' || (currElem.length > 0 && currElem.attr('name') == emailElem.attr('name'))) {
        if (inputString.length > 0) {

            var splitInput = inputString.split(',');
            var pattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;
            var match = true;
            for (i = 0; i < splitInput.length; i++) {
                if (!splitInput[i].match(pattern)) {
                    match = false;
                }
            }
            if (match == false) {
                emailElem.parent().addClass('error');
                emailElem.next().show();
            } else {
                emailElem.parent().removeClass('error');
                emailElem.next().hide();
            }
        } else {
            if (!(typeof currElem != 'undefined' && inputString.length == 0) && inputString.length == 0) {
                emailElem.parent().addClass('error');
                emailElem.next().show();
            }
        }
    }
    return match;
}
$(document).ready(function () {
    $('#emailpostpop').on('hidden.bs.modal', function () { // do something… 
        $('.Mailpost-thankyou').hide();
        $('.Mailpost').show();
        $('#emailpostpop').find('input.required[type="text"]').val('');
        $('#emailpostpop .input-name,#emailpostpop .input-email').removeClass('error');
        $('#emailpostpop .error-name,#emailpostpop .error-email').hide();
    });
    $('.email-me-the-post').off('keyup', 'input');
    $('.email-me-the-post').on('keyup', 'input', function () {
        validateEmailPost($(this).closest('form'), $(this));
    });
    $('.email-me-the-post input.input-name').on('keyup', debounce(function (e) {
        var nameElemt = $('.email-me-the-post input.input-name');
        validateEmailPost(nameElemt.closest('form'), nameElemt);
        return false;
    }, 800));
    $('.email-me-the-post input.input-name').on('keyup', debounce(function (e) {
        var emailElemt = $('.email-me-the-post input.input-email');
        validateEmailPost(emailElemt.closest('form'), emailElemt);
        return false;
    }, 800));
    $('.blogcontentsec').on('click', '.quoteshare-custom', function () {
        var elementClickedTarget = $(this).closest('.fancyshareicons');
        var shareUrl = elementClickedTarget.attr('data-url');
        var shareText = elementClickedTarget.attr('data-text');
        var shareHashTag = elementClickedTarget.attr('data-hashtags');
        if (shareUrl.length > 1 && shareText.length > 0) {
            if ($(this).hasClass('facebook')) {
                initiateFbQuoteShare(shareText, shareUrl, shareHashTag);
            } else if ($(this).hasClass('linkedin')) {
                shareContent(shareText, shareUrl);
            }
        }
        return false;
    });

    $('.email-me-the-post').on('submit', function (e) {
        e.preventDefault();
        var valid = validateEmailPost($(this));
        if (valid) {
            var email = $("#Email_i").val();
            var first_name = $("#first_name_i").val();
            var dataPost = {
                action: 'email_post', // function to execute
                afp_nonce: postasmail.afp_nonce, // wp_nonce
            };
            var unindexed_array = $(this).serializeArray();
            $.map(unindexed_array, function (n, i) {
                dataPost[n['name']] = n['value'];
            });

            $.ajax({
                type: "POST",
                url: postasmail.afp_ajax_url,
                data: dataPost,
                error: function (e) {
                    alert("error");
                    return false;
                },
                success: function (resonse) {

                    $('.Mailpost').hide();
                    $('.Mailpost-thankyou').show();
                    setTimeout(function () {
                        $('#emailpostpop').modal('hide')
                    }, 5000);
                }
            });
        }
    });

    if ($('.widget_edu-about-course,.widget_edu-course-feature,.widget_edu-upcoming-batches').length > 0) {
        if ($('.widget_edu-related-blogs,.widget_edu-course-feature,.widget_edu-upcoming-batches').find('.async-content').length >= 1) {
            var CourseGroup = $('.course-content-wrapper').first().attr('data-course-id');
            if (typeof CourseGroup != 'undefined') {

                $.ajax({
                    type: "POST",
                    url: '/wp/courses/courses_details/' + CourseGroup,
                    error: function (e) {
                        return false;
                    },
                    success: function (response) {

                        if (response.status == 200) {
                            var details = response.data.details;
                            var postslug = $('.maincontainer.detailpagesidebar').attr('data-post_name');
                            var courseLink = '';
                            if (typeof details == 'object' && typeof details.image_path != 'undefined') {
                                courseLink = details.course_url;
                                if (enableBlogUtm)
                                    courseLink += '?utm_source=blog&utm_medium=courses&utm_campaign=' + postslug;
                                $('.small-info.async-content').html(details.description_text);
                                $('.clp-info-detail.async-content').html('<img src="' + details.image_path + '"><span class="blog-clp-title">' + details.display_title + '</span>' +
                                        '<div class="info-clp"> ' + details.description_text + '</div><div class="clp-target-view">' +
                                        '<a href="' + courseLink + '" target="_blank"><button>VIEW DETAILS</button></a>' +
                                        '<small>Click to see more details</small></div>');

                                $('.widget_edu-course-feature a.view-detail-course.async-content').attr('href', courseLink);
                                $('.widget_edu-about-course').show();

                            }
                            var features = response.data.features;
                            if (typeof features == 'object') {
                                var featureBlock = '', featureList = '';
                                $(features).each(function (index, feature) {
                                    if (index < 4) {
                                        featureBlock += '<div class="col-lg-6 col-md-6 col-xs-6 col-sm-6 Features "><div class="Features' + (index + 1) + '" >' +
                                                '<div class="title">' + feature.section_title + '</div>' +
                                                '<div class="flot-panel-ico"><i class="fa  ' + feature.icon + '"  aria-hidden="true"></i></div>' +
                                                '</div></div>';
                                    } else {
                                        featureList += '<li><span class="flot-panel-ico"><i class="fa  ' + feature.icon + '"  aria-hidden="true"></i></span>'
                                                + ' <span class="title">' + feature.section_title + '</span></li>';
                                    }
                                });
                                if (featureList != '')
                                    $('.widget_edu-course-feature .feature-list.async-content ul').html(featureList);
                                if (featureBlock != '') {
                                    $('.widget_edu-course-feature .feature-block.async-content').html(featureBlock);
                                    $('.widget_edu-course-feature').show();
                                }

                            }
                            var batches = response.data.batches;
                            var exisitingCustomer = response.data.existingCustomer;

                            if (!exisitingCustomer && typeof batches == 'object' && batches.length > 0) {
                                var batchEarlyBirdList = '', batchList = '';
                                if (typeof details == 'object' && typeof details.image_path != 'undefined') {
                                    courseLink = details.course_url;
                                    if (enableBlogUtm)
                                        courseLink += '?utm_source=blog&utm_medium=courses&utm_campaign=' + postslug;
                                }


                                $(batches).each(function (index, batch) {
                                    var batchBlock = '<div class="col-lg-12 col-md-12 col-xs-12 col-sm-12 Upcomingbat-list">' +
                                            '<div class="col-lg-3 col-md-3 col-xs-3 col-sm-3 no-padding list-date"><article>' +
                                            '<span class="date">' + batch.startDay + '</span><span class="day">' + batch.startMonth + '</span></article>' +
                                            '</div><div class="col-lg-9 col-md-9 col-xs-9 col-sm-9 no-padding list-detail">';
                                    if (batch.is_selfpaced != true) {
                                        batchBlock += '<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 no-padding week-weekend">' + batch.days +
                                                ' <span class="days-change-wrapper"> ( ' + (batch.days_diff == '1' ? 'Weekend' : 'Week Days') + ' Batch )</span></div>'
                                    }
                                    var befDis = parseInt(batch.beforediscount);
                                    var aftDis = parseInt(batch.afterdiscount);
                                    if (aftDis == 0) {
                                        aftDis = aftDis + befDis;
                                        befDis = 0;
                                    }

                                    batchBlock += '<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 no-padding off-price">';
                                    var offerPrice = batch.offerPrice;
                                    if (($.trim($(offerPrice).text())).length > 0)
                                        batchBlock += '<span class="offer-price">' + number_format(batch.offerPrice) + '</i></span>';
                                    batchBlock += (befDis > 0 ? '<span class="beforediscount"><i class="fa fa-' + batch.currency + '"></i> ' + number_format(befDis) + '</span>' : '');
                                    batchBlock += '<span class="afterdiscount"><i class="fa fa-' + batch.currency + '"></i> ' + number_format(aftDis) + '</span></div></div></div>';
                                    if (batch.group == 2) {
                                        batchEarlyBirdList += batchBlock;
                                    } else {
                                        batchList += batchBlock;
                                    }
                                    batchBlock = '';
                                });
                                if (typeof details == "undefined" || (typeof details != "undefined" && !details.is_selfpaced)) {
                                    if (batchEarlyBirdList != '') {
                                        $('.widget_edu-upcoming-batches .upcoming-earlybird-list.async-content').removeClass('hide').html(batchEarlyBirdList);
                                        $('.widget_edu-course-batch').show();
                                    }
                                    if (batchList != '') {
                                        $('.widget_edu-upcoming-batches .upcoming-batch-list.async-content').removeClass('hide').html(batchList);
                                        $('.widget_edu-course-batch').show();
                                    }

                                } else {
                                    $('.widget_edu-upcoming-batches .upcoming-batch-list.async-content').addClass('hide');
                                    $('.widget_edu-upcoming-batches').addClass('hide');
                                }
                                $('.upcomingbatch-enroll-link').attr('href', courseLink);
                            } else if (exisitingCustomer) {
                                $('.upcomingbatch-enroll-link').attr('href', response.data.enrollButton);
                                $('.upcomingbatch-enroll-link').html('<button>Start Learning</button>');
                            }
                        }

                    }
                });
            }
        }
    }

    if ($(".master-cta-modal").length >= 0) {
        var popInitiated = false;
        $(".master-cta-modal").each(function (s, value) {
            if (popInitiated === false && $(this).attr('id') != '') {
                var ctrPopId = $(this).attr('id');
//                alert(ctrPopId);
                popInitiated = true;
                setTimeout(function () {
                    $('#' + ctrPopId).modal('show');
                }, 30000);
            }
        });
    }


});/*END*/
/*Start/home/release/www/blog_180530_1650/wp-content/plugins/custom-widgets/js/video-library.js*/
/*scriptDATA:START*/
var videolib = {"afp_nonce":"8c9fd918cb","afp_ajax_url":"https:\/\/www.edureka.co\/blog\/wp-admin\/admin-ajax.php"};
/*scriptDATA:END*//* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function getVideoLibraryContent(page) {
    var videoCatElement = $('ul.video-library-tabs li.active a');
    var videoCatTarget = videoCatElement.attr('href');
    var videoCatTargetElement = $(videoCatElement);
    var videoCatSlug = videoCatElement.attr('data-slug');
    var videoSearchText = $('#srch-term').val();
    var totalPages = videoCatElement.attr('data-total-pages');
    var currentPage = videoCatElement.attr('data-current-page');
    $('.video-lib-nav.video-next,.video-lib-nav.video-prev').addClass('disabled');

    videoCatElement.attr('data-search', videoSearchText);
    videoCatElement.attr('data-page', (typeof page == 'undefined' ? 1 : page));

    if ((videoSearchText.trim()).length > 0) {

        $('form.video-library-search-form .search-tag-show').removeClass('hide');
        $('form.video-library-search-form .search-tag-show .searchtext-dinam').text(videoSearchText);
        $('form.video-library-search-form .input-group').addClass('hide');
        $('ul.video-library-tabs li.video-cat-tab').addClass('hide');
    } else {
        $('form.video-library-search-form .search-tag-show').addClass('hide');
        $('form.video-library-search-form .search-tag-show .searchtext-dinam').text('');
        $('form.video-library-search-form .input-group').removeClass('hide');
        $('ul.video-library-tabs li.video-cat-tab').removeClass('hide');
    }

    var dataPost = {
        action: 'filter_videos', // function to execute
        afp_nonce: videolib.afp_nonce, // wp_nonce
        searchVar: videoSearchText,
        category: videoCatSlug,
        paged: (typeof page == 'undefined' ? 1 : page)
    };
    $.ajax({
        url: videolib.afp_ajax_url,
        data: dataPost,
        type: 'POST',
        success: function (response) {
            if (response.status == 200) {
                var videoContent = '';
                if (typeof response.articles == 'string') {
                    videoContent = response.articles;
                } else {
                    $.each(response.articles, function (key, article) {
                        videoContent += article;
                    });
                }
                if (videoContent.length > 0) {
                    $(videoCatTarget).html('<section class="col-md-12 col-lg-12 col-sm-12 col-xs-12 no-padding">' + videoContent + '</section>')
                }
                if (typeof response.paginator == 'object') {
                    var currentPage = response.paginator.currrent_page;
                    var totalPages = response.paginator.total_pages;
                    $('.videocollections .current-video-page').text(currentPage);
                    $('.videocollections .total-video-pages').text(totalPages);
                    $('.video-library-tabs li.active a').attr('data-current-page', currentPage);
                    $('.video-library-tabs li.active a').attr('data-total-pages', totalPages);

                    if (currentPage < totalPages) {
                        $('.video-lib-nav.video-next').removeClass('disabled');
                    }
                    if (currentPage > 1) {
                        $('.video-lib-nav.video-prev').removeClass('disabled');
                    }
                    $('.videocollections .pagenumber-wrappper').show();
                } else {
                    $('.videocollections .pagenumber-wrappper').hide();
                }
            }
        }
    });
}


$(document).ready(function () {
    $('.video-library-search-form').on('click', '.clear-text-art', function () {

        $('#srch-term').val('');
        getVideoLibraryContent();

    });

    if ($('ul.video-library-tabs').length > 0) {
        getVideoLibraryContent();
    }
    $('ul.video-library-tabs').on('shown.bs.tab', 'a[data-toggle="tab"]', function (e) {
//show selected tab / active
        var tabElement = $(e.target);
//        console.log(tabElement);
        var targetContent = tabElement.attr('href');
        var page = tabElement.attr('data-page');
        var searchVar = tabElement.attr('data-search');
        var currentPage = $('.video-library-tabs li.active a').attr('data-current-page');
        var totalPages = $('.video-library-tabs li.active a').attr('data-total-pages');
        $('.videocollections .current-video-page').text(currentPage);
        $('.videocollections .total-video-pages').text(totalPages);
        $('.video-lib-nav.video-next,.video-lib-nav.video-prev').addClass('disabled');

        if ($(targetContent).text() == '' || searchVar != $('#srch-term').val())
            getVideoLibraryContent();
        else {
            if (currentPage < totalPages) {
                $('.video-lib-nav.video-next').removeClass('disabled');
            }
            if (currentPage > 1) {
                $('.video-lib-nav.video-prev').removeClass('disabled');
            }
            if (totalPages >= 1)
                $('.videocollections .pagenumber-wrappper').show();
            else
                $('.videocollections .pagenumber-wrappper').hide();

        }

    });
    $('.collection-videos').on('click', '.video-cat-tab-resp a', function (e) {
        e.preventDefault();

//show selected tab / active
        var clickedElement = $(this);
//        console.log(tabElement);
        var targetSlug = clickedElement.attr('data-slug');
        $('.video-library-tabs .video-cat-tab a[data-slug=' + targetSlug + ']').tab('show');
        return false;

    });
    $('.videocollections').on('click', '.video-lib-nav', function (e) {
//show selected tab / active
        e.preventDefault();
        if ($(this).hasClass('disabled')) {
            return false;
        }

        var videoCatElement = $('ul.video-library-tabs li.active a');
        var totalPages = videoCatElement.attr('data-total-pages');
        var currentPage = videoCatElement.attr('data-current-page');
        if ($(this).hasClass('video-next')) {
            currentPage++;
            if (currentPage <= totalPages) {
                videoCatElement.attr('data-current-page', currentPage);
                getVideoLibraryContent(currentPage);
            }
        } else if ($(this).hasClass('video-prev')) {
            currentPage--;
            if (currentPage >= 1) {
                videoCatElement.attr('data-current-page', currentPage);
                getVideoLibraryContent(currentPage);
            }
        }
        return false;
    });
    $('.videocollections').on('submit', 'form.navbar-form', function (e) {
        e.preventDefault();

        getVideoLibraryContent();
        return false;
    });

});

/*END*/
/*Start/home/release/www/blog_180530_1650/wp-content/plugins/disqus-comment-system/public/js/comment_count.js*/
/*scriptDATA:START*/
var countVars = {"disqusShortname":"edurekablog"};
/*scriptDATA:END*/var disqus_shortname = countVars.disqusShortname;
(function () {
    var nodes = document.getElementsByTagName('span');
    for (var i = 0, url; i < nodes.length; i++) {
        if (nodes[i].className.indexOf('dsq-postid') != -1 && nodes[i].parentNode.tagName == 'A') {
            nodes[i].parentNode.setAttribute('data-disqus-identifier', nodes[i].getAttribute('data-dsqidentifier'));
            url = nodes[i].parentNode.href.split('#', 1);
            if (url.length == 1) { url = url[0]; }
            else { url = url[1]; }
            nodes[i].parentNode.href = url + '#disqus_thread';
        }
    }
    var s = document.createElement('script');
    s.async = true;
    s.type = 'text/javascript';
    s.src = 'https://' + disqus_shortname + '.disqus.com/count.js';
    (document.getElementsByTagName('HEAD')[0] || document.getElementsByTagName('BODY')[0]).appendChild(s);
}());
/*END*/
/*Start/home/release/www/blog_180530_1650/wp-content/plugins/disqus-comment-system/public/js/comment_embed.js*/
/*scriptDATA:START*/
var embedVars = {"disqusConfig":{"integration":"wordpress 3.0.15"},"disqusIdentifier":"50207 https:\/\/www.edureka.co\/blog\/?post_type=interview-questions&p=50207","disqusShortname":"edurekablog","disqusTitle":"Top 50 Power BI Interview Questions You Must Prepare In 2018","disqusUrl":"https:\/\/www.edureka.co\/blog\/interview-questions\/power-bi-interview-questions\/","postId":"50207"};
/*scriptDATA:END*/var disqus_url = embedVars.disqusUrl;
var disqus_identifier = embedVars.disqusIdentifier;
var disqus_container_id = 'disqus_thread';
var disqus_shortname = embedVars.disqusShortname;
var disqus_title = embedVars.disqusTitle;
var disqus_config_custom = window.disqus_config;
var disqus_config = function () {
    /*
    All currently supported events:
    onReady: fires when everything is ready,
    onNewComment: fires when a new comment is posted,
    onIdentify: fires when user is authenticated
    */
    var dsqConfig = embedVars.disqusConfig;
    this.page.integration = dsqConfig.integration;
    this.page.remote_auth_s3 = dsqConfig.remote_auth_s3;
    this.page.api_key = dsqConfig.api_key;
    this.sso = dsqConfig.sso;
    this.language = dsqConfig.language;

    if (disqus_config_custom)
        disqus_config_custom.call(this);
};

(function() {
    var dsq = document.createElement('script');
    dsq.type = 'text/javascript';
    dsq.async = true;
    dsq.src = 'https://' + disqus_shortname + '.disqus.com/embed.js';
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
})();
/*END*/
/*Start/home/release/www/blog_180530_1650/wp-content/plugins/featured-video-plus/js/frontend.min.js*/
/*START loading dependency: /blog/wp-content/plugins/featured-video-plus/js/jquery.fitvids.min.js */
!function(t){"use strict";t.fn.fitVids=function(e){var i={customSelector:null,ignore:null};if(!document.getElementById("fit-vids-style")){var r=document.head||document.getElementsByTagName("head")[0],a=".fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}",d=document.createElement("div");d.innerHTML='<p>x</p><style id="fit-vids-style">'+a+"</style>",r.appendChild(d.childNodes[1])}return e&&t.extend(i,e),this.each(function(){var e=['iframe[src*="player.vimeo.com"]','iframe[src*="youtube.com"]','iframe[src*="youtube-nocookie.com"]','iframe[src*="kickstarter.com"][src*="video.html"]',"object","embed"];i.customSelector&&e.push(i.customSelector);var r=".fitvidsignore";i.ignore&&(r=r+", "+i.ignore);var a=t(this).find(e.join(","));a=a.not("object object"),a=a.not(r),a.each(function(e){var i=t(this);if(!(i.parents(r).length>0||"embed"===this.tagName.toLowerCase()&&i.parent("object").length||i.parent(".fluid-width-video-wrapper").length)){i.css("height")||i.css("width")||!isNaN(i.attr("height"))&&!isNaN(i.attr("width"))||(i.attr("height",9),i.attr("width",16));var a="object"===this.tagName.toLowerCase()||i.attr("height")&&!isNaN(parseInt(i.attr("height"),10))?parseInt(i.attr("height"),10):i.height(),d=isNaN(parseInt(i.attr("width"),10))?i.width():parseInt(i.attr("width"),10),o=a/d;if(!i.attr("id")){var h="fitvid"+e;i.attr("id",h)}i.wrap('<div class="fluid-width-video-wrapper"></div>').parent(".fluid-width-video-wrapper").css("padding-top",100*o+"%"),i.removeAttr("height").removeAttr("width")}})})}}(window.jQuery||window.Zepto);/*END dependency: jquery.fitvids */
/*scriptDATA:START*/
var fvpdata = {"ajaxurl":"https:\/\/www.edureka.co\/blog\/wp-admin\/admin-ajax.php","nonce":"b5d46c2daa","fitvids":"1","dynamic":"","overlay":"","opacity":"0.75","color":"b","width":"640"};
/*scriptDATA:END*/var initFeaturedVideoPlus;!function(t){"use strict";function a(){t(".has-post-video a>.featured-video-plus,.has-post-video a>.fvp-dynamic,.has-post-video a>.fvp-overlay,.has-post-video a>.wp-video,.has-post-video a>.wp-video-shortcode").unwrap(),t(".has-post-video .post-thumbnail>.post-thumbnail").removeClass("post-thumbnail"),t("a.post-thumbnail:empty").not(".fvp-dynamic, .fvp-overlay").remove()}function e(){fvpdata.fitvids&&t(".featured-video-plus.fvp-responsive").fitVids({customSelector:["iframe","object","embed"]})}function o(){if(fvpdata.width&&!fvpdata.fitvids){t(".fvp-local .wp-video").css({width:fvpdata.width,height:"auto"});var a=t(".fvp-local .wp-video .wp-video-shortcode");a.attr({width:fvpdata.width,height:fvpdata.width/a.attr("width")*a.attr("heigth")})}}function i(a){var e=t(a),o=e.children(".fvp-actionicon");return o.css({height:e.height(),width:e.width(),margin:e.css("margin")}),o}function d(a){var e=t(a.currentTarget).children("img"),o=i(a.currentTarget);o.toggleClass("play"),o.hasClass("play")?e.animate({opacity:fvpdata.opacity}):e.animate({opacity:1})}function n(o){o.preventDefault();var d=t(o.currentTarget),n=parseInt(d.attr("data-id"),10),r=i(o.currentTarget);r.addClass("load "+fvpdata.color),t.post(fvpdata.ajaxurl,{action:"fvp_get_embed",fvp_nonce:fvpdata.nonce,id:n},function(t){if(t.success){var o=d.parent();d.replaceWith(t.data),o.find(".wp-audio-shortcode, .wp-video-shortcode").mediaelementplayer(),e(),a()}r.removeClass("load "+fvpdata.color)})}function r(a){a.preventDefault();var e=t(a.currentTarget),i=parseInt(e.attr("data-id"),10);e.openDOMWindow({eventType:null,windowPadding:0,borderSize:0,windowBGColor:"transparent",overlayOpacity:100*fvpdata.opacity,width:"100%",height:"100%"}),s[i]?(t("#DOMWindow").html(s[i]),o(),t(window).trigger("scroll")):t.post(fvpdata.ajaxurl,{action:"fvp_get_embed",fvp_nonce:fvpdata.nonce,id:i},function(a){a.success&&(s[i]=a.data,t("#DOMWindow").html(a.data),o(),t(window).trigger("scroll"))})}function c(){var i=t(".featured-video-plus, .fvp-overlay, .fvp-dynamic");return!i.is(p)&&(p=i,a(),setTimeout(a,1e3),e(),o(),t(".fvp-overlay, .fvp-dynamic").off("mouseenter").on("mouseenter",d).off("mouseleave").on("mouseleave",d),t(".fvp-dynamic").off("click").on("click",n),void t(".fvp-overlay").off("click").on("click",r))}var p,s={},v=0;initFeaturedVideoPlus=function(){0===v?(c(),v=setTimeout(function(){},100)):(clearTimeout(v),v=setTimeout(c,100))},t(document).ready(function(){window.chrome&&t(".featured-video-plus iframe").each(function(){this.src=this.src}),[fvpdata.playicon,fvpdata.loadicon].forEach(function(a){t("body").append(t("<img/>",{src:a,alt:"preload image"}).hide())})})}(jQuery);/*END*/
/*Start/home/release/www/blog_180530_1650/wp-content/plugins/maxbuttons-pro/MaxButtons/js/min/front.js*/
/*scriptDATA:START*/
var mb_ajax = {"ajaxurl":"https:\/\/www.edureka.co\/blog\/wp-admin\/admin-ajax.php"};
/*scriptDATA:END*/jQuery(document).ready(function(o){function t(t){t.preventDefault();var a=o(this).data("popup"),c=o(this).find("a").attr("href"),n=a.width,e=a.height,i="toolbar=0,scrollbars=1, location=0, width="+n+",height="+e+",left="+(o(window).width()-n)/2+",top="+(o(window).height()-e)/2;window.open(c,"mb-social-share-window",i).focus(),mbSocialTrack()}function a(t,a){var n=mb_ajax.ajaxurl,e=a.share_url,i=a.network,l=a.collection_id,a=(a.nonce,{block_name:"social",block_action:"ajax_get_count",action:"mbpro_collection_block_front",collection_id:l,collection_type:"social",block_data:{share_url:e,network:i}});o.ajax({type:"POST",url:n,data:a,success:function(o){c(o,t)}})}function c(t,a){var c=o.parseJSON(t),n=o(a).data("onload"),e=parseInt(n.count_threshold),i=parseInt(c.data.count);if(i>=e){var l=n.text,r=n.text2;l=(l=l.replace("{count}",i)).replace("{c}",i),r=(r=r.replace("{count}",i)).replace("{c}",i),o(a).find(".mb-text").html(l),o(a).find(".mb-text2").html(r)}}mbSocialTrack=function(o){},function(){if("function"!=typeof o)return void console.log("Maxbuttons : Jquery load conflict.");o(".maxcollection .mb-collection-item[data-popup]").on("click",t),o(".maxcollection .mb-collection-item[data-onload]").each(function(){var t=o(this).parents(".maxcollection").data("collection"),c=o(this).data("onload");c.collection_id=t,a(this,c)})}()});/*END*/
/*Start/home/release/www/blog_180530_1650/wp-content/plugins/maxbuttons-pro/js/min/maxbuttons_fonts.js*/
function fontEvent(e){doFontCheck(e.data.jq)}function doFontCheck(e){e(".mb-text, .mb-text2").each(function(){var o=e(this).css("fontFamily");e(this).css("fontWeight");if(void 0!==o){for(o=o.replace(/\'|\"|/g,""),font_found=!1,i=0;i<fonts_loaded.length;i++)if(fonts_loaded[i]==o)return void(font_found=!0);font_found||(fonts_loaded.push(o),mbpro_loadFontFamilyStylesheet(o))}})}function mbpro_loadFontFamilyStylesheet(e){if(!(e.indexOf(",",e)>=0)){var o=mbpro_getFontFamilyUrl(e);""!=o&&jQuery("head").append("<link rel='stylesheet' type='text/css' href='"+o+"' />")}}function mbpro_getFontFamilyUrl(e){if(["","Arial","Courier New","Georgia","Tahoma","Times New Roman","Trebuchet MS","Verdana"].indexOf(e)>=0)return"";return"//fonts.googleapis.com/css?family="+e.replace(/\s/g,"+")}jQuery(document).ready(function(e){doFontCheck(e)});/*END*/
/*Start/home/release/www/blog_180530_1650/wp-content/plugins/maxbuttons-pro/js/min/maxbuttons-pro-front.js*/
jQuery(document).ready(function(t){function n(n){n.preventDefault();var e=this.href,a=(t(this),t(this).data("mbga")),o=a.cat,c=a.action,i=a.label,r=a.value,u=a.noninteraction,f=t(this).prop("target");"function"==typeof ga?"object"==typeof dataLayer?dataLayer.push({event:"event",eventCategory:o,eventAction:c,eventLabel:i}):ga(function(t){t.send("event",o,c,i,r,{nonInteraction:u})}):"function"==typeof __gaTracker?__gaTracker("send","event",o,c,i,r,{nonInteraction:u}):"object"==typeof _gaq&&_gaq.push(["_trackEvent",o,c,i,r,u]),e&&(void 0!==f&&""!=f?window.open(e,f):window.location=e)}!function(){t(".maxbutton[data-mbga]").on("click",n)}()});/*END*/
