(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{d6661bfc647c78ed7360:function(t,e,o){"use strict";o.r(e);var n,r=o("8af190b70a6bc55c6f1b"),i=o.n(r),c=o("6938d226fd372a75cbf9"),a=o("ab4cb61bcb2dc161defb"),f=o("d7dd51e1bf6bfc2c9c3d"),u=o("8bde5da4e631a5d91b6d"),l=o("0d7f0986bcd2f33d8a2a"),d=o("64cfdaa82025c5c221ea"),s=o.n(d),b=o("9b7bb9d48260dbac8def"),p=o("bf98e136023688c7a106"),y=o("4dd2a92e69dcbe1bab10"),m=o("eebbc9f977e6e78f5b57");function h(t,e,o,r){n||(n="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var i=t&&t.defaultProps,c=arguments.length-3;if(e||0===c||(e={children:void 0}),1===c)e.children=r;else if(c>1){for(var a=new Array(c),f=0;f<c;f++)a[f]=arguments[f+3];e.children=a}if(e&&i)for(var u in i)void 0===e[u]&&(e[u]=i[u]);else e||(e=i||{});return{$$typeof:n,type:t,key:void 0===o?null:""+o,ref:null,props:e,_owner:null}}function v(t){return v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},v(t)}function w(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function O(t,e){for(var o=0;o<e.length;o++){var n=e[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function j(t,e){return j=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},j(t,e)}function g(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var o,n=S(t);if(e){var r=S(this).constructor;o=Reflect.construct(n,arguments,r)}else o=n.apply(this,arguments);return C(this,o)}}function C(t,e){if(e&&("object"===v(e)||"function"===typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return D(t)}function D(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function S(t){return S=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},S(t)}function I(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}var k=function(t){!function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&j(t,e)}(i,t);var e,o,n,r=g(i);function i(){var t;w(this,i);for(var e=arguments.length,o=new Array(e),n=0;n<e;n++)o[n]=arguments[n];return I(D(t=r.call.apply(r,[this].concat(o))),"submitContact",(function(e,o){var n=t.props.submit,r="object"===v(o)?URL.createObjectURL(o):o;n(e,null!==o?r:b.a.user.avatar)})),t}return e=i,(o=[{key:"componentDidMount",value:function(){this.props.fetchData(u.a)}},{key:"render",value:function(){var t=s.a.name+" - Contact",e=s.a.desc,o=this.props,n=o.classes,r=o.dataContact,i=o.itemSelected,c=o.showDetail,a=o.hideDetail,f=o.avatarInit,u=o.open,d=o.showMobileDetail,b=o.add,p=o.edit,m=o.close,v=o.remove,w=o.favorite,O=o.keyword,j=o.search,g=o.closeNotif,C=o.messageNotif;return h("div",{},void 0,h(l.Helmet,{},void 0,h("title",{},void 0,t),h("meta",{name:"description",content:e}),h("meta",{property:"og:title",content:t}),h("meta",{property:"og:description",content:e}),h("meta",{property:"twitter:title",content:t}),h("meta",{property:"twitter:description",content:e})),h(y.M,{close:function(){return g()},message:C}),h("div",{className:n.root},void 0,h(y.n,{hideDetail:a,addContact:b,total:r.size,showMobileDetail:d}),h(y.o,{clippedRight:!0,itemSelected:i,dataContact:r,showDetail:c,search:j,keyword:O}),h(y.m,{showMobileDetail:d,dataContact:r,itemSelected:i,edit:p,remove:v,favorite:w})),h(y.b,{addContact:b,openForm:u,closeForm:m,submit:this.submitContact,avatarInit:f}))}}])&&O(e.prototype,o),n&&O(e,n),Object.defineProperty(e,"prototype",{writable:!1}),i}(i.a.Component),P="contact",A=Object(f.connect)((function(t){return{force:t,avatarInit:t.getIn([P,"avatarInit"]),dataContact:t.getIn([P,"contactList"]),itemSelected:t.getIn([P,"selectedIndex"]),keyword:t.getIn([P,"keywordValue"]),open:t.getIn([P,"openFrm"]),showMobileDetail:t.getIn([P,"showMobileDetail"]),messageNotif:t.getIn([P,"notifMsg"])}}),(function(t){return{fetchData:Object(a.bindActionCreators)(p.f,t),showDetail:Object(a.bindActionCreators)(p.j,t),hideDetail:function(){return t(p.g)},submit:Object(a.bindActionCreators)(p.k,t),edit:Object(a.bindActionCreators)(p.e,t),add:function(){return t(p.a)},close:function(){return t(p.c)},remove:Object(a.bindActionCreators)(p.h,t),favorite:Object(a.bindActionCreators)(p.b,t),search:Object(a.bindActionCreators)(p.i,t),closeNotif:function(){return t(p.d)}}}))(k);e.default=Object(c.withStyles)(m.a)(A)}}]);