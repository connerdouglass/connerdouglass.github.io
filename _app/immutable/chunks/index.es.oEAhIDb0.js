import{s as Fn,n as rn,d as Wn,e as on,f as sn}from"./scheduler.CWahymoP.js";import{S as Hn,i as Un,H as Yn,k as fn,y as Xn,g as Bn,d as Gn}from"./index.SbtJ8mX_.js";function Wt(n,t){const a={},e={},r={$$scope:1};let i=n.length;for(;i--;){const o=n[i],s=t[i];if(s){for(const l in o)l in s||(e[l]=1);for(const l in s)r[l]||(a[l]=s[l],r[l]=1);n[i]=s}else for(const l in o)r[l]=1}for(const o in e)o in a||(a[o]=void 0);return a}function Ht(n){return typeof n=="object"&&n!==null?n:{}}/*!
 * Font Awesome Free 5.15.4 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 */function N(n){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?N=function(t){return typeof t}:N=function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},N(n)}function Vn(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function qn(n,t){for(var a=0;a<t.length;a++){var e=t[a];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,e.key,e)}}function Jn(n,t,a){return t&&qn(n.prototype,t),n}function Qn(n,t,a){return t in n?Object.defineProperty(n,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[t]=a,n}function c(n){for(var t=1;t<arguments.length;t++){var a=arguments[t]!=null?arguments[t]:{},e=Object.keys(a);typeof Object.getOwnPropertySymbols=="function"&&(e=e.concat(Object.getOwnPropertySymbols(a).filter(function(r){return Object.getOwnPropertyDescriptor(a,r).enumerable}))),e.forEach(function(r){Qn(n,r,a[r])})}return n}function pn(n,t){return Zn(n)||Kn(n,t)||$n()}function Zn(n){if(Array.isArray(n))return n}function Kn(n,t){var a=[],e=!0,r=!1,i=void 0;try{for(var o=n[Symbol.iterator](),s;!(e=(s=o.next()).done)&&(a.push(s.value),!(t&&a.length===t));e=!0);}catch(l){r=!0,i=l}finally{try{!e&&o.return!=null&&o.return()}finally{if(r)throw i}}return a}function $n(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}var ln=function(){},$={},wn={},nt=null,kn={mark:ln,measure:ln};try{typeof window<"u"&&($=window),typeof document<"u"&&(wn=document),typeof MutationObserver<"u"&&(nt=MutationObserver),typeof performance<"u"&&(kn=performance)}catch{}var tt=$.navigator||{},cn=tt.userAgent,un=cn===void 0?"":cn,Y=$,g=wn,D=kn;Y.document;var nn=!!g.documentElement&&!!g.head&&typeof g.addEventListener=="function"&&typeof g.createElement=="function";~un.indexOf("MSIE")||~un.indexOf("Trident/");var M="___FONT_AWESOME___",xn="fa",In="svg-inline--fa",et="data-fa-i2svg";(function(){try{return!0}catch{return!1}})();var B={GROUP:"group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},En=Y.FontAwesomeConfig||{};function at(n){var t=g.querySelector("script["+n+"]");if(t)return t.getAttribute(n)}function rt(n){return n===""?!0:n==="false"?!1:n==="true"?!0:n}if(g&&typeof g.querySelector=="function"){var it=[["data-family-prefix","familyPrefix"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];it.forEach(function(n){var t=pn(n,2),a=t[0],e=t[1],r=rt(at(a));r!=null&&(En[e]=r)})}var ot={familyPrefix:xn,replacementClass:In,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0},q=c({},ot,En);q.autoReplaceSvg||(q.observeMutations=!1);var y=c({},q);Y.FontAwesomeConfig=y;var z=Y||{};z[M]||(z[M]={});z[M].styles||(z[M].styles={});z[M].hooks||(z[M].hooks={});z[M].shims||(z[M].shims=[]);var A=z[M],st=[],ft=function n(){g.removeEventListener("DOMContentLoaded",n),J=1,st.map(function(t){return t()})},J=!1;nn&&(J=(g.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(g.readyState),J||g.addEventListener("DOMContentLoaded",ft));var tn="pending",An="settled",F="fulfilled",W="rejected",lt=function(){},Cn=typeof global<"u"&&typeof global.process<"u"&&typeof global.process.emit=="function",ct=typeof setImmediate>"u"?setTimeout:setImmediate,L=[],Q;function ut(){for(var n=0;n<L.length;n++)L[n][0](L[n][1]);L=[],Q=!1}function H(n,t){L.push([n,t]),Q||(Q=!0,ct(ut,0))}function mt(n,t){function a(r){en(t,r)}function e(r){R(t,r)}try{n(a,e)}catch(r){e(r)}}function On(n){var t=n.owner,a=t._state,e=t._data,r=n[a],i=n.then;if(typeof r=="function"){a=F;try{e=r(e)}catch(o){R(i,o)}}Mn(i,e)||(a===F&&en(i,e),a===W&&R(i,e))}function Mn(n,t){var a;try{if(n===t)throw new TypeError("A promises callback cannot return that same promise.");if(t&&(typeof t=="function"||N(t)==="object")){var e=t.then;if(typeof e=="function")return e.call(t,function(r){a||(a=!0,t===r?zn(n,r):en(n,r))},function(r){a||(a=!0,R(n,r))}),!0}}catch(r){return a||R(n,r),!0}return!1}function en(n,t){(n===t||!Mn(n,t))&&zn(n,t)}function zn(n,t){n._state===tn&&(n._state=An,n._data=t,H(dt,n))}function R(n,t){n._state===tn&&(n._state=An,n._data=t,H(ht,n))}function Pn(n){n._then=n._then.forEach(On)}function dt(n){n._state=F,Pn(n)}function ht(n){n._state=W,Pn(n),!n._handled&&Cn&&global.process.emit("unhandledRejection",n._data,n)}function gt(n){global.process.emit("rejectionHandled",n)}function p(n){if(typeof n!="function")throw new TypeError("Promise resolver "+n+" is not a function");if(!(this instanceof p))throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");this._then=[],mt(n,this)}p.prototype={constructor:p,_state:tn,_then:null,_data:void 0,_handled:!1,then:function(t,a){var e={owner:this,then:new this.constructor(lt),fulfilled:t,rejected:a};return(a||t)&&!this._handled&&(this._handled=!0,this._state===W&&Cn&&H(gt,this)),this._state===F||this._state===W?H(On,e):this._then.push(e),e.then},catch:function(t){return this.then(null,t)}};p.all=function(n){if(!Array.isArray(n))throw new TypeError("You must pass an array to Promise.all().");return new p(function(t,a){var e=[],r=0;function i(l){return r++,function(u){e[l]=u,--r||t(e)}}for(var o=0,s;o<n.length;o++)s=n[o],s&&typeof s.then=="function"?s.then(i(o),a):e[o]=s;r||t(e)})};p.race=function(n){if(!Array.isArray(n))throw new TypeError("You must pass an array to Promise.race().");return new p(function(t,a){for(var e=0,r;e<n.length;e++)r=n[e],r&&typeof r.then=="function"?r.then(t,a):t(r)})};p.resolve=function(n){return n&&N(n)==="object"&&n.constructor===p?n:new p(function(t){t(n)})};p.reject=function(n){return new p(function(t,a){a(n)})};var T={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function vt(n){if(!(!n||!nn)){var t=g.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=n;for(var a=g.head.childNodes,e=null,r=a.length-1;r>-1;r--){var i=a[r],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(e=i)}return g.head.insertBefore(t,e),n}}var yt="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function U(){for(var n=12,t="";n-- >0;)t+=yt[Math.random()*62|0];return t}function Sn(n){return"".concat(n).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function bt(n){return Object.keys(n||{}).reduce(function(t,a){return t+"".concat(a,'="').concat(Sn(n[a]),'" ')},"").trim()}function _n(n){return Object.keys(n||{}).reduce(function(t,a){return t+"".concat(a,": ").concat(n[a],";")},"")}function Tn(n){return n.size!==T.size||n.x!==T.x||n.y!==T.y||n.rotate!==T.rotate||n.flipX||n.flipY}function Ln(n){var t=n.transform,a=n.containerWidth,e=n.iconWidth,r={transform:"translate(".concat(a/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(s)},u={transform:"translate(".concat(e/2*-1," -256)")};return{outer:r,inner:l,path:u}}var G={x:0,y:0,width:"100%",height:"100%"};function mn(n){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return n.attributes&&(n.attributes.fill||t)&&(n.attributes.fill="black"),n}function pt(n){return n.tag==="g"?n.children:[n]}function wt(n){var t=n.children,a=n.attributes,e=n.main,r=n.mask,i=n.maskId,o=n.transform,s=e.width,l=e.icon,u=r.width,d=r.icon,m=Ln({transform:o,containerWidth:u,iconWidth:s}),w={tag:"rect",attributes:c({},G,{fill:"white"})},k=l.children?{children:l.children.map(mn)}:{},x={tag:"g",attributes:c({},m.inner),children:[mn(c({tag:l.tag,attributes:c({},l.attributes,m.path)},k))]},b={tag:"g",attributes:c({},m.outer),children:[x]},v="mask-".concat(i||U()),h="clip-".concat(i||U()),I={tag:"mask",attributes:c({},G,{id:v,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[w,b]},C={tag:"defs",children:[{tag:"clipPath",attributes:{id:h},children:pt(d)},I]};return t.push(C,{tag:"rect",attributes:c({fill:"currentColor","clip-path":"url(#".concat(h,")"),mask:"url(#".concat(v,")")},G)}),{children:t,attributes:a}}function kt(n){var t=n.children,a=n.attributes,e=n.main,r=n.transform,i=n.styles,o=_n(i);if(o.length>0&&(a.style=o),Tn(r)){var s=Ln({transform:r,containerWidth:e.width,iconWidth:e.width});t.push({tag:"g",attributes:c({},s.outer),children:[{tag:"g",attributes:c({},s.inner),children:[{tag:e.icon.tag,children:e.icon.children,attributes:c({},e.icon.attributes,s.path)}]}]})}else t.push(e.icon);return{children:t,attributes:a}}function xt(n){var t=n.children,a=n.main,e=n.mask,r=n.attributes,i=n.styles,o=n.transform;if(Tn(o)&&a.found&&!e.found){var s=a.width,l=a.height,u={x:s/l/2,y:.5};r.style=_n(c({},i,{"transform-origin":"".concat(u.x+o.x/16,"em ").concat(u.y+o.y/16,"em")}))}return[{tag:"svg",attributes:r,children:t}]}function It(n){var t=n.prefix,a=n.iconName,e=n.children,r=n.attributes,i=n.symbol,o=i===!0?"".concat(t,"-").concat(y.familyPrefix,"-").concat(a):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:c({},r,{id:o}),children:e}]}]}function Et(n){var t=n.icons,a=t.main,e=t.mask,r=n.prefix,i=n.iconName,o=n.transform,s=n.symbol,l=n.title,u=n.maskId,d=n.titleId,m=n.extra,w=n.watchable,k=w===void 0?!1:w,x=e.found?e:a,b=x.width,v=x.height,h=r==="fak",I=h?"":"fa-w-".concat(Math.ceil(b/v*16)),C=[y.replacementClass,i?"".concat(y.familyPrefix,"-").concat(i):"",I].filter(function(j){return m.classes.indexOf(j)===-1}).filter(function(j){return j!==""||!!j}).concat(m.classes).join(" "),E={children:[],attributes:c({},m.attributes,{"data-prefix":r,"data-icon":i,class:C,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(b," ").concat(v)})},S=h&&!~m.classes.indexOf("fa-fw")?{width:"".concat(b/v*16*.0625,"em")}:{};k&&(E.attributes[et]=""),l&&E.children.push({tag:"title",attributes:{id:E.attributes["aria-labelledby"]||"title-".concat(d||U())},children:[l]});var f=c({},E,{prefix:r,iconName:i,main:a,mask:e,maskId:u,transform:o,symbol:s,styles:c({},S,m.styles)}),O=e.found&&a.found?wt(f):kt(f),_=O.children,P=O.attributes;return f.children=_,f.attributes=P,s?It(f):xt(f)}var dn=function(){};y.measurePerformance&&D&&D.mark&&D.measure;var V=function(t,a,e,r){var i=Object.keys(t),o=i.length,s=a,l,u,d;for(e===void 0?(l=1,d=t[i[0]]):(l=0,d=e);l<o;l++)u=i[l],d=s(d,t[u],u,t);return d};function Nn(n,t){var a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},e=a.skipHooks,r=e===void 0?!1:e,i=Object.keys(t).reduce(function(o,s){var l=t[s],u=!!l.icon;return u?o[l.iconName]=l.icon:o[s]=l,o},{});typeof A.hooks.addPack=="function"&&!r?A.hooks.addPack(n,i):A.styles[n]=c({},A.styles[n]||{},i),n==="fas"&&Nn("fa",t)}var hn=A.styles,At=A.shims,Rn=function(){var t=function(r){return V(hn,function(i,o,s){return i[s]=V(o,r,{}),i},{})};t(function(e,r,i){return r[3]&&(e[r[3]]=i),e}),t(function(e,r,i){var o=r[2];return e[i]=i,o.forEach(function(s){e[s]=i}),e});var a="far"in hn;V(At,function(e,r){var i=r[0],o=r[1],s=r[2];return o==="far"&&!a&&(o="fas"),e[i]={prefix:o,iconName:s},e},{})};Rn();A.styles;function gn(n,t,a){if(n&&n[t]&&n[t][a])return{prefix:t,iconName:a,icon:n[t][a]}}function jn(n){var t=n.tag,a=n.attributes,e=a===void 0?{}:a,r=n.children,i=r===void 0?[]:r;return typeof n=="string"?Sn(n):"<".concat(t," ").concat(bt(e),">").concat(i.map(jn).join(""),"</").concat(t,">")}var Ct=function(t){var a={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t?t.toLowerCase().split(" ").reduce(function(e,r){var i=r.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return e.flipX=!0,e;if(o&&s==="v")return e.flipY=!0,e;if(s=parseFloat(s),isNaN(s))return e;switch(o){case"grow":e.size=e.size+s;break;case"shrink":e.size=e.size-s;break;case"left":e.x=e.x-s;break;case"right":e.x=e.x+s;break;case"up":e.y=e.y-s;break;case"down":e.y=e.y+s;break;case"rotate":e.rotate=e.rotate+s;break}return e},a):a};function Z(n){this.name="MissingIcon",this.message=n||"Icon unavailable",this.stack=new Error().stack}Z.prototype=Object.create(Error.prototype);Z.prototype.constructor=Z;var X={fill:"currentColor"},Dn={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};c({},X,{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"});var an=c({},Dn,{attributeName:"opacity"});c({},X,{cx:"256",cy:"364",r:"28"}),c({},Dn,{attributeName:"r",values:"28;14;28;28;14;28;"}),c({},an,{values:"1;0;1;1;0;1;"});c({},X,{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),c({},an,{values:"1;0;0;0;0;1;"});c({},X,{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),c({},an,{values:"0;0;1;1;0;0;"});A.styles;function vn(n){var t=n[0],a=n[1],e=n.slice(4),r=pn(e,1),i=r[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(y.familyPrefix,"-").concat(B.GROUP)},children:[{tag:"path",attributes:{class:"".concat(y.familyPrefix,"-").concat(B.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(y.familyPrefix,"-").concat(B.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:a,icon:o}}A.styles;var Ot=`svg:not(:root).svg-inline--fa {
  overflow: visible;
}

.svg-inline--fa {
  display: inline-block;
  font-size: inherit;
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.225em;
}
.svg-inline--fa.fa-w-1 {
  width: 0.0625em;
}
.svg-inline--fa.fa-w-2 {
  width: 0.125em;
}
.svg-inline--fa.fa-w-3 {
  width: 0.1875em;
}
.svg-inline--fa.fa-w-4 {
  width: 0.25em;
}
.svg-inline--fa.fa-w-5 {
  width: 0.3125em;
}
.svg-inline--fa.fa-w-6 {
  width: 0.375em;
}
.svg-inline--fa.fa-w-7 {
  width: 0.4375em;
}
.svg-inline--fa.fa-w-8 {
  width: 0.5em;
}
.svg-inline--fa.fa-w-9 {
  width: 0.5625em;
}
.svg-inline--fa.fa-w-10 {
  width: 0.625em;
}
.svg-inline--fa.fa-w-11 {
  width: 0.6875em;
}
.svg-inline--fa.fa-w-12 {
  width: 0.75em;
}
.svg-inline--fa.fa-w-13 {
  width: 0.8125em;
}
.svg-inline--fa.fa-w-14 {
  width: 0.875em;
}
.svg-inline--fa.fa-w-15 {
  width: 0.9375em;
}
.svg-inline--fa.fa-w-16 {
  width: 1em;
}
.svg-inline--fa.fa-w-17 {
  width: 1.0625em;
}
.svg-inline--fa.fa-w-18 {
  width: 1.125em;
}
.svg-inline--fa.fa-w-19 {
  width: 1.1875em;
}
.svg-inline--fa.fa-w-20 {
  width: 1.25em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: 0.3em;
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: 0.3em;
  width: auto;
}
.svg-inline--fa.fa-border {
  height: 1.5em;
}
.svg-inline--fa.fa-li {
  width: 2em;
}
.svg-inline--fa.fa-fw {
  width: 1.25em;
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: #ff253a;
  border-radius: 1em;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  color: #fff;
  height: 1.5em;
  line-height: 1;
  max-width: 5em;
  min-width: 1.5em;
  overflow: hidden;
  padding: 0.25em;
  right: 0;
  text-overflow: ellipsis;
  top: 0;
  -webkit-transform: scale(0.25);
          transform: scale(0.25);
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: 0;
  right: 0;
  top: auto;
  -webkit-transform: scale(0.25);
          transform: scale(0.25);
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: 0;
  left: 0;
  right: auto;
  top: auto;
  -webkit-transform: scale(0.25);
          transform: scale(0.25);
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  right: 0;
  top: 0;
  -webkit-transform: scale(0.25);
          transform: scale(0.25);
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: 0;
  right: auto;
  top: 0;
  -webkit-transform: scale(0.25);
          transform: scale(0.25);
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-lg {
  font-size: 1.3333333333em;
  line-height: 0.75em;
  vertical-align: -0.0667em;
}

.fa-xs {
  font-size: 0.75em;
}

.fa-sm {
  font-size: 0.875em;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: 2.5em;
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: -2em;
  position: absolute;
  text-align: center;
  width: 2em;
  line-height: inherit;
}

.fa-border {
  border: solid 0.08em #eee;
  border-radius: 0.1em;
  padding: 0.2em 0.25em 0.15em;
}

.fa-pull-left {
  float: left;
}

.fa-pull-right {
  float: right;
}

.fa.fa-pull-left,
.fas.fa-pull-left,
.far.fa-pull-left,
.fal.fa-pull-left,
.fab.fa-pull-left {
  margin-right: 0.3em;
}
.fa.fa-pull-right,
.fas.fa-pull-right,
.far.fa-pull-right,
.fal.fa-pull-right,
.fab.fa-pull-right {
  margin-left: 0.3em;
}

.fa-spin {
  -webkit-animation: fa-spin 2s infinite linear;
          animation: fa-spin 2s infinite linear;
}

.fa-pulse {
  -webkit-animation: fa-spin 1s infinite steps(8);
          animation: fa-spin 1s infinite steps(8);
}

@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}

@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=1)";
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2)";
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=3)";
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)";
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)";
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both, .fa-flip-horizontal.fa-flip-vertical {
  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)";
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

