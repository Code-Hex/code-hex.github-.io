(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[795],{23646:function(a,b,c){var d=c(67228);a.exports=function(a){if(Array.isArray(a))return d(a)},a.exports.default=a.exports,a.exports.__esModule=!0},46860:function(a){a.exports=function(a){if("undefined"!=typeof Symbol&&null!=a[Symbol.iterator]||null!=a["@@iterator"])return Array.from(a)},a.exports.default=a.exports,a.exports.__esModule=!0},98206:function(a){a.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},a.exports.default=a.exports,a.exports.__esModule=!0},319:function(a,b,c){var d=c(23646),e=c(46860),f=c(60379),g=c(98206);a.exports=function(a){return d(a)||e(a)||f(a)||g()},a.exports.default=a.exports,a.exports.__esModule=!0},78000:function(a,b,c){"use strict";Object.defineProperty(b,"__esModule",{value:!0}),b.AmpStateContext=void 0;var d,e=((d=c(67294))&&d.__esModule?d:{"default":d}).default.createContext({});b.AmpStateContext=e},45646:function(a,b,c){"use strict";Object.defineProperty(b,"__esModule",{value:!0}),b.isInAmpMode=g,b.useAmp=function(){return g(e.default.useContext(f.AmpStateContext))};var d,e=(d=c(67294))&&d.__esModule?d:{"default":d},f=c(78000);function g(){var a=arguments.length>0&& void 0!==arguments[0]?arguments[0]:{},b=a.ampFirst,c=a.hybrid,d=a.hasQuery;return void 0!==b&&b|| void 0!==c&&c&& void 0!==d&&d}},72717:function(a,b,c){"use strict";var d=c(59713);function e(a,b){var c=Object.keys(a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(a);b&&(d=d.filter(function(b){return Object.getOwnPropertyDescriptor(a,b).enumerable})),c.push.apply(c,d)}return c}Object.defineProperty(b,"__esModule",{value:!0}),b.defaultHead=l,b.default=void 0;var f,g=function(a){if(a&&a.__esModule)return a;var b={};if(null!=a){for(var c in a)if(Object.prototype.hasOwnProperty.call(a,c)){var d=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(a,c):{};d.get||d.set?Object.defineProperty(b,c,d):b[c]=a[c]}}return b.default=a,b}(c(67294)),h=(f=c(11585))&&f.__esModule?f:{"default":f},i=c(78000),j=c(15850),k=c(45646);function l(){var a=arguments.length>0&& void 0!==arguments[0]&&arguments[0],b=[g.default.createElement("meta",{charSet:"utf-8"})];return a||b.push(g.default.createElement("meta",{name:"viewport",content:"width=device-width"})),b}function m(a,b){return"string"==typeof b||"number"==typeof b?a:b.type===g.default.Fragment?a.concat(g.default.Children.toArray(b.props.children).reduce(function(a,b){return"string"==typeof b||"number"==typeof b?a:a.concat(b)},[])):a.concat(b)}var n=["name","httpEquiv","charSet","itemProp"];function o(a,b){var c,f,h,i;return a.reduce(function(a,b){var c=g.default.Children.toArray(b.props.children);return a.concat(c)},[]).reduce(m,[]).reverse().concat(l(b.inAmpMode)).filter((c=new Set(),f=new Set(),h=new Set(),i={},function(a){var b=!0,d=!1;if(a.key&&"number"!=typeof a.key&&a.key.indexOf("$")>0){d=!0;var e=a.key.slice(a.key.indexOf("$")+1);c.has(e)?b=!1:c.add(e)}switch(a.type){case"title":case"base":f.has(a.type)?b=!1:f.add(a.type);break;case"meta":for(var g=0,j=n.length;g<j;g++){var k=n[g];if(a.props.hasOwnProperty(k))if("charSet"===k)h.has(k)?b=!1:h.add(k);else{var l=a.props[k],m=i[k]||new Set();("name"!==k||!d)&&m.has(l)?b=!1:(m.add(l),i[k]=m)}}break}return b})).reverse().map(function(a,c){var f=a.key||c;if(!b.inAmpMode&&"link"===a.type&&a.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some(function(b){return a.props.href.startsWith(b)})){var h=function(a){for(var b=1;b<arguments.length;b++){var c=null!=arguments[b]?arguments[b]:{};b%2?e(Object(c),!0).forEach(function(b){d(a,b,c[b])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(c)):e(Object(c)).forEach(function(b){Object.defineProperty(a,b,Object.getOwnPropertyDescriptor(c,b))})}return a}({},a.props||{});return h["data-href"]=h.href,h.href=void 0,h["data-optimized-fonts"]=!0,g.default.cloneElement(a,h)}return g.default.cloneElement(a,{key:f})})}b.default=function(a){var b=a.children,c=g.useContext(i.AmpStateContext),d=g.useContext(j.HeadManagerContext);return g.default.createElement(h.default,{reduceComponentsToState:o,headManager:d,inAmpMode:k.isInAmpMode(c)},b)}},11585:function(a,b,c){"use strict";var d=c(319),e=c(34575),f=c(93913),g=c(81506),h=c(2205),i=c(78585),j=c(29754);Object.defineProperty(b,"__esModule",{value:!0}),b.default=void 0;var k=function(a){h(c,a);var b=function(a){var b=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(a){return!1}}();return function(){var c,d=j(a);if(b){var e=j(this).constructor;c=Reflect.construct(d,arguments,e)}else c=d.apply(this,arguments);return i(this,c)}}(c);function c(a){var f;return e(this,c),(f=b.call(this,a)).emitChange=function(){f._hasHeadManager&&f.props.headManager.updateHead(f.props.reduceComponentsToState(d(f.props.headManager.mountedInstances),f.props))},f._hasHeadManager=f.props.headManager&&f.props.headManager.mountedInstances,f}return f(c,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),c}(function(a){if(a&&a.__esModule)return a;var b={};if(null!=a){for(var c in a)if(Object.prototype.hasOwnProperty.call(a,c)){var d=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(a,c):{};d.get||d.set?Object.defineProperty(b,c,d):b[c]=a[c]}}return b.default=a,b}(c(67294)).Component);b.default=k},62816:function(a,b,c){"use strict";c.r(b),c.d(b,{"__N_SSG":function(){return t},"default":function(){return u}});var d=c(40181),e=c(91),f=c(15861),g=c(87757),h=c.n(g),i=c(14653),j=c(9008),k=c(67294),l=c(85893),m=["permissions"],n=["permissions"];function o(a,b,c){return p.apply(this,arguments)}function p(){return(p=(0,f.Z)(h().mark(function a(b,c,d){return h().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(""!==d){a.next=2;break}return a.abrupt("return",b);case 2:return a.abrupt("return",b.filter(function(a){return c(a,d)}));case 3:case"end":return a.stop()}},a)}))).apply(this,arguments)}var q={English:"en",日本語:"ja"},r="Predifined Roles Finder - codehex.dev",s="You can look for Predefined Roles in GCP. Search in any language you enter - Predifined Roles Finder - codehex.dev",t=!0,u=function(a){var b,c=a.jsonPayload,g=(0,k.useState)("en"),n=g[0],p=g[1],t=(0,k.useCallback)(function(a,b){a.permissions;var c=(0,e.Z)(a,m);return!!Object.values(c).find(function(a){return!!a.roleTitle.includes(b)||!!a.roleName.includes(b)})},[]),u=(0,k.useMemo)(function(){return Object.values(c)},[c]),w=function(a,b){var c=arguments.length>2&& void 0!==arguments[2]?arguments[2]:1000,d=(0,k.useState)(!1),e=d[0],g=d[1],i=(0,k.useState)(a),j=i[0],l=i[1],m=(0,k.useState)(""),n=m[0],p=m[1];return(0,k.useEffect)(function(){g(!0);var d=setTimeout(function(){(0,f.Z)(h().mark(function c(){var d;return h().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,o(a,b,n);case 2:d=c.sent,g(!1),l(d);case 5:case"end":return c.stop()}},c)}))()},c);return function(){return clearTimeout(d)}},[n,b,g,l]),[j,e,p]}(u,t),x=function(a){if(Array.isArray(a))return a}(b=w)||function(a,b){var c,d,e=null==a?null:"undefined"!=typeof Symbol&&a[Symbol.iterator]||a["@@iterator"];if(null!=e){var f=[],g=!0,h=!1;try{for(e=e.call(a);!(g=(c=e.next()).done)&&(f.push(c.value),!b||f.length!==b);g=!0);}catch(i){h=!0,d=i}finally{try{g||null==e.return||e.return()}finally{if(h)throw d}}return f}}(b,3)||(0,d.Z)(b,3)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),y=x[0],z=x[1],A=x[2];return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(j.default,{children:[(0,l.jsx)("meta",{charSet:"utf-8"}),(0,l.jsx)("link",{rel:"dns-prefetch",href:"https://cloud.google.com"}),(0,l.jsx)("title",{children:r}),(0,l.jsx)("meta",{name:"description",content:s}),(0,l.jsx)("meta",{property:"og:site_name",content:"codehex.dev"}),(0,l.jsx)("meta",{property:"og:type",content:"website"}),(0,l.jsx)("meta",{property:"og:title",content:r}),(0,l.jsx)("meta",{property:"og:url",content:"https://codehex.dev/gcp_predefined_roles/"}),(0,l.jsx)("meta",{property:"og:description",content:s})]}),(0,l.jsx)("div",{className:"w-full h-full bg-gray-300",children:(0,l.jsxs)("div",{className:"pb-4 sm:px-8",children:[(0,l.jsx)("div",{className:"sticky top-0 shadow-xl",children:(0,l.jsxs)("div",{className:"w-full bg-white flex flex-col sm:flex-row",children:[(0,l.jsx)("a",{className:"pl-4 py-4 hover:underline col-span-3 sm:col-span-1",href:"https://cloud.google.com/iam/docs/understanding-roles#predefined_roles",children:(0,l.jsxs)("span",{className:"flex flex-row space-x-2 items-center",children:[(0,l.jsx)("img",{alt:"GCP Logo",className:"h-6",src:"https://lh3.googleusercontent.com/VEnnK2SyklusfxZ3dIYjlQH3xSwK2BFSJ69TFQ9g8HjM6m3CouRlTia5FW3z3GS0x83WC9TylZCaA9Jf_2kmr7mXxI9_HYLZTFy_bg"}),(0,l.jsx)("h1",{className:"flex-shrink-0 text-blue-600 font-bold w-60",children:"Predifined Roles Finder"})]})}),(0,l.jsxs)("div",{className:"w-full flex flex-row items-center",children:[(0,l.jsxs)("div",{className:"relative bg-transparent",children:[(0,l.jsx)("select",{className:"appearance-none pl-4 pr-8 block text-gray-500 focus:outline-none",onChange:function(a){return p(a.currentTarget.value)},defaultValue:n,children:Object.keys(q).map(function(a,b){return(0,l.jsx)("option",{value:q[a],children:a},b)})}),(0,l.jsx)(i.Ta4,{className:"w-5 h-5 text-gray-400 absolute top-1/2 right-0 -mt-2.5 pointer-events-none"})]}),(0,l.jsx)("input",{className:"w-full py-4 px-4 text-gray-700 leading-tight focus:outline-none",id:"search",type:"text",placeholder:"Search",role:"search",onChange:function(a){return A(a.target.value)}})]})]})}),(0,l.jsx)("div",{className:"py-4",children:(0,l.jsx)("div",{className:"w-full bg-white overflow-x-scroll",children:(0,l.jsx)(v,{result:y,loading:z,locale:n})})})]})})]})},v=function(a){var b=a.result,c=a.loading,d=a.locale;return c?(0,l.jsx)("div",{className:"py-8",children:(0,l.jsx)(function(){return(0,l.jsxs)("svg",{className:"animate-spin h-10 w-10 text-indigo-500 mx-auto",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:[(0,l.jsx)("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),(0,l.jsx)("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]})},{})}):(0,l.jsxs)("table",{className:"w-full table-auto",children:[(0,l.jsx)("thead",{className:"bg-gray-100",children:(0,l.jsxs)("tr",{className:"text-left text-gray-500",children:[(0,l.jsx)("th",{className:"px-4 py-4",children:"Role"}),(0,l.jsx)("th",{className:"px-4 py-4",children:"Permissions"})]})}),(0,l.jsx)("tbody",{children:b.map(function(a,b){return(0,l.jsx)(w,{role:a,locale:d},b)})})]})},w=(0,k.memo)(function(a){var b=a.role,c=a.locale,d=b.permissions,f=(0,e.Z)(b,n)[c];return f?(0,l.jsxs)("tr",{className:"border-b border-gray-300",children:[(0,l.jsxs)("td",{className:"px-4 py-4 align-top",children:[(0,l.jsx)("p",{className:"font-bold",children:f.roleTitle}),(0,l.jsx)("p",{className:"text-pink-600 font-mono",children:f.roleName}),(0,l.jsx)("p",{className:"py-2",children:f.roleDescription})]}),(0,l.jsx)("td",{className:"px-4 py-4",children:(0,l.jsx)(x,{permissions:d})})]}):(0,l.jsx)(l.Fragment,{})}),x=(0,k.memo)(function(a){var b=a.permissions;return(0,l.jsx)("ul",{children:b.map(function(a,b){return(0,l.jsx)("li",{children:a},b)})})})},15805:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/gcp_predefined_roles",function(){return c(62816)}])},9008:function(a,b,c){a.exports=c(72717)},91:function(a,b,c){"use strict";function d(a,b){if(null==a)return{};var c,d,e=function(a,b){if(null==a)return{};var c,d,e={},f=Object.keys(a);for(d=0;d<f.length;d++)c=f[d],b.indexOf(c)>=0||(e[c]=a[c]);return e}(a,b);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(d=0;d<f.length;d++)c=f[d],b.indexOf(c)>=0||Object.prototype.propertyIsEnumerable.call(a,c)&&(e[c]=a[c])}return e}c.d(b,{Z:function(){return d}})}},function(a){a.O(0,[854,774,888,179],function(){return a(a.s=15805)}),_N_E=a.O()}])