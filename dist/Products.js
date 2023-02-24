import { S as D, i as x, s as A, h as B, e as P, a as f, u as S, n as u, d as m, b as d, c as o, f as i, g as L, t as h, j as k, k as $ } from "./index-172679cb.js";
function w(a, e, t) {
  const n = a.slice();
  return n[3] = e[t], n;
}
function q(a) {
  return { c: u, m: u, p: u, d: u };
}
function H(a) {
  let e, t, n = (
    /*result*/
    a[2].products
  ), l = [];
  for (let s = 0; s < n.length; s += 1)
    l[s] = y(w(a, n, s));
  return {
    c() {
      e = d("div"), t = d("div");
      for (let s = 0; s < l.length; s += 1)
        l[s].c();
      o(t, "role", "list"), o(t, "class", "collection-wrap w-dyn-items"), o(e, "class", "w-dyn-list");
    },
    m(s, p) {
      f(s, e, p), i(e, t);
      for (let c = 0; c < l.length; c += 1)
        l[c].m(t, null);
    },
    p(s, p) {
      if (p & /*response*/
      1) {
        n = /*result*/
        s[2].products;
        let c;
        for (c = 0; c < n.length; c += 1) {
          const r = w(s, n, c);
          l[c] ? l[c].p(r, p) : (l[c] = y(r), l[c].c(), l[c].m(t, null));
        }
        for (; c < l.length; c += 1)
          l[c].d(1);
        l.length = n.length;
      }
    },
    d(s) {
      s && m(e), L(l, s);
    }
  };
}
function y(a) {
  let e, t, n, l, s = (
    /*product*/
    a[3].title + ""
  ), p, c, r, j = (
    /*product*/
    a[3].price + ""
  ), b, v, g;
  return {
    c() {
      e = d("div"), t = d("a"), n = d("div"), l = d("div"), p = h(s), c = k(), r = d("div"), b = h(j), v = h(" USD"), g = k(), o(l, "class", "product-name-text"), o(r, "data-wf-sku-bindings", "%5B%7B%22from%22%3A%22f_price_%22%2C%22to%22%3A%22innerHTML%22%7D%5D"), o(r, "class", "product-price-text"), o(n, "class", "product-description"), o(t, "data-wf-sku-bindings", "%5B%7B%22from%22%3A%22f_main_image_4dr.url%22%2C%22to%22%3A%22style.background-image%22%7D%5D"), $(t, "background-image", "url(" + /*product*/
      a[3].thumbnail + ")"), o(t, "href", "/product/unbelievable"), o(t, "class", "product-image-wrap w-inline-block"), o(e, "role", "listitem"), o(e, "class", "collection-item w-dyn-item");
    },
    m(_, C) {
      f(_, e, C), i(e, t), i(t, n), i(n, l), i(l, p), i(n, c), i(n, r), i(r, b), i(r, v), i(e, g);
    },
    p: u,
    d(_) {
      _ && m(e);
    }
  };
}
function M(a) {
  let e;
  return {
    c() {
      e = d("div"), e.textContent = "Loading...";
    },
    m(t, n) {
      f(t, e, n);
    },
    p: u,
    d(t) {
      t && m(e);
    }
  };
}
function N(a) {
  let e, t = {
    ctx: a,
    current: null,
    token: null,
    hasCatch: !1,
    pending: M,
    then: H,
    catch: q,
    value: 2
  };
  return B(
    /*response*/
    a[0],
    t
  ), {
    c() {
      e = P(), t.block.c();
    },
    m(n, l) {
      f(n, e, l), t.block.m(n, t.anchor = l), t.mount = () => e.parentNode, t.anchor = e;
    },
    p(n, [l]) {
      a = n, S(t, a, l);
    },
    i: u,
    o: u,
    d(n) {
      n && m(e), t.block.d(n), t.token = null, t = null;
    }
  };
}
function T(a) {
  return [(async () => await (await fetch("https://dummyjson.com/products")).json())()];
}
class z extends D {
  constructor(e) {
    super(), x(this, e, T, N, A, {});
  }
}
export {
  z as default
};
