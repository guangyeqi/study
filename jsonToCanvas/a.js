!function (t, e) { "object" == typeof exports && "object" == typeof module ? module.exports = e(require("cax")) : "function" == typeof define && define.amd ? define(["cax"], e) : "object" == typeof exports ? exports.json2canvas = e(require("cax")) : t.json2canvas = e(t.cax) }(window, function (t) { return function (t) { var e = {}; function n(i) { if (e[i]) return e[i].exports; var r = e[i] = { i: i, l: !1, exports: {} }; return t[i].call(r.exports, r, r.exports, n), r.l = !0, r.exports } return n.m = t, n.c = e, n.d = function (t, e, i) { n.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: i }) }, n.r = function (t) { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t, "__esModule", { value: !0 }) }, n.t = function (t, e) { if (1 & e && (t = n(t)), 8 & e) return t; if (4 & e && "object" == typeof t && t && t.__esModule) return t; var i = Object.create(null); if (n.r(i), Object.defineProperty(i, "default", { enumerable: !0, value: t }), 2 & e && "string" != typeof t) for (var r in t) n.d(i, r, function (e) { return t[e] }.bind(null, r)); return i }, n.n = function (t) { var e = t && t.__esModule ? function () { return t.default } : function () { return t }; return n.d(e, "a", e), e }, n.o = function (t, e) { return Object.prototype.hasOwnProperty.call(t, e) }, n.p = "", n(n.s = 4) }([function (e, n) { e.exports = t }, function (t, e, n) { var i, r; i = n(2), r = n(3), t.exports = function () { "use strict"; var t; function e(t) { return function () { return t } } function n(t) { t = t || {}, this.config = t, this.config.childrenPropertyName = t.childrenPropertyName || "children", this.config.modelComparatorFn = t.modelComparatorFn } function o(t, e) { return e.parent = t, t.children.push(e), e } function l(t, e) { this.config = t, this.model = e, this.children = [] } function a(t) { return "function" == typeof t.config.modelComparatorFn } function s(t, e, n) { var i; if (!(e instanceof l)) throw new TypeError("Child must be of type Node."); if (e.parent = t, t.model[t.config.childrenPropertyName] instanceof Array || (t.model[t.config.childrenPropertyName] = []), a(t)) i = r(t.config.modelComparatorFn, t.model[t.config.childrenPropertyName], e.model), t.model[t.config.childrenPropertyName].splice(i, 0, e.model), t.children.splice(i, 0, e); else if (void 0 === n) t.model[t.config.childrenPropertyName].push(e.model), t.children.push(e); else { if (n < 0 || n > t.children.length) throw new Error("Invalid index."); t.model[t.config.childrenPropertyName].splice(n, 0, e.model), t.children.splice(n, 0, e) } return e } function c() { var e = {}; if (1 === arguments.length ? "function" == typeof arguments[0] ? e.fn = arguments[0] : e.options = arguments[0] : 2 === arguments.length ? "function" == typeof arguments[0] ? (e.fn = arguments[0], e.ctx = arguments[1]) : (e.options = arguments[0], e.fn = arguments[1]) : (e.options = arguments[0], e.fn = arguments[1], e.ctx = arguments[2]), e.options = e.options || {}, e.options.strategy || (e.options.strategy = "pre"), !t[e.options.strategy]) throw new Error("Unknown tree walk strategy. Valid strategies are 'pre' [default], 'post' and 'breadth'."); return e } return t = {}, n.prototype.parse = function (t) { var e, n, r; if (!(t instanceof Object)) throw new TypeError("Model must be of type object."); if (r = new l(this.config, t), t[this.config.childrenPropertyName] instanceof Array) for (this.config.modelComparatorFn && (t[this.config.childrenPropertyName] = i(this.config.modelComparatorFn, t[this.config.childrenPropertyName])), e = 0, n = t[this.config.childrenPropertyName].length; e < n; e++)o(r, this.parse(t[this.config.childrenPropertyName][e])); return r }, l.prototype.isRoot = function () { return void 0 === this.parent }, l.prototype.hasChildren = function () { return this.children.length > 0 }, l.prototype.addChild = function (t) { return s(this, t) }, l.prototype.addChildAtIndex = function (t, e) { if (a(this)) throw new Error("Cannot add child at index when using a comparator function."); return s(this, t, e) }, l.prototype.setIndex = function (t) { if (a(this)) throw new Error("Cannot set node index when using a comparator function."); if (this.isRoot()) { if (0 === t) return this; throw new Error("Invalid index.") } if (t < 0 || t >= this.parent.children.length) throw new Error("Invalid index."); var e = this.parent.children.indexOf(this); return this.parent.children.splice(t, 0, this.parent.children.splice(e, 1)[0]), this.parent.model[this.parent.config.childrenPropertyName].splice(t, 0, this.parent.model[this.parent.config.childrenPropertyName].splice(e, 1)[0]), this }, l.prototype.getPath = function () { var t = []; return function e(n) { t.unshift(n), n.isRoot() || e(n.parent) }(this), t }, l.prototype.getIndex = function () { return this.isRoot() ? 0 : this.parent.children.indexOf(this) }, l.prototype.walk = function () { var e; e = c.apply(this, arguments), t[e.options.strategy].call(this, e.fn, e.ctx) }, t.pre = function t(e, n) { var i, r, o; for (o = e.call(n, this), i = 0, r = this.children.length; i < r; i++) { if (!1 === o) return !1; o = t.call(this.children[i], e, n) } return o }, t.post = function t(e, n) { var i, r; for (i = 0, r = this.children.length; i < r; i++)if (!1 === t.call(this.children[i], e, n)) return !1; return e.call(n, this) }, t.breadth = function (t, e) { var n = [this]; !function i() { var r, o, l; if (0 !== n.length) { for (r = 0, o = (l = n.shift()).children.length; r < o; r++)n.push(l.children[r]); !1 !== t.call(e, l) && i() } }() }, l.prototype.all = function () { var n, i = []; return (n = c.apply(this, arguments)).fn = n.fn || e(!0), t[n.options.strategy].call(this, function (t) { n.fn.call(n.ctx, t) && i.push(t) }, n.ctx), i }, l.prototype.first = function () { var n, i; return (n = c.apply(this, arguments)).fn = n.fn || e(!0), t[n.options.strategy].call(this, function (t) { if (n.fn.call(n.ctx, t)) return i = t, !1 }, n.ctx), i }, l.prototype.drop = function () { var t; return this.isRoot() || (t = this.parent.children.indexOf(this), this.parent.children.splice(t, 1), this.parent.model[this.config.childrenPropertyName].splice(t, 1), this.parent = void 0, delete this.parent), this }, n }() }, function (t, e) { t.exports = function () { "use strict"; return function t(e, n) { var i, r, o = n.length; return o >= 2 ? (i = n.slice(0, o / 2), r = n.slice(o / 2, o), function (t, e, n) { for (var i = [], r = e.length, o = n.length; r > 0 && o > 0;)t(e[0], n[0]) <= 0 ? (i.push(e.shift()), r--) : (i.push(n.shift()), o--); return r > 0 ? i.push.apply(i, e) : i.push.apply(i, n), i }(e, t(e, i), t(e, r))) : n.slice() } }() }, function (t, e) { t.exports = function () { "use strict"; return function (t, e, n) { var i, r; for (i = 0, r = e.length; i < r && !(t(e[i], n) > 0); i++); return i } }() }, function (t, e, n) { "use strict"; n.r(e); var i = n(0), r = n.n(i); function o({ option: t }) { let e = null; if (t.linearGradient && t.colors) { e = function () { if (a) return wx.createCanvasContext("measure0"); if ("undefined" != typeof document) return document.createElement("canvas").getContext("2d"); return null }().createLinearGradient(...t.linearGradient); for (let n = 0; n < t.colors.length; n++)e.addColorStop(...t.colors[n]) } return e } function l(t) { return JSON.parse(JSON.stringify(t)) } const a = "undefined" != typeof wx && !wx.createCanvas && wx.createCanvasContext, s = ("undefined" != typeof wx && wx.createCanvas, { rect: "rect", circle: "circle", image: "image", text: "text", group: "group" }); let c; a ? c = wx.createCanvasContext("measure0") : "undefined" != typeof document && (c = document.createElement("canvas").getContext("2d")); var h = class extends i.Graphics { constructor(t) { super(), t = Object.assign({ font: "10px sans-serif", color: "black", textAlign: "left", baseline: "top", orientation: "horizontal" }, t), this.option = t || {}, this.text = t.text } getWidth(t) { return c || util.isWegame && (c = wx.createCanvas().getContext("2d")), this.option.font && (c.font = this.option.font), c.measureText(t || this.text).width } getHeight() { return this.renderBreakLine({ isMeasure: !0 }) } render(t) { t.fillStyle = o({ option: this.option }) || this.option.color, t.font = this.option.font, t.textAlign = this.option.textAlign, t.textBaseline = this.option.baseline, "vertical" === this.option.orientation ? this.renderVertical({ ctx: t }) : this.option.maxWidth && this.getWidth() > this.option.maxWidth ? this.renderBreakLine({ ctx: t }) : t.fillText(this.text, 0, 0) } renderVertical({ ctx: t, isMeasure: e = !1 }) { var n = this.text.split(""), i = n.map(t => this.getWidth(t)), r = t.textAlign, o = t.textBaseline; let l = 0, a = 0, s = this.text; return "left" == r ? l += Math.max.apply(null, i) / 2 : "right" == r && (l -= Math.max.apply(null, i) / 2), "bottom" == o || "alphabetic" == o || "ideographic" == o ? a -= i[0] / 2 : "top" != o && "hanging" != o || (a += i[0] / 2), t.textAlign = "center", t.textBaseline = "middle", n.forEach(function (e, n) { let r = e.charCodeAt(0); r <= 256 ? (t.translate(l, a), t.rotate(90 * Math.PI / 180), t.translate(-l, -a)) : n > 0 && s.charCodeAt(n - 1) < 256 && (a += i[n - 1] / 2), t.fillText(e, l, a), r <= 256 && (t.translate(l, a), t.rotate(-90 * Math.PI / 180), t.translate(-l, -a)); var o = i[n]; a += o }), t.textAlign = r, t.textBaseline = o, a } renderBreakLine({ ctx: t, isMeasure: e = !1 }) { let n = "", i = 0, r = 1, o = []; this.option.text.replace(/\b(?![\u0020-\u002F\u003A-\u003F\u2000-\u206F\u2E00-\u2E7F\u3000-\u303F\uFF00-\uFF1F])|(?=[\u2E80-\u2FFF\u3040-\u9FFF])/g, function () { o.push(arguments[arguments.length - 2] - 1) }); let l = 0; for (let a = 0; a < this.option.text.length; a++)if (-1 !== o.indexOf(a) && (l = a), n += [this.option.text[a]], this.getWidth(n) > this.option.maxWidth || 10 === this.option.text[a].charCodeAt(0)) { let o = ""; if (r === this.option.maxLine && a !== this.option.text.length ? (o = n.substring(0, n.length - 1) + "...", n = "") : l === a ? (o = n, n = "") : (o = n.substring(0, n.length - (a - l)), n = n.substring(n.length - (a - l), n.length)), 10 === this.option.text[a].charCodeAt(0) && (o = o.substring(0, o.length - 1)), !e && t.fillText(o, 0, i), r === this.option.maxLine && a !== this.option.text.length) break; i += this.option.lineHeight || 0, r++ } return n && !e && t.fillText(n, 0, i), i + this.option.lineHeight } }; var u = class extends i.Graphics { constructor(t) { switch (super(), t = Object.assign({ lineWidth: 1, lt: !0, rt: !0, lb: !0, rb: !0 }, t), this.beginPath(), t.type) { case s.rect: t.r > 0 ? this.setRoundedRect(t) : this.rect(0, 0, t.width, t.height); break; case s.circle: this.arc(0, 0, t.r, 0, 2 * Math.PI, !1) }this.closePath(); let e = o({ option: t }); t.fillStyle || t.strokeStyle || (t.fillStyle = "#FFFFFF"), t.fillStyle ? (this.fillStyle(e || t.fillStyle), this.fill()) : t.strokeStyle && (this.lineWidth(t.lineWidth), this.strokeStyle(e || t.strokeStyle), this.stroke()) } setRoundedRect(t) { const e = t.r, n = t.r, i = t.width, r = t.width, o = t.height, l = t.height; this.moveTo(n, 0), t.rt ? this.arcTo(i, 0, r, o, e) : this.lineTo(i, 0), t.rb ? this.arcTo(r, o, 0, l, e) : this.lineTo(r, o), t.lb ? this.arcTo(0, l, 0, 0, e) : this.lineTo(0, l), t.lt ? this.arcTo(0, 0, n, 0, e) : this.lineTo(0, 0) } }, p = n(1), f = n.n(p); n.d(e, "draw", function () { return x }); const d = new f.a; let g = null, m = new Map; function x(t, e, n = null, i) { const o = d.parse(Object.assign({ scale: 1 }, l(t))); !function (t) { t.all().forEach(t => { let e = t.model; if (e.type === s.text && "auto" === e.height) { let n = new h(e), i = n.getHeight() - (e.uiheight || 0); console.log(i), t.getPath().forEach((t, e, n) => { if (e !== n.length - 1 && (t.model.height += i), 0 !== e) { let r = n[e - 1]; r.children.slice(t.getIndex() + 1, r.children.length).forEach(t => { t.model.pin || (t.model.y += i) }) } }) } }) }(o); const c = [o.model.width * o.model.scale, o.model.height * o.model.scale, e]; (g = a ? new r.a.Stage(...c, n) : new r.a.Stage(...c)).scale = o.model.scale; let p = [], f = []; o.all().forEach((t, e) => { let n = t.model; if (n.url && !p.includes(n.url) && (p.push(n.url), f.push(function (t) { return new Promise((e, n) => { if (a) wx.getImageInfo({ src: t, success(n) { new r.a.Bitmap(n.path.startsWith("http") ? n.path : t, function () { e({ url: t, bitmap: this }) }) }, fail(n) { console.error(n), e({ url: t, bitmap: null }) } }); else { const n = new Image; n.onload = function () { new r.a.Bitmap(t, function () { e({ url: t, bitmap: this }) }) }, n.onerror = function (n) { console.error(n), e({ url: t, bitmap: null }) }, n.src = t } }) }(n.url))), (n.type === s.group || 0 === e) && n.width && n.height) if (n.url) { let e = { type: s.image, width: n.width, height: n.height, url: n.url }; t.addChildAtIndex(d.parse(e), 0) } else if (n.fillStyle) { let e = l(n); delete e.children, e.type = s.rect, e.x = 0, e.y = 0, t.addChildAtIndex(d.parse(e), 0) } }), Promise.all(f).then(t => { t.forEach(({ url: t, bitmap: e }) => { m.set(t, e) }), g.add(function t({ option: e, parent: n }) { const i = new r.a.Group; e.width && (i.width = e.width); e.height && (i.height = e.height); y(i, e, n); e.children && e.children.forEach(e => { let n = null, o = { option: e, parent: i }; switch (e.type) { case s.group: n = t(o); break; case s.rect: case s.circle: n = function ({ option: t, parent: e }) { const n = new u(t); return y(n, t, e), n }(o); break; case s.image: n = function ({ option: t, parent: e }) { let n = m.get(t.url); if (n) { n.used ? n = n.clone() : n.used = !0; let i = n.width; if (n.scale = t.width / i, y(n, t, e), t.isCircular) { const t = new r.a.Graphics; t.arc(i / 2, i / 2, i / 2, 0, 2 * Math.PI), n.clip(t) } return n } return null }(o); break; case s.text: n = function ({ option: t, parent: e }) { const n = new h(t); t.shadow && (n.shadow = t.shadow); return y(n, t, e), n }(o) }n && i.add(n) }); return i }({ option: o.model })), setTimeout(() => { g.update(), i && i() }, 0) }) } function y(t, e, n) { w({ ele: t, option: e, value: "x", parent: n }), w({ ele: t, option: e, value: "y", parent: n }) } function w({ ele: t, option: e, value: n, parent: i }) { switch (e[n]) { case "center": switch (e.type) { case s.image: t[n] = (i.width - t.width * t.scale) / 2; break; case s.text: t[n] = (i.width - t.getWidth()) / 2 }break; case "bottom": switch (e.type) { case s.image: t[n] = (i ? i.height : e.height / e.scale) - t.height * t.scale; break; case s.rect: case s.group: t[n] = (i ? i.height : e.height / e.scale) - e.height }break; default: switch (e.type) { case s.circle: t[n] = e[n] + e.r; break; default: t[n] = e[n] || 0 } } } }]) });!
function(t, e) {
    "object" == typeof exports && "object" == typeof module ? module.exports = e(require("cax")) : "function" == typeof define && define.amd ? define(["cax"], e) : "object" == typeof exports ? exports.json2canvas = e(require("cax")) : t.json2canvas = e(t.cax)
} (window,
function(t) {
    return function(t) {
        var e = {};
        function n(i) {
            if (e[i]) return e[i].exports;
            var r = e[i] = {
                i: i,
                l: !1,
                exports: {}
            };
            return t[i].call(r.exports, r, r.exports, n),
            r.l = !0,
            r.exports
        }
        return n.m = t,
        n.c = e,
        n.d = function(t, e, i) {
            n.o(t, e) || Object.defineProperty(t, e, {
                enumerable: !0,
                get: i
            })
        },
        n.r = function(t) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
                value: "Module"
            }),
            Object.defineProperty(t, "__esModule", {
                value: !0
            })
        },
        n.t = function(t, e) {
            if (1 & e && (t = n(t)), 8 & e) return t;
            if (4 & e && "object" == typeof t && t && t.__esModule) return t;
            var i = Object.create(null);
            if (n.r(i), Object.defineProperty(i, "default", {
                enumerable: !0,
                value: t
            }), 2 & e && "string" != typeof t) for (var r in t) n.d(i, r,
            function(e) {
                return t[e]
            }.bind(null, r));
            return i
        },
        n.n = function(t) {
            var e = t && t.__esModule ?
            function() {
                return t.
            default
            }:
            function() {
                return t
            };
            return n.d(e, "a", e),
            e
        },
        n.o = function(t, e) {
            return Object.prototype.hasOwnProperty.call(t, e)
        },
        n.p = "",
        n(n.s = 4)
    } ([function(e, n) {
        e.exports = t
    },
    function(t, e, n) {
        var i, r;
        i = n(2),
        r = n(3),
        t.exports = function() {
            "use strict";
            var t;
            function e(t) {
                return function() {
                    return t
                }
            }
            function n(t) {
                t = t || {},
                this.config = t,
                this.config.childrenPropertyName = t.childrenPropertyName || "children",
                this.config.modelComparatorFn = t.modelComparatorFn
            }
            function o(t, e) {
                return e.parent = t,
                t.children.push(e),
                e
            }
            function l(t, e) {
                this.config = t,
                this.model = e,
                this.children = []
            }
            function a(t) {
                return "function" == typeof t.config.modelComparatorFn
            }
            function s(t, e, n) {
                var i;
                if (! (e instanceof l)) throw new TypeError("Child must be of type Node.");
                if (e.parent = t, t.model[t.config.childrenPropertyName] instanceof Array || (t.model[t.config.childrenPropertyName] = []), a(t)) i = r(t.config.modelComparatorFn, t.model[t.config.childrenPropertyName], e.model),
                t.model[t.config.childrenPropertyName].splice(i, 0, e.model),
                t.children.splice(i, 0, e);
                else if (void 0 === n) t.model[t.config.childrenPropertyName].push(e.model),
                t.children.push(e);
                else {
                    if (n < 0 || n > t.children.length) throw new Error("Invalid index.");
                    t.model[t.config.childrenPropertyName].splice(n, 0, e.model),
                    t.children.splice(n, 0, e)
                }
                return e
            }
            function c() {
                var e = {};
                if (1 === arguments.length ? "function" == typeof arguments[0] ? e.fn = arguments[0] : e.options = arguments[0] : 2 === arguments.length ? "function" == typeof arguments[0] ? (e.fn = arguments[0], e.ctx = arguments[1]) : (e.options = arguments[0], e.fn = arguments[1]) : (e.options = arguments[0], e.fn = arguments[1], e.ctx = arguments[2]), e.options = e.options || {},
                e.options.strategy || (e.options.strategy = "pre"), !t[e.options.strategy]) throw new Error("Unknown tree walk strategy. Valid strategies are 'pre' [default], 'post' and 'breadth'.");
                return e
            }
            return t = {},
            n.prototype.parse = function(t) {
                var e, n, r;
                if (! (t instanceof Object)) throw new TypeError("Model must be of type object.");
                if (r = new l(this.config, t), t[this.config.childrenPropertyName] instanceof Array) for (this.config.modelComparatorFn && (t[this.config.childrenPropertyName] = i(this.config.modelComparatorFn, t[this.config.childrenPropertyName])), e = 0, n = t[this.config.childrenPropertyName].length; e < n; e++) o(r, this.parse(t[this.config.childrenPropertyName][e]));
                return r
            },
            l.prototype.isRoot = function() {
                return void 0 === this.parent
            },
            l.prototype.hasChildren = function() {
                return this.children.length > 0
            },
            l.prototype.addChild = function(t) {
                return s(this, t)
            },
            l.prototype.addChildAtIndex = function(t, e) {
                if (a(this)) throw new Error("Cannot add child at index when using a comparator function.");
                return s(this, t, e)
            },
            l.prototype.setIndex = function(t) {
                if (a(this)) throw new Error("Cannot set node index when using a comparator function.");
                if (this.isRoot()) {
                    if (0 === t) return this;
                    throw new Error("Invalid index.")
                }
                if (t < 0 || t >= this.parent.children.length) throw new Error("Invalid index.");
                var e = this.parent.children.indexOf(this);
                return this.parent.children.splice(t, 0, this.parent.children.splice(e, 1)[0]),
                this.parent.model[this.parent.config.childrenPropertyName].splice(t, 0, this.parent.model[this.parent.config.childrenPropertyName].splice(e, 1)[0]),
                this
            },
            l.prototype.getPath = function() {
                var t = [];
                return function e(n) {
                    t.unshift(n),
                    n.isRoot() || e(n.parent)
                } (this),
                t
            },
            l.prototype.getIndex = function() {
                return this.isRoot() ? 0 : this.parent.children.indexOf(this)
            },
            l.prototype.walk = function() {
                var e;
                e = c.apply(this, arguments),
                t[e.options.strategy].call(this, e.fn, e.ctx)
            },
            t.pre = function t(e, n) {
                var i, r, o;
                for (o = e.call(n, this), i = 0, r = this.children.length; i < r; i++) {
                    if (!1 === o) return ! 1;
                    o = t.call(this.children[i], e, n)
                }
                return o
            },
            t.post = function t(e, n) {
                var i, r;
                for (i = 0, r = this.children.length; i < r; i++) if (!1 === t.call(this.children[i], e, n)) return ! 1;
                return e.call(n, this)
            },
            t.breadth = function(t, e) {
                var n = [this]; !
                function i() {
                    var r, o, l;
                    if (0 !== n.length) {
                        for (r = 0, o = (l = n.shift()).children.length; r < o; r++) n.push(l.children[r]); ! 1 !== t.call(e, l) && i()
                    }
                } ()
            },
            l.prototype.all = function() {
                var n, i = [];
                return (n = c.apply(this, arguments)).fn = n.fn || e(!0),
                t[n.options.strategy].call(this,
                function(t) {
                    n.fn.call(n.ctx, t) && i.push(t)
                },
                n.ctx),
                i
            },
            l.prototype.first = function() {
                var n, i;
                return (n = c.apply(this, arguments)).fn = n.fn || e(!0),
                t[n.options.strategy].call(this,
                function(t) {
                    if (n.fn.call(n.ctx, t)) return i = t,
                    !1
                },
                n.ctx),
                i
            },
            l.prototype.drop = function() {
                var t;
                return this.isRoot() || (t = this.parent.children.indexOf(this), this.parent.children.splice(t, 1), this.parent.model[this.config.childrenPropertyName].splice(t, 1), this.parent = void 0, delete this.parent),
                this
            },
            n
        } ()
    },
    function(t, e) {
        t.exports = function() {
            "use strict";
            return function t(e, n) {
                var i, r, o = n.length;
                return o >= 2 ? (i = n.slice(0, o / 2), r = n.slice(o / 2, o),
                function(t, e, n) {
                    for (var i = [], r = e.length, o = n.length; r > 0 && o > 0;) t(e[0], n[0]) <= 0 ? (i.push(e.shift()), r--) : (i.push(n.shift()), o--);
                    return r > 0 ? i.push.apply(i, e) : i.push.apply(i, n),
                    i
                } (e, t(e, i), t(e, r))) : n.slice()
            }
        } ()
    },
    function(t, e) {
        t.exports = function() {
            "use strict";
            return function(t, e, n) {
                var i, r;
                for (i = 0, r = e.length; i < r && !(t(e[i], n) > 0); i++);
                return i
            }
        } ()
    },
    function(t, e, n) {
        "use strict";
        n.r(e);
        var i = n(0),
        r = n.n(i);
        function o({
            option: t
        }) {
            let e = null;
            if (t.linearGradient && t.colors) {
                e = function() {
                    if (a) return wx.createCanvasContext("measure0");
                    if ("undefined" != typeof document) return document.createElement("canvas").getContext("2d");
                    return null
                } ().createLinearGradient(...t.linearGradient);
                for (let n = 0; n < t.colors.length; n++) e.addColorStop(...t.colors[n])
            }
            return e
        }
        function l(t) {
            return JSON.parse(JSON.stringify(t))
        }
        const a = "undefined" != typeof wx && !wx.createCanvas && wx.createCanvasContext,
        s = ("undefined" != typeof wx && wx.createCanvas, {
            rect: "rect",
            circle: "circle",
            image: "image",
            text: "text",
            group: "group"
        });
        let c;
        a ? c = wx.createCanvasContext("measure0") : "undefined" != typeof document && (c = document.createElement("canvas").getContext("2d"));
        var h = class extends i.Graphics {
            constructor(t) {
                super(),
                t = Object.assign({
                    font: "10px sans-serif",
                    color: "black",
                    textAlign: "left",
                    baseline: "top",
                    orientation: "horizontal"
                },
                t),
                this.option = t || {},
                this.text = t.text
            }
            getWidth(t) {
                return c || util.isWegame && (c = wx.createCanvas().getContext("2d")),
                this.option.font && (c.font = this.option.font),
                c.measureText(t || this.text).width
            }
            getHeight() {
                return this.renderBreakLine({
                    isMeasure: !0
                })
            }
            render(t) {
                t.fillStyle = o({
                    option: this.option
                }) || this.option.color,
                t.font = this.option.font,
                t.textAlign = this.option.textAlign,
                t.textBaseline = this.option.baseline,
                "vertical" === this.option.orientation ? this.renderVertical({
                    ctx: t
                }) : this.option.maxWidth && this.getWidth() > this.option.maxWidth ? this.renderBreakLine({
                    ctx: t
                }) : t.fillText(this.text, 0, 0)
            }
            renderVertical({
                ctx: t,
                isMeasure: e = !1
            }) {
                var n = this.text.split(""),
                i = n.map(t = >this.getWidth(t)),
                r = t.textAlign,
                o = t.textBaseline;
                let l = 0,
                a = 0,
                s = this.text;
                return "left" == r ? l += Math.max.apply(null, i) / 2 : "right" == r && (l -= Math.max.apply(null, i) / 2),
                "bottom" == o || "alphabetic" == o || "ideographic" == o ? a -= i[0] / 2 : "top" != o && "hanging" != o || (a += i[0] / 2),
                t.textAlign = "center",
                t.textBaseline = "middle",
                n.forEach(function(e, n) {
                    let r = e.charCodeAt(0);
                    r <= 256 ? (t.translate(l, a), t.rotate(90 * Math.PI / 180), t.translate( - l, -a)) : n > 0 && s.charCodeAt(n - 1) < 256 && (a += i[n - 1] / 2),
                    t.fillText(e, l, a),
                    r <= 256 && (t.translate(l, a), t.rotate( - 90 * Math.PI / 180), t.translate( - l, -a));
                    var o = i[n];
                    a += o
                }),
                t.textAlign = r,
                t.textBaseline = o,
                a
            }
            renderBreakLine({
                ctx: t,
                isMeasure: e = !1
            }) {
                let n = "",
                i = 0,
                r = 1,
                o = [];
                this.option.text.replace(/\b(?![\u0020-\u002F\u003A-\u003F\u2000-\u206F\u2E00-\u2E7F\u3000-\u303F\uFF00-\uFF1F])|(?=[\u2E80-\u2FFF\u3040-\u9FFF])/g,
                function() {
                    o.push(arguments[arguments.length - 2] - 1)
                });
                let l = 0;
                for (let a = 0; a < this.option.text.length; a++) if ( - 1 !== o.indexOf(a) && (l = a), n += [this.option.text[a]], this.getWidth(n) > this.option.maxWidth || 10 === this.option.text[a].charCodeAt(0)) {
                    let o = "";
                    if (r === this.option.maxLine && a !== this.option.text.length ? (o = n.substring(0, n.length - 1) + "...", n = "") : l === a ? (o = n, n = "") : (o = n.substring(0, n.length - (a - l)), n = n.substring(n.length - (a - l), n.length)), 10 === this.option.text[a].charCodeAt(0) && (o = o.substring(0, o.length - 1)), !e && t.fillText(o, 0, i), r === this.option.maxLine && a !== this.option.text.length) break;
                    i += this.option.lineHeight || 0,
                    r++
                }
                return n && !e && t.fillText(n, 0, i),
                i + this.option.lineHeight
            }
        };
        var u = class extends i.Graphics {
            constructor(t) {
                switch (super(), t = Object.assign({
                    lineWidth: 1,
                    lt: !0,
                    rt: !0,
                    lb: !0,
                    rb: !0
                },
                t), this.beginPath(), t.type) {
                case s.rect:
                    t.r > 0 ? this.setRoundedRect(t) : this.rect(0, 0, t.width, t.height);
                    break;
                case s.circle:
                    this.arc(0, 0, t.r, 0, 2 * Math.PI, !1)
                }
                this.closePath();
                let e = o({
                    option: t
                });
                t.fillStyle || t.strokeStyle || (t.fillStyle = "#FFFFFF"),
                t.fillStyle ? (this.fillStyle(e || t.fillStyle), this.fill()) : t.strokeStyle && (this.lineWidth(t.lineWidth), this.strokeStyle(e || t.strokeStyle), this.stroke())
            }
            setRoundedRect(t) {
                const e = t.r,
                n = t.r,
                i = t.width,
                r = t.width,
                o = t.height,
                l = t.height;
                this.moveTo(n, 0),
                t.rt ? this.arcTo(i, 0, r, o, e) : this.lineTo(i, 0),
                t.rb ? this.arcTo(r, o, 0, l, e) : this.lineTo(r, o),
                t.lb ? this.arcTo(0, l, 0, 0, e) : this.lineTo(0, l),
                t.lt ? this.arcTo(0, 0, n, 0, e) : this.lineTo(0, 0)
            }
        },
        p = n(1),
        f = n.n(p);
        n.d(e, "draw",
        function() {
            return x
        });
        const d = new f.a;
        let g = null,
        m = new Map;
        function x(t, e, n = null, i) {
            const o = d.parse(Object.assign({
                scale: 1
            },
            l(t))); !
            function(t) {
                t.all().forEach(t = >{
                    let e = t.model;
                    if (e.type === s.text && "auto" === e.height) {
                        let n = new h(e),
                        i = n.getHeight() - (e.uiheight || 0);
                        console.log(i),
                        t.getPath().forEach((t, e, n) = >{
                            if (e !== n.length - 1 && (t.model.height += i), 0 !== e) {
                                let r = n[e - 1];
                                r.children.slice(t.getIndex() + 1, r.children.length).forEach(t = >{
                                    t.model.pin || (t.model.y += i)
                                })
                            }
                        })
                    }
                })
            } (o);
            const c = [o.model.width * o.model.scale, o.model.height * o.model.scale, e]; (g = a ? new r.a.Stage(...c, n) : new r.a.Stage(...c)).scale = o.model.scale;
            let p = [],
            f = [];
            o.all().forEach((t, e) = >{
                let n = t.model;
                if (n.url && !p.includes(n.url) && (p.push(n.url), f.push(function(t) {
                    return new Promise((e, n) = >{
                        if (a) wx.getImageInfo({
                            src: t,
                            success(n) {
                                new r.a.Bitmap(n.path.startsWith("http") ? n.path: t,
                                function() {
                                    e({
                                        url: t,
                                        bitmap: this
                                    })
                                })
                            },
                            fail(n) {
                                console.error(n),
                                e({
                                    url: t,
                                    bitmap: null
                                })
                            }
                        });
                        else {
                            const n = new Image;
                            n.onload = function() {
                                new r.a.Bitmap(t,
                                function() {
                                    e({
                                        url: t,
                                        bitmap: this
                                    })
                                })
                            },
                            n.onerror = function(n) {
                                console.error(n),
                                e({
                                    url: t,
                                    bitmap: null
                                })
                            },
                            n.src = t
                        }
                    })
                } (n.url))), (n.type === s.group || 0 === e) && n.width && n.height) if (n.url) {
                    let e = {
                        type: s.image,
                        width: n.width,
                        height: n.height,
                        url: n.url
                    };
                    t.addChildAtIndex(d.parse(e), 0)
                } else if (n.fillStyle) {
                    let e = l(n);
                    delete e.children,
                    e.type = s.rect,
                    e.x = 0,
                    e.y = 0,
                    t.addChildAtIndex(d.parse(e), 0)
                }
            }),
            Promise.all(f).then(t = >{
                t.forEach(({
                    url: t,
                    bitmap: e
                }) = >{
                    m.set(t, e)
                }),
                g.add(function t({
                    option: e,
                    parent: n
                }) {
                    const i = new r.a.Group;
                    e.width && (i.width = e.width);
                    e.height && (i.height = e.height);
                    y(i, e, n);
                    e.children && e.children.forEach(e = >{
                        let n = null,
                        o = {
                            option: e,
                            parent: i
                        };
                        switch (e.type) {
                        case s.group:
                            n = t(o);
                            break;
                        case s.rect:
                        case s.circle:
                            n = function({
                                option: t,
                                parent: e
                            }) {
                                const n = new u(t);
                                return y(n, t, e),
                                n
                            } (o);
                            break;
                        case s.image:
                            n = function({
                                option: t,
                                parent: e
                            }) {
                                let n = m.get(t.url);
                                if (n) {
                                    n.used ? n = n.clone() : n.used = !0;
                                    let i = n.width;
                                    if (n.scale = t.width / i, y(n, t, e), t.isCircular) {
                                        const t = new r.a.Graphics;
                                        t.arc(i / 2, i / 2, i / 2, 0, 2 * Math.PI),
                                        n.clip(t)
                                    }
                                    return n
                                }
                                return null
                            } (o);
                            break;
                        case s.text:
                            n = function({
                                option: t,
                                parent: e
                            }) {
                                const n = new h(t);
                                t.shadow && (n.shadow = t.shadow);
                                return y(n, t, e),
                                n
                            } (o)
                        }
                        n && i.add(n)
                    });
                    return i
                } ({
                    option: o.model
                })),
                setTimeout(() = >{
                    g.update(),
                    i && i()
                },
                0)
            })
        }
        function y(t, e, n) {
            w({
                ele: t,
                option: e,
                value: "x",
                parent: n
            }),
            w({
                ele: t,
                option: e,
                value: "y",
                parent: n
            })
        }
        function w({
            ele: t,
            option: e,
            value: n,
            parent: i
        }) {
            switch (e[n]) {
            case "center":
                switch (e.type) {
                case s.image:
                    t[n] = (i.width - t.width * t.scale) / 2;
                    break;
                case s.text:
                    t[n] = (i.width - t.getWidth()) / 2
                }
                break;
            case "bottom":
                switch (e.type) {
                case s.image:
                    t[n] = (i ? i.height: e.height / e.scale) - t.height * t.scale;
                    break;
                case s.rect:
                case s.group:
                    t[n] = (i ? i.height: e.height / e.scale) - e.height
                }
                break;
            default:
                switch (e.type) {
                case s.circle:
                    t[n] = e[n] + e.r;
                    break;
                default:
                    t[n] = e[n] || 0
                }
            }
        }
    }])
});