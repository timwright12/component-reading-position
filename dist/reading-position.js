!function(t){var n={};function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:r})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)e.d(r,o,function(n){return t[n]}.bind(null,o));return r},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=34)}([function(t,n){var e=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=e)},function(t,n,e){t.exports=!e(6)((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},function(t,n,e){var r=e(10),o=e(22),i=e(15),u=Object.defineProperty;n.f=e(1)?Object.defineProperty:function(t,n,e){if(r(t),n=i(n,!0),r(e),o)try{return u(t,n,e)}catch(t){}if("get"in e||"set"in e)throw TypeError("Accessors not supported!");return"value"in e&&(t[n]=e.value),t}},function(t,n){var e={}.hasOwnProperty;t.exports=function(t,n){return e.call(t,n)}},function(t,n){var e=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++e+r).toString(36))}},function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,n,e){var r=e(27),o=e(29);t.exports=function(t){return r(o(t))}},function(t,n){var e=t.exports={version:"2.6.11"};"number"==typeof __e&&(__e=e)},function(t,n,e){var r=e(8),o=e(0),i=o["__core-js_shared__"]||(o["__core-js_shared__"]={});(t.exports=function(t,n){return i[t]||(i[t]=void 0!==n?n:{})})("versions",[]).push({version:r.version,mode:e(13)?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},function(t,n,e){var r=e(5);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},function(t,n,e){var r=e(26),o=e(18);t.exports=Object.keys||function(t){return r(t,o)}},function(t,n){n.f={}.propertyIsEnumerable},function(t,n){t.exports=!1},function(t,n,e){var r=e(9)("wks"),o=e(4),i=e(0).Symbol,u="function"==typeof i;(t.exports=function(t){return r[t]||(r[t]=u&&i[t]||(u?i:o)("Symbol."+t))}).store=r},function(t,n,e){var r=e(5);t.exports=function(t,n){if(!r(t))return t;var e,o;if(n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;if("function"==typeof(e=t.valueOf)&&!r(o=e.call(t)))return o;if(!n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,n,e){var r=e(2),o=e(17);t.exports=e(1)?function(t,n,e){return r.f(t,n,o(1,e))}:function(t,n,e){return t[n]=e,t}},function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},function(t,n){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,n){n.f=Object.getOwnPropertySymbols},function(t,n,e){var r=e(0),o=e(8),i=e(13),u=e(21),c=e(2).f;t.exports=function(t){var n=o.Symbol||(o.Symbol=i?{}:r.Symbol||{});"_"==t.charAt(0)||t in n||c(n,t,{value:u.f(t)})}},function(t,n,e){n.f=e(14)},function(t,n,e){t.exports=!e(1)&&!e(6)((function(){return 7!=Object.defineProperty(e(23)("div"),"a",{get:function(){return 7}}).a}))},function(t,n,e){var r=e(5),o=e(0).document,i=r(o)&&r(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},function(t,n,e){var r=e(0),o=e(8),i=e(16),u=e(25),c=e(38),s=function(t,n,e){var f,a,l,p,h=t&s.F,y=t&s.G,d=t&s.S,g=t&s.P,v=t&s.B,b=y?r:d?r[n]||(r[n]={}):(r[n]||{}).prototype,m=y?o:o[n]||(o[n]={}),S=m.prototype||(m.prototype={});for(f in y&&(e=n),e)l=((a=!h&&b&&void 0!==b[f])?b:e)[f],p=v&&a?c(l,r):g&&"function"==typeof l?c(Function.call,l):l,b&&u(b,f,l,t&s.U),m[f]!=l&&i(m,f,p),g&&S[f]!=l&&(S[f]=l)};r.core=o,s.F=1,s.G=2,s.S=4,s.P=8,s.B=16,s.W=32,s.U=64,s.R=128,t.exports=s},function(t,n,e){var r=e(0),o=e(16),i=e(3),u=e(4)("src"),c=e(37),s=(""+c).split("toString");e(8).inspectSource=function(t){return c.call(t)},(t.exports=function(t,n,e,c){var f="function"==typeof e;f&&(i(e,"name")||o(e,"name",n)),t[n]!==e&&(f&&(i(e,u)||o(e,u,t[n]?""+t[n]:s.join(String(n)))),t===r?t[n]=e:c?t[n]?t[n]=e:o(t,n,e):(delete t[n],o(t,n,e)))})(Function.prototype,"toString",(function(){return"function"==typeof this&&this[u]||c.call(this)}))},function(t,n,e){var r=e(3),o=e(7),i=e(43)(!1),u=e(31)("IE_PROTO");t.exports=function(t,n){var e,c=o(t),s=0,f=[];for(e in c)e!=u&&r(c,e)&&f.push(e);for(;n.length>s;)r(c,e=n[s++])&&(~i(f,e)||f.push(e));return f}},function(t,n,e){var r=e(28);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},function(t,n){var e={}.toString;t.exports=function(t){return e.call(t).slice(8,-1)}},function(t,n){t.exports=function(t){if(null==t)throw TypeError("Can't call method on  "+t);return t}},function(t,n){var e=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:e)(t)}},function(t,n,e){var r=e(9)("keys"),o=e(4);t.exports=function(t){return r[t]||(r[t]=o(t))}},function(t,n,e){var r=e(29);t.exports=function(t){return Object(r(t))}},function(t,n,e){var r=e(26),o=e(18).concat("length","prototype");n.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},function(t,n,e){e(55),t.exports=e(54)},function(t,n,e){e(20)("asyncIterator")},function(t,n,e){"use strict";var r=e(0),o=e(3),i=e(1),u=e(24),c=e(25),s=e(40).KEY,f=e(6),a=e(9),l=e(41),p=e(4),h=e(14),y=e(21),d=e(20),g=e(42),v=e(46),b=e(10),m=e(5),S=e(32),O=e(7),x=e(15),w=e(17),E=e(47),j=e(50),P=e(51),_=e(19),M=e(2),T=e(11),k=P.f,F=M.f,A=j.f,N=r.Symbol,H=r.JSON,$=H&&H.stringify,C=h("_hidden"),I=h("toPrimitive"),L={}.propertyIsEnumerable,R=a("symbol-registry"),q=a("symbols"),D=a("op-symbols"),U=Object.prototype,W="function"==typeof N&&!!_.f,z=r.QObject,J=!z||!z.prototype||!z.prototype.findChild,G=i&&f((function(){return 7!=E(F({},"a",{get:function(){return F(this,"a",{value:7}).a}})).a}))?function(t,n,e){var r=k(U,n);r&&delete U[n],F(t,n,e),r&&t!==U&&F(U,n,r)}:F,K=function(t){var n=q[t]=E(N.prototype);return n._k=t,n},Y=W&&"symbol"==typeof N.iterator?function(t){return"symbol"==typeof t}:function(t){return t instanceof N},B=function(t,n,e){return t===U&&B(D,n,e),b(t),n=x(n,!0),b(e),o(q,n)?(e.enumerable?(o(t,C)&&t[C][n]&&(t[C][n]=!1),e=E(e,{enumerable:w(0,!1)})):(o(t,C)||F(t,C,w(1,{})),t[C][n]=!0),G(t,n,e)):F(t,n,e)},Q=function(t,n){b(t);for(var e,r=g(n=O(n)),o=0,i=r.length;i>o;)B(t,e=r[o++],n[e]);return t},V=function(t){var n=L.call(this,t=x(t,!0));return!(this===U&&o(q,t)&&!o(D,t))&&(!(n||!o(this,t)||!o(q,t)||o(this,C)&&this[C][t])||n)},X=function(t,n){if(t=O(t),n=x(n,!0),t!==U||!o(q,n)||o(D,n)){var e=k(t,n);return!e||!o(q,n)||o(t,C)&&t[C][n]||(e.enumerable=!0),e}},Z=function(t){for(var n,e=A(O(t)),r=[],i=0;e.length>i;)o(q,n=e[i++])||n==C||n==s||r.push(n);return r},tt=function(t){for(var n,e=t===U,r=A(e?D:O(t)),i=[],u=0;r.length>u;)!o(q,n=r[u++])||e&&!o(U,n)||i.push(q[n]);return i};W||(c((N=function(){if(this instanceof N)throw TypeError("Symbol is not a constructor!");var t=p(arguments.length>0?arguments[0]:void 0),n=function(e){this===U&&n.call(D,e),o(this,C)&&o(this[C],t)&&(this[C][t]=!1),G(this,t,w(1,e))};return i&&J&&G(U,t,{configurable:!0,set:n}),K(t)}).prototype,"toString",(function(){return this._k})),P.f=X,M.f=B,e(33).f=j.f=Z,e(12).f=V,_.f=tt,i&&!e(13)&&c(U,"propertyIsEnumerable",V,!0),y.f=function(t){return K(h(t))}),u(u.G+u.W+u.F*!W,{Symbol:N});for(var nt="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),et=0;nt.length>et;)h(nt[et++]);for(var rt=T(h.store),ot=0;rt.length>ot;)d(rt[ot++]);u(u.S+u.F*!W,"Symbol",{for:function(t){return o(R,t+="")?R[t]:R[t]=N(t)},keyFor:function(t){if(!Y(t))throw TypeError(t+" is not a symbol!");for(var n in R)if(R[n]===t)return n},useSetter:function(){J=!0},useSimple:function(){J=!1}}),u(u.S+u.F*!W,"Object",{create:function(t,n){return void 0===n?E(t):Q(E(t),n)},defineProperty:B,defineProperties:Q,getOwnPropertyDescriptor:X,getOwnPropertyNames:Z,getOwnPropertySymbols:tt});var it=f((function(){_.f(1)}));u(u.S+u.F*it,"Object",{getOwnPropertySymbols:function(t){return _.f(S(t))}}),H&&u(u.S+u.F*(!W||f((function(){var t=N();return"[null]"!=$([t])||"{}"!=$({a:t})||"{}"!=$(Object(t))}))),"JSON",{stringify:function(t){for(var n,e,r=[t],o=1;arguments.length>o;)r.push(arguments[o++]);if(e=n=r[1],(m(n)||void 0!==t)&&!Y(t))return v(n)||(n=function(t,n){if("function"==typeof e&&(n=e.call(this,t,n)),!Y(n))return n}),r[1]=n,$.apply(H,r)}}),N.prototype[I]||e(16)(N.prototype,I,N.prototype.valueOf),l(N,"Symbol"),l(Math,"Math",!0),l(r.JSON,"JSON",!0)},function(t,n,e){t.exports=e(9)("native-function-to-string",Function.toString)},function(t,n,e){var r=e(39);t.exports=function(t,n,e){if(r(t),void 0===n)return t;switch(e){case 1:return function(e){return t.call(n,e)};case 2:return function(e,r){return t.call(n,e,r)};case 3:return function(e,r,o){return t.call(n,e,r,o)}}return function(){return t.apply(n,arguments)}}},function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,n,e){var r=e(4)("meta"),o=e(5),i=e(3),u=e(2).f,c=0,s=Object.isExtensible||function(){return!0},f=!e(6)((function(){return s(Object.preventExtensions({}))})),a=function(t){u(t,r,{value:{i:"O"+ ++c,w:{}}})},l=t.exports={KEY:r,NEED:!1,fastKey:function(t,n){if(!o(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!i(t,r)){if(!s(t))return"F";if(!n)return"E";a(t)}return t[r].i},getWeak:function(t,n){if(!i(t,r)){if(!s(t))return!0;if(!n)return!1;a(t)}return t[r].w},onFreeze:function(t){return f&&l.NEED&&s(t)&&!i(t,r)&&a(t),t}}},function(t,n,e){var r=e(2).f,o=e(3),i=e(14)("toStringTag");t.exports=function(t,n,e){t&&!o(t=e?t:t.prototype,i)&&r(t,i,{configurable:!0,value:n})}},function(t,n,e){var r=e(11),o=e(19),i=e(12);t.exports=function(t){var n=r(t),e=o.f;if(e)for(var u,c=e(t),s=i.f,f=0;c.length>f;)s.call(t,u=c[f++])&&n.push(u);return n}},function(t,n,e){var r=e(7),o=e(44),i=e(45);t.exports=function(t){return function(n,e,u){var c,s=r(n),f=o(s.length),a=i(u,f);if(t&&e!=e){for(;f>a;)if((c=s[a++])!=c)return!0}else for(;f>a;a++)if((t||a in s)&&s[a]===e)return t||a||0;return!t&&-1}}},function(t,n,e){var r=e(30),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},function(t,n,e){var r=e(30),o=Math.max,i=Math.min;t.exports=function(t,n){return(t=r(t))<0?o(t+n,0):i(t,n)}},function(t,n,e){var r=e(28);t.exports=Array.isArray||function(t){return"Array"==r(t)}},function(t,n,e){var r=e(10),o=e(48),i=e(18),u=e(31)("IE_PROTO"),c=function(){},s=function(){var t,n=e(23)("iframe"),r=i.length;for(n.style.display="none",e(49).appendChild(n),n.src="javascript:",(t=n.contentWindow.document).open(),t.write("<script>document.F=Object<\/script>"),t.close(),s=t.F;r--;)delete s.prototype[i[r]];return s()};t.exports=Object.create||function(t,n){var e;return null!==t?(c.prototype=r(t),e=new c,c.prototype=null,e[u]=t):e=s(),void 0===n?e:o(e,n)}},function(t,n,e){var r=e(2),o=e(10),i=e(11);t.exports=e(1)?Object.defineProperties:function(t,n){o(t);for(var e,u=i(n),c=u.length,s=0;c>s;)r.f(t,e=u[s++],n[e]);return t}},function(t,n,e){var r=e(0).document;t.exports=r&&r.documentElement},function(t,n,e){var r=e(7),o=e(33).f,i={}.toString,u="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];t.exports.f=function(t){return u&&"[object Window]"==i.call(t)?function(t){try{return o(t)}catch(t){return u.slice()}}(t):o(r(t))}},function(t,n,e){var r=e(12),o=e(17),i=e(7),u=e(15),c=e(3),s=e(22),f=Object.getOwnPropertyDescriptor;n.f=e(1)?f:function(t,n){if(t=i(t),n=u(n,!0),s)try{return f(t,n)}catch(t){}if(c(t,n))return o(!r.f.call(t,n),t[n])}},function(t,n,e){var r=e(24);r(r.S+r.F,"Object",{assign:e(53)})},function(t,n,e){"use strict";var r=e(1),o=e(11),i=e(19),u=e(12),c=e(32),s=e(27),f=Object.assign;t.exports=!f||e(6)((function(){var t={},n={},e=Symbol(),r="abcdefghijklmnopqrst";return t[e]=7,r.split("").forEach((function(t){n[t]=t})),7!=f({},t)[e]||Object.keys(f({},n)).join("")!=r}))?function(t,n){for(var e=c(t),f=arguments.length,a=1,l=i.f,p=u.f;f>a;)for(var h,y=s(arguments[a++]),d=l?o(y).concat(l(y)):o(y),g=d.length,v=0;g>v;)h=d[v++],r&&!p.call(y,h)||(e[h]=y[h]);return e}:f},function(t,n,e){},function(t,n,e){"use strict";e.r(n);e(35),e(36),e(52);function r(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function o(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var i=function(){function t(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};r(this,t);var o={startElement:null,endElement:null,onCreate:null,scrollStart:null,scrolling:null,scrollEnd:null};n&&"string"==typeof n?(this.$readingPosition=document.querySelector(n),this.$readingPosition?(document.documentElement.classList.add("js"),this.settings=Object.assign({},o,e),this.updating=!1,this.$startElement=document.querySelector(this.settings.startElement),this.$endElement=document.querySelector(this.settings.endElement),this.inScrollArea=!1,this.setupReadingPosition(this.$readingPosition),this.settings.onCreate&&"function"==typeof this.settings.onCreate&&this.settings.onCreate.call()):console.error("10up ReadingPosition: Target not found. A valid target (readingPosition) must be used.")):console.error("10up ReadingPosition: No target supplied. A valid target (readingPosition) must be used.")}var n,e,i;return n=t,(e=[{key:"setupReadingPosition",value:function(t){!1!==t.nodeName&&"progressbar"!==t.role||t.setAttribute("role","progressbar"),t.setAttribute("max",100),document.addEventListener("scroll",this.debouncedHandleScroll.bind(this)),window.addEventListener("resize",this.debouncedHandleScroll.bind(this)),window.addEventListener("orientationchange",this.debouncedHandleScroll.bind(this))}},{key:"debouncedHandleScroll",value:function(){this.updating||(requestAnimationFrame(this.handleScroll.bind(this)),this.updating=!0)}},{key:"handleScroll",value:function(){this.$readingPosition.setAttribute("value",this.percentage),0<this.percentage&&100>this.percentage&&(this.inScrollArea||this.settings.scrollStart&&"function"==typeof this.settings.scrollStart&&this.settings.scrollStart(this.percentage),this.inScrollArea=!0),0!==this.percentage&&100!==this.percentage||(this.inScrollArea&&this.settings.scrollEnd&&"function"==typeof this.settings.scrollEnd&&this.settings.scrollEnd(this.percentage),this.inScrollArea=!1),this.inScrollArea&&this.settings.scrolling&&"function"==typeof this.settings.scrolling&&this.settings.scrolling(this.percentage),this.updating=!1}},{key:"max",get:function(){var t=document.body,n=document.documentElement,e=window.innerHeight;return(this.$endElement&&this.$endElement instanceof HTMLElement?this.$endElement.offsetTop:Math.max(t.scrollHeight,t.offsetHeight,n.clientHeight,n.scrollHeight,n.offsetHeight))-e-this.min}},{key:"min",get:function(){return this.$startElement&&this.$startElement instanceof HTMLElement?Math.max(0,this.$startElement.offsetTop):0}},{key:"percentage",get:function(){var t=Math.max(0,window.scrollY-this.min);return Math.min(100,100*t/this.max)}}])&&o(n.prototype,e),i&&o(n,i),t}();function u(t){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}"object"!==u(window.TenUp)&&(window.TenUp={}),window.TenUp.readingPosition=i}]);
//# sourceMappingURL=reading-position.js.map