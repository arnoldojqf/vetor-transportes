(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{"6a2c125250038bfdb240":function(e,t,n){"use strict";n.r(t);var o,a=n("8af190b70a6bc55c6f1b"),r=n.n(a),i=(n("8a2d1b95e05b6a321e74"),n("0d7f0986bcd2f33d8a2a")),c=n("64cfdaa82025c5c221ea"),d=n.n(c),f=n("9b7bb9d48260dbac8def"),l=n("0c1f845924d0a380f5ed"),u=n.n(l),b=n("f45f4b4db7d91d6fbde9"),p=n.n(b),s=n("09d9825c6a907a151090"),v=n.n(s),y=n("9de15f4f50e7c18f356d"),m=n.n(y),h=n("ab4cb61bcb2dc161defb"),g=n("d7dd51e1bf6bfc2c9c3d"),w=n("f05efe8e7e6d2a962beb"),O=n("561b54665dad44e28695"),T=n("4dd2a92e69dcbe1bab10"),C=n("8288f228e0044ac466fd"),S=n("0d939196e59ed73c94e6");function P(e){return(P="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function j(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function _(e){return(_=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function A(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function k(e,t){return(k=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function E(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function N(e,t,n,a){o||(o="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var r=e&&e.defaultProps,i=arguments.length-3;if(t||0===i||(t={children:void 0}),1===i)t.children=a;else if(i>1){for(var c=new Array(i),d=0;d<i;d++)c[d]=arguments[d+3];t.children=c}if(t&&r)for(var f in r)void 0===t[f]&&(t[f]=r[f]);else t||(t=r||{});return{$$typeof:o,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}function D(e){return N("div",{style:{paddingTop:24}},void 0,e.children)}var I=N(S.Tab,{icon:N(u.a,{})}),U=N(S.Tab,{icon:N(p.a,{})}),x=N(S.Tab,{icon:N(v.a,{})}),B=N(S.Tab,{icon:N(m.a,{})}),H=N(S.Tab,{icon:N(u.a,{}),label:"ABOUT"}),J=N(S.Tab,{icon:N(p.a,{}),label:"20 CONNECTIONS"}),L=N(S.Tab,{icon:N(v.a,{}),label:"18 FAVORITES"}),M=N(S.Tab,{icon:N(m.a,{}),label:"4 ALBUMS"}),R=N(D,{},void 0,N(T.n,{})),W=N(D,{},void 0,N(T.E,{})),$=N(D,{},void 0,N(T.f,{})),F=function(e){function t(){var e,n,o,a;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var r=arguments.length,i=new Array(r),c=0;c<r;c++)i[c]=arguments[c];return o=this,a=(e=_(t)).call.apply(e,[this].concat(i)),n=!a||"object"!==P(a)&&"function"!==typeof a?A(o):a,E(A(n),"state",{value:0}),E(A(n),"handleChange",function(e,t){n.setState({value:t})}),n}var n,o,a;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&k(e,t)}(t,r.a.Component),n=t,(o=[{key:"componentDidMount",value:function(){this.props.fetchData(w.a)}},{key:"render",value:function(){var e=d.a.name+" - Profile",t=d.a.desc,n=this.props.dataProps,o=this.state.value,a=JSON.parse(C.a.getUserProfile()),r=a.firstName+" "+a.lastName;return N("div",{},void 0,N(i.Helmet,{},void 0,N("title",{},void 0,e),N("meta",{name:"description",content:t}),N("meta",{property:"og:title",content:e}),N("meta",{property:"og:description",content:t}),N("meta",{property:"twitter:title",content:e}),N("meta",{property:"twitter:description",content:t})),N(T.t,{coverImg:"/images/material_bg.svg",avatar:f.a.user.avatar,name:r,desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}),N(S.AppBar,{position:"static",color:"default"},void 0,N(S.Hidden,{mdUp:!0},void 0,N(S.Tabs,{value:this.state.value,onChange:this.handleChange,variant:"fullWidth",centered:!0,indicatorColor:"primary",textColor:"primary"},void 0,I,U,x,B)),N(S.Hidden,{smDown:!0},void 0,N(S.Tabs,{value:this.state.value,onChange:this.handleChange,variant:"fullWidth",centered:!0,indicatorColor:"primary",textColor:"primary"},void 0,H,J,L,M))),0===o&&N(D,{},void 0,N(T.a,{data:n})),1===o&&R,2===o&&W,3===o&&$)}}])&&j(n.prototype,o),a&&j(n,a),t}(),V=Object(g.connect)(function(e){return{force:e,dataProps:e.getIn(["socmed","dataTimeline"])}},function(e){return{fetchData:Object(h.bindActionCreators)(O.b,e)}})(F);t.default=V}}]);