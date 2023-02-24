function d() {
}
function K(t) {
  return !!t && (typeof t == "object" || typeof t == "function") && typeof t.then == "function";
}
function H(t) {
  return t();
}
function S() {
  return /* @__PURE__ */ Object.create(null);
}
function E(t) {
  t.forEach(H);
}
function I(t) {
  return typeof t == "function";
}
function U(t, e) {
  return t != t ? e == e : t !== e || t && typeof t == "object" || typeof t == "function";
}
function Q(t) {
  return Object.keys(t).length === 0;
}
function h(t, e) {
  t.appendChild(e);
}
function C(t, e, n) {
  t.insertBefore(e, n || null);
}
function v(t) {
  t.parentNode && t.parentNode.removeChild(t);
}
function R(t, e) {
  for (let n = 0; n < t.length; n += 1)
    t[n] && t[n].d(e);
}
function p(t) {
  return document.createElement(t);
}
function y(t) {
  return document.createTextNode(t);
}
function O() {
  return y(" ");
}
function V() {
  return y("");
}
function W(t, e, n, c) {
  return t.addEventListener(e, n, c), () => t.removeEventListener(e, n, c);
}
function f(t, e, n) {
  n == null ? t.removeAttribute(e) : t.getAttribute(e) !== n && t.setAttribute(e, n);
}
function X(t) {
  return Array.from(t.childNodes);
}
function Y(t, e) {
  e = "" + e, t.wholeText !== e && (t.data = e);
}
function Z(t, e, n, c) {
  n === null ? t.style.removeProperty(e) : t.style.setProperty(e, n, c ? "important" : "");
}
let x;
function m(t) {
  x = t;
}
function tt() {
  if (!x)
    throw new Error("Function called outside component initialization");
  return x;
}
const w = [], T = [], A = [], M = [], et = Promise.resolve();
let D = !1;
function nt() {
  D || (D = !0, et.then(L));
}
function N(t) {
  A.push(t);
}
const P = /* @__PURE__ */ new Set();
let $ = 0;
function L() {
  if ($ !== 0)
    return;
  const t = x;
  do {
    try {
      for (; $ < w.length; ) {
        const e = w[$];
        $++, m(e), ct(e.$$);
      }
    } catch (e) {
      throw w.length = 0, $ = 0, e;
    }
    for (m(null), w.length = 0, $ = 0; T.length; )
      T.pop()();
    for (let e = 0; e < A.length; e += 1) {
      const n = A[e];
      P.has(n) || (P.add(n), n());
    }
    A.length = 0;
  } while (w.length);
  for (; M.length; )
    M.pop()();
  D = !1, P.clear(), m(t);
}
function ct(t) {
  if (t.fragment !== null) {
    t.update(), E(t.before_update);
    const e = t.dirty;
    t.dirty = [-1], t.fragment && t.fragment.p(t.ctx, e), t.after_update.forEach(N);
  }
}
const B = /* @__PURE__ */ new Set();
let b;
function rt() {
  b = {
    r: 0,
    c: [],
    p: b
    // parent group
  };
}
function ot() {
  b.r || E(b.c), b = b.p;
}
function q(t, e) {
  t && t.i && (B.delete(t), t.i(e));
}
function lt(t, e, n, c) {
  if (t && t.o) {
    if (B.has(t))
      return;
    B.add(t), b.c.push(() => {
      B.delete(t), c && (n && t.d(1), c());
    }), t.o(e);
  } else
    c && c();
}
function ut(t, e) {
  const n = e.token = {};
  function c(r, o, s, l) {
    if (e.token !== n)
      return;
    e.resolved = l;
    let i = e.ctx;
    s !== void 0 && (i = i.slice(), i[s] = l);
    const u = r && (e.current = r)(i);
    let g = !1;
    e.block && (e.blocks ? e.blocks.forEach((a, _) => {
      _ !== o && a && (rt(), lt(a, 1, 1, () => {
        e.blocks[_] === a && (e.blocks[_] = null);
      }), ot());
    }) : e.block.d(1), u.c(), q(u, 1), u.m(e.mount(), e.anchor), g = !0), e.block = u, e.blocks && (e.blocks[o] = u), g && L();
  }
  if (K(t)) {
    const r = tt();
    if (t.then((o) => {
      m(r), c(e.then, 1, e.value, o), m(null);
    }, (o) => {
      if (m(r), c(e.catch, 2, e.error, o), m(null), !e.hasCatch)
        throw o;
    }), e.current !== e.pending)
      return c(e.pending, 0), !0;
  } else {
    if (e.current !== e.then)
      return c(e.then, 1, e.value, t), !0;
    e.resolved = t;
  }
}
function st(t, e, n) {
  const c = e.slice(), { resolved: r } = t;
  t.current === t.then && (c[t.value] = r), t.current === t.catch && (c[t.error] = r), t.block.p(c, n);
}
function it(t, e, n, c) {
  const { fragment: r, after_update: o } = t.$$;
  r && r.m(e, n), c || N(() => {
    const s = t.$$.on_mount.map(H).filter(I);
    t.$$.on_destroy ? t.$$.on_destroy.push(...s) : E(s), t.$$.on_mount = [];
  }), o.forEach(N);
}
function at(t, e) {
  const n = t.$$;
  n.fragment !== null && (E(n.on_destroy), n.fragment && n.fragment.d(e), n.on_destroy = n.fragment = null, n.ctx = []);
}
function ft(t, e) {
  t.$$.dirty[0] === -1 && (w.push(t), nt(), t.$$.dirty.fill(0)), t.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function G(t, e, n, c, r, o, s, l = [-1]) {
  const i = x;
  m(t);
  const u = t.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: o,
    update: d,
    not_equal: r,
    bound: S(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (i ? i.$$.context : [])),
    // everything else
    callbacks: S(),
    dirty: l,
    skip_bound: !1,
    root: e.target || i.$$.root
  };
  s && s(u.root);
  let g = !1;
  if (u.ctx = n ? n(t, e.props || {}, (a, _, ...k) => {
    const j = k.length ? k[0] : _;
    return u.ctx && r(u.ctx[a], u.ctx[a] = j) && (!u.skip_bound && u.bound[a] && u.bound[a](j), g && ft(t, a)), _;
  }) : [], u.update(), g = !0, E(u.before_update), u.fragment = c ? c(u.ctx) : !1, e.target) {
    if (e.hydrate) {
      const a = X(e.target);
      u.fragment && u.fragment.l(a), a.forEach(v);
    } else
      u.fragment && u.fragment.c();
    e.intro && q(t.$$.fragment), it(t, e.target, e.anchor, e.customElement), L();
  }
  m(i);
}
class J {
  $destroy() {
    at(this, 1), this.$destroy = d;
  }
  $on(e, n) {
    if (!I(n))
      return d;
    const c = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
    return c.push(n), () => {
      const r = c.indexOf(n);
      r !== -1 && c.splice(r, 1);
    };
  }
  $set(e) {
    this.$$set && !Q(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
  }
}
function z(t, e, n) {
  const c = t.slice();
  return c[3] = e[n], c;
}
function dt(t) {
  return { c: d, m: d, p: d, d };
}
function ht(t) {
  let e, n, c = (
    /*result*/
    t[2].products
  ), r = [];
  for (let o = 0; o < c.length; o += 1)
    r[o] = F(z(t, c, o));
  return {
    c() {
      e = p("div"), n = p("div");
      for (let o = 0; o < r.length; o += 1)
        r[o].c();
      f(n, "role", "list"), f(n, "class", "collection-wrap w-dyn-items"), f(e, "class", "w-dyn-list");
    },
    m(o, s) {
      C(o, e, s), h(e, n);
      for (let l = 0; l < r.length; l += 1)
        r[l].m(n, null);
    },
    p(o, s) {
      if (s & /*response*/
      1) {
        c = /*result*/
        o[2].products;
        let l;
        for (l = 0; l < c.length; l += 1) {
          const i = z(o, c, l);
          r[l] ? r[l].p(i, s) : (r[l] = F(i), r[l].c(), r[l].m(n, null));
        }
        for (; l < r.length; l += 1)
          r[l].d(1);
        r.length = c.length;
      }
    },
    d(o) {
      o && v(e), R(r, o);
    }
  };
}
function F(t) {
  let e, n, c, r, o = (
    /*product*/
    t[3].title + ""
  ), s, l, i, u = (
    /*product*/
    t[3].price + ""
  ), g, a, _;
  return {
    c() {
      e = p("div"), n = p("a"), c = p("div"), r = p("div"), s = y(o), l = O(), i = p("div"), g = y(u), a = y(" USD"), _ = O(), f(r, "class", "product-name-text"), f(i, "data-wf-sku-bindings", "%5B%7B%22from%22%3A%22f_price_%22%2C%22to%22%3A%22innerHTML%22%7D%5D"), f(i, "class", "product-price-text"), f(c, "class", "product-description"), f(n, "data-wf-sku-bindings", "%5B%7B%22from%22%3A%22f_main_image_4dr.url%22%2C%22to%22%3A%22style.background-image%22%7D%5D"), Z(n, "background-image", "url(" + /*product*/
      t[3].thumbnail + ")"), f(n, "href", "/product/unbelievable"), f(n, "class", "product-image-wrap w-inline-block"), f(e, "role", "listitem"), f(e, "class", "collection-item w-dyn-item");
    },
    m(k, j) {
      C(k, e, j), h(e, n), h(n, c), h(c, r), h(r, s), h(c, l), h(c, i), h(i, g), h(i, a), h(e, _);
    },
    p: d,
    d(k) {
      k && v(e);
    }
  };
}
function _t(t) {
  let e;
  return {
    c() {
      e = p("div"), e.textContent = "Loading...";
    },
    m(n, c) {
      C(n, e, c);
    },
    p: d,
    d(n) {
      n && v(e);
    }
  };
}
function pt(t) {
  let e, n = {
    ctx: t,
    current: null,
    token: null,
    hasCatch: !1,
    pending: _t,
    then: ht,
    catch: dt,
    value: 2
  };
  return ut(
    /*response*/
    t[0],
    n
  ), {
    c() {
      e = V(), n.block.c();
    },
    m(c, r) {
      C(c, e, r), n.block.m(c, n.anchor = r), n.mount = () => e.parentNode, n.anchor = e;
    },
    p(c, [r]) {
      t = c, st(n, t, r);
    },
    i: d,
    o: d,
    d(c) {
      c && v(e), n.block.d(c), n.token = null, n = null;
    }
  };
}
function mt(t) {
  return [(async () => await (await fetch("https://dummyjson.com/products")).json())()];
}
class yt extends J {
  constructor(e) {
    super(), G(this, e, mt, pt, U, {});
  }
}
function gt(t) {
  let e, n, c, r, o;
  return {
    c() {
      e = p("button"), n = y("count is "), c = y(
        /*count*/
        t[0]
      ), f(e, "class", "button cc-white-button w-inline-block");
    },
    m(s, l) {
      C(s, e, l), h(e, n), h(e, c), r || (o = W(
        e,
        "click",
        /*increment*/
        t[1]
      ), r = !0);
    },
    p(s, [l]) {
      l & /*count*/
      1 && Y(
        c,
        /*count*/
        s[0]
      );
    },
    i: d,
    o: d,
    d(s) {
      s && v(e), r = !1, o();
    }
  };
}
function bt(t, e, n) {
  let { count: c = 0 } = e;
  const r = () => {
    n(0, c += 1);
  };
  return t.$$set = (o) => {
    "count" in o && n(0, c = o.count);
  }, [c, r];
}
class kt extends J {
  constructor(e) {
    super(), G(this, e, bt, gt, U, { count: 0 });
  }
}
const $t = (t, e, n) => {
  new t({
    target: document.getElementById(e),
    props: n
  });
};
export {
  kt as Counter,
  yt as Products,
  $t as createComponent
};
