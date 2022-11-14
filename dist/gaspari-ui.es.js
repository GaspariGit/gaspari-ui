import { defineComponent as T, openBlock as p, createElementBlock as b, normalizeClass as le, renderSlot as $, createElementVNode as f, toDisplayString as S, createTextVNode as R, ref as Z, createCommentVNode as _, Fragment as H, resolveComponent as ee, renderList as K, createBlock as A, onMounted as pt, createVNode as v, withCtx as D, withKeys as P, withModifiers as C, withDirectives as q, vShow as X, Transition as Te, computed as Ke, mergeProps as Ge, vModelText as ft, vModelDynamic as mt } from "vue";
const bt = T({
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
}), F = (e, t) => {
  const s = e.__vccOpts || e;
  for (const [n, r] of t)
    s[n] = r;
  return s;
}, gt = ["disabled"];
function yt(e, t, s, n, r, o) {
  return p(), b("button", {
    class: le(["custom-button", e.assignStyle()]),
    disabled: e.disabled,
    onClick: t[0] || (t[0] = (...i) => e.handleClick && e.handleClick(...i))
  }, [
    $(e.$slots, "slot-left"),
    f("span", null, S(e.label), 1),
    $(e.$slots, "slot-right")
  ], 10, gt);
}
const wt = /* @__PURE__ */ F(bt, [["render", yt]]), St = T({
  name: "CustomSingleCheckbox",
  props: {
    value: {
      type: String
    },
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
}), vt = ["checked", "value", "disabled", "name"], Ot = /* @__PURE__ */ f("span", { class: "checkmark" }, null, -1);
function $t(e, t, s, n, r, o) {
  return p(), b("label", {
    class: le(["wrapper flex items-center", { disabled: e.disabled }])
  }, [
    R(S(e.label) + " ", 1),
    f("input", {
      class: "checkbox",
      type: "checkbox",
      checked: e.checked,
      value: e.value,
      onChange: t[0] || (t[0] = (...i) => e.updateInput && e.updateInput(...i)),
      disabled: e.disabled,
      name: e.name
    }, null, 40, vt),
    Ot
  ], 2);
}
const _t = /* @__PURE__ */ F(St, [["render", $t]]), Et = T({
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
    const s = Z(null), n = () => {
      s.value.click();
    }, r = Z(null);
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
}), Ct = { class: "generic-input" }, kt = {
  key: 0,
  class: "generic-input__label text-sm secondary-color"
}, Lt = { class: "input-container" }, Rt = { class: "generic-input__input-file" }, Tt = { class: "generic-input__input-file__file" }, Ft = {
  key: 0,
  class: "generic-input__input-file__file__placeholder"
}, At = {
  key: 1,
  class: "generic-input__input-file__file__file-name"
}, Vt = /* @__PURE__ */ f("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  "stroke-width": "2.5",
  stroke: "#FFFFFF",
  class: "cancel"
}, [
  /* @__PURE__ */ f("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    d: "M6 18L18 6M6 6l12 12"
  })
], -1), Bt = [
  Vt
];
function Pt(e, t, s, n, r, o) {
  return p(), b("div", Ct, [
    e.label ? (p(), b("label", kt, S(e.label), 1)) : _("", !0),
    f("div", Lt, [
      $(e.$slots, "prepend"),
      f("input", {
        type: "file",
        class: "generic-input__input-file--hidden",
        ref: "inputFileRef",
        onChange: t[0] || (t[0] = (...i) => e.handleInputChange && e.handleInputChange(...i))
      }, null, 544),
      f("div", Rt, [
        f("div", {
          class: "generic-input__input-file__button",
          onClick: t[1] || (t[1] = (...i) => e.handleButtonClick && e.handleButtonClick(...i))
        }, " Sfoglia... "),
        f("div", Tt, [
          e.currentFile ? (p(), b("div", At, [
            R(S(e.currentFile.name) + " ", 1),
            f("div", {
              onClick: t[2] || (t[2] = (...i) => e.deleteFile && e.deleteFile(...i)),
              class: "generic-input__input-file__file__file-name__cancel"
            }, Bt)
          ])) : (p(), b("div", Ft, S(e.placeholder), 1))
        ])
      ])
    ])
  ]);
}
const Pi = /* @__PURE__ */ F(Et, [["render", Pt]]), Nt = T({
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
}), Dt = /* @__PURE__ */ f("span", { class: "sr-only" }, "Loading...", -1), Mt = [
  Dt
];
function jt(e, t, s, n, r, o) {
  return e.loading ? (p(), b("div", {
    key: 0,
    class: le(["spinner-border", e.size]),
    role: "status"
  }, Mt, 2)) : _("", !0);
}
const Ut = /* @__PURE__ */ F(Nt, [["render", jt]]), It = T({
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
}), qt = {
  key: 0,
  class: "custom-modal"
}, zt = { class: "modal-background" }, Ht = { class: "modal-container" }, xt = { class: "modal-header" }, Kt = { class: "modal-title" }, Gt = /* @__PURE__ */ f("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  "stroke-width": "1.5",
  width: "24px",
  height: "24px"
}, [
  /* @__PURE__ */ f("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    d: "M6 18L18 6M6 6l12 12"
  })
], -1), Jt = [
  Gt
], Wt = { class: "modal-body" }, Xt = { class: "modal-footer" };
function Qt(e, t, s, n, r, o) {
  return e.isOpen ? (p(), b("div", qt, [
    f("div", zt, [
      f("div", Ht, [
        f("div", xt, [
          f("div", Kt, [
            e.withoutTitle ? _("", !0) : (p(), b(H, { key: 0 }, [
              R(S(e.modalTitle), 1)
            ], 64))
          ]),
          f("div", {
            class: "modal-close",
            onClick: t[0] || (t[0] = (...i) => e.emitCloseModal && e.emitCloseModal(...i))
          }, Jt)
        ]),
        f("div", Wt, [
          $(e.$slots, "modal-body")
        ]),
        f("div", Xt, [
          $(e.$slots, "modal-footer")
        ])
      ])
    ])
  ])) : _("", !0);
}
const Ni = /* @__PURE__ */ F(It, [["render", Qt]]), Yt = T({
  name: "CustomMultiCheckbox",
  components: {
    CustomCheckbox: _t
  },
  props: {
    value: {
      type: Array
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
function Zt(e, t, s, n, r, o) {
  const i = ee("custom-checkbox");
  return p(), b("div", null, [
    (p(!0), b(H, null, K(e.options, (l, c) => (p(), A(i, {
      key: c,
      label: l.label,
      checked: e.value.includes(l.id),
      "onUpdate:checked": (a) => e.check(l.id, a)
    }, null, 8, ["label", "checked", "onUpdate:checked"]))), 128))
  ]);
}
const Di = /* @__PURE__ */ F(Yt, [["render", Zt]]);
function Je(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: We } = Object.prototype, { getPrototypeOf: $e } = Object, _e = ((e) => (t) => {
  const s = We.call(t);
  return e[s] || (e[s] = s.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), j = (e) => (e = e.toLowerCase(), (t) => _e(t) === e), ae = (e) => (t) => typeof t === e, { isArray: se } = Array, ye = ae("undefined");
function es(e) {
  return e !== null && !ye(e) && e.constructor !== null && !ye(e.constructor) && G(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const Xe = j("ArrayBuffer");
function ts(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && Xe(e.buffer), t;
}
const ss = ae("string"), G = ae("function"), Qe = ae("number"), Ye = (e) => e !== null && typeof e == "object", ns = (e) => e === !0 || e === !1, re = (e) => {
  if (_e(e) !== "object")
    return !1;
  const t = $e(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}, is = j("Date"), rs = j("File"), os = j("Blob"), ls = j("FileList"), as = (e) => Ye(e) && G(e.pipe), us = (e) => {
  const t = "[object FormData]";
  return e && (typeof FormData == "function" && e instanceof FormData || We.call(e) === t || G(e.toString) && e.toString() === t);
}, cs = j("URLSearchParams"), ds = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function ue(e, t, { allOwnKeys: s = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let n, r;
  if (typeof e != "object" && (e = [e]), se(e))
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
    re(e[n]) && re(s) ? e[n] = we(e[n], s) : re(s) ? e[n] = we({}, s) : se(s) ? e[n] = s.slice() : e[n] = s;
  };
  for (let s = 0, n = arguments.length; s < n; s++)
    arguments[s] && ue(arguments[s], t);
  return e;
}
const hs = (e, t, s, { allOwnKeys: n } = {}) => (ue(t, (r, o) => {
  s && G(r) ? e[o] = Je(r, s) : e[o] = r;
}, { allOwnKeys: n }), e), ps = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), fs = (e, t, s, n) => {
  e.prototype = Object.create(t.prototype, n), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), s && Object.assign(e.prototype, s);
}, ms = (e, t, s, n) => {
  let r, o, i;
  const l = {};
  if (t = t || {}, e == null)
    return t;
  do {
    for (r = Object.getOwnPropertyNames(e), o = r.length; o-- > 0; )
      i = r[o], (!n || n(i, e, t)) && !l[i] && (t[i] = e[i], l[i] = !0);
    e = s !== !1 && $e(e);
  } while (e && (!s || s(e, t)) && e !== Object.prototype);
  return t;
}, bs = (e, t, s) => {
  e = String(e), (s === void 0 || s > e.length) && (s = e.length), s -= t.length;
  const n = e.indexOf(t, s);
  return n !== -1 && n === s;
}, gs = (e) => {
  if (!e)
    return null;
  if (se(e))
    return e;
  let t = e.length;
  if (!Qe(t))
    return null;
  const s = new Array(t);
  for (; t-- > 0; )
    s[t] = e[t];
  return s;
}, ys = ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && $e(Uint8Array)), ws = (e, t) => {
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
}, vs = j("HTMLFormElement"), Os = (e) => e.toLowerCase().replace(
  /[_-\s]([a-z\d])(\w*)/g,
  function(s, n, r) {
    return n.toUpperCase() + r;
  }
), Fe = (({ hasOwnProperty: e }) => (t, s) => e.call(t, s))(Object.prototype), $s = j("RegExp"), Ze = (e, t) => {
  const s = Object.getOwnPropertyDescriptors(e), n = {};
  ue(s, (r, o) => {
    t(r, o, e) !== !1 && (n[o] = r);
  }), Object.defineProperties(e, n);
}, _s = (e) => {
  Ze(e, (t, s) => {
    const n = e[s];
    if (!!G(n)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not read-only method '" + s + "'");
      });
    }
  });
}, Es = (e, t) => {
  const s = {}, n = (r) => {
    r.forEach((o) => {
      s[o] = !0;
    });
  };
  return se(e) ? n(e) : n(String(e).split(t)), s;
}, Cs = () => {
}, ks = (e, t) => (e = +e, Number.isFinite(e) ? e : t), u = {
  isArray: se,
  isArrayBuffer: Xe,
  isBuffer: es,
  isFormData: us,
  isArrayBufferView: ts,
  isString: ss,
  isNumber: Qe,
  isBoolean: ns,
  isObject: Ye,
  isPlainObject: re,
  isUndefined: ye,
  isDate: is,
  isFile: rs,
  isBlob: os,
  isRegExp: $s,
  isFunction: G,
  isStream: as,
  isURLSearchParams: cs,
  isTypedArray: ys,
  isFileList: ls,
  forEach: ue,
  merge: we,
  extend: hs,
  trim: ds,
  stripBOM: ps,
  inherits: fs,
  toFlatObject: ms,
  kindOf: _e,
  kindOfTest: j,
  endsWith: bs,
  toArray: gs,
  forEachEntry: ws,
  matchAll: Ss,
  isHTMLForm: vs,
  hasOwnProperty: Fe,
  hasOwnProp: Fe,
  reduceDescriptors: Ze,
  freezeMethods: _s,
  toObjectSet: Es,
  toCamelCase: Os,
  noop: Cs,
  toFiniteNumber: ks
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
var ie = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Ls = typeof self == "object" ? self.FormData : window.FormData;
function Se(e) {
  return u.isPlainObject(e) || u.isArray(e);
}
function st(e) {
  return u.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function Ae(e, t, s) {
  return e ? e.concat(t).map(function(r, o) {
    return r = st(r), !s && o ? "[" + r + "]" : r;
  }).join(s ? "." : "") : t;
}
function Rs(e) {
  return u.isArray(e) && !e.some(Se);
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
  }, !1, function(w, B) {
    return !u.isUndefined(B[w]);
  });
  const n = s.metaTokens, r = s.visitor || h, o = s.dots, i = s.indexes, c = (s.Blob || typeof Blob < "u" && Blob) && Fs(t);
  if (!u.isFunction(r))
    throw new TypeError("visitor must be a function");
  function a(d) {
    if (d === null)
      return "";
    if (u.isDate(d))
      return d.toISOString();
    if (!c && u.isBlob(d))
      throw new g("Blob is not supported. Use a Buffer instead.");
    return u.isArrayBuffer(d) || u.isTypedArray(d) ? c && typeof Blob == "function" ? new Blob([d]) : Buffer.from(d) : d;
  }
  function h(d, w, B) {
    let k = d;
    if (d && !B && typeof d == "object") {
      if (u.endsWith(w, "{}"))
        w = n ? w : w.slice(0, -2), d = JSON.stringify(d);
      else if (u.isArray(d) && Rs(d) || u.isFileList(d) || u.endsWith(w, "[]") && (k = u.toArray(d)))
        return w = st(w), k.forEach(function(x, de) {
          !(u.isUndefined(x) || x === null) && t.append(
            i === !0 ? Ae([w], de, o) : i === null ? w : w + "[]",
            a(x)
          );
        }), !1;
    }
    return Se(d) ? !0 : (t.append(Ae(B, w, o), a(d)), !1);
  }
  const y = [], O = Object.assign(Ts, {
    defaultVisitor: h,
    convertValue: a,
    isVisitable: Se
  });
  function m(d, w) {
    if (!u.isUndefined(d)) {
      if (y.indexOf(d) !== -1)
        throw Error("Circular reference detected in " + w.join("."));
      y.push(d), u.forEach(d, function(k, N) {
        (!(u.isUndefined(k) || k === null) && r.call(
          t,
          k,
          u.isString(N) ? N.trim() : N,
          w,
          O
        )) === !0 && m(k, w ? w.concat(N) : [N]);
      }), y.pop();
    }
  }
  if (!u.isObject(e))
    throw new TypeError("data must be an object");
  return m(e), t;
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
function Ee(e, t) {
  this._pairs = [], e && ce(e, this, t);
}
const nt = Ee.prototype;
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
function As(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function it(e, t, s) {
  if (!t)
    return e;
  const n = s && s.encode || As, r = s && s.serialize;
  let o;
  if (r ? o = r(t, s) : o = u.isURLSearchParams(t) ? t.toString() : new Ee(t, s).toString(n), o) {
    const i = e.indexOf("#");
    i !== -1 && (e = e.slice(0, i)), e += (e.indexOf("?") === -1 ? "?" : "&") + o;
  }
  return e;
}
class Be {
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
}, Vs = typeof URLSearchParams < "u" ? URLSearchParams : Ee, Bs = FormData, Ps = (() => {
  let e;
  return typeof navigator < "u" && ((e = navigator.product) === "ReactNative" || e === "NativeScript" || e === "NS") ? !1 : typeof window < "u" && typeof document < "u";
})(), M = {
  isBrowser: !0,
  classes: {
    URLSearchParams: Vs,
    FormData: Bs,
    Blob
  },
  isStandardBrowserEnv: Ps,
  protocols: ["http", "https", "file", "blob", "url", "data"]
};
function Ns(e, t) {
  return ce(e, new M.classes.URLSearchParams(), Object.assign({
    visitor: function(s, n, r, o) {
      return M.isNode && u.isBuffer(s) ? (this.append(n, s.toString("base64")), !1) : o.defaultVisitor.apply(this, arguments);
    }
  }, t));
}
function Ds(e) {
  return u.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function Ms(e) {
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
    return i = !i && u.isArray(r) ? r.length : i, c ? (u.hasOwnProp(r, i) ? r[i] = [r[i], n] : r[i] = n, !l) : ((!r[i] || !u.isObject(r[i])) && (r[i] = []), t(s, n, r[i], o) && u.isArray(r[i]) && (r[i] = Ms(r[i])), !l);
  }
  if (u.isFormData(e) && u.isFunction(e.entries)) {
    const s = {};
    return u.forEachEntry(e, (n, r) => {
      t(Ds(n), r, s, 0);
    }), s;
  }
  return null;
}
function js(e, t, s) {
  const n = s.config.validateStatus;
  !s.status || !n || n(s.status) ? e(s) : t(new g(
    "Request failed with status code " + s.status,
    [g.ERR_BAD_REQUEST, g.ERR_BAD_RESPONSE][Math.floor(s.status / 100) - 4],
    s.config,
    s.request,
    s
  ));
}
const Us = M.isStandardBrowserEnv ? function() {
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
function Is(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function qs(e, t) {
  return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function lt(e, t) {
  return e && !Is(t) ? qs(e, t) : t;
}
const zs = M.isStandardBrowserEnv ? function() {
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
function ne(e, t, s) {
  g.call(this, e == null ? "canceled" : e, g.ERR_CANCELED, t, s), this.name = "CanceledError";
}
u.inherits(ne, g, {
  __CANCEL__: !0
});
function Hs(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
const xs = u.toObjectSet([
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
]), Ks = (e) => {
  const t = {};
  let s, n, r;
  return e && e.split(`
`).forEach(function(i) {
    r = i.indexOf(":"), s = i.substring(0, r).trim().toLowerCase(), n = i.substring(r + 1).trim(), !(!s || t[s] && xs[s]) && (s === "set-cookie" ? t[s] ? t[s].push(n) : t[s] = [n] : t[s] = t[s] ? t[s] + ", " + n : n);
  }), t;
}, Pe = Symbol("internals"), at = Symbol("defaults");
function Y(e) {
  return e && String(e).trim().toLowerCase();
}
function oe(e) {
  return e === !1 || e == null ? e : u.isArray(e) ? e.map(oe) : String(e);
}
function Gs(e) {
  const t = /* @__PURE__ */ Object.create(null), s = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let n;
  for (; n = s.exec(e); )
    t[n[1]] = n[2];
  return t;
}
function Ne(e, t, s, n) {
  if (u.isFunction(n))
    return n.call(this, t, s);
  if (!!u.isString(t)) {
    if (u.isString(n))
      return t.indexOf(n) !== -1;
    if (u.isRegExp(n))
      return n.test(t);
  }
}
function Js(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, s, n) => s.toUpperCase() + n);
}
function Ws(e, t) {
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
function Q(e, t) {
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
      const c = Y(i);
      if (!c)
        throw new Error("header name must be a non-empty string");
      const a = Q(n, c);
      a && l !== !0 && (n[a] === !1 || l === !1) || (n[a || i] = oe(o));
    }
    return u.isPlainObject(e) ? u.forEach(e, (o, i) => {
      r(o, i, t);
    }) : r(t, e, s), this;
  },
  get: function(e, t) {
    if (e = Y(e), !e)
      return;
    const s = Q(this, e);
    if (s) {
      const n = this[s];
      if (!t)
        return n;
      if (t === !0)
        return Gs(n);
      if (u.isFunction(t))
        return t.call(this, n, s);
      if (u.isRegExp(t))
        return t.exec(n);
      throw new TypeError("parser must be boolean|regexp|function");
    }
  },
  has: function(e, t) {
    if (e = Y(e), e) {
      const s = Q(this, e);
      return !!(s && (!t || Ne(this, this[s], s, t)));
    }
    return !1;
  },
  delete: function(e, t) {
    const s = this;
    let n = !1;
    function r(o) {
      if (o = Y(o), o) {
        const i = Q(s, o);
        i && (!t || Ne(s, s[i], i, t)) && (delete s[i], n = !0);
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
      const o = Q(s, r);
      if (o) {
        t[o] = oe(n), delete t[r];
        return;
      }
      const i = e ? Js(r) : String(r).trim();
      i !== r && delete t[r], t[i] = oe(n), s[i] = !0;
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
    return u.isString(e) ? new this(Ks(e)) : e instanceof this ? e : new this(e);
  },
  accessor: function(e) {
    const s = (this[Pe] = this[Pe] = {
      accessors: {}
    }).accessors, n = this.prototype;
    function r(o) {
      const i = Y(o);
      s[i] || (Ws(n, o), s[i] = !0);
    }
    return u.isArray(e) ? e.forEach(r) : r(e), this;
  }
});
V.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent"]);
u.freezeMethods(V.prototype);
u.freezeMethods(V);
function Xs(e, t) {
  e = e || 10;
  const s = new Array(e), n = new Array(e);
  let r = 0, o = 0, i;
  return t = t !== void 0 ? t : 1e3, function(c) {
    const a = Date.now(), h = n[o];
    i || (i = a), s[r] = c, n[r] = a;
    let y = o, O = 0;
    for (; y !== r; )
      O += s[y++], y = y % e;
    if (r = (r + 1) % e, r === o && (o = (o + 1) % e), a - i < t)
      return;
    const m = h && a - h;
    return m ? Math.round(O * 1e3 / m) : void 0;
  };
}
function De(e, t) {
  let s = 0;
  const n = Xs(50, 250);
  return (r) => {
    const o = r.loaded, i = r.lengthComputable ? r.total : void 0, l = o - s, c = n(l), a = o <= i;
    s = o;
    const h = {
      loaded: o,
      total: i,
      progress: i ? o / i : void 0,
      bytes: l,
      rate: c || void 0,
      estimated: c && i && a ? (i - o) / c : void 0
    };
    h[t ? "download" : "upload"] = !0, e(h);
  };
}
function Me(e) {
  return new Promise(function(s, n) {
    let r = e.data;
    const o = V.from(e.headers).normalize(), i = e.responseType;
    let l;
    function c() {
      e.cancelToken && e.cancelToken.unsubscribe(l), e.signal && e.signal.removeEventListener("abort", l);
    }
    u.isFormData(r) && M.isStandardBrowserEnv && o.setContentType(!1);
    let a = new XMLHttpRequest();
    if (e.auth) {
      const m = e.auth.username || "", d = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : "";
      o.set("Authorization", "Basic " + btoa(m + ":" + d));
    }
    const h = lt(e.baseURL, e.url);
    a.open(e.method.toUpperCase(), it(h, e.params, e.paramsSerializer), !0), a.timeout = e.timeout;
    function y() {
      if (!a)
        return;
      const m = V.from(
        "getAllResponseHeaders" in a && a.getAllResponseHeaders()
      ), w = {
        data: !i || i === "text" || i === "json" ? a.responseText : a.response,
        status: a.status,
        statusText: a.statusText,
        headers: m,
        config: e,
        request: a
      };
      js(function(k) {
        s(k), c();
      }, function(k) {
        n(k), c();
      }, w), a = null;
    }
    if ("onloadend" in a ? a.onloadend = y : a.onreadystatechange = function() {
      !a || a.readyState !== 4 || a.status === 0 && !(a.responseURL && a.responseURL.indexOf("file:") === 0) || setTimeout(y);
    }, a.onabort = function() {
      !a || (n(new g("Request aborted", g.ECONNABORTED, e, a)), a = null);
    }, a.onerror = function() {
      n(new g("Network Error", g.ERR_NETWORK, e, a)), a = null;
    }, a.ontimeout = function() {
      let d = e.timeout ? "timeout of " + e.timeout + "ms exceeded" : "timeout exceeded";
      const w = e.transitional || rt;
      e.timeoutErrorMessage && (d = e.timeoutErrorMessage), n(new g(
        d,
        w.clarifyTimeoutError ? g.ETIMEDOUT : g.ECONNABORTED,
        e,
        a
      )), a = null;
    }, M.isStandardBrowserEnv) {
      const m = (e.withCredentials || zs(h)) && e.xsrfCookieName && Us.read(e.xsrfCookieName);
      m && o.set(e.xsrfHeaderName, m);
    }
    r === void 0 && o.setContentType(null), "setRequestHeader" in a && u.forEach(o.toJSON(), function(d, w) {
      a.setRequestHeader(w, d);
    }), u.isUndefined(e.withCredentials) || (a.withCredentials = !!e.withCredentials), i && i !== "json" && (a.responseType = e.responseType), typeof e.onDownloadProgress == "function" && a.addEventListener("progress", De(e.onDownloadProgress, !0)), typeof e.onUploadProgress == "function" && a.upload && a.upload.addEventListener("progress", De(e.onUploadProgress)), (e.cancelToken || e.signal) && (l = (m) => {
      !a || (n(!m || m.type ? new ne(null, e, a) : m), a.abort(), a = null);
    }, e.cancelToken && e.cancelToken.subscribe(l), e.signal && (e.signal.aborted ? l() : e.signal.addEventListener("abort", l)));
    const O = Hs(h);
    if (O && M.protocols.indexOf(O) === -1) {
      n(new g("Unsupported protocol " + O + ":", g.ERR_BAD_REQUEST, e));
      return;
    }
    a.send(r || null);
  });
}
const je = {
  http: Me,
  xhr: Me
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
}, Qs = {
  "Content-Type": "application/x-www-form-urlencoded"
};
function Ys() {
  let e;
  return typeof XMLHttpRequest < "u" ? e = Ue.getAdapter("xhr") : typeof process < "u" && u.kindOf(process) === "process" && (e = Ue.getAdapter("http")), e;
}
function Zs(e, t, s) {
  if (u.isString(e))
    try {
      return (t || JSON.parse)(e), u.trim(e);
    } catch (n) {
      if (n.name !== "SyntaxError")
        throw n;
    }
  return (s || JSON.stringify)(e);
}
const J = {
  transitional: rt,
  adapter: Ys(),
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
    return o || r ? (s.setContentType("application/json", !1), Zs(t)) : t;
  }],
  transformResponse: [function(t) {
    const s = this.transitional || J.transitional, n = s && s.forcedJSONParsing, r = this.responseType === "json";
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
    FormData: M.classes.FormData,
    Blob: M.classes.Blob
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
  J.headers[t] = {};
});
u.forEach(["post", "put", "patch"], function(t) {
  J.headers[t] = u.merge(Qs);
});
function pe(e, t) {
  const s = this || J, n = t || s, r = V.from(n.headers);
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
    throw new ne();
}
function Ie(e) {
  return fe(e), e.headers = V.from(e.headers), e.data = pe.call(
    e,
    e.transformRequest
  ), (e.adapter || J.adapter)(e).then(function(n) {
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
  function n(a, h) {
    return u.isPlainObject(a) && u.isPlainObject(h) ? u.merge(a, h) : u.isPlainObject(h) ? u.merge({}, h) : u.isArray(h) ? h.slice() : h;
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
  return u.forEach(Object.keys(e).concat(Object.keys(t)), function(h) {
    const y = c[h] || r, O = y(h);
    u.isUndefined(O) && y !== l || (s[h] = O);
  }), s;
}
const ct = "1.1.3", Ce = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  Ce[e] = function(n) {
    return typeof n === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const qe = {};
Ce.transitional = function(t, s, n) {
  function r(o, i) {
    return "[Axios v" + ct + "] Transitional option '" + o + "'" + i + (n ? ". " + n : "");
  }
  return (o, i, l) => {
    if (t === !1)
      throw new g(
        r(i, " has been removed" + (s ? " in " + s : "")),
        g.ERR_DEPRECATED
      );
    return s && !qe[i] && (qe[i] = !0, console.warn(
      r(
        i,
        " has been deprecated since v" + s + " and will be removed in the near future"
      )
    )), t ? t(o, i, l) : !0;
  };
};
function en(e, t, s) {
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
const ve = {
  assertOptions: en,
  validators: Ce
}, I = ve.validators;
class z {
  constructor(t) {
    this.defaults = t, this.interceptors = {
      request: new Be(),
      response: new Be()
    };
  }
  request(t, s) {
    typeof t == "string" ? (s = s || {}, s.url = t) : s = t || {}, s = te(this.defaults, s);
    const { transitional: n, paramsSerializer: r } = s;
    n !== void 0 && ve.assertOptions(n, {
      silentJSONParsing: I.transitional(I.boolean),
      forcedJSONParsing: I.transitional(I.boolean),
      clarifyTimeoutError: I.transitional(I.boolean)
    }, !1), r !== void 0 && ve.assertOptions(r, {
      encode: I.function,
      serialize: I.function
    }, !0), s.method = (s.method || this.defaults.method || "get").toLowerCase();
    const o = s.headers && u.merge(
      s.headers.common,
      s.headers[s.method]
    );
    o && u.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      function(d) {
        delete s.headers[d];
      }
    ), s.headers = new V(s.headers, o);
    const i = [];
    let l = !0;
    this.interceptors.request.forEach(function(d) {
      typeof d.runWhen == "function" && d.runWhen(s) === !1 || (l = l && d.synchronous, i.unshift(d.fulfilled, d.rejected));
    });
    const c = [];
    this.interceptors.response.forEach(function(d) {
      c.push(d.fulfilled, d.rejected);
    });
    let a, h = 0, y;
    if (!l) {
      const m = [Ie.bind(this), void 0];
      for (m.unshift.apply(m, i), m.push.apply(m, c), y = m.length, a = Promise.resolve(s); h < y; )
        a = a.then(m[h++], m[h++]);
      return a;
    }
    y = i.length;
    let O = s;
    for (h = 0; h < y; ) {
      const m = i[h++], d = i[h++];
      try {
        O = m(O);
      } catch (w) {
        d.call(this, w);
        break;
      }
    }
    try {
      a = Ie.call(this, O);
    } catch (m) {
      return Promise.reject(m);
    }
    for (h = 0, y = c.length; h < y; )
      a = a.then(c[h++], c[h++]);
    return a;
  }
  getUri(t) {
    t = te(this.defaults, t);
    const s = lt(t.baseURL, t.url);
    return it(s, t.params, t.paramsSerializer);
  }
}
u.forEach(["delete", "get", "head", "options"], function(t) {
  z.prototype[t] = function(s, n) {
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
  z.prototype[t] = s(), z.prototype[t + "Form"] = s(!0);
});
class ke {
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
      n.reason || (n.reason = new ne(o, i, l), s(n.reason));
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
      token: new ke(function(r) {
        t = r;
      }),
      cancel: t
    };
  }
}
function tn(e) {
  return function(s) {
    return e.apply(null, s);
  };
}
function sn(e) {
  return u.isObject(e) && e.isAxiosError === !0;
}
function dt(e) {
  const t = new z(e), s = Je(z.prototype.request, t);
  return u.extend(s, z.prototype, t, { allOwnKeys: !0 }), u.extend(s, t, null, { allOwnKeys: !0 }), s.create = function(r) {
    return dt(te(e, r));
  }, s;
}
const L = dt(J);
L.Axios = z;
L.CanceledError = ne;
L.CancelToken = ke;
L.isCancel = ut;
L.VERSION = ct;
L.toFormData = ce;
L.AxiosError = g;
L.Cancel = L.CanceledError;
L.all = function(t) {
  return Promise.all(t);
};
L.spread = tn;
L.isAxiosError = sn;
L.formToJSON = (e) => ot(u.isHTMLForm(e) ? new FormData(e) : e);
const nn = T({
  name: "CustomMultipleFileUpload",
  components: {
    CustomButton: wt,
    CustomLoader: Ut
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
    const t = Z(null), s = () => {
      t.value.click();
    }, n = ({ target: a }) => {
      if (a && a.files.length > 0) {
        let h = new FormData();
        for (let y = 0; y < a.files.length; y++) {
          const O = a.files[y];
          h.append("files", O);
        }
        i(h), t.value.value = "";
      }
    }, r = Z([]), o = Z(!1), i = (a) => {
      console.log(a), o.value = !0, L.post(e.routePostFiles, a).then((h) => {
        h.data.success ? alert("success") : alert("error"), o.value = !1;
      }).catch((h) => {
        console.log(h), o.value = !1;
      });
    }, l = (a) => {
      r.value.length > 0 && r.value.splice(a, 1);
    }, c = () => {
      L.get(e.routeGetFiles).then((a) => {
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
}), rn = { class: "generic-input" }, on = {
  key: 0,
  class: "generic-input__label text-sm secondary-color"
}, ln = { class: "file-list" }, an = ["onClick"], un = /* @__PURE__ */ f("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  "stroke-width": "2.5",
  stroke: "#FFFFFF",
  class: "cancel"
}, [
  /* @__PURE__ */ f("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    d: "M6 18L18 6M6 6l12 12"
  })
], -1), cn = [
  un
], dn = { class: "flexAligned" }, hn = { style: { "margin-right": "10px" } }, pn = {
  style: { "margin-right": "8px" },
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  "stroke-width": "1.5",
  stroke: "#FFFFFF",
  width: "16px",
  height: "16px"
}, fn = /* @__PURE__ */ f("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
}, null, -1), mn = [
  fn
];
function bn(e, t, s, n, r, o) {
  const i = ee("custom-button"), l = ee("custom-loader");
  return p(), b("div", rn, [
    e.label ? (p(), b("label", on, S(e.label), 1)) : _("", !0),
    f("ul", ln, [
      (p(!0), b(H, null, K(e.fileList, (c, a) => (p(), b("li", {
        class: "file-list-item",
        key: a
      }, [
        R(S(c.original_name + "." + c.extension) + " ", 1),
        f("div", {
          onClick: (h) => e.deleteFile(a),
          class: "item-cancel"
        }, cn, 8, an)
      ]))), 128))
    ]),
    f("input", {
      type: "file",
      class: "generic-input__input-file--hidden",
      ref: "inputFileRef",
      onChange: t[0] || (t[0] = (...c) => e.handleInputChange && e.handleInputChange(...c)),
      multiple: ""
    }, null, 544),
    f("div", dn, [
      f("div", hn, [
        v(i, {
          label: "Carica",
          styleType: "primary",
          disabled: !1,
          onOnClick: e.handleClick
        }, {
          "slot-left": D(() => [
            (p(), b("svg", pn, mn))
          ]),
          _: 1
        }, 8, ["onOnClick"])
      ]),
      v(l, {
        loading: e.loading,
        size: "small"
      }, null, 8, ["loading"])
    ])
  ]);
}
const Mi = /* @__PURE__ */ F(nn, [["render", bn]]);
function me(e) {
  return e === 0 ? !1 : Array.isArray(e) && e.length === 0 ? !0 : !e;
}
function gn(e) {
  return (...t) => !e(...t);
}
function yn(e, t) {
  return e === void 0 && (e = "undefined"), e === null && (e = "null"), e === !1 && (e = "false"), e.toString().toLowerCase().indexOf(t.trim()) !== -1;
}
function ht(e, t, s, n) {
  return t ? e.filter((r) => yn(n(r, s), t)).sort((r, o) => n(r, s).length - n(o, s).length) : e;
}
function wn(e) {
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
const ze = (...e) => (t) => e.reduce((s, n) => n(s), t);
var vn = {
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
      return this.internalSearch ? s = this.groupValues ? this.filterAndFlat(s, t, this.label) : ht(s, t, this.label, this.customLabel) : s = this.groupValues ? be(this.groupValues, this.groupLabel)(s) : s, s = this.hideSelected ? s.filter(gn(this.isSelected)) : s, this.taggable && t.length && !this.isExistingOption(t) && (this.tagPosition === "bottom" ? s.push({ isTag: !0, label: e }) : s.unshift({ isTag: !0, label: e })), s.slice(0, this.optionsLimit);
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
      return ze(
        Sn(t, s, this.groupValues, this.groupLabel, this.customLabel),
        be(this.groupValues, this.groupLabel)
      )(e);
    },
    flatAndStrip(e) {
      return ze(
        be(this.groupValues, this.groupLabel),
        wn
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
}, On = {
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
}, Le = {
  name: "vue-multiselect",
  mixins: [vn, On],
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
const $n = {
  ref: "tags",
  class: "multiselect__tags"
}, _n = { class: "multiselect__tags-wrap" }, En = { class: "multiselect__spinner" }, Cn = { key: 0 }, kn = { class: "multiselect__option" }, Ln = { class: "multiselect__option" }, Rn = /* @__PURE__ */ R("No elements found. Consider changing the search query."), Tn = { class: "multiselect__option" }, Fn = /* @__PURE__ */ R("List is empty.");
function An(e, t, s, n, r, o) {
  return p(), A("div", {
    tabindex: e.searchable ? -1 : s.tabindex,
    class: [{ "multiselect--active": e.isOpen, "multiselect--disabled": s.disabled, "multiselect--above": o.isAbove }, "multiselect"],
    onFocus: t[14] || (t[14] = (i) => e.activate()),
    onBlur: t[15] || (t[15] = (i) => e.searchable ? !1 : e.deactivate()),
    onKeydown: [
      t[16] || (t[16] = P(C((i) => e.pointerForward(), ["self", "prevent"]), ["down"])),
      t[17] || (t[17] = P(C((i) => e.pointerBackward(), ["self", "prevent"]), ["up"]))
    ],
    onKeypress: t[18] || (t[18] = P(C((i) => e.addPointerElement(i), ["stop", "self"]), ["enter", "tab"])),
    onKeyup: t[19] || (t[19] = P((i) => e.deactivate(), ["esc"])),
    role: "combobox",
    "aria-owns": "listbox-" + e.id
  }, [
    $(e.$slots, "caret", { toggle: e.toggle }, () => [
      v("div", {
        onMousedown: t[1] || (t[1] = C((i) => e.toggle(), ["prevent", "stop"])),
        class: "multiselect__select"
      }, null, 32)
    ]),
    $(e.$slots, "clear", { search: e.search }),
    v("div", $n, [
      $(e.$slots, "selection", {
        search: e.search,
        remove: e.removeElement,
        values: o.visibleValues,
        isOpen: e.isOpen
      }, () => [
        q(v("div", _n, [
          (p(!0), A(H, null, K(o.visibleValues, (i, l) => $(e.$slots, "tag", {
            option: i,
            search: e.search,
            remove: e.removeElement
          }, () => [
            (p(), A("span", {
              class: "multiselect__tag",
              key: l
            }, [
              v("span", {
                textContent: S(e.getOptionLabel(i))
              }, null, 8, ["textContent"]),
              v("i", {
                tabindex: "1",
                onKeypress: P(C((c) => e.removeElement(i), ["prevent"]), ["enter"]),
                onMousedown: C((c) => e.removeElement(i), ["prevent"]),
                class: "multiselect__tag-icon"
              }, null, 40, ["onKeypress", "onMousedown"])
            ]))
          ])), 256))
        ], 512), [
          [X, o.visibleValues.length > 0]
        ]),
        e.internalValue && e.internalValue.length > s.limit ? $(e.$slots, "limit", { key: 0 }, () => [
          v("strong", {
            class: "multiselect__strong",
            textContent: S(s.limitText(e.internalValue.length - s.limit))
          }, null, 8, ["textContent"])
        ]) : _("v-if", !0)
      ]),
      v(Te, { name: "multiselect__loading" }, {
        default: D(() => [
          $(e.$slots, "loading", {}, () => [
            q(v("div", En, null, 512), [
              [X, s.loading]
            ])
          ])
        ]),
        _: 3
      }),
      e.searchable ? (p(), A("input", {
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
        onFocus: t[3] || (t[3] = C((i) => e.activate(), ["prevent"])),
        onBlur: t[4] || (t[4] = C((i) => e.deactivate(), ["prevent"])),
        onKeyup: t[5] || (t[5] = P((i) => e.deactivate(), ["esc"])),
        onKeydown: [
          t[6] || (t[6] = P(C((i) => e.pointerForward(), ["prevent"]), ["down"])),
          t[7] || (t[7] = P(C((i) => e.pointerBackward(), ["prevent"]), ["up"])),
          t[9] || (t[9] = P(C((i) => e.removeLastElement(), ["stop"]), ["delete"]))
        ],
        onKeypress: t[8] || (t[8] = P(C((i) => e.addPointerElement(i), ["prevent", "stop", "self"]), ["enter"])),
        class: "multiselect__input",
        "aria-controls": "listbox-" + e.id
      }, null, 44, ["name", "id", "placeholder", "value", "disabled", "tabindex", "aria-controls"])) : _("v-if", !0),
      o.isSingleLabelVisible ? (p(), A("span", {
        key: 1,
        class: "multiselect__single",
        onMousedown: t[10] || (t[10] = C((...i) => e.toggle && e.toggle(...i), ["prevent"]))
      }, [
        $(e.$slots, "singleLabel", { option: o.singleValue }, () => [
          R(S(e.currentOptionLabel), 1)
        ])
      ], 32)) : _("v-if", !0),
      o.isPlaceholderVisible ? (p(), A("span", {
        key: 2,
        class: "multiselect__placeholder",
        onMousedown: t[11] || (t[11] = C((...i) => e.toggle && e.toggle(...i), ["prevent"]))
      }, [
        $(e.$slots, "placeholder", {}, () => [
          R(S(e.placeholder), 1)
        ])
      ], 32)) : _("v-if", !0)
    ], 512),
    v(Te, { name: "multiselect" }, {
      default: D(() => [
        q(v("div", {
          class: "multiselect__content-wrapper",
          onFocus: t[12] || (t[12] = (...i) => e.activate && e.activate(...i)),
          tabindex: "-1",
          onMousedown: t[13] || (t[13] = C(() => {
          }, ["prevent"])),
          style: { maxHeight: e.optimizedHeight + "px" },
          ref: "list"
        }, [
          v("ul", {
            class: "multiselect__content",
            style: o.contentStyle,
            role: "listbox",
            id: "listbox-" + e.id
          }, [
            $(e.$slots, "beforeList"),
            e.multiple && e.max === e.internalValue.length ? (p(), A("li", Cn, [
              v("span", kn, [
                $(e.$slots, "maxElements", {}, () => [
                  R("Maximum of " + S(e.max) + " options selected. First remove a selected option to select another.", 1)
                ])
              ])
            ])) : _("v-if", !0),
            !e.max || e.internalValue.length < e.max ? (p(!0), A(H, { key: 1 }, K(e.filteredOptions, (i, l) => (p(), A("li", {
              class: "multiselect__element",
              key: l,
              id: e.id + "-" + l,
              role: i && (i.$isLabel || i.$isDisabled) ? null : "option"
            }, [
              i && (i.$isLabel || i.$isDisabled) ? _("v-if", !0) : (p(), A("span", {
                key: 0,
                class: [e.optionHighlight(l, i), "multiselect__option"],
                onClick: C((c) => e.select(i), ["stop"]),
                onMouseenter: C((c) => e.pointerSet(l), ["self"]),
                "data-select": i && i.isTag ? e.tagPlaceholder : o.selectLabelText,
                "data-selected": o.selectedLabelText,
                "data-deselect": o.deselectLabelText
              }, [
                $(e.$slots, "option", {
                  option: i,
                  search: e.search,
                  index: l
                }, () => [
                  v("span", null, S(e.getOptionLabel(i)), 1)
                ])
              ], 42, ["onClick", "onMouseenter", "data-select", "data-selected", "data-deselect"])),
              i && (i.$isLabel || i.$isDisabled) ? (p(), A("span", {
                key: 1,
                "data-select": e.groupSelect && o.selectGroupLabelText,
                "data-deselect": e.groupSelect && o.deselectGroupLabelText,
                class: [e.groupHighlight(l, i), "multiselect__option"],
                onMouseenter: C((c) => e.groupSelect && e.pointerSet(l), ["self"]),
                onMousedown: C((c) => e.selectGroup(i), ["prevent"])
              }, [
                $(e.$slots, "option", {
                  option: i,
                  search: e.search,
                  index: l
                }, () => [
                  v("span", null, S(e.getOptionLabel(i)), 1)
                ])
              ], 42, ["data-select", "data-deselect", "onMouseenter", "onMousedown"])) : _("v-if", !0)
            ], 8, ["id", "role"]))), 128)) : _("v-if", !0),
            q(v("li", null, [
              v("span", Ln, [
                $(e.$slots, "noResult", { search: e.search }, () => [
                  Rn
                ])
              ])
            ], 512), [
              [X, s.showNoResults && e.filteredOptions.length === 0 && e.search && !s.loading]
            ]),
            q(v("li", null, [
              v("span", Tn, [
                $(e.$slots, "noOptions", {}, () => [
                  Fn
                ])
              ])
            ], 512), [
              [X, s.showNoOptions && e.options.length === 0 && !e.search && !s.loading]
            ]),
            $(e.$slots, "afterList")
          ], 12, ["id"])
        ], 36), [
          [X, e.isOpen]
        ])
      ]),
      _: 3
    })
  ], 42, ["tabindex", "aria-owns"]);
}
Le.render = An;
const Vn = T({
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
    VueMultiselect: Le
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
const Bn = { class: "custom-multiselect" }, Pn = {
  key: 0,
  for: "exampleFormControlSelect1",
  class: "custom-multiselect__label text-sm"
}, Nn = { class: "multiselect__tags-wrap" }, Dn = { class: "multiselect__tag" }, Mn = ["onClick"];
function jn(e, t, s, n, r, o) {
  const i = ee("vue-multiselect");
  return p(), b("div", Bn, [
    e.label ? (p(), b("label", Pn, S(e.label), 1)) : _("", !0),
    v(i, {
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
      noResult: D(() => [
        R(" Nessun risultato. ")
      ]),
      tag: D((l) => [
        f("div", Nn, [
          f("span", Dn, [
            f("span", null, S(l.option.label), 1),
            f("i", {
              onClick: (c) => e.removeOption(l.option),
              tabindex: "1",
              class: "multiselect__tag-icon"
            }, null, 8, Mn)
          ])
        ])
      ]),
      option: D((l) => [
        R(S(l.option.label), 1)
      ]),
      _: 1
    }, 8, ["modelValue", "options", "placeholder", "onSearchChange"])
  ]);
}
const ji = /* @__PURE__ */ F(Vn, [["render", jn]]);
var Un = "Expected a function", He = 0 / 0, In = "[object Symbol]", qn = /^\s+|\s+$/g, zn = /^[-+]0x[0-9a-f]+$/i, Hn = /^0b[01]+$/i, xn = /^0o[0-7]+$/i, Kn = parseInt, Gn = typeof ie == "object" && ie && ie.Object === Object && ie, Jn = typeof self == "object" && self && self.Object === Object && self, Wn = Gn || Jn || Function("return this")(), Xn = Object.prototype, Qn = Xn.toString, Yn = Math.max, Zn = Math.min, ge = function() {
  return Wn.Date.now();
};
function ei(e, t, s) {
  var n, r, o, i, l, c, a = 0, h = !1, y = !1, O = !0;
  if (typeof e != "function")
    throw new TypeError(Un);
  t = xe(t) || 0, Oe(s) && (h = !!s.leading, y = "maxWait" in s, o = y ? Yn(xe(s.maxWait) || 0, t) : o, O = "trailing" in s ? !!s.trailing : O);
  function m(E) {
    var U = n, W = r;
    return n = r = void 0, a = E, i = e.apply(W, U), i;
  }
  function d(E) {
    return a = E, l = setTimeout(k, t), h ? m(E) : i;
  }
  function w(E) {
    var U = E - c, W = E - a, Re = t - U;
    return y ? Zn(Re, o - W) : Re;
  }
  function B(E) {
    var U = E - c, W = E - a;
    return c === void 0 || U >= t || U < 0 || y && W >= o;
  }
  function k() {
    var E = ge();
    if (B(E))
      return N(E);
    l = setTimeout(k, w(E));
  }
  function N(E) {
    return l = void 0, O && n ? m(E) : (n = r = void 0, i);
  }
  function x() {
    l !== void 0 && clearTimeout(l), a = 0, n = c = r = l = void 0;
  }
  function de() {
    return l === void 0 ? i : N(ge());
  }
  function he() {
    var E = ge(), U = B(E);
    if (n = arguments, r = this, c = E, U) {
      if (l === void 0)
        return d(c);
      if (y)
        return l = setTimeout(k, t), m(c);
    }
    return l === void 0 && (l = setTimeout(k, t)), i;
  }
  return he.cancel = x, he.flush = de, he;
}
function Oe(e) {
  var t = typeof e;
  return !!e && (t == "object" || t == "function");
}
function ti(e) {
  return !!e && typeof e == "object";
}
function si(e) {
  return typeof e == "symbol" || ti(e) && Qn.call(e) == In;
}
function xe(e) {
  if (typeof e == "number")
    return e;
  if (si(e))
    return He;
  if (Oe(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = Oe(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = e.replace(qn, "");
  var s = Hn.test(e);
  return s || xn.test(e) ? Kn(e.slice(2), s ? 2 : 8) : zn.test(e) ? He : +e;
}
var ni = ei;
const ii = T({
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
    VueMultiselect: Le
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
      e && (this.loading = !0, L.get(this.optionsSearchRoute, {
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
    debouncedSearch: ni(function(e) {
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
}), ri = { class: "custom-multiselect" }, oi = {
  key: 0,
  class: "custom-multiselect__label text-sm"
}, li = { class: "multiselect__tags-wrap" }, ai = { class: "multiselect__tag" }, ui = ["onClick"];
function ci(e, t, s, n, r, o) {
  const i = ee("vue-multiselect");
  return p(), b("div", ri, [
    e.label ? (p(), b("label", oi, S(e.label), 1)) : _("", !0),
    v(i, {
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
      noResult: D(() => [
        R(" Nessun risultato. ")
      ]),
      tag: D((l) => [
        f("div", li, [
          f("span", ai, [
            f("span", null, S(l.option.label), 1),
            f("i", {
              onClick: (c) => e.removeOption(l.option),
              tabindex: "1",
              class: "multiselect__tag-icon"
            }, null, 8, ui)
          ])
        ])
      ]),
      option: D((l) => [
        R(S(l.option.label), 1)
      ]),
      _: 1
    }, 8, ["modelValue", "options", "placeholder", "onSearchChange", "loading"])
  ]);
}
const Ui = /* @__PURE__ */ F(ii, [["render", ci]]), di = T({
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
}), hi = { class: "custom-select" }, pi = {
  key: 0,
  for: "exampleFormControlSelect1",
  class: "custom-select__label text-sm"
}, fi = ["name", "id", "disabled"], mi = {
  selected: "",
  disabled: "",
  value: ""
}, bi = ["value", "selected"];
function gi(e, t, s, n, r, o) {
  return p(), b("div", hi, [
    e.label ? (p(), b("label", pi, S(e.label), 1)) : _("", !0),
    f("select", {
      name: e.name,
      class: "custom-select__select",
      id: "select_" + e.name,
      onChange: t[0] || (t[0] = (...i) => e.handleSelectChange && e.handleSelectChange(...i)),
      disabled: e.disabled
    }, [
      f("option", mi, S(e.placeholder), 1),
      (p(!0), b(H, null, K(e.options, (i, l) => (p(), b("option", {
        key: l,
        value: i.value,
        selected: i.value == e.value
      }, S(i.label), 9, bi))), 128))
    ], 40, fi)
  ]);
}
const Ii = /* @__PURE__ */ F(di, [["render", gi]]), yi = T({
  name: "CustomRadioGroup",
  props: {
    options: {
      type: Array
    },
    value: {
      type: [Number, String]
    }
  },
  setup(e, t) {
    return { checkRadio: ({ target: n }) => {
      t.emit("update:value", n.value);
    } };
  }
}), wi = { class: "custom-radio-group" }, Si = ["name", "id", "value", "disabled", "checked"], vi = /* @__PURE__ */ f("span", { class: "custom-radio-group__single-radio__radio" }, null, -1), Oi = ["for"];
function $i(e, t, s, n, r, o) {
  return p(), b("div", wi, [
    (p(!0), b(H, null, K(e.options, (i) => (p(), b("div", {
      key: i.id,
      class: le([{ disabled: i.disabled, checked: i.value == e.value }, "custom-radio-group__single-radio"])
    }, [
      f("input", {
        type: "radio",
        name: i.name,
        id: i.id,
        value: i.value,
        disabled: i.disabled,
        class: "custom-radio-group__single-radio__radio-hidden",
        checked: i.value == e.value,
        onChange: t[0] || (t[0] = (...l) => e.checkRadio && e.checkRadio(...l))
      }, null, 40, Si),
      vi,
      f("label", {
        class: "custom-radio-group__single-radio__radio-label",
        for: i.id
      }, S(i.label), 9, Oi)
    ], 2))), 128))
  ]);
}
const qi = /* @__PURE__ */ F(yi, [["render", $i]]), _i = T({
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
    return { computedValue: Ke({
      get() {
        return e.modelValue;
      },
      set(n) {
        t("update", n);
      }
    }) };
  }
}), Ei = { class: "generic-input" }, Ci = {
  key: 0,
  class: "generic-input__label text-sm secondary-color"
};
function ki(e, t, s, n, r, o) {
  return p(), b("div", Ei, [
    e.label ? (p(), b("label", Ci, S(e.label), 1)) : _("", !0),
    q(f("textarea", Ge(e.$attrs, {
      "onUpdate:modelValue": t[0] || (t[0] = (i) => e.computedValue = i),
      class: "generic-input__input " + e.classes
    }), null, 16), [
      [ft, e.computedValue]
    ])
  ]);
}
const zi = /* @__PURE__ */ F(_i, [["render", ki]]), Li = T({
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
    return { computedValue: Ke({
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
}, Fi = { class: "input-container" }, Ai = {
  key: 1,
  class: "generic-input__read-only"
};
function Vi(e, t, s, n, r, o) {
  return p(), b("div", Ri, [
    e.label ? (p(), b("label", Ti, S(e.label), 1)) : _("", !0),
    f("div", Fi, [
      $(e.$slots, "prepend"),
      e.readOnly ? _("", !0) : q((p(), b("input", Ge({ key: 0 }, e.$attrs, {
        "onUpdate:modelValue": t[0] || (t[0] = (i) => e.computedValue = i),
        class: "generic-input__input " + e.classes
      }), null, 16)), [
        [mt, e.computedValue]
      ])
    ]),
    e.readOnly ? (p(), b("div", Ai, S(e.computedValue), 1)) : _("", !0)
  ]);
}
const Hi = /* @__PURE__ */ F(Li, [["render", Vi]]);
export {
  wt as CustomButton,
  _t as CustomCheckbox,
  Pi as CustomFileUpload,
  Ut as CustomLoader,
  Ni as CustomModal,
  Di as CustomMultiCheckbox,
  ji as CustomMultiSelect,
  Ui as CustomMultiSelectAsync,
  Mi as CustomMultipleFileUpload,
  qi as CustomRadioGroup,
  Ii as CustomSelect,
  zi as CustomTextArea,
  Hi as GenericInput
};
