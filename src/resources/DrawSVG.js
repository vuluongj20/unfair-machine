!(function (e, t) {
  "object" == typeof exports && "undefined" != typeof module
    ? t(exports)
    : "function" == typeof define && define.amd
    ? define(["exports"], t)
    : t(((e = e || self).window = e.window || {}))
})(this, function (e) {
  "use strict"
  function i() {
    return "undefined" != typeof window
  }
  function j() {
    return a || (i() && (a = window.gsap) && a.registerPlugin && a)
  }
  function m(e) {
    return Math.round(1e4 * e) / 1e4
  }
  function n(e) {
    return parseFloat(e) || 0
  }
  function o(e, t) {
    var r = n(e)
    return ~e.indexOf("%") ? (r / 100) * t : r
  }
  function p(e, t) {
    return n(e.getAttribute(t))
  }
  function r(e, t, r, i, o, s) {
    return P(Math.pow((n(r) - n(e)) * o, 2) + Math.pow((n(i) - n(t)) * s, 2))
  }
  function s(e) {
    return console.warn(e)
  }
  function t(e) {
    return "non-scaling-stroke" === e.getAttribute("vector-effect")
  }
  function w() {
    return String.fromCharCode.apply(null, arguments)
  }
  function A(e) {
    if (!(e = v(e)[0])) return 0
    var n,
      i,
      o,
      a,
      f,
      d,
      h,
      l = e.tagName.toLowerCase(),
      w = e.style,
      u = 1,
      c = 1
    t(e) &&
      ((c = e.getScreenCTM()),
      (u = P(c.a * c.a + c.b * c.b)),
      (c = P(c.d * c.d + c.c * c.c)))
    try {
      i = e.getBBox()
    } catch (e) {
      s(
        "Some browsers won't measure invisible elements (like display:none or masks inside defs)."
      )
    }
    var g = i || { x: 0, y: 0, width: 0, height: 0 },
      _ = g.x,
      y = g.y,
      x = g.width,
      m = g.height
    if (
      ((i && (x || m)) ||
        !k[l] ||
        ((x = p(e, k[l][0])),
        (m = p(e, k[l][1])),
        "rect" !== l && "line" !== l && ((x *= 2), (m *= 2)),
        "line" === l &&
          ((_ = p(e, "x1")),
          (y = p(e, "y1")),
          (x = Math.abs(x - _)),
          (m = Math.abs(m - y)))),
      "path" === l)
    )
      (a = w.strokeDasharray),
        (w.strokeDasharray = "none"),
        (n = e.getTotalLength() || 0),
        u !== c &&
          s(
            "Warning: <path> length cannot be measured when vector-effect is non-scaling-stroke and the element isn't proportionally scaled."
          ),
        (n *= (u + c) / 2),
        (w.strokeDasharray = a)
    else if ("rect" === l) n = 2 * x * u + 2 * m * c
    else if ("line" === l) n = r(_, y, _ + x, y + m, u, c)
    else if ("polyline" === l || "polygon" === l)
      for (
        o = e.getAttribute("points").match(b) || [],
          "polygon" === l && o.push(o[0], o[1]),
          n = 0,
          f = 2;
        f < o.length;
        f += 2
      )
        n += r(o[f - 2], o[f - 1], o[f], o[f + 1], u, c) || 0
    else
      ("circle" !== l && "ellipse" !== l) ||
        ((d = (x / 2) * u),
        (h = (m / 2) * c),
        (n = Math.PI * (3 * (d + h) - P((3 * d + h) * (d + 3 * h)))))
    return n || 0
  }
  function B(e, t) {
    if (!(e = v(e)[0])) return [0, 0]
    t = t || A(e) + 1
    var r = d.getComputedStyle(e),
      i = r.strokeDasharray || "",
      o = n(r.strokeDashoffset),
      s = i.indexOf(",")
    return (
      s < 0 && (s = i.indexOf(" ")),
      t < (i = s < 0 ? t : n(i.substr(0, s))) && (i = t),
      [-o || 0, i - o || 0]
    )
  }
  function C() {
    i() &&
      ((d = window),
      (l = a = j()),
      (v = a.utils.toArray),
      (h = -1 !== ((d.navigator || {}).userAgent || "").indexOf("Edge")))
  }
  var a,
    v,
    d,
    h,
    l,
    b = /[-+=\.]*\d+[\.e\-\+]*\d*[e\-\+]*\d*/gi,
    k = {
      rect: ["width", "height"],
      circle: ["r", "r"],
      ellipse: ["rx", "ry"],
      line: ["x2", "y2"],
    },
    P = Math.sqrt,
    f = "DrawSVGPlugin",
    u = w(103, 114, 101, 101, 110, 115, 111, 99, 107, 46, 99, 111, 109),
    c = (function (e) {
      return true
    })(window ? window.location.host : ""),
    g = {
      version: "3.6.1",
      name: "drawSVG",
      register: function register(e) {
        ;(a = e), C()
      },
      init: function init(e, r) {
        if (!e.getBBox) return !1
        l || C()
        var i,
          s,
          a,
          f = A(e)
        return (
          (this._style = e.style),
          (this._target = e),
          r + "" == "true"
            ? (r = "0 100%")
            : r
            ? -1 === (r + "").indexOf(" ") && (r = "0 " + r)
            : (r = "0 0"),
          (s = (function _parse(e, t, n) {
            var r,
              i,
              s = e.indexOf(" ")
            return (
              (i =
                s < 0
                  ? ((r = void 0 !== n ? n + "" : e), e)
                  : ((r = e.substr(0, s)), e.substr(s + 1))),
              (r = o(r, t)),
              (i = o(i, t)) < r ? [i, r] : [r, i]
            )
          })(r, f, (i = B(e, f))[0])),
          (this._length = m(f)),
          (this._dash = m(i[1] - i[0])),
          (this._offset = m(-i[0])),
          (this._dashPT = this.add(this, "_dash", this._dash, m(s[1] - s[0]))),
          (this._offsetPT = this.add(this, "_offset", this._offset, m(-s[0]))),
          h &&
            (a = d.getComputedStyle(e)).strokeLinecap !== a.strokeLinejoin &&
            ((s = n(a.strokeMiterlimit)),
            this.add(e.style, "strokeMiterlimit", s, s + 0.01)),
          (this._live = t(e) || ~(r + "").indexOf("live")),
          this._props.push("drawSVG"),
          c
        )
      },
      render: function render(e, t) {
        var n,
          r,
          i,
          o,
          s = t._pt,
          a = t._style
        if (s) {
          for (
            t._live &&
            (n = A(t._target)) !== t._length &&
            ((r = n / t._length),
            (t._length = n),
            t._offsetPT && ((t._offsetPT.s *= r), (t._offsetPT.c *= r)),
            t._dashPT
              ? ((t._dashPT.s *= r), (t._dashPT.c *= r))
              : (t._dash *= r));
            s;

          )
            s.r(e, s.d), (s = s._next)
          ;(i = t._dash || (e && 1 !== e && 1e-4) || 0),
            (n = t._length - i + 0.1),
            (o = t._offset),
            i &&
              o &&
              i + Math.abs(o % t._length) > t._length - 0.2 &&
              (o += o < 0 ? 0.1 : -0.1) &&
              (n += 0.1),
            (a.strokeDashoffset = i ? o : o + 0.001),
            (a.strokeDasharray =
              n < 0.2 ? "none" : i ? i + "px," + n + "px" : "0px, 999999px")
        }
      },
      getLength: A,
      getPosition: B,
    }
  j() && a.registerPlugin(g), (e.DrawSVGPlugin = g), (e.default = g)
  if (typeof window === "undefined" || window !== e) {
    Object.defineProperty(e, "__esModule", { value: !0 })
  } else {
    delete e.default
  }
})
