(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{"728be422214f5d08615c":function(e,t,n){"use strict";n.r(t);var o,r=n("8af190b70a6bc55c6f1b"),i=n.n(r),c=(n("8a2d1b95e05b6a321e74"),n("0d7f0986bcd2f33d8a2a")),a=n("64cfdaa82025c5c221ea"),f=n.n(a),u=n("ab4cb61bcb2dc161defb"),s=n("d7dd51e1bf6bfc2c9c3d"),d=n("f05efe8e7e6d2a962beb"),b=n("561b54665dad44e28695"),m=n("4dd2a92e69dcbe1bab10"),l=n("0d939196e59ed73c94e6");function p(e){return(p="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function y(e,t,n,r){o||(o="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var i=e&&e.defaultProps,c=arguments.length-3;if(t||0===c||(t={children:void 0}),1===c)t.children=r;else if(c>1){for(var a=new Array(c),f=0;f<c;f++)a[f]=arguments[f+3];t.children=a}if(t&&i)for(var u in i)void 0===t[u]&&(t[u]=i[u]);else t||(t=i||{});return{$$typeof:o,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}function v(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function h(e,t){return!t||"object"!==p(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function w(e){return(w=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function g(e,t){return(g=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var O=y(l.Grid,{item:!0,md:4,xs:12},void 0,y(m.fb,{})),j=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),h(this,w(t).apply(this,arguments))}var n,o,r;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&g(e,t)}(t,i.a.Component),n=t,(o=[{key:"componentDidMount",value:function(){this.props.fetchData(d.a)}},{key:"render",value:function(){var e=f.a.name+" - Social Media",t=f.a.desc,n=this.props,o=n.dataProps,r=n.submitPost,i=n.submitLike,a=n.submitComment,u=n.fetchComment,s=n.commentIndex,d=n.closeNotif,b=n.messageNotif;return y("div",{},void 0,y(c.Helmet,{},void 0,y("title",{},void 0,e),y("meta",{name:"description",content:t}),y("meta",{property:"og:title",content:e}),y("meta",{property:"og:description",content:t}),y("meta",{property:"twitter:title",content:e}),y("meta",{property:"twitter:description",content:t})),y(m.P,{close:function(){return d()},message:b}),y(l.Grid,{container:!0,alignItems:"flex-start",justify:"flex-start",direction:"row",spacing:3},void 0,y(l.Grid,{item:!0,md:8,xs:12},void 0,y("div",{},void 0,y(m.ob,{submitPost:r}),y(m.lb,{dataTimeline:o,onlike:i,submitComment:a,fetchComment:u,commentIndex:s}))),O))}}])&&v(n.prototype,o),r&&v(n,r),t}(),C=Object(s.connect)(function(e){return{force:e,dataProps:e.getIn(["socmed","dataTimeline"]),commentIndex:e.getIn(["socmed","commentIndex"]),messageNotif:e.getIn(["socmed","notifMsg"])}},function(e){return{fetchData:Object(u.bindActionCreators)(b.b,e),submitPost:Object(u.bindActionCreators)(b.d,e),submitComment:Object(u.bindActionCreators)(b.e,e),submitLike:Object(u.bindActionCreators)(b.f,e),fetchComment:Object(u.bindActionCreators)(b.c,e),closeNotif:function(){return e(b.a)}}})(j);t.default=C}}]);