(()=>{var t={757:(t,e,n)=>{t.exports=n(666)},666:t=>{var e=function(t){"use strict";var e,n=Object.prototype,r=n.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(t){u=function(t,e,n){return t[e]=n}}function s(t,e,n,r){var o=e&&e.prototype instanceof m?e:m,i=Object.create(o.prototype),a=new j(r||[]);return i._invoke=function(t,e,n){var r=f;return function(o,i){if(r===d)throw new Error("Generator is already running");if(r===v){if("throw"===o)throw i;return _()}for(n.method=o,n.arg=i;;){var a=n.delegate;if(a){var c=k(a,n);if(c){if(c===p)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===f)throw r=v,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=d;var u=l(t,e,n);if("normal"===u.type){if(r=n.done?v:h,u.arg===p)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(r=v,n.method="throw",n.arg=u.arg)}}}(t,n,a),i}function l(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=s;var f="suspendedStart",h="suspendedYield",d="executing",v="completed",p={};function m(){}function y(){}function g(){}var L={};u(L,i,(function(){return this}));var w=Object.getPrototypeOf,E=w&&w(w(O([])));E&&E!==n&&r.call(E,i)&&(L=E);var b=g.prototype=m.prototype=Object.create(L);function x(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function S(t,e){function n(o,i,a,c){var u=l(t[o],t,i);if("throw"!==u.type){var s=u.arg,f=s.value;return f&&"object"==typeof f&&r.call(f,"__await")?e.resolve(f.__await).then((function(t){n("next",t,a,c)}),(function(t){n("throw",t,a,c)})):e.resolve(f).then((function(t){s.value=t,a(s)}),(function(t){return n("throw",t,a,c)}))}c(u.arg)}var o;this._invoke=function(t,r){function i(){return new e((function(e,o){n(t,r,e,o)}))}return o=o?o.then(i,i):i()}}function k(t,n){var r=t.iterator[n.method];if(r===e){if(n.delegate=null,"throw"===n.method){if(t.iterator.return&&(n.method="return",n.arg=e,k(t,n),"throw"===n.method))return p;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return p}var o=l(r,t.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,p;var i=o.arg;return i?i.done?(n[t.resultName]=i.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,p):i:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,p)}function T(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function q(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function j(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(T,this),this.reset(!0)}function O(t){if(t){var n=t[i];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function n(){for(;++o<t.length;)if(r.call(t,o))return n.value=t[o],n.done=!1,n;return n.value=e,n.done=!0,n};return a.next=a}}return{next:_}}function _(){return{value:e,done:!0}}return y.prototype=g,u(b,"constructor",g),u(g,"constructor",y),y.displayName=u(g,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===y||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,u(t,c,"GeneratorFunction")),t.prototype=Object.create(b),t},t.awrap=function(t){return{__await:t}},x(S.prototype),u(S.prototype,a,(function(){return this})),t.AsyncIterator=S,t.async=function(e,n,r,o,i){void 0===i&&(i=Promise);var a=new S(s(e,n,r,o),i);return t.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},x(b),u(b,c,"Generator"),u(b,i,(function(){return this})),u(b,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=O,j.prototype={constructor:j,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(q),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function o(r,o){return c.type="throw",c.arg=t,n.next=r,o&&(n.method="next",n.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=r.call(a,"catchLoc"),s=r.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,p):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),p},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),q(n),p}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;q(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:O(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),p}},t}(t.exports);try{regeneratorRuntime=e}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=e:Function("r","regeneratorRuntime = r")(e)}}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={exports:{}};return t[r](i,i.exports,n),i.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{"use strict";function t(t,e,n){var r=document.documentElement,o="data-outside";function i(a){t.contains(a.target)||(t.removeAttribute(o),e.forEach((function(t){r.removeEventListener(t,i)})),n())}t.hasAttribute(o)||(e.forEach((function(t){setTimeout((function(){r.addEventListener(t,i)}))})),t.setAttribute(o,""))}function e(t,e,n,r,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void n(t)}c.done?e(u):Promise.resolve(u).then(r,o)}function r(t){return function(){var n=this,r=arguments;return new Promise((function(o,i){var a=t.apply(n,r);function c(t){e(a,o,i,c,u,"next",t)}function u(t){e(a,o,i,c,u,"throw",t)}c(void 0)}))}}var o,i,a,c,u,s,l,f,h,d,v=n(757),p=n.n(v);function m(){var t,e=document.querySelector(".numbers");(t=new MutationObserver((function(e){e[0].target.classList.contains("ativo")&&(t.disconnect(),document.querySelectorAll("[data-number]").forEach((function(t){var e=+t.innerText,n=Math.floor(e/100),r=0,o=setInterval((function(){r=+r+n,t.innerText=r,r>e&&(t.innerText=e,clearInterval(o))}),25*Math.random())})))}))).observe(e,{attributes:!0})}!function(){function t(t){t.preventDefault();var e=t.currentTarget.getAttribute("href"),n=document.querySelector(e).offsetTop;window.scrollTo({top:n,behavior:"smooth"})}document.querySelectorAll('[data-menu="suave"]').forEach((function(e){e.addEventListener("click",t)}))}(),o=document.querySelectorAll('[data-tab="menu"] li'),i=document.querySelectorAll('[data-tab="content"] section'),o.length&&i.length&&(i[0].classList.add("active"),o.forEach((function(t,e){t.addEventListener("click",(function(){!function(t){i.forEach((function(t){t.classList.remove("active")}));var e=i[t].dataset.anima;i[t].classList.add("active",e)}(e)}))}))),function(){var t=document.querySelectorAll('[data-set="accordion"] dt');function e(t){t.currentTarget.classList.toggle("ativo"),t.currentTarget.nextElementSibling.classList.toggle("ativo")}t.length&&(t[0].classList.add("ativo"),t[0].nextElementSibling.classList.add("ativo"),t.forEach((function(t){t.addEventListener("click",e)})))}(),function(){var t=document.querySelectorAll('[data-anima="scroll"]'),e=.6*window.innerHeight;function n(){t.forEach((function(t){t.getBoundingClientRect().top-e<0?t.classList.add("ativo"):t.classList.contains("ativo")&&t.classList.remove("ativo")}))}t.length&&(n(),window.addEventListener("scroll",n))}(),function(){var t=document.querySelector('[data-modal="active"]'),e=document.querySelector('[data-modal="close"]'),n=document.querySelector(".modal-container");function r(t){t.preventDefault(),n.classList.toggle("ativo")}t&&e&&n&&(t.addEventListener("click",r),e.addEventListener("click",r),n.addEventListener("click",(function(t){t.target===this&&r(t)})))}(),function(){var t=document.querySelectorAll("[data-tooltip]"),e={handleEvent:function(t){this.tooltipBox.style.top="".concat(t.pageY+10,"px"),this.tooltipBox.style.left="".concat(t.pageX+10,"px")}},n={handleEvent:function(){this.tooltipBox.remove(),this.element.removeEventListener("mouseleave",n),this.element.removeEventListener("mousemove",e)}};function r(){var t=function(t){var e=document.createElement("div"),n=t.getAttribute("aria-label");return e.classList.add("tooltip"),e.innerHTML=n,document.body.appendChild(e),e}(this);e.tooltipBox=t,this.addEventListener("mousemove",e),n.tooltipBox=t,n.element=this,this.addEventListener("mouseleave",n)}t.forEach((function(t){t.addEventListener("mouseover",r)}))}(),function(){function e(e){var n=this;e.preventDefault(),this.classList.add("active"),t(this,["touchstart","click"],(function(){n.classList.remove("active")}))}document.querySelectorAll("[data-dropdown]").forEach((function(t){["touchstart","click"].forEach((function(n){t.addEventListener(n,e)}))}))}(),function(){var e=document.querySelector('[data-menu="button"]'),n=document.querySelector('[data-menu="list"]'),r=["click","touchend"];function o(){n.classList.add("active"),e.classList.add("active"),t(n,r,(function(){n.classList.remove("active"),e.classList.remove("active")}))}e&&r.forEach((function(t){e.addEventListener(t,o)}))}(),c=(a=document.querySelector("[data-week]")).dataset.week.split(",").map(Number),u=a.dataset.hour.split(",").map(Number),l=(s=new Date).getDay(),f=s.getHours(),h=-1!==c.indexOf(l),d=f>=u[0]&&f<u[1],h&&d&&a.classList.add("open"),function(){function t(){return(t=r(p().mark((function t(e){var n,r,o,i;return p().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=function(t){var e=document.createElement("div");return e.classList.add("number-animal"),e.innerHTML="\n        <h3>".concat(t.specie,"</h3>\n        <span data-number>").concat(t.total,"</span>\n      "),e},t.prev=2,t.next=5,fetch(e);case 5:return r=t.sent,t.next=8,r.json();case 8:o=t.sent,i=document.querySelector(".numbers-grid"),o.forEach((function(t){var e=n(t);i.appendChild(e)})),m(),t.next=17;break;case 14:t.prev=14,t.t0=t.catch(2),console.log(t.t0);case 17:case"end":return t.stop()}}),t,null,[[2,14]])})))).apply(this,arguments)}!function(e){t.apply(this,arguments)}("./animaisapi.json")}(),function(){var t="https://blockchain.info/ticker";function e(){return(e=r(p().mark((function e(){var n,r;return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(t);case 3:return n=e.sent,e.next=6,n.json();case 6:r=e.sent,document.querySelector(".btc-price").innerHTML=(100/r.BRL.sell).toFixed(4),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case 15:case"end":return e.stop()}}),e,null,[[0,11]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}(t)}()})()})();