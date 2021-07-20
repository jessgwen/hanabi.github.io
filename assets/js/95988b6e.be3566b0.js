/*! For license information please see 95988b6e.be3566b0.js.LICENSE.txt */
(self.webpackChunkhanabi_github_io=self.webpackChunkhanabi_github_io||[]).push([[4815,5429,9108,5212,5247,7484,6143,7830,4704,8084,6263,5567,3580,6485,6184,6551,4090,8359,5193,7087],{8173:function(e,t,i){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,n=new Array(t);i<t;i++)n[i]=e[i];return n}function r(e,t){var i="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(i)return(i=i.call(e)).next.bind(i);if(Array.isArray(e)||(i=function(e,t){if(e){if("string"==typeof e)return n(e,t);var i=Object.prototype.toString.call(e).slice(8,-1);return"Object"===i&&e.constructor&&(i=e.constructor.name),"Map"===i||"Set"===i?Array.from(e):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?n(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){i&&(e=i);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}i.d(t,{Z:function(){return r}})},3905:function(e,t,i){"use strict";i.d(t,{Zo:function(){return u},kt:function(){return g}});var n=i(7294);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function l(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function o(e,t){if(null==e)return{};var i,n,r=function(e,t){if(null==e)return{};var i,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var c=n.createContext({}),s=function(e){var t=n.useContext(c),i=t;return e&&(i="function"==typeof e?e(t):l(l({},t),e)),i},u=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var i=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=s(i),g=r,m=d["".concat(c,".").concat(g)]||d[g]||p[g]||a;return i?n.createElement(m,l(l({ref:t},u),{},{components:i})):n.createElement(m,l({ref:t},u))}));function g(e,t){var i=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=i.length,l=new Array(a);l[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var s=2;s<a;s++)l[s]=i[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,i)}d.displayName="MDXCreateElement"},8215:function(e,t,i){"use strict";var n=i(7294);t.Z=function(e){var t=e.children,i=e.hidden,r=e.className;return n.createElement("div",{role:"tabpanel",hidden:i,className:r},t)}},5064:function(e,t,i){"use strict";i.d(t,{Z:function(){return p}});var n=i(7294),r=i(9443);var a=function(){var e=(0,n.useContext)(r.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},l=i(6010),o="tabItem_1uMI",c="tabItemActive_2DSg";var s=37,u=39;var p=function(e){var t=e.lazy,i=e.block,r=e.defaultValue,p=e.values,d=e.groupId,g=e.className,m=a(),h=m.tabGroupChoices,f=m.setTabGroupChoices,b=(0,n.useState)(r),v=b[0],y=b[1],x=n.Children.toArray(e.children),w=[];if(null!=d){var k=h[d];null!=k&&k!==v&&p.some((function(e){return e.value===k}))&&y(k)}var E=function(e){var t=e.currentTarget,i=w.indexOf(t),n=p[i].value;y(n),null!=d&&(f(d,n),setTimeout((function(){var e,i,n,r,a,l,o,s;(e=t.getBoundingClientRect(),i=e.top,n=e.left,r=e.bottom,a=e.right,l=window,o=l.innerHeight,s=l.innerWidth,i>=0&&a<=s&&r<=o&&n>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(c),setTimeout((function(){return t.classList.remove(c)}),2e3))}),150))},q=function(e){var t,i;switch(e.keyCode){case u:var n=w.indexOf(e.target)+1;i=w[n]||w[0];break;case s:var r=w.indexOf(e.target)-1;i=w[r]||w[w.length-1]}null==(t=i)||t.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":i},g)},p.map((function(e){var t=e.value,i=e.label;return n.createElement("li",{role:"tab",tabIndex:v===t?0:-1,"aria-selected":v===t,className:(0,l.Z)("tabs__item",o,{"tabs__item--active":v===t}),key:t,ref:function(e){return w.push(e)},onKeyDown:q,onFocus:E,onClick:E},i)}))),t?(0,n.cloneElement)(x.filter((function(e){return e.props.value===v}))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},x.map((function(e,t){return(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==v})}))))}},9443:function(e,t,i){"use strict";var n=(0,i(7294).createContext)(void 0);t.Z=n},6679:function(e){e.exports={mainSidebar:["about",{"Beginner's Guide":["beginner","beginner/card-layout",{"The Chop":["beginner/chop","beginner/chop-question-1","beginner/chop-question-2","beginner/chop-question-3","beginner/chop-question-4"]},"beginner/two-types-of-clues",{"1 - Play Clues":["beginner/play-clues","beginner/play-clues-question-1","beginner/play-clues-question-2","beginner/delayed-play-clues","beginner/delayed-play-clues-question-1","beginner/delayed-play-clues-question-2","beginner/delayed-play-clues-question-3"]},{"2 - Save Clues":["beginner/save-clues","beginner/5-save","beginner/5-save-question-1","beginner/5-save-question-2","beginner/2-save","beginner/2-save-question-1","beginner/2-save-question-2","beginner/2-save-question-3","beginner/critical-save","beginner/critical-save-question-1","beginner/critical-save-question-2","beginner/critical-save-question-3","beginner/critical-save-question-4"]},{"Clue Interpretation":["beginner/single-card-focus","beginner/single-card-focus-question-1","beginner/single-card-focus-question-2","beginner/single-card-focus-question-3","beginner/single-card-focus-question-4","beginner/clue-interpretation","beginner/clue-interpretation-question-1","beginner/clue-interpretation-question-2","beginner/clue-interpretation-question-3","beginner/clue-interpretation-question-4"]},"beginner/three-main-principles",{"1 - Good Touch Principle":["beginner/good-touch-principle","beginner/good-touch-principle-question-1","beginner/good-touch-principle-question-2","beginner/good-touch-principle-question-3","beginner/good-touch-principle-question-4"]},{"2 - Save Principle":["beginner/save-principle","beginner/save-principle-question-1","beginner/save-principle-question-2"]},{"3 - Minimum Clue Value Principle":["beginner/minimum-clue-value-principle","beginner/minimum-clue-value-principle-question-1"]},{"The Early Game":["beginner/early-game","beginner/early-game-question-1","beginner/early-game-question-2","beginner/early-game-question-3","beginner/early-game-question-4"]},"beginner/other-general-strategy",{"Special Moves":["beginner/special-moves","beginner/prompt","beginner/prompt-question-1","beginner/prompt-question-2","beginner/prompt-question-3","beginner/finesse","beginner/finesse-question-1","beginner/finesse-question-2"]},"beginner/next-steps"]},"how-to-join","learning-path",{"Basic Strategies":["reference","first-principles","level-1","level-2","level-3","level-4","level-5","level-6","level-7","level-8","level-9","level-10","level-11","level-12","level-13","level-14","level-15","level-16","level-17","level-18","level-19","level-20","level-21","level-22","level-23"]},{"Advanced Strategies":["extras","extras/play-clues","extras/save-clues","extras/fix-clues","extras/discards-misplays","extras/chop-moves","extras/special-finesses","extras/special-bluffs","extras/suboptimal-moves","extras/pushes-pulls","extras/signal-shifting","extras/ejections","extras/discharges","extras/charms","extras/ejection-extensions","extras/miscellaneous"]},{"Variant Specific":["variant-specific","variant-specific/3-suits","variant-specific/black","variant-specific/black-rainbow","variant-specific/brown","variant-specific/clue-starved","variant-specific/color-blind","variant-specific/cow-pig","variant-specific/dark-null","variant-specific/dark-omni-gray-pink","variant-specific/dark-pink","variant-specific/dark-prism","variant-specific/dark-rainbow","variant-specific/deceptive-fives","variant-specific/dual-color-3-suits","variant-specific/dual-color-6-suits","variant-specific/dual-color","variant-specific/duck","variant-specific/extremely-ambiguous","variant-specific/muddy-rainbow-cocoa-rainbow","variant-specific/null","variant-specific/number-blind","variant-specific/number-mute","variant-specific/omni","variant-specific/pink","variant-specific/pink-omni","variant-specific/pink-ones","variant-specific/prism","variant-specific/rainbow","variant-specific/rainbow-muddy-rainbow","variant-specific/rainbow-ones-rainbow-fives","variant-specific/reversed","variant-specific/special-fives","variant-specific/throw-it-in-a-hole","variant-specific/totally-blind","variant-specific/up-or-down","variant-specific/white","variant-specific/no-positive-clues"]},"convention-attribution"]}},1961:function(e,t,i){"use strict";i.d(t,{Z:function(){return u}});var n=i(8173),r=i(7294),a=i(5774),l=i(6679),o=l.mainSidebar.find((function(e){return e["Beginner's Guide"]}))["Beginner's Guide"],c=[];!function e(t,i){for(var r,a=(0,n.Z)(i);!(r=a()).done;){var l=r.value;"string"==typeof l?t.push(l):e(t,Object.values(l)[0])}}(c,o),"beginner"===c[0]&&c.shift();var s=c.length;function u(e){var t=e.id,i=c.findIndex((function(e){return"beginner/"+t===e}));if(-1===i)throw new Error("page id not found in sidebar");var n=Math.round((i+1)/s*100);return(0,r.useEffect)((function(){document.querySelector("main > div > div > div:nth-child(2)").append(document.querySelector("#percent")),document.querySelector("#percent").style.display=null})),r.createElement("div",{id:"percent",style:{position:"fixed",display:"none",width:"8em",height:"8em"}},r.createElement(a.Ip,{value:n,text:n+"%"}))}},2229:function(e,t,i){"use strict";i.r(t),i.d(t,{contentTitle:function(){return z},default:function(){return U},frontMatter:function(){return Q},metadata:function(){return L},toc:function(){return X}});var n,r,a,l,o,c,s,u,p,d,g,m,h,f,b,v,y,x,w,k,E,q,O,P,N,C,j,T,S,I=i(2122),_=i(9756),B=i(7294),A=i(3905),R=i(1961),H=i(5064),Z=i(8215),G=["title","titleId"];function M(){return(M=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e}).apply(this,arguments)}function D(e,t){if(null==e)return{};var i,n,r=function(e,t){if(null==e)return{};var i,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var V=function(e){var t=e.title,i=e.titleId,I=D(e,G);return B.createElement("svg",M({xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",baseProfile:"full",height:375,viewBox:"0 0 944 375",width:944,className:"example","aria-labelledby":i},I),t?B.createElement("title",{id:i},t):null,n||(n=B.createElement("defs",null,B.createElement("filter",{x:0,y:0,width:1,height:1,id:"good-touch-principle-question-2_yml__a"},B.createElement("feFlood",{floodColor:"#0ff"})))),r||(r=B.createElement("image",{height:100,width:70,xlinkHref:"/img/pieces/cards/red1.svg"})),a||(a=B.createElement("image",{height:100,width:70,x:78,xlinkHref:"/img/pieces/cards/yellow0.svg"})),l||(l=B.createElement("image",{height:100,width:70,x:156,xlinkHref:"/img/pieces/cards/green0.svg"})),o||(o=B.createElement("image",{height:100,width:70,x:234,xlinkHref:"/img/pieces/cards/blue3.svg"})),c||(c=B.createElement("image",{height:100,width:70,x:312,xlinkHref:"/img/pieces/cards/purple3.svg"})),B.createElement("svg",M({height:100,width:90,x:464,className:"example","aria-labelledby":i},I),t?B.createElement("title",{id:i},t):null,s||(s=B.createElement("text",{className:"site-theme-text",dominantBaseline:"central",x:"0%",y:"50%",fontSize:"1.4em"},"Alice")),u||(u=B.createElement("text",{dominantBaseline:"central",dy:30,filter:"url(#good-touch-principle-question-2_yml__a)",x:"0%",y:"50%"},"Clue Giver")),p||(p=B.createElement("text",{dominantBaseline:"central",dy:30,x:"0%",y:"50%"},"Clue Giver"))),B.createElement("svg",M({height:100,width:70,x:554,className:"example","aria-labelledby":i},I),t?B.createElement("title",{id:i},t):null,d||(d=B.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),B.createElement("svg",M({height:100,width:70,x:632,className:"example","aria-labelledby":i},I),t?B.createElement("title",{id:i},t):null,g||(g=B.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),B.createElement("svg",M({height:100,width:70,x:710,className:"example","aria-labelledby":i},I),t?B.createElement("title",{id:i},t):null,m||(m=B.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),B.createElement("svg",M({height:100,width:70,x:788,className:"example","aria-labelledby":i},I),t?B.createElement("title",{id:i},t):null,h||(h=B.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),B.createElement("svg",M({height:100,width:70,x:866,className:"example","aria-labelledby":i},I),t?B.createElement("title",{id:i},t):null,f||(f=B.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),B.createElement("svg",M({height:100,width:90,x:464,y:125,className:"example","aria-labelledby":i},I),t?B.createElement("title",{id:i},t):null,b||(b=B.createElement("text",{className:"site-theme-text",dominantBaseline:"central",x:"0%",y:"50%",fontSize:"1.4em"},"Bob"))),v||(v=B.createElement("image",{height:100,width:70,x:554,xlinkHref:"/img/pieces/cards/purple1.svg",y:125})),y||(y=B.createElement("image",{height:100,width:70,x:632,xlinkHref:"/img/pieces/cards/purple5.svg",y:125})),x||(x=B.createElement("image",{height:100,width:70,x:710,xlinkHref:"/img/pieces/cards/red4.svg",y:125})),w||(w=B.createElement("image",{height:100,width:70,x:788,xlinkHref:"/img/pieces/cards/blue1.svg",y:125})),k||(k=B.createElement("image",{height:100,width:70,x:866,xlinkHref:"/img/pieces/cards/red2.svg",y:125})),B.createElement("svg",M({height:100,width:90,x:464,y:250,className:"example","aria-labelledby":i},I),t?B.createElement("title",{id:i},t):null,E||(E=B.createElement("text",{className:"site-theme-text",dominantBaseline:"central",x:"0%",y:"50%",fontSize:"1.4em"},"Cathy"))),q||(q=B.createElement("image",{height:100,width:70,x:554,xlinkHref:"/img/pieces/cards/green2.svg",y:250})),O||(O=B.createElement("image",{height:100,width:70,x:632,xlinkHref:"/img/pieces/cards/purple2.svg",y:250})),P||(P=B.createElement("rect",{fill:"orange",height:106,rx:5,ry:5,width:76,x:707,y:247})),N||(N=B.createElement("image",{height:100,width:70,x:710,xlinkHref:"/img/pieces/cards/red3.svg",y:250})),C||(C=B.createElement("rect",{fill:"orange",height:106,rx:5,ry:5,width:76,x:785,y:247})),j||(j=B.createElement("image",{height:100,width:70,x:788,xlinkHref:"/img/pieces/cards/red4.svg",y:250})),T||(T=B.createElement("rect",{fill:"orange",height:106,rx:5,ry:5,width:76,x:863,y:247})),S||(S=B.createElement("image",{height:100,width:70,x:866,xlinkHref:"/img/pieces/cards/green3.svg",y:250})))},W=["components"],Q={id:"good-touch-principle-question-2",title:"Good Touch Principle (Question 2)"},z=void 0,L={unversionedId:"beginner/good-touch-principle-question-2",id:"beginner/good-touch-principle-question-2",isDocsHomePage:!1,title:"Good Touch Principle (Question 2)",description:"<Tabs",source:"@site/docs/beginner/good-touch-principle-question-2.md",sourceDirName:"beginner",slug:"/beginner/good-touch-principle-question-2",permalink:"/docs/beginner/good-touch-principle-question-2",editUrl:"https://github.com/hanabi/hanabi.github.io/edit/main/docs/beginner/good-touch-principle-question-2.md",version:"current",frontMatter:{id:"good-touch-principle-question-2",title:"Good Touch Principle (Question 2)"},sidebar:"mainSidebar",previous:{title:"Good Touch Principle (Question 1)",permalink:"/docs/beginner/good-touch-principle-question-1"},next:{title:"Good Touch Principle (Question 3)",permalink:"/docs/beginner/good-touch-principle-question-3"}},X=[],F={toc:X};function U(e){var t=e.components,i=(0,_.Z)(e,W);return(0,A.kt)("wrapper",(0,I.Z)({},F,i,{components:t,mdxType:"MDXLayout"}),(0,A.kt)(R.Z,{id:"good-touch-principle-question-2",mdxType:"BeginnersGuideProgress"}),(0,A.kt)(H.Z,{defaultValue:"question",values:[{label:"Question",value:"question"},{label:"Solution",value:"solution"}],mdxType:"Tabs"},(0,A.kt)(Z.Z,{value:"question",mdxType:"TabItem"},(0,A.kt)("ul",null,(0,A.kt)("li",{parentName:"ul"},"What action should Alice perform?"),(0,A.kt)("li",{parentName:"ul"},"If Alice should give a clue, what identity will be written on the focused card? (Be specific.)"))),(0,A.kt)(Z.Z,{value:"solution",mdxType:"TabItem"},(0,A.kt)("ul",null,(0,A.kt)("li",{parentName:"ul"},"Alice needs to give a ",(0,A.kt)("em",{parentName:"li"},"Play Clue")," to Bob's red 2 before it is discarded."),(0,A.kt)("li",{parentName:"ul"},"If Alice clues red, then it would focus the red 2, but the red 4 would be duplicated (because it is already clued in Cathy's hand)."),(0,A.kt)("li",{parentName:"ul"},"If Alice clues number 2, then it would only touch the red 2."),(0,A.kt)("li",{parentName:"ul"},"Thus, Alice should clue number 2 to Bob."),(0,A.kt)("li",{parentName:"ul"},"Bob will write the following identities on the card:",(0,A.kt)("ul",{parentName:"li"},(0,A.kt)("li",{parentName:"ul"},"red 2 (as a ",(0,A.kt)("em",{parentName:"li"},"Play Clue"),")"),(0,A.kt)("li",{parentName:"ul"},"yellow 2 (as a ",(0,A.kt)("em",{parentName:"li"},"2 Save"),")"))),(0,A.kt)("li",{parentName:"ul"},"(Bob knows that it cannot be a ",(0,A.kt)("em",{parentName:"li"},"2 Save")," on a green 2 because that card is present in Cathy's hand and it is not on chop yet.)")))),(0,A.kt)(V,{mdxType:"GoodTouchPrincipleQuestion2"}))}U.isMDXComponent=!0},6010:function(e,t,i){"use strict";function n(e){var t,i,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(i=n(e[t]))&&(r&&(r+=" "),r+=i);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function r(){for(var e,t,i=0,r="";i<arguments.length;)(e=arguments[i++])&&(t=n(e))&&(r&&(r+=" "),r+=t);return r}i.d(t,{Z:function(){return r}})},5774:function(e,t,i){"use strict";i.d(t,{Ip:function(){return c}});var n=i(7294),r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var i in t)t.hasOwnProperty(i)&&(e[i]=t[i])})(e,t)};function a(e){var t=e.className,i=e.counterClockwise,r=e.dashRatio,a=e.pathRadius,c=e.strokeWidth,s=e.style;return(0,n.createElement)("path",{className:t,style:Object.assign({},s,o({pathRadius:a,dashRatio:r,counterClockwise:i})),d:l({pathRadius:a,counterClockwise:i}),strokeWidth:c,fillOpacity:0})}function l(e){var t=e.pathRadius,i=e.counterClockwise?1:0;return"\n      M 50,50\n      m 0,-"+t+"\n      a "+t+","+t+" "+i+" 1 1 0,"+2*t+"\n      a "+t+","+t+" "+i+" 1 1 0,-"+2*t+"\n    "}function o(e){var t=e.counterClockwise,i=e.dashRatio,n=e.pathRadius,r=2*Math.PI*n,a=(1-i)*r;return{strokeDasharray:r+"px "+r+"px",strokeDashoffset:(t?-a:a)+"px"}}var c=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return function(e,t){function i(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(i.prototype=t.prototype,new i)}(t,e),t.prototype.getBackgroundPadding=function(){return this.props.background?this.props.backgroundPadding:0},t.prototype.getPathRadius=function(){return 50-this.props.strokeWidth/2-this.getBackgroundPadding()},t.prototype.getPathRatio=function(){var e=this.props,t=e.value,i=e.minValue,n=e.maxValue;return(Math.min(Math.max(t,i),n)-i)/(n-i)},t.prototype.render=function(){var e=this.props,t=e.circleRatio,i=e.className,r=e.classes,l=e.counterClockwise,o=e.styles,c=e.strokeWidth,s=e.text,u=this.getPathRadius(),p=this.getPathRatio();return(0,n.createElement)("svg",{className:r.root+" "+i,style:o.root,viewBox:"0 0 100 100","data-test-id":"CircularProgressbar"},this.props.background?(0,n.createElement)("circle",{className:r.background,style:o.background,cx:50,cy:50,r:50}):null,(0,n.createElement)(a,{className:r.trail,counterClockwise:l,dashRatio:t,pathRadius:u,strokeWidth:c,style:o.trail}),(0,n.createElement)(a,{className:r.path,counterClockwise:l,dashRatio:p*t,pathRadius:u,strokeWidth:c,style:o.path}),s?(0,n.createElement)("text",{className:r.text,style:o.text,x:50,y:50},s):null)},t.defaultProps={background:!1,backgroundPadding:0,circleRatio:1,classes:{root:"CircularProgressbar",trail:"CircularProgressbar-trail",path:"CircularProgressbar-path",text:"CircularProgressbar-text",background:"CircularProgressbar-background"},counterClockwise:!1,className:"",maxValue:100,minValue:0,strokeWidth:8,styles:{root:{},trail:{},path:{},text:{},background:{}},text:""},t}(n.Component)}}]);