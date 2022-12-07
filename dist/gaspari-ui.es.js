import { defineComponent as L, openBlock as d, createElementBlock as p, normalizeClass as Z, renderSlot as O, createElementVNode as h, toDisplayString as v, createTextVNode as B, ref as C, createCommentVNode as S, Fragment as N, resolveComponent as D, renderList as z, createBlock as E, onMounted as Pe, createVNode as m, withCtx as M, withKeys as q, withModifiers as R, withDirectives as G, vShow as ee, Transition as Q, computed as Ze, mergeProps as et, vModelText as tt, vModelDynamic as $t, watch as kt, pushScopeId as he, popScopeId as pe, onBeforeUnmount as Ot, createStaticVNode as Et, withScopeId as Ct } from "vue";
const Pt = L({
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
}), T = (e, t) => {
  const s = e.__vccOpts || e;
  for (const [n, r] of t)
    s[n] = r;
  return s;
}, At = ["disabled"];
function Rt(e, t, s, n, r, o) {
  return d(), p("button", {
    class: Z(["custom-button", e.assignStyle()]),
    disabled: e.disabled,
    onClick: t[0] || (t[0] = (...i) => e.handleClick && e.handleClick(...i))
  }, [
    O(e.$slots, "slot-left"),
    h("span", null, v(e.label), 1),
    O(e.$slots, "slot-right")
  ], 10, At);
}
const st = /* @__PURE__ */ T(Pt, [["render", Rt]]), Lt = L({
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
}), Tt = ["checked", "disabled", "name"], Ft = /* @__PURE__ */ h("span", { class: "checkmark" }, null, -1);
function Vt(e, t, s, n, r, o) {
  return d(), p("label", {
    class: Z(["wrapper flex items-center", { disabled: e.disabled }])
  }, [
    B(v(e.label) + " ", 1),
    h("input", {
      class: "checkbox",
      type: "checkbox",
      checked: e.checked,
      onChange: t[0] || (t[0] = (...i) => e.updateInput && e.updateInput(...i)),
      disabled: e.disabled,
      name: e.name
    }, null, 40, Tt),
    Ft
  ], 2);
}
const Mt = /* @__PURE__ */ T(Lt, [["render", Vt]]), Bt = L({
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
    const s = C(null), n = () => {
      s.value.click();
    }, r = C(null);
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
}), Nt = { class: "generic-input" }, Dt = {
  key: 0,
  class: "generic-input__label text-sm secondary-color"
}, jt = { class: "input-container" }, It = { class: "generic-input__input-file" }, Ut = { class: "generic-input__input-file__file" }, xt = {
  key: 0,
  class: "generic-input__input-file__file__placeholder"
}, Ht = {
  key: 1,
  class: "generic-input__input-file__file__file-name"
}, zt = /* @__PURE__ */ h("svg", {
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
], -1), qt = [
  zt
];
function Gt(e, t, s, n, r, o) {
  return d(), p("div", Nt, [
    e.label ? (d(), p("label", Dt, v(e.label), 1)) : S("", !0),
    h("div", jt, [
      O(e.$slots, "prepend"),
      h("input", {
        type: "file",
        class: "generic-input__input-file--hidden",
        ref: "inputFileRef",
        onChange: t[0] || (t[0] = (...i) => e.handleInputChange && e.handleInputChange(...i))
      }, null, 544),
      h("div", It, [
        h("div", {
          class: "generic-input__input-file__button",
          onClick: t[1] || (t[1] = (...i) => e.handleButtonClick && e.handleButtonClick(...i))
        }, " Sfoglia... "),
        h("div", Ut, [
          e.currentFile ? (d(), p("div", Ht, [
            B(v(e.currentFile.name) + " ", 1),
            h("div", {
              onClick: t[2] || (t[2] = (...i) => e.deleteFile && e.deleteFile(...i)),
              class: "generic-input__input-file__file__file-name__cancel"
            }, qt)
          ])) : (d(), p("div", xt, v(e.placeholder), 1))
        ])
      ])
    ])
  ]);
}
const nl = /* @__PURE__ */ T(Bt, [["render", Gt]]), Jt = L({
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
}), Kt = /* @__PURE__ */ h("span", { class: "sr-only" }, "Loading...", -1), Wt = [
  Kt
];
function Qt(e, t, s, n, r, o) {
  return e.loading ? (d(), p("div", {
    key: 0,
    class: Z(["spinner-border", e.size]),
    role: "status"
  }, Wt, 2)) : S("", !0);
}
const Ae = /* @__PURE__ */ T(Jt, [["render", Qt]]), Yt = L({
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
}), Xt = {
  key: 0,
  class: "custom-modal"
}, Zt = { class: "modal-background" }, es = { class: "modal-container" }, ts = { class: "modal-header" }, ss = { class: "modal-title" }, ns = /* @__PURE__ */ h("svg", {
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
], -1), is = [
  ns
], rs = { class: "modal-body" }, os = { class: "modal-footer" };
function ls(e, t, s, n, r, o) {
  return e.isOpen ? (d(), p("div", Xt, [
    h("div", Zt, [
      h("div", es, [
        h("div", ts, [
          h("div", ss, [
            e.withoutTitle ? S("", !0) : (d(), p(N, { key: 0 }, [
              B(v(e.modalTitle), 1)
            ], 64))
          ]),
          h("div", {
            class: "modal-close",
            onClick: t[0] || (t[0] = (...i) => e.emitCloseModal && e.emitCloseModal(...i))
          }, is)
        ]),
        h("div", rs, [
          O(e.$slots, "modal-body")
        ]),
        h("div", os, [
          O(e.$slots, "modal-footer")
        ])
      ])
    ])
  ])) : S("", !0);
}
const as = /* @__PURE__ */ T(Yt, [["render", ls]]), us = L({
  name: "CustomMultiCheckbox",
  components: {
    CustomCheckbox: Mt
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
  const i = D("custom-checkbox");
  return d(), p("div", null, [
    (d(!0), p(N, null, z(e.options, (l, c) => (d(), E(i, {
      key: c,
      label: l.label,
      checked: e.value.includes(l.id),
      "onUpdate:checked": (a) => e.check(l.id, a)
    }, null, 8, ["label", "checked", "onUpdate:checked"]))), 128))
  ]);
}
const il = /* @__PURE__ */ T(us, [["render", cs]]);
function nt(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: it } = Object.prototype, { getPrototypeOf: Re } = Object, Le = ((e) => (t) => {
  const s = it.call(t);
  return e[s] || (e[s] = s.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), K = (e) => (e = e.toLowerCase(), (t) => Le(t) === e), fe = (e) => (t) => typeof t === e, { isArray: oe } = Array, Se = fe("undefined");
function ds(e) {
  return e !== null && !Se(e) && e.constructor !== null && !Se(e.constructor) && te(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const rt = K("ArrayBuffer");
function hs(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && rt(e.buffer), t;
}
const ps = fe("string"), te = fe("function"), ot = fe("number"), lt = (e) => e !== null && typeof e == "object", fs = (e) => e === !0 || e === !1, ce = (e) => {
  if (Le(e) !== "object")
    return !1;
  const t = Re(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}, ms = K("Date"), gs = K("File"), bs = K("Blob"), ys = K("FileList"), vs = (e) => lt(e) && te(e.pipe), ws = (e) => {
  const t = "[object FormData]";
  return e && (typeof FormData == "function" && e instanceof FormData || it.call(e) === t || te(e.toString) && e.toString() === t);
}, _s = K("URLSearchParams"), Ss = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function me(e, t, { allOwnKeys: s = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let n, r;
  if (typeof e != "object" && (e = [e]), oe(e))
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
    ce(e[n]) && ce(s) ? e[n] = $e(e[n], s) : ce(s) ? e[n] = $e({}, s) : oe(s) ? e[n] = s.slice() : e[n] = s;
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
}, Es = (e, t, s, n) => {
  let r, o, i;
  const l = {};
  if (t = t || {}, e == null)
    return t;
  do {
    for (r = Object.getOwnPropertyNames(e), o = r.length; o-- > 0; )
      i = r[o], (!n || n(i, e, t)) && !l[i] && (t[i] = e[i], l[i] = !0);
    e = s !== !1 && Re(e);
  } while (e && (!s || s(e, t)) && e !== Object.prototype);
  return t;
}, Cs = (e, t, s) => {
  e = String(e), (s === void 0 || s > e.length) && (s = e.length), s -= t.length;
  const n = e.indexOf(t, s);
  return n !== -1 && n === s;
}, Ps = (e) => {
  if (!e)
    return null;
  if (oe(e))
    return e;
  let t = e.length;
  if (!ot(t))
    return null;
  const s = new Array(t);
  for (; t-- > 0; )
    s[t] = e[t];
  return s;
}, As = ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && Re(Uint8Array)), Rs = (e, t) => {
  const n = (e && e[Symbol.iterator]).call(e);
  let r;
  for (; (r = n.next()) && !r.done; ) {
    const o = r.value;
    t.call(e, o[0], o[1]);
  }
}, Ls = (e, t) => {
  let s;
  const n = [];
  for (; (s = e.exec(t)) !== null; )
    n.push(s);
  return n;
}, Ts = K("HTMLFormElement"), Fs = (e) => e.toLowerCase().replace(
  /[_-\s]([a-z\d])(\w*)/g,
  function(s, n, r) {
    return n.toUpperCase() + r;
  }
), De = (({ hasOwnProperty: e }) => (t, s) => e.call(t, s))(Object.prototype), Vs = K("RegExp"), at = (e, t) => {
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
  return oe(e) ? n(e) : n(String(e).split(t)), s;
}, Ns = () => {
}, Ds = (e, t) => (e = +e, Number.isFinite(e) ? e : t), u = {
  isArray: oe,
  isArrayBuffer: rt,
  isBuffer: ds,
  isFormData: ws,
  isArrayBufferView: hs,
  isString: ps,
  isNumber: ot,
  isBoolean: fs,
  isObject: lt,
  isPlainObject: ce,
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
  toFlatObject: Es,
  kindOf: Le,
  kindOfTest: K,
  endsWith: Cs,
  toArray: Ps,
  forEachEntry: Rs,
  matchAll: Ls,
  isHTMLForm: Ts,
  hasOwnProperty: De,
  hasOwnProp: De,
  reduceDescriptors: at,
  freezeMethods: Ms,
  toObjectSet: Bs,
  toCamelCase: Fs,
  noop: Ns,
  toFiniteNumber: Ds
};
function k(e, t, s, n, r) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), s && (this.config = s), n && (this.request = n), r && (this.response = r);
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
k.from = (e, t, s, n, r, o) => {
  const i = Object.create(ut);
  return u.toFlatObject(e, i, function(c) {
    return c !== Error.prototype;
  }, (l) => l !== "isAxiosError"), k.call(i, e.message, t, s, n, r), i.cause = e, i.name = e.name, o && Object.assign(i, o), i;
};
var ue = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, js = typeof self == "object" ? self.FormData : window.FormData;
function ke(e) {
  return u.isPlainObject(e) || u.isArray(e);
}
function dt(e) {
  return u.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function je(e, t, s) {
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
  }, !1, function(g, _) {
    return !u.isUndefined(_[g]);
  });
  const n = s.metaTokens, r = s.visitor || b, o = s.dots, i = s.indexes, c = (s.Blob || typeof Blob < "u" && Blob) && xs(t);
  if (!u.isFunction(r))
    throw new TypeError("visitor must be a function");
  function a(f) {
    if (f === null)
      return "";
    if (u.isDate(f))
      return f.toISOString();
    if (!c && u.isBlob(f))
      throw new k("Blob is not supported. Use a Buffer instead.");
    return u.isArrayBuffer(f) || u.isTypedArray(f) ? c && typeof Blob == "function" ? new Blob([f]) : Buffer.from(f) : f;
  }
  function b(f, g, _) {
    let $ = f;
    if (f && !_ && typeof f == "object") {
      if (u.endsWith(g, "{}"))
        g = n ? g : g.slice(0, -2), f = JSON.stringify(f);
      else if (u.isArray(f) && Is(f) || u.isFileList(f) || u.endsWith(g, "[]") && ($ = u.toArray(f)))
        return g = dt(g), $.forEach(function(j, Y) {
          !(u.isUndefined(j) || j === null) && t.append(
            i === !0 ? je([g], Y, o) : i === null ? g : g + "[]",
            a(j)
          );
        }), !1;
    }
    return ke(f) ? !0 : (t.append(je(_, g, o), a(f)), !1);
  }
  const y = [], P = Object.assign(Us, {
    defaultVisitor: b,
    convertValue: a,
    isVisitable: ke
  });
  function w(f, g) {
    if (!u.isUndefined(f)) {
      if (y.indexOf(f) !== -1)
        throw Error("Circular reference detected in " + g.join("."));
      y.push(f), u.forEach(f, function($, V) {
        (!(u.isUndefined($) || $ === null) && r.call(
          t,
          $,
          u.isString(V) ? V.trim() : V,
          g,
          P
        )) === !0 && w($, g ? g.concat(V) : [V]);
      }), y.pop();
    }
  }
  if (!u.isObject(e))
    throw new TypeError("data must be an object");
  return w(e), t;
}
function Ie(e) {
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
function Te(e, t) {
  this._pairs = [], e && ge(e, this, t);
}
const ht = Te.prototype;
ht.append = function(t, s) {
  this._pairs.push([t, s]);
};
ht.toString = function(t) {
  const s = t ? function(n) {
    return t.call(this, n, Ie);
  } : Ie;
  return this._pairs.map(function(r) {
    return s(r[0]) + "=" + s(r[1]);
  }, "").join("&");
};
function Hs(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function pt(e, t, s) {
  if (!t)
    return e;
  const n = s && s.encode || Hs, r = s && s.serialize;
  let o;
  if (r ? o = r(t, s) : o = u.isURLSearchParams(t) ? t.toString() : new Te(t, s).toString(n), o) {
    const i = e.indexOf("#");
    i !== -1 && (e = e.slice(0, i)), e += (e.indexOf("?") === -1 ? "?" : "&") + o;
  }
  return e;
}
class Ue {
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
}, zs = typeof URLSearchParams < "u" ? URLSearchParams : Te, qs = FormData, Gs = (() => {
  let e;
  return typeof navigator < "u" && ((e = navigator.product) === "ReactNative" || e === "NativeScript" || e === "NS") ? !1 : typeof window < "u" && typeof document < "u";
})(), J = {
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
  return ge(e, new J.classes.URLSearchParams(), Object.assign({
    visitor: function(s, n, r, o) {
      return J.isNode && u.isBuffer(s) ? (this.append(n, s.toString("base64")), !1) : o.defaultVisitor.apply(this, arguments);
    }
  }, t));
}
function Ks(e) {
  return u.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function Ws(e) {
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
    const l = Number.isFinite(+i), c = o >= s.length;
    return i = !i && u.isArray(r) ? r.length : i, c ? (u.hasOwnProp(r, i) ? r[i] = [r[i], n] : r[i] = n, !l) : ((!r[i] || !u.isObject(r[i])) && (r[i] = []), t(s, n, r[i], o) && u.isArray(r[i]) && (r[i] = Ws(r[i])), !l);
  }
  if (u.isFormData(e) && u.isFunction(e.entries)) {
    const s = {};
    return u.forEachEntry(e, (n, r) => {
      t(Ks(n), r, s, 0);
    }), s;
  }
  return null;
}
function Qs(e, t, s) {
  const n = s.config.validateStatus;
  !s.status || !n || n(s.status) ? e(s) : t(new k(
    "Request failed with status code " + s.status,
    [k.ERR_BAD_REQUEST, k.ERR_BAD_RESPONSE][Math.floor(s.status / 100) - 4],
    s.config,
    s.request,
    s
  ));
}
const Ys = J.isStandardBrowserEnv ? function() {
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
function Xs(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function Zs(e, t) {
  return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function gt(e, t) {
  return e && !Xs(t) ? Zs(e, t) : t;
}
const en = J.isStandardBrowserEnv ? function() {
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
function le(e, t, s) {
  k.call(this, e == null ? "canceled" : e, k.ERR_CANCELED, t, s), this.name = "CanceledError";
}
u.inherits(le, k, {
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
}, xe = Symbol("internals"), bt = Symbol("defaults");
function ie(e) {
  return e && String(e).trim().toLowerCase();
}
function de(e) {
  return e === !1 || e == null ? e : u.isArray(e) ? e.map(de) : String(e);
}
function rn(e) {
  const t = /* @__PURE__ */ Object.create(null), s = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let n;
  for (; n = s.exec(e); )
    t[n[1]] = n[2];
  return t;
}
function He(e, t, s, n) {
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
      const c = ie(i);
      if (!c)
        throw new Error("header name must be a non-empty string");
      const a = ne(n, c);
      a && l !== !0 && (n[a] === !1 || l === !1) || (n[a || i] = de(o));
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
      return !!(s && (!t || He(this, this[s], s, t)));
    }
    return !1;
  },
  delete: function(e, t) {
    const s = this;
    let n = !1;
    function r(o) {
      if (o = ie(o), o) {
        const i = ne(s, o);
        i && (!t || He(s, s[i], i, t)) && (delete s[i], n = !0);
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
        t[o] = de(n), delete t[r];
        return;
      }
      const i = e ? on(r) : String(r).trim();
      i !== r && delete t[r], t[i] = de(n), s[i] = !0;
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
    const s = (this[xe] = this[xe] = {
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
  return t = t !== void 0 ? t : 1e3, function(c) {
    const a = Date.now(), b = n[o];
    i || (i = a), s[r] = c, n[r] = a;
    let y = o, P = 0;
    for (; y !== r; )
      P += s[y++], y = y % e;
    if (r = (r + 1) % e, r === o && (o = (o + 1) % e), a - i < t)
      return;
    const w = b && a - b;
    return w ? Math.round(P * 1e3 / w) : void 0;
  };
}
function ze(e, t) {
  let s = 0;
  const n = an(50, 250);
  return (r) => {
    const o = r.loaded, i = r.lengthComputable ? r.total : void 0, l = o - s, c = n(l), a = o <= i;
    s = o;
    const b = {
      loaded: o,
      total: i,
      progress: i ? o / i : void 0,
      bytes: l,
      rate: c || void 0,
      estimated: c && i && a ? (i - o) / c : void 0
    };
    b[t ? "download" : "upload"] = !0, e(b);
  };
}
function qe(e) {
  return new Promise(function(s, n) {
    let r = e.data;
    const o = H.from(e.headers).normalize(), i = e.responseType;
    let l;
    function c() {
      e.cancelToken && e.cancelToken.unsubscribe(l), e.signal && e.signal.removeEventListener("abort", l);
    }
    u.isFormData(r) && J.isStandardBrowserEnv && o.setContentType(!1);
    let a = new XMLHttpRequest();
    if (e.auth) {
      const w = e.auth.username || "", f = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : "";
      o.set("Authorization", "Basic " + btoa(w + ":" + f));
    }
    const b = gt(e.baseURL, e.url);
    a.open(e.method.toUpperCase(), pt(b, e.params, e.paramsSerializer), !0), a.timeout = e.timeout;
    function y() {
      if (!a)
        return;
      const w = H.from(
        "getAllResponseHeaders" in a && a.getAllResponseHeaders()
      ), g = {
        data: !i || i === "text" || i === "json" ? a.responseText : a.response,
        status: a.status,
        statusText: a.statusText,
        headers: w,
        config: e,
        request: a
      };
      Qs(function($) {
        s($), c();
      }, function($) {
        n($), c();
      }, g), a = null;
    }
    if ("onloadend" in a ? a.onloadend = y : a.onreadystatechange = function() {
      !a || a.readyState !== 4 || a.status === 0 && !(a.responseURL && a.responseURL.indexOf("file:") === 0) || setTimeout(y);
    }, a.onabort = function() {
      !a || (n(new k("Request aborted", k.ECONNABORTED, e, a)), a = null);
    }, a.onerror = function() {
      n(new k("Network Error", k.ERR_NETWORK, e, a)), a = null;
    }, a.ontimeout = function() {
      let f = e.timeout ? "timeout of " + e.timeout + "ms exceeded" : "timeout exceeded";
      const g = e.transitional || ft;
      e.timeoutErrorMessage && (f = e.timeoutErrorMessage), n(new k(
        f,
        g.clarifyTimeoutError ? k.ETIMEDOUT : k.ECONNABORTED,
        e,
        a
      )), a = null;
    }, J.isStandardBrowserEnv) {
      const w = (e.withCredentials || en(b)) && e.xsrfCookieName && Ys.read(e.xsrfCookieName);
      w && o.set(e.xsrfHeaderName, w);
    }
    r === void 0 && o.setContentType(null), "setRequestHeader" in a && u.forEach(o.toJSON(), function(f, g) {
      a.setRequestHeader(g, f);
    }), u.isUndefined(e.withCredentials) || (a.withCredentials = !!e.withCredentials), i && i !== "json" && (a.responseType = e.responseType), typeof e.onDownloadProgress == "function" && a.addEventListener("progress", ze(e.onDownloadProgress, !0)), typeof e.onUploadProgress == "function" && a.upload && a.upload.addEventListener("progress", ze(e.onUploadProgress)), (e.cancelToken || e.signal) && (l = (w) => {
      !a || (n(!w || w.type ? new le(null, e, a) : w), a.abort(), a = null);
    }, e.cancelToken && e.cancelToken.subscribe(l), e.signal && (e.signal.aborted ? l() : e.signal.addEventListener("abort", l)));
    const P = tn(b);
    if (P && J.protocols.indexOf(P) === -1) {
      n(new k("Unsupported protocol " + P + ":", k.ERR_BAD_REQUEST, e));
      return;
    }
    a.send(r || null);
  });
}
const Ge = {
  http: qe,
  xhr: qe
}, Je = {
  getAdapter: (e) => {
    if (u.isString(e)) {
      const t = Ge[e];
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
  adapters: Ge
}, un = {
  "Content-Type": "application/x-www-form-urlencoded"
};
function cn() {
  let e;
  return typeof XMLHttpRequest < "u" ? e = Je.getAdapter("xhr") : typeof process < "u" && u.kindOf(process) === "process" && (e = Je.getAdapter("http")), e;
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
        const c = this.env && this.env.FormData;
        return ge(
          l ? { "files[]": t } : t,
          c && new c(),
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
    FormData: J.classes.FormData,
    Blob: J.classes.Blob
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
    throw new le();
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
  function n(a, b) {
    return u.isPlainObject(a) && u.isPlainObject(b) ? u.merge(a, b) : u.isPlainObject(b) ? u.merge({}, b) : u.isArray(b) ? b.slice() : b;
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
  return u.forEach(Object.keys(e).concat(Object.keys(t)), function(b) {
    const y = c[b] || r, P = y(b);
    u.isUndefined(P) && y !== l || (s[b] = P);
  }), s;
}
const vt = "1.1.3", Fe = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  Fe[e] = function(n) {
    return typeof n === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const We = {};
Fe.transitional = function(t, s, n) {
  function r(o, i) {
    return "[Axios v" + vt + "] Transitional option '" + o + "'" + i + (n ? ". " + n : "");
  }
  return (o, i, l) => {
    if (t === !1)
      throw new k(
        r(i, " has been removed" + (s ? " in " + s : "")),
        k.ERR_DEPRECATED
      );
    return s && !We[i] && (We[i] = !0, console.warn(
      r(
        i,
        " has been deprecated since v" + s + " and will be removed in the near future"
      )
    )), t ? t(o, i, l) : !0;
  };
};
function hn(e, t, s) {
  if (typeof e != "object")
    throw new k("options must be an object", k.ERR_BAD_OPTION_VALUE);
  const n = Object.keys(e);
  let r = n.length;
  for (; r-- > 0; ) {
    const o = n[r], i = t[o];
    if (i) {
      const l = e[o], c = l === void 0 || i(l, o, e);
      if (c !== !0)
        throw new k("option " + o + " must be " + c, k.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (s !== !0)
      throw new k("Unknown option " + o, k.ERR_BAD_OPTION);
  }
}
const Oe = {
  assertOptions: hn,
  validators: Fe
}, W = Oe.validators;
class X {
  constructor(t) {
    this.defaults = t, this.interceptors = {
      request: new Ue(),
      response: new Ue()
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
      function(f) {
        delete s.headers[f];
      }
    ), s.headers = new H(s.headers, o);
    const i = [];
    let l = !0;
    this.interceptors.request.forEach(function(f) {
      typeof f.runWhen == "function" && f.runWhen(s) === !1 || (l = l && f.synchronous, i.unshift(f.fulfilled, f.rejected));
    });
    const c = [];
    this.interceptors.response.forEach(function(f) {
      c.push(f.fulfilled, f.rejected);
    });
    let a, b = 0, y;
    if (!l) {
      const w = [Ke.bind(this), void 0];
      for (w.unshift.apply(w, i), w.push.apply(w, c), y = w.length, a = Promise.resolve(s); b < y; )
        a = a.then(w[b++], w[b++]);
      return a;
    }
    y = i.length;
    let P = s;
    for (b = 0; b < y; ) {
      const w = i[b++], f = i[b++];
      try {
        P = w(P);
      } catch (g) {
        f.call(this, g);
        break;
      }
    }
    try {
      a = Ke.call(this, P);
    } catch (w) {
      return Promise.reject(w);
    }
    for (b = 0, y = c.length; b < y; )
      a = a.then(c[b++], c[b++]);
    return a;
  }
  getUri(t) {
    t = re(this.defaults, t);
    const s = gt(t.baseURL, t.url);
    return pt(s, t.params, t.paramsSerializer);
  }
}
u.forEach(["delete", "get", "head", "options"], function(t) {
  X.prototype[t] = function(s, n) {
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
  X.prototype[t] = s(), X.prototype[t + "Form"] = s(!0);
});
class Ve {
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
      n.reason || (n.reason = new le(o, i, l), s(n.reason));
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
      token: new Ve(function(r) {
        t = r;
      }),
      cancel: t
    };
  }
}
function pn(e) {
  return function(s) {
    return e.apply(null, s);
  };
}
function fn(e) {
  return u.isObject(e) && e.isAxiosError === !0;
}
function wt(e) {
  const t = new X(e), s = nt(X.prototype.request, t);
  return u.extend(s, X.prototype, t, { allOwnKeys: !0 }), u.extend(s, t, null, { allOwnKeys: !0 }), s.create = function(r) {
    return wt(re(e, r));
  }, s;
}
const F = wt(se);
F.Axios = X;
F.CanceledError = le;
F.CancelToken = Ve;
F.isCancel = yt;
F.VERSION = vt;
F.toFormData = ge;
F.AxiosError = k;
F.Cancel = F.CanceledError;
F.all = function(t) {
  return Promise.all(t);
};
F.spread = pn;
F.isAxiosError = fn;
F.formToJSON = (e) => mt(u.isHTMLForm(e) ? new FormData(e) : e);
const mn = L({
  name: "CustomMultipleFileUpload",
  components: {
    CustomButton: st,
    CustomLoader: Ae
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
    const t = C(null), s = () => {
      t.value.click();
    }, n = ({ target: a }) => {
      if (a && a.files.length > 0) {
        let b = new FormData();
        for (let y = 0; y < a.files.length; y++) {
          const P = a.files[y];
          b.append("files", P);
        }
        i(b), t.value.value = "";
      }
    }, r = C([]), o = C(!1), i = (a) => {
      console.log(a), o.value = !0, F.post(e.routePostFiles, a).then((b) => {
        b.data.success ? alert("success") : alert("error"), o.value = !1;
      }).catch((b) => {
        console.log(b), o.value = !1;
      });
    }, l = (a) => {
      r.value.length > 0 && r.value.splice(a, 1);
    }, c = () => {
      F.get(e.routeGetFiles).then((a) => {
        console.log("okk", a);
      }).catch((a) => {
        console.log(a);
      });
    };
    return Pe(() => {
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
}), gn = { class: "generic-input" }, bn = {
  key: 0,
  class: "generic-input__label text-sm secondary-color"
}, yn = { class: "file-list" }, vn = ["onClick"], wn = /* @__PURE__ */ h("svg", {
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
}, On = /* @__PURE__ */ h("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
}, null, -1), En = [
  On
];
function Cn(e, t, s, n, r, o) {
  const i = D("custom-button"), l = D("custom-loader");
  return d(), p("div", gn, [
    e.label ? (d(), p("label", bn, v(e.label), 1)) : S("", !0),
    h("ul", yn, [
      (d(!0), p(N, null, z(e.fileList, (c, a) => (d(), p("li", {
        class: "file-list-item",
        key: a
      }, [
        B(v(c.original_name + "." + c.extension) + " ", 1),
        h("div", {
          onClick: (b) => e.deleteFile(a),
          class: "item-cancel"
        }, _n, 8, vn)
      ]))), 128))
    ]),
    h("input", {
      type: "file",
      class: "generic-input__input-file--hidden",
      ref: "inputFileRef",
      onChange: t[0] || (t[0] = (...c) => e.handleInputChange && e.handleInputChange(...c)),
      multiple: ""
    }, null, 544),
    h("div", Sn, [
      h("div", $n, [
        m(i, {
          label: "Carica",
          styleType: "primary",
          disabled: !1,
          onOnClick: e.handleClick
        }, {
          "slot-left": M(() => [
            (d(), p("svg", kn, En))
          ]),
          _: 1
        }, 8, ["onOnClick"])
      ]),
      m(l, {
        loading: e.loading,
        size: "small"
      }, null, 8, ["loading"])
    ])
  ]);
}
const rl = /* @__PURE__ */ T(mn, [["render", Cn]]);
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
function Rn(e) {
  return e.filter((t) => !t.$isLabel);
}
function we(e, t) {
  return (s) => s.reduce((n, r) => r[e] && r[e].length ? (n.push({
    $groupLabel: r[t],
    $isLabel: !0
  }), n.concat(r[e])) : n, []);
}
function Ln(e, t, s, n, r) {
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
const Qe = (...e) => (t) => e.reduce((s, n) => n(s), t);
var Tn = {
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
      return Qe(
        Ln(t, s, this.groupValues, this.groupLabel, this.customLabel),
        we(this.groupValues, this.groupLabel)
      )(e);
    },
    flatAndStrip(e) {
      return Qe(
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
}, Fn = {
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
}, Me = {
  name: "vue-multiselect",
  mixins: [Tn, Fn],
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
}, Mn = { class: "multiselect__tags-wrap" }, Bn = { class: "multiselect__spinner" }, Nn = { key: 0 }, Dn = { class: "multiselect__option" }, jn = { class: "multiselect__option" }, In = /* @__PURE__ */ B("No elements found. Consider changing the search query."), Un = { class: "multiselect__option" }, xn = /* @__PURE__ */ B("List is empty.");
function Hn(e, t, s, n, r, o) {
  return d(), E("div", {
    tabindex: e.searchable ? -1 : s.tabindex,
    class: [{ "multiselect--active": e.isOpen, "multiselect--disabled": s.disabled, "multiselect--above": o.isAbove }, "multiselect"],
    onFocus: t[14] || (t[14] = (i) => e.activate()),
    onBlur: t[15] || (t[15] = (i) => e.searchable ? !1 : e.deactivate()),
    onKeydown: [
      t[16] || (t[16] = q(R((i) => e.pointerForward(), ["self", "prevent"]), ["down"])),
      t[17] || (t[17] = q(R((i) => e.pointerBackward(), ["self", "prevent"]), ["up"]))
    ],
    onKeypress: t[18] || (t[18] = q(R((i) => e.addPointerElement(i), ["stop", "self"]), ["enter", "tab"])),
    onKeyup: t[19] || (t[19] = q((i) => e.deactivate(), ["esc"])),
    role: "combobox",
    "aria-owns": "listbox-" + e.id
  }, [
    O(e.$slots, "caret", { toggle: e.toggle }, () => [
      m("div", {
        onMousedown: t[1] || (t[1] = R((i) => e.toggle(), ["prevent", "stop"])),
        class: "multiselect__select"
      }, null, 32)
    ]),
    O(e.$slots, "clear", { search: e.search }),
    m("div", Vn, [
      O(e.$slots, "selection", {
        search: e.search,
        remove: e.removeElement,
        values: o.visibleValues,
        isOpen: e.isOpen
      }, () => [
        G(m("div", Mn, [
          (d(!0), E(N, null, z(o.visibleValues, (i, l) => O(e.$slots, "tag", {
            option: i,
            search: e.search,
            remove: e.removeElement
          }, () => [
            (d(), E("span", {
              class: "multiselect__tag",
              key: l
            }, [
              m("span", {
                textContent: v(e.getOptionLabel(i))
              }, null, 8, ["textContent"]),
              m("i", {
                tabindex: "1",
                onKeypress: q(R((c) => e.removeElement(i), ["prevent"]), ["enter"]),
                onMousedown: R((c) => e.removeElement(i), ["prevent"]),
                class: "multiselect__tag-icon"
              }, null, 40, ["onKeypress", "onMousedown"])
            ]))
          ])), 256))
        ], 512), [
          [ee, o.visibleValues.length > 0]
        ]),
        e.internalValue && e.internalValue.length > s.limit ? O(e.$slots, "limit", { key: 0 }, () => [
          m("strong", {
            class: "multiselect__strong",
            textContent: v(s.limitText(e.internalValue.length - s.limit))
          }, null, 8, ["textContent"])
        ]) : S("v-if", !0)
      ]),
      m(Q, { name: "multiselect__loading" }, {
        default: M(() => [
          O(e.$slots, "loading", {}, () => [
            G(m("div", Bn, null, 512), [
              [ee, s.loading]
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
        onInput: t[2] || (t[2] = (i) => e.updateSearch(i.target.value)),
        onFocus: t[3] || (t[3] = R((i) => e.activate(), ["prevent"])),
        onBlur: t[4] || (t[4] = R((i) => e.deactivate(), ["prevent"])),
        onKeyup: t[5] || (t[5] = q((i) => e.deactivate(), ["esc"])),
        onKeydown: [
          t[6] || (t[6] = q(R((i) => e.pointerForward(), ["prevent"]), ["down"])),
          t[7] || (t[7] = q(R((i) => e.pointerBackward(), ["prevent"]), ["up"])),
          t[9] || (t[9] = q(R((i) => e.removeLastElement(), ["stop"]), ["delete"]))
        ],
        onKeypress: t[8] || (t[8] = q(R((i) => e.addPointerElement(i), ["prevent", "stop", "self"]), ["enter"])),
        class: "multiselect__input",
        "aria-controls": "listbox-" + e.id
      }, null, 44, ["name", "id", "placeholder", "value", "disabled", "tabindex", "aria-controls"])) : S("v-if", !0),
      o.isSingleLabelVisible ? (d(), E("span", {
        key: 1,
        class: "multiselect__single",
        onMousedown: t[10] || (t[10] = R((...i) => e.toggle && e.toggle(...i), ["prevent"]))
      }, [
        O(e.$slots, "singleLabel", { option: o.singleValue }, () => [
          B(v(e.currentOptionLabel), 1)
        ])
      ], 32)) : S("v-if", !0),
      o.isPlaceholderVisible ? (d(), E("span", {
        key: 2,
        class: "multiselect__placeholder",
        onMousedown: t[11] || (t[11] = R((...i) => e.toggle && e.toggle(...i), ["prevent"]))
      }, [
        O(e.$slots, "placeholder", {}, () => [
          B(v(e.placeholder), 1)
        ])
      ], 32)) : S("v-if", !0)
    ], 512),
    m(Q, { name: "multiselect" }, {
      default: M(() => [
        G(m("div", {
          class: "multiselect__content-wrapper",
          onFocus: t[12] || (t[12] = (...i) => e.activate && e.activate(...i)),
          tabindex: "-1",
          onMousedown: t[13] || (t[13] = R(() => {
          }, ["prevent"])),
          style: { maxHeight: e.optimizedHeight + "px" },
          ref: "list"
        }, [
          m("ul", {
            class: "multiselect__content",
            style: o.contentStyle,
            role: "listbox",
            id: "listbox-" + e.id
          }, [
            O(e.$slots, "beforeList"),
            e.multiple && e.max === e.internalValue.length ? (d(), E("li", Nn, [
              m("span", Dn, [
                O(e.$slots, "maxElements", {}, () => [
                  B("Maximum of " + v(e.max) + " options selected. First remove a selected option to select another.", 1)
                ])
              ])
            ])) : S("v-if", !0),
            !e.max || e.internalValue.length < e.max ? (d(!0), E(N, { key: 1 }, z(e.filteredOptions, (i, l) => (d(), E("li", {
              class: "multiselect__element",
              key: l,
              id: e.id + "-" + l,
              role: i && (i.$isLabel || i.$isDisabled) ? null : "option"
            }, [
              i && (i.$isLabel || i.$isDisabled) ? S("v-if", !0) : (d(), E("span", {
                key: 0,
                class: [e.optionHighlight(l, i), "multiselect__option"],
                onClick: R((c) => e.select(i), ["stop"]),
                onMouseenter: R((c) => e.pointerSet(l), ["self"]),
                "data-select": i && i.isTag ? e.tagPlaceholder : o.selectLabelText,
                "data-selected": o.selectedLabelText,
                "data-deselect": o.deselectLabelText
              }, [
                O(e.$slots, "option", {
                  option: i,
                  search: e.search,
                  index: l
                }, () => [
                  m("span", null, v(e.getOptionLabel(i)), 1)
                ])
              ], 42, ["onClick", "onMouseenter", "data-select", "data-selected", "data-deselect"])),
              i && (i.$isLabel || i.$isDisabled) ? (d(), E("span", {
                key: 1,
                "data-select": e.groupSelect && o.selectGroupLabelText,
                "data-deselect": e.groupSelect && o.deselectGroupLabelText,
                class: [e.groupHighlight(l, i), "multiselect__option"],
                onMouseenter: R((c) => e.groupSelect && e.pointerSet(l), ["self"]),
                onMousedown: R((c) => e.selectGroup(i), ["prevent"])
              }, [
                O(e.$slots, "option", {
                  option: i,
                  search: e.search,
                  index: l
                }, () => [
                  m("span", null, v(e.getOptionLabel(i)), 1)
                ])
              ], 42, ["data-select", "data-deselect", "onMouseenter", "onMousedown"])) : S("v-if", !0)
            ], 8, ["id", "role"]))), 128)) : S("v-if", !0),
            G(m("li", null, [
              m("span", jn, [
                O(e.$slots, "noResult", { search: e.search }, () => [
                  In
                ])
              ])
            ], 512), [
              [ee, s.showNoResults && e.filteredOptions.length === 0 && e.search && !s.loading]
            ]),
            G(m("li", null, [
              m("span", Un, [
                O(e.$slots, "noOptions", {}, () => [
                  xn
                ])
              ])
            ], 512), [
              [ee, s.showNoOptions && e.options.length === 0 && !e.search && !s.loading]
            ]),
            O(e.$slots, "afterList")
          ], 12, ["id"])
        ], 36), [
          [ee, e.isOpen]
        ])
      ]),
      _: 3
    })
  ], 42, ["tabindex", "aria-owns"]);
}
Me.render = Hn;
const zn = L({
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
    VueMultiselect: Me
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
}, Jn = { class: "multiselect__tags-wrap" }, Kn = { class: "multiselect__tag" }, Wn = ["onClick"];
function Qn(e, t, s, n, r, o) {
  const i = D("vue-multiselect");
  return d(), p("div", qn, [
    e.label ? (d(), p("label", Gn, v(e.label), 1)) : S("", !0),
    m(i, {
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
      noResult: M(() => [
        B(" Nessun risultato. ")
      ]),
      tag: M((l) => [
        h("div", Jn, [
          h("span", Kn, [
            h("span", null, v(l.option.label), 1),
            h("i", {
              onClick: (c) => e.removeOption(l.option),
              tabindex: "1",
              class: "multiselect__tag-icon"
            }, null, 8, Wn)
          ])
        ])
      ]),
      option: M((l) => [
        B(v(l.option.label), 1)
      ]),
      _: 1
    }, 8, ["modelValue", "options", "placeholder", "onSearchChange"])
  ]);
}
const ol = /* @__PURE__ */ T(zn, [["render", Qn]]);
var Yn = "Expected a function", Ye = 0 / 0, Xn = "[object Symbol]", Zn = /^\s+|\s+$/g, ei = /^[-+]0x[0-9a-f]+$/i, ti = /^0b[01]+$/i, si = /^0o[0-7]+$/i, ni = parseInt, ii = typeof ue == "object" && ue && ue.Object === Object && ue, ri = typeof self == "object" && self && self.Object === Object && self, oi = ii || ri || Function("return this")(), li = Object.prototype, ai = li.toString, ui = Math.max, ci = Math.min, _e = function() {
  return oi.Date.now();
};
function di(e, t, s) {
  var n, r, o, i, l, c, a = 0, b = !1, y = !1, P = !0;
  if (typeof e != "function")
    throw new TypeError(Yn);
  t = Xe(t) || 0, Ee(s) && (b = !!s.leading, y = "maxWait" in s, o = y ? ui(Xe(s.maxWait) || 0, t) : o, P = "trailing" in s ? !!s.trailing : P);
  function w(A) {
    var x = n, U = r;
    return n = r = void 0, a = A, i = e.apply(U, x), i;
  }
  function f(A) {
    return a = A, l = setTimeout($, t), b ? w(A) : i;
  }
  function g(A) {
    var x = A - c, U = A - a, ae = t - x;
    return y ? ci(ae, o - U) : ae;
  }
  function _(A) {
    var x = A - c, U = A - a;
    return c === void 0 || x >= t || x < 0 || y && U >= o;
  }
  function $() {
    var A = _e();
    if (_(A))
      return V(A);
    l = setTimeout($, g(A));
  }
  function V(A) {
    return l = void 0, P && n ? w(A) : (n = r = void 0, i);
  }
  function j() {
    l !== void 0 && clearTimeout(l), a = 0, n = c = r = l = void 0;
  }
  function Y() {
    return l === void 0 ? i : V(_e());
  }
  function I() {
    var A = _e(), x = _(A);
    if (n = arguments, r = this, c = A, x) {
      if (l === void 0)
        return f(c);
      if (y)
        return l = setTimeout($, t), w(c);
    }
    return l === void 0 && (l = setTimeout($, t)), i;
  }
  return I.cancel = j, I.flush = Y, I;
}
function Ee(e) {
  var t = typeof e;
  return !!e && (t == "object" || t == "function");
}
function hi(e) {
  return !!e && typeof e == "object";
}
function pi(e) {
  return typeof e == "symbol" || hi(e) && ai.call(e) == Xn;
}
function Xe(e) {
  if (typeof e == "number")
    return e;
  if (pi(e))
    return Ye;
  if (Ee(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = Ee(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = e.replace(Zn, "");
  var s = ti.test(e);
  return s || si.test(e) ? ni(e.slice(2), s ? 2 : 8) : ei.test(e) ? Ye : +e;
}
var fi = di;
const mi = L({
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
    VueMultiselect: Me
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
      e && (this.loading = !0, F.get(this.optionsSearchRoute, {
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
  const i = D("vue-multiselect");
  return d(), p("div", gi, [
    e.label ? (d(), p("label", bi, v(e.label), 1)) : S("", !0),
    m(i, {
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
      noResult: M(() => [
        B(" Nessun risultato. ")
      ]),
      tag: M((l) => [
        h("div", yi, [
          h("span", vi, [
            h("span", null, v(l.option.label), 1),
            h("i", {
              onClick: (c) => e.removeOption(l.option),
              tabindex: "1",
              class: "multiselect__tag-icon"
            }, null, 8, wi)
          ])
        ])
      ]),
      option: M((l) => [
        B(v(l.option.label), 1)
      ]),
      _: 1
    }, 8, ["modelValue", "options", "placeholder", "onSearchChange", "loading"])
  ]);
}
const ll = /* @__PURE__ */ T(mi, [["render", _i]]), Si = L({
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
}, Oi = ["name", "id", "disabled"], Ei = {
  selected: "",
  value: "0"
}, Ci = ["value", "selected"];
function Pi(e, t, s, n, r, o) {
  return d(), p("div", $i, [
    e.label ? (d(), p("label", ki, v(e.label), 1)) : S("", !0),
    h("select", {
      name: e.name,
      class: "custom-select__select",
      id: "select_" + e.name,
      onChange: t[0] || (t[0] = (...i) => e.handleSelectChange && e.handleSelectChange(...i)),
      disabled: e.disabled
    }, [
      h("option", Ei, v(e.placeholder), 1),
      (d(!0), p(N, null, z(e.options, (i, l) => (d(), p("option", {
        key: l,
        value: i.value,
        selected: i.value == e.value
      }, v(i.label), 9, Ci))), 128))
    ], 40, Oi)
  ]);
}
const Ai = /* @__PURE__ */ T(Si, [["render", Pi]]), Ri = L({
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
}), Li = { class: "custom-radio-group" }, Ti = ["name", "id", "value", "disabled", "checked"], Fi = /* @__PURE__ */ h("span", { class: "custom-radio-group__single-radio__radio" }, null, -1), Vi = ["for"];
function Mi(e, t, s, n, r, o) {
  return d(), p("div", Li, [
    (d(!0), p(N, null, z(e.options, (i) => (d(), p("div", {
      key: i.id,
      class: Z([{ disabled: i.disabled, checked: i.value == e.value }, "custom-radio-group__single-radio"])
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
      }, null, 40, Ti),
      Fi,
      h("label", {
        class: "custom-radio-group__single-radio__radio-label",
        for: i.id
      }, v(i.label), 9, Vi)
    ], 2))), 128))
  ]);
}
const al = /* @__PURE__ */ T(Ri, [["render", Mi]]), Bi = L({
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
    return { computedValue: Ze({
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
  return d(), p("div", Ni, [
    e.label ? (d(), p("label", Di, v(e.label), 1)) : S("", !0),
    G(h("textarea", et(e.$attrs, {
      "onUpdate:modelValue": t[0] || (t[0] = (i) => e.computedValue = i),
      class: "generic-input__input " + e.classes
    }), null, 16), [
      [tt, e.computedValue]
    ])
  ]);
}
const ul = /* @__PURE__ */ T(Bi, [["render", ji]]), Ii = L({
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
    return { computedValue: Ze({
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
  return d(), p("div", Ui, [
    e.label ? (d(), p("label", xi, v(e.label), 1)) : S("", !0),
    h("div", Hi, [
      O(e.$slots, "prepend"),
      e.readOnly ? S("", !0) : G((d(), p("input", et({ key: 0 }, e.$attrs, {
        "onUpdate:modelValue": t[0] || (t[0] = (i) => e.computedValue = i),
        class: "generic-input__input " + e.classes
      }), null, 16)), [
        [$t, e.computedValue]
      ])
    ]),
    e.readOnly ? (d(), p("div", zi, v(e.computedValue), 1)) : S("", !0)
  ]);
}
const Gi = /* @__PURE__ */ T(Ii, [["render", qi]]), Ji = L({
  name: "Breadcrumbs",
  props: {
    path_breadcrumbs: {
      type: Array,
      required: !0,
      default: []
    }
  }
}), Ki = { class: "text-secondary text-xl" }, Wi = {
  key: 0,
  class: "font-bold"
}, Qi = { key: 1 };
function Yi(e, t, s, n, r, o) {
  const i = D("router-link");
  return d(), p("div", Ki, [
    (d(!0), p(N, null, z(e.path_breadcrumbs, (l, c) => (d(), p(N, { key: c }, [
      c === e.path_breadcrumbs.length - 1 ? (d(), p("span", Wi, v(l.label), 1)) : (d(), p(N, { key: 1 }, [
        l.path ? (d(), E(i, {
          key: 0,
          to: l.path,
          class: "cursor-pointer hover:underline"
        }, {
          default: M(() => [
            B(v(l.label), 1)
          ]),
          _: 2
        }, 1032, ["to"])) : (d(), p("span", Qi, v(l.label), 1)),
        B(" / ")
      ], 64))
    ], 64))), 128))
  ]);
}
const Xi = /* @__PURE__ */ T(Ji, [["render", Yi]]), Zi = L({
  name: "FormSeparator"
}), er = {
  style: { width: "calc(100% + 2 * 24px)", transform: "translateX(-24px)" },
  class: "border-secondaryLight mb-8 mt-9"
};
function tr(e, t, s, n, r, o) {
  return d(), p("hr", er);
}
const cl = /* @__PURE__ */ T(Zi, [["render", tr]]), sr = "_name", nr = L({
  name: "SearchableModal",
  components: {
    CustomModal: as,
    CustomButton: st,
    GenericInput: Gi,
    CustomSelect: Ai,
    Transition: Q
  },
  props: {
    isOpen: {
      type: Boolean,
      required: !1,
      default: !1
    },
    searchables: {
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
        search: {}
      };
      for (let _ in o.value) {
        const $ = e.searchables.columns.findIndex((V) => V.column === _);
        o.value[_] && (g.search[$] = o.value[_]);
      }
      s(), t.emit("search", g);
    }, r = (g) => {
      let _;
      switch (g) {
        case "text":
          _ = "";
          break;
        case "select":
          _ = 0;
          break;
        case "checkbox":
          _ = !1;
          break;
        case "multiselect":
          _ = 0;
          break;
      }
      return _;
    }, o = C({}), i = C({}), l = C({}), c = C({}), a = () => {
      e.searchables && e.searchables.columns.forEach((g, _) => {
        b(g), y(g, _);
      });
    }, b = (g) => {
      o.value[g.column] = r(g.type);
    }, y = (g, _) => {
      g.route && (l.value[g.column] = !0, F.get(e.baseApiPath + g.route).then(($) => {
        i.value[g.column] = $.data.data.options, e.searchables.relations.forEach((V) => {
          const j = Object.values(V.columns);
          if (j.includes(_) && V.order === null) {
            let Y = j.filter((I) => I !== _);
            c.value[g.column] = {
              update: Y,
              index: _,
              route: V.route
            };
          }
        }), l.value[g.column] = !1;
      }).catch(($) => {
        console.log($);
      }));
    }, P = C(!1);
    return kt(() => e.isOpen, (g, _) => {
      g === !0 && _ === !1 && P.value === !1 && (P.value = !0, a());
    }), {
      emitCloseModal: s,
      emitSearch: n,
      state: o,
      loadingState: l,
      optionsState: i,
      cleanResults: () => {
        e.searchables.columns.forEach((g, _) => {
          o.value[g.column] = r(g.type), g.route && y(g, _);
        });
      },
      handleChangeRelationsSelect: (g, _, $) => {
        if (c.value[_]) {
          const V = [], j = [];
          if (c.value[_].update.forEach((I) => {
            V.push(e.searchables.columns[I].column), j.push(I);
          }), parseInt(g.target.value) === 0) {
            y(e.searchables.columns[$], $), V.forEach((I, A) => {
              b(e.searchables.columns[j[A]]), y(e.searchables.columns[j[A]], j[A]);
            });
            return;
          }
          const Y = e.searchables.columns[c.value[_].index].column;
          F.get(e.baseApiPath + c.value[_].route).then(({ data: I }) => {
            const A = parseInt(o.value[_]), x = I.data.filter((U) => U.properties[Y] === A);
            V.forEach((U) => {
              x.length === 1 && (o.value[U] = x[0].properties[U]);
              const ae = U.split("_")[0] + sr;
              i.value[U] = x.map((Ne) => ({
                value: Ne.properties[U],
                label: Ne.properties[ae]
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
const St = (e) => (he("data-v-63f11d4d"), e = e(), pe(), e), ir = { class: "custom-modal" }, rr = { class: "modal-background" }, or = { class: "modal-container" }, lr = { class: "modal-header" }, ar = /* @__PURE__ */ St(() => /* @__PURE__ */ h("div", { class: "modal-title" }, " Cerca ", -1)), ur = /* @__PURE__ */ St(() => /* @__PURE__ */ h("svg", {
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
], -1)), cr = [
  ur
], dr = { class: "modal-body" }, hr = {
  key: 0,
  class: "grid grid-cols-12 gap-6"
}, pr = { class: "modal-footer" }, fr = { style: { "margin-right": "15px" } }, mr = { style: { "margin-right": "15px" } };
function gr(e, t, s, n, r, o) {
  const i = D("generic-input"), l = D("custom-select"), c = D("custom-button");
  return d(), E(Q, null, {
    default: M(() => [
      G(h("div", ir, [
        h("div", rr, [
          h("div", or, [
            h("div", lr, [
              ar,
              h("div", {
                class: "modal-close",
                onClick: t[0] || (t[0] = (...a) => e.emitCloseModal && e.emitCloseModal(...a))
              }, cr)
            ]),
            h("div", dr, [
              e.searchables ? (d(), p("div", hr, [
                (d(!0), p(N, null, z(e.searchables.columns, (a, b) => (d(), p("div", {
                  class: "col-span-6",
                  key: b
                }, [
                  a.type === "text" ? (d(), E(i, {
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
                    onChange: (y) => e.handleChangeRelationsSelect(y, a.column, b)
                  }, null, 8, ["options", "label", "name", "placeholder", "disabled", "value", "onUpdate:value", "onChange"])) : S("", !0)
                ]))), 128))
              ])) : S("", !0)
            ]),
            h("div", pr, [
              h("div", fr, [
                m(c, {
                  label: "Chiudi",
                  styleType: "secondary-outline",
                  onOnClick: e.emitCloseModal
                }, null, 8, ["onOnClick"])
              ]),
              h("div", mr, [
                m(c, {
                  label: "Pulisci",
                  styleType: "secondary",
                  onOnClick: e.cleanResults
                }, null, 8, ["onOnClick"])
              ]),
              m(c, {
                label: "Cerca",
                styleType: "primary",
                onOnClick: e.emitSearch
              }, null, 8, ["onOnClick"])
            ])
          ])
        ])
      ], 512), [
        [ee, e.isOpen]
      ])
    ]),
    _: 1
  });
}
const dl = /* @__PURE__ */ T(nr, [["render", gr], ["__scopeId", "data-v-63f11d4d"]]), br = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIwAAAAnCAYAAADdG6ATAAAACXBIWXMAAAsSAAALEgHS3X78AAAJwElEQVR4nO1ce4hUVRj/NnYDdydokzBIM9sgCysjYZXKu4KGGjGOINvVXRQTIjbJlXA1GiFHcnf/8MEm+kcKPmKSJcchWgsFHQpU2EotEsPVorWSaPWPaQRXmviW31nPnjnnvmb2PT8YZu495557Ht/53mdKstksFQLpmDWViKJE9CIRPS41eYGI9oSiqSMFeVERw4q8CSYds9YRURMRPeJS9RYRzQxFU78Vl3z0ojRoz9Mxq5aI9hLRgx4f4XqXiKh8jM/pmMZ9QQaXjlmniegzA7Ewy+oiomYiSillE9Ix65PxPumjGb44DPSU8w6Esj8UTa1Rnrmp1H9yvE3yWIJnggGxsEiZoCl20k9CfufLjoS3E9EyIppERGVE1EtEN4ioLZ5Itkr17qDchMPxRLIedS1WvkGwcpvt8URyvR0J/05Ekz107wn0rYXbiCeS92v6f4iIFhNRJW7xpukQfVHq3sE6bJTHphljk6Gc31WHDVsVTySv+W0DdTZgTI5j98NhTMTSFYqmtFwD4kd9xx7TC+xIeBoRdRLRQ0pRGRazxY6EV8UTyWek+4TJKnFolyf0oFJHtNloR8J/mZ51aXsAsYIoOyQ9TVgUPJ46OxJeyoQUTyRTmjaa7Uj4nFKW8w4NanGL+7gbhOrYz3zgiWDSMetKAGJhjrRauX3Lxbz+CZPNE/0pEW3mHQNC2kJEK4joV81z2t0pYRcmtJuI5opdiF21Cs8OeN6OhLOmtu1I2PQeQSzMvT4Qz+E9W1HGdSo0z5Y4lGmBdgW35O/5Xp91QjyRNG4+V6UXXKJKU+RGLJeUnckL8LrpPWCtgljmMfsWC8vfYOfMcnU7yA1CNLTLLJsXVOJWeUHp/wKZyPB7AcrKUVcHLvvZRz+a8M2bMMNEA3E+aHAkmHTMelnDJRi3HYiFWaTKkXii7FA09a3D6wQh6NhyH3Ty2SNuoto7PKHgWIWGY/9x75wyVhnd+P20A0H1A+JPiO7NkkW6chDG1o9SLPBZg8L6hUZ+8+K/qlYEVzlARJZSdJvruxALSVzgjKkCdBGe/MNKEct/VWHrjieSU/D7XegwzLYbobdkMMkNeRCir/6jbLZUV0Ybi0cmGOg7X2vGKUPogt0Q2zz+RUxEPE8uzzpCEscy+hRm5jBx1gvSMSuTjlk/pGPWNl58iCKd+dwiLz5zIfhlrmmIJRWKpso9EIuXQTCxHMLHFzB5LFaPg3UTxAdPcJcgxOEGxGMPurHfxAlxfzou2+keBxPPvj9YQymFKfUeRMhMfDYa6jO3uAECYQtjqkFxZsfdKp+EchMsdiERrfc5DjelV4izPlGACV/LIgpch5XiwDsSEP2f41BnjlTXBLakTqFfnYY6W8D5s+BMAh0wsafzGINyTkelNxRNbQpFU9y5fSAIJzBR7QAnqVKI5S6ceq+wfhOAq3Tge/pg73go0UyUH+OWTkT4heh/NfSLAcC9atzrMLUNTiE2rOpeEJBN6assQiBGVkj3dxdgTDnoV3rZQ8vig4jewOI74S6cdcxJjvEzTHShaOqFoOIHVlAGgz3Iip9gyfheHnSQdiT8DzvmZEJEm8tw6bTjg/T/BExe8S7+fQJlGZ0DT2mrFeJTN5YNkl8lo3xuw8SmQpnYKnTi5LrmPvtPCrEL3TBDctzVQflTH+nRtKFTehlnQWiVaJOJUHXgZaEUFwKLJV8MOxmb0aZ4X8ZgIeWA3QcG77MwpWWlvh/YCF3CxAYndZuneqUNUwpDvc6sbtPc+9B1hAUARMVEiL1uabdkcN2EcgFRbpS5kONC4e2RuGcvfEXzDBZFr+aeYx0WJ/FEsgL6kEzYPQhTVGhMbuN7QBD97UCsVYLItWIb4xXmuzCxXefJK3LyYdhaUnwoQ8VdihgFGMBh4KhTQwCfFxeyCAFVJL2mXGfVdIUixjdUglF9CFfH+wQVMRBuwcdul/IixhncCOZYkSCKkBE4CVwFTg8sYSdYKJqK5NOWkrFWArP6IvtUTO5u+CweNWWd0b1MvpVSu72IrH8km9YGP4So+7YuGi35P67r/CMu7eqyCbmvjU5u+uGAymHUSOskL33ioKUUMliChCvf4Elnryxc3L8Q0U44qi7CrX5ZF5CDf2Kyk0scRNiIxRHtHsEYd2keOYs6TVJdjp2d0rn+8V5+/2RDualdEZ5oUdIaHg4yh4MNlcPsVQKPToG0PiCqPVO5PdFQ3Q3s5X0AzjR5F7diEY4S0WOIjMtoxk49ieClDn1pHPFEMmdMhqjwFU1As96OhP+FY07lIgvhHJyP/pjmTtcu5xR3wLO9uUDpFoOCARwGOTFyfutLTi9Nx6wEEb1ZiI5hd7H7frUpAYm9vGoZFrsaxMJu7xJD1lkZREoOfC7QUYg+uQ/bwV0a0I/qAElaDfhe6/O5IYVO6ZVjDaU68YIcmD+hs+hwOsAgFiM+4jfNQIT6G6SckLc09fh+bYEi4apewe/rAeE1oHyLnwZHMleRkUMwoWhqJ5Q3gap0zOrlHBh8mFC+cTkauy5AXyoDElqtyDrD9QHkxqqEMQtiiwOQdzh3Vo4o+0CNlIQlErvKxUZDP7qlFARPkLji9wH6NGTQmtXI15WJphQKreXhDHVXwPPTrtYAFnq7dC1C/f0BU0Rn2RrZJj+LwGYFFM3voMCyovmfF8JhHcqOhM9AuZaDsdtwPknWS9oQLfbS7jSI43UBOeyQwuiHAdHsM+TGZJEs1agpaw84gIyHU5FlivXQpFksQrRWa63gpMAcEE8N0jmaNXXrRGISzGHmfvzPFDuk4yPCOjupvgPcrIlyobZ7FZFn7vNcXzM2DHD0wyCOtAZByVm43SmSpDTnpDn2tCngMC4KZdGLPJez5h3yN5ysFZHdNgXPh5Wz4Gz+JqRr3WkAke+yyNAHTsi2lOfUdmuQW5wYDXqMJ8cdCESXSadyhBt59GU5xGCnHQnP8jB5e8DpTPnHa6WUyD4rzHBUVXAW9fSjzvxVUQ19RZdDRCAo7qd89klttxVOx612JNw+0okmX0/v88r15aAN4ajEPKQycib/OWknPitlqv0Ik5WPYxx3OCv8BxRc1g+YE67AUdWUpFzXwG/S44E41PYPQe+qM52jsiNh9njP9sA152LuvlSIa8Qh0N99SLigXAfy8Apg4p8ioq+I6Dns0BZYHMy9arCwu8FdGhzaOozdvxTtVkHsWWizBb9PKll8An+7dHcplFQtsQDL0U/Z+5zTLohpNQ6xbTDVGwnI6x+oED/aId1qhFlexBhFXhwGxCHL/hlFQhnbyFckEY5+nsfv4p8FjXEU8l802fSmQhyLLWKEgoj+B/KnMPnqbVqPAAAAAElFTkSuQmCC", yr = L({
  name: "HeaderNavigation",
  components: {
    Transition: Q
  },
  props: {
    menuStructure: {
      type: Array,
      required: !0
    }
  },
  setup(e) {
    const t = br, s = C(!1), n = C(null), r = (a, b) => {
      e.menuStructure[a].children.length > 0 && (n.value && n.value.id === e.menuStructure[a].id ? (n.value = null, s.value = !1) : (n.value = e.menuStructure[a], s.value = !0));
    }, o = C(null), i = C(null), l = (a) => {
      i.value && !i.value.contains(a.target) && !o.value.contains(a.target) && (n.value = null, s.value = !1);
    }, c = () => {
      s.value = !1, n.value = null;
    };
    return Pe(() => {
      document.addEventListener("click", l);
    }), Ot(() => {
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
const Be = (e) => (he("data-v-918f73a8"), e = e(), pe(), e), vr = { class: "header-navigation py-5 container mx-auto" }, wr = { class: "flex items-center justify-between mb-5" }, _r = ["src"], Sr = /* @__PURE__ */ Et('<div class="flex items-center" data-v-918f73a8><div class="cursor-pointer" data-v-918f73a8><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6" data-v-918f73a8><path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" data-v-918f73a8></path></svg></div><div class="ml-7 cursor-pointer" data-v-918f73a8><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6" data-v-918f73a8><path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" data-v-918f73a8></path></svg></div><div class="cursor-pointer ml-7 flex items-center" data-v-918f73a8><div class="h-12 w-12 rounded-full bg-gray flex items-center justify-center" data-v-918f73a8><div class="font-regular text-xl" data-v-918f73a8>EP</div></div><div class="ml-1" data-v-918f73a8><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-3 h-3" data-v-918f73a8><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" data-v-918f73a8></path></svg></div></div></div>', 1), $r = {
  ref: "navigationRef",
  class: "text-secondary text-base font-medium relative"
}, kr = { class: "flex" }, Or = ["onClick"], Er = {
  key: 2,
  class: "ml-1 text-secondary"
}, Cr = {
  key: 0,
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  "stroke-width": "1.5",
  stroke: "currentColor",
  class: "w-3 h-3"
}, Pr = /* @__PURE__ */ Be(() => /* @__PURE__ */ h("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M4.5 15.75l7.5-7.5 7.5 7.5"
}, null, -1)), Ar = [
  Pr
], Rr = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  "stroke-width": "1.5",
  stroke: "currentColor",
  class: "w-3 h-3"
}, Lr = /* @__PURE__ */ Be(() => /* @__PURE__ */ h("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M19.5 8.25l-7.5 7.5-7.5-7.5"
}, null, -1)), Tr = [
  Lr
], Fr = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  "stroke-width": "1.5",
  stroke: "currentColor",
  class: "w-3 h-3"
}, Vr = /* @__PURE__ */ Be(() => /* @__PURE__ */ h("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M19.5 8.25l-7.5 7.5-7.5-7.5"
}, null, -1)), Mr = [
  Vr
], Br = {
  key: 0,
  ref: "menuElementRef",
  class: "text-black absolute w-full shadow-md p-6 bg-white top-7 left-0 z-50"
}, Nr = { class: "font-bold mb-4" }, Dr = { class: "flex flex-wrap" }, jr = { key: 1 };
function Ir(e, t, s, n, r, o) {
  const i = D("router-link");
  return d(), p("header", vr, [
    h("div", wr, [
      m(i, { to: { name: "home" } }, {
        default: M(() => [
          h("div", null, [
            h("img", {
              src: e.siteLogoImage,
              alt: "gaspari-logo"
            }, null, 8, _r)
          ])
        ]),
        _: 1
      }),
      Sr
    ]),
    h("nav", $r, [
      h("ul", kr, [
        (d(!0), p(N, null, z(e.menuStructure, (l, c) => (d(), p("li", {
          key: c,
          class: "mr-6 flex items-center cursor-pointer hover:text-secondaryHover transition select-none",
          onClick: (a) => e.showSubMenu(c, a)
        }, [
          l.href && l.children.length === 0 ? (d(), E(i, {
            key: 0,
            to: l.href,
            onClick: e.forceClose
          }, {
            default: M(() => [
              h("span", {
                class: Z({ "text-secondaryHover": e.currentMenu && e.currentMenu.id === l.id })
              }, v(l.label), 3)
            ]),
            _: 2
          }, 1032, ["to", "onClick"])) : (d(), p("span", {
            key: 1,
            class: Z({ "text-secondaryHover": e.currentMenu && e.currentMenu.id === l.id })
          }, v(l.label), 3)),
          l.children.length > 0 ? (d(), p("div", Er, [
            e.currentMenu ? (d(), p(N, { key: 0 }, [
              e.currentMenu.id === l.id ? (d(), p("svg", Cr, Ar)) : (d(), p("svg", Rr, Tr))
            ], 64)) : (d(), p("svg", Fr, Mr))
          ])) : S("", !0)
        ], 8, Or))), 128))
      ]),
      m(Q, null, {
        default: M(() => [
          e.isVisibleSubMenu && e.currentMenu ? (d(), p("div", Br, [
            h("div", Nr, v(e.currentMenu.label), 1),
            h("ul", Dr, [
              (d(!0), p(N, null, z(e.currentMenu.children, (l, c) => (d(), p("li", {
                key: c,
                class: "w-1/4 mb-3 cursor-pointer transition hover:underline"
              }, [
                l.href && l.children.length === 0 ? (d(), E(i, {
                  key: 0,
                  onClick: e.forceClose,
                  to: l.href
                }, {
                  default: M(() => [
                    B(v(l.label), 1)
                  ]),
                  _: 2
                }, 1032, ["onClick", "to"])) : (d(), p("div", jr, v(l.label), 1))
              ]))), 128))
            ])
          ], 512)) : S("", !0)
        ]),
        _: 1
      })
    ], 512)
  ]);
}
const Ur = /* @__PURE__ */ T(yr, [["render", Ir], ["__scopeId", "data-v-918f73a8"]]), xr = L({
  name: "FormContainer",
  components: {
    Breadcrumbs: Xi
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
}), Hr = {
  key: 0,
  class: "mb-6 ml-1"
}, zr = {
  key: 1,
  class: "mb-3 ml-1 font-semibold text-lg uppercase"
}, qr = { class: "form_container p-6 bg-white rounded-lg shadow overflow-x-hidden" };
function Gr(e, t, s, n, r, o) {
  const i = D("breadcrumbs");
  return d(), p(N, null, [
    e.path_breadcrumbs.length > 0 ? (d(), p("div", Hr, [
      m(i, { path_breadcrumbs: e.path_breadcrumbs }, null, 8, ["path_breadcrumbs"])
    ])) : S("", !0),
    O(e.$slots, "form-buttons-top"),
    e.title ? (d(), p("h3", zr, v(e.title), 1)) : S("", !0),
    h("div", qr, [
      O(e.$slots, "form-content")
    ]),
    O(e.$slots, "form-buttons-bottom")
  ], 64);
}
const hl = /* @__PURE__ */ T(xr, [["render", Gr]]);
var Ce = L({ name: "Vue Tailwind Pagination", props: { current: { type: Number, default: 1 }, total: { type: Number, default: 0 }, perPage: { type: Number, default: 9 }, pageRange: { type: Number, default: 2 }, textBeforeInput: { type: String, default: "Go to page" }, textAfterInput: { type: String, default: "Go" } }, data: () => ({ input: "" }), methods: { hasFirst: function() {
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
const Jr = Ct("data-v-00d7790c");
he("data-v-00d7790c");
const Kr = { class: "min-w-max" }, Wr = { class: "flex justify-between bg-white rounded-lg border border-gray-200 px-10 py-3 text-gray-700 font-montserrat" }, Qr = { class: "flex items-center" }, Yr = { key: 0, class: "pr-6" }, Xr = m("div", { class: "flex items-center justify-center hover:bg-gray-200 rounded-md transform rotate-45 h-6 w-6" }, [m("div", { class: "transform -rotate-45" }, [m("svg", { class: "h-4 w-4", xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor" }, [m("path", { "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-width": "2", d: "M15 19l-7-7 7-7" })])])], -1), Zr = { key: 1, class: "pr-6" }, eo = m("div", { class: "flex hover:bg-gray-200 rounded-md transform rotate-45 h-6 w-6 items-center justify-center" }, [m("span", { class: "transform -rotate-45" }, " 1 ")], -1), to = { key: 2, class: "pr-6" }, so = { class: "pr-6" }, no = { class: "transform -rotate-45" }, io = { key: 3, class: "pr-6" }, ro = { key: 4, class: "pr-6" }, oo = { class: "flex hover:bg-gray-200 rounded-md transform rotate-45 h-6 w-6 items-center justify-center" }, lo = { class: "transform -rotate-45" }, ao = { key: 5, class: "pr-6" }, uo = m("div", { class: "flex items-center justify-center hover:bg-gray-200 rounded-md transform rotate-45 h-6 w-6" }, [m("div", { class: "transform -rotate-45" }, [m("svg", { class: "h-4 w-4", xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor" }, [m("path", { "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-width": "2", d: "M9 5l7 7-7 7" })])])], -1), co = { class: "flex items-center" }, ho = { class: "pr-2 text-gray-400 font-medium" }, po = { id: "text-before-input" }, fo = { class: "w-14 rounded-md border border-indigo-400 px-1 py-1" }, mo = { id: "text-after-input" }, go = m("svg", { class: "h-4 w-4", xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor" }, [m("path", { "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-width": "2", d: "M9 5l7 7-7 7" })], -1);
pe();
const bo = Jr((e, t, s, n, r, o) => (d(), E("div", Kr, [m("section", Wr, [m("ul", Qr, [e.hasPrev() ? (d(), E("li", Yr, [m("a", { href: "#", onClick: t[1] || (t[1] = R((i) => e.changePage(e.prevPage), ["prevent"])) }, [Xr])])) : S("", !0), e.hasFirst() ? (d(), E("li", Zr, [m("a", { href: "#", onClick: t[2] || (t[2] = R((i) => e.changePage(1), ["prevent"])) }, [eo])])) : S("", !0), e.hasFirst() ? (d(), E("li", to, "...")) : S("", !0), (d(!0), E(N, null, z(e.pages, (i) => (d(), E("li", so, [m("a", { href: "#", onClick: R((l) => e.changePage(i), ["prevent"]) }, [m("div", { class: [{ "bg-gradient-to-r from-blue-400 to-indigo-400": e.current == i }, "flex hover:bg-gray-200 rounded-md transform rotate-45 h-6 w-6 items-center justify-center"] }, [m("span", no, v(i), 1)], 2)], 8, ["onClick"])]))), 256)), e.hasLast() ? (d(), E("li", io, "...")) : S("", !0), e.hasLast() ? (d(), E("li", ro, [m("a", { href: "#", onClick: t[3] || (t[3] = R((i) => e.changePage(e.totalPages), ["prevent"])) }, [m("div", oo, [m("span", lo, v(e.totalPages), 1)])])])) : S("", !0), e.hasNext() ? (d(), E("li", ao, [m("a", { href: "#", onClick: t[4] || (t[4] = R((i) => e.changePage(e.nextPage), ["prevent"])) }, [uo])])) : S("", !0)]), m("div", co, [m("div", ho, [m("span", po, v(e.textBeforeInput), 1)]), m("div", fo, [G(m("input", { "onUpdate:modelValue": t[5] || (t[5] = (i) => e.input = i), class: "w-12 focus:outline-none px-2", type: "text" }, null, 512), [[tt, e.input, void 0, { number: !0 }]])]), m("div", { onClick: t[6] || (t[6] = R((i) => e.changePage(e.input), ["prevent"])), class: "flex items-center pl-4 font-medium cursor-pointer" }, [m("span", mo, v(e.textAfterInput), 1), go])])])])));
Ce.render = bo, Ce.__scopeId = "data-v-00d7790c";
const yo = L({
  name: "CustomTable",
  components: {
    VueTailwindPagination: Ce,
    CustomLoader: Ae
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
}), vo = { class: "custom-table" }, wo = {
  key: 0,
  class: "font-semibold text-xl uppercase"
}, _o = { class: "relative" }, So = {
  key: 0,
  class: "w-full h-full pt-20 absolute top-0 left-0 flex items-start justify-center rounded backdrop-blur-sm transition z-50"
}, $o = { class: "text-textGrey text-sm font-medium row-pagination flex justify-between items-center" }, ko = { class: "flex" }, Oo = {
  key: 0,
  class: "mr-10"
}, Eo = {
  key: 1,
  class: "mr-10"
}, Co = { class: "flex" }, Po = /* @__PURE__ */ h("label", {
  for: "numberPerPage",
  class: "mr-1"
}, "Elementi visualizzati: ", -1), Ao = ["selected"], Ro = ["selected"], Lo = ["selected"], To = ["selected"], Fo = ["selected"], Vo = {
  key: 1,
  class: "custom-pagination"
}, Mo = { class: "w-full" }, Bo = { class: "row-theaders" }, No = { class: "text-textGrey font-medium" }, Do = {
  key: 2,
  class: "custom-pagination pagination-bottom"
};
function jo(e, t, s, n, r, o) {
  const i = D("custom-loader"), l = D("VueTailwindPagination");
  return d(), p("div", vo, [
    h("div", {
      class: Z(["mb-5 flex items-center justify-between", { "flex-row-reverse": !e.title }])
    }, [
      e.title ? (d(), p("h2", wo, v(e.title), 1)) : S("", !0),
      O(e.$slots, "filters")
    ], 2),
    h("div", _o, [
      e.loading ? (d(), p("div", So, [
        m(i, {
          loading: e.loading,
          size: "large"
        }, null, 8, ["loading"])
      ])) : S("", !0),
      h("div", $o, [
        h("div", ko, [
          e.total > 0 ? (d(), p("div", Oo, "Risultati da " + v(e.from) + " a " + v(e.from + e.perPage - 1) + " di " + v(e.total), 1)) : (d(), p("div", Eo, "Nessun risultato")),
          h("div", Co, [
            Po,
            h("select", {
              onChange: t[0] || (t[0] = (...c) => e.changePerPageData && e.changePerPageData(...c)),
              id: "numberPerPage",
              class: "bg-white border text-black"
            }, [
              h("option", {
                value: "25",
                selected: e.perPage === 25
              }, "25", 8, Ao),
              h("option", {
                value: "50",
                selected: e.perPage === 50
              }, "50", 8, Ro),
              h("option", {
                value: "100",
                selected: e.perPage === 100
              }, "100", 8, Lo),
              h("option", {
                value: "250",
                selected: e.perPage === 250
              }, "250", 8, To),
              h("option", {
                value: "500",
                selected: e.perPage === 500
              }, "500", 8, Fo)
            ], 32)
          ])
        ])
      ]),
      e.total > 0 ? (d(), p("div", Vo, [
        m(l, {
          current: e.currentPage,
          total: e.total,
          "per-page": e.perPage,
          onPageChanged: e.changePageData,
          "text-before-input": "Vai a pag.",
          "text-after-input": "Vai"
        }, null, 8, ["current", "total", "per-page", "onPageChanged"])
      ])) : S("", !0),
      h("table", Mo, [
        h("thead", null, [
          h("tr", Bo, [
            O(e.$slots, "t-head")
          ])
        ]),
        h("tbody", No, [
          O(e.$slots, "t-body")
        ])
      ]),
      e.total > 0 ? (d(), p("div", Do, [
        m(l, {
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
const pl = /* @__PURE__ */ T(yo, [["render", jo]]), Io = L({
  name: "CustomSidebar",
  components: {
    Transition: Q,
    CustomLoader: Ae
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
const Uo = (e) => (he("data-v-20ccfa8e"), e = e(), pe(), e), xo = {
  key: 0,
  id: "custom-sidebar",
  class: "custom-sidebar shadow-2xl"
}, Ho = { class: "sidebar-content" }, zo = { class: "sidebar-header mb-6 flex justify-between items-center" }, qo = { class: "text-2xl font-bold" }, Go = /* @__PURE__ */ Uo(() => /* @__PURE__ */ h("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  "stroke-width": "2",
  width: "24px",
  height: "24px"
}, [
  /* @__PURE__ */ h("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    d: "M6 18L18 6M6 6l12 12"
  })
], -1)), Jo = [
  Go
], Ko = { class: "sidebar-body" }, Wo = {
  key: 0,
  class: "w-full h-full absolute top-0 left-0 flex items-center justify-center rounded backdrop-blur-sm transition z-50"
};
function Qo(e, t, s, n, r, o) {
  const i = D("custom-loader");
  return d(), E(Q, null, {
    default: M(() => [
      e.isOpen ? (d(), p("div", xo, [
        h("div", Ho, [
          h("div", zo, [
            h("h4", qo, v(e.title), 1),
            h("div", {
              class: "sidebar-close",
              onClick: t[0] || (t[0] = (...l) => e.emitCloseSidebar && e.emitCloseSidebar(...l))
            }, Jo)
          ]),
          h("div", Ko, [
            O(e.$slots, "sidebar-content", {}, void 0, !0)
          ])
        ]),
        h("div", {
          class: "sidebar-bg",
          onClick: t[1] || (t[1] = (...l) => e.emitCloseSidebar && e.emitCloseSidebar(...l))
        }),
        e.loading ? (d(), p("div", Wo, [
          m(i, {
            loading: e.loading,
            size: "large"
          }, null, 8, ["loading"])
        ])) : S("", !0)
      ])) : S("", !0)
    ]),
    _: 3
  });
}
const fl = /* @__PURE__ */ T(Io, [["render", Qo], ["__scopeId", "data-v-20ccfa8e"]]), ml = L({
  name: "CustomPageMeta",
  props: {
    title: {
      type: String
    }
  },
  setup(e) {
    Pe(() => {
      e.title && (document.title = e.title);
    });
  }
}), Yo = L({
  name: "LayoutBase",
  components: {
    HeaderNavigation: Ur
  },
  props: {
    menuStructure: {
      type: Array,
      required: !0
    }
  }
}), Xo = { class: "layout" }, Zo = { class: "main-content" }, el = { class: "container mx-auto py-7" };
function tl(e, t, s, n, r, o) {
  const i = D("header-navigation");
  return d(), p("div", Xo, [
    m(i, { menuStructure: e.menuStructure }, null, 8, ["menuStructure"]),
    h("main", Zo, [
      h("div", el, [
        O(e.$slots, "layout-content")
      ])
    ])
  ]);
}
const gl = /* @__PURE__ */ T(Yo, [["render", tl]]);
function bl() {
  const e = C(!1), t = C(null), s = C(!1), n = C(null);
  return {
    openDetails: async (l, c) => {
      e.value = !0, t.value = c, s.value = !0, await F.get(l).then((a) => {
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
function yl() {
  const e = C([]), t = C(0), s = C(0), n = C(0), r = C(0), o = C(null), i = C(!1), l = C(""), c = C(null), a = (f) => {
    l.value === "" || l.value !== f ? (l.value = f, c.value = null) : l.value === f && c.value === null ? c.value = "desc" : l.value === f && c.value === "desc" && (l.value = "", c.value = null);
  }, b = (f) => ({
    ordered_asc: l.value === f && c.value === null,
    ordered_desc: l.value === f && c.value === "desc"
  }), y = C({ search: {} });
  return {
    results: e,
    currentPage: n,
    perPage: r,
    total: t,
    from: s,
    searchables: o,
    setSearchParams: (f) => {
      y.value.search = f.search;
    },
    updatePagination: async (f, g) => {
      i.value = !0;
      let _ = {
        page: g.currentPage,
        per_page: g.perPage
      };
      l.value && (_.order_by = l.value, c.value === "desc" && (_.order_desc = 1)), y.value.search && (_.search = y.value.search), await F.get(f, {
        params: _
      }).then(($) => {
        $.status === 200 && (n.value = g.currentPage, r.value = g.perPage, e.value = $.data.data, t.value = $.data.meta.total, s.value = $.data.meta.from, o.value = $.data.searchables);
      }).catch(($) => $), i.value = !1;
    },
    loadingPagination: i,
    setPaginationOrder: a,
    setPaginationOrderClasses: b
  };
}
export {
  Xi as Breadcrumbs,
  st as CustomButton,
  Mt as CustomCheckbox,
  nl as CustomFileUpload,
  Ae as CustomLoader,
  as as CustomModal,
  il as CustomMultiCheckbox,
  ol as CustomMultiSelect,
  ll as CustomMultiSelectAsync,
  rl as CustomMultipleFileUpload,
  ml as CustomPageMeta,
  al as CustomRadioGroup,
  Ai as CustomSelect,
  fl as CustomSidebar,
  pl as CustomTable,
  ul as CustomTextArea,
  hl as FormContainer,
  cl as FormSeparator,
  Gi as GenericInput,
  Ur as HeaderNavigation,
  gl as LayoutBase,
  dl as SearchableModal,
  yl as usePagination,
  bl as useSidebar
};
