;(function () {
	'use strict'
	try {
		if (typeof document < 'u') {
			var e = document.createElement('style')
			e.appendChild(
				document.createTextNode(
					'.wrapper-venn[data-v-974e8b18]{width:100%;height:100%}.wrapper-venn[data-v-974e8b18] .custom-venn-chart-tooltip{position:absolute;min-height:32px;max-width:200px;font-size:16px;display:flex;align-items:center;text-align:left;padding:8px 16px 8px 36px;background:#fff;color:#606266;border:0;border-radius:8px;opacity:0;box-shadow:0 2px 8px #00000026;z-index:2333}.wrapper-venn[data-v-974e8b18] .custom-venn-chart-tooltip:before{content:"";width:10px;height:10px;position:absolute;left:16px;background-color:var(--201b62ce);border-radius:50%;top:50%;transform:translateY(-50%)}'
				)
			),
				document.head.appendChild(e)
		}
	} catch (t) {
		console.error('vite-plugin-css-injected-by-js', t)
	}
})()
;(function (ot, M) {
	typeof exports == 'object' && typeof module < 'u'
		? M(exports, require('vue'))
		: typeof define == 'function' && define.amd
		? define(['exports', 'vue'], M)
		: ((ot = typeof globalThis < 'u' ? globalThis : ot || self),
		  M((ot.vue3VennChart = {}), ot.Vue))
})(this, function (ot, M) {
	'use strict'
	function Tr(t, n) {
		return t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN
	}
	function To(t) {
		return (
			t.length === 1 && (t = Io(t)),
			{
				left: function (n, e, r, i) {
					for (r == null && (r = 0), i == null && (i = n.length); r < i; ) {
						var s = (r + i) >>> 1
						t(n[s], e) < 0 ? (r = s + 1) : (i = s)
					}
					return r
				},
				right: function (n, e, r, i) {
					for (r == null && (r = 0), i == null && (i = n.length); r < i; ) {
						var s = (r + i) >>> 1
						t(n[s], e) > 0 ? (i = s) : (r = s + 1)
					}
					return r
				}
			}
		)
	}
	function Io(t) {
		return function (n, e) {
			return Tr(t(n), e)
		}
	}
	To(Tr)
	var Po = { value: function () {} }
	function Ir() {
		for (var t = 0, n = arguments.length, e = {}, r; t < n; ++t) {
			if (!(r = arguments[t] + '') || r in e || /[\s.]/.test(r))
				throw new Error('illegal type: ' + r)
			e[r] = []
		}
		return new bn(e)
	}
	function bn(t) {
		this._ = t
	}
	function Lo(t, n) {
		return t
			.trim()
			.split(/^|\s+/)
			.map(function (e) {
				var r = '',
					i = e.indexOf('.')
				if (
					(i >= 0 && ((r = e.slice(i + 1)), (e = e.slice(0, i))),
					e && !n.hasOwnProperty(e))
				)
					throw new Error('unknown type: ' + e)
				return { type: e, name: r }
			})
	}
	bn.prototype = Ir.prototype = {
		constructor: bn,
		on: function (t, n) {
			var e = this._,
				r = Lo(t + '', e),
				i,
				s = -1,
				o = r.length
			if (arguments.length < 2) {
				for (; ++s < o; )
					if ((i = (t = r[s]).type) && (i = Oo(e[i], t.name))) return i
				return
			}
			if (n != null && typeof n != 'function')
				throw new Error('invalid callback: ' + n)
			for (; ++s < o; )
				if ((i = (t = r[s]).type)) e[i] = Pr(e[i], t.name, n)
				else if (n == null) for (i in e) e[i] = Pr(e[i], t.name, null)
			return this
		},
		copy: function () {
			var t = {},
				n = this._
			for (var e in n) t[e] = n[e].slice()
			return new bn(t)
		},
		call: function (t, n) {
			if ((i = arguments.length - 2) > 0)
				for (var e = new Array(i), r = 0, i, s; r < i; ++r)
					e[r] = arguments[r + 2]
			if (!this._.hasOwnProperty(t)) throw new Error('unknown type: ' + t)
			for (s = this._[t], r = 0, i = s.length; r < i; ++r)
				s[r].value.apply(n, e)
		},
		apply: function (t, n, e) {
			if (!this._.hasOwnProperty(t)) throw new Error('unknown type: ' + t)
			for (var r = this._[t], i = 0, s = r.length; i < s; ++i)
				r[i].value.apply(n, e)
		}
	}
	function Oo(t, n) {
		for (var e = 0, r = t.length, i; e < r; ++e)
			if ((i = t[e]).name === n) return i.value
	}
	function Pr(t, n, e) {
		for (var r = 0, i = t.length; r < i; ++r)
			if (t[r].name === n) {
				;(t[r] = Po), (t = t.slice(0, r).concat(t.slice(r + 1)))
				break
			}
		return e != null && t.push({ name: n, value: e }), t
	}
	function ve(t, n, e) {
		;(t.prototype = n.prototype = e), (e.constructor = t)
	}
	function Lr(t, n) {
		var e = Object.create(t.prototype)
		for (var r in n) e[r] = n[r]
		return e
	}
	function Tt() {}
	var It = 0.7,
		Nn = 1 / It,
		pt = '\\s*([+-]?\\d+)\\s*',
		Pt = '\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*',
		Y = '\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*',
		Fo = /^#([0-9a-f]{3,8})$/,
		zo = new RegExp('^rgb\\(' + [pt, pt, pt] + '\\)$'),
		Do = new RegExp('^rgb\\(' + [Y, Y, Y] + '\\)$'),
		qo = new RegExp('^rgba\\(' + [pt, pt, pt, Pt] + '\\)$'),
		Ho = new RegExp('^rgba\\(' + [Y, Y, Y, Pt] + '\\)$'),
		Xo = new RegExp('^hsl\\(' + [Pt, Y, Y] + '\\)$'),
		Bo = new RegExp('^hsla\\(' + [Pt, Y, Y, Pt] + '\\)$'),
		Or = {
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
		}
	ve(Tt, Lt, {
		copy: function (t) {
			return Object.assign(new this.constructor(), this, t)
		},
		displayable: function () {
			return this.rgb().displayable()
		},
		hex: Fr,
		formatHex: Fr,
		formatHsl: Vo,
		formatRgb: zr,
		toString: zr
	})
	function Fr() {
		return this.rgb().formatHex()
	}
	function Vo() {
		return Br(this).formatHsl()
	}
	function zr() {
		return this.rgb().formatRgb()
	}
	function Lt(t) {
		var n, e
		return (
			(t = (t + '').trim().toLowerCase()),
			(n = Fo.exec(t))
				? ((e = n[1].length),
				  (n = parseInt(n[1], 16)),
				  e === 6
						? Dr(n)
						: e === 3
						? new I(
								((n >> 8) & 15) | ((n >> 4) & 240),
								((n >> 4) & 15) | (n & 240),
								((n & 15) << 4) | (n & 15),
								1
						  )
						: e === 8
						? An(
								(n >> 24) & 255,
								(n >> 16) & 255,
								(n >> 8) & 255,
								(n & 255) / 255
						  )
						: e === 4
						? An(
								((n >> 12) & 15) | ((n >> 8) & 240),
								((n >> 8) & 15) | ((n >> 4) & 240),
								((n >> 4) & 15) | (n & 240),
								(((n & 15) << 4) | (n & 15)) / 255
						  )
						: null)
				: (n = zo.exec(t))
				? new I(n[1], n[2], n[3], 1)
				: (n = Do.exec(t))
				? new I((n[1] * 255) / 100, (n[2] * 255) / 100, (n[3] * 255) / 100, 1)
				: (n = qo.exec(t))
				? An(n[1], n[2], n[3], n[4])
				: (n = Ho.exec(t))
				? An((n[1] * 255) / 100, (n[2] * 255) / 100, (n[3] * 255) / 100, n[4])
				: (n = Xo.exec(t))
				? Xr(n[1], n[2] / 100, n[3] / 100, 1)
				: (n = Bo.exec(t))
				? Xr(n[1], n[2] / 100, n[3] / 100, n[4])
				: Or.hasOwnProperty(t)
				? Dr(Or[t])
				: t === 'transparent'
				? new I(NaN, NaN, NaN, 0)
				: null
		)
	}
	function Dr(t) {
		return new I((t >> 16) & 255, (t >> 8) & 255, t & 255, 1)
	}
	function An(t, n, e, r) {
		return r <= 0 && (t = n = e = NaN), new I(t, n, e, r)
	}
	function Uo(t) {
		return (
			t instanceof Tt || (t = Lt(t)),
			t ? ((t = t.rgb()), new I(t.r, t.g, t.b, t.opacity)) : new I()
		)
	}
	function me(t, n, e, r) {
		return arguments.length === 1 ? Uo(t) : new I(t, n, e, r ?? 1)
	}
	function I(t, n, e, r) {
		;(this.r = +t), (this.g = +n), (this.b = +e), (this.opacity = +r)
	}
	ve(
		I,
		me,
		Lr(Tt, {
			brighter: function (t) {
				return (
					(t = t == null ? Nn : Math.pow(Nn, t)),
					new I(this.r * t, this.g * t, this.b * t, this.opacity)
				)
			},
			darker: function (t) {
				return (
					(t = t == null ? It : Math.pow(It, t)),
					new I(this.r * t, this.g * t, this.b * t, this.opacity)
				)
			},
			rgb: function () {
				return this
			},
			displayable: function () {
				return (
					-0.5 <= this.r &&
					this.r < 255.5 &&
					-0.5 <= this.g &&
					this.g < 255.5 &&
					-0.5 <= this.b &&
					this.b < 255.5 &&
					0 <= this.opacity &&
					this.opacity <= 1
				)
			},
			hex: qr,
			formatHex: qr,
			formatRgb: Hr,
			toString: Hr
		})
	)
	function qr() {
		return '#' + we(this.r) + we(this.g) + we(this.b)
	}
	function Hr() {
		var t = this.opacity
		return (
			(t = isNaN(t) ? 1 : Math.max(0, Math.min(1, t))),
			(t === 1 ? 'rgb(' : 'rgba(') +
				Math.max(0, Math.min(255, Math.round(this.r) || 0)) +
				', ' +
				Math.max(0, Math.min(255, Math.round(this.g) || 0)) +
				', ' +
				Math.max(0, Math.min(255, Math.round(this.b) || 0)) +
				(t === 1 ? ')' : ', ' + t + ')')
		)
	}
	function we(t) {
		return (
			(t = Math.max(0, Math.min(255, Math.round(t) || 0))),
			(t < 16 ? '0' : '') + t.toString(16)
		)
	}
	function Xr(t, n, e, r) {
		return (
			r <= 0
				? (t = n = e = NaN)
				: e <= 0 || e >= 1
				? (t = n = NaN)
				: n <= 0 && (t = NaN),
			new G(t, n, e, r)
		)
	}
	function Br(t) {
		if (t instanceof G) return new G(t.h, t.s, t.l, t.opacity)
		if ((t instanceof Tt || (t = Lt(t)), !t)) return new G()
		if (t instanceof G) return t
		t = t.rgb()
		var n = t.r / 255,
			e = t.g / 255,
			r = t.b / 255,
			i = Math.min(n, e, r),
			s = Math.max(n, e, r),
			o = NaN,
			a = s - i,
			u = (s + i) / 2
		return (
			a
				? (n === s
						? (o = (e - r) / a + (e < r) * 6)
						: e === s
						? (o = (r - n) / a + 2)
						: (o = (n - e) / a + 4),
				  (a /= u < 0.5 ? s + i : 2 - s - i),
				  (o *= 60))
				: (a = u > 0 && u < 1 ? 0 : o),
			new G(o, a, u, t.opacity)
		)
	}
	function Yo(t, n, e, r) {
		return arguments.length === 1 ? Br(t) : new G(t, n, e, r ?? 1)
	}
	function G(t, n, e, r) {
		;(this.h = +t), (this.s = +n), (this.l = +e), (this.opacity = +r)
	}
	ve(
		G,
		Yo,
		Lr(Tt, {
			brighter: function (t) {
				return (
					(t = t == null ? Nn : Math.pow(Nn, t)),
					new G(this.h, this.s, this.l * t, this.opacity)
				)
			},
			darker: function (t) {
				return (
					(t = t == null ? It : Math.pow(It, t)),
					new G(this.h, this.s, this.l * t, this.opacity)
				)
			},
			rgb: function () {
				var t = (this.h % 360) + (this.h < 0) * 360,
					n = isNaN(t) || isNaN(this.s) ? 0 : this.s,
					e = this.l,
					r = e + (e < 0.5 ? e : 1 - e) * n,
					i = 2 * e - r
				return new I(
					$e(t >= 240 ? t - 240 : t + 120, i, r),
					$e(t, i, r),
					$e(t < 120 ? t + 240 : t - 120, i, r),
					this.opacity
				)
			},
			displayable: function () {
				return (
					((0 <= this.s && this.s <= 1) || isNaN(this.s)) &&
					0 <= this.l &&
					this.l <= 1 &&
					0 <= this.opacity &&
					this.opacity <= 1
				)
			},
			formatHsl: function () {
				var t = this.opacity
				return (
					(t = isNaN(t) ? 1 : Math.max(0, Math.min(1, t))),
					(t === 1 ? 'hsl(' : 'hsla(') +
						(this.h || 0) +
						', ' +
						(this.s || 0) * 100 +
						'%, ' +
						(this.l || 0) * 100 +
						'%' +
						(t === 1 ? ')' : ', ' + t + ')')
				)
			}
		})
	)
	function $e(t, n, e) {
		return (
			(t < 60
				? n + ((e - n) * t) / 60
				: t < 180
				? e
				: t < 240
				? n + ((e - n) * (240 - t)) / 60
				: n) * 255
		)
	}
	function Vr(t) {
		return function () {
			return t
		}
	}
	function Go(t, n) {
		return function (e) {
			return t + e * n
		}
	}
	function Wo(t, n, e) {
		return (
			(t = Math.pow(t, e)),
			(n = Math.pow(n, e) - t),
			(e = 1 / e),
			function (r) {
				return Math.pow(t + r * n, e)
			}
		)
	}
	function Ko(t) {
		return (t = +t) == 1
			? Ur
			: function (n, e) {
					return e - n ? Wo(n, e, t) : Vr(isNaN(n) ? e : n)
			  }
	}
	function Ur(t, n) {
		var e = n - t
		return e ? Go(t, e) : Vr(isNaN(t) ? n : t)
	}
	const Yr = (function t(n) {
		var e = Ko(n)
		function r(i, s) {
			var o = e((i = me(i)).r, (s = me(s)).r),
				a = e(i.g, s.g),
				u = e(i.b, s.b),
				f = Ur(i.opacity, s.opacity)
			return function (l) {
				return (
					(i.r = o(l)), (i.g = a(l)), (i.b = u(l)), (i.opacity = f(l)), i + ''
				)
			}
		}
		return (r.gamma = t), r
	})(1)
	function at(t, n) {
		return (
			(t = +t),
			(n = +n),
			function (e) {
				return t * (1 - e) + n * e
			}
		)
	}
	var be = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
		Ne = new RegExp(be.source, 'g')
	function Zo(t) {
		return function () {
			return t
		}
	}
	function Jo(t) {
		return function (n) {
			return t(n) + ''
		}
	}
	function Qo(t, n) {
		var e = (be.lastIndex = Ne.lastIndex = 0),
			r,
			i,
			s,
			o = -1,
			a = [],
			u = []
		for (t = t + '', n = n + ''; (r = be.exec(t)) && (i = Ne.exec(n)); )
			(s = i.index) > e &&
				((s = n.slice(e, s)), a[o] ? (a[o] += s) : (a[++o] = s)),
				(r = r[0]) === (i = i[0])
					? a[o]
						? (a[o] += i)
						: (a[++o] = i)
					: ((a[++o] = null), u.push({ i: o, x: at(r, i) })),
				(e = Ne.lastIndex)
		return (
			e < n.length && ((s = n.slice(e)), a[o] ? (a[o] += s) : (a[++o] = s)),
			a.length < 2
				? u[0]
					? Jo(u[0].x)
					: Zo(n)
				: ((n = u.length),
				  function (f) {
						for (var l = 0, c; l < n; ++l) a[(c = u[l]).i] = c.x(f)
						return a.join('')
				  })
		)
	}
	var Gr = 180 / Math.PI,
		Ae = {
			translateX: 0,
			translateY: 0,
			rotate: 0,
			skewX: 0,
			scaleX: 1,
			scaleY: 1
		}
	function Wr(t, n, e, r, i, s) {
		var o, a, u
		return (
			(o = Math.sqrt(t * t + n * n)) && ((t /= o), (n /= o)),
			(u = t * e + n * r) && ((e -= t * u), (r -= n * u)),
			(a = Math.sqrt(e * e + r * r)) && ((e /= a), (r /= a), (u /= a)),
			t * r < n * e && ((t = -t), (n = -n), (u = -u), (o = -o)),
			{
				translateX: i,
				translateY: s,
				rotate: Math.atan2(n, t) * Gr,
				skewX: Math.atan(u) * Gr,
				scaleX: o,
				scaleY: a
			}
		)
	}
	var Ot, Ce, Kr, Cn
	function jo(t) {
		return t === 'none'
			? Ae
			: (Ot ||
					((Ot = document.createElement('DIV')),
					(Ce = document.documentElement),
					(Kr = document.defaultView)),
			  (Ot.style.transform = t),
			  (t = Kr.getComputedStyle(Ce.appendChild(Ot), null).getPropertyValue(
					'transform'
			  )),
			  Ce.removeChild(Ot),
			  (t = t.slice(7, -1).split(',')),
			  Wr(+t[0], +t[1], +t[2], +t[3], +t[4], +t[5]))
	}
	function ta(t) {
		return t == null ||
			(Cn || (Cn = document.createElementNS('http://www.w3.org/2000/svg', 'g')),
			Cn.setAttribute('transform', t),
			!(t = Cn.transform.baseVal.consolidate()))
			? Ae
			: ((t = t.matrix), Wr(t.a, t.b, t.c, t.d, t.e, t.f))
	}
	function Zr(t, n, e, r) {
		function i(f) {
			return f.length ? f.pop() + ' ' : ''
		}
		function s(f, l, c, h, d, g) {
			if (f !== c || l !== h) {
				var p = d.push('translate(', null, n, null, e)
				g.push({ i: p - 4, x: at(f, c) }, { i: p - 2, x: at(l, h) })
			} else (c || h) && d.push('translate(' + c + n + h + e)
		}
		function o(f, l, c, h) {
			f !== l
				? (f - l > 180 ? (l += 360) : l - f > 180 && (f += 360),
				  h.push({ i: c.push(i(c) + 'rotate(', null, r) - 2, x: at(f, l) }))
				: l && c.push(i(c) + 'rotate(' + l + r)
		}
		function a(f, l, c, h) {
			f !== l
				? h.push({ i: c.push(i(c) + 'skewX(', null, r) - 2, x: at(f, l) })
				: l && c.push(i(c) + 'skewX(' + l + r)
		}
		function u(f, l, c, h, d, g) {
			if (f !== c || l !== h) {
				var p = d.push(i(d) + 'scale(', null, ',', null, ')')
				g.push({ i: p - 4, x: at(f, c) }, { i: p - 2, x: at(l, h) })
			} else (c !== 1 || h !== 1) && d.push(i(d) + 'scale(' + c + ',' + h + ')')
		}
		return function (f, l) {
			var c = [],
				h = []
			return (
				(f = t(f)),
				(l = t(l)),
				s(f.translateX, f.translateY, l.translateX, l.translateY, c, h),
				o(f.rotate, l.rotate, c, h),
				a(f.skewX, l.skewX, c, h),
				u(f.scaleX, f.scaleY, l.scaleX, l.scaleY, c, h),
				(f = l = null),
				function (d) {
					for (var g = -1, p = h.length, x; ++g < p; ) c[(x = h[g]).i] = x.x(d)
					return c.join('')
				}
			)
		}
	}
	var na = Zr(jo, 'px, ', 'px)', 'deg)'),
		ea = Zr(ta, ', ', ')', ')'),
		Me = 'http://www.w3.org/1999/xhtml'
	const Jr = {
		svg: 'http://www.w3.org/2000/svg',
		xhtml: Me,
		xlink: 'http://www.w3.org/1999/xlink',
		xml: 'http://www.w3.org/XML/1998/namespace',
		xmlns: 'http://www.w3.org/2000/xmlns/'
	}
	function Mn(t) {
		var n = (t += ''),
			e = n.indexOf(':')
		return (
			e >= 0 && (n = t.slice(0, e)) !== 'xmlns' && (t = t.slice(e + 1)),
			Jr.hasOwnProperty(n) ? { space: Jr[n], local: t } : t
		)
	}
	function ra(t) {
		return function () {
			var n = this.ownerDocument,
				e = this.namespaceURI
			return e === Me && n.documentElement.namespaceURI === Me
				? n.createElement(t)
				: n.createElementNS(e, t)
		}
	}
	function ia(t) {
		return function () {
			return this.ownerDocument.createElementNS(t.space, t.local)
		}
	}
	function Qr(t) {
		var n = Mn(t)
		return (n.local ? ia : ra)(n)
	}
	function sa() {}
	function Re(t) {
		return t == null
			? sa
			: function () {
					return this.querySelector(t)
			  }
	}
	function oa(t) {
		typeof t != 'function' && (t = Re(t))
		for (
			var n = this._groups, e = n.length, r = new Array(e), i = 0;
			i < e;
			++i
		)
			for (
				var s = n[i], o = s.length, a = (r[i] = new Array(o)), u, f, l = 0;
				l < o;
				++l
			)
				(u = s[l]) &&
					(f = t.call(u, u.__data__, l, s)) &&
					('__data__' in u && (f.__data__ = u.__data__), (a[l] = f))
		return new H(r, this._parents)
	}
	function aa() {
		return []
	}
	function jr(t) {
		return t == null
			? aa
			: function () {
					return this.querySelectorAll(t)
			  }
	}
	function ua(t) {
		typeof t != 'function' && (t = jr(t))
		for (var n = this._groups, e = n.length, r = [], i = [], s = 0; s < e; ++s)
			for (var o = n[s], a = o.length, u, f = 0; f < a; ++f)
				(u = o[f]) && (r.push(t.call(u, u.__data__, f, o)), i.push(u))
		return new H(r, i)
	}
	function ti(t) {
		return function () {
			return this.matches(t)
		}
	}
	function fa(t) {
		typeof t != 'function' && (t = ti(t))
		for (
			var n = this._groups, e = n.length, r = new Array(e), i = 0;
			i < e;
			++i
		)
			for (var s = n[i], o = s.length, a = (r[i] = []), u, f = 0; f < o; ++f)
				(u = s[f]) && t.call(u, u.__data__, f, s) && a.push(u)
		return new H(r, this._parents)
	}
	function ni(t) {
		return new Array(t.length)
	}
	function la() {
		return new H(this._enter || this._groups.map(ni), this._parents)
	}
	function Rn(t, n) {
		;(this.ownerDocument = t.ownerDocument),
			(this.namespaceURI = t.namespaceURI),
			(this._next = null),
			(this._parent = t),
			(this.__data__ = n)
	}
	Rn.prototype = {
		constructor: Rn,
		appendChild: function (t) {
			return this._parent.insertBefore(t, this._next)
		},
		insertBefore: function (t, n) {
			return this._parent.insertBefore(t, n)
		},
		querySelector: function (t) {
			return this._parent.querySelector(t)
		},
		querySelectorAll: function (t) {
			return this._parent.querySelectorAll(t)
		}
	}
	function ca(t) {
		return function () {
			return t
		}
	}
	var ei = '$'
	function ha(t, n, e, r, i, s) {
		for (var o = 0, a, u = n.length, f = s.length; o < f; ++o)
			(a = n[o]) ? ((a.__data__ = s[o]), (r[o] = a)) : (e[o] = new Rn(t, s[o]))
		for (; o < u; ++o) (a = n[o]) && (i[o] = a)
	}
	function da(t, n, e, r, i, s, o) {
		var a,
			u,
			f = {},
			l = n.length,
			c = s.length,
			h = new Array(l),
			d
		for (a = 0; a < l; ++a)
			(u = n[a]) &&
				((h[a] = d = ei + o.call(u, u.__data__, a, n)),
				d in f ? (i[a] = u) : (f[d] = u))
		for (a = 0; a < c; ++a)
			(d = ei + o.call(t, s[a], a, s)),
				(u = f[d])
					? ((r[a] = u), (u.__data__ = s[a]), (f[d] = null))
					: (e[a] = new Rn(t, s[a]))
		for (a = 0; a < l; ++a) (u = n[a]) && f[h[a]] === u && (i[a] = u)
	}
	function pa(t, n) {
		if (!t)
			return (
				(d = new Array(this.size())),
				(f = -1),
				this.each(function (y) {
					d[++f] = y
				}),
				d
			)
		var e = n ? da : ha,
			r = this._parents,
			i = this._groups
		typeof t != 'function' && (t = ca(t))
		for (
			var s = i.length,
				o = new Array(s),
				a = new Array(s),
				u = new Array(s),
				f = 0;
			f < s;
			++f
		) {
			var l = r[f],
				c = i[f],
				h = c.length,
				d = t.call(l, l && l.__data__, f, r),
				g = d.length,
				p = (a[f] = new Array(g)),
				x = (o[f] = new Array(g)),
				$ = (u[f] = new Array(h))
			e(l, c, p, x, $, d, n)
			for (var v = 0, _ = 0, b, N; v < g; ++v)
				if ((b = p[v])) {
					for (v >= _ && (_ = v + 1); !(N = x[_]) && ++_ < g; );
					b._next = N || null
				}
		}
		return (o = new H(o, r)), (o._enter = a), (o._exit = u), o
	}
	function ga() {
		return new H(this._exit || this._groups.map(ni), this._parents)
	}
	function xa(t, n, e) {
		var r = this.enter(),
			i = this,
			s = this.exit()
		return (
			(r = typeof t == 'function' ? t(r) : r.append(t + '')),
			n != null && (i = n(i)),
			e == null ? s.remove() : e(s),
			r && i ? r.merge(i).order() : i
		)
	}
	function _a(t) {
		for (
			var n = this._groups,
				e = t._groups,
				r = n.length,
				i = e.length,
				s = Math.min(r, i),
				o = new Array(r),
				a = 0;
			a < s;
			++a
		)
			for (
				var u = n[a],
					f = e[a],
					l = u.length,
					c = (o[a] = new Array(l)),
					h,
					d = 0;
				d < l;
				++d
			)
				(h = u[d] || f[d]) && (c[d] = h)
		for (; a < r; ++a) o[a] = n[a]
		return new H(o, this._parents)
	}
	function ya() {
		for (var t = this._groups, n = -1, e = t.length; ++n < e; )
			for (var r = t[n], i = r.length - 1, s = r[i], o; --i >= 0; )
				(o = r[i]) &&
					(s &&
						o.compareDocumentPosition(s) ^ 4 &&
						s.parentNode.insertBefore(o, s),
					(s = o))
		return this
	}
	function va(t) {
		t || (t = ma)
		function n(c, h) {
			return c && h ? t(c.__data__, h.__data__) : !c - !h
		}
		for (
			var e = this._groups, r = e.length, i = new Array(r), s = 0;
			s < r;
			++s
		) {
			for (
				var o = e[s], a = o.length, u = (i[s] = new Array(a)), f, l = 0;
				l < a;
				++l
			)
				(f = o[l]) && (u[l] = f)
			u.sort(n)
		}
		return new H(i, this._parents).order()
	}
	function ma(t, n) {
		return t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN
	}
	function wa() {
		var t = arguments[0]
		return (arguments[0] = this), t.apply(null, arguments), this
	}
	function $a() {
		var t = new Array(this.size()),
			n = -1
		return (
			this.each(function () {
				t[++n] = this
			}),
			t
		)
	}
	function ba() {
		for (var t = this._groups, n = 0, e = t.length; n < e; ++n)
			for (var r = t[n], i = 0, s = r.length; i < s; ++i) {
				var o = r[i]
				if (o) return o
			}
		return null
	}
	function Na() {
		var t = 0
		return (
			this.each(function () {
				++t
			}),
			t
		)
	}
	function Aa() {
		return !this.node()
	}
	function Ca(t) {
		for (var n = this._groups, e = 0, r = n.length; e < r; ++e)
			for (var i = n[e], s = 0, o = i.length, a; s < o; ++s)
				(a = i[s]) && t.call(a, a.__data__, s, i)
		return this
	}
	function Ma(t) {
		return function () {
			this.removeAttribute(t)
		}
	}
	function Ra(t) {
		return function () {
			this.removeAttributeNS(t.space, t.local)
		}
	}
	function Ea(t, n) {
		return function () {
			this.setAttribute(t, n)
		}
	}
	function ka(t, n) {
		return function () {
			this.setAttributeNS(t.space, t.local, n)
		}
	}
	function Sa(t, n) {
		return function () {
			var e = n.apply(this, arguments)
			e == null ? this.removeAttribute(t) : this.setAttribute(t, e)
		}
	}
	function Ta(t, n) {
		return function () {
			var e = n.apply(this, arguments)
			e == null
				? this.removeAttributeNS(t.space, t.local)
				: this.setAttributeNS(t.space, t.local, e)
		}
	}
	function Ia(t, n) {
		var e = Mn(t)
		if (arguments.length < 2) {
			var r = this.node()
			return e.local ? r.getAttributeNS(e.space, e.local) : r.getAttribute(e)
		}
		return this.each(
			(n == null
				? e.local
					? Ra
					: Ma
				: typeof n == 'function'
				? e.local
					? Ta
					: Sa
				: e.local
				? ka
				: Ea)(e, n)
		)
	}
	function ri(t) {
		return (
			(t.ownerDocument && t.ownerDocument.defaultView) ||
			(t.document && t) ||
			t.defaultView
		)
	}
	function Pa(t) {
		return function () {
			this.style.removeProperty(t)
		}
	}
	function La(t, n, e) {
		return function () {
			this.style.setProperty(t, n, e)
		}
	}
	function Oa(t, n, e) {
		return function () {
			var r = n.apply(this, arguments)
			r == null ? this.style.removeProperty(t) : this.style.setProperty(t, r, e)
		}
	}
	function Fa(t, n, e) {
		return arguments.length > 1
			? this.each(
					(n == null ? Pa : typeof n == 'function' ? Oa : La)(t, n, e ?? '')
			  )
			: gt(this.node(), t)
	}
	function gt(t, n) {
		return (
			t.style.getPropertyValue(n) ||
			ri(t).getComputedStyle(t, null).getPropertyValue(n)
		)
	}
	function za(t) {
		return function () {
			delete this[t]
		}
	}
	function Da(t, n) {
		return function () {
			this[t] = n
		}
	}
	function qa(t, n) {
		return function () {
			var e = n.apply(this, arguments)
			e == null ? delete this[t] : (this[t] = e)
		}
	}
	function Ha(t, n) {
		return arguments.length > 1
			? this.each((n == null ? za : typeof n == 'function' ? qa : Da)(t, n))
			: this.node()[t]
	}
	function ii(t) {
		return t.trim().split(/^|\s+/)
	}
	function Ee(t) {
		return t.classList || new si(t)
	}
	function si(t) {
		;(this._node = t), (this._names = ii(t.getAttribute('class') || ''))
	}
	si.prototype = {
		add: function (t) {
			var n = this._names.indexOf(t)
			n < 0 &&
				(this._names.push(t),
				this._node.setAttribute('class', this._names.join(' ')))
		},
		remove: function (t) {
			var n = this._names.indexOf(t)
			n >= 0 &&
				(this._names.splice(n, 1),
				this._node.setAttribute('class', this._names.join(' ')))
		},
		contains: function (t) {
			return this._names.indexOf(t) >= 0
		}
	}
	function oi(t, n) {
		for (var e = Ee(t), r = -1, i = n.length; ++r < i; ) e.add(n[r])
	}
	function ai(t, n) {
		for (var e = Ee(t), r = -1, i = n.length; ++r < i; ) e.remove(n[r])
	}
	function Xa(t) {
		return function () {
			oi(this, t)
		}
	}
	function Ba(t) {
		return function () {
			ai(this, t)
		}
	}
	function Va(t, n) {
		return function () {
			;(n.apply(this, arguments) ? oi : ai)(this, t)
		}
	}
	function Ua(t, n) {
		var e = ii(t + '')
		if (arguments.length < 2) {
			for (var r = Ee(this.node()), i = -1, s = e.length; ++i < s; )
				if (!r.contains(e[i])) return !1
			return !0
		}
		return this.each((typeof n == 'function' ? Va : n ? Xa : Ba)(e, n))
	}
	function Ya() {
		this.textContent = ''
	}
	function Ga(t) {
		return function () {
			this.textContent = t
		}
	}
	function Wa(t) {
		return function () {
			var n = t.apply(this, arguments)
			this.textContent = n ?? ''
		}
	}
	function Ka(t) {
		return arguments.length
			? this.each(t == null ? Ya : (typeof t == 'function' ? Wa : Ga)(t))
			: this.node().textContent
	}
	function Za() {
		this.innerHTML = ''
	}
	function Ja(t) {
		return function () {
			this.innerHTML = t
		}
	}
	function Qa(t) {
		return function () {
			var n = t.apply(this, arguments)
			this.innerHTML = n ?? ''
		}
	}
	function ja(t) {
		return arguments.length
			? this.each(t == null ? Za : (typeof t == 'function' ? Qa : Ja)(t))
			: this.node().innerHTML
	}
	function tu() {
		this.nextSibling && this.parentNode.appendChild(this)
	}
	function nu() {
		return this.each(tu)
	}
	function eu() {
		this.previousSibling &&
			this.parentNode.insertBefore(this, this.parentNode.firstChild)
	}
	function ru() {
		return this.each(eu)
	}
	function iu(t) {
		var n = typeof t == 'function' ? t : Qr(t)
		return this.select(function () {
			return this.appendChild(n.apply(this, arguments))
		})
	}
	function su() {
		return null
	}
	function ou(t, n) {
		var e = typeof t == 'function' ? t : Qr(t),
			r = n == null ? su : typeof n == 'function' ? n : Re(n)
		return this.select(function () {
			return this.insertBefore(
				e.apply(this, arguments),
				r.apply(this, arguments) || null
			)
		})
	}
	function au() {
		var t = this.parentNode
		t && t.removeChild(this)
	}
	function uu() {
		return this.each(au)
	}
	function fu() {
		var t = this.cloneNode(!1),
			n = this.parentNode
		return n ? n.insertBefore(t, this.nextSibling) : t
	}
	function lu() {
		var t = this.cloneNode(!0),
			n = this.parentNode
		return n ? n.insertBefore(t, this.nextSibling) : t
	}
	function cu(t) {
		return this.select(t ? lu : fu)
	}
	function hu(t) {
		return arguments.length
			? this.property('__data__', t)
			: this.node().__data__
	}
	var ui = {}
	if (typeof document < 'u') {
		var du = document.documentElement
		'onmouseenter' in du ||
			(ui = { mouseenter: 'mouseover', mouseleave: 'mouseout' })
	}
	function pu(t, n, e) {
		return (
			(t = fi(t, n, e)),
			function (r) {
				var i = r.relatedTarget
				;(!i || (i !== this && !(i.compareDocumentPosition(this) & 8))) &&
					t.call(this, r)
			}
		)
	}
	function fi(t, n, e) {
		return function (r) {
			try {
				t.call(this, this.__data__, n, e)
			} finally {
			}
		}
	}
	function gu(t) {
		return t
			.trim()
			.split(/^|\s+/)
			.map(function (n) {
				var e = '',
					r = n.indexOf('.')
				return (
					r >= 0 && ((e = n.slice(r + 1)), (n = n.slice(0, r))),
					{ type: n, name: e }
				)
			})
	}
	function xu(t) {
		return function () {
			var n = this.__on
			if (n) {
				for (var e = 0, r = -1, i = n.length, s; e < i; ++e)
					(s = n[e]),
						(!t.type || s.type === t.type) && s.name === t.name
							? this.removeEventListener(s.type, s.listener, s.capture)
							: (n[++r] = s)
				++r ? (n.length = r) : delete this.__on
			}
		}
	}
	function _u(t, n, e) {
		var r = ui.hasOwnProperty(t.type) ? pu : fi
		return function (i, s, o) {
			var a = this.__on,
				u,
				f = r(n, s, o)
			if (a) {
				for (var l = 0, c = a.length; l < c; ++l)
					if ((u = a[l]).type === t.type && u.name === t.name) {
						this.removeEventListener(u.type, u.listener, u.capture),
							this.addEventListener(u.type, (u.listener = f), (u.capture = e)),
							(u.value = n)
						return
					}
			}
			this.addEventListener(t.type, f, e),
				(u = { type: t.type, name: t.name, value: n, listener: f, capture: e }),
				a ? a.push(u) : (this.__on = [u])
		}
	}
	function yu(t, n, e) {
		var r = gu(t + ''),
			i,
			s = r.length,
			o
		if (arguments.length < 2) {
			var a = this.node().__on
			if (a) {
				for (var u = 0, f = a.length, l; u < f; ++u)
					for (i = 0, l = a[u]; i < s; ++i)
						if ((o = r[i]).type === l.type && o.name === l.name) return l.value
			}
			return
		}
		for (a = n ? _u : xu, e == null && (e = !1), i = 0; i < s; ++i)
			this.each(a(r[i], n, e))
		return this
	}
	function li(t, n, e) {
		var r = ri(t),
			i = r.CustomEvent
		typeof i == 'function'
			? (i = new i(n, e))
			: ((i = r.document.createEvent('Event')),
			  e
					? (i.initEvent(n, e.bubbles, e.cancelable), (i.detail = e.detail))
					: i.initEvent(n, !1, !1)),
			t.dispatchEvent(i)
	}
	function vu(t, n) {
		return function () {
			return li(this, t, n)
		}
	}
	function mu(t, n) {
		return function () {
			return li(this, t, n.apply(this, arguments))
		}
	}
	function wu(t, n) {
		return this.each((typeof n == 'function' ? mu : vu)(t, n))
	}
	var $u = [null]
	function H(t, n) {
		;(this._groups = t), (this._parents = n)
	}
	function Ft() {
		return new H([[document.documentElement]], $u)
	}
	H.prototype = Ft.prototype = {
		constructor: H,
		select: oa,
		selectAll: ua,
		filter: fa,
		data: pa,
		enter: la,
		exit: ga,
		join: xa,
		merge: _a,
		order: ya,
		sort: va,
		call: wa,
		nodes: $a,
		node: ba,
		size: Na,
		empty: Aa,
		each: Ca,
		attr: Ia,
		style: Fa,
		property: Ha,
		classed: Ua,
		text: Ka,
		html: ja,
		raise: nu,
		lower: ru,
		append: iu,
		insert: ou,
		remove: uu,
		clone: cu,
		datum: hu,
		on: yu,
		dispatch: wu
	}
	var xt = 0,
		zt = 0,
		Dt = 0,
		ci = 1e3,
		En,
		qt,
		kn = 0,
		lt = 0,
		Sn = 0,
		Ht = typeof performance == 'object' && performance.now ? performance : Date,
		hi =
			typeof window == 'object' && window.requestAnimationFrame
				? window.requestAnimationFrame.bind(window)
				: function (t) {
						setTimeout(t, 17)
				  }
	function Tn() {
		return lt || (hi(bu), (lt = Ht.now() + Sn))
	}
	function bu() {
		lt = 0
	}
	function In() {
		this._call = this._time = this._next = null
	}
	In.prototype = di.prototype = {
		constructor: In,
		restart: function (t, n, e) {
			if (typeof t != 'function')
				throw new TypeError('callback is not a function')
			;(e = (e == null ? Tn() : +e) + (n == null ? 0 : +n)),
				!this._next &&
					qt !== this &&
					(qt ? (qt._next = this) : (En = this), (qt = this)),
				(this._call = t),
				(this._time = e),
				ke()
		},
		stop: function () {
			this._call && ((this._call = null), (this._time = 1 / 0), ke())
		}
	}
	function di(t, n, e) {
		var r = new In()
		return r.restart(t, n, e), r
	}
	function Nu() {
		Tn(), ++xt
		for (var t = En, n; t; )
			(n = lt - t._time) >= 0 && t._call.call(null, n), (t = t._next)
		--xt
	}
	function pi() {
		;(lt = (kn = Ht.now()) + Sn), (xt = zt = 0)
		try {
			Nu()
		} finally {
			;(xt = 0), Cu(), (lt = 0)
		}
	}
	function Au() {
		var t = Ht.now(),
			n = t - kn
		n > ci && ((Sn -= n), (kn = t))
	}
	function Cu() {
		for (var t, n = En, e, r = 1 / 0; n; )
			n._call
				? (r > n._time && (r = n._time), (t = n), (n = n._next))
				: ((e = n._next), (n._next = null), (n = t ? (t._next = e) : (En = e)))
		;(qt = t), ke(r)
	}
	function ke(t) {
		if (!xt) {
			zt && (zt = clearTimeout(zt))
			var n = t - lt
			n > 24
				? (t < 1 / 0 && (zt = setTimeout(pi, t - Ht.now() - Sn)),
				  Dt && (Dt = clearInterval(Dt)))
				: (Dt || ((kn = Ht.now()), (Dt = setInterval(Au, ci))),
				  (xt = 1),
				  hi(pi))
		}
	}
	function gi(t, n, e) {
		var r = new In()
		return (
			(n = n == null ? 0 : +n),
			r.restart(
				function (i) {
					r.stop(), t(i + n)
				},
				n,
				e
			),
			r
		)
	}
	var Mu = Ir('start', 'end', 'cancel', 'interrupt'),
		Ru = [],
		xi = 0,
		_i = 1,
		Se = 2,
		Pn = 3,
		yi = 4,
		Te = 5,
		Ln = 6
	function On(t, n, e, r, i, s) {
		var o = t.__transition
		if (!o) t.__transition = {}
		else if (e in o) return
		Eu(t, e, {
			name: n,
			index: r,
			group: i,
			on: Mu,
			tween: Ru,
			time: s.time,
			delay: s.delay,
			duration: s.duration,
			ease: s.ease,
			timer: null,
			state: xi
		})
	}
	function Ie(t, n) {
		var e = X(t, n)
		if (e.state > xi) throw new Error('too late; already scheduled')
		return e
	}
	function Q(t, n) {
		var e = X(t, n)
		if (e.state > Pn) throw new Error('too late; already running')
		return e
	}
	function X(t, n) {
		var e = t.__transition
		if (!e || !(e = e[n])) throw new Error('transition not found')
		return e
	}
	function Eu(t, n, e) {
		var r = t.__transition,
			i
		;(r[n] = e), (e.timer = di(s, 0, e.time))
		function s(f) {
			;(e.state = _i),
				e.timer.restart(o, e.delay, e.time),
				e.delay <= f && o(f - e.delay)
		}
		function o(f) {
			var l, c, h, d
			if (e.state !== _i) return u()
			for (l in r)
				if (((d = r[l]), d.name === e.name)) {
					if (d.state === Pn) return gi(o)
					d.state === yi
						? ((d.state = Ln),
						  d.timer.stop(),
						  d.on.call('interrupt', t, t.__data__, d.index, d.group),
						  delete r[l])
						: +l < n &&
						  ((d.state = Ln),
						  d.timer.stop(),
						  d.on.call('cancel', t, t.__data__, d.index, d.group),
						  delete r[l])
				}
			if (
				(gi(function () {
					e.state === Pn &&
						((e.state = yi), e.timer.restart(a, e.delay, e.time), a(f))
				}),
				(e.state = Se),
				e.on.call('start', t, t.__data__, e.index, e.group),
				e.state === Se)
			) {
				for (
					e.state = Pn, i = new Array((h = e.tween.length)), l = 0, c = -1;
					l < h;
					++l
				)
					(d = e.tween[l].value.call(t, t.__data__, e.index, e.group)) &&
						(i[++c] = d)
				i.length = c + 1
			}
		}
		function a(f) {
			for (
				var l =
						f < e.duration
							? e.ease.call(null, f / e.duration)
							: (e.timer.restart(u), (e.state = Te), 1),
					c = -1,
					h = i.length;
				++c < h;

			)
				i[c].call(t, l)
			e.state === Te && (e.on.call('end', t, t.__data__, e.index, e.group), u())
		}
		function u() {
			;(e.state = Ln), e.timer.stop(), delete r[n]
			for (var f in r) return
			delete t.__transition
		}
	}
	function ku(t, n) {
		var e = t.__transition,
			r,
			i,
			s = !0,
			o
		if (e) {
			n = n == null ? null : n + ''
			for (o in e) {
				if ((r = e[o]).name !== n) {
					s = !1
					continue
				}
				;(i = r.state > Se && r.state < Te),
					(r.state = Ln),
					r.timer.stop(),
					r.on.call(
						i ? 'interrupt' : 'cancel',
						t,
						t.__data__,
						r.index,
						r.group
					),
					delete e[o]
			}
			s && delete t.__transition
		}
	}
	function Su(t) {
		return this.each(function () {
			ku(this, t)
		})
	}
	function Tu(t, n) {
		var e, r
		return function () {
			var i = Q(this, t),
				s = i.tween
			if (s !== e) {
				r = e = s
				for (var o = 0, a = r.length; o < a; ++o)
					if (r[o].name === n) {
						;(r = r.slice()), r.splice(o, 1)
						break
					}
			}
			i.tween = r
		}
	}
	function Iu(t, n, e) {
		var r, i
		if (typeof e != 'function') throw new Error()
		return function () {
			var s = Q(this, t),
				o = s.tween
			if (o !== r) {
				i = (r = o).slice()
				for (var a = { name: n, value: e }, u = 0, f = i.length; u < f; ++u)
					if (i[u].name === n) {
						i[u] = a
						break
					}
				u === f && i.push(a)
			}
			s.tween = i
		}
	}
	function Pu(t, n) {
		var e = this._id
		if (((t += ''), arguments.length < 2)) {
			for (var r = X(this.node(), e).tween, i = 0, s = r.length, o; i < s; ++i)
				if ((o = r[i]).name === t) return o.value
			return null
		}
		return this.each((n == null ? Tu : Iu)(e, t, n))
	}
	function Pe(t, n, e) {
		var r = t._id
		return (
			t.each(function () {
				var i = Q(this, r)
				;(i.value || (i.value = {}))[n] = e.apply(this, arguments)
			}),
			function (i) {
				return X(i, r).value[n]
			}
		)
	}
	function vi(t, n) {
		var e
		return (
			typeof n == 'number'
				? at
				: n instanceof Lt
				? Yr
				: (e = Lt(n))
				? ((n = e), Yr)
				: Qo
		)(t, n)
	}
	function Lu(t) {
		return function () {
			this.removeAttribute(t)
		}
	}
	function Ou(t) {
		return function () {
			this.removeAttributeNS(t.space, t.local)
		}
	}
	function Fu(t, n, e) {
		var r,
			i = e + '',
			s
		return function () {
			var o = this.getAttribute(t)
			return o === i ? null : o === r ? s : (s = n((r = o), e))
		}
	}
	function zu(t, n, e) {
		var r,
			i = e + '',
			s
		return function () {
			var o = this.getAttributeNS(t.space, t.local)
			return o === i ? null : o === r ? s : (s = n((r = o), e))
		}
	}
	function Du(t, n, e) {
		var r, i, s
		return function () {
			var o,
				a = e(this),
				u
			return a == null
				? void this.removeAttribute(t)
				: ((o = this.getAttribute(t)),
				  (u = a + ''),
				  o === u
						? null
						: o === r && u === i
						? s
						: ((i = u), (s = n((r = o), a))))
		}
	}
	function qu(t, n, e) {
		var r, i, s
		return function () {
			var o,
				a = e(this),
				u
			return a == null
				? void this.removeAttributeNS(t.space, t.local)
				: ((o = this.getAttributeNS(t.space, t.local)),
				  (u = a + ''),
				  o === u
						? null
						: o === r && u === i
						? s
						: ((i = u), (s = n((r = o), a))))
		}
	}
	function Hu(t, n) {
		var e = Mn(t),
			r = e === 'transform' ? ea : vi
		return this.attrTween(
			t,
			typeof n == 'function'
				? (e.local ? qu : Du)(e, r, Pe(this, 'attr.' + t, n))
				: n == null
				? (e.local ? Ou : Lu)(e)
				: (e.local ? zu : Fu)(e, r, n)
		)
	}
	function Xu(t, n) {
		return function (e) {
			this.setAttribute(t, n.call(this, e))
		}
	}
	function Bu(t, n) {
		return function (e) {
			this.setAttributeNS(t.space, t.local, n.call(this, e))
		}
	}
	function Vu(t, n) {
		var e, r
		function i() {
			var s = n.apply(this, arguments)
			return s !== r && (e = (r = s) && Bu(t, s)), e
		}
		return (i._value = n), i
	}
	function Uu(t, n) {
		var e, r
		function i() {
			var s = n.apply(this, arguments)
			return s !== r && (e = (r = s) && Xu(t, s)), e
		}
		return (i._value = n), i
	}
	function Yu(t, n) {
		var e = 'attr.' + t
		if (arguments.length < 2) return (e = this.tween(e)) && e._value
		if (n == null) return this.tween(e, null)
		if (typeof n != 'function') throw new Error()
		var r = Mn(t)
		return this.tween(e, (r.local ? Vu : Uu)(r, n))
	}
	function Gu(t, n) {
		return function () {
			Ie(this, t).delay = +n.apply(this, arguments)
		}
	}
	function Wu(t, n) {
		return (
			(n = +n),
			function () {
				Ie(this, t).delay = n
			}
		)
	}
	function Ku(t) {
		var n = this._id
		return arguments.length
			? this.each((typeof t == 'function' ? Gu : Wu)(n, t))
			: X(this.node(), n).delay
	}
	function Zu(t, n) {
		return function () {
			Q(this, t).duration = +n.apply(this, arguments)
		}
	}
	function Ju(t, n) {
		return (
			(n = +n),
			function () {
				Q(this, t).duration = n
			}
		)
	}
	function Qu(t) {
		var n = this._id
		return arguments.length
			? this.each((typeof t == 'function' ? Zu : Ju)(n, t))
			: X(this.node(), n).duration
	}
	function ju(t, n) {
		if (typeof n != 'function') throw new Error()
		return function () {
			Q(this, t).ease = n
		}
	}
	function tf(t) {
		var n = this._id
		return arguments.length ? this.each(ju(n, t)) : X(this.node(), n).ease
	}
	function nf(t) {
		typeof t != 'function' && (t = ti(t))
		for (
			var n = this._groups, e = n.length, r = new Array(e), i = 0;
			i < e;
			++i
		)
			for (var s = n[i], o = s.length, a = (r[i] = []), u, f = 0; f < o; ++f)
				(u = s[f]) && t.call(u, u.__data__, f, s) && a.push(u)
		return new j(r, this._parents, this._name, this._id)
	}
	function ef(t) {
		if (t._id !== this._id) throw new Error()
		for (
			var n = this._groups,
				e = t._groups,
				r = n.length,
				i = e.length,
				s = Math.min(r, i),
				o = new Array(r),
				a = 0;
			a < s;
			++a
		)
			for (
				var u = n[a],
					f = e[a],
					l = u.length,
					c = (o[a] = new Array(l)),
					h,
					d = 0;
				d < l;
				++d
			)
				(h = u[d] || f[d]) && (c[d] = h)
		for (; a < r; ++a) o[a] = n[a]
		return new j(o, this._parents, this._name, this._id)
	}
	function rf(t) {
		return (t + '')
			.trim()
			.split(/^|\s+/)
			.every(function (n) {
				var e = n.indexOf('.')
				return e >= 0 && (n = n.slice(0, e)), !n || n === 'start'
			})
	}
	function sf(t, n, e) {
		var r,
			i,
			s = rf(n) ? Ie : Q
		return function () {
			var o = s(this, t),
				a = o.on
			a !== r && (i = (r = a).copy()).on(n, e), (o.on = i)
		}
	}
	function of(t, n) {
		var e = this._id
		return arguments.length < 2
			? X(this.node(), e).on.on(t)
			: this.each(sf(e, t, n))
	}
	function af(t) {
		return function () {
			var n = this.parentNode
			for (var e in this.__transition) if (+e !== t) return
			n && n.removeChild(this)
		}
	}
	function uf() {
		return this.on('end.remove', af(this._id))
	}
	function ff(t) {
		var n = this._name,
			e = this._id
		typeof t != 'function' && (t = Re(t))
		for (
			var r = this._groups, i = r.length, s = new Array(i), o = 0;
			o < i;
			++o
		)
			for (
				var a = r[o], u = a.length, f = (s[o] = new Array(u)), l, c, h = 0;
				h < u;
				++h
			)
				(l = a[h]) &&
					(c = t.call(l, l.__data__, h, a)) &&
					('__data__' in l && (c.__data__ = l.__data__),
					(f[h] = c),
					On(f[h], n, e, h, f, X(l, e)))
		return new j(s, this._parents, n, e)
	}
	function lf(t) {
		var n = this._name,
			e = this._id
		typeof t != 'function' && (t = jr(t))
		for (var r = this._groups, i = r.length, s = [], o = [], a = 0; a < i; ++a)
			for (var u = r[a], f = u.length, l, c = 0; c < f; ++c)
				if ((l = u[c])) {
					for (
						var h = t.call(l, l.__data__, c, u),
							d,
							g = X(l, e),
							p = 0,
							x = h.length;
						p < x;
						++p
					)
						(d = h[p]) && On(d, n, e, p, h, g)
					s.push(h), o.push(l)
				}
		return new j(s, o, n, e)
	}
	var cf = Ft.prototype.constructor
	function hf() {
		return new cf(this._groups, this._parents)
	}
	function df(t, n) {
		var e, r, i
		return function () {
			var s = gt(this, t),
				o = (this.style.removeProperty(t), gt(this, t))
			return s === o ? null : s === e && o === r ? i : (i = n((e = s), (r = o)))
		}
	}
	function mi(t) {
		return function () {
			this.style.removeProperty(t)
		}
	}
	function pf(t, n, e) {
		var r,
			i = e + '',
			s
		return function () {
			var o = gt(this, t)
			return o === i ? null : o === r ? s : (s = n((r = o), e))
		}
	}
	function gf(t, n, e) {
		var r, i, s
		return function () {
			var o = gt(this, t),
				a = e(this),
				u = a + ''
			return (
				a == null && (u = a = (this.style.removeProperty(t), gt(this, t))),
				o === u ? null : o === r && u === i ? s : ((i = u), (s = n((r = o), a)))
			)
		}
	}
	function xf(t, n) {
		var e,
			r,
			i,
			s = 'style.' + n,
			o = 'end.' + s,
			a
		return function () {
			var u = Q(this, t),
				f = u.on,
				l = u.value[s] == null ? a || (a = mi(n)) : void 0
			;(f !== e || i !== l) && (r = (e = f).copy()).on(o, (i = l)), (u.on = r)
		}
	}
	function _f(t, n, e) {
		var r = (t += '') == 'transform' ? na : vi
		return n == null
			? this.styleTween(t, df(t, r)).on('end.style.' + t, mi(t))
			: typeof n == 'function'
			? this.styleTween(t, gf(t, r, Pe(this, 'style.' + t, n))).each(
					xf(this._id, t)
			  )
			: this.styleTween(t, pf(t, r, n), e).on('end.style.' + t, null)
	}
	function yf(t, n, e) {
		return function (r) {
			this.style.setProperty(t, n.call(this, r), e)
		}
	}
	function vf(t, n, e) {
		var r, i
		function s() {
			var o = n.apply(this, arguments)
			return o !== i && (r = (i = o) && yf(t, o, e)), r
		}
		return (s._value = n), s
	}
	function mf(t, n, e) {
		var r = 'style.' + (t += '')
		if (arguments.length < 2) return (r = this.tween(r)) && r._value
		if (n == null) return this.tween(r, null)
		if (typeof n != 'function') throw new Error()
		return this.tween(r, vf(t, n, e ?? ''))
	}
	function wf(t) {
		return function () {
			this.textContent = t
		}
	}
	function $f(t) {
		return function () {
			var n = t(this)
			this.textContent = n ?? ''
		}
	}
	function bf(t) {
		return this.tween(
			'text',
			typeof t == 'function'
				? $f(Pe(this, 'text', t))
				: wf(t == null ? '' : t + '')
		)
	}
	function Nf(t) {
		return function (n) {
			this.textContent = t.call(this, n)
		}
	}
	function Af(t) {
		var n, e
		function r() {
			var i = t.apply(this, arguments)
			return i !== e && (n = (e = i) && Nf(i)), n
		}
		return (r._value = t), r
	}
	function Cf(t) {
		var n = 'text'
		if (arguments.length < 1) return (n = this.tween(n)) && n._value
		if (t == null) return this.tween(n, null)
		if (typeof t != 'function') throw new Error()
		return this.tween(n, Af(t))
	}
	function Mf() {
		for (
			var t = this._name,
				n = this._id,
				e = wi(),
				r = this._groups,
				i = r.length,
				s = 0;
			s < i;
			++s
		)
			for (var o = r[s], a = o.length, u, f = 0; f < a; ++f)
				if ((u = o[f])) {
					var l = X(u, n)
					On(u, t, e, f, o, {
						time: l.time + l.delay + l.duration,
						delay: 0,
						duration: l.duration,
						ease: l.ease
					})
				}
		return new j(r, this._parents, t, e)
	}
	function Rf() {
		var t,
			n,
			e = this,
			r = e._id,
			i = e.size()
		return new Promise(function (s, o) {
			var a = { value: o },
				u = {
					value: function () {
						--i === 0 && s()
					}
				}
			e.each(function () {
				var f = Q(this, r),
					l = f.on
				l !== t &&
					((n = (t = l).copy()),
					n._.cancel.push(a),
					n._.interrupt.push(a),
					n._.end.push(u)),
					(f.on = n)
			})
		})
	}
	var Ef = 0
	function j(t, n, e, r) {
		;(this._groups = t), (this._parents = n), (this._name = e), (this._id = r)
	}
	function wi() {
		return ++Ef
	}
	var _t = Ft.prototype
	j.prototype = {
		constructor: j,
		select: ff,
		selectAll: lf,
		filter: nf,
		merge: ef,
		selection: hf,
		transition: Mf,
		call: _t.call,
		nodes: _t.nodes,
		node: _t.node,
		size: _t.size,
		empty: _t.empty,
		each: _t.each,
		on: of,
		attr: Hu,
		attrTween: Yu,
		style: _f,
		styleTween: mf,
		text: bf,
		textTween: Cf,
		remove: uf,
		tween: Pu,
		delay: Ku,
		duration: Qu,
		ease: tf,
		end: Rf
	}
	function kf(t) {
		return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2
	}
	var Le = { time: null, delay: 0, duration: 250, ease: kf }
	function Sf(t, n) {
		for (var e; !(e = t.__transition) || !(e = e[n]); )
			if (!(t = t.parentNode)) return (Le.time = Tn()), Le
		return e
	}
	function Tf(t) {
		var n, e
		t instanceof j
			? ((n = t._id), (t = t._name))
			: ((n = wi()), ((e = Le).time = Tn()), (t = t == null ? null : t + ''))
		for (var r = this._groups, i = r.length, s = 0; s < i; ++s)
			for (var o = r[s], a = o.length, u, f = 0; f < a; ++f)
				(u = o[f]) && On(u, t, n, f, o, e || Sf(u, n))
		return new j(r, this._parents, t, n)
	}
	;(Ft.prototype.interrupt = Su), (Ft.prototype.transition = Tf)
	var D = '$'
	function Fn() {}
	Fn.prototype = $i.prototype = {
		constructor: Fn,
		has: function (t) {
			return D + t in this
		},
		get: function (t) {
			return this[D + t]
		},
		set: function (t, n) {
			return (this[D + t] = n), this
		},
		remove: function (t) {
			var n = D + t
			return n in this && delete this[n]
		},
		clear: function () {
			for (var t in this) t[0] === D && delete this[t]
		},
		keys: function () {
			var t = []
			for (var n in this) n[0] === D && t.push(n.slice(1))
			return t
		},
		values: function () {
			var t = []
			for (var n in this) n[0] === D && t.push(this[n])
			return t
		},
		entries: function () {
			var t = []
			for (var n in this)
				n[0] === D && t.push({ key: n.slice(1), value: this[n] })
			return t
		},
		size: function () {
			var t = 0
			for (var n in this) n[0] === D && ++t
			return t
		},
		empty: function () {
			for (var t in this) if (t[0] === D) return !1
			return !0
		},
		each: function (t) {
			for (var n in this) n[0] === D && t(this[n], n.slice(1), this)
		}
	}
	function $i(t, n) {
		var e = new Fn()
		if (t instanceof Fn)
			t.each(function (a, u) {
				e.set(u, a)
			})
		else if (Array.isArray(t)) {
			var r = -1,
				i = t.length,
				s
			if (n == null) for (; ++r < i; ) e.set(r, t[r])
			else for (; ++r < i; ) e.set(n((s = t[r]), r, t), s)
		} else if (t) for (var o in t) e.set(o, t[o])
		return e
	}
	function bi() {}
	var ct = $i.prototype
	bi.prototype = {
		constructor: bi,
		has: ct.has,
		add: function (t) {
			return (t += ''), (this[D + t] = t), this
		},
		remove: ct.remove,
		clear: ct.clear,
		values: ct.keys,
		size: ct.size,
		empty: ct.empty,
		each: ct.each
	}
	function Oe(t, n, e) {
		;(t.prototype = n.prototype = e), (e.constructor = t)
	}
	function Ni(t, n) {
		var e = Object.create(t.prototype)
		for (var r in n) e[r] = n[r]
		return e
	}
	function Xt() {}
	var Bt = 0.7,
		zn = 1 / Bt,
		yt = '\\s*([+-]?\\d+)\\s*',
		Vt = '\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*',
		W = '\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*',
		If = /^#([0-9a-f]{3,8})$/,
		Pf = new RegExp('^rgb\\(' + [yt, yt, yt] + '\\)$'),
		Lf = new RegExp('^rgb\\(' + [W, W, W] + '\\)$'),
		Of = new RegExp('^rgba\\(' + [yt, yt, yt, Vt] + '\\)$'),
		Ff = new RegExp('^rgba\\(' + [W, W, W, Vt] + '\\)$'),
		zf = new RegExp('^hsl\\(' + [Vt, W, W] + '\\)$'),
		Df = new RegExp('^hsla\\(' + [Vt, W, W, Vt] + '\\)$'),
		Ai = {
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
		}
	Oe(Xt, Ut, {
		copy: function (t) {
			return Object.assign(new this.constructor(), this, t)
		},
		displayable: function () {
			return this.rgb().displayable()
		},
		hex: Ci,
		formatHex: Ci,
		formatHsl: qf,
		formatRgb: Mi,
		toString: Mi
	})
	function Ci() {
		return this.rgb().formatHex()
	}
	function qf() {
		return Ti(this).formatHsl()
	}
	function Mi() {
		return this.rgb().formatRgb()
	}
	function Ut(t) {
		var n, e
		return (
			(t = (t + '').trim().toLowerCase()),
			(n = If.exec(t))
				? ((e = n[1].length),
				  (n = parseInt(n[1], 16)),
				  e === 6
						? Ri(n)
						: e === 3
						? new P(
								((n >> 8) & 15) | ((n >> 4) & 240),
								((n >> 4) & 15) | (n & 240),
								((n & 15) << 4) | (n & 15),
								1
						  )
						: e === 8
						? Dn(
								(n >> 24) & 255,
								(n >> 16) & 255,
								(n >> 8) & 255,
								(n & 255) / 255
						  )
						: e === 4
						? Dn(
								((n >> 12) & 15) | ((n >> 8) & 240),
								((n >> 8) & 15) | ((n >> 4) & 240),
								((n >> 4) & 15) | (n & 240),
								(((n & 15) << 4) | (n & 15)) / 255
						  )
						: null)
				: (n = Pf.exec(t))
				? new P(n[1], n[2], n[3], 1)
				: (n = Lf.exec(t))
				? new P((n[1] * 255) / 100, (n[2] * 255) / 100, (n[3] * 255) / 100, 1)
				: (n = Of.exec(t))
				? Dn(n[1], n[2], n[3], n[4])
				: (n = Ff.exec(t))
				? Dn((n[1] * 255) / 100, (n[2] * 255) / 100, (n[3] * 255) / 100, n[4])
				: (n = zf.exec(t))
				? Si(n[1], n[2] / 100, n[3] / 100, 1)
				: (n = Df.exec(t))
				? Si(n[1], n[2] / 100, n[3] / 100, n[4])
				: Ai.hasOwnProperty(t)
				? Ri(Ai[t])
				: t === 'transparent'
				? new P(NaN, NaN, NaN, 0)
				: null
		)
	}
	function Ri(t) {
		return new P((t >> 16) & 255, (t >> 8) & 255, t & 255, 1)
	}
	function Dn(t, n, e, r) {
		return r <= 0 && (t = n = e = NaN), new P(t, n, e, r)
	}
	function Hf(t) {
		return (
			t instanceof Xt || (t = Ut(t)),
			t ? ((t = t.rgb()), new P(t.r, t.g, t.b, t.opacity)) : new P()
		)
	}
	function Fe(t, n, e, r) {
		return arguments.length === 1 ? Hf(t) : new P(t, n, e, r ?? 1)
	}
	function P(t, n, e, r) {
		;(this.r = +t), (this.g = +n), (this.b = +e), (this.opacity = +r)
	}
	Oe(
		P,
		Fe,
		Ni(Xt, {
			brighter: function (t) {
				return (
					(t = t == null ? zn : Math.pow(zn, t)),
					new P(this.r * t, this.g * t, this.b * t, this.opacity)
				)
			},
			darker: function (t) {
				return (
					(t = t == null ? Bt : Math.pow(Bt, t)),
					new P(this.r * t, this.g * t, this.b * t, this.opacity)
				)
			},
			rgb: function () {
				return this
			},
			displayable: function () {
				return (
					-0.5 <= this.r &&
					this.r < 255.5 &&
					-0.5 <= this.g &&
					this.g < 255.5 &&
					-0.5 <= this.b &&
					this.b < 255.5 &&
					0 <= this.opacity &&
					this.opacity <= 1
				)
			},
			hex: Ei,
			formatHex: Ei,
			formatRgb: ki,
			toString: ki
		})
	)
	function Ei() {
		return '#' + ze(this.r) + ze(this.g) + ze(this.b)
	}
	function ki() {
		var t = this.opacity
		return (
			(t = isNaN(t) ? 1 : Math.max(0, Math.min(1, t))),
			(t === 1 ? 'rgb(' : 'rgba(') +
				Math.max(0, Math.min(255, Math.round(this.r) || 0)) +
				', ' +
				Math.max(0, Math.min(255, Math.round(this.g) || 0)) +
				', ' +
				Math.max(0, Math.min(255, Math.round(this.b) || 0)) +
				(t === 1 ? ')' : ', ' + t + ')')
		)
	}
	function ze(t) {
		return (
			(t = Math.max(0, Math.min(255, Math.round(t) || 0))),
			(t < 16 ? '0' : '') + t.toString(16)
		)
	}
	function Si(t, n, e, r) {
		return (
			r <= 0
				? (t = n = e = NaN)
				: e <= 0 || e >= 1
				? (t = n = NaN)
				: n <= 0 && (t = NaN),
			new K(t, n, e, r)
		)
	}
	function Ti(t) {
		if (t instanceof K) return new K(t.h, t.s, t.l, t.opacity)
		if ((t instanceof Xt || (t = Ut(t)), !t)) return new K()
		if (t instanceof K) return t
		t = t.rgb()
		var n = t.r / 255,
			e = t.g / 255,
			r = t.b / 255,
			i = Math.min(n, e, r),
			s = Math.max(n, e, r),
			o = NaN,
			a = s - i,
			u = (s + i) / 2
		return (
			a
				? (n === s
						? (o = (e - r) / a + (e < r) * 6)
						: e === s
						? (o = (r - n) / a + 2)
						: (o = (n - e) / a + 4),
				  (a /= u < 0.5 ? s + i : 2 - s - i),
				  (o *= 60))
				: (a = u > 0 && u < 1 ? 0 : o),
			new K(o, a, u, t.opacity)
		)
	}
	function Xf(t, n, e, r) {
		return arguments.length === 1 ? Ti(t) : new K(t, n, e, r ?? 1)
	}
	function K(t, n, e, r) {
		;(this.h = +t), (this.s = +n), (this.l = +e), (this.opacity = +r)
	}
	Oe(
		K,
		Xf,
		Ni(Xt, {
			brighter: function (t) {
				return (
					(t = t == null ? zn : Math.pow(zn, t)),
					new K(this.h, this.s, this.l * t, this.opacity)
				)
			},
			darker: function (t) {
				return (
					(t = t == null ? Bt : Math.pow(Bt, t)),
					new K(this.h, this.s, this.l * t, this.opacity)
				)
			},
			rgb: function () {
				var t = (this.h % 360) + (this.h < 0) * 360,
					n = isNaN(t) || isNaN(this.s) ? 0 : this.s,
					e = this.l,
					r = e + (e < 0.5 ? e : 1 - e) * n,
					i = 2 * e - r
				return new P(
					De(t >= 240 ? t - 240 : t + 120, i, r),
					De(t, i, r),
					De(t < 120 ? t + 240 : t - 120, i, r),
					this.opacity
				)
			},
			displayable: function () {
				return (
					((0 <= this.s && this.s <= 1) || isNaN(this.s)) &&
					0 <= this.l &&
					this.l <= 1 &&
					0 <= this.opacity &&
					this.opacity <= 1
				)
			},
			formatHsl: function () {
				var t = this.opacity
				return (
					(t = isNaN(t) ? 1 : Math.max(0, Math.min(1, t))),
					(t === 1 ? 'hsl(' : 'hsla(') +
						(this.h || 0) +
						', ' +
						(this.s || 0) * 100 +
						'%, ' +
						(this.l || 0) * 100 +
						'%' +
						(t === 1 ? ')' : ', ' + t + ')')
				)
			}
		})
	)
	function De(t, n, e) {
		return (
			(t < 60
				? n + ((e - n) * t) / 60
				: t < 180
				? e
				: t < 240
				? n + ((e - n) * (240 - t)) / 60
				: n) * 255
		)
	}
	var Bf = { value: function () {} }
	function Ii() {
		for (var t = 0, n = arguments.length, e = {}, r; t < n; ++t) {
			if (!(r = arguments[t] + '') || r in e || /[\s.]/.test(r))
				throw new Error('illegal type: ' + r)
			e[r] = []
		}
		return new qn(e)
	}
	function qn(t) {
		this._ = t
	}
	function Vf(t, n) {
		return t
			.trim()
			.split(/^|\s+/)
			.map(function (e) {
				var r = '',
					i = e.indexOf('.')
				if (
					(i >= 0 && ((r = e.slice(i + 1)), (e = e.slice(0, i))),
					e && !n.hasOwnProperty(e))
				)
					throw new Error('unknown type: ' + e)
				return { type: e, name: r }
			})
	}
	qn.prototype = Ii.prototype = {
		constructor: qn,
		on: function (t, n) {
			var e = this._,
				r = Vf(t + '', e),
				i,
				s = -1,
				o = r.length
			if (arguments.length < 2) {
				for (; ++s < o; )
					if ((i = (t = r[s]).type) && (i = Uf(e[i], t.name))) return i
				return
			}
			if (n != null && typeof n != 'function')
				throw new Error('invalid callback: ' + n)
			for (; ++s < o; )
				if ((i = (t = r[s]).type)) e[i] = Pi(e[i], t.name, n)
				else if (n == null) for (i in e) e[i] = Pi(e[i], t.name, null)
			return this
		},
		copy: function () {
			var t = {},
				n = this._
			for (var e in n) t[e] = n[e].slice()
			return new qn(t)
		},
		call: function (t, n) {
			if ((i = arguments.length - 2) > 0)
				for (var e = new Array(i), r = 0, i, s; r < i; ++r)
					e[r] = arguments[r + 2]
			if (!this._.hasOwnProperty(t)) throw new Error('unknown type: ' + t)
			for (s = this._[t], r = 0, i = s.length; r < i; ++r)
				s[r].value.apply(n, e)
		},
		apply: function (t, n, e) {
			if (!this._.hasOwnProperty(t)) throw new Error('unknown type: ' + t)
			for (var r = this._[t], i = 0, s = r.length; i < s; ++i)
				r[i].value.apply(n, e)
		}
	}
	function Uf(t, n) {
		for (var e = 0, r = t.length, i; e < r; ++e)
			if ((i = t[e]).name === n) return i.value
	}
	function Pi(t, n, e) {
		for (var r = 0, i = t.length; r < i; ++r)
			if (t[r].name === n) {
				;(t[r] = Bf), (t = t.slice(0, r).concat(t.slice(r + 1)))
				break
			}
		return e != null && t.push({ name: n, value: e }), t
	}
	function Yf(t) {
		return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2
	}
	function Li(t) {
		return function () {
			return t
		}
	}
	function Gf(t, n) {
		return function (e) {
			return t + e * n
		}
	}
	function Wf(t, n, e) {
		return (
			(t = Math.pow(t, e)),
			(n = Math.pow(n, e) - t),
			(e = 1 / e),
			function (r) {
				return Math.pow(t + r * n, e)
			}
		)
	}
	function Kf(t) {
		return (t = +t) == 1
			? Oi
			: function (n, e) {
					return e - n ? Wf(n, e, t) : Li(isNaN(n) ? e : n)
			  }
	}
	function Oi(t, n) {
		var e = n - t
		return e ? Gf(t, e) : Li(isNaN(t) ? n : t)
	}
	const Fi = (function t(n) {
		var e = Kf(n)
		function r(i, s) {
			var o = e((i = Fe(i)).r, (s = Fe(s)).r),
				a = e(i.g, s.g),
				u = e(i.b, s.b),
				f = Oi(i.opacity, s.opacity)
			return function (l) {
				return (
					(i.r = o(l)), (i.g = a(l)), (i.b = u(l)), (i.opacity = f(l)), i + ''
				)
			}
		}
		return (r.gamma = t), r
	})(1)
	function ut(t, n) {
		return (
			(t = +t),
			(n = +n),
			function (e) {
				return t * (1 - e) + n * e
			}
		)
	}
	var qe = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
		He = new RegExp(qe.source, 'g')
	function Zf(t) {
		return function () {
			return t
		}
	}
	function Jf(t) {
		return function (n) {
			return t(n) + ''
		}
	}
	function Qf(t, n) {
		var e = (qe.lastIndex = He.lastIndex = 0),
			r,
			i,
			s,
			o = -1,
			a = [],
			u = []
		for (t = t + '', n = n + ''; (r = qe.exec(t)) && (i = He.exec(n)); )
			(s = i.index) > e &&
				((s = n.slice(e, s)), a[o] ? (a[o] += s) : (a[++o] = s)),
				(r = r[0]) === (i = i[0])
					? a[o]
						? (a[o] += i)
						: (a[++o] = i)
					: ((a[++o] = null), u.push({ i: o, x: ut(r, i) })),
				(e = He.lastIndex)
		return (
			e < n.length && ((s = n.slice(e)), a[o] ? (a[o] += s) : (a[++o] = s)),
			a.length < 2
				? u[0]
					? Jf(u[0].x)
					: Zf(n)
				: ((n = u.length),
				  function (f) {
						for (var l = 0, c; l < n; ++l) a[(c = u[l]).i] = c.x(f)
						return a.join('')
				  })
		)
	}
	var zi = 180 / Math.PI,
		Xe = {
			translateX: 0,
			translateY: 0,
			rotate: 0,
			skewX: 0,
			scaleX: 1,
			scaleY: 1
		}
	function Di(t, n, e, r, i, s) {
		var o, a, u
		return (
			(o = Math.sqrt(t * t + n * n)) && ((t /= o), (n /= o)),
			(u = t * e + n * r) && ((e -= t * u), (r -= n * u)),
			(a = Math.sqrt(e * e + r * r)) && ((e /= a), (r /= a), (u /= a)),
			t * r < n * e && ((t = -t), (n = -n), (u = -u), (o = -o)),
			{
				translateX: i,
				translateY: s,
				rotate: Math.atan2(n, t) * zi,
				skewX: Math.atan(u) * zi,
				scaleX: o,
				scaleY: a
			}
		)
	}
	var Yt, Be, qi, Hn
	function jf(t) {
		return t === 'none'
			? Xe
			: (Yt ||
					((Yt = document.createElement('DIV')),
					(Be = document.documentElement),
					(qi = document.defaultView)),
			  (Yt.style.transform = t),
			  (t = qi
					.getComputedStyle(Be.appendChild(Yt), null)
					.getPropertyValue('transform')),
			  Be.removeChild(Yt),
			  (t = t.slice(7, -1).split(',')),
			  Di(+t[0], +t[1], +t[2], +t[3], +t[4], +t[5]))
	}
	function tl(t) {
		return t == null ||
			(Hn || (Hn = document.createElementNS('http://www.w3.org/2000/svg', 'g')),
			Hn.setAttribute('transform', t),
			!(t = Hn.transform.baseVal.consolidate()))
			? Xe
			: ((t = t.matrix), Di(t.a, t.b, t.c, t.d, t.e, t.f))
	}
	function Hi(t, n, e, r) {
		function i(f) {
			return f.length ? f.pop() + ' ' : ''
		}
		function s(f, l, c, h, d, g) {
			if (f !== c || l !== h) {
				var p = d.push('translate(', null, n, null, e)
				g.push({ i: p - 4, x: ut(f, c) }, { i: p - 2, x: ut(l, h) })
			} else (c || h) && d.push('translate(' + c + n + h + e)
		}
		function o(f, l, c, h) {
			f !== l
				? (f - l > 180 ? (l += 360) : l - f > 180 && (f += 360),
				  h.push({ i: c.push(i(c) + 'rotate(', null, r) - 2, x: ut(f, l) }))
				: l && c.push(i(c) + 'rotate(' + l + r)
		}
		function a(f, l, c, h) {
			f !== l
				? h.push({ i: c.push(i(c) + 'skewX(', null, r) - 2, x: ut(f, l) })
				: l && c.push(i(c) + 'skewX(' + l + r)
		}
		function u(f, l, c, h, d, g) {
			if (f !== c || l !== h) {
				var p = d.push(i(d) + 'scale(', null, ',', null, ')')
				g.push({ i: p - 4, x: ut(f, c) }, { i: p - 2, x: ut(l, h) })
			} else (c !== 1 || h !== 1) && d.push(i(d) + 'scale(' + c + ',' + h + ')')
		}
		return function (f, l) {
			var c = [],
				h = []
			return (
				(f = t(f)),
				(l = t(l)),
				s(f.translateX, f.translateY, l.translateX, l.translateY, c, h),
				o(f.rotate, l.rotate, c, h),
				a(f.skewX, l.skewX, c, h),
				u(f.scaleX, f.scaleY, l.scaleX, l.scaleY, c, h),
				(f = l = null),
				function (d) {
					for (var g = -1, p = h.length, x; ++g < p; ) c[(x = h[g]).i] = x.x(d)
					return c.join('')
				}
			)
		}
	}
	var nl = Hi(jf, 'px, ', 'px)', 'deg)'),
		el = Hi(tl, ', ', ')', ')')
	function vt() {
		return Math.random()
	}
	;(function t(n) {
		function e(r, i) {
			return (
				(r = r == null ? 0 : +r),
				(i = i == null ? 1 : +i),
				arguments.length === 1 ? ((i = r), (r = 0)) : (i -= r),
				function () {
					return n() * i + r
				}
			)
		}
		return (e.source = t), e
	})(vt)
	const rl = (function t(n) {
		function e(r, i) {
			var s, o
			return (
				(r = r == null ? 0 : +r),
				(i = i == null ? 1 : +i),
				function () {
					var a
					if (s != null) (a = s), (s = null)
					else
						do (s = n() * 2 - 1), (a = n() * 2 - 1), (o = s * s + a * a)
						while (!o || o > 1)
					return r + i * a * Math.sqrt((-2 * Math.log(o)) / o)
				}
			)
		}
		return (e.source = t), e
	})(vt)
	;(function t(n) {
		function e() {
			var r = rl.source(n).apply(this, arguments)
			return function () {
				return Math.exp(r())
			}
		}
		return (e.source = t), e
	})(vt)
	const il = (function t(n) {
		function e(r) {
			return function () {
				for (var i = 0, s = 0; s < r; ++s) i += n()
				return i
			}
		}
		return (e.source = t), e
	})(vt)
	;(function t(n) {
		function e(r) {
			var i = il.source(n)(r)
			return function () {
				return i() / r
			}
		}
		return (e.source = t), e
	})(vt),
		(function t(n) {
			function e(r) {
				return function () {
					return -Math.log(1 - n()) / r
				}
			}
			return (e.source = t), e
		})(vt)
	var Ve = 'http://www.w3.org/1999/xhtml'
	const Xi = {
		svg: 'http://www.w3.org/2000/svg',
		xhtml: Ve,
		xlink: 'http://www.w3.org/1999/xlink',
		xml: 'http://www.w3.org/XML/1998/namespace',
		xmlns: 'http://www.w3.org/2000/xmlns/'
	}
	function Xn(t) {
		var n = (t += ''),
			e = n.indexOf(':')
		return (
			e >= 0 && (n = t.slice(0, e)) !== 'xmlns' && (t = t.slice(e + 1)),
			Xi.hasOwnProperty(n) ? { space: Xi[n], local: t } : t
		)
	}
	function sl(t) {
		return function () {
			var n = this.ownerDocument,
				e = this.namespaceURI
			return e === Ve && n.documentElement.namespaceURI === Ve
				? n.createElement(t)
				: n.createElementNS(e, t)
		}
	}
	function ol(t) {
		return function () {
			return this.ownerDocument.createElementNS(t.space, t.local)
		}
	}
	function Bi(t) {
		var n = Xn(t)
		return (n.local ? ol : sl)(n)
	}
	function al() {}
	function Ue(t) {
		return t == null
			? al
			: function () {
					return this.querySelector(t)
			  }
	}
	function ul(t) {
		typeof t != 'function' && (t = Ue(t))
		for (
			var n = this._groups, e = n.length, r = new Array(e), i = 0;
			i < e;
			++i
		)
			for (
				var s = n[i], o = s.length, a = (r[i] = new Array(o)), u, f, l = 0;
				l < o;
				++l
			)
				(u = s[l]) &&
					(f = t.call(u, u.__data__, l, s)) &&
					('__data__' in u && (f.__data__ = u.__data__), (a[l] = f))
		return new L(r, this._parents)
	}
	function fl() {
		return []
	}
	function Vi(t) {
		return t == null
			? fl
			: function () {
					return this.querySelectorAll(t)
			  }
	}
	function ll(t) {
		typeof t != 'function' && (t = Vi(t))
		for (var n = this._groups, e = n.length, r = [], i = [], s = 0; s < e; ++s)
			for (var o = n[s], a = o.length, u, f = 0; f < a; ++f)
				(u = o[f]) && (r.push(t.call(u, u.__data__, f, o)), i.push(u))
		return new L(r, i)
	}
	function Ui(t) {
		return function () {
			return this.matches(t)
		}
	}
	function cl(t) {
		typeof t != 'function' && (t = Ui(t))
		for (
			var n = this._groups, e = n.length, r = new Array(e), i = 0;
			i < e;
			++i
		)
			for (var s = n[i], o = s.length, a = (r[i] = []), u, f = 0; f < o; ++f)
				(u = s[f]) && t.call(u, u.__data__, f, s) && a.push(u)
		return new L(r, this._parents)
	}
	function Yi(t) {
		return new Array(t.length)
	}
	function hl() {
		return new L(this._enter || this._groups.map(Yi), this._parents)
	}
	function Bn(t, n) {
		;(this.ownerDocument = t.ownerDocument),
			(this.namespaceURI = t.namespaceURI),
			(this._next = null),
			(this._parent = t),
			(this.__data__ = n)
	}
	Bn.prototype = {
		constructor: Bn,
		appendChild: function (t) {
			return this._parent.insertBefore(t, this._next)
		},
		insertBefore: function (t, n) {
			return this._parent.insertBefore(t, n)
		},
		querySelector: function (t) {
			return this._parent.querySelector(t)
		},
		querySelectorAll: function (t) {
			return this._parent.querySelectorAll(t)
		}
	}
	function dl(t) {
		return function () {
			return t
		}
	}
	var Gi = '$'
	function pl(t, n, e, r, i, s) {
		for (var o = 0, a, u = n.length, f = s.length; o < f; ++o)
			(a = n[o]) ? ((a.__data__ = s[o]), (r[o] = a)) : (e[o] = new Bn(t, s[o]))
		for (; o < u; ++o) (a = n[o]) && (i[o] = a)
	}
	function gl(t, n, e, r, i, s, o) {
		var a,
			u,
			f = {},
			l = n.length,
			c = s.length,
			h = new Array(l),
			d
		for (a = 0; a < l; ++a)
			(u = n[a]) &&
				((h[a] = d = Gi + o.call(u, u.__data__, a, n)),
				d in f ? (i[a] = u) : (f[d] = u))
		for (a = 0; a < c; ++a)
			(d = Gi + o.call(t, s[a], a, s)),
				(u = f[d])
					? ((r[a] = u), (u.__data__ = s[a]), (f[d] = null))
					: (e[a] = new Bn(t, s[a]))
		for (a = 0; a < l; ++a) (u = n[a]) && f[h[a]] === u && (i[a] = u)
	}
	function xl(t, n) {
		if (!t)
			return (
				(d = new Array(this.size())),
				(f = -1),
				this.each(function (y) {
					d[++f] = y
				}),
				d
			)
		var e = n ? gl : pl,
			r = this._parents,
			i = this._groups
		typeof t != 'function' && (t = dl(t))
		for (
			var s = i.length,
				o = new Array(s),
				a = new Array(s),
				u = new Array(s),
				f = 0;
			f < s;
			++f
		) {
			var l = r[f],
				c = i[f],
				h = c.length,
				d = t.call(l, l && l.__data__, f, r),
				g = d.length,
				p = (a[f] = new Array(g)),
				x = (o[f] = new Array(g)),
				$ = (u[f] = new Array(h))
			e(l, c, p, x, $, d, n)
			for (var v = 0, _ = 0, b, N; v < g; ++v)
				if ((b = p[v])) {
					for (v >= _ && (_ = v + 1); !(N = x[_]) && ++_ < g; );
					b._next = N || null
				}
		}
		return (o = new L(o, r)), (o._enter = a), (o._exit = u), o
	}
	function _l() {
		return new L(this._exit || this._groups.map(Yi), this._parents)
	}
	function yl(t, n, e) {
		var r = this.enter(),
			i = this,
			s = this.exit()
		return (
			(r = typeof t == 'function' ? t(r) : r.append(t + '')),
			n != null && (i = n(i)),
			e == null ? s.remove() : e(s),
			r && i ? r.merge(i).order() : i
		)
	}
	function vl(t) {
		for (
			var n = this._groups,
				e = t._groups,
				r = n.length,
				i = e.length,
				s = Math.min(r, i),
				o = new Array(r),
				a = 0;
			a < s;
			++a
		)
			for (
				var u = n[a],
					f = e[a],
					l = u.length,
					c = (o[a] = new Array(l)),
					h,
					d = 0;
				d < l;
				++d
			)
				(h = u[d] || f[d]) && (c[d] = h)
		for (; a < r; ++a) o[a] = n[a]
		return new L(o, this._parents)
	}
	function ml() {
		for (var t = this._groups, n = -1, e = t.length; ++n < e; )
			for (var r = t[n], i = r.length - 1, s = r[i], o; --i >= 0; )
				(o = r[i]) &&
					(s &&
						o.compareDocumentPosition(s) ^ 4 &&
						s.parentNode.insertBefore(o, s),
					(s = o))
		return this
	}
	function wl(t) {
		t || (t = $l)
		function n(c, h) {
			return c && h ? t(c.__data__, h.__data__) : !c - !h
		}
		for (
			var e = this._groups, r = e.length, i = new Array(r), s = 0;
			s < r;
			++s
		) {
			for (
				var o = e[s], a = o.length, u = (i[s] = new Array(a)), f, l = 0;
				l < a;
				++l
			)
				(f = o[l]) && (u[l] = f)
			u.sort(n)
		}
		return new L(i, this._parents).order()
	}
	function $l(t, n) {
		return t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN
	}
	function bl() {
		var t = arguments[0]
		return (arguments[0] = this), t.apply(null, arguments), this
	}
	function Nl() {
		var t = new Array(this.size()),
			n = -1
		return (
			this.each(function () {
				t[++n] = this
			}),
			t
		)
	}
	function Al() {
		for (var t = this._groups, n = 0, e = t.length; n < e; ++n)
			for (var r = t[n], i = 0, s = r.length; i < s; ++i) {
				var o = r[i]
				if (o) return o
			}
		return null
	}
	function Cl() {
		var t = 0
		return (
			this.each(function () {
				++t
			}),
			t
		)
	}
	function Ml() {
		return !this.node()
	}
	function Rl(t) {
		for (var n = this._groups, e = 0, r = n.length; e < r; ++e)
			for (var i = n[e], s = 0, o = i.length, a; s < o; ++s)
				(a = i[s]) && t.call(a, a.__data__, s, i)
		return this
	}
	function El(t) {
		return function () {
			this.removeAttribute(t)
		}
	}
	function kl(t) {
		return function () {
			this.removeAttributeNS(t.space, t.local)
		}
	}
	function Sl(t, n) {
		return function () {
			this.setAttribute(t, n)
		}
	}
	function Tl(t, n) {
		return function () {
			this.setAttributeNS(t.space, t.local, n)
		}
	}
	function Il(t, n) {
		return function () {
			var e = n.apply(this, arguments)
			e == null ? this.removeAttribute(t) : this.setAttribute(t, e)
		}
	}
	function Pl(t, n) {
		return function () {
			var e = n.apply(this, arguments)
			e == null
				? this.removeAttributeNS(t.space, t.local)
				: this.setAttributeNS(t.space, t.local, e)
		}
	}
	function Ll(t, n) {
		var e = Xn(t)
		if (arguments.length < 2) {
			var r = this.node()
			return e.local ? r.getAttributeNS(e.space, e.local) : r.getAttribute(e)
		}
		return this.each(
			(n == null
				? e.local
					? kl
					: El
				: typeof n == 'function'
				? e.local
					? Pl
					: Il
				: e.local
				? Tl
				: Sl)(e, n)
		)
	}
	function Wi(t) {
		return (
			(t.ownerDocument && t.ownerDocument.defaultView) ||
			(t.document && t) ||
			t.defaultView
		)
	}
	function Ol(t) {
		return function () {
			this.style.removeProperty(t)
		}
	}
	function Fl(t, n, e) {
		return function () {
			this.style.setProperty(t, n, e)
		}
	}
	function zl(t, n, e) {
		return function () {
			var r = n.apply(this, arguments)
			r == null ? this.style.removeProperty(t) : this.style.setProperty(t, r, e)
		}
	}
	function Dl(t, n, e) {
		return arguments.length > 1
			? this.each(
					(n == null ? Ol : typeof n == 'function' ? zl : Fl)(t, n, e ?? '')
			  )
			: mt(this.node(), t)
	}
	function mt(t, n) {
		return (
			t.style.getPropertyValue(n) ||
			Wi(t).getComputedStyle(t, null).getPropertyValue(n)
		)
	}
	function ql(t) {
		return function () {
			delete this[t]
		}
	}
	function Hl(t, n) {
		return function () {
			this[t] = n
		}
	}
	function Xl(t, n) {
		return function () {
			var e = n.apply(this, arguments)
			e == null ? delete this[t] : (this[t] = e)
		}
	}
	function Bl(t, n) {
		return arguments.length > 1
			? this.each((n == null ? ql : typeof n == 'function' ? Xl : Hl)(t, n))
			: this.node()[t]
	}
	function Ki(t) {
		return t.trim().split(/^|\s+/)
	}
	function Ye(t) {
		return t.classList || new Zi(t)
	}
	function Zi(t) {
		;(this._node = t), (this._names = Ki(t.getAttribute('class') || ''))
	}
	Zi.prototype = {
		add: function (t) {
			var n = this._names.indexOf(t)
			n < 0 &&
				(this._names.push(t),
				this._node.setAttribute('class', this._names.join(' ')))
		},
		remove: function (t) {
			var n = this._names.indexOf(t)
			n >= 0 &&
				(this._names.splice(n, 1),
				this._node.setAttribute('class', this._names.join(' ')))
		},
		contains: function (t) {
			return this._names.indexOf(t) >= 0
		}
	}
	function Ji(t, n) {
		for (var e = Ye(t), r = -1, i = n.length; ++r < i; ) e.add(n[r])
	}
	function Qi(t, n) {
		for (var e = Ye(t), r = -1, i = n.length; ++r < i; ) e.remove(n[r])
	}
	function Vl(t) {
		return function () {
			Ji(this, t)
		}
	}
	function Ul(t) {
		return function () {
			Qi(this, t)
		}
	}
	function Yl(t, n) {
		return function () {
			;(n.apply(this, arguments) ? Ji : Qi)(this, t)
		}
	}
	function Gl(t, n) {
		var e = Ki(t + '')
		if (arguments.length < 2) {
			for (var r = Ye(this.node()), i = -1, s = e.length; ++i < s; )
				if (!r.contains(e[i])) return !1
			return !0
		}
		return this.each((typeof n == 'function' ? Yl : n ? Vl : Ul)(e, n))
	}
	function Wl() {
		this.textContent = ''
	}
	function Kl(t) {
		return function () {
			this.textContent = t
		}
	}
	function Zl(t) {
		return function () {
			var n = t.apply(this, arguments)
			this.textContent = n ?? ''
		}
	}
	function Jl(t) {
		return arguments.length
			? this.each(t == null ? Wl : (typeof t == 'function' ? Zl : Kl)(t))
			: this.node().textContent
	}
	function Ql() {
		this.innerHTML = ''
	}
	function jl(t) {
		return function () {
			this.innerHTML = t
		}
	}
	function tc(t) {
		return function () {
			var n = t.apply(this, arguments)
			this.innerHTML = n ?? ''
		}
	}
	function nc(t) {
		return arguments.length
			? this.each(t == null ? Ql : (typeof t == 'function' ? tc : jl)(t))
			: this.node().innerHTML
	}
	function ec() {
		this.nextSibling && this.parentNode.appendChild(this)
	}
	function rc() {
		return this.each(ec)
	}
	function ic() {
		this.previousSibling &&
			this.parentNode.insertBefore(this, this.parentNode.firstChild)
	}
	function sc() {
		return this.each(ic)
	}
	function oc(t) {
		var n = typeof t == 'function' ? t : Bi(t)
		return this.select(function () {
			return this.appendChild(n.apply(this, arguments))
		})
	}
	function ac() {
		return null
	}
	function uc(t, n) {
		var e = typeof t == 'function' ? t : Bi(t),
			r = n == null ? ac : typeof n == 'function' ? n : Ue(n)
		return this.select(function () {
			return this.insertBefore(
				e.apply(this, arguments),
				r.apply(this, arguments) || null
			)
		})
	}
	function fc() {
		var t = this.parentNode
		t && t.removeChild(this)
	}
	function lc() {
		return this.each(fc)
	}
	function cc() {
		var t = this.cloneNode(!1),
			n = this.parentNode
		return n ? n.insertBefore(t, this.nextSibling) : t
	}
	function hc() {
		var t = this.cloneNode(!0),
			n = this.parentNode
		return n ? n.insertBefore(t, this.nextSibling) : t
	}
	function dc(t) {
		return this.select(t ? hc : cc)
	}
	function pc(t) {
		return arguments.length
			? this.property('__data__', t)
			: this.node().__data__
	}
	var ji = {},
		Gt = null
	if (typeof document < 'u') {
		var gc = document.documentElement
		'onmouseenter' in gc ||
			(ji = { mouseenter: 'mouseover', mouseleave: 'mouseout' })
	}
	function xc(t, n, e) {
		return (
			(t = ts(t, n, e)),
			function (r) {
				var i = r.relatedTarget
				;(!i || (i !== this && !(i.compareDocumentPosition(this) & 8))) &&
					t.call(this, r)
			}
		)
	}
	function ts(t, n, e) {
		return function (r) {
			var i = Gt
			Gt = r
			try {
				t.call(this, this.__data__, n, e)
			} finally {
				Gt = i
			}
		}
	}
	function _c(t) {
		return t
			.trim()
			.split(/^|\s+/)
			.map(function (n) {
				var e = '',
					r = n.indexOf('.')
				return (
					r >= 0 && ((e = n.slice(r + 1)), (n = n.slice(0, r))),
					{ type: n, name: e }
				)
			})
	}
	function yc(t) {
		return function () {
			var n = this.__on
			if (n) {
				for (var e = 0, r = -1, i = n.length, s; e < i; ++e)
					(s = n[e]),
						(!t.type || s.type === t.type) && s.name === t.name
							? this.removeEventListener(s.type, s.listener, s.capture)
							: (n[++r] = s)
				++r ? (n.length = r) : delete this.__on
			}
		}
	}
	function vc(t, n, e) {
		var r = ji.hasOwnProperty(t.type) ? xc : ts
		return function (i, s, o) {
			var a = this.__on,
				u,
				f = r(n, s, o)
			if (a) {
				for (var l = 0, c = a.length; l < c; ++l)
					if ((u = a[l]).type === t.type && u.name === t.name) {
						this.removeEventListener(u.type, u.listener, u.capture),
							this.addEventListener(u.type, (u.listener = f), (u.capture = e)),
							(u.value = n)
						return
					}
			}
			this.addEventListener(t.type, f, e),
				(u = { type: t.type, name: t.name, value: n, listener: f, capture: e }),
				a ? a.push(u) : (this.__on = [u])
		}
	}
	function mc(t, n, e) {
		var r = _c(t + ''),
			i,
			s = r.length,
			o
		if (arguments.length < 2) {
			var a = this.node().__on
			if (a) {
				for (var u = 0, f = a.length, l; u < f; ++u)
					for (i = 0, l = a[u]; i < s; ++i)
						if ((o = r[i]).type === l.type && o.name === l.name) return l.value
			}
			return
		}
		for (a = n ? vc : yc, e == null && (e = !1), i = 0; i < s; ++i)
			this.each(a(r[i], n, e))
		return this
	}
	function ns(t, n, e) {
		var r = Wi(t),
			i = r.CustomEvent
		typeof i == 'function'
			? (i = new i(n, e))
			: ((i = r.document.createEvent('Event')),
			  e
					? (i.initEvent(n, e.bubbles, e.cancelable), (i.detail = e.detail))
					: i.initEvent(n, !1, !1)),
			t.dispatchEvent(i)
	}
	function wc(t, n) {
		return function () {
			return ns(this, t, n)
		}
	}
	function $c(t, n) {
		return function () {
			return ns(this, t, n.apply(this, arguments))
		}
	}
	function bc(t, n) {
		return this.each((typeof n == 'function' ? $c : wc)(t, n))
	}
	var es = [null]
	function L(t, n) {
		;(this._groups = t), (this._parents = n)
	}
	function Wt() {
		return new L([[document.documentElement]], es)
	}
	L.prototype = Wt.prototype = {
		constructor: L,
		select: ul,
		selectAll: ll,
		filter: cl,
		data: xl,
		enter: hl,
		exit: _l,
		join: yl,
		merge: vl,
		order: ml,
		sort: wl,
		call: bl,
		nodes: Nl,
		node: Al,
		size: Cl,
		empty: Ml,
		each: Rl,
		attr: Ll,
		style: Dl,
		property: Bl,
		classed: Gl,
		text: Jl,
		html: nc,
		raise: rc,
		lower: sc,
		append: oc,
		insert: uc,
		remove: lc,
		clone: dc,
		datum: pc,
		on: mc,
		dispatch: bc
	}
	function Kt(t) {
		return typeof t == 'string'
			? new L([[document.querySelector(t)]], [document.documentElement])
			: new L([[t]], es)
	}
	var wt = 0,
		Zt = 0,
		Jt = 0,
		rs = 1e3,
		Vn,
		Qt,
		Un = 0,
		ht = 0,
		Yn = 0,
		jt = typeof performance == 'object' && performance.now ? performance : Date,
		is =
			typeof window == 'object' && window.requestAnimationFrame
				? window.requestAnimationFrame.bind(window)
				: function (t) {
						setTimeout(t, 17)
				  }
	function Gn() {
		return ht || (is(Nc), (ht = jt.now() + Yn))
	}
	function Nc() {
		ht = 0
	}
	function Wn() {
		this._call = this._time = this._next = null
	}
	Wn.prototype = ss.prototype = {
		constructor: Wn,
		restart: function (t, n, e) {
			if (typeof t != 'function')
				throw new TypeError('callback is not a function')
			;(e = (e == null ? Gn() : +e) + (n == null ? 0 : +n)),
				!this._next &&
					Qt !== this &&
					(Qt ? (Qt._next = this) : (Vn = this), (Qt = this)),
				(this._call = t),
				(this._time = e),
				Ge()
		},
		stop: function () {
			this._call && ((this._call = null), (this._time = 1 / 0), Ge())
		}
	}
	function ss(t, n, e) {
		var r = new Wn()
		return r.restart(t, n, e), r
	}
	function Ac() {
		Gn(), ++wt
		for (var t = Vn, n; t; )
			(n = ht - t._time) >= 0 && t._call.call(null, n), (t = t._next)
		--wt
	}
	function os() {
		;(ht = (Un = jt.now()) + Yn), (wt = Zt = 0)
		try {
			Ac()
		} finally {
			;(wt = 0), Mc(), (ht = 0)
		}
	}
	function Cc() {
		var t = jt.now(),
			n = t - Un
		n > rs && ((Yn -= n), (Un = t))
	}
	function Mc() {
		for (var t, n = Vn, e, r = 1 / 0; n; )
			n._call
				? (r > n._time && (r = n._time), (t = n), (n = n._next))
				: ((e = n._next), (n._next = null), (n = t ? (t._next = e) : (Vn = e)))
		;(Qt = t), Ge(r)
	}
	function Ge(t) {
		if (!wt) {
			Zt && (Zt = clearTimeout(Zt))
			var n = t - ht
			n > 24
				? (t < 1 / 0 && (Zt = setTimeout(os, t - jt.now() - Yn)),
				  Jt && (Jt = clearInterval(Jt)))
				: (Jt || ((Un = jt.now()), (Jt = setInterval(Cc, rs))),
				  (wt = 1),
				  is(os))
		}
	}
	function as(t, n, e) {
		var r = new Wn()
		return (
			(n = n == null ? 0 : +n),
			r.restart(
				function (i) {
					r.stop(), t(i + n)
				},
				n,
				e
			),
			r
		)
	}
	var Rc = Ii('start', 'end', 'cancel', 'interrupt'),
		Ec = [],
		us = 0,
		fs = 1,
		We = 2,
		Kn = 3,
		ls = 4,
		Ke = 5,
		Zn = 6
	function Jn(t, n, e, r, i, s) {
		var o = t.__transition
		if (!o) t.__transition = {}
		else if (e in o) return
		kc(t, e, {
			name: n,
			index: r,
			group: i,
			on: Rc,
			tween: Ec,
			time: s.time,
			delay: s.delay,
			duration: s.duration,
			ease: s.ease,
			timer: null,
			state: us
		})
	}
	function Ze(t, n) {
		var e = B(t, n)
		if (e.state > us) throw new Error('too late; already scheduled')
		return e
	}
	function tt(t, n) {
		var e = B(t, n)
		if (e.state > Kn) throw new Error('too late; already running')
		return e
	}
	function B(t, n) {
		var e = t.__transition
		if (!e || !(e = e[n])) throw new Error('transition not found')
		return e
	}
	function kc(t, n, e) {
		var r = t.__transition,
			i
		;(r[n] = e), (e.timer = ss(s, 0, e.time))
		function s(f) {
			;(e.state = fs),
				e.timer.restart(o, e.delay, e.time),
				e.delay <= f && o(f - e.delay)
		}
		function o(f) {
			var l, c, h, d
			if (e.state !== fs) return u()
			for (l in r)
				if (((d = r[l]), d.name === e.name)) {
					if (d.state === Kn) return as(o)
					d.state === ls
						? ((d.state = Zn),
						  d.timer.stop(),
						  d.on.call('interrupt', t, t.__data__, d.index, d.group),
						  delete r[l])
						: +l < n &&
						  ((d.state = Zn),
						  d.timer.stop(),
						  d.on.call('cancel', t, t.__data__, d.index, d.group),
						  delete r[l])
				}
			if (
				(as(function () {
					e.state === Kn &&
						((e.state = ls), e.timer.restart(a, e.delay, e.time), a(f))
				}),
				(e.state = We),
				e.on.call('start', t, t.__data__, e.index, e.group),
				e.state === We)
			) {
				for (
					e.state = Kn, i = new Array((h = e.tween.length)), l = 0, c = -1;
					l < h;
					++l
				)
					(d = e.tween[l].value.call(t, t.__data__, e.index, e.group)) &&
						(i[++c] = d)
				i.length = c + 1
			}
		}
		function a(f) {
			for (
				var l =
						f < e.duration
							? e.ease.call(null, f / e.duration)
							: (e.timer.restart(u), (e.state = Ke), 1),
					c = -1,
					h = i.length;
				++c < h;

			)
				i[c].call(t, l)
			e.state === Ke && (e.on.call('end', t, t.__data__, e.index, e.group), u())
		}
		function u() {
			;(e.state = Zn), e.timer.stop(), delete r[n]
			for (var f in r) return
			delete t.__transition
		}
	}
	function Sc(t, n) {
		var e = t.__transition,
			r,
			i,
			s = !0,
			o
		if (e) {
			n = n == null ? null : n + ''
			for (o in e) {
				if ((r = e[o]).name !== n) {
					s = !1
					continue
				}
				;(i = r.state > We && r.state < Ke),
					(r.state = Zn),
					r.timer.stop(),
					r.on.call(
						i ? 'interrupt' : 'cancel',
						t,
						t.__data__,
						r.index,
						r.group
					),
					delete e[o]
			}
			s && delete t.__transition
		}
	}
	function Tc(t) {
		return this.each(function () {
			Sc(this, t)
		})
	}
	function Ic(t, n) {
		var e, r
		return function () {
			var i = tt(this, t),
				s = i.tween
			if (s !== e) {
				r = e = s
				for (var o = 0, a = r.length; o < a; ++o)
					if (r[o].name === n) {
						;(r = r.slice()), r.splice(o, 1)
						break
					}
			}
			i.tween = r
		}
	}
	function Pc(t, n, e) {
		var r, i
		if (typeof e != 'function') throw new Error()
		return function () {
			var s = tt(this, t),
				o = s.tween
			if (o !== r) {
				i = (r = o).slice()
				for (var a = { name: n, value: e }, u = 0, f = i.length; u < f; ++u)
					if (i[u].name === n) {
						i[u] = a
						break
					}
				u === f && i.push(a)
			}
			s.tween = i
		}
	}
	function Lc(t, n) {
		var e = this._id
		if (((t += ''), arguments.length < 2)) {
			for (var r = B(this.node(), e).tween, i = 0, s = r.length, o; i < s; ++i)
				if ((o = r[i]).name === t) return o.value
			return null
		}
		return this.each((n == null ? Ic : Pc)(e, t, n))
	}
	function Je(t, n, e) {
		var r = t._id
		return (
			t.each(function () {
				var i = tt(this, r)
				;(i.value || (i.value = {}))[n] = e.apply(this, arguments)
			}),
			function (i) {
				return B(i, r).value[n]
			}
		)
	}
	function cs(t, n) {
		var e
		return (
			typeof n == 'number'
				? ut
				: n instanceof Ut
				? Fi
				: (e = Ut(n))
				? ((n = e), Fi)
				: Qf
		)(t, n)
	}
	function Oc(t) {
		return function () {
			this.removeAttribute(t)
		}
	}
	function Fc(t) {
		return function () {
			this.removeAttributeNS(t.space, t.local)
		}
	}
	function zc(t, n, e) {
		var r,
			i = e + '',
			s
		return function () {
			var o = this.getAttribute(t)
			return o === i ? null : o === r ? s : (s = n((r = o), e))
		}
	}
	function Dc(t, n, e) {
		var r,
			i = e + '',
			s
		return function () {
			var o = this.getAttributeNS(t.space, t.local)
			return o === i ? null : o === r ? s : (s = n((r = o), e))
		}
	}
	function qc(t, n, e) {
		var r, i, s
		return function () {
			var o,
				a = e(this),
				u
			return a == null
				? void this.removeAttribute(t)
				: ((o = this.getAttribute(t)),
				  (u = a + ''),
				  o === u
						? null
						: o === r && u === i
						? s
						: ((i = u), (s = n((r = o), a))))
		}
	}
	function Hc(t, n, e) {
		var r, i, s
		return function () {
			var o,
				a = e(this),
				u
			return a == null
				? void this.removeAttributeNS(t.space, t.local)
				: ((o = this.getAttributeNS(t.space, t.local)),
				  (u = a + ''),
				  o === u
						? null
						: o === r && u === i
						? s
						: ((i = u), (s = n((r = o), a))))
		}
	}
	function Xc(t, n) {
		var e = Xn(t),
			r = e === 'transform' ? el : cs
		return this.attrTween(
			t,
			typeof n == 'function'
				? (e.local ? Hc : qc)(e, r, Je(this, 'attr.' + t, n))
				: n == null
				? (e.local ? Fc : Oc)(e)
				: (e.local ? Dc : zc)(e, r, n)
		)
	}
	function Bc(t, n) {
		return function (e) {
			this.setAttribute(t, n.call(this, e))
		}
	}
	function Vc(t, n) {
		return function (e) {
			this.setAttributeNS(t.space, t.local, n.call(this, e))
		}
	}
	function Uc(t, n) {
		var e, r
		function i() {
			var s = n.apply(this, arguments)
			return s !== r && (e = (r = s) && Vc(t, s)), e
		}
		return (i._value = n), i
	}
	function Yc(t, n) {
		var e, r
		function i() {
			var s = n.apply(this, arguments)
			return s !== r && (e = (r = s) && Bc(t, s)), e
		}
		return (i._value = n), i
	}
	function Gc(t, n) {
		var e = 'attr.' + t
		if (arguments.length < 2) return (e = this.tween(e)) && e._value
		if (n == null) return this.tween(e, null)
		if (typeof n != 'function') throw new Error()
		var r = Xn(t)
		return this.tween(e, (r.local ? Uc : Yc)(r, n))
	}
	function Wc(t, n) {
		return function () {
			Ze(this, t).delay = +n.apply(this, arguments)
		}
	}
	function Kc(t, n) {
		return (
			(n = +n),
			function () {
				Ze(this, t).delay = n
			}
		)
	}
	function Zc(t) {
		var n = this._id
		return arguments.length
			? this.each((typeof t == 'function' ? Wc : Kc)(n, t))
			: B(this.node(), n).delay
	}
	function Jc(t, n) {
		return function () {
			tt(this, t).duration = +n.apply(this, arguments)
		}
	}
	function Qc(t, n) {
		return (
			(n = +n),
			function () {
				tt(this, t).duration = n
			}
		)
	}
	function jc(t) {
		var n = this._id
		return arguments.length
			? this.each((typeof t == 'function' ? Jc : Qc)(n, t))
			: B(this.node(), n).duration
	}
	function th(t, n) {
		if (typeof n != 'function') throw new Error()
		return function () {
			tt(this, t).ease = n
		}
	}
	function nh(t) {
		var n = this._id
		return arguments.length ? this.each(th(n, t)) : B(this.node(), n).ease
	}
	function eh(t) {
		typeof t != 'function' && (t = Ui(t))
		for (
			var n = this._groups, e = n.length, r = new Array(e), i = 0;
			i < e;
			++i
		)
			for (var s = n[i], o = s.length, a = (r[i] = []), u, f = 0; f < o; ++f)
				(u = s[f]) && t.call(u, u.__data__, f, s) && a.push(u)
		return new nt(r, this._parents, this._name, this._id)
	}
	function rh(t) {
		if (t._id !== this._id) throw new Error()
		for (
			var n = this._groups,
				e = t._groups,
				r = n.length,
				i = e.length,
				s = Math.min(r, i),
				o = new Array(r),
				a = 0;
			a < s;
			++a
		)
			for (
				var u = n[a],
					f = e[a],
					l = u.length,
					c = (o[a] = new Array(l)),
					h,
					d = 0;
				d < l;
				++d
			)
				(h = u[d] || f[d]) && (c[d] = h)
		for (; a < r; ++a) o[a] = n[a]
		return new nt(o, this._parents, this._name, this._id)
	}
	function ih(t) {
		return (t + '')
			.trim()
			.split(/^|\s+/)
			.every(function (n) {
				var e = n.indexOf('.')
				return e >= 0 && (n = n.slice(0, e)), !n || n === 'start'
			})
	}
	function sh(t, n, e) {
		var r,
			i,
			s = ih(n) ? Ze : tt
		return function () {
			var o = s(this, t),
				a = o.on
			a !== r && (i = (r = a).copy()).on(n, e), (o.on = i)
		}
	}
	function oh(t, n) {
		var e = this._id
		return arguments.length < 2
			? B(this.node(), e).on.on(t)
			: this.each(sh(e, t, n))
	}
	function ah(t) {
		return function () {
			var n = this.parentNode
			for (var e in this.__transition) if (+e !== t) return
			n && n.removeChild(this)
		}
	}
	function uh() {
		return this.on('end.remove', ah(this._id))
	}
	function fh(t) {
		var n = this._name,
			e = this._id
		typeof t != 'function' && (t = Ue(t))
		for (
			var r = this._groups, i = r.length, s = new Array(i), o = 0;
			o < i;
			++o
		)
			for (
				var a = r[o], u = a.length, f = (s[o] = new Array(u)), l, c, h = 0;
				h < u;
				++h
			)
				(l = a[h]) &&
					(c = t.call(l, l.__data__, h, a)) &&
					('__data__' in l && (c.__data__ = l.__data__),
					(f[h] = c),
					Jn(f[h], n, e, h, f, B(l, e)))
		return new nt(s, this._parents, n, e)
	}
	function lh(t) {
		var n = this._name,
			e = this._id
		typeof t != 'function' && (t = Vi(t))
		for (var r = this._groups, i = r.length, s = [], o = [], a = 0; a < i; ++a)
			for (var u = r[a], f = u.length, l, c = 0; c < f; ++c)
				if ((l = u[c])) {
					for (
						var h = t.call(l, l.__data__, c, u),
							d,
							g = B(l, e),
							p = 0,
							x = h.length;
						p < x;
						++p
					)
						(d = h[p]) && Jn(d, n, e, p, h, g)
					s.push(h), o.push(l)
				}
		return new nt(s, o, n, e)
	}
	var ch = Wt.prototype.constructor
	function hh() {
		return new ch(this._groups, this._parents)
	}
	function dh(t, n) {
		var e, r, i
		return function () {
			var s = mt(this, t),
				o = (this.style.removeProperty(t), mt(this, t))
			return s === o ? null : s === e && o === r ? i : (i = n((e = s), (r = o)))
		}
	}
	function hs(t) {
		return function () {
			this.style.removeProperty(t)
		}
	}
	function ph(t, n, e) {
		var r,
			i = e + '',
			s
		return function () {
			var o = mt(this, t)
			return o === i ? null : o === r ? s : (s = n((r = o), e))
		}
	}
	function gh(t, n, e) {
		var r, i, s
		return function () {
			var o = mt(this, t),
				a = e(this),
				u = a + ''
			return (
				a == null && (u = a = (this.style.removeProperty(t), mt(this, t))),
				o === u ? null : o === r && u === i ? s : ((i = u), (s = n((r = o), a)))
			)
		}
	}
	function xh(t, n) {
		var e,
			r,
			i,
			s = 'style.' + n,
			o = 'end.' + s,
			a
		return function () {
			var u = tt(this, t),
				f = u.on,
				l = u.value[s] == null ? a || (a = hs(n)) : void 0
			;(f !== e || i !== l) && (r = (e = f).copy()).on(o, (i = l)), (u.on = r)
		}
	}
	function _h(t, n, e) {
		var r = (t += '') == 'transform' ? nl : cs
		return n == null
			? this.styleTween(t, dh(t, r)).on('end.style.' + t, hs(t))
			: typeof n == 'function'
			? this.styleTween(t, gh(t, r, Je(this, 'style.' + t, n))).each(
					xh(this._id, t)
			  )
			: this.styleTween(t, ph(t, r, n), e).on('end.style.' + t, null)
	}
	function yh(t, n, e) {
		return function (r) {
			this.style.setProperty(t, n.call(this, r), e)
		}
	}
	function vh(t, n, e) {
		var r, i
		function s() {
			var o = n.apply(this, arguments)
			return o !== i && (r = (i = o) && yh(t, o, e)), r
		}
		return (s._value = n), s
	}
	function mh(t, n, e) {
		var r = 'style.' + (t += '')
		if (arguments.length < 2) return (r = this.tween(r)) && r._value
		if (n == null) return this.tween(r, null)
		if (typeof n != 'function') throw new Error()
		return this.tween(r, vh(t, n, e ?? ''))
	}
	function wh(t) {
		return function () {
			this.textContent = t
		}
	}
	function $h(t) {
		return function () {
			var n = t(this)
			this.textContent = n ?? ''
		}
	}
	function bh(t) {
		return this.tween(
			'text',
			typeof t == 'function'
				? $h(Je(this, 'text', t))
				: wh(t == null ? '' : t + '')
		)
	}
	function Nh(t) {
		return function (n) {
			this.textContent = t.call(this, n)
		}
	}
	function Ah(t) {
		var n, e
		function r() {
			var i = t.apply(this, arguments)
			return i !== e && (n = (e = i) && Nh(i)), n
		}
		return (r._value = t), r
	}
	function Ch(t) {
		var n = 'text'
		if (arguments.length < 1) return (n = this.tween(n)) && n._value
		if (t == null) return this.tween(n, null)
		if (typeof t != 'function') throw new Error()
		return this.tween(n, Ah(t))
	}
	function Mh() {
		for (
			var t = this._name,
				n = this._id,
				e = ds(),
				r = this._groups,
				i = r.length,
				s = 0;
			s < i;
			++s
		)
			for (var o = r[s], a = o.length, u, f = 0; f < a; ++f)
				if ((u = o[f])) {
					var l = B(u, n)
					Jn(u, t, e, f, o, {
						time: l.time + l.delay + l.duration,
						delay: 0,
						duration: l.duration,
						ease: l.ease
					})
				}
		return new nt(r, this._parents, t, e)
	}
	function Rh() {
		var t,
			n,
			e = this,
			r = e._id,
			i = e.size()
		return new Promise(function (s, o) {
			var a = { value: o },
				u = {
					value: function () {
						--i === 0 && s()
					}
				}
			e.each(function () {
				var f = tt(this, r),
					l = f.on
				l !== t &&
					((n = (t = l).copy()),
					n._.cancel.push(a),
					n._.interrupt.push(a),
					n._.end.push(u)),
					(f.on = n)
			})
		})
	}
	var Eh = 0
	function nt(t, n, e, r) {
		;(this._groups = t), (this._parents = n), (this._name = e), (this._id = r)
	}
	function ds() {
		return ++Eh
	}
	var $t = Wt.prototype
	nt.prototype = {
		constructor: nt,
		select: fh,
		selectAll: lh,
		filter: eh,
		merge: rh,
		selection: hh,
		transition: Mh,
		call: $t.call,
		nodes: $t.nodes,
		node: $t.node,
		size: $t.size,
		empty: $t.empty,
		each: $t.each,
		on: oh,
		attr: Xc,
		attrTween: Gc,
		style: _h,
		styleTween: mh,
		text: bh,
		textTween: Ch,
		remove: uh,
		tween: Lc,
		delay: Zc,
		duration: jc,
		ease: nh,
		end: Rh
	}
	var Qe = { time: null, delay: 0, duration: 250, ease: Yf }
	function kh(t, n) {
		for (var e; !(e = t.__transition) || !(e = e[n]); )
			if (!(t = t.parentNode)) return (Qe.time = Gn()), Qe
		return e
	}
	function Sh(t) {
		var n, e
		t instanceof nt
			? ((n = t._id), (t = t._name))
			: ((n = ds()), ((e = Qe).time = Gn()), (t = t == null ? null : t + ''))
		for (var r = this._groups, i = r.length, s = 0; s < i; ++s)
			for (var o = r[s], a = o.length, u, f = 0; f < a; ++f)
				(u = o[f]) && Jn(u, t, n, f, o, e || kh(u, n))
		return new nt(r, this._parents, t, n)
	}
	;(Wt.prototype.interrupt = Tc), (Wt.prototype.transition = Sh)
	function Qn() {
		this._ = null
	}
	function jn(t) {
		t.U = t.C = t.L = t.R = t.P = t.N = null
	}
	Qn.prototype = {
		constructor: Qn,
		insert: function (t, n) {
			var e, r, i
			if (t) {
				if (((n.P = t), (n.N = t.N), t.N && (t.N.P = n), (t.N = n), t.R)) {
					for (t = t.R; t.L; ) t = t.L
					t.L = n
				} else t.R = n
				e = t
			} else
				this._
					? ((t = ps(this._)),
					  (n.P = null),
					  (n.N = t),
					  (t.P = t.L = n),
					  (e = t))
					: ((n.P = n.N = null), (this._ = n), (e = null))
			for (n.L = n.R = null, n.U = e, n.C = !0, t = n; e && e.C; )
				(r = e.U),
					e === r.L
						? ((i = r.R),
						  i && i.C
								? ((e.C = i.C = !1), (r.C = !0), (t = r))
								: (t === e.R && (tn(this, e), (t = e), (e = t.U)),
								  (e.C = !1),
								  (r.C = !0),
								  nn(this, r)))
						: ((i = r.L),
						  i && i.C
								? ((e.C = i.C = !1), (r.C = !0), (t = r))
								: (t === e.L && (nn(this, e), (t = e), (e = t.U)),
								  (e.C = !1),
								  (r.C = !0),
								  tn(this, r))),
					(e = t.U)
			this._.C = !1
		},
		remove: function (t) {
			t.N && (t.N.P = t.P), t.P && (t.P.N = t.N), (t.N = t.P = null)
			var n = t.U,
				e,
				r = t.L,
				i = t.R,
				s,
				o
			if (
				(r ? (i ? (s = ps(i)) : (s = r)) : (s = i),
				n ? (n.L === t ? (n.L = s) : (n.R = s)) : (this._ = s),
				r && i
					? ((o = s.C),
					  (s.C = t.C),
					  (s.L = r),
					  (r.U = s),
					  s !== i
							? ((n = s.U),
							  (s.U = t.U),
							  (t = s.R),
							  (n.L = t),
							  (s.R = i),
							  (i.U = s))
							: ((s.U = n), (n = s), (t = s.R)))
					: ((o = t.C), (t = s)),
				t && (t.U = n),
				!o)
			) {
				if (t && t.C) {
					t.C = !1
					return
				}
				do {
					if (t === this._) break
					if (t === n.L) {
						if (
							((e = n.R),
							e.C && ((e.C = !1), (n.C = !0), tn(this, n), (e = n.R)),
							(e.L && e.L.C) || (e.R && e.R.C))
						) {
							;(!e.R || !e.R.C) &&
								((e.L.C = !1), (e.C = !0), nn(this, e), (e = n.R)),
								(e.C = n.C),
								(n.C = e.R.C = !1),
								tn(this, n),
								(t = this._)
							break
						}
					} else if (
						((e = n.L),
						e.C && ((e.C = !1), (n.C = !0), nn(this, n), (e = n.L)),
						(e.L && e.L.C) || (e.R && e.R.C))
					) {
						;(!e.L || !e.L.C) &&
							((e.R.C = !1), (e.C = !0), tn(this, e), (e = n.L)),
							(e.C = n.C),
							(n.C = e.L.C = !1),
							nn(this, n),
							(t = this._)
						break
					}
					;(e.C = !0), (t = n), (n = n.U)
				} while (!t.C)
				t && (t.C = !1)
			}
		}
	}
	function tn(t, n) {
		var e = n,
			r = n.R,
			i = e.U
		i ? (i.L === e ? (i.L = r) : (i.R = r)) : (t._ = r),
			(r.U = i),
			(e.U = r),
			(e.R = r.L),
			e.R && (e.R.U = e),
			(r.L = e)
	}
	function nn(t, n) {
		var e = n,
			r = n.L,
			i = e.U
		i ? (i.L === e ? (i.L = r) : (i.R = r)) : (t._ = r),
			(r.U = i),
			(e.U = r),
			(e.L = r.R),
			e.L && (e.L.U = e),
			(r.R = e)
	}
	function ps(t) {
		for (; t.L; ) t = t.L
		return t
	}
	function en(t, n, e, r) {
		var i = [null, null],
			s = E.push(i) - 1
		return (
			(i.left = t),
			(i.right = n),
			e && te(i, t, n, e),
			r && te(i, n, t, r),
			O[t.index].halfedges.push(s),
			O[n.index].halfedges.push(s),
			i
		)
	}
	function rn(t, n, e) {
		var r = [n, e]
		return (r.left = t), r
	}
	function te(t, n, e, r) {
		!t[0] && !t[1]
			? ((t[0] = r), (t.left = n), (t.right = e))
			: t.left === e
			? (t[1] = r)
			: (t[0] = r)
	}
	function Th(t, n, e, r, i) {
		var s = t[0],
			o = t[1],
			a = s[0],
			u = s[1],
			f = o[0],
			l = o[1],
			c = 0,
			h = 1,
			d = f - a,
			g = l - u,
			p
		if (((p = n - a), !(!d && p > 0))) {
			if (((p /= d), d < 0)) {
				if (p < c) return
				p < h && (h = p)
			} else if (d > 0) {
				if (p > h) return
				p > c && (c = p)
			}
			if (((p = r - a), !(!d && p < 0))) {
				if (((p /= d), d < 0)) {
					if (p > h) return
					p > c && (c = p)
				} else if (d > 0) {
					if (p < c) return
					p < h && (h = p)
				}
				if (((p = e - u), !(!g && p > 0))) {
					if (((p /= g), g < 0)) {
						if (p < c) return
						p < h && (h = p)
					} else if (g > 0) {
						if (p > h) return
						p > c && (c = p)
					}
					if (((p = i - u), !(!g && p < 0))) {
						if (((p /= g), g < 0)) {
							if (p > h) return
							p > c && (c = p)
						} else if (g > 0) {
							if (p < c) return
							p < h && (h = p)
						}
						return (
							(!(c > 0) && !(h < 1)) ||
								(c > 0 && (t[0] = [a + c * d, u + c * g]),
								h < 1 && (t[1] = [a + h * d, u + h * g])),
							!0
						)
					}
				}
			}
		}
	}
	function Ih(t, n, e, r, i) {
		var s = t[1]
		if (s) return !0
		var o = t[0],
			a = t.left,
			u = t.right,
			f = a[0],
			l = a[1],
			c = u[0],
			h = u[1],
			d = (f + c) / 2,
			g = (l + h) / 2,
			p,
			x
		if (h === l) {
			if (d < n || d >= r) return
			if (f > c) {
				if (!o) o = [d, e]
				else if (o[1] >= i) return
				s = [d, i]
			} else {
				if (!o) o = [d, i]
				else if (o[1] < e) return
				s = [d, e]
			}
		} else if (((p = (f - c) / (h - l)), (x = g - p * d), p < -1 || p > 1))
			if (f > c) {
				if (!o) o = [(e - x) / p, e]
				else if (o[1] >= i) return
				s = [(i - x) / p, i]
			} else {
				if (!o) o = [(i - x) / p, i]
				else if (o[1] < e) return
				s = [(e - x) / p, e]
			}
		else if (l < h) {
			if (!o) o = [n, p * n + x]
			else if (o[0] >= r) return
			s = [r, p * r + x]
		} else {
			if (!o) o = [r, p * r + x]
			else if (o[0] < n) return
			s = [n, p * n + x]
		}
		return (t[0] = o), (t[1] = s), !0
	}
	function Ph(t, n, e, r) {
		for (var i = E.length, s; i--; )
			(!Ih((s = E[i]), t, n, e, r) ||
				!Th(s, t, n, e, r) ||
				!(
					Math.abs(s[0][0] - s[1][0]) > A || Math.abs(s[0][1] - s[1][1]) > A
				)) &&
				delete E[i]
	}
	function Lh(t) {
		return (O[t.index] = { site: t, halfedges: [] })
	}
	function Oh(t, n) {
		var e = t.site,
			r = n.left,
			i = n.right
		return (
			e === i && ((i = r), (r = e)),
			i
				? Math.atan2(i[1] - r[1], i[0] - r[0])
				: (e === r ? ((r = n[1]), (i = n[0])) : ((r = n[0]), (i = n[1])),
				  Math.atan2(r[0] - i[0], i[1] - r[1]))
		)
	}
	function gs(t, n) {
		return n[+(n.left !== t.site)]
	}
	function Fh(t, n) {
		return n[+(n.left === t.site)]
	}
	function zh() {
		for (var t = 0, n = O.length, e, r, i, s; t < n; ++t)
			if ((e = O[t]) && (s = (r = e.halfedges).length)) {
				var o = new Array(s),
					a = new Array(s)
				for (i = 0; i < s; ++i) (o[i] = i), (a[i] = Oh(e, E[r[i]]))
				for (
					o.sort(function (u, f) {
						return a[f] - a[u]
					}),
						i = 0;
					i < s;
					++i
				)
					a[i] = r[o[i]]
				for (i = 0; i < s; ++i) r[i] = a[i]
			}
	}
	function Dh(t, n, e, r) {
		var i = O.length,
			s,
			o,
			a,
			u,
			f,
			l,
			c,
			h,
			d,
			g,
			p,
			x,
			$ = !0
		for (s = 0; s < i; ++s)
			if ((o = O[s])) {
				for (a = o.site, f = o.halfedges, u = f.length; u--; )
					E[f[u]] || f.splice(u, 1)
				for (u = 0, l = f.length; u < l; )
					(g = Fh(o, E[f[u]])),
						(p = g[0]),
						(x = g[1]),
						(c = gs(o, E[f[++u % l]])),
						(h = c[0]),
						(d = c[1]),
						(Math.abs(p - h) > A || Math.abs(x - d) > A) &&
							(f.splice(
								u,
								0,
								E.push(
									rn(
										a,
										g,
										Math.abs(p - t) < A && r - x > A
											? [t, Math.abs(h - t) < A ? d : r]
											: Math.abs(x - r) < A && e - p > A
											? [Math.abs(d - r) < A ? h : e, r]
											: Math.abs(p - e) < A && x - n > A
											? [e, Math.abs(h - e) < A ? d : n]
											: Math.abs(x - n) < A && p - t > A
											? [Math.abs(d - n) < A ? h : t, n]
											: null
									)
								) - 1
							),
							++l)
				l && ($ = !1)
			}
		if ($) {
			var v,
				_,
				b,
				N = 1 / 0
			for (s = 0, $ = null; s < i; ++s)
				(o = O[s]) &&
					((a = o.site),
					(v = a[0] - t),
					(_ = a[1] - n),
					(b = v * v + _ * _),
					b < N && ((N = b), ($ = o)))
			if ($) {
				var y = [t, n],
					m = [t, r],
					C = [e, r],
					q = [e, n]
				$.halfedges.push(
					E.push(rn((a = $.site), y, m)) - 1,
					E.push(rn(a, m, C)) - 1,
					E.push(rn(a, C, q)) - 1,
					E.push(rn(a, q, y)) - 1
				)
			}
		}
		for (s = 0; s < i; ++s) (o = O[s]) && (o.halfedges.length || delete O[s])
	}
	var xs = [],
		je
	function qh() {
		jn(this), (this.x = this.y = this.arc = this.site = this.cy = null)
	}
	function bt(t) {
		var n = t.P,
			e = t.N
		if (!(!n || !e)) {
			var r = n.site,
				i = t.site,
				s = e.site
			if (r !== s) {
				var o = i[0],
					a = i[1],
					u = r[0] - o,
					f = r[1] - a,
					l = s[0] - o,
					c = s[1] - a,
					h = 2 * (u * c - f * l)
				if (!(h >= -Uh)) {
					var d = u * u + f * f,
						g = l * l + c * c,
						p = (c * d - f * g) / h,
						x = (u * g - l * d) / h,
						$ = xs.pop() || new qh()
					;($.arc = t),
						($.site = i),
						($.x = p + o),
						($.y = ($.cy = x + a) + Math.sqrt(p * p + x * x)),
						(t.circle = $)
					for (var v = null, _ = sn._; _; )
						if ($.y < _.y || ($.y === _.y && $.x <= _.x))
							if (_.L) _ = _.L
							else {
								v = _.P
								break
							}
						else if (_.R) _ = _.R
						else {
							v = _
							break
						}
					sn.insert(v, $), v || (je = $)
				}
			}
		}
	}
	function Nt(t) {
		var n = t.circle
		n && (n.P || (je = n.N), sn.remove(n), xs.push(n), jn(n), (t.circle = null))
	}
	var _s = []
	function Hh() {
		jn(this), (this.edge = this.site = this.circle = null)
	}
	function ys(t) {
		var n = _s.pop() || new Hh()
		return (n.site = t), n
	}
	function tr(t) {
		Nt(t), At.remove(t), _s.push(t), jn(t)
	}
	function Xh(t) {
		var n = t.circle,
			e = n.x,
			r = n.cy,
			i = [e, r],
			s = t.P,
			o = t.N,
			a = [t]
		tr(t)
		for (
			var u = s;
			u.circle && Math.abs(e - u.circle.x) < A && Math.abs(r - u.circle.cy) < A;

		)
			(s = u.P), a.unshift(u), tr(u), (u = s)
		a.unshift(u), Nt(u)
		for (
			var f = o;
			f.circle && Math.abs(e - f.circle.x) < A && Math.abs(r - f.circle.cy) < A;

		)
			(o = f.N), a.push(f), tr(f), (f = o)
		a.push(f), Nt(f)
		var l = a.length,
			c
		for (c = 1; c < l; ++c)
			(f = a[c]), (u = a[c - 1]), te(f.edge, u.site, f.site, i)
		;(u = a[0]),
			(f = a[l - 1]),
			(f.edge = en(u.site, f.site, null, i)),
			bt(u),
			bt(f)
	}
	function Bh(t) {
		for (var n = t[0], e = t[1], r, i, s, o, a = At._; a; )
			if (((s = vs(a, e) - n), s > A)) a = a.L
			else if (((o = n - Vh(a, e)), o > A)) {
				if (!a.R) {
					r = a
					break
				}
				a = a.R
			} else {
				s > -A
					? ((r = a.P), (i = a))
					: o > -A
					? ((r = a), (i = a.N))
					: (r = i = a)
				break
			}
		Lh(t)
		var u = ys(t)
		if ((At.insert(r, u), !(!r && !i))) {
			if (r === i) {
				Nt(r),
					(i = ys(r.site)),
					At.insert(u, i),
					(u.edge = i.edge = en(r.site, u.site)),
					bt(r),
					bt(i)
				return
			}
			if (!i) {
				u.edge = en(r.site, u.site)
				return
			}
			Nt(r), Nt(i)
			var f = r.site,
				l = f[0],
				c = f[1],
				h = t[0] - l,
				d = t[1] - c,
				g = i.site,
				p = g[0] - l,
				x = g[1] - c,
				$ = 2 * (h * x - d * p),
				v = h * h + d * d,
				_ = p * p + x * x,
				b = [(x * v - d * _) / $ + l, (h * _ - p * v) / $ + c]
			te(i.edge, f, g, b),
				(u.edge = en(f, t, null, b)),
				(i.edge = en(t, g, null, b)),
				bt(r),
				bt(i)
		}
	}
	function vs(t, n) {
		var e = t.site,
			r = e[0],
			i = e[1],
			s = i - n
		if (!s) return r
		var o = t.P
		if (!o) return -1 / 0
		e = o.site
		var a = e[0],
			u = e[1],
			f = u - n
		if (!f) return a
		var l = a - r,
			c = 1 / s - 1 / f,
			h = l / f
		return c
			? (-h +
					Math.sqrt(
						h * h - 2 * c * ((l * l) / (-2 * f) - u + f / 2 + i - s / 2)
					)) /
					c +
					r
			: (r + a) / 2
	}
	function Vh(t, n) {
		var e = t.N
		if (e) return vs(e, n)
		var r = t.site
		return r[1] === n ? r[0] : 1 / 0
	}
	var A = 1e-6,
		Uh = 1e-12,
		At,
		O,
		sn,
		E
	function Yh(t, n, e) {
		return (t[0] - e[0]) * (n[1] - t[1]) - (t[0] - n[0]) * (e[1] - t[1])
	}
	function Gh(t, n) {
		return n[1] - t[1] || n[0] - t[0]
	}
	function ms(t, n) {
		var e = t.sort(Gh).pop(),
			r,
			i,
			s
		for (E = [], O = new Array(t.length), At = new Qn(), sn = new Qn(); ; )
			if (((s = je), e && (!s || e[1] < s.y || (e[1] === s.y && e[0] < s.x))))
				(e[0] !== r || e[1] !== i) && (Bh(e), (r = e[0]), (i = e[1])),
					(e = t.pop())
			else if (s) Xh(s.arc)
			else break
		if ((zh(), n)) {
			var o = +n[0][0],
				a = +n[0][1],
				u = +n[1][0],
				f = +n[1][1]
			Ph(o, a, u, f), Dh(o, a, u, f)
		}
		;(this.edges = E), (this.cells = O), (At = sn = E = O = null)
	}
	ms.prototype = {
		constructor: ms,
		polygons: function () {
			var t = this.edges
			return this.cells.map(function (n) {
				var e = n.halfedges.map(function (r) {
					return gs(n, t[r])
				})
				return (e.data = n.site.data), e
			})
		},
		triangles: function () {
			var t = [],
				n = this.edges
			return (
				this.cells.forEach(function (e, r) {
					if ((a = (s = e.halfedges).length))
						for (
							var i = e.site,
								s,
								o = -1,
								a,
								u,
								f = n[s[a - 1]],
								l = f.left === i ? f.right : f.left;
							++o < a;

						)
							(u = l),
								(f = n[s[o]]),
								(l = f.left === i ? f.right : f.left),
								u &&
									l &&
									r < u.index &&
									r < l.index &&
									Yh(i, u, l) < 0 &&
									t.push([i.data, u.data, l.data])
				}),
				t
			)
		},
		links: function () {
			return this.edges
				.filter(function (t) {
					return t.right
				})
				.map(function (t) {
					return { source: t.left.data, target: t.right.data }
				})
		},
		find: function (t, n, e) {
			for (
				var r = this, i, s = r._found || 0, o = r.cells.length, a;
				!(a = r.cells[s]);

			)
				if (++s >= o) return null
			var u = t - a.site[0],
				f = n - a.site[1],
				l = u * u + f * f
			do
				(a = r.cells[(i = s)]),
					(s = null),
					a.halfedges.forEach(function (c) {
						var h = r.edges[c],
							d = h.left
						if (!((d === a.site || !d) && !(d = h.right))) {
							var g = t - d[0],
								p = n - d[1],
								x = g * g + p * p
							x < l && ((l = x), (s = d.index))
						}
					})
			while (s !== null)
			return (r._found = i), e == null || l <= e * e ? a.site : null
		}
	}
	var Wh = { value: function () {} }
	function ws() {
		for (var t = 0, n = arguments.length, e = {}, r; t < n; ++t) {
			if (!(r = arguments[t] + '') || r in e || /[\s.]/.test(r))
				throw new Error('illegal type: ' + r)
			e[r] = []
		}
		return new ne(e)
	}
	function ne(t) {
		this._ = t
	}
	function Kh(t, n) {
		return t
			.trim()
			.split(/^|\s+/)
			.map(function (e) {
				var r = '',
					i = e.indexOf('.')
				if (
					(i >= 0 && ((r = e.slice(i + 1)), (e = e.slice(0, i))),
					e && !n.hasOwnProperty(e))
				)
					throw new Error('unknown type: ' + e)
				return { type: e, name: r }
			})
	}
	ne.prototype = ws.prototype = {
		constructor: ne,
		on: function (t, n) {
			var e = this._,
				r = Kh(t + '', e),
				i,
				s = -1,
				o = r.length
			if (arguments.length < 2) {
				for (; ++s < o; )
					if ((i = (t = r[s]).type) && (i = Zh(e[i], t.name))) return i
				return
			}
			if (n != null && typeof n != 'function')
				throw new Error('invalid callback: ' + n)
			for (; ++s < o; )
				if ((i = (t = r[s]).type)) e[i] = $s(e[i], t.name, n)
				else if (n == null) for (i in e) e[i] = $s(e[i], t.name, null)
			return this
		},
		copy: function () {
			var t = {},
				n = this._
			for (var e in n) t[e] = n[e].slice()
			return new ne(t)
		},
		call: function (t, n) {
			if ((i = arguments.length - 2) > 0)
				for (var e = new Array(i), r = 0, i, s; r < i; ++r)
					e[r] = arguments[r + 2]
			if (!this._.hasOwnProperty(t)) throw new Error('unknown type: ' + t)
			for (s = this._[t], r = 0, i = s.length; r < i; ++r)
				s[r].value.apply(n, e)
		},
		apply: function (t, n, e) {
			if (!this._.hasOwnProperty(t)) throw new Error('unknown type: ' + t)
			for (var r = this._[t], i = 0, s = r.length; i < s; ++i)
				r[i].value.apply(n, e)
		}
	}
	function Zh(t, n) {
		for (var e = 0, r = t.length, i; e < r; ++e)
			if ((i = t[e]).name === n) return i.value
	}
	function $s(t, n, e) {
		for (var r = 0, i = t.length; r < i; ++r)
			if (t[r].name === n) {
				;(t[r] = Wh), (t = t.slice(0, r).concat(t.slice(r + 1)))
				break
			}
		return e != null && t.push({ name: n, value: e }), t
	}
	function nr(t, n, e) {
		;(t.prototype = n.prototype = e), (e.constructor = t)
	}
	function bs(t, n) {
		var e = Object.create(t.prototype)
		for (var r in n) e[r] = n[r]
		return e
	}
	function on() {}
	var an = 0.7,
		ee = 1 / an,
		Ct = '\\s*([+-]?\\d+)\\s*',
		un = '\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*',
		Z = '\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*',
		Jh = /^#([0-9a-f]{3,8})$/,
		Qh = new RegExp('^rgb\\(' + [Ct, Ct, Ct] + '\\)$'),
		jh = new RegExp('^rgb\\(' + [Z, Z, Z] + '\\)$'),
		t0 = new RegExp('^rgba\\(' + [Ct, Ct, Ct, un] + '\\)$'),
		n0 = new RegExp('^rgba\\(' + [Z, Z, Z, un] + '\\)$'),
		e0 = new RegExp('^hsl\\(' + [un, Z, Z] + '\\)$'),
		r0 = new RegExp('^hsla\\(' + [un, Z, Z, un] + '\\)$'),
		Ns = {
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
		}
	nr(on, fn, {
		copy: function (t) {
			return Object.assign(new this.constructor(), this, t)
		},
		displayable: function () {
			return this.rgb().displayable()
		},
		hex: As,
		formatHex: As,
		formatHsl: i0,
		formatRgb: Cs,
		toString: Cs
	})
	function As() {
		return this.rgb().formatHex()
	}
	function i0() {
		return Ss(this).formatHsl()
	}
	function Cs() {
		return this.rgb().formatRgb()
	}
	function fn(t) {
		var n, e
		return (
			(t = (t + '').trim().toLowerCase()),
			(n = Jh.exec(t))
				? ((e = n[1].length),
				  (n = parseInt(n[1], 16)),
				  e === 6
						? Ms(n)
						: e === 3
						? new F(
								((n >> 8) & 15) | ((n >> 4) & 240),
								((n >> 4) & 15) | (n & 240),
								((n & 15) << 4) | (n & 15),
								1
						  )
						: e === 8
						? re(
								(n >> 24) & 255,
								(n >> 16) & 255,
								(n >> 8) & 255,
								(n & 255) / 255
						  )
						: e === 4
						? re(
								((n >> 12) & 15) | ((n >> 8) & 240),
								((n >> 8) & 15) | ((n >> 4) & 240),
								((n >> 4) & 15) | (n & 240),
								(((n & 15) << 4) | (n & 15)) / 255
						  )
						: null)
				: (n = Qh.exec(t))
				? new F(n[1], n[2], n[3], 1)
				: (n = jh.exec(t))
				? new F((n[1] * 255) / 100, (n[2] * 255) / 100, (n[3] * 255) / 100, 1)
				: (n = t0.exec(t))
				? re(n[1], n[2], n[3], n[4])
				: (n = n0.exec(t))
				? re((n[1] * 255) / 100, (n[2] * 255) / 100, (n[3] * 255) / 100, n[4])
				: (n = e0.exec(t))
				? ks(n[1], n[2] / 100, n[3] / 100, 1)
				: (n = r0.exec(t))
				? ks(n[1], n[2] / 100, n[3] / 100, n[4])
				: Ns.hasOwnProperty(t)
				? Ms(Ns[t])
				: t === 'transparent'
				? new F(NaN, NaN, NaN, 0)
				: null
		)
	}
	function Ms(t) {
		return new F((t >> 16) & 255, (t >> 8) & 255, t & 255, 1)
	}
	function re(t, n, e, r) {
		return r <= 0 && (t = n = e = NaN), new F(t, n, e, r)
	}
	function s0(t) {
		return (
			t instanceof on || (t = fn(t)),
			t ? ((t = t.rgb()), new F(t.r, t.g, t.b, t.opacity)) : new F()
		)
	}
	function er(t, n, e, r) {
		return arguments.length === 1 ? s0(t) : new F(t, n, e, r ?? 1)
	}
	function F(t, n, e, r) {
		;(this.r = +t), (this.g = +n), (this.b = +e), (this.opacity = +r)
	}
	nr(
		F,
		er,
		bs(on, {
			brighter: function (t) {
				return (
					(t = t == null ? ee : Math.pow(ee, t)),
					new F(this.r * t, this.g * t, this.b * t, this.opacity)
				)
			},
			darker: function (t) {
				return (
					(t = t == null ? an : Math.pow(an, t)),
					new F(this.r * t, this.g * t, this.b * t, this.opacity)
				)
			},
			rgb: function () {
				return this
			},
			displayable: function () {
				return (
					-0.5 <= this.r &&
					this.r < 255.5 &&
					-0.5 <= this.g &&
					this.g < 255.5 &&
					-0.5 <= this.b &&
					this.b < 255.5 &&
					0 <= this.opacity &&
					this.opacity <= 1
				)
			},
			hex: Rs,
			formatHex: Rs,
			formatRgb: Es,
			toString: Es
		})
	)
	function Rs() {
		return '#' + rr(this.r) + rr(this.g) + rr(this.b)
	}
	function Es() {
		var t = this.opacity
		return (
			(t = isNaN(t) ? 1 : Math.max(0, Math.min(1, t))),
			(t === 1 ? 'rgb(' : 'rgba(') +
				Math.max(0, Math.min(255, Math.round(this.r) || 0)) +
				', ' +
				Math.max(0, Math.min(255, Math.round(this.g) || 0)) +
				', ' +
				Math.max(0, Math.min(255, Math.round(this.b) || 0)) +
				(t === 1 ? ')' : ', ' + t + ')')
		)
	}
	function rr(t) {
		return (
			(t = Math.max(0, Math.min(255, Math.round(t) || 0))),
			(t < 16 ? '0' : '') + t.toString(16)
		)
	}
	function ks(t, n, e, r) {
		return (
			r <= 0
				? (t = n = e = NaN)
				: e <= 0 || e >= 1
				? (t = n = NaN)
				: n <= 0 && (t = NaN),
			new J(t, n, e, r)
		)
	}
	function Ss(t) {
		if (t instanceof J) return new J(t.h, t.s, t.l, t.opacity)
		if ((t instanceof on || (t = fn(t)), !t)) return new J()
		if (t instanceof J) return t
		t = t.rgb()
		var n = t.r / 255,
			e = t.g / 255,
			r = t.b / 255,
			i = Math.min(n, e, r),
			s = Math.max(n, e, r),
			o = NaN,
			a = s - i,
			u = (s + i) / 2
		return (
			a
				? (n === s
						? (o = (e - r) / a + (e < r) * 6)
						: e === s
						? (o = (r - n) / a + 2)
						: (o = (n - e) / a + 4),
				  (a /= u < 0.5 ? s + i : 2 - s - i),
				  (o *= 60))
				: (a = u > 0 && u < 1 ? 0 : o),
			new J(o, a, u, t.opacity)
		)
	}
	function o0(t, n, e, r) {
		return arguments.length === 1 ? Ss(t) : new J(t, n, e, r ?? 1)
	}
	function J(t, n, e, r) {
		;(this.h = +t), (this.s = +n), (this.l = +e), (this.opacity = +r)
	}
	nr(
		J,
		o0,
		bs(on, {
			brighter: function (t) {
				return (
					(t = t == null ? ee : Math.pow(ee, t)),
					new J(this.h, this.s, this.l * t, this.opacity)
				)
			},
			darker: function (t) {
				return (
					(t = t == null ? an : Math.pow(an, t)),
					new J(this.h, this.s, this.l * t, this.opacity)
				)
			},
			rgb: function () {
				var t = (this.h % 360) + (this.h < 0) * 360,
					n = isNaN(t) || isNaN(this.s) ? 0 : this.s,
					e = this.l,
					r = e + (e < 0.5 ? e : 1 - e) * n,
					i = 2 * e - r
				return new F(
					ir(t >= 240 ? t - 240 : t + 120, i, r),
					ir(t, i, r),
					ir(t < 120 ? t + 240 : t - 120, i, r),
					this.opacity
				)
			},
			displayable: function () {
				return (
					((0 <= this.s && this.s <= 1) || isNaN(this.s)) &&
					0 <= this.l &&
					this.l <= 1 &&
					0 <= this.opacity &&
					this.opacity <= 1
				)
			},
			formatHsl: function () {
				var t = this.opacity
				return (
					(t = isNaN(t) ? 1 : Math.max(0, Math.min(1, t))),
					(t === 1 ? 'hsl(' : 'hsla(') +
						(this.h || 0) +
						', ' +
						(this.s || 0) * 100 +
						'%, ' +
						(this.l || 0) * 100 +
						'%' +
						(t === 1 ? ')' : ', ' + t + ')')
				)
			}
		})
	)
	function ir(t, n, e) {
		return (
			(t < 60
				? n + ((e - n) * t) / 60
				: t < 180
				? e
				: t < 240
				? n + ((e - n) * (240 - t)) / 60
				: n) * 255
		)
	}
	function Ts(t) {
		return function () {
			return t
		}
	}
	function a0(t, n) {
		return function (e) {
			return t + e * n
		}
	}
	function u0(t, n, e) {
		return (
			(t = Math.pow(t, e)),
			(n = Math.pow(n, e) - t),
			(e = 1 / e),
			function (r) {
				return Math.pow(t + r * n, e)
			}
		)
	}
	function f0(t) {
		return (t = +t) == 1
			? Is
			: function (n, e) {
					return e - n ? u0(n, e, t) : Ts(isNaN(n) ? e : n)
			  }
	}
	function Is(t, n) {
		var e = n - t
		return e ? a0(t, e) : Ts(isNaN(t) ? n : t)
	}
	const Ps = (function t(n) {
		var e = f0(n)
		function r(i, s) {
			var o = e((i = er(i)).r, (s = er(s)).r),
				a = e(i.g, s.g),
				u = e(i.b, s.b),
				f = Is(i.opacity, s.opacity)
			return function (l) {
				return (
					(i.r = o(l)), (i.g = a(l)), (i.b = u(l)), (i.opacity = f(l)), i + ''
				)
			}
		}
		return (r.gamma = t), r
	})(1)
	function ft(t, n) {
		return (
			(t = +t),
			(n = +n),
			function (e) {
				return t * (1 - e) + n * e
			}
		)
	}
	var sr = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
		or = new RegExp(sr.source, 'g')
	function l0(t) {
		return function () {
			return t
		}
	}
	function c0(t) {
		return function (n) {
			return t(n) + ''
		}
	}
	function h0(t, n) {
		var e = (sr.lastIndex = or.lastIndex = 0),
			r,
			i,
			s,
			o = -1,
			a = [],
			u = []
		for (t = t + '', n = n + ''; (r = sr.exec(t)) && (i = or.exec(n)); )
			(s = i.index) > e &&
				((s = n.slice(e, s)), a[o] ? (a[o] += s) : (a[++o] = s)),
				(r = r[0]) === (i = i[0])
					? a[o]
						? (a[o] += i)
						: (a[++o] = i)
					: ((a[++o] = null), u.push({ i: o, x: ft(r, i) })),
				(e = or.lastIndex)
		return (
			e < n.length && ((s = n.slice(e)), a[o] ? (a[o] += s) : (a[++o] = s)),
			a.length < 2
				? u[0]
					? c0(u[0].x)
					: l0(n)
				: ((n = u.length),
				  function (f) {
						for (var l = 0, c; l < n; ++l) a[(c = u[l]).i] = c.x(f)
						return a.join('')
				  })
		)
	}
	var Ls = 180 / Math.PI,
		ar = {
			translateX: 0,
			translateY: 0,
			rotate: 0,
			skewX: 0,
			scaleX: 1,
			scaleY: 1
		}
	function Os(t, n, e, r, i, s) {
		var o, a, u
		return (
			(o = Math.sqrt(t * t + n * n)) && ((t /= o), (n /= o)),
			(u = t * e + n * r) && ((e -= t * u), (r -= n * u)),
			(a = Math.sqrt(e * e + r * r)) && ((e /= a), (r /= a), (u /= a)),
			t * r < n * e && ((t = -t), (n = -n), (u = -u), (o = -o)),
			{
				translateX: i,
				translateY: s,
				rotate: Math.atan2(n, t) * Ls,
				skewX: Math.atan(u) * Ls,
				scaleX: o,
				scaleY: a
			}
		)
	}
	var ln, ur, Fs, ie
	function d0(t) {
		return t === 'none'
			? ar
			: (ln ||
					((ln = document.createElement('DIV')),
					(ur = document.documentElement),
					(Fs = document.defaultView)),
			  (ln.style.transform = t),
			  (t = Fs.getComputedStyle(ur.appendChild(ln), null).getPropertyValue(
					'transform'
			  )),
			  ur.removeChild(ln),
			  (t = t.slice(7, -1).split(',')),
			  Os(+t[0], +t[1], +t[2], +t[3], +t[4], +t[5]))
	}
	function p0(t) {
		return t == null ||
			(ie || (ie = document.createElementNS('http://www.w3.org/2000/svg', 'g')),
			ie.setAttribute('transform', t),
			!(t = ie.transform.baseVal.consolidate()))
			? ar
			: ((t = t.matrix), Os(t.a, t.b, t.c, t.d, t.e, t.f))
	}
	function zs(t, n, e, r) {
		function i(f) {
			return f.length ? f.pop() + ' ' : ''
		}
		function s(f, l, c, h, d, g) {
			if (f !== c || l !== h) {
				var p = d.push('translate(', null, n, null, e)
				g.push({ i: p - 4, x: ft(f, c) }, { i: p - 2, x: ft(l, h) })
			} else (c || h) && d.push('translate(' + c + n + h + e)
		}
		function o(f, l, c, h) {
			f !== l
				? (f - l > 180 ? (l += 360) : l - f > 180 && (f += 360),
				  h.push({ i: c.push(i(c) + 'rotate(', null, r) - 2, x: ft(f, l) }))
				: l && c.push(i(c) + 'rotate(' + l + r)
		}
		function a(f, l, c, h) {
			f !== l
				? h.push({ i: c.push(i(c) + 'skewX(', null, r) - 2, x: ft(f, l) })
				: l && c.push(i(c) + 'skewX(' + l + r)
		}
		function u(f, l, c, h, d, g) {
			if (f !== c || l !== h) {
				var p = d.push(i(d) + 'scale(', null, ',', null, ')')
				g.push({ i: p - 4, x: ft(f, c) }, { i: p - 2, x: ft(l, h) })
			} else (c !== 1 || h !== 1) && d.push(i(d) + 'scale(' + c + ',' + h + ')')
		}
		return function (f, l) {
			var c = [],
				h = []
			return (
				(f = t(f)),
				(l = t(l)),
				s(f.translateX, f.translateY, l.translateX, l.translateY, c, h),
				o(f.rotate, l.rotate, c, h),
				a(f.skewX, l.skewX, c, h),
				u(f.scaleX, f.scaleY, l.scaleX, l.scaleY, c, h),
				(f = l = null),
				function (d) {
					for (var g = -1, p = h.length, x; ++g < p; ) c[(x = h[g]).i] = x.x(d)
					return c.join('')
				}
			)
		}
	}
	var g0 = zs(d0, 'px, ', 'px)', 'deg)'),
		x0 = zs(p0, ', ', ')', ')'),
		fr = 'http://www.w3.org/1999/xhtml'
	const Ds = {
		svg: 'http://www.w3.org/2000/svg',
		xhtml: fr,
		xlink: 'http://www.w3.org/1999/xlink',
		xml: 'http://www.w3.org/XML/1998/namespace',
		xmlns: 'http://www.w3.org/2000/xmlns/'
	}
	function se(t) {
		var n = (t += ''),
			e = n.indexOf(':')
		return (
			e >= 0 && (n = t.slice(0, e)) !== 'xmlns' && (t = t.slice(e + 1)),
			Ds.hasOwnProperty(n) ? { space: Ds[n], local: t } : t
		)
	}
	function _0(t) {
		return function () {
			var n = this.ownerDocument,
				e = this.namespaceURI
			return e === fr && n.documentElement.namespaceURI === fr
				? n.createElement(t)
				: n.createElementNS(e, t)
		}
	}
	function y0(t) {
		return function () {
			return this.ownerDocument.createElementNS(t.space, t.local)
		}
	}
	function qs(t) {
		var n = se(t)
		return (n.local ? y0 : _0)(n)
	}
	function v0() {}
	function lr(t) {
		return t == null
			? v0
			: function () {
					return this.querySelector(t)
			  }
	}
	function m0(t) {
		typeof t != 'function' && (t = lr(t))
		for (
			var n = this._groups, e = n.length, r = new Array(e), i = 0;
			i < e;
			++i
		)
			for (
				var s = n[i], o = s.length, a = (r[i] = new Array(o)), u, f, l = 0;
				l < o;
				++l
			)
				(u = s[l]) &&
					(f = t.call(u, u.__data__, l, s)) &&
					('__data__' in u && (f.__data__ = u.__data__), (a[l] = f))
		return new V(r, this._parents)
	}
	function w0() {
		return []
	}
	function Hs(t) {
		return t == null
			? w0
			: function () {
					return this.querySelectorAll(t)
			  }
	}
	function $0(t) {
		typeof t != 'function' && (t = Hs(t))
		for (var n = this._groups, e = n.length, r = [], i = [], s = 0; s < e; ++s)
			for (var o = n[s], a = o.length, u, f = 0; f < a; ++f)
				(u = o[f]) && (r.push(t.call(u, u.__data__, f, o)), i.push(u))
		return new V(r, i)
	}
	function Xs(t) {
		return function () {
			return this.matches(t)
		}
	}
	function b0(t) {
		typeof t != 'function' && (t = Xs(t))
		for (
			var n = this._groups, e = n.length, r = new Array(e), i = 0;
			i < e;
			++i
		)
			for (var s = n[i], o = s.length, a = (r[i] = []), u, f = 0; f < o; ++f)
				(u = s[f]) && t.call(u, u.__data__, f, s) && a.push(u)
		return new V(r, this._parents)
	}
	function Bs(t) {
		return new Array(t.length)
	}
	function N0() {
		return new V(this._enter || this._groups.map(Bs), this._parents)
	}
	function oe(t, n) {
		;(this.ownerDocument = t.ownerDocument),
			(this.namespaceURI = t.namespaceURI),
			(this._next = null),
			(this._parent = t),
			(this.__data__ = n)
	}
	oe.prototype = {
		constructor: oe,
		appendChild: function (t) {
			return this._parent.insertBefore(t, this._next)
		},
		insertBefore: function (t, n) {
			return this._parent.insertBefore(t, n)
		},
		querySelector: function (t) {
			return this._parent.querySelector(t)
		},
		querySelectorAll: function (t) {
			return this._parent.querySelectorAll(t)
		}
	}
	function A0(t) {
		return function () {
			return t
		}
	}
	var Vs = '$'
	function C0(t, n, e, r, i, s) {
		for (var o = 0, a, u = n.length, f = s.length; o < f; ++o)
			(a = n[o]) ? ((a.__data__ = s[o]), (r[o] = a)) : (e[o] = new oe(t, s[o]))
		for (; o < u; ++o) (a = n[o]) && (i[o] = a)
	}
	function M0(t, n, e, r, i, s, o) {
		var a,
			u,
			f = {},
			l = n.length,
			c = s.length,
			h = new Array(l),
			d
		for (a = 0; a < l; ++a)
			(u = n[a]) &&
				((h[a] = d = Vs + o.call(u, u.__data__, a, n)),
				d in f ? (i[a] = u) : (f[d] = u))
		for (a = 0; a < c; ++a)
			(d = Vs + o.call(t, s[a], a, s)),
				(u = f[d])
					? ((r[a] = u), (u.__data__ = s[a]), (f[d] = null))
					: (e[a] = new oe(t, s[a]))
		for (a = 0; a < l; ++a) (u = n[a]) && f[h[a]] === u && (i[a] = u)
	}
	function R0(t, n) {
		if (!t)
			return (
				(d = new Array(this.size())),
				(f = -1),
				this.each(function (y) {
					d[++f] = y
				}),
				d
			)
		var e = n ? M0 : C0,
			r = this._parents,
			i = this._groups
		typeof t != 'function' && (t = A0(t))
		for (
			var s = i.length,
				o = new Array(s),
				a = new Array(s),
				u = new Array(s),
				f = 0;
			f < s;
			++f
		) {
			var l = r[f],
				c = i[f],
				h = c.length,
				d = t.call(l, l && l.__data__, f, r),
				g = d.length,
				p = (a[f] = new Array(g)),
				x = (o[f] = new Array(g)),
				$ = (u[f] = new Array(h))
			e(l, c, p, x, $, d, n)
			for (var v = 0, _ = 0, b, N; v < g; ++v)
				if ((b = p[v])) {
					for (v >= _ && (_ = v + 1); !(N = x[_]) && ++_ < g; );
					b._next = N || null
				}
		}
		return (o = new V(o, r)), (o._enter = a), (o._exit = u), o
	}
	function E0() {
		return new V(this._exit || this._groups.map(Bs), this._parents)
	}
	function k0(t, n, e) {
		var r = this.enter(),
			i = this,
			s = this.exit()
		return (
			(r = typeof t == 'function' ? t(r) : r.append(t + '')),
			n != null && (i = n(i)),
			e == null ? s.remove() : e(s),
			r && i ? r.merge(i).order() : i
		)
	}
	function S0(t) {
		for (
			var n = this._groups,
				e = t._groups,
				r = n.length,
				i = e.length,
				s = Math.min(r, i),
				o = new Array(r),
				a = 0;
			a < s;
			++a
		)
			for (
				var u = n[a],
					f = e[a],
					l = u.length,
					c = (o[a] = new Array(l)),
					h,
					d = 0;
				d < l;
				++d
			)
				(h = u[d] || f[d]) && (c[d] = h)
		for (; a < r; ++a) o[a] = n[a]
		return new V(o, this._parents)
	}
	function T0() {
		for (var t = this._groups, n = -1, e = t.length; ++n < e; )
			for (var r = t[n], i = r.length - 1, s = r[i], o; --i >= 0; )
				(o = r[i]) &&
					(s &&
						o.compareDocumentPosition(s) ^ 4 &&
						s.parentNode.insertBefore(o, s),
					(s = o))
		return this
	}
	function I0(t) {
		t || (t = P0)
		function n(c, h) {
			return c && h ? t(c.__data__, h.__data__) : !c - !h
		}
		for (
			var e = this._groups, r = e.length, i = new Array(r), s = 0;
			s < r;
			++s
		) {
			for (
				var o = e[s], a = o.length, u = (i[s] = new Array(a)), f, l = 0;
				l < a;
				++l
			)
				(f = o[l]) && (u[l] = f)
			u.sort(n)
		}
		return new V(i, this._parents).order()
	}
	function P0(t, n) {
		return t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN
	}
	function L0() {
		var t = arguments[0]
		return (arguments[0] = this), t.apply(null, arguments), this
	}
	function O0() {
		var t = new Array(this.size()),
			n = -1
		return (
			this.each(function () {
				t[++n] = this
			}),
			t
		)
	}
	function F0() {
		for (var t = this._groups, n = 0, e = t.length; n < e; ++n)
			for (var r = t[n], i = 0, s = r.length; i < s; ++i) {
				var o = r[i]
				if (o) return o
			}
		return null
	}
	function z0() {
		var t = 0
		return (
			this.each(function () {
				++t
			}),
			t
		)
	}
	function D0() {
		return !this.node()
	}
	function q0(t) {
		for (var n = this._groups, e = 0, r = n.length; e < r; ++e)
			for (var i = n[e], s = 0, o = i.length, a; s < o; ++s)
				(a = i[s]) && t.call(a, a.__data__, s, i)
		return this
	}
	function H0(t) {
		return function () {
			this.removeAttribute(t)
		}
	}
	function X0(t) {
		return function () {
			this.removeAttributeNS(t.space, t.local)
		}
	}
	function B0(t, n) {
		return function () {
			this.setAttribute(t, n)
		}
	}
	function V0(t, n) {
		return function () {
			this.setAttributeNS(t.space, t.local, n)
		}
	}
	function U0(t, n) {
		return function () {
			var e = n.apply(this, arguments)
			e == null ? this.removeAttribute(t) : this.setAttribute(t, e)
		}
	}
	function Y0(t, n) {
		return function () {
			var e = n.apply(this, arguments)
			e == null
				? this.removeAttributeNS(t.space, t.local)
				: this.setAttributeNS(t.space, t.local, e)
		}
	}
	function G0(t, n) {
		var e = se(t)
		if (arguments.length < 2) {
			var r = this.node()
			return e.local ? r.getAttributeNS(e.space, e.local) : r.getAttribute(e)
		}
		return this.each(
			(n == null
				? e.local
					? X0
					: H0
				: typeof n == 'function'
				? e.local
					? Y0
					: U0
				: e.local
				? V0
				: B0)(e, n)
		)
	}
	function Us(t) {
		return (
			(t.ownerDocument && t.ownerDocument.defaultView) ||
			(t.document && t) ||
			t.defaultView
		)
	}
	function W0(t) {
		return function () {
			this.style.removeProperty(t)
		}
	}
	function K0(t, n, e) {
		return function () {
			this.style.setProperty(t, n, e)
		}
	}
	function Z0(t, n, e) {
		return function () {
			var r = n.apply(this, arguments)
			r == null ? this.style.removeProperty(t) : this.style.setProperty(t, r, e)
		}
	}
	function J0(t, n, e) {
		return arguments.length > 1
			? this.each(
					(n == null ? W0 : typeof n == 'function' ? Z0 : K0)(t, n, e ?? '')
			  )
			: Mt(this.node(), t)
	}
	function Mt(t, n) {
		return (
			t.style.getPropertyValue(n) ||
			Us(t).getComputedStyle(t, null).getPropertyValue(n)
		)
	}
	function Q0(t) {
		return function () {
			delete this[t]
		}
	}
	function j0(t, n) {
		return function () {
			this[t] = n
		}
	}
	function td(t, n) {
		return function () {
			var e = n.apply(this, arguments)
			e == null ? delete this[t] : (this[t] = e)
		}
	}
	function nd(t, n) {
		return arguments.length > 1
			? this.each((n == null ? Q0 : typeof n == 'function' ? td : j0)(t, n))
			: this.node()[t]
	}
	function Ys(t) {
		return t.trim().split(/^|\s+/)
	}
	function cr(t) {
		return t.classList || new Gs(t)
	}
	function Gs(t) {
		;(this._node = t), (this._names = Ys(t.getAttribute('class') || ''))
	}
	Gs.prototype = {
		add: function (t) {
			var n = this._names.indexOf(t)
			n < 0 &&
				(this._names.push(t),
				this._node.setAttribute('class', this._names.join(' ')))
		},
		remove: function (t) {
			var n = this._names.indexOf(t)
			n >= 0 &&
				(this._names.splice(n, 1),
				this._node.setAttribute('class', this._names.join(' ')))
		},
		contains: function (t) {
			return this._names.indexOf(t) >= 0
		}
	}
	function Ws(t, n) {
		for (var e = cr(t), r = -1, i = n.length; ++r < i; ) e.add(n[r])
	}
	function Ks(t, n) {
		for (var e = cr(t), r = -1, i = n.length; ++r < i; ) e.remove(n[r])
	}
	function ed(t) {
		return function () {
			Ws(this, t)
		}
	}
	function rd(t) {
		return function () {
			Ks(this, t)
		}
	}
	function id(t, n) {
		return function () {
			;(n.apply(this, arguments) ? Ws : Ks)(this, t)
		}
	}
	function sd(t, n) {
		var e = Ys(t + '')
		if (arguments.length < 2) {
			for (var r = cr(this.node()), i = -1, s = e.length; ++i < s; )
				if (!r.contains(e[i])) return !1
			return !0
		}
		return this.each((typeof n == 'function' ? id : n ? ed : rd)(e, n))
	}
	function od() {
		this.textContent = ''
	}
	function ad(t) {
		return function () {
			this.textContent = t
		}
	}
	function ud(t) {
		return function () {
			var n = t.apply(this, arguments)
			this.textContent = n ?? ''
		}
	}
	function fd(t) {
		return arguments.length
			? this.each(t == null ? od : (typeof t == 'function' ? ud : ad)(t))
			: this.node().textContent
	}
	function ld() {
		this.innerHTML = ''
	}
	function cd(t) {
		return function () {
			this.innerHTML = t
		}
	}
	function hd(t) {
		return function () {
			var n = t.apply(this, arguments)
			this.innerHTML = n ?? ''
		}
	}
	function dd(t) {
		return arguments.length
			? this.each(t == null ? ld : (typeof t == 'function' ? hd : cd)(t))
			: this.node().innerHTML
	}
	function pd() {
		this.nextSibling && this.parentNode.appendChild(this)
	}
	function gd() {
		return this.each(pd)
	}
	function xd() {
		this.previousSibling &&
			this.parentNode.insertBefore(this, this.parentNode.firstChild)
	}
	function _d() {
		return this.each(xd)
	}
	function yd(t) {
		var n = typeof t == 'function' ? t : qs(t)
		return this.select(function () {
			return this.appendChild(n.apply(this, arguments))
		})
	}
	function vd() {
		return null
	}
	function md(t, n) {
		var e = typeof t == 'function' ? t : qs(t),
			r = n == null ? vd : typeof n == 'function' ? n : lr(n)
		return this.select(function () {
			return this.insertBefore(
				e.apply(this, arguments),
				r.apply(this, arguments) || null
			)
		})
	}
	function wd() {
		var t = this.parentNode
		t && t.removeChild(this)
	}
	function $d() {
		return this.each(wd)
	}
	function bd() {
		var t = this.cloneNode(!1),
			n = this.parentNode
		return n ? n.insertBefore(t, this.nextSibling) : t
	}
	function Nd() {
		var t = this.cloneNode(!0),
			n = this.parentNode
		return n ? n.insertBefore(t, this.nextSibling) : t
	}
	function Ad(t) {
		return this.select(t ? Nd : bd)
	}
	function Cd(t) {
		return arguments.length
			? this.property('__data__', t)
			: this.node().__data__
	}
	var Zs = {}
	if (typeof document < 'u') {
		var Md = document.documentElement
		'onmouseenter' in Md ||
			(Zs = { mouseenter: 'mouseover', mouseleave: 'mouseout' })
	}
	function Rd(t, n, e) {
		return (
			(t = Js(t, n, e)),
			function (r) {
				var i = r.relatedTarget
				;(!i || (i !== this && !(i.compareDocumentPosition(this) & 8))) &&
					t.call(this, r)
			}
		)
	}
	function Js(t, n, e) {
		return function (r) {
			try {
				t.call(this, this.__data__, n, e)
			} finally {
			}
		}
	}
	function Ed(t) {
		return t
			.trim()
			.split(/^|\s+/)
			.map(function (n) {
				var e = '',
					r = n.indexOf('.')
				return (
					r >= 0 && ((e = n.slice(r + 1)), (n = n.slice(0, r))),
					{ type: n, name: e }
				)
			})
	}
	function kd(t) {
		return function () {
			var n = this.__on
			if (n) {
				for (var e = 0, r = -1, i = n.length, s; e < i; ++e)
					(s = n[e]),
						(!t.type || s.type === t.type) && s.name === t.name
							? this.removeEventListener(s.type, s.listener, s.capture)
							: (n[++r] = s)
				++r ? (n.length = r) : delete this.__on
			}
		}
	}
	function Sd(t, n, e) {
		var r = Zs.hasOwnProperty(t.type) ? Rd : Js
		return function (i, s, o) {
			var a = this.__on,
				u,
				f = r(n, s, o)
			if (a) {
				for (var l = 0, c = a.length; l < c; ++l)
					if ((u = a[l]).type === t.type && u.name === t.name) {
						this.removeEventListener(u.type, u.listener, u.capture),
							this.addEventListener(u.type, (u.listener = f), (u.capture = e)),
							(u.value = n)
						return
					}
			}
			this.addEventListener(t.type, f, e),
				(u = { type: t.type, name: t.name, value: n, listener: f, capture: e }),
				a ? a.push(u) : (this.__on = [u])
		}
	}
	function Td(t, n, e) {
		var r = Ed(t + ''),
			i,
			s = r.length,
			o
		if (arguments.length < 2) {
			var a = this.node().__on
			if (a) {
				for (var u = 0, f = a.length, l; u < f; ++u)
					for (i = 0, l = a[u]; i < s; ++i)
						if ((o = r[i]).type === l.type && o.name === l.name) return l.value
			}
			return
		}
		for (a = n ? Sd : kd, e == null && (e = !1), i = 0; i < s; ++i)
			this.each(a(r[i], n, e))
		return this
	}
	function Qs(t, n, e) {
		var r = Us(t),
			i = r.CustomEvent
		typeof i == 'function'
			? (i = new i(n, e))
			: ((i = r.document.createEvent('Event')),
			  e
					? (i.initEvent(n, e.bubbles, e.cancelable), (i.detail = e.detail))
					: i.initEvent(n, !1, !1)),
			t.dispatchEvent(i)
	}
	function Id(t, n) {
		return function () {
			return Qs(this, t, n)
		}
	}
	function Pd(t, n) {
		return function () {
			return Qs(this, t, n.apply(this, arguments))
		}
	}
	function Ld(t, n) {
		return this.each((typeof n == 'function' ? Pd : Id)(t, n))
	}
	var Od = [null]
	function V(t, n) {
		;(this._groups = t), (this._parents = n)
	}
	function cn() {
		return new V([[document.documentElement]], Od)
	}
	V.prototype = cn.prototype = {
		constructor: V,
		select: m0,
		selectAll: $0,
		filter: b0,
		data: R0,
		enter: N0,
		exit: E0,
		join: k0,
		merge: S0,
		order: T0,
		sort: I0,
		call: L0,
		nodes: O0,
		node: F0,
		size: z0,
		empty: D0,
		each: q0,
		attr: G0,
		style: J0,
		property: nd,
		classed: sd,
		text: fd,
		html: dd,
		raise: gd,
		lower: _d,
		append: yd,
		insert: md,
		remove: $d,
		clone: Ad,
		datum: Cd,
		on: Td,
		dispatch: Ld
	}
	var Rt = 0,
		hn = 0,
		dn = 0,
		js = 1e3,
		ae,
		pn,
		ue = 0,
		dt = 0,
		fe = 0,
		gn = typeof performance == 'object' && performance.now ? performance : Date,
		to =
			typeof window == 'object' && window.requestAnimationFrame
				? window.requestAnimationFrame.bind(window)
				: function (t) {
						setTimeout(t, 17)
				  }
	function le() {
		return dt || (to(Fd), (dt = gn.now() + fe))
	}
	function Fd() {
		dt = 0
	}
	function ce() {
		this._call = this._time = this._next = null
	}
	ce.prototype = no.prototype = {
		constructor: ce,
		restart: function (t, n, e) {
			if (typeof t != 'function')
				throw new TypeError('callback is not a function')
			;(e = (e == null ? le() : +e) + (n == null ? 0 : +n)),
				!this._next &&
					pn !== this &&
					(pn ? (pn._next = this) : (ae = this), (pn = this)),
				(this._call = t),
				(this._time = e),
				hr()
		},
		stop: function () {
			this._call && ((this._call = null), (this._time = 1 / 0), hr())
		}
	}
	function no(t, n, e) {
		var r = new ce()
		return r.restart(t, n, e), r
	}
	function zd() {
		le(), ++Rt
		for (var t = ae, n; t; )
			(n = dt - t._time) >= 0 && t._call.call(null, n), (t = t._next)
		--Rt
	}
	function eo() {
		;(dt = (ue = gn.now()) + fe), (Rt = hn = 0)
		try {
			zd()
		} finally {
			;(Rt = 0), qd(), (dt = 0)
		}
	}
	function Dd() {
		var t = gn.now(),
			n = t - ue
		n > js && ((fe -= n), (ue = t))
	}
	function qd() {
		for (var t, n = ae, e, r = 1 / 0; n; )
			n._call
				? (r > n._time && (r = n._time), (t = n), (n = n._next))
				: ((e = n._next), (n._next = null), (n = t ? (t._next = e) : (ae = e)))
		;(pn = t), hr(r)
	}
	function hr(t) {
		if (!Rt) {
			hn && (hn = clearTimeout(hn))
			var n = t - dt
			n > 24
				? (t < 1 / 0 && (hn = setTimeout(eo, t - gn.now() - fe)),
				  dn && (dn = clearInterval(dn)))
				: (dn || ((ue = gn.now()), (dn = setInterval(Dd, js))),
				  (Rt = 1),
				  to(eo))
		}
	}
	function ro(t, n, e) {
		var r = new ce()
		return (
			(n = n == null ? 0 : +n),
			r.restart(
				function (i) {
					r.stop(), t(i + n)
				},
				n,
				e
			),
			r
		)
	}
	var Hd = ws('start', 'end', 'cancel', 'interrupt'),
		Xd = [],
		io = 0,
		so = 1,
		dr = 2,
		he = 3,
		oo = 4,
		pr = 5,
		de = 6
	function pe(t, n, e, r, i, s) {
		var o = t.__transition
		if (!o) t.__transition = {}
		else if (e in o) return
		Bd(t, e, {
			name: n,
			index: r,
			group: i,
			on: Hd,
			tween: Xd,
			time: s.time,
			delay: s.delay,
			duration: s.duration,
			ease: s.ease,
			timer: null,
			state: io
		})
	}
	function gr(t, n) {
		var e = U(t, n)
		if (e.state > io) throw new Error('too late; already scheduled')
		return e
	}
	function et(t, n) {
		var e = U(t, n)
		if (e.state > he) throw new Error('too late; already running')
		return e
	}
	function U(t, n) {
		var e = t.__transition
		if (!e || !(e = e[n])) throw new Error('transition not found')
		return e
	}
	function Bd(t, n, e) {
		var r = t.__transition,
			i
		;(r[n] = e), (e.timer = no(s, 0, e.time))
		function s(f) {
			;(e.state = so),
				e.timer.restart(o, e.delay, e.time),
				e.delay <= f && o(f - e.delay)
		}
		function o(f) {
			var l, c, h, d
			if (e.state !== so) return u()
			for (l in r)
				if (((d = r[l]), d.name === e.name)) {
					if (d.state === he) return ro(o)
					d.state === oo
						? ((d.state = de),
						  d.timer.stop(),
						  d.on.call('interrupt', t, t.__data__, d.index, d.group),
						  delete r[l])
						: +l < n &&
						  ((d.state = de),
						  d.timer.stop(),
						  d.on.call('cancel', t, t.__data__, d.index, d.group),
						  delete r[l])
				}
			if (
				(ro(function () {
					e.state === he &&
						((e.state = oo), e.timer.restart(a, e.delay, e.time), a(f))
				}),
				(e.state = dr),
				e.on.call('start', t, t.__data__, e.index, e.group),
				e.state === dr)
			) {
				for (
					e.state = he, i = new Array((h = e.tween.length)), l = 0, c = -1;
					l < h;
					++l
				)
					(d = e.tween[l].value.call(t, t.__data__, e.index, e.group)) &&
						(i[++c] = d)
				i.length = c + 1
			}
		}
		function a(f) {
			for (
				var l =
						f < e.duration
							? e.ease.call(null, f / e.duration)
							: (e.timer.restart(u), (e.state = pr), 1),
					c = -1,
					h = i.length;
				++c < h;

			)
				i[c].call(t, l)
			e.state === pr && (e.on.call('end', t, t.__data__, e.index, e.group), u())
		}
		function u() {
			;(e.state = de), e.timer.stop(), delete r[n]
			for (var f in r) return
			delete t.__transition
		}
	}
	function Vd(t, n) {
		var e = t.__transition,
			r,
			i,
			s = !0,
			o
		if (e) {
			n = n == null ? null : n + ''
			for (o in e) {
				if ((r = e[o]).name !== n) {
					s = !1
					continue
				}
				;(i = r.state > dr && r.state < pr),
					(r.state = de),
					r.timer.stop(),
					r.on.call(
						i ? 'interrupt' : 'cancel',
						t,
						t.__data__,
						r.index,
						r.group
					),
					delete e[o]
			}
			s && delete t.__transition
		}
	}
	function Ud(t) {
		return this.each(function () {
			Vd(this, t)
		})
	}
	function Yd(t, n) {
		var e, r
		return function () {
			var i = et(this, t),
				s = i.tween
			if (s !== e) {
				r = e = s
				for (var o = 0, a = r.length; o < a; ++o)
					if (r[o].name === n) {
						;(r = r.slice()), r.splice(o, 1)
						break
					}
			}
			i.tween = r
		}
	}
	function Gd(t, n, e) {
		var r, i
		if (typeof e != 'function') throw new Error()
		return function () {
			var s = et(this, t),
				o = s.tween
			if (o !== r) {
				i = (r = o).slice()
				for (var a = { name: n, value: e }, u = 0, f = i.length; u < f; ++u)
					if (i[u].name === n) {
						i[u] = a
						break
					}
				u === f && i.push(a)
			}
			s.tween = i
		}
	}
	function Wd(t, n) {
		var e = this._id
		if (((t += ''), arguments.length < 2)) {
			for (var r = U(this.node(), e).tween, i = 0, s = r.length, o; i < s; ++i)
				if ((o = r[i]).name === t) return o.value
			return null
		}
		return this.each((n == null ? Yd : Gd)(e, t, n))
	}
	function xr(t, n, e) {
		var r = t._id
		return (
			t.each(function () {
				var i = et(this, r)
				;(i.value || (i.value = {}))[n] = e.apply(this, arguments)
			}),
			function (i) {
				return U(i, r).value[n]
			}
		)
	}
	function ao(t, n) {
		var e
		return (
			typeof n == 'number'
				? ft
				: n instanceof fn
				? Ps
				: (e = fn(n))
				? ((n = e), Ps)
				: h0
		)(t, n)
	}
	function Kd(t) {
		return function () {
			this.removeAttribute(t)
		}
	}
	function Zd(t) {
		return function () {
			this.removeAttributeNS(t.space, t.local)
		}
	}
	function Jd(t, n, e) {
		var r,
			i = e + '',
			s
		return function () {
			var o = this.getAttribute(t)
			return o === i ? null : o === r ? s : (s = n((r = o), e))
		}
	}
	function Qd(t, n, e) {
		var r,
			i = e + '',
			s
		return function () {
			var o = this.getAttributeNS(t.space, t.local)
			return o === i ? null : o === r ? s : (s = n((r = o), e))
		}
	}
	function jd(t, n, e) {
		var r, i, s
		return function () {
			var o,
				a = e(this),
				u
			return a == null
				? void this.removeAttribute(t)
				: ((o = this.getAttribute(t)),
				  (u = a + ''),
				  o === u
						? null
						: o === r && u === i
						? s
						: ((i = u), (s = n((r = o), a))))
		}
	}
	function tp(t, n, e) {
		var r, i, s
		return function () {
			var o,
				a = e(this),
				u
			return a == null
				? void this.removeAttributeNS(t.space, t.local)
				: ((o = this.getAttributeNS(t.space, t.local)),
				  (u = a + ''),
				  o === u
						? null
						: o === r && u === i
						? s
						: ((i = u), (s = n((r = o), a))))
		}
	}
	function np(t, n) {
		var e = se(t),
			r = e === 'transform' ? x0 : ao
		return this.attrTween(
			t,
			typeof n == 'function'
				? (e.local ? tp : jd)(e, r, xr(this, 'attr.' + t, n))
				: n == null
				? (e.local ? Zd : Kd)(e)
				: (e.local ? Qd : Jd)(e, r, n)
		)
	}
	function ep(t, n) {
		return function (e) {
			this.setAttribute(t, n.call(this, e))
		}
	}
	function rp(t, n) {
		return function (e) {
			this.setAttributeNS(t.space, t.local, n.call(this, e))
		}
	}
	function ip(t, n) {
		var e, r
		function i() {
			var s = n.apply(this, arguments)
			return s !== r && (e = (r = s) && rp(t, s)), e
		}
		return (i._value = n), i
	}
	function sp(t, n) {
		var e, r
		function i() {
			var s = n.apply(this, arguments)
			return s !== r && (e = (r = s) && ep(t, s)), e
		}
		return (i._value = n), i
	}
	function op(t, n) {
		var e = 'attr.' + t
		if (arguments.length < 2) return (e = this.tween(e)) && e._value
		if (n == null) return this.tween(e, null)
		if (typeof n != 'function') throw new Error()
		var r = se(t)
		return this.tween(e, (r.local ? ip : sp)(r, n))
	}
	function ap(t, n) {
		return function () {
			gr(this, t).delay = +n.apply(this, arguments)
		}
	}
	function up(t, n) {
		return (
			(n = +n),
			function () {
				gr(this, t).delay = n
			}
		)
	}
	function fp(t) {
		var n = this._id
		return arguments.length
			? this.each((typeof t == 'function' ? ap : up)(n, t))
			: U(this.node(), n).delay
	}
	function lp(t, n) {
		return function () {
			et(this, t).duration = +n.apply(this, arguments)
		}
	}
	function cp(t, n) {
		return (
			(n = +n),
			function () {
				et(this, t).duration = n
			}
		)
	}
	function hp(t) {
		var n = this._id
		return arguments.length
			? this.each((typeof t == 'function' ? lp : cp)(n, t))
			: U(this.node(), n).duration
	}
	function dp(t, n) {
		if (typeof n != 'function') throw new Error()
		return function () {
			et(this, t).ease = n
		}
	}
	function pp(t) {
		var n = this._id
		return arguments.length ? this.each(dp(n, t)) : U(this.node(), n).ease
	}
	function gp(t) {
		typeof t != 'function' && (t = Xs(t))
		for (
			var n = this._groups, e = n.length, r = new Array(e), i = 0;
			i < e;
			++i
		)
			for (var s = n[i], o = s.length, a = (r[i] = []), u, f = 0; f < o; ++f)
				(u = s[f]) && t.call(u, u.__data__, f, s) && a.push(u)
		return new rt(r, this._parents, this._name, this._id)
	}
	function xp(t) {
		if (t._id !== this._id) throw new Error()
		for (
			var n = this._groups,
				e = t._groups,
				r = n.length,
				i = e.length,
				s = Math.min(r, i),
				o = new Array(r),
				a = 0;
			a < s;
			++a
		)
			for (
				var u = n[a],
					f = e[a],
					l = u.length,
					c = (o[a] = new Array(l)),
					h,
					d = 0;
				d < l;
				++d
			)
				(h = u[d] || f[d]) && (c[d] = h)
		for (; a < r; ++a) o[a] = n[a]
		return new rt(o, this._parents, this._name, this._id)
	}
	function _p(t) {
		return (t + '')
			.trim()
			.split(/^|\s+/)
			.every(function (n) {
				var e = n.indexOf('.')
				return e >= 0 && (n = n.slice(0, e)), !n || n === 'start'
			})
	}
	function yp(t, n, e) {
		var r,
			i,
			s = _p(n) ? gr : et
		return function () {
			var o = s(this, t),
				a = o.on
			a !== r && (i = (r = a).copy()).on(n, e), (o.on = i)
		}
	}
	function vp(t, n) {
		var e = this._id
		return arguments.length < 2
			? U(this.node(), e).on.on(t)
			: this.each(yp(e, t, n))
	}
	function mp(t) {
		return function () {
			var n = this.parentNode
			for (var e in this.__transition) if (+e !== t) return
			n && n.removeChild(this)
		}
	}
	function wp() {
		return this.on('end.remove', mp(this._id))
	}
	function $p(t) {
		var n = this._name,
			e = this._id
		typeof t != 'function' && (t = lr(t))
		for (
			var r = this._groups, i = r.length, s = new Array(i), o = 0;
			o < i;
			++o
		)
			for (
				var a = r[o], u = a.length, f = (s[o] = new Array(u)), l, c, h = 0;
				h < u;
				++h
			)
				(l = a[h]) &&
					(c = t.call(l, l.__data__, h, a)) &&
					('__data__' in l && (c.__data__ = l.__data__),
					(f[h] = c),
					pe(f[h], n, e, h, f, U(l, e)))
		return new rt(s, this._parents, n, e)
	}
	function bp(t) {
		var n = this._name,
			e = this._id
		typeof t != 'function' && (t = Hs(t))
		for (var r = this._groups, i = r.length, s = [], o = [], a = 0; a < i; ++a)
			for (var u = r[a], f = u.length, l, c = 0; c < f; ++c)
				if ((l = u[c])) {
					for (
						var h = t.call(l, l.__data__, c, u),
							d,
							g = U(l, e),
							p = 0,
							x = h.length;
						p < x;
						++p
					)
						(d = h[p]) && pe(d, n, e, p, h, g)
					s.push(h), o.push(l)
				}
		return new rt(s, o, n, e)
	}
	var Np = cn.prototype.constructor
	function Ap() {
		return new Np(this._groups, this._parents)
	}
	function Cp(t, n) {
		var e, r, i
		return function () {
			var s = Mt(this, t),
				o = (this.style.removeProperty(t), Mt(this, t))
			return s === o ? null : s === e && o === r ? i : (i = n((e = s), (r = o)))
		}
	}
	function uo(t) {
		return function () {
			this.style.removeProperty(t)
		}
	}
	function Mp(t, n, e) {
		var r,
			i = e + '',
			s
		return function () {
			var o = Mt(this, t)
			return o === i ? null : o === r ? s : (s = n((r = o), e))
		}
	}
	function Rp(t, n, e) {
		var r, i, s
		return function () {
			var o = Mt(this, t),
				a = e(this),
				u = a + ''
			return (
				a == null && (u = a = (this.style.removeProperty(t), Mt(this, t))),
				o === u ? null : o === r && u === i ? s : ((i = u), (s = n((r = o), a)))
			)
		}
	}
	function Ep(t, n) {
		var e,
			r,
			i,
			s = 'style.' + n,
			o = 'end.' + s,
			a
		return function () {
			var u = et(this, t),
				f = u.on,
				l = u.value[s] == null ? a || (a = uo(n)) : void 0
			;(f !== e || i !== l) && (r = (e = f).copy()).on(o, (i = l)), (u.on = r)
		}
	}
	function kp(t, n, e) {
		var r = (t += '') == 'transform' ? g0 : ao
		return n == null
			? this.styleTween(t, Cp(t, r)).on('end.style.' + t, uo(t))
			: typeof n == 'function'
			? this.styleTween(t, Rp(t, r, xr(this, 'style.' + t, n))).each(
					Ep(this._id, t)
			  )
			: this.styleTween(t, Mp(t, r, n), e).on('end.style.' + t, null)
	}
	function Sp(t, n, e) {
		return function (r) {
			this.style.setProperty(t, n.call(this, r), e)
		}
	}
	function Tp(t, n, e) {
		var r, i
		function s() {
			var o = n.apply(this, arguments)
			return o !== i && (r = (i = o) && Sp(t, o, e)), r
		}
		return (s._value = n), s
	}
	function Ip(t, n, e) {
		var r = 'style.' + (t += '')
		if (arguments.length < 2) return (r = this.tween(r)) && r._value
		if (n == null) return this.tween(r, null)
		if (typeof n != 'function') throw new Error()
		return this.tween(r, Tp(t, n, e ?? ''))
	}
	function Pp(t) {
		return function () {
			this.textContent = t
		}
	}
	function Lp(t) {
		return function () {
			var n = t(this)
			this.textContent = n ?? ''
		}
	}
	function Op(t) {
		return this.tween(
			'text',
			typeof t == 'function'
				? Lp(xr(this, 'text', t))
				: Pp(t == null ? '' : t + '')
		)
	}
	function Fp(t) {
		return function (n) {
			this.textContent = t.call(this, n)
		}
	}
	function zp(t) {
		var n, e
		function r() {
			var i = t.apply(this, arguments)
			return i !== e && (n = (e = i) && Fp(i)), n
		}
		return (r._value = t), r
	}
	function Dp(t) {
		var n = 'text'
		if (arguments.length < 1) return (n = this.tween(n)) && n._value
		if (t == null) return this.tween(n, null)
		if (typeof t != 'function') throw new Error()
		return this.tween(n, zp(t))
	}
	function qp() {
		for (
			var t = this._name,
				n = this._id,
				e = fo(),
				r = this._groups,
				i = r.length,
				s = 0;
			s < i;
			++s
		)
			for (var o = r[s], a = o.length, u, f = 0; f < a; ++f)
				if ((u = o[f])) {
					var l = U(u, n)
					pe(u, t, e, f, o, {
						time: l.time + l.delay + l.duration,
						delay: 0,
						duration: l.duration,
						ease: l.ease
					})
				}
		return new rt(r, this._parents, t, e)
	}
	function Hp() {
		var t,
			n,
			e = this,
			r = e._id,
			i = e.size()
		return new Promise(function (s, o) {
			var a = { value: o },
				u = {
					value: function () {
						--i === 0 && s()
					}
				}
			e.each(function () {
				var f = et(this, r),
					l = f.on
				l !== t &&
					((n = (t = l).copy()),
					n._.cancel.push(a),
					n._.interrupt.push(a),
					n._.end.push(u)),
					(f.on = n)
			})
		})
	}
	var Xp = 0
	function rt(t, n, e, r) {
		;(this._groups = t), (this._parents = n), (this._name = e), (this._id = r)
	}
	function fo() {
		return ++Xp
	}
	var Et = cn.prototype
	rt.prototype = {
		constructor: rt,
		select: $p,
		selectAll: bp,
		filter: gp,
		merge: xp,
		selection: Ap,
		transition: qp,
		call: Et.call,
		nodes: Et.nodes,
		node: Et.node,
		size: Et.size,
		empty: Et.empty,
		each: Et.each,
		on: vp,
		attr: np,
		attrTween: op,
		style: kp,
		styleTween: Ip,
		text: Op,
		textTween: Dp,
		remove: wp,
		tween: Wd,
		delay: fp,
		duration: hp,
		ease: pp,
		end: Hp
	}
	function Bp(t) {
		return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2
	}
	var _r = { time: null, delay: 0, duration: 250, ease: Bp }
	function Vp(t, n) {
		for (var e; !(e = t.__transition) || !(e = e[n]); )
			if (!(t = t.parentNode)) return (_r.time = le()), _r
		return e
	}
	function Up(t) {
		var n, e
		t instanceof rt
			? ((n = t._id), (t = t._name))
			: ((n = fo()), ((e = _r).time = le()), (t = t == null ? null : t + ''))
		for (var r = this._groups, i = r.length, s = 0; s < i; ++s)
			for (var o = r[s], a = o.length, u, f = 0; f < a; ++f)
				(u = o[f]) && pe(u, t, n, f, o, e || Vp(u, n))
		return new rt(r, this._parents, t, n)
	}
	;(cn.prototype.interrupt = Ud), (cn.prototype.transition = Up)
	function xn(t, n, e) {
		;(this.k = t), (this.x = n), (this.y = e)
	}
	;(xn.prototype = {
		constructor: xn,
		scale: function (t) {
			return t === 1 ? this : new xn(this.k * t, this.x, this.y)
		},
		translate: function (t, n) {
			return (t === 0) & (n === 0)
				? this
				: new xn(this.k, this.x + this.k * t, this.y + this.k * n)
		},
		apply: function (t) {
			return [t[0] * this.k + this.x, t[1] * this.k + this.y]
		},
		applyX: function (t) {
			return t * this.k + this.x
		},
		applyY: function (t) {
			return t * this.k + this.y
		},
		invert: function (t) {
			return [(t[0] - this.x) / this.k, (t[1] - this.y) / this.k]
		},
		invertX: function (t) {
			return (t - this.x) / this.k
		},
		invertY: function (t) {
			return (t - this.y) / this.k
		},
		rescaleX: function (t) {
			return t.copy().domain(t.range().map(this.invertX, this).map(t.invert, t))
		},
		rescaleY: function (t) {
			return t.copy().domain(t.range().map(this.invertY, this).map(t.invert, t))
		},
		toString: function () {
			return 'translate(' + this.x + ',' + this.y + ') scale(' + this.k + ')'
		}
	}),
		xn.prototype
	function Yp(t, n, e, r) {
		r = r || {}
		var i = r.maxIterations || 100,
			s = r.tolerance || 1e-10,
			o = t(n),
			a = t(e),
			u = e - n
		if (o * a > 0) throw 'Initial bisect points must have opposite signs'
		if (o === 0) return n
		if (a === 0) return e
		for (var f = 0; f < i; ++f) {
			u /= 2
			var l = n + u,
				c = t(l)
			if ((c * o >= 0 && (n = l), Math.abs(u) < s || c === 0)) return l
		}
		return n + u
	}
	function yr(t) {
		for (var n = new Array(t), e = 0; e < t; ++e) n[e] = 0
		return n
	}
	function lo(t, n) {
		return yr(t).map(function () {
			return yr(n)
		})
	}
	function kt(t, n) {
		for (var e = 0, r = 0; r < t.length; ++r) e += t[r] * n[r]
		return e
	}
	function vr(t) {
		return Math.sqrt(kt(t, t))
	}
	function mr(t, n, e) {
		for (var r = 0; r < n.length; ++r) t[r] = n[r] * e
	}
	function it(t, n, e, r, i) {
		for (var s = 0; s < t.length; ++s) t[s] = n * e[s] + r * i[s]
	}
	function co(t, n, e) {
		e = e || {}
		var r = e.maxIterations || n.length * 200,
			i = e.nonZeroDelta || 1.05,
			s = e.zeroDelta || 0.001,
			o = e.minErrorDelta || 1e-6,
			a = e.minErrorDelta || 1e-5,
			u = e.rho !== void 0 ? e.rho : 1,
			f = e.chi !== void 0 ? e.chi : 2,
			l = e.psi !== void 0 ? e.psi : -0.5,
			c = e.sigma !== void 0 ? e.sigma : 0.5,
			h,
			d = n.length,
			g = new Array(d + 1)
		;(g[0] = n), (g[0].fx = t(n)), (g[0].id = 0)
		for (var p = 0; p < d; ++p) {
			var x = n.slice()
			;(x[p] = x[p] ? x[p] * i : s),
				(g[p + 1] = x),
				(g[p + 1].fx = t(x)),
				(g[p + 1].id = p + 1)
		}
		function $(S) {
			for (var R = 0; R < S.length; R++) g[d][R] = S[R]
			g[d].fx = S.fx
		}
		for (
			var v = function (S, R) {
					return S.fx - R.fx
				},
				_ = n.slice(),
				b = n.slice(),
				N = n.slice(),
				y = n.slice(),
				m = 0;
			m < r;
			++m
		) {
			if ((g.sort(v), e.history)) {
				var C = g.map(function (S) {
					var R = S.slice()
					return (R.fx = S.fx), (R.id = S.id), R
				})
				C.sort(function (S, R) {
					return S.id - R.id
				}),
					e.history.push({ x: g[0].slice(), fx: g[0].fx, simplex: C })
			}
			for (h = 0, p = 0; p < d; ++p)
				h = Math.max(h, Math.abs(g[0][p] - g[1][p]))
			if (Math.abs(g[0].fx - g[d].fx) < o && h < a) break
			for (p = 0; p < d; ++p) {
				_[p] = 0
				for (var q = 0; q < d; ++q) _[p] += g[q][p]
				_[p] /= d
			}
			var k = g[d]
			if ((it(b, 1 + u, _, -u, k), (b.fx = t(b)), b.fx < g[0].fx))
				it(y, 1 + f, _, -f, k), (y.fx = t(y)), y.fx < b.fx ? $(y) : $(b)
			else if (b.fx >= g[d - 1].fx) {
				var st = !1
				if (
					(b.fx > k.fx
						? (it(N, 1 + l, _, -l, k),
						  (N.fx = t(N)),
						  N.fx < k.fx ? $(N) : (st = !0))
						: (it(N, 1 - l * u, _, l * u, k),
						  (N.fx = t(N)),
						  N.fx < b.fx ? $(N) : (st = !0)),
					st)
				) {
					if (c >= 1) break
					for (p = 1; p < g.length; ++p)
						it(g[p], 1 - c, g[0], c, g[p]), (g[p].fx = t(g[p]))
				}
			} else $(b)
		}
		return g.sort(v), { fx: g[0].fx, x: g[0] }
	}
	function Gp(t, n, e, r, i, s, o) {
		var a = e.fx,
			u = kt(e.fxprime, n),
			f = a,
			l = a,
			c = u,
			h = 0
		;(i = i || 1), (s = s || 1e-6), (o = o || 0.1)
		function d(p, x, $) {
			for (var v = 0; v < 16; ++v)
				if (
					((i = (p + x) / 2),
					it(r.x, 1, e.x, i, n),
					(f = r.fx = t(r.x, r.fxprime)),
					(c = kt(r.fxprime, n)),
					f > a + s * i * u || f >= $)
				)
					x = i
				else {
					if (Math.abs(c) <= -o * u) return i
					c * (x - p) >= 0 && (x = p), (p = i), ($ = f)
				}
			return 0
		}
		for (var g = 0; g < 10; ++g) {
			if (
				(it(r.x, 1, e.x, i, n),
				(f = r.fx = t(r.x, r.fxprime)),
				(c = kt(r.fxprime, n)),
				f > a + s * i * u || (g && f >= l))
			)
				return d(h, i, l)
			if (Math.abs(c) <= -o * u) return i
			if (c >= 0) return d(i, h, f)
			;(l = f), (h = i), (i *= 2)
		}
		return i
	}
	function Wp(t, n, e) {
		var r = { x: n.slice(), fx: 0, fxprime: n.slice() },
			i = { x: n.slice(), fx: 0, fxprime: n.slice() },
			s = n.slice(),
			o,
			a,
			u = 1,
			f
		;(e = e || {}),
			(f = e.maxIterations || n.length * 20),
			(r.fx = t(r.x, r.fxprime)),
			(o = r.fxprime.slice()),
			mr(o, r.fxprime, -1)
		for (var l = 0; l < f; ++l) {
			if (
				((u = Gp(t, o, r, i, u)),
				e.history &&
					e.history.push({
						x: r.x.slice(),
						fx: r.fx,
						fxprime: r.fxprime.slice(),
						alpha: u
					}),
				!u)
			)
				mr(o, r.fxprime, -1)
			else {
				it(s, 1, i.fxprime, -1, r.fxprime)
				var c = kt(r.fxprime, r.fxprime),
					h = Math.max(0, kt(s, i.fxprime) / c)
				it(o, h, o, -1, i.fxprime), (a = r), (r = i), (i = a)
			}
			if (vr(r.fxprime) <= 1e-5) break
		}
		return (
			e.history &&
				e.history.push({
					x: r.x.slice(),
					fx: r.fx,
					fxprime: r.fxprime.slice(),
					alpha: u
				}),
			r
		)
	}
	const ho = 1e-10
	function ge(t, n) {
		const e = Zp(t),
			r = e.filter((a) => Kp(a, t))
		let i = 0,
			s = 0
		const o = []
		if (r.length > 1) {
			const a = go(r)
			for (let f = 0; f < r.length; ++f) {
				const l = r[f]
				l.angle = Math.atan2(l.x - a.x, l.y - a.y)
			}
			r.sort((f, l) => l.angle - f.angle)
			let u = r[r.length - 1]
			for (let f = 0; f < r.length; ++f) {
				const l = r[f]
				s += (u.x + l.x) * (l.y - u.y)
				const c = { x: (l.x + u.x) / 2, y: (l.y + u.y) / 2 }
				let h = null
				for (let d = 0; d < l.parentIndex.length; ++d)
					if (u.parentIndex.includes(l.parentIndex[d])) {
						const g = t[l.parentIndex[d]],
							p = Math.atan2(l.x - g.x, l.y - g.y),
							x = Math.atan2(u.x - g.x, u.y - g.y)
						let $ = x - p
						$ < 0 && ($ += 2 * Math.PI)
						const v = x - $ / 2
						let _ = T(c, {
							x: g.x + g.radius * Math.sin(v),
							y: g.y + g.radius * Math.cos(v)
						})
						_ > g.radius * 2 && (_ = g.radius * 2),
							(h == null || h.width > _) &&
								(h = {
									circle: g,
									width: _,
									p1: l,
									p2: u,
									large: _ > g.radius,
									sweep: !0
								})
					}
				h != null && (o.push(h), (i += wr(h.circle.radius, h.width)), (u = l))
			}
		} else {
			let a = t[0]
			for (let f = 1; f < t.length; ++f) t[f].radius < a.radius && (a = t[f])
			let u = !1
			for (let f = 0; f < t.length; ++f)
				if (T(t[f], a) > Math.abs(a.radius - t[f].radius)) {
					u = !0
					break
				}
			u
				? (i = s = 0)
				: ((i = a.radius * a.radius * Math.PI),
				  o.push({
						circle: a,
						p1: { x: a.x, y: a.y + a.radius },
						p2: { x: a.x - ho, y: a.y + a.radius },
						width: a.radius * 2,
						large: !0,
						sweep: !0
				  }))
		}
		return (
			(s /= 2),
			n &&
				((n.area = i + s),
				(n.arcArea = i),
				(n.polygonArea = s),
				(n.arcs = o),
				(n.innerPoints = r),
				(n.intersectionPoints = e)),
			i + s
		)
	}
	function Kp(t, n) {
		return n.every((e) => T(t, e) < e.radius + ho)
	}
	function Zp(t) {
		const n = []
		for (let e = 0; e < t.length; ++e)
			for (let r = e + 1; r < t.length; ++r) {
				const i = po(t[e], t[r])
				for (const s of i) (s.parentIndex = [e, r]), n.push(s)
			}
		return n
	}
	function wr(t, n) {
		return t * t * Math.acos(1 - n / t) - (t - n) * Math.sqrt(n * (2 * t - n))
	}
	function T(t, n) {
		return Math.sqrt((t.x - n.x) * (t.x - n.x) + (t.y - n.y) * (t.y - n.y))
	}
	function $r(t, n, e) {
		if (e >= t + n) return 0
		if (e <= Math.abs(t - n)) return Math.PI * Math.min(t, n) * Math.min(t, n)
		const r = t - (e * e - n * n + t * t) / (2 * e),
			i = n - (e * e - t * t + n * n) / (2 * e)
		return wr(t, r) + wr(n, i)
	}
	function po(t, n) {
		const e = T(t, n),
			r = t.radius,
			i = n.radius
		if (e >= r + i || e <= Math.abs(r - i)) return []
		const s = (r * r - i * i + e * e) / (2 * e),
			o = Math.sqrt(r * r - s * s),
			a = t.x + (s * (n.x - t.x)) / e,
			u = t.y + (s * (n.y - t.y)) / e,
			f = -(n.y - t.y) * (o / e),
			l = -(n.x - t.x) * (o / e)
		return [
			{ x: a + f, y: u - l },
			{ x: a - f, y: u + l }
		]
	}
	function go(t) {
		const n = { x: 0, y: 0 }
		for (const e of t) (n.x += e.x), (n.y += e.y)
		return (n.x /= t.length), (n.y /= t.length), n
	}
	function Jp(t, n = {}) {
		n.maxIterations = n.maxIterations || 500
		const e = n.initialLayout || ng,
			r = n.lossFunction || _n,
			i = Qp(t, n),
			s = e(i, n),
			o = Object.keys(s),
			a = []
		for (const l of o) a.push(s[l].x), a.push(s[l].y)
		const f = co(
			(l) => {
				const c = {}
				for (let h = 0; h < o.length; ++h) {
					const d = o[h]
					c[d] = { x: l[2 * h], y: l[2 * h + 1], radius: s[d].radius }
				}
				return r(c, i)
			},
			a,
			n
		).x
		for (let l = 0; l < o.length; ++l) {
			const c = o[l]
			;(s[c].x = f[2 * l]), (s[c].y = f[2 * l + 1])
		}
		return s
	}
	const xo = 1e-10
	function br(t, n, e) {
		return Math.min(t, n) * Math.min(t, n) * Math.PI <= e + xo
			? Math.abs(t - n)
			: Yp((r) => $r(t, n, r) - e, 0, t + n)
	}
	function Qp(t, n = {}) {
		const e = n.distinct,
			r = t.map((a) => Object.assign({}, a))
		function i(a) {
			return a.join(';')
		}
		if (e) {
			const a = new Map()
			for (const u of r)
				for (let f = 0; f < u.sets.length; f++) {
					const l = String(u.sets[f])
					a.set(l, u.size + (a.get(l) || 0))
					for (let c = f + 1; c < u.sets.length; c++) {
						const h = String(u.sets[c]),
							d = `${l};${h}`,
							g = `${h};${l}`
						a.set(d, u.size + (a.get(d) || 0)),
							a.set(g, u.size + (a.get(g) || 0))
					}
				}
			for (const u of r) u.sets.length < 3 && (u.size = a.get(i(u.sets)))
		}
		const s = [],
			o = new Set()
		for (const a of r)
			if (a.sets.length === 1) s.push(a.sets[0])
			else if (a.sets.length === 2) {
				const u = a.sets[0],
					f = a.sets[1]
				o.add(i(a.sets)), o.add(i([f, u]))
			}
		s.sort((a, u) => (a === u ? 0 : a < u ? -1 : 1))
		for (let a = 0; a < s.length; ++a) {
			const u = s[a]
			for (let f = a + 1; f < s.length; ++f) {
				const l = s[f]
				o.has(i([u, l])) || r.push({ sets: [u, l], size: 0 })
			}
		}
		return r
	}
	function jp(t, n, e) {
		const r = lo(n.length, n.length),
			i = lo(n.length, n.length)
		return (
			t
				.filter((s) => s.sets.length === 2)
				.forEach((s) => {
					const o = e[s.sets[0]],
						a = e[s.sets[1]],
						u = Math.sqrt(n[o].size / Math.PI),
						f = Math.sqrt(n[a].size / Math.PI),
						l = br(u, f, s.size)
					r[o][a] = r[a][o] = l
					let c = 0
					s.size + 1e-10 >= Math.min(n[o].size, n[a].size)
						? (c = 1)
						: s.size <= 1e-10 && (c = -1),
						(i[o][a] = i[a][o] = c)
				}),
			{ distances: r, constraints: i }
		)
	}
	function tg(t, n, e, r) {
		for (let s = 0; s < n.length; ++s) n[s] = 0
		let i = 0
		for (let s = 0; s < e.length; ++s) {
			const o = t[2 * s],
				a = t[2 * s + 1]
			for (let u = s + 1; u < e.length; ++u) {
				const f = t[2 * u],
					l = t[2 * u + 1],
					c = e[s][u],
					h = r[s][u],
					d = (f - o) * (f - o) + (l - a) * (l - a),
					g = Math.sqrt(d),
					p = d - c * c
				;(h > 0 && g <= c) ||
					(h < 0 && g >= c) ||
					((i += 2 * p * p),
					(n[2 * s] += 4 * p * (o - f)),
					(n[2 * s + 1] += 4 * p * (a - l)),
					(n[2 * u] += 4 * p * (f - o)),
					(n[2 * u + 1] += 4 * p * (l - a)))
			}
		}
		return i
	}
	function ng(t, n = {}) {
		let e = rg(t, n)
		const r = n.lossFunction || _n
		if (t.length >= 8) {
			const i = eg(t, n),
				s = r(i, t),
				o = r(e, t)
			s + 1e-8 < o && (e = i)
		}
		return e
	}
	function eg(t, n = {}) {
		const e = n.restarts || 10,
			r = [],
			i = {}
		for (const h of t)
			h.sets.length === 1 && ((i[h.sets[0]] = r.length), r.push(h))
		let { distances: s, constraints: o } = jp(t, r, i)
		const a = vr(s.map(vr)) / s.length
		s = s.map((h) => h.map((d) => d / a))
		const u = (h, d) => tg(h, d, s, o)
		let f = null
		for (let h = 0; h < e; ++h) {
			const d = yr(s.length * 2).map(Math.random),
				g = Wp(u, d, n)
			;(!f || g.fx < f.fx) && (f = g)
		}
		const l = f.x,
			c = {}
		for (let h = 0; h < r.length; ++h) {
			const d = r[h]
			c[d.sets[0]] = {
				x: l[2 * h] * a,
				y: l[2 * h + 1] * a,
				radius: Math.sqrt(d.size / Math.PI)
			}
		}
		if (n.history) for (const h of n.history) mr(h.x, a)
		return c
	}
	function rg(t, n) {
		const e = n && n.lossFunction ? n.lossFunction : _n,
			r = {},
			i = {}
		for (const c of t)
			if (c.sets.length === 1) {
				const h = c.sets[0]
				;(r[h] = {
					x: 1e10,
					y: 1e10,
					rowid: r.length,
					size: c.size,
					radius: Math.sqrt(c.size / Math.PI)
				}),
					(i[h] = [])
			}
		t = t.filter((c) => c.sets.length === 2)
		for (const c of t) {
			let h = c.weight != null ? c.weight : 1
			const d = c.sets[0],
				g = c.sets[1]
			c.size + xo >= Math.min(r[d].size, r[g].size) && (h = 0),
				i[d].push({ set: g, size: c.size, weight: h }),
				i[g].push({ set: d, size: c.size, weight: h })
		}
		const s = []
		Object.keys(i).forEach((c) => {
			let h = 0
			for (let d = 0; d < i[c].length; ++d) h += i[c][d].size * i[c][d].weight
			s.push({ set: c, size: h })
		})
		function o(c, h) {
			return h.size - c.size
		}
		s.sort(o)
		const a = {}
		function u(c) {
			return c.set in a
		}
		function f(c, h) {
			;(r[h].x = c.x), (r[h].y = c.y), (a[h] = !0)
		}
		f({ x: 0, y: 0 }, s[0].set)
		for (let c = 1; c < s.length; ++c) {
			const h = s[c].set,
				d = i[h].filter(u),
				g = r[h]
			if ((d.sort(o), d.length === 0))
				throw 'ERROR: missing pairwise overlap information'
			const p = []
			for (var l = 0; l < d.length; ++l) {
				const v = r[d[l].set],
					_ = br(g.radius, v.radius, d[l].size)
				p.push({ x: v.x + _, y: v.y }),
					p.push({ x: v.x - _, y: v.y }),
					p.push({ y: v.y + _, x: v.x }),
					p.push({ y: v.y - _, x: v.x })
				for (let b = l + 1; b < d.length; ++b) {
					const N = r[d[b].set],
						y = br(g.radius, N.radius, d[b].size),
						m = po({ x: v.x, y: v.y, radius: _ }, { x: N.x, y: N.y, radius: y })
					p.push(...m)
				}
			}
			let x = 1e50,
				$ = p[0]
			for (const v of p) {
				;(r[h].x = v.x), (r[h].y = v.y)
				const _ = e(r, t)
				_ < x && ((x = _), ($ = v))
			}
			f($, h)
		}
		return r
	}
	function _n(t, n) {
		let e = 0
		for (const r of n) {
			if (r.sets.length === 1) continue
			let i
			if (r.sets.length === 2) {
				const o = t[r.sets[0]],
					a = t[r.sets[1]]
				i = $r(o.radius, a.radius, T(o, a))
			} else i = ge(r.sets.map((o) => t[o]))
			const s = r.weight != null ? r.weight : 1
			e += s * (i - r.size) * (i - r.size)
		}
		return e
	}
	function ig(t, n) {
		let e = 0
		for (const r of n) {
			if (r.sets.length === 1) continue
			let i
			if (r.sets.length === 2) {
				const a = t[r.sets[0]],
					u = t[r.sets[1]]
				i = $r(a.radius, u.radius, T(a, u))
			} else i = ge(r.sets.map((a) => t[a]))
			const s = r.weight != null ? r.weight : 1,
				o = Math.log((i + 1) / (r.size + 1))
			e += s * o * o
		}
		return e
	}
	function sg(t, n, e) {
		if (
			(e == null ? t.sort((i, s) => s.radius - i.radius) : t.sort(e),
			t.length > 0)
		) {
			const i = t[0].x,
				s = t[0].y
			for (const o of t) (o.x -= i), (o.y -= s)
		}
		if (
			(t.length === 2 &&
				T(t[0], t[1]) < Math.abs(t[1].radius - t[0].radius) &&
				((t[1].x = t[0].x + t[0].radius - t[1].radius - 1e-10),
				(t[1].y = t[0].y)),
			t.length > 1)
		) {
			const i = Math.atan2(t[1].x, t[1].y) - n,
				s = Math.cos(i),
				o = Math.sin(i)
			for (const a of t) {
				const u = a.x,
					f = a.y
				;(a.x = s * u - o * f), (a.y = o * u + s * f)
			}
		}
		if (t.length > 2) {
			let i = Math.atan2(t[2].x, t[2].y) - n
			for (; i < 0; ) i += 2 * Math.PI
			for (; i > 2 * Math.PI; ) i -= 2 * Math.PI
			if (i > Math.PI) {
				const s = t[1].y / (1e-10 + t[1].x)
				for (const o of t) {
					var r = (o.x + s * o.y) / (1 + s * s)
					;(o.x = 2 * r - o.x), (o.y = 2 * r * s - o.y)
				}
			}
		}
	}
	function og(t) {
		t.forEach((i) => {
			i.parent = i
		})
		function n(i) {
			return i.parent !== i && (i.parent = n(i.parent)), i.parent
		}
		function e(i, s) {
			const o = n(i),
				a = n(s)
			o.parent = a
		}
		for (let i = 0; i < t.length; ++i)
			for (let s = i + 1; s < t.length; ++s) {
				const o = t[i].radius + t[s].radius
				T(t[i], t[s]) + 1e-10 < o && e(t[s], t[i])
			}
		const r = new Map()
		for (let i = 0; i < t.length; ++i) {
			const s = n(t[i]).parent.setid
			r.has(s) || r.set(s, []), r.get(s).push(t[i])
		}
		return (
			t.forEach((i) => {
				delete i.parent
			}),
			Array.from(r.values())
		)
	}
	function Nr(t) {
		const n = (e) => {
			const r = t.reduce(
					(s, o) => Math.max(s, o[e] + o.radius),
					Number.NEGATIVE_INFINITY
				),
				i = t.reduce(
					(s, o) => Math.min(s, o[e] - o.radius),
					Number.POSITIVE_INFINITY
				)
			return { max: r, min: i }
		}
		return { xRange: n('x'), yRange: n('y') }
	}
	function ag(t, n, e) {
		n == null && (n = Math.PI / 2)
		let r = yo(t).map((f) => Object.assign({}, f))
		const i = og(r)
		for (const f of i) {
			sg(f, n, e)
			const l = Nr(f)
			;(f.size = (l.xRange.max - l.xRange.min) * (l.yRange.max - l.yRange.min)),
				(f.bounds = l)
		}
		i.sort((f, l) => l.size - f.size), (r = i[0])
		let s = r.bounds
		const o = (s.xRange.max - s.xRange.min) / 50
		function a(f, l, c) {
			if (!f) return
			const h = f.bounds
			let d, g
			if (l) d = s.xRange.max - h.xRange.min + o
			else {
				d = s.xRange.max - h.xRange.max
				const p =
					(h.xRange.max - h.xRange.min) / 2 - (s.xRange.max - s.xRange.min) / 2
				p < 0 && (d += p)
			}
			if (c) g = s.yRange.max - h.yRange.min + o
			else {
				g = s.yRange.max - h.yRange.max
				const p =
					(h.yRange.max - h.yRange.min) / 2 - (s.yRange.max - s.yRange.min) / 2
				p < 0 && (g += p)
			}
			for (const p of f) (p.x += d), (p.y += g), r.push(p)
		}
		let u = 1
		for (; u < i.length; )
			a(i[u], !0, !1),
				a(i[u + 1], !1, !0),
				a(i[u + 2], !0, !0),
				(u += 3),
				(s = Nr(r))
		return _o(r)
	}
	function ug(t, n, e, r, i) {
		const s = yo(t)
		;(n -= 2 * r), (e -= 2 * r)
		const { xRange: o, yRange: a } = Nr(s)
		if (o.max === o.min || a.max === a.min)
			return console.log('not scaling solution: zero size detected'), t
		let u, f
		if (i) {
			const d = Math.sqrt(i / Math.PI) * 2
			;(u = n / d), (f = e / d)
		} else (u = n / (o.max - o.min)), (f = e / (a.max - a.min))
		const l = Math.min(f, u),
			c = (n - (o.max - o.min) * l) / 2,
			h = (e - (a.max - a.min) * l) / 2
		return _o(
			s.map((d) => ({
				radius: l * d.radius,
				x: r + c + (d.x - o.min) * l,
				y: r + h + (d.y - a.min) * l,
				setid: d.setid
			}))
		)
	}
	function _o(t) {
		const n = {}
		for (const e of t) n[e.setid] = e
		return n
	}
	function yo(t) {
		return Object.keys(t).map((e) => Object.assign(t[e], { setid: e }))
	}
	function fg(t = {}) {
		let n = !1,
			e = 600,
			r = 350,
			i = 15,
			s = 1e3,
			o = Math.PI / 2,
			a = !0,
			u = null,
			f = !0,
			l = !0,
			c = null,
			h = null,
			d = !1,
			g = null,
			p = t && t.symmetricalTextCentre ? t.symmetricalTextCentre : !1,
			x = {},
			$ =
				t && t.colourScheme
					? t.colourScheme
					: t && t.colorScheme
					? t.colorScheme
					: [
							'#1f77b4',
							'#ff7f0e',
							'#2ca02c',
							'#d62728',
							'#9467bd',
							'#8c564b',
							'#e377c2',
							'#7f7f7f',
							'#bcbd22',
							'#17becf'
					  ],
			v = 0,
			_ = function (m) {
				if (m in x) return x[m]
				var C = (x[m] = $[v])
				return (v += 1), v >= $.length && (v = 0), C
			},
			b = Jp,
			N = _n
		function y(m) {
			let C = m.datum()
			const q = new Set()
			C.forEach((w) => {
				w.size == 0 && w.sets.length == 1 && q.add(w.sets[0])
			}),
				(C = C.filter((w) => !w.sets.some((z) => q.has(z))))
			let k = {},
				st = {}
			if (C.length > 0) {
				let w = b(C, { lossFunction: N, distinct: d })
				a && (w = ag(w, o, h)), (k = ug(w, e, r, i, u)), (st = cg(k, C, p))
			}
			const S = {}
			C.forEach((w) => {
				w.label && (S[w.sets] = w.label)
			})
			function R(w) {
				if (w.sets in S) return S[w.sets]
				if (w.sets.length == 1) return '' + w.sets[0]
			}
			m.selectAll('svg').data([k]).enter().append('svg')
			const _e = m.select('svg')
			n
				? _e.attr('viewBox', `0 0 ${e} ${r}`)
				: _e.attr('width', e).attr('height', r)
			const Mo = {}
			let Er = !1
			_e.selectAll('.venn-area path').each(function (w) {
				const z = this.getAttribute('d')
				w.sets.length == 1 && z && !d && ((Er = !0), (Mo[w.sets[0]] = dg(z)))
			})
			function Ro(w) {
				return (z) => {
					const Qg = w.sets.map((So) => {
						let wn = Mo[So],
							$n = k[So]
						return (
							wn || (wn = { x: e / 2, y: r / 2, radius: 1 }),
							$n || ($n = { x: e / 2, y: r / 2, radius: 1 }),
							{
								x: wn.x * (1 - z) + $n.x * z,
								y: wn.y * (1 - z) + $n.y * z,
								radius: wn.radius * (1 - z) + $n.radius * z
							}
						)
					})
					return mo(Qg, g)
				}
			}
			const ye = _e.selectAll('.venn-area').data(C, (w) => w.sets),
				kr = ye
					.enter()
					.append('g')
					.attr(
						'class',
						(w) =>
							`venn-area venn-${
								w.sets.length == 1 ? 'circle' : 'intersection'
							}${w.colour || w.color ? ' venn-coloured' : ''}`
					)
					.attr('data-venn-sets', (w) => w.sets.join('_')),
				Zg = kr.append('path'),
				Eo = kr
					.append('text')
					.attr('class', 'label')
					.text((w) => R(w))
					.attr('text-anchor', 'middle')
					.attr('dy', '.35em')
					.attr('x', e / 2)
					.attr('y', r / 2)
			l &&
				(Zg.style('fill-opacity', '0')
					.filter((w) => w.sets.length == 1)
					.style('fill', (w) =>
						w.colour ? w.colour : w.color ? w.color : _(w.sets)
					)
					.style('fill-opacity', '.25'),
				Eo.style('fill', (w) =>
					w.colour || w.color
						? '#FFF'
						: t.textFill
						? t.textFill
						: w.sets.length == 1
						? _(w.sets)
						: '#444'
				))
			function ko(w) {
				return typeof w.transition == 'function'
					? w.transition('venn').duration(s)
					: w
			}
			let St = m
			Er && typeof St.transition == 'function'
				? ((St = ko(m)), St.selectAll('path').attrTween('d', Ro))
				: St.selectAll('path').attr('d', (w) => mo(w.sets.map((z) => k[z])), g)
			const mn = St.selectAll('text')
				.filter((w) => w.sets in st)
				.text((w) => R(w))
				.attr('x', (w) => Math.floor(st[w.sets].x))
				.attr('y', (w) => Math.floor(st[w.sets].y))
			f &&
				(Er
					? 'on' in mn
						? mn.on('end', Ar(k, R))
						: mn.each('end', Ar(k, R))
					: mn.each(Ar(k, R)))
			const Sr = ko(ye.exit()).remove()
			typeof ye.transition == 'function' &&
				Sr.selectAll('path').attrTween('d', Ro)
			const Jg = Sr.selectAll('text')
				.attr('x', e / 2)
				.attr('y', r / 2)
			return (
				c !== null &&
					(Eo.style('font-size', '0px'),
					mn.style('font-size', c),
					Jg.style('font-size', '0px')),
				{
					circles: k,
					textCentres: st,
					nodes: ye,
					enter: kr,
					update: St,
					exit: Sr
				}
			)
		}
		return (
			(y.wrap = function (m) {
				return arguments.length ? ((f = m), y) : f
			}),
			(y.useViewBox = function () {
				return (n = !0), y
			}),
			(y.width = function (m) {
				return arguments.length ? ((e = m), y) : e
			}),
			(y.height = function (m) {
				return arguments.length ? ((r = m), y) : r
			}),
			(y.padding = function (m) {
				return arguments.length ? ((i = m), y) : i
			}),
			(y.distinct = function (m) {
				return arguments.length ? ((d = m), y) : d
			}),
			(y.colours = function (m) {
				return arguments.length ? ((_ = m), y) : _
			}),
			(y.colors = function (m) {
				return arguments.length ? ((_ = m), y) : colors
			}),
			(y.fontSize = function (m) {
				return arguments.length ? ((c = m), y) : c
			}),
			(y.round = function (m) {
				return arguments.length ? ((g = m), y) : g
			}),
			(y.duration = function (m) {
				return arguments.length ? ((s = m), y) : s
			}),
			(y.layoutFunction = function (m) {
				return arguments.length ? ((b = m), y) : b
			}),
			(y.normalize = function (m) {
				return arguments.length ? ((a = m), y) : a
			}),
			(y.scaleToFit = function (m) {
				return arguments.length ? ((u = m), y) : u
			}),
			(y.styled = function (m) {
				return arguments.length ? ((l = m), y) : l
			}),
			(y.orientation = function (m) {
				return arguments.length ? ((o = m), y) : o
			}),
			(y.orientationOrder = function (m) {
				return arguments.length ? ((h = m), y) : h
			}),
			(y.lossFunction = function (m) {
				return arguments.length
					? ((N = m === 'default' ? _n : m === 'logRatio' ? ig : m), y)
					: N
			}),
			y
		)
	}
	function Ar(t, n) {
		return function (e) {
			const r = this,
				i = t[e.sets[0]].radius || 50,
				s = n(e) || '',
				o = s.split(/\s+/).reverse(),
				a = 3,
				u = (s.length + o.length) / a
			let f = o.pop(),
				l = [f],
				c = 0
			const h = 1.1
			r.textContent = null
			const d = []
			function g(_) {
				const b = r.ownerDocument.createElementNS(r.namespaceURI, 'tspan')
				return (b.textContent = _), d.push(b), r.append(b), b
			}
			let p = g(f)
			for (; (f = o.pop()), !!f; ) {
				l.push(f)
				const _ = l.join(' ')
				;(p.textContent = _),
					_.length > u &&
						p.getComputedTextLength() > i &&
						(l.pop(), (p.textContent = l.join(' ')), (l = [f]), (p = g(f)), c++)
			}
			const x = 0.35 - (c * h) / 2,
				$ = r.getAttribute('x'),
				v = r.getAttribute('y')
			d.forEach((_, b) => {
				_.setAttribute('x', $),
					_.setAttribute('y', v),
					_.setAttribute('dy', `${x + b * h}em`)
			})
		}
	}
	function Cr(t, n, e) {
		let r = n[0].radius - T(n[0], t)
		for (let i = 1; i < n.length; ++i) {
			const s = n[i].radius - T(n[i], t)
			s <= r && (r = s)
		}
		for (let i = 0; i < e.length; ++i) {
			const s = T(e[i], t) - e[i].radius
			s <= r && (r = s)
		}
		return r
	}
	function vo(t, n, e) {
		const r = []
		for (const l of t)
			r.push({ x: l.x, y: l.y }),
				r.push({ x: l.x + l.radius / 2, y: l.y }),
				r.push({ x: l.x - l.radius / 2, y: l.y }),
				r.push({ x: l.x, y: l.y + l.radius / 2 }),
				r.push({ x: l.x, y: l.y - l.radius / 2 })
		let i = r[0],
			s = Cr(r[0], t, n)
		for (let l = 1; l < r.length; ++l) {
			const c = Cr(r[l], t, n)
			c >= s && ((i = r[l]), (s = c))
		}
		const o = co((l) => -1 * Cr({ x: l[0], y: l[1] }, t, n), [i.x, i.y], {
				maxIterations: 500,
				minErrorDelta: 1e-10
			}).x,
			a = { x: e ? 0 : o[0], y: o[1] }
		let u = !0
		for (const l of t)
			if (T(a, l) > l.radius) {
				u = !1
				break
			}
		for (const l of n)
			if (T(a, l) < l.radius) {
				u = !1
				break
			}
		if (u) return a
		if (t.length == 1) return { x: t[0].x, y: t[0].y }
		const f = {}
		return (
			ge(t, f),
			f.arcs.length === 0
				? { x: 0, y: -1e3, disjoint: !0 }
				: f.arcs.length == 1
				? { x: f.arcs[0].circle.x, y: f.arcs[0].circle.y }
				: n.length
				? vo(t, [])
				: go(f.arcs.map((l) => l.p1))
		)
	}
	function lg(t) {
		const n = {},
			e = Object.keys(t)
		for (const r of e) n[r] = []
		for (let r = 0; r < e.length; r++) {
			const i = e[r],
				s = t[i]
			for (let o = r + 1; o < e.length; ++o) {
				const a = e[o],
					u = t[a],
					f = T(s, u)
				f + u.radius <= s.radius + 1e-10
					? n[a].push(i)
					: f + s.radius <= u.radius + 1e-10 && n[i].push(a)
			}
		}
		return n
	}
	function cg(t, n, e) {
		const r = {},
			i = lg(t)
		for (let s = 0; s < n.length; ++s) {
			const o = n[s].sets,
				a = {},
				u = {}
			for (let h = 0; h < o.length; ++h) {
				a[o[h]] = !0
				const d = i[o[h]]
				for (let g = 0; g < d.length; ++g) u[d[g]] = !0
			}
			const f = [],
				l = []
			for (let h in t) h in a ? f.push(t[h]) : h in u || l.push(t[h])
			const c = vo(f, l, e)
			;(r[o] = c),
				c.disjoint &&
					n[s].size > 0 &&
					console.log('WARNING: area ' + o + ' not represented on screen')
		}
		return r
	}
	function hg(t, n, e) {
		const r = []
		return (
			r.push(
				`
M`,
				t,
				n
			),
			r.push(
				`
m`,
				-e,
				0
			),
			r.push(
				`
a`,
				e,
				e,
				0,
				1,
				0,
				e * 2,
				0
			),
			r.push(
				`
a`,
				e,
				e,
				0,
				1,
				0,
				-e * 2,
				0
			),
			r.join(' ')
		)
	}
	function dg(t) {
		const n = t.split(' ')
		return {
			x: Number.parseFloat(n[1]),
			y: Number.parseFloat(n[2]),
			radius: -Number.parseFloat(n[4])
		}
	}
	function pg(t) {
		if (t.length === 0) return []
		const n = {}
		return ge(t, n), n.arcs
	}
	function gg(t, n) {
		if (t.length === 0) return 'M 0 0'
		const e = Math.pow(10, n || 0),
			r = n != null ? (s) => Math.round(s * e) / e : (s) => s
		if (t.length == 1) {
			const s = t[0].circle
			return hg(r(s.x), r(s.y), r(s.radius))
		}
		const i = [
			`
M`,
			r(t[0].p2.x),
			r(t[0].p2.y)
		]
		for (const s of t) {
			const o = r(s.circle.radius)
			i.push(
				`
A`,
				o,
				o,
				0,
				s.large ? 1 : 0,
				s.sweep ? 1 : 0,
				r(s.p1.x),
				r(s.p1.y)
			)
		}
		return i.join(' ')
	}
	function mo(t, n) {
		return gg(pg(t), n)
	}
	var xg =
		typeof global == 'object' && global && global.Object === Object && global
	const _g = xg
	var yg = typeof self == 'object' && self && self.Object === Object && self,
		vg = _g || yg || Function('return this')()
	const wo = vg
	var mg = wo.Symbol
	const xe = mg
	var $o = Object.prototype,
		wg = $o.hasOwnProperty,
		$g = $o.toString,
		yn = xe ? xe.toStringTag : void 0
	function bg(t) {
		var n = wg.call(t, yn),
			e = t[yn]
		try {
			t[yn] = void 0
			var r = !0
		} catch {}
		var i = $g.call(t)
		return r && (n ? (t[yn] = e) : delete t[yn]), i
	}
	var Ng = Object.prototype,
		Ag = Ng.toString
	function Cg(t) {
		return Ag.call(t)
	}
	var Mg = '[object Null]',
		Rg = '[object Undefined]',
		bo = xe ? xe.toStringTag : void 0
	function Eg(t) {
		return t == null
			? t === void 0
				? Rg
				: Mg
			: bo && bo in Object(t)
			? bg(t)
			: Cg(t)
	}
	function kg(t) {
		return t != null && typeof t == 'object'
	}
	var Sg = '[object Symbol]'
	function Tg(t) {
		return typeof t == 'symbol' || (kg(t) && Eg(t) == Sg)
	}
	var Ig = /\s/
	function Pg(t) {
		for (var n = t.length; n-- && Ig.test(t.charAt(n)); );
		return n
	}
	var Lg = /^\s+/
	function Og(t) {
		return t && t.slice(0, Pg(t) + 1).replace(Lg, '')
	}
	function Mr(t) {
		var n = typeof t
		return t != null && (n == 'object' || n == 'function')
	}
	var No = 0 / 0,
		Fg = /^[-+]0x[0-9a-f]+$/i,
		zg = /^0b[01]+$/i,
		Dg = /^0o[0-7]+$/i,
		qg = parseInt
	function Ao(t) {
		if (typeof t == 'number') return t
		if (Tg(t)) return No
		if (Mr(t)) {
			var n = typeof t.valueOf == 'function' ? t.valueOf() : t
			t = Mr(n) ? n + '' : n
		}
		if (typeof t != 'string') return t === 0 ? t : +t
		t = Og(t)
		var e = zg.test(t)
		return e || Dg.test(t) ? qg(t.slice(2), e ? 2 : 8) : Fg.test(t) ? No : +t
	}
	var Hg = function () {
		return wo.Date.now()
	}
	const Rr = Hg
	var Xg = 'Expected a function',
		Bg = Math.max,
		Vg = Math.min
	function Co(t, n, e) {
		var r,
			i,
			s,
			o,
			a,
			u,
			f = 0,
			l = !1,
			c = !1,
			h = !0
		if (typeof t != 'function') throw new TypeError(Xg)
		;(n = Ao(n) || 0),
			Mr(e) &&
				((l = !!e.leading),
				(c = 'maxWait' in e),
				(s = c ? Bg(Ao(e.maxWait) || 0, n) : s),
				(h = 'trailing' in e ? !!e.trailing : h))
		function d(y) {
			var m = r,
				C = i
			return (r = i = void 0), (f = y), (o = t.apply(C, m)), o
		}
		function g(y) {
			return (f = y), (a = setTimeout($, n)), l ? d(y) : o
		}
		function p(y) {
			var m = y - u,
				C = y - f,
				q = n - m
			return c ? Vg(q, s - C) : q
		}
		function x(y) {
			var m = y - u,
				C = y - f
			return u === void 0 || m >= n || m < 0 || (c && C >= s)
		}
		function $() {
			var y = Rr()
			if (x(y)) return v(y)
			a = setTimeout($, p(y))
		}
		function v(y) {
			return (a = void 0), h && r ? d(y) : ((r = i = void 0), o)
		}
		function _() {
			a !== void 0 && clearTimeout(a), (f = 0), (r = u = i = a = void 0)
		}
		function b() {
			return a === void 0 ? o : v(Rr())
		}
		function N() {
			var y = Rr(),
				m = x(y)
			if (((r = arguments), (i = this), (u = y), m)) {
				if (a === void 0) return g(u)
				if (c) return clearTimeout(a), (a = setTimeout($, n)), d(u)
			}
			return a === void 0 && (a = setTimeout($, n)), o
		}
		return (N.cancel = _), (N.flush = b), N
	}
	const Ug = (t) => (
			M.pushScopeId('data-v-974e8b18'), (t = t()), M.popScopeId(), t
		),
		Yg = { class: 'wrapper-venn' },
		Gg = [Ug(() => M.createElementVNode('div', { id: 'venn' }, null, -1))],
		Wg = M.defineComponent({ name: 'VennChart' }),
		Kg = M.defineComponent({
			...Wg,
			props: {
				data: { default: () => [] },
				colors: { default: () => [] },
				legend: { default: () => [] },
				strokeWidth: { default: 3 },
				strokeColor: { default: '#f6cd61' },
				tooltipOffsetX: { default: 20 },
				tooltipOffsetY: { default: 10 },
				tooltipOpacity: { default: 0.9 },
				tooltipDelay: { default: 300 },
				textColor: { default: '#fff' }
			},
			emits: ['clickItem'],
			setup(t, { emit: n }) {
				const e = t
				M.useCssVars((l) => ({ '201b62ce': a.value }))
				const r = M.ref(0),
					i = M.ref(0),
					s = [
						'#96ceb4',
						'#ffeead',
						'#ff6f69',
						'#ffcc5c',
						'#88d8b0',
						'#ee4035',
						'#f37736',
						'#fdf498',
						'#7bc043',
						'#0392cf'
					],
					o = M.computed({
						get() {
							return e.colors.length < e.data.length
								? [...e.colors, ...s]
								: e.colors
						},
						set(l) {
							o.value = l
						}
					})
				M.watch(
					[() => e.data, () => e.legend],
					() => {
						Kt('#venn').select('svg').remove() && f()
					},
					{ deep: !0 }
				)
				const a = M.ref(''),
					u = M.ref()
				function f() {
					if (!u.value) {
						console.warn('请检查是否存在图表容器dom节点,并设置好宽高')
						return
					}
					const l = document.getElementsByClassName('custom-venn-chart-tooltip')
					for (const g of l) g.remove()
					;(r.value = u.value.getBoundingClientRect().width),
						(i.value = u.value.getBoundingClientRect().height)
					const c = Kt('#venn'),
						h = fg({ symmetricalTextCentre: !1 }).width(r.value).height(i.value)
					c.datum(e.data).call(h),
						c
							.selectAll('g path')
							.style('fill', function (g, p) {
								return o.value[p]
							})
							.style('fill-opacity', 0.7)
							.style('stroke-opacity', 0)
							.style('stroke-width', e.strokeWidth)
							.style('stroke', e.strokeColor),
						c
							.selectAll('text')
							.style('fill', e.textColor)
							.style('font-size', '20px')
							.style('font-weight', '700')
					const d = Kt('body .wrapper-venn')
						.append('div')
						.attr('class', 'custom-venn-chart-tooltip')
					c.selectAll('g')
						.on('mouseover', function (g, p) {
							;(a.value = o.value[p]),
								d
									.transition()
									.duration(e.tooltipDelay)
									.style('opacity', e.tooltipOpacity),
								d.text(`${e.legend[p]} ${g.label}`),
								Kt(this)
									.transition('tooltip')
									.duration(e.tooltipDelay)
									.select('path')
									.style('stroke-opacity', 1)
									.style('fill-opacity', 1)
									.style('fill', o.value[p])
						})
						.on('mousemove', function (g, p) {
							d.style('left', Gt.pageX + e.tooltipOffsetX + 'px').style(
								'top',
								Gt.pageY + e.tooltipOffsetY + 'px'
							)
						})
						.on('mouseout', function (g, p) {
							d.transition().duration(e.tooltipDelay).style('opacity', 0),
								Kt(this)
									.transition('tooltip')
									.duration(e.tooltipDelay)
									.select('path')
									.style('stroke-opacity', 0)
									.style('fill-opacity', 0.7)
									.style('fill', o.value[p])
						})
						.on('mousedown', function (g) {
							n('clickItem', g)
						})
				}
				return (
					M.onMounted(() => {
						const { ctx: l } = M.getCurrentInstance()
						;(u.value = l.$el),
							f(),
							window.addEventListener('resize', Co(f, 500))
					}),
					M.onUnmounted(() => {
						window.removeEventListener('resize', Co(f, 500))
					}),
					(l, c) => (M.openBlock(), M.createElementBlock('div', Yg, Gg))
				)
			}
		}),
		tx = '',
		vn = ((t, n) => {
			const e = t.__vccOpts || t
			for (const [r, i] of n) e[r] = i
			return e
		})(Kg, [['__scopeId', 'data-v-974e8b18']])
	;(vn.install = (t) => {
		t.component(vn.name, vn)
	}),
		(ot.VennChart = vn),
		(ot.default = vn),
		Object.defineProperties(ot, {
			__esModule: { value: !0 },
			[Symbol.toStringTag]: { value: 'Module' }
		})
})
