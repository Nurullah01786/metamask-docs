"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[6343],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),l=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=l(n),u=r,k=m["".concat(p,".").concat(u)]||m[u]||d[u]||o;return n?a.createElement(k,i(i({ref:t},c),{},{components:n})):a.createElement(k,i({ref:t},c))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[m]="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},58077:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var a=n(87462),r=(n(67294),n(3905));const o={description:"Follow these security guidelines when creating an account management Snap.",sidebar_label:"Security guidelines",sidebar_position:3,tags:["Keyring API"]},i="Account management Snap security guidelines",s={unversionedId:"features/custom-evm-accounts/security",id:"features/custom-evm-accounts/security",title:"Account management Snap security guidelines",description:"Follow these security guidelines when creating an account management Snap.",source:"@site/snaps/features/custom-evm-accounts/security.md",sourceDirName:"features/custom-evm-accounts",slug:"/features/custom-evm-accounts/security",permalink:"/746-snaps-env-vars/snaps/features/custom-evm-accounts/security",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/snaps/features/custom-evm-accounts/security.md",tags:[{label:"Keyring API",permalink:"/746-snaps-env-vars/snaps/tags/keyring-api"}],version:"current",sidebarPosition:3,frontMatter:{description:"Follow these security guidelines when creating an account management Snap.",sidebar_label:"Security guidelines",sidebar_position:3,tags:["Keyring API"]},sidebar:"snapsSidebar",previous:{title:"Create a companion dapp",permalink:"/746-snaps-env-vars/snaps/features/custom-evm-accounts/create-companion-dapp"},next:{title:"Static files",permalink:"/746-snaps-env-vars/snaps/features/static-files"}},p={},l=[{value:"Do not add secret information to account objects",id:"do-not-add-secret-information-to-account-objects",level:2},{value:"Limit the methods exposed to dapps",id:"limit-the-methods-exposed-to-dapps",level:2},{value:"Ensure the redirect URL cannot be manipulated",id:"ensure-the-redirect-url-cannot-be-manipulated",level:2},{value:"Remove all debug code from your production Snap",id:"remove-all-debug-code-from-your-production-snap",level:2},{value:"Remove sensitive information from errors",id:"remove-sensitive-information-from-errors",level:2},{value:"Expose Keyring API methods using the onKeyringRequest entry point",id:"expose-keyring-api-methods-using-the-onkeyringrequest-entry-point",level:2},{value:"Do not fetch remote code from inside your Snap",id:"do-not-fetch-remote-code-from-inside-your-snap",level:2}],c={toc:l},m="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"account-management-snap-security-guidelines"},"Account management Snap security guidelines"),(0,r.kt)("p",null,"Refer to the following security guidelines when ",(0,r.kt)("a",{parentName:"p",href:"/746-snaps-env-vars/snaps/features/custom-evm-accounts/create-account-snap"},"creating an account management Snap"),"."),(0,r.kt)("admonition",{type:"flaskOnly"}),(0,r.kt)("admonition",{title:"see also",type:"tip"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/746-snaps-env-vars/snaps/features/custom-evm-accounts/"},"About custom EVM accounts")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/746-snaps-env-vars/snaps/features/custom-evm-accounts/create-account-snap"},"Create an account management Snap")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/746-snaps-env-vars/snaps/features/custom-evm-accounts/create-companion-dapp"},"Create an account management companion dapp")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/746-snaps-env-vars/snaps/reference/keyring-api/"},"Keyring API reference")))),(0,r.kt)("h2",{id:"do-not-add-secret-information-to-account-objects"},"Do not add secret information to account objects"),(0,r.kt)("p",null,"Ensure that you do not store any secret information in account objects\n(",(0,r.kt)("a",{parentName:"p",href:"/746-snaps-env-vars/snaps/reference/keyring-api/type-aliases/KeyringAccount"},(0,r.kt)("inlineCode",{parentName:"a"},"KeyringAccount"))," instances), since\nthey are exposed to dapps and MetaMask.\nFor example:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u274c ",(0,r.kt)("strong",{parentName:"p"},"Do NOT do this:")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const account: KeyringAccount = {\n  id: uuid(),\n  options: {\n    privateKey: '0x01234...78', // !!! DO NOT DO THIS !!!\n  },\n  address,\n  methods: [\n    EthMethod.PersonalSign,\n    EthMethod.Sign,\n    EthMethod.SignTransaction,\n    EthMethod.SignTypedDataV1,\n    EthMethod.SignTypedDataV3,\n    EthMethod.SignTypedDataV4,\n  ],\n  type: EthAccountType.Eoa,\n};\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u2705 ",(0,r.kt)("strong",{parentName:"p"},"Do this instead:")),(0,r.kt)("p",{parentName:"li"},"  ",(0,r.kt)("em",{parentName:"p"},"Store any secret information that you need in the Snap's state:")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"await snap.request({\n  method: 'snap_manageState',\n  params: {\n    operation: 'update',\n    newState: {\n      // Your Snap's state here...\n      privateKey: '0x01234...78',\n    },\n  },\n});\n")))),(0,r.kt)("h2",{id:"limit-the-methods-exposed-to-dapps"},"Limit the methods exposed to dapps"),(0,r.kt)("p",null,"By default, MetaMask enforces the following restrictions on calling Keyring API methods on your Snap\nbased on the caller origin:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Method"),(0,r.kt)("th",{parentName:"tr",align:"center"},"MetaMask origin"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Dapp origin"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"keyring_listAccounts")),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"keyring_getAccount")),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"keyring_createAccount")),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"keyring_filterAccountChains")),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"keyring_updateAccount")),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"keyring_deleteAccount")),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"keyring_exportAccount")),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"keyring_listRequests")),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"keyring_getRequest")),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"keyring_submitRequest")),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u274c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"keyring_approveRequest")),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"keyring_rejectRequest")),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705")))),(0,r.kt)("p",null,"For example, a dapp is not allowed to call the ",(0,r.kt)("inlineCode",{parentName:"p"},"keyring_submitRequest")," method of your Snap, and\nMetaMask is not allowed to call the ",(0,r.kt)("inlineCode",{parentName:"p"},"keyring_createAccount")," method of your Snap."),(0,r.kt)("p",null,"MetaMask also enforces that only dapps allowlisted in the Snap's manifest file using the\n",(0,r.kt)("a",{parentName:"p",href:"/746-snaps-env-vars/snaps/reference/permissions#endowmentkeyring"},(0,r.kt)("inlineCode",{parentName:"a"},"endowment:keyring"))," permission can call these methods."),(0,r.kt)("admonition",{title:"important",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"We recommend further restricting the methods exposed to dapps according to your Snap's functionality.\nFor example, if your Snap does not support account deletion via dapps, your Snap should reject\ncalls to the ",(0,r.kt)("inlineCode",{parentName:"p"},"keyring_deleteAccount")," method originating from dapps.")),(0,r.kt)("p",null,"Your Snap can also impose varying restrictions depending on the calling dapp.\nFor example, Dapp 1 may have access to a different set of methods than Dapp 2.\nThe following is an example of implementing such logic:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const permissions: Record<string, string[]> = {\n  'https://<Dapp 1 domain>': [\n    // List of allowed methods for Dapp 1.\n  ],\n  'https://<Dapp 2 domain>': [\n    // List of allowed methods for Dapp 2.\n  ],\n};\n\nif (origin !== 'metamask' && !permissions[origin]?.includes(request.method)) {\n  // Reject the request.\n}\n")),(0,r.kt)("p",null,"Both dapps must be allowlisted in the Snap's manifest file."),(0,r.kt)("h2",{id:"ensure-the-redirect-url-cannot-be-manipulated"},"Ensure the redirect URL cannot be manipulated"),(0,r.kt)("p",null,"If your Snap implements an ",(0,r.kt)("a",{parentName:"p",href:"/746-snaps-env-vars/snaps/features/custom-evm-accounts/#asynchronous-transaction-flow"},"asynchronous transaction flow"),",\nensure that the redirect URL is valid and cannot be manipulated, otherwise the user can be\nredirected to a malicious website."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"async submitRequest(request: KeyringRequest): Promise<SubmitRequestResponse> {\n  // Your Snap's custom logic...\n  return {\n    pending: true,\n    redirect: {\n      message: 'Please continue in the dapp.',\n      url: 'https://<dapp domain>/sign?tx=1234', // !!! ENSURE THIS IS A SAFE URL !!!\n    },\n  };\n}\n")),(0,r.kt)("admonition",{title:"important",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Only HTTPS URLs are allowed in the ",(0,r.kt)("inlineCode",{parentName:"p"},"url")," field, and the provided URL is checked against a\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/MetaMask/eth-phishing-detect"},"list of blocked domains"),".\nHowever, for development purposes, HTTP URLs are allowed on Flask.\nMetaMask also requires the redirect URL to be within a site allowlisted in the Snap's manifest file.")),(0,r.kt)("h2",{id:"remove-all-debug-code-from-your-production-snap"},"Remove all debug code from your production Snap"),(0,r.kt)("p",null,"Ensure that all debug code is removed from your production Snap.\nExposing debug code can lead to multiple security vulnerabilities.\nFor example, secret information can be logged to the console, or a malicious dapp can bypass a\nsecurity check."),(0,r.kt)("h2",{id:"remove-sensitive-information-from-errors"},"Remove sensitive information from errors"),(0,r.kt)("p",null,"Ensure that all error messages returned by your Snap are sanitized.\nFailing to sanitize error messages can lead to exposing secrets or other sensitive information to\ndapps or to MetaMask."),(0,r.kt)("p",null,"For example:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u274c ",(0,r.kt)("strong",{parentName:"p"},"Do NOT do this:")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"// If `inputSecretValue` contains invalid hexadecimal characters, its value\n// will be added to the error thrown by `toBuffer`.\nconst privateKey = toBuffer(inputSecretValue);\n// Use `privateKey` here...\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u2705 ",(0,r.kt)("strong",{parentName:"p"},"Do this instead:")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"try {\n  const privateKey = toBuffer(inputSecretValue);\n  // Use `privateKey` here...\n} catch (error) {\n  throw new Error('Invalid private key');\n}\n")))),(0,r.kt)("h2",{id:"expose-keyring-api-methods-using-the-onkeyringrequest-entry-point"},"Expose Keyring API methods using the onKeyringRequest entry point"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"/746-snaps-env-vars/snaps/reference/entry-points#onrpcrequest"},(0,r.kt)("inlineCode",{parentName:"a"},"onRpcRequest"))," entry point is a general-purpose\nentry point and has no restrictions on the methods that can be called.\nEnsure that you only expose Keyring API methods using the ",(0,r.kt)("inlineCode",{parentName:"p"},"onKeyringRequest")," entry point, which has\nextra security checks."),(0,r.kt)("p",null,"For example:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u274c ",(0,r.kt)("strong",{parentName:"p"},"Do NOT do this:")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"export const onRpcRequest: OnRpcRequestHandler = async ({\n  //           ~~~           ~~~\n  origin,\n  request,\n}) => {\n  return handleKeyringRequest(keyring, request);\n};\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u2705 ",(0,r.kt)("strong",{parentName:"p"},"Do this instead:")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"export const onKeyringRequest: OnKeyringRequestHandler = async ({\n  //           ~~~~~~~           ~~~~~~~\n  origin,\n  request,\n}) => {\n  // Any custom logic or extra security checks here...\n  return handleKeyringRequest(keyring, request);\n};\n")))),(0,r.kt)("h2",{id:"do-not-fetch-remote-code-from-inside-your-snap"},"Do not fetch remote code from inside your Snap"),(0,r.kt)("p",null,"Ensure that your Snap is self-contained and does not fetch code from external sources.\nOtherwise, a compromised server can use this mechanism to inject malicious code into your Snap."))}d.isMDXComponent=!0}}]);