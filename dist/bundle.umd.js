!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("react-tv"),require("react")):"function"==typeof define&&define.amd?define(["exports","react-tv","react"],t):t(e.ReactTVNavigation={},e["react-tv"],e.React)}(this,function(e,t,n){"use strict";function r(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function o(e,t){return e(t={exports:{}},t.exports),t.exports}t=t&&t.hasOwnProperty("default")?t.default:t,n=n&&n.hasOwnProperty("default")?n.default:n;var i=o(function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var n="function"==typeof Symbol&&Symbol.for,r=n?Symbol.for("react.element"):60103,o=n?Symbol.for("react.portal"):60106,i=n?Symbol.for("react.fragment"):60107,a=n?Symbol.for("react.strict_mode"):60108,u=n?Symbol.for("react.profiler"):60114,c=n?Symbol.for("react.provider"):60109,s=n?Symbol.for("react.context"):60110,f=n?Symbol.for("react.async_mode"):60111,l=n?Symbol.for("react.concurrent_mode"):60111,p=n?Symbol.for("react.forward_ref"):60112,d=n?Symbol.for("react.suspense"):60113,y=n?Symbol.for("react.suspense_list"):60120,v=n?Symbol.for("react.memo"):60115,h=n?Symbol.for("react.lazy"):60116,b=n?Symbol.for("react.fundamental"):60117,m=n?Symbol.for("react.responder"):60118;function g(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case r:switch(e=e.type){case f:case l:case i:case u:case a:case d:return e;default:switch(e=e&&e.$$typeof){case s:case p:case c:return e;default:return t}}case h:case v:case o:return t}}}function w(e){return g(e)===l}t.typeOf=g,t.AsyncMode=f,t.ConcurrentMode=l,t.ContextConsumer=s,t.ContextProvider=c,t.Element=r,t.ForwardRef=p,t.Fragment=i,t.Lazy=h,t.Memo=v,t.Portal=o,t.Profiler=u,t.StrictMode=a,t.Suspense=d,t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===i||e===l||e===u||e===a||e===d||e===y||"object"==typeof e&&null!==e&&(e.$$typeof===h||e.$$typeof===v||e.$$typeof===c||e.$$typeof===s||e.$$typeof===p||e.$$typeof===b||e.$$typeof===m)},t.isAsyncMode=function(e){return w(e)||g(e)===f},t.isConcurrentMode=w,t.isContextConsumer=function(e){return g(e)===s},t.isContextProvider=function(e){return g(e)===c},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===r},t.isForwardRef=function(e){return g(e)===p},t.isFragment=function(e){return g(e)===i},t.isLazy=function(e){return g(e)===h},t.isMemo=function(e){return g(e)===v},t.isPortal=function(e){return g(e)===o},t.isProfiler=function(e){return g(e)===u},t.isStrictMode=function(e){return g(e)===a},t.isSuspense=function(e){return g(e)===d}});r(i);i.typeOf,i.AsyncMode,i.ConcurrentMode,i.ContextConsumer,i.ContextProvider,i.Element,i.ForwardRef,i.Fragment,i.Lazy,i.Memo,i.Portal,i.Profiler,i.StrictMode,i.Suspense,i.isValidElementType,i.isAsyncMode,i.isConcurrentMode,i.isContextConsumer,i.isContextProvider,i.isElement,i.isForwardRef,i.isFragment,i.isLazy,i.isMemo,i.isPortal,i.isProfiler,i.isStrictMode,i.isSuspense;var a=o(function(e,t){"production"!==process.env.NODE_ENV&&function(){Object.defineProperty(t,"__esModule",{value:!0});var e="function"==typeof Symbol&&Symbol.for,n=e?Symbol.for("react.element"):60103,r=e?Symbol.for("react.portal"):60106,o=e?Symbol.for("react.fragment"):60107,i=e?Symbol.for("react.strict_mode"):60108,a=e?Symbol.for("react.profiler"):60114,u=e?Symbol.for("react.provider"):60109,c=e?Symbol.for("react.context"):60110,s=e?Symbol.for("react.async_mode"):60111,f=e?Symbol.for("react.concurrent_mode"):60111,l=e?Symbol.for("react.forward_ref"):60112,p=e?Symbol.for("react.suspense"):60113,d=e?Symbol.for("react.suspense_list"):60120,y=e?Symbol.for("react.memo"):60115,v=e?Symbol.for("react.lazy"):60116,h=e?Symbol.for("react.fundamental"):60117,b=e?Symbol.for("react.responder"):60118;var m=function(e,t){if(void 0===t)throw new Error("`lowPriorityWarning(condition, format, ...args)` requires a warning message argument");if(!e){for(var n=arguments.length,r=Array(n>2?n-2:0),o=2;o<n;o++)r[o-2]=arguments[o];(function(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var o=0,i="Warning: "+e.replace(/%s/g,function(){return n[o++]});"undefined"!=typeof console&&console.warn(i);try{throw new Error(i)}catch(e){}}).apply(void 0,[t].concat(r))}};function g(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case n:var d=e.type;switch(d){case s:case f:case o:case a:case i:case p:return d;default:var h=d&&d.$$typeof;switch(h){case c:case l:case u:return h;default:return t}}case v:case y:case r:return t}}}var w=s,E=f,O=c,P=u,_=n,S=l,j=o,x=v,F=y,M=r,C=a,T=i,k=p,N=!1;function I(e){return g(e)===f}t.typeOf=g,t.AsyncMode=w,t.ConcurrentMode=E,t.ContextConsumer=O,t.ContextProvider=P,t.Element=_,t.ForwardRef=S,t.Fragment=j,t.Lazy=x,t.Memo=F,t.Portal=M,t.Profiler=C,t.StrictMode=T,t.Suspense=k,t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===o||e===f||e===a||e===i||e===p||e===d||"object"==typeof e&&null!==e&&(e.$$typeof===v||e.$$typeof===y||e.$$typeof===u||e.$$typeof===c||e.$$typeof===l||e.$$typeof===h||e.$$typeof===b)},t.isAsyncMode=function(e){return N||(N=!0,m(!1,"The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),I(e)||g(e)===s},t.isConcurrentMode=I,t.isContextConsumer=function(e){return g(e)===c},t.isContextProvider=function(e){return g(e)===u},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===n},t.isForwardRef=function(e){return g(e)===l},t.isFragment=function(e){return g(e)===o},t.isLazy=function(e){return g(e)===v},t.isMemo=function(e){return g(e)===y},t.isPortal=function(e){return g(e)===r},t.isProfiler=function(e){return g(e)===a},t.isStrictMode=function(e){return g(e)===i},t.isSuspense=function(e){return g(e)===p}}()});r(a);a.typeOf,a.AsyncMode,a.ConcurrentMode,a.ContextConsumer,a.ContextProvider,a.Element,a.ForwardRef,a.Fragment,a.Lazy,a.Memo,a.Portal,a.Profiler,a.StrictMode,a.Suspense,a.isValidElementType,a.isAsyncMode,a.isConcurrentMode,a.isContextConsumer,a.isContextProvider,a.isElement,a.isForwardRef,a.isFragment,a.isLazy,a.isMemo,a.isPortal,a.isProfiler,a.isStrictMode,a.isSuspense;var u=o(function(e){"production"===process.env.NODE_ENV?e.exports=i:e.exports=a}),c=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable;var l=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map(function(e){return t[e]}).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach(function(e){r[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(e){return!1}}()?Object.assign:function(e,t){for(var n,r,o=function(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),i=1;i<arguments.length;i++){for(var a in n=Object(arguments[i]))s.call(n,a)&&(o[a]=n[a]);if(c){r=c(n);for(var u=0;u<r.length;u++)f.call(n,r[u])&&(o[r[u]]=n[r[u]])}}return o},p="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",d=function(){};if("production"!==process.env.NODE_ENV){var y=p,v={},h=Function.call.bind(Object.prototype.hasOwnProperty);d=function(e){var t="Warning: "+e;"undefined"!=typeof console&&console.error(t);try{throw new Error(t)}catch(e){}}}function b(e,t,n,r,o){if("production"!==process.env.NODE_ENV)for(var i in e)if(h(e,i)){var a;try{if("function"!=typeof e[i]){var u=Error((r||"React class")+": "+n+" type `"+i+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[i]+"`.");throw u.name="Invariant Violation",u}a=e[i](t,i,r,n,null,y)}catch(e){a=e}if(!a||a instanceof Error||d((r||"React class")+": type specification of "+n+" `"+i+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof a+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."),a instanceof Error&&!(a.message in v)){v[a.message]=!0;var c=o?o():"";d("Failed "+n+" type: "+a.message+(null!=c?c:""))}}}b.resetWarningCache=function(){"production"!==process.env.NODE_ENV&&(v={})};var m=b,g=Function.call.bind(Object.prototype.hasOwnProperty),w=function(){};function E(){return null}"production"!==process.env.NODE_ENV&&(w=function(e){var t="Warning: "+e;"undefined"!=typeof console&&console.error(t);try{throw new Error(t)}catch(e){}});var O=function(e,t){var n="function"==typeof Symbol&&Symbol.iterator,r="@@iterator";var o="<<anonymous>>",i={array:f("array"),bool:f("boolean"),func:f("function"),number:f("number"),object:f("object"),string:f("string"),symbol:f("symbol"),any:s(E),arrayOf:function(e){return s(function(t,n,r,o,i){if("function"!=typeof e)return new c("Property `"+i+"` of component `"+r+"` has invalid PropType notation inside arrayOf.");var a=t[n];if(!Array.isArray(a)){var u=y(a);return new c("Invalid "+o+" `"+i+"` of type `"+u+"` supplied to `"+r+"`, expected an array.")}for(var s=0;s<a.length;s++){var f=e(a,s,r,o,i+"["+s+"]",p);if(f instanceof Error)return f}return null})},element:function(){return s(function(t,n,r,o,i){var a=t[n];if(!e(a)){var u=y(a);return new c("Invalid "+o+" `"+i+"` of type `"+u+"` supplied to `"+r+"`, expected a single ReactElement.")}return null})}(),elementType:function(){return s(function(e,t,n,r,o){var i=e[t];if(!u.isValidElementType(i)){var a=y(i);return new c("Invalid "+r+" `"+o+"` of type `"+a+"` supplied to `"+n+"`, expected a single ReactElement type.")}return null})}(),instanceOf:function(e){return s(function(t,n,r,i,a){if(!(t[n]instanceof e)){var u=e.name||o,s=function(e){if(!e.constructor||!e.constructor.name)return o;return e.constructor.name}(t[n]);return new c("Invalid "+i+" `"+a+"` of type `"+s+"` supplied to `"+r+"`, expected instance of `"+u+"`.")}return null})},node:function(){return s(function(e,t,n,r,o){if(!d(e[t]))return new c("Invalid "+r+" `"+o+"` supplied to `"+n+"`, expected a ReactNode.");return null})}(),objectOf:function(e){return s(function(t,n,r,o,i){if("function"!=typeof e)return new c("Property `"+i+"` of component `"+r+"` has invalid PropType notation inside objectOf.");var a=t[n],u=y(a);if("object"!==u)return new c("Invalid "+o+" `"+i+"` of type `"+u+"` supplied to `"+r+"`, expected an object.");for(var s in a)if(g(a,s)){var f=e(a,s,r,o,i+"."+s,p);if(f instanceof Error)return f}return null})},oneOf:function(e){if(!Array.isArray(e))return"production"!==process.env.NODE_ENV&&(arguments.length>1?w("Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."):w("Invalid argument supplied to oneOf, expected an array.")),E;return s(function(t,n,r,o,i){for(var u=t[n],s=0;s<e.length;s++)if(a(u,e[s]))return null;var f=JSON.stringify(e,function(e,t){var n=v(t);return"symbol"===n?String(t):t});return new c("Invalid "+o+" `"+i+"` of value `"+String(u)+"` supplied to `"+r+"`, expected one of "+f+".")})},oneOfType:function(e){if(!Array.isArray(e))return"production"!==process.env.NODE_ENV&&w("Invalid argument supplied to oneOfType, expected an instance of array."),E;for(var t=0;t<e.length;t++){var n=e[t];if("function"!=typeof n)return w("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+h(n)+" at index "+t+"."),E}return s(function(t,n,r,o,i){for(var a=0;a<e.length;a++){var u=e[a];if(null==u(t,n,r,o,i,p))return null}return new c("Invalid "+o+" `"+i+"` supplied to `"+r+"`.")})},shape:function(e){return s(function(t,n,r,o,i){var a=t[n],u=y(a);if("object"!==u)return new c("Invalid "+o+" `"+i+"` of type `"+u+"` supplied to `"+r+"`, expected `object`.");for(var s in e){var f=e[s];if(f){var l=f(a,s,r,o,i+"."+s,p);if(l)return l}}return null})},exact:function(e){return s(function(t,n,r,o,i){var a=t[n],u=y(a);if("object"!==u)return new c("Invalid "+o+" `"+i+"` of type `"+u+"` supplied to `"+r+"`, expected `object`.");var s=l({},t[n],e);for(var f in s){var d=e[f];if(!d)return new c("Invalid "+o+" `"+i+"` key `"+f+"` supplied to `"+r+"`.\nBad object: "+JSON.stringify(t[n],null,"  ")+"\nValid keys: "+JSON.stringify(Object.keys(e),null,"  "));var v=d(a,f,r,o,i+"."+f,p);if(v)return v}return null})}};function a(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}function c(e){this.message=e,this.stack=""}function s(e){if("production"!==process.env.NODE_ENV)var n={},r=0;function i(i,a,u,s,f,l,d){if(s=s||o,l=l||u,d!==p){if(t){var y=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw y.name="Invariant Violation",y}if("production"!==process.env.NODE_ENV&&"undefined"!=typeof console){var v=s+":"+u;!n[v]&&r<3&&(w("You are manually calling a React.PropTypes validation function for the `"+l+"` prop on `"+s+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),n[v]=!0,r++)}}return null==a[u]?i?null===a[u]?new c("The "+f+" `"+l+"` is marked as required in `"+s+"`, but its value is `null`."):new c("The "+f+" `"+l+"` is marked as required in `"+s+"`, but its value is `undefined`."):null:e(a,u,s,f,l)}var a=i.bind(null,!1);return a.isRequired=i.bind(null,!0),a}function f(e){return s(function(t,n,r,o,i,a){var u=t[n];return y(u)!==e?new c("Invalid "+o+" `"+i+"` of type `"+v(u)+"` supplied to `"+r+"`, expected `"+e+"`."):null})}function d(t){switch(typeof t){case"number":case"string":case"undefined":return!0;case"boolean":return!t;case"object":if(Array.isArray(t))return t.every(d);if(null===t||e(t))return!0;var o=function(e){var t=e&&(n&&e[n]||e[r]);if("function"==typeof t)return t}(t);if(!o)return!1;var i,a=o.call(t);if(o!==t.entries){for(;!(i=a.next()).done;)if(!d(i.value))return!1}else for(;!(i=a.next()).done;){var u=i.value;if(u&&!d(u[1]))return!1}return!0;default:return!1}}function y(e){var t=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":function(e,t){return"symbol"===e||!!t&&("Symbol"===t["@@toStringTag"]||"function"==typeof Symbol&&t instanceof Symbol)}(t,e)?"symbol":t}function v(e){if(void 0===e||null===e)return""+e;var t=y(e);if("object"===t){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return t}function h(e){var t=v(e);switch(t){case"array":case"object":return"an "+t;case"boolean":case"date":case"regexp":return"a "+t;default:return t}}return c.prototype=Error.prototype,i.checkPropTypes=m,i.resetWarningCache=m.resetWarningCache,i.PropTypes=i,i};function P(){}function _(){}_.resetWarningCache=P;var S=o(function(e){if("production"!==process.env.NODE_ENV){var t=u;e.exports=O(t.isElement,!0)}else e.exports=function(){function e(e,t,n,r,o,i){if(i!==p){var a=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:_,resetWarningCache:P};return n.PropTypes=n,n}()}),j=r(o(function(e,t){t.__esModule=!0,t.default=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];if(0===t.length)return function(e){return e};if(1===t.length)return t[0];return t.reduce(function(e,t){return function(){return e(t.apply(void 0,arguments))}})}})),x=o(function(e,t){t.__esModule=!0;t.default=function(e,t){return function(n){return n[e]=t,n}}});r(x);var F=o(function(e,t){t.__esModule=!0;var n,r=(n=x)&&n.__esModule?n:{default:n};t.default=function(e){return(0,r.default)("displayName",e)}});r(F);var M=o(function(e,t){t.__esModule=!0;t.default=function(e){return"string"==typeof e?e:e?e.displayName||e.name||"Component":void 0}});r(M);var C=o(function(e,t){t.__esModule=!0;var n,r=(n=M)&&n.__esModule?n:{default:n};t.default=function(e,t){return t+"("+(0,r.default)(e)+")"}});r(C);var T=r(o(function(e,t){t.__esModule=!0;var r=i(F),o=i(C);function i(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){return function(t){var i=(0,n.createFactory)(t),a=function(t){return i(e(t))};return"production"!==process.env.NODE_ENV?(0,r.default)((0,o.default)(t,"mapProps"))(a):a}}})),k=r(o(function(e,t){t.__esModule=!0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=a(F),i=a(C);function a(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){return function(t){var a=(0,n.createFactory)(t);"production"!==process.env.NODE_ENV&&e.hasOwnProperty("render")&&console.error("lifecycle() does not support the render method; its behavior is to pass all props and state to the base component.");var u=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.render=function(){return a(r({},this.props,this.state))},t}(n.Component);return Object.keys(e).forEach(function(t){return u.prototype[t]=e[t]}),"production"!==process.env.NODE_ENV?(0,o.default)((0,i.default)(t,"lifecycle"))(u):u}}})),N=r(o(function(e,t){t.__esModule=!0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=a(F),i=a(C);function a(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){return function(t){var a=(0,n.createFactory)(t),u=function(e,t){return a(r({},e,t))};return u.contextTypes=e,"production"!==process.env.NODE_ENV?(0,o.default)((0,i.default)(t,"getContext"))(u):u}}})),I=r(o(function(e,t){t.__esModule=!0;var n,r=(n=x)&&n.__esModule?n:{default:n};t.default=function(e){return(0,r.default)("propTypes",e)}})),A=o(function(e,t){t.__esModule=!0;t.default=function(e,t){var n={};for(var r in e)e.hasOwnProperty(r)&&(n[r]=t(e[r],r));return n}});r(A);var $=r(o(function(e,t){t.__esModule=!0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=u(F),i=u(C),a=u(A);function u(e){return e&&e.__esModule?e:{default:e}}function c(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}t.default=function(e){return function(t){var u=(0,n.createFactory)(t),s=function(e){function t(){var n,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var o=arguments.length,i=Array(o),a=0;a<o;a++)i[a]=arguments[a];return n=r=c(this,e.call.apply(e,[this].concat(i))),f.call(r),c(r,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.componentWillReceiveProps=function(){this.cachedHandlers={}},t.prototype.render=function(){return u(r({},this.props,this.handlers))},t}(n.Component),f=function(){var t=this;this.cachedHandlers={},this.handlers=(0,a.default)("function"==typeof e?e(this.props):e,function(e,n){return function(){var r=t.cachedHandlers[n];if(r)return r.apply(void 0,arguments);var o=e(t.props);return t.cachedHandlers[n]=o,"production"!==process.env.NODE_ENV&&"function"!=typeof o&&console.error("withHandlers(): Expected a map of higher-order functions. Refer to the docs for more info."),o.apply(void 0,arguments)}})};return"production"!==process.env.NODE_ENV?(0,o.default)((0,i.default)(t,"withHandlers"))(s):s}}})),R="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},D=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},V={selector:"",straightOnly:!1,straightOverlapThreshold:.5,rememberSource:!1,disabled:!1,defaultElement:"",enterTo:"",leaveFor:null,restrict:"self-first",tabIndexIgnoreList:[],navigableFilter:null},L={37:"left",38:"up",39:"right",40:"down"},H={left:"right",up:"down",right:"left",down:"up"},W="sn:",q="section-",z=0,U=!1,K=!1,Y={},B=0,J="",G="",Q=!1,X=Element.prototype.matches||Element.prototype.matchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.webkitMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector||function(e){var t=(this.parentNode||this.document).querySelectorAll(e);return[].slice.call(t).indexOf(this)>=0};function Z(e){var t=e.getBoundingClientRect(),n={left:t.left,top:t.top,right:t.right,bottom:t.bottom,width:t.width,height:t.height,parent:e.parentElement};return n.element=e,n.center={x:n.left+Math.floor(n.width/2),y:n.top+Math.floor(n.height/2)},n.center.left=n.center.right=n.center.x,n.center.top=n.center.bottom=n.center.y,n}var ee=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;return e.left-t.left<-n},te=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;return e.left-t.left>n},ne=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;return e.top-t.top>n},re=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;return e.top-t.top<-n};function oe(e,t,n,r){if(!(e&&t&&n&&n.length))return null;for(var o,i,a=Z(e),u=e.getAttribute("data-layer")||1,c=[],s=0;s<n.length;s++){var f=Z(n[s]),l=n[s].getAttribute("data-layer")||1;if(f&&l===u)switch(t){case"right":ee(a,f,20)&&c.push(f);break;case"left":te(a,f,20)&&c.push(f);break;case"up":ne(a,f,20)&&c.push(f);break;case"down":re(a,f,20)&&c.push(f)}}return(i=(o=["up","down"].indexOf(t)>-1?c.map(function(e){return D({},e,{distance:Math.hypot(e.left-a.left,e.top-a.top)})}).sort(function(e,t){return e.distance-t.distance}):c.filter(function(e){return Math.abs(a.top-e.top)<20}).map(function(e){return D({},e,{distance:Math.hypot(e.left-a.left,e.top-a.top)})}).sort(function(e,t){return e.distance-t.distance})).filter(function(e){return e.parent===a.parent})).length?i[0].element:o[0]?o[0].element:e}function ie(e){return"string"==typeof e?[].slice.call(document.querySelectorAll(e)):"object"===(void 0===e?"undefined":R(e))&&e.length?[].slice.call(e):"object"===(void 0===e?"undefined":R(e))&&1===e.nodeType?[e]:[]}function ae(e,t){return"string"==typeof t?X.call(e,t):"object"===(void 0===t?"undefined":R(t))&&t.length?t.indexOf(e)>=0:"object"===(void 0===t?"undefined":R(t))&&1===t.nodeType&&e===t}function ue(){var e=document.activeElement;if(e&&e!==document.body)return e}function ce(e){e=e||{};for(var t=1;t<arguments.length;t++)if(arguments[t])for(var n in arguments[t])arguments[t].hasOwnProperty(n)&&void 0!==arguments[t][n]&&(e[n]=arguments[t][n]);return e}function se(e,t){Array.isArray(t)||(t=[t]);for(var n,r=0;r<t.length;r++)(n=e.indexOf(t[r]))>=0&&e.splice(n,1);return e}function fe(e,t,n){if(!e||!t||!Y[t]||Y[t].disabled)return!1;if(e.offsetWidth<=0&&e.offsetHeight<=0||e.hasAttribute("disabled"))return!1;if(n&&!ae(e,Y[t].selector))return!1;if("function"==typeof Y[t].navigableFilter){if(!1===Y[t].navigableFilter(e,t))return!1}else if("function"==typeof V.navigableFilter&&!1===V.navigableFilter(e,t))return!1;return!0}function le(e){for(var t in Y)if(!Y[t].disabled&&ae(e,Y[t].selector))return t}function pe(e){return ie(Y[e].selector).filter(function(t){return fe(t,e)})}function de(e){var t=Y[e].defaultElement;return t?("string"==typeof t&&(t=ie(t)[0]),fe(t,e,!0)?t:null):null}function ye(e){var t=Y[e]&&Y[e].lastFocusedElement;return fe(t,e,!0)?t:null}function ve(e,t,n,r){arguments.length<4&&(r=!0);var o=document.createEvent("CustomEvent");return o.initCustomEvent(W+t,!0,r,n),e.dispatchEvent(o)}function he(e,t,n){if(!e)return!1;var r=ue(),o="true"===e.getAttribute("data-prevent-scroll"),i=function(){e.focus({preventScroll:o}),be(e,t)};if(Q)return i(),!0;if(Q=!0,K)return i(),Q=!1,!0;if(r){var a={nextElement:e,nextSectionId:t,direction:n,native:!1};if(!ve(r,"willunfocus",a))return Q=!1,!1;r.blur(),ve(r,"unfocused",a,!1)}var u={previousElement:r,sectionId:t,direction:n,native:!1};return ve(e,"willfocus",u)?(e.focus({preventScroll:o}),ve(e,"focused",u,!1),Q=!1,be(e,t),!0):(Q=!1,!1)}function be(e,t){t||(t=le(e)),t&&(Y[t].lastFocusedElement=e,G=t)}function me(e,t){if("@"==e.charAt(0)){return 1==e.length?ge():ge(e.substr(1))}else{var n=ie(e)[0];if(n){var r=le(n);if(fe(n,r))return he(n,r,t)}}return!1}function ge(e){var t=[],n=function(e){e&&t.indexOf(e)<0&&Y[e]&&!Y[e].disabled&&t.push(e)};e?n(e):(n(J),n(G),Object.keys(Y).map(n));for(var r=0;r<t.length;r++){var o,i=t[r];if(o="last-focused"==Y[i].enterTo?ye(i)||de(i)||pe(i)[0]:de(i)||ye(i)||pe(i)[0])return he(o,i)}return!1}function we(e,t){ve(e,"navigatefailed",{direction:t},!1)}function Ee(e,t){if(Y[e].leaveFor&&void 0!==Y[e].leaveFor[t]){var n=Y[e].leaveFor[t];if("string"==typeof n)return""===n?null:me(n,t);var r=le(n);if(fe(n,r))return he(n,r,t)}return!1}function Oe(e,t,n){var r=t.getAttribute("data-sn-"+e);if("string"==typeof r)return!(""===r||!me(r,e))||(we(t,e),!1);var o={},i=[];for(var a in Y)o[a]=pe(a),i=i.concat(o[a]);var u,c=ce({},V,Y[n]);if("self-only"==c.restrict||"self-first"==c.restrict){var s=o[n];(u=oe(t,e,se(s,t)))||"self-first"!=c.restrict||(u=oe(t,e,se(i,s)))}else u=oe(t,e,se(i,t));if(u){Y[n].previous={target:t,destination:u,reverse:H[e]};var f=le(u);if(n!=f){var l,p=Ee(n,e);if(p)return!0;if(null===p)return we(t,e),!1;switch(Y[f].enterTo){case"last-focused":l=ye(f)||de(f);break;case"default-element":l=de(f)}l&&(u=l)}return he(u,f,e)}return!!Ee(n,e)||(we(t,e),!1)}function Pe(e){if(!(!B||K||e.altKey||e.ctrlKey||e.metaKey||e.shiftKey)){var t,n=function(){return e.preventDefault(),e.stopPropagation(),!1},r=L[e.keyCode];if(!r)return 13==e.keyCode&&(t=ue())&&le(t)&&!ve(t,"enter-down")?n():void 0;if(!(t=ue())&&(G&&(t=ye(G)),!t))return ge(),n();var o=le(t);if(o)return ve(t,"willmove",{direction:r,sectionId:o,cause:"keydown"})&&Oe(r,t,o),n()}}function _e(e){if(!(e.altKey||e.ctrlKey||e.metaKey||e.shiftKey)&&!K&&B&&13==e.keyCode){var t=ue();t&&le(t)&&(ve(t,"enter-up")||(e.preventDefault(),e.stopPropagation()))}}function Se(e){var t=e.target;if(t!==window&&t!==document&&B&&!Q){var n=le(t);if(n){if(K)return void be(t,n);var r={sectionId:n,native:!0};ve(t,"willfocus",r)?(ve(t,"focused",r,!1),be(t,n)):(Q=!0,t.blur(),Q=!1)}}}function je(e){var t=e.target;if(t!==window&&t!==document&&!K&&B&&!Q&&le(t)){var n={native:!0};ve(t,"willunfocus",n)?ve(t,"unfocused",n,!1):(Q=!0,setTimeout(function(){var e="true"===t.getAttribute("data-prevent-scroll");t.focus({preventScroll:e}),Q=!1}))}}var xe={init:function(){U||(window.addEventListener("keydown",Pe),window.addEventListener("keyup",_e),window.addEventListener("focus",Se,!0),window.addEventListener("blur",je,!0),U=!0)},uninit:function(){window.removeEventListener("blur",je,!0),window.removeEventListener("focus",Se,!0),window.removeEventListener("keyup",_e),window.removeEventListener("keydown",Pe),xe.clear(),z=0,U=!1},clear:function(){Y={},B=0,J="",G="",Q=!1},set:function(){var e,t;if("object"===R(arguments[0]))t=arguments[0];else{if("string"!=typeof arguments[0]||"object"!==R(arguments[1]))return;if(e=arguments[0],t=arguments[1],!Y[e])throw new Error('Section "'+e+"\" doesn't exist!")}for(var n in t)void 0!==V[n]&&(e?Y[e][n]=t[n]:void 0!==t[n]&&(V[n]=t[n]));e&&(Y[e]=ce({},Y[e]))},add:function(){var e,t={};if("object"===R(arguments[0])?t=arguments[0]:"string"==typeof arguments[0]&&"object"===R(arguments[1])&&(e=arguments[0],t=arguments[1]),e||(e="string"==typeof t.id?t.id:function(){for(var e;e=q+String(++z),Y[e];);return e}()),Y[e])throw new Error('Section "'+e+'" has already existed!');return Y[e]={},B++,xe.set(e,t),e},remove:function(e){if(!e||"string"!=typeof e)throw new Error('Please assign the "sectionId"!');return!!Y[e]&&(Y[e]=void 0,Y=ce({},Y),B--,!0)},disable:function(e){return!!Y[e]&&(Y[e].disabled=!0,!0)},enable:function(e){return!!Y[e]&&(Y[e].disabled=!1,!0)},pause:function(){K=!0},resume:function(){K=!1},focus:function(e,t){var n=!1;void 0===t&&"boolean"==typeof e&&(t=e,e=void 0);var r=!K&&t;if(r&&xe.pause(),e)if("string"==typeof e)n=Y[e]?ge(e):me(e);else{var o=le(e);fe(e,o)&&(n=he(e,o))}else n=ge();return r&&xe.resume(),n},move:function(e,t){if(e=e.toLowerCase(),!H[e])return!1;var n=t?ie(t)[0]:ue();if(!n)return!1;var r=le(n);return!!r&&(!!ve(n,"willmove",{direction:e,sectionId:r,cause:"api"})&&Oe(e,n,r))},makeFocusable:function(e){var t=function(e){var t=void 0!==e.tabIndexIgnoreList?e.tabIndexIgnoreList:V.tabIndexIgnoreList;ie(e.selector).forEach(function(e){ae(e,t)||e.getAttribute("tabindex")||e.setAttribute("tabindex","-1")})};if(e){if(!Y[e])throw new Error('Section "'+e+"\" doesn't exist!");t(Y[e])}else for(var n in Y)t(Y[n])},setDefaultSection:function(e){if(e){if(!Y[e])throw new Error('Section "'+e+"\" doesn't exist!");J=e}else J=""},getSectionId:le},Fe=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var Me=new(function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.handleFocused=this.handleFocused.bind(this),this.destroy(),this.bindFocusEvent()}return Fe(e,[{key:"init",value:function(e){this.setState||(this.setState=e),xe.init(),xe.focus(),this.bindFocusEvent()}},{key:"destroy",value:function(){this.focusedPath=null,this.setState=null,xe.uninit(),this.unbindFocusEvent()}},{key:"bindFocusEvent",value:function(){this.listening||(this.listening=!0,document.addEventListener("sn:focused",this.handleFocused))}},{key:"unbindFocusEvent",value:function(){document.removeEventListener("sn:focused",this.handleFocused),this.listening=!1}},{key:"handleFocused",value:function(e){this.focusedPath!==e.detail.sectionId&&(this.setState(e.detail.sectionId),xe.focus(e.detail.sectionId))}},{key:"getCurrentFocusedPath",value:function(){return this.focusedPath}},{key:"setCurrentFocusedPath",value:function(e){this.focusedPath=e,xe.focus(e)}},{key:"addFocusable",value:function(e,t){var n=t.focusPath,r=t.onEnterPressHandler;if(e&&!xe.getSectionId(e)){this.removeFocusable(e,{onEnterPressHandler:r});var o=[{selector:e}];n&&o.unshift(n),e.addEventListener("sn:enter-down",r);var i=xe.add.apply(xe,o);xe.makeFocusable(i)}}},{key:"removeFocusable",value:function(e,t){var n=t.onEnterPressHandler,r=xe.getSectionId(e);r&&(xe.remove(r),e.removeEventListener("sn:enter-down",n))}}]),e}()),Ce=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};var Te=j(I({focusPath:S.string.isRequired}),N({setFocus:S.func,currentFocusPath:S.string}),T(function(e){var t=e.currentFocusPath,n=e.focusPath,r=e.setFocus,o=void 0===r?function(){}:r,i=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(e,["currentFocusPath","focusPath","setFocus"]);return Ce({focused:t===n,setFocus:o.bind(null,n),focusPath:n},i)}),$({onEnterPressHandler:function(e){var t=e.onEnterPress;return void 0===t?function(){}:t}}),k({addFocusable:function(){var e=this.props,n=e.focusPath,r=e.onEnterPressHandler;Me.addFocusable(t.findDOMNode(this),{focusPath:n,onEnterPressHandler:r})},componentDidMount:function(){this.addFocusable()},componentDidUpdate:function(){this.addFocusable()},componentWillUnmount:function(){Me.removeFocusable(t.findDOMNode(this),{onEnterPressHandler:this.props.onEnterPressHandler})}})),ke=r(o(function(e,t){t.__esModule=!0;var r=i(F),o=i(C);function i(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}t.default=function(e,t){return function(i){var u=(0,n.createFactory)(i),c=function(e){function n(){var r,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n);for(var i=arguments.length,u=Array(i),c=0;c<i;c++)u[c]=arguments[c];return r=o=a(this,e.call.apply(e,[this].concat(u))),o.getChildContext=function(){return t(o.props)},a(o,r)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(n,e),n.prototype.render=function(){return u(this.props)},n}(n.Component);return c.childContextTypes=e,"production"!==process.env.NODE_ENV?(0,r.default)((0,o.default)(i,"withContext"))(c):c}}})),Ne=Object.prototype.hasOwnProperty;function Ie(e,t){return e===t?0!==e||0!==t||1/e==1/t:e!=e&&t!=t}var Ae=function(e,t){if(Ie(e,t))return!0;if("object"!=typeof e||null===e||"object"!=typeof t||null===t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(var o=0;o<n.length;o++)if(!Ne.call(t,n[o])||!Ie(e[n[o]],t[n[o]]))return!1;return!0},$e=o(function(e,t){t.__esModule=!0;var n,r=(n=Ae)&&n.__esModule?n:{default:n};t.default=r.default});r($e);var Re=j(r(o(function(e,t){t.__esModule=!0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=c(F),i=c(C),a=c($e),u=c(A);function c(e){return e&&e.__esModule?e:{default:e}}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}t.default=function(e,t){return function(c){var f=(0,n.createFactory)(c),l=function(e){function t(){var n,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var o=arguments.length,i=Array(o),a=0;a<o;a++)i[a]=arguments[a];return n=r=s(this,e.call.apply(e,[this].concat(i))),p.call(r),s(r,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e,t){var n=e!==this.props,r=!(0,a.default)(t,this.state);return n||r},t.prototype.render=function(){return f(r({},this.props,this.state,this.stateUpdaters))},t}(n.Component),p=function(){var n=this;this.state="function"==typeof e?e(this.props):e,this.stateUpdaters=(0,u.default)(t,function(e){return function(t){for(var r=arguments.length,o=Array(r>1?r-1:0),i=1;i<r;i++)o[i-1]=arguments[i];t&&"function"==typeof t.persist&&t.persist(),n.setState(function(n,r){return e(n,r).apply(void 0,[t].concat(o))})}})};return"production"!==process.env.NODE_ENV?(0,o.default)((0,i.default)(c,"withStateHandlers"))(l):l}}}))({currentFocusPath:Me.getCurrentFocusedPath()},{setFocus:function(e){var t=e.currentFocusPath;return function(e,n){var r=n||e;if(t!==r)return Me.setCurrentFocusedPath(r),{currentFocusPath:r}}}}),ke({setFocus:S.func,currentFocusPath:S.string},function(e){return{setFocus:e.setFocus,currentFocusPath:e.currentFocusPath}}),k({componentDidMount:function(){Me.init(this.props.setFocus)},componentDidUpdate:function(){Me.init(this.props.setFocus)},componentWillUnmount:function(){Me.destroy()}}));e.withFocusable=Te,e.withNavigation=Re,Object.defineProperty(e,"__esModule",{value:!0})});
