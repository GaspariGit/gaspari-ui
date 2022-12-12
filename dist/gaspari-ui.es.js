import { defineComponent as R, openBlock as p, createElementBlock as h, normalizeClass as ee, renderSlot as C, createElementVNode as c, toDisplayString as w, createTextVNode as N, ref as k, createCommentVNode as S, Fragment as D, resolveComponent as j, renderList as G, createBlock as E, onMounted as Pe, createVNode as f, withCtx as B, withKeys as z, withModifiers as F, withDirectives as q, vShow as X, Transition as J, computed as et, mergeProps as tt, vModelText as Ae, vModelDynamic as kt, watch as Ot, pushScopeId as oe, popScopeId as le, onBeforeUnmount as Ct, createStaticVNode as Et, withScopeId as Pt } from "vue";
const At = R({
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
}), L = (e, t) => {
  const s = e.__vccOpts || e;
  for (const [n, r] of t)
    s[n] = r;
  return s;
}, Tt = ["disabled"];
function Ft(e, t, s, n, r, o) {
  return p(), h("button", {
    class: ee(["custom-button", e.assignStyle()]),
    disabled: e.disabled,
    onClick: t[0] || (t[0] = (...i) => e.handleClick && e.handleClick(...i))
  }, [
    C(e.$slots, "slot-left"),
    c("span", null, w(e.label), 1),
    C(e.$slots, "slot-right")
  ], 10, Tt);
}
const st = /* @__PURE__ */ L(At, [["render", Ft]]), Rt = R({
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
}), Lt = ["checked", "disabled", "name"], Vt = /* @__PURE__ */ c("span", { class: "checkmark" }, null, -1);
function Mt(e, t, s, n, r, o) {
  return p(), h("label", {
    class: ee(["wrapper flex items-center", { disabled: e.disabled }])
  }, [
    N(w(e.label) + " ", 1),
    c("input", {
      class: "checkbox",
      type: "checkbox",
      checked: e.checked,
      onChange: t[0] || (t[0] = (...i) => e.updateInput && e.updateInput(...i)),
      disabled: e.disabled,
      name: e.name
    }, null, 40, Lt),
    Vt
  ], 2);
}
const Bt = /* @__PURE__ */ L(Rt, [["render", Mt]]), Nt = R({
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
    const s = k(null), n = () => {
      s.value.click();
    }, r = k(null);
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
}), Dt = { class: "generic-input" }, jt = {
  key: 0,
  class: "generic-input__label text-sm secondary-color"
}, It = { class: "input-container" }, Ut = { class: "generic-input__input-file" }, xt = { class: "generic-input__input-file__file" }, Ht = {
  key: 0,
  class: "generic-input__input-file__file__placeholder"
}, zt = {
  key: 1,
  class: "generic-input__input-file__file__file-name"
}, qt = /* @__PURE__ */ c("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  "stroke-width": "2.5",
  stroke: "#FFFFFF",
  class: "cancel"
}, [
  /* @__PURE__ */ c("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    d: "M6 18L18 6M6 6l12 12"
  })
], -1), Gt = [
  qt
];
function Jt(e, t, s, n, r, o) {
  return p(), h("div", Dt, [
    e.label ? (p(), h("label", jt, w(e.label), 1)) : S("", !0),
    c("div", It, [
      C(e.$slots, "prepend"),
      c("input", {
        type: "file",
        class: "generic-input__input-file--hidden",
        ref: "inputFileRef",
        onChange: t[0] || (t[0] = (...i) => e.handleInputChange && e.handleInputChange(...i))
      }, null, 544),
      c("div", Ut, [
        c("div", {
          class: "generic-input__input-file__button",
          onClick: t[1] || (t[1] = (...i) => e.handleButtonClick && e.handleButtonClick(...i))
        }, " Sfoglia... "),
        c("div", xt, [
          e.currentFile ? (p(), h("div", zt, [
            N(w(e.currentFile.name) + " ", 1),
            c("div", {
              onClick: t[2] || (t[2] = (...i) => e.deleteFile && e.deleteFile(...i)),
              class: "generic-input__input-file__file__file-name__cancel"
            }, Gt)
          ])) : (p(), h("div", Ht, w(e.placeholder), 1))
        ])
      ])
    ])
  ]);
}
const fl = /* @__PURE__ */ L(Nt, [["render", Jt]]), Qt = R({
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
}), Kt = /* @__PURE__ */ c("span", { class: "sr-only" }, "Loading...", -1), Wt = [
  Kt
];
function Yt(e, t, s, n, r, o) {
  return e.loading ? (p(), h("div", {
    key: 0,
    class: ee(["spinner-border", e.size]),
    role: "status"
  }, Wt, 2)) : S("", !0);
}
const Te = /* @__PURE__ */ L(Qt, [["render", Yt]]), Xt = R({
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
}), Zt = {
  key: 0,
  class: "custom-modal"
}, es = { class: "modal-background" }, ts = { class: "modal-container" }, ss = { class: "modal-header" }, ns = { class: "modal-title" }, is = /* @__PURE__ */ c("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  "stroke-width": "1.5",
  width: "24px",
  height: "24px"
}, [
  /* @__PURE__ */ c("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    d: "M6 18L18 6M6 6l12 12"
  })
], -1), rs = [
  is
], os = { class: "modal-body" }, ls = { class: "modal-footer" };
function as(e, t, s, n, r, o) {
  return e.isOpen ? (p(), h("div", Zt, [
    c("div", es, [
      c("div", ts, [
        c("div", ss, [
          c("div", ns, [
            e.withoutTitle ? S("", !0) : (p(), h(D, { key: 0 }, [
              N(w(e.modalTitle), 1)
            ], 64))
          ]),
          c("div", {
            class: "modal-close",
            onClick: t[0] || (t[0] = (...i) => e.emitCloseModal && e.emitCloseModal(...i))
          }, rs)
        ]),
        c("div", os, [
          C(e.$slots, "modal-body")
        ]),
        c("div", ls, [
          C(e.$slots, "modal-footer")
        ])
      ])
    ])
  ])) : S("", !0);
}
const ml = /* @__PURE__ */ L(Xt, [["render", as]]), us = R({
  name: "CustomMultiCheckbox",
  components: {
    CustomCheckbox: Bt
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
function cs(e, t, s, n, r, o) {
  const i = j("custom-checkbox");
  return p(), h("div", null, [
    (p(!0), h(D, null, G(e.options, (l, d) => (p(), E(i, {
      key: d,
      label: l.label,
      checked: e.value.includes(l.id),
      "onUpdate:checked": (a) => e.check(l.id, a)
    }, null, 8, ["label", "checked", "onUpdate:checked"]))), 128))
  ]);
}
const gl = /* @__PURE__ */ L(us, [["render", cs]]);
function nt(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: it } = Object.prototype, { getPrototypeOf: Fe } = Object, Re = ((e) => (t) => {
  const s = it.call(t);
  return e[s] || (e[s] = s.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), K = (e) => (e = e.toLowerCase(), (t) => Re(t) === e), fe = (e) => (t) => typeof t === e, { isArray: ae } = Array, Se = fe("undefined");
function ds(e) {
  return e !== null && !Se(e) && e.constructor !== null && !Se(e.constructor) && te(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const rt = K("ArrayBuffer");
function ps(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && rt(e.buffer), t;
}
const hs = fe("string"), te = fe("function"), ot = fe("number"), lt = (e) => e !== null && typeof e == "object", fs = (e) => e === !0 || e === !1, pe = (e) => {
  if (Re(e) !== "object")
    return !1;
  const t = Fe(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}, ms = K("Date"), gs = K("File"), bs = K("Blob"), ys = K("FileList"), vs = (e) => lt(e) && te(e.pipe), ws = (e) => {
  const t = "[object FormData]";
  return e && (typeof FormData == "function" && e instanceof FormData || it.call(e) === t || te(e.toString) && e.toString() === t);
}, _s = K("URLSearchParams"), Ss = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function me(e, t, { allOwnKeys: s = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let n, r;
  if (typeof e != "object" && (e = [e]), ae(e))
    for (n = 0, r = e.length; n < r; n++)
      t.call(null, e[n], n, e);
  else {
    const o = s ? Object.getOwnPropertyNames(e) : Object.keys(e), i = o.length;
    let l;
    for (n = 0; n < i; n++)
      l = o[n], t.call(null, e[l], l, e);
  }
}
function $e() {
  const e = {}, t = (s, n) => {
    pe(e[n]) && pe(s) ? e[n] = $e(e[n], s) : pe(s) ? e[n] = $e({}, s) : ae(s) ? e[n] = s.slice() : e[n] = s;
  };
  for (let s = 0, n = arguments.length; s < n; s++)
    arguments[s] && me(arguments[s], t);
  return e;
}
const $s = (e, t, s, { allOwnKeys: n } = {}) => (me(t, (r, o) => {
  s && te(r) ? e[o] = nt(r, s) : e[o] = r;
}, { allOwnKeys: n }), e), ks = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), Os = (e, t, s, n) => {
  e.prototype = Object.create(t.prototype, n), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), s && Object.assign(e.prototype, s);
}, Cs = (e, t, s, n) => {
  let r, o, i;
  const l = {};
  if (t = t || {}, e == null)
    return t;
  do {
    for (r = Object.getOwnPropertyNames(e), o = r.length; o-- > 0; )
      i = r[o], (!n || n(i, e, t)) && !l[i] && (t[i] = e[i], l[i] = !0);
    e = s !== !1 && Fe(e);
  } while (e && (!s || s(e, t)) && e !== Object.prototype);
  return t;
}, Es = (e, t, s) => {
  e = String(e), (s === void 0 || s > e.length) && (s = e.length), s -= t.length;
  const n = e.indexOf(t, s);
  return n !== -1 && n === s;
}, Ps = (e) => {
  if (!e)
    return null;
  if (ae(e))
    return e;
  let t = e.length;
  if (!ot(t))
    return null;
  const s = new Array(t);
  for (; t-- > 0; )
    s[t] = e[t];
  return s;
}, As = ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && Fe(Uint8Array)), Ts = (e, t) => {
  const n = (e && e[Symbol.iterator]).call(e);
  let r;
  for (; (r = n.next()) && !r.done; ) {
    const o = r.value;
    t.call(e, o[0], o[1]);
  }
}, Fs = (e, t) => {
  let s;
  const n = [];
  for (; (s = e.exec(t)) !== null; )
    n.push(s);
  return n;
}, Rs = K("HTMLFormElement"), Ls = (e) => e.toLowerCase().replace(
  /[_-\s]([a-z\d])(\w*)/g,
  function(s, n, r) {
    return n.toUpperCase() + r;
  }
), je = (({ hasOwnProperty: e }) => (t, s) => e.call(t, s))(Object.prototype), Vs = K("RegExp"), at = (e, t) => {
  const s = Object.getOwnPropertyDescriptors(e), n = {};
  me(s, (r, o) => {
    t(r, o, e) !== !1 && (n[o] = r);
  }), Object.defineProperties(e, n);
}, Ms = (e) => {
  at(e, (t, s) => {
    const n = e[s];
    if (!!te(n)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not read-only method '" + s + "'");
      });
    }
  });
}, Bs = (e, t) => {
  const s = {}, n = (r) => {
    r.forEach((o) => {
      s[o] = !0;
    });
  };
  return ae(e) ? n(e) : n(String(e).split(t)), s;
}, Ns = () => {
}, Ds = (e, t) => (e = +e, Number.isFinite(e) ? e : t), u = {
  isArray: ae,
  isArrayBuffer: rt,
  isBuffer: ds,
  isFormData: ws,
  isArrayBufferView: ps,
  isString: hs,
  isNumber: ot,
  isBoolean: fs,
  isObject: lt,
  isPlainObject: pe,
  isUndefined: Se,
  isDate: ms,
  isFile: gs,
  isBlob: bs,
  isRegExp: Vs,
  isFunction: te,
  isStream: vs,
  isURLSearchParams: _s,
  isTypedArray: As,
  isFileList: ys,
  forEach: me,
  merge: $e,
  extend: $s,
  trim: Ss,
  stripBOM: ks,
  inherits: Os,
  toFlatObject: Cs,
  kindOf: Re,
  kindOfTest: K,
  endsWith: Es,
  toArray: Ps,
  forEachEntry: Ts,
  matchAll: Fs,
  isHTMLForm: Rs,
  hasOwnProperty: je,
  hasOwnProp: je,
  reduceDescriptors: at,
  freezeMethods: Ms,
  toObjectSet: Bs,
  toCamelCase: Ls,
  noop: Ns,
  toFiniteNumber: Ds
};
function $(e, t, s, n, r) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), s && (this.config = s), n && (this.request = n), r && (this.response = r);
}
u.inherits($, Error, {
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
const ut = $.prototype, ct = {};
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
  ct[e] = { value: e };
});
Object.defineProperties($, ct);
Object.defineProperty(ut, "isAxiosError", { value: !0 });
$.from = (e, t, s, n, r, o) => {
  const i = Object.create(ut);
  return u.toFlatObject(e, i, function(d) {
    return d !== Error.prototype;
  }, (l) => l !== "isAxiosError"), $.call(i, e.message, t, s, n, r), i.cause = e, i.name = e.name, o && Object.assign(i, o), i;
};
var de = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, js = typeof self == "object" ? self.FormData : window.FormData;
function ke(e) {
  return u.isPlainObject(e) || u.isArray(e);
}
function dt(e) {
  return u.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function Ie(e, t, s) {
  return e ? e.concat(t).map(function(r, o) {
    return r = dt(r), !s && o ? "[" + r + "]" : r;
  }).join(s ? "." : "") : t;
}
function Is(e) {
  return u.isArray(e) && !e.some(ke);
}
const Us = u.toFlatObject(u, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function xs(e) {
  return e && u.isFunction(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator];
}
function ge(e, t, s) {
  if (!u.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new (js || FormData)(), s = u.toFlatObject(s, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(g, y) {
    return !u.isUndefined(y[g]);
  });
  const n = s.metaTokens, r = s.visitor || m, o = s.dots, i = s.indexes, d = (s.Blob || typeof Blob < "u" && Blob) && xs(t);
  if (!u.isFunction(r))
    throw new TypeError("visitor must be a function");
  function a(b) {
    if (b === null)
      return "";
    if (u.isDate(b))
      return b.toISOString();
    if (!d && u.isBlob(b))
      throw new $("Blob is not supported. Use a Buffer instead.");
    return u.isArrayBuffer(b) || u.isTypedArray(b) ? d && typeof Blob == "function" ? new Blob([b]) : Buffer.from(b) : b;
  }
  function m(b, g, y) {
    let O = b;
    if (b && !y && typeof b == "object") {
      if (u.endsWith(g, "{}"))
        g = n ? g : g.slice(0, -2), b = JSON.stringify(b);
      else if (u.isArray(b) && Is(b) || u.isFileList(b) || u.endsWith(g, "[]") && (O = u.toArray(b)))
        return g = dt(g), O.forEach(function(V, Y) {
          !(u.isUndefined(V) || V === null) && t.append(
            i === !0 ? Ie([g], Y, o) : i === null ? g : g + "[]",
            a(V)
          );
        }), !1;
    }
    return ke(b) ? !0 : (t.append(Ie(y, g, o), a(b)), !1);
  }
  const v = [], P = Object.assign(Us, {
    defaultVisitor: m,
    convertValue: a,
    isVisitable: ke
  });
  function _(b, g) {
    if (!u.isUndefined(b)) {
      if (v.indexOf(b) !== -1)
        throw Error("Circular reference detected in " + g.join("."));
      v.push(b), u.forEach(b, function(O, A) {
        (!(u.isUndefined(O) || O === null) && r.call(
          t,
          O,
          u.isString(A) ? A.trim() : A,
          g,
          P
        )) === !0 && _(O, g ? g.concat(A) : [A]);
      }), v.pop();
    }
  }
  if (!u.isObject(e))
    throw new TypeError("data must be an object");
  return _(e), t;
}
function Ue(e) {
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
function Le(e, t) {
  this._pairs = [], e && ge(e, this, t);
}
const pt = Le.prototype;
pt.append = function(t, s) {
  this._pairs.push([t, s]);
};
pt.toString = function(t) {
  const s = t ? function(n) {
    return t.call(this, n, Ue);
  } : Ue;
  return this._pairs.map(function(r) {
    return s(r[0]) + "=" + s(r[1]);
  }, "").join("&");
};
function Hs(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function ht(e, t, s) {
  if (!t)
    return e;
  const n = s && s.encode || Hs, r = s && s.serialize;
  let o;
  if (r ? o = r(t, s) : o = u.isURLSearchParams(t) ? t.toString() : new Le(t, s).toString(n), o) {
    const i = e.indexOf("#");
    i !== -1 && (e = e.slice(0, i)), e += (e.indexOf("?") === -1 ? "?" : "&") + o;
  }
  return e;
}
class xe {
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
const ft = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, zs = typeof URLSearchParams < "u" ? URLSearchParams : Le, qs = FormData, Gs = (() => {
  let e;
  return typeof navigator < "u" && ((e = navigator.product) === "ReactNative" || e === "NativeScript" || e === "NS") ? !1 : typeof window < "u" && typeof document < "u";
})(), Q = {
  isBrowser: !0,
  classes: {
    URLSearchParams: zs,
    FormData: qs,
    Blob
  },
  isStandardBrowserEnv: Gs,
  protocols: ["http", "https", "file", "blob", "url", "data"]
};
function Js(e, t) {
  return ge(e, new Q.classes.URLSearchParams(), Object.assign({
    visitor: function(s, n, r, o) {
      return Q.isNode && u.isBuffer(s) ? (this.append(n, s.toString("base64")), !1) : o.defaultVisitor.apply(this, arguments);
    }
  }, t));
}
function Qs(e) {
  return u.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function Ks(e) {
  const t = {}, s = Object.keys(e);
  let n;
  const r = s.length;
  let o;
  for (n = 0; n < r; n++)
    o = s[n], t[o] = e[o];
  return t;
}
function mt(e) {
  function t(s, n, r, o) {
    let i = s[o++];
    const l = Number.isFinite(+i), d = o >= s.length;
    return i = !i && u.isArray(r) ? r.length : i, d ? (u.hasOwnProp(r, i) ? r[i] = [r[i], n] : r[i] = n, !l) : ((!r[i] || !u.isObject(r[i])) && (r[i] = []), t(s, n, r[i], o) && u.isArray(r[i]) && (r[i] = Ks(r[i])), !l);
  }
  if (u.isFormData(e) && u.isFunction(e.entries)) {
    const s = {};
    return u.forEachEntry(e, (n, r) => {
      t(Qs(n), r, s, 0);
    }), s;
  }
  return null;
}
function Ws(e, t, s) {
  const n = s.config.validateStatus;
  !s.status || !n || n(s.status) ? e(s) : t(new $(
    "Request failed with status code " + s.status,
    [$.ERR_BAD_REQUEST, $.ERR_BAD_RESPONSE][Math.floor(s.status / 100) - 4],
    s.config,
    s.request,
    s
  ));
}
const Ys = Q.isStandardBrowserEnv ? function() {
  return {
    write: function(s, n, r, o, i, l) {
      const d = [];
      d.push(s + "=" + encodeURIComponent(n)), u.isNumber(r) && d.push("expires=" + new Date(r).toGMTString()), u.isString(o) && d.push("path=" + o), u.isString(i) && d.push("domain=" + i), l === !0 && d.push("secure"), document.cookie = d.join("; ");
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
function Xs(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function Zs(e, t) {
  return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function gt(e, t) {
  return e && !Xs(t) ? Zs(e, t) : t;
}
const en = Q.isStandardBrowserEnv ? function() {
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
function ue(e, t, s) {
  $.call(this, e == null ? "canceled" : e, $.ERR_CANCELED, t, s), this.name = "CanceledError";
}
u.inherits(ue, $, {
  __CANCEL__: !0
});
function tn(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
const sn = u.toObjectSet([
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
]), nn = (e) => {
  const t = {};
  let s, n, r;
  return e && e.split(`
`).forEach(function(i) {
    r = i.indexOf(":"), s = i.substring(0, r).trim().toLowerCase(), n = i.substring(r + 1).trim(), !(!s || t[s] && sn[s]) && (s === "set-cookie" ? t[s] ? t[s].push(n) : t[s] = [n] : t[s] = t[s] ? t[s] + ", " + n : n);
  }), t;
}, He = Symbol("internals"), bt = Symbol("defaults");
function ie(e) {
  return e && String(e).trim().toLowerCase();
}
function he(e) {
  return e === !1 || e == null ? e : u.isArray(e) ? e.map(he) : String(e);
}
function rn(e) {
  const t = /* @__PURE__ */ Object.create(null), s = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let n;
  for (; n = s.exec(e); )
    t[n[1]] = n[2];
  return t;
}
function ze(e, t, s, n) {
  if (u.isFunction(n))
    return n.call(this, t, s);
  if (!!u.isString(t)) {
    if (u.isString(n))
      return t.indexOf(n) !== -1;
    if (u.isRegExp(n))
      return n.test(t);
  }
}
function on(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, s, n) => s.toUpperCase() + n);
}
function ln(e, t) {
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
function ne(e, t) {
  t = t.toLowerCase();
  const s = Object.keys(e);
  let n = s.length, r;
  for (; n-- > 0; )
    if (r = s[n], t === r.toLowerCase())
      return r;
  return null;
}
function H(e, t) {
  e && this.set(e), this[bt] = t || null;
}
Object.assign(H.prototype, {
  set: function(e, t, s) {
    const n = this;
    function r(o, i, l) {
      const d = ie(i);
      if (!d)
        throw new Error("header name must be a non-empty string");
      const a = ne(n, d);
      a && l !== !0 && (n[a] === !1 || l === !1) || (n[a || i] = he(o));
    }
    return u.isPlainObject(e) ? u.forEach(e, (o, i) => {
      r(o, i, t);
    }) : r(t, e, s), this;
  },
  get: function(e, t) {
    if (e = ie(e), !e)
      return;
    const s = ne(this, e);
    if (s) {
      const n = this[s];
      if (!t)
        return n;
      if (t === !0)
        return rn(n);
      if (u.isFunction(t))
        return t.call(this, n, s);
      if (u.isRegExp(t))
        return t.exec(n);
      throw new TypeError("parser must be boolean|regexp|function");
    }
  },
  has: function(e, t) {
    if (e = ie(e), e) {
      const s = ne(this, e);
      return !!(s && (!t || ze(this, this[s], s, t)));
    }
    return !1;
  },
  delete: function(e, t) {
    const s = this;
    let n = !1;
    function r(o) {
      if (o = ie(o), o) {
        const i = ne(s, o);
        i && (!t || ze(s, s[i], i, t)) && (delete s[i], n = !0);
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
      const o = ne(s, r);
      if (o) {
        t[o] = he(n), delete t[r];
        return;
      }
      const i = e ? on(r) : String(r).trim();
      i !== r && delete t[r], t[i] = he(n), s[i] = !0;
    }), this;
  },
  toJSON: function(e) {
    const t = /* @__PURE__ */ Object.create(null);
    return u.forEach(
      Object.assign({}, this[bt] || null, this),
      (s, n) => {
        s == null || s === !1 || (t[n] = e && u.isArray(s) ? s.join(", ") : s);
      }
    ), t;
  }
});
Object.assign(H, {
  from: function(e) {
    return u.isString(e) ? new this(nn(e)) : e instanceof this ? e : new this(e);
  },
  accessor: function(e) {
    const s = (this[He] = this[He] = {
      accessors: {}
    }).accessors, n = this.prototype;
    function r(o) {
      const i = ie(o);
      s[i] || (ln(n, o), s[i] = !0);
    }
    return u.isArray(e) ? e.forEach(r) : r(e), this;
  }
});
H.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent"]);
u.freezeMethods(H.prototype);
u.freezeMethods(H);
function an(e, t) {
  e = e || 10;
  const s = new Array(e), n = new Array(e);
  let r = 0, o = 0, i;
  return t = t !== void 0 ? t : 1e3, function(d) {
    const a = Date.now(), m = n[o];
    i || (i = a), s[r] = d, n[r] = a;
    let v = o, P = 0;
    for (; v !== r; )
      P += s[v++], v = v % e;
    if (r = (r + 1) % e, r === o && (o = (o + 1) % e), a - i < t)
      return;
    const _ = m && a - m;
    return _ ? Math.round(P * 1e3 / _) : void 0;
  };
}
function qe(e, t) {
  let s = 0;
  const n = an(50, 250);
  return (r) => {
    const o = r.loaded, i = r.lengthComputable ? r.total : void 0, l = o - s, d = n(l), a = o <= i;
    s = o;
    const m = {
      loaded: o,
      total: i,
      progress: i ? o / i : void 0,
      bytes: l,
      rate: d || void 0,
      estimated: d && i && a ? (i - o) / d : void 0
    };
    m[t ? "download" : "upload"] = !0, e(m);
  };
}
function Ge(e) {
  return new Promise(function(s, n) {
    let r = e.data;
    const o = H.from(e.headers).normalize(), i = e.responseType;
    let l;
    function d() {
      e.cancelToken && e.cancelToken.unsubscribe(l), e.signal && e.signal.removeEventListener("abort", l);
    }
    u.isFormData(r) && Q.isStandardBrowserEnv && o.setContentType(!1);
    let a = new XMLHttpRequest();
    if (e.auth) {
      const _ = e.auth.username || "", b = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : "";
      o.set("Authorization", "Basic " + btoa(_ + ":" + b));
    }
    const m = gt(e.baseURL, e.url);
    a.open(e.method.toUpperCase(), ht(m, e.params, e.paramsSerializer), !0), a.timeout = e.timeout;
    function v() {
      if (!a)
        return;
      const _ = H.from(
        "getAllResponseHeaders" in a && a.getAllResponseHeaders()
      ), g = {
        data: !i || i === "text" || i === "json" ? a.responseText : a.response,
        status: a.status,
        statusText: a.statusText,
        headers: _,
        config: e,
        request: a
      };
      Ws(function(O) {
        s(O), d();
      }, function(O) {
        n(O), d();
      }, g), a = null;
    }
    if ("onloadend" in a ? a.onloadend = v : a.onreadystatechange = function() {
      !a || a.readyState !== 4 || a.status === 0 && !(a.responseURL && a.responseURL.indexOf("file:") === 0) || setTimeout(v);
    }, a.onabort = function() {
      !a || (n(new $("Request aborted", $.ECONNABORTED, e, a)), a = null);
    }, a.onerror = function() {
      n(new $("Network Error", $.ERR_NETWORK, e, a)), a = null;
    }, a.ontimeout = function() {
      let b = e.timeout ? "timeout of " + e.timeout + "ms exceeded" : "timeout exceeded";
      const g = e.transitional || ft;
      e.timeoutErrorMessage && (b = e.timeoutErrorMessage), n(new $(
        b,
        g.clarifyTimeoutError ? $.ETIMEDOUT : $.ECONNABORTED,
        e,
        a
      )), a = null;
    }, Q.isStandardBrowserEnv) {
      const _ = (e.withCredentials || en(m)) && e.xsrfCookieName && Ys.read(e.xsrfCookieName);
      _ && o.set(e.xsrfHeaderName, _);
    }
    r === void 0 && o.setContentType(null), "setRequestHeader" in a && u.forEach(o.toJSON(), function(b, g) {
      a.setRequestHeader(g, b);
    }), u.isUndefined(e.withCredentials) || (a.withCredentials = !!e.withCredentials), i && i !== "json" && (a.responseType = e.responseType), typeof e.onDownloadProgress == "function" && a.addEventListener("progress", qe(e.onDownloadProgress, !0)), typeof e.onUploadProgress == "function" && a.upload && a.upload.addEventListener("progress", qe(e.onUploadProgress)), (e.cancelToken || e.signal) && (l = (_) => {
      !a || (n(!_ || _.type ? new ue(null, e, a) : _), a.abort(), a = null);
    }, e.cancelToken && e.cancelToken.subscribe(l), e.signal && (e.signal.aborted ? l() : e.signal.addEventListener("abort", l)));
    const P = tn(m);
    if (P && Q.protocols.indexOf(P) === -1) {
      n(new $("Unsupported protocol " + P + ":", $.ERR_BAD_REQUEST, e));
      return;
    }
    a.send(r || null);
  });
}
const Je = {
  http: Ge,
  xhr: Ge
}, Qe = {
  getAdapter: (e) => {
    if (u.isString(e)) {
      const t = Je[e];
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
  adapters: Je
}, un = {
  "Content-Type": "application/x-www-form-urlencoded"
};
function cn() {
  let e;
  return typeof XMLHttpRequest < "u" ? e = Qe.getAdapter("xhr") : typeof process < "u" && u.kindOf(process) === "process" && (e = Qe.getAdapter("http")), e;
}
function dn(e, t, s) {
  if (u.isString(e))
    try {
      return (t || JSON.parse)(e), u.trim(e);
    } catch (n) {
      if (n.name !== "SyntaxError")
        throw n;
    }
  return (s || JSON.stringify)(e);
}
const se = {
  transitional: ft,
  adapter: cn(),
  transformRequest: [function(t, s) {
    const n = s.getContentType() || "", r = n.indexOf("application/json") > -1, o = u.isObject(t);
    if (o && u.isHTMLForm(t) && (t = new FormData(t)), u.isFormData(t))
      return r && r ? JSON.stringify(mt(t)) : t;
    if (u.isArrayBuffer(t) || u.isBuffer(t) || u.isStream(t) || u.isFile(t) || u.isBlob(t))
      return t;
    if (u.isArrayBufferView(t))
      return t.buffer;
    if (u.isURLSearchParams(t))
      return s.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let l;
    if (o) {
      if (n.indexOf("application/x-www-form-urlencoded") > -1)
        return Js(t, this.formSerializer).toString();
      if ((l = u.isFileList(t)) || n.indexOf("multipart/form-data") > -1) {
        const d = this.env && this.env.FormData;
        return ge(
          l ? { "files[]": t } : t,
          d && new d(),
          this.formSerializer
        );
      }
    }
    return o || r ? (s.setContentType("application/json", !1), dn(t)) : t;
  }],
  transformResponse: [function(t) {
    const s = this.transitional || se.transitional, n = s && s.forcedJSONParsing, r = this.responseType === "json";
    if (t && u.isString(t) && (n && !this.responseType || r)) {
      const i = !(s && s.silentJSONParsing) && r;
      try {
        return JSON.parse(t);
      } catch (l) {
        if (i)
          throw l.name === "SyntaxError" ? $.from(l, $.ERR_BAD_RESPONSE, this, null, this.response) : l;
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
    FormData: Q.classes.FormData,
    Blob: Q.classes.Blob
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
  se.headers[t] = {};
});
u.forEach(["post", "put", "patch"], function(t) {
  se.headers[t] = u.merge(un);
});
function be(e, t) {
  const s = this || se, n = t || s, r = H.from(n.headers);
  let o = n.data;
  return u.forEach(e, function(l) {
    o = l.call(s, o, r.normalize(), t ? t.status : void 0);
  }), r.normalize(), o;
}
function yt(e) {
  return !!(e && e.__CANCEL__);
}
function ye(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new ue();
}
function Ke(e) {
  return ye(e), e.headers = H.from(e.headers), e.data = be.call(
    e,
    e.transformRequest
  ), (e.adapter || se.adapter)(e).then(function(n) {
    return ye(e), n.data = be.call(
      e,
      e.transformResponse,
      n
    ), n.headers = H.from(n.headers), n;
  }, function(n) {
    return yt(n) || (ye(e), n && n.response && (n.response.data = be.call(
      e,
      e.transformResponse,
      n.response
    ), n.response.headers = H.from(n.response.headers))), Promise.reject(n);
  });
}
function re(e, t) {
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
  const d = {
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
    const v = d[m] || r, P = v(m);
    u.isUndefined(P) && v !== l || (s[m] = P);
  }), s;
}
const vt = "1.1.3", Ve = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  Ve[e] = function(n) {
    return typeof n === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const We = {};
Ve.transitional = function(t, s, n) {
  function r(o, i) {
    return "[Axios v" + vt + "] Transitional option '" + o + "'" + i + (n ? ". " + n : "");
  }
  return (o, i, l) => {
    if (t === !1)
      throw new $(
        r(i, " has been removed" + (s ? " in " + s : "")),
        $.ERR_DEPRECATED
      );
    return s && !We[i] && (We[i] = !0, console.warn(
      r(
        i,
        " has been deprecated since v" + s + " and will be removed in the near future"
      )
    )), t ? t(o, i, l) : !0;
  };
};
function pn(e, t, s) {
  if (typeof e != "object")
    throw new $("options must be an object", $.ERR_BAD_OPTION_VALUE);
  const n = Object.keys(e);
  let r = n.length;
  for (; r-- > 0; ) {
    const o = n[r], i = t[o];
    if (i) {
      const l = e[o], d = l === void 0 || i(l, o, e);
      if (d !== !0)
        throw new $("option " + o + " must be " + d, $.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (s !== !0)
      throw new $("Unknown option " + o, $.ERR_BAD_OPTION);
  }
}
const Oe = {
  assertOptions: pn,
  validators: Ve
}, W = Oe.validators;
class Z {
  constructor(t) {
    this.defaults = t, this.interceptors = {
      request: new xe(),
      response: new xe()
    };
  }
  request(t, s) {
    typeof t == "string" ? (s = s || {}, s.url = t) : s = t || {}, s = re(this.defaults, s);
    const { transitional: n, paramsSerializer: r } = s;
    n !== void 0 && Oe.assertOptions(n, {
      silentJSONParsing: W.transitional(W.boolean),
      forcedJSONParsing: W.transitional(W.boolean),
      clarifyTimeoutError: W.transitional(W.boolean)
    }, !1), r !== void 0 && Oe.assertOptions(r, {
      encode: W.function,
      serialize: W.function
    }, !0), s.method = (s.method || this.defaults.method || "get").toLowerCase();
    const o = s.headers && u.merge(
      s.headers.common,
      s.headers[s.method]
    );
    o && u.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      function(b) {
        delete s.headers[b];
      }
    ), s.headers = new H(s.headers, o);
    const i = [];
    let l = !0;
    this.interceptors.request.forEach(function(b) {
      typeof b.runWhen == "function" && b.runWhen(s) === !1 || (l = l && b.synchronous, i.unshift(b.fulfilled, b.rejected));
    });
    const d = [];
    this.interceptors.response.forEach(function(b) {
      d.push(b.fulfilled, b.rejected);
    });
    let a, m = 0, v;
    if (!l) {
      const _ = [Ke.bind(this), void 0];
      for (_.unshift.apply(_, i), _.push.apply(_, d), v = _.length, a = Promise.resolve(s); m < v; )
        a = a.then(_[m++], _[m++]);
      return a;
    }
    v = i.length;
    let P = s;
    for (m = 0; m < v; ) {
      const _ = i[m++], b = i[m++];
      try {
        P = _(P);
      } catch (g) {
        b.call(this, g);
        break;
      }
    }
    try {
      a = Ke.call(this, P);
    } catch (_) {
      return Promise.reject(_);
    }
    for (m = 0, v = d.length; m < v; )
      a = a.then(d[m++], d[m++]);
    return a;
  }
  getUri(t) {
    t = re(this.defaults, t);
    const s = gt(t.baseURL, t.url);
    return ht(s, t.params, t.paramsSerializer);
  }
}
u.forEach(["delete", "get", "head", "options"], function(t) {
  Z.prototype[t] = function(s, n) {
    return this.request(re(n || {}, {
      method: t,
      url: s,
      data: (n || {}).data
    }));
  };
});
u.forEach(["post", "put", "patch"], function(t) {
  function s(n) {
    return function(o, i, l) {
      return this.request(re(l || {}, {
        method: t,
        headers: n ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: o,
        data: i
      }));
    };
  }
  Z.prototype[t] = s(), Z.prototype[t + "Form"] = s(!0);
});
class Me {
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
      n.reason || (n.reason = new ue(o, i, l), s(n.reason));
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
      token: new Me(function(r) {
        t = r;
      }),
      cancel: t
    };
  }
}
function hn(e) {
  return function(s) {
    return e.apply(null, s);
  };
}
function fn(e) {
  return u.isObject(e) && e.isAxiosError === !0;
}
function wt(e) {
  const t = new Z(e), s = nt(Z.prototype.request, t);
  return u.extend(s, Z.prototype, t, { allOwnKeys: !0 }), u.extend(s, t, null, { allOwnKeys: !0 }), s.create = function(r) {
    return wt(re(e, r));
  }, s;
}
const M = wt(se);
M.Axios = Z;
M.CanceledError = ue;
M.CancelToken = Me;
M.isCancel = yt;
M.VERSION = vt;
M.toFormData = ge;
M.AxiosError = $;
M.Cancel = M.CanceledError;
M.all = function(t) {
  return Promise.all(t);
};
M.spread = hn;
M.isAxiosError = fn;
M.formToJSON = (e) => mt(u.isHTMLForm(e) ? new FormData(e) : e);
const mn = R({
  name: "CustomMultipleFileUpload",
  components: {
    CustomButton: st,
    CustomLoader: Te
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
    const t = k(null), s = () => {
      t.value.click();
    }, n = ({ target: a }) => {
      if (a && a.files.length > 0) {
        let m = new FormData();
        for (let v = 0; v < a.files.length; v++) {
          const P = a.files[v];
          m.append("files", P);
        }
        i(m), t.value.value = "";
      }
    }, r = k([]), o = k(!1), i = (a) => {
      console.log(a), o.value = !0, M.post(e.routePostFiles, a).then((m) => {
        m.data.success ? alert("success") : alert("error"), o.value = !1;
      }).catch((m) => {
        console.log(m), o.value = !1;
      });
    }, l = (a) => {
      r.value.length > 0 && r.value.splice(a, 1);
    }, d = () => {
      M.get(e.routeGetFiles).then((a) => {
        console.log("okk", a);
      }).catch((a) => {
        console.log(a);
      });
    };
    return Pe(() => {
      d();
    }), {
      handleClick: s,
      handleInputChange: n,
      inputFileRef: t,
      fileList: r,
      deleteFile: l,
      getFiles: d,
      loading: o
    };
  }
}), gn = { class: "generic-input" }, bn = {
  key: 0,
  class: "generic-input__label text-sm secondary-color"
}, yn = { class: "file-list" }, vn = ["onClick"], wn = /* @__PURE__ */ c("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  "stroke-width": "2.5",
  stroke: "#FFFFFF",
  class: "cancel"
}, [
  /* @__PURE__ */ c("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    d: "M6 18L18 6M6 6l12 12"
  })
], -1), _n = [
  wn
], Sn = { class: "flexAligned" }, $n = { style: { "margin-right": "10px" } }, kn = {
  style: { "margin-right": "8px" },
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  "stroke-width": "1.5",
  stroke: "#FFFFFF",
  width: "16px",
  height: "16px"
}, On = /* @__PURE__ */ c("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
}, null, -1), Cn = [
  On
];
function En(e, t, s, n, r, o) {
  const i = j("custom-button"), l = j("custom-loader");
  return p(), h("div", gn, [
    e.label ? (p(), h("label", bn, w(e.label), 1)) : S("", !0),
    c("ul", yn, [
      (p(!0), h(D, null, G(e.fileList, (d, a) => (p(), h("li", {
        class: "file-list-item",
        key: a
      }, [
        N(w(d.original_name + "." + d.extension) + " ", 1),
        c("div", {
          onClick: (m) => e.deleteFile(a),
          class: "item-cancel"
        }, _n, 8, vn)
      ]))), 128))
    ]),
    c("input", {
      type: "file",
      class: "generic-input__input-file--hidden",
      ref: "inputFileRef",
      onChange: t[0] || (t[0] = (...d) => e.handleInputChange && e.handleInputChange(...d)),
      multiple: ""
    }, null, 544),
    c("div", Sn, [
      c("div", $n, [
        f(i, {
          label: "Carica",
          styleType: "primary",
          disabled: !1,
          onOnClick: e.handleClick
        }, {
          "slot-left": B(() => [
            (p(), h("svg", kn, Cn))
          ]),
          _: 1
        }, 8, ["onOnClick"])
      ]),
      f(l, {
        loading: e.loading,
        size: "small"
      }, null, 8, ["loading"])
    ])
  ]);
}
const bl = /* @__PURE__ */ L(mn, [["render", En]]);
function ve(e) {
  return e === 0 ? !1 : Array.isArray(e) && e.length === 0 ? !0 : !e;
}
function Pn(e) {
  return (...t) => !e(...t);
}
function An(e, t) {
  return e === void 0 && (e = "undefined"), e === null && (e = "null"), e === !1 && (e = "false"), e.toString().toLowerCase().indexOf(t.trim()) !== -1;
}
function _t(e, t, s, n) {
  return t ? e.filter((r) => An(n(r, s), t)).sort((r, o) => n(r, s).length - n(o, s).length) : e;
}
function Tn(e) {
  return e.filter((t) => !t.$isLabel);
}
function we(e, t) {
  return (s) => s.reduce((n, r) => r[e] && r[e].length ? (n.push({
    $groupLabel: r[t],
    $isLabel: !0
  }), n.concat(r[e])) : n, []);
}
function Fn(e, t, s, n, r) {
  return (o) => o.map((i) => {
    if (!i[s])
      return console.warn("Options passed to vue-multiselect do not contain groups, despite the config."), [];
    const l = _t(i[s], e, t, r);
    return l.length ? {
      [n]: i[n],
      [s]: l
    } : [];
  });
}
const Ye = (...e) => (t) => e.reduce((s, n) => n(s), t);
var Rn = {
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
        return ve(e) ? "" : t ? e[t] : e;
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
      return this.internalSearch ? s = this.groupValues ? this.filterAndFlat(s, t, this.label) : _t(s, t, this.label, this.customLabel) : s = this.groupValues ? we(this.groupValues, this.groupLabel)(s) : s, s = this.hideSelected ? s.filter(Pn(this.isSelected)) : s, this.taggable && t.length && !this.isExistingOption(t) && (this.tagPosition === "bottom" ? s.push({ isTag: !0, label: e }) : s.unshift({ isTag: !0, label: e })), s.slice(0, this.optionsLimit);
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
      return Ye(
        Fn(t, s, this.groupValues, this.groupLabel, this.customLabel),
        we(this.groupValues, this.groupLabel)
      )(e);
    },
    flatAndStrip(e) {
      return Ye(
        we(this.groupValues, this.groupLabel),
        Tn
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
      if (ve(e))
        return "";
      if (e.isTag)
        return e.label;
      if (e.$isLabel)
        return e.$groupLabel;
      const t = this.customLabel(e, this.label);
      return ve(t) ? "" : t;
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
}, Ln = {
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
}, Be = {
  name: "vue-multiselect",
  mixins: [Rn, Ln],
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
const Vn = {
  ref: "tags",
  class: "multiselect__tags"
}, Mn = { class: "multiselect__tags-wrap" }, Bn = { class: "multiselect__spinner" }, Nn = { key: 0 }, Dn = { class: "multiselect__option" }, jn = { class: "multiselect__option" }, In = /* @__PURE__ */ N("No elements found. Consider changing the search query."), Un = { class: "multiselect__option" }, xn = /* @__PURE__ */ N("List is empty.");
function Hn(e, t, s, n, r, o) {
  return p(), E("div", {
    tabindex: e.searchable ? -1 : s.tabindex,
    class: [{ "multiselect--active": e.isOpen, "multiselect--disabled": s.disabled, "multiselect--above": o.isAbove }, "multiselect"],
    onFocus: t[14] || (t[14] = (i) => e.activate()),
    onBlur: t[15] || (t[15] = (i) => e.searchable ? !1 : e.deactivate()),
    onKeydown: [
      t[16] || (t[16] = z(F((i) => e.pointerForward(), ["self", "prevent"]), ["down"])),
      t[17] || (t[17] = z(F((i) => e.pointerBackward(), ["self", "prevent"]), ["up"]))
    ],
    onKeypress: t[18] || (t[18] = z(F((i) => e.addPointerElement(i), ["stop", "self"]), ["enter", "tab"])),
    onKeyup: t[19] || (t[19] = z((i) => e.deactivate(), ["esc"])),
    role: "combobox",
    "aria-owns": "listbox-" + e.id
  }, [
    C(e.$slots, "caret", { toggle: e.toggle }, () => [
      f("div", {
        onMousedown: t[1] || (t[1] = F((i) => e.toggle(), ["prevent", "stop"])),
        class: "multiselect__select"
      }, null, 32)
    ]),
    C(e.$slots, "clear", { search: e.search }),
    f("div", Vn, [
      C(e.$slots, "selection", {
        search: e.search,
        remove: e.removeElement,
        values: o.visibleValues,
        isOpen: e.isOpen
      }, () => [
        q(f("div", Mn, [
          (p(!0), E(D, null, G(o.visibleValues, (i, l) => C(e.$slots, "tag", {
            option: i,
            search: e.search,
            remove: e.removeElement
          }, () => [
            (p(), E("span", {
              class: "multiselect__tag",
              key: l
            }, [
              f("span", {
                textContent: w(e.getOptionLabel(i))
              }, null, 8, ["textContent"]),
              f("i", {
                tabindex: "1",
                onKeypress: z(F((d) => e.removeElement(i), ["prevent"]), ["enter"]),
                onMousedown: F((d) => e.removeElement(i), ["prevent"]),
                class: "multiselect__tag-icon"
              }, null, 40, ["onKeypress", "onMousedown"])
            ]))
          ])), 256))
        ], 512), [
          [X, o.visibleValues.length > 0]
        ]),
        e.internalValue && e.internalValue.length > s.limit ? C(e.$slots, "limit", { key: 0 }, () => [
          f("strong", {
            class: "multiselect__strong",
            textContent: w(s.limitText(e.internalValue.length - s.limit))
          }, null, 8, ["textContent"])
        ]) : S("v-if", !0)
      ]),
      f(J, { name: "multiselect__loading" }, {
        default: B(() => [
          C(e.$slots, "loading", {}, () => [
            q(f("div", Bn, null, 512), [
              [X, s.loading]
            ])
          ])
        ]),
        _: 3
      }),
      e.searchable ? (p(), E("input", {
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
        onFocus: t[3] || (t[3] = F((i) => e.activate(), ["prevent"])),
        onBlur: t[4] || (t[4] = F((i) => e.deactivate(), ["prevent"])),
        onKeyup: t[5] || (t[5] = z((i) => e.deactivate(), ["esc"])),
        onKeydown: [
          t[6] || (t[6] = z(F((i) => e.pointerForward(), ["prevent"]), ["down"])),
          t[7] || (t[7] = z(F((i) => e.pointerBackward(), ["prevent"]), ["up"])),
          t[9] || (t[9] = z(F((i) => e.removeLastElement(), ["stop"]), ["delete"]))
        ],
        onKeypress: t[8] || (t[8] = z(F((i) => e.addPointerElement(i), ["prevent", "stop", "self"]), ["enter"])),
        class: "multiselect__input",
        "aria-controls": "listbox-" + e.id
      }, null, 44, ["name", "id", "placeholder", "value", "disabled", "tabindex", "aria-controls"])) : S("v-if", !0),
      o.isSingleLabelVisible ? (p(), E("span", {
        key: 1,
        class: "multiselect__single",
        onMousedown: t[10] || (t[10] = F((...i) => e.toggle && e.toggle(...i), ["prevent"]))
      }, [
        C(e.$slots, "singleLabel", { option: o.singleValue }, () => [
          N(w(e.currentOptionLabel), 1)
        ])
      ], 32)) : S("v-if", !0),
      o.isPlaceholderVisible ? (p(), E("span", {
        key: 2,
        class: "multiselect__placeholder",
        onMousedown: t[11] || (t[11] = F((...i) => e.toggle && e.toggle(...i), ["prevent"]))
      }, [
        C(e.$slots, "placeholder", {}, () => [
          N(w(e.placeholder), 1)
        ])
      ], 32)) : S("v-if", !0)
    ], 512),
    f(J, { name: "multiselect" }, {
      default: B(() => [
        q(f("div", {
          class: "multiselect__content-wrapper",
          onFocus: t[12] || (t[12] = (...i) => e.activate && e.activate(...i)),
          tabindex: "-1",
          onMousedown: t[13] || (t[13] = F(() => {
          }, ["prevent"])),
          style: { maxHeight: e.optimizedHeight + "px" },
          ref: "list"
        }, [
          f("ul", {
            class: "multiselect__content",
            style: o.contentStyle,
            role: "listbox",
            id: "listbox-" + e.id
          }, [
            C(e.$slots, "beforeList"),
            e.multiple && e.max === e.internalValue.length ? (p(), E("li", Nn, [
              f("span", Dn, [
                C(e.$slots, "maxElements", {}, () => [
                  N("Maximum of " + w(e.max) + " options selected. First remove a selected option to select another.", 1)
                ])
              ])
            ])) : S("v-if", !0),
            !e.max || e.internalValue.length < e.max ? (p(!0), E(D, { key: 1 }, G(e.filteredOptions, (i, l) => (p(), E("li", {
              class: "multiselect__element",
              key: l,
              id: e.id + "-" + l,
              role: i && (i.$isLabel || i.$isDisabled) ? null : "option"
            }, [
              i && (i.$isLabel || i.$isDisabled) ? S("v-if", !0) : (p(), E("span", {
                key: 0,
                class: [e.optionHighlight(l, i), "multiselect__option"],
                onClick: F((d) => e.select(i), ["stop"]),
                onMouseenter: F((d) => e.pointerSet(l), ["self"]),
                "data-select": i && i.isTag ? e.tagPlaceholder : o.selectLabelText,
                "data-selected": o.selectedLabelText,
                "data-deselect": o.deselectLabelText
              }, [
                C(e.$slots, "option", {
                  option: i,
                  search: e.search,
                  index: l
                }, () => [
                  f("span", null, w(e.getOptionLabel(i)), 1)
                ])
              ], 42, ["onClick", "onMouseenter", "data-select", "data-selected", "data-deselect"])),
              i && (i.$isLabel || i.$isDisabled) ? (p(), E("span", {
                key: 1,
                "data-select": e.groupSelect && o.selectGroupLabelText,
                "data-deselect": e.groupSelect && o.deselectGroupLabelText,
                class: [e.groupHighlight(l, i), "multiselect__option"],
                onMouseenter: F((d) => e.groupSelect && e.pointerSet(l), ["self"]),
                onMousedown: F((d) => e.selectGroup(i), ["prevent"])
              }, [
                C(e.$slots, "option", {
                  option: i,
                  search: e.search,
                  index: l
                }, () => [
                  f("span", null, w(e.getOptionLabel(i)), 1)
                ])
              ], 42, ["data-select", "data-deselect", "onMouseenter", "onMousedown"])) : S("v-if", !0)
            ], 8, ["id", "role"]))), 128)) : S("v-if", !0),
            q(f("li", null, [
              f("span", jn, [
                C(e.$slots, "noResult", { search: e.search }, () => [
                  In
                ])
              ])
            ], 512), [
              [X, s.showNoResults && e.filteredOptions.length === 0 && e.search && !s.loading]
            ]),
            q(f("li", null, [
              f("span", Un, [
                C(e.$slots, "noOptions", {}, () => [
                  xn
                ])
              ])
            ], 512), [
              [X, s.showNoOptions && e.options.length === 0 && !e.search && !s.loading]
            ]),
            C(e.$slots, "afterList")
          ], 12, ["id"])
        ], 36), [
          [X, e.isOpen]
        ])
      ]),
      _: 3
    })
  ], 42, ["tabindex", "aria-owns"]);
}
Be.render = Hn;
const zn = R({
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
    VueMultiselect: Be
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
const qn = { class: "custom-multiselect" }, Gn = {
  key: 0,
  for: "exampleFormControlSelect1",
  class: "custom-multiselect__label text-sm"
}, Jn = { class: "multiselect__tags-wrap" }, Qn = { class: "multiselect__tag" }, Kn = ["onClick"];
function Wn(e, t, s, n, r, o) {
  const i = j("vue-multiselect");
  return p(), h("div", qn, [
    e.label ? (p(), h("label", Gn, w(e.label), 1)) : S("", !0),
    f(i, {
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
      noResult: B(() => [
        N(" Nessun risultato. ")
      ]),
      tag: B((l) => [
        c("div", Jn, [
          c("span", Qn, [
            c("span", null, w(l.option.label), 1),
            c("i", {
              onClick: (d) => e.removeOption(l.option),
              tabindex: "1",
              class: "multiselect__tag-icon"
            }, null, 8, Kn)
          ])
        ])
      ]),
      option: B((l) => [
        N(w(l.option.label), 1)
      ]),
      _: 1
    }, 8, ["modelValue", "options", "placeholder", "onSearchChange"])
  ]);
}
const yl = /* @__PURE__ */ L(zn, [["render", Wn]]);
var Yn = "Expected a function", Xe = 0 / 0, Xn = "[object Symbol]", Zn = /^\s+|\s+$/g, ei = /^[-+]0x[0-9a-f]+$/i, ti = /^0b[01]+$/i, si = /^0o[0-7]+$/i, ni = parseInt, ii = typeof de == "object" && de && de.Object === Object && de, ri = typeof self == "object" && self && self.Object === Object && self, oi = ii || ri || Function("return this")(), li = Object.prototype, ai = li.toString, ui = Math.max, ci = Math.min, _e = function() {
  return oi.Date.now();
};
function di(e, t, s) {
  var n, r, o, i, l, d, a = 0, m = !1, v = !1, P = !0;
  if (typeof e != "function")
    throw new TypeError(Yn);
  t = Ze(t) || 0, Ce(s) && (m = !!s.leading, v = "maxWait" in s, o = v ? ui(Ze(s.maxWait) || 0, t) : o, P = "trailing" in s ? !!s.trailing : P);
  function _(T) {
    var x = n, U = r;
    return n = r = void 0, a = T, i = e.apply(U, x), i;
  }
  function b(T) {
    return a = T, l = setTimeout(O, t), m ? _(T) : i;
  }
  function g(T) {
    var x = T - d, U = T - a, ce = t - x;
    return v ? ci(ce, o - U) : ce;
  }
  function y(T) {
    var x = T - d, U = T - a;
    return d === void 0 || x >= t || x < 0 || v && U >= o;
  }
  function O() {
    var T = _e();
    if (y(T))
      return A(T);
    l = setTimeout(O, g(T));
  }
  function A(T) {
    return l = void 0, P && n ? _(T) : (n = r = void 0, i);
  }
  function V() {
    l !== void 0 && clearTimeout(l), a = 0, n = d = r = l = void 0;
  }
  function Y() {
    return l === void 0 ? i : A(_e());
  }
  function I() {
    var T = _e(), x = y(T);
    if (n = arguments, r = this, d = T, x) {
      if (l === void 0)
        return b(d);
      if (v)
        return l = setTimeout(O, t), _(d);
    }
    return l === void 0 && (l = setTimeout(O, t)), i;
  }
  return I.cancel = V, I.flush = Y, I;
}
function Ce(e) {
  var t = typeof e;
  return !!e && (t == "object" || t == "function");
}
function pi(e) {
  return !!e && typeof e == "object";
}
function hi(e) {
  return typeof e == "symbol" || pi(e) && ai.call(e) == Xn;
}
function Ze(e) {
  if (typeof e == "number")
    return e;
  if (hi(e))
    return Xe;
  if (Ce(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = Ce(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = e.replace(Zn, "");
  var s = ti.test(e);
  return s || si.test(e) ? ni(e.slice(2), s ? 2 : 8) : ei.test(e) ? Xe : +e;
}
var fi = di;
const mi = R({
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
    VueMultiselect: Be
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
      e && (this.loading = !0, M.get(this.optionsSearchRoute, {
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
    debouncedSearch: fi(function(e) {
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
}), gi = { class: "custom-multiselect" }, bi = {
  key: 0,
  class: "custom-multiselect__label text-sm"
}, yi = { class: "multiselect__tags-wrap" }, vi = { class: "multiselect__tag" }, wi = ["onClick"];
function _i(e, t, s, n, r, o) {
  const i = j("vue-multiselect");
  return p(), h("div", gi, [
    e.label ? (p(), h("label", bi, w(e.label), 1)) : S("", !0),
    f(i, {
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
      noResult: B(() => [
        N(" Nessun risultato. ")
      ]),
      tag: B((l) => [
        c("div", yi, [
          c("span", vi, [
            c("span", null, w(l.option.label), 1),
            c("i", {
              onClick: (d) => e.removeOption(l.option),
              tabindex: "1",
              class: "multiselect__tag-icon"
            }, null, 8, wi)
          ])
        ])
      ]),
      option: B((l) => [
        N(w(l.option.label), 1)
      ]),
      _: 1
    }, 8, ["modelValue", "options", "placeholder", "onSearchChange", "loading"])
  ]);
}
const vl = /* @__PURE__ */ L(mi, [["render", _i]]), Si = R({
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
}), $i = { class: "custom-select" }, ki = {
  key: 0,
  for: "exampleFormControlSelect1",
  class: "custom-select__label text-sm"
}, Oi = ["name", "id", "disabled"], Ci = {
  selected: "",
  value: "0"
}, Ei = ["value", "selected"];
function Pi(e, t, s, n, r, o) {
  return p(), h("div", $i, [
    e.label ? (p(), h("label", ki, w(e.label), 1)) : S("", !0),
    c("select", {
      name: e.name,
      class: "custom-select__select",
      id: "select_" + e.name,
      onChange: t[0] || (t[0] = (...i) => e.handleSelectChange && e.handleSelectChange(...i)),
      disabled: e.disabled
    }, [
      c("option", Ci, w(e.placeholder), 1),
      (p(!0), h(D, null, G(e.options, (i, l) => (p(), h("option", {
        key: l,
        value: i.value,
        selected: i.value == e.value
      }, w(i.label), 9, Ei))), 128))
    ], 40, Oi)
  ]);
}
const Ai = /* @__PURE__ */ L(Si, [["render", Pi]]), Ti = R({
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
}), Fi = { class: "custom-radio-group" }, Ri = ["name", "id", "value", "disabled", "checked"], Li = /* @__PURE__ */ c("span", { class: "custom-radio-group__single-radio__radio" }, null, -1), Vi = ["for"];
function Mi(e, t, s, n, r, o) {
  return p(), h("div", Fi, [
    (p(!0), h(D, null, G(e.options, (i) => (p(), h("div", {
      key: i.id,
      class: ee([{ disabled: i.disabled, checked: i.value == e.value }, "custom-radio-group__single-radio"])
    }, [
      c("input", {
        type: "radio",
        name: i.name,
        id: i.id,
        value: i.value,
        disabled: i.disabled,
        class: "custom-radio-group__single-radio__radio-hidden",
        checked: i.value == e.value,
        onChange: t[0] || (t[0] = (...l) => e.checkRadio && e.checkRadio(...l))
      }, null, 40, Ri),
      Li,
      c("label", {
        class: "custom-radio-group__single-radio__radio-label",
        for: i.id
      }, w(i.label), 9, Vi)
    ], 2))), 128))
  ]);
}
const wl = /* @__PURE__ */ L(Ti, [["render", Mi]]), Bi = R({
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
    return { computedValue: et({
      get() {
        return e.modelValue;
      },
      set(n) {
        t("update", n);
      }
    }) };
  }
}), Ni = { class: "generic-input" }, Di = {
  key: 0,
  class: "generic-input__label text-sm secondary-color"
};
function ji(e, t, s, n, r, o) {
  return p(), h("div", Ni, [
    e.label ? (p(), h("label", Di, w(e.label), 1)) : S("", !0),
    q(c("textarea", tt(e.$attrs, {
      "onUpdate:modelValue": t[0] || (t[0] = (i) => e.computedValue = i),
      class: "generic-input__input " + e.classes
    }), null, 16), [
      [Ae, e.computedValue]
    ])
  ]);
}
const _l = /* @__PURE__ */ L(Bi, [["render", ji]]), Ii = R({
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
    return { computedValue: et({
      get() {
        return e.modelValue;
      },
      set(n) {
        t("update", n);
      }
    }) };
  }
}), Ui = { class: "generic-input" }, xi = {
  key: 0,
  class: "generic-input__label text-sm secondary-color"
}, Hi = { class: "input-container" }, zi = {
  key: 1,
  class: "generic-input__read-only"
};
function qi(e, t, s, n, r, o) {
  return p(), h("div", Ui, [
    e.label ? (p(), h("label", xi, w(e.label), 1)) : S("", !0),
    c("div", Hi, [
      C(e.$slots, "prepend"),
      e.readOnly ? S("", !0) : q((p(), h("input", tt({ key: 0 }, e.$attrs, {
        "onUpdate:modelValue": t[0] || (t[0] = (i) => e.computedValue = i),
        class: "generic-input__input " + e.classes
      }), null, 16)), [
        [kt, e.computedValue]
      ])
    ]),
    e.readOnly ? (p(), h("div", zi, w(e.computedValue), 1)) : S("", !0)
  ]);
}
const St = /* @__PURE__ */ L(Ii, [["render", qi]]), Gi = R({
  name: "Breadcrumbs",
  props: {
    path_breadcrumbs: {
      type: Array,
      required: !0,
      default: []
    }
  }
}), Ji = { class: "text-secondary text-xl" }, Qi = {
  key: 0,
  class: "font-bold"
}, Ki = { key: 1 };
function Wi(e, t, s, n, r, o) {
  const i = j("router-link");
  return p(), h("div", Ji, [
    (p(!0), h(D, null, G(e.path_breadcrumbs, (l, d) => (p(), h(D, { key: d }, [
      d === e.path_breadcrumbs.length - 1 ? (p(), h("span", Qi, w(l.label), 1)) : (p(), h(D, { key: 1 }, [
        l.path ? (p(), E(i, {
          key: 0,
          to: l.path,
          class: "cursor-pointer hover:underline"
        }, {
          default: B(() => [
            N(w(l.label), 1)
          ]),
          _: 2
        }, 1032, ["to"])) : (p(), h("span", Ki, w(l.label), 1)),
        N(" / ")
      ], 64))
    ], 64))), 128))
  ]);
}
const Yi = /* @__PURE__ */ L(Gi, [["render", Wi]]), Xi = R({
  name: "FormSeparator"
}), Zi = {
  style: { width: "calc(100% + 2 * 24px)", transform: "translateX(-24px)" },
  class: "border-secondaryLight mb-8 mt-9"
};
function er(e, t, s, n, r, o) {
  return p(), h("hr", Zi);
}
const Sl = /* @__PURE__ */ L(Xi, [["render", er]]), tr = "_name", sr = R({
  name: "FilterbleModal",
  components: {
    CustomButton: st,
    GenericInput: St,
    CustomSelect: Ai,
    Transition: J
  },
  props: {
    isOpen: {
      type: Boolean,
      required: !1,
      default: !1
    },
    filterables: {
      type: [Object, null],
      required: !0
    },
    baseApiPath: {
      type: String,
      required: !0
    }
  },
  setup(e, t) {
    const s = () => {
      t.emit("closeModal");
    }, n = () => {
      const g = {
        filter: {}
      };
      for (let y in o.value) {
        const O = e.filterables.columns.findIndex((A) => A.column === y);
        o.value[y] && (g.filter[O] = o.value[y]);
      }
      s(), t.emit("filter", g);
    }, r = (g) => {
      let y;
      switch (g) {
        case "text":
          y = "";
          break;
        case "select":
          y = 0;
          break;
        case "checkbox":
          y = !1;
          break;
        case "multiselect":
          y = 0;
          break;
      }
      return y;
    }, o = k({}), i = k({}), l = k({}), d = k({}), a = () => {
      e.filterables && e.filterables.columns.forEach((g, y) => {
        m(g), v(g, y);
      });
    }, m = (g) => {
      o.value[g.column] = r(g.type);
    }, v = (g, y) => {
      g.route && (l.value[g.column] = !0, M.get(e.baseApiPath + g.route).then((O) => {
        i.value[g.column] = O.data.data.options, e.filterables.relations.forEach((A) => {
          const V = Object.values(A.columns);
          if (V.includes(y) && A.order === null) {
            let Y = V.filter((I) => I !== y);
            d.value[g.column] = {
              update: Y,
              index: y,
              route: A.route
            };
          }
        }), l.value[g.column] = !1;
      }).catch((O) => {
        console.log(O);
      }));
    }, P = k(!1);
    return Ot(() => e.isOpen, (g, y) => {
      g === !0 && y === !1 && P.value === !1 && (P.value = !0, a());
    }), {
      emitCloseModal: s,
      emitFilter: n,
      state: o,
      loadingState: l,
      optionsState: i,
      cleanResults: () => {
        e.filterables.columns.forEach((g, y) => {
          o.value[g.column] = r(g.type), g.route && v(g, y);
        });
      },
      handleChangeRelationsSelect: (g, y, O) => {
        if (d.value[y]) {
          const A = [], V = [];
          if (d.value[y].update.forEach((I) => {
            A.push(e.filterables.columns[I].column), V.push(I);
          }), parseInt(g.target.value) === 0) {
            v(e.filterables.columns[O], O), A.forEach((I, T) => {
              m(e.filterables.columns[V[T]]), v(e.filterables.columns[V[T]], V[T]);
            });
            return;
          }
          const Y = e.filterables.columns[d.value[y].index].column;
          M.get(e.baseApiPath + d.value[y].route).then(({ data: I }) => {
            const T = parseInt(o.value[y]), x = I.data.filter((U) => U.properties[Y] === T);
            A.forEach((U) => {
              x.length === 1 && (o.value[U] = x[0].properties[U]);
              const ce = U.split("_")[0] + tr;
              i.value[U] = x.map((De) => ({
                value: De.properties[U],
                label: De.properties[ce]
              }));
            });
          }).catch((I) => {
            console.log(I);
          });
        }
      }
    };
  }
});
const $t = (e) => (oe("data-v-d19eff6f"), e = e(), le(), e), nr = { class: "custom-modal" }, ir = { class: "modal-background" }, rr = { class: "modal-container" }, or = { class: "modal-header" }, lr = /* @__PURE__ */ $t(() => /* @__PURE__ */ c("div", { class: "modal-title" }, " Cerca ", -1)), ar = /* @__PURE__ */ $t(() => /* @__PURE__ */ c("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  "stroke-width": "1.5",
  width: "24px",
  height: "24px"
}, [
  /* @__PURE__ */ c("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    d: "M6 18L18 6M6 6l12 12"
  })
], -1)), ur = [
  ar
], cr = { class: "modal-body" }, dr = {
  key: 0,
  class: "grid grid-cols-12 gap-6"
}, pr = { class: "modal-footer" }, hr = { style: { "margin-right": "15px" } }, fr = { style: { "margin-right": "15px" } };
function mr(e, t, s, n, r, o) {
  const i = j("generic-input"), l = j("custom-select"), d = j("custom-button");
  return p(), E(J, null, {
    default: B(() => [
      q(c("div", nr, [
        c("div", ir, [
          c("div", rr, [
            c("div", or, [
              lr,
              c("div", {
                class: "modal-close",
                onClick: t[0] || (t[0] = (...a) => e.emitCloseModal && e.emitCloseModal(...a))
              }, ur)
            ]),
            c("div", cr, [
              e.filterables ? (p(), h("div", dr, [
                (p(!0), h(D, null, G(e.filterables.columns, (a, m) => (p(), h("div", {
                  class: "col-span-6",
                  key: m
                }, [
                  a.type === "text" ? (p(), E(i, {
                    key: 0,
                    type: "text",
                    placeholder: a.placeholder,
                    label: a.label,
                    modelValue: e.state[a.column],
                    "onUpdate:modelValue": (v) => e.state[a.column] = v,
                    disabled: e.loadingState[a.column]
                  }, null, 8, ["placeholder", "label", "modelValue", "onUpdate:modelValue", "disabled"])) : S("", !0),
                  a.type === "select" ? (p(), E(l, {
                    key: 1,
                    options: e.optionsState[a.column] || [],
                    label: a.label,
                    name: a.column,
                    placeholder: a.placeholder,
                    disabled: e.loadingState[a.column],
                    value: e.state[a.column],
                    "onUpdate:value": (v) => e.state[a.column] = v,
                    onChange: (v) => e.handleChangeRelationsSelect(v, a.column, m)
                  }, null, 8, ["options", "label", "name", "placeholder", "disabled", "value", "onUpdate:value", "onChange"])) : S("", !0)
                ]))), 128))
              ])) : S("", !0)
            ]),
            c("div", pr, [
              c("div", hr, [
                f(d, {
                  label: "Chiudi",
                  styleType: "secondary-outline",
                  onOnClick: e.emitCloseModal
                }, null, 8, ["onOnClick"])
              ]),
              c("div", fr, [
                f(d, {
                  label: "Pulisci",
                  styleType: "secondary",
                  onOnClick: e.cleanResults
                }, null, 8, ["onOnClick"])
              ]),
              f(d, {
                label: "Cerca",
                styleType: "primary",
                onOnClick: e.emitFilter
              }, null, 8, ["onOnClick"])
            ])
          ])
        ])
      ], 512), [
        [X, e.isOpen]
      ])
    ]),
    _: 1
  });
}
const $l = /* @__PURE__ */ L(sr, [["render", mr], ["__scopeId", "data-v-d19eff6f"]]), gr = R({
  name: "ScrollToTop",
  components: {
    Transition: J
  },
  setup() {
    const e = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }, t = k(!1), s = () => {
      window.scrollY >= 500 ? t.value = !0 : t.value = !1;
    };
    return Pe(() => {
      document.addEventListener("scroll", s);
    }), {
      trigger: e,
      buttonVisible: t
    };
  }
});
const br = (e) => (oe("data-v-3d9c8e20"), e = e(), le(), e), yr = /* @__PURE__ */ br(() => /* @__PURE__ */ c("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  "stroke-width": "2",
  stroke: "#FFFFFF",
  class: "w-6 h-6"
}, [
  /* @__PURE__ */ c("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    d: "M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18"
  })
], -1)), vr = [
  yr
];
function wr(e, t, s, n, r, o) {
  return p(), E(J, null, {
    default: B(() => [
      q(c("div", {
        onClick: t[0] || (t[0] = (...i) => e.trigger && e.trigger(...i)),
        ref: "scrollToTop",
        class: "fixed z-50 bottom-10 right-5 w-12 h-12 bg-secondary hover:bg-secondaryHover transition rounded-full flex items-center justify-center cursor-pointer shadow"
      }, vr, 512), [
        [X, e.buttonVisible]
      ])
    ]),
    _: 1
  });
}
const kl = /* @__PURE__ */ L(gr, [["render", wr], ["__scopeId", "data-v-3d9c8e20"]]), _r = R({
  name: "CustomSearchInput",
  components: {
    GenericInput: St
  },
  props: {
    placeholder: {
      type: String,
      default: "Cerca..."
    }
  },
  setup(e, t) {
    const s = k("");
    return {
      searchQuery: s,
      emitSearch: () => {
        t.emit("onSearch", s.value);
      }
    };
  }
}), Sr = { class: "custom-search-input flex items-center cursor-pointer" }, $r = { class: "search-box shadow" }, kr = ["placeholder"], Or = /* @__PURE__ */ c("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  "stroke-width": "2",
  stroke: "#FFFFFF",
  class: "w-5 h-5"
}, [
  /* @__PURE__ */ c("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    d: "M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
  })
], -1), Cr = [
  Or
];
function Er(e, t, s, n, r, o) {
  return p(), h("div", Sr, [
    c("div", $r, [
      q(c("input", {
        onKeyup: t[0] || (t[0] = z((...i) => e.emitSearch && e.emitSearch(...i), ["enter"])),
        class: "search-input text-textGrey font-medium",
        type: "text",
        "onUpdate:modelValue": t[1] || (t[1] = (i) => e.searchQuery = i),
        placeholder: e.placeholder
      }, null, 40, kr), [
        [Ae, e.searchQuery]
      ]),
      c("div", {
        onClick: t[2] || (t[2] = (...i) => e.emitSearch && e.emitSearch(...i)),
        class: "search-btn bg-textGrey hover:bg-customBlack transition h-9 w-9 rounded-full flex items-center justify-center"
      }, Cr)
    ])
  ]);
}
const Ol = /* @__PURE__ */ L(_r, [["render", Er]]), Pr = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIwAAAAnCAYAAADdG6ATAAAACXBIWXMAAAsSAAALEgHS3X78AAAJwElEQVR4nO1ce4hUVRj/NnYDdydokzBIM9sgCysjYZXKu4KGGjGOINvVXRQTIjbJlXA1GiFHcnf/8MEm+kcKPmKSJcchWgsFHQpU2EotEsPVorWSaPWPaQRXmviW31nPnjnnvmb2PT8YZu495557Ht/53mdKstksFQLpmDWViKJE9CIRPS41eYGI9oSiqSMFeVERw4q8CSYds9YRURMRPeJS9RYRzQxFU78Vl3z0ojRoz9Mxq5aI9hLRgx4f4XqXiKh8jM/pmMZ9QQaXjlmniegzA7Ewy+oiomYiSillE9Ix65PxPumjGb44DPSU8w6Esj8UTa1Rnrmp1H9yvE3yWIJnggGxsEiZoCl20k9CfufLjoS3E9EyIppERGVE1EtEN4ioLZ5Itkr17qDchMPxRLIedS1WvkGwcpvt8URyvR0J/05Ekz107wn0rYXbiCeS92v6f4iIFhNRJW7xpukQfVHq3sE6bJTHphljk6Gc31WHDVsVTySv+W0DdTZgTI5j98NhTMTSFYqmtFwD4kd9xx7TC+xIeBoRdRLRQ0pRGRazxY6EV8UTyWek+4TJKnFolyf0oFJHtNloR8J/mZ51aXsAsYIoOyQ9TVgUPJ46OxJeyoQUTyRTmjaa7Uj4nFKW8w4NanGL+7gbhOrYz3zgiWDSMetKAGJhjrRauX3Lxbz+CZPNE/0pEW3mHQNC2kJEK4joV81z2t0pYRcmtJuI5opdiF21Cs8OeN6OhLOmtu1I2PQeQSzMvT4Qz+E9W1HGdSo0z5Y4lGmBdgW35O/5Xp91QjyRNG4+V6UXXKJKU+RGLJeUnckL8LrpPWCtgljmMfsWC8vfYOfMcnU7yA1CNLTLLJsXVOJWeUHp/wKZyPB7AcrKUVcHLvvZRz+a8M2bMMNEA3E+aHAkmHTMelnDJRi3HYiFWaTKkXii7FA09a3D6wQh6NhyH3Ty2SNuoto7PKHgWIWGY/9x75wyVhnd+P20A0H1A+JPiO7NkkW6chDG1o9SLPBZg8L6hUZ+8+K/qlYEVzlARJZSdJvruxALSVzgjKkCdBGe/MNKEct/VWHrjieSU/D7XegwzLYbobdkMMkNeRCir/6jbLZUV0Ybi0cmGOg7X2vGKUPogt0Q2zz+RUxEPE8uzzpCEscy+hRm5jBx1gvSMSuTjlk/pGPWNl58iCKd+dwiLz5zIfhlrmmIJRWKpso9EIuXQTCxHMLHFzB5LFaPg3UTxAdPcJcgxOEGxGMPurHfxAlxfzou2+keBxPPvj9YQymFKfUeRMhMfDYa6jO3uAECYQtjqkFxZsfdKp+EchMsdiERrfc5DjelV4izPlGACV/LIgpch5XiwDsSEP2f41BnjlTXBLakTqFfnYY6W8D5s+BMAh0wsafzGINyTkelNxRNbQpFU9y5fSAIJzBR7QAnqVKI5S6ceq+wfhOAq3Tge/pg73go0UyUH+OWTkT4heh/NfSLAcC9atzrMLUNTiE2rOpeEJBN6assQiBGVkj3dxdgTDnoV3rZQ8vig4jewOI74S6cdcxJjvEzTHShaOqFoOIHVlAGgz3Iip9gyfheHnSQdiT8DzvmZEJEm8tw6bTjg/T/BExe8S7+fQJlGZ0DT2mrFeJTN5YNkl8lo3xuw8SmQpnYKnTi5LrmPvtPCrEL3TBDctzVQflTH+nRtKFTehlnQWiVaJOJUHXgZaEUFwKLJV8MOxmb0aZ4X8ZgIeWA3QcG77MwpWWlvh/YCF3CxAYndZuneqUNUwpDvc6sbtPc+9B1hAUARMVEiL1uabdkcN2EcgFRbpS5kONC4e2RuGcvfEXzDBZFr+aeYx0WJ/FEsgL6kEzYPQhTVGhMbuN7QBD97UCsVYLItWIb4xXmuzCxXefJK3LyYdhaUnwoQ8VdihgFGMBh4KhTQwCfFxeyCAFVJL2mXGfVdIUixjdUglF9CFfH+wQVMRBuwcdul/IixhncCOZYkSCKkBE4CVwFTg8sYSdYKJqK5NOWkrFWArP6IvtUTO5u+CweNWWd0b1MvpVSu72IrH8km9YGP4So+7YuGi35P67r/CMu7eqyCbmvjU5u+uGAymHUSOskL33ioKUUMliChCvf4Elnryxc3L8Q0U44qi7CrX5ZF5CDf2Kyk0scRNiIxRHtHsEYd2keOYs6TVJdjp2d0rn+8V5+/2RDualdEZ5oUdIaHg4yh4MNlcPsVQKPToG0PiCqPVO5PdFQ3Q3s5X0AzjR5F7diEY4S0WOIjMtoxk49ieClDn1pHPFEMmdMhqjwFU1As96OhP+FY07lIgvhHJyP/pjmTtcu5xR3wLO9uUDpFoOCARwGOTFyfutLTi9Nx6wEEb1ZiI5hd7H7frUpAYm9vGoZFrsaxMJu7xJD1lkZREoOfC7QUYg+uQ/bwV0a0I/qAElaDfhe6/O5IYVO6ZVjDaU68YIcmD+hs+hwOsAgFiM+4jfNQIT6G6SckLc09fh+bYEi4apewe/rAeE1oHyLnwZHMleRkUMwoWhqJ5Q3gap0zOrlHBh8mFC+cTkauy5AXyoDElqtyDrD9QHkxqqEMQtiiwOQdzh3Vo4o+0CNlIQlErvKxUZDP7qlFARPkLji9wH6NGTQmtXI15WJphQKreXhDHVXwPPTrtYAFnq7dC1C/f0BU0Rn2RrZJj+LwGYFFM3voMCyovmfF8JhHcqOhM9AuZaDsdtwPknWS9oQLfbS7jSI43UBOeyQwuiHAdHsM+TGZJEs1agpaw84gIyHU5FlivXQpFksQrRWa63gpMAcEE8N0jmaNXXrRGISzGHmfvzPFDuk4yPCOjupvgPcrIlyobZ7FZFn7vNcXzM2DHD0wyCOtAZByVm43SmSpDTnpDn2tCngMC4KZdGLPJez5h3yN5ysFZHdNgXPh5Wz4Gz+JqRr3WkAke+yyNAHTsi2lOfUdmuQW5wYDXqMJ8cdCESXSadyhBt59GU5xGCnHQnP8jB5e8DpTPnHa6WUyD4rzHBUVXAW9fSjzvxVUQ19RZdDRCAo7qd89klttxVOx612JNw+0okmX0/v88r15aAN4ajEPKQycib/OWknPitlqv0Ik5WPYxx3OCv8BxRc1g+YE67AUdWUpFzXwG/S44E41PYPQe+qM52jsiNh9njP9sA152LuvlSIa8Qh0N99SLigXAfy8Apg4p8ioq+I6Dns0BZYHMy9arCwu8FdGhzaOozdvxTtVkHsWWizBb9PKll8An+7dHcplFQtsQDL0U/Z+5zTLohpNQ6xbTDVGwnI6x+oED/aId1qhFlexBhFXhwGxCHL/hlFQhnbyFckEY5+nsfv4p8FjXEU8l802fSmQhyLLWKEgoj+B/KnMPnqbVqPAAAAAElFTkSuQmCC", Ar = R({
  name: "HeaderNavigation",
  components: {
    Transition: J
  },
  props: {
    menuStructure: {
      type: Array,
      required: !0
    }
  },
  setup(e) {
    const t = Pr, s = k(!1), n = k(null), r = (a, m) => {
      e.menuStructure[a].children.length > 0 && (n.value && n.value.id === e.menuStructure[a].id ? (n.value = null, s.value = !1) : (n.value = e.menuStructure[a], s.value = !0));
    }, o = k(null), i = k(null), l = (a) => {
      i.value && !i.value.contains(a.target) && !o.value.contains(a.target) && (n.value = null, s.value = !1);
    }, d = () => {
      s.value = !1, n.value = null;
    };
    return Pe(() => {
      document.addEventListener("click", l);
    }), Ct(() => {
      document.removeEventListener("click", l);
    }), {
      siteLogoImage: t,
      showSubMenu: r,
      currentMenu: n,
      isVisibleSubMenu: s,
      menuElementRef: i,
      navigationRef: o,
      forceClose: d
    };
  }
});
const Ne = (e) => (oe("data-v-918f73a8"), e = e(), le(), e), Tr = { class: "header-navigation py-5 container mx-auto" }, Fr = { class: "flex items-center justify-between mb-5" }, Rr = ["src"], Lr = /* @__PURE__ */ Et('<div class="flex items-center" data-v-918f73a8><div class="cursor-pointer" data-v-918f73a8><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6" data-v-918f73a8><path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" data-v-918f73a8></path></svg></div><div class="ml-7 cursor-pointer" data-v-918f73a8><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6" data-v-918f73a8><path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" data-v-918f73a8></path></svg></div><div class="cursor-pointer ml-7 flex items-center" data-v-918f73a8><div class="h-12 w-12 rounded-full bg-gray flex items-center justify-center" data-v-918f73a8><div class="font-regular text-xl" data-v-918f73a8>EP</div></div><div class="ml-1" data-v-918f73a8><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-3 h-3" data-v-918f73a8><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" data-v-918f73a8></path></svg></div></div></div>', 1), Vr = {
  ref: "navigationRef",
  class: "text-secondary text-base font-medium relative"
}, Mr = { class: "flex" }, Br = ["onClick"], Nr = {
  key: 2,
  class: "ml-1 text-secondary"
}, Dr = {
  key: 0,
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  "stroke-width": "1.5",
  stroke: "currentColor",
  class: "w-3 h-3"
}, jr = /* @__PURE__ */ Ne(() => /* @__PURE__ */ c("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M4.5 15.75l7.5-7.5 7.5 7.5"
}, null, -1)), Ir = [
  jr
], Ur = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  "stroke-width": "1.5",
  stroke: "currentColor",
  class: "w-3 h-3"
}, xr = /* @__PURE__ */ Ne(() => /* @__PURE__ */ c("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M19.5 8.25l-7.5 7.5-7.5-7.5"
}, null, -1)), Hr = [
  xr
], zr = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  "stroke-width": "1.5",
  stroke: "currentColor",
  class: "w-3 h-3"
}, qr = /* @__PURE__ */ Ne(() => /* @__PURE__ */ c("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M19.5 8.25l-7.5 7.5-7.5-7.5"
}, null, -1)), Gr = [
  qr
], Jr = {
  key: 0,
  ref: "menuElementRef",
  class: "text-black absolute w-full shadow-md p-6 bg-white top-7 left-0 z-50"
}, Qr = { class: "font-bold mb-4" }, Kr = { class: "flex flex-wrap" }, Wr = { key: 1 };
function Yr(e, t, s, n, r, o) {
  const i = j("router-link");
  return p(), h("header", Tr, [
    c("div", Fr, [
      f(i, { to: { name: "home" } }, {
        default: B(() => [
          c("div", null, [
            c("img", {
              src: e.siteLogoImage,
              alt: "gaspari-logo"
            }, null, 8, Rr)
          ])
        ]),
        _: 1
      }),
      Lr
    ]),
    c("nav", Vr, [
      c("ul", Mr, [
        (p(!0), h(D, null, G(e.menuStructure, (l, d) => (p(), h("li", {
          key: d,
          class: "mr-6 flex items-center cursor-pointer hover:text-secondaryHover transition select-none",
          onClick: (a) => e.showSubMenu(d, a)
        }, [
          l.href && l.children.length === 0 ? (p(), E(i, {
            key: 0,
            to: l.href,
            onClick: e.forceClose
          }, {
            default: B(() => [
              c("span", {
                class: ee({ "text-secondaryHover": e.currentMenu && e.currentMenu.id === l.id })
              }, w(l.label), 3)
            ]),
            _: 2
          }, 1032, ["to", "onClick"])) : (p(), h("span", {
            key: 1,
            class: ee({ "text-secondaryHover": e.currentMenu && e.currentMenu.id === l.id })
          }, w(l.label), 3)),
          l.children.length > 0 ? (p(), h("div", Nr, [
            e.currentMenu ? (p(), h(D, { key: 0 }, [
              e.currentMenu.id === l.id ? (p(), h("svg", Dr, Ir)) : (p(), h("svg", Ur, Hr))
            ], 64)) : (p(), h("svg", zr, Gr))
          ])) : S("", !0)
        ], 8, Br))), 128))
      ]),
      f(J, null, {
        default: B(() => [
          e.isVisibleSubMenu && e.currentMenu ? (p(), h("div", Jr, [
            c("div", Qr, w(e.currentMenu.label), 1),
            c("ul", Kr, [
              (p(!0), h(D, null, G(e.currentMenu.children, (l, d) => (p(), h("li", {
                key: d,
                class: "w-1/4 mb-3 cursor-pointer transition hover:underline"
              }, [
                l.href && l.children.length === 0 ? (p(), E(i, {
                  key: 0,
                  onClick: e.forceClose,
                  to: l.href
                }, {
                  default: B(() => [
                    N(w(l.label), 1)
                  ]),
                  _: 2
                }, 1032, ["onClick", "to"])) : (p(), h("div", Wr, w(l.label), 1))
              ]))), 128))
            ])
          ], 512)) : S("", !0)
        ]),
        _: 1
      })
    ], 512)
  ]);
}
const Xr = /* @__PURE__ */ L(Ar, [["render", Yr], ["__scopeId", "data-v-918f73a8"]]), Zr = R({
  name: "FormContainer",
  components: {
    Breadcrumbs: Yi
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
}), eo = {
  key: 0,
  class: "mb-6 ml-1"
}, to = {
  key: 1,
  class: "mb-3 ml-1 font-semibold text-lg uppercase"
}, so = { class: "form_container p-6 bg-white rounded-lg shadow overflow-x-hidden" };
function no(e, t, s, n, r, o) {
  const i = j("breadcrumbs");
  return p(), h(D, null, [
    e.path_breadcrumbs.length > 0 ? (p(), h("div", eo, [
      f(i, { path_breadcrumbs: e.path_breadcrumbs }, null, 8, ["path_breadcrumbs"])
    ])) : S("", !0),
    C(e.$slots, "form-buttons-top"),
    e.title ? (p(), h("h3", to, w(e.title), 1)) : S("", !0),
    c("div", so, [
      C(e.$slots, "form-content")
    ]),
    C(e.$slots, "form-buttons-bottom")
  ], 64);
}
const Cl = /* @__PURE__ */ L(Zr, [["render", no]]);
var Ee = R({ name: "Vue Tailwind Pagination", props: { current: { type: Number, default: 1 }, total: { type: Number, default: 0 }, perPage: { type: Number, default: 9 }, pageRange: { type: Number, default: 2 }, textBeforeInput: { type: String, default: "Go to page" }, textAfterInput: { type: String, default: "Go" } }, data: () => ({ input: "" }), methods: { hasFirst: function() {
  return this.rangeStart !== 1;
}, hasLast: function() {
  return this.rangeEnd < this.totalPages;
}, hasPrev: function() {
  return this.current > 1;
}, hasNext: function() {
  return this.current < this.totalPages;
}, changePage: function(e) {
  e > 0 && e <= this.totalPages && this.$emit("page-changed", e);
} }, computed: { pages: function() {
  for (var e = [], t = this.rangeStart; t <= this.rangeEnd; t++)
    e.push(t);
  return e;
}, rangeStart: function() {
  var e = this.current - this.pageRange;
  return e > 0 ? e : 1;
}, rangeEnd: function() {
  var e = this.current + this.pageRange;
  return e < this.totalPages ? e : this.totalPages;
}, totalPages: function() {
  return Math.ceil(this.total / this.perPage);
}, nextPage: function() {
  return this.current + 1;
}, prevPage: function() {
  return this.current - 1;
} } });
const io = Pt("data-v-00d7790c");
oe("data-v-00d7790c");
const ro = { class: "min-w-max" }, oo = { class: "flex justify-between bg-white rounded-lg border border-gray-200 px-10 py-3 text-gray-700 font-montserrat" }, lo = { class: "flex items-center" }, ao = { key: 0, class: "pr-6" }, uo = f("div", { class: "flex items-center justify-center hover:bg-gray-200 rounded-md transform rotate-45 h-6 w-6" }, [f("div", { class: "transform -rotate-45" }, [f("svg", { class: "h-4 w-4", xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor" }, [f("path", { "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-width": "2", d: "M15 19l-7-7 7-7" })])])], -1), co = { key: 1, class: "pr-6" }, po = f("div", { class: "flex hover:bg-gray-200 rounded-md transform rotate-45 h-6 w-6 items-center justify-center" }, [f("span", { class: "transform -rotate-45" }, " 1 ")], -1), ho = { key: 2, class: "pr-6" }, fo = { class: "pr-6" }, mo = { class: "transform -rotate-45" }, go = { key: 3, class: "pr-6" }, bo = { key: 4, class: "pr-6" }, yo = { class: "flex hover:bg-gray-200 rounded-md transform rotate-45 h-6 w-6 items-center justify-center" }, vo = { class: "transform -rotate-45" }, wo = { key: 5, class: "pr-6" }, _o = f("div", { class: "flex items-center justify-center hover:bg-gray-200 rounded-md transform rotate-45 h-6 w-6" }, [f("div", { class: "transform -rotate-45" }, [f("svg", { class: "h-4 w-4", xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor" }, [f("path", { "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-width": "2", d: "M9 5l7 7-7 7" })])])], -1), So = { class: "flex items-center" }, $o = { class: "pr-2 text-gray-400 font-medium" }, ko = { id: "text-before-input" }, Oo = { class: "w-14 rounded-md border border-indigo-400 px-1 py-1" }, Co = { id: "text-after-input" }, Eo = f("svg", { class: "h-4 w-4", xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor" }, [f("path", { "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-width": "2", d: "M9 5l7 7-7 7" })], -1);
le();
const Po = io((e, t, s, n, r, o) => (p(), E("div", ro, [f("section", oo, [f("ul", lo, [e.hasPrev() ? (p(), E("li", ao, [f("a", { href: "#", onClick: t[1] || (t[1] = F((i) => e.changePage(e.prevPage), ["prevent"])) }, [uo])])) : S("", !0), e.hasFirst() ? (p(), E("li", co, [f("a", { href: "#", onClick: t[2] || (t[2] = F((i) => e.changePage(1), ["prevent"])) }, [po])])) : S("", !0), e.hasFirst() ? (p(), E("li", ho, "...")) : S("", !0), (p(!0), E(D, null, G(e.pages, (i) => (p(), E("li", fo, [f("a", { href: "#", onClick: F((l) => e.changePage(i), ["prevent"]) }, [f("div", { class: [{ "bg-gradient-to-r from-blue-400 to-indigo-400": e.current == i }, "flex hover:bg-gray-200 rounded-md transform rotate-45 h-6 w-6 items-center justify-center"] }, [f("span", mo, w(i), 1)], 2)], 8, ["onClick"])]))), 256)), e.hasLast() ? (p(), E("li", go, "...")) : S("", !0), e.hasLast() ? (p(), E("li", bo, [f("a", { href: "#", onClick: t[3] || (t[3] = F((i) => e.changePage(e.totalPages), ["prevent"])) }, [f("div", yo, [f("span", vo, w(e.totalPages), 1)])])])) : S("", !0), e.hasNext() ? (p(), E("li", wo, [f("a", { href: "#", onClick: t[4] || (t[4] = F((i) => e.changePage(e.nextPage), ["prevent"])) }, [_o])])) : S("", !0)]), f("div", So, [f("div", $o, [f("span", ko, w(e.textBeforeInput), 1)]), f("div", Oo, [q(f("input", { "onUpdate:modelValue": t[5] || (t[5] = (i) => e.input = i), class: "w-12 focus:outline-none px-2", type: "text" }, null, 512), [[Ae, e.input, void 0, { number: !0 }]])]), f("div", { onClick: t[6] || (t[6] = F((i) => e.changePage(e.input), ["prevent"])), class: "flex items-center pl-4 font-medium cursor-pointer" }, [f("span", Co, w(e.textAfterInput), 1), Eo])])])])));
Ee.render = Po, Ee.__scopeId = "data-v-00d7790c";
const Ao = R({
  name: "CustomTable",
  components: {
    VueTailwindPagination: Ee,
    CustomLoader: Te
  },
  props: {
    title: {
      type: String,
      required: !1
    },
    total: {
      type: Number,
      required: !0
    },
    currentPage: {
      type: Number,
      default: 1
    },
    perPage: {
      type: Number,
      default: 25
    },
    from: {
      type: Number,
      required: !0
    },
    loading: {
      type: Boolean,
      required: !0
    }
  },
  setup(e, t) {
    const s = ({ target: o }) => {
      r(e.currentPage, parseInt(o.value));
    }, n = (o) => {
      r(o, e.perPage);
    }, r = (o, i) => {
      t.emit("changed-pagination", {
        currentPage: o,
        perPage: i
      });
    };
    return {
      changePageData: n,
      changePerPageData: s
    };
  }
}), To = { class: "custom-table" }, Fo = {
  key: 0,
  class: "font-semibold text-xl uppercase"
}, Ro = { class: "relative" }, Lo = {
  key: 0,
  class: "w-full h-full pt-20 absolute top-0 left-0 flex items-start justify-center rounded backdrop-blur-sm transition z-50"
}, Vo = { class: "text-textGrey text-sm font-medium row-pagination flex justify-between items-center" }, Mo = { class: "flex" }, Bo = {
  key: 0,
  class: "mr-10"
}, No = {
  key: 1,
  class: "mr-10"
}, Do = { class: "flex" }, jo = /* @__PURE__ */ c("label", {
  for: "numberPerPage",
  class: "mr-1"
}, "Elementi visualizzati: ", -1), Io = ["selected"], Uo = ["selected"], xo = ["selected"], Ho = ["selected"], zo = ["selected"], qo = {
  key: 1,
  class: "custom-pagination"
}, Go = { class: "w-full" }, Jo = { class: "row-theaders" }, Qo = { class: "text-textGrey font-medium" }, Ko = {
  key: 2,
  class: "custom-pagination pagination-bottom"
};
function Wo(e, t, s, n, r, o) {
  const i = j("custom-loader"), l = j("VueTailwindPagination");
  return p(), h("div", To, [
    c("div", {
      class: ee(["mb-5 flex items-center justify-between", { "flex-row-reverse": !e.title }])
    }, [
      e.title ? (p(), h("h2", Fo, w(e.title), 1)) : S("", !0),
      C(e.$slots, "filters")
    ], 2),
    c("div", Ro, [
      e.loading ? (p(), h("div", Lo, [
        f(i, {
          loading: e.loading,
          size: "large"
        }, null, 8, ["loading"])
      ])) : S("", !0),
      c("div", Vo, [
        c("div", Mo, [
          e.total > 0 ? (p(), h("div", Bo, "Risultati da " + w(e.from) + " a " + w(e.from + e.perPage - 1) + " di " + w(e.total), 1)) : (p(), h("div", No, "Nessun risultato")),
          c("div", Do, [
            jo,
            c("select", {
              onChange: t[0] || (t[0] = (...d) => e.changePerPageData && e.changePerPageData(...d)),
              id: "numberPerPage",
              class: "bg-white border text-black"
            }, [
              c("option", {
                value: "25",
                selected: e.perPage === 25
              }, "25", 8, Io),
              c("option", {
                value: "50",
                selected: e.perPage === 50
              }, "50", 8, Uo),
              c("option", {
                value: "100",
                selected: e.perPage === 100
              }, "100", 8, xo),
              c("option", {
                value: "250",
                selected: e.perPage === 250
              }, "250", 8, Ho),
              c("option", {
                value: "500",
                selected: e.perPage === 500
              }, "500", 8, zo)
            ], 32)
          ])
        ])
      ]),
      e.total > 0 ? (p(), h("div", qo, [
        f(l, {
          current: e.currentPage,
          total: e.total,
          "per-page": e.perPage,
          onPageChanged: e.changePageData,
          "text-before-input": "Vai a pag.",
          "text-after-input": "Vai"
        }, null, 8, ["current", "total", "per-page", "onPageChanged"])
      ])) : S("", !0),
      c("table", Go, [
        c("thead", null, [
          c("tr", Jo, [
            C(e.$slots, "t-head")
          ])
        ]),
        c("tbody", Qo, [
          C(e.$slots, "t-body")
        ])
      ]),
      e.total > 0 ? (p(), h("div", Ko, [
        f(l, {
          current: e.currentPage,
          total: e.total,
          "per-page": e.perPage,
          onPageChanged: e.changePageData,
          "text-before-input": "Vai a pag.",
          "text-after-input": "Vai"
        }, null, 8, ["current", "total", "per-page", "onPageChanged"])
      ])) : S("", !0)
    ])
  ]);
}
const El = /* @__PURE__ */ L(Ao, [["render", Wo]]), Yo = R({
  name: "CustomSidebar",
  components: {
    Transition: J,
    CustomLoader: Te
  },
  props: {
    isOpen: {
      type: Boolean,
      default: !1
    },
    title: {
      type: String,
      required: !1,
      default: "Oops"
    },
    loading: {
      type: Boolean,
      default: !1
    }
  },
  setup(e, t) {
    return {
      emitCloseSidebar: () => {
        t.emit("close-sidebar");
      }
    };
  }
});
const Xo = (e) => (oe("data-v-20ccfa8e"), e = e(), le(), e), Zo = {
  key: 0,
  id: "custom-sidebar",
  class: "custom-sidebar shadow-2xl"
}, el = { class: "sidebar-content" }, tl = { class: "sidebar-header mb-6 flex justify-between items-center" }, sl = { class: "text-2xl font-bold" }, nl = /* @__PURE__ */ Xo(() => /* @__PURE__ */ c("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  "stroke-width": "2",
  width: "24px",
  height: "24px"
}, [
  /* @__PURE__ */ c("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    d: "M6 18L18 6M6 6l12 12"
  })
], -1)), il = [
  nl
], rl = { class: "sidebar-body" }, ol = {
  key: 0,
  class: "w-full h-full absolute top-0 left-0 flex items-center justify-center rounded backdrop-blur-sm transition z-50"
};
function ll(e, t, s, n, r, o) {
  const i = j("custom-loader");
  return p(), E(J, null, {
    default: B(() => [
      e.isOpen ? (p(), h("div", Zo, [
        c("div", el, [
          c("div", tl, [
            c("h4", sl, w(e.title), 1),
            c("div", {
              class: "sidebar-close",
              onClick: t[0] || (t[0] = (...l) => e.emitCloseSidebar && e.emitCloseSidebar(...l))
            }, il)
          ]),
          c("div", rl, [
            C(e.$slots, "sidebar-content", {}, void 0, !0)
          ])
        ]),
        c("div", {
          class: "sidebar-bg",
          onClick: t[1] || (t[1] = (...l) => e.emitCloseSidebar && e.emitCloseSidebar(...l))
        }),
        e.loading ? (p(), h("div", ol, [
          f(i, {
            loading: e.loading,
            size: "large"
          }, null, 8, ["loading"])
        ])) : S("", !0)
      ])) : S("", !0)
    ]),
    _: 3
  });
}
const Pl = /* @__PURE__ */ L(Yo, [["render", ll], ["__scopeId", "data-v-20ccfa8e"]]), al = R({
  name: "LayoutBase",
  components: {
    HeaderNavigation: Xr
  },
  props: {
    menuStructure: {
      type: Array,
      required: !0
    }
  }
}), ul = { class: "layout" }, cl = { class: "main-content" }, dl = { class: "container mx-auto py-7" };
function pl(e, t, s, n, r, o) {
  const i = j("header-navigation");
  return p(), h("div", ul, [
    f(i, { menuStructure: e.menuStructure }, null, 8, ["menuStructure"]),
    c("main", cl, [
      c("div", dl, [
        C(e.$slots, "layout-content")
      ])
    ])
  ]);
}
const Al = /* @__PURE__ */ L(al, [["render", pl]]);
function Tl() {
  const e = k(!1), t = k(null), s = k(!1), n = k(null);
  return {
    openDetails: async (l, d) => {
      e.value = !0, t.value = d, s.value = !0, await M.get(l).then((a) => {
        a.status === 200 && (n.value = a.data.data);
      }).catch((a) => {
        console.log(a);
      }), s.value = !1;
    },
    openSidebar: () => {
      e.value = !0;
    },
    closeSidebar: () => {
      n.value = null, e.value = !1, t.value = null;
    },
    activeRecordIndex: t,
    isOpenSidebar: e,
    isLoadingSidebar: s,
    sidebarData: n
  };
}
function Fl() {
  const e = k([]), t = k(0), s = k(0), n = k(0), r = k(0), o = k(null), i = k(!1), l = k(""), d = k(null), a = (y) => {
    l.value === "" || l.value !== y ? (l.value = y, d.value = null) : l.value === y && d.value === null ? d.value = "desc" : l.value === y && d.value === "desc" && (l.value = "", d.value = null);
  }, m = (y) => ({
    ordered_asc: l.value === y && d.value === null,
    ordered_desc: l.value === y && d.value === "desc"
  }), v = k({ filter: {} }), P = (y) => {
    v.value.filter = y.filter;
  }, _ = k("");
  return {
    results: e,
    currentPage: n,
    perPage: r,
    total: t,
    from: s,
    filterables: o,
    setFilterParams: P,
    updatePagination: async (y, O) => {
      i.value = !0;
      let A = {
        page: O.currentPage,
        per_page: O.perPage
      };
      l.value && (A.order_by = l.value, d.value === "desc" && (A.order_desc = 1)), v.value.filter && (A.filter = v.value.filter), _.value && (A.search = _.value), await M.get(y, {
        params: A
      }).then((V) => {
        V.status === 200 && (n.value = O.currentPage, r.value = O.perPage, e.value = V.data.data, t.value = V.data.meta.total, s.value = V.data.meta.from, o.value = V.data.filterables);
      }).catch((V) => V), i.value = !1;
    },
    loadingPagination: i,
    setPaginationOrder: a,
    setPaginationOrderClasses: m,
    setSearchQuery: (y) => {
      _.value = y;
    }
  };
}
function Rl() {
  return {
    setPageTitle: (t) => {
      document.title = t;
    }
  };
}
export {
  Yi as Breadcrumbs,
  st as CustomButton,
  Bt as CustomCheckbox,
  fl as CustomFileUpload,
  Te as CustomLoader,
  ml as CustomModal,
  gl as CustomMultiCheckbox,
  yl as CustomMultiSelect,
  vl as CustomMultiSelectAsync,
  bl as CustomMultipleFileUpload,
  wl as CustomRadioGroup,
  Ol as CustomSearchInput,
  Ai as CustomSelect,
  Pl as CustomSidebar,
  El as CustomTable,
  _l as CustomTextArea,
  $l as FilterableModal,
  Cl as FormContainer,
  Sl as FormSeparator,
  St as GenericInput,
  Xr as HeaderNavigation,
  Al as LayoutBase,
  kl as ScrollToTop,
  Rl as usePageMeta,
  Fl as usePagination,
  Tl as useSidebar
};
