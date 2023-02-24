var SvelteFlow=function(S){"use strict";function _(){}function tt(e){return!!e&&(typeof e=="object"||typeof e=="function")&&typeof e.then=="function"}function I(e){return e()}function D(){return Object.create(null)}function x(e){e.forEach(I)}function G(e){return typeof e=="function"}function H(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}let N;function et(e,t){return N||(N=document.createElement("a")),N.href=t,e===N.href}function nt(e){return Object.keys(e).length===0}function a(e,t){e.appendChild(t)}function E(e,t,n){e.insertBefore(t,n||null)}function w(e){e.parentNode&&e.parentNode.removeChild(e)}function ct(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function d(e){return document.createElement(e)}function v(e){return document.createTextNode(e)}function C(){return v(" ")}function rt(){return v("")}function lt(e,t,n,c){return e.addEventListener(t,n,c),()=>e.removeEventListener(t,n,c)}function i(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function ot(e){return Array.from(e.childNodes)}function st(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function ut(e,t,n,c){n===null?e.style.removeProperty(t):e.style.setProperty(t,n,c?"important":"")}let j;function m(e){j=e}function it(){if(!j)throw new Error("Function called outside component initialization");return j}const $=[],J=[],A=[],K=[],at=Promise.resolve();let q=!1;function ft(){q||(q=!0,at.then(M))}function B(e){A.push(e)}const F=new Set;let k=0;function M(){if(k!==0)return;const e=j;do{try{for(;k<$.length;){const t=$[k];k++,m(t),dt(t.$$)}}catch(t){throw $.length=0,k=0,t}for(m(null),$.length=0,k=0;J.length;)J.pop()();for(let t=0;t<A.length;t+=1){const n=A[t];F.has(n)||(F.add(n),n())}A.length=0}while($.length);for(;K.length;)K.pop()();q=!1,F.clear(),m(e)}function dt(e){if(e.fragment!==null){e.update(),x(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(B)}}const O=new Set;let y;function ht(){y={r:0,c:[],p:y}}function _t(){y.r||x(y.c),y=y.p}function Q(e,t){e&&e.i&&(O.delete(e),e.i(t))}function pt(e,t,n,c){if(e&&e.o){if(O.has(e))return;O.add(e),y.c.push(()=>{O.delete(e),c&&(n&&e.d(1),c())}),e.o(t)}else c&&c()}function mt(e,t){const n=t.token={};function c(l,o,r,f){if(t.token!==n)return;t.resolved=f;let u=t.ctx;r!==void 0&&(u=u.slice(),u[r]=f);const s=l&&(t.current=l)(u);let p=!1;t.block&&(t.blocks?t.blocks.forEach((h,g)=>{g!==o&&h&&(ht(),pt(h,1,1,()=>{t.blocks[g]===h&&(t.blocks[g]=null)}),_t())}):t.block.d(1),s.c(),Q(s,1),s.m(t.mount(),t.anchor),p=!0),t.block=s,t.blocks&&(t.blocks[o]=s),p&&M()}if(tt(e)){const l=it();if(e.then(o=>{m(l),c(t.then,1,t.value,o),m(null)},o=>{if(m(l),c(t.catch,2,t.error,o),m(null),!t.hasCatch)throw o}),t.current!==t.pending)return c(t.pending,0),!0}else{if(t.current!==t.then)return c(t.then,1,t.value,e),!0;t.resolved=e}}function gt(e,t,n){const c=t.slice(),{resolved:l}=e;e.current===e.then&&(c[e.value]=l),e.current===e.catch&&(c[e.error]=l),e.block.p(c,n)}function bt(e,t,n,c){const{fragment:l,after_update:o}=e.$$;l&&l.m(t,n),c||B(()=>{const r=e.$$.on_mount.map(I).filter(G);e.$$.on_destroy?e.$$.on_destroy.push(...r):x(r),e.$$.on_mount=[]}),o.forEach(B)}function yt(e,t){const n=e.$$;n.fragment!==null&&(x(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function wt(e,t){e.$$.dirty[0]===-1&&($.push(e),ft(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function R(e,t,n,c,l,o,r,f=[-1]){const u=j;m(e);const s=e.$$={fragment:null,ctx:[],props:o,update:_,not_equal:l,bound:D(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(u?u.$$.context:[])),callbacks:D(),dirty:f,skip_bound:!1,root:t.target||u.$$.root};r&&r(s.root);let p=!1;if(s.ctx=n?n(e,t.props||{},(h,g,...P)=>{const b=P.length?P[0]:g;return s.ctx&&l(s.ctx[h],s.ctx[h]=b)&&(!s.skip_bound&&s.bound[h]&&s.bound[h](b),p&&wt(e,h)),g}):[],s.update(),p=!0,x(s.before_update),s.fragment=c?c(s.ctx):!1,t.target){if(t.hydrate){const h=ot(t.target);s.fragment&&s.fragment.l(h),h.forEach(w)}else s.fragment&&s.fragment.c();t.intro&&Q(e.$$.fragment),bt(e,t.target,t.anchor,t.customElement),M()}m(u)}class U{$destroy(){yt(this,1),this.$destroy=_}$on(t,n){if(!G(n))return _;const c=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return c.push(n),()=>{const l=c.indexOf(n);l!==-1&&c.splice(l,1)}}$set(t){this.$$set&&!nt(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function V(e,t,n){const c=e.slice();return c[3]=t[n].title,c[4]=t[n].thumbnail,c[5]=t[n].brand,c}function vt(e){return{c:_,m:_,p:_,d:_}}function $t(e){let t,n,c,l=e[2].products,o=[];for(let r=0;r<l.length;r+=1)o[r]=W(V(e,l,r));return{c(){t=d("div"),n=d("div"),c=d("div");for(let r=0;r<o.length;r+=1)o[r].c();i(c,"data-w-id","56790bf8-d103-7ca9-e653-899a2f1bc2cb"),ut(c,"opacity","1"),i(c,"role","list"),i(c,"class","posts-collection-list w-dyn-items w-row"),i(n,"class","posts-collection-list-wrapper w-dyn-list"),i(t,"class","posts-wrapper")},m(r,f){E(r,t,f),a(t,n),a(n,c);for(let u=0;u<o.length;u+=1)o[u].m(c,null)},p(r,f){if(f&1){l=r[2].products;let u;for(u=0;u<l.length;u+=1){const s=V(r,l,u);o[u]?o[u].p(s,f):(o[u]=W(s),o[u].c(),o[u].m(c,null))}for(;u<o.length;u+=1)o[u].d(1);o.length=l.length}},d(r){r&&w(t),ct(o,r)}}}function W(e){let t,n,c,l,o,r,f,u,s,p,h=e[3]+"",g,P,b,L,Ot=e[5]+"",X,Y,T,Z;return{c(){t=d("div"),n=d("a"),c=d("img"),o=C(),r=d("div"),f=d("a"),u=C(),s=d("a"),p=d("h3"),g=v(h),P=C(),b=d("div"),L=d("div"),X=v(Ot),Y=C(),T=d("a"),Z=C(),et(c.src,l=e[4])||i(c,"src",l),i(c,"alt",""),i(n,"href","#"),i(n,"class","posts-image w-inline-block"),i(f,"href","#"),i(f,"class","category-link"),i(p,"class","h3"),i(s,"href","#"),i(s,"class","post-title w-inline-block"),i(L,"class","post-author cc-top-margin"),i(T,"href","#"),i(T,"class","post-author"),i(b,"class","post-author-text cc-small-thumbnail"),i(r,"class","post-info-text"),i(t,"role","listitem"),i(t,"class","_3-collection-item w-dyn-item w-col w-col-4")},m(z,Lt){E(z,t,Lt),a(t,n),a(n,c),a(t,o),a(t,r),a(r,f),a(r,u),a(r,s),a(s,p),a(p,g),a(r,P),a(r,b),a(b,L),a(L,X),a(b,Y),a(b,T),a(t,Z)},p:_,d(z){z&&w(t)}}}function kt(e){let t;return{c(){t=d("div"),t.textContent="Loading..."},m(n,c){E(n,t,c)},p:_,d(n){n&&w(t)}}}function xt(e){let t,n={ctx:e,current:null,token:null,hasCatch:!1,pending:kt,then:$t,catch:vt,value:2};return mt(e[0],n),{c(){t=rt(),n.block.c()},m(c,l){E(c,t,l),n.block.m(c,n.anchor=l),n.mount=()=>t.parentNode,n.anchor=t},p(c,[l]){e=c,gt(n,e,l)},i:_,o:_,d(c){c&&w(t),n.block.d(c),n.token=null,n=null}}}function Et(e){return[(async()=>await(await fetch("https://dummyjson.com/products")).json())()]}class Ct extends U{constructor(t){super(),R(this,t,Et,xt,H,{})}}function jt(e){let t,n,c,l,o;return{c(){t=d("button"),n=v("count is "),c=v(e[0]),i(t,"class","button cc-white-button w-inline-block")},m(r,f){E(r,t,f),a(t,n),a(t,c),l||(o=lt(t,"click",e[1]),l=!0)},p(r,[f]){f&1&&st(c,r[0])},i:_,o:_,d(r){r&&w(t),l=!1,o()}}}function Pt(e,t,n){let{count:c=0}=t;const l=()=>{n(0,c+=1)};return e.$$set=o=>{"count"in o&&n(0,c=o.count)},[c,l]}class St extends U{constructor(t){super(),R(this,t,Pt,jt,H,{count:0})}}const Nt=(e,t,n)=>{new e({target:document.getElementById(t),props:n})},At={Products:Ct,Counter:St};return S.Components=At,S.createComponent=Nt,Object.defineProperty(S,Symbol.toStringTag,{value:"Module"}),S}({});
