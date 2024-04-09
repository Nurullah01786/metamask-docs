"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[2250],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>d});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=r.createContext({}),p=function(e){var n=r.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},m=function(e){var n=p(e.components);return r.createElement(o.Provider,{value:n},e.children)},u="mdxType",l={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,s=e.originalType,o=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),u=p(t),f=a,d=u["".concat(o,".").concat(f)]||u[f]||l[f]||s;return t?r.createElement(d,i(i({ref:n},m),{},{components:t})):r.createElement(d,i({ref:n},m))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var s=t.length,i=new Array(s);i[0]=f;var c={};for(var o in n)hasOwnProperty.call(n,o)&&(c[o]=n[o]);c.originalType=e,c[u]="string"==typeof e?e:a,i[1]=c;for(var p=2;p<s;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},32029:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>l,frontMatter:()=>s,metadata:()=>c,toc:()=>p});var r=t(87462),a=(t(67294),t(3905));const s={description:"See the Keyring API reference.",sidebar_position:6,tags:["Keyring API"]},i="Keyring API",c={unversionedId:"reference/keyring-api/index",id:"reference/keyring-api/index",title:"Keyring API",description:"See the Keyring API reference.",source:"@site/snaps/reference/keyring-api/index.md",sourceDirName:"reference/keyring-api",slug:"/reference/keyring-api/",permalink:"/1246-services-code-samples/snaps/reference/keyring-api/",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/snaps/reference/keyring-api/index.md",tags:[{label:"Keyring API",permalink:"/1246-services-code-samples/snaps/tags/keyring-api"}],version:"current",sidebarPosition:6,frontMatter:{description:"See the Keyring API reference.",sidebar_position:6,tags:["Keyring API"]},sidebar:"snapsSidebar",previous:{title:"Snaps known errors",permalink:"/1246-services-code-samples/snaps/reference/known-errors"},next:{title:"Account Management API",permalink:"/1246-services-code-samples/snaps/reference/keyring-api/account-management/"}},o={},p=[],m={toc:p},u="wrapper";function l(e){let{components:n,...t}=e;return(0,a.kt)(u,(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"keyring-api"},"Keyring API"),(0,a.kt)("p",null,"This section provides a detailed reference on the Keyring API methods, objects, and events that\nenable ",(0,a.kt)("a",{parentName:"p",href:"/1246-services-code-samples/snaps/features/custom-evm-accounts/"},"custom EVM accounts"),".\nThe Keyring API consists of:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/1246-services-code-samples/snaps/reference/keyring-api/account-management/"},(0,a.kt)("strong",{parentName:"a"},"Account Management API"))," \u2013 An API for dapps to communicate with\naccount management Snaps.\nDapps can manage accounts and signature requests using this API."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/1246-services-code-samples/snaps/reference/keyring-api/chain-methods"},(0,a.kt)("strong",{parentName:"a"},"Chain Methods API"))," - An API that contains chain-specific EVM methods that\naccount management Snaps can choose to implement to support dapp requests from custom accounts.")),(0,a.kt)("admonition",{title:"See also",type:"tip"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/1246-services-code-samples/snaps/features/custom-evm-accounts/create-account-snap"},"Create an account management Snap"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/1246-services-code-samples/snaps/features/custom-evm-accounts/security"},"Account management Snap security guidelines")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/1246-services-code-samples/snaps/features/custom-evm-accounts/create-companion-dapp"},"Create an account management companion dapp")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/1246-services-code-samples/snaps/features/custom-evm-accounts/"},"Custom EVM accounts")))))}l.isMDXComponent=!0}}]);