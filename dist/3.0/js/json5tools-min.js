!(function (u, e) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = e())
    : "function" == typeof define && define.amd
    ? define(e)
    : (u.JSON5 = e());
})(this, function () {
  "use strict";
  function u(u, e) {
    return u((e = { exports: {} }), e.exports), e.exports;
  }
  var e = u(function (u) {
      var e = (u.exports =
        "undefined" != typeof window && window.Math == Math
          ? window
          : "undefined" != typeof self && self.Math == Math
          ? self
          : Function("return this")());
      "number" == typeof __g && (__g = e);
    }),
    t = u(function (u) {
      var e = (u.exports = { version: "2.6.5" });
      "number" == typeof __e && (__e = e);
    }),
    D =
      (t.version,
      function (u) {
        return "object" == typeof u ? null !== u : "function" == typeof u;
      }),
    r = function (u) {
      if (!D(u)) throw TypeError(u + " is not an object!");
      return u;
    },
    n = function (u) {
      try {
        return !!u();
      } catch (u) {
        return !0;
      }
    },
    o = !n(function () {
      return (
        7 !=
        Object.defineProperty({}, "a", {
          get: function () {
            return 7;
          },
        }).a
      );
    }),
    i = e.document,
    a = D(i) && D(i.createElement),
    s =
      !o &&
      !n(function () {
        return (
          7 !=
          Object.defineProperty(("div", a ? i.createElement("div") : {}), "a", {
            get: function () {
              return 7;
            },
          }).a
        );
      }),
    c = Object.defineProperty,
    l = {
      f: o
        ? Object.defineProperty
        : function (u, e, t) {
            if (
              (r(u),
              (e = (function (u, e) {
                if (!D(u)) return u;
                var t, r;
                if (
                  "function" == typeof (t = u.toString) &&
                  !D((r = t.call(u)))
                )
                  return r;
                if ("function" == typeof (t = u.valueOf) && !D((r = t.call(u))))
                  return r;
                throw TypeError("Can't convert object to primitive value");
              })(e)),
              r(t),
              s)
            )
              try {
                return c(u, e, t);
              } catch (u) {}
            if ("get" in t || "set" in t)
              throw TypeError("Accessors not supported!");
            return "value" in t && (u[e] = t.value), u;
          },
    },
    F = o
      ? function (u, e, t) {
          return l.f(
            u,
            e,
            (function (u, e) {
              return {
                enumerable: !1,
                configurable: !0,
                writable: !0,
                value: e,
              };
            })(0, t)
          );
        }
      : function (u, e, t) {
          return (u[e] = t), u;
        },
    C = {}.hasOwnProperty,
    E = function (u, e) {
      return C.call(u, e);
    },
    A = 0,
    d = Math.random(),
    f = u(function (u) {
      var D = e["__core-js_shared__"] || (e["__core-js_shared__"] = {});
      (u.exports = function (u, e) {
        return D[u] || (D[u] = void 0 !== e ? e : {});
      })("versions", []).push({
        version: t.version,
        mode: "global",
        copyright: "© 2019 Denis Pushkarev (zloirock.ru)",
      });
    })("native-function-to-string", Function.toString),
    p = u(function (u) {
      var D = "Symbol(".concat(
          void 0 === "src" ? "" : "src",
          ")_",
          (++A + d).toString(36)
        ),
        r = ("" + f).split("toString");
      (t.inspectSource = function (u) {
        return f.call(u);
      }),
        (u.exports = function (u, t, n, o) {
          var i = "function" == typeof n;
          i && (E(n, "name") || F(n, "name", t)),
            u[t] !== n &&
              (i && (E(n, D) || F(n, D, u[t] ? "" + u[t] : r.join(String(t)))),
              u === e
                ? (u[t] = n)
                : o
                ? u[t]
                  ? (u[t] = n)
                  : F(u, t, n)
                : (delete u[t], F(u, t, n)));
        })(Function.prototype, "toString", function () {
          return ("function" == typeof this && this[D]) || f.call(this);
        });
    }),
    B = function (u, e, t) {
      if (
        ((function (u) {
          if ("function" != typeof u)
            throw TypeError(u + " is not a function!");
        })(u),
        void 0 === e)
      )
        return u;
      switch (t) {
        case 1:
          return function (t) {
            return u.call(e, t);
          };
        case 2:
          return function (t, D) {
            return u.call(e, t, D);
          };
        case 3:
          return function (t, D, r) {
            return u.call(e, t, D, r);
          };
      }
      return function () {
        return u.apply(e, arguments);
      };
    },
    v = function (u, D, r) {
      var n,
        o,
        i,
        a,
        s = u & v.F,
        c = u & v.G,
        l = u & v.S,
        C = u & v.P,
        E = u & v.B,
        A = c ? e : l ? e[D] || (e[D] = {}) : (e[D] || {}).prototype,
        d = c ? t : t[D] || (t[D] = {}),
        f = d.prototype || (d.prototype = {});
      for (n in (c && (r = D), r))
        (i = ((o = !s && A && void 0 !== A[n]) ? A : r)[n]),
          (a =
            E && o
              ? B(i, e)
              : C && "function" == typeof i
              ? B(Function.call, i)
              : i),
          A && p(A, n, i, u & v.U),
          d[n] != i && F(d, n, a),
          C && f[n] != i && (f[n] = i);
    };
  (e.core = t),
    (v.F = 1),
    (v.G = 2),
    (v.S = 4),
    (v.P = 8),
    (v.B = 16),
    (v.W = 32),
    (v.U = 64),
    (v.R = 128);
  var g = v,
    m = Math.ceil,
    h = Math.floor,
    y = function (u) {
      return isNaN((u = +u)) ? 0 : (u > 0 ? h : m)(u);
    },
    w =
      (!1,
      function (u, e) {
        var t,
          D,
          r = String(
            (function (u) {
              if (null == u) throw TypeError("Can't call method on  " + u);
              return u;
            })(u)
          ),
          n = y(e),
          o = r.length;
        return n < 0 || n >= o
          ? void 0
          : (t = r.charCodeAt(n)) < 55296 ||
            t > 56319 ||
            n + 1 === o ||
            (D = r.charCodeAt(n + 1)) < 56320 ||
            D > 57343
          ? t
          : D - 56320 + ((t - 55296) << 10) + 65536;
      });
  g(g.P, "String", {
    codePointAt: function (u) {
      return w(this, u);
    },
  }),
    t.String.codePointAt;
  var S = Math.max,
    $ = Math.min,
    b = String.fromCharCode,
    x = String.fromCodePoint;
  g(g.S + g.F * (!!x && 1 != x.length), "String", {
    fromCodePoint: function (u) {
      for (
        var e, t, D, r = arguments, n = [], o = arguments.length, i = 0;
        o > i;

      ) {
        if (
          ((e = +r[i++]),
          (D = 1114111),
          ((t = y((t = e))) < 0 ? S(t + D, 0) : $(t, D)) !== e)
        )
          throw RangeError(e + " is not a valid code point");
        n.push(
          e < 65536 ? b(e) : b(55296 + ((e -= 65536) >> 10), (e % 1024) + 56320)
        );
      }
      return n.join("");
    },
  }),
    t.String.fromCodePoint;
  var N,
    O,
    k,
    I,
    V,
    P,
    j,
    L,
    J,
    _,
    M,
    T,
    U,
    R,
    z = {
      Space_Separator: /[\u1680\u2000-\u200A\u202F\u205F\u3000]/,
      ID_Start:
        /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312E\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FEA\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDF00-\uDF19]|\uD806[\uDCA0-\uDCDF\uDCFF\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE83\uDE86-\uDE89\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50\uDF93-\uDF9F\uDFE0\uDFE1]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00-\uDD1E\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]/,
      ID_Continue:
        /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u0860-\u086A\u08A0-\u08B4\u08B6-\u08BD\u08D4-\u08E1\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u09FC\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9-\u0AFF\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D00-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D54-\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19D9\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1CD0-\u1CD2\u1CD4-\u1CF9\u1D00-\u1DF9\u1DFB-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u2E2F\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099\u309A\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312E\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FEA\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDDFD\uDE80-\uDE9C\uDEA0-\uDED0\uDEE0\uDF00-\uDF1F\uDF2D-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE38-\uDE3A\uDE3F\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE6\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC00-\uDC46\uDC66-\uDC6F\uDC7F-\uDCBA\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD00-\uDD34\uDD36-\uDD3F\uDD50-\uDD73\uDD76\uDD80-\uDDC4\uDDCA-\uDDCC\uDDD0-\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE37\uDE3E\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEEA\uDEF0-\uDEF9\uDF00-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3C-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF50\uDF57\uDF5D-\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC00-\uDC4A\uDC50-\uDC59\uDC80-\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDB5\uDDB8-\uDDC0\uDDD8-\uDDDD\uDE00-\uDE40\uDE44\uDE50-\uDE59\uDE80-\uDEB7\uDEC0-\uDEC9\uDF00-\uDF19\uDF1D-\uDF2B\uDF30-\uDF39]|\uD806[\uDCA0-\uDCE9\uDCFF\uDE00-\uDE3E\uDE47\uDE50-\uDE83\uDE86-\uDE99\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC36\uDC38-\uDC40\uDC50-\uDC59\uDC72-\uDC8F\uDC92-\uDCA7\uDCA9-\uDCB6\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD47\uDD50-\uDD59]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDEF0-\uDEF4\uDF00-\uDF36\uDF40-\uDF43\uDF50-\uDF59\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50-\uDF7E\uDF8F-\uDF9F\uDFE0\uDFE1]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00-\uDD1E\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9D\uDC9E]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A]|\uD83A[\uDC00-\uDCC4\uDCD0-\uDCD6\uDD00-\uDD4A\uDD50-\uDD59]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uDB40[\uDD00-\uDDEF]/,
    },
    X = function (u) {
      return "string" == typeof u && z.Space_Separator.test(u);
    },
    H = function (u) {
      return (
        "string" == typeof u &&
        ((u >= "a" && u <= "z") ||
          (u >= "A" && u <= "Z") ||
          "$" === u ||
          "_" === u ||
          z.ID_Start.test(u))
      );
    },
    W = function (u) {
      return (
        "string" == typeof u &&
        ((u >= "a" && u <= "z") ||
          (u >= "A" && u <= "Z") ||
          (u >= "0" && u <= "9") ||
          "$" === u ||
          "_" === u ||
          "‌" === u ||
          "‍" === u ||
          z.ID_Continue.test(u))
      );
    },
    q = function (u) {
      return "string" == typeof u && /[0-9]/.test(u);
    },
    G = function (u) {
      return "string" == typeof u && /[0-9A-Fa-f]/.test(u);
    };
  function Q() {
    for (_ = "default", M = "", T = !1, U = 1; ; ) {
      R = Z();
      var u = Y[_]();
      if (u) return u;
    }
  }
  function Z() {
    if (N[I]) return String.fromCodePoint(N.codePointAt(I));
  }
  function K() {
    var u = Z();
    return (
      "\n" === u ? (V++, (P = 0)) : u ? (P += u.length) : P++,
      u && (I += u.length),
      u
    );
  }
  var Y = {
    default: function () {
      switch (R) {
        case "\t":
        case "\v":
        case "\f":
        case " ":
        case " ":
        case "\ufeff":
        case "\n":
        case "\r":
        case "\u2028":
        case "\u2029":
          return void K();
        case "/":
          return K(), void (_ = "comment");
        case void 0:
          return K(), uu("eof");
      }
      if (!X(R)) return Y[O]();
      K();
    },
    comment: function () {
      switch (R) {
        case "*":
          return K(), void (_ = "multiLineComment");
        case "/":
          return K(), void (_ = "singleLineComment");
      }
      throw ou(K());
    },
    multiLineComment: function () {
      switch (R) {
        case "*":
          return K(), void (_ = "multiLineCommentAsterisk");
        case void 0:
          throw ou(K());
      }
      K();
    },
    multiLineCommentAsterisk: function () {
      switch (R) {
        case "*":
          return void K();
        case "/":
          return K(), void (_ = "default");
        case void 0:
          throw ou(K());
      }
      K(), (_ = "multiLineComment");
    },
    singleLineComment: function () {
      switch (R) {
        case "\n":
        case "\r":
        case "\u2028":
        case "\u2029":
          return K(), void (_ = "default");
        case void 0:
          return K(), uu("eof");
      }
      K();
    },
    value: function () {
      switch (R) {
        case "{":
        case "[":
          return uu("punctuator", K());
        case "n":
          return K(), eu("ull"), uu("null", null);
        case "t":
          return K(), eu("rue"), uu("boolean", !0);
        case "f":
          return K(), eu("alse"), uu("boolean", !1);
        case "-":
        case "+":
          return "-" === K() && (U = -1), void (_ = "sign");
        case ".":
          return (M = K()), void (_ = "decimalPointLeading");
        case "0":
          return (M = K()), void (_ = "zero");
        case "1":
        case "2":
        case "3":
        case "4":
        case "5":
        case "6":
        case "7":
        case "8":
        case "9":
          return (M = K()), void (_ = "decimalInteger");
        case "I":
          return K(), eu("nfinity"), uu("numeric", 1 / 0);
        case "N":
          return K(), eu("aN"), uu("numeric", NaN);
        case '"':
        case "'":
          return (T = '"' === K()), (M = ""), void (_ = "string");
      }
      throw ou(K());
    },
    identifierNameStartEscape: function () {
      if ("u" !== R) throw ou(K());
      K();
      var u = tu();
      switch (u) {
        case "$":
        case "_":
          break;
        default:
          if (!H(u)) throw au();
      }
      (M += u), (_ = "identifierName");
    },
    identifierName: function () {
      switch (R) {
        case "$":
        case "_":
        case "‌":
        case "‍":
          return void (M += K());
        case "\\":
          return K(), void (_ = "identifierNameEscape");
      }
      if (!W(R)) return uu("identifier", M);
      M += K();
    },
    identifierNameEscape: function () {
      if ("u" !== R) throw ou(K());
      K();
      var u = tu();
      switch (u) {
        case "$":
        case "_":
        case "‌":
        case "‍":
          break;
        default:
          if (!W(u)) throw au();
      }
      (M += u), (_ = "identifierName");
    },
    sign: function () {
      switch (R) {
        case ".":
          return (M = K()), void (_ = "decimalPointLeading");
        case "0":
          return (M = K()), void (_ = "zero");
        case "1":
        case "2":
        case "3":
        case "4":
        case "5":
        case "6":
        case "7":
        case "8":
        case "9":
          return (M = K()), void (_ = "decimalInteger");
        case "I":
          return K(), eu("nfinity"), uu("numeric", U * (1 / 0));
        case "N":
          return K(), eu("aN"), uu("numeric", NaN);
      }
      throw ou(K());
    },
    zero: function () {
      switch (R) {
        case ".":
          return (M += K()), void (_ = "decimalPoint");
        case "e":
        case "E":
          return (M += K()), void (_ = "decimalExponent");
        case "x":
        case "X":
          return (M += K()), void (_ = "hexadecimal");
      }
      return uu("numeric", 0 * U);
    },
    decimalInteger: function () {
      switch (R) {
        case ".":
          return (M += K()), void (_ = "decimalPoint");
        case "e":
        case "E":
          return (M += K()), void (_ = "decimalExponent");
      }
      if (!q(R)) return uu("numeric", U * Number(M));
      M += K();
    },
    decimalPointLeading: function () {
      if (q(R)) return (M += K()), void (_ = "decimalFraction");
      throw ou(K());
    },
    decimalPoint: function () {
      switch (R) {
        case "e":
        case "E":
          return (M += K()), void (_ = "decimalExponent");
      }
      return q(R)
        ? ((M += K()), void (_ = "decimalFraction"))
        : uu("numeric", U * Number(M));
    },
    decimalFraction: function () {
      switch (R) {
        case "e":
        case "E":
          return (M += K()), void (_ = "decimalExponent");
      }
      if (!q(R)) return uu("numeric", U * Number(M));
      M += K();
    },
    decimalExponent: function () {
      switch (R) {
        case "+":
        case "-":
          return (M += K()), void (_ = "decimalExponentSign");
      }
      if (q(R)) return (M += K()), void (_ = "decimalExponentInteger");
      throw ou(K());
    },
    decimalExponentSign: function () {
      if (q(R)) return (M += K()), void (_ = "decimalExponentInteger");
      throw ou(K());
    },
    decimalExponentInteger: function () {
      if (!q(R)) return uu("numeric", U * Number(M));
      M += K();
    },
    hexadecimal: function () {
      if (G(R)) return (M += K()), void (_ = "hexadecimalInteger");
      throw ou(K());
    },
    hexadecimalInteger: function () {
      if (!G(R)) return uu("numeric", U * Number(M));
      M += K();
    },
    string: function () {
      switch (R) {
        case "\\":
          return (
            K(),
            void (M += (function () {
              switch (Z()) {
                case "b":
                  return K(), "\b";
                case "f":
                  return K(), "\f";
                case "n":
                  return K(), "\n";
                case "r":
                  return K(), "\r";
                case "t":
                  return K(), "\t";
                case "v":
                  return K(), "\v";
                case "0":
                  if ((K(), q(Z()))) throw ou(K());
                  return "\0";
                case "x":
                  return (
                    K(),
                    (function () {
                      var u = "",
                        e = Z();
                      if (!G(e)) throw ou(K());
                      if (((u += K()), (e = Z()), !G(e))) throw ou(K());
                      return (u += K()), String.fromCodePoint(parseInt(u, 16));
                    })()
                  );
                case "u":
                  return K(), tu();
                case "\n":
                case "\u2028":
                case "\u2029":
                  return K(), "";
                case "\r":
                  return K(), "\n" === Z() && K(), "";
                case "1":
                case "2":
                case "3":
                case "4":
                case "5":
                case "6":
                case "7":
                case "8":
                case "9":
                case void 0:
                  throw ou(K());
              }
              return K();
            })())
          );
        case '"':
          return T ? (K(), uu("string", M)) : void (M += K());
        case "'":
          return T ? void (M += K()) : (K(), uu("string", M));
        case "\n":
        case "\r":
          throw ou(K());
        case "\u2028":
        case "\u2029":
          !(function (u) {
            console.warn(
              "JSON5: '" +
                su(u) +
                "' in strings is not valid ECMAScript; consider escaping"
            );
          })(R);
          break;
        case void 0:
          throw ou(K());
      }
      M += K();
    },
    start: function () {
      switch (R) {
        case "{":
        case "[":
          return uu("punctuator", K());
      }
      _ = "value";
    },
    beforePropertyName: function () {
      switch (R) {
        case "$":
        case "_":
          return (M = K()), void (_ = "identifierName");
        case "\\":
          return K(), void (_ = "identifierNameStartEscape");
        case "}":
          return uu("punctuator", K());
        case '"':
        case "'":
          return (T = '"' === K()), void (_ = "string");
      }
      if (H(R)) return (M += K()), void (_ = "identifierName");
      throw ou(K());
    },
    afterPropertyName: function () {
      if (":" === R) return uu("punctuator", K());
      throw ou(K());
    },
    beforePropertyValue: function () {
      _ = "value";
    },
    afterPropertyValue: function () {
      switch (R) {
        case ",":
        case "}":
          return uu("punctuator", K());
      }
      throw ou(K());
    },
    beforeArrayValue: function () {
      if ("]" === R) return uu("punctuator", K());
      _ = "value";
    },
    afterArrayValue: function () {
      switch (R) {
        case ",":
        case "]":
          return uu("punctuator", K());
      }
      throw ou(K());
    },
    end: function () {
      throw ou(K());
    },
  };
  function uu(u, e) {
    return { type: u, value: e, line: V, column: P };
  }
  function eu(u) {
    for (var e = 0, t = u; e < t.length; e += 1) {
      var D = t[e];
      if (Z() !== D) throw ou(K());
      K();
    }
  }
  function tu() {
    for (var u = "", e = 4; e-- > 0; ) {
      var t = Z();
      if (!G(t)) throw ou(K());
      u += K();
    }
    return String.fromCodePoint(parseInt(u, 16));
  }
  var Du = {
    start: function () {
      if ("eof" === j.type) throw iu();
      ru();
    },
    beforePropertyName: function () {
      switch (j.type) {
        case "identifier":
        case "string":
          return (L = j.value), void (O = "afterPropertyName");
        case "punctuator":
          return void nu();
        case "eof":
          throw iu();
      }
    },
    afterPropertyName: function () {
      if ("eof" === j.type) throw iu();
      O = "beforePropertyValue";
    },
    beforePropertyValue: function () {
      if ("eof" === j.type) throw iu();
      ru();
    },
    beforeArrayValue: function () {
      if ("eof" === j.type) throw iu();
      "punctuator" !== j.type || "]" !== j.value ? ru() : nu();
    },
    afterPropertyValue: function () {
      if ("eof" === j.type) throw iu();
      switch (j.value) {
        case ",":
          return void (O = "beforePropertyName");
        case "}":
          nu();
      }
    },
    afterArrayValue: function () {
      if ("eof" === j.type) throw iu();
      switch (j.value) {
        case ",":
          return void (O = "beforeArrayValue");
        case "]":
          nu();
      }
    },
    end: function () {},
  };
  function ru() {
    var u;
    switch (j.type) {
      case "punctuator":
        switch (j.value) {
          case "{":
            u = {};
            break;
          case "[":
            u = [];
        }
        break;
      case "null":
      case "boolean":
      case "numeric":
      case "string":
        u = j.value;
    }
    if (void 0 === J) J = u;
    else {
      var e = k[k.length - 1];
      Array.isArray(e) ? e.push(u) : (e[L] = u);
    }
    if (null !== u && "object" == typeof u)
      k.push(u),
        (O = Array.isArray(u) ? "beforeArrayValue" : "beforePropertyName");
    else {
      var t = k[k.length - 1];
      O =
        null == t
          ? "end"
          : Array.isArray(t)
          ? "afterArrayValue"
          : "afterPropertyValue";
    }
  }
  function nu() {
    k.pop();
    var u = k[k.length - 1];
    O =
      null == u
        ? "end"
        : Array.isArray(u)
        ? "afterArrayValue"
        : "afterPropertyValue";
  }
  function ou(u) {
    return cu(
      void 0 === u
        ? "JSON5: invalid end of input at " + V + ":" + P
        : "JSON5: invalid character '" + su(u) + "' at " + V + ":" + P
    );
  }
  function iu() {
    return cu("JSON5: invalid end of input at " + V + ":" + P);
  }
  function au() {
    return cu("JSON5: invalid identifier character at " + V + ":" + (P -= 5));
  }
  function su(u) {
    var e = {
      "'": "\\'",
      '"': '\\"',
      "\\": "\\\\",
      "\b": "\\b",
      "\f": "\\f",
      "\n": "\\n",
      "\r": "\\r",
      "\t": "\\t",
      "\v": "\\v",
      "\0": "\\0",
      "\u2028": "\\u2028",
      "\u2029": "\\u2029",
    };
    if (e[u]) return e[u];
    if (u < " ") {
      var t = u.charCodeAt(0).toString(16);
      return "\\x" + ("00" + t).substring(t.length);
    }
    return u;
  }
  function cu(u) {
    var e = new SyntaxError(u);
    return (e.lineNumber = V), (e.columnNumber = P), e;
  }
  return {
    parse: function (u, e) {
      (N = String(u)),
        (O = "start"),
        (k = []),
        (I = 0),
        (V = 1),
        (P = 0),
        (j = void 0),
        (L = void 0),
        (J = void 0);
      do {
        (j = Q()), Du[O]();
      } while ("eof" !== j.type);
      return "function" == typeof e
        ? (function u(e, t, D) {
            var r = e[t];
            if (null != r && "object" == typeof r)
              for (var n in r) {
                var o = u(r, n, D);
                void 0 === o ? delete r[n] : (r[n] = o);
              }
            return D.call(e, t, r);
          })({ "": J }, "", e)
        : J;
    },
    stringify: function (u, e, t) {
      var D,
        r,
        n,
        o = [],
        i = "",
        a = "";
      if (
        (null == e ||
          "object" != typeof e ||
          Array.isArray(e) ||
          ((t = e.space), (n = e.quote), (e = e.replacer)),
        "function" == typeof e)
      )
        r = e;
      else if (Array.isArray(e)) {
        D = [];
        for (var s = 0, c = e; s < c.length; s += 1) {
          var l = c[s],
            F = void 0;
          "string" == typeof l
            ? (F = l)
            : ("number" == typeof l ||
                l instanceof String ||
                l instanceof Number) &&
              (F = String(l)),
            void 0 !== F && D.indexOf(F) < 0 && D.push(F);
        }
      }
      return (
        t instanceof Number
          ? (t = Number(t))
          : t instanceof String && (t = String(t)),
        "number" == typeof t
          ? t > 0 &&
            ((t = Math.min(10, Math.floor(t))), (a = "          ".substr(0, t)))
          : "string" == typeof t && (a = t.substr(0, 10)),
        (function u(e, t) {
          var n = t[e];
          switch (
            (null != n &&
              ("function" == typeof n.toJSON5
                ? (n = n.toJSON5(e))
                : "function" == typeof n.toJSON && (n = n.toJSON(e))),
            r && (n = r.call(t, e, n)),
            n instanceof Number
              ? (n = Number(n))
              : n instanceof String
              ? (n = String(n))
              : n instanceof Boolean && (n = n.valueOf()),
            n)
          ) {
            case null:
              return "null";
            case !0:
              return "true";
            case !1:
              return "false";
          }
          return "string" == typeof n
            ? C(n)
            : "number" == typeof n
            ? String(n)
            : "object" == typeof n
            ? Array.isArray(n)
              ? (function (e) {
                  if (o.indexOf(e) >= 0)
                    throw TypeError("Converting circular structure to JSON5");
                  o.push(e);
                  var t = i;
                  i += a;
                  for (var D, r = [], n = 0; n < e.length; n++) {
                    var s = u(String(n), e);
                    r.push(void 0 !== s ? s : "null");
                  }
                  if (0 === r.length) D = "[]";
                  else if ("" === a) {
                    D = "[" + r.join(",") + "]";
                  } else {
                    var c = ",\n" + i,
                      l = r.join(c);
                    D = "[\n" + i + l + ",\n" + t + "]";
                  }
                  return o.pop(), (i = t), D;
                })(n)
              : (function (e) {
                  if (o.indexOf(e) >= 0)
                    throw TypeError("Converting circular structure to JSON5");
                  o.push(e);
                  var t = i;
                  i += a;
                  for (
                    var r, n, s = [], c = 0, l = D || Object.keys(e);
                    c < l.length;
                    c += 1
                  ) {
                    var F = l[c],
                      C = u(F, e);
                    if (void 0 !== C) {
                      var A = E(F) + ":";
                      "" !== a && (A += " "), (A += C), s.push(A);
                    }
                  }
                  if (0 === s.length) r = "{}";
                  else if ("" === a) r = "{" + (n = s.join(",")) + "}";
                  else {
                    var d = ",\n" + i;
                    (n = s.join(d)), (r = "{\n" + i + n + ",\n" + t + "}");
                  }
                  return o.pop(), (i = t), r;
                })(n)
            : void 0;
        })("", { "": u })
      );
      function C(u) {
        for (
          var e = { "'": 0.1, '"': 0.2 },
            t = {
              "'": "\\'",
              '"': '\\"',
              "\\": "\\\\",
              "\b": "\\b",
              "\f": "\\f",
              "\n": "\\n",
              "\r": "\\r",
              "\t": "\\t",
              "\v": "\\v",
              "\0": "\\0",
              "\u2028": "\\u2028",
              "\u2029": "\\u2029",
            },
            D = "",
            r = 0;
          r < u.length;
          r++
        ) {
          var o = u[r];
          switch (o) {
            case "'":
            case '"':
              e[o]++, (D += o);
              continue;
            case "\0":
              if (q(u[r + 1])) {
                D += "\\x00";
                continue;
              }
          }
          if (t[o]) D += t[o];
          else if (o < " ") {
            var i = o.charCodeAt(0).toString(16);
            D += "\\x" + ("00" + i).substring(i.length);
          } else D += o;
        }
        var a =
          n ||
          Object.keys(e).reduce(function (u, t) {
            return e[u] < e[t] ? u : t;
          });
        return a + (D = D.replace(new RegExp(a, "g"), t[a])) + a;
      }
      function E(u) {
        if (0 === u.length) return C(u);
        var e = String.fromCodePoint(u.codePointAt(0));
        if (!H(e)) return C(u);
        for (var t = e.length; t < u.length; t++)
          if (!W(String.fromCodePoint(u.codePointAt(t)))) return C(u);
        return u;
      }
    },
  };
});
var previouskey,
  toolstype = "json",
  isFullScreen = !1,
  userId = 0;
