(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{"4e2013be15520b349ddc":function(e,t,n){"use strict";n.r(t);var o,r,i,a=n("8af190b70a6bc55c6f1b"),c=n.n(a),l=n("0d7f0986bcd2f33d8a2a"),f=n("64cfdaa82025c5c221ea"),u=n.n(f),s=n("bd183afcc37eabd79225"),p=n.n(s),d=n("6938d226fd372a75cbf9"),y=n("4dd2a92e69dcbe1bab10"),b=n("0d939196e59ed73c94e6"),m=n("032687ae93dd27220e04"),h=n.n(m),v=n("f78fbec8da5e73e89414"),g=n.n(v),w=n("308def6ce6a3f6d2e753"),O=n.n(w);function j(e){return j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},j(e)}function S(e,t,n,o){i||(i="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var r=e&&e.defaultProps,a=arguments.length-3;if(t||0===a||(t={children:void 0}),1===a)t.children=o;else if(a>1){for(var c=new Array(a),l=0;l<a;l++)c[l]=arguments[l+3];t.children=c}if(t&&r)for(var f in r)void 0===t[f]&&(t[f]=r[f]);else t||(t=r||{});return{$$typeof:i,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}function x(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function P(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function _(e,t){return _=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},_(e,t)}function C(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=D(e);if(t){var r=D(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return k(this,n)}}function k(e,t){if(t&&("object"===j(t)||"function"===typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function D(e){return D=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},D(e)}function T(){return T=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},T.apply(this,arguments)}var N,R,B=c.a.forwardRef((function(e,t){return c.a.createElement(b.Slide,T({direction:"up",ref:t},e))})),I=function(e,t){var n=e;"3d_rotation"===e&&(n="three_d_rotation");for(var o=n.split("_"),r=0;r<o.length;r+=1)o[r]=o[r].charAt(0).toUpperCase()+o[r].slice(1);return t?o.join(" "):o.join("")},E=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&_(e,t)}(c,e);var t,n,i,a=C(c);function c(){return x(this,c),a.apply(this,arguments)}return t=c,(n=[{key:"render",value:function(){Object(m.registerLanguage)("jsx",g.a);var e=this.props,t=e.isOpenDetail,n=e.iconName,i=e.iconCode,a=e.closeDetail,c=this.props.classes,l="<Icon>"+n+"</Icon>",f="import "+I(n,!1)+" from '@material-ui/icons/"+I(n,!1)+"';",u="<"+I(n,!1)+" />";return S(b.Dialog,{open:t,TransitionComponent:B,keepMounted:!0,maxWidth:"md",onClose:a,"aria-labelledby":"alert-dialog-slide-title","aria-describedby":"alert-dialog-slide-description"},void 0,S(b.DialogTitle,{id:"alert-dialog-slide-title",className:c.title},void 0,I(n,!0)," ","(",i,")"),S(b.DialogContent,{},void 0,S("div",{className:c.bigIcon},void 0,S(b.Icon,{className:c.icon},void 0,n)),o||(o=S(b.Typography,{variant:"subtitle1",gutterBottom:!0},void 0,"Use with Font Icons")),S(h.a,{className:c.code,language:"jsx",style:O.a},void 0,'<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />'),S(h.a,{className:c.code,language:"jsx",style:O.a},void 0,"import Icon from '@material-ui/core/Icon';"),S(h.a,{className:c.code,language:"jsx",style:O.a},void 0,l),S(b.Divider,{className:c.divider}),r||(r=S(b.Typography,{variant:"subtitle1",gutterBottom:!0},void 0,"Use with SVG Material icons")),S(h.a,{className:c.code,language:"jsx",style:O.a},void 0,f),S(h.a,{className:c.code,language:"jsx",style:O.a},void 0,u)),S(b.DialogActions,{},void 0,S(b.Button,{onClick:a,color:"primary"},void 0,"Close")))}}])&&P(t.prototype,n),i&&P(t,i),Object.defineProperty(t,"prototype",{writable:!1}),c}(c.a.Component),A=Object(d.withStyles)((function(e){return{code:{fontSize:12,padding:"5px !important"},divider:{display:"block",margin:"".concat(e.spacing(3),"px 0")},bigIcon:{textAlign:"center",marginBottom:30,"& span":{fontSize:128}},title:{marginBottom:40,fontSize:22,paddingBottom:20,position:"relative",fontWeight:500,color:e.palette.grey[700],textTransform:"uppercase","&:after":{content:'""',display:"block",position:"absolute",bottom:0,left:24,width:40,borderBottom:"5px solid ".concat(e.palette.primary.main)}}}}))(E),W=n("9095151026da8c51dd60"),L=n.n(W);function M(e){return M="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},M(e)}function $(e,t,n,o){R||(R="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var r=e&&e.defaultProps,i=arguments.length-3;if(t||0===i||(t={children:void 0}),1===i)t.children=o;else if(i>1){for(var a=new Array(i),c=0;c<i;c++)a[c]=arguments[c+3];t.children=a}if(t&&r)for(var l in r)void 0===t[l]&&(t[l]=r[l]);else t||(t=r||{});return{$$typeof:R,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}function z(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function U(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function F(e,t){return F=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},F(e,t)}function H(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=q(e);if(t){var r=q(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return J(this,n)}}function J(e,t){if(t&&("object"===M(t)||"function"===typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function q(e){return q=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},q(e)}var G,V=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&F(e,t)}(i,e);var t,n,o,r=H(i);function i(){return z(this,i),r.apply(this,arguments)}return t=i,(n=[{key:"render",value:function(){var e=this.props,t=e.filterText,n=e.classes,o=e.handleSearch;return $(b.FormControl,{fullWidth:!0,className:n.search},void 0,$(b.Input,{id:"search_filter",type:"text",placeholder:"Search more than 900 icons",value:t,onChange:o,endAdornment:N||(N=$(b.InputAdornment,{position:"end"},void 0,$(b.IconButton,{"aria-label":"Search filter"},void 0,$(L.a,{}))))}))}}])&&U(t.prototype,n),o&&U(t,o),Object.defineProperty(t,"prototype",{writable:!1}),i}(c.a.Component),K=Object(d.withStyles)((function(e){return{search:{display:"block",background:"#fff",marginBottom:10,paddingTop:5,boxShadow:e.shadows[2],"& > div":{width:"100%"},"& input":{padding:"10px 8px"}}}}))(V);function Q(e){return Q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Q(e)}function X(e,t,n,o){G||(G="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var r=e&&e.defaultProps,i=arguments.length-3;if(t||0===i||(t={children:void 0}),1===i)t.children=o;else if(i>1){for(var a=new Array(i),c=0;c<i;c++)a[c]=arguments[c+3];t.children=a}if(t&&r)for(var l in r)void 0===t[l]&&(t[l]=r[l]);else t||(t=r||{});return{$$typeof:G,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}function Y(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Z(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function ee(e,t){return ee=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},ee(e,t)}function te(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=re(e);if(t){var r=re(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return ne(this,n)}}function ne(e,t){if(t&&("object"===Q(t)||"function"===typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return oe(e)}function oe(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function re(e){return re=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},re(e)}function ie(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var ae="/api/icons?src=",ce=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&ee(e,t)}(i,e);var t,n,o,r=te(i);function i(){var e;Y(this,i);for(var t=arguments.length,n=new Array(t),o=0;o<t;o++)n[o]=arguments[o];return ie(oe(e=r.call.apply(r,[this].concat(n))),"state",{raws:[],loading:!1,openDetail:!1,iconName:"",iconCode:"",filterText:""}),ie(oe(e),"componentDidMount",(function(){e.setState({loading:!0},(function(){p.a.get(ae+"material-icon-cheat.txt").then((function(e){return e.data.records[0].source})).then((function(e){return e.split("\n").map((function(e){var t=e.split(" ");return{name:t[0],code:t[1]}}))})).then((function(t){e.setState({raws:t,loading:!1})}))}))})),ie(oe(e),"handleOpenDetail",(function(t,n){e.setState({openDetail:!0,iconName:t,iconCode:n})})),ie(oe(e),"handleCloseDetail",(function(){e.setState({openDetail:!1})})),ie(oe(e),"handleSearch",(function(t){t.persist(),e.setState({filterText:t.target.value.toLowerCase()})})),e}return t=i,(n=[{key:"render",value:function(){var e=this,t=u.a.name+" - UI Elements",n=u.a.desc,o=this.state,r=o.raws,i=o.loading,a=o.openDetail,c=o.iconName,f=o.iconCode,s=o.filterText,p=this.props.classes;return X("div",{},void 0,X(l.Helmet,{},void 0,X("title",{},void 0,t),X("meta",{name:"description",content:n}),X("meta",{property:"og:title",content:t}),X("meta",{property:"og:description",content:n}),X("meta",{property:"twitter:title",content:t}),X("meta",{property:"twitter:description",content:n})),X(y.O,{title:"Material Icons",desc:"Material icons are delightful, beautifully crafted symbols for common actions and items. System icons are designed to be simple, modern, friendly, and sometimes quirky. Each icon is reduced to its minimal form, expressing essential characteristics."},void 0,X("div",{},void 0,i&&X(b.LinearProgress,{color:"secondary",className:p.preloader}),X(K,{filterText:s,handleSearch:function(t){return e.handleSearch(t)}}),X("div",{className:p.iconsList},void 0,r.map((function(t,n){return-1!==t.name.toLowerCase().indexOf(s)&&X("div",{className:p.iconWrap},n.toString(),X(b.IconButton,{title:"Click to see detail",onClick:function(){return e.handleOpenDetail(t.name,t.code)},className:p.btn},void 0,X(b.Icon,{className:p.icon},void 0,t.name)),X(b.Typography,{gutterBottom:!0,noWrap:!0},void 0,t.name))})),X(A,{closeDetail:this.handleCloseDetail,isOpenDetail:a,iconName:c,iconCode:f})))))}}])&&Z(t.prototype,n),o&&Z(t,o),Object.defineProperty(t,"prototype",{writable:!1}),i}(c.a.Component);t.default=Object(d.withStyles)((function(e){var t,n;return{hide:{display:"none"},iconsList:(t={display:"flex",flexWrap:"wrap",justifyContent:"space-between"},ie(t,e.breakpoints.down("xs"),{justifyContent:"center"}),ie(t,"overflow","auto"),ie(t,"maxHeight",1e3),ie(t,"position","relative"),t),iconWrap:(n={position:"relative",width:120,margin:20},ie(n,e.breakpoints.down("xs"),{margin:10}),ie(n,"textAlign","center"),n),btn:{display:"block",textAlign:"center",margin:"0 auto"},icon:{fontSize:48},preloader:{width:"100%"}}}))(ce)}}]);