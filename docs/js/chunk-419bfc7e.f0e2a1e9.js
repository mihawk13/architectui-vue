(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-419bfc7e"],{"0366":function(t,r,e){var n=e("1c0b");t.exports=function(t,r,e){if(n(t),void 0===r)return t;switch(e){case 0:return function(){return t.call(r)};case 1:return function(e){return t.call(r,e)};case 2:return function(e,n){return t.call(r,e,n)};case 3:return function(e,n,a){return t.call(r,e,n,a)}}return function(){return t.apply(r,arguments)}}},"06cf":function(t,r,e){var n=e("83ab"),a=e("d1e7"),i=e("5c6c"),s=e("fc6a"),o=e("c04e"),c=e("5135"),u=e("0cfb"),l=Object.getOwnPropertyDescriptor;r.f=n?l:function(t,r){if(t=s(t),r=o(r,!0),u)try{return l(t,r)}catch(e){}if(c(t,r))return i(!a.f.call(t,r),t[r])}},"159b":function(t,r,e){var n=e("da84"),a=e("fdbc"),i=e("17c2"),s=e("9112");for(var o in a){var c=n[o],u=c&&c.prototype;if(u&&u.forEach!==i)try{s(u,"forEach",i)}catch(l){u.forEach=i}}},"17c2":function(t,r,e){"use strict";var n=e("b727").forEach,a=e("a640"),i=e("ae40"),s=a("forEach"),o=i("forEach");t.exports=s&&o?[].forEach:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}},"1a01":function(t,r,e){"use strict";var n=function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{staticClass:"app-page-title"},[e("div",{staticClass:"page-title-wrapper"},[e("div",{staticClass:"page-title-heading"},[e("div",{staticClass:"page-title-icon"},[e("i",{class:t.icon})]),e("div",[t._v(" "+t._s(t.heading)+" "),e("div",{staticClass:"page-title-subheading"},[t._v(" "+t._s(t.subheading)+" ")])])]),e("div",{staticClass:"page-title-actions"},[e("button",{staticClass:"btn-shadow mr-3 btn btn-dark",attrs:{type:"button"}},[e("font-awesome-icon",{attrs:{icon:"star"}})],1),e("button",{staticClass:"btn-shadow d-inline-flex align-items-center btn btn-success",attrs:{type:"button"}},[e("font-awesome-icon",{staticClass:"mr-2",attrs:{icon:"plus"}}),t._v(" Create New ")],1)])])])},a=[],i=e("ecee"),s=e("c074"),o=e("ad3d");i["c"].add(s["J"],s["F"]);var c={components:{"font-awesome-icon":o["a"]},props:{icon:String,heading:String,subheading:String}},u=c,l=e("2877"),f=Object(l["a"])(u,n,a,!1,null,null,null);r["a"]=f.exports},"1c0b":function(t,r){t.exports=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t}},"1d80":function(t,r){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on "+t);return t}},"23cb":function(t,r,e){var n=e("a691"),a=Math.max,i=Math.min;t.exports=function(t,r){var e=n(t);return e<0?a(e+r,0):i(e,r)}},"23e7":function(t,r,e){var n=e("da84"),a=e("06cf").f,i=e("9112"),s=e("6eeb"),o=e("ce4e"),c=e("e893"),u=e("94ca");t.exports=function(t,r){var e,l,f,p,v,d,b=t.target,h=t.global,g=t.stat;if(l=h?n:g?n[b]||o(b,{}):(n[b]||{}).prototype,l)for(f in r){if(v=r[f],t.noTargetGet?(d=a(l,f),p=d&&d.value):p=l[f],e=u(h?f:b+(g?".":"#")+f,t.forced),!e&&void 0!==p){if(typeof v===typeof p)continue;c(v,p)}(t.sham||p&&p.sham)&&i(v,"sham",!0),s(l,f,v,t)}}},"241c":function(t,r,e){var n=e("ca84"),a=e("7839"),i=a.concat("length","prototype");r.f=Object.getOwnPropertyNames||function(t){return n(t,i)}},4160:function(t,r,e){"use strict";var n=e("23e7"),a=e("17c2");n({target:"Array",proto:!0,forced:[].forEach!=a},{forEach:a})},"428f":function(t,r,e){var n=e("da84");t.exports=n},"44ad":function(t,r,e){var n=e("d039"),a=e("c6b6"),i="".split;t.exports=n((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==a(t)?i.call(t,""):Object(t)}:Object},"4d64":function(t,r,e){var n=e("fc6a"),a=e("50c4"),i=e("23cb"),s=function(t){return function(r,e,s){var o,c=n(r),u=a(c.length),l=i(s,u);if(t&&e!=e){while(u>l)if(o=c[l++],o!=o)return!0}else for(;u>l;l++)if((t||l in c)&&c[l]===e)return t||l||0;return!t&&-1}};t.exports={includes:s(!0),indexOf:s(!1)}},"50c4":function(t,r,e){var n=e("a691"),a=Math.min;t.exports=function(t){return t>0?a(n(t),9007199254740991):0}},"56ef":function(t,r,e){var n=e("d066"),a=e("241c"),i=e("7418"),s=e("825a");t.exports=n("Reflect","ownKeys")||function(t){var r=a.f(s(t)),e=i.f;return e?r.concat(e(t)):r}},"65f0":function(t,r,e){var n=e("861d"),a=e("e8b5"),i=e("b622"),s=i("species");t.exports=function(t,r){var e;return a(t)&&(e=t.constructor,"function"!=typeof e||e!==Array&&!a(e.prototype)?n(e)&&(e=e[s],null===e&&(e=void 0)):e=void 0),new(void 0===e?Array:e)(0===r?0:r)}},7418:function(t,r){r.f=Object.getOwnPropertySymbols},7839:function(t,r){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},"7b0b":function(t,r,e){var n=e("1d80");t.exports=function(t){return Object(n(t))}},"94ca":function(t,r,e){var n=e("d039"),a=/#|\.prototype\./,i=function(t,r){var e=o[s(t)];return e==u||e!=c&&("function"==typeof r?n(r):!!r)},s=i.normalize=function(t){return String(t).replace(a,".").toLowerCase()},o=i.data={},c=i.NATIVE="N",u=i.POLYFILL="P";t.exports=i},"9c6f":function(t,r,e){"use strict";e.r(r);var n=function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",[e("page-title",{attrs:{heading:t.heading,subheading:t.subheading,icon:t.icon}}),e("b-row",[e("b-col",{attrs:{md:"6"}},[e("b-card",{staticClass:"mb-3",attrs:{title:"Basic"}},[e("b-progress",{attrs:{value:t.counter,max:t.max,"show-progress":"",animated:""}}),e("b-progress",{staticClass:"mt-1",attrs:{max:t.max,"show-value":""}},[e("b-progress-bar",{attrs:{value:.6*t.counter,variant:"success"}}),e("b-progress-bar",{attrs:{value:.25*t.counter,variant:"warning"}}),e("b-progress-bar",{attrs:{value:.15*t.counter,variant:"danger"}})],1),e("b-btn",{staticClass:"mt-4",on:{click:t.clicked}},[t._v("Click me")])],1),e("b-card",{staticClass:"mb-3",attrs:{title:"Colors"}},t._l(t.bars,(function(r,n){return e("div",{key:"bar-"+n,staticClass:"row mb-1"},[e("div",{staticClass:"col-sm-2"},[t._v(t._s(r.variant)+":")]),e("div",{staticClass:"col-sm-10 pt-1"},[e("b-progress",{key:r.variant,attrs:{value:r.value,variant:r.variant}})],1)])})),0)],1),e("b-col",{attrs:{md:"6"}},[e("b-card",{staticClass:"mb-3",attrs:{title:"Sizing"}},[e("b-progress",{staticClass:"mb-3",attrs:{value:t.value,"show-progress":""}}),e("b-progress",{staticClass:"mb-2",attrs:{height:"2rem",value:t.value,"show-progress":""}}),e("b-progress",{staticClass:"mb-2",attrs:{height:"20px",value:t.value,"show-progress":""}}),e("b-progress",{attrs:{height:"2px",value:t.value}})],1),e("b-card",{staticClass:"mb-3",attrs:{title:"Striped"}},[e("b-progress",{staticClass:"mb-2",attrs:{value:25,variant:"success",striped:t.striped}}),e("b-progress",{staticClass:"mb-2",attrs:{value:50,variant:"info",striped:t.striped}}),e("b-progress",{staticClass:"mb-2",attrs:{value:75,variant:"warning",striped:t.striped}}),e("b-progress",{staticClass:"mb-2",attrs:{value:100,variant:"danger",striped:t.striped}}),e("b-button",{attrs:{variant:"secondary"},on:{click:function(r){t.striped=!t.striped}}},[t._v(" "+t._s(t.striped?"Remove":"Add")+" Striped ")])],1)],1)],1)],1)},a=[],i=(e("4160"),e("159b"),e("1a01")),s={components:{PageTitle:i["a"]},data:function(){return{heading:"Progress Bar",subheading:"You can use the progress bars on their own or in combination with other widgets.",icon:"pe-7s-filter icon-gradient bg-grow-early",counter:45,max:100,bars:[{variant:"success",value:75},{variant:"info",value:75},{variant:"warning",value:75},{variant:"danger",value:75},{variant:"primary",value:75},{variant:"secondary",value:75},{variant:"dark",value:75},{variant:"alternate",value:75},{variant:"focus",value:75}],timer:null,striped:!0,value:75}},methods:{clicked:function(){this.counter=Math.random()*this.max}},mounted:function(){var t=this;this.timer=setInterval((function(){t.bars.forEach((function(t){return t.value=25+75*Math.random()}))}),2e3)},beforeDestroy:function(){clearInterval(this.timer),this.timer=null}},o=s,c=e("2877"),u=Object(c["a"])(o,n,a,!1,null,null,null);r["default"]=u.exports},a640:function(t,r,e){"use strict";var n=e("d039");t.exports=function(t,r){var e=[][t];return!!e&&n((function(){e.call(null,r||function(){throw 1},1)}))}},a691:function(t,r){var e=Math.ceil,n=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?n:e)(t)}},ae40:function(t,r,e){var n=e("83ab"),a=e("d039"),i=e("5135"),s=Object.defineProperty,o={},c=function(t){throw t};t.exports=function(t,r){if(i(o,t))return o[t];r||(r={});var e=[][t],u=!!i(r,"ACCESSORS")&&r.ACCESSORS,l=i(r,0)?r[0]:c,f=i(r,1)?r[1]:void 0;return o[t]=!!e&&!a((function(){if(u&&!n)return!0;var t={length:-1};u?s(t,1,{enumerable:!0,get:c}):t[1]=1,e.call(t,l,f)}))}},b727:function(t,r,e){var n=e("0366"),a=e("44ad"),i=e("7b0b"),s=e("50c4"),o=e("65f0"),c=[].push,u=function(t){var r=1==t,e=2==t,u=3==t,l=4==t,f=6==t,p=5==t||f;return function(v,d,b,h){for(var g,m,y=i(v),w=a(y),x=n(d,b,3),C=s(w.length),S=0,L=h||o,O=r?L(v,C):e?L(v,0):void 0;C>S;S++)if((p||S in w)&&(g=w[S],m=x(g,S,y),t))if(r)O[S]=m;else if(m)switch(t){case 3:return!0;case 5:return g;case 6:return S;case 2:c.call(O,g)}else if(l)return!1;return f?-1:u||l?l:O}};t.exports={forEach:u(0),map:u(1),filter:u(2),some:u(3),every:u(4),find:u(5),findIndex:u(6)}},ca84:function(t,r,e){var n=e("5135"),a=e("fc6a"),i=e("4d64").indexOf,s=e("d012");t.exports=function(t,r){var e,o=a(t),c=0,u=[];for(e in o)!n(s,e)&&n(o,e)&&u.push(e);while(r.length>c)n(o,e=r[c++])&&(~i(u,e)||u.push(e));return u}},d066:function(t,r,e){var n=e("428f"),a=e("da84"),i=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,r){return arguments.length<2?i(n[t])||i(a[t]):n[t]&&n[t][r]||a[t]&&a[t][r]}},d1e7:function(t,r,e){"use strict";var n={}.propertyIsEnumerable,a=Object.getOwnPropertyDescriptor,i=a&&!n.call({1:2},1);r.f=i?function(t){var r=a(this,t);return!!r&&r.enumerable}:n},e893:function(t,r,e){var n=e("5135"),a=e("56ef"),i=e("06cf"),s=e("9bf2");t.exports=function(t,r){for(var e=a(r),o=s.f,c=i.f,u=0;u<e.length;u++){var l=e[u];n(t,l)||o(t,l,c(r,l))}}},e8b5:function(t,r,e){var n=e("c6b6");t.exports=Array.isArray||function(t){return"Array"==n(t)}},fc6a:function(t,r,e){var n=e("44ad"),a=e("1d80");t.exports=function(t){return n(a(t))}},fdbc:function(t,r){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}}}]);