function preInitEditors() {
  if ("json" == toolstype)
    createJsonEditor(),
      cleanJSONEditor("all"),
      setDataInInputEditor(getFromLocalStorage());
  else if ("xml" == toolstype || "xml-viewer" == toolstype) createXMLEditor();
  else if ("yaml" == toolstype) createYAMLEditor();
  else if ("html" == toolstype) createHTMLEditor();
  else if ("escaper" == toolstype) createEscaperEditor();
  else if ("encoder" == toolstype) createEncoderEditor();
  else if ("jsontree" == toolstype) createJsonTreeEditor();
  else if ("excel" == toolstype) createExcelOutputEditor();
  else if ("css" == toolstype) createCSSEditor();
  else if ("langconvert" == toolstype) createDatatoLangEditor();
  else if ("json5" == toolstype) createJSON5Editor();
  else if ("prettier" == toolstype) createPrettierEditor();
  else if ("csv" == toolstype) createCSVEditor();
  else {
    if ("samples" != toolstype) return;
    createSampleEditor();
  }
}
function postInitEditors() {
  $(document).ajaxSend(function (u, e, t) {
    $("#pluswrap").removeClass("hide");
  }),
    $(document).ajaxComplete(function (u, e, t) {
      $("#pluswrap").addClass("hide");
    }),
    isDataUrlAvailable(),
    handleCtrlV(),
    checkIfUserLoggedinlogin(),
    $("#fileopen").click(function () {
      openFile();
    }),
    $("#default_file").change(function () {
      (formdata = new FormData()),
        $(this).prop("files").length > 0 &&
          ((file = $(this).prop("files")[0]),
          formdata.append("userfile", file),
          readSelectedFile());
    });
}
function checkIfUserLoggedinlogin() {
  var u = getCookie("loggedinuser");
  "" != u
    ? ((userId = getCookie("loggedinuserid")),
      $("#loggedUserName").text(u),
      $("#loginDropdown").show(),
      $("#loginDiv").hide())
    : ($("#loginDropdown").hide(), $("#loginDiv").show(), (userId = 0));
}
function getCookie(u) {
  for (
    var e = u + "=", t = document.cookie.split(";"), D = 0;
    D < t.length;
    D++
  ) {
    for (var r = t[D]; " " == r.charAt(0); ) r = r.substring(1);
    if (0 == r.indexOf(e))
      return (e = r.substring(e.length, r.length)).replace(/\+/g, " ");
  }
  return "";
}
function defaultAction() {
  $("#defaultaction").click();
}
function preLogin() {
  storePreviousPageURL(), window.open("/login", "_self");
}
function storePreviousPageURL() {
  localStorage &&
    localStorage.setItem("urlBeforeLogin", window.location.pathname);
}
function preLogout() {
  storePreviousPageURL(), window.open("/logout", "_self");
}
function postLoginLogout() {
  var u = window.location.pathname;
  if (localStorage) {
    var e = localStorage.getItem("urlBeforeLogin");
    e && u !== e && window.open(e, "_self");
  }
}
function isAceEditor(u) {
  return $(u.container).hasClass("ace_editor");
}
function getOverlayClass(u) {
  return isAceEditor(u)
    ? "overlayaceeditor"
    : void 0 !== u && u instanceof JSONEditor
    ? "overlayjsoneditor"
    : void 0;
}
function addOverlay(u) {
  if ("input" == u) {
    $("#inputdiv").addClass("overlay"),
      $("#inputFullScreen").hide(),
      $("#inputCloseScreen").show(),
      (fullscreenEditor = "input"),
      $("#inputeditor").addClass(getOverlayClass(inputEditor));
    try {
      inputEditor.resize();
    } catch (u) {}
  } else if ("output" == u) {
    $("#outputdiv").addClass("overlay"),
      $("#outputFullScreen").hide(),
      $("#outputCloseScreen").show(),
      (fullscreenEditor = "output"),
      $("#outputeditor").addClass(getOverlayClass(outputEditor));
    try {
      outputEditor.resize();
    } catch (u) {}
  }
  (isFullScreen = !0), $("body").css("overflow", "hidden");
}
function removeOverlay(u) {
  if ("input" == u) {
    $("#inputdiv").removeClass("overlay"),
      $("#inputFullScreen").show(),
      $("#inputCloseScreen").hide(),
      $("#inputeditor").removeClass(getOverlayClass(inputEditor));
    try {
      inputEditor.resize();
    } catch (u) {}
  } else if ("output" == u) {
    $("#outputdiv").removeClass("overlay"),
      $("#outputFullScreen").show(),
      $("#outputCloseScreen").hide(),
      $("#outputeditor").removeClass(getOverlayClass(outputEditor));
    try {
      outputEditor.resize();
    } catch (u) {}
  }
  $("body").css("overflow", ""), (isFullScreen = !1);
}
function updateFullScreenIcons(u) {
  isFullScreen
    ? "input" == u
      ? ($("#inputFullScreen").hide(),
        $("#inputCloseScreen").show(),
        (fullscreenEditor = "input"))
      : "output" == u &&
        ($("#outputFullScreen").hide(),
        $("#outputCloseScreen").show(),
        (fullscreenEditor = "output"))
    : "input" == u
    ? ($("#inputFullScreen").show(), $("#inputCloseScreen").hide())
    : "output" == u &&
      ($("#outputFullScreen").show(), $("#outputCloseScreen").hide());
}
function getCookie(u) {
  for (
    var e = u + "=", t = document.cookie.split(";"), D = 0;
    D < t.length;
    D++
  ) {
    for (var r = t[D]; " " == r.charAt(0); ) r = r.substring(1);
    if (0 == r.indexOf(e))
      return (e = r.substring(e.length, r.length)).replace(/\+/g, " ");
  }
  return "";
}
function copyToClipboard(u) {
  var e = $("<textarea>");
  $("body").append(e),
    e.val(u).select(),
    document.execCommand("copy"),
    e.remove(),
    $("#flymessage").toggleClass("in"),
    setTimeout(function () {
      $("#flymessage").removeClass("in");
    }, 2e3);
}
function setMessage(u, e, t) {
  void 0 === t && (t = !0), $("#msgDiv").html("");
  var D = "";
  (D =
    "success" == u
      ? "/" == window.location.pathname
        ? '<div class="alert alert-info" style="margin-top: 0px;margin-bottom: 5px;">'
        : '<div class="alert alert-info" >'
      : '<div class="alert alert-danger" >'),
    (D +=
      '<a href="#" class="close" data-dismiss="alert" aria-label="close" id="errorClose">&times;</a>'),
    (D += "<label>" + e + "</label></div>"),
    $("#msgDiv").html(D),
    t &&
      setTimeout(function () {
        $("#errorClose").click();
      }, 3e3);
}
function decodeSpecialCharacter(u) {
  return u
    .replace(/\&amp;/g, "&")
    .replace(/\&gt;/g, ">")
    .replace(/\&lt;/g, "<")
    .replace(/\&quot;/g, '"');
}
function setModelTitle(u) {
  "Formatted JSON" == u ? addOutputIconstoEditor(!0) : addOutputIconstoEditor();
}
function hideMessage() {
  $("#msgDiv").html(""), $("#outputeditor .menu").show();
}
function loadUrl() {
  var u = $("#path").val();
  u.trim().length > 5 && ($("#loadFileClose").click(), load(u));
}
function load(u) {
  $.ajax({
    type: "post",
    url: "//codebeautify.com/URLService",
    dataType: "text",
    data: { path: u },
    success: function (u) {
      null != u && null != u && 0 != u.trim().length && setExternalURLData(u);
    },
    error: function (u, e, t) {
      setMessage("error", "Failed to load data=" + e), cleanJSONEditor("all");
    },
  });
}
function getDataFromUrlId(u) {
  $.ajax({
    type: "post",
    url: "/service/getDataFromID",
    dataType: "json",
    data: { urlid: u, toolstype: toolstype },
    success: function (u) {
      null != u && null != u && 0 != u.length
        ? setDataView(u)
        : alert("This URL does not Exist.");
    },
    error: function (u, e, t) {
      setMessage("error", "Failed to load data=" + t),
        cleanJSONEditor("editor"),
        cleanJSONEditor();
    },
  });
}
function setExternalURLData(u) {
  "json" == toolstype
    ? setJSONDataFromResponse(u)
    : "xml" == toolstype
    ? setXMLDataFromResponse(u)
    : "yaml" == toolstype
    ? yamlInputeditor.setValue(u)
    : inputEditor.setValue(u);
}
function setDataView(u) {
  $("#title").val(u.title),
    $("#tags").val(u.tags),
    $("#desc").val(u.desc),
    "json" == toolstype
      ? setJSONDataFromResponse(u.content, u.lastaction)
      : "xml" == toolstype
      ? setXMLDataFromResponse(u.content, u.lastaction)
      : "yaml" == toolstype
      ? yamlInputeditor.setValue(u.content)
      : inputEditor.setValue(u.content),
    (userId = u.user_id),
    $("#id").val(u.id);
}
function setJSONDataFromResponse(u, e) {
  try {
    var t = $.parseJSON(u);
    inputEditor.setText(JSON.stringify(t, null, 2)),
      null != e ? updateJSONOutput(e) : defaultAction();
  } catch (e) {
    setMessage("error", "Invalid JSON Data: " + e), inputEditor.setText(u);
  }
}
function setXMLDataFromResponse(u, e) {
  try {
    inputEditor.setValue(u), null != e ? updateXMLOutput(e) : defaultAction();
  } catch (u) {
    setMessage("error", "Invalid XML Data: " + u);
  }
}
function openFile() {
  $("input[type=file]").click();
}
function readSelectedFile() {
  $("#loadFileClose").click();
  $("#viewname").val();
  var u = "/service/uploadFile";
  "excel-to-html" == $("#viewname").val() && (u = "SheetReader/uploadFile"),
    $.ajax({
      url: u,
      type: "POST",
      data: formdata,
      processData: !1,
      contentType: !1,
      success: function (u) {
        "error" != u
          ? "excel-to-html" == $("#viewname").val()
            ? converExcelToHtml(u)
            : (setDataInInputEditor(u), defaultAction())
          : setMessage("error", "Error in Loading File.");
      },
    });
}
function download() {
  var u = outputEditor.getText();
  if (0 != u.trim().length) {
    if ("function" != typeof saveAs)
      return void $.loadScript("dist/js/vendor/FileSaver.min.js", download);
    var e = outputEditor.getMode();
    if ("tree" === e || "form" === e || "view" === e) {
      var t = $.parseJSON(u);
      u = JSON.stringify(t, null, 2);
    }
    var D = new Blob(["" + u], { type: "text/plain;charset=utf-8" });
    (filename = "jsonformatter.txt"),
      "jsonToxml" == last_action && (filename = "jsonformatter.xml"),
      saveAs(D, filename);
  } else setMessage("error", "Sorry Result is Empty");
}
function clearInput(u) {
  "saveDialog" == u
    ? ($("#desc").val(""), $("#title").val(""), $("#tags").val(""))
    : $("#path").val("");
}
function handleCtrlV() {
  $(document).keyup(function (u) {
    (u.ctrlKey && 86 == u.keyCode) || (17 == previouskey && 86 == u.keyCode)
      ? (defaultAction(), (previouskey = -1))
      : (previouskey = u.keyCode);
  });
}
function Action_Save() {
  if (
    0 ==
    ("xml" == toolstype
      ? inputEditor.getValue()
      : "yaml" == toolstype
      ? yamlInputeditor.getValue()
      : "html" == toolstype
      ? inputEditor.getValue()
      : inputEditor.getText()
    ).trim().length
  )
    showErrorDialog("Sorry,Input is Empty");
  else {
    var u = $("#dataUrl").val();
    0 != userId && 0 != u.trim().length
      ? $("#btnUpdate").show()
      : ($("#btnUpdate").hide(), clearInput("saveDialog")),
      $("#openSave").click();
  }
}
function save(u) {
  var e,
    t = $("#title").val();
  null != t && 0 != t.length
    ? ($("#loadSaveClose").click(),
      (e =
        "xml" == toolstype
          ? inputEditor.getValue()
          : "yaml" == toolstype
          ? yamlInputeditor.getValue()
          : "html" == toolstype
          ? inputEditor.getValue()
          : inputEditor.getText()),
      $.ajax({
        url: "/service/save",
        dataType: "text",
        type: "post",
        async: !1,
        data: {
          content: e,
          title: $("#title").val(),
          id: $("#id").val(),
          user_id: userId,
          desc: $("#desc").val(),
          tags: $("#tags").val().trim(),
          viewname: $("#viewname").val().trim(),
          expirytime: $("#expiryTime").val().trim(),
          lastaction: last_action,
          toolstype: toolstype,
        },
        success: function (e) {
          if ("error" != e) {
            var t = null;
            setMessage(
              "success",
              "Data saved successfully - <a class='white' href ='" +
                (t =
                  "index" == $("#viewname").val().trim()
                    ? "https://" + location.host + "/" + e
                    : "https://" +
                      location.host +
                      "/" +
                      $("#viewname").val().trim() +
                      "/" +
                      e) +
                "'>" +
                t +
                "</a>",
              !1
            ),
              null != u && shareLink(t);
          } else alert("Please validate the input and try again.");
        },
        error: function (u, e, t) {
          setMessage("error", "Error in data saving");
        },
      }))
    : alert("Title is required");
}
function update() {
  var u;
  $("#loadSaveClose").click(),
    (u =
      "xml" == toolstype
        ? inputEditor.getValue()
        : "yaml" == toolstype
        ? yamlInputeditor.getValue()
        : "html" == toolstype
        ? inputEditor.getValue()
        : inputEditor.getText()),
    $.ajax({
      url: "/service/update",
      dataType: "text",
      type: "post",
      data: {
        id: $("#id").val(),
        content: u,
        title: $("#title").val(),
        desc: $("#desc").val(),
        tags: $("#tags").val().trim(),
      },
      success: function (u) {
        setMessage("success", "Data updatd successfully");
      },
      error: function (u, e, t) {
        setMessage("error", "Error in data updating");
      },
    });
}
function shareLink(u) {
  "google" == getProvider()
    ? window.open("https://plus.google.com/share?url=" + u, "_blank")
    : window.open("https://www.facebook.com/share.php?u=" + u, "_blank");
}
$(function () {
  if (
    ($(window).scrollTop(0),
    "recentLinks" == (toolstype = $("#type").val().trim()))
  ) {
    var u = $("#clickedLink").val() + "Link";
    $("#linkDiv a.disabled").removeClass("disabled").addClass("active"),
      $("#linkDiv a#" + u)
        .removeClass("active")
        .addClass("disabled");
  }
  0 != $("#inputeditor").length && preInitEditors();
}),
  (jQuery.loadScript = function (u, e) {
    $.ajaxSetup({ cache: !0 }),
      jQuery.ajax({ url: u, dataType: "script", success: e, async: !0 }),
      $.ajaxSetup({ cache: !1 });
  }),
  $(document).keyup(function (u) {
    27 == u.keyCode && removeOverlay(fullscreenEditor);
  }),
  $(".navbar-collapse ul li a").click(function () {
    $(".navbar-toggle:visible").click();
  });
