import{y as Je,s as ne,z as Qe,A as pn,B as x,C as Ke,b as Xe,n as le,d as bt,D as ze,u as yt,g as _t,e as wt,j as kt,r as At,f as Vn,E as vn,F as Nn,G as Ot}from"../chunks/scheduler.BxLpWqHu.js";import{S as fe,i as ue,k as Z,g as R,q as He,l as B,m as Te,n as F,d as m,y as qn,z as Wn,a as O,A as zt,e as A,c as C,B as Ye,r as Lt,u as J,v as $,w as Q,x as K,s as T,f as U,o as y,t as N,b as q,j as ce,H as Xn,C as Zn,D as Me,h as g,E as Le}from"../chunks/index.C7rnCF48.js";function te(t){return(t==null?void 0:t.length)!==void 0?t:Array.from(t)}function Ae(t,e){const n={},i={},a={$$scope:1};let o=t.length;for(;o--;){const s=t[o],r=e[o];if(r){for(const l in s)l in r||(i[l]=1);for(const l in r)a[l]||(n[l]=r[l],a[l]=1);t[o]=r}else for(const l in s)a[l]=1}for(const s in i)s in n||(n[s]=void 0);return n}function be(t){return typeof t=="object"&&t!==null?t:{}}const Jn=!0,Qn=!1,Xa=Object.freeze(Object.defineProperty({__proto__:null,prerender:Jn,ssr:Qn},Symbol.toStringTag,{value:"Module"}));var dt=function(t,e){return dt=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,i){n.__proto__=i}||function(n,i){for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(n[a]=i[a])},dt(t,e)};function bn(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");dt(t,e);function n(){this.constructor=t}t.prototype=e===null?Object.create(e):(n.prototype=e.prototype,new n)}var ke=function(){return ke=Object.assign||function(e){for(var n,i=1,a=arguments.length;i<a;i++){n=arguments[i];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},ke.apply(this,arguments)};function Be(t){var e=typeof Symbol=="function"&&Symbol.iterator,n=e&&t[e],i=0;if(n)return n.call(t);if(t&&typeof t.length=="number")return{next:function(){return t&&i>=t.length&&(t=void 0),{value:t&&t[i++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var yn=function(){function t(e){e===void 0&&(e={}),this.adapter=e}return Object.defineProperty(t,"cssClasses",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(t,"strings",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(t,"numbers",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(t,"defaultAdapter",{get:function(){return{}},enumerable:!1,configurable:!0}),t.prototype.init=function(){},t.prototype.destroy=function(){},t}();/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */function Kn(t){return t===void 0&&(t=window),Yn(t)?{passive:!0}:!1}function Yn(t){t===void 0&&(t=window);var e=!1;try{var n={get passive(){return e=!0,!1}},i=function(){};t.document.addEventListener("test",i,n),t.document.removeEventListener("test",i,n)}catch{e=!1}return e}const xn=Object.freeze(Object.defineProperty({__proto__:null,applyPassive:Kn},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */function $n(t,e){if(t.closest)return t.closest(e);for(var n=t;n;){if(_n(n,e))return n;n=n.parentElement}return null}function _n(t,e){var n=t.matches||t.webkitMatchesSelector||t.msMatchesSelector;return n.call(t,e)}function ei(t){var e=t;if(e.offsetParent!==null)return e.scrollWidth;var n=e.cloneNode(!0);n.style.setProperty("position","absolute"),n.style.setProperty("transform","translate(-9999px, -9999px)"),document.documentElement.appendChild(n);var i=n.scrollWidth;return document.documentElement.removeChild(n),i}const ti=Object.freeze(Object.defineProperty({__proto__:null,closest:$n,estimateScrollWidth:ei,matches:_n},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var ni={BG_FOCUSED:"mdc-ripple-upgraded--background-focused",FG_ACTIVATION:"mdc-ripple-upgraded--foreground-activation",FG_DEACTIVATION:"mdc-ripple-upgraded--foreground-deactivation",ROOT:"mdc-ripple-upgraded",UNBOUNDED:"mdc-ripple-upgraded--unbounded"},ii={VAR_FG_SCALE:"--mdc-ripple-fg-scale",VAR_FG_SIZE:"--mdc-ripple-fg-size",VAR_FG_TRANSLATE_END:"--mdc-ripple-fg-translate-end",VAR_FG_TRANSLATE_START:"--mdc-ripple-fg-translate-start",VAR_LEFT:"--mdc-ripple-left",VAR_TOP:"--mdc-ripple-top"},Rt={DEACTIVATION_TIMEOUT_MS:225,FG_DEACTIVATION_MS:150,INITIAL_ORIGIN_SCALE:.6,PADDING:10,TAP_DELAY_MS:300},Ge;function ai(t,e){e===void 0&&(e=!1);var n=t.CSS,i=Ge;if(typeof Ge=="boolean"&&!e)return Ge;var a=n&&typeof n.supports=="function";if(!a)return!1;var o=n.supports("--css-vars","yes"),s=n.supports("(--css-vars: yes)")&&n.supports("color","#00000000");return i=o||s,e||(Ge=i),i}function ri(t,e,n){if(!t)return{x:0,y:0};var i=e.x,a=e.y,o=i+n.left,s=a+n.top,r,l;if(t.type==="touchstart"){var c=t;r=c.changedTouches[0].pageX-o,l=c.changedTouches[0].pageY-s}else{var f=t;r=f.pageX-o,l=f.pageY-s}return{x:r,y:l}}/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var jt=["touchstart","pointerdown","mousedown","keydown"],Pt=["touchend","pointerup","mouseup","contextmenu"],Ve=[],si=function(t){bn(e,t);function e(n){var i=t.call(this,ke(ke({},e.defaultAdapter),n))||this;return i.activationAnimationHasEnded=!1,i.activationTimer=0,i.fgDeactivationRemovalTimer=0,i.fgScale="0",i.frame={width:0,height:0},i.initialSize=0,i.layoutFrame=0,i.maxRadius=0,i.unboundedCoords={left:0,top:0},i.activationState=i.defaultActivationState(),i.activationTimerCallback=function(){i.activationAnimationHasEnded=!0,i.runDeactivationUXLogicIfReady()},i.activateHandler=function(a){i.activateImpl(a)},i.deactivateHandler=function(){i.deactivateImpl()},i.focusHandler=function(){i.handleFocus()},i.blurHandler=function(){i.handleBlur()},i.resizeHandler=function(){i.layout()},i}return Object.defineProperty(e,"cssClasses",{get:function(){return ni},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return ii},enumerable:!1,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return Rt},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},browserSupportsCssVars:function(){return!0},computeBoundingRect:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},containsEventTarget:function(){return!0},deregisterDocumentInteractionHandler:function(){},deregisterInteractionHandler:function(){},deregisterResizeHandler:function(){},getWindowPageOffset:function(){return{x:0,y:0}},isSurfaceActive:function(){return!0},isSurfaceDisabled:function(){return!0},isUnbounded:function(){return!0},registerDocumentInteractionHandler:function(){},registerInteractionHandler:function(){},registerResizeHandler:function(){},removeClass:function(){},updateCssVariable:function(){}}},enumerable:!1,configurable:!0}),e.prototype.init=function(){var n=this,i=this.supportsPressRipple();if(this.registerRootHandlers(i),i){var a=e.cssClasses,o=a.ROOT,s=a.UNBOUNDED;requestAnimationFrame(function(){n.adapter.addClass(o),n.adapter.isUnbounded()&&(n.adapter.addClass(s),n.layoutInternal())})}},e.prototype.destroy=function(){var n=this;if(this.supportsPressRipple()){this.activationTimer&&(clearTimeout(this.activationTimer),this.activationTimer=0,this.adapter.removeClass(e.cssClasses.FG_ACTIVATION)),this.fgDeactivationRemovalTimer&&(clearTimeout(this.fgDeactivationRemovalTimer),this.fgDeactivationRemovalTimer=0,this.adapter.removeClass(e.cssClasses.FG_DEACTIVATION));var i=e.cssClasses,a=i.ROOT,o=i.UNBOUNDED;requestAnimationFrame(function(){n.adapter.removeClass(a),n.adapter.removeClass(o),n.removeCssVars()})}this.deregisterRootHandlers(),this.deregisterDeactivationHandlers()},e.prototype.activate=function(n){this.activateImpl(n)},e.prototype.deactivate=function(){this.deactivateImpl()},e.prototype.layout=function(){var n=this;this.layoutFrame&&cancelAnimationFrame(this.layoutFrame),this.layoutFrame=requestAnimationFrame(function(){n.layoutInternal(),n.layoutFrame=0})},e.prototype.setUnbounded=function(n){var i=e.cssClasses.UNBOUNDED;n?this.adapter.addClass(i):this.adapter.removeClass(i)},e.prototype.handleFocus=function(){var n=this;requestAnimationFrame(function(){return n.adapter.addClass(e.cssClasses.BG_FOCUSED)})},e.prototype.handleBlur=function(){var n=this;requestAnimationFrame(function(){return n.adapter.removeClass(e.cssClasses.BG_FOCUSED)})},e.prototype.supportsPressRipple=function(){return this.adapter.browserSupportsCssVars()},e.prototype.defaultActivationState=function(){return{activationEvent:void 0,hasDeactivationUXRun:!1,isActivated:!1,isProgrammatic:!1,wasActivatedByPointer:!1,wasElementMadeActive:!1}},e.prototype.registerRootHandlers=function(n){var i,a;if(n){try{for(var o=Be(jt),s=o.next();!s.done;s=o.next()){var r=s.value;this.adapter.registerInteractionHandler(r,this.activateHandler)}}catch(l){i={error:l}}finally{try{s&&!s.done&&(a=o.return)&&a.call(o)}finally{if(i)throw i.error}}this.adapter.isUnbounded()&&this.adapter.registerResizeHandler(this.resizeHandler)}this.adapter.registerInteractionHandler("focus",this.focusHandler),this.adapter.registerInteractionHandler("blur",this.blurHandler)},e.prototype.registerDeactivationHandlers=function(n){var i,a;if(n.type==="keydown")this.adapter.registerInteractionHandler("keyup",this.deactivateHandler);else try{for(var o=Be(Pt),s=o.next();!s.done;s=o.next()){var r=s.value;this.adapter.registerDocumentInteractionHandler(r,this.deactivateHandler)}}catch(l){i={error:l}}finally{try{s&&!s.done&&(a=o.return)&&a.call(o)}finally{if(i)throw i.error}}},e.prototype.deregisterRootHandlers=function(){var n,i;try{for(var a=Be(jt),o=a.next();!o.done;o=a.next()){var s=o.value;this.adapter.deregisterInteractionHandler(s,this.activateHandler)}}catch(r){n={error:r}}finally{try{o&&!o.done&&(i=a.return)&&i.call(a)}finally{if(n)throw n.error}}this.adapter.deregisterInteractionHandler("focus",this.focusHandler),this.adapter.deregisterInteractionHandler("blur",this.blurHandler),this.adapter.isUnbounded()&&this.adapter.deregisterResizeHandler(this.resizeHandler)},e.prototype.deregisterDeactivationHandlers=function(){var n,i;this.adapter.deregisterInteractionHandler("keyup",this.deactivateHandler);try{for(var a=Be(Pt),o=a.next();!o.done;o=a.next()){var s=o.value;this.adapter.deregisterDocumentInteractionHandler(s,this.deactivateHandler)}}catch(r){n={error:r}}finally{try{o&&!o.done&&(i=a.return)&&i.call(a)}finally{if(n)throw n.error}}},e.prototype.removeCssVars=function(){var n=this,i=e.strings,a=Object.keys(i);a.forEach(function(o){o.indexOf("VAR_")===0&&n.adapter.updateCssVariable(i[o],null)})},e.prototype.activateImpl=function(n){var i=this;if(!this.adapter.isSurfaceDisabled()){var a=this.activationState;if(!a.isActivated){var o=this.previousActivationEvent,s=o&&n!==void 0&&o.type!==n.type;if(!s){a.isActivated=!0,a.isProgrammatic=n===void 0,a.activationEvent=n,a.wasActivatedByPointer=a.isProgrammatic?!1:n!==void 0&&(n.type==="mousedown"||n.type==="touchstart"||n.type==="pointerdown");var r=n!==void 0&&Ve.length>0&&Ve.some(function(l){return i.adapter.containsEventTarget(l)});if(r){this.resetActivationState();return}n!==void 0&&(Ve.push(n.target),this.registerDeactivationHandlers(n)),a.wasElementMadeActive=this.checkElementMadeActive(n),a.wasElementMadeActive&&this.animateActivation(),requestAnimationFrame(function(){Ve=[],!a.wasElementMadeActive&&n!==void 0&&(n.key===" "||n.keyCode===32)&&(a.wasElementMadeActive=i.checkElementMadeActive(n),a.wasElementMadeActive&&i.animateActivation()),a.wasElementMadeActive||(i.activationState=i.defaultActivationState())})}}}},e.prototype.checkElementMadeActive=function(n){return n!==void 0&&n.type==="keydown"?this.adapter.isSurfaceActive():!0},e.prototype.animateActivation=function(){var n=this,i=e.strings,a=i.VAR_FG_TRANSLATE_START,o=i.VAR_FG_TRANSLATE_END,s=e.cssClasses,r=s.FG_DEACTIVATION,l=s.FG_ACTIVATION,c=e.numbers.DEACTIVATION_TIMEOUT_MS;this.layoutInternal();var f="",u="";if(!this.adapter.isUnbounded()){var z=this.getFgTranslationCoordinates(),I=z.startPoint,v=z.endPoint;f=I.x+"px, "+I.y+"px",u=v.x+"px, "+v.y+"px"}this.adapter.updateCssVariable(a,f),this.adapter.updateCssVariable(o,u),clearTimeout(this.activationTimer),clearTimeout(this.fgDeactivationRemovalTimer),this.rmBoundedActivationClasses(),this.adapter.removeClass(r),this.adapter.computeBoundingRect(),this.adapter.addClass(l),this.activationTimer=setTimeout(function(){n.activationTimerCallback()},c)},e.prototype.getFgTranslationCoordinates=function(){var n=this.activationState,i=n.activationEvent,a=n.wasActivatedByPointer,o;a?o=ri(i,this.adapter.getWindowPageOffset(),this.adapter.computeBoundingRect()):o={x:this.frame.width/2,y:this.frame.height/2},o={x:o.x-this.initialSize/2,y:o.y-this.initialSize/2};var s={x:this.frame.width/2-this.initialSize/2,y:this.frame.height/2-this.initialSize/2};return{startPoint:o,endPoint:s}},e.prototype.runDeactivationUXLogicIfReady=function(){var n=this,i=e.cssClasses.FG_DEACTIVATION,a=this.activationState,o=a.hasDeactivationUXRun,s=a.isActivated,r=o||!s;r&&this.activationAnimationHasEnded&&(this.rmBoundedActivationClasses(),this.adapter.addClass(i),this.fgDeactivationRemovalTimer=setTimeout(function(){n.adapter.removeClass(i)},Rt.FG_DEACTIVATION_MS))},e.prototype.rmBoundedActivationClasses=function(){var n=e.cssClasses.FG_ACTIVATION;this.adapter.removeClass(n),this.activationAnimationHasEnded=!1,this.adapter.computeBoundingRect()},e.prototype.resetActivationState=function(){var n=this;this.previousActivationEvent=this.activationState.activationEvent,this.activationState=this.defaultActivationState(),setTimeout(function(){return n.previousActivationEvent=void 0},e.numbers.TAP_DELAY_MS)},e.prototype.deactivateImpl=function(){var n=this,i=this.activationState;if(i.isActivated){var a=ke({},i);i.isProgrammatic?(requestAnimationFrame(function(){n.animateDeactivation(a)}),this.resetActivationState()):(this.deregisterDeactivationHandlers(),requestAnimationFrame(function(){n.activationState.hasDeactivationUXRun=!0,n.animateDeactivation(a),n.resetActivationState()}))}},e.prototype.animateDeactivation=function(n){var i=n.wasActivatedByPointer,a=n.wasElementMadeActive;(i||a)&&this.runDeactivationUXLogicIfReady()},e.prototype.layoutInternal=function(){var n=this;this.frame=this.adapter.computeBoundingRect();var i=Math.max(this.frame.height,this.frame.width),a=function(){var s=Math.sqrt(Math.pow(n.frame.width,2)+Math.pow(n.frame.height,2));return s+e.numbers.PADDING};this.maxRadius=this.adapter.isUnbounded()?i:a();var o=Math.floor(i*e.numbers.INITIAL_ORIGIN_SCALE);this.adapter.isUnbounded()&&o%2!==0?this.initialSize=o-1:this.initialSize=o,this.fgScale=""+this.maxRadius/this.initialSize,this.updateLayoutCssVars()},e.prototype.updateLayoutCssVars=function(){var n=e.strings,i=n.VAR_FG_SIZE,a=n.VAR_LEFT,o=n.VAR_TOP,s=n.VAR_FG_SCALE;this.adapter.updateCssVariable(i,this.initialSize+"px"),this.adapter.updateCssVariable(s,this.fgScale),this.adapter.isUnbounded()&&(this.unboundedCoords={left:Math.round(this.frame.width/2-this.initialSize/2),top:Math.round(this.frame.height/2-this.initialSize/2)},this.adapter.updateCssVariable(a,this.unboundedCoords.left+"px"),this.adapter.updateCssVariable(o,this.unboundedCoords.top+"px"))},e}(yn);/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var Ne={ICON_BUTTON_ON:"mdc-icon-button--on",ROOT:"mdc-icon-button"},me={ARIA_LABEL:"aria-label",ARIA_PRESSED:"aria-pressed",DATA_ARIA_LABEL_OFF:"data-aria-label-off",DATA_ARIA_LABEL_ON:"data-aria-label-on",CHANGE_EVENT:"MDCIconButtonToggle:change"};/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var oi=function(t){bn(e,t);function e(n){var i=t.call(this,ke(ke({},e.defaultAdapter),n))||this;return i.hasToggledAriaLabel=!1,i}return Object.defineProperty(e,"cssClasses",{get:function(){return Ne},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return me},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},hasClass:function(){return!1},notifyChange:function(){},removeClass:function(){},getAttr:function(){return null},setAttr:function(){}}},enumerable:!1,configurable:!0}),e.prototype.init=function(){var n=this.adapter.getAttr(me.DATA_ARIA_LABEL_ON),i=this.adapter.getAttr(me.DATA_ARIA_LABEL_OFF);if(n&&i){if(this.adapter.getAttr(me.ARIA_PRESSED)!==null)throw new Error("MDCIconButtonToggleFoundation: Button should not set `aria-pressed` if it has a toggled aria label.");this.hasToggledAriaLabel=!0}else this.adapter.setAttr(me.ARIA_PRESSED,String(this.isOn()))},e.prototype.handleClick=function(){this.toggle(),this.adapter.notifyChange({isOn:this.isOn()})},e.prototype.isOn=function(){return this.adapter.hasClass(Ne.ICON_BUTTON_ON)},e.prototype.toggle=function(n){if(n===void 0&&(n=!this.isOn()),n?this.adapter.addClass(Ne.ICON_BUTTON_ON):this.adapter.removeClass(Ne.ICON_BUTTON_ON),this.hasToggledAriaLabel){var i=n?this.adapter.getAttr(me.DATA_ARIA_LABEL_ON):this.adapter.getAttr(me.DATA_ARIA_LABEL_OFF);this.adapter.setAttr(me.ARIA_LABEL,i||"")}else this.adapter.setAttr(me.ARIA_PRESSED,""+n)},e}(yn);function at(t){return Object.entries(t).filter(([e,n])=>e!==""&&n).map(([e])=>e).join(" ")}function Ft(t,e,n,i={bubbles:!0},a=!1){if(typeof Event>"u")throw new Error("Event not defined.");if(!t)throw new Error("Tried to dipatch event without element.");const o=new CustomEvent(e,Object.assign(Object.assign({},i),{detail:n}));if(t==null||t.dispatchEvent(o),a&&e.startsWith("SMUI")){const s=new CustomEvent(e.replace(/^SMUI/g,()=>"MDC"),Object.assign(Object.assign({},i),{detail:n}));t==null||t.dispatchEvent(s),s.defaultPrevented&&o.preventDefault()}return o}const Ht=/^[a-z]+(?::(?:preventDefault|stopPropagation|passive|nonpassive|capture|once|self))+$/,li=/^[^$]+(?:\$(?:preventDefault|stopPropagation|passive|nonpassive|capture|once|self))+$/;function wn(t){let e,n=[];t.$on=(a,o)=>{let s=a,r=()=>{};return e?r=e(s,o):n.push([s,o]),s.match(Ht)&&console&&console.warn('Event modifiers in SMUI now use "$" instead of ":", so that all events can be bound with modifiers. Please update your event binding: ',s),()=>{r()}};function i(a){const o=t.$$.callbacks[a.type];o&&o.slice().forEach(s=>s.call(this,a))}return a=>{const o=[],s={};e=(r,l)=>{let c=r,f=l,u=!1;const z=c.match(Ht),I=c.match(li),v=z||I;if(c.match(/^SMUI:\w+:/)){const p=c.split(":");let w="";for(let k=0;k<p.length;k++)w+=k===p.length-1?":"+p[k]:p[k].split("-").map(S=>S.slice(0,1).toUpperCase()+S.slice(1)).join("");console.warn(`The event ${c.split("$")[0]} has been renamed to ${w.split("$")[0]}.`),c=w}if(v){const p=c.split(z?":":"$");c=p[0];const w=p.slice(1).reduce((k,S)=>(k[S]=!0,k),{});w.passive&&(u=u||{},u.passive=!0),w.nonpassive&&(u=u||{},u.passive=!1),w.capture&&(u=u||{},u.capture=!0),w.once&&(u=u||{},u.once=!0),w.preventDefault&&(f=ci(f)),w.stopPropagation&&(f=fi(f)),w.stopImmediatePropagation&&(f=ui(f)),w.self&&(f=di(a,f)),w.trusted&&(f=hi(f))}const E=Tt(a,c,f,u),_=()=>{E();const p=o.indexOf(_);p>-1&&o.splice(p,1)};return o.push(_),c in s||(s[c]=Tt(a,c,i)),_};for(let r=0;r<n.length;r++)e(n[r][0],n[r][1]);return{destroy:()=>{for(let r=0;r<o.length;r++)o[r]();for(let r of Object.entries(s))r[1]()}}}}function Tt(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function ci(t){return function(e){return e.preventDefault(),t.call(this,e)}}function fi(t){return function(e){return e.stopPropagation(),t.call(this,e)}}function ui(t){return function(e){return e.stopImmediatePropagation(),t.call(this,e)}}function di(t,e){return function(n){if(n.target===t)return e.call(this,n)}}function hi(t){return function(e){if(e.isTrusted)return t.call(this,e)}}function Ct(t,e){let n=[];if(e)for(let i=0;i<e.length;i++){const a=e[i],o=Array.isArray(a)?a[0]:a;Array.isArray(a)&&a.length>1?n.push(o(t,a[1])):n.push(o(t))}return{update(i){if((i&&i.length||0)!=n.length)throw new Error("You must not change the length of an actions array.");if(i)for(let a=0;a<i.length;a++){const o=n[a];if(o&&o.update){const s=i[a];Array.isArray(s)&&s.length>1?o.update(s[1]):o.update()}}},destroy(){for(let i=0;i<n.length;i++){const a=n[i];a&&a.destroy&&a.destroy()}}}}const{applyPassive:qe}=xn,{matches:mi}=ti;function rt(t,{ripple:e=!0,surface:n=!1,unbounded:i=!1,disabled:a=!1,color:o,active:s,rippleElement:r,eventTarget:l,activeTarget:c,addClass:f=v=>t.classList.add(v),removeClass:u=v=>t.classList.remove(v),addStyle:z=(v,E)=>t.style.setProperty(v,E),initPromise:I=Promise.resolve()}={}){let v,E=Je("SMUI:addLayoutListener"),_,p=s,w=l,k=c;function S(){n?(f("mdc-ripple-surface"),o==="primary"?(f("smui-ripple-surface--primary"),u("smui-ripple-surface--secondary")):o==="secondary"?(u("smui-ripple-surface--primary"),f("smui-ripple-surface--secondary")):(u("smui-ripple-surface--primary"),u("smui-ripple-surface--secondary"))):(u("mdc-ripple-surface"),u("smui-ripple-surface--primary"),u("smui-ripple-surface--secondary")),v&&p!==s&&(p=s,s?v.activate():s===!1&&v.deactivate()),e&&!v?(v=new si({addClass:f,browserSupportsCssVars:()=>ai(window),computeBoundingRect:()=>(r||t).getBoundingClientRect(),containsEventTarget:d=>t.contains(d),deregisterDocumentInteractionHandler:(d,b)=>document.documentElement.removeEventListener(d,b,qe()),deregisterInteractionHandler:(d,b)=>(l||t).removeEventListener(d,b,qe()),deregisterResizeHandler:d=>window.removeEventListener("resize",d),getWindowPageOffset:()=>({x:window.pageXOffset,y:window.pageYOffset}),isSurfaceActive:()=>s??mi(c||t,":active"),isSurfaceDisabled:()=>!!a,isUnbounded:()=>!!i,registerDocumentInteractionHandler:(d,b)=>document.documentElement.addEventListener(d,b,qe()),registerInteractionHandler:(d,b)=>(l||t).addEventListener(d,b,qe()),registerResizeHandler:d=>window.addEventListener("resize",d),removeClass:u,updateCssVariable:z}),I.then(()=>{v&&(v.init(),v.setUnbounded(i))})):v&&!e&&I.then(()=>{v&&(v.destroy(),v=void 0)}),v&&(w!==l||k!==c)&&(w=l,k=c,v.destroy(),requestAnimationFrame(()=>{v&&(v.init(),v.setUnbounded(i))})),!e&&i&&f("mdc-ripple-upgraded--unbounded")}S(),E&&(_=E(D));function D(){v&&v.layout()}return{update(d){({ripple:e,surface:n,unbounded:i,disabled:a,color:o,active:s,rippleElement:r,eventTarget:l,activeTarget:c,addClass:f,removeClass:u,addStyle:z,initPromise:I}=Object.assign({ripple:!0,surface:!1,unbounded:!1,disabled:!1,color:void 0,active:void 0,rippleElement:void 0,eventTarget:void 0,activeTarget:void 0,addClass:b=>t.classList.add(b),removeClass:b=>t.classList.remove(b),addStyle:(b,M)=>t.style.setProperty(b,M),initPromise:Promise.resolve()},d)),S()},destroy(){v&&(v.destroy(),v=void 0,u("mdc-ripple-surface"),u("smui-ripple-surface--primary"),u("smui-ripple-surface--secondary")),_&&_()}}}function gi(t){let e=t[1],n,i,a=t[1]&&st(t);return{c(){a&&a.c(),n=Z()},l(o){a&&a.l(o),n=Z()},m(o,s){a&&a.m(o,s),R(o,n,s),i=!0},p(o,s){o[1]?e?ne(e,o[1])?(a.d(1),a=st(o),e=o[1],a.c(),a.m(n.parentNode,n)):a.p(o,s):(a=st(o),e=o[1],a.c(),a.m(n.parentNode,n)):e&&(a.d(1),a=null,e=o[1])},i(o){i||(F(a,o),i=!0)},o(o){B(a,o),i=!1},d(o){o&&m(n),a&&a.d(o)}}}function pi(t){let e=t[1],n,i=t[1]&&ot(t);return{c(){i&&i.c(),n=Z()},l(a){i&&i.l(a),n=Z()},m(a,o){i&&i.m(a,o),R(a,n,o)},p(a,o){a[1]?e?ne(e,a[1])?(i.d(1),i=ot(a),e=a[1],i.c(),i.m(n.parentNode,n)):i.p(a,o):(i=ot(a),e=a[1],i.c(),i.m(n.parentNode,n)):e&&(i.d(1),i=null,e=a[1])},i:le,o:le,d(a){a&&m(n),i&&i.d(a)}}}function vi(t){let e,n,i,a,o;const s=t[8].default,r=bt(s,t,t[7],null);let l=[t[5]],c={};for(let f=0;f<l.length;f+=1)c=x(c,l[f]);return{c(){e=qn("svg"),r&&r.c(),this.h()},l(f){e=Wn(f,"svg",{});var u=O(e);r&&r.l(u),u.forEach(m),this.h()},h(){zt(e,c)},m(f,u){R(f,e,u),r&&r.m(e,null),t[9](e),i=!0,a||(o=[ze(n=Ct.call(null,e,t[0])),ze(t[4].call(null,e))],a=!0)},p(f,u){r&&r.p&&(!i||u&128)&&yt(r,s,f,f[7],i?wt(s,f[7],u,null):_t(f[7]),null),zt(e,c=Ae(l,[u&32&&f[5]])),n&&kt(n.update)&&u&1&&n.update.call(null,f[0])},i(f){i||(F(r,f),i=!0)},o(f){B(r,f),i=!1},d(f){f&&m(e),r&&r.d(f),t[9](null),a=!1,At(o)}}}function st(t){let e,n,i,a,o;const s=t[8].default,r=bt(s,t,t[7],null);let l=[t[5]],c={};for(let f=0;f<l.length;f+=1)c=x(c,l[f]);return{c(){e=A(t[1]),r&&r.c(),this.h()},l(f){e=C(f,(t[1]||"null").toUpperCase(),{});var u=O(e);r&&r.l(u),u.forEach(m),this.h()},h(){Ye(t[1])(e,c)},m(f,u){R(f,e,u),r&&r.m(e,null),t[11](e),i=!0,a||(o=[ze(n=Ct.call(null,e,t[0])),ze(t[4].call(null,e))],a=!0)},p(f,u){r&&r.p&&(!i||u&128)&&yt(r,s,f,f[7],i?wt(s,f[7],u,null):_t(f[7]),null),Ye(f[1])(e,c=Ae(l,[u&32&&f[5]])),n&&kt(n.update)&&u&1&&n.update.call(null,f[0])},i(f){i||(F(r,f),i=!0)},o(f){B(r,f),i=!1},d(f){f&&m(e),r&&r.d(f),t[11](null),a=!1,At(o)}}}function ot(t){let e,n,i,a,o=[t[5]],s={};for(let r=0;r<o.length;r+=1)s=x(s,o[r]);return{c(){e=A(t[1]),this.h()},l(r){e=C(r,(t[1]||"null").toUpperCase(),{}),O(e).forEach(m),this.h()},h(){Ye(t[1])(e,s)},m(r,l){R(r,e,l),t[10](e),i||(a=[ze(n=Ct.call(null,e,t[0])),ze(t[4].call(null,e))],i=!0)},p(r,l){Ye(r[1])(e,s=Ae(o,[l&32&&r[5]])),n&&kt(n.update)&&l&1&&n.update.call(null,r[0])},d(r){r&&m(e),t[10](null),i=!1,At(a)}}}function bi(t){let e,n,i,a;const o=[vi,pi,gi],s=[];function r(l,c){return l[1]==="svg"?0:l[3]?1:2}return e=r(t),n=s[e]=o[e](t),{c(){n.c(),i=Z()},l(l){n.l(l),i=Z()},m(l,c){s[e].m(l,c),R(l,i,c),a=!0},p(l,[c]){let f=e;e=r(l),e===f?s[e].p(l,c):(He(),B(s[f],1,1,()=>{s[f]=null}),Te(),n=s[e],n?n.p(l,c):(n=s[e]=o[e](l),n.c()),F(n,1),n.m(i.parentNode,i))},i(l){a||(F(n),a=!0)},o(l){B(n),a=!1},d(l){l&&m(i),s[e].d(l)}}}function yi(t,e,n){let i;const a=["use","tag","getElement"];let o=Qe(e,a),{$$slots:s={},$$scope:r}=e,{use:l=[]}=e,{tag:c}=e;const f=wn(pn());let u;function z(){return u}function I(_){Xe[_?"unshift":"push"](()=>{u=_,n(2,u)})}function v(_){Xe[_?"unshift":"push"](()=>{u=_,n(2,u)})}function E(_){Xe[_?"unshift":"push"](()=>{u=_,n(2,u)})}return t.$$set=_=>{e=x(x({},e),Ke(_)),n(5,o=Qe(e,a)),"use"in _&&n(0,l=_.use),"tag"in _&&n(1,c=_.tag),"$$scope"in _&&n(7,r=_.$$scope)},t.$$.update=()=>{t.$$.dirty&2&&n(3,i=["area","base","br","col","embed","hr","img","input","link","meta","param","source","track","wbr"].indexOf(c)>-1)},[l,c,u,i,f,o,z,r,s,I,v,E]}class Ut extends fe{constructor(e){super(),ue(this,e,yi,bi,ne,{use:0,tag:1,getElement:6})}get getElement(){return this.$$.ctx[6]}}function Bt(t){let e;return{c(){e=A("div"),this.h()},l(n){e=C(n,"DIV",{class:!0}),O(e).forEach(m),this.h()},h(){y(e,"class","mdc-icon-button__touch")},m(n,i){R(n,e,i)},d(n){n&&m(e)}}}function _i(t){let e,n,i,a;const o=t[33].default,s=bt(o,t,t[37],null);let r=t[8]&&Bt();return{c(){e=A("div"),n=T(),s&&s.c(),r&&r.c(),i=Z(),this.h()},l(l){e=C(l,"DIV",{class:!0}),O(e).forEach(m),n=U(l),s&&s.l(l),r&&r.l(l),i=Z(),this.h()},h(){y(e,"class","mdc-icon-button__ripple")},m(l,c){R(l,e,c),R(l,n,c),s&&s.m(l,c),r&&r.m(l,c),R(l,i,c),a=!0},p(l,c){s&&s.p&&(!a||c[1]&64)&&yt(s,o,l,l[37],a?wt(o,l[37],c,null):_t(l[37]),null),l[8]?r||(r=Bt(),r.c(),r.m(i.parentNode,i)):r&&(r.d(1),r=null)},i(l){a||(F(s,l),a=!0)},o(l){B(s,l),a=!1},d(l){l&&(m(e),m(n),m(i)),s&&s.d(l),r&&r.d(l)}}}function wi(t){let e,n,i;const a=[{tag:t[14]},{use:[[rt,{ripple:t[4],unbounded:!0,color:t[5],disabled:!!t[29].disabled,addClass:t[26],removeClass:t[27],addStyle:t[28]}],t[22],...t[1]]},{class:at({[t[2]]:!0,"mdc-icon-button":!0,"mdc-icon-button--on":!t[23](t[0])&&t[0],"mdc-icon-button--touch":t[8],"mdc-icon-button--display-flex":t[9],"smui-icon-button--size-button":t[10]==="button","smui-icon-button--size-mini":t[10]==="mini","mdc-icon-button--reduced-size":t[10]==="mini"||t[10]==="button","mdc-card__action":t[24]==="card:action","mdc-card__action--icon":t[24]==="card:action","mdc-top-app-bar__navigation-icon":t[24]==="top-app-bar:navigation","mdc-top-app-bar__action-item":t[24]==="top-app-bar:action","mdc-snackbar__dismiss":t[24]==="snackbar:actions","mdc-data-table__pagination-button":t[24]==="data-table:pagination","mdc-data-table__sort-icon-button":t[24]==="data-table:sortable-header-cell","mdc-dialog__close":(t[24]==="dialog:header"||t[24]==="dialog:sheet")&&t[12]==="close",...t[18]})},{style:Object.entries(t[19]).map(lt).concat([t[3]]).join(" ")},{"aria-pressed":t[23](t[0])?null:t[0]?"true":"false"},{"aria-label":t[0]?t[6]:t[7]},{"data-aria-label-on":t[6]},{"data-aria-label-off":t[7]},{"aria-describedby":t[25]},{href:t[11]},t[21],t[20],t[29]];var o=t[13];function s(r,l){let c={$$slots:{default:[_i]},$$scope:{ctx:r}};for(let f=0;f<a.length;f+=1)c=x(c,a[f]);return l!==void 0&&l[0]&1073504255&&(c=x(c,Ae(a,[l[0]&16384&&{tag:r[14]},l[0]&1010827314&&{use:[[rt,{ripple:r[4],unbounded:!0,color:r[5],disabled:!!r[29].disabled,addClass:r[26],removeClass:r[27],addStyle:r[28]}],r[22],...r[1]]},l[0]&25433861&&{class:at({[r[2]]:!0,"mdc-icon-button":!0,"mdc-icon-button--on":!r[23](r[0])&&r[0],"mdc-icon-button--touch":r[8],"mdc-icon-button--display-flex":r[9],"smui-icon-button--size-button":r[10]==="button","smui-icon-button--size-mini":r[10]==="mini","mdc-icon-button--reduced-size":r[10]==="mini"||r[10]==="button","mdc-card__action":r[24]==="card:action","mdc-card__action--icon":r[24]==="card:action","mdc-top-app-bar__navigation-icon":r[24]==="top-app-bar:navigation","mdc-top-app-bar__action-item":r[24]==="top-app-bar:action","mdc-snackbar__dismiss":r[24]==="snackbar:actions","mdc-data-table__pagination-button":r[24]==="data-table:pagination","mdc-data-table__sort-icon-button":r[24]==="data-table:sortable-header-cell","mdc-dialog__close":(r[24]==="dialog:header"||r[24]==="dialog:sheet")&&r[12]==="close",...r[18]})},l[0]&524296&&{style:Object.entries(r[19]).map(lt).concat([r[3]]).join(" ")},l[0]&8388609&&{"aria-pressed":r[23](r[0])?null:r[0]?"true":"false"},l[0]&193&&{"aria-label":r[0]?r[6]:r[7]},l[0]&64&&{"data-aria-label-on":r[6]},l[0]&128&&{"data-aria-label-off":r[7]},l[0]&33554432&&{"aria-describedby":r[25]},l[0]&2048&&{href:r[11]},l[0]&2097152&&be(r[21]),l[0]&1048576&&be(r[20]),l[0]&536870912&&be(r[29])]))),{props:c}}return o&&(e=Lt(o,s(t)),t[34](e),e.$on("click",t[35]),e.$on("click",t[36])),{c(){e&&J(e.$$.fragment),n=Z()},l(r){e&&$(e.$$.fragment,r),n=Z()},m(r,l){e&&Q(e,r,l),R(r,n,l),i=!0},p(r,l){if(l[0]&8192&&o!==(o=r[13])){if(e){He();const c=e;B(c.$$.fragment,1,0,()=>{K(c,1)}),Te()}o?(e=Lt(o,s(r,l)),r[34](e),e.$on("click",r[35]),e.$on("click",r[36]),J(e.$$.fragment),F(e.$$.fragment,1),Q(e,n.parentNode,n)):e=null}else if(o){const c=l[0]&1073504255?Ae(a,[l[0]&16384&&{tag:r[14]},l[0]&1010827314&&{use:[[rt,{ripple:r[4],unbounded:!0,color:r[5],disabled:!!r[29].disabled,addClass:r[26],removeClass:r[27],addStyle:r[28]}],r[22],...r[1]]},l[0]&25433861&&{class:at({[r[2]]:!0,"mdc-icon-button":!0,"mdc-icon-button--on":!r[23](r[0])&&r[0],"mdc-icon-button--touch":r[8],"mdc-icon-button--display-flex":r[9],"smui-icon-button--size-button":r[10]==="button","smui-icon-button--size-mini":r[10]==="mini","mdc-icon-button--reduced-size":r[10]==="mini"||r[10]==="button","mdc-card__action":r[24]==="card:action","mdc-card__action--icon":r[24]==="card:action","mdc-top-app-bar__navigation-icon":r[24]==="top-app-bar:navigation","mdc-top-app-bar__action-item":r[24]==="top-app-bar:action","mdc-snackbar__dismiss":r[24]==="snackbar:actions","mdc-data-table__pagination-button":r[24]==="data-table:pagination","mdc-data-table__sort-icon-button":r[24]==="data-table:sortable-header-cell","mdc-dialog__close":(r[24]==="dialog:header"||r[24]==="dialog:sheet")&&r[12]==="close",...r[18]})},l[0]&524296&&{style:Object.entries(r[19]).map(lt).concat([r[3]]).join(" ")},l[0]&8388609&&{"aria-pressed":r[23](r[0])?null:r[0]?"true":"false"},l[0]&193&&{"aria-label":r[0]?r[6]:r[7]},l[0]&64&&{"data-aria-label-on":r[6]},l[0]&128&&{"data-aria-label-off":r[7]},l[0]&33554432&&{"aria-describedby":r[25]},l[0]&2048&&{href:r[11]},l[0]&2097152&&be(r[21]),l[0]&1048576&&be(r[20]),l[0]&536870912&&be(r[29])]):{};l[0]&256|l[1]&64&&(c.$$scope={dirty:l,ctx:r}),e.$set(c)}},i(r){i||(e&&F(e.$$.fragment,r),i=!0)},o(r){e&&B(e.$$.fragment,r),i=!1},d(r){r&&m(n),t[34](null),e&&K(e,r)}}}const lt=([t,e])=>`${t}: ${e};`;function ki(t,e,n){let i;const a=["use","class","style","ripple","color","toggle","pressed","ariaLabelOn","ariaLabelOff","touch","displayFlex","size","href","action","component","tag","getElement"];let o=Qe(e,a),{$$slots:s={},$$scope:r}=e;const l=wn(pn());let c=()=>{};function f(h){return h===c}let{use:u=[]}=e,{class:z=""}=e,{style:I=""}=e,{ripple:v=!0}=e,{color:E=void 0}=e,{toggle:_=!1}=e,{pressed:p=c}=e,{ariaLabelOn:w=void 0}=e,{ariaLabelOff:k=void 0}=e,{touch:S=!1}=e,{displayFlex:D=!0}=e,{size:d="normal"}=e,{href:b=void 0}=e,{action:M=void 0}=e,L,j,H={},G={},re={},de=Je("SMUI:icon-button:context"),he=Je("SMUI:icon-button:aria-describedby"),{component:ye=Ut}=e,{tag:ie=ye===Ut?b==null?"button":"a":void 0}=e,_e=o.disabled;Vn("SMUI:icon:context","icon-button");let Ce=null;vn(()=>{j&&j.destroy()});function Re(h){return h in H?H[h]:V().classList.contains(h)}function Ie(h){H[h]||n(18,H[h]=!0,H)}function we(h){(!(h in H)||H[h])&&n(18,H[h]=!1,H)}function W(h,ae){G[h]!=ae&&(ae===""||ae==null?(delete G[h],n(19,G)):n(19,G[h]=ae,G))}function ve(h){var ae;return h in re?(ae=re[h])!==null&&ae!==void 0?ae:null:V().getAttribute(h)}function Ue(h,ae){re[h]!==ae&&n(20,re[h]=ae,re)}function se(h){n(0,p=h.isOn)}function V(){return L.getElement()}function Se(h){Xe[h?"unshift":"push"](()=>{L=h,n(16,L)})}const Ee=()=>j&&j.handleClick(),De=()=>de==="top-app-bar:navigation"&&Ft(V(),"SMUITopAppBarIconButton:nav");return t.$$set=h=>{e=x(x({},e),Ke(h)),n(29,o=Qe(e,a)),"use"in h&&n(1,u=h.use),"class"in h&&n(2,z=h.class),"style"in h&&n(3,I=h.style),"ripple"in h&&n(4,v=h.ripple),"color"in h&&n(5,E=h.color),"toggle"in h&&n(30,_=h.toggle),"pressed"in h&&n(0,p=h.pressed),"ariaLabelOn"in h&&n(6,w=h.ariaLabelOn),"ariaLabelOff"in h&&n(7,k=h.ariaLabelOff),"touch"in h&&n(8,S=h.touch),"displayFlex"in h&&n(9,D=h.displayFlex),"size"in h&&n(10,d=h.size),"href"in h&&n(11,b=h.href),"action"in h&&n(12,M=h.action),"component"in h&&n(13,ye=h.component),"tag"in h&&n(14,ie=h.tag),"$$scope"in h&&n(37,r=h.$$scope)},t.$$.update=()=>{if(t.$$.dirty[0]&4096&&n(21,i=(()=>{if(de==="data-table:pagination")switch(M){case"first-page":return{"data-first-page":"true"};case"prev-page":return{"data-prev-page":"true"};case"next-page":return{"data-next-page":"true"};case"last-page":return{"data-last-page":"true"};default:return{"data-action":"true"}}else return de==="dialog:header"||de==="dialog:sheet"?{"data-mdc-dialog-action":M}:{action:M}})()),_e!==o.disabled){if(L){const h=V();"blur"in h&&h.blur()}n(31,_e=o.disabled)}t.$$.dirty[0]&1073938432|t.$$.dirty[1]&2&&L&&V()&&_!==Ce&&(_&&!j?(n(17,j=new oi({addClass:Ie,hasClass:Re,notifyChange:h=>{se(h),Ft(V(),"SMUIIconButtonToggle:change",h,void 0,!0)},removeClass:we,getAttr:ve,setAttr:Ue})),j.init()):!_&&j&&(j.destroy(),n(17,j=void 0),n(18,H={}),n(20,re={})),n(32,Ce=_)),t.$$.dirty[0]&131073&&j&&!f(p)&&j.isOn()!==p&&j.toggle(p)},[p,u,z,I,v,E,w,k,S,D,d,b,M,ye,ie,V,L,j,H,G,re,i,l,f,de,he,Ie,we,W,o,_,_e,Ce,s,Se,Ee,De,r]}class Ai extends fe{constructor(e){super(),ue(this,e,ki,wi,ne,{use:1,class:2,style:3,ripple:4,color:5,toggle:30,pressed:0,ariaLabelOn:6,ariaLabelOff:7,touch:8,displayFlex:9,size:10,href:11,action:12,component:13,tag:14,getElement:15},null,[-1,-1])}get getElement(){return this.$$.ctx[15]}}function Ci(t){let e;return{c(){e=N(t[0])},l(n){e=q(n,t[0])},m(n,i){R(n,e,i)},p(n,i){i&1&&ce(e,n[0])},d(n){n&&m(e)}}}function Ii(t){let e,n;return e=new Ai({props:{class:"material-icons",$$slots:{default:[Ci]},$$scope:{ctx:t}}}),e.$on("click",t[3]),{c(){J(e.$$.fragment)},l(i){$(e.$$.fragment,i)},m(i,a){Q(e,i,a),n=!0},p(i,[a]){const o={};a&65&&(o.$$scope={dirty:a,ctx:i}),e.$set(o)},i(i){n||(F(e.$$.fragment,i),n=!0)},o(i){B(e.$$.fragment,i),n=!1},d(i){K(e,i)}}}function Si(t,e,n){let i;const a=Je("themes_service");let o;const s=c=>n(2,o=c);a.add_listener(s),vn(()=>{a.remove_listener(s)});const r={light:"dark_mode",dark:"light_mode"},l=()=>a.cycle();return t.$$.update=()=>{t.$$.dirty&4&&n(0,i=r[o.key])},[i,a,o,l]}class Ei extends fe{constructor(e){super(),ue(this,e,Si,Ii,ne,{})}}/*!
 * Font Awesome Free 5.15.4 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 */function Pe(t){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Pe=function(e){return typeof e}:Pe=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Pe(t)}function Di(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Mi(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function Oi(t,e,n){return e&&Mi(t.prototype,e),t}function zi(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function P(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{},i=Object.keys(n);typeof Object.getOwnPropertySymbols=="function"&&(i=i.concat(Object.getOwnPropertySymbols(n).filter(function(a){return Object.getOwnPropertyDescriptor(n,a).enumerable}))),i.forEach(function(a){zi(t,a,n[a])})}return t}function kn(t,e){return Li(t)||Ri(t,e)||ji()}function Li(t){if(Array.isArray(t))return t}function Ri(t,e){var n=[],i=!0,a=!1,o=void 0;try{for(var s=t[Symbol.iterator](),r;!(i=(r=s.next()).done)&&(n.push(r.value),!(e&&n.length===e));i=!0);}catch(l){a=!0,o=l}finally{try{!i&&s.return!=null&&s.return()}finally{if(a)throw o}}return n}function ji(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}var Gt=function(){},It={},An={},Pi=null,Cn={mark:Gt,measure:Gt};try{typeof window<"u"&&(It=window),typeof document<"u"&&(An=document),typeof MutationObserver<"u"&&(Pi=MutationObserver),typeof performance<"u"&&(Cn=performance)}catch{}var Fi=It.navigator||{},Vt=Fi.userAgent,Nt=Vt===void 0?"":Vt,nt=It,X=An,We=Cn;nt.document;var St=!!X.documentElement&&!!X.head&&typeof X.addEventListener=="function"&&typeof X.createElement=="function";~Nt.indexOf("MSIE")||~Nt.indexOf("Trident/");var ge="___FONT_AWESOME___",In="fa",Sn="svg-inline--fa",Hi="data-fa-i2svg";(function(){try{return!0}catch{return!1}})();var ct={GROUP:"group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},En=nt.FontAwesomeConfig||{};function Ti(t){var e=X.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function Ui(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(X&&typeof X.querySelector=="function"){var Bi=[["data-family-prefix","familyPrefix"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Bi.forEach(function(t){var e=kn(t,2),n=e[0],i=e[1],a=Ui(Ti(n));a!=null&&(En[i]=a)})}var Gi={familyPrefix:In,replacementClass:Sn,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0},ht=P({},Gi,En);ht.autoReplaceSvg||(ht.observeMutations=!1);var Y=P({},ht);nt.FontAwesomeConfig=Y;var pe=nt||{};pe[ge]||(pe[ge]={});pe[ge].styles||(pe[ge].styles={});pe[ge].hooks||(pe[ge].hooks={});pe[ge].shims||(pe[ge].shims=[]);var oe=pe[ge],Vi=[],Ni=function t(){X.removeEventListener("DOMContentLoaded",t),mt=1,Vi.map(function(e){return e()})},mt=!1;St&&(mt=(X.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(X.readyState),mt||X.addEventListener("DOMContentLoaded",Ni));var Et="pending",Dn="settled",xe="fulfilled",$e="rejected",qi=function(){},Mn=typeof global<"u"&&typeof global.process<"u"&&typeof global.process.emit=="function",Wi=typeof setImmediate>"u"?setTimeout:setImmediate,je=[],gt;function Xi(){for(var t=0;t<je.length;t++)je[t][0](je[t][1]);je=[],gt=!1}function et(t,e){je.push([t,e]),gt||(gt=!0,Wi(Xi,0))}function Zi(t,e){function n(a){Dt(e,a)}function i(a){Fe(e,a)}try{t(n,i)}catch(a){i(a)}}function On(t){var e=t.owner,n=e._state,i=e._data,a=t[n],o=t.then;if(typeof a=="function"){n=xe;try{i=a(i)}catch(s){Fe(o,s)}}zn(o,i)||(n===xe&&Dt(o,i),n===$e&&Fe(o,i))}function zn(t,e){var n;try{if(t===e)throw new TypeError("A promises callback cannot return that same promise.");if(e&&(typeof e=="function"||Pe(e)==="object")){var i=e.then;if(typeof i=="function")return i.call(e,function(a){n||(n=!0,e===a?Ln(t,a):Dt(t,a))},function(a){n||(n=!0,Fe(t,a))}),!0}}catch(a){return n||Fe(t,a),!0}return!1}function Dt(t,e){(t===e||!zn(t,e))&&Ln(t,e)}function Ln(t,e){t._state===Et&&(t._state=Dn,t._data=e,et(Ji,t))}function Fe(t,e){t._state===Et&&(t._state=Dn,t._data=e,et(Qi,t))}function Rn(t){t._then=t._then.forEach(On)}function Ji(t){t._state=xe,Rn(t)}function Qi(t){t._state=$e,Rn(t),!t._handled&&Mn&&global.process.emit("unhandledRejection",t._data,t)}function Ki(t){global.process.emit("rejectionHandled",t)}function ee(t){if(typeof t!="function")throw new TypeError("Promise resolver "+t+" is not a function");if(!(this instanceof ee))throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");this._then=[],Zi(t,this)}ee.prototype={constructor:ee,_state:Et,_then:null,_data:void 0,_handled:!1,then:function(e,n){var i={owner:this,then:new this.constructor(qi),fulfilled:e,rejected:n};return(n||e)&&!this._handled&&(this._handled=!0,this._state===$e&&Mn&&et(Ki,this)),this._state===xe||this._state===$e?et(On,i):this._then.push(i),i.then},catch:function(e){return this.then(null,e)}};ee.all=function(t){if(!Array.isArray(t))throw new TypeError("You must pass an array to Promise.all().");return new ee(function(e,n){var i=[],a=0;function o(l){return a++,function(c){i[l]=c,--a||e(i)}}for(var s=0,r;s<t.length;s++)r=t[s],r&&typeof r.then=="function"?r.then(o(s),n):i[s]=r;a||e(i)})};ee.race=function(t){if(!Array.isArray(t))throw new TypeError("You must pass an array to Promise.race().");return new ee(function(e,n){for(var i=0,a;i<t.length;i++)a=t[i],a&&typeof a.then=="function"?a.then(e,n):e(a)})};ee.resolve=function(t){return t&&Pe(t)==="object"&&t.constructor===ee?t:new ee(function(e){e(t)})};ee.reject=function(t){return new ee(function(e,n){n(t)})};var Oe={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Yi(t){if(!(!t||!St)){var e=X.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var n=X.head.childNodes,i=null,a=n.length-1;a>-1;a--){var o=n[a],s=(o.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(s)>-1&&(i=o)}return X.head.insertBefore(e,i),t}}var xi="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function tt(){for(var t=12,e="";t-- >0;)e+=xi[Math.random()*62|0];return e}function jn(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function $i(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,'="').concat(jn(t[n]),'" ')},"").trim()}function Pn(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,": ").concat(t[n],";")},"")}function Fn(t){return t.size!==Oe.size||t.x!==Oe.x||t.y!==Oe.y||t.rotate!==Oe.rotate||t.flipX||t.flipY}function Hn(t){var e=t.transform,n=t.containerWidth,i=t.iconWidth,a={transform:"translate(".concat(n/2," 256)")},o="translate(".concat(e.x*32,", ").concat(e.y*32,") "),s="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),r="rotate(".concat(e.rotate," 0 0)"),l={transform:"".concat(o," ").concat(s," ").concat(r)},c={transform:"translate(".concat(i/2*-1," -256)")};return{outer:a,inner:l,path:c}}var ft={x:0,y:0,width:"100%",height:"100%"};function qt(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function ea(t){return t.tag==="g"?t.children:[t]}function ta(t){var e=t.children,n=t.attributes,i=t.main,a=t.mask,o=t.maskId,s=t.transform,r=i.width,l=i.icon,c=a.width,f=a.icon,u=Hn({transform:s,containerWidth:c,iconWidth:r}),z={tag:"rect",attributes:P({},ft,{fill:"white"})},I=l.children?{children:l.children.map(qt)}:{},v={tag:"g",attributes:P({},u.inner),children:[qt(P({tag:l.tag,attributes:P({},l.attributes,u.path)},I))]},E={tag:"g",attributes:P({},u.outer),children:[v]},_="mask-".concat(o||tt()),p="clip-".concat(o||tt()),w={tag:"mask",attributes:P({},ft,{id:_,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[z,E]},k={tag:"defs",children:[{tag:"clipPath",attributes:{id:p},children:ea(f)},w]};return e.push(k,{tag:"rect",attributes:P({fill:"currentColor","clip-path":"url(#".concat(p,")"),mask:"url(#".concat(_,")")},ft)}),{children:e,attributes:n}}function na(t){var e=t.children,n=t.attributes,i=t.main,a=t.transform,o=t.styles,s=Pn(o);if(s.length>0&&(n.style=s),Fn(a)){var r=Hn({transform:a,containerWidth:i.width,iconWidth:i.width});e.push({tag:"g",attributes:P({},r.outer),children:[{tag:"g",attributes:P({},r.inner),children:[{tag:i.icon.tag,children:i.icon.children,attributes:P({},i.icon.attributes,r.path)}]}]})}else e.push(i.icon);return{children:e,attributes:n}}function ia(t){var e=t.children,n=t.main,i=t.mask,a=t.attributes,o=t.styles,s=t.transform;if(Fn(s)&&n.found&&!i.found){var r=n.width,l=n.height,c={x:r/l/2,y:.5};a.style=Pn(P({},o,{"transform-origin":"".concat(c.x+s.x/16,"em ").concat(c.y+s.y/16,"em")}))}return[{tag:"svg",attributes:a,children:e}]}function aa(t){var e=t.prefix,n=t.iconName,i=t.children,a=t.attributes,o=t.symbol,s=o===!0?"".concat(e,"-").concat(Y.familyPrefix,"-").concat(n):o;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:P({},a,{id:s}),children:i}]}]}function ra(t){var e=t.icons,n=e.main,i=e.mask,a=t.prefix,o=t.iconName,s=t.transform,r=t.symbol,l=t.title,c=t.maskId,f=t.titleId,u=t.extra,z=t.watchable,I=z===void 0?!1:z,v=i.found?i:n,E=v.width,_=v.height,p=a==="fak",w=p?"":"fa-w-".concat(Math.ceil(E/_*16)),k=[Y.replacementClass,o?"".concat(Y.familyPrefix,"-").concat(o):"",w].filter(function(j){return u.classes.indexOf(j)===-1}).filter(function(j){return j!==""||!!j}).concat(u.classes).join(" "),S={children:[],attributes:P({},u.attributes,{"data-prefix":a,"data-icon":o,class:k,role:u.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(E," ").concat(_)})},D=p&&!~u.classes.indexOf("fa-fw")?{width:"".concat(E/_*16*.0625,"em")}:{};I&&(S.attributes[Hi]=""),l&&S.children.push({tag:"title",attributes:{id:S.attributes["aria-labelledby"]||"title-".concat(f||tt())},children:[l]});var d=P({},S,{prefix:a,iconName:o,main:n,mask:i,maskId:c,transform:s,symbol:r,styles:P({},D,u.styles)}),b=i.found&&n.found?ta(d):na(d),M=b.children,L=b.attributes;return d.children=M,d.attributes=L,r?aa(d):ia(d)}var Wt=function(){};Y.measurePerformance&&We&&We.mark&&We.measure;var ut=function(e,n,i,a){var o=Object.keys(e),s=o.length,r=n,l,c,f;for(i===void 0?(l=1,f=e[o[0]]):(l=0,f=i);l<s;l++)c=o[l],f=r(f,e[c],c,e);return f};function Tn(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i=n.skipHooks,a=i===void 0?!1:i,o=Object.keys(e).reduce(function(s,r){var l=e[r],c=!!l.icon;return c?s[l.iconName]=l.icon:s[r]=l,s},{});typeof oe.hooks.addPack=="function"&&!a?oe.hooks.addPack(t,o):oe.styles[t]=P({},oe.styles[t]||{},o),t==="fas"&&Tn("fa",e)}var Xt=oe.styles,sa=oe.shims,Un=function(){var e=function(a){return ut(Xt,function(o,s,r){return o[r]=ut(s,a,{}),o},{})};e(function(i,a,o){return a[3]&&(i[a[3]]=o),i}),e(function(i,a,o){var s=a[2];return i[o]=o,s.forEach(function(r){i[r]=o}),i});var n="far"in Xt;ut(sa,function(i,a){var o=a[0],s=a[1],r=a[2];return s==="far"&&!n&&(s="fas"),i[o]={prefix:s,iconName:r},i},{})};Un();oe.styles;function Zt(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}function Bn(t){var e=t.tag,n=t.attributes,i=n===void 0?{}:n,a=t.children,o=a===void 0?[]:a;return typeof t=="string"?jn(t):"<".concat(e," ").concat($i(i),">").concat(o.map(Bn).join(""),"</").concat(e,">")}var oa=function(e){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e?e.toLowerCase().split(" ").reduce(function(i,a){var o=a.toLowerCase().split("-"),s=o[0],r=o.slice(1).join("-");if(s&&r==="h")return i.flipX=!0,i;if(s&&r==="v")return i.flipY=!0,i;if(r=parseFloat(r),isNaN(r))return i;switch(s){case"grow":i.size=i.size+r;break;case"shrink":i.size=i.size-r;break;case"left":i.x=i.x-r;break;case"right":i.x=i.x+r;break;case"up":i.y=i.y-r;break;case"down":i.y=i.y+r;break;case"rotate":i.rotate=i.rotate+r;break}return i},n):n};function pt(t){this.name="MissingIcon",this.message=t||"Icon unavailable",this.stack=new Error().stack}pt.prototype=Object.create(Error.prototype);pt.prototype.constructor=pt;var it={fill:"currentColor"},Gn={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};P({},it,{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"});var Mt=P({},Gn,{attributeName:"opacity"});P({},it,{cx:"256",cy:"364",r:"28"}),P({},Gn,{attributeName:"r",values:"28;14;28;28;14;28;"}),P({},Mt,{values:"1;0;1;1;0;1;"});P({},it,{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),P({},Mt,{values:"1;0;0;0;0;1;"});P({},it,{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),P({},Mt,{values:"0;0;1;1;0;0;"});oe.styles;function Jt(t){var e=t[0],n=t[1],i=t.slice(4),a=kn(i,1),o=a[0],s=null;return Array.isArray(o)?s={tag:"g",attributes:{class:"".concat(Y.familyPrefix,"-").concat(ct.GROUP)},children:[{tag:"path",attributes:{class:"".concat(Y.familyPrefix,"-").concat(ct.SECONDARY),fill:"currentColor",d:o[0]}},{tag:"path",attributes:{class:"".concat(Y.familyPrefix,"-").concat(ct.PRIMARY),fill:"currentColor",d:o[1]}}]}:s={tag:"path",attributes:{fill:"currentColor",d:o}},{found:!0,width:e,height:n,icon:s}}oe.styles;var la=`svg:not(:root).svg-inline--fa {
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
}`;function ca(){var t=In,e=Sn,n=Y.familyPrefix,i=Y.replacementClass,a=la;if(n!==t||i!==e){var o=new RegExp("\\.".concat(t,"\\-"),"g"),s=new RegExp("\\--".concat(t,"\\-"),"g"),r=new RegExp("\\.".concat(e),"g");a=a.replace(o,".".concat(n,"-")).replace(s,"--".concat(n,"-")).replace(r,".".concat(i))}return a}var fa=function(){function t(){Di(this,t),this.definitions={}}return Oi(t,[{key:"add",value:function(){for(var n=this,i=arguments.length,a=new Array(i),o=0;o<i;o++)a[o]=arguments[o];var s=a.reduce(this._pullDefinitions,{});Object.keys(s).forEach(function(r){n.definitions[r]=P({},n.definitions[r]||{},s[r]),Tn(r,s[r]),Un()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,i){var a=i.prefix&&i.iconName&&i.icon?{0:i}:i;return Object.keys(a).map(function(o){var s=a[o],r=s.prefix,l=s.iconName,c=s.icon;n[r]||(n[r]={}),n[r][l]=c}),n}}]),t}();function ua(){Y.autoAddCss&&!Qt&&(Yi(ca()),Qt=!0)}function da(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(i){return Bn(i)})}}),Object.defineProperty(t,"node",{get:function(){if(St){var i=X.createElement("div");return i.innerHTML=t.html,i.children}}}),t}function vt(t){var e=t.prefix,n=e===void 0?"fa":e,i=t.iconName;if(i)return Zt(ma.definitions,n,i)||Zt(oe.styles,n,i)}function ha(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=(e||{}).icon?e:vt(e||{}),a=n.mask;return a&&(a=(a||{}).icon?a:vt(a||{})),t(i,P({},n,{mask:a}))}}var ma=new fa,Qt=!1,ga={transform:function(e){return oa(e)}},pa=ha(function(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.transform,i=n===void 0?Oe:n,a=e.symbol,o=a===void 0?!1:a,s=e.mask,r=s===void 0?null:s,l=e.maskId,c=l===void 0?null:l,f=e.title,u=f===void 0?null:f,z=e.titleId,I=z===void 0?null:z,v=e.classes,E=v===void 0?[]:v,_=e.attributes,p=_===void 0?{}:_,w=e.styles,k=w===void 0?{}:w;if(t){var S=t.prefix,D=t.iconName,d=t.icon;return da(P({type:"icon"},t),function(){return ua(),Y.autoA11y&&(u?p["aria-labelledby"]="".concat(Y.replacementClass,"-title-").concat(I||tt()):(p["aria-hidden"]="true",p.focusable="false")),ra({icons:{main:Jt(d),mask:r?Jt(r.icon):{found:!1,width:null,height:null,icon:{}}},prefix:S,iconName:D,transform:P({},Oe,i),symbol:o,title:u,maskId:c,titleId:I,extra:{attributes:p,styles:k,classes:E}})})}});function Kt(t){if(t===null||typeof t=="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2){const[e,n]=t;return{prefix:e,iconName:n}}if(typeof t=="string")return{prefix:"fas",iconName:t}}function va(t){let e,n;return{c(){e=new Xn(!1),n=Z(),this.h()},l(i){e=Zn(i,!1),n=Z(),this.h()},h(){e.a=n},m(i,a){e.m(t[0],i,a),R(i,n,a)},p(i,[a]){a&1&&e.p(i[0])},i:le,o:le,d(i){i&&(m(n),e.d())}}}function ba(t,e,n){let i,a,{border:o=!1}=e,{fixedWidth:s=!1}=e,{flip:r=null}=e,{icon:l=null}=e,{mask:c=null}=e,{listItem:f=!1}=e,{pull:u=null}=e,{pulse:z=!1}=e,{rotation:I=null}=e,{swapOpacity:v=!1}=e,{size:E=null}=e,{spin:_=!1}=e,{transform:p={}}=e,{symbol:w=!1}=e,{title:k=null}=e,{inverse:S=!1}=e,D="";return Nn(()=>{const d=Kt(l);if(!d)return;const b=vt(d),M=pa(b||l,{symbol:w,title:k,styles:e.style?a:{},classes:[...Object.keys(i).map(L=>i[L]?L:null).filter(L=>!!L),(e.class||"").split(" ")],transform:{...typeof p=="string"?ga.transform(p):p},mask:Kt(c)});if(!M){console.warn("Could not find one or more icon(s)",b||l,c);return}n(0,D=M.html)}),t.$$set=d=>{n(19,e=x(x({},e),Ke(d))),"border"in d&&n(1,o=d.border),"fixedWidth"in d&&n(2,s=d.fixedWidth),"flip"in d&&n(3,r=d.flip),"icon"in d&&n(4,l=d.icon),"mask"in d&&n(5,c=d.mask),"listItem"in d&&n(6,f=d.listItem),"pull"in d&&n(7,u=d.pull),"pulse"in d&&n(8,z=d.pulse),"rotation"in d&&n(9,I=d.rotation),"swapOpacity"in d&&n(10,v=d.swapOpacity),"size"in d&&n(11,E=d.size),"spin"in d&&n(12,_=d.spin),"transform"in d&&n(13,p=d.transform),"symbol"in d&&n(14,w=d.symbol),"title"in d&&n(15,k=d.title),"inverse"in d&&n(16,S=d.inverse)},t.$$.update=()=>{t.$$.dirty&73678&&(i={"fa-spin":_,"fa-pulse":z,"fa-fw":s,"fa-border":o,"fa-li":f,"fa-inverse":S,"fa-flip-horizontal":["both","horizontal"].includes(r),"fa-flip-vertical":["both","vertical"].includes(r),[`fa-${E}`]:E!==null,[`fa-rotate-${I}`]:I!==null,[`fa-pull-${u}`]:u!==null,"fa-swap-opacity":v}),a=(e.style||"").split(";").filter(d=>!!d).map(d=>d.split(":").map(b=>b.trim())).reduce((d,b)=>{const[M,L]=b;return d[M]=L,d},{})},e=Ke(e),[D,o,s,r,l,c,f,u,z,I,v,E,_,p,w,k,S]}class Ze extends fe{constructor(e){super(),ue(this,e,ba,va,ne,{border:1,fixedWidth:2,flip:3,icon:4,mask:5,listItem:6,pull:7,pulse:8,rotation:9,swapOpacity:10,size:11,spin:12,transform:13,symbol:14,title:15,inverse:16})}}/*!
 * Font Awesome Free 5.15.4 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 */var ya={prefix:"fab",iconName:"github",icon:[496,512,[],"f09b","M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"]},_a={prefix:"fab",iconName:"linkedin",icon:[448,512,[],"f08c","M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"]};/*!
 * Font Awesome Free 5.15.4 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 */var wa={prefix:"fas",iconName:"envelope",icon:[512,512,[],"f0e0","M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"]},ka={prefix:"fas",iconName:"external-link-square-alt",icon:[448,512,[],"f360","M448 80v352c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48V80c0-26.51 21.49-48 48-48h352c26.51 0 48 21.49 48 48zm-88 16H248.029c-21.313 0-32.08 25.861-16.971 40.971l31.984 31.987L67.515 364.485c-4.686 4.686-4.686 12.284 0 16.971l31.029 31.029c4.687 4.686 12.285 4.686 16.971 0l195.526-195.526 31.988 31.991C358.058 263.977 384 253.425 384 231.979V120c0-13.255-10.745-24-24-24z"]};function Aa(t){let e,n,i,a,o="Conner Douglass",s,r,l,c,f,u,z,I,v,E,_,p,w,k,S,D,d;return u=new Ze({props:{icon:ya}}),v=new Ze({props:{icon:_a}}),p=new Ze({props:{icon:wa}}),D=new Ei({}),{c(){e=A("div"),n=A("div"),i=T(),a=A("h1"),a.textContent=o,s=T(),r=A("hr"),l=T(),c=A("div"),f=A("a"),J(u.$$.fragment),z=T(),I=A("a"),J(v.$$.fragment),E=T(),_=A("a"),J(p.$$.fragment),w=T(),k=A("hr"),S=T(),J(D.$$.fragment),this.h()},l(b){e=C(b,"DIV",{class:!0});var M=O(e);n=C(M,"DIV",{class:!0}),O(n).forEach(m),i=U(M),a=C(M,"H1",{class:!0,"data-svelte-h":!0}),Me(a)!=="svelte-18c63qf"&&(a.textContent=o),s=U(M),r=C(M,"HR",{class:!0}),l=U(M),c=C(M,"DIV",{class:!0});var L=O(c);f=C(L,"A",{class:!0,target:!0,href:!0});var j=O(f);$(u.$$.fragment,j),j.forEach(m),z=U(L),I=C(L,"A",{class:!0,target:!0,href:!0});var H=O(I);$(v.$$.fragment,H),H.forEach(m),E=U(L),_=C(L,"A",{class:!0,href:!0});var G=O(_);$(p.$$.fragment,G),G.forEach(m),L.forEach(m),w=U(M),k=C(M,"HR",{class:!0}),S=U(M),$(D.$$.fragment,M),M.forEach(m),this.h()},h(){y(n,"class","pic svelte-3paw8k"),y(a,"class","svelte-3paw8k"),y(r,"class","svelte-3paw8k"),y(f,"class","social-icon github svelte-3paw8k"),y(f,"target","_blank"),y(f,"href","https://github.com/connerdouglass"),y(I,"class","social-icon linkedin svelte-3paw8k"),y(I,"target","_blank"),y(I,"href","https://linkedin.com/in/connerdouglass"),y(_,"class","social-icon email svelte-3paw8k"),y(_,"href","mailto:conner.douglass@gmail.com"),y(c,"class","socials"),y(k,"class","svelte-3paw8k"),y(e,"class","profile-box svelte-3paw8k")},m(b,M){R(b,e,M),g(e,n),g(e,i),g(e,a),g(e,s),g(e,r),g(e,l),g(e,c),g(c,f),Q(u,f,null),g(c,z),g(c,I),Q(v,I,null),g(c,E),g(c,_),Q(p,_,null),g(e,w),g(e,k),g(e,S),Q(D,e,null),d=!0},p:le,i(b){d||(F(u.$$.fragment,b),F(v.$$.fragment,b),F(p.$$.fragment,b),F(D.$$.fragment,b),d=!0)},o(b){B(u.$$.fragment,b),B(v.$$.fragment,b),B(p.$$.fragment,b),B(D.$$.fragment,b),d=!1},d(b){b&&m(e),K(u),K(v),K(p),K(D)}}}class Ca extends fe{constructor(e){super(),ue(this,e,null,Aa,ne,{})}}const Ia=[{title:"Tanium",subtitle:"Software Engineer",period:"11/2021 –",url:"https://tanium.com",description:["I am currently a software engineer at Tanium doing full-stack work, with a focus on backend development."],images:[],tags:["golang","docker"]},{title:"Spire Delta",subtitle:"Founder, CTO",period:"08/2019 –",url:"https://spiretechnology.com",description:["Spire Delta is a full suite of workflow tools for television post-production teams. It is currently in use 24/7 by several of the world's largest reality TV productions.","Delta solves a major bottleneck for customers by leveraging our in-house video transcoding engine which, in the worst case, is 25x faster than the previous solution."],images:["/gallery/spiredelta/library.png","/gallery/spiredelta/dayview.png","/gallery/spiredelta/transcoding.png","/gallery/spiredelta/notes.png"],tags:["golang","typescript","c","ffmpeg","angular"]},{title:"CustomRealms",subtitle:"Founder",period:"2020 –",url:"https://github.com/customrealms",description:["CustomRealms is an open-source TypeScript framework for building Minecraft server plugins. It comes with a CLI to easily create and compile projects."],images:["/gallery/customrealms/ide.png","/gallery/customrealms/player.png","/gallery/customrealms/store.png"],tags:["java","typescript","angular"]},{title:"Google",subtitle:"Software Engineering Intern",period:"2017",url:void 0,description:["As an intern at Google, I contributed to a major update to the AdWords platform. My work spanned the whole stack: frontend, backend, and unit testing"],images:[],tags:["java","rpc","angular","dart","bazel"]},{title:"Apple",subtitle:"Software Engineering Intern",period:"2016",url:void 0,description:["I spent an extended 8-month internship at Apple building internal web applications for the AppleCare teams.","Among these projects, the largest two were a log aggregation system, which processed millions of logs, and an issue tracker which was used by multiple teams at the company."],images:[],tags:["php","mysql","javascript"]}];function Yt(t,e,n){const i=t.slice();return i[7]=e[n],i[9]=n,i}function xt(t,e,n){const i=t.slice();return i[10]=e[n],i}function $t(t,e,n){const i=t.slice();return i[13]=e[n],i}function Sa(t){let e;return{c(){e=N(t[0])},l(n){e=q(n,t[0])},m(n,i){R(n,e,i)},p(n,i){i&1&&ce(e,n[0])},i:le,o:le,d(n){n&&m(e)}}}function Ea(t){let e,n,i,a,o,s,r;return s=new Ze({props:{icon:ka}}),{c(){e=A("a"),n=A("span"),i=N(t[0]),a=T(),o=A("span"),J(s.$$.fragment),this.h()},l(l){e=C(l,"A",{target:!0,href:!0,class:!0});var c=O(e);n=C(c,"SPAN",{});var f=O(n);i=q(f,t[0]),f.forEach(m),a=U(c),o=C(c,"SPAN",{class:!0});var u=O(o);$(s.$$.fragment,u),u.forEach(m),c.forEach(m),this.h()},h(){y(o,"class","link svelte-i4t6wx"),y(e,"target","_blank"),y(e,"href",t[3]),y(e,"class","svelte-i4t6wx")},m(l,c){R(l,e,c),g(e,n),g(n,i),g(e,a),g(e,o),Q(s,o,null),r=!0},p(l,c){(!r||c&1)&&ce(i,l[0]),(!r||c&8)&&y(e,"href",l[3])},i(l){r||(F(s.$$.fragment,l),r=!0)},o(l){B(s.$$.fragment,l),r=!1},d(l){l&&m(e),K(s)}}}function en(t){let e,n;return{c(){e=A("div"),n=N(t[1]),this.h()},l(i){e=C(i,"DIV",{class:!0});var a=O(e);n=q(a,t[1]),a.forEach(m),this.h()},h(){y(e,"class","subtitle svelte-i4t6wx")},m(i,a){R(i,e,a),g(e,n)},p(i,a){a&2&&ce(n,i[1])},d(i){i&&m(e)}}}function tn(t){let e,n;return{c(){e=A("div"),n=N(t[2]),this.h()},l(i){e=C(i,"DIV",{class:!0});var a=O(e);n=q(a,t[2]),a.forEach(m),this.h()},h(){y(e,"class","right svelte-i4t6wx")},m(i,a){R(i,e,a),g(e,n)},p(i,a){a&4&&ce(n,i[2])},d(i){i&&m(e)}}}function nn(t){let e,n=te(t[5]),i=[];for(let a=0;a<n.length;a+=1)i[a]=an($t(t,n,a));return{c(){e=A("div");for(let a=0;a<i.length;a+=1)i[a].c();this.h()},l(a){e=C(a,"DIV",{class:!0});var o=O(e);for(let s=0;s<i.length;s+=1)i[s].l(o);o.forEach(m),this.h()},h(){y(e,"class","description svelte-i4t6wx")},m(a,o){R(a,e,o);for(let s=0;s<i.length;s+=1)i[s]&&i[s].m(e,null)},p(a,o){if(o&32){n=te(a[5]);let s;for(s=0;s<n.length;s+=1){const r=$t(a,n,s);i[s]?i[s].p(r,o):(i[s]=an(r),i[s].c(),i[s].m(e,null))}for(;s<i.length;s+=1)i[s].d(1);i.length=n.length}},d(a){a&&m(e),Le(i,a)}}}function an(t){let e,n=t[13]+"",i;return{c(){e=A("p"),i=N(n),this.h()},l(a){e=C(a,"P",{class:!0});var o=O(e);i=q(o,n),o.forEach(m),this.h()},h(){y(e,"class","svelte-i4t6wx")},m(a,o){R(a,e,o),g(e,i)},p(a,o){o&32&&n!==(n=a[13]+"")&&ce(i,n)},d(a){a&&m(e)}}}function rn(t){let e,n=te(t[6]),i=[];for(let a=0;a<n.length;a+=1)i[a]=sn(xt(t,n,a));return{c(){e=A("div");for(let a=0;a<i.length;a+=1)i[a].c();this.h()},l(a){e=C(a,"DIV",{class:!0});var o=O(e);for(let s=0;s<i.length;s+=1)i[s].l(o);o.forEach(m),this.h()},h(){y(e,"class","tags svelte-i4t6wx")},m(a,o){R(a,e,o);for(let s=0;s<i.length;s+=1)i[s]&&i[s].m(e,null)},p(a,o){if(o&64){n=te(a[6]);let s;for(s=0;s<n.length;s+=1){const r=xt(a,n,s);i[s]?i[s].p(r,o):(i[s]=sn(r),i[s].c(),i[s].m(e,null))}for(;s<i.length;s+=1)i[s].d(1);i.length=n.length}},d(a){a&&m(e),Le(i,a)}}}function sn(t){let e,n=t[10]+"",i;return{c(){e=A("div"),i=N(n),this.h()},l(a){e=C(a,"DIV",{class:!0});var o=O(e);i=q(o,n),o.forEach(m),this.h()},h(){y(e,"class","tag svelte-i4t6wx")},m(a,o){R(a,e,o),g(e,i)},p(a,o){o&64&&n!==(n=a[10]+"")&&ce(i,n)},d(a){a&&m(e)}}}function on(t){let e,n=te(t[4]),i=[];for(let a=0;a<n.length;a+=1)i[a]=ln(Yt(t,n,a));return{c(){e=A("div");for(let a=0;a<i.length;a+=1)i[a].c();this.h()},l(a){e=C(a,"DIV",{class:!0});var o=O(e);for(let s=0;s<i.length;s+=1)i[s].l(o);o.forEach(m),this.h()},h(){y(e,"class","gallery svelte-i4t6wx")},m(a,o){R(a,e,o);for(let s=0;s<i.length;s+=1)i[s]&&i[s].m(e,null)},p(a,o){if(o&17){n=te(a[4]);let s;for(s=0;s<n.length;s+=1){const r=Yt(a,n,s);i[s]?i[s].p(r,o):(i[s]=ln(r),i[s].c(),i[s].m(e,null))}for(;s<i.length;s+=1)i[s].d(1);i.length=n.length}},d(a){a&&m(e),Le(i,a)}}}function ln(t){let e,n,i;return{c(){e=A("img"),this.h()},l(a){e=C(a,"IMG",{src:!0,alt:!0,class:!0}),this.h()},h(){Ot(e.src,n=t[7])||y(e,"src",n),y(e,"alt",i=`${t[0]} gallery image #${t[9]+1}`),y(e,"class","svelte-i4t6wx")},m(a,o){R(a,e,o)},p(a,o){o&16&&!Ot(e.src,n=a[7])&&y(e,"src",n),o&1&&i!==(i=`${a[0]} gallery image #${a[9]+1}`)&&y(e,"alt",i)},d(a){a&&m(e)}}}function Da(t){let e,n,i,a,o,s,r,l,c,f,u,z,I;const v=[Ea,Sa],E=[];function _(d,b){return d[3]?0:1}s=_(t),r=E[s]=v[s](t);let p=t[1]&&en(t),w=t[2]&&tn(t),k=t[5].length>0&&nn(t),S=t[6].length>0&&rn(t),D=t[4].length>0&&on(t);return{c(){e=A("div"),n=A("div"),i=A("div"),a=A("div"),o=A("div"),r.c(),l=T(),p&&p.c(),c=T(),w&&w.c(),f=T(),k&&k.c(),u=T(),S&&S.c(),z=T(),D&&D.c(),this.h()},l(d){e=C(d,"DIV",{class:!0});var b=O(e);n=C(b,"DIV",{class:!0});var M=O(n);i=C(M,"DIV",{class:!0});var L=O(i);a=C(L,"DIV",{class:!0});var j=O(a);o=C(j,"DIV",{class:!0});var H=O(o);r.l(H),H.forEach(m),l=U(j),p&&p.l(j),j.forEach(m),c=U(L),w&&w.l(L),L.forEach(m),f=U(M),k&&k.l(M),u=U(M),S&&S.l(M),M.forEach(m),z=U(b),D&&D.l(b),b.forEach(m),this.h()},h(){y(o,"class","title svelte-i4t6wx"),y(a,"class","left svelte-i4t6wx"),y(i,"class","meta-row svelte-i4t6wx"),y(n,"class","top svelte-i4t6wx"),y(e,"class","project svelte-i4t6wx")},m(d,b){R(d,e,b),g(e,n),g(n,i),g(i,a),g(a,o),E[s].m(o,null),g(a,l),p&&p.m(a,null),g(i,c),w&&w.m(i,null),g(n,f),k&&k.m(n,null),g(n,u),S&&S.m(n,null),g(e,z),D&&D.m(e,null),I=!0},p(d,[b]){let M=s;s=_(d),s===M?E[s].p(d,b):(He(),B(E[M],1,1,()=>{E[M]=null}),Te(),r=E[s],r?r.p(d,b):(r=E[s]=v[s](d),r.c()),F(r,1),r.m(o,null)),d[1]?p?p.p(d,b):(p=en(d),p.c(),p.m(a,null)):p&&(p.d(1),p=null),d[2]?w?w.p(d,b):(w=tn(d),w.c(),w.m(i,null)):w&&(w.d(1),w=null),d[5].length>0?k?k.p(d,b):(k=nn(d),k.c(),k.m(n,u)):k&&(k.d(1),k=null),d[6].length>0?S?S.p(d,b):(S=rn(d),S.c(),S.m(n,null)):S&&(S.d(1),S=null),d[4].length>0?D?D.p(d,b):(D=on(d),D.c(),D.m(e,null)):D&&(D.d(1),D=null)},i(d){I||(F(r),I=!0)},o(d){B(r),I=!1},d(d){d&&m(e),E[s].d(),p&&p.d(),w&&w.d(),k&&k.d(),S&&S.d(),D&&D.d()}}}function Ma(t,e,n){let{title:i}=e,{subtitle:a}=e,{period:o}=e,{url:s}=e,{images:r}=e,{description:l}=e,{tags:c}=e;return t.$$set=f=>{"title"in f&&n(0,i=f.title),"subtitle"in f&&n(1,a=f.subtitle),"period"in f&&n(2,o=f.period),"url"in f&&n(3,s=f.url),"images"in f&&n(4,r=f.images),"description"in f&&n(5,l=f.description),"tags"in f&&n(6,c=f.tags)},[i,a,o,s,r,l,c]}class Oa extends fe{constructor(e){super(),ue(this,e,Ma,Da,ne,{title:0,subtitle:1,period:2,url:3,images:4,description:5,tags:6})}}function cn(t,e,n){const i=t.slice();return i[1]=e[n],i}function fn(t){let e,n;const i=[t[1]];let a={};for(let o=0;o<i.length;o+=1)a=x(a,i[o]);return e=new Oa({props:a}),{c(){J(e.$$.fragment)},l(o){$(e.$$.fragment,o)},m(o,s){Q(e,o,s),n=!0},p(o,s){const r=s&1?Ae(i,[be(o[1])]):{};e.$set(r)},i(o){n||(F(e.$$.fragment,o),n=!0)},o(o){B(e.$$.fragment,o),n=!1},d(o){K(e,o)}}}function za(t){let e,n,i=te(t[0]),a=[];for(let s=0;s<i.length;s+=1)a[s]=fn(cn(t,i,s));const o=s=>B(a[s],1,1,()=>{a[s]=null});return{c(){for(let s=0;s<a.length;s+=1)a[s].c();e=Z()},l(s){for(let r=0;r<a.length;r+=1)a[r].l(s);e=Z()},m(s,r){for(let l=0;l<a.length;l+=1)a[l]&&a[l].m(s,r);R(s,e,r),n=!0},p(s,[r]){if(r&1){i=te(s[0]);let l;for(l=0;l<i.length;l+=1){const c=cn(s,i,l);a[l]?(a[l].p(c,r),F(a[l],1)):(a[l]=fn(c),a[l].c(),F(a[l],1),a[l].m(e.parentNode,e))}for(He(),l=i.length;l<a.length;l+=1)o(l);Te()}},i(s){if(!n){for(let r=0;r<i.length;r+=1)F(a[r]);n=!0}},o(s){a=a.filter(Boolean);for(let r=0;r<a.length;r+=1)B(a[r]);n=!1},d(s){s&&m(e),Le(a,s)}}}function La(t,e,n){let{projects:i}=e;return t.$$set=a=>{"projects"in a&&n(0,i=a.projects)},[i]}class Ra extends fe{constructor(e){super(),ue(this,e,La,za,ne,{projects:0})}}const ja=[{title:"spireav",url:"https://github.com/spiretechnology/spireav",description:"Graph-based video transcoding library",tags:["golang","ffmpeg"]},{title:"go-timecode",url:"https://github.com/spiretechnology/go-timecode",description:"SMPTE timecode parsing and calculation library in Go",tags:["golang"]},{title:"go-retry",url:"https://github.com/connerdouglass/go-retry",description:"Go library for automatic retries with exponential, randomized backoff",tags:["golang"]},{title:"go-pool",url:"https://github.com/spiretechnology/go-pool",description:"Priority worker pools library in Go",tags:["golang","workers"]},{title:"go-geo",url:"https://github.com/connerdouglass/go-geo",description:"Geolocation and distance calculation library in Go",tags:["golang","geolocation"]},{title:"go-jwt",url:"https://github.com/spiretechnology/go-jwt",description:"JSON Web Token library in Go",tags:["golang"]},{title:"go-webauthn",url:"https://github.com/spiretechnology/go-webauthn",description:"WebAuthn server authentication library",tags:["golang"]},{title:"go-watchdir",url:"https://github.com/spiretechnology/go-watchdir",description:"Library for monitoring changes to files in a directory",tags:["golang"]}];function un(t,e,n){const i=t.slice();return i[4]=e[n],i}function dn(t){let e,n=te(t[3]),i=[];for(let a=0;a<n.length;a+=1)i[a]=hn(un(t,n,a));return{c(){e=A("div");for(let a=0;a<i.length;a+=1)i[a].c();this.h()},l(a){e=C(a,"DIV",{class:!0});var o=O(e);for(let s=0;s<i.length;s+=1)i[s].l(o);o.forEach(m),this.h()},h(){y(e,"class","tags svelte-utu3wo")},m(a,o){R(a,e,o);for(let s=0;s<i.length;s+=1)i[s]&&i[s].m(e,null)},p(a,o){if(o&8){n=te(a[3]);let s;for(s=0;s<n.length;s+=1){const r=un(a,n,s);i[s]?i[s].p(r,o):(i[s]=hn(r),i[s].c(),i[s].m(e,null))}for(;s<i.length;s+=1)i[s].d(1);i.length=n.length}},d(a){a&&m(e),Le(i,a)}}}function hn(t){let e,n=t[4]+"",i;return{c(){e=A("div"),i=N(n),this.h()},l(a){e=C(a,"DIV",{class:!0});var o=O(e);i=q(o,n),o.forEach(m),this.h()},h(){y(e,"class","tag svelte-utu3wo")},m(a,o){R(a,e,o),g(e,i)},p(a,o){o&8&&n!==(n=a[4]+"")&&ce(i,n)},d(a){a&&m(e)}}}function Pa(t){let e,n,i,a,o,s=(t[2]??"")+"",r,l,c=t[3].length>0&&dn(t);return{c(){e=A("a"),n=A("div"),i=N(t[0]),a=T(),o=A("div"),r=N(s),l=T(),c&&c.c(),this.h()},l(f){e=C(f,"A",{class:!0,href:!0,target:!0});var u=O(e);n=C(u,"DIV",{class:!0});var z=O(n);i=q(z,t[0]),z.forEach(m),a=U(u),o=C(u,"DIV",{class:!0});var I=O(o);r=q(I,s),I.forEach(m),l=U(u),c&&c.l(u),u.forEach(m),this.h()},h(){y(n,"class","title svelte-utu3wo"),y(o,"class","description svelte-utu3wo"),y(e,"class","repo svelte-utu3wo"),y(e,"href",t[1]),y(e,"target","_blank")},m(f,u){R(f,e,u),g(e,n),g(n,i),g(e,a),g(e,o),g(o,r),g(e,l),c&&c.m(e,null)},p(f,[u]){u&1&&ce(i,f[0]),u&4&&s!==(s=(f[2]??"")+"")&&ce(r,s),f[3].length>0?c?c.p(f,u):(c=dn(f),c.c(),c.m(e,null)):c&&(c.d(1),c=null),u&2&&y(e,"href",f[1])},i:le,o:le,d(f){f&&m(e),c&&c.d()}}}function Fa(t,e,n){let{title:i}=e,{url:a}=e,{description:o}=e,{tags:s}=e;return t.$$set=r=>{"title"in r&&n(0,i=r.title),"url"in r&&n(1,a=r.url),"description"in r&&n(2,o=r.description),"tags"in r&&n(3,s=r.tags)},[i,a,o,s]}class Ha extends fe{constructor(e){super(),ue(this,e,Fa,Pa,ne,{title:0,url:1,description:2,tags:3})}}function mn(t,e,n){const i=t.slice();return i[1]=e[n],i}function gn(t){let e,n,i,a;const o=[t[1]];let s={};for(let r=0;r<o.length;r+=1)s=x(s,o[r]);return n=new Ha({props:s}),{c(){e=A("div"),J(n.$$.fragment),i=T(),this.h()},l(r){e=C(r,"DIV",{class:!0});var l=O(e);$(n.$$.fragment,l),i=U(l),l.forEach(m),this.h()},h(){y(e,"class","repo svelte-cykcxo")},m(r,l){R(r,e,l),Q(n,e,null),g(e,i),a=!0},p(r,l){const c=l&1?Ae(o,[be(r[1])]):{};n.$set(c)},i(r){a||(F(n.$$.fragment,r),a=!0)},o(r){B(n.$$.fragment,r),a=!1},d(r){r&&m(e),K(n)}}}function Ta(t){let e,n,i=te(t[0]),a=[];for(let s=0;s<i.length;s+=1)a[s]=gn(mn(t,i,s));const o=s=>B(a[s],1,1,()=>{a[s]=null});return{c(){e=A("div");for(let s=0;s<a.length;s+=1)a[s].c();this.h()},l(s){e=C(s,"DIV",{class:!0});var r=O(e);for(let l=0;l<a.length;l+=1)a[l].l(r);r.forEach(m),this.h()},h(){y(e,"class","repos-list svelte-cykcxo")},m(s,r){R(s,e,r);for(let l=0;l<a.length;l+=1)a[l]&&a[l].m(e,null);n=!0},p(s,[r]){if(r&1){i=te(s[0]);let l;for(l=0;l<i.length;l+=1){const c=mn(s,i,l);a[l]?(a[l].p(c,r),F(a[l],1)):(a[l]=gn(c),a[l].c(),F(a[l],1),a[l].m(e,null))}for(He(),l=i.length;l<a.length;l+=1)o(l);Te()}},i(s){if(!n){for(let r=0;r<i.length;r+=1)F(a[r]);n=!0}},o(s){a=a.filter(Boolean);for(let r=0;r<a.length;r+=1)B(a[r]);n=!1},d(s){s&&m(e),Le(a,s)}}}function Ua(t,e,n){let{repos:i}=e;return t.$$set=a=>{"repos"in a&&n(0,i=a.repos)},[i]}class Ba extends fe{constructor(e){super(),ue(this,e,Ua,Ta,ne,{repos:0})}}function Ga(t){let e,n,i,a,o,s,r,l="About",c,f,u,z,I,v,E,_='I am a backend software engineer at <a href="https://tanium.com" target="_blank">Tanium</a>, building cloud web services.',p,w,k='I&#39;m also the co-founder and CTO of <a href="https://spiretechnology.com" target="_blank">Spire Technology</a>, where we build a video transcoding and streaming platform used by many of the biggest television shows.',S,D,d,b="Work & Projects",M,L,j,H,G,re="Open Source",de,he,ye,ie,_e,Ce=new Date().getFullYear()+"",Re,Ie,we;return i=new Ca({}),L=new Ra({props:{projects:Ia}}),he=new Ba({props:{repos:ja}}),{c(){e=A("div"),n=A("div"),J(i.$$.fragment),a=T(),o=A("div"),s=A("div"),r=A("h3"),r.textContent=l,c=T(),f=A("p"),u=N("My name is Conner. I'm a systems engineer and full-stack software engineer, mostly doing work in Go, TypeScript, and C. I've been building software for "),z=N(t[0]),I=N(" years."),v=T(),E=A("p"),E.innerHTML=_,p=T(),w=A("p"),w.innerHTML=k,S=T(),D=A("div"),d=A("h3"),d.textContent=b,M=T(),J(L.$$.fragment),j=T(),H=A("div"),G=A("h3"),G.textContent=re,de=T(),J(he.$$.fragment),ye=T(),ie=A("div"),_e=N("© "),Re=N(Ce),Ie=N(" Conner Douglass"),this.h()},l(W){e=C(W,"DIV",{class:!0});var ve=O(e);n=C(ve,"DIV",{class:!0});var Ue=O(n);$(i.$$.fragment,Ue),Ue.forEach(m),a=U(ve),o=C(ve,"DIV",{class:!0});var se=O(o);s=C(se,"DIV",{class:!0});var V=O(s);r=C(V,"H3",{class:!0,"data-svelte-h":!0}),Me(r)!=="svelte-14qvxnh"&&(r.textContent=l),c=U(V),f=C(V,"P",{class:!0});var Se=O(f);u=q(Se,"My name is Conner. I'm a systems engineer and full-stack software engineer, mostly doing work in Go, TypeScript, and C. I've been building software for "),z=q(Se,t[0]),I=q(Se," years."),Se.forEach(m),v=U(V),E=C(V,"P",{class:!0,"data-svelte-h":!0}),Me(E)!=="svelte-jtasae"&&(E.innerHTML=_),p=U(V),w=C(V,"P",{class:!0,"data-svelte-h":!0}),Me(w)!=="svelte-10xdsm2"&&(w.innerHTML=k),V.forEach(m),S=U(se),D=C(se,"DIV",{class:!0});var Ee=O(D);d=C(Ee,"H3",{class:!0,"data-svelte-h":!0}),Me(d)!=="svelte-j9xs0"&&(d.textContent=b),M=U(Ee),$(L.$$.fragment,Ee),Ee.forEach(m),j=U(se),H=C(se,"DIV",{class:!0});var De=O(H);G=C(De,"H3",{class:!0,"data-svelte-h":!0}),Me(G)!=="svelte-lykb3x"&&(G.textContent=re),de=U(De),$(he.$$.fragment,De),De.forEach(m),ye=U(se),ie=C(se,"DIV",{class:!0});var h=O(ie);_e=q(h,"© "),Re=q(h,Ce),Ie=q(h," Conner Douglass"),h.forEach(m),se.forEach(m),ve.forEach(m),this.h()},h(){y(n,"class","left svelte-2jheq6"),y(r,"class","svelte-2jheq6"),y(f,"class","svelte-2jheq6"),y(E,"class","svelte-2jheq6"),y(w,"class","svelte-2jheq6"),y(s,"class","section svelte-2jheq6"),y(d,"class","svelte-2jheq6"),y(D,"class","section svelte-2jheq6"),y(G,"class","svelte-2jheq6"),y(H,"class","section svelte-2jheq6"),y(ie,"class","copyright svelte-2jheq6"),y(o,"class","right svelte-2jheq6"),y(e,"class","app svelte-2jheq6")},m(W,ve){R(W,e,ve),g(e,n),Q(i,n,null),g(e,a),g(e,o),g(o,s),g(s,r),g(s,c),g(s,f),g(f,u),g(f,z),g(f,I),g(s,v),g(s,E),g(s,p),g(s,w),g(o,S),g(o,D),g(D,d),g(D,M),Q(L,D,null),g(o,j),g(o,H),g(H,G),g(H,de),Q(he,H,null),g(o,ye),g(o,ie),g(ie,_e),g(ie,Re),g(ie,Ie),we=!0},p:le,i(W){we||(F(i.$$.fragment,W),F(L.$$.fragment,W),F(he.$$.fragment,W),we=!0)},o(W){B(i.$$.fragment,W),B(L.$$.fragment,W),B(he.$$.fragment,W),we=!1},d(W){W&&m(e),K(i),K(L),K(he)}}}const Va=9;function Na(t){const e=1996+Va;return[new Date().getFullYear()-e]}class Za extends fe{constructor(e){super(),ue(this,e,Na,Ga,ne,{})}}export{Za as component,Xa as universal};
