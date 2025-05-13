'use strict';
var DF_Ma;

function DF_Maa(a) {
    var b = 0;
    return function () {
        return b < a.length ? {
            done: !1,
            value: a[b++]
        } : {
            done: !0
        }
    }
}
var DF_Mba = typeof Object.defineProperties == "function" ? Object.defineProperty : function (a, b, c) {
    if (a == Array.prototype || a == Object.prototype) return a;
    a[b] = c.value;
    return a
};

function DF_Mca(a) {
    a = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
    for (var b = 0; b < a.length; ++b) {
        var c = a[b];
        if (c && c.Math == Math) return c
    }
    throw Error("Cannot find global object");
}
var DF_Mb = DF_Mca(this);

function DF_Mc(a, b) {
    if (b) a: {
        var c = DF_Mb; a = a.split(".");
        for (var d = 0; d < a.length - 1; d++) {
            var e = a[d];
            if (!(e in c)) break a;
            c = c[e]
        }
        a = a[a.length - 1]; d = c[a]; b = b(d); b != d && b != null && DF_Mba(c, a, {
            configurable: !0,
            writable: !0,
            value: b
        })
    }
}
DF_Mc("Symbol", function (a) {
    function b(h) {
        if (this instanceof b) throw new TypeError("Symbol is not a constructor");
        return new c(d + (h || "") + "_" + e++, h)
    }

    function c(h, g) {
        this.g = h;
        DF_Mba(this, "description", {
            configurable: !0,
            writable: !0,
            value: g
        })
    }
    if (a) return a;
    c.prototype.toString = function () {
        return this.g
    };
    var d = "jscomp_symbol_" + (Math.random() * 1E9 >>> 0) + "_",
        e = 0;
    return b
});
DF_Mc("Symbol.iterator", function (a) {
    if (a) return a;
    a = Symbol("Symbol.iterator");
    for (var b = "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "), c = 0; c < b.length; c++) {
        var d = DF_Mb[b[c]];
        typeof d === "function" && typeof d.prototype[a] != "function" && DF_Mba(d.prototype, a, {
            configurable: !0,
            writable: !0,
            value: function () {
                return DF_Mda(DF_Maa(this))
            }
        })
    }
    return a
});

function DF_Mda(a) {
    a = {
        next: a
    };
    a[Symbol.iterator] = function () {
        return this
    };
    return a
}
var DF_Mea = typeof Object.create == "function" ? Object.create : function (a) {
    function b() { }
    b.prototype = a;
    return new b
},
    DF_Mfa = function () {
        function a() {
            function c() { }
            new c;
            Reflect.construct(c, [], function () { });
            return new c instanceof c
        }
        if (typeof Reflect != "undefined" && Reflect.construct) {
            if (a()) return Reflect.construct;
            var b = Reflect.construct;
            return function (c, d, e) {
                c = b(c, d);
                e && Reflect.setPrototypeOf(c, e.prototype);
                return c
            }
        }
        return function (c, d, e) {
            e === void 0 && (e = c);
            e = DF_Mea(e.prototype || Object.prototype);
            return Function.prototype.apply.call(c,
                e, d) || e
        }
    }(),
    DF_Mga;
if (typeof Object.setPrototypeOf == "function") DF_Mga = Object.setPrototypeOf;
else {
    var DF_Mha;
    a: {
        var DF_Mia = {
            a: !0
        },
            DF_Mja = {};
        try {
            DF_Mja.__proto__ = DF_Mia;
            DF_Mha = DF_Mja.a;
            break a
        } catch (a) { }
        DF_Mha = !1
    }
    DF_Mga = DF_Mha ? function (a, b) {
        a.__proto__ = b;
        if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
        return a
    } : null
}
var DF_Mka = DF_Mga;

function DF_Md(a, b) {
    a.prototype = DF_Mea(b.prototype);
    a.prototype.constructor = a;
    if (DF_Mka) DF_Mka(a, b);
    else
        for (var c in b)
            if (c != "prototype")
                if (Object.defineProperties) {
                    var d = Object.getOwnPropertyDescriptor(b, c);
                    d && Object.defineProperty(a, c, d)
                } else a[c] = b[c];
    a.vb = b.prototype
}

function DF_Me(a) {
    var b = typeof Symbol != "undefined" && Symbol.iterator && a[Symbol.iterator];
    if (b) return b.call(a);
    if (typeof a.length == "number") return {
        next: DF_Maa(a)
    };
    throw Error(String(a) + " is not an iterable or ArrayLike");
}

function DF_Mf(a) {
    if (!(a instanceof Array)) {
        a = DF_Me(a);
        for (var b, c = []; !(b = a.next()).done;) c.push(b.value);
        a = c
    }
    return a
}

function DF_Mg(a) {
    return DF_Mla(a, a)
}

function DF_Mla(a, b) {
    a.raw = b;
    Object.freeze && (Object.freeze(a), Object.freeze(b));
    return a
}

function DF_Mh(a, b) {
    return Object.prototype.hasOwnProperty.call(a, b)
}
var DF_Mma = typeof Object.assign == "function" ? Object.assign : function (a, b) {
    for (var c = 1; c < arguments.length; c++) {
        var d = arguments[c];
        if (d)
            for (var e in d) DF_Mh(d, e) && (a[e] = d[e])
    }
    return a
};
DF_Mc("Object.assign", function (a) {
    return a || DF_Mma
});

function DF_Mna() {
    this.j = !1;
    this.h = null;
    this.N = void 0;
    this.g = 1;
    this.G = this.F = 0;
    this.i = null
}

function DF_Moa(a) {
    if (a.j) throw new TypeError("Generator is already running");
    a.j = !0
}
DF_Mna.prototype.J = function (a) {
    this.N = a
};

function DF_Mpa(a, b) {
    a.i = {
        Ua: b,
        qb: !0
    };
    a.g = a.F || a.G
}
DF_Mna.prototype.return = function (a) {
    this.i = {
        return: a
    };
    this.g = this.G
};

function DF_Mqa(a) {
    this.g = new DF_Mna;
    this.h = a
}

function DF_Mra(a, b) {
    DF_Moa(a.g);
    var c = a.g.h;
    if (c) return DF_Msa(a, "return" in c ? c["return"] : function (d) {
        return {
            value: d,
            done: !0
        }
    }, b, a.g.return);
    a.g.return(b);
    return DF_Mta(a)
}

function DF_Msa(a, b, c, d) {
    try {
        var e = b.call(a.g.h, c);
        if (!(e instanceof Object)) throw new TypeError("Iterator result " + e + " is not an object");
        if (!e.done) return a.g.j = !1, e;
        var h = e.value
    } catch (g) {
        return a.g.h = null, DF_Mpa(a.g, g), DF_Mta(a)
    }
    a.g.h = null;
    d.call(a.g, h);
    return DF_Mta(a)
}

function DF_Mta(a) {
    for (; a.g.g;) try {
        var b = a.h(a.g);
        if (b) return a.g.j = !1, {
            value: b.value,
            done: !1
        }
    } catch (c) {
        a.g.N = void 0, DF_Mpa(a.g, c)
    }
    a.g.j = !1;
    if (a.g.i) {
        b = a.g.i;
        a.g.i = null;
        if (b.qb) throw b.Ua;
        return {
            value: b.return,
            done: !0
        }
    }
    return {
        value: void 0,
        done: !0
    }
}

function DF_Mua(a) {
    this.next = function (b) {
        DF_Moa(a.g);
        a.g.h ? b = DF_Msa(a, a.g.h.next, b, a.g.J) : (a.g.J(b), b = DF_Mta(a));
        return b
    };
    this.throw = function (b) {
        DF_Moa(a.g);
        a.g.h ? b = DF_Msa(a, a.g.h["throw"], b, a.g.J) : (DF_Mpa(a.g, b), b = DF_Mta(a));
        return b
    };
    this.return = function (b) {
        return DF_Mra(a, b)
    };
    this[Symbol.iterator] = function () {
        return this
    }
}

function DF_Mva(a) {
    function b(d) {
        return a.next(d)
    }

    function c(d) {
        return a.throw(d)
    }
    return new Promise(function (d, e) {
        function h(g) {
            g.done ? d(g.value) : Promise.resolve(g.value).then(b, c).then(h, e)
        }
        h(a.next())
    })
}

function DF_Mwa() {
    for (var a = Number(this), b = [], c = a; c < arguments.length; c++) b[c - a] = arguments[c];
    return b
}
DF_Mc("globalThis", function (a) {
    return a || DF_Mb
});
DF_Mc("Reflect", function (a) {
    return a ? a : {}
});
DF_Mc("Reflect.construct", function () {
    return DF_Mfa
});
DF_Mc("Reflect.setPrototypeOf", function (a) {
    return a ? a : DF_Mka ? function (b, c) {
        try {
            return DF_Mka(b, c), !0
        } catch (d) {
            return !1
        }
    } : null
});
DF_Mc("Promise", function (a) {
    function b(g) {
        this.h = 0;
        this.i = void 0;
        this.g = [];
        this.G = !1;
        var f = this.j();
        try {
            g(f.resolve, f.reject)
        } catch (k) {
            f.reject(k)
        }
    }

    function c() {
        this.g = null
    }

    function d(g) {
        return g instanceof b ? g : new b(function (f) {
            f(g)
        })
    }
    if (a) return a;
    c.prototype.h = function (g) {
        if (this.g == null) {
            this.g = [];
            var f = this;
            this.i(function () {
                f.F()
            })
        }
        this.g.push(g)
    };
    var e = DF_Mb.setTimeout;
    c.prototype.i = function (g) {
        e(g, 0)
    };
    c.prototype.F = function () {
        for (; this.g && this.g.length;) {
            var g = this.g;
            this.g = [];
            for (var f = 0; f <
                g.length; ++f) {
                var k = g[f];
                g[f] = null;
                try {
                    k()
                } catch (l) {
                    this.j(l)
                }
            }
        }
        this.g = null
    };
    c.prototype.j = function (g) {
        this.i(function () {
            throw g;
        })
    };
    b.prototype.j = function () {
        function g(l) {
            return function (n) {
                k || (k = !0, l.call(f, n))
            }
        }
        var f = this,
            k = !1;
        return {
            resolve: g(this.na),
            reject: g(this.F)
        }
    };
    b.prototype.na = function (g) {
        if (g === this) this.F(new TypeError("A Promise cannot resolve to itself"));
        else if (g instanceof b) this.Aa(g);
        else {
            a: switch (typeof g) {
                case "object":
                    var f = g != null;
                    break a;
                case "function":
                    f = !0;
                    break a;
                default:
                    f = !1
            }
            f ? this.ea(g) : this.J(g)
        }
    };
    b.prototype.ea = function (g) {
        var f = void 0;
        try {
            f = g.then
        } catch (k) {
            this.F(k);
            return
        }
        typeof f == "function" ? this.Ba(f, g) : this.J(g)
    };
    b.prototype.F = function (g) {
        this.N(2, g)
    };
    b.prototype.J = function (g) {
        this.N(1, g)
    };
    b.prototype.N = function (g, f) {
        if (this.h != 0) throw Error("Cannot settle(" + g + ", " + f + "): Promise already settled in state" + this.h);
        this.h = g;
        this.i = f;
        this.h === 2 && this.za();
        this.Z()
    };
    b.prototype.za = function () {
        var g = this;
        e(function () {
            if (g.ba()) {
                var f = DF_Mb.console;
                typeof f !== "undefined" &&
                    f.error(g.i)
            }
        }, 1)
    };
    b.prototype.ba = function () {
        if (this.G) return !1;
        var g = DF_Mb.CustomEvent,
            f = DF_Mb.Event,
            k = DF_Mb.dispatchEvent;
        if (typeof k === "undefined") return !0;
        typeof g === "function" ? g = new g("unhandledrejection", {
            cancelable: !0
        }) : typeof f === "function" ? g = new f("unhandledrejection", {
            cancelable: !0
        }) : (g = DF_Mb.document.createEvent("CustomEvent"), g.initCustomEvent("unhandledrejection", !1, !0, g));
        g.promise = this;
        g.reason = this.i;
        return k(g)
    };
    b.prototype.Z = function () {
        if (this.g != null) {
            for (var g = 0; g < this.g.length; ++g) h.h(this.g[g]);
            this.g = null
        }
    };
    var h = new c;
    b.prototype.Aa = function (g) {
        var f = this.j();
        g.qa(f.resolve, f.reject)
    };
    b.prototype.Ba = function (g, f) {
        var k = this.j();
        try {
            g.call(f, k.resolve, k.reject)
        } catch (l) {
            k.reject(l)
        }
    };
    b.prototype.then = function (g, f) {
        function k(p, q) {
            return typeof p == "function" ? function (r) {
                try {
                    l(p(r))
                } catch (u) {
                    n(u)
                }
            } : q
        }
        var l, n, m = new b(function (p, q) {
            l = p;
            n = q
        });
        this.qa(k(g, l), k(f, n));
        return m
    };
    b.prototype.catch = function (g) {
        return this.then(void 0, g)
    };
    b.prototype.qa = function (g, f) {
        function k() {
            switch (l.h) {
                case 1:
                    g(l.i);
                    break;
                case 2:
                    f(l.i);
                    break;
                default:
                    throw Error("Unexpected state: " + l.h);
            }
        }
        var l = this;
        this.g == null ? h.h(k) : this.g.push(k);
        this.G = !0
    };
    b.resolve = d;
    b.reject = function (g) {
        return new b(function (f, k) {
            k(g)
        })
    };
    b.race = function (g) {
        return new b(function (f, k) {
            for (var l = DF_Me(g), n = l.next(); !n.done; n = l.next()) d(n.value).qa(f, k)
        })
    };
    b.all = function (g) {
        var f = DF_Me(g),
            k = f.next();
        return k.done ? d([]) : new b(function (l, n) {
            function m(r) {
                return function (u) {
                    p[r] = u;
                    q--;
                    q == 0 && l(p)
                }
            }
            var p = [],
                q = 0;
            do p.push(void 0), q++, d(k.value).qa(m(p.length -
                1), n), k = f.next(); while (!k.done)
        })
    };
    return b
});
DF_Mc("Object.setPrototypeOf", function (a) {
    return a || DF_Mka
});

function DF_Mxa(a, b, c) {
    if (a == null) throw new TypeError("The 'this' value for String.prototype." + c + " must not be null or undefined");
    if (b instanceof RegExp) throw new TypeError("First argument to String.prototype." + c + " must not be a regular expression");
    return a + ""
}
DF_Mc("String.prototype.endsWith", function (a) {
    return a ? a : function (b, c) {
        var d = DF_Mxa(this, b, "endsWith");
        c === void 0 && (c = d.length);
        c = Math.max(0, Math.min(c | 0, d.length));
        for (var e = b.length; e > 0 && c > 0;)
            if (d[--c] != b[--e]) return !1;
        return e <= 0
    }
});
DF_Mc("WeakMap", function (a) {
    function b(k) {
        this.g = (f += Math.random() + 1).toString();
        if (k) {
            k = DF_Me(k);
            for (var l; !(l = k.next()).done;) l = l.value, this.set(l[0], l[1])
        }
    }

    function c() { }

    function d(k) {
        var l = typeof k;
        return l === "object" && k !== null || l === "function"
    }

    function e(k) {
        if (!DF_Mh(k, g)) {
            var l = new c;
            DF_Mba(k, g, {
                value: l
            })
        }
    }

    function h(k) {
        var l = Object[k];
        l && (Object[k] = function (n) {
            if (n instanceof c) return n;
            Object.isExtensible(n) && e(n);
            return l(n)
        })
    }
    if (function () {
        if (!a || !Object.seal) return !1;
        try {
            var k = Object.seal({}),
                l = Object.seal({}),
                n = new a([
                    [k, 2],
                    [l, 3]
                ]);
            if (n.get(k) != 2 || n.get(l) != 3) return !1;
            n.delete(k);
            n.set(l, 4);
            return !n.has(k) && n.get(l) == 4
        } catch (m) {
            return !1
        }
    }()) return a;
    var g = "$jscomp_hidden_" + Math.random();
    h("freeze");
    h("preventExtensions");
    h("seal");
    var f = 0;
    b.prototype.set = function (k, l) {
        if (!d(k)) throw Error("Invalid WeakMap key");
        e(k);
        if (!DF_Mh(k, g)) throw Error("WeakMap key fail: " + k);
        k[g][this.g] = l;
        return this
    };
    b.prototype.get = function (k) {
        return d(k) && DF_Mh(k, g) ? k[g][this.g] : void 0
    };
    b.prototype.has = function (k) {
        return d(k) &&
            DF_Mh(k, g) && DF_Mh(k[g], this.g)
    };
    b.prototype.delete = function (k) {
        return d(k) && DF_Mh(k, g) && DF_Mh(k[g], this.g) ? delete k[g][this.g] : !1
    };
    return b
});
DF_Mc("Map", function (a) {
    function b() {
        var f = {};
        return f.Y = f.next = f.head = f
    }

    function c(f, k) {
        var l = f[1];
        return DF_Mda(function () {
            if (l) {
                for (; l.head != f[1];) l = l.Y;
                for (; l.next != l.head;) return l = l.next, {
                    done: !1,
                    value: k(l)
                };
                l = null
            }
            return {
                done: !0,
                value: void 0
            }
        })
    }

    function d(f, k) {
        var l = k && typeof k;
        l == "object" || l == "function" ? h.has(k) ? l = h.get(k) : (l = "" + ++g, h.set(k, l)) : l = "p_" + k;
        var n = f[0][l];
        if (n && DF_Mh(f[0], l))
            for (f = 0; f < n.length; f++) {
                var m = n[f];
                if (k !== k && m.key !== m.key || k === m.key) return {
                    id: l,
                    list: n,
                    index: f,
                    L: m
                }
            }
        return {
            id: l,
            list: n,
            index: -1,
            L: void 0
        }
    }

    function e(f) {
        this[0] = {};
        this[1] = b();
        this.size = 0;
        if (f) {
            f = DF_Me(f);
            for (var k; !(k = f.next()).done;) k = k.value, this.set(k[0], k[1])
        }
    }
    if (function () {
        if (!a || typeof a != "function" || !a.prototype.entries || typeof Object.seal != "function") return !1;
        try {
            var f = Object.seal({
                x: 4
            }),
                k = new a(DF_Me([
                    [f, "s"]
                ]));
            if (k.get(f) != "s" || k.size != 1 || k.get({
                x: 4
            }) || k.set({
                x: 4
            }, "t") != k || k.size != 2) return !1;
            var l = k.entries(),
                n = l.next();
            if (n.done || n.value[0] != f || n.value[1] != "s") return !1;
            n = l.next();
            return n.done ||
                n.value[0].x != 4 || n.value[1] != "t" || !l.next().done ? !1 : !0
        } catch (m) {
            return !1
        }
    }()) return a;
    var h = new WeakMap;
    e.prototype.set = function (f, k) {
        f = f === 0 ? 0 : f;
        var l = d(this, f);
        l.list || (l.list = this[0][l.id] = []);
        l.L ? l.L.value = k : (l.L = {
            next: this[1],
            Y: this[1].Y,
            head: this[1],
            key: f,
            value: k
        }, l.list.push(l.L), this[1].Y.next = l.L, this[1].Y = l.L, this.size++);
        return this
    };
    e.prototype.delete = function (f) {
        f = d(this, f);
        return f.L && f.list ? (f.list.splice(f.index, 1), f.list.length || delete this[0][f.id], f.L.Y.next = f.L.next, f.L.next.Y =
            f.L.Y, f.L.head = null, this.size--, !0) : !1
    };
    e.prototype.clear = function () {
        this[0] = {};
        this[1] = this[1].Y = b();
        this.size = 0
    };
    e.prototype.has = function (f) {
        return !!d(this, f).L
    };
    e.prototype.get = function (f) {
        return (f = d(this, f).L) && f.value
    };
    e.prototype.entries = function () {
        return c(this, function (f) {
            return [f.key, f.value]
        })
    };
    e.prototype.keys = function () {
        return c(this, function (f) {
            return f.key
        })
    };
    e.prototype.values = function () {
        return c(this, function (f) {
            return f.value
        })
    };
    e.prototype.forEach = function (f, k) {
        for (var l = this.entries(),
            n; !(n = l.next()).done;) n = n.value, f.call(k, n[1], n[0], this)
    };
    e.prototype[Symbol.iterator] = e.prototype.entries;
    var g = 0;
    return e
});
DF_Mc("Set", function (a) {
    function b(c) {
        this.g = new Map;
        if (c) {
            c = DF_Me(c);
            for (var d; !(d = c.next()).done;) this.add(d.value)
        }
        this.size = this.g.size
    }
    if (function () {
        if (!a || typeof a != "function" || !a.prototype.entries || typeof Object.seal != "function") return !1;
        try {
            var c = Object.seal({
                x: 4
            }),
                d = new a(DF_Me([c]));
            if (!d.has(c) || d.size != 1 || d.add(c) != d || d.size != 1 || d.add({
                x: 4
            }) != d || d.size != 2) return !1;
            var e = d.entries(),
                h = e.next();
            if (h.done || h.value[0] != c || h.value[1] != c) return !1;
            h = e.next();
            return h.done || h.value[0] == c || h.value[0].x !=
                4 || h.value[1] != h.value[0] ? !1 : e.next().done
        } catch (g) {
            return !1
        }
    }()) return a;
    b.prototype.add = function (c) {
        c = c === 0 ? 0 : c;
        this.g.set(c, c);
        this.size = this.g.size;
        return this
    };
    b.prototype.delete = function (c) {
        c = this.g.delete(c);
        this.size = this.g.size;
        return c
    };
    b.prototype.clear = function () {
        this.g.clear();
        this.size = 0
    };
    b.prototype.has = function (c) {
        return this.g.has(c)
    };
    b.prototype.entries = function () {
        return this.g.entries()
    };
    b.prototype.values = function () {
        return this.g.values()
    };
    b.prototype.keys = b.prototype.values;
    b.prototype[Symbol.iterator] =
        b.prototype.values;
    b.prototype.forEach = function (c, d) {
        var e = this;
        this.g.forEach(function (h) {
            return c.call(d, h, h, e)
        })
    };
    return b
});
DF_Mc("Array.from", function (a) {
    return a ? a : function (b, c, d) {
        c = c != null ? c : function (f) {
            return f
        };
        var e = [],
            h = typeof Symbol != "undefined" && Symbol.iterator && b[Symbol.iterator];
        if (typeof h == "function") {
            b = h.call(b);
            for (var g = 0; !(h = b.next()).done;) e.push(c.call(d, h.value, g++))
        } else
            for (h = b.length, g = 0; g < h; g++) e.push(c.call(d, b[g], g));
        return e
    }
});

function DF_Mya(a, b) {
    a instanceof String && (a += "");
    var c = 0,
        d = !1,
        e = {
            next: function () {
                if (!d && c < a.length) {
                    var h = c++;
                    return {
                        value: b(h, a[h]),
                        done: !1
                    }
                }
                d = !0;
                return {
                    done: !0,
                    value: void 0
                }
            }
        };
    e[Symbol.iterator] = function () {
        return e
    };
    return e
}
DF_Mc("Array.prototype.keys", function (a) {
    return a ? a : function () {
        return DF_Mya(this, function (b) {
            return b
        })
    }
});
DF_Mc("Array.prototype.entries", function (a) {
    return a ? a : function () {
        return DF_Mya(this, function (b, c) {
            return [b, c]
        })
    }
});
DF_Mc("Object.entries", function (a) {
    return a ? a : function (b) {
        var c = [],
            d;
        for (d in b) DF_Mh(b, d) && c.push([d, b[d]]);
        return c
    }
});
DF_Mc("Object.is", function (a) {
    return a ? a : function (b, c) {
        return b === c ? b !== 0 || 1 / b === 1 / c : b !== b && c !== c
    }
});
DF_Mc("Array.prototype.includes", function (a) {
    return a ? a : function (b, c) {
        var d = this;
        d instanceof String && (d = String(d));
        var e = d.length;
        c = c || 0;
        for (c < 0 && (c = Math.max(c + e, 0)); c < e; c++) {
            var h = d[c];
            if (h === b || Object.is(h, b)) return !0
        }
        return !1
    }
});
DF_Mc("String.prototype.includes", function (a) {
    return a ? a : function (b, c) {
        return DF_Mxa(this, b, "includes").indexOf(b, c || 0) !== -1
    }
});
DF_Mc("Array.prototype.values", function (a) {
    return a ? a : function () {
        return DF_Mya(this, function (b, c) {
            return c
        })
    }
});
DF_Mc("String.prototype.startsWith", function (a) {
    return a ? a : function (b, c) {
        var d = DF_Mxa(this, b, "startsWith"),
            e = d.length,
            h = b.length;
        c = Math.max(0, Math.min(c | 0, d.length));
        for (var g = 0; g < h && c < e;)
            if (d[c++] != b[g++]) return !1;
        return g >= h
    }
});
DF_Mc("Array.prototype.fill", function (a) {
    return a ? a : function (b, c, d) {
        var e = this.length || 0;
        c < 0 && (c = Math.max(0, e + c));
        if (d == null || d > e) d = e;
        d = Number(d);
        d < 0 && (d = Math.max(0, e + d));
        for (c = Number(c || 0); c < d; c++) this[c] = b;
        return this
    }
});

function DF_Mi(a) {
    return a ? a : Array.prototype.fill
}
DF_Mc("Int8Array.prototype.fill", DF_Mi);
DF_Mc("Uint8Array.prototype.fill", DF_Mi);
DF_Mc("Uint8ClampedArray.prototype.fill", DF_Mi);
DF_Mc("Int16Array.prototype.fill", DF_Mi);
DF_Mc("Uint16Array.prototype.fill", DF_Mi);
DF_Mc("Int32Array.prototype.fill", DF_Mi);
DF_Mc("Uint32Array.prototype.fill", DF_Mi);
DF_Mc("Float32Array.prototype.fill", DF_Mi);
DF_Mc("Float64Array.prototype.fill", DF_Mi);
DF_Mc("Array.prototype.flat", function (a) {
    return a ? a : function (b) {
        b = b === void 0 ? 1 : b;
        var c = [];
        Array.prototype.forEach.call(this, function (d) {
            Array.isArray(d) && b > 0 ? (d = Array.prototype.flat.call(d, b - 1), c.push.apply(c, d)) : c.push(d)
        });
        return c
    }
});
/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var DF_Mj = this || self;

function DF_Mza(a, b, c) {
    return a.call.apply(a.bind, arguments)
}

function DF_MAa(a, b, c) {
    if (!a) throw Error();
    if (arguments.length > 2) {
        var d = Array.prototype.slice.call(arguments, 2);
        return function () {
            var e = Array.prototype.slice.call(arguments);
            Array.prototype.unshift.apply(e, d);
            return a.apply(b, e)
        }
    }
    return function () {
        return a.apply(b, arguments)
    }
}

