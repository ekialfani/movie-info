(()=>{"use strict";var t={800:(t,n,e)=>{e.d(n,{Z:()=>u});var o=e(81),r=e.n(o),i=e(645),c=e.n(i)()(r());c.push([t.id,"app-logo h1 {\n\tcolor: white;\n}",""]);const u=c},429:(t,n,e)=>{e.d(n,{Z:()=>u});var o=e(81),r=e.n(o),i=e(645),c=e.n(i)()(r());c.push([t.id,".jumbotron {\n\tdisplay: flex;\n\tjustify-content: flex-end;\n\talign-items: center;\n}\n.hero {\n\tposition: absolute;\n\ttop: 0;\n\tleft: 0;\n\tright: 0;\n\tbottom: 0;\n\tz-index: -1;\n}\n\n.hero::after {\n\tcontent: '';\n\tposition: absolute;\n\ttop: 0;\n\tleft: 0;\n\tright: 0;\n\tbottom: 0;\n\tbackground: linear-gradient(to top, #111, rgba(0,0,0,0.5), #111);\n}\n\n.hero img {\n\twidth: 100%;\n\theight: 100%;\n\tobject-fit: cover;\n}\n\n.movie-info {\n\twidth: 60%;\n\theight: max-content;\n\t/*border: 1px solid white;*/\n\tpadding: 0 50px;\n\tcolor: white;\n\tmargin-top: 60px;\n}\n\n.title {\n\tfont-family: 'Audiowide', cursive;\n\tfont-size: 3.3em;\n}\n\n.genre {\n\tcolor: #0d9488;\n\tfont-weight: bold;\n}\n\n.description {\n\tcolor: #777;\n}\n\n.detail-button {\n\tpadding: 12px 20px;\n\tborder-radius: 50px;\n\tborder: none;\n\tfont-weight: bold;\n\tfont-size: 0.9em;\n\tmargin-top: 20px;\n\tbackground-color: #0d9488;\n\tcolor: white;\n}\n\n.detail-button:hover {\n\tbackground-color: #0f766e;\n\tcursor: pointer;\n}\n\n.detail-button:active {\n\tbackground-color: #0d9488;\n}\n",""]);const u=c},60:(t,n,e)=>{e.d(n,{Z:()=>u});var o=e(81),r=e.n(o),i=e(645),c=e.n(i)()(r());c.push([t.id,"menu-list ul {\n\tdisplay: flex;\n\tlist-style: none;\n}\n\nmenu-list a {\n\tfont-weight: medium;\n\tmargin-right: 40px;\n\ttext-decoration: none;\n\tcolor: #6B7280;\n}\n\nmenu-list a:hover {\n\tcolor: #4ADE80;\n}\n",""]);const u=c},251:(t,n,e)=>{e.d(n,{Z:()=>u});var o=e(81),r=e.n(o),i=e(645),c=e.n(i)()(r());c.push([t.id,".search-input {\n\tfont-size: 0.9em;\n\tpadding: 8px 15px;\n\tborder: 2px solid #6B7280;\n\tborder-radius: 50px;\n\tbackground-color: transparent;\n}\n\n.search-input:focus {\n\toutline: none;\n\tborder-color: #4ADE80;\n\tcolor: #22c55e;\n}",""]);const u=c},890:(t,n,e)=>{e.d(n,{Z:()=>u});var o=e(81),r=e.n(o),i=e(645),c=e.n(i)()(r());c.push([t.id,"@import url(https://fonts.googleapis.com/css2?family=Audiowide&family=Cambay:wght@400;700&display=swap);"]),c.push([t.id,"* {\n\tmargin: 0;\n\tpadding: 0;\n\tbox-sizing: border-box;\n}\n\nbody {\n\tfont-family: 'Cambay', sans-serif;\n\theight: 100vh;\n\toverflow: hidden;\n}\n\nheader {\n\tdisplay: flex;\n\tjustify-content: space-between;\n\tpadding: 20px 5% 0;\n\talign-items: center;\n}\n\n/*main {\n\tdisplay: grid;\n\tgrid-template-rows: 400px, 300px;\n\talign-content: space-between;\n}*/\n\n.movie-list {\n\tposition: absolute;\n\tbottom: 20px;\n\tpadding: 0 20px;\n}\n\n.movie-list h3 {\n\tcolor: white;\n}\n\n.cards {\n\tdisplay: grid;\n\talign-content: end;\n\tgrid-auto-flow: column;\n\tgrid-template-columns: repeat(5, 24%);\n\tgrid-template-rows: 80%;\n\tgrid-auto-columns: 24%;\n\tcolumn-gap: 20px;\n\toverflow-x: scroll;\n\tscroll-behavior: smooth;\n\tscrollbar-width: none;\n}\n\n.cards::-webkit-scrollbar {\n\twidth: 0;\n}\n\n.movie-item {\n\tposition: relative;\n\tborder-radius: 20px;\n\toverflow: hidden;\n}\n\n.movie-item::after {\n\tcontent: '';\n\tposition: absolute;\n\ttop: 0;\n\tleft: 0;\n\tright: 0;\n\tbottom: 0;\n\tbackground: linear-gradient(to top, black, rgba(0,0,0,0.3));\n}\n\n.movie-item img {\n\twidth: 100%;\n\theight: 100%;\n\tobject-fit: cover;\n}\n\n.movie-item .info {\n\tposition: absolute;\n\tbottom: 20px;\n\tpadding: 20px;\n\tcolor: white;\n\tz-index: 1;\n}",""]);const u=c},645:t=>{t.exports=function(t){var n=[];return n.toString=function(){return this.map((function(n){var e="",o=void 0!==n[5];return n[4]&&(e+="@supports (".concat(n[4],") {")),n[2]&&(e+="@media ".concat(n[2]," {")),o&&(e+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),e+=t(n),o&&(e+="}"),n[2]&&(e+="}"),n[4]&&(e+="}"),e})).join("")},n.i=function(t,e,o,r,i){"string"==typeof t&&(t=[[null,t,void 0]]);var c={};if(o)for(var u=0;u<this.length;u++){var a=this[u][0];null!=a&&(c[a]=!0)}for(var l=0;l<t.length;l++){var s=[].concat(t[l]);o&&c[s[0]]||(void 0!==i&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=i),e&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=e):s[2]=e),r&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=r):s[4]="".concat(r)),n.push(s))}},n}},81:t=>{t.exports=function(t){return t[1]}},379:t=>{var n=[];function e(t){for(var e=-1,o=0;o<n.length;o++)if(n[o].identifier===t){e=o;break}return e}function o(t,o){for(var i={},c=[],u=0;u<t.length;u++){var a=t[u],l=o.base?a[0]+o.base:a[0],s=i[l]||0,f="".concat(l," ").concat(s);i[l]=s+1;var p=e(f),d={css:a[1],media:a[2],sourceMap:a[3],supports:a[4],layer:a[5]};if(-1!==p)n[p].references++,n[p].updater(d);else{var y=r(d,o);o.byIndex=u,n.splice(u,0,{identifier:f,updater:y,references:1})}c.push(f)}return c}function r(t,n){var e=n.domAPI(n);return e.update(t),function(n){if(n){if(n.css===t.css&&n.media===t.media&&n.sourceMap===t.sourceMap&&n.supports===t.supports&&n.layer===t.layer)return;e.update(t=n)}else e.remove()}}t.exports=function(t,r){var i=o(t=t||[],r=r||{});return function(t){t=t||[];for(var c=0;c<i.length;c++){var u=e(i[c]);n[u].references--}for(var a=o(t,r),l=0;l<i.length;l++){var s=e(i[l]);0===n[s].references&&(n[s].updater(),n.splice(s,1))}i=a}}},569:t=>{var n={};t.exports=function(t,e){var o=function(t){if(void 0===n[t]){var e=document.querySelector(t);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(t){e=null}n[t]=e}return n[t]}(t);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(e)}},216:t=>{t.exports=function(t){var n=document.createElement("style");return t.setAttributes(n,t.attributes),t.insert(n,t.options),n}},565:(t,n,e)=>{t.exports=function(t){var n=e.nc;n&&t.setAttribute("nonce",n)}},795:t=>{t.exports=function(t){var n=t.insertStyleElement(t);return{update:function(e){!function(t,n,e){var o="";e.supports&&(o+="@supports (".concat(e.supports,") {")),e.media&&(o+="@media ".concat(e.media," {"));var r=void 0!==e.layer;r&&(o+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),o+=e.css,r&&(o+="}"),e.media&&(o+="}"),e.supports&&(o+="}");var i=e.sourceMap;i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleTagTransform(o,t,n.options)}(n,t,e)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(n)}}}},589:t=>{t.exports=function(t,n){if(n.styleSheet)n.styleSheet.cssText=t;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(t))}}}},n={};function e(o){var r=n[o];if(void 0!==r)return r.exports;var i=n[o]={id:o,exports:{}};return t[o](i,i.exports,e),i.exports}e.n=t=>{var n=t&&t.__esModule?()=>t.default:()=>t;return e.d(n,{a:n}),n},e.d=(t,n)=>{for(var o in n)e.o(n,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:n[o]})},e.o=(t,n)=>Object.prototype.hasOwnProperty.call(t,n),e.nc=void 0,(()=>{var t=e(379),n=e.n(t),o=e(795),r=e.n(o),i=e(569),c=e.n(i),u=e(565),a=e.n(u),l=e(216),s=e.n(l),f=e(589),p=e.n(f),d=e(890),y={};y.styleTagTransform=p(),y.setAttributes=a(),y.insert=c().bind(null,"head"),y.domAPI=r(),y.insertStyleElement=s(),n()(d.Z,y),d.Z&&d.Z.locals&&d.Z.locals;var b=e(800),h={};function v(t){return v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},v(t)}function m(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function g(t,n){for(var e=0;e<n.length;e++){var o=n[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function w(t,n){if(n&&("object"===v(n)||"function"==typeof n))return n;if(void 0!==n)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function O(t){var n="function"==typeof Map?new Map:void 0;return O=function(t){if(null===t||(e=t,-1===Function.toString.call(e).indexOf("[native code]")))return t;var e;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==n){if(n.has(t))return n.get(t);n.set(t,o)}function o(){return x(t,arguments,E(this).constructor)}return o.prototype=Object.create(t.prototype,{constructor:{value:o,enumerable:!1,writable:!0,configurable:!0}}),S(o,t)},O(t)}function x(t,n,e){return x=j()?Reflect.construct.bind():function(t,n,e){var o=[null];o.push.apply(o,n);var r=new(Function.bind.apply(t,o));return e&&S(r,e.prototype),r},x.apply(null,arguments)}function j(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}function S(t,n){return S=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,n){return t.__proto__=n,t},S(t,n)}function E(t){return E=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},E(t)}h.styleTagTransform=p(),h.setAttributes=a(),h.insert=c().bind(null,"head"),h.domAPI=r(),h.insertStyleElement=s(),n()(b.Z,h),b.Z&&b.Z.locals&&b.Z.locals;var P=function(t){!function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),n&&S(t,n)}(c,t);var n,e,o,r,i=(n=c,e=j(),function(){var t,o=E(n);if(e){var r=E(this).constructor;t=Reflect.construct(o,arguments,r)}else t=o.apply(this,arguments);return w(this,t)});function c(){return m(this,c),i.apply(this,arguments)}return o=c,(r=[{key:"connectedCallback",value:function(){this.render()}},{key:"render",value:function(){this.innerHTML="<h1>Movie Info</h1>"}}])&&g(o.prototype,r),Object.defineProperty(o,"prototype",{writable:!1}),c}(O(HTMLElement));customElements.define("app-logo",P);var _=e(60),T={};function k(t){return k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},k(t)}function L(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function R(t,n){for(var e=0;e<n.length;e++){var o=n[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function M(t,n){if(n&&("object"===k(n)||"function"==typeof n))return n;if(void 0!==n)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function Z(t){var n="function"==typeof Map?new Map:void 0;return Z=function(t){if(null===t||(e=t,-1===Function.toString.call(e).indexOf("[native code]")))return t;var e;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==n){if(n.has(t))return n.get(t);n.set(t,o)}function o(){return C(t,arguments,I(this).constructor)}return o.prototype=Object.create(t.prototype,{constructor:{value:o,enumerable:!1,writable:!0,configurable:!0}}),F(o,t)},Z(t)}function C(t,n,e){return C=A()?Reflect.construct.bind():function(t,n,e){var o=[null];o.push.apply(o,n);var r=new(Function.bind.apply(t,o));return e&&F(r,e.prototype),r},C.apply(null,arguments)}function A(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}function F(t,n){return F=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,n){return t.__proto__=n,t},F(t,n)}function I(t){return I=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},I(t)}T.styleTagTransform=p(),T.setAttributes=a(),T.insert=c().bind(null,"head"),T.domAPI=r(),T.insertStyleElement=s(),n()(_.Z,T),_.Z&&_.Z.locals&&_.Z.locals;var q=function(t){!function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),n&&F(t,n)}(c,t);var n,e,o,r,i=(n=c,e=A(),function(){var t,o=I(n);if(e){var r=I(this).constructor;t=Reflect.construct(o,arguments,r)}else t=o.apply(this,arguments);return M(this,t)});function c(){return L(this,c),i.apply(this,arguments)}return o=c,(r=[{key:"connectedCallback",value:function(){this.render()}},{key:"clickEvent",set:function(t){this._clickEvent=t,this.render()}},{key:"render",value:function(){this.innerHTML='\n\t    \t<ul>\n\t\t    \t<li>\n\t\t    \t\t<a href="" class="now-playing">now playing</a>\n\t\t    \t</li>\n\t\t    \t<li>\n\t\t    \t\t<a href="" class="popular">popular</a>\n\t\t    \t</li>\n\t\t    \t<li>\n\t\t    \t\t<a href="" class="top-rate">top rate</a>\n\t\t    \t</li>\n\t\t    \t<li>\n\t\t    \t\t<a href="" class="up-coming">up coming</a>\n\t\t    \t</li>\n\t    \t</ul>',this.addEventListener("click",this._clickEvent)}}])&&R(o.prototype,r),Object.defineProperty(o,"prototype",{writable:!1}),c}(Z(HTMLElement));customElements.define("menu-list",q);var B=e(251),D={};function H(t){return H="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},H(t)}function z(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function N(t,n){for(var e=0;e<n.length;e++){var o=n[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function U(t,n){if(n&&("object"===H(n)||"function"==typeof n))return n;if(void 0!==n)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function V(t){var n="function"==typeof Map?new Map:void 0;return V=function(t){if(null===t||(e=t,-1===Function.toString.call(e).indexOf("[native code]")))return t;var e;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==n){if(n.has(t))return n.get(t);n.set(t,o)}function o(){return W(t,arguments,Q(this).constructor)}return o.prototype=Object.create(t.prototype,{constructor:{value:o,enumerable:!1,writable:!0,configurable:!0}}),J(o,t)},V(t)}function W(t,n,e){return W=G()?Reflect.construct.bind():function(t,n,e){var o=[null];o.push.apply(o,n);var r=new(Function.bind.apply(t,o));return e&&J(r,e.prototype),r},W.apply(null,arguments)}function G(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}function J(t,n){return J=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,n){return t.__proto__=n,t},J(t,n)}function Q(t){return Q=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},Q(t)}D.styleTagTransform=p(),D.setAttributes=a(),D.insert=c().bind(null,"head"),D.domAPI=r(),D.insertStyleElement=s(),n()(B.Z,D),B.Z&&B.Z.locals&&B.Z.locals;var Y=function(t){!function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),n&&J(t,n)}(c,t);var n,e,o,r,i=(n=c,e=G(),function(){var t,o=Q(n);if(e){var r=Q(this).constructor;t=Reflect.construct(o,arguments,r)}else t=o.apply(this,arguments);return U(this,t)});function c(){return z(this,c),i.apply(this,arguments)}return o=c,(r=[{key:"connectedCallback",value:function(){this.render()}},{key:"inputEvent",set:function(t){this._inputEvent=t,this.render()}},{key:"inputValue",get:function(){return this.querySelector(".search-input").value}},{key:"render",value:function(){this.innerHTML='\n      <div class="search-bar">\n        <input class="search-input" type="search" placeholder="search movies..">\n      </div>',this.addEventListener("input",this._inputEvent)}}])&&N(o.prototype,r),Object.defineProperty(o,"prototype",{writable:!1}),c}(V(HTMLElement));customElements.define("search-bar",Y);var K=e(429),X={};function $(t){return $="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},$(t)}function tt(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function nt(t,n){for(var e=0;e<n.length;e++){var o=n[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function et(t,n){if(n&&("object"===$(n)||"function"==typeof n))return n;if(void 0!==n)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function ot(t){var n="function"==typeof Map?new Map:void 0;return ot=function(t){if(null===t||(e=t,-1===Function.toString.call(e).indexOf("[native code]")))return t;var e;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==n){if(n.has(t))return n.get(t);n.set(t,o)}function o(){return rt(t,arguments,ut(this).constructor)}return o.prototype=Object.create(t.prototype,{constructor:{value:o,enumerable:!1,writable:!0,configurable:!0}}),ct(o,t)},ot(t)}function rt(t,n,e){return rt=it()?Reflect.construct.bind():function(t,n,e){var o=[null];o.push.apply(o,n);var r=new(Function.bind.apply(t,o));return e&&ct(r,e.prototype),r},rt.apply(null,arguments)}function it(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}function ct(t,n){return ct=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,n){return t.__proto__=n,t},ct(t,n)}function ut(t){return ut=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},ut(t)}X.styleTagTransform=p(),X.setAttributes=a(),X.insert=c().bind(null,"head"),X.domAPI=r(),X.insertStyleElement=s(),n()(K.Z,X),K.Z&&K.Z.locals&&K.Z.locals;var at=function(t){!function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),n&&ct(t,n)}(c,t);var n,e,o,r,i=(n=c,e=it(),function(){var t,o=ut(n);if(e){var r=ut(this).constructor;t=Reflect.construct(o,arguments,r)}else t=o.apply(this,arguments);return et(this,t)});function c(){return tt(this,c),i.apply(this,arguments)}return o=c,(r=[{key:"movie",set:function(t){this._movie=t,this.render()}},{key:"render",value:function(){this.innerHTML='\n\t\t\t<div class="jumbotron">\n\t\t\t\t<div class="hero">\n\t\t\t\t\t<img src='.concat(this._movie.backdrop,'>\n\t\t\t\t</div>\n\t\t\t\t<div class="movie-info">\n\t\t\t\t\t<h2 class="title">').concat(this._movie.title,'</h2>\n\t\t\t\t\t<p class="genre">\n\t\t\t\t\t\t').concat(this._movie.genres.map((function(t){return"<span>".concat(t,"</span>")})).join(" | "),'\n\t\t\t\t\t</p>\n\t\t\t\t\t<p class="description">').concat(this._movie.description,'</p>\n\t\t\t\t\t<input class="detail-button" type="button" value="show details">\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t')}}])&&nt(o.prototype,r),Object.defineProperty(o,"prototype",{writable:!1}),c}(ot(HTMLElement));customElements.define("movie-jumbotron",at);document.addEventListener("DOMContentLoaded",(function(){var t=document.querySelector("menu-list"),n=document.querySelector("search-bar");n.inputEvent=function(){var t=n.inputValue;console.log(t)},t.clickEvent=function(t){var n=t.target;n.classList.contains("now-playing")&&console.log(n.classList.value),n.classList.contains("popular")&&console.log(n.classList.value),n.classList.contains("top-rate")&&console.log(n.classList.value),n.classList.contains("up-coming")&&console.log(n.classList.value),t.preventDefault()},document.querySelector("movie-jumbotron").movie={title:"Suicide Squad",backdrop:"https://www.themoviedb.org/t/p/original/dpoIQ9MN54cxuLZxDABEUOSFGY3.jpg",genres:["Action","Superhero","Sci-Fi"],release:"2016",description:"From DC Comics comes the Suicide Squad, an antihero team of incarcerated supervillains who act as deniable assets for the United States government, undertaking high-risk black ops missions in exchange for commuted prison sentences."};var e=document.querySelector(".next"),o=document.querySelector(".prev"),r=document.querySelector(".cards"),i=document.querySelector(".movie-item");e.addEventListener("click",(function(){r.scrollLeft+=i.scrollWidth+20,r.scrollLeft===r.scrollLeftMax&&console.log("sudah berada diposisi akhir")})),o.addEventListener("click",(function(){r.scrollLeft-=i.scrollWidth+20,r.scrollLeft===r.scrollLeftMax&&console.log("sudah berada diposisi awal")})),console.log(r)}))})()})();