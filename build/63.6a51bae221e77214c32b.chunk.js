/*! For license information please see 63.6a51bae221e77214c32b.chunk.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{ed110f8b62b1b2f26160:function(t,e,r){"use strict";r.r(e);var n=r("8af190b70a6bc55c6f1b"),o=r.n(n),i=r("0d7f0986bcd2f33d8a2a"),a=r("64cfdaa82025c5c221ea"),c=r.n(a),l=r("6938d226fd372a75cbf9"),u=r("4dd2a92e69dcbe1bab10"),f=r("d4df020feb07c4f688e4"),s=r.n(f),p=r("7c3fe2cb581dd1babffa"),d=r("4fdf735211a231ee9d85"),y=r.n(d),h=r("0d939196e59ed73c94e6"),m=r("42f6910802eccdd101ea");function v(t){return v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},v(t)}function b(){b=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},o=n.iterator||"@@iterator",i=n.asyncIterator||"@@asyncIterator",a=n.toStringTag||"@@toStringTag";function c(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(t){c=function(t,e,r){return t[e]=r}}function l(t,e,r,n){var o=e&&e.prototype instanceof s?e:s,i=Object.create(o.prototype),a=new D(n||[]);return i._invoke=function(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return L()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=E(a,r);if(c){if(c===f)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var l=u(t,e,r);if("normal"===l.type){if(n=r.done?"completed":"suspendedYield",l.arg===f)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n="completed",r.method="throw",r.arg=l.arg)}}}(t,r,a),i}function u(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=l;var f={};function s(){}function p(){}function d(){}var y={};c(y,o,(function(){return this}));var h=Object.getPrototypeOf,m=h&&h(h(_([])));m&&m!==e&&r.call(m,o)&&(y=m);var w=d.prototype=s.prototype=Object.create(y);function g(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function O(t,e){function n(o,i,a,c){var l=u(t[o],t,i);if("throw"!==l.type){var f=l.arg,s=f.value;return s&&"object"==v(s)&&r.call(s,"__await")?e.resolve(s.__await).then((function(t){n("next",t,a,c)}),(function(t){n("throw",t,a,c)})):e.resolve(s).then((function(t){f.value=t,a(f)}),(function(t){return n("throw",t,a,c)}))}c(l.arg)}var o;this._invoke=function(t,r){function i(){return new e((function(e,o){n(t,r,e,o)}))}return o=o?o.then(i,i):i()}}function E(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,E(t,e),"throw"===e.method))return f;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return f}var n=u(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,f;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,f):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,f)}function x(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function P(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function D(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(x,this),this.reset(!0)}function _(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,i=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return i.next=i}}return{next:L}}function L(){return{value:void 0,done:!0}}return p.prototype=d,c(w,"constructor",d),c(d,"constructor",p),p.displayName=c(d,a,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,d):(t.__proto__=d,c(t,a,"GeneratorFunction")),t.prototype=Object.create(w),t},t.awrap=function(t){return{__await:t}},g(O.prototype),c(O.prototype,i,(function(){return this})),t.AsyncIterator=O,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new O(l(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},g(w),c(w,a,"Generator"),c(w,o,(function(){return this})),c(w,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=_,D.prototype={constructor:D,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(P),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=r.call(i,"catchLoc"),l=r.call(i,"finallyLoc");if(c&&l){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,f):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),P(r),f}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;P(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:_(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),f}},t}function w(t,e,r,n,o,i,a){try{var c=t[i](a),l=c.value}catch(t){return void r(t)}c.done?e(l):Promise.resolve(l).then(n,o)}function g(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var i=t.apply(e,r);function a(t){w(i,n,o,a,c,"next",t)}function c(t){w(i,n,o,a,c,"throw",t)}a(void 0)}))}}var O,E,x="".concat(Object({NODE_ENV:"production"}).API_HOST,":").concat(Object({NODE_ENV:"production"}).API_PORT,"/reports"),P={getLogisticsAnalitico:function(){return D.apply(this,arguments)}};function D(){return(D=g(b().mark((function t(){return b().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,m.a.get("".concat(x,"/logistics-analitico"));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function _(t){return _="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},_(t)}function L(t,e,r,n){E||(E="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var o=t&&t.defaultProps,i=arguments.length-3;if(e||0===i||(e={children:void 0}),1===i)e.children=n;else if(i>1){for(var a=new Array(i),c=0;c<i;c++)a[c]=arguments[c+3];e.children=a}if(e&&o)for(var l in o)void 0===e[l]&&(e[l]=o[l]);else e||(e=o||{});return{$$typeof:E,type:t,key:void 0===r?null:""+r,ref:null,props:e,_owner:null}}function S(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function j(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function R(t,e){return R=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},R(t,e)}function k(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=C(t);if(e){var o=C(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return T(this,r)}}function T(t,e){if(e&&("object"===_(e)||"function"===typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return A(t)}function A(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function C(t){return C=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},C(t)}function I(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var M,N,H=function(t){!function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&R(t,e)}(a,t);var e,r,n,i=k(a);function a(){var t;S(this,a);for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];return I(A(t=i.call.apply(i,[this].concat(r))),"state",{data:[]}),t}return e=a,(r=[{key:"componentDidMount",value:function(){var t=this;P.getLogisticsAnalitico().then((function(e){console.log("data",e),t.setState({data:e})}))}},{key:"render",value:function(){var t=[{name:"routeId",label:"Id",options:{filter:!1}},{name:"operation",label:"Opera\xe7\xe3o",options:{filter:!1}},{name:"driverName",label:"Motorista",options:{filter:!1}},{name:"strInitDate",label:"Data",options:{filter:!1}},{name:"tsInitDate",options:{display:!1,filter:!0,filterType:"custom",customFilterListOptions:{render:function(t){return t[0]&&t[1]?["De: ".concat(t[0].format("DD/MM/YYYY HH:mm:ss")),"At\xe9: ".concat(t[1].format("DD/MM/YYYY HH:mm:ss"))]:[]},update:function(t,e,r){return console.log("customFilterListOnDelete: ",t,e,r),0===e?t[r].splice(e,1,""):1===e?t[r].splice(e,1):-1===e&&(t[r]=[]),t}},filterOptions:{names:[],logic:function(t,e){return!t||(e[0]&&e[1]?new Date(t)<new Date(e[0].format())||new Date(t)>new Date(e[1].format()):e[0]?new Date(t)<new Date(e[0].format()):!!e[1]&&new Date(t)>new Date(e[1].format()))},display:function(t,e,r,n){return L("div",{},void 0,O||(O=L(h.FormLabel,{},void 0,"Data")),L(h.FormGroup,{row:!0},void 0,L(p.MuiPickersUtilsProvider,{utils:y.a},void 0,L(p.DateTimePicker,{autoOk:!0,ampm:!1,disableFuture:!0,value:t[r][0]||new Date((new Date).setHours("00","00","00")),onChange:function(o){t[r][0]=o,e(t[r],r,n)},label:"De"})),L(p.MuiPickersUtilsProvider,{utils:y.a},void 0,L(p.DateTimePicker,{autoOk:!0,ampm:!1,disableFuture:!0,value:t[r][1]||new Date((new Date).setHours("23","59","59")),onChange:function(o){t[r][1]=o,e(t[r],r,n)},label:"At\xe9"}))))}}}},{name:"routes",label:"Qt. Rotas",options:{filter:!1}},{name:"carrier",label:"Transportadora",options:{filter:!1}},{name:"spr",label:"SPR",options:{filter:!1}},{name:"total",label:"Pacotes",options:{filter:!1}},{name:"delivered",label:"Entregue",options:{filter:!1}},{name:"notDelivered",label:"Insucesso",options:{filter:!1}},{name:"cycle",label:"Ciclo",options:{filter:!1}},{name:"ds",label:"DS",options:{filter:!1}},{name:"orh",label:"ORH",options:{filter:!1}},{name:"orhMax",label:"ORH MAX",options:{filter:!1}},{name:"pOrh",label:"ORH(%)",options:{filter:!1}},{name:"dpph",label:"DPPH",options:{filter:!1}},{name:"cntClaims",label:"Reclama\xe7\xf5es",options:{filter:!1}},{name:"contactRate",label:"Contact Rate",options:{filter:!1}},{name:"claimsData",label:"Claims",options:{display:!1,filter:!1}}],e=[{name:"CLA_CLAIM_ID",label:"Id"},{name:"dtClaimOpen",label:"Data"},{name:"CLAIM_OPENED_DATE",label:"Data"},{name:"ITEM_DESC",label:"Item"},{name:"MESSAGE",label:"Mensagem"}],r={search:!1,filter:!1,download:!1,pagination:!1,print:!1,viewColumns:!1},n=this.state.data,i={filter:!0,filterType:"dropdown",responsive:"simple",selectableRows:"none",enableNestedDataAccess:".",print:!0,rowsPerPage:10,page:1,expandableRows:!0,expandableRowsHeader:!1,expandableRowsOnClick:!0,rowsExpanded:[0,1],renderExpandableRow:function(t,n){var o=t.length+1,i=t[t.length-1];if(i)return L(h.TableRow,{},void 0,L(h.TableCell,{colSpan:o},void 0,L(s.a,{title:"Reclama\xe7\xf5es",data:i,columns:e,options:r})))},onRowExpansionChange:function(t,e,r){return console.log(t,e,r)}},a={ExpandButton:function(t){return 3===t.dataIndex||4===t.dataIndex?L("div",{style:{width:"24px"}}):o.a.createElement(f.ExpandButton,t)}};return L(s.a,{title:"Logistics",data:n,columns:t,options:i,components:a})}}])&&j(e.prototype,r),n&&j(e,n),Object.defineProperty(e,"prototype",{writable:!1}),a}(o.a.Component),F=H;function G(t){return G="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},G(t)}function Y(t,e,r,n){N||(N="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var o=t&&t.defaultProps,i=arguments.length-3;if(e||0===i||(e={children:void 0}),1===i)e.children=n;else if(i>1){for(var a=new Array(i),c=0;c<i;c++)a[c]=arguments[c+3];e.children=a}if(e&&o)for(var l in o)void 0===e[l]&&(e[l]=o[l]);else e||(e=o||{});return{$$typeof:N,type:t,key:void 0===r?null:""+r,ref:null,props:e,_owner:null}}function B(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function $(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function J(t,e){return J=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},J(t,e)}function U(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Q(t);if(e){var o=Q(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return V(this,r)}}function V(t,e){if(e&&("object"===G(e)||"function"===typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function Q(t){return Q=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},Q(t)}var X=function(t){!function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&J(t,e)}(a,t);var e,r,n,o=U(a);function a(){return B(this,a),o.apply(this,arguments)}return e=a,(r=[{key:"render",value:function(){var t=c.a.name+" - Table",e=c.a.desc;return Y("div",{},void 0,Y(i.Helmet,{},void 0,Y("title",{},void 0,t),Y("meta",{name:"description",content:e}),Y("meta",{property:"og:title",content:t}),Y("meta",{property:"og:description",content:e}),Y("meta",{property:"twitter:title",content:t}),Y("meta",{property:"twitter:description",content:e})),M||(M=Y(u.O,{title:"Relat\xf3rio Logistics Anal\xedtico",desc:"Dados obtidos a partir de importa\xe7\xe3o do sistema Logistics do MELI."},void 0,Y("div",{},void 0,Y(F,{}),Y(u.cb,{componentName:"containers/Reports/DataTable.js"})))))}}])&&$(e.prototype,r),n&&$(e,n),Object.defineProperty(e,"prototype",{writable:!1}),a}(n.Component);e.default=Object(l.withStyles)({root:{flexGrow:1}})(X)}}]);