function DF_MBa(a, b, c) {
    DF_MBa = Function.prototype.bind && Function.prototype.bind.toString().indexOf("native code") != -1 ? DF_Mza : DF_MAa;
    return DF_MBa.apply(null, arguments)
}

function DF_MCa(a, b) {
    var c = Array.prototype.slice.call(arguments, 1);
    return function () {
        var d = c.slice();
        d.push.apply(d, arguments);
        return a.apply(this, d)
    }
}

function DF_MDa(a, b) {
    function c() { }
    c.prototype = b.prototype;
    a.vb = b.prototype;
    a.prototype = new c;
    a.prototype.constructor = a;
    a.yb = function (d, e, h) {
        for (var g = Array(arguments.length - 2), f = 2; f < arguments.length; f++) g[f - 2] = arguments[f];
        return b.prototype[e].apply(d, g)
    }
};

function DF_Mk(a, b, c, d) {
    var e = arguments.length,
        h = e < 3 ? b : d === null ? d = Object.getOwnPropertyDescriptor(b, c) : d,
        g;
    if (Reflect && typeof Reflect === "object" && typeof Reflect.decorate === "function") h = Reflect.decorate(a, b, c, d);
    else
        for (var f = a.length - 1; f >= 0; f--)
            if (g = a[f]) h = (e < 3 ? g(h) : e > 3 ? g(b, c, h) : g(b, c)) || h;
    return e > 3 && h && Object.defineProperty(b, c, h), h
}

