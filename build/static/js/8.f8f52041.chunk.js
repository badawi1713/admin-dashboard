/*! For license information please see 8.f8f52041.chunk.js.LICENSE.txt */
(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[8],{500:function(e,t,a){var n;!function(){"use strict";var a={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var o=typeof n;if("string"===o||"number"===o)e.push(n);else if(Array.isArray(n)&&n.length){var c=r.apply(null,n);c&&e.push(c)}else if("object"===o)for(var s in n)a.call(n,s)&&n[s]&&e.push(s)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()},501:function(e,t,a){"use strict";a.d(t,"c",(function(){return c})),a.d(t,"d",(function(){return s})),a.d(t,"g",(function(){return l})),a.d(t,"e",(function(){return f})),a.d(t,"b",(function(){return d})),a.d(t,"f",(function(){return m})),a.d(t,"a",(function(){return b}));var n,r=a(36),o=a.n(r);function c(e,t){return void 0===e&&(e=""),void 0===t&&(t=n),t?e.split(" ").map((function(e){return t[e]||e})).join(" "):e}function s(e,t){var a={};return Object.keys(e).forEach((function(n){-1===t.indexOf(n)&&(a[n]=e[n])})),a}var i={};function l(e){i[e]||("undefined"!==typeof console&&console.error(e),i[e]=!0)}var u="object"===typeof window&&window.Element||function(){};o.a.oneOfType([o.a.string,o.a.func,function(e,t,a){if(!(e[t]instanceof u))return new Error("Invalid prop `"+t+"` supplied to `"+a+"`. Expected prop to be an instance of Element. Validation failed.")},o.a.shape({current:o.a.any})]);var f=o.a.oneOfType([o.a.func,o.a.string,o.a.shape({$$typeof:o.a.symbol,render:o.a.func}),o.a.arrayOf(o.a.oneOfType([o.a.func,o.a.string,o.a.shape({$$typeof:o.a.symbol,render:o.a.func})]))]),d={esc:27,space:32,enter:13,tab:9,up:38,down:40,home:36,end:35,n:78,p:80};"undefined"===typeof window||!window.document||window.document.createElement;function p(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":Object.prototype.toString.call(e)}function m(e){var t=typeof e;if("number"===t)return e;if("symbol"===t||"object"===t&&"[object Symbol]"===p(e))return NaN;if(b(e)){var a="function"===typeof e.valueOf?e.valueOf():e;e=b(a)?""+a:a}if("string"!==t)return 0===e?e:+e;e=e.replace(/^\s+|\s+$/g,"");var n=/^0b[01]+$/i.test(e);return n||/^0o[0-7]+$/i.test(e)?parseInt(e.slice(2),n?2:8):/^[-+]0x[0-9a-f]+$/i.test(e)?NaN:+e}function b(e){var t=typeof e;return null!=e&&("object"===t||"function"===t)}},503:function(e,t,a){"use strict";function n(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}a.d(t,"a",(function(){return n}))},506:function(e,t,a){"use strict";var n=a(19),r=a(50),o=a(503),c=a(30),s=a(1),i=a.n(s),l=a(36),u=a.n(l),f=a(500),d=a.n(f),p=a(501),m={active:u.a.bool,"aria-label":u.a.string,block:u.a.bool,color:u.a.string,disabled:u.a.bool,outline:u.a.bool,tag:p.e,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),onClick:u.a.func,size:u.a.string,children:u.a.node,className:u.a.string,cssModule:u.a.object,close:u.a.bool},b=function(e){function t(t){var a;return(a=e.call(this,t)||this).onClick=a.onClick.bind(Object(o.a)(a)),a}Object(c.a)(t,e);var a=t.prototype;return a.onClick=function(e){this.props.disabled?e.preventDefault():this.props.onClick&&this.props.onClick(e)},a.render=function(){var e=this.props,t=e.active,a=e["aria-label"],o=e.block,c=e.className,s=e.close,l=e.cssModule,u=e.color,f=e.outline,m=e.size,b=e.tag,v=e.innerRef,h=Object(r.a)(e,["active","aria-label","block","className","close","cssModule","color","outline","size","tag","innerRef"]);s&&"undefined"===typeof h.children&&(h.children=i.a.createElement("span",{"aria-hidden":!0},"\xd7"));var g="btn"+(f?"-outline":"")+"-"+u,y=Object(p.c)(d()(c,{close:s},s||"btn",s||g,!!m&&"btn-"+m,!!o&&"btn-block",{active:t,disabled:this.props.disabled}),l);h.href&&"button"===b&&(b="a");var j=s?"Close":null;return i.a.createElement(b,Object(n.a)({type:"button"===b&&h.onClick?"button":void 0},h,{className:y,ref:v,onClick:this.onClick,"aria-label":a||j}))},t}(i.a.Component);b.propTypes=m,b.defaultProps={color:"secondary",tag:"button"},t.a=b},514:function(e,t,a){"use strict";var n=a(19),r=a(50),o=a(1),c=a.n(o),s=a(36),i=a.n(s),l=a(500),u=a.n(l),f=a(501),d={tag:f.e,fluid:i.a.oneOfType([i.a.bool,i.a.string]),className:i.a.string,cssModule:i.a.object},p=function(e){var t=e.className,a=e.cssModule,o=e.fluid,s=e.tag,i=Object(r.a)(e,["className","cssModule","fluid","tag"]),l="container";!0===o?l="container-fluid":o&&(l="container-"+o);var d=Object(f.c)(u()(t,l),a);return c.a.createElement(s,Object(n.a)({},i,{className:d}))};p.propTypes=d,p.defaultProps={tag:"div"},t.a=p},515:function(e,t,a){"use strict";var n=a(19),r=a(50),o=a(1),c=a.n(o),s=a(36),i=a.n(s),l=a(500),u=a.n(l),f=a(501),d=i.a.oneOfType([i.a.number,i.a.string]),p={tag:f.e,noGutters:i.a.bool,className:i.a.string,cssModule:i.a.object,form:i.a.bool,xs:d,sm:d,md:d,lg:d,xl:d},m={tag:"div",widths:["xs","sm","md","lg","xl"]},b=function(e){var t=e.className,a=e.cssModule,o=e.noGutters,s=e.tag,i=e.form,l=e.widths,d=Object(r.a)(e,["className","cssModule","noGutters","tag","form","widths"]),p=[];l.forEach((function(t,a){var n=e[t];if(delete d[t],n){var r=!a;p.push(r?"row-cols-"+n:"row-cols-"+t+"-"+n)}}));var m=Object(f.c)(u()(t,o?"no-gutters":null,i?"form-row":"row",p),a);return c.a.createElement(s,Object(n.a)({},d,{className:m}))};b.propTypes=p,b.defaultProps=m,t.a=b},516:function(e,t,a){"use strict";var n=a(19),r=a(50),o=a(1),c=a.n(o),s=a(36),i=a.n(s),l=a(500),u=a.n(l),f=a(501),d=i.a.oneOfType([i.a.number,i.a.string]),p=i.a.oneOfType([i.a.bool,i.a.number,i.a.string,i.a.shape({size:i.a.oneOfType([i.a.bool,i.a.number,i.a.string]),order:d,offset:d})]),m={tag:f.e,xs:p,sm:p,md:p,lg:p,xl:p,className:i.a.string,cssModule:i.a.object,widths:i.a.array},b={tag:"div",widths:["xs","sm","md","lg","xl"]},v=function(e,t,a){return!0===a||""===a?e?"col":"col-"+t:"auto"===a?e?"col-auto":"col-"+t+"-auto":e?"col-"+a:"col-"+t+"-"+a},h=function(e){var t=e.className,a=e.cssModule,o=e.widths,s=e.tag,i=Object(r.a)(e,["className","cssModule","widths","tag"]),l=[];o.forEach((function(t,n){var r=e[t];if(delete i[t],r||""===r){var o=!n;if(Object(f.a)(r)){var c,s=o?"-":"-"+t+"-",d=v(o,t,r.size);l.push(Object(f.c)(u()(((c={})[d]=r.size||""===r.size,c["order"+s+r.order]=r.order||0===r.order,c["offset"+s+r.offset]=r.offset||0===r.offset,c)),a))}else{var p=v(o,t,r);l.push(p)}}})),l.length||l.push("col");var d=Object(f.c)(u()(t,l),a);return c.a.createElement(s,Object(n.a)({},i,{className:d}))};h.propTypes=m,h.defaultProps=b,t.a=h},605:function(e,t,a){"use strict";a.r(t);var n=a(82),r=a(83),o=a(85),c=a(84),s=a(1),i=a.n(s),l=a(514),u=a(515),f=a(516),d=a(506),p=a(158),m=function(e){Object(o.a)(a,e);var t=Object(c.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{className:"app flex-row align-items-center"},i.a.createElement(l.a,null,i.a.createElement(u.a,{className:"justify-content-center"},i.a.createElement(f.a,{md:"6"},i.a.createElement("div",{className:"clearfix"},i.a.createElement("h1",{className:"float-left display-3 mr-4"},"404"),i.a.createElement("h4",{className:"pt-3"},"Oops! Halaman anda tidak ditemukan."),i.a.createElement("p",{className:"text-muted float-left"},"Halaman yang anda cari tidak ditemukan, silahkan tekan tombol kembali."))),i.a.createElement(f.a,{md:"12"},i.a.createElement("center",null,i.a.createElement(p.Link,{to:"/admin/login"},i.a.createElement(d.a,{size:"lg",color:"info"},"Kembali")))))))}}]),a}(s.Component);t.default=m}}]);
//# sourceMappingURL=8.f8f52041.chunk.js.map