var old,
  online = function (u) {
    var e = new Date().getTime() / 1e3;
    return u && u.access_token && u.expires > e;
  };
function isDataUrlAvailable() {
  if (0 != $("#dataUrl").length) {
    var u = $("#dataUrl").val();
    0 != u.trim().length &&
      (6 == u.trim().length ? getDataFromUrlId(u) : load(u));
  }
}
function saveToLocalStorage(u) {
  localStorage &&
    (localStorage.setItem($("#viewname").val(), ""),
    localStorage.setItem($("#viewname").val(), u));
}
function getFromLocalStorage() {
  if (localStorage) {
    var u = localStorage.getItem($("#viewname").val());
    if (null != u && "URL is not valid." != u) return u;
  }
  return "";
}
function showErrorDialog(u) {
  $("#errorMsg").text(u), $("#openError").click();
}
function htmlOutput(u) {
  var e = u;
  if (
    (void 0 === u &&
      (e =
        "html-editor" == $("#viewname").val()
          ? $("#summernote").summernote("code")
          : inputEditor.getValue()),
    e.trim().length > 0)
  ) {
    var t = document.getElementById("result1").contentWindow.document;
    old != e && ((old = e), t.open(), t.write(old), t.close()),
      $("html, body").animate({ scrollTop: 0 }, 10);
  }
}
function getCSVTOTSV(u) {
  return u.split(",").join("\t");
}
function toHTML(u) {
  if (0 != u.trim().length) {
    (rows = ""), (thead = "<tr>");
    var e = Papa.parse(u),
      t = e.data,
      D = t.slice(1, t.length);
    D.sort(function (u, e) {
      return e.length - u.length;
    }),
      0 == D.length && (D = e.data);
    var r = 0;
    for (r = 0; r < D[0].length; r++)
      r < t[0].length
        ? (thead += "<th>" + t[0][r] + "</th>")
        : (thead += "<th>COLUMN" + (r + 1) + "</th>");
    thead += "</tr>";
    for (var n = 1; n < t.length; n++) {
      for (rows += "<tr>", r = 0; r < D[0].length; r++)
        r < t[n].length
          ? (rows += "<td>" + t[n][r] + "</td>")
          : (rows += "<td>&nbsp</td>");
      rows += "</tr>";
    }
    return (
      htmlOutput(
        "<table border=1><thead>\n" +
          thead +
          "</thead><tbody>\n" +
          rows +
          "</tbody></table>",
        ext
      ),
      old
    );
  }
  openErrorDialog("Sorry Input is Empty");
}
function init() {
  adsBlocked(function (u) {
    u ? $("#ablocker-big").show() : $("#ablocker-big").hide();
  });
}
function adsBlocked(u) {
  var e = new Request(
    "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js",
    { method: "HEAD", mode: "no-cors" }
  );
  fetch(e)
    .then(function (u) {
      return u;
    })
    .then(function (e) {
      console.log(e), u(!1);
    })
    .catch(function (e) {
      console.log(e), u(!0);
    });
}
$(function () {
  postInitEditors(), init();
});
var inputEditor,
  outputEditor,
  editorOutput,
  last_action = "beautify",
  fullscreenEditor = "";
