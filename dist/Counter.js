import { S as f, i as m, s as d, b as p, t as u, c as b, a as _, f as l, l as h, m as k, n as r, d as w } from "./index-172679cb.js";
function x(n) {
  let t, s, e, a, o;
  return {
    c() {
      t = p("button"), s = u("count is "), e = u(
        /*count*/
        n[0]
      ), b(t, "class", "button cc-white-button w-inline-block");
    },
    m(c, i) {
      _(c, t, i), l(t, s), l(t, e), a || (o = h(
        t,
        "click",
        /*increment*/
        n[1]
      ), a = !0);
    },
    p(c, [i]) {
      i & /*count*/
      1 && k(
        e,
        /*count*/
        c[0]
      );
    },
    i: r,
    o: r,
    d(c) {
      c && w(t), a = !1, o();
    }
  };
}
function C(n, t, s) {
  let { count: e = 0 } = t;
  const a = () => {
    s(0, e += 1);
  };
  return n.$$set = (o) => {
    "count" in o && s(0, e = o.count);
  }, [e, a];
}
class g extends f {
  constructor(t) {
    super(), m(this, t, C, x, d, { count: 0 });
  }
}
export {
  g as default
};
