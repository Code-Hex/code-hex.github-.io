(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[834],{23646:function(a,b,c){var d=c(67228);a.exports=function(a){if(Array.isArray(a))return d(a)},a.exports.default=a.exports,a.exports.__esModule=!0},46860:function(a){a.exports=function(a){if("undefined"!=typeof Symbol&&null!=a[Symbol.iterator]||null!=a["@@iterator"])return Array.from(a)},a.exports.default=a.exports,a.exports.__esModule=!0},98206:function(a){a.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},a.exports.default=a.exports,a.exports.__esModule=!0},319:function(a,b,c){var d=c(23646),e=c(46860),f=c(60379),g=c(98206);a.exports=function(a){return d(a)||e(a)||f(a)||g()},a.exports.default=a.exports,a.exports.__esModule=!0},78000:function(a,b,c){"use strict";Object.defineProperty(b,"__esModule",{value:!0}),b.AmpStateContext=void 0;var d,e=((d=c(67294))&&d.__esModule?d:{"default":d}).default.createContext({});b.AmpStateContext=e},45646:function(a,b,c){"use strict";Object.defineProperty(b,"__esModule",{value:!0}),b.isInAmpMode=g,b.useAmp=function(){return g(e.default.useContext(f.AmpStateContext))};var d,e=(d=c(67294))&&d.__esModule?d:{"default":d},f=c(78000);function g(){var a=arguments.length>0&& void 0!==arguments[0]?arguments[0]:{},b=a.ampFirst,c=a.hybrid,d=a.hasQuery;return void 0!==b&&b|| void 0!==c&&c&& void 0!==d&&d}},72717:function(a,b,c){"use strict";var d=c(59713);function e(a,b){var c=Object.keys(a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(a);b&&(d=d.filter(function(b){return Object.getOwnPropertyDescriptor(a,b).enumerable})),c.push.apply(c,d)}return c}Object.defineProperty(b,"__esModule",{value:!0}),b.defaultHead=l,b.default=void 0;var f,g=function(a){if(a&&a.__esModule)return a;var b={};if(null!=a){for(var c in a)if(Object.prototype.hasOwnProperty.call(a,c)){var d=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(a,c):{};d.get||d.set?Object.defineProperty(b,c,d):b[c]=a[c]}}return b.default=a,b}(c(67294)),h=(f=c(11585))&&f.__esModule?f:{"default":f},i=c(78000),j=c(15850),k=c(45646);function l(){var a=arguments.length>0&& void 0!==arguments[0]&&arguments[0],b=[g.default.createElement("meta",{charSet:"utf-8"})];return a||b.push(g.default.createElement("meta",{name:"viewport",content:"width=device-width"})),b}function m(a,b){return"string"==typeof b||"number"==typeof b?a:b.type===g.default.Fragment?a.concat(g.default.Children.toArray(b.props.children).reduce(function(a,b){return"string"==typeof b||"number"==typeof b?a:a.concat(b)},[])):a.concat(b)}var n=["name","httpEquiv","charSet","itemProp"];function o(a,b){var c,f,h,i;return a.reduce(function(a,b){var c=g.default.Children.toArray(b.props.children);return a.concat(c)},[]).reduce(m,[]).reverse().concat(l(b.inAmpMode)).filter((c=new Set(),f=new Set(),h=new Set(),i={},function(a){var b=!0,d=!1;if(a.key&&"number"!=typeof a.key&&a.key.indexOf("$")>0){d=!0;var e=a.key.slice(a.key.indexOf("$")+1);c.has(e)?b=!1:c.add(e)}switch(a.type){case"title":case"base":f.has(a.type)?b=!1:f.add(a.type);break;case"meta":for(var g=0,j=n.length;g<j;g++){var k=n[g];if(a.props.hasOwnProperty(k))if("charSet"===k)h.has(k)?b=!1:h.add(k);else{var l=a.props[k],m=i[k]||new Set();("name"!==k||!d)&&m.has(l)?b=!1:(m.add(l),i[k]=m)}}break}return b})).reverse().map(function(a,c){var f=a.key||c;if(!b.inAmpMode&&"link"===a.type&&a.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some(function(b){return a.props.href.startsWith(b)})){var h=function(a){for(var b=1;b<arguments.length;b++){var c=null!=arguments[b]?arguments[b]:{};b%2?e(Object(c),!0).forEach(function(b){d(a,b,c[b])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(c)):e(Object(c)).forEach(function(b){Object.defineProperty(a,b,Object.getOwnPropertyDescriptor(c,b))})}return a}({},a.props||{});return h["data-href"]=h.href,h.href=void 0,h["data-optimized-fonts"]=!0,g.default.cloneElement(a,h)}return g.default.cloneElement(a,{key:f})})}b.default=function(a){var b=a.children,c=g.useContext(i.AmpStateContext),d=g.useContext(j.HeadManagerContext);return g.default.createElement(h.default,{reduceComponentsToState:o,headManager:d,inAmpMode:k.isInAmpMode(c)},b)}},11585:function(a,b,c){"use strict";var d=c(319),e=c(34575),f=c(93913),g=c(81506),h=c(2205),i=c(78585),j=c(29754);Object.defineProperty(b,"__esModule",{value:!0}),b.default=void 0;var k=function(a){h(c,a);var b=function(a){var b=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(a){return!1}}();return function(){var c,d=j(a);if(b){var e=j(this).constructor;c=Reflect.construct(d,arguments,e)}else c=d.apply(this,arguments);return i(this,c)}}(c);function c(a){var f;return e(this,c),(f=b.call(this,a)).emitChange=function(){f._hasHeadManager&&f.props.headManager.updateHead(f.props.reduceComponentsToState(d(f.props.headManager.mountedInstances),f.props))},f._hasHeadManager=f.props.headManager&&f.props.headManager.mountedInstances,f}return f(c,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),c}(function(a){if(a&&a.__esModule)return a;var b={};if(null!=a){for(var c in a)if(Object.prototype.hasOwnProperty.call(a,c)){var d=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(a,c):{};d.get||d.set?Object.defineProperty(b,c,d):b[c]=a[c]}}return b.default=a,b}(c(67294)).Component);b.default=k},73875:function(a,b,c){"use strict";c.d(b,{e:function(){return e}});var d=c(85893),e=function(a){var b=a.src,c=a.width,e=a.height;return(0,d.jsx)("video",{width:c,height:e,autoPlay:!0,loop:!0,muted:!0,playsInline:!0,children:(0,d.jsx)("source",{src:b,type:"video/mp4"})})}},18037:function(a,b,c){"use strict";c.r(b),c.d(b,{"__N_SSG":function(){return j},meta:function(){return k}});var d=c(91),e=c(87462);c(67294);var f=c(3905),g=c(38327),h=c(73875),i=["components"],j=!0,k={title:"こんにちは mdx!!",description:"これは mdx の記述をお試しするテストページです。",date:"2020-11-23T18:05:31+09:00",tags:["blog","tag1","tag2","perl"]};function l(a){var b=a.components,c=(0,d.Z)(a,i);return(0,f.kt)(function(a){return(0,f.kt)(g.Z,(0,e.Z)({meta:k},a,{mdxType:"Note"}))},(0,e.Z)({components:b},c),(0,f.kt)("p",null,"これは ",(0,f.kt)("inlineCode",{parentName:"p"},"Preview")," のテストです。 What's ",(0,f.kt)("strong",{parentName:"p"},"preview"),"?"),(0,f.kt)("p",null,"本当に不思議な改行！ 😄"),(0,f.kt)("p",null,(0,f.kt)("a",{href:"https://jekyllrb.com/docs/front-matter/#predefined-variables-for-posts",parentName:"p"},"https://jekyllrb.com/docs/front-matter/#predefined-variables-for-posts")),(0,f.kt)("p",null,"😄 hello"),(0,f.kt)("h1",{id:"h1---hello-world"},(0,f.kt)("a",{href:"#h1---hello-world","aria-hidden":"true",tabIndex:"-1",parentName:"h1"},(0,f.kt)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",parentName:"a"},(0,f.kt)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1",parentName:"svg"}))),"H1 - Hello, World"),(0,f.kt)("h2",{id:"h2---hello-world"},(0,f.kt)("a",{href:"#h2---hello-world","aria-hidden":"true",tabIndex:"-1",parentName:"h2"},(0,f.kt)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",parentName:"a"},(0,f.kt)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1",parentName:"svg"}))),"H2 - Hello, World"),(0,f.kt)("h3",{id:"h3---hello-world"},(0,f.kt)("a",{href:"#h3---hello-world","aria-hidden":"true",tabIndex:"-1",parentName:"h3"},(0,f.kt)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",parentName:"a"},(0,f.kt)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1",parentName:"svg"}))),"H3 - Hello, World"),(0,f.kt)("h4",{id:"h4---hello-world"},(0,f.kt)("a",{href:"#h4---hello-world","aria-hidden":"true",tabIndex:"-1",parentName:"h4"},(0,f.kt)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",parentName:"a"},(0,f.kt)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1",parentName:"svg"}))),"H4 - Hello, World"),(0,f.kt)("hr",null),(0,f.kt)("p",null,"REPLACE"),(0,f.kt)("p",null,"It means two big things:"),(0,f.kt)("p",null,(0,f.kt)("a",{href:"https://nextjs.org/",parentName:"p"},"Next.js by Vercel - The React Framework")),(0,f.kt)("p",null,"Message: ",(0,f.kt)("inlineCode",{parentName:"p"},"hello, world")," ",(0,f.kt)("em",{parentName:"p"},"emphasis")," ",(0,f.kt)("strong",{parentName:"p"},"strong")," ",(0,f.kt)("del",{parentName:"p"},"strikethrough")),(0,f.kt)("p",null,"Footnote",(0,f.kt)("sup",{id:"fnref-longnote",parentName:"p"},(0,f.kt)("a",{href:"#fn-longnote",className:"footnote-ref",parentName:"sup"},"longnote"))),(0,f.kt)("p",null,(0,f.kt)("details",{parentName:"p"},(0,f.kt)("summary",{parentName:"details"},"Toggle me!"),"Peek a boo!")),(0,f.kt)("hr",null),(0,f.kt)("pre",null,(0,f.kt)("code",{parentName:"pre"},"# Time range: 2020-11-16T00:01:11 to 2020-11-17T00:01:01\n# Attribute          total     min     max     avg     95%  stddev  median\n# ============     ======= ======= ======= ======= ======= ======= =======\n# Exec time         16449s   100ms    129s   539ms      2s      1s   266ms\n# Lock time            15s       0     8ms   486us   657us   228us   467us\n# Rows sent         10.92M       0  90.45k  375.59   20.43   3.29k    0.99\n# Rows examine       6.44G       0  32.40M 221.45k 562.03k 974.32k  59.57k\n# Query size       165.50M       6  46.99k   5.56k   4.49k   7.40k   4.49k\n")),(0,f.kt)("h2",{id:"list"},(0,f.kt)("a",{href:"#list","aria-hidden":"true",tabIndex:"-1",parentName:"h2"},(0,f.kt)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",parentName:"a"},(0,f.kt)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1",parentName:"svg"}))),"List"),(0,f.kt)("ul",null,(0,f.kt)("li",{parentName:"ul"},"How the Markdown format makes styled collaborative editing easy"),(0,f.kt)("li",{parentName:"ul"},"How Markdown differs from traditional formatting approaches",(0,f.kt)("ul",{parentName:"li"},(0,f.kt)("li",{parentName:"ul"},"How to use Markdown to format text"))),(0,f.kt)("li",{parentName:"ul"},(0,f.kt)("inlineCode",{parentName:"li"},"code"),(0,f.kt)("ul",{parentName:"li"},(0,f.kt)("li",{parentName:"ul"},"hello")))),(0,f.kt)("ol",null,(0,f.kt)("li",{parentName:"ol"},"Hello"),(0,f.kt)("li",{parentName:"ol"},"World"),(0,f.kt)("li",{parentName:"ol"},"22222")),(0,f.kt)("ul",{className:"contains-task-list"},(0,f.kt)("li",{className:"task-list-item",parentName:"ul"},(0,f.kt)("input",{type:"checkbox",disabled:!0,parentName:"li"})," ","Todo1"),(0,f.kt)("li",{className:"task-list-item",parentName:"ul"},(0,f.kt)("input",{type:"checkbox",checked:!0,disabled:!0,parentName:"li"})," ","Todo2")),(0,f.kt)("blockquote",null,(0,f.kt)("p",{parentName:"blockquote"},"Performance tip: A description or summary field could be added to the front matter to keep the import small while enabling the index page to give a preview of the content.")),(0,f.kt)("h2",{id:"image"},(0,f.kt)("a",{href:"#image","aria-hidden":"true",tabIndex:"-1",parentName:"h2"},(0,f.kt)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",parentName:"a"},(0,f.kt)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1",parentName:"svg"}))),"Image"),(0,f.kt)(h.e,{width:"150px",src:"https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.mp4?cid=ecf05e47jtjtkptn481k21kqstxwj79v53uldowyl2xsmq96&rid=giphy.mp4&ct=g",mdxType:"LoopVideo"}),(0,f.kt)("h2",{id:"table"},(0,f.kt)("a",{href:"#table","aria-hidden":"true",tabIndex:"-1",parentName:"h2"},(0,f.kt)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",parentName:"a"},(0,f.kt)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1",parentName:"svg"}))),"Table"),(0,f.kt)("table",null,(0,f.kt)("thead",{parentName:"table"},(0,f.kt)("tr",{parentName:"thead"},(0,f.kt)("th",{parentName:"tr"},"Tables"),(0,f.kt)("th",{align:"center",parentName:"tr"},"Are"),(0,f.kt)("th",{align:"right",parentName:"tr"},"Cool"))),(0,f.kt)("tbody",{parentName:"table"},(0,f.kt)("tr",{parentName:"tbody"},(0,f.kt)("td",{parentName:"tr"},"col 1 is"),(0,f.kt)("td",{align:"center",parentName:"tr"},"left-aligned"),(0,f.kt)("td",{align:"right",parentName:"tr"},"$1600")),(0,f.kt)("tr",{parentName:"tbody"},(0,f.kt)("td",{parentName:"tr"},"col 2 is"),(0,f.kt)("td",{align:"center",parentName:"tr"},"centered"),(0,f.kt)("td",{align:"right",parentName:"tr"},"$12")),(0,f.kt)("tr",{parentName:"tbody"},(0,f.kt)("td",{parentName:"tr"},"col 3 is"),(0,f.kt)("td",{align:"center",parentName:"tr"},"right-aligned"),(0,f.kt)("td",{align:"right",parentName:"tr"},"$1")))),(0,f.kt)("h2",{id:"code"},(0,f.kt)("a",{href:"#code","aria-hidden":"true",tabIndex:"-1",parentName:"h2"},(0,f.kt)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",parentName:"a"},(0,f.kt)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1",parentName:"svg"}))),"Code"),(0,f.kt)("pre",null,(0,f.kt)("code",{className:"language-json",parentName:"pre"},"{\n  \"firstName\": \"John\",\n  \"lastName\": \"Smith\",\n  \"age\": 25\n}\n")),(0,f.kt)("pre",null,(0,f.kt)("code",{className:"language-tsx",parentName:"pre"},"import { useState } from 'react';\n\nconst regularStyles = {\n  backgroundColor: '#40C9A2',\n  color: '#E5F9E0',\n};\nconst tappedStyles = {\n  backgroundColor: '#E5F9E0',\n  color: '#40C9A2',\n};\n\nexport const Demonstration = () => {\n  const [tapped, setTapped] = useState(false);\n\n  return (\n    <div\n      style={tapped ? tappedStyles : regularStyles}\n      onClick={() => setTapped(!tapped)}\n    >\n      🤜 Tap this React Component 🤛\n    </div>\n  );\n};\n")),(0,f.kt)("pre",null,(0,f.kt)("code",{className:"language-diff-javascript",parentName:"pre"},"  // tailwind.config.js\n  module.exports = {\n    theme: {\n      backgroundColor: theme => ({\n-       ...theme('colors'),\n-       'primary': '#3490dc',\n+       'secondary': '#ffed4a',\n+       'danger': '#e3342f',\n      })\n    }\n  }\n")),(0,f.kt)("pre",null,(0,f.kt)("code",{className:"language-diff-js",parentName:"pre"},"@@ -4,6 +4,5 @@\n-    let foo = bar.baz([1, 2, 3]);\n-    foo = foo + 1;\n+    const foo = bar.baz([1, 2, 3]) + 1;\n     console.log(`foo: ${foo}`);\n")),(0,f.kt)("pre",null,(0,f.kt)("code",{className:"language-diff-rust",parentName:"pre"},"@@ -111,6 +114,9 @@\n         nasty_btree_map.insert(i, MyLeafNode(i));\n     }\n\n+    let mut zst_btree_map: BTreeMap<(), ()> = BTreeMap::new();\n+    zst_btree_map.insert((), ());\n+\n     // VecDeque\n     let mut vec_deque = VecDeque::new();\n     vec_deque.push_back(5);\n")),(0,f.kt)("div",{className:"footnotes"},(0,f.kt)("hr",{parentName:"div"}),(0,f.kt)("ol",{parentName:"div"},(0,f.kt)("li",{id:"fn-longnote",parentName:"ol"},"Here’s one with multiple blocks.",(0,f.kt)("a",{href:"#fnref-longnote",className:"footnote-backref",parentName:"li"},"↩")))))}l.isMDXComponent=!0,b.default=l},73027:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/note/hello2",function(){return c(18037)}])},9008:function(a,b,c){a.exports=c(72717)},87462:function(a,b,c){"use strict";function d(){return(d=Object.assign||function(a){for(var b=1;b<arguments.length;b++){var c=arguments[b];for(var d in c)Object.prototype.hasOwnProperty.call(c,d)&&(a[d]=c[d])}return a}).apply(this,arguments)}c.d(b,{Z:function(){return d}})},91:function(a,b,c){"use strict";function d(a,b){if(null==a)return{};var c,d,e=function(a,b){if(null==a)return{};var c,d,e={},f=Object.keys(a);for(d=0;d<f.length;d++)c=f[d],b.indexOf(c)>=0||(e[c]=a[c]);return e}(a,b);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(d=0;d<f.length;d++)c=f[d],b.indexOf(c)>=0||Object.prototype.propertyIsEnumerable.call(a,c)&&(e[c]=a[c])}return e}c.d(b,{Z:function(){return d}})}},function(a){a.O(0,[541,327,774,888,179],function(){return a(a.s=73027)}),_N_E=a.O()}])