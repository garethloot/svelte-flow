function k() {
}
function z(t) {
  return !!t && (typeof t == "object" || typeof t == "function") && typeof t.then == "function";
}
function O(t) {
  return t();
}
function C() {
  return /* @__PURE__ */ Object.create(null);
}
function g(t) {
  t.forEach(O);
}
function P(t) {
  return typeof t == "function";
}
function V(t, e) {
  return t != t ? e == e : t !== e || t && typeof t == "object" || typeof t == "function";
}
function B(t) {
  return Object.keys(t).length === 0;
}
function W(t, e) {
  t.appendChild(e);
}
function X(t, e, n) {
  t.insertBefore(e, n || null);
}
function F(t) {
  t.parentNode && t.parentNode.removeChild(t);
}
function Y(t, e) {
  for (let n = 0; n < t.length; n += 1)
    t[n] && t[n].d(e);
}
function Z(t) {
  return document.createElement(t);
}
function L(t) {
  return document.createTextNode(t);
}
function tt() {
  return L(" ");
}
function et() {
  return L("");
}
function nt(t, e, n, r) {
  return t.addEventListener(e, n, r), () => t.removeEventListener(e, n, r);
}
function rt(t, e, n) {
  n == null ? t.removeAttribute(e) : t.getAttribute(e) !== n && t.setAttribute(e, n);
}
function M(t) {
  return Array.from(t.childNodes);
}
function ct(t, e) {
  e = "" + e, t.wholeText !== e && (t.data = e);
}
function ut(t, e, n, r) {
  n === null ? t.style.removeProperty(e) : t.style.setProperty(e, n, r ? "important" : "");
}
let m;
function i(t) {
  m = t;
}
function q() {
  if (!m)
    throw new Error("Function called outside component initialization");
  return m;
}
const _ = [], N = [], $ = [], S = [], D = Promise.resolve();
let w = !1;
function G() {
  w || (w = !0, D.then(v));
}
function E(t) {
  $.push(t);
}
const x = /* @__PURE__ */ new Set();
let h = 0;
function v() {
  if (h !== 0)
    return;
  const t = m;
  do {
    try {
      for (; h < _.length; ) {
        const e = _[h];
        h++, i(e), H(e.$$);
      }
    } catch (e) {
      throw _.length = 0, h = 0, e;
    }
    for (i(null), _.length = 0, h = 0; N.length; )
      N.pop()();
    for (let e = 0; e < $.length; e += 1) {
      const n = $[e];
      x.has(n) || (x.add(n), n());
    }
    $.length = 0;
  } while (_.length);
  for (; S.length; )
    S.pop()();
  w = !1, x.clear(), i(t);
}
function H(t) {
  if (t.fragment !== null) {
    t.update(), g(t.before_update);
    const e = t.dirty;
    t.dirty = [-1], t.fragment && t.fragment.p(t.ctx, e), t.after_update.forEach(E);
  }
}
const b = /* @__PURE__ */ new Set();
let f;
function I() {
  f = {
    r: 0,
    c: [],
    p: f
    // parent group
  };
}
function J() {
  f.r || g(f.c), f = f.p;
}
function T(t, e) {
  t && t.i && (b.delete(t), t.i(e));
}
function K(t, e, n, r) {
  if (t && t.o) {
    if (b.has(t))
      return;
    b.add(t), f.c.push(() => {
      b.delete(t), r && (n && t.d(1), r());
    }), t.o(e);
  } else
    r && r();
}
function st(t, e) {
  const n = e.token = {};
  function r(u, o, a, y) {
    if (e.token !== n)
      return;
    e.resolved = y;
    let l = e.ctx;
    a !== void 0 && (l = l.slice(), l[a] = y);
    const c = u && (e.current = u)(l);
    let p = !1;
    e.block && (e.blocks ? e.blocks.forEach((s, d) => {
      d !== o && s && (I(), K(s, 1, 1, () => {
        e.blocks[d] === s && (e.blocks[d] = null);
      }), J());
    }) : e.block.d(1), c.c(), T(c, 1), c.m(e.mount(), e.anchor), p = !0), e.block = c, e.blocks && (e.blocks[o] = c), p && v();
  }
  if (z(t)) {
    const u = q();
    if (t.then((o) => {
      i(u), r(e.then, 1, e.value, o), i(null);
    }, (o) => {
      if (i(u), r(e.catch, 2, e.error, o), i(null), !e.hasCatch)
        throw o;
    }), e.current !== e.pending)
      return r(e.pending, 0), !0;
  } else {
    if (e.current !== e.then)
      return r(e.then, 1, e.value, t), !0;
    e.resolved = t;
  }
}
function ot(t, e, n) {
  const r = e.slice(), { resolved: u } = t;
  t.current === t.then && (r[t.value] = u), t.current === t.catch && (r[t.error] = u), t.block.p(r, n);
}
function Q(t, e, n, r) {
  const { fragment: u, after_update: o } = t.$$;
  u && u.m(e, n), r || E(() => {
    const a = t.$$.on_mount.map(O).filter(P);
    t.$$.on_destroy ? t.$$.on_destroy.push(...a) : g(a), t.$$.on_mount = [];
  }), o.forEach(E);
}
function R(t, e) {
  const n = t.$$;
  n.fragment !== null && (g(n.on_destroy), n.fragment && n.fragment.d(e), n.on_destroy = n.fragment = null, n.ctx = []);
}
function U(t, e) {
  t.$$.dirty[0] === -1 && (_.push(t), G(), t.$$.dirty.fill(0)), t.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function lt(t, e, n, r, u, o, a, y = [-1]) {
  const l = m;
  i(t);
  const c = t.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: o,
    update: k,
    not_equal: u,
    bound: C(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (l ? l.$$.context : [])),
    // everything else
    callbacks: C(),
    dirty: y,
    skip_bound: !1,
    root: e.target || l.$$.root
  };
  a && a(c.root);
  let p = !1;
  if (c.ctx = n ? n(t, e.props || {}, (s, d, ...j) => {
    const A = j.length ? j[0] : d;
    return c.ctx && u(c.ctx[s], c.ctx[s] = A) && (!c.skip_bound && c.bound[s] && c.bound[s](A), p && U(t, s)), d;
  }) : [], c.update(), p = !0, g(c.before_update), c.fragment = r ? r(c.ctx) : !1, e.target) {
    if (e.hydrate) {
      const s = M(e.target);
      c.fragment && c.fragment.l(s), s.forEach(F);
    } else
      c.fragment && c.fragment.c();
    e.intro && T(t.$$.fragment), Q(t, e.target, e.anchor, e.customElement), v();
  }
  i(l);
}
class it {
  $destroy() {
    R(this, 1), this.$destroy = k;
  }
  $on(e, n) {
    if (!P(n))
      return k;
    const r = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
    return r.push(n), () => {
      const u = r.indexOf(n);
      u !== -1 && r.splice(u, 1);
    };
  }
  $set(e) {
    this.$$set && !B(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
  }
}
export {
  it as S,
  X as a,
  Z as b,
  rt as c,
  F as d,
  et as e,
  W as f,
  Y as g,
  st as h,
  lt as i,
  tt as j,
  ut as k,
  nt as l,
  ct as m,
  k as n,
  V as s,
  L as t,
  ot as u
};
