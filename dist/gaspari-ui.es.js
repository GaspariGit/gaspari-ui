import { defineComponent as C, openBlock as d, createElementBlock as p, normalizeClass as W, renderSlot as _, createElementVNode as h, toDisplayString as g, createTextVNode as L, ref as j, createCommentVNode as E, Fragment as P, resolveComponent as I, renderList as H, createBlock as F, onMounted as Je, createVNode as S, withCtx as V, withKeys as N, withModifiers as k, withDirectives as G, vShow as Z, Transition as ae, computed as Ke, mergeProps as We, vModelText as mt, vModelDynamic as bt, onBeforeUnmount as gt, createStaticVNode as yt, pushScopeId as vt, popScopeId as wt } from "vue";
const St = C({
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
}), A = (e, t) => {
  const s = e.__vccOpts || e;
  for (const [n, r] of t)
    s[n] = r;
  return s;
}, _t = ["disabled"];
function Et(e, t, s, n, r, o) {
  return d(), p("button", {
    class: W(["custom-button", e.assignStyle()]),
    disabled: e.disabled,
    onClick: t[0] || (t[0] = (...i) => e.handleClick && e.handleClick(...i))
  }, [
    _(e.$slots, "slot-left"),
    h("span", null, g(e.label), 1),
    _(e.$slots, "slot-right")
  ], 10, _t);
}
const Ot = /* @__PURE__ */ A(St, [["render", Et]]), $t = C({
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
}), kt = ["checked", "disabled", "name"], Ct = /* @__PURE__ */ h("span", { class: "checkmark" }, null, -1);
function At(e, t, s, n, r, o) {
  return d(), p("label", {
    class: W(["wrapper flex items-center", { disabled: e.disabled }])
  }, [
    L(g(e.label) + " ", 1),
    h("input", {
      class: "checkbox",
      type: "checkbox",
      checked: e.checked,
      onChange: t[0] || (t[0] = (...i) => e.updateInput && e.updateInput(...i)),
      disabled: e.disabled,
      name: e.name
    }, null, 40, kt),
    Ct
  ], 2);
}
const Rt = /* @__PURE__ */ A($t, [["render", At]]), Lt = C({
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
    const s = j(null), n = () => {
      s.value.click();
    }, r = j(null);
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
}), Tt = { class: "generic-input" }, Ft = {
  key: 0,
  class: "generic-input__label text-sm secondary-color"
}, Vt = { class: "input-container" }, Pt = { class: "generic-input__input-file" }, Bt = { class: "generic-input__input-file__file" }, Mt = {
  key: 0,
  class: "generic-input__input-file__file__placeholder"
}, Nt = {
  key: 1,
  class: "generic-input__input-file__file__file-name"
}, Dt = /* @__PURE__ */ h("svg", {
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
], -1), jt = [
  Dt
];
function Ut(e, t, s, n, r, o) {
  return d(), p("div", Tt, [
    e.label ? (d(), p("label", Ft, g(e.label), 1)) : E("", !0),
    h("div", Vt, [
      _(e.$slots, "prepend"),
      h("input", {
        type: "file",
        class: "generic-input__input-file--hidden",
        ref: "inputFileRef",
        onChange: t[0] || (t[0] = (...i) => e.handleInputChange && e.handleInputChange(...i))
      }, null, 544),
      h("div", Pt, [
        h("div", {
          class: "generic-input__input-file__button",
          onClick: t[1] || (t[1] = (...i) => e.handleButtonClick && e.handleButtonClick(...i))
        }, " Sfoglia... "),
        h("div", Bt, [
          e.currentFile ? (d(), p("div", Nt, [
            L(g(e.currentFile.name) + " ", 1),
            h("div", {
              onClick: t[2] || (t[2] = (...i) => e.deleteFile && e.deleteFile(...i)),
              class: "generic-input__input-file__file__file-name__cancel"
            }, jt)
          ])) : (d(), p("div", Mt, g(e.placeholder), 1))
        ])
      ])
    ])
  ]);
}
const Lr = /* @__PURE__ */ A(Lt, [["render", Ut]]), It = C({
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
}), Ht = /* @__PURE__ */ h("span", { class: "sr-only" }, "Loading...", -1), xt = [
  Ht
];
function zt(e, t, s, n, r, o) {
  return e.loading ? (d(), p("div", {
    key: 0,
    class: W(["spinner-border", e.size]),
    role: "status"
  }, xt, 2)) : E("", !0);
}
const qt = /* @__PURE__ */ A(It, [["render", zt]]), Gt = C({
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
}), Jt = {
  key: 0,
  class: "custom-modal"
}, Kt = { class: "modal-background" }, Wt = { class: "modal-container" }, Qt = { class: "modal-header" }, Yt = { class: "modal-title" }, Xt = /* @__PURE__ */ h("svg", {
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
], -1), Zt = [
  Xt
], es = { class: "modal-body" }, ts = { class: "modal-footer" };
function ss(e, t, s, n, r, o) {
  return e.isOpen ? (d(), p("div", Jt, [
    h("div", Kt, [
      h("div", Wt, [
        h("div", Qt, [
          h("div", Yt, [
            e.withoutTitle ? E("", !0) : (d(), p(P, { key: 0 }, [
              L(g(e.modalTitle), 1)
            ], 64))
          ]),
          h("div", {
            class: "modal-close",
            onClick: t[0] || (t[0] = (...i) => e.emitCloseModal && e.emitCloseModal(...i))
          }, Zt)
        ]),
        h("div", es, [
          _(e.$slots, "modal-body")
        ]),
        h("div", ts, [
          _(e.$slots, "modal-footer")
        ])
      ])
    ])
  ])) : E("", !0);
}
const Tr = /* @__PURE__ */ A(Gt, [["render", ss]]), ns = C({
  name: "CustomMultiCheckbox",
  components: {
    CustomCheckbox: Rt
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
function is(e, t, s, n, r, o) {
  const i = I("custom-checkbox");
  return d(), p("div", null, [
    (d(!0), p(P, null, H(e.options, (l, c) => (d(), F(i, {
      key: c,
      label: l.label,
      checked: e.value.includes(l.id),
      "onUpdate:checked": (a) => e.check(l.id, a)
    }, null, 8, ["label", "checked", "onUpdate:checked"]))), 128))
  ]);
}
const Fr = /* @__PURE__ */ A(ns, [["render", is]]);
function Qe(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: Ye } = Object.prototype, { getPrototypeOf: Oe } = Object, $e = ((e) => (t) => {
  const s = Ye.call(t);
  return e[s] || (e[s] = s.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), x = (e) => (e = e.toLowerCase(), (t) => $e(t) === e), ue = (e) => (t) => typeof t === e, { isArray: ne } = Array, ve = ue("undefined");
function rs(e) {
  return e !== null && !ve(e) && e.constructor !== null && !ve(e.constructor) && Q(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const Xe = x("ArrayBuffer");
function os(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && Xe(e.buffer), t;
}
const ls = ue("string"), Q = ue("function"), Ze = ue("number"), et = (e) => e !== null && typeof e == "object", as = (e) => e === !0 || e === !1, oe = (e) => {
  if ($e(e) !== "object")
    return !1;
  const t = Oe(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}, us = x("Date"), cs = x("File"), ds = x("Blob"), hs = x("FileList"), ps = (e) => et(e) && Q(e.pipe), fs = (e) => {
  const t = "[object FormData]";
  return e && (typeof FormData == "function" && e instanceof FormData || Ye.call(e) === t || Q(e.toString) && e.toString() === t);
}, ms = x("URLSearchParams"), bs = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function ce(e, t, { allOwnKeys: s = !1 } = {}) {
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
    arguments[s] && ce(arguments[s], t);
  return e;
}
const gs = (e, t, s, { allOwnKeys: n } = {}) => (ce(t, (r, o) => {
  s && Q(r) ? e[o] = Qe(r, s) : e[o] = r;
}, { allOwnKeys: n }), e), ys = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), vs = (e, t, s, n) => {
  e.prototype = Object.create(t.prototype, n), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), s && Object.assign(e.prototype, s);
}, ws = (e, t, s, n) => {
  let r, o, i;
  const l = {};
  if (t = t || {}, e == null)
    return t;
  do {
    for (r = Object.getOwnPropertyNames(e), o = r.length; o-- > 0; )
      i = r[o], (!n || n(i, e, t)) && !l[i] && (t[i] = e[i], l[i] = !0);
    e = s !== !1 && Oe(e);
  } while (e && (!s || s(e, t)) && e !== Object.prototype);
  return t;
}, Ss = (e, t, s) => {
  e = String(e), (s === void 0 || s > e.length) && (s = e.length), s -= t.length;
  const n = e.indexOf(t, s);
  return n !== -1 && n === s;
}, _s = (e) => {
  if (!e)
    return null;
  if (ne(e))
    return e;
  let t = e.length;
  if (!Ze(t))
    return null;
  const s = new Array(t);
  for (; t-- > 0; )
    s[t] = e[t];
  return s;
}, Es = ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && Oe(Uint8Array)), Os = (e, t) => {
  const n = (e && e[Symbol.iterator]).call(e);
  let r;
  for (; (r = n.next()) && !r.done; ) {
    const o = r.value;
    t.call(e, o[0], o[1]);
  }
}, $s = (e, t) => {
  let s;
  const n = [];
  for (; (s = e.exec(t)) !== null; )
    n.push(s);
  return n;
}, ks = x("HTMLFormElement"), Cs = (e) => e.toLowerCase().replace(
  /[_-\s]([a-z\d])(\w*)/g,
  function(s, n, r) {
    return n.toUpperCase() + r;
  }
), Fe = (({ hasOwnProperty: e }) => (t, s) => e.call(t, s))(Object.prototype), As = x("RegExp"), tt = (e, t) => {
  const s = Object.getOwnPropertyDescriptors(e), n = {};
  ce(s, (r, o) => {
    t(r, o, e) !== !1 && (n[o] = r);
  }), Object.defineProperties(e, n);
}, Rs = (e) => {
  tt(e, (t, s) => {
    const n = e[s];
    if (!!Q(n)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not read-only method '" + s + "'");
      });
    }
  });
}, Ls = (e, t) => {
  const s = {}, n = (r) => {
    r.forEach((o) => {
      s[o] = !0;
    });
  };
  return ne(e) ? n(e) : n(String(e).split(t)), s;
}, Ts = () => {
}, Fs = (e, t) => (e = +e, Number.isFinite(e) ? e : t), u = {
  isArray: ne,
  isArrayBuffer: Xe,
  isBuffer: rs,
  isFormData: fs,
  isArrayBufferView: os,
  isString: ls,
  isNumber: Ze,
  isBoolean: as,
  isObject: et,
  isPlainObject: oe,
  isUndefined: ve,
  isDate: us,
  isFile: cs,
  isBlob: ds,
  isRegExp: As,
  isFunction: Q,
  isStream: ps,
  isURLSearchParams: ms,
  isTypedArray: Es,
  isFileList: hs,
  forEach: ce,
  merge: we,
  extend: gs,
  trim: bs,
  stripBOM: ys,
  inherits: vs,
  toFlatObject: ws,
  kindOf: $e,
  kindOfTest: x,
  endsWith: Ss,
  toArray: _s,
  forEachEntry: Os,
  matchAll: $s,
  isHTMLForm: ks,
  hasOwnProperty: Fe,
  hasOwnProp: Fe,
  reduceDescriptors: tt,
  freezeMethods: Rs,
  toObjectSet: Ls,
  toCamelCase: Cs,
  noop: Ts,
  toFiniteNumber: Fs
};
function y(e, t, s, n, r) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), s && (this.config = s), n && (this.request = n), r && (this.response = r);
}
u.inherits(y, Error, {
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
const st = y.prototype, nt = {};
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
  nt[e] = { value: e };
});
Object.defineProperties(y, nt);
Object.defineProperty(st, "isAxiosError", { value: !0 });
y.from = (e, t, s, n, r, o) => {
  const i = Object.create(st);
  return u.toFlatObject(e, i, function(c) {
    return c !== Error.prototype;
  }, (l) => l !== "isAxiosError"), y.call(i, e.message, t, s, n, r), i.cause = e, i.name = e.name, o && Object.assign(i, o), i;
};
var re = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Vs = typeof self == "object" ? self.FormData : window.FormData;
function Se(e) {
  return u.isPlainObject(e) || u.isArray(e);
}
function it(e) {
  return u.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function Ve(e, t, s) {
  return e ? e.concat(t).map(function(r, o) {
    return r = it(r), !s && o ? "[" + r + "]" : r;
  }).join(s ? "." : "") : t;
}
function Ps(e) {
  return u.isArray(e) && !e.some(Se);
}
const Bs = u.toFlatObject(u, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function Ms(e) {
  return e && u.isFunction(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator];
}
function de(e, t, s) {
  if (!u.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new (Vs || FormData)(), s = u.toFlatObject(s, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(w, M) {
    return !u.isUndefined(M[w]);
  });
  const n = s.metaTokens, r = s.visitor || m, o = s.dots, i = s.indexes, c = (s.Blob || typeof Blob < "u" && Blob) && Ms(t);
  if (!u.isFunction(r))
    throw new TypeError("visitor must be a function");
  function a(f) {
    if (f === null)
      return "";
    if (u.isDate(f))
      return f.toISOString();
    if (!c && u.isBlob(f))
      throw new y("Blob is not supported. Use a Buffer instead.");
    return u.isArrayBuffer(f) || u.isTypedArray(f) ? c && typeof Blob == "function" ? new Blob([f]) : Buffer.from(f) : f;
  }
  function m(f, w, M) {
    let R = f;
    if (f && !M && typeof f == "object") {
      if (u.endsWith(w, "{}"))
        w = n ? w : w.slice(0, -2), f = JSON.stringify(f);
      else if (u.isArray(f) && Ps(f) || u.isFileList(f) || u.endsWith(w, "[]") && (R = u.toArray(f)))
        return w = it(w), R.forEach(function(K, he) {
          !(u.isUndefined(K) || K === null) && t.append(
            i === !0 ? Ve([w], he, o) : i === null ? w : w + "[]",
            a(K)
          );
        }), !1;
    }
    return Se(f) ? !0 : (t.append(Ve(M, w, o), a(f)), !1);
  }
  const v = [], O = Object.assign(Bs, {
    defaultVisitor: m,
    convertValue: a,
    isVisitable: Se
  });
  function b(f, w) {
    if (!u.isUndefined(f)) {
      if (v.indexOf(f) !== -1)
        throw Error("Circular reference detected in " + w.join("."));
      v.push(f), u.forEach(f, function(R, D) {
        (!(u.isUndefined(R) || R === null) && r.call(
          t,
          R,
          u.isString(D) ? D.trim() : D,
          w,
          O
        )) === !0 && b(R, w ? w.concat(D) : [D]);
      }), v.pop();
    }
  }
  if (!u.isObject(e))
    throw new TypeError("data must be an object");
  return b(e), t;
}
function Pe(e) {
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
function ke(e, t) {
  this._pairs = [], e && de(e, this, t);
}
const rt = ke.prototype;
rt.append = function(t, s) {
  this._pairs.push([t, s]);
};
rt.toString = function(t) {
  const s = t ? function(n) {
    return t.call(this, n, Pe);
  } : Pe;
  return this._pairs.map(function(r) {
    return s(r[0]) + "=" + s(r[1]);
  }, "").join("&");
};
function Ns(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function ot(e, t, s) {
  if (!t)
    return e;
  const n = s && s.encode || Ns, r = s && s.serialize;
  let o;
  if (r ? o = r(t, s) : o = u.isURLSearchParams(t) ? t.toString() : new ke(t, s).toString(n), o) {
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
const lt = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, Ds = typeof URLSearchParams < "u" ? URLSearchParams : ke, js = FormData, Us = (() => {
  let e;
  return typeof navigator < "u" && ((e = navigator.product) === "ReactNative" || e === "NativeScript" || e === "NS") ? !1 : typeof window < "u" && typeof document < "u";
})(), U = {
  isBrowser: !0,
  classes: {
    URLSearchParams: Ds,
    FormData: js,
    Blob
  },
  isStandardBrowserEnv: Us,
  protocols: ["http", "https", "file", "blob", "url", "data"]
};
function Is(e, t) {
  return de(e, new U.classes.URLSearchParams(), Object.assign({
    visitor: function(s, n, r, o) {
      return U.isNode && u.isBuffer(s) ? (this.append(n, s.toString("base64")), !1) : o.defaultVisitor.apply(this, arguments);
    }
  }, t));
}
function Hs(e) {
  return u.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function xs(e) {
  const t = {}, s = Object.keys(e);
  let n;
  const r = s.length;
  let o;
  for (n = 0; n < r; n++)
    o = s[n], t[o] = e[o];
  return t;
}
function at(e) {
  function t(s, n, r, o) {
    let i = s[o++];
    const l = Number.isFinite(+i), c = o >= s.length;
    return i = !i && u.isArray(r) ? r.length : i, c ? (u.hasOwnProp(r, i) ? r[i] = [r[i], n] : r[i] = n, !l) : ((!r[i] || !u.isObject(r[i])) && (r[i] = []), t(s, n, r[i], o) && u.isArray(r[i]) && (r[i] = xs(r[i])), !l);
  }
  if (u.isFormData(e) && u.isFunction(e.entries)) {
    const s = {};
    return u.forEachEntry(e, (n, r) => {
      t(Hs(n), r, s, 0);
    }), s;
  }
  return null;
}
function zs(e, t, s) {
  const n = s.config.validateStatus;
  !s.status || !n || n(s.status) ? e(s) : t(new y(
    "Request failed with status code " + s.status,
    [y.ERR_BAD_REQUEST, y.ERR_BAD_RESPONSE][Math.floor(s.status / 100) - 4],
    s.config,
    s.request,
    s
  ));
}
const qs = U.isStandardBrowserEnv ? function() {
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
function Gs(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function Js(e, t) {
  return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function ut(e, t) {
  return e && !Gs(t) ? Js(e, t) : t;
}
const Ks = U.isStandardBrowserEnv ? function() {
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
  y.call(this, e == null ? "canceled" : e, y.ERR_CANCELED, t, s), this.name = "CanceledError";
}
u.inherits(ie, y, {
  __CANCEL__: !0
});
function Ws(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
const Qs = u.toObjectSet([
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
]), Ys = (e) => {
  const t = {};
  let s, n, r;
  return e && e.split(`
`).forEach(function(i) {
    r = i.indexOf(":"), s = i.substring(0, r).trim().toLowerCase(), n = i.substring(r + 1).trim(), !(!s || t[s] && Qs[s]) && (s === "set-cookie" ? t[s] ? t[s].push(n) : t[s] = [n] : t[s] = t[s] ? t[s] + ", " + n : n);
  }), t;
}, Me = Symbol("internals"), ct = Symbol("defaults");
function te(e) {
  return e && String(e).trim().toLowerCase();
}
function le(e) {
  return e === !1 || e == null ? e : u.isArray(e) ? e.map(le) : String(e);
}
function Xs(e) {
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
function Zs(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, s, n) => s.toUpperCase() + n);
}
function en(e, t) {
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
function ee(e, t) {
  t = t.toLowerCase();
  const s = Object.keys(e);
  let n = s.length, r;
  for (; n-- > 0; )
    if (r = s[n], t === r.toLowerCase())
      return r;
  return null;
}
function B(e, t) {
  e && this.set(e), this[ct] = t || null;
}
Object.assign(B.prototype, {
  set: function(e, t, s) {
    const n = this;
    function r(o, i, l) {
      const c = te(i);
      if (!c)
        throw new Error("header name must be a non-empty string");
      const a = ee(n, c);
      a && l !== !0 && (n[a] === !1 || l === !1) || (n[a || i] = le(o));
    }
    return u.isPlainObject(e) ? u.forEach(e, (o, i) => {
      r(o, i, t);
    }) : r(t, e, s), this;
  },
  get: function(e, t) {
    if (e = te(e), !e)
      return;
    const s = ee(this, e);
    if (s) {
      const n = this[s];
      if (!t)
        return n;
      if (t === !0)
        return Xs(n);
      if (u.isFunction(t))
        return t.call(this, n, s);
      if (u.isRegExp(t))
        return t.exec(n);
      throw new TypeError("parser must be boolean|regexp|function");
    }
  },
  has: function(e, t) {
    if (e = te(e), e) {
      const s = ee(this, e);
      return !!(s && (!t || Ne(this, this[s], s, t)));
    }
    return !1;
  },
  delete: function(e, t) {
    const s = this;
    let n = !1;
    function r(o) {
      if (o = te(o), o) {
        const i = ee(s, o);
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
      const o = ee(s, r);
      if (o) {
        t[o] = le(n), delete t[r];
        return;
      }
      const i = e ? Zs(r) : String(r).trim();
      i !== r && delete t[r], t[i] = le(n), s[i] = !0;
    }), this;
  },
  toJSON: function(e) {
    const t = /* @__PURE__ */ Object.create(null);
    return u.forEach(
      Object.assign({}, this[ct] || null, this),
      (s, n) => {
        s == null || s === !1 || (t[n] = e && u.isArray(s) ? s.join(", ") : s);
      }
    ), t;
  }
});
Object.assign(B, {
  from: function(e) {
    return u.isString(e) ? new this(Ys(e)) : e instanceof this ? e : new this(e);
  },
  accessor: function(e) {
    const s = (this[Me] = this[Me] = {
      accessors: {}
    }).accessors, n = this.prototype;
    function r(o) {
      const i = te(o);
      s[i] || (en(n, o), s[i] = !0);
    }
    return u.isArray(e) ? e.forEach(r) : r(e), this;
  }
});
B.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent"]);
u.freezeMethods(B.prototype);
u.freezeMethods(B);
function tn(e, t) {
  e = e || 10;
  const s = new Array(e), n = new Array(e);
  let r = 0, o = 0, i;
  return t = t !== void 0 ? t : 1e3, function(c) {
    const a = Date.now(), m = n[o];
    i || (i = a), s[r] = c, n[r] = a;
    let v = o, O = 0;
    for (; v !== r; )
      O += s[v++], v = v % e;
    if (r = (r + 1) % e, r === o && (o = (o + 1) % e), a - i < t)
      return;
    const b = m && a - m;
    return b ? Math.round(O * 1e3 / b) : void 0;
  };
}
function De(e, t) {
  let s = 0;
  const n = tn(50, 250);
  return (r) => {
    const o = r.loaded, i = r.lengthComputable ? r.total : void 0, l = o - s, c = n(l), a = o <= i;
    s = o;
    const m = {
      loaded: o,
      total: i,
      progress: i ? o / i : void 0,
      bytes: l,
      rate: c || void 0,
      estimated: c && i && a ? (i - o) / c : void 0
    };
    m[t ? "download" : "upload"] = !0, e(m);
  };
}
function je(e) {
  return new Promise(function(s, n) {
    let r = e.data;
    const o = B.from(e.headers).normalize(), i = e.responseType;
    let l;
    function c() {
      e.cancelToken && e.cancelToken.unsubscribe(l), e.signal && e.signal.removeEventListener("abort", l);
    }
    u.isFormData(r) && U.isStandardBrowserEnv && o.setContentType(!1);
    let a = new XMLHttpRequest();
    if (e.auth) {
      const b = e.auth.username || "", f = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : "";
      o.set("Authorization", "Basic " + btoa(b + ":" + f));
    }
    const m = ut(e.baseURL, e.url);
    a.open(e.method.toUpperCase(), ot(m, e.params, e.paramsSerializer), !0), a.timeout = e.timeout;
    function v() {
      if (!a)
        return;
      const b = B.from(
        "getAllResponseHeaders" in a && a.getAllResponseHeaders()
      ), w = {
        data: !i || i === "text" || i === "json" ? a.responseText : a.response,
        status: a.status,
        statusText: a.statusText,
        headers: b,
        config: e,
        request: a
      };
      zs(function(R) {
        s(R), c();
      }, function(R) {
        n(R), c();
      }, w), a = null;
    }
    if ("onloadend" in a ? a.onloadend = v : a.onreadystatechange = function() {
      !a || a.readyState !== 4 || a.status === 0 && !(a.responseURL && a.responseURL.indexOf("file:") === 0) || setTimeout(v);
    }, a.onabort = function() {
      !a || (n(new y("Request aborted", y.ECONNABORTED, e, a)), a = null);
    }, a.onerror = function() {
      n(new y("Network Error", y.ERR_NETWORK, e, a)), a = null;
    }, a.ontimeout = function() {
      let f = e.timeout ? "timeout of " + e.timeout + "ms exceeded" : "timeout exceeded";
      const w = e.transitional || lt;
      e.timeoutErrorMessage && (f = e.timeoutErrorMessage), n(new y(
        f,
        w.clarifyTimeoutError ? y.ETIMEDOUT : y.ECONNABORTED,
        e,
        a
      )), a = null;
    }, U.isStandardBrowserEnv) {
      const b = (e.withCredentials || Ks(m)) && e.xsrfCookieName && qs.read(e.xsrfCookieName);
      b && o.set(e.xsrfHeaderName, b);
    }
    r === void 0 && o.setContentType(null), "setRequestHeader" in a && u.forEach(o.toJSON(), function(f, w) {
      a.setRequestHeader(w, f);
    }), u.isUndefined(e.withCredentials) || (a.withCredentials = !!e.withCredentials), i && i !== "json" && (a.responseType = e.responseType), typeof e.onDownloadProgress == "function" && a.addEventListener("progress", De(e.onDownloadProgress, !0)), typeof e.onUploadProgress == "function" && a.upload && a.upload.addEventListener("progress", De(e.onUploadProgress)), (e.cancelToken || e.signal) && (l = (b) => {
      !a || (n(!b || b.type ? new ie(null, e, a) : b), a.abort(), a = null);
    }, e.cancelToken && e.cancelToken.subscribe(l), e.signal && (e.signal.aborted ? l() : e.signal.addEventListener("abort", l)));
    const O = Ws(m);
    if (O && U.protocols.indexOf(O) === -1) {
      n(new y("Unsupported protocol " + O + ":", y.ERR_BAD_REQUEST, e));
      return;
    }
    a.send(r || null);
  });
}
const Ue = {
  http: je,
  xhr: je
}, Ie = {
  getAdapter: (e) => {
    if (u.isString(e)) {
      const t = Ue[e];
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
  adapters: Ue
}, sn = {
  "Content-Type": "application/x-www-form-urlencoded"
};
function nn() {
  let e;
  return typeof XMLHttpRequest < "u" ? e = Ie.getAdapter("xhr") : typeof process < "u" && u.kindOf(process) === "process" && (e = Ie.getAdapter("http")), e;
}
function rn(e, t, s) {
  if (u.isString(e))
    try {
      return (t || JSON.parse)(e), u.trim(e);
    } catch (n) {
      if (n.name !== "SyntaxError")
        throw n;
    }
  return (s || JSON.stringify)(e);
}
const Y = {
  transitional: lt,
  adapter: nn(),
  transformRequest: [function(t, s) {
    const n = s.getContentType() || "", r = n.indexOf("application/json") > -1, o = u.isObject(t);
    if (o && u.isHTMLForm(t) && (t = new FormData(t)), u.isFormData(t))
      return r && r ? JSON.stringify(at(t)) : t;
    if (u.isArrayBuffer(t) || u.isBuffer(t) || u.isStream(t) || u.isFile(t) || u.isBlob(t))
      return t;
    if (u.isArrayBufferView(t))
      return t.buffer;
    if (u.isURLSearchParams(t))
      return s.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let l;
    if (o) {
      if (n.indexOf("application/x-www-form-urlencoded") > -1)
        return Is(t, this.formSerializer).toString();
      if ((l = u.isFileList(t)) || n.indexOf("multipart/form-data") > -1) {
        const c = this.env && this.env.FormData;
        return de(
          l ? { "files[]": t } : t,
          c && new c(),
          this.formSerializer
        );
      }
    }
    return o || r ? (s.setContentType("application/json", !1), rn(t)) : t;
  }],
  transformResponse: [function(t) {
    const s = this.transitional || Y.transitional, n = s && s.forcedJSONParsing, r = this.responseType === "json";
    if (t && u.isString(t) && (n && !this.responseType || r)) {
      const i = !(s && s.silentJSONParsing) && r;
      try {
        return JSON.parse(t);
      } catch (l) {
        if (i)
          throw l.name === "SyntaxError" ? y.from(l, y.ERR_BAD_RESPONSE, this, null, this.response) : l;
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
    FormData: U.classes.FormData,
    Blob: U.classes.Blob
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
  Y.headers[t] = {};
});
u.forEach(["post", "put", "patch"], function(t) {
  Y.headers[t] = u.merge(sn);
});
function fe(e, t) {
  const s = this || Y, n = t || s, r = B.from(n.headers);
  let o = n.data;
  return u.forEach(e, function(l) {
    o = l.call(s, o, r.normalize(), t ? t.status : void 0);
  }), r.normalize(), o;
}
function dt(e) {
  return !!(e && e.__CANCEL__);
}
function me(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new ie();
}
function He(e) {
  return me(e), e.headers = B.from(e.headers), e.data = fe.call(
    e,
    e.transformRequest
  ), (e.adapter || Y.adapter)(e).then(function(n) {
    return me(e), n.data = fe.call(
      e,
      e.transformResponse,
      n
    ), n.headers = B.from(n.headers), n;
  }, function(n) {
    return dt(n) || (me(e), n && n.response && (n.response.data = fe.call(
      e,
      e.transformResponse,
      n.response
    ), n.response.headers = B.from(n.response.headers))), Promise.reject(n);
  });
}
function se(e, t) {
  t = t || {};
  const s = {};
  function n(a, m) {
    return u.isPlainObject(a) && u.isPlainObject(m) ? u.merge(a, m) : u.isPlainObject(m) ? u.merge({}, m) : u.isArray(m) ? m.slice() : m;
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
  return u.forEach(Object.keys(e).concat(Object.keys(t)), function(m) {
    const v = c[m] || r, O = v(m);
    u.isUndefined(O) && v !== l || (s[m] = O);
  }), s;
}
const ht = "1.1.3", Ce = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  Ce[e] = function(n) {
    return typeof n === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const xe = {};
Ce.transitional = function(t, s, n) {
  function r(o, i) {
    return "[Axios v" + ht + "] Transitional option '" + o + "'" + i + (n ? ". " + n : "");
  }
  return (o, i, l) => {
    if (t === !1)
      throw new y(
        r(i, " has been removed" + (s ? " in " + s : "")),
        y.ERR_DEPRECATED
      );
    return s && !xe[i] && (xe[i] = !0, console.warn(
      r(
        i,
        " has been deprecated since v" + s + " and will be removed in the near future"
      )
    )), t ? t(o, i, l) : !0;
  };
};
function on(e, t, s) {
  if (typeof e != "object")
    throw new y("options must be an object", y.ERR_BAD_OPTION_VALUE);
  const n = Object.keys(e);
  let r = n.length;
  for (; r-- > 0; ) {
    const o = n[r], i = t[o];
    if (i) {
      const l = e[o], c = l === void 0 || i(l, o, e);
      if (c !== !0)
        throw new y("option " + o + " must be " + c, y.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (s !== !0)
      throw new y("Unknown option " + o, y.ERR_BAD_OPTION);
  }
}
const _e = {
  assertOptions: on,
  validators: Ce
}, q = _e.validators;
class J {
  constructor(t) {
    this.defaults = t, this.interceptors = {
      request: new Be(),
      response: new Be()
    };
  }
  request(t, s) {
    typeof t == "string" ? (s = s || {}, s.url = t) : s = t || {}, s = se(this.defaults, s);
    const { transitional: n, paramsSerializer: r } = s;
    n !== void 0 && _e.assertOptions(n, {
      silentJSONParsing: q.transitional(q.boolean),
      forcedJSONParsing: q.transitional(q.boolean),
      clarifyTimeoutError: q.transitional(q.boolean)
    }, !1), r !== void 0 && _e.assertOptions(r, {
      encode: q.function,
      serialize: q.function
    }, !0), s.method = (s.method || this.defaults.method || "get").toLowerCase();
    const o = s.headers && u.merge(
      s.headers.common,
      s.headers[s.method]
    );
    o && u.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      function(f) {
        delete s.headers[f];
      }
    ), s.headers = new B(s.headers, o);
    const i = [];
    let l = !0;
    this.interceptors.request.forEach(function(f) {
      typeof f.runWhen == "function" && f.runWhen(s) === !1 || (l = l && f.synchronous, i.unshift(f.fulfilled, f.rejected));
    });
    const c = [];
    this.interceptors.response.forEach(function(f) {
      c.push(f.fulfilled, f.rejected);
    });
    let a, m = 0, v;
    if (!l) {
      const b = [He.bind(this), void 0];
      for (b.unshift.apply(b, i), b.push.apply(b, c), v = b.length, a = Promise.resolve(s); m < v; )
        a = a.then(b[m++], b[m++]);
      return a;
    }
    v = i.length;
    let O = s;
    for (m = 0; m < v; ) {
      const b = i[m++], f = i[m++];
      try {
        O = b(O);
      } catch (w) {
        f.call(this, w);
        break;
      }
    }
    try {
      a = He.call(this, O);
    } catch (b) {
      return Promise.reject(b);
    }
    for (m = 0, v = c.length; m < v; )
      a = a.then(c[m++], c[m++]);
    return a;
  }
  getUri(t) {
    t = se(this.defaults, t);
    const s = ut(t.baseURL, t.url);
    return ot(s, t.params, t.paramsSerializer);
  }
}
u.forEach(["delete", "get", "head", "options"], function(t) {
  J.prototype[t] = function(s, n) {
    return this.request(se(n || {}, {
      method: t,
      url: s,
      data: (n || {}).data
    }));
  };
});
u.forEach(["post", "put", "patch"], function(t) {
  function s(n) {
    return function(o, i, l) {
      return this.request(se(l || {}, {
        method: t,
        headers: n ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: o,
        data: i
      }));
    };
  }
  J.prototype[t] = s(), J.prototype[t + "Form"] = s(!0);
});
class Ae {
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
      token: new Ae(function(r) {
        t = r;
      }),
      cancel: t
    };
  }
}
function ln(e) {
  return function(s) {
    return e.apply(null, s);
  };
}
function an(e) {
  return u.isObject(e) && e.isAxiosError === !0;
}
function pt(e) {
  const t = new J(e), s = Qe(J.prototype.request, t);
  return u.extend(s, J.prototype, t, { allOwnKeys: !0 }), u.extend(s, t, null, { allOwnKeys: !0 }), s.create = function(r) {
    return pt(se(e, r));
  }, s;
}
const T = pt(Y);
T.Axios = J;
T.CanceledError = ie;
T.CancelToken = Ae;
T.isCancel = dt;
T.VERSION = ht;
T.toFormData = de;
T.AxiosError = y;
T.Cancel = T.CanceledError;
T.all = function(t) {
  return Promise.all(t);
};
T.spread = ln;
T.isAxiosError = an;
T.formToJSON = (e) => at(u.isHTMLForm(e) ? new FormData(e) : e);
const un = C({
  name: "CustomMultipleFileUpload",
  components: {
    CustomButton: Ot,
    CustomLoader: qt
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
    const t = j(null), s = () => {
      t.value.click();
    }, n = ({ target: a }) => {
      if (a && a.files.length > 0) {
        let m = new FormData();
        for (let v = 0; v < a.files.length; v++) {
          const O = a.files[v];
          m.append("files", O);
        }
        i(m), t.value.value = "";
      }
    }, r = j([]), o = j(!1), i = (a) => {
      console.log(a), o.value = !0, T.post(e.routePostFiles, a).then((m) => {
        m.data.success ? alert("success") : alert("error"), o.value = !1;
      }).catch((m) => {
        console.log(m), o.value = !1;
      });
    }, l = (a) => {
      r.value.length > 0 && r.value.splice(a, 1);
    }, c = () => {
      T.get(e.routeGetFiles).then((a) => {
        console.log("okk", a);
      }).catch((a) => {
        console.log(a);
      });
    };
    return Je(() => {
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
}), cn = { class: "generic-input" }, dn = {
  key: 0,
  class: "generic-input__label text-sm secondary-color"
}, hn = { class: "file-list" }, pn = ["onClick"], fn = /* @__PURE__ */ h("svg", {
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
], -1), mn = [
  fn
], bn = { class: "flexAligned" }, gn = { style: { "margin-right": "10px" } }, yn = {
  style: { "margin-right": "8px" },
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  "stroke-width": "1.5",
  stroke: "#FFFFFF",
  width: "16px",
  height: "16px"
}, vn = /* @__PURE__ */ h("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
}, null, -1), wn = [
  vn
];
function Sn(e, t, s, n, r, o) {
  const i = I("custom-button"), l = I("custom-loader");
  return d(), p("div", cn, [
    e.label ? (d(), p("label", dn, g(e.label), 1)) : E("", !0),
    h("ul", hn, [
      (d(!0), p(P, null, H(e.fileList, (c, a) => (d(), p("li", {
        class: "file-list-item",
        key: a
      }, [
        L(g(c.original_name + "." + c.extension) + " ", 1),
        h("div", {
          onClick: (m) => e.deleteFile(a),
          class: "item-cancel"
        }, mn, 8, pn)
      ]))), 128))
    ]),
    h("input", {
      type: "file",
      class: "generic-input__input-file--hidden",
      ref: "inputFileRef",
      onChange: t[0] || (t[0] = (...c) => e.handleInputChange && e.handleInputChange(...c)),
      multiple: ""
    }, null, 544),
    h("div", bn, [
      h("div", gn, [
        S(i, {
          label: "Carica",
          styleType: "primary",
          disabled: !1,
          onOnClick: e.handleClick
        }, {
          "slot-left": V(() => [
            (d(), p("svg", yn, wn))
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
const Vr = /* @__PURE__ */ A(un, [["render", Sn]]);
function be(e) {
  return e === 0 ? !1 : Array.isArray(e) && e.length === 0 ? !0 : !e;
}
function _n(e) {
  return (...t) => !e(...t);
}
function En(e, t) {
  return e === void 0 && (e = "undefined"), e === null && (e = "null"), e === !1 && (e = "false"), e.toString().toLowerCase().indexOf(t.trim()) !== -1;
}
function ft(e, t, s, n) {
  return t ? e.filter((r) => En(n(r, s), t)).sort((r, o) => n(r, s).length - n(o, s).length) : e;
}
function On(e) {
  return e.filter((t) => !t.$isLabel);
}
function ge(e, t) {
  return (s) => s.reduce((n, r) => r[e] && r[e].length ? (n.push({
    $groupLabel: r[t],
    $isLabel: !0
  }), n.concat(r[e])) : n, []);
}
function $n(e, t, s, n, r) {
  return (o) => o.map((i) => {
    if (!i[s])
      return console.warn("Options passed to vue-multiselect do not contain groups, despite the config."), [];
    const l = ft(i[s], e, t, r);
    return l.length ? {
      [n]: i[n],
      [s]: l
    } : [];
  });
}
const ze = (...e) => (t) => e.reduce((s, n) => n(s), t);
var kn = {
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
        return be(e) ? "" : t ? e[t] : e;
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
      return this.internalSearch ? s = this.groupValues ? this.filterAndFlat(s, t, this.label) : ft(s, t, this.label, this.customLabel) : s = this.groupValues ? ge(this.groupValues, this.groupLabel)(s) : s, s = this.hideSelected ? s.filter(_n(this.isSelected)) : s, this.taggable && t.length && !this.isExistingOption(t) && (this.tagPosition === "bottom" ? s.push({ isTag: !0, label: e }) : s.unshift({ isTag: !0, label: e })), s.slice(0, this.optionsLimit);
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
        $n(t, s, this.groupValues, this.groupLabel, this.customLabel),
        ge(this.groupValues, this.groupLabel)
      )(e);
    },
    flatAndStrip(e) {
      return ze(
        ge(this.groupValues, this.groupLabel),
        On
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
      if (be(e))
        return "";
      if (e.isTag)
        return e.label;
      if (e.$isLabel)
        return e.$groupLabel;
      const t = this.customLabel(e, this.label);
      return be(t) ? "" : t;
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
}, Cn = {
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
}, Re = {
  name: "vue-multiselect",
  mixins: [kn, Cn],
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
const An = {
  ref: "tags",
  class: "multiselect__tags"
}, Rn = { class: "multiselect__tags-wrap" }, Ln = { class: "multiselect__spinner" }, Tn = { key: 0 }, Fn = { class: "multiselect__option" }, Vn = { class: "multiselect__option" }, Pn = /* @__PURE__ */ L("No elements found. Consider changing the search query."), Bn = { class: "multiselect__option" }, Mn = /* @__PURE__ */ L("List is empty.");
function Nn(e, t, s, n, r, o) {
  return d(), F("div", {
    tabindex: e.searchable ? -1 : s.tabindex,
    class: [{ "multiselect--active": e.isOpen, "multiselect--disabled": s.disabled, "multiselect--above": o.isAbove }, "multiselect"],
    onFocus: t[14] || (t[14] = (i) => e.activate()),
    onBlur: t[15] || (t[15] = (i) => e.searchable ? !1 : e.deactivate()),
    onKeydown: [
      t[16] || (t[16] = N(k((i) => e.pointerForward(), ["self", "prevent"]), ["down"])),
      t[17] || (t[17] = N(k((i) => e.pointerBackward(), ["self", "prevent"]), ["up"]))
    ],
    onKeypress: t[18] || (t[18] = N(k((i) => e.addPointerElement(i), ["stop", "self"]), ["enter", "tab"])),
    onKeyup: t[19] || (t[19] = N((i) => e.deactivate(), ["esc"])),
    role: "combobox",
    "aria-owns": "listbox-" + e.id
  }, [
    _(e.$slots, "caret", { toggle: e.toggle }, () => [
      S("div", {
        onMousedown: t[1] || (t[1] = k((i) => e.toggle(), ["prevent", "stop"])),
        class: "multiselect__select"
      }, null, 32)
    ]),
    _(e.$slots, "clear", { search: e.search }),
    S("div", An, [
      _(e.$slots, "selection", {
        search: e.search,
        remove: e.removeElement,
        values: o.visibleValues,
        isOpen: e.isOpen
      }, () => [
        G(S("div", Rn, [
          (d(!0), F(P, null, H(o.visibleValues, (i, l) => _(e.$slots, "tag", {
            option: i,
            search: e.search,
            remove: e.removeElement
          }, () => [
            (d(), F("span", {
              class: "multiselect__tag",
              key: l
            }, [
              S("span", {
                textContent: g(e.getOptionLabel(i))
              }, null, 8, ["textContent"]),
              S("i", {
                tabindex: "1",
                onKeypress: N(k((c) => e.removeElement(i), ["prevent"]), ["enter"]),
                onMousedown: k((c) => e.removeElement(i), ["prevent"]),
                class: "multiselect__tag-icon"
              }, null, 40, ["onKeypress", "onMousedown"])
            ]))
          ])), 256))
        ], 512), [
          [Z, o.visibleValues.length > 0]
        ]),
        e.internalValue && e.internalValue.length > s.limit ? _(e.$slots, "limit", { key: 0 }, () => [
          S("strong", {
            class: "multiselect__strong",
            textContent: g(s.limitText(e.internalValue.length - s.limit))
          }, null, 8, ["textContent"])
        ]) : E("v-if", !0)
      ]),
      S(ae, { name: "multiselect__loading" }, {
        default: V(() => [
          _(e.$slots, "loading", {}, () => [
            G(S("div", Ln, null, 512), [
              [Z, s.loading]
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
        onFocus: t[3] || (t[3] = k((i) => e.activate(), ["prevent"])),
        onBlur: t[4] || (t[4] = k((i) => e.deactivate(), ["prevent"])),
        onKeyup: t[5] || (t[5] = N((i) => e.deactivate(), ["esc"])),
        onKeydown: [
          t[6] || (t[6] = N(k((i) => e.pointerForward(), ["prevent"]), ["down"])),
          t[7] || (t[7] = N(k((i) => e.pointerBackward(), ["prevent"]), ["up"])),
          t[9] || (t[9] = N(k((i) => e.removeLastElement(), ["stop"]), ["delete"]))
        ],
        onKeypress: t[8] || (t[8] = N(k((i) => e.addPointerElement(i), ["prevent", "stop", "self"]), ["enter"])),
        class: "multiselect__input",
        "aria-controls": "listbox-" + e.id
      }, null, 44, ["name", "id", "placeholder", "value", "disabled", "tabindex", "aria-controls"])) : E("v-if", !0),
      o.isSingleLabelVisible ? (d(), F("span", {
        key: 1,
        class: "multiselect__single",
        onMousedown: t[10] || (t[10] = k((...i) => e.toggle && e.toggle(...i), ["prevent"]))
      }, [
        _(e.$slots, "singleLabel", { option: o.singleValue }, () => [
          L(g(e.currentOptionLabel), 1)
        ])
      ], 32)) : E("v-if", !0),
      o.isPlaceholderVisible ? (d(), F("span", {
        key: 2,
        class: "multiselect__placeholder",
        onMousedown: t[11] || (t[11] = k((...i) => e.toggle && e.toggle(...i), ["prevent"]))
      }, [
        _(e.$slots, "placeholder", {}, () => [
          L(g(e.placeholder), 1)
        ])
      ], 32)) : E("v-if", !0)
    ], 512),
    S(ae, { name: "multiselect" }, {
      default: V(() => [
        G(S("div", {
          class: "multiselect__content-wrapper",
          onFocus: t[12] || (t[12] = (...i) => e.activate && e.activate(...i)),
          tabindex: "-1",
          onMousedown: t[13] || (t[13] = k(() => {
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
            _(e.$slots, "beforeList"),
            e.multiple && e.max === e.internalValue.length ? (d(), F("li", Tn, [
              S("span", Fn, [
                _(e.$slots, "maxElements", {}, () => [
                  L("Maximum of " + g(e.max) + " options selected. First remove a selected option to select another.", 1)
                ])
              ])
            ])) : E("v-if", !0),
            !e.max || e.internalValue.length < e.max ? (d(!0), F(P, { key: 1 }, H(e.filteredOptions, (i, l) => (d(), F("li", {
              class: "multiselect__element",
              key: l,
              id: e.id + "-" + l,
              role: i && (i.$isLabel || i.$isDisabled) ? null : "option"
            }, [
              i && (i.$isLabel || i.$isDisabled) ? E("v-if", !0) : (d(), F("span", {
                key: 0,
                class: [e.optionHighlight(l, i), "multiselect__option"],
                onClick: k((c) => e.select(i), ["stop"]),
                onMouseenter: k((c) => e.pointerSet(l), ["self"]),
                "data-select": i && i.isTag ? e.tagPlaceholder : o.selectLabelText,
                "data-selected": o.selectedLabelText,
                "data-deselect": o.deselectLabelText
              }, [
                _(e.$slots, "option", {
                  option: i,
                  search: e.search,
                  index: l
                }, () => [
                  S("span", null, g(e.getOptionLabel(i)), 1)
                ])
              ], 42, ["onClick", "onMouseenter", "data-select", "data-selected", "data-deselect"])),
              i && (i.$isLabel || i.$isDisabled) ? (d(), F("span", {
                key: 1,
                "data-select": e.groupSelect && o.selectGroupLabelText,
                "data-deselect": e.groupSelect && o.deselectGroupLabelText,
                class: [e.groupHighlight(l, i), "multiselect__option"],
                onMouseenter: k((c) => e.groupSelect && e.pointerSet(l), ["self"]),
                onMousedown: k((c) => e.selectGroup(i), ["prevent"])
              }, [
                _(e.$slots, "option", {
                  option: i,
                  search: e.search,
                  index: l
                }, () => [
                  S("span", null, g(e.getOptionLabel(i)), 1)
                ])
              ], 42, ["data-select", "data-deselect", "onMouseenter", "onMousedown"])) : E("v-if", !0)
            ], 8, ["id", "role"]))), 128)) : E("v-if", !0),
            G(S("li", null, [
              S("span", Vn, [
                _(e.$slots, "noResult", { search: e.search }, () => [
                  Pn
                ])
              ])
            ], 512), [
              [Z, s.showNoResults && e.filteredOptions.length === 0 && e.search && !s.loading]
            ]),
            G(S("li", null, [
              S("span", Bn, [
                _(e.$slots, "noOptions", {}, () => [
                  Mn
                ])
              ])
            ], 512), [
              [Z, s.showNoOptions && e.options.length === 0 && !e.search && !s.loading]
            ]),
            _(e.$slots, "afterList")
          ], 12, ["id"])
        ], 36), [
          [Z, e.isOpen]
        ])
      ]),
      _: 3
    })
  ], 42, ["tabindex", "aria-owns"]);
}
Re.render = Nn;
const Dn = C({
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
    VueMultiselect: Re
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
const jn = { class: "custom-multiselect" }, Un = {
  key: 0,
  for: "exampleFormControlSelect1",
  class: "custom-multiselect__label text-sm"
}, In = { class: "multiselect__tags-wrap" }, Hn = { class: "multiselect__tag" }, xn = ["onClick"];
function zn(e, t, s, n, r, o) {
  const i = I("vue-multiselect");
  return d(), p("div", jn, [
    e.label ? (d(), p("label", Un, g(e.label), 1)) : E("", !0),
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
      noResult: V(() => [
        L(" Nessun risultato. ")
      ]),
      tag: V((l) => [
        h("div", In, [
          h("span", Hn, [
            h("span", null, g(l.option.label), 1),
            h("i", {
              onClick: (c) => e.removeOption(l.option),
              tabindex: "1",
              class: "multiselect__tag-icon"
            }, null, 8, xn)
          ])
        ])
      ]),
      option: V((l) => [
        L(g(l.option.label), 1)
      ]),
      _: 1
    }, 8, ["modelValue", "options", "placeholder", "onSearchChange"])
  ]);
}
const Pr = /* @__PURE__ */ A(Dn, [["render", zn]]);
var qn = "Expected a function", qe = 0 / 0, Gn = "[object Symbol]", Jn = /^\s+|\s+$/g, Kn = /^[-+]0x[0-9a-f]+$/i, Wn = /^0b[01]+$/i, Qn = /^0o[0-7]+$/i, Yn = parseInt, Xn = typeof re == "object" && re && re.Object === Object && re, Zn = typeof self == "object" && self && self.Object === Object && self, ei = Xn || Zn || Function("return this")(), ti = Object.prototype, si = ti.toString, ni = Math.max, ii = Math.min, ye = function() {
  return ei.Date.now();
};
function ri(e, t, s) {
  var n, r, o, i, l, c, a = 0, m = !1, v = !1, O = !0;
  if (typeof e != "function")
    throw new TypeError(qn);
  t = Ge(t) || 0, Ee(s) && (m = !!s.leading, v = "maxWait" in s, o = v ? ni(Ge(s.maxWait) || 0, t) : o, O = "trailing" in s ? !!s.trailing : O);
  function b($) {
    var z = n, X = r;
    return n = r = void 0, a = $, i = e.apply(X, z), i;
  }
  function f($) {
    return a = $, l = setTimeout(R, t), m ? b($) : i;
  }
  function w($) {
    var z = $ - c, X = $ - a, Te = t - z;
    return v ? ii(Te, o - X) : Te;
  }
  function M($) {
    var z = $ - c, X = $ - a;
    return c === void 0 || z >= t || z < 0 || v && X >= o;
  }
  function R() {
    var $ = ye();
    if (M($))
      return D($);
    l = setTimeout(R, w($));
  }
  function D($) {
    return l = void 0, O && n ? b($) : (n = r = void 0, i);
  }
  function K() {
    l !== void 0 && clearTimeout(l), a = 0, n = c = r = l = void 0;
  }
  function he() {
    return l === void 0 ? i : D(ye());
  }
  function pe() {
    var $ = ye(), z = M($);
    if (n = arguments, r = this, c = $, z) {
      if (l === void 0)
        return f(c);
      if (v)
        return l = setTimeout(R, t), b(c);
    }
    return l === void 0 && (l = setTimeout(R, t)), i;
  }
  return pe.cancel = K, pe.flush = he, pe;
}
function Ee(e) {
  var t = typeof e;
  return !!e && (t == "object" || t == "function");
}
function oi(e) {
  return !!e && typeof e == "object";
}
function li(e) {
  return typeof e == "symbol" || oi(e) && si.call(e) == Gn;
}
function Ge(e) {
  if (typeof e == "number")
    return e;
  if (li(e))
    return qe;
  if (Ee(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = Ee(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = e.replace(Jn, "");
  var s = Wn.test(e);
  return s || Qn.test(e) ? Yn(e.slice(2), s ? 2 : 8) : Kn.test(e) ? qe : +e;
}
var ai = ri;
const ui = C({
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
    VueMultiselect: Re
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
      e && (this.loading = !0, T.get(this.optionsSearchRoute, {
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
    debouncedSearch: ai(function(e) {
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
}), ci = { class: "custom-multiselect" }, di = {
  key: 0,
  class: "custom-multiselect__label text-sm"
}, hi = { class: "multiselect__tags-wrap" }, pi = { class: "multiselect__tag" }, fi = ["onClick"];
function mi(e, t, s, n, r, o) {
  const i = I("vue-multiselect");
  return d(), p("div", ci, [
    e.label ? (d(), p("label", di, g(e.label), 1)) : E("", !0),
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
      noResult: V(() => [
        L(" Nessun risultato. ")
      ]),
      tag: V((l) => [
        h("div", hi, [
          h("span", pi, [
            h("span", null, g(l.option.label), 1),
            h("i", {
              onClick: (c) => e.removeOption(l.option),
              tabindex: "1",
              class: "multiselect__tag-icon"
            }, null, 8, fi)
          ])
        ])
      ]),
      option: V((l) => [
        L(g(l.option.label), 1)
      ]),
      _: 1
    }, 8, ["modelValue", "options", "placeholder", "onSearchChange", "loading"])
  ]);
}
const Br = /* @__PURE__ */ A(ui, [["render", mi]]), bi = C({
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
}), gi = { class: "custom-select" }, yi = {
  key: 0,
  for: "exampleFormControlSelect1",
  class: "custom-select__label text-sm"
}, vi = ["name", "id", "disabled"], wi = {
  selected: "",
  value: "0"
}, Si = ["value", "selected"];
function _i(e, t, s, n, r, o) {
  return d(), p("div", gi, [
    e.label ? (d(), p("label", yi, g(e.label), 1)) : E("", !0),
    h("select", {
      name: e.name,
      class: "custom-select__select",
      id: "select_" + e.name,
      onChange: t[0] || (t[0] = (...i) => e.handleSelectChange && e.handleSelectChange(...i)),
      disabled: e.disabled
    }, [
      h("option", wi, g(e.placeholder), 1),
      (d(!0), p(P, null, H(e.options, (i, l) => (d(), p("option", {
        key: l,
        value: i.value,
        selected: i.value == e.value
      }, g(i.label), 9, Si))), 128))
    ], 40, vi)
  ]);
}
const Mr = /* @__PURE__ */ A(bi, [["render", _i]]), Ei = C({
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
}), Oi = { class: "custom-radio-group" }, $i = ["name", "id", "value", "disabled", "checked"], ki = /* @__PURE__ */ h("span", { class: "custom-radio-group__single-radio__radio" }, null, -1), Ci = ["for"];
function Ai(e, t, s, n, r, o) {
  return d(), p("div", Oi, [
    (d(!0), p(P, null, H(e.options, (i) => (d(), p("div", {
      key: i.id,
      class: W([{ disabled: i.disabled, checked: i.value == e.value }, "custom-radio-group__single-radio"])
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
      }, null, 40, $i),
      ki,
      h("label", {
        class: "custom-radio-group__single-radio__radio-label",
        for: i.id
      }, g(i.label), 9, Ci)
    ], 2))), 128))
  ]);
}
const Nr = /* @__PURE__ */ A(Ei, [["render", Ai]]), Ri = C({
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
}), Li = { class: "generic-input" }, Ti = {
  key: 0,
  class: "generic-input__label text-sm secondary-color"
};
function Fi(e, t, s, n, r, o) {
  return d(), p("div", Li, [
    e.label ? (d(), p("label", Ti, g(e.label), 1)) : E("", !0),
    G(h("textarea", We(e.$attrs, {
      "onUpdate:modelValue": t[0] || (t[0] = (i) => e.computedValue = i),
      class: "generic-input__input " + e.classes
    }), null, 16), [
      [mt, e.computedValue]
    ])
  ]);
}
const Dr = /* @__PURE__ */ A(Ri, [["render", Fi]]), Vi = C({
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
}), Pi = { class: "generic-input" }, Bi = {
  key: 0,
  class: "generic-input__label text-sm secondary-color"
}, Mi = { class: "input-container" }, Ni = {
  key: 1,
  class: "generic-input__read-only"
};
function Di(e, t, s, n, r, o) {
  return d(), p("div", Pi, [
    e.label ? (d(), p("label", Bi, g(e.label), 1)) : E("", !0),
    h("div", Mi, [
      _(e.$slots, "prepend"),
      e.readOnly ? E("", !0) : G((d(), p("input", We({ key: 0 }, e.$attrs, {
        "onUpdate:modelValue": t[0] || (t[0] = (i) => e.computedValue = i),
        class: "generic-input__input " + e.classes
      }), null, 16)), [
        [bt, e.computedValue]
      ])
    ]),
    e.readOnly ? (d(), p("div", Ni, g(e.computedValue), 1)) : E("", !0)
  ]);
}
const jr = /* @__PURE__ */ A(Vi, [["render", Di]]), ji = C({
  name: "Breadcrumbs",
  props: {
    path_breadcrumbs: {
      type: Array,
      required: !0,
      default: []
    }
  }
}), Ui = { class: "text-secondary text-xl" }, Ii = {
  key: 0,
  class: "font-bold"
}, Hi = { key: 1 };
function xi(e, t, s, n, r, o) {
  const i = I("router-link");
  return d(), p("div", Ui, [
    (d(!0), p(P, null, H(e.path_breadcrumbs, (l, c) => (d(), p(P, { key: c }, [
      c === e.path_breadcrumbs.length - 1 ? (d(), p("span", Ii, g(l.label), 1)) : (d(), p(P, { key: 1 }, [
        l.path ? (d(), F(i, {
          key: 0,
          to: l.path,
          class: "cursor-pointer hover:underline"
        }, {
          default: V(() => [
            L(g(l.label), 1)
          ]),
          _: 2
        }, 1032, ["to"])) : (d(), p("span", Hi, g(l.label), 1)),
        L(" / ")
      ], 64))
    ], 64))), 128))
  ]);
}
const zi = /* @__PURE__ */ A(ji, [["render", xi]]), qi = C({
  name: "FormSeparator"
}), Gi = {
  style: { width: "calc(100% + 2 * 24px)", transform: "translateX(-24px)" },
  class: "border-secondaryLight mb-8 mt-9"
};
function Ji(e, t, s, n, r, o) {
  return d(), p("hr", Gi);
}
const Ur = /* @__PURE__ */ A(qi, [["render", Ji]]), Ki = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIwAAAAnCAYAAADdG6ATAAAACXBIWXMAAAsSAAALEgHS3X78AAAJwElEQVR4nO1ce4hUVRj/NnYDdydokzBIM9sgCysjYZXKu4KGGjGOINvVXRQTIjbJlXA1GiFHcnf/8MEm+kcKPmKSJcchWgsFHQpU2EotEsPVorWSaPWPaQRXmviW31nPnjnnvmb2PT8YZu495557Ht/53mdKstksFQLpmDWViKJE9CIRPS41eYGI9oSiqSMFeVERw4q8CSYds9YRURMRPeJS9RYRzQxFU78Vl3z0ojRoz9Mxq5aI9hLRgx4f4XqXiKh8jM/pmMZ9QQaXjlmniegzA7Ewy+oiomYiSillE9Ix65PxPumjGb44DPSU8w6Esj8UTa1Rnrmp1H9yvE3yWIJnggGxsEiZoCl20k9CfufLjoS3E9EyIppERGVE1EtEN4ioLZ5Itkr17qDchMPxRLIedS1WvkGwcpvt8URyvR0J/05Ekz107wn0rYXbiCeS92v6f4iIFhNRJW7xpukQfVHq3sE6bJTHphljk6Gc31WHDVsVTySv+W0DdTZgTI5j98NhTMTSFYqmtFwD4kd9xx7TC+xIeBoRdRLRQ0pRGRazxY6EV8UTyWek+4TJKnFolyf0oFJHtNloR8J/mZ51aXsAsYIoOyQ9TVgUPJ46OxJeyoQUTyRTmjaa7Uj4nFKW8w4NanGL+7gbhOrYz3zgiWDSMetKAGJhjrRauX3Lxbz+CZPNE/0pEW3mHQNC2kJEK4joV81z2t0pYRcmtJuI5opdiF21Cs8OeN6OhLOmtu1I2PQeQSzMvT4Qz+E9W1HGdSo0z5Y4lGmBdgW35O/5Xp91QjyRNG4+V6UXXKJKU+RGLJeUnckL8LrpPWCtgljmMfsWC8vfYOfMcnU7yA1CNLTLLJsXVOJWeUHp/wKZyPB7AcrKUVcHLvvZRz+a8M2bMMNEA3E+aHAkmHTMelnDJRi3HYiFWaTKkXii7FA09a3D6wQh6NhyH3Ty2SNuoto7PKHgWIWGY/9x75wyVhnd+P20A0H1A+JPiO7NkkW6chDG1o9SLPBZg8L6hUZ+8+K/qlYEVzlARJZSdJvruxALSVzgjKkCdBGe/MNKEct/VWHrjieSU/D7XegwzLYbobdkMMkNeRCir/6jbLZUV0Ybi0cmGOg7X2vGKUPogt0Q2zz+RUxEPE8uzzpCEscy+hRm5jBx1gvSMSuTjlk/pGPWNl58iCKd+dwiLz5zIfhlrmmIJRWKpso9EIuXQTCxHMLHFzB5LFaPg3UTxAdPcJcgxOEGxGMPurHfxAlxfzou2+keBxPPvj9YQymFKfUeRMhMfDYa6jO3uAECYQtjqkFxZsfdKp+EchMsdiERrfc5DjelV4izPlGACV/LIgpch5XiwDsSEP2f41BnjlTXBLakTqFfnYY6W8D5s+BMAh0wsafzGINyTkelNxRNbQpFU9y5fSAIJzBR7QAnqVKI5S6ceq+wfhOAq3Tge/pg73go0UyUH+OWTkT4heh/NfSLAcC9atzrMLUNTiE2rOpeEJBN6assQiBGVkj3dxdgTDnoV3rZQ8vig4jewOI74S6cdcxJjvEzTHShaOqFoOIHVlAGgz3Iip9gyfheHnSQdiT8DzvmZEJEm8tw6bTjg/T/BExe8S7+fQJlGZ0DT2mrFeJTN5YNkl8lo3xuw8SmQpnYKnTi5LrmPvtPCrEL3TBDctzVQflTH+nRtKFTehlnQWiVaJOJUHXgZaEUFwKLJV8MOxmb0aZ4X8ZgIeWA3QcG77MwpWWlvh/YCF3CxAYndZuneqUNUwpDvc6sbtPc+9B1hAUARMVEiL1uabdkcN2EcgFRbpS5kONC4e2RuGcvfEXzDBZFr+aeYx0WJ/FEsgL6kEzYPQhTVGhMbuN7QBD97UCsVYLItWIb4xXmuzCxXefJK3LyYdhaUnwoQ8VdihgFGMBh4KhTQwCfFxeyCAFVJL2mXGfVdIUixjdUglF9CFfH+wQVMRBuwcdul/IixhncCOZYkSCKkBE4CVwFTg8sYSdYKJqK5NOWkrFWArP6IvtUTO5u+CweNWWd0b1MvpVSu72IrH8km9YGP4So+7YuGi35P67r/CMu7eqyCbmvjU5u+uGAymHUSOskL33ioKUUMliChCvf4Elnryxc3L8Q0U44qi7CrX5ZF5CDf2Kyk0scRNiIxRHtHsEYd2keOYs6TVJdjp2d0rn+8V5+/2RDualdEZ5oUdIaHg4yh4MNlcPsVQKPToG0PiCqPVO5PdFQ3Q3s5X0AzjR5F7diEY4S0WOIjMtoxk49ieClDn1pHPFEMmdMhqjwFU1As96OhP+FY07lIgvhHJyP/pjmTtcu5xR3wLO9uUDpFoOCARwGOTFyfutLTi9Nx6wEEb1ZiI5hd7H7frUpAYm9vGoZFrsaxMJu7xJD1lkZREoOfC7QUYg+uQ/bwV0a0I/qAElaDfhe6/O5IYVO6ZVjDaU68YIcmD+hs+hwOsAgFiM+4jfNQIT6G6SckLc09fh+bYEi4apewe/rAeE1oHyLnwZHMleRkUMwoWhqJ5Q3gap0zOrlHBh8mFC+cTkauy5AXyoDElqtyDrD9QHkxqqEMQtiiwOQdzh3Vo4o+0CNlIQlErvKxUZDP7qlFARPkLji9wH6NGTQmtXI15WJphQKreXhDHVXwPPTrtYAFnq7dC1C/f0BU0Rn2RrZJj+LwGYFFM3voMCyovmfF8JhHcqOhM9AuZaDsdtwPknWS9oQLfbS7jSI43UBOeyQwuiHAdHsM+TGZJEs1agpaw84gIyHU5FlivXQpFksQrRWa63gpMAcEE8N0jmaNXXrRGISzGHmfvzPFDuk4yPCOjupvgPcrIlyobZ7FZFn7vNcXzM2DHD0wyCOtAZByVm43SmSpDTnpDn2tCngMC4KZdGLPJez5h3yN5ysFZHdNgXPh5Wz4Gz+JqRr3WkAke+yyNAHTsi2lOfUdmuQW5wYDXqMJ8cdCESXSadyhBt59GU5xGCnHQnP8jB5e8DpTPnHa6WUyD4rzHBUVXAW9fSjzvxVUQ19RZdDRCAo7qd89klttxVOx612JNw+0okmX0/v88r15aAN4ajEPKQycib/OWknPitlqv0Ik5WPYxx3OCv8BxRc1g+YE67AUdWUpFzXwG/S44E41PYPQe+qM52jsiNh9njP9sA152LuvlSIa8Qh0N99SLigXAfy8Apg4p8ioq+I6Dns0BZYHMy9arCwu8FdGhzaOozdvxTtVkHsWWizBb9PKll8An+7dHcplFQtsQDL0U/Z+5zTLohpNQ6xbTDVGwnI6x+oED/aId1qhFlexBhFXhwGxCHL/hlFQhnbyFckEY5+nsfv4p8FjXEU8l802fSmQhyLLWKEgoj+B/KnMPnqbVqPAAAAAElFTkSuQmCC", Wi = C({
  name: "HeaderNavigation",
  components: {
    Transition: ae
  },
  props: {
    menuStructure: {
      type: Array,
      required: !0
    }
  },
  setup(e) {
    const t = Ki, s = j(!1), n = j(null), r = (a, m) => {
      e.menuStructure[a].children.length > 0 && (n.value && n.value.id === e.menuStructure[a].id ? (n.value = null, s.value = !1) : (n.value = e.menuStructure[a], s.value = !0));
    }, o = j(null), i = j(null), l = (a) => {
      i.value && !i.value.contains(a.target) && !o.value.contains(a.target) && (n.value = null, s.value = !1);
    }, c = () => {
      s.value = !1, n.value = null;
    };
    return Je(() => {
      document.addEventListener("click", l);
    }), gt(() => {
      document.removeEventListener("click", l);
    }), {
      siteLogoImage: t,
      showSubMenu: r,
      currentMenu: n,
      isVisibleSubMenu: s,
      menuElementRef: i,
      navigationRef: o,
      forceClose: c
    };
  }
});
const Le = (e) => (vt("data-v-918f73a8"), e = e(), wt(), e), Qi = { class: "header-navigation py-5 container mx-auto" }, Yi = { class: "flex items-center justify-between mb-5" }, Xi = ["src"], Zi = /* @__PURE__ */ yt('<div class="flex items-center" data-v-918f73a8><div class="cursor-pointer" data-v-918f73a8><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6" data-v-918f73a8><path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" data-v-918f73a8></path></svg></div><div class="ml-7 cursor-pointer" data-v-918f73a8><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6" data-v-918f73a8><path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" data-v-918f73a8></path></svg></div><div class="cursor-pointer ml-7 flex items-center" data-v-918f73a8><div class="h-12 w-12 rounded-full bg-gray flex items-center justify-center" data-v-918f73a8><div class="font-regular text-xl" data-v-918f73a8>EP</div></div><div class="ml-1" data-v-918f73a8><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-3 h-3" data-v-918f73a8><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" data-v-918f73a8></path></svg></div></div></div>', 1), er = {
  ref: "navigationRef",
  class: "text-secondary text-base font-medium relative"
}, tr = { class: "flex" }, sr = ["onClick"], nr = {
  key: 2,
  class: "ml-1 text-secondary"
}, ir = {
  key: 0,
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  "stroke-width": "1.5",
  stroke: "currentColor",
  class: "w-3 h-3"
}, rr = /* @__PURE__ */ Le(() => /* @__PURE__ */ h("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M4.5 15.75l7.5-7.5 7.5 7.5"
}, null, -1)), or = [
  rr
], lr = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  "stroke-width": "1.5",
  stroke: "currentColor",
  class: "w-3 h-3"
}, ar = /* @__PURE__ */ Le(() => /* @__PURE__ */ h("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M19.5 8.25l-7.5 7.5-7.5-7.5"
}, null, -1)), ur = [
  ar
], cr = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  "stroke-width": "1.5",
  stroke: "currentColor",
  class: "w-3 h-3"
}, dr = /* @__PURE__ */ Le(() => /* @__PURE__ */ h("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M19.5 8.25l-7.5 7.5-7.5-7.5"
}, null, -1)), hr = [
  dr
], pr = {
  key: 0,
  ref: "menuElementRef",
  class: "text-black absolute w-full shadow-md p-6 bg-white top-7 left-0 z-50"
}, fr = { class: "font-bold mb-4" }, mr = { class: "flex flex-wrap" }, br = { key: 1 };
function gr(e, t, s, n, r, o) {
  const i = I("router-link");
  return d(), p("header", Qi, [
    h("div", Yi, [
      S(i, { to: { name: "home" } }, {
        default: V(() => [
          h("div", null, [
            h("img", {
              src: e.siteLogoImage,
              alt: "gaspari-logo"
            }, null, 8, Xi)
          ])
        ]),
        _: 1
      }),
      Zi
    ]),
    h("nav", er, [
      h("ul", tr, [
        (d(!0), p(P, null, H(e.menuStructure, (l, c) => (d(), p("li", {
          key: c,
          class: "mr-6 flex items-center cursor-pointer hover:text-secondaryHover transition select-none",
          onClick: (a) => e.showSubMenu(c, a)
        }, [
          l.href && l.children.length === 0 ? (d(), F(i, {
            key: 0,
            to: l.href,
            onClick: e.forceClose
          }, {
            default: V(() => [
              h("span", {
                class: W({ "text-secondaryHover": e.currentMenu && e.currentMenu.id === l.id })
              }, g(l.label), 3)
            ]),
            _: 2
          }, 1032, ["to", "onClick"])) : (d(), p("span", {
            key: 1,
            class: W({ "text-secondaryHover": e.currentMenu && e.currentMenu.id === l.id })
          }, g(l.label), 3)),
          l.children.length > 0 ? (d(), p("div", nr, [
            e.currentMenu ? (d(), p(P, { key: 0 }, [
              e.currentMenu.id === l.id ? (d(), p("svg", ir, or)) : (d(), p("svg", lr, ur))
            ], 64)) : (d(), p("svg", cr, hr))
          ])) : E("", !0)
        ], 8, sr))), 128))
      ]),
      S(ae, null, {
        default: V(() => [
          e.isVisibleSubMenu && e.currentMenu ? (d(), p("div", pr, [
            h("div", fr, g(e.currentMenu.label), 1),
            h("ul", mr, [
              (d(!0), p(P, null, H(e.currentMenu.children, (l, c) => (d(), p("li", {
                key: c,
                class: "w-1/4 mb-3 cursor-pointer transition hover:underline"
              }, [
                l.href && l.children.length === 0 ? (d(), F(i, {
                  key: 0,
                  onClick: e.forceClose,
                  to: l.href
                }, {
                  default: V(() => [
                    L(g(l.label), 1)
                  ]),
                  _: 2
                }, 1032, ["onClick", "to"])) : (d(), p("div", br, g(l.label), 1))
              ]))), 128))
            ])
          ], 512)) : E("", !0)
        ]),
        _: 1
      })
    ], 512)
  ]);
}
const yr = /* @__PURE__ */ A(Wi, [["render", gr], ["__scopeId", "data-v-918f73a8"]]), vr = C({
  name: "FormContainer",
  components: {
    Breadcrumbs: zi
  },
  props: {
    path_breadcrumbs: {
      type: Array,
      required: !1,
      default: []
    },
    title: {
      type: String,
      required: !1
    }
  }
}), wr = {
  key: 0,
  class: "mb-6 ml-1"
}, Sr = {
  key: 1,
  class: "mb-3 ml-1 font-semibold text-lg uppercase"
}, _r = { class: "form_container p-6 bg-white rounded-lg shadow overflow-x-hidden" };
function Er(e, t, s, n, r, o) {
  const i = I("breadcrumbs");
  return d(), p(P, null, [
    e.path_breadcrumbs.length > 0 ? (d(), p("div", wr, [
      S(i, { path_breadcrumbs: e.path_breadcrumbs }, null, 8, ["path_breadcrumbs"])
    ])) : E("", !0),
    _(e.$slots, "form-buttons-top"),
    e.title ? (d(), p("h3", Sr, g(e.title), 1)) : E("", !0),
    h("div", _r, [
      _(e.$slots, "form-content")
    ]),
    _(e.$slots, "form-buttons-bottom")
  ], 64);
}
const Ir = /* @__PURE__ */ A(vr, [["render", Er]]), Or = C({
  name: "LayoutBase",
  components: {
    HeaderNavigation: yr
  },
  props: {
    menuStructure: {
      type: Array,
      required: !0
    }
  }
}), $r = { class: "layout" }, kr = { class: "main-content" }, Cr = { class: "container mx-auto py-7" };
function Ar(e, t, s, n, r, o) {
  const i = I("header-navigation");
  return d(), p("div", $r, [
    S(i, { menuStructure: e.menuStructure }, null, 8, ["menuStructure"]),
    h("main", kr, [
      h("div", Cr, [
        _(e.$slots, "layout-content")
      ])
    ])
  ]);
}
const Hr = /* @__PURE__ */ A(Or, [["render", Ar]]);
export {
  zi as Breadcrumbs,
  Ot as CustomButton,
  Rt as CustomCheckbox,
  Lr as CustomFileUpload,
  qt as CustomLoader,
  Tr as CustomModal,
  Fr as CustomMultiCheckbox,
  Pr as CustomMultiSelect,
  Br as CustomMultiSelectAsync,
  Vr as CustomMultipleFileUpload,
  Nr as CustomRadioGroup,
  Mr as CustomSelect,
  Dr as CustomTextArea,
  Ir as FormContainer,
  Ur as FormSeparator,
  jr as GenericInput,
  yr as HeaderNavigation,
  Hr as LayoutBase
};