function DF_Ml(a, b) {
    if (Reflect && typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(a, b)
};
/*

 Copyright 2017 Google LLC
 SPDX-License-Identifier: BSD-3-Clause
*/
var DF_MEa = new Set,
    DF_MFa = new Map;

function DF_MGa(a, b) {
    if (window.ShadyCSS !== void 0 && (!window.ShadyCSS.nativeShadow || window.ShadyCSS.ApplyShim)) {
        var c, d, e = ((c = window.ShadyDOM) == null ? 0 : c.inUse) && ((d = window.ShadyDOM) == null ? void 0 : d.noPatch) === !0 ? window.ShadyDOM.wrap : function (m) {
            return m
        },
            h = function (m) {
                var p = DF_MFa.get(m);
                p === void 0 && DF_MFa.set(m, p = []);
                return p
            },
            g = new Map,
            f = a.createElement;
        a.createElement = function (m, p) {
            m = f.call(a, m, p);
            p = p == null ? void 0 : p.scope;
            p !== void 0 && (window.ShadyCSS.nativeShadow || window.ShadyCSS.prepareTemplateDom(m,
                p), p === void 0 || DF_MEa.has(p) || (p = h(p), p.push.apply(p, DF_Mf(Array.from(m.content.querySelectorAll("style")).map(function (q) {
                    var r;
                    (r = q.parentNode) == null || r.removeChild(q);
                    return q.textContent
                })))));
            return m
        };
        var k = document.createDocumentFragment(),
            l = document.createComment("");
        b = b.prototype;
        var n = b.W;
        b.W = function (m, p) {
            p = p === void 0 ? this : p;
            var q = e(this.X).parentNode,
                r, u = (r = this.options) == null ? void 0 : r.scope,
                v;
            if ((q instanceof ShadowRoot || q === ((v = this.options) == null ? void 0 : v.Hb)) && u !== void 0 && !DF_MEa.has(u)) {
                r =
                    this.X;
                v = this.fa;
                k.appendChild(l);
                this.X = l;
                this.fa = null;
                n.call(this, m, p);
                m = (m == null ? 0 : m._$litType$) ? this.D.Ha.ha : document.createElement("template");
                p = h(u);
                var t = p.length !== 0;
                if (t) {
                    var x = document.createElement("style");
                    x.textContent = p.join("\n");
                    m.content.appendChild(x)
                }
                DF_MEa.add(u);
                DF_MFa.delete(u);
                window.ShadyCSS.prepareTemplateStyles(m, u);
                t && window.ShadyCSS.nativeShadow && (u = m.content.querySelector("style"), u !== null && m.content.appendChild(u));
                k.removeChild(l);
                var w;
                if ((w = window.ShadyCSS) == null ?
                    0 : w.nativeShadow) w = m.content.querySelector("style"), w !== null && k.appendChild(w.cloneNode(!0));
                q.insertBefore(k, v);
                this.X = r;
                this.fa = v
            } else n.call(this, m, p)
        };
        b.Qa = function (m) {
            var p, q = (p = this.options) == null ? void 0 : p.scope;
            p = g.get(q);
            p === void 0 && g.set(q, p = new Map);
            q = p.get(m.M);
            q === void 0 && p.set(m.M, q = new a(m, this.options));
            return q
        }
    }
}
var DF_MHa;
(DF_MHa = window).litHtmlPolyfillSupport != null || (DF_MHa.litHtmlPolyfillSupport = DF_MGa);
var DF_MIa = "";
if (window.Symbol) {
    var DF_MJa = Symbol();
    typeof DF_MJa !== "symbol" && (DF_MIa = Object.keys(DF_MJa)[0])
}
var DF_MKa = DF_MIa !== "",
    DF_MLa = DF_MKa ? function (a) {
        return a != null && a[DF_MIa] !== void 0
    } : function () {
        return !1
    };
if (DF_MKa && !window.Symbol.for) {
    var DF_MMa = new Map;
    window.Symbol.for = function (a) {
        DF_MMa.has(a) || DF_MMa.set(a, Symbol(a));
        return DF_MMa.get(a)
    }
};

function DF_MNa(a) {
    if (window.ShadyCSS !== void 0 && (!window.ShadyCSS.nativeShadow || window.ShadyCSS.ApplyShim)) {
        a = a.ReactiveElement.prototype;
        window.ShadyDOM && window.ShadyDOM.inUse && window.ShadyDOM.noPatch === !0 && window.ShadyDOM.patchElementProto(a);
        var b = a.O;
        a.O = function () {
            var e = this.localName;
            if (window.ShadyCSS.nativeShadow) return b.call(this);
            if (!this.constructor.hasOwnProperty("__scoped")) {
                this.constructor.__scoped = !0;
                var h = this.constructor.l.map(function (l) {
                    return l instanceof CSSStyleSheet ? Array.from(l.cssRules).reduce(function (n,
                        m) {
                        return n + m.cssText
                    }, "") : l.cssText
                }),
                    g, f;
                (g = window.ShadyCSS) == null || (f = g.ScopingShim) == null || f.prepareAdoptedCssText(h, e);
                this.constructor.Ya === void 0 && window.ShadyCSS.prepareTemplateStyles(document.createElement("template"), e)
            }
            var k;
            return (k = this.shadowRoot) != null ? k : this.attachShadow(this.constructor.v)
        };
        var c = a.connectedCallback;
        a.connectedCallback = function () {
            c.call(this);
            this.ia && window.ShadyCSS.styleElement(this)
        };
        var d = a.Ga;
        a.Ga = function (e) {
            this.ia || window.ShadyCSS.styleElement(this);
            d.call(this,
                e)
        }
    }
}
var DF_MOa;
(DF_MOa = window).reactiveElementPolyfillSupport != null || (DF_MOa.reactiveElementPolyfillSupport = DF_MNa);

function DF_MPa(a) {
    a = a.LitElement;
    if (window.ShadyCSS !== void 0 && (!window.ShadyCSS.nativeShadow || window.ShadyCSS.ApplyShim)) {
        a.Ya = !0;
        a = a.prototype;
        var b = a.O;
        a.O = function () {
            this.wa.scope = this.localName;
            return b.call(this)
        }
    }
}
var DF_MQa;
(DF_MQa = window).litElementPolyfillSupport != null || (DF_MQa.litElementPolyfillSupport = DF_MPa);
/*

 Copyright Google LLC
 SPDX-License-Identifier: Apache-2.0
*/
var DF_MRa = globalThis.trustedTypes,
    DF_MSa = DF_MRa,
    DF_MTa;

function DF_MUa() {
    var a = null;
    if (!DF_MSa) return a;
    try {
        var b = function (c) {
            return c
        };
        a = DF_MSa.createPolicy("goog#html", {
            createHTML: b,
            createScript: b,
            createScriptURL: b
        })
    } catch (c) { }
    return a
}

function DF_MVa() {
    DF_MTa === void 0 && (DF_MTa = DF_MUa());
    return DF_MTa
};

function DF_MWa(a) {
    this.g = a
}
DF_MWa.prototype.toString = function () {
    return this.g + ""
};

function DF_MXa(a) {
    var b = DF_MVa();
    return new DF_MWa(b ? b.createHTML(a) : a)
}
var DF_MYa = new DF_MWa(DF_MRa ? DF_MRa.emptyHTML : "");

function DF_Mm(a) {
    if (a instanceof DF_MWa) return a.g;
    throw Error("");
};

function DF_MZa(a) {
    this.g = a
}
DF_MZa.prototype.toString = function () {
    return this.g
};

function DF_M_a(a) {
    if (a instanceof DF_MZa) return a.g;
    throw Error("");
};

function DF_M0a(a) {
    this.g = a
}
DF_M0a.prototype.toString = function () {
    return this.g + ""
};

function DF_M1a(a) {
    var b = DF_MVa();
    return new DF_M0a(b ? b.createScriptURL(a) : a)
}

function DF_M2a(a) {
    if (a instanceof DF_M0a) return a.g;
    throw Error("");
};

function DF_M3a(a) {
    this.g = a
}
DF_M3a.prototype.toString = function () {
    return this.g
};
var DF_M4a = new DF_M3a("about:invalid#zClosurez");

function DF_M5a(a) {
    if (a instanceof DF_M3a) return a.g;
    throw Error("");
};

function DF_M6a(a) {
    this.rb = a
}

function DF_M7a(a) {
    return new DF_M6a(function (b) {
        return b.substr(0, a.length + 1).toLowerCase() === a + ":"
    })
}
var DF_M8a = [DF_M7a("data"), DF_M7a("http"), DF_M7a("https"), DF_M7a("mailto"), DF_M7a("ftp"), new DF_M6a(function (a) {
    return /^[^:]*([/?#]|$)/.test(a)
})];

function DF_M9a(a) {
    var b = b === void 0 ? DF_M8a : b;
    a: if (b = b === void 0 ? DF_M8a : b, !(a instanceof DF_M3a)) {
        for (var c = 0; c < b.length; ++c) {
            var d = b[c];
            if (d instanceof DF_M6a && d.rb(a)) {
                a = new DF_M3a(a);
                break a
            }
        }
        a = void 0
    }
    return a || DF_M4a
}
var DF_M$a = /^\s*(?!javascript:)(?:[\w+.-]+:|[^:/?#]*(?:[/?#]|$))/i;

function DF_Mab(a) {
    var b = DF_Mwa.apply(1, arguments);
    if (b.length === 0) return DF_M1a(a[0]);
    for (var c = a[0], d = 0; d < b.length; d++) c += encodeURIComponent(b[d]) + a[d + 1];
    return DF_M1a(c)
};
/*

 Copyright 2019 Google LLC
 SPDX-License-Identifier: BSD-3-Clause
*/
var DF_Mbb = DF_Mg(["about:invalid#zClosurez"]),
    DF_Mdb = DF_Mcb;

function DF_Mcb(a, b, c) {
    if (a.nodeType !== 1) return DF_Meb;
    b = b.toLowerCase();
    if (b === "innerhtml" || b === "innertext" || b === "textcontent" || b === "outerhtml") return function () {
        return DF_Mm(DF_MYa)
    };
    var d = DF_Mfb.get(a.tagName + " " + b);
    return d !== void 0 ? d : /^on/.test(b) && c === "attribute" && (a = a.tagName.includes("-") ? HTMLElement.prototype : a, b in a) ? function () {
        throw Error("invalid binding");
    } : DF_Meb
}
var DF_Mgb = /^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:\/?#]*(?:[\/?#]|$))/i,
    DF_Mhb = DF_M2a(DF_Mab(DF_Mbb));

function DF_Meb(a) {
    return a
}

function DF_Mib(a) {
    return DF_Mgb.test(String(a)) ? a : DF_Mhb
}

function DF_Mjb() {
    return DF_Mhb
}

function DF_Mkb(a) {
    return a instanceof DF_M0a ? DF_M2a(a) : DF_Mhb
}
var DF_Mfb = new Map([
    ["A href", DF_Mib],
    ["AREA href", DF_Mib],
    ["BASE href", DF_Mjb],
    ["BUTTON formaction", DF_Mib],
    ["EMBED src", DF_Mjb],
    ["FORM action", DF_Mib],
    ["FRAME src", DF_Mjb],
    ["IFRAME src", DF_Mkb],
    ["IFRAME srcdoc", function (a) {
        return a instanceof DF_MWa ? DF_Mm(a) : DF_Mm(DF_MYa)
    }],
    ["INPUT formaction", DF_Mib],
    ["LINK href", DF_Mkb],
    ["OBJECT codebase", DF_Mjb],
    ["OBJECT data", DF_Mjb],
    ["SCRIPT href", DF_Mkb],
    ["SCRIPT src", DF_Mkb],
    ["SCRIPT text", DF_Mjb],
    ["USE href", DF_Mkb]
]);
var DF_Mlb, DF_Mmb, DF_Mnb, DF_Mn = ((DF_Mlb = DF_Mj.ShadyDOM) == null ? 0 : DF_Mlb.inUse) && (((DF_Mmb = DF_Mj.ShadyDOM) == null ? void 0 : DF_Mmb.noPatch) === !0 || ((DF_Mnb = DF_Mj.ShadyDOM) == null ? void 0 : DF_Mnb.noPatch) === "on-demand") ? DF_Mj.ShadyDOM.wrap : function (a) {
    return a
},
    DF_Mob = DF_Mj.trustedTypes,
    DF_Mpb = DF_Mob ? DF_Mob.createPolicy("lit-html", {
        createHTML: function (a) {
            return a
        }
    }) : void 0;

function DF_Mqb(a) {
    return a
}

function DF_Mrb() {
    return DF_Mqb
}
var DF_Mo = "lit$" + Math.random().toFixed(9).slice(2) + "$",
    DF_Msb = "?" + DF_Mo,
    DF_Mtb = "<" + DF_Msb + ">",
    DF_Mp = document;

function DF_Mub(a) {
    return a === null || typeof a != "object" && typeof a != "function" || DF_MLa(a)
}
var DF_Mvb = Array.isArray,
    DF_Mwb = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,
    DF_Mxb = /--\x3e/g,
    DF_Myb = />/g,
    DF_Mq = RegExp(">|[ \t\n\f\r](?:([^\\s\"'>=/]+)([ \t\n\f\r]*=[ \t\n\f\r]*(?:[^ \t\n\f\r\"'`<>=]|(\"|')|))|$)", "g"),
    DF_Mzb = /'/g,
    DF_MAb = /"/g,
    DF_MBb = /^(?:script|style|textarea|title)$/i;

function DF_Mr(a) {
    var b = DF_Mwa.apply(1, arguments),
        c = {};
    return c._$litType$ = 1, c.M = a, c.values = b, c
}
var DF_Ms = Symbol.for ? Symbol.for("lit-noChange") : Symbol("lit-noChange"),
    DF_Mt = Symbol.for ? Symbol.for("lit-nothing") : Symbol("lit-nothing"),
    DF_MCb = new WeakMap,
    DF_Mu = DF_Mp.createTreeWalker(DF_Mp, 129);

function DF_MDb(a, b) {
    if (!DF_Mvb(a) || !a.hasOwnProperty("raw")) throw Error("invalid template strings array");
    return DF_Mpb !== void 0 ? DF_Mpb.createHTML(b) : b
}

function DF_MEb(a, b) {
    var c = a.M;
    var d = a._$litType$;
    this.g = [];
    for (var e = a = 0, h = c.length - 1, g = this.g, f = c.length - 1, k = [], l = d === 2 ? "<svg>" : d === 3 ? "<math>" : "", n, m = DF_Mwb, p = 0; p < f; p++) {
        for (var q = c[p], r = -1, u = void 0, v = 0, t; v < q.length;) {
            m.lastIndex = v;
            t = m.exec(q);
            if (t === null) break;
            v = m.lastIndex;
            m === DF_Mwb ? t[1] === "!--" ? m = DF_Mxb : t[1] !== void 0 ? m = DF_Myb : t[2] !== void 0 ? (DF_MBb.test(t[2]) && (n = new RegExp("</" + t[2], "g")), m = DF_Mq) : t[3] !== void 0 && (m = DF_Mq) : m === DF_Mq ? t[0] === ">" ? (r = void 0, m = (r = n) != null ? r : DF_Mwb, r = -1) : t[1] === void 0 ?
                r = -2 : (r = m.lastIndex - t[2].length, u = t[1], m = t[3] === void 0 ? DF_Mq : t[3] === '"' ? DF_MAb : DF_Mzb) : m === DF_MAb || m === DF_Mzb ? m = DF_Mq : m === DF_Mxb || m === DF_Myb ? m = DF_Mwb : (m = DF_Mq, n = void 0)
        }
        v = m === DF_Mq && c[p + 1].startsWith("/>") ? " " : "";
        l += m === DF_Mwb ? q + DF_Mtb : r >= 0 ? (k.push(u), q.slice(0, r) + "$lit$" + q.slice(r)) + DF_Mo + v : q + DF_Mo + (r === -2 ? p : v)
    }
    c = [DF_MDb(c, l + (c[f] || "<?>") + (d === 2 ? "</svg>" : d === 3 ? "</math>" : "")), k];
    c = DF_Me(c);
    n = c.next().value;
    c = c.next().value;
    this.ha = DF_MEb.createElement(n, b);
    DF_Mu.currentNode = this.ha.content;
    if (d ===
        2 || d === 3) b = this.ha.content.firstChild, b.replaceWith.apply(b, DF_Mf(b.childNodes));
    for (;
        (b = DF_Mu.nextNode()) !== null && g.length < h;) {
        if (b.nodeType === 1) {
            if (b.hasAttributes())
                for (d = DF_Me(b.getAttributeNames()), n = d.next(); !n.done; n = d.next()) n = n.value, n.endsWith("$lit$") ? (k = c[e++], f = b.getAttribute(n).split(DF_Mo), k = /([.?@])?(.*)/.exec(k), g.push({
                    type: 1,
                    index: a,
                    name: k[2],
                    M: f,
                    kb: k[1] === "." ? DF_MFb : k[1] === "?" ? DF_MGb : k[1] === "@" ? DF_MHb : DF_Mv
                }), b.removeAttribute(n)) : n.startsWith(DF_Mo) && (g.push({
                    type: 6,
                    index: a
                }),
                    b.removeAttribute(n));
            if (DF_MBb.test(b.tagName) && (d = b.textContent.split(DF_Mo), n = d.length - 1, n > 0)) {
                b.textContent = DF_Mob ? DF_Mob.emptyScript : "";
                for (f = 0; f < n; f++) b.append(d[f], DF_Mp.createComment("")), DF_Mu.nextNode(), g.push({
                    type: 2,
                    index: ++a
                });
                b.append(d[n], DF_Mp.createComment(""))
            }
        } else if (b.nodeType === 8)
            if (b.data === DF_Msb) g.push({
                type: 2,
                index: a
            });
            else
                for (d = -1;
                    (d = b.data.indexOf(DF_Mo, d + 1)) !== -1;) g.push({
                        type: 7,
                        index: a
                    }), d += DF_Mo.length - 1;
        a++
    }
}
DF_MEb.createElement = function (a) {
    var b = DF_Mp.createElement("template");
    b.innerHTML = a;
    return b
};

function DF_MIb(a, b, c, d) {
    c = c === void 0 ? a : c;
    if (b === DF_Ms) return b;
    var e, h = d !== void 0 ? (e = c.h) == null ? void 0 : e[d] : c.J;
    e = DF_Mub(b) ? void 0 : b._$litDirective$;
    var g;
    if (((g = h) == null ? void 0 : g.constructor) !== e) {
        var f, k;
        (f = h) == null || (k = f._$notifyDirectiveConnectionChanged) == null || k.call(f, !1);
        e === void 0 ? h = void 0 : (h = new e(a), h.Za(a, c, d));
        if (d !== void 0) {
            var l, n;
            ((n = (l = c).h) != null ? n : l.h = [])[d] = h
        } else c.J = h
    }
    h !== void 0 && (b = DF_MIb(a, h.ab(a, b.values), h, d));
    return b
}

function DF_MJb(a, b) {
    this.h = [];
    this.i = void 0;
    this.Ha = a;
    this.g = b
}
DF_MJb.prototype.F = function (a) {
    var b = this.Ha,
        c = b.ha.content;
    b = b.g;
    var d, e = ((d = a == null ? void 0 : a.zb) != null ? d : DF_Mp).importNode(c, !0);
    DF_Mu.currentNode = e;
    c = DF_Mu.nextNode();
    for (var h = d = 0, g = b[0]; g !== void 0;) {
        if (d === g.index) {
            var f = void 0;
            g.type === 2 ? f = new DF_MKb(c, c.nextSibling, this, a) : g.type === 1 ? f = new g.kb(c, g.name, g.M, this, a) : g.type === 6 && (f = new DF_MLb(c, this, a));
            this.h.push(f);
            g = b[++h]
        }
        f = void 0;
        d !== ((f = g) == null ? void 0 : f.index) && (c = DF_Mu.nextNode(), d++)
    }
    DF_Mu.currentNode = DF_Mp;
    return e
};
DF_MJb.prototype.j = function (a) {
    for (var b = 0, c = DF_Me(this.h), d = c.next(); !d.done; d = c.next()) d = d.value, d !== void 0 && (d.M !== void 0 ? (d.W(a, d, b), b += d.M.length - 2) : d.W(a[b])), b++
};
DF_Mb.Object.defineProperties(DF_MJb.prototype, {
    parentNode: {
        configurable: !0,
        enumerable: !0,
        get: function () {
            return this.g.parentNode
        }
    },
    V: {
        configurable: !0,
        enumerable: !0,
        get: function () {
            return this.g.V
        }
    }
});

function DF_MKb(a, b, c, d) {
    this.type = 2;
    this.D = DF_Mt;
    this.i = void 0;
    this.X = a;
    this.fa = b;
    this.g = c;
    this.options = d;
    var e;
    this.j = (e = d == null ? void 0 : d.isConnected) != null ? e : !0;
    this.h = void 0
}
DF_Ma = DF_MKb.prototype;
DF_Ma.W = function (a, b) {
    a = DF_MIb(this, a, b === void 0 ? this : b);
    DF_Mub(a) ? a === DF_Mt || a == null || a === "" ? (this.D !== DF_Mt && this.oa(), this.D = DF_Mt) : a !== this.D && a !== DF_Ms && this.Sa(a) : a._$litType$ !== void 0 ? this.hb(a) : a.nodeType !== void 0 ? this.Ia(a) : DF_Mvb(a) || typeof (a == null ? void 0 : a[Symbol.iterator]) === "function" ? this.gb(a) : this.Sa(a)
};
DF_Ma.Ka = function (a) {
    return DF_Mn(DF_Mn(this.X).parentNode).insertBefore(a, this.fa)
};
DF_Ma.Ia = function (a) {
    if (this.D !== a) {
        this.oa();
        if (DF_Mdb !== DF_Mrb) {
            var b, c = (b = this.X.parentNode) == null ? void 0 : b.nodeName;
            if (c === "STYLE" || c === "SCRIPT") throw Error("Forbidden");
        }
        this.D = this.Ka(a)
    }
};
DF_Ma.Sa = function (a) {
    if (this.D !== DF_Mt && DF_Mub(this.D)) {
        var b = DF_Mn(this.X).nextSibling;
        this.h === void 0 && (this.h = DF_Mdb(b, "data", "property"));
        a = this.h(a);
        b.data = a
    } else b = DF_Mp.createTextNode(""), this.Ia(b), this.h === void 0 && (this.h = DF_Mdb(b, "data", "property")), a = this.h(a), b.data = a;
    this.D = a
};
DF_Ma.hb = function (a) {
    var b = a.values,
        c = a._$litType$;
    a = typeof c === "number" ? this.Qa(a) : (c.ha === void 0 && (c.ha = DF_MEb.createElement(DF_MDb(c.mb, c.mb[0]), this.options)), c);
    var d;
    ((d = this.D) == null ? void 0 : d.Ha) === a ? this.D.j(b) : (d = new DF_MJb(a, this), a = d.F(this.options), d.j(b), this.Ia(a), this.D = d)
};
DF_Ma.Qa = function (a) {
    var b = DF_MCb.get(a.M);
    b === void 0 && DF_MCb.set(a.M, b = new DF_MEb(a));
    return b
};
DF_Ma.gb = function (a) {
    DF_Mvb(this.D) || (this.D = [], this.oa());
    var b = this.D,
        c = 0,
        d;
    a = DF_Me(a);
    for (var e = a.next(); !e.done; e = a.next()) e = e.value, c === b.length ? b.push(d = new DF_MKb(this.Ka(DF_Mp.createComment("")), this.Ka(DF_Mp.createComment("")), this, this.options)) : d = b[c], d.W(e), c++;
    c < b.length && (this.oa(d && DF_Mn(d.fa).nextSibling, c), b.length = c)
};
DF_Ma.oa = function (a, b) {
    a = a === void 0 ? DF_Mn(this.X).nextSibling : a;
    var c;
    for ((c = this.F) == null || c.call(this, !1, !0, b); a && a !== this.fa;) b = DF_Mn(a).nextSibling, DF_Mn(a).remove(), a = b
};

function DF_MMb(a, b) {
    if (a.g === void 0) {
        a.j = b;
        var c;
        (c = a.F) == null || c.call(a, b)
    }
}
DF_Mb.Object.defineProperties(DF_MKb.prototype, {
    V: {
        configurable: !0,
        enumerable: !0,
        get: function () {
            var a, b;
            return (b = (a = this.g) == null ? void 0 : a.V) != null ? b : this.j
        }
    },
    parentNode: {
        configurable: !0,
        enumerable: !0,
        get: function () {
            var a = DF_Mn(this.X).parentNode,
                b = this.g,
                c;
            b !== void 0 && ((c = a) == null ? void 0 : c.nodeType) === 11 && (a = b.parentNode);
            return a
        }
    }
});

function DF_Mv(a, b, c, d, e) {
    this.type = 1;
    this.D = DF_Mt;
    this.i = void 0;
    this.element = a;
    this.name = b;
    this.g = d;
    this.options = e;
    c.length > 2 || c[0] !== "" || c[1] !== "" ? (this.D = Array(c.length - 1).fill(new String), this.M = c) : this.D = DF_Mt;
    this.ga = void 0
}
DF_Mv.prototype.W = function (a, b, c, d) {
    b = b === void 0 ? this : b;
    var e = this.M,
        h = !1;
    if (e === void 0) {
        if (a = DF_MIb(this, a, b, 0), h = !DF_Mub(a) || a !== this.D && a !== DF_Ms) this.D = a
    } else {
        var g = a;
        a = e[0];
        var f;
        for (f = 0; f < e.length - 1; f++) {
            var k = DF_MIb(this, g[c + f], b, f);
            k === DF_Ms && (k = this.D[f]);
            h || (h = !DF_Mub(k) || k !== this.D[f]);
            if (k === DF_Mt) a = DF_Mt;
            else if (a !== DF_Mt) {
                var l = void 0;
                a += ((l = k) != null ? l : "") + e[f + 1]
            }
            this.D[f] = k
        }
    }
    h && !d && this.Ja(a)
};
DF_Mv.prototype.Ja = function (a) {
    if (a === DF_Mt) DF_Mn(this.element).removeAttribute(this.name);
    else {
        this.ga === void 0 && (this.ga = DF_Mdb(this.element, this.name, "attribute"));
        var b;
        a = this.ga((b = a) != null ? b : "");
        var c;
        DF_Mn(this.element).setAttribute(this.name, (c = a) != null ? c : "")
    }
};
DF_Mb.Object.defineProperties(DF_Mv.prototype, {
    tagName: {
        configurable: !0,
        enumerable: !0,
        get: function () {
            return this.element.tagName
        }
    },
    V: {
        configurable: !0,
        enumerable: !0,
        get: function () {
            return this.g.V
        }
    }
});

function DF_MFb() {
    DF_Mv.apply(this, arguments);
    this.type = 3
}
DF_Md(DF_MFb, DF_Mv);
DF_MFb.prototype.Ja = function (a) {
    this.ga === void 0 && (this.ga = DF_Mdb(this.element, this.name, "property"));
    a = this.ga(a);
    this.element[this.name] = a === DF_Mt ? void 0 : a
};

function DF_MGb() {
    DF_Mv.apply(this, arguments);
    this.type = 4
}
DF_Md(DF_MGb, DF_Mv);
DF_MGb.prototype.Ja = function (a) {
    DF_Mn(this.element).toggleAttribute(this.name, !!a && a !== DF_Mt)
};

function DF_MHb(a, b, c, d, e) {
    DF_Mv.call(this, a, b, c, d, e);
    this.type = 5
}
DF_Md(DF_MHb, DF_Mv);
DF_MHb.prototype.W = function (a, b) {
    var c;
    a = (c = DF_MIb(this, a, b === void 0 ? this : b, 0)) != null ? c : DF_Mt;
    if (a !== DF_Ms) {
        b = this.D;
        c = a === DF_Mt && b !== DF_Mt || a.capture !== b.capture || a.once !== b.once || a.passive !== b.passive;
        var d = a !== DF_Mt && (b === DF_Mt || c);
        c && this.element.removeEventListener(this.name, this, b);
        d && this.element.addEventListener(this.name, this, a);
        this.D = a
    }
};
DF_MHb.prototype.handleEvent = function (a) {
    if (typeof this.D === "function") {
        var b, c;
        this.D.call((c = (b = this.options) == null ? void 0 : b.host) != null ? c : this.element, a)
    } else this.D.handleEvent(a)
};

function DF_MLb(a, b, c) {
    this.element = a;
    this.type = 6;
    this.i = void 0;
    this.g = b;
    this.options = c
}
DF_MLb.prototype.W = function (a) {
    DF_MIb(this, a)
};
DF_Mb.Object.defineProperties(DF_MLb.prototype, {
    V: {
        configurable: !0,
        enumerable: !0,
        get: function () {
            return this.g.V
        }
    }
});
var DF_MNb;
(DF_MNb = window.litHtmlPolyfillSupport) == null || DF_MNb(DF_MEb, DF_MKb);
var DF_MOb, DF_MPb;
((DF_MPb = DF_Mj.litHtmlVersions) != null ? DF_MPb : DF_Mj.litHtmlVersions = []).push("3.2.1");
DF_MOb = function (a, b, c) {
    var d, e = (d = c == null ? void 0 : c.Oa) != null ? d : b;
    d = e._$litPart$;
    if (d === void 0) {
        var h;
        d = (h = c == null ? void 0 : c.Oa) != null ? h : null;
        e._$litPart$ = d = new DF_MKb(b.insertBefore(DF_Mp.createComment(""), d), d, void 0, c != null ? c : {})
    }
    d.W(a);
    return d
};
var DF_MQb = DF_Mj.ShadowRoot && (DF_Mj.ShadyCSS === void 0 || DF_Mj.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype,
    DF_MRb = Symbol(),
    DF_MSb = new WeakMap;

function DF_MTb(a, b, c) {
    this._$cssResult$ = !0;
    if (c !== DF_MRb) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = a;
    this.h = b
}
DF_MTb.prototype.toString = function () {
    return this.cssText
};
DF_Mb.Object.defineProperties(DF_MTb.prototype, {
    g: {
        configurable: !0,
        enumerable: !0,
        get: function () {
            var a = this.i,
                b = this.h;
            if (DF_MQb && a === void 0) {
                var c = b !== void 0 && b.length === 1;
                c && (a = DF_MSb.get(b));
                a === void 0 && ((this.i = a = new CSSStyleSheet).replaceSync(this.cssText), c && DF_MSb.set(b, a))
            }
            return a
        }
    }
});

function DF_Mw(a) {
    var b = DF_Mwa.apply(1, arguments);
    return function () {
        var c = a.length === 1 ? a[0] : b.reduce(function (d, e, h) {
            if (e._$cssResult$ === !0) e = e.cssText;
            else if (typeof e !== "number") throw Error("Value passed to 'css' function must be a 'css' function result: " + (e + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security."));
            return d + e + a[h + 1]
        }, a[0]);
        return new DF_MTb(c, a, DF_MRb)
    }()
}

function DF_MUb(a, b) {
    if (DF_MQb) a.adoptedStyleSheets = b.map(function (h) {
        return h instanceof CSSStyleSheet ? h : h.g
    });
    else {
        b = DF_Me(b);
        for (var c = b.next(); !c.done; c = b.next()) {
            c = c.value;
            var d = document.createElement("style"),
                e = DF_Mj.litNonce;
            e !== void 0 && d.setAttribute("nonce", e);
            d.textContent = c.cssText;
            a.appendChild(d)
        }
    }
}
var DF_MVb = DF_MQb ? function (a) {
    return a
} : function (a) {
    if (a instanceof CSSStyleSheet) {
        var b = "";
        a = DF_Me(a.cssRules);
        for (var c = a.next(); !c.done; c = a.next()) b += c.value.cssText;
        b = new DF_MTb(typeof b === "string" ? b : String(b), void 0, DF_MRb)
    } else b = a;
    return b
};
/*

 Copyright 2016 Google LLC
 SPDX-License-Identifier: BSD-3-Clause
*/
var DF_MWb = !!/^\s*class\s*\{\s*\}\s*$/.test(function () { }.toString()) || HTMLElement.es5Shimmed || DF_Mj.Reflect === void 0 || DF_Mj.customElements === void 0 || DF_Mj.customElements.polyfillWrapFlushCallback || !1,
    DF_MXb;

function DF_MYb() {
    function a() {
        return c.construct(b, [], this.constructor)
    }
    var b = HTMLElement;
    if (DF_MWb) return b;
    if (DF_MXb !== void 0) return DF_MXb;
    var c = DF_Mj.Reflect;
    a.prototype = b.prototype;
    a.prototype.constructor = a;
    a.es5Shimmed = !0;
    Object.setPrototypeOf(a, b);
    return DF_MXb = a
}
var DF_MZb = !1;
DF_MWb || DF_MZb || (DF_MZb = !0, DF_Mj.HTMLElement = DF_MYb());
var DF_M_b = DF_MYb(),
    DF_M0b = Object,
    DF_M1b = DF_M0b.is,
    DF_M2b = DF_M0b.defineProperty,
    DF_M3b = DF_M0b.getOwnPropertyDescriptor,
    DF_M4b = DF_M0b.getOwnPropertyNames,
    DF_M5b = DF_M0b.getOwnPropertySymbols,
    DF_M6b = DF_M0b.getPrototypeOf,
    DF_M7b = DF_Mj.trustedTypes,
    DF_M8b = DF_M7b ? DF_M7b.emptyScript : "",
    DF_M9b = DF_Mj.reactiveElementPolyfillSupport,
    DF_M$b = {
        Wa: function (a, b) {
            switch (b) {
                case Boolean:
                    a = a ? DF_M8b : null;
                    break;
                case Object:
                case Array:
                    a = a == null ? a : JSON.stringify(a)
            }
            return a
        },
        ta: function (a, b) {
            var c = a;
            switch (b) {
                case Boolean:
                    c =
                        a !== null;
                    break;
                case Number:
                    c = a === null ? null : Number(a);
                    break;
                case Object:
                case Array:
                    try {
                        c = JSON.parse(a)
                    } catch (d) {
                        c = null
                    }
            }
            return c
        }
    };

function DF_Mac(a, b) {
    return !DF_M1b(a, b)
}
var DF_Mbc = {
    H: !0,
    type: String,
    aa: DF_M$b,
    da: !1,
    Va: DF_Mac
},
    DF_Mcc;
Symbol.metadata == null && (Symbol.metadata = Symbol("metadata"));
DF_Mcc = Symbol.metadata;
var DF_Mdc = new WeakMap;

function DF_Mx() {
    var a = DF_M_b.call(this) || this;
    a.F = void 0;
    a.j = !1;
    a.ia = !1;
    a.h = null;
    a.cb();
    return a
}
DF_Md(DF_Mx, DF_M_b);
DF_Mx.C = function (a) {
    this.g();
    var b;
    ((b = this.la) != null ? b : this.la = []).push(a)
};
DF_Mx.o = function (a, b) {
    b = b === void 0 ? DF_Mbc : b;
    b.state && (b.H = !1);
    this.g();
    this.R.set(a, b);
    b.Gb || (b = this.i(a, Symbol(), b), b !== void 0 && DF_M2b(this.prototype, a, b))
};
DF_Mx.i = function (a, b, c) {
    var d, e = (d = DF_M3b(this.prototype, a)) != null ? d : {
        get: function () {
            return this[b]
        },
        set: function (f) {
            this[b] = f
        }
    },
        h = e.get,
        g = e.set;
    return {
        get: function () {
            return h == null ? void 0 : h.call(this)
        },
        set: function (f) {
            var k = h == null ? void 0 : h.call(this);
            g.call(this, f);
            DF_Mec(this, a, k, c)
        },
        configurable: !0,
        enumerable: !0
    }
};
DF_Mx.u = function (a) {
    var b;
    return (b = this.R.get(a)) != null ? b : DF_Mbc
};
DF_Mx.g = function () {
    if (!this.hasOwnProperty("R")) {
        var a = DF_M6b(this);
        a.s();
        a.la !== void 0 && (this.la = [].concat(DF_Mf(a.la)));
        this.R = new Map(a.R)
    }
};
DF_Mx.s = function () {
    DF_Mfc();
    if (!this.hasOwnProperty("Ma")) {
        this.Ma = !0;
        this.g();
        if (this.hasOwnProperty("ub")) {
            var a = this.ub,
                b = [].concat(DF_Mf(DF_M4b(a)), DF_Mf(DF_M5b(a)));
            b = DF_Me(b);
            for (var c = b.next(); !c.done; c = b.next()) c = c.value, this.o(c, a[c])
        }
        a = this[DF_Mcc];
        if (a !== null && (a = DF_Mdc.get(a), a !== void 0))
            for (a = DF_Me(a), b = a.next(); !b.done; b = a.next()) c = DF_Me(b.value), b = c.next().value, c = c.next().value, this.R.set(b, c);
        this.pa = new Map;
        a = DF_Me(this.R);
        for (b = a.next(); !b.done; b = a.next()) c = DF_Me(b.value), b = c.next().value,
            c = c.next().value, c = this.m(b, c), c !== void 0 && this.pa.set(c, b);
        this.l = this.h(this.j)
    }
};
DF_Mx.h = function (a) {
    var b = [];
    if (Array.isArray(a)) {
        a = new Set(a.flat(Infinity).reverse());
        a = DF_Me(a);
        for (var c = a.next(); !c.done; c = a.next()) b.unshift(DF_MVb(c.value))
    } else a !== void 0 && b.push(DF_MVb(a));
    return b
};
DF_Mx.m = function (a, b) {
    b = b.H;
    return b === !1 ? void 0 : typeof b === "string" ? b : typeof a === "string" ? a.toLowerCase() : void 0
};
DF_Ma = DF_Mx.prototype;
DF_Ma.cb = function () {
    var a = this;
    this.ea = new Promise(function (c) {
        return a.Ta = c
    });
    this.i = new Map;
    this.fb();
    DF_Mec(this);
    var b;
    (b = this.constructor.la) == null || b.forEach(function (c) {
        return c(a)
    })
};
DF_Ma.fb = function () {
    for (var a = new Map, b = DF_Me(this.constructor.R.keys()), c = b.next(); !c.done; c = b.next()) c = c.value, this.hasOwnProperty(c) && (a.set(c, this[c]), delete this[c]);
    a.size > 0 && (this.F = a)
};
DF_Ma.O = function () {
    var a, b = (a = this.shadowRoot) != null ? a : this.attachShadow(this.constructor.v);
    DF_MUb(b, this.constructor.l);
    return b
};
DF_Ma.connectedCallback = function () {
    this.T != null || (this.T = this.O());
    this.Ta(!0);
    var a;
    (a = this.Z) == null || a.forEach(function (b) {
        var c;
        return (c = b.Bb) == null ? void 0 : c.call(b)
    })
};
DF_Ma.Ta = function () { };
DF_Ma.disconnectedCallback = function () {
    var a;
    (a = this.Z) == null || a.forEach(function (b) {
        var c;
        return (c = b.Cb) == null ? void 0 : c.call(b)
    })
};
DF_Ma.attributeChangedCallback = function (a, b, c) {
    this.Xa(a, c)
};
DF_Ma.eb = function (a, b) {
    var c = this.constructor.R.get(a),
        d = this.constructor.m(a, c);
    if (d !== void 0 && c.da === !0) {
        var e, h = (((e = c.aa) == null ? void 0 : e.Wa) !== void 0 ? c.aa : DF_M$b).Wa(b, c.type);
        this.h = a;
        h == null ? this.removeAttribute(d) : this.setAttribute(d, h);
        this.h = null
    }
};
DF_Ma.Xa = function (a, b) {
    var c = this.constructor;
    a = c.pa.get(a);
    if (a !== void 0 && this.h !== a) {
        c = c.u(a);
        var d, e = typeof c.aa === "function" ? {
            ta: c.aa
        } : ((d = c.aa) == null ? void 0 : d.ta) !== void 0 ? c.aa : DF_M$b;
        this.h = a;
        this[a] = e.ta(b, c.type);
        this.h = null
    }
};

function DF_Mec(a, b, c, d) {
    if (b !== void 0) {
        d != null || (d = a.constructor.u(b));
        var e;
        if (((e = d.Va) != null ? e : DF_Mac)(a[b], c)) a.Fa(b, c, d);
        else return
    }
    a.j === !1 && (a.ea = a.bb())
}
DF_Ma.Fa = function (a, b, c) {
    this.i.has(a) || this.i.set(a, b);
    if (c.da === !0 && this.h !== a) {
        var d;
        ((d = this.J) != null ? d : this.J = new Set).add(a)
    }
};
DF_Ma.bb = function () {
    var a = this,
        b, c;
    return DF_Mva(new DF_Mua(new DF_Mqa(function (d) {
        switch (d.g) {
            case 1:
                a.j = !0;
                d.F = 2;
                var e = a.ea;
                d.g = 4;
                return {
                    value: e
                };
            case 4:
                d.g = 3;
                d.F = 0;
                break;
            case 2:
                d.F = 0, e = d.i.Ua, d.i = null, b = e, a.na || Promise.reject(b);
            case 3:
                c = DF_Mgc(a);
                if (c == null) {
                    d.g = 5;
                    break
                }
                d.g = 5;
                return {
                    value: c
                };
            case 5:
                return d.return(!a.j)
        }
    })))
};

function DF_Mgc(a) {
    if (a.j) {
        if (!a.ia) {
            a.T != null || (a.T = a.O());
            if (a.F) {
                for (var b = DF_Me(a.F), c = b.next(); !c.done; c = b.next()) {
                    var d = DF_Me(c.value);
                    c = d.next().value;
                    d = d.next().value;
                    a[c] = d
                }
                a.F = void 0
            }
            b = a.constructor.R;
            if (b.size > 0)
                for (b = DF_Me(b), c = b.next(); !c.done; c = b.next()) d = DF_Me(c.value), c = d.next().value, d = d.next().value, d.xb !== !0 || a.i.has(c) || a[c] === void 0 || a.Fa(c, a[c], d)
        }
        b = !1;
        c = a.i;
        try {
            b = !0;
            var e;
            (e = a.Z) == null || e.forEach(function (h) {
                var g;
                return (g = h.Db) == null ? void 0 : g.call(h)
            });
            a.Ca(c)
        } catch (h) {
            throw b = !1, a.Ra(), h;
        }
        b && a.Ga(c)
    }
}
DF_Ma.Ga = function (a) {
    var b;
    (b = this.Z) == null || b.forEach(function (c) {
        var d;
        return (d = c.Eb) == null ? void 0 : d.call(c)
    });
    this.ia || (this.ia = !0, this.sa(a));
    this.ya(a)
};
DF_Ma.Ra = function () {
    this.i = new Map;
    this.j = !1
};
DF_Ma.Ca = function () {
    var a = this;
    this.J && (this.J = this.J.forEach(function (b) {
        return a.eb(b, a[b])
    }));
    this.Ra()
};
DF_Ma.ya = function () { };
DF_Ma.sa = function () { };
DF_Mb.Object.defineProperties(DF_Mx, {
    observedAttributes: {
        configurable: !0,
        enumerable: !0,
        get: function () {
            this.s();
            return this.pa && [].concat(DF_Mf(this.pa.keys()))
        }
    }
});
DF_Mx.l = [];
DF_Mx.v = {
    mode: "open"
};
DF_Mx.R = new Map;
DF_Mx.Ma = new Map;
DF_M9b == null || DF_M9b({
    ReactiveElement: DF_Mx
});

function DF_Mfc() {
    var a;
    ((a = DF_Mj.reactiveElementVersions) != null ? a : DF_Mj.reactiveElementVersions = []).push("2.0.4");
    DF_Mfc = function () { }
};

function DF_My() {
    var a = DF_Mx.apply(this, arguments) || this;
    a.wa = {
        host: a
    };
    a.N = void 0;
    return a
}
DF_Md(DF_My, DF_Mx);
DF_My.v = DF_Mx.v;
DF_My.l = DF_Mx.l;
DF_My.m = DF_Mx.m;
DF_My.h = DF_Mx.h;
DF_My.g = DF_Mx.g;
DF_My.u = DF_Mx.u;
DF_My.i = DF_Mx.i;
DF_My.o = DF_Mx.o;
DF_My.C = DF_Mx.C;
DF_Ma = DF_My.prototype;
DF_Ma.O = function () {
    var a = DF_Mx.prototype.O.call(this),
        b;
    (b = this.wa).Oa != null || (b.Oa = a.firstChild);
    return a
};
DF_Ma.Ca = function (a) {
    var b = this.K();
    this.ia || (this.wa.isConnected = this.isConnected);
    DF_Mx.prototype.Ca.call(this, a);
    this.N = DF_MOb(b, this.T, this.wa)
};
DF_Ma.connectedCallback = function () {
    DF_Mx.prototype.connectedCallback.call(this);
    var a;
    (a = this.N) == null || DF_MMb(a, !0)
};
DF_Ma.disconnectedCallback = function () {
    DF_Mx.prototype.disconnectedCallback.call(this);
    var a;
    (a = this.N) == null || DF_MMb(a, !1)
};
DF_Ma.K = function () {
    return DF_Ms
};
DF_My.s = function () {
    DF_Mhc();
    return DF_Mx.s.call(this)
};
DF_My._$litElement$ = !0;
DF_My.Ma = !0;
var DF_Mic;
(DF_Mic = window.litElementPolyfillSupport) == null || DF_Mic({
    LitElement: DF_My
});

function DF_Mhc() {
    var a, b;
    ((b = (a = window).litElementVersions) != null ? b : a.litElementVersions = []).push("4.1.1");
    DF_Mhc = function () { }
};
// ! CSS Styling
var DF_Mjc = DF_Mw(['.message-list-wrapper.minimized{flex-direction:row;border-radius: 24px; cursor: pointer;}.message-list-wrapper.minimized #messageList{overflow-y:hidden}.message-list-wrapper.minimized #messageList .message{cursor:pointer;margin:0}.message-list-wrapper #dismissIcon,.minimized #messageList>:not(:first-child){display:none}.message-list-wrapper.minimized #dismissIcon{fill:rgba(0,0,0,.87);fill:var(--df-messenger-minimized-chat-close-icon-color);align-self:flex-start;background-color:transparent;border:none;cursor:pointer;display:initial;flex:0 0 auto;padding:10px}.message-list-wrapper{display:flex;flex:1 1 auto;flex-direction:column;min-height:0}#messageList{display:flex;flex:1 1;flex-direction:column;overflow-x:hidden;overflow-y:scroll;padding:10px}#messageList #typing{font-size:14px}#messageList .message{word-wrap:break-word;background:#fff;border-radius:12px;color:rgba(0,0,0,.87);color:var(--df-messenger-font-color);flex:0 0 auto;font-size:14px;margin-top:10px;max-width:calc(100% - 28px);padding:7px 16px;word-break:break-word}#messageList .animation{animation:present-yourself .3s ease .1s forwards;display:flex;flex-direction:column;opacity:0}#messageList>:first-child{margin-top:auto!important}#messageList .bot-message,#messageList df-message[isbot]{align-self:flex-start}#messageList .user-message,#messagelist df-message{align-self:flex-end}#messageList .message.bot-message{align-self:flex-start;border: 4px solid var(--df-messenger-font-color);background-color:#e1f5fe;background-color:var(--df-messenger-bot-message);line-height:1.4;margin-right:75px}#messageList .message.user-message{align-self:flex-end;background-color:#eee;background-color:var(--df-messenger-user-message); margin-left:auto; width: fit-content; max-width: 70%}#typing:after{animation:fade_pulse 1s linear infinite;content:"."}.error,.minimized .error{display:none}.error{align-items:center;align-self:center;background-color:#000;box-shadow:1px 4px 15px 0 rgba(0,0,0,.24);color:#fff;font-family: GT Maru, sans-serif;font-size:12px;justify-content:center;margin-top:0;opacity:0;padding:10px;position:absolute;transform:translateY(-100%);transition:transform .2s,opacity .2s;width:95%;z-index:1}.error.show{display:flex;opacity:.8;transform:translateY(0)}@keyframes fade_pulse{0%{opacity:1}50%{opacity:.4}to{opacity:1}}@keyframes present-yourself{to{opacity:1}}']);

function DF_Mz(a) {
    return function (b, c) {
        c !== void 0 ? c.C(function () {
            customElements.define(a, b)
        }) : customElements.define(a, b)
    }
};
var DF_Mkc = {
    H: !0,
    type: String,
    aa: DF_M$b,
    da: !1,
    Va: DF_Mac
};

function DF_Mlc(a, b, c) {
    a = a === void 0 ? DF_Mkc : a;
    var d = c.kind,
        e = c.metadata,
        h = DF_Mdc.get(e);
    h === void 0 && DF_Mdc.set(e, h = new Map);
    h.set(c.name, a);
    if (d === "accessor") {
        var g = c.name;
        return {
            set: function (k) {
                var l = b.get.call(this);
                b.set.call(this, k);
                DF_Mec(this, g, l, a)
            },
            Fb: function (k) {
                k !== void 0 && this.Fa(g, void 0, a);
                return k
            }
        }
    }
    if (d === "setter") {
        var f = c.name;
        return function (k) {
            var l = this[f];
            b.call(this, k);
            DF_Mec(this, f, l, a)
        }
    }
    throw Error("Unsupported decorator location: " + d);
}

function DF_MA(a) {
    return function (b, c) {
        if (typeof c === "object") b = DF_Mlc(a, b, c);
        else {
            var d = b.hasOwnProperty(c);
            b.constructor.o(c, d ? Object.assign({}, a, {
                xb: !0
            }) : a);
            b = d ? Object.getOwnPropertyDescriptor(b, c) : void 0
        }
        return b
    }
};

function DF_MB() {
    return DF_MA(Object.assign({}, void 0, {
        state: !0,
        H: !1
    }))
};
/*

 Copyright 2021 Google LLC
 SPDX-License-Identifier: BSD-3-Clause
*/
function DF_M() {
    var a = DF_My.apply(this, arguments) || this;
    a.languageCode = "";
    return a
}
DF_Md(DF_M, DF_My);
DF_M.v = DF_My.v;
DF_M.l = DF_My.l;
DF_M.m = DF_My.m;
DF_M.h = DF_My.h;
DF_M.g = DF_My.g;
DF_M.u = DF_My.u;
DF_M.i = DF_My.i;
DF_M.o = DF_My.o;
DF_M.C = DF_My.C;
DF_M.s = DF_My.s;
DF_Mk([DF_MA({
    type: String
}), DF_Ml("design:type", Object)], DF_M.prototype, "languageCode", void 0);
var DF_Mmc = new Map([
    ["zh-tw", {
        askSomething: "\u958b\u59cb\u63d0\u554f...",
        chatTitle: "\u5373\u6642\u901a\u8a0a",
        errorMessage: "\u767c\u751f\u932f\u8aa4\uff0c\u8acb\u518d\u8a66\u4e00\u6b21",
        messageTooLong: "\u7cdf\u7cd5\uff01\u4f60\u7684\u8a0a\u606f\u904e\u9577\uff0c\u5df2\u8d85\u51fa numOfChars \u500b\u5b57\u5143\u4e0a\u9650\u3002"
    }],
    ["zh-cn", {
        askSomething: "\u8f93\u5165\u95ee\u9898\u2026",
        chatTitle: "\u804a\u5929",
        errorMessage: "\u51fa\u4e86\u70b9\u95ee\u9898\uff0c\u8bf7\u91cd\u8bd5",
        messageTooLong: "\u54ce\u5440\uff01\u60a8\u7684\u6d88\u606f\u8fc7\u957f\uff0c\u8d85\u51fa\u4e0a\u9650 numOfChars \u4e2a\u5b57\u7b26\u3002"
    }],
    ["zh-hk", {
        askSomething: "\u8acb\u8f38\u5165\u60a8\u7684\u554f\u984c",
        chatTitle: "\u5373\u6642\u901a\u8a0a",
        errorMessage: "\u767c\u751f\u932f\u8aa4\uff0c\u8acb\u518d\u8a66\u4e00\u6b21",
        messageTooLong: "\u5f88\u62b1\u6b49\uff0c\u60a8\u7684\u8a0a\u606f\u8d85\u51fa\u4e86 numOfChars \u500b\u5b57\u5143\u3002"
    }],
    ["da", {
        askSomething: "Stil et sp\u00f8rgsm\u00e5l...",
        chatTitle: "Chat",
        errorMessage: "Der opstod en fejl, pr\u00f8v igen",
        messageTooLong: "Ups! Din besked fylder numOfChars tegn mere end det tilladte."
    }],
    ["nl", {
        askSomething: "Vraag iets...",
        chatTitle: "Chat",
        errorMessage: "Er is iets misgegaan. Probeer het opnieuw.",
        messageTooLong: "Uw bericht is numOfChars tekens te lang."
    }],
    ["fr", {
        askSomething: "Posez une question\u2026",
        chatTitle: "Chat",
        errorMessage: "Une erreur s'est produite. Veuillez r\u00e9essayer.",
        messageTooLong: "Petit probl\u00e8me\u2026 Votre message contient numOfChars caract\u00e8re(s) de trop."
    }],
    ["de", {
        askSomething: "Frage eingeben",
        chatTitle: "Chat",
        errorMessage: "Ein Fehler ist aufgetreten. Bitte probieren Sie es noch einmal.",
        messageTooLong: "Hoppla! Ihre Nachricht ist numOfChars Zeichen zu lang."
    }],
    ["hi", {
        askSomething: "\u0915\u0941\u091b \u092a\u0942\u091b\u0947\u0902...",
        chatTitle: "\u091a\u0948\u091f \u0915\u0930\u0947\u0902",
        errorMessage: "\u0915\u0941\u091b \u0917\u0921\u093c\u092c\u0921\u093c\u0940 \u0939\u0941\u0908 \u0939\u0948, \u0915\u0943\u092a\u092f\u093e \u092b\u093f\u0930 \u0938\u0947 \u0915\u094b\u0936\u093f\u0936 \u0915\u0930\u0947\u0902",
        messageTooLong: "\u0913\u0939! \u0906\u092a\u0915\u0947 \u092e\u0948\u0938\u0947\u091c \u092e\u0947\u0902 numOfChars \u0935\u0930\u094d\u0923 \u0939\u0948\u0902 \u091c\u094b \u092c\u0939\u0941\u0924 \u091c\u093c\u094d\u092f\u093e\u0926\u093e \u0939\u0948\u0902."
    }],
    ["id", {
        askSomething: "Tanyakan Sesuatu...",
        chatTitle: "Chat",
        errorMessage: "Terjadi masalah, harap coba lagi",
        messageTooLong: "Maaf. Pesan Anda berisi numOfChars karakter yang terlalu panjang."
    }],
    ["it", {
        askSomething: "Poni una domanda\u2026",
        chatTitle: "Chat",
        errorMessage: "Si \u00e8 verificato un errore. Riprova",
        messageTooLong: "Spiacenti, il messaggio supera di numOfChars caratteri la lunghezza consentita."
    }],
    ["ja", {
        askSomething: "\u8cea\u554f\u3092\u5165\u529b...",
        chatTitle: "\u30c1\u30e3\u30c3\u30c8",
        errorMessage: "\u30a8\u30e9\u30fc\u304c\u767a\u751f\u3057\u307e\u3057\u305f\u3002\u3082\u3046\u4e00\u5ea6\u304a\u8a66\u3057\u304f\u3060\u3055\u3044\u3002",
        messageTooLong: "\u30a8\u30e9\u30fc\u304c\u767a\u751f\u3057\u307e\u3057\u305f\u3002\u30e1\u30c3\u30bb\u30fc\u30b8\u306e\u6587\u5b57\u6570\u4e0a\u9650\u3092 numOfChars \u6587\u5b57\u8d85\u3048\u3066\u3044\u307e\u3059\u3002"
    }],
    ["ko", {
        askSomething: "\uc9c8\ubb38\uc744 \uc785\ub825\ud558\uc138\uc694...",
        chatTitle: "\ucc44\ud305",
        errorMessage: "\ubb38\uc81c\uac00 \ubc1c\uc0dd\ud588\uc2b5\ub2c8\ub2e4. \ub2e4\uc2dc \uc2dc\ub3c4\ud574 \ubcf4\uc138\uc694.",
        messageTooLong: "\uba54\uc2dc\uc9c0\uac00 \ub108\ubb34 \uae41\ub2c8\ub2e4(numOfChars\uc790 \ucd08\uacfc)."
    }],
    ["no", {
        askSomething: "Sp\u00f8r om noe \u2026",
        chatTitle: "Chat",
        errorMessage: "Noe gikk galt \u2013 pr\u00f8v p\u00e5 nytt",
        messageTooLong: "Beklager! Meldingen din er numOfChars tegn for lang."
    }],
    ["pt-br", {
        askSomething: "Pergunte algo\u2026",
        chatTitle: "Bate-papo",
        errorMessage: "Ocorreu um erro. Tente novamente.",
        messageTooLong: "Ops! Sua mensagem tem numOfChars caracteres a mais que o limite."
    }],
    ["pt-pt", {
        askSomething: "Pergunte algo\u2026",
        chatTitle: "Chat",
        errorMessage: "Ocorreu um erro. Tente novamente mais tarde.",
        messageTooLong: "Ups! A sua mensagem tem numOfChars carateres a mais."
    }],
    ["ru", {
        askSomething: "\u0417\u0430\u0434\u0430\u0439\u0442\u0435 \u0432\u043e\u043f\u0440\u043e\u0441",
        chatTitle: "\u0427\u0430\u0442",
        errorMessage: "\u041f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430. \u041f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u0435 \u043f\u043e\u043f\u044b\u0442\u043a\u0443",
        messageTooLong: "\u041c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u043e \u0434\u043e\u043f\u0443\u0441\u0442\u0438\u043c\u043e\u0435 \u0447\u0438\u0441\u043b\u043e \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432 \u0432 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0438 \u043f\u0440\u0435\u0432\u044b\u0448\u0435\u043d\u043e \u043d\u0430 numOfChars"
    }],
    ["es", {
        askSomething: "Haz una pregunta...",
        chatTitle: "Chat",
        errorMessage: "Se ha producido un error. Vuelve a intentarlo.",
        messageTooLong: "\u00a1Vaya! Tu mensaje tiene numOfChars caracteres m\u00e1s de lo permitido."
    }],
    ["sv", {
        askSomething: "Fr\u00e5ga n\u00e5got \u2026",
        chatTitle: "Chatt",
        errorMessage: "N\u00e5got gick fel. F\u00f6rs\u00f6k igen.",
        messageTooLong: "Hoppsan! Ditt meddelande \u00e4r numOfChars tecken f\u00f6r l\u00e5ngt."
    }],
    ["th", {
        askSomething: "\u0e15\u0e31\u0e49\u0e07\u0e04\u0e33\u0e16\u0e32\u0e21...",
        chatTitle: "\u0e41\u0e0a\u0e17",
        errorMessage: "\u0e21\u0e35\u0e02\u0e49\u0e2d\u0e1c\u0e34\u0e14\u0e1e\u0e25\u0e32\u0e14\u0e40\u0e01\u0e34\u0e14\u0e02\u0e36\u0e49\u0e19 \u0e42\u0e1b\u0e23\u0e14\u0e25\u0e2d\u0e07\u0e2d\u0e35\u0e01\u0e04\u0e23\u0e31\u0e49\u0e07",
        messageTooLong: "\u0e2d\u0e4a\u0e30 \u0e02\u0e49\u0e2d\u0e04\u0e27\u0e32\u0e21\u0e02\u0e2d\u0e07\u0e04\u0e38\u0e13\u0e22\u0e32\u0e27\u0e40\u0e01\u0e34\u0e19 numOfChars \u0e2d\u0e31\u0e01\u0e02\u0e23\u0e30"
    }],
    ["uk", {
        askSomething: "\u0417\u0430\u043f\u0438\u0442\u0430\u0439\u0442\u0435 \u0449\u043e\u0441\u044c\u2026",
        chatTitle: "\u0427\u0430\u0442",
        errorMessage: "\u0421\u0442\u0430\u043b\u0430\u0441\u044f \u043f\u043e\u043c\u0438\u043b\u043a\u0430. \u041f\u043e\u0432\u0442\u043e\u0440\u0456\u0442\u044c \u0441\u043f\u0440\u043e\u0431\u0443",
        messageTooLong: "\u041f\u043e\u043c\u0438\u043b\u043a\u0430. \u0412\u0430\u0448\u0435 \u043f\u043e\u0432\u0456\u0434\u043e\u043c\u043b\u0435\u043d\u043d\u044f \u0434\u043e\u0432\u0448\u0435 \u043d\u0430 numOfChars \u0441\u0438\u043c\u0432."
    }],
    ["en", {
        askSomething: "Ask something...",
        chatTitle: "Chat",
        errorMessage: "Something went wrong, please try again.",
        messageTooLong: "Oops! Your message is numOfChars characters too long.",
        openAriaLabel: "Open chatTitle",
        closeAriaLabel: "Close chatTitle",
        sendAriaLabel: "Send",
        inputAriaLabel: "Talk to Agent",
        maximize: "Maximize chat",
        minimizeAriaLabel: "Minimize",
        opensInANewTab: "Opens in a new tab",
        agentSays: "Agent Says:",
        iSay: "I Say:",
        agentTyping: "Agent is typing..."
    }]
]);

function DF_MC(a, b, c) {
    c = c === void 0 ? {} : c;
    b = new CustomEvent(b, {
        detail: c,
        bubbles: !0,
        composed: !0
    });
    a == null || a.dispatchEvent(b)
}

function DF_Mnc(a, b, c) {
    var d = new Image;
    d.onload = function () {
        b()
    };
    d.onerror = function () {
        c()
    };
    d.src = a
}

function DF_MD(a, b) {
    if (!a) return DF_Mmc.get("en")[b] || "";
    a = a.toLowerCase();
    return DF_Mmc.has(a) ? (a = DF_Mmc.get(a)[b]) ? a : DF_Mmc.get("en")[b] || "" : DF_Mmc.get("en")[b] || ""
};
var DF_Moc = DF_Mg(['<div\n      class="message ', '">\n      <span class="visually-hidden">', "</span>\n      ", "\n    </div>"]);

function DF_ME() {
    var a = DF_M.apply(this, arguments) || this;
    a.text = "";
    a.isBot = !1;
    a.screenReaderTextKey = void 0;
    return a
}
DF_Md(DF_ME, DF_M);
DF_ME.v = DF_M.v;
DF_ME.l = DF_M.l;
DF_ME.m = DF_M.m;
DF_ME.h = DF_M.h;
DF_ME.g = DF_M.g;
DF_ME.u = DF_M.u;
DF_ME.i = DF_M.i;
DF_ME.o = DF_M.o;
DF_ME.C = DF_M.C;
DF_ME.s = DF_M.s;
DF_ME.prototype.O = function () {
    return this
};
DF_ME.prototype.K = function () {
    var a = this.screenReaderTextKey ? DF_MD(this.languageCode, this.screenReaderTextKey) : DF_MD(this.languageCode, this.isBot ? "agentSays" : "iSay");
    return DF_Mr(DF_Moc, this.isBot ? "bot-message" : "user-message", a, this.text)
};
var DF_MF = DF_ME;
DF_Mk([DF_MA(), DF_Ml("design:type", String)], DF_MF.prototype, "text", void 0);
DF_Mk([DF_MA({
    type: Boolean,
    da: !0
}), DF_Ml("design:type", Boolean)], DF_MF.prototype, "isBot", void 0);
DF_Mk([DF_MA(), DF_Ml("design:type", Object)], DF_MF.prototype, "screenReaderTextKey", void 0);
DF_MF = DF_Mk([DF_Mz("df-message")], DF_MF);
var DF_Mpc = DF_Mg(["\n    ", "px\n  "]),
    DF_Mqc = DF_Mg(["var(--df-messenger-focus-color-contrast)"]),
    DF_Mrc = DF_Mg(["var(--df-messenger-focus-color)"]),
    DF_Msc = DF_Mg(["\n  border-radius: ", ";\n  border: 3px solid\n    ", ";\n  bottom: 0;\n  box-sizing: border-box;\n  content: '';\n  left: 0;\n  outline: none;\n  position: absolute;\n  right: 0;\n  top: 0;\n"]),
    DF_Mtc = DF_Mg(["\n  .visually-hidden {\n    clip: rect(0 0 0 0);\n    height: 1px;\n    margin: -1px;\n    overflow: hidden;\n    padding: 0;\n    position: absolute;\n    width: 1px;\n    white-space: nowrap;\n    outline: 0;\n  }\n\n  .focus-outline:focus-visible,\n  .focus-outline-round:focus-visible,\n  .focus-outline-contrast:focus-visible {\n    outline: none;\n    position: relative;\n  }\n\n  .focus-outline:focus-visible:before {\n    ",
        "\n  }\n\n  .focus-outline-round:focus-visible:before {\n    ", "\n  }\n\n  .focus-outline-contrast:focus-visible:before {\n    ", "\n  }\n\n  .focus-outset:focus-visible:before {\n    margin: -5px;\n  }\n\n  .focus-circle:focus-visible:before {\n    border-radius: 50%;\n  }\n\n  .focus-inset:focus-visible:before {\n    margin: 5px;\n  }\n"
    ]);

function DF_Muc(a, b) {
    return DF_Mw(DF_Msc, DF_Mw(DF_Mpc, a), (b === void 0 ? 0 : b) ? DF_Mw(DF_Mqc) : DF_Mw(DF_Mrc))
}
var DF_MG = DF_Mw(DF_Mtc, DF_Muc(8, !1), DF_Muc(20, !1), DF_Muc(8, !0));
var DF_Mvc = DF_Mg(['\n  <svg\n    id="defaultSvg"\n    height="36px"\n    width="36px"\n    xmlns="http://www.w3.org/2000/svg"\n    xmlns:xlink="http://www.w3.org/1999/xlink"\n    viewBox="11999 18083\n    41 52">\n    <defs>\n      <style>\n        .cls-1 {\n          clip-path: url(#clip-path);\n        }\n\n        .cls-2 {\n          fill: #ef6c00;\n        }\n\n        .cls-3 {\n          fill: #ff9800;\n        }\n\n        .cls-4 {\n          fill: #bf360c;\n        }\n\n        .cls-4,\n        .cls-5 {\n          opacity: 0.1;\n        }\n\n        .cls-5 {\n          fill: #fff;\n        }\n      </style>\n      <clipPath id="clip-path">\n        <path\n          id="Path_1082"\n          data-name="Path 1082"\n          d="M39.217,10.27,22.275.48a3.559,3.559,0,0,0-3.554,0L1.779,\n          10.27A3.572,3.572,0,0,0,.01,13.357v19.6a3.569,3.569,0,0,0,\n          1.769,3.079l8.479,4.907v10a1.064,1.064,0,0,0,1.071,1.064,\n          1.013,1.013,0,0,0,.527-.146L39.241,36.041a3.532,3.532,0,0,0,\n          1.769-3.079v-19.6A3.575,3.575,0,0,0,39.217,10.27Z"\n          transform="translate(0 0)" />\n      </clipPath>\n    </defs>\n    <g\n      id="Group_1192"\n      data-name="Group 1192"\n      class="cls-1"\n      transform="translate(11998.99 18082.994)">\n      <path\n        id="Path_1078"\n        data-name="Path 1078"\n        class="cls-2"\n        d="M0,13.91V37.6l10.248,5.923V55.377L40.984,\n        37.6V13.91L20.5,25.755Z"\n        transform="translate(0.002 -2.608)" />\n      <path\n        id="Path_1079"\n        data-name="Path 1079"\n        class="cls-3"\n        d="M0,11.175,20.5-.67,40.984,11.175,20.5,23.021Z"\n        transform="translate(0.002 0.127)" />\n      <path\n        id="Path_1080"\n        data-name="Path 1080"\n        class="cls-4"\n        d="M40.5,13.56,20.139,25.332.13,13.763,\n        0,13.844,20.5,25.69,40.984,13.844Z"\n        transform="translate(0.002 -2.542)" />\n      <path\n        id="Path_1081"\n        data-name="Path 1081"\n        class="cls-5"\n        d="M20.5,25.772.13,14,0,14.073,20.5,25.918Z"\n        transform="translate(0.002 -2.625)" />\n    </g>\n  </svg>\n']),
    DF_Mwc = DF_Mg(['\n  <svg\n    id="closeSvg"\n    height="24"\n    viewBox="0 0 24 24"\n    width="24"\n    xmlns="http://www.w3.org/2000/svg">\n    <path\n      d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59\n      12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />\n    <path d="M0 0h24v24H0z" fill="none" />\n  </svg>\n']),
    DF_Mxc = DF_Mr(DF_Mvc),
    DF_Myc = DF_Mr(DF_Mwc);
var DF_Mzc = DF_Mg(["\n  .maximize-focus:focus-within {\n    position: absolute;\n    height: 100%;\n    width: 100%;\n    box-sizing: border-box;\n    ", "\n  }\n"]),
    DF_MAc = DF_Mg([' <div\n      class="error ', '"\n      aria-live="polite">\n      ', "\n    </div>"]),
    DF_MBc = DF_Mg(['<span class="animation"> ', " </span>"]),
    DF_MCc = DF_Mg(['<span class="animation"\n            ><df-message\n              .text=', "\n              .isBot=", "\n              .screenReaderTextKey=", "></df-message\n          ></span>"]),
    DF_MDc = DF_Mg([' <div\n      class="', '"\n      id="messageList"\n      aria-live="polite">\n      ', "\n      ", "\n    </div>"]),
    DF_MEc = DF_Mg(['\n        <div class="message-list-wrapper"> ', " ", " </div>\n      "]),
    DF_MFc = DF_Mg(' <div\n      class="message-list-wrapper minimized"\n      @click=;>\n      ; ;\n      <div class="maximize-focus">\n        <button\n          class="visually-hidden maximize-button"\n          @click=;\n          id="maximize">\n          ;\n        </button>\n      </div>\n      <button\n        class="focus-outline"\n        @click=;\n        id="dismissIcon"\n        aria-label=";">\n        ;\n      </button>\n    </div>'.split(";")),
    DF_MGc = DF_Mw(DF_Mzc, DF_Muc(4, !1));

function DF_MH() {
    var a = DF_M.apply(this, arguments) || this;
    a.minimized = !1;
    a.showBotWriting = !1;
    a.messages = [];
    a.showErrorToast = !1;
    return a
}
DF_Md(DF_MH, DF_M);
DF_MH.v = DF_M.v;
DF_MH.l = DF_M.l;
DF_MH.m = DF_M.m;
DF_MH.h = DF_M.h;
DF_MH.g = DF_M.g;
DF_MH.u = DF_M.u;
DF_MH.i = DF_M.i;
DF_MH.o = DF_M.o;
DF_MH.C = DF_M.C;
DF_MH.s = DF_M.s;
DF_MH.prototype.G = function (a) {
    a.stopPropagation();
    this.closeChat()
};
DF_MH.prototype.g = function () {
    this.maximizeChat()
};
DF_MH.prototype.K = function () {
    var a = DF_Mr(DF_MAc, this.showErrorToast ? "show" : "", DF_MD(this.languageCode, "errorMessage")),
        b = DF_Mr(DF_MDc, "df-message-list", this.messages.map(function (e) {
            return DF_Mr(DF_MBc, e.element)
        }), this.showBotWriting ? DF_Mr(DF_MCc, "⌨ Cafybara is Typing...", !0, "agentTyping") : null);
    if (!this.minimized) return DF_Mr(DF_MEc, a, b);
    var c = DF_MD(this.languageCode, "minimizeAriaLabel"),
        d = DF_MD(this.languageCode, "maximize");
    return DF_Mr(DF_MFc, this.g, a, b, this.g, d, this.G, c, DF_Myc)
};
var DF_MI = DF_MH;
DF_MI.j = [DF_Mjc, DF_MG, DF_MGc];
DF_Mk([DF_MA({
    type: Boolean
}), DF_Ml("design:type", Object)], DF_MI.prototype, "minimized", void 0);
DF_Mk([DF_MA({
    type: Boolean
}), DF_Ml("design:type", Object)], DF_MI.prototype, "showBotWriting", void 0);
DF_Mk([DF_MA({
    type: Array
}), DF_Ml("design:type", Array)], DF_MI.prototype, "messages", void 0);
DF_Mk([DF_MA({
    type: Boolean
}), DF_Ml("design:type", Boolean)], DF_MI.prototype, "showErrorToast", void 0);
DF_Mk([DF_MA({
    H: !1
}), DF_Ml("design:type", Function)], DF_MI.prototype, "maximizeChat", void 0);
DF_Mk([DF_MA({
    H: !1
}), DF_Ml("design:type", Function)], DF_MI.prototype, "closeChat", void 0);
DF_MI = DF_Mk([DF_Mz("df-message-list")], DF_MI);
var DF_MHc = DF_Mw([".df-messenger-wrapper{background-color:#fff;border:0;bottom:20px;color:rgba(0,0,0,.87);font-family: GT Maru, sans-serif;font-size:14px;font-weight:400;margin:0;padding:0;position:fixed;right:20px;text-decoration:none;z-index:100}.df-messenger-wrapper a,.df-messenger-wrapper button{cursor:pointer}.df-messenger-wrapper svg{fill:rgba(0,0,0,.87);margin:0;padding:0}.df-messenger-wrapper img{border:0;margin:0;padding:0}button#widgetIcon{background:#42a5f5;background:var(--df-messenger-button-titlebar-color);border:none;border-radius:35%;bottom:0;box-shadow: 1px 2px 0 4px rgb(213 113 28);cursor:pointer;height:56px;position:absolute;right:0;width:56px; transition: transform 0.2s cubic-bezier(0.47, 1.64, 0.41, 0.8);}button#widgetIcon:hover{transform: scale(1.2);}button#widgetIcon:focus-visible:after{border:3px solid var(--df-messenger-focus-color);border-radius:40px;height:60px;left:-5px;top:-5px;width:60px}button#widgetIcon:focus,button#widgetIcon:focus-visible{outline:none}button#widgetIcon .df-chat-icon{height:36px;left:10px;opacity:1;position:absolute;top:10px;transition:opacity .5s;width:36px}button#widgetIcon div.rotate-fade #closeSvg{opacity:1;transform:rotate(-90deg)}button#widgetIcon div #closeSvg{fill:#fff;fill:var(--df-messenger-button-titlebar-font-color);left:15px;opacity:0;position:absolute;top:15px;transition:transform .5s,opacity .5s}.small-screen-only{display:none}@media screen and (max-width:500px){.expanded #widgetIcon,.minimized #widgetIcon{display:none;visibility:hidden}.expanded>.small-screen-only{display:block}}"]);
var DF_MIc = DF_Mw([".chat-wrapper{background-color:#e5e5e5;border-radius:16px;bottom:105px;box-shadow:1px 4px 15px 0 rgba(0,0,0,.24);display:flex;flex-direction:column;height:0;opacity:0;position:fixed;right:20px;transform:translateX(25%) translateY(35%) scale(.5);transition:transform .2s ease,opacity .2s ease-in,height 0s ease .2s;width:370px}.chat-min{background-color: var(--df-messenger-button-titlebar-color);bottom:20px;height:0;max-width:370px;right:100px;width:auto}.chat-wrapper.chat-min.chat-open{height:auto}.chat-wrapper.chat-open{border: 3px solid var(--df-messenger-button-titlebar-color);height:560px;opacity:1;transform:translateZ(0) scale(1);transition:transform .2s ease,opacity .2s ease-in}.chat-min df-message-list{background-color:transparent;}.chat-min df-messenger-titlebar,.chat-min df-messenger-user-input{display:none}df-message-list{background-color:#fafafa;background-color:var(--df-messenger-chat-background-color);display:flex;flex:1 1 auto;flex-direction:column;min-height:0;min-width:250px}df-messenger-titlebar{z-index:2}@media screen and (max-width:500px){.chat-wrapper{bottom:0;right:0;width:100%}.chat-wrapper.chat-open{height:100%}}"]);
var DF_MJc = DF_Mw([".title-wrapper{align-items:center;background-color:#42a5f5;background-color:var(--df-messenger-button-titlebar-color);border-radius:12px 12px 0 0;box-shadow:0 3px 6px 0 #00000029;color:#fff;color:var(--df-messenger-button-titlebar-font-color);display:flex;font-family: GT Maru, sans-serif;font-size:18px;height:50px;justify-content:space-between;padding-left:15px}.title-wrapper h2{font-size:18px;font-weight:700;margin:0}#minimizeIcon{fill:#fff;fill:var(--df-messenger-button-titlebar-font-color);margin:15px;transform:rotate(90deg)}#minimizeIcon path{stroke:var(--df-messenger-button-titlebar-font-color);}@media screen and (min-width:501px){#minimizeIconButton{visibility:hidden}}#dfTitleBar:focus-visible,#minimizeIconButton:focus-visible{outline:none}#dfTitleBar:focus-visible:after{margin:-8px}#minimizeIconButton:focus-visible:after{margin:8px}#minimizeIconButton{background-color:transparent;border:none}"]);
var DF_MKc = DF_Mg(['\n      <div class="title-wrapper">\n        <h2\n          class="focus-outline-contrast focus-outset"\n          id="dfTitlebar"\n          tabindex="-1"\n          >', '</h2\n        >\n        <button\n          id="minimizeIconButton"\n          class="focus-outline-contrast focus-inset"\n          aria-label="', '"\n          @click=', '>\n          <svg xmlns="http://www.w3.org/2000/svg" id="minimizeIcon" width="24px" height="24px" viewBox="0 0 12 12"> <path fill="none" stroke="currentColor" stroke-linecap="round" d="M8.5 11.5V9c0-.3.2-.5.5-.5h2.5m-8 3V9c0-.3-.2-.5-.5-.5H.5m3-8V3c0 .3-.2.5-.5.5H.5m8-3V3c0 .3.2.5.5.5h2.5M.5.5L3 3M11.5.5L9 3M.5 11.5L3 9m8.5 2.5L9 9" stroke-width="1" /></svg>\n        </button>\n      </div>\n    ']);

function DF_MJ() {
    var a = DF_M.apply(this, arguments) || this;
    a.chatTitle = "";
    return a
}
DF_Md(DF_MJ, DF_M);
DF_MJ.v = DF_M.v;
DF_MJ.l = DF_M.l;
DF_MJ.m = DF_M.m;
DF_MJ.h = DF_M.h;
DF_MJ.g = DF_M.g;
DF_MJ.u = DF_M.u;
DF_MJ.i = DF_M.i;
DF_MJ.o = DF_M.o;
DF_MJ.C = DF_M.C;
DF_MJ.s = DF_M.s;
DF_MJ.prototype.sa = function () {
    var a, b;
    (a = this.T) == null || (b = a.querySelector("#dfTitlebar")) == null || b.focus()
};
DF_MJ.prototype.K = function () {
    var a = this.chatTitle || DF_MD(this.languageCode, "chatTitle"),
        b = DF_MD(this.languageCode, "minimizeAriaLabel");
    return DF_Mr(DF_MKc, a, b, this.closeChat)
};
var DF_MLc = DF_MJ;
DF_MLc.j = [DF_MJc, DF_MG];
DF_Mk([DF_MA(), DF_Ml("design:type", String)], DF_MLc.prototype, "chatTitle", void 0);
DF_Mk([DF_MA({
    H: !1
}), DF_Ml("design:type", Function)], DF_MLc.prototype, "closeChat", void 0);
DF_MLc = DF_Mk([DF_Mz("df-messenger-titlebar")], DF_MLc);
var DF_MMc = DF_Mw([".input-box-wrapper{align-items:center;background-color:var(--df-messenger-input-box-color);background-color:#fff;border-top: 2.5px solid var(--df-messenger-button-titlebar-color);display:flex;font-family: GT Maru, sans-serif;height:50px;z-index:2}.input-container{border-radius:0 0 16px 16px;display:flex;flex-direction:column;overflow:hidden}.input-container input{font-family: GT Maru, sans-serif; background-color:var(--df-messenger-input-box-color);border:none;border-radius:0 0 4px 4px;color:rgba(0,0,0,.87);color:var(--df-messenger-input-font-color);font-size:14px;padding-left:15px;width:100%}::placeholder{color:#757575;color:var(--df-messenger-input-placeholder-font-color);opacity:1}:--ms-input-placeholder{color:#757575;color:var(--df-messenger-input-placeholder-font-color)}::-ms-input-placeholder{color:#757575;color:var(--df-messenger-input-placeholder-font-color)}input:focus{outline-width:0}.input-box-wrapper.show-focus{position:relative}#sendIcon{viewbox:0 0 24 24;cursor:pointer;flex:0 0 auto;height:24px;margin:15px;width:24px}#sendIcon *:hover{fill:#5CB338} #sendIcon * {fill:#42a5f5; fill:var(--df-messenger-send-icon)}#sendIconButton,#sendIconButton:focus,#sendIconButton:hover{align-items:center;background-color:transparent;border:none;display:none;justify-content:center;transform:scale(.01);transition:.3s ease}#sendIconButton:focus{outline:none}#sendIconButton:focus-visible{position:relative}.valid #sendIconButton{display:flex;transform:scale(1)}.check-input{background-color:#e53935;color:#fafafa;font-family: GT Maru, sans-serif;font-size:13px;font-weight:700;height:25px;line-height:1.7;padding-left:10px;transform:translateY(0);transition:transform .2s;z-index:1}"]);

function DF_MK() {
    return document.querySelector("df-messenger")
};

function DF_MNc(a) {
    var b = {};
    if (a.queryInput) {
        b.queryInput = {};
        if (a.queryInput.text) {
            b.queryInput.text = {};
            var c, d;
            b.queryInput.text.text = a == null ? void 0 : (c = a.queryInput) == null ? void 0 : (d = c.text) == null ? void 0 : d.text;
            b.queryInput.languageCode = a.queryInput.text.languageCode
        }
        a.queryInput.event && (b.queryInput.event = {}, b.queryInput.event.event = a.queryInput.event.name, b.queryInput.languageCode = a.queryInput.event.languageCode)
    }
    a.queryParams && (b.queryParams = {}, a.queryParams.payload && (b.queryParams.payload = a.queryParams.payload));
    return b
}

function DF_MOc(a) {
    var b = {};
    a.text && (b.text = a.text);
    a.payload && (b.payload = a.payload);
    return b
};
var DF_MPc = {
    queryInput: {
        event: {
            name: "",
            languageCode: ""
        }
    }
},
    DF_MQc = {
        queryInput: {
            text: {
                text: "",
                languageCode: ""
            }
        }
    },
    DF_MRc = {
        error: {
            code: "",
            message: "",
            status: ""
        }
    };

function DF_MSc(a, b, c) {
    var d = DF_MTc(a, b, c);
    return new Promise(function (e, h) {
        var g = new XMLHttpRequest,
            f = "";
        f = c.agentId ? c.apiUri + "/" + c.agentId + "/sessions/" + c.sessionId : c.apiUri + "/" + c.projectId + "/agent/sessions/" + c.sessionId + ":detectIntent";
        c.dfCx && (f = c.projectId ? c.apiUri + "/projects/" + c.projectId + "/agents/" + c.agentId + "/sessions/" + c.sessionId : c.apiUri + "/" + c.agentId + "/sessions/" + c.sessionId);
        g.open("POST", f, !0);
        g.setRequestHeader("Content-type", "application/json");
        c.accessToken !== null && typeof c.accessToken !==
            "undefined" && g.setRequestHeader("Authorization", "Bearer " + c.accessToken);
        d ? (c.botWriting = !0, g.send(JSON.stringify(c.dfCx ? DF_MNc(d) : d)), DF_MC(c, "df-request-sent", {
            requestBody: d
        })) : (f = Object.assign({}, DF_MRc), f.error.message = "Please specify query input (text or event)", DF_MUc(f), h(f));
        g.onreadystatechange = function () {
            var k = g.responseText;
            k && k.indexOf && k.indexOf(")]}'\n") === 0 && (k = k.substring(5));
            if (g.readyState === 4 && g.status === 200) {
                if (c.dfCx) {
                    var l = JSON;
                    var n = l.stringify,
                        m = JSON.parse(k);
                    k = {};
                    k.responseId =
                        m.responseId;
                    var p = m == null ? void 0 : m.queryResult,
                        q;
                    m = {
                        fulfillmentMessages: p == null ? void 0 : (q = p.responseMessages) == null ? void 0 : q.map(DF_MOc),
                        languageCode: p == null ? void 0 : p.languageCode,
                        queryText: p == null ? void 0 : p.text
                    };
                    k.queryResult = m;
                    l = n.call(l, k)
                } else l = k;
                e(l)
            } else g.readyState === 4 && g.status >= 400 && (l = k ? JSON.parse(k) : {}, DF_MUc(l), h(l))
        };
        g.onerror = function () {
            console.error("DfMessenger Request failed ", this.status + ": " + this.statusText)
        }
    })
}

function DF_MUc(a) {
    DF_MC(DF_MK(), "df-messenger-error", {
        error: a
    })
}

function DF_MTc(a, b, c) {
    if (!c.requestBody) return c.userId ? DF_MVc(c, a) : a;
    switch (b) {
        case "text":
            var d = c.requestBody(a.queryInput.text.text, "text");
            d = DF_MWc(c, d);
            break;
        case "event":
            d = c.requestBody(a.queryInput.event, "event");
            d = DF_MWc(c, d);
            break;
        default:
            console.error('DfMessenger: Invalid input type "' + b + '"')
    }
    return d
}

function DF_MVc(a, b) {
    b.queryParams ? b.queryParams.payload || (b.queryParams.payload = {}) : b.queryParams = {
        payload: {}
    };
    b.queryParams.payload.userId = a.userId || "";
    return b
}

function DF_MWc(a, b) {
    if (b && b.queryInput && (b.queryInput.text || b.queryInput.event)) a.userId && (b = DF_MVc(a, b));
    else return console.error("DfMessenger: Please return a valid request body."), null;
    return b
}

function DF_MXc(a) {
    var b = Object.assign({}, DF_MQc);
    b.queryInput.text.text = a || "";
    var c;
    b.queryInput.text.languageCode = ((c = DF_MK()) == null ? void 0 : c.languageCode) || "";
    return b
};
var DF_MYc = DF_Mw(["#dfAccordionWrapper{background:#fff;border-radius:8px;color:#000;cursor:pointer;display:flex;flex-direction:column;font-family: GT Maru, sans-serif;font-size:14px;padding:12px;text-decoration:none}#dfAccordionWrapper .top-row{align-items:stretch;background-color:transparent;border:none;display:flex;justify-content:space-between}#dfAccordionWrapper .top-row:hover{cursor:pointer}#dfAccordionWrapper .top-row .content{display:flex}#dfAccordionWrapper .image-content{display:block;flex-direction:column;justify-content:center;overflow:inherit;width:auto}#dfAccordionWrapper #image{border-radius:3px;margin-right:10px;max-width:47px}#dfAccordionWrapper #title{color:#000;font-size:14px;font-weight:700;margin:0}#dfAccordionWrapper #subtitle{color:#757575;font-size:13px;text-align:left}#dfAccordionWrapper .text-content{display:flex;flex-direction:column;justify-content:space-evenly}#dfAccordionWrapper .text-row{max-height:inherit;transition:max-height .25s ease-in}#dfAccordionWrapper #text{padding-top:10px}#dfAccordionWrapper #expandIcon{color:#757575;font-size:32px;padding:7px 0;transform:rotate(90deg);transition:transform .15s ease-out}#dfAccordionWrapper .word-wrap{word-wrap:break-word;overflow-wrap:break-word;word-break:break-word}#dfAccordionWrapper #expandIcon.open{font-size:32px;padding:7px 0;transform:rotate(-90deg);transition:transform .15s ease-in}#dfAccordionWrapper button:focus-visible{outline:none;position:relative}button{font-family: GT Maru, sans-serif;font-size:14px;text-align:left}"]);

function DF_MZc(a, b) {
    if (Error.captureStackTrace) Error.captureStackTrace(this, DF_MZc);
    else {
        var c = Error().stack;
        c && (this.stack = c)
    }
    a && (this.message = String(a));
    b !== void 0 && (this.cause = b)
}
DF_MDa(DF_MZc, Error);
DF_MZc.prototype.name = "CustomError";

function DF_M_c(a, b) {
    a = a.split("%s");
    for (var c = "", d = a.length - 1, e = 0; e < d; e++) c += a[e] + (e < b.length ? b[e] : "%s");
    DF_MZc.call(this, c + a[d])
}
DF_MDa(DF_M_c, DF_MZc);
DF_M_c.prototype.name = "AssertionError";
var DF_M0c = Array.prototype.indexOf ? function (a, b) {
    return Array.prototype.indexOf.call(a, b, void 0)
} : function (a, b) {
    if (typeof a === "string") return typeof b !== "string" || b.length != 1 ? -1 : a.indexOf(b, 0);
    for (var c = 0; c < a.length; c++)
        if (c in a && a[c] === b) return c;
    return -1
},
    DF_M1c = Array.prototype.forEach ? function (a, b, c) {
        Array.prototype.forEach.call(a, b, c)
    } : function (a, b, c) {
        for (var d = a.length, e = typeof a === "string" ? a.split("") : a, h = 0; h < d; h++) h in e && b.call(c, e[h], h, a)
    },
    DF_M2c = Array.prototype.map ? function (a, b) {
        return Array.prototype.map.call(a,
            b, void 0)
    } : function (a, b) {
        for (var c = a.length, d = Array(c), e = typeof a === "string" ? a.split("") : a, h = 0; h < c; h++) h in e && (d[h] = b.call(void 0, e[h], h, a));
        return d
    };

function DF_M3c(a) {
    return Array.prototype.concat.apply([], arguments)
}

function DF_M4c(a) {
    var b = a.length;
    if (b > 0) {
        for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
        return c
    }
    return []
}

function DF_M5c(a, b) {
    return DF_M3c.apply([], DF_M2c(a, b))
};

function DF_M6c() {
    return null
};
var DF_M7c = {
    "* ARIA-CHECKED": !0,
    "* ARIA-COLCOUNT": !0,
    "* ARIA-COLINDEX": !0,
    "* ARIA-CONTROLS": !0,
    "* ARIA-DESCRIBEDBY": !0,
    "* ARIA-DISABLED": !0,
    "* ARIA-EXPANDED": !0,
    "* ARIA-GOOG-EDITABLE": !0,
    "* ARIA-HASPOPUP": !0,
    "* ARIA-HIDDEN": !0,
    "* ARIA-LABEL": !0,
    "* ARIA-LABELLEDBY": !0,
    "* ARIA-MULTILINE": !0,
    "* ARIA-MULTISELECTABLE": !0,
    "* ARIA-ORIENTATION": !0,
    "* ARIA-PLACEHOLDER": !0,
    "* ARIA-READONLY": !0,
    "* ARIA-REQUIRED": !0,
    "* ARIA-ROLEDESCRIPTION": !0,
    "* ARIA-ROWCOUNT": !0,
    "* ARIA-ROWINDEX": !0,
    "* ARIA-SELECTED": !0,
    "* ABBR": !0,
    "* ACCEPT": !0,
    "* ACCESSKEY": !0,
    "* ALIGN": !0,
    "* ALT": !0,
    "* AUTOCOMPLETE": !0,
    "* AXIS": !0,
    "* BGCOLOR": !0,
    "* BORDER": !0,
    "* CELLPADDING": !0,
    "* CELLSPACING": !0,
    "* CHAROFF": !0,
    "* CHAR": !0,
    "* CHECKED": !0,
    "* CLEAR": !0,
    "* COLOR": !0,
    "* COLSPAN": !0,
    "* COLS": !0,
    "* COMPACT": !0,
    "* CONTROLS": !0,
    "* CONTROLSLIST": !0,
    "* COORDS": !0,
    "* DATETIME": !0,
    "* DIR": !0,
    "* DISABLED": !0,
    "* ENCTYPE": !0,
    "* FACE": !0,
    "* FRAME": !0,
    "* HEIGHT": !0,
    "* HREFLANG": !0,
    "* HSPACE": !0,
    "* ISMAP": !0,
    "* LABEL": !0,
    "* LANG": !0,
    "* MAX": !0,
    "* MAXLENGTH": !0,
    "* METHOD": !0,
    "* MULTIPLE": !0,
    "* NOHREF": !0,
    "* NOSHADE": !0,
    "* NOWRAP": !0,
    "* OPEN": !0,
    "* READONLY": !0,
    "* REQUIRED": !0,
    "* REL": !0,
    "* REV": !0,
    "* ROLE": !0,
    "* ROWSPAN": !0,
    "* ROWS": !0,
    "* RULES": !0,
    "* SCOPE": !0,
    "* SELECTED": !0,
    "* SHAPE": !0,
    "* SIZE": !0,
    "* SPAN": !0,
    "* START": !0,
    "* SUMMARY": !0,
    "* TABINDEX": !0,
    "* TITLE": !0,
    "* TYPE": !0,
    "* VALIGN": !0,
    "* VALUE": !0,
    "* VSPACE": !0,
    "* WIDTH": !0
},
    DF_M8c = {
        "* USEMAP": !0,
        "* ACTION": !0,
        "* CITE": !0,
        "* HREF": !0,
        "* LONGDESC": !0,
        "* SRC": !0,
        "LINK HREF": !0,
        "* FOR": !0,
        "* HEADERS": !0,
        "* NAME": !0,
        "A TARGET": !0,
        "* CLASS": !0,
        "* ID": !0,
        "* STYLE": !0
    };

function DF_M9c(a) {
    var b = [],
        c = 0,
        d;
    for (d in a) b[c++] = d;
    return b
}

function DF_M$c(a) {
    var b = {},
        c;
    for (c in a) b[c] = a[c];
    return b
};
var DF_ML = String.prototype.trim ? function (a) {
    return a.trim()
} : function (a) {
    return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
};

function DF_Mad(a) {
    if (/^(script|style)$/i.test(a.tagName)) throw Error("");
};
var DF_Mbd = "alternate author bookmark canonical cite help icon license modulepreload next prefetch dns-prefetch prerender preconnect preload prev search subresource".split(" ");

function DF_Mcd(a, b) {
    if (b instanceof DF_M0a) a.href = DF_M2a(b).toString(), a.rel = "stylesheet";
    else {
        if (DF_Mbd.indexOf("stylesheet") === -1) throw Error('TrustedResourceUrl href attribute required with rel="stylesheet"');
        b instanceof DF_M3a ? b = DF_M5a(b) : b = DF_M$a.test(b) ? b : void 0;
        b !== void 0 && (a.href = b, a.rel = "stylesheet")
    }
};
var DF_Mdd, DF_Med;
a: {
    for (var DF_Mfd = ["CLOSURE_FLAGS"], DF_Mgd = DF_Mj, DF_Mhd = 0; DF_Mhd < DF_Mfd.length; DF_Mhd++)
        if (DF_Mgd = DF_Mgd[DF_Mfd[DF_Mhd]], DF_Mgd == null) {
            DF_Med = null;
            break a
        } DF_Med = DF_Mgd
}
var DF_Mid = DF_Med && DF_Med[610401301];
DF_Mdd = DF_Mid != null ? DF_Mid : !1;

function DF_Mjd() {
    var a = DF_Mj.navigator;
    return a && (a = a.userAgent) ? a : ""
}
var DF_Mkd, DF_Mld = DF_Mj.navigator;
DF_Mkd = DF_Mld ? DF_Mld.userAgentData || null : null;

function DF_Mmd(a) {
    return DF_Mdd ? DF_Mkd ? DF_Mkd.brands.some(function (b) {
        return (b = b.brand) && b.indexOf(a) != -1
    }) : !1 : !1
}

function DF_MM(a) {
    return DF_Mjd().indexOf(a) != -1
};

function DF_MN() {
    return DF_Mdd ? !!DF_Mkd && DF_Mkd.brands.length > 0 : !1
}

function DF_Mnd() {
    return DF_MN() ? DF_Mmd("Chromium") : (DF_MM("Chrome") || DF_MM("CriOS")) && !(DF_MN() ? 0 : DF_MM("Edge")) || DF_MM("Silk")
};
var DF_Mod = DF_MN() ? !1 : DF_MM("Trident") || DF_MM("MSIE"),
    DF_Mpd = DF_Mjd().toLowerCase().indexOf("webkit") != -1 && !DF_MM("Edge");

function DF_Mqd(a) {
    return a && a.parentNode ? a.parentNode.removeChild(a) : null
};
var DF_Mrd = {};

function DF_Msd(a) {
    var b = DF_Mrd.hasOwnProperty(a) ? DF_Mrd[a] : null;
    if (b) return b;
    Object.keys(DF_Mrd).length > 65536 && (DF_Mrd = {});
    var c = [0, 0, 0, 0],
        d = RegExp("\\\\[0-9A-Fa-f]{1,5}\\s", "g");
    b = DF_Mtd(a, RegExp("\\\\[0-9A-Fa-f]{6}\\s?", "g"));
    b = DF_Mtd(b, d);
    b = DF_Mtd(b, /\\./g);
    b = b.replace(RegExp(":not\\(([^\\)]*)\\)", "g"), "     $1 ");
    b = b.replace(RegExp("{[^]*", "gm"), "");
    b = DF_MO(b, c, RegExp("(\\[[^\\]]+\\])", "g"), 2);
    b = DF_MO(b, c, RegExp("(#[^\\#\\s\\+>~\\.\\[:]+)", "g"), 1);
    b = DF_MO(b, c, RegExp("(\\.[^\\s\\+>~\\.\\[:]+)", "g"),
        2);
    b = DF_MO(b, c, /(::[^\s\+>~\.\[:]+|:first-line|:first-letter|:before|:after)/gi, 3);
    b = DF_MO(b, c, /(:[\w-]+\([^\)]*\))/gi, 2);
    b = DF_MO(b, c, /(:[^\s\+>~\.\[:]+)/g, 2);
    b = b.replace(/[\*\s\+>~]/g, " ");
    b = b.replace(/[#\.]/g, " ");
    DF_MO(b, c, /([^\s\+>~\.\[:]+)/g, 3);
    b = c;
    return DF_Mrd[a] = b
}

function DF_MO(a, b, c, d) {
    return a.replace(c, function (e) {
        b[d] += 1;
        return Array(e.length + 1).join(" ")
    })
}

function DF_Mtd(a, b) {
    return a.replace(b, function (c) {
        return Array(c.length + 1).join("A")
    })
};

function DF_Mud(a, b) {
    if (a.indexOf("<") != -1) throw Error("Selector does not allow '<', got: " + a);
    var c = a.replace(/('|")((?!\1)[^\r\n\f\\]|\\[\s\S])*\1/g, "");
    if (!/^[-_a-zA-Z0-9#.:* ,>+~[\]()=\\^$|]+$/.test(c)) throw Error("Selector allows only [-_a-zA-Z0-9#.:* ,>+~[\\]()=\\^$|] and strings, got: " + a);
    if (!DF_Mvd(c)) throw Error("() and [] in selector must be balanced, got: " + a);
    b = typeof b === "string" ? b : Object.entries(b).map(function (d) {
        var e = DF_Me(d);
        d = e.next().value;
        e = e.next().value;
        return d + ":" + e + ";"
    }).join("");
    return new DF_MZa(a + "{" + b.replace(/</g, "\\3C ") + "}")
}

function DF_Mvd(a) {
    for (var b = {
        "(": ")",
        "[": "]"
    }, c = [], d = 0; d < a.length; d++) {
        var e = a[d];
        if (b[e]) c.push(b[e]);
        else {
            a: {
                var h = void 0;
                for (h in b)
                    if (b[h] == e) {
                        h = !0;
                        break a
                    } h = !1
            }
            if (h && c.pop() != e) return !1
        }
    }
    return c.length == 0
};
var DF_Mwd = {
    rgb: !0,
    rgba: !0,
    alpha: !0,
    rect: !0,
    image: !0,
    "linear-gradient": !0,
    "radial-gradient": !0,
    "repeating-linear-gradient": !0,
    "repeating-radial-gradient": !0,
    "cubic-bezier": !0,
    matrix: !0,
    perspective: !0,
    rotate: !0,
    rotate3d: !0,
    rotatex: !0,
    rotatey: !0,
    steps: !0,
    rotatez: !0,
    scale: !0,
    scale3d: !0,
    scalex: !0,
    scaley: !0,
    scalez: !0,
    skew: !0,
    skewx: !0,
    skewy: !0,
    translate: !0,
    translate3d: !0,
    translatex: !0,
    translatey: !0,
    translatez: !0
},
    DF_Mxd = /[\n\f\r"'()*<>]/g,
    DF_Myd = {
        "\n": "%0a",
        "\f": "%0c",
        "\r": "%0d",
        '"': "%22",
        "'": "%27",
        "(": "%28",
        ")": "%29",
        "*": "%2a",
        "<": "%3c",
        ">": "%3e"
    };

function DF_Mzd(a) {
    return DF_Myd[a]
}

function DF_MAd(a, b, c) {
    b = DF_ML(b);
    if (b == "") return null;
    var d = String(b.slice(0, 4)).toLowerCase();
    if (("url(" < d ? -1 : "url(" == d ? 0 : 1) == 0) {
        if (!b.endsWith(")") || (b ? b.split("(").length - 1 : 0) > 1 || (b ? b.split(")").length - 1 : 0) > 1 || !c) a = null;
        else {
            a: for (b = b.substring(4, b.length - 1), d = 0; d < 2; d++) {
                var e = "\"'".charAt(d);
                if (b.charAt(0) == e && b.charAt(b.length - 1) == e) {
                    b = b.substring(1, b.length - 1);
                    break a
                }
            }
            a = c ? (a = c(b, a)) && DF_M5a(a) != DF_M4a.toString() ? 'url("' + DF_M5a(a).replace(DF_Mxd, DF_Mzd) + '")' : null : null
        }
        return a
    }
    if (b.indexOf("(") >
        0) {
        if (/"|'/.test(b)) return null;
        for (a = /([\-\w]+)\(/g; c = a.exec(b);)
            if (!(c[1].toLowerCase() in DF_Mwd)) return null
    }
    return b
};
!DF_MM("Android") || DF_Mnd();
DF_Mnd();
DF_MM("Safari") && (DF_Mnd() || (DF_MN() ? 0 : DF_MM("Coast")) || (DF_MN() ? 0 : DF_MM("Opera")) || (DF_MN() ? 0 : DF_MM("Edge")) || (DF_MN() ? DF_Mmd("Microsoft Edge") : DF_MM("Edg/")) || DF_MN() && DF_Mmd("Opera"));

function DF_MP(a, b) {
    a = DF_Mj[a];
    return a && a.prototype ? (b = Object.getOwnPropertyDescriptor(a.prototype, b)) && b.get || null : null
}

function DF_MQ(a, b) {
    return (a = DF_Mj[a]) && a.prototype && a.prototype[b] || null
}
var DF_MBd = DF_MP("Element", "attributes") || DF_MP("Node", "attributes"),
    DF_MCd = DF_MQ("Element", "hasAttribute"),
    DF_MDd = DF_MQ("Element", "getAttribute"),
    DF_MEd = DF_MQ("Element", "setAttribute"),
    DF_MFd = DF_MQ("Element", "removeAttribute");
DF_MP("Element", "innerHTML") || DF_MP("HTMLElement", "innerHTML");
var DF_MGd = DF_MQ("Element", "getElementsByTagName"),
    DF_MHd = DF_MQ("Element", "matches") || DF_MQ("Element", "msMatchesSelector"),
    DF_MId = DF_MP("Node", "nodeName"),
    DF_MJd = DF_MP("Node", "nodeType"),
    DF_MKd = DF_MP("Node", "parentNode");
DF_MP("Node", "childNodes");
var DF_MLd = DF_MP("HTMLElement", "style") || DF_MP("Element", "style"),
    DF_MMd = DF_MP("HTMLStyleElement", "sheet"),
    DF_MNd = DF_MQ("CSSStyleDeclaration", "getPropertyValue"),
    DF_MOd = DF_MQ("CSSStyleDeclaration", "setProperty"),
    DF_MPd = DF_MP("Element", "namespaceURI") || DF_MP("Node", "namespaceURI");

function DF_MR(a, b, c, d) {
    if (a) return a.apply(b);
    a = b[c];
    if (!d(a)) throw Error("Clobbering detected");
    return a
}

function DF_MS(a, b, c, d) {
    if (a) return a.apply(b, d);
    if (DF_Mod && document.documentMode < 10) {
        if (!b[c].call) throw Error("IE Clobbering detected");
    } else if (typeof b[c] != "function") throw Error("Clobbering detected");
    return b[c].apply(b, d)
}

function DF_MQd(a) {
    return DF_MR(DF_MBd, a, "attributes", function (b) {
        return b instanceof NamedNodeMap
    })
}

function DF_MRd(a, b, c) {
    try {
        DF_MS(DF_MEd, a, "setAttribute", [b, c])
    } catch (d) {
        if (d.message.indexOf("A security problem occurred") == -1) throw Error('Failed to set attribute "' + b + '" on element: <' + a.tagName + ">: " + d.message, {
            cause: d
        });
    }
}

function DF_MSd(a) {
    return DF_MR(DF_MLd, a, "style", function (b) {
        return b instanceof CSSStyleDeclaration
    })
}

function DF_MTd(a) {
    return DF_MR(DF_MMd, a, "sheet", function (b) {
        return b instanceof CSSStyleSheet
    })
}

function DF_MUd(a) {
    return DF_MR(DF_MId, a, "nodeName", function (b) {
        return typeof b == "string"
    })
}

function DF_MVd(a) {
    return DF_MR(DF_MJd, a, "nodeType", function (b) {
        return typeof b == "number"
    })
}

function DF_MWd(a) {
    return DF_MR(DF_MKd, a, "parentNode", function (b) {
        return !(b && typeof b.name == "string" && b.name && b.name.toLowerCase() == "parentnode")
    })
}

function DF_MXd(a, b) {
    return DF_MS(DF_MNd, a, a.getPropertyValue ? "getPropertyValue" : "getAttribute", [b]) || ""
}

function DF_MYd(a, b, c) {
    DF_MS(DF_MOd, a, a.setProperty ? "setProperty" : "setAttribute", [b, c])
}

function DF_MZd(a) {
    return DF_MR(DF_MPd, a, "namespaceURI", function (b) {
        return typeof b == "string"
    })
};
var DF_M_d = DF_Mg([""]),
    DF_M0d = RegExp("\\s*([^\\s'\",]+[^'\",]*(('([^'\\r\\n\\f\\\\]|\\\\[^])*')|(\"([^\"\\r\\n\\f\\\\]|\\\\[^])*\")|[^'\",])*)", "g"),
    DF_M1d = {
        "-webkit-border-horizontal-spacing": !0,
        "-webkit-border-vertical-spacing": !0
    };

function DF_M2d(a, b, c) {
    var d = [];
    DF_M3d(DF_M4c(a.cssRules)).forEach(function (e) {
        if (b && !/[a-zA-Z][\w-:\.]*/.test(b)) throw Error("Invalid container id");
        if (!(b && DF_Mod && document.documentMode == 10 && /\\['"]/.test(e.selectorText))) {
            var h = b ? e.selectorText.replace(DF_M0d, "#" + b + " $1") : e.selectorText;
            d.push(DF_Mud(h, DF_M4d(e.style, c)))
        }
    });
    return new DF_MZa(d.map(DF_M_a).join(""))
}

function DF_M3d(a) {
    return a.filter(function (b) {
        return b instanceof CSSStyleRule || b.type == CSSRule.STYLE_RULE
    })
}

function DF_M5d(a, b, c) {
    a = DF_M6d("<style>" + a + "</style>");
    var d;
    a == null || a.sheet == null ? d = new DF_MZa(DF_M_d[0]) : d = DF_M2d(a.sheet, b != void 0 ? b : null, c);
    return d
}

function DF_M6d(a) {
    a = DF_MXa("<html><head></head><body>" + a + "</body></html>");
    return (new DOMParser).parseFromString(DF_Mm(a), "text/html").body.children[0]
}

function DF_M4d(a, b) {
    if (!a) return "";
    var c = document.createElement("div").style;
    DF_M7d(a).forEach(function (d) {
        var e = DF_Mpd && d in DF_M1d ? d : d.replace(/^-(?:apple|css|epub|khtml|moz|mso?|o|rim|wap|webkit|xv)-(?=[a-z])/i, "");
        e.lastIndexOf("--", 0) != 0 && e.lastIndexOf("var", 0) != 0 && (d = DF_MXd(a, d), d = DF_MAd(e, d, b), d != null && DF_MYd(c, e, d))
    });
    return c.cssText || ""
}

function DF_M8d(a) {
    var b = Array.from(DF_MS(DF_MGd, a, "getElementsByTagName", ["STYLE"])),
        c = DF_M5c(b, function (g) {
            return DF_M4c(DF_MTd(g).cssRules)
        });
    c = DF_M3d(c);
    for (var d = [], e = 0; e < c.length; e++) d[e] = {
        index: e,
        Pa: c[e]
    };
    d.sort(function (g, f) {
        var k = DF_Msd(g.Pa.selectorText),
            l = DF_Msd(f.Pa.selectorText);
        a: {
            for (var n = Math.min(k.length, l.length), m = 0; m < n; m++) {
                var p = k[m],
                    q = l[m];
                p = p > q ? 1 : p < q ? -1 : 0;
                if (p != 0) {
                    l = p;
                    break a
                }
            }
            k = k.length; l = l.length; l = k > l ? 1 : k < l ? -1 : 0
        }
        return l || g.index - f.index
    });
    for (e = 0; e < d.length; e++) c[e] = d[e].Pa;
    c.reverse();
    a = document.createTreeWalker(a, NodeFilter.SHOW_ELEMENT, null, !1);
    for (var h; h = a.nextNode();) c.forEach(function (g) {
        DF_MS(DF_MHd, h, h.matches ? "matches" : "msMatchesSelector", [g.selectorText]) && g.style && DF_M9d(h, g.style)
    });
    b.forEach(DF_Mqd)
}

function DF_M9d(a, b) {
    var c = DF_M7d(a.style);
    DF_M7d(b).forEach(function (d) {
        if (!(c.indexOf(d) >= 0)) {
            var e = DF_MXd(b, d);
            DF_MYd(a.style, d, e)
        }
    })
}

function DF_M7d(a) {
    var b = typeof a;
    b = b != "object" ? b : a ? Array.isArray(a) ? "array" : b : "null";
    b == "array" || b == "object" && typeof a.length == "number" ? a = DF_M4c(a) : (a = DF_M9c(a), b = DF_M0c(a, "cssText"), b >= 0 && Array.prototype.splice.call(a, b, 1));
    return a
};
var DF_M$d = typeof WeakMap != "undefined" && WeakMap.toString().indexOf("[native code]") != -1,
    DF_Mae = 0;

function DF_Mbe() {
    this.i = [];
    this.h = [];
    this.g = "data-elementweakmap-index-" + DF_Mae++
}
DF_Mbe.prototype.set = function (a, b) {
    DF_MS(DF_MCd, a, "hasAttribute", [this.g]) ? (a = parseInt(DF_MS(DF_MDd, a, "getAttribute", [this.g]) || null, 10), this.h[a] = b) : (b = this.h.push(b) - 1, DF_MRd(a, this.g, b.toString()), this.i.push(a));
    return this
};
DF_Mbe.prototype.get = function (a) {
    if (DF_MS(DF_MCd, a, "hasAttribute", [this.g])) return a = parseInt(DF_MS(DF_MDd, a, "getAttribute", [this.g]) || null, 10), this.h[a]
};
DF_Mbe.prototype.clear = function () {
    this.i.forEach(function (a) {
        DF_MS(DF_MFd, a, "removeAttribute", [this.g])
    }, this);
    this.i = [];
    this.h = []
};

function DF_Mce() {
    this.h = document.implementation.createHTMLDocument("")
};
var DF_Mde = {
    APPLET: !0,
    BASE: !0,
    BGSOUND: !0,
    EMBED: !0,
    FORM: !0,
    IFRAME: !0,
    ISINDEX: !0,
    KEYGEN: !0,
    LAYER: !0,
    LINK: !0,
    META: !0,
    OBJECT: !0,
    SCRIPT: !0,
    SVG: !0,
    STYLE: !0,
    TEMPLATE: !0
};
var DF_Mee = {
    A: !0,
    ABBR: !0,
    ACRONYM: !0,
    ADDRESS: !0,
    AREA: !0,
    ARTICLE: !0,
    ASIDE: !0,
    AUDIO: !0,
    B: !0,
    BDI: !0,
    BDO: !0,
    BIG: !0,
    BLOCKQUOTE: !0,
    BR: !0,
    BUTTON: !0,
    CAPTION: !0,
    CENTER: !0,
    CITE: !0,
    CODE: !0,
    COL: !0,
    COLGROUP: !0,
    DATA: !0,
    DATALIST: !0,
    DD: !0,
    DEL: !0,
    DETAILS: !0,
    DFN: !0,
    DIALOG: !0,
    DIR: !0,
    DIV: !0,
    DL: !0,
    DT: !0,
    EM: !0,
    FIELDSET: !0,
    FIGCAPTION: !0,
    FIGURE: !0,
    FONT: !0,
    FOOTER: !0,
    FORM: !0,
    H1: !0,
    H2: !0,
    H3: !0,
    H4: !0,
    H5: !0,
    H6: !0,
    HEADER: !0,
    HGROUP: !0,
    HR: !0,
    I: !0,
    IMG: !0,
    INPUT: !0,
    INS: !0,
    KBD: !0,
    LABEL: !0,
    LEGEND: !0,
    LI: !0,
    MAIN: !0,
    MAP: !0,
    MARK: !0,
    MENU: !0,
    METER: !0,
    NAV: !0,
    NOSCRIPT: !0,
    OL: !0,
    OPTGROUP: !0,
    OPTION: !0,
    OUTPUT: !0,
    P: !0,
    PRE: !0,
    PROGRESS: !0,
    Q: !0,
    S: !0,
    SAMP: !0,
    SECTION: !0,
    SELECT: !0,
    SMALL: !0,
    SOURCE: !0,
    SPAN: !0,
    STRIKE: !0,
    STRONG: !0,
    STYLE: !0,
    SUB: !0,
    SUMMARY: !0,
    SUP: !0,
    TABLE: !0,
    TBODY: !0,
    TD: !0,
    TEXTAREA: !0,
    TFOOT: !0,
    TH: !0,
    THEAD: !0,
    TIME: !0,
    TR: !0,
    TT: !0,
    U: !0,
    UL: !0,
    VAR: !0,
    VIDEO: !0,
    WBR: !0
};
var DF_Mfe = {
    "ANNOTATION-XML": !0,
    "COLOR-PROFILE": !0,
    "FONT-FACE": !0,
    "FONT-FACE-SRC": !0,
    "FONT-FACE-URI": !0,
    "FONT-FACE-FORMAT": !0,
    "FONT-FACE-NAME": !0,
    "MISSING-GLYPH": !0
};

function DF_Mge(a) {
    this.h = document.implementation.createHTMLDocument("");
    a = a || new DF_Mhe;
    DF_Mie(a);
    this.g = DF_M$c(a.g);
    this.J = DF_M$c(a.Z);
    this.i = DF_M$c(a.ba);
    this.Z = a.G;
    a.na.forEach(function (b) {
        if (b.lastIndexOf("data-", 0) != 0) throw new DF_M_c('Only "data-" attributes allowed, got: %s.', [b]);
        if (b.lastIndexOf("data-sanitizer-", 0) == 0) throw new DF_M_c('Attributes with "%s" prefix are not allowed, got: %s.', ["data-sanitizer-", b]);
        this.g["* " + b.toUpperCase()] = DF_Mje
    }, this);
    a.ea.forEach(function (b) {
        b = b.toUpperCase();
        if (b.indexOf("-") == -1 || DF_Mfe[b]) throw new DF_M_c("Only valid custom element tag names allowed, got: %s.", [b]);
        this.i[b] = !0
    }, this);
    this.N = a.i;
    this.F = a.N;
    this.j = null;
    this.G = a.J
}
DF_MDa(DF_Mge, DF_Mce);

function DF_Mke(a) {
    return function (b, c) {
        return (b = a(DF_ML(b), c)) && DF_M5a(b) != DF_M4a.toString() ? DF_M5a(b) : null
    }
}

function DF_Mhe() {
    this.g = {};
    DF_M1c([DF_M7c, DF_M8c], function (a) {
        DF_M9c(a).forEach(function (b) {
            this.g[b] = DF_Mje
        }, this)
    }, this);
    this.h = {};
    this.na = [];
    this.ea = [];
    this.Z = DF_M$c(DF_Mde);
    this.ba = DF_M$c(DF_Mee);
    this.G = !1;
    this.Ba = DF_Mle;
    this.Aa = this.F = this.za = this.i = DF_M6c;
    this.N = null;
    this.j = this.J = !1
}

function DF_Mme(a, b) {
    return function (c, d, e, h) {
        c = a(c, d, e, h);
        return c == null ? null : b(c, d, e, h)
    }
}

function DF_MT(a, b, c, d) {
    a[c] && !b[c] && (a[c] = DF_Mme(a[c], d))
}

function DF_Mie(a) {
    if (a.j) throw Error("HtmlSanitizer.Builder.build() can only be used once.");
    DF_MT(a.g, a.h, "* USEMAP", DF_Mne);
    var b = DF_Mke(a.Ba);
    ["* ACTION", "* CITE", "* HREF"].forEach(function (d) {
        DF_MT(this.g, this.h, d, b)
    }, a);
    var c = DF_Mke(a.i);
    ["* LONGDESC", "* SRC", "LINK HREF"].forEach(function (d) {
        DF_MT(this.g, this.h, d, c)
    }, a);
    ["* FOR", "* HEADERS", "* NAME"].forEach(function (d) {
        DF_MT(this.g, this.h, d, DF_MCa(DF_Moe, this.za))
    }, a);
    DF_MT(a.g, a.h, "A TARGET", DF_MCa(DF_Mpe, ["_blank", "_self"]));
    DF_MT(a.g, a.h,
        "* CLASS", DF_MCa(DF_Mqe, a.F));
    DF_MT(a.g, a.h, "* ID", DF_MCa(DF_Mre, a.F));
    DF_MT(a.g, a.h, "* STYLE", DF_MCa(a.Aa, c));
    a.j = !0
}

function DF_Mle(a) {
    return DF_M9a(a)
}

function DF_Mse(a, b) {
    a || (a = "*");
    return (a + " " + b).toUpperCase()
}

function DF_Mje(a) {
    return DF_ML(a)
}

function DF_Mpe(a, b) {
    b = DF_ML(b);
    return DF_M0c(a, b.toLowerCase()) >= 0 ? b : null
}

function DF_Mne(a) {
    return (a = DF_ML(a)) && a.charAt(0) == "#" ? a : null
}

function DF_Moe(a, b, c) {
    return a(DF_ML(b), c)
}

function DF_Mqe(a, b, c) {
    b = b.split(/(?:\s+)/);
    for (var d = [], e = 0; e < b.length; e++) {
        var h = a(b[e], c);
        h && d.push(h)
    }
    return d.length == 0 ? null : d.join(" ")
}

function DF_Mre(a, b, c) {
    return a(DF_ML(b), c)
}

function DF_Mte(a) {
    var b = DF_Mue;
    var c = !("STYLE" in b.J) && "STYLE" in b.i;
    c = b.F == "*" && c ? "sanitizer-" + (Math.floor(Math.random() * 2147483648).toString(36) + Math.abs(Math.floor(Math.random() * 2147483648) ^ Date.now()).toString(36)) : b.F;
    b.j = c;
    c = a;
    a = b.h.createElement("span");
    b.j && b.F == "*" && (a.id = b.j);
    b.G && (c = DF_M6d("<div>" + c + "</div>"), DF_M8d(c), c = c.innerHTML);
    c = DF_MXa(c);
    var d = document.createElement("template");
    if ("content" in d) d.nodeType === 1 && DF_Mad(d), d.innerHTML = DF_Mm(c), d = d.content;
    else {
        var e = document.implementation.createHTMLDocument("x");
        e = d = e.body;
        e.nodeType === 1 && DF_Mad(e);
        e.innerHTML = DF_Mm(c)
    }
    c = document.createTreeWalker(d, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT, null, !1);
    for (d = DF_M$d ? new WeakMap : new DF_Mbe; e = c.nextNode();) {
        a: {
            var h = b;
            var g = e;
            switch (DF_MVd(g)) {
                case 3:
                    h = DF_Mve(h, g);
                    break a;
                case 1:
                    if (DF_MUd(g).toUpperCase() == "TEMPLATE") h = null;
                    else {
                        var f = DF_MUd(g).toUpperCase();
                        if (f in h.J || DF_MZd(g) != "http://www.w3.org/1999/xhtml") f = null;
                        else if (h.i[f]) f = h.h.createElement(f);
                        else {
                            var k = h.h.createElement("span");
                            h.Z && DF_MRd(k, "data-sanitizer-original-tag",
                                f.toLowerCase());
                            f = k
                        }
                        if (k = f) {
                            var l = DF_MQd(g);
                            if (l != null)
                                for (var n = 0; f = l[n]; n++)
                                    if (f.specified) {
                                        var m = h;
                                        var p = g,
                                            q = f,
                                            r = q.name;
                                        if (r.lastIndexOf("data-sanitizer-", 0) == 0) m = null;
                                        else {
                                            var u = DF_MUd(p);
                                            q = q.value;
                                            var v = {
                                                tagName: DF_ML(u).toLowerCase(),
                                                attributeName: DF_ML(r).toLowerCase()
                                            },
                                                t = {
                                                    jb: void 0
                                                };
                                            v.attributeName == "style" && (t.jb = DF_MSd(p));
                                            p = DF_Mse(u, r);
                                            p in m.g ? m = (0, m.g[p])(q, v, t) : (r = DF_Mse(null, r), m = r in m.g ? (0, m.g[r])(q, v, t) : null)
                                        }
                                        m !== null && DF_MRd(k, f.name, m)
                                    } h = k
                        } else h = null
                    }
                    break a;
                default:
                    h = null
            }
        }
        if (h) {
            if (DF_MVd(h) ==
                1 && d.set(e, h), e = DF_MWd(e), g = !1, e) f = DF_MVd(e), k = DF_MUd(e).toLowerCase(), l = DF_MWd(e), f != 11 || l ? k == "body" && l && (f = DF_MWd(l)) && !DF_MWd(f) && (g = !0) : g = !0, f = null, g || !e ? f = a : DF_MVd(e) == 1 && (f = d.get(e)), f.content && (f = f.content), f.appendChild(h)
        } else
            for (h = e; e = h.firstChild;) h.removeChild(e)
    }
    d.clear && d.clear();
    DF_MQd(a).length > 0 && (b = b.h.createElement("span"), b.appendChild(a), a = b);
    b = (new XMLSerializer).serializeToString(a);
    return DF_MXa(b.slice(b.indexOf(">") + 1, b.lastIndexOf("</")))
}

function DF_Mve(a, b) {
    var c = b.data;
    (b = DF_MWd(b)) && DF_MUd(b).toLowerCase() == "style" && !("STYLE" in a.J) && "STYLE" in a.i && (c = DF_M_a(DF_M5d(c, a.j, DF_MBa(function (d, e) {
        return this.N(d, {
            Ab: e
        })
    }, a))));
    return document.createTextNode(c)
};
var DF_Mwe = new DF_Mhe;
DF_Mwe.i = function (a) {
    return DF_M9a(a)
};
var DF_Mue = new DF_Mge(DF_Mwe);

function DF_Mxe(a) {
    return function () {
        var b = DF_Mwa.apply(0, arguments),
            c = {};
        return c._$litDirective$ = a, c.values = b, c
    }
}

function DF_Mye() { }
DF_Mye.prototype.Za = function (a, b, c) {
    this.G = a;
    this.g = b;
    this.F = c
};
DF_Mye.prototype.ab = function (a, b) {
    return this.j(a, b)
};
DF_Mye.prototype.j = function (a, b) {
    return this.i.apply(this, DF_Mf(b))
};
DF_Mb.Object.defineProperties(DF_Mye.prototype, {
    V: {
        configurable: !0,
        enumerable: !0,
        get: function () {
            return this.g.V
        }
    }
});

function DF_Mze(a) {
    this.value = DF_Mt;
    if (a.type !== 2) throw Error(this.constructor.lb + "() can only be used in child bindings");
}
DF_Md(DF_Mze, DF_Mye);
DF_Mze.prototype.i = function (a) {
    if (a === DF_Mt || a === void 0) return this.h = void 0, this.value = a;
    if (a === DF_Ms) return a;
    if (a === this.value) return this.h;
    this.value = a;
    a = [DF_Mm(a)];
    a.raw = a;
    var b = {};
    return this.h = (b._$litType$ = this.constructor.resultType, b.M = a, b.values = [], b)
};
DF_Mze.lb = "safeHTML";
DF_Mze.resultType = 1;
var DF_MAe = DF_Mxe(DF_Mze);
var DF_MBe = DF_Mg(["<style>\n      @import url(//fonts.googleapis.com/icon?family=Material+Icons);\n    </style>"]),
    DF_MCe = DF_Mg(['<div class="expand-icon">\n          <span\n            class="', '"\n            id="expandIcon"\n            aria-hidden="true"\n            >chevron_right</span\n          >\n        </div>']),
    DF_MDe = DF_Mg(['<div class="image-content">\n            <img id="image" src="', '" />\n          </div>']),
    DF_MEe = DF_Mg(['<div\n          id="accordion-content"\n          class="text-row"\n          aria-labelledby="title"\n          role="region">\n          <div id="text" class="word-wrap">',
        "</div>\n        </div>"
    ]),
    DF_MFe = DF_Mg(' ;\n      <div id=";">\n        <span id="screenReaderMessage" class="visually-hidden"></span>\n        <button\n          @click=";"\n          id="accordion-button"\n          class="top-row focus-outline"\n          aria-controls="accordion-content"\n          aria-expanded=";">\n          <div class="content">\n            ;\n            <div class="text-content">\n              <h3 id="title" class="word-wrap">;</h3>\n              <div id="subtitle" class="word-wrap"\n                >;</div\n              >\n            </div>\n          </div>\n          ;\n        </button>\n        ;\n      </div>'.split(";"));

function DF_MU() {
    var a = DF_M.apply(this, arguments) || this;
    a.expanded = !1;
    a.title = "";
    a.subtitle = "";
    a.text = "";
    a.image = null;
    a.ua = !1;
    a.ca = null;
    return a
}
DF_Md(DF_MU, DF_M);
DF_MU.v = DF_M.v;
DF_MU.l = DF_M.l;
DF_MU.m = DF_M.m;
DF_MU.h = DF_M.h;
DF_MU.g = DF_M.g;
DF_MU.u = DF_M.u;
DF_MU.i = DF_M.i;
DF_MU.o = DF_M.o;
DF_MU.C = DF_M.C;
DF_MU.s = DF_M.s;
DF_MU.prototype.connectedCallback = function () {
    var a = this;
    DF_M.prototype.connectedCallback.call(this);
    var b;
    if ((b = this.image) == null ? 0 : b.src) {
        var c;
        typeof ((c = this.image) == null ? void 0 : c.src) === "string" ? this.ca = this.image.src : this.ca = this.image.src.rawUrl
    }
    this.ca && DF_Mnc(this.ca, function () {
        a.ua = !0
    }, function () {
        a.ua = !1
    })
};
DF_MU.prototype.K = function () {
    var a = DF_Mte(this.title),
        b = DF_Mte(this.subtitle),
        c = DF_Mte(this.text),
        d = DF_Mr(DF_MBe),
        e, h = ((e = this.text) == null ? 0 : e.length) ? DF_Mr(DF_MCe, this.expanded ? "material-icons open" : "material-icons") : void 0,
        g;
    e = ((g = this.ca) == null ? 0 : g.length) && this.ua ? DF_Mr(DF_MDe, this.ca) : void 0;
    c = this.expanded ? DF_Mr(DF_MEe, DF_MAe(c)) : void 0;
    return DF_Mr(DF_MFe, d, "dfAccordionWrapper", this.g, this.expanded, e, DF_MAe(a), DF_MAe(b), h, c)
};
DF_MU.prototype.g = function () {
    DF_MC(DF_MK(), "df-accordion-clicked", {
        element: this
    });
    this.text.length <= 0 || (this.expanded = !this.expanded)
};
var DF_MV = DF_MU;
DF_MV.j = [DF_MYc, DF_MG];
DF_Mk([DF_MA({
    type: Boolean
}), DF_Ml("design:type", Boolean)], DF_MV.prototype, "expanded", void 0);
DF_Mk([DF_MA(), DF_Ml("design:type", String)], DF_MV.prototype, "title", void 0);
DF_Mk([DF_MA(), DF_Ml("design:type", String)], DF_MV.prototype, "subtitle", void 0);
DF_Mk([DF_MA(), DF_Ml("design:type", String)], DF_MV.prototype, "text", void 0);
DF_Mk([DF_MA({
    type: Object
}), DF_Ml("design:type", Object)], DF_MV.prototype, "image", void 0);
DF_Mk([DF_MB(), DF_Ml("design:type", Boolean)], DF_MV.prototype, "ua", void 0);
DF_Mk([DF_MB(), DF_Ml("design:type", Object)], DF_MV.prototype, "ca", void 0);
DF_MV = DF_Mk([DF_Mz("df-accordion")], DF_MV);
var DF_MGe = DF_Mw(["#dfButtonAnchorWrapper,#dfButtonWrapper{align-items:center;background:#fff;border-radius:8px;box-sizing:border-box;color:#000;cursor:pointer;display:flex;font-family: GT Maru, sans-serif;font-size:14px;padding:12px;padding-left:14px;text-decoration:none;width:100%}#dfButtonAnchorWrapper:hover>#dfLinkText,#dfButtonAnchorWrapper:hover>.df-button-icon,#dfButtonWrapper:hover>#dfButtonText,#dfButtonWrapper:hover>.df-button-icon{opacity:.5}.text{padding-left:12px}.df-button-icon,.df-button-icon #materialButtonIcon,.df-button-icon #materialIcon{height:24px;width:24px}button#dfButtonWrapper{background:none;border:none}a#dfButtonAnchorWrapper:focus-visible,button#dfButtonWrapper:focus-visible{outline:none;position:relative}"]);
var DF_MHe = window;
/*

 Copyright 2018 Google LLC
 SPDX-License-Identifier: BSD-3-Clause
*/
function DF_MIe(a) {
    var b;
    if (a.type !== 1 || a.name !== "style" || ((b = a.M) == null ? void 0 : b.length) > 2) throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.");
}
DF_Md(DF_MIe, DF_Mye);
DF_MIe.prototype.i = function (a) {
    return Object.keys(a).reduce(function (b, c) {
        var d = a[c];
        if (d == null) return b;
        c = c.includes("-") ? c : c.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g, "-$&").toLowerCase();
        return b + (c + ":" + d + ";")
    }, "")
};
DF_MIe.prototype.j = function (a, b) {
    b = DF_Me(b).next().value;
    a = a.element.style;
    this.h === void 0 && (this.h = new Set);
    for (var c = DF_Me(this.h), d = c.next(); !d.done; d = c.next()) d = d.value, b[d] == null && (this.h.delete(d), d.includes("-") ? a.removeProperty(d) : a[d] = null);
    for (var e in b) c = b[e], c != null && (this.h.add(e), d = typeof c === "string" && c.endsWith(" !important"), e.includes("-") || d ? a.setProperty(e, d ? c.slice(0, -11) : c, d ? "important" : "") : a[e] = c);
    return DF_Ms
};
var DF_MJe = DF_Mxe(DF_MIe);
var DF_MKe = DF_Mg([' <style>\n        @import url(//fonts.googleapis.com/icon?family=Material+Icons);\n      </style>\n      <div class="df-button-icon">\n        <span\n          aria-hidden="true"\n          class="material-icons"\n          id="materialButtonIcon"\n          style=', ">\n          ", "\n        </span>\n      </div>"]),
    // ! Target = "_blank" removed
    DF_MLe = DF_Mg('<a\n        href=";"\n        class="focus-outline"\n        \n        rel="noopener noreferrer"\n        id="dfButtonAnchorWrapper"\n        @click=";">\n        ;\n        <span class="text"> ; </span>\n        <span class="visually-hidden"> ; </span>\n      </a>'.split(";")),
    DF_MMe = DF_Mg(['<button\n        class="focus-outline"\n        id="dfButtonWrapper"\n        @click="', '">\n        ', '\n        <span class="text"> ', " </span>\n      </button> "]);

function DF_MW() {
    var a = DF_M.apply(this, arguments) || this;
    a.link = "";
    a.text = "";
    a.icon = {
        color: "#757575",
        type: "forward_arrow"
    };
    a.event = void 0;
    return a
}
DF_Md(DF_MW, DF_M);
DF_MW.v = DF_M.v;
DF_MW.l = DF_M.l;
DF_MW.m = DF_M.m;
DF_MW.h = DF_M.h;
DF_MW.g = DF_M.g;
DF_MW.u = DF_M.u;
DF_MW.i = DF_M.i;
DF_MW.o = DF_M.o;
DF_MW.C = DF_M.C;
DF_MW.s = DF_M.s;
DF_MW.prototype.g = function () {
    DF_MC(DF_MK(), "df-button-clicked", {
        element: this
    });
    var a = {};
    this.event && (this.event.languageCode || (this.event.languageCode = this.languageCode || void 0), a.queryInput = {
        event: this.event
    });
    var b, c;
    ((b = a.queryInput) == null ? 0 : (c = b.event) == null ? 0 : c.name) && DF_MSc(a, "event", DF_MK()).then(function (d) {
        DF_MHe.ResponseHandlers || console.error("Cannot found ResponseHandlers");
        DF_MHe.ResponseHandlers.processResponse(d)
    }, function (d) {
        console.error("DfMessenger: Request failed", d.error.code +
            ": " + d.error.message)
    })
};
DF_MW.prototype.K = function () {
    var a, b = DF_MJe({
        color: ((a = this.icon) == null ? void 0 : a.color) || "#757575"
    }),
        c;
    a = DF_Mr(DF_MKe, b, ((c = this.icon) == null ? void 0 : c.type) || "forward_arrow");
    return this.link ? (c = DF_MD(this.languageCode, "opensInANewTab"), DF_Mr(DF_MLe, this.link, this.g, a, this.text || "", c)) : DF_Mr(DF_MMe, this.g, a, this.text || "")
};
var DF_MX = DF_MW;
DF_MX.j = [DF_MGe, DF_MG];
DF_Mk([DF_MA(), DF_Ml("design:type", Object)], DF_MX.prototype, "link", void 0);
DF_Mk([DF_MA(), DF_Ml("design:type", Object)], DF_MX.prototype, "text", void 0);
DF_Mk([DF_MA({
    type: Object
}), DF_Ml("design:type", Object)], DF_MX.prototype, "icon", void 0);
DF_Mk([DF_MA({
    type: Object
}), DF_Ml("design:type", Object)], DF_MX.prototype, "event", void 0);
DF_MX = DF_Mk([DF_Mz("df-button")], DF_MX);
var DF_MNe = DF_Mw(["hr{border:0;    border-top: 3px solid var(--df-messenger-font-color);margin:0}.hidden{display:none}.card-wrapper{background-color:#fff;border: 4px solid var(--df-messenger-font-color);border-radius:16px;box-shadow:0 2px 2px 0 rgba(0,0,0,.24);margin-top:10px}"]);
var DF_MOe = DF_Mg([' <div class="card-wrapper ', '">\n      <span class="visually-hidden">', "</span>\n      ", "\n    </div>"]);

function DF_MY() {
    var a = DF_M.apply(this, arguments) || this;
    a.elements = [];
    a.classes = "";
    return a
}
DF_Md(DF_MY, DF_M);
DF_MY.v = DF_M.v;
DF_MY.l = DF_M.l;
DF_MY.m = DF_M.m;
DF_MY.h = DF_M.h;
DF_MY.g = DF_M.g;
DF_MY.u = DF_M.u;
DF_MY.i = DF_M.i;
DF_MY.o = DF_M.o;
DF_MY.C = DF_M.C;
DF_MY.s = DF_M.s;
DF_MY.prototype.ya = function (a) {
    a.has("elements") && this.elements.filter(function (b) {
        return b && b.type === "list"
    }).length && this.setAttribute("role", "list")
};
DF_MY.prototype.K = function () {
    if (this.elements && this.elements.length) {
        var a, b = DF_MD(this.languageCode, ((a = this.elements[0]) == null ? 0 : a.isBot) ? "agentSays" : "iSay");
        return DF_Mr(DF_MOe, this.classes, b, this.elements.map(function (c) {
            return c.element
        }))
    }
};
var DF_MPe = DF_MY;
DF_MPe.j = [DF_MNe, DF_MG];
DF_Mk([DF_MA({
    type: Array
}), DF_Ml("design:type", Array)], DF_MPe.prototype, "elements", void 0);
DF_Mk([DF_MA(), DF_Ml("design:type", String)], DF_MPe.prototype, "classes", void 0);
DF_MPe = DF_Mk([DF_Mz("df-card")], DF_MPe);
var DF_MQe = DF_Mw([".df-chips-wrapper{padding:10px}.df-chips-wrapper.clicked{display:none}.df-chips-wrapper .chip{align-items:center;background-color:var(--df-messenger-chip-color);background-color:#fff;border-color:var(--df-messenger-chip-border-color);border-radius:16px;border: 1.5px solid var(--df-messenger-font-color);display:inline-flex;height:35px;margin:0 10px 10px 0;padding:0 16px;transition: box-shadow 0.2s cubic-bezier(0.47, 1.64, 0.41, 0.8);}.df-chips-wrapper a,button{background-color:transparent;border:none;color:var(--df-messenger-font-color);cursor:pointer;display:inline-flex;font-family: GT Maru, sans-serif;font-size:14px;text-decoration:none;vertical-align:bottom}.df-chips-wrapper .chip:hover{box-shadow: 0 4px 0px 0 rgba(0, 0, 0, .24);}.df-chips-wrapper .chip img{margin-right:8px;max-height:17.5px;max-width:17.5px}.df-chips-wrapper a[href]:after{background:50%/contain no-repeat url(\"data:image/svg+xml;utf8, <svg xmlns='http://www.w3.org/2000/svg' fill='black' height='24' viewBox='0 0 24 24' width='24'> <path d='M0 0h24v24H0z' fill='none'/> <path d='M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z'/> </svg>\");content:\"\";display:inline-block;height:15px;margin-left:8px;width:15px}"]);
var DF_MRe = DF_Mg([' <img src="', '" aria-hidden="true" /> ']),
    // ! Target = "_blank" removed
    DF_MSe = DF_Mg('\n          <span role="listitem" class="chip">\n            <a\n              @click=;\n              class="chip-link focus-outline-round"\n              href=";"\n              \n              rel="noopener noreferrer">\n              ; ;\n              <span class="visually-hidden">;</span>\n            </a>\n          </span>\n        '.split(";")),
    DF_MTe = DF_Mg(['\n          <span role="listitem" class="chip">\n            <button\n              class="focus-outline-round"\n              @click=',
        ">\n              ", " ", "\n            </button>\n          </span>\n        "
    ]),
    DF_MUe = DF_Mg(['\n      <div class="df-chips-wrapper" role="list">\n        <span class="visually-hidden">', "</span>\n        ", "\n      </div>\n    "]);

function DF_MZ() {
    var a = DF_M.apply(this, arguments) || this;
    a.chips = [];
    a.La = !1;
    return a
}
DF_Md(DF_MZ, DF_M);
DF_MZ.v = DF_M.v;
DF_MZ.l = DF_M.l;
DF_MZ.m = DF_M.m;
DF_MZ.h = DF_M.h;
DF_MZ.g = DF_M.g;
DF_MZ.u = DF_M.u;
DF_MZ.i = DF_M.i;
DF_MZ.o = DF_M.o;
DF_MZ.C = DF_M.C;
DF_MZ.s = DF_M.s;
DF_MZ.prototype.K = function () {
    var a = this;
    if (!this.chips || !this.chips.length || this.La) return null;
    var b = DF_MD(this.languageCode, "agentSays"),
        c = DF_MD(this.languageCode, "opensInANewTab"),
        d = this.chips.map(function (e) {
            var h = e.text,
                g = e.link,
                f = e.image,
                k, l = (f == null ? 0 : (k = f.src) == null ? 0 : k.rawUrl) ? DF_Mr(DF_MRe, f.src.rawUrl) : "";
            return g ? DF_Mr(DF_MSe, function () {
                DF_MVe(a, e)
            }, g, l, h, c) : DF_Mr(DF_MTe, function () {
                DF_MVe(a, e)
            }, l, h)
        });
    return DF_Mr(DF_MUe, b, d)
};

function DF_MVe(a, b) {
    DF_MC(DF_MK(), "df-chip-clicked", {
        query: b.text
    });
    if (b == null || !b.link) {
        var c = b.text,
            d = new DF_MF;
        d.text = c;
        DF_MK().addMessage({
            type: "text",
            isBot: !1,
            element: d
        });
        DF_MWe(DF_MXc(b.text))
    }
    a.La = !0
}

function DF_MWe(a) {
    a && DF_MSc(a, "text", DF_MK()).then(function (b) {
        DF_MHe.ResponseHandlers || console.error("Cannot found ResponseHandlers");
        DF_MHe.ResponseHandlers.processResponse(b)
    }, function (b) {
        console.error("DfMessenger Request failed ", b.error.code + ": " + b.error.message)
    })
}
var DF_MXe = DF_MZ;
DF_MXe.j = [DF_MQe, DF_MG];
DF_Mk([DF_MA({
    type: Array
}), DF_Ml("design:type", Array)], DF_MXe.prototype, "chips", void 0);
DF_Mk([DF_MB(), DF_Ml("design:type", Boolean)], DF_MXe.prototype, "La", void 0);
DF_MXe = DF_Mk([DF_Mz("df-chips")], DF_MXe);
var DF_MYe = DF_Mw([".description-line{line-height:1.4;color:rgba(0,0,0,.87);font-size:14px;padding-top:8px;word-break:break-word}#descriptionWrapper{background-color:#fff;border-radius:16px;display:flex;flex-direction:column;font-family: GT Maru, sans-serif;padding:16px;padding-bottom:0;}.title{color:var(--df-messenger-font-color);font-size:14px;font-weight:700;margin:0}"]);
var DF_MZe = DF_Mg(['<h3 class="title"> ', " </h3>"]),
    DF_M_e = DF_Mg(['<div class="description-line"> ', " </div>"]),
    DF_M0e = DF_Mg([' <div id="', '"> ', " ", " </div> "]);

function DF_M_() {
    var a = DF_M.apply(this, arguments) || this;
    a.title = "";
    a.text = [];
    return a
}
DF_Md(DF_M_, DF_M);
DF_M_.v = DF_M.v;
DF_M_.l = DF_M.l;
DF_M_.m = DF_M.m;
DF_M_.h = DF_M.h;
DF_M_.g = DF_M.g;
DF_M_.u = DF_M.u;
DF_M_.i = DF_M.i;
DF_M_.o = DF_M.o;
DF_M_.C = DF_M.C;
DF_M_.s = DF_M.s;
DF_M_.prototype.K = function () {
    if (this.text || this.title) {
        var a = this.title ? DF_Mr(DF_MZe, this.title) : void 0,
            b, c = (b = this.text) == null ? void 0 : b.map(function (d) {
                return DF_Mr(DF_M_e, d)
            });
        return DF_Mr(DF_M0e, "descriptionWrapper", a, c)
    }
};
var DF_M1e = DF_M_;
DF_M1e.j = [DF_MYe, DF_MG];
DF_Mk([DF_MA(), DF_Ml("design:type", String)], DF_M1e.prototype, "title", void 0);
DF_Mk([DF_MA({
    type: Array
}), DF_Ml("design:type", Object)], DF_M1e.prototype, "text", void 0);
DF_M1e = DF_Mk([DF_Mz("df-description")], DF_M1e);
var DF_M2e = DF_Mg(['<hr class="divider" />']);

function DF_M0() {
    return DF_M.apply(this, arguments) || this
}
DF_Md(DF_M0, DF_M);
DF_M0.v = DF_M.v;
DF_M0.l = DF_M.l;
DF_M0.m = DF_M.m;
DF_M0.h = DF_M.h;
DF_M0.g = DF_M.g;
DF_M0.u = DF_M.u;
DF_M0.i = DF_M.i;
DF_M0.o = DF_M.o;
DF_M0.C = DF_M.C;
DF_M0.s = DF_M.s;
DF_M0.prototype.O = function () {
    return this
};
DF_M0.prototype.K = function () {
    return DF_Mr(DF_M2e)
};
var DF_M3e = DF_M0;
DF_M3e = DF_Mk([DF_Mz("df-divider")], DF_M3e);
var DF_M4e = DF_Mg([' <img class="loading" style=', " /> "]),
    DF_M5e = DF_Mg([" <img src=", ' alt="', '" /> ']),
    DF_M6e = DF_Mg(["\n    img {\n      width: 100%;\n      border-style: none;\n      border-radius: 12px 12px 24px 24px;\n    }\n  "]);

function DF_M1() {
    var a = DF_M.call(this) || this;
    a.source = "";
    a.accessibilityText = "";
    a.Na = !0;
    a.G = a.G.bind(a);
    a.g = a.g.bind(a);
    return a
}
DF_Md(DF_M1, DF_M);
DF_M1.v = DF_M.v;
DF_M1.l = DF_M.l;
DF_M1.m = DF_M.m;
DF_M1.h = DF_M.h;
DF_M1.g = DF_M.g;
DF_M1.u = DF_M.u;
DF_M1.i = DF_M.i;
DF_M1.o = DF_M.o;
DF_M1.C = DF_M.C;
DF_M1.s = DF_M.s;
DF_M1.prototype.connectedCallback = function () {
    DF_M.prototype.connectedCallback.call(this);
    this.source && DF_Mnc(this.source, this.G, this.g)
};
DF_M1.prototype.K = function () {
    if (this.source) {
        if (this.Na) {
            var a = DF_MJe({
                background: 'url("https://www.gstatic.com/dialogflow-console/common/assets/integrations/dialogflow-messenger/progress_spinner_grey.gif") 50% no-repeat'
            });
            return DF_Mr(DF_M4e, a)
        }
        return DF_Mr(DF_M5e, this.source, this.accessibilityText)
    }
};
DF_M1.prototype.G = function () {
    this.Na = !1
};
DF_M1.prototype.g = function () {
    var a, b, c, d, e = (b = (a = this.shadowRoot) == null ? void 0 : a.host) == null ? void 0 : (c = b.parentNode) == null ? void 0 : (d = c.parentNode) == null ? void 0 : d.host;
    (e == null ? void 0 : e.tagName) === "DF-CARD" && (e.classes = "hidden")
};
var DF_M7e = DF_M1;
DF_M7e.j = DF_Mw(DF_M6e);
DF_Mk([DF_MA(), DF_Ml("design:type", String)], DF_M7e.prototype, "source", void 0);
DF_Mk([DF_MA(), DF_Ml("design:type", String)], DF_M7e.prototype, "accessibilityText", void 0);
DF_Mk([DF_MB(), DF_Ml("design:type", Boolean)], DF_M7e.prototype, "Na", void 0);
DF_M7e = DF_Mk([DF_Mz("df-image"), DF_Ml("design:paramtypes", [])], DF_M7e);
var DF_M8e = DF_Mw([".image{height:32px;background-position:center;background-repeat:no-repeat;background-size:32px;margin-right:16px;max-height:32px;max-width:32px;padding-right:32px}.title{color:var(--df-messenger-font-color);font-family: GT Maru, sans-serif;font-size:14px;font-weight:700;margin:0}.text-container{display: flex; flex-direction: column; gap: 8px;}.subtitle{color:var(--df-messenger-font-color);line-height:1.5;}.title-card-elements{align-items: center;background-color:#fff;background-size:100% 1px;border-radius:16px;cursor:pointer;display:flex;font-family: GT Maru, sans-serif;font-size:14px;padding:16px}.list-button{background-color:transparent;border:none;padding:0;width:100%}button{text-align:left}"]);
var DF_M9e = DF_Mw([".image{height:32px;background-position:center;background-repeat:no-repeat;background-size:32px;margin-right:16px;max-height:32px;max-width:32px;padding-right:32px}.link-wrapper{text-decoration:none}.title{color:var(--df-messenger-font-color);font-weight:700}.text-container{display: flex; flex-direction: column;  gap: 8px;}.subtitle{color:var(--df-messenger-font-color);line-height:1.4;}.title-card-elements{align-items: center;background-color:#fff;border-radius:16px;display:flex;padding:16px}.title,.title-card-elements{font-family: GT Maru, sans-serif;font-size:14px}.title{margin:0}"]);
var DF_M$e = DF_Mg([' <img class="image" style=', " /> "]),
    DF_Maf = DF_Mg([' <h3 class="title"> ', " </h3> "]),
    DF_Mbf = DF_Mg([' <div class="subtitle"> ', " </div> "]),
    DF_Mcf = DF_Mg(["\n      ", '\n      <div class="text-container"> ', " ", " </div>\n    "]),
    // ! Target = "_blank" removed
    DF_Mdf = DF_Mg(' <a\n        @click=";"\n        class="; focus-outline"\n        \n        href=";"\n        rel="noopener noreferrer">\n        <div class="title-card-elements">\n          ;\n          <span class="visually-hidden"> ; </span>\n        </div>\n      </a>'.split(";")),
    DF_Mef = DF_Mg([' <div class="title-card-elements"> ', " </div>"]);

function DF_M2() {
    var a = DF_M.call(this) || this;
    a.title = "";
    a.subtitle = "";
    a.imageData = {
        src: {
            rawUrl: ""
        }
    };
    a.actionLink = "";
    a.g = a.g.bind(a);
    return a
}
DF_Md(DF_M2, DF_M);
DF_M2.v = DF_M.v;
DF_M2.l = DF_M.l;
DF_M2.m = DF_M.m;
DF_M2.h = DF_M.h;
DF_M2.g = DF_M.g;
DF_M2.u = DF_M.u;
DF_M2.i = DF_M.i;
DF_M2.o = DF_M.o;
DF_M2.C = DF_M.C;
DF_M2.s = DF_M.s;
DF_M2.prototype.K = function () {
    var a, b, c = DF_MJe({
        "background-image": 'url("' + ((a = this.imageData) == null ? void 0 : (b = a.src) == null ? void 0 : b.rawUrl) + '")'
    }),
        d, e;
    a = ((d = this.imageData) == null ? 0 : (e = d.src) == null ? 0 : e.rawUrl) ? DF_Mr(DF_M$e, c) : void 0;
    return this.ba(DF_Mr(DF_Mcf, a, this.title ? DF_Mr(DF_Maf, this.title) : void 0, this.subtitle ? DF_Mr(DF_Mbf, this.subtitle) : void 0))
};
DF_M2.prototype.ba = function (a) {
    if (this.actionLink) {
        var b = DF_MD(this.languageCode, "opensInANewTab");
        return DF_Mr(DF_Mdf, this.g, "link-wrapper", this.actionLink, a, b)
    }
    return DF_Mr(DF_Mef, a)
};
DF_M2.prototype.g = function () {
    DF_MC(DF_MK(), "df-info-card-clicked", {
        element: this
    })
};
var DF_M3 = DF_M2;
DF_M3.j = [DF_M9e, DF_MG];
DF_Mk([DF_MA(), DF_Ml("design:type", String)], DF_M3.prototype, "title", void 0);
DF_Mk([DF_MA(), DF_Ml("design:type", String)], DF_M3.prototype, "subtitle", void 0);
DF_Mk([DF_MA({
    H: !1
}), DF_Ml("design:type", Object)], DF_M3.prototype, "imageData", void 0);
DF_Mk([DF_MA(), DF_Ml("design:type", String)], DF_M3.prototype, "actionLink", void 0);
DF_M3 = DF_Mk([DF_Mz("df-title"), DF_Ml("design:paramtypes", [])], DF_M3);
var DF_Mff = DF_Mg([" <button\n        @click=", '\n        class="list-button focus-outline title-card-elements">\n        ', "\n      </button>"]);

function DF_M4() {
    var a = DF_M3.call(this) || this;
    a.event = null;
    return a
}
DF_Md(DF_M4, DF_M3);
DF_M4.v = DF_M3.v;
DF_M4.l = DF_M3.l;
DF_M4.m = DF_M3.m;
DF_M4.h = DF_M3.h;
DF_M4.g = DF_M3.g;
DF_M4.u = DF_M3.u;
DF_M4.i = DF_M3.i;
DF_M4.o = DF_M3.o;
DF_M4.C = DF_M3.C;
DF_M4.s = DF_M3.s;
DF_M4.prototype.connectedCallback = function () {
    DF_M3.prototype.connectedCallback.call(this);
    this.setAttribute("role", "listitem");
    this.G = this.G.bind(this)
};
DF_M4.prototype.ba = function (a) {
    return this.event ? DF_Mr(DF_Mff, this.G, a) : DF_M3.prototype.ba.call(this, a)
};
DF_M4.prototype.g = function () {
    this.G()
};
DF_M4.prototype.G = function () {
    DF_MC(DF_MK(), "df-list-element-clicked", {
        element: this
    });
    var a = {};
    this.event && (this.event.languageCode || (this.event.languageCode = this.languageCode || void 0), a.queryInput = {
        event: this.event
    });
    var b, c;
    (a == null ? 0 : (b = a.queryInput) == null ? 0 : (c = b.event) == null ? 0 : c.name) ? DF_MSc(a, "event", DF_MK()).then(function (d) {
        DF_MHe.ResponseHandlers || console.error("Cannot found ResponseHandlers");
        DF_MHe.ResponseHandlers.processResponse(d)
    }).catch(function (d) {
        console.error("DfMessenger: Request failed",
            d.error.code + ": " + d.error.message)
    }) : console.error("DfMessenger: The list element does not have a validevent object. Please add a valid event to your agent")
};
var DF_Mgf = DF_M4;
DF_Mgf.j = [DF_M8e, DF_M9e, DF_MG];
DF_Mk([DF_MA({
    type: Object
}), DF_Ml("design:type", Object)], DF_Mgf.prototype, "event", void 0);
DF_Mgf = DF_Mk([DF_Mz("df-list-element"), DF_Ml("design:paramtypes", [])], DF_Mgf);

function DF_Mhf() { }
DF_Mhf.prototype.processResponse = function (a) {
    DF_MK().botWriting = !1;
    DF_MC(DF_MK(), "df-response-received", {
        response: JSON.parse(a)
    });
    DF_Mif(this, a)
};

function DF_Mif(a, b) {
    var c, d, e;
    (c = b ? JSON.parse(b) : null) == null || (d = c.queryResult) == null || (e = d.fulfillmentMessages) == null || e.forEach(function (h) {
        h && (DF_Mjf(h), DF_Mkf(a, h))
    })
}

function DF_Mjf(a) {
    if (!a.platform && a.text && a.text.text) {
        var b;
        DF_Mlf(a == null ? void 0 : (b = a.text) == null ? void 0 : b.text)
    }
}
DF_Mhf.prototype.g = function (a) {
    return a !== void 0 && a !== null
};

function DF_Mkf(a, b) {
    if (!b.platform && b.payload && b.payload.richContent && b.payload.richContent) {
        var c, d;
        (c = b.payload) == null || (d = c.richContent) == null || d.forEach(function (e) {
            var h = e.filter(function (g) {
                return (g == null ? void 0 : g.type) !== "chips"
            }).map(function (g) {
                return g ? DF_Mmf(g) : null
            }).filter(a.g);
            e = e.filter(function (g) {
                return (g == null ? void 0 : g.type) === "chips"
            }).map(function (g) {
                return DF_Mnf(g)
            });
            DF_Mof(DF_Mpf(h));
            DF_Mqf(e)
        })
    }
}

function DF_Mqf(a) {
    a && a.forEach(function (b) {
        DF_Mof(b)
    })
}

function DF_Mof(a) {
    a && DF_MK().addMessage(a)
}

function DF_Mpf(a) {
    if (a == null || !a.length) return null;
    var b = new DF_MPe;
    b.elements = a;
    return {
        element: b,
        isBot: !0,
        type: "customCard"
    }
}

function DF_Mmf(a) {
    var b = DF_MK().languageCode,
        c = void 0;
    switch (a.type) {
        case "info":
            c = new DF_M3;
            c.title = a.title ? a.title : "";
            c.subtitle = a.subtitle ? a.subtitle : "";
            c.imageData = a.image ? a.image : null;
            c.actionLink = a.actionLink ? a.actionLink : "";
            c = {
                type: "info",
                isBot: !0,
                element: c
            };
            break;
        case "description":
            c = new DF_M1e;
            c.title = a.title ? a.title : "";
            c.text = a.text ? a.text : null;
            c = {
                type: "description",
                isBot: !0,
                element: c
            };
            break;
        case "button":
            c = new DF_MX;
            c.text = a.text;
            c.link = a.link;
            c.icon = {
                color: a.icon.color,
                type: a.icon.type
            };
            c.event = a.event;
            c = {
                type: "button",
                isBot: !0,
                element: c
            };
            break;
        case "image":
            c = new DF_M7e;
            c.source = a.rawUrl ? a.rawUrl : "";
            c.accessibilityText = a.accessibilityText ? a.accessibilityText : "image";
            c = {
                type: "image",
                isBot: !0,
                element: c
            };
            break;
        case "list":
            c = new DF_Mgf;
            c.title = a.title ? a.title : "";
            c.subtitle = a.subtitle ? a.subtitle : "";
            c.imageData = a.image ? a.image : null;
            c.event = a.event ? a.event : null;
            c = {
                type: "list",
                isBot: !0,
                element: c
            };
            break;
        case "divider":
            c = {
                type: "divider",
                isBot: !0,
                element: new DF_M3e
            };
            break;
        case "accordion":
            c =
                new DF_MV;
            c.title = a.title;
            c.subtitle = a.subtitle;
            c.image = a.image;
            c.text = a.text;
            c = {
                type: "accordion",
                isBot: !0,
                element: c
            };
            break;
        case "chips":
            c = DF_Mnf(a);
            break;
        default:
            console.error("DfMessenger: Could not render " + a.type)
    }
    var d;
    if ((d = c) == null ? 0 : d.element) c.element.languageCode = b;
    return c
}

function DF_Mlf(a) {
    a == null || a.forEach(function (b) {
        if (b) {
            var c = DF_MK(),
                d = {},
                e = new DF_MF;
            e.isBot = !0;
            e.text = b;
            d.isBot = !0;
            d.type = "text";
            d.element = e;
            c.addMessage(d)
        }
    })
}

function DF_Mnf(a) {
    var b = new DF_MXe;
    b.chips = a.options;
    return {
        type: "chips",
        isBot: !0,
        element: b
    }
}
DF_MHe.ResponseHandlers || (window.ResponseHandlers = new DF_Mhf);
var DF_Mrf = DF_Mg(["\n  .show-focus:after {\n    ", "\n  }\n"]),
    DF_Msf = DF_Mg(['<div class="check-input">', "</div>"]),
    DF_Mtf = DF_Mg('\n      <div class="input-container">\n        ;\n        <div\n          class="input-box-wrapper ; ;">\n          <input\n            @input=;\n            @keypress=;\n            @mousedown=;\n            @focusin=;\n            @focusout=;\n            type="text"\n            placeholder=";"\n            aria-label=";" />\n          <button\n            class="focus-outline focus-inset"\n            id="sendIconButton"\n            @click=;\n            aria-label=";">\n            <svg xmlns="http://www.w3.org/2000/svg" id="sendIcon" width="16px" height="16px" viewBox="0 0 24 24">\n            <g fill="none">\n            <path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z" />\n           <path fill="currentColor" d="M20.235 5.686c.432-1.195-.726-2.353-1.921-1.92L3.709 9.048c-1.199.434-1.344 2.07-.241 2.709l4.662 2.699l4.163-4.163a1 1 0 0 1 1.414 1.414L9.544 15.87l2.7 4.662c.638 1.103 2.274.957 2.708-.241z" />\n             </g>\n            </svg>\n          </button>\n        </div>\n      </div>\n    '.split(";")),
    DF_Muf = DF_Mw(DF_Mrf, DF_Muc(8, !1));

function DF_M5() {
    var a = DF_M.apply(this, arguments) || this;
    a.va = !1;
    a.ka = !0;
    a.ra = "";
    a.xa = !1;
    return a
}
DF_Md(DF_M5, DF_M);
DF_M5.v = DF_M.v;
DF_M5.l = DF_M.l;
DF_M5.m = DF_M.m;
DF_M5.h = DF_M.h;
DF_M5.g = DF_M.g;
DF_M5.u = DF_M.u;
DF_M5.i = DF_M.i;
DF_M5.o = DF_M.o;
DF_M5.C = DF_M.C;
DF_M5.s = DF_M.s;
DF_Ma = DF_M5.prototype;
DF_Ma.nb = function (a) {
    this.xa = this.va ? !1 : !0;
    a.relatedTarget && (this.va = !1)
};
DF_Ma.ob = function () {
    this.xa = !1
};
DF_Ma.pb = function () {
    this.g === "" && (this.ka = !1);
    this.ka = this.g.length <= 256 && this.g.length > 0 ? !0 : !1;
    this.ra = this.g.length > 256 ? DF_MD(this.languageCode, "messageTooLong").replace("numOfChars", "" + (this.g.length - 256)) : ""
};
DF_Ma.sendMessage = function () {
    if (this.g) {
        this.ka = !1;
        var a = this.addMessage,
            b = this.g,
            c = new DF_MF;
        c.isBot = !1;
        c.text = b;
        a.call(this, {
            type: "text",
            isBot: !1,
            element: c
        });
        DF_MC(DF_MK(), "df-user-input-entered", {
            input: this.g
        });
        DF_Mvf(this.g);
        this.g = "";
        var d, e;
        (e = (d = this.T) == null ? void 0 : d.querySelector("input")) == null || e.focus()
    }
};

function DF_Mvf(a) {
    DF_MSc(DF_MXc(a), "text", DF_MK()).then(function (b) {
        (new DF_Mhf).processResponse(b)
    }, function (b) {
        console.error("DfMessenger: Request failed", b.error.code + ": " + b.error.message)
    })
}
DF_Ma.K = function () {
    var a = this,
        b = DF_MD(this.languageCode, "askSomething"),
        c = DF_MD(this.languageCode, "inputAriaLabel"),
        d = DF_MD(this.languageCode, "sendAriaLabel");
    return DF_Mr(DF_Mtf, this.ra ? DF_Mr(DF_Msf, this.ra) : void 0, this.ka ? "valid" : "invalid", this.xa ? "show-focus" : "", this.pb, function (e) {
        var h = a.g.length;
        e.key === "Enter" && h <= 256 && h > 0 && a.sendMessage()
    }, function () {
        a.va = !0
    }, this.nb, this.ob, b, c, this.sendMessage, d)
};
DF_Mb.Object.defineProperties(DF_M5.prototype, {
    g: {
        configurable: !0,
        enumerable: !0,
        get: function () {
            var a;
            return ((a = this.T.querySelector("input")) == null ? void 0 : a.value) || ""
        },
        set: function (a) {
            var b = this.T.querySelector("input");
            b && (b.value = a)
        }
    }
});
var DF_M6 = DF_M5;
DF_M6.j = [DF_MMc, DF_MG, DF_Muf];
DF_Mk([DF_MB(), DF_Ml("design:type", Boolean)], DF_M6.prototype, "va", void 0);
DF_Mk([DF_MB(), DF_Ml("design:type", Boolean)], DF_M6.prototype, "ka", void 0);
DF_Mk([DF_MB(), DF_Ml("design:type", String)], DF_M6.prototype, "ra", void 0);
DF_Mk([DF_MB(), DF_Ml("design:type", Boolean)], DF_M6.prototype, "xa", void 0);
DF_Mk([DF_MA({
    H: !1
}), DF_Ml("design:type", Function)], DF_M6.prototype, "addMessage", void 0);
DF_M6 = DF_Mk([DF_Mz("df-messenger-user-input")], DF_M6);
var DF_Mwf = DF_Mg(['\n      <div\n        class="chat-wrapper ', '"\n        role="dialog"\n        aria-label="', '">\n        ', "\n      </div>\n    "]),
    DF_Mxf = DF_Mg("\n      <df-messenger-titlebar\n        .chatTitle=;\n        .closeChat=;\n        .languageCode=;>\n      </df-messenger-titlebar>\n      <df-message-list\n        .showErrorToast=;\n        .messages=;\n        .minimized=;\n        .showBotWriting=;\n        .maximizeChat=;\n        .closeChat=;\n        .languageCode=;>\n      </df-message-list>\n      <df-messenger-user-input\n        .addMessage=;\n        .languageCode=;>\n      </df-messenger-user-input>\n    ".split(";"));

function DF_M7() {
    var a = DF_M.apply(this, arguments) || this;
    a.minimized = !1;
    a.opened = !1;
    a.botWriting = !1;
    a.messages = [];
    a.showErrorToast = !1;
    a.chatTitle = "";
    a.ma = !1;
    return a
}
DF_Md(DF_M7, DF_M);
DF_M7.v = DF_M.v;
DF_M7.l = DF_M.l;
DF_M7.m = DF_M.m;
DF_M7.h = DF_M.h;
DF_M7.g = DF_M.g;
DF_M7.u = DF_M.u;
DF_M7.i = DF_M.i;
DF_M7.o = DF_M.o;
DF_M7.C = DF_M.C;
DF_M7.s = DF_M.s;
DF_M7.prototype.connectedCallback = function () {
    DF_M.prototype.connectedCallback.call(this);
    this.id = "df-chat-wrapper"
};
DF_M7.prototype.ya = function (a) {
    var b = this;
    a.has("opened") && (this.opened ? this.ma = !1 : (this.ma = !0, setTimeout(function () {
        b.ma = !1
    }, 200)))
};

function DF_Myf(a, b) {
    return DF_Mr(DF_Mwf, a.minimized ? "chat-min chat-open" : a.opened ? "chat-open" : "chat-closed", a.chatTitle, b)
}
DF_M7.prototype.K = function () {
    var a = DF_Mr(DF_Mxf, this.chatTitle, this.closeChat, this.languageCode, this.showErrorToast, this.messages, this.minimized, this.botWriting, this.maximizeChat, this.closeChat, this.languageCode, this.addMessage, this.languageCode);
    return this.ma || this.opened || this.minimized ? DF_Myf(this, a) : DF_Myf(this)
};
var DF_M8 = DF_M7;
DF_M8.j = [DF_MIc, DF_MG];
DF_Mk([DF_MA({
    type: Boolean
}), DF_Ml("design:type", Boolean)], DF_M8.prototype, "minimized", void 0);
DF_Mk([DF_MA({
    type: Boolean
}), DF_Ml("design:type", Boolean)], DF_M8.prototype, "opened", void 0);
DF_Mk([DF_MA({
    type: Boolean
}), DF_Ml("design:type", Boolean)], DF_M8.prototype, "botWriting", void 0);
DF_Mk([DF_MA({
    type: Array
}), DF_Ml("design:type", Array)], DF_M8.prototype, "messages", void 0);
DF_Mk([DF_MA({
    type: Boolean
}), DF_Ml("design:type", Boolean)], DF_M8.prototype, "showErrorToast", void 0);
DF_Mk([DF_MA({
    type: String
}), DF_Ml("design:type", String)], DF_M8.prototype, "chatTitle", void 0);
DF_Mk([DF_MA({
    H: !1
}), DF_Ml("design:type", Function)], DF_M8.prototype, "addMessage", void 0);
DF_Mk([DF_MA({
    H: !1
}), DF_Ml("design:type", Function)], DF_M8.prototype, "maximizeChat", void 0);
DF_Mk([DF_MA({
    H: !1
}), DF_Ml("design:type", Function)], DF_M8.prototype, "closeChat", void 0);
DF_Mk([DF_MB(), DF_Ml("design:type", Boolean)], DF_M8.prototype, "ma", void 0);
DF_M8 = DF_Mk([DF_Mz("df-messenger-chat")], DF_M8);
var DF_Mzf = {
    type: "info",
    title: "",
    subtitle: "",
    image: {
        src: {
            rawUrl: ""
        }
    },
    actionLink: ""
},
    DF_MAf = {
        type: "description",
        title: "",
        text: []
    },
    DF_MBf = {
        type: "image",
        rawUrl: "",
        accessibilityText: ""
    },
    DF_MCf = {
        type: "list",
        title: "",
        subtitle: "",
        image: {
            src: {
                rawUrl: ""
            }
        },
        event: {
            name: "",
            parameters: {},
            languageCode: ""
        },
        payload: {}
    },
    DF_MDf = {
        type: "button",
        icon: {
            type: "",
            color: ""
        },
        text: "",
        link: ""
    },
    DF_MEf = {
        type: "accordion",
        title: "",
        subtitle: "",
        image: {
            src: {
                rawUrl: ""
            }
        },
        text: ""
    },
    DF_MFf = {
        type: "chips",
        options: [{
            text: "Suggestion",
            image: {},
            link: ""
        }, {
            text: "Suggestion with icon",
            image: {
                src: {
                    rawUrl: "https://d30y9cdsu7xlg0.cloudfront.net/png/29715-200.png"
                }
            },
            link: ""
        }, {
            text: "Suggestion with link",
            image: {},
            link: "https://google.com"
        }, {
            text: "Suggestion with link & icon",
            image: {
                src: {
                    rawUrl: "https://d30y9cdsu7xlg0.cloudfront.net/png/29715-200.png"
                }
            },
            link: "https://google.com"
        }]
    };
var DF_MGf = DF_Mg(["https://fonts.googleapis.com/icon?family=Material+Icons"]),
    DF_MHf = DF_Mg(["https://fonts.googleapis.com/css?family=Roboto_old"]),
    DF_MIf = DF_Mg(["<style>\n      @import url(//fonts.googleapis.com/icon?family=Material+Icons);\n    </style>"]),
    DF_MJf = DF_Mg(['<img src="', '" class="df-chat-icon" />']),
    DF_MKf = DF_Mg([' <div class="df-chat-icon default">\n      ', "\n    </div>"]),
    DF_MLf = DF_Mg(['\n      <div id="closeIcon" class="', '">\n        ', "\n      </div>\n    "]),
    DF_MMf = DF_Mg('\n      ;\n      <div\n        @keydown=;\n        class="df-messenger-wrapper ; ;">\n        <div\n          @focusin=;\n          id="topFocusTrap"\n          class="small-screen-only"\n          tabindex="0">\n        </div>\n        <df-messenger-chat\n          .languageCode=;\n          .messages=;\n          .minimized=;\n          .botWriting=;\n          .chatTitle=;\n          .addMessage=;\n          .maximizeChat=;\n          .opened=;\n          .showErrorToast=;\n          .closeChat=;>\n        </df-messenger-chat>\n        <button\n          class="focus-outline-round focus-outset focus-circle"\n          @click=;\n          id="widgetIcon"\n          aria-expanded=";"\n          aria-label=";"\n          aria-controls="df-chat-wrapper">\n          ; ;\n        </button>\n        <div\n          @focusin=;\n          id="bottomFocusTrap"\n          class="small-screen-only"\n          tabindex="0"></div>\n      </div>\n    '.split(";")),
    DF_MNf = document.createElement("style");
document.head.appendChild(DF_MNf);
DF_MNf.type = "text/css";
DF_MNf.appendChild(document.createTextNode(":root {\n   --df-messenger-bot-message: #ecf3fe;\n   --df-messenger-button-titlebar-color: #0b57d0;\n   --df-messenger-button-titlebar-font-color: white;\n   --df-messenger-chat-background-color: #fafafa;\n   --df-messenger-font-color: #001d35;\n   --df-messenger-input-box-color: white;\n   --df-messenger-input-font-color: rgba(0,0,0,0.87);\n   --df-messenger-input-placeholder-font-color: #757575;\n   --df-messenger-minimized-chat-close-icon-color: rgba(0,0,0,0.87);\n   --df-messenger-send-icon: #1e88e5;\n   --df-messenger-user-message: #e1e3e1;\n   --df-messenger-chip-color: white;\n   --df-messenger-chip-border-color: #e0e0e0;\n   --df-messenger-focus-color: #1e88e5;\n   --df-messenger-focus-color-contrast: white;\n }"));
var DF_MOf = !1;

function DF_M9() {
    var a = DF_My.call(this) || this;
    a.ja = !1;
    a.agentId = null;
    a.expand = null;
    a.chatTitle = "Chat";
    a.botWriting = !1;
    a.minimized = !1;
    a.messages = [];
    a.showErrorToast = !1;
    a.Ea = a.Ea.bind(a);
    a.Da = a.Da.bind(a);
    a.maximizeChat = a.maximizeChat.bind(a);
    a.addMessage = a.addMessage.bind(a);
    a.closeChat = a.closeChat.bind(a);
    return a
}
DF_Md(DF_M9, DF_My);
DF_M9.v = DF_My.v;
DF_M9.l = DF_My.l;
DF_M9.m = DF_My.m;
DF_M9.h = DF_My.h;
DF_M9.g = DF_My.g;
DF_M9.u = DF_My.u;
DF_M9.i = DF_My.i;
DF_M9.o = DF_My.o;
DF_M9.C = DF_My.C;
DF_M9.s = DF_My.s;
DF_Ma = DF_M9.prototype;
DF_Ma.connectedCallback = function () {
    DF_MPf(this).length > 0 && console.error("DfMessenger: The widget is missing the following attributes: " + DF_MPf(this));
    this.dfCx && !this.chatIcon && (this.chatIcon = "https://www.gstatic.com/dialogflow-console/common/assets/integrations/icons/messenger-cx-chat-icon.svg");
    var a = this.chatIcon;
    a ? DF_Mnc(a, this.Ea, this.Da) : this.ja = !0;
    DF_MQf(this);
    a = document.createElement("link");
    var b = DF_Mab(DF_MGf);
    DF_Mcd(a, b);
    a.type = "text/css";
    document.head.appendChild(a);
    a = document.createElement("link");
    b = DF_Mab(DF_MHf);
    DF_Mcd(a, b);
    a.type = "text/css";
    document.head.appendChild(a);
    DF_My.prototype.connectedCallback.call(this)
};
DF_Ma.sa = function (a) {
    DF_My.prototype.sa.call(this, a);
    this.g && this.G === null && DF_MRf(this);
    DF_MC(this, "df-messenger-loaded", {})
};
DF_Ma.ya = function (a) {
    a.has("expand") && (this.expand ? this.minimized ? DF_MC(this, "df-messenger-welcome-shown", {}) : (DF_MOf || this.G === null || this.g === null || DF_MRf(this), DF_MC(this, "df-messenger-opened", {})) : DF_MC(this, "df-messenger-closed", {}))
};
DF_Ma.showMinChat = function () {
    this.minimized = !0;
    this.expand = !1
};
DF_Ma.renderCustomText = function (a) {
    DF_Mjf({
        text: {
            text: [a]
        }
    })
};
DF_Ma.renderCustomCard = function (a) {
    DF_Mkf(new DF_Mhf, {
        payload: {
            richContent: [a]
        }
    })
};

function DF_MRf(a) {
    var b = Object.assign({}, DF_MPc);
    a.g && (b.queryInput.event.name = a.g);
    a.languageCode && (b.queryInput.event.languageCode = a.languageCode);
    DF_MSc(b, "event", a).then(function (c) {
        (new DF_Mhf).processResponse(c);
        a.expand !== null || window.matchMedia("(max-width:500px)").matches || a.showMinChat();
        DF_MOf = !0
    }, function (c) {
        var d, e;
        console.error("DfMessenger Request failed ", (c == null ? void 0 : (d = c.error) == null ? void 0 : d.code) + ": " + (c == null ? void 0 : (e = c.error) == null ? void 0 : e.message))
    })
}
DF_Ma.maximizeChat = function () {
    this.minimized = !1;
    this.expand = !0;
    this.G === null || this.g === null || DF_MOf || DF_MRf(this)
};
DF_Ma.closeChat = function () {
    this.minimized = this.expand = !1
};

function DF_MPf(a) {
    var b = [];
    a.sessionId || (a.sessionId = "dfMessenger-" + Math.floor(Math.random() * 1E8));
    a.getAttribute("df-cx") ? a.agentId || b.push("agent-id") : a.projectId || a.agentId || b.push("agent-id");
    a.languageCode || b.push("language-code");
    a.apiUri || (a.getAttribute("agent-id") ? a.apiUri = "https://dialogflow.cloud.google.com/v1/integrations/messenger/webhook" : a.apiUri = "https://dialogflow.googleapis.com/v2/projects", a.getAttribute("df-cx") && (a.getAttribute("location") ? a.apiUri = "https://dialogflow.cloud.google.com/v1/cx/locations/" +
        a.getAttribute("location") + "/integrations/messenger/webhook" : a.apiUri = "https://dialogflow.cloud.google.com/v1/cx/integrations/messenger/webhook"));
    return b
}
DF_Ma.rendererForTesting = function (a, b) {
    if (a === "text") DF_Mlf(b);
    else if (a === "chips") a = DF_Mnf(b), this.addMessage(a);
    else if (b.type = a, a = DF_Mmf(b)) a = DF_Mpf([a]), this.addMessage(a)
};
DF_Ma.payloadForTesting = function (a) {
    switch (a) {
        case "info":
            return Object.assign({}, DF_Mzf);
        case "description":
            return Object.assign({}, DF_MAf);
        case "image":
            return Object.assign({}, DF_MBf);
        case "list":
            return Object.assign({}, DF_MCf);
        case "button":
            return Object.assign({}, DF_MDf);
        case "accordion":
            return Object.assign({}, DF_MEf);
        case "chips":
            return Object.assign({}, DF_MFf);
        case "text":
            return [];
        default:
            console.error("Could not find a payload for " + a)
    }
};

function DF_MQf(a) {
    a.addEventListener("df-messenger-error", function () {
        a.showErrorToast = !0;
        setTimeout(function () {
            a.showErrorToast = !1;
            a.botWriting = !1
        }, 5E3)
    })
}
DF_Ma.sb = function () {
    this.minimized ? (this.expand = !0, this.minimized = !1) : this.expand = this.expand ? !1 : !0
};
DF_Ma.Ea = function () {
    this.ja = !1
};
DF_Ma.Da = function () {
    this.ja = !0
};
DF_Ma.tb = function (a) {
    (this.expand || this.minimized) && a.key === "Escape" && (this.minimized = this.expand = !1)
};
DF_Ma.wb = function () {
    var a, b, c, d, e = (d = (b = (a = this.T.querySelector("df-messenger-chat")) == null ? void 0 : a.shadowRoot) == null ? void 0 : (c = b.querySelector("df-messenger-user-input")) == null ? void 0 : c.shadowRoot) == null ? void 0 : d.querySelectorAll("input, button, a[href]");
    e && e.length && (a = e[e.length - 1]) && (a == null || a.focus())
};
DF_Ma.ib = function () {
    var a, b, c, d, e;
    (e = (d = (b = (a = this.T.querySelector("df-messenger-chat")) == null ? void 0 : a.shadowRoot) == null ? void 0 : (c = b.querySelector("df-messenger-titlebar")) == null ? void 0 : c.shadowRoot) == null ? void 0 : d.querySelector("#minimizeIconButton")) == null || e.focus()
};
DF_Ma.addMessage = function (a) {
    a && (a.element && (a.element.languageCode = this.languageCode), this.messages = [].concat(DF_Mf(this.messages), [a]), setTimeout(function () {
        var b;
        a == null || (b = a.element) == null || b.scrollIntoView({
            behavior: "smooth"
        })
    }, 50))
};
DF_Ma.K = function () {
    var a = DF_Mr(DF_MIf),
        b = this.chatIcon ? DF_Mr(DF_MJf, this.chatIcon) : null,
        c = DF_Mr(DF_MKf, DF_Mxc),
        d = DF_Mr(DF_MLf, this.expand ? "rotate-fade" : "", DF_Myc),
        e = null;
    this.expand || this.ja || !this.chatIcon ? this.ja && (e = c) : e = b;
    b = DF_MD(this.languageCode, "chatTitle");
    var h;
    c = (h = this.expand ? DF_MD(this.languageCode, "closeAriaLabel") : DF_MD(this.languageCode, "openAriaLabel")) == null ? void 0 : h.replace("chatTitle", b);
    return DF_Mr(DF_MMf, a, this.tb, this.expand ? "expanded" : "", this.minimized ? "minimized" : "", this.wb,
        this.languageCode, this.messages, this.minimized, this.botWriting, this.chatTitle, this.addMessage, this.maximizeChat, !!this.expand, this.showErrorToast, this.closeChat, this.sb, !!this.expand, c, d, e, this.ib)
};
DF_Mb.Object.defineProperties(DF_M9.prototype, {
    apiUri: {
        configurable: !0,
        enumerable: !0,
        set: function (a) {
            a && this.setAttribute("api-uri", a)
        },
        get: function () {
            return this.getAttribute("api-uri")
        }
    },
    dfCx: {
        configurable: !0,
        enumerable: !0,
        get: function () {
            return this.getAttribute("df-cx")
        }
    },
    projectId: {
        configurable: !0,
        enumerable: !0,
        set: function (a) {
            a && this.setAttribute("project-id", a)
        },
        get: function () {
            return this.getAttribute("project-id")
        }
    },
    languageCode: {
        configurable: !0,
        enumerable: !0,
        set: function (a) {
            a && this.setAttribute("language-code",
                a)
        },
        get: function () {
            return this.getAttribute("language-code") || "en"
        }
    },
    sessionId: {
        configurable: !0,
        enumerable: !0,
        set: function (a) {
            a && this.setAttribute("session-id", a)
        },
        get: function () {
            return this.getAttribute("session-id")
        }
    },
    accessToken: {
        configurable: !0,
        enumerable: !0,
        set: function (a) {
            a && this.setAttribute("access-token", a)
        },
        get: function () {
            return this.getAttribute("access-token")
        }
    },
    g: {
        configurable: !0,
        enumerable: !0,
        set: function (a) {
            a && this.setAttribute("intent", a)
        },
        get: function () {
            return this.getAttribute("intent")
        }
    },
    chatIcon: {
        configurable: !0,
        enumerable: !0,
        set: function (a) {
            a && this.setAttribute("chat-icon", a)
        },
        get: function () {
            return this.getAttribute("chat-icon")
        }
    },
    userId: {
        configurable: !0,
        enumerable: !0,
        set: function (a) {
            a && this.setAttribute("user-id", a)
        },
        get: function () {
            return this.getAttribute("user-id")
        }
    },
    G: {
        configurable: !0,
        enumerable: !0,
        get: function () {
            return this.getAttribute("wait-open")
        },
        set: function (a) {
            a && this.setAttribute("wait-open", a)
        }
    },
    location: {
        configurable: !0,
        enumerable: !0,
        set: function (a) {
            a && this.setAttribute("location",
                a)
        },
        get: function () {
            return this.getAttribute("location")
        }
    }
});
var DF_M$ = DF_M9;
DF_M$.j = [DF_MHc, DF_MG];
DF_Mk([DF_MB(), DF_Ml("design:type", Boolean)], DF_M$.prototype, "ja", void 0);
DF_Mk([DF_MA({
    H: "agent-id",
    da: !0
}), DF_Ml("design:type", Object)], DF_M$.prototype, "agentId", void 0);
DF_Mk([DF_MA({
    aa: {
        ta: function (a) {
            return a === "false" ? !1 : a ? !0 : null
        }
    },
    H: "expand",
    da: !0,
    type: Boolean
}), DF_Ml("design:type", Object)], DF_M$.prototype, "expand", void 0);
DF_Mk([DF_MA({
    H: "chat-title",
    type: String,
    da: !0
}), DF_Ml("design:type", String)], DF_M$.prototype, "chatTitle", void 0);
DF_Mk([DF_MA({
    H: !1
}), DF_Ml("design:type", Boolean)], DF_M$.prototype, "botWriting", void 0);
DF_Mk([DF_MA({
    H: !1
}), DF_Ml("design:type", Boolean)], DF_M$.prototype, "minimized", void 0);
DF_Mk([DF_MA({
    H: !1
}), DF_Ml("design:type", Array)], DF_M$.prototype, "messages", void 0);
DF_Mk([DF_MA({
    H: !1
}), DF_Ml("design:type", Boolean)], DF_M$.prototype, "showErrorToast", void 0);
DF_M$ = DF_Mk([DF_Mz("df-messenger"), DF_Ml("design:paramtypes", [])], DF_M$);