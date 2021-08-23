(self.webpackChunkp2prc_ui=self.webpackChunkp2prc_ui||[]).push([[678],{757:function(t,e,r){t.exports=r(666)},439:function(t,e,r){"use strict";r.r(e),r.d(e,{default:function(){return p}});var n=r(294),o=r(785);function a(t,e,r,n,o,a,i){try{var c=t[a](i),l=c.value}catch(u){return void r(u)}c.done?e(l):Promise.resolve(l).then(n,o)}function i(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var i=t.apply(e,r);function c(t){a(i,n,o,c,l,"next",t)}function l(t){a(i,n,o,c,l,"throw",t)}c(void 0)}))}}var c=r(757),l=r.n(c),u="";function s(){return n.createElement("li",{className:"runtime"},n.createElement("span",{className:"name"},"p2prc"),n.createElement("span",null," is "),n.createElement("span",{className:"emoji"},"📦 "),n.createElement("span",{className:"version"},u))}function f(){var t=(0,n.useState)(""),e=t[0],r=t[1],a=(0,n.useState)([]),c=a[0],u=a[1],f=(0,n.useRef)(null);function h(){return(h=i(l().mark((function t(n){var a,i,s,f,h,p;return l().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if("Enter"!==n.key){t.next=25;break}if("clear"!==e){t.next=5;break}u([]),t.next=23;break;case 5:return t.prev=5,t.next=8,fetch("http://localhost:8000/",{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify({CMD:e})});case 8:return a=t.sent,t.next=11,a.json();case 11:i=t.sent,s=i.Stdout,f=i.Stderr,h=[{output:s||f,input:e}].concat((0,o.Z)(c)),u(h),t.next=23;break;case 18:t.prev=18,t.t0=t.catch(5),p=[{output:"Error: Could not reach server.",input:e}].concat((0,o.Z)(c)),u(p),console.error(t.t0);case 23:n.target.value="",r("");case 25:case"end":return t.stop()}}),t,null,[[5,18]])})))).apply(this,arguments)}return(0,n.useEffect)((function(){if(f.current){f.current.focus();var t=document.querySelector("body"),e=document.querySelector("main.terminal ul"),r=document.querySelector(".cursor input");t.scrollTop=e.offsetTop-t.offsetTop,e.scrollTop=r.offsetTop-e.offsetTop}}),[f,c]),n.createElement("div",{className:"terminal-container",onClick:function(){var t;null===(t=f.current)||void 0===t||t.focus()}},n.createElement("main",{className:"terminal"},n.createElement("div",{className:"shadow"}),n.createElement("div",{className:"titlebar"},"p2prc"),n.createElement("ul",null,n.createElement("li",{className:"seperator"}),n.createElement("li",{className:"seperator"}),n.createElement("li",{className:"cursor"},n.createElement("span",{className:"home-indicator"},"➜"),n.createElement("input",{type:"text",onChange:function(t){r(t.target.value)},onKeyDown:function(t){return h.apply(this,arguments)},ref:f}),n.createElement("i",null)),n.createElement(s,null),function(t){return t.map((function(t,e){return n.createElement("span",{key:e},n.createElement("li",{className:"seperator"}),n.createElement("li",null,t.output),n.createElement("li",null,n.createElement("span",{className:"home-indicator"},"➜"),n.createElement("span",null,t.input)),n.createElement(s,null),n.createElement("li",{className:"seperator"}))}))}(c))))}function h(t){var e=t.children;return n.createElement("section",{className:"hero"},n.createElement("div",{className:"hero-body"},e))}r(444);function p(t){var e=t.data;console.log(e);var r=e.allMarkdownRemark.nodes[0].html;return n.createElement(h,null,n.createElement("div",{className:"container ml-6 mr-6 "},n.createElement("h1",{align:"center",className:"title is-2"},n.createElement("br",null),n.createElement("a",{href:""},n.createElement("img",{src:"https://raw.githubusercontent.com/Akilan1999/p2p-rendering-computation/master/Docs/images/p2prclogo.png",alt:"p2prc",width:"400"})),n.createElement("br",null),"P2P Rendering Computation"),n.createElement(f,null),n.createElement("br",null),n.createElement("div",{className:"content"},n.createElement("h1",null,"README.md"),n.createElement("div",{className:"blog-post-content",dangerouslySetInnerHTML:{__html:r}}))))}},666:function(t){var e=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function l(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(P){l=function(t,e,r){return t[e]=r}}function u(t,e,r,n){var o=e&&e.prototype instanceof y?e:y,a=Object.create(o.prototype),i=new j(n||[]);return a._invoke=function(t,e,r){var n=f;return function(o,a){if(n===p)throw new Error("Generator is already running");if(n===m){if("throw"===o)throw a;return O()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=k(i,r);if(c){if(c===v)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===f)throw n=m,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=p;var l=s(t,e,r);if("normal"===l.type){if(n=r.done?m:h,l.arg===v)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n=m,r.method="throw",r.arg=l.arg)}}}(t,r,i),a}function s(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(P){return{type:"throw",arg:P}}}t.wrap=u;var f="suspendedStart",h="suspendedYield",p="executing",m="completed",v={};function y(){}function d(){}function g(){}var E={};l(E,a,(function(){return this}));var w=Object.getPrototypeOf,b=w&&w(w(T([])));b&&b!==r&&n.call(b,a)&&(E=b);var x=g.prototype=y.prototype=Object.create(E);function N(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function L(t,e){function r(o,a,i,c){var l=s(t[o],t,a);if("throw"!==l.type){var u=l.arg,f=u.value;return f&&"object"==typeof f&&n.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,i,c)}),(function(t){r("throw",t,i,c)})):e.resolve(f).then((function(t){u.value=t,i(u)}),(function(t){return r("throw",t,i,c)}))}c(l.arg)}var o;this._invoke=function(t,n){function a(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(a,a):a()}}function k(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,k(t,r),"throw"===r.method))return v;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var o=s(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,v;var a=o.arg;return a?a.done?(r[t.resultName]=a.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,v):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,v)}function _(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function S(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function j(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(_,this),this.reset(!0)}function T(t){if(t){var r=t[a];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return i.next=i}}return{next:O}}function O(){return{value:e,done:!0}}return d.prototype=g,l(x,"constructor",g),l(g,"constructor",d),d.displayName=l(g,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===d||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,l(t,c,"GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},N(L.prototype),l(L.prototype,i,(function(){return this})),t.AsyncIterator=L,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new L(u(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},N(x),l(x,c,"Generator"),l(x,a,(function(){return this})),l(x,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=T,j.prototype={constructor:j,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(S),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return c.type="throw",c.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var l=n.call(i,"catchLoc"),u=n.call(i,"finallyLoc");if(l&&u){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(l){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,v):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),S(r),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;S(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:T(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),v}},t}(t.exports);try{regeneratorRuntime=e}catch(r){"object"==typeof globalThis?globalThis.regeneratorRuntime=e:Function("r","regeneratorRuntime = r")(e)}}}]);
//# sourceMappingURL=component---src-pages-index-js-80251c6c1444b0d87ee6.js.map