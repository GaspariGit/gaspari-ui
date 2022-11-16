import { defineComponent as L, openBlock as d, createElementBlock as m, normalizeClass as se, renderSlot as O, createElementVNode as h, toDisplayString as w, createTextVNode as T, ref as q, createCommentVNode as E, Fragment as M, resolveComponent as J, renderList as x, createBlock as F, onMounted as pt, createVNode as S, withCtx as N, withKeys as B, withModifiers as $, withDirectives as z, vShow as X, Transition as Re, computed as Ge, mergeProps as Je, vModelText as ft, vModelDynamic as mt, createStaticVNode as bt } from "vue";
const gt = L({
  name: "CustomButton",
  props: {
    label: {
      type: String,
      required: !1
    },
    styleType: {
      type: String,
      required: !1,
      default: "primary"
    },
    size: {
      type: String,
      required: !1,
      default: "default"
    },
    disabled: {
      type: Boolean,
      required: !1,
      default: !1
    }
  },
  setup(e, t) {
    return {
      assignStyle: () => {
        let r = "btn ", o = "";
        switch (e.styleType) {
          case "primary":
            o = "btn-primary";
            break;
          case "primary-outline":
            o = "btn-primary-outline";
            break;
          case "secondary":
            o = "btn-secondary";
            break;
          case "secondary-outline":
            o = "btn-secondary-outline";
            break;
        }
        let i = "";
        switch (e.size) {
          case "default":
            i = "";
            break;
          case "small":
            i = "btn--small";
            break;
          case "large":
            i = "btn--large";
            break;
        }
        let l = "";
        return e.disabled && (l = " btn--disabled"), r + " " + o + " " + i + " " + l;
      },
      handleClick: (r) => {
        if (e.disabled)
          return r.preventDefault();
        t.emit("onClick");
      }
    };
  }
}), R = (e, t) => {
  const s = e.__vccOpts || e;
  for (const [n, r] of t)
    s[n] = r;
  return s;
}, yt = ["disabled"];
function wt(e, t, s, n, r, o) {
  return d(), m("button", {
    class: se(["custom-button", e.assignStyle()]),
    disabled: e.disabled,
    onClick: t[0] || (t[0] = (...i) => e.handleClick && e.handleClick(...i))
  }, [
    O(e.$slots, "slot-left"),
    h("span", null, w(e.label), 1),
    O(e.$slots, "slot-right")
  ], 10, yt);
}
const vt = /* @__PURE__ */ R(gt, [["render", wt]]), St = L({
  name: "CustomCheckbox",
  props: {
    modelValue: {
      type: Boolean
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    label: {
      type: String,
      required: !0
    },
    name: {
      type: String,
      default: ""
    },
    checked: {
      type: Boolean
    }
  },
  methods: {
    updateInput(e) {
      this.$emit("update:checked", e.target.checked);
    }
  }
}), Ot = ["checked", "disabled", "name"], Et = /* @__PURE__ */ h("span", { class: "checkmark" }, null, -1);
function kt(e, t, s, n, r, o) {
  return d(), m("label", {
    class: se(["wrapper flex items-center", { disabled: e.disabled }])
  }, [
    T(w(e.label) + " ", 1),
    h("input", {
      class: "checkbox",
      type: "checkbox",
      checked: e.checked,
      onChange: t[0] || (t[0] = (...i) => e.updateInput && e.updateInput(...i)),
      disabled: e.disabled,
      name: e.name
    }, null, 40, Ot),
    Et
  ], 2);
}
const _t = /* @__PURE__ */ R(St, [["render", kt]]), $t = L({
  name: "CustomFileUpload",
  props: {
    label: {
      type: String,
      required: !1
    },
    placeholder: {
      type: String,
      required: !1,
      default: "Nessun file selezionato"
    },
    file: {
      type: File,
      required: !1
    }
  },
  setup(e, t) {
    const s = q(null), n = () => {
      s.value.click();
    }, r = q(null);
    return {
      inputFileRef: s,
      handleButtonClick: n,
      handleInputChange: ({ target: l }) => {
        l && l.files.length > 0 && (r.value = l.files[0], t.emit("update:file", l.files[0]), s.value.value = "");
      },
      currentFile: r,
      deleteFile: () => {
        r.value = null, t.emit("update:file", null);
      }
    };
  }
}), Ct = { class: "generic-input" }, At = {
  key: 0,
  class: "generic-input__label text-sm secondary-color"
}, Lt = { class: "input-container" }, Rt = { class: "generic-input__input-file" }, Tt = { class: "generic-input__input-file__file" }, Ft = {
  key: 0,
  class: "generic-input__input-file__file__placeholder"
}, Vt = {
  key: 1,
  class: "generic-input__input-file__file__file-name"
}, Pt = /* @__PURE__ */ h("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  "stroke-width": "2.5",
  stroke: "#FFFFFF",
  class: "cancel"
}, [
  /* @__PURE__ */ h("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    d: "M6 18L18 6M6 6l12 12"
  })
], -1), Bt = [
  Pt
];
function Mt(e, t, s, n, r, o) {
  return d(), m("div", Ct, [
    e.label ? (d(), m("label", At, w(e.label), 1)) : E("", !0),
    h("div", Lt, [
      O(e.$slots, "prepend"),
      h("input", {
        type: "file",
        class: "generic-input__input-file--hidden",
        ref: "inputFileRef",
        onChange: t[0] || (t[0] = (...i) => e.handleInputChange && e.handleInputChange(...i))
      }, null, 544),
      h("div", Rt, [
        h("div", {
          class: "generic-input__input-file__button",
          onClick: t[1] || (t[1] = (...i) => e.handleButtonClick && e.handleButtonClick(...i))
        }, " Sfoglia... "),
        h("div", Tt, [
          e.currentFile ? (d(), m("div", Vt, [
            T(w(e.currentFile.name) + " ", 1),
            h("div", {
              onClick: t[2] || (t[2] = (...i) => e.deleteFile && e.deleteFile(...i)),
              class: "generic-input__input-file__file__file-name__cancel"
            }, Bt)
          ])) : (d(), m("div", Ft, w(e.placeholder), 1))
        ])
      ])
    ])
  ]);
}
const cr = /* @__PURE__ */ R($t, [["render", Mt]]), Nt = L({
  name: "CustomLoader",
  props: {
    loading: {
      type: Boolean,
      default: !1
    },
    size: {
      type: String,
      default: "default"
    }
  }
}), Dt = /* @__PURE__ */ h("span", { class: "sr-only" }, "Loading...", -1), jt = [
  Dt
];
function Ut(e, t, s, n, r, o) {
  return e.loading ? (d(), m("div", {
    key: 0,
    class: se(["spinner-border", e.size]),
    role: "status"
  }, jt, 2)) : E("", !0);
}
const It = /* @__PURE__ */ R(Nt, [["render", Ut]]), Ht = L({
  name: "CustomModal",
  props: {
    isOpen: {
      type: Boolean,
      required: !1,
      default: !1
    },
    modalTitle: {
      type: String,
      required: !1,
      default: "Titolo modale"
    },
    withoutTitle: {
      type: Boolean,
      default: !1
    }
  },
  setup(e, t) {
    return { emitCloseModal: () => {
      t.emit("closeModal");
    } };
  }
}), xt = {
  key: 0,
  class: "custom-modal"
}, zt = { class: "modal-background" }, qt = { class: "modal-container" }, Gt = { class: "modal-header" }, Jt = { class: "modal-title" }, Kt = /* @__PURE__ */ h("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  "stroke-width": "1.5",
  width: "24px",
  height: "24px"
}, [
  /* @__PURE__ */ h("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    d: "M6 18L18 6M6 6l12 12"
  })
], -1), Wt = [
  Kt
], Qt = { class: "modal-body" }, Yt = { class: "modal-footer" };
function Xt(e, t, s, n, r, o) {
  return e.isOpen ? (d(), m("div", xt, [
    h("div", zt, [
      h("div", qt, [
        h("div", Gt, [
          h("div", Jt, [
            e.withoutTitle ? E("", !0) : (d(), m(M, { key: 0 }, [
              T(w(e.modalTitle), 1)
            ], 64))
          ]),
          h("div", {
            class: "modal-close",
            onClick: t[0] || (t[0] = (...i) => e.emitCloseModal && e.emitCloseModal(...i))
          }, Wt)
        ]),
        h("div", Qt, [
          O(e.$slots, "modal-body")
        ]),
        h("div", Yt, [
          O(e.$slots, "modal-footer")
        ])
      ])
    ])
  ])) : E("", !0);
}
const dr = /* @__PURE__ */ R(Ht, [["render", Xt]]), Zt = L({
  name: "CustomMultiCheckbox",
  components: {
    CustomCheckbox: _t
  },
  props: {
    value: {
      type: Array,
      default: []
    },
    options: {
      type: Array,
      required: !0
    }
  },
  setup(e, t) {
    return { check: (n, r) => {
      let o = [...e.value];
      r ? o.push(n) : o.splice(o.indexOf(n), 1), t.emit("update:value", o);
    } };
  }
});
function es(e, t, s, n, r, o) {
  const i = J("custom-checkbox");
  return d(), m("div", null, [
    (d(!0), m(M, null, x(e.options, (l, c) => (d(), F(i, {
      key: c,
      label: l.label,
      checked: e.value.includes(l.id),
      "onUpdate:checked": (a) => e.check(l.id, a)
    }, null, 8, ["label", "checked", "onUpdate:checked"]))), 128))
  ]);
}
const hr = /* @__PURE__ */ R(Zt, [["render", es]]);
function Ke(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: We } = Object.prototype, { getPrototypeOf: Ee } = Object, ke = ((e) => (t) => {
  const s = We.call(t);
  return e[s] || (e[s] = s.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), U = (e) => (e = e.toLowerCase(), (t) => ke(t) === e), ae = (e) => (t) => typeof t === e, { isArray: ne } = Array, ye = ae("undefined");
function ts(e) {
  return e !== null && !ye(e) && e.constructor !== null && !ye(e.constructor) && W(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const Qe = U("ArrayBuffer");
function ss(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && Qe(e.buffer), t;
}
const ns = ae("string"), W = ae("function"), Ye = ae("number"), Xe = (e) => e !== null && typeof e == "object", is = (e) => e === !0 || e === !1, oe = (e) => {
  if (ke(e) !== "object")
    return !1;
  const t = Ee(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}, rs = U("Date"), os = U("File"), ls = U("Blob"), as = U("FileList"), us = (e) => Xe(e) && W(e.pipe), cs = (e) => {
  const t = "[object FormData]";
  return e && (typeof FormData == "function" && e instanceof FormData || We.call(e) === t || W(e.toString) && e.toString() === t);
}, ds = U("URLSearchParams"), hs = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function ue(e, t, { allOwnKeys: s = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let n, r;
  if (typeof e != "object" && (e = [e]), ne(e))
    for (n = 0, r = e.length; n < r; n++)
      t.call(null, e[n], n, e);
  else {
    const o = s ? Object.getOwnPropertyNames(e) : Object.keys(e), i = o.length;
    let l;
    for (n = 0; n < i; n++)
      l = o[n], t.call(null, e[l], l, e);
  }
}
function we() {
  const e = {}, t = (s, n) => {
    oe(e[n]) && oe(s) ? e[n] = we(e[n], s) : oe(s) ? e[n] = we({}, s) : ne(s) ? e[n] = s.slice() : e[n] = s;
  };
  for (let s = 0, n = arguments.length; s < n; s++)
    arguments[s] && ue(arguments[s], t);
  return e;
}
const ps = (e, t, s, { allOwnKeys: n } = {}) => (ue(t, (r, o) => {
  s && W(r) ? e[o] = Ke(r, s) : e[o] = r;
}, { allOwnKeys: n }), e), fs = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), ms = (e, t, s, n) => {
  e.prototype = Object.create(t.prototype, n), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), s && Object.assign(e.prototype, s);
}, bs = (e, t, s, n) => {
  let r, o, i;
  const l = {};
  if (t = t || {}, e == null)
    return t;
  do {
    for (r = Object.getOwnPropertyNames(e), o = r.length; o-- > 0; )
      i = r[o], (!n || n(i, e, t)) && !l[i] && (t[i] = e[i], l[i] = !0);
    e = s !== !1 && Ee(e);
  } while (e && (!s || s(e, t)) && e !== Object.prototype);
  return t;
}, gs = (e, t, s) => {
  e = String(e), (s === void 0 || s > e.length) && (s = e.length), s -= t.length;
  const n = e.indexOf(t, s);
  return n !== -1 && n === s;
}, ys = (e) => {
  if (!e)
    return null;
  if (ne(e))
    return e;
  let t = e.length;
  if (!Ye(t))
    return null;
  const s = new Array(t);
  for (; t-- > 0; )
    s[t] = e[t];
  return s;
}, ws = ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && Ee(Uint8Array)), vs = (e, t) => {
  const n = (e && e[Symbol.iterator]).call(e);
  let r;
  for (; (r = n.next()) && !r.done; ) {
    const o = r.value;
    t.call(e, o[0], o[1]);
  }
}, Ss = (e, t) => {
  let s;
  const n = [];
  for (; (s = e.exec(t)) !== null; )
    n.push(s);
  return n;
}, Os = U("HTMLFormElement"), Es = (e) => e.toLowerCase().replace(
  /[_-\s]([a-z\d])(\w*)/g,
  function(s, n, r) {
    return n.toUpperCase() + r;
  }
), Te = (({ hasOwnProperty: e }) => (t, s) => e.call(t, s))(Object.prototype), ks = U("RegExp"), Ze = (e, t) => {
  const s = Object.getOwnPropertyDescriptors(e), n = {};
  ue(s, (r, o) => {
    t(r, o, e) !== !1 && (n[o] = r);
  }), Object.defineProperties(e, n);
}, _s = (e) => {
  Ze(e, (t, s) => {
    const n = e[s];
    if (!!W(n)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not read-only method '" + s + "'");
      });
    }
  });
}, $s = (e, t) => {
  const s = {}, n = (r) => {
    r.forEach((o) => {
      s[o] = !0;
    });
  };
  return ne(e) ? n(e) : n(String(e).split(t)), s;
}, Cs = () => {
}, As = (e, t) => (e = +e, Number.isFinite(e) ? e : t), u = {
  isArray: ne,
  isArrayBuffer: Qe,
  isBuffer: ts,
  isFormData: cs,
  isArrayBufferView: ss,
  isString: ns,
  isNumber: Ye,
  isBoolean: is,
  isObject: Xe,
  isPlainObject: oe,
  isUndefined: ye,
  isDate: rs,
  isFile: os,
  isBlob: ls,
  isRegExp: ks,
  isFunction: W,
  isStream: us,
  isURLSearchParams: ds,
  isTypedArray: ws,
  isFileList: as,
  forEach: ue,
  merge: we,
  extend: ps,
  trim: hs,
  stripBOM: fs,
  inherits: ms,
  toFlatObject: bs,
  kindOf: ke,
  kindOfTest: U,
  endsWith: gs,
  toArray: ys,
  forEachEntry: vs,
  matchAll: Ss,
  isHTMLForm: Os,
  hasOwnProperty: Te,
  hasOwnProp: Te,
  reduceDescriptors: Ze,
  freezeMethods: _s,
  toObjectSet: $s,
  toCamelCase: Es,
  noop: Cs,
  toFiniteNumber: As
};
function g(e, t, s, n, r) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), s && (this.config = s), n && (this.request = n), r && (this.response = r);
}
u.inherits(g, Error, {
  toJSON: function() {
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: this.config,
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    };
  }
});
const et = g.prototype, tt = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL"
].forEach((e) => {
  tt[e] = { value: e };
});
Object.defineProperties(g, tt);
Object.defineProperty(et, "isAxiosError", { value: !0 });
g.from = (e, t, s, n, r, o) => {
  const i = Object.create(et);
  return u.toFlatObject(e, i, function(c) {
    return c !== Error.prototype;
  }, (l) => l !== "isAxiosError"), g.call(i, e.message, t, s, n, r), i.cause = e, i.name = e.name, o && Object.assign(i, o), i;
};
var re = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Ls = typeof self == "object" ? self.FormData : window.FormData;
function ve(e) {
  return u.isPlainObject(e) || u.isArray(e);
}
function st(e) {
  return u.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function Fe(e, t, s) {
  return e ? e.concat(t).map(function(r, o) {
    return r = st(r), !s && o ? "[" + r + "]" : r;
  }).join(s ? "." : "") : t;
}
function Rs(e) {
  return u.isArray(e) && !e.some(ve);
}
const Ts = u.toFlatObject(u, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function Fs(e) {
  return e && u.isFunction(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator];
}
function ce(e, t, s) {
  if (!u.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new (Ls || FormData)(), s = u.toFlatObject(s, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(v, P) {
    return !u.isUndefined(P[v]);
  });
  const n = s.metaTokens, r = s.visitor || f, o = s.dots, i = s.indexes, c = (s.Blob || typeof Blob < "u" && Blob) && Fs(t);
  if (!u.isFunction(r))
    throw new TypeError("visitor must be a function");
  function a(p) {
    if (p === null)
      return "";
    if (u.isDate(p))
      return p.toISOString();
    if (!c && u.isBlob(p))
      throw new g("Blob is not supported. Use a Buffer instead.");
    return u.isArrayBuffer(p) || u.isTypedArray(p) ? c && typeof Blob == "function" ? new Blob([p]) : Buffer.from(p) : p;
  }
  function f(p, v, P) {
    let C = p;
    if (p && !P && typeof p == "object") {
      if (u.endsWith(v, "{}"))
        v = n ? v : v.slice(0, -2), p = JSON.stringify(p);
      else if (u.isArray(p) && Rs(p) || u.isFileList(p) || u.endsWith(v, "[]") && (C = u.toArray(p)))
        return v = st(v), C.forEach(function(K, de) {
          !(u.isUndefined(K) || K === null) && t.append(
            i === !0 ? Fe([v], de, o) : i === null ? v : v + "[]",
            a(K)
          );
        }), !1;
    }
    return ve(p) ? !0 : (t.append(Fe(P, v, o), a(p)), !1);
  }
  const y = [], k = Object.assign(Ts, {
    defaultVisitor: f,
    convertValue: a,
    isVisitable: ve
  });
  function b(p, v) {
    if (!u.isUndefined(p)) {
      if (y.indexOf(p) !== -1)
        throw Error("Circular reference detected in " + v.join("."));
      y.push(p), u.forEach(p, function(C, D) {
        (!(u.isUndefined(C) || C === null) && r.call(
          t,
          C,
          u.isString(D) ? D.trim() : D,
          v,
          k
        )) === !0 && b(C, v ? v.concat(D) : [D]);
      }), y.pop();
    }
  }
  if (!u.isObject(e))
    throw new TypeError("data must be an object");
  return b(e), t;
}
function Ve(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function(n) {
    return t[n];
  });
}
function _e(e, t) {
  this._pairs = [], e && ce(e, this, t);
}
const nt = _e.prototype;
nt.append = function(t, s) {
  this._pairs.push([t, s]);
};
nt.toString = function(t) {
  const s = t ? function(n) {
    return t.call(this, n, Ve);
  } : Ve;
  return this._pairs.map(function(r) {
    return s(r[0]) + "=" + s(r[1]);
  }, "").join("&");
};
function Vs(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function it(e, t, s) {
  if (!t)
    return e;
  const n = s && s.encode || Vs, r = s && s.serialize;
  let o;
  if (r ? o = r(t, s) : o = u.isURLSearchParams(t) ? t.toString() : new _e(t, s).toString(n), o) {
    const i = e.indexOf("#");
    i !== -1 && (e = e.slice(0, i)), e += (e.indexOf("?") === -1 ? "?" : "&") + o;
  }
  return e;
}
class Pe {
  constructor() {
    this.handlers = [];
  }
  use(t, s, n) {
    return this.handlers.push({
      fulfilled: t,
      rejected: s,
      synchronous: n ? n.synchronous : !1,
      runWhen: n ? n.runWhen : null
    }), this.handlers.length - 1;
  }
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
  }
  clear() {
    this.handlers && (this.handlers = []);
  }
  forEach(t) {
    u.forEach(this.handlers, function(n) {
      n !== null && t(n);
    });
  }
}
const rt = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, Ps = typeof URLSearchParams < "u" ? URLSearchParams : _e, Bs = FormData, Ms = (() => {
  let e;
  return typeof navigator < "u" && ((e = navigator.product) === "ReactNative" || e === "NativeScript" || e === "NS") ? !1 : typeof window < "u" && typeof document < "u";
})(), j = {
  isBrowser: !0,
  classes: {
    URLSearchParams: Ps,
    FormData: Bs,
    Blob
  },
  isStandardBrowserEnv: Ms,
  protocols: ["http", "https", "file", "blob", "url", "data"]
};
function Ns(e, t) {
  return ce(e, new j.classes.URLSearchParams(), Object.assign({
    visitor: function(s, n, r, o) {
      return j.isNode && u.isBuffer(s) ? (this.append(n, s.toString("base64")), !1) : o.defaultVisitor.apply(this, arguments);
    }
  }, t));
}
function Ds(e) {
  return u.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function js(e) {
  const t = {}, s = Object.keys(e);
  let n;
  const r = s.length;
  let o;
  for (n = 0; n < r; n++)
    o = s[n], t[o] = e[o];
  return t;
}
function ot(e) {
  function t(s, n, r, o) {
    let i = s[o++];
    const l = Number.isFinite(+i), c = o >= s.length;
    return i = !i && u.isArray(r) ? r.length : i, c ? (u.hasOwnProp(r, i) ? r[i] = [r[i], n] : r[i] = n, !l) : ((!r[i] || !u.isObject(r[i])) && (r[i] = []), t(s, n, r[i], o) && u.isArray(r[i]) && (r[i] = js(r[i])), !l);
  }
  if (u.isFormData(e) && u.isFunction(e.entries)) {
    const s = {};
    return u.forEachEntry(e, (n, r) => {
      t(Ds(n), r, s, 0);
    }), s;
  }
  return null;
}
function Us(e, t, s) {
  const n = s.config.validateStatus;
  !s.status || !n || n(s.status) ? e(s) : t(new g(
    "Request failed with status code " + s.status,
    [g.ERR_BAD_REQUEST, g.ERR_BAD_RESPONSE][Math.floor(s.status / 100) - 4],
    s.config,
    s.request,
    s
  ));
}
const Is = j.isStandardBrowserEnv ? function() {
  return {
    write: function(s, n, r, o, i, l) {
      const c = [];
      c.push(s + "=" + encodeURIComponent(n)), u.isNumber(r) && c.push("expires=" + new Date(r).toGMTString()), u.isString(o) && c.push("path=" + o), u.isString(i) && c.push("domain=" + i), l === !0 && c.push("secure"), document.cookie = c.join("; ");
    },
    read: function(s) {
      const n = document.cookie.match(new RegExp("(^|;\\s*)(" + s + ")=([^;]*)"));
      return n ? decodeURIComponent(n[3]) : null;
    },
    remove: function(s) {
      this.write(s, "", Date.now() - 864e5);
    }
  };
}() : function() {
  return {
    write: function() {
    },
    read: function() {
      return null;
    },
    remove: function() {
    }
  };
}();
function Hs(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function xs(e, t) {
  return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function lt(e, t) {
  return e && !Hs(t) ? xs(e, t) : t;
}
const zs = j.isStandardBrowserEnv ? function() {
  const t = /(msie|trident)/i.test(navigator.userAgent), s = document.createElement("a");
  let n;
  function r(o) {
    let i = o;
    return t && (s.setAttribute("href", i), i = s.href), s.setAttribute("href", i), {
      href: s.href,
      protocol: s.protocol ? s.protocol.replace(/:$/, "") : "",
      host: s.host,
      search: s.search ? s.search.replace(/^\?/, "") : "",
      hash: s.hash ? s.hash.replace(/^#/, "") : "",
      hostname: s.hostname,
      port: s.port,
      pathname: s.pathname.charAt(0) === "/" ? s.pathname : "/" + s.pathname
    };
  }
  return n = r(window.location.href), function(i) {
    const l = u.isString(i) ? r(i) : i;
    return l.protocol === n.protocol && l.host === n.host;
  };
}() : function() {
  return function() {
    return !0;
  };
}();
function ie(e, t, s) {
  g.call(this, e == null ? "canceled" : e, g.ERR_CANCELED, t, s), this.name = "CanceledError";
}
u.inherits(ie, g, {
  __CANCEL__: !0
});
function qs(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
const Gs = u.toObjectSet([
  "age",
  "authorization",
  "content-length",
  "content-type",
  "etag",
  "expires",
  "from",
  "host",
  "if-modified-since",
  "if-unmodified-since",
  "last-modified",
  "location",
  "max-forwards",
  "proxy-authorization",
  "referer",
  "retry-after",
  "user-agent"
]), Js = (e) => {
  const t = {};
  let s, n, r;
  return e && e.split(`
`).forEach(function(i) {
    r = i.indexOf(":"), s = i.substring(0, r).trim().toLowerCase(), n = i.substring(r + 1).trim(), !(!s || t[s] && Gs[s]) && (s === "set-cookie" ? t[s] ? t[s].push(n) : t[s] = [n] : t[s] = t[s] ? t[s] + ", " + n : n);
  }), t;
}, Be = Symbol("internals"), at = Symbol("defaults");
function ee(e) {
  return e && String(e).trim().toLowerCase();
}
function le(e) {
  return e === !1 || e == null ? e : u.isArray(e) ? e.map(le) : String(e);
}
function Ks(e) {
  const t = /* @__PURE__ */ Object.create(null), s = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let n;
  for (; n = s.exec(e); )
    t[n[1]] = n[2];
  return t;
}
function Me(e, t, s, n) {
  if (u.isFunction(n))
    return n.call(this, t, s);
  if (!!u.isString(t)) {
    if (u.isString(n))
      return t.indexOf(n) !== -1;
    if (u.isRegExp(n))
      return n.test(t);
  }
}
function Ws(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, s, n) => s.toUpperCase() + n);
}
function Qs(e, t) {
  const s = u.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((n) => {
    Object.defineProperty(e, n + s, {
      value: function(r, o, i) {
        return this[n].call(this, t, r, o, i);
      },
      configurable: !0
    });
  });
}
function Z(e, t) {
  t = t.toLowerCase();
  const s = Object.keys(e);
  let n = s.length, r;
  for (; n-- > 0; )
    if (r = s[n], t === r.toLowerCase())
      return r;
  return null;
}
function V(e, t) {
  e && this.set(e), this[at] = t || null;
}
Object.assign(V.prototype, {
  set: function(e, t, s) {
    const n = this;
    function r(o, i, l) {
      const c = ee(i);
      if (!c)
        throw new Error("header name must be a non-empty string");
      const a = Z(n, c);
      a && l !== !0 && (n[a] === !1 || l === !1) || (n[a || i] = le(o));
    }
    return u.isPlainObject(e) ? u.forEach(e, (o, i) => {
      r(o, i, t);
    }) : r(t, e, s), this;
  },
  get: function(e, t) {
    if (e = ee(e), !e)
      return;
    const s = Z(this, e);
    if (s) {
      const n = this[s];
      if (!t)
        return n;
      if (t === !0)
        return Ks(n);
      if (u.isFunction(t))
        return t.call(this, n, s);
      if (u.isRegExp(t))
        return t.exec(n);
      throw new TypeError("parser must be boolean|regexp|function");
    }
  },
  has: function(e, t) {
    if (e = ee(e), e) {
      const s = Z(this, e);
      return !!(s && (!t || Me(this, this[s], s, t)));
    }
    return !1;
  },
  delete: function(e, t) {
    const s = this;
    let n = !1;
    function r(o) {
      if (o = ee(o), o) {
        const i = Z(s, o);
        i && (!t || Me(s, s[i], i, t)) && (delete s[i], n = !0);
      }
    }
    return u.isArray(e) ? e.forEach(r) : r(e), n;
  },
  clear: function() {
    return Object.keys(this).forEach(this.delete.bind(this));
  },
  normalize: function(e) {
    const t = this, s = {};
    return u.forEach(this, (n, r) => {
      const o = Z(s, r);
      if (o) {
        t[o] = le(n), delete t[r];
        return;
      }
      const i = e ? Ws(r) : String(r).trim();
      i !== r && delete t[r], t[i] = le(n), s[i] = !0;
    }), this;
  },
  toJSON: function(e) {
    const t = /* @__PURE__ */ Object.create(null);
    return u.forEach(
      Object.assign({}, this[at] || null, this),
      (s, n) => {
        s == null || s === !1 || (t[n] = e && u.isArray(s) ? s.join(", ") : s);
      }
    ), t;
  }
});
Object.assign(V, {
  from: function(e) {
    return u.isString(e) ? new this(Js(e)) : e instanceof this ? e : new this(e);
  },
  accessor: function(e) {
    const s = (this[Be] = this[Be] = {
      accessors: {}
    }).accessors, n = this.prototype;
    function r(o) {
      const i = ee(o);
      s[i] || (Qs(n, o), s[i] = !0);
    }
    return u.isArray(e) ? e.forEach(r) : r(e), this;
  }
});
V.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent"]);
u.freezeMethods(V.prototype);
u.freezeMethods(V);
function Ys(e, t) {
  e = e || 10;
  const s = new Array(e), n = new Array(e);
  let r = 0, o = 0, i;
  return t = t !== void 0 ? t : 1e3, function(c) {
    const a = Date.now(), f = n[o];
    i || (i = a), s[r] = c, n[r] = a;
    let y = o, k = 0;
    for (; y !== r; )
      k += s[y++], y = y % e;
    if (r = (r + 1) % e, r === o && (o = (o + 1) % e), a - i < t)
      return;
    const b = f && a - f;
    return b ? Math.round(k * 1e3 / b) : void 0;
  };
}
function Ne(e, t) {
  let s = 0;
  const n = Ys(50, 250);
  return (r) => {
    const o = r.loaded, i = r.lengthComputable ? r.total : void 0, l = o - s, c = n(l), a = o <= i;
    s = o;
    const f = {
      loaded: o,
      total: i,
      progress: i ? o / i : void 0,
      bytes: l,
      rate: c || void 0,
      estimated: c && i && a ? (i - o) / c : void 0
    };
    f[t ? "download" : "upload"] = !0, e(f);
  };
}
function De(e) {
  return new Promise(function(s, n) {
    let r = e.data;
    const o = V.from(e.headers).normalize(), i = e.responseType;
    let l;
    function c() {
      e.cancelToken && e.cancelToken.unsubscribe(l), e.signal && e.signal.removeEventListener("abort", l);
    }
    u.isFormData(r) && j.isStandardBrowserEnv && o.setContentType(!1);
    let a = new XMLHttpRequest();
    if (e.auth) {
      const b = e.auth.username || "", p = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : "";
      o.set("Authorization", "Basic " + btoa(b + ":" + p));
    }
    const f = lt(e.baseURL, e.url);
    a.open(e.method.toUpperCase(), it(f, e.params, e.paramsSerializer), !0), a.timeout = e.timeout;
    function y() {
      if (!a)
        return;
      const b = V.from(
        "getAllResponseHeaders" in a && a.getAllResponseHeaders()
      ), v = {
        data: !i || i === "text" || i === "json" ? a.responseText : a.response,
        status: a.status,
        statusText: a.statusText,
        headers: b,
        config: e,
        request: a
      };
      Us(function(C) {
        s(C), c();
      }, function(C) {
        n(C), c();
      }, v), a = null;
    }
    if ("onloadend" in a ? a.onloadend = y : a.onreadystatechange = function() {
      !a || a.readyState !== 4 || a.status === 0 && !(a.responseURL && a.responseURL.indexOf("file:") === 0) || setTimeout(y);
    }, a.onabort = function() {
      !a || (n(new g("Request aborted", g.ECONNABORTED, e, a)), a = null);
    }, a.onerror = function() {
      n(new g("Network Error", g.ERR_NETWORK, e, a)), a = null;
    }, a.ontimeout = function() {
      let p = e.timeout ? "timeout of " + e.timeout + "ms exceeded" : "timeout exceeded";
      const v = e.transitional || rt;
      e.timeoutErrorMessage && (p = e.timeoutErrorMessage), n(new g(
        p,
        v.clarifyTimeoutError ? g.ETIMEDOUT : g.ECONNABORTED,
        e,
        a
      )), a = null;
    }, j.isStandardBrowserEnv) {
      const b = (e.withCredentials || zs(f)) && e.xsrfCookieName && Is.read(e.xsrfCookieName);
      b && o.set(e.xsrfHeaderName, b);
    }
    r === void 0 && o.setContentType(null), "setRequestHeader" in a && u.forEach(o.toJSON(), function(p, v) {
      a.setRequestHeader(v, p);
    }), u.isUndefined(e.withCredentials) || (a.withCredentials = !!e.withCredentials), i && i !== "json" && (a.responseType = e.responseType), typeof e.onDownloadProgress == "function" && a.addEventListener("progress", Ne(e.onDownloadProgress, !0)), typeof e.onUploadProgress == "function" && a.upload && a.upload.addEventListener("progress", Ne(e.onUploadProgress)), (e.cancelToken || e.signal) && (l = (b) => {
      !a || (n(!b || b.type ? new ie(null, e, a) : b), a.abort(), a = null);
    }, e.cancelToken && e.cancelToken.subscribe(l), e.signal && (e.signal.aborted ? l() : e.signal.addEventListener("abort", l)));
    const k = qs(f);
    if (k && j.protocols.indexOf(k) === -1) {
      n(new g("Unsupported protocol " + k + ":", g.ERR_BAD_REQUEST, e));
      return;
    }
    a.send(r || null);
  });
}
const je = {
  http: De,
  xhr: De
}, Ue = {
  getAdapter: (e) => {
    if (u.isString(e)) {
      const t = je[e];
      if (!e)
        throw Error(
          u.hasOwnProp(e) ? `Adapter '${e}' is not available in the build` : `Can not resolve adapter '${e}'`
        );
      return t;
    }
    if (!u.isFunction(e))
      throw new TypeError("adapter is not a function");
    return e;
  },
  adapters: je
}, Xs = {
  "Content-Type": "application/x-www-form-urlencoded"
};
function Zs() {
  let e;
  return typeof XMLHttpRequest < "u" ? e = Ue.getAdapter("xhr") : typeof process < "u" && u.kindOf(process) === "process" && (e = Ue.getAdapter("http")), e;
}
function en(e, t, s) {
  if (u.isString(e))
    try {
      return (t || JSON.parse)(e), u.trim(e);
    } catch (n) {
      if (n.name !== "SyntaxError")
        throw n;
    }
  return (s || JSON.stringify)(e);
}
const Q = {
  transitional: rt,
  adapter: Zs(),
  transformRequest: [function(t, s) {
    const n = s.getContentType() || "", r = n.indexOf("application/json") > -1, o = u.isObject(t);
    if (o && u.isHTMLForm(t) && (t = new FormData(t)), u.isFormData(t))
      return r && r ? JSON.stringify(ot(t)) : t;
    if (u.isArrayBuffer(t) || u.isBuffer(t) || u.isStream(t) || u.isFile(t) || u.isBlob(t))
      return t;
    if (u.isArrayBufferView(t))
      return t.buffer;
    if (u.isURLSearchParams(t))
      return s.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let l;
    if (o) {
      if (n.indexOf("application/x-www-form-urlencoded") > -1)
        return Ns(t, this.formSerializer).toString();
      if ((l = u.isFileList(t)) || n.indexOf("multipart/form-data") > -1) {
        const c = this.env && this.env.FormData;
        return ce(
          l ? { "files[]": t } : t,
          c && new c(),
          this.formSerializer
        );
      }
    }
    return o || r ? (s.setContentType("application/json", !1), en(t)) : t;
  }],
  transformResponse: [function(t) {
    const s = this.transitional || Q.transitional, n = s && s.forcedJSONParsing, r = this.responseType === "json";
    if (t && u.isString(t) && (n && !this.responseType || r)) {
      const i = !(s && s.silentJSONParsing) && r;
      try {
        return JSON.parse(t);
      } catch (l) {
        if (i)
          throw l.name === "SyntaxError" ? g.from(l, g.ERR_BAD_RESPONSE, this, null, this.response) : l;
      }
    }
    return t;
  }],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: j.classes.FormData,
    Blob: j.classes.Blob
  },
  validateStatus: function(t) {
    return t >= 200 && t < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*"
    }
  }
};
u.forEach(["delete", "get", "head"], function(t) {
  Q.headers[t] = {};
});
u.forEach(["post", "put", "patch"], function(t) {
  Q.headers[t] = u.merge(Xs);
});
function pe(e, t) {
  const s = this || Q, n = t || s, r = V.from(n.headers);
  let o = n.data;
  return u.forEach(e, function(l) {
    o = l.call(s, o, r.normalize(), t ? t.status : void 0);
  }), r.normalize(), o;
}
function ut(e) {
  return !!(e && e.__CANCEL__);
}
function fe(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new ie();
}
function Ie(e) {
  return fe(e), e.headers = V.from(e.headers), e.data = pe.call(
    e,
    e.transformRequest
  ), (e.adapter || Q.adapter)(e).then(function(n) {
    return fe(e), n.data = pe.call(
      e,
      e.transformResponse,
      n
    ), n.headers = V.from(n.headers), n;
  }, function(n) {
    return ut(n) || (fe(e), n && n.response && (n.response.data = pe.call(
      e,
      e.transformResponse,
      n.response
    ), n.response.headers = V.from(n.response.headers))), Promise.reject(n);
  });
}
function te(e, t) {
  t = t || {};
  const s = {};
  function n(a, f) {
    return u.isPlainObject(a) && u.isPlainObject(f) ? u.merge(a, f) : u.isPlainObject(f) ? u.merge({}, f) : u.isArray(f) ? f.slice() : f;
  }
  function r(a) {
    if (u.isUndefined(t[a])) {
      if (!u.isUndefined(e[a]))
        return n(void 0, e[a]);
    } else
      return n(e[a], t[a]);
  }
  function o(a) {
    if (!u.isUndefined(t[a]))
      return n(void 0, t[a]);
  }
  function i(a) {
    if (u.isUndefined(t[a])) {
      if (!u.isUndefined(e[a]))
        return n(void 0, e[a]);
    } else
      return n(void 0, t[a]);
  }
  function l(a) {
    if (a in t)
      return n(e[a], t[a]);
    if (a in e)
      return n(void 0, e[a]);
  }
  const c = {
    url: o,
    method: o,
    data: o,
    baseURL: i,
    transformRequest: i,
    transformResponse: i,
    paramsSerializer: i,
    timeout: i,
    timeoutMessage: i,
    withCredentials: i,
    adapter: i,
    responseType: i,
    xsrfCookieName: i,
    xsrfHeaderName: i,
    onUploadProgress: i,
    onDownloadProgress: i,
    decompress: i,
    maxContentLength: i,
    maxBodyLength: i,
    beforeRedirect: i,
    transport: i,
    httpAgent: i,
    httpsAgent: i,
    cancelToken: i,
    socketPath: i,
    responseEncoding: i,
    validateStatus: l
  };
  return u.forEach(Object.keys(e).concat(Object.keys(t)), function(f) {
    const y = c[f] || r, k = y(f);
    u.isUndefined(k) && y !== l || (s[f] = k);
  }), s;
}
const ct = "1.1.3", $e = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  $e[e] = function(n) {
    return typeof n === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const He = {};
$e.transitional = function(t, s, n) {
  function r(o, i) {
    return "[Axios v" + ct + "] Transitional option '" + o + "'" + i + (n ? ". " + n : "");
  }
  return (o, i, l) => {
    if (t === !1)
      throw new g(
        r(i, " has been removed" + (s ? " in " + s : "")),
        g.ERR_DEPRECATED
      );
    return s && !He[i] && (He[i] = !0, console.warn(
      r(
        i,
        " has been deprecated since v" + s + " and will be removed in the near future"
      )
    )), t ? t(o, i, l) : !0;
  };
};
function tn(e, t, s) {
  if (typeof e != "object")
    throw new g("options must be an object", g.ERR_BAD_OPTION_VALUE);
  const n = Object.keys(e);
  let r = n.length;
  for (; r-- > 0; ) {
    const o = n[r], i = t[o];
    if (i) {
      const l = e[o], c = l === void 0 || i(l, o, e);
      if (c !== !0)
        throw new g("option " + o + " must be " + c, g.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (s !== !0)
      throw new g("Unknown option " + o, g.ERR_BAD_OPTION);
  }
}
const Se = {
  assertOptions: tn,
  validators: $e
}, H = Se.validators;
class G {
  constructor(t) {
    this.defaults = t, this.interceptors = {
      request: new Pe(),
      response: new Pe()
    };
  }
  request(t, s) {
    typeof t == "string" ? (s = s || {}, s.url = t) : s = t || {}, s = te(this.defaults, s);
    const { transitional: n, paramsSerializer: r } = s;
    n !== void 0 && Se.assertOptions(n, {
      silentJSONParsing: H.transitional(H.boolean),
      forcedJSONParsing: H.transitional(H.boolean),
      clarifyTimeoutError: H.transitional(H.boolean)
    }, !1), r !== void 0 && Se.assertOptions(r, {
      encode: H.function,
      serialize: H.function
    }, !0), s.method = (s.method || this.defaults.method || "get").toLowerCase();
    const o = s.headers && u.merge(
      s.headers.common,
      s.headers[s.method]
    );
    o && u.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      function(p) {
        delete s.headers[p];
      }
    ), s.headers = new V(s.headers, o);
    const i = [];
    let l = !0;
    this.interceptors.request.forEach(function(p) {
      typeof p.runWhen == "function" && p.runWhen(s) === !1 || (l = l && p.synchronous, i.unshift(p.fulfilled, p.rejected));
    });
    const c = [];
    this.interceptors.response.forEach(function(p) {
      c.push(p.fulfilled, p.rejected);
    });
    let a, f = 0, y;
    if (!l) {
      const b = [Ie.bind(this), void 0];
      for (b.unshift.apply(b, i), b.push.apply(b, c), y = b.length, a = Promise.resolve(s); f < y; )
        a = a.then(b[f++], b[f++]);
      return a;
    }
    y = i.length;
    let k = s;
    for (f = 0; f < y; ) {
      const b = i[f++], p = i[f++];
      try {
        k = b(k);
      } catch (v) {
        p.call(this, v);
        break;
      }
    }
    try {
      a = Ie.call(this, k);
    } catch (b) {
      return Promise.reject(b);
    }
    for (f = 0, y = c.length; f < y; )
      a = a.then(c[f++], c[f++]);
    return a;
  }
  getUri(t) {
    t = te(this.defaults, t);
    const s = lt(t.baseURL, t.url);
    return it(s, t.params, t.paramsSerializer);
  }
}
u.forEach(["delete", "get", "head", "options"], function(t) {
  G.prototype[t] = function(s, n) {
    return this.request(te(n || {}, {
      method: t,
      url: s,
      data: (n || {}).data
    }));
  };
});
u.forEach(["post", "put", "patch"], function(t) {
  function s(n) {
    return function(o, i, l) {
      return this.request(te(l || {}, {
        method: t,
        headers: n ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: o,
        data: i
      }));
    };
  }
  G.prototype[t] = s(), G.prototype[t + "Form"] = s(!0);
});
class Ce {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let s;
    this.promise = new Promise(function(o) {
      s = o;
    });
    const n = this;
    this.promise.then((r) => {
      if (!n._listeners)
        return;
      let o = n._listeners.length;
      for (; o-- > 0; )
        n._listeners[o](r);
      n._listeners = null;
    }), this.promise.then = (r) => {
      let o;
      const i = new Promise((l) => {
        n.subscribe(l), o = l;
      }).then(r);
      return i.cancel = function() {
        n.unsubscribe(o);
      }, i;
    }, t(function(o, i, l) {
      n.reason || (n.reason = new ie(o, i, l), s(n.reason));
    });
  }
  throwIfRequested() {
    if (this.reason)
      throw this.reason;
  }
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : this._listeners = [t];
  }
  unsubscribe(t) {
    if (!this._listeners)
      return;
    const s = this._listeners.indexOf(t);
    s !== -1 && this._listeners.splice(s, 1);
  }
  static source() {
    let t;
    return {
      token: new Ce(function(r) {
        t = r;
      }),
      cancel: t
    };
  }
}
function sn(e) {
  return function(s) {
    return e.apply(null, s);
  };
}
function nn(e) {
  return u.isObject(e) && e.isAxiosError === !0;
}
function dt(e) {
  const t = new G(e), s = Ke(G.prototype.request, t);
  return u.extend(s, G.prototype, t, { allOwnKeys: !0 }), u.extend(s, t, null, { allOwnKeys: !0 }), s.create = function(r) {
    return dt(te(e, r));
  }, s;
}
const A = dt(Q);
A.Axios = G;
A.CanceledError = ie;
A.CancelToken = Ce;
A.isCancel = ut;
A.VERSION = ct;
A.toFormData = ce;
A.AxiosError = g;
A.Cancel = A.CanceledError;
A.all = function(t) {
  return Promise.all(t);
};
A.spread = sn;
A.isAxiosError = nn;
A.formToJSON = (e) => ot(u.isHTMLForm(e) ? new FormData(e) : e);
const rn = L({
  name: "CustomMultipleFileUpload",
  components: {
    CustomButton: vt,
    CustomLoader: It
  },
  props: {
    label: {
      type: String,
      required: !1
    },
    routeGetFiles: {
      type: String,
      required: !0
    },
    routePostFiles: {
      type: String,
      required: !0
    },
    routeDeleteFile: {
      type: String,
      required: !0
    }
  },
  setup(e) {
    const t = q(null), s = () => {
      t.value.click();
    }, n = ({ target: a }) => {
      if (a && a.files.length > 0) {
        let f = new FormData();
        for (let y = 0; y < a.files.length; y++) {
          const k = a.files[y];
          f.append("files", k);
        }
        i(f), t.value.value = "";
      }
    }, r = q([]), o = q(!1), i = (a) => {
      console.log(a), o.value = !0, A.post(e.routePostFiles, a).then((f) => {
        f.data.success ? alert("success") : alert("error"), o.value = !1;
      }).catch((f) => {
        console.log(f), o.value = !1;
      });
    }, l = (a) => {
      r.value.length > 0 && r.value.splice(a, 1);
    }, c = () => {
      A.get(e.routeGetFiles).then((a) => {
        console.log("okk", a);
      }).catch((a) => {
        console.log(a);
      });
    };
    return pt(() => {
      c();
    }), {
      handleClick: s,
      handleInputChange: n,
      inputFileRef: t,
      fileList: r,
      deleteFile: l,
      getFiles: c,
      loading: o
    };
  }
}), on = { class: "generic-input" }, ln = {
  key: 0,
  class: "generic-input__label text-sm secondary-color"
}, an = { class: "file-list" }, un = ["onClick"], cn = /* @__PURE__ */ h("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  "stroke-width": "2.5",
  stroke: "#FFFFFF",
  class: "cancel"
}, [
  /* @__PURE__ */ h("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    d: "M6 18L18 6M6 6l12 12"
  })
], -1), dn = [
  cn
], hn = { class: "flexAligned" }, pn = { style: { "margin-right": "10px" } }, fn = {
  style: { "margin-right": "8px" },
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  "stroke-width": "1.5",
  stroke: "#FFFFFF",
  width: "16px",
  height: "16px"
}, mn = /* @__PURE__ */ h("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
}, null, -1), bn = [
  mn
];
function gn(e, t, s, n, r, o) {
  const i = J("custom-button"), l = J("custom-loader");
  return d(), m("div", on, [
    e.label ? (d(), m("label", ln, w(e.label), 1)) : E("", !0),
    h("ul", an, [
      (d(!0), m(M, null, x(e.fileList, (c, a) => (d(), m("li", {
        class: "file-list-item",
        key: a
      }, [
        T(w(c.original_name + "." + c.extension) + " ", 1),
        h("div", {
          onClick: (f) => e.deleteFile(a),
          class: "item-cancel"
        }, dn, 8, un)
      ]))), 128))
    ]),
    h("input", {
      type: "file",
      class: "generic-input__input-file--hidden",
      ref: "inputFileRef",
      onChange: t[0] || (t[0] = (...c) => e.handleInputChange && e.handleInputChange(...c)),
      multiple: ""
    }, null, 544),
    h("div", hn, [
      h("div", pn, [
        S(i, {
          label: "Carica",
          styleType: "primary",
          disabled: !1,
          onOnClick: e.handleClick
        }, {
          "slot-left": N(() => [
            (d(), m("svg", fn, bn))
          ]),
          _: 1
        }, 8, ["onOnClick"])
      ]),
      S(l, {
        loading: e.loading,
        size: "small"
      }, null, 8, ["loading"])
    ])
  ]);
}
const pr = /* @__PURE__ */ R(rn, [["render", gn]]);
function me(e) {
  return e === 0 ? !1 : Array.isArray(e) && e.length === 0 ? !0 : !e;
}
function yn(e) {
  return (...t) => !e(...t);
}
function wn(e, t) {
  return e === void 0 && (e = "undefined"), e === null && (e = "null"), e === !1 && (e = "false"), e.toString().toLowerCase().indexOf(t.trim()) !== -1;
}
function ht(e, t, s, n) {
  return t ? e.filter((r) => wn(n(r, s), t)).sort((r, o) => n(r, s).length - n(o, s).length) : e;
}
function vn(e) {
  return e.filter((t) => !t.$isLabel);
}
function be(e, t) {
  return (s) => s.reduce((n, r) => r[e] && r[e].length ? (n.push({
    $groupLabel: r[t],
    $isLabel: !0
  }), n.concat(r[e])) : n, []);
}
function Sn(e, t, s, n, r) {
  return (o) => o.map((i) => {
    if (!i[s])
      return console.warn("Options passed to vue-multiselect do not contain groups, despite the config."), [];
    const l = ht(i[s], e, t, r);
    return l.length ? {
      [n]: i[n],
      [s]: l
    } : [];
  });
}
const xe = (...e) => (t) => e.reduce((s, n) => n(s), t);
var On = {
  data() {
    return {
      search: "",
      isOpen: !1,
      preferredOpenDirection: "below",
      optimizedHeight: this.maxHeight
    };
  },
  props: {
    internalSearch: {
      type: Boolean,
      default: !0
    },
    options: {
      type: Array,
      required: !0
    },
    multiple: {
      type: Boolean,
      default: !1
    },
    trackBy: {
      type: String
    },
    label: {
      type: String
    },
    searchable: {
      type: Boolean,
      default: !0
    },
    clearOnSelect: {
      type: Boolean,
      default: !0
    },
    hideSelected: {
      type: Boolean,
      default: !1
    },
    placeholder: {
      type: String,
      default: "Select option"
    },
    allowEmpty: {
      type: Boolean,
      default: !0
    },
    resetAfter: {
      type: Boolean,
      default: !1
    },
    closeOnSelect: {
      type: Boolean,
      default: !0
    },
    customLabel: {
      type: Function,
      default(e, t) {
        return me(e) ? "" : t ? e[t] : e;
      }
    },
    taggable: {
      type: Boolean,
      default: !1
    },
    tagPlaceholder: {
      type: String,
      default: "Press enter to create a tag"
    },
    tagPosition: {
      type: String,
      default: "top"
    },
    max: {
      type: [Number, Boolean],
      default: !1
    },
    id: {
      default: null
    },
    optionsLimit: {
      type: Number,
      default: 1e3
    },
    groupValues: {
      type: String
    },
    groupLabel: {
      type: String
    },
    groupSelect: {
      type: Boolean,
      default: !1
    },
    blockKeys: {
      type: Array,
      default() {
        return [];
      }
    },
    preserveSearch: {
      type: Boolean,
      default: !1
    },
    preselectFirst: {
      type: Boolean,
      default: !1
    }
  },
  mounted() {
    !this.multiple && this.max && console.warn("[Vue-Multiselect warn]: Max prop should not be used when prop Multiple equals false."), this.preselectFirst && !this.internalValue.length && this.options.length && this.select(this.filteredOptions[0]);
  },
  computed: {
    internalValue() {
      return this.modelValue || this.modelValue === 0 ? Array.isArray(this.modelValue) ? this.modelValue : [this.modelValue] : [];
    },
    filteredOptions() {
      const e = this.search || "", t = e.toLowerCase().trim();
      let s = this.options.concat();
      return this.internalSearch ? s = this.groupValues ? this.filterAndFlat(s, t, this.label) : ht(s, t, this.label, this.customLabel) : s = this.groupValues ? be(this.groupValues, this.groupLabel)(s) : s, s = this.hideSelected ? s.filter(yn(this.isSelected)) : s, this.taggable && t.length && !this.isExistingOption(t) && (this.tagPosition === "bottom" ? s.push({ isTag: !0, label: e }) : s.unshift({ isTag: !0, label: e })), s.slice(0, this.optionsLimit);
    },
    valueKeys() {
      return this.trackBy ? this.internalValue.map((e) => e[this.trackBy]) : this.internalValue;
    },
    optionKeys() {
      return (this.groupValues ? this.flatAndStrip(this.options) : this.options).map((t) => this.customLabel(t, this.label).toString().toLowerCase());
    },
    currentOptionLabel() {
      return this.multiple ? this.searchable ? "" : this.placeholder : this.internalValue.length ? this.getOptionLabel(this.internalValue[0]) : this.searchable ? "" : this.placeholder;
    }
  },
  watch: {
    internalValue() {
      this.resetAfter && this.internalValue.length && (this.search = "", this.$emit("update:modelValue", this.multiple ? [] : null));
    },
    search() {
      this.$emit("search-change", this.search);
    }
  },
  emits: ["open", "search-change", "close", "select", "update:modelValue", "remove", "tag"],
  methods: {
    getValue() {
      return this.multiple ? this.internalValue : this.internalValue.length === 0 ? null : this.internalValue[0];
    },
    filterAndFlat(e, t, s) {
      return xe(
        Sn(t, s, this.groupValues, this.groupLabel, this.customLabel),
        be(this.groupValues, this.groupLabel)
      )(e);
    },
    flatAndStrip(e) {
      return xe(
        be(this.groupValues, this.groupLabel),
        vn
      )(e);
    },
    updateSearch(e) {
      this.search = e;
    },
    isExistingOption(e) {
      return this.options ? this.optionKeys.indexOf(e) > -1 : !1;
    },
    isSelected(e) {
      const t = this.trackBy ? e[this.trackBy] : e;
      return this.valueKeys.indexOf(t) > -1;
    },
    isOptionDisabled(e) {
      return !!e.$isDisabled;
    },
    getOptionLabel(e) {
      if (me(e))
        return "";
      if (e.isTag)
        return e.label;
      if (e.$isLabel)
        return e.$groupLabel;
      const t = this.customLabel(e, this.label);
      return me(t) ? "" : t;
    },
    select(e, t) {
      if (e.$isLabel && this.groupSelect) {
        this.selectGroup(e);
        return;
      }
      if (!(this.blockKeys.indexOf(t) !== -1 || this.disabled || e.$isDisabled || e.$isLabel) && !(this.max && this.multiple && this.internalValue.length === this.max) && !(t === "Tab" && !this.pointerDirty)) {
        if (e.isTag)
          this.$emit("tag", e.label, this.id), this.search = "", this.closeOnSelect && !this.multiple && this.deactivate();
        else {
          if (this.isSelected(e)) {
            t !== "Tab" && this.removeElement(e);
            return;
          }
          this.$emit("select", e, this.id), this.multiple ? this.$emit("update:modelValue", this.internalValue.concat([e])) : this.$emit("update:modelValue", e), this.clearOnSelect && (this.search = "");
        }
        this.closeOnSelect && this.deactivate();
      }
    },
    selectGroup(e) {
      const t = this.options.find((s) => s[this.groupLabel] === e.$groupLabel);
      if (!!t) {
        if (this.wholeGroupSelected(t)) {
          this.$emit("remove", t[this.groupValues], this.id);
          const s = this.internalValue.filter(
            (n) => t[this.groupValues].indexOf(n) === -1
          );
          this.$emit("update:modelValue", s);
        } else {
          const s = t[this.groupValues].filter(
            (n) => !(this.isOptionDisabled(n) || this.isSelected(n))
          );
          this.$emit("select", s, this.id), this.$emit(
            "update:modelValue",
            this.internalValue.concat(s)
          );
        }
        this.closeOnSelect && this.deactivate();
      }
    },
    wholeGroupSelected(e) {
      return e[this.groupValues].every(
        (t) => this.isSelected(t) || this.isOptionDisabled(t)
      );
    },
    wholeGroupDisabled(e) {
      return e[this.groupValues].every(this.isOptionDisabled);
    },
    removeElement(e, t = !0) {
      if (this.disabled || e.$isDisabled)
        return;
      if (!this.allowEmpty && this.internalValue.length <= 1) {
        this.deactivate();
        return;
      }
      const s = typeof e == "object" ? this.valueKeys.indexOf(e[this.trackBy]) : this.valueKeys.indexOf(e);
      if (this.$emit("remove", e, this.id), this.multiple) {
        const n = this.internalValue.slice(0, s).concat(this.internalValue.slice(s + 1));
        this.$emit("update:modelValue", n);
      } else
        this.$emit("update:modelValue", null);
      this.closeOnSelect && t && this.deactivate();
    },
    removeLastElement() {
      this.blockKeys.indexOf("Delete") === -1 && this.search.length === 0 && Array.isArray(this.internalValue) && this.internalValue.length && this.removeElement(this.internalValue[this.internalValue.length - 1], !1);
    },
    activate() {
      this.isOpen || this.disabled || (this.adjustPosition(), this.groupValues && this.pointer === 0 && this.filteredOptions.length && (this.pointer = 1), this.isOpen = !0, this.searchable ? (this.preserveSearch || (this.search = ""), this.$nextTick(() => this.$refs.search && this.$refs.search.focus())) : this.$el.focus(), this.$emit("open", this.id));
    },
    deactivate() {
      !this.isOpen || (this.isOpen = !1, this.searchable ? this.$refs.search && this.$refs.search.blur() : this.$el.blur(), this.preserveSearch || (this.search = ""), this.$emit("close", this.getValue(), this.id));
    },
    toggle() {
      this.isOpen ? this.deactivate() : this.activate();
    },
    adjustPosition() {
      if (typeof window > "u")
        return;
      const e = this.$el.getBoundingClientRect().top, t = window.innerHeight - this.$el.getBoundingClientRect().bottom;
      t > this.maxHeight || t > e || this.openDirection === "below" || this.openDirection === "bottom" ? (this.preferredOpenDirection = "below", this.optimizedHeight = Math.min(t - 40, this.maxHeight)) : (this.preferredOpenDirection = "above", this.optimizedHeight = Math.min(e - 40, this.maxHeight));
    }
  }
}, En = {
  data() {
    return {
      pointer: 0,
      pointerDirty: !1
    };
  },
  props: {
    showPointer: {
      type: Boolean,
      default: !0
    },
    optionHeight: {
      type: Number,
      default: 40
    }
  },
  computed: {
    pointerPosition() {
      return this.pointer * this.optionHeight;
    },
    visibleElements() {
      return this.optimizedHeight / this.optionHeight;
    }
  },
  watch: {
    filteredOptions() {
      this.pointerAdjust();
    },
    isOpen() {
      this.pointerDirty = !1;
    },
    pointer() {
      this.$refs.search && this.$refs.search.setAttribute("aria-activedescendant", this.id + "-" + this.pointer.toString());
    }
  },
  methods: {
    optionHighlight(e, t) {
      return {
        "multiselect__option--highlight": e === this.pointer && this.showPointer,
        "multiselect__option--selected": this.isSelected(t)
      };
    },
    groupHighlight(e, t) {
      if (!this.groupSelect)
        return [
          "multiselect__option--disabled",
          { "multiselect__option--group": t.$isLabel }
        ];
      const s = this.options.find((n) => n[this.groupLabel] === t.$groupLabel);
      return s && !this.wholeGroupDisabled(s) ? [
        "multiselect__option--group",
        { "multiselect__option--highlight": e === this.pointer && this.showPointer },
        { "multiselect__option--group-selected": this.wholeGroupSelected(s) }
      ] : "multiselect__option--disabled";
    },
    addPointerElement({ key: e } = "Enter") {
      this.filteredOptions.length > 0 && this.select(this.filteredOptions[this.pointer], e), this.pointerReset();
    },
    pointerForward() {
      this.pointer < this.filteredOptions.length - 1 && (this.pointer++, this.$refs.list.scrollTop <= this.pointerPosition - (this.visibleElements - 1) * this.optionHeight && (this.$refs.list.scrollTop = this.pointerPosition - (this.visibleElements - 1) * this.optionHeight), this.filteredOptions[this.pointer] && this.filteredOptions[this.pointer].$isLabel && !this.groupSelect && this.pointerForward()), this.pointerDirty = !0;
    },
    pointerBackward() {
      this.pointer > 0 ? (this.pointer--, this.$refs.list.scrollTop >= this.pointerPosition && (this.$refs.list.scrollTop = this.pointerPosition), this.filteredOptions[this.pointer] && this.filteredOptions[this.pointer].$isLabel && !this.groupSelect && this.pointerBackward()) : this.filteredOptions[this.pointer] && this.filteredOptions[0].$isLabel && !this.groupSelect && this.pointerForward(), this.pointerDirty = !0;
    },
    pointerReset() {
      !this.closeOnSelect || (this.pointer = 0, this.$refs.list && (this.$refs.list.scrollTop = 0));
    },
    pointerAdjust() {
      this.pointer >= this.filteredOptions.length - 1 && (this.pointer = this.filteredOptions.length ? this.filteredOptions.length - 1 : 0), this.filteredOptions.length > 0 && this.filteredOptions[this.pointer].$isLabel && !this.groupSelect && this.pointerForward();
    },
    pointerSet(e) {
      this.pointer = e, this.pointerDirty = !0;
    }
  }
}, Ae = {
  name: "vue-multiselect",
  mixins: [On, En],
  props: {
    name: {
      type: String,
      default: ""
    },
    modelValue: {
      type: null,
      default() {
        return [];
      }
    },
    selectLabel: {
      type: String,
      default: "Press enter to select"
    },
    selectGroupLabel: {
      type: String,
      default: "Press enter to select group"
    },
    selectedLabel: {
      type: String,
      default: "Selected"
    },
    deselectLabel: {
      type: String,
      default: "Press enter to remove"
    },
    deselectGroupLabel: {
      type: String,
      default: "Press enter to deselect group"
    },
    showLabels: {
      type: Boolean,
      default: !0
    },
    limit: {
      type: Number,
      default: 99999
    },
    maxHeight: {
      type: Number,
      default: 300
    },
    limitText: {
      type: Function,
      default: (e) => `and ${e} more`
    },
    loading: {
      type: Boolean,
      default: !1
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    openDirection: {
      type: String,
      default: ""
    },
    showNoOptions: {
      type: Boolean,
      default: !0
    },
    showNoResults: {
      type: Boolean,
      default: !0
    },
    tabindex: {
      type: Number,
      default: 0
    }
  },
  computed: {
    isSingleLabelVisible() {
      return (this.singleValue || this.singleValue === 0) && (!this.isOpen || !this.searchable) && !this.visibleValues.length;
    },
    isPlaceholderVisible() {
      return !this.internalValue.length && (!this.searchable || !this.isOpen);
    },
    visibleValues() {
      return this.multiple ? this.internalValue.slice(0, this.limit) : [];
    },
    singleValue() {
      return this.internalValue[0];
    },
    deselectLabelText() {
      return this.showLabels ? this.deselectLabel : "";
    },
    deselectGroupLabelText() {
      return this.showLabels ? this.deselectGroupLabel : "";
    },
    selectLabelText() {
      return this.showLabels ? this.selectLabel : "";
    },
    selectGroupLabelText() {
      return this.showLabels ? this.selectGroupLabel : "";
    },
    selectedLabelText() {
      return this.showLabels ? this.selectedLabel : "";
    },
    inputStyle() {
      return this.searchable || this.multiple && this.modelValue && this.modelValue.length ? this.isOpen ? { width: "100%" } : { width: "0", position: "absolute", padding: "0" } : "";
    },
    contentStyle() {
      return this.options.length ? { display: "inline-block" } : { display: "block" };
    },
    isAbove() {
      return this.openDirection === "above" || this.openDirection === "top" ? !0 : this.openDirection === "below" || this.openDirection === "bottom" ? !1 : this.preferredOpenDirection === "above";
    },
    showSearchInput() {
      return this.searchable && (this.hasSingleSelectedSlot && (this.visibleSingleValue || this.visibleSingleValue === 0) ? this.isOpen : !0);
    }
  }
};
const kn = {
  ref: "tags",
  class: "multiselect__tags"
}, _n = { class: "multiselect__tags-wrap" }, $n = { class: "multiselect__spinner" }, Cn = { key: 0 }, An = { class: "multiselect__option" }, Ln = { class: "multiselect__option" }, Rn = /* @__PURE__ */ T("No elements found. Consider changing the search query."), Tn = { class: "multiselect__option" }, Fn = /* @__PURE__ */ T("List is empty.");
function Vn(e, t, s, n, r, o) {
  return d(), F("div", {
    tabindex: e.searchable ? -1 : s.tabindex,
    class: [{ "multiselect--active": e.isOpen, "multiselect--disabled": s.disabled, "multiselect--above": o.isAbove }, "multiselect"],
    onFocus: t[14] || (t[14] = (i) => e.activate()),
    onBlur: t[15] || (t[15] = (i) => e.searchable ? !1 : e.deactivate()),
    onKeydown: [
      t[16] || (t[16] = B($((i) => e.pointerForward(), ["self", "prevent"]), ["down"])),
      t[17] || (t[17] = B($((i) => e.pointerBackward(), ["self", "prevent"]), ["up"]))
    ],
    onKeypress: t[18] || (t[18] = B($((i) => e.addPointerElement(i), ["stop", "self"]), ["enter", "tab"])),
    onKeyup: t[19] || (t[19] = B((i) => e.deactivate(), ["esc"])),
    role: "combobox",
    "aria-owns": "listbox-" + e.id
  }, [
    O(e.$slots, "caret", { toggle: e.toggle }, () => [
      S("div", {
        onMousedown: t[1] || (t[1] = $((i) => e.toggle(), ["prevent", "stop"])),
        class: "multiselect__select"
      }, null, 32)
    ]),
    O(e.$slots, "clear", { search: e.search }),
    S("div", kn, [
      O(e.$slots, "selection", {
        search: e.search,
        remove: e.removeElement,
        values: o.visibleValues,
        isOpen: e.isOpen
      }, () => [
        z(S("div", _n, [
          (d(!0), F(M, null, x(o.visibleValues, (i, l) => O(e.$slots, "tag", {
            option: i,
            search: e.search,
            remove: e.removeElement
          }, () => [
            (d(), F("span", {
              class: "multiselect__tag",
              key: l
            }, [
              S("span", {
                textContent: w(e.getOptionLabel(i))
              }, null, 8, ["textContent"]),
              S("i", {
                tabindex: "1",
                onKeypress: B($((c) => e.removeElement(i), ["prevent"]), ["enter"]),
                onMousedown: $((c) => e.removeElement(i), ["prevent"]),
                class: "multiselect__tag-icon"
              }, null, 40, ["onKeypress", "onMousedown"])
            ]))
          ])), 256))
        ], 512), [
          [X, o.visibleValues.length > 0]
        ]),
        e.internalValue && e.internalValue.length > s.limit ? O(e.$slots, "limit", { key: 0 }, () => [
          S("strong", {
            class: "multiselect__strong",
            textContent: w(s.limitText(e.internalValue.length - s.limit))
          }, null, 8, ["textContent"])
        ]) : E("v-if", !0)
      ]),
      S(Re, { name: "multiselect__loading" }, {
        default: N(() => [
          O(e.$slots, "loading", {}, () => [
            z(S("div", $n, null, 512), [
              [X, s.loading]
            ])
          ])
        ]),
        _: 3
      }),
      e.searchable ? (d(), F("input", {
        key: 0,
        ref: "search",
        name: s.name,
        id: e.id,
        type: "text",
        autocomplete: "off",
        spellcheck: "false",
        placeholder: e.placeholder,
        style: o.inputStyle,
        value: e.search,
        disabled: s.disabled,
        tabindex: s.tabindex,
        onInput: t[2] || (t[2] = (i) => e.updateSearch(i.target.value)),
        onFocus: t[3] || (t[3] = $((i) => e.activate(), ["prevent"])),
        onBlur: t[4] || (t[4] = $((i) => e.deactivate(), ["prevent"])),
        onKeyup: t[5] || (t[5] = B((i) => e.deactivate(), ["esc"])),
        onKeydown: [
          t[6] || (t[6] = B($((i) => e.pointerForward(), ["prevent"]), ["down"])),
          t[7] || (t[7] = B($((i) => e.pointerBackward(), ["prevent"]), ["up"])),
          t[9] || (t[9] = B($((i) => e.removeLastElement(), ["stop"]), ["delete"]))
        ],
        onKeypress: t[8] || (t[8] = B($((i) => e.addPointerElement(i), ["prevent", "stop", "self"]), ["enter"])),
        class: "multiselect__input",
        "aria-controls": "listbox-" + e.id
      }, null, 44, ["name", "id", "placeholder", "value", "disabled", "tabindex", "aria-controls"])) : E("v-if", !0),
      o.isSingleLabelVisible ? (d(), F("span", {
        key: 1,
        class: "multiselect__single",
        onMousedown: t[10] || (t[10] = $((...i) => e.toggle && e.toggle(...i), ["prevent"]))
      }, [
        O(e.$slots, "singleLabel", { option: o.singleValue }, () => [
          T(w(e.currentOptionLabel), 1)
        ])
      ], 32)) : E("v-if", !0),
      o.isPlaceholderVisible ? (d(), F("span", {
        key: 2,
        class: "multiselect__placeholder",
        onMousedown: t[11] || (t[11] = $((...i) => e.toggle && e.toggle(...i), ["prevent"]))
      }, [
        O(e.$slots, "placeholder", {}, () => [
          T(w(e.placeholder), 1)
        ])
      ], 32)) : E("v-if", !0)
    ], 512),
    S(Re, { name: "multiselect" }, {
      default: N(() => [
        z(S("div", {
          class: "multiselect__content-wrapper",
          onFocus: t[12] || (t[12] = (...i) => e.activate && e.activate(...i)),
          tabindex: "-1",
          onMousedown: t[13] || (t[13] = $(() => {
          }, ["prevent"])),
          style: { maxHeight: e.optimizedHeight + "px" },
          ref: "list"
        }, [
          S("ul", {
            class: "multiselect__content",
            style: o.contentStyle,
            role: "listbox",
            id: "listbox-" + e.id
          }, [
            O(e.$slots, "beforeList"),
            e.multiple && e.max === e.internalValue.length ? (d(), F("li", Cn, [
              S("span", An, [
                O(e.$slots, "maxElements", {}, () => [
                  T("Maximum of " + w(e.max) + " options selected. First remove a selected option to select another.", 1)
                ])
              ])
            ])) : E("v-if", !0),
            !e.max || e.internalValue.length < e.max ? (d(!0), F(M, { key: 1 }, x(e.filteredOptions, (i, l) => (d(), F("li", {
              class: "multiselect__element",
              key: l,
              id: e.id + "-" + l,
              role: i && (i.$isLabel || i.$isDisabled) ? null : "option"
            }, [
              i && (i.$isLabel || i.$isDisabled) ? E("v-if", !0) : (d(), F("span", {
                key: 0,
                class: [e.optionHighlight(l, i), "multiselect__option"],
                onClick: $((c) => e.select(i), ["stop"]),
                onMouseenter: $((c) => e.pointerSet(l), ["self"]),
                "data-select": i && i.isTag ? e.tagPlaceholder : o.selectLabelText,
                "data-selected": o.selectedLabelText,
                "data-deselect": o.deselectLabelText
              }, [
                O(e.$slots, "option", {
                  option: i,
                  search: e.search,
                  index: l
                }, () => [
                  S("span", null, w(e.getOptionLabel(i)), 1)
                ])
              ], 42, ["onClick", "onMouseenter", "data-select", "data-selected", "data-deselect"])),
              i && (i.$isLabel || i.$isDisabled) ? (d(), F("span", {
                key: 1,
                "data-select": e.groupSelect && o.selectGroupLabelText,
                "data-deselect": e.groupSelect && o.deselectGroupLabelText,
                class: [e.groupHighlight(l, i), "multiselect__option"],
                onMouseenter: $((c) => e.groupSelect && e.pointerSet(l), ["self"]),
                onMousedown: $((c) => e.selectGroup(i), ["prevent"])
              }, [
                O(e.$slots, "option", {
                  option: i,
                  search: e.search,
                  index: l
                }, () => [
                  S("span", null, w(e.getOptionLabel(i)), 1)
                ])
              ], 42, ["data-select", "data-deselect", "onMouseenter", "onMousedown"])) : E("v-if", !0)
            ], 8, ["id", "role"]))), 128)) : E("v-if", !0),
            z(S("li", null, [
              S("span", Ln, [
                O(e.$slots, "noResult", { search: e.search }, () => [
                  Rn
                ])
              ])
            ], 512), [
              [X, s.showNoResults && e.filteredOptions.length === 0 && e.search && !s.loading]
            ]),
            z(S("li", null, [
              S("span", Tn, [
                O(e.$slots, "noOptions", {}, () => [
                  Fn
                ])
              ])
            ], 512), [
              [X, s.showNoOptions && e.options.length === 0 && !e.search && !s.loading]
            ]),
            O(e.$slots, "afterList")
          ], 12, ["id"])
        ], 36), [
          [X, e.isOpen]
        ])
      ]),
      _: 3
    })
  ], 42, ["tabindex", "aria-owns"]);
}
Ae.render = Vn;
const Pn = L({
  name: "CustomMultiSelect",
  emits: ["update:selectedOptions"],
  props: {
    label: {
      type: String
    },
    placeholder: {
      type: String,
      default: "Seleziona opzione"
    },
    options: {
      type: Array,
      required: !0
    },
    selectedOptions: {
      type: Array,
      required: !0
    }
  },
  components: {
    VueMultiselect: Ae
  },
  data() {
    return {
      value: [],
      visibleOptions: []
    };
  },
  methods: {
    removeOption(e) {
      const t = this.value.findIndex((n) => n.label === e.label && n.value === e.value), s = this.value;
      s.splice(t, 1), this.value = s, this.updateModel();
    },
    find(e) {
      this.visibleOptions = [...this.options].filter((t) => t.label.toLowerCase().includes(e.toLowerCase()));
    },
    updateModel() {
      const e = [...this.value].map((t) => t.value);
      this.$emit("update:selectedOptions", e);
    }
  },
  watch: {
    value() {
      this.updateModel();
    }
  },
  mounted() {
    this.visibleOptions = this.options;
    let e = [];
    [...this.selectedOptions].forEach((t) => {
      const s = this.options.find((n) => n.value == t);
      s ? e.push(s) : console.log("Option multiselect not found");
    }), this.value = e;
  }
});
const Bn = { class: "custom-multiselect" }, Mn = {
  key: 0,
  for: "exampleFormControlSelect1",
  class: "custom-multiselect__label text-sm"
}, Nn = { class: "multiselect__tags-wrap" }, Dn = { class: "multiselect__tag" }, jn = ["onClick"];
function Un(e, t, s, n, r, o) {
  const i = J("vue-multiselect");
  return d(), m("div", Bn, [
    e.label ? (d(), m("label", Mn, w(e.label), 1)) : E("", !0),
    S(i, {
      modelValue: e.value,
      "onUpdate:modelValue": t[0] || (t[0] = (l) => e.value = l),
      options: e.visibleOptions,
      class: "custom-multiselect__select",
      placeholder: e.placeholder,
      multiple: !0,
      "close-on-select": !1,
      selectLabel: "Seleziona",
      selectedLabel: "Selezionato",
      deselectLabel: "Rimuovi",
      "track-by": "label",
      onSearchChange: e.find,
      "internal-search": !1
    }, {
      noResult: N(() => [
        T(" Nessun risultato. ")
      ]),
      tag: N((l) => [
        h("div", Nn, [
          h("span", Dn, [
            h("span", null, w(l.option.label), 1),
            h("i", {
              onClick: (c) => e.removeOption(l.option),
              tabindex: "1",
              class: "multiselect__tag-icon"
            }, null, 8, jn)
          ])
        ])
      ]),
      option: N((l) => [
        T(w(l.option.label), 1)
      ]),
      _: 1
    }, 8, ["modelValue", "options", "placeholder", "onSearchChange"])
  ]);
}
const fr = /* @__PURE__ */ R(Pn, [["render", Un]]);
var In = "Expected a function", ze = 0 / 0, Hn = "[object Symbol]", xn = /^\s+|\s+$/g, zn = /^[-+]0x[0-9a-f]+$/i, qn = /^0b[01]+$/i, Gn = /^0o[0-7]+$/i, Jn = parseInt, Kn = typeof re == "object" && re && re.Object === Object && re, Wn = typeof self == "object" && self && self.Object === Object && self, Qn = Kn || Wn || Function("return this")(), Yn = Object.prototype, Xn = Yn.toString, Zn = Math.max, ei = Math.min, ge = function() {
  return Qn.Date.now();
};
function ti(e, t, s) {
  var n, r, o, i, l, c, a = 0, f = !1, y = !1, k = !0;
  if (typeof e != "function")
    throw new TypeError(In);
  t = qe(t) || 0, Oe(s) && (f = !!s.leading, y = "maxWait" in s, o = y ? Zn(qe(s.maxWait) || 0, t) : o, k = "trailing" in s ? !!s.trailing : k);
  function b(_) {
    var I = n, Y = r;
    return n = r = void 0, a = _, i = e.apply(Y, I), i;
  }
  function p(_) {
    return a = _, l = setTimeout(C, t), f ? b(_) : i;
  }
  function v(_) {
    var I = _ - c, Y = _ - a, Le = t - I;
    return y ? ei(Le, o - Y) : Le;
  }
  function P(_) {
    var I = _ - c, Y = _ - a;
    return c === void 0 || I >= t || I < 0 || y && Y >= o;
  }
  function C() {
    var _ = ge();
    if (P(_))
      return D(_);
    l = setTimeout(C, v(_));
  }
  function D(_) {
    return l = void 0, k && n ? b(_) : (n = r = void 0, i);
  }
  function K() {
    l !== void 0 && clearTimeout(l), a = 0, n = c = r = l = void 0;
  }
  function de() {
    return l === void 0 ? i : D(ge());
  }
  function he() {
    var _ = ge(), I = P(_);
    if (n = arguments, r = this, c = _, I) {
      if (l === void 0)
        return p(c);
      if (y)
        return l = setTimeout(C, t), b(c);
    }
    return l === void 0 && (l = setTimeout(C, t)), i;
  }
  return he.cancel = K, he.flush = de, he;
}
function Oe(e) {
  var t = typeof e;
  return !!e && (t == "object" || t == "function");
}
function si(e) {
  return !!e && typeof e == "object";
}
function ni(e) {
  return typeof e == "symbol" || si(e) && Xn.call(e) == Hn;
}
function qe(e) {
  if (typeof e == "number")
    return e;
  if (ni(e))
    return ze;
  if (Oe(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = Oe(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = e.replace(xn, "");
  var s = qn.test(e);
  return s || Gn.test(e) ? Jn(e.slice(2), s ? 2 : 8) : zn.test(e) ? ze : +e;
}
var ii = ti;
const ri = L({
  name: "CustomMultiSelectAsync",
  emits: ["update:selectedOptions"],
  props: {
    label: {
      type: String
    },
    placeholder: {
      type: String,
      default: "Seleziona opzione"
    },
    optionsSearchRoute: {
      type: String,
      required: !0
    },
    selectedOptions: {
      type: Array,
      required: !0
    }
  },
  components: {
    VueMultiselect: Ae
  },
  data() {
    return {
      value: [],
      visibleOptions: [],
      loading: !1
    };
  },
  methods: {
    removeOption(e) {
      const t = this.value.findIndex((n) => n.label === e.label && n.value === e.value), s = this.value;
      s.splice(t, 1), this.value = s, this.updateModel();
    },
    updateModel() {
      this.$emit("update:selectedOptions", this.value);
    },
    find(e) {
      e && (this.loading = !0, A.get(this.optionsSearchRoute, {
        params: {
          q: e
        }
      }).then((t) => {
        if (t.status === 200) {
          this.loading = !1;
          let s = [...this.value];
          this.visibleOptions = s.concat(t.data);
        }
      }).catch((t) => {
        console.log(t), this.loading = !1;
      }));
    },
    debouncedSearch: ii(function(e) {
      this.find(e);
    }, 500)
  },
  watch: {
    value() {
      this.updateModel();
    }
  },
  mounted() {
    this.visibleOptions = [...this.selectedOptions], this.value = this.selectedOptions;
  }
}), oi = { class: "custom-multiselect" }, li = {
  key: 0,
  class: "custom-multiselect__label text-sm"
}, ai = { class: "multiselect__tags-wrap" }, ui = { class: "multiselect__tag" }, ci = ["onClick"];
function di(e, t, s, n, r, o) {
  const i = J("vue-multiselect");
  return d(), m("div", oi, [
    e.label ? (d(), m("label", li, w(e.label), 1)) : E("", !0),
    S(i, {
      modelValue: e.value,
      "onUpdate:modelValue": t[0] || (t[0] = (l) => e.value = l),
      options: e.visibleOptions,
      class: "custom-multiselect__select",
      placeholder: e.placeholder,
      multiple: !0,
      "close-on-select": !1,
      selectLabel: "Seleziona",
      selectedLabel: "Selezionato",
      deselectLabel: "Rimuovi",
      "track-by": "label",
      "internal-search": !1,
      onSearchChange: e.debouncedSearch,
      loading: e.loading
    }, {
      noResult: N(() => [
        T(" Nessun risultato. ")
      ]),
      tag: N((l) => [
        h("div", ai, [
          h("span", ui, [
            h("span", null, w(l.option.label), 1),
            h("i", {
              onClick: (c) => e.removeOption(l.option),
              tabindex: "1",
              class: "multiselect__tag-icon"
            }, null, 8, ci)
          ])
        ])
      ]),
      option: N((l) => [
        T(w(l.option.label), 1)
      ]),
      _: 1
    }, 8, ["modelValue", "options", "placeholder", "onSearchChange", "loading"])
  ]);
}
const mr = /* @__PURE__ */ R(ri, [["render", di]]), hi = L({
  name: "CustomSelect",
  props: {
    options: {
      type: Array,
      required: !0
    },
    label: {
      type: String,
      required: !1
    },
    name: {
      type: String,
      required: !0
    },
    value: {
      type: [String, Number]
    },
    placeholder: {
      type: String,
      default: "Seleziona opzione",
      required: !1
    },
    disabled: {
      type: Boolean,
      default: !1
    }
  },
  setup(e, t) {
    return { handleSelectChange: ({ target: n }) => {
      t.emit("update:value", n.value);
    } };
  }
}), pi = { class: "custom-select" }, fi = {
  key: 0,
  for: "exampleFormControlSelect1",
  class: "custom-select__label text-sm"
}, mi = ["name", "id", "disabled"], bi = {
  selected: "",
  disabled: "",
  value: ""
}, gi = ["value", "selected"];
function yi(e, t, s, n, r, o) {
  return d(), m("div", pi, [
    e.label ? (d(), m("label", fi, w(e.label), 1)) : E("", !0),
    h("select", {
      name: e.name,
      class: "custom-select__select",
      id: "select_" + e.name,
      onChange: t[0] || (t[0] = (...i) => e.handleSelectChange && e.handleSelectChange(...i)),
      disabled: e.disabled
    }, [
      h("option", bi, w(e.placeholder), 1),
      (d(!0), m(M, null, x(e.options, (i, l) => (d(), m("option", {
        key: l,
        value: i.value,
        selected: i.value == e.value
      }, w(i.label), 9, gi))), 128))
    ], 40, mi)
  ]);
}
const br = /* @__PURE__ */ R(hi, [["render", yi]]), wi = L({
  name: "CustomRadioGroup",
  props: {
    options: {
      type: Array,
      required: !0
    },
    value: {
      type: [Number, String],
      default: ""
    }
  },
  setup(e, t) {
    return { checkRadio: ({ target: n }) => {
      t.emit("update:value", n.value);
    } };
  }
}), vi = { class: "custom-radio-group" }, Si = ["name", "id", "value", "disabled", "checked"], Oi = /* @__PURE__ */ h("span", { class: "custom-radio-group__single-radio__radio" }, null, -1), Ei = ["for"];
function ki(e, t, s, n, r, o) {
  return d(), m("div", vi, [
    (d(!0), m(M, null, x(e.options, (i) => (d(), m("div", {
      key: i.id,
      class: se([{ disabled: i.disabled, checked: i.value == e.value }, "custom-radio-group__single-radio"])
    }, [
      h("input", {
        type: "radio",
        name: i.name,
        id: i.id,
        value: i.value,
        disabled: i.disabled,
        class: "custom-radio-group__single-radio__radio-hidden",
        checked: i.value == e.value,
        onChange: t[0] || (t[0] = (...l) => e.checkRadio && e.checkRadio(...l))
      }, null, 40, Si),
      Oi,
      h("label", {
        class: "custom-radio-group__single-radio__radio-label",
        for: i.id
      }, w(i.label), 9, Ei)
    ], 2))), 128))
  ]);
}
const gr = /* @__PURE__ */ R(wi, [["render", ki]]), _i = L({
  name: "CustomTextArea",
  emits: ["update"],
  props: {
    classes: {
      required: !1,
      default: "",
      type: String
    },
    modelValue: {
      type: String,
      default: ""
    },
    label: {
      type: String,
      required: !1
    }
  },
  setup(e, { emit: t }) {
    return { computedValue: Ge({
      get() {
        return e.modelValue;
      },
      set(n) {
        t("update", n);
      }
    }) };
  }
}), $i = { class: "generic-input" }, Ci = {
  key: 0,
  class: "generic-input__label text-sm secondary-color"
};
function Ai(e, t, s, n, r, o) {
  return d(), m("div", $i, [
    e.label ? (d(), m("label", Ci, w(e.label), 1)) : E("", !0),
    z(h("textarea", Je(e.$attrs, {
      "onUpdate:modelValue": t[0] || (t[0] = (i) => e.computedValue = i),
      class: "generic-input__input " + e.classes
    }), null, 16), [
      [ft, e.computedValue]
    ])
  ]);
}
const yr = /* @__PURE__ */ R(_i, [["render", Ai]]), Li = L({
  name: "GenericInput",
  emits: ["update"],
  props: {
    classes: {
      required: !1,
      default: "",
      type: String
    },
    modelValue: {
      type: String,
      default: ""
    },
    label: {
      type: String,
      required: !1
    },
    readOnly: {
      type: Boolean,
      default: !1
    }
  },
  setup(e, { emit: t }) {
    return { computedValue: Ge({
      get() {
        return e.modelValue;
      },
      set(n) {
        t("update", n);
      }
    }) };
  }
}), Ri = { class: "generic-input" }, Ti = {
  key: 0,
  class: "generic-input__label text-sm secondary-color"
}, Fi = { class: "input-container" }, Vi = {
  key: 1,
  class: "generic-input__read-only"
};
function Pi(e, t, s, n, r, o) {
  return d(), m("div", Ri, [
    e.label ? (d(), m("label", Ti, w(e.label), 1)) : E("", !0),
    h("div", Fi, [
      O(e.$slots, "prepend"),
      e.readOnly ? E("", !0) : z((d(), m("input", Je({ key: 0 }, e.$attrs, {
        "onUpdate:modelValue": t[0] || (t[0] = (i) => e.computedValue = i),
        class: "generic-input__input " + e.classes
      }), null, 16)), [
        [mt, e.computedValue]
      ])
    ]),
    e.readOnly ? (d(), m("div", Vi, w(e.computedValue), 1)) : E("", !0)
  ]);
}
const wr = /* @__PURE__ */ R(Li, [["render", Pi]]), Bi = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIwAAAAnCAYAAADdG6ATAAAACXBIWXMAAAsSAAALEgHS3X78AAAJwElEQVR4nO1ce4hUVRj/NnYDdydokzBIM9sgCysjYZXKu4KGGjGOINvVXRQTIjbJlXA1GiFHcnf/8MEm+kcKPmKSJcchWgsFHQpU2EotEsPVorWSaPWPaQRXmviW31nPnjnnvmb2PT8YZu495557Ht/53mdKstksFQLpmDWViKJE9CIRPS41eYGI9oSiqSMFeVERw4q8CSYds9YRURMRPeJS9RYRzQxFU78Vl3z0ojRoz9Mxq5aI9hLRgx4f4XqXiKh8jM/pmMZ9QQaXjlmniegzA7Ewy+oiomYiSillE9Ix65PxPumjGb44DPSU8w6Esj8UTa1Rnrmp1H9yvE3yWIJnggGxsEiZoCl20k9CfufLjoS3E9EyIppERGVE1EtEN4ioLZ5Itkr17qDchMPxRLIedS1WvkGwcpvt8URyvR0J/05Ekz107wn0rYXbiCeS92v6f4iIFhNRJW7xpukQfVHq3sE6bJTHphljk6Gc31WHDVsVTySv+W0DdTZgTI5j98NhTMTSFYqmtFwD4kd9xx7TC+xIeBoRdRLRQ0pRGRazxY6EV8UTyWek+4TJKnFolyf0oFJHtNloR8J/mZ51aXsAsYIoOyQ9TVgUPJ46OxJeyoQUTyRTmjaa7Uj4nFKW8w4NanGL+7gbhOrYz3zgiWDSMetKAGJhjrRauX3Lxbz+CZPNE/0pEW3mHQNC2kJEK4joV81z2t0pYRcmtJuI5opdiF21Cs8OeN6OhLOmtu1I2PQeQSzMvT4Qz+E9W1HGdSo0z5Y4lGmBdgW35O/5Xp91QjyRNG4+V6UXXKJKU+RGLJeUnckL8LrpPWCtgljmMfsWC8vfYOfMcnU7yA1CNLTLLJsXVOJWeUHp/wKZyPB7AcrKUVcHLvvZRz+a8M2bMMNEA3E+aHAkmHTMelnDJRi3HYiFWaTKkXii7FA09a3D6wQh6NhyH3Ty2SNuoto7PKHgWIWGY/9x75wyVhnd+P20A0H1A+JPiO7NkkW6chDG1o9SLPBZg8L6hUZ+8+K/qlYEVzlARJZSdJvruxALSVzgjKkCdBGe/MNKEct/VWHrjieSU/D7XegwzLYbobdkMMkNeRCir/6jbLZUV0Ybi0cmGOg7X2vGKUPogt0Q2zz+RUxEPE8uzzpCEscy+hRm5jBx1gvSMSuTjlk/pGPWNl58iCKd+dwiLz5zIfhlrmmIJRWKpso9EIuXQTCxHMLHFzB5LFaPg3UTxAdPcJcgxOEGxGMPurHfxAlxfzou2+keBxPPvj9YQymFKfUeRMhMfDYa6jO3uAECYQtjqkFxZsfdKp+EchMsdiERrfc5DjelV4izPlGACV/LIgpch5XiwDsSEP2f41BnjlTXBLakTqFfnYY6W8D5s+BMAh0wsafzGINyTkelNxRNbQpFU9y5fSAIJzBR7QAnqVKI5S6ceq+wfhOAq3Tge/pg73go0UyUH+OWTkT4heh/NfSLAcC9atzrMLUNTiE2rOpeEJBN6assQiBGVkj3dxdgTDnoV3rZQ8vig4jewOI74S6cdcxJjvEzTHShaOqFoOIHVlAGgz3Iip9gyfheHnSQdiT8DzvmZEJEm8tw6bTjg/T/BExe8S7+fQJlGZ0DT2mrFeJTN5YNkl8lo3xuw8SmQpnYKnTi5LrmPvtPCrEL3TBDctzVQflTH+nRtKFTehlnQWiVaJOJUHXgZaEUFwKLJV8MOxmb0aZ4X8ZgIeWA3QcG77MwpWWlvh/YCF3CxAYndZuneqUNUwpDvc6sbtPc+9B1hAUARMVEiL1uabdkcN2EcgFRbpS5kONC4e2RuGcvfEXzDBZFr+aeYx0WJ/FEsgL6kEzYPQhTVGhMbuN7QBD97UCsVYLItWIb4xXmuzCxXefJK3LyYdhaUnwoQ8VdihgFGMBh4KhTQwCfFxeyCAFVJL2mXGfVdIUixjdUglF9CFfH+wQVMRBuwcdul/IixhncCOZYkSCKkBE4CVwFTg8sYSdYKJqK5NOWkrFWArP6IvtUTO5u+CweNWWd0b1MvpVSu72IrH8km9YGP4So+7YuGi35P67r/CMu7eqyCbmvjU5u+uGAymHUSOskL33ioKUUMliChCvf4Elnryxc3L8Q0U44qi7CrX5ZF5CDf2Kyk0scRNiIxRHtHsEYd2keOYs6TVJdjp2d0rn+8V5+/2RDualdEZ5oUdIaHg4yh4MNlcPsVQKPToG0PiCqPVO5PdFQ3Q3s5X0AzjR5F7diEY4S0WOIjMtoxk49ieClDn1pHPFEMmdMhqjwFU1As96OhP+FY07lIgvhHJyP/pjmTtcu5xR3wLO9uUDpFoOCARwGOTFyfutLTi9Nx6wEEb1ZiI5hd7H7frUpAYm9vGoZFrsaxMJu7xJD1lkZREoOfC7QUYg+uQ/bwV0a0I/qAElaDfhe6/O5IYVO6ZVjDaU68YIcmD+hs+hwOsAgFiM+4jfNQIT6G6SckLc09fh+bYEi4apewe/rAeE1oHyLnwZHMleRkUMwoWhqJ5Q3gap0zOrlHBh8mFC+cTkauy5AXyoDElqtyDrD9QHkxqqEMQtiiwOQdzh3Vo4o+0CNlIQlErvKxUZDP7qlFARPkLji9wH6NGTQmtXI15WJphQKreXhDHVXwPPTrtYAFnq7dC1C/f0BU0Rn2RrZJj+LwGYFFM3voMCyovmfF8JhHcqOhM9AuZaDsdtwPknWS9oQLfbS7jSI43UBOeyQwuiHAdHsM+TGZJEs1agpaw84gIyHU5FlivXQpFksQrRWa63gpMAcEE8N0jmaNXXrRGISzGHmfvzPFDuk4yPCOjupvgPcrIlyobZ7FZFn7vNcXzM2DHD0wyCOtAZByVm43SmSpDTnpDn2tCngMC4KZdGLPJez5h3yN5ysFZHdNgXPh5Wz4Gz+JqRr3WkAke+yyNAHTsi2lOfUdmuQW5wYDXqMJ8cdCESXSadyhBt59GU5xGCnHQnP8jB5e8DpTPnHa6WUyD4rzHBUVXAW9fSjzvxVUQ19RZdDRCAo7qd89klttxVOx612JNw+0okmX0/v88r15aAN4ajEPKQycib/OWknPitlqv0Ik5WPYxx3OCv8BxRc1g+YE67AUdWUpFzXwG/S44E41PYPQe+qM52jsiNh9njP9sA152LuvlSIa8Qh0N99SLigXAfy8Apg4p8ioq+I6Dns0BZYHMy9arCwu8FdGhzaOozdvxTtVkHsWWizBb9PKll8An+7dHcplFQtsQDL0U/Z+5zTLohpNQ6xbTDVGwnI6x+oED/aId1qhFlexBhFXhwGxCHL/hlFQhnbyFckEY5+nsfv4p8FjXEU8l802fSmQhyLLWKEgoj+B/KnMPnqbVqPAAAAAElFTkSuQmCC", Mi = L({
  name: "HeaderNavigation",
  props: {
    menuStructure: {
      type: Array,
      required: !0
    }
  },
  setup(e) {
    const t = Bi, s = q(!1), n = q(null);
    return {
      siteLogoImage: t,
      showSubMenu: (o, i) => {
        e.menuStructure[o].children.length > 0 && (n.value && n.value.id === e.menuStructure[o].id ? (n.value = null, s.value = !1) : (n.value = e.menuStructure[o], s.value = !0));
      },
      currentMenu: n,
      isVisibleSubMenu: s
    };
  }
}), Ni = { class: "header-navigation my-5 container mx-auto" }, Di = { class: "flex items-center justify-between mb-5" }, ji = ["src"], Ui = /* @__PURE__ */ bt('<div class="flex items-center"><div class="cursor-pointer"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"></path></svg></div><div class="ml-7 cursor-pointer"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"></path></svg></div><div class="cursor-pointer ml-7 flex items-center"><div class="h-12 w-12 rounded-full bg-gray flex items-center justify-center"><div class="font-regular text-xl">EP</div></div><div class="ml-1"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-3 h-3"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"></path></svg></div></div></div>', 1), Ii = { class: "text-secondary text-sm font-medium relative" }, Hi = { class: "flex" }, xi = ["onClick"], zi = {
  key: 0,
  class: "ml-1 text-secondary"
}, qi = {
  key: 0,
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  "stroke-width": "1.5",
  stroke: "currentColor",
  class: "w-3 h-3"
}, Gi = /* @__PURE__ */ h("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M4.5 15.75l7.5-7.5 7.5 7.5"
}, null, -1), Ji = [
  Gi
], Ki = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  "stroke-width": "1.5",
  stroke: "currentColor",
  class: "w-3 h-3"
}, Wi = /* @__PURE__ */ h("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M19.5 8.25l-7.5 7.5-7.5-7.5"
}, null, -1), Qi = [
  Wi
], Yi = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  "stroke-width": "1.5",
  stroke: "currentColor",
  class: "w-3 h-3"
}, Xi = /* @__PURE__ */ h("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M19.5 8.25l-7.5 7.5-7.5-7.5"
}, null, -1), Zi = [
  Xi
], er = {
  key: 0,
  class: "text-black absolute w-full rounded-lg shadow-md p-6 bg-white top-7 left-0 z-50"
}, tr = { class: "font-bold mb-4" }, sr = { class: "flex flex-wrap" };
function nr(e, t, s, n, r, o) {
  const i = J("router-link");
  return d(), m("header", Ni, [
    h("div", Di, [
      h("div", null, [
        h("img", {
          src: e.siteLogoImage,
          alt: "gaspari-logo"
        }, null, 8, ji)
      ]),
      Ui
    ]),
    h("nav", Ii, [
      h("ul", Hi, [
        (d(!0), m(M, null, x(e.menuStructure, (l, c) => (d(), m("li", {
          key: c,
          class: "mr-6 flex items-center cursor-pointer hover:text-secondaryHover transition select-none",
          onClick: (a) => e.showSubMenu(c, a)
        }, [
          h("span", {
            class: se({ "text-secondaryHover": e.currentMenu && e.currentMenu.id === l.id })
          }, w(l.label), 3),
          l.children.length > 0 ? (d(), m("div", zi, [
            e.currentMenu ? (d(), m(M, { key: 0 }, [
              e.currentMenu.id === l.id ? (d(), m("svg", qi, Ji)) : (d(), m("svg", Ki, Qi))
            ], 64)) : (d(), m("svg", Yi, Zi))
          ])) : E("", !0)
        ], 8, xi))), 128))
      ]),
      e.isVisibleSubMenu && e.currentMenu ? (d(), m("div", er, [
        h("div", tr, w(e.currentMenu.label), 1),
        h("ul", sr, [
          (d(!0), m(M, null, x(e.currentMenu.children, (l, c) => (d(), m("li", {
            key: c,
            class: "w-1/4 mb-3 cursor-pointer transition hover:underline"
          }, [
            S(i, { to: "/about" }, {
              default: N(() => [
                T(w(l.label), 1)
              ]),
              _: 2
            }, 1024)
          ]))), 128))
        ])
      ])) : E("", !0)
    ])
  ]);
}
const ir = /* @__PURE__ */ R(Mi, [["render", nr]]), rr = L({
  name: "LayoutBase",
  components: {
    HeaderNavigation: ir
  },
  props: {
    menuStructure: {
      type: Array,
      required: !0
    }
  }
}), or = { class: "main-content" }, lr = { class: "container mx-auto py-7" };
function ar(e, t, s, n, r, o) {
  const i = J("header-navigation");
  return d(), m("div", null, [
    S(i, { menuStructure: e.menuStructure }, null, 8, ["menuStructure"]),
    h("main", or, [
      h("div", lr, [
        O(e.$slots, "content")
      ])
    ])
  ]);
}
const vr = /* @__PURE__ */ R(rr, [["render", ar]]);
export {
  vt as CustomButton,
  _t as CustomCheckbox,
  cr as CustomFileUpload,
  It as CustomLoader,
  dr as CustomModal,
  hr as CustomMultiCheckbox,
  fr as CustomMultiSelect,
  mr as CustomMultiSelectAsync,
  pr as CustomMultipleFileUpload,
  gr as CustomRadioGroup,
  br as CustomSelect,
  yr as CustomTextArea,
  wr as GenericInput,
  ir as HeaderNavigation,
  vr as LayoutBase
};
