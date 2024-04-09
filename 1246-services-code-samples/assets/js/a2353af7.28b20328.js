"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[2797],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),l=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=l(n),u=r,k=m["".concat(p,".").concat(u)]||m[u]||d[u]||o;return n?a.createElement(k,s(s({ref:t},c),{},{components:n})):a.createElement(k,s({ref:t},c))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[m]="string"==typeof e?e:r,s[1]=i;for(var l=2;l<o;l++)s[l]=n[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},67032:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var a=n(87462),r=(n(67294),n(3905));const o={description:"Manage users' non-EVM accounts and assets.",sidebar_position:3},s="Non-EVM networks",i={unversionedId:"features/non-evm-networks",id:"features/non-evm-networks",title:"Non-EVM networks",description:"Manage users' non-EVM accounts and assets.",source:"@site/snaps/features/non-evm-networks.md",sourceDirName:"features",slug:"/features/non-evm-networks",permalink:"/1246-services-code-samples/snaps/features/non-evm-networks",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/snaps/features/non-evm-networks.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{description:"Manage users' non-EVM accounts and assets.",sidebar_position:3},sidebar:"snapsSidebar",previous:{title:"Localization",permalink:"/1246-services-code-samples/snaps/features/localization"},next:{title:"Custom EVM accounts",permalink:"/1246-services-code-samples/snaps/features/custom-evm-accounts/"}},p={},l=[{value:"Responsible key management",id:"responsible-key-management",level:2},{value:"Derive keys",id:"derive-keys",level:2},{value:"Dogecoin example",id:"dogecoin-example",level:3},{value:"Examples",id:"examples",level:2}],c={toc:l},m="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"non-evm-networks"},"Non-EVM networks"),(0,r.kt)("p",null,"You can manage users' non-EVM accounts and assets with their approval, using\n",(0,r.kt)("a",{parentName:"p",href:"/1246-services-code-samples/snaps/reference/snaps-api"},"Snaps API")," methods."),(0,r.kt)("admonition",{title:"important",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Managing users' keys comes with great responsibility: Misplaced or stolen\nprivate keys can lead to a complete loss of funds for users of your Snap.")),(0,r.kt)("h2",{id:"responsible-key-management"},"Responsible key management"),(0,r.kt)("p",null,"It's critical to practice responsible key management.\nThe general rule is: ",(0,r.kt)("strong",{parentName:"p"},"Don't create a situation where your users can lose assets.")),(0,r.kt)("admonition",{title:"examples of responsible key management:",type:"tip"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"Deriving private keys and/or storing them in Snaps persistent storage, without ever moving them\nout of the ",(0,r.kt)("a",{parentName:"li",href:"/1246-services-code-samples/snaps/learn/about-snaps/execution-environment"},"Snaps execution environment"),"."),(0,r.kt)("li",{parentName:"ul"},"Ensuring arbitrary code execution can't access irreversible operations or private keys."),(0,r.kt)("li",{parentName:"ul"},"Asking the user for consent and informing them of what's going to happen before performing\nirreversible operations."))),(0,r.kt)("admonition",{title:"examples of irresponsible key management:",type:"danger"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"Allowing extraction of private keys outside the Snap in any way, especially through RPC or\nnetwork connections."),(0,r.kt)("li",{parentName:"ul"},"Executing arbitrary or untrusted code with access to private keys."),(0,r.kt)("li",{parentName:"ul"},"Not getting properly informed consent before performing irreversible operations."),(0,r.kt)("li",{parentName:"ul"},"Asking for consent but ignoring the decision."),(0,r.kt)("li",{parentName:"ul"},"Exposing key material in clear-text."),(0,r.kt)("li",{parentName:"ul"},"Producing a bug that leads to any of the above."))),(0,r.kt)("h2",{id:"derive-keys"},"Derive keys"),(0,r.kt)("p",null,"To derive a user's private keys:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Choose between the BIP-32 or BIP-44 specifications to derive the user's private keys.\nIf the keys you want to derive conform to the\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/bitcoin/bips/blob/master/bip-0044.mediawiki"},"BIP-44")," structure, use\n",(0,r.kt)("a",{parentName:"li",href:"/1246-services-code-samples/snaps/reference/snaps-api#snap_getbip44entropy"},(0,r.kt)("inlineCode",{parentName:"a"},"snap_getBip44Entropy"))," to derive them.\nOtherwise, use ",(0,r.kt)("a",{parentName:"li",href:"/1246-services-code-samples/snaps/reference/snaps-api#snap_getbip32entropy"},(0,r.kt)("inlineCode",{parentName:"a"},"snap_getBip32Entropy")),"."),(0,r.kt)("li",{parentName:"ol"},"Add the required permission to your manifest file."),(0,r.kt)("li",{parentName:"ol"},"Find out the derivation path to use.\nThis is dependent on the application you're building."),(0,r.kt)("li",{parentName:"ol"},"Use the ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/MetaMask/key-tree"},(0,r.kt)("inlineCode",{parentName:"a"},"@metamask/key-tree"))," module to derive the keys.\nAny additional code, for example, to derive addresses from keys, is application-specific.")),(0,r.kt)("h3",{id:"dogecoin-example"},"Dogecoin example"),(0,r.kt)("p",null,"For example, to derive Dogecoin keys:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Dogecoin uses the BIP-44 scheme, so you'll use\n",(0,r.kt)("a",{parentName:"p",href:"/1246-services-code-samples/snaps/reference/snaps-api#snap_getbip44entropy"},(0,r.kt)("inlineCode",{parentName:"a"},"snap_getBip44Entropy")),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Dogecoin has coin type ",(0,r.kt)("inlineCode",{parentName:"p"},"3"),", so add the following to the manifest file:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="snap.manifest.json"',title:'"snap.manifest.json"'},'{\n    "initialPermissions": {\n        "snap_getBip44Entropy": [\n            {\n                "coinType": 3\n            }\n        ]\n    }\n}\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Dogecoin uses the following derivation path:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"m/44'/3'/0'/0/{address_index}\n")),(0,r.kt)("p",{parentName:"li"},"To get the second Dogecoin account, add the following code to your Snap:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="index.js"',title:'"index.js"'},"import { getBIP44AddressKeyDeriver } from \"@metamask/key-tree\";\n\n// Get the Dogecoin node, corresponding to the path m/44'/3'.\nconst dogecoinNode = await snap.request({\n    method: \"snap_getBip44Entropy\",\n    params: {\n        coinType: 3,\n    },\n});\n\n/**\n * Create a function that takes an index and returns an extended private key for m/44'/3'/0'/0/address_index.\n * The second parameter to getBIP44AddressKeyDeriver isn't passed. This sets account and changes to 0.\n */\nconst deriveDogecoinAddress = await getBIP44AddressKeyDeriver(dogecoinNode);\n\n// Derive the second Dogecoin address, which has index 1.\nconst secondAccount = deriveDogecoinAddress(1);\n")))),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("p",null,"The following are examples of existing Snaps that manage accounts and keys:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/ziad-saab/dogecoin-snap"},"Dogecoin Snap tutorial")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/Consensys/starknet-snap"},"Consensys StarkNet Snap")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/snapdao/btcsnap"},"Account Labs Bitcoin Snap"))))}d.isMDXComponent=!0}}]);