function _() {
}
function et(e) {
  return !!e && (typeof e == "object" || typeof e == "function") && typeof e.then == "function";
}
function R(e) {
  return e();
}
function G() {
  return /* @__PURE__ */ Object.create(null);
}
function C(e) {
  e.forEach(R);
}
function U(e) {
  return typeof e == "function";
}
function V(e, t) {
  return e != e ? t == t : e !== t || e && typeof e == "object" || typeof e == "function";
}
let L;
function nt(e, t) {
  return L || (L = document.createElement("a")), L.href = t, e === L.href;
}
function ct(e) {
  return Object.keys(e).length === 0;
}
function a(e, t) {
  e.appendChild(t);
}
function P(e, t, n) {
  e.insertBefore(t, n || null);
}
function v(e) {
  e.parentNode && e.parentNode.removeChild(e);
}
function rt(e, t) {
  for (let n = 0; n < e.length; n += 1)
    e[n] && e[n].d(t);
}
function d(e) {
  return document.createElement(e);
}
function k(e) {
  return document.createTextNode(e);
}
function E() {
  return k(" ");
}
function lt() {
  return k("");
}
function ot(e, t, n, c) {
  return e.addEventListener(t, n, c), () => e.removeEventListener(t, n, c);
}
function i(e, t, n) {
  n == null ? e.removeAttribute(t) : e.getAttribute(t) !== n && e.setAttribute(t, n);
}
function st(e) {
  return Array.from(e.childNodes);
}
function ut(e, t) {
  t = "" + t, e.wholeText !== t && (e.data = t);
}
function it(e, t, n, c) {
  n === null ? e.style.removeProperty(t) : e.style.setProperty(t, n, c ? "important" : "");
}
let j;
function b(e) {
  j = e;
}
function at() {
  if (!j)
    throw new Error("Function called outside component initialization");
  return j;
}
const w = [], H = [], O = [], J = [], ft = Promise.resolve();
let T = !1;
function dt() {
  T || (T = !0, ft.then(F));
}
function z(e) {
  O.push(e);
}
const B = /* @__PURE__ */ new Set();
let $ = 0;
function F() {
  if ($ !== 0)
    return;
  const e = j;
  do {
    try {
      for (; $ < w.length; ) {
        const t = w[$];
        $++, b(t), ht(t.$$);
      }
    } catch (t) {
      throw w.length = 0, $ = 0, t;
    }
    for (b(null), w.length = 0, $ = 0; H.length; )
      H.pop()();
    for (let t = 0; t < O.length; t += 1) {
      const n = O[t];
      B.has(n) || (B.add(n), n());
    }
    O.length = 0;
  } while (w.length);
  for (; J.length; )
    J.pop()();
  T = !1, B.clear(), b(e);
}
function ht(e) {
  if (e.fragment !== null) {
    e.update(), C(e.before_update);
    const t = e.dirty;
    e.dirty = [-1], e.fragment && e.fragment.p(e.ctx, t), e.after_update.forEach(z);
  }
}
const S = /* @__PURE__ */ new Set();
let y;
function _t() {
  y = {
    r: 0,
    c: [],
    p: y
    // parent group
  };
}
function pt() {
  y.r || C(y.c), y = y.p;
}
function W(e, t) {
  e && e.i && (S.delete(e), e.i(t));
}
function mt(e, t, n, c) {
  if (e && e.o) {
    if (S.has(e))
      return;
    S.add(e), y.c.push(() => {
      S.delete(e), c && (n && e.d(1), c());
    }), e.o(t);
  } else
    c && c();
}
function gt(e, t) {
  const n = t.token = {};
  function c(l, o, r, f) {
    if (t.token !== n)
      return;
    t.resolved = f;
    let u = t.ctx;
    r !== void 0 && (u = u.slice(), u[r] = f);
    const s = l && (t.current = l)(u);
    let p = !1;
    t.block && (t.blocks ? t.blocks.forEach((h, m) => {
      m !== o && h && (_t(), mt(h, 1, 1, () => {
        t.blocks[m] === h && (t.blocks[m] = null);
      }), pt());
    }) : t.block.d(1), s.c(), W(s, 1), s.m(t.mount(), t.anchor), p = !0), t.block = s, t.blocks && (t.blocks[o] = s), p && F();
  }
  if (et(e)) {
    const l = at();
    if (e.then((o) => {
      b(l), c(t.then, 1, t.value, o), b(null);
    }, (o) => {
      if (b(l), c(t.catch, 2, t.error, o), b(null), !t.hasCatch)
        throw o;
    }), t.current !== t.pending)
      return c(t.pending, 0), !0;
  } else {
    if (t.current !== t.then)
      return c(t.then, 1, t.value, e), !0;
    t.resolved = e;
  }
}
function bt(e, t, n) {
  const c = t.slice(), { resolved: l } = e;
  e.current === e.then && (c[e.value] = l), e.current === e.catch && (c[e.error] = l), e.block.p(c, n);
}
function yt(e, t, n, c) {
  const { fragment: l, after_update: o } = e.$$;
  l && l.m(t, n), c || z(() => {
    const r = e.$$.on_mount.map(R).filter(U);
    e.$$.on_destroy ? e.$$.on_destroy.push(...r) : C(r), e.$$.on_mount = [];
  }), o.forEach(z);
}
function $t(e, t) {
  const n = e.$$;
  n.fragment !== null && (C(n.on_destroy), n.fragment && n.fragment.d(t), n.on_destroy = n.fragment = null, n.ctx = []);
}
function wt(e, t) {
  e.$$.dirty[0] === -1 && (w.push(e), dt(), e.$$.dirty.fill(0)), e.$$.dirty[t / 31 | 0] |= 1 << t % 31;
}
function X(e, t, n, c, l, o, r, f = [-1]) {
  const u = j;
  b(e);
  const s = e.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: o,
    update: _,
    not_equal: l,
    bound: G(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(t.context || (u ? u.$$.context : [])),
    // everything else
    callbacks: G(),
    dirty: f,
    skip_bound: !1,
    root: t.target || u.$$.root
  };
  r && r(s.root);
  let p = !1;
  if (s.ctx = n ? n(e, t.props || {}, (h, m, ...x) => {
    const g = x.length ? x[0] : m;
    return s.ctx && l(s.ctx[h], s.ctx[h] = g) && (!s.skip_bound && s.bound[h] && s.bound[h](g), p && wt(e, h)), m;
  }) : [], s.update(), p = !0, C(s.before_update), s.fragment = c ? c(s.ctx) : !1, t.target) {
    if (t.hydrate) {
      const h = st(t.target);
      s.fragment && s.fragment.l(h), h.forEach(v);
    } else
      s.fragment && s.fragment.c();
    t.intro && W(e.$$.fragment), yt(e, t.target, t.anchor, t.customElement), F();
  }
  b(u);
}
class Y {
  $destroy() {
    $t(this, 1), this.$destroy = _;
  }
  $on(t, n) {
    if (!U(n))
      return _;
    const c = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
    return c.push(n), () => {
      const l = c.indexOf(n);
      l !== -1 && c.splice(l, 1);
    };
  }
  $set(t) {
    this.$$set && !ct(t) && (this.$$.skip_bound = !0, this.$$set(t), this.$$.skip_bound = !1);
  }
}
function K(e, t, n) {
  const c = e.slice();
  return c[3] = t[n].title, c[4] = t[n].thumbnail, c[5] = t[n].brand, c;
}
function kt(e) {
  return { c: _, m: _, p: _, d: _ };
}
function vt(e) {
  let t, n, c, l = (
    /*result*/
    e[2].products
  ), o = [];
  for (let r = 0; r < l.length; r += 1)
    o[r] = Q(K(e, l, r));
  return {
    c() {
      t = d("div"), n = d("div"), c = d("div");
      for (let r = 0; r < o.length; r += 1)
        o[r].c();
      i(c, "data-w-id", "56790bf8-d103-7ca9-e653-899a2f1bc2cb"), it(c, "opacity", "1"), i(c, "role", "list"), i(c, "class", "posts-collection-list w-dyn-items w-row"), i(n, "class", "posts-collection-list-wrapper w-dyn-list"), i(t, "class", "posts-wrapper");
    },
    m(r, f) {
      P(r, t, f), a(t, n), a(n, c);
      for (let u = 0; u < o.length; u += 1)
        o[u].m(c, null);
    },
    p(r, f) {
      if (f & /*response*/
      1) {
        l = /*result*/
        r[2].products;
        let u;
        for (u = 0; u < l.length; u += 1) {
          const s = K(r, l, u);
          o[u] ? o[u].p(s, f) : (o[u] = Q(s), o[u].c(), o[u].m(c, null));
        }
        for (; u < o.length; u += 1)
          o[u].d(1);
        o.length = l.length;
      }
    },
    d(r) {
      r && v(t), rt(o, r);
    }
  };
}
function Q(e) {
  let t, n, c, l, o, r, f, u, s, p, h = (
    /*title*/
    e[3] + ""
  ), m, x, g, N, Z = (
    /*brand*/
    e[5] + ""
  ), I, M, A, D;
  return {
    c() {
      t = d("div"), n = d("a"), c = d("img"), o = E(), r = d("div"), f = d("a"), u = E(), s = d("a"), p = d("h3"), m = k(h), x = E(), g = d("div"), N = d("div"), I = k(Z), M = E(), A = d("a"), D = E(), nt(c.src, l = /*thumbnail*/
      e[4]) || i(c, "src", l), i(c, "alt", ""), i(n, "href", "#"), i(n, "class", "posts-image w-inline-block"), i(f, "href", "#"), i(f, "class", "category-link"), i(p, "class", "h3"), i(s, "href", "#"), i(s, "class", "post-title w-inline-block"), i(N, "class", "post-author cc-top-margin"), i(A, "href", "#"), i(A, "class", "post-author"), i(g, "class", "post-author-text cc-small-thumbnail"), i(r, "class", "post-info-text"), i(t, "role", "listitem"), i(t, "class", "_3-collection-item w-dyn-item w-col w-col-4");
    },
    m(q, tt) {
      P(q, t, tt), a(t, n), a(n, c), a(t, o), a(t, r), a(r, f), a(r, u), a(r, s), a(s, p), a(p, m), a(r, x), a(r, g), a(g, N), a(N, I), a(g, M), a(g, A), a(t, D);
    },
    p: _,
    d(q) {
      q && v(t);
    }
  };
}
function xt(e) {
  let t;
  return {
    c() {
      t = d("div"), t.textContent = "Loading...";
    },
    m(n, c) {
      P(n, t, c);
    },
    p: _,
    d(n) {
      n && v(t);
    }
  };
}
function Et(e) {
  let t, n = {
    ctx: e,
    current: null,
    token: null,
    hasCatch: !1,
    pending: xt,
    then: vt,
    catch: kt,
    value: 2
  };
  return gt(
    /*response*/
    e[0],
    n
  ), {
    c() {
      t = lt(), n.block.c();
    },
    m(c, l) {
      P(c, t, l), n.block.m(c, n.anchor = l), n.mount = () => t.parentNode, n.anchor = t;
    },
    p(c, [l]) {
      e = c, bt(n, e, l);
    },
    i: _,
    o: _,
    d(c) {
      c && v(t), n.block.d(c), n.token = null, n = null;
    }
  };
}
function jt(e) {
  return [(async () => await (await fetch("https://dummyjson.com/products")).json())()];
}
class Ct extends Y {
  constructor(t) {
    super(), X(this, t, jt, Et, V, {});
  }
}
function Pt(e) {
  let t, n, c, l, o;
  return {
    c() {
      t = d("button"), n = k("count is "), c = k(
        /*count*/
        e[0]
      ), i(t, "class", "w-button");
    },
    m(r, f) {
      P(r, t, f), a(t, n), a(t, c), l || (o = ot(
        t,
        "click",
        /*increment*/
        e[1]
      ), l = !0);
    },
    p(r, [f]) {
      f & /*count*/
      1 && ut(
        c,
        /*count*/
        r[0]
      );
    },
    i: _,
    o: _,
    d(r) {
      r && v(t), l = !1, o();
    }
  };
}
function Nt(e, t, n) {
  let { count: c = 0 } = t;
  const l = () => {
    n(0, c += 1);
  };
  return e.$$set = (o) => {
    "count" in o && n(0, c = o.count);
  }, [c, l];
}
class At extends Y {
  constructor(t) {
    super(), X(this, t, Nt, Pt, V, { count: 0 });
  }
}
const Lt = (e, t, n) => {
  new e({
    target: document.getElementById(t),
    props: n
  });
}, Ot = {
  Products: Ct,
  Counter: At
};
export {
  Ot as Components,
  Lt as createComponent
};
