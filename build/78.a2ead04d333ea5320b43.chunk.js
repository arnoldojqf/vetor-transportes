(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{ee15ab7755d4113eb1b7:function(e,t,o){"use strict";o.r(t);var n,i=o("8af190b70a6bc55c6f1b"),r=o.n(i),a=o("0d7f0986bcd2f33d8a2a"),c=o("64cfdaa82025c5c221ea"),s=o.n(c),f=o("4dd2a92e69dcbe1bab10"),l=o("0d939196e59ed73c94e6"),d=o("05c8eb146240928faf44");function u(e){return(u="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(e,t,o,i){n||(n="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var r=e&&e.defaultProps,a=arguments.length-3;if(t||0===a||(t={children:void 0}),1===a)t.children=i;else if(a>1){for(var c=new Array(a),s=0;s<a;s++)c[s]=arguments[s+3];t.children=c}if(t&&r)for(var f in r)void 0===t[f]&&(t[f]=r[f]);else t||(t=r||{});return{$$typeof:n,type:e,key:void 0===o?null:""+o,ref:null,props:t,_owner:null}}function b(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function y(e,t){return!t||"object"!==u(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function v(e,t){return(v=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var h=p(d.vb,{}),w=p(d.Hb,{}),g=p(l.Grid,{container:!0,justify:"center"},void 0,p(l.Grid,{item:!0,md:4,xs:12},void 0,p(d.cb,{}))),S=p(d.Ob,{}),j=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),y(this,m(t).apply(this,arguments))}var o,n,i;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&v(e,t)}(t,r.a.Component),o=t,(n=[{key:"render",value:function(){var e=s.a.name+" - UI Elements",t=s.a.desc,o="containers/UiElements/demos/Notification/";return p("div",{},void 0,p(a.Helmet,{},void 0,p("title",{},void 0,e),p("meta",{name:"description",content:t}),p("meta",{property:"og:title",content:e}),p("meta",{property:"og:description",content:t}),p("meta",{property:"twitter:title",content:e}),p("meta",{property:"twitter:description",content:t})),p(f.Q,{title:"Snackbars/Notification",desc:"Snackbars provide brief feedback about an operation through a message - typically at the bottom of the screen."},void 0,p("div",{},void 0,h,p(f.hb,{componentName:o+"SimpleNotif.js"}))),p(f.Q,{title:"Styled Notification",desc:"Some snackbars with varying message style. And some snackbars with varying message length."},void 0,p("div",{},void 0,w,p(f.hb,{componentName:o+"StyledNotif.js"}))),p(f.Q,{title:"Mobile Notification",desc:"Move the floating action button vertically to accommodate the snackbar height."},void 0,p("div",{},void 0,g,p(f.hb,{componentName:o+"MobileNotif.js"}))),p(f.Q,{title:"Transition",desc:"Per Google's guidelines, when a second snackbar is triggered while the first is displayed, the first should start the contraction motion downwards before the second one animates upwards."},void 0,p("div",{},void 0,S,p(f.hb,{componentName:o+"TransitionNotif.js"}))))}}])&&b(o.prototype,n),i&&b(o,i),t}();t.default=j}}]);