(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[52],{23646:function(a,b,c){var d=c(67228);a.exports=function(a){if(Array.isArray(a))return d(a)},a.exports.default=a.exports,a.exports.__esModule=!0},46860:function(a){a.exports=function(a){if("undefined"!=typeof Symbol&&null!=a[Symbol.iterator]||null!=a["@@iterator"])return Array.from(a)},a.exports.default=a.exports,a.exports.__esModule=!0},98206:function(a){a.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},a.exports.default=a.exports,a.exports.__esModule=!0},319:function(a,b,c){var d=c(23646),e=c(46860),f=c(60379),g=c(98206);a.exports=function(a){return d(a)||e(a)||f(a)||g()},a.exports.default=a.exports,a.exports.__esModule=!0},78000:function(a,b,c){"use strict";Object.defineProperty(b,"__esModule",{value:!0}),b.AmpStateContext=void 0;var d,e=((d=c(67294))&&d.__esModule?d:{"default":d}).default.createContext({});b.AmpStateContext=e},45646:function(a,b,c){"use strict";Object.defineProperty(b,"__esModule",{value:!0}),b.isInAmpMode=g,b.useAmp=function(){return g(e.default.useContext(f.AmpStateContext))};var d,e=(d=c(67294))&&d.__esModule?d:{"default":d},f=c(78000);function g(){var a=arguments.length>0&& void 0!==arguments[0]?arguments[0]:{},b=a.ampFirst,c=a.hybrid,d=a.hasQuery;return void 0!==b&&b|| void 0!==c&&c&& void 0!==d&&d}},72717:function(a,b,c){"use strict";var d=c(59713);function e(a,b){var c=Object.keys(a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(a);b&&(d=d.filter(function(b){return Object.getOwnPropertyDescriptor(a,b).enumerable})),c.push.apply(c,d)}return c}Object.defineProperty(b,"__esModule",{value:!0}),b.defaultHead=l,b.default=void 0;var f,g=function(a){if(a&&a.__esModule)return a;var b={};if(null!=a){for(var c in a)if(Object.prototype.hasOwnProperty.call(a,c)){var d=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(a,c):{};d.get||d.set?Object.defineProperty(b,c,d):b[c]=a[c]}}return b.default=a,b}(c(67294)),h=(f=c(11585))&&f.__esModule?f:{"default":f},i=c(78000),j=c(15850),k=c(45646);function l(){var a=arguments.length>0&& void 0!==arguments[0]&&arguments[0],b=[g.default.createElement("meta",{charSet:"utf-8"})];return a||b.push(g.default.createElement("meta",{name:"viewport",content:"width=device-width"})),b}function m(a,b){return"string"==typeof b||"number"==typeof b?a:b.type===g.default.Fragment?a.concat(g.default.Children.toArray(b.props.children).reduce(function(a,b){return"string"==typeof b||"number"==typeof b?a:a.concat(b)},[])):a.concat(b)}var n=["name","httpEquiv","charSet","itemProp"];function o(a,b){var c,f,h,i;return a.reduce(function(a,b){var c=g.default.Children.toArray(b.props.children);return a.concat(c)},[]).reduce(m,[]).reverse().concat(l(b.inAmpMode)).filter((c=new Set(),f=new Set(),h=new Set(),i={},function(a){var b=!0,d=!1;if(a.key&&"number"!=typeof a.key&&a.key.indexOf("$")>0){d=!0;var e=a.key.slice(a.key.indexOf("$")+1);c.has(e)?b=!1:c.add(e)}switch(a.type){case"title":case"base":f.has(a.type)?b=!1:f.add(a.type);break;case"meta":for(var g=0,j=n.length;g<j;g++){var k=n[g];if(a.props.hasOwnProperty(k))if("charSet"===k)h.has(k)?b=!1:h.add(k);else{var l=a.props[k],m=i[k]||new Set();("name"!==k||!d)&&m.has(l)?b=!1:(m.add(l),i[k]=m)}}break}return b})).reverse().map(function(a,c){var f=a.key||c;if(!b.inAmpMode&&"link"===a.type&&a.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some(function(b){return a.props.href.startsWith(b)})){var h=function(a){for(var b=1;b<arguments.length;b++){var c=null!=arguments[b]?arguments[b]:{};b%2?e(Object(c),!0).forEach(function(b){d(a,b,c[b])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(c)):e(Object(c)).forEach(function(b){Object.defineProperty(a,b,Object.getOwnPropertyDescriptor(c,b))})}return a}({},a.props||{});return h["data-href"]=h.href,h.href=void 0,h["data-optimized-fonts"]=!0,g.default.cloneElement(a,h)}return g.default.cloneElement(a,{key:f})})}b.default=function(a){var b=a.children,c=g.useContext(i.AmpStateContext),d=g.useContext(j.HeadManagerContext);return g.default.createElement(h.default,{reduceComponentsToState:o,headManager:d,inAmpMode:k.isInAmpMode(c)},b)}},11585:function(a,b,c){"use strict";var d=c(319),e=c(34575),f=c(93913),g=c(81506),h=c(2205),i=c(78585),j=c(29754);Object.defineProperty(b,"__esModule",{value:!0}),b.default=void 0;var k=function(a){h(c,a);var b=function(a){var b=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(a){return!1}}();return function(){var c,d=j(a);if(b){var e=j(this).constructor;c=Reflect.construct(d,arguments,e)}else c=d.apply(this,arguments);return i(this,c)}}(c);function c(a){var f;return e(this,c),(f=b.call(this,a)).emitChange=function(){f._hasHeadManager&&f.props.headManager.updateHead(f.props.reduceComponentsToState(d(f.props.headManager.mountedInstances),f.props))},f._hasHeadManager=f.props.headManager&&f.props.headManager.mountedInstances,f}return f(c,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),c}(function(a){if(a&&a.__esModule)return a;var b={};if(null!=a){for(var c in a)if(Object.prototype.hasOwnProperty.call(a,c)){var d=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(a,c):{};d.get||d.set?Object.defineProperty(b,c,d):b[c]=a[c]}}return b.default=a,b}(c(67294)).Component);b.default=k},50565:function(a,b,c){"use strict";c.r(b),c.d(b,{"__N_SSG":function(){return i},meta:function(){return j}});var d=c(91),e=c(87462);c(67294);var f=c(3905),g=c(38327),h=["components"],i=!0,j={title:"取得したドメインで送信するメールの信頼性を上げる方法",description:"Terraform で構成された Cloud DNS を例に、SPF、DKIM、DMARC をどのように設定することでメールの信頼性を向上させるか紹介した。",date:"2021-12-19T22:56:58+09:00",tags:["terraform","gcp","email"]};function k(a){var b=a.components,c=(0,d.Z)(a,h);return(0,f.kt)(function(a){return(0,f.kt)(g.Z,(0,e.Z)({meta:j},a,{mdxType:"Note"}))},(0,e.Z)({components:b},c),(0,f.kt)("p",null,"ドメインを取得後にそれを使ったメールアドレスで送信できるようになったが、受信先でそのメールが迷惑フォルダへ分類されることがある。"),(0,f.kt)("p",null,"会社では Google Domain でドメインを取得後、Google Workspace を利用してメールを送信できるようになった。DNS の管理は Cloud DNS を利用していて、その設定は Terraform を用いて管理している。"),(0,f.kt)("p",null,"当初の設定はシンプルなものであった。"),(0,f.kt)("ol",null,(0,f.kt)("li",{parentName:"ol"},"DNS ゾーンを設定"),(0,f.kt)("li",{parentName:"ol"},"設定したゾーンに対して MX レコードを設定")),(0,f.kt)("pre",null,(0,f.kt)("code",{className:"language-hcl",parentName:"pre"},"resource \"google_dns_managed_zone\" \"example_com_domain\" {\n  name     = \"example-com\"\n  dns_name = \"example.com.\"\n}\n\n# https://support.google.com/a/answer/9222085\nresource \"google_dns_record_set\" \"example_com_email\" {\n  name         = google_dns_managed_zone.example_com_domain.dns_name\n  type         = \"MX\"\n  ttl          = 300\n  managed_zone = google_dns_managed_zone.example_com_domain.name\n  rrdatas = [\n    \"1 aspmx.l.google.com.\",\n    \"5 alt1.aspmx.l.google.com.\",\n    \"5 alt2.aspmx.l.google.com.\",\n    \"10 alt3.aspmx.l.google.com.\",\n    \"10 alt4.aspmx.l.google.com.\",\n  ]\n}\n")),(0,f.kt)("p",null,"これだけで取得したドメインを利用したアドレスでメールの送信ができる。しかし受信先の Gmail 上では次のような警告が表示されていた。"),(0,f.kt)("p",null,(0,f.kt)("img",{src:"https://user-images.githubusercontent.com/6500104/146682538-4be73b57-f202-4ad7-a47c-8316388e9149.png",alt:"146682538-4be73b57-f202-4ad7-a47c-8316388e9149.png",parentName:"p"})),(0,f.kt)("p",null,"これは Gmail 側で行われる認証ロジックによって、ドメインを取得した本人（もしくは法人）から送信されているメールかどうか判断できなかった場合に表示される。"),(0,f.kt)("p",null,"本記事では Terraform で管理された Cloud DNS を例にメールの信頼性をどう向上させたのかを紹介していく。"),(0,f.kt)("h2",{id:"spf、dkim、dmarc-を設定する"},(0,f.kt)("a",{href:"#spf%E3%80%81dkim%E3%80%81dmarc-%E3%82%92%E8%A8%AD%E5%AE%9A%E3%81%99%E3%82%8B","aria-hidden":"true",tabIndex:"-1",parentName:"h2"},(0,f.kt)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",parentName:"a"},(0,f.kt)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1",parentName:"svg"}))),"SPF、DKIM、DMARC を設定する"),(0,f.kt)("p",null,"前述した問題を回避するために Google のサポートでは SPF、DKIM、DMARC の設定を推奨している",(0,f.kt)("sup",{id:"fnref-1",parentName:"p"},(0,f.kt)("a",{href:"#fn-1",className:"footnote-ref",parentName:"sup"},"1")),"。"),(0,f.kt)("p",null,"設定方法を紹介する前にこれらが何か簡単に紹介する。"),(0,f.kt)("ul",null,(0,f.kt)("li",{parentName:"ul"},"SPF (Sender Policy Framework)",(0,f.kt)("ul",{parentName:"li"},(0,f.kt)("li",{parentName:"ul"},"特定のドメイン名の使用を、許可されているホストのリストを提供するために使用される"),(0,f.kt)("li",{parentName:"ul"},"受信側はこの情報を使って、詐称されていないかを検査できる"))),(0,f.kt)("li",{parentName:"ul"},"DKIM (Domain Keys Identified Mail)",(0,f.kt)("ul",{parentName:"li"},(0,f.kt)("li",{parentName:"ul"},"メールを送信する際に送信元が電子署名を行い、受信者がそれを検証することで送信者のなりすましやメールの改ざんを検知できるようにする"))),(0,f.kt)("li",{parentName:"ul"},"DMARC (Domain-based Message Authentication, Reporting, and Conformance)",(0,f.kt)("ul",{parentName:"li"},(0,f.kt)("li",{parentName:"ul"},"SPF と DKIM を利用して認証に失敗したメールをどう扱うかは受信側に任されている"),(0,f.kt)("li",{parentName:"ul"},"送信者が受信者に対して、認証に失敗したメールをどう扱って欲しいか指示が可能"),(0,f.kt)("li",{parentName:"ul"},"受信者から送信者に対して認証に失敗したことを通知するレポートも送信可能")))),(0,f.kt)("p",null,"DNS レコードに SPF であればホストや IP などのリストを、DKIM だと検証に必要な公開鍵を記録することで認証が機能する。DMARC はポリシーを公開することで受信者へ認証に失敗したメールをどうするか指示を行える。"),(0,f.kt)("h3",{id:"spf-と-dkim-を設定する"},(0,f.kt)("a",{href:"#spf-%E3%81%A8-dkim-%E3%82%92%E8%A8%AD%E5%AE%9A%E3%81%99%E3%82%8B","aria-hidden":"true",tabIndex:"-1",parentName:"h3"},(0,f.kt)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",parentName:"a"},(0,f.kt)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1",parentName:"svg"}))),"SPF と DKIM を設定する"),(0,f.kt)("p",null,"Google サポートで案内されている方法に従って、まずは Terraform に SPF と DKIM の設定のみ記述する。DMARC はこれらの設定が反映された後に設定する。"),(0,f.kt)("pre",null,(0,f.kt)("code",{className:"language-hcl",parentName:"pre"},"# https://support.google.com/a/answer/10684623\n# https://registry.terraform.io/providers/hashicorp/google/latest/docs/resources/dns_record_set#adding-an-spf-record\nresource \"google_dns_record_set\" \"example_com_email_spf\" {\n  name         = google_dns_managed_zone.example_com_domain.dns_name\n  type         = \"TXT\"\n  ttl          = 300\n  managed_zone = google_dns_managed_zone.example_com_domain.name\n  rrdatas = [\n    \"\\\"v=spf1 include:_spf.google.com ~all\\\"\",\n  ]\n}\n\n# https://support.google.com/a/answer/174124\nresource \"google_dns_record_set\" \"example_com_email_dkim\" {\n  name         = \"google._domainkey.${google_dns_managed_zone.example_com_domain.dns_name}\"\n  type         = \"TXT\"\n  ttl          = 300\n  managed_zone = google_dns_managed_zone.example_com_domain.name\n  rrdatas = [\n    \"\\\"v=DKIM1; k=rsa; p=<DKIM-KEY>\\\"\",\n  ]\n}\n")),(0,f.kt)("p",null,"DKIM の値は Google Workspace の管理コンソールにアクセスし、[アプリ] > [Google Workspace] > [Gmail] を選択して [メールの認証] から取得することができる。"),(0,f.kt)("p",null,(0,f.kt)("img",{src:"https://user-images.githubusercontent.com/6500104/146678437-00ae1693-104f-48ef-ac1d-94b29301e5ee.png",alt:"146678437-00ae1693-104f-48ef-ac1d-94b29301e5ee.png",parentName:"p"})),(0,f.kt)("p",null,"画像から分かるように DKIM の値（青く選択されている箇所）はとても長い文字列になる。これは 255 文字を超える長さになる。この長さの値をそのまま TXT レコードへ反映しようとすると失敗する。"),(0,f.kt)("p",null,"回避策として Terraform Google Provider の ",(0,f.kt)("a",{href:"https://registry.terraform.io/providers/hashicorp/google/latest/docs/resources/dns_record_set#rrdatas",parentName:"p"},"dns_record_set (rrdatas) のドキュメント")," に ",(0,f.kt)("inlineCode",{parentName:"p"},"\\\" \\\"")," を使用することが記述されている。"),(0,f.kt)("blockquote",null,(0,f.kt)("p",{parentName:"blockquote"},"To specify a single record value longer than 255 characters such as a TXT record for DKIM, add \" \" inside the Terraform configuration string (e.g. \"first255characters\" \"morecharacters\").")),(0,f.kt)("p",null,"筆者は 255 文字目で区切れるような次のワンライナーを活用した。"),(0,f.kt)("p",null,(0,f.kt)("inlineCode",{parentName:"p"},"$ pbpaste | perl -ne 'my @a = $_ =~ /.{255}|.+/g; print join \"\\\\\\\" \\\\\\\"\", @a;' | pbcopy")),(0,f.kt)("p",null,"このワンライナーは DKIM の値を管理コンソールでコピーした後に実行する。するとクリップボードの中身は 255 文字目で区切られた状態へ更新される。あとは rrdatas へペーストすれば良い。"),(0,f.kt)("p",null,"apply が完了し、反映されたら次は DMARC の設定を記述する。"),(0,f.kt)("h3",{id:"dmarc-を設定する"},(0,f.kt)("a",{href:"#dmarc-%E3%82%92%E8%A8%AD%E5%AE%9A%E3%81%99%E3%82%8B","aria-hidden":"true",tabIndex:"-1",parentName:"h3"},(0,f.kt)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",parentName:"a"},(0,f.kt)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1",parentName:"svg"}))),"DMARC を設定する"),(0,f.kt)("p",null,"Terraform の記述はシンプルになる。"),(0,f.kt)("pre",null,(0,f.kt)("code",{className:"language-hcl",parentName:"pre"},"# https://support.google.com/a/answer/2466563\nresource \"google_dns_record_set\" \"example_com_email_dmarc\" {\n  name         = \"_dmarc.${google_dns_managed_zone.example_com_domain.dns_name}\"\n  type         = \"TXT\"\n  ttl          = 300\n  managed_zone = google_dns_managed_zone.example_com_domain.name\n  rrdatas      = [\"\\\"v=DMARC1; p=reject; rua=mailto:dmarc@example.com\\\"\"]\n}\n")),(0,f.kt)("p",null,"DMARC の値は ",(0,f.kt)("inlineCode",{parentName:"p"},"v")," ",(0,f.kt)("inlineCode",{parentName:"p"},"p")," タグが必須になる。ここでは ",(0,f.kt)("inlineCode",{parentName:"p"},"p")," タグについて触れておきたい。"),(0,f.kt)("p",null,(0,f.kt)("inlineCode",{parentName:"p"},"p")," タグでは受信したメールが認証できなかった場合、そのメールをどう処理するか指示できる。指定できる値は ",(0,f.kt)("inlineCode",{parentName:"p"},"none")," ",(0,f.kt)("inlineCode",{parentName:"p"},"quarantine")," ",(0,f.kt)("inlineCode",{parentName:"p"},"reject")," のいずれかである。"),(0,f.kt)("p",null,"筆者として DMARC を導入するのであれば ",(0,f.kt)("inlineCode",{parentName:"p"},"none")," は絶対に避けるべきだと考える。なぜなら認証に失敗したメールを自動的に不正なメール、もしくは迷惑メールとして処理しないからである。処理されない場合、そのメールはメインの受信トレイへ保存されることになる。一般的な受信者にとって、メールが本当に信頼している組織から送られてきているかどうかを開封したときに判断することが難しい。つまり攻撃者が組織を装って送信したメールによって、受信者の個人情報が流出するなどのインシデントが容易に発生することが想定できる。"),(0,f.kt)("p",null,"会社では ",(0,f.kt)("inlineCode",{parentName:"p"},"reject")," を利用する選択をした。ちなみに Microsoft や Gmail は既に ",(0,f.kt)("inlineCode",{parentName:"p"},"reject")," を利用している",(0,f.kt)("sup",{id:"fnref-2",parentName:"p"},(0,f.kt)("a",{href:"#fn-2",className:"footnote-ref",parentName:"sup"},"2")),"。"),(0,f.kt)("p",null,"apply 完了後、メールを送信してテストしてみると警告が表示されない。これで信頼度を上げるために必要な設定は終わりである。"),(0,f.kt)("h2",{id:"最後に"},(0,f.kt)("a",{href:"#%E6%9C%80%E5%BE%8C%E3%81%AB","aria-hidden":"true",tabIndex:"-1",parentName:"h2"},(0,f.kt)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",parentName:"a"},(0,f.kt)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1",parentName:"svg"}))),"最後に"),(0,f.kt)("p",null,"これらの技術は全て DNS を信頼する前提で成り立っている。例えば中間者攻撃によって DNS の応答を変更できる場合上記で挙げた内容を完全に検証することは不可能になる。このような改ざんを防ぐために DNSSEC を利用する。(HTTPS をなぜ利用するのか知っているとイメージがつきやすい)"),(0,f.kt)("p",null,"Cloud DNS の場合 Terraform で管理されていれば ",(0,f.kt)("a",{href:"https://registry.terraform.io/providers/hashicorp/google/latest/docs/resources/dns_managed_zone#nested_dnssec_config",parentName:"p"},"dnssec_config")," を記述し state を ",(0,f.kt)("inlineCode",{parentName:"p"},"on")," へ設定すれば有効になる。"),(0,f.kt)("pre",null,(0,f.kt)("code",{className:"language-diff-hcl",parentName:"pre"},"resource \"google_dns_managed_zone\" \"example_com_domain\" {\n  name     = \"example-com\"\n  dns_name = \"example.com.\"\n+ dnssec_config {\n+   kind          = \"dns#managedZoneDnsSecConfig\"\n+   non_existence = \"nsec3\"\n+   state         = \"on\"\n+ }\n}\n")),(0,f.kt)("p",null,"apply 後、ドメインを取得したプロバイダで DNSSEC の DS レコードを保存する必要がある。保存すべきレコードの値は Cloud DNS だと gcloud コマンドを利用して取得できる。"),(0,f.kt)("p",null,(0,f.kt)("inlineCode",{parentName:"p"},"gcloud dns dns-keys describe 0 --zone <ZONE> --format \"value(ds_record())\"")),(0,f.kt)("p",null,(0,f.kt)("a",{href:"https://cloud.google.com/dns/docs/dnssec-advanced#spf-dkim-dmarc",parentName:"p"},"Google Cloud のドキュメント（高度な DNSSEC を使用する）")," では、本記事で紹介した設定が正しく構成されていることを確認するために ",(0,f.kt)("a",{href:"https://en.internet.nl/",parentName:"p"},"https://en.internet.nl/")," を利用することを推奨している。"),(0,f.kt)("p",null,"本記事では Terraform で管理された Cloud DNS を例に、送信元の電子メールのセキュリティをどう向上させるか紹介した。記述に間違いや修正すべき点があれば ",(0,f.kt)("a",{href:"https://twitter.com/codehex",parentName:"p"},"@codehex")," まで知らせてほしい。"),(0,f.kt)("h2",{id:"参考"},(0,f.kt)("a",{href:"#%E5%8F%82%E8%80%83","aria-hidden":"true",tabIndex:"-1",parentName:"h2"},(0,f.kt)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",parentName:"a"},(0,f.kt)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1",parentName:"svg"}))),"参考"),(0,f.kt)("ul",null,(0,f.kt)("li",{parentName:"ul"},(0,f.kt)("a",{href:"https://www.praetorian.com/blog/email-security/",parentName:"li"},"Email Security (SPF, DKIM, and DMARC)"),(0,f.kt)("ul",{parentName:"li"},(0,f.kt)("li",{parentName:"ul"},"SPF、DKIM、DMARC について詳しく説明されている"))),(0,f.kt)("li",{parentName:"ul"},(0,f.kt)("a",{href:"https://dmarc.org/wiki/FAQ",parentName:"li"},"https://dmarc.org/wiki/FAQ"),(0,f.kt)("ul",{parentName:"li"},(0,f.kt)("li",{parentName:"ul"},"DMARC に関する一般的な FAQ がまとめられている")))),(0,f.kt)("div",{className:"footnotes"},(0,f.kt)("hr",{parentName:"div"}),(0,f.kt)("ol",{parentName:"div"},(0,f.kt)("li",{id:"fn-1",parentName:"ol"},(0,f.kt)("a",{href:"https://support.google.com/a/answer/10583557",parentName:"li"},"迷惑メール、なりすまし、フィッシングを Gmail 認証で防止する"),(0,f.kt)("a",{href:"#fnref-1",className:"footnote-backref",parentName:"li"},"↩")),(0,f.kt)("li",{id:"fn-2",parentName:"ol"},(0,f.kt)("a",{href:"https://sendgrid.kke.co.jp/blog/?p=5384",parentName:"li"},"Gmail/MicrosoftのDMARC設定が年内に変更されます"),(0,f.kt)("a",{href:"#fnref-2",className:"footnote-backref",parentName:"li"},"↩")))))}k.isMDXComponent=!0,b.default=k},5054:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/note/google_spf_dkim_dmarc",function(){return c(50565)}])},9008:function(a,b,c){a.exports=c(72717)},87462:function(a,b,c){"use strict";function d(){return(d=Object.assign||function(a){for(var b=1;b<arguments.length;b++){var c=arguments[b];for(var d in c)Object.prototype.hasOwnProperty.call(c,d)&&(a[d]=c[d])}return a}).apply(this,arguments)}c.d(b,{Z:function(){return d}})},91:function(a,b,c){"use strict";function d(a,b){if(null==a)return{};var c,d,e=function(a,b){if(null==a)return{};var c,d,e={},f=Object.keys(a);for(d=0;d<f.length;d++)c=f[d],b.indexOf(c)>=0||(e[c]=a[c]);return e}(a,b);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(d=0;d<f.length;d++)c=f[d],b.indexOf(c)>=0||Object.prototype.propertyIsEnumerable.call(a,c)&&(e[c]=a[c])}return e}c.d(b,{Z:function(){return d}})}},function(a){a.O(0,[541,327,774,888,179],function(){return a(a.s=5054)}),_N_E=a.O()}])