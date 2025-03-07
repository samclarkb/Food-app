/*!
 * routie - a tiny hash router
 * v0.3.2
 * http://projects.jga.me/routie
 * copyright Greg Allen 2016
 * MIT License
 */
var Routie = function (a, b) {
	var c = [],
		d = {},
		e = 'routie',
		f = a[e],
		g = function (a, b) {
			;(this.name = b),
				(this.path = a),
				(this.keys = []),
				(this.fns = []),
				(this.params = {}),
				(this.regex = h(this.path, this.keys, !1, !1))
		}
	;(g.prototype.addHandler = function (a) {
		this.fns.push(a)
	}),
		(g.prototype.removeHandler = function (a) {
			for (var b = 0, c = this.fns.length; c > b; b++) {
				var d = this.fns[b]
				if (a == d) return void this.fns.splice(b, 1)
			}
		}),
		(g.prototype.run = function (a) {
			for (var b = 0, c = this.fns.length; c > b; b++) this.fns[b].apply(this, a)
		}),
		(g.prototype.match = function (a, b) {
			var c = this.regex.exec(a)
			if (!c) return !1
			for (var d = 1, e = c.length; e > d; ++d) {
				var f = this.keys[d - 1],
					g = 'string' == typeof c[d] ? decodeURIComponent(c[d]) : c[d]
				f && (this.params[f.name] = g), b.push(g)
			}
			return !0
		}),
		(g.prototype.toURL = function (a) {
			var b = this.path
			for (var c in a) b = b.replace('/:' + c, '/' + a[c])
			if (((b = b.replace(/\/:.*\?/g, '/').replace(/\?/g, '')), -1 != b.indexOf(':')))
				throw new Error('missing parameters for url: ' + b)
			return b
		})
	var h = function (a, b, c, d) {
			return a instanceof RegExp
				? a
				: (a instanceof Array && (a = '(' + a.join('|') + ')'),
				  (a = a
						.concat(d ? '' : '/?')
						.replace(/\/\(/g, '(?:/')
						.replace(/\+/g, '__plus__')
						.replace(
							/(\/)?(\.)?:(\w+)(?:(\(.*?\)))?(\?)?/g,
							function (a, c, d, e, f, g) {
								return (
									b.push({ name: e, optional: !!g }),
									(c = c || ''),
									'' +
										(g ? '' : c) +
										'(?:' +
										(g ? c : '') +
										(d || '') +
										(f || (d && '([^/.]+?)') || '([^/]+?)') +
										')' +
										(g || '')
								)
							}
						)
						.replace(/([\/.])/g, '\\$1')
						.replace(/__plus__/g, '(.+)')
						.replace(/\*/g, '(.*)')),
				  new RegExp('^' + a + '$', c ? '' : 'i'))
		},
		i = function (a, b) {
			var e = a.split(' '),
				f = 2 == e.length ? e[0] : null
			;(a = 2 == e.length ? e[1] : e[0]),
				d[a] || ((d[a] = new g(a, f)), c.push(d[a])),
				d[a].addHandler(b)
		},
		j = function (a, b) {
			if ('function' == typeof b) i(a, b), j.reload()
			else if ('object' == typeof a) {
				for (var c in a) i(c, a[c])
				j.reload()
			} else 'undefined' == typeof b && j.navigate(a)
		}
	;(j.lookup = function (a, b) {
		for (var d = 0, e = c.length; e > d; d++) {
			var f = c[d]
			if (f.name == a) return f.toURL(b)
		}
	}),
		(j.remove = function (a, b) {
			var c = d[a]
			c && c.removeHandler(b)
		}),
		(j.removeAll = function () {
			;(d = {}), (c = [])
		}),
		(j.navigate = function (a, b) {
			b = b || {}
			var c = b.silent || !1
			c && o(),
				setTimeout(function () {
					;(window.location.hash = a),
						c &&
							setTimeout(function () {
								n()
							}, 1)
				}, 1)
		}),
		(j.noConflict = function () {
			return (a[e] = f), j
		})
	var k = function () {
			return window.location.hash.substring(1)
		},
		l = function (a, b) {
			var c = []
			return b.match(a, c) ? (b.run(c), !0) : !1
		},
		m = (j.reload = function () {
			for (var a = k(), b = 0, d = c.length; d > b; b++) {
				var e = c[b]
				if (l(a, e)) return
			}
		}),
		n = function () {
			a.addEventListener
				? a.addEventListener('hashchange', m, !1)
				: a.attachEvent('onhashchange', m)
		},
		o = function () {
			a.removeEventListener
				? a.removeEventListener('hashchange', m)
				: a.detachEvent('onhashchange', m)
		}
	return n(), b ? j : void (a[e] = j)
}
'undefined' == typeof module ? Routie(window) : (module.exports = Routie(window, !0))
