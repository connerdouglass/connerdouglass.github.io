function m(){}function w(t,n){for(const e in n)t[e]=n[e];return t}function E(t){return t()}function F(){return Object.create(null)}function j(t){t.forEach(E)}function q(t){return typeof t=="function"}function M(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}let l;function S(t,n){return t===n?!0:(l||(l=document.createElement("a")),l.href=n,t===l.href)}function U(t){return Object.keys(t).length===0}function v(t,...n){if(t==null){for(const r of n)r(void 0);return m}const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function A(t,n,e){t.$$.on_destroy.push(v(n,e))}function B(t,n,e,r){if(t){const o=x(t,n,e,r);return t[0](o)}}function x(t,n,e,r){return t[1]&&r?w(e.ctx.slice(),t[1](r(n))):e.ctx}function G(t,n,e,r){if(t[2]&&r){const o=t[2](r(e));if(n.dirty===void 0)return o;if(typeof o=="object"){const f=[],d=Math.max(n.dirty.length,o.length);for(let a=0;a<d;a+=1)f[a]=n.dirty[a]|o[a];return f}return n.dirty|o}return n.dirty}function P(t,n,e,r,o,f){if(o){const d=x(n,e,r,f);t.p(d,o)}}function H(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let r=0;r<e;r++)n[r]=-1;return n}return-1}function I(t){const n={};for(const e in t)e[0]!=="$"&&(n[e]=t[e]);return n}function J(t,n){const e={};n=new Set(n);for(const r in t)!n.has(r)&&r[0]!=="$"&&(e[r]=t[r]);return e}function K(t){return t&&q(t.destroy)?t.destroy:m}let _;function h(t){_=t}function s(){if(!_)throw new Error("Function called outside component initialization");return _}function L(t){s().$$.before_update.push(t)}function N(t){s().$$.on_mount.push(t)}function Q(t){s().$$.after_update.push(t)}function R(t){s().$$.on_destroy.push(t)}function T(t,n){return s().$$.context.set(t,n),n}function V(t){return s().$$.context.get(t)}const i=[],g=[];let u=[];const y=[],k=Promise.resolve();let b=!1;function C(){b||(b=!0,k.then(z))}function W(){return C(),k}function O(t){u.push(t)}const p=new Set;let c=0;function z(){if(c!==0)return;const t=_;do{try{for(;c<i.length;){const n=i[c];c++,h(n),D(n.$$)}}catch(n){throw i.length=0,c=0,n}for(h(null),i.length=0,c=0;g.length;)g.pop()();for(let n=0;n<u.length;n+=1){const e=u[n];p.has(e)||(p.add(e),e())}u.length=0}while(i.length);for(;y.length;)y.pop()();b=!1,p.clear(),h(t)}function D(t){if(t.fragment!==null){t.update(),j(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(O)}}function X(t){const n=[],e=[];u.forEach(r=>t.indexOf(r)===-1?n.push(r):e.push(r)),e.forEach(r=>r()),u=n}export{B as A,K as B,P as C,H as D,G as E,T as F,R as G,Q as a,g as b,A as c,L as d,w as e,I as f,F as g,z as h,q as i,U as j,O as k,X as l,_ as m,m as n,N as o,h as p,E as q,j as r,M as s,W as t,i as u,C as v,S as w,V as x,J as y,s as z};