function d() {
}
function ot(e) {
  return !!e && (typeof e == "object" || typeof e == "function") && typeof e.then == "function";
}
function Z(e) {
  return e();
}
function R() {
  return /* @__PURE__ */ Object.create(null);
}
function H(e) {
  e.forEach(Z);
}
function tt(e) {
  return typeof e == "function";
}
function D(e, t) {
  return e != e ? t == t : e !== t || e && typeof e == "object" || typeof e == "function";
}
let L;
function U(e, t) {
  return L || (L = document.createElement("a")), L.href = t, e === L.href;
}
function ut(e) {
  return Object.keys(e).length === 0;
}
function a(e, t) {
  e.appendChild(t);
}
function B(e, t, n) {
  e.insertBefore(t, n || null);
}
function $(e) {
  e.parentNode && e.parentNode.removeChild(e);
}
function st(e, t) {
  for (let n = 0; n < e.length; n += 1)
    e[n] && e[n].d(t);
}
function _(e) {
  return document.createElement(e);
}
function C(e) {
  return document.createTextNode(e);
}
function O() {
  return C(" ");
}
function et() {
  return C("");
}
function it(e, t, n, r) {
  return e.addEventListener(t, n, r), () => e.removeEventListener(t, n, r);
}
function f(e, t, n) {
  n == null ? e.removeAttribute(t) : e.getAttribute(t) !== n && e.setAttribute(t, n);
}
function ft(e) {
  return Array.from(e.childNodes);
}
function z(e, t) {
  t = "" + t, e.wholeText !== t && (e.data = t);
}
let P;
function w(e) {
  P = e;
}
function at() {
  if (!P)
    throw new Error("Function called outside component initialization");
  return P;
}
const j = [], V = [], S = [], W = [], dt = Promise.resolve();
let F = !1;
function ht() {
  F || (F = !0, dt.then(G));
}
function M(e) {
  S.push(e);
}
const T = /* @__PURE__ */ new Set();
let x = 0;
function G() {
  if (x !== 0)
    return;
  const e = P;
  do {
    try {
      for (; x < j.length; ) {
        const t = j[x];
        x++, w(t), _t(t.$$);
      }
    } catch (t) {
      throw j.length = 0, x = 0, t;
    }
    for (w(null), j.length = 0, x = 0; V.length; )
      V.pop()();
    for (let t = 0; t < S.length; t += 1) {
      const n = S[t];
      T.has(n) || (T.add(n), n());
    }
    S.length = 0;
  } while (j.length);
  for (; W.length; )
    W.pop()();
  F = !1, T.clear(), w(e);
}
function _t(e) {
  if (e.fragment !== null) {
    e.update(), H(e.before_update);
    const t = e.dirty;
    e.dirty = [-1], e.fragment && e.fragment.p(e.ctx, t), e.after_update.forEach(M);
  }
}
const q = /* @__PURE__ */ new Set();
let v;
function nt() {
  v = {
    r: 0,
    c: [],
    p: v
    // parent group
  };
}
function rt() {
  v.r || H(v.c), v = v.p;
}
function E(e, t) {
  e && e.i && (q.delete(e), e.i(t));
}
function A(e, t, n, r) {
  if (e && e.o) {
    if (q.has(e))
      return;
    q.add(e), v.c.push(() => {
      q.delete(e), r && (n && e.d(1), r());
    }), e.o(t);
  } else
    r && r();
}
function mt(e, t) {
  const n = t.token = {};
  function r(c, u, l, i) {
    if (t.token !== n)
      return;
    t.resolved = i;
    let o = t.ctx;
    l !== void 0 && (o = o.slice(), o[l] = i);
    const s = c && (t.current = c)(o);
    let g = !1;
    t.block && (t.blocks ? t.blocks.forEach((h, b) => {
      b !== u && h && (nt(), A(h, 1, 1, () => {
        t.blocks[b] === h && (t.blocks[b] = null);
      }), rt());
    }) : t.block.d(1), s.c(), E(s, 1), s.m(t.mount(), t.anchor), g = !0), t.block = s, t.blocks && (t.blocks[u] = s), g && G();
  }
  if (ot(e)) {
    const c = at();
    if (e.then((u) => {
      w(c), r(t.then, 1, t.value, u), w(null);
    }, (u) => {
      if (w(c), r(t.catch, 2, t.error, u), w(null), !t.hasCatch)
        throw u;
    }), t.current !== t.pending)
      return r(t.pending, 0), !0;
  } else {
    if (t.current !== t.then)
      return r(t.then, 1, t.value, e), !0;
    t.resolved = e;
  }
}
function gt(e, t, n) {
  const r = t.slice(), { resolved: c } = e;
  e.current === e.then && (r[e.value] = c), e.current === e.catch && (r[e.error] = c), e.block.p(r, n);
}
function bt(e) {
  e && e.c();
}
function ct(e, t, n, r) {
  const { fragment: c, after_update: u } = e.$$;
  c && c.m(t, n), r || M(() => {
    const l = e.$$.on_mount.map(Z).filter(tt);
    e.$$.on_destroy ? e.$$.on_destroy.push(...l) : H(l), e.$$.on_mount = [];
  }), u.forEach(M);
}
function lt(e, t) {
  const n = e.$$;
  n.fragment !== null && (H(n.on_destroy), n.fragment && n.fragment.d(t), n.on_destroy = n.fragment = null, n.ctx = []);
}
function pt(e, t) {
  e.$$.dirty[0] === -1 && (j.push(e), ht(), e.$$.dirty.fill(0)), e.$$.dirty[t / 31 | 0] |= 1 << t % 31;
}
function J(e, t, n, r, c, u, l, i = [-1]) {
  const o = P;
  w(e);
  const s = e.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: u,
    update: d,
    not_equal: c,
    bound: R(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(t.context || (o ? o.$$.context : [])),
    // everything else
    callbacks: R(),
    dirty: i,
    skip_bound: !1,
    root: t.target || o.$$.root
  };
  l && l(s.root);
  let g = !1;
  if (s.ctx = n ? n(e, t.props || {}, (h, b, ...p) => {
    const y = p.length ? p[0] : b;
    return s.ctx && c(s.ctx[h], s.ctx[h] = y) && (!s.skip_bound && s.bound[h] && s.bound[h](y), g && pt(e, h)), b;
  }) : [], s.update(), g = !0, H(s.before_update), s.fragment = r ? r(s.ctx) : !1, t.target) {
    if (t.hydrate) {
      const h = ft(t.target);
      s.fragment && s.fragment.l(h), h.forEach($);
    } else
      s.fragment && s.fragment.c();
    t.intro && E(e.$$.fragment), ct(e, t.target, t.anchor, t.customElement), G();
  }
  w(o);
}
class K {
  $destroy() {
    lt(this, 1), this.$destroy = d;
  }
  $on(t, n) {
    if (!tt(n))
      return d;
    const r = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
    return r.push(n), () => {
      const c = r.indexOf(n);
      c !== -1 && r.splice(c, 1);
    };
  }
  $set(t) {
    this.$$set && !ut(t) && (this.$$.skip_bound = !0, this.$$set(t), this.$$.skip_bound = !1);
  }
}
function kt(e) {
  let t, n, r, c, u, l, i, o, s, g, h, b, p, y, I, Q, N;
  return {
    c() {
      t = _("div"), n = _("a"), r = _("img"), u = O(), l = _("div"), i = _("a"), o = O(), s = _("a"), g = _("h3"), h = C(
        /*title*/
        e[0]
      ), b = O(), p = _("div"), y = _("div"), I = C(
        /*brand*/
        e[1]
      ), Q = O(), N = _("a"), U(r.src, c = /*image*/
      e[2]) || f(r, "src", c), f(r, "alt", ""), f(
        n,
        "href",
        /*href*/
        e[3]
      ), f(n, "class", "posts-image w-inline-block"), f(
        i,
        "href",
        /*href*/
        e[3]
      ), f(i, "class", "category-link"), f(g, "class", "h3"), f(
        s,
        "href",
        /*href*/
        e[3]
      ), f(s, "class", "post-title w-inline-block"), f(y, "class", "post-author cc-top-margin"), f(
        N,
        "href",
        /*brandHref*/
        e[4]
      ), f(N, "class", "post-author"), f(p, "class", "post-author-text cc-small-thumbnail"), f(l, "class", "post-info-text"), f(t, "role", "listitem"), f(t, "class", "_3-collection-item w-dyn-item w-col w-col-4");
    },
    m(m, k) {
      B(m, t, k), a(t, n), a(n, r), a(t, u), a(t, l), a(l, i), a(l, o), a(l, s), a(s, g), a(g, h), a(l, b), a(l, p), a(p, y), a(y, I), a(p, Q), a(p, N);
    },
    p(m, [k]) {
      k & /*image*/
      4 && !U(r.src, c = /*image*/
      m[2]) && f(r, "src", c), k & /*href*/
      8 && f(
        n,
        "href",
        /*href*/
        m[3]
      ), k & /*href*/
      8 && f(
        i,
        "href",
        /*href*/
        m[3]
      ), k & /*title*/
      1 && z(
        h,
        /*title*/
        m[0]
      ), k & /*href*/
      8 && f(
        s,
        "href",
        /*href*/
        m[3]
      ), k & /*brand*/
      2 && z(
        I,
        /*brand*/
        m[1]
      ), k & /*brandHref*/
      16 && f(
        N,
        "href",
        /*brandHref*/
        m[4]
      );
    },
    i: d,
    o: d,
    d(m) {
      m && $(t);
    }
  };
}
function wt(e, t, n) {
  let { title: r } = t, { brand: c } = t, { image: u } = t, { href: l = "#" } = t, { brandHref: i = "#" } = t;
  return e.$$set = (o) => {
    "title" in o && n(0, r = o.title), "brand" in o && n(1, c = o.brand), "image" in o && n(2, u = o.image), "href" in o && n(3, l = o.href), "brandHref" in o && n(4, i = o.brandHref);
  }, [r, c, u, l, i];
}
class yt extends K {
  constructor(t) {
    super(), J(this, t, wt, kt, D, {
      title: 0,
      brand: 1,
      image: 2,
      href: 3,
      brandHref: 4
    });
  }
}
function X(e, t, n) {
  const r = e.slice();
  return r[3] = t[n].title, r[4] = t[n].thumbnail, r[5] = t[n].brand, r;
}
function vt(e) {
  return {
    c: d,
    m: d,
    p: d,
    i: d,
    o: d,
    d
  };
}
function Et(e) {
  let t, n, r = (
    /*result*/
    e[2].products
  ), c = [];
  for (let l = 0; l < r.length; l += 1)
    c[l] = Y(X(e, r, l));
  const u = (l) => A(c[l], 1, 1, () => {
    c[l] = null;
  });
  return {
    c() {
      for (let l = 0; l < c.length; l += 1)
        c[l].c();
      t = et();
    },
    m(l, i) {
      for (let o = 0; o < c.length; o += 1)
        c[o].m(l, i);
      B(l, t, i), n = !0;
    },
    p(l, i) {
      if (i & /*response*/
      1) {
        r = /*result*/
        l[2].products;
        let o;
        for (o = 0; o < r.length; o += 1) {
          const s = X(l, r, o);
          c[o] ? (c[o].p(s, i), E(c[o], 1)) : (c[o] = Y(s), c[o].c(), E(c[o], 1), c[o].m(t.parentNode, t));
        }
        for (nt(), o = r.length; o < c.length; o += 1)
          u(o);
        rt();
      }
    },
    i(l) {
      if (!n) {
        for (let i = 0; i < r.length; i += 1)
          E(c[i]);
        n = !0;
      }
    },
    o(l) {
      c = c.filter(Boolean);
      for (let i = 0; i < c.length; i += 1)
        A(c[i]);
      n = !1;
    },
    d(l) {
      st(c, l), l && $(t);
    }
  };
}
function Y(e) {
  let t, n;
  return t = new yt({
    props: {
      title: (
        /*title*/
        e[3]
      ),
      image: (
        /*thumbnail*/
        e[4]
      ),
      brand: (
        /*brand*/
        e[5]
      )
    }
  }), {
    c() {
      bt(t.$$.fragment);
    },
    m(r, c) {
      ct(t, r, c), n = !0;
    },
    p: d,
    i(r) {
      n || (E(t.$$.fragment, r), n = !0);
    },
    o(r) {
      A(t.$$.fragment, r), n = !1;
    },
    d(r) {
      lt(t, r);
    }
  };
}
function xt(e) {
  let t;
  return {
    c() {
      t = _("div"), t.textContent = "Loading...";
    },
    m(n, r) {
      B(n, t, r);
    },
    p: d,
    i: d,
    o: d,
    d(n) {
      n && $(t);
    }
  };
}
function jt(e) {
  let t, n, r = {
    ctx: e,
    current: null,
    token: null,
    hasCatch: !1,
    pending: xt,
    then: Et,
    catch: vt,
    value: 2,
    blocks: [, , ,]
  };
  return mt(
    /*response*/
    e[0],
    r
  ), {
    c() {
      t = et(), r.block.c();
    },
    m(c, u) {
      B(c, t, u), r.block.m(c, r.anchor = u), r.mount = () => t.parentNode, r.anchor = t, n = !0;
    },
    p(c, [u]) {
      e = c, gt(r, e, u);
    },
    i(c) {
      n || (E(r.block), n = !0);
    },
    o(c) {
      for (let u = 0; u < 3; u += 1) {
        const l = r.blocks[u];
        A(l);
      }
      n = !1;
    },
    d(c) {
      c && $(t), r.block.d(c), r.token = null, r = null;
    }
  };
}
function Ct(e) {
  return [(async () => await (await fetch("https://dummyjson.com/products")).json())()];
}
class $t extends K {
  constructor(t) {
    super(), J(this, t, Ct, jt, D, {});
  }
}
function Nt(e) {
  let t, n, r, c, u;
  return {
    c() {
      t = _("button"), n = C("count is "), r = C(
        /*count*/
        e[0]
      ), f(t, "class", "button cc-white-button w-inline-block");
    },
    m(l, i) {
      B(l, t, i), a(t, n), a(t, r), c || (u = it(
        t,
        "click",
        /*increment*/
        e[1]
      ), c = !0);
    },
    p(l, [i]) {
      i & /*count*/
      1 && z(
        r,
        /*count*/
        l[0]
      );
    },
    i: d,
    o: d,
    d(l) {
      l && $(t), c = !1, u();
    }
  };
}
function Pt(e, t, n) {
  let { count: r = 0 } = t;
  const c = () => {
    n(0, r += 1);
  };
  return e.$$set = (u) => {
    "count" in u && n(0, r = u.count);
  }, [r, c];
}
class At extends K {
  constructor(t) {
    super(), J(this, t, Pt, Nt, D, { count: 0 });
  }
}
const Ht = (e, t, n) => {
  new e({
    target: document.getElementById(t),
    props: n
  });
}, Bt = {
  Products: $t,
  Counter: At
};
export {
  Bt as Components,
  Ht as createComponent
};
