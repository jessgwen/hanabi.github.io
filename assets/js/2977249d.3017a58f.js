(self.webpackChunkhanabi_github_io=self.webpackChunkhanabi_github_io||[]).push([[8577],{3905:function(e,t,l){"use strict";l.d(t,{Zo:function(){return h},kt:function(){return u}});var r=l(7294);function a(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function i(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,r)}return l}function n(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?i(Object(l),!0).forEach((function(t){a(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):i(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function c(e,t){if(null==e)return{};var l,r,a=function(e,t){if(null==e)return{};var l,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)l=i[r],t.indexOf(l)>=0||(a[l]=e[l]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)l=i[r],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(a[l]=e[l])}return a}var o=r.createContext({}),s=function(e){var t=r.useContext(o),l=t;return e&&(l="function"==typeof e?e(t):n(n({},t),e)),l},h=function(e){var t=s(e.components);return r.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var l=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,h=c(e,["components","mdxType","originalType","parentName"]),d=s(l),u=a,g=d["".concat(o,".").concat(u)]||d[u]||m[u]||i;return l?r.createElement(g,n(n({ref:t},h),{},{components:l})):r.createElement(g,n({ref:t},h))}));function u(e,t){var l=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=l.length,n=new Array(i);n[0]=d;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:a,n[1]=c;for(var s=2;s<i;s++)n[s]=l[s];return r.createElement.apply(null,n)}return r.createElement.apply(null,l)}d.displayName="MDXCreateElement"},8787:function(e,t,l){"use strict";l.d(t,{Z:function(){return s}});var r=l(7294),a=function(e,t){return(a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var l in t)t.hasOwnProperty(l)&&(e[l]=t[l])})(e,t)};function i(e){var t=e.className,l=e.counterClockwise,a=e.dashRatio,i=e.pathRadius,o=e.strokeWidth,s=e.style;return(0,r.createElement)("path",{className:t,style:Object.assign({},s,c({pathRadius:i,dashRatio:a,counterClockwise:l})),d:n({pathRadius:i,counterClockwise:l}),strokeWidth:o,fillOpacity:0})}function n(e){var t=e.pathRadius,l=e.counterClockwise?1:0;return"\n      M 50,50\n      m 0,-"+t+"\n      a "+t+","+t+" "+l+" 1 1 0,"+2*t+"\n      a "+t+","+t+" "+l+" 1 1 0,-"+2*t+"\n    "}function c(e){var t=e.counterClockwise,l=e.dashRatio,r=e.pathRadius,a=2*Math.PI*r,i=(1-l)*a;return{strokeDasharray:a+"px "+a+"px",strokeDashoffset:(t?-i:i)+"px"}}var o=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return function(e,t){function l(){this.constructor=e}a(e,t),e.prototype=null===t?Object.create(t):(l.prototype=t.prototype,new l)}(t,e),t.prototype.getBackgroundPadding=function(){return this.props.background?this.props.backgroundPadding:0},t.prototype.getPathRadius=function(){return 50-this.props.strokeWidth/2-this.getBackgroundPadding()},t.prototype.getPathRatio=function(){var e=this.props,t=e.value,l=e.minValue,r=e.maxValue;return(Math.min(Math.max(t,l),r)-l)/(r-l)},t.prototype.render=function(){var e=this.props,t=e.circleRatio,l=e.className,a=e.classes,n=e.counterClockwise,c=e.styles,o=e.strokeWidth,s=e.text,h=this.getPathRadius(),m=this.getPathRatio();return(0,r.createElement)("svg",{className:a.root+" "+l,style:c.root,viewBox:"0 0 100 100","data-test-id":"CircularProgressbar"},this.props.background?(0,r.createElement)("circle",{className:a.background,style:c.background,cx:50,cy:50,r:50}):null,(0,r.createElement)(i,{className:a.trail,counterClockwise:n,dashRatio:t,pathRadius:h,strokeWidth:o,style:c.trail}),(0,r.createElement)(i,{className:a.path,counterClockwise:n,dashRatio:m*t,pathRadius:h,strokeWidth:o,style:c.path}),s?(0,r.createElement)("text",{className:a.text,style:c.text,x:50,y:50},s):null)},t.defaultProps={background:!1,backgroundPadding:0,circleRatio:1,classes:{root:"CircularProgressbar",trail:"CircularProgressbar-trail",path:"CircularProgressbar-path",text:"CircularProgressbar-text",background:"CircularProgressbar-background"},counterClockwise:!1,className:"",maxValue:100,minValue:0,strokeWidth:8,styles:{root:{},trail:{},path:{},text:{},background:{}},text:""},t}(r.Component);function s(e){var t=e.part,l=Math.round((t-1)/60*100);return r.createElement("div",{id:"percent",style:{position:"fixed",display:"none",width:"8em",height:"8em"}},r.createElement(o,{value:l,text:l+"%"}))}},6261:function(e,t,l){"use strict";l.r(t),l.d(t,{contentTitle:function(){return Ie},default:function(){return De},frontMatter:function(){return Se},metadata:function(){return Re},toc:function(){return Ae}});var r,a,i,n,c,o,s,h,m,d,u,g,p,y,f,x,b,w,E,v,k=l(2122),N=l(9756),O=l(7294),P=l(3905),T=l(8787),j=["title","titleId"];function C(){return(C=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r])}return e}).apply(this,arguments)}function _(e,t){if(null==e)return{};var l,r,a=function(e,t){if(null==e)return{};var l,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)l=i[r],t.indexOf(l)>=0||(a[l]=e[l]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)l=i[r],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(a[l]=e[l])}return a}var B,H,G,S,I,R,A,M,D,W,z,F,X,Z,V,q,L,Q,U=function(e){var t=e.title,l=e.titleId,k=_(e,j);return O.createElement("svg",C({xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",baseProfile:"full",height:250,viewBox:"0 0 944 250",width:944,className:"example","aria-labelledby":l},k),t?O.createElement("title",{id:l},t):null,r||(r=O.createElement("defs",null,O.createElement("filter",{x:0,y:0,width:1,height:1,id:"good-touch-principle-1_yml__a"},O.createElement("feFlood",{floodColor:"#0ff"})))),a||(a=O.createElement("image",{height:100,width:70,xlinkHref:"/img/pieces/cards/red1.svg"})),i||(i=O.createElement("image",{height:100,width:70,x:78,xlinkHref:"/img/pieces/cards/yellow0.svg"})),n||(n=O.createElement("image",{height:100,width:70,x:156,xlinkHref:"/img/pieces/cards/green0.svg"})),c||(c=O.createElement("image",{height:100,width:70,x:234,xlinkHref:"/img/pieces/cards/blue0.svg"})),o||(o=O.createElement("image",{height:100,width:70,x:312,xlinkHref:"/img/pieces/cards/purple0.svg"})),O.createElement("svg",C({height:100,width:90,x:464,className:"example","aria-labelledby":l},k),t?O.createElement("title",{id:l},t):null,s||(s=O.createElement("text",{className:"site-theme-text",dominantBaseline:"central",x:"0%",y:"50%",fontSize:"1.4em"},"Alice")),h||(h=O.createElement("text",{dominantBaseline:"central",dy:30,filter:"url(#good-touch-principle-1_yml__a)",x:"0%",y:"50%"},"Clue Giver")),m||(m=O.createElement("text",{dominantBaseline:"central",dy:30,x:"0%",y:"50%"},"Clue Giver"))),O.createElement("svg",C({height:100,width:70,x:554,className:"example","aria-labelledby":l},k),t?O.createElement("title",{id:l},t):null,d||(d=O.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),O.createElement("svg",C({height:100,width:70,x:632,className:"example","aria-labelledby":l},k),t?O.createElement("title",{id:l},t):null,u||(u=O.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),O.createElement("svg",C({height:100,width:70,x:710,className:"example","aria-labelledby":l},k),t?O.createElement("title",{id:l},t):null,g||(g=O.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),O.createElement("svg",C({height:100,width:70,x:788,className:"example","aria-labelledby":l},k),t?O.createElement("title",{id:l},t):null,p||(p=O.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),O.createElement("svg",C({height:100,width:70,x:866,className:"example","aria-labelledby":l},k),t?O.createElement("title",{id:l},t):null,y||(y=O.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),O.createElement("svg",C({height:100,width:90,x:464,y:125,className:"example","aria-labelledby":l},k),t?O.createElement("title",{id:l},t):null,f||(f=O.createElement("text",{className:"site-theme-text",dominantBaseline:"central",x:"0%",y:"50%",fontSize:"1.4em"},"Bob"))),x||(x=O.createElement("image",{height:100,width:70,x:554,xlinkHref:"/img/pieces/cards/red2.svg",y:125})),b||(b=O.createElement("image",{height:100,width:70,x:632,xlinkHref:"/img/pieces/cards/red4.svg",y:125})),w||(w=O.createElement("image",{height:100,width:70,x:710,xlinkHref:"/img/pieces/cards/red4.svg",y:125})),O.createElement("svg",C({height:100,width:70,x:788,y:125,className:"example","aria-labelledby":l},k),t?O.createElement("title",{id:l},t):null,E||(E=O.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),O.createElement("svg",C({height:100,width:70,x:866,y:125,className:"example","aria-labelledby":l},k),t?O.createElement("title",{id:l},t):null,v||(v=O.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))))},J=["title","titleId"];function K(){return(K=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r])}return e}).apply(this,arguments)}function Y(e,t){if(null==e)return{};var l,r,a=function(e,t){if(null==e)return{};var l,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)l=i[r],t.indexOf(l)>=0||(a[l]=e[l]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)l=i[r],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(a[l]=e[l])}return a}var $,ee,te,le,re,ae,ie,ne,ce,oe,se,he,me,de,ue,ge,pe,ye,fe,xe,be,we,Ee,ve,ke,Ne,Oe,Pe,Te,je=function(e){var t=e.title,l=e.titleId,r=Y(e,J);return O.createElement("svg",K({xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",baseProfile:"full",height:253,viewBox:"0 -3 944 253",width:944,className:"example","aria-labelledby":l},r),t?O.createElement("title",{id:l},t):null,B||(B=O.createElement("image",{height:100,width:70,xlinkHref:"/img/pieces/cards/red3.svg"})),H||(H=O.createElement("image",{height:100,width:70,x:78,xlinkHref:"/img/pieces/cards/yellow2.svg"})),G||(G=O.createElement("image",{height:100,width:70,x:156,xlinkHref:"/img/pieces/cards/green2.svg"})),S||(S=O.createElement("image",{height:100,width:70,x:234,xlinkHref:"/img/pieces/cards/blue2.svg"})),I||(I=O.createElement("image",{height:100,width:70,x:312,xlinkHref:"/img/pieces/cards/purple4.svg"})),O.createElement("svg",K({height:100,width:90,x:464,className:"example","aria-labelledby":l},r),t?O.createElement("title",{id:l},t):null,R||(R=O.createElement("text",{className:"site-theme-text",dominantBaseline:"central",x:"0%",y:"50%",fontSize:"1.4em"},"Alice"))),O.createElement("svg",K({height:100,width:70,x:554,className:"example","aria-labelledby":l},r),t?O.createElement("title",{id:l},t):null,A||(A=O.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),O.createElement("svg",K({height:100,width:70,x:632,className:"example","aria-labelledby":l},r),t?O.createElement("title",{id:l},t):null,M||(M=O.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),O.createElement("svg",K({height:100,width:70,x:710,className:"example","aria-labelledby":l},r),t?O.createElement("title",{id:l},t):null,D||(D=O.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),W||(W=O.createElement("rect",{fill:"orange",height:106,rx:5,ry:5,width:76,x:785,y:-3})),O.createElement("svg",K({height:100,width:70,x:788,className:"example","aria-labelledby":l},r),t?O.createElement("title",{id:l},t):null,z||(z=O.createElement("image",{height:100,width:70,xlinkHref:"/img/pieces/cards/purple.svg"}))),O.createElement("svg",K({height:100,width:70,x:866,className:"example","aria-labelledby":l},r),t?O.createElement("title",{id:l},t):null,F||(F=O.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),O.createElement("svg",K({height:100,width:90,x:464,y:125,className:"example","aria-labelledby":l},r),t?O.createElement("title",{id:l},t):null,X||(X=O.createElement("text",{className:"site-theme-text",dominantBaseline:"central",x:"0%",y:"50%",fontSize:"1.4em"},"Bob"))),O.createElement("svg",K({height:100,width:70,x:554,y:125,className:"example","aria-labelledby":l},r),t?O.createElement("title",{id:l},t):null,Z||(Z=O.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),O.createElement("svg",K({height:100,width:70,x:632,y:125,className:"example","aria-labelledby":l},r),t?O.createElement("title",{id:l},t):null,V||(V=O.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),O.createElement("svg",K({height:100,width:70,x:710,y:125,className:"example","aria-labelledby":l},r),t?O.createElement("title",{id:l},t):null,q||(q=O.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),O.createElement("svg",K({height:100,width:70,x:788,y:125,className:"example","aria-labelledby":l},r),t?O.createElement("title",{id:l},t):null,L||(L=O.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),O.createElement("svg",K({height:100,width:70,x:866,y:125,className:"example","aria-labelledby":l},r),t?O.createElement("title",{id:l},t):null,Q||(Q=O.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))))},Ce=["title","titleId"];function _e(){return(_e=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r])}return e}).apply(this,arguments)}function Be(e,t){if(null==e)return{};var l,r,a=function(e,t){if(null==e)return{};var l,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)l=i[r],t.indexOf(l)>=0||(a[l]=e[l]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)l=i[r],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(a[l]=e[l])}return a}var He=function(e){var t=e.title,l=e.titleId,r=Be(e,Ce);return O.createElement("svg",_e({xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",baseProfile:"full",height:265,viewBox:"0 0 944 265",width:944,className:"example","aria-labelledby":l},r),t?O.createElement("title",{id:l},t):null,$||($=O.createElement("defs",null,O.createElement("filter",{x:0,y:0,width:1,height:1,id:"good-touch-principle-3_yml__a"},O.createElement("feFlood",{floodColor:"#0ff"})),O.createElement("filter",{id:"good-touch-principle-3_yml__b"},O.createElement("feOffset",{in:"SourceAlpha",dx:2,dy:2,result:"offsetblur"}),O.createElement("feComponentTransfer",{result:"shadow"},O.createElement("feFuncA",{type:"linear",slope:.5})),O.createElement("feMorphology",{in:"SourceAlpha",operator:"dilate",radius:1,result:"border"}),O.createElement("feMerge",null,O.createElement("feMergeNode",{in:"shadow"}),O.createElement("feMergeNode",{in:"border"}),O.createElement("feMergeNode",{in:"SourceGraphic"}))))),ee||(ee=O.createElement("image",{height:100,width:70,xlinkHref:"/img/pieces/cards/red1.svg"})),te||(te=O.createElement("image",{height:100,width:70,x:78,xlinkHref:"/img/pieces/cards/yellow1.svg"})),le||(le=O.createElement("image",{height:100,width:70,x:156,xlinkHref:"/img/pieces/cards/green0.svg"})),re||(re=O.createElement("image",{height:100,width:70,x:234,xlinkHref:"/img/pieces/cards/blue1.svg"})),ae||(ae=O.createElement("image",{height:100,width:70,x:312,xlinkHref:"/img/pieces/cards/purple0.svg"})),O.createElement("svg",_e({height:100,width:90,x:464,className:"example","aria-labelledby":l},r),t?O.createElement("title",{id:l},t):null,ie||(ie=O.createElement("text",{className:"site-theme-text",dominantBaseline:"central",x:"0%",y:"50%",fontSize:"1.4em"},"Alice")),ne||(ne=O.createElement("text",{dominantBaseline:"central",dy:30,filter:"url(#good-touch-principle-3_yml__a)",x:"0%",y:"50%"},"Clue Giver")),ce||(ce=O.createElement("text",{dominantBaseline:"central",dy:30,x:"0%",y:"50%"},"Clue Giver"))),O.createElement("svg",_e({height:100,width:70,x:554,className:"example","aria-labelledby":l},r),t?O.createElement("title",{id:l},t):null,oe||(oe=O.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),O.createElement("svg",_e({height:100,width:70,x:632,className:"example","aria-labelledby":l},r),t?O.createElement("title",{id:l},t):null,se||(se=O.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),O.createElement("svg",_e({height:100,width:70,x:710,className:"example","aria-labelledby":l},r),t?O.createElement("title",{id:l},t):null,he||(he=O.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),O.createElement("svg",_e({height:100,width:70,x:788,className:"example","aria-labelledby":l},r),t?O.createElement("title",{id:l},t):null,me||(me=O.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),O.createElement("svg",_e({height:100,width:70,x:866,className:"example","aria-labelledby":l},r),t?O.createElement("title",{id:l},t):null,de||(de=O.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),O.createElement("svg",_e({height:100,width:90,x:464,y:125,className:"example","aria-labelledby":l},r),t?O.createElement("title",{id:l},t):null,ue||(ue=O.createElement("text",{className:"site-theme-text",dominantBaseline:"central",x:"0%",y:"50%",fontSize:"1.4em"},"Bob"))),O.createElement("svg",_e({height:100,width:70,x:554,y:125,className:"example","aria-labelledby":l},r),t?O.createElement("title",{id:l},t):null,ge||(ge=O.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),pe||(pe=O.createElement("rect",{fill:"orange",height:106,rx:5,ry:5,width:76,x:629,y:122})),O.createElement("svg",_e({height:100,width:70,x:632,y:125,className:"example","aria-labelledby":l},r),t?O.createElement("title",{id:l},t):null,ye||(ye=O.createElement("image",{height:100,width:70,xlinkHref:"/img/pieces/cards/yellow.svg"}))),fe||(fe=O.createElement("image",{height:70,width:50,x:642,xlinkHref:"/img/pieces/arrow.svg",y:85})),xe||(xe=O.createElement("circle",{cx:667,cy:110,fill:"#ff0",r:15,stroke:"#000",strokeWidth:2})),O.createElement("svg",_e({height:20,width:64,x:635,y:230,className:"example","aria-labelledby":l},r),t?O.createElement("title",{id:l},t):null,be||(be=O.createElement("path",{fill:"gold",stroke:"#000",d:"M0 0h64v20H0z"})),O.createElement("svg",_e({height:20,width:64,className:"example","aria-labelledby":l},r),t?O.createElement("title",{id:l},t):null,we||(we=O.createElement("text",{dominantBaseline:"central",textAnchor:"middle",x:"50%",y:"50%"},"Focus")))),O.createElement("svg",_e({height:100,width:70,x:632,y:125,className:"example","aria-labelledby":l},r),t?O.createElement("title",{id:l},t):null,Ee||(Ee=O.createElement("text",{dominantBaseline:"central",fill:"#fff",stroke:"#fff",textAnchor:"middle",x:"50%",y:"50%",fontSize:"1.5em",filter:"url(#good-touch-principle-3_yml__b)"},"(2)"))),ve||(ve=O.createElement("rect",{fill:"orange",height:106,rx:5,ry:5,width:76,x:707,y:122})),O.createElement("svg",_e({height:100,width:70,x:710,y:125,className:"example","aria-labelledby":l},r),t?O.createElement("title",{id:l},t):null,ke||(ke=O.createElement("image",{height:100,width:70,xlinkHref:"/img/pieces/cards/yellow.svg"}))),Ne||(Ne=O.createElement("image",{height:70,width:50,x:720,xlinkHref:"/img/pieces/arrow.svg",y:85})),Oe||(Oe=O.createElement("circle",{cx:745,cy:110,fill:"#ff0",r:15,stroke:"#000",strokeWidth:2})),O.createElement("svg",_e({height:100,width:70,x:788,y:125,className:"example","aria-labelledby":l},r),t?O.createElement("title",{id:l},t):null,Pe||(Pe=O.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),O.createElement("svg",_e({height:100,width:70,x:866,y:125,className:"example","aria-labelledby":l},r),t?O.createElement("title",{id:l},t):null,Te||(Te=O.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))))},Ge=["components"],Se={id:"good-touch-principle",title:"Good Touch Principle (GTP)"},Ie=void 0,Re={unversionedId:"beginner/good-touch-principle",id:"beginner/good-touch-principle",isDocsHomePage:!1,title:"Good Touch Principle (GTP)",description:"- When cluing cards, we follow Good Touch Principle - we only touch cards that will eventually be played.",source:"@site/docs/beginner/good-touch-principle.md",sourceDirName:"beginner",slug:"/beginner/good-touch-principle",permalink:"/docs/beginner/good-touch-principle",editUrl:"https://github.com/hanabi/hanabi.github.io/edit/main/docs/beginner/good-touch-principle.md",version:"current",frontMatter:{id:"good-touch-principle",title:"Good Touch Principle (GTP)"},sidebar:"mainSidebar",previous:{title:"The Three Main Principles",permalink:"/docs/beginner/three-main-principles"},next:{title:"Good Touch Principle (Question 1)",permalink:"/docs/beginner/good-touch-principle-question-1"}},Ae=[],Me={toc:Ae};function De(e){var t=e.components,l=(0,N.Z)(e,Ge);return(0,P.kt)("wrapper",(0,k.Z)({},Me,l,{components:t,mdxType:"MDXLayout"}),(0,P.kt)(T.Z,{part:"38",mdxType:"BeginnersGuideProgress"}),(0,P.kt)("ul",null,(0,P.kt)("li",{parentName:"ul"},"When cluing cards, we follow ",(0,P.kt)("em",{parentName:"li"},"Good Touch Principle")," - ",(0,P.kt)("strong",{parentName:"li"},"we only touch cards that will eventually be played"),".",(0,P.kt)("ul",{parentName:"li"},(0,P.kt)("li",{parentName:"ul"},"It would be a ",(0,P.kt)("em",{parentName:"li"},"Bad Touch")," if someone touched a card that was already played on the stacks or was already clued in someone else's hand."))),(0,P.kt)("li",{parentName:"ul"},(0,P.kt)("em",{parentName:"li"},"Good Touch Principle")," is a powerful building block for logic and reasoning. If everyone only touches good cards, then players can greatly narrow down the possibilities for the clued cards in their hand!"),(0,P.kt)("li",{parentName:"ul"},"In the example below:",(0,P.kt)("ul",{parentName:"li"},(0,P.kt)("li",{parentName:"ul"},"Alice wants to give a ",(0,P.kt)("em",{parentName:"li"},"Play Clue")," to the red 2."),(0,P.kt)("li",{parentName:"ul"},"Alice has a choice between cluing red and cluing number 2."),(0,P.kt)("li",{parentName:"ul"},"If she clues number 2, it would uniquely touch the red 2 on slot 1."),(0,P.kt)("li",{parentName:"ul"},"If she clues red, then it would touch slot 1, slot 2, and slot 3. This clue would violate ",(0,P.kt)("em",{parentName:"li"},"Good Touch Principle"),", since the red 4's would be duplicated in Bob's hand."),(0,P.kt)("li",{parentName:"ul"},"Thus, the correct clue for Alice to give is number 2.")))),(0,P.kt)(U,{mdxType:"GoodTouchPrinciple1"}),(0,P.kt)("ul",null,(0,P.kt)("li",{parentName:"ul"},"In the example below:",(0,P.kt)("ul",{parentName:"li"},(0,P.kt)("li",{parentName:"ul"},"Alice has an unknown purple card in her hand."),(0,P.kt)("li",{parentName:"ul"},"Alice can see that the purple stack is played up to purple 4. The only other useful purple card left is the purple 5."),(0,P.kt)("li",{parentName:"ul"},"Alice also knows that according to ",(0,P.kt)("em",{parentName:"li"},"Good Touch Principle"),", every clued card will eventually be played."),(0,P.kt)("li",{parentName:"ul"},"Thus, by process of elimination, she can reason that the unknown purple card in her hand must be purple 5, and she can immediately play it.")))),(0,P.kt)(je,{mdxType:"GoodTouchPrinciple2"}),(0,P.kt)("ul",null,(0,P.kt)("li",{parentName:"ul"},"In the example below:",(0,P.kt)("ul",{parentName:"li"},(0,P.kt)("li",{parentName:"ul"},"In the middle of a game, Alice clues yellow to Bob, touching slot 2 and slot 3."),(0,P.kt)("li",{parentName:"ul"},"The focus of the clue is on slot 2. This must be a ",(0,P.kt)("em",{parentName:"li"},"Play Clue"),", so Bob marks his slot 2 card as a yellow 2."),(0,P.kt)("li",{parentName:"ul"},"Slot 3 was also touched by the clue, but it was not the focus. From ",(0,P.kt)("em",{parentName:"li"},"Good Touch Principle"),", Bob knows that it must be playable in the future."),(0,P.kt)("li",{parentName:"ul"},"Therefore, Bob marks his slot 3 card as either yellow 3, yellow 4, or yellow 5.")))),(0,P.kt)(He,{mdxType:"GoodTouchPrinciple3"}))}De.isMDXComponent=!0}}]);