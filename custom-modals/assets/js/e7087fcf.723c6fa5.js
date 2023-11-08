"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[3647],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=s(n),d=r,f=u["".concat(l,".").concat(d)]||u[d]||m[d]||o;return n?a.createElement(f,c(c({ref:t},p),{},{components:n})):a.createElement(f,c({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:r,c[1]=i;for(var s=2;s<o;s++)c[s]=n[s];return a.createElement.apply(null,c)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},29137:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const o={sidebar_position:1},c="Contract interface",i={unversionedId:"how-to/interact-with-smart-contracts/unity/contract-interface",id:"how-to/interact-with-smart-contracts/unity/contract-interface",title:"Contract interface",description:"When interacting with smart contracts in Unity, the IContract interface defines an",source:"@site/wallet/how-to/interact-with-smart-contracts/unity/contract-interface.md",sourceDirName:"how-to/interact-with-smart-contracts/unity",slug:"/how-to/interact-with-smart-contracts/unity/contract-interface",permalink:"/custom-modals/wallet/how-to/interact-with-smart-contracts/unity/contract-interface",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/wallet/how-to/interact-with-smart-contracts/unity/contract-interface.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"walletSidebar",previous:{title:"Interact with smart contracts in Unity",permalink:"/custom-modals/wallet/how-to/interact-with-smart-contracts/unity/"},next:{title:"Contract factory",permalink:"/custom-modals/wallet/how-to/interact-with-smart-contracts/unity/contract-factory"}},l={},s=[{value:"Declare contract functions",id:"declare-contract-functions",level:2},{value:"Use the Task return type",id:"use-the-task-return-type",level:3},{value:"Define a contract constructor",id:"define-a-contract-constructor",level:3}],p={toc:s},u="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"contract-interface"},"Contract interface"),(0,r.kt)("p",null,"When ",(0,r.kt)("a",{parentName:"p",href:"/custom-modals/wallet/"},"interacting with smart contracts in Unity"),", the ",(0,r.kt)("inlineCode",{parentName:"p"},"IContract")," interface defines an\ninterface of a given contract.\nThis interface includes all the functions of the contract, and an optional constructor function and\n",(0,r.kt)("inlineCode",{parentName:"p"},"Bytecode")," field."),(0,r.kt)("p",null,"You can use the ",(0,r.kt)("a",{parentName:"p",href:"/custom-modals/wallet/#generate-contract-code"},"contract code generator")," to generate a contract\ninterface given a contract ABI or Hardhat artifact JSON file."),(0,r.kt)("p",null,"To manually create a new contract interface, define a new interface that inherits from ",(0,r.kt)("inlineCode",{parentName:"p"},"IContract"),".\nOptionally, declare the ",(0,r.kt)("a",{parentName:"p",href:"/custom-modals/wallet/how-to/interact-with-smart-contracts/unity/contract-factory#backed-type-contract-factory"},(0,r.kt)("inlineCode",{parentName:"a"},"BackedType")," attribute"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"#if UNITY_EDITOR || !ENABLE_MONO  \n[BackedType(typeof(ERC20Backing))]  \n#endif  \npublic interface ERC20 : IContract  \n{\n    // TODO Declare functions\n}\n")),(0,r.kt)("h2",{id:"declare-contract-functions"},"Declare contract functions"),(0,r.kt)("p",null,"To declare a ",(0,r.kt)("inlineCode",{parentName:"p"},"view")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"pure")," function of the contract, first set the return type, the function name\n(may differ from the actual name), and all parameters the function takes in a Task:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"#if UNITY_EDITOR || !ENABLE_MONO  \n[BackedType(typeof(ERC20Backing))]  \n#endif  \npublic interface ERC20 : IContract  \n{\n    Task<BigInteger> BalanceOf(EvmAddress account);\n}\n")),(0,r.kt)("p",null,"Once you have the function written, simply add the ",(0,r.kt)("inlineCode",{parentName:"p"},"EvmMethodInfo")," at the top of the function to\ndeclare the metadata about the contract function.\nThis includes the ",(0,r.kt)("inlineCode",{parentName:"p"},"Name")," and whether it's a ",(0,r.kt)("inlineCode",{parentName:"p"},"View")," function:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'#if UNITY_EDITOR || !ENABLE_MONO  \n[BackedType(typeof(ERC20Backing))]  \n#endif  \npublic interface ERC20 : IContract  \n{\n    [EvmMethodInfo(Name = "balanceOf", View = true)]\n    Task<BigInteger> BalanceOf(EvmAddress account);\n}\n')),(0,r.kt)("p",null,"To define the EVM type for a parameter, you can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"EvmParameterInfo")," attribute.\nHowever, this usually isn't needed, because the ",(0,r.kt)("inlineCode",{parentName:"p"},"Contract")," class automatically infers most common\ntypes, such as ",(0,r.kt)("inlineCode",{parentName:"p"},"EvmAddress")," to be ",(0,r.kt)("inlineCode",{parentName:"p"},"address")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"string")," to be ",(0,r.kt)("inlineCode",{parentName:"p"},"string"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'#if UNITY_EDITOR || !ENABLE_MONO  \n[BackedType(typeof(ERC20Backing))]  \n#endif  \npublic interface ERC20 : IContract  \n{\n    [EvmMethodInfo(Name = "balanceOf", View = true)]\n    Task<BigInteger> BalanceOf([EvmParameterInfo(Type = "address")] string account);\n}\n')),(0,r.kt)("p",null,"To define the EVM return type for the function, you can use ",(0,r.kt)("inlineCode",{parentName:"p"},"EvmParamterInfo")," on the return type:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'#if UNITY_EDITOR || !ENABLE_MONO  \n[BackedType(typeof(ERC20Backing))]  \n#endif  \npublic interface ERC20 : IContract  \n{\n    [EvmMethodInfo(Name = "balanceOf", View = true)]\n    Task<BigInteger> BalanceOf(EvmAddress account);\n    \n    [EvmMethodInfo(Name = "decimals", View = true)]  \n    [return: EvmParameterInfo(Type = "uint8")]  \n    Task<BigInteger> Decimals();\n}\n')),(0,r.kt)("h3",{id:"use-the-task-return-type"},"Use the Task return type"),(0,r.kt)("p",null,"We recommend always using ",(0,r.kt)("inlineCode",{parentName:"p"},"Task")," as the return type when declaring contract functions, even if\nthe given ",(0,r.kt)("a",{parentName:"p",href:"/custom-modals/wallet/how-to/interact-with-smart-contracts/unity/contract-provider"},"provider")," does not use ",(0,r.kt)("inlineCode",{parentName:"p"},"Task"),".\nWhen you don't use ",(0,r.kt)("inlineCode",{parentName:"p"},"Task"),", the ",(0,r.kt)("inlineCode",{parentName:"p"},"Contract")," class is blocked until a response from the given\n",(0,r.kt)("inlineCode",{parentName:"p"},"Provider")," is received.\nThis means if the ",(0,r.kt)("inlineCode",{parentName:"p"},"Provider")," returns a Task of the request, the ",(0,r.kt)("inlineCode",{parentName:"p"},"Contract")," class is blocked until\nthat Task completes, which may lead to a deadlock."),(0,r.kt)("h3",{id:"define-a-contract-constructor"},"Define a contract constructor"),(0,r.kt)("p",null,"To define a constructor function, use the ",(0,r.kt)("inlineCode",{parentName:"p"},"EvmConstructorMethod")," attribute at the top of the\nfunction declaring the constructor.\nThe return type of the function must be the type of the interface, since a new instance of the\ninterface is returned by the ",(0,r.kt)("inlineCode",{parentName:"p"},"Contract")," class."),(0,r.kt)("p",null,"Also, do one of the following:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Declare a ",(0,r.kt)("inlineCode",{parentName:"p"},"static readonly string Bytecode")," in the interface that has the bytecode."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'#if UNITY_EDITOR || !ENABLE_MONO  \n[BackedType(typeof(ERC20Backing))]  \n#endif  \npublic interface ERC20 : IContract  \n{\n    public static readonly string Bytecode = "0x6080604052348015620000115760008....";  \n      \n    [EvmConstructorMethod]  \n    Task<ERC20> DeployNew(String name_, String symbol_);\n\n    [EvmMethodInfo(Name = "balanceOf", View = true)]\n    Task<BigInteger> BalanceOf(EvmAddress account);\n    \n    [EvmMethodInfo(Name = "decimals", View = true)]  \n    [return: EvmParameterInfo(Type = "uint8")]  \n    Task<BigInteger> Decimals();\n}\n'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Set the ",(0,r.kt)("inlineCode",{parentName:"p"},"Bytecode")," field in the ",(0,r.kt)("inlineCode",{parentName:"p"},"EvmConstructorMethod")," attribute."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'#if UNITY_EDITOR || !ENABLE_MONO  \n[BackedType(typeof(ERC20Backing))]  \n#endif  \npublic interface ERC20 : IContract  \n{\n    [EvmConstructorMethod(Bytecode = "0x608060405238....")]  \n    Task<ERC20> DeployNew(String name_, String symbol_);\n\n    [EvmMethodInfo(Name = "balanceOf", View = true)]\n    Task<BigInteger> BalanceOf(EvmAddress account);\n    \n    [EvmMethodInfo(Name = "decimals", View = true)]  \n    [return: EvmParameterInfo(Type = "uint8")]  \n    Task<BigInteger> Decimals();\n}\n')))),(0,r.kt)("p",null,"By default, the ",(0,r.kt)("a",{parentName:"p",href:"/custom-modals/wallet/#generate-contract-code"},"contract code generator")," uses the second option."))}m.isMDXComponent=!0}}]);