(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{"20504e143280025d2bfc":function(e,t,o){"use strict";o.r(t);var n,i=o("8af190b70a6bc55c6f1b"),r=o("0d7f0986bcd2f33d8a2a"),a=o("64cfdaa82025c5c221ea"),c=o.n(a),d=(o("8a2d1b95e05b6a321e74"),o("6938d226fd372a75cbf9")),s=o("4dd2a92e69dcbe1bab10"),l=o("0d939196e59ed73c94e6"),u=o("188313d2a36e593a5011");function f(e){return(f="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(e,t,o,i){n||(n="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var r=e&&e.defaultProps,a=arguments.length-3;if(t||0===a||(t={children:void 0}),1===a)t.children=i;else if(a>1){for(var c=new Array(a),d=0;d<a;d++)c[d]=arguments[d+3];t.children=c}if(t&&r)for(var s in r)void 0===t[s]&&(t[s]=r[s]);else t||(t=r||{});return{$$typeof:n,type:e,key:void 0===o?null:""+o,ref:null,props:t,_owner:null}}function m(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function h(e,t){return!t||"object"!==f(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var v=p(u.g,{}),w=p(u.f,{}),g=p(u.d,{}),j=p(u.h,{}),S=p(u.a,{}),O=p(u.i,{}),_=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),h(this,y(t).apply(this,arguments))}var o,n,a;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}(t,i["Component"]),o=t,(n=[{key:"render",value:function(){var e=this.props.classes,t=c.a.name+" - Layout",o=c.a.desc,n="containers/Layouts/demos/";return p("div",{},void 0,p(r.Helmet,{},void 0,p("title",{},void 0,t),p("meta",{name:"description",content:o}),p("meta",{property:"og:title",content:t}),p("meta",{property:"og:description",content:o}),p("meta",{property:"twitter:title",content:t}),p("meta",{property:"twitter:description",content:o})),p(s.Q,{title:"Grid Spacing",desc:"The responsive grid focuses on consistent spacing widths, rather than column width. Material design margins and columns follow an 8dp square baseline grid. Spacing can be 8, 16, 24, or 40dp wide."},void 0,p("div",{},void 0,v,p(s.hb,{componentName:n+"GridLayout.js"}))),p(s.Q,{title:"Full-width",desc:"Full-width grids: use fluid columns and breakpoints to determine when a layout needs to change."},void 0,p("div",{},void 0,w,p(s.hb,{componentName:n+"FullWidth.js"}))),p(s.Q,{title:"Centered Grid",desc:"Centered grids: use fixed columns and re-flow the layout when all columns (plus a defined margin) no longer fit on the screen."},void 0,p("div",{},void 0,g,p(s.hb,{componentName:n+"Centered.js"}))),p(s.Q,{title:"Interactive",desc:"Below is an interactive demo that lets you explore the visual results of the different settings:"},void 0,p("div",{},void 0,j,p(s.hb,{componentName:n+"Interactive.js"}))),p("div",{className:e.root},void 0,p(l.Grid,{container:!0,spacing:3},void 0,p(l.Grid,{item:!0,md:6,xs:12},void 0,p(s.Q,{title:"Auto Layout",desc:"The Auto-layout makes the items equitably share the available space. That also means you can set the width of one item and the others will automatically resize around it."},void 0,p("div",{},void 0,S,p(s.hb,{componentName:n+"AutoLayout.js"})))),p(l.Grid,{item:!0,md:6,xs:12},void 0,p(s.Q,{title:"Limitations",overflowX:!0,desc:"There is one limitation with the negative margin we use to implement the spacing between items."},void 0,p("div",{},void 0,O,p(s.hb,{componentName:n+"Limitation.js"})))))))}}])&&m(o.prototype,n),a&&m(o,a),t}();t.default=Object(d.withStyles)({root:{flexGrow:1}})(_)}}]);