:root .fa-rotate-90,
:root .fa-rotate-180,
:root .fa-rotate-270,
:root .fa-flip-horizontal,
:root .fa-flip-vertical,
:root .fa-flip-both {
  -webkit-filter: none;
          filter: none;
}

.fa-stack {
  display: inline-block;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: #fff;
}

.sr-only {
  border: 0;
  clip: rect(0, 0, 0, 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
}

.sr-only-focusable:active, .sr-only-focusable:focus {
  clip: auto;
  height: auto;
  margin: 0;
  overflow: visible;
  position: static;
  width: auto;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: 1;
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: 0.4;
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: 0.4;
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: 1;
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse {
  color: #fff;
}`;function Mt(){var n=xn,t=In,a=y.familyPrefix,e=y.replacementClass,r=Ot;if(a!==n||e!==t){var i=new RegExp("\\.".concat(n,"\\-"),"g"),o=new RegExp("\\--".concat(n,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");r=r.replace(i,".".concat(a,"-")).replace(o,"--".concat(a,"-")).replace(s,".".concat(e))}return r}var zt=function(){function n(){Vn(this,n),this.definitions={}}return Jn(n,[{key:"add",value:function(){for(var a=this,e=arguments.length,r=new Array(e),i=0;i<e;i++)r[i]=arguments[i];var o=r.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){a.definitions[s]=c({},a.definitions[s]||{},o[s]),Nn(s,o[s]),Rn()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(a,e){var r=e.prefix&&e.iconName&&e.icon?{0:e}:e;return Object.keys(r).map(function(i){var o=r[i],s=o.prefix,l=o.iconName,u=o.icon;a[s]||(a[s]={}),a[s][l]=u}),a}}]),n}();function Pt(){y.autoAddCss&&!yn&&(vt(Mt()),yn=!0)}function St(n,t){return Object.defineProperty(n,"abstract",{get:t}),Object.defineProperty(n,"html",{get:function(){return n.abstract.map(function(e){return jn(e)})}}),Object.defineProperty(n,"node",{get:function(){if(nn){var e=g.createElement("div");return e.innerHTML=n.html,e.children}}}),n}function K(n){var t=n.prefix,a=t===void 0?"fa":t,e=n.iconName;if(e)return gn(Tt.definitions,a,e)||gn(A.styles,a,e)}function _t(n){return function(t){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=(t||{}).icon?t:K(t||{}),r=a.mask;return r&&(r=(r||{}).icon?r:K(r||{})),n(e,c({},a,{mask:r}))}}var Tt=new zt,yn=!1,Lt={transform:function(t){return Ct(t)}},Nt=_t(function(n){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=t.transform,e=a===void 0?T:a,r=t.symbol,i=r===void 0?!1:r,o=t.mask,s=o===void 0?null:o,l=t.maskId,u=l===void 0?null:l,d=t.title,m=d===void 0?null:d,w=t.titleId,k=w===void 0?null:w,x=t.classes,b=x===void 0?[]:x,v=t.attributes,h=v===void 0?{}:v,I=t.styles,C=I===void 0?{}:I;if(n){var E=n.prefix,S=n.iconName,f=n.icon;return St(c({type:"icon"},n),function(){return Pt(),y.autoA11y&&(m?h["aria-labelledby"]="".concat(y.replacementClass,"-title-").concat(k||U()):(h["aria-hidden"]="true",h.focusable="false")),Et({icons:{main:vn(f),mask:s?vn(s.icon):{found:!1,width:null,height:null,icon:{}}},prefix:E,iconName:S,transform:c({},T,e),symbol:i,title:m,maskId:u,titleId:k,extra:{attributes:h,styles:C,classes:b}})})}});function bn(n){if(n===null||typeof n=="object"&&n.prefix&&n.iconName)return n;if(Array.isArray(n)&&n.length===2){const[t,a]=n;return{prefix:t,iconName:a}}if(typeof n=="string")return{prefix:"fas",iconName:n}}function Rt(n){let t,a;return{c(){t=new Yn(!1),a=fn(),this.h()},l(e){t=Xn(e,!1),a=fn(),this.h()},h(){t.a=a},m(e,r){t.m(n[0],e,r),Bn(e,a,r)},p(e,[r]){r&1&&t.p(e[0])},i:rn,o:rn,d(e){e&&(Gn(a),t.d())}}}function jt(n,t,a){let e,r,{border:i=!1}=t,{fixedWidth:o=!1}=t,{flip:s=null}=t,{icon:l=null}=t,{mask:u=null}=t,{listItem:d=!1}=t,{pull:m=null}=t,{pulse:w=!1}=t,{rotation:k=null}=t,{swapOpacity:x=!1}=t,{size:b=null}=t,{spin:v=!1}=t,{transform:h={}}=t,{symbol:I=!1}=t,{title:C=null}=t,{inverse:E=!1}=t,S="";return Wn(()=>{const f=bn(l);if(!f)return;const O=K(f),_=Nt(O||l,{symbol:I,title:C,styles:t.style?r:{},classes:[...Object.keys(e).map(P=>e[P]?P:null).filter(P=>!!P),(t.class||"").split(" ")],transform:{...typeof h=="string"?Lt.transform(h):h},mask:bn(u)});if(!_){console.warn("Could not find one or more icon(s)",O||l,u);return}a(0,S=_.html)}),n.$$set=f=>{a(19,t=on(on({},t),sn(f))),"border"in f&&a(1,i=f.border),"fixedWidth"in f&&a(2,o=f.fixedWidth),"flip"in f&&a(3,s=f.flip),"icon"in f&&a(4,l=f.icon),"mask"in f&&a(5,u=f.mask),"listItem"in f&&a(6,d=f.listItem),"pull"in f&&a(7,m=f.pull),"pulse"in f&&a(8,w=f.pulse),"rotation"in f&&a(9,k=f.rotation),"swapOpacity"in f&&a(10,x=f.swapOpacity),"size"in f&&a(11,b=f.size),"spin"in f&&a(12,v=f.spin),"transform"in f&&a(13,h=f.transform),"symbol"in f&&a(14,I=f.symbol),"title"in f&&a(15,C=f.title),"inverse"in f&&a(16,E=f.inverse)},n.$$.update=()=>{n.$$.dirty&73678&&(e={"fa-spin":v,"fa-pulse":w,"fa-fw":o,"fa-border":i,"fa-li":d,"fa-inverse":E,"fa-flip-horizontal":["both","horizontal"].includes(s),"fa-flip-vertical":["both","vertical"].includes(s),[`fa-${b}`]:b!==null,[`fa-rotate-${k}`]:k!==null,[`fa-pull-${m}`]:m!==null,"fa-swap-opacity":x}),r=(t.style||"").split(";").filter(f=>!!f).map(f=>f.split(":").map(O=>O.trim())).reduce((f,O)=>{const[_,P]=O;return f[_]=P,f},{})},t=sn(t),[S,i,o,s,l,u,d,m,w,k,x,b,v,h,I,C,E]}class Ut extends Hn{constructor(t){super(),Un(this,t,jt,Rt,Fn,{border:1,fixedWidth:2,flip:3,icon:4,mask:5,listItem:6,pull:7,pulse:8,rotation:9,swapOpacity:10,size:11,spin:12,transform:13,symbol:14,title:15,inverse:16})}}/*!
 * Font Awesome Free 5.15.4 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 */var Yt={prefix:"fas",iconName:"envelope",icon:[512,512,[],"f0e0","M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"]},Xt={prefix:"fas",iconName:"external-link-square-alt",icon:[448,512,[],"f360","M448 80v352c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48V80c0-26.51 21.49-48 48-48h352c26.51 0 48 21.49 48 48zm-88 16H248.029c-21.313 0-32.08 25.861-16.971 40.971l31.984 31.987L67.515 364.485c-4.686 4.686-4.686 12.284 0 16.971l31.029 31.029c4.687 4.686 12.285 4.686 16.971 0l195.526-195.526 31.988 31.991C358.058 263.977 384 253.425 384 231.979V120c0-13.255-10.745-24-24-24z"]};export{Ut as F,Ht as a,Yt as b,Xt as f,Wt as g};
