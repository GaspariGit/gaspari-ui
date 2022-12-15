import { defineComponent as F, openBlock as d, createElementBlock as h, normalizeClass as X, renderSlot as O, createElementVNode as c, toDisplayString as w, createTextVNode as N, ref as $, createCommentVNode as S, Fragment as D, resolveComponent as j, renderList as J, createBlock as E, onMounted as Pe, createVNode as f, withCtx as B, withKeys as G, withModifiers as R, withDirectives as H, vShow as Y, Transition as q, computed as et, mergeProps as tt, vModelText as Ae, vModelDynamic as kt, watch as Ot, pushScopeId as oe, popScopeId as le, normalizeStyle as Ct, onBeforeUnmount as Et, createStaticVNode as Pt, withScopeId as At } from "vue";
const Tt = F({
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
        let i = "btn ", o = "";
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
        let r = "";
        switch (e.size) {
          case "default":
            r = "";
            break;
          case "small":
            r = "btn--small";
            break;
          case "large":
            r = "btn--large";
            break;
        }
        let l = "";
        return e.disabled && (l = " btn--disabled"), i + " " + o + " " + r + " " + l;
      },
      handleClick: (i) => {
        if (e.disabled)
          return i.preventDefault();
        t.emit("onClick");
      }
    };
  }
}), L = (e, t) => {
  const s = e.__vccOpts || e;
  for (const [n, i] of t)
    s[n] = i;
  return s;
}, Rt = ["disabled"];
function Ft(e, t, s, n, i, o) {
  return d(), h("button", {
    class: X(["custom-button", e.assignStyle()]),
    disabled: e.disabled,
    onClick: t[0] || (t[0] = (...r) => e.handleClick && e.handleClick(...r))
  }, [
    O(e.$slots, "slot-left"),
    c("span", null, w(e.label), 1),
    O(e.$slots, "slot-right")
  ], 10, Rt);
}
const st = /* @__PURE__ */ L(Tt, [["render", Ft]]), Lt = F({
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
}), Vt = ["checked", "disabled", "name"], Mt = /* @__PURE__ */ c("span", { class: "checkmark" }, null, -1);
function Bt(e, t, s, n, i, o) {
  return d(), h("label", {
    class: X(["wrapper flex items-center", { disabled: e.disabled }])
  }, [
    N(w(e.label) + " ", 1),
    c("input", {
      class: "checkbox",
      type: "checkbox",
      checked: e.checked,
      onChange: t[0] || (t[0] = (...r) => e.updateInput && e.updateInput(...r)),
      disabled: e.disabled,
      name: e.name
    }, null, 40, Vt),
    Mt
  ], 2);
}
const Nt = /* @__PURE__ */ L(Lt, [["render", Bt]]), Dt = F({
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
    const s = $(null), n = () => {
      s.value.click();
    }, i = $(null);
    return {
      inputFileRef: s,
      handleButtonClick: n,
      handleInputChange: ({ target: l }) => {
        l && l.files.length > 0 && (i.value = l.files[0], t.emit("update:file", l.files[0]), s.value.value = "");
      },
      currentFile: i,
      deleteFile: () => {
        i.value = null, t.emit("update:file", null);
      }
    };
  }
}), jt = { class: "generic-input" }, It = {
  key: 0,
  class: "generic-input__label text-sm secondary-color"
}, Ut = { class: "input-container" }, xt = { class: "generic-input__input-file" }, Ht = { class: "generic-input__input-file__file" }, zt = {
  key: 0,
  class: "generic-input__input-file__file__placeholder"
}, qt = {
  key: 1,
  class: "generic-input__input-file__file__file-name"
}, Gt = /* @__PURE__ */ c("svg", {
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
], -1), Jt = [
  Gt
];
function Qt(e, t, s, n, i, o) {
  return d(), h("div", jt, [
    e.label ? (d(), h("label", It, w(e.label), 1)) : S("", !0),
    c("div", Ut, [
      O(e.$slots, "prepend"),
      c("input", {
        type: "file",
        class: "generic-input__input-file--hidden",
        ref: "inputFileRef",
        onChange: t[0] || (t[0] = (...r) => e.handleInputChange && e.handleInputChange(...r))
      }, null, 544),
      c("div", xt, [
        c("div", {
          class: "generic-input__input-file__button",
          onClick: t[1] || (t[1] = (...r) => e.handleButtonClick && e.handleButtonClick(...r))
        }, " Sfoglia... "),
        c("div", Ht, [
          e.currentFile ? (d(), h("div", qt, [
            N(w(e.currentFile.name) + " ", 1),
            c("div", {
              onClick: t[2] || (t[2] = (...r) => e.deleteFile && e.deleteFile(...r)),
              class: "generic-input__input-file__file__file-name__cancel"
            }, Jt)
          ])) : (d(), h("div", zt, w(e.placeholder), 1))
        ])
      ])
    ])
  ]);
}
const bl = /* @__PURE__ */ L(Dt, [["render", Qt]]), Kt = F({
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
}), Wt = /* @__PURE__ */ c("span", { class: "sr-only" }, "Loading...", -1), Yt = [
  Wt
];
function Xt(e, t, s, n, i, o) {
  return e.loading ? (d(), h("div", {
    key: 0,
    class: X(["spinner-border", e.size]),
    role: "status"
  }, Yt, 2)) : S("", !0);
}
const Te = /* @__PURE__ */ L(Kt, [["render", Xt]]), Zt = F({
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
}), es = {
  key: 0,
  class: "custom-modal"
}, ts = { class: "modal-background" }, ss = { class: "modal-container" }, ns = { class: "modal-header" }, rs = { class: "modal-title" }, is = /* @__PURE__ */ c("svg", {
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
], -1), os = [
  is
], ls = { class: "modal-body" }, as = { class: "modal-footer" };
function us(e, t, s, n, i, o) {
  return e.isOpen ? (d(), h("div", es, [
    c("div", ts, [
      c("div", ss, [
        c("div", ns, [
          c("div", rs, [
            e.withoutTitle ? S("", !0) : (d(), h(D, { key: 0 }, [
              N(w(e.modalTitle), 1)
            ], 64))
          ]),
          c("div", {
            class: "modal-close",
            onClick: t[0] || (t[0] = (...r) => e.emitCloseModal && e.emitCloseModal(...r))
          }, os)
        ]),
        c("div", ls, [
          O(e.$slots, "modal-body")
        ]),
        c("div", as, [
          O(e.$slots, "modal-footer")
        ])
      ])
    ])
  ])) : S("", !0);
}
const vl = /* @__PURE__ */ L(Zt, [["render", us]]), cs = F({
  name: "CustomMultiCheckbox",
  components: {
    CustomCheckbox: Nt
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
    return { check: (n, i) => {
      let o = [...e.value];
      i ? o.push(n) : o.splice(o.indexOf(n), 1), t.emit("update:value", o);
    } };
  }
});
function ds(e, t, s, n, i, o) {
  const r = j("custom-checkbox");
  return d(), h("div", null, [
    (d(!0), h(D, null, J(e.options, (l, p) => (d(), E(r, {
      key: p,
      label: l.label,
      checked: e.value.includes(l.id),
      "onUpdate:checked": (a) => e.check(l.id, a)
    }, null, 8, ["label", "checked", "onUpdate:checked"]))), 128))
  ]);
}
const yl = /* @__PURE__ */ L(cs, [["render", ds]]);
function nt(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: rt } = Object.prototype, { getPrototypeOf: Re } = Object, Fe = ((e) => (t) => {
  const s = rt.call(t);
  return e[s] || (e[s] = s.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), K = (e) => (e = e.toLowerCase(), (t) => Fe(t) === e), fe = (e) => (t) => typeof t === e, { isArray: ae } = Array, Se = fe("undefined");
function ps(e) {
  return e !== null && !Se(e) && e.constructor !== null && !Se(e.constructor) && te(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const it = K("ArrayBuffer");
function hs(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && it(e.buffer), t;
}
const fs = fe("string"), te = fe("function"), ot = fe("number"), lt = (e) => e !== null && typeof e == "object", ms = (e) => e === !0 || e === !1, pe = (e) => {
  if (Fe(e) !== "object")
    return !1;
  const t = Re(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}, gs = K("Date"), bs = K("File"), vs = K("Blob"), ys = K("FileList"), ws = (e) => lt(e) && te(e.pipe), _s = (e) => {
  const t = "[object FormData]";
  return e && (typeof FormData == "function" && e instanceof FormData || rt.call(e) === t || te(e.toString) && e.toString() === t);
}, Ss = K("URLSearchParams"), $s = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function me(e, t, { allOwnKeys: s = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let n, i;
  if (typeof e != "object" && (e = [e]), ae(e))
    for (n = 0, i = e.length; n < i; n++)
      t.call(null, e[n], n, e);
  else {
    const o = s ? Object.getOwnPropertyNames(e) : Object.keys(e), r = o.length;
    let l;
    for (n = 0; n < r; n++)
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
const ks = (e, t, s, { allOwnKeys: n } = {}) => (me(t, (i, o) => {
  s && te(i) ? e[o] = nt(i, s) : e[o] = i;
}, { allOwnKeys: n }), e), Os = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), Cs = (e, t, s, n) => {
  e.prototype = Object.create(t.prototype, n), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), s && Object.assign(e.prototype, s);
}, Es = (e, t, s, n) => {
  let i, o, r;
  const l = {};
  if (t = t || {}, e == null)
    return t;
  do {
    for (i = Object.getOwnPropertyNames(e), o = i.length; o-- > 0; )
      r = i[o], (!n || n(r, e, t)) && !l[r] && (t[r] = e[r], l[r] = !0);
    e = s !== !1 && Re(e);
  } while (e && (!s || s(e, t)) && e !== Object.prototype);
  return t;
}, Ps = (e, t, s) => {
  e = String(e), (s === void 0 || s > e.length) && (s = e.length), s -= t.length;
  const n = e.indexOf(t, s);
  return n !== -1 && n === s;
}, As = (e) => {
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
}, Ts = ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && Re(Uint8Array)), Rs = (e, t) => {
  const n = (e && e[Symbol.iterator]).call(e);
  let i;
  for (; (i = n.next()) && !i.done; ) {
    const o = i.value;
    t.call(e, o[0], o[1]);
  }
}, Fs = (e, t) => {
  let s;
  const n = [];
  for (; (s = e.exec(t)) !== null; )
    n.push(s);
  return n;
}, Ls = K("HTMLFormElement"), Vs = (e) => e.toLowerCase().replace(
  /[_-\s]([a-z\d])(\w*)/g,
  function(s, n, i) {
    return n.toUpperCase() + i;
  }
), je = (({ hasOwnProperty: e }) => (t, s) => e.call(t, s))(Object.prototype), Ms = K("RegExp"), at = (e, t) => {
  const s = Object.getOwnPropertyDescriptors(e), n = {};
  me(s, (i, o) => {
    t(i, o, e) !== !1 && (n[o] = i);
  }), Object.defineProperties(e, n);
}, Bs = (e) => {
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
}, Ns = (e, t) => {
  const s = {}, n = (i) => {
    i.forEach((o) => {
      s[o] = !0;
    });
  };
  return ae(e) ? n(e) : n(String(e).split(t)), s;
}, Ds = () => {
}, js = (e, t) => (e = +e, Number.isFinite(e) ? e : t), u = {
  isArray: ae,
  isArrayBuffer: it,
  isBuffer: ps,
  isFormData: _s,
  isArrayBufferView: hs,
  isString: fs,
  isNumber: ot,
  isBoolean: ms,
  isObject: lt,
  isPlainObject: pe,
  isUndefined: Se,
  isDate: gs,
  isFile: bs,
  isBlob: vs,
  isRegExp: Ms,
  isFunction: te,
  isStream: ws,
  isURLSearchParams: Ss,
  isTypedArray: Ts,
  isFileList: ys,
  forEach: me,
  merge: $e,
  extend: ks,
  trim: $s,
  stripBOM: Os,
  inherits: Cs,
  toFlatObject: Es,
  kindOf: Fe,
  kindOfTest: K,
  endsWith: Ps,
  toArray: As,
  forEachEntry: Rs,
  matchAll: Fs,
  isHTMLForm: Ls,
  hasOwnProperty: je,
  hasOwnProp: je,
  reduceDescriptors: at,
  freezeMethods: Bs,
  toObjectSet: Ns,
  toCamelCase: Vs,
  noop: Ds,
  toFiniteNumber: js
};
function k(e, t, s, n, i) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), s && (this.config = s), n && (this.request = n), i && (this.response = i);
}
u.inherits(k, Error, {
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
const ut = k.prototype, ct = {};
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
Object.defineProperties(k, ct);
Object.defineProperty(ut, "isAxiosError", { value: !0 });
k.from = (e, t, s, n, i, o) => {
  const r = Object.create(ut);
  return u.toFlatObject(e, r, function(p) {
    return p !== Error.prototype;
  }, (l) => l !== "isAxiosError"), k.call(r, e.message, t, s, n, i), r.cause = e, r.name = e.name, o && Object.assign(r, o), r;
};
var de = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Is = typeof self == "object" ? self.FormData : window.FormData;
function ke(e) {
  return u.isPlainObject(e) || u.isArray(e);
}
function dt(e) {
  return u.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function Ie(e, t, s) {
  return e ? e.concat(t).map(function(i, o) {
    return i = dt(i), !s && o ? "[" + i + "]" : i;
  }).join(s ? "." : "") : t;
}
function Us(e) {
  return u.isArray(e) && !e.some(ke);
}
const xs = u.toFlatObject(u, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function Hs(e) {
  return e && u.isFunction(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator];
}
function ge(e, t, s) {
  if (!u.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new (Is || FormData)(), s = u.toFlatObject(s, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(g, v) {
    return !u.isUndefined(v[g]);
  });
  const n = s.metaTokens, i = s.visitor || m, o = s.dots, r = s.indexes, p = (s.Blob || typeof Blob < "u" && Blob) && Hs(t);
  if (!u.isFunction(i))
    throw new TypeError("visitor must be a function");
  function a(b) {
    if (b === null)
      return "";
    if (u.isDate(b))
      return b.toISOString();
    if (!p && u.isBlob(b))
      throw new k("Blob is not supported. Use a Buffer instead.");
    return u.isArrayBuffer(b) || u.isTypedArray(b) ? p && typeof Blob == "function" ? new Blob([b]) : Buffer.from(b) : b;
  }
  function m(b, g, v) {
    let C = b;
    if (b && !v && typeof b == "object") {
      if (u.endsWith(g, "{}"))
        g = n ? g : g.slice(0, -2), b = JSON.stringify(b);
      else if (u.isArray(b) && Us(b) || u.isFileList(b) || u.endsWith(g, "[]") && (C = u.toArray(b)))
        return g = dt(g), C.forEach(function(V, Z) {
          !(u.isUndefined(V) || V === null) && t.append(
            r === !0 ? Ie([g], Z, o) : r === null ? g : g + "[]",
            a(V)
          );
        }), !1;
    }
    return ke(b) ? !0 : (t.append(Ie(v, g, o), a(b)), !1);
  }
  const y = [], P = Object.assign(xs, {
    defaultVisitor: m,
    convertValue: a,
    isVisitable: ke
  });
  function _(b, g) {
    if (!u.isUndefined(b)) {
      if (y.indexOf(b) !== -1)
        throw Error("Circular reference detected in " + g.join("."));
      y.push(b), u.forEach(b, function(C, A) {
        (!(u.isUndefined(C) || C === null) && i.call(
          t,
          C,
          u.isString(A) ? A.trim() : A,
          g,
          P
        )) === !0 && _(C, g ? g.concat(A) : [A]);
      }), y.pop();
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
  return this._pairs.map(function(i) {
    return s(i[0]) + "=" + s(i[1]);
  }, "").join("&");
};
function zs(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function ht(e, t, s) {
  if (!t)
    return e;
  const n = s && s.encode || zs, i = s && s.serialize;
  let o;
  if (i ? o = i(t, s) : o = u.isURLSearchParams(t) ? t.toString() : new Le(t, s).toString(n), o) {
    const r = e.indexOf("#");
    r !== -1 && (e = e.slice(0, r)), e += (e.indexOf("?") === -1 ? "?" : "&") + o;
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
}, qs = typeof URLSearchParams < "u" ? URLSearchParams : Le, Gs = FormData, Js = (() => {
  let e;
  return typeof navigator < "u" && ((e = navigator.product) === "ReactNative" || e === "NativeScript" || e === "NS") ? !1 : typeof window < "u" && typeof document < "u";
})(), Q = {
  isBrowser: !0,
  classes: {
    URLSearchParams: qs,
    FormData: Gs,
    Blob
  },
  isStandardBrowserEnv: Js,
  protocols: ["http", "https", "file", "blob", "url", "data"]
};
function Qs(e, t) {
  return ge(e, new Q.classes.URLSearchParams(), Object.assign({
    visitor: function(s, n, i, o) {
      return Q.isNode && u.isBuffer(s) ? (this.append(n, s.toString("base64")), !1) : o.defaultVisitor.apply(this, arguments);
    }
  }, t));
}
function Ks(e) {
  return u.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function Ws(e) {
  const t = {}, s = Object.keys(e);
  let n;
  const i = s.length;
  let o;
  for (n = 0; n < i; n++)
    o = s[n], t[o] = e[o];
  return t;
}
function mt(e) {
  function t(s, n, i, o) {
    let r = s[o++];
    const l = Number.isFinite(+r), p = o >= s.length;
    return r = !r && u.isArray(i) ? i.length : r, p ? (u.hasOwnProp(i, r) ? i[r] = [i[r], n] : i[r] = n, !l) : ((!i[r] || !u.isObject(i[r])) && (i[r] = []), t(s, n, i[r], o) && u.isArray(i[r]) && (i[r] = Ws(i[r])), !l);
  }
  if (u.isFormData(e) && u.isFunction(e.entries)) {
    const s = {};
    return u.forEachEntry(e, (n, i) => {
      t(Ks(n), i, s, 0);
    }), s;
  }
  return null;
}
function Ys(e, t, s) {
  const n = s.config.validateStatus;
  !s.status || !n || n(s.status) ? e(s) : t(new k(
    "Request failed with status code " + s.status,
    [k.ERR_BAD_REQUEST, k.ERR_BAD_RESPONSE][Math.floor(s.status / 100) - 4],
    s.config,
    s.request,
    s
  ));
}
const Xs = Q.isStandardBrowserEnv ? function() {
  return {
    write: function(s, n, i, o, r, l) {
      const p = [];
      p.push(s + "=" + encodeURIComponent(n)), u.isNumber(i) && p.push("expires=" + new Date(i).toGMTString()), u.isString(o) && p.push("path=" + o), u.isString(r) && p.push("domain=" + r), l === !0 && p.push("secure"), document.cookie = p.join("; ");
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
function Zs(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function en(e, t) {
  return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function gt(e, t) {
  return e && !Zs(t) ? en(e, t) : t;
}
const tn = Q.isStandardBrowserEnv ? function() {
  const t = /(msie|trident)/i.test(navigator.userAgent), s = document.createElement("a");
  let n;
  function i(o) {
    let r = o;
    return t && (s.setAttribute("href", r), r = s.href), s.setAttribute("href", r), {
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
  return n = i(window.location.href), function(r) {
    const l = u.isString(r) ? i(r) : r;
    return l.protocol === n.protocol && l.host === n.host;
  };
}() : function() {
  return function() {
    return !0;
  };
}();
function ue(e, t, s) {
  k.call(this, e == null ? "canceled" : e, k.ERR_CANCELED, t, s), this.name = "CanceledError";
}
u.inherits(ue, k, {
  __CANCEL__: !0
});
function sn(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
const nn = u.toObjectSet([
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
]), rn = (e) => {
  const t = {};
  let s, n, i;
  return e && e.split(`
`).forEach(function(r) {
    i = r.indexOf(":"), s = r.substring(0, i).trim().toLowerCase(), n = r.substring(i + 1).trim(), !(!s || t[s] && nn[s]) && (s === "set-cookie" ? t[s] ? t[s].push(n) : t[s] = [n] : t[s] = t[s] ? t[s] + ", " + n : n);
  }), t;
}, He = Symbol("internals"), bt = Symbol("defaults");
function re(e) {
  return e && String(e).trim().toLowerCase();
}
function he(e) {
  return e === !1 || e == null ? e : u.isArray(e) ? e.map(he) : String(e);
}
function on(e) {
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
function ln(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, s, n) => s.toUpperCase() + n);
}
function an(e, t) {
  const s = u.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((n) => {
    Object.defineProperty(e, n + s, {
      value: function(i, o, r) {
        return this[n].call(this, t, i, o, r);
      },
      configurable: !0
    });
  });
}
function ne(e, t) {
  t = t.toLowerCase();
  const s = Object.keys(e);
  let n = s.length, i;
  for (; n-- > 0; )
    if (i = s[n], t === i.toLowerCase())
      return i;
  return null;
}
function z(e, t) {
  e && this.set(e), this[bt] = t || null;
}
Object.assign(z.prototype, {
  set: function(e, t, s) {
    const n = this;
    function i(o, r, l) {
      const p = re(r);
      if (!p)
        throw new Error("header name must be a non-empty string");
      const a = ne(n, p);
      a && l !== !0 && (n[a] === !1 || l === !1) || (n[a || r] = he(o));
    }
    return u.isPlainObject(e) ? u.forEach(e, (o, r) => {
      i(o, r, t);
    }) : i(t, e, s), this;
  },
  get: function(e, t) {
    if (e = re(e), !e)
      return;
    const s = ne(this, e);
    if (s) {
      const n = this[s];
      if (!t)
        return n;
      if (t === !0)
        return on(n);
      if (u.isFunction(t))
        return t.call(this, n, s);
      if (u.isRegExp(t))
        return t.exec(n);
      throw new TypeError("parser must be boolean|regexp|function");
    }
  },
  has: function(e, t) {
    if (e = re(e), e) {
      const s = ne(this, e);
      return !!(s && (!t || ze(this, this[s], s, t)));
    }
    return !1;
  },
  delete: function(e, t) {
    const s = this;
    let n = !1;
    function i(o) {
      if (o = re(o), o) {
        const r = ne(s, o);
        r && (!t || ze(s, s[r], r, t)) && (delete s[r], n = !0);
      }
    }
    return u.isArray(e) ? e.forEach(i) : i(e), n;
  },
  clear: function() {
    return Object.keys(this).forEach(this.delete.bind(this));
  },
  normalize: function(e) {
    const t = this, s = {};
    return u.forEach(this, (n, i) => {
      const o = ne(s, i);
      if (o) {
        t[o] = he(n), delete t[i];
        return;
      }
      const r = e ? ln(i) : String(i).trim();
      r !== i && delete t[i], t[r] = he(n), s[r] = !0;
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
Object.assign(z, {
  from: function(e) {
    return u.isString(e) ? new this(rn(e)) : e instanceof this ? e : new this(e);
  },
  accessor: function(e) {
    const s = (this[He] = this[He] = {
      accessors: {}
    }).accessors, n = this.prototype;
    function i(o) {
      const r = re(o);
      s[r] || (an(n, o), s[r] = !0);
    }
    return u.isArray(e) ? e.forEach(i) : i(e), this;
  }
});
z.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent"]);
u.freezeMethods(z.prototype);
u.freezeMethods(z);
function un(e, t) {
  e = e || 10;
  const s = new Array(e), n = new Array(e);
  let i = 0, o = 0, r;
  return t = t !== void 0 ? t : 1e3, function(p) {
    const a = Date.now(), m = n[o];
    r || (r = a), s[i] = p, n[i] = a;
    let y = o, P = 0;
    for (; y !== i; )
      P += s[y++], y = y % e;
    if (i = (i + 1) % e, i === o && (o = (o + 1) % e), a - r < t)
      return;
    const _ = m && a - m;
    return _ ? Math.round(P * 1e3 / _) : void 0;
  };
}
function qe(e, t) {
  let s = 0;
  const n = un(50, 250);
  return (i) => {
    const o = i.loaded, r = i.lengthComputable ? i.total : void 0, l = o - s, p = n(l), a = o <= r;
    s = o;
    const m = {
      loaded: o,
      total: r,
      progress: r ? o / r : void 0,
      bytes: l,
      rate: p || void 0,
      estimated: p && r && a ? (r - o) / p : void 0
    };
    m[t ? "download" : "upload"] = !0, e(m);
  };
}
function Ge(e) {
  return new Promise(function(s, n) {
    let i = e.data;
    const o = z.from(e.headers).normalize(), r = e.responseType;
    let l;
    function p() {
      e.cancelToken && e.cancelToken.unsubscribe(l), e.signal && e.signal.removeEventListener("abort", l);
    }
    u.isFormData(i) && Q.isStandardBrowserEnv && o.setContentType(!1);
    let a = new XMLHttpRequest();
    if (e.auth) {
      const _ = e.auth.username || "", b = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : "";
      o.set("Authorization", "Basic " + btoa(_ + ":" + b));
    }
    const m = gt(e.baseURL, e.url);
    a.open(e.method.toUpperCase(), ht(m, e.params, e.paramsSerializer), !0), a.timeout = e.timeout;
    function y() {
      if (!a)
        return;
      const _ = z.from(
        "getAllResponseHeaders" in a && a.getAllResponseHeaders()
      ), g = {
        data: !r || r === "text" || r === "json" ? a.responseText : a.response,
        status: a.status,
        statusText: a.statusText,
        headers: _,
        config: e,
        request: a
      };
      Ys(function(C) {
        s(C), p();
      }, function(C) {
        n(C), p();
      }, g), a = null;
    }
    if ("onloadend" in a ? a.onloadend = y : a.onreadystatechange = function() {
      !a || a.readyState !== 4 || a.status === 0 && !(a.responseURL && a.responseURL.indexOf("file:") === 0) || setTimeout(y);
    }, a.onabort = function() {
      !a || (n(new k("Request aborted", k.ECONNABORTED, e, a)), a = null);
    }, a.onerror = function() {
      n(new k("Network Error", k.ERR_NETWORK, e, a)), a = null;
    }, a.ontimeout = function() {
      let b = e.timeout ? "timeout of " + e.timeout + "ms exceeded" : "timeout exceeded";
      const g = e.transitional || ft;
      e.timeoutErrorMessage && (b = e.timeoutErrorMessage), n(new k(
        b,
        g.clarifyTimeoutError ? k.ETIMEDOUT : k.ECONNABORTED,
        e,
        a
      )), a = null;
    }, Q.isStandardBrowserEnv) {
      const _ = (e.withCredentials || tn(m)) && e.xsrfCookieName && Xs.read(e.xsrfCookieName);
      _ && o.set(e.xsrfHeaderName, _);
    }
    i === void 0 && o.setContentType(null), "setRequestHeader" in a && u.forEach(o.toJSON(), function(b, g) {
      a.setRequestHeader(g, b);
    }), u.isUndefined(e.withCredentials) || (a.withCredentials = !!e.withCredentials), r && r !== "json" && (a.responseType = e.responseType), typeof e.onDownloadProgress == "function" && a.addEventListener("progress", qe(e.onDownloadProgress, !0)), typeof e.onUploadProgress == "function" && a.upload && a.upload.addEventListener("progress", qe(e.onUploadProgress)), (e.cancelToken || e.signal) && (l = (_) => {
      !a || (n(!_ || _.type ? new ue(null, e, a) : _), a.abort(), a = null);
    }, e.cancelToken && e.cancelToken.subscribe(l), e.signal && (e.signal.aborted ? l() : e.signal.addEventListener("abort", l)));
    const P = sn(m);
    if (P && Q.protocols.indexOf(P) === -1) {
      n(new k("Unsupported protocol " + P + ":", k.ERR_BAD_REQUEST, e));
      return;
    }
    a.send(i || null);
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
}, cn = {
  "Content-Type": "application/x-www-form-urlencoded"
};
function dn() {
  let e;
  return typeof XMLHttpRequest < "u" ? e = Qe.getAdapter("xhr") : typeof process < "u" && u.kindOf(process) === "process" && (e = Qe.getAdapter("http")), e;
}
function pn(e, t, s) {
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
  adapter: dn(),
  transformRequest: [function(t, s) {
    const n = s.getContentType() || "", i = n.indexOf("application/json") > -1, o = u.isObject(t);
    if (o && u.isHTMLForm(t) && (t = new FormData(t)), u.isFormData(t))
      return i && i ? JSON.stringify(mt(t)) : t;
    if (u.isArrayBuffer(t) || u.isBuffer(t) || u.isStream(t) || u.isFile(t) || u.isBlob(t))
      return t;
    if (u.isArrayBufferView(t))
      return t.buffer;
    if (u.isURLSearchParams(t))
      return s.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let l;
    if (o) {
      if (n.indexOf("application/x-www-form-urlencoded") > -1)
        return Qs(t, this.formSerializer).toString();
      if ((l = u.isFileList(t)) || n.indexOf("multipart/form-data") > -1) {
        const p = this.env && this.env.FormData;
        return ge(
          l ? { "files[]": t } : t,
          p && new p(),
          this.formSerializer
        );
      }
    }
    return o || i ? (s.setContentType("application/json", !1), pn(t)) : t;
  }],
  transformResponse: [function(t) {
    const s = this.transitional || se.transitional, n = s && s.forcedJSONParsing, i = this.responseType === "json";
    if (t && u.isString(t) && (n && !this.responseType || i)) {
      const r = !(s && s.silentJSONParsing) && i;
      try {
        return JSON.parse(t);
      } catch (l) {
        if (r)
          throw l.name === "SyntaxError" ? k.from(l, k.ERR_BAD_RESPONSE, this, null, this.response) : l;
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
  se.headers[t] = u.merge(cn);
});
function be(e, t) {
  const s = this || se, n = t || s, i = z.from(n.headers);
  let o = n.data;
  return u.forEach(e, function(l) {
    o = l.call(s, o, i.normalize(), t ? t.status : void 0);
  }), i.normalize(), o;
}
function vt(e) {
  return !!(e && e.__CANCEL__);
}
function ve(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new ue();
}
function Ke(e) {
  return ve(e), e.headers = z.from(e.headers), e.data = be.call(
    e,
    e.transformRequest
  ), (e.adapter || se.adapter)(e).then(function(n) {
    return ve(e), n.data = be.call(
      e,
      e.transformResponse,
      n
    ), n.headers = z.from(n.headers), n;
  }, function(n) {
    return vt(n) || (ve(e), n && n.response && (n.response.data = be.call(
      e,
      e.transformResponse,
      n.response
    ), n.response.headers = z.from(n.response.headers))), Promise.reject(n);
  });
}
function ie(e, t) {
  t = t || {};
  const s = {};
  function n(a, m) {
    return u.isPlainObject(a) && u.isPlainObject(m) ? u.merge(a, m) : u.isPlainObject(m) ? u.merge({}, m) : u.isArray(m) ? m.slice() : m;
  }
  function i(a) {
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
  function r(a) {
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
  const p = {
    url: o,
    method: o,
    data: o,
    baseURL: r,
    transformRequest: r,
    transformResponse: r,
    paramsSerializer: r,
    timeout: r,
    timeoutMessage: r,
    withCredentials: r,
    adapter: r,
    responseType: r,
    xsrfCookieName: r,
    xsrfHeaderName: r,
    onUploadProgress: r,
    onDownloadProgress: r,
    decompress: r,
    maxContentLength: r,
    maxBodyLength: r,
    beforeRedirect: r,
    transport: r,
    httpAgent: r,
    httpsAgent: r,
    cancelToken: r,
    socketPath: r,
    responseEncoding: r,
    validateStatus: l
  };
  return u.forEach(Object.keys(e).concat(Object.keys(t)), function(m) {
    const y = p[m] || i, P = y(m);
    u.isUndefined(P) && y !== l || (s[m] = P);
  }), s;
}
const yt = "1.1.3", Ve = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  Ve[e] = function(n) {
    return typeof n === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const We = {};
Ve.transitional = function(t, s, n) {
  function i(o, r) {
    return "[Axios v" + yt + "] Transitional option '" + o + "'" + r + (n ? ". " + n : "");
  }
  return (o, r, l) => {
    if (t === !1)
      throw new k(
        i(r, " has been removed" + (s ? " in " + s : "")),
        k.ERR_DEPRECATED
      );
    return s && !We[r] && (We[r] = !0, console.warn(
      i(
        r,
        " has been deprecated since v" + s + " and will be removed in the near future"
      )
    )), t ? t(o, r, l) : !0;
  };
};
function hn(e, t, s) {
  if (typeof e != "object")
    throw new k("options must be an object", k.ERR_BAD_OPTION_VALUE);
  const n = Object.keys(e);
  let i = n.length;
  for (; i-- > 0; ) {
    const o = n[i], r = t[o];
    if (r) {
      const l = e[o], p = l === void 0 || r(l, o, e);
      if (p !== !0)
        throw new k("option " + o + " must be " + p, k.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (s !== !0)
      throw new k("Unknown option " + o, k.ERR_BAD_OPTION);
  }
}
const Oe = {
  assertOptions: hn,
  validators: Ve
}, W = Oe.validators;
class ee {
  constructor(t) {
    this.defaults = t, this.interceptors = {
      request: new xe(),
      response: new xe()
    };
  }
  request(t, s) {
    typeof t == "string" ? (s = s || {}, s.url = t) : s = t || {}, s = ie(this.defaults, s);
    const { transitional: n, paramsSerializer: i } = s;
    n !== void 0 && Oe.assertOptions(n, {
      silentJSONParsing: W.transitional(W.boolean),
      forcedJSONParsing: W.transitional(W.boolean),
      clarifyTimeoutError: W.transitional(W.boolean)
    }, !1), i !== void 0 && Oe.assertOptions(i, {
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
    ), s.headers = new z(s.headers, o);
    const r = [];
    let l = !0;
    this.interceptors.request.forEach(function(b) {
      typeof b.runWhen == "function" && b.runWhen(s) === !1 || (l = l && b.synchronous, r.unshift(b.fulfilled, b.rejected));
    });
    const p = [];
    this.interceptors.response.forEach(function(b) {
      p.push(b.fulfilled, b.rejected);
    });
    let a, m = 0, y;
    if (!l) {
      const _ = [Ke.bind(this), void 0];
      for (_.unshift.apply(_, r), _.push.apply(_, p), y = _.length, a = Promise.resolve(s); m < y; )
        a = a.then(_[m++], _[m++]);
      return a;
    }
    y = r.length;
    let P = s;
    for (m = 0; m < y; ) {
      const _ = r[m++], b = r[m++];
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
    for (m = 0, y = p.length; m < y; )
      a = a.then(p[m++], p[m++]);
    return a;
  }
  getUri(t) {
    t = ie(this.defaults, t);
    const s = gt(t.baseURL, t.url);
    return ht(s, t.params, t.paramsSerializer);
  }
}
u.forEach(["delete", "get", "head", "options"], function(t) {
  ee.prototype[t] = function(s, n) {
    return this.request(ie(n || {}, {
      method: t,
      url: s,
      data: (n || {}).data
    }));
  };
});
u.forEach(["post", "put", "patch"], function(t) {
  function s(n) {
    return function(o, r, l) {
      return this.request(ie(l || {}, {
        method: t,
        headers: n ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: o,
        data: r
      }));
    };
  }
  ee.prototype[t] = s(), ee.prototype[t + "Form"] = s(!0);
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
    this.promise.then((i) => {
      if (!n._listeners)
        return;
      let o = n._listeners.length;
      for (; o-- > 0; )
        n._listeners[o](i);
      n._listeners = null;
    }), this.promise.then = (i) => {
      let o;
      const r = new Promise((l) => {
        n.subscribe(l), o = l;
      }).then(i);
      return r.cancel = function() {
        n.unsubscribe(o);
      }, r;
    }, t(function(o, r, l) {
      n.reason || (n.reason = new ue(o, r, l), s(n.reason));
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
      token: new Me(function(i) {
        t = i;
      }),
      cancel: t
    };
  }
}
function fn(e) {
  return function(s) {
    return e.apply(null, s);
  };
}
function mn(e) {
  return u.isObject(e) && e.isAxiosError === !0;
}
function wt(e) {
  const t = new ee(e), s = nt(ee.prototype.request, t);
  return u.extend(s, ee.prototype, t, { allOwnKeys: !0 }), u.extend(s, t, null, { allOwnKeys: !0 }), s.create = function(i) {
    return wt(ie(e, i));
  }, s;
}
const M = wt(se);
M.Axios = ee;
M.CanceledError = ue;
M.CancelToken = Me;
M.isCancel = vt;
M.VERSION = yt;
M.toFormData = ge;
M.AxiosError = k;
M.Cancel = M.CanceledError;
M.all = function(t) {
  return Promise.all(t);
};
M.spread = fn;
M.isAxiosError = mn;
M.formToJSON = (e) => mt(u.isHTMLForm(e) ? new FormData(e) : e);
const gn = F({
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
    const t = $(null), s = () => {
      t.value.click();
    }, n = ({ target: a }) => {
      if (a && a.files.length > 0) {
        let m = new FormData();
        for (let y = 0; y < a.files.length; y++) {
          const P = a.files[y];
          m.append("files", P);
        }
        r(m), t.value.value = "";
      }
    }, i = $([]), o = $(!1), r = (a) => {
      console.log(a), o.value = !0, M.post(e.routePostFiles, a).then((m) => {
        m.data.success ? alert("success") : alert("error"), o.value = !1;
      }).catch((m) => {
        console.log(m), o.value = !1;
      });
    }, l = (a) => {
      i.value.length > 0 && i.value.splice(a, 1);
    }, p = () => {
      M.get(e.routeGetFiles).then((a) => {
        console.log("okk", a);
      }).catch((a) => {
        console.log(a);
      });
    };
    return Pe(() => {
      p();
    }), {
      handleClick: s,
      handleInputChange: n,
      inputFileRef: t,
      fileList: i,
      deleteFile: l,
      getFiles: p,
      loading: o
    };
  }
}), bn = { class: "generic-input" }, vn = {
  key: 0,
  class: "generic-input__label text-sm secondary-color"
}, yn = { class: "file-list" }, wn = ["onClick"], _n = /* @__PURE__ */ c("svg", {
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
], -1), Sn = [
  _n
], $n = { class: "flexAligned" }, kn = { style: { "margin-right": "10px" } }, On = {
  style: { "margin-right": "8px" },
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  "stroke-width": "1.5",
  stroke: "#FFFFFF",
  width: "16px",
  height: "16px"
}, Cn = /* @__PURE__ */ c("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
}, null, -1), En = [
  Cn
];
function Pn(e, t, s, n, i, o) {
  const r = j("custom-button"), l = j("custom-loader");
  return d(), h("div", bn, [
    e.label ? (d(), h("label", vn, w(e.label), 1)) : S("", !0),
    c("ul", yn, [
      (d(!0), h(D, null, J(e.fileList, (p, a) => (d(), h("li", {
        class: "file-list-item",
        key: a
      }, [
        N(w(p.original_name + "." + p.extension) + " ", 1),
        c("div", {
          onClick: (m) => e.deleteFile(a),
          class: "item-cancel"
        }, Sn, 8, wn)
      ]))), 128))
    ]),
    c("input", {
      type: "file",
      class: "generic-input__input-file--hidden",
      ref: "inputFileRef",
      onChange: t[0] || (t[0] = (...p) => e.handleInputChange && e.handleInputChange(...p)),
      multiple: ""
    }, null, 544),
    c("div", $n, [
      c("div", kn, [
        f(r, {
          label: "Carica",
          styleType: "primary",
          disabled: !1,
          onOnClick: e.handleClick
        }, {
          "slot-left": B(() => [
            (d(), h("svg", On, En))
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
const wl = /* @__PURE__ */ L(gn, [["render", Pn]]);
function ye(e) {
  return e === 0 ? !1 : Array.isArray(e) && e.length === 0 ? !0 : !e;
}
function An(e) {
  return (...t) => !e(...t);
}
function Tn(e, t) {
  return e === void 0 && (e = "undefined"), e === null && (e = "null"), e === !1 && (e = "false"), e.toString().toLowerCase().indexOf(t.trim()) !== -1;
}
function _t(e, t, s, n) {
  return t ? e.filter((i) => Tn(n(i, s), t)).sort((i, o) => n(i, s).length - n(o, s).length) : e;
}
function Rn(e) {
  return e.filter((t) => !t.$isLabel);
}
function we(e, t) {
  return (s) => s.reduce((n, i) => i[e] && i[e].length ? (n.push({
    $groupLabel: i[t],
    $isLabel: !0
  }), n.concat(i[e])) : n, []);
}
function Fn(e, t, s, n, i) {
  return (o) => o.map((r) => {
    if (!r[s])
      return console.warn("Options passed to vue-multiselect do not contain groups, despite the config."), [];
    const l = _t(r[s], e, t, i);
    return l.length ? {
      [n]: r[n],
      [s]: l
    } : [];
  });
}
const Ye = (...e) => (t) => e.reduce((s, n) => n(s), t);
var Ln = {
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
        return ye(e) ? "" : t ? e[t] : e;
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
      return this.internalSearch ? s = this.groupValues ? this.filterAndFlat(s, t, this.label) : _t(s, t, this.label, this.customLabel) : s = this.groupValues ? we(this.groupValues, this.groupLabel)(s) : s, s = this.hideSelected ? s.filter(An(this.isSelected)) : s, this.taggable && t.length && !this.isExistingOption(t) && (this.tagPosition === "bottom" ? s.push({ isTag: !0, label: e }) : s.unshift({ isTag: !0, label: e })), s.slice(0, this.optionsLimit);
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
        Rn
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
      if (ye(e))
        return "";
      if (e.isTag)
        return e.label;
      if (e.$isLabel)
        return e.$groupLabel;
      const t = this.customLabel(e, this.label);
      return ye(t) ? "" : t;
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
}, Vn = {
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
  mixins: [Ln, Vn],
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
const Mn = {
  ref: "tags",
  class: "multiselect__tags"
}, Bn = { class: "multiselect__tags-wrap" }, Nn = { class: "multiselect__spinner" }, Dn = { key: 0 }, jn = { class: "multiselect__option" }, In = { class: "multiselect__option" }, Un = /* @__PURE__ */ N("No elements found. Consider changing the search query."), xn = { class: "multiselect__option" }, Hn = /* @__PURE__ */ N("List is empty.");
function zn(e, t, s, n, i, o) {
  return d(), E("div", {
    tabindex: e.searchable ? -1 : s.tabindex,
    class: [{ "multiselect--active": e.isOpen, "multiselect--disabled": s.disabled, "multiselect--above": o.isAbove }, "multiselect"],
    onFocus: t[14] || (t[14] = (r) => e.activate()),
    onBlur: t[15] || (t[15] = (r) => e.searchable ? !1 : e.deactivate()),
    onKeydown: [
      t[16] || (t[16] = G(R((r) => e.pointerForward(), ["self", "prevent"]), ["down"])),
      t[17] || (t[17] = G(R((r) => e.pointerBackward(), ["self", "prevent"]), ["up"]))
    ],
    onKeypress: t[18] || (t[18] = G(R((r) => e.addPointerElement(r), ["stop", "self"]), ["enter", "tab"])),
    onKeyup: t[19] || (t[19] = G((r) => e.deactivate(), ["esc"])),
    role: "combobox",
    "aria-owns": "listbox-" + e.id
  }, [
    O(e.$slots, "caret", { toggle: e.toggle }, () => [
      f("div", {
        onMousedown: t[1] || (t[1] = R((r) => e.toggle(), ["prevent", "stop"])),
        class: "multiselect__select"
      }, null, 32)
    ]),
    O(e.$slots, "clear", { search: e.search }),
    f("div", Mn, [
      O(e.$slots, "selection", {
        search: e.search,
        remove: e.removeElement,
        values: o.visibleValues,
        isOpen: e.isOpen
      }, () => [
        H(f("div", Bn, [
          (d(!0), E(D, null, J(o.visibleValues, (r, l) => O(e.$slots, "tag", {
            option: r,
            search: e.search,
            remove: e.removeElement
          }, () => [
            (d(), E("span", {
              class: "multiselect__tag",
              key: l
            }, [
              f("span", {
                textContent: w(e.getOptionLabel(r))
              }, null, 8, ["textContent"]),
              f("i", {
                tabindex: "1",
                onKeypress: G(R((p) => e.removeElement(r), ["prevent"]), ["enter"]),
                onMousedown: R((p) => e.removeElement(r), ["prevent"]),
                class: "multiselect__tag-icon"
              }, null, 40, ["onKeypress", "onMousedown"])
            ]))
          ])), 256))
        ], 512), [
          [Y, o.visibleValues.length > 0]
        ]),
        e.internalValue && e.internalValue.length > s.limit ? O(e.$slots, "limit", { key: 0 }, () => [
          f("strong", {
            class: "multiselect__strong",
            textContent: w(s.limitText(e.internalValue.length - s.limit))
          }, null, 8, ["textContent"])
        ]) : S("v-if", !0)
      ]),
      f(q, { name: "multiselect__loading" }, {
        default: B(() => [
          O(e.$slots, "loading", {}, () => [
            H(f("div", Nn, null, 512), [
              [Y, s.loading]
            ])
          ])
        ]),
        _: 3
      }),
      e.searchable ? (d(), E("input", {
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
        onInput: t[2] || (t[2] = (r) => e.updateSearch(r.target.value)),
        onFocus: t[3] || (t[3] = R((r) => e.activate(), ["prevent"])),
        onBlur: t[4] || (t[4] = R((r) => e.deactivate(), ["prevent"])),
        onKeyup: t[5] || (t[5] = G((r) => e.deactivate(), ["esc"])),
        onKeydown: [
          t[6] || (t[6] = G(R((r) => e.pointerForward(), ["prevent"]), ["down"])),
          t[7] || (t[7] = G(R((r) => e.pointerBackward(), ["prevent"]), ["up"])),
          t[9] || (t[9] = G(R((r) => e.removeLastElement(), ["stop"]), ["delete"]))
        ],
        onKeypress: t[8] || (t[8] = G(R((r) => e.addPointerElement(r), ["prevent", "stop", "self"]), ["enter"])),
        class: "multiselect__input",
        "aria-controls": "listbox-" + e.id
      }, null, 44, ["name", "id", "placeholder", "value", "disabled", "tabindex", "aria-controls"])) : S("v-if", !0),
      o.isSingleLabelVisible ? (d(), E("span", {
        key: 1,
        class: "multiselect__single",
        onMousedown: t[10] || (t[10] = R((...r) => e.toggle && e.toggle(...r), ["prevent"]))
      }, [
        O(e.$slots, "singleLabel", { option: o.singleValue }, () => [
          N(w(e.currentOptionLabel), 1)
        ])
      ], 32)) : S("v-if", !0),
      o.isPlaceholderVisible ? (d(), E("span", {
        key: 2,
        class: "multiselect__placeholder",
        onMousedown: t[11] || (t[11] = R((...r) => e.toggle && e.toggle(...r), ["prevent"]))
      }, [
        O(e.$slots, "placeholder", {}, () => [
          N(w(e.placeholder), 1)
        ])
      ], 32)) : S("v-if", !0)
    ], 512),
    f(q, { name: "multiselect" }, {
      default: B(() => [
        H(f("div", {
          class: "multiselect__content-wrapper",
          onFocus: t[12] || (t[12] = (...r) => e.activate && e.activate(...r)),
          tabindex: "-1",
          onMousedown: t[13] || (t[13] = R(() => {
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
            O(e.$slots, "beforeList"),
            e.multiple && e.max === e.internalValue.length ? (d(), E("li", Dn, [
              f("span", jn, [
                O(e.$slots, "maxElements", {}, () => [
                  N("Maximum of " + w(e.max) + " options selected. First remove a selected option to select another.", 1)
                ])
              ])
            ])) : S("v-if", !0),
            !e.max || e.internalValue.length < e.max ? (d(!0), E(D, { key: 1 }, J(e.filteredOptions, (r, l) => (d(), E("li", {
              class: "multiselect__element",
              key: l,
              id: e.id + "-" + l,
              role: r && (r.$isLabel || r.$isDisabled) ? null : "option"
            }, [
              r && (r.$isLabel || r.$isDisabled) ? S("v-if", !0) : (d(), E("span", {
                key: 0,
                class: [e.optionHighlight(l, r), "multiselect__option"],
                onClick: R((p) => e.select(r), ["stop"]),
                onMouseenter: R((p) => e.pointerSet(l), ["self"]),
                "data-select": r && r.isTag ? e.tagPlaceholder : o.selectLabelText,
                "data-selected": o.selectedLabelText,
                "data-deselect": o.deselectLabelText
              }, [
                O(e.$slots, "option", {
                  option: r,
                  search: e.search,
                  index: l
                }, () => [
                  f("span", null, w(e.getOptionLabel(r)), 1)
                ])
              ], 42, ["onClick", "onMouseenter", "data-select", "data-selected", "data-deselect"])),
              r && (r.$isLabel || r.$isDisabled) ? (d(), E("span", {
                key: 1,
                "data-select": e.groupSelect && o.selectGroupLabelText,
                "data-deselect": e.groupSelect && o.deselectGroupLabelText,
                class: [e.groupHighlight(l, r), "multiselect__option"],
                onMouseenter: R((p) => e.groupSelect && e.pointerSet(l), ["self"]),
                onMousedown: R((p) => e.selectGroup(r), ["prevent"])
              }, [
                O(e.$slots, "option", {
                  option: r,
                  search: e.search,
                  index: l
                }, () => [
                  f("span", null, w(e.getOptionLabel(r)), 1)
                ])
              ], 42, ["data-select", "data-deselect", "onMouseenter", "onMousedown"])) : S("v-if", !0)
            ], 8, ["id", "role"]))), 128)) : S("v-if", !0),
            H(f("li", null, [
              f("span", In, [
                O(e.$slots, "noResult", { search: e.search }, () => [
                  Un
                ])
              ])
            ], 512), [
              [Y, s.showNoResults && e.filteredOptions.length === 0 && e.search && !s.loading]
            ]),
            H(f("li", null, [
              f("span", xn, [
                O(e.$slots, "noOptions", {}, () => [
                  Hn
                ])
              ])
            ], 512), [
              [Y, s.showNoOptions && e.options.length === 0 && !e.search && !s.loading]
            ]),
            O(e.$slots, "afterList")
          ], 12, ["id"])
        ], 36), [
          [Y, e.isOpen]
        ])
      ]),
      _: 3
    })
  ], 42, ["tabindex", "aria-owns"]);
}
Be.render = zn;
const qn = F({
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
const Gn = { class: "custom-multiselect" }, Jn = {
  key: 0,
  for: "exampleFormControlSelect1",
  class: "custom-multiselect__label text-sm"
}, Qn = { class: "multiselect__tags-wrap" }, Kn = { class: "multiselect__tag" }, Wn = ["onClick"];
function Yn(e, t, s, n, i, o) {
  const r = j("vue-multiselect");
  return d(), h("div", Gn, [
    e.label ? (d(), h("label", Jn, w(e.label), 1)) : S("", !0),
    f(r, {
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
        c("div", Qn, [
          c("span", Kn, [
            c("span", null, w(l.option.label), 1),
            c("i", {
              onClick: (p) => e.removeOption(l.option),
              tabindex: "1",
              class: "multiselect__tag-icon"
            }, null, 8, Wn)
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
const _l = /* @__PURE__ */ L(qn, [["render", Yn]]);
var Xn = "Expected a function", Xe = 0 / 0, Zn = "[object Symbol]", er = /^\s+|\s+$/g, tr = /^[-+]0x[0-9a-f]+$/i, sr = /^0b[01]+$/i, nr = /^0o[0-7]+$/i, rr = parseInt, ir = typeof de == "object" && de && de.Object === Object && de, or = typeof self == "object" && self && self.Object === Object && self, lr = ir || or || Function("return this")(), ar = Object.prototype, ur = ar.toString, cr = Math.max, dr = Math.min, _e = function() {
  return lr.Date.now();
};
function pr(e, t, s) {
  var n, i, o, r, l, p, a = 0, m = !1, y = !1, P = !0;
  if (typeof e != "function")
    throw new TypeError(Xn);
  t = Ze(t) || 0, Ce(s) && (m = !!s.leading, y = "maxWait" in s, o = y ? cr(Ze(s.maxWait) || 0, t) : o, P = "trailing" in s ? !!s.trailing : P);
  function _(T) {
    var x = n, U = i;
    return n = i = void 0, a = T, r = e.apply(U, x), r;
  }
  function b(T) {
    return a = T, l = setTimeout(C, t), m ? _(T) : r;
  }
  function g(T) {
    var x = T - p, U = T - a, ce = t - x;
    return y ? dr(ce, o - U) : ce;
  }
  function v(T) {
    var x = T - p, U = T - a;
    return p === void 0 || x >= t || x < 0 || y && U >= o;
  }
  function C() {
    var T = _e();
    if (v(T))
      return A(T);
    l = setTimeout(C, g(T));
  }
  function A(T) {
    return l = void 0, P && n ? _(T) : (n = i = void 0, r);
  }
  function V() {
    l !== void 0 && clearTimeout(l), a = 0, n = p = i = l = void 0;
  }
  function Z() {
    return l === void 0 ? r : A(_e());
  }
  function I() {
    var T = _e(), x = v(T);
    if (n = arguments, i = this, p = T, x) {
      if (l === void 0)
        return b(p);
      if (y)
        return l = setTimeout(C, t), _(p);
    }
    return l === void 0 && (l = setTimeout(C, t)), r;
  }
  return I.cancel = V, I.flush = Z, I;
}
function Ce(e) {
  var t = typeof e;
  return !!e && (t == "object" || t == "function");
}
function hr(e) {
  return !!e && typeof e == "object";
}
function fr(e) {
  return typeof e == "symbol" || hr(e) && ur.call(e) == Zn;
}
function Ze(e) {
  if (typeof e == "number")
    return e;
  if (fr(e))
    return Xe;
  if (Ce(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = Ce(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = e.replace(er, "");
  var s = sr.test(e);
  return s || nr.test(e) ? rr(e.slice(2), s ? 2 : 8) : tr.test(e) ? Xe : +e;
}
var mr = pr;
const gr = F({
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
    debouncedSearch: mr(function(e) {
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
}), br = { class: "custom-multiselect" }, vr = {
  key: 0,
  class: "custom-multiselect__label text-sm"
}, yr = { class: "multiselect__tags-wrap" }, wr = { class: "multiselect__tag" }, _r = ["onClick"];
function Sr(e, t, s, n, i, o) {
  const r = j("vue-multiselect");
  return d(), h("div", br, [
    e.label ? (d(), h("label", vr, w(e.label), 1)) : S("", !0),
    f(r, {
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
        c("div", yr, [
          c("span", wr, [
            c("span", null, w(l.option.label), 1),
            c("i", {
              onClick: (p) => e.removeOption(l.option),
              tabindex: "1",
              class: "multiselect__tag-icon"
            }, null, 8, _r)
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
const Sl = /* @__PURE__ */ L(gr, [["render", Sr]]), $r = F({
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
}), kr = { class: "custom-select" }, Or = {
  key: 0,
  for: "exampleFormControlSelect1",
  class: "custom-select__label text-sm"
}, Cr = ["name", "id", "disabled"], Er = {
  selected: "",
  value: "0"
}, Pr = ["value", "selected"];
function Ar(e, t, s, n, i, o) {
  return d(), h("div", kr, [
    e.label ? (d(), h("label", Or, w(e.label), 1)) : S("", !0),
    c("select", {
      name: e.name,
      class: "custom-select__select",
      id: "select_" + e.name,
      onChange: t[0] || (t[0] = (...r) => e.handleSelectChange && e.handleSelectChange(...r)),
      disabled: e.disabled
    }, [
      c("option", Er, w(e.placeholder), 1),
      (d(!0), h(D, null, J(e.options, (r, l) => (d(), h("option", {
        key: l,
        value: r.value,
        selected: r.value == e.value
      }, w(r.label), 9, Pr))), 128))
    ], 40, Cr)
  ]);
}
const Tr = /* @__PURE__ */ L($r, [["render", Ar]]), Rr = F({
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
}), Fr = { class: "custom-radio-group" }, Lr = ["name", "id", "value", "disabled", "checked"], Vr = ["onClick"], Mr = ["for"];
function Br(e, t, s, n, i, o) {
  return d(), h("div", Fr, [
    (d(!0), h(D, null, J(e.options, (r) => (d(), h("div", {
      key: r.id,
      class: X([{ disabled: r.disabled, checked: r.value == e.value }, "custom-radio-group__single-radio"])
    }, [
      c("input", {
        type: "radio",
        name: r.name,
        id: r.id,
        value: r.value,
        disabled: r.disabled,
        class: "custom-radio-group__single-radio__radio-hidden",
        checked: r.value == e.value,
        onChange: t[0] || (t[0] = (...l) => e.checkRadio && e.checkRadio(...l))
      }, null, 40, Lr),
      c("span", {
        class: "custom-radio-group__single-radio__radio",
        onClick: (l) => e.checkRadio({
          target: {
            value: r.value
          }
        })
      }, null, 8, Vr),
      c("label", {
        class: "custom-radio-group__single-radio__radio-label",
        for: r.id
      }, w(r.label), 9, Mr)
    ], 2))), 128))
  ]);
}
const $l = /* @__PURE__ */ L(Rr, [["render", Br]]), Nr = F({
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
}), Dr = { class: "generic-input" }, jr = {
  key: 0,
  class: "generic-input__label text-sm secondary-color"
};
function Ir(e, t, s, n, i, o) {
  return d(), h("div", Dr, [
    e.label ? (d(), h("label", jr, w(e.label), 1)) : S("", !0),
    H(c("textarea", tt(e.$attrs, {
      "onUpdate:modelValue": t[0] || (t[0] = (r) => e.computedValue = r),
      class: "generic-input__input " + e.classes
    }), null, 16), [
      [Ae, e.computedValue]
    ])
  ]);
}
const kl = /* @__PURE__ */ L(Nr, [["render", Ir]]), Ur = F({
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
}), xr = { class: "generic-input" }, Hr = {
  key: 0,
  class: "generic-input__label text-sm secondary-color"
}, zr = { class: "input-container" }, qr = {
  key: 1,
  class: "generic-input__read-only"
};
function Gr(e, t, s, n, i, o) {
  return d(), h("div", xr, [
    e.label ? (d(), h("label", Hr, w(e.label), 1)) : S("", !0),
    c("div", zr, [
      O(e.$slots, "prepend"),
      e.readOnly ? S("", !0) : H((d(), h("input", tt({ key: 0 }, e.$attrs, {
        "onUpdate:modelValue": t[0] || (t[0] = (r) => e.computedValue = r),
        class: "generic-input__input " + e.classes
      }), null, 16)), [
        [kt, e.computedValue]
      ])
    ]),
    e.readOnly ? (d(), h("div", qr, w(e.computedValue), 1)) : S("", !0)
  ]);
}
const St = /* @__PURE__ */ L(Ur, [["render", Gr]]), Jr = F({
  name: "Breadcrumbs",
  props: {
    path_breadcrumbs: {
      type: Array,
      required: !0,
      default: []
    }
  }
}), Qr = { class: "text-secondary text-xl" }, Kr = {
  key: 0,
  class: "font-bold"
}, Wr = { key: 1 };
function Yr(e, t, s, n, i, o) {
  const r = j("router-link");
  return d(), h("div", Qr, [
    (d(!0), h(D, null, J(e.path_breadcrumbs, (l, p) => (d(), h(D, { key: p }, [
      p === e.path_breadcrumbs.length - 1 ? (d(), h("span", Kr, w(l.label), 1)) : (d(), h(D, { key: 1 }, [
        l.path ? (d(), E(r, {
          key: 0,
          to: l.path,
          class: "cursor-pointer hover:underline"
        }, {
          default: B(() => [
            N(w(l.label), 1)
          ]),
          _: 2
        }, 1032, ["to"])) : (d(), h("span", Wr, w(l.label), 1)),
        N(" / ")
      ], 64))
    ], 64))), 128))
  ]);
}
const Xr = /* @__PURE__ */ L(Jr, [["render", Yr]]), Zr = F({
  name: "FormSeparator"
}), ei = {
  style: { width: "calc(100% + 2 * 24px)", transform: "translateX(-24px)" },
  class: "border-secondaryLight mb-8 mt-9"
};
function ti(e, t, s, n, i, o) {
  return d(), h("hr", ei);
}
const Ol = /* @__PURE__ */ L(Zr, [["render", ti]]), si = "_name", ni = F({
  name: "FilterbleModal",
  components: {
    CustomButton: st,
    GenericInput: St,
    CustomSelect: Tr,
    Transition: q
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
      for (let v in o.value) {
        const C = e.filterables.columns.findIndex((A) => A.column === v);
        o.value[v] && (g.filter[C] = o.value[v]);
      }
      s(), t.emit("filter", g);
    }, i = (g) => {
      let v;
      switch (g) {
        case "text":
          v = "";
          break;
        case "select":
          v = 0;
          break;
        case "checkbox":
          v = !1;
          break;
        case "multiselect":
          v = 0;
          break;
      }
      return v;
    }, o = $({}), r = $({}), l = $({}), p = $({}), a = () => {
      e.filterables && e.filterables.columns.forEach((g, v) => {
        m(g), y(g, v);
      });
    }, m = (g) => {
      o.value[g.column] = i(g.type);
    }, y = (g, v) => {
      g.route && (l.value[g.column] = !0, M.get(e.baseApiPath + g.route).then((C) => {
        r.value[g.column] = C.data.data.options, e.filterables.relations.forEach((A) => {
          const V = Object.values(A.columns);
          if (V.includes(v) && A.order === null) {
            let Z = V.filter((I) => I !== v);
            p.value[g.column] = {
              update: Z,
              index: v,
              route: A.route
            };
          }
        }), l.value[g.column] = !1;
      }).catch((C) => {
        console.log(C);
      }));
    }, P = $(!1);
    return Ot(() => e.isOpen, (g, v) => {
      g === !0 && v === !1 && P.value === !1 && (P.value = !0, a());
    }), {
      emitCloseModal: s,
      emitFilter: n,
      state: o,
      loadingState: l,
      optionsState: r,
      cleanResults: () => {
        e.filterables.columns.forEach((g, v) => {
          o.value[g.column] = i(g.type), g.route && y(g, v);
        });
      },
      handleChangeRelationsSelect: (g, v, C) => {
        if (p.value[v]) {
          const A = [], V = [];
          if (p.value[v].update.forEach((I) => {
            A.push(e.filterables.columns[I].column), V.push(I);
          }), parseInt(g.target.value) === 0) {
            y(e.filterables.columns[C], C), A.forEach((I, T) => {
              m(e.filterables.columns[V[T]]), y(e.filterables.columns[V[T]], V[T]);
            });
            return;
          }
          const Z = e.filterables.columns[p.value[v].index].column;
          M.get(e.baseApiPath + p.value[v].route).then(({ data: I }) => {
            const T = parseInt(o.value[v]), x = I.data.filter((U) => U.properties[Z] === T);
            A.forEach((U) => {
              x.length === 1 && (o.value[U] = x[0].properties[U]);
              const ce = U.split("_")[0] + si;
              r.value[U] = x.map((De) => ({
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
const $t = (e) => (oe("data-v-d19eff6f"), e = e(), le(), e), ri = { class: "custom-modal" }, ii = { class: "modal-background" }, oi = { class: "modal-container" }, li = { class: "modal-header" }, ai = /* @__PURE__ */ $t(() => /* @__PURE__ */ c("div", { class: "modal-title" }, " Cerca ", -1)), ui = /* @__PURE__ */ $t(() => /* @__PURE__ */ c("svg", {
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
], -1)), ci = [
  ui
], di = { class: "modal-body" }, pi = {
  key: 0,
  class: "grid grid-cols-12 gap-6"
}, hi = { class: "modal-footer" }, fi = { style: { "margin-right": "15px" } }, mi = { style: { "margin-right": "15px" } };
function gi(e, t, s, n, i, o) {
  const r = j("generic-input"), l = j("custom-select"), p = j("custom-button");
  return d(), E(q, null, {
    default: B(() => [
      H(c("div", ri, [
        c("div", ii, [
          c("div", oi, [
            c("div", li, [
              ai,
              c("div", {
                class: "modal-close",
                onClick: t[0] || (t[0] = (...a) => e.emitCloseModal && e.emitCloseModal(...a))
              }, ci)
            ]),
            c("div", di, [
              e.filterables ? (d(), h("div", pi, [
                (d(!0), h(D, null, J(e.filterables.columns, (a, m) => (d(), h("div", {
                  class: "col-span-6",
                  key: m
                }, [
                  a.type === "text" ? (d(), E(r, {
                    key: 0,
                    type: "text",
                    placeholder: a.placeholder,
                    label: a.label,
                    modelValue: e.state[a.column],
                    "onUpdate:modelValue": (y) => e.state[a.column] = y,
                    disabled: e.loadingState[a.column]
                  }, null, 8, ["placeholder", "label", "modelValue", "onUpdate:modelValue", "disabled"])) : S("", !0),
                  a.type === "select" ? (d(), E(l, {
                    key: 1,
                    options: e.optionsState[a.column] || [],
                    label: a.label,
                    name: a.column,
                    placeholder: a.placeholder,
                    disabled: e.loadingState[a.column],
                    value: e.state[a.column],
                    "onUpdate:value": (y) => e.state[a.column] = y,
                    onChange: (y) => e.handleChangeRelationsSelect(y, a.column, m)
                  }, null, 8, ["options", "label", "name", "placeholder", "disabled", "value", "onUpdate:value", "onChange"])) : S("", !0)
                ]))), 128))
              ])) : S("", !0)
            ]),
            c("div", hi, [
              c("div", fi, [
                f(p, {
                  label: "Chiudi",
                  styleType: "secondary-outline",
                  onOnClick: e.emitCloseModal
                }, null, 8, ["onOnClick"])
              ]),
              c("div", mi, [
                f(p, {
                  label: "Pulisci",
                  styleType: "secondary",
                  onOnClick: e.cleanResults
                }, null, 8, ["onOnClick"])
              ]),
              f(p, {
                label: "Cerca",
                styleType: "primary",
                onOnClick: e.emitFilter
              }, null, 8, ["onOnClick"])
            ])
          ])
        ])
      ], 512), [
        [Y, e.isOpen]
      ])
    ]),
    _: 1
  });
}
const Cl = /* @__PURE__ */ L(ni, [["render", gi], ["__scopeId", "data-v-d19eff6f"]]), bi = F({
  name: "ScrollToTop",
  components: {
    Transition: q
  },
  setup() {
    const e = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }, t = $(!1), s = () => {
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
const vi = (e) => (oe("data-v-3d9c8e20"), e = e(), le(), e), yi = /* @__PURE__ */ vi(() => /* @__PURE__ */ c("svg", {
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
], -1)), wi = [
  yi
];
function _i(e, t, s, n, i, o) {
  return d(), E(q, null, {
    default: B(() => [
      H(c("div", {
        onClick: t[0] || (t[0] = (...r) => e.trigger && e.trigger(...r)),
        ref: "scrollToTop",
        class: "fixed z-50 bottom-10 right-5 w-12 h-12 bg-secondary hover:bg-secondaryHover transition rounded-full flex items-center justify-center cursor-pointer shadow"
      }, wi, 512), [
        [Y, e.buttonVisible]
      ])
    ]),
    _: 1
  });
}
const El = /* @__PURE__ */ L(bi, [["render", _i], ["__scopeId", "data-v-3d9c8e20"]]), Si = F({
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
    const s = $("");
    return {
      searchQuery: s,
      emitSearch: () => {
        t.emit("onSearch", s.value);
      }
    };
  }
}), $i = { class: "custom-search-input flex items-center cursor-pointer" }, ki = { class: "search-box shadow" }, Oi = ["placeholder"], Ci = /* @__PURE__ */ c("svg", {
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
], -1), Ei = [
  Ci
];
function Pi(e, t, s, n, i, o) {
  return d(), h("div", $i, [
    c("div", ki, [
      H(c("input", {
        onKeyup: t[0] || (t[0] = G((...r) => e.emitSearch && e.emitSearch(...r), ["enter"])),
        class: "search-input text-textGrey font-medium",
        type: "text",
        "onUpdate:modelValue": t[1] || (t[1] = (r) => e.searchQuery = r),
        placeholder: e.placeholder
      }, null, 40, Oi), [
        [Ae, e.searchQuery]
      ]),
      c("div", {
        onClick: t[2] || (t[2] = (...r) => e.emitSearch && e.emitSearch(...r)),
        class: "search-btn bg-textGrey hover:bg-customBlack transition h-9 w-9 rounded-full flex items-center justify-center"
      }, Ei)
    ])
  ]);
}
const Pl = /* @__PURE__ */ L(Si, [["render", Pi]]), Ai = F({
  name: "CustomTooltip",
  components: {
    Transition: q
  },
  props: {
    position: {
      type: String,
      default: "top"
    },
    backroundColor: {
      type: String,
      default: "#000000"
    },
    maxWidth: {
      type: Number,
      default: 250
    }
  },
  setup(e) {
    const t = $(!1);
    return {
      onMouseOver: () => {
        t.value = !0;
      },
      getClassPosition: () => "tooltip-" + e.position,
      onMouseLeave: () => {
        t.value = !1;
      },
      hovered: t
    };
  }
});
function Ti(e, t, s, n, i, o) {
  return d(), h("div", {
    onMouseover: t[0] || (t[0] = (...r) => e.onMouseOver && e.onMouseOver(...r)),
    onMouseleave: t[1] || (t[1] = (...r) => e.onMouseLeave && e.onMouseLeave(...r)),
    class: "inline-flex flex-col relative cursor-pointer"
  }, [
    O(e.$slots, "target", {}, void 0, !0),
    f(q, null, {
      default: B(() => [
        H(c("div", {
          style: Ct(`background-color: ${e.backroundColor}; --background-color: ${e.backroundColor}; --max-width: ${e.maxWidth}px`),
          class: X(["absolute w-max z-50 p-3 shadow cursor-auto rounded-lg text-white text-sm", e.getClassPosition()])
        }, [
          O(e.$slots, "content", {}, void 0, !0)
        ], 6), [
          [Y, e.hovered]
        ])
      ]),
      _: 3
    })
  ], 32);
}
const Al = /* @__PURE__ */ L(Ai, [["render", Ti], ["__scopeId", "data-v-d1fd60ab"]]), Ri = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIwAAAAnCAYAAADdG6ATAAAACXBIWXMAAAsSAAALEgHS3X78AAAJwElEQVR4nO1ce4hUVRj/NnYDdydokzBIM9sgCysjYZXKu4KGGjGOINvVXRQTIjbJlXA1GiFHcnf/8MEm+kcKPmKSJcchWgsFHQpU2EotEsPVorWSaPWPaQRXmviW31nPnjnnvmb2PT8YZu495557Ht/53mdKstksFQLpmDWViKJE9CIRPS41eYGI9oSiqSMFeVERw4q8CSYds9YRURMRPeJS9RYRzQxFU78Vl3z0ojRoz9Mxq5aI9hLRgx4f4XqXiKh8jM/pmMZ9QQaXjlmniegzA7Ewy+oiomYiSillE9Ix65PxPumjGb44DPSU8w6Esj8UTa1Rnrmp1H9yvE3yWIJnggGxsEiZoCl20k9CfufLjoS3E9EyIppERGVE1EtEN4ioLZ5Itkr17qDchMPxRLIedS1WvkGwcpvt8URyvR0J/05Ekz107wn0rYXbiCeS92v6f4iIFhNRJW7xpukQfVHq3sE6bJTHphljk6Gc31WHDVsVTySv+W0DdTZgTI5j98NhTMTSFYqmtFwD4kd9xx7TC+xIeBoRdRLRQ0pRGRazxY6EV8UTyWek+4TJKnFolyf0oFJHtNloR8J/mZ51aXsAsYIoOyQ9TVgUPJ46OxJeyoQUTyRTmjaa7Uj4nFKW8w4NanGL+7gbhOrYz3zgiWDSMetKAGJhjrRauX3Lxbz+CZPNE/0pEW3mHQNC2kJEK4joV81z2t0pYRcmtJuI5opdiF21Cs8OeN6OhLOmtu1I2PQeQSzMvT4Qz+E9W1HGdSo0z5Y4lGmBdgW35O/5Xp91QjyRNG4+V6UXXKJKU+RGLJeUnckL8LrpPWCtgljmMfsWC8vfYOfMcnU7yA1CNLTLLJsXVOJWeUHp/wKZyPB7AcrKUVcHLvvZRz+a8M2bMMNEA3E+aHAkmHTMelnDJRi3HYiFWaTKkXii7FA09a3D6wQh6NhyH3Ty2SNuoto7PKHgWIWGY/9x75wyVhnd+P20A0H1A+JPiO7NkkW6chDG1o9SLPBZg8L6hUZ+8+K/qlYEVzlARJZSdJvruxALSVzgjKkCdBGe/MNKEct/VWHrjieSU/D7XegwzLYbobdkMMkNeRCir/6jbLZUV0Ybi0cmGOg7X2vGKUPogt0Q2zz+RUxEPE8uzzpCEscy+hRm5jBx1gvSMSuTjlk/pGPWNl58iCKd+dwiLz5zIfhlrmmIJRWKpso9EIuXQTCxHMLHFzB5LFaPg3UTxAdPcJcgxOEGxGMPurHfxAlxfzou2+keBxPPvj9YQymFKfUeRMhMfDYa6jO3uAECYQtjqkFxZsfdKp+EchMsdiERrfc5DjelV4izPlGACV/LIgpch5XiwDsSEP2f41BnjlTXBLakTqFfnYY6W8D5s+BMAh0wsafzGINyTkelNxRNbQpFU9y5fSAIJzBR7QAnqVKI5S6ceq+wfhOAq3Tge/pg73go0UyUH+OWTkT4heh/NfSLAcC9atzrMLUNTiE2rOpeEJBN6assQiBGVkj3dxdgTDnoV3rZQ8vig4jewOI74S6cdcxJjvEzTHShaOqFoOIHVlAGgz3Iip9gyfheHnSQdiT8DzvmZEJEm8tw6bTjg/T/BExe8S7+fQJlGZ0DT2mrFeJTN5YNkl8lo3xuw8SmQpnYKnTi5LrmPvtPCrEL3TBDctzVQflTH+nRtKFTehlnQWiVaJOJUHXgZaEUFwKLJV8MOxmb0aZ4X8ZgIeWA3QcG77MwpWWlvh/YCF3CxAYndZuneqUNUwpDvc6sbtPc+9B1hAUARMVEiL1uabdkcN2EcgFRbpS5kONC4e2RuGcvfEXzDBZFr+aeYx0WJ/FEsgL6kEzYPQhTVGhMbuN7QBD97UCsVYLItWIb4xXmuzCxXefJK3LyYdhaUnwoQ8VdihgFGMBh4KhTQwCfFxeyCAFVJL2mXGfVdIUixjdUglF9CFfH+wQVMRBuwcdul/IixhncCOZYkSCKkBE4CVwFTg8sYSdYKJqK5NOWkrFWArP6IvtUTO5u+CweNWWd0b1MvpVSu72IrH8km9YGP4So+7YuGi35P67r/CMu7eqyCbmvjU5u+uGAymHUSOskL33ioKUUMliChCvf4Elnryxc3L8Q0U44qi7CrX5ZF5CDf2Kyk0scRNiIxRHtHsEYd2keOYs6TVJdjp2d0rn+8V5+/2RDualdEZ5oUdIaHg4yh4MNlcPsVQKPToG0PiCqPVO5PdFQ3Q3s5X0AzjR5F7diEY4S0WOIjMtoxk49ieClDn1pHPFEMmdMhqjwFU1As96OhP+FY07lIgvhHJyP/pjmTtcu5xR3wLO9uUDpFoOCARwGOTFyfutLTi9Nx6wEEb1ZiI5hd7H7frUpAYm9vGoZFrsaxMJu7xJD1lkZREoOfC7QUYg+uQ/bwV0a0I/qAElaDfhe6/O5IYVO6ZVjDaU68YIcmD+hs+hwOsAgFiM+4jfNQIT6G6SckLc09fh+bYEi4apewe/rAeE1oHyLnwZHMleRkUMwoWhqJ5Q3gap0zOrlHBh8mFC+cTkauy5AXyoDElqtyDrD9QHkxqqEMQtiiwOQdzh3Vo4o+0CNlIQlErvKxUZDP7qlFARPkLji9wH6NGTQmtXI15WJphQKreXhDHVXwPPTrtYAFnq7dC1C/f0BU0Rn2RrZJj+LwGYFFM3voMCyovmfF8JhHcqOhM9AuZaDsdtwPknWS9oQLfbS7jSI43UBOeyQwuiHAdHsM+TGZJEs1agpaw84gIyHU5FlivXQpFksQrRWa63gpMAcEE8N0jmaNXXrRGISzGHmfvzPFDuk4yPCOjupvgPcrIlyobZ7FZFn7vNcXzM2DHD0wyCOtAZByVm43SmSpDTnpDn2tCngMC4KZdGLPJez5h3yN5ysFZHdNgXPh5Wz4Gz+JqRr3WkAke+yyNAHTsi2lOfUdmuQW5wYDXqMJ8cdCESXSadyhBt59GU5xGCnHQnP8jB5e8DpTPnHa6WUyD4rzHBUVXAW9fSjzvxVUQ19RZdDRCAo7qd89klttxVOx612JNw+0okmX0/v88r15aAN4ajEPKQycib/OWknPitlqv0Ik5WPYxx3OCv8BxRc1g+YE67AUdWUpFzXwG/S44E41PYPQe+qM52jsiNh9njP9sA152LuvlSIa8Qh0N99SLigXAfy8Apg4p8ioq+I6Dns0BZYHMy9arCwu8FdGhzaOozdvxTtVkHsWWizBb9PKll8An+7dHcplFQtsQDL0U/Z+5zTLohpNQ6xbTDVGwnI6x+oED/aId1qhFlexBhFXhwGxCHL/hlFQhnbyFckEY5+nsfv4p8FjXEU8l802fSmQhyLLWKEgoj+B/KnMPnqbVqPAAAAAElFTkSuQmCC", Fi = F({
  name: "HeaderNavigation",
  components: {
    Transition: q
  },
  props: {
    menuStructure: {
      type: Array,
      required: !0
    }
  },
  setup(e) {
    const t = Ri, s = $(!1), n = $(null), i = (a, m) => {
      e.menuStructure[a].children.length > 0 && (n.value && n.value.id === e.menuStructure[a].id ? (n.value = null, s.value = !1) : (n.value = e.menuStructure[a], s.value = !0));
    }, o = $(null), r = $(null), l = (a) => {
      r.value && !r.value.contains(a.target) && !o.value.contains(a.target) && (n.value = null, s.value = !1);
    }, p = () => {
      s.value = !1, n.value = null;
    };
    return Pe(() => {
      document.addEventListener("click", l);
    }), Et(() => {
      document.removeEventListener("click", l);
    }), {
      siteLogoImage: t,
      showSubMenu: i,
      currentMenu: n,
      isVisibleSubMenu: s,
      menuElementRef: r,
      navigationRef: o,
      forceClose: p
    };
  }
});
const Ne = (e) => (oe("data-v-918f73a8"), e = e(), le(), e), Li = { class: "header-navigation py-5 container mx-auto" }, Vi = { class: "flex items-center justify-between mb-5" }, Mi = ["src"], Bi = /* @__PURE__ */ Pt('<div class="flex items-center" data-v-918f73a8><div class="cursor-pointer" data-v-918f73a8><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6" data-v-918f73a8><path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" data-v-918f73a8></path></svg></div><div class="ml-7 cursor-pointer" data-v-918f73a8><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6" data-v-918f73a8><path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" data-v-918f73a8></path></svg></div><div class="cursor-pointer ml-7 flex items-center" data-v-918f73a8><div class="h-12 w-12 rounded-full bg-gray flex items-center justify-center" data-v-918f73a8><div class="font-regular text-xl" data-v-918f73a8>EP</div></div><div class="ml-1" data-v-918f73a8><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-3 h-3" data-v-918f73a8><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" data-v-918f73a8></path></svg></div></div></div>', 1), Ni = {
  ref: "navigationRef",
  class: "text-secondary text-base font-medium relative"
}, Di = { class: "flex" }, ji = ["onClick"], Ii = {
  key: 2,
  class: "ml-1 text-secondary"
}, Ui = {
  key: 0,
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  "stroke-width": "1.5",
  stroke: "currentColor",
  class: "w-3 h-3"
}, xi = /* @__PURE__ */ Ne(() => /* @__PURE__ */ c("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M4.5 15.75l7.5-7.5 7.5 7.5"
}, null, -1)), Hi = [
  xi
], zi = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  "stroke-width": "1.5",
  stroke: "currentColor",
  class: "w-3 h-3"
}, qi = /* @__PURE__ */ Ne(() => /* @__PURE__ */ c("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M19.5 8.25l-7.5 7.5-7.5-7.5"
}, null, -1)), Gi = [
  qi
], Ji = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  "stroke-width": "1.5",
  stroke: "currentColor",
  class: "w-3 h-3"
}, Qi = /* @__PURE__ */ Ne(() => /* @__PURE__ */ c("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M19.5 8.25l-7.5 7.5-7.5-7.5"
}, null, -1)), Ki = [
  Qi
], Wi = {
  key: 0,
  ref: "menuElementRef",
  class: "text-black absolute w-full shadow-md p-6 bg-white top-7 left-0 z-50"
}, Yi = { class: "font-bold mb-4" }, Xi = { class: "flex flex-wrap" }, Zi = { key: 1 };
function eo(e, t, s, n, i, o) {
  const r = j("router-link");
  return d(), h("header", Li, [
    c("div", Vi, [
      f(r, { to: { name: "home" } }, {
        default: B(() => [
          c("div", null, [
            c("img", {
              src: e.siteLogoImage,
              alt: "gaspari-logo"
            }, null, 8, Mi)
          ])
        ]),
        _: 1
      }),
      Bi
    ]),
    c("nav", Ni, [
      c("ul", Di, [
        (d(!0), h(D, null, J(e.menuStructure, (l, p) => (d(), h("li", {
          key: p,
          class: "mr-6 flex items-center cursor-pointer hover:text-secondaryHover transition select-none",
          onClick: (a) => e.showSubMenu(p, a)
        }, [
          l.href && l.children.length === 0 ? (d(), E(r, {
            key: 0,
            to: l.href,
            onClick: e.forceClose
          }, {
            default: B(() => [
              c("span", {
                class: X({ "text-secondaryHover": e.currentMenu && e.currentMenu.id === l.id })
              }, w(l.label), 3)
            ]),
            _: 2
          }, 1032, ["to", "onClick"])) : (d(), h("span", {
            key: 1,
            class: X({ "text-secondaryHover": e.currentMenu && e.currentMenu.id === l.id })
          }, w(l.label), 3)),
          l.children.length > 0 ? (d(), h("div", Ii, [
            e.currentMenu ? (d(), h(D, { key: 0 }, [
              e.currentMenu.id === l.id ? (d(), h("svg", Ui, Hi)) : (d(), h("svg", zi, Gi))
            ], 64)) : (d(), h("svg", Ji, Ki))
          ])) : S("", !0)
        ], 8, ji))), 128))
      ]),
      f(q, null, {
        default: B(() => [
          e.isVisibleSubMenu && e.currentMenu ? (d(), h("div", Wi, [
            c("div", Yi, w(e.currentMenu.label), 1),
            c("ul", Xi, [
              (d(!0), h(D, null, J(e.currentMenu.children, (l, p) => (d(), h("li", {
                key: p,
                class: "w-1/4 mb-3 cursor-pointer transition hover:underline"
              }, [
                l.href && l.children.length === 0 ? (d(), E(r, {
                  key: 0,
                  onClick: e.forceClose,
                  to: l.href
                }, {
                  default: B(() => [
                    N(w(l.label), 1)
                  ]),
                  _: 2
                }, 1032, ["onClick", "to"])) : (d(), h("div", Zi, w(l.label), 1))
              ]))), 128))
            ])
          ], 512)) : S("", !0)
        ]),
        _: 1
      })
    ], 512)
  ]);
}
const to = /* @__PURE__ */ L(Fi, [["render", eo], ["__scopeId", "data-v-918f73a8"]]), so = F({
  name: "FormContainer",
  components: {
    Breadcrumbs: Xr
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
}), no = {
  key: 0,
  class: "mb-6 ml-1"
}, ro = {
  key: 1,
  class: "mb-3 ml-1 font-semibold text-lg uppercase"
}, io = { class: "form_container p-6 bg-white rounded-lg shadow overflow-x-hidden" };
function oo(e, t, s, n, i, o) {
  const r = j("breadcrumbs");
  return d(), h(D, null, [
    e.path_breadcrumbs.length > 0 ? (d(), h("div", no, [
      f(r, { path_breadcrumbs: e.path_breadcrumbs }, null, 8, ["path_breadcrumbs"])
    ])) : S("", !0),
    O(e.$slots, "form-buttons-top"),
    e.title ? (d(), h("h3", ro, w(e.title), 1)) : S("", !0),
    c("div", io, [
      O(e.$slots, "form-content")
    ]),
    O(e.$slots, "form-buttons-bottom")
  ], 64);
}
const Tl = /* @__PURE__ */ L(so, [["render", oo]]);
var Ee = F({ name: "Vue Tailwind Pagination", props: { current: { type: Number, default: 1 }, total: { type: Number, default: 0 }, perPage: { type: Number, default: 9 }, pageRange: { type: Number, default: 2 }, textBeforeInput: { type: String, default: "Go to page" }, textAfterInput: { type: String, default: "Go" } }, data: () => ({ input: "" }), methods: { hasFirst: function() {
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
const lo = At("data-v-00d7790c");
oe("data-v-00d7790c");
const ao = { class: "min-w-max" }, uo = { class: "flex justify-between bg-white rounded-lg border border-gray-200 px-10 py-3 text-gray-700 font-montserrat" }, co = { class: "flex items-center" }, po = { key: 0, class: "pr-6" }, ho = f("div", { class: "flex items-center justify-center hover:bg-gray-200 rounded-md transform rotate-45 h-6 w-6" }, [f("div", { class: "transform -rotate-45" }, [f("svg", { class: "h-4 w-4", xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor" }, [f("path", { "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-width": "2", d: "M15 19l-7-7 7-7" })])])], -1), fo = { key: 1, class: "pr-6" }, mo = f("div", { class: "flex hover:bg-gray-200 rounded-md transform rotate-45 h-6 w-6 items-center justify-center" }, [f("span", { class: "transform -rotate-45" }, " 1 ")], -1), go = { key: 2, class: "pr-6" }, bo = { class: "pr-6" }, vo = { class: "transform -rotate-45" }, yo = { key: 3, class: "pr-6" }, wo = { key: 4, class: "pr-6" }, _o = { class: "flex hover:bg-gray-200 rounded-md transform rotate-45 h-6 w-6 items-center justify-center" }, So = { class: "transform -rotate-45" }, $o = { key: 5, class: "pr-6" }, ko = f("div", { class: "flex items-center justify-center hover:bg-gray-200 rounded-md transform rotate-45 h-6 w-6" }, [f("div", { class: "transform -rotate-45" }, [f("svg", { class: "h-4 w-4", xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor" }, [f("path", { "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-width": "2", d: "M9 5l7 7-7 7" })])])], -1), Oo = { class: "flex items-center" }, Co = { class: "pr-2 text-gray-400 font-medium" }, Eo = { id: "text-before-input" }, Po = { class: "w-14 rounded-md border border-indigo-400 px-1 py-1" }, Ao = { id: "text-after-input" }, To = f("svg", { class: "h-4 w-4", xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor" }, [f("path", { "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-width": "2", d: "M9 5l7 7-7 7" })], -1);
le();
const Ro = lo((e, t, s, n, i, o) => (d(), E("div", ao, [f("section", uo, [f("ul", co, [e.hasPrev() ? (d(), E("li", po, [f("a", { href: "#", onClick: t[1] || (t[1] = R((r) => e.changePage(e.prevPage), ["prevent"])) }, [ho])])) : S("", !0), e.hasFirst() ? (d(), E("li", fo, [f("a", { href: "#", onClick: t[2] || (t[2] = R((r) => e.changePage(1), ["prevent"])) }, [mo])])) : S("", !0), e.hasFirst() ? (d(), E("li", go, "...")) : S("", !0), (d(!0), E(D, null, J(e.pages, (r) => (d(), E("li", bo, [f("a", { href: "#", onClick: R((l) => e.changePage(r), ["prevent"]) }, [f("div", { class: [{ "bg-gradient-to-r from-blue-400 to-indigo-400": e.current == r }, "flex hover:bg-gray-200 rounded-md transform rotate-45 h-6 w-6 items-center justify-center"] }, [f("span", vo, w(r), 1)], 2)], 8, ["onClick"])]))), 256)), e.hasLast() ? (d(), E("li", yo, "...")) : S("", !0), e.hasLast() ? (d(), E("li", wo, [f("a", { href: "#", onClick: t[3] || (t[3] = R((r) => e.changePage(e.totalPages), ["prevent"])) }, [f("div", _o, [f("span", So, w(e.totalPages), 1)])])])) : S("", !0), e.hasNext() ? (d(), E("li", $o, [f("a", { href: "#", onClick: t[4] || (t[4] = R((r) => e.changePage(e.nextPage), ["prevent"])) }, [ko])])) : S("", !0)]), f("div", Oo, [f("div", Co, [f("span", Eo, w(e.textBeforeInput), 1)]), f("div", Po, [H(f("input", { "onUpdate:modelValue": t[5] || (t[5] = (r) => e.input = r), class: "w-12 focus:outline-none px-2", type: "text" }, null, 512), [[Ae, e.input, void 0, { number: !0 }]])]), f("div", { onClick: t[6] || (t[6] = R((r) => e.changePage(e.input), ["prevent"])), class: "flex items-center pl-4 font-medium cursor-pointer" }, [f("span", Ao, w(e.textAfterInput), 1), To])])])])));
Ee.render = Ro, Ee.__scopeId = "data-v-00d7790c";
const Fo = F({
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
      required: !1,
      default: 0
    },
    loading: {
      type: Boolean,
      required: !0
    }
  },
  setup(e, t) {
    const s = ({ target: o }) => {
      i(e.currentPage, parseInt(o.value));
    }, n = (o) => {
      i(o, e.perPage);
    }, i = (o, r) => {
      t.emit("changed-pagination", {
        currentPage: o,
        perPage: r
      });
    };
    return {
      changePageData: n,
      changePerPageData: s
    };
  }
}), Lo = { class: "custom-table" }, Vo = {
  key: 0,
  class: "font-semibold text-xl uppercase"
}, Mo = { class: "relative" }, Bo = {
  key: 0,
  class: "w-full h-full pt-20 absolute top-0 left-0 flex items-start justify-center rounded backdrop-blur-sm transition z-50"
}, No = { class: "text-textGrey text-sm font-medium row-pagination flex justify-between items-center" }, Do = { class: "flex" }, jo = {
  key: 0,
  class: "mr-10"
}, Io = {
  key: 1,
  class: "mr-10"
}, Uo = { class: "flex" }, xo = /* @__PURE__ */ c("label", {
  for: "numberPerPage",
  class: "mr-1"
}, "Elementi visualizzati: ", -1), Ho = ["selected"], zo = ["selected"], qo = ["selected"], Go = ["selected"], Jo = ["selected"], Qo = {
  key: 1,
  class: "custom-pagination"
}, Ko = { class: "w-full" }, Wo = { class: "row-theaders" }, Yo = { class: "text-textGrey font-medium" }, Xo = {
  key: 2,
  class: "custom-pagination pagination-bottom"
};
function Zo(e, t, s, n, i, o) {
  const r = j("custom-loader"), l = j("VueTailwindPagination");
  return d(), h("div", Lo, [
    c("div", {
      class: X(["mb-5 flex items-center justify-between", { "flex-row-reverse": !e.title }])
    }, [
      e.title ? (d(), h("h2", Vo, w(e.title), 1)) : S("", !0),
      O(e.$slots, "filters")
    ], 2),
    c("div", Mo, [
      e.loading ? (d(), h("div", Bo, [
        f(r, {
          loading: e.loading,
          size: "large"
        }, null, 8, ["loading"])
      ])) : S("", !0),
      c("div", No, [
        c("div", Do, [
          e.total > 0 ? (d(), h("div", jo, "Risultati da " + w(e.from) + " a " + w(e.from + e.perPage - 1) + " di " + w(e.total), 1)) : (d(), h("div", Io, "Nessun risultato")),
          c("div", Uo, [
            xo,
            c("select", {
              onChange: t[0] || (t[0] = (...p) => e.changePerPageData && e.changePerPageData(...p)),
              id: "numberPerPage",
              class: "bg-white border text-black"
            }, [
              c("option", {
                value: "25",
                selected: e.perPage === 25
              }, "25", 8, Ho),
              c("option", {
                value: "50",
                selected: e.perPage === 50
              }, "50", 8, zo),
              c("option", {
                value: "100",
                selected: e.perPage === 100
              }, "100", 8, qo),
              c("option", {
                value: "250",
                selected: e.perPage === 250
              }, "250", 8, Go),
              c("option", {
                value: "500",
                selected: e.perPage === 500
              }, "500", 8, Jo)
            ], 32)
          ])
        ])
      ]),
      e.total > 0 ? (d(), h("div", Qo, [
        f(l, {
          current: e.currentPage,
          total: e.total,
          "per-page": e.perPage,
          onPageChanged: e.changePageData,
          "text-before-input": "Vai a pag.",
          "text-after-input": "Vai"
        }, null, 8, ["current", "total", "per-page", "onPageChanged"])
      ])) : S("", !0),
      c("table", Ko, [
        c("thead", null, [
          c("tr", Wo, [
            O(e.$slots, "t-head")
          ])
        ]),
        c("tbody", Yo, [
          O(e.$slots, "t-body")
        ])
      ]),
      e.total > 0 ? (d(), h("div", Xo, [
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
const Rl = /* @__PURE__ */ L(Fo, [["render", Zo]]), el = F({
  name: "CustomSidebar",
  components: {
    Transition: q,
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
const tl = (e) => (oe("data-v-20ccfa8e"), e = e(), le(), e), sl = {
  key: 0,
  id: "custom-sidebar",
  class: "custom-sidebar shadow-2xl"
}, nl = { class: "sidebar-content" }, rl = { class: "sidebar-header mb-6 flex justify-between items-center" }, il = { class: "text-2xl font-bold" }, ol = /* @__PURE__ */ tl(() => /* @__PURE__ */ c("svg", {
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
], -1)), ll = [
  ol
], al = { class: "sidebar-body" }, ul = {
  key: 0,
  class: "w-full h-full absolute top-0 left-0 flex items-center justify-center rounded backdrop-blur-sm transition z-50"
};
function cl(e, t, s, n, i, o) {
  const r = j("custom-loader");
  return d(), E(q, null, {
    default: B(() => [
      e.isOpen ? (d(), h("div", sl, [
        c("div", nl, [
          c("div", rl, [
            c("h4", il, w(e.title), 1),
            c("div", {
              class: "sidebar-close",
              onClick: t[0] || (t[0] = (...l) => e.emitCloseSidebar && e.emitCloseSidebar(...l))
            }, ll)
          ]),
          c("div", al, [
            O(e.$slots, "sidebar-content", {}, void 0, !0)
          ])
        ]),
        c("div", {
          class: "sidebar-bg",
          onClick: t[1] || (t[1] = (...l) => e.emitCloseSidebar && e.emitCloseSidebar(...l))
        }),
        e.loading ? (d(), h("div", ul, [
          f(r, {
            loading: e.loading,
            size: "large"
          }, null, 8, ["loading"])
        ])) : S("", !0)
      ])) : S("", !0)
    ]),
    _: 3
  });
}
const Fl = /* @__PURE__ */ L(el, [["render", cl], ["__scopeId", "data-v-20ccfa8e"]]), dl = F({
  name: "LayoutBase",
  components: {
    HeaderNavigation: to
  },
  props: {
    menuStructure: {
      type: Array,
      required: !0
    }
  }
}), pl = { class: "layout" }, hl = { class: "main-content" }, fl = { class: "container mx-auto py-7" };
function ml(e, t, s, n, i, o) {
  const r = j("header-navigation");
  return d(), h("div", pl, [
    f(r, { menuStructure: e.menuStructure }, null, 8, ["menuStructure"]),
    c("main", hl, [
      c("div", fl, [
        O(e.$slots, "layout-content")
      ])
    ])
  ]);
}
const Ll = /* @__PURE__ */ L(dl, [["render", ml]]);
function Vl() {
  const e = $(!1), t = $(null), s = $(!1), n = $(null);
  return {
    openDetails: async (l, p) => {
      e.value = !0, t.value = p, s.value = !0, await M.get(l).then((a) => {
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
function Ml() {
  const e = $([]), t = $(0), s = $(0), n = $(0), i = $(0), o = $(null), r = $(!1), l = $(""), p = $(null), a = (v) => {
    l.value === "" || l.value !== v ? (l.value = v, p.value = null) : l.value === v && p.value === null ? p.value = "desc" : l.value === v && p.value === "desc" && (l.value = "", p.value = null);
  }, m = (v) => ({
    ordered_asc: l.value === v && p.value === null,
    ordered_desc: l.value === v && p.value === "desc"
  }), y = $({ filter: {} }), P = (v) => {
    y.value.filter = v.filter;
  }, _ = $("");
  return {
    results: e,
    currentPage: n,
    perPage: i,
    total: t,
    from: s,
    filterables: o,
    setFilterParams: P,
    updatePagination: async (v, C) => {
      r.value = !0;
      let A = {
        page: C.currentPage,
        per_page: C.perPage
      };
      l.value && (A.order_by = l.value, p.value === "desc" && (A.order_desc = 1)), y.value.filter && (A.filter = y.value.filter), _.value && (A.search = _.value), await M.get(v, {
        params: A
      }).then((V) => {
        V.status === 200 && (n.value = C.currentPage, i.value = C.perPage, e.value = V.data.data, t.value = V.data.meta.total, s.value = V.data.meta.from, o.value = V.data.filterables);
      }).catch((V) => V), r.value = !1;
    },
    loadingPagination: r,
    setPaginationOrder: a,
    setPaginationOrderClasses: m,
    setSearchQuery: (v) => {
      _.value = v;
    }
  };
}
function Bl() {
  return {
    setPageTitle: (t) => {
      document.title = t;
    }
  };
}
export {
  Xr as Breadcrumbs,
  st as CustomButton,
  Nt as CustomCheckbox,
  bl as CustomFileUpload,
  Te as CustomLoader,
  vl as CustomModal,
  yl as CustomMultiCheckbox,
  _l as CustomMultiSelect,
  Sl as CustomMultiSelectAsync,
  wl as CustomMultipleFileUpload,
  $l as CustomRadioGroup,
  Pl as CustomSearchInput,
  Tr as CustomSelect,
  Fl as CustomSidebar,
  Rl as CustomTable,
  kl as CustomTextArea,
  Al as CustomTooltip,
  Cl as FilterableModal,
  Tl as FormContainer,
  Ol as FormSeparator,
  St as GenericInput,
  to as HeaderNavigation,
  Ll as LayoutBase,
  El as ScrollToTop,
  Bl as usePageMeta,
  Ml as usePagination,
  Vl as useSidebar
};
