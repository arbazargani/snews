/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 */
 !(function () {
    "use strict";
    function r(e) {
        if (null === e) return "null";
        if (void 0 === e) return "undefined";
        var t = typeof e;
        return "object" == t && (Array.prototype.isPrototypeOf(e) || (e.constructor && "Array" === e.constructor.name))
            ? "array"
            : "object" == t && (String.prototype.isPrototypeOf(e) || (e.constructor && "String" === e.constructor.name))
            ? "string"
            : t;
    }
    function f(o) {
        return m(function (e, t) {
            if (e.length !== t.length) return !1;
            for (var n = e.length, r = 0; r < n; r++) if (!o.eq(e[r], t[r])) return !1;
            return !0;
        });
    }
    function d(l) {
        return m(function (e, t) {
            var n,
                r,
                o,
                i = Object.keys(e),
                a = Object.keys(t);
            if (
                ((r = f(g)),
                (o = function (e) {
                    return (t = n), Array.prototype.slice.call(e).sort(t);
                    var t;
                }),
                !m(function (e, t) {
                    return r.eq(o(e), o(t));
                }).eq(i, a))
            )
                return !1;
            for (var u = i.length, s = 0; s < u; s++) {
                var c = i[s];
                if (!l.eq(e[c], t[c])) return !1;
            }
            return !0;
        });
    }
    function e(r) {
        return function (e) {
            return (
                (n = typeof (t = e)),
                (null === t
                    ? "null"
                    : "object" == n && (Array.prototype.isPrototypeOf(t) || (t.constructor && "Array" === t.constructor.name))
                    ? "array"
                    : "object" == n && (String.prototype.isPrototypeOf(t) || (t.constructor && "String" === t.constructor.name))
                    ? "string"
                    : n) === r
            );
            var t, n;
        };
    }
    function t(t) {
        return function (e) {
            return typeof e === t;
        };
    }
    function n(t) {
        return function (e) {
            return t === e;
        };
    }
    function K(e) {
        return null == e;
    }
    function V(e) {
        return !K(e);
    }
    function te() {}
    function i(n, r) {
        return function () {
            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
            return n(r.apply(null, e));
        };
    }
    function a(t, n) {
        return function (e) {
            return t(n(e));
        };
    }
    function J(e) {
        return function () {
            return e;
        };
    }
    function u(e) {
        return e;
    }
    function o(e, t) {
        return e === t;
    }
    var m = function (e) {
            return { eq: e };
        },
        g = m(function (e, t) {
            return e === t;
        }),
        p = m(function (e, t) {
            if (e === t) return !0;
            var n = r(e);
            return n === r(t) && (-1 !== ["undefined", "boolean", "number", "string", "function", "xml", "null"].indexOf(n) ? e === t : "array" === n ? f(p).eq(e, t) : "object" === n && d(p).eq(e, t));
        }),
        X = e("string"),
        h = e("object"),
        S = e("array"),
        l = n(null),
        v = t("boolean"),
        b = n(void 0),
        y = t("function"),
        E = t("number");
    function A(r) {
        for (var o = [], e = 1; e < arguments.length; e++) o[e - 1] = arguments[e];
        return function () {
            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
            var n = o.concat(e);
            return r.apply(null, n);
        };
    }
    function s(t) {
        return function (e) {
            return !t(e);
        };
    }
    function C(e) {
        return e();
    }
    function x(e) {
        e();
    }
    function c() {
        return N;
    }
    var R = J(!1),
        w = J(!0),
        N = {
            fold: function (e, t) {
                return e();
            },
            isSome: R,
            isNone: w,
            getOr: u,
            getOrThunk: k,
            getOrDie: function (e) {
                throw new Error(e || "error: getOrDie called on none.");
            },
            getOrNull: J(null),
            getOrUndefined: J(void 0),
            or: u,
            orThunk: k,
            map: c,
            each: te,
            bind: c,
            exists: R,
            forall: w,
            filter: function () {
                return N;
            },
            toArray: function () {
                return [];
            },
            toString: J("none()"),
        };
    function k(e) {
        return e();
    }
    function _(e, t) {
        return ye.call(e, t);
    }
    function D(e, t) {
        return -1 < _(e, t);
    }
    function F(e, t) {
        for (var n = 0, r = e.length; n < r; n++) if (t(e[n], n)) return !0;
        return !1;
    }
    function T(e, t) {
        for (var n = e.length, r = new Array(n), o = 0; o < n; o++) {
            var i = e[o];
            r[o] = t(i, o);
        }
        return r;
    }
    function Y(e, t) {
        for (var n = 0, r = e.length; n < r; n++) t(e[n], n);
    }
    function O(e, t) {
        for (var n = e.length - 1; 0 <= n; n--) t(e[n], n);
    }
    function B(e, t) {
        for (var n = [], r = [], o = 0, i = e.length; o < i; o++) {
            var a = e[o];
            (t(a, o) ? n : r).push(a);
        }
        return { pass: n, fail: r };
    }
    function U(e, t) {
        for (var n = [], r = 0, o = e.length; r < o; r++) {
            var i = e[r];
            t(i, r) && n.push(i);
        }
        return n;
    }
    function P(e, n, r) {
        return (
            O(e, function (e, t) {
                r = n(r, e, t);
            }),
            r
        );
    }
    function L(e, n, r) {
        return (
            Y(e, function (e, t) {
                r = n(r, e, t);
            }),
            r
        );
    }
    function I(e, t, n) {
        for (var r = 0, o = e.length; r < o; r++) {
            var i = e[r];
            if (t(i, r)) return ve.some(i);
            if (n(i, r)) break;
        }
        return ve.none();
    }
    function M(e, t) {
        return I(e, t, R);
    }
    function z(e, t) {
        for (var n = 0, r = e.length; n < r; n++) if (t(e[n], n)) return ve.some(n);
        return ve.none();
    }
    function H(e, t) {
        return (function (e) {
            for (var t = [], n = 0, r = e.length; n < r; ++n) {
                if (!S(e[n])) throw new Error("Arr.flatten item " + n + " was not an array, input: " + e);
                Ce.apply(t, e[n]);
            }
            return t;
        })(T(e, t));
    }
    function j(e, t) {
        for (var n = 0, r = e.length; n < r; ++n) if (!0 !== t(e[n], n)) return !1;
        return !0;
    }
    function q(e) {
        var t = be.call(e, 0);
        return t.reverse(), t;
    }
    function $(e, t) {
        return U(e, function (e) {
            return !D(t, e);
        });
    }
    function W(e, t) {
        var n = be.call(e, 0);
        return n.sort(t), n;
    }
    function G(e, t) {
        return 0 <= t && t < e.length ? ve.some(e[t]) : ve.none();
    }
    function Q(e) {
        return G(e, 0);
    }
    function Z(e) {
        return G(e, e.length - 1);
    }
    function ee(e, t) {
        for (var n = 0; n < e.length; n++) {
            var r = t(e[n], n);
            if (r.isSome()) return r;
        }
        return ve.none();
    }
    function ne(e, t) {
        for (var n = we(e), r = 0, o = n.length; r < o; r++) {
            var i = n[r];
            t(e[i], i);
        }
    }
    function re(e, n) {
        return Ee(e, function (e, t) {
            return { k: t, v: n(e, t) };
        });
    }
    function oe(n) {
        return function (e, t) {
            n[t] = e;
        };
    }
    function ie(e, n, r, o) {
        return (
            ne(e, function (e, t) {
                (n(e, t) ? r : o)(e, t);
            }),
            1
        );
    }
    function ae(e, t) {
        var n = {};
        return ie(e, t, oe(n), te), n;
    }
    function ue(e, t) {
        return Ne(e, t) ? ve.from(e[t]) : ve.none();
    }
    function se(e, t) {
        return Ne(e, t) && void 0 !== e[t] && null !== e[t];
    }
    function ce(e, t, n) {
        var r, o;
        if (!e) return !1;
        if (((n = n || e), void 0 !== e.length)) {
            for (r = 0, o = e.length; r < o; r++) if (!1 === t.call(n, e[r], r, e)) return !1;
        } else for (r in e) if (Ne(e, r) && !1 === t.call(n, e[r], r, e)) return !1;
        return !0;
    }
    function le(n, r) {
        var o = [];
        return (
            ce(n, function (e, t) {
                o.push(r(e, t, n));
            }),
            o
        );
    }
    function fe(n, r) {
        var o = [];
        return (
            ce(n, function (e, t) {
                (r && !r(e, t, n)) || o.push(e);
            }),
            o
        );
    }
    function de(e, t) {
        if (e) for (var n = 0, r = e.length; n < r; n++) if (e[n] === t) return n;
        return -1;
    }
    function me(e, t, n, r) {
        for (var o = b(n) ? e[0] : n, i = 0; i < e.length; i++) o = t.call(r, o, e[i], i);
        return o;
    }
    function ge(e, t, n) {
        for (var r = 0, o = e.length; r < o; r++) if (t.call(n, e[r], r, e)) return r;
        return -1;
    }
    function pe(e) {
        return e[e.length - 1];
    }
    var he = function (n) {
            function e() {
                return o;
            }
            function t(e) {
                return e(n);
            }
            var r = J(n),
                o = {
                    fold: function (e, t) {
                        return t(n);
                    },
                    isSome: w,
                    isNone: R,
                    getOr: r,
                    getOrThunk: r,
                    getOrDie: r,
                    getOrNull: r,
                    getOrUndefined: r,
                    or: e,
                    orThunk: e,
                    map: function (e) {
                        return he(e(n));
                    },
                    each: function (e) {
                        e(n);
                    },
                    bind: t,
                    exists: t,
                    forall: t,
                    filter: function (e) {
                        return e(n) ? o : N;
                    },
                    toArray: function () {
                        return [n];
                    },
                    toString: function () {
                        return "some(" + n + ")";
                    },
                };
            return o;
        },
        ve = {
            some: he,
            none: c,
            from: function (e) {
                return null == e ? N : he(e);
            },
        },
        be = Array.prototype.slice,
        ye = Array.prototype.indexOf,
        Ce = Array.prototype.push,
        xe = y(Array.from)
            ? Array.from
            : function (e) {
                  return be.call(e);
              },
        we = Object.keys,
        Se = Object.hasOwnProperty,
        Ee = function (e, r) {
            var o = {};
            return (
                ne(e, function (e, t) {
                    var n = r(e, t);
                    o[n.k] = n.v;
                }),
                o
            );
        },
        Ne = function (e, t) {
            return Se.call(e, t);
        },
        ke = Array.isArray,
        _e = function () {
            return (_e =
                Object.assign ||
                function (e) {
                    for (var t, n = 1, r = arguments.length; n < r; n++) for (var o in (t = arguments[n])) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                    return e;
                }).apply(this, arguments);
        };
    function Ae(e, t, n) {
        if (n || 2 === arguments.length) for (var r, o = 0, i = t.length; o < i; o++) (!r && o in t) || ((r = r || Array.prototype.slice.call(t, 0, o))[o] = t[o]);
        return e.concat(r || Array.prototype.slice.call(t));
    }
    function Re(n) {
        var r,
            o = !1;
        return function () {
            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
            return o || ((o = !0), (r = n.apply(null, e))), r;
        };
    }
    function De(e, t) {
        var n = String(t).toLowerCase();
        return M(e, function (e) {
            return e.search(n);
        });
    }
    function Te(e, t) {
        return -1 !== e.indexOf(t);
    }
    function Oe(t) {
        return function (e) {
            return e.replace(t, "");
        };
    }
    function Be(e) {
        return 0 < e.length;
    }
    function Pe(e) {
        return !Be(e);
    }
    function Le(t) {
        return function (e) {
            return Te(e, t);
        };
    }
    function Ie(e) {
        return window.matchMedia(e).matches;
    }
    function Me(e) {
        return null == e ? "" : ("" + e).replace(wt, "");
    }
    function Fe(e, t) {
        return t ? !("array" !== t || !ke(e)) || typeof e === t : void 0 !== e;
    }
    function Ue(e, t) {
        for (
            var n = [],
                r = function (e) {
                    return n.push(e), t(e);
                },
                o = t(e);
            (o = o.bind(r)).isSome();

        );
        return n;
    }
    function ze(e, t) {
        var n = e.dom;
        if (1 !== n.nodeType) return !1;
        var r = n;
        if (void 0 !== r.matches) return r.matches(t);
        if (void 0 !== r.msMatchesSelector) return r.msMatchesSelector(t);
        if (void 0 !== r.webkitMatchesSelector) return r.webkitMatchesSelector(t);
        if (void 0 !== r.mozMatchesSelector) return r.mozMatchesSelector(t);
        throw new Error("Browser lacks native selectors");
    }
    function He(e) {
        return (1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType) || 0 === e.childElementCount;
    }
    function je(e, t) {
        return e.dom === t.dom;
    }
    function Ve(e, t) {
        return dt().browser.isIE() ? ((n = e.dom), (r = t.dom), (o = Node.DOCUMENT_POSITION_CONTAINED_BY), 0 != (n.compareDocumentPosition(r) & o)) : (i = e.dom) !== (a = t.dom) && i.contains(a);
        var n, r, o, i, a;
    }
    function qe() {
        return Xe(0, 0);
    }
    function $e(e) {
        function t(e) {
            return function () {
                return n === e;
            };
        }
        var n = e.current,
            r = e.version;
        return { current: n, version: r, isEdge: t("Edge"), isChrome: t("Chrome"), isIE: t("IE"), isOpera: t("Opera"), isFirefox: t(nt), isSafari: t("Safari") };
    }
    function We(e) {
        function t(e) {
            return function () {
                return n === e;
            };
        }
        var n = e.current,
            r = e.version;
        return { current: n, version: r, isWindows: t(it), isiOS: t("iOS"), isAndroid: t(at), isOSX: t("OSX"), isLinux: t("Linux"), isSolaris: t(ut), isFreeBSD: t(st), isChromeOS: t(ct) };
    }
    function Ke(e) {
        if (null == e) throw new Error("Node cannot be null or undefined");
        return { dom: e };
    }
    var Xe = function (e, t) {
            return { major: e, minor: t };
        },
        Ye = {
            nu: Xe,
            detect: function (e, t) {
                var n,
                    r,
                    o = String(t).toLowerCase();
                return 0 === e.length
                    ? qe()
                    : (r = (function (e, t) {
                          for (var n = 0; n < e.length; n++) {
                              var r = e[n];
                              if (r.test(t)) return r;
                          }
                      })(e, (n = o)))
                    ? Xe(i(1), i(2))
                    : { major: 0, minor: 0 };
                function i(e) {
                    return Number(n.replace(r, "$" + e));
                }
            },
            unknown: qe,
        },
        Ge = function (e, t) {
            return "" === (n = t) || (e.length >= n.length && e.substr(0, 0 + n.length) === n);
            var n;
        },
        Je = Oe(/^\s+|\s+$/g),
        Qe = Oe(/^\s+/g),
        Ze = Oe(/\s+$/g),
        et = /.*?version\/\ ?([0-9]+)\.([0-9]+).*/,
        tt = {
            browsers: J([
                {
                    name: "Edge",
                    versionRegexes: [/.*?edge\/ ?([0-9]+)\.([0-9]+)$/],
                    search: function (e) {
                        return Te(e, "edge/") && Te(e, "chrome") && Te(e, "safari") && Te(e, "applewebkit");
                    },
                },
                {
                    name: "Chrome",
                    brand: "Chromium",
                    versionRegexes: [/.*?chrome\/([0-9]+)\.([0-9]+).*/, et],
                    search: function (e) {
                        return Te(e, "chrome") && !Te(e, "chromeframe");
                    },
                },
                {
                    name: "IE",
                    versionRegexes: [/.*?msie\ ?([0-9]+)\.([0-9]+).*/, /.*?rv:([0-9]+)\.([0-9]+).*/],
                    search: function (e) {
                        return Te(e, "msie") || Te(e, "trident");
                    },
                },
                { name: "Opera", versionRegexes: [et, /.*?opera\/([0-9]+)\.([0-9]+).*/], search: Le("opera") },
                { name: "Firefox", versionRegexes: [/.*?firefox\/\ ?([0-9]+)\.([0-9]+).*/], search: Le("firefox") },
                {
                    name: "Safari",
                    versionRegexes: [et, /.*?cpu os ([0-9]+)_([0-9]+).*/],
                    search: function (e) {
                        return (Te(e, "safari") || Te(e, "mobile/")) && Te(e, "applewebkit");
                    },
                },
            ]),
            oses: J([
                { name: "Windows", search: Le("win"), versionRegexes: [/.*?windows\ nt\ ?([0-9]+)\.([0-9]+).*/] },
                {
                    name: "iOS",
                    search: function (e) {
                        return Te(e, "iphone") || Te(e, "ipad");
                    },
                    versionRegexes: [/.*?version\/\ ?([0-9]+)\.([0-9]+).*/, /.*cpu os ([0-9]+)_([0-9]+).*/, /.*cpu iphone os ([0-9]+)_([0-9]+).*/],
                },
                { name: "Android", search: Le("android"), versionRegexes: [/.*?android\ ?([0-9]+)\.([0-9]+).*/] },
                { name: "OSX", search: Le("mac os x"), versionRegexes: [/.*?mac\ os\ x\ ?([0-9]+)_([0-9]+).*/] },
                { name: "Linux", search: Le("linux"), versionRegexes: [] },
                { name: "Solaris", search: Le("sunos"), versionRegexes: [] },
                { name: "FreeBSD", search: Le("freebsd"), versionRegexes: [] },
                { name: "ChromeOS", search: Le("cros"), versionRegexes: [/.*?chrome\/([0-9]+)\.([0-9]+).*/] },
            ]),
        },
        nt = "Firefox",
        rt = function () {
            return $e({ current: void 0, version: Ye.unknown() });
        },
        ot = $e,
        it = (J("Edge"), J("Chrome"), J("IE"), J("Opera"), J(nt), J("Safari"), "Windows"),
        at = "Android",
        ut = "Solaris",
        st = "FreeBSD",
        ct = "ChromeOS",
        lt = function () {
            return We({ current: void 0, version: Ye.unknown() });
        },
        ft = We,
        dt =
            (J(it),
            J("iOS"),
            J(at),
            J("Linux"),
            J("OSX"),
            J(ut),
            J(st),
            J(ct),
            Re(function () {
                return (
                    (e = navigator.userAgent),
                    (t = ve.from(navigator.userAgentData)),
                    (n = Ie),
                    (p = tt.browsers()),
                    (h = tt.oses()),
                    (v = t
                        .bind(function (e) {
                            return (
                                (r = p),
                                ee(e.brands, function (t) {
                                    var n = t.brand.toLowerCase();
                                    return M(r, function (e) {
                                        var t;
                                        return n === (null === (t = e.brand) || void 0 === t ? void 0 : t.toLowerCase());
                                    }).map(function (e) {
                                        return { current: e.name, version: Ye.nu(parseInt(t.version, 10), 0) };
                                    });
                                })
                            );
                            var r;
                        })
                        .orThunk(function () {
                            return De(p, (n = e)).map(function (e) {
                                var t = Ye.detect(e.versionRegexes, n);
                                return { current: e.name, version: t };
                            });
                            var n;
                        })
                        .fold(rt, ot)),
                    (b = De(h, (r = e))
                        .map(function (e) {
                            var t = Ye.detect(e.versionRegexes, r);
                            return { current: e.name, version: t };
                        })
                        .fold(lt, ft)),
                    {
                        browser: v,
                        os: b,
                        deviceType:
                            ((i = v),
                            (a = e),
                            (u = n),
                            (s = (o = b).isiOS() && !0 === /ipad/i.test(a)),
                            (c = o.isiOS() && !s),
                            (f = (l = o.isiOS() || o.isAndroid()) || u("(pointer:coarse)")),
                            (d = s || (!c && l && u("(min-device-width:768px)"))),
                            (m = c || (l && !d)),
                            (g = i.isSafari() && o.isiOS() && !1 === /safari/i.test(a)),
                            { isiPad: J(s), isiPhone: J(c), isTablet: J(d), isPhone: J(m), isTouch: J(f), isAndroid: o.isAndroid, isiOS: o.isiOS, isWebView: J(g), isDesktop: J(!m && !d && !g) }),
                    }
                );
                var e, t, n, r, o, i, a, u, s, c, l, f, d, m, g, p, h, v, b;
            })),
        mt = navigator.userAgent,
        gt = dt(),
        pt = gt.browser,
        ht = gt.os,
        vt = gt.deviceType,
        bt = /WebKit/.test(mt) && !pt.isEdge(),
        yt = "FormData" in window && "FileReader" in window && "URL" in window && !!URL.createObjectURL,
        Ct = -1 !== mt.indexOf("Windows Phone"),
        xt = {
            opera: pt.isOpera(),
            webkit: bt,
            ie: !(!pt.isIE() && !pt.isEdge()) && pt.version.major,
            gecko: pt.isFirefox(),
            mac: ht.isOSX() || ht.isiOS(),
            iOS: vt.isiPad() || vt.isiPhone(),
            android: ht.isAndroid(),
            contentEditable: !0,
            transparentSrc: "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
            caretAfter: !0,
            range: window.getSelection && "Range" in window,
            documentMode: pt.isIE() ? document.documentMode || 7 : 10,
            fileApi: yt,
            ceFalse: !0,
            cacheSuffix: null,
            container: null,
            experimentalShadowDom: !1,
            canHaveCSP: !pt.isIE(),
            desktop: vt.isDesktop(),
            windowsPhone: Ct,
            browser: { current: pt.current, version: pt.version, isChrome: pt.isChrome, isEdge: pt.isEdge, isFirefox: pt.isFirefox, isIE: pt.isIE, isOpera: pt.isOpera, isSafari: pt.isSafari },
            os: {
                current: ht.current,
                version: ht.version,
                isAndroid: ht.isAndroid,
                isChromeOS: ht.isChromeOS,
                isFreeBSD: ht.isFreeBSD,
                isiOS: ht.isiOS,
                isLinux: ht.isLinux,
                isOSX: ht.isOSX,
                isSolaris: ht.isSolaris,
                isWindows: ht.isWindows,
            },
            deviceType: { isDesktop: vt.isDesktop, isiPad: vt.isiPad, isiPhone: vt.isiPhone, isPhone: vt.isPhone, isTablet: vt.isTablet, isTouch: vt.isTouch, isWebView: vt.isWebView },
        },
        wt = /^\s*|\s*$/g,
        St = function (e, n, r, o) {
            (o = o || this),
                e &&
                    ce((e = r ? e[r] : e), function (e, t) {
                        return !1 !== n.call(o, e, t, r) && void St(e, n, r, o);
                    });
        },
        Et = {
            trim: Me,
            isArray: ke,
            is: Fe,
            toArray: function (e) {
                if (ke(e)) return e;
                for (var t = [], n = 0, r = e.length; n < r; n++) t[n] = e[n];
                return t;
            },
            makeMap: function (e, t, n) {
                var r;
                for (t = t || ",", n = n || {}, r = (e = "string" == typeof (e = e || []) ? e.split(t) : e).length; r--; ) n[e[r]] = {};
                return n;
            },
            each: ce,
            map: le,
            grep: fe,
            inArray: de,
            hasOwn: Ne,
            extend: function (e) {
                for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
                for (var r = 0; r < t.length; r++) {
                    var o,
                        i,
                        a = t[r];
                    for (o in a) !Ne(a, o) || (void 0 !== (i = a[o]) && (e[o] = i));
                }
                return e;
            },
            create: function (e, t, n) {
                var r,
                    o,
                    i,
                    a = this,
                    u = 0,
                    s = (e = /^((static) )?([\w.]+)(:([\w.]+))?/.exec(e))[3].match(/(^|\.)(\w+)$/i)[2],
                    c = a.createNS(e[3].replace(/\.\w+$/, ""), n);
                if (!c[s]) {
                    if ("static" === e[2]) return (c[s] = t), void (this.onCreate && this.onCreate(e[2], e[3], c[s]));
                    t[s] || ((t[s] = function () {}), (u = 1)),
                        (c[s] = t[s]),
                        a.extend(c[s].prototype, t),
                        e[5] &&
                            ((r = a.resolve(e[5]).prototype),
                            (o = e[5].match(/\.(\w+)$/i)[1]),
                            (i = c[s]),
                            (c[s] = u
                                ? function () {
                                      return r[o].apply(this, arguments);
                                  }
                                : function () {
                                      return (this.parent = r[o]), i.apply(this, arguments);
                                  }),
                            (c[s].prototype[s] = c[s]),
                            a.each(r, function (e, t) {
                                c[s].prototype[t] = r[t];
                            }),
                            a.each(t, function (e, t) {
                                r[t]
                                    ? (c[s].prototype[t] = function () {
                                          return (this.parent = r[t]), e.apply(this, arguments);
                                      })
                                    : t !== s && (c[s].prototype[t] = e);
                            })),
                        a.each(t.static, function (e, t) {
                            c[s][t] = e;
                        });
                }
            },
            walk: St,
            createNS: function (e, t) {
                var n, r;
                for (t = t || window, e = e.split("."), n = 0; n < e.length; n++) t[(r = e[n])] || (t[r] = {}), (t = t[r]);
                return t;
            },
            resolve: function (e, t) {
                var n, r;
                for (t = t || window, n = 0, r = (e = e.split(".")).length; n < r && (t = t[e[n]]); n++);
                return t;
            },
            explode: function (e, t) {
                return !e || Fe(e, "array") ? e : le(e.split(t || ","), Me);
            },
            _addCacheSuffix: function (e) {
                var t = xt.cacheSuffix;
                return t && (e += (-1 === e.indexOf("?") ? "?" : "&") + t), e;
            },
        },
        Nt = {
            fromHtml: function (e, t) {
                var n = (t || document).createElement("div");
                if (((n.innerHTML = e), !n.hasChildNodes() || 1 < n.childNodes.length)) throw (console.error("HTML does not have a single root node", e), new Error("HTML must have a single root node"));
                return Ke(n.childNodes[0]);
            },
            fromTag: function (e, t) {
                var n = (t || document).createElement(e);
                return Ke(n);
            },
            fromText: function (e, t) {
                var n = (t || document).createTextNode(e);
                return Ke(n);
            },
            fromDom: Ke,
            fromPoint: function (e, t, n) {
                return ve.from(e.dom.elementFromPoint(t, n)).map(Ke);
            },
        };
    function kt(e) {
        return e.dom.nodeName.toLowerCase();
    }
    function _t(e) {
        return e.dom.nodeType;
    }
    function At(t) {
        return function (e) {
            return _t(e) === t;
        };
    }
    function Rt(e) {
        return Nt.fromDom(e.dom.ownerDocument);
    }
    function Dt(e) {
        return An(e) ? e : Rt(e);
    }
    function Tt(e) {
        return Nt.fromDom(Dt(e).dom.defaultView);
    }
    function Ot(e) {
        return ve.from(e.dom.parentNode).map(Nt.fromDom);
    }
    function Bt(e) {
        return ve.from(e.dom.previousSibling).map(Nt.fromDom);
    }
    function Pt(e) {
        return ve.from(e.dom.nextSibling).map(Nt.fromDom);
    }
    function Lt(e) {
        return q(Ue(e, Bt));
    }
    function It(e) {
        return Ue(e, Pt);
    }
    function Mt(e, t) {
        var n = e.dom.childNodes;
        return ve.from(n[t]).map(Nt.fromDom);
    }
    function Ft(e) {
        return Mt(e, 0);
    }
    function Ut(e) {
        return Mt(e, e.dom.childNodes.length - 1);
    }
    function zt(e) {
        return e.dom.childNodes.length;
    }
    function Ht(e) {
        return Rn(e) && V(e.dom.host);
    }
    function jt(t) {
        return Ht(t)
            ? t
            : (function () {
                  var e = Dt(t).dom.head;
                  if (null == e) throw new Error("Head is not available yet");
                  return Nt.fromDom(e);
              })();
    }
    function Vt(e) {
        return Nt.fromDom(e.dom.host);
    }
    function qt(t, n) {
        Ot(t).each(function (e) {
            e.dom.insertBefore(n.dom, t.dom);
        });
    }
    function $t(e, t) {
        Pt(e).fold(
            function () {
                Ot(e).each(function (e) {
                    Pn(e, t);
                });
            },
            function (e) {
                qt(e, t);
            }
        );
    }
    function Wt(t, n) {
        Ft(t).fold(
            function () {
                Pn(t, n);
            },
            function (e) {
                t.dom.insertBefore(n.dom, e.dom);
            }
        );
    }
    function Kt(t, e) {
        Y(e, function (e) {
            Pn(t, e);
        });
    }
    function Xt(e) {
        (e.dom.textContent = ""),
            Y(Dn(e), function (e) {
                Ln(e);
            });
    }
    function Yt(e) {
        var t,
            n = Dn(e);
        0 < n.length &&
            ((t = e),
            Y(n, function (e) {
                qt(t, e);
            })),
            Ln(e);
    }
    function Gt(e, t) {
        return void 0 !== e ? e : void 0 !== t ? t : 0;
    }
    function Jt(e) {
        var t = void 0 !== e ? e.dom : document,
            n = t.body.scrollLeft || t.documentElement.scrollLeft,
            r = t.body.scrollTop || t.documentElement.scrollTop;
        return Fn(n, r);
    }
    function Qt(e, t, n) {
        var r = (void 0 !== n ? n.dom : document).defaultView;
        r && r.scrollTo(e, t);
    }
    function Zt(e, t) {
        dt().browser.isSafari() && y(e.dom.scrollIntoViewIfNeeded) ? e.dom.scrollIntoViewIfNeeded(!1) : e.dom.scrollIntoView(t);
    }
    function en(e, t, n, r) {
        return { x: e, y: t, width: n, height: r, right: e + n, bottom: t + r };
    }
    function tn(e) {
        var r = void 0 === e ? window : e,
            t = r.document,
            o = Jt(Nt.fromDom(t)),
            n = void 0 === r ? window : r;
        return (dt().browser.isFirefox() ? ve.none() : ve.from(n.visualViewport)).fold(
            function () {
                var e = r.document.documentElement,
                    t = e.clientWidth,
                    n = e.clientHeight;
                return en(o.left, o.top, t, n);
            },
            function (e) {
                return en(Math.max(e.pageLeft, o.left), Math.max(e.pageTop, o.top), e.width, e.height);
            }
        );
    }
    function nn(t) {
        return function (e) {
            return !!e && e.nodeType === t;
        };
    }
    function rn(e) {
        return e && !Object.getPrototypeOf(e);
    }
    function on(e) {
        var n = e.map(function (e) {
            return e.toLowerCase();
        });
        return function (e) {
            if (e && e.nodeName) {
                var t = e.nodeName.toLowerCase();
                return D(n, t);
            }
            return !1;
        };
    }
    function an(r, e) {
        var o = e.toLowerCase().split(" ");
        return function (e) {
            if (zn(e))
                for (var t = 0; t < o.length; t++) {
                    var n = e.ownerDocument.defaultView.getComputedStyle(e, null);
                    if ((n ? n.getPropertyValue(r) : null) === o[t]) return !0;
                }
            return !1;
        };
    }
    function un(t) {
        return function (e) {
            return zn(e) && e.hasAttribute(t);
        };
    }
    function sn(e) {
        return zn(e) && e.hasAttribute("data-mce-bogus");
    }
    function cn(e) {
        return zn(e) && "TABLE" === e.tagName;
    }
    function ln(t) {
        return function (e) {
            if (zn(e)) {
                if (e.contentEditable === t) return !0;
                if (e.getAttribute("data-mce-contenteditable") === t) return !0;
            }
            return !1;
        };
    }
    function fn(e, t, n) {
        return (
            void 0 === n && (n = o),
            e.exists(function (e) {
                return n(e, t);
            })
        );
    }
    function dn(e, t, n) {
        return e.isSome() && t.isSome() ? ve.some(n(e.getOrDie(), t.getOrDie())) : ve.none();
    }
    function mn(e) {
        return void 0 !== e.style && y(e.style.getPropertyValue);
    }
    function gn(e, t, n) {
        if (!(X(n) || v(n) || E(n))) throw (console.error("Invalid call to Attribute.set. Key ", t, ":: Value ", n, ":: Element ", e), new Error("Attribute value was not simple"));
        e.setAttribute(t, n + "");
    }
    function pn(e, t, n) {
        gn(e.dom, t, n);
    }
    function hn(e, t) {
        var n = e.dom;
        ne(t, function (e, t) {
            gn(n, t, e);
        });
    }
    function vn(e, t) {
        var n = e.dom.getAttribute(t);
        return null === n ? void 0 : n;
    }
    function bn(e, t) {
        return ve.from(vn(e, t));
    }
    function yn(e, t) {
        e.dom.removeAttribute(t);
    }
    function Cn(e, t) {
        var n = e.dom;
        ne(t, function (e, t) {
            !(function (e, t, n) {
                if (!X(n)) throw (console.error("Invalid call to CSS.set. Property ", t, ":: Value ", n, ":: Element ", e), new Error("CSS value must be a string: " + n));
                mn(e) && e.style.setProperty(t, n);
            })(n, t, e);
        });
    }
    function xn(e, t) {
        var n = e.dom,
            r = window.getComputedStyle(n).getPropertyValue(t);
        return "" !== r || In(e) ? r : Qn(n, t);
    }
    function wn(e, t) {
        var n = e.dom,
            r = Qn(n, t);
        return ve.from(r).filter(function (e) {
            return 0 < e.length;
        });
    }
    function Sn(e) {
        var t = {},
            n = e.dom;
        if (mn(n))
            for (var r = 0; r < n.style.length; r++) {
                var o = n.style.item(r);
                t[o] = n.style[o];
            }
        return t;
    }
    function En(e) {
        return M(e, kn);
    }
    function Nn(e, t) {
        return e.children && D(e.children, t);
    }
    "undefined" != typeof window || Function("return this;")();
    var kn = At(1),
        _n = At(3),
        An = At(9),
        Rn = At(11),
        Dn = function (e) {
            return T(e.dom.childNodes, Nt.fromDom);
        },
        Tn = y(Element.prototype.attachShadow) && y(Node.prototype.getRootNode),
        On = J(Tn),
        Bn = Tn
            ? function (e) {
                  return Nt.fromDom(e.dom.getRootNode());
              }
            : Dt,
        Pn = function (e, t) {
            e.dom.appendChild(t.dom);
        },
        Ln = function (e) {
            var t = e.dom;
            null !== t.parentNode && t.parentNode.removeChild(t);
        },
        In = function (e) {
            var t = _n(e) ? e.dom.parentNode : e.dom;
            if (null == t || null === t.ownerDocument) return !1;
            var n = t.ownerDocument,
                r = Nt.fromDom(t),
                o = Bn(r);
            return (Ht(o) ? ve.some(o) : ve.none()).fold(function () {
                return n.body.contains(t);
            }, a(In, Vt));
        },
        Mn = function (n, r) {
            return {
                left: n,
                top: r,
                translate: function (e, t) {
                    return Mn(n + e, r + t);
                },
            };
        },
        Fn = Mn,
        Un = function (e) {
            var t,
                n = e.dom,
                r = n.ownerDocument.body;
            return r === n ? Fn(r.offsetLeft, r.offsetTop) : In(e) ? ((t = n.getBoundingClientRect()), Fn(t.left, t.top)) : Fn(0, 0);
        },
        zn = nn(1),
        Hn = on(["textarea", "input"]),
        jn = nn(3),
        Vn = nn(8),
        qn = nn(9),
        $n = nn(11),
        Wn = on(["br"]),
        Kn = on(["img"]),
        Xn = ln("true"),
        Yn = ln("false"),
        Gn = on(["td", "th"]),
        Jn = on(["video", "audio", "object", "embed"]),
        Qn = function (e, t) {
            return mn(e) ? e.style.getPropertyValue(t) : "";
        },
        Zn = dt().browser,
        er = {},
        tr = { exports: er };
    function nr(e) {
        setTimeout(function () {
            throw e;
        }, 0);
    }
    !(function () {
        var e = this,
            t = function () {
                var e,
                    t,
                    n,
                    r = { exports: {} };
                function o() {}
                function i(e) {
                    if ("object" != typeof this) throw new TypeError("Promises must be constructed via new");
                    if ("function" != typeof e) throw new TypeError("not a function");
                    (this._state = 0), (this._handled = !1), (this._value = void 0), (this._deferreds = []), f(e, this);
                }
                function a(n, r) {
                    for (; 3 === n._state; ) n = n._value;
                    0 !== n._state
                        ? ((n._handled = !0),
                          i._immediateFn(function () {
                              var e,
                                  t = 1 === n._state ? r.onFulfilled : r.onRejected;
                              if (null !== t) {
                                  try {
                                      e = t(n._value);
                                  } catch (e) {
                                      return void s(r.promise, e);
                                  }
                                  u(r.promise, e);
                              } else (1 === n._state ? u : s)(r.promise, n._value);
                          }))
                        : n._deferreds.push(r);
                }
                function u(t, e) {
                    try {
                        if (e === t) throw new TypeError("A promise cannot be resolved with itself.");
                        if (e && ("object" == typeof e || "function" == typeof e)) {
                            var n = e.then;
                            if (e instanceof i) return (t._state = 3), (t._value = e), void c(t);
                            if ("function" == typeof n)
                                return void f(
                                    ((r = n),
                                    (o = e),
                                    function () {
                                        r.apply(o, arguments);
                                    }),
                                    t
                                );
                        }
                        (t._state = 1), (t._value = e), c(t);
                    } catch (e) {
                        s(t, e);
                    }
                    var r, o;
                }
                function s(e, t) {
                    (e._state = 2), (e._value = t), c(e);
                }
                function c(e) {
                    2 === e._state &&
                        0 === e._deferreds.length &&
                        i._immediateFn(function () {
                            e._handled || i._unhandledRejectionFn(e._value);
                        });
                    for (var t = 0, n = e._deferreds.length; t < n; t++) a(e, e._deferreds[t]);
                    e._deferreds = null;
                }
                function l(e, t, n) {
                    (this.onFulfilled = "function" == typeof e ? e : null), (this.onRejected = "function" == typeof t ? t : null), (this.promise = n);
                }
                function f(e, t) {
                    var n = !1;
                    try {
                        e(
                            function (e) {
                                n || ((n = !0), u(t, e));
                            },
                            function (e) {
                                n || ((n = !0), s(t, e));
                            }
                        );
                    } catch (e) {
                        if (n) return;
                        (n = !0), s(t, e);
                    }
                }
                (e = r),
                    (t = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}),
                    (n = setTimeout),
                    (i.prototype.catch = function (e) {
                        return this.then(null, e);
                    }),
                    (i.prototype.then = function (e, t) {
                        var n = new this.constructor(o);
                        return a(this, new l(e, t, n)), n;
                    }),
                    (i.all = function (e) {
                        var u = Array.prototype.slice.call(e);
                        return new i(function (o, i) {
                            if (0 === u.length) return o([]);
                            for (var a = u.length, e = 0; e < u.length; e++)
                                !(function t(n, e) {
                                    try {
                                        if (e && ("object" == typeof e || "function" == typeof e)) {
                                            var r = e.then;
                                            if ("function" == typeof r)
                                                return (
                                                    r.call(
                                                        e,
                                                        function (e) {
                                                            t(n, e);
                                                        },
                                                        i
                                                    ),
                                                    0
                                                );
                                        }
                                        (u[n] = e), 0 == --a && o(u);
                                    } catch (e) {
                                        i(e);
                                    }
                                })(e, u[e]);
                        });
                    }),
                    (i.resolve = function (t) {
                        return t && "object" == typeof t && t.constructor === i
                            ? t
                            : new i(function (e) {
                                  e(t);
                              });
                    }),
                    (i.reject = function (n) {
                        return new i(function (e, t) {
                            t(n);
                        });
                    }),
                    (i.race = function (o) {
                        return new i(function (e, t) {
                            for (var n = 0, r = o.length; n < r; n++) o[n].then(e, t);
                        });
                    }),
                    (i._immediateFn =
                        "function" == typeof setImmediate
                            ? function (e) {
                                  setImmediate(e);
                              }
                            : function (e) {
                                  n(e, 0);
                              }),
                    (i._unhandledRejectionFn = function (e) {
                        "undefined" != typeof console && console && console.warn("Possible Unhandled Promise Rejection:", e);
                    }),
                    (i._setImmediateFn = function (e) {
                        i._immediateFn = e;
                    }),
                    (i._setUnhandledRejectionFn = function (e) {
                        i._unhandledRejectionFn = e;
                    }),
                    e.exports ? (e.exports = i) : t.Promise || (t.Promise = i);
                var d = r.exports;
                return { boltExport: ("undefined" != typeof window ? window : Function("return this;")()).Promise || d };
            };
        "object" == typeof er && void 0 !== tr ? (tr.exports = t()) : ((e = "undefined" != typeof globalThis ? globalThis : e || self).EphoxContactWrapper = t());
    })();
    function rr(e) {
        return sr(function () {
            return new ir(e);
        });
    }
    function or(a) {
        if (!S(a)) throw new Error("cases must be an array");
        if (0 === a.length) throw new Error("there must be at least one case");
        var u = [],
            n = {};
        return (
            Y(a, function (e, r) {
                var t = we(e);
                if (1 !== t.length) throw new Error("one and only one name per case");
                var o = t[0],
                    i = e[o];
                if (void 0 !== n[o]) throw new Error("duplicate key detected:" + o);
                if ("cata" === o) throw new Error("cannot have a case named cata (sorry)");
                if (!S(i)) throw new Error("case arguments must be an array");
                u.push(o),
                    (n[o] = function () {
                        for (var n = [], e = 0; e < arguments.length; e++) n[e] = arguments[e];
                        var t = n.length;
                        if (t !== i.length) throw new Error("Wrong number of arguments to case " + o + ". Expected " + i.length + " (" + i + "), got " + t);
                        return {
                            fold: function () {
                                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                                if (e.length !== a.length) throw new Error("Wrong number of arguments to fold. Expected " + a.length + ", got " + e.length);
                                return e[r].apply(null, n);
                            },
                            match: function (e) {
                                var t = we(e);
                                if (u.length !== t.length) throw new Error("Wrong number of arguments to match. Expected: " + u.join(",") + "\nActual: " + t.join(","));
                                if (
                                    !j(u, function (e) {
                                        return D(t, e);
                                    })
                                )
                                    throw new Error("Not all branches were specified when using match. Specified: " + t.join(", ") + "\nRequired: " + u.join(", "));
                                return e[o].apply(null, n);
                            },
                            log: function (e) {
                                console.log(e, { constructors: u, constructor: o, params: n });
                            },
                        };
                    });
            }),
            n
        );
    }
    var ir = tr.exports.boltExport,
        ar = function (e) {
            function r(e) {
                o() ? i(e) : t.push(e);
            }
            var n = ve.none(),
                t = [],
                o = function () {
                    return n.isSome();
                },
                i = function (t) {
                    n.each(function (e) {
                        setTimeout(function () {
                            t(e);
                        }, 0);
                    });
                };
            return (
                e(function (e) {
                    o() || ((n = ve.some(e)), Y(t, i), (t = []));
                }),
                {
                    get: r,
                    map: function (n) {
                        return ar(function (t) {
                            r(function (e) {
                                t(n(e));
                            });
                        });
                    },
                    isReady: o,
                }
            );
        },
        ur = {
            nu: ar,
            pure: function (t) {
                return ar(function (e) {
                    e(t);
                });
            },
        },
        sr = function (n) {
            function e(e) {
                n().then(e, nr);
            }
            return {
                map: function (e) {
                    return sr(function () {
                        return n().then(e);
                    });
                },
                bind: function (t) {
                    return sr(function () {
                        return n().then(function (e) {
                            return t(e).toPromise();
                        });
                    });
                },
                anonBind: function (e) {
                    return sr(function () {
                        return n().then(function () {
                            return e.toPromise();
                        });
                    });
                },
                toLazy: function () {
                    return ur.nu(e);
                },
                toCached: function () {
                    var e = null;
                    return sr(function () {
                        return (e = null === e ? n() : e);
                    });
                },
                toPromise: n,
                get: e,
            };
        },
        cr = function (n) {
            return {
                isValue: w,
                isError: R,
                getOr: J(n),
                getOrThunk: J(n),
                getOrDie: J(n),
                or: function (e) {
                    return cr(n);
                },
                orThunk: function (e) {
                    return cr(n);
                },
                fold: function (e, t) {
                    return t(n);
                },
                map: function (e) {
                    return cr(e(n));
                },
                mapError: function (e) {
                    return cr(n);
                },
                each: function (e) {
                    e(n);
                },
                bind: function (e) {
                    return e(n);
                },
                exists: function (e) {
                    return e(n);
                },
                forall: function (e) {
                    return e(n);
                },
                toOptional: function () {
                    return ve.some(n);
                },
            };
        },
        lr = function (n) {
            return {
                isValue: R,
                isError: w,
                getOr: u,
                getOrThunk: function (e) {
                    return e();
                },
                getOrDie: function () {
                    return (
                        (e = String(n)),
                        (function () {
                            throw new Error(e);
                        })()
                    );
                    var e;
                },
                or: u,
                orThunk: function (e) {
                    return e();
                },
                fold: function (e, t) {
                    return e(n);
                },
                map: function (e) {
                    return lr(n);
                },
                mapError: function (e) {
                    return lr(e(n));
                },
                each: te,
                bind: function (e) {
                    return lr(n);
                },
                exists: R,
                forall: w,
                toOptional: ve.none,
            };
        },
        fr = {
            value: cr,
            error: lr,
            fromOption: function (e, t) {
                return e.fold(function () {
                    return lr(t);
                }, cr);
            },
        };
    function dr(e) {
        return e.fold(u, u);
    }
    function mr(e, t, n, r, o) {
        return e(n, r) ? ve.some(n) : y(o) && o(n) ? ve.none() : t(n, r, o);
    }
    function gr(e, t, n) {
        for (var r = e.dom, o = y(n) ? n : R; r.parentNode; ) {
            var r = r.parentNode,
                i = Nt.fromDom(r);
            if (t(i)) return ve.some(i);
            if (o(i)) break;
        }
        return ve.none();
    }
    function pr(e, t, n) {
        return mr(
            function (e, t) {
                return t(e);
            },
            gr,
            e,
            t,
            n
        );
    }
    function hr(e, t, n) {
        return gr(
            e,
            function (e) {
                return ze(e, t);
            },
            n
        );
    }
    function vr(e, t) {
        return (n = t), He((r = void 0 === e ? document : e.dom)) ? ve.none() : ve.from(r.querySelector(n)).map(Nt.fromDom);
        var n, r;
    }
    function br(e, t, n) {
        return mr(ze, hr, e, t, n);
    }
    function yr(e, t) {
        return "number" != typeof t && (t = 0), setTimeout(e, t);
    }
    function Cr(e, t) {
        return "number" != typeof t && (t = 1), setInterval(e, t);
    }
    function xr(n, r) {
        function e() {
            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
            clearTimeout(o),
                (o = yr(function () {
                    n.apply(this, e);
                }, r));
        }
        var o;
        return (
            (e.stop = function () {
                clearTimeout(o);
            }),
            e
        );
    }
    function wr(m, g) {
        function n(e, t, n) {
            var r,
                o = Et._addCacheSuffix(e),
                i = ue(h, o).getOrThunk(function () {
                    return { id: "mce-u" + p++, passed: [], failed: [], count: 0 };
                });
            function a(e, t) {
                for (var n = e.length; n--; ) e[n]();
                (i.status = t), (i.passed = []), (i.failed = []), r && ((r.onload = null), (r.onerror = null), (r = null));
            }
            function u() {
                return a(i.passed, 2), 0;
            }
            function s() {
                return a(i.failed, 3);
            }
            (h[o] = i).count++;
            var c,
                l,
                f,
                d = function () {
                    var e = d;
                    !(function () {
                        for (var e = m.styleSheets, t = e.length; t--; ) {
                            var n = e[t].ownerNode;
                            if (n && n.id === r.id) return u(), 1;
                        }
                    })() && (Date.now() - l < y ? _r.setTimeout(e) : s());
                };
            t && i.passed.push(t),
                n && i.failed.push(n),
                1 !== i.status &&
                    (2 !== i.status
                        ? 3 !== i.status
                            ? ((i.status = 1),
                              hn((c = Nt.fromTag("link", b.dom)), { rel: "stylesheet", type: "text/css", id: i.id }),
                              (l = Date.now()),
                              g.contentCssCors && pn(c, "crossOrigin", "anonymous"),
                              g.referrerPolicy && pn(c, "referrerpolicy", g.referrerPolicy),
                              ((r = c.dom).onload = d),
                              (r.onerror = s),
                              (f = c),
                              Pn(jt(v), f),
                              pn(c, "href", o))
                            : s()
                        : u());
        }
        function o(t) {
            return rr(function (e) {
                n(t, i(e, J(fr.value(t))), i(e, J(fr.error(t))));
            });
        }
        function t(e) {
            var n = Et._addCacheSuffix(e);
            ue(h, n).each(function (e) {
                var t;
                0 == --e.count && (delete h[n], (t = e.id), vr(jt(v), "#" + t).each(Ln));
            });
        }
        void 0 === g && (g = {});
        var p = 0,
            h = {},
            v = Nt.fromDom(m),
            b = Dt(v),
            y = g.maxLoadTime || 5e3;
        return {
            load: n,
            loadAll: function (e, n, r) {
                var a,
                    t = T(e, o);
                (a = t),
                    rr(function (r) {
                        var o = [],
                            i = 0;
                        0 === a.length
                            ? r([])
                            : Y(a, function (e, t) {
                                  var n;
                                  e.get(
                                      ((n = t),
                                      function (e) {
                                          (o[n] = e), ++i >= a.length && r(o);
                                      })
                                  );
                              });
                    }).get(function (e) {
                        var t = B(e, function (e) {
                            return e.isValue();
                        });
                        0 < t.fail.length ? r(t.fail.map(dr)) : n(t.pass.map(dr));
                    });
            },
            unload: t,
            unloadAll: function (e) {
                Y(e, function (e) {
                    t(e);
                });
            },
            _setReferrerPolicy: function (e) {
                g.referrerPolicy = e;
            },
        };
    }
    or([{ bothErrors: ["error1", "error2"] }, { firstError: ["error1", "value2"] }, { secondError: ["value1", "error2"] }, { bothValues: ["value1", "value2"] }]);
    var Sr,
        Er,
        Nr = function (e, t) {
            return M(e.dom.childNodes, function (e) {
                return t(Nt.fromDom(e));
            }).map(Nt.fromDom);
        },
        kr = window.Promise || ir,
        _r = {
            requestAnimationFrame: function (e, t) {
                Sr
                    ? Sr.then(e)
                    : (Sr = new kr(function (e) {
                          (function (e, t) {
                              for (var n = window.requestAnimationFrame, r = ["ms", "moz", "webkit"], o = 0; o < r.length && !n; o++) n = window[r[o] + "RequestAnimationFrame"];
                              (n =
                                  n ||
                                  function (e) {
                                      window.setTimeout(e, 0);
                                  })(e, t);
                          })(e, (t = t || document.body));
                      }).then(e));
            },
            setTimeout: yr,
            setInterval: Cr,
            setEditorTimeout: function (e, t, n) {
                return yr(function () {
                    e.removed || t();
                }, n);
            },
            setEditorInterval: function (e, t, n) {
                var r = Cr(function () {
                    e.removed ? clearInterval(r) : t();
                }, n);
                return r;
            },
            debounce: xr,
            throttle: xr,
            clearInterval: function (e) {
                return clearInterval(e);
            },
            clearTimeout: function (e) {
                return clearTimeout(e);
            },
        },
        Ar =
            ((Er = new WeakMap()),
            {
                forElement: function (e, t) {
                    var n = Bn(e).dom;
                    return ve.from(Er.get(n)).getOrThunk(function () {
                        var e = wr(n, t);
                        return Er.set(n, e), e;
                    });
                },
            }),
        Rr =
            ((Dr.prototype.current = function () {
                return this.node;
            }),
            (Dr.prototype.next = function (e) {
                return (this.node = this.findSibling(this.node, "firstChild", "nextSibling", e)), this.node;
            }),
            (Dr.prototype.prev = function (e) {
                return (this.node = this.findSibling(this.node, "lastChild", "previousSibling", e)), this.node;
            }),
            (Dr.prototype.prev2 = function (e) {
                return (this.node = this.findPreviousNode(this.node, "lastChild", "previousSibling", e)), this.node;
            }),
            (Dr.prototype.findSibling = function (e, t, n, r) {
                var o, i;
                if (e) {
                    if (!r && e[t]) return e[t];
                    if (e !== this.rootNode) {
                        if ((o = e[n])) return o;
                        for (i = e.parentNode; i && i !== this.rootNode; i = i.parentNode) if ((o = i[n])) return o;
                    }
                }
            }),
            (Dr.prototype.findPreviousNode = function (e, t, n, r) {
                var o, i, a;
                if (e && ((o = e[n]), !this.rootNode || o !== this.rootNode)) {
                    if (o) {
                        if (!r) for (a = o[t]; a; a = a[t]) if (!a[t]) return a;
                        return o;
                    }
                    return (i = e.parentNode) && i !== this.rootNode ? i : void 0;
                }
            }),
            Dr);
    function Dr(e, t) {
        (this.node = e), (this.rootNode = t), (this.current = this.current.bind(this)), (this.next = this.next.bind(this)), (this.prev = this.prev.bind(this)), (this.prev2 = this.prev2.bind(this));
    }
    function Tr(t) {
        var n;
        return function (e) {
            return (
                (n =
                    n ||
                    (function (e, t) {
                        for (var n = {}, r = 0, o = e.length; r < o; r++) {
                            var i = e[r];
                            n[String(i)] = t(i, r);
                        }
                        return n;
                    })(t, w)),
                Ne(n, kt(e))
            );
        };
    }
    function Or(e) {
        return kn(e) && !lo(e);
    }
    function Br(e) {
        return kn(e) && "br" === kt(e);
    }
    function Pr(e) {
        return Eo(e) && (e = e.parentNode), So(e) && e.hasAttribute("data-mce-caret");
    }
    function Lr(e) {
        return Eo(e) && xo(e.data);
    }
    function Ir(e) {
        return Pr(e) || Lr(e);
    }
    function Mr(e) {
        return e.firstChild !== e.lastChild || !Wn(e.firstChild);
    }
    function Fr(e) {
        var t = e.container();
        return !!jn(t) && (t.data.charAt(e.offset()) === Co || (e.isAtStart() && Lr(t.previousSibling)));
    }
    function Ur(e) {
        var t = e.container();
        return !!jn(t) && (t.data.charAt(e.offset() - 1) === Co || (e.isAtEnd() && Lr(t.nextSibling)));
    }
    function zr(e) {
        return e && e.hasAttribute("data-mce-caret")
            ? (sn((n = (t = e.getElementsByTagName("br"))[t.length - 1])) && n.parentNode.removeChild(n),
              e.removeAttribute("data-mce-caret"),
              e.removeAttribute("data-mce-bogus"),
              e.removeAttribute("style"),
              e.removeAttribute("_moz_abspos"),
              e)
            : null;
        var t, n;
    }
    function Hr(e) {
        return Pr(e.startContainer);
    }
    function jr(e) {
        return !Po(e) && (Do(e) ? !To(e.parentNode) : Oo(e) || Ro(e) || Bo(e) || Lo(e));
    }
    function Vr(e, t) {
        return (
            jr(e) &&
            (function (e, t) {
                for (e = e.parentNode; e && e !== t; e = e.parentNode) {
                    if (Lo(e)) return !1;
                    if (_o(e)) return !0;
                }
                return !0;
            })(e, t)
        );
    }
    function qr(e) {
        return Io.test(e);
    }
    function $r(e, t) {
        return (
            (jr(e) && !1 === ((a = t), jn((i = e)) && qr(i.data) && !1 === ((n = i), (r = Nt.fromDom(a)), hr(Nt.fromDom(n), "pre,code", A(je, r)).isSome()))) ||
            (zn((o = e)) && "A" === o.nodeName && !o.hasAttribute("href") && (o.hasAttribute("name") || o.hasAttribute("id"))) ||
            Mo(e)
        );
        var n, r, o, i, a;
    }
    function Wr(e, t) {
        return (function (e, t) {
            var n = 0;
            if ($r(e, e)) return !1;
            var r = e.firstChild;
            if (!r) return !0;
            var o = new Rr(r, e);
            do {
                if (t) {
                    if (Uo(r)) {
                        r = o.next(!0);
                        continue;
                    }
                    if (Fo(r)) {
                        r = o.next();
                        continue;
                    }
                }
                if (Wn(r)) n++, (r = o.next());
                else {
                    if ($r(r, e)) return !1;
                    r = o.next();
                }
            } while (r);
            return n <= 1;
        })(e.dom, (t = void 0 === t || t));
    }
    function Kr(e, t) {
        return V(e) && ($r(e, t) || Or(Nt.fromDom(e)));
    }
    function Xr(e) {
        return "span" === e.nodeName.toLowerCase() && "bookmark" === e.getAttribute("data-mce-type");
    }
    function Yr(e, t) {
        var n,
            r,
            o,
            i = {};
        if (e) {
            for (e = e.split(","), t = t || 10, n = 0; n < e.length; n += 2) (r = String.fromCharCode(parseInt(e[n], t))), Ko[r] || ((o = "&" + e[n + 1] + ";"), (i[r] = o), (i[o] = r));
            return i;
        }
    }
    function Gr(e, t) {
        return e.replace(t ? jo : Vo, function (e) {
            return Ko[e] || e;
        });
    }
    function Jr(e, t) {
        return e.replace(t ? jo : Vo, function (e) {
            return 1 < e.length ? "&#" + (1024 * (e.charCodeAt(0) - 55296) + (e.charCodeAt(1) - 56320) + 65536) + ";" : Ko[e] || "&#" + e.charCodeAt(0) + ";";
        });
    }
    function Qr(e, t, n) {
        return (
            (n = n || Yo),
            e.replace(t ? jo : Vo, function (e) {
                return Ko[e] || n[e] || e;
            })
        );
    }
    function Zr(e, t) {
        return (e = Et.trim(e)) ? e.split(t || " ") : [];
    }
    function eo(e, n) {
        var r;
        return (
            e &&
                ((r = {}),
                ei((e = "string" == typeof e ? { "*": e } : e), function (e, t) {
                    r[t] = r[t.toUpperCase()] = ("map" === n ? Zo : ni)(e, /[, ]/);
                })),
            r
        );
    }
    function to(i) {
        function e(e, t, n) {
            var r = i[e];
            return r ? (r = Zo(r, /[, ]/, Zo(r.toUpperCase(), /[, ]/))) : (r = Jo[e]) || ((r = Zo(t, " ", Zo(t.toUpperCase(), " "))), (r = ti(r, n)), (Jo[e] = r)), r;
        }
        var t,
            s,
            n,
            r,
            o,
            a,
            u,
            c,
            S = {},
            l = {},
            E = [],
            f = {},
            d = {},
            m =
                ((t = (i = i || {}).schema),
                (c = {}),
                Jo[t] ||
                    ((s = "id accesskey class dir lang style tabindex title role"),
                    (n = "address blockquote div dl fieldset form h1 h2 h3 h4 h5 h6 hr menu ol p pre table ul"),
                    (r = "a abbr b bdo br button cite code del dfn em embed i iframe img input ins kbd label map noscript object q s samp script select small span strong sub sup textarea u var #text #comment"),
                    "html4" !== t &&
                        ((s += " contenteditable contextmenu draggable dropzone hidden spellcheck translate"),
                        (n += " article aside details dialog figure main header footer hgroup section nav"),
                        (r += " audio canvas command datalist mark meter output picture progress time wbr video ruby bdi keygen")),
                    "html5-strict" !== t &&
                        ((s += " xml:lang"),
                        (r = [r, (u = "acronym applet basefont big font strike tt")].join(" ")),
                        ei(Zr(u), function (e) {
                            g(e, "", r);
                        }),
                        (n = [n, (a = "center dir isindex noframes")].join(" ")),
                        (o = [n, r].join(" ")),
                        ei(Zr(a), function (e) {
                            g(e, "", o);
                        })),
                    (o = o || [n, r].join(" ")),
                    g("html", "manifest", "head body"),
                    g("head", "", "base command link meta noscript script style title"),
                    g("title hr noscript br"),
                    g("base", "href target"),
                    g("link", "href rel media hreflang type sizes hreflang"),
                    g("meta", "name http-equiv content charset"),
                    g("style", "media type scoped"),
                    g("script", "src async defer type charset"),
                    g("body", "onafterprint onbeforeprint onbeforeunload onblur onerror onfocus onhashchange onload onmessage onoffline ononline onpagehide onpageshow onpopstate onresize onscroll onstorage onunload", o),
                    g("address dt dd div caption", "", o),
                    g("h1 h2 h3 h4 h5 h6 pre p abbr code var samp kbd sub sup i b u bdo span legend em strong small s cite dfn", "", r),
                    g("blockquote", "cite", o),
                    g("ol", "reversed start type", "li"),
                    g("ul", "", "li"),
                    g("li", "value", o),
                    g("dl", "", "dt dd"),
                    g("a", "href target rel media hreflang type", r),
                    g("q", "cite", r),
                    g("ins del", "cite datetime", o),
                    g("img", "src sizes srcset alt usemap ismap width height"),
                    g("iframe", "src name width height", o),
                    g("embed", "src type width height"),
                    g("object", "data type typemustmatch name usemap form width height", [o, "param"].join(" ")),
                    g("param", "name value"),
                    g("map", "name", [o, "area"].join(" ")),
                    g("area", "alt coords shape href target rel media hreflang type"),
                    g("table", "border", "caption colgroup thead tfoot tbody tr" + ("html4" === t ? " col" : "")),
                    g("colgroup", "span", "col"),
                    g("col", "span"),
                    g("tbody thead tfoot", "", "tr"),
                    g("tr", "", "td th"),
                    g("td", "colspan rowspan headers", o),
                    g("th", "colspan rowspan headers scope abbr", o),
                    g("form", "accept-charset action autocomplete enctype method name novalidate target", o),
                    g("fieldset", "disabled form name", [o, "legend"].join(" ")),
                    g("label", "form for", r),
                    g(
                        "input",
                        "accept alt autocomplete checked dirname disabled form formaction formenctype formmethod formnovalidate formtarget height list max maxlength min multiple name pattern readonly required size src step type value width"
                    ),
                    g("button", "disabled form formaction formenctype formmethod formnovalidate formtarget name type value", "html4" === t ? o : r),
                    g("select", "disabled form multiple name required size", "option optgroup"),
                    g("optgroup", "disabled label", "option"),
                    g("option", "disabled label selected value"),
                    g("textarea", "cols dirname disabled form maxlength name readonly required rows wrap"),
                    g("menu", "type label", [o, "li"].join(" ")),
                    g("noscript", "", o),
                    "html4" !== t &&
                        (g("wbr"),
                        g("ruby", "", [r, "rt rp"].join(" ")),
                        g("figcaption", "", o),
                        g("mark rt rp summary bdi", "", r),
                        g("canvas", "width height", o),
                        g("video", "src crossorigin poster preload autoplay mediagroup loop muted controls width height buffered", [o, "track source"].join(" ")),
                        g("audio", "src crossorigin preload autoplay mediagroup loop muted controls buffered volume", [o, "track source"].join(" ")),
                        g("picture", "", "img source"),
                        g("source", "src srcset type media sizes"),
                        g("track", "kind src srclang label default"),
                        g("datalist", "", [r, "option"].join(" ")),
                        g("article section nav aside main header footer", "", o),
                        g("hgroup", "", "h1 h2 h3 h4 h5 h6"),
                        g("figure", "", [o, "figcaption"].join(" ")),
                        g("time", "datetime", r),
                        g("dialog", "open", o),
                        g("command", "type label icon disabled checked radiogroup command"),
                        g("output", "for form name", r),
                        g("progress", "value max", r),
                        g("meter", "value min max low high optimum", r),
                        g("details", "open", [o, "summary"].join(" ")),
                        g("keygen", "autofocus challenge disabled form keytype name")),
                    "html5-strict" !== t &&
                        (p("script", "language xml:space"),
                        p("style", "xml:space"),
                        p("object", "declare classid code codebase codetype archive standby align border hspace vspace"),
                        p("embed", "align name hspace vspace"),
                        p("param", "valuetype type"),
                        p("a", "charset name rev shape coords"),
                        p("br", "clear"),
                        p("applet", "codebase archive code object alt name width height align hspace vspace"),
                        p("img", "name longdesc align border hspace vspace"),
                        p("iframe", "longdesc frameborder marginwidth marginheight scrolling align"),
                        p("font basefont", "size color face"),
                        p("input", "usemap align"),
                        p("select"),
                        p("textarea"),
                        p("h1 h2 h3 h4 h5 h6 div p legend caption", "align"),
                        p("ul", "type compact"),
                        p("li", "type"),
                        p("ol dl menu dir", "compact"),
                        p("pre", "width xml:space"),
                        p("hr", "align noshade size width"),
                        p("isindex", "prompt"),
                        p("table", "summary width frame rules cellspacing cellpadding align bgcolor"),
                        p("col", "width align char charoff valign"),
                        p("colgroup", "width align char charoff valign"),
                        p("thead", "align char charoff valign"),
                        p("tr", "align char charoff valign bgcolor"),
                        p("th", "axis align char charoff valign nowrap bgcolor width height"),
                        p("form", "accept"),
                        p("td", "abbr axis scope align char charoff valign nowrap bgcolor width height"),
                        p("tfoot", "align char charoff valign"),
                        p("tbody", "align char charoff valign"),
                        p("area", "nohref"),
                        p("body", "background bgcolor text link vlink alink")),
                    "html4" !== t &&
                        (p("input button select textarea", "autofocus"),
                        p("input textarea", "placeholder"),
                        p("a", "download"),
                        p("link script img", "crossorigin"),
                        p("img", "loading"),
                        p("iframe", "sandbox seamless allowfullscreen loading")),
                    ei(Zr("a form meter progress dfn"), function (e) {
                        c[e] && delete c[e].children[e];
                    }),
                    delete c.caption.children.table,
                    delete c.script,
                    (Jo[t] = c)));
        function g(e, t, n) {
            function r(e, t) {
                for (var n = {}, r = 0, o = e.length; r < o; r++) n[e[r]] = t || {};
                return n;
            }
            var o, i;
            (t = t || ""), "string" == typeof (n = n || []) && (n = Zr(n));
            for (var a = Zr(e), u = a.length; u--; ) (i = { attributes: r((o = Zr([s, t].join(" ")))), attributesOrder: o, children: r(n, Qo) }), (c[a[u]] = i);
        }
        function p(e, t) {
            for (var n, r, o, i = Zr(e), a = i.length, u = Zr(t); a--; ) for (n = c[i[a]], r = 0, o = u.length; r < o; r++) (n.attributes[u[r]] = {}), n.attributesOrder.push(u[r]);
        }
        !1 === i.verify_html && (i.valid_elements = "*[*]");
        var h = eo(i.valid_styles),
            v = eo(i.invalid_styles, "map"),
            b = eo(i.valid_classes, "map"),
            y = e("whitespace_elements", "pre script noscript style textarea video audio iframe object code"),
            C = e("self_closing_elements", "colgroup dd dt li option p td tfoot th thead tr"),
            x = e("short_ended_elements", "area base basefont br col frame hr img input isindex link meta param embed source wbr track"),
            w = e("boolean_attributes", "checked compact declare defer disabled ismap multiple nohref noresize noshade nowrap readonly selected autoplay loop controls"),
            N = "td th iframe video audio object script code",
            k = e("non_empty_elements", N + " pre", x),
            _ = e("move_caret_before_on_enter_elements", N + " table", x),
            A = e("text_block_elements", "h1 h2 h3 h4 h5 h6 p div address pre form blockquote center dir fieldset header footer article section hgroup aside main nav figure"),
            R = e("block_elements", "hr table tbody thead tfoot th tr td li ol ul caption dl dt dd noscript menu isindex option datalist select optgroup figcaption details summary", A),
            D = e("text_inline_elements", "span strong b em i font strike u var cite dfn code mark q sup sub samp");
        function T(e) {
            return new RegExp("^" + e.replace(/([?+*])/g, ".$1") + "$");
        }
        function O(e) {
            var t,
                n,
                r,
                o,
                i,
                a,
                u,
                s,
                c,
                l,
                f,
                d,
                m,
                g,
                p,
                h,
                v,
                b,
                y = /^([#+\-])?([^\[!\/]+)(?:\/([^\[!]+))?(?:(!?)\[([^\]]+)])?$/,
                C = /^([!\-])?(\w+[\\:]:\w+|[^=:<]+)?(?:([=:<])(.*))?$/,
                x = /[*?+]/;
            if (e) {
                var w = Zr(e, ",");
                for (S["@"] && ((h = S["@"].attributes), (v = S["@"].attributesOrder)), t = 0, n = w.length; t < n; t++)
                    if ((i = y.exec(w[t]))) {
                        if (
                            ((g = i[1]),
                            (c = i[2]),
                            (p = i[3]),
                            (s = i[5]),
                            (a = { attributes: (d = {}), attributesOrder: (m = []) }),
                            "#" === g && (a.paddEmpty = !0),
                            "-" === g && (a.removeEmpty = !0),
                            "!" === i[4] && (a.removeEmptyAttrs = !0),
                            h &&
                                (ne(h, function (e, t) {
                                    d[t] = e;
                                }),
                                m.push.apply(m, v)),
                            s)
                        )
                            for (r = 0, o = (s = Zr(s, "|")).length; r < o; r++)
                                (i = C.exec(s[r])) &&
                                    ((u = {}),
                                    (f = i[1]),
                                    (l = i[2].replace(/[\\:]:/g, ":")),
                                    (g = i[3]),
                                    (b = i[4]),
                                    "!" === f && ((a.attributesRequired = a.attributesRequired || []), a.attributesRequired.push(l), (u.required = !0)),
                                    "-" !== f
                                        ? (g &&
                                              ("=" === g && ((a.attributesDefault = a.attributesDefault || []), a.attributesDefault.push({ name: l, value: b }), (u.defaultValue = b)),
                                              ":" === g && ((a.attributesForced = a.attributesForced || []), a.attributesForced.push({ name: l, value: b }), (u.forcedValue = b)),
                                              "<" === g && (u.validValues = Zo(b, "?"))),
                                          x.test(l) ? ((a.attributePatterns = a.attributePatterns || []), (u.pattern = T(l)), a.attributePatterns.push(u)) : (d[l] || m.push(l), (d[l] = u)))
                                        : (delete d[l], m.splice(ri(m, l), 1)));
                        h || "@" !== c || ((h = d), (v = m)), p && ((a.outputName = c), (S[p] = a)), x.test(c) ? ((a.pattern = T(c)), E.push(a)) : (S[c] = a);
                    }
            }
        }
        function B(e) {
            (S = {}),
                (E = []),
                O(e),
                ei(m, function (e, t) {
                    l[t] = e.children;
                });
        }
        function P(e) {
            var a = /^(~)?(.+)$/;
            e &&
                ((Jo.text_block_elements = Jo.block_elements = null),
                ei(Zr(e, ","), function (e) {
                    var t,
                        n = a.exec(e),
                        r = "~" === n[1],
                        o = r ? "span" : "div",
                        i = n[2];
                    (l[i] = l[o]),
                        (f[i] = o),
                        r || ((R[i.toUpperCase()] = {}), (R[i] = {})),
                        S[i] || ((t = S[o]), delete (t = ti({}, t)).removeEmptyAttrs, delete t.removeEmpty, (S[i] = t)),
                        ei(l, function (e, t) {
                            e[o] && ((l[t] = e = ti({}, l[t])), (e[i] = e[o]));
                        });
                }));
        }
        function L(e) {
            var o = /^([+\-]?)([A-Za-z0-9_\-.\u00b7\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u037d\u037f-\u1fff\u200c-\u200d\u203f-\u2040\u2070-\u218f\u2c00-\u2fef\u3001-\ud7ff\uf900-\ufdcf\ufdf0-\ufffd]+)\[([^\]]+)]$/;
            (Jo[i.schema] = null),
                e &&
                    ei(Zr(e, ","), function (e) {
                        var t,
                            n,
                            r = o.exec(e);
                        r &&
                            ((n = r[1]),
                            (t = n ? l[r[2]] : (l[r[2]] = { "#comment": {} })),
                            (t = l[r[2]]),
                            ei(Zr(r[3], "|"), function (e) {
                                "-" === n ? delete t[e] : (t[e] = {});
                            }));
                    });
        }
        function I(e) {
            var t,
                n = S[e];
            if (n) return n;
            for (t = E.length; t--; ) if ((n = E[t]).pattern.test(e)) return n;
        }
        ei((i.special || "script noscript iframe noframes noembed title style textarea xmp").split(" "), function (e) {
            d[e] = new RegExp("</" + e + "[^>]*>", "gi");
        }),
            i.valid_elements
                ? B(i.valid_elements)
                : (ei(m, function (e, t) {
                      (S[t] = { attributes: e.attributes, attributesOrder: e.attributesOrder }), (l[t] = e.children);
                  }),
                  "html5" !== i.schema &&
                      ei(Zr("strong/b em/i"), function (e) {
                          var t = Zr(e, "/");
                          S[t[1]].outputName = t[0];
                      }),
                  ei(Zr("ol ul sub sup blockquote span font a table tbody strong em b i"), function (e) {
                      S[e] && (S[e].removeEmpty = !0);
                  }),
                  ei(Zr("p h1 h2 h3 h4 h5 h6 th td pre div address caption li"), function (e) {
                      S[e].paddEmpty = !0;
                  }),
                  ei(Zr("span"), function (e) {
                      S[e].removeEmptyAttrs = !0;
                  })),
            P(i.custom_elements),
            L(i.valid_children),
            O(i.extended_valid_elements),
            L("+ol[ul|ol],+ul[ul|ol]"),
            ei({ dd: "dl", dt: "dl", li: "ul ol", td: "tr", th: "tr", tr: "tbody thead tfoot", tbody: "table", thead: "table", tfoot: "table", legend: "fieldset", area: "map", param: "video audio object" }, function (e, t) {
                S[t] && (S[t].parentsRequired = Zr(e));
            }),
            i.invalid_elements &&
                ei(ni(i.invalid_elements), function (e) {
                    S[e] && delete S[e];
                }),
            I("span") || O("span[!data-mce-type|*]");
        var M = J(h),
            F = J(v),
            U = J(b),
            z = J(w),
            H = J(R),
            j = J(A),
            V = J(D),
            q = J(x),
            $ = J(C),
            W = J(k),
            K = J(_),
            X = J(y),
            Y = J(d),
            G = J(f);
        return {
            children: l,
            elements: S,
            getValidStyles: M,
            getValidClasses: U,
            getBlockElements: H,
            getInvalidStyles: F,
            getShortEndedElements: q,
            getTextBlockElements: j,
            getTextInlineElements: V,
            getBoolAttrs: z,
            getElementRule: I,
            getSelfClosingElements: $,
            getNonEmptyElements: W,
            getMoveCaretBeforeOnEnterElements: K,
            getWhiteSpaceElements: X,
            getSpecialElements: Y,
            isValidChild: function (e, t) {
                var n = l[e.toLowerCase()];
                return !(!n || !n[t.toLowerCase()]);
            },
            isValid: function (e, t) {
                var n,
                    r,
                    o = I(e);
                if (o) {
                    if (!t) return !0;
                    if (o.attributes[t]) return !0;
                    if ((n = o.attributePatterns)) for (r = n.length; r--; ) if (n[r].pattern.test(e)) return !0;
                }
                return !1;
            },
            getCustomElements: G,
            addValidElements: O,
            setValidElements: B,
            addCustomElements: P,
            addValidChildren: L,
        };
    }
    function no(e, t, n, r) {
        function o(e) {
            return 1 < (e = parseInt(e, 10).toString(16)).length ? e : "0" + e;
        }
        return "#" + o(t) + o(n) + o(r);
    }
    function ro(b, e) {
        var u,
            o,
            y = this,
            C = /rgb\s*\(\s*([0-9]+)\s*,\s*([0-9]+)\s*,\s*([0-9]+)\s*\)/gi,
            x = /(?:url(?:(?:\(\s*\"([^\"]+)\"\s*\))|(?:\(\s*\'([^\']+)\'\s*\))|(?:\(\s*([^)\s]+)\s*\))))|(?:\'([^\']+)\')|(?:\"([^\"]+)\")/gi,
            w = /\s*([^:]+):\s*([^;]+);?/g,
            S = /\s+$/,
            E = {},
            N = bo;
        (b = b || {}), e && ((u = e.getValidStyles()), (o = e.getInvalidStyles()));
        for (var t = ("\\\" \\' \\; \\: ; : " + N).split(" "), k = 0; k < t.length; k++) (E[t[k]] = N + k), (E[N + k] = t[k]);
        return {
            toHex: function (e) {
                return e.replace(C, no);
            },
            parse: function (e) {
                function t(e, t, n) {
                    var r = p[e + "-top" + t];
                    if (r) {
                        var o = p[e + "-right" + t];
                        if (o) {
                            var i = p[e + "-bottom" + t];
                            if (i) {
                                var a = p[e + "-left" + t];
                                if (a) {
                                    var u = [r, o, i, a];
                                    for (k = u.length - 1; k-- && u[k] === u[k + 1]; );
                                    (-1 < k && n) || ((p[e + t] = -1 === k ? u[0] : u.join(" ")), delete p[e + "-top" + t], delete p[e + "-right" + t], delete p[e + "-bottom" + t], delete p[e + "-left" + t]);
                                }
                            }
                        }
                    }
                }
                function n(e) {
                    var t,
                        n = p[e];
                    if (n) {
                        for (t = (n = n.split(" ")).length; t--; ) if (n[t] !== n[0]) return;
                        return (p[e] = n[0]), 1;
                    }
                }
                function r(e) {
                    return (f = !0), E[e];
                }
                function u(e, t) {
                    return (
                        f &&
                            (e = e.replace(/\uFEFF[0-9]/g, function (e) {
                                return E[e];
                            })),
                        t ? e : e.replace(/\\([\'\";:])/g, "$1")
                    );
                }
                function o(e) {
                    return String.fromCharCode(parseInt(e.slice(1), 16));
                }
                function i(e) {
                    return e.replace(/\\[0-9a-f]+/gi, o);
                }
                function a(e, t, n, r, o, i) {
                    if ((o = o || i)) return "'" + (o = u(o)).replace(/\'/g, "\\'") + "'";
                    if (((t = u(t || n || r)), !b.allow_script_urls)) {
                        var a = t.replace(/[\s\r\n]+/g, "");
                        if (/(java|vb)script:/i.test(a)) return "";
                        if (!b.allow_svg_data_urls && /^data:image\/svg/i.test(a)) return "";
                    }
                    return "url('" + (t = h ? h.call(v, t, "style") : t).replace(/\'/g, "\\'") + "')";
                }
                var s,
                    c,
                    l,
                    f,
                    d,
                    m,
                    g,
                    p = {},
                    h = b.url_converter,
                    v = b.url_converter_scope || y;
                if (e) {
                    for (
                        e = (e = e.replace(/[\u0000-\u001F]/g, "")).replace(/\\[\"\';:\uFEFF]/g, r).replace(/\"[^\"]+\"|\'[^\']+\'/g, function (e) {
                            return e.replace(/[;:]/g, r);
                        });
                        (s = w.exec(e));

                    )
                        (w.lastIndex = s.index + s[0].length),
                            (c = s[1].replace(S, "").toLowerCase()),
                            (l = s[2].replace(S, "")),
                            c &&
                                l &&
                                ((c = i(c)),
                                (l = i(l)),
                                -1 === c.indexOf(N) &&
                                    -1 === c.indexOf('"') &&
                                    (b.allow_script_urls || ("behavior" !== c && !/expression\s*\(|\/\*|\*\//.test(l))) &&
                                    ("font-weight" === c && "700" === l ? (l = "bold") : ("color" !== c && "background-color" !== c) || (l = l.toLowerCase()), (l = (l = l.replace(C, no)).replace(x, a)), (p[c] = f ? u(l, !0) : l)));
                    t("border", "", !0),
                        t("border", "-width"),
                        t("border", "-color"),
                        t("border", "-style"),
                        t("padding", ""),
                        t("margin", ""),
                        (m = "border-style"),
                        (g = "border-color"),
                        n((d = "border-width")) && n(m) && n(g) && ((p.border = p[d] + " " + p[m] + " " + p[g]), delete p[d], delete p[m], delete p[g]),
                        "medium none" === p.border && delete p.border,
                        "none" === p["border-image"] && delete p["border-image"];
                }
                return p;
            },
            serialize: function (i, r) {
                function e(e) {
                    var t,
                        n = u[e];
                    if (n) for (var r = 0, o = n.length; r < o; r++) (e = n[r]), (t = i[e]) && (a += (0 < a.length ? " " : "") + e + ": " + t + ";");
                }
                var a = "";
                return (
                    r && u
                        ? (e("*"), e(r))
                        : ne(i, function (e, t) {
                              var n;
                              !e || (o && (((n = o["*"]) && n[t]) || ((n = o[r]) && n[t]))) || (a += (0 < a.length ? " " : "") + t + ": " + e + ";");
                          }),
                    a
                );
            },
        };
    }
    function oo(e) {
        return e instanceof Event || y(e.initEvent);
    }
    function io(e, t, n, r) {
        var o,
            i,
            a = (function (e) {
                var t,
                    n = null != r ? r : {};
                for (t in e) Ne(oi, t) || (n[t] = e[t]);
                return (
                    V(n.composedPath) &&
                        (n.composedPath = function () {
                            return e.composedPath();
                        }),
                    n
                );
            })(t);
        return (
            (a.type = e),
            K(a.target) && (a.target = null !== (o = a.srcElement) && void 0 !== o ? o : n),
            (K((i = t).preventDefault) || oo(i)) &&
                ((a.preventDefault = function () {
                    (a.defaultPrevented = !0), (a.isDefaultPrevented = w), y(t.preventDefault) ? t.preventDefault() : oo(t) && (t.returnValue = !1);
                }),
                (a.stopPropagation = function () {
                    (a.cancelBubble = !0), (a.isPropagationStopped = w), y(t.stopPropagation) ? t.stopPropagation() : oo(t) && (t.cancelBubble = !0);
                }),
                (a.stopImmediatePropagation = function () {
                    (a.isImmediatePropagationStopped = w), a.stopPropagation();
                }),
                a.isDefaultPrevented !== w && a.isDefaultPrevented !== R && ((a.isDefaultPrevented = !0 === a.defaultPrevented ? w : R), (a.isPropagationStopped = !0 === a.cancelBubble ? w : R), (a.isImmediatePropagationStopped = R))),
            a
        );
    }
    function ao(e, t, n, r) {
        e.addEventListener ? e.addEventListener(t, n, r || !1) : e.attachEvent && e.attachEvent("on" + t, n);
    }
    function uo(e, t, n, r) {
        e.removeEventListener ? e.removeEventListener(t, n, r || !1) : e.detachEvent && e.detachEvent("on" + t, n);
    }
    function so(e, t) {
        var n,
            r,
            o,
            i,
            a = io(e.type, e, document, t);
        return (
            V((i = e)) &&
                ii.test(i.type) &&
                b(e.pageX) &&
                !b(e.clientX) &&
                ((r = (n = a.target.ownerDocument || document).documentElement),
                (o = n.body),
                (a.pageX = e.clientX + ((r && r.scrollLeft) || (o && o.scrollLeft) || 0) - ((r && r.clientLeft) || (o && o.clientLeft) || 0)),
                (a.pageY = e.clientY + ((r && r.scrollTop) || (o && o.scrollTop) || 0) - ((r && r.clientTop) || (o && o.clientTop) || 0))),
            b(a.metaKey) && (a.metaKey = !1),
            a
        );
    }
    var co = Tr(["h1", "h2", "h3", "h4", "h5", "h6"]),
        lo = Tr([
            "article",
            "aside",
            "details",
            "div",
            "dt",
            "figcaption",
            "footer",
            "form",
            "fieldset",
            "header",
            "hgroup",
            "html",
            "main",
            "nav",
            "section",
            "summary",
            "body",
            "p",
            "dl",
            "multicol",
            "dd",
            "figure",
            "address",
            "center",
            "blockquote",
            "h1",
            "h2",
            "h3",
            "h4",
            "h5",
            "h6",
            "listing",
            "xmp",
            "pre",
            "plaintext",
            "menu",
            "dir",
            "ul",
            "ol",
            "li",
            "hr",
            "table",
            "tbody",
            "thead",
            "tfoot",
            "th",
            "tr",
            "td",
            "caption",
        ]),
        fo = Tr(["h1", "h2", "h3", "h4", "h5", "h6", "p", "div", "address", "pre", "form", "blockquote", "center", "dir", "fieldset", "header", "footer", "article", "section", "hgroup", "aside", "nav", "figure"]),
        mo = Tr(["ul", "ol", "dl"]),
        go = Tr(["li", "dd", "dt"]),
        po = Tr(["thead", "tbody", "tfoot"]),
        ho = Tr(["td", "th"]),
        vo = Tr(["pre", "script", "textarea", "style"]),
        bo = "\ufeff",
        yo = "\xa0",
        Co = bo,
        xo = function (e) {
            return e === bo;
        },
        wo = function (e) {
            return e.replace(/\uFEFF/g, "");
        },
        So = zn,
        Eo = jn,
        No = function (e) {
            return Eo(e) && e.data[0] === Co;
        },
        ko = function (e) {
            return Eo(e) && e.data[e.data.length - 1] === Co;
        },
        _o = Xn,
        Ao = Yn,
        Ro = Wn,
        Do = jn,
        To = on(["script", "style", "textarea"]),
        Oo = on(["img", "input", "textarea", "hr", "iframe", "video", "audio", "object", "embed"]),
        Bo = on(["table"]),
        Po = Ir,
        Lo = function (e) {
            return !1 === (zn((t = e)) && "true" === t.getAttribute("unselectable")) && Ao(e);
            var t;
        },
        Io = /^[ \t\r\n]*$/,
        Mo = un("data-mce-bookmark"),
        Fo = un("data-mce-bogus"),
        Uo = function (e) {
            return zn(e) && "all" === e.getAttribute("data-mce-bogus");
        },
        zo = function (e, t, n) {
            var r = n || t;
            if (zn(t) && Xr(t)) return t;
            for (var o, i, a, u, s, c, l, f, d, m, g, p = t.childNodes, h = p.length - 1; 0 <= h; h--) zo(e, p[h], r);
            return (
                !zn(t) || (1 === (o = t.childNodes).length && Xr(o[0]) && t.parentNode.insertBefore(o[0], t)),
                $n((a = t)) ||
                    qn(a) ||
                    $r(t, r) ||
                    (zn((i = t)) && 0 < i.childNodes.length) ||
                    ((s = r), jn((u = t)) && 0 < u.data.length && ((f = new Rr((c = u), (l = s)).prev(!1)), (d = new Rr(c, l).next(!1)), (m = b(f) || Kr(f, l)), (g = b(d) || Kr(d, l)), m && g)) ||
                    e.remove(t),
                t
            );
        },
        Ho = Et.makeMap,
        jo = /[&<>\"\u0060\u007E-\uD7FF\uE000-\uFFEF]|[\uD800-\uDBFF][\uDC00-\uDFFF]/g,
        Vo = /[<>&\u007E-\uD7FF\uE000-\uFFEF]|[\uD800-\uDBFF][\uDC00-\uDFFF]/g,
        qo = /[<>&\"\']/g,
        $o = /&#([a-z0-9]+);?|&([a-z0-9]+);/gi,
        Wo = {
            128: "\u20ac",
            130: "\u201a",
            131: "\u0192",
            132: "\u201e",
            133: "\u2026",
            134: "\u2020",
            135: "\u2021",
            136: "\u02c6",
            137: "\u2030",
            138: "\u0160",
            139: "\u2039",
            140: "\u0152",
            142: "\u017d",
            145: "\u2018",
            146: "\u2019",
            147: "\u201c",
            148: "\u201d",
            149: "\u2022",
            150: "\u2013",
            151: "\u2014",
            152: "\u02dc",
            153: "\u2122",
            154: "\u0161",
            155: "\u203a",
            156: "\u0153",
            158: "\u017e",
            159: "\u0178",
        },
        Ko = { '"': "&quot;", "'": "&#39;", "<": "&lt;", ">": "&gt;", "&": "&amp;", "`": "&#96;" },
        Xo = { "&lt;": "<", "&gt;": ">", "&amp;": "&", "&quot;": '"', "&apos;": "'" },
        Yo = Yr(
            "50,nbsp,51,iexcl,52,cent,53,pound,54,curren,55,yen,56,brvbar,57,sect,58,uml,59,copy,5a,ordf,5b,laquo,5c,not,5d,shy,5e,reg,5f,macr,5g,deg,5h,plusmn,5i,sup2,5j,sup3,5k,acute,5l,micro,5m,para,5n,middot,5o,cedil,5p,sup1,5q,ordm,5r,raquo,5s,frac14,5t,frac12,5u,frac34,5v,iquest,60,Agrave,61,Aacute,62,Acirc,63,Atilde,64,Auml,65,Aring,66,AElig,67,Ccedil,68,Egrave,69,Eacute,6a,Ecirc,6b,Euml,6c,Igrave,6d,Iacute,6e,Icirc,6f,Iuml,6g,ETH,6h,Ntilde,6i,Ograve,6j,Oacute,6k,Ocirc,6l,Otilde,6m,Ouml,6n,times,6o,Oslash,6p,Ugrave,6q,Uacute,6r,Ucirc,6s,Uuml,6t,Yacute,6u,THORN,6v,szlig,70,agrave,71,aacute,72,acirc,73,atilde,74,auml,75,aring,76,aelig,77,ccedil,78,egrave,79,eacute,7a,ecirc,7b,euml,7c,igrave,7d,iacute,7e,icirc,7f,iuml,7g,eth,7h,ntilde,7i,ograve,7j,oacute,7k,ocirc,7l,otilde,7m,ouml,7n,divide,7o,oslash,7p,ugrave,7q,uacute,7r,ucirc,7s,uuml,7t,yacute,7u,thorn,7v,yuml,ci,fnof,sh,Alpha,si,Beta,sj,Gamma,sk,Delta,sl,Epsilon,sm,Zeta,sn,Eta,so,Theta,sp,Iota,sq,Kappa,sr,Lambda,ss,Mu,st,Nu,su,Xi,sv,Omicron,t0,Pi,t1,Rho,t3,Sigma,t4,Tau,t5,Upsilon,t6,Phi,t7,Chi,t8,Psi,t9,Omega,th,alpha,ti,beta,tj,gamma,tk,delta,tl,epsilon,tm,zeta,tn,eta,to,theta,tp,iota,tq,kappa,tr,lambda,ts,mu,tt,nu,tu,xi,tv,omicron,u0,pi,u1,rho,u2,sigmaf,u3,sigma,u4,tau,u5,upsilon,u6,phi,u7,chi,u8,psi,u9,omega,uh,thetasym,ui,upsih,um,piv,812,bull,816,hellip,81i,prime,81j,Prime,81u,oline,824,frasl,88o,weierp,88h,image,88s,real,892,trade,89l,alefsym,8cg,larr,8ch,uarr,8ci,rarr,8cj,darr,8ck,harr,8dl,crarr,8eg,lArr,8eh,uArr,8ei,rArr,8ej,dArr,8ek,hArr,8g0,forall,8g2,part,8g3,exist,8g5,empty,8g7,nabla,8g8,isin,8g9,notin,8gb,ni,8gf,prod,8gh,sum,8gi,minus,8gn,lowast,8gq,radic,8gt,prop,8gu,infin,8h0,ang,8h7,and,8h8,or,8h9,cap,8ha,cup,8hb,int,8hk,there4,8hs,sim,8i5,cong,8i8,asymp,8j0,ne,8j1,equiv,8j4,le,8j5,ge,8k2,sub,8k3,sup,8k4,nsub,8k6,sube,8k7,supe,8kl,oplus,8kn,otimes,8l5,perp,8m5,sdot,8o8,lceil,8o9,rceil,8oa,lfloor,8ob,rfloor,8p9,lang,8pa,rang,9ea,loz,9j0,spades,9j3,clubs,9j5,hearts,9j6,diams,ai,OElig,aj,oelig,b0,Scaron,b1,scaron,bo,Yuml,m6,circ,ms,tilde,802,ensp,803,emsp,809,thinsp,80c,zwnj,80d,zwj,80e,lrm,80f,rlm,80j,ndash,80k,mdash,80o,lsquo,80p,rsquo,80q,sbquo,80s,ldquo,80t,rdquo,80u,bdquo,810,dagger,811,Dagger,81g,permil,81p,lsaquo,81q,rsaquo,85c,euro",
            32
        ),
        Go = {
            encodeRaw: Gr,
            encodeAllRaw: function (e) {
                return ("" + e).replace(qo, function (e) {
                    return Ko[e] || e;
                });
            },
            encodeNumeric: Jr,
            encodeNamed: Qr,
            getEncodeFunc: function (e, t) {
                var n = Yr(t) || Yo,
                    r = Ho(e.replace(/\+/g, ","));
                return r.named && r.numeric
                    ? function (e, t) {
                          return e.replace(t ? jo : Vo, function (e) {
                              return void 0 !== Ko[e] ? Ko[e] : void 0 !== n[e] ? n[e] : 1 < e.length ? "&#" + (1024 * (e.charCodeAt(0) - 55296) + (e.charCodeAt(1) - 56320) + 65536) + ";" : "&#" + e.charCodeAt(0) + ";";
                          });
                      }
                    : r.named
                    ? t
                        ? function (e, t) {
                              return Qr(e, t, n);
                          }
                        : Qr
                    : r.numeric
                    ? Jr
                    : Gr;
            },
            decode: function (e) {
                return e.replace($o, function (e, t) {
                    return t
                        ? 65535 < (t = "x" === t.charAt(0).toLowerCase() ? parseInt(t.substr(1), 16) : parseInt(t, 10))
                            ? ((t -= 65536), String.fromCharCode(55296 + (t >> 10), 56320 + (1023 & t)))
                            : Wo[t] || String.fromCharCode(t)
                        : Xo[e] || Yo[e] || ((n = e), ((r = Nt.fromTag("div").dom).innerHTML = n), r.textContent || r.innerText || n);
                    var n, r;
                });
            },
        },
        Jo = {},
        Qo = {},
        Zo = Et.makeMap,
        ei = Et.each,
        ti = Et.extend,
        ni = Et.explode,
        ri = Et.inArray,
        oi = { keyLocation: !0, layerX: !0, layerY: !0, returnValue: !0, webkitMovementX: !0, webkitMovementY: !0, keyIdentifier: !0, mozPressure: !0 },
        ii = /^(?:mouse|contextmenu)|click/,
        ai =
            ((ui.prototype.bind = function (e, t, n, r) {
                function o(e) {
                    f.executeHandlers(so(e || d.event), i);
                }
                var i,
                    a,
                    u,
                    s,
                    c,
                    l,
                    f = this,
                    d = window;
                if (e && 3 !== e.nodeType && 8 !== e.nodeType) {
                    e[f.expando] ? (i = e[f.expando]) : ((i = f.count++), (e[f.expando] = i), (f.events[i] = {})), (r = r || e);
                    for (var m = t.split(" "), g = m.length; g--; )
                        (c = o),
                            (s = l = !1),
                            "DOMContentLoaded" === (u = m[g]) && (u = "ready"),
                            f.domLoaded && "ready" === u && "complete" === e.readyState
                                ? n.call(r, so({ type: u }))
                                : (f.hasMouseEnterLeave ||
                                      ((s = f.mouseEnterLeave[u]) &&
                                          (c = function (e) {
                                              var t = e.currentTarget,
                                                  n = e.relatedTarget;
                                              if (n && t.contains) n = t.contains(n);
                                              else for (; n && n !== t; ) n = n.parentNode;
                                              n || (((e = so(e || d.event)).type = "mouseout" === e.type ? "mouseleave" : "mouseenter"), (e.target = t), f.executeHandlers(e, i));
                                          })),
                                  f.hasFocusIn ||
                                      ("focusin" !== u && "focusout" !== u) ||
                                      ((l = !0),
                                      (s = "focusin" === u ? "focus" : "blur"),
                                      (c = function (e) {
                                          ((e = so(e || d.event)).type = "focus" === e.type ? "focusin" : "focusout"), f.executeHandlers(e, i);
                                      })),
                                  (a = f.events[i][u])
                                      ? "ready" === u && f.domLoaded
                                          ? n(so({ type: u }))
                                          : a.push({ func: n, scope: r })
                                      : ((f.events[i][u] = a = [{ func: n, scope: r }]),
                                        (a.fakeName = s),
                                        (a.capture = l),
                                        (a.nativeHandler = c),
                                        "ready" === u
                                            ? (function (e, t, n) {
                                                  var r,
                                                      o = e.document,
                                                      i = { type: "ready" };
                                                  n.domLoaded
                                                      ? t(i)
                                                      : ((r = function () {
                                                            uo(e, "DOMContentLoaded", r), uo(e, "load", r), n.domLoaded || ((n.domLoaded = !0), t(i)), (e = null);
                                                        }),
                                                        "complete" === o.readyState || ("interactive" === o.readyState && o.body) ? r() : ao(e, "DOMContentLoaded", r),
                                                        n.domLoaded || ao(e, "load", r));
                                              })(e, c, f)
                                            : ao(e, s || u, c, l)));
                    return (e = a = null), n;
                }
            }),
            (ui.prototype.unbind = function (n, e, t) {
                var r, o, i;
                if (!n || 3 === n.nodeType || 8 === n.nodeType) return this;
                var a = n[this.expando];
                if (a) {
                    if (((i = this.events[a]), e)) {
                        for (var u, s, c, l, f = e.split(" "), d = f.length; d--; )
                            if ((l = i[(o = f[d])])) {
                                if (t)
                                    for (r = l.length; r--; )
                                        l[r].func === t && ((u = l.nativeHandler), (s = l.fakeName), (c = l.capture), ((l = l.slice(0, r).concat(l.slice(r + 1))).nativeHandler = u), (l.fakeName = s), (l.capture = c), (i[o] = l));
                                (t && 0 !== l.length) || (delete i[o], uo(n, l.fakeName || o, l.nativeHandler, l.capture));
                            }
                    } else
                        ne(i, function (e, t) {
                            uo(n, e.fakeName || t, e.nativeHandler, e.capture);
                        }),
                            (i = {});
                    for (o in i) if (Ne(i, o)) return this;
                    delete this.events[a];
                    try {
                        delete n[this.expando];
                    } catch (e) {
                        n[this.expando] = null;
                    }
                }
                return this;
            }),
            (ui.prototype.fire = function (e, t, n) {
                var r;
                if (!e || 3 === e.nodeType || 8 === e.nodeType) return this;
                for (var o = so({ type: t, target: e }, n); (r = e[this.expando]) && this.executeHandlers(o, r), (e = e.parentNode || e.ownerDocument || e.defaultView || e.parentWindow) && !o.isPropagationStopped(); );
                return this;
            }),
            (ui.prototype.clean = function (e) {
                var t, n;
                if (!e || 3 === e.nodeType || 8 === e.nodeType) return this;
                if ((e[this.expando] && this.unbind(e), (e = e.getElementsByTagName ? e : e.document) && e.getElementsByTagName))
                    for (this.unbind(e), t = (n = e.getElementsByTagName("*")).length; t--; ) (e = n[t])[this.expando] && this.unbind(e);
                return this;
            }),
            (ui.prototype.destroy = function () {
                this.events = {};
            }),
            (ui.prototype.cancel = function (e) {
                return e && (e.preventDefault(), e.stopImmediatePropagation()), !1;
            }),
            (ui.prototype.executeHandlers = function (e, t) {
                var n = this.events[t],
                    r = n && n[e.type];
                if (r)
                    for (var o = 0, i = r.length; o < i; o++) {
                        var a = r[o];
                        if ((a && !1 === a.func.call(a.scope, e) && e.preventDefault(), e.isImmediatePropagationStopped())) return;
                    }
            }),
            (ui.Event = new ui()),
            ui);
    function ui() {
        (this.domLoaded = !1),
            (this.events = {}),
            (this.count = 1),
            (this.expando = "mce-data-" + (+new Date()).toString(32)),
            (this.hasMouseEnterLeave = "onmouseenter" in document.documentElement),
            (this.hasFocusIn = "onfocusin" in document.documentElement),
            (this.count = 1);
    }
    function si(e, t, n) {
        var r = "0x" + t - 65536;
        return r != r || n ? t : r < 0 ? String.fromCharCode(65536 + r) : String.fromCharCode((r >> 10) | 55296, (1023 & r) | 56320);
    }
    var ci,
        li,
        fi,
        di,
        mi,
        gi,
        pi,
        hi,
        vi,
        bi,
        yi,
        Ci,
        xi,
        wi,
        Si,
        Ei,
        Ni,
        ki = "sizzle" + -new Date(),
        _i = window.document,
        Ai = 0,
        Ri = 0,
        Di = ua(),
        Ti = ua(),
        Oi = ua(),
        Bi = function (e, t) {
            return e === t && (bi = !0), 0;
        },
        Pi = "undefined",
        Li = {}.hasOwnProperty,
        Ii = [],
        Mi = Ii.pop,
        Fi = Ii.push,
        Ui = Ii.push,
        zi = Ii.slice,
        Hi =
            Ii.indexOf ||
            function (e) {
                for (var t = 0, n = this.length; t < n; t++) if (this[t] === e) return t;
                return -1;
            },
        ji = "[\\x20\\t\\r\\n\\f]",
        Vi = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
        qi = "\\[" + ji + "*(" + Vi + ")(?:" + ji + "*([*^$|!~]?=)" + ji + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + Vi + "))|)" + ji + "*\\]",
        $i = ":(" + Vi + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + qi + ")*)|.*)\\)|)",
        Wi = new RegExp("^" + ji + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ji + "+$", "g"),
        Ki = new RegExp("^" + ji + "*," + ji + "*"),
        Xi = new RegExp("^" + ji + "*([>+~]|" + ji + ")" + ji + "*"),
        Yi = new RegExp("=" + ji + "*([^\\]'\"]*?)" + ji + "*\\]", "g"),
        Gi = new RegExp($i),
        Ji = new RegExp("^" + Vi + "$"),
        Qi = {
            ID: new RegExp("^#(" + Vi + ")"),
            CLASS: new RegExp("^\\.(" + Vi + ")"),
            TAG: new RegExp("^(" + Vi + "|[*])"),
            ATTR: new RegExp("^" + qi),
            PSEUDO: new RegExp("^" + $i),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ji + "*(even|odd|(([+-]|)(\\d*)n|)" + ji + "*(?:([+-]|)" + ji + "*(\\d+)|))" + ji + "*\\)|)", "i"),
            bool: new RegExp("^(?:checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)$", "i"),
            needsContext: new RegExp("^" + ji + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ji + "*((?:-\\d)?\\d*)" + ji + "*\\)|)(?=[^-]|$)", "i"),
        },
        Zi = /^(?:input|select|textarea|button)$/i,
        ea = /^h\d$/i,
        ta = /^[^{]+\{\s*\[native \w/,
        na = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        ra = /[+~]/,
        oa = /'|\\/g,
        ia = new RegExp("\\\\([\\da-f]{1,6}" + ji + "?|(" + ji + ")|.)", "ig");
    try {
        Ui.apply((Ii = zi.call(_i.childNodes)), _i.childNodes), Ii[_i.childNodes.length].nodeType;
    } catch (e) {
        Ui = {
            apply: Ii.length
                ? function (e, t) {
                      Fi.apply(e, zi.call(t));
                  }
                : function (e, t) {
                      for (var n = e.length, r = 0; (e[n++] = t[r++]); );
                      e.length = n - 1;
                  },
        };
    }
    var aa = function (e, t, n, r) {
        var o, i, a, u, s, c, l, f, d, m;
        if (((t ? t.ownerDocument || t : _i) !== Ci && yi(t), (n = n || []), !e || "string" != typeof e)) return n;
        if (1 !== (u = (t = t || Ci).nodeType) && 9 !== u) return [];
        if (wi && !r) {
            if ((o = na.exec(e)))
                if ((a = o[1])) {
                    if (9 === u) {
                        if (!(i = t.getElementById(a)) || !i.parentNode) return n;
                        if (i.id === a) return n.push(i), n;
                    } else if (t.ownerDocument && (i = t.ownerDocument.getElementById(a)) && Ni(t, i) && i.id === a) return n.push(i), n;
                } else {
                    if (o[2]) return Ui.apply(n, t.getElementsByTagName(e)), n;
                    if ((a = o[3]) && ci.getElementsByClassName) return Ui.apply(n, t.getElementsByClassName(a)), n;
                }
            if (ci.qsa && (!Si || !Si.test(e))) {
                if (((f = l = ki), (d = t), (m = 9 === u && e), 1 === u && "object" !== t.nodeName.toLowerCase())) {
                    for (c = mi(e), (l = t.getAttribute("id")) ? (f = l.replace(oa, "\\$&")) : t.setAttribute("id", f), f = "[id='" + f + "'] ", s = c.length; s--; ) c[s] = f + ma(c[s]);
                    (d = (ra.test(e) && fa(t.parentNode)) || t), (m = c.join(","));
                }
                if (m)
                    try {
                        return Ui.apply(n, d.querySelectorAll(m)), n;
                    } catch (e) {
                    } finally {
                        l || t.removeAttribute("id");
                    }
            }
        }
        return pi(e.replace(Wi, "$1"), t, n, r);
    };
    function ua() {
        var n = [];
        function r(e, t) {
            return n.push(e + " ") > li.cacheLength && delete r[n.shift()], (r[e + " "] = t);
        }
        return r;
    }
    function sa(e) {
        return (e[ki] = !0), e;
    }
    function ca(e, t) {
        var n = t && e,
            r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || 1 << 31) - (~e.sourceIndex || 1 << 31);
        if (r) return r;
        if (n) for (; (n = n.nextSibling); ) if (n === t) return -1;
        return e ? 1 : -1;
    }
    function la(a) {
        return sa(function (i) {
            return (
                (i = +i),
                sa(function (e, t) {
                    for (var n, r = a([], e.length, i), o = r.length; o--; ) e[(n = r[o])] && (e[n] = !(t[n] = e[n]));
                })
            );
        });
    }
    function fa(e) {
        return e && typeof e.getElementsByTagName != Pi && e;
    }
    function da() {}
    function ma(e) {
        for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
        return r;
    }
    function ga(a, e, t) {
        var u = e.dir,
            s = t && "parentNode" === u,
            c = Ri++;
        return e.first
            ? function (e, t, n) {
                  for (; (e = e[u]); ) if (1 === e.nodeType || s) return a(e, t, n);
              }
            : function (e, t, n) {
                  var r,
                      o,
                      i = [Ai, c];
                  if (n) {
                      for (; (e = e[u]); ) if ((1 === e.nodeType || s) && a(e, t, n)) return !0;
                  } else
                      for (; (e = e[u]); )
                          if (1 === e.nodeType || s) {
                              if ((r = (o = e[ki] || (e[ki] = {}))[u]) && r[0] === Ai && r[1] === c) return (i[2] = r[2]);
                              if (((o[u] = i)[2] = a(e, t, n))) return !0;
                          }
              };
    }
    function pa(o) {
        return 1 < o.length
            ? function (e, t, n) {
                  for (var r = o.length; r--; ) if (!o[r](e, t, n)) return !1;
                  return !0;
              }
            : o[0];
    }
    function ha(e, t, n, r, o) {
        for (var i, a = [], u = 0, s = e.length, c = null != t; u < s; u++) (i = e[u]) && ((n && !n(i, r, o)) || (a.push(i), c && t.push(u)));
        return a;
    }
    function va(e) {
        return void 0 !== e;
    }
    function ba(e) {
        return "string" == typeof e;
    }
    function ya(e, t) {
        var n,
            r = (t = t || ka).createElement("div"),
            o = t.createDocumentFragment();
        for (r.innerHTML = e; (n = r.firstChild); ) o.appendChild(n);
        return o;
    }
    function Ca(e, t) {
        return e && t && -1 !== (" " + e.className + " ").indexOf(" " + t + " ");
    }
    function xa(e, t, n) {
        var r, o;
        return (
            (t = Wa(t)[0]),
            e.each(function () {
                (n && r === this.parentNode) || ((r = this.parentNode), (o = t.cloneNode(!1)), this.parentNode.insertBefore(o, this)), o.appendChild(this);
            }),
            e
        );
    }
    function wa(e, t) {
        return new Wa.fn.init(e, t);
    }
    function Sa(e) {
        return null == e ? "" : ("" + e).replace(Ua, "");
    }
    function Ea(e, t) {
        var n, r, o, i;
        if (e)
            if (void 0 === (n = e.length)) {
                for (r in e) if (e.hasOwnProperty(r) && ((i = e[r]), !1 === t.call(i, r, i))) break;
            } else for (o = 0; o < n && ((i = e[o]), !1 !== t.call(i, o, i)); o++);
        return e;
    }
    function Na(e, n) {
        var r = [];
        return (
            Ea(e, function (e, t) {
                n(t, e) && r.push(t);
            }),
            r
        );
    }
    (ci = aa.support = {}),
        (di = aa.isXML = function (e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return !!t && "HTML" !== t.nodeName;
        }),
        (yi = aa.setDocument = function (e) {
            var t,
                s = e ? e.ownerDocument || e : _i,
                n = s.defaultView;
            return s !== Ci && 9 === s.nodeType && s.documentElement
                ? ((xi = (Ci = s).documentElement),
                  (wi = !di(s)),
                  n &&
                      n !==
                          (function (e) {
                              try {
                                  return e.top;
                              } catch (e) {}
                              return null;
                          })(n) &&
                      (n.addEventListener
                          ? n.addEventListener(
                                "unload",
                                function () {
                                    yi();
                                },
                                !1
                            )
                          : n.attachEvent &&
                            n.attachEvent("onunload", function () {
                                yi();
                            })),
                  (ci.attributes = !0),
                  (ci.getElementsByTagName = !0),
                  (ci.getElementsByClassName = ta.test(s.getElementsByClassName)),
                  (ci.getById = !0),
                  (li.find.ID = function (e, t) {
                      if (typeof t.getElementById != Pi && wi) {
                          var n = t.getElementById(e);
                          return n && n.parentNode ? [n] : [];
                      }
                  }),
                  (li.filter.ID = function (e) {
                      var t = e.replace(ia, si);
                      return function (e) {
                          return e.getAttribute("id") === t;
                      };
                  }),
                  (li.find.TAG = ci.getElementsByTagName
                      ? function (e, t) {
                            if (typeof t.getElementsByTagName != Pi) return t.getElementsByTagName(e);
                        }
                      : function (e, t) {
                            var n,
                                r = [],
                                o = 0,
                                i = t.getElementsByTagName(e);
                            if ("*" !== e) return i;
                            for (; (n = i[o++]); ) 1 === n.nodeType && r.push(n);
                            return r;
                        }),
                  (li.find.CLASS =
                      ci.getElementsByClassName &&
                      function (e, t) {
                          if (wi) return t.getElementsByClassName(e);
                      }),
                  (Ei = []),
                  (Si = []),
                  (ci.disconnectedMatch = !0),
                  (Si = Si.length && new RegExp(Si.join("|"))),
                  (Ei = Ei.length && new RegExp(Ei.join("|"))),
                  (t = ta.test(xi.compareDocumentPosition)),
                  (Ni =
                      t || ta.test(xi.contains)
                          ? function (e, t) {
                                var n = 9 === e.nodeType ? e.documentElement : e,
                                    r = t && t.parentNode;
                                return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)));
                            }
                          : function (e, t) {
                                if (t) for (; (t = t.parentNode); ) if (t === e) return !0;
                                return !1;
                            }),
                  (Bi = t
                      ? function (e, t) {
                            return e === t
                                ? ((bi = !0), 0)
                                : (n = !e.compareDocumentPosition - !t.compareDocumentPosition) ||
                                      (1 & (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || (!ci.sortDetached && t.compareDocumentPosition(e) === n)
                                          ? e === s || (e.ownerDocument === _i && Ni(_i, e))
                                              ? -1
                                              : t === s || (t.ownerDocument === _i && Ni(_i, t))
                                              ? 1
                                              : vi
                                              ? Hi.call(vi, e) - Hi.call(vi, t)
                                              : 0
                                          : 4 & n
                                          ? -1
                                          : 1);
                            var n;
                        }
                      : function (e, t) {
                            if (e === t) return (bi = !0), 0;
                            var n,
                                r = 0,
                                o = e.parentNode,
                                i = t.parentNode,
                                a = [e],
                                u = [t];
                            if (!o || !i) return e === s ? -1 : t === s ? 1 : o ? -1 : i ? 1 : vi ? Hi.call(vi, e) - Hi.call(vi, t) : 0;
                            if (o === i) return ca(e, t);
                            for (n = e; (n = n.parentNode); ) a.unshift(n);
                            for (n = t; (n = n.parentNode); ) u.unshift(n);
                            for (; a[r] === u[r]; ) r++;
                            return r ? ca(a[r], u[r]) : a[r] === _i ? -1 : u[r] === _i ? 1 : 0;
                        }),
                  s)
                : Ci;
        }),
        (aa.matches = function (e, t) {
            return aa(e, null, null, t);
        }),
        (aa.matchesSelector = function (e, t) {
            if (((e.ownerDocument || e) !== Ci && yi(e), (t = t.replace(Yi, "='$1']")), ci.matchesSelector && wi && (!Ei || !Ei.test(t)) && (!Si || !Si.test(t))))
                try {
                    var n = (void 0).call(e, t);
                    if (n || ci.disconnectedMatch || (e.document && 11 !== e.document.nodeType)) return n;
                } catch (e) {}
            return 0 < aa(t, Ci, null, [e]).length;
        }),
        (aa.contains = function (e, t) {
            return (e.ownerDocument || e) !== Ci && yi(e), Ni(e, t);
        }),
        (aa.attr = function (e, t) {
            (e.ownerDocument || e) !== Ci && yi(e);
            var n = li.attrHandle[t.toLowerCase()],
                r = n && Li.call(li.attrHandle, t.toLowerCase()) ? n(e, t, !wi) : void 0;
            return void 0 !== r ? r : ci.attributes || !wi ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null;
        }),
        (aa.error = function (e) {
            throw new Error("Syntax error, unrecognized expression: " + e);
        }),
        (aa.uniqueSort = function (e) {
            var t,
                n = [],
                r = 0,
                o = 0;
            if (((bi = !ci.detectDuplicates), (vi = !ci.sortStable && e.slice(0)), e.sort(Bi), bi)) {
                for (; (t = e[o++]); ) t === e[o] && (r = n.push(o));
                for (; r--; ) e.splice(n[r], 1);
            }
            return (vi = null), e;
        }),
        (fi = aa.getText = function (e) {
            var t,
                n = "",
                r = 0,
                o = e.nodeType;
            if (o) {
                if (1 === o || 9 === o || 11 === o) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += fi(e);
                } else if (3 === o || 4 === o) return e.nodeValue;
            } else for (; (t = e[r++]); ) n += fi(t);
            return n;
        }),
        ((li = aa.selectors = {
            cacheLength: 50,
            createPseudo: sa,
            match: Qi,
            attrHandle: {},
            find: {},
            relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } },
            preFilter: {
                ATTR: function (e) {
                    return (e[1] = e[1].replace(ia, si)), (e[3] = (e[3] || e[4] || e[5] || "").replace(ia, si)), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4);
                },
                CHILD: function (e) {
                    return (
                        (e[1] = e[1].toLowerCase()),
                        "nth" === e[1].slice(0, 3) ? (e[3] || aa.error(e[0]), (e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3]))), (e[5] = +(e[7] + e[8] || "odd" === e[3]))) : e[3] && aa.error(e[0]),
                        e
                    );
                },
                PSEUDO: function (e) {
                    var t,
                        n = !e[6] && e[2];
                    return Qi.CHILD.test(e[0])
                        ? null
                        : (e[3] ? (e[2] = e[4] || e[5] || "") : n && Gi.test(n) && (t = mi(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))), e.slice(0, 3));
                },
            },
            filter: {
                TAG: function (e) {
                    var t = e.replace(ia, si).toLowerCase();
                    return "*" === e
                        ? function () {
                              return !0;
                          }
                        : function (e) {
                              return e.nodeName && e.nodeName.toLowerCase() === t;
                          };
                },
                CLASS: function (e) {
                    var t = Di[e + " "];
                    return (
                        t ||
                        ((t = new RegExp("(^|" + ji + ")" + e + "(" + ji + "|$)")) &&
                            Di(e, function (e) {
                                return t.test(("string" == typeof e.className && e.className) || (typeof e.getAttribute != Pi && e.getAttribute("class")) || "");
                            }))
                    );
                },
                ATTR: function (n, r, o) {
                    return function (e) {
                        var t = aa.attr(e, n);
                        return null == t
                            ? "!=" === r
                            : !r ||
                                  ((t += ""),
                                  "=" === r
                                      ? t === o
                                      : "!=" === r
                                      ? t !== o
                                      : "^=" === r
                                      ? o && 0 === t.indexOf(o)
                                      : "*=" === r
                                      ? o && -1 < t.indexOf(o)
                                      : "$=" === r
                                      ? o && t.slice(-o.length) === o
                                      : "~=" === r
                                      ? -1 < (" " + t + " ").indexOf(o)
                                      : "|=" === r && (t === o || t.slice(0, o.length + 1) === o + "-"));
                    };
                },
                CHILD: function (m, e, t, g, p) {
                    var h = "nth" !== m.slice(0, 3),
                        v = "last" !== m.slice(-4),
                        b = "of-type" === e;
                    return 1 === g && 0 === p
                        ? function (e) {
                              return !!e.parentNode;
                          }
                        : function (e, t, n) {
                              var r,
                                  o,
                                  i,
                                  a,
                                  u,
                                  s,
                                  c = h != v ? "nextSibling" : "previousSibling",
                                  l = e.parentNode,
                                  f = b && e.nodeName.toLowerCase(),
                                  d = !n && !b;
                              if (l) {
                                  if (h) {
                                      for (; c; ) {
                                          for (i = e; (i = i[c]); ) if (b ? i.nodeName.toLowerCase() === f : 1 === i.nodeType) return !1;
                                          s = c = "only" === m && !s && "nextSibling";
                                      }
                                      return !0;
                                  }
                                  if (((s = [v ? l.firstChild : l.lastChild]), v && d)) {
                                      for (u = (r = (o = l[ki] || (l[ki] = {}))[m] || [])[0] === Ai && r[1], a = r[0] === Ai && r[2], i = u && l.childNodes[u]; (i = (++u && i && i[c]) || (a = u = 0) || s.pop()); )
                                          if (1 === i.nodeType && ++a && i === e) {
                                              o[m] = [Ai, u, a];
                                              break;
                                          }
                                  } else if (d && (r = (e[ki] || (e[ki] = {}))[m]) && r[0] === Ai) a = r[1];
                                  else for (; (i = (++u && i && i[c]) || (a = u = 0) || s.pop()) && ((b ? i.nodeName.toLowerCase() !== f : 1 !== i.nodeType) || !++a || (d && ((i[ki] || (i[ki] = {}))[m] = [Ai, a]), i !== e)); );
                                  return (a -= p) === g || (a % g == 0 && 0 <= a / g);
                              }
                          };
                },
                PSEUDO: function (e, i) {
                    var t,
                        a = li.pseudos[e] || li.setFilters[e.toLowerCase()] || aa.error("unsupported pseudo: " + e);
                    return a[ki]
                        ? a(i)
                        : 1 < a.length
                        ? ((t = [e, e, "", i]),
                          li.setFilters.hasOwnProperty(e.toLowerCase())
                              ? sa(function (e, t) {
                                    for (var n, r = a(e, i), o = r.length; o--; ) e[(n = Hi.call(e, r[o]))] = !(t[n] = r[o]);
                                })
                              : function (e) {
                                    return a(e, 0, t);
                                })
                        : a;
                },
            },
            pseudos: {
                not: sa(function (e) {
                    var r = [],
                        o = [],
                        u = gi(e.replace(Wi, "$1"));
                    return u[ki]
                        ? sa(function (e, t, n, r) {
                              for (var o, i = u(e, null, r, []), a = e.length; a--; ) (o = i[a]) && (e[a] = !(t[a] = o));
                          })
                        : function (e, t, n) {
                              return (r[0] = e), u(r, null, n, o), (r[0] = null), !o.pop();
                          };
                }),
                has: sa(function (t) {
                    return function (e) {
                        return 0 < aa(t, e).length;
                    };
                }),
                contains: sa(function (t) {
                    return (
                        (t = t.replace(ia, si)),
                        function (e) {
                            return -1 < (e.textContent || e.innerText || fi(e)).indexOf(t);
                        }
                    );
                }),
                lang: sa(function (n) {
                    return (
                        Ji.test(n || "") || aa.error("unsupported lang: " + n),
                        (n = n.replace(ia, si).toLowerCase()),
                        function (e) {
                            var t;
                            do {
                                if ((t = wi ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang"))) return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-");
                            } while ((e = e.parentNode) && 1 === e.nodeType);
                            return !1;
                        }
                    );
                }),
                target: function (e) {
                    var t = window.location && window.location.hash;
                    return t && t.slice(1) === e.id;
                },
                root: function (e) {
                    return e === xi;
                },
                focus: function (e) {
                    return e === Ci.activeElement && (!Ci.hasFocus || Ci.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
                },
                enabled: function (e) {
                    return !1 === e.disabled;
                },
                disabled: function (e) {
                    return !0 === e.disabled;
                },
                checked: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return ("input" === t && !!e.checked) || ("option" === t && !!e.selected);
                },
                selected: function (e) {
                    return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected;
                },
                empty: function (e) {
                    for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return !1;
                    return !0;
                },
                parent: function (e) {
                    return !li.pseudos.empty(e);
                },
                header: function (e) {
                    return ea.test(e.nodeName);
                },
                input: function (e) {
                    return Zi.test(e.nodeName);
                },
                button: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return ("input" === t && "button" === e.type) || "button" === t;
                },
                text: function (e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase());
                },
                first: la(function () {
                    return [0];
                }),
                last: la(function (e, t) {
                    return [t - 1];
                }),
                eq: la(function (e, t, n) {
                    return [n < 0 ? n + t : n];
                }),
                even: la(function (e, t) {
                    for (var n = 0; n < t; n += 2) e.push(n);
                    return e;
                }),
                odd: la(function (e, t) {
                    for (var n = 1; n < t; n += 2) e.push(n);
                    return e;
                }),
                lt: la(function (e, t, n) {
                    for (var r = n < 0 ? n + t : n; 0 <= --r; ) e.push(r);
                    return e;
                }),
                gt: la(function (e, t, n) {
                    for (var r = n < 0 ? n + t : n; ++r < t; ) e.push(r);
                    return e;
                }),
            },
        }).pseudos.nth = li.pseudos.eq),
        Y(["radio", "checkbox", "file", "password", "image"], function (e) {
            var t;
            li.pseudos[e] =
                ((t = e),
                function (e) {
                    return "input" === e.nodeName.toLowerCase() && e.type === t;
                });
        }),
        Y(["submit", "reset"], function (e) {
            var n;
            li.pseudos[e] =
                ((n = e),
                function (e) {
                    var t = e.nodeName.toLowerCase();
                    return ("input" === t || "button" === t) && e.type === n;
                });
        }),
        (da.prototype = li.filters = li.pseudos),
        (li.setFilters = new da()),
        (mi = aa.tokenize = function (e, t) {
            var n,
                r,
                o,
                i,
                a,
                u,
                s,
                c = Ti[e + " "];
            if (c) return t ? 0 : c.slice(0);
            for (a = e, u = [], s = li.preFilter; a; ) {
                for (i in ((n && !(r = Ki.exec(a))) || (r && (a = a.slice(r[0].length) || a), u.push((o = []))),
                (n = !1),
                (r = Xi.exec(a)) && ((n = r.shift()), o.push({ value: n, type: r[0].replace(Wi, " ") }), (a = a.slice(n.length))),
                li.filter))
                    li.filter.hasOwnProperty(i) && (!(r = Qi[i].exec(a)) || (s[i] && !(r = s[i](r))) || ((n = r.shift()), o.push({ value: n, type: i, matches: r }), (a = a.slice(n.length))));
                if (!n) break;
            }
            return t ? a.length : a ? aa.error(e) : Ti(e, u).slice(0);
        }),
        (gi = aa.compile = function (e, t) {
            var n,
                h,
                v,
                b,
                y,
                r = [],
                o = [],
                i = Oi[e + " "];
            if (!i) {
                for (n = (t = t || mi(e)).length; n--; )
                    ((i = (function e(t) {
                        for (
                            var o,
                                n,
                                r,
                                i = t.length,
                                a = li.relative[t[0].type],
                                u = a || li.relative[" "],
                                s = a ? 1 : 0,
                                c = ga(
                                    function (e) {
                                        return e === o;
                                    },
                                    u,
                                    !0
                                ),
                                l = ga(
                                    function (e) {
                                        return -1 < Hi.call(o, e);
                                    },
                                    u,
                                    !0
                                ),
                                f = [
                                    function (e, t, n) {
                                        var r = (!a && (n || t !== hi)) || ((o = t).nodeType ? c : l)(e, t, n);
                                        return (o = null), r;
                                    },
                                ];
                            s < i;
                            s++
                        )
                            if ((n = li.relative[t[s].type])) f = [ga(pa(f), n)];
                            else {
                                if ((n = li.filter[t[s].type].apply(null, t[s].matches))[ki]) {
                                    for (r = ++s; r < i && !li.relative[t[r].type]; r++);
                                    return (function e(m, g, p, h, v, t) {
                                        return (
                                            h && !h[ki] && (h = e(h)),
                                            v && !v[ki] && (v = e(v, t)),
                                            sa(function (e, t, n, r) {
                                                var o,
                                                    i,
                                                    a,
                                                    u = [],
                                                    s = [],
                                                    c = t.length,
                                                    l =
                                                        e ||
                                                        (function (e, t, n) {
                                                            for (var r = 0, o = t.length; r < o; r++) aa(e, t[r], n);
                                                            return n;
                                                        })(g || "*", n.nodeType ? [n] : n, []),
                                                    f = !m || (!e && g) ? l : ha(l, u, m, n, r),
                                                    d = p ? (v || (e ? m : c || h) ? [] : t) : f;
                                                if ((p && p(f, d, n, r), h)) for (o = ha(d, s), h(o, [], n, r), i = o.length; i--; ) (a = o[i]) && (d[s[i]] = !(f[s[i]] = a));
                                                if (e) {
                                                    if (v || m) {
                                                        if (v) {
                                                            for (o = [], i = d.length; i--; ) (a = d[i]) && o.push((f[i] = a));
                                                            v(null, (d = []), o, r);
                                                        }
                                                        for (i = d.length; i--; ) (a = d[i]) && -1 < (o = v ? Hi.call(e, a) : u[i]) && (e[o] = !(t[o] = a));
                                                    }
                                                } else (d = ha(d === t ? d.splice(c, d.length) : d)), v ? v(null, t, d, r) : Ui.apply(t, d);
                                            })
                                        );
                                    })(1 < s && pa(f), 1 < s && ma(t.slice(0, s - 1).concat({ value: " " === t[s - 2].type ? "*" : "" })).replace(Wi, "$1"), n, s < r && e(t.slice(s, r)), r < i && e((t = t.slice(r))), r < i && ma(t));
                                }
                                f.push(n);
                            }
                        return pa(f);
                    })(t[n]))[ki]
                        ? r
                        : o
                    ).push(i);
                (i = Oi(e, ((h = o), (b = 0 < (v = r).length), (y = 0 < h.length), b ? sa(a) : a))).selector = e;
            }
            function a(e, t, n, r, o) {
                var i,
                    a,
                    u,
                    s = 0,
                    c = "0",
                    l = e && [],
                    f = [],
                    d = hi,
                    m = e || (y && li.find.TAG("*", o)),
                    g = (Ai += null == d ? 1 : Math.random() || 0.1),
                    p = m.length;
                for (o && (hi = t !== Ci && t); c !== p && null != (i = m[c]); c++) {
                    if (y && i) {
                        for (a = 0; (u = h[a++]); )
                            if (u(i, t, n)) {
                                r.push(i);
                                break;
                            }
                        o && (Ai = g);
                    }
                    b && ((i = !u && i) && s--, e && l.push(i));
                }
                if (((s += c), b && c !== s)) {
                    for (a = 0; (u = v[a++]); ) u(l, f, t, n);
                    if (e) {
                        if (0 < s) for (; c--; ) l[c] || f[c] || (f[c] = Mi.call(r));
                        f = ha(f);
                    }
                    Ui.apply(r, f), o && !e && 0 < f.length && 1 < s + v.length && aa.uniqueSort(r);
                }
                return o && ((Ai = g), (hi = d)), l;
            }
            return i;
        }),
        (pi = aa.select = function (e, t, n, r) {
            var o,
                i,
                a,
                u,
                s,
                c = "function" == typeof e && e,
                l = !r && mi((e = c.selector || e));
            if (((n = n || []), 1 === l.length)) {
                if (2 < (i = l[0] = l[0].slice(0)).length && "ID" === (a = i[0]).type && ci.getById && 9 === t.nodeType && wi && li.relative[i[1].type]) {
                    if (!(t = (li.find.ID(a.matches[0].replace(ia, si), t) || [])[0])) return n;
                    c && (t = t.parentNode), (e = e.slice(i.shift().value.length));
                }
                for (o = Qi.needsContext.test(e) ? 0 : i.length; o-- && ((a = i[o]), !li.relative[(u = a.type)]); )
                    if ((s = li.find[u]) && (r = s(a.matches[0].replace(ia, si), (ra.test(i[0].type) && fa(t.parentNode)) || t))) {
                        if ((i.splice(o, 1), !(e = r.length && ma(i)))) return Ui.apply(n, r), n;
                        break;
                    }
            }
            return (c || gi(e, l))(r, t, !wi, n, (ra.test(e) && fa(t.parentNode)) || t), n;
        }),
        (ci.sortStable = ki.split("").sort(Bi).join("") === ki),
        (ci.detectDuplicates = !!bi),
        yi(),
        (ci.sortDetached = !0);
    var ka = document,
        _a = Array.prototype.push,
        Aa = Array.prototype.slice,
        Ra = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,
        Da = ai.Event,
        Ta = Et.makeMap("children,contents,next,prev"),
        Oa = function (e, t, n, r) {
            var o;
            if (ba(t)) t = ya(t, za(e[0]));
            else if (t.length && !t.nodeType) {
                if (((t = Wa.makeArray(t)), r)) for (o = t.length - 1; 0 <= o; o--) Oa(e, t[o], n, r);
                else for (o = 0; o < t.length; o++) Oa(e, t[o], n, r);
                return e;
            }
            if (t.nodeType) for (o = e.length; o--; ) n.call(e[o], t);
            return e;
        },
        Ba = Et.makeMap("fillOpacity fontWeight lineHeight opacity orphans widows zIndex zoom", " "),
        Pa = Et.makeMap("checked compact declare defer disabled ismap multiple nohref noshade nowrap readonly selected", " "),
        La = { for: "htmlFor", class: "className", readonly: "readOnly" },
        Ia = { float: "cssFloat" },
        Ma = {},
        Fa = {},
        Ua = /^\s*|\s*$/g,
        za = function (e) {
            return e ? (9 === e.nodeType ? e : e.ownerDocument) : ka;
        };
    function Ha(e, t, n) {
        var r = [],
            o = e[t];
        for ("string" != typeof n && n instanceof Wa && (n = n[0]); o && 9 !== o.nodeType; ) {
            if (void 0 !== n) {
                if (o === n) break;
                if ("string" == typeof n && Wa(o).is(n)) break;
            }
            1 === o.nodeType && r.push(o), (o = o[t]);
        }
        return r;
    }
    function ja(e, t, n, r) {
        var o = [];
        for (r instanceof Wa && (r = r[0]); e; e = e[t])
            if (!n || e.nodeType === n) {
                if (void 0 !== r) {
                    if (e === r) break;
                    if ("string" == typeof r && Wa(e).is(r)) break;
                }
                o.push(e);
            }
        return o;
    }
    function Va(e, t, n) {
        for (e = e[t]; e; e = e[t]) if (e.nodeType === n) return e;
        return null;
    }
    function qa(e, t) {
        var n = t.attr("style"),
            r = e.serialize(e.parse(n), t[0].nodeName) || null;
        t.attr("data-mce-style", r);
    }
    function $a(e, t) {
        var n,
            r,
            o = 0;
        if (e) for (n = e.nodeType, e = e.previousSibling; e; e = e.previousSibling) (r = e.nodeType), (!t || 3 !== r || (r !== n && e.nodeValue.length)) && (o++, (n = r));
        return o;
    }
    (wa.fn = wa.prototype = {
        constructor: wa,
        selector: "",
        context: null,
        length: 0,
        init: function (e, t) {
            var n,
                r,
                o = this;
            if (!e) return o;
            if (e.nodeType) return (o.context = o[0] = e), (o.length = 1), o;
            if (t && t.nodeType) o.context = t;
            else {
                if (t) return Wa(e).attr(t);
                o.context = t = document;
            }
            if (ba(e)) {
                if (!(n = "<" === (o.selector = e).charAt(0) && ">" === e.charAt(e.length - 1) && 3 <= e.length ? [null, e, null] : Ra.exec(e))) return Wa(t).find(e);
                if (n[1]) for (r = ya(e, za(t)).firstChild; r; ) _a.call(o, r), (r = r.nextSibling);
                else {
                    if (!(r = za(t).getElementById(n[2]))) return o;
                    if (r.id !== n[2]) return o.find(e);
                    (o.length = 1), (o[0] = r);
                }
            } else this.add(e, !1);
            return o;
        },
        toArray: function () {
            return Et.toArray(this);
        },
        add: function (e, t) {
            var n, r;
            if (ba(e)) return this.add(Wa(e));
            if (!1 !== t) for (n = Wa.unique(this.toArray().concat(Wa.makeArray(e))), this.length = n.length, r = 0; r < n.length; r++) this[r] = n[r];
            else _a.apply(this, Wa.makeArray(e));
            return this;
        },
        attr: function (t, n) {
            var e,
                r = this;
            if ("object" == typeof t)
                Ea(t, function (e, t) {
                    r.attr(e, t);
                });
            else {
                if (!va(n)) {
                    if (r[0] && 1 === r[0].nodeType) {
                        if ((e = Ma[t]) && e.get) return e.get(r[0], t);
                        if (Pa[t]) return r.prop(t) ? t : void 0;
                        null === (n = r[0].getAttribute(t, 2)) && (n = void 0);
                    }
                    return n;
                }
                this.each(function () {
                    var e;
                    1 === this.nodeType && ((e = Ma[t]) && e.set ? e.set(this, n) : null === n ? this.removeAttribute(t, 2) : this.setAttribute(t, n, 2));
                });
            }
            return r;
        },
        removeAttr: function (e) {
            return this.attr(e, null);
        },
        prop: function (e, t) {
            var n = this;
            if ("object" == typeof (e = La[e] || e))
                Ea(e, function (e, t) {
                    n.prop(e, t);
                });
            else {
                if (!va(t)) return n[0] && n[0].nodeType && e in n[0] ? n[0][e] : t;
                this.each(function () {
                    1 === this.nodeType && (this[e] = t);
                });
            }
            return n;
        },
        css: function (t, n) {
            function e(e) {
                return e.replace(/-(\D)/g, function (e, t) {
                    return t.toUpperCase();
                });
            }
            function r(e) {
                return e.replace(/[A-Z]/g, function (e) {
                    return "-" + e;
                });
            }
            var o,
                i,
                a = this;
            if ("object" == typeof t)
                Ea(t, function (e, t) {
                    a.css(e, t);
                });
            else if (va(n))
                (t = e(t)),
                    "number" != typeof n || Ba[t] || (n = n.toString() + "px"),
                    a.each(function () {
                        var e = this.style;
                        if ((i = Fa[t]) && i.set) i.set(this, n);
                        else {
                            try {
                                this.style[Ia[t] || t] = n;
                            } catch (e) {}
                            (null !== n && "" !== n) || (e.removeProperty ? e.removeProperty(r(t)) : e.removeAttribute(t));
                        }
                    });
            else {
                if (((o = a[0]), (i = Fa[t]) && i.get)) return i.get(o);
                if (!o.ownerDocument.defaultView) return o.currentStyle ? o.currentStyle[e(t)] : "";
                try {
                    return o.ownerDocument.defaultView.getComputedStyle(o, null).getPropertyValue(r(t));
                } catch (e) {
                    return;
                }
            }
            return a;
        },
        remove: function () {
            for (var e, t = this.length; t--; ) (e = this[t]), Da.clean(e), e.parentNode && e.parentNode.removeChild(e);
            return this;
        },
        empty: function () {
            for (var e, t = this.length; t--; ) for (e = this[t]; e.firstChild; ) e.removeChild(e.firstChild);
            return this;
        },
        html: function (t) {
            var n;
            if (va(t)) {
                n = this.length;
                try {
                    for (; n--; ) this[n].innerHTML = t;
                } catch (e) {
                    Wa(this[n]).empty().append(t);
                }
                return this;
            }
            return this[0] ? this[0].innerHTML : "";
        },
        text: function (e) {
            var t;
            if (va(e)) {
                for (t = this.length; t--; ) "innerText" in this[t] ? (this[t].innerText = e) : (this[0].textContent = e);
                return this;
            }
            return this[0] ? this[0].innerText || this[0].textContent : "";
        },
        append: function () {
            return Oa(this, arguments, function (e) {
                (1 === this.nodeType || (this.host && 1 === this.host.nodeType)) && this.appendChild(e);
            });
        },
        prepend: function () {
            return Oa(
                this,
                arguments,
                function (e) {
                    (1 === this.nodeType || (this.host && 1 === this.host.nodeType)) && this.insertBefore(e, this.firstChild);
                },
                !0
            );
        },
        before: function () {
            return this[0] && this[0].parentNode
                ? Oa(this, arguments, function (e) {
                      this.parentNode.insertBefore(e, this);
                  })
                : this;
        },
        after: function () {
            return this[0] && this[0].parentNode
                ? Oa(
                      this,
                      arguments,
                      function (e) {
                          this.parentNode.insertBefore(e, this.nextSibling);
                      },
                      !0
                  )
                : this;
        },
        appendTo: function (e) {
            return Wa(e).append(this), this;
        },
        prependTo: function (e) {
            return Wa(e).prepend(this), this;
        },
        replaceWith: function (e) {
            return this.before(e).remove();
        },
        wrap: function (e) {
            return xa(this, e);
        },
        wrapAll: function (e) {
            return xa(this, e, !0);
        },
        wrapInner: function (e) {
            return (
                this.each(function () {
                    Wa(this).contents().wrapAll(e);
                }),
                this
            );
        },
        unwrap: function () {
            return this.parent().each(function () {
                Wa(this).replaceWith(this.childNodes);
            });
        },
        clone: function () {
            var e = [];
            return (
                this.each(function () {
                    e.push(this.cloneNode(!0));
                }),
                Wa(e)
            );
        },
        addClass: function (e) {
            return this.toggleClass(e, !0);
        },
        removeClass: function (e) {
            return this.toggleClass(e, !1);
        },
        toggleClass: function (o, i) {
            var e = this;
            return (
                "string" != typeof o ||
                    (-1 !== o.indexOf(" ")
                        ? Ea(o.split(" "), function () {
                              e.toggleClass(this, i);
                          })
                        : e.each(function (e, t) {
                              var n,
                                  r = Ca(t, o);
                              r !== i && ((n = t.className), r ? (t.className = Sa((" " + n + " ").replace(" " + o + " ", " "))) : (t.className += n ? " " + o : o));
                          })),
                e
            );
        },
        hasClass: function (e) {
            return Ca(this[0], e);
        },
        each: function (e) {
            return Ea(this, e);
        },
        on: function (e, t) {
            return this.each(function () {
                Da.bind(this, e, t);
            });
        },
        off: function (e, t) {
            return this.each(function () {
                Da.unbind(this, e, t);
            });
        },
        trigger: function (e) {
            return this.each(function () {
                "object" == typeof e ? Da.fire(this, e.type, e) : Da.fire(this, e);
            });
        },
        show: function () {
            return this.css("display", "");
        },
        hide: function () {
            return this.css("display", "none");
        },
        slice: function () {
            return Wa(Aa.apply(this, arguments));
        },
        eq: function (e) {
            return -1 === e ? this.slice(e) : this.slice(e, +e + 1);
        },
        first: function () {
            return this.eq(0);
        },
        last: function () {
            return this.eq(-1);
        },
        find: function (e) {
            for (var t = [], n = 0, r = this.length; n < r; n++) Wa.find(e, this[n], t);
            return Wa(t);
        },
        filter: function (n) {
            return Wa(
                "function" == typeof n
                    ? Na(this.toArray(), function (e, t) {
                          return n(t, e);
                      })
                    : Wa.filter(n, this.toArray())
            );
        },
        closest: function (n) {
            var r = [];
            return (
                n instanceof Wa && (n = n[0]),
                this.each(function (e, t) {
                    for (; t; ) {
                        if ("string" == typeof n && Wa(t).is(n)) {
                            r.push(t);
                            break;
                        }
                        if (t === n) {
                            r.push(t);
                            break;
                        }
                        t = t.parentNode;
                    }
                }),
                Wa(r)
            );
        },
        offset: function (e) {
            var t,
                n,
                r,
                o,
                i = 0,
                a = 0;
            return e
                ? this.css(e)
                : ((t = this[0]) &&
                      ((r = (n = t.ownerDocument).documentElement),
                      t.getBoundingClientRect && ((i = (o = t.getBoundingClientRect()).left + (r.scrollLeft || n.body.scrollLeft) - r.clientLeft), (a = o.top + (r.scrollTop || n.body.scrollTop) - r.clientTop))),
                  { left: i, top: a });
        },
        push: _a,
        sort: Array.prototype.sort,
        splice: Array.prototype.splice,
    }),
        Et.extend(wa, {
            extend: Et.extend,
            makeArray: function (e) {
                return (e && e === e.window) || e.nodeType ? [e] : Et.toArray(e);
            },
            inArray: function (e, t) {
                var n;
                if (t.indexOf) return t.indexOf(e);
                for (n = t.length; n--; ) if (t[n] === e) return n;
                return -1;
            },
            isArray: Et.isArray,
            each: Ea,
            trim: Sa,
            grep: Na,
            find: aa,
            expr: aa.selectors,
            unique: aa.uniqueSort,
            text: aa.getText,
            contains: aa.contains,
            filter: function (e, t, n) {
                var r = t.length;
                for (n && (e = ":not(" + e + ")"); r--; ) 1 !== t[r].nodeType && t.splice(r, 1);
                return 1 === t.length ? (Wa.find.matchesSelector(t[0], e) ? [t[0]] : []) : Wa.find.matches(e, t);
            },
        }),
        Ea(
            {
                parent: function (e) {
                    var t = e.parentNode;
                    return t && 11 !== t.nodeType ? t : null;
                },
                parents: function (e) {
                    return Ha(e, "parentNode");
                },
                next: function (e) {
                    return Va(e, "nextSibling", 1);
                },
                prev: function (e) {
                    return Va(e, "previousSibling", 1);
                },
                children: function (e) {
                    return ja(e.firstChild, "nextSibling", 1);
                },
                contents: function (e) {
                    return Et.toArray(("iframe" === e.nodeName ? e.contentDocument || e.contentWindow.document : e).childNodes);
                },
            },
            function (r, o) {
                wa.fn[r] = function (t) {
                    var n = [];
                    this.each(function () {
                        var e = o.call(n, this, t, n);
                        e && (Wa.isArray(e) ? n.push.apply(n, e) : n.push(e));
                    }),
                        1 < this.length && (Ta[r] || (n = Wa.unique(n)), 0 === r.indexOf("parents") && (n = n.reverse()));
                    var e = Wa(n);
                    return t ? e.filter(t) : e;
                };
            }
        ),
        Ea(
            {
                parentsUntil: function (e, t) {
                    return Ha(e, "parentNode", t);
                },
                nextUntil: function (e, t) {
                    return ja(e, "nextSibling", 1, t).slice(1);
                },
                prevUntil: function (e, t) {
                    return ja(e, "previousSibling", 1, t).slice(1);
                },
            },
            function (o, i) {
                wa.fn[o] = function (t, e) {
                    var n = [];
                    this.each(function () {
                        var e = i.call(n, this, t, n);
                        e && (Wa.isArray(e) ? n.push.apply(n, e) : n.push(e));
                    }),
                        1 < this.length && ((n = Wa.unique(n)), (0 !== o.indexOf("parents") && "prevUntil" !== o) || (n = n.reverse()));
                    var r = Wa(n);
                    return e ? r.filter(e) : r;
                };
            }
        ),
        (wa.fn.is = function (e) {
            return !!e && 0 < this.filter(e).length;
        }),
        (wa.fn.init.prototype = wa.fn),
        (wa.overrideDefaults = function (n) {
            var r,
                o = function (e, t) {
                    return (r = r || n()), 0 === arguments.length && (e = r.element), (t = t || r.context), new o.fn.init(e, t);
                };
            return Wa.extend(o, this), o;
        }),
        (wa.attrHooks = Ma),
        (wa.cssHooks = Fa);
    var Wa = wa,
        Ka = Et.each,
        Xa = Et.grep,
        Ya = xt.ie,
        Ga = /^([a-z0-9],?)+$/i,
        Ja = function (a, u) {
            function s(e) {
                return e && a && X(e) ? a.getElementById(e) : e;
            }
            function c(e) {
                return H("string" == typeof e ? s(e) : e);
            }
            function r(e, t, n) {
                var r,
                    o,
                    i = c(e);
                return void 0 === (o = i.length ? ((r = W[t]) && r.get ? r.get(i, t) : i.attr(t)) : o) ? n || "" : o;
            }
            function o(e) {
                var t = s(e);
                return t ? t.attributes : [];
            }
            function i(e, t, n) {
                "" === n && (n = null);
                var r,
                    o = c(e),
                    i = o.attr(t);
                o.length && ((r = W[t]) && r.set ? r.set(o, n, t) : o.attr(t, n), i !== n && u.onSetAttrib && u.onSetAttrib({ attrElm: o, attrName: t, attrValue: n }));
            }
            function l() {
                return u.root_element || a.body;
            }
            function f(e, t) {
                return (function (e, t, n) {
                    var r,
                        o = 0,
                        i = 0,
                        a = e.ownerDocument;
                    if (((n = n || e), t)) {
                        if (n === e && t.getBoundingClientRect && "static" === xn(Nt.fromDom(e), "position")) {
                            var u = t.getBoundingClientRect();
                            return { x: (o = u.left + (a.documentElement.scrollLeft || e.scrollLeft) - a.documentElement.clientLeft), y: (i = u.top + (a.documentElement.scrollTop || e.scrollTop) - a.documentElement.clientTop) };
                        }
                        for (var s = t; s && s !== n && s.nodeType && !Nn(s, n); ) {
                            var c = s;
                            (o += c.offsetLeft || 0), (i += c.offsetTop || 0), (s = c.offsetParent);
                        }
                        for (s = t.parentNode; s && s !== n && s.nodeType && !Nn(s, n); ) (o -= s.scrollLeft || 0), (i -= s.scrollTop || 0), (s = s.parentNode);
                        i +=
                            ((r = Nt.fromDom(t)),
                            Zn.isFirefox() && "table" === kt(r)
                                ? En(Dn(r))
                                      .filter(function (e) {
                                          return "caption" === kt(e);
                                      })
                                      .bind(function (o) {
                                          return En(It(o)).map(function (e) {
                                              var t = e.dom.offsetTop,
                                                  n = o.dom.offsetTop,
                                                  r = o.dom.offsetHeight;
                                              return t <= n ? -r : 0;
                                          });
                                      })
                                      .getOr(0)
                                : 0);
                    }
                    return { x: o, y: i };
                })(a.body, s(e), t);
            }
            function d(e, t, n) {
                var r = c(e);
                return n
                    ? r.css(t)
                    : ("float" ===
                          (t = t.replace(/-(\D)/g, function (e, t) {
                              return t.toUpperCase();
                          })) && (t = xt.browser.isIE() ? "styleFloat" : "cssFloat"),
                      r[0] && r[0].style ? r[0].style[t] : void 0);
            }
            function m(e) {
                var t = d((e = s(e)), "width"),
                    n = d(e, "height");
                return -1 === t.indexOf("px") && (t = 0), -1 === n.indexOf("px") && (n = 0), { w: parseInt(t, 10) || e.offsetWidth || e.clientWidth, h: parseInt(n, 10) || e.offsetHeight || e.clientHeight };
            }
            function g(e, t) {
                if (!e) return !1;
                if (!Array.isArray(e)) {
                    if ("*" === t) return 1 === e.nodeType;
                    if (Ga.test(t)) {
                        for (var n = t.toLowerCase().split(/,/), r = e.nodeName.toLowerCase(), o = n.length - 1; 0 <= o; o--) if (n[o] === r) return !0;
                        return !1;
                    }
                    if (e.nodeType && 1 !== e.nodeType) return !1;
                }
                var i = Array.isArray(e) ? e : [e];
                return 0 < aa(t, i[0].ownerDocument || i[0], null, i).length;
            }
            function p(e, t, n, r) {
                var o,
                    i = [],
                    a = s(e);
                for (
                    r = void 0 === r,
                        n = n || ("BODY" !== l().nodeName ? l().parentNode : null),
                        Et.is(t, "string") &&
                            (t =
                                "*" === (o = t)
                                    ? function (e) {
                                          return 1 === e.nodeType;
                                      }
                                    : function (e) {
                                          return g(e, o);
                                      });
                    a && !(a === n || K(a.nodeType) || qn(a) || $n(a));

                ) {
                    if (!t || ("function" == typeof t && t(a))) {
                        if (!r) return [a];
                        i.push(a);
                    }
                    a = a.parentNode;
                }
                return r ? i : null;
            }
            function n(e, t, n) {
                var r = t;
                if (e)
                    for (
                        "string" == typeof t &&
                            (r = function (e) {
                                return g(e, t);
                            }),
                            e = e[n];
                        e;
                        e = e[n]
                    )
                        if ("function" == typeof r && r(e)) return e;
                return null;
            }
            function h(e, n, r) {
                var o,
                    t = "string" == typeof e ? s(e) : e;
                return (
                    !!t &&
                    (Et.isArray(t) && (t.length || 0 === t.length)
                        ? ((o = []),
                          Ka(t, function (e, t) {
                              e && o.push(n.call(r, "string" == typeof e ? s(e) : e, t));
                          }),
                          o)
                        : n.call(r || this, t))
                );
            }
            function v(e, t) {
                c(e).each(function (e, n) {
                    Ka(t, function (e, t) {
                        i(n, t, e);
                    });
                });
            }
            function b(e, n) {
                var t = c(e);
                Ya
                    ? t.each(function (e, t) {
                          if (!1 !== t.canHaveHTML) {
                              for (; t.firstChild; ) t.removeChild(t.firstChild);
                              try {
                                  (t.innerHTML = "<br>" + n), t.removeChild(t.firstChild);
                              } catch (e) {
                                  Wa("<div></div>")
                                      .html("<br>" + n)
                                      .contents()
                                      .slice(1)
                                      .appendTo(t);
                              }
                              return n;
                          }
                      })
                    : t.html(n);
            }
            function y(e, n, r, o, i) {
                return h(e, function (e) {
                    var t = "string" == typeof n ? a.createElement(n) : n;
                    return v(t, r), o && ("string" != typeof o && o.nodeType ? t.appendChild(o) : "string" == typeof o && b(t, o)), i ? t : e.appendChild(t);
                });
            }
            function C(e, t, n) {
                return y(a.createElement(e), e, t, n, !0);
            }
            function x(e, t) {
                var n = c(e);
                return (
                    (t
                        ? n.each(function () {
                              for (var e; (e = this.firstChild); ) 3 === e.nodeType && 0 === e.data.length ? this.removeChild(e) : this.parentNode.insertBefore(e, this);
                          })
                        : n
                    ).remove(),
                    1 < n.length ? n.toArray() : n[0]
                );
            }
            function w(e, t, n) {
                c(e)
                    .toggleClass(t, n)
                    .each(function () {
                        "" === this.className && Wa(this).attr("class", null);
                    });
            }
            function S(t, e, n) {
                return h(e, function (e) {
                    return (
                        Et.is(e, "array") && (t = t.cloneNode(!0)),
                        n &&
                            Ka(Xa(e.childNodes), function (e) {
                                t.appendChild(e);
                            }),
                        e.parentNode.replaceChild(t, e)
                    );
                });
            }
            function E(e) {
                if (zn(e)) {
                    var t = "a" === e.nodeName.toLowerCase() && !r(e, "href") && r(e, "id");
                    return r(e, "name") || r(e, "data-mce-bookmark") || t ? 1 : void 0;
                }
            }
            function N() {
                return a.createRange();
            }
            function k(e) {
                if (e && zn(e)) {
                    var t = e.getAttribute("data-mce-contenteditable");
                    return t && "inherit" !== t ? t : "inherit" !== e.contentEditable ? e.contentEditable : null;
                }
                return null;
            }
            void 0 === u && (u = {});
            var _,
                A,
                R,
                D,
                e,
                t,
                T = {},
                O = window,
                B = {},
                P = 0,
                L = Ar.forElement(Nt.fromDom(a), { contentCssCors: u.contentCssCors, referrerPolicy: u.referrerPolicy }),
                I = [],
                M = u.schema || to({}),
                F = ro({ url_converter: u.url_converter, url_converter_scope: u.url_converter_scope }, u.schema),
                U = u.ownEvents ? new ai() : ai.Event,
                z = M.getBlockElements(),
                H = Wa.overrideDefaults(function () {
                    return { context: a, element: $.getRoot() };
                }),
                j = Go.encodeAllRaw,
                V = function (e, t, n, r) {
                    if (Et.isArray(e)) {
                        for (var o = e.length, i = []; o--; ) i[o] = V(e[o], t, n, r);
                        return i;
                    }
                    return !u.collect || (e !== a && e !== O) || I.push([e, t, n, r]), U.bind(e, t, n, r || $);
                },
                q = function (e, t, n) {
                    if (Et.isArray(e)) {
                        for (var r = e.length, o = []; r--; ) o[r] = q(e[r], t, n);
                        return o;
                    }
                    if (0 < I.length && (e === a || e === O))
                        for (r = I.length; r--; ) {
                            var i = I[r];
                            e !== i[0] || (t && t !== i[1]) || (n && n !== i[2]) || U.unbind(i[0], i[1], i[2]);
                        }
                    return U.unbind(e, t, n);
                },
                $ = {
                    doc: a,
                    settings: u,
                    win: O,
                    files: B,
                    stdMode: !0,
                    boxModel: !0,
                    styleSheetLoader: L,
                    boundEvents: I,
                    styles: F,
                    schema: M,
                    events: U,
                    isBlock: function (e) {
                        if ("string" == typeof e) return !!z[e];
                        if (e) {
                            var t = e.nodeType;
                            if (t) return !(1 !== t || !z[e.nodeName]);
                        }
                        return !1;
                    },
                    $: H,
                    $$: c,
                    root: null,
                    clone: function (t, e) {
                        if (!Ya || 1 !== t.nodeType || e) return t.cloneNode(e);
                        var n = a.createElement(t.nodeName);
                        return (
                            Ka(o(t), function (e) {
                                i(n, e.nodeName, r(t, e.nodeName));
                            }),
                            n
                        );
                    },
                    getRoot: l,
                    getViewPort: function (e) {
                        var t = tn(e);
                        return { x: t.x, y: t.y, w: t.width, h: t.height };
                    },
                    getRect: function (e) {
                        var t = f((e = s(e))),
                            n = m(e);
                        return { x: t.x, y: t.y, w: n.w, h: n.h };
                    },
                    getSize: m,
                    getParent: function (e, t, n) {
                        var r = p(e, t, n, !1);
                        return r && 0 < r.length ? r[0] : null;
                    },
                    getParents: p,
                    get: s,
                    getNext: function (e, t) {
                        return n(e, t, "nextSibling");
                    },
                    getPrev: function (e, t) {
                        return n(e, t, "previousSibling");
                    },
                    select: function (e, t) {
                        return aa(e, s(t) || u.root_element || a, []);
                    },
                    is: g,
                    add: y,
                    create: C,
                    createHTML: function (e, t, n) {
                        var r,
                            o = "";
                        for (r in ((o += "<" + e), t)) se(t, r) && (o += " " + r + '="' + j(t[r]) + '"');
                        return void 0 !== n ? o + ">" + n + "</" + e + ">" : o + " />";
                    },
                    createFragment: function (e) {
                        var t,
                            n = a.createElement("div"),
                            r = a.createDocumentFragment();
                        for (r.appendChild(n), e && (n.innerHTML = e); (t = n.firstChild); ) r.appendChild(t);
                        return r.removeChild(n), r;
                    },
                    remove: x,
                    setStyle: function (e, t, n) {
                        var r = X(t) ? c(e).css(t, n) : c(e).css(t);
                        u.update_styles && qa(F, r);
                    },
                    getStyle: d,
                    setStyles: function (e, t) {
                        var n = c(e).css(t);
                        u.update_styles && qa(F, n);
                    },
                    removeAllAttribs: function (e) {
                        return h(e, function (e) {
                            for (var t = e.attributes, n = t.length - 1; 0 <= n; n--) e.removeAttributeNode(t.item(n));
                        });
                    },
                    setAttrib: i,
                    setAttribs: v,
                    getAttrib: r,
                    getPos: f,
                    parseStyle: function (e) {
                        return F.parse(e);
                    },
                    serializeStyle: function (e, t) {
                        return F.serialize(e, t);
                    },
                    addStyle: function (e) {
                        var t, n;
                        if ($ !== Ja.DOM && a === document) {
                            if (T[e]) return;
                            T[e] = !0;
                        }
                        (n = a.getElementById("mceDefaultStyles")) ||
                            (((n = a.createElement("style")).id = "mceDefaultStyles"), (n.type = "text/css"), (t = a.getElementsByTagName("head")[0]).firstChild ? t.insertBefore(n, t.firstChild) : t.appendChild(n)),
                            n.styleSheet ? (n.styleSheet.cssText += e) : n.appendChild(a.createTextNode(e));
                    },
                    loadCSS: function (e) {
                        Y((e = e || "").split(","), function (e) {
                            (B[e] = !0), L.load(e, te);
                        });
                    },
                    addClass: function (e, t) {
                        c(e).addClass(t);
                    },
                    removeClass: function (e, t) {
                        w(e, t, !1);
                    },
                    hasClass: function (e, t) {
                        return c(e).hasClass(t);
                    },
                    toggleClass: w,
                    show: function (e) {
                        c(e).show();
                    },
                    hide: function (e) {
                        c(e).hide();
                    },
                    isHidden: function (e) {
                        return "none" === c(e).css("display");
                    },
                    uniqueId: function (e) {
                        return (e || "mce_") + P++;
                    },
                    setHTML: b,
                    getOuterHTML: function (e) {
                        var t = "string" == typeof e ? s(e) : e;
                        return zn(t) ? t.outerHTML : Wa("<div></div>").append(Wa(t).clone()).html();
                    },
                    setOuterHTML: function (e, t) {
                        c(e).each(function () {
                            try {
                                if ("outerHTML" in this) return void (this.outerHTML = t);
                            } catch (e) {}
                            x(Wa(this).html(t), !0);
                        });
                    },
                    decode: Go.decode,
                    encode: j,
                    insertAfter: function (e, t) {
                        var r = s(t);
                        return h(e, function (e) {
                            var t = r.parentNode,
                                n = r.nextSibling;
                            return n ? t.insertBefore(e, n) : t.appendChild(e), e;
                        });
                    },
                    replace: S,
                    rename: function (t, e) {
                        var n;
                        return (
                            t.nodeName !== e.toUpperCase() &&
                                ((n = C(e)),
                                Ka(o(t), function (e) {
                                    i(n, e.nodeName, r(t, e.nodeName));
                                }),
                                S(n, t, !0)),
                            n || t
                        );
                    },
                    findCommonAncestor: function (e, t) {
                        for (var n, r = e; r; ) {
                            for (n = t; n && r !== n; ) n = n.parentNode;
                            if (r === n) break;
                            r = r.parentNode;
                        }
                        return !r && e.ownerDocument ? e.ownerDocument.documentElement : r;
                    },
                    toHex: function (e) {
                        return F.toHex(Et.trim(e));
                    },
                    run: h,
                    getAttribs: o,
                    isEmpty: function (e, t) {
                        var n,
                            r,
                            o = 0;
                        if (E(e)) return !1;
                        if ((e = e.firstChild)) {
                            var i = new Rr(e, e.parentNode),
                                a = M ? M.getWhiteSpaceElements() : {};
                            t = t || (M ? M.getNonEmptyElements() : null);
                            do {
                                if (((n = e.nodeType), zn(e))) {
                                    var u = e.getAttribute("data-mce-bogus");
                                    if (u) {
                                        e = i.next("all" === u);
                                        continue;
                                    }
                                    if (((r = e.nodeName.toLowerCase()), t && t[r])) {
                                        if ("br" !== r) return !1;
                                        o++, (e = i.next());
                                        continue;
                                    }
                                    if (E(e)) return !1;
                                }
                                if (8 === n) return !1;
                                if (3 === n && !qr(e.nodeValue)) return !1;
                                if (3 === n && e.parentNode && a[e.parentNode.nodeName] && qr(e.nodeValue)) return !1;
                                e = i.next();
                            } while (e);
                        }
                        return o <= 1;
                    },
                    createRng: N,
                    nodeIndex: $a,
                    split: function (e, t, n) {
                        var r,
                            o,
                            i,
                            a = N();
                        if (e && t)
                            return (
                                a.setStart(e.parentNode, $a(e)),
                                a.setEnd(t.parentNode, $a(t)),
                                (r = a.extractContents()),
                                (a = N()).setStart(t.parentNode, $a(t) + 1),
                                a.setEnd(e.parentNode, $a(e) + 1),
                                (o = a.extractContents()),
                                (i = e.parentNode).insertBefore(zo($, r), e),
                                n ? i.insertBefore(n, e) : i.insertBefore(t, e),
                                i.insertBefore(zo($, o), e),
                                x(e),
                                n || t
                            );
                    },
                    bind: V,
                    unbind: q,
                    fire: function (e, t, n) {
                        return U.fire(e, t, n);
                    },
                    getContentEditable: k,
                    getContentEditableParent: function (e) {
                        for (var t = l(), n = null; e && e !== t && null === (n = k(e)); e = e.parentNode);
                        return n;
                    },
                    destroy: function () {
                        if (0 < I.length)
                            for (var e = I.length; e--; ) {
                                var t = I[e];
                                U.unbind(t[0], t[1], t[2]);
                            }
                        ne(B, function (e, t) {
                            L.unload(t), delete B[t];
                        }),
                            aa.setDocument && aa.setDocument();
                    },
                    isChildOf: function (e, t) {
                        if (Ya) {
                            for (; e; ) {
                                if (t === e) return !0;
                                e = e.parentNode;
                            }
                            return !1;
                        }
                        return e === t || t.contains(e);
                    },
                    dumpRng: function (e) {
                        return "startContainer: " + e.startContainer.nodeName + ", startOffset: " + e.startOffset + ", endContainer: " + e.endContainer.nodeName + ", endOffset: " + e.endOffset;
                    },
                },
                W =
                    ((_ = F),
                    (R = J($)),
                    (e = {
                        set: function (e, t, n) {
                            A.url_converter && null !== t && (t = A.url_converter.call(A.url_converter_scope || R(), t, n, e[0])), e.attr("data-mce-" + n, t).attr(n, t);
                        },
                        get: function (e, t) {
                            return e.attr("data-mce-" + t) || e.attr(t);
                        },
                    }),
                    (t = {
                        style: {
                            set: function (e, t) {
                                null === t || "object" != typeof t ? (D && e.attr("data-mce-style", t), null !== t && "string" == typeof t ? (e.removeAttr("style"), e.css(_.parse(t))) : e.attr("style", t)) : e.css(t);
                            },
                            get: function (e) {
                                var t = e.attr("data-mce-style") || e.attr("style");
                                return _.serialize(_.parse(t), e[0].nodeName);
                            },
                        },
                    }),
                    (D = (A = u).keep_values) && (t.href = t.src = e),
                    t);
            return $;
        };
    (Ja.DOM = Ja(document)), (Ja.nodeIndex = $a);
    var Qa = Ja.DOM,
        Za = Et.each,
        eu = Et.grep,
        tu =
            ((nu.prototype._setReferrerPolicy = function (e) {
                this.settings.referrerPolicy = e;
            }),
            (nu.prototype.loadScript = function (e, t, n) {
                function r() {
                    o.remove(i), a && (a.onerror = a.onload = a = null);
                }
                var o = Qa,
                    i = o.uniqueId(),
                    a = document.createElement("script");
                (a.id = i),
                    (a.type = "text/javascript"),
                    (a.src = Et._addCacheSuffix(e)),
                    this.settings.referrerPolicy && o.setAttrib(a, "referrerpolicy", this.settings.referrerPolicy),
                    (a.onload = function () {
                        r(), t();
                    }),
                    (a.onerror = function () {
                        r(), y(n) ? n() : "undefined" != typeof console && console.log && console.log("Failed to load script: " + e);
                    }),
                    (document.getElementsByTagName("head")[0] || document.body).appendChild(a);
            }),
            (nu.prototype.isDone = function (e) {
                return 2 === this.states[e];
            }),
            (nu.prototype.markDone = function (e) {
                this.states[e] = 2;
            }),
            (nu.prototype.add = function (e, t, n, r) {
                var o = this.states[e];
                this.queue.push(e), void 0 === o && (this.states[e] = 0), t && (this.scriptLoadedCallbacks[e] || (this.scriptLoadedCallbacks[e] = []), this.scriptLoadedCallbacks[e].push({ success: t, failure: r, scope: n || this }));
            }),
            (nu.prototype.load = function (e, t, n, r) {
                return this.add(e, t, n, r);
            }),
            (nu.prototype.remove = function (e) {
                delete this.states[e], delete this.scriptLoadedCallbacks[e];
            }),
            (nu.prototype.loadQueue = function (e, t, n) {
                this.loadScripts(this.queue, e, t, n);
            }),
            (nu.prototype.loadScripts = function (n, e, t, r) {
                function o(t, e) {
                    Za(i.scriptLoadedCallbacks[e], function (e) {
                        y(e[t]) && e[t].call(e.scope);
                    }),
                        (i.scriptLoadedCallbacks[e] = void 0);
                }
                var i = this,
                    a = [];
                i.queueLoadedCallbacks.push({ success: e, failure: r, scope: t || this });
                var u = function () {
                    var e,
                        t = eu(n);
                    (n.length = 0),
                        Za(t, function (e) {
                            2 !== i.states[e]
                                ? 3 !== i.states[e]
                                    ? 1 !== i.states[e] &&
                                      ((i.states[e] = 1),
                                      i.loading++,
                                      i.loadScript(
                                          e,
                                          function () {
                                              (i.states[e] = 2), i.loading--, o("success", e), u();
                                          },
                                          function () {
                                              (i.states[e] = 3), i.loading--, a.push(e), o("failure", e), u();
                                          }
                                      ))
                                    : o("failure", e)
                                : o("success", e);
                        }),
                        i.loading ||
                            ((e = i.queueLoadedCallbacks.slice(0)),
                            (i.queueLoadedCallbacks.length = 0),
                            Za(e, function (e) {
                                0 === a.length ? y(e.success) && e.success.call(e.scope) : y(e.failure) && e.failure.call(e.scope, a);
                            }));
                };
                u();
            }),
            (nu.ScriptLoader = new nu()),
            nu);
    function nu(e) {
        void 0 === e && (e = {}), (this.states = {}), (this.queue = []), (this.scriptLoadedCallbacks = {}), (this.queueLoadedCallbacks = []), (this.loading = 0), (this.settings = e);
    }
    function ru(e) {
        var t = e;
        return {
            get: function () {
                return t;
            },
            set: function (e) {
                t = e;
            },
        };
    }
    function ou() {
        return ue(iu, au.get());
    }
    var iu = {},
        au = ru("en"),
        uu = {
            getData: function () {
                return re(iu, function (e) {
                    return _e({}, e);
                });
            },
            setCode: function (e) {
                e && au.set(e);
            },
            getCode: function () {
                return au.get();
            },
            add: function (e, t) {
                var n = iu[e];
                n || (iu[e] = n = {}),
                    ne(t, function (e, t) {
                        n[t.toLowerCase()] = e;
                    });
            },
            translate: function (e) {
                function n(e) {
                    return y(e) ? Object.prototype.toString.call(e) : u(e) ? "" : "" + e;
                }
                function t(e) {
                    var t = n(e);
                    return ue(a, t.toLowerCase()).map(n).getOr(t);
                }
                function r(e) {
                    return e.replace(/{context:\w+}$/, "");
                }
                var o,
                    i,
                    a = ou().getOr({}),
                    u = function (e) {
                        return "" === e || null == e;
                    };
                if (u(e)) return "";
                if (h((o = e)) && Ne(o, "raw")) return n(e.raw);
                if (S((i = e)) && 1 < i.length) {
                    var s = e.slice(1);
                    return r(
                        t(e[0]).replace(/\{([0-9]+)\}/g, function (e, t) {
                            return Ne(s, t) ? n(s[t]) : e;
                        })
                    );
                }
                return r(t(e));
            },
            isRtl: function () {
                return ou()
                    .bind(function (e) {
                        return ue(e, "_dir");
                    })
                    .exists(function (e) {
                        return "rtl" === e;
                    });
            },
            hasCode: function (e) {
                return Ne(iu, e);
            },
        },
        su = function () {
            function u(t, n) {
                Y(
                    U(r, function (e) {
                        return e.name === t && e.state === n;
                    }),
                    function (e) {
                        return e.callback();
                    }
                );
            }
            function s(e) {
                var t;
                return (f[e] ? f[e].dependencies : t) || [];
            }
            function c(e, t) {
                return "object" == typeof t ? t : "string" == typeof e ? { prefix: "", resource: t, suffix: "" } : { prefix: e.prefix, resource: t, suffix: e.suffix };
            }
            function e(e, t, n) {
                void 0 === n && (n = "added"), (Ne(f, e) && "added" === n) || (Ne(l, e) && "loaded" === n) ? t() : r.push({ name: e, state: n, callback: t });
            }
            var o = [],
                l = {},
                f = {},
                r = [],
                d = function (r, o, i, a, e) {
                    var t, n;
                    l[r] ||
                        (0 !== (t = "string" == typeof o ? o : o.prefix + o.resource + o.suffix).indexOf("/") && -1 === t.indexOf("://") && (t = su.baseURL + "/" + t),
                        (l[r] = t.substring(0, t.lastIndexOf("/"))),
                        (n = function () {
                            var n, e, t;
                            u(r, "loaded"),
                                (n = o),
                                (e = i),
                                (t = a),
                                Y(s(r), function (e) {
                                    var t = c(n, e);
                                    d(t.resource, t, void 0, void 0);
                                }),
                                e && (t ? e.call(t) : e.call(tu));
                        }),
                        f[r] ? n() : tu.ScriptLoader.add(t, n, a, e));
                };
            return {
                items: o,
                urls: l,
                lookup: f,
                _listeners: r,
                get: function (e) {
                    if (f[e]) return f[e].instance;
                },
                dependencies: s,
                requireLangPack: function (t, n) {
                    !1 !== su.languageLoad &&
                        e(
                            t,
                            function () {
                                var e = uu.getCode();
                                !e || (n && -1 === ("," + (n || "") + ",").indexOf("," + e + ",")) || tu.ScriptLoader.add(l[t] + "/langs/" + e + ".js");
                            },
                            "loaded"
                        );
                },
                add: function (e, t, n) {
                    var r = t;
                    return o.push(r), (f[e] = { instance: r, dependencies: n }), u(e, "added"), r;
                },
                remove: function (e) {
                    delete l[e], delete f[e];
                },
                createUrl: c,
                addComponents: function (e, t) {
                    var n = l[e];
                    Y(t, function (e) {
                        tu.ScriptLoader.add(n + "/" + e);
                    });
                },
                load: d,
                waitFor: e,
            };
        };
    function cu() {
        var e,
            t,
            n =
                ((e = te),
                (t = ru(ve.none())),
                {
                    clear: function () {
                        r(), t.set(ve.none());
                    },
                    isSet: function () {
                        return t.get().isSome();
                    },
                    get: function () {
                        return t.get();
                    },
                    set: function (e) {
                        r(), t.set(ve.some(e));
                    },
                });
        function r() {
            return t.get().each(e);
        }
        return _e(_e({}, n), {
            on: function (e) {
                return n.get().each(e);
            },
        });
    }
    function lu(n, r) {
        var o = null;
        return {
            cancel: function () {
                l(o) || (clearTimeout(o), (o = null));
            },
            throttle: function () {
                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                l(o) &&
                    (o = setTimeout(function () {
                        (o = null), n.apply(null, e);
                    }, r));
            },
        };
    }
    function fu(n, r) {
        function o() {
            l(i) || (clearTimeout(i), (i = null));
        }
        var i = null;
        return {
            cancel: o,
            throttle: function () {
                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                o(),
                    (i = setTimeout(function () {
                        (i = null), n.apply(null, e);
                    }, r));
            },
        };
    }
    function du(e, t) {
        var n = vn(e, t);
        return void 0 === n || "" === n ? [] : n.split(" ");
    }
    function mu(e) {
        return void 0 !== e.dom.classList;
    }
    function gu(e, t) {
        var n, r, o;
        mu(e) ? e.dom.classList.add(t) : ((r = t), (o = du((n = e), "class").concat([r])), pn(n, "class", o.join(" ")));
    }
    function pu(e, t) {
        return mu(e) && e.dom.classList.contains(t);
    }
    function hu(e, t) {
        return He((n = void 0 === e ? document : e.dom)) ? [] : T(n.querySelectorAll(t), Nt.fromDom);
        var n;
    }
    function vu(r, e) {
        function t(e, t) {
            return (n = e.dom) && n.hasAttribute && n.hasAttribute(t) ? ve.some(vn(e, t)) : ve.none();
            var n;
        }
        var n = r.selection.getRng(),
            o = Nt.fromDom(n.startContainer),
            i = Nt.fromDom(r.getBody()),
            a = e.fold(
                function () {
                    return "." + ju();
                },
                function (e) {
                    return "[" + Vu() + '="' + e + '"]';
                }
            );
        return br(Mt(o, n.startOffset).getOr(o), a, function (e) {
            return je(e, i);
        }).bind(function (e) {
            return t(e, "" + qu()).bind(function (n) {
                return t(e, "" + Vu()).map(function (e) {
                    var t = $u(r, n);
                    return { uid: n, name: e, elements: t };
                });
            });
        });
    }
    function bu(t) {
        function o() {
            return { listeners: [], previous: cu() };
        }
        function c(e, t) {
            n(e, function (e) {
                return t(e), e;
            });
        }
        function n(e, t) {
            var n = i.get(),
                r = t(ue(n, e).getOrThunk(o));
            (n[e] = r), i.set(n);
        }
        var i = ru({}),
            e = fu(function () {
                var e = i.get();
                Y(W(we(e)), function (e) {
                    n(e, function (u) {
                        var s = u.previous.get();
                        return (
                            vu(t, ve.some(e)).fold(
                                function () {
                                    var t;
                                    s.isSome() &&
                                        (c((t = e), function (e) {
                                            Y(e.listeners, function (e) {
                                                return e(!1, t);
                                            });
                                        }),
                                        u.previous.clear());
                                },
                                function (e) {
                                    var t,
                                        n,
                                        r,
                                        o = e.uid,
                                        i = e.name,
                                        a = e.elements;
                                    fn(s, o) ||
                                        ((n = o),
                                        (r = a),
                                        c((t = i), function (e) {
                                            Y(e.listeners, function (e) {
                                                return e(!0, t, {
                                                    uid: n,
                                                    nodes: T(r, function (e) {
                                                        return e.dom;
                                                    }),
                                                });
                                            });
                                        }),
                                        u.previous.set(o));
                                }
                            ),
                            { previous: u.previous, listeners: u.listeners }
                        );
                    });
                });
            }, 30);
        return (
            t.on("remove", function () {
                e.cancel();
            }),
            t.on("NodeChange", function () {
                e.throttle();
            }),
            {
                addListener: function (e, t) {
                    n(e, function (e) {
                        return { previous: e.previous, listeners: e.listeners.concat([t]) };
                    });
                },
            }
        );
    }
    function yu(e) {
        var t = new Date().getTime();
        return e + "_" + Math.floor(1e9 * Math.random()) + ++Wu + String(t);
    }
    function Cu(e, t) {
        var n,
            r,
            o = Rt(e).dom,
            i = Nt.fromDom(o.createDocumentFragment());
        Kt(i, ((n = t), ((r = (o || document).createElement("div")).innerHTML = n), Dn(Nt.fromDom(r)))), Xt(e), Pn(e, i);
    }
    function xu(e, t) {
        return Nt.fromDom(e.dom.cloneNode(t));
    }
    function wu(e) {
        return xu(e, !1);
    }
    function Su(e) {
        return xu(e, !0);
    }
    function Eu(e, t, n) {
        function r(e) {
            for (var t; (t = o[e]()) && !jn(t) && !n(t); );
            return ve.from(t).filter(jn);
        }
        void 0 === n && (n = R);
        var o = new Rr(e, t);
        return {
            current: function () {
                return ve.from(o.current()).filter(jn);
            },
            next: function () {
                return r("next");
            },
            prev: function () {
                return r("prev");
            },
            prev2: function () {
                return r("prev2");
            },
        };
    }
    function Nu(t, e) {
        var i =
                e ||
                function (e) {
                    return t.isBlock(e) || Wn(e) || Yn(e);
                },
            a = function (e, t, n, r) {
                if (jn(e)) {
                    var o = r(e, t, e.data);
                    if (-1 !== o) return ve.some({ container: e, offset: o });
                }
                return n().bind(function (e) {
                    return a(e.container, e.offset, n, r);
                });
            };
        return {
            backwards: function (e, t, n, r) {
                var o = Eu(e, r, i);
                return a(
                    e,
                    t,
                    function () {
                        return o.prev().map(function (e) {
                            return { container: e, offset: e.length };
                        });
                    },
                    n
                ).getOrNull();
            },
            forwards: function (e, t, n, r) {
                var o = Eu(e, r, i);
                return a(
                    e,
                    t,
                    function () {
                        return o.next().map(function (e) {
                            return { container: e, offset: 0 };
                        });
                    },
                    n
                ).getOrNull();
            },
        };
    }
    function ku(e) {
        return e ? { left: Ku(e.left), top: Ku(e.top), bottom: Ku(e.bottom), right: Ku(e.right), width: Ku(e.width), height: Ku(e.height) } : { left: 0, top: 0, bottom: 0, right: 0, width: 0, height: 0 };
    }
    function _u(e, t) {
        return (e = ku(e)), t || (e.left = e.left + e.width), (e.right = e.left), (e.width = 0), e;
    }
    function Au(e, t, n) {
        return 0 <= e && e <= Math.min(t.height, n.height) / 2;
    }
    function Ru(e, t) {
        var n = Math.min(t.height / 2, e.height / 2);
        return e.bottom - n < t.top || (!(e.top > t.bottom) && Au(t.top - e.bottom, e, t));
    }
    function Du(e, t) {
        return e.top > t.bottom || (!(e.bottom < t.top) && Au(t.bottom - e.top, e, t));
    }
    function Tu(e, t, n) {
        return t >= e.left && t <= e.right && n >= e.top && n <= e.bottom;
    }
    function Ou(e) {
        var t = e.startContainer,
            n = e.startOffset;
        return t.hasChildNodes() && e.endOffset === n + 1 ? t.childNodes[n] : null;
    }
    function Bu(e, t) {
        if (zn(e) && e.hasChildNodes()) {
            var n = e.childNodes;
            return n[((r = n.length - 1), Math.min(Math.max(t, 0), r))];
        }
        return e;
        var r;
    }
    function Pu(e) {
        return "string" == typeof e && 768 <= e.charCodeAt(0) && Xu.test(e);
    }
    function Lu(e) {
        return "createRange" in e ? e.createRange() : Ja.DOM.createRng();
    }
    function Iu(e) {
        return e && /[\r\n\t ]/.test(e);
    }
    function Mu(e) {
        return e.setStart && e.setEnd;
    }
    function Fu(e) {
        var t = e.startContainer,
            n = e.startOffset;
        if (Iu(e.toString()) && es(t.parentNode) && jn(t)) {
            var r = t.data;
            return Iu(r[n - 1]) || Iu(r[n + 1]) ? 1 : void 0;
        }
    }
    function Uu(e) {
        return 0 === e.left && 0 === e.right && 0 === e.top && 0 === e.bottom;
    }
    function zu(e, t) {
        var n = _u(e, t);
        return (n.width = 1), (n.right = n.left + 1), n;
    }
    (su.languageLoad = !0), (su.baseURL = ""), (su.PluginManager = su()), (su.ThemeManager = su());
    var Hu = function (e, t) {
            var n = [];
            return (
                Y(Dn(e), function (e) {
                    n = (n = t(e) ? n.concat([e]) : n).concat(Hu(e, t));
                }),
                n
            );
        },
        ju = J("mce-annotation"),
        Vu = J("data-mce-annotation"),
        qu = J("data-mce-annotation-uid"),
        $u = function (e, t) {
            return hu(Nt.fromDom(e.getBody()), "[" + qu() + '="' + t + '"]');
        },
        Wu = 0,
        Ku = Math.round,
        Xu = new RegExp(
            "[\u0300-\u036f\u0483-\u0487\u0488-\u0489\u0591-\u05bd\u05bf\u05c1-\u05c2\u05c4-\u05c5\u05c7\u0610-\u061a\u064b-\u065f\u0670\u06d6-\u06dc\u06df-\u06e4\u06e7-\u06e8\u06ea-\u06ed\u0711\u0730-\u074a\u07a6-\u07b0\u07eb-\u07f3\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0859-\u085b\u08e3-\u0902\u093a\u093c\u0941-\u0948\u094d\u0951-\u0957\u0962-\u0963\u0981\u09bc\u09be\u09c1-\u09c4\u09cd\u09d7\u09e2-\u09e3\u0a01-\u0a02\u0a3c\u0a41-\u0a42\u0a47-\u0a48\u0a4b-\u0a4d\u0a51\u0a70-\u0a71\u0a75\u0a81-\u0a82\u0abc\u0ac1-\u0ac5\u0ac7-\u0ac8\u0acd\u0ae2-\u0ae3\u0b01\u0b3c\u0b3e\u0b3f\u0b41-\u0b44\u0b4d\u0b56\u0b57\u0b62-\u0b63\u0b82\u0bbe\u0bc0\u0bcd\u0bd7\u0c00\u0c3e-\u0c40\u0c46-\u0c48\u0c4a-\u0c4d\u0c55-\u0c56\u0c62-\u0c63\u0c81\u0cbc\u0cbf\u0cc2\u0cc6\u0ccc-\u0ccd\u0cd5-\u0cd6\u0ce2-\u0ce3\u0d01\u0d3e\u0d41-\u0d44\u0d4d\u0d57\u0d62-\u0d63\u0dca\u0dcf\u0dd2-\u0dd4\u0dd6\u0ddf\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0eb1\u0eb4-\u0eb9\u0ebb-\u0ebc\u0ec8-\u0ecd\u0f18-\u0f19\u0f35\u0f37\u0f39\u0f71-\u0f7e\u0f80-\u0f84\u0f86-\u0f87\u0f8d-\u0f97\u0f99-\u0fbc\u0fc6\u102d-\u1030\u1032-\u1037\u1039-\u103a\u103d-\u103e\u1058-\u1059\u105e-\u1060\u1071-\u1074\u1082\u1085-\u1086\u108d\u109d\u135d-\u135f\u1712-\u1714\u1732-\u1734\u1752-\u1753\u1772-\u1773\u17b4-\u17b5\u17b7-\u17bd\u17c6\u17c9-\u17d3\u17dd\u180b-\u180d\u18a9\u1920-\u1922\u1927-\u1928\u1932\u1939-\u193b\u1a17-\u1a18\u1a1b\u1a56\u1a58-\u1a5e\u1a60\u1a62\u1a65-\u1a6c\u1a73-\u1a7c\u1a7f\u1ab0-\u1abd\u1abe\u1b00-\u1b03\u1b34\u1b36-\u1b3a\u1b3c\u1b42\u1b6b-\u1b73\u1b80-\u1b81\u1ba2-\u1ba5\u1ba8-\u1ba9\u1bab-\u1bad\u1be6\u1be8-\u1be9\u1bed\u1bef-\u1bf1\u1c2c-\u1c33\u1c36-\u1c37\u1cd0-\u1cd2\u1cd4-\u1ce0\u1ce2-\u1ce8\u1ced\u1cf4\u1cf8-\u1cf9\u1dc0-\u1df5\u1dfc-\u1dff\u200c-\u200d\u20d0-\u20dc\u20dd-\u20e0\u20e1\u20e2-\u20e4\u20e5-\u20f0\u2cef-\u2cf1\u2d7f\u2de0-\u2dff\u302a-\u302d\u302e-\u302f\u3099-\u309a\ua66f\ua670-\ua672\ua674-\ua67d\ua69e-\ua69f\ua6f0-\ua6f1\ua802\ua806\ua80b\ua825-\ua826\ua8c4\ua8e0-\ua8f1\ua926-\ua92d\ua947-\ua951\ua980-\ua982\ua9b3\ua9b6-\ua9b9\ua9bc\ua9e5\uaa29-\uaa2e\uaa31-\uaa32\uaa35-\uaa36\uaa43\uaa4c\uaa7c\uaab0\uaab2-\uaab4\uaab7-\uaab8\uaabe-\uaabf\uaac1\uaaec-\uaaed\uaaf6\uabe5\uabe8\uabed\ufb1e\ufe00-\ufe0f\ufe20-\ufe2f\uff9e-\uff9f]"
        ),
        Yu = zn,
        Gu = jr,
        Ju = an("display", "block table"),
        Qu = an("float", "left right"),
        Zu = (function () {
            for (var n = [], e = 0; e < arguments.length; e++) n[e] = arguments[e];
            return function (e) {
                for (var t = 0; t < n.length; t++) if (!n[t](e)) return !1;
                return !0;
            };
        })(Yu, Gu, s(Qu)),
        es = s(an("white-space", "pre pre-line pre-wrap")),
        ts = jn,
        ns = Wn,
        rs = Ja.nodeIndex,
        os = function (e, t) {
            if (!(t < 0 && zn(e) && e.hasChildNodes())) return Bu(e, t);
        },
        is = function (e) {
            var t = e.getClientRects(),
                n = 0 < t.length ? ku(t[0]) : ku(e.getBoundingClientRect());
            return !Mu(e) && ns(e) && Uu(n)
                ? (function (e) {
                      var t = e.ownerDocument,
                          n = Lu(t),
                          r = t.createTextNode(yo),
                          o = e.parentNode;
                      o.insertBefore(r, e), n.setStart(r, 0), n.setEnd(r, 1);
                      var i = ku(n.getBoundingClientRect());
                      return o.removeChild(r), i;
                  })(e)
                : Uu(n) && Mu(e)
                ? (function (e) {
                      var t = e.startContainer,
                          n = e.endContainer,
                          r = e.startOffset,
                          o = e.endOffset;
                      if (t === n && jn(n) && 0 === r && 1 === o) {
                          var i = e.cloneRange();
                          return i.setEndAfter(n), is(i);
                      }
                      return null;
                  })(e)
                : n;
        },
        as = function (t, n, e) {
            function r() {
                return (e =
                    e ||
                    (function (e) {
                        function r(e) {
                            var t;
                            0 !== e.height && ((0 < o.length && ((t = o[o.length - 1]), e.left === t.left && e.top === t.top && e.bottom === t.bottom && e.right === t.right)) || o.push(e));
                        }
                        function t(e, t) {
                            var n = Lu(e.ownerDocument);
                            if (t < e.data.length) {
                                if (Pu(e.data[t])) return o;
                                if (Pu(e.data[t - 1]) && (n.setStart(e, t), n.setEnd(e, t + 1), !Fu(n))) return r(zu(is(n), !1)), o;
                            }
                            0 < t && (n.setStart(e, t - 1), n.setEnd(e, t), Fu(n) || r(zu(is(n), !1))), t < e.data.length && (n.setStart(e, t), n.setEnd(e, t + 1), Fu(n) || r(zu(is(n), !0)));
                        }
                        var o = [],
                            n = e.container(),
                            i = e.offset();
                        if (ts(n)) return t(n, i), o;
                        if (Yu(n))
                            if (e.isAtEnd()) {
                                var a = os(n, i);
                                ts(a) && t(a, a.data.length), Zu(a) && !ns(a) && r(zu(is(a), !1));
                            } else {
                                if (((a = os(n, i)), ts(a) && t(a, 0), Zu(a) && e.isAtEnd())) return r(zu(is(a), !1)), o;
                                var u = os(e.container(), e.offset() - 1);
                                Zu(u) && !ns(u) && ((!Ju(u) && !Ju(a) && Zu(a)) || r(zu(is(u), !1))), Zu(a) && r(zu(is(a), !0));
                            }
                        return o;
                    })(as(t, n)));
            }
            return {
                container: J(t),
                offset: J(n),
                toRange: function () {
                    var e = Lu(t.ownerDocument);
                    return e.setStart(t, n), e.setEnd(t, n), e;
                },
                getClientRects: r,
                isVisible: function () {
                    return 0 < r().length;
                },
                isAtStart: function () {
                    return ts(t), 0 === n;
                },
                isAtEnd: function () {
                    return ts(t) ? n >= t.data.length : n >= t.childNodes.length;
                },
                isEqual: function (e) {
                    return e && t === e.container() && n === e.offset();
                },
                getNode: function (e) {
                    return os(t, e ? n - 1 : n);
                },
            };
        };
    function us(e, t) {
        jn(t) && 0 === t.data.length && e.remove(t);
    }
    function ss(e, t, n) {
        var r, o, i, a, u, s, c;
        $n(n)
            ? ((i = e),
              (a = t),
              (s = ve.from((u = n).firstChild)),
              (c = ve.from(u.lastChild)),
              a.insertNode(u),
              s.each(function (e) {
                  return us(i, e.previousSibling);
              }),
              c.each(function (e) {
                  return us(i, e.nextSibling);
              }))
            : ((r = e), t.insertNode((o = n)), us(r, o.previousSibling), us(r, o.nextSibling));
    }
    function cs(t) {
        return function (e) {
            return t === e;
        };
    }
    function ls(e) {
        var t, r, n, o;
        return (
            (uc(e) ? "text()" : e.nodeName.toLowerCase()) +
            "[" +
            ((r = fc(lc((t = e)))),
            (n = ge(r, cs(t), t)),
            (o = me(
                (r = r.slice(0, n + 1)),
                function (e, t, n) {
                    return uc(t) && uc(r[n - 1]) && e++, e;
                },
                0
            )),
            ge((r = fe(r, on([t.nodeName]))), cs(t), t) - o) +
            "]"
        );
    }
    function fs(e, t) {
        var n,
            r,
            o,
            i = [],
            a = t.container(),
            u = t.offset();
        return (
            uc(a)
                ? (n = (function (e, t) {
                      for (; (e = e.previousSibling) && uc(e); ) t += e.data.length;
                      return t;
                  })(a, u))
                : (u >= (r = a.childNodes).length ? ((n = "after"), (u = r.length - 1)) : (n = "before"), (a = r[u])),
            i.push(ls(a)),
            (o = fe(
                (function (e, t) {
                    var n = [];
                    for (t = t.parentNode; t !== e; t = t.parentNode) n.push(t);
                    return n;
                })(e, a),
                s(sn)
            )),
            (i = i.concat(le(o, ls))).reverse().join("/") + "," + n
        );
    }
    function ds(e, t) {
        if (!t) return null;
        var n = t.split(","),
            r = n[0].split("/"),
            o = 1 < n.length ? n[1] : "before",
            i = me(
                r,
                function (e, t) {
                    var n,
                        r,
                        o,
                        i,
                        a = /([\w\-\(\)]+)\[([0-9]+)\]/.exec(t);
                    return a
                        ? ("text()" === a[1] && (a[1] = "#text"),
                          (n = e),
                          (r = a[1]),
                          (o = parseInt(a[2], 10)),
                          (i = fe((i = fc(n)), function (e, t) {
                              return !uc(e) || !uc(i[t - 1]);
                          })),
                          (i = fe(i, on([r])))[o])
                        : null;
                },
                e
            );
        return i
            ? uc(i)
                ? (function (e, t) {
                      for (var n, r = e, o = 0; uc(r); ) {
                          if (((n = r.data.length), o <= t && t <= o + n)) {
                              (e = r), (t -= o);
                              break;
                          }
                          if (!uc(r.nextSibling)) {
                              (e = r), (t = n);
                              break;
                          }
                          (o += n), (r = r.nextSibling);
                      }
                      return uc(e) && t > e.data.length && (t = e.data.length), as(e, t);
                  })(i, parseInt(o, 10))
                : ((o = "after" === o ? cc(i) + 1 : cc(i)), as(i.parentNode, o))
            : null;
    }
    function ms(e, t, n, r, o) {
        var i,
            a = r[o ? "startContainer" : "endContainer"],
            u = r[o ? "startOffset" : "endOffset"],
            s = [],
            c = 0,
            l = e.getRoot();
        for (
            jn(a)
                ? s.push(
                      n
                          ? (function (e, t, n) {
                                for (var r = e(t.data.slice(0, n)).length, o = t.previousSibling; o && jn(o); o = o.previousSibling) r += e(o.data).length;
                                return r;
                            })(t, a, u)
                          : u
                  )
                : (u >= (i = a.childNodes).length && i.length && ((c = 1), (u = Math.max(0, i.length - 1))), s.push(e.nodeIndex(i[u], n) + c));
            a && a !== l;
            a = a.parentNode
        )
            s.push(e.nodeIndex(a, n));
        return s;
    }
    function gs(e, t, n) {
        var r = 0;
        return (
            Et.each(e.select(t), function (e) {
                if ("all" !== e.getAttribute("data-mce-bogus")) return e !== n && void r++;
            }),
            r
        );
    }
    function ps(e, t) {
        var n,
            r = t ? "start" : "end",
            o = e[r + "Container"],
            i = e[r + "Offset"];
        zn(o) && "TR" === o.nodeName && (o = (n = o.childNodes)[Math.min(t ? i : i - 1, n.length - 1)]) && ((i = t ? 0 : o.childNodes.length), e["set" + (t ? "Start" : "End")](o, i));
    }
    function hs(e) {
        return ps(e, !0), ps(e, !1), e;
    }
    function vs(e, t) {
        var n;
        return zn(e) && ((e = Bu(e, t)), dc(e)) ? e : Ir(e) ? ((n = (e = jn(e) && Pr(e) ? e.parentNode : e).previousSibling), dc(n) ? n : ((n = e.nextSibling), dc(n) ? n : void 0)) : void 0;
    }
    function bs(e, t, n) {
        var r = n.getNode(),
            o = r ? r.nodeName : null,
            i = n.getRng();
        if (dc(r) || "IMG" === o) return { name: o, index: gs(n.dom, o, r) };
        var a,
            u,
            s,
            c,
            l,
            f,
            d,
            m = vs((a = i).startContainer, a.startOffset) || vs(a.endContainer, a.endOffset);
        return m ? { name: (o = m.tagName), index: gs(n.dom, o, m) } : ((f = (s = n).dom), ((d = {}).start = ms(f, (u = e), (c = t), (l = i), !0)), s.isCollapsed() || (d.end = ms(f, u, c, l, !1)), Hr(l) && (d.isFakeCaret = !0), d);
    }
    function ys(e, t, n) {
        var r = { "data-mce-type": "bookmark", id: t, style: "overflow:hidden;line-height:0px" };
        return n ? e.create("span", r, "&#xFEFF;") : e.create("span", r);
    }
    function Cs(e, t) {
        var n = e.dom,
            r = e.getRng(),
            o = n.uniqueId(),
            i = e.isCollapsed(),
            a = e.getNode(),
            u = a.nodeName;
        if ("IMG" === u) return { name: u, index: gs(n, u, a) };
        var s = hs(r.cloneRange());
        return i || (s.collapse(!1), ss(n, s, ys(n, o + "_end", t))), (r = hs(r)).collapse(!0), ss(n, r, ys(n, o + "_start", t)), e.moveToBookmark({ id: o, keep: !0 }), { id: o };
    }
    function xs(e, t, n) {
        var r = e.getParam(t, n);
        return -1 === r.indexOf("=") ? r : ue(e.getParam(t, "", "hash"), e.id).getOr(n);
    }
    function ws(e) {
        return e.getParam("content_security_policy", "");
    }
    function Ss(e) {
        if (e.getParam("force_p_newlines", !1)) return "p";
        var t = e.getParam("forced_root_block", "p");
        return !1 === t ? "" : !0 === t ? "p" : t;
    }
    function Es(e) {
        return e.getParam("forced_root_block_attrs", {});
    }
    function Ns(e) {
        return e.getParam("automatic_uploads", !0, "boolean");
    }
    function ks(e) {
        return e.getParam("icons", "", "string");
    }
    function _s(e) {
        return e.getParam("referrer_policy", "", "string");
    }
    function As(e) {
        return e.getParam("language", "en", "string");
    }
    function Rs(e) {
        return e.getParam("indent_use_margin", !1);
    }
    function Ds(e) {
        var t = e.getParam("font_css", []);
        return S(t) ? t : T(t.split(","), Je);
    }
    function Ts(e) {
        var t = e.getParam("object_resizing");
        return !1 !== t && !xt.iOS && (X(t) ? t : "table,img,figure.image,div,video,iframe");
    }
    function Os(e) {
        return e.getParam("event_root");
    }
    function Bs(e) {
        return e.getParam("theme");
    }
    function Ps(e) {
        return !1 !== e.getParam("inline_boundaries");
    }
    function Ls(e) {
        return e.getParam("plugins", "", "string");
    }
    function Is(e) {
        var t = e.parentNode;
        t && t.removeChild(e);
    }
    function Ms(e) {
        var t = wo(e);
        return { count: e.length - t.length, text: t };
    }
    function Fs(e) {
        for (var t; -1 !== (t = e.data.lastIndexOf(Co)); ) e.deleteData(t, 1);
    }
    function Us(e, t) {
        return vc(e), t;
    }
    function zs(e, t) {
        var n,
            r = t.container(),
            o = (-1 === (n = _(xe(r.childNodes), e)) ? ve.none() : ve.some(n))
                .map(function (e) {
                    return e < t.offset() ? as(r, t.offset() - 1) : t;
                })
                .getOr(t);
        return vc(e), o;
    }
    function Hs(e, t) {
        return as.isTextPosition(t)
            ? ((r = t), hc((n = e)) && r.container() === n ? ((a = Ms((o = n).data.substr(0, (i = r).offset()))), (u = Ms(o.data.substr(i.offset()))), 0 < (a.text + u.text).length ? (Fs(o), as(o, i.offset() - a.count)) : i) : Us(n, r))
            : ((s = e), ((c = t).container() === s.parentNode ? zs : Us)(s, c));
        var n, r, o, i, a, u, s, c;
    }
    function js(e, t, n) {
        var r,
            o,
            i,
            a = _u(t.getBoundingClientRect(), n),
            u = "BODY" === e.tagName ? ((r = e.ownerDocument.documentElement), (o = e.scrollLeft || r.scrollLeft), e.scrollTop || r.scrollTop) : ((i = e.getBoundingClientRect()), (o = e.scrollLeft - i.left), e.scrollTop - i.top);
        (a.left += o), (a.right += o), (a.top += u), (a.bottom += u), (a.width = 1);
        var s = t.offsetWidth - t.clientWidth;
        return 0 < s && (n && (s *= -1), (a.left += s), (a.right += s)), a;
    }
    function Vs(e, i, a, u) {
        function s() {
            !(function () {
                for (var e = hu(Nt.fromDom(i), "*[contentEditable=false],video,audio,embed,object"), t = 0; t < e.length; t++) {
                    var n,
                        r = e[t].dom,
                        o = r.previousSibling;
                    ko(o) && (1 === (n = o.data).length ? o.parentNode.removeChild(o) : o.deleteData(n.length - 1, 1)), (o = r.nextSibling), No(o) && (1 === (n = o.data).length ? o.parentNode.removeChild(o) : o.deleteData(0, 1));
                }
            })(),
                l && (vc(l), (l = null)),
                f.on(function (e) {
                    Wa(e.caret).remove(), f.clear();
                }),
                c && (_r.clearInterval(c), (c = void 0));
        }
        var c,
            l,
            f = cu(),
            t = Ss(e),
            d = 0 < t.length ? t : "p";
        return {
            show: function (e, t) {
                var n;
                if ((s(), xc(t))) return null;
                if (!a(t))
                    return (
                        (l = (function (e, t) {
                            var n = e.ownerDocument.createTextNode(Co),
                                r = e.parentNode;
                            if (t) {
                                if (((o = e.previousSibling), Eo(o))) {
                                    if (Ir(o)) return o;
                                    if (ko(o)) return o.splitText(o.data.length - 1);
                                }
                                r.insertBefore(n, e);
                            } else {
                                var o = e.nextSibling;
                                if (Eo(o)) {
                                    if (Ir(o)) return o;
                                    if (No(o)) return o.splitText(1), o;
                                }
                                e.nextSibling ? r.insertBefore(n, e.nextSibling) : r.appendChild(n);
                            }
                            return n;
                        })(t, e)),
                        (n = t.ownerDocument.createRange()),
                        wc(l.nextSibling) ? (n.setStart(l, 0), n.setEnd(l, 0)) : (n.setStart(l, 1), n.setEnd(l, 1)),
                        n
                    );
                l = (function (e, t, n) {
                    var r,
                        o = t.ownerDocument.createElement(e);
                    o.setAttribute("data-mce-caret", n ? "before" : "after"), o.setAttribute("data-mce-bogus", "all"), o.appendChild(((r = document.createElement("br")).setAttribute("data-mce-bogus", "1"), r));
                    var i = t.parentNode;
                    return n ? i.insertBefore(o, t) : t.nextSibling ? i.insertBefore(o, t.nextSibling) : i.appendChild(o), o;
                })(d, t, e);
                var r = js(i, t, e);
                Wa(l).css("top", r.top);
                var o = Wa('<div class="mce-visual-caret" data-mce-bogus="all"></div>').css(_e({}, r)).appendTo(i)[0];
                return (
                    f.set({ caret: o, element: t, before: e }),
                    e && Wa(o).addClass("mce-visual-caret-before"),
                    (c = _r.setInterval(function () {
                        u() ? Wa("div.mce-visual-caret", i).toggleClass("mce-visual-caret-hidden") : Wa("div.mce-visual-caret", i).addClass("mce-visual-caret-hidden");
                    }, 500)),
                    (n = t.ownerDocument.createRange()).setStart(l, 0),
                    n.setEnd(l, 0),
                    n
                );
            },
            hide: s,
            getCss: function () {
                return ".mce-visual-caret {position: absolute;background-color: black;background-color: currentcolor;}.mce-visual-caret-hidden {display: none;}*[data-mce-caret] {position: absolute;left: -1000px;right: auto;top: 0;margin: 0;padding: 0;}";
            },
            reposition: function () {
                f.on(function (e) {
                    var t = js(i, e.element, e.before);
                    Wa(e.caret).css(_e({}, t));
                });
            },
            destroy: function () {
                return _r.clearInterval(c);
            },
        };
    }
    function qs() {
        return bc.isIE() || bc.isEdge() || bc.isFirefox();
    }
    function $s(e) {
        return wc(e) || (cn(e) && qs());
    }
    function Ws(e, t) {
        for (var n; (n = e(t)); ) if (!_c(n)) return n;
        return null;
    }
    function Ks(e, t, n, r, o) {
        var i = new Rr(e, r),
            a = Sc(e) || _c(e);
        if (t < 0) {
            if (a && n((e = Ws(i.prev.bind(i), !0)))) return e;
            for (; (e = Ws(i.prev.bind(i), o)); ) if (n(e)) return e;
        }
        if (0 < t) {
            if (a && n((e = Ws(i.next.bind(i), !0)))) return e;
            for (; (e = Ws(i.next.bind(i), o)); ) if (n(e)) return e;
        }
        return null;
    }
    function Xs(e, t) {
        for (; e && e !== t; ) {
            if (Nc(e)) return e;
            e = e.parentNode;
        }
        return null;
    }
    function Ys(e, t, n) {
        return Xs(e.container(), n) === Xs(t.container(), n);
    }
    function Gs(e, t) {
        if (!t) return null;
        var n = t.container(),
            r = t.offset();
        return Ac(n) ? n.childNodes[r + e] : null;
    }
    function Js(e, t) {
        var n = t.ownerDocument.createRange();
        return e ? (n.setStartBefore(t), n.setEndBefore(t)) : (n.setStartAfter(t), n.setEndAfter(t)), n;
    }
    function Qs(e, t, n) {
        for (var r, o, i = e ? "previousSibling" : "nextSibling"; n && n !== t; ) {
            var a = n[i];
            if ((kc(a) && (a = a[i]), Sc(a) || Ec(a))) {
                if (((o = n), Xs(a, (r = t)) === Xs(o, r))) return a;
                break;
            }
            if (Rc(a)) break;
            n = n.parentNode;
        }
        return null;
    }
    function Zs(e, t, n) {
        var r,
            o = A(Qs, !0, t),
            i = A(Qs, !1, t),
            a = n.startContainer,
            u = n.startOffset;
        if (Pr(a)) {
            var s = (a = Ac(a) ? a : a.parentNode).getAttribute("data-mce-caret");
            if ("before" === s && $s((r = a.nextSibling))) return Dc(r);
            if ("after" === s && $s((r = a.previousSibling))) return Tc(r);
        }
        if (!n.collapsed) return n;
        if (jn(a)) {
            if (kc(a)) {
                if (1 === e) {
                    if ((r = i(a))) return Dc(r);
                    if ((r = o(a))) return Tc(r);
                }
                if (-1 === e) {
                    if ((r = o(a))) return Tc(r);
                    if ((r = i(a))) return Dc(r);
                }
                return n;
            }
            if (ko(a) && u >= a.data.length - 1) return 1 === e && (r = i(a)) ? Dc(r) : n;
            if (No(a) && u <= 1) return -1 === e && (r = o(a)) ? Tc(r) : n;
            if (u === a.data.length) return (r = i(a)) ? Dc(r) : n;
            if (0 === u) return (r = o(a)) ? Tc(r) : n;
        }
        return n;
    }
    function ec(e, t) {
        return ve.from(Gs(e ? 0 : -1, t)).filter(Sc);
    }
    function tc(e, t, n) {
        var r = Zs(e, t, n);
        return -1 === e ? as.fromRangeStart(r) : as.fromRangeEnd(r);
    }
    function nc(e) {
        return ve.from(e.getNode()).map(Nt.fromDom);
    }
    function rc(e, t) {
        for (; (t = e(t)); ) if (t.isVisible()) return t;
        return t;
    }
    function oc(e, t) {
        var n = Ys(e, t);
        return !(n || !Wn(e.getNode())) || n;
    }
    (as.fromRangeStart = function (e) {
        return as(e.startContainer, e.startOffset);
    }),
        (as.fromRangeEnd = function (e) {
            return as(e.endContainer, e.endOffset);
        }),
        (as.after = function (e) {
            return as(e.parentNode, rs(e) + 1);
        }),
        (as.before = function (e) {
            return as(e.parentNode, rs(e));
        }),
        (as.isAbove = function (e, t) {
            return dn(Q(t.getClientRects()), Z(e.getClientRects()), Ru).getOr(!1);
        }),
        (as.isBelow = function (e, t) {
            return dn(Z(t.getClientRects()), Q(e.getClientRects()), Du).getOr(!1);
        }),
        (as.isAtStart = function (e) {
            return !!e && e.isAtStart();
        }),
        (as.isAtEnd = function (e) {
            return !!e && e.isAtEnd();
        }),
        (as.isTextPosition = function (e) {
            return !!e && jn(e.container());
        }),
        (as.isElementPosition = function (e) {
            return !1 === as.isTextPosition(e);
        });
    var ic,
        ac,
        uc = jn,
        sc = sn,
        cc = Ja.nodeIndex,
        lc = function (e) {
            var t = e.parentNode;
            return sc(t) ? lc(t) : t;
        },
        fc = function (e) {
            return e
                ? me(
                      e.childNodes,
                      function (e, t) {
                          return sc(t) && "BR" !== t.nodeName ? (e = e.concat(fc(t))) : e.push(t), e;
                      },
                      []
                  )
                : [];
        },
        dc = Yn,
        mc = A(bs, u, !0),
        gc = Ja.DOM,
        pc = zn,
        hc = jn,
        vc = function (e) {
            pc(e) && Ir(e) && (Mr(e) ? e.removeAttribute("data-mce-caret") : Is(e)), hc(e) && (Fs(e), 0 === e.data.length && Is(e));
        },
        bc = dt().browser,
        yc = Yn,
        Cc = Jn,
        xc = Gn,
        wc = function (e) {
            return yc(e) || Cc(e);
        },
        Sc = Yn,
        Ec = Jn,
        Nc = an("display", "block table table-cell table-caption list-item"),
        kc = Ir,
        _c = Pr,
        Ac = zn,
        Rc = jr,
        Dc = A(Js, !0),
        Tc = A(Js, !1);
    function Oc(e, t) {
        return e.hasChildNodes() && t < e.childNodes.length ? e.childNodes[t] : null;
    }
    function Bc(e, t) {
        if (0 < e) {
            if (Kl(t.previousSibling) && !ql(t.previousSibling)) return as.before(t);
            if (ql(t)) return as(t, 0);
        }
        if (e < 0) {
            if (Kl(t.nextSibling) && !ql(t.nextSibling)) return as.after(t);
            if (ql(t)) return as(t, t.data.length);
        }
        return e < 0 && !Wl(t) ? as.after(t) : as.before(t);
    }
    function Pc(t) {
        return {
            next: function (e) {
                return Yl(ic.Forwards, e, t);
            },
            prev: function (e) {
                return Yl(ic.Backwards, e, t);
            },
        };
    }
    function Lc(e) {
        return as.isTextPosition(e) ? 0 === e.offset() : jr(e.getNode());
    }
    function Ic(e) {
        if (as.isTextPosition(e)) {
            var t = e.container();
            return e.offset() === t.data.length;
        }
        return jr(e.getNode(!0));
    }
    function Mc(e, t) {
        return !as.isTextPosition(e) && !as.isTextPosition(t) && e.getNode() === t.getNode(!0);
    }
    function Fc(o, i, a) {
        return Gl(o, i, a).bind(function (e) {
            return Ys(a, e, i) && ((t = a), (n = e), o ? !Mc(t, n) && (as.isTextPosition((r = t)) || !Wn(r.getNode())) && Ic(t) && Lc(n) : !Mc(n, t) && Lc(t) && Ic(n)) ? Gl(o, i, e) : ve.some(e);
            var t, n, r;
        });
    }
    function Uc(e, t) {
        var n,
            r,
            o,
            i,
            a,
            u = e ? t.firstChild : t.lastChild;
        return jn(u) ? ve.some(as(u, e ? 0 : u.data.length)) : u ? (jr(u) ? ve.some(e ? as.before(u) : Wn((a = u)) ? as.before(a) : as.after(a)) : ((r = t), (o = u), (i = (n = e) ? as.before(o) : as.after(o)), Gl(n, r, i))) : ve.none();
    }
    function zc(e) {
        return zn(e) && e.id === nf;
    }
    function Hc(e, t) {
        for (; t && t !== e; ) {
            if (t.id === nf) return t;
            t = t.parentNode;
        }
        return null;
    }
    function jc(e) {
        return Et.isArray(e.start);
    }
    function Vc(e, t) {
        return zn(t) && e.isBlock(t) && !t.innerHTML && !xt.ie && (t.innerHTML = '<br data-mce-bogus="1" />'), t;
    }
    function qc(e, t, n) {
        return !1 === t.hasChildNodes() && Hc(e, t) && ((o = n), (i = (r = t).ownerDocument.createTextNode(Co)), r.appendChild(i), o.setStart(i, 0), o.setEnd(i, 0), 1);
        var r, o, i;
    }
    function $c(e, t, n, r) {
        var o,
            i,
            a,
            u,
            s = n[t ? "start" : "end"],
            c = e.getRoot();
        if (s) {
            for (a = s[0], i = c, o = s.length - 1; 1 <= o; o--) {
                if (((u = i.childNodes), qc(c, i, r))) return 1;
                if (s[o] > u.length - 1)
                    return (
                        qc(c, i, r) ||
                        (function (t) {
                            return tf(i).fold(R, function (e) {
                                return t.setStart(e.container(), e.offset()), t.setEnd(e.container(), e.offset()), !0;
                            });
                        })(r)
                    );
                i = u[s[o]];
            }
            3 === i.nodeType && (a = Math.min(s[0], i.nodeValue.length)), 1 === i.nodeType && (a = Math.min(s[0], i.childNodes.length)), t ? r.setStart(i, a) : r.setEnd(i, a);
        }
        return 1;
    }
    function Wc(e) {
        return jn(e) && 0 < e.data.length;
    }
    function Kc(e, t, n) {
        var r,
            o,
            i,
            a,
            u,
            s,
            c = e.get(n.id + "_" + t),
            l = n.keep;
        if (c) {
            if (
                ((r = c.parentNode),
                (o =
                    "start" === t
                        ? l
                            ? c.hasChildNodes()
                                ? ((r = c.firstChild), 1)
                                : Wc(c.nextSibling)
                                ? ((r = c.nextSibling), 0)
                                : Wc(c.previousSibling)
                                ? ((r = c.previousSibling), c.previousSibling.data.length)
                                : ((r = c.parentNode), e.nodeIndex(c) + 1)
                            : e.nodeIndex(c)
                        : l
                        ? c.hasChildNodes()
                            ? ((r = c.firstChild), 1)
                            : Wc(c.previousSibling)
                            ? ((r = c.previousSibling), c.previousSibling.data.length)
                            : ((r = c.parentNode), e.nodeIndex(c))
                        : e.nodeIndex(c)),
                (u = r),
                (s = o),
                !l)
            ) {
                for (
                    a = c.previousSibling,
                        i = c.nextSibling,
                        Et.each(Et.grep(c.childNodes), function (e) {
                            jn(e) && (e.nodeValue = e.nodeValue.replace(/\uFEFF/g, ""));
                        });
                    (c = e.get(n.id + "_" + t));

                )
                    e.remove(c, !0);
                a && i && a.nodeType === i.nodeType && jn(a) && !xt.opera && ((o = a.nodeValue.length), a.appendData(i.nodeValue), e.remove(i), (u = a), (s = o));
            }
            return ve.some(as(u, s));
        }
        return ve.none();
    }
    function Xc(t, e) {
        !(function (e, t) {
            var n,
                r,
                o,
                i,
                a,
                u,
                s,
                c,
                l,
                f,
                d,
                m,
                g = e.dom;
            if (t) {
                if (jc(t)) return (d = t), (m = (f = g).createRng()), $c(f, !0, d, m) && $c(f, !1, d, m) ? ve.some(m) : ve.none();
                if (X(t.start)) return ve.some(((s = t), (c = (u = g).createRng()), (l = ds(u.getRoot(), s.start)), c.setStart(l.container(), l.offset()), (l = ds(u.getRoot(), s.end)), c.setEnd(l.container(), l.offset()), c));
                if (Ne(t, "id"))
                    return dn((a = Kc((o = g), "start", (i = t))), Kc(o, "end", i).or(a), function (e, t) {
                        var n = o.createRng();
                        return n.setStart(Vc(o, e.container()), e.offset()), n.setEnd(Vc(o, t.container()), t.offset()), n;
                    });
                if (Ne(t, "name"))
                    return (
                        (n = g),
                        ve.from(n.select((r = t).name)[r.index]).map(function (e) {
                            var t = n.createRng();
                            return t.selectNode(e), t;
                        })
                    );
                if (Ne(t, "rng")) return ve.some(t.rng);
            }
            return ve.none();
        })(t, e).each(function (e) {
            t.setRng(e);
        });
    }
    function Yc(e) {
        return zn(e) && "SPAN" === e.tagName && "bookmark" === e.getAttribute("data-mce-type");
    }
    function Gc(e) {
        return "" !== e && -1 !== " \f\n\r\t\v".indexOf(e);
    }
    function Jc(e) {
        return !Gc(e) && !of(e);
    }
    function Qc(e) {
        return e.nodeType;
    }
    function Zc(e, t, n) {
        var r,
            o = n.startOffset,
            i = n.startContainer;
        if ((i !== n.endContainer || !(r = i.childNodes[o]) || !/^(IMG)$/.test(r.nodeName)) && zn(i)) {
            var a = i.childNodes,
                u = void 0;
            o < a.length ? ((i = a[o]), (u = new Rr(i, e.getParent(i, e.isBlock)))) : ((i = a[a.length - 1]), (u = new Rr(i, e.getParent(i, e.isBlock))).next(!0));
            for (var s = u.current(); s; s = u.next()) if (jn(s) && !af(s)) return n.setStart(s, 0), t.setRng(n), 0;
        }
    }
    function el(e, t, n) {
        if (e) {
            var r = t ? "nextSibling" : "previousSibling";
            for (e = n ? e : e[r]; e; e = e[r]) if (zn(e) || !af(e)) return e;
        }
    }
    function tl(e, t) {
        return Qc(t) && (t = t.nodeName), !!e.schema.getTextBlockElements()[t.toLowerCase()];
    }
    function nl(e, t, n) {
        return e.schema.isValidChild(t, n);
    }
    function rl(e, n) {
        return (
            y(e)
                ? (e = e(n))
                : V(n) &&
                  (e = e.replace(/%(\w+)/g, function (e, t) {
                      return n[t] || e;
                  })),
            e
        );
    }
    function ol(e, t) {
        return (e = "" + ((e = e || "").nodeName || e)), (t = "" + ((t = t || "").nodeName || t)), e.toLowerCase() === t.toLowerCase();
    }
    function il(e, t, n) {
        return ("color" !== n && "backgroundColor" !== n) || (t = e.toHex(t)), "fontWeight" === n && 700 === t && (t = "bold"), "" + ("fontFamily" === n ? t.replace(/[\'\"]/g, "").replace(/,\s+/g, ",") : t);
    }
    function al(e, t, n) {
        return il(e, e.getStyle(t, n), n);
    }
    function ul(t, e) {
        var n;
        return (
            t.getParent(e, function (e) {
                return (n = t.getStyle(e, "text-decoration")) && "none" !== n;
            }),
            n
        );
    }
    function sl(e, t, n) {
        return e.getParents(t, n, e.getRoot());
    }
    function cl(e, t) {
        return F(e.formatter.get(t), function (t) {
            function o(e) {
                return 1 < e.length && "%" === e.charAt(0);
            }
            return F(["styles", "attributes"], function (e) {
                return ue(t, e).exists(function (e) {
                    var n, r;
                    return F(
                        S(e)
                            ? e
                            : ((n = u),
                              (r = []),
                              ne(e, function (e, t) {
                                  r.push(n(e, t));
                              }),
                              r),
                        o
                    );
                });
            });
        });
    }
    function ll(e) {
        return se(e, "block");
    }
    function fl(e) {
        return se(e, "selector");
    }
    function dl(e) {
        return se(e, "inline");
    }
    function ml(e) {
        return fl(e) && !1 !== e.expand && !dl(e);
    }
    function gl(e, t) {
        for (var n = t; n; ) {
            if (zn(n) && e.getContentEditable(n)) return "false" === e.getContentEditable(n) ? n : t;
            n = n.parentNode;
        }
        return t;
    }
    function pl(e, t, n, r) {
        for (var o = t.data, i = n; e ? 0 <= i : i < o.length; e ? i-- : i++) if (r(o.charAt(i))) return e ? i + 1 : i;
        return -1;
    }
    function hl(e, t, n) {
        return pl(e, t, n, function (e) {
            return of(e) || Gc(e);
        });
    }
    function vl(e, t, n) {
        return pl(e, t, n, Jc);
    }
    function bl(i, e, t, n, a, r) {
        function o(e, t, n) {
            var r = Nu(i),
                o = a ? r.backwards : r.forwards;
            return ve.from(
                o(
                    e,
                    t,
                    function (e, t) {
                        return uf(e.parentNode) ? -1 : n(a, (u = e), t);
                    },
                    s
                )
            );
        }
        var u,
            s = i.getParent(t, i.isBlock) || e;
        return o(t, n, hl)
            .bind(function (e) {
                return r ? o(e.container, e.offset + (a ? -1 : 0), vl) : ve.some(e);
            })
            .orThunk(function () {
                return u ? ve.some({ container: u, offset: a ? 0 : u.length }) : ve.none();
            });
    }
    function yl(e, t, n, r, o) {
        jn(r) && Pe(r.data) && r[o] && (r = r[o]);
        for (var i = sf(e, r), a = 0; a < i.length; a++)
            for (var u = 0; u < t.length; u++) {
                var s = t[u];
                if ((!V(s.collapsed) || s.collapsed === n.collapsed) && fl(s) && e.is(i[a], s.selector)) return i[a];
            }
        return r;
    }
    function Cl(t, e, n, r) {
        var o,
            i = n,
            a = t.dom,
            u = a.getRoot(),
            s = e[0];
        if (
            ((i = ll(s) ? (s.wrapper ? null : a.getParent(n, s.block, u)) : i) ||
                ((o = a.getParent(n, "LI,TD,TH")),
                (i = a.getParent(
                    jn(n) ? n.parentNode : n,
                    function (e) {
                        return e !== u && lf(t, e);
                    },
                    o
                ))),
            !(i = (i && ll(s) && s.wrapper && sf(a, i, "ul,ol").reverse()[0]) || i))
        )
            for (i = n; i[r] && !a.isBlock(i[r]) && !ol((i = i[r]), "br"); );
        return i || n;
    }
    function xl(e, t, n, r, o) {
        var i,
            a = n,
            u = o ? "previousSibling" : "nextSibling",
            s = e.getRoot();
        if (jn(n) && !cf(n) && (o ? 0 < r : r < n.data.length)) return n;
        for (;;) {
            if (!t[0].block_expand && e.isBlock(a)) return a;
            for (var c = a[u]; c; c = c[u]) {
                var l = jn(c) && !ff(e, s, c, u);
                if (!uf(c) && (!Wn((i = c)) || !i.getAttribute("data-mce-bogus") || i.nextSibling) && !cf(c, l)) return a;
            }
            if (a === s || a.parentNode === s) {
                n = a;
                break;
            }
            a = a.parentNode;
        }
        return n;
    }
    function wl(e) {
        return uf(e.parentNode) || uf(e);
    }
    function Sl(e, t, n, r) {
        void 0 === r && (r = !1);
        var o = t.startContainer,
            i = t.startOffset,
            a = t.endContainer,
            u = t.endOffset,
            s = e.dom,
            c = n[0];
        return (
            zn(o) && o.hasChildNodes() && ((o = Bu(o, i)), jn(o) && (i = 0)),
            zn(a) && a.hasChildNodes() && ((a = Bu(a, t.collapsed ? u : u - 1)), jn(a) && (u = a.nodeValue.length)),
            (o = gl(s, o)),
            (a = gl(s, a)),
            wl(o) && ((o = uf(o) ? o : o.parentNode), (o = t.collapsed ? o.previousSibling || o : o.nextSibling || o), jn(o) && (i = t.collapsed ? o.length : 0)),
            wl(a) && ((a = uf(a) ? a : a.parentNode), (a = t.collapsed ? a.nextSibling || a : a.previousSibling || a), jn(a) && (u = t.collapsed ? 0 : a.length)),
            t.collapsed &&
                (bl(s, e.getBody(), o, i, !0, r).each(function (e) {
                    var t = e.container,
                        n = e.offset;
                    (o = t), (i = n);
                }),
                bl(s, e.getBody(), a, u, !1, r).each(function (e) {
                    var t = e.container,
                        n = e.offset;
                    (a = t), (u = n);
                })),
            (dl(c) || c.block_expand) && ((dl(c) && jn(o) && 0 !== i) || (o = xl(s, n, o, i, !0)), (dl(c) && jn(a) && u !== a.nodeValue.length) || (a = xl(s, n, a, u, !1))),
            ml(c) && ((o = yl(s, n, t, o, "previousSibling")), (a = yl(s, n, t, a, "nextSibling"))),
            (ll(c) || fl(c)) && ((o = Cl(e, n, o, "previousSibling")), (a = Cl(e, n, a, "nextSibling")), ll(c) && (s.isBlock(o) || (o = xl(s, n, o, i, !0)), s.isBlock(a) || (a = xl(s, n, a, u, !1)))),
            zn(o) && ((i = s.nodeIndex(o)), (o = o.parentNode)),
            zn(a) && ((u = s.nodeIndex(a) + 1), (a = a.parentNode)),
            { startContainer: o, startOffset: i, endContainer: a, endOffset: u }
        );
    }
    function El(n, e, u) {
        function s(e) {
            var t = e[0];
            jn(t) && t === i && o >= t.data.length && e.splice(0, 1);
            var n = e[e.length - 1];
            return 0 === a && 0 < e.length && n === l && jn(n) && e.splice(e.length - 1, 1), e;
        }
        function c(e, t, n) {
            for (var r = []; e && e !== n; e = e[t]) r.push(e);
            return r;
        }
        function t(e, t) {
            return n.getParent(
                e,
                function (e) {
                    return e.parentNode === t;
                },
                t
            );
        }
        function r(e, t, n) {
            var r = n ? "nextSibling" : "previousSibling",
                o = e;
            for (o.parentNode; o && o !== t; o = i) {
                var i = o.parentNode,
                    a = c(o === e ? o : o[r], r);
                a.length && (n || a.reverse(), u(s(a)));
            }
        }
        var o = e.startOffset,
            i = Bu(e.startContainer, o),
            a = e.endOffset,
            l = Bu(e.endContainer, a - 1);
        if (i === l) return u(s([i]));
        var f = n.findCommonAncestor(i, l);
        if (n.isChildOf(i, l)) return r(i, f, !0);
        if (n.isChildOf(l, i)) return r(l, f);
        var d = t(i, f) || i,
            m = t(l, f) || l;
        r(i, d, !0);
        var g = c(d === i ? d : d.nextSibling, "nextSibling", m === l ? m.nextSibling : m);
        g.length && u(s(g)), r(l, m);
    }
    function Nl(e) {
        var t = [];
        if (e) for (var n = 0; n < e.rangeCount; n++) t.push(e.getRangeAt(n));
        return t;
    }
    function kl(e, t) {
        var n = hu(t, "td[data-mce-selected],th[data-mce-selected]");
        return 0 < n.length
            ? n
            : U(
                  H(e, function (e) {
                      var t = Ou(e);
                      return t ? [Nt.fromDom(t)] : [];
                  }),
                  ho
              );
    }
    function _l(e) {
        return kl(Nl(e.selection.getSel()), Nt.fromDom(e.getBody()));
    }
    function Al(e, t) {
        return hr(e, "table", t);
    }
    function Rl(o, e) {
        return dn(
            ((r = e.startContainer), (i = e.startOffset), jn(r) ? (0 === i ? ve.some(Nt.fromDom(r)) : ve.none()) : ve.from(r.childNodes[i]).map(Nt.fromDom)),
            ((t = e.endContainer), (n = e.endOffset), jn(t) ? (n === t.data.length ? ve.some(Nt.fromDom(t)) : ve.none()) : ve.from(t.childNodes[n - 1]).map(Nt.fromDom)),
            function (e, t) {
                var n = M(df(o), A(je, e)),
                    r = M(mf(o), A(je, t));
                return n.isSome() && r.isSome();
            }
        ).getOr(!1);
        var t, n, r, i;
    }
    function Dl(e, t, n, r) {
        var o = n,
            i = new Rr(n, o),
            a = ae(e.schema.getMoveCaretBeforeOnEnterElements(), function (e, t) {
                return !D(["td", "th", "table"], t.toLowerCase());
            });
        do {
            if (jn(n) && 0 !== Et.trim(n.nodeValue).length) return r ? t.setStart(n, 0) : t.setEnd(n, n.nodeValue.length), 0;
            if (a[n.nodeName]) return r ? t.setStartBefore(n) : "BR" === n.nodeName ? t.setEndBefore(n) : t.setEndAfter(n), 0;
        } while ((n = r ? i.next() : i.prev()));
        "BODY" === o.nodeName && (r ? t.setStart(o, 0) : t.setEnd(o, o.childNodes.length));
    }
    function Tl(e) {
        var t = e.selection.getSel();
        return t && 0 < t.rangeCount;
    }
    function Ol(r, o) {
        var e = _l(r);
        0 < e.length
            ? Y(e, function (e) {
                  var t = e.dom,
                      n = r.dom.createRng();
                  n.setStartBefore(t), n.setEndAfter(t), o(n, !0);
              })
            : o(r.selection.getRng(), !1);
    }
    function Bl(e, t, n) {
        var r = Cs(e, t);
        n(r), e.moveToBookmark(r);
    }
    function Pl(e) {
        return gf.get(e);
    }
    function Ll(e, t, n, r) {
        var o = t.uid,
            i = void 0 === o ? yu("mce-annotation") : o,
            a = (function (e, t) {
                var n = {};
                for (o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
                if (null != e && "function" == typeof Object.getOwnPropertySymbols)
                    for (var r = 0, o = Object.getOwnPropertySymbols(e); r < o.length; r++) t.indexOf(o[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[r]) && (n[o[r]] = e[o[r]]);
                return n;
            })(t, ["uid"]),
            u = Nt.fromTag("span", e);
        gu(u, ju()), pn(u, "" + qu(), i), pn(u, "" + Vu(), n);
        var s,
            c = r(i, a),
            l = c.attributes,
            f = c.classes,
            d = void 0 === f ? [] : f;
        return (
            hn(u, void 0 === l ? {} : l),
            (s = u),
            Y(d, function (e) {
                gu(s, e);
            }),
            u
        );
    }
    function Il(u, e, t, n, r) {
        function s() {
            d.clear();
        }
        function c(e) {
            Y(e, o);
        }
        var l = [],
            f = Ll(u.getDoc(), r, t, n),
            d = cu(),
            o = function (e) {
                var t, n, r, o, i, a;
                switch (
                    ((r = u),
                    (i = "span"),
                    (a = kt((o = e))),
                    Ot(o).fold(
                        function () {
                            return "skipping";
                        },
                        function (e) {
                            return "br" === a || (_n((n = o)) && Pl(n) === Co) ? "valid" : kn((t = o)) && pu(t, ju()) ? "existing" : zc(o.dom) ? "caret" : nl(r, i, a) && nl(r, kt(e), i) ? "valid" : "invalid-child";
                            var t, n;
                        }
                    ))
                ) {
                    case "invalid-child":
                        s(), c(Dn(e)), s();
                        break;
                    case "valid":
                        qt(
                            (t = e),
                            (n = d.get().getOrThunk(function () {
                                var e = wu(f);
                                return l.push(e), d.set(e), e;
                            }))
                        ),
                            Pn(n, t);
                }
            };
        return (
            El(u.dom, e, function (e) {
                s(), c(T(e, Nt.fromDom));
            }),
            l
        );
    }
    function Ml(o) {
        var n,
            e,
            r,
            i =
                ((n = {}),
                {
                    register: function (e, t) {
                        n[e] = { name: e, settings: t };
                    },
                    lookup: function (e) {
                        return ue(n, e).map(function (e) {
                            return e.settings;
                        });
                    },
                });
        (r = i),
            (e = o).on("init", function () {
                e.serializer.addNodeFilter("span", function (e) {
                    Y(e, function (t) {
                        ve.from(t.attr(Vu()))
                            .bind(r.lookup)
                            .each(function (e) {
                                !1 === e.persistent && t.unwrap();
                            });
                    });
                });
            });
        var a = bu(o);
        return {
            register: function (e, t) {
                i.register(e, t);
            },
            annotate: function (t, n) {
                i.lookup(t).each(function (e) {
                    var u, s, c, l;
                    (s = t),
                        (c = e),
                        (l = n),
                        (u = o).undoManager.transact(function () {
                            var e,
                                t,
                                n,
                                r,
                                o = u.selection,
                                i = o.getRng(),
                                a = 0 < _l(u).length;
                            i.collapsed && !a && ((n = Sl((e = u), (t = i), [{ inline: "span" }])), t.setStart(n.startContainer, n.startOffset), t.setEnd(n.endContainer, n.endOffset), e.selection.setRng(t)),
                                o.getRng().collapsed && !a
                                    ? (Cu((r = Ll(u.getDoc(), l, s, c.decorate)), yo), o.getRng().insertNode(r.dom), o.select(r.dom))
                                    : Bl(o, !1, function () {
                                          Ol(u, function (e) {
                                              Il(u, e, s, c.decorate, l);
                                          });
                                      });
                        });
                });
            },
            annotationChanged: function (e, t) {
                a.addListener(e, t);
            },
            remove: function (e) {
                vu(o, ve.some(e)).each(function (e) {
                    Y(e.elements, Yt);
                });
            },
            getAll: function (e) {
                var t, n, r;
                return re(
                    ((t = e),
                    (n = hu(Nt.fromDom(o.getBody()), "[" + Vu() + '="' + t + '"]')),
                    (r = {}),
                    Y(n, function (e) {
                        var t = vn(e, qu()),
                            n = ue(r, t).getOr([]);
                        r[t] = n.concat([e]);
                    }),
                    r),
                    function (e) {
                        return T(e, function (e) {
                            return e.dom;
                        });
                    }
                );
            },
        };
    }
    function Fl(e) {
        return { getBookmark: A(rf, e), moveToBookmark: A(Xc, e) };
    }
    ((ac = ic = ic || {})[(ac.Backwards = -1)] = "Backwards"), (ac[(ac.Forwards = 1)] = "Forwards");
    function Ul(e) {
        return (
            Oo(e) ||
            (!!Lo((t = e)) &&
                !0 !==
                    L(
                        xe(t.getElementsByTagName("*")),
                        function (e, t) {
                            return e || _o(t);
                        },
                        !1
                    ))
        );
        var t;
    }
    var zl,
        Hl,
        jl,
        Vl = Yn,
        ql = jn,
        $l = zn,
        Wl = Wn,
        Kl = jr,
        Xl = Vr,
        Yl = function (e, t, n) {
            var r, o, i;
            if (!$l(n) || !t) return null;
            if (t.isEqual(as.after(n)) && n.lastChild) {
                if (((i = as.after(n.lastChild)), e < 0 && Kl(n.lastChild) && $l(n.lastChild))) return Wl(n.lastChild) ? as.before(n.lastChild) : i;
            } else i = t;
            var a,
                u,
                s,
                c = i.container(),
                l = i.offset();
            if (ql(c)) {
                if (e < 0 && 0 < l) return as(c, --l);
                if (0 < e && l < c.length) return as(c, ++l);
                r = c;
            } else {
                if (e < 0 && 0 < l && ((f = Oc(c, l - 1)), Kl(f))) return !Ul(f) && (o = Ks(f, e, Xl, f)) ? (ql(o) ? as(o, o.data.length) : as.after(o)) : ql(f) ? as(f, f.data.length) : as.before(f);
                if (0 < e && l < c.childNodes.length && ((f = Oc(c, l)), Kl(f)))
                    return Wl(f)
                        ? ((a = n), (s = (u = f).nextSibling) && Kl(s) ? (ql(s) ? as(s, 0) : as.before(s)) : Yl(ic.Forwards, as.after(u), a))
                        : !Ul(f) && (o = Ks(f, e, Xl, f))
                        ? ql(o)
                            ? as(o, 0)
                            : as.before(o)
                        : ql(f)
                        ? as(f, 0)
                        : as.after(f);
                r = f || i.getNode();
            }
            if (((0 < e && i.isAtEnd()) || (e < 0 && i.isAtStart())) && ((r = Ks(r, e, w, n, !0)), Xl(r, n))) return Bc(e, r);
            var f = Ks(r, e, Xl, n),
                d = pe(
                    U(
                        (function (e, t) {
                            for (var n = []; e && e !== t; ) n.push(e), (e = e.parentNode);
                            return n;
                        })(c, n),
                        Vl
                    )
                );
            return !d || (f && d.contains(f)) ? (f ? Bc(e, f) : null) : 0 < e ? as.after(d) : as.before(d);
        },
        Gl = function (e, t, n) {
            var r = Pc(t);
            return ve.from(e ? r.next(n) : r.prev(n));
        },
        Jl = function (t, n, e, r) {
            return Fc(t, n, e).bind(function (e) {
                return r(e) ? Jl(t, n, e, r) : ve.some(e);
            });
        },
        Ql = A(Gl, !0),
        Zl = A(Gl, !1),
        ef = A(Uc, !0),
        tf = A(Uc, !1),
        nf = "_mce_caret",
        rf = function (e, t, n) {
            return 2 === t ? bs(wo, n, e) : 3 === t ? ((o = (r = e).getRng()), { start: fs(r.dom.getRoot(), as.fromRangeStart(o)), end: fs(r.dom.getRoot(), as.fromRangeEnd(o)) }) : t ? { rng: e.getRng() } : Cs(e, !1);
            var r, o;
        },
        of =
            ((zl = yo),
            function (e) {
                return zl === e;
            }),
        af = function (e, t) {
            return void 0 === t && (t = !1), !(!V(e) || !jn(e)) && qr(t ? e.data.replace(/ /g, "\xa0") : e.data);
        },
        uf = Yc,
        sf = sl,
        cf = af,
        lf = tl,
        ff = function (e, t, n, r) {
            var o = n.parentNode;
            return !V(n[r]) && (!(o !== t && !K(o) && !e.isBlock(o)) || ff(e, t, o, r));
        },
        df = function (t) {
            return Ft(t).fold(J([t]), function (e) {
                return [t].concat(df(e));
            });
        },
        mf = function (t) {
            return Ut(t).fold(J([t]), function (e) {
                return "br" === kt(e)
                    ? Bt(e)
                          .map(function (e) {
                              return [t].concat(mf(e));
                          })
                          .getOr([])
                    : [t].concat(mf(e));
            });
        },
        gf =
            ((Hl = _n),
            {
                get: function (e) {
                    if (!Hl(e)) throw new Error("Can only get text value of a text node");
                    return jl(e).getOr("");
                },
                getOption: (jl = function (e) {
                    return Hl(e) ? ve.from(e.dom.nodeValue) : ve.none();
                }),
                set: function (e, t) {
                    if (!Hl(e)) throw new Error("Can only set raw text value of a text node");
                    e.dom.nodeValue = t;
                },
            });
    function pf(e, t) {
        for (; t && t !== e; ) {
            if (Xn(t) || Yn(t)) return t;
            t = t.parentNode;
        }
        return null;
    }
    function hf(t, n, e) {
        if (!e.collapsed) {
            if (xt.browser.isIE() && e.startOffset === e.endOffset - 1 && e.startContainer === e.endContainer) {
                var r = e.startContainer.childNodes[e.startOffset];
                if (zn(r))
                    return F(r.getClientRects(), function (e) {
                        return Tu(e, t, n);
                    });
            }
            return F(e.getClientRects(), function (e) {
                return Tu(e, t, n);
            });
        }
    }
    function vf(e, t, n) {
        return e.fire(t, n);
    }
    function bf(e, t, n, r) {
        return e.fire("FormatApply", { format: t, node: n, vars: r });
    }
    function yf(e, t, n, r) {
        return e.fire("FormatRemove", { format: t, node: n, vars: r });
    }
    function Cf(r, l) {
        function c(e) {
            return e && ("IMG" === e.nodeName || l.dom.is(e, "figure.image"));
        }
        function f(e) {
            return Jn(e) || T.hasClass(e, "mce-preview-object");
        }
        function n(e) {
            var t = e.target;
            !(function (e, t) {
                if ("longpress" !== e.type && 0 !== e.type.indexOf("touch")) return c(e.target) && !hf(e.clientX, e.clientY, t);
                var n = e.touches[0];
                return c(e.target) && !hf(n.clientX, n.clientY, t);
            })(e, l.selection.getRng()) ||
                e.isDefaultPrevented() ||
                l.selection.select(t);
        }
        function d(e) {
            return T.is(e, "figure.image") ? [e.querySelector("img")] : T.hasClass(e, "mce-preview-object") && V(e.firstElementChild) ? [e, e.firstElementChild] : [e];
        }
        function i(e) {
            var t = Ts(l);
            return !!t && "false" !== e.getAttribute("data-mce-resize") && e !== l.getBody() && (T.hasClass(e, "mce-preview-object") ? ze(Nt.fromDom(e.firstElementChild), t) : ze(Nt.fromDom(e), t));
        }
        function a(e, t, n) {
            V(n) &&
                Y(d(e), function (e) {
                    e.style[t] || !l.schema.isValid(e.nodeName.toLowerCase(), t) ? T.setStyle(e, t, n) : T.setAttrib(e, t, "" + n);
                });
        }
        function m(e, t, n) {
            a(e, "width", t), a(e, "height", n);
        }
        function g(e) {
            var t,
                n,
                r,
                o,
                i,
                a,
                u = e.screenX - C,
                s = e.screenY - x;
            (k = u * b[2] + w),
                (_ = s * b[3] + S),
                (k = k < 5 ? 5 : k),
                (_ = _ < 5 ? 5 : _),
                ((c(p) || f(p)) && !1 !== l.getParam("resize_img_proportional", !0, "boolean") ? !Bf.modifierPressed(e) : Bf.modifierPressed(e)) && (L(u) > L(s) ? ((_ = I(k * E)), (k = I(_ / E))) : ((k = I(_ / E)), (_ = I(k * E)))),
                m(h, k, _),
                (t = b.startPos.x + u),
                (n = b.startPos.y + s),
                T.setStyles(v, { left: (t = 0 < t ? t : 0), top: (n = 0 < n ? n : 0), display: "block" }),
                (v.innerHTML = k + " &times; " + _),
                b[2] < 0 && h.clientWidth <= k && T.setStyle(h, "left", void 0 + (w - k)),
                b[3] < 0 && h.clientHeight <= _ && T.setStyle(h, "top", void 0 + (S - _)),
                (u = M.scrollWidth - A) + (s = M.scrollHeight - R) != 0 && T.setStyles(v, { left: t - u, top: n - s }),
                N || ((r = p), (o = w), (i = S), (a = "corner-" + b.name), l.fire("ObjectResizeStart", { target: r, width: o, height: i, origin: a }), (N = !0));
        }
        function o(e) {
            function t(e, t) {
                if (e)
                    do {
                        if (e === t) return 1;
                    } while ((e = e.parentNode));
            }
            var n;
            N ||
                l.removed ||
                (O(T.select("img[data-mce-selected],hr[data-mce-selected]"), function (e) {
                    e.removeAttribute(D);
                }),
                (n = "mousedown" === e.type ? e.target : r.getNode()),
                t((n = T.$(n).closest("table,img,figure.image,hr,video,span.mce-preview-object")[0]), M) && (s(), t(r.getStart(!0), n) && t(r.getEnd(!0), n)) ? z(n) : H());
        }
        function u(e) {
            return Pf(pf(l.getBody(), e));
        }
        function s() {
            try {
                l.getDoc().execCommand("enableObjectResizing", !1, "false");
            } catch (e) {}
        }
        var p,
            h,
            v,
            b,
            y,
            C,
            x,
            w,
            S,
            E,
            N,
            k,
            _,
            A,
            R,
            D = "data-mce-selected",
            T = l.dom,
            O = Et.each,
            B = l.getDoc(),
            P = document,
            L = Math.abs,
            I = Math.round,
            M = l.getBody(),
            F = { nw: [0, 0, -1, -1], ne: [1, 0, 1, -1], se: [1, 1, 1, 1], sw: [0, 1, -1, 1] },
            U = function () {
                var e,
                    t,
                    n,
                    r,
                    o = N;
                (N = !1),
                    o && (a(p, "width", k), a(p, "height", _)),
                    T.unbind(B, "mousemove", g),
                    T.unbind(B, "mouseup", U),
                    P !== B && (T.unbind(P, "mousemove", g), T.unbind(P, "mouseup", U)),
                    T.remove(h),
                    T.remove(v),
                    T.remove(y),
                    z(p),
                    o && ((e = p), (t = k), (n = _), (r = "corner-" + b.name), l.fire("ObjectResized", { target: e, width: t, height: n, origin: r }), T.setAttrib(p, "style", T.getAttrib(p, "style"))),
                    l.nodeChanged();
            },
            z = function (e) {
                j();
                var t = T.getPos(e, M),
                    a = t.x,
                    u = t.y,
                    n = e.getBoundingClientRect(),
                    s = n.width || n.right - n.left,
                    c = n.height || n.bottom - n.top;
                p !== e && (H(), (p = e), (k = _ = 0));
                var r = l.fire("ObjectSelected", { target: e }),
                    o = T.getAttrib(p, D, "1");
                i(e) && !r.isDefaultPrevented()
                    ? O(F, function (o, i) {
                          var e = T.get("mceResizeHandle" + i);
                          e && T.remove(e),
                              (e = T.add(M, "div", { id: "mceResizeHandle" + i, "data-mce-bogus": "all", class: "mce-resizehandle", unselectable: !0, style: "cursor:" + i + "-resize; margin:0; padding:0" })),
                              11 === xt.ie && (e.contentEditable = !1),
                              T.bind(e, "mousedown", function (e) {
                                  var t, n, r;
                                  e.stopImmediatePropagation(),
                                      e.preventDefault(),
                                      (t = e),
                                      (r = d(p)[0]),
                                      (C = t.screenX),
                                      (x = t.screenY),
                                      (w = r.clientWidth),
                                      (S = r.clientHeight),
                                      (E = S / w),
                                      ((b = o).name = i),
                                      (b.startPos = { x: s * o[0] + a, y: c * o[1] + u }),
                                      (A = M.scrollWidth),
                                      (R = M.scrollHeight),
                                      (y = T.add(M, "div", { class: "mce-resize-backdrop", "data-mce-bogus": "all" })),
                                      T.setStyles(y, { position: "fixed", left: "0", top: "0", width: "100%", height: "100%" }),
                                      (h = f((n = p)) ? T.create("img", { src: xt.transparentSrc }) : n.cloneNode(!0)),
                                      T.addClass(h, "mce-clonedresizable"),
                                      T.setAttrib(h, "data-mce-bogus", "all"),
                                      (h.contentEditable = "false"),
                                      T.setStyles(h, { left: a, top: u, margin: 0 }),
                                      m(h, s, c),
                                      h.removeAttribute(D),
                                      M.appendChild(h),
                                      T.bind(B, "mousemove", g),
                                      T.bind(B, "mouseup", U),
                                      P !== B && (T.bind(P, "mousemove", g), T.bind(P, "mouseup", U)),
                                      (v = T.add(M, "div", { class: "mce-resize-helper", "data-mce-bogus": "all" }, w + " &times; " + S));
                              }),
                              (o.elm = e),
                              T.setStyles(e, { left: s * o[0] + a - e.offsetWidth / 2, top: c * o[1] + u - e.offsetHeight / 2 });
                      })
                    : H(),
                    T.getAttrib(p, D) || p.setAttribute(D, o);
            },
            H = function () {
                j(),
                    p && p.removeAttribute(D),
                    ne(F, function (e, t) {
                        var n = T.get("mceResizeHandle" + t);
                        n && (T.unbind(n), T.remove(n));
                    });
            },
            j = function () {
                ne(F, function (e) {
                    e.elm && (T.unbind(e.elm), delete e.elm);
                });
            };
        return (
            l.on("init", function () {
                var e;
                s(),
                    (xt.browser.isIE() || xt.browser.isEdge()) &&
                        (l.on("mousedown click", function (e) {
                            var t = e.target,
                                n = t.nodeName;
                            N || !/^(TABLE|IMG|HR)$/.test(n) || u(t) || (2 !== e.button && l.selection.select(t, "TABLE" === n), "mousedown" === e.type && l.nodeChanged());
                        }),
                        T.bind(
                            M,
                            "mscontrolselect",
                            (e = function (e) {
                                function t(e) {
                                    _r.setEditorTimeout(l, function () {
                                        return l.selection.select(e);
                                    });
                                }
                                if (u(e.target) || Jn(e.target)) return e.preventDefault(), void t(e.target);
                                /^(TABLE|IMG|HR)$/.test(e.target.nodeName) && (e.preventDefault(), "IMG" === e.target.tagName && t(e.target));
                            })
                        ),
                        l.on("remove", function () {
                            return T.unbind(M, "mscontrolselect", e);
                        }));
                var t = _r.throttle(function (e) {
                    l.composing || o(e);
                });
                l.on("nodechange ResizeEditor ResizeWindow ResizeContent drop FullscreenStateChanged", t),
                    l.on("keyup compositionend", function (e) {
                        p && "TABLE" === p.nodeName && t(e);
                    }),
                    l.on("hide blur", H),
                    l.on("contextmenu longpress", n, !0);
            }),
            l.on("remove", j),
            {
                isResizable: i,
                showResizeRect: z,
                hideResizeRect: H,
                updateResizeRect: o,
                destroy: function () {
                    p = h = y = null;
                },
            }
        );
    }
    function xf(e) {
        return Xn(e) || Yn(e);
    }
    function wf(t, n, r) {
        var o,
            e,
            i,
            a,
            u,
            s = r;
        if (s.caretPositionFromPoint) (e = s.caretPositionFromPoint(t, n)) && ((o = r.createRange()).setStart(e.offsetNode, e.offset), o.collapse(!0));
        else if (s.caretRangeFromPoint) o = s.caretRangeFromPoint(t, n);
        else if (s.body.createTextRange) {
            o = s.body.createTextRange();
            try {
                o.moveToPoint(t, n), o.collapse(!0);
            } catch (e) {
                o = (function (e, n, t) {
                    var r,
                        o = t.elementFromPoint(e, n),
                        i = t.body.createTextRange();
                    if (
                        ((o && "HTML" !== o.tagName) || (o = t.body),
                        i.moveToElementText(o),
                        0 <
                            (r = (r = Et.toArray(i.getClientRects())).sort(function (e, t) {
                                return (e = Math.abs(Math.max(e.top - n, e.bottom - n))) - Math.abs(Math.max(t.top - n, t.bottom - n));
                            })).length)
                    ) {
                        n = (r[0].bottom + r[0].top) / 2;
                        try {
                            return i.moveToPoint(e, n), i.collapse(!0), i;
                        } catch (e) {}
                    }
                    return null;
                })(t, n, r);
            }
            return (
                (i = o),
                (a = r.body),
                (u = i && i.parentElement ? i.parentElement() : null),
                Yn(
                    (function (e, t, n) {
                        for (; e && e !== t; ) {
                            if (n(e)) return e;
                            e = e.parentNode;
                        }
                        return null;
                    })(u, a, xf)
                )
                    ? null
                    : i
            );
        }
        return o;
    }
    function Sf(e, t) {
        return e && t && e.startContainer === t.startContainer && e.startOffset === t.startOffset && e.endContainer === t.endContainer && e.endOffset === t.endOffset;
    }
    function Ef(e, t, n) {
        return (
            null !==
            (function (e, t, n) {
                for (; e && e !== t; ) {
                    if (n(e)) return e;
                    e = e.parentNode;
                }
                return null;
            })(e, t, n)
        );
    }
    function Nf(e) {
        return e && "TABLE" === e.nodeName;
    }
    function kf(e, t, n) {
        for (var r = new Rr(t, e.getParent(t.parentNode, e.isBlock) || e.getRoot()); (t = r[n ? "prev" : "next"]()); ) if (Wn(t)) return 1;
    }
    function _f(e, t, n, r, o) {
        var i,
            a,
            u = e.getRoot(),
            s = e.schema.getNonEmptyElements(),
            c = e.getParent(o.parentNode, e.isBlock) || u;
        if (r && Wn(o) && t && e.isEmpty(c)) return ve.some(as(o.parentNode, e.nodeIndex(o)));
        for (var l, f, d = new Rr(o, c); (a = d[r ? "prev" : "next"]()); ) {
            if ("false" === e.getContentEditableParent(a) || ((f = u), Ir((l = a)) && !1 === Ef(l, f, zc))) return ve.none();
            if (jn(a) && 0 < a.nodeValue.length)
                return !1 ===
                    Ef(a, u, function (e) {
                        return "A" === e.nodeName;
                    })
                    ? ve.some(as(a, r ? a.nodeValue.length : 0))
                    : ve.none();
            if (e.isBlock(a) || s[a.nodeName.toLowerCase()]) return ve.none();
            i = a;
        }
        return n && i ? ve.some(as(i, 0)) : ve.none();
    }
    function Af(e, t, n, r) {
        var o,
            i = e.getRoot(),
            a = !1,
            u = r[(n ? "start" : "end") + "Container"],
            s = r[(n ? "start" : "end") + "Offset"],
            c = zn(u) && s === u.childNodes.length,
            l = e.schema.getNonEmptyElements(),
            f = n;
        if (Ir(u)) return ve.none();
        if ((zn(u) && s > u.childNodes.length - 1 && (f = !1), qn(u) && ((u = i), (s = 0)), u === i)) {
            if (f && (d = u.childNodes[0 < s ? s - 1 : 0])) {
                if (Ir(d)) return ve.none();
                if (l[d.nodeName] || Nf(d)) return ve.none();
            }
            if (u.hasChildNodes()) {
                if (((s = Math.min(!f && 0 < s ? s - 1 : s, u.childNodes.length - 1)), (u = u.childNodes[s]), (s = jn(u) && c ? u.data.length : 0), !t && u === i.lastChild && Nf(u))) return ve.none();
                if (
                    (function (e, t) {
                        for (; t && t !== e; ) {
                            if (Yn(t)) return 1;
                            t = t.parentNode;
                        }
                    })(i, u) ||
                    Ir(u)
                )
                    return ve.none();
                if (u.hasChildNodes() && !1 === Nf(u)) {
                    var d = u,
                        m = new Rr(u, i);
                    do {
                        if (Yn(d) || Ir(d)) {
                            a = !1;
                            break;
                        }
                        if (jn(d) && 0 < d.nodeValue.length) {
                            (s = f ? 0 : d.nodeValue.length), (u = d), (a = !0);
                            break;
                        }
                        if (l[d.nodeName.toLowerCase()] && (!(o = d) || !/^(TD|TH|CAPTION)$/.test(o.nodeName))) {
                            (s = e.nodeIndex(d)), (u = d.parentNode), f || s++, (a = !0);
                            break;
                        }
                    } while ((d = f ? m.next() : m.prev()));
                }
            }
        }
        return (
            t &&
                (jn(u) &&
                    0 === s &&
                    _f(e, c, t, !0, u).each(function (e) {
                        (u = e.container()), (s = e.offset()), (a = !0);
                    }),
                zn(u) &&
                    (!(d = (d = u.childNodes[s]) || u.childNodes[s - 1]) ||
                        !Wn(d) ||
                        (d.previousSibling && "A" === d.previousSibling.nodeName) ||
                        kf(e, d, !1) ||
                        kf(e, d, !0) ||
                        _f(e, c, t, !0, d).each(function (e) {
                            (u = e.container()), (s = e.offset()), (a = !0);
                        }))),
            f &&
                !t &&
                jn(u) &&
                s === u.nodeValue.length &&
                _f(e, c, t, !1, u).each(function (e) {
                    (u = e.container()), (s = e.offset()), (a = !0);
                }),
            a ? ve.some(as(u, s)) : ve.none()
        );
    }
    function Rf(e, t) {
        var n = t.collapsed,
            r = t.cloneRange(),
            o = as.fromRangeStart(t);
        return (
            Af(e, n, !0, r).each(function (e) {
                (n && as.isAbove(o, e)) || r.setStart(e.container(), e.offset());
            }),
            n ||
                Af(e, n, !1, r).each(function (e) {
                    r.setEnd(e.container(), e.offset());
                }),
            n && r.collapse(!0),
            Sf(t, r) ? ve.none() : ve.some(r)
        );
    }
    function Df(e, t) {
        return e.splitText(t);
    }
    function Tf(e) {
        var t = e.startContainer,
            n = e.startOffset,
            r = e.endContainer,
            o = e.endOffset;
        return (
            t === r && jn(t)
                ? 0 < n && n < t.nodeValue.length && ((t = (r = Df(t, n)).previousSibling), n < o ? ((t = r = Df(r, (o -= n)).previousSibling), (o = r.nodeValue.length), (n = 0)) : (o = 0))
                : (jn(t) && 0 < n && n < t.nodeValue.length && ((t = Df(t, n)), (n = 0)), jn(r) && 0 < o && o < r.nodeValue.length && (o = (r = Df(r, o).previousSibling).nodeValue.length)),
            { startContainer: t, startOffset: n, endContainer: r, endOffset: o }
        );
    }
    function Of(n) {
        return {
            walk: function (e, t) {
                return El(n, e, t);
            },
            split: Tf,
            normalize: function (t) {
                return Rf(n, t).fold(R, function (e) {
                    return t.setStart(e.startContainer, e.startOffset), t.setEnd(e.endContainer, e.endOffset), !0;
                });
            },
        };
    }
    Fl.isBookmarkNode = Yc;
    var Bf = {
            BACKSPACE: 8,
            DELETE: 46,
            DOWN: 40,
            ENTER: 13,
            ESC: 27,
            LEFT: 37,
            RIGHT: 39,
            SPACEBAR: 32,
            TAB: 9,
            UP: 38,
            PAGE_UP: 33,
            PAGE_DOWN: 34,
            END: 35,
            HOME: 36,
            modifierPressed: function (e) {
                return e.shiftKey || e.ctrlKey || e.altKey || Bf.metaKeyPressed(e);
            },
            metaKeyPressed: function (e) {
                return xt.mac ? e.metaKey : e.ctrlKey && !e.altKey;
            },
        },
        Pf = Yn;
    (Of.compareRanges = Sf), (Of.getCaretRangeFromPoint = wf), (Of.getSelectedNode = Ou), (Of.getNode = Bu);
    var Lf,
        If,
        Mf =
            ((Lf = "height"),
            (If = function (e) {
                var t = e.dom;
                return In(e) ? t.getBoundingClientRect().height : t.offsetHeight;
            }),
            {
                set: function (e, t) {
                    if (!E(t) && !t.match(/^[0-9]+$/)) throw new Error(Lf + ".set accepts only positive integer values. Value was " + t);
                    var n = e.dom;
                    mn(n) && (n.style[Lf] = t + "px");
                },
                get: Ff,
                getOuter: Ff,
                aggregate: Uf,
                max: function (e, t, n) {
                    var r = Uf(e, n);
                    return r < t ? t - r : 0;
                },
            });
    function Ff(e) {
        var t = If(e);
        if (t <= 0 || null === t) {
            var n = xn(e, Lf);
            return parseFloat(n) || 0;
        }
        return t;
    }
    function Uf(o, e) {
        return L(
            e,
            function (e, t) {
                var n = xn(o, t),
                    r = void 0 === n ? 0 : parseInt(n, 10);
                return isNaN(r) ? e : e + r;
            },
            0
        );
    }
    function zf(e) {
        return "textarea" === kt(e);
    }
    function Hf(e, t) {
        var n = (function (e) {
                var t = e.dom.ownerDocument,
                    n = t.body,
                    r = t.defaultView,
                    o = t.documentElement;
                if (n === e.dom) return Fn(n.offsetLeft, n.offsetTop);
                var i = Gt(null == r ? void 0 : r.pageYOffset, o.scrollTop),
                    a = Gt(null == r ? void 0 : r.pageXOffset, o.scrollLeft),
                    u = Gt(o.clientTop, n.clientTop),
                    s = Gt(o.clientLeft, n.clientLeft);
                return Un(e).translate(a - s, i - u);
            })(e),
            r = Mf.get(e);
        return { element: e, bottom: n.top + r, height: r, pos: n, cleanup: t };
    }
    function jf(n, r, o, i) {
        Rd(
            n,
            function (e, t) {
                return Ad(n, r, o, i);
            },
            o
        );
    }
    function Vf(e, t, n, r, o) {
        var i = { elm: r.element.dom, alignToTop: o };
        e.fire("ScrollIntoView", i).isDefaultPrevented() || (n(t, Jt(t).top, r, o), e.fire("AfterScrollIntoView", i));
    }
    function qf(e, t, n, r) {
        var o = Nt.fromDom(e.getDoc());
        Vf(e, o, n, Hf(Nt.fromDom(t), te), r);
    }
    function $f(e, t, n, r) {
        var o,
            i = e.pos;
        n ? Qt(i.left, i.top, r) : ((o = i.top - t + e.height), Qt(i.left, o, r));
    }
    function Wf(e, t, n, r, o) {
        var i = n + t,
            a = r.pos.top,
            u = r.bottom,
            s = n <= u - a;
        a < t ? $f(r, n, !1 !== o, e) : i < a ? $f(r, n, s ? !1 !== o : !0 === o, e) : i < u && !s && $f(r, n, !0 === o, e);
    }
    function Kf(e, t, n, r) {
        Wf(e, t, e.dom.defaultView.innerHeight, n, r);
    }
    function Xf(e, t, n, r) {
        Wf(e, t, e.dom.defaultView.innerHeight, n, r);
        var o,
            i,
            a,
            u,
            s,
            c,
            l,
            f =
                ((o = n.element),
                (u = Jt(Nt.fromDom(document))),
                (a = (i = _d).owner(o)),
                (s = kd(i, a)),
                (c = Un(o)),
                (l = P(
                    s,
                    function (e, t) {
                        var n = Un(t);
                        return { left: e.left + n.left, top: e.top + n.top };
                    },
                    { left: 0, top: 0 }
                )),
                Fn(l.left + c.left + u.left, l.top + c.top + u.top)),
            d = tn(window);
        f.top < d.y ? Zt(n.element, !1 !== r) : f.top > d.bottom && Zt(n.element, !0 === r);
    }
    function Yf(e, t, n) {
        return jf(e, Kf, t, n);
    }
    function Gf(e, t, n) {
        return qf(e, t, Kf, n);
    }
    function Jf(e, t, n) {
        return jf(e, Xf, t, n);
    }
    function Qf(e, t, n) {
        return qf(e, t, Xf, n);
    }
    function Zf(e, t, n) {
        (e.inline ? Yf : Jf)(e, t, n);
    }
    function ed(e) {
        var t = Bn(e).dom;
        return e.dom === t.activeElement;
    }
    function td(e) {
        return void 0 === e && (e = Nt.fromDom(document)), ve.from(e.dom.activeElement).map(Nt.fromDom);
    }
    function nd(e, t) {
        var n = _n(t) ? Pl(t).length : Dn(t).length + 1;
        return n < e ? n : e < 0 ? 0 : e;
    }
    function rd(e) {
        return Bd.range(e.start, nd(e.soffset, e.start), e.finish, nd(e.foffset, e.finish));
    }
    function od(e, t) {
        return !rn(t.dom) && (Ve(e, t) || je(e, t));
    }
    function id(t) {
        return function (e) {
            return od(t, e.start) && od(t, e.finish);
        };
    }
    function ad(e) {
        return !0 === e.inline || Pd.isIE();
    }
    function ud(e) {
        return Bd.range(Nt.fromDom(e.startContainer), e.startOffset, Nt.fromDom(e.endContainer), e.endOffset);
    }
    function sd(e) {
        var t = document.createRange();
        try {
            return t.setStart(e.start.dom, e.soffset), t.setEnd(e.finish.dom, e.foffset), ve.some(t);
        } catch (e) {
            return ve.none();
        }
    }
    function cd(e) {
        var t,
            n,
            r = ad(e) ? ((t = Nt.fromDom(e.getBody())), ((n = Tt(t).dom.getSelection()) && 0 !== n.rangeCount ? ve.from(n.getRangeAt(0)) : ve.none()).map(ud).filter(id(t))) : ve.none();
        e.bookmark = r.isSome() ? r : e.bookmark;
    }
    function ld(n) {
        return (n.bookmark || ve.none())
            .bind(function (e) {
                return (t = Nt.fromDom(n.getBody())), ve.from(e).filter(id(t)).map(rd);
                var t;
            })
            .bind(sd);
    }
    function fd(u) {
        var s = lu(function () {
            cd(u);
        }, 0);
        u.on("init", function () {
            function e() {
                n.throttle();
            }
            var t, n, r, o, i, a;
            u.inline &&
                ((t = u),
                (n = s),
                Ja.DOM.bind(document, "mouseup", e),
                t.on("remove", function () {
                    Ja.DOM.unbind(document, "mouseup", e);
                })),
                (r = u),
                (o = s),
                dt().browser.isIE()
                    ? (a = r).on("focusout", function () {
                          cd(a);
                      })
                    : ((i = o),
                      r.on("mouseup touchend", function (e) {
                          i.throttle();
                      })),
                r.on("keyup NodeChange", function (e) {
                    ("nodechange" === e.type && e.selectionChange) || cd(r);
                });
        }),
            u.on("remove", function () {
                s.cancel();
            });
    }
    function dd(t, e) {
        var n = t.getParam("custom_ui_selector", "", "string");
        return (
            null !==
            Id.getParent(e, function (e) {
                return Ld.isEditorUIElement(e) || (!!n && t.dom.is(e, n));
            })
        );
    }
    function md(n, e) {
        var t = e.editor;
        fd(t),
            t.on("focusin", function () {
                var e = n.focusedEditor;
                e !== t && (e && e.fire("blur", { focusedEditor: t }), n.setActive(t), (n.focusedEditor = t).fire("focus", { blurredEditor: e }), t.focus(!0));
            }),
            t.on("focusout", function () {
                _r.setEditorTimeout(t, function () {
                    var e = n.focusedEditor;
                    dd(
                        t,
                        (function (e) {
                            try {
                                return td(Bn(Nt.fromDom(e.getElement()))).fold(
                                    function () {
                                        return document.body;
                                    },
                                    function (e) {
                                        return e.dom;
                                    }
                                );
                            } catch (e) {
                                return document.body;
                            }
                        })(t)
                    ) ||
                        e !== t ||
                        (t.fire("blur", { focusedEditor: null }), (n.focusedEditor = null));
                });
            }),
            Nd ||
                ((Nd = function (e) {
                    var t = n.activeEditor;
                    t &&
                        !(function (e) {
                            if (On() && V(e.target)) {
                                var t = Nt.fromDom(e.target);
                                if (kn(t) && V(t.dom.shadowRoot) && e.composed && e.composedPath) {
                                    var n = e.composedPath();
                                    if (n) return Q(n);
                                }
                            }
                            return ve.from(e.target);
                        })(e).each(function (e) {
                            e.ownerDocument === document && (e === document.body || dd(t, e) || n.focusedEditor !== t || (t.fire("blur", { focusedEditor: null }), (n.focusedEditor = null)));
                        });
                }),
                Id.bind(document, "focusin", Nd));
    }
    function gd(e, t) {
        e.focusedEditor === t.editor && (e.focusedEditor = null), e.activeEditor || (Id.unbind(document, "focusin", Nd), (Nd = null));
    }
    function pd(t, e) {
        var n, r;
        (n = Nt.fromDom(t.getBody())),
            ((r = e).collapsed ? ve.from(Bu(r.startContainer, r.startOffset)).map(Nt.fromDom) : ve.none())
                .bind(function (e) {
                    return po(e) ? ve.some(e) : !1 === Ve(n, e) ? ve.some(n) : ve.none();
                })
                .bind(function (e) {
                    return ef(e.dom);
                })
                .fold(
                    function () {
                        t.selection.normalize();
                    },
                    function (e) {
                        return t.selection.setRng(e.toRange());
                    }
                );
    }
    function hd(t) {
        if (t.setActive)
            try {
                t.setActive();
            } catch (e) {
                t.focus();
            }
        else t.focus();
    }
    function vd(e) {
        return e.inline
            ? (r = e.getBody()) &&
                  (ed((t = Nt.fromDom(r))) ||
                      td(Bn((n = t)))
                          .filter(function (e) {
                              return n.dom.contains(e.dom);
                          })
                          .isSome())
            : e.iframeElement && ed(Nt.fromDom(e.iframeElement));
        var t, n, r;
    }
    function bd(e, t, n, r, o) {
        var i = n ? t.startContainer : t.endContainer,
            a = n ? t.startOffset : t.endOffset;
        return ve
            .from(i)
            .map(Nt.fromDom)
            .map(function (e) {
                return r && t.collapsed ? e : Mt(e, o(e, a)).getOr(e);
            })
            .bind(function (e) {
                return kn(e) ? ve.some(e) : Ot(e).filter(kn);
            })
            .map(function (e) {
                return e.dom;
            })
            .getOr(e);
    }
    function yd(e, t, n) {
        return bd(e, t, !0, n, function (e, t) {
            return Math.min(zt(e), t);
        });
    }
    function Cd(e, t, n) {
        return bd(e, t, !1, n, function (e, t) {
            return 0 < t ? t - 1 : t;
        });
    }
    function xd(e, t) {
        for (var n = e; e && jn(e) && 0 === e.length; ) e = t ? e.nextSibling : e.previousSibling;
        return e || n;
    }
    function wd(n, e) {
        return T(e, function (e) {
            var t = n.fire("GetSelectionRange", { range: e });
            return t.range !== e ? t.range : e;
        });
    }
    function Sd(e, t, n) {
        var r = n ? "lastChild" : "firstChild",
            o = n ? "prev" : "next";
        if (e[r]) return e[r];
        if (e !== t) {
            var i = e[o];
            if (i) return i;
            for (var a = e.parent; a && a !== t; a = a.parent) if ((i = a[o])) return i;
        }
    }
    function Ed(e) {
        var t = "a" === e.name && !e.attr("href") && e.attr("id");
        return e.attr("name") || (e.attr("id") && !e.firstChild) || e.attr("data-mce-bookmark") || t;
    }
    var Nd,
        kd = function (r, e) {
            return r.view(e).fold(J([]), function (e) {
                var t = r.owner(e),
                    n = kd(r, t);
                return [e].concat(n);
            });
        },
        _d = Object.freeze({
            __proto__: null,
            view: function (e) {
                var t;
                return (e.dom === document ? ve.none() : ve.from(null === (t = e.dom.defaultView) || void 0 === t ? void 0 : t.frameElement)).map(Nt.fromDom);
            },
            owner: Dt,
        }),
        Ad = function (e, t, n, r) {
            var o = Nt.fromDom(e.getBody()),
                i = Nt.fromDom(e.getDoc());
            o.dom.offsetWidth;
            var a,
                u,
                s,
                c,
                l =
                    ((a = Nt.fromDom(n.startContainer)),
                    (u = n.startOffset),
                    (s = (function (e, t) {
                        var n = Dn(e);
                        if (0 === n.length || zf(e)) return { element: e, offset: t };
                        if (t < n.length && !zf(n[t])) return { element: n[t], offset: 0 };
                        var r = n[n.length - 1];
                        return zf(r) ? { element: e, offset: t } : "img" === kt(r) ? { element: r, offset: 1 } : _n(r) ? { element: r, offset: Pl(r).length } : { element: r, offset: Dn(r).length };
                    })(a, u)),
                    (c = Nt.fromHtml('<span data-mce-bogus="all" style="display: inline-block;">\ufeff</span>')),
                    qt(s.element, c),
                    Hf(c, function () {
                        return Ln(c);
                    }));
            Vf(e, i, t, l, r), l.cleanup();
        },
        Rd = function (e, t, n) {
            var r = n.startContainer,
                o = n.startOffset,
                i = n.endContainer,
                a = n.endOffset;
            t(Nt.fromDom(r), Nt.fromDom(i));
            var u = e.dom.createRng();
            u.setStart(r, o), u.setEnd(i, a), e.selection.setRng(n);
        },
        Dd = or([{ before: ["element"] }, { on: ["element", "offset"] }, { after: ["element"] }]),
        Td =
            (Dd.before,
            Dd.on,
            Dd.after,
            function (e) {
                return e.fold(u, u, u);
            }),
        Od = or([{ domRange: ["rng"] }, { relative: ["startSitu", "finishSitu"] }, { exact: ["start", "soffset", "finish", "foffset"] }]),
        Bd = {
            domRange: Od.domRange,
            relative: Od.relative,
            exact: Od.exact,
            exactFromRange: function (e) {
                return Od.exact(e.start, e.soffset, e.finish, e.foffset);
            },
            getWin: function (e) {
                return Tt(
                    e.match({
                        domRange: function (e) {
                            return Nt.fromDom(e.startContainer);
                        },
                        relative: function (e, t) {
                            return Td(e);
                        },
                        exact: function (e, t, n, r) {
                            return e;
                        },
                    })
                );
            },
            range: function (e, t, n, r) {
                return { start: e, soffset: t, finish: n, foffset: r };
            },
        },
        Pd = dt().browser,
        Ld = {
            isEditorUIElement: function (e) {
                var t = e.className.toString();
                return -1 !== t.indexOf("tox-") || -1 !== t.indexOf("mce-");
            },
        },
        Id = Ja.DOM,
        Md = function (e) {
            return e.editorManager.setActive(e);
        },
        Fd = { "#text": 3, "#comment": 8, "#cdata": 4, "#pi": 7, "#doctype": 10, "#document-fragment": 11 },
        Ud =
            ((zd.create = function (e, t) {
                var n = new zd(e, Fd[e] || 1);
                return (
                    t &&
                        ne(t, function (e, t) {
                            n.attr(t, e);
                        }),
                    n
                );
            }),
            (zd.prototype.replace = function (e) {
                return e.parent && e.remove(), this.insert(e, this), this.remove(), this;
            }),
            (zd.prototype.attr = function (e, t) {
                var n,
                    r = this;
                if ("string" != typeof e)
                    return (
                        null != e &&
                            ne(e, function (e, t) {
                                r.attr(t, e);
                            }),
                        r
                    );
                if ((n = r.attributes)) {
                    if (void 0 === t) return n.map[e];
                    if (null === t) {
                        if (e in n.map) {
                            delete n.map[e];
                            for (var o = n.length; o--; ) if (n[o].name === e) return n.splice(o, 1), r;
                        }
                        return r;
                    }
                    if (e in n.map) {
                        for (o = n.length; o--; )
                            if (n[o].name === e) {
                                n[o].value = t;
                                break;
                            }
                    } else n.push({ name: e, value: t });
                    return (n.map[e] = t), r;
                }
            }),
            (zd.prototype.clone = function () {
                var e,
                    t = new zd(this.name, this.type);
                if ((e = this.attributes)) {
                    var n = [];
                    n.map = {};
                    for (var r = 0, o = e.length; r < o; r++) {
                        var i = e[r];
                        "id" !== i.name && ((n[n.length] = { name: i.name, value: i.value }), (n.map[i.name] = i.value));
                    }
                    t.attributes = n;
                }
                return (t.value = this.value), (t.shortEnded = this.shortEnded), t;
            }),
            (zd.prototype.wrap = function (e) {
                return this.parent.insert(e, this), e.append(this), this;
            }),
            (zd.prototype.unwrap = function () {
                for (var e = this.firstChild; e; ) {
                    var t = e.next;
                    this.insert(e, this, !0), (e = t);
                }
                this.remove();
            }),
            (zd.prototype.remove = function () {
                var e = this.parent,
                    t = this.next,
                    n = this.prev;
                return e && (e.firstChild === this ? (e.firstChild = t) && (t.prev = null) : (n.next = t), e.lastChild === this ? (e.lastChild = n) && (n.next = null) : (t.prev = n), (this.parent = this.next = this.prev = null)), this;
            }),
            (zd.prototype.append = function (e) {
                e.parent && e.remove();
                var t = this.lastChild;
                return t ? (((t.next = e).prev = t), (this.lastChild = e)) : (this.lastChild = this.firstChild = e), (e.parent = this), e;
            }),
            (zd.prototype.insert = function (e, t, n) {
                e.parent && e.remove();
                var r = t.parent || this;
                return (
                    n ? (t === r.firstChild ? (r.firstChild = e) : (t.prev.next = e), (e.prev = t.prev), ((e.next = t).prev = e)) : (t === r.lastChild ? (r.lastChild = e) : (t.next.prev = e), (e.next = t.next), ((e.prev = t).next = e)),
                    (e.parent = r),
                    e
                );
            }),
            (zd.prototype.getAll = function (e) {
                for (var t = [], n = this.firstChild; n; n = Sd(n, this)) n.name === e && t.push(n);
                return t;
            }),
            (zd.prototype.children = function () {
                for (var e = [], t = this.firstChild; t; t = t.next) e.push(t);
                return e;
            }),
            (zd.prototype.empty = function () {
                if (this.firstChild) {
                    for (var e = [], t = this.firstChild; t; t = Sd(t, this)) e.push(t);
                    for (var n = e.length; n--; ) (t = e[n]).parent = t.firstChild = t.lastChild = t.next = t.prev = null;
                }
                return (this.firstChild = this.lastChild = null), this;
            }),
            (zd.prototype.isEmpty = function (e, t, n) {
                void 0 === t && (t = {});
                var r = this.firstChild;
                if (Ed(this)) return !1;
                if (r)
                    do {
                        if (1 === r.type) {
                            if (r.attr("data-mce-bogus")) continue;
                            if (e[r.name]) return !1;
                            if (Ed(r)) return !1;
                        }
                        if (8 === r.type) return !1;
                        if (
                            3 === r.type &&
                            !(function (e) {
                                if (qr(e.value)) {
                                    var t = e.parent;
                                    return !t || ("span" === t.name && !t.attr("style")) || !/^[ ]+$/.test(e.value);
                                }
                            })(r)
                        )
                            return !1;
                        if (3 === r.type && r.parent && t[r.parent.name] && qr(r.value)) return !1;
                        if (n && n(r)) return !1;
                    } while ((r = Sd(r, this)));
                return !0;
            }),
            (zd.prototype.walk = function (e) {
                return Sd(this, null, e);
            }),
            zd);
    function zd(e, t) {
        (this.name = e), 1 === (this.type = t) && ((this.attributes = []), (this.attributes.map = {}));
    }
    function Hd(e, t) {
        return e.replace(t.re, function (e) {
            return ue(t.uris, e).getOr(e);
        });
    }
    var jd = Et.each,
        Vd = Et.trim,
        qd = "source protocol authority userInfo user password host port relative path directory file query anchor".split(" "),
        $d = { ftp: 21, http: 80, https: 443, mailto: 25 },
        Wd = ["img", "video"],
        Kd =
            ((Xd.parseDataUri = function (e) {
                var t,
                    n = decodeURIComponent(e).split(","),
                    r = /data:([^;]+)/.exec(n[0]);
                return { type: (t = r ? r[1] : t), data: n[1] };
            }),
            (Xd.isDomSafe = function (e, t, n) {
                if ((n = void 0 === n ? {} : n).allow_script_urls) return !0;
                var r,
                    o,
                    i,
                    a,
                    u = Go.decode(e).replace(/[\s\u0000-\u001F]+/g, "");
                try {
                    u = decodeURIComponent(u);
                } catch (e) {
                    u = unescape(u);
                }
                return !(
                    /((java|vb)script|mhtml):/i.test(u) ||
                    ((o = u), (i = t), !(r = n).allow_html_data_urls && (/^data:image\//i.test(o) ? (V((a = r.allow_svg_data_urls)) ? !a : !V(i) || !D(Wd, i)) && /^data:image\/svg\+xml/i.test(o) : /^data:/i.test(o)))
                );
            }),
            (Xd.getDocumentBaseUrl = function (e) {
                var t = 0 !== e.protocol.indexOf("http") && "file:" !== e.protocol ? e.href : e.protocol + "//" + e.host + e.pathname;
                return /^[^:]+:\/\/\/?[^\/]+\//.test(t) && ((t = t.replace(/[\?#].*$/, "").replace(/[\/\\][^\/]+$/, "")), /[\/\\]$/.test(t) || (t += "/")), t;
            }),
            (Xd.prototype.setPath = function (e) {
                var t = /^(.*?)\/?(\w+)?$/.exec(e);
                (this.path = t[0]), (this.directory = t[1]), (this.file = t[2]), (this.source = ""), this.getURI();
            }),
            (Xd.prototype.toRelative = function (e) {
                var t;
                if ("./" === e) return e;
                var n = new Xd(e, { base_uri: this });
                if (("mce_host" !== n.host && this.host !== n.host && n.host) || this.port !== n.port || (this.protocol !== n.protocol && "" !== n.protocol)) return n.getURI();
                var r = this.getURI(),
                    o = n.getURI();
                return r === o || ("/" === r.charAt(r.length - 1) && r.substr(0, r.length - 1) === o) ? r : ((t = this.toRelPath(this.path, n.path)), n.query && (t += "?" + n.query), n.anchor && (t += "#" + n.anchor), t);
            }),
            (Xd.prototype.toAbsolute = function (e, t) {
                var n = new Xd(e, { base_uri: this });
                return n.getURI(t && this.isSameOrigin(n));
            }),
            (Xd.prototype.isSameOrigin = function (e) {
                if (this.host == e.host && this.protocol == e.protocol) {
                    if (this.port == e.port) return !0;
                    var t = $d[this.protocol];
                    if (t && (this.port || t) == (e.port || t)) return !0;
                }
                return !1;
            }),
            (Xd.prototype.toRelPath = function (e, t) {
                var n,
                    r,
                    o = 0,
                    i = "",
                    a = e.substring(0, e.lastIndexOf("/")).split("/"),
                    u = t.split("/");
                if (a.length >= u.length)
                    for (n = 0, r = a.length; n < r; n++)
                        if (n >= u.length || a[n] !== u[n]) {
                            o = n + 1;
                            break;
                        }
                if (a.length < u.length)
                    for (n = 0, r = u.length; n < r; n++)
                        if (n >= a.length || a[n] !== u[n]) {
                            o = n + 1;
                            break;
                        }
                if (1 === o) return t;
                for (n = 0, r = a.length - (o - 1); n < r; n++) i += "../";
                for (n = o - 1, r = u.length; n < r; n++) i += n !== o - 1 ? "/" + u[n] : u[n];
                return i;
            }),
            (Xd.prototype.toAbsPath = function (e, t) {
                var n,
                    r,
                    o = 0,
                    i = [],
                    a = /\/$/.test(t) ? "/" : "",
                    u = e.split("/"),
                    s = t.split("/");
                for (
                    jd(u, function (e) {
                        e && i.push(e);
                    }),
                        u = i,
                        n = s.length - 1,
                        i = [];
                    0 <= n;
                    n--
                )
                    0 !== s[n].length && "." !== s[n] && (".." !== s[n] ? (0 < o ? o-- : i.push(s[n])) : o++);
                return 0 !== (r = (n = u.length - o) <= 0 ? q(i).join("/") : u.slice(0, n).join("/") + "/" + q(i).join("/")).indexOf("/") && (r = "/" + r), a && r.lastIndexOf("/") !== r.length - 1 && (r += a), r;
            }),
            (Xd.prototype.getURI = function (e) {
                var t;
                return (
                    void 0 === e && (e = !1),
                    (this.source && !e) ||
                        ((t = ""),
                        e || (this.protocol ? (t += this.protocol + "://") : (t += "//"), this.userInfo && (t += this.userInfo + "@"), this.host && (t += this.host), this.port && (t += ":" + this.port)),
                        this.path && (t += this.path),
                        this.query && (t += "?" + this.query),
                        this.anchor && (t += "#" + this.anchor),
                        (this.source = t)),
                    this.source
                );
            }),
            Xd);
    function Xd(e, t) {
        (e = Vd(e)), (this.settings = t || {});
        var n,
            r,
            o,
            i,
            a = this.settings.base_uri,
            u = this;
        /^([\w\-]+):([^\/]{2})/i.test(e) || /^\s*#/.test(e)
            ? (u.source = e)
            : ((n = 0 === e.indexOf("//")),
              0 !== e.indexOf("/") || n || (e = ((a && a.protocol) || "http") + "://mce_host" + e),
              /^[\w\-]*:?\/\//.test(e) ||
                  ((r = this.settings.base_uri ? this.settings.base_uri.path : new Xd(document.location.href).directory),
                  (e = this.settings.base_uri && "" == this.settings.base_uri.protocol ? "//mce_host" + u.toAbsPath(r, e) : ((o = /([^#?]*)([#?]?.*)/.exec(e)), ((a && a.protocol) || "http") + "://mce_host" + u.toAbsPath(r, o[1]) + o[2]))),
              (e = e.replace(/@@/g, "(mce_at)")),
              (i = /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@\/]*):?([^:@\/]*))?@)?(\[[a-zA-Z0-9:.%]+\]|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/.exec(
                  e
              )),
              jd(qd, function (e, t) {
                  var n = (n = i[t]) && n.replace(/\(mce_at\)/g, "@@");
                  u[e] = n;
              }),
              a && (u.protocol || (u.protocol = a.protocol), u.userInfo || (u.userInfo = a.userInfo), u.port || "mce_host" !== u.host || (u.port = a.port), (u.host && "mce_host" !== u.host) || (u.host = a.host), (u.source = "")),
              n && (u.protocol = ""));
    }
    function Yd(e, t, n) {
        for (var r = /<([!?\/])?([A-Za-z0-9\-_:.]+)/g, o = /(?:\s(?:[^'">]+(?:"[^"]*"|'[^']*'))*[^"'>]*(?:"[^">]*|'[^'>]*)?|\s*|\/)>/g, i = e.getShortEndedElements(), a = 1, u = n; 0 !== a; )
            for (r.lastIndex = u; ; ) {
                var s = r.exec(t);
                if (null === s) return u;
                if ("!" === s[1]) {
                    u = Ge(s[2], "--") ? Qd(t, !1, s.index + "!--".length) : Qd(t, !0, s.index + 1);
                    break;
                }
                o.lastIndex = r.lastIndex;
                var c = o.exec(t);
                if (!l(c) && c.index === r.lastIndex) {
                    "/" === s[1] ? --a : Ne(i, s[2]) || (a += 1), (u = r.lastIndex + c[0].length);
                    break;
                }
            }
        return u;
    }
    function Gd(q, $) {
        var e;
        void 0 === $ && ($ = to());
        var W = null !== (e = (q = q || {}).document) && void 0 !== e ? e : document,
            K = W.createElement("form");
        function n(s, e) {
            void 0 === e && (e = "html");
            for (
                var t,
                    i,
                    n,
                    c,
                    r,
                    o,
                    a,
                    l,
                    u,
                    f,
                    d,
                    m,
                    g,
                    p,
                    h,
                    v,
                    b,
                    y,
                    C,
                    x = s.html,
                    w = 0,
                    S = [],
                    E = 0,
                    N = Go.decode,
                    k = Et.makeMap("src,href,data,background,action,formaction,poster,xlink:href"),
                    _ = "html" === e ? 0 : 1,
                    A = function (e) {
                        for (var t, n = S.length; n-- && S[n].name !== e; );
                        if (0 <= n) {
                            for (t = S.length - 1; n <= t; t--) (e = S[t]).valid && Q(e.name);
                            S.length = n;
                        }
                    },
                    R = function (e, t) {
                        return G(Hd(e, s), t);
                    },
                    D = function (e) {
                        "" !== e && (">" === e.charAt(0) && (e = " " + e), q.allow_conditional_comments || "[if" !== e.substr(0, 3).toLowerCase() || (e = " " + e), X(Hd(e, s)));
                    },
                    T = function (e, t) {
                        var n = e || "",
                            r = !Ge(n, "--"),
                            o = Qd(x, r, t);
                        return (e = x.substr(t, o - t)), D(r ? n + e : e), o + 1;
                    },
                    O = new RegExp(
                        "<(?:(?:!--([\\w\\W]*?)--!?>)|(?:!\\[CDATA\\[([\\w\\W]*?)\\]\\]>)|(?:![Dd][Oo][Cc][Tt][Yy][Pp][Ee]([\\w\\W]*?)>)|(?:!(--)?)|(?:\\?([^\\s\\/<>]+) ?([\\w\\W]*?)[?/]>)|(?:\\/([A-Za-z][A-Za-z0-9\\-_\\:\\.]*)>)|(?:([A-Za-z][A-Za-z0-9\\-_:.]*)(\\s(?:[^'\">]+(?:\"[^\"]*\"|'[^']*'))*[^\"'>]*(?:\"[^\">]*|'[^'>]*)?|\\s*|\\/)>))",
                        "g"
                    ),
                    B = /([\w:\-]+)(?:\s*=\s*(?:(?:\"((?:[^\"])*)\")|(?:\'((?:[^\'])*)\')|([^>\s]+)))?/g,
                    P = $.getShortEndedElements(),
                    L = q.self_closing_elements || $.getSelfClosingElements(),
                    I = $.getBoolAttrs(),
                    M = q.validate,
                    F = q.remove_internals,
                    U = q.fix_self_closing,
                    z = $.getSpecialElements(),
                    H = x + ">";
                (t = O.exec(H));

            ) {
                var j = t[0];
                if ((w < t.index && R(N(x.substr(w, t.index - w))), (i = t[7]))) A((i = ":" === (i = i.toLowerCase()).charAt(0) ? i.substr(1) : i));
                else if ((i = t[8])) {
                    if (t.index + j.length > x.length) {
                        R(N(x.substr(t.index))), (w = t.index + j.length);
                        continue;
                    }
                    (u = (i = ":" === (i = i.toLowerCase()).charAt(0) ? i.substr(1) : i) in P), U && L[i] && 0 < S.length && S[S.length - 1].name === i && A(i);
                    var V = (function (e, t) {
                        var n = e.exec(t);
                        if (n) {
                            var r = n[1],
                                o = n[2];
                            return "string" == typeof r && "data-mce-bogus" === r.toLowerCase() ? o : null;
                        }
                        return null;
                    })(B, t[9]);
                    if (null !== V) {
                        if ("all" === V) {
                            (w = Yd($, x, O.lastIndex)), (O.lastIndex = w);
                            continue;
                        }
                        d = !1;
                    }
                    if (!M || (f = $.getElementRule(i))) {
                        if (
                            ((d = !0),
                            M && ((p = f.attributes), (h = f.attributePatterns)),
                            (g = t[9])
                                ? ((l = -1 !== g.indexOf("data-mce-type")) && F && (d = !1),
                                  ((c = []).map = {}),
                                  g.replace(B, function (e, t, n, r, o) {
                                      return (
                                          (function (e, t, n, r, o) {
                                              var i;
                                              if (((n = Hd((t = t.toLowerCase()) in I ? t : N(n || r || o || ""), s)), M && !l && 0 == (0 === (i = t).indexOf("data-") || 0 === i.indexOf("aria-")))) {
                                                  var a = p[t];
                                                  if (!a && h) {
                                                      for (var u = h.length; u-- && !(a = h[u]).pattern.test(t); );
                                                      -1 === u && (a = null);
                                                  }
                                                  if (!a) return;
                                                  if (a.validValues && !(n in a.validValues)) return;
                                              }
                                              (("name" === t || "id" === t) && e in Jd && (n in W || n in K)) ||
                                                  (k[t] && !Kd.isDomSafe(n, e, q)) ||
                                                  (l && (t in k || 0 === t.indexOf("on"))) ||
                                                  ((c.map[t] = n), c.push({ name: t, value: n }));
                                          })(i, t, n, r, o),
                                          ""
                                      );
                                  }))
                                : ((c = []).map = {}),
                            M && !l)
                        ) {
                            if (((v = f.attributesRequired), (b = f.attributesDefault), (y = f.attributesForced), f.removeEmptyAttrs && !c.length && (d = !1), y))
                                for (r = y.length; r--; ) (a = (m = y[r]).name), "{$uid}" === (C = m.value) && (C = "mce_" + E++), (c.map[a] = C), c.push({ name: a, value: C });
                            if (b) for (r = b.length; r--; ) (a = (m = b[r]).name) in c.map || ("{$uid}" === (C = m.value) && (C = "mce_" + E++), (c.map[a] = C), c.push({ name: a, value: C }));
                            if (v) {
                                for (r = v.length; r-- && !(v[r] in c.map); );
                                -1 === r && (d = !1);
                            }
                            if ((m = c.map["data-mce-bogus"])) {
                                if ("all" === m) {
                                    (w = Yd($, x, O.lastIndex)), (O.lastIndex = w);
                                    continue;
                                }
                                d = !1;
                            }
                        }
                        d && J(i, c, u);
                    } else d = !1;
                    if ((n = z[i])) {
                        (n.lastIndex = w = t.index + j.length), (w = (t = n.exec(x)) ? (d && (o = x.substr(w, t.index - w)), t.index + t[0].length) : ((o = x.substr(w)), x.length)), d && (0 < o.length && R(o, !0), Q(i)), (O.lastIndex = w);
                        continue;
                    }
                    u || (g && g.indexOf("/") === g.length - 1 ? d && Q(i) : S.push({ name: i, valid: d }));
                } else if ((i = t[1])) D(i);
                else if ((i = t[2])) {
                    if (!(1 == _ || q.preserve_cdata || (0 < S.length && $.isValidChild(S[S.length - 1].name, "#cdata")))) {
                        (w = T("", t.index + 2)), (O.lastIndex = w);
                        continue;
                    }
                    Y(i);
                } else if ((i = t[3])) ee(i);
                else {
                    if ((i = t[4]) || "<!" === j) {
                        (w = T(i, t.index + j.length)), (O.lastIndex = w);
                        continue;
                    }
                    if ((i = t[5])) {
                        if (1 != _) {
                            (w = T("?", t.index + 2)), (O.lastIndex = w);
                            continue;
                        }
                        Z(i, t[6]);
                    }
                }
                w = t.index + j.length;
            }
            for (w < x.length && R(N(x.substr(w))), r = S.length - 1; 0 <= r; r--) (i = S[r]).valid && Q(i.name);
        }
        !1 !== q.fix_self_closing && (q.fix_self_closing = !0);
        var X = q.comment || te,
            Y = q.cdata || te,
            G = q.text || te,
            J = q.start || te,
            Q = q.end || te,
            Z = q.pi || te,
            ee = q.doctype || te;
        return {
            parse: function (e, t) {
                void 0 === t && (t = "html"),
                    n(
                        (function (e) {
                            for (var t, n = /data:[^;]+;base64,([a-z0-9\+\/=\s]+)/gi, r = [], o = {}, i = yu("img"), a = 0, u = 0; (t = n.exec(e)); ) {
                                var s = t[0],
                                    c = i + "_" + u++;
                                (o[c] = s), a < t.index && r.push(e.substr(a, t.index - a)), r.push(c), (a = t.index + s.length);
                            }
                            var l = new RegExp(i + "_[0-9]+", "g");
                            return 0 === a ? { prefix: i, uris: o, html: e, re: l } : (a < e.length && r.push(e.substr(a)), { prefix: i, uris: o, html: r.join(""), re: l });
                        })(e),
                        t
                    );
            },
        };
    }
    var Jd = Et.makeMap("button,fieldset,form,iframe,img,image,input,object,output,select,textarea"),
        Qd = function (e, t, n) {
            void 0 === n && (n = 0);
            var r = e.toLowerCase();
            if (-1 !== r.indexOf("[if ", n) && ((u = n), /^\s*\[if [\w\W]+\]>.*<!\[endif\](--!?)?>/.test(r.substr(u)))) {
                var o = r.indexOf("[endif]", n);
                return r.indexOf(">", o);
            }
            if (t) {
                var i = r.indexOf(">", n);
                return -1 !== i ? i : r.length;
            }
            var a = /--!?>/g;
            a.lastIndex = n;
            var u,
                s = a.exec(e);
            return s ? s.index + s[0].length : r.length;
        };
    function Zd(e, t) {
        for (
            var n,
                r,
                o,
                i,
                a = /<(\w+) [^>]*data-mce-bogus="all"[^>]*>/g,
                u = e.schema,
                s = ((n = e.getTempAttrs()), (r = t), (o = new RegExp(["\\s?(" + n.join("|") + ')="[^"]+"'].join("|"), "gi")), r.replace(o, "")),
                c = u.getShortEndedElements();
            (i = a.exec(s));

        ) {
            var l = a.lastIndex,
                f = i[0].length,
                d = c[i[1]] ? l : Gd.findEndTag(u, s, l),
                s = s.substring(0, l - f) + s.substring(d);
            a.lastIndex = l - f;
        }
        return wo(s);
    }
    function em(o) {
        return {
            compare: function (e, t) {
                return e.nodeName === t.nodeName && !(!r(n(e), n(t)) || !r(o.parseStyle(o.getAttrib(e, "style")), o.parseStyle(o.getAttrib(t, "style"))) || Yc(e) || Yc(t));
                function n(n) {
                    var r = {};
                    return (
                        om(o.getAttribs(n), function (e) {
                            var t = e.nodeName.toLowerCase();
                            0 !== t.indexOf("_") && "style" !== t && 0 !== t.indexOf("data-") && (r[t] = o.getAttrib(n, t));
                        }),
                        r
                    );
                }
                function r(e, t) {
                    var n, r;
                    for (r in e)
                        if (Ne(e, r)) {
                            if (void 0 === (n = t[r])) return;
                            if (e[r] !== n) return;
                            delete t[r];
                        }
                    for (r in t) if (Ne(t, r)) return;
                    return 1;
                }
            },
        };
    }
    function tm(e) {
        var u = [],
            s = (e = e || {}).indent,
            c = im(e.indent_before || ""),
            l = im(e.indent_after || ""),
            f = Go.getEncodeFunc(e.entity_encoding || "raw", e.entities),
            d = "html" === e.element_format;
        return {
            start: function (e, t, n) {
                var r, o, i, a;
                if ((s && c[e] && 0 < u.length && 0 < (a = u[u.length - 1]).length && "\n" !== a && u.push("\n"), u.push("<", e), t)) for (r = 0, o = t.length; r < o; r++) (i = t[r]), u.push(" ", i.name, '="', f(i.value, !0), '"');
                (u[u.length] = !n || d ? ">" : " />"), n && s && l[e] && 0 < u.length && 0 < (a = u[u.length - 1]).length && "\n" !== a && u.push("\n");
            },
            end: function (e) {
                var t;
                u.push("</", e, ">"), s && l[e] && 0 < u.length && 0 < (t = u[u.length - 1]).length && "\n" !== t && u.push("\n");
            },
            text: function (e, t) {
                0 < e.length && (u[u.length] = t ? e : f(e));
            },
            cdata: function (e) {
                u.push("<![CDATA[", e, "]]>");
            },
            comment: function (e) {
                u.push("\x3c!--", e, "--\x3e");
            },
            pi: function (e, t) {
                t ? u.push("<?", e, " ", f(t), "?>") : u.push("<?", e, "?>"), s && u.push("\n");
            },
            doctype: function (e) {
                u.push("<!DOCTYPE", e, ">", s ? "\n" : "");
            },
            reset: function () {
                u.length = 0;
            },
            getContent: function () {
                return u.join("").replace(/\n$/, "");
            },
        };
    }
    function nm(t, g) {
        void 0 === g && (g = to());
        var p = tm(t);
        return (
            ((t = t || {}).validate = !("validate" in t) || t.validate),
            {
                serialize: function (e) {
                    var f = t.validate,
                        d = {
                            3: function (e) {
                                p.text(e.value, e.raw);
                            },
                            8: function (e) {
                                p.comment(e.value);
                            },
                            7: function (e) {
                                p.pi(e.name, e.value);
                            },
                            10: function (e) {
                                p.doctype(e.value);
                            },
                            4: function (e) {
                                p.cdata(e.value);
                            },
                            11: function (e) {
                                if ((e = e.firstChild)) for (; m(e), (e = e.next); );
                            },
                        };
                    p.reset();
                    var m = function (e) {
                        var t = d[e.type];
                        if (t) t(e);
                        else {
                            var n = e.name,
                                r = e.shortEnded,
                                o = e.attributes;
                            if (f && o && 1 < o.length) {
                                var i = [];
                                i.map = {};
                                var a = g.getElementRule(e.name);
                                if (a) {
                                    for (var u = 0, s = a.attributesOrder.length; u < s; u++) (c = a.attributesOrder[u]) in o.map && ((l = o.map[c]), (i.map[c] = l), i.push({ name: c, value: l }));
                                    for (var c, l, u = 0, s = o.length; u < s; u++) (c = o[u].name) in i.map || ((l = o.map[c]), (i.map[c] = l), i.push({ name: c, value: l }));
                                    o = i;
                                }
                            }
                            if ((p.start(e.name, o, r), !r)) {
                                if ((e = e.firstChild)) for (; m(e), (e = e.next); );
                                p.end(n);
                            }
                        }
                    };
                    return 1 !== e.type || t.inner ? d[11](e) : m(e), p.getContent();
                },
            }
        );
    }
    Gd.findEndTag = Yd;
    var rm = Zd,
        om = Et.each,
        im = Et.makeMap,
        am = new Set();
    function um(e, t) {
        return we(e.parseStyle(e.getAttrib(t, "style")));
    }
    function sm(n, r, o) {
        return ve
            .from(o.container())
            .filter(jn)
            .exists(function (e) {
                var t = n ? 0 : -1;
                return r(e.data.charAt(o.offset() + t));
            });
    }
    function cm(e) {
        var t = e.container();
        return jn(t) && (0 === t.data.length || (xo(t.data) && Fl.isBookmarkNode(t.parentNode)));
    }
    function lm(t, n) {
        return function (e) {
            return ve
                .from(Gs(t ? 0 : -1, e))
                .filter(n)
                .isSome();
        };
    }
    function fm(e) {
        return Kn(e) && "block" === xn(Nt.fromDom(e), "display");
    }
    function dm(e) {
        return Yn(e) && !(zn((t = e)) && "all" === t.getAttribute("data-mce-bogus"));
        var t;
    }
    function mm(e) {
        Xt(e), Pn(e, Nt.fromHtml('<br data-mce-bogus="1">'));
    }
    function gm(n) {
        Ut(n).each(function (t) {
            Bt(t).each(function (e) {
                lo(n) && Br(t) && lo(e) && Ln(t);
            });
        });
    }
    function pm(e, t) {
        return (
            (o = R),
            Ve((r = t), (n = e))
                ? (function (e, t) {
                      for (var n = y(t) ? t : R, r = e.dom, o = []; null !== r.parentNode && void 0 !== r.parentNode; ) {
                          var i = r.parentNode,
                              a = Nt.fromDom(i);
                          if ((o.push(a), !0 === n(a))) break;
                          r = i;
                      }
                      return o;
                  })(n, function (e) {
                      return o(e) || je(e, r);
                  }).slice(0, -1)
                : []
        );
        var n, r, o;
    }
    function hm(e, t) {
        return [e].concat(pm(e, t));
    }
    function vm(e, t, n) {
        return Jl(e, t, n, cm);
    }
    function bm(e, t) {
        return M(hm(Nt.fromDom(t.container()), e), lo);
    }
    function ym(e, n, r) {
        return vm(e, n.dom, r).forall(function (t) {
            return bm(n, r).fold(
                function () {
                    return !1 === Ys(t, r, n.dom);
                },
                function (e) {
                    return !1 === Ys(t, r, n.dom) && Ve(e, Nt.fromDom(t.container()));
                }
            );
        });
    }
    function Cm(t, n, r) {
        return bm(n, r).fold(
            function () {
                return vm(t, n.dom, r).forall(function (e) {
                    return !1 === Ys(e, r, n.dom);
                });
            },
            function (e) {
                return vm(t, e.dom, r).isNone();
            }
        );
    }
    function xm(e) {
        return nc(e).exists(Br);
    }
    function wm(e, t, n) {
        var r = Q(U(hm(Nt.fromDom(n.container()), t), lo)).getOr(t);
        return Gl(e, r.dom, n).filter(xm);
    }
    function Sm(e, t) {
        return nc(t).exists(Br) || wm(!0, e, t).isSome();
    }
    function Em(e, t) {
        return ve.from(t.getNode(!0)).map(Nt.fromDom).exists(Br) || wm(!1, e, t).isSome();
    }
    function Nm(e) {
        return as.isTextPosition(e) && !e.isAtStart() && !e.isAtEnd();
    }
    function km(e, t) {
        return Q(U(hm(Nt.fromDom(t.container()), e), lo)).getOr(e);
    }
    function _m(e, t) {
        return Nm(t) ? Kg(t) : Kg(t) || Zl(km(e, t).dom, t).exists(Kg);
    }
    function Am(e, t) {
        return Nm(t) ? Wg(t) : Wg(t) || Ql(km(e, t).dom, t).exists(Wg);
    }
    function Rm(e) {
        return nc(e)
            .bind(function (e) {
                return pr(e, kn);
            })
            .exists(function (e) {
                return D(["pre", "pre-wrap"], xn(e, "white-space"));
            });
    }
    function Dm(e, t) {
        return !Rm(t) && (np(e, t) || op(e, t) || Em(e, t) || _m(e, t));
    }
    function Tm(e, t) {
        return !Rm(t) && (rp(e, t) || ip(e, t) || Sm(e, t) || Am(e, t));
    }
    function Om(e, t) {
        return Dm(e, t) || Tm(e, ((r = (n = t).container()), (o = n.offset()), jn(r) && o < r.data.length ? as(r, o + 1) : n));
        var n, r, o;
    }
    function Bm(e, t) {
        return of(e.charAt(t));
    }
    function Pm(e) {
        var t = e.container();
        return jn(t) && Te(t.data, yo);
    }
    function Lm(g, e) {
        return ve
            .some(e)
            .filter(Pm)
            .bind(function (e) {
                var t,
                    n,
                    r,
                    o,
                    i,
                    a,
                    u,
                    s,
                    c,
                    l = e.container(),
                    f = g,
                    d = (i = l).data,
                    m = as(i, 0);
                return (!Bm(d, 0) || Om(f, m)
                    ? ((s = (a = l).data),
                      (c = T((u = s.split("")), function (e, t) {
                          return of(e) && 0 < t && t < u.length - 1 && Jc(u[t - 1]) && Jc(u[t + 1]) ? " " : e;
                      }).join("")) !== s && ((a.data = c), 1))
                    : ((i.data = " " + d.slice(1)), 1)) || ((t = g), (r = (n = l).data), (o = as(n, r.length - 1)), Bm(r, r.length - 1) && !Om(t, o) && ((n.data = r.slice(0, -1) + " "), 1))
                    ? ve.some(e)
                    : ve.none();
            });
    }
    function Im(t) {
        var e = Nt.fromDom(t.getBody());
        t.selection.isCollapsed() &&
            Lm(e, as.fromRangeStart(t.selection.getRng())).each(function (e) {
                t.selection.setRng(e.toRange());
            });
    }
    function Mm(e, t, n) {
        var r, o, i, a, u, s, c, l;
        0 !== n &&
            ((o = gr((r = Nt.fromDom(e)), lo).getOr(r)),
            (i = e.data.slice(t, t + n)),
            (a = t + n >= e.data.length && Tm(o, as(e, e.data.length))),
            (u = 0 === t && Dm(o, as(e, 0))),
            e.replaceData(
                t,
                n,
                ((c = u),
                (l = a),
                L(
                    (s = i),
                    function (e, t) {
                        return Gc(t) || of(t)
                            ? e.previousCharIsSpace || ("" === e.str && c) || (e.str.length === s.length - 1 && l)
                                ? { previousCharIsSpace: !1, str: e.str + yo }
                                : { previousCharIsSpace: !0, str: e.str + " " }
                            : { previousCharIsSpace: !1, str: e.str + t };
                    },
                    { previousCharIsSpace: !1, str: "" }
                ).str)
            ));
    }
    function Fm(e, t) {
        var n = e.data.slice(t);
        Mm(e, t, n.length - Qe(n).length);
    }
    function Um(e, t) {
        var n = e.data.slice(0, t),
            r = n.length - Ze(n).length;
        Mm(e, t - r, r);
    }
    function zm(e, t, n, r) {
        void 0 === r && (r = !0);
        var o = Ze(e.data).length,
            i = r ? e : t,
            a = r ? t : e;
        return r ? i.appendData(a.data) : i.insertData(0, a.data), Ln(Nt.fromDom(a)), n && Fm(i, o), i;
    }
    function Hm(e, t) {
        return (r = e), (o = (n = t).container()), (i = n.offset()), !1 === as.isTextPosition(n) && o === r.parentNode && i > as.before(r).offset() ? as(t.container(), t.offset() - 1) : t;
        var n, r, o, i;
    }
    function jm(e) {
        return jr(e.previousSibling) ? ve.some(((t = e.previousSibling), jn(t) ? as(t, t.data.length) : as.after(t))) : e.previousSibling ? tf(e.previousSibling) : ve.none();
        var t;
    }
    function Vm(e) {
        return jr(e.nextSibling) ? ve.some(((t = e.nextSibling), jn(t) ? as(t, 0) : as.before(t))) : e.nextSibling ? ef(e.nextSibling) : ve.none();
        var t;
    }
    function qm(r, o) {
        return jm(o)
            .orThunk(function () {
                return Vm(o);
            })
            .orThunk(function () {
                return (
                    (e = r),
                    (n = as.before((t = o).previousSibling || t.parentNode)),
                    Zl(e, n).fold(function () {
                        return Ql(e, as.after(t));
                    }, ve.some)
                );
                var e, t, n;
            });
    }
    function $m(n, r) {
        return Vm(r)
            .orThunk(function () {
                return jm(r);
            })
            .orThunk(function () {
                return Ql((e = n), as.after((t = r))).fold(function () {
                    return Zl(e, as.before(t));
                }, ve.some);
                var e, t;
            });
    }
    function Wm(t, n, e) {
        e.fold(
            function () {
                t.focus();
            },
            function (e) {
                t.selection.setRng(e.toRange(), n);
            }
        );
    }
    function Km(e, t) {
        return t && Ne(e.schema.getBlockElements(), kt(t));
    }
    function Xm(e) {
        if (Wr(e)) {
            var t = Nt.fromHtml('<br data-mce-bogus="1">');
            return Xt(e), Pn(e, t), ve.some(as.before(t.dom));
        }
        return ve.none();
    }
    function Ym(t, n, e, r) {
        void 0 === r && (r = !0);
        var o,
            i,
            a,
            u,
            s,
            c,
            l,
            f,
            d,
            m,
            g,
            p,
            h,
            v,
            b = ((p = n), (h = t.getBody()), (v = e.dom), (p ? $m : qm)(h, v).map(A(Hm, v))),
            y = gr(
                e,
                A(Km, t),
                ((o = t.getBody()),
                function (e) {
                    return e.dom === o;
                })
            ),
            C =
                ((u = b),
                (i = a = e),
                (s = Ne(t.schema.getTextInlineElements(), kt(i))),
                (m = Bt(a).filter(_n)),
                (g = Pt(a).filter(_n)),
                Ln(a),
                (l = g),
                (f = u),
                (d = function (e, t, n) {
                    var r = e.dom,
                        o = t.dom,
                        i = r.data.length;
                    return zm(r, o, s), n.container() === o ? as(r, i) : n;
                }),
                ((c = m).isSome() && l.isSome() && f.isSome() ? ve.some(d(c.getOrDie(), l.getOrDie(), f.getOrDie())) : ve.none()).orThunk(function () {
                    return (
                        s &&
                            (m.each(function (e) {
                                return Um(e.dom, e.dom.length);
                            }),
                            g.each(function (e) {
                                return Fm(e.dom, 0);
                            })),
                        u
                    );
                }));
        t.dom.isEmpty(t.getBody())
            ? (t.setContent(""), t.selection.setCursorLocation())
            : y.bind(Xm).fold(
                  function () {
                      r && Wm(t, n, C);
                  },
                  function (e) {
                      r && Wm(t, n, ve.some(e));
                  }
              );
    }
    function Gm(e) {
        return hu(e, "td,th");
    }
    function Jm(e, t) {
        return { start: e, end: t };
    }
    function Qm(e, t) {
        return br(Nt.fromDom(e), "td,th", t);
    }
    function Zm(e) {
        return !je(e.start, e.end);
    }
    function eg(e, n) {
        return Al(e.start, n).bind(function (t) {
            return Al(e.end, n).bind(function (e) {
                return je(t, e) ? ve.some(t) : ve.none();
            });
        });
    }
    function tg(e) {
        return function (t) {
            return eg(t, e).map(function (e) {
                return { rng: t, table: e, cells: Gm(e) };
            });
        };
    }
    function ng(e, t, n, r) {
        if (n.collapsed || !e.forall(Zm)) return ve.none();
        if (t.isSameTable) {
            var o = e.bind(tg(r));
            return ve.some({ start: o, end: o });
        }
        var i,
            a,
            u = Qm(n.startContainer, r),
            s = Qm(n.endContainer, r),
            c = u
                .bind(
                    ((a = r),
                    function (t) {
                        return Al(t, a).bind(function (e) {
                            return Z(Gm(e)).map(function (e) {
                                return Jm(t, e);
                            });
                        });
                    })
                )
                .bind(tg(r)),
            l = s
                .bind(
                    ((i = r),
                    function (t) {
                        return Al(t, i).bind(function (e) {
                            return Q(Gm(e)).map(function (e) {
                                return Jm(e, t);
                            });
                        });
                    })
                )
                .bind(tg(r));
        return ve.some({ start: c, end: l });
    }
    function rg(e, t) {
        return z(e, function (e) {
            return je(e, t);
        });
    }
    function og(n) {
        return dn(rg(n.cells, n.rng.start), rg(n.cells, n.rng.end), function (e, t) {
            return n.cells.slice(e, t + 1);
        });
    }
    function ig(e, t) {
        var n = t.startTable,
            r = t.endTable,
            o = e.cloneRange();
        return (
            n.each(function (e) {
                return o.setStartAfter(e.dom);
            }),
            r.each(function (e) {
                return o.setEndBefore(e.dom);
            }),
            o
        );
    }
    function ag(e, t) {
        var n,
            r,
            o,
            i,
            a,
            u,
            s,
            c,
            l,
            f,
            d,
            m,
            g,
            p,
            h,
            v,
            b =
                ((n = e),
                function (e) {
                    return je(n, e);
                }),
            y = dn(Qm((r = t).startContainer, (o = b)), Qm(r.endContainer, o), Jm),
            C =
                ((l = b),
                (f = x((c = t).startContainer)),
                (d = x(c.endContainer)),
                (m = f.isSome()),
                (g = d.isSome()),
                (p = dn(f, d, je).getOr(!1)),
                { startTable: f, endTable: d, isStartInTable: m, isEndInTable: g, isSameTable: p, isMultiTable: !p && m && g });
        function x(e) {
            return Al(Nt.fromDom(e), l);
        }
        return (
            (h = t),
            (v = b),
            y.exists(function (e) {
                return (
                    !Zm((t = e)) &&
                    eg(t, v).exists(function (e) {
                        var t = e.dom.rows;
                        return 1 === t.length && 1 === t[0].cells.length;
                    }) &&
                    Rl(e.start, h)
                );
                var t;
            })
                ? y.map(function (e) {
                      return sp.singleCellTable(t, e.start);
                  })
                : C.isMultiTable
                ? ng(y, (u = C), (s = t), b).bind(function (e) {
                      var t = e.start,
                          n = e.end,
                          r = t.bind(og).getOr([]),
                          o = n.bind(og).getOr([]);
                      if (0 < r.length && 0 < o.length) {
                          var i = ig(s, u);
                          return ve.some(sp.multiTable(r, o, i));
                      }
                      return ve.none();
                  })
                : ng(y, (i = C), (a = t), b)
                      .bind(function (e) {
                          var t = e.start,
                              n = e.end;
                          return t.or(n);
                      })
                      .bind(function (e) {
                          var t = i.isSameTable,
                              n = og(e).getOr([]);
                          if (t && e.cells.length === n.length) return ve.some(sp.fullTable(e.table));
                          if (0 < n.length) {
                              if (t) return ve.some(sp.partialTable(n, ve.none()));
                              var r = ig(a, i);
                              return ve.some(sp.partialTable(n, ve.some(_e(_e({}, i), { rng: r }))));
                          }
                          return ve.none();
                      })
        );
    }
    function ug(e) {
        return (
            Y(e, function (e) {
                yn(e, "contenteditable"), mm(e);
            }),
            0
        );
    }
    function sg(e, t, n, r) {
        var o = n.cloneRange();
        r ? (o.setStart(n.startContainer, n.startOffset), o.setEndAfter(t.dom.lastChild)) : (o.setStartBefore(t.dom.firstChild), o.setEnd(n.endContainer, n.endOffset)), lp(e, o, t, !1);
    }
    function cg(e) {
        var t = _l(e),
            n = Nt.fromDom(e.selection.getNode());
        Gn(n.dom) && Wr(n) ? e.selection.setCursorLocation(n.dom, 0) : e.selection.collapse(!0),
            1 < t.length &&
                F(t, function (e) {
                    return je(e, n);
                }) &&
                pn(n, "data-mce-selected", "1");
    }
    function lg(s, c, e) {
        var l = s.selection.getRng();
        return (
            ug(
                e
                    .bind(function (e) {
                        var t,
                            n,
                            r,
                            o = e.rng,
                            i = e.isStartInTable,
                            a = ((t = i ? o.endContainer : o.startContainer), ve.from(s.dom.getParent(t, s.dom.isBlock)).map(Nt.fromDom));
                        o.deleteContents(),
                            (n = s),
                            (r = i),
                            a.filter(Wr).each(function (e) {
                                r ? Ln(e) : (mm(e), n.selection.setCursorLocation(e.dom, 0));
                            });
                        var u = i ? c[0] : c[c.length - 1];
                        return sg(s, u, l, i), Wr(u) ? ve.none() : ve.some(i ? c.slice(1) : c.slice(0, -1));
                    })
                    .getOr(c)
            ),
            cg(s),
            !0
        );
    }
    function fg(e, t, n, r) {
        var o = e.selection.getRng(),
            i = t[0],
            a = n[n.length - 1];
        sg(e, i, o, !0), sg(e, a, o, !1);
        var u = Wr(i) ? t : t.slice(1),
            s = Wr(a) ? n : n.slice(0, -1);
        return ug(u.concat(s)), r.deleteContents(), cg(e), !0;
    }
    function dg(e, t) {
        return Ym(e, !1, t), !0;
    }
    function mg(e, t) {
        return M(hm(t, e), ho);
    }
    function gg(e, t) {
        return (e ? Qg : Zg)(t);
    }
    function pg(f, d, s) {
        var m = Nt.fromDom(f.getBody());
        return fp(m, s).fold(
            function () {
                return (
                    (o = f),
                    (i = d),
                    (a = m),
                    (e = s),
                    (u = as.fromRangeStart(o.selection.getRng())),
                    mg(a, e)
                        .bind(function (e) {
                            return Wr(e)
                                ? dp(o, e)
                                : ((t = a),
                                  (n = e),
                                  (r = u),
                                  Fc(i, o.getBody(), r).bind(function (e) {
                                      return mg(t, Nt.fromDom(e.getNode())).map(function (e) {
                                          return !1 === je(e, n);
                                      });
                                  }));
                            var t, n, r;
                        })
                        .getOr(!1) ||
                        ((n = d),
                        (r = as.fromRangeStart((t = f).selection.getRng())),
                        gg(n, r) ||
                            Gl(n, t.getBody(), r).exists(function (e) {
                                return gg(n, e);
                            }))
                );
                var o, i, a, e, u, t, n, r;
            },
            function (e) {
                return (
                    (n = d),
                    (r = m),
                    (o = e),
                    (i = as.fromRangeStart((t = f).selection.getRng())),
                    (Wr(o)
                        ? dp(t, o)
                        : ((u = r),
                          (c = o),
                          (l = i),
                          Fc((s = n), (a = t).getBody(), l)
                              .bind(function (e) {
                                  return (
                                      (r = s),
                                      (o = l),
                                      (i = e),
                                      ef((n = c).dom)
                                          .bind(function (t) {
                                              return tf(n.dom).map(function (e) {
                                                  return r ? o.isEqual(t) && i.isEqual(e) : o.isEqual(e) && i.isEqual(t);
                                              });
                                          })
                                          .getOr(!0)
                                          ? dp(a, c)
                                          : ((t = c),
                                            fp(u, Nt.fromDom(e.getNode())).map(function (e) {
                                                return !1 === je(e, t);
                                            }))
                                  );
                                  var t, n, r, o, i;
                              })
                              .or(ve.some(!0)))
                    ).getOr(!1)
                );
                var a, u, s, c, l, t, n, r, o, i;
            }
        );
    }
    function hg(e, t) {
        var n,
            r,
            o,
            i,
            a,
            u,
            s,
            c,
            l = Nt.fromDom(e.selection.getStart(!0)),
            f = _l(e);
        return e.selection.isCollapsed() && 0 === f.length
            ? pg(e, t, l)
            : ((r = l),
              (o = f),
              (i = Nt.fromDom((n = e).getBody())),
              (a = n.selection.getRng()),
              0 !== o.length
                  ? lg(n, o, ve.none())
                  : ((u = n),
                    (c = a),
                    fp((s = i), r)
                        .fold(
                            function () {
                                return (
                                    (t = u),
                                    ag(s, c).map(function (e) {
                                        return e.fold(A(lp, t), A(dg, t), A(lg, t), A(fg, t));
                                    })
                                );
                                var t;
                            },
                            function (e) {
                                return dp(u, e);
                            }
                        )
                        .getOr(!1)));
    }
    function vg(e) {
        return e.collapsed
            ? e
            : ((a = e),
              (u = as.fromRangeStart(a)),
              (s = as.fromRangeEnd(a)),
              (c = a.commonAncestorContainer),
              Gl(!1, c, s)
                  .map(function (e) {
                      return !Ys(u, s, c) && Ys(u, e, c) ? ((t = u.container()), (n = u.offset()), (r = e.container()), (o = e.offset()), (i = document.createRange()).setStart(t, n), i.setEnd(r, o), i) : a;
                      var t, n, r, o, i;
                  })
                  .getOr(a));
        var a, u, s, c;
    }
    function bg(e, t) {
        var n,
            r,
            o,
            i,
            a,
            u = t.firstChild,
            s = t.lastChild;
        return (
            u && "meta" === u.name && (u = u.next),
            (r = s = s && "mce_marker" === s.attr("id") ? s.prev : s),
            (o = (n = e).getNonEmptyElements()),
            r && (r.isEmpty(o) || ((i = r), n.getBlockElements()[i.name] && i.firstChild && i.firstChild === i.lastChild && ("br" === (a = i.firstChild).name || a.value === yo))) && (s = s.prev),
            u && u === s && ("ul" === u.name || "ol" === u.name)
        );
    }
    function yg(e) {
        return 0 < e.length && (!(r = e[e.length - 1]).firstChild || ((t = r) && t.firstChild && t.firstChild === t.lastChild && ((n = t.firstChild).data === yo || Wn(n)))) ? e.slice(0, -1) : e;
        var t, n, r;
    }
    function Cg(e, t) {
        var n = e.getParent(t, e.isBlock);
        return n && "LI" === n.nodeName ? n : null;
    }
    function xg(e, t) {
        var n = as.after(e),
            r = Pc(t).prev(n);
        return r ? r.toRange() : null;
    }
    function wg(e, o, i, t) {
        function n(e) {
            var t = as.fromRangeStart(i),
                n = Pc(o.getRoot()),
                r = 1 === e ? n.prev(t) : n.next(t);
            return !r || Cg(o, r.getNode()) !== R;
        }
        var r,
            a,
            u,
            s,
            c,
            l,
            f,
            d,
            m,
            g,
            p,
            h,
            v,
            b,
            y,
            C,
            x,
            w,
            S,
            E,
            N,
            k,
            _,
            A = ((r = o), (c = e.serialize(t)), (u = (a = r.createFragment(c)).firstChild), (s = a.lastChild), u && "META" === u.nodeName && u.parentNode.removeChild(u), s && "mce_marker" === s.id && s.parentNode.removeChild(s), a),
            R = Cg(o, i.startContainer),
            D = yg(
                U(A.firstChild.childNodes, function (e) {
                    return "LI" === e.nodeName;
                })
            ),
            T = o.getRoot();
        return n(1)
            ? ((S = T),
              (_ = (w = R).parentNode),
              Et.each(D, function (e) {
                  _.insertBefore(e, w);
              }),
              (E = S),
              (N = as.before(w)),
              (k = Pc(E).next(N)) ? k.toRange() : null)
            : n(2)
            ? ((l = R), (d = T), o.insertAfter((f = D).reverse(), l), xg(f[0], d))
            : ((g = D),
              (p = T),
              (h = m = R),
              (b = (v = i).cloneRange()),
              (y = v.cloneRange()),
              b.setStartBefore(h),
              y.setEndAfter(h),
              (C = [b.cloneContents(), y.cloneContents()]),
              (x = m.parentNode).insertBefore(C[0], m),
              Et.each(g, function (e) {
                  x.insertBefore(e, m);
              }),
              x.insertBefore(C[1], m),
              x.removeChild(m),
              xg(g[g.length - 1], p));
    }
    function Sg(e, t, n) {
        var r,
            o,
            i,
            a,
            u = e.selection,
            s = e.dom;
        /^ | $/.test(t) &&
            ((r = s),
            (o = u.getRng()),
            (i = t),
            (i = Dm((a = Nt.fromDom(r.getRoot())), as.fromRangeStart(o)) ? i.replace(/^ /, "&nbsp;") : i.replace(/^&nbsp;/, " ")),
            (t = i = Tm(a, as.fromRangeEnd(o)) ? i.replace(/(&nbsp;| )(<br( \/)>)?$/, "&nbsp;") : i.replace(/&nbsp;(<br( \/)?>)?$/, " ")));
        var c = e.parser,
            l = n.merge,
            f = nm({ validate: e.getParam("validate") }, e.schema),
            d = '<span id="mce_marker" data-mce-type="bookmark">&#xFEFF;</span>',
            m = e.fire("BeforeSetContent", { content: t, format: "html", selection: !0, paste: n.paste });
        if (m.isDefaultPrevented()) e.fire("SetContent", { content: m.content, format: "html", selection: !0, paste: n.paste });
        else {
            -1 === (t = m.content).indexOf("{$caret}") && (t += "{$caret}"), (t = t.replace(/\{\$caret\}/, d));
            var g,
                p,
                h = (g = u.getRng()).startContainer || (g.parentElement ? g.parentElement() : null),
                v = e.getBody();
            h === v &&
                u.isCollapsed() &&
                s.isBlock(v.firstChild) &&
                (p = v.firstChild) &&
                !e.schema.getShortEndedElements()[p.nodeName] &&
                s.isEmpty(v.firstChild) &&
                ((g = s.createRng()).setStart(v.firstChild, 0), g.setEnd(v.firstChild, 0), u.setRng(g)),
                u.isCollapsed() ||
                    (function (e) {
                        var t = e.dom,
                            n = vg(e.selection.getRng());
                        e.selection.setRng(n);
                        var r,
                            o = t.getParent(n.startContainer, mp),
                            i = n;
                        null !== (r = o) && r === t.getParent(i.endContainer, mp) && Rl(Nt.fromDom(r), i) ? lp(e, n, Nt.fromDom(o)) : e.getDoc().execCommand("Delete", !1, null);
                    })(e);
            var b,
                y,
                C,
                x,
                w,
                S,
                E,
                N,
                k,
                _,
                A,
                R,
                D,
                T,
                O = { context: (I = u.getNode()).nodeName.toLowerCase(), data: n.data, insert: !0 },
                B = c.parse(t, O);
            if (!0 === n.paste && bg(e.schema, B) && Cg(s, I)) return (g = wg(f, s, u.getRng(), B)), u.setRng(g), void e.fire("SetContent", m);
            if (
                ((function () {
                    for (var e = B; (e = e.walk()); ) 1 === e.type && e.attr("data-mce-fragment", "1");
                })(),
                "mce_marker" === (L = B.lastChild).attr("id"))
            )
                for (var P = L, L = L.prev; L; L = L.walk(!0))
                    if (3 === L.type || !s.isBlock(L.name)) {
                        e.schema.isValidChild(L.parent.name, "span") && L.parent.insert(P, L, "br" === L.name);
                        break;
                    }
            if ((e._selectionOverrides.showBlockCaretContainer(I), O.invalid)) {
                e.selection.setContent(d);
                var I = u.getNode(),
                    M = e.getBody();
                for (9 === I.nodeType ? (I = L = M) : (L = I); L !== M; ) L = (I = L).parentNode;
                (t = I === M ? M.innerHTML : s.getOuterHTML(I)),
                    (t = f.serialize(
                        c.parse(
                            t.replace(/<span (id="mce_marker"|id=mce_marker).+?<\/span>/i, function () {
                                return f.serialize(B);
                            })
                        )
                    )),
                    I === M ? s.setHTML(M, t) : s.setOuterHTML(I, t);
            } else
                (b = e),
                    (y = t = f.serialize(B)),
                    "all" === (C = I).getAttribute("data-mce-bogus")
                        ? C.parentNode.insertBefore(b.dom.createFragment(y), C)
                        : ((x = C.firstChild), (w = C.lastChild), !x || (x === w && "BR" === x.nodeName) ? b.dom.setHTML(C, y) : b.selection.setContent(y));
            (E = l),
                (_ = (S = e).schema.getTextInlineElements()),
                (A = S.dom),
                E &&
                    ((N = S.getBody()),
                    (k = em(A)),
                    Et.each(A.select("*[data-mce-fragment]"), function (e) {
                        if (
                            V(_[e.nodeName.toLowerCase()]) &&
                            j(um(A, e), function (e) {
                                return !am.has(e);
                            })
                        )
                            for (
                                var t = e.parentNode;
                                V(t) &&
                                t !== N &&
                                !(function (r, o, i) {
                                    function a(e) {
                                        var t = r.getStyle(o, e),
                                            n = r.getStyle(i, e);
                                        return Be(t) && Be(n) && t !== n;
                                    }
                                    var e = um(r, o),
                                        u = um(r, i);
                                    return F(e, function (t) {
                                        function e(e) {
                                            return F(e, function (e) {
                                                return e === t;
                                            });
                                        }
                                        if (e(u) || !e($g)) return a(t);
                                        var n = U(u, function (t) {
                                            return F($g, function (e) {
                                                return Ge(t, e);
                                            });
                                        });
                                        return F(n, a);
                                    });
                                })(A, e, t);
                                t = t.parentNode
                            )
                                if (k.compare(t, e)) {
                                    A.remove(e, !0);
                                    break;
                                }
                    })),
                (function (n, e) {
                    var t,
                        r = n.dom,
                        o = n.selection;
                    if (e) {
                        o.scrollIntoView(e);
                        var i = pf(n.getBody(), e);
                        if ("false" === r.getContentEditable(i)) return r.remove(e), o.select(i);
                        var a,
                            u = r.createRng(),
                            s = e.previousSibling;
                        jn(s) ? (u.setStart(s, s.nodeValue.length), xt.ie || ((a = e.nextSibling), jn(a) && (s.appendData(a.data), a.parentNode.removeChild(a)))) : (u.setStartBefore(e), u.setEndBefore(e));
                        var c = r.getParent(e, r.isBlock);
                        r.remove(e),
                            c &&
                                r.isEmpty(c) &&
                                (n.$(c).empty(),
                                u.setStart(c, 0),
                                u.setEnd(c, 0),
                                mp(c) ||
                                c.getAttribute("data-mce-fragment") ||
                                !(t = (function (e) {
                                    var t = as.fromRangeStart(e);
                                    if ((t = Pc(n.getBody()).next(t))) return t.toRange();
                                })(u))
                                    ? r.add(c, r.create("br", { "data-mce-bogus": "1" }))
                                    : ((u = t), r.remove(c))),
                            o.setRng(u);
                    }
                })(e, s.get("mce_marker")),
                (R = e.getBody()),
                Et.each(R.getElementsByTagName("*"), function (e) {
                    e.removeAttribute("data-mce-fragment");
                }),
                (D = s),
                (T = u.getStart()),
                ve.from(D.getParent(T, "td,th")).map(Nt.fromDom).each(gm),
                e.fire("SetContent", m),
                e.addVisual();
        }
    }
    function Eg(e) {
        return e instanceof Ud;
    }
    function Ng(e, t, n) {
        var r;
        e.dom.setHTML(e.getBody(), t),
            !0 !== n &&
                vd((r = e)) &&
                ef(r.getBody()).each(function (e) {
                    var t = e.getNode(),
                        n = cn(t) ? ef(t).getOr(e) : e;
                    r.selection.setRng(n.toRange());
                });
    }
    function kg(u, s, e) {
        var t,
            n = ((t = s), _e(_e({ format: "html" }, e), { set: !0, content: Eg(t) ? "" : t })),
            c = e.no_events ? n : u.fire("BeforeSetContent", n);
        return (
            Eg(s) || (s = c.content),
            ve.from(u.getBody()).fold(J(s), function (e) {
                return Eg(s)
                    ? (function (e, t, n, r) {
                          var o, i, u, a;
                          (o = e.parser.getNodeFilters()),
                              (i = e.parser.getAttributeFilters()),
                              (u = n),
                              (a = (function (e, n) {
                                  var t,
                                      r,
                                      o = {},
                                      i = {},
                                      a = [];
                                  for (t in (u.firstChild &&
                                      gp(u.firstChild, function (t) {
                                          Y(e, function (e) {
                                              e.name === t.name && (o[e.name] ? o[e.name].nodes.push(t) : (o[e.name] = { filter: e, nodes: [t] }));
                                          }),
                                              Y(n, function (e) {
                                                  "string" == typeof t.attr(e.name) && (i[e.name] ? i[e.name].nodes.push(t) : (i[e.name] = { filter: e, nodes: [t] }));
                                              });
                                      }),
                                  o))
                                      Ne(o, t) && a.push(o[t]);
                                  for (r in i) Ne(i, r) && a.push(i[r]);
                                  return a;
                              })(o, i)),
                              Y(a, function (t) {
                                  Y(t.filter.callbacks, function (e) {
                                      e(t.nodes, t.filter.name, {});
                                  });
                              });
                          var s = nm({ validate: e.validate }, e.schema).serialize(n);
                          return (r.content = vo(Nt.fromDom(t)) ? s : Et.trim(s)), Ng(e, r.content, r.no_selection), r.no_events || e.fire("SetContent", r), n;
                      })(u, e, s, c)
                    : ((t = u),
                      (n = e),
                      (o = c),
                      0 === (r = s).length || /^\s+$/.test(r)
                          ? ((i = '<br data-mce-bogus="1">'),
                            "TABLE" === n.nodeName ? (r = "<tr><td>" + i + "</td></tr>") : /^(UL|OL)$/.test(n.nodeName) && (r = "<li>" + i + "</li>"),
                            (r = (a = Ss(t)) && t.schema.isValidChild(n.nodeName.toLowerCase(), a.toLowerCase()) ? ((r = i), t.dom.createHTML(a, Es(t), r)) : r || '<br data-mce-bogus="1">'),
                            Ng(t, r, o.no_selection),
                            t.fire("SetContent", o))
                          : ("raw" !== o.format && (r = nm({ validate: t.validate }, t.schema).serialize(t.parser.parse(r, { isRootContent: !0, insert: !0 }))),
                            (o.content = vo(Nt.fromDom(n)) ? r : Et.trim(r)),
                            Ng(t, o.content, o.no_selection),
                            o.no_events || t.fire("SetContent", o)),
                      o.content);
                var t, n, r, o, i, a;
            })
        );
    }
    function _g(e) {
        return y(e) ? e : R;
    }
    function Ag(i, e, t) {
        var n = e(i),
            a = _g(t);
        return n.orThunk(function () {
            return a(i)
                ? ve.none()
                : (function (e) {
                      for (var t = i.dom, n = _g(a); t.parentNode; ) {
                          var t = t.parentNode,
                              r = Nt.fromDom(t),
                              o = e(r);
                          if (o.isSome()) return o;
                          if (n(r)) break;
                      }
                      return ve.none();
                  })(e);
        });
    }
    function Rg(e, t, n) {
        var r = e.formatter.get(n);
        if (r)
            for (var o = 0; o < r.length; o++) {
                var i = r[o];
                if (fl(i) && !1 === i.inherit && e.dom.is(t, i.selector)) return 1;
            }
    }
    function Dg(t, e, n, r, o) {
        var i = t.dom.getRoot();
        return (
            e !== i &&
            ((e = t.dom.getParent(e, function (e) {
                return !!Rg(t, e, n) || e.parentNode === i || !!hp(t, e, n, r, !0);
            })),
            !!hp(t, e, n, r, o))
        );
    }
    function Tg(e, t, n) {
        return !!pp(t, n.inline) || !!pp(t, n.block) || (n.selector ? 1 === t.nodeType && e.is(t, n.selector) : void 0);
    }
    function Og(e, t, n, r, o, i) {
        var a = n[r];
        if (y(n.onmatch)) return n.onmatch(t, n, r);
        if (a)
            if (b(a.length)) {
                for (var u in a)
                    if (Ne(a, u)) {
                        var s = "attributes" === r ? e.getAttrib(t, u) : al(e, t, u),
                            c = rl(a[u], i),
                            l = K(s) || Pe(s);
                        if (!l || !K(c)) {
                            if (o && l && !n.exact) return;
                            if ((!o || n.exact) && !pp(s, il(e, c, u))) return;
                        }
                    }
            } else for (var f = 0; f < a.length; f++) if ("attributes" === r ? e.getAttrib(t, a[f]) : al(e, t, a[f])) return 1;
        return 1;
    }
    function Bg(e, t, n, r, o) {
        if (r) return Dg(e, r, t, n, o);
        if (((r = e.selection.getNode()), Dg(e, r, t, n, o))) return !0;
        var i = e.selection.getStart();
        return !(i === r || !Dg(e, i, t, n, o));
    }
    function Pg(e) {
        return (
            0 <
            (function (e) {
                for (var t = []; e; ) {
                    if ((3 === e.nodeType && e.nodeValue !== vp) || 1 < e.childNodes.length) return [];
                    1 === e.nodeType && t.push(e), (e = e.firstChild);
                }
                return t;
            })(e).length
        );
    }
    function Lg(e) {
        if (e) {
            var t = new Rr(e, e);
            for (e = t.current(); e; e = t.next()) if (jn(e)) return e;
        }
        return null;
    }
    function Ig(e) {
        var t = Nt.fromTag("span");
        return hn(t, { id: bp, "data-mce-bogus": "1", "data-mce-type": "format-caret" }), e && Pn(t, Nt.fromText(vp)), t;
    }
    function Mg(e, t, n) {
        void 0 === n && (n = !0);
        var r,
            o,
            i,
            a,
            u,
            s,
            c,
            l,
            f = e.dom,
            d = e.selection;
        Pg(t)
            ? Ym(e, !1, Nt.fromDom(t), n)
            : ((r = d.getRng()),
              (o = f.getParent(t, f.isBlock)),
              (i = r.startContainer),
              (a = r.startOffset),
              (u = r.endContainer),
              (s = r.endOffset),
              (l = Lg(t)) && l.nodeValue.charAt(0) === vp && l.deleteData(0, 1),
              (c = l),
              f.remove(t, !0),
              i === c && 0 < a && r.setStart(c, a - 1),
              u === c && 0 < s && r.setEnd(c, s - 1),
              o && f.isEmpty(o) && mm(Nt.fromDom(o)),
              d.setRng(r));
    }
    function Fg(e, t, n) {
        void 0 === n && (n = !0);
        var r = e.dom,
            o = e.selection;
        if (t) Mg(e, t, n);
        else if (!(t = Hc(e.getBody(), o.getStart()))) for (; (t = r.get(bp)); ) Mg(e, t, !1);
    }
    function Ug(e, t) {
        return e.appendChild(t), t;
    }
    function zg(e, t) {
        var n = P(
            e,
            function (e, t) {
                return Ug(e, t.cloneNode(!1));
            },
            t
        );
        return Ug(n, n.ownerDocument.createTextNode(vp));
    }
    function Hg(o, e, t, i, n, r) {
        var a,
            u,
            s = o.formatter,
            c = o.dom,
            l = U(we(s.get()), function (e) {
                return e !== i && !Te(e, "removeformat");
            });
        if (
            0 <
            U(
                ((a = o),
                (u = t),
                L(
                    l,
                    function (e, t) {
                        var n = cl(a, t);
                        return a.formatter.matchNode(u, t, {}, n) ? e.concat([t]) : e;
                    },
                    []
                )),
                function (e) {
                    return (
                        (n = i),
                        (r = ["inline", "block", "selector", "attributes", "styles", "classes"]),
                        !F((t = o).formatter.get(e), function (e) {
                            var i = a(e);
                            return F(t.formatter.get(n), function (e) {
                                var t,
                                    n = a(e),
                                    r = i,
                                    o = n;
                                return d((t = void 0 === t ? p : t)).eq(r, o);
                            });
                        })
                    );
                    function a(e) {
                        return ae(e, function (e, t) {
                            return F(r, function (e) {
                                return e === t;
                            });
                        });
                    }
                    var t, n, r;
                }
            ).length
        ) {
            var f = t.cloneNode(!1);
            return c.add(e, f), s.remove(i, n, f, r), c.remove(f), ve.some(f);
        }
        return ve.none();
    }
    function jg(e, t, n, r) {
        var o,
            i,
            a,
            u,
            s,
            c,
            l,
            f,
            d,
            m,
            g,
            p,
            h,
            v,
            b,
            y = e.dom,
            C = e.selection,
            x = [],
            w = C.getRng(),
            S = w.startContainer,
            E = w.startOffset,
            N = S;
        for (3 === S.nodeType && (E !== S.nodeValue.length && (o = !0), (N = N.parentNode)); N; ) {
            if (hp(e, N, t, n, r)) {
                i = N;
                break;
            }
            N.nextSibling && (o = !0), x.push(N), (N = N.parentNode);
        }
        i &&
            (o
                ? ((a = C.getBookmark()), w.collapse(!0), (u = Tf(Sl(e, w, e.formatter.get(t), !0))), e.formatter.remove(t, n, u, r), C.moveToBookmark(a))
                : ((s = Hc(e.getBody(), i)),
                  (d = c = Ig(!1).dom),
                  (p = (g = e.dom).getParent((m = null !== s ? s : i), A(tl, e))) && g.isEmpty(p)
                      ? m.parentNode.replaceChild(d, m)
                      : ((h = Nt.fromDom(m)),
                        (v = hu(h, "br")),
                        (b = U(
                            (function () {
                                for (var e = [], t = h.dom; t; ) e.push(Nt.fromDom(t)), (t = t.lastChild);
                                return e;
                            })().slice(-1),
                            Br
                        )),
                        v.length === b.length && Y(b, Ln),
                        g.isEmpty(m) ? m.parentNode.replaceChild(d, m) : g.insertAfter(d, m)),
                  (l = Hg(e, c, i, t, n, r)),
                  (f = zg(x.concat(l.toArray()), c)),
                  Mg(e, s, !1),
                  C.setCursorLocation(f, 1),
                  y.isEmpty(i) && y.remove(i)));
    }
    function Vg(e, t) {
        var n = e.schema.getTextInlineElements();
        return Ne(n, kt(t)) && !zc(t.dom) && !sn(t.dom);
    }
    Y(
        [
            "margin",
            "margin-left",
            "margin-right",
            "margin-top",
            "margin-bottom",
            "padding",
            "padding-left",
            "padding-right",
            "padding-top",
            "padding-bottom",
            "border",
            "border-width",
            "border-style",
            "border-color",
            "background",
            "background-attachment",
            "background-clip",
            "background-color",
            "background-image",
            "background-origin",
            "background-position",
            "background-repeat",
            "background-size",
            "float",
            "position",
            "left",
            "right",
            "top",
            "bottom",
            "z-index",
            "display",
            "transform",
            "width",
            "max-width",
            "min-width",
            "height",
            "max-height",
            "min-height",
            "overflow",
            "overflow-x",
            "overflow-y",
            "text-overflow",
            "vertical-align",
            "transition",
            "transition-delay",
            "transition-duration",
            "transition-property",
            "transition-timing-function",
        ],
        function (e) {
            am.add(e);
        }
    );
    var qg,
        $g = ["font", "text-decoration", "text-emphasis"],
        Wg = A(sm, !0, Gc),
        Kg = A(sm, !1, Gc),
        Xg = lm(!0, fm),
        Yg = lm(!1, fm),
        Gg = lm(!0, Jn),
        Jg = lm(!1, Jn),
        Qg = lm(!0, cn),
        Zg = lm(!1, cn),
        ep = lm(!0, dm),
        tp = lm(!1, dm),
        np = A(Cm, !1),
        rp = A(Cm, !0),
        op = A(ym, !1),
        ip = A(ym, !0),
        ap = A(wm, !1),
        up = A(wm, !0),
        sp = or([{ singleCellTable: ["rng", "cell"] }, { fullTable: ["table"] }, { partialTable: ["cells", "outsideDetails"] }, { multiTable: ["startTableCells", "endTableCells", "betweenRng"] }]),
        cp = function (e) {
            var t;
            return (8 === _t((t = e)) || "#comment" === kt(t) ? Bt : Ut)(e)
                .bind(cp)
                .orThunk(function () {
                    return ve.some(e);
                });
        },
        lp = function (e, t, n, r) {
            void 0 === r && (r = !0), t.deleteContents();
            var o,
                i = cp(n).getOr(n),
                a = Nt.fromDom(e.dom.getParent(i.dom, e.dom.isBlock));
            return (
                Wr(a) && (mm(a), r && e.selection.setCursorLocation(a.dom, 0)),
                je(n, a) ||
                    Y(
                        (fn(Ot(a), n)
                            ? []
                            : Ot((o = a))
                                  .map(Dn)
                                  .map(function (e) {
                                      return U(e, function (e) {
                                          return !je(o, e);
                                      });
                                  })
                                  .getOr([])
                        ).concat(Dn(n)),
                        function (e) {
                            je(e, a) || Ve(e, a) || !Wr(e) || Ln(e);
                        }
                    ),
                !0
            );
        },
        fp = function (e, t) {
            return M(hm(t, e), function (e) {
                return kn(e) && "caption" === kt(e);
            });
        },
        dp = function (e, t) {
            return mm(t), e.selection.setCursorLocation(t.dom, 0), ve.some(!0);
        },
        mp = Gn,
        gp = function (e, t) {
            t(e), e.firstChild && gp(e.firstChild, t), e.next && gp(e.next, t);
        },
        pp = ol,
        hp = function (e, t, n, r, o) {
            var i = e.formatter.get(n),
                a = e.dom;
            if (i && t)
                for (var u = 0; u < i.length; u++) {
                    var s = i[u];
                    if (Tg(e.dom, t, s) && Og(a, t, s, "attributes", o, r) && Og(a, t, s, "styles", o, r)) {
                        var c = s.classes;
                        if (c) for (var l = 0; l < c.length; l++) if (!e.dom.hasClass(t, rl(c[l], r))) return;
                        return s;
                    }
                }
        },
        vp = Co,
        bp = "_mce_caret",
        yp = {},
        Cp = fe,
        xp = ce;
    function wp(e) {
        return zn(e) && !Yc(e) && !zc(e) && !sn(e);
    }
    function Sp(e, t) {
        for (var n = e; n; n = n[t]) {
            if (jn(n) && Be(n.data)) return e;
            if (zn(n) && !Yc(n)) return n;
        }
        return e;
    }
    function Ep(e, t, n) {
        var r = em(e);
        if (t && n && ((t = Sp(t, "previousSibling")), (n = Sp(n, "nextSibling")), r.compare(t, n))) {
            for (var o = t.nextSibling; o && o !== n; ) {
                var i = o,
                    o = o.nextSibling;
                t.appendChild(i);
            }
            return (
                e.remove(n),
                Et.each(Et.grep(n.childNodes), function (e) {
                    t.appendChild(e);
                }),
                t
            );
        }
        return n;
    }
    function Np(e, t, n, r) {
        var o;
        r && !1 !== t.merge_siblings && ((o = Ep(e, el(r), r)), Ep(e, o, el(o, !0)));
    }
    function kp(t, n) {
        return function (e) {
            return !(!e || !al(t, e, n));
        };
    }
    function _p(r, o, i) {
        return function (e) {
            var t, n;
            r.setStyle(e, o, i), "" === e.getAttribute("style") && e.removeAttribute("style"), (t = r), "SPAN" === (n = e).nodeName && 0 === t.getAttribs(n).length && t.remove(n, !0);
        };
    }
    function Ap(e, t, n) {
        return e.isChildOf(t, n) && t !== n && !e.isBlock(n);
    }
    function Rp(e, t, n) {
        var r,
            o = t[n ? "startContainer" : "endContainer"],
            i = t[n ? "startOffset" : "endOffset"];
        return (
            zn(o) && ((r = o.childNodes.length - 1), !n && i && i--, (o = o.childNodes[r < i ? r : i])),
            jn(o) && n && i >= o.nodeValue.length && (o = new Rr(o, e.getBody()).next() || o),
            (jn(o) && !n && 0 === i && new Rr(o, e.getBody()).prev()) || o
        );
    }
    function Dp(e, t) {
        var n = t ? "firstChild" : "lastChild";
        if (/^(TR|TH|TD)$/.test(e.nodeName) && e[n]) {
            var r = e[n];
            return ("TR" === e.nodeName && r[n]) || r;
        }
        return e;
    }
    function Tp(e, t, n, r) {
        var o = e.create(n, r);
        return t.parentNode.insertBefore(o, t), o.appendChild(t), o;
    }
    function Op(e, t, n, r, o) {
        var i = Nt.fromDom(t),
            a = Nt.fromDom(e.create(r, o));
        return Kt(a, (n ? It : Lt)(i)), n ? (qt(i, a), Wt(a, i)) : ($t(i, a), Pn(a, i)), a.dom;
    }
    function Bp(e, t, n, r) {
        var o = el(t, n, r);
        return K(o) || "BR" === o.nodeName || e.isBlock(o);
    }
    function Pp(e, r, o, t, i) {
        var n,
            a,
            u = e.dom,
            s = u,
            c = t;
        if (!((dl((a = r)) && kh(c, a.inline)) || (ll(a) && kh(c, a.block)) || (fl(a) && zn(c) && s.is(c, a.selector)) || (r.links && "A" === t.nodeName))) return Sh.keep();
        var l,
            f,
            d,
            m,
            g,
            p,
            h,
            v,
            b = t;
        if (dl(r) && "all" === r.remove && S(r.preserve_attributes)) {
            var y = U(u.getAttribs(b), function (e) {
                return D(r.preserve_attributes, e.name.toLowerCase());
            });
            if (
                (u.removeAllAttribs(b),
                Y(y, function (e) {
                    return u.setAttrib(b, e.name, e.value);
                }),
                0 < y.length)
            )
                return Sh.rename("span");
        }
        if ("all" !== r.remove) {
            Nh(r.styles, function (e, t) {
                (e = il(u, rl(e, o), t + "")), E(t) && ((t = e), (i = null)), (!r.remove_similar && i && !kh(al(u, i, t), e)) || u.setStyle(b, t, ""), (n = !0);
            }),
                n && "" === u.getAttrib(b, "style") && (b.removeAttribute("style"), b.removeAttribute("data-mce-style")),
                Nh(r.attributes, function (e, t) {
                    var n;
                    if (((e = rl(e, o)), E(t) && ((t = e), (i = null)), r.remove_similar || !i || kh(u.getAttrib(i, t), e)))
                        if (
                            "class" === t &&
                            (e = u.getAttrib(b, t)) &&
                            ((n = ""),
                            Y(e.split(/\s+/), function (e) {
                                /mce\-\w+/.test(e) && (n += (n ? " " : "") + e);
                            }),
                            n)
                        )
                            u.setAttrib(b, t, n);
                        else {
                            if ((Eh.test(t) && b.removeAttribute("data-mce-" + t), "style" === t && on(["li"])(b) && "none" === u.getStyle(b, "list-style-type"))) return b.removeAttribute(t), void u.setStyle(b, "list-style-type", "none");
                            "class" === t && b.removeAttribute("className"), b.removeAttribute(t);
                        }
                }),
                Nh(r.classes, function (e) {
                    (e = rl(e, o)), (i && !u.hasClass(i, e)) || u.removeClass(b, e);
                });
            for (var C = u.getAttribs(b), x = 0; x < C.length; x++) {
                var w = C[x].nodeName;
                if (0 !== w.indexOf("_") && 0 !== w.indexOf("data-")) return Sh.keep();
            }
        }
        return "none" !== r.remove
            ? ((l = e),
              (d = r),
              (p = (f = b).parentNode),
              (h = l.dom),
              (v = Ss(l)),
              ll(d) &&
                  (v
                      ? p === h.getRoot() &&
                        ((d.list_block && kh(f, d.list_block)) ||
                            Y(xe(f.childNodes), function (e) {
                                nl(l, v, e.nodeName.toLowerCase()) ? (m ? m.appendChild(e) : ((m = Tp(h, e, v)), h.setAttribs(m, l.settings.forced_root_block_attrs))) : (m = null);
                            }))
                      : h.isBlock(f) && !h.isBlock(p) && (Bp(h, f, !1) || Bp(h, f.firstChild, !0, !0) || f.insertBefore(h.create("br"), f.firstChild), Bp(h, f, !0) || Bp(h, f.lastChild, !1, !0) || f.appendChild(h.create("br")))),
              (fl((g = d)) && dl(g) && fn(ue(g, "mixed"), !0) && !kh(d.inline, f)) || h.remove(f, !0),
              Sh.removed())
            : Sh.keep();
    }
    function Lp(t, e, n, r, o) {
        return Pp(t, e, n, r, o).fold(
            R,
            function (e) {
                return t.dom.rename(r, e), !0;
            },
            w
        );
    }
    function Ip(u, s, c, e, l) {
        function a(e) {
            var n,
                r,
                o,
                i,
                a,
                t =
                    ((r = s),
                    (o = c),
                    (i = l),
                    Y(sl((n = u).dom, e.parentNode).reverse(), function (e) {
                        var t;
                        a || "_start" === e.id || "_end" === e.id || ((t = hp(n, e, r, o, i)) && !1 !== t.split && (a = e));
                    }),
                    a);
            return (function (e, t, n, r, o, i, a, u) {
                var s,
                    c,
                    l = e.dom;
                if (n) {
                    for (var f = n.parentNode, d = r.parentNode; d && d !== f; d = d.parentNode) {
                        for (
                            var m = l.clone(d, !1), g = 0;
                            g < t.length &&
                            null !==
                                (m = (function (t, e, n) {
                                    return Pp(t, e, u, n, n).fold(
                                        J(n),
                                        function (e) {
                                            return t.dom.createFragment().appendChild(n), t.dom.rename(n, e);
                                        },
                                        J(null)
                                    );
                                })(e, t[g], m));
                            g++
                        );
                        m && (s && m.appendChild(s), (c = c || m), (s = m));
                    }
                    !i || (a.mixed && l.isBlock(n)) || (r = l.split(n, r)), s && (o.parentNode.insertBefore(s, o), c.appendChild(o), dl(a) && Np(l, a, 0, s));
                }
                return r;
            })(u, m, t, e, e, !0, g, c);
        }
        function f(t) {
            return F(m, function (e) {
                return Lp(u, e, c, t, t);
            });
        }
        function d(e) {
            var t,
                n = h.get(e ? "_start" : "_end"),
                r = n[e ? "firstChild" : "lastChild"];
            return (
                Yc((t = r)) && zn(t) && ("_start" === t.id || "_end" === t.id) && (r = r[e ? "firstChild" : "lastChild"]),
                jn(r) && 0 === r.data.length && (r = e ? n.previousSibling || n.nextSibling : n.nextSibling || n.previousSibling),
                h.remove(n, !0),
                r
            );
        }
        function t(e) {
            var t = Sl(u, e, m, e.collapsed);
            if (g.split) {
                if (((t = Tf(t)), (r = Rp(u, t, !0)) !== (o = Rp(u, t)))) {
                    if (((r = Dp(r, !0)), (o = Dp(o, !1)), Ap(h, r, o))) {
                        var n = ve.from(r.firstChild).getOr(r);
                        return a(Op(h, n, !0, "span", { id: "_start", "data-mce-type": "bookmark" })), void d(!0);
                    }
                    if (Ap(h, o, r)) return (n = ve.from(o.lastChild).getOr(o)), a(Op(h, n, !1, "span", { id: "_end", "data-mce-type": "bookmark" })), void d(!1);
                    var r = Tp(h, r, "span", { id: "_start", "data-mce-type": "bookmark" }),
                        o = Tp(h, o, "span", { id: "_end", "data-mce-type": "bookmark" }),
                        i = h.createRng();
                    i.setStartAfter(r),
                        i.setEndBefore(o),
                        El(h, i, function (e) {
                            Y(e, function (e) {
                                Yc(e) || Yc(e.parentNode) || a(e);
                            });
                        }),
                        a(r),
                        a(o),
                        (r = d(!0)),
                        (o = d());
                } else r = o = a(r);
                (t.startContainer = r.parentNode || r), (t.startOffset = h.nodeIndex(r)), (t.endContainer = o.parentNode || o), (t.endOffset = h.nodeIndex(o) + 1);
            }
            El(h, t, function (e) {
                Y(e, v);
            });
        }
        var n,
            m = u.formatter.get(s),
            g = m[0],
            p = !0,
            h = u.dom,
            r = u.selection,
            v = function (t) {
                var e = !0,
                    n = !1;
                zn(t) && h.getContentEditable(t) && ((e = p), (p = "true" === h.getContentEditable(t)), (n = !0));
                var r,
                    o,
                    i = xe(t.childNodes);
                if ((p && !n && ((r = f(t)), (o = t.parentNode), !r && V(o) && ml(g) && f(o)), g.deep && i.length)) {
                    for (var a = 0; a < i.length; a++) v(i[a]);
                    n && (p = e);
                }
                Y(["underline", "line-through", "overline"], function (e) {
                    zn(t) && u.dom.getStyle(t, "text-decoration") === e && t.parentNode && ul(h, t.parentNode) === e && Lp(u, { deep: !1, exact: !0, inline: "span", styles: { textDecoration: e } }, null, t);
                });
            };
        if (e) return Qc(e) ? ((n = h.createRng()).setStartBefore(e), n.setEndAfter(e), t(n)) : t(e), void yf(u, s, e, c);
        if ("false" !== h.getContentEditable(r.getNode()))
            r.isCollapsed() && dl(g) && !_l(u).length
                ? jg(u, s, c, l)
                : (Bl(r, !0, function () {
                      Ol(u, t);
                  }),
                  dl(g) && Bg(u, s, c, r.getStart()) && Zc(h, r, r.getRng()),
                  u.nodeChanged()),
                yf(u, s, e, c);
        else {
            e = r.getNode();
            for (var o = 0; o < m.length && (!m[o].ceFalseOverride || !Lp(u, m[o], c, e, e)); o++);
            yf(u, s, e, c);
        }
    }
    function Mp(e) {
        return zn(e) && !Yc(e) && !zc(e) && !sn(e);
    }
    function Fp(e) {
        return Ne(e, "vars");
    }
    function Up(n, e, r, o, i) {
        return I(
            e,
            function (e) {
                var t = n.formatter.matchNode(e, r, null != i ? i : {}, o);
                return !b(t);
            },
            function (e) {
                return Rg(n, e, r) || (!o && V(n.formatter.matchNode(e, r, i, !0)));
            }
        );
    }
    function zp(e, t) {
        var n = null != t ? t : Dh(e);
        return U(sl(e.dom, n), function (e) {
            return zn(e) && !sn(e);
        });
    }
    function Hp(e, o, i, a, t, n) {
        var r, u, s, c, l, f, d, m, g;
        return (
            null === o.get() &&
                ((u = e),
                (r = o).set({}),
                u.on("NodeChange", function (e) {
                    Th(u, e.element, r.get());
                }),
                u.on("FormatApply FormatRemove", function (e) {
                    var t = ve
                        .from(e.node)
                        .map(function (e) {
                            return Qc(e) ? e : e.startContainer;
                        })
                        .bind(function (e) {
                            return zn(e) ? ve.some(e) : ve.from(e.parentElement);
                        })
                        .getOrThunk(function () {
                            return Dh(u);
                        });
                    Th(u, t, r.get());
                })),
            (s = e),
            (l = i),
            (f = a),
            (d = t),
            (m = n),
            (g = (c = o).get()),
            Y(l.split(","), function (t) {
                function e() {
                    var e = zp(s);
                    return Up(s, e, t, d, m).isSome();
                }
                var n,
                    r = ue(g, t).getOrThunk(function () {
                        var e = { withSimilar: { state: ru(!1), similar: !0, callbacks: [] }, withoutSimilar: { state: ru(!1), similar: !1, callbacks: [] }, withVars: [] };
                        return (g[t] = e);
                    });
                b(m) ? ((n = d ? r.withSimilar : r.withoutSimilar).callbacks.push(f), 1 === n.callbacks.length && n.state.set(e())) : r.withVars.push({ state: ru(e()), similar: d, vars: m, callback: f });
            }),
            c.set(g),
            {
                unbind: function () {
                    var e,
                        t = i,
                        n = a,
                        r = (e = o).get();
                    Y(t.split(","), function (t) {
                        return ue(r, t).each(function (e) {
                            r[t] = {
                                withSimilar: _e(_e({}, e.withSimilar), {
                                    callbacks: U(e.withSimilar.callbacks, function (e) {
                                        return e !== n;
                                    }),
                                }),
                                withoutSimilar: _e(_e({}, e.withoutSimilar), {
                                    callbacks: U(e.withoutSimilar.callbacks, function (e) {
                                        return e !== n;
                                    }),
                                }),
                                withVars: U(e.withVars, function (e) {
                                    return e.callback !== n;
                                }),
                            };
                        });
                    }),
                        e.set(r);
                },
            }
        );
    }
    function jp(e, t) {
        var n = (t || document).createDocumentFragment();
        return (
            Y(e, function (e) {
                n.appendChild(e.dom);
            }),
            Nt.fromDom(n)
        );
    }
    function Vp(e, t, n) {
        return { element: e, width: t, rows: n };
    }
    function qp(e, t) {
        return { element: e, cells: t };
    }
    function $p(e, t) {
        var n = parseInt(vn(e, t), 10);
        return isNaN(n) ? 1 : n;
    }
    function Wp(e) {
        return L(
            e,
            function (e, t) {
                return t.cells.length > e ? t.cells.length : e;
            },
            0
        );
    }
    function Kp(e, t) {
        for (var n = e.rows, r = 0; r < n.length; r++) for (var o = n[r].cells, i = 0; i < o.length; i++) if (je(o[i], t)) return ve.some({ x: i, y: r });
        return ve.none();
    }
    function Xp(e, t, n, r, o) {
        for (var i = [], a = e.rows, u = n; u <= o; u++) {
            var s = a[u].cells,
                c = t < r ? s.slice(t, r + 1) : s.slice(r, t + 1);
            i.push(qp(a[u].element, c));
        }
        return i;
    }
    function Yp(e) {
        var o = Vp(wu(e), 0, []);
        return (
            Y(hu(e, "tr"), function (n, r) {
                Y(hu(n, "td,th"), function (e, t) {
                    !(function (e, t, n, r, o) {
                        for (var i = $p(o, "rowspan"), a = $p(o, "colspan"), u = e.rows, s = n; s < n + i; s++) {
                            u[s] || (u[s] = qp(Su(r), []));
                            for (var c = t; c < t + a; c++) u[s].cells[c] = s === n && c === t ? o : wu(o);
                        }
                    })(
                        o,
                        (function (e, t, n) {
                            for (; (r = t), ((o = e.rows)[n] ? o[n].cells : [])[r]; ) t++;
                            var r, o;
                            return t;
                        })(o, t, r),
                        r,
                        n,
                        e
                    );
                });
            }),
            Vp(o.element, Wp(o.rows), o.rows)
        );
    }
    function Gp(e, t) {
        var n,
            r,
            o,
            i = Nt.fromDom(t.commonAncestorContainer),
            a = hm(i, e),
            u = U(a, function (e) {
                return Or(e) || co(e);
            }),
            s =
                ((o = t),
                M((r = a), function (e) {
                    return "li" === kt(e) && Rl(e, o);
                }).fold(J([]), function (e) {
                    return M(r, function (e) {
                        return "ul" === kt(e) || "ol" === kt(e);
                    })
                        .map(function (e) {
                            var t = Nt.fromTag(kt(e));
                            return (
                                Cn(
                                    t,
                                    ae(Sn(e), function (e, t) {
                                        return Ge(t, "list-style");
                                    })
                                ),
                                [Nt.fromTag("li"), t]
                            );
                        })
                        .getOr([]);
                }));
        return T(
            u.concat(
                s.length
                    ? s
                    : go((n = i))
                    ? Ot(n)
                          .filter(mo)
                          .fold(J([]), function (e) {
                              return [n, e];
                          })
                    : mo(n)
                    ? [n]
                    : []
            ),
            wu
        );
    }
    function Jp() {
        return jp([]);
    }
    function Qp(e, i) {
        return hr(i[0], "table", A(je, e))
            .bind(function (e) {
                var s,
                    t,
                    n = i[0],
                    r = i[i.length - 1],
                    o = Yp(e);
                return (
                    (t = r),
                    Kp((s = o), n)
                        .bind(function (u) {
                            return Kp(s, t).map(function (e) {
                                return (t = s), (n = u.x), (r = u.y), (o = e.x), (a = r < (i = e.y) ? Xp(t, n, r, o, i) : Xp(t, n, i, o, r)), Vp(t.element, Wp(a), a);
                                var t, n, r, o, i, a;
                            });
                        })
                        .map(function (e) {
                            return jp([
                                ((n = T((t = e).rows, function (e) {
                                    var t = T(e.cells, function (e) {
                                            var t = Su(e);
                                            return yn(t, "colspan"), yn(t, "rowspan"), t;
                                        }),
                                        n = wu(e.element);
                                    return Kt(n, t), n;
                                })),
                                (r = wu(t.element)),
                                Kt((o = Nt.fromTag("tbody")), n),
                                Pn(r, o),
                                r),
                            ]);
                            var t, n, r, o;
                        })
                );
            })
            .getOrThunk(Jp);
    }
    function Zp(e, t) {
        var n,
            r,
            o,
            i,
            a,
            u,
            s,
            c = kl(t, e);
        return 0 < c.length
            ? Qp(e, c)
            : ((n = e),
              0 < (r = t).length && r[0].collapsed
                  ? Jp()
                  : ((o = n),
                    (i = r[0]),
                    (a = Nt.fromDom(i.cloneContents())),
                    (s = L(
                        (u = Gp(o, i)),
                        function (e, t) {
                            return Pn(t, e), t;
                        },
                        a
                    )),
                    0 < u.length ? jp([s]) : s));
    }
    function eh(e, t) {
        return 0 <= t && t < e.length && Gc(e.charAt(t));
    }
    function th(e, t) {
        var n = wo(e.innerText);
        return t ? n.replace(/^[ \f\n\r\t\v]+/, "") : n;
    }
    function nh(e) {
        return zn(e) ? e.outerHTML : jn(e) ? Go.encodeRaw(e.data, !1) : Vn(e) ? "\x3c!--" + e.data + "--\x3e" : "";
    }
    function rh(e, c) {
        var l = 0;
        Y(e, function (e) {
            var t, n, r, o, i, a, u, s;
            0 === e[0]
                ? l++
                : 1 === e[0]
                ? ((o = c),
                  (i = e[1]),
                  (a = l),
                  (s = (function (e) {
                      var t,
                          n = document.createElement("div"),
                          r = document.createDocumentFragment();
                      for (e && (n.innerHTML = e); (t = n.firstChild); ) r.appendChild(t);
                      return r;
                  })(i)),
                  o.hasChildNodes() && a < o.childNodes.length ? (u = o.childNodes[a]).parentNode.insertBefore(s, u) : o.appendChild(s),
                  l++)
                : 2 === e[0] && ((n = l), (t = c).hasChildNodes() && n < t.childNodes.length && (r = t.childNodes[n]).parentNode.removeChild(r));
        });
    }
    function oh(n) {
        var e,
            t = H(
                ((e = n.getBody()),
                U(T(xe(e.childNodes), nh), function (e) {
                    return 0 < e.length;
                })),
                function (e) {
                    var t = Zd(n.serializer, e);
                    return 0 < t.length ? [t] : [];
                }
            ),
            r = t.join("");
        return -1 !== r.indexOf("</iframe>") ? { type: "fragmented", fragments: t, content: "", bookmark: null, beforeBookmark: null } : { type: "complete", fragments: null, content: r, bookmark: null, beforeBookmark: null };
    }
    function ih(e, t, n) {
        var r,
            o,
            i,
            g,
            p,
            a,
            h,
            v,
            c,
            l,
            u,
            s = n ? t.beforeBookmark : t.bookmark;
        function b(e, t, n, r) {
            for (var o = e; o - t < r && o < n && g[o] === p[o - t]; ) ++o;
            return { start: e, end: o, diag: t };
        }
        "fragmented" === t.type
            ? ((r = t.fragments),
              (o = e.getBody()),
              (i = T(xe(o.childNodes), nh)),
              rh(
                  ((p = r),
                  (a = (g = i).length + p.length + 2),
                  (h = new Array(a)),
                  (v = new Array(a)),
                  (c = function (e, t, n, r, o) {
                      var i = l(e, t, n, r);
                      if (null === i || (i.start === t && i.diag === t - r) || (i.end === e && i.diag === e - n))
                          for (var a = e, u = n; a < t || u < r; ) a < t && u < r && g[a] === p[u] ? (o.push([0, g[a]]), ++a, ++u) : r - n < t - e ? (o.push([2, g[a]]), ++a) : (o.push([1, p[u]]), ++u);
                      else {
                          c(e, i.start, n, i.start - i.diag, o);
                          for (var s = i.start; s < i.end; ++s) o.push([0, g[s]]);
                          c(i.end, t, i.end - i.diag, r, o);
                      }
                  }),
                  (l = function (e, t, n, r) {
                      var o = t - e,
                          i = r - n;
                      if (0 == o || 0 == i) return null;
                      var a,
                          u,
                          s,
                          c,
                          l,
                          f = o - i,
                          d = i + o,
                          m = (d % 2 == 0 ? d : 1 + d) / 2;
                      for (h[1 + m] = e, v[1 + m] = t + 1, a = 0; a <= m; ++a) {
                          for (u = -a; u <= a; u += 2) {
                              for (s = u + m, u === -a || (u !== a && h[s - 1] < h[s + 1]) ? (h[s] = h[s + 1]) : (h[s] = h[s - 1] + 1), l = (c = h[s]) - e + n - u; c < t && l < r && g[c] === p[l]; ) (h[s] = ++c), ++l;
                              if (f % 2 != 0 && f - a <= u && u <= f + a && v[s - f] <= h[s]) return b(v[s - f], u + e - n, t, r);
                          }
                          for (u = f - a; u <= f + a; u += 2) {
                              for (s = u + m - f, u === f - a || (u !== f + a && v[s + 1] <= v[s - 1]) ? (v[s] = v[s + 1] - 1) : (v[s] = v[s - 1]), l = (c = v[s] - 1) - e + n - u; e <= c && n <= l && g[c] === p[l]; ) (v[s] = c--), l--;
                              if (f % 2 == 0 && -a <= u && u <= a && v[s] <= h[s + f]) return b(v[s], u + e - n, t, r);
                          }
                      }
                  }),
                  (u = []),
                  c(0, g.length, 0, p.length, u),
                  u),
                  o
              ))
            : e.setContent(t.content, { format: "raw", no_selection: !V(s) || !jc(s) || !s.isFakeCaret }),
            e.selection.moveToBookmark(s);
    }
    function ah(e) {
        return "fragmented" === e.type ? e.fragments.join("") : e.content;
    }
    function uh(e) {
        var t = Nt.fromTag("body", Oh());
        return Cu(t, ah(e)), Y(hu(t, "*[data-mce-bogus]"), Yt), t.dom.innerHTML;
    }
    function sh(e, t) {
        return !(!e || !t) && ((r = t), ah(e) === ah(r) || ((n = t), uh(e) === uh(n)));
        var n, r;
    }
    function ch(e) {
        return 0 === e.get();
    }
    function lh(e, t, n) {
        ch(n) && (e.typing = t);
    }
    function fh(e, t) {
        e.typing && (lh(e, !1, t), e.add());
    }
    function dh(c) {
        return {
            undoManager: {
                beforeChange: function (e, t) {
                    var n = c,
                        r = t;
                    ch(e) && r.set(mc(n.selection));
                },
                add: function (e, t, n, r, o, i) {
                    return (function (e, t, n, r, o, i, a) {
                        var u = oh(e);
                        if (((i = Et.extend((i = i || {}), u)), !1 === ch(r) || e.removed)) return null;
                        var s = t.data[n.get()];
                        if (e.fire("BeforeAddUndo", { level: i, lastLevel: s, originalEvent: a }).isDefaultPrevented()) return null;
                        if (s && sh(s, i)) return null;
                        t.data[n.get()] &&
                            o.get().each(function (e) {
                                t.data[n.get()].beforeBookmark = e;
                            });
                        var c = e.getParam("custom_undo_redo_levels", 0, "number");
                        if (c && t.data.length > c) {
                            for (var l = 0; l < t.data.length - 1; l++) t.data[l] = t.data[l + 1];
                            t.data.length--, n.set(t.data.length);
                        }
                        (i.bookmark = mc(e.selection)), n.get() < t.data.length - 1 && (t.data.length = n.get() + 1), t.data.push(i), n.set(t.data.length - 1);
                        var f = { level: i, lastLevel: s, originalEvent: a };
                        return 0 < n.get() ? (e.setDirty(!0), e.fire("AddUndo", f), e.fire("change", f)) : e.fire("AddUndo", f), i;
                    })(c, e, t, n, r, o, i);
                },
                undo: function (e, t, n) {
                    return (r = c), (i = t), (a = n), (o = e).typing && (o.add(), (o.typing = !1), lh(o, !1, i)), 0 < a.get() && (a.set(a.get() - 1), ih(r, (u = o.data[a.get()]), !0), r.setDirty(!0), r.fire("Undo", { level: u })), u;
                    var r, o, i, a, u;
                },
                redo: function (e, t) {
                    return (n = c), (o = t), (r = e).get() < o.length - 1 && (r.set(r.get() + 1), ih(n, (i = o[r.get()]), !1), n.setDirty(!0), n.fire("Redo", { level: i })), i;
                    var n, r, o, i;
                },
                clear: function (e, t) {
                    var n,
                        r = c,
                        o = t;
                    ((n = e).data = []), o.set(0), (n.typing = !1), r.fire("ClearUndos");
                },
                reset: function (e) {
                    var t;
                    (t = e).clear(), t.add();
                },
                hasUndo: function (e, t) {
                    return (n = c), (r = e), 0 < t.get() || (r.typing && r.data[0] && !sh(oh(n), r.data[0]));
                    var n, r;
                },
                hasRedo: function (e, t) {
                    return (n = e), t.get() < n.data.length - 1 && !n.typing;
                    var n;
                },
                transact: function (e, t, n) {
                    return (o = n), fh((r = e), t), r.beforeChange(), r.ignore(o), r.add();
                    var r, o;
                },
                ignore: function (e, t) {
                    try {
                        e.set(e.get() + 1), t();
                    } finally {
                        e.set(e.get() - 1);
                    }
                },
                extra: function (e, t, n, r) {
                    var o,
                        i,
                        a = c,
                        u = t,
                        s = r;
                    (o = e).transact(n) && ((i = o.data[u.get()].bookmark), ih(a, o.data[u.get() - 1], !0), o.transact(s) && (o.data[u.get() - 1].beforeBookmark = i));
                },
            },
            formatter: {
                match: function (e, t, n, r) {
                    return Bg(c, e, t, n, r);
                },
                matchAll: function (e, t) {
                    return (
                        (o = e),
                        (i = t),
                        (a = []),
                        (u = {}),
                        (n = (r = c).selection.getStart()),
                        r.dom.getParent(
                            n,
                            function (e) {
                                for (var t = 0; t < o.length; t++) {
                                    var n = o[t];
                                    !u[n] && hp(r, e, n, i) && ((u[n] = !0), a.push(n));
                                }
                            },
                            r.dom.getRoot()
                        ),
                        a
                    );
                    var r, o, i, a, u, n;
                },
                matchNode: function (e, t, n, r) {
                    return hp(c, e, t, n, r);
                },
                canApply: function (u) {
                    return (function (e) {
                        var t = e.formatter.get(u),
                            n = e.dom;
                        if (t)
                            for (var r = sl(n, e.selection.getStart()), o = t.length - 1; 0 <= o; o--) {
                                var i = t[o];
                                if (!fl(i) || V(i.defaultBlock)) return !0;
                                for (var a = r.length - 1; 0 <= a; a--) if (n.is(r[a], i.selector)) return !0;
                            }
                        return !1;
                    })(c);
                },
                closest: function (e) {
                    return (
                        (r = c),
                        (o = e),
                        ve
                            .from(r.selection.getStart(!0))
                            .bind(function (e) {
                                return Ag(
                                    Nt.fromDom(e),
                                    function (n) {
                                        return ee(o, function (e) {
                                            return hp(r, n.dom, (t = e)) ? ve.some(t) : ve.none();
                                            var t;
                                        });
                                    },
                                    t
                                );
                            })
                            .getOrNull()
                    );
                    function t(e) {
                        return je(e, Nt.fromDom(r.getBody()));
                    }
                    var r, o;
                },
                apply: function (e, t, n) {
                    return Rh(c, e, t, n);
                },
                remove: function (e, t, n, r) {
                    return Ip(c, e, t, n, r);
                },
                toggle: function (e, t, n) {
                    var r,
                        o = e,
                        i = t,
                        a = n,
                        u = (r = c).formatter.get(o);
                    (!Bg(r, o, i, a) || ("toggle" in u[0] && !u[0].toggle) ? Rh : Ip)(r, o, i, a);
                },
                formatChanged: function (e, t, n, r, o) {
                    return Hp(c, e, t, n, r, o);
                },
            },
            editor: {
                getContent: function (e, t) {
                    return (
                        (d = c),
                        (m = e),
                        (g = t),
                        ve.from(d.getBody()).fold(J("tree" === m.format ? new Ud("body", 11) : ""), function (e) {
                            return (
                                (t = d),
                                (r = e),
                                (o = g),
                                (c = _e(_e({}, (n = m)), { format: o, get: !0, getInner: !0 })),
                                (l = n.no_events ? c : t.fire("BeforeGetContent", c)),
                                (f =
                                    "raw" === l.format
                                        ? Et.trim(rm(t.serializer, r.innerHTML))
                                        : "text" === l.format
                                        ? t.dom.isEmpty(r)
                                            ? ""
                                            : wo(r.innerText || r.textContent)
                                        : "tree" === l.format
                                        ? t.serializer.serialize(r, l)
                                        : ((a = (i = t).serializer.serialize(r, l)), (u = Ss(i)), (s = new RegExp("^(<" + u + "[^>]*>(&nbsp;|&#160;|\\s|\xa0|<br \\/>|)<\\/" + u + ">[\r\n]*|<br \\/>[\r\n]*)$")), a.replace(s, ""))),
                                D(["text", "tree"], l.format) || vo(Nt.fromDom(r)) ? (l.content = f) : (l.content = Et.trim(f)),
                                (l.no_events ? l : t.fire("GetContent", l)).content
                            );
                            var t, n, r, o, i, a, u, s, c, l, f;
                        })
                    );
                    var d, m, g;
                },
                setContent: function (e, t) {
                    return kg(c, e, t);
                },
                insertContent: function (e, t) {
                    return Sg(c, e, t);
                },
                addVisual: function (e) {
                    var i,
                        t = e,
                        a = (i = c).dom,
                        n = V(t) ? t : i.getBody();
                    b(i.hasVisual) && (i.hasVisual = i.getParam("visual", !0, "boolean")),
                        Y(a.select("table,a", n), function (e) {
                            switch (e.nodeName) {
                                case "TABLE":
                                    var t = i.getParam("visual_table_class", "mce-item-table", "string"),
                                        n = a.getAttrib(e, "border");
                                    (n && "0" !== n) || !i.hasVisual ? a.removeClass(e, t) : a.addClass(e, t);
                                    break;
                                case "A":
                                    var r, o;
                                    a.getAttrib(e, "href") || ((r = a.getAttrib(e, "name") || e.id), (o = i.getParam("visual_anchor_class", "mce-item-anchor", "string")), r && i.hasVisual ? a.addClass(e, o) : a.removeClass(e, o));
                            }
                        }),
                        i.fire("VisualAid", { element: t, hasVisual: i.hasVisual });
                },
            },
            selection: {
                getContent: function (e, t) {
                    return (function (e, t, n) {
                        var r,
                            o = ((r = t), _e(_e({}, (n = void 0 === n ? {} : n)), { format: r, get: !0, selection: !0 })),
                            i = e.fire("BeforeGetContent", o);
                        if (i.isDefaultPrevented()) return e.fire("GetContent", i), i.content;
                        if ("text" === i.format)
                            return (
                                (m = e),
                                ve
                                    .from(m.selection.getRng())
                                    .map(function (e) {
                                        var t = ve.from(m.dom.getParent(e.commonAncestorContainer, m.dom.isBlock)),
                                            n = m.getBody(),
                                            r = t
                                                .map(function (e) {
                                                    return e.nodeName;
                                                })
                                                .getOr("div")
                                                .toLowerCase(),
                                            o = xt.browser.isIE() && "pre" !== r,
                                            i = m.dom.add(n, r, { "data-mce-bogus": "all", style: "overflow: hidden; opacity: 0;" }, e.cloneContents()),
                                            a = th(i, o),
                                            u = wo(i.textContent);
                                        if ((m.dom.remove(i), eh(u, 0) || eh(u, u.length - 1))) {
                                            var s = th(t.getOr(n), o),
                                                c = s.indexOf(a);
                                            return -1 === c ? a : (eh(s, c - 1) ? " " : "") + a + (eh(s, c + a.length) ? " " : "");
                                        }
                                        return a;
                                    })
                                    .getOr("")
                            );
                        i.getInner = !0;
                        var a,
                            u,
                            s,
                            c,
                            l,
                            f,
                            d,
                            m,
                            g =
                                ((u = i),
                                (s = (a = e).selection.getRng()),
                                (c = a.dom.create("body")),
                                (l = a.selection.getSel()),
                                (f = wd(a, Nl(l))),
                                (d = u.contextual ? Zp(Nt.fromDom(a.getBody()), f).dom : s.cloneContents()) && c.appendChild(d),
                                a.selection.serializer.serialize(c, u));
                        return "tree" === i.format ? g : ((i.content = e.selection.isCollapsed() ? "" : g), e.fire("GetContent", i), i.content);
                    })(c, e, t);
                },
            },
            raw: {
                getModel: function () {
                    return ve.none();
                },
            },
        };
    }
    function mh(e) {
        return Ne(e.plugins, "rtc");
    }
    function gh(e) {
        var u = e;
        return ue(e.plugins, "rtc")
            .bind(function (e) {
                return ve.from(e.setup);
            })
            .fold(
                function () {
                    return (u.rtcInstance = dh(e)), ve.none();
                },
                function (e) {
                    var t, n;
                    return (
                        (u.rtcInstance =
                            ((t = J(null)),
                            (n = J("")),
                            {
                                undoManager: { beforeChange: te, add: t, undo: t, redo: t, clear: te, reset: te, hasUndo: R, hasRedo: R, transact: t, ignore: te, extra: te },
                                formatter: { match: R, matchAll: J([]), matchNode: J(void 0), canApply: R, closest: n, apply: te, remove: te, toggle: te, formatChanged: J({ unbind: te }) },
                                editor: { getContent: n, setContent: n, insertContent: te, addVisual: te },
                                selection: { getContent: n },
                                raw: { getModel: J(ve.none()) },
                            })),
                        ve.some(function () {
                            return e().then(function (e) {
                                return (
                                    (u.rtcInstance =
                                        ((i = e.undoManager),
                                        (a = e.formatter),
                                        (n = e.editor),
                                        (r = e.selection),
                                        (t = e.raw),
                                        {
                                            undoManager: {
                                                beforeChange: i.beforeChange,
                                                add: i.add,
                                                undo: i.undo,
                                                redo: i.redo,
                                                clear: i.clear,
                                                reset: i.reset,
                                                hasUndo: i.hasUndo,
                                                hasRedo: i.hasRedo,
                                                transact: function (e, t, n) {
                                                    return i.transact(n);
                                                },
                                                ignore: function (e, t) {
                                                    return i.ignore(t);
                                                },
                                                extra: function (e, t, n, r) {
                                                    return i.extra(n, r);
                                                },
                                            },
                                            formatter: {
                                                match: function (e, t, n, r) {
                                                    return a.match(e, o(t), r);
                                                },
                                                matchAll: a.matchAll,
                                                matchNode: a.matchNode,
                                                canApply: function (e) {
                                                    return a.canApply(e);
                                                },
                                                closest: function (e) {
                                                    return a.closest(e);
                                                },
                                                apply: function (e, t, n) {
                                                    return a.apply(e, o(t));
                                                },
                                                remove: function (e, t, n, r) {
                                                    return a.remove(e, o(t));
                                                },
                                                toggle: function (e, t, n) {
                                                    return a.toggle(e, o(t));
                                                },
                                                formatChanged: function (e, t, n, r, o) {
                                                    return a.formatChanged(t, n, r, o);
                                                },
                                            },
                                            editor: {
                                                getContent: function (e, t) {
                                                    return n.getContent(e);
                                                },
                                                setContent: function (e, t) {
                                                    return n.setContent(e, t);
                                                },
                                                insertContent: function (e, t) {
                                                    return n.insertContent(e);
                                                },
                                                addVisual: n.addVisual,
                                            },
                                            selection: {
                                                getContent: function (e, t) {
                                                    return r.getContent(t);
                                                },
                                            },
                                            raw: {
                                                getModel: function () {
                                                    return ve.some(t.getRawModel());
                                                },
                                            },
                                        })),
                                    e.rtc.isRemote
                                );
                                function o(e) {
                                    return h(e) ? e : {};
                                }
                                var i, a, n, r, t;
                            });
                        })
                    );
                }
            );
    }
    function ph(e) {
        return e.rtcInstance || dh(e);
    }
    function hh(e) {
        var t = e.rtcInstance;
        if (t) return t;
        throw new Error("Failed to get RTC instance not yet initialized.");
    }
    function vh(e) {
        return 0 === e.dom.length ? (Ln(e), ve.none()) : ve.some(e);
    }
    function bh(e, t, u, s) {
        e.bind(function (a) {
            return (
                (s ? Um : Fm)(a.dom, s ? a.dom.length : 0),
                t.filter(_n).map(function (e) {
                    var t = u,
                        n = s,
                        r = a.dom,
                        o = e.dom,
                        i = (n ? r : o).length;
                    n ? (zm(r, o, !1, !n), t.setStart(o, i)) : (zm(o, r, !1, !n), t.setEnd(o, i));
                })
            );
        }).orThunk(function () {
            var e = s;
            return t
                .filter(function (e) {
                    return Fl.isBookmarkNode(e.dom);
                })
                .bind(e ? Pt : Bt)
                .or(t)
                .filter(_n)
                .map(function (e) {
                    var n,
                        r = s;
                    Ot((n = e)).each(function (e) {
                        var t = n.dom;
                        r && Dm(e, as(t, 0)) ? Fm(t, 0) : !r && Tm(e, as(t, t.length)) && Um(t, t.length);
                    });
                });
        });
    }
    function yh(e, t, n) {
        var r,
            o = ((r = t), _e(_e({ format: "html" }, (n = void 0 === n ? {} : n)), { set: !0, selection: !0, content: r })),
            i = o;
        if (!o.no_events) {
            var a = e.fire("BeforeSetContent", o);
            if (a.isDefaultPrevented()) return void e.fire("SetContent", a);
            i = a;
        }
        i.content = (function (e, t) {
            if ("raw" === t.format) return t.content;
            var n = e.selection.getRng(),
                r = e.dom.getParent(n.commonAncestorContainer, e.dom.isBlock),
                o = r ? { context: r.nodeName.toLowerCase() } : {},
                i = e.parser.parse(t.content, _e(_e({ isRootContent: !0, forced_root_block: !1 }, o), t));
            return nm({ validate: e.validate }, e.schema).serialize(i);
        })(e, i);
        var u = e.selection.getRng();
        !(function (e, t) {
            var n = ve.from(t.firstChild).map(Nt.fromDom),
                r = ve.from(t.lastChild).map(Nt.fromDom);
            e.deleteContents(), e.insertNode(t);
            var o = n.bind(Bt).filter(_n).bind(vh),
                i = r.bind(Pt).filter(_n).bind(vh);
            bh(o, n, e, !0), bh(i, r, e, !1), e.collapse(!1);
        })(u, u.createContextualFragment(i.content)),
            e.selection.setRng(u),
            Zf(e, u),
            i.no_events || e.fire("SetContent", i);
    }
    function Ch(e, t, n) {
        var r;
        e &&
            Ne(e, t) &&
            (0 ===
            (r = U(e[t], function (e) {
                return e !== n;
            })).length
                ? delete e[t]
                : (e[t] = r));
    }
    (qg = function (e) {
        var t,
            n = e.selection.getRng(),
            r = on(["pre"]);
        n.collapsed ||
            ((t = e.selection.getSelectedBlocks()),
            xp(
                Cp(Cp(t, r), function (e) {
                    return r(e.previousSibling) && -1 !== de(t, e.previousSibling);
                }),
                function (e) {
                    var t,
                        n = e.previousSibling;
                    Wa((t = e)).remove(), Wa(n).append("<br><br>").append(t.childNodes);
                }
            ));
    }),
        yp["pre"] || (yp.pre = []),
        yp.pre.push(qg);
    var xh = Et.each,
        wh = function (e, t, n) {
            xh(e.childNodes, function (e) {
                wp(e) && (t(e) && n(e), e.hasChildNodes() && wh(e, t, n));
            });
        },
        Sh = or([{ keep: [] }, { rename: ["name"] }, { removed: [] }]),
        Eh = /^(src|href|style)$/,
        Nh = Et.each,
        kh = ol,
        _h = Et.each,
        Ah = Et.each,
        Rh = function (S, E, N, r) {
            function k(n, e) {
                var t;
                y((e = void 0 === e ? A : e).onformat) && e.onformat(n, e, N, r),
                    Ah(e.styles, function (e, t) {
                        u.setStyle(n, t, rl(e, N));
                    }),
                    !e.styles || ((t = u.getAttrib(n, "style")) && u.setAttrib(n, "data-mce-style", t)),
                    Ah(e.attributes, function (e, t) {
                        u.setAttrib(n, t, rl(e, N));
                    }),
                    Ah(e.classes, function (e) {
                        (e = rl(e, N)), u.hasClass(n, e) || u.addClass(n, e);
                    });
            }
            function g(e, t) {
                var n = !1;
                return (
                    Ah(e, function (e) {
                        return !!fl(e) && ((V(e.collapsed) && e.collapsed !== a) || !u.is(t, e.selector) || zc(t) ? void 0 : (k(t, e), !(n = !0)));
                    }),
                    n
                );
            }
            function o(x, e, l) {
                var w = [],
                    f = !0,
                    d = A.inline || A.block,
                    m = (function (e) {
                        if (X(e)) {
                            var t = u.create(e);
                            return k(t), t;
                        }
                        return null;
                    })(d);
                El(x, e, function (e) {
                    var s,
                        c = function (e) {
                            var t = !1,
                                n = f,
                                r = e.nodeName.toLowerCase(),
                                o = e.parentNode,
                                i = o.nodeName.toLowerCase();
                            if (
                                (zn(e) && x.getContentEditable(e) && ((n = f), (f = "true" === x.getContentEditable(e)), (t = !0)),
                                Wn(e) &&
                                    !(function (e, t, n, r) {
                                        if (e.getParam("format_empty_lines", !1, "boolean") && dl(t)) {
                                            var o = _e(_e({}, e.schema.getTextBlockElements()), { td: {}, th: {}, li: {}, dt: {}, dd: {}, figcaption: {}, caption: {}, details: {}, summary: {} }),
                                                i =
                                                    ((a = Nt.fromDom(n)),
                                                    (s = function (e) {
                                                        return zc(e.dom);
                                                    }),
                                                    ((c = (u = a).dom).parentNode
                                                        ? Nr(Nt.fromDom(c.parentNode), function (e) {
                                                              return !je(u, e) && s(e);
                                                          })
                                                        : ve.none()
                                                    ).isSome());
                                            return se(o, r) && Wr(Nt.fromDom(n.parentNode), !1) && !i;
                                        }
                                        var a, u, s, c;
                                    })(S, A, e, i))
                            )
                                return (s = null), void (ll(A) && x.remove(e));
                            if (ll(A) && A.wrapper && hp(S, e, E, N)) s = null;
                            else {
                                if (f && !t && ll(A) && !A.wrapper && tl(S, r) && nl(S, i, d)) {
                                    var a = x.rename(e, d);
                                    return k(a), w.push(a), void (s = null);
                                }
                                if (fl(A)) {
                                    var u = g(_, e);
                                    if ((!u && V(o) && ml(A) && (u = g(_, o)), !dl(A) || u)) return void (s = null);
                                }
                                !f || t || !nl(S, d, r) || !nl(S, i, d) || (!l && jn(e) && xo(e.data)) || zc(e) || (dl(A) && x.isBlock(e))
                                    ? ((s = null), Y(xe(e.childNodes), c), t && (f = n), (s = null))
                                    : (s || ((s = x.clone(m, !1)), e.parentNode.insertBefore(s, e), w.push(s)), s.appendChild(e));
                            }
                        };
                    Y(e, c);
                }),
                    !0 === A.links &&
                        Y(w, function (e) {
                            var t = function (e) {
                                "A" === e.nodeName && k(e, A), Y(xe(e.childNodes), t);
                            };
                            t(e);
                        }),
                    Y(w, function (e) {
                        var n,
                            t,
                            r,
                            o,
                            i,
                            a,
                            u,
                            s,
                            c,
                            l,
                            f,
                            d,
                            m,
                            g,
                            p,
                            h,
                            v,
                            b,
                            y =
                                ((n = 0),
                                Y(e.childNodes, function (e) {
                                    var t;
                                    (V((t = e)) && jn(t) && 0 === t.length) || Yc(e) || n++;
                                }),
                                n);
                        function C(e) {
                            var t;
                            1 === e.nodeType &&
                                e.parentNode &&
                                1 === e.parentNode.nodeType &&
                                ((t = ul(m, e.parentNode)), m.getStyle(e, "color") && t ? m.setStyle(e, "text-decoration", t) : m.getStyle(e, "text-decoration") === t && m.setStyle(e, "text-decoration", null));
                        }
                        (!(1 < w.length) && x.isBlock(e)) || 0 !== y
                            ? (dl(A) || (ll(A) && A.wrapper)) &&
                              (A.exact ||
                                  1 !== y ||
                                  (e = M((d = e).childNodes, Mp)
                                      .filter(function (e) {
                                          return Tg(x, e, A);
                                      })
                                      .map(function (e) {
                                          var t = x.clone(e, !1);
                                          return k(t), x.replace(t, d, !0), x.remove(e, !0), t;
                                      })
                                      .getOr(d)),
                              (h = S),
                              (v = N),
                              (b = e),
                              _h(_, function (t) {
                                  var r, e, n;
                                  dl(t) &&
                                      _h(h.dom.select(t.inline, b), function (e) {
                                          wp(e) && Lp(h, t, v, e, t.exact ? e : null);
                                      }),
                                      (r = h.dom),
                                      (e = t).clear_child_styles &&
                                          ((n = e.links ? "*:not(a)" : "*"),
                                          xh(r.select(n, b), function (n) {
                                              wp(n) &&
                                                  xh(e.styles, function (e, t) {
                                                      r.setStyle(n, t, "");
                                                  });
                                          }));
                              }),
                              (s = A),
                              (hp((u = S), (f = e).parentNode, (c = E), (l = N)) && Lp(u, s, l, f)) ||
                                  (s.merge_with_parents &&
                                      u.dom.getParent(f.parentNode, function (e) {
                                          if (hp(u, e, c, l)) return Lp(u, s, l, f), !0;
                                      })),
                              (a = e),
                              (i = A).styles && i.styles.backgroundColor && wh(a, kp(x, "fontSize"), _p(x, "backgroundColor", rl(i.styles.backgroundColor, N))),
                              (m = x),
                              (p = e),
                              (g = A).styles && (g.styles.color || g.styles.textDecoration) && (Et.walk(p, C, "childNodes"), C(p)),
                              (t = x),
                              (o = e),
                              !dl((r = A)) || ("sub" !== r.inline && "sup" !== r.inline) || (wh(o, kp(t, "fontSize"), _p(t, "fontSize", "")), t.remove(t.select("sup" === r.inline ? "sub" : "sup", o), !0)),
                              Np(x, A, 0, e))
                            : x.remove(e, !0);
                    });
            }
            var e,
                t,
                n,
                i,
                _ = S.formatter.get(E),
                A = _[0],
                a = !r && S.selection.isCollapsed(),
                u = S.dom,
                s = S.selection;
            if ("false" !== u.getContentEditable(s.getNode()))
                A &&
                    (r
                        ? Qc(r)
                            ? g(_, r) || ((e = u.createRng()).setStartBefore(r), e.setEndAfter(r), o(u, Sl(S, e, _), !0))
                            : o(u, r, !0)
                        : a && dl(A) && !_l(S).length
                        ? (function (e, t, n) {
                              var r,
                                  o = e.selection,
                                  i = o.getRng(),
                                  a = i.startOffset,
                                  u = i.startContainer.nodeValue,
                                  s = Hc(e.getBody(), o.getStart());
                              s && (r = Lg(s));
                              var c,
                                  l,
                                  f,
                                  d,
                                  m = /[^\s\u00a0\u00ad\u200b\ufeff]/;
                              u && 0 < a && a < u.length && m.test(u.charAt(a)) && m.test(u.charAt(a - 1))
                                  ? ((c = o.getBookmark()), i.collapse(!0), (l = Tf(Sl(e, i, e.formatter.get(t)))), e.formatter.apply(t, n, l), o.moveToBookmark(c))
                                  : ((s && r.nodeValue === vp) || ((f = e.getDoc()), (d = Ig(!0).dom), (r = (s = f.importNode(d, !0)).firstChild), i.insertNode(s), (a = 1)), e.formatter.apply(t, n, s), o.setCursorLocation(r, a));
                          })(S, E, N)
                        : ((t = s.getNode()),
                          (n = _[0]),
                          S.settings.forced_root_block || !n.defaultBlock || u.getParent(t, u.isBlock) || Rh(S, n.defaultBlock),
                          s.setRng(vg(s.getRng())),
                          Bl(s, !0, function () {
                              Ol(S, function (e, t) {
                                  var n = t ? e : Sl(S, e, _);
                                  o(u, n, !1);
                              });
                          }),
                          Zc(u, s, s.getRng()),
                          S.nodeChanged()),
                    (i = S),
                    xp(yp[E], function (e) {
                        e(i);
                    })),
                    bf(S, E, r, N);
            else {
                r = s.getNode();
                for (var c = 0, l = _.length; c < l; c++) {
                    var f = _[c];
                    if (f.ceFalseOverride && fl(f) && u.is(r, f.selector)) {
                        k(r, f);
                        break;
                    }
                }
                bf(S, E, r, N);
            }
        },
        Dh = function (e) {
            return e.selection.getStart();
        },
        Th = function (i, a, e) {
            var u = zp(i, a);
            ne(e, function (e, o) {
                function t(e) {
                    var t,
                        n = Up(i, u, o, e.similar, Fp(e) ? e.vars : void 0),
                        r = n.isSome();
                    e.state.get() !== r &&
                        (e.state.set(r),
                        (t = n.getOr(a)),
                        Fp(e)
                            ? e.callback(r, { node: t, format: o, parents: u })
                            : Y(e.callbacks, function (e) {
                                  return e(r, { node: t, format: o, parents: u });
                              }));
                }
                Y([e.withSimilar, e.withoutSimilar], t), Y(e.withVars, t);
            });
        },
        Oh = Re(function () {
            return document.implementation.createHTMLDocument("undo");
        });
    function Bh(e) {
        return e.select;
    }
    function Ph(e) {
        return e && e.ownerDocument && Ve(Nt.fromDom(e.ownerDocument), Nt.fromDom(e));
    }
    function Lh(a, u, e, s) {
        function t(e, t) {
            return yh(s, e, t);
        }
        function n() {
            var e = c(),
                t = null == e ? void 0 : e.anchorNode,
                n = null == e ? void 0 : e.focusNode;
            if (!e || !t || !n || rn(t) || rn(n)) return !0;
            var r = a.createRng();
            r.setStart(t, e.anchorOffset), r.collapse(!0);
            var o = a.createRng();
            return o.setStart(n, e.focusOffset), o.collapse(!0), r.compareBoundaryPoints(r.START_TO_START, o) <= 0;
        }
        function r(e) {
            var t = p();
            t.collapse(!!e), h(t);
        }
        function c() {
            return u.getSelection ? u.getSelection() : u.document.selection;
        }
        var l,
            f,
            o,
            i,
            d,
            m,
            g = function (e, t) {
                return (
                    d ||
                        ((d = {}),
                        (m = {}),
                        i.on("NodeChange", function (e) {
                            var n = e.element,
                                r = x(n),
                                o = {};
                            Et.each(d, function (e, n) {
                                C(n, r).each(function (t) {
                                    m[n] ||
                                        (Y(e, function (e) {
                                            e(!0, { node: t, selector: n, parents: r });
                                        }),
                                        (m[n] = e)),
                                        (o[n] = e);
                                });
                            }),
                                Et.each(m, function (e, t) {
                                    o[t] ||
                                        (delete m[t],
                                        Et.each(e, function (e) {
                                            e(!1, { node: n, selector: t, parents: r });
                                        }));
                                });
                        })),
                    d[e] || (d[e] = []),
                    d[e].push(t),
                    C(e, x(i.selection.getStart())).each(function () {
                        m[e] = d[e];
                    }),
                    {
                        unbind: function () {
                            Ch(d, e, t), Ch(m, e, t);
                        },
                    }
                );
            },
            p = function () {
                function e(e, t, n) {
                    try {
                        return t.compareBoundaryPoints(e, n);
                    } catch (e) {
                        return -1;
                    }
                }
                var t,
                    n,
                    r,
                    o = u.document;
                if (void 0 !== s.bookmark && !1 === vd(s)) {
                    var i = ld(s);
                    if (i.isSome())
                        return i
                            .map(function (e) {
                                return wd(s, [e])[0];
                            })
                            .getOr(o.createRange());
                }
                try {
                    (t = c()) && !rn(t.anchorNode) && ((n = 0 < t.rangeCount ? t.getRangeAt(0) : (t.createRange ? t : o).createRange()), (n = wd(s, [n])[0]));
                } catch (e) {}
                return (
                    (n = n || (o.createRange ? o.createRange() : o.body.createTextRange())).setStart && 9 === n.startContainer.nodeType && n.collapsed && ((r = a.getRoot()), n.setStart(r, 0), n.setEnd(r, 0)),
                    l && f && (0 === e(n.START_TO_START, n, l) && 0 === e(n.END_TO_END, n, l) ? (n = f) : (f = l = null)),
                    n
                );
            },
            h = function (e, t) {
                var n;
                if ((r = e) && (Bh(r) || (Ph(r.startContainer) && Ph(r.endContainer)))) {
                    var r,
                        o = Bh(e) ? e : null;
                    if (o) {
                        f = null;
                        try {
                            o.select();
                        } catch (e) {}
                    } else {
                        var i = c();
                        if (((e = s.fire("SetSelectionRange", { range: e, forward: t }).range), i)) {
                            f = e;
                            try {
                                i.removeAllRanges(), i.addRange(e);
                            } catch (e) {}
                            !1 === t && i.extend && (i.collapse(e.endContainer, e.endOffset), i.extend(e.startContainer, e.startOffset)), (l = 0 < i.rangeCount ? i.getRangeAt(0) : null);
                        }
                        e.collapsed ||
                            e.startContainer !== e.endContainer ||
                            !i.setBaseAndExtent ||
                            xt.ie ||
                            (e.endOffset - e.startOffset < 2 &&
                                e.startContainer.hasChildNodes() &&
                                (n = e.startContainer.childNodes[e.startOffset]) &&
                                "IMG" === n.tagName &&
                                (i.setBaseAndExtent(e.startContainer, e.startOffset, e.endContainer, e.endOffset), (i.anchorNode === e.startContainer && i.focusNode === e.endContainer) || i.setBaseAndExtent(n, 0, n, 1))),
                            s.fire("AfterSetSelectionRange", { range: e, forward: t });
                    }
                }
            },
            v = {
                bookmarkManager: null,
                controlSelection: null,
                dom: (o = a),
                win: u,
                serializer: e,
                editor: (i = s),
                collapse: r,
                setCursorLocation: function (e, t) {
                    var n = a.createRng();
                    V(e) && V(t) ? (n.setStart(e, t), n.setEnd(e, t), h(n), r(!1)) : (Dl(a, n, s.getBody(), !0), h(n));
                },
                getContent: function (e) {
                    return (n = (t = void 0 === (t = e) ? {} : t).format || "html"), (r = t), hh(s).selection.getContent(n, r);
                    var t, n, r;
                },
                setContent: t,
                getBookmark: function (e, t) {
                    return b.getBookmark(e, t);
                },
                moveToBookmark: function (e) {
                    return b.moveToBookmark(e);
                },
                select: function (e, t) {
                    var r = a,
                        o = t;
                    return (
                        ve
                            .from(e)
                            .map(function (e) {
                                var t = r.nodeIndex(e),
                                    n = r.createRng();
                                return n.setStart(e.parentNode, t), n.setEnd(e.parentNode, t + 1), o && (Dl(r, n, e, !0), Dl(r, n, e, !1)), n;
                            })
                            .each(h),
                        e
                    );
                },
                isCollapsed: function () {
                    var e = p(),
                        t = c();
                    return !(!e || e.item) && (e.compareEndPoints ? 0 === e.compareEndPoints("StartToEnd", e) : !t || e.collapsed);
                },
                isForward: n,
                setNode: function (e) {
                    return t(a.getOuterHTML(e)), e;
                },
                getNode: function () {
                    return (function (e, t) {
                        if (!t) return e;
                        var n = t.startContainer,
                            r = t.endContainer,
                            o = t.startOffset,
                            i = t.endOffset,
                            a = t.commonAncestorContainer;
                        return !t.collapsed &&
                            (n === r && i - o < 2 && n.hasChildNodes() && (a = n.childNodes[o]),
                            3 === n.nodeType && 3 === r.nodeType && ((n = n.length === o ? xd(n.nextSibling, !0) : n.parentNode), (r = 0 === i ? xd(r.previousSibling, !1) : r.parentNode), n && n === r))
                            ? n
                            : a && 3 === a.nodeType
                            ? a.parentNode
                            : a;
                    })(s.getBody(), p());
                },
                getSel: c,
                setRng: h,
                getRng: p,
                getStart: function (e) {
                    return yd(s.getBody(), p(), e);
                },
                getEnd: function (e) {
                    return Cd(s.getBody(), p(), e);
                },
                getSelectedBlocks: function (e, t) {
                    return (function (e, t, n, r) {
                        var o = [],
                            i = e.getRoot();
                        if (((n = e.getParent(n || yd(i, t, t.collapsed), e.isBlock)), (r = e.getParent(r || Cd(i, t, t.collapsed), e.isBlock)), n && n !== i && o.push(n), n && r && n !== r))
                            for (var a, u = new Rr(n, i); (a = u.next()) && a !== r; ) e.isBlock(a) && o.push(a);
                        return r && n !== r && r !== i && o.push(r), o;
                    })(a, p(), e, t);
                },
                normalize: function () {
                    var e = p();
                    if (1 < Nl(c()).length || !Tl(s)) return e;
                    var t = Rf(a, e);
                    return (
                        t.each(function (e) {
                            h(e, n());
                        }),
                        t.getOr(e)
                    );
                },
                selectorChanged: function (e, t) {
                    return g(e, t), v;
                },
                selectorChangedWithUnbind: g,
                getScrollContainer: function () {
                    for (var e, t = a.getRoot(); t && "BODY" !== t.nodeName; ) {
                        if (t.scrollHeight > t.clientHeight) {
                            e = t;
                            break;
                        }
                        t = t.parentNode;
                    }
                    return e;
                },
                scrollIntoView: function (e, t) {
                    V(e) ? (s.inline ? Gf : Qf)(s, e, t) : Zf(s, p(), t);
                },
                placeCaretAt: function (e, t) {
                    return h(wf(e, t, s.getDoc()));
                },
                getBoundingClientRect: function () {
                    var e = p();
                    return e.collapsed ? as.fromRangeStart(e).getClientRects()[0] : e.getBoundingClientRect();
                },
                destroy: function () {
                    (u = l = f = null), y.destroy();
                },
            },
            b = Fl(v),
            y = Cf(v, s);
        function C(t, e) {
            return M(e, function (e) {
                return o.is(e, t);
            });
        }
        function x(e) {
            return o.getParents(e, null, o.getRoot());
        }
        return (v.bookmarkManager = b), (v.controlSelection = y), v;
    }
    function Ih(e, t) {
        var n,
            r,
            a,
            u,
            o = ro();
        t.convert_fonts_to_spans &&
            ((r = e),
            (a = o),
            (u = Et.explode(t.font_size_legacy_values)),
            r.addNodeFilter("font", function (e) {
                Y(e, function (e) {
                    var t,
                        n = a.parse(e.attr("style")),
                        r = e.attr("color"),
                        o = e.attr("face"),
                        i = e.attr("size");
                    r && (n.color = r),
                        o && (n["font-family"] = o),
                        i && (n["font-size"] = u[parseInt(e.attr("size"), 10) - 1]),
                        (e.name = "span"),
                        e.attr("style", a.serialize(n)),
                        (t = e),
                        Y(["color", "face", "size"], function (e) {
                            t.attr(e, null);
                        });
                });
            })),
            (n = o),
            e.addNodeFilter("strike", function (e) {
                Y(e, function (e) {
                    var t = n.parse(e.attr("style"));
                    (t["text-decoration"] = "line-through"), (e.name = "span"), e.attr("style", n.serialize(t));
                });
            });
    }
    function Mh(e) {
        var t,
            n = decodeURIComponent(e).split(","),
            r = /data:([^;]+)/.exec(n[0]);
        return { type: (t = r ? r[1] : t), data: n[1] };
    }
    function Fh(e, t) {
        var n;
        try {
            n = atob(t);
        } catch (e) {
            return ve.none();
        }
        for (var r = new Uint8Array(n.length), o = 0; o < r.length; o++) r[o] = n.charCodeAt(o);
        return ve.some(new Blob([r], { type: e }));
    }
    function Uh(e) {
        return 0 === e.indexOf("blob:")
            ? ((o = e),
              new kr(function (e, t) {
                  function n() {
                      t("Cannot convert " + o + " to Blob. Resource might not exist or is inaccessible.");
                  }
                  try {
                      var r = new XMLHttpRequest();
                      r.open("GET", o, !0),
                          (r.responseType = "blob"),
                          (r.onload = function () {
                              200 === r.status ? e(r.response) : n();
                          }),
                          (r.onerror = n),
                          r.send();
                  } catch (e) {
                      n();
                  }
              }))
            : 0 === e.indexOf("data:")
            ? ((n = e),
              new kr(function (e) {
                  var t = Mh(n);
                  Fh(t.type, t.data).fold(function () {
                      return e(new Blob([]));
                  }, e);
              }))
            : null;
        var o, n;
    }
    function zh(e) {
        return (e || "blobid") + lv++;
    }
    function Hh(r, d) {
        var o = {};
        return {
            findAll: function (e, n) {
                n = n || w;
                var t = T(
                    U(e ? xe(e.getElementsByTagName("img")) : [], function (e) {
                        var t = e.src;
                        return (
                            xt.fileApi &&
                            !e.hasAttribute("data-mce-bogus") &&
                            !e.hasAttribute("data-mce-placeholder") &&
                            t &&
                            t !== xt.transparentSrc &&
                            (0 === t.indexOf("blob:") ? !r.isUploaded(t) && n(e) : 0 === t.indexOf("data:") && n(e))
                        );
                    }),
                    function (f) {
                        if (void 0 !== o[f.src])
                            return new kr(function (t) {
                                o[f.src].then(function (e) {
                                    return "string" == typeof e ? e : void t({ image: f, blobInfo: e.blobInfo });
                                });
                            });
                        var e = new kr(function (e, t) {
                            var r, o, i, n, a, u, s, c, l;
                            (r = d),
                                (i = e),
                                (n = t),
                                0 !== (o = f).src.indexOf("blob:")
                                    ? ((u = (a = Mh(o.src)).data),
                                      (s = a.type),
                                      (c = u),
                                      (l = r.getByData(c, s))
                                          ? i({ image: o, blobInfo: l })
                                          : Uh(o.src).then(
                                                function (e) {
                                                    (l = r.create(zh(), e, c)), r.add(l), i({ image: o, blobInfo: l });
                                                },
                                                function (e) {
                                                    n(e);
                                                }
                                            ))
                                    : (l = r.getByUri(o.src))
                                    ? i({ image: o, blobInfo: l })
                                    : Uh(o.src).then(
                                          function (t) {
                                              var n = t;
                                              new kr(function (e) {
                                                  var t = new FileReader();
                                                  (t.onloadend = function () {
                                                      e(t.result);
                                                  }),
                                                      t.readAsDataURL(n);
                                              }).then(function (e) {
                                                  (c = Mh(e).data), (l = r.create(zh(), t, c)), r.add(l), i({ image: o, blobInfo: l });
                                              });
                                          },
                                          function (e) {
                                              n(e);
                                          }
                                      );
                        })
                            .then(function (e) {
                                return delete o[e.image.src], e;
                            })
                            .catch(function (e) {
                                return delete o[f.src], e;
                            });
                        return (o[f.src] = e);
                    }
                );
                return kr.all(t);
            },
        };
    }
    function jh(e, t, n, r) {
        (e.padd_empty_with_br || t.insert) && n[r.name] ? (r.empty().append(new Ud("br", 1)).shortEnded = !0) : (r.empty().append(new Ud("#text", 3)).value = yo);
    }
    function Vh(n, e, t, r) {
        return r.isEmpty(e, t, function (e) {
            return (t = n.getElementRule(e.name)) && t.paddEmpty;
            var t;
        });
    }
    function qh(e, p) {
        var t,
            o,
            i,
            h = e.schema;
        function n(t) {
            var e,
                n,
                r = t.attr("src");
            (e = t).attr("src") === xt.transparentSrc ||
                V(e.attr("data-mce-placeholder")) ||
                V(t.attr("data-mce-bogus")) ||
                ((n = /data:([^;]+);base64,([a-z0-9\+\/=\s]+)/i.exec(r)) ? ve.some({ type: n[1], data: decodeURIComponent(n[2]) }) : ve.none())
                    .filter(function () {
                        return (function (e, t) {
                            if (t.images_dataimg_filter) {
                                var n = new Image();
                                return (
                                    (n.src = e.attr("src")),
                                    ne(e.attributes.map, function (e, t) {
                                        n.setAttribute(t, e);
                                    }),
                                    t.images_dataimg_filter(n)
                                );
                            }
                            return !0;
                        })(t, o);
                    })
                    .bind(function (e) {
                        var t = e.type,
                            n = e.data;
                        return ve.from(i.getByData(n, t)).orThunk(function () {
                            return Fh(t, n).map(function (e) {
                                var t = i.create(zh(), e, n);
                                return i.add(t), t;
                            });
                        });
                    })
                    .each(function (e) {
                        t.attr("src", e.blobUri());
                    });
        }
        p.remove_trailing_brs &&
            e.addNodeFilter("br", function (e, t, n) {
                var r,
                    o,
                    i,
                    a,
                    u,
                    s,
                    c,
                    l,
                    f = e.length,
                    d = Et.extend({}, h.getBlockElements()),
                    m = h.getNonEmptyElements(),
                    g = h.getWhiteSpaceElements();
                for (d.body = 1, r = 0; r < f; r++)
                    if (((i = (o = e[r]).parent), d[o.parent.name] && o === i.lastChild)) {
                        for (u = o.prev; u; ) {
                            if ("span" !== (s = u.name) || "bookmark" !== u.attr("data-mce-type")) {
                                "br" === s && (o = null);
                                break;
                            }
                            u = u.prev;
                        }
                        o && (o.remove(), Vh(h, m, g, i) && (c = h.getElementRule(i.name)) && (c.removeEmpty ? i.remove() : c.paddEmpty && jh(p, n, d, i)));
                    } else {
                        for (a = o; i && i.firstChild === a && i.lastChild === a && !d[(a = i).name]; ) i = i.parent;
                        a === i && !0 !== p.padd_empty_with_br && (((l = new Ud("#text", 3)).value = yo), o.replace(l));
                    }
            }),
            e.addAttributeFilter("href", function (e) {
                var t,
                    n,
                    r = e.length;
                if (!p.allow_unsafe_link_target)
                    for (; r--; ) {
                        var o = e[r];
                        "a" === o.name &&
                            "_blank" === o.attr("target") &&
                            o.attr(
                                "rel",
                                ((n = void 0),
                                (n = (t = o.attr("rel")) ? Et.trim(t) : ""),
                                /\b(noopener)\b/g.test(n)
                                    ? n
                                    : n
                                          .split(" ")
                                          .filter(function (e) {
                                              return 0 < e.length;
                                          })
                                          .concat(["noopener"])
                                          .sort()
                                          .join(" "))
                            );
                    }
            }),
            p.allow_html_in_named_anchor ||
                e.addAttributeFilter("id,name", function (e) {
                    for (var t, n, r, o, i = e.length; i--; ) if ("a" === (o = e[i]).name && o.firstChild && !o.attr("href")) for (r = o.parent, t = o.lastChild; (n = t.prev), r.insert(t, o), (t = n); );
                }),
            p.fix_list_elements &&
                e.addNodeFilter("ul,ol", function (e) {
                    for (var t, n, r, o = e.length; o--; )
                        ("ul" !== (r = (n = e[o]).parent).name && "ol" !== r.name) || (n.prev && "li" === n.prev.name ? n.prev.append(n) : ((t = new Ud("li", 1)).attr("style", "list-style-type: none"), n.wrap(t)));
                }),
            p.validate &&
                h.getValidClasses() &&
                e.addAttributeFilter("class", function (e) {
                    for (var t = h.getValidClasses(), n = e.length; n--; ) {
                        for (var r = e[n], o = r.attr("class").split(" "), i = "", a = 0; a < o.length; a++) {
                            var u = o[a],
                                s = !1,
                                c = t["*"];
                            c && c[u] && (s = !0), (c = t[r.name]), (s = !(s || !c || !c[u]) || s) && (i && (i += " "), (i += u));
                        }
                        i.length || (i = null), r.attr("class", i);
                    }
                }),
            (t = e),
            (i = (o = p).blob_cache) &&
                t.addAttributeFilter("src", function (e) {
                    return Y(e, n);
                });
    }
    function $h(_, A) {
        void 0 === A && (A = to());
        var R = {},
            D = [],
            T = {},
            O = {};
        ((_ = _ || {}).validate = !("validate" in _) || _.validate), (_.root_name = _.root_name || "body");
        function B(e) {
            var t = e.name;
            t in R && ((r = T[t]) ? r.push(e) : (T[t] = [e]));
            for (var n = D.length; n--; ) {
                var r,
                    o = D[n].name;
                o in e.attributes.map && ((r = O[o]) ? r.push(e) : (O[o] = [e]));
            }
            return e;
        }
        var e = {
            schema: A,
            addAttributeFilter: function (e, n) {
                mv(gv(e), function (e) {
                    for (var t = 0; t < D.length; t++) if (D[t].name === e) return void D[t].callbacks.push(n);
                    D.push({ name: e, callbacks: [n] });
                });
            },
            getAttributeFilters: function () {
                return [].concat(D);
            },
            addNodeFilter: function (e, n) {
                mv(gv(e), function (e) {
                    var t = R[e];
                    t || (R[e] = t = []), t.push(n);
                });
            },
            getNodeFilters: function () {
                var e,
                    t = [];
                for (e in R) Ne(R, e) && t.push({ name: e, callbacks: R[e] });
                return t;
            },
            filterNode: B,
            parse: function (e, u) {
                var t,
                    n,
                    r,
                    o,
                    i,
                    s,
                    a,
                    c,
                    l = [];
                function f(e) {
                    for (var t = A.getBlockElements(), n = e.prev; n && 3 === n.type; ) {
                        var r = n.value.replace(x, "");
                        if (0 < r.length) return (n.value = r), 0;
                        var o = n.next;
                        if (o) {
                            if (3 === o.type && o.value.length) {
                                n = n.prev;
                                continue;
                            }
                            if (!t[o.name] && "script" !== o.name && "style" !== o.name) {
                                n = n.prev;
                                continue;
                            }
                        }
                        var i = n.prev;
                        n.remove(), (n = i);
                    }
                }
                (u = u || {}), (T = {}), (O = {});
                function d(e, t) {
                    var n,
                        r = new Ud(e, t);
                    return e in R && ((n = T[e]) ? n.push(r) : (T[e] = [r])), r;
                }
                var m = pv(dv("script,style,head,html,body,title,meta,param"), A.getBlockElements()),
                    g = A.getNonEmptyElements(),
                    p = A.children,
                    h = _.validate,
                    v = ("forced_root_block" in u ? u : _).forced_root_block,
                    b = !1 === v ? "" : !0 === v ? "p" : v,
                    y = A.getWhiteSpaceElements(),
                    C = /^[ \t\r\n]+/,
                    x = /[ \t\r\n]+$/,
                    w = /[ \t\r\n]+/g,
                    S = /^[ \t\r\n]+$/,
                    E = Ne(y, u.context) || Ne(y, _.root_name),
                    N = Gd(
                        {
                            validate: h,
                            document: _.document,
                            allow_html_data_urls: _.allow_html_data_urls,
                            allow_svg_data_urls: _.allow_svg_data_urls,
                            allow_script_urls: _.allow_script_urls,
                            allow_conditional_comments: _.allow_conditional_comments,
                            preserve_cdata: _.preserve_cdata,
                            self_closing_elements: (function (e) {
                                var t,
                                    n = {};
                                for (t in e) "li" !== t && "p" !== t && (n[t] = e[t]);
                                return n;
                            })(A.getSelfClosingElements()),
                            cdata: function (e) {
                                c.append(d("#cdata", 4)).value = e;
                            },
                            text: function (e, t) {
                                var n, r;
                                E || ((e = e.replace(w, " ")), (r = c.lastChild) && (Ne(m, r.name) || "br" === r.name) && (e = e.replace(C, ""))), 0 !== e.length && (((n = d("#text", 3)).raw = !!t), (c.append(n).value = e));
                            },
                            comment: function (e) {
                                c.append(d("#comment", 8)).value = e;
                            },
                            pi: function (e, t) {
                                (c.append(d(e, 7)).value = t), f(c);
                            },
                            doctype: function (e) {
                                (c.append(d("#doctype", 10)).value = e), f(c);
                            },
                            start: function (e, t, n) {
                                var r = h ? A.getElementRule(e) : {};
                                if (r) {
                                    var o = d(r.outputName || e, 1);
                                    (o.attributes = t), (o.shortEnded = n), c.append(o);
                                    var i = p[c.name];
                                    i && p[o.name] && !i[o.name] && l.push(o);
                                    for (var a = D.length; a--; ) {
                                        var u = D[a].name;
                                        u in t.map && ((s = O[u]) ? s.push(o) : (O[u] = [o]));
                                    }
                                    m[e] && f(o), n || (c = o), !E && y[e] && (E = !0);
                                }
                            },
                            end: function (e) {
                                var t,
                                    n,
                                    r,
                                    o,
                                    i,
                                    a = h ? A.getElementRule(e) : {};
                                if (a) {
                                    if (m[e] && !E) {
                                        if ((t = c.firstChild) && 3 === t.type)
                                            if (0 < (n = t.value.replace(C, "")).length) (t.value = n), (t = t.next);
                                            else for (r = t.next, t.remove(), t = r; t && 3 === t.type; ) (n = t.value), (r = t.next), (0 !== n.length && !S.test(n)) || (t.remove(), (t = r)), (t = r);
                                        if ((t = c.lastChild) && 3 === t.type)
                                            if (0 < (n = t.value.replace(x, "")).length) (t.value = n), (t = t.prev);
                                            else for (r = t.prev, t.remove(), t = r; t && 3 === t.type; ) (n = t.value), (r = t.prev), (0 !== n.length && !S.test(n)) || (t.remove(), (t = r)), (t = r);
                                    }
                                    if ((E && y[e] && (E = !1), a.removeEmpty && Vh(A, g, y, c))) return (o = c.parent), m[c.name] ? c.empty().remove() : c.unwrap(), void (c = o);
                                    a.paddEmpty && ((fv((i = c), "#text") && i.firstChild.value === yo) || Vh(A, g, y, c)) && jh(_, u, m, c), (c = c.parent);
                                }
                            },
                        },
                        A
                    ),
                    k = (c = new Ud(u.context || _.root_name, 11));
                if (
                    (N.parse(e, u.format),
                    h &&
                        l.length &&
                        (u.context
                            ? (u.invalid = !0)
                            : (function (e) {
                                  for (
                                      var t = dv("tr,td,th,tbody,thead,tfoot,table"),
                                          n = A.getNonEmptyElements(),
                                          r = A.getWhiteSpaceElements(),
                                          o = A.getTextBlockElements(),
                                          i = A.getSpecialElements(),
                                          a = function (e, t) {
                                              if ((void 0 === t && (t = e.parent), i[e.name])) e.empty().remove();
                                              else {
                                                  for (var n = 0, r = e.children(); n < r.length; n++) {
                                                      var o = r[n];
                                                      A.isValidChild(t.name, o.name) || a(o, t);
                                                  }
                                                  e.unwrap();
                                              }
                                          },
                                          u = 0;
                                      u < e.length;
                                      u++
                                  ) {
                                      var s,
                                          c = e[u],
                                          l = void 0,
                                          f = void 0;
                                      if (c.parent && !c.fixed)
                                          if (o[c.name] && "li" === c.parent.name) {
                                              for (var d = c.next; d && o[d.name]; ) (d.name = "li"), (d.fixed = !0), c.parent.insert(d, c.parent), (d = d.next);
                                              c.unwrap();
                                          } else {
                                              for (var m = [c], l = c.parent; l && !A.isValidChild(l.name, c.name) && !t[l.name]; l = l.parent) m.push(l);
                                              if (l && 1 < m.length)
                                                  if (A.isValidChild(l.name, c.name)) {
                                                      m.reverse();
                                                      for (var g = (s = B(m[0].clone())), p = 0; p < m.length - 1; p++) {
                                                          A.isValidChild(g.name, m[p].name) ? ((f = B(m[p].clone())), g.append(f)) : (f = g);
                                                          for (var h = m[p].firstChild; h && h !== m[p + 1]; ) {
                                                              var v = h.next;
                                                              f.append(h), (h = v);
                                                          }
                                                          g = f;
                                                      }
                                                      Vh(A, n, r, s) ? l.insert(c, m[0], !0) : (l.insert(s, m[0], !0), l.insert(c, s)), (l = m[0]), (Vh(A, n, r, l) || fv(l, "br")) && l.empty().remove();
                                                  } else a(c);
                                              else
                                                  c.parent &&
                                                      ("li" !== c.name
                                                          ? A.isValidChild(c.parent.name, "div") && A.isValidChild("div", c.name)
                                                              ? c.wrap(B(new Ud("div", 1)))
                                                              : a(c)
                                                          : !(d = c.prev) || ("ul" !== d.name && "ol" !== d.name)
                                                          ? !(d = c.next) || ("ul" !== d.name && "ol" !== d.name)
                                                              ? c.wrap(B(new Ud("ul", 1)))
                                                              : d.insert(c, d.firstChild, !0)
                                                          : d.append(c));
                                          }
                                  }
                              })(l)),
                    b &&
                        ("body" === k.name || u.isRootContent) &&
                        (function () {
                            function e(e) {
                                e && ((t = e.firstChild) && 3 === t.type && (t.value = t.value.replace(C, "")), (t = e.lastChild) && 3 === t.type && (t.value = t.value.replace(x, "")));
                            }
                            var t = k.firstChild,
                                n = null;
                            if (A.isValidChild(k.name, b.toLowerCase())) {
                                for (; t; ) {
                                    var r = t.next;
                                    3 === t.type || (1 === t.type && "p" !== t.name && !m[t.name] && !t.attr("data-mce-type")) ? (n || ((n = d(b, 1)).attr(_.forced_root_block_attrs), k.insert(n, t)), n.append(t)) : (e(n), (n = null)),
                                        (t = r);
                                }
                                e(n);
                            }
                        })(),
                    !u.invalid)
                ) {
                    for (a in T)
                        if (Ne(T, a)) {
                            for (s = R[a], o = (t = T[a]).length; o--; ) t[o].parent || t.splice(o, 1);
                            for (n = 0, r = s.length; n < r; n++) s[n](t, a, u);
                        }
                    for (n = 0, r = D.length; n < r; n++)
                        if ((s = D[n]).name in O) {
                            for (o = (t = O[s.name]).length; o--; ) t[o].parent || t.splice(o, 1);
                            for (o = 0, i = s.callbacks.length; o < i; o++) s.callbacks[o](t, s.name, u);
                        }
                }
                return k;
            },
        };
        return qh(e, _), _.inline_styles && Ih(e, _), e;
    }
    function Wh(e, t, n) {
        -1 === Et.inArray(t, n) &&
            (e.addAttributeFilter(n, function (e, t) {
                for (var n = e.length; n--; ) e[n].attr(t, null);
            }),
            t.push(n));
    }
    function Kh(L, I) {
        var e = ["data-mce-selected"],
            M = I && I.dom ? I.dom : Ja.DOM,
            F = I && I.schema ? I.schema : to(L);
        (L.entity_encoding = L.entity_encoding || "named"), (L.remove_trailing_brs = !("remove_trailing_brs" in L) || L.remove_trailing_brs);
        var t,
            U = $h(L, F),
            s = L,
            c = M;
        return (
            (t = U).addAttributeFilter("data-mce-tabindex", function (e, t) {
                for (var n = e.length; n--; ) {
                    var r = e[n];
                    r.attr("tabindex", r.attr("data-mce-tabindex")), r.attr(t, null);
                }
            }),
            t.addAttributeFilter("src,href,style", function (e, t) {
                for (var n = "data-mce-" + t, r = s.url_converter, o = s.url_converter_scope, i = e.length; i--; ) {
                    var a = e[i],
                        u = a.attr(n);
                    void 0 !== u
                        ? (a.attr(t, 0 < u.length ? u : null), a.attr(n, null))
                        : ((u = a.attr(t)), "style" === t ? (u = c.serializeStyle(c.parseStyle(u), a.name)) : r && (u = r.call(o, u, t, a.name)), a.attr(t, 0 < u.length ? u : null));
                }
            }),
            t.addAttributeFilter("class", function (e) {
                for (var t = e.length; t--; ) {
                    var n,
                        r = e[t];
                    r.attr("class") && ((n = r.attr("class").replace(/(?:^|\s)mce-item-\w+(?!\S)/g, "")), r.attr("class", 0 < n.length ? n : null));
                }
            }),
            t.addAttributeFilter("data-mce-type", function (e, t, n) {
                for (var r = e.length; r--; ) {
                    var o = e[r];
                    "bookmark" !== o.attr("data-mce-type") ||
                        n.cleanup ||
                        (ve.from(o.firstChild).exists(function (e) {
                            return !xo(e.value);
                        })
                            ? o.unwrap()
                            : o.remove());
                }
            }),
            t.addNodeFilter("noscript", function (e) {
                for (var t = e.length; t--; ) {
                    var n = e[t].firstChild;
                    n && (n.value = Go.decode(n.value));
                }
            }),
            t.addNodeFilter("script,style", function (e, t) {
                for (
                    var n = function (e) {
                            return e
                                .replace(/(<!--\[CDATA\[|\]\]-->)/g, "\n")
                                .replace(/^[\r\n]*|[\r\n]*$/g, "")
                                .replace(/^\s*((<!--)?(\s*\/\/)?\s*<!\[CDATA\[|(<!--\s*)?\/\*\s*<!\[CDATA\[\s*\*\/|(\/\/)?\s*<!--|\/\*\s*<!--\s*\*\/)\s*[\r\n]*/gi, "")
                                .replace(/\s*(\/\*\s*\]\]>\s*\*\/(-->)?|\s*\/\/\s*\]\]>(-->)?|\/\/\s*(-->)?|\]\]>|\/\*\s*-->\s*\*\/|\s*-->\s*)\s*$/g, "");
                        },
                        r = e.length;
                    r--;

                ) {
                    var o,
                        i = e[r],
                        a = i.firstChild ? i.firstChild.value : "";
                    "script" === t
                        ? ((o = i.attr("type")) && i.attr("type", "mce-no/type" === o ? null : o.replace(/^mce\-/, "")), "xhtml" === s.element_format && 0 < a.length && (i.firstChild.value = "// <![CDATA[\n" + n(a) + "\n// ]]>"))
                        : "xhtml" === s.element_format && 0 < a.length && (i.firstChild.value = "\x3c!--\n" + n(a) + "\n--\x3e");
                }
            }),
            t.addNodeFilter("#comment", function (e) {
                for (var t = e.length; t--; ) {
                    var n = e[t];
                    s.preserve_cdata && 0 === n.value.indexOf("[CDATA[")
                        ? ((n.name = "#cdata"), (n.type = 4), (n.value = c.decode(n.value.replace(/^\[CDATA\[|\]\]$/g, ""))))
                        : 0 === n.value.indexOf("mce:protected ") && ((n.name = "#text"), (n.type = 3), (n.raw = !0), (n.value = unescape(n.value).substr(14)));
                }
            }),
            t.addNodeFilter("xml:namespace,input", function (e, t) {
                for (var n = e.length; n--; ) {
                    var r = e[n];
                    7 === r.type ? r.remove() : 1 === r.type && ("input" !== t || r.attr("type") || r.attr("type", "text"));
                }
            }),
            t.addAttributeFilter("data-mce-type", function (e) {
                Y(e, function (e) {
                    "format-caret" === e.attr("data-mce-type") && (e.isEmpty(t.schema.getNonEmptyElements()) ? e.remove() : e.unwrap());
                });
            }),
            t.addAttributeFilter("data-mce-src,data-mce-href,data-mce-style,data-mce-selected,data-mce-expando,data-mce-type,data-mce-resize,data-mce-placeholder", function (e, t) {
                for (var n = e.length; n--; ) e[n].attr(t, null);
            }),
            {
                schema: F,
                addNodeFilter: U.addNodeFilter,
                addAttributeFilter: U.addAttributeFilter,
                serialize: function (e, t) {
                    var n,
                        r,
                        o,
                        i,
                        a,
                        u,
                        s,
                        c,
                        l,
                        f,
                        d,
                        m,
                        g,
                        p,
                        h,
                        v,
                        b,
                        y,
                        C,
                        x,
                        w,
                        S,
                        E,
                        N,
                        k,
                        _,
                        A,
                        R,
                        D,
                        T = _e({ format: "html" }, (t = void 0 === t ? {} : t)),
                        O =
                            ((n =
                                ((m = e),
                                (E = g = T),
                                (d = I) && d.hasEventListeners("PreProcess") && !E.no_events
                                    ? ((h = g),
                                      (x = (p = d).dom),
                                      (w = m.cloneNode(!0)),
                                      (S = document.implementation).createHTMLDocument &&
                                          ((b = S.createHTMLDocument("")),
                                          Et.each("BODY" === w.nodeName ? w.childNodes : [w], function (e) {
                                              b.body.appendChild(b.importNode(e, !0));
                                          }),
                                          (w = "BODY" !== w.nodeName ? b.body.firstChild : b.body),
                                          (v = x.doc),
                                          (x.doc = b)),
                                      (y = p),
                                      (C = _e(_e({}, h), { node: w })),
                                      y.fire("PreProcess", C),
                                      v && (x.doc = v),
                                      w)
                                    : m)),
                            (o = wo((r = T).getInner ? n.innerHTML : M.getOuterHTML(n))),
                            r.selection || vo(Nt.fromDom(n)) ? o : Et.trim(o)),
                        B = ((i = U), (a = O), (s = (u = T).selection ? _e({ forced_root_block: !1 }, u) : u), (c = i.parse(a, s)), !P((f = c.lastChild)) || (P((l = f.prev)) && (f.remove(), l.remove())), c);
                    function P(e) {
                        return e && "br" === e.name;
                    }
                    return "tree" === T.format ? B : ((N = I), (k = T), (_ = B), (D = nm(L, F).serialize(_)), k.no_events || !N ? D : ((A = N), (R = _e(_e({}, k), { content: D })), A.fire("PostProcess", R).content));
                },
                addRules: F.addValidElements,
                setRules: F.setValidElements,
                addTempAttr: A(Wh, U, e),
                getTempAttrs: J(e),
                getNodeFilters: U.getNodeFilters,
                getAttributeFilters: U.getAttributeFilters,
            }
        );
    }
    function Xh(e, t) {
        var n = Kh(e, t);
        return {
            schema: n.schema,
            addNodeFilter: n.addNodeFilter,
            addAttributeFilter: n.addAttributeFilter,
            serialize: n.serialize,
            addRules: n.addRules,
            setRules: n.setRules,
            addTempAttr: n.addTempAttr,
            getTempAttrs: n.getTempAttrs,
            getNodeFilters: n.getNodeFilters,
            getAttributeFilters: n.getAttributeFilters,
        };
    }
    function Yh(e, t, n) {
        return (r = n = void 0 === n ? {} : n), ph(e).editor.setContent(t, r);
        var r;
    }
    function Gh(e) {
        return ve.from(e).each(function (e) {
            return e.destroy();
        });
    }
    function Jh(e, t) {
        var n,
            r,
            o,
            i,
            a,
            u,
            s,
            c =
                ((n = e),
                (r = U(bv, function (e) {
                    return Ne(n, e);
                })),
                (!1 !== (o = n.forced_root_block) && "" !== o) || r.push("forced_root_block (false only)"),
                W(r)),
            l =
                ((s = Et.makeMap(t.plugins, " ")),
                W(
                    Ae(
                        Ae([], U(yv, g), !0),
                        H(Cv, function (e) {
                            return g(e) ? [e + " (moving to premium)"] : [];
                        }),
                        !0
                    )
                )),
            f = 0 < l.length,
            d = 0 < c.length,
            m = "mobile" === t.theme;
        function g(e) {
            return Ne(s, e);
        }
        (f || d || m) &&
            ((i = m ? "\n\nThemes:\n- mobile" : ""),
            (a = f ? "\n\nPlugins:\n- " + l.join("\n- ") : ""),
            (u = d ? "\n\nSettings:\n- " + c.join("\n- ") : ""),
            console.warn("The following deprecated features are currently enabled, these will be removed in TinyMCE 6.0. See https://www.tiny.cloud/docs/release-notes/6.0-upcoming-changes/ for more information." + i + a + u));
    }
    function Qh(e) {
        var t = S(e) ? e.join(" ") : e;
        return U(T(X(t) ? t.split(" ") : [], Je), function (e) {
            return 0 < e.length;
        });
    }
    function Zh(e, t) {
        return Ne(e.sections(), t);
    }
    function ev(e, t) {
        return ue(e, "toolbar_mode")
            .orThunk(function () {
                return ue(e, "toolbar_drawer").map(function (e) {
                    return !1 === e ? "wrap" : e;
                });
            })
            .getOr(t);
    }
    function tv(e, t, n, r) {
        var o,
            i,
            a,
            u,
            s,
            c,
            l,
            f,
            d = Qh(n.forced_plugins),
            m = Qh(r.plugins),
            g = Zh((o = t), "mobile") ? o.sections().mobile : {},
            p = g.plugins ? Qh(g.plugins) : m,
            h = ((i = ((u = t), (s = m), (c = p), (a = e) && (0, (f = (l = u).sections()), Zh(l, "mobile") && "mobile" === f.mobile.theme) ? U(c, A(D, Nv)) : a && Zh(u, "mobile") ? c : s)), [].concat(Qh(d)).concat(Qh(i)));
        if (xt.browser.isIE() && D(h, "rtc")) throw new Error("RTC plugin is not supported on IE 11.");
        return Et.extend(r, { plugins: h.join(" ") });
    }
    function nv(e, t, n, r, o) {
        var i,
            a,
            u,
            s,
            c,
            l,
            f,
            d,
            m = e ? { mobile: ((i = t), (a = { resize: !1, toolbar_mode: ev(o.mobile || {}, "scrolling"), toolbar_sticky: !1 }), _e(_e(_e({}, kv), a), i ? { menubar: !1 } : {})) } : {},
            g =
                ((c = ["mobile"]),
                ie(
                    vv(m, o),
                    function (e, t) {
                        return D(c, t);
                    },
                    oe((l = {})),
                    oe((f = {}))
                ),
                { sections: J((d = { t: l, f: f }).t), settings: J(d.f) }),
            p = Et.extend(
                n,
                r,
                g.settings(),
                e && Zh(g, "mobile")
                    ? (function (e) {
                          void 0 === e && (e = {});
                          var t = ue(g.sections(), "mobile").getOr({});
                          return Et.extend({}, e, t);
                      })()
                    : {},
                { validate: !0, external_plugins: ((u = r), (s = g.settings().external_plugins || {}), u && u.external_plugins ? Et.extend({}, u.external_plugins, s) : s) }
            );
        return tv(e, g, r, p);
    }
    function rv(e, t, n) {
        return ve.from(t.settings[n]).filter(e);
    }
    function ov(e, t) {
        return t.dom[e];
    }
    function iv(e, t) {
        return parseInt(xn(t, e), 10);
    }
    function av(e, t, n) {
        var r,
            o,
            i,
            a,
            u,
            s,
            c = Nt.fromDom(e.getBody()),
            l = e.inline ? c : Nt.fromDom(Dt(c).dom.documentElement),
            f = ((r = e.inline), (i = t), (a = n), (u = (o = l).dom.getBoundingClientRect()), { x: i - (r ? u.left + o.dom.clientLeft + Tv(o) : 0), y: a - (r ? u.top + o.dom.clientTop + Dv(o) : 0) }),
            d = f.x,
            m = f.y,
            g = Av((s = l)),
            p = Rv(s);
        return 0 <= d && 0 <= m && d <= g && m <= p;
    }
    function uv(o) {
        function i() {
            var e = o.theme;
            return e && e.getNotificationManagerImpl ? e.getNotificationManagerImpl() : { open: t, close: t, reposition: t, getArgs: t };
            function t() {
                throw new Error("Theme did not provide a NotificationManager implementation.");
            }
        }
        function a() {
            return ve.from(c[0]);
        }
        function u() {
            0 < c.length && i().reposition(c);
        }
        function s(t) {
            z(c, function (e) {
                return e === t;
            }).each(function (e) {
                c.splice(e, 1);
            });
        }
        function t(n, e) {
            if ((void 0 === e && (e = !0), !o.removed && ((r = (t = o).inline ? t.getBody() : t.getContentAreaContainer()), ve.from(r).map(Nt.fromDom).map(In).getOr(!1))))
                return (
                    e && o.fire("BeforeOpenNotification", { notification: n }),
                    M(c, function (e) {
                        return !((t = i().getArgs(e)).type !== n.type || t.text !== n.text || t.progressBar || t.timeout || n.progressBar || n.timeout);
                        var t;
                    }).getOrThunk(function () {
                        o.editorManager.setActive(o);
                        var e = i().open(n, function () {
                            s(e),
                                u(),
                                a().fold(
                                    function () {
                                        return o.focus();
                                    },
                                    function (e) {
                                        return Nt.fromDom(e.getEl()).dom.focus();
                                    }
                                );
                        });
                        return c.push(e), u(), o.fire("OpenNotification", { notification: _e({}, e) }), e;
                    })
                );
            var t, r;
        }
        var n,
            c = [],
            e = J(c);
        return (
            (n = o).on("SkinLoaded", function () {
                var e = n.getParam("service_message");
                e && t({ text: e, type: "warning", timeout: 0 }, !1), u();
            }),
            n.on("show ResizeEditor ResizeWindow NodeChange", function () {
                _r.requestAnimationFrame(u);
            }),
            n.on("remove", function () {
                Y(c.slice(), function (e) {
                    i().close(e);
                });
            }),
            {
                open: t,
                close: function () {
                    a().each(function (e) {
                        i().close(e), s(e), u();
                    });
                },
                getNotifications: e,
            }
        );
    }
    var sv,
        cv,
        lv = 0,
        fv = function (e, t) {
            return e && e.firstChild && e.firstChild === e.lastChild && e.firstChild.name === t;
        },
        dv = Et.makeMap,
        mv = Et.each,
        gv = Et.explode,
        pv = Et.extend,
        hv = Ja.DOM,
        vv =
            ((sv = function (e, t) {
                return h(e) && h(t) ? vv(e, t) : t;
            }),
            function () {
                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                if (0 === e.length) throw new Error("Can't merge zero objects");
                for (var n = {}, r = 0; r < e.length; r++) {
                    var o,
                        i = e[r];
                    for (o in i) Ne(i, o) && (n[o] = sv(n[o], i[o]));
                }
                return n;
            }),
        bv = "autoresize_on_init,content_editable_state,convert_fonts_to_spans,inline_styles,padd_empty_with_br,block_elements,boolean_attributes,editor_deselector,editor_selector,elements,file_browser_callback_types,filepicker_validator_handler,force_hex_style_colors,force_p_newlines,gecko_spellcheck,images_dataimg_filter,media_scripts,mode,move_caret_before_on_enter_elements,non_empty_elements,self_closing_elements,short_ended_elements,special,spellchecker_select_languages,spellchecker_whitelist,tab_focus,table_responsive_width,text_block_elements,text_inline_elements,toolbar_drawer,types,validate,whitespace_elements,paste_word_valid_elements,paste_retain_style_properties,paste_convert_word_fake_lists".split(
            ","
        ),
        yv = "bbcode,colorpicker,contextmenu,fullpage,legacyoutput,spellchecker,textcolor".split(","),
        Cv = "imagetools,toc".split(","),
        xv = dt().deviceType,
        wv = xv.isTouch(),
        Sv = xv.isPhone(),
        Ev = xv.isTablet(),
        Nv = ["lists", "autolink", "autosave"],
        kv = { table_grid: !1, object_resizing: !1, resize: !1 },
        _v =
            ((cv = {}),
            {
                add: function (e, t) {
                    cv[e] = t;
                },
                get: function (e) {
                    return cv[e] || { icons: {} };
                },
                has: function (e) {
                    return Ne(cv, e);
                },
            }),
        Av = A(ov, "clientWidth"),
        Rv = A(ov, "clientHeight"),
        Dv = A(iv, "margin-top"),
        Tv = A(iv, "margin-left"),
        Ov = su.PluginManager,
        Bv = su.ThemeManager;
    function Pv(r) {
        function o() {
            var e = r.theme;
            return e && e.getWindowManagerImpl ? e.getWindowManagerImpl() : { open: t, openUrl: t, alert: t, confirm: t, close: t, getParams: t, setParams: t };
            function t() {
                throw new Error("Theme did not provide a WindowManager implementation.");
            }
        }
        function i(n, r) {
            return function () {
                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                return r ? r.apply(n, e) : void 0;
            };
        }
        function n(t) {
            r.fire("CloseWindow", { dialog: t }),
                0 ===
                    (u = U(u, function (e) {
                        return e !== t;
                    })).length && r.focus();
        }
        function a(e) {
            r.editorManager.setActive(r), cd(r);
            var t,
                n = e();
            return (t = n), u.push(t), r.fire("OpenWindow", { dialog: t }), n;
        }
        var u = [];
        return (
            r.on("remove", function () {
                Y(u, function (e) {
                    o().close(e);
                });
            }),
            {
                open: function (e, t) {
                    return a(function () {
                        return o().open(e, t, n);
                    });
                },
                openUrl: function (e) {
                    return a(function () {
                        return o().openUrl(e, n);
                    });
                },
                alert: function (e, t, n) {
                    var r = o();
                    r.alert(e, i(n || r, t));
                },
                confirm: function (e, t, n) {
                    var r = o();
                    r.confirm(e, i(n || r, t));
                },
                close: function () {
                    ve.from(u[u.length - 1]).each(function (e) {
                        o().close(e), n(e);
                    });
                },
            }
        );
    }
    function Lv(e, t) {
        e.notificationManager.open({ type: "error", text: t });
    }
    function Iv(e, t) {
        e._skinLoaded
            ? Lv(e, t)
            : e.on("SkinLoaded", function () {
                  Lv(e, t);
              });
    }
    function Mv(e, t, n) {
        vf(e, t, { message: n }), console.error(n);
    }
    function Fv(e, t, n) {
        return n ? "Failed to load " + e + ": " + n + " from url " + t : "Failed to load " + e + " url: " + t;
    }
    function Uv(e, t, n) {
        Mv(e, "PluginLoadError", Fv("plugin", t, n));
    }
    function zv(e) {
        var t, n;
        e.contentCSS = e.contentCSS.concat(cy(e, ((n = (t = e).getParam("content_css")), X(n) ? T(n.split(","), Je) : S(n) ? n : !1 === n || t.inline ? [] : ["default"])), cy(e, Ds(e)));
    }
    function Hv() {
        function n(e, t) {
            return { status: e, resultUri: t };
        }
        function t(e) {
            return e in r;
        }
        var r = {};
        return {
            hasBlobUri: t,
            getResultUri: function (e) {
                var t = r[e];
                return t ? t.resultUri : null;
            },
            isPending: function (e) {
                return !!t(e) && 1 === r[e].status;
            },
            isUploaded: function (e) {
                return !!t(e) && 2 === r[e].status;
            },
            markPending: function (e) {
                r[e] = n(1, null);
            },
            markUploaded: function (e, t) {
                r[e] = n(2, t);
            },
            removeFailed: function (e) {
                delete r[e];
            },
            destroy: function () {
                r = {};
            },
        };
    }
    function jv(e) {
        return e + ly++ + ("s" + new Date().getTime().toString(36) + t() + t() + t());
        function t() {
            return Math.round(4294967295 * Math.random()).toString(36);
        }
    }
    function Vv() {
        function e(e) {
            return M(n, e).getOrUndefined();
        }
        function i(e) {
            if (!e.blob || !e.base64) throw new Error("blob and base64 representations of the image are required for BlobInfo to be created");
            var t = e.id || jv("blobid"),
                n = e.name || t,
                r = e.blob;
            return {
                id: J(t),
                name: J(n),
                filename: J(
                    e.filename ||
                        n +
                            "." +
                            ({
                                "image/jpeg": "jpg",
                                "image/jpg": "jpg",
                                "image/gif": "gif",
                                "image/png": "png",
                                "image/apng": "apng",
                                "image/avif": "avif",
                                "image/svg+xml": "svg",
                                "image/webp": "webp",
                                "image/bmp": "bmp",
                                "image/tiff": "tiff",
                            }[r.type.toLowerCase()] || "dat")
                ),
                blob: J(r),
                base64: J(e.base64),
                blobUri: J(e.blobUri || URL.createObjectURL(r)),
                uri: J(e.uri),
            };
        }
        function t(t) {
            return e(function (e) {
                return e.id() === t;
            });
        }
        var n = [];
        return {
            create: function (e, t, n, r, o) {
                if (X(e)) return i({ id: e, name: r, filename: o, blob: t, base64: n });
                if (h(e)) return i(e);
                throw new Error("Unknown input type");
            },
            add: function (e) {
                t(e.id()) || n.push(e);
            },
            get: t,
            getByUri: function (t) {
                return e(function (e) {
                    return e.blobUri() === t;
                });
            },
            getByData: function (t, n) {
                return e(function (e) {
                    return e.base64() === t && e.blob().type === n;
                });
            },
            findFirst: e,
            removeByUri: function (t) {
                n = U(n, function (e) {
                    return e.blobUri() !== t || void URL.revokeObjectURL(e.blobUri());
                });
            },
            destroy: function () {
                Y(n, function (e) {
                    URL.revokeObjectURL(e.blobUri());
                }),
                    (n = []);
            },
        };
    }
    function qv(u, s) {
        function o(e, r, o, t) {
            var i = new XMLHttpRequest();
            i.open("POST", s.url),
                (i.withCredentials = s.credentials),
                (i.upload.onprogress = function (e) {
                    t((e.loaded / e.total) * 100);
                }),
                (i.onerror = function () {
                    o("Image upload failed due to a XHR Transport error. Code: " + i.status);
                }),
                (i.onload = function () {
                    var e, t, n;
                    i.status < 200 || 300 <= i.status
                        ? o("HTTP Error: " + i.status)
                        : (e = JSON.parse(i.responseText)) && "string" == typeof e.location
                        ? r(((t = s.basePath), (n = e.location), t ? t.replace(/\/$/, "") + "/" + n.replace(/^\//, "") : n))
                        : o("Invalid JSON: " + i.responseText);
                });
            var n = new FormData();
            n.append("file", e.blob(), e.filename()), i.send(n);
        }
        function c(e, t) {
            return { url: t, blobInfo: e, status: !0 };
        }
        function l(e, t, n) {
            return { url: "", blobInfo: e, status: !1, error: { message: t, options: n } };
        }
        function f(e, t) {
            Et.each(d[e], function (e) {
                e(t);
            }),
                delete d[e];
        }
        var d = {};
        return (
            !1 === y(s.handler) && (s.handler = o),
            {
                upload: function (e, t) {
                    return s.url || s.handler !== o
                        ? ((n = e),
                          (r = t),
                          (n = Et.grep(e, function (e) {
                              return !u.isUploaded(e.blobUri());
                          })),
                          kr.all(
                              Et.map(n, function (e) {
                                  return u.isPending(e.blobUri())
                                      ? ((n = e.blobUri()),
                                        new kr(function (e) {
                                            (d[n] = d[n] || []), d[n].push(e);
                                        }))
                                      : ((i = e),
                                        (t = s.handler),
                                        (a = r),
                                        u.markPending(i.blobUri()),
                                        new kr(function (r) {
                                            var n;
                                            try {
                                                var o = function () {
                                                    n && n.close();
                                                };
                                                t(
                                                    i,
                                                    function (e) {
                                                        o(), u.markUploaded(i.blobUri(), e), f(i.blobUri(), c(i, e)), r(c(i, e));
                                                    },
                                                    function (e, t) {
                                                        var n = t || {};
                                                        o(), u.removeFailed(i.blobUri()), f(i.blobUri(), l(i, e, n)), r(l(i, e, n));
                                                    },
                                                    function (t) {
                                                        t < 0 ||
                                                            100 < t ||
                                                            ve
                                                                .from(n)
                                                                .orThunk(function () {
                                                                    return ve.from(a).map(C);
                                                                })
                                                                .each(function (e) {
                                                                    (n = e).progressBar.value(t);
                                                                });
                                                    }
                                                );
                                            } catch (e) {
                                                r(l(i, e.message, {}));
                                            }
                                        }));
                                  var i, t, a, n;
                              })
                          ))
                        : new kr(function (e) {
                              e([]);
                          });
                    var n, r;
                },
            }
        );
    }
    function $v(e) {
        return function () {
            return e.notificationManager.open({ text: e.translate("Image uploading..."), type: "info", timeout: -1, progressBar: !0 });
        };
    }
    function Wv(e, t) {
        return qv(t, {
            url: e.getParam("images_upload_url", "", "string"),
            basePath: e.getParam("images_upload_base_path", "", "string"),
            credentials: e.getParam("images_upload_credentials", !1, "boolean"),
            handler: e.getParam("images_upload_handler", null, "function"),
        });
    }
    function Kv(l) {
        function t(t) {
            return function (e) {
                return l.selection ? t(e) : [];
            };
        }
        function r(e, t, n) {
            for (var r = 0; -1 !== (r = e.indexOf(t, r)) && ((e = e.substring(0, r) + n + e.substr(r + t.length)), (r += n.length - t.length + 1)), -1 !== r; );
            return e;
        }
        function o(e, t, n) {
            return (e = r(e, 'src="' + t + '"', 'src="' + n + '"' + (n === xt.transparentSrc ? ' data-mce-placeholder="1"' : ""))), r(e, 'data-mce-src="' + t + '"', 'data-mce-src="' + n + '"');
        }
        function f(t, n) {
            Y(l.undoManager.data, function (e) {
                "fragmented" === e.type
                    ? (e.fragments = T(e.fragments, function (e) {
                          return o(e, t, n);
                      }))
                    : (e.content = o(e.content, t, n));
            });
        }
        function n(n) {
            return (
                (u = u || Wv(l, g)),
                v().then(
                    t(function (c) {
                        var e = T(c, function (e) {
                            return e.blobInfo;
                        });
                        return u.upload(e, $v(l)).then(
                            t(function (e) {
                                var s = [],
                                    t = T(e, function (e, t) {
                                        var n,
                                            r,
                                            o,
                                            i,
                                            a = c[t].blobInfo,
                                            u = c[t].image;
                                        return (
                                            e.status && l.getParam("images_replace_blob_uris", !0, "boolean")
                                                ? (m.removeByUri(u.src),
                                                  mh(l) ||
                                                      ((r = u),
                                                      (o = e.url),
                                                      (i = l.convertURL(o, "src")),
                                                      f(r.src, o),
                                                      l.$(r).attr({ src: l.getParam("images_reuse_filename", !1, "boolean") ? o + (-1 === o.indexOf("?") ? "?" : "&") + new Date().getTime() : o, "data-mce-src": i })))
                                                : e.error && (e.error.options.remove && (f(u.getAttribute("src"), xt.transparentSrc), s.push(u)), (n = e.error.message), Iv(l, uu.translate(["Failed to upload image: {0}", n]))),
                                            { element: u, status: e.status, uploadUri: e.url, blobInfo: a }
                                        );
                                    });
                                return (
                                    0 < t.length && h.fireIfChanged(),
                                    0 < s.length &&
                                        (mh(l)
                                            ? console.error("Removing images on failed uploads is currently unsupported for RTC")
                                            : l.undoManager.transact(function () {
                                                  Y(s, function (e) {
                                                      l.dom.remove(e), m.removeByUri(e.src);
                                                  });
                                              })),
                                    n && n(t),
                                    t
                                );
                            })
                        );
                    })
                )
            );
        }
        function e(e) {
            if (Ns(l)) return n(e);
        }
        function i(t) {
            return (
                !1 !==
                    j(p, function (e) {
                        return e(t);
                    }) &&
                (0 !== t.getAttribute("src").indexOf("data:") || l.getParam("images_dataimg_filter", w, "function")(t))
            );
        }
        function a(e) {
            return e.replace(/src="(blob:[^"]+)"/g, function (e, n) {
                var t = g.getResultUri(n);
                if (t) return 'src="' + t + '"';
                var r =
                    (r = m.getByUri(n)) ||
                    L(
                        l.editorManager.get(),
                        function (e, t) {
                            return e || (t.editorUpload && t.editorUpload.blobCache.getByUri(n));
                        },
                        null
                    );
                return r ? 'src="data:' + r.blob().type + ";base64," + r.base64() + '"' : e;
            });
        }
        var u,
            s,
            c,
            d,
            m = Vv(),
            g = Hv(),
            p = [],
            h =
                ((d = ru(null)),
                (c = l).on("change AddUndo", function (e) {
                    d.set(_e({}, e.level));
                }),
                {
                    fireIfChanged: function () {
                        var t = c.undoManager.data;
                        Z(t)
                            .filter(function (e) {
                                return !sh(d.get(), e);
                            })
                            .each(function (e) {
                                c.setDirty(!0), c.fire("change", { level: e, lastLevel: G(t, t.length - 2).getOrNull() });
                            });
                    },
                }),
            v = function () {
                return (s = s || Hh(g, m)).findAll(l.getBody(), i).then(
                    t(function (e) {
                        return (
                            (e = U(e, function (e) {
                                return "string" != typeof e || void Iv(l, e);
                            })),
                            mh(l) ||
                                Y(e, function (e) {
                                    f(e.image.src, e.blobInfo.blobUri()), (e.image.src = e.blobInfo.blobUri()), e.image.removeAttribute("data-mce-src");
                                }),
                            e
                        );
                    })
                );
            };
        return (
            l.on("SetContent", function () {
                (Ns(l) ? e : v)();
            }),
            l.on("RawSaveContent", function (e) {
                e.content = a(e.content);
            }),
            l.on("GetContent", function (e) {
                e.source_view || "raw" === e.format || "tree" === e.format || (e.content = a(e.content));
            }),
            l.on("PostRender", function () {
                l.parser.addNodeFilter("img", function (e) {
                    Y(e, function (e) {
                        var t,
                            n = e.attr("src");
                        m.getByUri(n) || ((t = g.getResultUri(n)) && e.attr("src", t));
                    });
                });
            }),
            {
                blobCache: m,
                addFilter: function (e) {
                    p.push(e);
                },
                uploadImages: n,
                uploadImagesAuto: e,
                scanForImages: v,
                destroy: function () {
                    m.destroy(), g.destroy(), (s = u = null);
                },
            }
        );
    }
    function Xv(e, t) {
        function m(e) {
            o = "string" == typeof e ? { name: e, classes: [], attrs: {} } : e;
            var t,
                n = dy.create(o.name),
                r = n;
            return (t = o).classes.length && dy.addClass(r, t.classes.join(" ")), dy.setAttribs(r, t.attrs), n;
        }
        var n,
            o,
            r,
            g = (t && t.schema) || to({}),
            p = function (n, e, t) {
                var r,
                    o,
                    i,
                    a,
                    u,
                    s,
                    c,
                    l = 0 < e.length && e[0],
                    f = l && l.name,
                    d = ((a = f), (u = "string" != typeof (i = n) ? i.nodeName.toLowerCase() : i), !(!(c = (s = g.getElementRule(u)) && s.parentsRequired) || !c.length) && (a && -1 !== Et.inArray(c, a) ? a : c[0]));
                if (d) f === d ? ((o = e[0]), (e = e.slice(1))) : (o = d);
                else if (l) (o = e[0]), (e = e.slice(1));
                else if (!t) return n;
                return (
                    o && (r = m(o)).appendChild(n),
                    t &&
                        (r || (r = dy.create("div")).appendChild(n),
                        Et.each(t, function (e) {
                            var t = m(e);
                            r.insertBefore(t, n);
                        })),
                    p(r, e, o && o.siblings)
                );
            };
        return e && e.length ? ((n = m((o = e[0]))), (r = dy.create("div")).appendChild(p(n, e.slice(1), o.siblings)), r) : "";
    }
    function Yv(e) {
        var t,
            a = { classes: [], attrs: {} };
        return (
            "*" !== (e = a.selector = Et.trim(e)) &&
                (t = e.replace(/(?:([#\.]|::?)([\w\-]+)|(\[)([^\]]+)\]?)/g, function (e, t, n, r, o) {
                    switch (t) {
                        case "#":
                            a.attrs.id = n;
                            break;
                        case ".":
                            a.classes.push(n);
                            break;
                        case ":":
                            -1 !== Et.inArray("checked disabled enabled read-only required".split(" "), n) && (a.attrs[n] = n);
                    }
                    var i;
                    return "[" !== r || ((i = o.match(/([\w\-]+)(?:\=\"([^\"]+))?/)) && (a.attrs[i[1]] = i[2])), "";
                })),
            (a.name = t || "div"),
            a
        );
    }
    function Gv(n, e) {
        var r,
            t,
            o = "",
            i = ((t = n.getParam("preview_styles", "font-family font-size font-weight font-style text-decoration text-transform color background-color border border-radius outline text-shadow")), X(t) ? t : "");
        if ("" === i) return "";
        function a(e) {
            return e.replace(/%(\w+)/g, "");
        }
        if ("string" == typeof e) {
            if (!(e = n.formatter.get(e))) return;
            e = e[0];
        }
        if ("preview" in e) {
            var u = ue(e, "preview");
            if (fn(u, !1)) return "";
            i = u.getOr(i);
        }
        var s,
            c = e.block || e.inline || "span",
            l =
                (s = e.selector) && "string" == typeof s
                    ? ((s = (s = s.split(/\s*,\s*/)[0]).replace(/\s*(~\+|~|\+|>)\s*/g, "$1")),
                      Et.map(s.split(/(?:>|\s+(?![^\[\]]+\]))/), function (e) {
                          var t = Et.map(e.split(/(?:~\+|~|\+)/), Yv),
                              n = t.pop();
                          return t.length && (n.siblings = t), n;
                      }).reverse())
                    : [],
            f = l.length ? (l[0].name || (l[0].name = c), (c = e.selector), Xv(l, n)) : Xv([c], n),
            d = dy.select(c, f)[0] || f.firstChild;
        return (
            fy(e.styles, function (e, t) {
                var n = a(e);
                n && dy.setStyle(d, t, n);
            }),
            fy(e.attributes, function (e, t) {
                var n = a(e);
                n && dy.setAttrib(d, t, n);
            }),
            fy(e.classes, function (e) {
                var t = a(e);
                dy.hasClass(d, t) || dy.addClass(d, t);
            }),
            n.fire("PreviewFormats"),
            dy.setStyles(f, { position: "absolute", left: -65535 }),
            n.getBody().appendChild(f),
            (r = dy.getStyle(n.getBody(), "fontSize", !0)),
            (r = /px$/.test(r) ? parseInt(r, 10) : 0),
            fy(i.split(" "), function (e) {
                var t = dy.getStyle(d, e, !0);
                if (
                    !(
                        ("background-color" === e && /transparent|rgba\s*\([^)]+,\s*0\)/.test(t) && ((t = dy.getStyle(n.getBody(), e, !0)), "#ffffff" === dy.toHex(t).toLowerCase())) ||
                        ("color" === e && "#000000" === dy.toHex(t).toLowerCase())
                    )
                ) {
                    if ("font-size" === e && /em|%$/.test(t)) {
                        if (0 === r) return;
                        t = (parseFloat(t) / (/%$/.test(t) ? 100 : 1)) * r + "px";
                    }
                    "border" === e && t && (o += "padding:0 2px;"), (o += e + ":" + t + ";");
                }
            }),
            n.fire("AfterPreviewFormats"),
            dy.remove(f),
            o
        );
    }
    function Jv(c) {
        var e,
            r,
            t,
            n,
            o,
            i,
            a =
                ((n = {}),
                (o = function (e, t) {
                    e &&
                        (X(e)
                            ? (Y((t = !S(t) ? [t] : t), function (e) {
                                  b(e.deep) && (e.deep = !fl(e)),
                                      b(e.split) && (e.split = !fl(e) || dl(e)),
                                      b(e.remove) && fl(e) && !dl(e) && (e.remove = "none"),
                                      fl(e) && dl(e) && ((e.mixed = !0), (e.block_expand = !0)),
                                      X(e.classes) && (e.classes = e.classes.split(/\s+/));
                              }),
                              (n[e] = t))
                            : ne(e, function (e, t) {
                                  o(t, e);
                              }));
                })(
                    ((r = (e = c).dom),
                    (t = {
                        valigntop: [{ selector: "td,th", styles: { verticalAlign: "top" } }],
                        valignmiddle: [{ selector: "td,th", styles: { verticalAlign: "middle" } }],
                        valignbottom: [{ selector: "td,th", styles: { verticalAlign: "bottom" } }],
                        alignleft: [
                            { selector: "figure.image", collapsed: !1, classes: "align-left", ceFalseOverride: !0, preview: "font-family font-size" },
                            { selector: "figure,p,h1,h2,h3,h4,h5,h6,td,th,tr,div,ul,ol,li", styles: { textAlign: "left" }, inherit: !1, preview: !1, defaultBlock: "div" },
                            { selector: "img,table,audio,video", collapsed: !1, styles: { float: "left" }, preview: "font-family font-size" },
                        ],
                        aligncenter: [
                            { selector: "figure,p,h1,h2,h3,h4,h5,h6,td,th,tr,div,ul,ol,li", styles: { textAlign: "center" }, inherit: !1, preview: "font-family font-size", defaultBlock: "div" },
                            { selector: "figure.image", collapsed: !1, classes: "align-center", ceFalseOverride: !0, preview: "font-family font-size" },
                            { selector: "img,audio,video", collapsed: !1, styles: { display: "block", marginLeft: "auto", marginRight: "auto" }, preview: !1 },
                            { selector: "table", collapsed: !1, styles: { marginLeft: "auto", marginRight: "auto" }, preview: "font-family font-size" },
                        ],
                        alignright: [
                            { selector: "figure.image", collapsed: !1, classes: "align-right", ceFalseOverride: !0, preview: "font-family font-size" },
                            { selector: "figure,p,h1,h2,h3,h4,h5,h6,td,th,tr,div,ul,ol,li", styles: { textAlign: "right" }, inherit: !1, preview: "font-family font-size", defaultBlock: "div" },
                            { selector: "img,table,audio,video", collapsed: !1, styles: { float: "right" }, preview: "font-family font-size" },
                        ],
                        alignjustify: [{ selector: "figure,p,h1,h2,h3,h4,h5,h6,td,th,tr,div,ul,ol,li", styles: { textAlign: "justify" }, inherit: !1, defaultBlock: "div", preview: "font-family font-size" }],
                        bold: [
                            { inline: "strong", remove: "all", preserve_attributes: ["class", "style"] },
                            { inline: "span", styles: { fontWeight: "bold" } },
                            { inline: "b", remove: "all", preserve_attributes: ["class", "style"] },
                        ],
                        italic: [
                            { inline: "em", remove: "all", preserve_attributes: ["class", "style"] },
                            { inline: "span", styles: { fontStyle: "italic" } },
                            { inline: "i", remove: "all", preserve_attributes: ["class", "style"] },
                        ],
                        underline: [
                            { inline: "span", styles: { textDecoration: "underline" }, exact: !0 },
                            { inline: "u", remove: "all", preserve_attributes: ["class", "style"] },
                        ],
                        strikethrough: [
                            { inline: "span", styles: { textDecoration: "line-through" }, exact: !0 },
                            { inline: "strike", remove: "all", preserve_attributes: ["class", "style"] },
                            { inline: "s", remove: "all", preserve_attributes: ["class", "style"] },
                        ],
                        forecolor: { inline: "span", styles: { color: "%value" }, links: !0, remove_similar: !0, clear_child_styles: !0 },
                        hilitecolor: { inline: "span", styles: { backgroundColor: "%value" }, links: !0, remove_similar: !0, clear_child_styles: !0 },
                        fontname: { inline: "span", toggle: !1, styles: { fontFamily: "%value" }, clear_child_styles: !0 },
                        fontsize: { inline: "span", toggle: !1, styles: { fontSize: "%value" }, clear_child_styles: !0 },
                        lineheight: { selector: "h1,h2,h3,h4,h5,h6,p,li,td,th,div", defaultBlock: "p", styles: { lineHeight: "%value" } },
                        fontsize_class: { inline: "span", attributes: { class: "%value" } },
                        blockquote: { block: "blockquote", wrapper: !0, remove: "all" },
                        subscript: { inline: "sub" },
                        superscript: { inline: "sup" },
                        code: { inline: "code" },
                        link: {
                            inline: "a",
                            selector: "a",
                            remove: "all",
                            split: !0,
                            deep: !0,
                            onmatch: function (e, t, n) {
                                return zn(e) && e.hasAttribute("href");
                            },
                            onformat: function (n, e, t) {
                                Et.each(t, function (e, t) {
                                    r.setAttrib(n, t, e);
                                });
                            },
                        },
                        lang: {
                            inline: "span",
                            clear_child_styles: !0,
                            remove_similar: !0,
                            attributes: {
                                lang: "%value",
                                "data-mce-lang": function (e) {
                                    var t;
                                    return null !== (t = null == e ? void 0 : e.customValue) && void 0 !== t ? t : null;
                                },
                            },
                        },
                        removeformat: [
                            { selector: "b,strong,em,i,font,u,strike,s,sub,sup,dfn,code,samp,kbd,var,cite,mark,q,del,ins,small", remove: "all", split: !0, expand: !1, block_expand: !0, deep: !0 },
                            { selector: "span", attributes: ["style", "class"], remove: "empty", split: !0, expand: !1, deep: !0 },
                            { selector: "*", attributes: ["style", "class"], split: !1, expand: !1, deep: !0 },
                        ],
                    }),
                    Et.each("p h1 h2 h3 h4 h5 h6 div address pre dt dd samp".split(/\s/), function (e) {
                        t[e] = { block: e, remove: "all" };
                    }),
                    t)
                ),
                o(e.getParam("formats")),
                {
                    get: function (e) {
                        return V(e) ? n[e] : n;
                    },
                    has: function (e) {
                        return Ne(n, e);
                    },
                    register: o,
                    unregister: function (e) {
                        return e && n[e] && delete n[e], n;
                    },
                }),
            l = ru(null);
        return (
            (function (e) {
                e.addShortcut("meta+b", "", "Bold"), e.addShortcut("meta+i", "", "Italic"), e.addShortcut("meta+u", "", "Underline");
                for (var t = 1; t <= 6; t++) e.addShortcut("access+" + t, "", ["FormatBlock", !1, "h" + t]);
                e.addShortcut("access+7", "", ["FormatBlock", !1, "p"]), e.addShortcut("access+8", "", ["FormatBlock", !1, "div"]), e.addShortcut("access+9", "", ["FormatBlock", !1, "address"]);
            })(c),
            (i = c).on("mouseup keydown", function (e) {
                var t = i,
                    n = e.keyCode,
                    r = t.selection,
                    o = t.getBody();
                Fg(t, null, !1), (8 !== n && 46 !== n) || !r.isCollapsed() || r.getStart().innerHTML !== vp || Fg(t, Hc(o, r.getStart())), (37 !== n && 39 !== n) || Fg(t, Hc(o, r.getStart()));
            }),
            {
                get: a.get,
                has: a.has,
                register: a.register,
                unregister: a.unregister,
                apply: function (e, t, n) {
                    var r = e,
                        o = t,
                        i = n;
                    hh(c).formatter.apply(r, o, i);
                },
                remove: function (e, t, n, r) {
                    var o = e,
                        i = t,
                        a = n,
                        u = r;
                    hh(c).formatter.remove(o, i, a, u);
                },
                toggle: function (e, t, n) {
                    var r = e,
                        o = t,
                        i = n;
                    hh(c).formatter.toggle(r, o, i);
                },
                match: function (e, t, n, r) {
                    return (o = e), (i = t), (a = n), (u = r), hh(c).formatter.match(o, i, a, u);
                    var o, i, a, u;
                },
                closest: function (e) {
                    return (t = e), hh(c).formatter.closest(t);
                    var t;
                },
                matchAll: function (e, t) {
                    return (n = e), (r = t), hh(c).formatter.matchAll(n, r);
                    var n, r;
                },
                matchNode: function (e, t, n, r) {
                    return (o = e), (i = t), (a = n), (u = r), hh(c).formatter.matchNode(o, i, a, u);
                    var o, i, a, u;
                },
                canApply: function (e) {
                    return (t = e), hh(c).formatter.canApply(t);
                    var t;
                },
                formatChanged: function (e, t, n, r) {
                    return (o = l), (i = e), (a = t), (u = n), (s = r), hh(c).formatter.formatChanged(o, i, a, u, s);
                    var o, i, a, u, s;
                },
                getCssText: A(Gv, c),
            }
        );
    }
    function Qv(e) {
        switch (e.toLowerCase()) {
            case "undo":
            case "redo":
            case "mcerepaint":
            case "mcefocus":
                return 1;
            default:
                return;
        }
    }
    function Zv(s) {
        var e,
            n,
            r,
            o,
            i,
            c = cu(),
            l = ru(0),
            f = ru(0),
            d = {
                data: [],
                typing: !1,
                beforeChange: function () {
                    var e = l,
                        t = c;
                    hh(s).undoManager.beforeChange(e, t);
                },
                add: function (e, t) {
                    return (n = d), (r = f), (o = l), (i = c), (a = e), (u = t), hh(s).undoManager.add(n, r, o, i, a, u);
                    var n, r, o, i, a, u;
                },
                undo: function () {
                    return (e = d), (t = l), (n = f), hh(s).undoManager.undo(e, t, n);
                    var e, t, n;
                },
                redo: function () {
                    return (e = f), (t = d.data), hh(s).undoManager.redo(e, t);
                    var e, t;
                },
                clear: function () {
                    var e = d,
                        t = f;
                    hh(s).undoManager.clear(e, t);
                },
                reset: function () {
                    var e = d;
                    hh(s).undoManager.reset(e);
                },
                hasUndo: function () {
                    return (e = d), (t = f), hh(s).undoManager.hasUndo(e, t);
                    var e, t;
                },
                hasRedo: function () {
                    return (e = d), (t = f), hh(s).undoManager.hasRedo(e, t);
                    var e, t;
                },
                transact: function (e) {
                    return (t = d), (n = l), (r = e), hh(s).undoManager.transact(t, n, r);
                    var t, n, r;
                },
                ignore: function (e) {
                    var t = l,
                        n = e;
                    hh(s).undoManager.ignore(t, n);
                },
                extra: function (e, t) {
                    var n = d,
                        r = f,
                        o = e,
                        i = t;
                    hh(s).undoManager.extra(n, r, o, i);
                },
            };
        return (
            mh(s) ||
                ((r = d),
                (o = l),
                (i = ru(!1)),
                (n = s).on("init", function () {
                    r.add();
                }),
                n.on("BeforeExecCommand", function (e) {
                    Qv(e.command) || (fh(r, o), r.beforeChange());
                }),
                n.on("ExecCommand", function (e) {
                    Qv(e.command) || a(e);
                }),
                n.on("ObjectResizeStart cut", function () {
                    r.beforeChange();
                }),
                n.on("SaveContent ObjectResized blur", a),
                n.on("dragend", a),
                n.on("keyup", function (e) {
                    var t = e.keyCode;
                    e.isDefaultPrevented() ||
                        (((33 <= t && t <= 36) || (37 <= t && t <= 40) || 45 === t || e.ctrlKey) && (a(), n.nodeChanged()),
                        (46 !== t && 8 !== t) || n.nodeChanged(),
                        i.get() && r.typing && !1 === sh(oh(n), r.data[0]) && (!1 === n.isDirty() && (n.setDirty(!0), n.fire("change", { level: r.data[0], lastLevel: null })), n.fire("TypingUndo"), i.set(!1), n.nodeChanged()));
                }),
                n.on("keydown", function (e) {
                    var t,
                        n = e.keyCode;
                    e.isDefaultPrevented() ||
                        ((33 <= n && n <= 36) || (37 <= n && n <= 40) || 45 === n
                            ? r.typing && a(e)
                            : ((t = (e.ctrlKey && !e.altKey) || e.metaKey), !(n < 16 || 20 < n) || 224 === n || 91 === n || r.typing || t || (r.beforeChange(), lh(r, !0, o), r.add({}, e), i.set(!0))));
                }),
                n.on("mousedown", function (e) {
                    r.typing && a(e);
                }),
                n.on("input", function (e) {
                    e.inputType && ("insertReplacementText" === e.inputType || ("insertText" === e.inputType && null === e.data) || "insertFromPaste" === e.inputType || "insertFromDrop" === e.inputType) && a(e);
                }),
                n.on("AddUndo Undo Redo ClearUndos", function (e) {
                    e.isDefaultPrevented() || n.nodeChanged();
                })),
            (e = s).addShortcut("meta+z", "", "Undo"),
            e.addShortcut("meta+y,meta+shift+z", "", "Redo"),
            d
        );
        function a(e) {
            lh(r, !1, o), r.add({}, e);
        }
    }
    function eb(e) {
        return "keydown" === e.type || "keyup" === e.type;
    }
    function tb(e) {
        var t = e.keyCode;
        return t === Bf.BACKSPACE || t === Bf.DELETE;
    }
    function nb(e, t) {
        return ze(Nt.fromDom(t), e.getParam("inline_boundaries_selector", "a[href],code,.mce-annotation", "string"));
    }
    function rb(e, t, n) {
        var r,
            o,
            i = ((r = e), (o = t), U(Ja.DOM.getParents(n.container(), "*", o), r));
        return ve.from(i[i.length - 1]);
    }
    function ob(e, t) {
        if (!t) return t;
        var n = t.container(),
            r = t.offset();
        return e
            ? Lr(n)
                ? jn(n.nextSibling)
                    ? as(n.nextSibling, 0)
                    : as.after(n)
                : Fr(t)
                ? as(n, r + 1)
                : t
            : Lr(n)
            ? jn(n.previousSibling)
                ? as(n.previousSibling, n.previousSibling.data.length)
                : as.before(n)
            : Ur(t)
            ? as(n, r - 1)
            : t;
    }
    function ib(e) {
        return fo(e) || go(e);
    }
    function ab(e, t) {
        return Ve(e, t)
            ? pr(
                  t,
                  ib,
                  ((n = e),
                  function (e) {
                      return je(n, Nt.fromDom(e.dom.parentNode));
                  })
              )
            : ve.none();
        var n;
    }
    function ub(e) {
        var t, n, r;
        e.dom.isEmpty(e.getBody()) && (e.setContent(""), (r = (n = (t = e).getBody()).firstChild && t.dom.isBlock(n.firstChild) ? n.firstChild : n), t.selection.setCursorLocation(r, 0));
    }
    function sb(e, t) {
        return { from: e, to: t };
    }
    function cb(e, t) {
        return ab(Nt.fromDom(e), Nt.fromDom(t.container())).map(function (e) {
            return { block: e, position: t };
        });
    }
    function lb(e) {
        var t,
            n = z((t = Dn(e)), lo).fold(J(t), function (e) {
                return t.slice(0, e);
            });
        return Y(n, Ln), n;
    }
    function fb(e, t) {
        return M(hm(t, e).reverse(), function (e) {
            return Wr(e);
        }).each(Ln);
    }
    function db(e, t, n, r) {
        if (Wr(n)) return mm(n), ef(n.dom);
        0 ===
            U(Lt(r), function (e) {
                return !Wr(e);
            }).length &&
            Wr(t) &&
            qt(r, Nt.fromTag("br"));
        var o = Zl(n.dom, as.before(r.dom));
        return (
            Y(lb(t), function (e) {
                qt(r, e);
            }),
            fb(e, t),
            o
        );
    }
    function mb(e, t, n) {
        if (Wr(n)) return Ln(n), Wr(t) && mm(t), ef(t.dom);
        var r = tf(n.dom);
        return (
            Y(lb(t), function (e) {
                Pn(n, e);
            }),
            fb(e, t),
            r
        );
    }
    function gb(e, t) {
        Uc(e, t.dom)
            .map(function (e) {
                return e.getNode();
            })
            .map(Nt.fromDom)
            .filter(Br)
            .each(Ln);
    }
    function pb(e, t, n) {
        return gb(!0, t), gb(!1, n), (Ve((o = n), (r = t)) ? ((i = hm(r, o)), ve.from(i[i.length - 1])) : ve.none()).fold(A(mb, e, t, n), A(db, e, t, n));
        var r, o, i;
    }
    function hb(e, t, n, r) {
        return t ? pb(e, r, n) : pb(e, n, r);
    }
    function vb(t, n) {
        var e,
            r,
            o,
            i,
            a,
            u,
            s,
            c = Nt.fromDom(t.getBody()),
            l =
                ((e = c.dom),
                (r = n),
                ((o = t.selection.getRng()).collapsed
                    ? ((a = r),
                      (u = cb((i = e), as.fromRangeStart(o))),
                      (s = u.bind(function (e) {
                          return Gl(a, i, e.position).bind(function (e) {
                              return cb(i, e).map(function (e) {
                                  return (
                                      (t = i),
                                      (n = a),
                                      Wn((r = e).position.getNode()) && !1 === Wr(r.block)
                                          ? Uc(!1, r.block.dom)
                                                .bind(function (e) {
                                                    return e.isEqual(r.position)
                                                        ? Gl(n, t, e).bind(function (e) {
                                                              return cb(t, e);
                                                          })
                                                        : ve.some(r);
                                                })
                                                .getOr(r)
                                          : r
                                  );
                                  var t, n, r;
                              });
                          });
                      })),
                      dn(u, s, sb).filter(function (e) {
                          return (
                              !1 === je(e.from.block, e.to.block) &&
                              Ot((n = e).from.block)
                                  .bind(function (t) {
                                      return Ot(n.to.block).filter(function (e) {
                                          return je(t, e);
                                      });
                                  })
                                  .isSome() &&
                              !1 === Yn((t = e).from.block.dom) &&
                              !1 === Yn(t.to.block.dom)
                          );
                          var t, n;
                      }))
                    : ve.none()
                ).bind(function (e) {
                    return hb(c, n, e.from.block, e.to.block);
                }));
        return (
            l.each(function (e) {
                t.selection.setRng(e.toRange());
            }),
            l.isSome()
        );
    }
    function bb(e, t) {
        var n = Nt.fromDom(t),
            r = A(je, e);
        return gr(n, ho, r).isSome();
    }
    function yb(e) {
        var n,
            r,
            o,
            t,
            i,
            a,
            u,
            s,
            c,
            l,
            f = Nt.fromDom(e.getBody()),
            d = e.selection.getRng();
        return (
            (a = d),
            (c = Zl((i = f).dom, as.fromRangeStart(a)).isNone()),
            (l = Ql(i.dom, as.fromRangeEnd(a)).isNone()),
            !bb((u = i), (s = a).startContainer) && !bb(u, s.endContainer) && c && l
                ? ((t = e).setContent(""), t.selection.setCursorLocation(), !0)
                : ((n = f),
                  (r = e.selection),
                  (o = r.getRng()),
                  dn(ab(n, Nt.fromDom(o.startContainer)), ab(n, Nt.fromDom(o.endContainer)), function (e, t) {
                      return (
                          !1 === je(e, t) &&
                          (o.deleteContents(),
                          hb(n, !0, e, t).each(function (e) {
                              r.setRng(e.toRange());
                          }),
                          !0)
                      );
                  }).getOr(!1))
        );
    }
    function Cb(e, t) {
        return !e.selection.isCollapsed() && yb(e);
    }
    function xb(e, t, n, r, o) {
        return ve.from(t._selectionOverrides.showCaret(e, n, r, o));
    }
    function wb(e, t) {
        var n, r;
        return e.fire("BeforeObjectSelected", { target: t }).isDefaultPrevented() ? ve.none() : ve.some(((r = (n = t).ownerDocument.createRange()).selectNode(n), r));
    }
    function Sb(e, t, n) {
        var r = Zs(1, e.getBody(), t),
            o = as.fromRangeStart(r),
            i = o.getNode();
        if (wc(i)) return xb(1, e, i, !o.isAtEnd(), !1);
        var a = o.getNode(!0);
        if (wc(a)) return xb(1, e, a, !1, !1);
        var u = e.dom.getParent(o.getNode(), function (e) {
            return yy(e) || by(e);
        });
        return wc(u) ? xb(1, e, u, !1, n) : ve.none();
    }
    function Eb(e, t, n) {
        return t.collapsed ? Sb(e, t, n).getOr(t) : t;
    }
    function Nb(e) {
        return ep(e) || Gg(e);
    }
    function kb(e) {
        return tp(e) || Jg(e);
    }
    function _b(n, r, e, t, o, i) {
        var a, u;
        return (
            xb(t, n, i.getNode(!o), o, !0).each(function (e) {
                var t;
                r.collapsed ? ((t = r.cloneRange()), o ? t.setEnd(e.startContainer, e.startOffset) : t.setStart(e.endContainer, e.endOffset), t.deleteContents()) : r.deleteContents(), n.selection.setRng(e);
            }),
            (a = n.dom),
            jn((u = e)) && 0 === u.data.length && a.remove(u),
            !0
        );
    }
    function Ab(e, t) {
        var n = e.selection.getRng();
        if (!jn(n.commonAncestorContainer)) return !1;
        var r = t ? ic.Forwards : ic.Backwards,
            o = Pc(e.getBody()),
            i = A(rc, t ? o.next : o.prev),
            a = t ? Nb : kb,
            u = tc(r, e.getBody(), n),
            s = ob(t, i(u));
        if (!s || !oc(u, s)) return !1;
        if (a(s)) return _b(e, n, u.getNode(), r, t, s);
        var c = i(s);
        return !!(c && a(c) && oc(s, c)) && _b(e, n, u.getNode(), r, t, c);
    }
    function Rb(l, f, d) {
        return Gl(f, l, d).bind(function (e) {
            return (
                (s = e.getNode()),
                ho(Nt.fromDom(s)) ||
                go(Nt.fromDom(s)) ||
                ((o = l),
                (u = e),
                ec(!(i = f), (a = d)).fold(function () {
                    return ec(i, u).fold(R, c);
                }, c))
                    ? ve.none()
                    : (f && Yn(e.getNode())) || (!1 === f && Yn(e.getNode(!0)))
                    ? ((t = l),
                      (n = d),
                      (r = e.getNode(!1 === f)),
                      ab(Nt.fromDom(t), Nt.fromDom(n.getNode()))
                          .map(function (e) {
                              return Wr(e) ? Cy.remove(e.dom) : Cy.moveToElement(r);
                          })
                          .orThunk(function () {
                              return ve.some(Cy.moveToElement(r));
                          }))
                    : (f && tp(d)) || (!1 === f && ep(d))
                    ? ve.some(Cy.moveToPosition(e))
                    : ve.none()
            );
            var t, n, r, o, i, a, u, s;
            function c(e) {
                return Or(Nt.fromDom(e)) && !Ys(a, u, o);
            }
        });
    }
    function Db(e, t) {
        return ve.from(pf(e.getBody(), t));
    }
    function Tb(m, g) {
        var e = m.selection.getNode();
        return Db(m, e)
            .filter(Yn)
            .fold(function () {
                return (
                    (s = m.getBody()),
                    (l = Zs((c = g) ? 1 : -1, s, m.selection.getRng())),
                    (f = as.fromRangeStart(l)),
                    (d = Nt.fromDom(s)),
                    (!1 === c && tp(f)
                        ? ve.some(Cy.remove(f.getNode(!0)))
                        : c && ep(f)
                        ? ve.some(Cy.remove(f.getNode()))
                        : !1 === c && ep(f) && Em(d, f)
                        ? ap(d, f).map(function (e) {
                              return Cy.remove(e.getNode());
                          })
                        : c && tp(f) && Sm(d, f)
                        ? up(d, f).map(function (e) {
                              return Cy.remove(e.getNode());
                          })
                        : ((r = s),
                          (e = c),
                          (a = (o = f).getNode(!1 === (i = e))),
                          (u = i ? "after" : "before"),
                          zn(a) && a.getAttribute("data-mce-caret") === u
                              ? ((n = o.getNode(!1 === (t = e))),
                                (t && Yn(n.nextSibling) ? ve.some(Cy.moveToElement(n.nextSibling)) : !1 === t && Yn(n.previousSibling) ? ve.some(Cy.moveToElement(n.previousSibling)) : ve.none()).fold(function () {
                                    return Rb(r, e, o);
                                }, ve.some))
                              : Rb(r, e, o).bind(function (e) {
                                    return (
                                        (t = r),
                                        (n = o),
                                        e.fold(
                                            function (e) {
                                                return ve.some(Cy.remove(e));
                                            },
                                            function (e) {
                                                return ve.some(Cy.moveToElement(e));
                                            },
                                            function (e) {
                                                return Ys(n, e, t) ? ve.none() : ve.some(Cy.moveToPosition(e));
                                            }
                                        )
                                    );
                                    var t, n;
                                }))
                    ).exists(function (e) {
                        return e.fold(
                            function (e) {
                                return o._selectionOverrides.hideFakeCaret(), Ym(o, i, Nt.fromDom(e)), !0;
                            },
                            ((r = i = g),
                            function (e) {
                                var t = r ? as.before(e) : as.after(e);
                                return n.selection.setRng(t.toRange()), !0;
                            }),
                            ((t = n = o = m),
                            function (e) {
                                return t.selection.setRng(e.toRange()), !0;
                            })
                        );
                        var t, n, r, o, i;
                    })
                );
                var r, e, o, t, n, i, a, u, s, c, l, f, d;
            }, w);
    }
    function Ob(e, t) {
        var n = e.selection.getNode();
        return (
            !(!Yn(n) || Gn(n)) &&
            Db(e, n.parentNode)
                .filter(Yn)
                .fold(function () {
                    return Y(hu(Nt.fromDom(e.getBody()), ".mce-offscreen-selection"), Ln), Ym(e, t, Nt.fromDom(e.selection.getNode())), ub(e), !0;
                }, w)
        );
    }
    function Bb(e) {
        var t,
            n = e.dom,
            r = e.selection,
            o = pf(e.getBody(), r.getNode());
        return Xn(o) && n.isBlock(o) && n.isEmpty(o) && ((t = n.create("br", { "data-mce-bogus": "1" })), n.setHTML(o, ""), o.appendChild(t), r.setRng(as.before(t).toRange())), !0;
    }
    function Pb(e, t) {
        return (e.selection.isCollapsed() ? Tb : Ob)(e, t);
    }
    function Lb(e, t) {
        return (
            !!e.selection.isCollapsed() &&
            ((n = e),
            (r = t),
            (o = as.fromRangeStart(n.selection.getRng())),
            Gl(r, n.getBody(), o)
                .filter(function (e) {
                    return (r ? Xg : Yg)(e);
                })
                .bind(function (e) {
                    return ve.from(Gs(r ? 0 : -1, e));
                })
                .exists(function (e) {
                    return n.selection.select(e), !0;
                }))
        );
        var n, r, o;
    }
    function Ib(e) {
        return xy(e) && e.data[0] === Co;
    }
    function Mb(e) {
        return xy(e) && e.data[e.data.length - 1] === Co;
    }
    function Fb(e) {
        return e.ownerDocument.createTextNode(Co);
    }
    function Ub(e, t) {
        return (e
            ? function (e) {
                  if (xy(e.previousSibling)) return Mb(e.previousSibling) || e.previousSibling.appendData(Co), e.previousSibling;
                  if (xy(e)) return Ib(e) || e.insertData(0, Co), e;
                  var t = Fb(e);
                  return e.parentNode.insertBefore(t, e), t;
              }
            : function (e) {
                  if (xy(e.nextSibling)) return Ib(e.nextSibling) || e.nextSibling.insertData(0, Co), e.nextSibling;
                  if (xy(e)) return Mb(e) || e.appendData(Co), e;
                  var t = Fb(e);
                  return e.nextSibling ? e.parentNode.insertBefore(t, e.nextSibling) : e.parentNode.appendChild(t), t;
              })(t);
    }
    function zb(e, t) {
        return jn(e.container()) ? Ub(t, e.container()) : Ub(t, e.getNode());
    }
    function Hb(e, t) {
        var n = t.get();
        return n && e.container() === n && Lr(n);
    }
    function jb(n, e) {
        return e.fold(
            function (e) {
                vc(n.get());
                var t = wy(e);
                return n.set(t), ve.some(as(t, t.length - 1));
            },
            function (e) {
                return ef(e).map(function (e) {
                    if (Hb(e, n)) return as(n.get(), 1);
                    vc(n.get());
                    var t = zb(e, !0);
                    return n.set(t), as(t, 1);
                });
            },
            function (e) {
                return tf(e).map(function (e) {
                    if (Hb(e, n)) return as(n.get(), n.get().length - 1);
                    vc(n.get());
                    var t = zb(e, !1);
                    return n.set(t), as(t, t.length - 1);
                });
            },
            function (e) {
                vc(n.get());
                var t = Sy(e);
                return n.set(t), ve.some(as(t, 1));
            }
        );
    }
    function Vb(e, t) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n].apply(null, t);
            if (r.isSome()) return r;
        }
        return ve.none();
    }
    function qb(e, t) {
        return Xs(t, e) || e;
    }
    function $b(e, t, n) {
        var r = hy(n),
            o = qb(t, r.container());
        return rb(e, o, r).fold(function () {
            return Ql(o, r)
                .bind(A(rb, e, o))
                .map(function (e) {
                    return Ey.before(e);
                });
        }, ve.none);
    }
    function Wb(e, t) {
        return null === Hc(e, t);
    }
    function Kb(e, t, n) {
        return rb(e, t, n).filter(A(Wb, t));
    }
    function Xb(e, t, n) {
        var r = vy(n);
        return Kb(e, t, r).bind(function (e) {
            return Zl(e, r).isNone() ? ve.some(Ey.start(e)) : ve.none();
        });
    }
    function Yb(e, t, n) {
        var r = hy(n);
        return Kb(e, t, r).bind(function (e) {
            return Ql(e, r).isNone() ? ve.some(Ey.end(e)) : ve.none();
        });
    }
    function Gb(e, t, n) {
        var r = vy(n),
            o = qb(t, r.container());
        return rb(e, o, r).fold(function () {
            return Zl(o, r)
                .bind(A(rb, e, o))
                .map(function (e) {
                    return Ey.after(e);
                });
        }, ve.none);
    }
    function Jb(e) {
        return !1 === ((t = Ny(e)), "rtl" === Ja.DOM.getStyle(t, "direction", !0) || ((n = t.textContent), py.test(n)));
        var t, n;
    }
    function Qb(e, t, n) {
        return Vb([$b, Xb, Yb, Gb], [e, t, n]).filter(Jb);
    }
    function Zb(e) {
        return e.fold(J("before"), J("start"), J("end"), J("after"));
    }
    function ey(e) {
        return e.fold(Ey.before, Ey.before, Ey.after, Ey.after);
    }
    function ty(e) {
        return e.fold(Ey.start, Ey.start, Ey.end, Ey.end);
    }
    function ny(a, e, u, t, n, s) {
        return dn(rb(e, u, t), rb(e, u, n), function (e, t) {
            return e !== t && ((r = t), (o = Xs(e, (n = u))), (i = Xs(r, n)), o && o === i) ? Ey.after(a ? e : t) : s;
            var n, r, o, i;
        }).getOr(s);
    }
    function ry(e, r) {
        return e.fold(w, function (e) {
            return (n = r), !(Zb((t = e)) === Zb(n) && Ny(t) === Ny(n));
            var t, n;
        });
    }
    function oy(e, t) {
        return e ? t.fold(i(ve.some, Ey.start), ve.none, i(ve.some, Ey.after), ve.none) : t.fold(ve.none, i(ve.some, Ey.before), ve.none, i(ve.some, Ey.end));
    }
    function iy(e, a, u, s) {
        var t = ob(e, s),
            c = Qb(a, u, t);
        return Qb(a, u, t)
            .bind(A(oy, e))
            .orThunk(function () {
                return (
                    (n = a),
                    (r = u),
                    (o = c),
                    (i = ob((t = e), s)),
                    Gl(t, r, i)
                        .map(A(ob, t))
                        .fold(
                            function () {
                                return o.map(ey);
                            },
                            function (e) {
                                return Qb(n, r, e).map(A(ny, t, n, r, i, e)).filter(A(ry, o));
                            }
                        )
                        .filter(Jb)
                );
                var t, n, r, o, i;
            });
    }
    function ay(e) {
        for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
        var r = window.console;
        r && (r.error || r.log).apply(r, Ae([e], t, !1));
    }
    var uy,
        sy,
        cy = function (t, e) {
            var n = t.editorManager.baseURL + "/skins/content",
                r = "content" + t.editorManager.suffix + ".css",
                o = !0 === t.inline;
            return T(e, function (e) {
                return /^[a-z0-9\-]+$/i.test(e) && !o ? n + "/" + e + "/" + r : t.documentBaseURI.toAbsolute(e);
            });
        },
        ly = 0,
        fy = Et.each,
        dy = Ja.DOM,
        my = [9, 27, Bf.HOME, Bf.END, 19, 20, 44, 144, 145, 33, 34, 45, 16, 17, 18, 91, 92, 93, Bf.DOWN, Bf.UP, Bf.LEFT, Bf.RIGHT].concat(xt.browser.isFirefox() ? [224] : []),
        gy = "data-mce-placeholder",
        py = /[\u0591-\u07FF\uFB1D-\uFDFF\uFE70-\uFEFC]/,
        hy = A(ob, !0),
        vy = A(ob, !1),
        by = Xn,
        yy = Yn,
        Cy = or([{ remove: ["element"] }, { moveToElement: ["element"] }, { moveToPosition: ["position"] }]),
        xy = jn,
        wy = A(Ub, !0),
        Sy = A(Ub, !1),
        Ey = or([{ before: ["element"] }, { start: ["element"] }, { end: ["element"] }, { after: ["element"] }]),
        Ny = function (e) {
            return e.fold(u, u, u, u);
        };
    function ky(e, t, n) {
        var r = e ? 1 : -1;
        return t.setRng(as(n.container(), n.offset() + r).toRange()), t.getSel().modify("move", e ? "forward" : "backward", "word"), !0;
    }
    function _y(e, t) {
        return e === ic.Backwards ? q(t) : t;
    }
    function Ay(e, t, n, r) {
        for (var o, i, a, u, s = Pc(n), c = r, l = []; c; ) {
            var f = ((a = s), (u = c), t === ic.Forwards ? a.next(u) : a.prev(u));
            if (!f) break;
            if (Wn(f.getNode(!1))) return t === ic.Forwards ? { positions: _y(t, l).concat([f]), breakType: uy.Br, breakAt: ve.some(f) } : { positions: _y(t, l), breakType: uy.Br, breakAt: ve.some(f) };
            if (f.isVisible()) {
                if (e(c, f)) {
                    var d = ((o = c), Wn((i = f).getNode(t === ic.Forwards)) ? uy.Br : !1 === Ys(o, i) ? uy.Block : uy.Wrap);
                    return { positions: _y(t, l), breakType: d, breakAt: ve.some(f) };
                }
                l.push(f), (c = f);
            } else c = f;
        }
        return { positions: _y(t, l), breakType: uy.Eol, breakAt: ve.none() };
    }
    function Ry(n, r, o, e) {
        return r(o, e)
            .breakAt.map(function (e) {
                var t = r(o, e).positions;
                return n === ic.Backwards ? t.concat(e) : [e].concat(t);
            })
            .getOr([]);
    }
    function Dy(e, i) {
        return L(
            e,
            function (e, o) {
                return e.fold(
                    function () {
                        return ve.some(o);
                    },
                    function (r) {
                        return dn(Q(r.getClientRects()), Q(o.getClientRects()), function (e, t) {
                            var n = Math.abs(i - e.left);
                            return Math.abs(i - t.left) <= n ? o : r;
                        }).or(e);
                    }
                );
            },
            ve.none()
        );
    }
    function Ty(t, e) {
        return Q(e.getClientRects()).bind(function (e) {
            return Dy(t, e.left);
        });
    }
    function Oy(n) {
        function e(e) {
            return T(e, function (e) {
                var t = ku(e);
                return (t.node = n), t;
            });
        }
        if (zn(n)) return e(n.getClientRects());
        if (jn(n)) {
            var t = n.ownerDocument.createRange();
            return t.setStart(n, 0), t.setEnd(n, n.data.length), e(t.getClientRects());
        }
    }
    function By(e) {
        return H(e, Oy);
    }
    A(iy, !1), A(iy, !0), ((sy = uy = {})[(sy.Br = 0)] = "Br"), (sy[(sy.Block = 1)] = "Block"), (sy[(sy.Wrap = 2)] = "Wrap"), (sy[(sy.Eol = 3)] = "Eol");
    var Py,
        Ly,
        Iy = A(Ay, as.isAbove, -1),
        My = A(Ay, as.isBelow, 1),
        Fy = A(Ry, -1, Iy),
        Uy = A(Ry, 1, My);
    function zy(o, i, a, e, u, t) {
        function n(e) {
            var t = By([e]);
            -1 === o && (t = t.reverse());
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                if (!a(r, l)) {
                    if ((0 < c.length && i(r, pe(c)) && s++, (r.line = s), u(r))) return !0;
                    c.push(r);
                }
            }
        }
        var s = 0,
            c = [],
            l = pe(t.getClientRects());
        if (!l) return c;
        var r = t.getNode();
        return (
            n(r),
            (function (e, t, n, r) {
                for (; (r = Ks(r, e, Vr, t)); ) if (n(r)) return;
            })(o, e, n, r),
            c
        );
    }
    function Hy(t) {
        return function (e) {
            return e.line > t;
        };
    }
    function jy(t) {
        return function (e) {
            return e.line === t;
        };
    }
    function Vy(e, t) {
        return Math.abs(e.left - t);
    }
    function qy(e, t) {
        return Math.abs(e.right - t);
    }
    function $y(e, t) {
        return e >= t.left && e <= t.right;
    }
    function Wy(e, t) {
        return e >= t.top && e <= t.bottom;
    }
    function Ky(e, o, i) {
        return (
            void 0 === i && (i = w),
            me(e, function (e, t) {
                if ($y(o, t)) return i(t) ? t : e;
                if ($y(o, e)) return i(e) ? e : t;
                var n = Math.min(Vy(e, o), qy(e, o)),
                    r = Math.min(Vy(t, o), qy(t, o));
                return (r === n && se(t, "node") && MC(t.node)) || r < n ? t : e;
            })
        );
    }
    function Xy(e, t, n, r, o) {
        var i = FC(r, e, Vr, t, !o);
        do {
            if (!i || n(i)) return;
        } while ((i = FC(i, e, Vr, t)));
    }
    function Yy(e, t, n) {
        function r(e) {
            return !cn(e.node) && !Jn(e.node);
        }
        var o,
            i,
            a,
            u = By(U(xe(e.getElementsByTagName("*")), $s)),
            s = U(u, A(Wy, n));
        if (
            (a = Ky(s, t, r)) &&
            (a = Ky(
                (function (e, r, t) {
                    function n(t, e) {
                        var n = U(By([e]), function (e) {
                            return !t(e, r);
                        });
                        return (o = o.concat(n)), 0 === n.length;
                    }
                    void 0 === t && (t = !0);
                    var o = [];
                    return o.push(r), Xy(Py.Up, e, A(n, Ru), r.node, t), Xy(Py.Down, e, A(n, Du), r.node, t), o;
                })(e, a, r(a)),
                t,
                r
            )) &&
            $s(a.node)
        )
            return { node: (o = a).node, before: Vy(o, (i = t)) < qy(o, i) };
        return null;
    }
    function Gy(e, t) {
        e.selection.setRng(t), Zf(e, e.selection.getRng());
    }
    function Jy(e, t, n) {
        return ve.some(Eb(e, t, n));
    }
    function Qy(e, t, n, r, o, i) {
        var a = t === ic.Forwards,
            u = Pc(e.getBody()),
            s = A(rc, a ? u.next : u.prev),
            c = a ? r : o;
        if (!n.collapsed) {
            var l = Ou(n);
            if (i(l)) return xb(t, e, l, t === ic.Backwards, !1);
        }
        var f = tc(t, e.getBody(), n);
        if (c(f)) return wb(e, f.getNode(!a));
        var d = ob(a, s(f)),
            m = Hr(n);
        if (!d) return m ? ve.some(n) : ve.none();
        if (c(d)) return xb(t, e, d.getNode(!a), a, !1);
        var g = s(d);
        return g && c(g) && oc(d, g) ? xb(t, e, g.getNode(!a), a, !1) : m ? Jy(e, d.toRange(), !1) : ve.none();
    }
    function Zy(t, e, n, r, o, i) {
        var a = tc(e, t.getBody(), n),
            u = pe(a.getClientRects()),
            s = e === Py.Down;
        if (!u) return ve.none();
        var c,
            l = U((s ? IC : LC)(t.getBody(), Hy(1), a), jy(1)),
            f = u.left,
            d = Ky(l, f);
        if (d && i(d.node)) {
            var m = Math.abs(f - d.left),
                g = Math.abs(f - d.right);
            return xb(e, t, d.node, m < g, !1);
        }
        if ((c = r(a) ? a.getNode() : o(a) ? a.getNode(!0) : Ou(n))) {
            var p = (function (e, t, n, r) {
                    function o(e) {
                        return pe(e.getClientRects());
                    }
                    var i,
                        a,
                        u,
                        s = Pc(t),
                        c = [],
                        l = 0,
                        f = 1 === e ? ((i = s.next), (a = Du), (u = Ru), as.after(r)) : ((i = s.prev), (a = Ru), (u = Du), as.before(r)),
                        d = o(f);
                    do {
                        if (f.isVisible()) {
                            var m = o(f);
                            if (!u(m, d)) {
                                0 < c.length && a(m, pe(c)) && l++;
                                var g = ku(m);
                                if (((g.position = f), (g.line = l), n(g))) return c;
                                c.push(g);
                            }
                        }
                    } while ((f = i(f)));
                    return c;
                })(e, t.getBody(), Hy(1), c),
                h = Ky(U(p, jy(1)), f);
            if (h) return Jy(t, h.position.toRange(), !1);
            if ((h = pe(U(p, jy(0))))) return Jy(t, h.position.toRange(), !1);
        }
        return 0 === l.length
            ? UC(t, s)
                  .filter(s ? o : r)
                  .map(function (e) {
                      return Eb(t, e.toRange(), !1);
                  })
            : ve.none();
    }
    function e0(t, e, n) {
        return UC(t, e)
            .filter(n)
            .exists(function (e) {
                return t.selection.setRng(e.toRange()), !0;
            });
    }
    function t0(e, t) {
        var n = e.dom.createRng();
        n.setStart(t.container(), t.offset()), n.setEnd(t.container(), t.offset()), e.selection.setRng(n);
    }
    function n0(e, t) {
        e ? t.setAttribute("data-mce-selected", "inline-boundary") : t.removeAttribute("data-mce-selected");
    }
    function r0(t, e, n) {
        return jb(e, n).map(function (e) {
            return t0(t, e), n;
        });
    }
    function o0(e, t, n) {
        return (
            !!Ps(e) &&
            ((o = t),
            (i = n),
            (a = (r = e).getBody()),
            (u = as.fromRangeStart(r.selection.getRng())),
            iy(i, A(nb, r), a, u)
                .bind(function (e) {
                    return r0(r, o, e);
                })
                .isSome())
        );
        var r, o, i, a, u;
    }
    function i0(e, t, n) {
        return (
            !!Ps(t) && ((r = e), (i = (o = t).selection.getRng()), (a = r ? as.fromRangeEnd(i) : as.fromRangeStart(i)), !!y(o.selection.getSel().modify) && (r && Fr(a) ? ky(!0, o.selection, a) : !(r || !Ur(a)) && ky(!1, o.selection, a)))
        );
        var r, o, i, a;
    }
    function a0(g) {
        var p = ru(null),
            h = A(nb, g);
        return (
            g.on("NodeChange", function (e) {
                var n, r, o, t, i, a, u, s, c, l, f, d, m;
                !Ps(g) ||
                    (xt.browser.isIE() && e.initial) ||
                    ((i = h),
                    (a = g.dom),
                    (u = e.parents),
                    Y(
                        $(
                            (s = U(
                                T(hu(Nt.fromDom(a.getRoot()), '*[data-mce-selected="inline-boundary"]'), function (e) {
                                    return e.dom;
                                }),
                                i
                            )),
                            (c = U(u, i))
                        ),
                        A(n0, !1)
                    ),
                    Y($(c, s), A(n0, !0)),
                    (f = p),
                    (l = g).selection.isCollapsed() && !0 !== l.composing && f.get() && ((d = as.fromRangeStart(l.selection.getRng())), as.isTextPosition(d) && !1 === (Fr((m = d)) || Ur(m)) && (t0(l, Hs(f.get(), d)), f.set(null))),
                    (n = h),
                    (r = g),
                    (o = p),
                    (t = e.parents),
                    r.selection.isCollapsed() &&
                        Y(U(t, n), function (e) {
                            var t = as.fromRangeStart(r.selection.getRng());
                            Qb(n, r.getBody(), t).bind(function (e) {
                                return r0(r, o, e);
                            });
                        }));
            }),
            p
        );
    }
    function u0(n, t, r) {
        if (Ps(n)) {
            var e = UC(n, t).getOrThunk(function () {
                var e = n.selection.getRng();
                return t ? as.fromRangeEnd(e) : as.fromRangeStart(e);
            });
            return Qb(A(nb, n), n.getBody(), e).exists(function (e) {
                var t = ey(e);
                return jb(r, t).exists(function (e) {
                    return t0(n, e), !0;
                });
            });
        }
        return !1;
    }
    function s0(t, n) {
        return function (e) {
            return jb(n, e).exists(function (e) {
                return t0(t, e), !0;
            });
        };
    }
    function c0(r, o, i, a) {
        var u = r.getBody(),
            s = A(nb, r);
        r.undoManager.ignore(function () {
            var e, t, n;
            r.selection.setRng(((e = i), (t = a), (n = document.createRange()).setStart(e.container(), e.offset()), n.setEnd(t.container(), t.offset()), n)),
                r.execCommand("Delete"),
                Qb(s, u, as.fromRangeStart(r.selection.getRng())).map(ty).map(s0(r, o));
        }),
            r.nodeChanged();
    }
    function l0(e, t, n) {
        if (e.selection.isCollapsed() && Ps(e)) {
            var r = as.fromRangeStart(e.selection.getRng());
            return (
                (o = t),
                (a = n),
                (u = r),
                (s = (i = e).getBody()),
                (c = Xs(u.container(), s) || s),
                (l = A(nb, i)),
                (f = Qb(l, c, u))
                    .bind(function (e) {
                        return a ? e.fold(J(ve.some(ty(e))), ve.none, J(ve.some(ey(e))), ve.none) : e.fold(ve.none, J(ve.some(ey(e))), ve.none, J(ve.some(ty(e))));
                    })
                    .map(s0(i, o))
                    .getOrThunk(function () {
                        var t = Fc(a, c, u),
                            e = t.bind(function (e) {
                                return Qb(l, c, e);
                            });
                        return dn(f, e, function () {
                            return rb(l, c, u).exists(function (e) {
                                return (
                                    !!dn(ef((o = e)), tf(o), function (e, t) {
                                        var n = ob(!0, e),
                                            r = ob(!1, t);
                                        return Ql(o, n).forall(function (e) {
                                            return e.isEqual(r);
                                        });
                                    }).getOr(!0) && (Ym(i, a, Nt.fromDom(e)), !0)
                                );
                                var o;
                            });
                        })
                            .orThunk(function () {
                                return e.bind(function (e) {
                                    return t.map(function (e) {
                                        return a ? c0(i, o, u, e) : c0(i, o, e, u), !0;
                                    });
                                });
                            })
                            .getOr(!1);
                    })
            );
        }
        var i, o, a, u, s, c, l, f;
        return !1;
    }
    function f0(e) {
        return 1 === zt(e);
    }
    function d0(g, p) {
        var t,
            e = Nt.fromDom(g.getBody()),
            n = Nt.fromDom(g.selection.getStart()),
            h = U(
                z((t = hm(n, e)), lo).fold(J(t), function (e) {
                    return t.slice(0, e);
                }),
                f0
            );
        return Z(h).exists(function (e) {
            var t,
                n,
                r,
                o,
                i,
                a,
                u,
                s,
                c,
                l = as.fromRangeStart(g.selection.getRng()),
                f = p,
                d = l,
                m = e.dom;
            return !(
                !dn(ef(m), tf(m), function (e, t) {
                    var n = ob(!0, e),
                        r = ob(!1, t),
                        o = ob(!1, d);
                    return f
                        ? Ql(m, o).exists(function (e) {
                              return e.isEqual(r) && d.isEqual(n);
                          })
                        : Zl(m, o).exists(function (e) {
                              return e.isEqual(n) && d.isEqual(r);
                          });
                }).getOr(!0) ||
                (zc((t = e).dom) && Pg(t.dom)) ||
                ((n = p),
                (o = e),
                0 ===
                (c = T(U(h, A(Vg, (r = g))), function (e) {
                    return e.dom;
                })).length
                    ? Ym(r, n, o)
                    : ((a = o.dom), (s = zg(c, (u = Ig(!1)).dom)), qt(Nt.fromDom(a), u), Ln(Nt.fromDom(a)), (i = as(s, 0)), r.selection.setRng(i.toRange())),
                0)
            );
        });
    }
    function m0(e, t) {
        return !!e.selection.isCollapsed() && d0(e, t);
    }
    function g0(e, t, n) {
        return e._selectionOverrides.hideFakeCaret(), Ym(e, t, Nt.fromDom(n)), !0;
    }
    function p0(e, t) {
        return e.selection.isCollapsed()
            ? ((i = e),
              (u = (a = t) ? Gg : Jg),
              (s = a ? ic.Forwards : ic.Backwards),
              (c = tc(s, i.getBody(), i.selection.getRng())),
              u(c)
                  ? g0(i, a, c.getNode(!a))
                  : ve
                        .from(ob(a, c))
                        .filter(function (e) {
                            return u(e) && oc(c, e);
                        })
                        .exists(function (e) {
                            return g0(i, a, e.getNode(!a));
                        }))
            : ((r = t), (o = (n = e).selection.getNode()), !!Jn(o) && g0(n, r, o));
        var n, r, o, i, a, u, s, c;
    }
    function h0(e) {
        var t = parseInt(e, 10);
        return isNaN(t) ? 0 : t;
    }
    function v0(e, t) {
        return (e || "table" === kt(t) ? "margin" : "padding") + ("rtl" === xn(t, "direction") ? "-right" : "-left");
    }
    function b0(e) {
        var n,
            t = jC(e);
        return (
            !e.mode.isReadOnly() &&
            (1 < t.length ||
                ((n = e),
                j(t, function (e) {
                    var t = wn(e, v0(Rs(n), e))
                        .map(h0)
                        .getOr(0);
                    return "false" !== n.dom.getContentEditable(e.dom) && 0 < t;
                })))
        );
    }
    function y0(e) {
        return mo(e) || go(e);
    }
    function C0(e, s) {
        var c = e.dom,
            t = e.selection,
            n = e.formatter,
            r = e.getParam("indentation", "40px", "string"),
            l = /[a-z%]+$/i.exec(r)[0],
            f = parseInt(r, 10),
            d = Rs(e),
            o = Ss(e);
        e.queryCommandState("InsertUnorderedList") || e.queryCommandState("InsertOrderedList") || "" !== o || c.getParent(t.getNode(), c.isBlock) || n.apply("div"),
            Y(jC(e), function (e) {
                var t,
                    n = c,
                    r = s,
                    o = f,
                    i = l,
                    a = e.dom,
                    u = v0(d, Nt.fromDom(a));
                "outdent" === r ? ((t = Math.max(0, h0(a.style[u]) - o)), n.setStyle(a, u, t ? t + i : "")) : ((t = h0(a.style[u]) + o + i), n.setStyle(a, u, t));
            });
    }
    function x0(e, t) {
        if (e.selection.isCollapsed() && b0(e)) {
            var n = e.dom,
                r = e.selection.getRng(),
                o = as.fromRangeStart(r),
                i = n.getParent(r.startContainer, n.isBlock);
            if (null !== i && np(Nt.fromDom(i), o)) return C0(e, "outdent"), !0;
        }
        return !1;
    }
    function w0(e, t) {
        e.getDoc().execCommand(t, !1, null);
    }
    function S0(e) {
        return void 0 === e.touches || 1 !== e.touches.length ? ve.none() : ve.some(e.touches[0]);
    }
    function E0(e, t) {
        return Ne(e, t.nodeName);
    }
    function N0(e) {
        var t,
            n,
            r,
            o = e.dom,
            i = e.selection,
            a = e.schema,
            u = a.getBlockElements(),
            s = i.getStart(),
            c = e.getBody(),
            l = Ss(e);
        if (s && zn(s) && l) {
            var f = c.nodeName.toLowerCase();
            if (
                a.isValidChild(f, l.toLowerCase()) &&
                ((d = u),
                (m = c),
                (g = s),
                !F(pm(Nt.fromDom(g), Nt.fromDom(m)), function (e) {
                    return E0(d, e.dom);
                }))
            ) {
                for (var d, m, g, p, h, v = i.getRng(), b = v.startContainer, y = v.startOffset, C = v.endContainer, x = v.endOffset, w = vd(e), s = c.firstChild; s; )
                    (p = u),
                        jn((h = s)) || (zn(h) && !E0(p, h) && !Yc(h))
                            ? (function (e, t) {
                                  if (jn(t)) {
                                      if (0 === t.nodeValue.length) return 1;
                                      if (/^\s+$/.test(t.nodeValue) && (!t.nextSibling || E0(e, t.nextSibling))) return 1;
                                  }
                              })(u, s)
                                ? ((s = (n = s).nextSibling), o.remove(n))
                                : (t || ((t = o.create(l, Es(e))), s.parentNode.insertBefore(t, s), (r = !0)), (s = (n = s).nextSibling), t.appendChild(n))
                            : ((t = null), (s = s.nextSibling));
                r && w && (v.setStart(b, y), v.setEnd(C, x), i.setRng(v), e.nodeChanged());
            }
        }
    }
    function k0(e, t) {
        t.hasAttribute("data-mce-caret") && (zr(t), e.selection.setRng(e.selection.getRng()), e.selection.scrollIntoView(t));
    }
    function _0(e, t) {
        var n = vr(Nt.fromDom(e.getBody()), "*[data-mce-caret]")
            .map(function (e) {
                return e.dom;
            })
            .getOrNull();
        if (n) return "compositionstart" === t.type ? (t.preventDefault(), t.stopPropagation(), void k0(e, n)) : void (Mr(n) && (k0(e, n), e.undoManager.add()));
    }
    function A0(e, t, n) {
        var r,
            o,
            i,
            a = Pc(e.getBody()),
            u = A(rc, 1 === t ? a.next : a.prev);
        !n.collapsed ||
            "" === Ss(e) ||
            ((r = e.dom.getParent(n.startContainer, "PRE")) &&
                (u(as.fromRangeStart(n)) ||
                    ((i = e.dom.create(Ss(e))), (!xt.ie || 11 <= xt.ie) && (i.innerHTML = '<br data-mce-bogus="1">'), (o = i), 1 === t ? e.$(r).after(o) : e.$(r).before(o), e.selection.select(o, !0), e.selection.collapse())));
    }
    function R0(t, e) {
        return (
            (n = t),
            (r = e ? ic.Forwards : ic.Backwards),
            (o = n.selection.getRng()),
            Qy(n, r, o, ep, tp, VC)
                .orThunk(function () {
                    return A0(n, r, o), ve.none();
                })
                .exists(function (e) {
                    return Gy(t, e), !0;
                })
        );
        var n, r, o;
    }
    function D0(t, e) {
        return (
            (r = e ? 1 : -1),
            (o = (n = t).selection.getRng()),
            Zy(
                n,
                r,
                o,
                function (e) {
                    return ep(e) || Qg(e);
                },
                function (e) {
                    return tp(e) || Zg(e);
                },
                VC
            )
                .orThunk(function () {
                    return A0(n, r, o), ve.none();
                })
                .exists(function (e) {
                    return Gy(t, e), !0;
                })
        );
        var n, r, o;
    }
    function T0(e, t) {
        return e0(e, t, t ? tp : ep);
    }
    function O0(e) {
        return D(["figcaption"], kt(e));
    }
    function B0(e) {
        var t = document.createRange();
        return t.setStartBefore(e.dom), t.setEndBefore(e.dom), t;
    }
    function P0(e, t, n) {
        (n ? Pn : Wt)(e, t);
    }
    function L0(h, v) {
        var b = Nt.fromDom(h.getBody()),
            y = as.fromRangeStart(h.selection.getRng()),
            C = Ss(h),
            x = Es(h),
            e = y,
            t = A(je, b);
        return pr(Nt.fromDom(e.container()), lo, t)
            .filter(O0)
            .exists(function () {
                if (((d = b), (m = y), v ? ((p = d.dom), My(p, m).breakAt.isNone()) : ((g = d.dom), Iy(g, m).breakAt.isNone()))) {
                    var e = ((t = b), (r = x), (o = v), "" === (n = C) ? ((l = o), P0(t, (f = Nt.fromTag("br")), l), B0(f)) : ((i = t), (a = o), (u = r), (s = Nt.fromTag(n)), (c = Nt.fromTag("br")), hn(s, u), Pn(s, c), P0(i, s, a), B0(c)));
                    return h.selection.setRng(e), !0;
                }
                var t, n, r, o, i, a, u, s, c, l, f, d, m, g, p;
                return !1;
            });
    }
    function I0(e, t) {
        return !!e.selection.isCollapsed() && L0(e, t);
    }
    function M0(e) {
        for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
        return function () {
            return e.apply(null, t);
        };
    }
    function F0(e, t) {
        return M(
            ((n = t),
            H(
                T(e, function (e) {
                    return _e({ shiftKey: !1, altKey: !1, ctrlKey: !1, metaKey: !1, keyCode: 0, action: te }, e);
                }),
                function (e) {
                    return n.keyCode === e.keyCode && n.shiftKey === e.shiftKey && n.altKey === e.altKey && n.ctrlKey === e.ctrlKey && n.metaKey === e.metaKey ? [e] : [];
                }
            )),
            function (e) {
                return e.action();
            }
        );
        var n;
    }
    function U0(t, e) {
        var n = e ? ic.Forwards : ic.Backwards,
            r = t.selection.getRng();
        return Qy(t, n, r, Gg, Jg, Jn).exists(function (e) {
            return Gy(t, e), !0;
        });
    }
    function z0(t, e) {
        var n = e ? 1 : -1,
            r = t.selection.getRng();
        return Zy(t, n, r, Gg, Jg, Jn).exists(function (e) {
            return Gy(t, e), !0;
        });
    }
    function H0(e, t) {
        return e0(e, t, t ? Jg : Gg);
    }
    function j0(e, t, n, r, o) {
        var i,
            a = hu(Nt.fromDom(n), "td,th,caption").map(function (e) {
                return e.dom;
            }),
            u = U(
                ((i = e),
                H(a, function (e) {
                    var t,
                        n = { left: (t = ku(e.getBoundingClientRect())).left - -1, top: t.top - -1, right: t.right + -2, bottom: t.bottom + -2, width: t.width + -1, height: t.height + -1 };
                    return [
                        { x: n.left, y: i(n), cell: e },
                        { x: n.right, y: i(n), cell: e },
                    ];
                })),
                function (e) {
                    return t(e, o);
                }
            ),
            s = r,
            c = o;
        return L(
            u,
            function (e, r) {
                return e.fold(
                    function () {
                        return ve.some(r);
                    },
                    function (e) {
                        var t = Math.sqrt(Math.abs(e.x - s) + Math.abs(e.y - c)),
                            n = Math.sqrt(Math.abs(r.x - s) + Math.abs(r.y - c));
                        return ve.some(n < t ? r : e);
                    }
                );
            },
            ve.none()
        ).map(function (e) {
            return e.cell;
        });
    }
    function V0(e, t, n) {
        var r,
            o,
            i = e(t, n);
        return (i.breakType === uy.Wrap && 0 === i.positions.length) || (!Wn(n.getNode()) && i.breakType === uy.Br && 1 === i.positions.length)
            ? ((r = e),
              (o = t),
              !i.breakAt.exists(function (e) {
                  return r(o, e).breakAt.isSome();
              }))
            : i.breakAt.isNone();
    }
    function q0(t, e, n, r) {
        var o,
            i,
            a,
            u = t.selection.getRng(),
            s = e ? 1 : -1;
        return !(
            !qs() ||
            ((o = e),
            (i = n),
            (a = as.fromRangeStart(u)),
            !Uc(!o, i).exists(function (e) {
                return e.isEqual(a);
            })) ||
            (xb(s, t, n, !e, !1).each(function (e) {
                Gy(t, e);
            }),
            0)
        );
    }
    function $0(u, s, c) {
        var e,
            t,
            n = ((e = !!s), (t = c.getNode(e)), zn(t) && "TABLE" === t.nodeName ? ve.some(t) : ve.none()),
            r = !1 === s;
        n.fold(
            function () {
                return Gy(u, c.toRange());
            },
            function (a) {
                return Uc(r, u.getBody())
                    .filter(function (e) {
                        return e.isEqual(c);
                    })
                    .fold(
                        function () {
                            return Gy(u, c.toRange());
                        },
                        function (e) {
                            var n,
                                r,
                                o = s,
                                i = a,
                                t = c;
                            (r = Ss((n = u)))
                                ? n.undoManager.transact(function () {
                                      var e = Nt.fromTag(r);
                                      hn(e, Es(n)), Pn(e, Nt.fromTag("br")), (o ? $t : qt)(Nt.fromDom(i), e);
                                      var t = n.dom.createRng();
                                      t.setStart(e.dom, 0), t.setEnd(e.dom, 0), Gy(n, t);
                                  })
                                : Gy(n, t.toRange());
                        }
                    );
            }
        );
    }
    function W0(e, t, n, r) {
        var o,
            i,
            a,
            u,
            s,
            c,
            l,
            f,
            d,
            m,
            g = e.selection.getRng(),
            p = as.fromRangeStart(g),
            h = e.getBody();
        if (t || !WC(r, p))
            return (
                !(!t || !KC(r, p)) &&
                ((o = h),
                (d = i = n),
                $0(
                    e,
                    t,
                    (v = Z((m = a = p).getClientRects())
                        .bind(function (e) {
                            return $C(d, e.left, e.top);
                        })
                        .bind(function (e) {
                            return Ty(
                                ef((t = e))
                                    .map(function (e) {
                                        return [e].concat(My(t, e).positions);
                                    })
                                    .getOr([]),
                                m
                            );
                            var t;
                        })
                        .orThunk(function () {
                            return Q(a.getClientRects()).bind(function (e) {
                                return Dy(Uy(o, as.after(i)), e.left);
                            });
                        })
                        .getOr(as.after(i)))
                ),
                !0)
            );
        var v =
            ((u = h),
            (l = s = n),
            Q((f = c = p).getClientRects())
                .bind(function (e) {
                    return qC(l, e.left, e.top);
                })
                .bind(function (e) {
                    return Ty(
                        tf((t = e))
                            .map(function (e) {
                                return Iy(t, e).positions.concat(e);
                            })
                            .getOr([]),
                        f
                    );
                    var t;
                })
                .orThunk(function () {
                    return Q(c.getClientRects()).bind(function (e) {
                        return Dy(Fy(u, as.before(s)), e.left);
                    });
                })
                .getOr(as.before(s)));
        return $0(e, t, v), !0;
    }
    function K0(n, r, o) {
        return ve
            .from(n.dom.getParent(n.selection.getNode(), "td,th"))
            .bind(function (t) {
                return ve.from(n.dom.getParent(t, "table")).map(function (e) {
                    return o(n, r, e, t);
                });
            })
            .getOr(!1);
    }
    function X0(e, t) {
        return K0(e, t, q0);
    }
    function Y0(e, t) {
        return K0(e, t, W0);
    }
    function G0(e, t) {
        var n,
            r,
            o = t,
            i = e.dom,
            a = e.schema.getMoveCaretBeforeOnEnterElements();
        if (t) {
            !/^(LI|DT|DD)$/.test(t.nodeName) ||
                ((r = (function (e) {
                    for (; e; ) {
                        if (1 === e.nodeType || (3 === e.nodeType && e.data && /[\r\n\s]/.test(e.data))) return e;
                        e = e.nextSibling;
                    }
                })(t.firstChild)) &&
                    /^(UL|OL|DL)$/.test(r.nodeName) &&
                    t.insertBefore(i.doc.createTextNode(yo), t.firstChild));
            var u = i.createRng();
            if ((t.normalize(), t.hasChildNodes())) {
                for (var s = new Rr(t, t); (n = s.current()); ) {
                    if (jn(n)) {
                        u.setStart(n, 0), u.setEnd(n, 0);
                        break;
                    }
                    if (a[n.nodeName.toLowerCase()]) {
                        u.setStartBefore(n), u.setEndBefore(n);
                        break;
                    }
                    (o = n), (n = s.next());
                }
                n || (u.setStart(o, 0), u.setEnd(o, 0));
            } else Wn(t) ? (t.nextSibling && i.isBlock(t.nextSibling) ? (u.setStartBefore(t), u.setEndBefore(t)) : (u.setStartAfter(t), u.setEndAfter(t))) : (u.setStart(t, 0), u.setEnd(t, 0));
            e.selection.setRng(u), Zf(e, u);
        }
    }
    function J0(e) {
        return ve.from(e.dom.getParent(e.selection.getStart(!0), e.dom.isBlock));
    }
    function Q0(e, t) {
        return e && e.parentNode && e.parentNode.nodeName === t;
    }
    function Z0(e) {
        return e && /^(OL|UL|LI)$/.test(e.nodeName);
    }
    function eC(e) {
        var t = e.parentNode;
        return /^(LI|DT|DD)$/.test(t.nodeName) ? t : e;
    }
    function tC(e, t, n) {
        for (var r = e[n ? "firstChild" : "lastChild"]; r && !zn(r); ) r = r[n ? "nextSibling" : "previousSibling"];
        return r === t;
    }
    function nC(e) {
        e.innerHTML = '<br data-mce-bogus="1">';
    }
    function rC(e, t) {
        return e.nodeName === t || (e.previousSibling && e.previousSibling.nodeName === t);
    }
    function oC(e, t) {
        return t && e.isBlock(t) && !/^(TD|TH|CAPTION|FORM)$/.test(t.nodeName) && !/^(fixed|absolute)/i.test(t.style.position) && "true" !== e.getContentEditable(t);
    }
    function iC(e, t, n) {
        return !1 === jn(t) ? n : e ? (1 === n && t.data.charAt(n - 1) === Co ? 0 : n) : n === t.data.length - 1 && t.data.charAt(n) === Co ? t.data.length : n;
    }
    function aC(e, t) {
        for (var n, r = e.getRoot(), o = t; o !== r && "false" !== e.getContentEditable(o); ) "true" === e.getContentEditable(o) && (n = o), (o = o.parentNode);
        return o !== r ? n : r;
    }
    function uC(e, t) {
        var n = Ss(e);
        n &&
            n.toLowerCase() === t.tagName.toLowerCase() &&
            (function (e, o, t) {
                var i = e.dom;
                ve
                    .from(t.style)
                    .map(i.parseStyle)
                    .each(function (e) {
                        var t = Sn(Nt.fromDom(o)),
                            n = _e(_e({}, t), e);
                        i.setStyles(o, n);
                    }),
                    dn(
                        ve.from(t.class).map(function (e) {
                            return e.split(/\s+/);
                        }),
                        ve.from(o.className).map(function (e) {
                            return U(e.split(/\s+/), function (e) {
                                return "" !== e;
                            });
                        }),
                        function (t, e) {
                            var n = U(e, function (e) {
                                    return !D(t, e);
                                }),
                                r = Ae(Ae([], t, !0), n, !0);
                            i.setAttrib(o, "class", r.join(" "));
                        }
                    );
                var n = ["style", "class"],
                    r = ae(t, function (e, t) {
                        return !D(n, t);
                    });
                i.setAttribs(o, r);
            })(e, t, Es(e));
    }
    function sC(a, e) {
        function t(e) {
            var t,
                n = m,
                r = l.getTextInlineElements(),
                o = e || "TABLE" === C || "HR" === C ? c.create(e || p) : b.cloneNode(!1),
                i = o;
            if (!1 === a.getParam("keep_styles", !0)) c.setAttrib(o, "style", null), c.setAttrib(o, "class", null);
            else for (; r[n.nodeName] && (zc(n) || Yc(n) || ((t = n.cloneNode(!1)), c.setAttrib(t, "id", ""), o.hasChildNodes() ? t.appendChild(o.firstChild) : (i = t), o.appendChild(t))), (n = n.parentNode) && n !== F; );
            return uC(a, o), nC(i), o;
        }
        function n(e) {
            var t,
                n,
                r = iC(e, m, g);
            if (!jn(m) || !(e ? 0 < r : r < m.nodeValue.length)) {
                if (m.parentNode === b && s && !e) return 1;
                if (e && zn(m) && m === b.firstChild) return 1;
                if (rC(m, "TABLE") || rC(m, "HR")) return (s && !e) || (!s && e);
                var o = new Rr(m, b);
                for (jn(m) && (e && 0 === r ? o.prev() : e || r !== m.nodeValue.length || o.next()); (t = o.current()); ) {
                    if (zn(t)) {
                        if (!t.getAttribute("data-mce-bogus") && ((n = t.nodeName.toLowerCase()), f[n] && "br" !== n)) return;
                    } else if (jn(t) && !qr(t.nodeValue)) return;
                    e ? o.prev() : o.next();
                }
                return 1;
            }
        }
        function r() {
            (u = /^(H[1-6]|PRE|FIGURE)$/.test(C) && "HGROUP" !== x ? t(p) : t()), a.getParam("end_container_on_empty_block", !1) && oC(c, y) && c.isEmpty(b) ? (u = c.split(y, b)) : c.insertAfter(u, b), G0(a, u);
        }
        var o,
            u,
            i,
            s,
            c = a.dom,
            l = a.schema,
            f = l.getNonEmptyElements(),
            d = a.selection.getRng();
        Rf(c, d).each(function (e) {
            d.setStart(e.startContainer, e.startOffset), d.setEnd(e.endContainer, e.endOffset);
        });
        var m = d.startContainer,
            g = d.startOffset,
            p = Ss(a),
            h = !(!e || !e.shiftKey),
            v = !(!e || !e.ctrlKey);
        zn(m) && m.hasChildNodes() && ((s = g > m.childNodes.length - 1), (m = m.childNodes[Math.min(g, m.childNodes.length - 1)] || m), (g = s && jn(m) ? m.nodeValue.length : 0));
        var b,
            y,
            C,
            x,
            w,
            S,
            p,
            E,
            N,
            k,
            _,
            A,
            R,
            D,
            T,
            O,
            B,
            P,
            L,
            I,
            M,
            F = aC(c, m);
        F &&
            (((p && !h) || (!p && h)) &&
                (m = (function (e, t, n, r) {
                    var o,
                        i,
                        a,
                        u,
                        s,
                        c,
                        l = p || "P",
                        f = e.dom,
                        d = aC(f, n),
                        m = f.getParent(n, f.isBlock);
                    if (!m || !oC(f, m)) {
                        if (((s = ((m = m || d) === e.getBody() || ((c = m) && /^(TD|TH|CAPTION)$/.test(c.nodeName)) ? m : m.parentNode).nodeName.toLowerCase()), !m.hasChildNodes()))
                            return uC(e, (o = f.create(l))), m.appendChild(o), t.setStart(o, 0), t.setEnd(o, 0), o;
                        for (a = n; a.parentNode !== m; ) a = a.parentNode;
                        for (; a && !f.isBlock(a); ) a = (i = a).previousSibling;
                        if (i && e.schema.isValidChild(s, l.toLowerCase())) {
                            for (uC(e, (o = f.create(l))), i.parentNode.insertBefore(o, i), a = i; a && !f.isBlock(a); ) (u = a.nextSibling), o.appendChild(a), (a = u);
                            t.setStart(n, r), t.setEnd(n, r);
                        }
                    }
                    return n;
                })(a, d, m, g)),
            (y = (b = c.getParent(m, c.isBlock)) ? c.getParent(b.parentNode, c.isBlock) : null),
            (C = b ? b.nodeName.toUpperCase() : ""),
            "LI" !== (x = y ? y.nodeName.toUpperCase() : "") || v || ((y = (b = y).parentNode), (C = x)),
            /^(LI|DT|DD)$/.test(C) && c.isEmpty(b)
                ? ((N = t),
                  (k = y),
                  (_ = b),
                  (A = p),
                  (I = (E = a).dom),
                  (M = E.selection.getRng()),
                  k !== E.getBody() &&
                      ((D = (A = Z0((R = k)) && Z0(R.parentNode) ? "LI" : A) ? N(A) : I.create("BR")),
                      tC(k, _, !0) && tC(k, _, !1)
                          ? Q0(k, "LI")
                              ? ((T = eC(k)), I.insertAfter(D, T), (null === (L = (P = k).parentNode) || void 0 === L ? void 0 : L.firstChild) === P ? I.remove(T) : I.remove(k))
                              : I.replace(D, k)
                          : (tC(k, _, !0)
                                ? Q0(k, "LI")
                                    ? (I.insertAfter(D, eC(k)), D.appendChild(I.doc.createTextNode(" ")), D.appendChild(k))
                                    : k.parentNode.insertBefore(D, k)
                                : tC(k, _, !1)
                                ? I.insertAfter(D, eC(k))
                                : ((k = eC(k)),
                                  (O = M.cloneRange()).setStartAfter(_),
                                  O.setEndAfter(k),
                                  (B = O.extractContents()),
                                  "LI" === A && B.firstChild && "LI" === B.firstChild.nodeName ? ((D = B.firstChild), I.insertAfter(B, k)) : (I.insertAfter(B, k), I.insertAfter(D, k))),
                            I.remove(_)),
                      G0(E, D)))
                : (p && b === a.getBody()) ||
                  ((p = p || "P"),
                  Pr(b)
                      ? ((u = zr(b)), c.isEmpty(b) && nC(b), uC(a, u), G0(a, u))
                      : n()
                      ? r()
                      : n(!0)
                      ? ((u = b.parentNode.insertBefore(t(), b)), G0(a, rC(b, "HR") ? u : b))
                      : ((S = (w = d).cloneRange()).setStart(w.startContainer, iC(!0, w.startContainer, w.startOffset)),
                        S.setEnd(w.endContainer, iC(!1, w.endContainer, w.endOffset)),
                        (o = S.cloneRange()).setEndAfter(b),
                        (i = o.extractContents()),
                        Y(Hu(Nt.fromDom(i), _n), function (e) {
                            var t = e.dom;
                            t.nodeValue = wo(t.nodeValue);
                        }),
                        (function (e) {
                            for (; jn(e) && (e.nodeValue = e.nodeValue.replace(/^[\r\n]+/, "")), (e = e.firstChild); );
                        })(i),
                        (u = i.firstChild),
                        c.insertAfter(i, b),
                        (function (e, t) {
                            var n,
                                r,
                                o = u,
                                i = [];
                            if (o) {
                                for (; (o = o.firstChild); ) {
                                    if (e.isBlock(o)) return;
                                    zn(o) && !t[o.nodeName.toLowerCase()] && i.push(o);
                                }
                                for (n = i.length; n--; ) !(o = i[n]).hasChildNodes() || (o.firstChild === o.lastChild && "" === o.firstChild.nodeValue) ? e.remove(o) : (r = o) && "A" === r.nodeName && e.isEmpty(r) && e.remove(o);
                            }
                        })(c, f),
                        (function (e, t) {
                            t.normalize();
                            var n = t.lastChild;
                            (n && !/^(left|right)$/gi.test(e.getStyle(n, "float", !0))) || e.add(t, "br");
                        })(c, b),
                        c.isEmpty(b) && nC(b),
                        u.normalize(),
                        c.isEmpty(u) ? (c.remove(u), r()) : (uC(a, u), G0(a, u))),
                  c.setAttrib(u, "id", ""),
                  a.fire("NewBlock", { newBlock: u })));
    }
    function cC(e, t, n) {
        var r = e.dom.createRng();
        n ? (r.setStartBefore(t), r.setEndBefore(t)) : (r.setStartAfter(t), r.setEndAfter(t)), e.selection.setRng(r), Zf(e, r);
    }
    function lC(e, t) {
        var n = Nt.fromTag("br");
        qt(Nt.fromDom(t), n), e.undoManager.add();
    }
    function fC(e, t) {
        XC(e.getBody(), t) || $t(Nt.fromDom(t), Nt.fromTag("br"));
        var n = Nt.fromTag("br");
        $t(Nt.fromDom(t), n), cC(e, n.dom, !1), e.undoManager.add();
    }
    function dC(e) {
        return e && "A" === e.nodeName && "href" in e;
    }
    function mC(e) {
        return e.fold(R, dC, dC, R);
    }
    function gC(e, t) {
        t.fold(te, A(lC, e), A(fC, e), te);
    }
    function pC(e, t) {
        var n,
            r,
            o,
            i = ((r = A(nb, (n = e))), (o = as.fromRangeStart(n.selection.getRng())), Qb(r, n.getBody(), o).filter(mC));
        i.isSome()
            ? i.each(A(gC, e))
            : (function (e, t) {
                  var n,
                      r,
                      o = e.selection,
                      i = e.dom,
                      a = o.getRng();
                  Rf(i, a).each(function (e) {
                      a.setStart(e.startContainer, e.startOffset), a.setEnd(e.endContainer, e.endOffset);
                  });
                  var u,
                      s = a.startOffset,
                      c = a.startContainer;
                  1 === c.nodeType && c.hasChildNodes() && ((u = s > c.childNodes.length - 1), (c = c.childNodes[Math.min(s, c.childNodes.length - 1)] || c), (s = u && 3 === c.nodeType ? c.nodeValue.length : 0));
                  var l = i.getParent(c, i.isBlock),
                      f = l ? i.getParent(l.parentNode, i.isBlock) : null,
                      d = f ? f.nodeName.toUpperCase() : "",
                      m = !(!t || !t.ctrlKey);
                  "LI" !== d || m || (l = f),
                      c &&
                          3 === c.nodeType &&
                          s >= c.nodeValue.length &&
                          !(function (e) {
                              for (var t, n = new Rr(c, l), r = e.getNonEmptyElements(); (t = n.next()); ) if (r[t.nodeName.toLowerCase()] || 0 < t.length) return 1;
                          })(e.schema) &&
                          ((n = i.create("br")), a.insertNode(n), a.setStartAfter(n), a.setEndAfter(n), (r = !0)),
                      (n = i.create("br")),
                      ss(i, a, n),
                      cC(e, n, r),
                      e.undoManager.add();
              })(e, t);
    }
    function hC(e, t) {
        return J0(e)
            .filter(function (e) {
                return 0 < t.length && ze(Nt.fromDom(e), t);
            })
            .isSome();
    }
    function vC(e, t) {
        return hC(e, e.getParam("no_newline_selector", ""));
    }
    function bC(n) {
        return function (e, t) {
            return ("" === Ss(e)) === n;
        };
    }
    function yC(n) {
        return function (e, t) {
            return (
                J0(e)
                    .filter(function (e) {
                        return go(Nt.fromDom(e));
                    })
                    .isSome() === n
            );
        };
    }
    function CC(n, r) {
        return function (e, t) {
            return (
                (J0(e).fold(J(""), function (e) {
                    return e.nodeName.toUpperCase();
                }) ===
                    n.toUpperCase()) ===
                r
            );
        };
    }
    function xC(e) {
        return CC("pre", e);
    }
    function wC(n) {
        return function (e, t) {
            return e.getParam("br_in_pre", !0) === n;
        };
    }
    function SC(e, t) {
        return hC(e, e.getParam("br_newline_selector", ".mce-toc h2,figcaption,caption"));
    }
    function EC(e, t) {
        return t;
    }
    function NC(e) {
        var t = Ss(e),
            n = (function (e, t) {
                for (var n, r = e.getRoot(), o = t; o !== r && "false" !== e.getContentEditable(o); ) "true" === e.getContentEditable(o) && (n = o), (o = o.parentNode);
                return o !== r ? n : r;
            })(e.dom, e.selection.getStart());
        return n && e.schema.isValidChild(n.nodeName, t || "P");
    }
    function kC(e, t) {
        return function (n, r) {
            return L(
                e,
                function (e, t) {
                    return e && t(n, r);
                },
                !0
            )
                ? ve.some(t)
                : ve.none();
        };
    }
    function _C(e, t) {
        var n, r;
        (n = e),
            (r = t),
            Vb(
                [
                    kC([vC], YC.none()),
                    kC([CC("summary", !0)], YC.br()),
                    kC([xC(!0), wC(!1), EC], YC.br()),
                    kC([xC(!0), wC(!1)], YC.block()),
                    kC([xC(!0), wC(!0), EC], YC.block()),
                    kC([xC(!0), wC(!0)], YC.br()),
                    kC([yC(!0), EC], YC.br()),
                    kC([yC(!0)], YC.block()),
                    kC([bC(!0), EC, NC], YC.block()),
                    kC([bC(!0)], YC.br()),
                    kC([SC], YC.br()),
                    kC([bC(!1), EC], YC.br()),
                    kC([NC], YC.block()),
                ],
                [n, !(!r || !r.shiftKey)]
            )
                .getOr(YC.none())
                .fold(
                    function () {
                        pC(e, t);
                    },
                    function () {
                        sC(e, t);
                    },
                    te
                );
    }
    function AC(e) {
        return e.stopImmediatePropagation();
    }
    function RC(e) {
        return e.keyCode === Bf.PAGE_UP || e.keyCode === Bf.PAGE_DOWN;
    }
    function DC(e, t, n) {
        n && !e.get() ? t.on("NodeChange", AC, !0) : !n && e.get() && t.off("NodeChange", AC), e.set(n);
    }
    function TC(n, r) {
        var e = r.container(),
            t = r.offset();
        return jn(e)
            ? (e.insertData(t, n), ve.some(as(e, t + n.length)))
            : nc(r).map(function (e) {
                  var t = Nt.fromText(n);
                  return (r.isAtEnd() ? $t : qt)(e, t), as(t.dom, n.length);
              });
    }
    function OC(i, a) {
        return function (e) {
            return (r = i), (!Rm((o = e)) && ((n = o), Zl((t = r).dom, n).isNone() || Ql(t.dom, n).isNone() || np(t, n) || rp(t, n) || Em(t, n) || Sm(t, n) || _m(r, o) || Am(r, o)) ? QC : ZC)(a);
            var t, n, r, o;
        };
    }
    function BC(e) {
        var t,
            n,
            r = as.fromRangeStart(e.selection.getRng()),
            o = Nt.fromDom(e.getBody());
        if (e.selection.isCollapsed()) {
            var i = A(nb, e),
                a = as.fromRangeStart(e.selection.getRng());
            return Qb(i, e.getBody(), a)
                .bind(
                    ((n = o),
                    function (e) {
                        return e.fold(
                            function (e) {
                                return Zl(n.dom, as.before(e));
                            },
                            function (e) {
                                return ef(e);
                            },
                            function (e) {
                                return tf(e);
                            },
                            function (e) {
                                return Ql(n.dom, as.after(e));
                            }
                        );
                    })
                )
                .bind(OC(o, r))
                .exists(
                    ((t = e),
                    function (e) {
                        return t.selection.setRng(e.toRange()), t.nodeChanged(), !0;
                    })
                );
        }
        return !1;
    }
    function PC(e) {
        var o,
            i,
            a,
            u,
            s,
            t,
            n,
            r,
            c,
            l,
            f,
            d,
            m,
            g,
            p = a0(e);
        return (
            e.on("keyup compositionstart", A(_0, e)),
            (g = p),
            (m = e).on("keydown", function (e) {
                var t, n, r, o;
                !1 === e.isDefaultPrevented() &&
                    ((t = m),
                    (n = g),
                    (r = e),
                    (o = dt().os),
                    F0(
                        [
                            { keyCode: Bf.RIGHT, action: M0(R0, t, !0) },
                            { keyCode: Bf.LEFT, action: M0(R0, t, !1) },
                            { keyCode: Bf.UP, action: M0(D0, t, !1) },
                            { keyCode: Bf.DOWN, action: M0(D0, t, !0) },
                            { keyCode: Bf.RIGHT, action: M0(X0, t, !0) },
                            { keyCode: Bf.LEFT, action: M0(X0, t, !1) },
                            { keyCode: Bf.UP, action: M0(Y0, t, !1) },
                            { keyCode: Bf.DOWN, action: M0(Y0, t, !0) },
                            { keyCode: Bf.RIGHT, action: M0(U0, t, !0) },
                            { keyCode: Bf.LEFT, action: M0(U0, t, !1) },
                            { keyCode: Bf.UP, action: M0(z0, t, !1) },
                            { keyCode: Bf.DOWN, action: M0(z0, t, !0) },
                            { keyCode: Bf.RIGHT, action: M0(o0, t, n, !0) },
                            { keyCode: Bf.LEFT, action: M0(o0, t, n, !1) },
                            { keyCode: Bf.RIGHT, ctrlKey: !o.isOSX(), altKey: o.isOSX(), action: M0(zC, t, n) },
                            { keyCode: Bf.LEFT, ctrlKey: !o.isOSX(), altKey: o.isOSX(), action: M0(HC, t, n) },
                            { keyCode: Bf.UP, action: M0(I0, t, !1) },
                            { keyCode: Bf.DOWN, action: M0(I0, t, !0) },
                        ],
                        r
                    ).each(function (e) {
                        r.preventDefault();
                    }));
            }),
            (d = p),
            (f = e).on("keydown", function (e) {
                var t, n, r;
                !1 === e.isDefaultPrevented() &&
                    ((n = d),
                    (r = e),
                    F0(
                        [
                            { keyCode: Bf.BACKSPACE, action: M0(x0, (t = f), !1) },
                            { keyCode: Bf.BACKSPACE, action: M0(Pb, t, !1) },
                            { keyCode: Bf.DELETE, action: M0(Pb, t, !0) },
                            { keyCode: Bf.BACKSPACE, action: M0(Ab, t, !1) },
                            { keyCode: Bf.DELETE, action: M0(Ab, t, !0) },
                            { keyCode: Bf.BACKSPACE, action: M0(l0, t, n, !1) },
                            { keyCode: Bf.DELETE, action: M0(l0, t, n, !0) },
                            { keyCode: Bf.BACKSPACE, action: M0(hg, t, !1) },
                            { keyCode: Bf.DELETE, action: M0(hg, t, !0) },
                            { keyCode: Bf.BACKSPACE, action: M0(Lb, t, !1) },
                            { keyCode: Bf.DELETE, action: M0(Lb, t, !0) },
                            { keyCode: Bf.BACKSPACE, action: M0(p0, t, !1) },
                            { keyCode: Bf.DELETE, action: M0(p0, t, !0) },
                            { keyCode: Bf.BACKSPACE, action: M0(Cb, t, !1) },
                            { keyCode: Bf.DELETE, action: M0(Cb, t, !0) },
                            { keyCode: Bf.BACKSPACE, action: M0(vb, t, !1) },
                            { keyCode: Bf.DELETE, action: M0(vb, t, !0) },
                            { keyCode: Bf.BACKSPACE, action: M0(m0, t, !1) },
                            { keyCode: Bf.DELETE, action: M0(m0, t, !0) },
                        ],
                        r
                    ).each(function (e) {
                        r.preventDefault();
                    }));
            }),
            f.on("keyup", function (e) {
                var t, n;
                !1 === e.isDefaultPrevented() &&
                    ((n = e),
                    F0(
                        [
                            { keyCode: Bf.BACKSPACE, action: M0(Bb, (t = f)) },
                            { keyCode: Bf.DELETE, action: M0(Bb, t) },
                        ],
                        n
                    ));
            }),
            (l = e).on("keydown", function (e) {
                var t, n, r;
                e.keyCode === Bf.ENTER &&
                    ((t = l),
                    (n = e).isDefaultPrevented() ||
                        (n.preventDefault(),
                        (r = t.undoManager).typing && ((r.typing = !1), r.add()),
                        t.undoManager.transact(function () {
                            !1 === t.selection.isCollapsed() && t.execCommand("Delete"), _C(t, n);
                        })));
            }),
            (c = e).on("keydown", function (e) {
                var t;
                !1 === e.isDefaultPrevented() &&
                    ((t = e),
                    F0([{ keyCode: Bf.SPACEBAR, action: M0(BC, c) }], t).each(function (e) {
                        t.preventDefault();
                    }));
            }),
            (n = t = e),
            (r = lu(function () {
                n.composing || Im(n);
            }, 0)),
            GC.isIE() &&
                (n.on("keypress", function (e) {
                    r.throttle();
                }),
                n.on("remove", function (e) {
                    r.cancel();
                })),
            t.on("input", function (e) {
                !1 === e.isComposing && Im(t);
            }),
            (s = p),
            (u = e).on("keydown", function (e) {
                var t, n, r;
                !1 === e.isDefaultPrevented() &&
                    ((n = s),
                    (r = e),
                    F0(
                        [
                            { keyCode: Bf.END, action: M0(T0, (t = u), !0) },
                            { keyCode: Bf.HOME, action: M0(T0, t, !1) },
                            { keyCode: Bf.END, action: M0(H0, t, !0) },
                            { keyCode: Bf.HOME, action: M0(H0, t, !1) },
                            { keyCode: Bf.END, action: M0(u0, t, !0, n) },
                            { keyCode: Bf.HOME, action: M0(u0, t, !1, n) },
                        ],
                        r
                    ).each(function (e) {
                        r.preventDefault();
                    }));
            }),
            (o = e),
            (i = p),
            JC.os.isOSX() ||
                ((a = ru(!1)),
                o.on("keydown", function (e) {
                    RC(e) && DC(a, o, !0);
                }),
                o.on("keyup", function (e) {
                    var t, n, r;
                    !1 === e.isDefaultPrevented() &&
                        ((r = e),
                        F0(
                            [
                                { keyCode: Bf.PAGE_UP, action: M0(u0, (t = o), !1, (n = i)) },
                                { keyCode: Bf.PAGE_DOWN, action: M0(u0, t, !0, n) },
                            ],
                            r
                        )),
                        RC(e) && a.get() && (DC(a, o, !1), o.nodeChanged());
                })),
            p
        );
    }
    ((Ly = Py = Py || {})[(Ly.Up = -1)] = "Up"), (Ly[(Ly.Down = 1)] = "Down");
    var LC = A(zy, Py.Up, Ru, Du),
        IC = A(zy, Py.Down, Du, Ru),
        MC = Yn,
        FC = Ks,
        UC = function (e, t) {
            var n = e.selection.getRng(),
                r = e.getBody();
            if (t) {
                var o = as.fromRangeEnd(n),
                    i = My(r, o);
                return Z(i.positions);
            }
            return (o = as.fromRangeStart(n)), Q((i = Iy(r, o)).positions);
        },
        zC = A(i0, !0),
        HC = A(i0, !1),
        jC = function (e) {
            return U(T(e.selection.getSelectedBlocks(), Nt.fromDom), function (e) {
                return (
                    !y0(e) &&
                    !Ot(e).exists(y0) &&
                    pr(e, function (e) {
                        return Xn(e.dom) || Yn(e.dom);
                    }).exists(function (e) {
                        return Xn(e.dom);
                    })
                );
            });
        },
        VC = Yn,
        qC = A(
            j0,
            function (e) {
                return e.bottom;
            },
            function (e, t) {
                return e.y < t;
            }
        ),
        $C = A(
            j0,
            function (e) {
                return e.top;
            },
            function (e, t) {
                return e.y > t;
            }
        ),
        WC = A(V0, Iy),
        KC = A(V0, My),
        XC = function (e, t) {
            return (
                (n = as.after(t)),
                !!Wn(n.getNode()) ||
                    Ql(e, as.after(t))
                        .map(function (e) {
                            return Wn(e.getNode());
                        })
                        .getOr(!1)
            );
            var n;
        },
        YC = or([{ br: [] }, { block: [] }, { none: [] }]),
        GC = dt().browser,
        JC = dt(),
        QC = A(TC, yo),
        ZC = A(TC, " "),
        e1 =
            ((t1.prototype.nodeChanged = function (e) {
                var t,
                    n,
                    r,
                    o = this.editor.selection;
                this.editor.initialized &&
                    o &&
                    !this.editor.getParam("disable_nodechange") &&
                    !this.editor.mode.isReadOnly() &&
                    ((r = this.editor.getBody()),
                    ((t = o.getStart(!0) || r).ownerDocument === this.editor.getDoc() && this.editor.dom.isChildOf(t, r)) || (t = r),
                    (n = []),
                    this.editor.dom.getParent(t, function (e) {
                        return e === r || void n.push(e);
                    }),
                    ((e = e || {}).element = t),
                    (e.parents = n),
                    this.editor.fire("NodeChange", e));
            }),
            (t1.prototype.isSameElementPath = function (e) {
                var t,
                    n = this.editor.$(e).parentsUntil(this.editor.getBody()).add(e);
                if (n.length === this.lastPath.length) {
                    for (t = n.length; 0 <= t && n[t] === this.lastPath[t]; t--);
                    if (-1 === t) return (this.lastPath = n), !0;
                }
                return (this.lastPath = n), !1;
            }),
            t1);
    function t1(r) {
        var o;
        (this.lastPath = []), (this.editor = r);
        var t = this;
        "onselectionchange" in r.getDoc() ||
            r.on("NodeChange click mouseup keyup focus", function (e) {
                var t = r.selection.getRng(),
                    n = { startContainer: t.startContainer, startOffset: t.startOffset, endContainer: t.endContainer, endOffset: t.endOffset };
                ("nodechange" !== e.type && Sf(n, o)) || r.fire("SelectionChange"), (o = n);
            }),
            r.on("contextmenu", function () {
                r.fire("SelectionChange");
            }),
            r.on("SelectionChange", function () {
                var e = r.selection.getStart(!0);
                !e || (!xt.range && r.selection.isCollapsed()) || (Tl(r) && !t.isSameElementPath(e) && r.dom.isChildOf(e, r.getBody()) && r.nodeChanged({ selectionChange: !0 }));
            }),
            r.on("mouseup", function (e) {
                !e.isDefaultPrevented() &&
                    Tl(r) &&
                    ("IMG" === r.selection.getNode().nodeName
                        ? _r.setEditorTimeout(r, function () {
                              r.nodeChanged();
                          })
                        : r.nodeChanged());
            });
    }
    function n1(e) {
        return zn(e) && fo(Nt.fromDom(e));
    }
    function r1(e) {
        var t = e.getBoundingClientRect(),
            n = e.ownerDocument,
            r = n.documentElement,
            o = n.defaultView;
        return { top: t.top + o.pageYOffset - r.clientTop, left: t.left + o.pageXOffset - r.clientLeft };
    }
    function o1(e) {
        e && e.parentNode && e.parentNode.removeChild(e);
    }
    function i1(e, S) {
        var E = _r.throttle(function (e, t) {
            S._selectionOverrides.hideFakeCaret(), S.selection.placeCaretAt(e, t);
        }, 0);
        return (
            S.on("remove", E.stop),
            function (w) {
                return e.on(function (e) {
                    var t,
                        n,
                        r,
                        o,
                        i,
                        a,
                        u,
                        s,
                        c,
                        l,
                        f,
                        d,
                        m,
                        g,
                        p,
                        h,
                        v,
                        b,
                        y,
                        C,
                        x = Math.max(Math.abs(w.screenX - e.screenX), Math.abs(w.screenY - e.screenY));
                    if (!e.dragging && 10 < x) {
                        if (S.fire("dragstart", { target: e.element }).isDefaultPrevented()) return;
                        (e.dragging = !0), S.focus();
                    }
                    e.dragging &&
                        ((d = e),
                        (t = {
                            pageX:
                                ((p = w),
                                (h = (g = S).inline ? r1(g.getBody()) : { left: 0, top: 0 }),
                                (C = (y = g).getBody()),
                                (v = y.inline ? { left: C.scrollLeft, top: C.scrollTop } : { left: 0, top: 0 }),
                                (m = {
                                    pageX:
                                        (b = (function (e, t) {
                                            if (t.target.ownerDocument === e.getDoc()) return { left: t.pageX, top: t.pageY };
                                            var n,
                                                r,
                                                o,
                                                i,
                                                a,
                                                u = r1(e.getContentAreaContainer()),
                                                s =
                                                    ((r = (n = e).getBody()),
                                                    (o = n.getDoc().documentElement),
                                                    (i = { left: r.scrollLeft, top: r.scrollTop }),
                                                    (a = { left: r.scrollLeft || o.scrollLeft, top: r.scrollTop || o.scrollTop }),
                                                    n.inline ? i : a);
                                            return { left: t.pageX - u.left + s.left, top: t.pageY - u.top + s.top };
                                        })(g, p)).left -
                                        h.left +
                                        v.left,
                                    pageY: b.top - h.top + v.top,
                                }).pageX - d.relX),
                            pageY: m.pageY + 5,
                        }),
                        (l = e.ghost),
                        (f = S.getBody()),
                        l.parentNode !== f && f.appendChild(l),
                        (n = e.ghost),
                        (o = e.width),
                        (i = e.height),
                        (a = e.maxX),
                        (u = e.maxY),
                        (c = s = 0),
                        (n.style.left = (r = t).pageX + "px"),
                        (n.style.top = r.pageY + "px"),
                        u < r.pageY + i && (c = r.pageY + i - u),
                        (n.style.width = o - (s = a < r.pageX + o ? r.pageX + o - a : s) + "px"),
                        (n.style.height = i - c + "px"),
                        E(w.clientX, w.clientY));
                });
            }
        );
    }
    function a1(e) {
        function t(e) {
            var t, n, r, o, i, a;
            0 === e.button &&
                ((t = M(
                    c.dom.getParents(e.target),
                    (function () {
                        for (var n = [], e = 0; e < arguments.length; e++) n[e] = arguments[e];
                        return function (e) {
                            for (var t = 0; t < n.length; t++) if (n[t](e)) return !0;
                            return !1;
                        };
                    })(D1, T1)
                ).getOr(null)),
                (i = c.getBody()),
                D1((a = t)) &&
                    a !== i &&
                    ((n = c.dom.getPos(t)),
                    (r = c.getBody()),
                    (o = c.getDoc().documentElement),
                    u.set({
                        element: t,
                        dragging: !1,
                        screenX: e.screenX,
                        screenY: e.screenY,
                        maxX: (c.inline ? r.scrollWidth : o.offsetWidth) - 2,
                        maxY: (c.inline ? r.scrollHeight : o.offsetHeight) - 2,
                        relX: e.pageX - n.x,
                        relY: e.pageY - n.y,
                        width: t.offsetWidth,
                        height: t.offsetHeight,
                        ghost: (function (e, t, n) {
                            var r = c.dom,
                                o = e.cloneNode(!0);
                            r.setStyles(o, { width: t, height: n }), r.setAttrib(o, "data-mce-selected", null);
                            var i = r.create("div", { class: "mce-drag-container", "data-mce-bogus": "all", unselectable: "on", contenteditable: "false" });
                            return (
                                r.setStyles(i, { position: "absolute", opacity: 0.5, overflow: "hidden", border: 0, padding: 0, margin: 0, width: t, height: n }), r.setStyles(o, { margin: 0, boxSizing: "border-box" }), i.appendChild(o), i
                            );
                        })(t, t.offsetWidth, t.offsetHeight),
                    })));
        }
        function n(u) {
            i.on(function (e) {
                var t, n, r, o, i, a;
                e.dragging &&
                    ((o = 3 === (a = (r = s).selection.getSel().getRangeAt(0).startContainer).nodeType ? a.parentNode : a) === (i = e.element) ||
                        r.dom.isChildOf(o, i) ||
                        D1(o) ||
                        ((n = e.element.cloneNode(!0)).removeAttribute("data-mce-selected"),
                        (t = n),
                        s.fire("drop", { clientX: u.clientX, clientY: u.clientY }).isDefaultPrevented() ||
                            s.undoManager.transact(function () {
                                o1(e.element), s.insertContent(s.dom.getOuterHTML(t)), s._selectionOverrides.hideFakeCaret();
                            })),
                    s.fire("dragend"));
            }),
                O1(i);
        }
        var r,
            o,
            i,
            s,
            u,
            c,
            a = cu(),
            l = Ja.DOM,
            f = document,
            d = i1((u = a), (c = e)),
            m =
                ((r = i = a),
                function () {
                    r.on(function (e) {
                        e.dragging && o.fire("dragend");
                    }),
                        O1(r);
                });
        (o = s = e).on("mousedown", t),
            e.on("mousemove", d),
            e.on("mouseup", n),
            l.bind(f, "mousemove", d),
            l.bind(f, "mouseup", m),
            e.on("remove", function () {
                l.unbind(f, "mousemove", d), l.unbind(f, "mouseup", m);
            }),
            e.on("keydown", function (e) {
                e.keyCode === Bf.ESC && m();
            });
    }
    function u1(e) {
        var n, i;
        function a(e) {
            var t;
            e.isDefaultPrevented() || ((t = e.dataTransfer) && (D(t.types, "Files") || 0 < t.files.length) && (e.preventDefault(), "drop" === e.type && Iv(i, "Dropped file type is not supported")));
        }
        function u(e) {
            dd(i, e.target) && a(e);
        }
        function t() {
            var t = Ja.DOM,
                n = i.dom,
                r = document,
                o = i.inline ? i.getBody() : i.getDoc(),
                e = ["drop", "dragover"];
            Y(e, function (e) {
                t.bind(r, e, u), n.bind(o, e, a);
            }),
                i.on("remove", function () {
                    Y(e, function (e) {
                        t.unbind(r, e, u), n.unbind(o, e, a);
                    });
                });
        }
        a1(e),
            (n = e).on("drop", function (e) {
                var t = void 0 !== e.clientX ? n.getDoc().elementFromPoint(e.clientX, e.clientY) : null;
                (!D1(t) && "false" !== n.dom.getContentEditableParent(t)) || e.preventDefault();
            }),
            e.getParam("block_unsupported_drop", !0, "boolean") &&
                (i = e).on("init", function () {
                    _r.setEditorTimeout(i, t, 0);
                });
    }
    function s1(e, t) {
        return pf(e.getBody(), t);
    }
    function c1(l) {
        function f(e) {
            return e !== x && (P1(e) || Jn(e)) && y.isChildOf(e, x);
        }
        function c(e) {
            return ep(e) || tp(e) || Gg(e) || Jg(e);
        }
        function d(e) {
            e && b.setRng(e);
        }
        function m(e, t, n, r) {
            return void 0 === r && (r = !0), l.fire("ShowCaret", { target: t, direction: e, before: n }).isDefaultPrevented() ? null : (r && b.scrollIntoView(t, -1 === e), i.show(n, t));
        }
        function t(e) {
            return Ir(e) || No(e) || ko(e);
        }
        function g(e) {
            return t(e.startContainer) || t(e.endContainer);
        }
        function p(e, t) {
            if (!e) return null;
            if (e.collapsed) {
                if (!g(e)) {
                    var n = t ? 1 : -1,
                        r = tc(n, x, e),
                        o = r.getNode(!t);
                    if ($s(o)) return m(n, o, !!t && !r.isAtEnd(), !1);
                    var i = r.getNode(t);
                    if ($s(i)) return m(n, i, !t && !r.isAtEnd(), !1);
                }
                return null;
            }
            var a = e.startContainer,
                u = e.startOffset,
                s = e.endOffset;
            if ((3 === a.nodeType && 0 === u && P1(a.parentNode) && ((a = a.parentNode), (u = y.nodeIndex(a)), (a = a.parentNode)), 1 !== a.nodeType)) return null;
            if (s === u + 1 && a === e.endContainer) {
                var c = a.childNodes[u];
                if (f(c))
                    return (function (e) {
                        var t = e.cloneNode(!0),
                            n = l.fire("ObjectSelected", { target: e, targetClone: t });
                        if (n.isDefaultPrevented()) return null;
                        var r = (function (e, t, n) {
                                var r = l.$,
                                    o = vr(Nt.fromDom(l.getBody()), "#" + w).fold(
                                        function () {
                                            return r([]);
                                        },
                                        function (e) {
                                            return r([e.dom]);
                                        }
                                    );
                                0 === o.length && (o = r('<div data-mce-bogus="all" class="mce-offscreen-selection"></div>').attr("id", w)).appendTo(l.getBody());
                                var i = y.createRng();
                                t === n && xt.ie
                                    ? (o.empty().append('<p style="font-size: 0" data-mce-bogus="all">\xa0</p>').append(t), i.setStartAfter(o[0].firstChild.firstChild), i.setEndAfter(t))
                                    : (o.empty().append(yo).append(t).append(yo), i.setStart(o[0].firstChild, 1), i.setEnd(o[0].lastChild, 0)),
                                    o.css({ top: y.getPos(e, l.getBody()).y }),
                                    o[0].focus();
                                var a = b.getSel();
                                return a.removeAllRanges(), a.addRange(i), i;
                            })(e, n.targetClone, t),
                            o = Nt.fromDom(e);
                        return (
                            Y(hu(Nt.fromDom(l.getBody()), "*[data-mce-selected]"), function (e) {
                                je(o, e) || yn(e, S);
                            }),
                            y.getAttrib(e, S) || e.setAttribute(S, "1"),
                            (v = e),
                            E(),
                            r
                        );
                    })(c);
            }
            return null;
        }
        function h() {
            v && v.removeAttribute(S), vr(Nt.fromDom(l.getBody()), "#" + w).each(Ln), (v = null);
        }
        var v,
            n,
            e,
            o,
            b = l.selection,
            y = l.dom,
            C = y.isBlock,
            x = l.getBody(),
            i = Vs(l, x, C, function () {
                return vd(l);
            }),
            w = "sel-" + y.uniqueId(),
            S = "data-mce-selected",
            r = b.getRng,
            E = function () {
                i.hide();
            };
        return (
            xt.ceFalse &&
                !mh(l) &&
                (l.on("mouseup", function (e) {
                    var t = r();
                    t.collapsed && av(l, e.clientX, e.clientY) && Sb(l, t, !1).each(d);
                }),
                l.on("click", function (e) {
                    var t = s1(l, e.target);
                    t && (P1(t) && (e.preventDefault(), l.focus()), B1(t) && y.isChildOf(t, b.getNode()) && h());
                }),
                l.on("blur NewBlock", h),
                l.on("ResizeWindow FullscreenStateChanged", i.reposition),
                l.on(
                    "tap",
                    function (e) {
                        var t = e.target,
                            n = s1(l, t);
                        P1(n) ? (e.preventDefault(), wb(l, n).each(p)) : f(t) && wb(l, t).each(p);
                    },
                    !0
                ),
                l.on("mousedown", function (e) {
                    var t,
                        n,
                        r,
                        o,
                        i,
                        a,
                        u,
                        s = e.target;
                    (s !== x && "HTML" !== s.nodeName && !y.isChildOf(s, x)) ||
                        !1 === av(l, e.clientX, e.clientY) ||
                        ((t = s1(l, s))
                            ? P1(t)
                                ? (e.preventDefault(), wb(l, t).each(p))
                                : (h(), (B1(t) && e.shiftKey) || hf(e.clientX, e.clientY, b.getRng()) || (E(), b.placeCaretAt(e.clientX, e.clientY)))
                            : f(s)
                            ? wb(l, s).each(p)
                            : !1 === $s(s) &&
                              (h(),
                              E(),
                              (n = Yy(x, e.clientX, e.clientY)) &&
                                  ((r = s),
                                  (o = n.node),
                                  (a = y.getParent(r, C)),
                                  (u = y.getParent(o, C)),
                                  (!K(a) &&
                                      ((r !== u && y.isChildOf(a, u) && !1 === P1(s1(l, a))) ||
                                          (!y.isChildOf(u, a) &&
                                              ((i = u), y.getParent(a, C) !== y.getParent(i, C)) &&
                                              (function (e) {
                                                  var t = e.firstChild;
                                                  if (!K(t)) {
                                                      var n = as.before(t);
                                                      if (Wn(n.getNode()) && 1 === e.childNodes.length) return !c(n);
                                                      var r = Pc(e).next(n);
                                                      return r && !c(r);
                                                  }
                                              })(a)))) ||
                                      (e.preventDefault(), d(m(1, n.node, n.before, !1)), l.getBody().focus()))));
                }),
                l.on("keypress", function (e) {
                    Bf.modifierPressed(e) || (P1(b.getNode()) && e.preventDefault());
                }),
                l.on("GetSelectionRange", function (e) {
                    var t = e.range;
                    v && (v.parentNode ? ((t = t.cloneRange()).selectNode(v), (e.range = t)) : (v = null));
                }),
                l.on("SetSelectionRange", function (e) {
                    var t, n, r, o, i, a, u;
                    e.range =
                        ((t = e.range),
                        (n = l.schema.getShortEndedElements()),
                        (r = y.createRng()),
                        (o = t.startContainer),
                        (i = t.startOffset),
                        (a = t.endContainer),
                        (u = t.endOffset),
                        Ne(n, o.nodeName.toLowerCase()) ? (0 === i ? r.setStartBefore(o) : r.setStartAfter(o)) : r.setStart(o, i),
                        Ne(n, a.nodeName.toLowerCase()) ? (0 === u ? r.setEndBefore(a) : r.setEndAfter(a)) : r.setEnd(a, u),
                        r);
                    var s = p(e.range, e.forward);
                    s && (e.range = s);
                }),
                l.on("AfterSetSelectionRange", function (e) {
                    var t = e.range,
                        n = t.startContainer.parentNode;
                    g(t) || "mcepastebin" === n.id || E(), y.hasClass(n, "mce-offscreen-selection") || h();
                }),
                l.on("copy", function (e) {
                    var t,
                        n,
                        r = e.clipboardData;
                    e.isDefaultPrevented() ||
                        !e.clipboardData ||
                        xt.ie ||
                        ((t = (n = y.get(w)) && n.getElementsByTagName("*")[0]) && (e.preventDefault(), r.clearData(), r.setData("text/html", t.outerHTML), r.setData("text/plain", t.outerText || t.innerText)));
                }),
                u1(l),
                (e = lu(function () {
                    var e, t;
                    n.removed || !n.getBody().contains(document.activeElement) || ((e = n.selection.getRng()).collapsed && ((t = Eb(n, e, !1)), n.selection.setRng(t)));
                }, 0)),
                (n = l).on("focus", function () {
                    e.throttle();
                }),
                n.on("blur", function () {
                    e.cancel();
                }),
                (o = l).on("init", function () {
                    o.on("focusin", function (e) {
                        var t,
                            n,
                            r = e.target;
                        Jn(r) &&
                            ((t = pf(o.getBody(), r)),
                            (n = Yn(t) ? t : r),
                            o.selection.getNode() !== n &&
                                wb(o, n).each(function (e) {
                                    return o.selection.setRng(e);
                                }));
                    });
                })),
            {
                showCaret: m,
                showBlockCaretContainer: function (e) {
                    e.hasAttribute("data-mce-caret") && (zr(e), d(r()), b.scrollIntoView(e));
                },
                hideFakeCaret: E,
                destroy: function () {
                    i.destroy(), (v = null);
                },
            }
        );
    }
    function l1(a) {
        function e(e, t) {
            try {
                a.getDoc().execCommand(e, !1, t);
            } catch (e) {}
        }
        function u(e) {
            return e.isDefaultPrevented();
        }
        function t() {
            a.shortcuts.add("meta+a", null, "SelectAll");
        }
        function n() {
            a.inline ||
                b.bind(a.getDoc(), "mousedown mouseup", function (e) {
                    var t;
                    e.target === a.getDoc().documentElement && ((t = y.getRng()), a.getBody().focus(), "mousedown" === e.type ? Ir(t.startContainer) || y.placeCaretAt(e.clientX, e.clientY) : y.setRng(t));
                });
        }
        function r() {
            Range.prototype.getClientRects ||
                a.on("mousedown", function (e) {
                    var t;
                    u(e) ||
                        "HTML" !== e.target.nodeName ||
                        ((t = a.getBody()).blur(),
                        _r.setEditorTimeout(a, function () {
                            t.focus();
                        }));
                });
        }
        function o() {
            a.on("click", function (e) {
                var t = e.target;
                /^(IMG|HR)$/.test(t.nodeName) && "false" !== b.getContentEditableParent(t) && (e.preventDefault(), a.selection.select(t), a.nodeChanged()),
                    "A" === t.nodeName && b.hasClass(t, "mce-item-anchor") && (e.preventDefault(), y.select(t));
            });
        }
        function i() {
            a.on("keydown", function (e) {
                if (!u(e) && e.keyCode === h && y.isCollapsed() && 0 === y.getRng().startOffset) {
                    var t = y.getNode().previousSibling;
                    if (t && t.nodeName && "table" === t.nodeName.toLowerCase()) return e.preventDefault(), !1;
                }
            });
        }
        function s() {
            a.getParam("readonly") ||
                a.on("BeforeExecCommand mousedown", function () {
                    e("StyleWithCSS", !1), e("enableInlineTableEditing", !1), Ts(a) || e("enableObjectResizing", !1);
                });
        }
        function c() {
            a.contentStyles.push("img:-moz-broken {-moz-force-broken-image-icon:1;min-width:24px;min-height:24px}");
        }
        function l() {
            a.inline ||
                a.on("keydown", function () {
                    document.activeElement === document.body && a.getWin().focus();
                });
        }
        function f() {
            a.inline ||
                (a.contentStyles.push("body {min-height: 150px}"),
                a.on("click", function (e) {
                    var t;
                    "HTML" === e.target.nodeName && (11 < xt.ie ? a.getBody().focus() : ((t = a.selection.getRng()), a.getBody().focus(), a.selection.setRng(t), a.selection.normalize(), a.nodeChanged()));
                }));
        }
        function d() {
            xt.mac &&
                a.on("keydown", function (e) {
                    !Bf.metaKeyPressed(e) || e.shiftKey || (37 !== e.keyCode && 39 !== e.keyCode) || (e.preventDefault(), a.selection.getSel().modify("move", 37 === e.keyCode ? "backward" : "forward", "lineboundary"));
                });
        }
        function m() {
            a.on("click", function (e) {
                var t = e.target;
                do {
                    if ("A" === t.tagName) return void e.preventDefault();
                } while ((t = t.parentNode));
            }),
                a.contentStyles.push(".mce-content-body {-webkit-touch-callout: none}");
        }
        function g() {
            a.on("init", function () {
                a.dom.bind(a.getBody(), "submit", function (e) {
                    e.preventDefault();
                });
            });
        }
        var p = Et.each,
            h = Bf.BACKSPACE,
            v = Bf.DELETE,
            b = a.dom,
            y = a.selection,
            C = a.parser,
            x = xt.gecko,
            w = xt.ie,
            S = xt.webkit,
            E = "data:text/mce-internal,",
            N = w ? "Text" : "URL",
            k = te;
        return (
            mh(a)
                ? (S && (n(), o(), g(), t(), xt.iOS && (l(), f(), m())), x && (r(), s(), c(), d()))
                : (a.on("keydown", function (e) {
                      if (!u(e) && e.keyCode === Bf.BACKSPACE) {
                          var t,
                              n = (t = y.getRng()).startContainer,
                              r = t.startOffset,
                              o = b.getRoot(),
                              i = n;
                          if (t.collapsed && 0 === r) {
                              for (; i && i.parentNode && i.parentNode.firstChild === i && i.parentNode !== o; ) i = i.parentNode;
                              "BLOCKQUOTE" === i.tagName && (a.formatter.toggle("blockquote", null, i), (t = b.createRng()).setStart(n, 0), t.setEnd(n, 0), y.setRng(t));
                          }
                      }
                  }),
                  a.on("keydown", function (e) {
                      var t,
                          n,
                          r,
                          o,
                          i = e.keyCode;
                      u(e) ||
                          (i !== v && i !== h) ||
                          ((t = a.selection.isCollapsed()),
                          (n = a.getBody()),
                          (t && !b.isEmpty(n)) ||
                              (!t && ((r = R(a.selection.getRng())), (o = b.createRng()).selectNode(a.getBody()), r !== R(o))) ||
                              (e.preventDefault(), a.setContent(""), n.firstChild && b.isBlock(n.firstChild) ? a.selection.setCursorLocation(n.firstChild, 0) : a.selection.setCursorLocation(n, 0), a.nodeChanged()));
                  }),
                  xt.windowsPhone ||
                      a.on(
                          "keyup focusin mouseup",
                          function (e) {
                              Bf.modifierPressed(e) || y.normalize();
                          },
                          !0
                      ),
                  S &&
                      (n(),
                      o(),
                      Ss(a) &&
                          a.on("init", function () {
                              e("DefaultParagraphSeparator", Ss(a));
                          }),
                      g(),
                      i(),
                      C.addNodeFilter("br", function (e) {
                          for (var t = e.length; t--; ) "Apple-interchange-newline" === e[t].attr("class") && e[t].remove();
                      }),
                      xt.iOS ? (l(), f(), m()) : t()),
                  11 <= xt.ie && (f(), i()),
                  xt.ie &&
                      (t(),
                      e("AutoUrlDetect", !1),
                      a.on("dragstart", function (e) {
                          var t, n, r;
                          (t = e).dataTransfer &&
                              (a.selection.isCollapsed() && "IMG" === t.target.tagName && y.select(t.target), 0 < (n = a.selection.getContent()).length && ((r = E + escape(a.id) + "," + escape(n)), t.dataTransfer.setData(N, r)));
                      }),
                      a.on("drop", function (e) {
                          var t, n, r, o;
                          u(e) ||
                              ((t = e.dataTransfer && (o = e.dataTransfer.getData(N)) && 0 <= o.indexOf(E) ? ((o = o.substr(E.length).split(",")), { id: unescape(o[0]), html: unescape(o[1]) }) : null) &&
                                  t.id !== a.id &&
                                  (e.preventDefault(),
                                  (n = wf(e.x, e.y, a.getDoc())),
                                  y.setRng(n),
                                  (r = t.html),
                                  a.queryCommandSupported("mceInsertClipboardContent") ? a.execCommand("mceInsertClipboardContent", !1, { content: r, internal: !0 }) : a.execCommand("mceInsertContent", !1, r)));
                      })),
                  x &&
                      (a.on("keydown", function (e) {
                          if (!u(e) && e.keyCode === h && a.getBody().getElementsByTagName("hr").length && y.isCollapsed() && 0 === y.getRng().startOffset) {
                              var t = y.getNode(),
                                  n = t.previousSibling;
                              if ("HR" === t.nodeName) return b.remove(t), void e.preventDefault();
                              n && n.nodeName && "hr" === n.nodeName.toLowerCase() && (b.remove(n), e.preventDefault());
                          }
                      }),
                      r(),
                      a.on("keypress", function (e) {
                          var t;
                          if (!u(e) && (8 === e.keyCode || 46 === e.keyCode) && A()) return (t = _()), a.getDoc().execCommand("delete", !1, null), t(), e.preventDefault(), !1;
                      }),
                      b.bind(a.getDoc(), "cut", function (e) {
                          var t;
                          !u(e) &&
                              A() &&
                              ((t = _()),
                              _r.setEditorTimeout(a, function () {
                                  t();
                              }));
                      }),
                      s(),
                      a.on("SetContent ExecCommand", function (e) {
                          ("setcontent" !== e.type && "mceInsertLink" !== e.command) ||
                              p(b.select("a"), function (e) {
                                  var t = e.parentNode,
                                      n = b.getRoot();
                                  if (t.lastChild === e) {
                                      for (; t && !b.isBlock(t); ) {
                                          if (t.parentNode.lastChild !== t || t === n) return;
                                          t = t.parentNode;
                                      }
                                      b.add(t, "br", { "data-mce-bogus": 1 });
                                  }
                              });
                      }),
                      c(),
                      d(),
                      i())),
            {
                refreshContentEditable: k,
                isHidden: function () {
                    if (!x || a.removed) return !1;
                    var e = a.selection.getSel();
                    return !e || !e.rangeCount || 0 === e.rangeCount;
                },
            }
        );
        function _() {
            var e = b.getAttribs(y.getStart().cloneNode(!1));
            return function () {
                var t = y.getStart();
                t !== a.getBody() &&
                    (b.setAttrib(t, "style", null),
                    p(e, function (e) {
                        t.setAttributeNode(e.cloneNode(!0));
                    }));
            };
        }
        function A() {
            return !y.isCollapsed() && b.getParent(y.getStart(), b.isBlock) !== b.getParent(y.getEnd(), b.isBlock);
        }
        function R(e) {
            var t = b.create("body"),
                n = e.cloneContents();
            return t.appendChild(n), y.serializer.serialize(t, { format: "html" });
        }
    }
    function f1(e) {
        return ae(e, function (e) {
            return !1 === b(e);
        });
    }
    function d1(e) {
        var t = e.settings,
            n = e.editorUpload.blobCache;
        return f1({
            allow_conditional_comments: t.allow_conditional_comments,
            allow_html_data_urls: t.allow_html_data_urls,
            allow_svg_data_urls: t.allow_svg_data_urls,
            allow_html_in_named_anchor: t.allow_html_in_named_anchor,
            allow_script_urls: t.allow_script_urls,
            allow_unsafe_link_target: t.allow_unsafe_link_target,
            convert_fonts_to_spans: t.convert_fonts_to_spans,
            fix_list_elements: t.fix_list_elements,
            font_size_legacy_values: t.font_size_legacy_values,
            forced_root_block: t.forced_root_block,
            forced_root_block_attrs: t.forced_root_block_attrs,
            padd_empty_with_br: t.padd_empty_with_br,
            preserve_cdata: t.preserve_cdata,
            remove_trailing_brs: t.remove_trailing_brs,
            inline_styles: t.inline_styles,
            root_name: e.inline ? e.getElement().nodeName.toLowerCase() : void 0,
            validate: !0,
            blob_cache: n,
            document: e.getDoc(),
            images_dataimg_filter: t.images_dataimg_filter,
        });
    }
    function m1(e) {
        var t, u, n;
        e.bindPendingEventDelegates(),
            (e.initialized = !0),
            e.fire("Init"),
            e.focus(!0),
            (n = (u = e).dom.getRoot()),
            u.inline ||
                (Tl(u) && u.selection.getStart(!0) !== n) ||
                ef(n).each(function (e) {
                    var t,
                        n,
                        r,
                        o,
                        i = e.getNode(),
                        a = cn(i) ? ef(i).getOr(e) : e;
                    xt.browser.isIE() ? ((t = u), (n = a.toRange()), (r = Nt.fromDom(t.getBody())), (o = (ad(t) ? ve.from(n) : ve.none()).map(ud).filter(id(r))), (t.bookmark = o.isSome() ? o : t.bookmark)) : u.selection.setRng(a.toRange());
                }),
            e.nodeChanged({ initial: !0 }),
            e.execCallback("init_instance_callback", e),
            (t = e).settings.auto_focus &&
                _r.setEditorTimeout(
                    t,
                    function () {
                        var e = !0 === t.settings.auto_focus ? t : t.editorManager.get(t.settings.auto_focus);
                        e.destroyed || e.focus();
                    },
                    100
                );
    }
    function g1(e) {
        return (e.inline ? e.ui : e.dom).styleSheetLoader;
    }
    function p1(e) {
        function t() {
            o.unloadAll(a), e.inline || e.ui.styleSheetLoader.unloadAll(i);
        }
        function n() {
            e.removed ? t() : e.on("remove", t);
        }
        var r,
            o = g1(e),
            i = Ds(e),
            a = e.contentCSS;
        0 < e.contentStyles.length &&
            ((r = ""),
            Et.each(e.contentStyles, function (e) {
                r += e + "\r\n";
            }),
            e.dom.addStyle(r));
        var u,
            s,
            c,
            l,
            f,
            d,
            m,
            g,
            p,
            h = kr
                .all(
                    ((u = e),
                    (s = a),
                    (c = i),
                    (l = [
                        new kr(function (e, t) {
                            return g1(u).loadAll(s, e, t);
                        }),
                    ]),
                    u.inline
                        ? l
                        : l.concat([
                              new kr(function (e, t) {
                                  return u.ui.styleSheetLoader.loadAll(c, e, t);
                              }),
                          ]))
                )
                .then(n)
                .catch(n);
        return (
            e.settings.content_style &&
                ((d = (f = e).settings.content_style),
                (m = Nt.fromDom(f.getBody())),
                (g = jt(Bn(m))),
                pn((p = Nt.fromTag("style")), "type", "text/css"),
                Pn(p, Nt.fromText(d)),
                Pn(g, p),
                f.on("remove", function () {
                    Ln(p);
                })),
            h
        );
    }
    function h1(e) {
        var t;
        !0 !== e.removed && (mh((t = e)) || t.load({ initial: !0, format: "html" }), (t.startContent = t.getContent({ format: "raw" })), m1(e));
    }
    function v1(t, e) {
        var n = t.settings,
            r = t.getElement(),
            o = t.getDoc();
        n.inline || (t.getElement().style.visibility = t.orgVisibility),
            e || t.inline || (o.open(), o.write(t.iframeHTML), o.close()),
            t.inline && (L1.addClass(r, "mce-content-body"), (t.contentDocument = o = document), (t.contentWindow = window), (t.bodyElement = r), (t.contentAreaContainer = r));
        var u,
            i,
            a,
            s,
            c,
            l,
            f,
            d,
            m,
            g,
            p,
            h = t.getBody();
        (h.disabled = !0),
            (t.readonly = !!n.readonly),
            t.readonly || (t.inline && "static" === L1.getStyle(h, "position", !0) && (h.style.position = "relative"), (h.contentEditable = t.getParam("content_editable_state", !0))),
            (h.disabled = !1),
            (t.editorUpload = Kv(t)),
            (t.schema = to(n)),
            (t.dom = Ja(o, {
                keep_values: !0,
                url_converter: t.convertURL,
                url_converter_scope: t,
                hex_colors: n.force_hex_style_colors,
                update_styles: !0,
                root_element: t.inline ? t.getBody() : null,
                collect: function () {
                    return t.inline;
                },
                schema: t.schema,
                contentCssCors: t.getParam("content_css_cors", !1, "boolean"),
                referrerPolicy: _s(t),
                onSetAttrib: function (e) {
                    t.fire("SetAttrib", e);
                },
            })),
            (t.parser =
                ((i = $h(d1((u = t)), u.schema)).addAttributeFilter("src,href,style,tabindex", function (e, t) {
                    for (var n, r, o = e.length, i = u.dom, a = "data-mce-" + t; o--; )
                        (r = (n = e[o]).attr(t)) &&
                            !n.attr(a) &&
                            0 !== r.indexOf("data:") &&
                            0 !== r.indexOf("blob:") &&
                            ("style" === t ? ((r = i.serializeStyle(i.parseStyle(r), n.name)).length || (r = null), n.attr(a, r), n.attr(t, r)) : "tabindex" === t ? (n.attr(a, r), n.attr(t, null)) : n.attr(a, u.convertURL(r, t, n.name)));
                }),
                i.addNodeFilter("script", function (e) {
                    for (var t = e.length; t--; ) {
                        var n = e[t],
                            r = n.attr("type") || "no/type";
                        0 !== r.indexOf("mce-") && n.attr("type", "mce-" + r);
                    }
                }),
                u.settings.preserve_cdata &&
                    i.addNodeFilter("#cdata", function (e) {
                        for (var t = e.length; t--; ) {
                            var n = e[t];
                            (n.type = 8), (n.name = "#comment"), (n.value = "[CDATA[" + u.dom.encode(n.value) + "]]");
                        }
                    }),
                i.addNodeFilter("p,h1,h2,h3,h4,h5,h6,div", function (e) {
                    for (var t = e.length, n = u.schema.getNonEmptyElements(); t--; ) {
                        var r = e[t];
                        r.isEmpty(n) && 0 === r.getAll("br").length && (r.append(new Ud("br", 1)).shortEnded = !0);
                    }
                }),
                i)),
            (t.serializer = Xh(
                ((a = t.settings),
                _e(
                    _e({}, d1(t)),
                    f1({
                        url_converter: a.url_converter,
                        url_converter_scope: a.url_converter_scope,
                        element_format: a.element_format,
                        entities: a.entities,
                        entity_encoding: a.entity_encoding,
                        indent: a.indent,
                        indent_after: a.indent_after,
                        indent_before: a.indent_before,
                        block_elements: a.block_elements,
                        boolean_attributes: a.boolean_attributes,
                        custom_elements: a.custom_elements,
                        extended_valid_elements: a.extended_valid_elements,
                        invalid_elements: a.invalid_elements,
                        invalid_styles: a.invalid_styles,
                        move_caret_before_on_enter_elements: a.move_caret_before_on_enter_elements,
                        non_empty_elements: a.non_empty_elements,
                        schema: a.schema,
                        self_closing_elements: a.self_closing_elements,
                        short_ended_elements: a.short_ended_elements,
                        special: a.special,
                        text_block_elements: a.text_block_elements,
                        text_inline_elements: a.text_inline_elements,
                        valid_children: a.valid_children,
                        valid_classes: a.valid_classes,
                        valid_elements: a.valid_elements,
                        valid_styles: a.valid_styles,
                        verify_html: a.verify_html,
                        whitespace_elements: a.whitespace_elements,
                    })
                )),
                t
            )),
            (t.selection = Lh(t.dom, t.getWin(), t.serializer, t)),
            (t.annotator = Ml(t)),
            (t.formatter = Jv(t)),
            (t.undoManager = Zv(t)),
            (t._nodeChangeDispatcher = new e1(t)),
            (t._selectionOverrides = c1(t)),
            (d = t),
            (m = cu()),
            (g = ru(!1)),
            (p = fu(function (e) {
                d.fire("longpress", _e(_e({}, e), { type: "longpress" })), g.set(!0);
            }, 400)),
            d.on(
                "touchstart",
                function (n) {
                    S0(n).each(function (e) {
                        p.cancel();
                        var t = { x: e.clientX, y: e.clientY, target: n.target };
                        p.throttle(n), g.set(!1), m.set(t);
                    });
                },
                !0
            ),
            d.on(
                "touchmove",
                function (e) {
                    p.cancel(),
                        S0(e).each(function (i) {
                            m.on(function (e) {
                                var t = i,
                                    n = e,
                                    r = Math.abs(t.clientX - n.x),
                                    o = Math.abs(t.clientY - n.y);
                                (5 < r || 5 < o) && (m.clear(), g.set(!1), d.fire("longpresscancel"));
                            });
                        });
                },
                !0
            ),
            d.on(
                "touchend touchcancel",
                function (t) {
                    p.cancel(),
                        "touchcancel" !== t.type &&
                            m
                                .get()
                                .filter(function (e) {
                                    return e.target.isEqualNode(t.target);
                                })
                                .each(function () {
                                    g.get() ? t.preventDefault() : d.fire("tap", _e(_e({}, t), { type: "tap" }));
                                });
                },
                !0
            ),
            (l = c = t).on("click", function (e) {
                l.dom.getParent(e.target, "details") && e.preventDefault();
            }),
            (f = c).parser.addNodeFilter("details", function (e) {
                Y(e, function (e) {
                    e.attr("data-mce-open", e.attr("open")), e.attr("open", "open");
                });
            }),
            f.serializer.addNodeFilter("details", function (e) {
                Y(e, function (e) {
                    var t = e.attr("data-mce-open");
                    e.attr("open", X(t) ? t : null), e.attr("data-mce-open", null);
                });
            }),
            mh(t) ||
                (s = t).on("click", function (e) {
                    var t, n, r, o, i;
                    3 <= e.detail &&
                        ((r = (t = s).selection.getRng()),
                        (o = as.fromRangeStart(r)),
                        (i = as.fromRangeEnd(r)),
                        !as.isElementPosition(o) ||
                            (n1((n = o.container())) &&
                                ef(n).each(function (e) {
                                    return r.setStart(e.container(), e.offset());
                                })),
                        !as.isElementPosition(i) ||
                            (n1((n = o.container())) &&
                                tf(n).each(function (e) {
                                    return r.setEnd(e.container(), e.offset());
                                })),
                        t.selection.setRng(vg(r)));
                });
        var v,
            b,
            y,
            C,
            x,
            w,
            S,
            E,
            N,
            k = mh((v = t)) ? ru(null) : PC(v);
        (N = k),
            (E = t).addCommand("delete", function () {
                var e,
                    t = N;
                x0((e = E)) || Pb(e, !1) || Ab(e, !1) || l0(e, t, !1) || vb(e, !1) || hg(e) || Lb(e, !1) || p0(e, !1) || Cb(e) || m0(e, !1) || (w0(e, "Delete"), ub(e));
            }),
            E.addCommand("forwardDelete", function () {
                var e,
                    t = N;
                Pb((e = E), !0) || Ab(e, !0) || l0(e, t, !0) || vb(e, !0) || hg(e) || Lb(e, !0) || p0(e, !0) || Cb(e) || m0(e, !0) || w0(e, "ForwardDelete");
            }),
            Ss((b = t)) && b.on("NodeChange", A(N0, b)),
            (C = (y = t).dom),
            (x = Ss(y)),
            (w = y.getParam("placeholder", gc.getAttrib(y.getElement(), "placeholder"), "string")),
            (S = function (e, t) {
                var n, r, o;
                !(function (e) {
                    if (eb(e)) {
                        var t = e.keyCode;
                        return !tb(e) && (Bf.metaKeyPressed(e) || e.altKey || (112 <= t && t <= 123) || D(my, t));
                    }
                })(e) &&
                    ((n = y.getBody()),
                    (r =
                        !(eb((o = e)) && !(tb(o) || ("keyup" === o.type && 229 === o.keyCode))) &&
                        (function (e, t, n) {
                            if (Wr(Nt.fromDom(t), !1)) {
                                var r = "" === n,
                                    o = t.firstElementChild;
                                return !o || (!e.getStyle(t.firstElementChild, "padding-left") && !e.getStyle(t.firstElementChild, "padding-right") && (r ? !e.isBlock(o) : n === o.nodeName.toLowerCase()));
                            }
                            return !1;
                        })(C, n, x)),
                    (("" !== C.getAttrib(n, gy)) === r && !t) ||
                        (C.setAttrib(n, gy, r ? w : null), C.setAttrib(n, "aria-placeholder", r ? w : null), y.fire("PlaceholderToggle", { state: r }), y.on(r ? "keydown" : "keyup", S), y.off(r ? "keyup" : "keydown", S)));
            }),
            w &&
                y.on("init", function (e) {
                    S(e, !0),
                        y.on("change SetContent ExecCommand", S),
                        y.on("paste", function (e) {
                            return _r.setEditorTimeout(y, function () {
                                return S(e);
                            });
                        });
                });
        var _ = gh(t);
        (function (t) {
            var e = t.settings,
                n = t.getDoc(),
                r = t.getBody();
            t.fire("PreInit"), e.browser_spellcheck || e.gecko_spellcheck || ((n.body.spellcheck = !1), L1.setAttrib(r, "spellcheck", "false")), (t.quirks = l1(t)), t.fire("PostRender");
            var o = t.getParam("directionality", uu.isRtl() ? "rtl" : void 0);
            void 0 !== o && (r.dir = o),
                e.protect &&
                    t.on("BeforeSetContent", function (t) {
                        Et.each(e.protect, function (e) {
                            t.content = t.content.replace(e, function (e) {
                                return "\x3c!--mce:protected " + escape(e) + "--\x3e";
                            });
                        });
                    }),
                t.on("SetContent", function () {
                    t.addVisual(t.getBody());
                }),
                t.on("compositionstart compositionend", function (e) {
                    t.composing = "compositionstart" === e.type;
                });
        })(t),
            _.fold(
                function () {
                    p1(t).then(function () {
                        return h1(t);
                    });
                },
                function (e) {
                    t.setProgressState(!0),
                        p1(t).then(function () {
                            e().then(
                                function (e) {
                                    t.setProgressState(!1), h1(t);
                                },
                                function (e) {
                                    t.notificationManager.open({ type: "error", text: String(e) }), h1(t);
                                }
                            );
                        });
                }
            );
    }
    function b1(e, t) {
        var n,
            r,
            o,
            i,
            a = e.translate("Rich Text Area"),
            u =
                ((n = e.id),
                (r = a),
                t.height,
                (o = e.getParam("iframe_attrs", {})),
                hn((i = Nt.fromTag("iframe")), o),
                hn(i, { id: n + "_ifr", frameBorder: "0", allowTransparency: "true", title: r }),
                gu(i, "tox-edit-area__iframe"),
                i.dom);
        u.onload = function () {
            (u.onload = null), e.fire("load");
        };
        var s = (function (e, t) {
            if (document.domain !== window.location.hostname && xt.browser.isIE()) {
                var n = jv("mce");
                e[n] = function () {
                    v1(e);
                };
                var r = 'javascript:(function(){document.open();document.domain="' + document.domain + '";var ed = window.parent.tinymce.get("' + e.id + '");document.write(ed.iframeHTML);document.close();ed.' + n + "(true);})()";
                return I1.setAttrib(t, "src", r), !0;
            }
            return !1;
        })(e, u);
        return (
            (e.contentAreaContainer = t.iframeContainer),
            (e.iframeElement = u),
            (e.iframeHTML = (function (e) {
                var t = e.getParam("doctype", "<!DOCTYPE html>") + "<html><head>";
                e.getParam("document_base_url", "") !== e.documentBaseUrl && (t += '<base href="' + e.documentBaseURI.getURI() + '" />'), (t += '<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />');
                var n = xs(e, "body_id", "tinymce"),
                    r = xs(e, "body_class", ""),
                    o = e.translate(e.getParam("iframe_aria_text", "Rich Text Area. Press ALT-0 for help.", "string"));
                return (
                    ws(e) && (t += '<meta http-equiv="Content-Security-Policy" content="' + ws(e) + '" />'),
                    t + ('</head><body id="' + n + '" class="mce-content-body ' + r + '" data-id="' + e.id) + '" aria-label="' + o + '"><br></body></html>'
                );
            })(e)),
            I1.add(t.iframeContainer, u),
            s
        );
    }
    function y1(e) {
        return e.replace(/^\-/, "");
    }
    function C1(e) {
        return { editorContainer: e, iframeContainer: e, api: {} };
    }
    function x1(e) {
        var t,
            n,
            r,
            o,
            i,
            a,
            u,
            s = e.getElement();
        return (
            (e.orgDisplay = s.style.display),
            X(Bs(e))
                ? e.theme.renderUI()
                : y(Bs(e))
                ? ((n = (t = e).getElement()),
                  (r = Bs(t)(t, n)).editorContainer.nodeType && (r.editorContainer.id = r.editorContainer.id || t.id + "_parent"),
                  r.iframeContainer && r.iframeContainer.nodeType && (r.iframeContainer.id = r.iframeContainer.id || t.id + "_iframecontainer"),
                  (r.height = r.iframeHeight || n.offsetHeight),
                  r)
                : ((u = (o = e).getElement()), o.inline ? C1(null) : ((i = u), (a = M1.create("div")), M1.insertAfter(a, i), C1(a)))
        );
    }
    function w1(e) {
        var n, t, r, o, i, a, u, s;
        e.fire("ScriptsLoaded"),
            (n = e),
            (t = Et.trim(ks(n))),
            (r = n.ui.registry.getAll().icons),
            ne(_e(_e({}, _v.get("default").icons), _v.get(t).icons), function (e, t) {
                Ne(r, t) || n.ui.registry.addIcon(t, e);
            }),
            (a = Bs((o = e))),
            X(a) ? ((o.settings.theme = y1(a)), (i = Bv.get(a)), (o.theme = new i(o, Bv.urls[a])), o.theme.init && o.theme.init(o, Bv.urls[a] || o.documentBaseUrl.replace(/\/$/, ""), o.$)) : (o.theme = {}),
            (s = []),
            Et.each(Ls((u = e)).split(/[ ,]/), function (e) {
                F1(u, s, y1(e));
            });
        var c = x1(e),
            l = e,
            f = ve.from(c.api).getOr({}),
            d = {
                show: ve.from(f.show).getOr(te),
                hide: ve.from(f.hide).getOr(te),
                disable: ve.from(f.disable).getOr(te),
                isDisabled: ve.from(f.isDisabled).getOr(R),
                enable: function () {
                    l.mode.isReadOnly() || ve.from(f.enable).map(x);
                },
            };
        l.ui = _e(_e({}, l.ui), d);
        var m,
            g,
            p,
            h = { editorContainer: c.editorContainer, iframeContainer: c.iframeContainer };
        return (
            (e.editorContainer = h.editorContainer || null),
            zv(e),
            e.inline
                ? v1(e)
                : ((p = b1((m = e), (g = h))),
                  g.editorContainer && ((I1.get(g.editorContainer).style.display = m.orgDisplay), (m.hidden = I1.isHidden(g.editorContainer))),
                  (m.getElement().style.display = "none"),
                  I1.setAttrib(m.id, "aria-hidden", "true"),
                  void (p || v1(m)))
        );
    }
    function S1(e) {
        return "-" === e.charAt(0);
    }
    function E1(t, e, n) {
        return ve
            .from(e)
            .filter(function (e) {
                return 0 < e.length && !_v.has(e);
            })
            .map(function (e) {
                return { url: t.editorManager.baseURL + "/icons/" + e + "/icons" + n + ".js", name: ve.some(e) };
            });
    }
    function N1(c, l) {
        var e,
            t,
            f = tu.ScriptLoader,
            n = f,
            r = l,
            o = function () {
                var r, o, t, n, e, i, a, u, s;
                (e = f),
                    (u = As((i = c))),
                    (s = i.getParam("language_url", "", "string")),
                    !1 === uu.hasCode(u) &&
                        "en" !== u &&
                        ((a = "" !== s ? s : i.editorManager.baseURL + "/langs/" + u + ".js"),
                        e.add(a, te, void 0, function () {
                            Mv(i, "LanguageLoadError", Fv("language", a, u));
                        })),
                    (t = f),
                    Y(
                        (function (e) {
                            for (
                                var t = [],
                                    n = function (e) {
                                        t.push(e);
                                    },
                                    r = 0;
                                r < e.length;
                                r++
                            )
                                e[r].each(n);
                            return t;
                        })([
                            E1((n = c), "default", l),
                            ve
                                .from(n.getParam("icons_url", "", "string"))
                                .filter(function (e) {
                                    return 0 < e.length;
                                })
                                .map(function (e) {
                                    return { url: e, name: ve.none() };
                                })
                                .orThunk(function () {
                                    return E1(n, ks(n), "");
                                }),
                        ]),
                        function (e) {
                            t.add(e.url, te, void 0, function () {
                                Mv(n, "IconsLoadError", Fv("icons", e.url, e.name.getOrUndefined()));
                            });
                        }
                    ),
                    (r = c),
                    (o = l),
                    Et.each(r.getParam("external_plugins"), function (e, t) {
                        Ov.load(t, e, te, void 0, function () {
                            Uv(r, e, t);
                        }),
                            (r.settings.plugins += " " + t);
                    }),
                    Et.each(Ls(r).split(/[ ,]/), function (e) {
                        var t, n;
                        (e = Et.trim(e)) &&
                            !Ov.urls[e] &&
                            (S1(e)
                                ? ((e = e.substr(1, e.length)),
                                  (t = Ov.dependencies(e)),
                                  Et.each(t, function (e) {
                                      var t = Ov.createUrl({ prefix: "plugins/", resource: e, suffix: "/plugin" + o + ".js" }, e);
                                      Ov.load(t.resource, t, te, void 0, function () {
                                          Uv(r, t.prefix + t.resource + t.suffix, t.resource);
                                      });
                                  }))
                                : ((n = { prefix: "plugins/", resource: e, suffix: "/plugin" + o + ".js" }),
                                  Ov.load(e, n, te, void 0, function () {
                                      Uv(r, n.prefix + n.resource + n.suffix, e);
                                  })));
                    }),
                    f.loadQueue(
                        function () {
                            c.removed || w1(c);
                        },
                        c,
                        function () {
                            c.removed || w1(c);
                        }
                    );
            },
            i = Bs((e = c));
        X(i)
            ? (S1(i) || Ne(Bv.urls, i) || ((t = e.getParam("theme_url")) ? Bv.load(i, e.documentBaseURI.toAbsolute(t)) : Bv.load(i, "themes/" + i + "/theme" + r + ".js")),
              n.loadQueue(function () {
                  Bv.waitFor(i, o);
              }))
            : o();
    }
    function k1(a) {
        return function (i, e) {
            return ve
                .from(e)
                .map(Nt.fromDom)
                .filter(kn)
                .bind(function (e) {
                    return (
                        (n = a),
                        (t = i),
                        (r = e.dom),
                        Ag(
                            Nt.fromDom(r),
                            function (e) {
                                return wn((t = e), n).orThunk(function () {
                                    return "font" === kt(t)
                                        ? ue(z1, n).bind(function (e) {
                                              return bn(t, e);
                                          })
                                        : ve.none();
                                });
                                var t;
                            },
                            function (e) {
                                return je(Nt.fromDom(t), e);
                            }
                        ).or(((o = e.dom), ve.from(Ja.DOM.getStyle(o, a, !0))))
                    );
                    var n, t, r, o;
                })
                .getOr("");
        };
    }
    function _1(e) {
        return ef(e.getBody()).map(function (e) {
            var t = e.container();
            return jn(t) ? t.parentNode : t;
        });
    }
    function A1(e, t) {
        return (
            (n = e),
            (r = a(ve.some, t)),
            (o = n),
            ve
                .from(o.selection.getRng())
                .bind(function (e) {
                    var t = o.getBody();
                    return e.startContainer === t && 0 === e.startOffset ? ve.none() : ve.from(o.selection.getStart(!0));
                })
                .orThunk(A(_1, n))
                .map(Nt.fromDom)
                .filter(kn)
                .bind(r)
        );
        var n, r, o;
    }
    function R1(e, t) {
        if (/^[0-9.]+$/.test(t)) {
            var n = parseInt(t, 10);
            if (1 <= n && n <= 7) {
                var r = Et.explode(e.getParam("font_size_style_values", "xx-small,x-small,small,medium,large,x-large,xx-large")),
                    o = Et.explode(e.getParam("font_size_classes", ""));
                return o ? o[n - 1] || t : r[n - 1] || t;
            }
            return t;
        }
        return t;
    }
    var D1 = Yn,
        T1 = Xn,
        O1 = function (e) {
            e.on(function (e) {
                o1(e.ghost);
            }),
                e.clear();
        },
        B1 = Xn,
        P1 = Yn,
        L1 = Ja.DOM,
        I1 = Ja.DOM,
        M1 = Ja.DOM,
        F1 = function (t, n, r) {
            var o,
                i,
                a,
                u,
                e = Ov.get(r),
                s = Ov.urls[r] || t.documentBaseUrl.replace(/\/$/, "");
            if (
                ((r = Et.trim(r)),
                e &&
                    -1 === Et.inArray(n, r) &&
                    (Et.each(Ov.dependencies(r), function (e) {
                        F1(t, n, e);
                    }),
                    !t.plugins[r]))
            )
                try {
                    var c = new e(t, s, t.$);
                    (t.plugins[r] = c).init && (c.init(t, s), n.push(r));
                } catch (e) {
                    (i = r), (a = e), vf((o = t), "PluginLoadError", { message: (u = uu.translate(["Failed to initialize plugin: {0}", i])) }), ay(u, a), Iv(o, u);
                }
        },
        U1 = Ja.DOM,
        z1 = { "font-size": "size", "font-family": "face" },
        H1 = k1("font-size"),
        j1 = i(function (e) {
            return e.replace(/[\'\"\\]/g, "").replace(/,\s+/g, ",");
        }, k1("font-family")),
        V1 = Et.each,
        q1 = Et.map,
        $1 = Et.inArray,
        W1 =
            ((K1.prototype.execCommand = function (t, n, r, e) {
                var o,
                    i,
                    a = !1,
                    u = this;
                if (!u.editor.removed) {
                    if (
                        ("mcefocus" !== t.toLowerCase() &&
                            (/^(mceAddUndoLevel|mceEndUndoLevel|mceBeginUndoLevel|mceRepaint)$/.test(t) || (e && e.skip_focus)
                                ? ld((i = u.editor)).each(function (e) {
                                      return i.selection.setRng(e);
                                  })
                                : u.editor.focus()),
                        (e = u.editor.fire("BeforeExecCommand", { command: t, ui: n, value: r })).isDefaultPrevented())
                    )
                        return !1;
                    var s = t.toLowerCase();
                    if ((o = u.commands.exec[s])) return o(s, n, r), u.editor.fire("ExecCommand", { command: t, ui: n, value: r }), !0;
                    if (
                        (V1(this.editor.plugins, function (e) {
                            if (e.execCommand && e.execCommand(t, n, r)) return u.editor.fire("ExecCommand", { command: t, ui: n, value: r }), !(a = !0);
                        }),
                        a)
                    )
                        return a;
                    if (u.editor.theme && u.editor.theme.execCommand && u.editor.theme.execCommand(t, n, r)) return u.editor.fire("ExecCommand", { command: t, ui: n, value: r }), !0;
                    try {
                        a = u.editor.getDoc().execCommand(t, n, r);
                    } catch (e) {}
                    return !!a && (u.editor.fire("ExecCommand", { command: t, ui: n, value: r }), !0);
                }
            }),
            (K1.prototype.queryCommandState = function (e) {
                var t;
                if (!this.editor.quirks.isHidden() && !this.editor.removed) {
                    if (((e = e.toLowerCase()), (t = this.commands.state[e]))) return t(e);
                    try {
                        return this.editor.getDoc().queryCommandState(e);
                    } catch (e) {}
                    return !1;
                }
            }),
            (K1.prototype.queryCommandValue = function (e) {
                var t;
                if (!this.editor.quirks.isHidden() && !this.editor.removed) {
                    if (((e = e.toLowerCase()), (t = this.commands.value[e]))) return t(e);
                    try {
                        return this.editor.getDoc().queryCommandValue(e);
                    } catch (e) {}
                }
            }),
            (K1.prototype.addCommands = function (e, n) {
                void 0 === n && (n = "exec");
                var r = this;
                V1(e, function (t, e) {
                    V1(e.toLowerCase().split(","), function (e) {
                        r.commands[n][e] = t;
                    });
                });
            }),
            (K1.prototype.addCommand = function (e, o, i) {
                var a = this;
                (e = e.toLowerCase()),
                    (this.commands.exec[e] = function (e, t, n, r) {
                        return o.call(i || a.editor, t, n, r);
                    });
            }),
            (K1.prototype.queryCommandSupported = function (e) {
                if (((e = e.toLowerCase()), this.commands.exec[e])) return !0;
                try {
                    return this.editor.getDoc().queryCommandSupported(e);
                } catch (e) {}
                return !1;
            }),
            (K1.prototype.addQueryStateHandler = function (e, t, n) {
                var r = this;
                (e = e.toLowerCase()),
                    (this.commands.state[e] = function () {
                        return t.call(n || r.editor);
                    });
            }),
            (K1.prototype.addQueryValueHandler = function (e, t, n) {
                var r = this;
                (e = e.toLowerCase()),
                    (this.commands.value[e] = function () {
                        return t.call(n || r.editor);
                    });
            }),
            (K1.prototype.hasCustomCommand = function (e) {
                return (e = e.toLowerCase()), !!this.commands.exec[e];
            }),
            (K1.prototype.execNativeCommand = function (e, t, n) {
                return void 0 === t && (t = !1), void 0 === n && (n = null), this.editor.getDoc().execCommand(e, t, n);
            }),
            (K1.prototype.isFormatMatch = function (e) {
                return this.editor.formatter.match(e);
            }),
            (K1.prototype.toggleFormat = function (e, t) {
                this.editor.formatter.toggle(e, t), this.editor.nodeChanged();
            }),
            (K1.prototype.storeSelection = function (e) {
                this.selectionBookmark = this.editor.selection.getBookmark(e);
            }),
            (K1.prototype.restoreSelection = function () {
                this.editor.selection.moveToBookmark(this.selectionBookmark);
            }),
            (K1.prototype.setupCommands = function (u) {
                var o = this;
                function e(r) {
                    return function () {
                        var e = u.selection,
                            t = e.isCollapsed() ? [u.dom.getParent(e.getNode(), u.dom.isBlock)] : e.getSelectedBlocks(),
                            n = q1(t, function (e) {
                                return !!u.formatter.matchNode(e, r);
                            });
                        return -1 !== $1(n, !0);
                    };
                }
                this.addCommands({
                    "mceResetDesignMode,mceBeginUndoLevel": te,
                    "mceEndUndoLevel,mceAddUndoLevel": function () {
                        u.undoManager.add();
                    },
                    mceFocus: function (e, t, n) {
                        var r, o;
                        (o = n),
                            (r = u).removed ||
                                (o
                                    ? Md
                                    : function (t) {
                                          var e = t.selection,
                                              n = t.getBody(),
                                              r = e.getRng();
                                          t.quirks.refreshContentEditable(),
                                              void 0 !== t.bookmark &&
                                                  !1 === vd(t) &&
                                                  ld(t).each(function (e) {
                                                      t.selection.setRng(e), (r = e);
                                                  });
                                          var o,
                                              i,
                                              a =
                                                  ((o = t),
                                                  (i = e.getNode()),
                                                  o.dom.getParent(i, function (e) {
                                                      return "true" === o.dom.getContentEditable(e);
                                                  }));
                                          if (t.$.contains(n, a)) return hd(a), pd(t, r), Md(t);
                                          t.inline || (xt.opera || hd(n), t.getWin().focus()), (xt.gecko || t.inline) && (hd(n), pd(t, r)), Md(t);
                                      })(r);
                    },
                    "Cut,Copy,Paste": function (e) {
                        var t,
                            n,
                            r = u.getDoc();
                        try {
                            o.execNativeCommand(e);
                        } catch (e) {
                            t = !0;
                        }
                        (!(t = ("paste" === e && !r.queryCommandEnabled(e)) || t) && r.queryCommandSupported(e)) ||
                            ((n = u.translate("Your browser doesn't support direct access to the clipboard. Please use the Ctrl+X/C/V keyboard shortcuts instead.")),
                            xt.mac && (n = n.replace(/Ctrl\+/g, "\u2318+")),
                            u.notificationManager.open({ text: n, type: "error" }));
                    },
                    unlink: function () {
                        var e;
                        u.selection.isCollapsed() ? (e = u.dom.getParent(u.selection.getStart(), "a")) && u.dom.remove(e, !0) : u.formatter.remove("link");
                    },
                    "JustifyLeft,JustifyCenter,JustifyRight,JustifyFull,JustifyNone": function (e) {
                        var t = e.substring(7);
                        "full" === t && (t = "justify"),
                            V1("left,center,right,justify".split(","), function (e) {
                                t !== e && u.formatter.remove("align" + e);
                            }),
                            "none" !== t && o.toggleFormat("align" + t);
                    },
                    "InsertUnorderedList,InsertOrderedList": function (e) {
                        var t;
                        o.execNativeCommand(e);
                        var n = u.dom.getParent(u.selection.getNode(), "ol,ul");
                        n && ((t = n.parentNode), /^(H[1-6]|P|ADDRESS|PRE)$/.test(t.nodeName) && (o.storeSelection(), u.dom.split(t, n), o.restoreSelection()));
                    },
                    "Bold,Italic,Underline,Strikethrough,Superscript,Subscript": function (e) {
                        o.toggleFormat(e);
                    },
                    "ForeColor,HiliteColor": function (e, t, n) {
                        o.toggleFormat(e, { value: n });
                    },
                    FontName: function (e, t, n) {
                        var r, o;
                        (o = R1((r = u), n)),
                            r.formatter.toggle("fontname", {
                                value: T(o.split(/\s*,\s*/), function (e) {
                                    return -1 === e.indexOf(" ") || Ge(e, '"') || Ge(e, "'") ? e : "'" + e + "'";
                                }).join(","),
                            }),
                            r.nodeChanged();
                    },
                    FontSize: function (e, t, n) {
                        var r;
                        (r = u).formatter.toggle("fontsize", { value: R1(r, n) }), r.nodeChanged();
                    },
                    LineHeight: function (e, t, n) {
                        var r;
                        (r = u).formatter.toggle("lineheight", { value: String(n) }), r.nodeChanged();
                    },
                    Lang: function (e, t, n) {
                        o.toggleFormat(e, { value: n.code, customValue: n.customCode });
                    },
                    RemoveFormat: function (e) {
                        u.formatter.remove(e);
                    },
                    mceBlockQuote: function () {
                        o.toggleFormat("blockquote");
                    },
                    FormatBlock: function (e, t, n) {
                        return o.toggleFormat(n || "p");
                    },
                    mceCleanup: function () {
                        var e = u.selection.getBookmark();
                        u.setContent(u.getContent()), u.selection.moveToBookmark(e);
                    },
                    mceRemoveNode: function (e, t, n) {
                        var r = n || u.selection.getNode();
                        r !== u.getBody() && (o.storeSelection(), u.dom.remove(r, !0), o.restoreSelection());
                    },
                    mceSelectNodeDepth: function (e, t, n) {
                        var r = 0;
                        u.dom.getParent(
                            u.selection.getNode(),
                            function (e) {
                                if (1 === e.nodeType && r++ === n) return u.selection.select(e), !1;
                            },
                            u.getBody()
                        );
                    },
                    mceSelectNode: function (e, t, n) {
                        u.selection.select(n);
                    },
                    mceInsertContent: function (e, t, n) {
                        var r, o, i, a;
                        (r = u),
                            (o = (function (e) {
                                if ("string" == typeof e) return { content: e, details: {} };
                                var t = Et.extend({ paste: e.paste, data: { paste: e.paste } }, e);
                                return { content: e.content, details: t };
                            })(n)),
                            (i = o.content),
                            (a = o.details),
                            ph(r).editor.insertContent(i, a);
                    },
                    mceInsertRawHTML: function (e, t, n) {
                        u.selection.setContent("tiny_mce_marker");
                        var r = u.getContent();
                        u.setContent(
                            r.replace(/tiny_mce_marker/g, function () {
                                return n;
                            })
                        );
                    },
                    mceInsertNewLine: function (e, t, n) {
                        _C(u, n);
                    },
                    mceToggleFormat: function (e, t, n) {
                        o.toggleFormat(n);
                    },
                    mceSetContent: function (e, t, n) {
                        u.setContent(n);
                    },
                    "Indent,Outdent": function (e) {
                        C0(u, e);
                    },
                    mceRepaint: te,
                    InsertHorizontalRule: function () {
                        u.execCommand("mceInsertContent", !1, "<hr />");
                    },
                    mceToggleVisualAid: function () {
                        (u.hasVisual = !u.hasVisual), u.addVisual();
                    },
                    mceReplaceContent: function (e, t, n) {
                        u.execCommand("mceInsertContent", !1, n.replace(/\{\$selection\}/g, u.selection.getContent({ format: "text" })));
                    },
                    mceInsertLink: function (e, t, n) {
                        "string" == typeof n && (n = { href: n });
                        var r = u.dom.getParent(u.selection.getNode(), "a");
                        (n.href = n.href.replace(/ /g, "%20")), (r && n.href) || u.formatter.remove("link"), n.href && u.formatter.apply("link", n, r);
                    },
                    selectAll: function () {
                        var e,
                            t = u.dom.getParent(u.selection.getStart(), Xn);
                        t && ((e = u.dom.createRng()).selectNodeContents(t), u.selection.setRng(e));
                    },
                    mceNewDocument: function () {
                        u.setContent("");
                    },
                    InsertLineBreak: function (e, t, n) {
                        return pC(u, n), !0;
                    },
                }),
                    o.addCommands(
                        {
                            JustifyLeft: e("alignleft"),
                            JustifyCenter: e("aligncenter"),
                            JustifyRight: e("alignright"),
                            JustifyFull: e("alignjustify"),
                            "Bold,Italic,Underline,Strikethrough,Superscript,Subscript": function (e) {
                                return o.isFormatMatch(e);
                            },
                            mceBlockQuote: function () {
                                return o.isFormatMatch("blockquote");
                            },
                            Outdent: function () {
                                return b0(u);
                            },
                            "InsertUnorderedList,InsertOrderedList": function (e) {
                                var t = u.dom.getParent(u.selection.getNode(), "ul,ol");
                                return t && (("insertunorderedlist" === e && "UL" === t.tagName) || ("insertorderedlist" === e && "OL" === t.tagName));
                            },
                        },
                        "state"
                    ),
                    o.addCommands({
                        Undo: function () {
                            u.undoManager.undo();
                        },
                        Redo: function () {
                            u.undoManager.redo();
                        },
                    }),
                    o.addQueryValueHandler(
                        "FontName",
                        function () {
                            return A1((t = u), function (e) {
                                return j1(t.getBody(), e.dom);
                            }).getOr("");
                            var t;
                        },
                        this
                    ),
                    o.addQueryValueHandler(
                        "FontSize",
                        function () {
                            return A1((t = u), function (e) {
                                return H1(t.getBody(), e.dom);
                            }).getOr("");
                            var t;
                        },
                        this
                    ),
                    o.addQueryValueHandler(
                        "LineHeight",
                        function () {
                            return A1((t = u), function (n) {
                                var e = Nt.fromDom(t.getBody());
                                return Ag(
                                    n,
                                    function (e) {
                                        return wn(e, "line-height");
                                    },
                                    A(je, e)
                                ).getOrThunk(function () {
                                    var e = parseFloat(xn(n, "line-height")),
                                        t = parseFloat(xn(n, "font-size"));
                                    return String(e / t);
                                });
                            }).getOr("");
                            var t;
                        },
                        this
                    );
            }),
            K1);
    function K1(e) {
        (this.commands = { state: {}, exec: {}, value: {} }), (this.editor = e), this.setupCommands(e);
    }
    function X1(e, t, n) {
        var r, o, i, a, u, s;
        pu(e, t) && !1 === n
            ? ((o = t),
              mu((r = e))
                  ? r.dom.classList.remove(o)
                  : ((u = o),
                    0 <
                    (s = U(du((a = r), "class"), function (e) {
                        return e !== u;
                    })).length
                        ? pn(a, "class", s.join(" "))
                        : yn(a, "class")),
              0 === (mu((i = r)) ? i.dom.classList : du(i, "class")).length && yn(i, "class"))
            : n && gu(e, t);
    }
    function Y1(e, t, n) {
        try {
            e.getDoc().execCommand(t, !1, String(n));
        } catch (e) {}
    }
    function G1(e, t) {
        e.dom.contentEditable = t ? "true" : "false";
    }
    function J1(e, t) {
        var n,
            r,
            o = Nt.fromDom(e.getBody());
        X1(o, "mce-content-readonly", t),
            t
                ? (e.selection.controlSelection.hideResizeRect(),
                  e._selectionOverrides.hideFakeCaret(),
                  ve.from(e.selection.getNode()).each(function (e) {
                      e.removeAttribute("data-mce-selected");
                  }),
                  G1(o, !(e.readonly = !0)),
                  Y(hu(o, '*[contenteditable="true"]'), function (e) {
                      pn(e, ex, "true"), G1(e, !1);
                  }))
                : (G1(o, !(e.readonly = !1)),
                  Y(hu(o, "*[" + ex + '="true"]'), function (e) {
                      yn(e, ex), G1(e, !0);
                  }),
                  Y1(e, "StyleWithCSS", !1),
                  Y1(e, "enableInlineTableEditing", !1),
                  Y1(e, "enableObjectResizing", !1),
                  (vd((n = e)) ||
                      ((r = n),
                      td(Bn(Nt.fromDom(r.getElement())))
                          .filter(function (e) {
                              return !(void 0 !== (t = e.dom.classList) && (t.contains("tox-edit-area") || t.contains("tox-edit-area__iframe") || t.contains("mce-content-body"))) && dd(r, e.dom);
                              var t;
                          })
                          .isSome())) &&
                      e.focus(),
                  e.selection.setRng(e.selection.getRng()),
                  e.nodeChanged());
    }
    function Q1(e) {
        return e.readonly;
    }
    function Z1(t) {
        t.parser.addAttributeFilter("contenteditable", function (e) {
            Q1(t) &&
                Y(e, function (e) {
                    e.attr(ex, e.attr("contenteditable")), e.attr("contenteditable", "false");
                });
        }),
            t.serializer.addAttributeFilter(ex, function (e) {
                Q1(t) &&
                    Y(e, function (e) {
                        e.attr("contenteditable", e.attr(ex));
                    });
            }),
            t.serializer.addTempAttr(ex);
    }
    var ex = "data-mce-contenteditable",
        tx = Et.makeMap(
            "focus blur focusin focusout click dblclick mousedown mouseup mousemove mouseover beforepaste paste cut copy selectionchange mouseout mouseenter mouseleave wheel keydown keypress keyup input beforeinput contextmenu dragstart dragend dragover draggesture dragdrop drop drag submit compositionstart compositionend compositionupdate touchstart touchmove touchend touchcancel",
            " "
        ),
        nx =
            ((rx.isNative = function (e) {
                return !!tx[e.toLowerCase()];
            }),
            (rx.prototype.fire = function (e, t) {
                var n = e.toLowerCase(),
                    r = io(n, t || {}, this.scope);
                this.settings.beforeFire && this.settings.beforeFire(r);
                var o = this.bindings[n];
                if (o)
                    for (var i = 0, a = o.length; i < a; i++) {
                        var u = o[i];
                        if (!u.removed) {
                            if ((u.once && this.off(n, u.func), r.isImmediatePropagationStopped())) return r;
                            if (!1 === u.func.call(this.scope, r)) return r.preventDefault(), r;
                        }
                    }
                return r;
            }),
            (rx.prototype.on = function (e, t, n, r) {
                if ((t = !1 === t ? R : t)) {
                    var o = { func: t, removed: !1 };
                    r && Et.extend(o, r);
                    for (var i = e.toLowerCase().split(" "), a = i.length; a--; ) {
                        var u = i[a],
                            s = this.bindings[u];
                        s || ((s = []), this.toggleEvent(u, !0)), (s = n ? Ae([o], s, !0) : Ae(Ae([], s, !0), [o], !1)), (this.bindings[u] = s);
                    }
                }
                return this;
            }),
            (rx.prototype.off = function (e, t) {
                var n = this;
                if (e)
                    for (var r = e.toLowerCase().split(" "), o = r.length; o--; ) {
                        var i,
                            a = r[o],
                            u = this.bindings[a];
                        if (!a)
                            return (
                                ne(this.bindings, function (e, t) {
                                    n.toggleEvent(t, !1), delete n.bindings[t];
                                }),
                                this
                            );
                        u &&
                            (t
                                ? ((u = (i = B(u, function (e) {
                                      return e.func === t;
                                  })).fail),
                                  (this.bindings[a] = u),
                                  Y(i.pass, function (e) {
                                      e.removed = !0;
                                  }))
                                : (u.length = 0),
                            u.length || (this.toggleEvent(e, !1), delete this.bindings[a]));
                    }
                else
                    ne(this.bindings, function (e, t) {
                        n.toggleEvent(t, !1);
                    }),
                        (this.bindings = {});
                return this;
            }),
            (rx.prototype.once = function (e, t, n) {
                return this.on(e, t, n, { once: !0 });
            }),
            (rx.prototype.has = function (e) {
                return (e = e.toLowerCase()), !(!this.bindings[e] || 0 === this.bindings[e].length);
            }),
            rx);
    function rx(e) {
        (this.bindings = {}), (this.settings = e || {}), (this.scope = this.settings.scope || this), (this.toggleEvent = this.settings.toggleEvent || R);
    }
    function ox(n) {
        return (
            n._eventDispatcher ||
                (n._eventDispatcher = new nx({
                    scope: n,
                    toggleEvent: function (e, t) {
                        nx.isNative(e) && n.toggleNativeEvent && n.toggleNativeEvent(e, t);
                    },
                })),
            n._eventDispatcher
        );
    }
    function ix(e, t) {
        if ("selectionchange" === t) return e.getDoc();
        if (!e.inline && /^mouse|touch|click|contextmenu|drop|dragover|dragend/.test(t)) return e.getDoc().documentElement;
        var n = Os(e);
        return n ? (e.eventRoot || (e.eventRoot = dx.select(n)[0]), e.eventRoot) : e.getBody();
    }
    function ax(e, t, n) {
        var r, o, i, a;
        e.hidden || Q1(e)
            ? Q1(e) &&
              ((r = e),
              "click" !== (o = n).type ||
                  Bf.metaKeyPressed(o) ||
                  ((i = Nt.fromDom(o.target)),
                  (a = r),
                  br(i, "a", function (e) {
                      return je(e, Nt.fromDom(a.getBody()));
                  })
                      .bind(function (e) {
                          return bn(e, "href");
                      })
                      .each(function (e) {
                          var t, n;
                          o.preventDefault(),
                              /^#/.test(e)
                                  ? (t = r.dom.select(e + ',[name="' + (Ge((n = e), "#") ? n.substring("#".length) : n) + '"]')).length && r.selection.scrollIntoView(t[0], !0)
                                  : window.open(e, "_blank", "rel=noopener noreferrer,menubar=yes,toolbar=yes,location=yes,status=yes,resizable=yes,scrollbars=yes");
                      })))
            : e.fire(t, n);
    }
    function ux(i, a) {
        var e, t;
        i.delegates || (i.delegates = {}),
            i.delegates[a] ||
                i.removed ||
                ((t = ix(i, a)),
                Os(i)
                    ? (lx ||
                          ((lx = {}),
                          i.editorManager.on("removeEditor", function () {
                              i.editorManager.activeEditor ||
                                  (lx &&
                                      (ne(lx, function (e, t) {
                                          i.dom.unbind(ix(i, t));
                                      }),
                                      (lx = null)));
                          })),
                      lx[a] ||
                          ((lx[a] = e = function (e) {
                              for (var t = e.target, n = i.editorManager.get(), r = n.length; r--; ) {
                                  var o = n[r].getBody();
                                  (o !== t && !dx.isChildOf(t, o)) || ax(n[r], a, e);
                              }
                          }),
                          dx.bind(t, a, e)))
                    : (dx.bind(
                          t,
                          a,
                          (e = function (e) {
                              ax(i, a, e);
                          })
                      ),
                      (i.delegates[a] = e)));
    }
    function sx(e, t, n, r) {
        var o = n[t.get()],
            i = n[r];
        try {
            i.activate();
        } catch (e) {
            return void console.error("problem while activating editor mode " + r + ":", e);
        }
        o.deactivate(), o.editorReadOnly !== i.editorReadOnly && J1(e, i.editorReadOnly), t.set(r), e.fire("SwitchMode", { mode: r });
    }
    function cx(e) {
        var t,
            n = {};
        px(hx(e.toLowerCase(), "+"), function (e) {
            e in bx ? (n[e] = !0) : /^[0-9]{2,}$/.test(e) ? (n.keyCode = parseInt(e, 10)) : ((n.charCode = e.charCodeAt(0)), (n.keyCode = vx[e] || e.toUpperCase().charCodeAt(0)));
        });
        var r = [n.keyCode];
        for (t in bx) n[t] ? r.push(t) : (n[t] = !1);
        return (n.id = r.join(",")), n.access && ((n.alt = !0), xt.mac ? (n.ctrl = !0) : (n.shift = !0)), n.meta && (xt.mac ? (n.meta = !0) : ((n.ctrl = !0), (n.meta = !1))), n;
    }
    var lx,
        fx = {
            fire: function (e, t, n) {
                if (this.removed && "remove" !== e && "detach" !== e) return t;
                var r = ox(this).fire(e, t);
                if (!1 !== n && this.parent) for (var o = this.parent(); o && !r.isPropagationStopped(); ) o.fire(e, r, !1), (o = o.parent());
                return r;
            },
            on: function (e, t, n) {
                return ox(this).on(e, t, n);
            },
            off: function (e, t) {
                return ox(this).off(e, t);
            },
            once: function (e, t) {
                return ox(this).once(e, t);
            },
            hasEventListeners: function (e) {
                return ox(this).has(e);
            },
        },
        dx = Ja.DOM,
        mx = _e(_e({}, fx), {
            bindPendingEventDelegates: function () {
                var t = this;
                Et.each(t._pendingNativeEvents, function (e) {
                    ux(t, e);
                });
            },
            toggleNativeEvent: function (e, t) {
                var n = this;
                "focus" !== e &&
                    "blur" !== e &&
                    (n.removed ||
                        (t ? (n.initialized ? ux(n, e) : n._pendingNativeEvents ? n._pendingNativeEvents.push(e) : (n._pendingNativeEvents = [e])) : n.initialized && (n.dom.unbind(ix(n, e), e, n.delegates[e]), delete n.delegates[e])));
            },
            unbindAllNativeEvents: function () {
                var n = this,
                    e = n.getBody(),
                    t = n.dom;
                n.delegates &&
                    (ne(n.delegates, function (e, t) {
                        n.dom.unbind(ix(n, t), t, e);
                    }),
                    delete n.delegates),
                    !n.inline && e && t && ((e.onload = null), t.unbind(n.getWin()), t.unbind(n.getDoc())),
                    t && (t.unbind(e), t.unbind(n.getContainer()));
            },
        }),
        gx = ["design", "readonly"],
        px = Et.each,
        hx = Et.explode,
        vx = { f1: 112, f2: 113, f3: 114, f4: 115, f5: 116, f6: 117, f7: 118, f8: 119, f9: 120, f10: 121, f11: 122, f12: 123 },
        bx = Et.makeMap("alt,ctrl,shift,meta,access"),
        yx =
            ((Cx.prototype.add = function (e, n, t, r) {
                var o = this,
                    i = o.normalizeCommandFunc(t);
                return (
                    px(hx(Et.trim(e)), function (e) {
                        var t = o.createShortcut(e, n, i, r);
                        o.shortcuts[t.id] = t;
                    }),
                    !0
                );
            }),
            (Cx.prototype.remove = function (e) {
                var t = this.createShortcut(e);
                return !!this.shortcuts[t.id] && (delete this.shortcuts[t.id], !0);
            }),
            (Cx.prototype.normalizeCommandFunc = function (e) {
                var t = this,
                    n = e;
                return "string" == typeof n
                    ? function () {
                          t.editor.execCommand(n, !1, null);
                      }
                    : Et.isArray(n)
                    ? function () {
                          t.editor.execCommand(n[0], n[1], n[2]);
                      }
                    : n;
            }),
            (Cx.prototype.createShortcut = function (e, t, n, r) {
                var o = Et.map(hx(e, ">"), cx);
                return (o[o.length - 1] = Et.extend(o[o.length - 1], { func: n, scope: r || this.editor })), Et.extend(o[0], { desc: this.editor.translate(t), subpatterns: o.slice(1) });
            }),
            (Cx.prototype.hasModifier = function (e) {
                return e.altKey || e.ctrlKey || e.metaKey;
            }),
            (Cx.prototype.isFunctionKey = function (e) {
                return "keydown" === e.type && 112 <= e.keyCode && e.keyCode <= 123;
            }),
            (Cx.prototype.matchShortcut = function (e, t) {
                return !!t && t.ctrl === e.ctrlKey && t.meta === e.metaKey && t.alt === e.altKey && t.shift === e.shiftKey && !!(e.keyCode === t.keyCode || (e.charCode && e.charCode === t.charCode)) && (e.preventDefault(), !0);
            }),
            (Cx.prototype.executeShortcutAction = function (e) {
                return e.func ? e.func.call(e.scope) : null;
            }),
            Cx);
    function Cx(e) {
        (this.shortcuts = {}), (this.pendingPatterns = []), (this.editor = e);
        var n = this;
        e.on("keyup keypress keydown", function (t) {
            (!n.hasModifier(t) && !n.isFunctionKey(t)) ||
                t.isDefaultPrevented() ||
                (px(n.shortcuts, function (e) {
                    if (n.matchShortcut(t, e)) return (n.pendingPatterns = e.subpatterns.slice(0)), "keydown" === t.type && n.executeShortcutAction(e), !0;
                }),
                n.matchShortcut(t, n.pendingPatterns[0]) && (1 === n.pendingPatterns.length && "keydown" === t.type && n.executeShortcutAction(n.pendingPatterns[0]), n.pendingPatterns.shift()));
        });
    }
    var xx = Ja.DOM,
        wx = Et.extend,
        Sx = Et.each,
        Ex = Et.resolve,
        Nx = xt.ie,
        kx =
            ((_x.prototype.render = function () {
                !(function (t) {
                    var e = t.id;
                    uu.setCode(As(t));
                    var n,
                        r,
                        o,
                        i,
                        a = function () {
                            U1.unbind(window, "ready", a), t.render();
                        };
                    ai.Event.domLoaded
                        ? t.getElement() &&
                          xt.contentEditable &&
                          ((n = Nt.fromDom(t.getElement())),
                          (r = L(
                              n.dom.attributes,
                              function (e, t) {
                                  return (e[t.name] = t.value), e;
                              },
                              {}
                          )),
                          t.on("remove", function () {
                              O(n.dom.attributes, function (e) {
                                  return yn(n, e.name), 0;
                              }),
                                  hn(n, r);
                          }),
                          (t.ui.styleSheetLoader = Ar.forElement(n, { contentCssCors: (o = t).getParam("content_css_cors"), referrerPolicy: _s(o) })),
                          t.getParam("inline") ? (t.inline = !0) : ((t.orgVisibility = t.getElement().style.visibility), (t.getElement().style.visibility = "hidden")),
                          (i = t.getElement().form || U1.getParent(e, "form")) &&
                              ((t.formElement = i),
                              t.getParam("hidden_input") && !Hn(t.getElement()) && (U1.insertAfter(U1.create("input", { type: "hidden", name: e }), e), (t.hasHiddenInput = !0)),
                              (t.formEventDelegate = function (e) {
                                  t.fire(e.type, e);
                              }),
                              U1.bind(i, "submit reset", t.formEventDelegate),
                              t.on("reset", function () {
                                  t.resetContent();
                              }),
                              !t.getParam("submit_patch") ||
                                  i.submit.nodeType ||
                                  i.submit.length ||
                                  i._mceOldSubmit ||
                                  ((i._mceOldSubmit = i.submit),
                                  (i.submit = function () {
                                      return t.editorManager.triggerSave(), t.setDirty(!1), i._mceOldSubmit(i);
                                  }))),
                          (t.windowManager = Pv(t)),
                          (t.notificationManager = uv(t)),
                          "xml" === t.getParam("encoding") &&
                              t.on("GetContent", function (e) {
                                  e.save && (e.content = U1.encode(e.content));
                              }),
                          t.getParam("add_form_submit_trigger") &&
                              t.on("submit", function () {
                                  t.initialized && t.save();
                              }),
                          t.getParam("add_unload_trigger") &&
                              ((t._beforeUnload = function () {
                                  !t.initialized || t.destroyed || t.isHidden() || t.save({ format: "raw", no_events: !0, set_dirty: !1 });
                              }),
                              t.editorManager.on("BeforeUnload", t._beforeUnload)),
                          t.editorManager.add(t),
                          N1(t, t.suffix))
                        : U1.bind(window, "ready", a);
                })(this);
            }),
            (_x.prototype.focus = function (e) {
                this.execCommand("mceFocus", !1, e);
            }),
            (_x.prototype.hasFocus = function () {
                return vd(this);
            }),
            (_x.prototype.execCallback = function (e) {
                for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
                var r,
                    o = this.settings[e];
                if (o)
                    return (
                        this.callbackLookup && (r = this.callbackLookup[e]) && ((o = r.func), (r = r.scope)),
                        "string" == typeof o && ((r = (r = o.replace(/\.\w+$/, "")) ? Ex(r) : 0), (o = Ex(o)), (this.callbackLookup = this.callbackLookup || {}), (this.callbackLookup[e] = { func: o, scope: r })),
                        o.apply(r || this, t)
                    );
            }),
            (_x.prototype.translate = function (e) {
                return uu.translate(e);
            }),
            (_x.prototype.getParam = function (e, t, n) {
                return (
                    (i = t),
                    (a = n),
                    (l = (o = e) in (r = this).settings ? r.settings[o] : i),
                    "hash" === a
                        ? ((c = {}),
                          "string" == typeof (s = l)
                              ? Y(0 < s.indexOf("=") ? s.split(/[;,](?![^=;,]*(?:[;,]|$))/) : s.split(","), function (e) {
                                    var t = e.split("=");
                                    1 < t.length ? (c[Et.trim(t[0])] = Et.trim(t[1])) : (c[Et.trim(t[0])] = Et.trim(t[0]));
                                })
                              : (c = s),
                          c)
                        : "string" === a
                        ? rv(X, r, o).getOr(i)
                        : "number" === a
                        ? rv(E, r, o).getOr(i)
                        : "boolean" === a
                        ? rv(v, r, o).getOr(i)
                        : "object" === a
                        ? rv(h, r, o).getOr(i)
                        : "array" === a
                        ? rv(S, r, o).getOr(i)
                        : "string[]" === a
                        ? rv(
                              ((u = X),
                              function (e) {
                                  return S(e) && j(e, u);
                              }),
                              r,
                              o
                          ).getOr(i)
                        : "function" === a
                        ? rv(y, r, o).getOr(i)
                        : l
                );
                var r, o, i, a, u, s, c, l;
            }),
            (_x.prototype.hasPlugin = function (e, t) {
                return !(!D(Ls(this).split(/[ ,]/), e) || (t && void 0 === Ov.get(e)));
            }),
            (_x.prototype.nodeChanged = function (e) {
                this._nodeChangeDispatcher.nodeChanged(e);
            }),
            (_x.prototype.addCommand = function (e, t, n) {
                this.editorCommands.addCommand(e, t, n);
            }),
            (_x.prototype.addQueryStateHandler = function (e, t, n) {
                this.editorCommands.addQueryStateHandler(e, t, n);
            }),
            (_x.prototype.addQueryValueHandler = function (e, t, n) {
                this.editorCommands.addQueryValueHandler(e, t, n);
            }),
            (_x.prototype.addShortcut = function (e, t, n, r) {
                this.shortcuts.add(e, t, n, r);
            }),
            (_x.prototype.execCommand = function (e, t, n, r) {
                return this.editorCommands.execCommand(e, t, n, r);
            }),
            (_x.prototype.queryCommandState = function (e) {
                return this.editorCommands.queryCommandState(e);
            }),
            (_x.prototype.queryCommandValue = function (e) {
                return this.editorCommands.queryCommandValue(e);
            }),
            (_x.prototype.queryCommandSupported = function (e) {
                return this.editorCommands.queryCommandSupported(e);
            }),
            (_x.prototype.show = function () {
                this.hidden && ((this.hidden = !1), this.inline ? (this.getBody().contentEditable = "true") : (xx.show(this.getContainer()), xx.hide(this.id)), this.load(), this.fire("show"));
            }),
            (_x.prototype.hide = function () {
                var e = this,
                    t = e.getDoc();
                e.hidden ||
                    (Nx && t && !e.inline && t.execCommand("SelectAll"),
                    e.save(),
                    e.inline ? ((e.getBody().contentEditable = "false"), e === e.editorManager.focusedEditor && (e.editorManager.focusedEditor = null)) : (xx.hide(e.getContainer()), xx.setStyle(e.id, "display", e.orgDisplay)),
                    (e.hidden = !0),
                    e.fire("hide"));
            }),
            (_x.prototype.isHidden = function () {
                return !!this.hidden;
            }),
            (_x.prototype.setProgressState = function (e, t) {
                this.fire("ProgressState", { state: e, time: t });
            }),
            (_x.prototype.load = function (e) {
                var t = this.getElement();
                if (this.removed) return "";
                if (t) {
                    (e = e || {}).load = !0;
                    var n = Hn(t) ? t.value : t.innerHTML,
                        r = this.setContent(n, e);
                    return (e.element = t), e.no_events || this.fire("LoadContent", e), (e.element = t = null), r;
                }
            }),
            (_x.prototype.save = function (e) {
                var t,
                    n,
                    r = this,
                    o = r.getElement();
                if (o && r.initialized && !r.removed)
                    return (
                        ((e = e || {}).save = !0),
                        (e.element = o),
                        (e.content = r.getContent(e)),
                        e.no_events || r.fire("SaveContent", e),
                        "raw" === e.format && r.fire("RawSaveContent", e),
                        (t = e.content),
                        Hn(o)
                            ? (o.value = t)
                            : ((!e.is_removing && r.inline) || (o.innerHTML = t),
                              (n = xx.getParent(r.id, "form")) &&
                                  Sx(n.elements, function (e) {
                                      if (e.name === r.id) return (e.value = t), !1;
                                  })),
                        (e.element = o = null),
                        !1 !== e.set_dirty && r.setDirty(!1),
                        t
                    );
            }),
            (_x.prototype.setContent = function (e, t) {
                return Yh(this, e, t);
            }),
            (_x.prototype.getContent = function (e) {
                return (t = this), (r = (n = void 0 === (n = e) ? {} : n).format || "html"), (o = n), ph(t).editor.getContent(o, r);
                var t, n, r, o;
            }),
            (_x.prototype.insertContent = function (e, t) {
                t && (e = wx({ content: e }, t)), this.execCommand("mceInsertContent", !1, e);
            }),
            (_x.prototype.resetContent = function (e) {
                void 0 === e ? Yh(this, this.startContent, { format: "raw" }) : Yh(this, e), this.undoManager.reset(), this.setDirty(!1), this.nodeChanged();
            }),
            (_x.prototype.isDirty = function () {
                return !this.isNotDirty;
            }),
            (_x.prototype.setDirty = function (e) {
                var t = !this.isNotDirty;
                (this.isNotDirty = !e), e && e !== t && this.fire("dirty");
            }),
            (_x.prototype.getContainer = function () {
                return this.container || (this.container = xx.get(this.editorContainer || this.id + "_parent")), this.container;
            }),
            (_x.prototype.getContentAreaContainer = function () {
                return this.contentAreaContainer;
            }),
            (_x.prototype.getElement = function () {
                return this.targetElm || (this.targetElm = xx.get(this.id)), this.targetElm;
            }),
            (_x.prototype.getWin = function () {
                var e;
                return this.contentWindow || ((e = this.iframeElement) && (this.contentWindow = e.contentWindow)), this.contentWindow;
            }),
            (_x.prototype.getDoc = function () {
                var e;
                return this.contentDocument || ((e = this.getWin()) && (this.contentDocument = e.document)), this.contentDocument;
            }),
            (_x.prototype.getBody = function () {
                var e = this.getDoc();
                return this.bodyElement || (e ? e.body : null);
            }),
            (_x.prototype.convertURL = function (e, t, n) {
                var r = this.settings;
                return r.urlconverter_callback
                    ? this.execCallback("urlconverter_callback", e, n, !0, t)
                    : !r.convert_urls || (n && "LINK" === n.nodeName) || 0 === e.indexOf("file:") || 0 === e.length
                    ? e
                    : r.relative_urls
                    ? this.documentBaseURI.toRelative(e)
                    : this.documentBaseURI.toAbsolute(e, r.remove_script_host);
            }),
            (_x.prototype.addVisual = function (e) {
                var t;
                (t = e), hh(this).editor.addVisual(t);
            }),
            (_x.prototype.remove = function () {
                var e, t, n, r, o;
                (e = this).removed ||
                    ((t = e._selectionOverrides),
                    (n = e.editorUpload),
                    (r = e.getBody()),
                    (o = e.getElement()),
                    r && e.save({ is_removing: !0 }),
                    (e.removed = !0),
                    e.unbindAllNativeEvents(),
                    e.hasHiddenInput && o && hv.remove(o.nextSibling),
                    e.fire("remove"),
                    e.editorManager.remove(e),
                    !e.inline && r && hv.setStyle(e.id, "display", e.orgDisplay),
                    e.fire("detach"),
                    hv.remove(e.getContainer()),
                    Gh(t),
                    Gh(n),
                    e.destroy());
            }),
            (_x.prototype.destroy = function (e) {
                var t, n, r, o, i, a, u;
                (n = e),
                    (a = (t = this).selection),
                    (u = t.dom),
                    t.destroyed ||
                        (n || t.removed
                            ? (n || (t.editorManager.off("beforeunload", t._beforeUnload), t.theme && t.theme.destroy && t.theme.destroy(), Gh(a), Gh(u)),
                              (o = (r = t).formElement) && (o._mceOldSubmit && ((o.submit = o._mceOldSubmit), (o._mceOldSubmit = null)), hv.unbind(o, "submit reset", r.formEventDelegate)),
                              ((i = t).contentAreaContainer = i.formElement = i.container = i.editorContainer = null),
                              (i.bodyElement = i.contentDocument = i.contentWindow = null),
                              (i.iframeElement = i.targetElm = null),
                              i.selection && (i.selection = i.selection.win = i.selection.dom = i.selection.dom.doc = null),
                              (t.destroyed = !0))
                            : t.remove());
            }),
            (_x.prototype.uploadImages = function (e) {
                return this.editorUpload.uploadImages(e);
            }),
            (_x.prototype._scanForImages = function () {
                return this.editorUpload.scanForImages();
            }),
            (_x.prototype.addButton = function () {
                throw new Error("editor.addButton has been removed in tinymce 5x, use editor.ui.registry.addButton or editor.ui.registry.addToggleButton or editor.ui.registry.addSplitButton instead");
            }),
            (_x.prototype.addSidebar = function () {
                throw new Error("editor.addSidebar has been removed in tinymce 5x, use editor.ui.registry.addSidebar instead");
            }),
            (_x.prototype.addMenuItem = function () {
                throw new Error("editor.addMenuItem has been removed in tinymce 5x, use editor.ui.registry.addMenuItem instead");
            }),
            (_x.prototype.addContextToolbar = function () {
                throw new Error("editor.addContextToolbar has been removed in tinymce 5x, use editor.ui.registry.addContextToolbar instead");
            }),
            _x);
    function _x(e, t, n) {
        var r,
            o,
            i,
            a,
            u,
            s,
            c,
            l,
            f,
            d,
            m,
            g,
            p,
            h,
            v,
            b,
            y,
            C,
            x = this;
        function w(n, r) {
            return function (e, t) {
                return (n[e.toLowerCase()] = _e(_e({}, t), { type: r }));
            };
        }
        (this.plugins = {}),
            (this.contentCSS = []),
            (this.contentStyles = []),
            (this.loadedCSS = {}),
            (this.isNotDirty = !1),
            (this.editorManager = n),
            (this.documentBaseUrl = n.documentBaseURL),
            wx(this, mx),
            (this.settings =
                ((d = (f = this).documentBaseUrl),
                (m = n.defaultSettings),
                (p = d),
                (h = wv),
                (v = f),
                (b = {
                    id: e,
                    theme: "silver",
                    toolbar_mode: ev((g = t), "floating"),
                    plugins: "",
                    document_base_url: p,
                    add_form_submit_trigger: !0,
                    submit_patch: !0,
                    add_unload_trigger: !0,
                    convert_urls: !0,
                    relative_urls: !0,
                    remove_script_host: !0,
                    object_resizing: !0,
                    doctype: "<!DOCTYPE html>",
                    visual: !0,
                    font_size_legacy_values: "xx-small,small,medium,large,x-large,xx-large,300%",
                    forced_root_block: "p",
                    hidden_input: !0,
                    inline_styles: !0,
                    convert_fonts_to_spans: !0,
                    indent: !0,
                    indent_before: "p,h1,h2,h3,h4,h5,h6,blockquote,div,title,style,pre,script,td,th,ul,ol,li,dl,dt,dd,area,table,thead,tfoot,tbody,tr,section,summary,article,hgroup,aside,figure,figcaption,option,optgroup,datalist",
                    indent_after: "p,h1,h2,h3,h4,h5,h6,blockquote,div,title,style,pre,script,td,th,ul,ol,li,dl,dt,dd,area,table,thead,tfoot,tbody,tr,section,summary,article,hgroup,aside,figure,figcaption,option,optgroup,datalist",
                    entity_encoding: "named",
                    url_converter: v.convertURL,
                    url_converter_scope: v,
                }),
                (y = _e(_e({}, b), h ? kv : {})),
                !1 !== (C = nv(Sv || Ev, Sv, y, m, g)).deprecation_warnings && Jh(g, C),
                C)),
            this.settings.suffix && (n.suffix = this.settings.suffix),
            (this.suffix = n.suffix),
            this.settings.base_url && n._setBaseUrl(this.settings.base_url),
            (this.baseUri = n.baseURI),
            this.settings.referrer_policy && (tu.ScriptLoader._setReferrerPolicy(this.settings.referrer_policy), Ja.DOM.styleSheetLoader._setReferrerPolicy(this.settings.referrer_policy)),
            (su.languageLoad = this.settings.language_load),
            (su.baseURL = n.baseURL),
            (this.id = e),
            this.setDirty(!1),
            (this.documentBaseURI = new Kd(this.settings.document_base_url, { base_uri: this.baseUri })),
            (this.baseURI = this.baseUri),
            (this.inline = !!this.settings.inline),
            (this.shortcuts = new yx(this)),
            (this.editorCommands = new W1(this)),
            this.settings.cache_suffix && (xt.cacheSuffix = this.settings.cache_suffix.replace(/^[\?\&]+/, "")),
            (this.ui = {
                registry: {
                    addAutocompleter:
                        ((u = {}),
                        (r = {
                            addButton: w((o = {}), "button"),
                            addGroupToolbarButton: w(o, "grouptoolbarbutton"),
                            addToggleButton: w(o, "togglebutton"),
                            addMenuButton: w(o, "menubutton"),
                            addSplitButton: w(o, "splitbutton"),
                            addMenuItem: w((i = {}), "menuitem"),
                            addNestedMenuItem: w(i, "nestedmenuitem"),
                            addToggleMenuItem: w(i, "togglemenuitem"),
                            addAutocompleter: w((a = {}), "autocompleter"),
                            addContextMenu: w((s = {}), "contextmenu"),
                            addContextToolbar: w((c = {}), "contexttoolbar"),
                            addContextForm: w(c, "contextform"),
                            addSidebar: w((l = {}), "sidebar"),
                            addIcon: function (e, t) {
                                return (u[e.toLowerCase()] = t);
                            },
                            getAll: function () {
                                return { buttons: o, menuItems: i, icons: u, popups: a, contextMenus: s, contextToolbars: c, sidebars: l };
                            },
                        }).addAutocompleter),
                    addButton: r.addButton,
                    addContextForm: r.addContextForm,
                    addContextMenu: r.addContextMenu,
                    addContextToolbar: r.addContextToolbar,
                    addIcon: r.addIcon,
                    addMenuButton: r.addMenuButton,
                    addMenuItem: r.addMenuItem,
                    addNestedMenuItem: r.addNestedMenuItem,
                    addSidebar: r.addSidebar,
                    addSplitButton: r.addSplitButton,
                    addToggleButton: r.addToggleButton,
                    addGroupToolbarButton: r.addGroupToolbarButton,
                    addToggleMenuItem: r.addToggleMenuItem,
                    getAll: r.getAll,
                },
                styleSheetLoader: void 0,
                show: te,
                hide: te,
                enable: te,
                disable: te,
                isDisabled: R,
            });
        var S,
            E,
            N,
            k,
            _,
            A =
                ((k = ru("design")),
                (_ = ru({ design: { activate: te, deactivate: te, editorReadOnly: !1 }, readonly: { activate: te, deactivate: te, editorReadOnly: !0 } })),
                (E = S = this).serializer
                    ? Z1(E)
                    : E.on("PreInit", function () {
                          Z1(E);
                      }),
                (N = S).on("ShowCaret", function (e) {
                    Q1(N) && e.preventDefault();
                }),
                N.on("ObjectSelected", function (e) {
                    Q1(N) && e.preventDefault();
                }),
                {
                    isReadOnly: function () {
                        return Q1(S);
                    },
                    set: function (e) {
                        return (function (e, t, n, r) {
                            if (r !== n.get()) {
                                if (!Ne(t, r)) throw new Error("Editor mode '" + r + "' is invalid");
                                e.initialized
                                    ? sx(e, n, t, r)
                                    : e.on("init", function () {
                                          return sx(e, n, t, r);
                                      });
                            }
                        })(S, _.get(), k, e);
                    },
                    get: function () {
                        return k.get();
                    },
                    register: function (e, t) {
                        _.set(
                            (function (e, t, n) {
                                var r;
                                if (D(gx, t)) throw new Error("Cannot override default mode " + t);
                                return _e(
                                    _e({}, e),
                                    (((r = {})[t] = _e(_e({}, n), {
                                        deactivate: function () {
                                            try {
                                                n.deactivate();
                                            } catch (e) {
                                                console.error("problem while deactivating editor mode " + t + ":", e);
                                            }
                                        },
                                    })),
                                    r)
                                );
                            })(_.get(), e, t)
                        );
                    },
                });
        (this.mode = A),
            (this.setMode = A.set),
            n.fire("SetupEditor", { editor: this }),
            this.execCallback("setup", this),
            (this.$ = Wa.overrideDefaults(function () {
                return { context: x.inline ? x.getBody() : x.getDoc(), element: x.getBody() };
            }));
    }
    function Ax(t) {
        var n = t.type;
        Px(Hx.get(), function (e) {
            switch (n) {
                case "scroll":
                    e.fire("ScrollWindow", t);
                    break;
                case "resize":
                    e.fire("ResizeWindow", t);
            }
        });
    }
    function Rx(e) {
        e !== Mx && (e ? Wa(window).on("resize scroll", Ax) : Wa(window).off("resize scroll", Ax), (Mx = e));
    }
    function Dx(t) {
        var e = Ux;
        delete Fx[t.id];
        for (var n = 0; n < Fx.length; n++)
            if (Fx[n] === t) {
                Fx.splice(n, 1);
                break;
            }
        return (
            (Ux = U(Ux, function (e) {
                return t !== e;
            })),
            Hx.activeEditor === t && (Hx.activeEditor = 0 < Ux.length ? Ux[0] : null),
            Hx.focusedEditor === t && (Hx.focusedEditor = null),
            e.length !== Ux.length
        );
    }
    var Tx,
        Ox = Ja.DOM,
        Bx = Et.explode,
        Px = Et.each,
        Lx = Et.extend,
        Ix = 0,
        Mx = !1,
        Fx = [],
        Ux = [],
        zx = "CSS1Compat" !== document.compatMode,
        Hx = _e(_e({}, fx), {
            baseURI: null,
            baseURL: null,
            defaultSettings: {},
            documentBaseURL: null,
            suffix: null,
            $: Wa,
            majorVersion: "5",
            minorVersion: "10.2",
            releaseDate: "2021-11-17",
            editors: Fx,
            i18n: uu,
            activeEditor: null,
            focusedEditor: null,
            settings: {},
            setup: function () {
                var e,
                    t = "",
                    n = Kd.getDocumentBaseUrl(document.location);
                /^[^:]+:\/\/\/?[^\/]+\//.test(n) && ((n = n.replace(/[\?#].*$/, "").replace(/[\/\\][^\/]+$/, "")), /[\/\\]$/.test(n) || (n += "/"));
                var r = window.tinymce || window.tinyMCEPreInit;
                if (r) (e = r.base || r.baseURL), (t = r.suffix);
                else {
                    for (var o, i = document.getElementsByTagName("script"), a = 0; a < i.length; a++)
                        if ("" !== (o = i[a].src || "")) {
                            var u = o.substring(o.lastIndexOf("/"));
                            if (/tinymce(\.full|\.jquery|)(\.min|\.dev|)\.js/.test(o)) {
                                -1 !== u.indexOf(".min") && (t = ".min"), (e = o.substring(0, o.lastIndexOf("/")));
                                break;
                            }
                        }
                    !e && document.currentScript && (-1 !== (o = document.currentScript.src).indexOf(".min") && (t = ".min"), (e = o.substring(0, o.lastIndexOf("/"))));
                }
                (this.baseURL = new Kd(n).toAbsolute(e)), (this.documentBaseURL = n), (this.baseURI = new Kd(this.baseURL)), (this.suffix = t), this.on("AddEditor", A(md, this)), this.on("RemoveEditor", A(gd, this));
            },
            overrideDefaults: function (e) {
                var t = e.base_url;
                t && this._setBaseUrl(t);
                var n = e.suffix;
                e.suffix && (this.suffix = n);
                var r = (this.defaultSettings = e).plugin_base_urls;
                void 0 !== r &&
                    ne(r, function (e, t) {
                        su.PluginManager.urls[t] = e;
                    });
            },
            init: function (r) {
                function u(e) {
                    var t = e.id;
                    return (
                        t ||
                            ((t = ue(e, "name")
                                .filter(function (e) {
                                    return !Ox.get(e);
                                })
                                .getOrThunk(Ox.uniqueId)),
                            e.setAttribute("id", t)),
                        t
                    );
                }
                function s(e, t) {
                    return t.constructor === RegExp ? t.test(e.className) : Ox.hasClass(e, t);
                }
                var n,
                    c = this,
                    l = Et.makeMap(
                        "area base basefont br col frame hr img input isindex link meta param embed source wbr track colgroup option table tbody tfoot thead tr th td script noscript style textarea video audio iframe object menu",
                        " "
                    ),
                    f = function (e) {
                        n = e;
                    },
                    t = function () {
                        function n(e, t, n) {
                            var r = new kx(e, t, c);
                            a.push(r),
                                r.on("init", function () {
                                    ++i === o.length && f(a);
                                }),
                                (r.targetElm = r.targetElm || n),
                                r.render();
                        }
                        var o,
                            e,
                            i = 0,
                            a = [];
                        Ox.unbind(window, "ready", t),
                            (e = r.onpageload) && e.apply(c, []),
                            (o = Wa.unique(
                                (function (t) {
                                    var n = [];
                                    if (xt.browser.isIE() && xt.browser.version.major < 11)
                                        return ay("TinyMCE does not support the browser you are using. For a list of supported browsers please see: https://www.tinymce.com/docs/get-started/system-requirements/"), [];
                                    if (zx) return ay("Failed to initialize the editor as the document is not in standards mode. TinyMCE requires standards mode."), [];
                                    if (t.types)
                                        return (
                                            Px(t.types, function (e) {
                                                n = n.concat(Ox.select(e.selector));
                                            }),
                                            n
                                        );
                                    if (t.selector) return Ox.select(t.selector);
                                    if (t.target) return [t.target];
                                    switch (t.mode) {
                                        case "exact":
                                            var e = t.elements || "";
                                            0 < e.length &&
                                                Px(Bx(e), function (t) {
                                                    var e = Ox.get(t);
                                                    e
                                                        ? n.push(e)
                                                        : Px(document.forms, function (e) {
                                                              Px(e.elements, function (e) {
                                                                  e.name === t && ((t = "mce_editor_" + Ix++), Ox.setAttrib(e, "id", t), n.push(e));
                                                              });
                                                          });
                                                });
                                            break;
                                        case "textareas":
                                        case "specific_textareas":
                                            Px(Ox.select("textarea"), function (e) {
                                                (t.editor_deselector && s(e, t.editor_deselector)) || (t.editor_selector && !s(e, t.editor_selector)) || n.push(e);
                                            });
                                    }
                                    return n;
                                })(r)
                            )),
                            r.types
                                ? Px(r.types, function (t) {
                                      Et.each(o, function (e) {
                                          return !Ox.is(e, t.selector) || (n(u(e), Lx({}, r, t), e), !1);
                                      });
                                  })
                                : (Et.each(o, function (e) {
                                      var t;
                                      (t = c.get(e.id)) && t.initialized && !(t.getContainer() || t.getBody()).parentNode && (Dx(t), t.unbindAllNativeEvents(), t.destroy(!0), (t.removed = !0));
                                  }),
                                  0 ===
                                  (o = Et.grep(o, function (e) {
                                      return !c.get(e.id);
                                  })).length
                                      ? f([])
                                      : Px(o, function (e) {
                                            var t = e;
                                            r.inline && t.tagName.toLowerCase() in l ? ay("Could not initialize inline editor on invalid inline target element", e) : n(u(e), r, e);
                                        }));
                    };
                return (
                    (c.settings = r),
                    Ox.bind(window, "ready", t),
                    new kr(function (t) {
                        n
                            ? t(n)
                            : (f = function (e) {
                                  t(e);
                              });
                    })
                );
            },
            get: function (t) {
                return 0 === arguments.length
                    ? Ux.slice(0)
                    : X(t)
                    ? M(Ux, function (e) {
                          return e.id === t;
                      }).getOr(null)
                    : (E(t) && Ux[t]) || null;
            },
            add: function (e) {
                var n = this;
                return (
                    Fx[e.id] === e ||
                        (null === n.get(e.id) && ("length" !== e.id && (Fx[e.id] = e), Fx.push(e), Ux.push(e)),
                        Rx(!0),
                        (n.activeEditor = e),
                        n.fire("AddEditor", { editor: e }),
                        Tx ||
                            ((Tx = function (e) {
                                var t = n.fire("BeforeUnload");
                                if (t.returnValue) return e.preventDefault(), (e.returnValue = t.returnValue), t.returnValue;
                            }),
                            window.addEventListener("beforeunload", Tx))),
                    e
                );
            },
            createEditor: function (e, t) {
                return this.add(new kx(e, t, this));
            },
            remove: function (e) {
                var t,
                    n,
                    r = this;
                if (e) {
                    if (!X(e)) return (n = e), l(r.get(n.id)) ? null : (Dx(n) && r.fire("RemoveEditor", { editor: n }), 0 === Ux.length && window.removeEventListener("beforeunload", Tx), n.remove(), Rx(0 < Ux.length), n);
                    Px(Ox.select(e), function (e) {
                        (n = r.get(e.id)) && r.remove(n);
                    });
                } else for (t = Ux.length - 1; 0 <= t; t--) r.remove(Ux[t]);
            },
            execCommand: function (e, t, n) {
                var r = this.get(n);
                switch (e) {
                    case "mceAddEditor":
                        return this.get(n) || new kx(n, this.settings, this).render(), !0;
                    case "mceRemoveEditor":
                        return r && r.remove(), !0;
                    case "mceToggleEditor":
                        return r ? (r.isHidden() ? r.show() : r.hide()) : this.execCommand("mceAddEditor", !1, n), !0;
                }
                return !!this.activeEditor && this.activeEditor.execCommand(e, t, n);
            },
            triggerSave: function () {
                Px(Ux, function (e) {
                    e.save();
                });
            },
            addI18n: function (e, t) {
                uu.add(e, t);
            },
            translate: function (e) {
                return uu.translate(e);
            },
            setActive: function (e) {
                var t = this.activeEditor;
                this.activeEditor !== e && (t && t.fire("deactivate", { relatedTarget: e }), e.fire("activate", { relatedTarget: t })), (this.activeEditor = e);
            },
            _setBaseUrl: function (e) {
                (this.baseURL = new Kd(this.documentBaseURL).toAbsolute(e.replace(/\/+$/, ""))), (this.baseURI = new Kd(this.baseURL));
            },
        });
    function jx(e, t, n) {
        var r = t.x,
            o = t.y,
            i = e.w,
            a = e.h,
            u = t.w,
            s = t.h,
            c = (n || "").split("");
        return (
            "b" === c[0] && (o += s),
            "r" === c[1] && (r += u),
            "c" === c[0] && (o += Jx(s / 2)),
            "c" === c[1] && (r += Jx(u / 2)),
            "b" === c[3] && (o -= a),
            "r" === c[4] && (r -= i),
            "c" === c[3] && (o -= Jx(a / 2)),
            "c" === c[4] && (r -= Jx(i / 2)),
            qx(r, o, i, a)
        );
    }
    function Vx() {}
    Hx.setup();
    function qx(e, t, n, r) {
        return { x: e, y: t, w: n, h: r };
    }
    var $x,
        Wx,
        Kx,
        Xx,
        Yx = Math.min,
        Gx = Math.max,
        Jx = Math.round,
        Qx = {
            inflate: function (e, t, n) {
                return qx(e.x - t, e.y - n, e.w + 2 * t, e.h + 2 * n);
            },
            relativePosition: jx,
            findBestRelativePosition: function (e, t, n, r) {
                for (var o, i = 0; i < r.length; i++) if ((o = jx(e, t, r[i])).x >= n.x && o.x + o.w <= n.w + n.x && o.y >= n.y && o.y + o.h <= n.h + n.y) return r[i];
                return null;
            },
            intersect: function (e, t) {
                var n = Gx(e.x, t.x),
                    r = Gx(e.y, t.y),
                    o = Yx(e.x + e.w, t.x + t.w),
                    i = Yx(e.y + e.h, t.y + t.h);
                return o - n < 0 || i - r < 0 ? null : qx(n, r, o - n, i - r);
            },
            clamp: function (e, t, n) {
                var r = e.x,
                    o = e.y,
                    i = e.x + e.w,
                    a = e.y + e.h,
                    u = t.x + t.w,
                    s = t.y + t.h,
                    c = Gx(0, t.x - r),
                    l = Gx(0, t.y - o),
                    f = Gx(0, i - u),
                    d = Gx(0, a - s);
                return (r += c), (o += l), n && ((i += c), (a += l), (r -= f), (o -= d)), qx(r, o, (i -= f) - r, (a -= d) - o);
            },
            create: qx,
            fromClientRect: function (e) {
                return qx(e.left, e.top, e.width, e.height);
            },
        },
        Zx =
            (($x = {}),
            (Wx = {}),
            {
                load: function (r, o) {
                    var i = 'Script at URL "' + o + '" failed to load',
                        a = 'Script at URL "' + o + "\" did not call `tinymce.Resource.add('" + r + "', data)` within 1 second";
                    if (void 0 !== $x[r]) return $x[r];
                    var e = new kr(function (e, t) {
                        var n = (function (e, t, n) {
                            function r(n) {
                                return function () {
                                    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                                    o || ((o = !0), null !== i && (clearTimeout(i), (i = null)), n.apply(null, e));
                                };
                            }
                            void 0 === n && (n = 1e3);
                            var o = !1,
                                i = null,
                                a = r(e),
                                u = r(t);
                            return {
                                start: function () {
                                    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                                    o ||
                                        null !== i ||
                                        (i = setTimeout(function () {
                                            return u.apply(null, e);
                                        }, n));
                                },
                                resolve: a,
                                reject: u,
                            };
                        })(e, t);
                        (Wx[r] = n.resolve),
                            tu.ScriptLoader.loadScript(
                                o,
                                function () {
                                    return n.start(a);
                                },
                                function () {
                                    return n.reject(i);
                                }
                            );
                    });
                    return ($x[r] = e);
                },
                add: function (e, t) {
                    void 0 !== Wx[e] && (Wx[e](t), delete Wx[e]), ($x[e] = kr.resolve(t));
                },
            }),
        ew = Et.each,
        tw = Et.extend;
    Vx.extend = Kx = function (n) {
        function r() {
            var e, t, n;
            if (!Xx && (this.init && this.init.apply(this, arguments), (t = this.Mixins))) for (e = t.length; e--; ) (n = t[e]).init && n.init.apply(this, arguments);
        }
        function t() {
            return this;
        }
        var o = this.prototype;
        Xx = !0;
        var i = new this();
        return (
            (Xx = !1),
            n.Mixins &&
                (ew(n.Mixins, function (e) {
                    for (var t in e) "init" !== t && (n[t] = e[t]);
                }),
                o.Mixins && (n.Mixins = o.Mixins.concat(n.Mixins))),
            n.Methods &&
                ew(n.Methods.split(","), function (e) {
                    n[e] = t;
                }),
            n.Properties &&
                ew(n.Properties.split(","), function (e) {
                    var t = "_" + e;
                    n[e] = function (e) {
                        return void 0 !== e ? ((this[t] = e), this) : this[t];
                    };
                }),
            n.Statics &&
                ew(n.Statics, function (e, t) {
                    r[t] = e;
                }),
            n.Defaults && o.Defaults && (n.Defaults = tw({}, o.Defaults, n.Defaults)),
            ne(n, function (e, t) {
                var n, r;
                "function" == typeof e && o[t]
                    ? (i[t] =
                          ((n = t),
                          (r = e),
                          function () {
                              var e = this._super;
                              this._super = o[n];
                              var t = r.apply(this, arguments);
                              return (this._super = e), t;
                          }))
                    : (i[t] = e);
            }),
            (r.prototype = i),
            ((r.constructor = r).extend = Kx),
            r
        );
    };
    var nw,
        rw,
        ow,
        iw = Math.min,
        aw = Math.max,
        uw = Math.round,
        sw = {
            serialize: function (e) {
                var t = JSON.stringify(e);
                return X(t)
                    ? t.replace(/[\u0080-\uFFFF]/g, function (e) {
                          var t = e.charCodeAt(0).toString(16);
                          return "\\u" + "0000".substring(t.length) + t;
                      })
                    : t;
            },
            parse: function (e) {
                try {
                    return JSON.parse(e);
                } catch (e) {}
            },
        },
        cw = {
            callbacks: {},
            count: 0,
            send: function (t) {
                var n = this,
                    r = Ja.DOM,
                    o = (void 0 !== t.count ? t : n).count,
                    i = "tinymce_jsonp_" + o;
                (n.callbacks[o] = function (e) {
                    r.remove(i), delete n.callbacks[o], t.callback(e);
                }),
                    r.add(r.doc.body, "script", { id: i, src: t.url, type: "text/javascript" }),
                    n.count++;
            },
        },
        lw = _e(_e({}, fx), {
            send: function (e) {
                var t,
                    n = 0,
                    r = function () {
                        !e.async || 4 === t.readyState || 1e4 < n++
                            ? (e.success && n < 1e4 && 200 === t.status ? e.success.call(e.success_scope, "" + t.responseText, t, e) : e.error && e.error.call(e.error_scope, 1e4 < n ? "TIMED_OUT" : "GENERAL", t, e), (t = null))
                            : _r.setTimeout(r, 10);
                    };
                if (
                    ((e.scope = e.scope || this),
                    (e.success_scope = e.success_scope || e.scope),
                    (e.error_scope = e.error_scope || e.scope),
                    (e.async = !1 !== e.async),
                    (e.data = e.data || ""),
                    lw.fire("beforeInitialize", { settings: e }),
                    (t = new XMLHttpRequest()).overrideMimeType && t.overrideMimeType(e.content_type),
                    t.open(e.type || (e.data ? "POST" : "GET"), e.url, e.async),
                    e.crossDomain && (t.withCredentials = !0),
                    e.content_type && t.setRequestHeader("Content-Type", e.content_type),
                    e.requestheaders &&
                        Et.each(e.requestheaders, function (e) {
                            t.setRequestHeader(e.key, e.value);
                        }),
                    t.setRequestHeader("X-Requested-With", "XMLHttpRequest"),
                    (t = lw.fire("beforeSend", { xhr: t, settings: e }).xhr).send(e.data),
                    !e.async)
                )
                    return r();
                _r.setTimeout(r, 10);
            },
        }),
        fw = Et.extend,
        dw =
            ((mw.sendRPC = function (e) {
                return new mw().send(e);
            }),
            (mw.prototype.send = function (e) {
                var n = e.error,
                    r = e.success,
                    o = fw(this.settings, e);
                (o.success = function (e, t) {
                    (e = void 0 === (e = sw.parse(e)) ? { error: "JSON Parse error." } : e).error ? n.call(o.error_scope || o.scope, e.error, t) : r.call(o.success_scope || o.scope, e.result);
                }),
                    (o.error = function (e, t) {
                        n && n.call(o.error_scope || o.scope, e, t);
                    }),
                    (o.data = sw.serialize({ id: e.id || "c" + this.count++, method: e.method, params: e.params })),
                    (o.content_type = "application/json"),
                    lw.send(o);
            }),
            mw);
    function mw(e) {
        (this.settings = fw({}, e)), (this.count = 0);
    }
    try {
        var gw,
            pw = "__storage_test__";
        (gw = window.localStorage).setItem(pw, pw), gw.removeItem(pw);
    } catch (e) {
        (nw = {}),
            (rw = []),
            (ow = {
                getItem: function (e) {
                    return nw[e] || null;
                },
                setItem: function (e, t) {
                    rw.push(e), (nw[e] = String(t));
                },
                key: function (e) {
                    return rw[e];
                },
                removeItem: function (t) {
                    (rw = rw.filter(function (e) {
                        return e === t;
                    })),
                        delete nw[t];
                },
                clear: function () {
                    (rw = []), (nw = {});
                },
                length: 0,
            }),
            Object.defineProperty(ow, "length", {
                get: function () {
                    return rw.length;
                },
                configurable: !1,
                enumerable: !1,
            }),
            (gw = ow);
    }
    var hw = {
            geom: { Rect: Qx },
            util: {
                Promise: kr,
                Delay: _r,
                Tools: Et,
                VK: Bf,
                URI: Kd,
                Class: Vx,
                EventDispatcher: nx,
                Observable: fx,
                I18n: uu,
                XHR: lw,
                JSON: sw,
                JSONRequest: dw,
                JSONP: cw,
                LocalStorage: gw,
                Color: function (e) {
                    function t(e) {
                        var t;
                        return (
                            "object" == typeof e
                                ? "r" in e
                                    ? ((u = e.r), (s = e.g), (c = e.b))
                                    : "v" in e &&
                                      (function (e, t, n) {
                                          if (((e = (parseInt(e, 10) || 0) % 360), (t = parseInt(t, 10) / 100), (n = parseInt(n, 10) / 100), (t = aw(0, iw(t, 1))), (n = aw(0, iw(n, 1))), 0 !== t)) {
                                              var r = e / 60,
                                                  o = n * t,
                                                  i = o * (1 - Math.abs((r % 2) - 1)),
                                                  a = n - o;
                                              switch (Math.floor(r)) {
                                                  case 0:
                                                      (u = o), (s = i), (c = 0);
                                                      break;
                                                  case 1:
                                                      (u = i), (s = o), (c = 0);
                                                      break;
                                                  case 2:
                                                      (u = 0), (s = o), (c = i);
                                                      break;
                                                  case 3:
                                                      (u = 0), (s = i), (c = o);
                                                      break;
                                                  case 4:
                                                      (u = i), (s = 0), (c = o);
                                                      break;
                                                  case 5:
                                                      (u = o), (s = 0), (c = i);
                                                      break;
                                                  default:
                                                      u = s = c = 0;
                                              }
                                              (u = uw(255 * (u + a))), (s = uw(255 * (s + a))), (c = uw(255 * (c + a)));
                                          } else u = s = c = uw(255 * n);
                                      })(e.h, e.s, e.v)
                                : (t = /rgb\s*\(\s*([0-9]+)\s*,\s*([0-9]+)\s*,\s*([0-9]+)[^\)]*\)/gi.exec(e))
                                ? ((u = parseInt(t[1], 10)), (s = parseInt(t[2], 10)), (c = parseInt(t[3], 10)))
                                : (t = /#([0-F]{2})([0-F]{2})([0-F]{2})/gi.exec(e))
                                ? ((u = parseInt(t[1], 16)), (s = parseInt(t[2], 16)), (c = parseInt(t[3], 16)))
                                : (t = /#([0-F])([0-F])([0-F])/gi.exec(e)) && ((u = parseInt(t[1] + t[1], 16)), (s = parseInt(t[2] + t[2], 16)), (c = parseInt(t[3] + t[3], 16))),
                            (u = u < 0 ? 0 : 255 < u ? 255 : u),
                            (s = s < 0 ? 0 : 255 < s ? 255 : s),
                            (c = c < 0 ? 0 : 255 < c ? 255 : c),
                            n
                        );
                    }
                    var n = {},
                        u = 0,
                        s = 0,
                        c = 0;
                    return (
                        e && t(e),
                        (n.toRgb = function () {
                            return { r: u, g: s, b: c };
                        }),
                        (n.toHsv = function () {
                            return (
                                (e = u),
                                (t = s),
                                (n = c),
                                (o = 0),
                                (i = iw((e /= 255), iw((t /= 255), (n /= 255)))) === (a = aw(e, aw(t, n)))
                                    ? { h: 0, s: 0, v: 100 * (o = i) }
                                    : ((r = (a - i) / a), { h: uw(60 * ((e === i ? 3 : n === i ? 1 : 5) - (e === i ? t - n : n === i ? e - t : n - e) / ((o = a) - i))), s: uw(100 * r), v: uw(100 * o) })
                            );
                            var e, t, n, r, o, i, a;
                        }),
                        (n.toHex = function () {
                            function e(e) {
                                return 1 < (e = parseInt(e, 10).toString(16)).length ? e : "0" + e;
                            }
                            return "#" + e(u) + e(s) + e(c);
                        }),
                        (n.parse = t),
                        n
                    );
                },
                ImageUploader: function (n) {
                    var e = Hv(),
                        r = Wv(n, e);
                    return {
                        upload: function (e, t) {
                            return r.upload(e, (t = void 0 === t || t) ? $v(n) : void 0);
                        },
                    };
                },
            },
            dom: {
                EventUtils: ai,
                Sizzle: aa,
                DomQuery: Wa,
                TreeWalker: Rr,
                TextSeeker: Nu,
                DOMUtils: Ja,
                ScriptLoader: tu,
                RangeUtils: Of,
                Serializer: Xh,
                StyleSheetLoader: wr,
                ControlSelection: Cf,
                BookmarkManager: Fl,
                Selection: Lh,
                Event: ai.Event,
            },
            html: { Styles: ro, Entities: Go, Node: Ud, Schema: to, SaxParser: Gd, DomParser: $h, Writer: tm, Serializer: nm },
            Env: xt,
            AddOnManager: su,
            Annotator: Ml,
            Formatter: Jv,
            UndoManager: Zv,
            EditorCommands: W1,
            WindowManager: Pv,
            NotificationManager: uv,
            EditorObservable: mx,
            Shortcuts: yx,
            Editor: kx,
            FocusManager: Ld,
            EditorManager: Hx,
            DOM: Ja.DOM,
            ScriptLoader: tu.ScriptLoader,
            PluginManager: Ov,
            ThemeManager: Bv,
            IconManager: _v,
            Resource: Zx,
            trim: Et.trim,
            isArray: Et.isArray,
            is: Et.is,
            toArray: Et.toArray,
            makeMap: Et.makeMap,
            each: Et.each,
            map: Et.map,
            grep: Et.grep,
            inArray: Et.inArray,
            extend: Et.extend,
            create: Et.create,
            walk: Et.walk,
            createNS: Et.createNS,
            resolve: Et.resolve,
            explode: Et.explode,
            _addCacheSuffix: Et._addCacheSuffix,
            isOpera: xt.opera,
            isWebKit: xt.webkit,
            isIE: xt.ie,
            isGecko: xt.gecko,
            isMac: xt.mac,
        },
        vw = Et.extend(Hx, hw),
        bw = vw;
    (window.tinymce = bw),
        (window.tinyMCE = bw),
        (function (e) {
            if ("object" == typeof module)
                try {
                    module.exports = e;
                } catch (e) {}
        })(vw);
})();

/* Ephox Fluffy plugin
 *
 * Copyright 2010-2016 Ephox Corporation.  All rights reserved.
 *
 * Version: 2.6.0-14
 */

!(function () {
    "use strict";
    function n(e) {
        return function (n) {
            return (
                (r = typeof (t = n)),
                (null === t
                    ? "null"
                    : "object" == r && (Array.prototype.isPrototypeOf(t) || (t.constructor && "Array" === t.constructor.name))
                    ? "array"
                    : "object" == r && (String.prototype.isPrototypeOf(t) || (t.constructor && "String" === t.constructor.name))
                    ? "string"
                    : r) === e
            );
            var t, r;
        };
    }
    function o(n) {
        return function () {
            return n;
        };
    }
    function t(n) {
        return n;
    }
    function r() {
        return p;
    }
    var e,
        u = "undefined" != typeof window ? window : Function("return this;")(),
        i = function (n, t) {
            return { isRequired: n, applyPatch: t };
        },
        a = function (i, o) {
            return function () {
                for (var n = [], t = 0; t < arguments.length; t++) n[t] = arguments[t];
                var r = o.apply(this, n),
                    e = void 0 === r ? n : r;
                return i.apply(this, e);
            };
        },
        c = function (n, t) {
            if (n) for (var r = 0; r < t.length; r++) t[r].isRequired(n) && t[r].applyPatch(n);
            return n;
        },
        f = n("object"),
        l = n("array"),
        s = function (n) {
            return e === n;
        },
        g = o(!1),
        d = o(!(e = void 0)),
        p = {
            fold: function (n, t) {
                return n();
            },
            isSome: g,
            isNone: d,
            getOr: t,
            getOrThunk: v,
            getOrDie: function (n) {
                throw new Error(n || "error: getOrDie called on none.");
            },
            getOrNull: o(null),
            getOrUndefined: o(void 0),
            or: t,
            orThunk: v,
            map: r,
            each: function () {},
            bind: r,
            exists: g,
            forall: d,
            filter: function () {
                return p;
            },
            toArray: function () {
                return [];
            },
            toString: o("none()"),
        };
    function v(n) {
        return n();
    }
    function h(n, t) {
        return (r = n), (e = t), -1 < D.call(r, e);
        var r, e;
    }
    function y(n, t) {
        return (function (n) {
            for (var t = [], r = 0, e = n.length; r < e; ++r) {
                if (!l(n[r])) throw new Error("Arr.flatten item " + r + " was not an array, input: " + n);
                U.apply(t, n[r]);
            }
            return t;
        })(
            (function (n, t) {
                for (var r = n.length, e = new Array(r), i = 0; i < r; i++) {
                    var o = n[i];
                    e[i] = t(o, i);
                }
                return e;
            })(n, t)
        );
    }
    function m(n, t) {
        for (var r = P(n), e = 0, i = r.length; e < i; e++) {
            var o = r[e];
            t(n[o], o);
        }
    }
    function E(r) {
        return function (n, t) {
            r[t] = n;
        };
    }
    function w(n, t) {
        var r,
            e,
            i,
            o = {},
            u = {};
        return (
            (r = t),
            (e = E(o)),
            (i = E(u)),
            m(n, function (n, t) {
                (r(n, t) ? e : i)(n, t);
            }),
            { t: o, f: u }
        );
    }
    function O(n, t) {
        return T(n, t) ? _(n[t]) : S();
    }
    function M(u) {
        return function () {
            for (var n = [], t = 0; t < arguments.length; t++) n[t] = arguments[t];
            if (0 === n.length) throw new Error("Can't merge zero objects");
            for (var r = {}, e = 0; e < n.length; e++) {
                var i = n[e];
                for (var o in i) T(i, o) && (r[o] = u(r[o], i[o]));
            }
            return r;
        };
    }
    function b(n) {
        if (s(n) || "" === n) return [];
        var t = l(n)
            ? y(n, function (n) {
                  return n.split(/[\s+,]/);
              })
            : n.split(/[\s+,]/);
        return y(t, function (n) {
            return 0 < n.length ? [n.trim()] : [];
        });
    }
    function x(n) {
        var t;
        return null !== (t = n.defaultOptions) && void 0 !== t ? t : n.defaultSettings;
    }
    function j(n, t) {
        var r = C(n, t),
            e = b(t.plugins),
            i = O(r, "custom_plugin_urls").getOr({}),
            o = w(i, function (n, t) {
                return h(e, t);
            }),
            u = O(r, "external_plugins").getOr({}),
            a = {};
        m(o.t, function (n, t) {
            a[t] = n;
        });
        var c = I(a, u);
        return I(t, 0 === P(c).length ? {} : { external_plugins: c });
    }
    var A = function (r) {
            function n() {
                return i;
            }
            function t(n) {
                return n(r);
            }
            var e = o(r),
                i = {
                    fold: function (n, t) {
                        return t(r);
                    },
                    isSome: d,
                    isNone: g,
                    getOr: e,
                    getOrThunk: e,
                    getOrDie: e,
                    getOrNull: e,
                    getOrUndefined: e,
                    or: n,
                    orThunk: n,
                    map: function (n) {
                        return A(n(r));
                    },
                    each: function (n) {
                        n(r);
                    },
                    bind: t,
                    exists: t,
                    forall: t,
                    filter: function (n) {
                        return n(r) ? i : p;
                    },
                    toArray: function () {
                        return [r];
                    },
                    toString: function () {
                        return "some(" + r + ")";
                    },
                };
            return i;
        },
        S = r,
        _ = function (n) {
            return null == n ? p : A(n);
        },
        D = Array.prototype.indexOf,
        U = Array.prototype.push,
        P = Object.keys,
        R = Object.hasOwnProperty,
        T = function (n, t) {
            return R.call(n, t);
        },
        C = M(function (n, t) {
            return f(n) && f(t) ? C(n, t) : t;
        }),
        I = M(function (n, t) {
            return t;
        }),
        N = {
            getCustomPluginUrls: j,
            patch: i(
                function () {
                    return !0;
                },
                function (r) {
                    (r.EditorManager.init = a(r.EditorManager.init, function (n) {
                        return [j(x(r), n)];
                    })),
                        (r.EditorManager.createEditor = a(r.EditorManager.createEditor, function (n, t) {
                            return [n, j(x(r), t)];
                        }));
                }
            ),
        };
    function k(n, t, r) {
        if (r || 2 === arguments.length) for (var e, i = 0, o = t.length; i < o; i++) (!e && i in t) || ((e = e || Array.prototype.slice.call(t, 0, i))[i] = t[i]);
        return n.concat(e || Array.prototype.slice.call(t));
    }
    function L(n, t) {
        return (function (n, t) {
            for (var r = null != t ? t : u, e = 0; e < n.length && null != r; ++e) r = r[n[e]];
            return r;
        })(n.split("."), t);
    }
    function q(n) {
        return parseInt(n, 10);
    }
    function V(n, t) {
        var r = n - t;
        return 0 == r ? 0 : 0 < r ? 1 : -1;
    }
    function z(n, t, r) {
        return { major: n, minor: t, patch: r };
    }
    function B(n) {
        var t = /([0-9]+)\.([0-9]+)\.([0-9]+)(?:(\-.+)?)/.exec(n);
        return t ? z(q(t[1]), q(t[2]), q(t[3])) : z(0, 0, 0);
    }
    function F(n, t) {
        return (
            !!n &&
            -1 ===
                (function (n, t) {
                    var r = V(n.major, t.major);
                    if (0 !== r) return r;
                    var e = V(n.minor, t.minor);
                    if (0 !== e) return e;
                    var i = V(n.patch, t.patch);
                    return 0 !== i ? i : 0;
                })(B([(r = n).majorVersion, r.minorVersion].join(".").split(".").slice(0, 3).join(".")), B(t))
        );
        var r;
    }
    function $(o) {
        return function (n) {
            var t = L("tinymce.util.Tools", u),
                r = b(n.plugins),
                e = x(o).forced_plugins || [],
                i = 0 < e.length ? r.concat(e) : r;
            return [t.extend({}, n, { plugins: i })];
        };
    }
    function G() {
        return new Date().getTime();
    }
    function H(e) {
        return function () {
            var n,
                t,
                r = ((t = "position"), (((n = e).currentStyle ? n.currentStyle[t] : window.getComputedStyle(n, null)[t]) || "").toLowerCase());
            return "absolute" === r || "fixed" === r;
        };
    }
    function J(n) {
        n.parentNode.removeChild(n);
    }
    function K(n, t) {
        n.notificationManager ? n.notificationManager.open({ text: t, type: "warning", timeout: 0, icon: "" }) : n.windowManager.alert(t);
    }
    function Q(n) {
        var t,
            r,
            e = L("tinymce.util.URI", u);
        (t = n.base_url) && ((this.baseURL = new e(this.documentBaseURL).toAbsolute(t.replace(/\/+$/, ""))), (this.baseURI = new e(this.baseURL))), (r = n.suffix), n.suffix && (this.suffix = r), (this.defaultSettings = n);
    }
    function W(n) {
        return [L("tinymce.util.Tools", u).extend({}, this.defaultSettings, n)];
    }
    function X(n) {
        c(n, [rn.patch, en.patch, Y.patch, N.patch]);
    }
    var Y = {
            patch: i(
                function (n) {
                    return F(n, "4.7.0");
                },
                function (r) {
                    (r.EditorManager.init = a(r.EditorManager.init, $(r.EditorManager))),
                        (r.EditorManager.createEditor = a(r.EditorManager.createEditor, function (n, t) {
                            return k([n], $(r.EditorManager)(t), !0);
                        }));
                }
            ),
        },
        Z = function (n, t, r, e, i) {
            var o,
                u = G();
            o = setInterval(function () {
                n() && (clearInterval(o), t()), G() - u > i && (clearInterval(o), r());
            }, e);
        },
        nn = function (n, t) {
            var r,
                e = (((r = document.createElement("div")).style.display = "none"), (r.className = "mce-floatpanel"), r);
            document.body.appendChild(e),
                Z(
                    H(e),
                    function () {
                        J(e), n();
                    },
                    function () {
                        J(e), t();
                    },
                    10,
                    5e3
                );
        },
        tn = function (n) {
            n.EditorManager.on("AddEditor", function (n) {
                var t = n.editor,
                    r = t.settings.service_message;
                r &&
                    nn(
                        function () {
                            K(t, r);
                        },
                        function () {
                            alert(r);
                        }
                    );
            });
        },
        rn = {
            patch: i(
                function (n) {
                    return "function" != typeof n.overrideDefaults;
                },
                function (r) {
                    tn(r),
                        (r.overrideDefaults = Q),
                        (r.EditorManager.init = a(r.EditorManager.init, W)),
                        (r.EditorManager.createEditor = a(r.EditorManager.createEditor, function (n, t) {
                            return k([n], W.call(r, t), !0);
                        }));
                }
            ),
        },
        en = {
            patch: i(
                function (n) {
                    return F(n, "4.5.0");
                },
                function (n) {
                    var e;
                    n.overrideDefaults = a(
                        n.overrideDefaults,
                        ((e = n),
                        function (n) {
                            var t = n.plugin_base_urls;
                            for (var r in t) e.PluginManager.urls[r] = t[r];
                        })
                    );
                }
            ),
        };
    X(u.tinymce);
})();

(function (cloudSettings) {
    tinymce.overrideDefaults(cloudSettings);
})({
    rtc_tenant_id: "no-origin",
    imagetools_proxy: "https://imageproxy.tiny.cloud/2/image",
    suffix: ".min",
    linkchecker_service_url: "https://hyperlinking.tiny.cloud",
    spellchecker_rpc_url: "https://spelling.tiny.cloud",
    spellchecker_api_key: "no-origin",
    tinydrive_service_url: "https://catalog.tiny.cloud",
    api_key: "no-origin",
    imagetools_api_key: "no-origin",
    tinydrive_api_key: "no-origin",
    forced_plugins: ["chiffer"],
    referrer_policy: "origin",
    content_css_cors: true,
    custom_plugin_urls: {},
    chiffer_snowplow_service_url: "https://sp.tinymce.com/i",
    mediaembed_api_key: "no-origin",
    rtc_service_url: "https://rtc.tiny.cloud",
    linkchecker_api_key: "no-origin",
    mediaembed_service_url: "https://hyperlinking.tiny.cloud",
    service_message:
        // 'We’re unable to check your domain because the referer header is missing. Please read the \u003ca target="_blank" href="https://www.tiny.cloud/docs/cloud-deployment-guide/cloud-troubleshooting/"\u003eGuide\u003c/a\u003e on how to ensure your referer header is present, so we can then customize your editor experience.',
        '',        
});
tinymce.baseURL = "https://cdn.tiny.cloud/1/no-origin/tinymce/5.10.2-126";

/* Ephox chiffer plugin
 *
 * Copyright 2010-2019 Tiny Technologies Inc. All rights reserved.
 *
 * Version: 1.12.0-18
 */

!(function () {
    "use strict";
    function n(t) {
        return !(null == t);
    }
    function o() {}
    function r(t, e) {
        return p.call(t, e);
    }
    function e(t) {
        var e = t.command;
        return r(S, e)
            ? (function (t) {
                  if (n(t.value) && r(t.value, "list-style-type")) {
                      t = t.value["list-style-type"];
                      return "advlist_" + ("" === t ? "default" : t);
                  }
              })(t)
            : r(g, e)
            ? g[e]
            : r(_, e)
            ? _[e]
            : r(v, e)
            ? v[e]
            : void 0;
    }
    function a() {
        return new Date().getTime();
    }
    function t(t, e) {
        var r,
            i,
            n,
            e =
                ((r = t),
                (i = e),
                {
                    send: function (t, e, n) {
                        var t = "?aid=" + i + "&tna=tinymce_cloud&p=web&dtm=" + e + "&stm=" + a() + "&tz=" + ("undefined" != typeof Intl ? encodeURIComponent(Intl.DateTimeFormat().resolvedOptions().timeZone) : "N%2FA") + "&e=se&se_ca=" + t,
                            o = document.createElement("img");
                        o.src = r.chiffer_snowplow_service_url + t;
                        t = function (t) {
                            return function () {
                                (o.onload = null), (o.onerror = null), n(t);
                            };
                        };
                        (o.onload = t(!0)), (o.onerror = t(!1));
                    },
                });
        return (
            (n = e),
            {
                sendStat: function (t) {
                    n.send(t, a(), o);
                },
            }
        );
    }
    var i,
        c,
        s,
        u,
        d,
        l,
        m =
            ((i = "string"),
            function (t) {
                return (
                    (t = typeof (e = t)),
                    (null === e
                        ? "null"
                        : "object" == t && (Array.prototype.isPrototypeOf(e) || (e.constructor && "Array" === e.constructor.name))
                        ? "array"
                        : "object" == t && (String.prototype.isPrototypeOf(e) || (e.constructor && "String" === e.constructor.name))
                        ? "string"
                        : t) === i
                );
                var e;
            }),
        f =
            ((c = void 0),
            function (t) {
                return c === t;
            }),
        p = Object.hasOwnProperty,
        _ = { mceInsertToc: "toc_insert", mceUpdateToc: "toc_update" },
        g = { mceEditImage: "imagetools_open_dialog", mceImageRotateLeft: "imagetools_rotate", mceImageRotateRight: "imagetools_rotate", mceImageFlipVertical: "imagetools_flip", mceImageFlipHorizontal: "imagetools_flip" },
        S = { InsertUnorderedList: !0, InsertOrderedList: !0 },
        v = { mceInsertTemplate: "template_insert", mceInsertDate: "insertdatetime_insert", mceInsertTime: "insertdatetime_insert", mcePreview: "preview_open_dialog", mceAnchor: "anchor_open_dialog" };
    (u = null !== (d = tinymce.defaultOptions) && void 0 !== d ? d : tinymce.defaultSettings),
        (d = { load: o }),
        (l = (function (t) {
            t = t.api_key;
            return m(t) ? t : void 0;
        })(u)),
        (d =
            void 0 === l
                ? d
                : ((s = t(u, l)).sendStat("script_load"),
                  {
                      load: function (t) {
                          t.once("init", function () {
                              return s.sendStat("init");
                          }),
                              t.once("focus", function () {
                                  return s.sendStat("focus");
                              }),
                              t.on("ExportPdf", function () {
                                  return s.sendStat("export_pdf");
                              }),
                              t.on("PastePreProcess PowerPasteTempStats", function (t) {
                                  t = t.source;
                                  n(t) && s.sendStat("powerpaste_" + t);
                              }),
                              t.on("VisualChars", function (t) {
                                  !0 === t.state && s.sendStat("visualchars_true");
                              }),
                              t.on("RtcSessionConnected", function (t) {
                                  var e = t.time;
                                  switch (e) {
                                      case 0:
                                          s.sendStat("rtc_started");
                                          break;
                                      case 5:
                                      case 10:
                                      case 20:
                                          s.sendStat("rtc_connected_" + e + "min");
                                  }
                              }),
                              t.on("RtcSessionError", function () {
                                  return s.sendStat("rtc_error");
                              }),
                              t.on("RtcSessionDirty", function () {
                                  return s.sendStat("rtc_edited");
                              }),
                              t.on("SpellcheckerLanguageChanged", function (t) {
                                  t = t.language;
                                  s.sendStat("spellcheckerpro_language_changed_" + t);
                              }),
                              t.on("ExecCommand", function (t) {
                                  t = e(t);
                                  f(t) || s.sendStat(t);
                              });
                      },
                  })),
        tinymce.PluginManager.add("chiffer", d.load);
})();