function createJSON5Editor() {
  0 != $("#inputeditor").length &&
    ((inputEditor = ace.edit("inputeditor"))
      .getSession()
      .setMode("ace/mode/json5"),
    inputEditor.getSession().setUseWrapMode(!0),
    inputEditor.setOptions({ fontSize: "12pt" }),
    addInputIconstoEditor(),
    inputEditor.on("change", function () {
      saveToLocalStorage(inputEditor.getValue());
    }),
    inputEditor.setValue(getFromLocalStorage(), 1),
    (outputEditor = ace.edit("outputeditor"))
      .getSession()
      .setMode("ace/mode/json5"),
    outputEditor.getSession().setUseWrapMode(!0),
    outputEditor.setOptions({ fontSize: "12pt" }),
    outputEditor.setValue(""),
    addOutputIconstoEditor());
}
function setDataInInputEditor(u) {
  inputEditor.setValue(u, 1);
}
function addInputIconstoEditor() {
  var u = $(".rightmenu");
  $(u).replaceWith(
    '<div class="btn-group btn-group-sm right"><div id="fileopen" class="cursor-pointer btn-sm fa fa-folder-open" title="Open File" ></div><div class="cursor-pointer btn-sm fa fa-floppy-o" title="Save online" onclick="Action_Save();"></div><div class="cursor-pointer btn-sm fa fa-print" title="Print CSS" onclick="printCSS();"></div><div class="cursor-pointer btn-sm fa fa-times" title="Clear" onclick="clearEditor(\'inputcsseditor\')"></div><div id="inputcopy" title="Copy to Clipboard" class="cursor-pointer btn-sm btn-shrink fa fa-files-o"></div><div id="inputFullScreen" title="fullscreen" onclick="addOverlay(\'input\');" class="cursor-pointer btn-sm btn-fullscreen fa fa-arrows-alt"></div><div id="inputCloseScreen" title="Close" onclick="removeOverlay(\'input\');" style="display:none" class="cursor-pointer btn-sm btn-fullscreen fa fa-window-close"></div></div>'
  ),
    $(u).show(),
    $("#inputcopy").click(function () {
      copyToClipboard(inputEditor.getValue());
    }),
    inputEditor.focus();
}
function addOutputIconstoEditor(u) {
  var e = $(".outputrightmenu");
  $(e).after(
    '<div id="outputToolBar" class="btn-group btn-group-sm right"><div class="cursor-pointer btn-sm fa fa-times" title="Clear" onclick="clearEditor()"></div><div class="cursor-pointer btn-sm fa fa-download" title="Download" onclick="downloadingJSON5Tool();"></div><div id="outputcopy" title="Copy to Clipboard" class="cursor-pointer btn-sm btn-shrink fa fa-files-o"></div><div id="outputFullScreen" title="fullscreen" onclick="addOverlay(\'output\');" class="cursor-pointer btn-sm btn-fullscreen fa fa-arrows-alt"></div><div id="outputCloseScreen" title="Close" onclick="removeOverlay(\'output\');" style="display:none" class="cursor-pointer btn-sm btn-fullscreen fa fa-window-close"></div></div>'
  ),
    u ? $(e).show() : $(e).hide(),
    $("#outputcopy").click(function () {
      copyToClipboard(outputEditor.getValue());
    });
}
function clearEditor(u) {
  "inputcsseditor" == u
    ? inputEditor.setValue("")
    : "all" == u
    ? (inputEditor.setValue(""), outputEditor.setValue(""))
    : outputEditor.setValue("");
}
function validateJSON5() {
  var u = inputEditor.getValue();
  try {
    JSON5.parse(u);
    outputEditor.setValue("VALID JSON5"),
      setMessage("success", "VALID JSON5", !1);
  } catch (u) {
    outputEditor.setValue(u.message), setMessage("error", u.message);
  }
}
function formatJSON5() {
  var u = inputEditor.getValue();
  try {
    var e = JSON5.parse(u);
    outputEditor.setValue(JSON5.stringify(e, null, 2), 1);
  } catch (u) {
    outputEditor.setValue(u.message), setMessage("error", u.message);
  }
}
function loadJSON5SampleData() {
  if (0 != $("#inputeditor").length) {
    var u = JSON5.parse(getJSON5Sample());
    inputEditor.setValue(JSON5.stringify(u, null, 2), 1), defaultAction();
  }
}
function getJSON5Sample() {
  return "{witharray: [{name: 'Joe', age: 27},{name: 'Jane', age: 32},],withNestedArray: [[1, true, 'three'],[4, 'five', 0x6],],withNumbers:{integer: 123,withFractionPart: 123.456,onlyFractionPart: .456,withExponent: 123e-456,positiveHex: 0xdecaf,negativeHex: -0xC0FFEE,positiveInfinity: Infinity,negativeInfinity: -Infinity,notANumber: NaN,}}";
}
function downloadingJSON5Tool() {
  var u = outputEditor.getValue();
  if (0 != u.trim().length) {
    if ("function" != typeof saveAs)
      return void $.loadScript(
        "dist/js/vendor/FileSaver.min.js",
        downloadingJSON5Tool
      );
    var e = new Blob(["" + u], { type: "text/plain;charset=utf-8" });
    (filename = "json5.txt"), saveAs(e, filename);
  } else setMessage("error", "Sorry Result is Empty");
}
