"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[2176],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=l(n),m=r,k=u["".concat(c,".").concat(m)]||u[m]||d[m]||o;return n?a.createElement(k,s(s({ref:t},p),{},{components:n})):a.createElement(k,s({ref:t},p))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:r,s[1]=i;for(var l=2;l<o;l++)s[l]=n[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(67294),r=n(86010);const o={tabItem:"tabItem_Ymn6"};function s(e){let{children:t,hidden:n,className:s}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o.tabItem,s),hidden:n},t)}},65488:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(87462),r=n(67294),o=n(86010),s=n(12466),i=n(70989),c=n(72389);const l={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function p(e){let{className:t,block:n,selectedValue:i,selectValue:c,tabValues:p}=e;const u=[],{blockElementScrollPositionUntilNextRender:d}=(0,s.o5)(),m=e=>{const t=e.currentTarget,n=u.indexOf(t),a=p[n].value;a!==i&&(d(t),c(a))},k=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const n=u.indexOf(e.currentTarget)+1;t=u[n]??u[0];break}case"ArrowLeft":{const n=u.indexOf(e.currentTarget)-1;t=u[n]??u[u.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},p.map((e=>{let{value:t,label:n,attributes:s}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>u.push(e),onKeyDown:k,onClick:m},s,{className:(0,o.Z)("tabs__item",l.tabItem,s?.className,{"tabs__item--active":i===t})}),n??t)})))}function u(e){let{lazy:t,children:n,selectedValue:a}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function d(e){const t=(0,i.Y)(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",l.tabList)},r.createElement(p,(0,a.Z)({},e,t)),r.createElement(u,(0,a.Z)({},e,t)))}function m(e){const t=(0,c.Z)();return r.createElement(d,(0,a.Z)({key:String(t)},e))}},70989:(e,t,n)=>{n.d(t,{Y:()=>d});var a=n(67294),r=n(16550),o=n(91980),s=n(67392),i=n(50012);function c(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function l(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??c(n);return function(e){const t=(0,s.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function u(e){let{queryString:t=!1,groupId:n}=e;const s=(0,r.k6)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,o._X)(i),(0,a.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(s.location.search);t.set(i,e),s.replace({...s.location,search:t.toString()})}),[i,s])]}function d(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,o=l(e),[s,c]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[d,m]=u({queryString:n,groupId:r}),[k,h]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,o]=(0,i.Nk)(n);return[r,(0,a.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:r}),f=(()=>{const e=d??k;return p({value:e,tabValues:o})?e:null})();(0,a.useLayoutEffect)((()=>{f&&c(f)}),[f]);return{selectedValue:s,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);c(e),m(e),h(e)}),[m,h,o]),tabValues:o}}},43314:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>k,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var a=n(87462),r=(n(67294),n(3905)),o=n(65488),s=n(85162);const i={sidebar_label:"React",sidebar_position:1,description:"Set up the SDK in your React dapp.",tags:["JavaScript SDK"]},c="Use MetaMask SDK with React",l={unversionedId:"how-to/use-sdk/javascript/react/index",id:"how-to/use-sdk/javascript/react/index",title:"Use MetaMask SDK with React",description:"Set up the SDK in your React dapp.",source:"@site/wallet/how-to/use-sdk/javascript/react/index.md",sourceDirName:"how-to/use-sdk/javascript/react",slug:"/how-to/use-sdk/javascript/react/",permalink:"/746-snaps-env-vars/wallet/how-to/use-sdk/javascript/react/",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/wallet/how-to/use-sdk/javascript/react/index.md",tags:[{label:"JavaScript SDK",permalink:"/746-snaps-env-vars/wallet/tags/java-script-sdk"}],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"React",sidebar_position:1,description:"Set up the SDK in your React dapp.",tags:["JavaScript SDK"]},sidebar:"walletSidebar",previous:{title:"JavaScript",permalink:"/746-snaps-env-vars/wallet/how-to/use-sdk/javascript/"},next:{title:"React UI",permalink:"/746-snaps-env-vars/wallet/how-to/use-sdk/javascript/react/react-ui"}},p={},u=[{value:"Steps",id:"steps",level:2},{value:"1. Install the SDK",id:"1-install-the-sdk",level:3},{value:"2. Import the SDK",id:"2-import-the-sdk",level:3},{value:"3. Wrap your project with MetaMaskProvider",id:"3-wrap-your-project-with-metamaskprovider",level:3},{value:"4. Use the SDK",id:"4-use-the-sdk",level:3},{value:"Example",id:"example",level:2}],d={toc:u},m="wrapper";function k(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"use-metamask-sdk-with-react"},"Use MetaMask SDK with React"),(0,r.kt)("p",null,"Import ",(0,r.kt)("a",{parentName:"p",href:"/746-snaps-env-vars/wallet/concepts/sdk/"},"MetaMask SDK")," into your React dapp to enable your users to\neasily connect to the MetaMask browser extension and MetaMask Mobile.\nThe SDK for React has the ",(0,r.kt)("a",{parentName:"p",href:"/746-snaps-env-vars/wallet/how-to/use-sdk/javascript/#prerequisites"},"same prerequisites")," as for standard JavaScript."),(0,r.kt)("admonition",{title:"React UI",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"This page provides instructions for using the standard ",(0,r.kt)("inlineCode",{parentName:"p"},"@metamask/sdk-react")," package.\nAlternatively, you can use the ",(0,r.kt)("a",{parentName:"p",href:"/746-snaps-env-vars/wallet/how-to/use-sdk/javascript/react/react-ui"},(0,r.kt)("inlineCode",{parentName:"a"},"@metamask/sdk-react-ui"))," package to easily use\n",(0,r.kt)("a",{parentName:"p",href:"https://wagmi.sh/"},"wagmi")," hooks and a pre-styled UI button component for connecting to MetaMask.")),(0,r.kt)("h2",{id:"steps"},"Steps"),(0,r.kt)("h3",{id:"1-install-the-sdk"},"1. Install the SDK"),(0,r.kt)("p",null,"In your project directory, install the SDK using Yarn or npm:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @metamask/sdk-react\n")),(0,r.kt)("p",null,"or"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm i @metamask/sdk-react\n")),(0,r.kt)("h3",{id:"2-import-the-sdk"},"2. Import the SDK"),(0,r.kt)("p",null,"In your project script, add the following to import the SDK:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'import { MetaMaskProvider } from "@metamask/sdk-react";\n')),(0,r.kt)("h3",{id:"3-wrap-your-project-with-metamaskprovider"},"3. Wrap your project with MetaMaskProvider"),(0,r.kt)("p",null,"Wrap your root component in a ",(0,r.kt)("inlineCode",{parentName:"p"},"MetaMaskProvider"),".\nFor example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'import React from "react";\nimport ReactDOM from "react-dom/client";\nimport App from "./App";\nimport { MetaMaskProvider } from "@metamask/sdk-react";\n\nconst root = ReactDOM.createRoot(\n    document.getElementById("root") as HTMLElement\n);\n\nroot.render(\n    <React.StrictMode>\n        <MetaMaskProvider\n            debug={false}\n            sdkOptions={{\n                dappMetadata: {\n                    name: "Example React Dapp",\n                    url: window.location.href,\n                },\n                // Other options\n            }}\n        >\n            <App />\n        </MetaMaskProvider>\n    </React.StrictMode>\n);\n')),(0,r.kt)("p",null,"When initializing ",(0,r.kt)("inlineCode",{parentName:"p"},"MetaMaskProvider"),", set ",(0,r.kt)("inlineCode",{parentName:"p"},"debug")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," to activate debug mode.\nFor the full list of options you can set for ",(0,r.kt)("inlineCode",{parentName:"p"},"sdkOptions"),", see the\n",(0,r.kt)("a",{parentName:"p",href:"/746-snaps-env-vars/wallet/reference/sdk-js-options"},"JavaScript SDK options reference"),"."),(0,r.kt)("admonition",{title:"Important SDK options",type:"note"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"Use ",(0,r.kt)("a",{parentName:"li",href:"/746-snaps-env-vars/wallet/reference/sdk-js-options#dappmetadata"},(0,r.kt)("inlineCode",{parentName:"a"},"dappMetadata"))," to display information\nabout your dapp in the MetaMask connection modal."),(0,r.kt)("li",{parentName:"ul"},"Use ",(0,r.kt)("a",{parentName:"li",href:"/746-snaps-env-vars/wallet/reference/sdk-js-options#modals"},(0,r.kt)("inlineCode",{parentName:"a"},"modals"))," to ",(0,r.kt)("a",{parentName:"li",href:"/746-snaps-env-vars/wallet/how-to/display/custom-modals"},"customize the logic and UI of\nthe displayed modals"),"."),(0,r.kt)("li",{parentName:"ul"},"Use ",(0,r.kt)("a",{parentName:"li",href:"/746-snaps-env-vars/wallet/reference/sdk-js-options#infuraapikey"},(0,r.kt)("inlineCode",{parentName:"a"},"infuraAPIKey"))," to\n",(0,r.kt)("a",{parentName:"li",href:"/746-snaps-env-vars/wallet/how-to/make-read-only-requests"},"make read-only RPC requests")," from your dapp."))),(0,r.kt)("h3",{id:"4-use-the-sdk"},"4. Use the SDK"),(0,r.kt)("p",null,"Use the SDK by using the ",(0,r.kt)("inlineCode",{parentName:"p"},"useSDK")," hook in your React components.\nFor example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'import { useSDK } from "@metamask/sdk-react";\nimport React, { useState } from "react";\n\nexport const App = () => {\n    const [account, setAccount] = useState<string>();\n    const { sdk, connected, connecting, provider, chainId } = useSDK();\n\n    const connect = async () => {\n        try {\n            const accounts = await sdk?.connect();\n            setAccount(accounts?.[0]);\n        } catch (err) {\n            console.warn("failed to connect..", err);\n        }\n    };\n\n    return (\n        <div className="App">\n            <button style={{ padding: 10, margin: 10 }} onClick={connect}>\n                Connect\n            </button>\n            {connected && (\n                <div>\n                    <>\n                        {chainId && `Connected chain: ${chainId}`}\n                        <p></p>\n                        {account && `Connected account: ${account}`}\n                    </>\n                </div>\n            )}\n        </div>\n    );\n};\n')),(0,r.kt)("details",null,(0,r.kt)("summary",null,"useSDK return values"),(0,r.kt)("p",null,(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"sdk"),": Main SDK object that facilitates connection and actions related to MetaMask."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"connected"),": Boolean value indicating if the dapp is connected to MetaMask."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"connecting"),": Boolean value indicating if a connection is in process."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"provider"),": The provider object which can be used for lower-level interactions with the Ethereum blockchain."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"chainId"),": Currently connected blockchain's chain ID.")))),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"sdk.connect()")," method initiates a connection to MetaMask and returns an array of connected accounts:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const connect = async () => {\n    try {\n        const accounts = await sdk?.connect();\n        setAccount(accounts?.[0]);\n    } catch (err) {\n        console.warn(`failed to connect..`, err);\n    }\n};\n")),(0,r.kt)("p",null,"You can also ",(0,r.kt)("a",{parentName:"p",href:"/746-snaps-env-vars/wallet/how-to/sign-data/connect-and-sign"},"use the ",(0,r.kt)("inlineCode",{parentName:"a"},"connectAndSign")," method")," to\nconnect to MetaMask and sign data in a single interaction."),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("p",null,"You can copy the full React example to get started:"),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"Root component",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="index.tsx"',title:'"index.tsx"'},'import React from "react";\nimport ReactDOM from "react-dom/client";\nimport App from "./App";\nimport { MetaMaskProvider } from "@metamask/sdk-react";\n\nconst root = ReactDOM.createRoot(\n    document.getElementById("root") as HTMLElement\n);\n\nroot.render(\n    <React.StrictMode>\n        <MetaMaskProvider\n            debug={false}\n            sdkOptions={{\n                dappMetadata: {\n                    name: "Example React Dapp",\n                    url: window.location.href,\n                },\n                // Other options\n            }}\n        >\n            <App />\n        </MetaMaskProvider>\n    </React.StrictMode>\n);\n'))),(0,r.kt)(s.Z,{value:"React component",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="App.tsx"',title:'"App.tsx"'},'import { useSDK } from "@metamask/sdk-react";\nimport React from "react";\n\nexport const App = () => {\n    const [account, setAccount] = useState<string>();\n    const { sdk, connected, connecting, provider, chainId } = useSDK();\n\n    const connect = async () => {\n        try {\n            const accounts = await sdk?.connect();\n            setAccount(accounts?.[0]);\n        } catch (err) {\n            console.warn("failed to connect..", err);\n        }\n    };\n\n    return (\n        <div className="App">\n            <button style={{ padding: 10, margin: 10 }} onClick={connect}>\n                Connect\n            </button>\n            {connected && (\n                <div>\n                    <>\n                        {chainId && "Connected chain: ${chainId}"}\n                        <p></p>\n                        {account && "Connected account: ${account}"}\n                    </>\n                </div>\n            )}\n        </div>\n    );\n};\n')))),(0,r.kt)("p",null,"See the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/MetaMask/metamask-sdk/tree/main/packages/examples/create-react-app"},"example React dapp"),"\nin the JavaScript SDK GitHub repository for more information."))}k.isMDXComponent=!0}}]);