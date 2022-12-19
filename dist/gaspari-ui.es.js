import { defineComponent as ye, openBlock as p, createElementBlock as b, normalizeClass as we, renderSlot as U, createElementVNode as O, toDisplayString as Z, createTextVNode as De, ref as F, createCommentVNode as S, Fragment as se, resolveComponent as Qe, renderList as ke, createBlock as te, onMounted as tt, createVNode as z, withCtx as ae, withKeys as fe, withModifiers as ge, withDirectives as ze, vShow as ut, Transition as je, computed as J, mergeProps as Ye, vModelText as Qo, vModelDynamic as cs, watch as Wt, pushScopeId as un, popScopeId as sn, normalizeStyle as Nt, reactive as cn, useSlots as Jo, toRef as $a, onUnmounted as Zo, unref as _, isRef as Mt, createSlots as rt, normalizeProps as ot, guardReactiveProps as bt, Teleport as fs, resolveDynamicComponent as _n, nextTick as fn, onBeforeUpdate as ds, getCurrentScope as ps, onScopeDispose as hs, onBeforeUnmount as ms, createStaticVNode as ys, withScopeId as vs } from "vue";
const gs = ye({
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
        let a = "btn ", i = "";
        switch (e.styleType) {
          case "primary":
            i = "btn-primary";
            break;
          case "primary-outline":
            i = "btn-primary-outline";
            break;
          case "secondary":
            i = "btn-secondary";
            break;
          case "secondary-outline":
            i = "btn-secondary-outline";
            break;
        }
        let o = "";
        switch (e.size) {
          case "default":
            o = "";
            break;
          case "small":
            o = "btn--small";
            break;
          case "large":
            o = "btn--large";
            break;
        }
        let l = "";
        return e.disabled && (l = " btn--disabled"), a + " " + i + " " + o + " " + l;
      },
      handleClick: (a) => {
        if (e.disabled)
          return a.preventDefault();
        t.emit("onClick");
      }
    };
  }
}), Ce = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, a] of t)
    n[r] = a;
  return n;
}, bs = ["disabled"];
function _s(e, t, n, r, a, i) {
  return p(), b("button", {
    class: we(["custom-button", e.assignStyle()]),
    disabled: e.disabled,
    onClick: t[0] || (t[0] = (...o) => e.handleClick && e.handleClick(...o))
  }, [
    U(e.$slots, "slot-left"),
    O("span", null, Z(e.label), 1),
    U(e.$slots, "slot-right")
  ], 10, bs);
}
const fu = /* @__PURE__ */ Ce(gs, [["render", _s]]), ws = ye({
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
}), Os = ["checked", "disabled", "name"], $s = /* @__PURE__ */ O("span", { class: "checkmark" }, null, -1);
function ks(e, t, n, r, a, i) {
  return p(), b("label", {
    class: we(["wrapper flex items-center", { disabled: e.disabled }])
  }, [
    De(Z(e.label) + " ", 1),
    O("input", {
      class: "checkbox",
      type: "checkbox",
      checked: e.checked,
      onChange: t[0] || (t[0] = (...o) => e.updateInput && e.updateInput(...o)),
      disabled: e.disabled,
      name: e.name
    }, null, 40, Os),
    $s
  ], 2);
}
const Ss = /* @__PURE__ */ Ce(ws, [["render", ks]]), Ps = ye({
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
    const n = F(null), r = () => {
      n.value.click();
    }, a = F(null);
    return {
      inputFileRef: n,
      handleButtonClick: r,
      handleInputChange: ({ target: l }) => {
        l && l.files.length > 0 && (a.value = l.files[0], t.emit("update:file", l.files[0]), n.value.value = "");
      },
      currentFile: a,
      deleteFile: () => {
        a.value = null, t.emit("update:file", null);
      }
    };
  }
}), Ts = { class: "generic-input" }, Ds = {
  key: 0,
  class: "generic-input__label text-sm secondary-color"
}, Rs = { class: "input-container" }, Cs = { class: "generic-input__input-file" }, xs = { class: "generic-input__input-file__file" }, Ms = {
  key: 0,
  class: "generic-input__input-file__file__placeholder"
}, Ns = {
  key: 1,
  class: "generic-input__input-file__file__file-name"
}, Es = /* @__PURE__ */ O("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  "stroke-width": "2.5",
  stroke: "#FFFFFF",
  class: "cancel"
}, [
  /* @__PURE__ */ O("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    d: "M6 18L18 6M6 6l12 12"
  })
], -1), As = [
  Es
];
function Is(e, t, n, r, a, i) {
  return p(), b("div", Ts, [
    e.label ? (p(), b("label", Ds, Z(e.label), 1)) : S("", !0),
    O("div", Rs, [
      U(e.$slots, "prepend"),
      O("input", {
        type: "file",
        class: "generic-input__input-file--hidden",
        ref: "inputFileRef",
        onChange: t[0] || (t[0] = (...o) => e.handleInputChange && e.handleInputChange(...o))
      }, null, 544),
      O("div", Cs, [
        O("div", {
          class: "generic-input__input-file__button",
          onClick: t[1] || (t[1] = (...o) => e.handleButtonClick && e.handleButtonClick(...o))
        }, " Sfoglia... "),
        O("div", xs, [
          e.currentFile ? (p(), b("div", Ns, [
            De(Z(e.currentFile.name) + " ", 1),
            O("div", {
              onClick: t[2] || (t[2] = (...o) => e.deleteFile && e.deleteFile(...o)),
              class: "generic-input__input-file__file__file-name__cancel"
            }, As)
          ])) : (p(), b("div", Ms, Z(e.placeholder), 1))
        ])
      ])
    ])
  ]);
}
const j1 = /* @__PURE__ */ Ce(Ps, [["render", Is]]), Bs = ye({
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
}), Vs = /* @__PURE__ */ O("span", { class: "sr-only" }, "Loading...", -1), Ls = [
  Vs
];
function Fs(e, t, n, r, a, i) {
  return e.loading ? (p(), b("div", {
    key: 0,
    class: we(["spinner-border", e.size]),
    role: "status"
  }, Ls, 2)) : S("", !0);
}
const Ko = /* @__PURE__ */ Ce(Bs, [["render", Fs]]), Us = ye({
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
}), Ys = {
  key: 0,
  class: "custom-modal"
}, js = { class: "modal-background" }, Hs = { class: "modal-container" }, Ws = { class: "modal-header" }, qs = { class: "modal-title" }, zs = /* @__PURE__ */ O("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  "stroke-width": "1.5",
  width: "24px",
  height: "24px"
}, [
  /* @__PURE__ */ O("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    d: "M6 18L18 6M6 6l12 12"
  })
], -1), Gs = [
  zs
], Qs = { class: "modal-body" }, Js = { class: "modal-footer" };
function Zs(e, t, n, r, a, i) {
  return e.isOpen ? (p(), b("div", Ys, [
    O("div", js, [
      O("div", Hs, [
        O("div", Ws, [
          O("div", qs, [
            e.withoutTitle ? S("", !0) : (p(), b(se, { key: 0 }, [
              De(Z(e.modalTitle), 1)
            ], 64))
          ]),
          O("div", {
            class: "modal-close",
            onClick: t[0] || (t[0] = (...o) => e.emitCloseModal && e.emitCloseModal(...o))
          }, Gs)
        ]),
        O("div", Qs, [
          U(e.$slots, "modal-body")
        ]),
        O("div", Js, [
          U(e.$slots, "modal-footer")
        ])
      ])
    ])
  ])) : S("", !0);
}
const H1 = /* @__PURE__ */ Ce(Us, [["render", Zs]]), Ks = ye({
  name: "CustomMultiCheckbox",
  components: {
    CustomCheckbox: Ss
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
    return { check: (r, a) => {
      let i = [...e.value];
      a ? i.push(r) : i.splice(i.indexOf(r), 1), t.emit("update:value", i);
    } };
  }
});
function Xs(e, t, n, r, a, i) {
  const o = Qe("custom-checkbox");
  return p(), b("div", null, [
    (p(!0), b(se, null, ke(e.options, (l, f) => (p(), te(o, {
      key: f,
      label: l.label,
      checked: e.value.includes(l.id),
      "onUpdate:checked": (u) => e.check(l.id, u)
    }, null, 8, ["label", "checked", "onUpdate:checked"]))), 128))
  ]);
}
const W1 = /* @__PURE__ */ Ce(Ks, [["render", Xs]]);
function du(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: pu } = Object.prototype, { getPrototypeOf: Xo } = Object, ei = ((e) => (t) => {
  const n = pu.call(t);
  return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), wt = (e) => (e = e.toLowerCase(), (t) => ei(t) === e), zr = (e) => (t) => typeof t === e, { isArray: dn } = Array, ka = zr("undefined");
function ec(e) {
  return e !== null && !ka(e) && e.constructor !== null && !ka(e.constructor) && qt(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const hu = wt("ArrayBuffer");
function tc(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && hu(e.buffer), t;
}
const nc = zr("string"), qt = zr("function"), mu = zr("number"), yu = (e) => e !== null && typeof e == "object", rc = (e) => e === !0 || e === !1, wn = (e) => {
  if (ei(e) !== "object")
    return !1;
  const t = Xo(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}, ac = wt("Date"), oc = wt("File"), ic = wt("Blob"), lc = wt("FileList"), uc = (e) => yu(e) && qt(e.pipe), sc = (e) => {
  const t = "[object FormData]";
  return e && (typeof FormData == "function" && e instanceof FormData || pu.call(e) === t || qt(e.toString) && e.toString() === t);
}, cc = wt("URLSearchParams"), fc = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Gr(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let r, a;
  if (typeof e != "object" && (e = [e]), dn(e))
    for (r = 0, a = e.length; r < a; r++)
      t.call(null, e[r], r, e);
  else {
    const i = n ? Object.getOwnPropertyNames(e) : Object.keys(e), o = i.length;
    let l;
    for (r = 0; r < o; r++)
      l = i[r], t.call(null, e[l], l, e);
  }
}
function Sa() {
  const e = {}, t = (n, r) => {
    wn(e[r]) && wn(n) ? e[r] = Sa(e[r], n) : wn(n) ? e[r] = Sa({}, n) : dn(n) ? e[r] = n.slice() : e[r] = n;
  };
  for (let n = 0, r = arguments.length; n < r; n++)
    arguments[n] && Gr(arguments[n], t);
  return e;
}
const dc = (e, t, n, { allOwnKeys: r } = {}) => (Gr(t, (a, i) => {
  n && qt(a) ? e[i] = du(a, n) : e[i] = a;
}, { allOwnKeys: r }), e), pc = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), hc = (e, t, n, r) => {
  e.prototype = Object.create(t.prototype, r), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), n && Object.assign(e.prototype, n);
}, mc = (e, t, n, r) => {
  let a, i, o;
  const l = {};
  if (t = t || {}, e == null)
    return t;
  do {
    for (a = Object.getOwnPropertyNames(e), i = a.length; i-- > 0; )
      o = a[i], (!r || r(o, e, t)) && !l[o] && (t[o] = e[o], l[o] = !0);
    e = n !== !1 && Xo(e);
  } while (e && (!n || n(e, t)) && e !== Object.prototype);
  return t;
}, yc = (e, t, n) => {
  e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= t.length;
  const r = e.indexOf(t, n);
  return r !== -1 && r === n;
}, vc = (e) => {
  if (!e)
    return null;
  if (dn(e))
    return e;
  let t = e.length;
  if (!mu(t))
    return null;
  const n = new Array(t);
  for (; t-- > 0; )
    n[t] = e[t];
  return n;
}, gc = ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && Xo(Uint8Array)), bc = (e, t) => {
  const r = (e && e[Symbol.iterator]).call(e);
  let a;
  for (; (a = r.next()) && !a.done; ) {
    const i = a.value;
    t.call(e, i[0], i[1]);
  }
}, _c = (e, t) => {
  let n;
  const r = [];
  for (; (n = e.exec(t)) !== null; )
    r.push(n);
  return r;
}, wc = wt("HTMLFormElement"), Oc = (e) => e.toLowerCase().replace(
  /[_-\s]([a-z\d])(\w*)/g,
  function(n, r, a) {
    return r.toUpperCase() + a;
  }
), _i = (({ hasOwnProperty: e }) => (t, n) => e.call(t, n))(Object.prototype), $c = wt("RegExp"), vu = (e, t) => {
  const n = Object.getOwnPropertyDescriptors(e), r = {};
  Gr(n, (a, i) => {
    t(a, i, e) !== !1 && (r[i] = a);
  }), Object.defineProperties(e, r);
}, kc = (e) => {
  vu(e, (t, n) => {
    const r = e[n];
    if (!!qt(r)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not read-only method '" + n + "'");
      });
    }
  });
}, Sc = (e, t) => {
  const n = {}, r = (a) => {
    a.forEach((i) => {
      n[i] = !0;
    });
  };
  return dn(e) ? r(e) : r(String(e).split(t)), n;
}, Pc = () => {
}, Tc = (e, t) => (e = +e, Number.isFinite(e) ? e : t), E = {
  isArray: dn,
  isArrayBuffer: hu,
  isBuffer: ec,
  isFormData: sc,
  isArrayBufferView: tc,
  isString: nc,
  isNumber: mu,
  isBoolean: rc,
  isObject: yu,
  isPlainObject: wn,
  isUndefined: ka,
  isDate: ac,
  isFile: oc,
  isBlob: ic,
  isRegExp: $c,
  isFunction: qt,
  isStream: uc,
  isURLSearchParams: cc,
  isTypedArray: gc,
  isFileList: lc,
  forEach: Gr,
  merge: Sa,
  extend: dc,
  trim: fc,
  stripBOM: pc,
  inherits: hc,
  toFlatObject: mc,
  kindOf: ei,
  kindOfTest: wt,
  endsWith: yc,
  toArray: vc,
  forEachEntry: bc,
  matchAll: _c,
  isHTMLForm: wc,
  hasOwnProperty: _i,
  hasOwnProp: _i,
  reduceDescriptors: vu,
  freezeMethods: kc,
  toObjectSet: Sc,
  toCamelCase: Oc,
  noop: Pc,
  toFiniteNumber: Tc
};
function _e(e, t, n, r, a) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), n && (this.config = n), r && (this.request = r), a && (this.response = a);
}
E.inherits(_e, Error, {
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
const gu = _e.prototype, bu = {};
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
  bu[e] = { value: e };
});
Object.defineProperties(_e, bu);
Object.defineProperty(gu, "isAxiosError", { value: !0 });
_e.from = (e, t, n, r, a, i) => {
  const o = Object.create(gu);
  return E.toFlatObject(e, o, function(f) {
    return f !== Error.prototype;
  }, (l) => l !== "isAxiosError"), _e.call(o, e.message, t, n, r, a), o.cause = e, o.name = e.name, i && Object.assign(o, i), o;
};
var vn = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Dc = typeof self == "object" ? self.FormData : window.FormData;
function Pa(e) {
  return E.isPlainObject(e) || E.isArray(e);
}
function _u(e) {
  return E.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function wi(e, t, n) {
  return e ? e.concat(t).map(function(a, i) {
    return a = _u(a), !n && i ? "[" + a + "]" : a;
  }).join(n ? "." : "") : t;
}
function Rc(e) {
  return E.isArray(e) && !e.some(Pa);
}
const Cc = E.toFlatObject(E, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function xc(e) {
  return e && E.isFunction(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator];
}
function Qr(e, t, n) {
  if (!E.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new (Dc || FormData)(), n = E.toFlatObject(n, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(P, D) {
    return !E.isUndefined(D[P]);
  });
  const r = n.metaTokens, a = n.visitor || d, i = n.dots, o = n.indexes, f = (n.Blob || typeof Blob < "u" && Blob) && xc(t);
  if (!E.isFunction(a))
    throw new TypeError("visitor must be a function");
  function u(g) {
    if (g === null)
      return "";
    if (E.isDate(g))
      return g.toISOString();
    if (!f && E.isBlob(g))
      throw new _e("Blob is not supported. Use a Buffer instead.");
    return E.isArrayBuffer(g) || E.isTypedArray(g) ? f && typeof Blob == "function" ? new Blob([g]) : Buffer.from(g) : g;
  }
  function d(g, P, D) {
    let B = g;
    if (g && !D && typeof g == "object") {
      if (E.endsWith(P, "{}"))
        P = r ? P : P.slice(0, -2), g = JSON.stringify(g);
      else if (E.isArray(g) && Rc(g) || E.isFileList(g) || E.endsWith(P, "[]") && (B = E.toArray(g)))
        return P = _u(P), B.forEach(function(H, K) {
          !(E.isUndefined(H) || H === null) && t.append(
            o === !0 ? wi([P], K, i) : o === null ? P : P + "[]",
            u(H)
          );
        }), !1;
    }
    return Pa(g) ? !0 : (t.append(wi(D, P, i), u(g)), !1);
  }
  const s = [], h = Object.assign(Cc, {
    defaultVisitor: d,
    convertValue: u,
    isVisitable: Pa
  });
  function v(g, P) {
    if (!E.isUndefined(g)) {
      if (s.indexOf(g) !== -1)
        throw Error("Circular reference detected in " + P.join("."));
      s.push(g), E.forEach(g, function(B, C) {
        (!(E.isUndefined(B) || B === null) && a.call(
          t,
          B,
          E.isString(C) ? C.trim() : C,
          P,
          h
        )) === !0 && v(B, P ? P.concat(C) : [C]);
      }), s.pop();
    }
  }
  if (!E.isObject(e))
    throw new TypeError("data must be an object");
  return v(e), t;
}
function Oi(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function(r) {
    return t[r];
  });
}
function ti(e, t) {
  this._pairs = [], e && Qr(e, this, t);
}
const wu = ti.prototype;
wu.append = function(t, n) {
  this._pairs.push([t, n]);
};
wu.toString = function(t) {
  const n = t ? function(r) {
    return t.call(this, r, Oi);
  } : Oi;
  return this._pairs.map(function(a) {
    return n(a[0]) + "=" + n(a[1]);
  }, "").join("&");
};
function Mc(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function Ou(e, t, n) {
  if (!t)
    return e;
  const r = n && n.encode || Mc, a = n && n.serialize;
  let i;
  if (a ? i = a(t, n) : i = E.isURLSearchParams(t) ? t.toString() : new ti(t, n).toString(r), i) {
    const o = e.indexOf("#");
    o !== -1 && (e = e.slice(0, o)), e += (e.indexOf("?") === -1 ? "?" : "&") + i;
  }
  return e;
}
class $i {
  constructor() {
    this.handlers = [];
  }
  use(t, n, r) {
    return this.handlers.push({
      fulfilled: t,
      rejected: n,
      synchronous: r ? r.synchronous : !1,
      runWhen: r ? r.runWhen : null
    }), this.handlers.length - 1;
  }
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
  }
  clear() {
    this.handlers && (this.handlers = []);
  }
  forEach(t) {
    E.forEach(this.handlers, function(r) {
      r !== null && t(r);
    });
  }
}
const $u = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, Nc = typeof URLSearchParams < "u" ? URLSearchParams : ti, Ec = FormData, Ac = (() => {
  let e;
  return typeof navigator < "u" && ((e = navigator.product) === "ReactNative" || e === "NativeScript" || e === "NS") ? !1 : typeof window < "u" && typeof document < "u";
})(), _t = {
  isBrowser: !0,
  classes: {
    URLSearchParams: Nc,
    FormData: Ec,
    Blob
  },
  isStandardBrowserEnv: Ac,
  protocols: ["http", "https", "file", "blob", "url", "data"]
};
function Ic(e, t) {
  return Qr(e, new _t.classes.URLSearchParams(), Object.assign({
    visitor: function(n, r, a, i) {
      return _t.isNode && E.isBuffer(n) ? (this.append(r, n.toString("base64")), !1) : i.defaultVisitor.apply(this, arguments);
    }
  }, t));
}
function Bc(e) {
  return E.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function Vc(e) {
  const t = {}, n = Object.keys(e);
  let r;
  const a = n.length;
  let i;
  for (r = 0; r < a; r++)
    i = n[r], t[i] = e[i];
  return t;
}
function ku(e) {
  function t(n, r, a, i) {
    let o = n[i++];
    const l = Number.isFinite(+o), f = i >= n.length;
    return o = !o && E.isArray(a) ? a.length : o, f ? (E.hasOwnProp(a, o) ? a[o] = [a[o], r] : a[o] = r, !l) : ((!a[o] || !E.isObject(a[o])) && (a[o] = []), t(n, r, a[o], i) && E.isArray(a[o]) && (a[o] = Vc(a[o])), !l);
  }
  if (E.isFormData(e) && E.isFunction(e.entries)) {
    const n = {};
    return E.forEachEntry(e, (r, a) => {
      t(Bc(r), a, n, 0);
    }), n;
  }
  return null;
}
function Lc(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status) ? e(n) : t(new _e(
    "Request failed with status code " + n.status,
    [_e.ERR_BAD_REQUEST, _e.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],
    n.config,
    n.request,
    n
  ));
}
const Fc = _t.isStandardBrowserEnv ? function() {
  return {
    write: function(n, r, a, i, o, l) {
      const f = [];
      f.push(n + "=" + encodeURIComponent(r)), E.isNumber(a) && f.push("expires=" + new Date(a).toGMTString()), E.isString(i) && f.push("path=" + i), E.isString(o) && f.push("domain=" + o), l === !0 && f.push("secure"), document.cookie = f.join("; ");
    },
    read: function(n) {
      const r = document.cookie.match(new RegExp("(^|;\\s*)(" + n + ")=([^;]*)"));
      return r ? decodeURIComponent(r[3]) : null;
    },
    remove: function(n) {
      this.write(n, "", Date.now() - 864e5);
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
function Uc(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function Yc(e, t) {
  return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function Su(e, t) {
  return e && !Uc(t) ? Yc(e, t) : t;
}
const jc = _t.isStandardBrowserEnv ? function() {
  const t = /(msie|trident)/i.test(navigator.userAgent), n = document.createElement("a");
  let r;
  function a(i) {
    let o = i;
    return t && (n.setAttribute("href", o), o = n.href), n.setAttribute("href", o), {
      href: n.href,
      protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
      host: n.host,
      search: n.search ? n.search.replace(/^\?/, "") : "",
      hash: n.hash ? n.hash.replace(/^#/, "") : "",
      hostname: n.hostname,
      port: n.port,
      pathname: n.pathname.charAt(0) === "/" ? n.pathname : "/" + n.pathname
    };
  }
  return r = a(window.location.href), function(o) {
    const l = E.isString(o) ? a(o) : o;
    return l.protocol === r.protocol && l.host === r.host;
  };
}() : function() {
  return function() {
    return !0;
  };
}();
function pn(e, t, n) {
  _e.call(this, e == null ? "canceled" : e, _e.ERR_CANCELED, t, n), this.name = "CanceledError";
}
E.inherits(pn, _e, {
  __CANCEL__: !0
});
function Hc(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
const Wc = E.toObjectSet([
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
]), qc = (e) => {
  const t = {};
  let n, r, a;
  return e && e.split(`
`).forEach(function(o) {
    a = o.indexOf(":"), n = o.substring(0, a).trim().toLowerCase(), r = o.substring(a + 1).trim(), !(!n || t[n] && Wc[n]) && (n === "set-cookie" ? t[n] ? t[n].push(r) : t[n] = [r] : t[n] = t[n] ? t[n] + ", " + r : r);
  }), t;
}, ki = Symbol("internals"), Pu = Symbol("defaults");
function tn(e) {
  return e && String(e).trim().toLowerCase();
}
function On(e) {
  return e === !1 || e == null ? e : E.isArray(e) ? e.map(On) : String(e);
}
function zc(e) {
  const t = /* @__PURE__ */ Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; r = n.exec(e); )
    t[r[1]] = r[2];
  return t;
}
function Si(e, t, n, r) {
  if (E.isFunction(r))
    return r.call(this, t, n);
  if (!!E.isString(t)) {
    if (E.isString(r))
      return t.indexOf(r) !== -1;
    if (E.isRegExp(r))
      return r.test(t);
  }
}
function Gc(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function Qc(e, t) {
  const n = E.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(e, r + n, {
      value: function(a, i, o) {
        return this[r].call(this, t, a, i, o);
      },
      configurable: !0
    });
  });
}
function Jt(e, t) {
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length, a;
  for (; r-- > 0; )
    if (a = n[r], t === a.toLowerCase())
      return a;
  return null;
}
function st(e, t) {
  e && this.set(e), this[Pu] = t || null;
}
Object.assign(st.prototype, {
  set: function(e, t, n) {
    const r = this;
    function a(i, o, l) {
      const f = tn(o);
      if (!f)
        throw new Error("header name must be a non-empty string");
      const u = Jt(r, f);
      u && l !== !0 && (r[u] === !1 || l === !1) || (r[u || o] = On(i));
    }
    return E.isPlainObject(e) ? E.forEach(e, (i, o) => {
      a(i, o, t);
    }) : a(t, e, n), this;
  },
  get: function(e, t) {
    if (e = tn(e), !e)
      return;
    const n = Jt(this, e);
    if (n) {
      const r = this[n];
      if (!t)
        return r;
      if (t === !0)
        return zc(r);
      if (E.isFunction(t))
        return t.call(this, r, n);
      if (E.isRegExp(t))
        return t.exec(r);
      throw new TypeError("parser must be boolean|regexp|function");
    }
  },
  has: function(e, t) {
    if (e = tn(e), e) {
      const n = Jt(this, e);
      return !!(n && (!t || Si(this, this[n], n, t)));
    }
    return !1;
  },
  delete: function(e, t) {
    const n = this;
    let r = !1;
    function a(i) {
      if (i = tn(i), i) {
        const o = Jt(n, i);
        o && (!t || Si(n, n[o], o, t)) && (delete n[o], r = !0);
      }
    }
    return E.isArray(e) ? e.forEach(a) : a(e), r;
  },
  clear: function() {
    return Object.keys(this).forEach(this.delete.bind(this));
  },
  normalize: function(e) {
    const t = this, n = {};
    return E.forEach(this, (r, a) => {
      const i = Jt(n, a);
      if (i) {
        t[i] = On(r), delete t[a];
        return;
      }
      const o = e ? Gc(a) : String(a).trim();
      o !== a && delete t[a], t[o] = On(r), n[o] = !0;
    }), this;
  },
  toJSON: function(e) {
    const t = /* @__PURE__ */ Object.create(null);
    return E.forEach(
      Object.assign({}, this[Pu] || null, this),
      (n, r) => {
        n == null || n === !1 || (t[r] = e && E.isArray(n) ? n.join(", ") : n);
      }
    ), t;
  }
});
Object.assign(st, {
  from: function(e) {
    return E.isString(e) ? new this(qc(e)) : e instanceof this ? e : new this(e);
  },
  accessor: function(e) {
    const n = (this[ki] = this[ki] = {
      accessors: {}
    }).accessors, r = this.prototype;
    function a(i) {
      const o = tn(i);
      n[o] || (Qc(r, i), n[o] = !0);
    }
    return E.isArray(e) ? e.forEach(a) : a(e), this;
  }
});
st.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent"]);
E.freezeMethods(st.prototype);
E.freezeMethods(st);
function Jc(e, t) {
  e = e || 10;
  const n = new Array(e), r = new Array(e);
  let a = 0, i = 0, o;
  return t = t !== void 0 ? t : 1e3, function(f) {
    const u = Date.now(), d = r[i];
    o || (o = u), n[a] = f, r[a] = u;
    let s = i, h = 0;
    for (; s !== a; )
      h += n[s++], s = s % e;
    if (a = (a + 1) % e, a === i && (i = (i + 1) % e), u - o < t)
      return;
    const v = d && u - d;
    return v ? Math.round(h * 1e3 / v) : void 0;
  };
}
function Pi(e, t) {
  let n = 0;
  const r = Jc(50, 250);
  return (a) => {
    const i = a.loaded, o = a.lengthComputable ? a.total : void 0, l = i - n, f = r(l), u = i <= o;
    n = i;
    const d = {
      loaded: i,
      total: o,
      progress: o ? i / o : void 0,
      bytes: l,
      rate: f || void 0,
      estimated: f && o && u ? (o - i) / f : void 0
    };
    d[t ? "download" : "upload"] = !0, e(d);
  };
}
function Ti(e) {
  return new Promise(function(n, r) {
    let a = e.data;
    const i = st.from(e.headers).normalize(), o = e.responseType;
    let l;
    function f() {
      e.cancelToken && e.cancelToken.unsubscribe(l), e.signal && e.signal.removeEventListener("abort", l);
    }
    E.isFormData(a) && _t.isStandardBrowserEnv && i.setContentType(!1);
    let u = new XMLHttpRequest();
    if (e.auth) {
      const v = e.auth.username || "", g = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : "";
      i.set("Authorization", "Basic " + btoa(v + ":" + g));
    }
    const d = Su(e.baseURL, e.url);
    u.open(e.method.toUpperCase(), Ou(d, e.params, e.paramsSerializer), !0), u.timeout = e.timeout;
    function s() {
      if (!u)
        return;
      const v = st.from(
        "getAllResponseHeaders" in u && u.getAllResponseHeaders()
      ), P = {
        data: !o || o === "text" || o === "json" ? u.responseText : u.response,
        status: u.status,
        statusText: u.statusText,
        headers: v,
        config: e,
        request: u
      };
      Lc(function(B) {
        n(B), f();
      }, function(B) {
        r(B), f();
      }, P), u = null;
    }
    if ("onloadend" in u ? u.onloadend = s : u.onreadystatechange = function() {
      !u || u.readyState !== 4 || u.status === 0 && !(u.responseURL && u.responseURL.indexOf("file:") === 0) || setTimeout(s);
    }, u.onabort = function() {
      !u || (r(new _e("Request aborted", _e.ECONNABORTED, e, u)), u = null);
    }, u.onerror = function() {
      r(new _e("Network Error", _e.ERR_NETWORK, e, u)), u = null;
    }, u.ontimeout = function() {
      let g = e.timeout ? "timeout of " + e.timeout + "ms exceeded" : "timeout exceeded";
      const P = e.transitional || $u;
      e.timeoutErrorMessage && (g = e.timeoutErrorMessage), r(new _e(
        g,
        P.clarifyTimeoutError ? _e.ETIMEDOUT : _e.ECONNABORTED,
        e,
        u
      )), u = null;
    }, _t.isStandardBrowserEnv) {
      const v = (e.withCredentials || jc(d)) && e.xsrfCookieName && Fc.read(e.xsrfCookieName);
      v && i.set(e.xsrfHeaderName, v);
    }
    a === void 0 && i.setContentType(null), "setRequestHeader" in u && E.forEach(i.toJSON(), function(g, P) {
      u.setRequestHeader(P, g);
    }), E.isUndefined(e.withCredentials) || (u.withCredentials = !!e.withCredentials), o && o !== "json" && (u.responseType = e.responseType), typeof e.onDownloadProgress == "function" && u.addEventListener("progress", Pi(e.onDownloadProgress, !0)), typeof e.onUploadProgress == "function" && u.upload && u.upload.addEventListener("progress", Pi(e.onUploadProgress)), (e.cancelToken || e.signal) && (l = (v) => {
      !u || (r(!v || v.type ? new pn(null, e, u) : v), u.abort(), u = null);
    }, e.cancelToken && e.cancelToken.subscribe(l), e.signal && (e.signal.aborted ? l() : e.signal.addEventListener("abort", l)));
    const h = Hc(d);
    if (h && _t.protocols.indexOf(h) === -1) {
      r(new _e("Unsupported protocol " + h + ":", _e.ERR_BAD_REQUEST, e));
      return;
    }
    u.send(a || null);
  });
}
const Di = {
  http: Ti,
  xhr: Ti
}, Ri = {
  getAdapter: (e) => {
    if (E.isString(e)) {
      const t = Di[e];
      if (!e)
        throw Error(
          E.hasOwnProp(e) ? `Adapter '${e}' is not available in the build` : `Can not resolve adapter '${e}'`
        );
      return t;
    }
    if (!E.isFunction(e))
      throw new TypeError("adapter is not a function");
    return e;
  },
  adapters: Di
}, Zc = {
  "Content-Type": "application/x-www-form-urlencoded"
};
function Kc() {
  let e;
  return typeof XMLHttpRequest < "u" ? e = Ri.getAdapter("xhr") : typeof process < "u" && E.kindOf(process) === "process" && (e = Ri.getAdapter("http")), e;
}
function Xc(e, t, n) {
  if (E.isString(e))
    try {
      return (t || JSON.parse)(e), E.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError")
        throw r;
    }
  return (n || JSON.stringify)(e);
}
const zt = {
  transitional: $u,
  adapter: Kc(),
  transformRequest: [function(t, n) {
    const r = n.getContentType() || "", a = r.indexOf("application/json") > -1, i = E.isObject(t);
    if (i && E.isHTMLForm(t) && (t = new FormData(t)), E.isFormData(t))
      return a && a ? JSON.stringify(ku(t)) : t;
    if (E.isArrayBuffer(t) || E.isBuffer(t) || E.isStream(t) || E.isFile(t) || E.isBlob(t))
      return t;
    if (E.isArrayBufferView(t))
      return t.buffer;
    if (E.isURLSearchParams(t))
      return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let l;
    if (i) {
      if (r.indexOf("application/x-www-form-urlencoded") > -1)
        return Ic(t, this.formSerializer).toString();
      if ((l = E.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
        const f = this.env && this.env.FormData;
        return Qr(
          l ? { "files[]": t } : t,
          f && new f(),
          this.formSerializer
        );
      }
    }
    return i || a ? (n.setContentType("application/json", !1), Xc(t)) : t;
  }],
  transformResponse: [function(t) {
    const n = this.transitional || zt.transitional, r = n && n.forcedJSONParsing, a = this.responseType === "json";
    if (t && E.isString(t) && (r && !this.responseType || a)) {
      const o = !(n && n.silentJSONParsing) && a;
      try {
        return JSON.parse(t);
      } catch (l) {
        if (o)
          throw l.name === "SyntaxError" ? _e.from(l, _e.ERR_BAD_RESPONSE, this, null, this.response) : l;
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
    FormData: _t.classes.FormData,
    Blob: _t.classes.Blob
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
E.forEach(["delete", "get", "head"], function(t) {
  zt.headers[t] = {};
});
E.forEach(["post", "put", "patch"], function(t) {
  zt.headers[t] = E.merge(Zc);
});
function aa(e, t) {
  const n = this || zt, r = t || n, a = st.from(r.headers);
  let i = r.data;
  return E.forEach(e, function(l) {
    i = l.call(n, i, a.normalize(), t ? t.status : void 0);
  }), a.normalize(), i;
}
function Tu(e) {
  return !!(e && e.__CANCEL__);
}
function oa(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new pn();
}
function Ci(e) {
  return oa(e), e.headers = st.from(e.headers), e.data = aa.call(
    e,
    e.transformRequest
  ), (e.adapter || zt.adapter)(e).then(function(r) {
    return oa(e), r.data = aa.call(
      e,
      e.transformResponse,
      r
    ), r.headers = st.from(r.headers), r;
  }, function(r) {
    return Tu(r) || (oa(e), r && r.response && (r.response.data = aa.call(
      e,
      e.transformResponse,
      r.response
    ), r.response.headers = st.from(r.response.headers))), Promise.reject(r);
  });
}
function ln(e, t) {
  t = t || {};
  const n = {};
  function r(u, d) {
    return E.isPlainObject(u) && E.isPlainObject(d) ? E.merge(u, d) : E.isPlainObject(d) ? E.merge({}, d) : E.isArray(d) ? d.slice() : d;
  }
  function a(u) {
    if (E.isUndefined(t[u])) {
      if (!E.isUndefined(e[u]))
        return r(void 0, e[u]);
    } else
      return r(e[u], t[u]);
  }
  function i(u) {
    if (!E.isUndefined(t[u]))
      return r(void 0, t[u]);
  }
  function o(u) {
    if (E.isUndefined(t[u])) {
      if (!E.isUndefined(e[u]))
        return r(void 0, e[u]);
    } else
      return r(void 0, t[u]);
  }
  function l(u) {
    if (u in t)
      return r(e[u], t[u]);
    if (u in e)
      return r(void 0, e[u]);
  }
  const f = {
    url: i,
    method: i,
    data: i,
    baseURL: o,
    transformRequest: o,
    transformResponse: o,
    paramsSerializer: o,
    timeout: o,
    timeoutMessage: o,
    withCredentials: o,
    adapter: o,
    responseType: o,
    xsrfCookieName: o,
    xsrfHeaderName: o,
    onUploadProgress: o,
    onDownloadProgress: o,
    decompress: o,
    maxContentLength: o,
    maxBodyLength: o,
    beforeRedirect: o,
    transport: o,
    httpAgent: o,
    httpsAgent: o,
    cancelToken: o,
    socketPath: o,
    responseEncoding: o,
    validateStatus: l
  };
  return E.forEach(Object.keys(e).concat(Object.keys(t)), function(d) {
    const s = f[d] || a, h = s(d);
    E.isUndefined(h) && s !== l || (n[d] = h);
  }), n;
}
const Du = "1.1.3", ni = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  ni[e] = function(r) {
    return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const xi = {};
ni.transitional = function(t, n, r) {
  function a(i, o) {
    return "[Axios v" + Du + "] Transitional option '" + i + "'" + o + (r ? ". " + r : "");
  }
  return (i, o, l) => {
    if (t === !1)
      throw new _e(
        a(o, " has been removed" + (n ? " in " + n : "")),
        _e.ERR_DEPRECATED
      );
    return n && !xi[o] && (xi[o] = !0, console.warn(
      a(
        o,
        " has been deprecated since v" + n + " and will be removed in the near future"
      )
    )), t ? t(i, o, l) : !0;
  };
};
function ef(e, t, n) {
  if (typeof e != "object")
    throw new _e("options must be an object", _e.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let a = r.length;
  for (; a-- > 0; ) {
    const i = r[a], o = t[i];
    if (o) {
      const l = e[i], f = l === void 0 || o(l, i, e);
      if (f !== !0)
        throw new _e("option " + i + " must be " + f, _e.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0)
      throw new _e("Unknown option " + i, _e.ERR_BAD_OPTION);
  }
}
const Ta = {
  assertOptions: ef,
  validators: ni
}, Ot = Ta.validators;
class At {
  constructor(t) {
    this.defaults = t, this.interceptors = {
      request: new $i(),
      response: new $i()
    };
  }
  request(t, n) {
    typeof t == "string" ? (n = n || {}, n.url = t) : n = t || {}, n = ln(this.defaults, n);
    const { transitional: r, paramsSerializer: a } = n;
    r !== void 0 && Ta.assertOptions(r, {
      silentJSONParsing: Ot.transitional(Ot.boolean),
      forcedJSONParsing: Ot.transitional(Ot.boolean),
      clarifyTimeoutError: Ot.transitional(Ot.boolean)
    }, !1), a !== void 0 && Ta.assertOptions(a, {
      encode: Ot.function,
      serialize: Ot.function
    }, !0), n.method = (n.method || this.defaults.method || "get").toLowerCase();
    const i = n.headers && E.merge(
      n.headers.common,
      n.headers[n.method]
    );
    i && E.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      function(g) {
        delete n.headers[g];
      }
    ), n.headers = new st(n.headers, i);
    const o = [];
    let l = !0;
    this.interceptors.request.forEach(function(g) {
      typeof g.runWhen == "function" && g.runWhen(n) === !1 || (l = l && g.synchronous, o.unshift(g.fulfilled, g.rejected));
    });
    const f = [];
    this.interceptors.response.forEach(function(g) {
      f.push(g.fulfilled, g.rejected);
    });
    let u, d = 0, s;
    if (!l) {
      const v = [Ci.bind(this), void 0];
      for (v.unshift.apply(v, o), v.push.apply(v, f), s = v.length, u = Promise.resolve(n); d < s; )
        u = u.then(v[d++], v[d++]);
      return u;
    }
    s = o.length;
    let h = n;
    for (d = 0; d < s; ) {
      const v = o[d++], g = o[d++];
      try {
        h = v(h);
      } catch (P) {
        g.call(this, P);
        break;
      }
    }
    try {
      u = Ci.call(this, h);
    } catch (v) {
      return Promise.reject(v);
    }
    for (d = 0, s = f.length; d < s; )
      u = u.then(f[d++], f[d++]);
    return u;
  }
  getUri(t) {
    t = ln(this.defaults, t);
    const n = Su(t.baseURL, t.url);
    return Ou(n, t.params, t.paramsSerializer);
  }
}
E.forEach(["delete", "get", "head", "options"], function(t) {
  At.prototype[t] = function(n, r) {
    return this.request(ln(r || {}, {
      method: t,
      url: n,
      data: (r || {}).data
    }));
  };
});
E.forEach(["post", "put", "patch"], function(t) {
  function n(r) {
    return function(i, o, l) {
      return this.request(ln(l || {}, {
        method: t,
        headers: r ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: i,
        data: o
      }));
    };
  }
  At.prototype[t] = n(), At.prototype[t + "Form"] = n(!0);
});
class ri {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let n;
    this.promise = new Promise(function(i) {
      n = i;
    });
    const r = this;
    this.promise.then((a) => {
      if (!r._listeners)
        return;
      let i = r._listeners.length;
      for (; i-- > 0; )
        r._listeners[i](a);
      r._listeners = null;
    }), this.promise.then = (a) => {
      let i;
      const o = new Promise((l) => {
        r.subscribe(l), i = l;
      }).then(a);
      return o.cancel = function() {
        r.unsubscribe(i);
      }, o;
    }, t(function(i, o, l) {
      r.reason || (r.reason = new pn(i, o, l), n(r.reason));
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
    const n = this._listeners.indexOf(t);
    n !== -1 && this._listeners.splice(n, 1);
  }
  static source() {
    let t;
    return {
      token: new ri(function(a) {
        t = a;
      }),
      cancel: t
    };
  }
}
function tf(e) {
  return function(n) {
    return e.apply(null, n);
  };
}
function nf(e) {
  return E.isObject(e) && e.isAxiosError === !0;
}
function Ru(e) {
  const t = new At(e), n = du(At.prototype.request, t);
  return E.extend(n, At.prototype, t, { allOwnKeys: !0 }), E.extend(n, t, null, { allOwnKeys: !0 }), n.create = function(a) {
    return Ru(ln(e, a));
  }, n;
}
const Ue = Ru(zt);
Ue.Axios = At;
Ue.CanceledError = pn;
Ue.CancelToken = ri;
Ue.isCancel = Tu;
Ue.VERSION = Du;
Ue.toFormData = Qr;
Ue.AxiosError = _e;
Ue.Cancel = Ue.CanceledError;
Ue.all = function(t) {
  return Promise.all(t);
};
Ue.spread = tf;
Ue.isAxiosError = nf;
Ue.formToJSON = (e) => ku(E.isHTMLForm(e) ? new FormData(e) : e);
const rf = ye({
  name: "CustomMultipleFileUpload",
  components: {
    CustomButton: fu,
    CustomLoader: Ko
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
    const t = F(null), n = () => {
      t.value.click();
    }, r = ({ target: u }) => {
      if (u && u.files.length > 0) {
        let d = new FormData();
        for (let s = 0; s < u.files.length; s++) {
          const h = u.files[s];
          d.append("files", h);
        }
        o(d), t.value.value = "";
      }
    }, a = F([]), i = F(!1), o = (u) => {
      console.log(u), i.value = !0, Ue.post(e.routePostFiles, u).then((d) => {
        d.data.success ? alert("success") : alert("error"), i.value = !1;
      }).catch((d) => {
        console.log(d), i.value = !1;
      });
    }, l = (u) => {
      a.value.length > 0 && a.value.splice(u, 1);
    }, f = () => {
      Ue.get(e.routeGetFiles).then((u) => {
        console.log("okk", u);
      }).catch((u) => {
        console.log(u);
      });
    };
    return tt(() => {
      f();
    }), {
      handleClick: n,
      handleInputChange: r,
      inputFileRef: t,
      fileList: a,
      deleteFile: l,
      getFiles: f,
      loading: i
    };
  }
}), af = { class: "generic-input" }, of = {
  key: 0,
  class: "generic-input__label text-sm secondary-color"
}, lf = { class: "file-list" }, uf = ["onClick"], sf = /* @__PURE__ */ O("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  "stroke-width": "2.5",
  stroke: "#FFFFFF",
  class: "cancel"
}, [
  /* @__PURE__ */ O("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    d: "M6 18L18 6M6 6l12 12"
  })
], -1), cf = [
  sf
], ff = { class: "flexAligned" }, df = { style: { "margin-right": "10px" } }, pf = {
  style: { "margin-right": "8px" },
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  "stroke-width": "1.5",
  stroke: "#FFFFFF",
  width: "16px",
  height: "16px"
}, hf = /* @__PURE__ */ O("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
}, null, -1), mf = [
  hf
];
function yf(e, t, n, r, a, i) {
  const o = Qe("custom-button"), l = Qe("custom-loader");
  return p(), b("div", af, [
    e.label ? (p(), b("label", of, Z(e.label), 1)) : S("", !0),
    O("ul", lf, [
      (p(!0), b(se, null, ke(e.fileList, (f, u) => (p(), b("li", {
        class: "file-list-item",
        key: u
      }, [
        De(Z(f.original_name + "." + f.extension) + " ", 1),
        O("div", {
          onClick: (d) => e.deleteFile(u),
          class: "item-cancel"
        }, cf, 8, uf)
      ]))), 128))
    ]),
    O("input", {
      type: "file",
      class: "generic-input__input-file--hidden",
      ref: "inputFileRef",
      onChange: t[0] || (t[0] = (...f) => e.handleInputChange && e.handleInputChange(...f)),
      multiple: ""
    }, null, 544),
    O("div", ff, [
      O("div", df, [
        z(o, {
          label: "Carica",
          styleType: "primary",
          disabled: !1,
          onOnClick: e.handleClick
        }, {
          "slot-left": ae(() => [
            (p(), b("svg", pf, mf))
          ]),
          _: 1
        }, 8, ["onOnClick"])
      ]),
      z(l, {
        loading: e.loading,
        size: "small"
      }, null, 8, ["loading"])
    ])
  ]);
}
const q1 = /* @__PURE__ */ Ce(rf, [["render", yf]]);
function ia(e) {
  return e === 0 ? !1 : Array.isArray(e) && e.length === 0 ? !0 : !e;
}
function vf(e) {
  return (...t) => !e(...t);
}
function gf(e, t) {
  return e === void 0 && (e = "undefined"), e === null && (e = "null"), e === !1 && (e = "false"), e.toString().toLowerCase().indexOf(t.trim()) !== -1;
}
function Cu(e, t, n, r) {
  return t ? e.filter((a) => gf(r(a, n), t)).sort((a, i) => r(a, n).length - r(i, n).length) : e;
}
function bf(e) {
  return e.filter((t) => !t.$isLabel);
}
function la(e, t) {
  return (n) => n.reduce((r, a) => a[e] && a[e].length ? (r.push({
    $groupLabel: a[t],
    $isLabel: !0
  }), r.concat(a[e])) : r, []);
}
function _f(e, t, n, r, a) {
  return (i) => i.map((o) => {
    if (!o[n])
      return console.warn("Options passed to vue-multiselect do not contain groups, despite the config."), [];
    const l = Cu(o[n], e, t, a);
    return l.length ? {
      [r]: o[r],
      [n]: l
    } : [];
  });
}
const Mi = (...e) => (t) => e.reduce((n, r) => r(n), t);
var wf = {
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
        return ia(e) ? "" : t ? e[t] : e;
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
      let n = this.options.concat();
      return this.internalSearch ? n = this.groupValues ? this.filterAndFlat(n, t, this.label) : Cu(n, t, this.label, this.customLabel) : n = this.groupValues ? la(this.groupValues, this.groupLabel)(n) : n, n = this.hideSelected ? n.filter(vf(this.isSelected)) : n, this.taggable && t.length && !this.isExistingOption(t) && (this.tagPosition === "bottom" ? n.push({ isTag: !0, label: e }) : n.unshift({ isTag: !0, label: e })), n.slice(0, this.optionsLimit);
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
    filterAndFlat(e, t, n) {
      return Mi(
        _f(t, n, this.groupValues, this.groupLabel, this.customLabel),
        la(this.groupValues, this.groupLabel)
      )(e);
    },
    flatAndStrip(e) {
      return Mi(
        la(this.groupValues, this.groupLabel),
        bf
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
      if (ia(e))
        return "";
      if (e.isTag)
        return e.label;
      if (e.$isLabel)
        return e.$groupLabel;
      const t = this.customLabel(e, this.label);
      return ia(t) ? "" : t;
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
      const t = this.options.find((n) => n[this.groupLabel] === e.$groupLabel);
      if (!!t) {
        if (this.wholeGroupSelected(t)) {
          this.$emit("remove", t[this.groupValues], this.id);
          const n = this.internalValue.filter(
            (r) => t[this.groupValues].indexOf(r) === -1
          );
          this.$emit("update:modelValue", n);
        } else {
          const n = t[this.groupValues].filter(
            (r) => !(this.isOptionDisabled(r) || this.isSelected(r))
          );
          this.$emit("select", n, this.id), this.$emit(
            "update:modelValue",
            this.internalValue.concat(n)
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
      const n = typeof e == "object" ? this.valueKeys.indexOf(e[this.trackBy]) : this.valueKeys.indexOf(e);
      if (this.$emit("remove", e, this.id), this.multiple) {
        const r = this.internalValue.slice(0, n).concat(this.internalValue.slice(n + 1));
        this.$emit("update:modelValue", r);
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
}, Of = {
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
      const n = this.options.find((r) => r[this.groupLabel] === t.$groupLabel);
      return n && !this.wholeGroupDisabled(n) ? [
        "multiselect__option--group",
        { "multiselect__option--highlight": e === this.pointer && this.showPointer },
        { "multiselect__option--group-selected": this.wholeGroupSelected(n) }
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
}, ai = {
  name: "vue-multiselect",
  mixins: [wf, Of],
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
const $f = {
  ref: "tags",
  class: "multiselect__tags"
}, kf = { class: "multiselect__tags-wrap" }, Sf = { class: "multiselect__spinner" }, Pf = { key: 0 }, Tf = { class: "multiselect__option" }, Df = { class: "multiselect__option" }, Rf = /* @__PURE__ */ De("No elements found. Consider changing the search query."), Cf = { class: "multiselect__option" }, xf = /* @__PURE__ */ De("List is empty.");
function Mf(e, t, n, r, a, i) {
  return p(), te("div", {
    tabindex: e.searchable ? -1 : n.tabindex,
    class: [{ "multiselect--active": e.isOpen, "multiselect--disabled": n.disabled, "multiselect--above": i.isAbove }, "multiselect"],
    onFocus: t[14] || (t[14] = (o) => e.activate()),
    onBlur: t[15] || (t[15] = (o) => e.searchable ? !1 : e.deactivate()),
    onKeydown: [
      t[16] || (t[16] = fe(ge((o) => e.pointerForward(), ["self", "prevent"]), ["down"])),
      t[17] || (t[17] = fe(ge((o) => e.pointerBackward(), ["self", "prevent"]), ["up"]))
    ],
    onKeypress: t[18] || (t[18] = fe(ge((o) => e.addPointerElement(o), ["stop", "self"]), ["enter", "tab"])),
    onKeyup: t[19] || (t[19] = fe((o) => e.deactivate(), ["esc"])),
    role: "combobox",
    "aria-owns": "listbox-" + e.id
  }, [
    U(e.$slots, "caret", { toggle: e.toggle }, () => [
      z("div", {
        onMousedown: t[1] || (t[1] = ge((o) => e.toggle(), ["prevent", "stop"])),
        class: "multiselect__select"
      }, null, 32)
    ]),
    U(e.$slots, "clear", { search: e.search }),
    z("div", $f, [
      U(e.$slots, "selection", {
        search: e.search,
        remove: e.removeElement,
        values: i.visibleValues,
        isOpen: e.isOpen
      }, () => [
        ze(z("div", kf, [
          (p(!0), te(se, null, ke(i.visibleValues, (o, l) => U(e.$slots, "tag", {
            option: o,
            search: e.search,
            remove: e.removeElement
          }, () => [
            (p(), te("span", {
              class: "multiselect__tag",
              key: l
            }, [
              z("span", {
                textContent: Z(e.getOptionLabel(o))
              }, null, 8, ["textContent"]),
              z("i", {
                tabindex: "1",
                onKeypress: fe(ge((f) => e.removeElement(o), ["prevent"]), ["enter"]),
                onMousedown: ge((f) => e.removeElement(o), ["prevent"]),
                class: "multiselect__tag-icon"
              }, null, 40, ["onKeypress", "onMousedown"])
            ]))
          ])), 256))
        ], 512), [
          [ut, i.visibleValues.length > 0]
        ]),
        e.internalValue && e.internalValue.length > n.limit ? U(e.$slots, "limit", { key: 0 }, () => [
          z("strong", {
            class: "multiselect__strong",
            textContent: Z(n.limitText(e.internalValue.length - n.limit))
          }, null, 8, ["textContent"])
        ]) : S("v-if", !0)
      ]),
      z(je, { name: "multiselect__loading" }, {
        default: ae(() => [
          U(e.$slots, "loading", {}, () => [
            ze(z("div", Sf, null, 512), [
              [ut, n.loading]
            ])
          ])
        ]),
        _: 3
      }),
      e.searchable ? (p(), te("input", {
        key: 0,
        ref: "search",
        name: n.name,
        id: e.id,
        type: "text",
        autocomplete: "off",
        spellcheck: "false",
        placeholder: e.placeholder,
        style: i.inputStyle,
        value: e.search,
        disabled: n.disabled,
        tabindex: n.tabindex,
        onInput: t[2] || (t[2] = (o) => e.updateSearch(o.target.value)),
        onFocus: t[3] || (t[3] = ge((o) => e.activate(), ["prevent"])),
        onBlur: t[4] || (t[4] = ge((o) => e.deactivate(), ["prevent"])),
        onKeyup: t[5] || (t[5] = fe((o) => e.deactivate(), ["esc"])),
        onKeydown: [
          t[6] || (t[6] = fe(ge((o) => e.pointerForward(), ["prevent"]), ["down"])),
          t[7] || (t[7] = fe(ge((o) => e.pointerBackward(), ["prevent"]), ["up"])),
          t[9] || (t[9] = fe(ge((o) => e.removeLastElement(), ["stop"]), ["delete"]))
        ],
        onKeypress: t[8] || (t[8] = fe(ge((o) => e.addPointerElement(o), ["prevent", "stop", "self"]), ["enter"])),
        class: "multiselect__input",
        "aria-controls": "listbox-" + e.id
      }, null, 44, ["name", "id", "placeholder", "value", "disabled", "tabindex", "aria-controls"])) : S("v-if", !0),
      i.isSingleLabelVisible ? (p(), te("span", {
        key: 1,
        class: "multiselect__single",
        onMousedown: t[10] || (t[10] = ge((...o) => e.toggle && e.toggle(...o), ["prevent"]))
      }, [
        U(e.$slots, "singleLabel", { option: i.singleValue }, () => [
          De(Z(e.currentOptionLabel), 1)
        ])
      ], 32)) : S("v-if", !0),
      i.isPlaceholderVisible ? (p(), te("span", {
        key: 2,
        class: "multiselect__placeholder",
        onMousedown: t[11] || (t[11] = ge((...o) => e.toggle && e.toggle(...o), ["prevent"]))
      }, [
        U(e.$slots, "placeholder", {}, () => [
          De(Z(e.placeholder), 1)
        ])
      ], 32)) : S("v-if", !0)
    ], 512),
    z(je, { name: "multiselect" }, {
      default: ae(() => [
        ze(z("div", {
          class: "multiselect__content-wrapper",
          onFocus: t[12] || (t[12] = (...o) => e.activate && e.activate(...o)),
          tabindex: "-1",
          onMousedown: t[13] || (t[13] = ge(() => {
          }, ["prevent"])),
          style: { maxHeight: e.optimizedHeight + "px" },
          ref: "list"
        }, [
          z("ul", {
            class: "multiselect__content",
            style: i.contentStyle,
            role: "listbox",
            id: "listbox-" + e.id
          }, [
            U(e.$slots, "beforeList"),
            e.multiple && e.max === e.internalValue.length ? (p(), te("li", Pf, [
              z("span", Tf, [
                U(e.$slots, "maxElements", {}, () => [
                  De("Maximum of " + Z(e.max) + " options selected. First remove a selected option to select another.", 1)
                ])
              ])
            ])) : S("v-if", !0),
            !e.max || e.internalValue.length < e.max ? (p(!0), te(se, { key: 1 }, ke(e.filteredOptions, (o, l) => (p(), te("li", {
              class: "multiselect__element",
              key: l,
              id: e.id + "-" + l,
              role: o && (o.$isLabel || o.$isDisabled) ? null : "option"
            }, [
              o && (o.$isLabel || o.$isDisabled) ? S("v-if", !0) : (p(), te("span", {
                key: 0,
                class: [e.optionHighlight(l, o), "multiselect__option"],
                onClick: ge((f) => e.select(o), ["stop"]),
                onMouseenter: ge((f) => e.pointerSet(l), ["self"]),
                "data-select": o && o.isTag ? e.tagPlaceholder : i.selectLabelText,
                "data-selected": i.selectedLabelText,
                "data-deselect": i.deselectLabelText
              }, [
                U(e.$slots, "option", {
                  option: o,
                  search: e.search,
                  index: l
                }, () => [
                  z("span", null, Z(e.getOptionLabel(o)), 1)
                ])
              ], 42, ["onClick", "onMouseenter", "data-select", "data-selected", "data-deselect"])),
              o && (o.$isLabel || o.$isDisabled) ? (p(), te("span", {
                key: 1,
                "data-select": e.groupSelect && i.selectGroupLabelText,
                "data-deselect": e.groupSelect && i.deselectGroupLabelText,
                class: [e.groupHighlight(l, o), "multiselect__option"],
                onMouseenter: ge((f) => e.groupSelect && e.pointerSet(l), ["self"]),
                onMousedown: ge((f) => e.selectGroup(o), ["prevent"])
              }, [
                U(e.$slots, "option", {
                  option: o,
                  search: e.search,
                  index: l
                }, () => [
                  z("span", null, Z(e.getOptionLabel(o)), 1)
                ])
              ], 42, ["data-select", "data-deselect", "onMouseenter", "onMousedown"])) : S("v-if", !0)
            ], 8, ["id", "role"]))), 128)) : S("v-if", !0),
            ze(z("li", null, [
              z("span", Df, [
                U(e.$slots, "noResult", { search: e.search }, () => [
                  Rf
                ])
              ])
            ], 512), [
              [ut, n.showNoResults && e.filteredOptions.length === 0 && e.search && !n.loading]
            ]),
            ze(z("li", null, [
              z("span", Cf, [
                U(e.$slots, "noOptions", {}, () => [
                  xf
                ])
              ])
            ], 512), [
              [ut, n.showNoOptions && e.options.length === 0 && !e.search && !n.loading]
            ]),
            U(e.$slots, "afterList")
          ], 12, ["id"])
        ], 36), [
          [ut, e.isOpen]
        ])
      ]),
      _: 3
    })
  ], 42, ["tabindex", "aria-owns"]);
}
ai.render = Mf;
const Nf = ye({
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
    VueMultiselect: ai
  },
  data() {
    return {
      value: [],
      visibleOptions: []
    };
  },
  methods: {
    removeOption(e) {
      const t = this.value.findIndex((r) => r.label === e.label && r.value === e.value), n = this.value;
      n.splice(t, 1), this.value = n, this.updateModel();
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
      const n = this.options.find((r) => r.value == t);
      n ? e.push(n) : console.log("Option multiselect not found");
    }), this.value = e;
  }
});
const Ef = { class: "custom-multiselect" }, Af = {
  key: 0,
  for: "exampleFormControlSelect1",
  class: "custom-multiselect__label text-sm"
}, If = { class: "multiselect__tags-wrap" }, Bf = { class: "multiselect__tag" }, Vf = ["onClick"];
function Lf(e, t, n, r, a, i) {
  const o = Qe("vue-multiselect");
  return p(), b("div", Ef, [
    e.label ? (p(), b("label", Af, Z(e.label), 1)) : S("", !0),
    z(o, {
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
      noResult: ae(() => [
        De(" Nessun risultato. ")
      ]),
      tag: ae((l) => [
        O("div", If, [
          O("span", Bf, [
            O("span", null, Z(l.option.label), 1),
            O("i", {
              onClick: (f) => e.removeOption(l.option),
              tabindex: "1",
              class: "multiselect__tag-icon"
            }, null, 8, Vf)
          ])
        ])
      ]),
      option: ae((l) => [
        De(Z(l.option.label), 1)
      ]),
      _: 1
    }, 8, ["modelValue", "options", "placeholder", "onSearchChange"])
  ]);
}
const z1 = /* @__PURE__ */ Ce(Nf, [["render", Lf]]);
var Ff = "Expected a function", Ni = 0 / 0, Uf = "[object Symbol]", Yf = /^\s+|\s+$/g, jf = /^[-+]0x[0-9a-f]+$/i, Hf = /^0b[01]+$/i, Wf = /^0o[0-7]+$/i, qf = parseInt, zf = typeof vn == "object" && vn && vn.Object === Object && vn, Gf = typeof self == "object" && self && self.Object === Object && self, Qf = zf || Gf || Function("return this")(), Jf = Object.prototype, Zf = Jf.toString, Kf = Math.max, Xf = Math.min, ua = function() {
  return Qf.Date.now();
};
function ed(e, t, n) {
  var r, a, i, o, l, f, u = 0, d = !1, s = !1, h = !0;
  if (typeof e != "function")
    throw new TypeError(Ff);
  t = Ei(t) || 0, Da(n) && (d = !!n.leading, s = "maxWait" in n, i = s ? Kf(Ei(n.maxWait) || 0, t) : i, h = "trailing" in n ? !!n.trailing : h);
  function v(m) {
    var N = r, Y = a;
    return r = a = void 0, u = m, o = e.apply(Y, N), o;
  }
  function g(m) {
    return u = m, l = setTimeout(B, t), d ? v(m) : o;
  }
  function P(m) {
    var N = m - f, Y = m - u, Q = t - N;
    return s ? Xf(Q, i - Y) : Q;
  }
  function D(m) {
    var N = m - f, Y = m - u;
    return f === void 0 || N >= t || N < 0 || s && Y >= i;
  }
  function B() {
    var m = ua();
    if (D(m))
      return C(m);
    l = setTimeout(B, P(m));
  }
  function C(m) {
    return l = void 0, h && r ? v(m) : (r = a = void 0, o);
  }
  function H() {
    l !== void 0 && clearTimeout(l), u = 0, r = f = a = l = void 0;
  }
  function K() {
    return l === void 0 ? o : C(ua());
  }
  function X() {
    var m = ua(), N = D(m);
    if (r = arguments, a = this, f = m, N) {
      if (l === void 0)
        return g(f);
      if (s)
        return l = setTimeout(B, t), v(f);
    }
    return l === void 0 && (l = setTimeout(B, t)), o;
  }
  return X.cancel = H, X.flush = K, X;
}
function Da(e) {
  var t = typeof e;
  return !!e && (t == "object" || t == "function");
}
function td(e) {
  return !!e && typeof e == "object";
}
function nd(e) {
  return typeof e == "symbol" || td(e) && Zf.call(e) == Uf;
}
function Ei(e) {
  if (typeof e == "number")
    return e;
  if (nd(e))
    return Ni;
  if (Da(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = Da(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = e.replace(Yf, "");
  var n = Hf.test(e);
  return n || Wf.test(e) ? qf(e.slice(2), n ? 2 : 8) : jf.test(e) ? Ni : +e;
}
var rd = ed;
const ad = ye({
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
    VueMultiselect: ai
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
      const t = this.value.findIndex((r) => r.label === e.label && r.value === e.value), n = this.value;
      n.splice(t, 1), this.value = n, this.updateModel();
    },
    updateModel() {
      this.$emit("update:selectedOptions", this.value);
    },
    find(e) {
      e && (this.loading = !0, Ue.get(this.optionsSearchRoute, {
        params: {
          q: e
        }
      }).then((t) => {
        if (t.status === 200) {
          this.loading = !1;
          let n = [...this.value];
          this.visibleOptions = n.concat(t.data);
        }
      }).catch((t) => {
        console.log(t), this.loading = !1;
      }));
    },
    debouncedSearch: rd(function(e) {
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
}), od = { class: "custom-multiselect" }, id = {
  key: 0,
  class: "custom-multiselect__label text-sm"
}, ld = { class: "multiselect__tags-wrap" }, ud = { class: "multiselect__tag" }, sd = ["onClick"];
function cd(e, t, n, r, a, i) {
  const o = Qe("vue-multiselect");
  return p(), b("div", od, [
    e.label ? (p(), b("label", id, Z(e.label), 1)) : S("", !0),
    z(o, {
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
      noResult: ae(() => [
        De(" Nessun risultato. ")
      ]),
      tag: ae((l) => [
        O("div", ld, [
          O("span", ud, [
            O("span", null, Z(l.option.label), 1),
            O("i", {
              onClick: (f) => e.removeOption(l.option),
              tabindex: "1",
              class: "multiselect__tag-icon"
            }, null, 8, sd)
          ])
        ])
      ]),
      option: ae((l) => [
        De(Z(l.option.label), 1)
      ]),
      _: 1
    }, 8, ["modelValue", "options", "placeholder", "onSearchChange", "loading"])
  ]);
}
const G1 = /* @__PURE__ */ Ce(ad, [["render", cd]]), fd = ye({
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
    return { handleSelectChange: ({ target: r }) => {
      t.emit("update:value", r.value);
    } };
  }
}), dd = { class: "custom-select" }, pd = {
  key: 0,
  for: "exampleFormControlSelect1",
  class: "custom-select__label text-sm"
}, hd = ["name", "id", "disabled"], md = {
  selected: "",
  value: "0"
}, yd = ["value", "selected"];
function vd(e, t, n, r, a, i) {
  return p(), b("div", dd, [
    e.label ? (p(), b("label", pd, Z(e.label), 1)) : S("", !0),
    O("select", {
      name: e.name,
      class: "custom-select__select",
      id: "select_" + e.name,
      onChange: t[0] || (t[0] = (...o) => e.handleSelectChange && e.handleSelectChange(...o)),
      disabled: e.disabled
    }, [
      O("option", md, Z(e.placeholder), 1),
      (p(!0), b(se, null, ke(e.options, (o, l) => (p(), b("option", {
        key: l,
        value: o.value,
        selected: o.value == e.value
      }, Z(o.label), 9, yd))), 128))
    ], 40, hd)
  ]);
}
const gd = /* @__PURE__ */ Ce(fd, [["render", vd]]), bd = ye({
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
    return { checkRadio: ({ target: r }) => {
      t.emit("update:value", r.value);
    } };
  }
}), _d = { class: "custom-radio-group" }, wd = ["name", "id", "value", "disabled", "checked"], Od = ["onClick"], $d = ["for"];
function kd(e, t, n, r, a, i) {
  return p(), b("div", _d, [
    (p(!0), b(se, null, ke(e.options, (o) => (p(), b("div", {
      key: o.id,
      class: we([{ disabled: o.disabled, checked: o.value == e.value }, "custom-radio-group__single-radio"])
    }, [
      O("input", {
        type: "radio",
        name: o.name,
        id: o.id,
        value: o.value,
        disabled: o.disabled,
        class: "custom-radio-group__single-radio__radio-hidden",
        checked: o.value == e.value,
        onChange: t[0] || (t[0] = (...l) => e.checkRadio && e.checkRadio(...l))
      }, null, 40, wd),
      O("span", {
        class: "custom-radio-group__single-radio__radio",
        onClick: (l) => e.checkRadio({
          target: {
            value: o.value
          }
        })
      }, null, 8, Od),
      O("label", {
        class: "custom-radio-group__single-radio__radio-label",
        for: o.id
      }, Z(o.label), 9, $d)
    ], 2))), 128))
  ]);
}
const Q1 = /* @__PURE__ */ Ce(bd, [["render", kd]]), Sd = ye({
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
    return { computedValue: J({
      get() {
        return e.modelValue;
      },
      set(r) {
        t("update", r);
      }
    }) };
  }
}), Pd = { class: "generic-input" }, Td = {
  key: 0,
  class: "generic-input__label text-sm secondary-color"
};
function Dd(e, t, n, r, a, i) {
  return p(), b("div", Pd, [
    e.label ? (p(), b("label", Td, Z(e.label), 1)) : S("", !0),
    ze(O("textarea", Ye(e.$attrs, {
      "onUpdate:modelValue": t[0] || (t[0] = (o) => e.computedValue = o),
      class: "generic-input__input " + e.classes
    }), null, 16), [
      [Qo, e.computedValue]
    ])
  ]);
}
const J1 = /* @__PURE__ */ Ce(Sd, [["render", Dd]]), Rd = ye({
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
    return { computedValue: J({
      get() {
        return e.modelValue;
      },
      set(r) {
        t("update", r);
      }
    }) };
  }
}), Cd = { class: "generic-input" }, xd = {
  key: 0,
  class: "generic-input__label text-sm secondary-color"
}, Md = { class: "input-container" }, Nd = {
  key: 1,
  class: "generic-input__read-only"
};
function Ed(e, t, n, r, a, i) {
  return p(), b("div", Cd, [
    e.label ? (p(), b("label", xd, Z(e.label), 1)) : S("", !0),
    O("div", Md, [
      U(e.$slots, "prepend"),
      e.readOnly ? S("", !0) : ze((p(), b("input", Ye({ key: 0 }, e.$attrs, {
        "onUpdate:modelValue": t[0] || (t[0] = (o) => e.computedValue = o),
        class: "generic-input__input " + e.classes
      }), null, 16)), [
        [cs, e.computedValue]
      ])
    ]),
    e.readOnly ? (p(), b("div", Nd, Z(e.computedValue), 1)) : S("", !0)
  ]);
}
const xu = /* @__PURE__ */ Ce(Rd, [["render", Ed]]), Ad = ye({
  name: "Breadcrumbs",
  props: {
    path_breadcrumbs: {
      type: Array,
      required: !0,
      default: []
    }
  }
}), Id = { class: "text-secondary text-xl" }, Bd = {
  key: 0,
  class: "font-bold"
}, Vd = { key: 1 };
function Ld(e, t, n, r, a, i) {
  const o = Qe("router-link");
  return p(), b("div", Id, [
    (p(!0), b(se, null, ke(e.path_breadcrumbs, (l, f) => (p(), b(se, { key: f }, [
      f === e.path_breadcrumbs.length - 1 ? (p(), b("span", Bd, Z(l.label), 1)) : (p(), b(se, { key: 1 }, [
        l.path ? (p(), te(o, {
          key: 0,
          to: l.path,
          class: "cursor-pointer hover:underline"
        }, {
          default: ae(() => [
            De(Z(l.label), 1)
          ]),
          _: 2
        }, 1032, ["to"])) : (p(), b("span", Vd, Z(l.label), 1)),
        De(" / ")
      ], 64))
    ], 64))), 128))
  ]);
}
const Fd = /* @__PURE__ */ Ce(Ad, [["render", Ld]]), Ud = ye({
  name: "FormSeparator"
}), Yd = {
  style: { width: "calc(100% + 2 * 24px)", transform: "translateX(-24px)" },
  class: "border-secondaryLight mb-8 mt-9"
};
function jd(e, t, n, r, a, i) {
  return p(), b("hr", Yd);
}
const Z1 = /* @__PURE__ */ Ce(Ud, [["render", jd]]), Hd = "_name", Wd = ye({
  name: "FilterbleModal",
  components: {
    CustomButton: fu,
    GenericInput: xu,
    CustomSelect: gd,
    Transition: je
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
      required: !0,
      default: ""
    }
  },
  setup(e, t) {
    const n = () => {
      t.emit("closeModal");
    }, r = () => {
      const P = {
        filter: {}
      };
      for (let D in i.value) {
        const B = e.filterables.columns.findIndex((C) => C.column === D);
        i.value[D] && (P.filter[B] = i.value[D]);
      }
      n(), t.emit("filter", P);
    }, a = (P) => {
      let D;
      switch (P) {
        case "text":
          D = "";
          break;
        case "select":
          D = 0;
          break;
        case "checkbox":
          D = !1;
          break;
        case "multiselect":
          D = 0;
          break;
      }
      return D;
    }, i = F({}), o = F({}), l = F({}), f = F({}), u = () => {
      e.filterables && e.filterables.columns.forEach((P, D) => {
        d(P), s(P, D);
      });
    }, d = (P) => {
      i.value[P.column] = a(P.type);
    }, s = (P, D) => {
      P.route && (l.value[P.column] = !0, Ue.get(e.baseApiPath + P.route).then((B) => {
        o.value[P.column] = B.data.data.options, e.filterables.relations.forEach((C) => {
          const H = Object.values(C.columns);
          if (H.includes(D) && C.order === null) {
            let K = H.filter((X) => X !== D);
            f.value[P.column] = {
              update: K,
              index: D,
              route: C.route
            };
          }
        }), l.value[P.column] = !1;
      }).catch((B) => {
        console.log(B);
      }));
    }, h = F(!1);
    return Wt(() => e.isOpen, (P, D) => {
      P === !0 && D === !1 && h.value === !1 && (h.value = !0, u());
    }), {
      emitCloseModal: n,
      emitFilter: r,
      state: i,
      loadingState: l,
      optionsState: o,
      cleanResults: () => {
        e.filterables.columns.forEach((P, D) => {
          i.value[P.column] = a(P.type), P.route && s(P, D);
        });
      },
      handleChangeRelationsSelect: (P, D, B) => {
        if (f.value[D]) {
          const C = [], H = [];
          if (f.value[D].update.forEach((X) => {
            C.push(e.filterables.columns[X].column), H.push(X);
          }), parseInt(P.target.value) === 0) {
            s(e.filterables.columns[B], B), C.forEach((X, m) => {
              d(e.filterables.columns[H[m]]), s(e.filterables.columns[H[m]], H[m]);
            });
            return;
          }
          const K = e.filterables.columns[f.value[D].index].column;
          Ue.get(e.baseApiPath + f.value[D].route).then(({ data: X }) => {
            const m = parseInt(i.value[D]), N = X.data.filter((Y) => Y.properties[K] === m);
            C.forEach((Y) => {
              N.length === 1 && (i.value[Y] = N[0].properties[Y]);
              const Q = Y.split("_")[0] + Hd;
              o.value[Y] = N.map((re) => ({
                value: re.properties[Y],
                label: re.properties[Q]
              }));
            });
          }).catch((X) => {
            console.log(X);
          });
        }
      }
    };
  }
});
const Mu = (e) => (un("data-v-b2ab9d5c"), e = e(), sn(), e), qd = { class: "custom-modal" }, zd = { class: "modal-background" }, Gd = { class: "modal-container" }, Qd = { class: "modal-header" }, Jd = /* @__PURE__ */ Mu(() => /* @__PURE__ */ O("div", { class: "modal-title" }, " Cerca ", -1)), Zd = /* @__PURE__ */ Mu(() => /* @__PURE__ */ O("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  "stroke-width": "1.5",
  width: "24px",
  height: "24px"
}, [
  /* @__PURE__ */ O("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    d: "M6 18L18 6M6 6l12 12"
  })
], -1)), Kd = [
  Zd
], Xd = { class: "modal-body" }, ep = {
  key: 0,
  class: "grid grid-cols-12 gap-6"
}, tp = { class: "modal-footer" }, np = { style: { "margin-right": "15px" } }, rp = { style: { "margin-right": "15px" } };
function ap(e, t, n, r, a, i) {
  const o = Qe("generic-input"), l = Qe("custom-select"), f = Qe("custom-button");
  return p(), te(je, null, {
    default: ae(() => [
      ze(O("div", qd, [
        O("div", zd, [
          O("div", Gd, [
            O("div", Qd, [
              Jd,
              O("div", {
                class: "modal-close",
                onClick: t[0] || (t[0] = (...u) => e.emitCloseModal && e.emitCloseModal(...u))
              }, Kd)
            ]),
            O("div", Xd, [
              e.filterables ? (p(), b("div", ep, [
                (p(!0), b(se, null, ke(e.filterables.columns, (u, d) => (p(), b("div", {
                  class: "col-span-6",
                  key: d
                }, [
                  u.type === "text" ? (p(), te(o, {
                    key: 0,
                    type: "text",
                    placeholder: u.placeholder,
                    label: u.label,
                    modelValue: e.state[u.column],
                    "onUpdate:modelValue": (s) => e.state[u.column] = s,
                    disabled: e.loadingState[u.column]
                  }, null, 8, ["placeholder", "label", "modelValue", "onUpdate:modelValue", "disabled"])) : S("", !0),
                  u.type === "select" ? (p(), te(l, {
                    key: 1,
                    options: e.optionsState[u.column] || [],
                    label: u.label,
                    name: u.column,
                    placeholder: u.placeholder,
                    disabled: e.loadingState[u.column],
                    value: e.state[u.column],
                    "onUpdate:value": (s) => e.state[u.column] = s,
                    onChange: (s) => e.handleChangeRelationsSelect(s, u.column, d)
                  }, null, 8, ["options", "label", "name", "placeholder", "disabled", "value", "onUpdate:value", "onChange"])) : S("", !0)
                ]))), 128))
              ])) : S("", !0)
            ]),
            O("div", tp, [
              O("div", np, [
                z(f, {
                  label: "Chiudi",
                  styleType: "secondary-outline",
                  onOnClick: e.emitCloseModal
                }, null, 8, ["onOnClick"])
              ]),
              O("div", rp, [
                z(f, {
                  label: "Pulisci",
                  styleType: "secondary",
                  onOnClick: e.cleanResults
                }, null, 8, ["onOnClick"])
              ]),
              z(f, {
                label: "Cerca",
                styleType: "primary",
                onOnClick: e.emitFilter
              }, null, 8, ["onOnClick"])
            ])
          ])
        ])
      ], 512), [
        [ut, e.isOpen]
      ])
    ]),
    _: 1
  });
}
const K1 = /* @__PURE__ */ Ce(Wd, [["render", ap], ["__scopeId", "data-v-b2ab9d5c"]]), op = ye({
  name: "ScrollToTop",
  components: {
    Transition: je
  },
  setup() {
    const e = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }, t = F(!1), n = () => {
      window.scrollY >= 500 ? t.value = !0 : t.value = !1;
    };
    return tt(() => {
      document.addEventListener("scroll", n);
    }), {
      trigger: e,
      buttonVisible: t
    };
  }
});
const ip = (e) => (un("data-v-3d9c8e20"), e = e(), sn(), e), lp = /* @__PURE__ */ ip(() => /* @__PURE__ */ O("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  "stroke-width": "2",
  stroke: "#FFFFFF",
  class: "w-6 h-6"
}, [
  /* @__PURE__ */ O("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    d: "M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18"
  })
], -1)), up = [
  lp
];
function sp(e, t, n, r, a, i) {
  return p(), te(je, null, {
    default: ae(() => [
      ze(O("div", {
        onClick: t[0] || (t[0] = (...o) => e.trigger && e.trigger(...o)),
        ref: "scrollToTop",
        class: "fixed z-50 bottom-10 right-5 w-12 h-12 bg-secondary hover:bg-secondaryHover transition rounded-full flex items-center justify-center cursor-pointer shadow"
      }, up, 512), [
        [ut, e.buttonVisible]
      ])
    ]),
    _: 1
  });
}
const X1 = /* @__PURE__ */ Ce(op, [["render", sp], ["__scopeId", "data-v-3d9c8e20"]]), cp = ye({
  name: "CustomSearchInput",
  components: {
    GenericInput: xu
  },
  props: {
    placeholder: {
      type: String,
      default: "Cerca..."
    }
  },
  setup(e, t) {
    const n = F("");
    return {
      searchQuery: n,
      emitSearch: () => {
        t.emit("onSearch", n.value);
      }
    };
  }
}), fp = { class: "custom-search-input flex items-center cursor-pointer" }, dp = { class: "search-box shadow" }, pp = ["placeholder"], hp = /* @__PURE__ */ O("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  "stroke-width": "2",
  stroke: "#FFFFFF",
  class: "w-5 h-5"
}, [
  /* @__PURE__ */ O("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    d: "M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
  })
], -1), mp = [
  hp
];
function yp(e, t, n, r, a, i) {
  return p(), b("div", fp, [
    O("div", dp, [
      ze(O("input", {
        onKeyup: t[0] || (t[0] = fe((...o) => e.emitSearch && e.emitSearch(...o), ["enter"])),
        class: "search-input text-textGrey font-medium",
        type: "text",
        "onUpdate:modelValue": t[1] || (t[1] = (o) => e.searchQuery = o),
        placeholder: e.placeholder
      }, null, 40, pp), [
        [Qo, e.searchQuery]
      ]),
      O("div", {
        onClick: t[2] || (t[2] = (...o) => e.emitSearch && e.emitSearch(...o)),
        class: "search-btn bg-textGrey hover:bg-customBlack transition h-9 w-9 rounded-full flex items-center justify-center"
      }, mp)
    ])
  ]);
}
const eO = /* @__PURE__ */ Ce(cp, [["render", yp]]), vp = ye({
  name: "CustomTooltip",
  components: {
    Transition: je
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
    const t = F(!1);
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
function gp(e, t, n, r, a, i) {
  return p(), b("div", {
    onMouseover: t[0] || (t[0] = (...o) => e.onMouseOver && e.onMouseOver(...o)),
    onMouseleave: t[1] || (t[1] = (...o) => e.onMouseLeave && e.onMouseLeave(...o)),
    class: "inline-flex flex-col relative cursor-pointer"
  }, [
    U(e.$slots, "target", {}, void 0, !0),
    z(je, null, {
      default: ae(() => [
        ze(O("div", {
          style: Nt(`background-color: ${e.backroundColor}; --background-color: ${e.backroundColor}; --max-width: ${e.maxWidth}px`),
          class: we(["absolute w-max z-50 p-3 shadow cursor-auto rounded-lg text-white text-sm", e.getClassPosition()])
        }, [
          U(e.$slots, "content", {}, void 0, !0)
        ], 6), [
          [ut, e.hovered]
        ])
      ]),
      _: 3
    })
  ], 32);
}
const tO = /* @__PURE__ */ Ce(vp, [["render", gp], ["__scopeId", "data-v-d1fd60ab"]]);
function ce(e) {
  if (e === null || e === !0 || e === !1)
    return NaN;
  var t = Number(e);
  return isNaN(t) ? t : t < 0 ? Math.ceil(t) : Math.floor(t);
}
function oe(e, t) {
  if (t.length < e)
    throw new TypeError(e + " argument" + (e > 1 ? "s" : "") + " required, but only " + t.length + " present");
}
function $n(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? $n = function(n) {
    return typeof n;
  } : $n = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, $n(e);
}
function de(e) {
  oe(1, arguments);
  var t = Object.prototype.toString.call(e);
  return e instanceof Date || $n(e) === "object" && t === "[object Date]" ? new Date(e.getTime()) : typeof e == "number" || t === "[object Number]" ? new Date(e) : ((typeof e == "string" || t === "[object String]") && typeof console < "u" && (console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"), console.warn(new Error().stack)), new Date(NaN));
}
function kt(e, t) {
  oe(2, arguments);
  var n = de(e), r = ce(t);
  return isNaN(r) ? new Date(NaN) : (r && n.setDate(n.getDate() + r), n);
}
function ht(e, t) {
  oe(2, arguments);
  var n = de(e), r = ce(t);
  if (isNaN(r))
    return new Date(NaN);
  if (!r)
    return n;
  var a = n.getDate(), i = new Date(n.getTime());
  i.setMonth(n.getMonth() + r + 1, 0);
  var o = i.getDate();
  return a >= o ? i : (n.setFullYear(i.getFullYear(), i.getMonth(), a), n);
}
function kn(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? kn = function(n) {
    return typeof n;
  } : kn = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, kn(e);
}
function Nu(e, t) {
  if (oe(2, arguments), !t || kn(t) !== "object")
    return new Date(NaN);
  var n = t.years ? ce(t.years) : 0, r = t.months ? ce(t.months) : 0, a = t.weeks ? ce(t.weeks) : 0, i = t.days ? ce(t.days) : 0, o = t.hours ? ce(t.hours) : 0, l = t.minutes ? ce(t.minutes) : 0, f = t.seconds ? ce(t.seconds) : 0, u = de(e), d = r || n ? ht(u, r + n * 12) : u, s = i || a ? kt(d, i + a * 7) : d, h = l + o * 60, v = f + h * 60, g = v * 1e3, P = new Date(s.getTime() + g);
  return P;
}
function bp(e, t) {
  oe(2, arguments);
  var n = de(e).getTime(), r = ce(t);
  return new Date(n + r);
}
var _p = {};
function St() {
  return _p;
}
function Ra(e, t) {
  var n, r, a, i, o, l, f, u;
  oe(1, arguments);
  var d = St(), s = ce((n = (r = (a = (i = t == null ? void 0 : t.weekStartsOn) !== null && i !== void 0 ? i : t == null || (o = t.locale) === null || o === void 0 || (l = o.options) === null || l === void 0 ? void 0 : l.weekStartsOn) !== null && a !== void 0 ? a : d.weekStartsOn) !== null && r !== void 0 ? r : (f = d.locale) === null || f === void 0 || (u = f.options) === null || u === void 0 ? void 0 : u.weekStartsOn) !== null && n !== void 0 ? n : 0);
  if (!(s >= 0 && s <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var h = de(e), v = h.getDay(), g = (v < s ? 7 : 0) + v - s;
  return h.setDate(h.getDate() - g), h.setHours(0, 0, 0, 0), h;
}
function cr(e) {
  return oe(1, arguments), Ra(e, {
    weekStartsOn: 1
  });
}
function wp(e) {
  oe(1, arguments);
  var t = de(e), n = t.getFullYear(), r = new Date(0);
  r.setFullYear(n + 1, 0, 4), r.setHours(0, 0, 0, 0);
  var a = cr(r), i = new Date(0);
  i.setFullYear(n, 0, 4), i.setHours(0, 0, 0, 0);
  var o = cr(i);
  return t.getTime() >= a.getTime() ? n + 1 : t.getTime() >= o.getTime() ? n : n - 1;
}
function Op(e) {
  oe(1, arguments);
  var t = wp(e), n = new Date(0);
  n.setFullYear(t, 0, 4), n.setHours(0, 0, 0, 0);
  var r = cr(n);
  return r;
}
function fr(e) {
  var t = new Date(Date.UTC(e.getFullYear(), e.getMonth(), e.getDate(), e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds()));
  return t.setUTCFullYear(e.getFullYear()), e.getTime() - t.getTime();
}
function Ai(e) {
  oe(1, arguments);
  var t = de(e);
  return t.setHours(0, 0, 0, 0), t;
}
var $p = 864e5;
function kp(e, t) {
  oe(2, arguments);
  var n = Ai(e), r = Ai(t), a = n.getTime() - fr(n), i = r.getTime() - fr(r);
  return Math.round((a - i) / $p);
}
function Eu(e, t) {
  oe(2, arguments);
  var n = ce(t);
  return ht(e, n * 12);
}
var oi = 6e4, ii = 36e5, Sp = 1e3;
function Sn(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Sn = function(n) {
    return typeof n;
  } : Sn = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, Sn(e);
}
function Au(e) {
  return oe(1, arguments), e instanceof Date || Sn(e) === "object" && Object.prototype.toString.call(e) === "[object Date]";
}
function nn(e) {
  if (oe(1, arguments), !Au(e) && typeof e != "number")
    return !1;
  var t = de(e);
  return !isNaN(Number(t));
}
function Ii(e, t) {
  var n;
  oe(1, arguments);
  var r = e || {}, a = de(r.start), i = de(r.end), o = i.getTime();
  if (!(a.getTime() <= o))
    throw new RangeError("Invalid interval");
  var l = [], f = a;
  f.setHours(0, 0, 0, 0);
  var u = Number((n = t == null ? void 0 : t.step) !== null && n !== void 0 ? n : 1);
  if (u < 1 || isNaN(u))
    throw new RangeError("`options.step` must be a number greater than 1");
  for (; f.getTime() <= o; )
    l.push(de(f)), f.setDate(f.getDate() + u), f.setHours(0, 0, 0, 0);
  return l;
}
function Pp(e, t) {
  var n, r, a, i, o, l, f, u;
  oe(1, arguments);
  var d = St(), s = ce((n = (r = (a = (i = t == null ? void 0 : t.weekStartsOn) !== null && i !== void 0 ? i : t == null || (o = t.locale) === null || o === void 0 || (l = o.options) === null || l === void 0 ? void 0 : l.weekStartsOn) !== null && a !== void 0 ? a : d.weekStartsOn) !== null && r !== void 0 ? r : (f = d.locale) === null || f === void 0 || (u = f.options) === null || u === void 0 ? void 0 : u.weekStartsOn) !== null && n !== void 0 ? n : 0);
  if (!(s >= 0 && s <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var h = de(e), v = h.getDay(), g = (v < s ? -7 : 0) + 6 - (v - s);
  return h.setDate(h.getDate() + g), h.setHours(23, 59, 59, 999), h;
}
function Iu(e, t) {
  oe(2, arguments);
  var n = ce(t);
  return bp(e, -n);
}
var Tp = 864e5;
function Dp(e) {
  oe(1, arguments);
  var t = de(e), n = t.getTime();
  t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
  var r = t.getTime(), a = n - r;
  return Math.floor(a / Tp) + 1;
}
function jt(e) {
  oe(1, arguments);
  var t = 1, n = de(e), r = n.getUTCDay(), a = (r < t ? 7 : 0) + r - t;
  return n.setUTCDate(n.getUTCDate() - a), n.setUTCHours(0, 0, 0, 0), n;
}
function Bu(e) {
  oe(1, arguments);
  var t = de(e), n = t.getUTCFullYear(), r = new Date(0);
  r.setUTCFullYear(n + 1, 0, 4), r.setUTCHours(0, 0, 0, 0);
  var a = jt(r), i = new Date(0);
  i.setUTCFullYear(n, 0, 4), i.setUTCHours(0, 0, 0, 0);
  var o = jt(i);
  return t.getTime() >= a.getTime() ? n + 1 : t.getTime() >= o.getTime() ? n : n - 1;
}
function Rp(e) {
  oe(1, arguments);
  var t = Bu(e), n = new Date(0);
  n.setUTCFullYear(t, 0, 4), n.setUTCHours(0, 0, 0, 0);
  var r = jt(n);
  return r;
}
var Cp = 6048e5;
function Vu(e) {
  oe(1, arguments);
  var t = de(e), n = jt(t).getTime() - Rp(t).getTime();
  return Math.round(n / Cp) + 1;
}
function Bt(e, t) {
  var n, r, a, i, o, l, f, u;
  oe(1, arguments);
  var d = St(), s = ce((n = (r = (a = (i = t == null ? void 0 : t.weekStartsOn) !== null && i !== void 0 ? i : t == null || (o = t.locale) === null || o === void 0 || (l = o.options) === null || l === void 0 ? void 0 : l.weekStartsOn) !== null && a !== void 0 ? a : d.weekStartsOn) !== null && r !== void 0 ? r : (f = d.locale) === null || f === void 0 || (u = f.options) === null || u === void 0 ? void 0 : u.weekStartsOn) !== null && n !== void 0 ? n : 0);
  if (!(s >= 0 && s <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var h = de(e), v = h.getUTCDay(), g = (v < s ? 7 : 0) + v - s;
  return h.setUTCDate(h.getUTCDate() - g), h.setUTCHours(0, 0, 0, 0), h;
}
function li(e, t) {
  var n, r, a, i, o, l, f, u;
  oe(1, arguments);
  var d = de(e), s = d.getUTCFullYear(), h = St(), v = ce((n = (r = (a = (i = t == null ? void 0 : t.firstWeekContainsDate) !== null && i !== void 0 ? i : t == null || (o = t.locale) === null || o === void 0 || (l = o.options) === null || l === void 0 ? void 0 : l.firstWeekContainsDate) !== null && a !== void 0 ? a : h.firstWeekContainsDate) !== null && r !== void 0 ? r : (f = h.locale) === null || f === void 0 || (u = f.options) === null || u === void 0 ? void 0 : u.firstWeekContainsDate) !== null && n !== void 0 ? n : 1);
  if (!(v >= 1 && v <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var g = new Date(0);
  g.setUTCFullYear(s + 1, 0, v), g.setUTCHours(0, 0, 0, 0);
  var P = Bt(g, t), D = new Date(0);
  D.setUTCFullYear(s, 0, v), D.setUTCHours(0, 0, 0, 0);
  var B = Bt(D, t);
  return d.getTime() >= P.getTime() ? s + 1 : d.getTime() >= B.getTime() ? s : s - 1;
}
function xp(e, t) {
  var n, r, a, i, o, l, f, u;
  oe(1, arguments);
  var d = St(), s = ce((n = (r = (a = (i = t == null ? void 0 : t.firstWeekContainsDate) !== null && i !== void 0 ? i : t == null || (o = t.locale) === null || o === void 0 || (l = o.options) === null || l === void 0 ? void 0 : l.firstWeekContainsDate) !== null && a !== void 0 ? a : d.firstWeekContainsDate) !== null && r !== void 0 ? r : (f = d.locale) === null || f === void 0 || (u = f.options) === null || u === void 0 ? void 0 : u.firstWeekContainsDate) !== null && n !== void 0 ? n : 1), h = li(e, t), v = new Date(0);
  v.setUTCFullYear(h, 0, s), v.setUTCHours(0, 0, 0, 0);
  var g = Bt(v, t);
  return g;
}
var Mp = 6048e5;
function Lu(e, t) {
  oe(1, arguments);
  var n = de(e), r = Bt(n, t).getTime() - xp(n, t).getTime();
  return Math.round(r / Mp) + 1;
}
function Te(e, t) {
  for (var n = e < 0 ? "-" : "", r = Math.abs(e).toString(); r.length < t; )
    r = "0" + r;
  return n + r;
}
var Np = {
  y: function(t, n) {
    var r = t.getUTCFullYear(), a = r > 0 ? r : 1 - r;
    return Te(n === "yy" ? a % 100 : a, n.length);
  },
  M: function(t, n) {
    var r = t.getUTCMonth();
    return n === "M" ? String(r + 1) : Te(r + 1, 2);
  },
  d: function(t, n) {
    return Te(t.getUTCDate(), n.length);
  },
  a: function(t, n) {
    var r = t.getUTCHours() / 12 >= 1 ? "pm" : "am";
    switch (n) {
      case "a":
      case "aa":
        return r.toUpperCase();
      case "aaa":
        return r;
      case "aaaaa":
        return r[0];
      case "aaaa":
      default:
        return r === "am" ? "a.m." : "p.m.";
    }
  },
  h: function(t, n) {
    return Te(t.getUTCHours() % 12 || 12, n.length);
  },
  H: function(t, n) {
    return Te(t.getUTCHours(), n.length);
  },
  m: function(t, n) {
    return Te(t.getUTCMinutes(), n.length);
  },
  s: function(t, n) {
    return Te(t.getUTCSeconds(), n.length);
  },
  S: function(t, n) {
    var r = n.length, a = t.getUTCMilliseconds(), i = Math.floor(a * Math.pow(10, r - 3));
    return Te(i, n.length);
  }
};
const $t = Np;
var Ft = {
  am: "am",
  pm: "pm",
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, Ep = {
  G: function(t, n, r) {
    var a = t.getUTCFullYear() > 0 ? 1 : 0;
    switch (n) {
      case "G":
      case "GG":
      case "GGG":
        return r.era(a, {
          width: "abbreviated"
        });
      case "GGGGG":
        return r.era(a, {
          width: "narrow"
        });
      case "GGGG":
      default:
        return r.era(a, {
          width: "wide"
        });
    }
  },
  y: function(t, n, r) {
    if (n === "yo") {
      var a = t.getUTCFullYear(), i = a > 0 ? a : 1 - a;
      return r.ordinalNumber(i, {
        unit: "year"
      });
    }
    return $t.y(t, n);
  },
  Y: function(t, n, r, a) {
    var i = li(t, a), o = i > 0 ? i : 1 - i;
    if (n === "YY") {
      var l = o % 100;
      return Te(l, 2);
    }
    return n === "Yo" ? r.ordinalNumber(o, {
      unit: "year"
    }) : Te(o, n.length);
  },
  R: function(t, n) {
    var r = Bu(t);
    return Te(r, n.length);
  },
  u: function(t, n) {
    var r = t.getUTCFullYear();
    return Te(r, n.length);
  },
  Q: function(t, n, r) {
    var a = Math.ceil((t.getUTCMonth() + 1) / 3);
    switch (n) {
      case "Q":
        return String(a);
      case "QQ":
        return Te(a, 2);
      case "Qo":
        return r.ordinalNumber(a, {
          unit: "quarter"
        });
      case "QQQ":
        return r.quarter(a, {
          width: "abbreviated",
          context: "formatting"
        });
      case "QQQQQ":
        return r.quarter(a, {
          width: "narrow",
          context: "formatting"
        });
      case "QQQQ":
      default:
        return r.quarter(a, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  q: function(t, n, r) {
    var a = Math.ceil((t.getUTCMonth() + 1) / 3);
    switch (n) {
      case "q":
        return String(a);
      case "qq":
        return Te(a, 2);
      case "qo":
        return r.ordinalNumber(a, {
          unit: "quarter"
        });
      case "qqq":
        return r.quarter(a, {
          width: "abbreviated",
          context: "standalone"
        });
      case "qqqqq":
        return r.quarter(a, {
          width: "narrow",
          context: "standalone"
        });
      case "qqqq":
      default:
        return r.quarter(a, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  M: function(t, n, r) {
    var a = t.getUTCMonth();
    switch (n) {
      case "M":
      case "MM":
        return $t.M(t, n);
      case "Mo":
        return r.ordinalNumber(a + 1, {
          unit: "month"
        });
      case "MMM":
        return r.month(a, {
          width: "abbreviated",
          context: "formatting"
        });
      case "MMMMM":
        return r.month(a, {
          width: "narrow",
          context: "formatting"
        });
      case "MMMM":
      default:
        return r.month(a, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  L: function(t, n, r) {
    var a = t.getUTCMonth();
    switch (n) {
      case "L":
        return String(a + 1);
      case "LL":
        return Te(a + 1, 2);
      case "Lo":
        return r.ordinalNumber(a + 1, {
          unit: "month"
        });
      case "LLL":
        return r.month(a, {
          width: "abbreviated",
          context: "standalone"
        });
      case "LLLLL":
        return r.month(a, {
          width: "narrow",
          context: "standalone"
        });
      case "LLLL":
      default:
        return r.month(a, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  w: function(t, n, r, a) {
    var i = Lu(t, a);
    return n === "wo" ? r.ordinalNumber(i, {
      unit: "week"
    }) : Te(i, n.length);
  },
  I: function(t, n, r) {
    var a = Vu(t);
    return n === "Io" ? r.ordinalNumber(a, {
      unit: "week"
    }) : Te(a, n.length);
  },
  d: function(t, n, r) {
    return n === "do" ? r.ordinalNumber(t.getUTCDate(), {
      unit: "date"
    }) : $t.d(t, n);
  },
  D: function(t, n, r) {
    var a = Dp(t);
    return n === "Do" ? r.ordinalNumber(a, {
      unit: "dayOfYear"
    }) : Te(a, n.length);
  },
  E: function(t, n, r) {
    var a = t.getUTCDay();
    switch (n) {
      case "E":
      case "EE":
      case "EEE":
        return r.day(a, {
          width: "abbreviated",
          context: "formatting"
        });
      case "EEEEE":
        return r.day(a, {
          width: "narrow",
          context: "formatting"
        });
      case "EEEEEE":
        return r.day(a, {
          width: "short",
          context: "formatting"
        });
      case "EEEE":
      default:
        return r.day(a, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  e: function(t, n, r, a) {
    var i = t.getUTCDay(), o = (i - a.weekStartsOn + 8) % 7 || 7;
    switch (n) {
      case "e":
        return String(o);
      case "ee":
        return Te(o, 2);
      case "eo":
        return r.ordinalNumber(o, {
          unit: "day"
        });
      case "eee":
        return r.day(i, {
          width: "abbreviated",
          context: "formatting"
        });
      case "eeeee":
        return r.day(i, {
          width: "narrow",
          context: "formatting"
        });
      case "eeeeee":
        return r.day(i, {
          width: "short",
          context: "formatting"
        });
      case "eeee":
      default:
        return r.day(i, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  c: function(t, n, r, a) {
    var i = t.getUTCDay(), o = (i - a.weekStartsOn + 8) % 7 || 7;
    switch (n) {
      case "c":
        return String(o);
      case "cc":
        return Te(o, n.length);
      case "co":
        return r.ordinalNumber(o, {
          unit: "day"
        });
      case "ccc":
        return r.day(i, {
          width: "abbreviated",
          context: "standalone"
        });
      case "ccccc":
        return r.day(i, {
          width: "narrow",
          context: "standalone"
        });
      case "cccccc":
        return r.day(i, {
          width: "short",
          context: "standalone"
        });
      case "cccc":
      default:
        return r.day(i, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  i: function(t, n, r) {
    var a = t.getUTCDay(), i = a === 0 ? 7 : a;
    switch (n) {
      case "i":
        return String(i);
      case "ii":
        return Te(i, n.length);
      case "io":
        return r.ordinalNumber(i, {
          unit: "day"
        });
      case "iii":
        return r.day(a, {
          width: "abbreviated",
          context: "formatting"
        });
      case "iiiii":
        return r.day(a, {
          width: "narrow",
          context: "formatting"
        });
      case "iiiiii":
        return r.day(a, {
          width: "short",
          context: "formatting"
        });
      case "iiii":
      default:
        return r.day(a, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  a: function(t, n, r) {
    var a = t.getUTCHours(), i = a / 12 >= 1 ? "pm" : "am";
    switch (n) {
      case "a":
      case "aa":
        return r.dayPeriod(i, {
          width: "abbreviated",
          context: "formatting"
        });
      case "aaa":
        return r.dayPeriod(i, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "aaaaa":
        return r.dayPeriod(i, {
          width: "narrow",
          context: "formatting"
        });
      case "aaaa":
      default:
        return r.dayPeriod(i, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  b: function(t, n, r) {
    var a = t.getUTCHours(), i;
    switch (a === 12 ? i = Ft.noon : a === 0 ? i = Ft.midnight : i = a / 12 >= 1 ? "pm" : "am", n) {
      case "b":
      case "bb":
        return r.dayPeriod(i, {
          width: "abbreviated",
          context: "formatting"
        });
      case "bbb":
        return r.dayPeriod(i, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "bbbbb":
        return r.dayPeriod(i, {
          width: "narrow",
          context: "formatting"
        });
      case "bbbb":
      default:
        return r.dayPeriod(i, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  B: function(t, n, r) {
    var a = t.getUTCHours(), i;
    switch (a >= 17 ? i = Ft.evening : a >= 12 ? i = Ft.afternoon : a >= 4 ? i = Ft.morning : i = Ft.night, n) {
      case "B":
      case "BB":
      case "BBB":
        return r.dayPeriod(i, {
          width: "abbreviated",
          context: "formatting"
        });
      case "BBBBB":
        return r.dayPeriod(i, {
          width: "narrow",
          context: "formatting"
        });
      case "BBBB":
      default:
        return r.dayPeriod(i, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  h: function(t, n, r) {
    if (n === "ho") {
      var a = t.getUTCHours() % 12;
      return a === 0 && (a = 12), r.ordinalNumber(a, {
        unit: "hour"
      });
    }
    return $t.h(t, n);
  },
  H: function(t, n, r) {
    return n === "Ho" ? r.ordinalNumber(t.getUTCHours(), {
      unit: "hour"
    }) : $t.H(t, n);
  },
  K: function(t, n, r) {
    var a = t.getUTCHours() % 12;
    return n === "Ko" ? r.ordinalNumber(a, {
      unit: "hour"
    }) : Te(a, n.length);
  },
  k: function(t, n, r) {
    var a = t.getUTCHours();
    return a === 0 && (a = 24), n === "ko" ? r.ordinalNumber(a, {
      unit: "hour"
    }) : Te(a, n.length);
  },
  m: function(t, n, r) {
    return n === "mo" ? r.ordinalNumber(t.getUTCMinutes(), {
      unit: "minute"
    }) : $t.m(t, n);
  },
  s: function(t, n, r) {
    return n === "so" ? r.ordinalNumber(t.getUTCSeconds(), {
      unit: "second"
    }) : $t.s(t, n);
  },
  S: function(t, n) {
    return $t.S(t, n);
  },
  X: function(t, n, r, a) {
    var i = a._originalDate || t, o = i.getTimezoneOffset();
    if (o === 0)
      return "Z";
    switch (n) {
      case "X":
        return Vi(o);
      case "XXXX":
      case "XX":
        return xt(o);
      case "XXXXX":
      case "XXX":
      default:
        return xt(o, ":");
    }
  },
  x: function(t, n, r, a) {
    var i = a._originalDate || t, o = i.getTimezoneOffset();
    switch (n) {
      case "x":
        return Vi(o);
      case "xxxx":
      case "xx":
        return xt(o);
      case "xxxxx":
      case "xxx":
      default:
        return xt(o, ":");
    }
  },
  O: function(t, n, r, a) {
    var i = a._originalDate || t, o = i.getTimezoneOffset();
    switch (n) {
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + Bi(o, ":");
      case "OOOO":
      default:
        return "GMT" + xt(o, ":");
    }
  },
  z: function(t, n, r, a) {
    var i = a._originalDate || t, o = i.getTimezoneOffset();
    switch (n) {
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + Bi(o, ":");
      case "zzzz":
      default:
        return "GMT" + xt(o, ":");
    }
  },
  t: function(t, n, r, a) {
    var i = a._originalDate || t, o = Math.floor(i.getTime() / 1e3);
    return Te(o, n.length);
  },
  T: function(t, n, r, a) {
    var i = a._originalDate || t, o = i.getTime();
    return Te(o, n.length);
  }
};
function Bi(e, t) {
  var n = e > 0 ? "-" : "+", r = Math.abs(e), a = Math.floor(r / 60), i = r % 60;
  if (i === 0)
    return n + String(a);
  var o = t || "";
  return n + String(a) + o + Te(i, 2);
}
function Vi(e, t) {
  if (e % 60 === 0) {
    var n = e > 0 ? "-" : "+";
    return n + Te(Math.abs(e) / 60, 2);
  }
  return xt(e, t);
}
function xt(e, t) {
  var n = t || "", r = e > 0 ? "-" : "+", a = Math.abs(e), i = Te(Math.floor(a / 60), 2), o = Te(a % 60, 2);
  return r + i + n + o;
}
const Ap = Ep;
var Li = function(t, n) {
  switch (t) {
    case "P":
      return n.date({
        width: "short"
      });
    case "PP":
      return n.date({
        width: "medium"
      });
    case "PPP":
      return n.date({
        width: "long"
      });
    case "PPPP":
    default:
      return n.date({
        width: "full"
      });
  }
}, Fu = function(t, n) {
  switch (t) {
    case "p":
      return n.time({
        width: "short"
      });
    case "pp":
      return n.time({
        width: "medium"
      });
    case "ppp":
      return n.time({
        width: "long"
      });
    case "pppp":
    default:
      return n.time({
        width: "full"
      });
  }
}, Ip = function(t, n) {
  var r = t.match(/(P+)(p+)?/) || [], a = r[1], i = r[2];
  if (!i)
    return Li(t, n);
  var o;
  switch (a) {
    case "P":
      o = n.dateTime({
        width: "short"
      });
      break;
    case "PP":
      o = n.dateTime({
        width: "medium"
      });
      break;
    case "PPP":
      o = n.dateTime({
        width: "long"
      });
      break;
    case "PPPP":
    default:
      o = n.dateTime({
        width: "full"
      });
      break;
  }
  return o.replace("{{date}}", Li(a, n)).replace("{{time}}", Fu(i, n));
}, Bp = {
  p: Fu,
  P: Ip
};
const Ca = Bp;
var Vp = ["D", "DD"], Lp = ["YY", "YYYY"];
function Uu(e) {
  return Vp.indexOf(e) !== -1;
}
function Yu(e) {
  return Lp.indexOf(e) !== -1;
}
function dr(e, t, n) {
  if (e === "YYYY")
    throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(t, "`) for formatting years to the input `").concat(n, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  if (e === "YY")
    throw new RangeError("Use `yy` instead of `YY` (in `".concat(t, "`) for formatting years to the input `").concat(n, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  if (e === "D")
    throw new RangeError("Use `d` instead of `D` (in `".concat(t, "`) for formatting days of the month to the input `").concat(n, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  if (e === "DD")
    throw new RangeError("Use `dd` instead of `DD` (in `".concat(t, "`) for formatting days of the month to the input `").concat(n, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
}
var Fp = {
  lessThanXSeconds: {
    one: "less than a second",
    other: "less than {{count}} seconds"
  },
  xSeconds: {
    one: "1 second",
    other: "{{count}} seconds"
  },
  halfAMinute: "half a minute",
  lessThanXMinutes: {
    one: "less than a minute",
    other: "less than {{count}} minutes"
  },
  xMinutes: {
    one: "1 minute",
    other: "{{count}} minutes"
  },
  aboutXHours: {
    one: "about 1 hour",
    other: "about {{count}} hours"
  },
  xHours: {
    one: "1 hour",
    other: "{{count}} hours"
  },
  xDays: {
    one: "1 day",
    other: "{{count}} days"
  },
  aboutXWeeks: {
    one: "about 1 week",
    other: "about {{count}} weeks"
  },
  xWeeks: {
    one: "1 week",
    other: "{{count}} weeks"
  },
  aboutXMonths: {
    one: "about 1 month",
    other: "about {{count}} months"
  },
  xMonths: {
    one: "1 month",
    other: "{{count}} months"
  },
  aboutXYears: {
    one: "about 1 year",
    other: "about {{count}} years"
  },
  xYears: {
    one: "1 year",
    other: "{{count}} years"
  },
  overXYears: {
    one: "over 1 year",
    other: "over {{count}} years"
  },
  almostXYears: {
    one: "almost 1 year",
    other: "almost {{count}} years"
  }
}, Up = function(t, n, r) {
  var a, i = Fp[t];
  return typeof i == "string" ? a = i : n === 1 ? a = i.one : a = i.other.replace("{{count}}", n.toString()), r != null && r.addSuffix ? r.comparison && r.comparison > 0 ? "in " + a : a + " ago" : a;
};
const Yp = Up;
function sa(e) {
  return function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = t.width ? String(t.width) : e.defaultWidth, r = e.formats[n] || e.formats[e.defaultWidth];
    return r;
  };
}
var jp = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, Hp = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, Wp = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, qp = {
  date: sa({
    formats: jp,
    defaultWidth: "full"
  }),
  time: sa({
    formats: Hp,
    defaultWidth: "full"
  }),
  dateTime: sa({
    formats: Wp,
    defaultWidth: "full"
  })
};
const zp = qp;
var Gp = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, Qp = function(t, n, r, a) {
  return Gp[t];
};
const Jp = Qp;
function Zt(e) {
  return function(t, n) {
    var r = n != null && n.context ? String(n.context) : "standalone", a;
    if (r === "formatting" && e.formattingValues) {
      var i = e.defaultFormattingWidth || e.defaultWidth, o = n != null && n.width ? String(n.width) : i;
      a = e.formattingValues[o] || e.formattingValues[i];
    } else {
      var l = e.defaultWidth, f = n != null && n.width ? String(n.width) : e.defaultWidth;
      a = e.values[f] || e.values[l];
    }
    var u = e.argumentCallback ? e.argumentCallback(t) : t;
    return a[u];
  };
}
var Zp = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, Kp = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, Xp = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  wide: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
}, eh = {
  narrow: ["S", "M", "T", "W", "T", "F", "S"],
  short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  wide: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
}, th = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  }
}, nh = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  }
}, rh = function(t, n) {
  var r = Number(t), a = r % 100;
  if (a > 20 || a < 10)
    switch (a % 10) {
      case 1:
        return r + "st";
      case 2:
        return r + "nd";
      case 3:
        return r + "rd";
    }
  return r + "th";
}, ah = {
  ordinalNumber: rh,
  era: Zt({
    values: Zp,
    defaultWidth: "wide"
  }),
  quarter: Zt({
    values: Kp,
    defaultWidth: "wide",
    argumentCallback: function(t) {
      return t - 1;
    }
  }),
  month: Zt({
    values: Xp,
    defaultWidth: "wide"
  }),
  day: Zt({
    values: eh,
    defaultWidth: "wide"
  }),
  dayPeriod: Zt({
    values: th,
    defaultWidth: "wide",
    formattingValues: nh,
    defaultFormattingWidth: "wide"
  })
};
const oh = ah;
function Kt(e) {
  return function(t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = n.width, a = r && e.matchPatterns[r] || e.matchPatterns[e.defaultMatchWidth], i = t.match(a);
    if (!i)
      return null;
    var o = i[0], l = r && e.parsePatterns[r] || e.parsePatterns[e.defaultParseWidth], f = Array.isArray(l) ? lh(l, function(s) {
      return s.test(o);
    }) : ih(l, function(s) {
      return s.test(o);
    }), u;
    u = e.valueCallback ? e.valueCallback(f) : f, u = n.valueCallback ? n.valueCallback(u) : u;
    var d = t.slice(o.length);
    return {
      value: u,
      rest: d
    };
  };
}
function ih(e, t) {
  for (var n in e)
    if (e.hasOwnProperty(n) && t(e[n]))
      return n;
}
function lh(e, t) {
  for (var n = 0; n < e.length; n++)
    if (t(e[n]))
      return n;
}
function uh(e) {
  return function(t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = t.match(e.matchPattern);
    if (!r)
      return null;
    var a = r[0], i = t.match(e.parsePattern);
    if (!i)
      return null;
    var o = e.valueCallback ? e.valueCallback(i[0]) : i[0];
    o = n.valueCallback ? n.valueCallback(o) : o;
    var l = t.slice(a.length);
    return {
      value: o,
      rest: l
    };
  };
}
var sh = /^(\d+)(th|st|nd|rd)?/i, ch = /\d+/i, fh = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, dh = {
  any: [/^b/i, /^(a|c)/i]
}, ph = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, hh = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, mh = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, yh = {
  narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
  any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
}, vh = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, gh = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, bh = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, _h = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i
  }
}, wh = {
  ordinalNumber: uh({
    matchPattern: sh,
    parsePattern: ch,
    valueCallback: function(t) {
      return parseInt(t, 10);
    }
  }),
  era: Kt({
    matchPatterns: fh,
    defaultMatchWidth: "wide",
    parsePatterns: dh,
    defaultParseWidth: "any"
  }),
  quarter: Kt({
    matchPatterns: ph,
    defaultMatchWidth: "wide",
    parsePatterns: hh,
    defaultParseWidth: "any",
    valueCallback: function(t) {
      return t + 1;
    }
  }),
  month: Kt({
    matchPatterns: mh,
    defaultMatchWidth: "wide",
    parsePatterns: yh,
    defaultParseWidth: "any"
  }),
  day: Kt({
    matchPatterns: vh,
    defaultMatchWidth: "wide",
    parsePatterns: gh,
    defaultParseWidth: "any"
  }),
  dayPeriod: Kt({
    matchPatterns: bh,
    defaultMatchWidth: "any",
    parsePatterns: _h,
    defaultParseWidth: "any"
  })
};
const Oh = wh;
var $h = {
  code: "en-US",
  formatDistance: Yp,
  formatLong: zp,
  formatRelative: Jp,
  localize: oh,
  match: Oh,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
const ju = $h;
var kh = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, Sh = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, Ph = /^'([^]*?)'?$/, Th = /''/g, Dh = /[a-zA-Z]/;
function rn(e, t, n) {
  var r, a, i, o, l, f, u, d, s, h, v, g, P, D, B, C, H, K;
  oe(2, arguments);
  var X = String(t), m = St(), N = (r = (a = n == null ? void 0 : n.locale) !== null && a !== void 0 ? a : m.locale) !== null && r !== void 0 ? r : ju, Y = ce((i = (o = (l = (f = n == null ? void 0 : n.firstWeekContainsDate) !== null && f !== void 0 ? f : n == null || (u = n.locale) === null || u === void 0 || (d = u.options) === null || d === void 0 ? void 0 : d.firstWeekContainsDate) !== null && l !== void 0 ? l : m.firstWeekContainsDate) !== null && o !== void 0 ? o : (s = m.locale) === null || s === void 0 || (h = s.options) === null || h === void 0 ? void 0 : h.firstWeekContainsDate) !== null && i !== void 0 ? i : 1);
  if (!(Y >= 1 && Y <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var Q = ce((v = (g = (P = (D = n == null ? void 0 : n.weekStartsOn) !== null && D !== void 0 ? D : n == null || (B = n.locale) === null || B === void 0 || (C = B.options) === null || C === void 0 ? void 0 : C.weekStartsOn) !== null && P !== void 0 ? P : m.weekStartsOn) !== null && g !== void 0 ? g : (H = m.locale) === null || H === void 0 || (K = H.options) === null || K === void 0 ? void 0 : K.weekStartsOn) !== null && v !== void 0 ? v : 0);
  if (!(Q >= 0 && Q <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  if (!N.localize)
    throw new RangeError("locale must contain localize property");
  if (!N.formatLong)
    throw new RangeError("locale must contain formatLong property");
  var re = de(e);
  if (!nn(re))
    throw new RangeError("Invalid time value");
  var W = fr(re), ee = Iu(re, W), R = {
    firstWeekContainsDate: Y,
    weekStartsOn: Q,
    locale: N,
    _originalDate: re
  }, w = X.match(Sh).map(function(A) {
    var I = A[0];
    if (I === "p" || I === "P") {
      var c = Ca[I];
      return c(A, N.formatLong);
    }
    return A;
  }).join("").match(kh).map(function(A) {
    if (A === "''")
      return "'";
    var I = A[0];
    if (I === "'")
      return Rh(A);
    var c = Ap[I];
    if (c)
      return !(n != null && n.useAdditionalWeekYearTokens) && Yu(A) && dr(A, t, String(e)), !(n != null && n.useAdditionalDayOfYearTokens) && Uu(A) && dr(A, t, String(e)), c(ee, A, N.localize, R);
    if (I.match(Dh))
      throw new RangeError("Format string contains an unescaped latin alphabet character `" + I + "`");
    return A;
  }).join("");
  return w;
}
function Rh(e) {
  var t = e.match(Ph);
  return t ? t[1].replace(Th, "'") : e;
}
function Ch(e, t) {
  if (e == null)
    throw new TypeError("assign requires that input parameter not be null or undefined");
  for (var n in t)
    Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
  return e;
}
function xh(e) {
  oe(1, arguments);
  var t = de(e), n = t.getDay();
  return n;
}
function Mh(e) {
  oe(1, arguments);
  var t = de(e), n = t.getFullYear(), r = t.getMonth(), a = new Date(0);
  return a.setFullYear(n, r + 1, 0), a.setHours(0, 0, 0, 0), a.getDate();
}
function vt(e) {
  oe(1, arguments);
  var t = de(e), n = t.getHours();
  return n;
}
var Nh = 6048e5;
function Eh(e) {
  oe(1, arguments);
  var t = de(e), n = cr(t).getTime() - Op(t).getTime();
  return Math.round(n / Nh) + 1;
}
function gt(e) {
  oe(1, arguments);
  var t = de(e), n = t.getMinutes();
  return n;
}
function Ne(e) {
  oe(1, arguments);
  var t = de(e), n = t.getMonth();
  return n;
}
function Ht(e) {
  oe(1, arguments);
  var t = de(e), n = t.getSeconds();
  return n;
}
function Ee(e) {
  return oe(1, arguments), de(e).getFullYear();
}
function ui(e, t) {
  oe(2, arguments);
  var n = de(e), r = de(t);
  return n.getTime() > r.getTime();
}
function si(e, t) {
  oe(2, arguments);
  var n = de(e), r = de(t);
  return n.getTime() < r.getTime();
}
function Hu(e, t) {
  oe(2, arguments);
  var n = de(e), r = de(t);
  return n.getTime() === r.getTime();
}
function Pn(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Pn = function(n) {
    return typeof n;
  } : Pn = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, Pn(e);
}
function Wu(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && xa(e, t);
}
function xa(e, t) {
  return xa = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, xa(e, t);
}
function qu(e) {
  var t = Ih();
  return function() {
    var r = pr(e), a;
    if (t) {
      var i = pr(this).constructor;
      a = Reflect.construct(r, arguments, i);
    } else
      a = r.apply(this, arguments);
    return Ah(this, a);
  };
}
function Ah(e, t) {
  return t && (Pn(t) === "object" || typeof t == "function") ? t : Ma(e);
}
function Ma(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Ih() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function pr(e) {
  return pr = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, pr(e);
}
function ci(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Fi(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function fi(e, t, n) {
  return t && Fi(e.prototype, t), n && Fi(e, n), e;
}
function Na(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Bh = 10, zu = /* @__PURE__ */ function() {
  function e() {
    ci(this, e), Na(this, "subPriority", 0);
  }
  return fi(e, [{
    key: "validate",
    value: function(n, r) {
      return !0;
    }
  }]), e;
}(), Vh = /* @__PURE__ */ function(e) {
  Wu(n, e);
  var t = qu(n);
  function n(r, a, i, o, l) {
    var f;
    return ci(this, n), f = t.call(this), f.value = r, f.validateValue = a, f.setValue = i, f.priority = o, l && (f.subPriority = l), f;
  }
  return fi(n, [{
    key: "validate",
    value: function(a, i) {
      return this.validateValue(a, this.value, i);
    }
  }, {
    key: "set",
    value: function(a, i, o) {
      return this.setValue(a, i, this.value, o);
    }
  }]), n;
}(zu), Lh = /* @__PURE__ */ function(e) {
  Wu(n, e);
  var t = qu(n);
  function n() {
    var r;
    ci(this, n);
    for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++)
      i[o] = arguments[o];
    return r = t.call.apply(t, [this].concat(i)), Na(Ma(r), "priority", Bh), Na(Ma(r), "subPriority", -1), r;
  }
  return fi(n, [{
    key: "set",
    value: function(a, i) {
      if (i.timestampIsSet)
        return a;
      var o = new Date(0);
      return o.setFullYear(a.getUTCFullYear(), a.getUTCMonth(), a.getUTCDate()), o.setHours(a.getUTCHours(), a.getUTCMinutes(), a.getUTCSeconds(), a.getUTCMilliseconds()), o;
    }
  }]), n;
}(zu);
function Fh(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Ui(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function Uh(e, t, n) {
  return t && Ui(e.prototype, t), n && Ui(e, n), e;
}
var $e = /* @__PURE__ */ function() {
  function e() {
    Fh(this, e);
  }
  return Uh(e, [{
    key: "run",
    value: function(n, r, a, i) {
      var o = this.parse(n, r, a, i);
      return o ? {
        setter: new Vh(o.value, this.validate, this.set, this.priority, this.subPriority),
        rest: o.rest
      } : null;
    }
  }, {
    key: "validate",
    value: function(n, r, a) {
      return !0;
    }
  }]), e;
}();
function Tn(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Tn = function(n) {
    return typeof n;
  } : Tn = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, Tn(e);
}
function Yh(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Yi(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function jh(e, t, n) {
  return t && Yi(e.prototype, t), n && Yi(e, n), e;
}
function Hh(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && Ea(e, t);
}
function Ea(e, t) {
  return Ea = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, Ea(e, t);
}
function Wh(e) {
  var t = zh();
  return function() {
    var r = hr(e), a;
    if (t) {
      var i = hr(this).constructor;
      a = Reflect.construct(r, arguments, i);
    } else
      a = r.apply(this, arguments);
    return qh(this, a);
  };
}
function qh(e, t) {
  return t && (Tn(t) === "object" || typeof t == "function") ? t : Aa(e);
}
function Aa(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function zh() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function hr(e) {
  return hr = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, hr(e);
}
function ji(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Gh = /* @__PURE__ */ function(e) {
  Hh(n, e);
  var t = Wh(n);
  function n() {
    var r;
    Yh(this, n);
    for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++)
      i[o] = arguments[o];
    return r = t.call.apply(t, [this].concat(i)), ji(Aa(r), "priority", 140), ji(Aa(r), "incompatibleTokens", ["R", "u", "t", "T"]), r;
  }
  return jh(n, [{
    key: "parse",
    value: function(a, i, o) {
      switch (i) {
        case "G":
        case "GG":
        case "GGG":
          return o.era(a, {
            width: "abbreviated"
          }) || o.era(a, {
            width: "narrow"
          });
        case "GGGGG":
          return o.era(a, {
            width: "narrow"
          });
        case "GGGG":
        default:
          return o.era(a, {
            width: "wide"
          }) || o.era(a, {
            width: "abbreviated"
          }) || o.era(a, {
            width: "narrow"
          });
      }
    }
  }, {
    key: "set",
    value: function(a, i, o) {
      return i.era = o, a.setUTCFullYear(o, 0, 1), a.setUTCHours(0, 0, 0, 0), a;
    }
  }]), n;
}($e), Le = {
  month: /^(1[0-2]|0?\d)/,
  date: /^(3[0-1]|[0-2]?\d)/,
  dayOfYear: /^(36[0-6]|3[0-5]\d|[0-2]?\d?\d)/,
  week: /^(5[0-3]|[0-4]?\d)/,
  hour23h: /^(2[0-3]|[0-1]?\d)/,
  hour24h: /^(2[0-4]|[0-1]?\d)/,
  hour11h: /^(1[0-1]|0?\d)/,
  hour12h: /^(1[0-2]|0?\d)/,
  minute: /^[0-5]?\d/,
  second: /^[0-5]?\d/,
  singleDigit: /^\d/,
  twoDigits: /^\d{1,2}/,
  threeDigits: /^\d{1,3}/,
  fourDigits: /^\d{1,4}/,
  anyDigitsSigned: /^-?\d+/,
  singleDigitSigned: /^-?\d/,
  twoDigitsSigned: /^-?\d{1,2}/,
  threeDigitsSigned: /^-?\d{1,3}/,
  fourDigitsSigned: /^-?\d{1,4}/
}, dt = {
  basicOptionalMinutes: /^([+-])(\d{2})(\d{2})?|Z/,
  basic: /^([+-])(\d{2})(\d{2})|Z/,
  basicOptionalSeconds: /^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,
  extended: /^([+-])(\d{2}):(\d{2})|Z/,
  extendedOptionalSeconds: /^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/
};
function Fe(e, t) {
  return e && {
    value: t(e.value),
    rest: e.rest
  };
}
function Ae(e, t) {
  var n = t.match(e);
  return n ? {
    value: parseInt(n[0], 10),
    rest: t.slice(n[0].length)
  } : null;
}
function pt(e, t) {
  var n = t.match(e);
  if (!n)
    return null;
  if (n[0] === "Z")
    return {
      value: 0,
      rest: t.slice(1)
    };
  var r = n[1] === "+" ? 1 : -1, a = n[2] ? parseInt(n[2], 10) : 0, i = n[3] ? parseInt(n[3], 10) : 0, o = n[5] ? parseInt(n[5], 10) : 0;
  return {
    value: r * (a * ii + i * oi + o * Sp),
    rest: t.slice(n[0].length)
  };
}
function Gu(e) {
  return Ae(Le.anyDigitsSigned, e);
}
function Be(e, t) {
  switch (e) {
    case 1:
      return Ae(Le.singleDigit, t);
    case 2:
      return Ae(Le.twoDigits, t);
    case 3:
      return Ae(Le.threeDigits, t);
    case 4:
      return Ae(Le.fourDigits, t);
    default:
      return Ae(new RegExp("^\\d{1," + e + "}"), t);
  }
}
function mr(e, t) {
  switch (e) {
    case 1:
      return Ae(Le.singleDigitSigned, t);
    case 2:
      return Ae(Le.twoDigitsSigned, t);
    case 3:
      return Ae(Le.threeDigitsSigned, t);
    case 4:
      return Ae(Le.fourDigitsSigned, t);
    default:
      return Ae(new RegExp("^-?\\d{1," + e + "}"), t);
  }
}
function di(e) {
  switch (e) {
    case "morning":
      return 4;
    case "evening":
      return 17;
    case "pm":
    case "noon":
    case "afternoon":
      return 12;
    case "am":
    case "midnight":
    case "night":
    default:
      return 0;
  }
}
function Qu(e, t) {
  var n = t > 0, r = n ? t : 1 - t, a;
  if (r <= 50)
    a = e || 100;
  else {
    var i = r + 50, o = Math.floor(i / 100) * 100, l = e >= i % 100;
    a = e + o - (l ? 100 : 0);
  }
  return n ? a : 1 - a;
}
function Ju(e) {
  return e % 400 === 0 || e % 4 === 0 && e % 100 !== 0;
}
function Dn(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Dn = function(n) {
    return typeof n;
  } : Dn = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, Dn(e);
}
function Qh(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Hi(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function Jh(e, t, n) {
  return t && Hi(e.prototype, t), n && Hi(e, n), e;
}
function Zh(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && Ia(e, t);
}
function Ia(e, t) {
  return Ia = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, Ia(e, t);
}
function Kh(e) {
  var t = em();
  return function() {
    var r = yr(e), a;
    if (t) {
      var i = yr(this).constructor;
      a = Reflect.construct(r, arguments, i);
    } else
      a = r.apply(this, arguments);
    return Xh(this, a);
  };
}
function Xh(e, t) {
  return t && (Dn(t) === "object" || typeof t == "function") ? t : Ba(e);
}
function Ba(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function em() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function yr(e) {
  return yr = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, yr(e);
}
function Wi(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var tm = /* @__PURE__ */ function(e) {
  Zh(n, e);
  var t = Kh(n);
  function n() {
    var r;
    Qh(this, n);
    for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++)
      i[o] = arguments[o];
    return r = t.call.apply(t, [this].concat(i)), Wi(Ba(r), "priority", 130), Wi(Ba(r), "incompatibleTokens", ["Y", "R", "u", "w", "I", "i", "e", "c", "t", "T"]), r;
  }
  return Jh(n, [{
    key: "parse",
    value: function(a, i, o) {
      var l = function(u) {
        return {
          year: u,
          isTwoDigitYear: i === "yy"
        };
      };
      switch (i) {
        case "y":
          return Fe(Be(4, a), l);
        case "yo":
          return Fe(o.ordinalNumber(a, {
            unit: "year"
          }), l);
        default:
          return Fe(Be(i.length, a), l);
      }
    }
  }, {
    key: "validate",
    value: function(a, i) {
      return i.isTwoDigitYear || i.year > 0;
    }
  }, {
    key: "set",
    value: function(a, i, o) {
      var l = a.getUTCFullYear();
      if (o.isTwoDigitYear) {
        var f = Qu(o.year, l);
        return a.setUTCFullYear(f, 0, 1), a.setUTCHours(0, 0, 0, 0), a;
      }
      var u = !("era" in i) || i.era === 1 ? o.year : 1 - o.year;
      return a.setUTCFullYear(u, 0, 1), a.setUTCHours(0, 0, 0, 0), a;
    }
  }]), n;
}($e);
function Rn(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Rn = function(n) {
    return typeof n;
  } : Rn = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, Rn(e);
}
function nm(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function qi(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function rm(e, t, n) {
  return t && qi(e.prototype, t), n && qi(e, n), e;
}
function am(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && Va(e, t);
}
function Va(e, t) {
  return Va = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, Va(e, t);
}
function om(e) {
  var t = lm();
  return function() {
    var r = vr(e), a;
    if (t) {
      var i = vr(this).constructor;
      a = Reflect.construct(r, arguments, i);
    } else
      a = r.apply(this, arguments);
    return im(this, a);
  };
}
function im(e, t) {
  return t && (Rn(t) === "object" || typeof t == "function") ? t : La(e);
}
function La(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function lm() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function vr(e) {
  return vr = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, vr(e);
}
function zi(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var um = /* @__PURE__ */ function(e) {
  am(n, e);
  var t = om(n);
  function n() {
    var r;
    nm(this, n);
    for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++)
      i[o] = arguments[o];
    return r = t.call.apply(t, [this].concat(i)), zi(La(r), "priority", 130), zi(La(r), "incompatibleTokens", ["y", "R", "u", "Q", "q", "M", "L", "I", "d", "D", "i", "t", "T"]), r;
  }
  return rm(n, [{
    key: "parse",
    value: function(a, i, o) {
      var l = function(u) {
        return {
          year: u,
          isTwoDigitYear: i === "YY"
        };
      };
      switch (i) {
        case "Y":
          return Fe(Be(4, a), l);
        case "Yo":
          return Fe(o.ordinalNumber(a, {
            unit: "year"
          }), l);
        default:
          return Fe(Be(i.length, a), l);
      }
    }
  }, {
    key: "validate",
    value: function(a, i) {
      return i.isTwoDigitYear || i.year > 0;
    }
  }, {
    key: "set",
    value: function(a, i, o, l) {
      var f = li(a, l);
      if (o.isTwoDigitYear) {
        var u = Qu(o.year, f);
        return a.setUTCFullYear(u, 0, l.firstWeekContainsDate), a.setUTCHours(0, 0, 0, 0), Bt(a, l);
      }
      var d = !("era" in i) || i.era === 1 ? o.year : 1 - o.year;
      return a.setUTCFullYear(d, 0, l.firstWeekContainsDate), a.setUTCHours(0, 0, 0, 0), Bt(a, l);
    }
  }]), n;
}($e);
function Cn(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Cn = function(n) {
    return typeof n;
  } : Cn = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, Cn(e);
}
function sm(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Gi(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function cm(e, t, n) {
  return t && Gi(e.prototype, t), n && Gi(e, n), e;
}
function fm(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && Fa(e, t);
}
function Fa(e, t) {
  return Fa = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, Fa(e, t);
}
function dm(e) {
  var t = hm();
  return function() {
    var r = gr(e), a;
    if (t) {
      var i = gr(this).constructor;
      a = Reflect.construct(r, arguments, i);
    } else
      a = r.apply(this, arguments);
    return pm(this, a);
  };
}
function pm(e, t) {
  return t && (Cn(t) === "object" || typeof t == "function") ? t : Ua(e);
}
function Ua(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function hm() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function gr(e) {
  return gr = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, gr(e);
}
function Qi(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var mm = /* @__PURE__ */ function(e) {
  fm(n, e);
  var t = dm(n);
  function n() {
    var r;
    sm(this, n);
    for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++)
      i[o] = arguments[o];
    return r = t.call.apply(t, [this].concat(i)), Qi(Ua(r), "priority", 130), Qi(Ua(r), "incompatibleTokens", ["G", "y", "Y", "u", "Q", "q", "M", "L", "w", "d", "D", "e", "c", "t", "T"]), r;
  }
  return cm(n, [{
    key: "parse",
    value: function(a, i) {
      return mr(i === "R" ? 4 : i.length, a);
    }
  }, {
    key: "set",
    value: function(a, i, o) {
      var l = new Date(0);
      return l.setUTCFullYear(o, 0, 4), l.setUTCHours(0, 0, 0, 0), jt(l);
    }
  }]), n;
}($e);
function xn(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? xn = function(n) {
    return typeof n;
  } : xn = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, xn(e);
}
function ym(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Ji(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function vm(e, t, n) {
  return t && Ji(e.prototype, t), n && Ji(e, n), e;
}
function gm(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && Ya(e, t);
}
function Ya(e, t) {
  return Ya = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, Ya(e, t);
}
function bm(e) {
  var t = wm();
  return function() {
    var r = br(e), a;
    if (t) {
      var i = br(this).constructor;
      a = Reflect.construct(r, arguments, i);
    } else
      a = r.apply(this, arguments);
    return _m(this, a);
  };
}
function _m(e, t) {
  return t && (xn(t) === "object" || typeof t == "function") ? t : ja(e);
}
function ja(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function wm() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function br(e) {
  return br = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, br(e);
}
function Zi(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Om = /* @__PURE__ */ function(e) {
  gm(n, e);
  var t = bm(n);
  function n() {
    var r;
    ym(this, n);
    for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++)
      i[o] = arguments[o];
    return r = t.call.apply(t, [this].concat(i)), Zi(ja(r), "priority", 130), Zi(ja(r), "incompatibleTokens", ["G", "y", "Y", "R", "w", "I", "i", "e", "c", "t", "T"]), r;
  }
  return vm(n, [{
    key: "parse",
    value: function(a, i) {
      return mr(i === "u" ? 4 : i.length, a);
    }
  }, {
    key: "set",
    value: function(a, i, o) {
      return a.setUTCFullYear(o, 0, 1), a.setUTCHours(0, 0, 0, 0), a;
    }
  }]), n;
}($e);
function Mn(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Mn = function(n) {
    return typeof n;
  } : Mn = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, Mn(e);
}
function $m(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Ki(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function km(e, t, n) {
  return t && Ki(e.prototype, t), n && Ki(e, n), e;
}
function Sm(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && Ha(e, t);
}
function Ha(e, t) {
  return Ha = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, Ha(e, t);
}
function Pm(e) {
  var t = Dm();
  return function() {
    var r = _r(e), a;
    if (t) {
      var i = _r(this).constructor;
      a = Reflect.construct(r, arguments, i);
    } else
      a = r.apply(this, arguments);
    return Tm(this, a);
  };
}
function Tm(e, t) {
  return t && (Mn(t) === "object" || typeof t == "function") ? t : Wa(e);
}
function Wa(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Dm() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function _r(e) {
  return _r = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, _r(e);
}
function Xi(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Rm = /* @__PURE__ */ function(e) {
  Sm(n, e);
  var t = Pm(n);
  function n() {
    var r;
    $m(this, n);
    for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++)
      i[o] = arguments[o];
    return r = t.call.apply(t, [this].concat(i)), Xi(Wa(r), "priority", 120), Xi(Wa(r), "incompatibleTokens", ["Y", "R", "q", "M", "L", "w", "I", "d", "D", "i", "e", "c", "t", "T"]), r;
  }
  return km(n, [{
    key: "parse",
    value: function(a, i, o) {
      switch (i) {
        case "Q":
        case "QQ":
          return Be(i.length, a);
        case "Qo":
          return o.ordinalNumber(a, {
            unit: "quarter"
          });
        case "QQQ":
          return o.quarter(a, {
            width: "abbreviated",
            context: "formatting"
          }) || o.quarter(a, {
            width: "narrow",
            context: "formatting"
          });
        case "QQQQQ":
          return o.quarter(a, {
            width: "narrow",
            context: "formatting"
          });
        case "QQQQ":
        default:
          return o.quarter(a, {
            width: "wide",
            context: "formatting"
          }) || o.quarter(a, {
            width: "abbreviated",
            context: "formatting"
          }) || o.quarter(a, {
            width: "narrow",
            context: "formatting"
          });
      }
    }
  }, {
    key: "validate",
    value: function(a, i) {
      return i >= 1 && i <= 4;
    }
  }, {
    key: "set",
    value: function(a, i, o) {
      return a.setUTCMonth((o - 1) * 3, 1), a.setUTCHours(0, 0, 0, 0), a;
    }
  }]), n;
}($e);
function Nn(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Nn = function(n) {
    return typeof n;
  } : Nn = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, Nn(e);
}
function Cm(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function el(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function xm(e, t, n) {
  return t && el(e.prototype, t), n && el(e, n), e;
}
function Mm(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && qa(e, t);
}
function qa(e, t) {
  return qa = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, qa(e, t);
}
function Nm(e) {
  var t = Am();
  return function() {
    var r = wr(e), a;
    if (t) {
      var i = wr(this).constructor;
      a = Reflect.construct(r, arguments, i);
    } else
      a = r.apply(this, arguments);
    return Em(this, a);
  };
}
function Em(e, t) {
  return t && (Nn(t) === "object" || typeof t == "function") ? t : za(e);
}
function za(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Am() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function wr(e) {
  return wr = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, wr(e);
}
function tl(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Im = /* @__PURE__ */ function(e) {
  Mm(n, e);
  var t = Nm(n);
  function n() {
    var r;
    Cm(this, n);
    for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++)
      i[o] = arguments[o];
    return r = t.call.apply(t, [this].concat(i)), tl(za(r), "priority", 120), tl(za(r), "incompatibleTokens", ["Y", "R", "Q", "M", "L", "w", "I", "d", "D", "i", "e", "c", "t", "T"]), r;
  }
  return xm(n, [{
    key: "parse",
    value: function(a, i, o) {
      switch (i) {
        case "q":
        case "qq":
          return Be(i.length, a);
        case "qo":
          return o.ordinalNumber(a, {
            unit: "quarter"
          });
        case "qqq":
          return o.quarter(a, {
            width: "abbreviated",
            context: "standalone"
          }) || o.quarter(a, {
            width: "narrow",
            context: "standalone"
          });
        case "qqqqq":
          return o.quarter(a, {
            width: "narrow",
            context: "standalone"
          });
        case "qqqq":
        default:
          return o.quarter(a, {
            width: "wide",
            context: "standalone"
          }) || o.quarter(a, {
            width: "abbreviated",
            context: "standalone"
          }) || o.quarter(a, {
            width: "narrow",
            context: "standalone"
          });
      }
    }
  }, {
    key: "validate",
    value: function(a, i) {
      return i >= 1 && i <= 4;
    }
  }, {
    key: "set",
    value: function(a, i, o) {
      return a.setUTCMonth((o - 1) * 3, 1), a.setUTCHours(0, 0, 0, 0), a;
    }
  }]), n;
}($e);
function En(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? En = function(n) {
    return typeof n;
  } : En = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, En(e);
}
function Bm(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function nl(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function Vm(e, t, n) {
  return t && nl(e.prototype, t), n && nl(e, n), e;
}
function Lm(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && Ga(e, t);
}
function Ga(e, t) {
  return Ga = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, Ga(e, t);
}
function Fm(e) {
  var t = Ym();
  return function() {
    var r = Or(e), a;
    if (t) {
      var i = Or(this).constructor;
      a = Reflect.construct(r, arguments, i);
    } else
      a = r.apply(this, arguments);
    return Um(this, a);
  };
}
function Um(e, t) {
  return t && (En(t) === "object" || typeof t == "function") ? t : Qa(e);
}
function Qa(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Ym() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function Or(e) {
  return Or = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Or(e);
}
function rl(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var jm = /* @__PURE__ */ function(e) {
  Lm(n, e);
  var t = Fm(n);
  function n() {
    var r;
    Bm(this, n);
    for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++)
      i[o] = arguments[o];
    return r = t.call.apply(t, [this].concat(i)), rl(Qa(r), "incompatibleTokens", ["Y", "R", "q", "Q", "L", "w", "I", "D", "i", "e", "c", "t", "T"]), rl(Qa(r), "priority", 110), r;
  }
  return Vm(n, [{
    key: "parse",
    value: function(a, i, o) {
      var l = function(u) {
        return u - 1;
      };
      switch (i) {
        case "M":
          return Fe(Ae(Le.month, a), l);
        case "MM":
          return Fe(Be(2, a), l);
        case "Mo":
          return Fe(o.ordinalNumber(a, {
            unit: "month"
          }), l);
        case "MMM":
          return o.month(a, {
            width: "abbreviated",
            context: "formatting"
          }) || o.month(a, {
            width: "narrow",
            context: "formatting"
          });
        case "MMMMM":
          return o.month(a, {
            width: "narrow",
            context: "formatting"
          });
        case "MMMM":
        default:
          return o.month(a, {
            width: "wide",
            context: "formatting"
          }) || o.month(a, {
            width: "abbreviated",
            context: "formatting"
          }) || o.month(a, {
            width: "narrow",
            context: "formatting"
          });
      }
    }
  }, {
    key: "validate",
    value: function(a, i) {
      return i >= 0 && i <= 11;
    }
  }, {
    key: "set",
    value: function(a, i, o) {
      return a.setUTCMonth(o, 1), a.setUTCHours(0, 0, 0, 0), a;
    }
  }]), n;
}($e);
function An(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? An = function(n) {
    return typeof n;
  } : An = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, An(e);
}
function Hm(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function al(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function Wm(e, t, n) {
  return t && al(e.prototype, t), n && al(e, n), e;
}
function qm(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && Ja(e, t);
}
function Ja(e, t) {
  return Ja = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, Ja(e, t);
}
function zm(e) {
  var t = Qm();
  return function() {
    var r = $r(e), a;
    if (t) {
      var i = $r(this).constructor;
      a = Reflect.construct(r, arguments, i);
    } else
      a = r.apply(this, arguments);
    return Gm(this, a);
  };
}
function Gm(e, t) {
  return t && (An(t) === "object" || typeof t == "function") ? t : Za(e);
}
function Za(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Qm() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function $r(e) {
  return $r = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, $r(e);
}
function ol(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Jm = /* @__PURE__ */ function(e) {
  qm(n, e);
  var t = zm(n);
  function n() {
    var r;
    Hm(this, n);
    for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++)
      i[o] = arguments[o];
    return r = t.call.apply(t, [this].concat(i)), ol(Za(r), "priority", 110), ol(Za(r), "incompatibleTokens", ["Y", "R", "q", "Q", "M", "w", "I", "D", "i", "e", "c", "t", "T"]), r;
  }
  return Wm(n, [{
    key: "parse",
    value: function(a, i, o) {
      var l = function(u) {
        return u - 1;
      };
      switch (i) {
        case "L":
          return Fe(Ae(Le.month, a), l);
        case "LL":
          return Fe(Be(2, a), l);
        case "Lo":
          return Fe(o.ordinalNumber(a, {
            unit: "month"
          }), l);
        case "LLL":
          return o.month(a, {
            width: "abbreviated",
            context: "standalone"
          }) || o.month(a, {
            width: "narrow",
            context: "standalone"
          });
        case "LLLLL":
          return o.month(a, {
            width: "narrow",
            context: "standalone"
          });
        case "LLLL":
        default:
          return o.month(a, {
            width: "wide",
            context: "standalone"
          }) || o.month(a, {
            width: "abbreviated",
            context: "standalone"
          }) || o.month(a, {
            width: "narrow",
            context: "standalone"
          });
      }
    }
  }, {
    key: "validate",
    value: function(a, i) {
      return i >= 0 && i <= 11;
    }
  }, {
    key: "set",
    value: function(a, i, o) {
      return a.setUTCMonth(o, 1), a.setUTCHours(0, 0, 0, 0), a;
    }
  }]), n;
}($e);
function Zm(e, t, n) {
  oe(2, arguments);
  var r = de(e), a = ce(t), i = Lu(r, n) - a;
  return r.setUTCDate(r.getUTCDate() - i * 7), r;
}
function In(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? In = function(n) {
    return typeof n;
  } : In = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, In(e);
}
function Km(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function il(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function Xm(e, t, n) {
  return t && il(e.prototype, t), n && il(e, n), e;
}
function ey(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && Ka(e, t);
}
function Ka(e, t) {
  return Ka = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, Ka(e, t);
}
function ty(e) {
  var t = ry();
  return function() {
    var r = kr(e), a;
    if (t) {
      var i = kr(this).constructor;
      a = Reflect.construct(r, arguments, i);
    } else
      a = r.apply(this, arguments);
    return ny(this, a);
  };
}
function ny(e, t) {
  return t && (In(t) === "object" || typeof t == "function") ? t : Xa(e);
}
function Xa(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function ry() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function kr(e) {
  return kr = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, kr(e);
}
function ll(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var ay = /* @__PURE__ */ function(e) {
  ey(n, e);
  var t = ty(n);
  function n() {
    var r;
    Km(this, n);
    for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++)
      i[o] = arguments[o];
    return r = t.call.apply(t, [this].concat(i)), ll(Xa(r), "priority", 100), ll(Xa(r), "incompatibleTokens", ["y", "R", "u", "q", "Q", "M", "L", "I", "d", "D", "i", "t", "T"]), r;
  }
  return Xm(n, [{
    key: "parse",
    value: function(a, i, o) {
      switch (i) {
        case "w":
          return Ae(Le.week, a);
        case "wo":
          return o.ordinalNumber(a, {
            unit: "week"
          });
        default:
          return Be(i.length, a);
      }
    }
  }, {
    key: "validate",
    value: function(a, i) {
      return i >= 1 && i <= 53;
    }
  }, {
    key: "set",
    value: function(a, i, o, l) {
      return Bt(Zm(a, o, l), l);
    }
  }]), n;
}($e);
function oy(e, t) {
  oe(2, arguments);
  var n = de(e), r = ce(t), a = Vu(n) - r;
  return n.setUTCDate(n.getUTCDate() - a * 7), n;
}
function Bn(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Bn = function(n) {
    return typeof n;
  } : Bn = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, Bn(e);
}
function iy(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function ul(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function ly(e, t, n) {
  return t && ul(e.prototype, t), n && ul(e, n), e;
}
function uy(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && eo(e, t);
}
function eo(e, t) {
  return eo = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, eo(e, t);
}
function sy(e) {
  var t = fy();
  return function() {
    var r = Sr(e), a;
    if (t) {
      var i = Sr(this).constructor;
      a = Reflect.construct(r, arguments, i);
    } else
      a = r.apply(this, arguments);
    return cy(this, a);
  };
}
function cy(e, t) {
  return t && (Bn(t) === "object" || typeof t == "function") ? t : to(e);
}
function to(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function fy() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function Sr(e) {
  return Sr = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Sr(e);
}
function sl(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var dy = /* @__PURE__ */ function(e) {
  uy(n, e);
  var t = sy(n);
  function n() {
    var r;
    iy(this, n);
    for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++)
      i[o] = arguments[o];
    return r = t.call.apply(t, [this].concat(i)), sl(to(r), "priority", 100), sl(to(r), "incompatibleTokens", ["y", "Y", "u", "q", "Q", "M", "L", "w", "d", "D", "e", "c", "t", "T"]), r;
  }
  return ly(n, [{
    key: "parse",
    value: function(a, i, o) {
      switch (i) {
        case "I":
          return Ae(Le.week, a);
        case "Io":
          return o.ordinalNumber(a, {
            unit: "week"
          });
        default:
          return Be(i.length, a);
      }
    }
  }, {
    key: "validate",
    value: function(a, i) {
      return i >= 1 && i <= 53;
    }
  }, {
    key: "set",
    value: function(a, i, o) {
      return jt(oy(a, o));
    }
  }]), n;
}($e);
function Vn(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Vn = function(n) {
    return typeof n;
  } : Vn = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, Vn(e);
}
function py(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function cl(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function hy(e, t, n) {
  return t && cl(e.prototype, t), n && cl(e, n), e;
}
function my(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && no(e, t);
}
function no(e, t) {
  return no = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, no(e, t);
}
function yy(e) {
  var t = gy();
  return function() {
    var r = Pr(e), a;
    if (t) {
      var i = Pr(this).constructor;
      a = Reflect.construct(r, arguments, i);
    } else
      a = r.apply(this, arguments);
    return vy(this, a);
  };
}
function vy(e, t) {
  return t && (Vn(t) === "object" || typeof t == "function") ? t : Ln(e);
}
function Ln(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function gy() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function Pr(e) {
  return Pr = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Pr(e);
}
function ca(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var by = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], _y = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], wy = /* @__PURE__ */ function(e) {
  my(n, e);
  var t = yy(n);
  function n() {
    var r;
    py(this, n);
    for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++)
      i[o] = arguments[o];
    return r = t.call.apply(t, [this].concat(i)), ca(Ln(r), "priority", 90), ca(Ln(r), "subPriority", 1), ca(Ln(r), "incompatibleTokens", ["Y", "R", "q", "Q", "w", "I", "D", "i", "e", "c", "t", "T"]), r;
  }
  return hy(n, [{
    key: "parse",
    value: function(a, i, o) {
      switch (i) {
        case "d":
          return Ae(Le.date, a);
        case "do":
          return o.ordinalNumber(a, {
            unit: "date"
          });
        default:
          return Be(i.length, a);
      }
    }
  }, {
    key: "validate",
    value: function(a, i) {
      var o = a.getUTCFullYear(), l = Ju(o), f = a.getUTCMonth();
      return l ? i >= 1 && i <= _y[f] : i >= 1 && i <= by[f];
    }
  }, {
    key: "set",
    value: function(a, i, o) {
      return a.setUTCDate(o), a.setUTCHours(0, 0, 0, 0), a;
    }
  }]), n;
}($e);
function Fn(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Fn = function(n) {
    return typeof n;
  } : Fn = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, Fn(e);
}
function Oy(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function fl(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function $y(e, t, n) {
  return t && fl(e.prototype, t), n && fl(e, n), e;
}
function ky(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && ro(e, t);
}
function ro(e, t) {
  return ro = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, ro(e, t);
}
function Sy(e) {
  var t = Ty();
  return function() {
    var r = Tr(e), a;
    if (t) {
      var i = Tr(this).constructor;
      a = Reflect.construct(r, arguments, i);
    } else
      a = r.apply(this, arguments);
    return Py(this, a);
  };
}
function Py(e, t) {
  return t && (Fn(t) === "object" || typeof t == "function") ? t : Un(e);
}
function Un(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Ty() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function Tr(e) {
  return Tr = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Tr(e);
}
function fa(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Dy = /* @__PURE__ */ function(e) {
  ky(n, e);
  var t = Sy(n);
  function n() {
    var r;
    Oy(this, n);
    for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++)
      i[o] = arguments[o];
    return r = t.call.apply(t, [this].concat(i)), fa(Un(r), "priority", 90), fa(Un(r), "subpriority", 1), fa(Un(r), "incompatibleTokens", ["Y", "R", "q", "Q", "M", "L", "w", "I", "d", "E", "i", "e", "c", "t", "T"]), r;
  }
  return $y(n, [{
    key: "parse",
    value: function(a, i, o) {
      switch (i) {
        case "D":
        case "DD":
          return Ae(Le.dayOfYear, a);
        case "Do":
          return o.ordinalNumber(a, {
            unit: "date"
          });
        default:
          return Be(i.length, a);
      }
    }
  }, {
    key: "validate",
    value: function(a, i) {
      var o = a.getUTCFullYear(), l = Ju(o);
      return l ? i >= 1 && i <= 366 : i >= 1 && i <= 365;
    }
  }, {
    key: "set",
    value: function(a, i, o) {
      return a.setUTCMonth(0, o), a.setUTCHours(0, 0, 0, 0), a;
    }
  }]), n;
}($e);
function pi(e, t, n) {
  var r, a, i, o, l, f, u, d;
  oe(2, arguments);
  var s = St(), h = ce((r = (a = (i = (o = n == null ? void 0 : n.weekStartsOn) !== null && o !== void 0 ? o : n == null || (l = n.locale) === null || l === void 0 || (f = l.options) === null || f === void 0 ? void 0 : f.weekStartsOn) !== null && i !== void 0 ? i : s.weekStartsOn) !== null && a !== void 0 ? a : (u = s.locale) === null || u === void 0 || (d = u.options) === null || d === void 0 ? void 0 : d.weekStartsOn) !== null && r !== void 0 ? r : 0);
  if (!(h >= 0 && h <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var v = de(e), g = ce(t), P = v.getUTCDay(), D = g % 7, B = (D + 7) % 7, C = (B < h ? 7 : 0) + g - P;
  return v.setUTCDate(v.getUTCDate() + C), v;
}
function Yn(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Yn = function(n) {
    return typeof n;
  } : Yn = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, Yn(e);
}
function Ry(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function dl(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function Cy(e, t, n) {
  return t && dl(e.prototype, t), n && dl(e, n), e;
}
function xy(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && ao(e, t);
}
function ao(e, t) {
  return ao = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, ao(e, t);
}
function My(e) {
  var t = Ey();
  return function() {
    var r = Dr(e), a;
    if (t) {
      var i = Dr(this).constructor;
      a = Reflect.construct(r, arguments, i);
    } else
      a = r.apply(this, arguments);
    return Ny(this, a);
  };
}
function Ny(e, t) {
  return t && (Yn(t) === "object" || typeof t == "function") ? t : oo(e);
}
function oo(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Ey() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function Dr(e) {
  return Dr = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Dr(e);
}
function pl(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Ay = /* @__PURE__ */ function(e) {
  xy(n, e);
  var t = My(n);
  function n() {
    var r;
    Ry(this, n);
    for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++)
      i[o] = arguments[o];
    return r = t.call.apply(t, [this].concat(i)), pl(oo(r), "priority", 90), pl(oo(r), "incompatibleTokens", ["D", "i", "e", "c", "t", "T"]), r;
  }
  return Cy(n, [{
    key: "parse",
    value: function(a, i, o) {
      switch (i) {
        case "E":
        case "EE":
        case "EEE":
          return o.day(a, {
            width: "abbreviated",
            context: "formatting"
          }) || o.day(a, {
            width: "short",
            context: "formatting"
          }) || o.day(a, {
            width: "narrow",
            context: "formatting"
          });
        case "EEEEE":
          return o.day(a, {
            width: "narrow",
            context: "formatting"
          });
        case "EEEEEE":
          return o.day(a, {
            width: "short",
            context: "formatting"
          }) || o.day(a, {
            width: "narrow",
            context: "formatting"
          });
        case "EEEE":
        default:
          return o.day(a, {
            width: "wide",
            context: "formatting"
          }) || o.day(a, {
            width: "abbreviated",
            context: "formatting"
          }) || o.day(a, {
            width: "short",
            context: "formatting"
          }) || o.day(a, {
            width: "narrow",
            context: "formatting"
          });
      }
    }
  }, {
    key: "validate",
    value: function(a, i) {
      return i >= 0 && i <= 6;
    }
  }, {
    key: "set",
    value: function(a, i, o, l) {
      return a = pi(a, o, l), a.setUTCHours(0, 0, 0, 0), a;
    }
  }]), n;
}($e);
function jn(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? jn = function(n) {
    return typeof n;
  } : jn = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, jn(e);
}
function Iy(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function hl(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function By(e, t, n) {
  return t && hl(e.prototype, t), n && hl(e, n), e;
}
function Vy(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && io(e, t);
}
function io(e, t) {
  return io = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, io(e, t);
}
function Ly(e) {
  var t = Uy();
  return function() {
    var r = Rr(e), a;
    if (t) {
      var i = Rr(this).constructor;
      a = Reflect.construct(r, arguments, i);
    } else
      a = r.apply(this, arguments);
    return Fy(this, a);
  };
}
function Fy(e, t) {
  return t && (jn(t) === "object" || typeof t == "function") ? t : lo(e);
}
function lo(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Uy() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function Rr(e) {
  return Rr = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Rr(e);
}
function ml(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Yy = /* @__PURE__ */ function(e) {
  Vy(n, e);
  var t = Ly(n);
  function n() {
    var r;
    Iy(this, n);
    for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++)
      i[o] = arguments[o];
    return r = t.call.apply(t, [this].concat(i)), ml(lo(r), "priority", 90), ml(lo(r), "incompatibleTokens", ["y", "R", "u", "q", "Q", "M", "L", "I", "d", "D", "E", "i", "c", "t", "T"]), r;
  }
  return By(n, [{
    key: "parse",
    value: function(a, i, o, l) {
      var f = function(d) {
        var s = Math.floor((d - 1) / 7) * 7;
        return (d + l.weekStartsOn + 6) % 7 + s;
      };
      switch (i) {
        case "e":
        case "ee":
          return Fe(Be(i.length, a), f);
        case "eo":
          return Fe(o.ordinalNumber(a, {
            unit: "day"
          }), f);
        case "eee":
          return o.day(a, {
            width: "abbreviated",
            context: "formatting"
          }) || o.day(a, {
            width: "short",
            context: "formatting"
          }) || o.day(a, {
            width: "narrow",
            context: "formatting"
          });
        case "eeeee":
          return o.day(a, {
            width: "narrow",
            context: "formatting"
          });
        case "eeeeee":
          return o.day(a, {
            width: "short",
            context: "formatting"
          }) || o.day(a, {
            width: "narrow",
            context: "formatting"
          });
        case "eeee":
        default:
          return o.day(a, {
            width: "wide",
            context: "formatting"
          }) || o.day(a, {
            width: "abbreviated",
            context: "formatting"
          }) || o.day(a, {
            width: "short",
            context: "formatting"
          }) || o.day(a, {
            width: "narrow",
            context: "formatting"
          });
      }
    }
  }, {
    key: "validate",
    value: function(a, i) {
      return i >= 0 && i <= 6;
    }
  }, {
    key: "set",
    value: function(a, i, o, l) {
      return a = pi(a, o, l), a.setUTCHours(0, 0, 0, 0), a;
    }
  }]), n;
}($e);
function Hn(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Hn = function(n) {
    return typeof n;
  } : Hn = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, Hn(e);
}
function jy(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function yl(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function Hy(e, t, n) {
  return t && yl(e.prototype, t), n && yl(e, n), e;
}
function Wy(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && uo(e, t);
}
function uo(e, t) {
  return uo = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, uo(e, t);
}
function qy(e) {
  var t = Gy();
  return function() {
    var r = Cr(e), a;
    if (t) {
      var i = Cr(this).constructor;
      a = Reflect.construct(r, arguments, i);
    } else
      a = r.apply(this, arguments);
    return zy(this, a);
  };
}
function zy(e, t) {
  return t && (Hn(t) === "object" || typeof t == "function") ? t : so(e);
}
function so(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Gy() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function Cr(e) {
  return Cr = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Cr(e);
}
function vl(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Qy = /* @__PURE__ */ function(e) {
  Wy(n, e);
  var t = qy(n);
  function n() {
    var r;
    jy(this, n);
    for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++)
      i[o] = arguments[o];
    return r = t.call.apply(t, [this].concat(i)), vl(so(r), "priority", 90), vl(so(r), "incompatibleTokens", ["y", "R", "u", "q", "Q", "M", "L", "I", "d", "D", "E", "i", "e", "t", "T"]), r;
  }
  return Hy(n, [{
    key: "parse",
    value: function(a, i, o, l) {
      var f = function(d) {
        var s = Math.floor((d - 1) / 7) * 7;
        return (d + l.weekStartsOn + 6) % 7 + s;
      };
      switch (i) {
        case "c":
        case "cc":
          return Fe(Be(i.length, a), f);
        case "co":
          return Fe(o.ordinalNumber(a, {
            unit: "day"
          }), f);
        case "ccc":
          return o.day(a, {
            width: "abbreviated",
            context: "standalone"
          }) || o.day(a, {
            width: "short",
            context: "standalone"
          }) || o.day(a, {
            width: "narrow",
            context: "standalone"
          });
        case "ccccc":
          return o.day(a, {
            width: "narrow",
            context: "standalone"
          });
        case "cccccc":
          return o.day(a, {
            width: "short",
            context: "standalone"
          }) || o.day(a, {
            width: "narrow",
            context: "standalone"
          });
        case "cccc":
        default:
          return o.day(a, {
            width: "wide",
            context: "standalone"
          }) || o.day(a, {
            width: "abbreviated",
            context: "standalone"
          }) || o.day(a, {
            width: "short",
            context: "standalone"
          }) || o.day(a, {
            width: "narrow",
            context: "standalone"
          });
      }
    }
  }, {
    key: "validate",
    value: function(a, i) {
      return i >= 0 && i <= 6;
    }
  }, {
    key: "set",
    value: function(a, i, o, l) {
      return a = pi(a, o, l), a.setUTCHours(0, 0, 0, 0), a;
    }
  }]), n;
}($e);
function Jy(e, t) {
  oe(2, arguments);
  var n = ce(t);
  n % 7 === 0 && (n = n - 7);
  var r = 1, a = de(e), i = a.getUTCDay(), o = n % 7, l = (o + 7) % 7, f = (l < r ? 7 : 0) + n - i;
  return a.setUTCDate(a.getUTCDate() + f), a;
}
function Wn(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Wn = function(n) {
    return typeof n;
  } : Wn = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, Wn(e);
}
function Zy(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function gl(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function Ky(e, t, n) {
  return t && gl(e.prototype, t), n && gl(e, n), e;
}
function Xy(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && co(e, t);
}
function co(e, t) {
  return co = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, co(e, t);
}
function ev(e) {
  var t = nv();
  return function() {
    var r = xr(e), a;
    if (t) {
      var i = xr(this).constructor;
      a = Reflect.construct(r, arguments, i);
    } else
      a = r.apply(this, arguments);
    return tv(this, a);
  };
}
function tv(e, t) {
  return t && (Wn(t) === "object" || typeof t == "function") ? t : fo(e);
}
function fo(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function nv() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function xr(e) {
  return xr = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, xr(e);
}
function bl(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var rv = /* @__PURE__ */ function(e) {
  Xy(n, e);
  var t = ev(n);
  function n() {
    var r;
    Zy(this, n);
    for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++)
      i[o] = arguments[o];
    return r = t.call.apply(t, [this].concat(i)), bl(fo(r), "priority", 90), bl(fo(r), "incompatibleTokens", ["y", "Y", "u", "q", "Q", "M", "L", "w", "d", "D", "E", "e", "c", "t", "T"]), r;
  }
  return Ky(n, [{
    key: "parse",
    value: function(a, i, o) {
      var l = function(u) {
        return u === 0 ? 7 : u;
      };
      switch (i) {
        case "i":
        case "ii":
          return Be(i.length, a);
        case "io":
          return o.ordinalNumber(a, {
            unit: "day"
          });
        case "iii":
          return Fe(o.day(a, {
            width: "abbreviated",
            context: "formatting"
          }) || o.day(a, {
            width: "short",
            context: "formatting"
          }) || o.day(a, {
            width: "narrow",
            context: "formatting"
          }), l);
        case "iiiii":
          return Fe(o.day(a, {
            width: "narrow",
            context: "formatting"
          }), l);
        case "iiiiii":
          return Fe(o.day(a, {
            width: "short",
            context: "formatting"
          }) || o.day(a, {
            width: "narrow",
            context: "formatting"
          }), l);
        case "iiii":
        default:
          return Fe(o.day(a, {
            width: "wide",
            context: "formatting"
          }) || o.day(a, {
            width: "abbreviated",
            context: "formatting"
          }) || o.day(a, {
            width: "short",
            context: "formatting"
          }) || o.day(a, {
            width: "narrow",
            context: "formatting"
          }), l);
      }
    }
  }, {
    key: "validate",
    value: function(a, i) {
      return i >= 1 && i <= 7;
    }
  }, {
    key: "set",
    value: function(a, i, o) {
      return a = Jy(a, o), a.setUTCHours(0, 0, 0, 0), a;
    }
  }]), n;
}($e);
function qn(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? qn = function(n) {
    return typeof n;
  } : qn = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, qn(e);
}
function av(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function _l(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function ov(e, t, n) {
  return t && _l(e.prototype, t), n && _l(e, n), e;
}
function iv(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && po(e, t);
}
function po(e, t) {
  return po = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, po(e, t);
}
function lv(e) {
  var t = sv();
  return function() {
    var r = Mr(e), a;
    if (t) {
      var i = Mr(this).constructor;
      a = Reflect.construct(r, arguments, i);
    } else
      a = r.apply(this, arguments);
    return uv(this, a);
  };
}
function uv(e, t) {
  return t && (qn(t) === "object" || typeof t == "function") ? t : ho(e);
}
function ho(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function sv() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function Mr(e) {
  return Mr = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Mr(e);
}
function wl(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var cv = /* @__PURE__ */ function(e) {
  iv(n, e);
  var t = lv(n);
  function n() {
    var r;
    av(this, n);
    for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++)
      i[o] = arguments[o];
    return r = t.call.apply(t, [this].concat(i)), wl(ho(r), "priority", 80), wl(ho(r), "incompatibleTokens", ["b", "B", "H", "k", "t", "T"]), r;
  }
  return ov(n, [{
    key: "parse",
    value: function(a, i, o) {
      switch (i) {
        case "a":
        case "aa":
        case "aaa":
          return o.dayPeriod(a, {
            width: "abbreviated",
            context: "formatting"
          }) || o.dayPeriod(a, {
            width: "narrow",
            context: "formatting"
          });
        case "aaaaa":
          return o.dayPeriod(a, {
            width: "narrow",
            context: "formatting"
          });
        case "aaaa":
        default:
          return o.dayPeriod(a, {
            width: "wide",
            context: "formatting"
          }) || o.dayPeriod(a, {
            width: "abbreviated",
            context: "formatting"
          }) || o.dayPeriod(a, {
            width: "narrow",
            context: "formatting"
          });
      }
    }
  }, {
    key: "set",
    value: function(a, i, o) {
      return a.setUTCHours(di(o), 0, 0, 0), a;
    }
  }]), n;
}($e);
function zn(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? zn = function(n) {
    return typeof n;
  } : zn = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, zn(e);
}
function fv(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Ol(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function dv(e, t, n) {
  return t && Ol(e.prototype, t), n && Ol(e, n), e;
}
function pv(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && mo(e, t);
}
function mo(e, t) {
  return mo = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, mo(e, t);
}
function hv(e) {
  var t = yv();
  return function() {
    var r = Nr(e), a;
    if (t) {
      var i = Nr(this).constructor;
      a = Reflect.construct(r, arguments, i);
    } else
      a = r.apply(this, arguments);
    return mv(this, a);
  };
}
function mv(e, t) {
  return t && (zn(t) === "object" || typeof t == "function") ? t : yo(e);
}
function yo(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function yv() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function Nr(e) {
  return Nr = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Nr(e);
}
function $l(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var vv = /* @__PURE__ */ function(e) {
  pv(n, e);
  var t = hv(n);
  function n() {
    var r;
    fv(this, n);
    for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++)
      i[o] = arguments[o];
    return r = t.call.apply(t, [this].concat(i)), $l(yo(r), "priority", 80), $l(yo(r), "incompatibleTokens", ["a", "B", "H", "k", "t", "T"]), r;
  }
  return dv(n, [{
    key: "parse",
    value: function(a, i, o) {
      switch (i) {
        case "b":
        case "bb":
        case "bbb":
          return o.dayPeriod(a, {
            width: "abbreviated",
            context: "formatting"
          }) || o.dayPeriod(a, {
            width: "narrow",
            context: "formatting"
          });
        case "bbbbb":
          return o.dayPeriod(a, {
            width: "narrow",
            context: "formatting"
          });
        case "bbbb":
        default:
          return o.dayPeriod(a, {
            width: "wide",
            context: "formatting"
          }) || o.dayPeriod(a, {
            width: "abbreviated",
            context: "formatting"
          }) || o.dayPeriod(a, {
            width: "narrow",
            context: "formatting"
          });
      }
    }
  }, {
    key: "set",
    value: function(a, i, o) {
      return a.setUTCHours(di(o), 0, 0, 0), a;
    }
  }]), n;
}($e);
function Gn(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Gn = function(n) {
    return typeof n;
  } : Gn = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, Gn(e);
}
function gv(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function kl(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function bv(e, t, n) {
  return t && kl(e.prototype, t), n && kl(e, n), e;
}
function _v(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && vo(e, t);
}
function vo(e, t) {
  return vo = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, vo(e, t);
}
function wv(e) {
  var t = $v();
  return function() {
    var r = Er(e), a;
    if (t) {
      var i = Er(this).constructor;
      a = Reflect.construct(r, arguments, i);
    } else
      a = r.apply(this, arguments);
    return Ov(this, a);
  };
}
function Ov(e, t) {
  return t && (Gn(t) === "object" || typeof t == "function") ? t : go(e);
}
function go(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function $v() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function Er(e) {
  return Er = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Er(e);
}
function Sl(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var kv = /* @__PURE__ */ function(e) {
  _v(n, e);
  var t = wv(n);
  function n() {
    var r;
    gv(this, n);
    for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++)
      i[o] = arguments[o];
    return r = t.call.apply(t, [this].concat(i)), Sl(go(r), "priority", 80), Sl(go(r), "incompatibleTokens", ["a", "b", "t", "T"]), r;
  }
  return bv(n, [{
    key: "parse",
    value: function(a, i, o) {
      switch (i) {
        case "B":
        case "BB":
        case "BBB":
          return o.dayPeriod(a, {
            width: "abbreviated",
            context: "formatting"
          }) || o.dayPeriod(a, {
            width: "narrow",
            context: "formatting"
          });
        case "BBBBB":
          return o.dayPeriod(a, {
            width: "narrow",
            context: "formatting"
          });
        case "BBBB":
        default:
          return o.dayPeriod(a, {
            width: "wide",
            context: "formatting"
          }) || o.dayPeriod(a, {
            width: "abbreviated",
            context: "formatting"
          }) || o.dayPeriod(a, {
            width: "narrow",
            context: "formatting"
          });
      }
    }
  }, {
    key: "set",
    value: function(a, i, o) {
      return a.setUTCHours(di(o), 0, 0, 0), a;
    }
  }]), n;
}($e);
function Qn(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Qn = function(n) {
    return typeof n;
  } : Qn = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, Qn(e);
}
function Sv(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Pl(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function Pv(e, t, n) {
  return t && Pl(e.prototype, t), n && Pl(e, n), e;
}
function Tv(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && bo(e, t);
}
function bo(e, t) {
  return bo = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, bo(e, t);
}
function Dv(e) {
  var t = Cv();
  return function() {
    var r = Ar(e), a;
    if (t) {
      var i = Ar(this).constructor;
      a = Reflect.construct(r, arguments, i);
    } else
      a = r.apply(this, arguments);
    return Rv(this, a);
  };
}
function Rv(e, t) {
  return t && (Qn(t) === "object" || typeof t == "function") ? t : _o(e);
}
function _o(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Cv() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function Ar(e) {
  return Ar = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Ar(e);
}
function Tl(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var xv = /* @__PURE__ */ function(e) {
  Tv(n, e);
  var t = Dv(n);
  function n() {
    var r;
    Sv(this, n);
    for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++)
      i[o] = arguments[o];
    return r = t.call.apply(t, [this].concat(i)), Tl(_o(r), "priority", 70), Tl(_o(r), "incompatibleTokens", ["H", "K", "k", "t", "T"]), r;
  }
  return Pv(n, [{
    key: "parse",
    value: function(a, i, o) {
      switch (i) {
        case "h":
          return Ae(Le.hour12h, a);
        case "ho":
          return o.ordinalNumber(a, {
            unit: "hour"
          });
        default:
          return Be(i.length, a);
      }
    }
  }, {
    key: "validate",
    value: function(a, i) {
      return i >= 1 && i <= 12;
    }
  }, {
    key: "set",
    value: function(a, i, o) {
      var l = a.getUTCHours() >= 12;
      return l && o < 12 ? a.setUTCHours(o + 12, 0, 0, 0) : !l && o === 12 ? a.setUTCHours(0, 0, 0, 0) : a.setUTCHours(o, 0, 0, 0), a;
    }
  }]), n;
}($e);
function Jn(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Jn = function(n) {
    return typeof n;
  } : Jn = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, Jn(e);
}
function Mv(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Dl(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function Nv(e, t, n) {
  return t && Dl(e.prototype, t), n && Dl(e, n), e;
}
function Ev(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && wo(e, t);
}
function wo(e, t) {
  return wo = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, wo(e, t);
}
function Av(e) {
  var t = Bv();
  return function() {
    var r = Ir(e), a;
    if (t) {
      var i = Ir(this).constructor;
      a = Reflect.construct(r, arguments, i);
    } else
      a = r.apply(this, arguments);
    return Iv(this, a);
  };
}
function Iv(e, t) {
  return t && (Jn(t) === "object" || typeof t == "function") ? t : Oo(e);
}
function Oo(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Bv() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function Ir(e) {
  return Ir = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Ir(e);
}
function Rl(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Vv = /* @__PURE__ */ function(e) {
  Ev(n, e);
  var t = Av(n);
  function n() {
    var r;
    Mv(this, n);
    for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++)
      i[o] = arguments[o];
    return r = t.call.apply(t, [this].concat(i)), Rl(Oo(r), "priority", 70), Rl(Oo(r), "incompatibleTokens", ["a", "b", "h", "K", "k", "t", "T"]), r;
  }
  return Nv(n, [{
    key: "parse",
    value: function(a, i, o) {
      switch (i) {
        case "H":
          return Ae(Le.hour23h, a);
        case "Ho":
          return o.ordinalNumber(a, {
            unit: "hour"
          });
        default:
          return Be(i.length, a);
      }
    }
  }, {
    key: "validate",
    value: function(a, i) {
      return i >= 0 && i <= 23;
    }
  }, {
    key: "set",
    value: function(a, i, o) {
      return a.setUTCHours(o, 0, 0, 0), a;
    }
  }]), n;
}($e);
function Zn(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Zn = function(n) {
    return typeof n;
  } : Zn = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, Zn(e);
}
function Lv(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Cl(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function Fv(e, t, n) {
  return t && Cl(e.prototype, t), n && Cl(e, n), e;
}
function Uv(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && $o(e, t);
}
function $o(e, t) {
  return $o = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, $o(e, t);
}
function Yv(e) {
  var t = Hv();
  return function() {
    var r = Br(e), a;
    if (t) {
      var i = Br(this).constructor;
      a = Reflect.construct(r, arguments, i);
    } else
      a = r.apply(this, arguments);
    return jv(this, a);
  };
}
function jv(e, t) {
  return t && (Zn(t) === "object" || typeof t == "function") ? t : ko(e);
}
function ko(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Hv() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function Br(e) {
  return Br = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Br(e);
}
function xl(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Wv = /* @__PURE__ */ function(e) {
  Uv(n, e);
  var t = Yv(n);
  function n() {
    var r;
    Lv(this, n);
    for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++)
      i[o] = arguments[o];
    return r = t.call.apply(t, [this].concat(i)), xl(ko(r), "priority", 70), xl(ko(r), "incompatibleTokens", ["h", "H", "k", "t", "T"]), r;
  }
  return Fv(n, [{
    key: "parse",
    value: function(a, i, o) {
      switch (i) {
        case "K":
          return Ae(Le.hour11h, a);
        case "Ko":
          return o.ordinalNumber(a, {
            unit: "hour"
          });
        default:
          return Be(i.length, a);
      }
    }
  }, {
    key: "validate",
    value: function(a, i) {
      return i >= 0 && i <= 11;
    }
  }, {
    key: "set",
    value: function(a, i, o) {
      var l = a.getUTCHours() >= 12;
      return l && o < 12 ? a.setUTCHours(o + 12, 0, 0, 0) : a.setUTCHours(o, 0, 0, 0), a;
    }
  }]), n;
}($e);
function Kn(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Kn = function(n) {
    return typeof n;
  } : Kn = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, Kn(e);
}
function qv(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Ml(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function zv(e, t, n) {
  return t && Ml(e.prototype, t), n && Ml(e, n), e;
}
function Gv(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && So(e, t);
}
function So(e, t) {
  return So = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, So(e, t);
}
function Qv(e) {
  var t = Zv();
  return function() {
    var r = Vr(e), a;
    if (t) {
      var i = Vr(this).constructor;
      a = Reflect.construct(r, arguments, i);
    } else
      a = r.apply(this, arguments);
    return Jv(this, a);
  };
}
function Jv(e, t) {
  return t && (Kn(t) === "object" || typeof t == "function") ? t : Po(e);
}
function Po(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Zv() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function Vr(e) {
  return Vr = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Vr(e);
}
function Nl(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Kv = /* @__PURE__ */ function(e) {
  Gv(n, e);
  var t = Qv(n);
  function n() {
    var r;
    qv(this, n);
    for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++)
      i[o] = arguments[o];
    return r = t.call.apply(t, [this].concat(i)), Nl(Po(r), "priority", 70), Nl(Po(r), "incompatibleTokens", ["a", "b", "h", "H", "K", "t", "T"]), r;
  }
  return zv(n, [{
    key: "parse",
    value: function(a, i, o) {
      switch (i) {
        case "k":
          return Ae(Le.hour24h, a);
        case "ko":
          return o.ordinalNumber(a, {
            unit: "hour"
          });
        default:
          return Be(i.length, a);
      }
    }
  }, {
    key: "validate",
    value: function(a, i) {
      return i >= 1 && i <= 24;
    }
  }, {
    key: "set",
    value: function(a, i, o) {
      var l = o <= 24 ? o % 24 : o;
      return a.setUTCHours(l, 0, 0, 0), a;
    }
  }]), n;
}($e);
function Xn(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Xn = function(n) {
    return typeof n;
  } : Xn = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, Xn(e);
}
function Xv(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function El(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function e0(e, t, n) {
  return t && El(e.prototype, t), n && El(e, n), e;
}
function t0(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && To(e, t);
}
function To(e, t) {
  return To = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, To(e, t);
}
function n0(e) {
  var t = a0();
  return function() {
    var r = Lr(e), a;
    if (t) {
      var i = Lr(this).constructor;
      a = Reflect.construct(r, arguments, i);
    } else
      a = r.apply(this, arguments);
    return r0(this, a);
  };
}
function r0(e, t) {
  return t && (Xn(t) === "object" || typeof t == "function") ? t : Do(e);
}
function Do(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function a0() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function Lr(e) {
  return Lr = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Lr(e);
}
function Al(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var o0 = /* @__PURE__ */ function(e) {
  t0(n, e);
  var t = n0(n);
  function n() {
    var r;
    Xv(this, n);
    for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++)
      i[o] = arguments[o];
    return r = t.call.apply(t, [this].concat(i)), Al(Do(r), "priority", 60), Al(Do(r), "incompatibleTokens", ["t", "T"]), r;
  }
  return e0(n, [{
    key: "parse",
    value: function(a, i, o) {
      switch (i) {
        case "m":
          return Ae(Le.minute, a);
        case "mo":
          return o.ordinalNumber(a, {
            unit: "minute"
          });
        default:
          return Be(i.length, a);
      }
    }
  }, {
    key: "validate",
    value: function(a, i) {
      return i >= 0 && i <= 59;
    }
  }, {
    key: "set",
    value: function(a, i, o) {
      return a.setUTCMinutes(o, 0, 0), a;
    }
  }]), n;
}($e);
function er(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? er = function(n) {
    return typeof n;
  } : er = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, er(e);
}
function i0(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Il(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function l0(e, t, n) {
  return t && Il(e.prototype, t), n && Il(e, n), e;
}
function u0(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && Ro(e, t);
}
function Ro(e, t) {
  return Ro = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, Ro(e, t);
}
function s0(e) {
  var t = f0();
  return function() {
    var r = Fr(e), a;
    if (t) {
      var i = Fr(this).constructor;
      a = Reflect.construct(r, arguments, i);
    } else
      a = r.apply(this, arguments);
    return c0(this, a);
  };
}
function c0(e, t) {
  return t && (er(t) === "object" || typeof t == "function") ? t : Co(e);
}
function Co(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function f0() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function Fr(e) {
  return Fr = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Fr(e);
}
function Bl(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var d0 = /* @__PURE__ */ function(e) {
  u0(n, e);
  var t = s0(n);
  function n() {
    var r;
    i0(this, n);
    for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++)
      i[o] = arguments[o];
    return r = t.call.apply(t, [this].concat(i)), Bl(Co(r), "priority", 50), Bl(Co(r), "incompatibleTokens", ["t", "T"]), r;
  }
  return l0(n, [{
    key: "parse",
    value: function(a, i, o) {
      switch (i) {
        case "s":
          return Ae(Le.second, a);
        case "so":
          return o.ordinalNumber(a, {
            unit: "second"
          });
        default:
          return Be(i.length, a);
      }
    }
  }, {
    key: "validate",
    value: function(a, i) {
      return i >= 0 && i <= 59;
    }
  }, {
    key: "set",
    value: function(a, i, o) {
      return a.setUTCSeconds(o, 0), a;
    }
  }]), n;
}($e);
function tr(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? tr = function(n) {
    return typeof n;
  } : tr = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, tr(e);
}
function p0(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Vl(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function h0(e, t, n) {
  return t && Vl(e.prototype, t), n && Vl(e, n), e;
}
function m0(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && xo(e, t);
}
function xo(e, t) {
  return xo = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, xo(e, t);
}
function y0(e) {
  var t = g0();
  return function() {
    var r = Ur(e), a;
    if (t) {
      var i = Ur(this).constructor;
      a = Reflect.construct(r, arguments, i);
    } else
      a = r.apply(this, arguments);
    return v0(this, a);
  };
}
function v0(e, t) {
  return t && (tr(t) === "object" || typeof t == "function") ? t : Mo(e);
}
function Mo(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function g0() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function Ur(e) {
  return Ur = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Ur(e);
}
function Ll(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var b0 = /* @__PURE__ */ function(e) {
  m0(n, e);
  var t = y0(n);
  function n() {
    var r;
    p0(this, n);
    for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++)
      i[o] = arguments[o];
    return r = t.call.apply(t, [this].concat(i)), Ll(Mo(r), "priority", 30), Ll(Mo(r), "incompatibleTokens", ["t", "T"]), r;
  }
  return h0(n, [{
    key: "parse",
    value: function(a, i) {
      var o = function(f) {
        return Math.floor(f * Math.pow(10, -i.length + 3));
      };
      return Fe(Be(i.length, a), o);
    }
  }, {
    key: "set",
    value: function(a, i, o) {
      return a.setUTCMilliseconds(o), a;
    }
  }]), n;
}($e);
function nr(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? nr = function(n) {
    return typeof n;
  } : nr = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, nr(e);
}
function _0(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Fl(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function w0(e, t, n) {
  return t && Fl(e.prototype, t), n && Fl(e, n), e;
}
function O0(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && No(e, t);
}
function No(e, t) {
  return No = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, No(e, t);
}
function $0(e) {
  var t = S0();
  return function() {
    var r = Yr(e), a;
    if (t) {
      var i = Yr(this).constructor;
      a = Reflect.construct(r, arguments, i);
    } else
      a = r.apply(this, arguments);
    return k0(this, a);
  };
}
function k0(e, t) {
  return t && (nr(t) === "object" || typeof t == "function") ? t : Eo(e);
}
function Eo(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function S0() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function Yr(e) {
  return Yr = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Yr(e);
}
function Ul(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var P0 = /* @__PURE__ */ function(e) {
  O0(n, e);
  var t = $0(n);
  function n() {
    var r;
    _0(this, n);
    for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++)
      i[o] = arguments[o];
    return r = t.call.apply(t, [this].concat(i)), Ul(Eo(r), "priority", 10), Ul(Eo(r), "incompatibleTokens", ["t", "T", "x"]), r;
  }
  return w0(n, [{
    key: "parse",
    value: function(a, i) {
      switch (i) {
        case "X":
          return pt(dt.basicOptionalMinutes, a);
        case "XX":
          return pt(dt.basic, a);
        case "XXXX":
          return pt(dt.basicOptionalSeconds, a);
        case "XXXXX":
          return pt(dt.extendedOptionalSeconds, a);
        case "XXX":
        default:
          return pt(dt.extended, a);
      }
    }
  }, {
    key: "set",
    value: function(a, i, o) {
      return i.timestampIsSet ? a : new Date(a.getTime() - o);
    }
  }]), n;
}($e);
function rr(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? rr = function(n) {
    return typeof n;
  } : rr = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, rr(e);
}
function T0(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Yl(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function D0(e, t, n) {
  return t && Yl(e.prototype, t), n && Yl(e, n), e;
}
function R0(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && Ao(e, t);
}
function Ao(e, t) {
  return Ao = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, Ao(e, t);
}
function C0(e) {
  var t = M0();
  return function() {
    var r = jr(e), a;
    if (t) {
      var i = jr(this).constructor;
      a = Reflect.construct(r, arguments, i);
    } else
      a = r.apply(this, arguments);
    return x0(this, a);
  };
}
function x0(e, t) {
  return t && (rr(t) === "object" || typeof t == "function") ? t : Io(e);
}
function Io(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function M0() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function jr(e) {
  return jr = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, jr(e);
}
function jl(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var N0 = /* @__PURE__ */ function(e) {
  R0(n, e);
  var t = C0(n);
  function n() {
    var r;
    T0(this, n);
    for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++)
      i[o] = arguments[o];
    return r = t.call.apply(t, [this].concat(i)), jl(Io(r), "priority", 10), jl(Io(r), "incompatibleTokens", ["t", "T", "X"]), r;
  }
  return D0(n, [{
    key: "parse",
    value: function(a, i) {
      switch (i) {
        case "x":
          return pt(dt.basicOptionalMinutes, a);
        case "xx":
          return pt(dt.basic, a);
        case "xxxx":
          return pt(dt.basicOptionalSeconds, a);
        case "xxxxx":
          return pt(dt.extendedOptionalSeconds, a);
        case "xxx":
        default:
          return pt(dt.extended, a);
      }
    }
  }, {
    key: "set",
    value: function(a, i, o) {
      return i.timestampIsSet ? a : new Date(a.getTime() - o);
    }
  }]), n;
}($e);
function ar(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? ar = function(n) {
    return typeof n;
  } : ar = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, ar(e);
}
function E0(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Hl(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function A0(e, t, n) {
  return t && Hl(e.prototype, t), n && Hl(e, n), e;
}
function I0(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && Bo(e, t);
}
function Bo(e, t) {
  return Bo = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, Bo(e, t);
}
function B0(e) {
  var t = L0();
  return function() {
    var r = Hr(e), a;
    if (t) {
      var i = Hr(this).constructor;
      a = Reflect.construct(r, arguments, i);
    } else
      a = r.apply(this, arguments);
    return V0(this, a);
  };
}
function V0(e, t) {
  return t && (ar(t) === "object" || typeof t == "function") ? t : Vo(e);
}
function Vo(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function L0() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function Hr(e) {
  return Hr = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Hr(e);
}
function Wl(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var F0 = /* @__PURE__ */ function(e) {
  I0(n, e);
  var t = B0(n);
  function n() {
    var r;
    E0(this, n);
    for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++)
      i[o] = arguments[o];
    return r = t.call.apply(t, [this].concat(i)), Wl(Vo(r), "priority", 40), Wl(Vo(r), "incompatibleTokens", "*"), r;
  }
  return A0(n, [{
    key: "parse",
    value: function(a) {
      return Gu(a);
    }
  }, {
    key: "set",
    value: function(a, i, o) {
      return [new Date(o * 1e3), {
        timestampIsSet: !0
      }];
    }
  }]), n;
}($e);
function or(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? or = function(n) {
    return typeof n;
  } : or = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, or(e);
}
function U0(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function ql(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function Y0(e, t, n) {
  return t && ql(e.prototype, t), n && ql(e, n), e;
}
function j0(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && Lo(e, t);
}
function Lo(e, t) {
  return Lo = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, Lo(e, t);
}
function H0(e) {
  var t = q0();
  return function() {
    var r = Wr(e), a;
    if (t) {
      var i = Wr(this).constructor;
      a = Reflect.construct(r, arguments, i);
    } else
      a = r.apply(this, arguments);
    return W0(this, a);
  };
}
function W0(e, t) {
  return t && (or(t) === "object" || typeof t == "function") ? t : Fo(e);
}
function Fo(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function q0() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function Wr(e) {
  return Wr = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Wr(e);
}
function zl(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var z0 = /* @__PURE__ */ function(e) {
  j0(n, e);
  var t = H0(n);
  function n() {
    var r;
    U0(this, n);
    for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++)
      i[o] = arguments[o];
    return r = t.call.apply(t, [this].concat(i)), zl(Fo(r), "priority", 20), zl(Fo(r), "incompatibleTokens", "*"), r;
  }
  return Y0(n, [{
    key: "parse",
    value: function(a) {
      return Gu(a);
    }
  }, {
    key: "set",
    value: function(a, i, o) {
      return [new Date(o), {
        timestampIsSet: !0
      }];
    }
  }]), n;
}($e), G0 = {
  G: new Gh(),
  y: new tm(),
  Y: new um(),
  R: new mm(),
  u: new Om(),
  Q: new Rm(),
  q: new Im(),
  M: new jm(),
  L: new Jm(),
  w: new ay(),
  I: new dy(),
  d: new wy(),
  D: new Dy(),
  E: new Ay(),
  e: new Yy(),
  c: new Qy(),
  i: new rv(),
  a: new cv(),
  b: new vv(),
  B: new kv(),
  h: new xv(),
  H: new Vv(),
  K: new Wv(),
  k: new Kv(),
  m: new o0(),
  s: new d0(),
  S: new b0(),
  X: new P0(),
  x: new N0(),
  t: new F0(),
  T: new z0()
};
function ir(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? ir = function(n) {
    return typeof n;
  } : ir = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, ir(e);
}
function Gl(e, t) {
  var n;
  if (typeof Symbol > "u" || e[Symbol.iterator] == null) {
    if (Array.isArray(e) || (n = Q0(e)) || t && e && typeof e.length == "number") {
      n && (e = n);
      var r = 0, a = function() {
      };
      return { s: a, n: function() {
        return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] };
      }, e: function(u) {
        throw u;
      }, f: a };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var i = !0, o = !1, l;
  return { s: function() {
    n = e[Symbol.iterator]();
  }, n: function() {
    var u = n.next();
    return i = u.done, u;
  }, e: function(u) {
    o = !0, l = u;
  }, f: function() {
    try {
      !i && n.return != null && n.return();
    } finally {
      if (o)
        throw l;
    }
  } };
}
function Q0(e, t) {
  if (!!e) {
    if (typeof e == "string")
      return Ql(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set")
      return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return Ql(e, t);
  }
}
function Ql(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++)
    r[n] = e[n];
  return r;
}
var J0 = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, Z0 = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, K0 = /^'([^]*?)'?$/, X0 = /''/g, eg = /\S/, tg = /[a-zA-Z]/;
function Uo(e, t, n, r) {
  var a, i, o, l, f, u, d, s, h, v, g, P, D, B, C, H, K, X;
  oe(3, arguments);
  var m = String(e), N = String(t), Y = St(), Q = (a = (i = r == null ? void 0 : r.locale) !== null && i !== void 0 ? i : Y.locale) !== null && a !== void 0 ? a : ju;
  if (!Q.match)
    throw new RangeError("locale must contain match property");
  var re = ce((o = (l = (f = (u = r == null ? void 0 : r.firstWeekContainsDate) !== null && u !== void 0 ? u : r == null || (d = r.locale) === null || d === void 0 || (s = d.options) === null || s === void 0 ? void 0 : s.firstWeekContainsDate) !== null && f !== void 0 ? f : Y.firstWeekContainsDate) !== null && l !== void 0 ? l : (h = Y.locale) === null || h === void 0 || (v = h.options) === null || v === void 0 ? void 0 : v.firstWeekContainsDate) !== null && o !== void 0 ? o : 1);
  if (!(re >= 1 && re <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var W = ce((g = (P = (D = (B = r == null ? void 0 : r.weekStartsOn) !== null && B !== void 0 ? B : r == null || (C = r.locale) === null || C === void 0 || (H = C.options) === null || H === void 0 ? void 0 : H.weekStartsOn) !== null && D !== void 0 ? D : Y.weekStartsOn) !== null && P !== void 0 ? P : (K = Y.locale) === null || K === void 0 || (X = K.options) === null || X === void 0 ? void 0 : X.weekStartsOn) !== null && g !== void 0 ? g : 0);
  if (!(W >= 0 && W <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  if (N === "")
    return m === "" ? de(n) : new Date(NaN);
  var ee = {
    firstWeekContainsDate: re,
    weekStartsOn: W,
    locale: Q
  }, R = [new Lh()], w = N.match(Z0).map(function(Oe) {
    var ve = Oe[0];
    if (ve in Ca) {
      var ie = Ca[ve];
      return ie(Oe, Q.formatLong);
    }
    return Oe;
  }).join("").match(J0), A = [], I = Gl(w), c;
  try {
    var k = function() {
      var ve = c.value;
      !(r != null && r.useAdditionalWeekYearTokens) && Yu(ve) && dr(ve, N, e), !(r != null && r.useAdditionalDayOfYearTokens) && Uu(ve) && dr(ve, N, e);
      var ie = ve[0], at = G0[ie];
      if (at) {
        var he = at.incompatibleTokens;
        if (Array.isArray(he)) {
          var Pe = A.find(function(ct) {
            return he.includes(ct.token) || ct.token === ie;
          });
          if (Pe)
            throw new RangeError("The format string mustn't contain `".concat(Pe.fullToken, "` and `").concat(ve, "` at the same time"));
        } else if (at.incompatibleTokens === "*" && A.length > 0)
          throw new RangeError("The format string mustn't contain `".concat(ve, "` and any other token at the same time"));
        A.push({
          token: ie,
          fullToken: ve
        });
        var Ie = at.run(m, ve, Q.match, ee);
        if (!Ie)
          return {
            v: new Date(NaN)
          };
        R.push(Ie.setter), m = Ie.rest;
      } else {
        if (ie.match(tg))
          throw new RangeError("Format string contains an unescaped latin alphabet character `" + ie + "`");
        if (ve === "''" ? ve = "'" : ie === "'" && (ve = ng(ve)), m.indexOf(ve) === 0)
          m = m.slice(ve.length);
        else
          return {
            v: new Date(NaN)
          };
      }
    };
    for (I.s(); !(c = I.n()).done; ) {
      var x = k();
      if (ir(x) === "object")
        return x.v;
    }
  } catch (Oe) {
    I.e(Oe);
  } finally {
    I.f();
  }
  if (m.length > 0 && eg.test(m))
    return new Date(NaN);
  var q = R.map(function(Oe) {
    return Oe.priority;
  }).sort(function(Oe, ve) {
    return ve - Oe;
  }).filter(function(Oe, ve, ie) {
    return ie.indexOf(Oe) === ve;
  }).map(function(Oe) {
    return R.filter(function(ve) {
      return ve.priority === Oe;
    }).sort(function(ve, ie) {
      return ie.subPriority - ve.subPriority;
    });
  }).map(function(Oe) {
    return Oe[0];
  }), G = de(n);
  if (isNaN(G.getTime()))
    return new Date(NaN);
  var T = Iu(G, fr(G)), $ = {}, j = Gl(q), me;
  try {
    for (j.s(); !(me = j.n()).done; ) {
      var Se = me.value;
      if (!Se.validate(T, ee))
        return new Date(NaN);
      var xe = Se.set(T, $, ee);
      Array.isArray(xe) ? (T = xe[0], Ch($, xe[1])) : T = xe;
    }
  } catch (Oe) {
    j.e(Oe);
  } finally {
    j.f();
  }
  return T;
}
function ng(e) {
  return e.match(K0)[1].replace(X0, "'");
}
function rg(e, t) {
  oe(2, arguments);
  var n = ce(t);
  return kt(e, -n);
}
function ag(e, t) {
  var n;
  oe(1, arguments);
  var r = ce((n = t == null ? void 0 : t.additionalDigits) !== null && n !== void 0 ? n : 2);
  if (r !== 2 && r !== 1 && r !== 0)
    throw new RangeError("additionalDigits must be 0, 1 or 2");
  if (!(typeof e == "string" || Object.prototype.toString.call(e) === "[object String]"))
    return new Date(NaN);
  var a = ug(e), i;
  if (a.date) {
    var o = sg(a.date, r);
    i = cg(o.restDateString, o.year);
  }
  if (!i || isNaN(i.getTime()))
    return new Date(NaN);
  var l = i.getTime(), f = 0, u;
  if (a.time && (f = fg(a.time), isNaN(f)))
    return new Date(NaN);
  if (a.timezone) {
    if (u = dg(a.timezone), isNaN(u))
      return new Date(NaN);
  } else {
    var d = new Date(l + f), s = new Date(0);
    return s.setFullYear(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate()), s.setHours(d.getUTCHours(), d.getUTCMinutes(), d.getUTCSeconds(), d.getUTCMilliseconds()), s;
  }
  return new Date(l + f + u);
}
var gn = {
  dateTimeDelimiter: /[T ]/,
  timeZoneDelimiter: /[Z ]/i,
  timezone: /([Z+-].*)$/
}, og = /^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/, ig = /^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/, lg = /^([+-])(\d{2})(?::?(\d{2}))?$/;
function ug(e) {
  var t = {}, n = e.split(gn.dateTimeDelimiter), r;
  if (n.length > 2)
    return t;
  if (/:/.test(n[0]) ? r = n[0] : (t.date = n[0], r = n[1], gn.timeZoneDelimiter.test(t.date) && (t.date = e.split(gn.timeZoneDelimiter)[0], r = e.substr(t.date.length, e.length))), r) {
    var a = gn.timezone.exec(r);
    a ? (t.time = r.replace(a[1], ""), t.timezone = a[1]) : t.time = r;
  }
  return t;
}
function sg(e, t) {
  var n = new RegExp("^(?:(\\d{4}|[+-]\\d{" + (4 + t) + "})|(\\d{2}|[+-]\\d{" + (2 + t) + "})$)"), r = e.match(n);
  if (!r)
    return {
      year: NaN,
      restDateString: ""
    };
  var a = r[1] ? parseInt(r[1]) : null, i = r[2] ? parseInt(r[2]) : null;
  return {
    year: i === null ? a : i * 100,
    restDateString: e.slice((r[1] || r[2]).length)
  };
}
function cg(e, t) {
  if (t === null)
    return new Date(NaN);
  var n = e.match(og);
  if (!n)
    return new Date(NaN);
  var r = !!n[4], a = Xt(n[1]), i = Xt(n[2]) - 1, o = Xt(n[3]), l = Xt(n[4]), f = Xt(n[5]) - 1;
  if (r)
    return vg(t, l, f) ? pg(t, l, f) : new Date(NaN);
  var u = new Date(0);
  return !mg(t, i, o) || !yg(t, a) ? new Date(NaN) : (u.setUTCFullYear(t, i, Math.max(a, o)), u);
}
function Xt(e) {
  return e ? parseInt(e) : 1;
}
function fg(e) {
  var t = e.match(ig);
  if (!t)
    return NaN;
  var n = da(t[1]), r = da(t[2]), a = da(t[3]);
  return gg(n, r, a) ? n * ii + r * oi + a * 1e3 : NaN;
}
function da(e) {
  return e && parseFloat(e.replace(",", ".")) || 0;
}
function dg(e) {
  if (e === "Z")
    return 0;
  var t = e.match(lg);
  if (!t)
    return 0;
  var n = t[1] === "+" ? -1 : 1, r = parseInt(t[2]), a = t[3] && parseInt(t[3]) || 0;
  return bg(r, a) ? n * (r * ii + a * oi) : NaN;
}
function pg(e, t, n) {
  var r = new Date(0);
  r.setUTCFullYear(e, 0, 4);
  var a = r.getUTCDay() || 7, i = (t - 1) * 7 + n + 1 - a;
  return r.setUTCDate(r.getUTCDate() + i), r;
}
var hg = [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function Zu(e) {
  return e % 400 === 0 || e % 4 === 0 && e % 100 !== 0;
}
function mg(e, t, n) {
  return t >= 0 && t <= 11 && n >= 1 && n <= (hg[t] || (Zu(e) ? 29 : 28));
}
function yg(e, t) {
  return t >= 1 && t <= (Zu(e) ? 366 : 365);
}
function vg(e, t, n) {
  return t >= 1 && t <= 53 && n >= 0 && n <= 6;
}
function gg(e, t, n) {
  return e === 24 ? t === 0 && n === 0 : n >= 0 && n < 60 && t >= 0 && t < 60 && e >= 0 && e < 25;
}
function bg(e, t) {
  return t >= 0 && t <= 59;
}
function an(e, t) {
  oe(2, arguments);
  var n = de(e), r = ce(t), a = n.getFullYear(), i = n.getDate(), o = new Date(0);
  o.setFullYear(a, r, 15), o.setHours(0, 0, 0, 0);
  var l = Mh(o);
  return n.setMonth(r, Math.min(i, l)), n;
}
function lr(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? lr = function(n) {
    return typeof n;
  } : lr = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, lr(e);
}
function Ke(e, t) {
  if (oe(2, arguments), lr(t) !== "object" || t === null)
    throw new RangeError("values parameter must be an object");
  var n = de(e);
  return isNaN(n.getTime()) ? new Date(NaN) : (t.year != null && n.setFullYear(t.year), t.month != null && (n = an(n, t.month)), t.date != null && n.setDate(ce(t.date)), t.hours != null && n.setHours(ce(t.hours)), t.minutes != null && n.setMinutes(ce(t.minutes)), t.seconds != null && n.setSeconds(ce(t.seconds)), t.milliseconds != null && n.setMilliseconds(ce(t.milliseconds)), n);
}
function Ku(e, t) {
  oe(2, arguments);
  var n = de(e), r = ce(t);
  return n.setHours(r), n;
}
function hi(e, t) {
  oe(2, arguments);
  var n = de(e), r = ce(t);
  return n.setMilliseconds(r), n;
}
function Xu(e, t) {
  oe(2, arguments);
  var n = de(e), r = ce(t);
  return n.setMinutes(r), n;
}
function es(e, t) {
  oe(2, arguments);
  var n = de(e), r = ce(t);
  return n.setSeconds(r), n;
}
function It(e, t) {
  oe(2, arguments);
  var n = de(e), r = ce(t);
  return isNaN(n.getTime()) ? new Date(NaN) : (n.setFullYear(r), n);
}
function Yt(e, t) {
  oe(2, arguments);
  var n = ce(t);
  return ht(e, -n);
}
function ur(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? ur = function(n) {
    return typeof n;
  } : ur = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, ur(e);
}
function _g(e, t) {
  if (oe(2, arguments), !t || ur(t) !== "object")
    return new Date(NaN);
  var n = t.years ? ce(t.years) : 0, r = t.months ? ce(t.months) : 0, a = t.weeks ? ce(t.weeks) : 0, i = t.days ? ce(t.days) : 0, o = t.hours ? ce(t.hours) : 0, l = t.minutes ? ce(t.minutes) : 0, f = t.seconds ? ce(t.seconds) : 0, u = Yt(e, r + n * 12), d = rg(u, i + a * 7), s = l + o * 60, h = f + s * 60, v = h * 1e3, g = new Date(d.getTime() - v);
  return g;
}
function wg(e, t) {
  oe(2, arguments);
  var n = ce(t);
  return Eu(e, -n);
}
const Vt = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, a] of t)
    n[r] = a;
  return n;
}, Og = {}, $g = {
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  width: "32",
  height: "32",
  viewBox: "0 0 32 32",
  class: "dp__icon"
}, kg = /* @__PURE__ */ O("path", { d: "M29.333 8c0-2.208-1.792-4-4-4h-18.667c-2.208 0-4 1.792-4 4v18.667c0 2.208 1.792 4 4 4h18.667c2.208 0 4-1.792 4-4v-18.667zM26.667 8v18.667c0 0.736-0.597 1.333-1.333 1.333 0 0-18.667 0-18.667 0-0.736 0-1.333-0.597-1.333-1.333 0 0 0-18.667 0-18.667 0-0.736 0.597-1.333 1.333-1.333 0 0 18.667 0 18.667 0 0.736 0 1.333 0.597 1.333 1.333z" }, null, -1), Sg = /* @__PURE__ */ O("path", { d: "M20 2.667v5.333c0 0.736 0.597 1.333 1.333 1.333s1.333-0.597 1.333-1.333v-5.333c0-0.736-0.597-1.333-1.333-1.333s-1.333 0.597-1.333 1.333z" }, null, -1), Pg = /* @__PURE__ */ O("path", { d: "M9.333 2.667v5.333c0 0.736 0.597 1.333 1.333 1.333s1.333-0.597 1.333-1.333v-5.333c0-0.736-0.597-1.333-1.333-1.333s-1.333 0.597-1.333 1.333z" }, null, -1), Tg = /* @__PURE__ */ O("path", { d: "M4 14.667h24c0.736 0 1.333-0.597 1.333-1.333s-0.597-1.333-1.333-1.333h-24c-0.736 0-1.333 0.597-1.333 1.333s0.597 1.333 1.333 1.333z" }, null, -1), Dg = [
  kg,
  Sg,
  Pg,
  Tg
];
function Rg(e, t) {
  return p(), b("svg", $g, Dg);
}
const Jr = /* @__PURE__ */ Vt(Og, [["render", Rg]]), Cg = {}, xg = {
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  width: "32",
  height: "32",
  viewBox: "0 0 32 32",
  class: "dp__icon"
}, Mg = /* @__PURE__ */ O("path", { d: "M23.057 7.057l-16 16c-0.52 0.52-0.52 1.365 0 1.885s1.365 0.52 1.885 0l16-16c0.52-0.52 0.52-1.365 0-1.885s-1.365-0.52-1.885 0z" }, null, -1), Ng = /* @__PURE__ */ O("path", { d: "M7.057 8.943l16 16c0.52 0.52 1.365 0.52 1.885 0s0.52-1.365 0-1.885l-16-16c-0.52-0.52-1.365-0.52-1.885 0s-0.52 1.365 0 1.885z" }, null, -1), Eg = [
  Mg,
  Ng
];
function Ag(e, t) {
  return p(), b("svg", xg, Eg);
}
const Ig = /* @__PURE__ */ Vt(Cg, [["render", Ag]]), Bg = {}, Vg = {
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  width: "32",
  height: "32",
  viewBox: "0 0 32 32",
  class: "dp__icon"
}, Lg = /* @__PURE__ */ O("path", { d: "M20.943 23.057l-7.057-7.057c0 0 7.057-7.057 7.057-7.057 0.52-0.52 0.52-1.365 0-1.885s-1.365-0.52-1.885 0l-8 8c-0.521 0.521-0.521 1.365 0 1.885l8 8c0.52 0.52 1.365 0.52 1.885 0s0.52-1.365 0-1.885z" }, null, -1), Fg = [
  Lg
];
function Ug(e, t) {
  return p(), b("svg", Vg, Fg);
}
const Jl = /* @__PURE__ */ Vt(Bg, [["render", Ug]]), Yg = {}, jg = {
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  width: "32",
  height: "32",
  viewBox: "0 0 32 32",
  class: "dp__icon"
}, Hg = /* @__PURE__ */ O("path", { d: "M12.943 24.943l8-8c0.521-0.521 0.521-1.365 0-1.885l-8-8c-0.52-0.52-1.365-0.52-1.885 0s-0.52 1.365 0 1.885l7.057 7.057c0 0-7.057 7.057-7.057 7.057-0.52 0.52-0.52 1.365 0 1.885s1.365 0.52 1.885 0z" }, null, -1), Wg = [
  Hg
];
function qg(e, t) {
  return p(), b("svg", jg, Wg);
}
const Zl = /* @__PURE__ */ Vt(Yg, [["render", qg]]), zg = {}, Gg = {
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  width: "32",
  height: "32",
  viewBox: "0 0 32 32",
  class: "dp__icon"
}, Qg = /* @__PURE__ */ O("path", { d: "M16 1.333c-8.095 0-14.667 6.572-14.667 14.667s6.572 14.667 14.667 14.667c8.095 0 14.667-6.572 14.667-14.667s-6.572-14.667-14.667-14.667zM16 4c6.623 0 12 5.377 12 12s-5.377 12-12 12c-6.623 0-12-5.377-12-12s5.377-12 12-12z" }, null, -1), Jg = /* @__PURE__ */ O("path", { d: "M14.667 8v8c0 0.505 0.285 0.967 0.737 1.193l5.333 2.667c0.658 0.329 1.46 0.062 1.789-0.596s0.062-1.46-0.596-1.789l-4.596-2.298c0 0 0-7.176 0-7.176 0-0.736-0.597-1.333-1.333-1.333s-1.333 0.597-1.333 1.333z" }, null, -1), Zg = [
  Qg,
  Jg
];
function Kg(e, t) {
  return p(), b("svg", Gg, Zg);
}
const ts = /* @__PURE__ */ Vt(zg, [["render", Kg]]), Xg = {}, eb = {
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  width: "32",
  height: "32",
  viewBox: "0 0 32 32",
  class: "dp__icon"
}, tb = /* @__PURE__ */ O("path", { d: "M24.943 19.057l-8-8c-0.521-0.521-1.365-0.521-1.885 0l-8 8c-0.52 0.52-0.52 1.365 0 1.885s1.365 0.52 1.885 0l7.057-7.057c0 0 7.057 7.057 7.057 7.057 0.52 0.52 1.365 0.52 1.885 0s0.52-1.365 0-1.885z" }, null, -1), nb = [
  tb
];
function rb(e, t) {
  return p(), b("svg", eb, nb);
}
const ns = /* @__PURE__ */ Vt(Xg, [["render", rb]]), ab = {}, ob = {
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  width: "32",
  height: "32",
  viewBox: "0 0 32 32",
  class: "dp__icon"
}, ib = /* @__PURE__ */ O("path", { d: "M7.057 12.943l8 8c0.521 0.521 1.365 0.521 1.885 0l8-8c0.52-0.52 0.52-1.365 0-1.885s-1.365-0.52-1.885 0l-7.057 7.057c0 0-7.057-7.057-7.057-7.057-0.52-0.52-1.365-0.52-1.885 0s-0.52 1.365 0 1.885z" }, null, -1), lb = [
  ib
];
function ub(e, t) {
  return p(), b("svg", ob, lb);
}
const rs = /* @__PURE__ */ Vt(ab, [["render", ub]]), Kl = (e, t) => {
  const n = Uo(e, t.slice(0, e.length), new Date());
  return nn(n) && Au(n) ? n : null;
}, sb = (e, t) => {
  if (typeof t == "string")
    return Kl(e, t);
  if (Array.isArray(t)) {
    let n = null;
    for (const r of t)
      if (n = Kl(e, r), n)
        break;
    return n;
  }
  return typeof t == "function" ? t(e) : null;
}, L = (e) => e ? new Date(e) : new Date(), cb = (e, t) => {
  if (t) {
    const r = (e.getMonth() + 1).toString().padStart(2, "0"), a = e.getDate().toString().padStart(2, "0"), i = e.getHours().toString().padStart(2, "0"), o = e.getMinutes().toString().padStart(2, "0");
    return `${e.getFullYear()}-${r}-${a}T${i}:${o}:00.000Z`;
  }
  const n = Date.UTC(
    e.getUTCFullYear(),
    e.getUTCMonth(),
    e.getUTCDate(),
    e.getUTCHours(),
    e.getUTCMinutes(),
    e.getUTCSeconds()
  );
  return new Date(n).toISOString();
}, mt = (e) => {
  let t = L(JSON.parse(JSON.stringify(e)));
  return t = Ku(t, 0), t = Xu(t, 0), t = es(t, 0), t = hi(t, 0), t;
}, lt = (e, t, n, r) => {
  let a = e ? L(e) : L();
  return (t || t === 0) && (a = Ku(a, +t)), (n || n === 0) && (a = Xu(a, +n)), (r || r === 0) && (a = es(a, +r)), hi(a, 0);
}, Ge = (e, t) => !e || !t ? !1 : si(mt(e), mt(t)), Me = (e, t) => !e || !t ? !1 : Hu(mt(e), mt(t)), et = (e, t) => !e || !t ? !1 : ui(mt(e), mt(t)), as = (e, t, n) => e && e[0] && e[1] ? et(n, e[0]) && Ge(n, e[1]) : e && e[0] && t ? et(n, e[0]) && Ge(n, t) || Ge(n, e[0]) && et(n, t) : !1, en = cn({
  menuFocused: !1,
  shiftKeyInMenu: !1
}), os = () => {
  const e = (n) => {
    en.menuFocused = n;
  }, t = (n) => {
    en.shiftKeyInMenu !== n && (en.shiftKeyInMenu = n);
  };
  return {
    control: J(() => ({ shiftKeyInMenu: en.shiftKeyInMenu, menuFocused: en.menuFocused })),
    setMenuFocused: e,
    setShiftKey: t
  };
};
function mi(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Yo = { exports: {} };
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = n;
  function n(r) {
    if (r === null || r === !0 || r === !1)
      return NaN;
    var a = Number(r);
    return isNaN(a) ? a : a < 0 ? Math.ceil(a) : Math.floor(a);
  }
  e.exports = t.default;
})(Yo, Yo.exports);
const fb = /* @__PURE__ */ mi(Yo.exports);
var jo = { exports: {} };
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = n;
  function n(r) {
    var a = new Date(Date.UTC(r.getFullYear(), r.getMonth(), r.getDate(), r.getHours(), r.getMinutes(), r.getSeconds(), r.getMilliseconds()));
    return a.setUTCFullYear(r.getFullYear()), r.getTime() - a.getTime();
  }
  e.exports = t.default;
})(jo, jo.exports);
const Xl = /* @__PURE__ */ mi(jo.exports);
function db(e, t) {
  var n = yb(t);
  return n.formatToParts ? hb(n, e) : mb(n, e);
}
var pb = {
  year: 0,
  month: 1,
  day: 2,
  hour: 3,
  minute: 4,
  second: 5
};
function hb(e, t) {
  try {
    for (var n = e.formatToParts(t), r = [], a = 0; a < n.length; a++) {
      var i = pb[n[a].type];
      i >= 0 && (r[i] = parseInt(n[a].value, 10));
    }
    return r;
  } catch (o) {
    if (o instanceof RangeError)
      return [NaN];
    throw o;
  }
}
function mb(e, t) {
  var n = e.format(t).replace(/\u200E/g, ""), r = /(\d+)\/(\d+)\/(\d+),? (\d+):(\d+):(\d+)/.exec(n);
  return [r[3], r[1], r[2], r[4], r[5], r[6]];
}
var pa = {};
function yb(e) {
  if (!pa[e]) {
    var t = new Intl.DateTimeFormat("en-US", {
      hour12: !1,
      timeZone: "America/New_York",
      year: "numeric",
      month: "numeric",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"
    }).format(new Date("2014-06-25T04:00:00.123Z")), n = t === "06/25/2014, 00:00:00" || t === "\u200E06\u200E/\u200E25\u200E/\u200E2014\u200E \u200E00\u200E:\u200E00\u200E:\u200E00";
    pa[e] = n ? new Intl.DateTimeFormat("en-US", {
      hour12: !1,
      timeZone: e,
      year: "numeric",
      month: "numeric",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"
    }) : new Intl.DateTimeFormat("en-US", {
      hourCycle: "h23",
      timeZone: e,
      year: "numeric",
      month: "numeric",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"
    });
  }
  return pa[e];
}
function yi(e, t, n, r, a, i, o) {
  var l = new Date(0);
  return l.setUTCFullYear(e, t, n), l.setUTCHours(r, a, i, o), l;
}
var eu = 36e5, vb = 6e4, ha = {
  timezone: /([Z+-].*)$/,
  timezoneZ: /^(Z)$/,
  timezoneHH: /^([+-]\d{2})$/,
  timezoneHHMM: /^([+-]\d{2}):?(\d{2})$/
};
function vi(e, t, n) {
  var r, a;
  if (e === "" || (r = ha.timezoneZ.exec(e), r))
    return 0;
  var i;
  if (r = ha.timezoneHH.exec(e), r)
    return i = parseInt(r[1], 10), tu(i) ? -(i * eu) : NaN;
  if (r = ha.timezoneHHMM.exec(e), r) {
    i = parseInt(r[1], 10);
    var o = parseInt(r[2], 10);
    return tu(i, o) ? (a = Math.abs(i) * eu + o * vb, i > 0 ? -a : a) : NaN;
  }
  if (_b(e)) {
    t = new Date(t || Date.now());
    var l = n ? t : gb(t), f = Ho(l, e), u = n ? f : bb(t, f, e);
    return -u;
  }
  return NaN;
}
function gb(e) {
  return yi(
    e.getFullYear(),
    e.getMonth(),
    e.getDate(),
    e.getHours(),
    e.getMinutes(),
    e.getSeconds(),
    e.getMilliseconds()
  );
}
function Ho(e, t) {
  var n = db(e, t), r = yi(
    n[0],
    n[1] - 1,
    n[2],
    n[3] % 24,
    n[4],
    n[5],
    0
  ).getTime(), a = e.getTime(), i = a % 1e3;
  return a -= i >= 0 ? i : 1e3 + i, r - a;
}
function bb(e, t, n) {
  var r = e.getTime(), a = r - t, i = Ho(new Date(a), n);
  if (t === i)
    return t;
  a -= i - t;
  var o = Ho(new Date(a), n);
  return i === o ? i : Math.max(i, o);
}
function tu(e, t) {
  return -23 <= e && e <= 23 && (t == null || 0 <= t && t <= 59);
}
var nu = {};
function _b(e) {
  if (nu[e])
    return !0;
  try {
    return new Intl.DateTimeFormat(void 0, { timeZone: e }), nu[e] = !0, !0;
  } catch {
    return !1;
  }
}
var is = /(Z|[+-]\d{2}(?::?\d{2})?| UTC| [a-zA-Z]+\/[a-zA-Z_]+(?:\/[a-zA-Z_]+)?)$/, ma = 36e5, ru = 6e4, wb = 2, Xe = {
  dateTimePattern: /^([0-9W+-]+)(T| )(.*)/,
  datePattern: /^([0-9W+-]+)(.*)/,
  plainTime: /:/,
  YY: /^(\d{2})$/,
  YYY: [
    /^([+-]\d{2})$/,
    /^([+-]\d{3})$/,
    /^([+-]\d{4})$/
  ],
  YYYY: /^(\d{4})/,
  YYYYY: [
    /^([+-]\d{4})/,
    /^([+-]\d{5})/,
    /^([+-]\d{6})/
  ],
  MM: /^-(\d{2})$/,
  DDD: /^-?(\d{3})$/,
  MMDD: /^-?(\d{2})-?(\d{2})$/,
  Www: /^-?W(\d{2})$/,
  WwwD: /^-?W(\d{2})-?(\d{1})$/,
  HH: /^(\d{2}([.,]\d*)?)$/,
  HHMM: /^(\d{2}):?(\d{2}([.,]\d*)?)$/,
  HHMMSS: /^(\d{2}):?(\d{2}):?(\d{2}([.,]\d*)?)$/,
  timeZone: is
};
function Wo(e, t) {
  if (arguments.length < 1)
    throw new TypeError("1 argument required, but only " + arguments.length + " present");
  if (e === null)
    return new Date(NaN);
  var n = t || {}, r = n.additionalDigits == null ? wb : fb(n.additionalDigits);
  if (r !== 2 && r !== 1 && r !== 0)
    throw new RangeError("additionalDigits must be 0, 1 or 2");
  if (e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]")
    return new Date(e.getTime());
  if (typeof e == "number" || Object.prototype.toString.call(e) === "[object Number]")
    return new Date(e);
  if (!(typeof e == "string" || Object.prototype.toString.call(e) === "[object String]"))
    return new Date(NaN);
  var a = Ob(e), i = $b(a.date, r), o = i.year, l = i.restDateString, f = kb(l, o);
  if (isNaN(f))
    return new Date(NaN);
  if (f) {
    var u = f.getTime(), d = 0, s;
    if (a.time && (d = Sb(a.time), isNaN(d)))
      return new Date(NaN);
    if (a.timeZone || n.timeZone) {
      if (s = vi(a.timeZone || n.timeZone, new Date(u + d)), isNaN(s))
        return new Date(NaN);
    } else
      s = Xl(new Date(u + d)), s = Xl(new Date(u + d + s));
    return new Date(u + d + s);
  } else
    return new Date(NaN);
}
function Ob(e) {
  var t = {}, n = Xe.dateTimePattern.exec(e), r;
  if (n ? (t.date = n[1], r = n[3]) : (n = Xe.datePattern.exec(e), n ? (t.date = n[1], r = n[2]) : (t.date = null, r = e)), r) {
    var a = Xe.timeZone.exec(r);
    a ? (t.time = r.replace(a[1], ""), t.timeZone = a[1].trim()) : t.time = r;
  }
  return t;
}
function $b(e, t) {
  var n = Xe.YYY[t], r = Xe.YYYYY[t], a;
  if (a = Xe.YYYY.exec(e) || r.exec(e), a) {
    var i = a[1];
    return {
      year: parseInt(i, 10),
      restDateString: e.slice(i.length)
    };
  }
  if (a = Xe.YY.exec(e) || n.exec(e), a) {
    var o = a[1];
    return {
      year: parseInt(o, 10) * 100,
      restDateString: e.slice(o.length)
    };
  }
  return {
    year: null
  };
}
function kb(e, t) {
  if (t === null)
    return null;
  var n, r, a, i;
  if (e.length === 0)
    return r = new Date(0), r.setUTCFullYear(t), r;
  if (n = Xe.MM.exec(e), n)
    return r = new Date(0), a = parseInt(n[1], 10) - 1, ou(t, a) ? (r.setUTCFullYear(t, a), r) : new Date(NaN);
  if (n = Xe.DDD.exec(e), n) {
    r = new Date(0);
    var o = parseInt(n[1], 10);
    return Db(t, o) ? (r.setUTCFullYear(t, 0, o), r) : new Date(NaN);
  }
  if (n = Xe.MMDD.exec(e), n) {
    r = new Date(0), a = parseInt(n[1], 10) - 1;
    var l = parseInt(n[2], 10);
    return ou(t, a, l) ? (r.setUTCFullYear(t, a, l), r) : new Date(NaN);
  }
  if (n = Xe.Www.exec(e), n)
    return i = parseInt(n[1], 10) - 1, iu(t, i) ? au(t, i) : new Date(NaN);
  if (n = Xe.WwwD.exec(e), n) {
    i = parseInt(n[1], 10) - 1;
    var f = parseInt(n[2], 10) - 1;
    return iu(t, i, f) ? au(t, i, f) : new Date(NaN);
  }
  return null;
}
function Sb(e) {
  var t, n, r;
  if (t = Xe.HH.exec(e), t)
    return n = parseFloat(t[1].replace(",", ".")), ya(n) ? n % 24 * ma : NaN;
  if (t = Xe.HHMM.exec(e), t)
    return n = parseInt(t[1], 10), r = parseFloat(t[2].replace(",", ".")), ya(n, r) ? n % 24 * ma + r * ru : NaN;
  if (t = Xe.HHMMSS.exec(e), t) {
    n = parseInt(t[1], 10), r = parseInt(t[2], 10);
    var a = parseFloat(t[3].replace(",", "."));
    return ya(n, r, a) ? n % 24 * ma + r * ru + a * 1e3 : NaN;
  }
  return null;
}
function au(e, t, n) {
  t = t || 0, n = n || 0;
  var r = new Date(0);
  r.setUTCFullYear(e, 0, 4);
  var a = r.getUTCDay() || 7, i = t * 7 + n + 1 - a;
  return r.setUTCDate(r.getUTCDate() + i), r;
}
var Pb = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], Tb = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function ls(e) {
  return e % 400 === 0 || e % 4 === 0 && e % 100 !== 0;
}
function ou(e, t, n) {
  if (t < 0 || t > 11)
    return !1;
  if (n != null) {
    if (n < 1)
      return !1;
    var r = ls(e);
    if (r && n > Tb[t] || !r && n > Pb[t])
      return !1;
  }
  return !0;
}
function Db(e, t) {
  if (t < 1)
    return !1;
  var n = ls(e);
  return !(n && t > 366 || !n && t > 365);
}
function iu(e, t, n) {
  return !(t < 0 || t > 52 || n != null && (n < 0 || n > 6));
}
function ya(e, t, n) {
  return !(e != null && (e < 0 || e >= 25) || t != null && (t < 0 || t >= 60) || n != null && (n < 0 || n >= 60));
}
var qo = { exports: {} }, zo = { exports: {} };
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = n;
  function n(r, a) {
    if (r == null)
      throw new TypeError("assign requires that input parameter not be null or undefined");
    for (var i in a)
      Object.prototype.hasOwnProperty.call(a, i) && (r[i] = a[i]);
    return r;
  }
  e.exports = t.default;
})(zo, zo.exports);
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = a;
  var n = r(zo.exports);
  function r(i) {
    return i && i.__esModule ? i : { default: i };
  }
  function a(i) {
    return (0, n.default)({}, i);
  }
  e.exports = t.default;
})(qo, qo.exports);
const Rb = /* @__PURE__ */ mi(qo.exports);
function Cb(e, t, n) {
  var r = Wo(e, n), a = vi(t, r, !0), i = new Date(r.getTime() - a), o = new Date(0);
  return o.setFullYear(i.getUTCFullYear(), i.getUTCMonth(), i.getUTCDate()), o.setHours(i.getUTCHours(), i.getUTCMinutes(), i.getUTCSeconds(), i.getUTCMilliseconds()), o;
}
function xb(e, t, n) {
  if (typeof e == "string" && !e.match(is)) {
    var r = Rb(n);
    return r.timeZone = t, Wo(e, r);
  }
  var a = Wo(e, n), i = yi(
    a.getFullYear(),
    a.getMonth(),
    a.getDate(),
    a.getHours(),
    a.getMinutes(),
    a.getSeconds(),
    a.getMilliseconds()
  ).getTime(), o = vi(t, new Date(i));
  return new Date(i + o);
}
const Mb = (e, t = 3) => {
  const n = [];
  for (let r = 0; r < e.length; r += t)
    n.push([e[r], e[r + 1], e[r + 2]]);
  return n;
}, Nb = (e, t) => {
  const n = [1, 2, 3, 4, 5, 6, 7].map((i) => new Intl.DateTimeFormat(e, { weekday: "short", timeZone: "UTC" }).format(new Date(`2017-01-0${i}T00:00:00+00:00`)).slice(0, 2)), r = n.slice(0, t), a = n.slice(t + 1, n.length);
  return [n[t]].concat(...a).concat(...r);
}, Eb = (e) => {
  const t = [];
  for (let n = +e[0]; n <= +e[1]; n++)
    t.push({ value: +n, text: `${n}` });
  return t;
}, Ab = (e, t) => {
  const n = new Intl.DateTimeFormat(e, { month: t, timeZone: "UTC" });
  return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((r) => {
    const a = r < 10 ? `0${r}` : r;
    return new Date(`2017-${a}-01T00:00:00+00:00`);
  }).map((r, a) => ({
    text: n.format(r),
    value: a
  }));
}, Ib = (e) => [12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11][e], We = (e) => {
  var n;
  const t = _(e);
  return (n = t == null ? void 0 : t.$el) != null ? n : t;
}, Bb = (e) => Object.assign({ type: "dot" }, e), us = (e) => Array.isArray(e) ? !!e[0] && !!e[1] : !1, qr = {
  prop: (e) => `"${e}" prop must be enabled!`,
  dateArr: (e) => `You need to use array as "model-value" binding in order to support "${e}"`
}, qe = (e) => e, lu = (e) => Object.assign(
  {
    menuAppear: "dp-menu-appear",
    open: "dp-slide-down",
    close: "dp-slide-up",
    next: "calendar-next",
    previous: "calendar-prev",
    vNext: "dp-slide-up",
    vPrevious: "dp-slide-down"
  },
  e
), Vb = (e) => Object.assign(
  {
    toggleOverlay: "Toggle overlay",
    menu: "Datepicker menu",
    input: "Datepicker input",
    calendarWrap: "Calendar wrapper",
    calendarDays: "Calendar days",
    openTimePicker: "Open time picker",
    closeTimePicker: "Close time Picker",
    incrementValue: (t) => `Increment ${t}`,
    decrementValue: (t) => `Decrement ${t}`,
    openTpOverlay: (t) => `Open ${t} overlay`,
    amPmButton: "Switch AM/PM mode",
    openYearsOverlay: "Open years overlay",
    openMonthsOverlay: "Open months overlay",
    nextMonth: "Next month",
    prevMonth: "Previous month",
    day: () => ""
  },
  e
), Lb = (e) => e === null ? 0 : typeof e == "boolean" ? e ? 2 : 0 : +e >= 2 ? +e : 2, Fb = (e, t, n) => e || (typeof n == "string" ? n : t), Ub = (e) => typeof e == "boolean" ? e ? lu({}) : !1 : lu(e), Yb = () => ({
  enterSubmit: !0,
  tabSubmit: !0,
  openMenu: !0,
  rangeSeparator: " - "
}), jb = (e) => Object.assign({ months: [], years: [], times: { hours: [], minutes: [], seconds: [] } }, e), it = (e) => {
  const t = () => {
    if (e.partialRange)
      return null;
    throw new Error(qr.prop("partial-range"));
  }, n = J(() => ({
    ariaLabels: Vb(e.ariaLabels),
    textInputOptions: Object.assign(Yb(), e.textInputOptions),
    multiCalendars: Lb(e.multiCalendars),
    previewFormat: Fb(e.previewFormat, e.format, i()),
    filters: jb(e.filters),
    transitions: Ub(e.transitions),
    startTime: h()
  })), r = (c) => {
    if (e.range)
      return c();
    throw new Error(qr.prop("range"));
  }, a = () => {
    const c = e.enableSeconds ? ":ss" : "";
    return e.is24 ? `HH:mm${c}` : `hh:mm${c} aa`;
  }, i = () => e.format ? e.format : e.monthPicker ? "MM/yyyy" : e.timePicker ? a() : e.weekPicker ? "MM/dd/yyyy" : e.yearPicker ? "yyyy" : e.enableTimePicker ? `MM/dd/yyyy, ${a()}` : "MM/dd/yyyy", o = (c, k) => {
    if (typeof e.format == "function")
      return e.format(c);
    const x = k || i(), q = e.formatLocale ? { locale: e.formatLocale } : void 0;
    return Array.isArray(c) ? `${rn(c[0], x, q)} ${e.modelAuto && !c[1] ? "" : n.value.textInputOptions.rangeSeparator || "-"} ${c[1] ? rn(c[1], x, q) : ""}` : rn(c, x, q);
  }, l = (c) => e.timezone ? Cb(c, e.timezone) : c, f = (c) => e.timezone ? xb(c, e.timezone) : c, u = J(() => (c) => {
    var k;
    return (k = e.hideNavigation) == null ? void 0 : k.includes(c);
  }), d = (c) => {
    const k = e.maxDate ? et(l(c), l(L(e.maxDate))) : !1, x = e.minDate ? Ge(l(c), l(L(e.minDate))) : !1, q = B(c, e.disabledDates), G = n.value.filters.months.map((Se) => +Se).includes(Ne(c)), T = e.disabledWeekDays.length ? e.disabledWeekDays.some((Se) => +Se === xh(c)) : !1, $ = e.allowedDates.length ? !e.allowedDates.some((Se) => Me(l(L(Se)), l(c))) : !1, j = Ee(c), me = j < +e.yearRange[0] || j > +e.yearRange[1];
    return !(k || x || q || G || me || T || $);
  }, s = (c) => {
    const k = {
      hours: vt(L()),
      minutes: gt(L()),
      seconds: Ht(L())
    };
    return Object.assign(k, c);
  }, h = () => e.range ? e.startTime && Array.isArray(e.startTime) ? [s(e.startTime[0]), s(e.startTime[1])] : null : e.startTime && !Array.isArray(e.startTime) ? s(e.startTime) : null, v = (c) => !d(c), g = (c) => Array.isArray(c) ? nn(c[0]) && (c[1] ? nn(c[1]) : !0) : c ? nn(c) : !1, P = (c) => c instanceof Date ? c : ag(c), D = (c) => {
    const k = Ra(l(c), { weekStartsOn: +e.weekStart }), x = Pp(l(c), { weekStartsOn: +e.weekStart });
    return [k, x];
  }, B = (c, k) => Array.isArray(k) ? k.some((x) => Me(l(L(x)), l(c))) : k(c), C = (c, k, x) => {
    let q = c ? L(c) : L();
    return (k || k === 0) && (q = an(q, k)), x && (q = It(q, x)), q;
  }, H = (c) => Ke(L(), { hours: vt(c), minutes: gt(c), seconds: Ht(c) }), K = (c) => Ke(L(), {
    hours: +c.hours || 0,
    minutes: +c.minutes || 0,
    seconds: +c.seconds || 0
  }), X = (c, k, x, q) => {
    if (!c)
      return !0;
    if (q) {
      const G = x === "max" ? si(c, k) : ui(c, k), T = { seconds: 0, milliseconds: 0 };
      return G || Hu(Ke(c, T), Ke(k, T));
    }
    return x === "max" ? c.getTime() <= k.getTime() : c.getTime() >= k.getTime();
  }, m = () => !e.enableTimePicker || e.monthPicker || e.yearPicker || e.ignoreTimeValidation, N = (c) => Array.isArray(c) ? [c[0] ? H(c[0]) : null, c[1] ? H(c[1]) : null] : H(c), Y = (c) => {
    const k = e.maxTime ? K(e.maxTime) : L(e.maxDate);
    return Array.isArray(c) ? X(c[0], k, "max", !!e.maxDate) && X(c[1], k, "max", !!e.maxDate) : X(c, k, "max", !!e.maxDate);
  }, Q = (c, k) => {
    const x = e.minTime ? K(e.minTime) : L(e.minDate);
    return Array.isArray(c) ? X(c[0], x, "min", !!e.minDate) && X(c[1], x, "min", !!e.minDate) && k : X(c, x, "min", !!e.minDate) && k;
  }, re = (c) => {
    let k = !0;
    if (!c || m())
      return !0;
    const x = !e.minDate && !e.maxDate ? N(c) : c;
    return (e.maxTime || e.maxDate) && (k = Y(qe(x))), (e.minTime || e.minDate) && (k = Q(qe(x), k)), k;
  }, W = (c, k) => {
    const x = L(JSON.parse(JSON.stringify(c))), q = [];
    for (let G = 0; G < 7; G++) {
      const T = kt(x, G), $ = Ne(T) !== k;
      q.push({
        text: e.hideOffsetDates && $ ? "" : T.getDate(),
        value: T,
        current: !$,
        classData: {}
      });
    }
    return q;
  }, ee = (c, k) => {
    const x = [], q = L(l(new Date(k, c))), G = L(l(new Date(k, c + 1, 0))), T = Ra(q, { weekStartsOn: e.weekStart }), $ = (j) => {
      const me = W(j, c);
      if (x.push({ days: me }), !x[x.length - 1].days.some(
        (Se) => Me(mt(Se.value), mt(G))
      )) {
        const Se = kt(j, 7);
        $(Se);
      }
    };
    if ($(T), e.sixWeeks && x.length < 6) {
      const j = 6 - x.length;
      for (let me = 1; me <= j; me++) {
        const Se = x[x.length - 1], xe = Se.days[Se.days.length - 1], Oe = W(kt(xe.value, 1), Ne(q));
        x.push({ days: Oe });
      }
    }
    return x;
  }, R = (c, k, x) => [Ke(L(c), { date: 1 }), Ke(L(), { month: k, year: x, date: 1 })], w = (c, k) => Ge(...R(e.minDate, c, k)) || Me(...R(e.minDate, c, k)), A = (c, k) => et(...R(e.maxDate, c, k)) || Me(...R(e.maxDate, c, k)), I = (c, k, x) => {
    let q = !1;
    return e.maxDate && x && A(c, k) && (q = !0), e.minDate && !x && w(c, k) && (q = !0), q;
  };
  return {
    checkPartialRangeValue: t,
    checkRangeEnabled: r,
    getZonedDate: l,
    getZonedToUtc: f,
    formatDate: o,
    getDefaultPattern: i,
    validateDate: d,
    getDefaultStartTime: h,
    isDisabled: v,
    isValidDate: g,
    sanitizeDate: P,
    getWeekFromDate: D,
    matchDate: B,
    setDateMonthOrYear: C,
    isValidTime: re,
    getCalendarDays: ee,
    validateMonthYearInRange: (c, k, x, q) => {
      let G = !1;
      return q ? e.minDate && e.maxDate ? G = I(c, k, x) : (e.minDate && w(c, k) || e.maxDate && A(c, k)) && (G = !0) : G = !0, G;
    },
    validateMaxDate: A,
    validateMinDate: w,
    defaults: n,
    hideNavigationButtons: u
  };
}, Re = cn({
  monthYear: [],
  calendar: [],
  time: [],
  actionRow: [],
  selectionGrid: [],
  timePicker: {
    0: [],
    1: []
  },
  monthPicker: []
}), va = F(null), bn = F(!1), ga = F(!1), ba = F(!1), _a = F(!1), Ze = F(0), He = F(0), Pt = () => {
  const e = J(() => bn.value ? [...Re.selectionGrid, Re.actionRow].filter((s) => s.length) : ga.value ? [
    ...Re.timePicker[0],
    ...Re.timePicker[1],
    _a.value ? [] : [va.value],
    Re.actionRow
  ].filter((s) => s.length) : ba.value ? [...Re.monthPicker, Re.actionRow] : [Re.monthYear, ...Re.calendar, Re.time, Re.actionRow].filter((s) => s.length)), t = (s) => {
    Ze.value = s ? Ze.value + 1 : Ze.value - 1;
    let h = null;
    e.value[He.value] && (h = e.value[He.value][Ze.value]), h || (Ze.value = s ? Ze.value - 1 : Ze.value + 1);
  }, n = (s) => {
    He.value === 0 && !s || He.value === e.value.length && s || (He.value = s ? He.value + 1 : He.value - 1, e.value[He.value] ? e.value[He.value] && !e.value[He.value][Ze.value] && Ze.value !== 0 && (Ze.value = e.value[He.value].length - 1) : He.value = s ? He.value - 1 : He.value + 1);
  }, r = (s) => {
    let h = null;
    e.value[He.value] && (h = e.value[He.value][Ze.value]), h ? h.focus({ preventScroll: !bn.value }) : Ze.value = s ? Ze.value - 1 : Ze.value + 1;
  }, a = () => {
    t(!0), r(!0);
  }, i = () => {
    t(!1), r(!1);
  }, o = () => {
    n(!1), r(!0);
  }, l = () => {
    n(!0), r(!0);
  }, f = (s, h) => {
    Re[h] = s;
  }, u = (s, h) => {
    Re[h] = s;
  }, d = () => {
    Ze.value = 0, He.value = 0;
  };
  return {
    buildMatrix: f,
    buildMultiLevelMatrix: u,
    setTimePickerBackRef: (s) => {
      va.value = s;
    },
    setSelectionGrid: (s) => {
      bn.value = s, d(), s || (Re.selectionGrid = []);
    },
    setTimePicker: (s, h = !1) => {
      ga.value = s, _a.value = h, d(), s || (Re.timePicker[0] = [], Re.timePicker[1] = []);
    },
    setTimePickerElements: (s, h = 0) => {
      Re.timePicker[h] = s;
    },
    arrowRight: a,
    arrowLeft: i,
    arrowUp: o,
    arrowDown: l,
    clearArrowNav: () => {
      Re.monthYear = [], Re.calendar = [], Re.time = [], Re.actionRow = [], Re.selectionGrid = [], Re.timePicker[0] = [], Re.timePicker[1] = [], bn.value = !1, ga.value = !1, _a.value = !1, ba.value = !1, d(), va.value = null;
    },
    setMonthPicker: (s) => {
      ba.value = s, d();
    },
    refSets: Re
  };
}, uu = (e) => Array.isArray(e), Ct = (e) => Array.isArray(e), su = (e) => Array.isArray(e) && e.length === 2, Hb = (e, t, n, r) => {
  const {
    getDefaultStartTime: a,
    isDisabled: i,
    sanitizeDate: o,
    getWeekFromDate: l,
    setDateMonthOrYear: f,
    validateMonthYearInRange: u,
    defaults: d
  } = it(e), s = J({
    get: () => e.internalModelValue,
    set: (y) => {
      !e.readonly && !e.disabled && t("update:internal-model-value", y);
    }
  }), h = F([]);
  Wt(s, () => H());
  const v = F([{ month: Ne(L()), year: Ee(L()) }]), g = cn({
    hours: e.range ? [vt(L()), vt(L())] : vt(L()),
    minutes: e.range ? [gt(L()), gt(L())] : gt(L()),
    seconds: e.range ? [0, 0] : 0
  }), P = J(
    () => (y) => v.value[y] ? v.value[y].month : 0
  ), D = J(
    () => (y) => v.value[y] ? v.value[y].year : 0
  ), B = (y, V, le) => {
    v.value[y].month = V === null ? v.value[y].month : V, v.value[y].year = le === null ? v.value[y].year : le;
  }, C = (y, V) => {
    g[y] = V;
  };
  tt(() => {
    s.value || (e.startDate && (B(0, Ne(L(e.startDate)), Ee(L(e.startDate))), d.value.multiCalendars && yt(0)), d.value.startTime && R()), H(!0);
  });
  const H = (y = !1) => {
    if (s.value)
      return Array.isArray(s.value) ? Y(y) : X(s.value);
    if (e.timePicker)
      return Q();
    if (e.monthPicker && !e.range)
      return re();
    if (e.yearPicker && !e.range)
      return W();
    if (d.value.multiCalendars)
      return K(L(), y);
  }, K = (y, V = !1) => {
    if ((!d.value.multiCalendars || !e.multiStatic || V) && B(0, Ne(y), Ee(y)), d.value.multiCalendars)
      for (let le = 1; le <= d.value.multiCalendars; le++) {
        const pe = Ke(L(), { month: P.value(le - 1), year: D.value(le - 1) }), Ve = Nu(pe, { months: 1 });
        v.value[le] = { month: Ne(Ve), year: Ee(Ve) };
      }
  }, X = (y) => {
    K(y), C("hours", vt(y)), C("minutes", gt(y)), C("seconds", Ht(y));
  }, m = (y, V) => {
    K(y[0], V);
    const le = (pe) => [
      pe(y[0]),
      y[1] ? pe(y[1]) : pe(L())
    ];
    C("hours", le(vt)), C("minutes", le(gt)), C("seconds", le(Ht));
  }, N = (y, V) => {
    if (e.range && !e.multiDates)
      return m(y, V);
    if (e.multiDates) {
      const le = y[y.length - 1];
      return X(le);
    }
  }, Y = (y) => {
    const V = s.value;
    N(V, y), d.value.multiCalendars && e.multiCalendarsSolo && A();
  }, Q = () => {
    if (R(), !e.range)
      s.value = lt(L(), g.hours, g.minutes, ee());
    else {
      const y = g.hours, V = g.minutes;
      s.value = [
        lt(L(), y[0], V[0], ee()),
        lt(L(), y[1], V[1], ee(!1))
      ];
    }
  }, re = () => {
    s.value = f(L(), P.value(0), D.value(0));
  }, W = () => {
    s.value = L();
  }, ee = (y = !0) => e.enableSeconds ? Array.isArray(g.seconds) ? y ? g.seconds[0] : g.seconds[1] : g.seconds : 0, R = () => {
    const y = a();
    if (y) {
      const V = Array.isArray(y), le = V ? [+y[0].hours, +y[1].hours] : +y.hours, pe = V ? [+y[0].minutes, +y[1].minutes] : +y.minutes, Ve = V ? [+y[0].seconds, +y[1].seconds] : +y.seconds;
      C("hours", le), C("minutes", pe), e.enableSeconds && C("seconds", Ve);
    }
  }, w = () => Array.isArray(s.value) && s.value.length ? s.value[s.value.length - 1] : null, A = () => {
    if (Array.isArray(s.value) && s.value.length === 2) {
      const y = L(
        L(s.value[1] ? s.value[1] : ht(s.value[0], 1))
      ), [V, le] = [Ne(s.value[0]), Ee(s.value[0])], [pe, Ve] = [Ne(s.value[1]), Ee(s.value[1])];
      (V !== pe || V === pe && le !== Ve) && e.multiCalendarsSolo && B(1, Ne(y), Ee(y));
    }
  }, I = (y) => {
    const V = ht(y, 1);
    return { month: Ne(V), year: Ee(V) };
  }, c = (y) => {
    const V = Ne(L(y)), le = Ee(L(y));
    if (B(0, V, le), d.value.multiCalendars > 0)
      for (let pe = 1; pe < d.value.multiCalendars; pe++) {
        const Ve = I(
          Ke(L(y), { year: P.value(pe - 1), month: D.value(pe - 1) })
        );
        B(pe, Ve.month, Ve.year);
      }
  }, k = (y) => {
    if (s.value && Array.isArray(s.value))
      if (s.value.some((V) => Me(y, V))) {
        const V = s.value.filter((le) => !Me(le, y));
        s.value = V.length ? V : null;
      } else
        (e.multiDatesLimit && +e.multiDatesLimit > s.value.length || !e.multiDatesLimit) && s.value.push(y);
    else
      s.value = [y];
  }, x = (y, V) => {
    const le = et(y, V) ? V : y, pe = et(V, y) ? V : y;
    return Ii({ start: le, end: pe });
  }, q = (y) => {
    if (Array.isArray(s.value) && s.value[0]) {
      const V = kp(y, s.value[0]), le = x(s.value[0], y), pe = le.length === 1 ? 0 : le.filter((ft) => i(ft)).length, Ve = Math.abs(V) - pe;
      if (e.minRange && e.maxRange)
        return Ve >= +e.minRange && Ve <= +e.maxRange;
      if (e.minRange)
        return Ve >= +e.minRange;
      if (e.maxRange)
        return Ve <= +e.maxRange;
    }
    return !0;
  }, G = (y) => Array.isArray(s.value) && s.value.length === 2 ? e.fixedStart && (et(y, s.value[0]) || Me(y, s.value[0])) ? [s.value[0], y] : e.fixedEnd && (Ge(y, s.value[1]) || Me(y, s.value[1])) ? [y, s.value[1]] : s.value : [], T = () => {
    e.autoApply && t("auto-apply");
  }, $ = () => {
    e.autoApply && t("select-date");
  }, j = (y) => !Ii({ start: y[0], end: y[1] }).some((V) => i(V)), me = (y) => (s.value = l(L(y.value)), T()), Se = (y) => {
    const V = lt(L(y.value), g.hours, g.minutes, ee());
    e.multiDates ? k(V) : s.value = V, n(), T();
  }, xe = () => {
    h.value = s.value ? s.value.slice() : [], h.value.length === 2 && !(e.fixedStart || e.fixedEnd) && (h.value = []);
  }, Oe = (y, V) => {
    const le = [L(y.value), kt(L(y.value), +e.autoRange)];
    j(le) && (V && c(y.value), h.value = le);
  }, ve = (y) => {
    h.value = G(L(y.value));
  }, ie = (y) => e.noDisabledRange ? x(h.value[0], y).some((V) => i(V)) : !1, at = (y, V) => {
    if (xe(), e.autoRange)
      return Oe(y, V);
    if (e.fixedStart || e.fixedEnd)
      return ve(y);
    h.value[0] ? q(L(y.value)) && !ie(y.value) && (Ge(L(y.value), L(h.value[0])) ? h.value.unshift(L(y.value)) : h.value[1] = L(y.value)) : h.value[0] = L(y.value);
  }, he = (y) => {
    h.value[y] = lt(
      h.value[y],
      g.hours[y],
      g.minutes[y],
      ee(y !== 1)
    );
  }, Pe = () => {
    h.value.length && (h.value[0] && !h.value[1] ? he(0) : (he(0), he(1), n()), s.value = h.value.slice(), h.value[0] && h.value[1] && e.autoApply && t("auto-apply"), h.value[0] && !h.value[1] && e.modelAuto && e.autoApply && t("auto-apply"));
  }, Ie = (y, V = !1) => {
    if (!(i(y.value) || !y.current && e.hideOffsetDates)) {
      if (e.weekPicker)
        return me(y);
      if (!e.range)
        return Se(y);
      Ct(g.hours) && Ct(g.minutes) && !e.multiDates && (at(y, V), Pe());
    }
  }, ct = (y) => {
    const V = y.find((le) => le.current);
    return V ? Eh(V.value) : "";
  }, yt = (y) => {
    for (let V = y - 1; V >= 0; V--) {
      const le = Yt(Ke(L(), { month: P.value(V + 1), year: D.value(V + 1) }), 1);
      B(V, Ne(le), Ee(le));
    }
    for (let V = y + 1; V <= d.value.multiCalendars - 1; V++) {
      const le = ht(Ke(L(), { month: P.value(V - 1), year: D.value(V - 1) }), 1);
      B(V, Ne(le), Ee(le));
    }
  }, Dt = (y) => f(L(), P.value(y), D.value(y)), Gt = (y) => lt(y, g.hours, g.minutes, ee()), Kr = (y, V) => {
    const le = e.monthPicker ? P.value(y) !== V.month || !V.fromNav : D.value(y) !== V.year;
    if (B(y, V.month, V.year), d.value.multiCalendars && !e.multiCalendarsSolo && yt(y), e.monthPicker || e.yearPicker)
      if (e.range) {
        if (le) {
          let pe = s.value ? s.value.slice() : [];
          pe.length === 2 && pe[1] !== null && (pe = []), pe.length ? Ge(Dt(y), pe[0]) ? pe.unshift(Dt(y)) : pe[1] = Dt(y) : pe = [Dt(y)], s.value = pe;
        }
      } else
        s.value = Dt(y);
    t("update-month-year", { instance: y, month: V.month, year: V.year }), r(e.multiCalendarsSolo ? y : void 0);
  }, Xr = async (y = !1) => {
    if (e.autoApply && (e.monthPicker || e.yearPicker)) {
      await fn();
      const V = e.monthPicker ? y : !1;
      e.range ? t("auto-apply", V || !s.value || s.value.length === 1) : t("auto-apply", V);
    }
    n();
  }, hn = (y, V) => {
    const le = Ke(L(), { month: P.value(V), year: D.value(V) }), pe = y < 0 ? ht(le, 1) : Yt(le, 1);
    u(Ne(pe), Ee(pe), y < 0, e.preventMinMaxNavigation) && (B(V, Ne(pe), Ee(pe)), d.value.multiCalendars && !e.multiCalendarsSolo && yt(V), r());
  }, Qt = (y) => {
    uu(y) && uu(s.value) && Ct(g.hours) && Ct(g.minutes) ? (y[0] && s.value[0] && (s.value[0] = lt(y[0], g.hours[0], g.minutes[0], ee())), y[1] && s.value[1] && (s.value[1] = lt(y[1], g.hours[1], g.minutes[1], ee(!1)))) : e.multiDates && Array.isArray(s.value) ? s.value[s.value.length - 1] = Gt(y) : !e.range && !su(y) && (s.value = Gt(y)), t("time-update");
  }, ea = (y, V = !0, le = !1) => {
    const pe = V ? y : g.hours, Ve = !V && !le ? y : g.minutes, ft = le ? y : g.seconds;
    if (e.range && su(s.value) && Ct(pe) && Ct(Ve) && Ct(ft) && !e.disableTimeRangeValidation) {
      const Rt = (ne) => lt(s.value[ne], pe[ne], Ve[ne], ft[ne]), M = (ne) => hi(s.value[ne], 0);
      if (Me(s.value[0], s.value[1]) && (ui(Rt(0), M(1)) || si(Rt(1), M(0))))
        return;
    }
    if (C("hours", pe), C("minutes", Ve), C("seconds", ft), s.value)
      if (e.multiDates) {
        const Rt = w();
        Rt && Qt(Rt);
      } else
        Qt(s.value);
    else
      e.timePicker && Qt(e.range ? [L(), L()] : L());
    n();
  }, ta = (y, V) => {
    e.monthChangeOnScroll && hn(e.monthChangeOnScroll !== "inverse" ? -y.deltaY : y.deltaY, V);
  }, na = (y, V, le = !1) => {
    e.monthChangeOnArrows && e.vertical === le && mn(y, V);
  }, mn = (y, V) => {
    hn(y === "right" ? -1 : 1, V);
  };
  return {
    time: g,
    month: P,
    year: D,
    modelValue: s,
    monthYearSelect: Xr,
    isDisabled: i,
    updateTime: ea,
    getWeekNum: ct,
    selectDate: Ie,
    updateMonthYear: Kr,
    handleScroll: ta,
    getMarker: (y) => e.markers.find((V) => Me(o(y.value), o(V.date))),
    handleArrow: na,
    handleSwipe: mn,
    selectCurrentDate: () => {
      e.range ? s.value && Array.isArray(s.value) && s.value[0] ? s.value = Ge(L(), s.value[0]) ? [L(), s.value[0]] : [s.value[0], L()] : s.value = [L()] : s.value = L(), $();
    },
    presetDateRange: (y, V) => {
      V || y.length && y.length <= 2 && e.range && (s.value = y.map((le) => L(le)), $());
    }
  };
}, Wb = (e, t, n) => {
  const r = F(), {
    getZonedToUtc: a,
    getZonedDate: i,
    formatDate: o,
    getDefaultPattern: l,
    checkRangeEnabled: f,
    checkPartialRangeValue: u,
    isValidDate: d,
    setDateMonthOrYear: s,
    defaults: h
  } = it(t), v = F("");
  Wt(r, () => {
    e("internal-model-change", r.value);
  });
  const g = (T) => {
    const $ = T || L();
    return {
      hours: vt($),
      minutes: gt($),
      seconds: t.enableSeconds ? Ht($) : 0
    };
  }, P = (T) => ({ month: Ne(T), year: Ee(T) }), D = (T) => Array.isArray(T) ? f(() => [
    It(L(), T[0]),
    T[1] ? It(L(), T[1]) : u()
  ]) : It(L(), +T), B = (T) => Array.isArray(T) ? [
    lt(null, +T[0].hours, +T[0].minutes, T[0].seconds),
    lt(null, +T[1].hours, +T[1].minutes, T[1].seconds)
  ] : lt(null, T.hours, T.minutes, T == null ? void 0 : T.seconds), C = (T) => Array.isArray(T) ? f(() => [
    s(null, +T[0].month, +T[0].year),
    T[1] ? s(null, +T[1].month, +T[1].year) : u()
  ]) : s(null, +T.month, +T.year), H = (T) => {
    if (Array.isArray(T))
      return T.map(($) => c($));
    throw new Error(qr.dateArr("multi-dates"));
  }, K = (T) => {
    if (Array.isArray(T))
      return [L(T[0]), L(T[1])];
    throw new Error(qr.dateArr("week-picker"));
  }, X = (T) => t.modelAuto ? Array.isArray(T) ? [c(T[0]), c(T[1])] : t.autoApply ? [c(T)] : [c(T), null] : Array.isArray(T) ? f(() => [
    c(T[0]),
    T[1] ? c(T[1]) : u()
  ]) : c(T), m = () => {
    Array.isArray(r.value) && t.range && r.value.length === 1 && r.value.push(u());
  }, N = () => {
    const T = r.value;
    return [
      k(T[0]),
      T[1] ? k(T[1]) : u()
    ];
  }, Y = () => r.value[1] ? N() : k(qe(r.value[0])), Q = () => r.value.map((T) => k(T)), re = () => (m(), t.modelAuto ? Y() : t.multiDates ? Q() : Array.isArray(r.value) ? f(() => N()) : k(qe(r.value))), W = (T) => T ? t.timePicker ? B(qe(T)) : t.monthPicker ? C(qe(T)) : t.yearPicker ? D(qe(T)) : t.multiDates ? H(qe(T)) : t.weekPicker ? K(qe(T)) : X(qe(T)) : null, ee = (T) => {
    const $ = W(T);
    d(qe($)) ? (r.value = qe($), I()) : (r.value = null, v.value = "");
  }, R = () => {
    var T;
    const $ = (j) => {
      var me;
      return rn(j, (me = h.value.textInputOptions) == null ? void 0 : me.format);
    };
    return `${$(r.value[0])} ${(T = h.value.textInputOptions) == null ? void 0 : T.rangeSeparator} ${r.value[1] ? $(r.value[1]) : ""}`;
  }, w = () => {
    var T;
    return n.value && r.value ? Array.isArray(r.value) ? R() : rn(r.value, (T = h.value.textInputOptions) == null ? void 0 : T.format) : o(r.value);
  }, A = () => {
    var T;
    return r.value ? t.multiDates ? r.value.map(($) => o($)).join("; ") : t.textInput && typeof ((T = h.value.textInputOptions) == null ? void 0 : T.format) == "string" ? w() : o(r.value) : "";
  }, I = () => {
    !t.format || typeof t.format == "string" ? v.value = A() : v.value = t.format(r.value);
  }, c = (T) => {
    if (t.utc) {
      const $ = new Date(T);
      return t.utc === "preserve" ? new Date($.getTime() + $.getTimezoneOffset() * 6e4) : $;
    }
    return t.modelType ? t.modelType === "date" || t.modelType === "timestamp" ? i(new Date(T)) : t.modelType === "format" && (typeof t.format == "string" || !t.format) ? Uo(T, l(), new Date()) : i(Uo(T, t.modelType, new Date())) : i(new Date(T));
  }, k = (T) => t.utc ? cb(T, t.utc === "preserve") : t.modelType ? t.modelType === "timestamp" ? +a(T) : t.modelType === "format" && (typeof t.format == "string" || !t.format) ? o(a(T)) : o(a(T), t.modelType) : a(T), x = (T) => {
    e("update:model-value", T);
  }, q = (T) => Array.isArray(r.value) ? [
    T(r.value[0]),
    r.value[1] ? T(r.value[1]) : u()
  ] : T(qe(r.value)), G = (T) => x(qe(q(T)));
  return {
    inputValue: v,
    internalModelValue: r,
    checkBeforeEmit: () => r.value ? t.range ? t.partialRange ? r.value.length >= 1 : r.value.length === 2 : !!r.value : !1,
    parseExternalModelValue: ee,
    formatInputValue: I,
    emitModelValue: () => (I(), t.monthPicker ? G(P) : t.timePicker ? G(g) : t.yearPicker ? G(Ee) : t.weekPicker ? x(r.value) : x(re()))
  };
}, qb = (e, t) => {
  const { validateMonthYearInRange: n, validateMaxDate: r, validateMinDate: a, defaults: i } = it(e), o = (s, h) => {
    let v = s;
    return i.value.filters.months.includes(Ne(v)) ? (v = h ? ht(s, 1) : Yt(s, 1), o(v, h)) : v;
  }, l = (s, h) => {
    let v = s;
    return i.value.filters.years.includes(Ee(v)) ? (v = h ? Eu(s, 1) : wg(s, 1), l(v, h)) : v;
  }, f = (s) => {
    const h = Ke(new Date(), { month: e.month, year: e.year });
    let v = s ? ht(h, 1) : Yt(h, 1), g = Ne(v), P = Ee(v);
    i.value.filters.months.includes(g) && (v = o(v, s), g = Ne(v), P = Ee(v)), i.value.filters.years.includes(P) && (v = l(v, s), P = Ee(v)), n(g, P, s, e.preventMinMaxNavigation) && u(g, P);
  }, u = (s, h) => {
    t("update-month-year", { month: s, year: h });
  }, d = J(() => (s) => {
    if (!e.preventMinMaxNavigation || s && !e.maxDate || !s && !e.minDate)
      return !1;
    const h = Ke(new Date(), { month: e.month, year: e.year }), v = s ? ht(h, 1) : Yt(h, 1), g = [Ne(v), Ee(v)];
    return s ? !r(...g) : !a(...g);
  });
  return { handleMonthYearChange: f, isDisabled: d, updateMonthYear: u };
};
var sr = /* @__PURE__ */ ((e) => (e.center = "center", e.left = "left", e.right = "right", e))(sr || {});
const zb = (e, t, n, r) => {
  const a = F({
    top: "0",
    left: "0",
    transform: "none"
  }), i = F(!1), o = $a(r, "teleportCenter");
  Wt(o, () => {
    D();
  });
  const l = (m) => {
    const N = m.getBoundingClientRect();
    return {
      left: N.left + window.scrollX,
      top: N.top + window.scrollY
    };
  }, f = (m) => {
    const N = m.getBoundingClientRect();
    let Y = 0, Q = 0;
    for (; m && !isNaN(m.offsetLeft) && !isNaN(m.offsetTop); )
      Y += m.offsetLeft - m.scrollLeft, Q = N.top + m.scrollTop, m = m.offsetParent;
    return { top: Q, left: Y };
  }, u = (m, N) => {
    a.value.left = `${m + N}px`, a.value.transform = "translateX(-100%)";
  }, d = (m) => {
    a.value.left = `${m}px`, a.value.transform = "translateX(0)";
  }, s = (m, N, Y = !1) => {
    r.position === sr.left && d(m), r.position === sr.right && u(m, N), r.position === sr.center && (a.value.left = `${m + N / 2}px`, a.value.transform = Y ? "translate(-50%, -50%)" : "translateX(-50%)");
  }, h = (m) => {
    const { width: N, height: Y } = m.getBoundingClientRect(), { top: Q, left: re } = r.altPosition ? f(m) : l(m);
    return { top: Q, left: re, width: N, height: Y };
  }, v = () => {
    const m = We(t);
    if (m) {
      const { top: N, left: Y, width: Q, height: re } = h(m);
      a.value.top = `${N + re / 2}px`, a.value.transform = "translateY(-50%)", s(Y, Q, !0);
    }
  }, g = () => {
    a.value.left = "50%", a.value.top = "50%", a.value.transform = "translate(-50%, -50%)", a.value.position = "fixed";
  }, P = () => {
    const m = We(t);
    a.value = r.altPosition(m);
  }, D = (m = !0) => {
    if (!r.inline)
      return o.value ? g() : r.altPosition && typeof r.altPosition != "boolean" ? P() : (m && n("recalculate-position"), X());
  }, B = (m, N) => {
    const { top: Y, left: Q, height: re, width: W } = h(m);
    a.value.top = `${re + Y + +r.offset}px`, s(Q, W), H(m, N), i.value = !1;
  }, C = (m, N) => {
    const { top: Y, left: Q, width: re } = h(m), { height: W } = N.getBoundingClientRect();
    a.value.top = `${Y - W - +r.offset}px`, s(Q, re), H(m, N), i.value = !0;
  }, H = (m, N) => {
    if (r.autoPosition) {
      const { left: Y, width: Q } = h(m), { left: re, right: W } = N.getBoundingClientRect();
      if (re < 0)
        return d(Y);
      if (W > document.documentElement.clientWidth)
        return u(Y, Q);
    }
  }, K = (m, N) => {
    const { height: Y } = N.getBoundingClientRect(), { top: Q, height: re } = m.getBoundingClientRect(), W = window.innerHeight - Q - re, ee = Q;
    return Y <= W ? B(m, N) : Y > W && Y <= ee ? C(m, N) : W >= ee ? B(m, N) : C(m, N);
  }, X = () => {
    const m = We(t), N = We(e);
    if (m && N)
      return r.autoPosition ? K(m, N) : B(m, N);
  };
  return { openOnTop: i, menuPosition: a, setMenuPosition: D, setInitialPosition: v };
}, Ut = [
  { name: "clock-icon", use: ["time", "calendar"] },
  { name: "arrow-left", use: ["month-year", "calendar"] },
  { name: "arrow-right", use: ["month-year", "calendar"] },
  { name: "arrow-up", use: ["time", "calendar"] },
  { name: "arrow-down", use: ["time", "calendar"] },
  { name: "calendar-icon", use: ["month-year", "time", "calendar"] },
  { name: "day", use: ["calendar"] },
  { name: "month-overlay-value", use: ["calendar", "month-year"] },
  { name: "year-overlay-value", use: ["calendar", "month-year"] },
  { name: "year-overlay", use: ["month-year"] },
  { name: "month-overlay", use: ["month-year"] },
  { name: "month-overlay-header", use: ["month-year"] },
  { name: "year-overlay-header", use: ["month-year"] },
  { name: "hours-overlay-value", use: ["calendar", "time"] },
  { name: "minutes-overlay-value", use: ["calendar", "time"] },
  { name: "seconds-overlay-value", use: ["calendar", "time"] },
  { name: "hours", use: ["calendar", "time"] },
  { name: "minutes", use: ["calendar", "time"] },
  { name: "month", use: ["calendar", "month-year"] },
  { name: "year", use: ["calendar", "month-year"] },
  { name: "action-select", use: ["action"] },
  { name: "action-preview", use: ["action"] },
  { name: "calendar-header", use: ["calendar"] },
  { name: "marker-tooltip", use: ["calendar"] },
  { name: "now-button", use: [] },
  { name: "time-picker-overlay", use: ["calendar", "time"] },
  { name: "am-pm-button", use: ["calendar", "time"] },
  { name: "left-sidebar", use: ["menu"] },
  { name: "right-sidebar", use: ["menu"] },
  { name: "month-year", use: ["month-year"] },
  { name: "time-picker", use: ["menu"] },
  { name: "action-row", use: ["menu"] }
], Gb = [{ name: "trigger" }, { name: "input-icon" }, { name: "clear-icon" }, { name: "dp-input" }], Qb = {
  all: () => Ut,
  monthYear: () => Ut.filter((e) => e.use.includes("month-year")),
  input: () => Gb,
  timePicker: () => Ut.filter((e) => e.use.includes("time")),
  action: () => Ut.filter((e) => e.use.includes("action")),
  calendar: () => Ut.filter((e) => e.use.includes("calendar")),
  menu: () => Ut.filter((e) => e.use.includes("menu"))
}, Et = (e, t, n) => {
  const r = [];
  return Qb[t]().forEach((a) => {
    e[a.name] && r.push(a.name);
  }), n && n.length && n.forEach((a) => {
    a.slot && r.push(a.slot);
  }), r;
}, Zr = (e) => ({ transitionName: J(() => (t) => e && typeof e != "boolean" ? t ? e.open : e.close : ""), showTransition: !!e }), Tt = {
  multiCalendars: { type: [Boolean, Number, String], default: null },
  modelValue: { type: [String, Date, Array, Object, Number], default: null },
  modelType: { type: String, default: null },
  position: { type: String, default: "center" },
  dark: { type: Boolean, default: !1 },
  format: {
    type: [String, Function],
    default: () => null
  },
  closeOnScroll: { type: Boolean, default: !1 },
  autoPosition: { type: Boolean, default: !0 },
  closeOnAutoApply: { type: Boolean, default: !0 },
  teleport: { type: [String, Object], default: "body" },
  altPosition: { type: [Boolean, Function], default: !1 },
  transitions: { type: [Boolean, Object], default: !0 },
  formatLocale: { type: Object, default: null },
  utc: { type: [Boolean, String], default: !1 },
  ariaLabels: { type: Object, default: () => ({}) },
  offset: { type: [Number, String], default: 10 },
  hideNavigation: { type: Array, default: () => [] },
  timezone: { type: String, default: null },
  vertical: { type: Boolean, default: !1 },
  disableMonthYearSelect: { type: Boolean, default: !1 },
  menuClassName: { type: String, default: null },
  dayClass: { type: Function, default: null },
  yearRange: { type: Array, default: () => [1900, 2100] },
  multiCalendarsSolo: { type: Boolean, default: !1 },
  calendarCellClassName: { type: String, default: null },
  enableTimePicker: { type: Boolean, default: !0 },
  autoApply: { type: Boolean, default: !1 },
  disabledDates: { type: [Array, Function], default: () => [] },
  monthNameFormat: { type: String, default: "short" },
  startDate: { type: [Date, String], default: null },
  startTime: { type: [Object, Array], default: null },
  monthYearComponent: { type: Object, default: null },
  timePickerComponent: { type: Object, default: null },
  actionRowComponent: { type: Object, default: null },
  hideOffsetDates: { type: Boolean, default: !1 },
  autoRange: { type: [Number, String], default: null },
  noToday: { type: Boolean, default: !1 },
  disabledWeekDays: { type: Array, default: () => [] },
  allowedDates: { type: Array, default: () => [] },
  showNowButton: { type: Boolean, default: !1 },
  nowButtonLabel: { type: String, default: "Now" },
  markers: { type: Array, default: () => [] },
  modeHeight: { type: [Number, String], default: 255 },
  escClose: { type: Boolean, default: !0 },
  spaceConfirm: { type: Boolean, default: !0 },
  monthChangeOnArrows: { type: Boolean, default: !0 },
  presetRanges: { type: Array, default: () => [] },
  flow: { type: Array, default: () => [] },
  preventMinMaxNavigation: { type: Boolean, default: !1 },
  minRange: { type: [Number, String], default: null },
  maxRange: { type: [Number, String], default: null },
  multiDatesLimit: { type: [Number, String], default: null },
  reverseYears: { type: Boolean, default: !1 },
  keepActionRow: { type: Boolean, default: !1 },
  weekPicker: { type: Boolean, default: !1 },
  filters: { type: Object, default: () => ({}) },
  arrowNavigation: { type: Boolean, default: !1 },
  multiStatic: { type: Boolean, default: !0 },
  disableTimeRangeValidation: { type: Boolean, default: !1 },
  highlight: {
    type: [Array, Function],
    default: null
  },
  highlightWeekDays: {
    type: Array,
    default: null
  },
  highlightDisabledDays: { type: Boolean, default: !1 },
  teleportCenter: { type: Boolean, default: !1 },
  locale: { type: String, default: "en-Us" },
  weekNumName: { type: String, default: "W" },
  weekStart: { type: [Number, String], default: 1 },
  weekNumbers: { type: Boolean, default: !1 },
  calendarClassName: { type: String, default: null },
  noSwipe: { type: Boolean, default: !1 },
  monthChangeOnScroll: { type: [Boolean, String], default: !0 },
  dayNames: {
    type: [Function, Array],
    default: null
  },
  monthPicker: { type: Boolean, default: !1 },
  customProps: { type: Object, default: null },
  yearPicker: { type: Boolean, default: !1 },
  modelAuto: { type: Boolean, default: !1 },
  selectText: { type: String, default: "Select" },
  cancelText: { type: String, default: "Cancel" },
  previewFormat: {
    type: [String, Function],
    default: () => ""
  },
  multiDates: { type: Boolean, default: !1 },
  partialRange: { type: Boolean, default: !0 },
  ignoreTimeValidation: { type: Boolean, default: !1 },
  minDate: { type: [Date, String], default: null },
  maxDate: { type: [Date, String], default: null },
  minTime: { type: Object, default: null },
  maxTime: { type: Object, default: null },
  name: { type: String, default: null },
  placeholder: { type: String, default: "" },
  hideInputIcon: { type: Boolean, default: !1 },
  clearable: { type: Boolean, default: !0 },
  state: { type: Boolean, default: null },
  required: { type: Boolean, default: !1 },
  autocomplete: { type: String, default: "off" },
  inputClassName: { type: String, default: null },
  inlineWithInput: { type: Boolean, default: !1 },
  textInputOptions: { type: Object, default: () => null },
  fixedStart: { type: Boolean, default: !1 },
  fixedEnd: { type: Boolean, default: !1 },
  timePicker: { type: Boolean, default: !1 },
  enableSeconds: { type: Boolean, default: !1 },
  is24: { type: Boolean, default: !0 },
  noHoursOverlay: { type: Boolean, default: !1 },
  noMinutesOverlay: { type: Boolean, default: !1 },
  noSecondsOverlay: { type: Boolean, default: !1 },
  hoursGridIncrement: { type: [String, Number], default: 1 },
  minutesGridIncrement: { type: [String, Number], default: 5 },
  secondsGridIncrement: { type: [String, Number], default: 5 },
  hoursIncrement: { type: [Number, String], default: 1 },
  minutesIncrement: { type: [Number, String], default: 1 },
  secondsIncrement: { type: [Number, String], default: 1 },
  range: { type: Boolean, default: !1 },
  uid: { type: String, default: null },
  disabled: { type: Boolean, default: !1 },
  readonly: { type: Boolean, default: !1 },
  inline: { type: Boolean, default: !1 },
  textInput: { type: Boolean, default: !1 },
  onClickOutside: { type: Function, default: null },
  noDisabledRange: { type: Boolean, default: !1 },
  sixWeeks: { type: Boolean, default: !1 }
}, Jb = ["aria-label", "aria-disabled", "aria-readonly"], Zb = {
  key: 1,
  class: "dp__input_wrap"
}, Kb = ["id", "name", "inputmode", "placeholder", "disabled", "readonly", "required", "value", "autocomplete", "onKeydown"], Xb = {
  key: 2,
  class: "dp__input_icon"
}, e_ = {
  key: 4,
  class: "dp__clear_icon"
}, t_ = /* @__PURE__ */ ye({
  __name: "DatepickerInput",
  props: {
    isMenuOpen: { type: Boolean, default: !1 },
    inputValue: { type: String, default: "" },
    ...Tt
  },
  emits: [
    "clear",
    "open",
    "update:input-value",
    "set-input-date",
    "close",
    "select-date",
    "set-empty-date",
    "toggle",
    "focus-prev",
    "focus",
    "blur"
  ],
  setup(e, { expose: t, emit: n }) {
    const r = e, { getDefaultPattern: a, isValidDate: i, defaults: o } = it(r), l = F(), f = F(null), u = F(!1), d = J(
      () => ({
        dp__pointer: !r.disabled && !r.readonly && !r.textInput,
        dp__disabled: r.disabled,
        dp__input_readonly: !r.textInput,
        dp__input: !0,
        dp__input_icon_pad: !r.hideInputIcon,
        dp__input_valid: r.state,
        dp__input_invalid: r.state === !1,
        dp__input_focus: u.value || r.isMenuOpen,
        dp__input_reg: !r.textInput,
        [r.inputClassName]: !!r.inputClassName
      })
    ), s = () => {
      n("set-input-date", null), r.autoApply && (n("set-empty-date"), l.value = null);
    }, h = (m) => {
      var N;
      return sb(m, ((N = o.value.textInputOptions) == null ? void 0 : N.format) || a());
    }, v = (m) => {
      const { rangeSeparator: N } = o.value.textInputOptions;
      if (r.range) {
        const [Y, Q] = m.split(`${N}`);
        if (Y && Q) {
          const re = h(Y.trim()), W = h(Q.trim());
          l.value = re && W ? [re, W] : null;
        }
      } else
        l.value = h(m);
    }, g = (m) => {
      var N;
      const { value: Y } = m.target;
      Y !== "" ? (((N = o.value.textInputOptions) == null ? void 0 : N.openMenu) && !r.isMenuOpen && n("open"), v(Y), n("set-input-date", l.value)) : s(), n("update:input-value", Y);
    }, P = () => {
      var m, N;
      ((m = o.value.textInputOptions) == null ? void 0 : m.enterSubmit) && i(l.value) && r.inputValue !== "" ? (n("set-input-date", l.value, !0), l.value = null) : ((N = o.value.textInputOptions) == null ? void 0 : N.enterSubmit) && r.inputValue === "" && (l.value = null, n("clear"));
    }, D = () => {
      var m, N;
      ((m = o.value.textInputOptions) == null ? void 0 : m.tabSubmit) && i(l.value) && r.inputValue !== "" ? (n("set-input-date", l.value, !0), l.value = null) : ((N = o.value.textInputOptions) == null ? void 0 : N.tabSubmit) && r.inputValue === "" && (l.value = null, n("clear"));
    }, B = () => {
      u.value = !0, n("focus");
    }, C = (m) => {
      var N;
      m.preventDefault(), m.stopImmediatePropagation(), m.stopPropagation(), r.textInput && ((N = o.value.textInputOptions) == null ? void 0 : N.openMenu) && !r.inlineWithInput ? r.isMenuOpen ? o.value.textInputOptions.enterSubmit && n("select-date") : n("open") : r.textInput || n("toggle");
    }, H = () => {
      u.value = !1, r.isMenuOpen || n("blur"), r.autoApply && r.textInput && l.value && (n("set-input-date", l.value), n("select-date"), l.value = null);
    }, K = () => {
      n("clear");
    }, X = (m) => {
      r.textInput || m.preventDefault();
    };
    return t({
      focusInput: () => {
        f.value && f.value.focus({ preventScroll: !0 });
      }
    }), (m, N) => {
      var Y;
      return p(), b("div", {
        onClick: C,
        "aria-label": (Y = _(o).ariaLabels) == null ? void 0 : Y.input,
        role: "textbox",
        "aria-multiline": "false",
        "aria-disabled": m.disabled,
        "aria-readonly": m.readonly
      }, [
        m.$slots.trigger && !m.$slots["dp-input"] && !m.inline ? U(m.$slots, "trigger", { key: 0 }) : S("", !0),
        !m.$slots.trigger && (!m.inline || m.inlineWithInput) ? (p(), b("div", Zb, [
          m.$slots["dp-input"] && !m.$slots.trigger && !m.inline ? U(m.$slots, "dp-input", {
            key: 0,
            value: e.inputValue,
            onInput: g,
            onEnter: P,
            onTab: D,
            onClear: K
          }) : S("", !0),
          m.$slots["dp-input"] ? S("", !0) : (p(), b("input", {
            key: 1,
            ref_key: "inputRef",
            ref: f,
            id: m.uid ? `dp-input-${m.uid}` : void 0,
            name: m.name,
            class: we(_(d)),
            inputmode: m.textInput ? "text" : "none",
            placeholder: m.placeholder,
            disabled: m.disabled,
            readonly: m.readonly,
            required: m.required,
            value: e.inputValue,
            autocomplete: m.autocomplete,
            onInput: g,
            onKeydown: [
              fe(C, ["enter"]),
              fe(D, ["tab"])
            ],
            onBlur: H,
            onFocus: B,
            onKeypress: X
          }, null, 42, Kb)),
          m.$slots["input-icon"] && !m.hideInputIcon ? (p(), b("span", Xb, [
            U(m.$slots, "input-icon")
          ])) : S("", !0),
          !m.$slots["input-icon"] && !m.hideInputIcon && !m.$slots["dp-input"] ? (p(), te(_(Jr), {
            key: 3,
            class: "dp__input_icon dp__input_icons"
          })) : S("", !0),
          m.$slots["clear-icon"] && e.inputValue && m.clearable && !m.disabled && !m.readonly ? (p(), b("span", e_, [
            U(m.$slots, "clear-icon", { clear: K })
          ])) : S("", !0),
          m.clearable && !m.$slots["clear-icon"] && e.inputValue && !m.disabled && !m.readonly ? (p(), te(_(Ig), {
            key: 5,
            class: "dp__clear_icon dp__input_icons",
            "data-test": "clear-icon",
            onClick: ge(K, ["stop", "prevent"])
          }, null, 8, ["onClick"])) : S("", !0)
        ])) : S("", !0)
      ], 8, Jb);
    };
  }
}), n_ = { class: "dp__selection_preview" }, r_ = { class: "dp__action_buttons" }, a_ = ["onKeydown"], o_ = /* @__PURE__ */ ye({
  __name: "ActionRow",
  props: {
    calendarWidth: { type: Number, default: 0 },
    menuMount: { type: Boolean, default: !1 },
    internalModelValue: { type: [Date, Array], default: null },
    ...Tt
  },
  emits: ["close-picker", "select-date", "invalid-select"],
  setup(e, { emit: t }) {
    const n = e, { formatDate: r, isValidTime: a, defaults: i } = it(n), { buildMatrix: o } = Pt(), l = F(null), f = F(null);
    tt(() => {
      n.arrowNavigation && o([We(l), We(f)], "actionRow");
    });
    const u = J(() => n.range && !n.partialRange && n.internalModelValue ? n.internalModelValue.length === 2 : !0), d = J(() => ({
      dp__action: !0,
      dp__select: !0,
      dp__action_disabled: !s.value || !h.value || !u.value
    })), s = J(() => !n.enableTimePicker || n.ignoreTimeValidation ? !0 : a(n.internalModelValue)), h = J(() => n.monthPicker ? D(n.internalModelValue) : !0), v = () => {
      const C = i.value.previewFormat;
      return n.timePicker || n.monthPicker, C(qe(n.internalModelValue));
    }, g = () => {
      const C = n.internalModelValue;
      return i.value.multiCalendars > 0 ? `${r(C[0])} - ${r(C[1])}` : [r(C[0]), r(C[1])];
    }, P = J(() => !n.internalModelValue || !n.menuMount ? "" : typeof i.value.previewFormat == "string" ? Array.isArray(n.internalModelValue) ? n.internalModelValue.length === 2 && n.internalModelValue[1] ? g() : n.multiDates ? n.internalModelValue.map((C) => `${r(C)}`) : n.modelAuto ? `${r(n.internalModelValue[0])}` : `${r(n.internalModelValue[0])} -` : r(n.internalModelValue) : v()), D = (C) => {
      if (!n.monthPicker)
        return !0;
      let H = !0;
      return n.minDate && n.maxDate ? et(L(C), L(n.minDate)) && Ge(L(C), L(n.maxDate)) : (n.minDate && (H = et(L(C), L(n.minDate))), n.maxDate && (H = Ge(L(C), L(n.maxDate))), H);
    }, B = () => {
      s.value && h.value && u.value ? t("select-date") : t("invalid-select");
    };
    return (C, H) => (p(), b("div", {
      class: "dp__action_row",
      style: Nt(e.calendarWidth ? { width: `${e.calendarWidth}px` } : {})
    }, [
      O("div", n_, [
        C.$slots["action-preview"] ? U(C.$slots, "action-preview", {
          key: 0,
          value: e.internalModelValue
        }) : S("", !0),
        C.$slots["action-preview"] ? S("", !0) : (p(), b(se, { key: 1 }, [
          Array.isArray(_(P)) ? S("", !0) : (p(), b(se, { key: 0 }, [
            De(Z(_(P)), 1)
          ], 64)),
          Array.isArray(_(P)) ? (p(!0), b(se, { key: 1 }, ke(_(P), (K, X) => (p(), b("div", { key: X }, Z(K), 1))), 128)) : S("", !0)
        ], 64))
      ]),
      O("div", r_, [
        C.$slots["action-select"] ? U(C.$slots, "action-select", {
          key: 0,
          value: e.internalModelValue
        }) : S("", !0),
        C.$slots["action-select"] ? S("", !0) : (p(), b(se, { key: 1 }, [
          C.inline ? S("", !0) : (p(), b("span", {
            key: 0,
            class: "dp__action dp__cancel",
            ref_key: "cancelButtonRef",
            ref: l,
            tabindex: "0",
            onClick: H[0] || (H[0] = (K) => C.$emit("close-picker")),
            onKeydown: [
              H[1] || (H[1] = fe((K) => C.$emit("close-picker"), ["enter"])),
              H[2] || (H[2] = fe((K) => C.$emit("close-picker"), ["space"]))
            ]
          }, Z(C.cancelText), 545)),
          O("span", {
            class: we(_(d)),
            tabindex: "0",
            onKeydown: [
              fe(B, ["enter"]),
              fe(B, ["space"])
            ],
            onClick: B,
            "data-test": "select-button",
            ref_key: "selectButtonRef",
            ref: f
          }, Z(C.selectText), 43, a_)
        ], 64))
      ])
    ], 4));
  }
}), i_ = ["aria-label"], l_ = {
  class: "dp__calendar_header",
  role: "row"
}, u_ = {
  key: 0,
  class: "dp__calendar_header_item",
  role: "gridcell"
}, s_ = /* @__PURE__ */ O("div", { class: "dp__calendar_header_separator" }, null, -1), c_ = ["aria-label"], f_ = {
  key: 0,
  role: "gridcell",
  class: "dp__calendar_item dp__week_num"
}, d_ = { class: "dp__cell_inner" }, p_ = ["aria-selected", "aria-disabled", "aria-label", "data-test", "onClick", "onKeydown", "onMouseover"], h_ = /* @__PURE__ */ O("div", { class: "dp__arrow_bottom_tp" }, null, -1), m_ = /* @__PURE__ */ ye({
  __name: "Calendar",
  props: {
    mappedDates: { type: Array, default: () => [] },
    getWeekNum: {
      type: Function,
      default: () => ""
    },
    specificMode: { type: Boolean, default: !1 },
    instance: { type: Number, default: 0 },
    month: { type: Number, default: 0 },
    year: { type: Number, default: 0 },
    ...Tt
  },
  emits: [
    "select-date",
    "set-hover-date",
    "handle-scroll",
    "mount",
    "handle-swipe",
    "handle-space"
  ],
  setup(e, { expose: t, emit: n }) {
    const r = e, { buildMultiLevelMatrix: a } = Pt(), { setDateMonthOrYear: i, defaults: o } = it(r), l = F(null), f = F({ bottom: "", left: "", transform: "" }), u = F([]), d = F(null), s = F(!0), h = F(""), v = F({ startX: 0, endX: 0, startY: 0, endY: 0 }), g = J(() => r.dayNames ? Array.isArray(r.dayNames) ? r.dayNames : r.dayNames(r.locale, +r.weekStart) : Nb(r.locale, +r.weekStart));
    tt(() => {
      n("mount", { cmp: "calendar", refs: u }), r.noSwipe || d.value && (d.value.addEventListener("touchstart", Y, { passive: !1 }), d.value.addEventListener("touchend", Q, { passive: !1 }), d.value.addEventListener("touchmove", re, { passive: !1 })), r.monthChangeOnScroll && d.value && d.value.addEventListener("wheel", R, { passive: !1 });
    });
    const P = (w) => w ? r.vertical ? "vNext" : "next" : r.vertical ? "vPrevious" : "previous", D = (w, A) => {
      if (r.transitions) {
        const I = mt(i(L(), r.month, r.year));
        h.value = et(mt(i(L(), w, A)), I) ? o.value.transitions[P(!0)] : o.value.transitions[P(!1)], s.value = !1, fn(() => {
          s.value = !0;
        });
      }
    }, B = J(
      () => ({
        dp__calendar_wrap: !0,
        [r.calendarClassName]: !!r.calendarClassName
      })
    ), C = J(() => (w) => {
      const A = Bb(w);
      return {
        dp__marker_dot: A.type === "dot",
        dp__marker_line: A.type === "line"
      };
    }), H = J(() => (w) => Me(w, l.value)), K = J(() => ({
      dp__calendar: !0,
      dp__calendar_next: o.value.multiCalendars > 0 && r.instance !== 0
    })), X = J(() => r.specificMode ? { height: `${r.modeHeight}px` } : void 0), m = (w, A, I) => {
      var c, k;
      if (n("set-hover-date", w), (k = (c = w.marker) == null ? void 0 : c.tooltip) != null && k.length) {
        const x = We(u.value[A][I]);
        if (x) {
          const { width: q, height: G } = x.getBoundingClientRect();
          f.value = {
            bottom: `${G}px`,
            left: `${q / 2}px`,
            transform: "translateX(-50%)"
          }, l.value = w.value;
        }
      }
    }, N = () => {
      l.value = null;
    }, Y = (w) => {
      v.value.startX = w.changedTouches[0].screenX, v.value.startY = w.changedTouches[0].screenY;
    }, Q = (w) => {
      v.value.endX = w.changedTouches[0].screenX, v.value.endY = w.changedTouches[0].screenY, W();
    }, re = (w) => {
      r.vertical && !r.inline && w.preventDefault();
    }, W = () => {
      const w = r.vertical ? "Y" : "X";
      Math.abs(v.value[`start${w}`] - v.value[`end${w}`]) > 10 && n("handle-swipe", v.value[`start${w}`] > v.value[`end${w}`] ? "right" : "left");
    }, ee = (w, A, I) => {
      w && (Array.isArray(u.value[A]) ? u.value[A][I] = w : u.value[A] = [w]), r.arrowNavigation && a(u.value, "calendar");
    }, R = (w) => {
      r.monthChangeOnScroll && (w.preventDefault(), n("handle-scroll", w));
    };
    return t({ triggerTransition: D }), (w, A) => {
      var I;
      return p(), b("div", {
        class: we(_(K))
      }, [
        O("div", {
          style: Nt(_(X))
        }, [
          e.specificMode ? S("", !0) : (p(), b("div", {
            key: 0,
            ref_key: "calendarWrapRef",
            ref: d,
            class: we(_(B)),
            role: "grid",
            "aria-label": (I = _(o).ariaLabels) == null ? void 0 : I.calendarWrap
          }, [
            O("div", l_, [
              w.weekNumbers ? (p(), b("div", u_, Z(w.weekNumName), 1)) : S("", !0),
              (p(!0), b(se, null, ke(_(g), (c, k) => (p(), b("div", {
                class: "dp__calendar_header_item",
                role: "gridcell",
                key: k,
                "data-test": "calendar-header"
              }, [
                w.$slots["calendar-header"] ? U(w.$slots, "calendar-header", {
                  key: 0,
                  day: c,
                  index: k
                }) : S("", !0),
                w.$slots["calendar-header"] ? S("", !0) : (p(), b(se, { key: 1 }, [
                  De(Z(c), 1)
                ], 64))
              ]))), 128))
            ]),
            s_,
            z(je, {
              name: h.value,
              css: !!w.transitions
            }, {
              default: ae(() => {
                var c;
                return [
                  s.value ? (p(), b("div", {
                    key: 0,
                    class: "dp__calendar",
                    role: "grid",
                    "aria-label": (c = _(o).ariaLabels) == null ? void 0 : c.calendarDays
                  }, [
                    (p(!0), b(se, null, ke(e.mappedDates, (k, x) => (p(), b("div", {
                      class: "dp__calendar_row",
                      role: "row",
                      key: x
                    }, [
                      w.weekNumbers ? (p(), b("div", f_, [
                        O("div", d_, Z(e.getWeekNum(k.days)), 1)
                      ])) : S("", !0),
                      (p(!0), b(se, null, ke(k.days, (q, G) => {
                        var T, $, j;
                        return p(), b("div", {
                          role: "gridcell",
                          class: "dp__calendar_item",
                          ref_for: !0,
                          ref: (me) => ee(me, x, G),
                          key: G + x,
                          "aria-selected": q.classData.dp__active_date || q.classData.dp__range_start || q.classData.dp__range_start,
                          "aria-disabled": q.classData.dp__cell_disabled,
                          "aria-label": ($ = (T = _(o).ariaLabels) == null ? void 0 : T.day) == null ? void 0 : $.call(T, q),
                          tabindex: "0",
                          "data-test": q.value,
                          onClick: ge((me) => w.$emit("select-date", q), ["stop", "prevent"]),
                          onKeydown: [
                            fe((me) => w.$emit("select-date", q), ["enter"]),
                            fe((me) => w.$emit("handle-space", q), ["space"])
                          ],
                          onMouseover: (me) => m(q, x, G),
                          onMouseleave: N
                        }, [
                          O("div", {
                            class: we(["dp__cell_inner", q.classData])
                          }, [
                            w.$slots.day ? U(w.$slots, "day", {
                              key: 0,
                              day: +q.text,
                              date: q.value
                            }) : S("", !0),
                            w.$slots.day ? S("", !0) : (p(), b(se, { key: 1 }, [
                              De(Z(q.text), 1)
                            ], 64)),
                            q.marker ? (p(), b("div", {
                              key: 2,
                              class: we(_(C)(q.marker)),
                              style: Nt(q.marker.color ? { backgroundColor: q.marker.color } : {})
                            }, null, 6)) : S("", !0),
                            _(H)(q.value) ? (p(), b("div", {
                              key: 3,
                              class: "dp__marker_tooltip",
                              style: Nt(f.value)
                            }, [
                              (j = q.marker) != null && j.tooltip ? (p(), b("div", {
                                key: 0,
                                class: "dp__tooltip_content",
                                onClick: A[0] || (A[0] = ge(() => {
                                }, ["stop"]))
                              }, [
                                (p(!0), b(se, null, ke(q.marker.tooltip, (me, Se) => (p(), b("div", {
                                  key: Se,
                                  class: "dp__tooltip_text"
                                }, [
                                  w.$slots["marker-tooltip"] ? U(w.$slots, "marker-tooltip", {
                                    key: 0,
                                    tooltop: me,
                                    day: q.value
                                  }) : S("", !0),
                                  w.$slots["marker-tooltip"] ? S("", !0) : (p(), b(se, { key: 1 }, [
                                    O("div", {
                                      class: "dp__tooltip_mark",
                                      style: Nt(me.color ? { backgroundColor: me.color } : {})
                                    }, null, 4),
                                    O("div", null, Z(me.text), 1)
                                  ], 64))
                                ]))), 128)),
                                h_
                              ])) : S("", !0)
                            ], 4)) : S("", !0)
                          ], 2)
                        ], 40, p_);
                      }), 128))
                    ]))), 128))
                  ], 8, c_)) : S("", !0)
                ];
              }),
              _: 3
            }, 8, ["name", "css"])
          ], 10, i_))
        ], 4)
      ], 2);
    };
  }
}), y_ = ["aria-label", "aria-disabled"], wa = /* @__PURE__ */ ye({
  __name: "ActionIcon",
  props: {
    ariaLabel: { type: String, default: "" },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["activate", "set-ref"],
  setup(e, { emit: t }) {
    const n = F(null);
    return tt(() => t("set-ref", n)), (r, a) => (p(), b("div", {
      class: "dp__month_year_col_nav",
      onClick: a[0] || (a[0] = (i) => r.$emit("activate")),
      onKeydown: [
        a[1] || (a[1] = fe((i) => r.$emit("activate"), ["enter"])),
        a[2] || (a[2] = fe((i) => r.$emit("activate"), ["space"]))
      ],
      tabindex: "0",
      role: "button",
      "aria-label": e.ariaLabel,
      "aria-disabled": e.disabled,
      ref_key: "elRef",
      ref: n
    }, [
      O("div", {
        class: we(["dp__inner_nav", { dp__inner_nav_disabled: e.disabled }])
      }, [
        U(r.$slots, "default")
      ], 2)
    ], 40, y_));
  }
}), v_ = ["onKeydown"], g_ = { class: "dp__selection_grid_header" }, b_ = ["aria-selected", "aria-disabled", "data-test", "onClick", "onKeydown", "onMouseover"], __ = ["aria-label", "onKeydown"], on = /* @__PURE__ */ ye({
  __name: "SelectionGrid",
  props: {
    items: { type: Array, default: () => [] },
    modelValue: { type: [String, Number], default: null },
    multiModelValue: { type: Array, default: () => [] },
    disabledValues: { type: Array, default: () => [] },
    minValue: { type: [Number, String], default: null },
    maxValue: { type: [Number, String], default: null },
    year: { type: Number, default: 0 },
    skipActive: { type: Boolean, default: !1 },
    headerRefs: { type: Array, default: () => [] },
    skipButtonRef: { type: Boolean, default: !1 },
    monthPicker: { type: Boolean, default: !1 },
    yearPicker: { type: Boolean, default: !1 },
    escClose: { type: Boolean, default: !0 },
    type: { type: String, default: null },
    arrowNavigation: { type: Boolean, default: !1 },
    autoApply: { type: Boolean, default: !1 },
    textInput: { type: Boolean, default: !1 },
    ariaLabels: { type: Object, default: () => ({}) },
    hideNavigation: { type: Array, default: () => [] }
  },
  emits: ["update:model-value", "selected", "toggle", "reset-flow"],
  setup(e, { expose: t, emit: n }) {
    const r = e, { setSelectionGrid: a, buildMultiLevelMatrix: i, setMonthPicker: o } = Pt(), { hideNavigationButtons: l } = it(r), f = F(!1), u = F(null), d = F(null), s = F([]), h = F(), v = F(null);
    ds(() => {
      u.value = null;
    }), tt(() => {
      fn().then(() => N()), P(), g(!0);
    }), Zo(() => g(!1));
    const g = (w) => {
      var A;
      r.arrowNavigation && ((A = r.headerRefs) != null && A.length ? o(w) : a(w));
    }, P = () => {
      const w = We(d);
      w && (r.textInput || w.focus({ preventScroll: !0 }), f.value = w.clientHeight < w.scrollHeight);
    }, D = J(
      () => ({
        dp__overlay: !0
      })
    ), B = J(() => ({
      dp__overlay_col: !0
    })), C = (w) => r.skipActive ? !1 : w.value === r.modelValue, H = J(() => r.items.map((w) => w.filter((A) => A).map((A) => {
      var I, c, k;
      const x = r.disabledValues.some((G) => G === A.value) || m(A.value), q = (I = r.multiModelValue) != null && I.length ? (c = r.multiModelValue) == null ? void 0 : c.some(
        (G) => Me(
          G,
          It(
            r.monthPicker ? an(new Date(), A.value) : new Date(),
            r.monthPicker ? r.year : A.value
          )
        )
      ) : C(A);
      return {
        ...A,
        className: {
          dp__overlay_cell_active: q,
          dp__overlay_cell: !q,
          dp__overlay_cell_disabled: x,
          dp__overlay_cell_active_disabled: x && q,
          dp__overlay_cell_pad: !0,
          dp__cell_in_between: (k = r.multiModelValue) != null && k.length ? Q(A.value) : !1
        }
      };
    }))), K = J(
      () => ({
        dp__button: !0,
        dp__overlay_action: !0,
        dp__over_action_scroll: f.value,
        dp__button_bottom: r.autoApply
      })
    ), X = J(() => {
      var w, A;
      return {
        dp__overlay_container: !0,
        dp__container_flex: ((w = r.items) == null ? void 0 : w.length) <= 6,
        dp__container_block: ((A = r.items) == null ? void 0 : A.length) > 6
      };
    }), m = (w) => {
      const A = r.maxValue || r.maxValue === 0, I = r.minValue || r.minValue === 0;
      return !A && !I ? !1 : A && I ? +w > +r.maxValue || +w < +r.minValue : A ? +w > +r.maxValue : I ? +w < +r.minValue : !1;
    }, N = () => {
      const w = We(u);
      if (w) {
        const A = We(d);
        A && (A.scrollTop = w.offsetTop - A.offsetTop - (A.getBoundingClientRect().height / 2 - w.getBoundingClientRect().height));
      }
    }, Y = (w) => {
      !r.disabledValues.some((A) => A === w) && !m(w) && (n("update:model-value", w), n("selected"));
    }, Q = (w) => {
      const A = r.monthPicker ? r.year : w;
      return as(
        r.multiModelValue,
        It(
          r.monthPicker ? an(new Date(), h.value || 0) : new Date(),
          r.monthPicker ? A : h.value || A
        ),
        It(r.monthPicker ? an(new Date(), w) : new Date(), A)
      );
    }, re = () => {
      n("toggle"), n("reset-flow");
    }, W = () => {
      r.escClose && re();
    }, ee = (w, A, I, c) => {
      w && (A.value === +r.modelValue && !r.disabledValues.includes(A.value) && (u.value = w), r.arrowNavigation && (Array.isArray(s.value[I]) ? s.value[I][c] = w : s.value[I] = [w], R()));
    }, R = () => {
      var w, A;
      const I = (w = r.headerRefs) != null && w.length ? [r.headerRefs].concat(s.value) : s.value.concat([r.skipButtonRef ? [] : [v.value]]);
      i(qe(I), (A = r.headerRefs) != null && A.length ? "monthPicker" : "selectionGrid");
    };
    return t({ focusGrid: P }), (w, A) => {
      var I;
      return p(), b("div", {
        ref_key: "gridWrapRef",
        ref: d,
        class: we(_(D)),
        role: "dialog",
        tabindex: "0",
        onKeydown: fe(W, ["esc"])
      }, [
        O("div", {
          class: we(_(X)),
          role: "grid"
        }, [
          O("div", g_, [
            U(w.$slots, "header")
          ]),
          w.$slots.overlay ? U(w.$slots, "overlay", { key: 0 }) : (p(), b(se, { key: 1 }, [
            (p(!0), b(se, null, ke(_(H), (c, k) => (p(), b("div", {
              class: "dp__overlay_row",
              key: k,
              role: "row"
            }, [
              (p(!0), b(se, null, ke(c, (x, q) => (p(), b("div", {
                role: "gridcell",
                class: we(_(B)),
                key: x.value,
                "aria-selected": x.value === e.modelValue && !e.disabledValues.includes(x.value),
                "aria-disabled": x.className.dp__overlay_cell_disabled,
                ref_for: !0,
                ref: (G) => ee(G, x, k, q),
                tabindex: "0",
                "data-test": x.text,
                onClick: (G) => Y(x.value),
                onKeydown: [
                  fe((G) => Y(x.value), ["enter"]),
                  fe((G) => Y(x.value), ["space"])
                ],
                onMouseover: (G) => h.value = x.value
              }, [
                O("div", {
                  class: we(x.className)
                }, [
                  w.$slots.item ? U(w.$slots, "item", {
                    key: 0,
                    item: x
                  }) : S("", !0),
                  w.$slots.item ? S("", !0) : (p(), b(se, { key: 1 }, [
                    De(Z(x.text), 1)
                  ], 64))
                ], 2)
              ], 42, b_))), 128))
            ]))), 128)),
            w.$slots["button-icon"] ? ze((p(), b("div", {
              key: 0,
              role: "button",
              "aria-label": (I = e.ariaLabels) == null ? void 0 : I.toggleOverlay,
              class: we(_(K)),
              tabindex: "0",
              ref_key: "toggleButton",
              ref: v,
              onClick: re,
              onKeydown: fe(re, ["enter"])
            }, [
              U(w.$slots, "button-icon")
            ], 42, __)), [
              [ut, !_(l)(e.type)]
            ]) : S("", !0)
          ], 64))
        ], 2)
      ], 42, v_);
    };
  }
}), w_ = ["aria-label"], cu = /* @__PURE__ */ ye({
  __name: "RegularPicker",
  props: {
    ariaLabel: { type: String, default: "" },
    showSelectionGrid: { type: Boolean, default: !1 },
    modelValue: { type: Number, default: null },
    items: { type: Array, default: () => [] },
    disabledValues: { type: Array, default: () => [] },
    minValue: { type: Number, default: null },
    maxValue: { type: Number, default: null },
    slotName: { type: String, default: "" },
    overlaySlot: { type: String, default: "" },
    headerRefs: { type: Array, default: () => [] },
    escClose: { type: Boolean, default: !0 },
    type: { type: String, default: null },
    transitions: { type: [Object, Boolean], default: !1 },
    arrowNavigation: { type: Boolean, default: !1 },
    autoApply: { type: Boolean, default: !1 },
    textInput: { type: Boolean, default: !1 },
    ariaLabels: { type: Object, default: () => ({}) },
    hideNavigation: { type: Array, default: () => [] }
  },
  emits: ["update:model-value", "toggle", "set-ref"],
  setup(e, { emit: t }) {
    const n = e, { transitionName: r, showTransition: a } = Zr(n.transitions), i = F(null);
    return tt(() => t("set-ref", i)), (o, l) => (p(), b(se, null, [
      O("div", {
        class: "dp__month_year_select",
        onClick: l[0] || (l[0] = (f) => o.$emit("toggle")),
        onKeydown: [
          l[1] || (l[1] = fe((f) => o.$emit("toggle"), ["enter"])),
          l[2] || (l[2] = fe((f) => o.$emit("toggle"), ["space"]))
        ],
        role: "button",
        "aria-label": e.ariaLabel,
        tabindex: "0",
        ref_key: "elRef",
        ref: i
      }, [
        U(o.$slots, "default")
      ], 40, w_),
      z(je, {
        name: _(r)(e.showSelectionGrid),
        css: _(a)
      }, {
        default: ae(() => [
          e.showSelectionGrid ? (p(), te(on, Ye({ key: 0 }, {
            modelValue: e.modelValue,
            items: e.items,
            disabledValues: e.disabledValues,
            minValue: e.minValue,
            maxValue: e.maxValue,
            escClose: e.escClose,
            type: e.type,
            arrowNavigation: e.arrowNavigation,
            textInput: e.textInput,
            autoApply: e.autoApply,
            ariaLabels: e.ariaLabels,
            hideNavigation: e.hideNavigation
          }, {
            "header-refs": [],
            "onUpdate:modelValue": l[3] || (l[3] = (f) => o.$emit("update:model-value", f)),
            onToggle: l[4] || (l[4] = (f) => o.$emit("toggle"))
          }), rt({
            "button-icon": ae(() => [
              o.$slots["calendar-icon"] ? U(o.$slots, "calendar-icon", { key: 0 }) : S("", !0),
              o.$slots["calendar-icon"] ? S("", !0) : (p(), te(_(Jr), { key: 1 }))
            ]),
            _: 2
          }, [
            o.$slots[e.slotName] ? {
              name: "item",
              fn: ae(({ item: f }) => [
                U(o.$slots, e.slotName, { item: f })
              ]),
              key: "0"
            } : void 0,
            o.$slots[e.overlaySlot] ? {
              name: "overlay",
              fn: ae(() => [
                U(o.$slots, e.overlaySlot)
              ]),
              key: "1"
            } : void 0,
            o.$slots[`${e.overlaySlot}-header`] ? {
              name: "header",
              fn: ae(() => [
                U(o.$slots, `${e.overlaySlot}-header`)
              ]),
              key: "2"
            } : void 0
          ]), 1040)) : S("", !0)
        ]),
        _: 3
      }, 8, ["name", "css"])
    ], 64));
  }
}), O_ = { class: "dp__month_year_row" }, $_ = { class: "dp__month_year_wrap" }, k_ = { class: "dp__month_picker_header" }, S_ = ["aria-label"], P_ = ["aria-label"], T_ = ["aria-label"], D_ = /* @__PURE__ */ ye({
  __name: "MonthYearPicker",
  props: {
    month: { type: Number, default: 0 },
    year: { type: Number, default: 0 },
    instance: { type: Number, default: 0 },
    years: { type: Array, default: () => [] },
    months: { type: Array, default: () => [] },
    internalModelValue: { type: [Date, Array], default: null },
    ...Tt
  },
  emits: ["update-month-year", "month-year-select", "mount", "reset-flow", "overlay-closed"],
  setup(e, { expose: t, emit: n }) {
    const r = e, { defaults: a } = it(r), { transitionName: i, showTransition: o } = Zr(a.value.transitions), { buildMatrix: l } = Pt(), { handleMonthYearChange: f, isDisabled: u, updateMonthYear: d } = qb(r, n), s = F(!1), h = F(!1), v = F([null, null, null, null]), g = F(null), P = F(null), D = F(null);
    tt(() => {
      n("mount");
    });
    const B = ($) => ({
      get: () => r[$],
      set: (j) => {
        const me = $ === "month" ? "year" : "month";
        n("update-month-year", { [$]: j, [me]: r[me] }), n("month-year-select", $ === "year"), $ === "month" ? k(!0) : x(!0);
      }
    }), C = J(B("month")), H = J(B("year")), K = J(() => ($) => {
      const j = $ === "month";
      return {
        showSelectionGrid: (j ? s : h).value,
        items: (j ? w : A).value,
        disabledValues: a.value.filters[j ? "months" : "years"],
        minValue: (j ? Y : m).value,
        maxValue: (j ? Q : N).value,
        headerRefs: j && r.monthPicker ? [g.value, P.value, D.value] : [],
        escClose: r.escClose,
        transitions: a.value.transitions,
        ariaLabels: a.value.ariaLabels,
        textInput: r.textInput,
        autoApply: r.autoApply,
        arrowNavigation: r.arrowNavigation,
        hideNavigation: r.hideNavigation
      };
    }), X = J(() => ($) => ({
      month: r.month,
      year: r.year,
      items: $ === "month" ? r.months : r.years,
      instance: r.instance,
      updateMonthYear: d,
      toggle: $ === "month" ? k : x
    })), m = J(() => r.minDate ? Ee(L(r.minDate)) : null), N = J(() => r.maxDate ? Ee(L(r.maxDate)) : null), Y = J(() => {
      if (r.minDate && m.value) {
        if (m.value > r.year)
          return 12;
        if (m.value === r.year)
          return Ne(L(r.minDate));
      }
      return null;
    }), Q = J(() => r.maxDate && N.value ? N.value < r.year ? -1 : N.value === r.year ? Ne(L(r.maxDate)) : null : null), re = J(() => r.range && r.internalModelValue && (r.monthPicker || r.yearPicker) ? r.internalModelValue : []), W = ($) => $.reverse(), ee = ($, j = !1) => {
      const me = [], Se = (xe) => j ? W(xe) : xe;
      for (let xe = 0; xe < $.length; xe += 3) {
        const Oe = [$[xe], $[xe + 1], $[xe + 2]];
        me.push(Se(Oe));
      }
      return j ? me.reverse() : me;
    }, R = J(() => r.months.find((j) => j.value === r.month) || { text: "", value: 0 }), w = J(() => ee(r.months)), A = J(() => ee(r.years, r.reverseYears)), I = J(() => a.value.multiCalendars ? r.multiCalendarsSolo ? !0 : r.instance === 0 : !0), c = J(() => a.value.multiCalendars ? r.multiCalendarsSolo ? !0 : r.instance === a.value.multiCalendars - 1 : !0), k = ($ = !1) => {
      q($), s.value = !s.value, s.value || n("overlay-closed");
    }, x = ($ = !1) => {
      q($), h.value = !h.value, h.value || n("overlay-closed");
    }, q = ($) => {
      $ || n("reset-flow");
    }, G = ($ = !1) => {
      n("update-month-year", {
        year: $ ? r.year + 1 : r.year - 1,
        month: r.month,
        fromNav: !0
      });
    }, T = ($, j) => {
      r.arrowNavigation && (v.value[j] = We($), l(v.value, "monthYear"));
    };
    return t({
      toggleMonthPicker: k,
      toggleYearPicker: x
    }), ($, j) => {
      var me, Se, xe, Oe, ve;
      return p(), b("div", O_, [
        $.$slots["month-year"] ? U($.$slots, "month-year", ot(Ye({ key: 0 }, { month: e.month, year: e.year, months: e.months, years: e.years, updateMonthYear: _(d), handleMonthYearChange: _(f), instance: e.instance }))) : (p(), b(se, { key: 1 }, [
          !$.monthPicker && !$.yearPicker ? (p(), b(se, { key: 0 }, [
            _(I) && !$.vertical ? (p(), te(wa, {
              key: 0,
              "aria-label": (me = _(a).ariaLabels) == null ? void 0 : me.prevMonth,
              disabled: _(u)(!1),
              onActivate: j[0] || (j[0] = (ie) => _(f)(!1)),
              onSetRef: j[1] || (j[1] = (ie) => T(ie, 0))
            }, {
              default: ae(() => [
                $.$slots["arrow-left"] ? U($.$slots, "arrow-left", { key: 0 }) : S("", !0),
                $.$slots["arrow-left"] ? S("", !0) : (p(), te(_(Jl), { key: 1 }))
              ]),
              _: 3
            }, 8, ["aria-label", "disabled"])) : S("", !0),
            O("div", $_, [
              z(cu, Ye({
                type: "month",
                "slot-name": "month-overlay-val",
                "overlay-slot": "overlay-month",
                "aria-label": (Se = _(a).ariaLabels) == null ? void 0 : Se.openMonthsOverlay,
                modelValue: _(C),
                "onUpdate:modelValue": j[2] || (j[2] = (ie) => Mt(C) ? C.value = ie : null)
              }, _(K)("month"), {
                onToggle: k,
                onSetRef: j[3] || (j[3] = (ie) => T(ie, 1))
              }), rt({
                default: ae(() => [
                  $.$slots.month ? U($.$slots, "month", ot(Ye({ key: 0 }, _(R)))) : S("", !0),
                  $.$slots.month ? S("", !0) : (p(), b(se, { key: 1 }, [
                    De(Z(_(R).text), 1)
                  ], 64))
                ]),
                _: 2
              }, [
                $.$slots["calendar-icon"] ? {
                  name: "calendar-icon",
                  fn: ae(() => [
                    U($.$slots, "calendar-icon")
                  ]),
                  key: "0"
                } : void 0,
                $.$slots["month-overlay-value"] ? {
                  name: "month-overlay-val",
                  fn: ae(({ item: ie }) => [
                    U($.$slots, "month-overlay-value", {
                      text: ie.text,
                      value: ie.value
                    })
                  ]),
                  key: "1"
                } : void 0,
                $.$slots["month-overlay"] ? {
                  name: "overlay-month",
                  fn: ae(() => [
                    U($.$slots, "month-overlay", ot(bt(_(X)("month"))))
                  ]),
                  key: "2"
                } : void 0,
                $.$slots["month-overlay-header"] ? {
                  name: "overlay-month-header",
                  fn: ae(() => [
                    U($.$slots, "month-overlay-header", { toggle: k })
                  ]),
                  key: "3"
                } : void 0
              ]), 1040, ["aria-label", "modelValue"]),
              z(cu, Ye({
                type: "year",
                "slot-name": "year-overlay-val",
                "overlay-slot": "overlay-year",
                "aria-label": (xe = _(a).ariaLabels) == null ? void 0 : xe.openYearsOverlay,
                modelValue: _(H),
                "onUpdate:modelValue": j[4] || (j[4] = (ie) => Mt(H) ? H.value = ie : null)
              }, _(K)("year"), {
                onToggle: x,
                onSetRef: j[5] || (j[5] = (ie) => T(ie, 2))
              }), rt({
                default: ae(() => [
                  $.$slots.year ? U($.$slots, "year", {
                    key: 0,
                    year: e.year
                  }) : S("", !0),
                  $.$slots.year ? S("", !0) : (p(), b(se, { key: 1 }, [
                    De(Z(e.year), 1)
                  ], 64))
                ]),
                _: 2
              }, [
                $.$slots["calendar-icon"] ? {
                  name: "calendar-icon",
                  fn: ae(() => [
                    U($.$slots, "calendar-icon")
                  ]),
                  key: "0"
                } : void 0,
                $.$slots["year-overlay-value"] ? {
                  name: "year-overlay-val",
                  fn: ae(({ item: ie }) => [
                    U($.$slots, "year-overlay-value", {
                      text: ie.text,
                      value: ie.value
                    })
                  ]),
                  key: "1"
                } : void 0,
                $.$slots["year-overlay"] ? {
                  name: "overlay-year",
                  fn: ae(() => [
                    U($.$slots, "year-overlay", ot(bt(_(X)("year"))))
                  ]),
                  key: "2"
                } : void 0,
                $.$slots["year-overlay-header"] ? {
                  name: "overlay-year-header",
                  fn: ae(() => [
                    U($.$slots, "year-overlay-header", { toggle: x })
                  ]),
                  key: "3"
                } : void 0
              ]), 1040, ["aria-label", "modelValue"])
            ]),
            _(I) && $.vertical ? (p(), te(wa, {
              key: 1,
              "aria-label": (Oe = _(a).ariaLabels) == null ? void 0 : Oe.prevMonth,
              disabled: _(u)(!1),
              onActivate: j[6] || (j[6] = (ie) => _(f)(!1))
            }, {
              default: ae(() => [
                $.$slots["arrow-up"] ? U($.$slots, "arrow-up", { key: 0 }) : S("", !0),
                $.$slots["arrow-up"] ? S("", !0) : (p(), te(_(ns), { key: 1 }))
              ]),
              _: 3
            }, 8, ["aria-label", "disabled"])) : S("", !0),
            _(c) ? (p(), te(wa, {
              key: 2,
              ref: "rightIcon",
              disabled: _(u)(!0),
              "aria-label": (ve = _(a).ariaLabels) == null ? void 0 : ve.nextMonth,
              onActivate: j[7] || (j[7] = (ie) => _(f)(!0)),
              onSetRef: j[8] || (j[8] = (ie) => T(ie, 3))
            }, {
              default: ae(() => [
                $.$slots[$.vertical ? "arrow-down" : "arrow-right"] ? U($.$slots, $.vertical ? "arrow-down" : "arrow-right", { key: 0 }) : S("", !0),
                $.$slots[$.vertical ? "arrow-down" : "arrow-right"] ? S("", !0) : (p(), te(_n($.vertical ? _(rs) : _(Zl)), { key: 1 }))
              ]),
              _: 3
            }, 8, ["disabled", "aria-label"])) : S("", !0)
          ], 64)) : S("", !0),
          $.monthPicker ? (p(), te(on, Ye({ key: 1 }, _(K)("month"), {
            "skip-active": $.range,
            year: e.year,
            "multi-model-value": _(re),
            "month-picker": "",
            modelValue: _(C),
            "onUpdate:modelValue": j[17] || (j[17] = (ie) => Mt(C) ? C.value = ie : null),
            onToggle: k,
            onSelected: j[18] || (j[18] = (ie) => $.$emit("overlay-closed"))
          }), rt({
            header: ae(() => {
              var ie, at, he;
              return [
                O("div", k_, [
                  O("div", {
                    class: "dp__month_year_col_nav",
                    tabindex: "0",
                    ref_key: "mpPrevIconRef",
                    ref: g,
                    onClick: j[9] || (j[9] = (Pe) => G(!1)),
                    onKeydown: j[10] || (j[10] = fe((Pe) => G(!1), ["enter"]))
                  }, [
                    O("div", {
                      class: "dp__inner_nav",
                      role: "button",
                      "aria-label": (ie = _(a).ariaLabels) == null ? void 0 : ie.prevMonth
                    }, [
                      $.$slots["arrow-left"] ? U($.$slots, "arrow-left", { key: 0 }) : S("", !0),
                      $.$slots["arrow-left"] ? S("", !0) : (p(), te(_(Jl), { key: 1 }))
                    ], 8, S_)
                  ], 544),
                  O("div", {
                    class: "dp__pointer",
                    role: "button",
                    ref_key: "mpYearButtonRef",
                    ref: P,
                    "aria-label": (at = _(a).ariaLabels) == null ? void 0 : at.openYearsOverlay,
                    tabindex: "0",
                    onClick: j[11] || (j[11] = () => x(!1)),
                    onKeydown: j[12] || (j[12] = fe(() => x(!1), ["enter"]))
                  }, [
                    $.$slots.year ? U($.$slots, "year", {
                      key: 0,
                      year: e.year
                    }) : S("", !0),
                    $.$slots.year ? S("", !0) : (p(), b(se, { key: 1 }, [
                      De(Z(e.year), 1)
                    ], 64))
                  ], 40, P_),
                  O("div", {
                    class: "dp__month_year_col_nav",
                    tabindex: "0",
                    ref_key: "mpNextIconRef",
                    ref: D,
                    onClick: j[13] || (j[13] = (Pe) => G(!0)),
                    onKeydown: j[14] || (j[14] = fe((Pe) => G(!0), ["enter"]))
                  }, [
                    O("div", {
                      class: "dp__inner_nav",
                      role: "button",
                      "aria-label": (he = _(a).ariaLabels) == null ? void 0 : he.nextMonth
                    }, [
                      $.$slots["arrow-right"] ? U($.$slots, "arrow-right", { key: 0 }) : S("", !0),
                      $.$slots["arrow-right"] ? S("", !0) : (p(), te(_(Zl), { key: 1 }))
                    ], 8, T_)
                  ], 544)
                ]),
                z(je, {
                  name: _(i)(h.value),
                  css: _(o)
                }, {
                  default: ae(() => [
                    h.value ? (p(), te(on, Ye({ key: 0 }, _(K)("year"), {
                      modelValue: _(H),
                      "onUpdate:modelValue": j[15] || (j[15] = (Pe) => Mt(H) ? H.value = Pe : null),
                      onToggle: x,
                      onSelected: j[16] || (j[16] = (Pe) => $.$emit("overlay-closed"))
                    }), rt({
                      "button-icon": ae(() => [
                        $.$slots["calendar-icon"] ? U($.$slots, "calendar-icon", { key: 0 }) : S("", !0),
                        $.$slots["calendar-icon"] ? S("", !0) : (p(), te(_(Jr), { key: 1 }))
                      ]),
                      _: 2
                    }, [
                      $.$slots["year-overlay-value"] ? {
                        name: "item",
                        fn: ae(({ item: Pe }) => [
                          U($.$slots, "year-overlay-value", {
                            text: Pe.text,
                            value: Pe.value
                          })
                        ]),
                        key: "0"
                      } : void 0
                    ]), 1040, ["modelValue"])) : S("", !0)
                  ]),
                  _: 3
                }, 8, ["name", "css"])
              ];
            }),
            _: 2
          }, [
            $.$slots["month-overlay-value"] ? {
              name: "item",
              fn: ae(({ item: ie }) => [
                U($.$slots, "month-overlay-value", {
                  text: ie.text,
                  value: ie.value
                })
              ]),
              key: "0"
            } : void 0
          ]), 1040, ["skip-active", "year", "multi-model-value", "modelValue"])) : S("", !0),
          $.yearPicker ? (p(), te(on, Ye({ key: 2 }, _(K)("year"), {
            modelValue: _(H),
            "onUpdate:modelValue": j[19] || (j[19] = (ie) => Mt(H) ? H.value = ie : null),
            "multi-model-value": _(re),
            "skip-active": $.range,
            "skip-button-ref": "",
            "year-picker": "",
            onToggle: x,
            onSelected: j[20] || (j[20] = (ie) => $.$emit("overlay-closed"))
          }), rt({ _: 2 }, [
            $.$slots["year-overlay-value"] ? {
              name: "item",
              fn: ae(({ item: ie }) => [
                U($.$slots, "year-overlay-value", {
                  text: ie.text,
                  value: ie.value
                })
              ]),
              key: "0"
            } : void 0
          ]), 1040, ["modelValue", "multi-model-value", "skip-active"])) : S("", !0)
        ], 64))
      ]);
    };
  }
}), R_ = {
  key: 0,
  class: "dp__time_input"
}, C_ = ["aria-label", "onKeydown", "onClick"], x_ = ["aria-label", "onKeydown", "onClick"], M_ = ["aria-label", "onKeydown", "onClick"], N_ = { key: 0 }, E_ = ["aria-label", "onKeydown"], A_ = /* @__PURE__ */ ye({
  __name: "TimeInput",
  props: {
    hours: { type: Number, default: 0 },
    minutes: { type: Number, default: 0 },
    seconds: { type: Number, default: 0 },
    closeTimePickerBtn: { type: Object, default: null },
    order: { type: Number, default: 0 },
    ...Tt
  },
  emits: [
    "set-hours",
    "set-minutes",
    "update:hours",
    "update:minutes",
    "update:seconds",
    "reset-flow",
    "mounted",
    "overlay-closed"
  ],
  setup(e, { expose: t, emit: n }) {
    const r = e, { setTimePickerElements: a, setTimePickerBackRef: i } = Pt(), { defaults: o } = it(r), { transitionName: l, showTransition: f } = Zr(o.value.transitions), u = cn({
      hours: !1,
      minutes: !1,
      seconds: !1
    }), d = F("AM"), s = F(null), h = F([]);
    tt(() => {
      n("mounted");
    });
    const v = (R, w) => Nu(Ke(L(), R), w), g = (R, w) => _g(Ke(L(), R), w), P = J(
      () => ({
        dp__time_col: !0,
        dp__time_col_reg: !r.enableSeconds && r.is24,
        dp__time_col_reg_with_button: !r.enableSeconds && !r.is24,
        dp__time_col_sec: r.enableSeconds && r.is24,
        dp__time_col_sec_with_button: r.enableSeconds && !r.is24
      })
    ), D = J(() => {
      const R = [{ type: "hours" }, { type: "", separator: !0 }, { type: "minutes" }];
      return r.enableSeconds ? R.concat([{ type: "", separator: !0 }, { type: "seconds" }]) : R;
    }), B = J(() => D.value.filter((R) => !R.separator)), C = J(() => (R) => {
      if (R === "hours") {
        const w = Y(r.hours);
        return { text: w < 10 ? `0${w}` : `${w}`, value: w };
      }
      return { text: r[R] < 10 ? `0${r[R]}` : `${r[R]}`, value: r[R] };
    }), H = (R) => {
      const w = r.is24 ? 24 : 12, A = R === "hours" ? w : 60, I = +r[`${R}GridIncrement`], c = R === "hours" && !r.is24 ? I : 0, k = [];
      for (let x = c; x < A; x += I)
        k.push({ value: x, text: x < 10 ? `0${x}` : `${x}` });
      return R === "hours" && !r.is24 && k.push({ value: 0, text: "12" }), Mb(k);
    }, K = (R) => r[`no${R[0].toUpperCase() + R.slice(1)}Overlay`], X = (R) => {
      K(R) || (u[R] = !u[R], u[R] || n("overlay-closed"));
    }, m = (R) => R === "hours" ? vt : R === "minutes" ? gt : Ht, N = (R, w = !0) => {
      const A = w ? v : g;
      n(
        `update:${R}`,
        m(R)(A({ [R]: +r[R] }, { [R]: +r[`${R}Increment`] }))
      );
    }, Y = (R) => r.is24 ? R : (R >= 12 ? d.value = "PM" : d.value = "AM", Ib(R)), Q = () => {
      d.value === "PM" ? (d.value = "AM", n("update:hours", r.hours - 12)) : (d.value = "PM", n("update:hours", r.hours + 12));
    }, re = (R) => {
      u[R] = !0;
    }, W = (R, w, A) => {
      if (R && r.arrowNavigation) {
        Array.isArray(h.value[w]) ? h.value[w][A] = R : h.value[w] = [R];
        const I = h.value.reduce(
          (c, k) => k.map((x, q) => [...c[q] || [], k[q]]),
          []
        );
        i(r.closeTimePickerBtn), s.value && (I[1] = I[1].concat(s.value)), a(I, r.order);
      }
    }, ee = (R, w) => R === "hours" && !r.is24 ? n(`update:${R}`, d.value === "PM" ? w + 12 : w) : n(`update:${R}`, w);
    return t({ openChildCmp: re }), (R, w) => {
      var A;
      return R.disabled ? S("", !0) : (p(), b("div", R_, [
        (p(!0), b(se, null, ke(_(D), (I, c) => {
          var k, x, q;
          return p(), b("div", {
            key: c,
            class: we(_(P))
          }, [
            I.separator ? (p(), b(se, { key: 0 }, [
              De(" : ")
            ], 64)) : (p(), b(se, { key: 1 }, [
              O("div", {
                class: "dp__inc_dec_button",
                role: "button",
                "aria-label": (k = _(o).ariaLabels) == null ? void 0 : k.incrementValue(I.type),
                tabindex: "0",
                onKeydown: [
                  fe((G) => N(I.type), ["enter"]),
                  fe((G) => N(I.type), ["space"])
                ],
                onClick: (G) => N(I.type),
                ref_for: !0,
                ref: (G) => W(G, c, 0)
              }, [
                R.$slots["arrow-up"] ? U(R.$slots, "arrow-up", { key: 0 }) : S("", !0),
                R.$slots["arrow-up"] ? S("", !0) : (p(), te(_(ns), { key: 1 }))
              ], 40, C_),
              O("div", {
                role: "button",
                "aria-label": (x = _(o).ariaLabels) == null ? void 0 : x.openTpOverlay(I.type),
                class: we(K(I.type) ? "" : "dp__time_display"),
                tabindex: "0",
                onKeydown: [
                  fe((G) => X(I.type), ["enter"]),
                  fe((G) => X(I.type), ["space"])
                ],
                onClick: (G) => X(I.type),
                ref_for: !0,
                ref: (G) => W(G, c, 1)
              }, [
                R.$slots[I.type] ? U(R.$slots, I.type, {
                  key: 0,
                  text: _(C)(I.type).text,
                  value: _(C)(I.type).value
                }) : S("", !0),
                R.$slots[I.type] ? S("", !0) : (p(), b(se, { key: 1 }, [
                  De(Z(_(C)(I.type).text), 1)
                ], 64))
              ], 42, x_),
              O("div", {
                class: "dp__inc_dec_button",
                role: "button",
                "aria-label": (q = _(o).ariaLabels) == null ? void 0 : q.decrementValue(I.type),
                tabindex: "0",
                onKeydown: [
                  fe((G) => N(I.type, !1), ["enter"]),
                  fe((G) => N(I.type, !1), ["space"])
                ],
                onClick: (G) => N(I.type, !1),
                ref_for: !0,
                ref: (G) => W(G, c, 2)
              }, [
                R.$slots["arrow-down"] ? U(R.$slots, "arrow-down", { key: 0 }) : S("", !0),
                R.$slots["arrow-down"] ? S("", !0) : (p(), te(_(rs), { key: 1 }))
              ], 40, M_)
            ], 64))
          ], 2);
        }), 128)),
        R.is24 ? S("", !0) : (p(), b("div", N_, [
          R.$slots["am-pm-button"] ? U(R.$slots, "am-pm-button", {
            key: 0,
            toggle: Q,
            value: d.value
          }) : S("", !0),
          R.$slots["am-pm-button"] ? S("", !0) : (p(), b("button", {
            key: 1,
            ref_key: "amPmButton",
            ref: s,
            type: "button",
            class: "dp__pm_am_button",
            role: "button",
            "aria-label": (A = _(o).ariaLabels) == null ? void 0 : A.amPmButton,
            tabindex: "0",
            onClick: Q,
            onKeydown: [
              fe(ge(Q, ["prevent"]), ["enter"]),
              fe(ge(Q, ["prevent"]), ["space"])
            ]
          }, Z(d.value), 41, E_))
        ])),
        (p(!0), b(se, null, ke(_(B), (I, c) => (p(), te(je, {
          key: c,
          name: _(l)(u[I.type]),
          css: _(f)
        }, {
          default: ae(() => [
            u[I.type] ? (p(), te(on, {
              key: 0,
              items: H(I.type),
              "disabled-values": _(o).filters.times[I.type],
              "esc-close": R.escClose,
              "aria-labels": _(o).ariaLabels,
              "hide-navigation": R.hideNavigation,
              "onUpdate:modelValue": (k) => ee(I.type, k),
              onSelected: (k) => X(I.type),
              onToggle: (k) => X(I.type),
              onResetFlow: w[0] || (w[0] = (k) => R.$emit("reset-flow")),
              type: I.type
            }, rt({
              "button-icon": ae(() => [
                R.$slots["clock-icon"] ? U(R.$slots, "clock-icon", { key: 0 }) : S("", !0),
                R.$slots["clock-icon"] ? S("", !0) : (p(), te(_(ts), { key: 1 }))
              ]),
              _: 2
            }, [
              R.$slots[`${I.type}-overlay-value`] ? {
                name: "item",
                fn: ae(({ item: k }) => [
                  U(R.$slots, `${I.type}-overlay-value`, {
                    text: k.text,
                    value: k.value
                  })
                ]),
                key: "0"
              } : void 0
            ]), 1032, ["items", "disabled-values", "esc-close", "aria-labels", "hide-navigation", "onUpdate:modelValue", "onSelected", "onToggle", "type"])) : S("", !0)
          ]),
          _: 2
        }, 1032, ["name", "css"]))), 128))
      ]));
    };
  }
}), I_ = ["aria-label"], B_ = { class: "dp__overlay_container dp__container_flex" }, V_ = {
  key: 1,
  class: "dp__overlay_row"
}, L_ = ["aria-label"], F_ = /* @__PURE__ */ ye({
  __name: "TimePicker",
  props: {
    hours: { type: [Number, Array], default: 0 },
    minutes: { type: [Number, Array], default: 0 },
    seconds: { type: [Number, Array], default: 0 },
    internalModelValue: { type: [Date, Array], default: null },
    ...Tt
  },
  emits: [
    "update:hours",
    "update:minutes",
    "update:seconds",
    "mount",
    "reset-flow",
    "overlay-closed"
  ],
  setup(e, { expose: t, emit: n }) {
    const r = e, { buildMatrix: a, setTimePicker: i } = Pt(), o = Jo(), { hideNavigationButtons: l, defaults: f } = it(r), { transitionName: u, showTransition: d } = Zr(f.value.transitions), s = F(null), h = F(null), v = F([]), g = F(null);
    tt(() => {
      n("mount"), !r.timePicker && r.arrowNavigation ? a([We(s.value)], "time") : i(!0, r.timePicker);
    });
    const P = J(() => r.range && r.modelAuto ? us(r.internalModelValue) : !0), D = F(!1), B = (W) => ({
      hours: Array.isArray(r.hours) ? r.hours[W] : r.hours,
      minutes: Array.isArray(r.minutes) ? r.minutes[W] : r.minutes,
      seconds: Array.isArray(r.seconds) ? r.seconds[W] : r.seconds
    }), C = J(() => {
      const W = [];
      if (r.range)
        for (let ee = 0; ee < 2; ee++)
          W.push(B(ee));
      else
        W.push(B(0));
      return W;
    }), H = (W, ee = !1, R = "") => {
      ee || n("reset-flow"), D.value = W, r.arrowNavigation && (i(W), W || n("overlay-closed")), fn(() => {
        R !== "" && v.value[0] && v.value[0].openChildCmp(R);
      });
    }, K = J(() => ({
      dp__button: !0,
      dp__button_bottom: r.autoApply
    })), X = Et(o, "timePicker"), m = (W, ee, R) => r.range ? ee === 0 ? [W, C.value[1][R]] : [C.value[0][R], W] : W, N = (W) => {
      n("update:hours", W);
    }, Y = (W) => {
      n("update:minutes", W);
    }, Q = (W) => {
      n("update:seconds", W);
    }, re = () => {
      g.value && r.arrowNavigation && g.value.focus({ preventScroll: !0 });
    };
    return t({ toggleTimePicker: H }), (W, ee) => {
      var R;
      return p(), b("div", null, [
        W.timePicker ? S("", !0) : ze((p(), b("div", {
          key: 0,
          class: we(_(K)),
          role: "button",
          "aria-label": (R = _(f).ariaLabels) == null ? void 0 : R.openTimePicker,
          tabindex: "0",
          ref_key: "openTimePickerBtn",
          ref: s,
          onKeydown: [
            ee[0] || (ee[0] = fe((w) => H(!0), ["enter"])),
            ee[1] || (ee[1] = fe((w) => H(!0), ["space"]))
          ],
          onClick: ee[2] || (ee[2] = (w) => H(!0))
        }, [
          W.$slots["clock-icon"] ? U(W.$slots, "clock-icon", { key: 0 }) : S("", !0),
          W.$slots["clock-icon"] ? S("", !0) : (p(), te(_(ts), { key: 1 }))
        ], 42, I_)), [
          [ut, !_(l)("time")]
        ]),
        z(je, {
          name: _(u)(D.value),
          css: _(d)
        }, {
          default: ae(() => {
            var w;
            return [
              D.value || W.timePicker ? (p(), b("div", {
                key: 0,
                class: "dp__overlay",
                ref_key: "overlayRef",
                ref: g,
                tabindex: "0"
              }, [
                O("div", B_, [
                  W.$slots["time-picker-overlay"] ? U(W.$slots, "time-picker-overlay", {
                    key: 0,
                    hours: e.hours,
                    minutes: e.minutes,
                    seconds: e.seconds,
                    setHours: N,
                    setMinutes: Y,
                    setSeconds: Q
                  }) : S("", !0),
                  W.$slots["time-picker-overlay"] ? S("", !0) : (p(), b("div", V_, [
                    (p(!0), b(se, null, ke(_(C), (A, I) => ze((p(), te(A_, Ye({ key: I }, {
                      ...W.$props,
                      order: I,
                      hours: A.hours,
                      minutes: A.minutes,
                      seconds: A.seconds,
                      closeTimePickerBtn: h.value,
                      disabled: I === 0 ? W.fixedStart : W.fixedEnd
                    }, {
                      ref_for: !0,
                      ref_key: "timeInputRefs",
                      ref: v,
                      "onUpdate:hours": (c) => N(m(c, I, "hours")),
                      "onUpdate:minutes": (c) => Y(m(c, I, "minutes")),
                      "onUpdate:seconds": (c) => Q(m(c, I, "seconds")),
                      onMounted: re,
                      onOverlayClosed: re
                    }), rt({ _: 2 }, [
                      ke(_(X), (c, k) => ({
                        name: c,
                        fn: ae((x) => [
                          U(W.$slots, c, ot(bt(x)))
                        ])
                      }))
                    ]), 1040, ["onUpdate:hours", "onUpdate:minutes", "onUpdate:seconds"])), [
                      [ut, I === 0 ? !0 : _(P)]
                    ])), 128))
                  ])),
                  W.timePicker ? S("", !0) : ze((p(), b("div", {
                    key: 2,
                    ref_key: "closeTimePickerBtn",
                    ref: h,
                    class: we(_(K)),
                    role: "button",
                    "aria-label": (w = _(f).ariaLabels) == null ? void 0 : w.closeTimePicker,
                    tabindex: "0",
                    onKeydown: [
                      ee[3] || (ee[3] = fe((A) => H(!1), ["enter"])),
                      ee[4] || (ee[4] = fe((A) => H(!1), ["space"]))
                    ],
                    onClick: ee[5] || (ee[5] = (A) => H(!1))
                  }, [
                    W.$slots["calendar-icon"] ? U(W.$slots, "calendar-icon", { key: 0 }) : S("", !0),
                    W.$slots["calendar-icon"] ? S("", !0) : (p(), te(_(Jr), { key: 1 }))
                  ], 42, L_)), [
                    [ut, !_(l)("time")]
                  ])
                ])
              ], 512)) : S("", !0)
            ];
          }),
          _: 3
        }, 8, ["name", "css"])
      ]);
    };
  }
}), U_ = (e, t) => {
  const { isDisabled: n, matchDate: r, getWeekFromDate: a } = it(t), i = F(null), o = F(L()), l = (c) => {
    !c.current && t.hideOffsetDates || (i.value = c.value);
  }, f = () => {
    i.value = null;
  }, u = (c) => Array.isArray(e.value) && t.range && e.value[0] && i.value ? c ? et(i.value, e.value[0]) : Ge(i.value, e.value[0]) : !0, d = (c, k) => {
    const x = () => e.value ? k ? e.value[0] || null : e.value[1] : null, q = e.value && Array.isArray(e.value) ? x() : null;
    return Me(L(c.value), q);
  }, s = (c) => {
    const k = Array.isArray(e.value) ? e.value[0] : null;
    return c ? !Ge(i.value || null, k) : !0;
  }, h = (c, k = !0) => (t.range || t.weekPicker) && Array.isArray(e.value) ? t.hideOffsetDates && !c.current ? !1 : Me(L(c.value), e.value[k ? 0 : 1]) : t.range ? d(c, k) && s(k) || Me(c.value, Array.isArray(e.value) ? e.value[0] : null) && u(k) : !1, v = (c, k, x) => Array.isArray(e.value) && e.value[0] && e.value.length === 1 ? c ? !1 : x ? et(e.value[0], k.value) : Ge(e.value[0], k.value) : !1, g = (c) => !e.value || t.hideOffsetDates && !c.current ? !1 : t.range ? t.modelAuto && Array.isArray(e.value) ? Me(c.value, e.value[0] ? e.value[0] : o.value) : !1 : t.multiDates && Array.isArray(e.value) ? e.value.some((k) => Me(k, c.value)) : Me(c.value, e.value ? e.value : o.value), P = (c) => {
    if (t.autoRange || t.weekPicker) {
      if (i.value) {
        if (t.hideOffsetDates && !c.current)
          return !1;
        const k = kt(i.value, +t.autoRange), x = a(L(i.value));
        return t.weekPicker ? Me(x[1], L(c.value)) : Me(k, L(c.value));
      }
      return !1;
    }
    return !1;
  }, D = (c) => {
    if (t.autoRange || t.weekPicker) {
      if (i.value) {
        const k = kt(i.value, +t.autoRange);
        if (t.hideOffsetDates && !c.current)
          return !1;
        const x = a(L(i.value));
        return t.weekPicker ? et(c.value, x[0]) && Ge(c.value, x[1]) : et(c.value, i.value) && Ge(c.value, k);
      }
      return !1;
    }
    return !1;
  }, B = (c) => {
    if (t.autoRange || t.weekPicker) {
      if (i.value) {
        if (t.hideOffsetDates && !c.current)
          return !1;
        const k = a(L(i.value));
        return t.weekPicker ? Me(k[0], c.value) : Me(i.value, c.value);
      }
      return !1;
    }
    return !1;
  }, C = (c) => as(e.value, i.value, c.value), H = () => t.modelAuto && Array.isArray(t.internalModelValue) ? !!t.internalModelValue[0] : !1, K = () => t.modelAuto ? us(t.internalModelValue) : !0, X = (c) => {
    if (Array.isArray(e.value) && e.value.length || t.weekPicker)
      return !1;
    const k = t.range ? !h(c) && !h(c, !1) : !0;
    return !n(c.value) && !g(c) && !(!c.current && t.hideOffsetDates) && k;
  }, m = (c) => t.range ? t.modelAuto ? H() && g(c) : !1 : g(c), N = (c) => t.highlight ? r(c.value, t.highlight) : !1, Y = (c) => n(c.value) && t.highlightDisabledDays === !1, Q = (c) => t.highlightWeekDays && t.highlightWeekDays.includes(c.value.getDay()), re = (c) => (t.range || t.weekPicker) && (t.multiCalendars > 0 ? c.current : !0) && K() && !(!c.current && t.hideOffsetDates) && !g(c) ? C(c) : !1, W = (c) => ({
    dp__cell_offset: !c.current,
    dp__pointer: !t.disabled && !(!c.current && t.hideOffsetDates) && !n(c.value),
    dp__cell_disabled: n(c.value),
    dp__cell_highlight: !Y(c) && (N(c) || Q(c)) && !m(c),
    dp__cell_highlight_active: !Y && (N(c) || Q(c)) && m(c),
    dp__today: !t.noToday && Me(c.value, o.value) && c.current
  }), ee = (c) => ({
    dp__active_date: m(c),
    dp__date_hover: X(c)
  }), R = (c) => ({
    ...w(c),
    ...A(c),
    dp__range_between_week: re(c) && t.weekPicker
  }), w = (c) => ({
    dp__range_start: t.multiCalendars > 0 ? c.current && h(c) && K() : h(c) && K(),
    dp__range_end: t.multiCalendars > 0 ? c.current && h(c, !1) && K() : h(c, !1) && K(),
    dp__range_between: re(c) && !t.weekPicker,
    dp__date_hover_start: v(X(c), c, !0),
    dp__date_hover_end: v(X(c), c, !1)
  }), A = (c) => ({
    ...w(c),
    dp__cell_auto_range: D(c),
    dp__cell_auto_range_start: B(c),
    dp__cell_auto_range_end: P(c)
  }), I = (c) => t.range ? t.autoRange ? A(c) : t.modelAuto ? { ...ee(c), ...w(c) } : w(c) : t.weekPicker ? R(c) : ee(c);
  return {
    setHoverDate: l,
    clearHoverDate: f,
    getDayClassData: (c) => ({
      ...W(c),
      ...I(c),
      [t.dayClass ? t.dayClass(c.value) : ""]: !0,
      [t.calendarCellClassName]: !!t.calendarCellClassName
    })
  };
}, Y_ = ["id", "onKeydown"], j_ = {
  key: 0,
  class: "dp__sidebar_left"
}, H_ = {
  key: 1,
  class: "dp__preset_ranges"
}, W_ = ["onClick"], q_ = {
  key: 2,
  class: "dp__sidebar_right"
}, z_ = {
  key: 3,
  class: "dp__now_wrap"
}, G_ = /* @__PURE__ */ ye({
  __name: "DatepickerMenu",
  props: {
    openOnTop: { type: Boolean, default: !1 },
    internalModelValue: { type: [Date, Array], default: null },
    ...Tt
  },
  emits: [
    "close-picker",
    "select-date",
    "auto-apply",
    "time-update",
    "flow-step",
    "update-month-year",
    "invalid-select",
    "update:internal-model-value"
  ],
  setup(e, { emit: t }) {
    const n = e, { setMenuFocused: r, setShiftKey: a, control: i } = os(), { getCalendarDays: o, defaults: l } = it(n), f = Jo(), u = F(null), d = cn({
      timePicker: !!(!n.enableTimePicker || n.timePicker || n.monthPicker),
      monthYearInput: !!n.timePicker,
      calendar: !1
    }), s = F([]), h = F([]), v = F(null), g = F(null), P = F(0), D = F(!1), B = F(0);
    tt(() => {
      var M;
      D.value = !0, !((M = n.presetRanges) != null && M.length) && !f["left-sidebar"] && !f["right-sidebar"] && ct();
      const ne = We(g);
      if (ne && !n.textInput && !n.inline && (r(!0), N()), ne) {
        const Je = (nt) => {
          !n.monthYearComponent && !n.timePickerComponent && !Object.keys(f).length && nt.preventDefault(), nt.stopImmediatePropagation(), nt.stopPropagation();
        };
        ne.addEventListener("pointerdown", Je), ne.addEventListener("mousedown", Je);
      }
      document.addEventListener("resize", ct);
    }), Zo(() => {
      document.removeEventListener("resize", ct);
    });
    const { arrowRight: C, arrowLeft: H, arrowDown: K, arrowUp: X } = Pt(), m = (M) => {
      M || M === 0 ? h.value[M].triggerTransition(
        W.value(M),
        ee.value(M)
      ) : h.value.forEach(
        (ne, Je) => ne.triggerTransition(W.value(Je), ee.value(Je))
      );
    }, N = () => {
      const M = We(g);
      M && M.focus({ preventScroll: !0 });
    }, Y = () => {
      var M;
      ((M = n.flow) == null ? void 0 : M.length) && B.value !== -1 && (B.value += 1, t("flow-step", B.value), Ve());
    }, Q = () => {
      B.value = -1;
    }, {
      modelValue: re,
      month: W,
      year: ee,
      time: R,
      updateTime: w,
      updateMonthYear: A,
      selectDate: I,
      getWeekNum: c,
      monthYearSelect: k,
      handleScroll: x,
      handleArrow: q,
      handleSwipe: G,
      getMarker: T,
      selectCurrentDate: $,
      presetDateRange: j
    } = Hb(n, t, Y, m), { setHoverDate: me, clearHoverDate: Se, getDayClassData: xe } = U_(re, n), Oe = Et(f, "calendar"), ve = Et(f, "action"), ie = Et(f, "timePicker"), at = Et(f, "monthYear"), he = J(() => n.openOnTop ? "dp__arrow_bottom" : "dp__arrow_top"), Pe = J(() => Eb(n.yearRange)), Ie = J(() => Ab(n.locale, n.monthNameFormat)), ct = () => {
      const M = We(u);
      M && (P.value = M.getBoundingClientRect().width);
    }, yt = J(() => (M) => o(W.value(M), ee.value(M))), Dt = J(
      () => l.value.multiCalendars > 0 && n.range ? [...Array(l.value.multiCalendars).keys()] : [0]
    ), Gt = J(
      () => (M) => M === 1
    ), Kr = J(() => n.monthPicker || n.timePicker || n.yearPicker), Xr = J(
      () => ({
        dp__flex_display: l.value.multiCalendars > 0
      })
    ), hn = J(() => ({
      dp__instance_calendar: l.value.multiCalendars > 0
    })), Qt = J(() => ({
      dp__menu_disabled: n.disabled,
      dp__menu_readonly: n.readonly
    })), ea = J(
      () => (M) => na(yt, M)
    ), ta = J(
      () => ({
        dp__menu: !0,
        dp__menu_index: !n.inline,
        dp__relative: n.inline,
        [n.menuClassName]: !!n.menuClassName
      })
    ), na = (M, ne) => M.value(ne).map((Je) => ({
      ...Je,
      days: Je.days.map((nt) => (nt.marker = T(nt), nt.classData = xe(nt), nt))
    })), mn = (M) => {
      M.stopPropagation(), M.preventDefault(), M.stopImmediatePropagation();
    }, y = () => {
      n.escClose && t("close-picker");
    }, V = (M, ne = !1) => {
      I(M, ne), n.spaceConfirm && t("select-date");
    }, le = (M) => {
      var ne;
      (ne = n.flow) != null && ne.length && (d[M] = !0, Object.keys(d).filter((Je) => !d[Je]).length || Ve());
    }, pe = (M, ne, Je, nt, ...yn) => {
      if (n.flow[B.value] === M) {
        const ue = nt ? ne.value[0] : ne.value;
        ue && ue[Je](...yn);
      }
    }, Ve = () => {
      pe("month", s, "toggleMonthPicker", !0, !0), pe("year", s, "toggleYearPicker", !0, !0), pe("calendar", v, "toggleTimePicker", !1, !1, !0), pe("time", v, "toggleTimePicker", !1, !0, !0);
      const M = n.flow[B.value];
      (M === "hours" || M === "minutes" || M === "seconds") && pe(M, v, "toggleTimePicker", !1, !0, !0, M);
    }, ft = (M) => {
      if (n.arrowNavigation) {
        if (M === "up")
          return X();
        if (M === "down")
          return K();
        if (M === "left")
          return H();
        if (M === "right")
          return C();
      } else
        M === "left" || M === "up" ? q("left", 0, M === "up") : q("right", 0, M === "down");
    }, Rt = (M) => {
      a(M.shiftKey), !n.disableMonthYearSelect && M.code === "Tab" && M.target.classList.contains("dp__menu") && i.value.shiftKeyInMenu && (M.preventDefault(), M.stopImmediatePropagation(), t("close-picker"));
    };
    return (M, ne) => {
      var Je;
      return p(), te(je, {
        appear: "",
        name: (Je = _(l).transitions) == null ? void 0 : Je.menuAppear,
        mode: "out-in",
        css: !!M.transitions
      }, {
        default: ae(() => {
          var nt, yn;
          return [
            O("div", {
              id: M.uid ? `dp-menu-${M.uid}` : void 0,
              tabindex: "0",
              ref_key: "dpMenuRef",
              ref: g,
              role: "dialog",
              class: we(_(ta)),
              onMouseleave: ne[12] || (ne[12] = (...ue) => _(Se) && _(Se)(...ue)),
              onClick: mn,
              onKeydown: [
                fe(y, ["esc"]),
                ne[13] || (ne[13] = fe(ge((ue) => ft("left"), ["prevent"]), ["left"])),
                ne[14] || (ne[14] = fe(ge((ue) => ft("up"), ["prevent"]), ["up"])),
                ne[15] || (ne[15] = fe(ge((ue) => ft("down"), ["prevent"]), ["down"])),
                ne[16] || (ne[16] = fe(ge((ue) => ft("right"), ["prevent"]), ["right"])),
                Rt
              ]
            }, [
              (M.disabled || M.readonly) && M.inline ? (p(), b("div", {
                key: 0,
                class: we(_(Qt))
              }, null, 2)) : S("", !0),
              !M.inline && !M.teleportCenter ? (p(), b("div", {
                key: 1,
                class: we(_(he))
              }, null, 2)) : S("", !0),
              O("div", {
                class: we({
                  dp__menu_content_wrapper: ((nt = M.presetRanges) == null ? void 0 : nt.length) || !!M.$slots["left-sidebar"] || !!M.$slots["right-sidebar"]
                })
              }, [
                M.$slots["left-sidebar"] ? (p(), b("div", j_, [
                  U(M.$slots, "left-sidebar")
                ])) : S("", !0),
                (yn = M.presetRanges) != null && yn.length ? (p(), b("div", H_, [
                  (p(!0), b(se, null, ke(M.presetRanges, (ue, Lt) => (p(), b("div", {
                    key: Lt,
                    style: Nt(ue.style || {}),
                    class: "dp__preset_range",
                    onClick: (be) => _(j)(ue.range, !!ue.slot)
                  }, [
                    ue.slot ? U(M.$slots, ue.slot, {
                      key: 0,
                      presetDateRange: _(j),
                      label: ue.label,
                      range: ue.range
                    }) : (p(), b(se, { key: 1 }, [
                      De(Z(ue.label), 1)
                    ], 64))
                  ], 12, W_))), 128))
                ])) : S("", !0),
                O("div", {
                  class: "dp__instance_calendar",
                  ref_key: "calendarWrapperRef",
                  ref: u,
                  role: "document"
                }, [
                  O("div", {
                    class: we(_(Xr))
                  }, [
                    (p(!0), b(se, null, ke(_(Dt), (ue, Lt) => (p(), b("div", {
                      key: ue,
                      class: we(_(hn))
                    }, [
                      !M.disableMonthYearSelect && !M.timePicker ? (p(), te(_n(M.monthYearComponent ? M.monthYearComponent : D_), Ye({
                        key: 0,
                        ref_for: !0,
                        ref: (be) => {
                          be && (s.value[Lt] = be);
                        },
                        months: _(Ie),
                        years: _(Pe),
                        month: _(W)(ue),
                        year: _(ee)(ue),
                        instance: ue,
                        "internal-model-value": e.internalModelValue
                      }, M.$props, {
                        onMount: ne[0] || (ne[0] = (be) => le("monthYearInput")),
                        onResetFlow: Q,
                        onUpdateMonthYear: (be) => _(A)(ue, be),
                        onMonthYearSelect: _(k),
                        onOverlayClosed: N
                      }), rt({ _: 2 }, [
                        ke(_(at), (be, ss) => ({
                          name: be,
                          fn: ae((ra) => [
                            U(M.$slots, be, ot(bt(ra)))
                          ])
                        }))
                      ]), 1040, ["months", "years", "month", "year", "instance", "internal-model-value", "onUpdateMonthYear", "onMonthYearSelect"])) : S("", !0),
                      z(m_, Ye({
                        ref_for: !0,
                        ref: (be) => {
                          be && (h.value[Lt] = be);
                        },
                        "specific-mode": _(Kr),
                        "get-week-num": _(c),
                        instance: ue,
                        "mapped-dates": _(ea)(ue),
                        month: _(W)(ue),
                        year: _(ee)(ue)
                      }, M.$props, {
                        "flow-step": B.value,
                        "onUpdate:flow-step": ne[1] || (ne[1] = (be) => B.value = be),
                        onSelectDate: (be) => _(I)(be, !_(Gt)(ue)),
                        onHandleSpace: (be) => V(be, !_(Gt)(ue)),
                        onSetHoverDate: ne[2] || (ne[2] = (be) => _(me)(be)),
                        onHandleScroll: (be) => _(x)(be, ue),
                        onHandleSwipe: (be) => _(G)(be, ue),
                        onMount: ne[3] || (ne[3] = (be) => le("calendar")),
                        onResetFlow: Q
                      }), rt({ _: 2 }, [
                        ke(_(Oe), (be, ss) => ({
                          name: be,
                          fn: ae((ra) => [
                            U(M.$slots, be, ot(bt({ ...ra })))
                          ])
                        }))
                      ]), 1040, ["specific-mode", "get-week-num", "instance", "mapped-dates", "month", "year", "flow-step", "onSelectDate", "onHandleSpace", "onHandleScroll", "onHandleSwipe"])
                    ], 2))), 128))
                  ], 2),
                  O("div", null, [
                    M.$slots["time-picker"] ? U(M.$slots, "time-picker", ot(Ye({ key: 0 }, { time: _(R), updateTime: _(w) }))) : (p(), b(se, { key: 1 }, [
                      M.enableTimePicker && !M.monthPicker && !M.weekPicker ? (p(), te(_n(M.timePickerComponent ? M.timePickerComponent : F_), Ye({
                        key: 0,
                        ref_key: "timePickerRef",
                        ref: v,
                        hours: _(R).hours,
                        minutes: _(R).minutes,
                        seconds: _(R).seconds,
                        "internal-model-value": e.internalModelValue
                      }, M.$props, {
                        onMount: ne[4] || (ne[4] = (ue) => le("timePicker")),
                        "onUpdate:hours": ne[5] || (ne[5] = (ue) => _(w)(ue)),
                        "onUpdate:minutes": ne[6] || (ne[6] = (ue) => _(w)(ue, !1)),
                        "onUpdate:seconds": ne[7] || (ne[7] = (ue) => _(w)(ue, !1, !0)),
                        onResetFlow: Q,
                        onOverlayClosed: N
                      }), rt({ _: 2 }, [
                        ke(_(ie), (ue, Lt) => ({
                          name: ue,
                          fn: ae((be) => [
                            U(M.$slots, ue, ot(bt(be)))
                          ])
                        }))
                      ]), 1040, ["hours", "minutes", "seconds", "internal-model-value"])) : S("", !0)
                    ], 64))
                  ])
                ], 512),
                M.$slots["right-sidebar"] ? (p(), b("div", q_, [
                  U(M.$slots, "right-sidebar")
                ])) : S("", !0),
                M.showNowButton ? (p(), b("div", z_, [
                  M.$slots["now-button"] ? U(M.$slots, "now-button", {
                    key: 0,
                    selectCurrentDate: _($)
                  }) : S("", !0),
                  M.$slots["now-button"] ? S("", !0) : (p(), b("button", {
                    key: 1,
                    type: "button",
                    role: "button",
                    class: "dp__now_button",
                    onClick: ne[8] || (ne[8] = (...ue) => _($) && _($)(...ue))
                  }, Z(M.nowButtonLabel), 1))
                ])) : S("", !0)
              ], 2),
              M.$slots["action-row"] ? U(M.$slots, "action-row", ot(Ye({ key: 2 }, {
                internalModelValue: e.internalModelValue,
                selectDate: () => M.$emit("select-date"),
                closePicker: () => M.$emit("close-picker")
              }))) : (p(), b(se, { key: 3 }, [
                !M.autoApply || M.keepActionRow ? (p(), te(_n(M.actionRowComponent ? M.actionRowComponent : o_), Ye({
                  key: 0,
                  "menu-mount": D.value,
                  "calendar-width": P.value,
                  "internal-model-value": e.internalModelValue
                }, M.$props, {
                  onClosePicker: ne[9] || (ne[9] = (ue) => M.$emit("close-picker")),
                  onSelectDate: ne[10] || (ne[10] = (ue) => M.$emit("select-date")),
                  onInvalidSelect: ne[11] || (ne[11] = (ue) => M.$emit("invalid-select"))
                }), rt({ _: 2 }, [
                  ke(_(ve), (ue, Lt) => ({
                    name: ue,
                    fn: ae((be) => [
                      U(M.$slots, ue, ot(bt({ ...be })))
                    ])
                  }))
                ]), 1040, ["menu-mount", "calendar-width", "internal-model-value"])) : S("", !0)
              ], 64))
            ], 42, Y_)
          ];
        }),
        _: 3
      }, 8, ["name", "css"]);
    };
  }
}), Q_ = typeof window < "u" ? window : void 0, Oa = () => {
}, J_ = (e) => ps() ? (hs(e), !0) : !1, Z_ = (e, t, n, r) => {
  if (!e)
    return Oa;
  let a = Oa;
  const i = Wt(
    () => _(e),
    (l) => {
      a(), l && (l.addEventListener(t, n, r), a = () => {
        l.removeEventListener(t, n, r), a = Oa;
      });
    },
    { immediate: !0, flush: "post" }
  ), o = () => {
    i(), a();
  };
  return J_(o), o;
}, K_ = (e, t, n, r = {}) => {
  const { window: a = Q_, event: i = "pointerdown" } = r;
  return a ? Z_(a, i, (o) => {
    const l = We(e), f = We(t);
    !l || !f || l === o.target || o.composedPath().includes(l) || o.composedPath().includes(f) || n(o);
  }, { passive: !0 }) : void 0;
}, X_ = /* @__PURE__ */ ye({
  __name: "VueDatePicker",
  props: {
    ...Tt
  },
  emits: [
    "update:model-value",
    "text-submit",
    "closed",
    "cleared",
    "open",
    "focus",
    "blur",
    "internal-model-change",
    "recalculate-position",
    "flow-step",
    "update-month-year",
    "invalid-select"
  ],
  setup(e, { expose: t, emit: n }) {
    const r = e, a = Jo(), i = F(!1), o = $a(r, "modelValue"), l = $a(r, "timezone"), f = F(null), u = F(null), d = F(!1), { setMenuFocused: s, setShiftKey: h } = os(), { clearArrowNav: v } = Pt(), { validateDate: g, isValidTime: P, defaults: D } = it(r);
    tt(() => {
      Q(r.modelValue), r.inline || (window.addEventListener("scroll", A), window.addEventListener("resize", I)), r.inline && (i.value = !0);
    }), Zo(() => {
      r.inline || (window.removeEventListener("scroll", A), window.removeEventListener("resize", I));
    });
    const B = Et(a, "all", r.presetRanges), C = Et(a, "input");
    Wt(
      [o, l],
      () => {
        Q(o.value);
      },
      { deep: !0 }
    );
    const { openOnTop: H, menuPosition: K, setMenuPosition: X, setInitialPosition: m } = zb(
      f,
      u,
      n,
      r
    ), {
      inputValue: N,
      internalModelValue: Y,
      parseExternalModelValue: Q,
      emitModelValue: re,
      formatInputValue: W,
      checkBeforeEmit: ee
    } = Wb(n, r, d), R = J(
      () => ({
        dp__main: !0,
        dp__theme_dark: r.dark,
        dp__theme_light: !r.dark,
        dp__flex_display: r.inline,
        dp__flex_display_with_input: r.inlineWithInput
      })
    ), w = J(() => r.dark ? "dp__theme_dark" : "dp__theme_light"), A = () => {
      i.value && (r.closeOnScroll ? j() : r.autoPosition ? X() : window.removeEventListener("scroll", A));
    }, I = () => {
      i.value && X();
    }, c = () => {
      !r.disabled && !r.readonly && (m(), i.value = !0, fn().then(() => {
        X(), i.value && n("open");
      }), i.value || $(), Q(r.modelValue));
    }, k = () => {
      N.value = "", $(), n("update:model-value", null), n("cleared"), j();
    }, x = () => {
      const he = Y.value;
      return !he || !Array.isArray(he) && g(he) ? !0 : Array.isArray(he) ? he.length === 2 && g(he[0]) && g(he[1]) ? !0 : g(he[0]) : !1;
    }, q = () => {
      ee() && x() ? (re(), j()) : n("invalid-select", Y.value);
    }, G = (he) => {
      re(), r.closeOnAutoApply && !he && j();
    }, T = (he = !1) => {
      r.autoApply && P(Y.value) && x() && (r.range && Array.isArray(Y.value) ? (r.partialRange || Y.value.length === 2) && G(he) : G(he));
    }, $ = () => {
      r.textInput || (Y.value = null);
    }, j = () => {
      r.inline || (i.value && (i.value = !1, s(!1), h(!1), v(), n("closed"), m(), N.value && Q(o.value)), $(), u.value && u.value.focusInput());
    }, me = (he, Pe) => {
      if (!he) {
        Y.value = null;
        return;
      }
      Y.value = he, Pe && (q(), n("text-submit"));
    }, Se = () => {
      r.autoApply && P(Y.value) && re();
    }, xe = () => i.value ? j() : c(), Oe = (he) => {
      Y.value = he;
    }, ve = J(() => r.textInput && D.value.textInputOptions.format), ie = () => {
      ve.value && (d.value = !0, W()), n("focus");
    }, at = () => {
      ve.value && (d.value = !1, W()), n("blur");
    };
    return K_(
      f,
      u,
      r.onClickOutside ? () => r.onClickOutside(x) : j
    ), t({
      closeMenu: j,
      selectDate: q,
      clearValue: k,
      openMenu: c,
      onScroll: A,
      formatInputValue: W,
      updateInternalModelValue: Oe
    }), (he, Pe) => (p(), b("div", {
      class: we(_(R))
    }, [
      z(t_, Ye({
        ref_key: "inputRef",
        ref: u,
        "is-menu-open": i.value,
        "input-value": _(N),
        "onUpdate:input-value": Pe[0] || (Pe[0] = (Ie) => Mt(N) ? N.value = Ie : null)
      }, he.$props, {
        onClear: k,
        onOpen: c,
        onSetInputDate: me,
        onSetEmptyDate: _(re),
        onSelectDate: q,
        onToggle: xe,
        onClose: j,
        onFocus: ie,
        onBlur: at
      }), rt({ _: 2 }, [
        ke(_(C), (Ie, ct) => ({
          name: Ie,
          fn: ae((yt) => [
            U(he.$slots, Ie, ot(bt(yt)))
          ])
        }))
      ]), 1040, ["is-menu-open", "input-value", "onSetEmptyDate"]),
      i.value ? (p(), te(fs, {
        key: 0,
        to: he.teleport,
        disabled: he.inline
      }, [
        i.value ? (p(), te(G_, Ye({
          key: 0,
          ref_key: "dpMenuRef",
          ref: f,
          class: _(w),
          style: _(K),
          "open-on-top": _(H)
        }, he.$props, {
          "internal-model-value": _(Y),
          "onUpdate:internal-model-value": Pe[1] || (Pe[1] = (Ie) => Mt(Y) ? Y.value = Ie : null),
          onClosePicker: j,
          onSelectDate: q,
          onAutoApply: T,
          onTimeUpdate: Se,
          onFlowStep: Pe[2] || (Pe[2] = (Ie) => he.$emit("flow-step", Ie)),
          onUpdateMonthYear: Pe[3] || (Pe[3] = (Ie) => he.$emit("update-month-year", Ie)),
          onInvalidSelect: Pe[4] || (Pe[4] = (Ie) => he.$emit("invalid-select", _(Y)))
        }), rt({ _: 2 }, [
          ke(_(B), (Ie, ct) => ({
            name: Ie,
            fn: ae((yt) => [
              U(he.$slots, Ie, ot(bt({ ...yt })))
            ])
          }))
        ]), 1040, ["class", "style", "open-on-top", "internal-model-value"])) : S("", !0)
      ], 8, ["to", "disabled"])) : S("", !0)
    ], 2));
  }
}), gi = /* @__PURE__ */ (() => {
  const e = X_;
  return e.install = (t) => {
    t.component("Vue3DatePicker", e);
  }, e;
})(), ew = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: gi
}, Symbol.toStringTag, { value: "Module" }));
Object.entries(ew).forEach(([e, t]) => {
  e !== "default" && (gi[e] = t);
});
const tw = ye({
  name: "CustomDatePicker",
  components: {
    Datepicker: gi
  },
  props: {
    label: {
      type: String
    },
    range: {
      type: Boolean,
      default: !1
    },
    type: {
      type: String,
      default: "date"
    },
    resultType: {
      type: String,
      default: "formatted"
    },
    value: {
      type: [String, Array]
    }
  },
  setup(e, t) {
    const n = F(null);
    tt(() => {
      if (e.type !== "time")
        if (e.range === !0) {
          const u = a(e.value[0]), d = a(e.value[1]);
          n.value = [u, d];
        } else
          n.value = a(e.value);
      else if (e.range === !0) {
        const u = r(e.value[0]), d = r(e.value[1]);
        n.value = [u, d];
      } else {
        const u = r(e.value);
        n.value = u;
      }
    });
    const r = (u) => {
      if (typeof u == "string") {
        const d = u.split(":");
        return {
          hours: parseInt(d[0]),
          minutes: parseInt(d[1]),
          seconds: 0
        };
      }
    }, a = (u) => {
      if (typeof u == "string") {
        const d = u.split(" "), s = d[0].split("-"), h = parseInt(s[0]), v = parseInt(s[1]) - 1, g = parseInt(s[2]);
        if (e.type === "datetime" && d.length === 2) {
          const D = d[1].split(":"), B = parseInt(D[0]), C = parseInt(D[1]), H = 0;
          return new Date(h, v, g, B, C, H);
        }
        return new Date(h, v, g);
      }
    };
    return {
      selectedDate: n,
      format: (u) => {
        if (e.type !== "time")
          if (e.range === !0) {
            const d = ("0" + u[0].getDate()).slice(-2), s = ("0" + (u[0].getMonth() + 1)).slice(-2), h = u[0].getFullYear(), v = ("0" + u[0].getHours()).slice(-2), g = ("0" + u[0].getMinutes()).slice(-2);
            if (u[1]) {
              const P = ("0" + u[1].getDate()).slice(-2), D = ("0" + (u[1].getMonth() + 1)).slice(-2), B = u[1].getFullYear(), C = ("0" + u[1].getHours()).slice(-2), H = ("0" + u[1].getMinutes()).slice(-2);
              return e.type !== "datetime" ? `${d}/${s}/${h} - ${P}/${D}/${B}` : `${d}/${s}/${h} ${v}:${g} - ${P}/${D}/${B} ${C}:${H}`;
            }
          } else {
            const d = ("0" + u.getDate()).slice(-2), s = ("0" + (u.getMonth() + 1)).slice(-2), h = u.getFullYear(), v = ("0" + u.getHours()).slice(-2), g = ("0" + u.getMinutes()).slice(-2);
            return e.type !== "datetime" ? `${d}/${s}/${h}` : `${d}/${s}/${h} ${v}:${g}`;
          }
        else if (e.range === !0) {
          const d = ("0" + u[0].getHours()).slice(-2), s = ("0" + u[0].getMinutes()).slice(-2), h = ("0" + u[1].getHours()).slice(-2), v = ("0" + u[1].getMinutes()).slice(-2);
          return `${d}:${s} - ${h}:${v}`;
        } else {
          const d = ("0" + u.getHours()).slice(-2), s = ("0" + u.getMinutes()).slice(-2);
          return `${d}:${s}`;
        }
      },
      getDateType: (u) => u === e.type,
      checkIfOnlyDate: () => {
        if (e.type === "date") {
          const u = document.querySelector(".dp__instance_calendar .dp__button");
          u && (u.style.display = "none");
        }
      },
      emitDate: () => {
        let u;
        if (e.type !== "time")
          if (e.range === !0) {
            let d = [];
            Object.values({ ...n.value }).forEach((h) => {
              const v = ("0" + h.getDate()).slice(-2), g = ("0" + (h.getMonth() + 1)).slice(-2), P = h.getFullYear(), D = ("0" + h.getHours()).slice(-2), B = ("0" + h.getMinutes()).slice(-2);
              e.type !== "datetime" ? d.push(`${P}-${g}-${v}`) : d.push(`${P}-${g}-${v} ${D}:${B}:00`);
            }), u = d;
          } else {
            let d = "";
            const s = n.value, h = ("0" + s.getDate()).slice(-2), v = ("0" + (s.getMonth() + 1)).slice(-2), g = s.getFullYear(), P = ("0" + s.getHours()).slice(-2), D = ("0" + s.getMinutes()).slice(-2);
            e.type !== "datetime" ? d = `${g}-${v}-${h}` : d = `${g}-${v}-${h} ${P}:${D}:00`, u = d;
          }
        else if (e.range === !0) {
          let d = [];
          Object.values({ ...n.value }).forEach((s) => {
            d.push(`${("0" + s.hours).toString().slice(-2)}:${("0" + s.minutes).toString().slice(-2)}:00`);
          }), u = d;
        } else {
          const d = n.value;
          u = `${("0" + d.hours).toString().slice(-2)}:${("0" + d.minutes).toString().slice(-2)}:00`;
        }
        e.resultType === "original" ? t.emit("update", {
          formatted: u,
          original: n.value,
          type: e.type
        }) : t.emit("update:value", u);
      }
    };
  }
}), nw = {
  key: 0,
  class: "generic-input__label text-sm secondary-color"
};
function rw(e, t, n, r, a, i) {
  const o = Qe("Datepicker");
  return p(), b("div", {
    class: we(["custom-date-picker generic-input", { "no-time": e.type === "date" }])
  }, [
    e.label ? (p(), b("label", nw, Z(e.label), 1)) : S("", !0),
    z(o, {
      modelValue: e.selectedDate,
      "onUpdate:modelValue": [
        t[0] || (t[0] = (l) => e.selectedDate = l),
        e.emitDate
      ],
      locale: "it",
      range: e.range,
      position: "left",
      format: e.format,
      "time-picker": e.getDateType("time"),
      onOpen: e.checkIfOnlyDate,
      "select-text": "Seleziona",
      "cancel-text": "Annulla"
    }, null, 8, ["modelValue", "range", "format", "time-picker", "onOpen", "onUpdate:modelValue"])
  ], 2);
}
const nO = /* @__PURE__ */ Ce(tw, [["render", rw]]), aw = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIwAAAAnCAYAAADdG6ATAAAACXBIWXMAAAsSAAALEgHS3X78AAAJwElEQVR4nO1ce4hUVRj/NnYDdydokzBIM9sgCysjYZXKu4KGGjGOINvVXRQTIjbJlXA1GiFHcnf/8MEm+kcKPmKSJcchWgsFHQpU2EotEsPVorWSaPWPaQRXmviW31nPnjnnvmb2PT8YZu495557Ht/53mdKstksFQLpmDWViKJE9CIRPS41eYGI9oSiqSMFeVERw4q8CSYds9YRURMRPeJS9RYRzQxFU78Vl3z0ojRoz9Mxq5aI9hLRgx4f4XqXiKh8jM/pmMZ9QQaXjlmniegzA7Ewy+oiomYiSillE9Ix65PxPumjGb44DPSU8w6Esj8UTa1Rnrmp1H9yvE3yWIJnggGxsEiZoCl20k9CfufLjoS3E9EyIppERGVE1EtEN4ioLZ5Itkr17qDchMPxRLIedS1WvkGwcpvt8URyvR0J/05Ekz107wn0rYXbiCeS92v6f4iIFhNRJW7xpukQfVHq3sE6bJTHphljk6Gc31WHDVsVTySv+W0DdTZgTI5j98NhTMTSFYqmtFwD4kd9xx7TC+xIeBoRdRLRQ0pRGRazxY6EV8UTyWek+4TJKnFolyf0oFJHtNloR8J/mZ51aXsAsYIoOyQ9TVgUPJ46OxJeyoQUTyRTmjaa7Uj4nFKW8w4NanGL+7gbhOrYz3zgiWDSMetKAGJhjrRauX3Lxbz+CZPNE/0pEW3mHQNC2kJEK4joV81z2t0pYRcmtJuI5opdiF21Cs8OeN6OhLOmtu1I2PQeQSzMvT4Qz+E9W1HGdSo0z5Y4lGmBdgW35O/5Xp91QjyRNG4+V6UXXKJKU+RGLJeUnckL8LrpPWCtgljmMfsWC8vfYOfMcnU7yA1CNLTLLJsXVOJWeUHp/wKZyPB7AcrKUVcHLvvZRz+a8M2bMMNEA3E+aHAkmHTMelnDJRi3HYiFWaTKkXii7FA09a3D6wQh6NhyH3Ty2SNuoto7PKHgWIWGY/9x75wyVhnd+P20A0H1A+JPiO7NkkW6chDG1o9SLPBZg8L6hUZ+8+K/qlYEVzlARJZSdJvruxALSVzgjKkCdBGe/MNKEct/VWHrjieSU/D7XegwzLYbobdkMMkNeRCir/6jbLZUV0Ybi0cmGOg7X2vGKUPogt0Q2zz+RUxEPE8uzzpCEscy+hRm5jBx1gvSMSuTjlk/pGPWNl58iCKd+dwiLz5zIfhlrmmIJRWKpso9EIuXQTCxHMLHFzB5LFaPg3UTxAdPcJcgxOEGxGMPurHfxAlxfzou2+keBxPPvj9YQymFKfUeRMhMfDYa6jO3uAECYQtjqkFxZsfdKp+EchMsdiERrfc5DjelV4izPlGACV/LIgpch5XiwDsSEP2f41BnjlTXBLakTqFfnYY6W8D5s+BMAh0wsafzGINyTkelNxRNbQpFU9y5fSAIJzBR7QAnqVKI5S6ceq+wfhOAq3Tge/pg73go0UyUH+OWTkT4heh/NfSLAcC9atzrMLUNTiE2rOpeEJBN6assQiBGVkj3dxdgTDnoV3rZQ8vig4jewOI74S6cdcxJjvEzTHShaOqFoOIHVlAGgz3Iip9gyfheHnSQdiT8DzvmZEJEm8tw6bTjg/T/BExe8S7+fQJlGZ0DT2mrFeJTN5YNkl8lo3xuw8SmQpnYKnTi5LrmPvtPCrEL3TBDctzVQflTH+nRtKFTehlnQWiVaJOJUHXgZaEUFwKLJV8MOxmb0aZ4X8ZgIeWA3QcG77MwpWWlvh/YCF3CxAYndZuneqUNUwpDvc6sbtPc+9B1hAUARMVEiL1uabdkcN2EcgFRbpS5kONC4e2RuGcvfEXzDBZFr+aeYx0WJ/FEsgL6kEzYPQhTVGhMbuN7QBD97UCsVYLItWIb4xXmuzCxXefJK3LyYdhaUnwoQ8VdihgFGMBh4KhTQwCfFxeyCAFVJL2mXGfVdIUixjdUglF9CFfH+wQVMRBuwcdul/IixhncCOZYkSCKkBE4CVwFTg8sYSdYKJqK5NOWkrFWArP6IvtUTO5u+CweNWWd0b1MvpVSu72IrH8km9YGP4So+7YuGi35P67r/CMu7eqyCbmvjU5u+uGAymHUSOskL33ioKUUMliChCvf4Elnryxc3L8Q0U44qi7CrX5ZF5CDf2Kyk0scRNiIxRHtHsEYd2keOYs6TVJdjp2d0rn+8V5+/2RDualdEZ5oUdIaHg4yh4MNlcPsVQKPToG0PiCqPVO5PdFQ3Q3s5X0AzjR5F7diEY4S0WOIjMtoxk49ieClDn1pHPFEMmdMhqjwFU1As96OhP+FY07lIgvhHJyP/pjmTtcu5xR3wLO9uUDpFoOCARwGOTFyfutLTi9Nx6wEEb1ZiI5hd7H7frUpAYm9vGoZFrsaxMJu7xJD1lkZREoOfC7QUYg+uQ/bwV0a0I/qAElaDfhe6/O5IYVO6ZVjDaU68YIcmD+hs+hwOsAgFiM+4jfNQIT6G6SckLc09fh+bYEi4apewe/rAeE1oHyLnwZHMleRkUMwoWhqJ5Q3gap0zOrlHBh8mFC+cTkauy5AXyoDElqtyDrD9QHkxqqEMQtiiwOQdzh3Vo4o+0CNlIQlErvKxUZDP7qlFARPkLji9wH6NGTQmtXI15WJphQKreXhDHVXwPPTrtYAFnq7dC1C/f0BU0Rn2RrZJj+LwGYFFM3voMCyovmfF8JhHcqOhM9AuZaDsdtwPknWS9oQLfbS7jSI43UBOeyQwuiHAdHsM+TGZJEs1agpaw84gIyHU5FlivXQpFksQrRWa63gpMAcEE8N0jmaNXXrRGISzGHmfvzPFDuk4yPCOjupvgPcrIlyobZ7FZFn7vNcXzM2DHD0wyCOtAZByVm43SmSpDTnpDn2tCngMC4KZdGLPJez5h3yN5ysFZHdNgXPh5Wz4Gz+JqRr3WkAke+yyNAHTsi2lOfUdmuQW5wYDXqMJ8cdCESXSadyhBt59GU5xGCnHQnP8jB5e8DpTPnHa6WUyD4rzHBUVXAW9fSjzvxVUQ19RZdDRCAo7qd89klttxVOx612JNw+0okmX0/v88r15aAN4ajEPKQycib/OWknPitlqv0Ik5WPYxx3OCv8BxRc1g+YE67AUdWUpFzXwG/S44E41PYPQe+qM52jsiNh9njP9sA152LuvlSIa8Qh0N99SLigXAfy8Apg4p8ioq+I6Dns0BZYHMy9arCwu8FdGhzaOozdvxTtVkHsWWizBb9PKll8An+7dHcplFQtsQDL0U/Z+5zTLohpNQ6xbTDVGwnI6x+oED/aId1qhFlexBhFXhwGxCHL/hlFQhnbyFckEY5+nsfv4p8FjXEU8l802fSmQhyLLWKEgoj+B/KnMPnqbVqPAAAAAElFTkSuQmCC", ow = ye({
  name: "HeaderNavigation",
  components: {
    Transition: je
  },
  props: {
    menuStructure: {
      type: Array,
      required: !0
    }
  },
  setup(e) {
    const t = aw, n = F(!1), r = F(null), a = (u, d) => {
      e.menuStructure[u].children.length > 0 && (r.value && r.value.id === e.menuStructure[u].id ? (r.value = null, n.value = !1) : (r.value = e.menuStructure[u], n.value = !0));
    }, i = F(null), o = F(null), l = (u) => {
      o.value && !o.value.contains(u.target) && !i.value.contains(u.target) && (r.value = null, n.value = !1);
    }, f = () => {
      n.value = !1, r.value = null;
    };
    return tt(() => {
      document.addEventListener("click", l);
    }), ms(() => {
      document.removeEventListener("click", l);
    }), {
      siteLogoImage: t,
      showSubMenu: a,
      currentMenu: r,
      isVisibleSubMenu: n,
      menuElementRef: o,
      navigationRef: i,
      forceClose: f
    };
  }
});
const bi = (e) => (un("data-v-918f73a8"), e = e(), sn(), e), iw = { class: "header-navigation py-5 container mx-auto" }, lw = { class: "flex items-center justify-between mb-5" }, uw = ["src"], sw = /* @__PURE__ */ ys('<div class="flex items-center" data-v-918f73a8><div class="cursor-pointer" data-v-918f73a8><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6" data-v-918f73a8><path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" data-v-918f73a8></path></svg></div><div class="ml-7 cursor-pointer" data-v-918f73a8><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6" data-v-918f73a8><path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" data-v-918f73a8></path></svg></div><div class="cursor-pointer ml-7 flex items-center" data-v-918f73a8><div class="h-12 w-12 rounded-full bg-gray flex items-center justify-center" data-v-918f73a8><div class="font-regular text-xl" data-v-918f73a8>EP</div></div><div class="ml-1" data-v-918f73a8><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-3 h-3" data-v-918f73a8><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" data-v-918f73a8></path></svg></div></div></div>', 1), cw = {
  ref: "navigationRef",
  class: "text-secondary text-base font-medium relative"
}, fw = { class: "flex" }, dw = ["onClick"], pw = {
  key: 2,
  class: "ml-1 text-secondary"
}, hw = {
  key: 0,
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  "stroke-width": "1.5",
  stroke: "currentColor",
  class: "w-3 h-3"
}, mw = /* @__PURE__ */ bi(() => /* @__PURE__ */ O("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M4.5 15.75l7.5-7.5 7.5 7.5"
}, null, -1)), yw = [
  mw
], vw = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  "stroke-width": "1.5",
  stroke: "currentColor",
  class: "w-3 h-3"
}, gw = /* @__PURE__ */ bi(() => /* @__PURE__ */ O("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M19.5 8.25l-7.5 7.5-7.5-7.5"
}, null, -1)), bw = [
  gw
], _w = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  "stroke-width": "1.5",
  stroke: "currentColor",
  class: "w-3 h-3"
}, ww = /* @__PURE__ */ bi(() => /* @__PURE__ */ O("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M19.5 8.25l-7.5 7.5-7.5-7.5"
}, null, -1)), Ow = [
  ww
], $w = {
  key: 0,
  ref: "menuElementRef",
  class: "text-black absolute w-full shadow-md p-6 bg-white top-7 left-0 z-50"
}, kw = { class: "font-bold mb-4" }, Sw = { class: "flex flex-wrap" }, Pw = { key: 1 };
function Tw(e, t, n, r, a, i) {
  const o = Qe("router-link");
  return p(), b("header", iw, [
    O("div", lw, [
      z(o, { to: { name: "home" } }, {
        default: ae(() => [
          O("div", null, [
            O("img", {
              src: e.siteLogoImage,
              alt: "gaspari-logo"
            }, null, 8, uw)
          ])
        ]),
        _: 1
      }),
      sw
    ]),
    O("nav", cw, [
      O("ul", fw, [
        (p(!0), b(se, null, ke(e.menuStructure, (l, f) => (p(), b("li", {
          key: f,
          class: "mr-6 flex items-center cursor-pointer hover:text-secondaryHover transition select-none",
          onClick: (u) => e.showSubMenu(f, u)
        }, [
          l.href && l.children.length === 0 ? (p(), te(o, {
            key: 0,
            to: l.href,
            onClick: e.forceClose
          }, {
            default: ae(() => [
              O("span", {
                class: we({ "text-secondaryHover": e.currentMenu && e.currentMenu.id === l.id })
              }, Z(l.label), 3)
            ]),
            _: 2
          }, 1032, ["to", "onClick"])) : (p(), b("span", {
            key: 1,
            class: we({ "text-secondaryHover": e.currentMenu && e.currentMenu.id === l.id })
          }, Z(l.label), 3)),
          l.children.length > 0 ? (p(), b("div", pw, [
            e.currentMenu ? (p(), b(se, { key: 0 }, [
              e.currentMenu.id === l.id ? (p(), b("svg", hw, yw)) : (p(), b("svg", vw, bw))
            ], 64)) : (p(), b("svg", _w, Ow))
          ])) : S("", !0)
        ], 8, dw))), 128))
      ]),
      z(je, null, {
        default: ae(() => [
          e.isVisibleSubMenu && e.currentMenu ? (p(), b("div", $w, [
            O("div", kw, Z(e.currentMenu.label), 1),
            O("ul", Sw, [
              (p(!0), b(se, null, ke(e.currentMenu.children, (l, f) => (p(), b("li", {
                key: f,
                class: "w-1/4 mb-3 cursor-pointer transition hover:underline"
              }, [
                l.href && l.children.length === 0 ? (p(), te(o, {
                  key: 0,
                  onClick: e.forceClose,
                  to: l.href
                }, {
                  default: ae(() => [
                    De(Z(l.label), 1)
                  ]),
                  _: 2
                }, 1032, ["onClick", "to"])) : (p(), b("div", Pw, Z(l.label), 1))
              ]))), 128))
            ])
          ], 512)) : S("", !0)
        ]),
        _: 1
      })
    ], 512)
  ]);
}
const Dw = /* @__PURE__ */ Ce(ow, [["render", Tw], ["__scopeId", "data-v-918f73a8"]]), Rw = ye({
  name: "FormContainer",
  components: {
    Breadcrumbs: Fd
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
}), Cw = {
  key: 0,
  class: "mb-6 ml-1"
}, xw = {
  key: 1,
  class: "mb-3 ml-1 font-semibold text-lg uppercase"
}, Mw = { class: "form_container p-6 bg-white rounded-lg shadow overflow-x-hidden" };
function Nw(e, t, n, r, a, i) {
  const o = Qe("breadcrumbs");
  return p(), b(se, null, [
    e.path_breadcrumbs.length > 0 ? (p(), b("div", Cw, [
      z(o, { path_breadcrumbs: e.path_breadcrumbs }, null, 8, ["path_breadcrumbs"])
    ])) : S("", !0),
    U(e.$slots, "form-buttons-top"),
    e.title ? (p(), b("h3", xw, Z(e.title), 1)) : S("", !0),
    O("div", Mw, [
      U(e.$slots, "form-content")
    ]),
    U(e.$slots, "form-buttons-bottom")
  ], 64);
}
const rO = /* @__PURE__ */ Ce(Rw, [["render", Nw]]);
var Go = ye({ name: "Vue Tailwind Pagination", props: { current: { type: Number, default: 1 }, total: { type: Number, default: 0 }, perPage: { type: Number, default: 9 }, pageRange: { type: Number, default: 2 }, textBeforeInput: { type: String, default: "Go to page" }, textAfterInput: { type: String, default: "Go" } }, data: () => ({ input: "" }), methods: { hasFirst: function() {
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
const Ew = vs("data-v-00d7790c");
un("data-v-00d7790c");
const Aw = { class: "min-w-max" }, Iw = { class: "flex justify-between bg-white rounded-lg border border-gray-200 px-10 py-3 text-gray-700 font-montserrat" }, Bw = { class: "flex items-center" }, Vw = { key: 0, class: "pr-6" }, Lw = z("div", { class: "flex items-center justify-center hover:bg-gray-200 rounded-md transform rotate-45 h-6 w-6" }, [z("div", { class: "transform -rotate-45" }, [z("svg", { class: "h-4 w-4", xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor" }, [z("path", { "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-width": "2", d: "M15 19l-7-7 7-7" })])])], -1), Fw = { key: 1, class: "pr-6" }, Uw = z("div", { class: "flex hover:bg-gray-200 rounded-md transform rotate-45 h-6 w-6 items-center justify-center" }, [z("span", { class: "transform -rotate-45" }, " 1 ")], -1), Yw = { key: 2, class: "pr-6" }, jw = { class: "pr-6" }, Hw = { class: "transform -rotate-45" }, Ww = { key: 3, class: "pr-6" }, qw = { key: 4, class: "pr-6" }, zw = { class: "flex hover:bg-gray-200 rounded-md transform rotate-45 h-6 w-6 items-center justify-center" }, Gw = { class: "transform -rotate-45" }, Qw = { key: 5, class: "pr-6" }, Jw = z("div", { class: "flex items-center justify-center hover:bg-gray-200 rounded-md transform rotate-45 h-6 w-6" }, [z("div", { class: "transform -rotate-45" }, [z("svg", { class: "h-4 w-4", xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor" }, [z("path", { "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-width": "2", d: "M9 5l7 7-7 7" })])])], -1), Zw = { class: "flex items-center" }, Kw = { class: "pr-2 text-gray-400 font-medium" }, Xw = { id: "text-before-input" }, e1 = { class: "w-14 rounded-md border border-indigo-400 px-1 py-1" }, t1 = { id: "text-after-input" }, n1 = z("svg", { class: "h-4 w-4", xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor" }, [z("path", { "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-width": "2", d: "M9 5l7 7-7 7" })], -1);
sn();
const r1 = Ew((e, t, n, r, a, i) => (p(), te("div", Aw, [z("section", Iw, [z("ul", Bw, [e.hasPrev() ? (p(), te("li", Vw, [z("a", { href: "#", onClick: t[1] || (t[1] = ge((o) => e.changePage(e.prevPage), ["prevent"])) }, [Lw])])) : S("", !0), e.hasFirst() ? (p(), te("li", Fw, [z("a", { href: "#", onClick: t[2] || (t[2] = ge((o) => e.changePage(1), ["prevent"])) }, [Uw])])) : S("", !0), e.hasFirst() ? (p(), te("li", Yw, "...")) : S("", !0), (p(!0), te(se, null, ke(e.pages, (o) => (p(), te("li", jw, [z("a", { href: "#", onClick: ge((l) => e.changePage(o), ["prevent"]) }, [z("div", { class: [{ "bg-gradient-to-r from-blue-400 to-indigo-400": e.current == o }, "flex hover:bg-gray-200 rounded-md transform rotate-45 h-6 w-6 items-center justify-center"] }, [z("span", Hw, Z(o), 1)], 2)], 8, ["onClick"])]))), 256)), e.hasLast() ? (p(), te("li", Ww, "...")) : S("", !0), e.hasLast() ? (p(), te("li", qw, [z("a", { href: "#", onClick: t[3] || (t[3] = ge((o) => e.changePage(e.totalPages), ["prevent"])) }, [z("div", zw, [z("span", Gw, Z(e.totalPages), 1)])])])) : S("", !0), e.hasNext() ? (p(), te("li", Qw, [z("a", { href: "#", onClick: t[4] || (t[4] = ge((o) => e.changePage(e.nextPage), ["prevent"])) }, [Jw])])) : S("", !0)]), z("div", Zw, [z("div", Kw, [z("span", Xw, Z(e.textBeforeInput), 1)]), z("div", e1, [ze(z("input", { "onUpdate:modelValue": t[5] || (t[5] = (o) => e.input = o), class: "w-12 focus:outline-none px-2", type: "text" }, null, 512), [[Qo, e.input, void 0, { number: !0 }]])]), z("div", { onClick: t[6] || (t[6] = ge((o) => e.changePage(e.input), ["prevent"])), class: "flex items-center pl-4 font-medium cursor-pointer" }, [z("span", t1, Z(e.textAfterInput), 1), n1])])])])));
Go.render = r1, Go.__scopeId = "data-v-00d7790c";
const a1 = ye({
  name: "CustomTable",
  components: {
    VueTailwindPagination: Go,
    CustomLoader: Ko
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
    const n = ({ target: i }) => {
      a(e.currentPage, parseInt(i.value));
    }, r = (i) => {
      a(i, e.perPage);
    }, a = (i, o) => {
      t.emit("changed-pagination", {
        currentPage: i,
        perPage: o
      });
    };
    return {
      changePageData: r,
      changePerPageData: n
    };
  }
}), o1 = { class: "custom-table" }, i1 = {
  key: 0,
  class: "font-semibold text-xl uppercase"
}, l1 = { class: "relative" }, u1 = {
  key: 0,
  class: "w-full h-full pt-20 absolute top-0 left-0 flex items-start justify-center rounded backdrop-blur-sm transition z-50"
}, s1 = { class: "text-textGrey text-sm font-medium row-pagination flex justify-between items-center" }, c1 = { class: "flex" }, f1 = {
  key: 0,
  class: "mr-10"
}, d1 = {
  key: 1,
  class: "mr-10"
}, p1 = { class: "flex" }, h1 = /* @__PURE__ */ O("label", {
  for: "numberPerPage",
  class: "mr-1"
}, "Elementi visualizzati: ", -1), m1 = ["selected"], y1 = ["selected"], v1 = ["selected"], g1 = ["selected"], b1 = ["selected"], _1 = {
  key: 1,
  class: "custom-pagination"
}, w1 = { class: "w-full" }, O1 = { class: "row-theaders" }, $1 = { class: "text-textGrey font-medium" }, k1 = {
  key: 2,
  class: "custom-pagination pagination-bottom"
};
function S1(e, t, n, r, a, i) {
  const o = Qe("custom-loader"), l = Qe("VueTailwindPagination");
  return p(), b("div", o1, [
    O("div", {
      class: we(["mb-5 flex items-center justify-between", { "flex-row-reverse": !e.title }])
    }, [
      e.title ? (p(), b("h2", i1, Z(e.title), 1)) : S("", !0),
      U(e.$slots, "filters")
    ], 2),
    O("div", l1, [
      e.loading ? (p(), b("div", u1, [
        z(o, {
          loading: e.loading,
          size: "large"
        }, null, 8, ["loading"])
      ])) : S("", !0),
      O("div", s1, [
        O("div", c1, [
          e.total > 0 ? (p(), b("div", f1, "Risultati da " + Z(e.from) + " a " + Z(e.from + e.perPage - 1) + " di " + Z(e.total), 1)) : (p(), b("div", d1, "Nessun risultato")),
          O("div", p1, [
            h1,
            O("select", {
              onChange: t[0] || (t[0] = (...f) => e.changePerPageData && e.changePerPageData(...f)),
              id: "numberPerPage",
              class: "bg-white border text-black"
            }, [
              O("option", {
                value: "25",
                selected: e.perPage === 25
              }, "25", 8, m1),
              O("option", {
                value: "50",
                selected: e.perPage === 50
              }, "50", 8, y1),
              O("option", {
                value: "100",
                selected: e.perPage === 100
              }, "100", 8, v1),
              O("option", {
                value: "250",
                selected: e.perPage === 250
              }, "250", 8, g1),
              O("option", {
                value: "500",
                selected: e.perPage === 500
              }, "500", 8, b1)
            ], 32)
          ])
        ])
      ]),
      e.total > 0 ? (p(), b("div", _1, [
        z(l, {
          current: e.currentPage,
          total: e.total,
          "per-page": e.perPage,
          onPageChanged: e.changePageData,
          "text-before-input": "Vai a pag.",
          "text-after-input": "Vai"
        }, null, 8, ["current", "total", "per-page", "onPageChanged"])
      ])) : S("", !0),
      O("table", w1, [
        O("thead", null, [
          O("tr", O1, [
            U(e.$slots, "t-head")
          ])
        ]),
        O("tbody", $1, [
          U(e.$slots, "t-body")
        ])
      ]),
      e.total > 0 ? (p(), b("div", k1, [
        z(l, {
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
const aO = /* @__PURE__ */ Ce(a1, [["render", S1]]), P1 = ye({
  name: "CustomSidebar",
  components: {
    Transition: je,
    CustomLoader: Ko
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
const T1 = (e) => (un("data-v-20ccfa8e"), e = e(), sn(), e), D1 = {
  key: 0,
  id: "custom-sidebar",
  class: "custom-sidebar shadow-2xl"
}, R1 = { class: "sidebar-content" }, C1 = { class: "sidebar-header mb-6 flex justify-between items-center" }, x1 = { class: "text-2xl font-bold" }, M1 = /* @__PURE__ */ T1(() => /* @__PURE__ */ O("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  "stroke-width": "2",
  width: "24px",
  height: "24px"
}, [
  /* @__PURE__ */ O("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    d: "M6 18L18 6M6 6l12 12"
  })
], -1)), N1 = [
  M1
], E1 = { class: "sidebar-body" }, A1 = {
  key: 0,
  class: "w-full h-full absolute top-0 left-0 flex items-center justify-center rounded backdrop-blur-sm transition z-50"
};
function I1(e, t, n, r, a, i) {
  const o = Qe("custom-loader");
  return p(), te(je, null, {
    default: ae(() => [
      e.isOpen ? (p(), b("div", D1, [
        O("div", R1, [
          O("div", C1, [
            O("h4", x1, Z(e.title), 1),
            O("div", {
              class: "sidebar-close",
              onClick: t[0] || (t[0] = (...l) => e.emitCloseSidebar && e.emitCloseSidebar(...l))
            }, N1)
          ]),
          O("div", E1, [
            U(e.$slots, "sidebar-content", {}, void 0, !0)
          ])
        ]),
        O("div", {
          class: "sidebar-bg",
          onClick: t[1] || (t[1] = (...l) => e.emitCloseSidebar && e.emitCloseSidebar(...l))
        }),
        e.loading ? (p(), b("div", A1, [
          z(o, {
            loading: e.loading,
            size: "large"
          }, null, 8, ["loading"])
        ])) : S("", !0)
      ])) : S("", !0)
    ]),
    _: 3
  });
}
const oO = /* @__PURE__ */ Ce(P1, [["render", I1], ["__scopeId", "data-v-20ccfa8e"]]), B1 = ye({
  name: "LayoutBase",
  components: {
    HeaderNavigation: Dw
  },
  props: {
    menuStructure: {
      type: Array,
      required: !0
    }
  }
}), V1 = { class: "layout" }, L1 = { class: "main-content" }, F1 = { class: "container mx-auto py-7" };
function U1(e, t, n, r, a, i) {
  const o = Qe("header-navigation");
  return p(), b("div", V1, [
    z(o, { menuStructure: e.menuStructure }, null, 8, ["menuStructure"]),
    O("main", L1, [
      O("div", F1, [
        U(e.$slots, "layout-content")
      ])
    ])
  ]);
}
const iO = /* @__PURE__ */ Ce(B1, [["render", U1]]);
function lO() {
  const e = F(!1), t = F(null), n = F(!1), r = F(null);
  return {
    openDetails: async (l, f) => {
      e.value = !0, t.value = f, n.value = !0, await Ue.get(l).then((u) => {
        u.status === 200 && (r.value = u.data.data);
      }).catch((u) => {
        console.log(u);
      }), n.value = !1;
    },
    openSidebar: () => {
      e.value = !0;
    },
    closeSidebar: () => {
      r.value = null, e.value = !1, t.value = null;
    },
    activeRecordIndex: t,
    isOpenSidebar: e,
    isLoadingSidebar: n,
    sidebarData: r
  };
}
function uO() {
  const e = F([]), t = F(0), n = F(0), r = F(0), a = F(0), i = F(null), o = F(!1), l = F(""), f = F(null), u = (D) => {
    l.value === "" || l.value !== D ? (l.value = D, f.value = null) : l.value === D && f.value === null ? f.value = "desc" : l.value === D && f.value === "desc" && (l.value = "", f.value = null);
  }, d = (D) => ({
    ordered_asc: l.value === D && f.value === null,
    ordered_desc: l.value === D && f.value === "desc"
  }), s = F({ filter: {} }), h = (D) => {
    s.value.filter = D.filter;
  }, v = F("");
  return {
    results: e,
    currentPage: r,
    perPage: a,
    total: t,
    from: n,
    filterables: i,
    setFilterParams: h,
    updatePagination: async (D, B) => {
      o.value = !0;
      let C = {
        page: B.currentPage,
        per_page: B.perPage
      };
      l.value && (C.order_by = l.value, f.value === "desc" && (C.order_desc = 1)), s.value.filter && (C.filter = s.value.filter), v.value && (C.search = v.value), await Ue.get(D, {
        params: C
      }).then((H) => {
        H.status === 200 && (r.value = B.currentPage, a.value = B.perPage, e.value = H.data.data, t.value = H.data.meta.total, n.value = H.data.meta.from, i.value = H.data.filterables);
      }).catch((H) => H), o.value = !1;
    },
    loadingPagination: o,
    setPaginationOrder: u,
    setPaginationOrderClasses: d,
    setSearchQuery: (D) => {
      v.value = D;
    }
  };
}
function sO() {
  return {
    setPageTitle: (t) => {
      document.title = t;
    }
  };
}
export {
  Fd as Breadcrumbs,
  fu as CustomButton,
  Ss as CustomCheckbox,
  nO as CustomDatePicker,
  j1 as CustomFileUpload,
  Ko as CustomLoader,
  H1 as CustomModal,
  W1 as CustomMultiCheckbox,
  z1 as CustomMultiSelect,
  G1 as CustomMultiSelectAsync,
  q1 as CustomMultipleFileUpload,
  Q1 as CustomRadioGroup,
  eO as CustomSearchInput,
  gd as CustomSelect,
  oO as CustomSidebar,
  aO as CustomTable,
  J1 as CustomTextArea,
  tO as CustomTooltip,
  K1 as FilterableModal,
  rO as FormContainer,
  Z1 as FormSeparator,
  xu as GenericInput,
  Dw as HeaderNavigation,
  iO as LayoutBase,
  X1 as ScrollToTop,
  sO as usePageMeta,
  uO as usePagination,
  lO as useSidebar
};
