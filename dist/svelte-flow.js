function a() {
}
function k(t) {
  return t();
}
function N() {
  return /* @__PURE__ */ Object.create(null);
}
function _(t) {
  t.forEach(k);
}
function p(t) {
  return typeof t == "function";
}
function B(t, e) {
  return t != t ? e == e : t !== e || t && typeof t == "object" || typeof t == "function";
}
function P(t) {
  return Object.keys(t).length === 0;
}
function L(t, e) {
  t.appendChild(e);
}
function O(t, e, n) {
  t.insertBefore(e, n || null);
}
function A(t) {
  t.parentNode && t.parentNode.removeChild(t);
}
function R(t) {
  return document.createElement(t);
}
function S(t) {
  return document.createTextNode(t);
}
function V(t, e, n, r) {
  return t.addEventListener(e, n, r), () => t.removeEventListener(e, n, r);
}
function q(t) {
  return Array.from(t.childNodes);
}
function z(t, e) {
  e = "" + e, t.wholeText !== e && (t.data = e);
}
function D(t) {
  const e = {};
  for (const n of t)
    e[n.name] = n.value;
  return e;
}
let E;
function h(t) {
  E = t;
}
const l = [], T = [], $ = [], M = [], F = Promise.resolve();
let y = !1;
function G() {
  y || (y = !0, F.then(g));
}
function x(t) {
  $.push(t);
}
const b = /* @__PURE__ */ new Set();
let f = 0;
function g() {
  if (f !== 0)
    return;
  const t = E;
  do {
    try {
      for (; f < l.length; ) {
        const e = l[f];
        f++, h(e), I(e.$$);
      }
    } catch (e) {
      throw l.length = 0, f = 0, e;
    }
    for (h(null), l.length = 0, f = 0; T.length; )
      T.pop()();
    for (let e = 0; e < $.length; e += 1) {
      const n = $[e];
      b.has(n) || (b.add(n), n());
    }
    $.length = 0;
  } while (l.length);
  for (; M.length; )
    M.pop()();
  y = !1, b.clear(), h(t);
}
function I(t) {
  if (t.fragment !== null) {
    t.update(), _(t.before_update);
    const e = t.dirty;
    t.dirty = [-1], t.fragment && t.fragment.p(t.ctx, e), t.after_update.forEach(x);
  }
}
const J = /* @__PURE__ */ new Set();
function K(t, e) {
  t && t.i && (J.delete(t), t.i(e));
}
function Q(t, e, n, r) {
  const { fragment: o, after_update: s } = t.$$;
  o && o.m(e, n), r || x(() => {
    const u = t.$$.on_mount.map(k).filter(p);
    t.$$.on_destroy ? t.$$.on_destroy.push(...u) : _(u), t.$$.on_mount = [];
  }), s.forEach(x);
}
function U(t, e) {
  const n = t.$$;
  n.fragment !== null && (_(n.on_destroy), n.fragment && n.fragment.d(e), n.on_destroy = n.fragment = null, n.ctx = []);
}
function W(t, e) {
  t.$$.dirty[0] === -1 && (l.push(t), G(), t.$$.dirty.fill(0)), t.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function X(t, e, n, r, o, s, u, d = [-1]) {
  const m = E;
  h(t);
  const c = t.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: s,
    update: a,
    not_equal: o,
    bound: N(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (m ? m.$$.context : [])),
    // everything else
    callbacks: N(),
    dirty: d,
    skip_bound: !1,
    root: e.target || m.$$.root
  };
  u && u(c.root);
  let w = !1;
  if (c.ctx = n ? n(t, e.props || {}, (i, v, ...C) => {
    const j = C.length ? C[0] : v;
    return c.ctx && o(c.ctx[i], c.ctx[i] = j) && (!c.skip_bound && c.bound[i] && c.bound[i](j), w && W(t, i)), v;
  }) : [], c.update(), w = !0, _(c.before_update), c.fragment = r ? r(c.ctx) : !1, e.target) {
    if (e.hydrate) {
      const i = q(e.target);
      c.fragment && c.fragment.l(i), i.forEach(A);
    } else
      c.fragment && c.fragment.c();
    e.intro && K(t.$$.fragment), Q(t, e.target, e.anchor, e.customElement), g();
  }
  h(m);
}
let H;
typeof HTMLElement == "function" && (H = class extends HTMLElement {
  constructor() {
    super(), this.attachShadow({ mode: "open" });
  }
  connectedCallback() {
    const { on_mount: t } = this.$$;
    this.$$.on_disconnect = t.map(k).filter(p);
    for (const e in this.$$.slotted)
      this.appendChild(this.$$.slotted[e]);
  }
  attributeChangedCallback(t, e, n) {
    this[t] = n;
  }
  disconnectedCallback() {
    _(this.$$.on_disconnect);
  }
  $destroy() {
    U(this, 1), this.$destroy = a;
  }
  $on(t, e) {
    if (!p(e))
      return a;
    const n = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
    return n.push(e), () => {
      const r = n.indexOf(e);
      r !== -1 && n.splice(r, 1);
    };
  }
  $set(t) {
    this.$$set && !P(t) && (this.$$.skip_bound = !0, this.$$set(t), this.$$.skip_bound = !1);
  }
});
function Y(t) {
  let e, n, r, o, s;
  return {
    c() {
      e = R("button"), n = S("count is "), r = S(
        /*count*/
        t[0]
      ), this.c = a;
    },
    m(u, d) {
      O(u, e, d), L(e, n), L(e, r), o || (s = V(
        e,
        "click",
        /*increment*/
        t[1]
      ), o = !0);
    },
    p(u, [d]) {
      d & /*count*/
      1 && z(
        r,
        /*count*/
        u[0]
      );
    },
    i: a,
    o: a,
    d(u) {
      u && A(e), o = !1, s();
    }
  };
}
function Z(t, e, n) {
  let { count: r = 0 } = e;
  const o = () => {
    n(0, r = Number(r) + 1);
  };
  return t.$$set = (s) => {
    "count" in s && n(0, r = s.count);
  }, [r, o];
}
class tt extends H {
  constructor(e) {
    super(), X(
      this,
      {
        target: this.shadowRoot,
        props: D(this.attributes),
        customElement: !0
      },
      Z,
      Y,
      B,
      { count: 0 },
      null
    ), e && (e.target && O(e.target, this, e.anchor), e.props && (this.$set(e.props), g()));
  }
  static get observedAttributes() {
    return ["count"];
  }
  get count() {
    return this.$$.ctx[0];
  }
  set count(e) {
    this.$$set({ count: e }), g();
  }
}
customElements.define("my-counter", tt);
