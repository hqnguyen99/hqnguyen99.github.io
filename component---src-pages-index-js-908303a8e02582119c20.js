(self.webpackChunkquyen_resume=self.webpackChunkquyen_resume||[]).push([[678],{7757:function(t,e,r){t.exports=r(5666)},9662:function(t,e,r){var n=r(7854),o=r(614),i=r(6330),a=n.TypeError;t.exports=function(t){if(o(t))return t;throw a(i(t)+" is not a function")}},1223:function(t,e,r){var n=r(5112),o=r(30),i=r(3070),a=n("unscopables"),u=Array.prototype;null==u[a]&&i.f(u,a,{configurable:!0,value:o(null)}),t.exports=function(t){u[a][t]=!0}},9670:function(t,e,r){var n=r(7854),o=r(111),i=n.String,a=n.TypeError;t.exports=function(t){if(o(t))return t;throw a(i(t)+" is not an object")}},1318:function(t,e,r){var n=r(5656),o=r(1400),i=r(6244),a=function(t){return function(e,r,a){var u,c=n(e),f=i(c),s=o(a,f);if(t&&r!=r){for(;f>s;)if((u=c[s++])!=u)return!0}else for(;f>s;s++)if((t||s in c)&&c[s]===r)return t||s||0;return!t&&-1}};t.exports={includes:a(!0),indexOf:a(!1)}},7475:function(t,e,r){var n=r(7854),o=r(3157),i=r(4411),a=r(111),u=r(5112)("species"),c=n.Array;t.exports=function(t){var e;return o(t)&&(e=t.constructor,(i(e)&&(e===c||o(e.prototype))||a(e)&&null===(e=e[u]))&&(e=void 0)),void 0===e?c:e}},5417:function(t,e,r){var n=r(7475);t.exports=function(t,e){return new(n(t))(0===e?0:e)}},4326:function(t,e,r){var n=r(1702),o=n({}.toString),i=n("".slice);t.exports=function(t){return i(o(t),8,-1)}},648:function(t,e,r){var n=r(7854),o=r(1694),i=r(614),a=r(4326),u=r(5112)("toStringTag"),c=n.Object,f="Arguments"==a(function(){return arguments}());t.exports=o?a:function(t){var e,r,n;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(r=function(t,e){try{return t[e]}catch(r){}}(e=c(t),u))?r:f?a(e):"Object"==(n=a(e))&&i(e.callee)?"Arguments":n}},9920:function(t,e,r){var n=r(2597),o=r(3887),i=r(1236),a=r(3070);t.exports=function(t,e){for(var r=o(e),u=a.f,c=i.f,f=0;f<r.length;f++){var s=r[f];n(t,s)||u(t,s,c(e,s))}}},8880:function(t,e,r){var n=r(9781),o=r(3070),i=r(9114);t.exports=n?function(t,e,r){return o.f(t,e,i(1,r))}:function(t,e,r){return t[e]=r,t}},9114:function(t){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},9781:function(t,e,r){var n=r(7293);t.exports=!n((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},317:function(t,e,r){var n=r(7854),o=r(111),i=n.document,a=o(i)&&o(i.createElement);t.exports=function(t){return a?i.createElement(t):{}}},8113:function(t,e,r){var n=r(5005);t.exports=n("navigator","userAgent")||""},7392:function(t,e,r){var n,o,i=r(7854),a=r(8113),u=i.process,c=i.Deno,f=u&&u.versions||c&&c.version,s=f&&f.v8;s&&(o=(n=s.split("."))[0]>0&&n[0]<4?1:+(n[0]+n[1])),!o&&a&&(!(n=a.match(/Edge\/(\d+)/))||n[1]>=74)&&(n=a.match(/Chrome\/(\d+)/))&&(o=+n[1]),t.exports=o},748:function(t){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},2109:function(t,e,r){var n=r(7854),o=r(1236).f,i=r(8880),a=r(1320),u=r(3505),c=r(9920),f=r(4705);t.exports=function(t,e){var r,s,l,p,v,h=t.target,y=t.global,m=t.stat;if(r=y?n:m?n[h]||u(h,{}):(n[h]||{}).prototype)for(s in e){if(p=e[s],l=t.noTargetGet?(v=o(r,s))&&v.value:r[s],!f(y?s:h+(m?".":"#")+s,t.forced)&&void 0!==l){if(typeof p==typeof l)continue;c(p,l)}(t.sham||l&&l.sham)&&i(p,"sham",!0),a(r,s,p,t)}}},7293:function(t){t.exports=function(t){try{return!!t()}catch(e){return!0}}},6790:function(t,e,r){"use strict";var n=r(7854),o=r(3157),i=r(6244),a=r(9974),u=n.TypeError,c=function(t,e,r,n,f,s,l,p){for(var v,h,y=f,m=0,d=!!l&&a(l,p);m<n;){if(m in r){if(v=d?d(r[m],m,e):r[m],s>0&&o(v))h=i(v),y=c(t,e,v,h,y,s-1)-1;else{if(y>=9007199254740991)throw u("Exceed the acceptable array length");t[y]=v}y++}m++}return y};t.exports=c},9974:function(t,e,r){var n=r(1702),o=r(9662),i=n(n.bind);t.exports=function(t,e){return o(t),void 0===e?t:i?i(t,e):function(){return t.apply(e,arguments)}}},6916:function(t){var e=Function.prototype.call;t.exports=e.bind?e.bind(e):function(){return e.apply(e,arguments)}},6530:function(t,e,r){var n=r(9781),o=r(2597),i=Function.prototype,a=n&&Object.getOwnPropertyDescriptor,u=o(i,"name"),c=u&&"something"===function(){}.name,f=u&&(!n||n&&a(i,"name").configurable);t.exports={EXISTS:u,PROPER:c,CONFIGURABLE:f}},1702:function(t){var e=Function.prototype,r=e.bind,n=e.call,o=r&&r.bind(n);t.exports=r?function(t){return t&&o(n,t)}:function(t){return t&&function(){return n.apply(t,arguments)}}},5005:function(t,e,r){var n=r(7854),o=r(614),i=function(t){return o(t)?t:void 0};t.exports=function(t,e){return arguments.length<2?i(n[t]):n[t]&&n[t][e]}},8173:function(t,e,r){var n=r(9662);t.exports=function(t,e){var r=t[e];return null==r?void 0:n(r)}},7854:function(t,e,r){var n=function(t){return t&&t.Math==Math&&t};t.exports=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof r.g&&r.g)||function(){return this}()||Function("return this")()},2597:function(t,e,r){var n=r(1702),o=r(7908),i=n({}.hasOwnProperty);t.exports=Object.hasOwn||function(t,e){return i(o(t),e)}},3501:function(t){t.exports={}},490:function(t,e,r){var n=r(5005);t.exports=n("document","documentElement")},4664:function(t,e,r){var n=r(9781),o=r(7293),i=r(317);t.exports=!n&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},8361:function(t,e,r){var n=r(7854),o=r(1702),i=r(7293),a=r(4326),u=n.Object,c=o("".split);t.exports=i((function(){return!u("z").propertyIsEnumerable(0)}))?function(t){return"String"==a(t)?c(t,""):u(t)}:u},2788:function(t,e,r){var n=r(1702),o=r(614),i=r(5465),a=n(Function.toString);o(i.inspectSource)||(i.inspectSource=function(t){return a(t)}),t.exports=i.inspectSource},9909:function(t,e,r){var n,o,i,a=r(8536),u=r(7854),c=r(1702),f=r(111),s=r(8880),l=r(2597),p=r(5465),v=r(6200),h=r(3501),y="Object already initialized",m=u.TypeError,d=u.WeakMap;if(a||p.state){var g=p.state||(p.state=new d),x=c(g.get),b=c(g.has),w=c(g.set);n=function(t,e){if(b(g,t))throw new m(y);return e.facade=t,w(g,t,e),e},o=function(t){return x(g,t)||{}},i=function(t){return b(g,t)}}else{var E=v("state");h[E]=!0,n=function(t,e){if(l(t,E))throw new m(y);return e.facade=t,s(t,E,e),e},o=function(t){return l(t,E)?t[E]:{}},i=function(t){return l(t,E)}}t.exports={set:n,get:o,has:i,enforce:function(t){return i(t)?o(t):n(t,{})},getterFor:function(t){return function(e){var r;if(!f(e)||(r=o(e)).type!==t)throw m("Incompatible receiver, "+t+" required");return r}}}},3157:function(t,e,r){var n=r(4326);t.exports=Array.isArray||function(t){return"Array"==n(t)}},614:function(t){t.exports=function(t){return"function"==typeof t}},4411:function(t,e,r){var n=r(1702),o=r(7293),i=r(614),a=r(648),u=r(5005),c=r(2788),f=function(){},s=[],l=u("Reflect","construct"),p=/^\s*(?:class|function)\b/,v=n(p.exec),h=!p.exec(f),y=function(t){if(!i(t))return!1;try{return l(f,s,t),!0}catch(e){return!1}};t.exports=!l||o((function(){var t;return y(y.call)||!y(Object)||!y((function(){t=!0}))||t}))?function(t){if(!i(t))return!1;switch(a(t)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}return h||!!v(p,c(t))}:y},4705:function(t,e,r){var n=r(7293),o=r(614),i=/#|\.prototype\./,a=function(t,e){var r=c[u(t)];return r==s||r!=f&&(o(e)?n(e):!!e)},u=a.normalize=function(t){return String(t).replace(i,".").toLowerCase()},c=a.data={},f=a.NATIVE="N",s=a.POLYFILL="P";t.exports=a},111:function(t,e,r){var n=r(614);t.exports=function(t){return"object"==typeof t?null!==t:n(t)}},1913:function(t){t.exports=!1},2190:function(t,e,r){var n=r(7854),o=r(5005),i=r(614),a=r(7976),u=r(3307),c=n.Object;t.exports=u?function(t){return"symbol"==typeof t}:function(t){var e=o("Symbol");return i(e)&&a(e.prototype,c(t))}},6244:function(t,e,r){var n=r(7466);t.exports=function(t){return n(t.length)}},133:function(t,e,r){var n=r(7392),o=r(7293);t.exports=!!Object.getOwnPropertySymbols&&!o((function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&n&&n<41}))},8536:function(t,e,r){var n=r(7854),o=r(614),i=r(2788),a=n.WeakMap;t.exports=o(a)&&/native code/.test(i(a))},30:function(t,e,r){var n,o=r(9670),i=r(6048),a=r(748),u=r(3501),c=r(490),f=r(317),s=r(6200),l=s("IE_PROTO"),p=function(){},v=function(t){return"<script>"+t+"</"+"script>"},h=function(t){t.write(v("")),t.close();var e=t.parentWindow.Object;return t=null,e},y=function(){try{n=new ActiveXObject("htmlfile")}catch(o){}var t,e;y="undefined"!=typeof document?document.domain&&n?h(n):((e=f("iframe")).style.display="none",c.appendChild(e),e.src=String("javascript:"),(t=e.contentWindow.document).open(),t.write(v("document.F=Object")),t.close(),t.F):h(n);for(var r=a.length;r--;)delete y.prototype[a[r]];return y()};u[l]=!0,t.exports=Object.create||function(t,e){var r;return null!==t?(p.prototype=o(t),r=new p,p.prototype=null,r[l]=t):r=y(),void 0===e?r:i(r,e)}},6048:function(t,e,r){var n=r(9781),o=r(3070),i=r(9670),a=r(5656),u=r(1956);t.exports=n?Object.defineProperties:function(t,e){i(t);for(var r,n=a(e),c=u(e),f=c.length,s=0;f>s;)o.f(t,r=c[s++],n[r]);return t}},3070:function(t,e,r){var n=r(7854),o=r(9781),i=r(4664),a=r(9670),u=r(4948),c=n.TypeError,f=Object.defineProperty;e.f=o?f:function(t,e,r){if(a(t),e=u(e),a(r),i)try{return f(t,e,r)}catch(n){}if("get"in r||"set"in r)throw c("Accessors not supported");return"value"in r&&(t[e]=r.value),t}},1236:function(t,e,r){var n=r(9781),o=r(6916),i=r(5296),a=r(9114),u=r(5656),c=r(4948),f=r(2597),s=r(4664),l=Object.getOwnPropertyDescriptor;e.f=n?l:function(t,e){if(t=u(t),e=c(e),s)try{return l(t,e)}catch(r){}if(f(t,e))return a(!o(i.f,t,e),t[e])}},8006:function(t,e,r){var n=r(6324),o=r(748).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return n(t,o)}},5181:function(t,e){e.f=Object.getOwnPropertySymbols},7976:function(t,e,r){var n=r(1702);t.exports=n({}.isPrototypeOf)},6324:function(t,e,r){var n=r(1702),o=r(2597),i=r(5656),a=r(1318).indexOf,u=r(3501),c=n([].push);t.exports=function(t,e){var r,n=i(t),f=0,s=[];for(r in n)!o(u,r)&&o(n,r)&&c(s,r);for(;e.length>f;)o(n,r=e[f++])&&(~a(s,r)||c(s,r));return s}},1956:function(t,e,r){var n=r(6324),o=r(748);t.exports=Object.keys||function(t){return n(t,o)}},5296:function(t,e){"use strict";var r={}.propertyIsEnumerable,n=Object.getOwnPropertyDescriptor,o=n&&!r.call({1:2},1);e.f=o?function(t){var e=n(this,t);return!!e&&e.enumerable}:r},2140:function(t,e,r){var n=r(7854),o=r(6916),i=r(614),a=r(111),u=n.TypeError;t.exports=function(t,e){var r,n;if("string"===e&&i(r=t.toString)&&!a(n=o(r,t)))return n;if(i(r=t.valueOf)&&!a(n=o(r,t)))return n;if("string"!==e&&i(r=t.toString)&&!a(n=o(r,t)))return n;throw u("Can't convert object to primitive value")}},3887:function(t,e,r){var n=r(5005),o=r(1702),i=r(8006),a=r(5181),u=r(9670),c=o([].concat);t.exports=n("Reflect","ownKeys")||function(t){var e=i.f(u(t)),r=a.f;return r?c(e,r(t)):e}},1320:function(t,e,r){var n=r(7854),o=r(614),i=r(2597),a=r(8880),u=r(3505),c=r(2788),f=r(9909),s=r(6530).CONFIGURABLE,l=f.get,p=f.enforce,v=String(String).split("String");(t.exports=function(t,e,r,c){var f,l=!!c&&!!c.unsafe,h=!!c&&!!c.enumerable,y=!!c&&!!c.noTargetGet,m=c&&void 0!==c.name?c.name:e;o(r)&&("Symbol("===String(m).slice(0,7)&&(m="["+String(m).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),(!i(r,"name")||s&&r.name!==m)&&a(r,"name",m),(f=p(r)).source||(f.source=v.join("string"==typeof m?m:""))),t!==n?(l?!y&&t[e]&&(h=!0):delete t[e],h?t[e]=r:a(t,e,r)):h?t[e]=r:u(e,r)})(Function.prototype,"toString",(function(){return o(this)&&l(this).source||c(this)}))},4488:function(t,e,r){var n=r(7854).TypeError;t.exports=function(t){if(null==t)throw n("Can't call method on "+t);return t}},3505:function(t,e,r){var n=r(7854),o=Object.defineProperty;t.exports=function(t,e){try{o(n,t,{value:e,configurable:!0,writable:!0})}catch(r){n[t]=e}return e}},6200:function(t,e,r){var n=r(2309),o=r(9711),i=n("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},5465:function(t,e,r){var n=r(7854),o=r(3505),i="__core-js_shared__",a=n[i]||o(i,{});t.exports=a},2309:function(t,e,r){var n=r(1913),o=r(5465);(t.exports=function(t,e){return o[t]||(o[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.19.3",mode:n?"pure":"global",copyright:"© 2021 Denis Pushkarev (zloirock.ru)"})},1400:function(t,e,r){var n=r(9303),o=Math.max,i=Math.min;t.exports=function(t,e){var r=n(t);return r<0?o(r+e,0):i(r,e)}},5656:function(t,e,r){var n=r(8361),o=r(4488);t.exports=function(t){return n(o(t))}},9303:function(t){var e=Math.ceil,r=Math.floor;t.exports=function(t){var n=+t;return n!=n||0===n?0:(n>0?r:e)(n)}},7466:function(t,e,r){var n=r(9303),o=Math.min;t.exports=function(t){return t>0?o(n(t),9007199254740991):0}},7908:function(t,e,r){var n=r(7854),o=r(4488),i=n.Object;t.exports=function(t){return i(o(t))}},7593:function(t,e,r){var n=r(7854),o=r(6916),i=r(111),a=r(2190),u=r(8173),c=r(2140),f=r(5112),s=n.TypeError,l=f("toPrimitive");t.exports=function(t,e){if(!i(t)||a(t))return t;var r,n=u(t,l);if(n){if(void 0===e&&(e="default"),r=o(n,t,e),!i(r)||a(r))return r;throw s("Can't convert object to primitive value")}return void 0===e&&(e="number"),c(t,e)}},4948:function(t,e,r){var n=r(7593),o=r(2190);t.exports=function(t){var e=n(t,"string");return o(e)?e:e+""}},1694:function(t,e,r){var n={};n[r(5112)("toStringTag")]="z",t.exports="[object z]"===String(n)},6330:function(t,e,r){var n=r(7854).String;t.exports=function(t){try{return n(t)}catch(e){return"Object"}}},9711:function(t,e,r){var n=r(1702),o=0,i=Math.random(),a=n(1..toString);t.exports=function(t){return"Symbol("+(void 0===t?"":t)+")_"+a(++o+i,36)}},3307:function(t,e,r){var n=r(133);t.exports=n&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},5112:function(t,e,r){var n=r(7854),o=r(2309),i=r(2597),a=r(9711),u=r(133),c=r(3307),f=o("wks"),s=n.Symbol,l=s&&s.for,p=c?s:s&&s.withoutSetter||a;t.exports=function(t){if(!i(f,t)||!u&&"string"!=typeof f[t]){var e="Symbol."+t;u&&i(s,t)?f[t]=s[t]:f[t]=c&&l?l(e):p(e)}return f[t]}},4944:function(t,e,r){"use strict";var n=r(2109),o=r(6790),i=r(7908),a=r(6244),u=r(9303),c=r(5417);n({target:"Array",proto:!0},{flat:function(){var t=arguments.length?arguments[0]:void 0,e=i(this),r=a(e),n=c(e,0);return n.length=o(n,e,e,r,0,void 0===t?1:u(t)),n}})},3792:function(t,e,r){r(1223)("flat")},8768:function(t,e,r){"use strict";r.d(e,{Z:function(){return h}});var n={};r.r(n),r.d(n,{flexContainer:function(){return i}});var o=r(7294),i="NavBar-module--flex-container--10edZ",a="Home",u="/",c="Resume",f="/resume",s="Work",l="/work",p="Projects",v="/projects",h=function(){return o.createElement("div",{className:"flex-container"},o.createElement("div",{className:"name"},o.createElement("a",null,"John Nguyen")),o.createElement("div",{style:n},o.createElement("ul",null,o.createElement("li",null,o.createElement("a",{href:v},p)),o.createElement("li",null,o.createElement("a",{href:l},s)),o.createElement("li",null,o.createElement("a",{href:f},c)),o.createElement("li",null,o.createElement("a",{href:u},a)))))}},722:function(t,e,r){"use strict";r.r(e),r.d(e,{default:function(){return F}});var n=r(7294),o=r(8768),i=r(3433);var a=r(9199),u=r(181);function c(t){return function(t){if(Array.isArray(t))return t}(t)||(0,a.Z)(t)||(0,u.Z)(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(t,e,r,n,o,i,a){try{var u=t[i](a),c=u.value}catch(f){return void r(f)}u.done?e(c):Promise.resolve(c).then(n,o)}function s(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var i=t.apply(e,r);function a(t){f(i,n,o,a,u,"next",t)}function u(t){f(i,n,o,a,u,"throw",t)}a(void 0)}))}}r(4944),r(3792);var l=r(7757),p=r.n(l),v=p().mark(k),h=p().mark(_),y=p().mark(L);function m(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=function(t,e){if(!t)return;if("string"==typeof t)return d(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return d(t,e)}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var n=0,o=function(){};return{s:o,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,u=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return a=t.done,t},e:function(t){u=!0,i=t},f:function(){try{a||null==r.return||r.return()}finally{if(u)throw i}}}}function d(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function g(t){return x.apply(this,arguments)}function x(){return x=s(p().mark((function t(e){var r,n,o,i,a,u,c=arguments;return p().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:for(r=c.length,n=new Array(r>1?r-1:0),o=1;o<r;o++)n[o-1]=c[o];i=0,a=n;case 2:if(!(i<a.length)){t.next=21;break}u=a[i],t.t0=typeof u,t.next="string"===t.t0?7:"number"===t.t0?10:"function"===t.t0?13:16;break;case 7:return t.next=9,b(e,u);case 9:return t.abrupt("break",18);case 10:return t.next=12,E(u);case 12:return t.abrupt("break",18);case 13:return t.next=15,u.apply(void 0,[e].concat(n));case 15:return t.abrupt("break",18);case 16:return t.next=18,u;case 18:i++,t.next=2;break;case 21:case"end":return t.stop()}}),t)}))),x.apply(this,arguments)}function b(t,e){return w.apply(this,arguments)}function w(){return(w=s(p().mark((function t(e,r){var n;return p().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=A(e.textContent,r),t.next=3,O(e,[].concat((0,i.Z)(L(e.textContent,n)),(0,i.Z)(_(r,n))));case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function E(t){return S.apply(this,arguments)}function S(){return(S=s(p().mark((function t(e){return p().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,new Promise((function(t){return setTimeout(t,e)}));case 2:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function O(t,e){return j.apply(this,arguments)}function j(){return j=s(p().mark((function t(e,r){var n,o,i,a=arguments;return p().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n=a.length>2&&void 0!==a[2]?a[2]:60,o=m(k(r)),t.prev=2,o.s();case 4:if((i=o.n()).done){t.next=11;break}return(0,i.value)(e),t.next=9,E(n+n*(Math.random()-.5));case 9:t.next=4;break;case 11:t.next=16;break;case 13:t.prev=13,t.t0=t.catch(2),o.e(t.t0);case 16:return t.prev=16,o.f(),t.finish(16);case 19:case"end":return t.stop()}}),t,null,[[2,13,16,19]])}))),j.apply(this,arguments)}function k(t){var e,r,n;return p().wrap((function(o){for(;;)switch(o.prev=o.next){case 0:e=m(t),o.prev=1,n=p().mark((function t(){var e;return p().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=r.value,t.next=3,function(t){return requestAnimationFrame((function(){return t.textContent=e}))};case 3:case"end":return t.stop()}}),t)})),e.s();case 4:if((r=e.n()).done){o.next=8;break}return o.delegateYield(n(),"t0",6);case 6:o.next=4;break;case 8:o.next=13;break;case 10:o.prev=10,o.t1=o.catch(1),e.e(o.t1);case 13:return o.prev=13,e.f(),o.finish(13);case 16:case"end":return o.stop()}}),v,null,[[1,10,13,16]])}function _(t){var e,r,n,o,i=arguments;return p().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:e=c(t),r=e.slice(0),n=i.length>1&&void 0!==i[1]?i[1]:0,o=i.length>2&&void 0!==i[2]?i[2]:r.length;case 3:if(!(n<o)){a.next=8;break}return a.next=6,r.slice(0,++n).join("");case 6:a.next=3;break;case 8:case"end":return a.stop()}}),h)}function L(t){var e,r,n,o,i=arguments;return p().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:e=c(t),r=e.slice(0),n=i.length>1&&void 0!==i[1]?i[1]:0,o=i.length>2&&void 0!==i[2]?i[2]:r.length;case 3:if(!(o>n)){a.next=8;break}return a.next=6,r.slice(0,--o).join("");case 6:a.next=3;break;case 8:case"end":return a.stop()}}),y)}function A(t,e){var r=c(e).slice(0);return[].concat((0,i.Z)(t),[NaN]).findIndex((function(t,e){return r[e]!==t}))}var P="styles_typicalWrapper__1_Uvh";!function(t,e){void 0===e&&(e={});var r=e.insertAt;if(t&&"undefined"!=typeof document){var n=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css","top"===r&&n.firstChild?n.insertBefore(o,n.firstChild):n.appendChild(o),o.styleSheet?o.styleSheet.cssText=t:o.appendChild(document.createTextNode(t))}}('.styles_typicalWrapper__1_Uvh::after {\n  content: "|";\n  animation: styles_blink__2CKyC 1s infinite step-start;\n}\n\n@keyframes styles_blink__2CKyC {\n  50% { opacity: 0; }\n}');var T=function(t){if(Array.isArray(t)){for(var e=0,r=Array(t.length);e<t.length;e++)r[e]=t[e];return r}return Array.from(t)},C=(0,n.memo)((function(t){var e=t.steps,r=t.loop,o=t.className,i=t.wrapper,a=void 0===i?"p":i,u=(0,n.useRef)(null),c=a,f=[P];return o&&f.unshift(o),(0,n.useEffect)((function(){r===1/0?g.apply(void 0,[u.current].concat(T(e),[g])):"number"==typeof r?g.apply(void 0,[u.current].concat(T(Array(r).fill(e).flat()))):g.apply(void 0,[u.current].concat(T(e)))})),n.createElement(c,{ref:u,className:f.join(" ")})})),N=function(){var t=(0,n.useState)(!1),e=t[0],r=t[1];return setTimeout((function(){r(!0)}),5e3),n.createElement("div",null,n.createElement(C,{className:"Intro-module--intro--Y1LB8",steps:["Hi there! I'm John- Sofware Developer, Web Developer & a human being."],wrapper:"p"}),e&&n.createElement("p",{className:"Intro-module--work--SjGBe"}," Currently work as Software Developer Co-op at WorkSafe BC. "),e&&n.createElement("p",{className:"Intro-module--study--UstXY"}," 4th year CS Student at SFU."))},F=function(){return n.createElement("main",null,n.createElement(o.Z,null),n.createElement(N,null))}},5666:function(t){var e=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",u=o.toStringTag||"@@toStringTag";function c(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(T){c=function(t,e,r){return t[e]=r}}function f(t,e,r,n){var o=e&&e.prototype instanceof m?e:m,i=Object.create(o.prototype),a=new L(n||[]);return i._invoke=function(t,e,r){var n=l;return function(o,i){if(n===v)throw new Error("Generator is already running");if(n===h){if("throw"===o)throw i;return P()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var u=j(a,r);if(u){if(u===y)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===l)throw n=h,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=v;var c=s(t,e,r);if("normal"===c.type){if(n=r.done?h:p,c.arg===y)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n=h,r.method="throw",r.arg=c.arg)}}}(t,r,a),i}function s(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(T){return{type:"throw",arg:T}}}t.wrap=f;var l="suspendedStart",p="suspendedYield",v="executing",h="completed",y={};function m(){}function d(){}function g(){}var x={};c(x,i,(function(){return this}));var b=Object.getPrototypeOf,w=b&&b(b(A([])));w&&w!==r&&n.call(w,i)&&(x=w);var E=g.prototype=m.prototype=Object.create(x);function S(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function O(t,e){function r(o,i,a,u){var c=s(t[o],t,i);if("throw"!==c.type){var f=c.arg,l=f.value;return l&&"object"==typeof l&&n.call(l,"__await")?e.resolve(l.__await).then((function(t){r("next",t,a,u)}),(function(t){r("throw",t,a,u)})):e.resolve(l).then((function(t){f.value=t,a(f)}),(function(t){return r("throw",t,a,u)}))}u(c.arg)}var o;this._invoke=function(t,n){function i(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(i,i):i()}}function j(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,j(t,r),"throw"===r.method))return y;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return y}var o=s(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,y;var i=o.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,y):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,y)}function k(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function _(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function L(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(k,this),this.reset(!0)}function A(t){if(t){var r=t[i];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return a.next=a}}return{next:P}}function P(){return{value:e,done:!0}}return d.prototype=g,c(E,"constructor",g),c(g,"constructor",d),d.displayName=c(g,u,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===d||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,c(t,u,"GeneratorFunction")),t.prototype=Object.create(E),t},t.awrap=function(t){return{__await:t}},S(O.prototype),c(O.prototype,a,(function(){return this})),t.AsyncIterator=O,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new O(f(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},S(E),c(E,u,"Generator"),c(E,i,(function(){return this})),c(E,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=A,L.prototype={constructor:L,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(_),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return u.type="throw",u.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],u=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var c=n.call(a,"catchLoc"),f=n.call(a,"finallyLoc");if(c&&f){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!f)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,y):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),y},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),_(r),y}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;_(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:A(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),y}},t}(t.exports);try{regeneratorRuntime=e}catch(r){"object"==typeof globalThis?globalThis.regeneratorRuntime=e:Function("r","regeneratorRuntime = r")(e)}}}]);
//# sourceMappingURL=component---src-pages-index-js-908303a8e02582119c20.js.map