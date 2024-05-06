(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode('.wrapper-venn[data-v-b7bfc9e5]{width:100%;height:100%}.wrapper-venn[data-v-b7bfc9e5] .custom-venn-chart-tooltip{position:absolute;min-height:32px;max-width:200px;font-size:16px;display:flex;align-items:center;text-align:left;padding:8px 16px 8px 36px;background:#fff;color:#606266;border:0;border-radius:8px;opacity:0;box-shadow:0 2px 8px #00000026;z-index:2333}.wrapper-venn[data-v-b7bfc9e5] .custom-venn-chart-tooltip:before{content:"";width:10px;height:10px;position:absolute;left:16px;background-color:var(--2e002890);border-radius:50%;top:50%;transform:translateY(-50%)}')),document.head.appendChild(e)}}catch(t){console.error("vite-plugin-css-injected-by-js",t)}})();
import { defineComponent as Bi, useCssVars as Lo, ref as $n, computed as Fo, watch as Oo, onMounted as zo, onUnmounted as Do, openBlock as qo, createElementBlock as Ho, pushScopeId as Xo, popScopeId as Bo, createElementVNode as Vo } from "vue";
function Vi(t, n) {
  return t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN;
}
function Uo(t) {
  return t.length === 1 && (t = Yo(t)), {
    left: function(n, e, r, i) {
      for (r == null && (r = 0), i == null && (i = n.length); r < i; ) {
        var s = r + i >>> 1;
        t(n[s], e) < 0 ? r = s + 1 : i = s;
      }
      return r;
    },
    right: function(n, e, r, i) {
      for (r == null && (r = 0), i == null && (i = n.length); r < i; ) {
        var s = r + i >>> 1;
        t(n[s], e) > 0 ? i = s : r = s + 1;
      }
      return r;
    }
  };
}
function Yo(t) {
  return function(n, e) {
    return Vi(t(n), e);
  };
}
Uo(Vi);
var Go = { value: function() {
} };
function Ui() {
  for (var t = 0, n = arguments.length, e = {}, r; t < n; ++t) {
    if (!(r = arguments[t] + "") || r in e || /[\s.]/.test(r))
      throw new Error("illegal type: " + r);
    e[r] = [];
  }
  return new En(e);
}
function En(t) {
  this._ = t;
}
function Wo(t, n) {
  return t.trim().split(/^|\s+/).map(function(e) {
    var r = "", i = e.indexOf(".");
    if (i >= 0 && (r = e.slice(i + 1), e = e.slice(0, i)), e && !n.hasOwnProperty(e))
      throw new Error("unknown type: " + e);
    return { type: e, name: r };
  });
}
En.prototype = Ui.prototype = {
  constructor: En,
  on: function(t, n) {
    var e = this._, r = Wo(t + "", e), i, s = -1, o = r.length;
    if (arguments.length < 2) {
      for (; ++s < o; )
        if ((i = (t = r[s]).type) && (i = Ko(e[i], t.name)))
          return i;
      return;
    }
    if (n != null && typeof n != "function")
      throw new Error("invalid callback: " + n);
    for (; ++s < o; )
      if (i = (t = r[s]).type)
        e[i] = Fr(e[i], t.name, n);
      else if (n == null)
        for (i in e)
          e[i] = Fr(e[i], t.name, null);
    return this;
  },
  copy: function() {
    var t = {}, n = this._;
    for (var e in n)
      t[e] = n[e].slice();
    return new En(t);
  },
  call: function(t, n) {
    if ((i = arguments.length - 2) > 0)
      for (var e = new Array(i), r = 0, i, s; r < i; ++r)
        e[r] = arguments[r + 2];
    if (!this._.hasOwnProperty(t))
      throw new Error("unknown type: " + t);
    for (s = this._[t], r = 0, i = s.length; r < i; ++r)
      s[r].value.apply(n, e);
  },
  apply: function(t, n, e) {
    if (!this._.hasOwnProperty(t))
      throw new Error("unknown type: " + t);
    for (var r = this._[t], i = 0, s = r.length; i < s; ++i)
      r[i].value.apply(n, e);
  }
};
function Ko(t, n) {
  for (var e = 0, r = t.length, i; e < r; ++e)
    if ((i = t[e]).name === n)
      return i.value;
}
function Fr(t, n, e) {
  for (var r = 0, i = t.length; r < i; ++r)
    if (t[r].name === n) {
      t[r] = Go, t = t.slice(0, r).concat(t.slice(r + 1));
      break;
    }
  return e != null && t.push({ name: n, value: e }), t;
}
function pr(t, n, e) {
  t.prototype = n.prototype = e, e.constructor = t;
}
function Yi(t, n) {
  var e = Object.create(t.prototype);
  for (var r in n)
    e[r] = n[r];
  return e;
}
function pn() {
}
var jt = 0.7, zn = 1 / jt, yt = "\\s*([+-]?\\d+)\\s*", tn = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*", W = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*", Zo = /^#([0-9a-f]{3,8})$/, Jo = new RegExp("^rgb\\(" + [yt, yt, yt] + "\\)$"), Qo = new RegExp("^rgb\\(" + [W, W, W] + "\\)$"), jo = new RegExp("^rgba\\(" + [yt, yt, yt, tn] + "\\)$"), ta = new RegExp("^rgba\\(" + [W, W, W, tn] + "\\)$"), na = new RegExp("^hsl\\(" + [tn, W, W] + "\\)$"), ea = new RegExp("^hsla\\(" + [tn, W, W, tn] + "\\)$"), Or = {
  aliceblue: 15792383,
  antiquewhite: 16444375,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 15794175,
  beige: 16119260,
  bisque: 16770244,
  black: 0,
  blanchedalmond: 16772045,
  blue: 255,
  blueviolet: 9055202,
  brown: 10824234,
  burlywood: 14596231,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 13789470,
  coral: 16744272,
  cornflowerblue: 6591981,
  cornsilk: 16775388,
  crimson: 14423100,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 12092939,
  darkgray: 11119017,
  darkgreen: 25600,
  darkgrey: 11119017,
  darkkhaki: 12433259,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 16747520,
  darkorchid: 10040012,
  darkred: 9109504,
  darksalmon: 15308410,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 16716947,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 11674146,
  floralwhite: 16775920,
  forestgreen: 2263842,
  fuchsia: 16711935,
  gainsboro: 14474460,
  ghostwhite: 16316671,
  gold: 16766720,
  goldenrod: 14329120,
  gray: 8421504,
  green: 32768,
  greenyellow: 11403055,
  grey: 8421504,
  honeydew: 15794160,
  hotpink: 16738740,
  indianred: 13458524,
  indigo: 4915330,
  ivory: 16777200,
  khaki: 15787660,
  lavender: 15132410,
  lavenderblush: 16773365,
  lawngreen: 8190976,
  lemonchiffon: 16775885,
  lightblue: 11393254,
  lightcoral: 15761536,
  lightcyan: 14745599,
  lightgoldenrodyellow: 16448210,
  lightgray: 13882323,
  lightgreen: 9498256,
  lightgrey: 13882323,
  lightpink: 16758465,
  lightsalmon: 16752762,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 11584734,
  lightyellow: 16777184,
  lime: 65280,
  limegreen: 3329330,
  linen: 16445670,
  magenta: 16711935,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 12211667,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 13047173,
  midnightblue: 1644912,
  mintcream: 16121850,
  mistyrose: 16770273,
  moccasin: 16770229,
  navajowhite: 16768685,
  navy: 128,
  oldlace: 16643558,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 16753920,
  orangered: 16729344,
  orchid: 14315734,
  palegoldenrod: 15657130,
  palegreen: 10025880,
  paleturquoise: 11529966,
  palevioletred: 14381203,
  papayawhip: 16773077,
  peachpuff: 16767673,
  peru: 13468991,
  pink: 16761035,
  plum: 14524637,
  powderblue: 11591910,
  purple: 8388736,
  rebeccapurple: 6697881,
  red: 16711680,
  rosybrown: 12357519,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 16416882,
  sandybrown: 16032864,
  seagreen: 3050327,
  seashell: 16774638,
  sienna: 10506797,
  silver: 12632256,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 16775930,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 13808780,
  teal: 32896,
  thistle: 14204888,
  tomato: 16737095,
  turquoise: 4251856,
  violet: 15631086,
  wheat: 16113331,
  white: 16777215,
  whitesmoke: 16119285,
  yellow: 16776960,
  yellowgreen: 10145074
};
pr(pn, nn, {
  copy: function(t) {
    return Object.assign(new this.constructor(), this, t);
  },
  displayable: function() {
    return this.rgb().displayable();
  },
  hex: zr,
  // Deprecated! Use color.formatHex.
  formatHex: zr,
  formatHsl: ra,
  formatRgb: Dr,
  toString: Dr
});
function zr() {
  return this.rgb().formatHex();
}
function ra() {
  return Gi(this).formatHsl();
}
function Dr() {
  return this.rgb().formatRgb();
}
function nn(t) {
  var n, e;
  return t = (t + "").trim().toLowerCase(), (n = Zo.exec(t)) ? (e = n[1].length, n = parseInt(n[1], 16), e === 6 ? qr(n) : e === 3 ? new P(n >> 8 & 15 | n >> 4 & 240, n >> 4 & 15 | n & 240, (n & 15) << 4 | n & 15, 1) : e === 8 ? bn(n >> 24 & 255, n >> 16 & 255, n >> 8 & 255, (n & 255) / 255) : e === 4 ? bn(n >> 12 & 15 | n >> 8 & 240, n >> 8 & 15 | n >> 4 & 240, n >> 4 & 15 | n & 240, ((n & 15) << 4 | n & 15) / 255) : null) : (n = Jo.exec(t)) ? new P(n[1], n[2], n[3], 1) : (n = Qo.exec(t)) ? new P(n[1] * 255 / 100, n[2] * 255 / 100, n[3] * 255 / 100, 1) : (n = jo.exec(t)) ? bn(n[1], n[2], n[3], n[4]) : (n = ta.exec(t)) ? bn(n[1] * 255 / 100, n[2] * 255 / 100, n[3] * 255 / 100, n[4]) : (n = na.exec(t)) ? Br(n[1], n[2] / 100, n[3] / 100, 1) : (n = ea.exec(t)) ? Br(n[1], n[2] / 100, n[3] / 100, n[4]) : Or.hasOwnProperty(t) ? qr(Or[t]) : t === "transparent" ? new P(NaN, NaN, NaN, 0) : null;
}
function qr(t) {
  return new P(t >> 16 & 255, t >> 8 & 255, t & 255, 1);
}
function bn(t, n, e, r) {
  return r <= 0 && (t = n = e = NaN), new P(t, n, e, r);
}
function ia(t) {
  return t instanceof pn || (t = nn(t)), t ? (t = t.rgb(), new P(t.r, t.g, t.b, t.opacity)) : new P();
}
function Oe(t, n, e, r) {
  return arguments.length === 1 ? ia(t) : new P(t, n, e, r ?? 1);
}
function P(t, n, e, r) {
  this.r = +t, this.g = +n, this.b = +e, this.opacity = +r;
}
pr(P, Oe, Yi(pn, {
  brighter: function(t) {
    return t = t == null ? zn : Math.pow(zn, t), new P(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  darker: function(t) {
    return t = t == null ? jt : Math.pow(jt, t), new P(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  rgb: function() {
    return this;
  },
  displayable: function() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: Hr,
  // Deprecated! Use color.formatHex.
  formatHex: Hr,
  formatRgb: Xr,
  toString: Xr
}));
function Hr() {
  return "#" + me(this.r) + me(this.g) + me(this.b);
}
function Xr() {
  var t = this.opacity;
  return t = isNaN(t) ? 1 : Math.max(0, Math.min(1, t)), (t === 1 ? "rgb(" : "rgba(") + Math.max(0, Math.min(255, Math.round(this.r) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.g) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.b) || 0)) + (t === 1 ? ")" : ", " + t + ")");
}
function me(t) {
  return t = Math.max(0, Math.min(255, Math.round(t) || 0)), (t < 16 ? "0" : "") + t.toString(16);
}
function Br(t, n, e, r) {
  return r <= 0 ? t = n = e = NaN : e <= 0 || e >= 1 ? t = n = NaN : n <= 0 && (t = NaN), new U(t, n, e, r);
}
function Gi(t) {
  if (t instanceof U)
    return new U(t.h, t.s, t.l, t.opacity);
  if (t instanceof pn || (t = nn(t)), !t)
    return new U();
  if (t instanceof U)
    return t;
  t = t.rgb();
  var n = t.r / 255, e = t.g / 255, r = t.b / 255, i = Math.min(n, e, r), s = Math.max(n, e, r), o = NaN, a = s - i, u = (s + i) / 2;
  return a ? (n === s ? o = (e - r) / a + (e < r) * 6 : e === s ? o = (r - n) / a + 2 : o = (n - e) / a + 4, a /= u < 0.5 ? s + i : 2 - s - i, o *= 60) : a = u > 0 && u < 1 ? 0 : o, new U(o, a, u, t.opacity);
}
function sa(t, n, e, r) {
  return arguments.length === 1 ? Gi(t) : new U(t, n, e, r ?? 1);
}
function U(t, n, e, r) {
  this.h = +t, this.s = +n, this.l = +e, this.opacity = +r;
}
pr(U, sa, Yi(pn, {
  brighter: function(t) {
    return t = t == null ? zn : Math.pow(zn, t), new U(this.h, this.s, this.l * t, this.opacity);
  },
  darker: function(t) {
    return t = t == null ? jt : Math.pow(jt, t), new U(this.h, this.s, this.l * t, this.opacity);
  },
  rgb: function() {
    var t = this.h % 360 + (this.h < 0) * 360, n = isNaN(t) || isNaN(this.s) ? 0 : this.s, e = this.l, r = e + (e < 0.5 ? e : 1 - e) * n, i = 2 * e - r;
    return new P(
      we(t >= 240 ? t - 240 : t + 120, i, r),
      we(t, i, r),
      we(t < 120 ? t + 240 : t - 120, i, r),
      this.opacity
    );
  },
  displayable: function() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl: function() {
    var t = this.opacity;
    return t = isNaN(t) ? 1 : Math.max(0, Math.min(1, t)), (t === 1 ? "hsl(" : "hsla(") + (this.h || 0) + ", " + (this.s || 0) * 100 + "%, " + (this.l || 0) * 100 + "%" + (t === 1 ? ")" : ", " + t + ")");
  }
}));
function we(t, n, e) {
  return (t < 60 ? n + (e - n) * t / 60 : t < 180 ? e : t < 240 ? n + (e - n) * (240 - t) / 60 : n) * 255;
}
function Wi(t) {
  return function() {
    return t;
  };
}
function oa(t, n) {
  return function(e) {
    return t + e * n;
  };
}
function aa(t, n, e) {
  return t = Math.pow(t, e), n = Math.pow(n, e) - t, e = 1 / e, function(r) {
    return Math.pow(t + r * n, e);
  };
}
function ua(t) {
  return (t = +t) == 1 ? Ki : function(n, e) {
    return e - n ? aa(n, e, t) : Wi(isNaN(n) ? e : n);
  };
}
function Ki(t, n) {
  var e = n - t;
  return e ? oa(t, e) : Wi(isNaN(t) ? n : t);
}
const Vr = function t(n) {
  var e = ua(n);
  function r(i, s) {
    var o = e((i = Oe(i)).r, (s = Oe(s)).r), a = e(i.g, s.g), u = e(i.b, s.b), f = Ki(i.opacity, s.opacity);
    return function(l) {
      return i.r = o(l), i.g = a(l), i.b = u(l), i.opacity = f(l), i + "";
    };
  }
  return r.gamma = t, r;
}(1);
function st(t, n) {
  return t = +t, n = +n, function(e) {
    return t * (1 - e) + n * e;
  };
}
var ze = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, $e = new RegExp(ze.source, "g");
function fa(t) {
  return function() {
    return t;
  };
}
function la(t) {
  return function(n) {
    return t(n) + "";
  };
}
function ca(t, n) {
  var e = ze.lastIndex = $e.lastIndex = 0, r, i, s, o = -1, a = [], u = [];
  for (t = t + "", n = n + ""; (r = ze.exec(t)) && (i = $e.exec(n)); )
    (s = i.index) > e && (s = n.slice(e, s), a[o] ? a[o] += s : a[++o] = s), (r = r[0]) === (i = i[0]) ? a[o] ? a[o] += i : a[++o] = i : (a[++o] = null, u.push({ i: o, x: st(r, i) })), e = $e.lastIndex;
  return e < n.length && (s = n.slice(e), a[o] ? a[o] += s : a[++o] = s), a.length < 2 ? u[0] ? la(u[0].x) : fa(n) : (n = u.length, function(f) {
    for (var l = 0, c; l < n; ++l)
      a[(c = u[l]).i] = c.x(f);
    return a.join("");
  });
}
var Ur = 180 / Math.PI, De = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function Zi(t, n, e, r, i, s) {
  var o, a, u;
  return (o = Math.sqrt(t * t + n * n)) && (t /= o, n /= o), (u = t * e + n * r) && (e -= t * u, r -= n * u), (a = Math.sqrt(e * e + r * r)) && (e /= a, r /= a, u /= a), t * r < n * e && (t = -t, n = -n, u = -u, o = -o), {
    translateX: i,
    translateY: s,
    rotate: Math.atan2(n, t) * Ur,
    skewX: Math.atan(u) * Ur,
    scaleX: o,
    scaleY: a
  };
}
var It, be, Yr, Nn;
function ha(t) {
  return t === "none" ? De : (It || (It = document.createElement("DIV"), be = document.documentElement, Yr = document.defaultView), It.style.transform = t, t = Yr.getComputedStyle(be.appendChild(It), null).getPropertyValue("transform"), be.removeChild(It), t = t.slice(7, -1).split(","), Zi(+t[0], +t[1], +t[2], +t[3], +t[4], +t[5]));
}
function da(t) {
  return t == null || (Nn || (Nn = document.createElementNS("http://www.w3.org/2000/svg", "g")), Nn.setAttribute("transform", t), !(t = Nn.transform.baseVal.consolidate())) ? De : (t = t.matrix, Zi(t.a, t.b, t.c, t.d, t.e, t.f));
}
function Ji(t, n, e, r) {
  function i(f) {
    return f.length ? f.pop() + " " : "";
  }
  function s(f, l, c, h, d, g) {
    if (f !== c || l !== h) {
      var p = d.push("translate(", null, n, null, e);
      g.push({ i: p - 4, x: st(f, c) }, { i: p - 2, x: st(l, h) });
    } else
      (c || h) && d.push("translate(" + c + n + h + e);
  }
  function o(f, l, c, h) {
    f !== l ? (f - l > 180 ? l += 360 : l - f > 180 && (f += 360), h.push({ i: c.push(i(c) + "rotate(", null, r) - 2, x: st(f, l) })) : l && c.push(i(c) + "rotate(" + l + r);
  }
  function a(f, l, c, h) {
    f !== l ? h.push({ i: c.push(i(c) + "skewX(", null, r) - 2, x: st(f, l) }) : l && c.push(i(c) + "skewX(" + l + r);
  }
  function u(f, l, c, h, d, g) {
    if (f !== c || l !== h) {
      var p = d.push(i(d) + "scale(", null, ",", null, ")");
      g.push({ i: p - 4, x: st(f, c) }, { i: p - 2, x: st(l, h) });
    } else
      (c !== 1 || h !== 1) && d.push(i(d) + "scale(" + c + "," + h + ")");
  }
  return function(f, l) {
    var c = [], h = [];
    return f = t(f), l = t(l), s(f.translateX, f.translateY, l.translateX, l.translateY, c, h), o(f.rotate, l.rotate, c, h), a(f.skewX, l.skewX, c, h), u(f.scaleX, f.scaleY, l.scaleX, l.scaleY, c, h), f = l = null, function(d) {
      for (var g = -1, p = h.length, x; ++g < p; )
        c[(x = h[g]).i] = x.x(d);
      return c.join("");
    };
  };
}
var pa = Ji(ha, "px, ", "px)", "deg)"), ga = Ji(da, ", ", ")", ")"), qe = "http://www.w3.org/1999/xhtml";
const Gr = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: qe,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function re(t) {
  var n = t += "", e = n.indexOf(":");
  return e >= 0 && (n = t.slice(0, e)) !== "xmlns" && (t = t.slice(e + 1)), Gr.hasOwnProperty(n) ? { space: Gr[n], local: t } : t;
}
function xa(t) {
  return function() {
    var n = this.ownerDocument, e = this.namespaceURI;
    return e === qe && n.documentElement.namespaceURI === qe ? n.createElement(t) : n.createElementNS(e, t);
  };
}
function ya(t) {
  return function() {
    return this.ownerDocument.createElementNS(t.space, t.local);
  };
}
function Qi(t) {
  var n = re(t);
  return (n.local ? ya : xa)(n);
}
function _a() {
}
function gr(t) {
  return t == null ? _a : function() {
    return this.querySelector(t);
  };
}
function va(t) {
  typeof t != "function" && (t = gr(t));
  for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
    for (var s = n[i], o = s.length, a = r[i] = new Array(o), u, f, l = 0; l < o; ++l)
      (u = s[l]) && (f = t.call(u, u.__data__, l, s)) && ("__data__" in u && (f.__data__ = u.__data__), a[l] = f);
  return new q(r, this._parents);
}
function ma() {
  return [];
}
function ji(t) {
  return t == null ? ma : function() {
    return this.querySelectorAll(t);
  };
}
function wa(t) {
  typeof t != "function" && (t = ji(t));
  for (var n = this._groups, e = n.length, r = [], i = [], s = 0; s < e; ++s)
    for (var o = n[s], a = o.length, u, f = 0; f < a; ++f)
      (u = o[f]) && (r.push(t.call(u, u.__data__, f, o)), i.push(u));
  return new q(r, i);
}
function ts(t) {
  return function() {
    return this.matches(t);
  };
}
function $a(t) {
  typeof t != "function" && (t = ts(t));
  for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
    for (var s = n[i], o = s.length, a = r[i] = [], u, f = 0; f < o; ++f)
      (u = s[f]) && t.call(u, u.__data__, f, s) && a.push(u);
  return new q(r, this._parents);
}
function ns(t) {
  return new Array(t.length);
}
function ba() {
  return new q(this._enter || this._groups.map(ns), this._parents);
}
function Dn(t, n) {
  this.ownerDocument = t.ownerDocument, this.namespaceURI = t.namespaceURI, this._next = null, this._parent = t, this.__data__ = n;
}
Dn.prototype = {
  constructor: Dn,
  appendChild: function(t) {
    return this._parent.insertBefore(t, this._next);
  },
  insertBefore: function(t, n) {
    return this._parent.insertBefore(t, n);
  },
  querySelector: function(t) {
    return this._parent.querySelector(t);
  },
  querySelectorAll: function(t) {
    return this._parent.querySelectorAll(t);
  }
};
function Na(t) {
  return function() {
    return t;
  };
}
var Wr = "$";
function Aa(t, n, e, r, i, s) {
  for (var o = 0, a, u = n.length, f = s.length; o < f; ++o)
    (a = n[o]) ? (a.__data__ = s[o], r[o] = a) : e[o] = new Dn(t, s[o]);
  for (; o < u; ++o)
    (a = n[o]) && (i[o] = a);
}
function Ca(t, n, e, r, i, s, o) {
  var a, u, f = {}, l = n.length, c = s.length, h = new Array(l), d;
  for (a = 0; a < l; ++a)
    (u = n[a]) && (h[a] = d = Wr + o.call(u, u.__data__, a, n), d in f ? i[a] = u : f[d] = u);
  for (a = 0; a < c; ++a)
    d = Wr + o.call(t, s[a], a, s), (u = f[d]) ? (r[a] = u, u.__data__ = s[a], f[d] = null) : e[a] = new Dn(t, s[a]);
  for (a = 0; a < l; ++a)
    (u = n[a]) && f[h[a]] === u && (i[a] = u);
}
function Ma(t, n) {
  if (!t)
    return d = new Array(this.size()), f = -1, this.each(function(_) {
      d[++f] = _;
    }), d;
  var e = n ? Ca : Aa, r = this._parents, i = this._groups;
  typeof t != "function" && (t = Na(t));
  for (var s = i.length, o = new Array(s), a = new Array(s), u = new Array(s), f = 0; f < s; ++f) {
    var l = r[f], c = i[f], h = c.length, d = t.call(l, l && l.__data__, f, r), g = d.length, p = a[f] = new Array(g), x = o[f] = new Array(g), $ = u[f] = new Array(h);
    e(l, c, p, x, $, d, n);
    for (var v = 0, y = 0, b, N; v < g; ++v)
      if (b = p[v]) {
        for (v >= y && (y = v + 1); !(N = x[y]) && ++y < g; )
          ;
        b._next = N || null;
      }
  }
  return o = new q(o, r), o._enter = a, o._exit = u, o;
}
function Ra() {
  return new q(this._exit || this._groups.map(ns), this._parents);
}
function Ea(t, n, e) {
  var r = this.enter(), i = this, s = this.exit();
  return r = typeof t == "function" ? t(r) : r.append(t + ""), n != null && (i = n(i)), e == null ? s.remove() : e(s), r && i ? r.merge(i).order() : i;
}
function ka(t) {
  for (var n = this._groups, e = t._groups, r = n.length, i = e.length, s = Math.min(r, i), o = new Array(r), a = 0; a < s; ++a)
    for (var u = n[a], f = e[a], l = u.length, c = o[a] = new Array(l), h, d = 0; d < l; ++d)
      (h = u[d] || f[d]) && (c[d] = h);
  for (; a < r; ++a)
    o[a] = n[a];
  return new q(o, this._parents);
}
function Sa() {
  for (var t = this._groups, n = -1, e = t.length; ++n < e; )
    for (var r = t[n], i = r.length - 1, s = r[i], o; --i >= 0; )
      (o = r[i]) && (s && o.compareDocumentPosition(s) ^ 4 && s.parentNode.insertBefore(o, s), s = o);
  return this;
}
function Ta(t) {
  t || (t = Ia);
  function n(c, h) {
    return c && h ? t(c.__data__, h.__data__) : !c - !h;
  }
  for (var e = this._groups, r = e.length, i = new Array(r), s = 0; s < r; ++s) {
    for (var o = e[s], a = o.length, u = i[s] = new Array(a), f, l = 0; l < a; ++l)
      (f = o[l]) && (u[l] = f);
    u.sort(n);
  }
  return new q(i, this._parents).order();
}
function Ia(t, n) {
  return t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN;
}
function Pa() {
  var t = arguments[0];
  return arguments[0] = this, t.apply(null, arguments), this;
}
function La() {
  var t = new Array(this.size()), n = -1;
  return this.each(function() {
    t[++n] = this;
  }), t;
}
function Fa() {
  for (var t = this._groups, n = 0, e = t.length; n < e; ++n)
    for (var r = t[n], i = 0, s = r.length; i < s; ++i) {
      var o = r[i];
      if (o)
        return o;
    }
  return null;
}
function Oa() {
  var t = 0;
  return this.each(function() {
    ++t;
  }), t;
}
function za() {
  return !this.node();
}
function Da(t) {
  for (var n = this._groups, e = 0, r = n.length; e < r; ++e)
    for (var i = n[e], s = 0, o = i.length, a; s < o; ++s)
      (a = i[s]) && t.call(a, a.__data__, s, i);
  return this;
}
function qa(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function Ha(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function Xa(t, n) {
  return function() {
    this.setAttribute(t, n);
  };
}
function Ba(t, n) {
  return function() {
    this.setAttributeNS(t.space, t.local, n);
  };
}
function Va(t, n) {
  return function() {
    var e = n.apply(this, arguments);
    e == null ? this.removeAttribute(t) : this.setAttribute(t, e);
  };
}
function Ua(t, n) {
  return function() {
    var e = n.apply(this, arguments);
    e == null ? this.removeAttributeNS(t.space, t.local) : this.setAttributeNS(t.space, t.local, e);
  };
}
function Ya(t, n) {
  var e = re(t);
  if (arguments.length < 2) {
    var r = this.node();
    return e.local ? r.getAttributeNS(e.space, e.local) : r.getAttribute(e);
  }
  return this.each((n == null ? e.local ? Ha : qa : typeof n == "function" ? e.local ? Ua : Va : e.local ? Ba : Xa)(e, n));
}
function es(t) {
  return t.ownerDocument && t.ownerDocument.defaultView || t.document && t || t.defaultView;
}
function Ga(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function Wa(t, n, e) {
  return function() {
    this.style.setProperty(t, n, e);
  };
}
function Ka(t, n, e) {
  return function() {
    var r = n.apply(this, arguments);
    r == null ? this.style.removeProperty(t) : this.style.setProperty(t, r, e);
  };
}
function Za(t, n, e) {
  return arguments.length > 1 ? this.each((n == null ? Ga : typeof n == "function" ? Ka : Wa)(t, n, e ?? "")) : bt(this.node(), t);
}
function bt(t, n) {
  return t.style.getPropertyValue(n) || es(t).getComputedStyle(t, null).getPropertyValue(n);
}
function Ja(t) {
  return function() {
    delete this[t];
  };
}
function Qa(t, n) {
  return function() {
    this[t] = n;
  };
}
function ja(t, n) {
  return function() {
    var e = n.apply(this, arguments);
    e == null ? delete this[t] : this[t] = e;
  };
}
function tu(t, n) {
  return arguments.length > 1 ? this.each((n == null ? Ja : typeof n == "function" ? ja : Qa)(t, n)) : this.node()[t];
}
function rs(t) {
  return t.trim().split(/^|\s+/);
}
function xr(t) {
  return t.classList || new is(t);
}
function is(t) {
  this._node = t, this._names = rs(t.getAttribute("class") || "");
}
is.prototype = {
  add: function(t) {
    var n = this._names.indexOf(t);
    n < 0 && (this._names.push(t), this._node.setAttribute("class", this._names.join(" ")));
  },
  remove: function(t) {
    var n = this._names.indexOf(t);
    n >= 0 && (this._names.splice(n, 1), this._node.setAttribute("class", this._names.join(" ")));
  },
  contains: function(t) {
    return this._names.indexOf(t) >= 0;
  }
};
function ss(t, n) {
  for (var e = xr(t), r = -1, i = n.length; ++r < i; )
    e.add(n[r]);
}
function os(t, n) {
  for (var e = xr(t), r = -1, i = n.length; ++r < i; )
    e.remove(n[r]);
}
function nu(t) {
  return function() {
    ss(this, t);
  };
}
function eu(t) {
  return function() {
    os(this, t);
  };
}
function ru(t, n) {
  return function() {
    (n.apply(this, arguments) ? ss : os)(this, t);
  };
}
function iu(t, n) {
  var e = rs(t + "");
  if (arguments.length < 2) {
    for (var r = xr(this.node()), i = -1, s = e.length; ++i < s; )
      if (!r.contains(e[i]))
        return !1;
    return !0;
  }
  return this.each((typeof n == "function" ? ru : n ? nu : eu)(e, n));
}
function su() {
  this.textContent = "";
}
function ou(t) {
  return function() {
    this.textContent = t;
  };
}
function au(t) {
  return function() {
    var n = t.apply(this, arguments);
    this.textContent = n ?? "";
  };
}
function uu(t) {
  return arguments.length ? this.each(t == null ? su : (typeof t == "function" ? au : ou)(t)) : this.node().textContent;
}
function fu() {
  this.innerHTML = "";
}
function lu(t) {
  return function() {
    this.innerHTML = t;
  };
}
function cu(t) {
  return function() {
    var n = t.apply(this, arguments);
    this.innerHTML = n ?? "";
  };
}
function hu(t) {
  return arguments.length ? this.each(t == null ? fu : (typeof t == "function" ? cu : lu)(t)) : this.node().innerHTML;
}
function du() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function pu() {
  return this.each(du);
}
function gu() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function xu() {
  return this.each(gu);
}
function yu(t) {
  var n = typeof t == "function" ? t : Qi(t);
  return this.select(function() {
    return this.appendChild(n.apply(this, arguments));
  });
}
function _u() {
  return null;
}
function vu(t, n) {
  var e = typeof t == "function" ? t : Qi(t), r = n == null ? _u : typeof n == "function" ? n : gr(n);
  return this.select(function() {
    return this.insertBefore(e.apply(this, arguments), r.apply(this, arguments) || null);
  });
}
function mu() {
  var t = this.parentNode;
  t && t.removeChild(this);
}
function wu() {
  return this.each(mu);
}
function $u() {
  var t = this.cloneNode(!1), n = this.parentNode;
  return n ? n.insertBefore(t, this.nextSibling) : t;
}
function bu() {
  var t = this.cloneNode(!0), n = this.parentNode;
  return n ? n.insertBefore(t, this.nextSibling) : t;
}
function Nu(t) {
  return this.select(t ? bu : $u);
}
function Au(t) {
  return arguments.length ? this.property("__data__", t) : this.node().__data__;
}
var as = {};
if (typeof document < "u") {
  var Cu = document.documentElement;
  "onmouseenter" in Cu || (as = { mouseenter: "mouseover", mouseleave: "mouseout" });
}
function Mu(t, n, e) {
  return t = us(t, n, e), function(r) {
    var i = r.relatedTarget;
    (!i || i !== this && !(i.compareDocumentPosition(this) & 8)) && t.call(this, r);
  };
}
function us(t, n, e) {
  return function(r) {
    try {
      t.call(this, this.__data__, n, e);
    } finally {
    }
  };
}
function Ru(t) {
  return t.trim().split(/^|\s+/).map(function(n) {
    var e = "", r = n.indexOf(".");
    return r >= 0 && (e = n.slice(r + 1), n = n.slice(0, r)), { type: n, name: e };
  });
}
function Eu(t) {
  return function() {
    var n = this.__on;
    if (n) {
      for (var e = 0, r = -1, i = n.length, s; e < i; ++e)
        s = n[e], (!t.type || s.type === t.type) && s.name === t.name ? this.removeEventListener(s.type, s.listener, s.capture) : n[++r] = s;
      ++r ? n.length = r : delete this.__on;
    }
  };
}
function ku(t, n, e) {
  var r = as.hasOwnProperty(t.type) ? Mu : us;
  return function(i, s, o) {
    var a = this.__on, u, f = r(n, s, o);
    if (a) {
      for (var l = 0, c = a.length; l < c; ++l)
        if ((u = a[l]).type === t.type && u.name === t.name) {
          this.removeEventListener(u.type, u.listener, u.capture), this.addEventListener(u.type, u.listener = f, u.capture = e), u.value = n;
          return;
        }
    }
    this.addEventListener(t.type, f, e), u = { type: t.type, name: t.name, value: n, listener: f, capture: e }, a ? a.push(u) : this.__on = [u];
  };
}
function Su(t, n, e) {
  var r = Ru(t + ""), i, s = r.length, o;
  if (arguments.length < 2) {
    var a = this.node().__on;
    if (a) {
      for (var u = 0, f = a.length, l; u < f; ++u)
        for (i = 0, l = a[u]; i < s; ++i)
          if ((o = r[i]).type === l.type && o.name === l.name)
            return l.value;
    }
    return;
  }
  for (a = n ? ku : Eu, e == null && (e = !1), i = 0; i < s; ++i)
    this.each(a(r[i], n, e));
  return this;
}
function fs(t, n, e) {
  var r = es(t), i = r.CustomEvent;
  typeof i == "function" ? i = new i(n, e) : (i = r.document.createEvent("Event"), e ? (i.initEvent(n, e.bubbles, e.cancelable), i.detail = e.detail) : i.initEvent(n, !1, !1)), t.dispatchEvent(i);
}
function Tu(t, n) {
  return function() {
    return fs(this, t, n);
  };
}
function Iu(t, n) {
  return function() {
    return fs(this, t, n.apply(this, arguments));
  };
}
function Pu(t, n) {
  return this.each((typeof n == "function" ? Iu : Tu)(t, n));
}
var Lu = [null];
function q(t, n) {
  this._groups = t, this._parents = n;
}
function gn() {
  return new q([[document.documentElement]], Lu);
}
q.prototype = gn.prototype = {
  constructor: q,
  select: va,
  selectAll: wa,
  filter: $a,
  data: Ma,
  enter: ba,
  exit: Ra,
  join: Ea,
  merge: ka,
  order: Sa,
  sort: Ta,
  call: Pa,
  nodes: La,
  node: Fa,
  size: Oa,
  empty: za,
  each: Da,
  attr: Ya,
  style: Za,
  property: tu,
  classed: iu,
  text: uu,
  html: hu,
  raise: pu,
  lower: xu,
  append: yu,
  insert: vu,
  remove: wu,
  clone: Nu,
  datum: Au,
  on: Su,
  dispatch: Pu
};
var Nt = 0, Vt = 0, Pt = 0, ls = 1e3, qn, Ut, Hn = 0, ft = 0, ie = 0, en = typeof performance == "object" && performance.now ? performance : Date, cs = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(t) {
  setTimeout(t, 17);
};
function se() {
  return ft || (cs(Fu), ft = en.now() + ie);
}
function Fu() {
  ft = 0;
}
function Xn() {
  this._call = this._time = this._next = null;
}
Xn.prototype = hs.prototype = {
  constructor: Xn,
  restart: function(t, n, e) {
    if (typeof t != "function")
      throw new TypeError("callback is not a function");
    e = (e == null ? se() : +e) + (n == null ? 0 : +n), !this._next && Ut !== this && (Ut ? Ut._next = this : qn = this, Ut = this), this._call = t, this._time = e, He();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, He());
  }
};
function hs(t, n, e) {
  var r = new Xn();
  return r.restart(t, n, e), r;
}
function Ou() {
  se(), ++Nt;
  for (var t = qn, n; t; )
    (n = ft - t._time) >= 0 && t._call.call(null, n), t = t._next;
  --Nt;
}
function Kr() {
  ft = (Hn = en.now()) + ie, Nt = Vt = 0;
  try {
    Ou();
  } finally {
    Nt = 0, Du(), ft = 0;
  }
}
function zu() {
  var t = en.now(), n = t - Hn;
  n > ls && (ie -= n, Hn = t);
}
function Du() {
  for (var t, n = qn, e, r = 1 / 0; n; )
    n._call ? (r > n._time && (r = n._time), t = n, n = n._next) : (e = n._next, n._next = null, n = t ? t._next = e : qn = e);
  Ut = t, He(r);
}
function He(t) {
  if (!Nt) {
    Vt && (Vt = clearTimeout(Vt));
    var n = t - ft;
    n > 24 ? (t < 1 / 0 && (Vt = setTimeout(Kr, t - en.now() - ie)), Pt && (Pt = clearInterval(Pt))) : (Pt || (Hn = en.now(), Pt = setInterval(zu, ls)), Nt = 1, cs(Kr));
  }
}
function Zr(t, n, e) {
  var r = new Xn();
  return n = n == null ? 0 : +n, r.restart(function(i) {
    r.stop(), t(i + n);
  }, n, e), r;
}
var qu = Ui("start", "end", "cancel", "interrupt"), Hu = [], ds = 0, Jr = 1, Xe = 2, kn = 3, Qr = 4, Be = 5, Sn = 6;
function oe(t, n, e, r, i, s) {
  var o = t.__transition;
  if (!o)
    t.__transition = {};
  else if (e in o)
    return;
  Xu(t, e, {
    name: n,
    index: r,
    // For context during callback.
    group: i,
    // For context during callback.
    on: qu,
    tween: Hu,
    time: s.time,
    delay: s.delay,
    duration: s.duration,
    ease: s.ease,
    timer: null,
    state: ds
  });
}
function yr(t, n) {
  var e = X(t, n);
  if (e.state > ds)
    throw new Error("too late; already scheduled");
  return e;
}
function et(t, n) {
  var e = X(t, n);
  if (e.state > kn)
    throw new Error("too late; already running");
  return e;
}
function X(t, n) {
  var e = t.__transition;
  if (!e || !(e = e[n]))
    throw new Error("transition not found");
  return e;
}
function Xu(t, n, e) {
  var r = t.__transition, i;
  r[n] = e, e.timer = hs(s, 0, e.time);
  function s(f) {
    e.state = Jr, e.timer.restart(o, e.delay, e.time), e.delay <= f && o(f - e.delay);
  }
  function o(f) {
    var l, c, h, d;
    if (e.state !== Jr)
      return u();
    for (l in r)
      if (d = r[l], d.name === e.name) {
        if (d.state === kn)
          return Zr(o);
        d.state === Qr ? (d.state = Sn, d.timer.stop(), d.on.call("interrupt", t, t.__data__, d.index, d.group), delete r[l]) : +l < n && (d.state = Sn, d.timer.stop(), d.on.call("cancel", t, t.__data__, d.index, d.group), delete r[l]);
      }
    if (Zr(function() {
      e.state === kn && (e.state = Qr, e.timer.restart(a, e.delay, e.time), a(f));
    }), e.state = Xe, e.on.call("start", t, t.__data__, e.index, e.group), e.state === Xe) {
      for (e.state = kn, i = new Array(h = e.tween.length), l = 0, c = -1; l < h; ++l)
        (d = e.tween[l].value.call(t, t.__data__, e.index, e.group)) && (i[++c] = d);
      i.length = c + 1;
    }
  }
  function a(f) {
    for (var l = f < e.duration ? e.ease.call(null, f / e.duration) : (e.timer.restart(u), e.state = Be, 1), c = -1, h = i.length; ++c < h; )
      i[c].call(t, l);
    e.state === Be && (e.on.call("end", t, t.__data__, e.index, e.group), u());
  }
  function u() {
    e.state = Sn, e.timer.stop(), delete r[n];
    for (var f in r)
      return;
    delete t.__transition;
  }
}
function Bu(t, n) {
  var e = t.__transition, r, i, s = !0, o;
  if (e) {
    n = n == null ? null : n + "";
    for (o in e) {
      if ((r = e[o]).name !== n) {
        s = !1;
        continue;
      }
      i = r.state > Xe && r.state < Be, r.state = Sn, r.timer.stop(), r.on.call(i ? "interrupt" : "cancel", t, t.__data__, r.index, r.group), delete e[o];
    }
    s && delete t.__transition;
  }
}
function Vu(t) {
  return this.each(function() {
    Bu(this, t);
  });
}
function Uu(t, n) {
  var e, r;
  return function() {
    var i = et(this, t), s = i.tween;
    if (s !== e) {
      r = e = s;
      for (var o = 0, a = r.length; o < a; ++o)
        if (r[o].name === n) {
          r = r.slice(), r.splice(o, 1);
          break;
        }
    }
    i.tween = r;
  };
}
function Yu(t, n, e) {
  var r, i;
  if (typeof e != "function")
    throw new Error();
  return function() {
    var s = et(this, t), o = s.tween;
    if (o !== r) {
      i = (r = o).slice();
      for (var a = { name: n, value: e }, u = 0, f = i.length; u < f; ++u)
        if (i[u].name === n) {
          i[u] = a;
          break;
        }
      u === f && i.push(a);
    }
    s.tween = i;
  };
}
function Gu(t, n) {
  var e = this._id;
  if (t += "", arguments.length < 2) {
    for (var r = X(this.node(), e).tween, i = 0, s = r.length, o; i < s; ++i)
      if ((o = r[i]).name === t)
        return o.value;
    return null;
  }
  return this.each((n == null ? Uu : Yu)(e, t, n));
}
function _r(t, n, e) {
  var r = t._id;
  return t.each(function() {
    var i = et(this, r);
    (i.value || (i.value = {}))[n] = e.apply(this, arguments);
  }), function(i) {
    return X(i, r).value[n];
  };
}
function ps(t, n) {
  var e;
  return (typeof n == "number" ? st : n instanceof nn ? Vr : (e = nn(n)) ? (n = e, Vr) : ca)(t, n);
}
function Wu(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function Ku(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function Zu(t, n, e) {
  var r, i = e + "", s;
  return function() {
    var o = this.getAttribute(t);
    return o === i ? null : o === r ? s : s = n(r = o, e);
  };
}
function Ju(t, n, e) {
  var r, i = e + "", s;
  return function() {
    var o = this.getAttributeNS(t.space, t.local);
    return o === i ? null : o === r ? s : s = n(r = o, e);
  };
}
function Qu(t, n, e) {
  var r, i, s;
  return function() {
    var o, a = e(this), u;
    return a == null ? void this.removeAttribute(t) : (o = this.getAttribute(t), u = a + "", o === u ? null : o === r && u === i ? s : (i = u, s = n(r = o, a)));
  };
}
function ju(t, n, e) {
  var r, i, s;
  return function() {
    var o, a = e(this), u;
    return a == null ? void this.removeAttributeNS(t.space, t.local) : (o = this.getAttributeNS(t.space, t.local), u = a + "", o === u ? null : o === r && u === i ? s : (i = u, s = n(r = o, a)));
  };
}
function tf(t, n) {
  var e = re(t), r = e === "transform" ? ga : ps;
  return this.attrTween(t, typeof n == "function" ? (e.local ? ju : Qu)(e, r, _r(this, "attr." + t, n)) : n == null ? (e.local ? Ku : Wu)(e) : (e.local ? Ju : Zu)(e, r, n));
}
function nf(t, n) {
  return function(e) {
    this.setAttribute(t, n.call(this, e));
  };
}
function ef(t, n) {
  return function(e) {
    this.setAttributeNS(t.space, t.local, n.call(this, e));
  };
}
function rf(t, n) {
  var e, r;
  function i() {
    var s = n.apply(this, arguments);
    return s !== r && (e = (r = s) && ef(t, s)), e;
  }
  return i._value = n, i;
}
function sf(t, n) {
  var e, r;
  function i() {
    var s = n.apply(this, arguments);
    return s !== r && (e = (r = s) && nf(t, s)), e;
  }
  return i._value = n, i;
}
function of(t, n) {
  var e = "attr." + t;
  if (arguments.length < 2)
    return (e = this.tween(e)) && e._value;
  if (n == null)
    return this.tween(e, null);
  if (typeof n != "function")
    throw new Error();
  var r = re(t);
  return this.tween(e, (r.local ? rf : sf)(r, n));
}
function af(t, n) {
  return function() {
    yr(this, t).delay = +n.apply(this, arguments);
  };
}
function uf(t, n) {
  return n = +n, function() {
    yr(this, t).delay = n;
  };
}
function ff(t) {
  var n = this._id;
  return arguments.length ? this.each((typeof t == "function" ? af : uf)(n, t)) : X(this.node(), n).delay;
}
function lf(t, n) {
  return function() {
    et(this, t).duration = +n.apply(this, arguments);
  };
}
function cf(t, n) {
  return n = +n, function() {
    et(this, t).duration = n;
  };
}
function hf(t) {
  var n = this._id;
  return arguments.length ? this.each((typeof t == "function" ? lf : cf)(n, t)) : X(this.node(), n).duration;
}
function df(t, n) {
  if (typeof n != "function")
    throw new Error();
  return function() {
    et(this, t).ease = n;
  };
}
function pf(t) {
  var n = this._id;
  return arguments.length ? this.each(df(n, t)) : X(this.node(), n).ease;
}
function gf(t) {
  typeof t != "function" && (t = ts(t));
  for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
    for (var s = n[i], o = s.length, a = r[i] = [], u, f = 0; f < o; ++f)
      (u = s[f]) && t.call(u, u.__data__, f, s) && a.push(u);
  return new j(r, this._parents, this._name, this._id);
}
function xf(t) {
  if (t._id !== this._id)
    throw new Error();
  for (var n = this._groups, e = t._groups, r = n.length, i = e.length, s = Math.min(r, i), o = new Array(r), a = 0; a < s; ++a)
    for (var u = n[a], f = e[a], l = u.length, c = o[a] = new Array(l), h, d = 0; d < l; ++d)
      (h = u[d] || f[d]) && (c[d] = h);
  for (; a < r; ++a)
    o[a] = n[a];
  return new j(o, this._parents, this._name, this._id);
}
function yf(t) {
  return (t + "").trim().split(/^|\s+/).every(function(n) {
    var e = n.indexOf(".");
    return e >= 0 && (n = n.slice(0, e)), !n || n === "start";
  });
}
function _f(t, n, e) {
  var r, i, s = yf(n) ? yr : et;
  return function() {
    var o = s(this, t), a = o.on;
    a !== r && (i = (r = a).copy()).on(n, e), o.on = i;
  };
}
function vf(t, n) {
  var e = this._id;
  return arguments.length < 2 ? X(this.node(), e).on.on(t) : this.each(_f(e, t, n));
}
function mf(t) {
  return function() {
    var n = this.parentNode;
    for (var e in this.__transition)
      if (+e !== t)
        return;
    n && n.removeChild(this);
  };
}
function wf() {
  return this.on("end.remove", mf(this._id));
}
function $f(t) {
  var n = this._name, e = this._id;
  typeof t != "function" && (t = gr(t));
  for (var r = this._groups, i = r.length, s = new Array(i), o = 0; o < i; ++o)
    for (var a = r[o], u = a.length, f = s[o] = new Array(u), l, c, h = 0; h < u; ++h)
      (l = a[h]) && (c = t.call(l, l.__data__, h, a)) && ("__data__" in l && (c.__data__ = l.__data__), f[h] = c, oe(f[h], n, e, h, f, X(l, e)));
  return new j(s, this._parents, n, e);
}
function bf(t) {
  var n = this._name, e = this._id;
  typeof t != "function" && (t = ji(t));
  for (var r = this._groups, i = r.length, s = [], o = [], a = 0; a < i; ++a)
    for (var u = r[a], f = u.length, l, c = 0; c < f; ++c)
      if (l = u[c]) {
        for (var h = t.call(l, l.__data__, c, u), d, g = X(l, e), p = 0, x = h.length; p < x; ++p)
          (d = h[p]) && oe(d, n, e, p, h, g);
        s.push(h), o.push(l);
      }
  return new j(s, o, n, e);
}
var Nf = gn.prototype.constructor;
function Af() {
  return new Nf(this._groups, this._parents);
}
function Cf(t, n) {
  var e, r, i;
  return function() {
    var s = bt(this, t), o = (this.style.removeProperty(t), bt(this, t));
    return s === o ? null : s === e && o === r ? i : i = n(e = s, r = o);
  };
}
function gs(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function Mf(t, n, e) {
  var r, i = e + "", s;
  return function() {
    var o = bt(this, t);
    return o === i ? null : o === r ? s : s = n(r = o, e);
  };
}
function Rf(t, n, e) {
  var r, i, s;
  return function() {
    var o = bt(this, t), a = e(this), u = a + "";
    return a == null && (u = a = (this.style.removeProperty(t), bt(this, t))), o === u ? null : o === r && u === i ? s : (i = u, s = n(r = o, a));
  };
}
function Ef(t, n) {
  var e, r, i, s = "style." + n, o = "end." + s, a;
  return function() {
    var u = et(this, t), f = u.on, l = u.value[s] == null ? a || (a = gs(n)) : void 0;
    (f !== e || i !== l) && (r = (e = f).copy()).on(o, i = l), u.on = r;
  };
}
function kf(t, n, e) {
  var r = (t += "") == "transform" ? pa : ps;
  return n == null ? this.styleTween(t, Cf(t, r)).on("end.style." + t, gs(t)) : typeof n == "function" ? this.styleTween(t, Rf(t, r, _r(this, "style." + t, n))).each(Ef(this._id, t)) : this.styleTween(t, Mf(t, r, n), e).on("end.style." + t, null);
}
function Sf(t, n, e) {
  return function(r) {
    this.style.setProperty(t, n.call(this, r), e);
  };
}
function Tf(t, n, e) {
  var r, i;
  function s() {
    var o = n.apply(this, arguments);
    return o !== i && (r = (i = o) && Sf(t, o, e)), r;
  }
  return s._value = n, s;
}
function If(t, n, e) {
  var r = "style." + (t += "");
  if (arguments.length < 2)
    return (r = this.tween(r)) && r._value;
  if (n == null)
    return this.tween(r, null);
  if (typeof n != "function")
    throw new Error();
  return this.tween(r, Tf(t, n, e ?? ""));
}
function Pf(t) {
  return function() {
    this.textContent = t;
  };
}
function Lf(t) {
  return function() {
    var n = t(this);
    this.textContent = n ?? "";
  };
}
function Ff(t) {
  return this.tween("text", typeof t == "function" ? Lf(_r(this, "text", t)) : Pf(t == null ? "" : t + ""));
}
function Of(t) {
  return function(n) {
    this.textContent = t.call(this, n);
  };
}
function zf(t) {
  var n, e;
  function r() {
    var i = t.apply(this, arguments);
    return i !== e && (n = (e = i) && Of(i)), n;
  }
  return r._value = t, r;
}
function Df(t) {
  var n = "text";
  if (arguments.length < 1)
    return (n = this.tween(n)) && n._value;
  if (t == null)
    return this.tween(n, null);
  if (typeof t != "function")
    throw new Error();
  return this.tween(n, zf(t));
}
function qf() {
  for (var t = this._name, n = this._id, e = xs(), r = this._groups, i = r.length, s = 0; s < i; ++s)
    for (var o = r[s], a = o.length, u, f = 0; f < a; ++f)
      if (u = o[f]) {
        var l = X(u, n);
        oe(u, t, e, f, o, {
          time: l.time + l.delay + l.duration,
          delay: 0,
          duration: l.duration,
          ease: l.ease
        });
      }
  return new j(r, this._parents, t, e);
}
function Hf() {
  var t, n, e = this, r = e._id, i = e.size();
  return new Promise(function(s, o) {
    var a = { value: o }, u = { value: function() {
      --i === 0 && s();
    } };
    e.each(function() {
      var f = et(this, r), l = f.on;
      l !== t && (n = (t = l).copy(), n._.cancel.push(a), n._.interrupt.push(a), n._.end.push(u)), f.on = n;
    });
  });
}
var Xf = 0;
function j(t, n, e, r) {
  this._groups = t, this._parents = n, this._name = e, this._id = r;
}
function xs() {
  return ++Xf;
}
var dt = gn.prototype;
j.prototype = {
  constructor: j,
  select: $f,
  selectAll: bf,
  filter: gf,
  merge: xf,
  selection: Af,
  transition: qf,
  call: dt.call,
  nodes: dt.nodes,
  node: dt.node,
  size: dt.size,
  empty: dt.empty,
  each: dt.each,
  on: vf,
  attr: tf,
  attrTween: of,
  style: kf,
  styleTween: If,
  text: Ff,
  textTween: Df,
  remove: wf,
  tween: Gu,
  delay: ff,
  duration: hf,
  ease: pf,
  end: Hf
};
function Bf(t) {
  return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
}
var Ve = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: Bf
};
function Vf(t, n) {
  for (var e; !(e = t.__transition) || !(e = e[n]); )
    if (!(t = t.parentNode))
      return Ve.time = se(), Ve;
  return e;
}
function Uf(t) {
  var n, e;
  t instanceof j ? (n = t._id, t = t._name) : (n = xs(), (e = Ve).time = se(), t = t == null ? null : t + "");
  for (var r = this._groups, i = r.length, s = 0; s < i; ++s)
    for (var o = r[s], a = o.length, u, f = 0; f < a; ++f)
      (u = o[f]) && oe(u, t, n, f, o, e || Vf(u, n));
  return new j(r, this._parents, t, n);
}
gn.prototype.interrupt = Vu;
gn.prototype.transition = Uf;
var D = "$";
function Bn() {
}
Bn.prototype = ys.prototype = {
  constructor: Bn,
  has: function(t) {
    return D + t in this;
  },
  get: function(t) {
    return this[D + t];
  },
  set: function(t, n) {
    return this[D + t] = n, this;
  },
  remove: function(t) {
    var n = D + t;
    return n in this && delete this[n];
  },
  clear: function() {
    for (var t in this)
      t[0] === D && delete this[t];
  },
  keys: function() {
    var t = [];
    for (var n in this)
      n[0] === D && t.push(n.slice(1));
    return t;
  },
  values: function() {
    var t = [];
    for (var n in this)
      n[0] === D && t.push(this[n]);
    return t;
  },
  entries: function() {
    var t = [];
    for (var n in this)
      n[0] === D && t.push({ key: n.slice(1), value: this[n] });
    return t;
  },
  size: function() {
    var t = 0;
    for (var n in this)
      n[0] === D && ++t;
    return t;
  },
  empty: function() {
    for (var t in this)
      if (t[0] === D)
        return !1;
    return !0;
  },
  each: function(t) {
    for (var n in this)
      n[0] === D && t(this[n], n.slice(1), this);
  }
};
function ys(t, n) {
  var e = new Bn();
  if (t instanceof Bn)
    t.each(function(a, u) {
      e.set(u, a);
    });
  else if (Array.isArray(t)) {
    var r = -1, i = t.length, s;
    if (n == null)
      for (; ++r < i; )
        e.set(r, t[r]);
    else
      for (; ++r < i; )
        e.set(n(s = t[r], r, t), s);
  } else if (t)
    for (var o in t)
      e.set(o, t[o]);
  return e;
}
function jr() {
}
var ut = ys.prototype;
jr.prototype = {
  constructor: jr,
  has: ut.has,
  add: function(t) {
    return t += "", this[D + t] = t, this;
  },
  remove: ut.remove,
  clear: ut.clear,
  values: ut.keys,
  size: ut.size,
  empty: ut.empty,
  each: ut.each
};
function vr(t, n, e) {
  t.prototype = n.prototype = e, e.constructor = t;
}
function _s(t, n) {
  var e = Object.create(t.prototype);
  for (var r in n)
    e[r] = n[r];
  return e;
}
function xn() {
}
var rn = 0.7, Vn = 1 / rn, _t = "\\s*([+-]?\\d+)\\s*", sn = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*", K = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*", Yf = /^#([0-9a-f]{3,8})$/, Gf = new RegExp("^rgb\\(" + [_t, _t, _t] + "\\)$"), Wf = new RegExp("^rgb\\(" + [K, K, K] + "\\)$"), Kf = new RegExp("^rgba\\(" + [_t, _t, _t, sn] + "\\)$"), Zf = new RegExp("^rgba\\(" + [K, K, K, sn] + "\\)$"), Jf = new RegExp("^hsl\\(" + [sn, K, K] + "\\)$"), Qf = new RegExp("^hsla\\(" + [sn, K, K, sn] + "\\)$"), ti = {
  aliceblue: 15792383,
  antiquewhite: 16444375,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 15794175,
  beige: 16119260,
  bisque: 16770244,
  black: 0,
  blanchedalmond: 16772045,
  blue: 255,
  blueviolet: 9055202,
  brown: 10824234,
  burlywood: 14596231,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 13789470,
  coral: 16744272,
  cornflowerblue: 6591981,
  cornsilk: 16775388,
  crimson: 14423100,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 12092939,
  darkgray: 11119017,
  darkgreen: 25600,
  darkgrey: 11119017,
  darkkhaki: 12433259,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 16747520,
  darkorchid: 10040012,
  darkred: 9109504,
  darksalmon: 15308410,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 16716947,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 11674146,
  floralwhite: 16775920,
  forestgreen: 2263842,
  fuchsia: 16711935,
  gainsboro: 14474460,
  ghostwhite: 16316671,
  gold: 16766720,
  goldenrod: 14329120,
  gray: 8421504,
  green: 32768,
  greenyellow: 11403055,
  grey: 8421504,
  honeydew: 15794160,
  hotpink: 16738740,
  indianred: 13458524,
  indigo: 4915330,
  ivory: 16777200,
  khaki: 15787660,
  lavender: 15132410,
  lavenderblush: 16773365,
  lawngreen: 8190976,
  lemonchiffon: 16775885,
  lightblue: 11393254,
  lightcoral: 15761536,
  lightcyan: 14745599,
  lightgoldenrodyellow: 16448210,
  lightgray: 13882323,
  lightgreen: 9498256,
  lightgrey: 13882323,
  lightpink: 16758465,
  lightsalmon: 16752762,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 11584734,
  lightyellow: 16777184,
  lime: 65280,
  limegreen: 3329330,
  linen: 16445670,
  magenta: 16711935,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 12211667,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 13047173,
  midnightblue: 1644912,
  mintcream: 16121850,
  mistyrose: 16770273,
  moccasin: 16770229,
  navajowhite: 16768685,
  navy: 128,
  oldlace: 16643558,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 16753920,
  orangered: 16729344,
  orchid: 14315734,
  palegoldenrod: 15657130,
  palegreen: 10025880,
  paleturquoise: 11529966,
  palevioletred: 14381203,
  papayawhip: 16773077,
  peachpuff: 16767673,
  peru: 13468991,
  pink: 16761035,
  plum: 14524637,
  powderblue: 11591910,
  purple: 8388736,
  rebeccapurple: 6697881,
  red: 16711680,
  rosybrown: 12357519,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 16416882,
  sandybrown: 16032864,
  seagreen: 3050327,
  seashell: 16774638,
  sienna: 10506797,
  silver: 12632256,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 16775930,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 13808780,
  teal: 32896,
  thistle: 14204888,
  tomato: 16737095,
  turquoise: 4251856,
  violet: 15631086,
  wheat: 16113331,
  white: 16777215,
  whitesmoke: 16119285,
  yellow: 16776960,
  yellowgreen: 10145074
};
vr(xn, on, {
  copy: function(t) {
    return Object.assign(new this.constructor(), this, t);
  },
  displayable: function() {
    return this.rgb().displayable();
  },
  hex: ni,
  // Deprecated! Use color.formatHex.
  formatHex: ni,
  formatHsl: jf,
  formatRgb: ei,
  toString: ei
});
function ni() {
  return this.rgb().formatHex();
}
function jf() {
  return vs(this).formatHsl();
}
function ei() {
  return this.rgb().formatRgb();
}
function on(t) {
  var n, e;
  return t = (t + "").trim().toLowerCase(), (n = Yf.exec(t)) ? (e = n[1].length, n = parseInt(n[1], 16), e === 6 ? ri(n) : e === 3 ? new L(n >> 8 & 15 | n >> 4 & 240, n >> 4 & 15 | n & 240, (n & 15) << 4 | n & 15, 1) : e === 8 ? An(n >> 24 & 255, n >> 16 & 255, n >> 8 & 255, (n & 255) / 255) : e === 4 ? An(n >> 12 & 15 | n >> 8 & 240, n >> 8 & 15 | n >> 4 & 240, n >> 4 & 15 | n & 240, ((n & 15) << 4 | n & 15) / 255) : null) : (n = Gf.exec(t)) ? new L(n[1], n[2], n[3], 1) : (n = Wf.exec(t)) ? new L(n[1] * 255 / 100, n[2] * 255 / 100, n[3] * 255 / 100, 1) : (n = Kf.exec(t)) ? An(n[1], n[2], n[3], n[4]) : (n = Zf.exec(t)) ? An(n[1] * 255 / 100, n[2] * 255 / 100, n[3] * 255 / 100, n[4]) : (n = Jf.exec(t)) ? oi(n[1], n[2] / 100, n[3] / 100, 1) : (n = Qf.exec(t)) ? oi(n[1], n[2] / 100, n[3] / 100, n[4]) : ti.hasOwnProperty(t) ? ri(ti[t]) : t === "transparent" ? new L(NaN, NaN, NaN, 0) : null;
}
function ri(t) {
  return new L(t >> 16 & 255, t >> 8 & 255, t & 255, 1);
}
function An(t, n, e, r) {
  return r <= 0 && (t = n = e = NaN), new L(t, n, e, r);
}
function tl(t) {
  return t instanceof xn || (t = on(t)), t ? (t = t.rgb(), new L(t.r, t.g, t.b, t.opacity)) : new L();
}
function Ue(t, n, e, r) {
  return arguments.length === 1 ? tl(t) : new L(t, n, e, r ?? 1);
}
function L(t, n, e, r) {
  this.r = +t, this.g = +n, this.b = +e, this.opacity = +r;
}
vr(L, Ue, _s(xn, {
  brighter: function(t) {
    return t = t == null ? Vn : Math.pow(Vn, t), new L(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  darker: function(t) {
    return t = t == null ? rn : Math.pow(rn, t), new L(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  rgb: function() {
    return this;
  },
  displayable: function() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: ii,
  // Deprecated! Use color.formatHex.
  formatHex: ii,
  formatRgb: si,
  toString: si
}));
function ii() {
  return "#" + Ne(this.r) + Ne(this.g) + Ne(this.b);
}
function si() {
  var t = this.opacity;
  return t = isNaN(t) ? 1 : Math.max(0, Math.min(1, t)), (t === 1 ? "rgb(" : "rgba(") + Math.max(0, Math.min(255, Math.round(this.r) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.g) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.b) || 0)) + (t === 1 ? ")" : ", " + t + ")");
}
function Ne(t) {
  return t = Math.max(0, Math.min(255, Math.round(t) || 0)), (t < 16 ? "0" : "") + t.toString(16);
}
function oi(t, n, e, r) {
  return r <= 0 ? t = n = e = NaN : e <= 0 || e >= 1 ? t = n = NaN : n <= 0 && (t = NaN), new Y(t, n, e, r);
}
function vs(t) {
  if (t instanceof Y)
    return new Y(t.h, t.s, t.l, t.opacity);
  if (t instanceof xn || (t = on(t)), !t)
    return new Y();
  if (t instanceof Y)
    return t;
  t = t.rgb();
  var n = t.r / 255, e = t.g / 255, r = t.b / 255, i = Math.min(n, e, r), s = Math.max(n, e, r), o = NaN, a = s - i, u = (s + i) / 2;
  return a ? (n === s ? o = (e - r) / a + (e < r) * 6 : e === s ? o = (r - n) / a + 2 : o = (n - e) / a + 4, a /= u < 0.5 ? s + i : 2 - s - i, o *= 60) : a = u > 0 && u < 1 ? 0 : o, new Y(o, a, u, t.opacity);
}
function nl(t, n, e, r) {
  return arguments.length === 1 ? vs(t) : new Y(t, n, e, r ?? 1);
}
function Y(t, n, e, r) {
  this.h = +t, this.s = +n, this.l = +e, this.opacity = +r;
}
vr(Y, nl, _s(xn, {
  brighter: function(t) {
    return t = t == null ? Vn : Math.pow(Vn, t), new Y(this.h, this.s, this.l * t, this.opacity);
  },
  darker: function(t) {
    return t = t == null ? rn : Math.pow(rn, t), new Y(this.h, this.s, this.l * t, this.opacity);
  },
  rgb: function() {
    var t = this.h % 360 + (this.h < 0) * 360, n = isNaN(t) || isNaN(this.s) ? 0 : this.s, e = this.l, r = e + (e < 0.5 ? e : 1 - e) * n, i = 2 * e - r;
    return new L(
      Ae(t >= 240 ? t - 240 : t + 120, i, r),
      Ae(t, i, r),
      Ae(t < 120 ? t + 240 : t - 120, i, r),
      this.opacity
    );
  },
  displayable: function() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl: function() {
    var t = this.opacity;
    return t = isNaN(t) ? 1 : Math.max(0, Math.min(1, t)), (t === 1 ? "hsl(" : "hsla(") + (this.h || 0) + ", " + (this.s || 0) * 100 + "%, " + (this.l || 0) * 100 + "%" + (t === 1 ? ")" : ", " + t + ")");
  }
}));
function Ae(t, n, e) {
  return (t < 60 ? n + (e - n) * t / 60 : t < 180 ? e : t < 240 ? n + (e - n) * (240 - t) / 60 : n) * 255;
}
var el = { value: function() {
} };
function ms() {
  for (var t = 0, n = arguments.length, e = {}, r; t < n; ++t) {
    if (!(r = arguments[t] + "") || r in e || /[\s.]/.test(r))
      throw new Error("illegal type: " + r);
    e[r] = [];
  }
  return new Tn(e);
}
function Tn(t) {
  this._ = t;
}
function rl(t, n) {
  return t.trim().split(/^|\s+/).map(function(e) {
    var r = "", i = e.indexOf(".");
    if (i >= 0 && (r = e.slice(i + 1), e = e.slice(0, i)), e && !n.hasOwnProperty(e))
      throw new Error("unknown type: " + e);
    return { type: e, name: r };
  });
}
Tn.prototype = ms.prototype = {
  constructor: Tn,
  on: function(t, n) {
    var e = this._, r = rl(t + "", e), i, s = -1, o = r.length;
    if (arguments.length < 2) {
      for (; ++s < o; )
        if ((i = (t = r[s]).type) && (i = il(e[i], t.name)))
          return i;
      return;
    }
    if (n != null && typeof n != "function")
      throw new Error("invalid callback: " + n);
    for (; ++s < o; )
      if (i = (t = r[s]).type)
        e[i] = ai(e[i], t.name, n);
      else if (n == null)
        for (i in e)
          e[i] = ai(e[i], t.name, null);
    return this;
  },
  copy: function() {
    var t = {}, n = this._;
    for (var e in n)
      t[e] = n[e].slice();
    return new Tn(t);
  },
  call: function(t, n) {
    if ((i = arguments.length - 2) > 0)
      for (var e = new Array(i), r = 0, i, s; r < i; ++r)
        e[r] = arguments[r + 2];
    if (!this._.hasOwnProperty(t))
      throw new Error("unknown type: " + t);
    for (s = this._[t], r = 0, i = s.length; r < i; ++r)
      s[r].value.apply(n, e);
  },
  apply: function(t, n, e) {
    if (!this._.hasOwnProperty(t))
      throw new Error("unknown type: " + t);
    for (var r = this._[t], i = 0, s = r.length; i < s; ++i)
      r[i].value.apply(n, e);
  }
};
function il(t, n) {
  for (var e = 0, r = t.length, i; e < r; ++e)
    if ((i = t[e]).name === n)
      return i.value;
}
function ai(t, n, e) {
  for (var r = 0, i = t.length; r < i; ++r)
    if (t[r].name === n) {
      t[r] = el, t = t.slice(0, r).concat(t.slice(r + 1));
      break;
    }
  return e != null && t.push({ name: n, value: e }), t;
}
function sl(t) {
  return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
}
function ws(t) {
  return function() {
    return t;
  };
}
function ol(t, n) {
  return function(e) {
    return t + e * n;
  };
}
function al(t, n, e) {
  return t = Math.pow(t, e), n = Math.pow(n, e) - t, e = 1 / e, function(r) {
    return Math.pow(t + r * n, e);
  };
}
function ul(t) {
  return (t = +t) == 1 ? $s : function(n, e) {
    return e - n ? al(n, e, t) : ws(isNaN(n) ? e : n);
  };
}
function $s(t, n) {
  var e = n - t;
  return e ? ol(t, e) : ws(isNaN(t) ? n : t);
}
const ui = function t(n) {
  var e = ul(n);
  function r(i, s) {
    var o = e((i = Ue(i)).r, (s = Ue(s)).r), a = e(i.g, s.g), u = e(i.b, s.b), f = $s(i.opacity, s.opacity);
    return function(l) {
      return i.r = o(l), i.g = a(l), i.b = u(l), i.opacity = f(l), i + "";
    };
  }
  return r.gamma = t, r;
}(1);
function ot(t, n) {
  return t = +t, n = +n, function(e) {
    return t * (1 - e) + n * e;
  };
}
var Ye = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, Ce = new RegExp(Ye.source, "g");
function fl(t) {
  return function() {
    return t;
  };
}
function ll(t) {
  return function(n) {
    return t(n) + "";
  };
}
function cl(t, n) {
  var e = Ye.lastIndex = Ce.lastIndex = 0, r, i, s, o = -1, a = [], u = [];
  for (t = t + "", n = n + ""; (r = Ye.exec(t)) && (i = Ce.exec(n)); )
    (s = i.index) > e && (s = n.slice(e, s), a[o] ? a[o] += s : a[++o] = s), (r = r[0]) === (i = i[0]) ? a[o] ? a[o] += i : a[++o] = i : (a[++o] = null, u.push({ i: o, x: ot(r, i) })), e = Ce.lastIndex;
  return e < n.length && (s = n.slice(e), a[o] ? a[o] += s : a[++o] = s), a.length < 2 ? u[0] ? ll(u[0].x) : fl(n) : (n = u.length, function(f) {
    for (var l = 0, c; l < n; ++l)
      a[(c = u[l]).i] = c.x(f);
    return a.join("");
  });
}
var fi = 180 / Math.PI, Ge = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function bs(t, n, e, r, i, s) {
  var o, a, u;
  return (o = Math.sqrt(t * t + n * n)) && (t /= o, n /= o), (u = t * e + n * r) && (e -= t * u, r -= n * u), (a = Math.sqrt(e * e + r * r)) && (e /= a, r /= a, u /= a), t * r < n * e && (t = -t, n = -n, u = -u, o = -o), {
    translateX: i,
    translateY: s,
    rotate: Math.atan2(n, t) * fi,
    skewX: Math.atan(u) * fi,
    scaleX: o,
    scaleY: a
  };
}
var Lt, Me, li, Cn;
function hl(t) {
  return t === "none" ? Ge : (Lt || (Lt = document.createElement("DIV"), Me = document.documentElement, li = document.defaultView), Lt.style.transform = t, t = li.getComputedStyle(Me.appendChild(Lt), null).getPropertyValue("transform"), Me.removeChild(Lt), t = t.slice(7, -1).split(","), bs(+t[0], +t[1], +t[2], +t[3], +t[4], +t[5]));
}
function dl(t) {
  return t == null || (Cn || (Cn = document.createElementNS("http://www.w3.org/2000/svg", "g")), Cn.setAttribute("transform", t), !(t = Cn.transform.baseVal.consolidate())) ? Ge : (t = t.matrix, bs(t.a, t.b, t.c, t.d, t.e, t.f));
}
function Ns(t, n, e, r) {
  function i(f) {
    return f.length ? f.pop() + " " : "";
  }
  function s(f, l, c, h, d, g) {
    if (f !== c || l !== h) {
      var p = d.push("translate(", null, n, null, e);
      g.push({ i: p - 4, x: ot(f, c) }, { i: p - 2, x: ot(l, h) });
    } else
      (c || h) && d.push("translate(" + c + n + h + e);
  }
  function o(f, l, c, h) {
    f !== l ? (f - l > 180 ? l += 360 : l - f > 180 && (f += 360), h.push({ i: c.push(i(c) + "rotate(", null, r) - 2, x: ot(f, l) })) : l && c.push(i(c) + "rotate(" + l + r);
  }
  function a(f, l, c, h) {
    f !== l ? h.push({ i: c.push(i(c) + "skewX(", null, r) - 2, x: ot(f, l) }) : l && c.push(i(c) + "skewX(" + l + r);
  }
  function u(f, l, c, h, d, g) {
    if (f !== c || l !== h) {
      var p = d.push(i(d) + "scale(", null, ",", null, ")");
      g.push({ i: p - 4, x: ot(f, c) }, { i: p - 2, x: ot(l, h) });
    } else
      (c !== 1 || h !== 1) && d.push(i(d) + "scale(" + c + "," + h + ")");
  }
  return function(f, l) {
    var c = [], h = [];
    return f = t(f), l = t(l), s(f.translateX, f.translateY, l.translateX, l.translateY, c, h), o(f.rotate, l.rotate, c, h), a(f.skewX, l.skewX, c, h), u(f.scaleX, f.scaleY, l.scaleX, l.scaleY, c, h), f = l = null, function(d) {
      for (var g = -1, p = h.length, x; ++g < p; )
        c[(x = h[g]).i] = x.x(d);
      return c.join("");
    };
  };
}
var pl = Ns(hl, "px, ", "px)", "deg)"), gl = Ns(dl, ", ", ")", ")");
function Et() {
  return Math.random();
}
(function t(n) {
  function e(r, i) {
    return r = r == null ? 0 : +r, i = i == null ? 1 : +i, arguments.length === 1 ? (i = r, r = 0) : i -= r, function() {
      return n() * i + r;
    };
  }
  return e.source = t, e;
})(Et);
const xl = function t(n) {
  function e(r, i) {
    var s, o;
    return r = r == null ? 0 : +r, i = i == null ? 1 : +i, function() {
      var a;
      if (s != null)
        a = s, s = null;
      else
        do
          s = n() * 2 - 1, a = n() * 2 - 1, o = s * s + a * a;
        while (!o || o > 1);
      return r + i * a * Math.sqrt(-2 * Math.log(o) / o);
    };
  }
  return e.source = t, e;
}(Et);
(function t(n) {
  function e() {
    var r = xl.source(n).apply(this, arguments);
    return function() {
      return Math.exp(r());
    };
  }
  return e.source = t, e;
})(Et);
const yl = function t(n) {
  function e(r) {
    return function() {
      for (var i = 0, s = 0; s < r; ++s)
        i += n();
      return i;
    };
  }
  return e.source = t, e;
}(Et);
(function t(n) {
  function e(r) {
    var i = yl.source(n)(r);
    return function() {
      return i() / r;
    };
  }
  return e.source = t, e;
})(Et);
(function t(n) {
  function e(r) {
    return function() {
      return -Math.log(1 - n()) / r;
    };
  }
  return e.source = t, e;
})(Et);
var We = "http://www.w3.org/1999/xhtml";
const ci = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: We,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function ae(t) {
  var n = t += "", e = n.indexOf(":");
  return e >= 0 && (n = t.slice(0, e)) !== "xmlns" && (t = t.slice(e + 1)), ci.hasOwnProperty(n) ? { space: ci[n], local: t } : t;
}
function _l(t) {
  return function() {
    var n = this.ownerDocument, e = this.namespaceURI;
    return e === We && n.documentElement.namespaceURI === We ? n.createElement(t) : n.createElementNS(e, t);
  };
}
function vl(t) {
  return function() {
    return this.ownerDocument.createElementNS(t.space, t.local);
  };
}
function As(t) {
  var n = ae(t);
  return (n.local ? vl : _l)(n);
}
function ml() {
}
function mr(t) {
  return t == null ? ml : function() {
    return this.querySelector(t);
  };
}
function wl(t) {
  typeof t != "function" && (t = mr(t));
  for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
    for (var s = n[i], o = s.length, a = r[i] = new Array(o), u, f, l = 0; l < o; ++l)
      (u = s[l]) && (f = t.call(u, u.__data__, l, s)) && ("__data__" in u && (f.__data__ = u.__data__), a[l] = f);
  return new O(r, this._parents);
}
function $l() {
  return [];
}
function Cs(t) {
  return t == null ? $l : function() {
    return this.querySelectorAll(t);
  };
}
function bl(t) {
  typeof t != "function" && (t = Cs(t));
  for (var n = this._groups, e = n.length, r = [], i = [], s = 0; s < e; ++s)
    for (var o = n[s], a = o.length, u, f = 0; f < a; ++f)
      (u = o[f]) && (r.push(t.call(u, u.__data__, f, o)), i.push(u));
  return new O(r, i);
}
function Ms(t) {
  return function() {
    return this.matches(t);
  };
}
function Nl(t) {
  typeof t != "function" && (t = Ms(t));
  for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
    for (var s = n[i], o = s.length, a = r[i] = [], u, f = 0; f < o; ++f)
      (u = s[f]) && t.call(u, u.__data__, f, s) && a.push(u);
  return new O(r, this._parents);
}
function Rs(t) {
  return new Array(t.length);
}
function Al() {
  return new O(this._enter || this._groups.map(Rs), this._parents);
}
function Un(t, n) {
  this.ownerDocument = t.ownerDocument, this.namespaceURI = t.namespaceURI, this._next = null, this._parent = t, this.__data__ = n;
}
Un.prototype = {
  constructor: Un,
  appendChild: function(t) {
    return this._parent.insertBefore(t, this._next);
  },
  insertBefore: function(t, n) {
    return this._parent.insertBefore(t, n);
  },
  querySelector: function(t) {
    return this._parent.querySelector(t);
  },
  querySelectorAll: function(t) {
    return this._parent.querySelectorAll(t);
  }
};
function Cl(t) {
  return function() {
    return t;
  };
}
var hi = "$";
function Ml(t, n, e, r, i, s) {
  for (var o = 0, a, u = n.length, f = s.length; o < f; ++o)
    (a = n[o]) ? (a.__data__ = s[o], r[o] = a) : e[o] = new Un(t, s[o]);
  for (; o < u; ++o)
    (a = n[o]) && (i[o] = a);
}
function Rl(t, n, e, r, i, s, o) {
  var a, u, f = {}, l = n.length, c = s.length, h = new Array(l), d;
  for (a = 0; a < l; ++a)
    (u = n[a]) && (h[a] = d = hi + o.call(u, u.__data__, a, n), d in f ? i[a] = u : f[d] = u);
  for (a = 0; a < c; ++a)
    d = hi + o.call(t, s[a], a, s), (u = f[d]) ? (r[a] = u, u.__data__ = s[a], f[d] = null) : e[a] = new Un(t, s[a]);
  for (a = 0; a < l; ++a)
    (u = n[a]) && f[h[a]] === u && (i[a] = u);
}
function El(t, n) {
  if (!t)
    return d = new Array(this.size()), f = -1, this.each(function(_) {
      d[++f] = _;
    }), d;
  var e = n ? Rl : Ml, r = this._parents, i = this._groups;
  typeof t != "function" && (t = Cl(t));
  for (var s = i.length, o = new Array(s), a = new Array(s), u = new Array(s), f = 0; f < s; ++f) {
    var l = r[f], c = i[f], h = c.length, d = t.call(l, l && l.__data__, f, r), g = d.length, p = a[f] = new Array(g), x = o[f] = new Array(g), $ = u[f] = new Array(h);
    e(l, c, p, x, $, d, n);
    for (var v = 0, y = 0, b, N; v < g; ++v)
      if (b = p[v]) {
        for (v >= y && (y = v + 1); !(N = x[y]) && ++y < g; )
          ;
        b._next = N || null;
      }
  }
  return o = new O(o, r), o._enter = a, o._exit = u, o;
}
function kl() {
  return new O(this._exit || this._groups.map(Rs), this._parents);
}
function Sl(t, n, e) {
  var r = this.enter(), i = this, s = this.exit();
  return r = typeof t == "function" ? t(r) : r.append(t + ""), n != null && (i = n(i)), e == null ? s.remove() : e(s), r && i ? r.merge(i).order() : i;
}
function Tl(t) {
  for (var n = this._groups, e = t._groups, r = n.length, i = e.length, s = Math.min(r, i), o = new Array(r), a = 0; a < s; ++a)
    for (var u = n[a], f = e[a], l = u.length, c = o[a] = new Array(l), h, d = 0; d < l; ++d)
      (h = u[d] || f[d]) && (c[d] = h);
  for (; a < r; ++a)
    o[a] = n[a];
  return new O(o, this._parents);
}
function Il() {
  for (var t = this._groups, n = -1, e = t.length; ++n < e; )
    for (var r = t[n], i = r.length - 1, s = r[i], o; --i >= 0; )
      (o = r[i]) && (s && o.compareDocumentPosition(s) ^ 4 && s.parentNode.insertBefore(o, s), s = o);
  return this;
}
function Pl(t) {
  t || (t = Ll);
  function n(c, h) {
    return c && h ? t(c.__data__, h.__data__) : !c - !h;
  }
  for (var e = this._groups, r = e.length, i = new Array(r), s = 0; s < r; ++s) {
    for (var o = e[s], a = o.length, u = i[s] = new Array(a), f, l = 0; l < a; ++l)
      (f = o[l]) && (u[l] = f);
    u.sort(n);
  }
  return new O(i, this._parents).order();
}
function Ll(t, n) {
  return t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN;
}
function Fl() {
  var t = arguments[0];
  return arguments[0] = this, t.apply(null, arguments), this;
}
function Ol() {
  var t = new Array(this.size()), n = -1;
  return this.each(function() {
    t[++n] = this;
  }), t;
}
function zl() {
  for (var t = this._groups, n = 0, e = t.length; n < e; ++n)
    for (var r = t[n], i = 0, s = r.length; i < s; ++i) {
      var o = r[i];
      if (o)
        return o;
    }
  return null;
}
function Dl() {
  var t = 0;
  return this.each(function() {
    ++t;
  }), t;
}
function ql() {
  return !this.node();
}
function Hl(t) {
  for (var n = this._groups, e = 0, r = n.length; e < r; ++e)
    for (var i = n[e], s = 0, o = i.length, a; s < o; ++s)
      (a = i[s]) && t.call(a, a.__data__, s, i);
  return this;
}
function Xl(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function Bl(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function Vl(t, n) {
  return function() {
    this.setAttribute(t, n);
  };
}
function Ul(t, n) {
  return function() {
    this.setAttributeNS(t.space, t.local, n);
  };
}
function Yl(t, n) {
  return function() {
    var e = n.apply(this, arguments);
    e == null ? this.removeAttribute(t) : this.setAttribute(t, e);
  };
}
function Gl(t, n) {
  return function() {
    var e = n.apply(this, arguments);
    e == null ? this.removeAttributeNS(t.space, t.local) : this.setAttributeNS(t.space, t.local, e);
  };
}
function Wl(t, n) {
  var e = ae(t);
  if (arguments.length < 2) {
    var r = this.node();
    return e.local ? r.getAttributeNS(e.space, e.local) : r.getAttribute(e);
  }
  return this.each((n == null ? e.local ? Bl : Xl : typeof n == "function" ? e.local ? Gl : Yl : e.local ? Ul : Vl)(e, n));
}
function Es(t) {
  return t.ownerDocument && t.ownerDocument.defaultView || t.document && t || t.defaultView;
}
function Kl(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function Zl(t, n, e) {
  return function() {
    this.style.setProperty(t, n, e);
  };
}
function Jl(t, n, e) {
  return function() {
    var r = n.apply(this, arguments);
    r == null ? this.style.removeProperty(t) : this.style.setProperty(t, r, e);
  };
}
function Ql(t, n, e) {
  return arguments.length > 1 ? this.each((n == null ? Kl : typeof n == "function" ? Jl : Zl)(t, n, e ?? "")) : At(this.node(), t);
}
function At(t, n) {
  return t.style.getPropertyValue(n) || Es(t).getComputedStyle(t, null).getPropertyValue(n);
}
function jl(t) {
  return function() {
    delete this[t];
  };
}
function tc(t, n) {
  return function() {
    this[t] = n;
  };
}
function nc(t, n) {
  return function() {
    var e = n.apply(this, arguments);
    e == null ? delete this[t] : this[t] = e;
  };
}
function ec(t, n) {
  return arguments.length > 1 ? this.each((n == null ? jl : typeof n == "function" ? nc : tc)(t, n)) : this.node()[t];
}
function ks(t) {
  return t.trim().split(/^|\s+/);
}
function wr(t) {
  return t.classList || new Ss(t);
}
function Ss(t) {
  this._node = t, this._names = ks(t.getAttribute("class") || "");
}
Ss.prototype = {
  add: function(t) {
    var n = this._names.indexOf(t);
    n < 0 && (this._names.push(t), this._node.setAttribute("class", this._names.join(" ")));
  },
  remove: function(t) {
    var n = this._names.indexOf(t);
    n >= 0 && (this._names.splice(n, 1), this._node.setAttribute("class", this._names.join(" ")));
  },
  contains: function(t) {
    return this._names.indexOf(t) >= 0;
  }
};
function Ts(t, n) {
  for (var e = wr(t), r = -1, i = n.length; ++r < i; )
    e.add(n[r]);
}
function Is(t, n) {
  for (var e = wr(t), r = -1, i = n.length; ++r < i; )
    e.remove(n[r]);
}
function rc(t) {
  return function() {
    Ts(this, t);
  };
}
function ic(t) {
  return function() {
    Is(this, t);
  };
}
function sc(t, n) {
  return function() {
    (n.apply(this, arguments) ? Ts : Is)(this, t);
  };
}
function oc(t, n) {
  var e = ks(t + "");
  if (arguments.length < 2) {
    for (var r = wr(this.node()), i = -1, s = e.length; ++i < s; )
      if (!r.contains(e[i]))
        return !1;
    return !0;
  }
  return this.each((typeof n == "function" ? sc : n ? rc : ic)(e, n));
}
function ac() {
  this.textContent = "";
}
function uc(t) {
  return function() {
    this.textContent = t;
  };
}
function fc(t) {
  return function() {
    var n = t.apply(this, arguments);
    this.textContent = n ?? "";
  };
}
function lc(t) {
  return arguments.length ? this.each(t == null ? ac : (typeof t == "function" ? fc : uc)(t)) : this.node().textContent;
}
function cc() {
  this.innerHTML = "";
}
function hc(t) {
  return function() {
    this.innerHTML = t;
  };
}
function dc(t) {
  return function() {
    var n = t.apply(this, arguments);
    this.innerHTML = n ?? "";
  };
}
function pc(t) {
  return arguments.length ? this.each(t == null ? cc : (typeof t == "function" ? dc : hc)(t)) : this.node().innerHTML;
}
function gc() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function xc() {
  return this.each(gc);
}
function yc() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function _c() {
  return this.each(yc);
}
function vc(t) {
  var n = typeof t == "function" ? t : As(t);
  return this.select(function() {
    return this.appendChild(n.apply(this, arguments));
  });
}
function mc() {
  return null;
}
function wc(t, n) {
  var e = typeof t == "function" ? t : As(t), r = n == null ? mc : typeof n == "function" ? n : mr(n);
  return this.select(function() {
    return this.insertBefore(e.apply(this, arguments), r.apply(this, arguments) || null);
  });
}
function $c() {
  var t = this.parentNode;
  t && t.removeChild(this);
}
function bc() {
  return this.each($c);
}
function Nc() {
  var t = this.cloneNode(!1), n = this.parentNode;
  return n ? n.insertBefore(t, this.nextSibling) : t;
}
function Ac() {
  var t = this.cloneNode(!0), n = this.parentNode;
  return n ? n.insertBefore(t, this.nextSibling) : t;
}
function Cc(t) {
  return this.select(t ? Ac : Nc);
}
function Mc(t) {
  return arguments.length ? this.property("__data__", t) : this.node().__data__;
}
var Ps = {}, Qt = null;
if (typeof document < "u") {
  var Rc = document.documentElement;
  "onmouseenter" in Rc || (Ps = { mouseenter: "mouseover", mouseleave: "mouseout" });
}
function Ec(t, n, e) {
  return t = Ls(t, n, e), function(r) {
    var i = r.relatedTarget;
    (!i || i !== this && !(i.compareDocumentPosition(this) & 8)) && t.call(this, r);
  };
}
function Ls(t, n, e) {
  return function(r) {
    var i = Qt;
    Qt = r;
    try {
      t.call(this, this.__data__, n, e);
    } finally {
      Qt = i;
    }
  };
}
function kc(t) {
  return t.trim().split(/^|\s+/).map(function(n) {
    var e = "", r = n.indexOf(".");
    return r >= 0 && (e = n.slice(r + 1), n = n.slice(0, r)), { type: n, name: e };
  });
}
function Sc(t) {
  return function() {
    var n = this.__on;
    if (n) {
      for (var e = 0, r = -1, i = n.length, s; e < i; ++e)
        s = n[e], (!t.type || s.type === t.type) && s.name === t.name ? this.removeEventListener(s.type, s.listener, s.capture) : n[++r] = s;
      ++r ? n.length = r : delete this.__on;
    }
  };
}
function Tc(t, n, e) {
  var r = Ps.hasOwnProperty(t.type) ? Ec : Ls;
  return function(i, s, o) {
    var a = this.__on, u, f = r(n, s, o);
    if (a) {
      for (var l = 0, c = a.length; l < c; ++l)
        if ((u = a[l]).type === t.type && u.name === t.name) {
          this.removeEventListener(u.type, u.listener, u.capture), this.addEventListener(u.type, u.listener = f, u.capture = e), u.value = n;
          return;
        }
    }
    this.addEventListener(t.type, f, e), u = { type: t.type, name: t.name, value: n, listener: f, capture: e }, a ? a.push(u) : this.__on = [u];
  };
}
function Ic(t, n, e) {
  var r = kc(t + ""), i, s = r.length, o;
  if (arguments.length < 2) {
    var a = this.node().__on;
    if (a) {
      for (var u = 0, f = a.length, l; u < f; ++u)
        for (i = 0, l = a[u]; i < s; ++i)
          if ((o = r[i]).type === l.type && o.name === l.name)
            return l.value;
    }
    return;
  }
  for (a = n ? Tc : Sc, e == null && (e = !1), i = 0; i < s; ++i)
    this.each(a(r[i], n, e));
  return this;
}
function Fs(t, n, e) {
  var r = Es(t), i = r.CustomEvent;
  typeof i == "function" ? i = new i(n, e) : (i = r.document.createEvent("Event"), e ? (i.initEvent(n, e.bubbles, e.cancelable), i.detail = e.detail) : i.initEvent(n, !1, !1)), t.dispatchEvent(i);
}
function Pc(t, n) {
  return function() {
    return Fs(this, t, n);
  };
}
function Lc(t, n) {
  return function() {
    return Fs(this, t, n.apply(this, arguments));
  };
}
function Fc(t, n) {
  return this.each((typeof n == "function" ? Lc : Pc)(t, n));
}
var Os = [null];
function O(t, n) {
  this._groups = t, this._parents = n;
}
function yn() {
  return new O([[document.documentElement]], Os);
}
O.prototype = yn.prototype = {
  constructor: O,
  select: wl,
  selectAll: bl,
  filter: Nl,
  data: El,
  enter: Al,
  exit: kl,
  join: Sl,
  merge: Tl,
  order: Il,
  sort: Pl,
  call: Fl,
  nodes: Ol,
  node: zl,
  size: Dl,
  empty: ql,
  each: Hl,
  attr: Wl,
  style: Ql,
  property: ec,
  classed: oc,
  text: lc,
  html: pc,
  raise: xc,
  lower: _c,
  append: vc,
  insert: wc,
  remove: bc,
  clone: Cc,
  datum: Mc,
  on: Ic,
  dispatch: Fc
};
function Ft(t) {
  return typeof t == "string" ? new O([[document.querySelector(t)]], [document.documentElement]) : new O([[t]], Os);
}
var Ct = 0, Yt = 0, Ot = 0, zs = 1e3, Yn, Gt, Gn = 0, lt = 0, ue = 0, an = typeof performance == "object" && performance.now ? performance : Date, Ds = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(t) {
  setTimeout(t, 17);
};
function fe() {
  return lt || (Ds(Oc), lt = an.now() + ue);
}
function Oc() {
  lt = 0;
}
function Wn() {
  this._call = this._time = this._next = null;
}
Wn.prototype = qs.prototype = {
  constructor: Wn,
  restart: function(t, n, e) {
    if (typeof t != "function")
      throw new TypeError("callback is not a function");
    e = (e == null ? fe() : +e) + (n == null ? 0 : +n), !this._next && Gt !== this && (Gt ? Gt._next = this : Yn = this, Gt = this), this._call = t, this._time = e, Ke();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, Ke());
  }
};
function qs(t, n, e) {
  var r = new Wn();
  return r.restart(t, n, e), r;
}
function zc() {
  fe(), ++Ct;
  for (var t = Yn, n; t; )
    (n = lt - t._time) >= 0 && t._call.call(null, n), t = t._next;
  --Ct;
}
function di() {
  lt = (Gn = an.now()) + ue, Ct = Yt = 0;
  try {
    zc();
  } finally {
    Ct = 0, qc(), lt = 0;
  }
}
function Dc() {
  var t = an.now(), n = t - Gn;
  n > zs && (ue -= n, Gn = t);
}
function qc() {
  for (var t, n = Yn, e, r = 1 / 0; n; )
    n._call ? (r > n._time && (r = n._time), t = n, n = n._next) : (e = n._next, n._next = null, n = t ? t._next = e : Yn = e);
  Gt = t, Ke(r);
}
function Ke(t) {
  if (!Ct) {
    Yt && (Yt = clearTimeout(Yt));
    var n = t - lt;
    n > 24 ? (t < 1 / 0 && (Yt = setTimeout(di, t - an.now() - ue)), Ot && (Ot = clearInterval(Ot))) : (Ot || (Gn = an.now(), Ot = setInterval(Dc, zs)), Ct = 1, Ds(di));
  }
}
function pi(t, n, e) {
  var r = new Wn();
  return n = n == null ? 0 : +n, r.restart(function(i) {
    r.stop(), t(i + n);
  }, n, e), r;
}
var Hc = ms("start", "end", "cancel", "interrupt"), Xc = [], Hs = 0, gi = 1, Ze = 2, In = 3, xi = 4, Je = 5, Pn = 6;
function le(t, n, e, r, i, s) {
  var o = t.__transition;
  if (!o)
    t.__transition = {};
  else if (e in o)
    return;
  Bc(t, e, {
    name: n,
    index: r,
    // For context during callback.
    group: i,
    // For context during callback.
    on: Hc,
    tween: Xc,
    time: s.time,
    delay: s.delay,
    duration: s.duration,
    ease: s.ease,
    timer: null,
    state: Hs
  });
}
function $r(t, n) {
  var e = B(t, n);
  if (e.state > Hs)
    throw new Error("too late; already scheduled");
  return e;
}
function rt(t, n) {
  var e = B(t, n);
  if (e.state > In)
    throw new Error("too late; already running");
  return e;
}
function B(t, n) {
  var e = t.__transition;
  if (!e || !(e = e[n]))
    throw new Error("transition not found");
  return e;
}
function Bc(t, n, e) {
  var r = t.__transition, i;
  r[n] = e, e.timer = qs(s, 0, e.time);
  function s(f) {
    e.state = gi, e.timer.restart(o, e.delay, e.time), e.delay <= f && o(f - e.delay);
  }
  function o(f) {
    var l, c, h, d;
    if (e.state !== gi)
      return u();
    for (l in r)
      if (d = r[l], d.name === e.name) {
        if (d.state === In)
          return pi(o);
        d.state === xi ? (d.state = Pn, d.timer.stop(), d.on.call("interrupt", t, t.__data__, d.index, d.group), delete r[l]) : +l < n && (d.state = Pn, d.timer.stop(), d.on.call("cancel", t, t.__data__, d.index, d.group), delete r[l]);
      }
    if (pi(function() {
      e.state === In && (e.state = xi, e.timer.restart(a, e.delay, e.time), a(f));
    }), e.state = Ze, e.on.call("start", t, t.__data__, e.index, e.group), e.state === Ze) {
      for (e.state = In, i = new Array(h = e.tween.length), l = 0, c = -1; l < h; ++l)
        (d = e.tween[l].value.call(t, t.__data__, e.index, e.group)) && (i[++c] = d);
      i.length = c + 1;
    }
  }
  function a(f) {
    for (var l = f < e.duration ? e.ease.call(null, f / e.duration) : (e.timer.restart(u), e.state = Je, 1), c = -1, h = i.length; ++c < h; )
      i[c].call(t, l);
    e.state === Je && (e.on.call("end", t, t.__data__, e.index, e.group), u());
  }
  function u() {
    e.state = Pn, e.timer.stop(), delete r[n];
    for (var f in r)
      return;
    delete t.__transition;
  }
}
function Vc(t, n) {
  var e = t.__transition, r, i, s = !0, o;
  if (e) {
    n = n == null ? null : n + "";
    for (o in e) {
      if ((r = e[o]).name !== n) {
        s = !1;
        continue;
      }
      i = r.state > Ze && r.state < Je, r.state = Pn, r.timer.stop(), r.on.call(i ? "interrupt" : "cancel", t, t.__data__, r.index, r.group), delete e[o];
    }
    s && delete t.__transition;
  }
}
function Uc(t) {
  return this.each(function() {
    Vc(this, t);
  });
}
function Yc(t, n) {
  var e, r;
  return function() {
    var i = rt(this, t), s = i.tween;
    if (s !== e) {
      r = e = s;
      for (var o = 0, a = r.length; o < a; ++o)
        if (r[o].name === n) {
          r = r.slice(), r.splice(o, 1);
          break;
        }
    }
    i.tween = r;
  };
}
function Gc(t, n, e) {
  var r, i;
  if (typeof e != "function")
    throw new Error();
  return function() {
    var s = rt(this, t), o = s.tween;
    if (o !== r) {
      i = (r = o).slice();
      for (var a = { name: n, value: e }, u = 0, f = i.length; u < f; ++u)
        if (i[u].name === n) {
          i[u] = a;
          break;
        }
      u === f && i.push(a);
    }
    s.tween = i;
  };
}
function Wc(t, n) {
  var e = this._id;
  if (t += "", arguments.length < 2) {
    for (var r = B(this.node(), e).tween, i = 0, s = r.length, o; i < s; ++i)
      if ((o = r[i]).name === t)
        return o.value;
    return null;
  }
  return this.each((n == null ? Yc : Gc)(e, t, n));
}
function br(t, n, e) {
  var r = t._id;
  return t.each(function() {
    var i = rt(this, r);
    (i.value || (i.value = {}))[n] = e.apply(this, arguments);
  }), function(i) {
    return B(i, r).value[n];
  };
}
function Xs(t, n) {
  var e;
  return (typeof n == "number" ? ot : n instanceof on ? ui : (e = on(n)) ? (n = e, ui) : cl)(t, n);
}
function Kc(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function Zc(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function Jc(t, n, e) {
  var r, i = e + "", s;
  return function() {
    var o = this.getAttribute(t);
    return o === i ? null : o === r ? s : s = n(r = o, e);
  };
}
function Qc(t, n, e) {
  var r, i = e + "", s;
  return function() {
    var o = this.getAttributeNS(t.space, t.local);
    return o === i ? null : o === r ? s : s = n(r = o, e);
  };
}
function jc(t, n, e) {
  var r, i, s;
  return function() {
    var o, a = e(this), u;
    return a == null ? void this.removeAttribute(t) : (o = this.getAttribute(t), u = a + "", o === u ? null : o === r && u === i ? s : (i = u, s = n(r = o, a)));
  };
}
function th(t, n, e) {
  var r, i, s;
  return function() {
    var o, a = e(this), u;
    return a == null ? void this.removeAttributeNS(t.space, t.local) : (o = this.getAttributeNS(t.space, t.local), u = a + "", o === u ? null : o === r && u === i ? s : (i = u, s = n(r = o, a)));
  };
}
function nh(t, n) {
  var e = ae(t), r = e === "transform" ? gl : Xs;
  return this.attrTween(t, typeof n == "function" ? (e.local ? th : jc)(e, r, br(this, "attr." + t, n)) : n == null ? (e.local ? Zc : Kc)(e) : (e.local ? Qc : Jc)(e, r, n));
}
function eh(t, n) {
  return function(e) {
    this.setAttribute(t, n.call(this, e));
  };
}
function rh(t, n) {
  return function(e) {
    this.setAttributeNS(t.space, t.local, n.call(this, e));
  };
}
function ih(t, n) {
  var e, r;
  function i() {
    var s = n.apply(this, arguments);
    return s !== r && (e = (r = s) && rh(t, s)), e;
  }
  return i._value = n, i;
}
function sh(t, n) {
  var e, r;
  function i() {
    var s = n.apply(this, arguments);
    return s !== r && (e = (r = s) && eh(t, s)), e;
  }
  return i._value = n, i;
}
function oh(t, n) {
  var e = "attr." + t;
  if (arguments.length < 2)
    return (e = this.tween(e)) && e._value;
  if (n == null)
    return this.tween(e, null);
  if (typeof n != "function")
    throw new Error();
  var r = ae(t);
  return this.tween(e, (r.local ? ih : sh)(r, n));
}
function ah(t, n) {
  return function() {
    $r(this, t).delay = +n.apply(this, arguments);
  };
}
function uh(t, n) {
  return n = +n, function() {
    $r(this, t).delay = n;
  };
}
function fh(t) {
  var n = this._id;
  return arguments.length ? this.each((typeof t == "function" ? ah : uh)(n, t)) : B(this.node(), n).delay;
}
function lh(t, n) {
  return function() {
    rt(this, t).duration = +n.apply(this, arguments);
  };
}
function ch(t, n) {
  return n = +n, function() {
    rt(this, t).duration = n;
  };
}
function hh(t) {
  var n = this._id;
  return arguments.length ? this.each((typeof t == "function" ? lh : ch)(n, t)) : B(this.node(), n).duration;
}
function dh(t, n) {
  if (typeof n != "function")
    throw new Error();
  return function() {
    rt(this, t).ease = n;
  };
}
function ph(t) {
  var n = this._id;
  return arguments.length ? this.each(dh(n, t)) : B(this.node(), n).ease;
}
function gh(t) {
  typeof t != "function" && (t = Ms(t));
  for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
    for (var s = n[i], o = s.length, a = r[i] = [], u, f = 0; f < o; ++f)
      (u = s[f]) && t.call(u, u.__data__, f, s) && a.push(u);
  return new tt(r, this._parents, this._name, this._id);
}
function xh(t) {
  if (t._id !== this._id)
    throw new Error();
  for (var n = this._groups, e = t._groups, r = n.length, i = e.length, s = Math.min(r, i), o = new Array(r), a = 0; a < s; ++a)
    for (var u = n[a], f = e[a], l = u.length, c = o[a] = new Array(l), h, d = 0; d < l; ++d)
      (h = u[d] || f[d]) && (c[d] = h);
  for (; a < r; ++a)
    o[a] = n[a];
  return new tt(o, this._parents, this._name, this._id);
}
function yh(t) {
  return (t + "").trim().split(/^|\s+/).every(function(n) {
    var e = n.indexOf(".");
    return e >= 0 && (n = n.slice(0, e)), !n || n === "start";
  });
}
function _h(t, n, e) {
  var r, i, s = yh(n) ? $r : rt;
  return function() {
    var o = s(this, t), a = o.on;
    a !== r && (i = (r = a).copy()).on(n, e), o.on = i;
  };
}
function vh(t, n) {
  var e = this._id;
  return arguments.length < 2 ? B(this.node(), e).on.on(t) : this.each(_h(e, t, n));
}
function mh(t) {
  return function() {
    var n = this.parentNode;
    for (var e in this.__transition)
      if (+e !== t)
        return;
    n && n.removeChild(this);
  };
}
function wh() {
  return this.on("end.remove", mh(this._id));
}
function $h(t) {
  var n = this._name, e = this._id;
  typeof t != "function" && (t = mr(t));
  for (var r = this._groups, i = r.length, s = new Array(i), o = 0; o < i; ++o)
    for (var a = r[o], u = a.length, f = s[o] = new Array(u), l, c, h = 0; h < u; ++h)
      (l = a[h]) && (c = t.call(l, l.__data__, h, a)) && ("__data__" in l && (c.__data__ = l.__data__), f[h] = c, le(f[h], n, e, h, f, B(l, e)));
  return new tt(s, this._parents, n, e);
}
function bh(t) {
  var n = this._name, e = this._id;
  typeof t != "function" && (t = Cs(t));
  for (var r = this._groups, i = r.length, s = [], o = [], a = 0; a < i; ++a)
    for (var u = r[a], f = u.length, l, c = 0; c < f; ++c)
      if (l = u[c]) {
        for (var h = t.call(l, l.__data__, c, u), d, g = B(l, e), p = 0, x = h.length; p < x; ++p)
          (d = h[p]) && le(d, n, e, p, h, g);
        s.push(h), o.push(l);
      }
  return new tt(s, o, n, e);
}
var Nh = yn.prototype.constructor;
function Ah() {
  return new Nh(this._groups, this._parents);
}
function Ch(t, n) {
  var e, r, i;
  return function() {
    var s = At(this, t), o = (this.style.removeProperty(t), At(this, t));
    return s === o ? null : s === e && o === r ? i : i = n(e = s, r = o);
  };
}
function Bs(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function Mh(t, n, e) {
  var r, i = e + "", s;
  return function() {
    var o = At(this, t);
    return o === i ? null : o === r ? s : s = n(r = o, e);
  };
}
function Rh(t, n, e) {
  var r, i, s;
  return function() {
    var o = At(this, t), a = e(this), u = a + "";
    return a == null && (u = a = (this.style.removeProperty(t), At(this, t))), o === u ? null : o === r && u === i ? s : (i = u, s = n(r = o, a));
  };
}
function Eh(t, n) {
  var e, r, i, s = "style." + n, o = "end." + s, a;
  return function() {
    var u = rt(this, t), f = u.on, l = u.value[s] == null ? a || (a = Bs(n)) : void 0;
    (f !== e || i !== l) && (r = (e = f).copy()).on(o, i = l), u.on = r;
  };
}
function kh(t, n, e) {
  var r = (t += "") == "transform" ? pl : Xs;
  return n == null ? this.styleTween(t, Ch(t, r)).on("end.style." + t, Bs(t)) : typeof n == "function" ? this.styleTween(t, Rh(t, r, br(this, "style." + t, n))).each(Eh(this._id, t)) : this.styleTween(t, Mh(t, r, n), e).on("end.style." + t, null);
}
function Sh(t, n, e) {
  return function(r) {
    this.style.setProperty(t, n.call(this, r), e);
  };
}
function Th(t, n, e) {
  var r, i;
  function s() {
    var o = n.apply(this, arguments);
    return o !== i && (r = (i = o) && Sh(t, o, e)), r;
  }
  return s._value = n, s;
}
function Ih(t, n, e) {
  var r = "style." + (t += "");
  if (arguments.length < 2)
    return (r = this.tween(r)) && r._value;
  if (n == null)
    return this.tween(r, null);
  if (typeof n != "function")
    throw new Error();
  return this.tween(r, Th(t, n, e ?? ""));
}
function Ph(t) {
  return function() {
    this.textContent = t;
  };
}
function Lh(t) {
  return function() {
    var n = t(this);
    this.textContent = n ?? "";
  };
}
function Fh(t) {
  return this.tween("text", typeof t == "function" ? Lh(br(this, "text", t)) : Ph(t == null ? "" : t + ""));
}
function Oh(t) {
  return function(n) {
    this.textContent = t.call(this, n);
  };
}
function zh(t) {
  var n, e;
  function r() {
    var i = t.apply(this, arguments);
    return i !== e && (n = (e = i) && Oh(i)), n;
  }
  return r._value = t, r;
}
function Dh(t) {
  var n = "text";
  if (arguments.length < 1)
    return (n = this.tween(n)) && n._value;
  if (t == null)
    return this.tween(n, null);
  if (typeof t != "function")
    throw new Error();
  return this.tween(n, zh(t));
}
function qh() {
  for (var t = this._name, n = this._id, e = Vs(), r = this._groups, i = r.length, s = 0; s < i; ++s)
    for (var o = r[s], a = o.length, u, f = 0; f < a; ++f)
      if (u = o[f]) {
        var l = B(u, n);
        le(u, t, e, f, o, {
          time: l.time + l.delay + l.duration,
          delay: 0,
          duration: l.duration,
          ease: l.ease
        });
      }
  return new tt(r, this._parents, t, e);
}
function Hh() {
  var t, n, e = this, r = e._id, i = e.size();
  return new Promise(function(s, o) {
    var a = { value: o }, u = { value: function() {
      --i === 0 && s();
    } };
    e.each(function() {
      var f = rt(this, r), l = f.on;
      l !== t && (n = (t = l).copy(), n._.cancel.push(a), n._.interrupt.push(a), n._.end.push(u)), f.on = n;
    });
  });
}
var Xh = 0;
function tt(t, n, e, r) {
  this._groups = t, this._parents = n, this._name = e, this._id = r;
}
function Vs() {
  return ++Xh;
}
var pt = yn.prototype;
tt.prototype = {
  constructor: tt,
  select: $h,
  selectAll: bh,
  filter: gh,
  merge: xh,
  selection: Ah,
  transition: qh,
  call: pt.call,
  nodes: pt.nodes,
  node: pt.node,
  size: pt.size,
  empty: pt.empty,
  each: pt.each,
  on: vh,
  attr: nh,
  attrTween: oh,
  style: kh,
  styleTween: Ih,
  text: Fh,
  textTween: Dh,
  remove: wh,
  tween: Wc,
  delay: fh,
  duration: hh,
  ease: ph,
  end: Hh
};
var Qe = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: sl
};
function Bh(t, n) {
  for (var e; !(e = t.__transition) || !(e = e[n]); )
    if (!(t = t.parentNode))
      return Qe.time = fe(), Qe;
  return e;
}
function Vh(t) {
  var n, e;
  t instanceof tt ? (n = t._id, t = t._name) : (n = Vs(), (e = Qe).time = fe(), t = t == null ? null : t + "");
  for (var r = this._groups, i = r.length, s = 0; s < i; ++s)
    for (var o = r[s], a = o.length, u, f = 0; f < a; ++f)
      (u = o[f]) && le(u, t, n, f, o, e || Bh(u, n));
  return new tt(r, this._parents, t, n);
}
yn.prototype.interrupt = Uc;
yn.prototype.transition = Vh;
function Kn() {
  this._ = null;
}
function ce(t) {
  t.U = // parent node
  t.C = // color - true for red, false for black
  t.L = // left node
  t.R = // right node
  t.P = // previous node
  t.N = null;
}
Kn.prototype = {
  constructor: Kn,
  insert: function(t, n) {
    var e, r, i;
    if (t) {
      if (n.P = t, n.N = t.N, t.N && (t.N.P = n), t.N = n, t.R) {
        for (t = t.R; t.L; )
          t = t.L;
        t.L = n;
      } else
        t.R = n;
      e = t;
    } else
      this._ ? (t = yi(this._), n.P = null, n.N = t, t.P = t.L = n, e = t) : (n.P = n.N = null, this._ = n, e = null);
    for (n.L = n.R = null, n.U = e, n.C = !0, t = n; e && e.C; )
      r = e.U, e === r.L ? (i = r.R, i && i.C ? (e.C = i.C = !1, r.C = !0, t = r) : (t === e.R && (zt(this, e), t = e, e = t.U), e.C = !1, r.C = !0, Dt(this, r))) : (i = r.L, i && i.C ? (e.C = i.C = !1, r.C = !0, t = r) : (t === e.L && (Dt(this, e), t = e, e = t.U), e.C = !1, r.C = !0, zt(this, r))), e = t.U;
    this._.C = !1;
  },
  remove: function(t) {
    t.N && (t.N.P = t.P), t.P && (t.P.N = t.N), t.N = t.P = null;
    var n = t.U, e, r = t.L, i = t.R, s, o;
    if (r ? i ? s = yi(i) : s = r : s = i, n ? n.L === t ? n.L = s : n.R = s : this._ = s, r && i ? (o = s.C, s.C = t.C, s.L = r, r.U = s, s !== i ? (n = s.U, s.U = t.U, t = s.R, n.L = t, s.R = i, i.U = s) : (s.U = n, n = s, t = s.R)) : (o = t.C, t = s), t && (t.U = n), !o) {
      if (t && t.C) {
        t.C = !1;
        return;
      }
      do {
        if (t === this._)
          break;
        if (t === n.L) {
          if (e = n.R, e.C && (e.C = !1, n.C = !0, zt(this, n), e = n.R), e.L && e.L.C || e.R && e.R.C) {
            (!e.R || !e.R.C) && (e.L.C = !1, e.C = !0, Dt(this, e), e = n.R), e.C = n.C, n.C = e.R.C = !1, zt(this, n), t = this._;
            break;
          }
        } else if (e = n.L, e.C && (e.C = !1, n.C = !0, Dt(this, n), e = n.L), e.L && e.L.C || e.R && e.R.C) {
          (!e.L || !e.L.C) && (e.R.C = !1, e.C = !0, zt(this, e), e = n.L), e.C = n.C, n.C = e.L.C = !1, Dt(this, n), t = this._;
          break;
        }
        e.C = !0, t = n, n = n.U;
      } while (!t.C);
      t && (t.C = !1);
    }
  }
};
function zt(t, n) {
  var e = n, r = n.R, i = e.U;
  i ? i.L === e ? i.L = r : i.R = r : t._ = r, r.U = i, e.U = r, e.R = r.L, e.R && (e.R.U = e), r.L = e;
}
function Dt(t, n) {
  var e = n, r = n.L, i = e.U;
  i ? i.L === e ? i.L = r : i.R = r : t._ = r, r.U = i, e.U = r, e.L = r.R, e.L && (e.L.U = e), r.R = e;
}
function yi(t) {
  for (; t.L; )
    t = t.L;
  return t;
}
function Wt(t, n, e, r) {
  var i = [null, null], s = E.push(i) - 1;
  return i.left = t, i.right = n, e && Zn(i, t, n, e), r && Zn(i, n, t, r), I[t.index].halfedges.push(s), I[n.index].halfedges.push(s), i;
}
function qt(t, n, e) {
  var r = [n, e];
  return r.left = t, r;
}
function Zn(t, n, e, r) {
  !t[0] && !t[1] ? (t[0] = r, t.left = n, t.right = e) : t.left === e ? t[1] = r : t[0] = r;
}
function Uh(t, n, e, r, i) {
  var s = t[0], o = t[1], a = s[0], u = s[1], f = o[0], l = o[1], c = 0, h = 1, d = f - a, g = l - u, p;
  if (p = n - a, !(!d && p > 0)) {
    if (p /= d, d < 0) {
      if (p < c)
        return;
      p < h && (h = p);
    } else if (d > 0) {
      if (p > h)
        return;
      p > c && (c = p);
    }
    if (p = r - a, !(!d && p < 0)) {
      if (p /= d, d < 0) {
        if (p > h)
          return;
        p > c && (c = p);
      } else if (d > 0) {
        if (p < c)
          return;
        p < h && (h = p);
      }
      if (p = e - u, !(!g && p > 0)) {
        if (p /= g, g < 0) {
          if (p < c)
            return;
          p < h && (h = p);
        } else if (g > 0) {
          if (p > h)
            return;
          p > c && (c = p);
        }
        if (p = i - u, !(!g && p < 0)) {
          if (p /= g, g < 0) {
            if (p > h)
              return;
            p > c && (c = p);
          } else if (g > 0) {
            if (p < c)
              return;
            p < h && (h = p);
          }
          return !(c > 0) && !(h < 1) || (c > 0 && (t[0] = [a + c * d, u + c * g]), h < 1 && (t[1] = [a + h * d, u + h * g])), !0;
        }
      }
    }
  }
}
function Yh(t, n, e, r, i) {
  var s = t[1];
  if (s)
    return !0;
  var o = t[0], a = t.left, u = t.right, f = a[0], l = a[1], c = u[0], h = u[1], d = (f + c) / 2, g = (l + h) / 2, p, x;
  if (h === l) {
    if (d < n || d >= r)
      return;
    if (f > c) {
      if (!o)
        o = [d, e];
      else if (o[1] >= i)
        return;
      s = [d, i];
    } else {
      if (!o)
        o = [d, i];
      else if (o[1] < e)
        return;
      s = [d, e];
    }
  } else if (p = (f - c) / (h - l), x = g - p * d, p < -1 || p > 1)
    if (f > c) {
      if (!o)
        o = [(e - x) / p, e];
      else if (o[1] >= i)
        return;
      s = [(i - x) / p, i];
    } else {
      if (!o)
        o = [(i - x) / p, i];
      else if (o[1] < e)
        return;
      s = [(e - x) / p, e];
    }
  else if (l < h) {
    if (!o)
      o = [n, p * n + x];
    else if (o[0] >= r)
      return;
    s = [r, p * r + x];
  } else {
    if (!o)
      o = [r, p * r + x];
    else if (o[0] < n)
      return;
    s = [n, p * n + x];
  }
  return t[0] = o, t[1] = s, !0;
}
function Gh(t, n, e, r) {
  for (var i = E.length, s; i--; )
    (!Yh(s = E[i], t, n, e, r) || !Uh(s, t, n, e, r) || !(Math.abs(s[0][0] - s[1][0]) > A || Math.abs(s[0][1] - s[1][1]) > A)) && delete E[i];
}
function Wh(t) {
  return I[t.index] = {
    site: t,
    halfedges: []
  };
}
function Kh(t, n) {
  var e = t.site, r = n.left, i = n.right;
  return e === i && (i = r, r = e), i ? Math.atan2(i[1] - r[1], i[0] - r[0]) : (e === r ? (r = n[1], i = n[0]) : (r = n[0], i = n[1]), Math.atan2(r[0] - i[0], i[1] - r[1]));
}
function Us(t, n) {
  return n[+(n.left !== t.site)];
}
function Zh(t, n) {
  return n[+(n.left === t.site)];
}
function Jh() {
  for (var t = 0, n = I.length, e, r, i, s; t < n; ++t)
    if ((e = I[t]) && (s = (r = e.halfedges).length)) {
      var o = new Array(s), a = new Array(s);
      for (i = 0; i < s; ++i)
        o[i] = i, a[i] = Kh(e, E[r[i]]);
      for (o.sort(function(u, f) {
        return a[f] - a[u];
      }), i = 0; i < s; ++i)
        a[i] = r[o[i]];
      for (i = 0; i < s; ++i)
        r[i] = a[i];
    }
}
function Qh(t, n, e, r) {
  var i = I.length, s, o, a, u, f, l, c, h, d, g, p, x, $ = !0;
  for (s = 0; s < i; ++s)
    if (o = I[s]) {
      for (a = o.site, f = o.halfedges, u = f.length; u--; )
        E[f[u]] || f.splice(u, 1);
      for (u = 0, l = f.length; u < l; )
        g = Zh(o, E[f[u]]), p = g[0], x = g[1], c = Us(o, E[f[++u % l]]), h = c[0], d = c[1], (Math.abs(p - h) > A || Math.abs(x - d) > A) && (f.splice(u, 0, E.push(qt(
          a,
          g,
          Math.abs(p - t) < A && r - x > A ? [t, Math.abs(h - t) < A ? d : r] : Math.abs(x - r) < A && e - p > A ? [Math.abs(d - r) < A ? h : e, r] : Math.abs(p - e) < A && x - n > A ? [e, Math.abs(h - e) < A ? d : n] : Math.abs(x - n) < A && p - t > A ? [Math.abs(d - n) < A ? h : t, n] : null
        )) - 1), ++l);
      l && ($ = !1);
    }
  if ($) {
    var v, y, b, N = 1 / 0;
    for (s = 0, $ = null; s < i; ++s)
      (o = I[s]) && (a = o.site, v = a[0] - t, y = a[1] - n, b = v * v + y * y, b < N && (N = b, $ = o));
    if ($) {
      var _ = [t, n], m = [t, r], C = [e, r], z = [e, n];
      $.halfedges.push(
        E.push(qt(a = $.site, _, m)) - 1,
        E.push(qt(a, m, C)) - 1,
        E.push(qt(a, C, z)) - 1,
        E.push(qt(a, z, _)) - 1
      );
    }
  }
  for (s = 0; s < i; ++s)
    (o = I[s]) && (o.halfedges.length || delete I[s]);
}
var Ys = [], Nr;
function jh() {
  ce(this), this.x = this.y = this.arc = this.site = this.cy = null;
}
function xt(t) {
  var n = t.P, e = t.N;
  if (!(!n || !e)) {
    var r = n.site, i = t.site, s = e.site;
    if (r !== s) {
      var o = i[0], a = i[1], u = r[0] - o, f = r[1] - a, l = s[0] - o, c = s[1] - a, h = 2 * (u * c - f * l);
      if (!(h >= -i0)) {
        var d = u * u + f * f, g = l * l + c * c, p = (c * d - f * g) / h, x = (u * g - l * d) / h, $ = Ys.pop() || new jh();
        $.arc = t, $.site = i, $.x = p + o, $.y = ($.cy = x + a) + Math.sqrt(p * p + x * x), t.circle = $;
        for (var v = null, y = un._; y; )
          if ($.y < y.y || $.y === y.y && $.x <= y.x)
            if (y.L)
              y = y.L;
            else {
              v = y.P;
              break;
            }
          else if (y.R)
            y = y.R;
          else {
            v = y;
            break;
          }
        un.insert(v, $), v || (Nr = $);
      }
    }
  }
}
function vt(t) {
  var n = t.circle;
  n && (n.P || (Nr = n.N), un.remove(n), Ys.push(n), ce(n), t.circle = null);
}
var Gs = [];
function t0() {
  ce(this), this.edge = this.site = this.circle = null;
}
function _i(t) {
  var n = Gs.pop() || new t0();
  return n.site = t, n;
}
function Re(t) {
  vt(t), mt.remove(t), Gs.push(t), ce(t);
}
function n0(t) {
  var n = t.circle, e = n.x, r = n.cy, i = [e, r], s = t.P, o = t.N, a = [t];
  Re(t);
  for (var u = s; u.circle && Math.abs(e - u.circle.x) < A && Math.abs(r - u.circle.cy) < A; )
    s = u.P, a.unshift(u), Re(u), u = s;
  a.unshift(u), vt(u);
  for (var f = o; f.circle && Math.abs(e - f.circle.x) < A && Math.abs(r - f.circle.cy) < A; )
    o = f.N, a.push(f), Re(f), f = o;
  a.push(f), vt(f);
  var l = a.length, c;
  for (c = 1; c < l; ++c)
    f = a[c], u = a[c - 1], Zn(f.edge, u.site, f.site, i);
  u = a[0], f = a[l - 1], f.edge = Wt(u.site, f.site, null, i), xt(u), xt(f);
}
function e0(t) {
  for (var n = t[0], e = t[1], r, i, s, o, a = mt._; a; )
    if (s = Ws(a, e) - n, s > A)
      a = a.L;
    else if (o = n - r0(a, e), o > A) {
      if (!a.R) {
        r = a;
        break;
      }
      a = a.R;
    } else {
      s > -A ? (r = a.P, i = a) : o > -A ? (r = a, i = a.N) : r = i = a;
      break;
    }
  Wh(t);
  var u = _i(t);
  if (mt.insert(r, u), !(!r && !i)) {
    if (r === i) {
      vt(r), i = _i(r.site), mt.insert(u, i), u.edge = i.edge = Wt(r.site, u.site), xt(r), xt(i);
      return;
    }
    if (!i) {
      u.edge = Wt(r.site, u.site);
      return;
    }
    vt(r), vt(i);
    var f = r.site, l = f[0], c = f[1], h = t[0] - l, d = t[1] - c, g = i.site, p = g[0] - l, x = g[1] - c, $ = 2 * (h * x - d * p), v = h * h + d * d, y = p * p + x * x, b = [(x * v - d * y) / $ + l, (h * y - p * v) / $ + c];
    Zn(i.edge, f, g, b), u.edge = Wt(f, t, null, b), i.edge = Wt(t, g, null, b), xt(r), xt(i);
  }
}
function Ws(t, n) {
  var e = t.site, r = e[0], i = e[1], s = i - n;
  if (!s)
    return r;
  var o = t.P;
  if (!o)
    return -1 / 0;
  e = o.site;
  var a = e[0], u = e[1], f = u - n;
  if (!f)
    return a;
  var l = a - r, c = 1 / s - 1 / f, h = l / f;
  return c ? (-h + Math.sqrt(h * h - 2 * c * (l * l / (-2 * f) - u + f / 2 + i - s / 2))) / c + r : (r + a) / 2;
}
function r0(t, n) {
  var e = t.N;
  if (e)
    return Ws(e, n);
  var r = t.site;
  return r[1] === n ? r[0] : 1 / 0;
}
var A = 1e-6, i0 = 1e-12, mt, I, un, E;
function s0(t, n, e) {
  return (t[0] - e[0]) * (n[1] - t[1]) - (t[0] - n[0]) * (e[1] - t[1]);
}
function o0(t, n) {
  return n[1] - t[1] || n[0] - t[0];
}
function vi(t, n) {
  var e = t.sort(o0).pop(), r, i, s;
  for (E = [], I = new Array(t.length), mt = new Kn(), un = new Kn(); ; )
    if (s = Nr, e && (!s || e[1] < s.y || e[1] === s.y && e[0] < s.x))
      (e[0] !== r || e[1] !== i) && (e0(e), r = e[0], i = e[1]), e = t.pop();
    else if (s)
      n0(s.arc);
    else
      break;
  if (Jh(), n) {
    var o = +n[0][0], a = +n[0][1], u = +n[1][0], f = +n[1][1];
    Gh(o, a, u, f), Qh(o, a, u, f);
  }
  this.edges = E, this.cells = I, mt = un = E = I = null;
}
vi.prototype = {
  constructor: vi,
  polygons: function() {
    var t = this.edges;
    return this.cells.map(function(n) {
      var e = n.halfedges.map(function(r) {
        return Us(n, t[r]);
      });
      return e.data = n.site.data, e;
    });
  },
  triangles: function() {
    var t = [], n = this.edges;
    return this.cells.forEach(function(e, r) {
      if (a = (s = e.halfedges).length)
        for (var i = e.site, s, o = -1, a, u, f = n[s[a - 1]], l = f.left === i ? f.right : f.left; ++o < a; )
          u = l, f = n[s[o]], l = f.left === i ? f.right : f.left, u && l && r < u.index && r < l.index && s0(i, u, l) < 0 && t.push([i.data, u.data, l.data]);
    }), t;
  },
  links: function() {
    return this.edges.filter(function(t) {
      return t.right;
    }).map(function(t) {
      return {
        source: t.left.data,
        target: t.right.data
      };
    });
  },
  find: function(t, n, e) {
    for (var r = this, i, s = r._found || 0, o = r.cells.length, a; !(a = r.cells[s]); )
      if (++s >= o)
        return null;
    var u = t - a.site[0], f = n - a.site[1], l = u * u + f * f;
    do
      a = r.cells[i = s], s = null, a.halfedges.forEach(function(c) {
        var h = r.edges[c], d = h.left;
        if (!((d === a.site || !d) && !(d = h.right))) {
          var g = t - d[0], p = n - d[1], x = g * g + p * p;
          x < l && (l = x, s = d.index);
        }
      });
    while (s !== null);
    return r._found = i, e == null || l <= e * e ? a.site : null;
  }
};
var a0 = { value: function() {
} };
function Ks() {
  for (var t = 0, n = arguments.length, e = {}, r; t < n; ++t) {
    if (!(r = arguments[t] + "") || r in e || /[\s.]/.test(r))
      throw new Error("illegal type: " + r);
    e[r] = [];
  }
  return new Ln(e);
}
function Ln(t) {
  this._ = t;
}
function u0(t, n) {
  return t.trim().split(/^|\s+/).map(function(e) {
    var r = "", i = e.indexOf(".");
    if (i >= 0 && (r = e.slice(i + 1), e = e.slice(0, i)), e && !n.hasOwnProperty(e))
      throw new Error("unknown type: " + e);
    return { type: e, name: r };
  });
}
Ln.prototype = Ks.prototype = {
  constructor: Ln,
  on: function(t, n) {
    var e = this._, r = u0(t + "", e), i, s = -1, o = r.length;
    if (arguments.length < 2) {
      for (; ++s < o; )
        if ((i = (t = r[s]).type) && (i = f0(e[i], t.name)))
          return i;
      return;
    }
    if (n != null && typeof n != "function")
      throw new Error("invalid callback: " + n);
    for (; ++s < o; )
      if (i = (t = r[s]).type)
        e[i] = mi(e[i], t.name, n);
      else if (n == null)
        for (i in e)
          e[i] = mi(e[i], t.name, null);
    return this;
  },
  copy: function() {
    var t = {}, n = this._;
    for (var e in n)
      t[e] = n[e].slice();
    return new Ln(t);
  },
  call: function(t, n) {
    if ((i = arguments.length - 2) > 0)
      for (var e = new Array(i), r = 0, i, s; r < i; ++r)
        e[r] = arguments[r + 2];
    if (!this._.hasOwnProperty(t))
      throw new Error("unknown type: " + t);
    for (s = this._[t], r = 0, i = s.length; r < i; ++r)
      s[r].value.apply(n, e);
  },
  apply: function(t, n, e) {
    if (!this._.hasOwnProperty(t))
      throw new Error("unknown type: " + t);
    for (var r = this._[t], i = 0, s = r.length; i < s; ++i)
      r[i].value.apply(n, e);
  }
};
function f0(t, n) {
  for (var e = 0, r = t.length, i; e < r; ++e)
    if ((i = t[e]).name === n)
      return i.value;
}
function mi(t, n, e) {
  for (var r = 0, i = t.length; r < i; ++r)
    if (t[r].name === n) {
      t[r] = a0, t = t.slice(0, r).concat(t.slice(r + 1));
      break;
    }
  return e != null && t.push({ name: n, value: e }), t;
}
function Ar(t, n, e) {
  t.prototype = n.prototype = e, e.constructor = t;
}
function Zs(t, n) {
  var e = Object.create(t.prototype);
  for (var r in n)
    e[r] = n[r];
  return e;
}
function _n() {
}
var fn = 0.7, Jn = 1 / fn, wt = "\\s*([+-]?\\d+)\\s*", ln = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*", Z = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*", l0 = /^#([0-9a-f]{3,8})$/, c0 = new RegExp("^rgb\\(" + [wt, wt, wt] + "\\)$"), h0 = new RegExp("^rgb\\(" + [Z, Z, Z] + "\\)$"), d0 = new RegExp("^rgba\\(" + [wt, wt, wt, ln] + "\\)$"), p0 = new RegExp("^rgba\\(" + [Z, Z, Z, ln] + "\\)$"), g0 = new RegExp("^hsl\\(" + [ln, Z, Z] + "\\)$"), x0 = new RegExp("^hsla\\(" + [ln, Z, Z, ln] + "\\)$"), wi = {
  aliceblue: 15792383,
  antiquewhite: 16444375,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 15794175,
  beige: 16119260,
  bisque: 16770244,
  black: 0,
  blanchedalmond: 16772045,
  blue: 255,
  blueviolet: 9055202,
  brown: 10824234,
  burlywood: 14596231,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 13789470,
  coral: 16744272,
  cornflowerblue: 6591981,
  cornsilk: 16775388,
  crimson: 14423100,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 12092939,
  darkgray: 11119017,
  darkgreen: 25600,
  darkgrey: 11119017,
  darkkhaki: 12433259,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 16747520,
  darkorchid: 10040012,
  darkred: 9109504,
  darksalmon: 15308410,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 16716947,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 11674146,
  floralwhite: 16775920,
  forestgreen: 2263842,
  fuchsia: 16711935,
  gainsboro: 14474460,
  ghostwhite: 16316671,
  gold: 16766720,
  goldenrod: 14329120,
  gray: 8421504,
  green: 32768,
  greenyellow: 11403055,
  grey: 8421504,
  honeydew: 15794160,
  hotpink: 16738740,
  indianred: 13458524,
  indigo: 4915330,
  ivory: 16777200,
  khaki: 15787660,
  lavender: 15132410,
  lavenderblush: 16773365,
  lawngreen: 8190976,
  lemonchiffon: 16775885,
  lightblue: 11393254,
  lightcoral: 15761536,
  lightcyan: 14745599,
  lightgoldenrodyellow: 16448210,
  lightgray: 13882323,
  lightgreen: 9498256,
  lightgrey: 13882323,
  lightpink: 16758465,
  lightsalmon: 16752762,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 11584734,
  lightyellow: 16777184,
  lime: 65280,
  limegreen: 3329330,
  linen: 16445670,
  magenta: 16711935,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 12211667,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 13047173,
  midnightblue: 1644912,
  mintcream: 16121850,
  mistyrose: 16770273,
  moccasin: 16770229,
  navajowhite: 16768685,
  navy: 128,
  oldlace: 16643558,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 16753920,
  orangered: 16729344,
  orchid: 14315734,
  palegoldenrod: 15657130,
  palegreen: 10025880,
  paleturquoise: 11529966,
  palevioletred: 14381203,
  papayawhip: 16773077,
  peachpuff: 16767673,
  peru: 13468991,
  pink: 16761035,
  plum: 14524637,
  powderblue: 11591910,
  purple: 8388736,
  rebeccapurple: 6697881,
  red: 16711680,
  rosybrown: 12357519,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 16416882,
  sandybrown: 16032864,
  seagreen: 3050327,
  seashell: 16774638,
  sienna: 10506797,
  silver: 12632256,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 16775930,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 13808780,
  teal: 32896,
  thistle: 14204888,
  tomato: 16737095,
  turquoise: 4251856,
  violet: 15631086,
  wheat: 16113331,
  white: 16777215,
  whitesmoke: 16119285,
  yellow: 16776960,
  yellowgreen: 10145074
};
Ar(_n, cn, {
  copy: function(t) {
    return Object.assign(new this.constructor(), this, t);
  },
  displayable: function() {
    return this.rgb().displayable();
  },
  hex: $i,
  // Deprecated! Use color.formatHex.
  formatHex: $i,
  formatHsl: y0,
  formatRgb: bi,
  toString: bi
});
function $i() {
  return this.rgb().formatHex();
}
function y0() {
  return Js(this).formatHsl();
}
function bi() {
  return this.rgb().formatRgb();
}
function cn(t) {
  var n, e;
  return t = (t + "").trim().toLowerCase(), (n = l0.exec(t)) ? (e = n[1].length, n = parseInt(n[1], 16), e === 6 ? Ni(n) : e === 3 ? new F(n >> 8 & 15 | n >> 4 & 240, n >> 4 & 15 | n & 240, (n & 15) << 4 | n & 15, 1) : e === 8 ? Mn(n >> 24 & 255, n >> 16 & 255, n >> 8 & 255, (n & 255) / 255) : e === 4 ? Mn(n >> 12 & 15 | n >> 8 & 240, n >> 8 & 15 | n >> 4 & 240, n >> 4 & 15 | n & 240, ((n & 15) << 4 | n & 15) / 255) : null) : (n = c0.exec(t)) ? new F(n[1], n[2], n[3], 1) : (n = h0.exec(t)) ? new F(n[1] * 255 / 100, n[2] * 255 / 100, n[3] * 255 / 100, 1) : (n = d0.exec(t)) ? Mn(n[1], n[2], n[3], n[4]) : (n = p0.exec(t)) ? Mn(n[1] * 255 / 100, n[2] * 255 / 100, n[3] * 255 / 100, n[4]) : (n = g0.exec(t)) ? Mi(n[1], n[2] / 100, n[3] / 100, 1) : (n = x0.exec(t)) ? Mi(n[1], n[2] / 100, n[3] / 100, n[4]) : wi.hasOwnProperty(t) ? Ni(wi[t]) : t === "transparent" ? new F(NaN, NaN, NaN, 0) : null;
}
function Ni(t) {
  return new F(t >> 16 & 255, t >> 8 & 255, t & 255, 1);
}
function Mn(t, n, e, r) {
  return r <= 0 && (t = n = e = NaN), new F(t, n, e, r);
}
function _0(t) {
  return t instanceof _n || (t = cn(t)), t ? (t = t.rgb(), new F(t.r, t.g, t.b, t.opacity)) : new F();
}
function je(t, n, e, r) {
  return arguments.length === 1 ? _0(t) : new F(t, n, e, r ?? 1);
}
function F(t, n, e, r) {
  this.r = +t, this.g = +n, this.b = +e, this.opacity = +r;
}
Ar(F, je, Zs(_n, {
  brighter: function(t) {
    return t = t == null ? Jn : Math.pow(Jn, t), new F(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  darker: function(t) {
    return t = t == null ? fn : Math.pow(fn, t), new F(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  rgb: function() {
    return this;
  },
  displayable: function() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: Ai,
  // Deprecated! Use color.formatHex.
  formatHex: Ai,
  formatRgb: Ci,
  toString: Ci
}));
function Ai() {
  return "#" + Ee(this.r) + Ee(this.g) + Ee(this.b);
}
function Ci() {
  var t = this.opacity;
  return t = isNaN(t) ? 1 : Math.max(0, Math.min(1, t)), (t === 1 ? "rgb(" : "rgba(") + Math.max(0, Math.min(255, Math.round(this.r) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.g) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.b) || 0)) + (t === 1 ? ")" : ", " + t + ")");
}
function Ee(t) {
  return t = Math.max(0, Math.min(255, Math.round(t) || 0)), (t < 16 ? "0" : "") + t.toString(16);
}
function Mi(t, n, e, r) {
  return r <= 0 ? t = n = e = NaN : e <= 0 || e >= 1 ? t = n = NaN : n <= 0 && (t = NaN), new G(t, n, e, r);
}
function Js(t) {
  if (t instanceof G)
    return new G(t.h, t.s, t.l, t.opacity);
  if (t instanceof _n || (t = cn(t)), !t)
    return new G();
  if (t instanceof G)
    return t;
  t = t.rgb();
  var n = t.r / 255, e = t.g / 255, r = t.b / 255, i = Math.min(n, e, r), s = Math.max(n, e, r), o = NaN, a = s - i, u = (s + i) / 2;
  return a ? (n === s ? o = (e - r) / a + (e < r) * 6 : e === s ? o = (r - n) / a + 2 : o = (n - e) / a + 4, a /= u < 0.5 ? s + i : 2 - s - i, o *= 60) : a = u > 0 && u < 1 ? 0 : o, new G(o, a, u, t.opacity);
}
function v0(t, n, e, r) {
  return arguments.length === 1 ? Js(t) : new G(t, n, e, r ?? 1);
}
function G(t, n, e, r) {
  this.h = +t, this.s = +n, this.l = +e, this.opacity = +r;
}
Ar(G, v0, Zs(_n, {
  brighter: function(t) {
    return t = t == null ? Jn : Math.pow(Jn, t), new G(this.h, this.s, this.l * t, this.opacity);
  },
  darker: function(t) {
    return t = t == null ? fn : Math.pow(fn, t), new G(this.h, this.s, this.l * t, this.opacity);
  },
  rgb: function() {
    var t = this.h % 360 + (this.h < 0) * 360, n = isNaN(t) || isNaN(this.s) ? 0 : this.s, e = this.l, r = e + (e < 0.5 ? e : 1 - e) * n, i = 2 * e - r;
    return new F(
      ke(t >= 240 ? t - 240 : t + 120, i, r),
      ke(t, i, r),
      ke(t < 120 ? t + 240 : t - 120, i, r),
      this.opacity
    );
  },
  displayable: function() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl: function() {
    var t = this.opacity;
    return t = isNaN(t) ? 1 : Math.max(0, Math.min(1, t)), (t === 1 ? "hsl(" : "hsla(") + (this.h || 0) + ", " + (this.s || 0) * 100 + "%, " + (this.l || 0) * 100 + "%" + (t === 1 ? ")" : ", " + t + ")");
  }
}));
function ke(t, n, e) {
  return (t < 60 ? n + (e - n) * t / 60 : t < 180 ? e : t < 240 ? n + (e - n) * (240 - t) / 60 : n) * 255;
}
function Qs(t) {
  return function() {
    return t;
  };
}
function m0(t, n) {
  return function(e) {
    return t + e * n;
  };
}
function w0(t, n, e) {
  return t = Math.pow(t, e), n = Math.pow(n, e) - t, e = 1 / e, function(r) {
    return Math.pow(t + r * n, e);
  };
}
function $0(t) {
  return (t = +t) == 1 ? js : function(n, e) {
    return e - n ? w0(n, e, t) : Qs(isNaN(n) ? e : n);
  };
}
function js(t, n) {
  var e = n - t;
  return e ? m0(t, e) : Qs(isNaN(t) ? n : t);
}
const Ri = function t(n) {
  var e = $0(n);
  function r(i, s) {
    var o = e((i = je(i)).r, (s = je(s)).r), a = e(i.g, s.g), u = e(i.b, s.b), f = js(i.opacity, s.opacity);
    return function(l) {
      return i.r = o(l), i.g = a(l), i.b = u(l), i.opacity = f(l), i + "";
    };
  }
  return r.gamma = t, r;
}(1);
function at(t, n) {
  return t = +t, n = +n, function(e) {
    return t * (1 - e) + n * e;
  };
}
var tr = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, Se = new RegExp(tr.source, "g");
function b0(t) {
  return function() {
    return t;
  };
}
function N0(t) {
  return function(n) {
    return t(n) + "";
  };
}
function A0(t, n) {
  var e = tr.lastIndex = Se.lastIndex = 0, r, i, s, o = -1, a = [], u = [];
  for (t = t + "", n = n + ""; (r = tr.exec(t)) && (i = Se.exec(n)); )
    (s = i.index) > e && (s = n.slice(e, s), a[o] ? a[o] += s : a[++o] = s), (r = r[0]) === (i = i[0]) ? a[o] ? a[o] += i : a[++o] = i : (a[++o] = null, u.push({ i: o, x: at(r, i) })), e = Se.lastIndex;
  return e < n.length && (s = n.slice(e), a[o] ? a[o] += s : a[++o] = s), a.length < 2 ? u[0] ? N0(u[0].x) : b0(n) : (n = u.length, function(f) {
    for (var l = 0, c; l < n; ++l)
      a[(c = u[l]).i] = c.x(f);
    return a.join("");
  });
}
var Ei = 180 / Math.PI, nr = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function to(t, n, e, r, i, s) {
  var o, a, u;
  return (o = Math.sqrt(t * t + n * n)) && (t /= o, n /= o), (u = t * e + n * r) && (e -= t * u, r -= n * u), (a = Math.sqrt(e * e + r * r)) && (e /= a, r /= a, u /= a), t * r < n * e && (t = -t, n = -n, u = -u, o = -o), {
    translateX: i,
    translateY: s,
    rotate: Math.atan2(n, t) * Ei,
    skewX: Math.atan(u) * Ei,
    scaleX: o,
    scaleY: a
  };
}
var Ht, Te, ki, Rn;
function C0(t) {
  return t === "none" ? nr : (Ht || (Ht = document.createElement("DIV"), Te = document.documentElement, ki = document.defaultView), Ht.style.transform = t, t = ki.getComputedStyle(Te.appendChild(Ht), null).getPropertyValue("transform"), Te.removeChild(Ht), t = t.slice(7, -1).split(","), to(+t[0], +t[1], +t[2], +t[3], +t[4], +t[5]));
}
function M0(t) {
  return t == null || (Rn || (Rn = document.createElementNS("http://www.w3.org/2000/svg", "g")), Rn.setAttribute("transform", t), !(t = Rn.transform.baseVal.consolidate())) ? nr : (t = t.matrix, to(t.a, t.b, t.c, t.d, t.e, t.f));
}
function no(t, n, e, r) {
  function i(f) {
    return f.length ? f.pop() + " " : "";
  }
  function s(f, l, c, h, d, g) {
    if (f !== c || l !== h) {
      var p = d.push("translate(", null, n, null, e);
      g.push({ i: p - 4, x: at(f, c) }, { i: p - 2, x: at(l, h) });
    } else
      (c || h) && d.push("translate(" + c + n + h + e);
  }
  function o(f, l, c, h) {
    f !== l ? (f - l > 180 ? l += 360 : l - f > 180 && (f += 360), h.push({ i: c.push(i(c) + "rotate(", null, r) - 2, x: at(f, l) })) : l && c.push(i(c) + "rotate(" + l + r);
  }
  function a(f, l, c, h) {
    f !== l ? h.push({ i: c.push(i(c) + "skewX(", null, r) - 2, x: at(f, l) }) : l && c.push(i(c) + "skewX(" + l + r);
  }
  function u(f, l, c, h, d, g) {
    if (f !== c || l !== h) {
      var p = d.push(i(d) + "scale(", null, ",", null, ")");
      g.push({ i: p - 4, x: at(f, c) }, { i: p - 2, x: at(l, h) });
    } else
      (c !== 1 || h !== 1) && d.push(i(d) + "scale(" + c + "," + h + ")");
  }
  return function(f, l) {
    var c = [], h = [];
    return f = t(f), l = t(l), s(f.translateX, f.translateY, l.translateX, l.translateY, c, h), o(f.rotate, l.rotate, c, h), a(f.skewX, l.skewX, c, h), u(f.scaleX, f.scaleY, l.scaleX, l.scaleY, c, h), f = l = null, function(d) {
      for (var g = -1, p = h.length, x; ++g < p; )
        c[(x = h[g]).i] = x.x(d);
      return c.join("");
    };
  };
}
var R0 = no(C0, "px, ", "px)", "deg)"), E0 = no(M0, ", ", ")", ")"), er = "http://www.w3.org/1999/xhtml";
const Si = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: er,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function he(t) {
  var n = t += "", e = n.indexOf(":");
  return e >= 0 && (n = t.slice(0, e)) !== "xmlns" && (t = t.slice(e + 1)), Si.hasOwnProperty(n) ? { space: Si[n], local: t } : t;
}
function k0(t) {
  return function() {
    var n = this.ownerDocument, e = this.namespaceURI;
    return e === er && n.documentElement.namespaceURI === er ? n.createElement(t) : n.createElementNS(e, t);
  };
}
function S0(t) {
  return function() {
    return this.ownerDocument.createElementNS(t.space, t.local);
  };
}
function eo(t) {
  var n = he(t);
  return (n.local ? S0 : k0)(n);
}
function T0() {
}
function Cr(t) {
  return t == null ? T0 : function() {
    return this.querySelector(t);
  };
}
function I0(t) {
  typeof t != "function" && (t = Cr(t));
  for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
    for (var s = n[i], o = s.length, a = r[i] = new Array(o), u, f, l = 0; l < o; ++l)
      (u = s[l]) && (f = t.call(u, u.__data__, l, s)) && ("__data__" in u && (f.__data__ = u.__data__), a[l] = f);
  return new H(r, this._parents);
}
function P0() {
  return [];
}
function ro(t) {
  return t == null ? P0 : function() {
    return this.querySelectorAll(t);
  };
}
function L0(t) {
  typeof t != "function" && (t = ro(t));
  for (var n = this._groups, e = n.length, r = [], i = [], s = 0; s < e; ++s)
    for (var o = n[s], a = o.length, u, f = 0; f < a; ++f)
      (u = o[f]) && (r.push(t.call(u, u.__data__, f, o)), i.push(u));
  return new H(r, i);
}
function io(t) {
  return function() {
    return this.matches(t);
  };
}
function F0(t) {
  typeof t != "function" && (t = io(t));
  for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
    for (var s = n[i], o = s.length, a = r[i] = [], u, f = 0; f < o; ++f)
      (u = s[f]) && t.call(u, u.__data__, f, s) && a.push(u);
  return new H(r, this._parents);
}
function so(t) {
  return new Array(t.length);
}
function O0() {
  return new H(this._enter || this._groups.map(so), this._parents);
}
function Qn(t, n) {
  this.ownerDocument = t.ownerDocument, this.namespaceURI = t.namespaceURI, this._next = null, this._parent = t, this.__data__ = n;
}
Qn.prototype = {
  constructor: Qn,
  appendChild: function(t) {
    return this._parent.insertBefore(t, this._next);
  },
  insertBefore: function(t, n) {
    return this._parent.insertBefore(t, n);
  },
  querySelector: function(t) {
    return this._parent.querySelector(t);
  },
  querySelectorAll: function(t) {
    return this._parent.querySelectorAll(t);
  }
};
function z0(t) {
  return function() {
    return t;
  };
}
var Ti = "$";
function D0(t, n, e, r, i, s) {
  for (var o = 0, a, u = n.length, f = s.length; o < f; ++o)
    (a = n[o]) ? (a.__data__ = s[o], r[o] = a) : e[o] = new Qn(t, s[o]);
  for (; o < u; ++o)
    (a = n[o]) && (i[o] = a);
}
function q0(t, n, e, r, i, s, o) {
  var a, u, f = {}, l = n.length, c = s.length, h = new Array(l), d;
  for (a = 0; a < l; ++a)
    (u = n[a]) && (h[a] = d = Ti + o.call(u, u.__data__, a, n), d in f ? i[a] = u : f[d] = u);
  for (a = 0; a < c; ++a)
    d = Ti + o.call(t, s[a], a, s), (u = f[d]) ? (r[a] = u, u.__data__ = s[a], f[d] = null) : e[a] = new Qn(t, s[a]);
  for (a = 0; a < l; ++a)
    (u = n[a]) && f[h[a]] === u && (i[a] = u);
}
function H0(t, n) {
  if (!t)
    return d = new Array(this.size()), f = -1, this.each(function(_) {
      d[++f] = _;
    }), d;
  var e = n ? q0 : D0, r = this._parents, i = this._groups;
  typeof t != "function" && (t = z0(t));
  for (var s = i.length, o = new Array(s), a = new Array(s), u = new Array(s), f = 0; f < s; ++f) {
    var l = r[f], c = i[f], h = c.length, d = t.call(l, l && l.__data__, f, r), g = d.length, p = a[f] = new Array(g), x = o[f] = new Array(g), $ = u[f] = new Array(h);
    e(l, c, p, x, $, d, n);
    for (var v = 0, y = 0, b, N; v < g; ++v)
      if (b = p[v]) {
        for (v >= y && (y = v + 1); !(N = x[y]) && ++y < g; )
          ;
        b._next = N || null;
      }
  }
  return o = new H(o, r), o._enter = a, o._exit = u, o;
}
function X0() {
  return new H(this._exit || this._groups.map(so), this._parents);
}
function B0(t, n, e) {
  var r = this.enter(), i = this, s = this.exit();
  return r = typeof t == "function" ? t(r) : r.append(t + ""), n != null && (i = n(i)), e == null ? s.remove() : e(s), r && i ? r.merge(i).order() : i;
}
function V0(t) {
  for (var n = this._groups, e = t._groups, r = n.length, i = e.length, s = Math.min(r, i), o = new Array(r), a = 0; a < s; ++a)
    for (var u = n[a], f = e[a], l = u.length, c = o[a] = new Array(l), h, d = 0; d < l; ++d)
      (h = u[d] || f[d]) && (c[d] = h);
  for (; a < r; ++a)
    o[a] = n[a];
  return new H(o, this._parents);
}
function U0() {
  for (var t = this._groups, n = -1, e = t.length; ++n < e; )
    for (var r = t[n], i = r.length - 1, s = r[i], o; --i >= 0; )
      (o = r[i]) && (s && o.compareDocumentPosition(s) ^ 4 && s.parentNode.insertBefore(o, s), s = o);
  return this;
}
function Y0(t) {
  t || (t = G0);
  function n(c, h) {
    return c && h ? t(c.__data__, h.__data__) : !c - !h;
  }
  for (var e = this._groups, r = e.length, i = new Array(r), s = 0; s < r; ++s) {
    for (var o = e[s], a = o.length, u = i[s] = new Array(a), f, l = 0; l < a; ++l)
      (f = o[l]) && (u[l] = f);
    u.sort(n);
  }
  return new H(i, this._parents).order();
}
function G0(t, n) {
  return t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN;
}
function W0() {
  var t = arguments[0];
  return arguments[0] = this, t.apply(null, arguments), this;
}
function K0() {
  var t = new Array(this.size()), n = -1;
  return this.each(function() {
    t[++n] = this;
  }), t;
}
function Z0() {
  for (var t = this._groups, n = 0, e = t.length; n < e; ++n)
    for (var r = t[n], i = 0, s = r.length; i < s; ++i) {
      var o = r[i];
      if (o)
        return o;
    }
  return null;
}
function J0() {
  var t = 0;
  return this.each(function() {
    ++t;
  }), t;
}
function Q0() {
  return !this.node();
}
function j0(t) {
  for (var n = this._groups, e = 0, r = n.length; e < r; ++e)
    for (var i = n[e], s = 0, o = i.length, a; s < o; ++s)
      (a = i[s]) && t.call(a, a.__data__, s, i);
  return this;
}
function td(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function nd(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function ed(t, n) {
  return function() {
    this.setAttribute(t, n);
  };
}
function rd(t, n) {
  return function() {
    this.setAttributeNS(t.space, t.local, n);
  };
}
function id(t, n) {
  return function() {
    var e = n.apply(this, arguments);
    e == null ? this.removeAttribute(t) : this.setAttribute(t, e);
  };
}
function sd(t, n) {
  return function() {
    var e = n.apply(this, arguments);
    e == null ? this.removeAttributeNS(t.space, t.local) : this.setAttributeNS(t.space, t.local, e);
  };
}
function od(t, n) {
  var e = he(t);
  if (arguments.length < 2) {
    var r = this.node();
    return e.local ? r.getAttributeNS(e.space, e.local) : r.getAttribute(e);
  }
  return this.each((n == null ? e.local ? nd : td : typeof n == "function" ? e.local ? sd : id : e.local ? rd : ed)(e, n));
}
function oo(t) {
  return t.ownerDocument && t.ownerDocument.defaultView || t.document && t || t.defaultView;
}
function ad(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function ud(t, n, e) {
  return function() {
    this.style.setProperty(t, n, e);
  };
}
function fd(t, n, e) {
  return function() {
    var r = n.apply(this, arguments);
    r == null ? this.style.removeProperty(t) : this.style.setProperty(t, r, e);
  };
}
function ld(t, n, e) {
  return arguments.length > 1 ? this.each((n == null ? ad : typeof n == "function" ? fd : ud)(t, n, e ?? "")) : Mt(this.node(), t);
}
function Mt(t, n) {
  return t.style.getPropertyValue(n) || oo(t).getComputedStyle(t, null).getPropertyValue(n);
}
function cd(t) {
  return function() {
    delete this[t];
  };
}
function hd(t, n) {
  return function() {
    this[t] = n;
  };
}
function dd(t, n) {
  return function() {
    var e = n.apply(this, arguments);
    e == null ? delete this[t] : this[t] = e;
  };
}
function pd(t, n) {
  return arguments.length > 1 ? this.each((n == null ? cd : typeof n == "function" ? dd : hd)(t, n)) : this.node()[t];
}
function ao(t) {
  return t.trim().split(/^|\s+/);
}
function Mr(t) {
  return t.classList || new uo(t);
}
function uo(t) {
  this._node = t, this._names = ao(t.getAttribute("class") || "");
}
uo.prototype = {
  add: function(t) {
    var n = this._names.indexOf(t);
    n < 0 && (this._names.push(t), this._node.setAttribute("class", this._names.join(" ")));
  },
  remove: function(t) {
    var n = this._names.indexOf(t);
    n >= 0 && (this._names.splice(n, 1), this._node.setAttribute("class", this._names.join(" ")));
  },
  contains: function(t) {
    return this._names.indexOf(t) >= 0;
  }
};
function fo(t, n) {
  for (var e = Mr(t), r = -1, i = n.length; ++r < i; )
    e.add(n[r]);
}
function lo(t, n) {
  for (var e = Mr(t), r = -1, i = n.length; ++r < i; )
    e.remove(n[r]);
}
function gd(t) {
  return function() {
    fo(this, t);
  };
}
function xd(t) {
  return function() {
    lo(this, t);
  };
}
function yd(t, n) {
  return function() {
    (n.apply(this, arguments) ? fo : lo)(this, t);
  };
}
function _d(t, n) {
  var e = ao(t + "");
  if (arguments.length < 2) {
    for (var r = Mr(this.node()), i = -1, s = e.length; ++i < s; )
      if (!r.contains(e[i]))
        return !1;
    return !0;
  }
  return this.each((typeof n == "function" ? yd : n ? gd : xd)(e, n));
}
function vd() {
  this.textContent = "";
}
function md(t) {
  return function() {
    this.textContent = t;
  };
}
function wd(t) {
  return function() {
    var n = t.apply(this, arguments);
    this.textContent = n ?? "";
  };
}
function $d(t) {
  return arguments.length ? this.each(t == null ? vd : (typeof t == "function" ? wd : md)(t)) : this.node().textContent;
}
function bd() {
  this.innerHTML = "";
}
function Nd(t) {
  return function() {
    this.innerHTML = t;
  };
}
function Ad(t) {
  return function() {
    var n = t.apply(this, arguments);
    this.innerHTML = n ?? "";
  };
}
function Cd(t) {
  return arguments.length ? this.each(t == null ? bd : (typeof t == "function" ? Ad : Nd)(t)) : this.node().innerHTML;
}
function Md() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function Rd() {
  return this.each(Md);
}
function Ed() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function kd() {
  return this.each(Ed);
}
function Sd(t) {
  var n = typeof t == "function" ? t : eo(t);
  return this.select(function() {
    return this.appendChild(n.apply(this, arguments));
  });
}
function Td() {
  return null;
}
function Id(t, n) {
  var e = typeof t == "function" ? t : eo(t), r = n == null ? Td : typeof n == "function" ? n : Cr(n);
  return this.select(function() {
    return this.insertBefore(e.apply(this, arguments), r.apply(this, arguments) || null);
  });
}
function Pd() {
  var t = this.parentNode;
  t && t.removeChild(this);
}
function Ld() {
  return this.each(Pd);
}
function Fd() {
  var t = this.cloneNode(!1), n = this.parentNode;
  return n ? n.insertBefore(t, this.nextSibling) : t;
}
function Od() {
  var t = this.cloneNode(!0), n = this.parentNode;
  return n ? n.insertBefore(t, this.nextSibling) : t;
}
function zd(t) {
  return this.select(t ? Od : Fd);
}
function Dd(t) {
  return arguments.length ? this.property("__data__", t) : this.node().__data__;
}
var co = {};
if (typeof document < "u") {
  var qd = document.documentElement;
  "onmouseenter" in qd || (co = { mouseenter: "mouseover", mouseleave: "mouseout" });
}
function Hd(t, n, e) {
  return t = ho(t, n, e), function(r) {
    var i = r.relatedTarget;
    (!i || i !== this && !(i.compareDocumentPosition(this) & 8)) && t.call(this, r);
  };
}
function ho(t, n, e) {
  return function(r) {
    try {
      t.call(this, this.__data__, n, e);
    } finally {
    }
  };
}
function Xd(t) {
  return t.trim().split(/^|\s+/).map(function(n) {
    var e = "", r = n.indexOf(".");
    return r >= 0 && (e = n.slice(r + 1), n = n.slice(0, r)), { type: n, name: e };
  });
}
function Bd(t) {
  return function() {
    var n = this.__on;
    if (n) {
      for (var e = 0, r = -1, i = n.length, s; e < i; ++e)
        s = n[e], (!t.type || s.type === t.type) && s.name === t.name ? this.removeEventListener(s.type, s.listener, s.capture) : n[++r] = s;
      ++r ? n.length = r : delete this.__on;
    }
  };
}
function Vd(t, n, e) {
  var r = co.hasOwnProperty(t.type) ? Hd : ho;
  return function(i, s, o) {
    var a = this.__on, u, f = r(n, s, o);
    if (a) {
      for (var l = 0, c = a.length; l < c; ++l)
        if ((u = a[l]).type === t.type && u.name === t.name) {
          this.removeEventListener(u.type, u.listener, u.capture), this.addEventListener(u.type, u.listener = f, u.capture = e), u.value = n;
          return;
        }
    }
    this.addEventListener(t.type, f, e), u = { type: t.type, name: t.name, value: n, listener: f, capture: e }, a ? a.push(u) : this.__on = [u];
  };
}
function Ud(t, n, e) {
  var r = Xd(t + ""), i, s = r.length, o;
  if (arguments.length < 2) {
    var a = this.node().__on;
    if (a) {
      for (var u = 0, f = a.length, l; u < f; ++u)
        for (i = 0, l = a[u]; i < s; ++i)
          if ((o = r[i]).type === l.type && o.name === l.name)
            return l.value;
    }
    return;
  }
  for (a = n ? Vd : Bd, e == null && (e = !1), i = 0; i < s; ++i)
    this.each(a(r[i], n, e));
  return this;
}
function po(t, n, e) {
  var r = oo(t), i = r.CustomEvent;
  typeof i == "function" ? i = new i(n, e) : (i = r.document.createEvent("Event"), e ? (i.initEvent(n, e.bubbles, e.cancelable), i.detail = e.detail) : i.initEvent(n, !1, !1)), t.dispatchEvent(i);
}
function Yd(t, n) {
  return function() {
    return po(this, t, n);
  };
}
function Gd(t, n) {
  return function() {
    return po(this, t, n.apply(this, arguments));
  };
}
function Wd(t, n) {
  return this.each((typeof n == "function" ? Gd : Yd)(t, n));
}
var Kd = [null];
function H(t, n) {
  this._groups = t, this._parents = n;
}
function vn() {
  return new H([[document.documentElement]], Kd);
}
H.prototype = vn.prototype = {
  constructor: H,
  select: I0,
  selectAll: L0,
  filter: F0,
  data: H0,
  enter: O0,
  exit: X0,
  join: B0,
  merge: V0,
  order: U0,
  sort: Y0,
  call: W0,
  nodes: K0,
  node: Z0,
  size: J0,
  empty: Q0,
  each: j0,
  attr: od,
  style: ld,
  property: pd,
  classed: _d,
  text: $d,
  html: Cd,
  raise: Rd,
  lower: kd,
  append: Sd,
  insert: Id,
  remove: Ld,
  clone: zd,
  datum: Dd,
  on: Ud,
  dispatch: Wd
};
var Rt = 0, Kt = 0, Xt = 0, go = 1e3, jn, Zt, te = 0, ct = 0, de = 0, hn = typeof performance == "object" && performance.now ? performance : Date, xo = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(t) {
  setTimeout(t, 17);
};
function pe() {
  return ct || (xo(Zd), ct = hn.now() + de);
}
function Zd() {
  ct = 0;
}
function ne() {
  this._call = this._time = this._next = null;
}
ne.prototype = yo.prototype = {
  constructor: ne,
  restart: function(t, n, e) {
    if (typeof t != "function")
      throw new TypeError("callback is not a function");
    e = (e == null ? pe() : +e) + (n == null ? 0 : +n), !this._next && Zt !== this && (Zt ? Zt._next = this : jn = this, Zt = this), this._call = t, this._time = e, rr();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, rr());
  }
};
function yo(t, n, e) {
  var r = new ne();
  return r.restart(t, n, e), r;
}
function Jd() {
  pe(), ++Rt;
  for (var t = jn, n; t; )
    (n = ct - t._time) >= 0 && t._call.call(null, n), t = t._next;
  --Rt;
}
function Ii() {
  ct = (te = hn.now()) + de, Rt = Kt = 0;
  try {
    Jd();
  } finally {
    Rt = 0, jd(), ct = 0;
  }
}
function Qd() {
  var t = hn.now(), n = t - te;
  n > go && (de -= n, te = t);
}
function jd() {
  for (var t, n = jn, e, r = 1 / 0; n; )
    n._call ? (r > n._time && (r = n._time), t = n, n = n._next) : (e = n._next, n._next = null, n = t ? t._next = e : jn = e);
  Zt = t, rr(r);
}
function rr(t) {
  if (!Rt) {
    Kt && (Kt = clearTimeout(Kt));
    var n = t - ct;
    n > 24 ? (t < 1 / 0 && (Kt = setTimeout(Ii, t - hn.now() - de)), Xt && (Xt = clearInterval(Xt))) : (Xt || (te = hn.now(), Xt = setInterval(Qd, go)), Rt = 1, xo(Ii));
  }
}
function Pi(t, n, e) {
  var r = new ne();
  return n = n == null ? 0 : +n, r.restart(function(i) {
    r.stop(), t(i + n);
  }, n, e), r;
}
var tp = Ks("start", "end", "cancel", "interrupt"), np = [], _o = 0, Li = 1, ir = 2, Fn = 3, Fi = 4, sr = 5, On = 6;
function ge(t, n, e, r, i, s) {
  var o = t.__transition;
  if (!o)
    t.__transition = {};
  else if (e in o)
    return;
  ep(t, e, {
    name: n,
    index: r,
    // For context during callback.
    group: i,
    // For context during callback.
    on: tp,
    tween: np,
    time: s.time,
    delay: s.delay,
    duration: s.duration,
    ease: s.ease,
    timer: null,
    state: _o
  });
}
function Rr(t, n) {
  var e = V(t, n);
  if (e.state > _o)
    throw new Error("too late; already scheduled");
  return e;
}
function it(t, n) {
  var e = V(t, n);
  if (e.state > Fn)
    throw new Error("too late; already running");
  return e;
}
function V(t, n) {
  var e = t.__transition;
  if (!e || !(e = e[n]))
    throw new Error("transition not found");
  return e;
}
function ep(t, n, e) {
  var r = t.__transition, i;
  r[n] = e, e.timer = yo(s, 0, e.time);
  function s(f) {
    e.state = Li, e.timer.restart(o, e.delay, e.time), e.delay <= f && o(f - e.delay);
  }
  function o(f) {
    var l, c, h, d;
    if (e.state !== Li)
      return u();
    for (l in r)
      if (d = r[l], d.name === e.name) {
        if (d.state === Fn)
          return Pi(o);
        d.state === Fi ? (d.state = On, d.timer.stop(), d.on.call("interrupt", t, t.__data__, d.index, d.group), delete r[l]) : +l < n && (d.state = On, d.timer.stop(), d.on.call("cancel", t, t.__data__, d.index, d.group), delete r[l]);
      }
    if (Pi(function() {
      e.state === Fn && (e.state = Fi, e.timer.restart(a, e.delay, e.time), a(f));
    }), e.state = ir, e.on.call("start", t, t.__data__, e.index, e.group), e.state === ir) {
      for (e.state = Fn, i = new Array(h = e.tween.length), l = 0, c = -1; l < h; ++l)
        (d = e.tween[l].value.call(t, t.__data__, e.index, e.group)) && (i[++c] = d);
      i.length = c + 1;
    }
  }
  function a(f) {
    for (var l = f < e.duration ? e.ease.call(null, f / e.duration) : (e.timer.restart(u), e.state = sr, 1), c = -1, h = i.length; ++c < h; )
      i[c].call(t, l);
    e.state === sr && (e.on.call("end", t, t.__data__, e.index, e.group), u());
  }
  function u() {
    e.state = On, e.timer.stop(), delete r[n];
    for (var f in r)
      return;
    delete t.__transition;
  }
}
function rp(t, n) {
  var e = t.__transition, r, i, s = !0, o;
  if (e) {
    n = n == null ? null : n + "";
    for (o in e) {
      if ((r = e[o]).name !== n) {
        s = !1;
        continue;
      }
      i = r.state > ir && r.state < sr, r.state = On, r.timer.stop(), r.on.call(i ? "interrupt" : "cancel", t, t.__data__, r.index, r.group), delete e[o];
    }
    s && delete t.__transition;
  }
}
function ip(t) {
  return this.each(function() {
    rp(this, t);
  });
}
function sp(t, n) {
  var e, r;
  return function() {
    var i = it(this, t), s = i.tween;
    if (s !== e) {
      r = e = s;
      for (var o = 0, a = r.length; o < a; ++o)
        if (r[o].name === n) {
          r = r.slice(), r.splice(o, 1);
          break;
        }
    }
    i.tween = r;
  };
}
function op(t, n, e) {
  var r, i;
  if (typeof e != "function")
    throw new Error();
  return function() {
    var s = it(this, t), o = s.tween;
    if (o !== r) {
      i = (r = o).slice();
      for (var a = { name: n, value: e }, u = 0, f = i.length; u < f; ++u)
        if (i[u].name === n) {
          i[u] = a;
          break;
        }
      u === f && i.push(a);
    }
    s.tween = i;
  };
}
function ap(t, n) {
  var e = this._id;
  if (t += "", arguments.length < 2) {
    for (var r = V(this.node(), e).tween, i = 0, s = r.length, o; i < s; ++i)
      if ((o = r[i]).name === t)
        return o.value;
    return null;
  }
  return this.each((n == null ? sp : op)(e, t, n));
}
function Er(t, n, e) {
  var r = t._id;
  return t.each(function() {
    var i = it(this, r);
    (i.value || (i.value = {}))[n] = e.apply(this, arguments);
  }), function(i) {
    return V(i, r).value[n];
  };
}
function vo(t, n) {
  var e;
  return (typeof n == "number" ? at : n instanceof cn ? Ri : (e = cn(n)) ? (n = e, Ri) : A0)(t, n);
}
function up(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function fp(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function lp(t, n, e) {
  var r, i = e + "", s;
  return function() {
    var o = this.getAttribute(t);
    return o === i ? null : o === r ? s : s = n(r = o, e);
  };
}
function cp(t, n, e) {
  var r, i = e + "", s;
  return function() {
    var o = this.getAttributeNS(t.space, t.local);
    return o === i ? null : o === r ? s : s = n(r = o, e);
  };
}
function hp(t, n, e) {
  var r, i, s;
  return function() {
    var o, a = e(this), u;
    return a == null ? void this.removeAttribute(t) : (o = this.getAttribute(t), u = a + "", o === u ? null : o === r && u === i ? s : (i = u, s = n(r = o, a)));
  };
}
function dp(t, n, e) {
  var r, i, s;
  return function() {
    var o, a = e(this), u;
    return a == null ? void this.removeAttributeNS(t.space, t.local) : (o = this.getAttributeNS(t.space, t.local), u = a + "", o === u ? null : o === r && u === i ? s : (i = u, s = n(r = o, a)));
  };
}
function pp(t, n) {
  var e = he(t), r = e === "transform" ? E0 : vo;
  return this.attrTween(t, typeof n == "function" ? (e.local ? dp : hp)(e, r, Er(this, "attr." + t, n)) : n == null ? (e.local ? fp : up)(e) : (e.local ? cp : lp)(e, r, n));
}
function gp(t, n) {
  return function(e) {
    this.setAttribute(t, n.call(this, e));
  };
}
function xp(t, n) {
  return function(e) {
    this.setAttributeNS(t.space, t.local, n.call(this, e));
  };
}
function yp(t, n) {
  var e, r;
  function i() {
    var s = n.apply(this, arguments);
    return s !== r && (e = (r = s) && xp(t, s)), e;
  }
  return i._value = n, i;
}
function _p(t, n) {
  var e, r;
  function i() {
    var s = n.apply(this, arguments);
    return s !== r && (e = (r = s) && gp(t, s)), e;
  }
  return i._value = n, i;
}
function vp(t, n) {
  var e = "attr." + t;
  if (arguments.length < 2)
    return (e = this.tween(e)) && e._value;
  if (n == null)
    return this.tween(e, null);
  if (typeof n != "function")
    throw new Error();
  var r = he(t);
  return this.tween(e, (r.local ? yp : _p)(r, n));
}
function mp(t, n) {
  return function() {
    Rr(this, t).delay = +n.apply(this, arguments);
  };
}
function wp(t, n) {
  return n = +n, function() {
    Rr(this, t).delay = n;
  };
}
function $p(t) {
  var n = this._id;
  return arguments.length ? this.each((typeof t == "function" ? mp : wp)(n, t)) : V(this.node(), n).delay;
}
function bp(t, n) {
  return function() {
    it(this, t).duration = +n.apply(this, arguments);
  };
}
function Np(t, n) {
  return n = +n, function() {
    it(this, t).duration = n;
  };
}
function Ap(t) {
  var n = this._id;
  return arguments.length ? this.each((typeof t == "function" ? bp : Np)(n, t)) : V(this.node(), n).duration;
}
function Cp(t, n) {
  if (typeof n != "function")
    throw new Error();
  return function() {
    it(this, t).ease = n;
  };
}
function Mp(t) {
  var n = this._id;
  return arguments.length ? this.each(Cp(n, t)) : V(this.node(), n).ease;
}
function Rp(t) {
  typeof t != "function" && (t = io(t));
  for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
    for (var s = n[i], o = s.length, a = r[i] = [], u, f = 0; f < o; ++f)
      (u = s[f]) && t.call(u, u.__data__, f, s) && a.push(u);
  return new nt(r, this._parents, this._name, this._id);
}
function Ep(t) {
  if (t._id !== this._id)
    throw new Error();
  for (var n = this._groups, e = t._groups, r = n.length, i = e.length, s = Math.min(r, i), o = new Array(r), a = 0; a < s; ++a)
    for (var u = n[a], f = e[a], l = u.length, c = o[a] = new Array(l), h, d = 0; d < l; ++d)
      (h = u[d] || f[d]) && (c[d] = h);
  for (; a < r; ++a)
    o[a] = n[a];
  return new nt(o, this._parents, this._name, this._id);
}
function kp(t) {
  return (t + "").trim().split(/^|\s+/).every(function(n) {
    var e = n.indexOf(".");
    return e >= 0 && (n = n.slice(0, e)), !n || n === "start";
  });
}
function Sp(t, n, e) {
  var r, i, s = kp(n) ? Rr : it;
  return function() {
    var o = s(this, t), a = o.on;
    a !== r && (i = (r = a).copy()).on(n, e), o.on = i;
  };
}
function Tp(t, n) {
  var e = this._id;
  return arguments.length < 2 ? V(this.node(), e).on.on(t) : this.each(Sp(e, t, n));
}
function Ip(t) {
  return function() {
    var n = this.parentNode;
    for (var e in this.__transition)
      if (+e !== t)
        return;
    n && n.removeChild(this);
  };
}
function Pp() {
  return this.on("end.remove", Ip(this._id));
}
function Lp(t) {
  var n = this._name, e = this._id;
  typeof t != "function" && (t = Cr(t));
  for (var r = this._groups, i = r.length, s = new Array(i), o = 0; o < i; ++o)
    for (var a = r[o], u = a.length, f = s[o] = new Array(u), l, c, h = 0; h < u; ++h)
      (l = a[h]) && (c = t.call(l, l.__data__, h, a)) && ("__data__" in l && (c.__data__ = l.__data__), f[h] = c, ge(f[h], n, e, h, f, V(l, e)));
  return new nt(s, this._parents, n, e);
}
function Fp(t) {
  var n = this._name, e = this._id;
  typeof t != "function" && (t = ro(t));
  for (var r = this._groups, i = r.length, s = [], o = [], a = 0; a < i; ++a)
    for (var u = r[a], f = u.length, l, c = 0; c < f; ++c)
      if (l = u[c]) {
        for (var h = t.call(l, l.__data__, c, u), d, g = V(l, e), p = 0, x = h.length; p < x; ++p)
          (d = h[p]) && ge(d, n, e, p, h, g);
        s.push(h), o.push(l);
      }
  return new nt(s, o, n, e);
}
var Op = vn.prototype.constructor;
function zp() {
  return new Op(this._groups, this._parents);
}
function Dp(t, n) {
  var e, r, i;
  return function() {
    var s = Mt(this, t), o = (this.style.removeProperty(t), Mt(this, t));
    return s === o ? null : s === e && o === r ? i : i = n(e = s, r = o);
  };
}
function mo(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function qp(t, n, e) {
  var r, i = e + "", s;
  return function() {
    var o = Mt(this, t);
    return o === i ? null : o === r ? s : s = n(r = o, e);
  };
}
function Hp(t, n, e) {
  var r, i, s;
  return function() {
    var o = Mt(this, t), a = e(this), u = a + "";
    return a == null && (u = a = (this.style.removeProperty(t), Mt(this, t))), o === u ? null : o === r && u === i ? s : (i = u, s = n(r = o, a));
  };
}
function Xp(t, n) {
  var e, r, i, s = "style." + n, o = "end." + s, a;
  return function() {
    var u = it(this, t), f = u.on, l = u.value[s] == null ? a || (a = mo(n)) : void 0;
    (f !== e || i !== l) && (r = (e = f).copy()).on(o, i = l), u.on = r;
  };
}
function Bp(t, n, e) {
  var r = (t += "") == "transform" ? R0 : vo;
  return n == null ? this.styleTween(t, Dp(t, r)).on("end.style." + t, mo(t)) : typeof n == "function" ? this.styleTween(t, Hp(t, r, Er(this, "style." + t, n))).each(Xp(this._id, t)) : this.styleTween(t, qp(t, r, n), e).on("end.style." + t, null);
}
function Vp(t, n, e) {
  return function(r) {
    this.style.setProperty(t, n.call(this, r), e);
  };
}
function Up(t, n, e) {
  var r, i;
  function s() {
    var o = n.apply(this, arguments);
    return o !== i && (r = (i = o) && Vp(t, o, e)), r;
  }
  return s._value = n, s;
}
function Yp(t, n, e) {
  var r = "style." + (t += "");
  if (arguments.length < 2)
    return (r = this.tween(r)) && r._value;
  if (n == null)
    return this.tween(r, null);
  if (typeof n != "function")
    throw new Error();
  return this.tween(r, Up(t, n, e ?? ""));
}
function Gp(t) {
  return function() {
    this.textContent = t;
  };
}
function Wp(t) {
  return function() {
    var n = t(this);
    this.textContent = n ?? "";
  };
}
function Kp(t) {
  return this.tween("text", typeof t == "function" ? Wp(Er(this, "text", t)) : Gp(t == null ? "" : t + ""));
}
function Zp(t) {
  return function(n) {
    this.textContent = t.call(this, n);
  };
}
function Jp(t) {
  var n, e;
  function r() {
    var i = t.apply(this, arguments);
    return i !== e && (n = (e = i) && Zp(i)), n;
  }
  return r._value = t, r;
}
function Qp(t) {
  var n = "text";
  if (arguments.length < 1)
    return (n = this.tween(n)) && n._value;
  if (t == null)
    return this.tween(n, null);
  if (typeof t != "function")
    throw new Error();
  return this.tween(n, Jp(t));
}
function jp() {
  for (var t = this._name, n = this._id, e = wo(), r = this._groups, i = r.length, s = 0; s < i; ++s)
    for (var o = r[s], a = o.length, u, f = 0; f < a; ++f)
      if (u = o[f]) {
        var l = V(u, n);
        ge(u, t, e, f, o, {
          time: l.time + l.delay + l.duration,
          delay: 0,
          duration: l.duration,
          ease: l.ease
        });
      }
  return new nt(r, this._parents, t, e);
}
function tg() {
  var t, n, e = this, r = e._id, i = e.size();
  return new Promise(function(s, o) {
    var a = { value: o }, u = { value: function() {
      --i === 0 && s();
    } };
    e.each(function() {
      var f = it(this, r), l = f.on;
      l !== t && (n = (t = l).copy(), n._.cancel.push(a), n._.interrupt.push(a), n._.end.push(u)), f.on = n;
    });
  });
}
var ng = 0;
function nt(t, n, e, r) {
  this._groups = t, this._parents = n, this._name = e, this._id = r;
}
function wo() {
  return ++ng;
}
var gt = vn.prototype;
nt.prototype = {
  constructor: nt,
  select: Lp,
  selectAll: Fp,
  filter: Rp,
  merge: Ep,
  selection: zp,
  transition: jp,
  call: gt.call,
  nodes: gt.nodes,
  node: gt.node,
  size: gt.size,
  empty: gt.empty,
  each: gt.each,
  on: Tp,
  attr: pp,
  attrTween: vp,
  style: Bp,
  styleTween: Yp,
  text: Kp,
  textTween: Qp,
  remove: Pp,
  tween: ap,
  delay: $p,
  duration: Ap,
  ease: Mp,
  end: tg
};
function eg(t) {
  return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
}
var or = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: eg
};
function rg(t, n) {
  for (var e; !(e = t.__transition) || !(e = e[n]); )
    if (!(t = t.parentNode))
      return or.time = pe(), or;
  return e;
}
function ig(t) {
  var n, e;
  t instanceof nt ? (n = t._id, t = t._name) : (n = wo(), (e = or).time = pe(), t = t == null ? null : t + "");
  for (var r = this._groups, i = r.length, s = 0; s < i; ++s)
    for (var o = r[s], a = o.length, u, f = 0; f < a; ++f)
      (u = o[f]) && ge(u, t, n, f, o, e || rg(u, n));
  return new nt(r, this._parents, t, n);
}
vn.prototype.interrupt = ip;
vn.prototype.transition = ig;
function Jt(t, n, e) {
  this.k = t, this.x = n, this.y = e;
}
Jt.prototype = {
  constructor: Jt,
  scale: function(t) {
    return t === 1 ? this : new Jt(this.k * t, this.x, this.y);
  },
  translate: function(t, n) {
    return t === 0 & n === 0 ? this : new Jt(this.k, this.x + this.k * t, this.y + this.k * n);
  },
  apply: function(t) {
    return [t[0] * this.k + this.x, t[1] * this.k + this.y];
  },
  applyX: function(t) {
    return t * this.k + this.x;
  },
  applyY: function(t) {
    return t * this.k + this.y;
  },
  invert: function(t) {
    return [(t[0] - this.x) / this.k, (t[1] - this.y) / this.k];
  },
  invertX: function(t) {
    return (t - this.x) / this.k;
  },
  invertY: function(t) {
    return (t - this.y) / this.k;
  },
  rescaleX: function(t) {
    return t.copy().domain(t.range().map(this.invertX, this).map(t.invert, t));
  },
  rescaleY: function(t) {
    return t.copy().domain(t.range().map(this.invertY, this).map(t.invert, t));
  },
  toString: function() {
    return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
  }
};
Jt.prototype;
function sg(t, n, e, r) {
  r = r || {};
  var i = r.maxIterations || 100, s = r.tolerance || 1e-10, o = t(n), a = t(e), u = e - n;
  if (o * a > 0)
    throw "Initial bisect points must have opposite signs";
  if (o === 0)
    return n;
  if (a === 0)
    return e;
  for (var f = 0; f < i; ++f) {
    u /= 2;
    var l = n + u, c = t(l);
    if (c * o >= 0 && (n = l), Math.abs(u) < s || c === 0)
      return l;
  }
  return n + u;
}
function ar(t) {
  for (var n = new Array(t), e = 0; e < t; ++e)
    n[e] = 0;
  return n;
}
function Oi(t, n) {
  return ar(t).map(function() {
    return ar(n);
  });
}
function $t(t, n) {
  for (var e = 0, r = 0; r < t.length; ++r)
    e += t[r] * n[r];
  return e;
}
function ur(t) {
  return Math.sqrt($t(t, t));
}
function fr(t, n, e) {
  for (var r = 0; r < n.length; ++r)
    t[r] = n[r] * e;
}
function Q(t, n, e, r, i) {
  for (var s = 0; s < t.length; ++s)
    t[s] = n * e[s] + r * i[s];
}
function $o(t, n, e) {
  e = e || {};
  var r = e.maxIterations || n.length * 200, i = e.nonZeroDelta || 1.05, s = e.zeroDelta || 1e-3, o = e.minErrorDelta || 1e-6, a = e.minErrorDelta || 1e-5, u = e.rho !== void 0 ? e.rho : 1, f = e.chi !== void 0 ? e.chi : 2, l = e.psi !== void 0 ? e.psi : -0.5, c = e.sigma !== void 0 ? e.sigma : 0.5, h, d = n.length, g = new Array(d + 1);
  g[0] = n, g[0].fx = t(n), g[0].id = 0;
  for (var p = 0; p < d; ++p) {
    var x = n.slice();
    x[p] = x[p] ? x[p] * i : s, g[p + 1] = x, g[p + 1].fx = t(x), g[p + 1].id = p + 1;
  }
  function $(k) {
    for (var M = 0; M < k.length; M++)
      g[d][M] = k[M];
    g[d].fx = k.fx;
  }
  for (var v = function(k, M) {
    return k.fx - M.fx;
  }, y = n.slice(), b = n.slice(), N = n.slice(), _ = n.slice(), m = 0; m < r; ++m) {
    if (g.sort(v), e.history) {
      var C = g.map(function(k) {
        var M = k.slice();
        return M.fx = k.fx, M.id = k.id, M;
      });
      C.sort(function(k, M) {
        return k.id - M.id;
      }), e.history.push({
        x: g[0].slice(),
        fx: g[0].fx,
        simplex: C
      });
    }
    for (h = 0, p = 0; p < d; ++p)
      h = Math.max(h, Math.abs(g[0][p] - g[1][p]));
    if (Math.abs(g[0].fx - g[d].fx) < o && h < a)
      break;
    for (p = 0; p < d; ++p) {
      y[p] = 0;
      for (var z = 0; z < d; ++z)
        y[p] += g[z][p];
      y[p] /= d;
    }
    var R = g[d];
    if (Q(b, 1 + u, y, -u, R), b.fx = t(b), b.fx < g[0].fx)
      Q(_, 1 + f, y, -f, R), _.fx = t(_), _.fx < b.fx ? $(_) : $(b);
    else if (b.fx >= g[d - 1].fx) {
      var J = !1;
      if (b.fx > R.fx ? (Q(N, 1 + l, y, -l, R), N.fx = t(N), N.fx < R.fx ? $(N) : J = !0) : (Q(N, 1 - l * u, y, l * u, R), N.fx = t(N), N.fx < b.fx ? $(N) : J = !0), J) {
        if (c >= 1)
          break;
        for (p = 1; p < g.length; ++p)
          Q(g[p], 1 - c, g[0], c, g[p]), g[p].fx = t(g[p]);
      }
    } else
      $(b);
  }
  return g.sort(v), {
    fx: g[0].fx,
    x: g[0]
  };
}
function og(t, n, e, r, i, s, o) {
  var a = e.fx, u = $t(e.fxprime, n), f = a, l = a, c = u, h = 0;
  i = i || 1, s = s || 1e-6, o = o || 0.1;
  function d(p, x, $) {
    for (var v = 0; v < 16; ++v)
      if (i = (p + x) / 2, Q(r.x, 1, e.x, i, n), f = r.fx = t(r.x, r.fxprime), c = $t(r.fxprime, n), f > a + s * i * u || f >= $)
        x = i;
      else {
        if (Math.abs(c) <= -o * u)
          return i;
        c * (x - p) >= 0 && (x = p), p = i, $ = f;
      }
    return 0;
  }
  for (var g = 0; g < 10; ++g) {
    if (Q(r.x, 1, e.x, i, n), f = r.fx = t(r.x, r.fxprime), c = $t(r.fxprime, n), f > a + s * i * u || g && f >= l)
      return d(h, i, l);
    if (Math.abs(c) <= -o * u)
      return i;
    if (c >= 0)
      return d(i, h, f);
    l = f, h = i, i *= 2;
  }
  return i;
}
function ag(t, n, e) {
  var r = { x: n.slice(), fx: 0, fxprime: n.slice() }, i = { x: n.slice(), fx: 0, fxprime: n.slice() }, s = n.slice(), o, a, u = 1, f;
  e = e || {}, f = e.maxIterations || n.length * 20, r.fx = t(r.x, r.fxprime), o = r.fxprime.slice(), fr(o, r.fxprime, -1);
  for (var l = 0; l < f; ++l) {
    if (u = og(t, o, r, i, u), e.history && e.history.push({
      x: r.x.slice(),
      fx: r.fx,
      fxprime: r.fxprime.slice(),
      alpha: u
    }), !u)
      fr(o, r.fxprime, -1);
    else {
      Q(s, 1, i.fxprime, -1, r.fxprime);
      var c = $t(r.fxprime, r.fxprime), h = Math.max(0, $t(s, i.fxprime) / c);
      Q(o, h, o, -1, i.fxprime), a = r, r = i, i = a;
    }
    if (ur(r.fxprime) <= 1e-5)
      break;
  }
  return e.history && e.history.push({
    x: r.x.slice(),
    fx: r.fx,
    fxprime: r.fxprime.slice(),
    alpha: u
  }), r;
}
const bo = 1e-10;
function xe(t, n) {
  const e = fg(t), r = e.filter((a) => ug(a, t));
  let i = 0, s = 0;
  const o = [];
  if (r.length > 1) {
    const a = Ao(r);
    for (let f = 0; f < r.length; ++f) {
      const l = r[f];
      l.angle = Math.atan2(l.x - a.x, l.y - a.y);
    }
    r.sort((f, l) => l.angle - f.angle);
    let u = r[r.length - 1];
    for (let f = 0; f < r.length; ++f) {
      const l = r[f];
      s += (u.x + l.x) * (l.y - u.y);
      const c = { x: (l.x + u.x) / 2, y: (l.y + u.y) / 2 };
      let h = null;
      for (let d = 0; d < l.parentIndex.length; ++d)
        if (u.parentIndex.includes(l.parentIndex[d])) {
          const g = t[l.parentIndex[d]], p = Math.atan2(l.x - g.x, l.y - g.y), x = Math.atan2(u.x - g.x, u.y - g.y);
          let $ = x - p;
          $ < 0 && ($ += 2 * Math.PI);
          const v = x - $ / 2;
          let y = S(c, {
            x: g.x + g.radius * Math.sin(v),
            y: g.y + g.radius * Math.cos(v)
          });
          y > g.radius * 2 && (y = g.radius * 2), (h == null || h.width > y) && (h = { circle: g, width: y, p1: l, p2: u, large: y > g.radius, sweep: !0 });
        }
      h != null && (o.push(h), i += lr(h.circle.radius, h.width), u = l);
    }
  } else {
    let a = t[0];
    for (let f = 1; f < t.length; ++f)
      t[f].radius < a.radius && (a = t[f]);
    let u = !1;
    for (let f = 0; f < t.length; ++f)
      if (S(t[f], a) > Math.abs(a.radius - t[f].radius)) {
        u = !0;
        break;
      }
    u ? i = s = 0 : (i = a.radius * a.radius * Math.PI, o.push({
      circle: a,
      p1: { x: a.x, y: a.y + a.radius },
      p2: { x: a.x - bo, y: a.y + a.radius },
      width: a.radius * 2,
      large: !0,
      sweep: !0
    }));
  }
  return s /= 2, n && (n.area = i + s, n.arcArea = i, n.polygonArea = s, n.arcs = o, n.innerPoints = r, n.intersectionPoints = e), i + s;
}
function ug(t, n) {
  return n.every((e) => S(t, e) < e.radius + bo);
}
function fg(t) {
  const n = [];
  for (let e = 0; e < t.length; ++e)
    for (let r = e + 1; r < t.length; ++r) {
      const i = No(t[e], t[r]);
      for (const s of i)
        s.parentIndex = [e, r], n.push(s);
    }
  return n;
}
function lr(t, n) {
  return t * t * Math.acos(1 - n / t) - (t - n) * Math.sqrt(n * (2 * t - n));
}
function S(t, n) {
  return Math.sqrt((t.x - n.x) * (t.x - n.x) + (t.y - n.y) * (t.y - n.y));
}
function kr(t, n, e) {
  if (e >= t + n)
    return 0;
  if (e <= Math.abs(t - n))
    return Math.PI * Math.min(t, n) * Math.min(t, n);
  const r = t - (e * e - n * n + t * t) / (2 * e), i = n - (e * e - t * t + n * n) / (2 * e);
  return lr(t, r) + lr(n, i);
}
function No(t, n) {
  const e = S(t, n), r = t.radius, i = n.radius;
  if (e >= r + i || e <= Math.abs(r - i))
    return [];
  const s = (r * r - i * i + e * e) / (2 * e), o = Math.sqrt(r * r - s * s), a = t.x + s * (n.x - t.x) / e, u = t.y + s * (n.y - t.y) / e, f = -(n.y - t.y) * (o / e), l = -(n.x - t.x) * (o / e);
  return [
    { x: a + f, y: u - l },
    { x: a - f, y: u + l }
  ];
}
function Ao(t) {
  const n = { x: 0, y: 0 };
  for (const e of t)
    n.x += e.x, n.y += e.y;
  return n.x /= t.length, n.y /= t.length, n;
}
function lg(t, n = {}) {
  n.maxIterations = n.maxIterations || 500;
  const e = n.initialLayout || pg, r = n.lossFunction || dn, i = cg(t, n), s = e(i, n), o = Object.keys(s), a = [];
  for (const l of o)
    a.push(s[l].x), a.push(s[l].y);
  const f = $o(
    (l) => {
      const c = {};
      for (let h = 0; h < o.length; ++h) {
        const d = o[h];
        c[d] = {
          x: l[2 * h],
          y: l[2 * h + 1],
          radius: s[d].radius
          // size : circles[setid].size
        };
      }
      return r(c, i);
    },
    a,
    n
  ).x;
  for (let l = 0; l < o.length; ++l) {
    const c = o[l];
    s[c].x = f[2 * l], s[c].y = f[2 * l + 1];
  }
  return s;
}
const Co = 1e-10;
function cr(t, n, e) {
  return Math.min(t, n) * Math.min(t, n) * Math.PI <= e + Co ? Math.abs(t - n) : sg((r) => kr(t, n, r) - e, 0, t + n);
}
function cg(t, n = {}) {
  const e = n.distinct, r = t.map((a) => Object.assign({}, a));
  function i(a) {
    return a.join(";");
  }
  if (e) {
    const a = /* @__PURE__ */ new Map();
    for (const u of r)
      for (let f = 0; f < u.sets.length; f++) {
        const l = String(u.sets[f]);
        a.set(l, u.size + (a.get(l) || 0));
        for (let c = f + 1; c < u.sets.length; c++) {
          const h = String(u.sets[c]), d = `${l};${h}`, g = `${h};${l}`;
          a.set(d, u.size + (a.get(d) || 0)), a.set(g, u.size + (a.get(g) || 0));
        }
      }
    for (const u of r)
      u.sets.length < 3 && (u.size = a.get(i(u.sets)));
  }
  const s = [], o = /* @__PURE__ */ new Set();
  for (const a of r)
    if (a.sets.length === 1)
      s.push(a.sets[0]);
    else if (a.sets.length === 2) {
      const u = a.sets[0], f = a.sets[1];
      o.add(i(a.sets)), o.add(i([f, u]));
    }
  s.sort((a, u) => a === u ? 0 : a < u ? -1 : 1);
  for (let a = 0; a < s.length; ++a) {
    const u = s[a];
    for (let f = a + 1; f < s.length; ++f) {
      const l = s[f];
      o.has(i([u, l])) || r.push({ sets: [u, l], size: 0 });
    }
  }
  return r;
}
function hg(t, n, e) {
  const r = Oi(n.length, n.length), i = Oi(n.length, n.length);
  return t.filter((s) => s.sets.length === 2).forEach((s) => {
    const o = e[s.sets[0]], a = e[s.sets[1]], u = Math.sqrt(n[o].size / Math.PI), f = Math.sqrt(n[a].size / Math.PI), l = cr(u, f, s.size);
    r[o][a] = r[a][o] = l;
    let c = 0;
    s.size + 1e-10 >= Math.min(n[o].size, n[a].size) ? c = 1 : s.size <= 1e-10 && (c = -1), i[o][a] = i[a][o] = c;
  }), { distances: r, constraints: i };
}
function dg(t, n, e, r) {
  for (let s = 0; s < n.length; ++s)
    n[s] = 0;
  let i = 0;
  for (let s = 0; s < e.length; ++s) {
    const o = t[2 * s], a = t[2 * s + 1];
    for (let u = s + 1; u < e.length; ++u) {
      const f = t[2 * u], l = t[2 * u + 1], c = e[s][u], h = r[s][u], d = (f - o) * (f - o) + (l - a) * (l - a), g = Math.sqrt(d), p = d - c * c;
      h > 0 && g <= c || h < 0 && g >= c || (i += 2 * p * p, n[2 * s] += 4 * p * (o - f), n[2 * s + 1] += 4 * p * (a - l), n[2 * u] += 4 * p * (f - o), n[2 * u + 1] += 4 * p * (l - a));
    }
  }
  return i;
}
function pg(t, n = {}) {
  let e = xg(t, n);
  const r = n.lossFunction || dn;
  if (t.length >= 8) {
    const i = gg(t, n), s = r(i, t), o = r(e, t);
    s + 1e-8 < o && (e = i);
  }
  return e;
}
function gg(t, n = {}) {
  const e = n.restarts || 10, r = [], i = {};
  for (const h of t)
    h.sets.length === 1 && (i[h.sets[0]] = r.length, r.push(h));
  let { distances: s, constraints: o } = hg(t, r, i);
  const a = ur(s.map(ur)) / s.length;
  s = s.map((h) => h.map((d) => d / a));
  const u = (h, d) => dg(h, d, s, o);
  let f = null;
  for (let h = 0; h < e; ++h) {
    const d = ar(s.length * 2).map(Math.random), g = ag(u, d, n);
    (!f || g.fx < f.fx) && (f = g);
  }
  const l = f.x, c = {};
  for (let h = 0; h < r.length; ++h) {
    const d = r[h];
    c[d.sets[0]] = {
      x: l[2 * h] * a,
      y: l[2 * h + 1] * a,
      radius: Math.sqrt(d.size / Math.PI)
    };
  }
  if (n.history)
    for (const h of n.history)
      fr(h.x, a);
  return c;
}
function xg(t, n) {
  const e = n && n.lossFunction ? n.lossFunction : dn, r = {}, i = {};
  for (const c of t)
    if (c.sets.length === 1) {
      const h = c.sets[0];
      r[h] = {
        x: 1e10,
        y: 1e10,
        rowid: r.length,
        size: c.size,
        radius: Math.sqrt(c.size / Math.PI)
      }, i[h] = [];
    }
  t = t.filter((c) => c.sets.length === 2);
  for (const c of t) {
    let h = c.weight != null ? c.weight : 1;
    const d = c.sets[0], g = c.sets[1];
    c.size + Co >= Math.min(r[d].size, r[g].size) && (h = 0), i[d].push({ set: g, size: c.size, weight: h }), i[g].push({ set: d, size: c.size, weight: h });
  }
  const s = [];
  Object.keys(i).forEach((c) => {
    let h = 0;
    for (let d = 0; d < i[c].length; ++d)
      h += i[c][d].size * i[c][d].weight;
    s.push({ set: c, size: h });
  });
  function o(c, h) {
    return h.size - c.size;
  }
  s.sort(o);
  const a = {};
  function u(c) {
    return c.set in a;
  }
  function f(c, h) {
    r[h].x = c.x, r[h].y = c.y, a[h] = !0;
  }
  f({ x: 0, y: 0 }, s[0].set);
  for (let c = 1; c < s.length; ++c) {
    const h = s[c].set, d = i[h].filter(u), g = r[h];
    if (d.sort(o), d.length === 0)
      throw "ERROR: missing pairwise overlap information";
    const p = [];
    for (var l = 0; l < d.length; ++l) {
      const v = r[d[l].set], y = cr(g.radius, v.radius, d[l].size);
      p.push({ x: v.x + y, y: v.y }), p.push({ x: v.x - y, y: v.y }), p.push({ y: v.y + y, x: v.x }), p.push({ y: v.y - y, x: v.x });
      for (let b = l + 1; b < d.length; ++b) {
        const N = r[d[b].set], _ = cr(g.radius, N.radius, d[b].size), m = No(
          { x: v.x, y: v.y, radius: y },
          { x: N.x, y: N.y, radius: _ }
        );
        p.push(...m);
      }
    }
    let x = 1e50, $ = p[0];
    for (const v of p) {
      r[h].x = v.x, r[h].y = v.y;
      const y = e(r, t);
      y < x && (x = y, $ = v);
    }
    f($, h);
  }
  return r;
}
function dn(t, n) {
  let e = 0;
  for (const r of n) {
    if (r.sets.length === 1)
      continue;
    let i;
    if (r.sets.length === 2) {
      const o = t[r.sets[0]], a = t[r.sets[1]];
      i = kr(o.radius, a.radius, S(o, a));
    } else
      i = xe(r.sets.map((o) => t[o]));
    const s = r.weight != null ? r.weight : 1;
    e += s * (i - r.size) * (i - r.size);
  }
  return e;
}
function yg(t, n) {
  let e = 0;
  for (const r of n) {
    if (r.sets.length === 1)
      continue;
    let i;
    if (r.sets.length === 2) {
      const a = t[r.sets[0]], u = t[r.sets[1]];
      i = kr(a.radius, u.radius, S(a, u));
    } else
      i = xe(r.sets.map((a) => t[a]));
    const s = r.weight != null ? r.weight : 1, o = Math.log((i + 1) / (r.size + 1));
    e += s * o * o;
  }
  return e;
}
function _g(t, n, e) {
  if (e == null ? t.sort((i, s) => s.radius - i.radius) : t.sort(e), t.length > 0) {
    const i = t[0].x, s = t[0].y;
    for (const o of t)
      o.x -= i, o.y -= s;
  }
  if (t.length === 2 && S(t[0], t[1]) < Math.abs(t[1].radius - t[0].radius) && (t[1].x = t[0].x + t[0].radius - t[1].radius - 1e-10, t[1].y = t[0].y), t.length > 1) {
    const i = Math.atan2(t[1].x, t[1].y) - n, s = Math.cos(i), o = Math.sin(i);
    for (const a of t) {
      const u = a.x, f = a.y;
      a.x = s * u - o * f, a.y = o * u + s * f;
    }
  }
  if (t.length > 2) {
    let i = Math.atan2(t[2].x, t[2].y) - n;
    for (; i < 0; )
      i += 2 * Math.PI;
    for (; i > 2 * Math.PI; )
      i -= 2 * Math.PI;
    if (i > Math.PI) {
      const s = t[1].y / (1e-10 + t[1].x);
      for (const o of t) {
        var r = (o.x + s * o.y) / (1 + s * s);
        o.x = 2 * r - o.x, o.y = 2 * r * s - o.y;
      }
    }
  }
}
function vg(t) {
  t.forEach((i) => {
    i.parent = i;
  });
  function n(i) {
    return i.parent !== i && (i.parent = n(i.parent)), i.parent;
  }
  function e(i, s) {
    const o = n(i), a = n(s);
    o.parent = a;
  }
  for (let i = 0; i < t.length; ++i)
    for (let s = i + 1; s < t.length; ++s) {
      const o = t[i].radius + t[s].radius;
      S(t[i], t[s]) + 1e-10 < o && e(t[s], t[i]);
    }
  const r = /* @__PURE__ */ new Map();
  for (let i = 0; i < t.length; ++i) {
    const s = n(t[i]).parent.setid;
    r.has(s) || r.set(s, []), r.get(s).push(t[i]);
  }
  return t.forEach((i) => {
    delete i.parent;
  }), Array.from(r.values());
}
function hr(t) {
  const n = (e) => {
    const r = t.reduce((s, o) => Math.max(s, o[e] + o.radius), Number.NEGATIVE_INFINITY), i = t.reduce((s, o) => Math.min(s, o[e] - o.radius), Number.POSITIVE_INFINITY);
    return { max: r, min: i };
  };
  return { xRange: n("x"), yRange: n("y") };
}
function mg(t, n, e) {
  n == null && (n = Math.PI / 2);
  let r = Ro(t).map((f) => Object.assign({}, f));
  const i = vg(r);
  for (const f of i) {
    _g(f, n, e);
    const l = hr(f);
    f.size = (l.xRange.max - l.xRange.min) * (l.yRange.max - l.yRange.min), f.bounds = l;
  }
  i.sort((f, l) => l.size - f.size), r = i[0];
  let s = r.bounds;
  const o = (s.xRange.max - s.xRange.min) / 50;
  function a(f, l, c) {
    if (!f)
      return;
    const h = f.bounds;
    let d, g;
    if (l)
      d = s.xRange.max - h.xRange.min + o;
    else {
      d = s.xRange.max - h.xRange.max;
      const p = (h.xRange.max - h.xRange.min) / 2 - (s.xRange.max - s.xRange.min) / 2;
      p < 0 && (d += p);
    }
    if (c)
      g = s.yRange.max - h.yRange.min + o;
    else {
      g = s.yRange.max - h.yRange.max;
      const p = (h.yRange.max - h.yRange.min) / 2 - (s.yRange.max - s.yRange.min) / 2;
      p < 0 && (g += p);
    }
    for (const p of f)
      p.x += d, p.y += g, r.push(p);
  }
  let u = 1;
  for (; u < i.length; )
    a(i[u], !0, !1), a(i[u + 1], !1, !0), a(i[u + 2], !0, !0), u += 3, s = hr(r);
  return Mo(r);
}
function wg(t, n, e, r, i) {
  const s = Ro(t);
  n -= 2 * r, e -= 2 * r;
  const { xRange: o, yRange: a } = hr(s);
  if (o.max === o.min || a.max === a.min)
    return console.log("not scaling solution: zero size detected"), t;
  let u, f;
  if (i) {
    const d = Math.sqrt(i / Math.PI) * 2;
    u = n / d, f = e / d;
  } else
    u = n / (o.max - o.min), f = e / (a.max - a.min);
  const l = Math.min(f, u), c = (n - (o.max - o.min) * l) / 2, h = (e - (a.max - a.min) * l) / 2;
  return Mo(
    s.map((d) => ({
      radius: l * d.radius,
      x: r + c + (d.x - o.min) * l,
      y: r + h + (d.y - a.min) * l,
      setid: d.setid
    }))
  );
}
function Mo(t) {
  const n = {};
  for (const e of t)
    n[e.setid] = e;
  return n;
}
function Ro(t) {
  return Object.keys(t).map((e) => Object.assign(t[e], { setid: e }));
}
function $g(t = {}) {
  let n = !1, e = 600, r = 350, i = 15, s = 1e3, o = Math.PI / 2, a = !0, u = null, f = !0, l = !0, c = null, h = null, d = !1, g = null, p = t && t.symmetricalTextCentre ? t.symmetricalTextCentre : !1, x = {}, $ = t && t.colourScheme ? t.colourScheme : t && t.colorScheme ? t.colorScheme : [
    "#1f77b4",
    "#ff7f0e",
    "#2ca02c",
    "#d62728",
    "#9467bd",
    "#8c564b",
    "#e377c2",
    "#7f7f7f",
    "#bcbd22",
    "#17becf"
  ], v = 0, y = function(m) {
    if (m in x)
      return x[m];
    var C = x[m] = $[v];
    return v += 1, v >= $.length && (v = 0), C;
  }, b = lg, N = dn;
  function _(m) {
    let C = m.datum();
    const z = /* @__PURE__ */ new Set();
    C.forEach((w) => {
      w.size == 0 && w.sets.length == 1 && z.add(w.sets[0]);
    }), C = C.filter((w) => !w.sets.some((T) => z.has(T)));
    let R = {}, J = {};
    if (C.length > 0) {
      let w = b(C, { lossFunction: N, distinct: d });
      a && (w = mg(w, o, h)), R = wg(w, e, r, i, u), J = Ng(R, C, p);
    }
    const k = {};
    C.forEach((w) => {
      w.label && (k[w.sets] = w.label);
    });
    function M(w) {
      if (w.sets in k)
        return k[w.sets];
      if (w.sets.length == 1)
        return "" + w.sets[0];
    }
    m.selectAll("svg").data([R]).enter().append("svg");
    const mn = m.select("svg");
    n ? mn.attr("viewBox", `0 0 ${e} ${r}`) : mn.attr("width", e).attr("height", r);
    const Sr = {};
    let ye = !1;
    mn.selectAll(".venn-area path").each(function(w) {
      const T = this.getAttribute("d");
      w.sets.length == 1 && T && !d && (ye = !0, Sr[w.sets[0]] = Cg(T));
    });
    function Tr(w) {
      return (T) => {
        const Po = w.sets.map((Lr) => {
          let St = Sr[Lr], Tt = R[Lr];
          return St || (St = { x: e / 2, y: r / 2, radius: 1 }), Tt || (Tt = { x: e / 2, y: r / 2, radius: 1 }), {
            x: St.x * (1 - T) + Tt.x * T,
            y: St.y * (1 - T) + Tt.y * T,
            radius: St.radius * (1 - T) + Tt.radius * T
          };
        });
        return zi(Po, g);
      };
    }
    const wn = mn.selectAll(".venn-area").data(C, (w) => w.sets), _e = wn.enter().append("g").attr(
      "class",
      (w) => `venn-area venn-${w.sets.length == 1 ? "circle" : "intersection"}${w.colour || w.color ? " venn-coloured" : ""}`
    ).attr("data-venn-sets", (w) => w.sets.join("_")), To = _e.append("path"), Ir = _e.append("text").attr("class", "label").text((w) => M(w)).attr("text-anchor", "middle").attr("dy", ".35em").attr("x", e / 2).attr("y", r / 2);
    l && (To.style("fill-opacity", "0").filter((w) => w.sets.length == 1).style("fill", (w) => w.colour ? w.colour : w.color ? w.color : y(w.sets)).style("fill-opacity", ".25"), Ir.style("fill", (w) => w.colour || w.color ? "#FFF" : t.textFill ? t.textFill : w.sets.length == 1 ? y(w.sets) : "#444"));
    function Pr(w) {
      return typeof w.transition == "function" ? w.transition("venn").duration(s) : w;
    }
    let ht = m;
    ye && typeof ht.transition == "function" ? (ht = Pr(m), ht.selectAll("path").attrTween("d", Tr)) : ht.selectAll("path").attr("d", (w) => zi(w.sets.map((T) => R[T])), g);
    const kt = ht.selectAll("text").filter((w) => w.sets in J).text((w) => M(w)).attr("x", (w) => Math.floor(J[w.sets].x)).attr("y", (w) => Math.floor(J[w.sets].y));
    f && (ye ? "on" in kt ? kt.on("end", Ie(R, M)) : kt.each("end", Ie(R, M)) : kt.each(Ie(R, M)));
    const ve = Pr(wn.exit()).remove();
    typeof wn.transition == "function" && ve.selectAll("path").attrTween("d", Tr);
    const Io = ve.selectAll("text").attr("x", e / 2).attr("y", r / 2);
    return c !== null && (Ir.style("font-size", "0px"), kt.style("font-size", c), Io.style("font-size", "0px")), { circles: R, textCentres: J, nodes: wn, enter: _e, update: ht, exit: ve };
  }
  return _.wrap = function(m) {
    return arguments.length ? (f = m, _) : f;
  }, _.useViewBox = function() {
    return n = !0, _;
  }, _.width = function(m) {
    return arguments.length ? (e = m, _) : e;
  }, _.height = function(m) {
    return arguments.length ? (r = m, _) : r;
  }, _.padding = function(m) {
    return arguments.length ? (i = m, _) : i;
  }, _.distinct = function(m) {
    return arguments.length ? (d = m, _) : d;
  }, _.colours = function(m) {
    return arguments.length ? (y = m, _) : y;
  }, _.colors = function(m) {
    return arguments.length ? (y = m, _) : colors;
  }, _.fontSize = function(m) {
    return arguments.length ? (c = m, _) : c;
  }, _.round = function(m) {
    return arguments.length ? (g = m, _) : g;
  }, _.duration = function(m) {
    return arguments.length ? (s = m, _) : s;
  }, _.layoutFunction = function(m) {
    return arguments.length ? (b = m, _) : b;
  }, _.normalize = function(m) {
    return arguments.length ? (a = m, _) : a;
  }, _.scaleToFit = function(m) {
    return arguments.length ? (u = m, _) : u;
  }, _.styled = function(m) {
    return arguments.length ? (l = m, _) : l;
  }, _.orientation = function(m) {
    return arguments.length ? (o = m, _) : o;
  }, _.orientationOrder = function(m) {
    return arguments.length ? (h = m, _) : h;
  }, _.lossFunction = function(m) {
    return arguments.length ? (N = m === "default" ? dn : m === "logRatio" ? yg : m, _) : N;
  }, _;
}
function Ie(t, n) {
  return function(e) {
    const r = this, i = t[e.sets[0]].radius || 50, s = n(e) || "", o = s.split(/\s+/).reverse(), a = 3, u = (s.length + o.length) / a;
    let f = o.pop(), l = [f], c = 0;
    const h = 1.1;
    r.textContent = null;
    const d = [];
    function g(y) {
      const b = r.ownerDocument.createElementNS(r.namespaceURI, "tspan");
      return b.textContent = y, d.push(b), r.append(b), b;
    }
    let p = g(f);
    for (; f = o.pop(), !!f; ) {
      l.push(f);
      const y = l.join(" ");
      p.textContent = y, y.length > u && p.getComputedTextLength() > i && (l.pop(), p.textContent = l.join(" "), l = [f], p = g(f), c++);
    }
    const x = 0.35 - c * h / 2, $ = r.getAttribute("x"), v = r.getAttribute("y");
    d.forEach((y, b) => {
      y.setAttribute("x", $), y.setAttribute("y", v), y.setAttribute("dy", `${x + b * h}em`);
    });
  };
}
function Pe(t, n, e) {
  let r = n[0].radius - S(n[0], t);
  for (let i = 1; i < n.length; ++i) {
    const s = n[i].radius - S(n[i], t);
    s <= r && (r = s);
  }
  for (let i = 0; i < e.length; ++i) {
    const s = S(e[i], t) - e[i].radius;
    s <= r && (r = s);
  }
  return r;
}
function Eo(t, n, e) {
  const r = [];
  for (const l of t)
    r.push({ x: l.x, y: l.y }), r.push({ x: l.x + l.radius / 2, y: l.y }), r.push({ x: l.x - l.radius / 2, y: l.y }), r.push({ x: l.x, y: l.y + l.radius / 2 }), r.push({ x: l.x, y: l.y - l.radius / 2 });
  let i = r[0], s = Pe(r[0], t, n);
  for (let l = 1; l < r.length; ++l) {
    const c = Pe(r[l], t, n);
    c >= s && (i = r[l], s = c);
  }
  const o = $o(
    (l) => -1 * Pe({ x: l[0], y: l[1] }, t, n),
    [i.x, i.y],
    { maxIterations: 500, minErrorDelta: 1e-10 }
  ).x, a = { x: e ? 0 : o[0], y: o[1] };
  let u = !0;
  for (const l of t)
    if (S(a, l) > l.radius) {
      u = !1;
      break;
    }
  for (const l of n)
    if (S(a, l) < l.radius) {
      u = !1;
      break;
    }
  if (u)
    return a;
  if (t.length == 1)
    return { x: t[0].x, y: t[0].y };
  const f = {};
  return xe(t, f), f.arcs.length === 0 ? { x: 0, y: -1e3, disjoint: !0 } : f.arcs.length == 1 ? { x: f.arcs[0].circle.x, y: f.arcs[0].circle.y } : n.length ? Eo(t, []) : Ao(f.arcs.map((l) => l.p1));
}
function bg(t) {
  const n = {}, e = Object.keys(t);
  for (const r of e)
    n[r] = [];
  for (let r = 0; r < e.length; r++) {
    const i = e[r], s = t[i];
    for (let o = r + 1; o < e.length; ++o) {
      const a = e[o], u = t[a], f = S(s, u);
      f + u.radius <= s.radius + 1e-10 ? n[a].push(i) : f + s.radius <= u.radius + 1e-10 && n[i].push(a);
    }
  }
  return n;
}
function Ng(t, n, e) {
  const r = {}, i = bg(t);
  for (let s = 0; s < n.length; ++s) {
    const o = n[s].sets, a = {}, u = {};
    for (let h = 0; h < o.length; ++h) {
      a[o[h]] = !0;
      const d = i[o[h]];
      for (let g = 0; g < d.length; ++g)
        u[d[g]] = !0;
    }
    const f = [], l = [];
    for (let h in t)
      h in a ? f.push(t[h]) : h in u || l.push(t[h]);
    const c = Eo(f, l, e);
    r[o] = c, c.disjoint && n[s].size > 0 && console.log("WARNING: area " + o + " not represented on screen");
  }
  return r;
}
function Ag(t, n, e) {
  const r = [];
  return r.push(`
M`, t, n), r.push(`
m`, -e, 0), r.push(`
a`, e, e, 0, 1, 0, e * 2, 0), r.push(`
a`, e, e, 0, 1, 0, -e * 2, 0), r.join(" ");
}
function Cg(t) {
  const n = t.split(" ");
  return { x: Number.parseFloat(n[1]), y: Number.parseFloat(n[2]), radius: -Number.parseFloat(n[4]) };
}
function Mg(t) {
  if (t.length === 0)
    return [];
  const n = {};
  return xe(t, n), n.arcs;
}
function Rg(t, n) {
  if (t.length === 0)
    return "M 0 0";
  const e = Math.pow(10, n || 0), r = n != null ? (s) => Math.round(s * e) / e : (s) => s;
  if (t.length == 1) {
    const s = t[0].circle;
    return Ag(r(s.x), r(s.y), r(s.radius));
  }
  const i = [`
M`, r(t[0].p2.x), r(t[0].p2.y)];
  for (const s of t) {
    const o = r(s.circle.radius);
    i.push(`
A`, o, o, 0, s.large ? 1 : 0, s.sweep ? 1 : 0, r(s.p1.x), r(s.p1.y));
  }
  return i.join(" ");
}
function zi(t, n) {
  return Rg(Mg(t), n);
}
var Eg = typeof global == "object" && global && global.Object === Object && global;
const kg = Eg;
var Sg = typeof self == "object" && self && self.Object === Object && self, Tg = kg || Sg || Function("return this")();
const ko = Tg;
var Ig = ko.Symbol;
const ee = Ig;
var So = Object.prototype, Pg = So.hasOwnProperty, Lg = So.toString, Bt = ee ? ee.toStringTag : void 0;
function Fg(t) {
  var n = Pg.call(t, Bt), e = t[Bt];
  try {
    t[Bt] = void 0;
    var r = !0;
  } catch {
  }
  var i = Lg.call(t);
  return r && (n ? t[Bt] = e : delete t[Bt]), i;
}
var Og = Object.prototype, zg = Og.toString;
function Dg(t) {
  return zg.call(t);
}
var qg = "[object Null]", Hg = "[object Undefined]", Di = ee ? ee.toStringTag : void 0;
function Xg(t) {
  return t == null ? t === void 0 ? Hg : qg : Di && Di in Object(t) ? Fg(t) : Dg(t);
}
function Bg(t) {
  return t != null && typeof t == "object";
}
var Vg = "[object Symbol]";
function Ug(t) {
  return typeof t == "symbol" || Bg(t) && Xg(t) == Vg;
}
var Yg = /\s/;
function Gg(t) {
  for (var n = t.length; n-- && Yg.test(t.charAt(n)); )
    ;
  return n;
}
var Wg = /^\s+/;
function Kg(t) {
  return t && t.slice(0, Gg(t) + 1).replace(Wg, "");
}
function dr(t) {
  var n = typeof t;
  return t != null && (n == "object" || n == "function");
}
var qi = 0 / 0, Zg = /^[-+]0x[0-9a-f]+$/i, Jg = /^0b[01]+$/i, Qg = /^0o[0-7]+$/i, jg = parseInt;
function Hi(t) {
  if (typeof t == "number")
    return t;
  if (Ug(t))
    return qi;
  if (dr(t)) {
    var n = typeof t.valueOf == "function" ? t.valueOf() : t;
    t = dr(n) ? n + "" : n;
  }
  if (typeof t != "string")
    return t === 0 ? t : +t;
  t = Kg(t);
  var e = Jg.test(t);
  return e || Qg.test(t) ? jg(t.slice(2), e ? 2 : 8) : Zg.test(t) ? qi : +t;
}
var tx = function() {
  return ko.Date.now();
};
const Le = tx;
var nx = "Expected a function", ex = Math.max, rx = Math.min;
function Xi(t, n, e) {
  var r, i, s, o, a, u, f = 0, l = !1, c = !1, h = !0;
  if (typeof t != "function")
    throw new TypeError(nx);
  n = Hi(n) || 0, dr(e) && (l = !!e.leading, c = "maxWait" in e, s = c ? ex(Hi(e.maxWait) || 0, n) : s, h = "trailing" in e ? !!e.trailing : h);
  function d(_) {
    var m = r, C = i;
    return r = i = void 0, f = _, o = t.apply(C, m), o;
  }
  function g(_) {
    return f = _, a = setTimeout($, n), l ? d(_) : o;
  }
  function p(_) {
    var m = _ - u, C = _ - f, z = n - m;
    return c ? rx(z, s - C) : z;
  }
  function x(_) {
    var m = _ - u, C = _ - f;
    return u === void 0 || m >= n || m < 0 || c && C >= s;
  }
  function $() {
    var _ = Le();
    if (x(_))
      return v(_);
    a = setTimeout($, p(_));
  }
  function v(_) {
    return a = void 0, h && r ? d(_) : (r = i = void 0, o);
  }
  function y() {
    a !== void 0 && clearTimeout(a), f = 0, r = u = i = a = void 0;
  }
  function b() {
    return a === void 0 ? o : v(Le());
  }
  function N() {
    var _ = Le(), m = x(_);
    if (r = arguments, i = this, u = _, m) {
      if (a === void 0)
        return g(u);
      if (c)
        return clearTimeout(a), a = setTimeout($, n), d(u);
    }
    return a === void 0 && (a = setTimeout($, n)), o;
  }
  return N.cancel = y, N.flush = b, N;
}
const ix = (t) => (Xo("data-v-b7bfc9e5"), t = t(), Bo(), t), sx = /* @__PURE__ */ ix(() => /* @__PURE__ */ Vo("div", { id: "venn" }, null, -1)), ox = [
  sx
], ax = Bi({
  name: "VennChart"
}), ux = /* @__PURE__ */ Bi({
  ...ax,
  props: {
    data: { default: () => [] },
    colors: { default: () => [] },
    legend: { default: () => [] },
    strokeWidth: { default: 3 },
    strokeColor: { default: "#f6cd61" },
    tooltipOffsetX: { default: 20 },
    tooltipOffsetY: { default: 10 },
    tooltipOpacity: { default: 0.9 },
    tooltipDelay: { default: 300 },
    textColor: { default: "#fff" }
  },
  emits: ["clickItem"],
  setup(t, { emit: n }) {
    const e = t;
    Lo((l) => ({
      "2e002890": a.value
    }));
    const r = $n(0), i = $n(0), s = ["#96ceb4", "#ffeead", "#ff6f69", "#ffcc5c", "#88d8b0", "#ee4035", "#f37736", "#fdf498", "#7bc043", "#0392cf"], o = Fo({
      get() {
        return e.colors.length < e.data.length ? [...e.colors, ...s] : e.colors;
      },
      set(l) {
        o.value = l;
      }
    });
    Oo(
      [() => e.data, () => e.legend],
      () => {
        Ft("#venn").select("svg").remove() && f();
      },
      { deep: !0 }
    );
    const a = $n(""), u = $n();
    function f() {
      if (!u.value) {
        console.warn("Please check if the chart container dom exists, and make sure the width and height are set.(请检查是否存在图表容器dom节点,并设置好宽高)");
        return;
      }
      const l = document.getElementsByClassName("custom-venn-chart-tooltip");
      for (const g of l)
        g.remove();
      r.value = u.value.getBoundingClientRect().width, i.value = u.value.getBoundingClientRect().height;
      const c = Ft("#venn"), h = $g({
        symmetricalTextCentre: !1
        // label是否放在圆的正中间
        // colorScheme: ['#19c386', '#409eff'] // 预设sets的颜色
        // textFill: '#fff' // 文字填充颜色
      }).width(r.value).height(i.value);
      c.datum(e.data).call(h), c.selectAll("g path").style("fill", function(g, p) {
        return o.value[p];
      }).style("fill-opacity", 0.7).style("stroke-opacity", 0).style("stroke-width", e.strokeWidth).style("stroke", e.strokeColor), c.selectAll("text").style("fill", e.textColor).style("font-size", "20px").style("font-weight", "700");
      const d = Ft("body .wrapper-venn").append("div").attr("class", "custom-venn-chart-tooltip");
      c.selectAll("g").on("mouseover", function(g, p) {
        a.value = o.value[p], d.transition().duration(e.tooltipDelay).style("opacity", e.tooltipOpacity), d.text(`${e.legend[p]} ${g.label}`), Ft(this).transition("tooltip").duration(e.tooltipDelay).select("path").style("stroke-opacity", 1).style("fill-opacity", 1).style("fill", o.value[p]);
      }).on("mousemove", function(g, p) {
        d.style("left", Qt.pageX + e.tooltipOffsetX + "px").style("top", Qt.pageY + e.tooltipOffsetY + "px");
      }).on("mouseout", function(g, p) {
        d.transition().duration(e.tooltipDelay).style("opacity", 0), Ft(this).transition("tooltip").duration(e.tooltipDelay).select("path").style("stroke-opacity", 0).style("fill-opacity", 0.7).style("fill", o.value[p]);
      }).on("mousedown", function(g) {
        n("clickItem", g);
      });
    }
    return zo(() => {
      f(), window.addEventListener("resize", Xi(f, 500));
    }), Do(() => {
      window.removeEventListener("resize", Xi(f, 500));
    }), (l, c) => (qo(), Ho("div", {
      ref_key: "wrapperDom",
      ref: u,
      class: "wrapper-venn"
    }, ox, 512));
  }
});
const fx = (t, n) => {
  const e = t.__vccOpts || t;
  for (const [r, i] of n)
    e[r] = i;
  return e;
}, Fe = /* @__PURE__ */ fx(ux, [["__scopeId", "data-v-b7bfc9e5"]]);
Fe.install = (t) => {
  t.component(Fe.name, Fe);
};
export {
  Fe as VennChart,
  Fe as default
};
