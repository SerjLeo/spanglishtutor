!function(e){var t={};function n(i){if(t[i])return t[i].exports;var o=t[i]={i:i,l:!1,exports:{}};return e[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(i,o,function(t){return e[t]}.bind(null,o));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=28)}([function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",i=e[3];if(!i)return n;if(t&&"function"==typeof btoa){var o=(a=i,c=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(s," */")),r=i.sources.map((function(e){return"/*# sourceURL=".concat(i.sourceRoot||"").concat(e," */")}));return[n].concat(r).concat([o]).join("\n")}var a,c,s;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,i){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(i)for(var r=0;r<this.length;r++){var a=this[r][0];null!=a&&(o[a]=!0)}for(var c=0;c<e.length;c++){var s=[].concat(e[c]);i&&o[s[0]]||(n&&(s[2]?s[2]="".concat(n," and ").concat(s[2]):s[2]=n),t.push(s))}},t}},function(e,t,n){var i=n(2),o=n(3);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var r={insert:"head",singleton:!1};i(o,r);e.exports=o.locals||{}},function(e,t,n){"use strict";var i,o=function(){return void 0===i&&(i=Boolean(window&&document&&document.all&&!window.atob)),i},r=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),a=[];function c(e){for(var t=-1,n=0;n<a.length;n++)if(a[n].identifier===e){t=n;break}return t}function s(e,t){for(var n={},i=[],o=0;o<e.length;o++){var r=e[o],s=t.base?r[0]+t.base:r[0],l=n[s]||0,d="".concat(s," ").concat(l);n[s]=l+1;var f=c(d),p={css:r[1],media:r[2],sourceMap:r[3]};-1!==f?(a[f].references++,a[f].updater(p)):a.push({identifier:d,updater:b(p,t),references:1}),i.push(d)}return i}function l(e){var t=document.createElement("style"),i=e.attributes||{};if(void 0===i.nonce){var o=n.nc;o&&(i.nonce=o)}if(Object.keys(i).forEach((function(e){t.setAttribute(e,i[e])})),"function"==typeof e.insert)e.insert(t);else{var a=r(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var d,f=(d=[],function(e,t){return d[e]=t,d.filter(Boolean).join("\n")});function p(e,t,n,i){var o=n?"":i.media?"@media ".concat(i.media," {").concat(i.css,"}"):i.css;if(e.styleSheet)e.styleSheet.cssText=f(t,o);else{var r=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(r,a[t]):e.appendChild(r)}}function h(e,t,n){var i=n.css,o=n.media,r=n.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),r&&btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),e.styleSheet)e.styleSheet.cssText=i;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(i))}}var u=null,g=0;function b(e,t){var n,i,o;if(t.singleton){var r=g++;n=u||(u=l(t)),i=p.bind(null,n,r,!1),o=p.bind(null,n,r,!0)}else n=l(t),i=h.bind(null,n,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return i(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;i(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=o());var n=s(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var i=0;i<n.length;i++){var o=c(n[i]);a[o].references--}for(var r=s(e,t),l=0;l<n.length;l++){var d=c(n[l]);0===a[d].references&&(a[d].updater(),a.splice(d,1))}n=r}}}},function(e,t,n){var i=n(0),o=n(4),r=n(5),a=n(6),c=n(7),s=n(8),l=n(9),d=n(10),f=n(11),p=n(12),h=n(13),u=n(14),g=n(15),b=n(16),m=n(17),x=n(18),k=n(19),v=n(20),w=n(21),y=n(22),z=n(23),S=n(24),j=n(25),C=n(26),E=n(27);(t=i(!1)).i(o);var R=r(a),L=r(c),M=r(s),_=r(l),I=r(d),q=r(f),O=r(p),T=r(h),A=r(u),F=r(g),P=r(b),B=r(m),Y=r(x),X=r(k),N=r(v),D=r(w),H=r(y),U=r(z),J=r(S),W=r(j),$=r(C),G=r(E);t.push([e.i,'@font-face{font-family:"Baloo";src:url('+R+') format("truetype")}@font-face{font-family:"Playfair";src:url('+L+') format("truetype")}@font-face{font-family:"IBM";src:url('+M+') format("truetype")}@font-face{font-family:"Roboto";src:url('+_+') format("truetype")}html,body{margin:0;padding:0;text-decoration:none;width:100%}body{font-family:"Playfair","Roboto",sans-serif}.container{margin:0 auto}.block{min-height:100vh;width:100%}.block .content{width:100%;min-height:100%;display:flex;flex-direction:column;align-items:center}body::-webkit-scrollbar{width:.5em}body::-webkit-scrollbar-track{background-color:rgba(149,141,141,.2)}body::-webkit-scrollbar-thumb{background:linear-gradient(0deg, #22c1c3 0%, #fdbb2d 100%);border-radius:10px;outline:none}.modal-root{position:fixed;display:flex;width:0;height:0;justify-content:center;align-items:center;visibility:hidden;z-index:99999}.modal-active{width:100%;height:100%;visibility:visible;background-color:rgba(0,0,0,.6)}.modal{min-width:40vw}.modal-root .close{position:fixed;top:5px;right:10px;width:70px;height:70px;cursor:pointer}.modal-root .close::before{content:"";display:inline-block;position:absolute;height:5px;border-radius:10px;width:100%;background-color:#aeaeae;transform:translateY(50px) rotate(45deg);transition:background-color .5s ease}.modal-root .close::after{content:"";display:inline-block;position:absolute;height:5px;border-radius:10px;width:100%;background-color:#aeaeae;transform:translateY(50px) rotate(-45deg);transition:background-color .5s ease}.modal-root .close:hover::after,.modal-root .close:hover::before{background-color:#e0dfdf}.modal-form{display:flex;flex-direction:column;justify-content:center;text-align:center;align-items:center;background-color:#fff}.modal-form input{margin-bottom:20px;padding:20px;border-radius:5px;border:1px solid rgba(176,169,169,.6)}.modal-form button{display:inline-block;text-decoration:none;position:relative;margin-bottom:50px;padding:20px;border-radius:5px;cursor:pointer;color:#f7f7f7;background:#000;overflow:hidden;border:none}.modal-form button::before{content:"";position:absolute;top:0;left:0;width:2em;height:100%;background:linear-gradient(-240deg, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.6));transform:translateX(-4em) skewX(-45deg);animation:button-flash 4s infinite}@keyframes button-flash{80%{transform:translateX(-4em) skewX(-45deg)}100%{transform:translateX(40em) skewX(-45deg)}}.modal-form form{display:flex;flex-direction:column}.modal-form .form-img{width:100%;height:300px;background:url('+I+");background-position:center center;background-size:cover}.modal-form .form-text{padding:0 20px}.modal-form .form-text h2{font-size:38px;margin-bottom:0}.modal-form .form-text p{font-size:14px;margin-bottom:20px}@media screen and (max-width: 960px){.modal{width:60vw}}@media screen and (max-width: 640px){.modal{width:90vw}.modal-form .form-img{height:200px}}.block-1{background-image:url("+q+");background-position:center center;background-size:cover;background-attachment:fixed;position:relative;color:#f5f0f0}.block-1 .filter{width:100%;min-height:inherit;background-color:rgba(0,0,0,.56)}.block-1 .content{padding-top:24vh;text-align:center}.block-1 .content h2{font-size:22px;letter-spacing:2.5px;margin-bottom:1.7em;font-weight:600}.block-1 .content p{font-size:20px;margin-top:50px;line-height:34px;width:60vw}.block-1 .content h1{font-size:32px;padding-bottom:.75em;font-weight:600}@media screen and (max-width: 900px){.block-1 .content{padding-top:4vh;text-align:center}.block-1 .content p{width:80vw}}.block-2 .content{padding-top:18vh;min-height:inherit;text-align:center;background:#f6f5f5}.block-2 h2{font-size:48px;line-height:1.23;padding:0 15px}.block-2 p{font-size:22px;line-height:1.45;font-weight:300;max-width:620px;padding:0 25px}.block-2 .gallery{margin:2em 0;display:flex;flex-direction:row;justify-content:space-around;align-items:center;min-width:80vw}.block-2 .img{width:360px;height:360px;margin:10px}.block-2 .img-1{background-image:url("+O+");background-position:center;background-size:cover}.block-2 .img-2{background-image:url("+T+");background-position:center;background-size:cover}.block-2 .img-3{background-image:url("+A+');background-position:center;background-size:cover}@media screen and (max-width: 1219px){.block-2 .img{margin-bottom:20px;width:300px;height:320px}}@media screen and (max-width: 1024px){.block-2 .gallery{flex-direction:column;justify-content:flex-start;align-items:center}.block-2 .img{margin-bottom:20px;width:360px;height:360px}}.block-3 .content{padding-top:120px;min-height:inherit;text-align:center;background:#eae1e1}.block-3 h2{font-size:38px;line-height:1.23;font-weight:700;margin:0}.block-3 p{font-size:22px;line-height:1.5;font-weight:300;max-width:560px;padding:0 15px;margin-top:40px;margin-bottom:0}.block-3 .gallery{margin:8em 0;display:flex;flex-direction:row;flex-wrap:wrap;justify-content:center;align-items:center;width:90vw;max-width:1200px;font-family:"IBM","Roboto",sans-serif}.block-3 .gallery-section{width:50%;height:343px;display:flex;flex-direction:row;background-color:#fff}.block-3 .section-img{width:50%;height:100%}.block-3 .section-text{width:50%;height:100%;text-align:left;position:relative}.block-3 .section-text p{padding:0 20px;margin-top:20px;font-weight:300;line-height:1.55;font-size:16px}.block-3 .section-text h3{margin-top:40px;font-weight:700;font-size:20px;padding:0 20px;line-height:1.35}.block-3 .sec-1,.block-3 .sec-2{flex-direction:row-reverse}.block-3 .sec-3 .section-text:after,.block-3 .sec-4 .section-text:after{content:"";position:absolute;width:0;height:0;border:solid transparent;border-width:20px;top:50%;left:-40px;border-right-color:#fff;border-left-color:transparent}.block-3 .sec-1 .section-text:after,.block-3 .sec-2 .section-text:after{content:"";position:absolute;width:0;height:0;border:solid transparent;border-width:20px;top:50%;right:-40px;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);border-left-color:#fff}.block-3 .img-1{background-image:url('+F+");background-position:center;background-size:cover;background-repeat:no-repeat}.block-3 .img-2{background-image:url("+P+");background-position:center;background-size:cover;background-repeat:no-repeat}.block-3 .img-3{background-image:url("+B+");background-position:center;background-size:cover;background-repeat:no-repeat}.block-3 .img-4{background-image:url("+Y+');background-position:center;background-size:cover;background-repeat:no-repeat}@media screen and (max-width: 960px){.block-3 .gallery-section{width:600px}.block-3 .gallery{max-width:960px}.block-3 .sec-2{flex-direction:row}.block-3 .sec-3{flex-direction:row-reverse}.block-3 .sec-2 .section-text:after,.block-3 .sec-4 .section-text:after{content:"";position:absolute;width:0;height:0;border:solid transparent;border-width:15px;top:50%;right:100%;left:-30px;border-right-color:#fff;border-left-color:transparent}.block-3 .sec-1 .section-text:after,.block-3 .sec-3 .section-text:after{content:"";position:absolute;width:0;height:0;border:solid transparent;border-width:15px;top:50%;left:100%;right:-40px;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);border-left-color:#fff}}@media screen and (max-width: 640px){.block-3 .gallery-section{width:100%;height:100vh;flex-direction:column-reverse}.block-3 .section-img{width:100%;height:50%;background-color:#1593a6}.block-3 .section-text{width:100%;height:50%}.block-3 .section-text:after{display:none}.block-3 .section-text p{padding:0 40px;text-align:center}.block-3 .section-text h3{padding:40px;text-align:center}}.block-4{padding-top:120px}.block-4 h2{margin-bottom:40px;margin-top:0;font-size:38px;line-height:1.23;text-align:center}.block-4 .img{width:200px;height:200px;border-radius:50%}.block-4 .img-1{background-image:url('+X+");background-position:center;background-size:cover;background-repeat:no-repeat}.block-4 .img-2{background-image:url("+N+");background-position:center;background-size:cover;background-repeat:no-repeat}.block-4 .img-3{background-image:url("+D+");background-position:center;background-size:cover;background-repeat:no-repeat}.block-4 .img-4{background-image:url("+H+');background-position:center;background-size:cover;background-repeat:no-repeat}.slider{position:relative;min-width:90vw;height:80vh;display:flex;flex-direction:row;align-items:center;justify-content:center;background-color:transparent}.slider .slide{position:absolute;margin:0;width:100%;transition:all ease 1s;left:0}.slider .slide-content{padding:30px 100px;display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center;height:100%}.slider .slide-content p{width:70%}.slider .slide-content h5{margin:0}.slider .slide-content h4{margin-top:10px;margin-bottom:5px;font-weight:bold}.left-arrow,.right-arrow{width:70px;height:70px;position:absolute;cursor:pointer;transition:all .2s ease}.left-arrow{top:50%;left:0;transform:translateY(-50%);z-index:9999;fill:rgba(186,179,179,.56)}.right-arrow{top:50%;right:0;transform:translateY(-50%);z-index:9999;fill:rgba(186,179,179,.56)}.right-arrow:hover,.left-arrow:hover{fill:rgba(150,149,149,.56)}.slider .slider-content{width:100%;position:relative;height:100%;overflow:hidden;display:flex;justify-content:center;align-items:center;line-height:1.56;font-size:20px;font-family:"IBM","Roboto",sans-serif}@media screen and (max-width: 640px){.slider .slide-content{padding:0px}.block-4 .img{width:100px;height:100px;border-radius:50%}.left-arrow,.right-arrow{width:50px;height:50px}}.block-5{padding-bottom:60px}.block-5 h2{margin-bottom:40px;margin-top:0;font-size:38px;line-height:1.23;text-align:center}.block-5 h3{margin-bottom:44px;margin-top:0;font-size:24px;line-height:1.23;text-align:center}.block-5 .gallery{width:100%;height:100%;display:flex;flex-direction:row;justify-content:space-around}.block-5 .gallery .card{width:30%;height:100%}.card .img-1{background:url('+U+")}.card .img-2{background:url("+J+")}.card .img-3{background:url("+W+')}.card .img{width:100%;height:250px;background-position:center center;background-size:cover}.card .card-text{padding:20px;text-align:left}.card .card-text h4{font-size:28px;margin:10px 0}.card .card-text h5{margin-top:0;font-size:24px;font-family:"IBM","Roboto",sans-serif}.card .card-text p{margin:5px 0;font-family:"IBM","Roboto",sans-serif}.card .card-text span{line-height:1.55;padding-right:20px}.card .btn{padding:10px 20px;font-size:14px;font-weight:bold;border:1px solid #000;width:90px;text-align:center;cursor:pointer;margin-top:20px;border-radius:5px;transition:all ease .3s}.card .btn:hover{box-shadow:0px 10px 5px -6px rgba(0,0,0,.75);transform:translateY(-5px)}.card .btn:active{background-color:rgba(240,245,246,.731)}@media screen and (max-width: 960px){.block-5 .gallery{flex-direction:column;justify-content:center;align-items:center}.block-5 .gallery .card{width:80%}}.block-6{background-image:url('+$+');background-position:center center;background-size:cover;background-attachment:fixed;position:relative;color:#f5f0f0}.block-6 .filter{width:100%;min-height:inherit;background-color:rgba(0,0,0,.56)}.block-6 .content{display:flex;flex-direction:column;padding-left:50px;width:40%;text-align:left;align-items:start;font-family:"IBM","Roboto",sans-serif}.block-6 ul{padding-left:15px}.block-6 h2{margin-bottom:0;font-size:34px}.block-6 p{margin-top:5px;font-size:20px;line-height:1.56}.block-6 ul h4{font-weight:bold;font-size:20px;margin-bottom:0}@media screen and (max-width: 640px){.block-6 .content{width:80%}}.block-7{background-image:url('+G+');background-position:center center;background-size:cover;background-attachment:fixed;position:relative;color:#f5f0f0}.block-7 .filter{width:100%;min-height:inherit;background-color:rgba(0,0,0,.56)}.block-7 .content{display:flex;min-height:inherit;flex-direction:column;align-items:center;justify-content:center;color:#050505;font-family:"IBM","Roboto",sans-serif;text-align:center}.block-7 .circle{display:flex;flex-direction:column;justify-content:center;align-items:center;width:400px;height:400px;padding:35px;border-radius:50%;background-color:rgba(255,255,255,.65)}.block-7 h2{font-size:34px;margin-bottom:40px}.block-7 p{font-size:18px;margin:5px;letter-spacing:1px}.block-7 strong{font-size:20px}@media screen and (max-width: 640px){.block-7 .circle{width:250px;height:250px}.block-7 h2{font-size:28px}.block-7 p{font-size:14px;margin:5px;letter-spacing:1px}.block-7 strong{font-size:16px}}',""]),e.exports=t},function(e,t,n){(t=n(0)(!1)).push([e.i,'/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n\n/**\n * Remove the margin in all browsers.\n */\n\nbody {\n  margin: 0;\n}\n\n/**\n * Render the `main` element consistently in IE.\n */\n\nmain {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * Remove the gray background on active links in IE 10.\n */\n\na {\n  background-color: transparent;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove the border on images inside links in IE 10.\n */\n\nimg {\n  border-style: none;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\n[type="button"],\n[type="reset"],\n[type="submit"] {\n  -webkit-appearance: button;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type="button"]::-moz-focus-inner,\n[type="reset"]::-moz-focus-inner,\n[type="submit"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type="button"]:-moz-focusring,\n[type="reset"]:-moz-focusring,\n[type="submit"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\n\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n\n[type="checkbox"],\n[type="radio"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type="number"]::-webkit-inner-spin-button,\n[type="number"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type="search"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n\n[type="search"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\n\ndetails {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n  display: list-item;\n}\n\n/* Misc\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 10+.\n */\n\ntemplate {\n  display: none;\n}\n\n/**\n * Add the correct display in IE 10.\n */\n\n[hidden] {\n  display: none;\n}\n',""]),e.exports=t},function(e,t,n){"use strict";e.exports=function(e,t){return t||(t={}),"string"!=typeof(e=e&&e.__esModule?e.default:e)?e:(/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e)}},function(e,t,n){"use strict";n.r(t),t.default=n.p+"40ffade77eb3b64901f8cc0395f64ebd.ttf"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"118e3a80184225424525fc1ce683e345.ttf"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"283fca3d9174a72e11cd4c8fb6e8ffb0.ttf"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"03523cf578d69fa923226ff457b92d90.ttf"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"7ae3aaf234902b96d0b2403d5dc68bb6.jpg"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"e05dc548e19f086a0dee492f3599677b.jpg"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"df03cb185eabcede2b7c3052806ddef9.jpg"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"305c2451e2f5035e7a08c3bd3c5d072c.jpg"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"cbf0f4c8efafe4634ba3f53222f79ee2.jpg"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"94010fc08fd3771f31d005db4d77e6e6.jpg"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"23c2b5509a23667360cfad94b176b82e.jpg"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"7ab8780136929ef514bf21b510a2d912.jpg"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"959358279f739ce82c52649344c57070.jpg"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"73742fd7d835389143664198ce98efb7.jpg"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"3dbb12a6fc210c1103a356d4e7a82a6c.jpg"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"421dae6f4d417af4018c1ffa14684fce.jpg"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"c448949e31aed8e7835ef33042ff1703.jpg"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"d035aa8d43842fd61c3f518ac75d3b2d.png"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"9adfbb4827f3b7b29c919264d940833e.jpg"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"53210fc34895dadbff1a936afe72a47d.jpg"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"e718167467e3e7a0a44cd6b485a74979.jpg"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"5486777297d2fa85ab24781e96325801.jpg"},function(e,t,n){"use strict";n.r(t);n(1);var i={send:function(e){return new Promise((function(t,n){e.nocache=Math.floor(1e6*Math.random()+1),e.Action="Send";var o=JSON.stringify(e);i.ajaxPost("https://smtpjs.com/v3/smtpjs.aspx?",o,(function(e){t(e)}))}))},ajaxPost:function(e,t,n){var o=i.createCORSRequest("POST",e);o.setRequestHeader("Content-type","application/x-www-form-urlencoded"),o.onload=function(){var e=o.responseText;null!=n&&n(e)},o.send(t)},ajax:function(e,t){var n=i.createCORSRequest("GET",e);n.onload=function(){var e=n.responseText;null!=t&&t(e)},n.send()},createCORSRequest:function(e,t){var n=new XMLHttpRequest;return"withCredentials"in n?n.open(e,t,!0):"undefined"!=typeof XDomainRequest?(n=new XDomainRequest).open(e,t):n=null,n}};class o{constructor(e){this.sender="spanglishtutorofficial@gmail.com",this.recipient="spanglishtutor20@gmail.com",this.subject=e,this.token="989ddf4e-ef10-4dd6-b979-e55b1bfb5cb3"}send(e){i.send({SecureToken:this.token,To:this.recipient,From:this.sender,Subject:this.subject,Body:this.bodyParser(e)}).then(e=>console.log(e))}bodyParser(e){let t=this.subject+"// ";for(let n in e)t+=`${n}: ${e[n]} // `;return t}}class r{constructor(e){this.form={},this.mailWorker=new o(e),document.querySelectorAll("input").forEach(e=>this.init(e)),document.querySelector("form").addEventListener("submit",e=>this.handleSubmit(e))}init(e){this.form[e.name]="",e.addEventListener("input",e=>this.handleChange(e))}handleChange(e){this.form[e.target.name]=e.target.value}handleSubmit(e){e.preventDefault(),this.mailWorker.send(this.form)}}new class{constructor(e){this.width=document.documentElement.clientWidth,this.step_right=1,this.step_left=e-1,this.slider=[],this.activeSlides=[],this.slides=document.querySelectorAll(".slide"),this.transformSlides(),this.initialDraw()}transformSlides(){this.slides.forEach((e,t)=>{this.slider[t]=e,e.remove()})}initialDraw(){let e=this.slider[this.step_left];e.classList.add("slide-active"),e.style.left=-this.width+"px",document.querySelector(".slider-content").appendChild(e),this.step_left--,this.activeSlides.push(e),e=this.slider[0],e.classList.add("slide-active"),document.querySelector(".slider-content").appendChild(e),this.activeSlides.push(e),e=this.slider[this.step_right],e.classList.add("slide-active"),e.style.left=this.width+"px",document.querySelector(".slider-content").appendChild(e),this.step_right++,this.activeSlides.push(e),document.querySelector(".left-arrow").addEventListener("click",()=>this.moveRight()),document.querySelector(".right-arrow").addEventListener("click",()=>this.moveLeft())}drawRight(){let e=this.slider[this.step_right];e.classList.add("slide-active"),e.style.left=this.width+"px",document.querySelector(".slider-content").appendChild(e),this.increase(),this.activeSlides.push(e)}drawLeft(){let e=this.slider[this.step_left];e.classList.add("slide-active"),e.style.left=-this.width+"px",document.querySelector(".slider-content").appendChild(e),this.decrease(),this.activeSlides.unshift(e)}increase(){this.step_left===this.slider.length-1?this.step_left=0:this.step_left++,this.step_right===this.slider.length-1?this.step_right=0:this.step_right++}decrease(){0===this.step_left?this.step_left=this.slider.length-1:this.step_left--,0===this.step_right?this.step_right=this.slider.length-1:this.step_right--}moveLeft(){for(let e=0;e<this.activeSlides.length;e++)this.activeSlides[e].style.left=-(this.activeSlides.length-e-1)*this.width+"px";if(this.drawRight(),this.activeSlides.length>3){this.activeSlides.shift().remove()}}moveRight(){for(let e=0;e<this.activeSlides.length;e++)this.activeSlides[e].style.left=e*this.width+"px";if(this.drawLeft(),this.activeSlides.length>3){this.activeSlides.pop().remove()}}}(4),new class{constructor(e){this.srcEl=e,this.init()}init(){let e=document.createElement("div"),t=document.createElement("div");e.classList.add("modal"),t.classList.add("close"),this.srcEl.appendChild(e),this.srcEl.appendChild(t),this.modal=e,this.addListeners()}createForm(e){this.modal.innerHTML='\n        <div class="modal-form">\n            <div class="form-img"></div>\n            <div class="form-text">\n                <h2>Успей записаться на занятие!</h2>\n                <p>Если вы знаете языки, вы везде будете как дома.</p>\n                <form>\n                    <input type="text" name="Имя" placeholder="Имя">\n                    <input type="text" name="Телефон" placeholder="+7 (999) 999-99-99">\n                    <input type="text" name="Email" placeholder="E-mail">\n                    <button type="submit">Записаться на занятие</button>\n                </form>\n            </div>\n        </div>';new r(e);this.srcEl.classList.add("modal-active")}closeModal(){this.srcEl.classList.remove("modal-active"),this.modal.innerHTML=""}addListeners(){document.querySelector(".open-form-single").addEventListener("click",()=>this.createForm("Запись на индивидуальное занятие")),document.querySelector(".open-form-group").addEventListener("click",()=>this.createForm("Запись на групповое занятие")),document.querySelector(".close").addEventListener("click",()=>this.closeModal())}}(document.querySelector(".modal-root"))}]);