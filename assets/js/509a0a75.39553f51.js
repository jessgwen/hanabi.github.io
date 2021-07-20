/*! For license information please see 509a0a75.39553f51.js.LICENSE.txt */
(self.webpackChunkhanabi_github_io=self.webpackChunkhanabi_github_io||[]).push([[3803,5429,9108,5212,5247,7484,6143,7830,4704,8084,6263,5567,3580,6485,6184,6551,4090,8359,5193,7087],{8173:function(e,t,i){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,r=new Array(t);i<t;i++)r[i]=e[i];return r}function n(e,t){var i="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(i)return(i=i.call(e)).next.bind(i);if(Array.isArray(e)||(i=function(e,t){if(e){if("string"==typeof e)return r(e,t);var i=Object.prototype.toString.call(e).slice(8,-1);return"Object"===i&&e.constructor&&(i=e.constructor.name),"Map"===i||"Set"===i?Array.from(e):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?r(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){i&&(e=i);var n=0;return function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}i.d(t,{Z:function(){return n}})},3905:function(e,t,i){"use strict";i.d(t,{Zo:function(){return u},kt:function(){return d}});var r=i(7294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function l(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function c(e,t){if(null==e)return{};var i,r,n=function(e,t){if(null==e)return{};var i,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)i=a[r],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)i=a[r],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var s=r.createContext({}),o=function(e){var t=r.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):l(l({},t),e)),i},u=function(e){var t=o(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var i=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=o(i),d=n,g=m["".concat(s,".").concat(d)]||m[d]||p[d]||a;return i?r.createElement(g,l(l({ref:t},u),{},{components:i})):r.createElement(g,l({ref:t},u))}));function d(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=i.length,l=new Array(a);l[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,l[1]=c;for(var o=2;o<a;o++)l[o]=i[o];return r.createElement.apply(null,l)}return r.createElement.apply(null,i)}m.displayName="MDXCreateElement"},8215:function(e,t,i){"use strict";var r=i(7294);t.Z=function(e){var t=e.children,i=e.hidden,n=e.className;return r.createElement("div",{role:"tabpanel",hidden:i,className:n},t)}},5064:function(e,t,i){"use strict";i.d(t,{Z:function(){return p}});var r=i(7294),n=i(9443);var a=function(){var e=(0,r.useContext)(n.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},l=i(6010),c="tabItem_1uMI",s="tabItemActive_2DSg";var o=37,u=39;var p=function(e){var t=e.lazy,i=e.block,n=e.defaultValue,p=e.values,m=e.groupId,d=e.className,g=a(),h=g.tabGroupChoices,f=g.setTabGroupChoices,v=(0,r.useState)(n),b=v[0],y=v[1],x=r.Children.toArray(e.children),w=[];if(null!=m){var k=h[m];null!=k&&k!==b&&p.some((function(e){return e.value===k}))&&y(k)}var E=function(e){var t=e.currentTarget,i=w.indexOf(t),r=p[i].value;y(r),null!=m&&(f(m,r),setTimeout((function(){var e,i,r,n,a,l,c,o;(e=t.getBoundingClientRect(),i=e.top,r=e.left,n=e.bottom,a=e.right,l=window,c=l.innerHeight,o=l.innerWidth,i>=0&&a<=o&&n<=c&&r>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(s),setTimeout((function(){return t.classList.remove(s)}),2e3))}),150))},q=function(e){var t,i;switch(e.keyCode){case u:var r=w.indexOf(e.target)+1;i=w[r]||w[0];break;case o:var n=w.indexOf(e.target)-1;i=w[n]||w[w.length-1]}null==(t=i)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":i},d)},p.map((function(e){var t=e.value,i=e.label;return r.createElement("li",{role:"tab",tabIndex:b===t?0:-1,"aria-selected":b===t,className:(0,l.Z)("tabs__item",c,{"tabs__item--active":b===t}),key:t,ref:function(e){return w.push(e)},onKeyDown:q,onFocus:E,onClick:E},i)}))),t?(0,r.cloneElement)(x.filter((function(e){return e.props.value===b}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},x.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==b})}))))}},9443:function(e,t,i){"use strict";var r=(0,i(7294).createContext)(void 0);t.Z=r},6679:function(e){e.exports={mainSidebar:["about",{"Beginner's Guide":["beginner","beginner/card-layout",{"The Chop":["beginner/chop","beginner/chop-question-1","beginner/chop-question-2","beginner/chop-question-3","beginner/chop-question-4"]},"beginner/two-types-of-clues",{"1 - Play Clues":["beginner/play-clues","beginner/play-clues-question-1","beginner/play-clues-question-2","beginner/delayed-play-clues","beginner/delayed-play-clues-question-1","beginner/delayed-play-clues-question-2","beginner/delayed-play-clues-question-3"]},{"2 - Save Clues":["beginner/save-clues","beginner/5-save","beginner/5-save-question-1","beginner/5-save-question-2","beginner/2-save","beginner/2-save-question-1","beginner/2-save-question-2","beginner/2-save-question-3","beginner/critical-save","beginner/critical-save-question-1","beginner/critical-save-question-2","beginner/critical-save-question-3","beginner/critical-save-question-4"]},{"Clue Interpretation":["beginner/single-card-focus","beginner/single-card-focus-question-1","beginner/single-card-focus-question-2","beginner/single-card-focus-question-3","beginner/single-card-focus-question-4","beginner/clue-interpretation","beginner/clue-interpretation-question-1","beginner/clue-interpretation-question-2","beginner/clue-interpretation-question-3","beginner/clue-interpretation-question-4"]},"beginner/three-main-principles",{"1 - Good Touch Principle":["beginner/good-touch-principle","beginner/good-touch-principle-question-1","beginner/good-touch-principle-question-2","beginner/good-touch-principle-question-3","beginner/good-touch-principle-question-4"]},{"2 - Save Principle":["beginner/save-principle","beginner/save-principle-question-1","beginner/save-principle-question-2"]},{"3 - Minimum Clue Value Principle":["beginner/minimum-clue-value-principle","beginner/minimum-clue-value-principle-question-1"]},{"The Early Game":["beginner/early-game","beginner/early-game-question-1","beginner/early-game-question-2","beginner/early-game-question-3","beginner/early-game-question-4"]},"beginner/other-general-strategy",{"Special Moves":["beginner/special-moves","beginner/prompt","beginner/prompt-question-1","beginner/prompt-question-2","beginner/prompt-question-3","beginner/finesse","beginner/finesse-question-1","beginner/finesse-question-2"]},"beginner/next-steps"]},"how-to-join","learning-path",{"Basic Strategies":["reference","first-principles","level-1","level-2","level-3","level-4","level-5","level-6","level-7","level-8","level-9","level-10","level-11","level-12","level-13","level-14","level-15","level-16","level-17","level-18","level-19","level-20","level-21","level-22","level-23"]},{"Advanced Strategies":["extras","extras/play-clues","extras/save-clues","extras/fix-clues","extras/discards-misplays","extras/chop-moves","extras/special-finesses","extras/special-bluffs","extras/suboptimal-moves","extras/pushes-pulls","extras/signal-shifting","extras/ejections","extras/discharges","extras/charms","extras/ejection-extensions","extras/miscellaneous"]},{"Variant Specific":["variant-specific","variant-specific/3-suits","variant-specific/black","variant-specific/black-rainbow","variant-specific/brown","variant-specific/clue-starved","variant-specific/color-blind","variant-specific/cow-pig","variant-specific/dark-null","variant-specific/dark-omni-gray-pink","variant-specific/dark-pink","variant-specific/dark-prism","variant-specific/dark-rainbow","variant-specific/deceptive-fives","variant-specific/dual-color-3-suits","variant-specific/dual-color-6-suits","variant-specific/dual-color","variant-specific/duck","variant-specific/extremely-ambiguous","variant-specific/muddy-rainbow-cocoa-rainbow","variant-specific/null","variant-specific/number-blind","variant-specific/number-mute","variant-specific/omni","variant-specific/pink","variant-specific/pink-omni","variant-specific/pink-ones","variant-specific/prism","variant-specific/rainbow","variant-specific/rainbow-muddy-rainbow","variant-specific/rainbow-ones-rainbow-fives","variant-specific/reversed","variant-specific/special-fives","variant-specific/throw-it-in-a-hole","variant-specific/totally-blind","variant-specific/up-or-down","variant-specific/white","variant-specific/no-positive-clues"]},"convention-attribution"]}},1961:function(e,t,i){"use strict";i.d(t,{Z:function(){return u}});var r=i(8173),n=i(7294),a=i(5774),l=i(6679),c=l.mainSidebar.find((function(e){return e["Beginner's Guide"]}))["Beginner's Guide"],s=[];!function e(t,i){for(var n,a=(0,r.Z)(i);!(n=a()).done;){var l=n.value;"string"==typeof l?t.push(l):e(t,Object.values(l)[0])}}(s,c),"beginner"===s[0]&&s.shift();var o=s.length;function u(e){var t=e.id,i=s.findIndex((function(e){return"beginner/"+t===e}));if(-1===i)throw new Error("page id not found in sidebar");var r=Math.round((i+1)/o*100);return(0,n.useEffect)((function(){document.querySelector("main > div > div > div:nth-child(2)").append(document.querySelector("#percent")),document.querySelector("#percent").style.display=null})),n.createElement("div",{id:"percent",style:{position:"fixed",display:"none",width:"8em",height:"8em"}},n.createElement(a.Ip,{value:r,text:r+"%"}))}},9541:function(e,t,i){"use strict";i.r(t),i.d(t,{contentTitle:function(){return L},default:function(){return K},frontMatter:function(){return z},metadata:function(){return X},toc:function(){return F}});var r,n,a,l,c,s,o,u,p,m,d,g,h,f,v,b,y,x,w,k,E,q,C,N,O,P,S,j,T,_,I=i(2122),R=i(9756),A=i(7294),B=i(3905),Z=i(1961),H=i(5064),M=i(8215),D=["title","titleId"];function G(){return(G=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r])}return e}).apply(this,arguments)}function W(e,t){if(null==e)return{};var i,r,n=function(e,t){if(null==e)return{};var i,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)i=a[r],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)i=a[r],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var V=function(e){var t=e.title,i=e.titleId,I=W(e,D);return A.createElement("svg",G({xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",baseProfile:"full",height:375,viewBox:"0 0 944 375",width:944,className:"example","aria-labelledby":i},I),t?A.createElement("title",{id:i},t):null,r||(r=A.createElement("defs",null,A.createElement("filter",{x:0,y:0,width:1,height:1,id:"critical-save-question-2_yml__a"},A.createElement("feFlood",{floodColor:"#0ff"})))),n||(n=A.createElement("image",{height:100,width:70,xlinkHref:"/img/pieces/cards/red4.svg"})),a||(a=A.createElement("image",{height:100,width:70,x:78,xlinkHref:"/img/pieces/cards/yellow0.svg"})),l||(l=A.createElement("image",{height:100,width:70,x:156,xlinkHref:"/img/pieces/cards/green1.svg"})),c||(c=A.createElement("image",{height:100,width:70,x:234,xlinkHref:"/img/pieces/cards/blue2.svg"})),s||(s=A.createElement("image",{height:100,width:70,x:312,xlinkHref:"/img/pieces/cards/purple0.svg"})),A.createElement("svg",G({height:100,width:90,x:464,className:"example","aria-labelledby":i},I),t?A.createElement("title",{id:i},t):null,o||(o=A.createElement("text",{className:"site-theme-text",dominantBaseline:"central",x:"0%",y:"50%",fontSize:"1.4em"},"Alice")),u||(u=A.createElement("text",{dominantBaseline:"central",dy:30,filter:"url(#critical-save-question-2_yml__a)",x:"0%",y:"50%"},"Clue Giver")),p||(p=A.createElement("text",{dominantBaseline:"central",dy:30,x:"0%",y:"50%"},"Clue Giver"))),A.createElement("svg",G({height:100,width:70,x:554,className:"example","aria-labelledby":i},I),t?A.createElement("title",{id:i},t):null,m||(m=A.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),A.createElement("svg",G({height:100,width:70,x:632,className:"example","aria-labelledby":i},I),t?A.createElement("title",{id:i},t):null,d||(d=A.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),A.createElement("svg",G({height:100,width:70,x:710,className:"example","aria-labelledby":i},I),t?A.createElement("title",{id:i},t):null,g||(g=A.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),A.createElement("svg",G({height:100,width:70,x:788,className:"example","aria-labelledby":i},I),t?A.createElement("title",{id:i},t):null,h||(h=A.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),A.createElement("svg",G({height:100,width:70,x:866,className:"example","aria-labelledby":i},I),t?A.createElement("title",{id:i},t):null,f||(f=A.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),A.createElement("svg",G({height:100,width:90,x:464,y:125,className:"example","aria-labelledby":i},I),t?A.createElement("title",{id:i},t):null,v||(v=A.createElement("text",{className:"site-theme-text",dominantBaseline:"central",x:"0%",y:"50%",fontSize:"1.4em"},"Bob"))),A.createElement("svg",G({height:100,width:70,x:554,y:125,className:"example","aria-labelledby":i},I),t?A.createElement("title",{id:i},t):null,b||(b=A.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),A.createElement("svg",G({height:100,width:70,x:632,y:125,className:"example","aria-labelledby":i},I),t?A.createElement("title",{id:i},t):null,y||(y=A.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),A.createElement("svg",G({height:100,width:70,x:710,y:125,className:"example","aria-labelledby":i},I),t?A.createElement("title",{id:i},t):null,x||(x=A.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),A.createElement("svg",G({height:100,width:70,x:788,y:125,className:"example","aria-labelledby":i},I),t?A.createElement("title",{id:i},t):null,w||(w=A.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),A.createElement("svg",G({height:100,width:70,x:866,y:125,className:"example","aria-labelledby":i},I),t?A.createElement("title",{id:i},t):null,k||(k=A.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),A.createElement("svg",G({height:100,width:90,x:464,y:250,className:"example","aria-labelledby":i},I),t?A.createElement("title",{id:i},t):null,E||(E=A.createElement("text",{className:"site-theme-text",dominantBaseline:"central",x:"0%",y:"50%",fontSize:"1.4em"},"Cathy"))),q||(q=A.createElement("image",{height:100,width:70,x:554,xlinkHref:"/img/pieces/cards/red1.svg",y:250})),C||(C=A.createElement("image",{height:100,width:70,x:632,xlinkHref:"/img/pieces/cards/red1.svg",y:250})),N||(N=A.createElement("image",{height:100,width:70,x:710,xlinkHref:"/img/pieces/cards/purple4.svg",y:250})),O||(O=A.createElement("image",{height:100,width:70,x:788,xlinkHref:"/img/pieces/cards/purple3.svg",y:250})),P||(P=A.createElement("image",{height:100,width:70,x:866,xlinkHref:"/img/pieces/cards/purple5.svg",y:250})),S||(S=A.createElement("image",{height:200,opacity:.2,width:200,x:91,xlinkHref:"/img/pieces/trashcan.png",y:120})),j||(j=A.createElement("image",{height:100,width:70,x:138.5,xlinkHref:"/img/pieces/cards/purple3.svg",y:153.333})),T||(T=A.createElement("image",{height:100,width:70,x:173.5,xlinkHref:"/img/pieces/cards/purple4.svg",y:186.667})),_||(_=A.createElement("rect",{fill:"none",height:200,rx:10,ry:10,stroke:"#006400",strokeWidth:2,width:200,x:91,y:120})))},Q=["components"],z={id:"critical-save-question-2",title:"The Critical Save (Question 2)"},L=void 0,X={unversionedId:"beginner/critical-save-question-2",id:"beginner/critical-save-question-2",isDocsHomePage:!1,title:"The Critical Save (Question 2)",description:"<Tabs",source:"@site/docs/beginner/critical-save-question-2.md",sourceDirName:"beginner",slug:"/beginner/critical-save-question-2",permalink:"/docs/beginner/critical-save-question-2",editUrl:"https://github.com/hanabi/hanabi.github.io/edit/main/docs/beginner/critical-save-question-2.md",version:"current",frontMatter:{id:"critical-save-question-2",title:"The Critical Save (Question 2)"},sidebar:"mainSidebar",previous:{title:"The Critical Save (Question 1)",permalink:"/docs/beginner/critical-save-question-1"},next:{title:"The Critical Save (Question 3)",permalink:"/docs/beginner/critical-save-question-3"}},F=[],U={toc:F};function K(e){var t=e.components,i=(0,R.Z)(e,Q);return(0,B.kt)("wrapper",(0,I.Z)({},U,i,{components:t,mdxType:"MDXLayout"}),(0,B.kt)(Z.Z,{id:"critical-save-question-2",mdxType:"BeginnersGuideProgress"}),(0,B.kt)(H.Z,{defaultValue:"question",values:[{label:"Question",value:"question"},{label:"Solution",value:"solution"}],mdxType:"Tabs"},(0,B.kt)(M.Z,{value:"question",mdxType:"TabItem"},(0,B.kt)("ul",null,(0,B.kt)("li",{parentName:"ul"},"Cathy has three critical cards in a row."),(0,B.kt)("li",{parentName:"ul"},"What action should Alice perform?"))),(0,B.kt)(M.Z,{value:"solution",mdxType:"TabItem"},(0,B.kt)("ul",null,(0,B.kt)("li",{parentName:"ul"},'Alice might be tempted to clue purple to Cathy, which would "get" all three purple cards in one fell swoop.'),(0,B.kt)("li",{parentName:"ul"},"However, it would be illegal for Alice to do that because 5's must be saved with a ",(0,B.kt)("em",{parentName:"li"},"5 Save"),"."),(0,B.kt)("li",{parentName:"ul"},"Thus, Alice should clue number 5 to Cathy as a ",(0,B.kt)("em",{parentName:"li"},"5 Save"),"."),(0,B.kt)("li",{parentName:"ul"},"Next, Bob would clue purple to Cathy as a ",(0,B.kt)("em",{parentName:"li"},"Critical Save")," on the purple 3."),(0,B.kt)("li",{parentName:"ul"},"Cathy would mark her slot 4 card as either:",(0,B.kt)("ul",{parentName:"li"},(0,B.kt)("li",{parentName:"ul"},"a purple 1 (as a ",(0,B.kt)("em",{parentName:"li"},"Play Clue"),")"),(0,B.kt)("li",{parentName:"ul"},"a purple 3 (as a ",(0,B.kt)("em",{parentName:"li"},"Critical Save"),")"),(0,B.kt)("li",{parentName:"ul"},"a purple 4 (as a ",(0,B.kt)("em",{parentName:"li"},"Critical Save"),")")))))),(0,B.kt)(V,{mdxType:"CriticalSaveQuestion2"}))}K.isMDXComponent=!0},6010:function(e,t,i){"use strict";function r(e){var t,i,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(i=r(e[t]))&&(n&&(n+=" "),n+=i);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}function n(){for(var e,t,i=0,n="";i<arguments.length;)(e=arguments[i++])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}i.d(t,{Z:function(){return n}})},5774:function(e,t,i){"use strict";i.d(t,{Ip:function(){return s}});var r=i(7294),n=function(e,t){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var i in t)t.hasOwnProperty(i)&&(e[i]=t[i])})(e,t)};function a(e){var t=e.className,i=e.counterClockwise,n=e.dashRatio,a=e.pathRadius,s=e.strokeWidth,o=e.style;return(0,r.createElement)("path",{className:t,style:Object.assign({},o,c({pathRadius:a,dashRatio:n,counterClockwise:i})),d:l({pathRadius:a,counterClockwise:i}),strokeWidth:s,fillOpacity:0})}function l(e){var t=e.pathRadius,i=e.counterClockwise?1:0;return"\n      M 50,50\n      m 0,-"+t+"\n      a "+t+","+t+" "+i+" 1 1 0,"+2*t+"\n      a "+t+","+t+" "+i+" 1 1 0,-"+2*t+"\n    "}function c(e){var t=e.counterClockwise,i=e.dashRatio,r=e.pathRadius,n=2*Math.PI*r,a=(1-i)*n;return{strokeDasharray:n+"px "+n+"px",strokeDashoffset:(t?-a:a)+"px"}}var s=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return function(e,t){function i(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(i.prototype=t.prototype,new i)}(t,e),t.prototype.getBackgroundPadding=function(){return this.props.background?this.props.backgroundPadding:0},t.prototype.getPathRadius=function(){return 50-this.props.strokeWidth/2-this.getBackgroundPadding()},t.prototype.getPathRatio=function(){var e=this.props,t=e.value,i=e.minValue,r=e.maxValue;return(Math.min(Math.max(t,i),r)-i)/(r-i)},t.prototype.render=function(){var e=this.props,t=e.circleRatio,i=e.className,n=e.classes,l=e.counterClockwise,c=e.styles,s=e.strokeWidth,o=e.text,u=this.getPathRadius(),p=this.getPathRatio();return(0,r.createElement)("svg",{className:n.root+" "+i,style:c.root,viewBox:"0 0 100 100","data-test-id":"CircularProgressbar"},this.props.background?(0,r.createElement)("circle",{className:n.background,style:c.background,cx:50,cy:50,r:50}):null,(0,r.createElement)(a,{className:n.trail,counterClockwise:l,dashRatio:t,pathRadius:u,strokeWidth:s,style:c.trail}),(0,r.createElement)(a,{className:n.path,counterClockwise:l,dashRatio:p*t,pathRadius:u,strokeWidth:s,style:c.path}),o?(0,r.createElement)("text",{className:n.text,style:c.text,x:50,y:50},o):null)},t.defaultProps={background:!1,backgroundPadding:0,circleRatio:1,classes:{root:"CircularProgressbar",trail:"CircularProgressbar-trail",path:"CircularProgressbar-path",text:"CircularProgressbar-text",background:"CircularProgressbar-background"},counterClockwise:!1,className:"",maxValue:100,minValue:0,strokeWidth:8,styles:{root:{},trail:{},path:{},text:{},background:{}},text:""},t}(r.Component)}}]);