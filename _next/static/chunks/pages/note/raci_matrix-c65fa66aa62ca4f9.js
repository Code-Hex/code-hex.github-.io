(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[85],{23646:function(a,b,c){var d=c(67228);a.exports=function(a){if(Array.isArray(a))return d(a)},a.exports.default=a.exports,a.exports.__esModule=!0},46860:function(a){a.exports=function(a){if("undefined"!=typeof Symbol&&null!=a[Symbol.iterator]||null!=a["@@iterator"])return Array.from(a)},a.exports.default=a.exports,a.exports.__esModule=!0},98206:function(a){a.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},a.exports.default=a.exports,a.exports.__esModule=!0},319:function(a,b,c){var d=c(23646),e=c(46860),f=c(60379),g=c(98206);a.exports=function(a){return d(a)||e(a)||f(a)||g()},a.exports.default=a.exports,a.exports.__esModule=!0},78000:function(a,b,c){"use strict";Object.defineProperty(b,"__esModule",{value:!0}),b.AmpStateContext=void 0;var d,e=((d=c(67294))&&d.__esModule?d:{"default":d}).default.createContext({});b.AmpStateContext=e},45646:function(a,b,c){"use strict";Object.defineProperty(b,"__esModule",{value:!0}),b.isInAmpMode=g,b.useAmp=function(){return g(e.default.useContext(f.AmpStateContext))};var d,e=(d=c(67294))&&d.__esModule?d:{"default":d},f=c(78000);function g(){var a=arguments.length>0&& void 0!==arguments[0]?arguments[0]:{},b=a.ampFirst,c=a.hybrid,d=a.hasQuery;return void 0!==b&&b|| void 0!==c&&c&& void 0!==d&&d}},72717:function(a,b,c){"use strict";var d=c(59713);function e(a,b){var c=Object.keys(a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(a);b&&(d=d.filter(function(b){return Object.getOwnPropertyDescriptor(a,b).enumerable})),c.push.apply(c,d)}return c}Object.defineProperty(b,"__esModule",{value:!0}),b.defaultHead=l,b.default=void 0;var f,g=function(a){if(a&&a.__esModule)return a;var b={};if(null!=a){for(var c in a)if(Object.prototype.hasOwnProperty.call(a,c)){var d=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(a,c):{};d.get||d.set?Object.defineProperty(b,c,d):b[c]=a[c]}}return b.default=a,b}(c(67294)),h=(f=c(11585))&&f.__esModule?f:{"default":f},i=c(78000),j=c(15850),k=c(45646);function l(){var a=arguments.length>0&& void 0!==arguments[0]&&arguments[0],b=[g.default.createElement("meta",{charSet:"utf-8"})];return a||b.push(g.default.createElement("meta",{name:"viewport",content:"width=device-width"})),b}function m(a,b){return"string"==typeof b||"number"==typeof b?a:b.type===g.default.Fragment?a.concat(g.default.Children.toArray(b.props.children).reduce(function(a,b){return"string"==typeof b||"number"==typeof b?a:a.concat(b)},[])):a.concat(b)}var n=["name","httpEquiv","charSet","itemProp"];function o(a,b){var c,f,h,i;return a.reduce(function(a,b){var c=g.default.Children.toArray(b.props.children);return a.concat(c)},[]).reduce(m,[]).reverse().concat(l(b.inAmpMode)).filter((c=new Set(),f=new Set(),h=new Set(),i={},function(a){var b=!0,d=!1;if(a.key&&"number"!=typeof a.key&&a.key.indexOf("$")>0){d=!0;var e=a.key.slice(a.key.indexOf("$")+1);c.has(e)?b=!1:c.add(e)}switch(a.type){case"title":case"base":f.has(a.type)?b=!1:f.add(a.type);break;case"meta":for(var g=0,j=n.length;g<j;g++){var k=n[g];if(a.props.hasOwnProperty(k))if("charSet"===k)h.has(k)?b=!1:h.add(k);else{var l=a.props[k],m=i[k]||new Set();("name"!==k||!d)&&m.has(l)?b=!1:(m.add(l),i[k]=m)}}break}return b})).reverse().map(function(a,c){var f=a.key||c;if(!b.inAmpMode&&"link"===a.type&&a.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some(function(b){return a.props.href.startsWith(b)})){var h=function(a){for(var b=1;b<arguments.length;b++){var c=null!=arguments[b]?arguments[b]:{};b%2?e(Object(c),!0).forEach(function(b){d(a,b,c[b])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(c)):e(Object(c)).forEach(function(b){Object.defineProperty(a,b,Object.getOwnPropertyDescriptor(c,b))})}return a}({},a.props||{});return h["data-href"]=h.href,h.href=void 0,h["data-optimized-fonts"]=!0,g.default.cloneElement(a,h)}return g.default.cloneElement(a,{key:f})})}b.default=function(a){var b=a.children,c=g.useContext(i.AmpStateContext),d=g.useContext(j.HeadManagerContext);return g.default.createElement(h.default,{reduceComponentsToState:o,headManager:d,inAmpMode:k.isInAmpMode(c)},b)}},11585:function(a,b,c){"use strict";var d=c(319),e=c(34575),f=c(93913),g=c(81506),h=c(2205),i=c(78585),j=c(29754);Object.defineProperty(b,"__esModule",{value:!0}),b.default=void 0;var k=function(a){h(c,a);var b=function(a){var b=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(a){return!1}}();return function(){var c,d=j(a);if(b){var e=j(this).constructor;c=Reflect.construct(d,arguments,e)}else c=d.apply(this,arguments);return i(this,c)}}(c);function c(a){var f;return e(this,c),(f=b.call(this,a)).emitChange=function(){f._hasHeadManager&&f.props.headManager.updateHead(f.props.reduceComponentsToState(d(f.props.headManager.mountedInstances),f.props))},f._hasHeadManager=f.props.headManager&&f.props.headManager.mountedInstances,f}return f(c,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),c}(function(a){if(a&&a.__esModule)return a;var b={};if(null!=a){for(var c in a)if(Object.prototype.hasOwnProperty.call(a,c)){var d=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(a,c):{};d.get||d.set?Object.defineProperty(b,c,d):b[c]=a[c]}}return b.default=a,b}(c(67294)).Component);b.default=k},25071:function(a,b,c){"use strict";c.r(b),c.d(b,{"__N_SSG":function(){return i},meta:function(){return j}});var d=c(91),e=c(87462);c(67294);var f=c(3905),g=c(38327),h=["components"],i=!0,j={title:"RACI を使った責務の明確化",date:"2019-08-06T00:11:20",tags:["RACI"]};function k(a){var b=a.components,c=(0,d.Z)(a,h);return(0,f.kt)(function(a){return(0,f.kt)(g.Z,(0,e.Z)({meta:j},a,{mdxType:"Note"}))},(0,e.Z)({components:b},c),(0,f.kt)("p",null,"今日会社ではじめて「RACI」という言葉を知った。"),(0,f.kt)("p",null,"会社では呼び名が分からなかったのでずっと「",(0,f.kt)("a",{href:"https://ja.wikipedia.org/wiki/%E3%83%A9%E3%83%83%E3%82%B7%E3%83%BC",parentName:"p"},"ラッシー"),"」と呼んでいたが、本当は「レイシー」と呼ぶらしい。RACI matrix と呼ぶっぽい。"),(0,f.kt)("p",null,"これはプロジェクトや社内での何かしらの工程での役割分担を matrix を使って明確描写するビジネスツールとのこと。"),(0,f.kt)("p",null,"タスクを 4 種類の参加者の責任型に分割し、各参加者には異なる役割が割り当てられる。そしてそれぞれの役割は下記のように決まっている。"),(0,f.kt)("ul",null,(0,f.kt)("li",{parentName:"ul"},"R = Responsible (also Recommender)",(0,f.kt)("ul",{parentName:"li"},(0,f.kt)("li",{parentName:"ul"},"タスク達成のために働く責任者。複数のリソースについて責任を持つことがある。"))),(0,f.kt)("li",{parentName:"ul"},"A = Accountable (also Approver or final approving authority)",(0,f.kt)("ul",{parentName:"li"},(0,f.kt)("li",{parentName:"ul"},"タスクの前提条件が満たされることを明らかにする"),(0,f.kt)("li",{parentName:"ul"},"実行責任を負うもの（Recommender）に作業を委任する"),(0,f.kt)("li",{parentName:"ul"},"最終的に実行責任者が完了したタスクや成果物に対して承認しなければならない"),(0,f.kt)("li",{parentName:"ul"},"各タスクの窓口は1つでなければならない"))),(0,f.kt)("li",{parentName:"ul"},"C = Consulted (sometimes Consultant or counsel)",(0,f.kt)("ul",{parentName:"li"},(0,f.kt)("li",{parentName:"ul"},"相談先"),(0,f.kt)("li",{parentName:"ul"},"双方向コミュニケーション"))),(0,f.kt)("li",{parentName:"ul"},"I = Informed (also Informer)",(0,f.kt)("ul",{parentName:"li"},(0,f.kt)("li",{parentName:"ul"},"常に進捗を把握してる"),(0,f.kt)("li",{parentName:"ul"},"一方向のコミュニケーション")))),(0,f.kt)("p",null,"これらの ",(0,f.kt)("strong",{parentName:"p"},"R/A/C/I")," を matrix の各マスに当てはめててく。こんな感じ"),(0,f.kt)("p",null,(0,f.kt)("img",{src:"https://upload.wikimedia.org/wikipedia/commons/1/13/RACIQ_Chart_-_Responsibility_Assignment_Matrix.jpg",alt:"RACIQ Chart - Responsibility Assignment Matrix.jpg",parentName:"p"})),(0,f.kt)("h2",{id:"どう割り当てるべきか"},(0,f.kt)("a",{href:"#%E3%81%A9%E3%81%86%E5%89%B2%E3%82%8A%E5%BD%93%E3%81%A6%E3%82%8B%E3%81%B9%E3%81%8D%E3%81%8B","aria-hidden":"true",tabIndex:"-1",parentName:"h2"},(0,f.kt)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",parentName:"a"},(0,f.kt)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1",parentName:"svg"}))),"どう割り当てるべきか"),(0,f.kt)("ul",null,(0,f.kt)("li",{parentName:"ul"},"Responsible と Accountable は同一の人間に割り当てられることが多い（らしい）"),(0,f.kt)("li",{parentName:"ul"},"各タスクについて、一般に各参加者がそれぞれ 1 つの役割を割り当てられるのが推奨されている"),(0,f.kt)("li",{parentName:"ul"},"1 人に複数の責任型を割り当てることもあるが、",(0,f.kt)("strong",{parentName:"li"},"役割が計画時点で決められないことを暗に示しており、各タスクにおける役割分担を明確化するというこの手法の価値を減じることになる"))),(0,f.kt)("h2",{id:"実際に割り当ててみる"},(0,f.kt)("a",{href:"#%E5%AE%9F%E9%9A%9B%E3%81%AB%E5%89%B2%E3%82%8A%E5%BD%93%E3%81%A6%E3%81%A6%E3%81%BF%E3%82%8B","aria-hidden":"true",tabIndex:"-1",parentName:"h2"},(0,f.kt)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",parentName:"a"},(0,f.kt)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1",parentName:"svg"}))),"実際に割り当ててみる"),(0,f.kt)("p",null,"これはほんの一部だけど実際に割り当てた様子がこんな感じ。"),(0,f.kt)("table",null,(0,f.kt)("thead",{parentName:"table"},(0,f.kt)("tr",{parentName:"thead"},(0,f.kt)("th",{align:"center",parentName:"tr"},"Development"),(0,f.kt)("th",{align:"center",parentName:"tr"}),(0,f.kt)("th",{align:"center",parentName:"tr"},"Director"),(0,f.kt)("th",{align:"center",parentName:"tr"},"EM"),(0,f.kt)("th",{align:"center",parentName:"tr"},"TL"),(0,f.kt)("th",{align:"center",parentName:"tr"},"Member"),(0,f.kt)("th",{parentName:"tr"},"memo"))),(0,f.kt)("tbody",{parentName:"table"},(0,f.kt)("tr",{parentName:"tbody"},(0,f.kt)("td",{align:"center",parentName:"tr"}),(0,f.kt)("td",{align:"center",parentName:"tr"},"Design Doc"),(0,f.kt)("td",{align:"center",parentName:"tr"}),(0,f.kt)("td",{align:"center",parentName:"tr"}),(0,f.kt)("td",{align:"center",parentName:"tr"},"A"),(0,f.kt)("td",{align:"center",parentName:"tr"},"R"),(0,f.kt)("td",{parentName:"tr"},"Write design doc")),(0,f.kt)("tr",{parentName:"tbody"},(0,f.kt)("td",{align:"center",parentName:"tr"}),(0,f.kt)("td",{align:"center",parentName:"tr"},"Technical Decision"),(0,f.kt)("td",{align:"center",parentName:"tr"}),(0,f.kt)("td",{align:"center",parentName:"tr"}),(0,f.kt)("td",{align:"center",parentName:"tr"},"A"),(0,f.kt)("td",{align:"center",parentName:"tr"},"R"),(0,f.kt)("td",{parentName:"tr"},"Decide technical something")),(0,f.kt)("tr",{parentName:"tbody"},(0,f.kt)("td",{align:"center",parentName:"tr"},"Team"),(0,f.kt)("td",{align:"center",parentName:"tr"}),(0,f.kt)("td",{align:"center",parentName:"tr"}),(0,f.kt)("td",{align:"center",parentName:"tr"}),(0,f.kt)("td",{align:"center",parentName:"tr"}),(0,f.kt)("td",{align:"center",parentName:"tr"}),(0,f.kt)("td",{parentName:"tr"})),(0,f.kt)("tr",{parentName:"tbody"},(0,f.kt)("td",{align:"center",parentName:"tr"}),(0,f.kt)("td",{align:"center",parentName:"tr"},"Team Roadmap"),(0,f.kt)("td",{align:"center",parentName:"tr"},"I"),(0,f.kt)("td",{align:"center",parentName:"tr"},"A"),(0,f.kt)("td",{align:"center",parentName:"tr"},"R"),(0,f.kt)("td",{align:"center",parentName:"tr"},"C"),(0,f.kt)("td",{parentName:"tr"},"Decide our roadmap")),(0,f.kt)("tr",{parentName:"tbody"},(0,f.kt)("td",{align:"center",parentName:"tr"}),(0,f.kt)("td",{align:"center",parentName:"tr"},"Setting Team OKR"),(0,f.kt)("td",{align:"center",parentName:"tr"},"I"),(0,f.kt)("td",{align:"center",parentName:"tr"},"A"),(0,f.kt)("td",{align:"center",parentName:"tr"},"R"),(0,f.kt)("td",{align:"center",parentName:"tr"},"C"),(0,f.kt)("td",{parentName:"tr"})),(0,f.kt)("tr",{parentName:"tbody"},(0,f.kt)("td",{align:"center",parentName:"tr"},"Incident"),(0,f.kt)("td",{align:"center",parentName:"tr"}),(0,f.kt)("td",{align:"center",parentName:"tr"}),(0,f.kt)("td",{align:"center",parentName:"tr"}),(0,f.kt)("td",{align:"center",parentName:"tr"}),(0,f.kt)("td",{align:"center",parentName:"tr"}),(0,f.kt)("td",{parentName:"tr"})),(0,f.kt)("tr",{parentName:"tbody"},(0,f.kt)("td",{align:"center",parentName:"tr"}),(0,f.kt)("td",{align:"center",parentName:"tr"},"Incident Response"),(0,f.kt)("td",{align:"center",parentName:"tr"},"I"),(0,f.kt)("td",{align:"center",parentName:"tr"},"I"),(0,f.kt)("td",{align:"center",parentName:"tr"},"R/A"),(0,f.kt)("td",{align:"center",parentName:"tr"},"R/A"),(0,f.kt)("td",{parentName:"tr"},"Response when an incident occurs")))),(0,f.kt)("p",null,"実際に割り当ててみると、一人の人物が実行責任と説明責任を持たなければならないケースが多々あった。今振り返ってこれを書いてるけど"),(0,f.kt)("blockquote",null,(0,f.kt)("p",{parentName:"blockquote"},"Responsible と Accountable は同一の人間に割り当てられることが多い")),(0,f.kt)("p",null,"これが当たってて凄いなあと思った。しかし R/A が２つの参加者にどうしても割り当てられるケースもあって難しいなと思った。"),(0,f.kt)("p",null,"割り当てる時チーム内でも R/A/C/I のそれぞれが誰に割り当てられるべきか結構議論もできたので、チーム内での認識合わせには丁度良いコミュニケーションツールになるだろうなと思った。"),(0,f.kt)("h2",{id:"参考"},(0,f.kt)("a",{href:"#%E5%8F%82%E8%80%83","aria-hidden":"true",tabIndex:"-1",parentName:"h2"},(0,f.kt)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",parentName:"a"},(0,f.kt)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1",parentName:"svg"}))),"参考"),(0,f.kt)("ul",null,(0,f.kt)("li",{parentName:"ul"},(0,f.kt)("a",{href:"https://en.wikipedia.org/wiki/Responsibility_assignment_matrix",parentName:"li"},"Responsibility assignment matrix"))))}k.isMDXComponent=!0,b.default=k},42707:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/note/raci_matrix",function(){return c(25071)}])},9008:function(a,b,c){a.exports=c(72717)},87462:function(a,b,c){"use strict";function d(){return(d=Object.assign||function(a){for(var b=1;b<arguments.length;b++){var c=arguments[b];for(var d in c)Object.prototype.hasOwnProperty.call(c,d)&&(a[d]=c[d])}return a}).apply(this,arguments)}c.d(b,{Z:function(){return d}})},91:function(a,b,c){"use strict";function d(a,b){if(null==a)return{};var c,d,e=function(a,b){if(null==a)return{};var c,d,e={},f=Object.keys(a);for(d=0;d<f.length;d++)c=f[d],b.indexOf(c)>=0||(e[c]=a[c]);return e}(a,b);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(d=0;d<f.length;d++)c=f[d],b.indexOf(c)>=0||Object.prototype.propertyIsEnumerable.call(a,c)&&(e[c]=a[c])}return e}c.d(b,{Z:function(){return d}})}},function(a){a.O(0,[541,327,774,888,179],function(){return a(a.s=42707)}),_N_E=a.O()}])