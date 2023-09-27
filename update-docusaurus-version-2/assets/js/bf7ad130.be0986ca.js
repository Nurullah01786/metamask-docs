"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[8358],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),d=p(n),m=i,h=d["".concat(l,".").concat(m)]||d[m]||c[m]||o;return n?a.createElement(h,s(s({ref:t},u),{},{components:n})):a.createElement(h,s({ref:t},u))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,s=new Array(o);s[0]=m;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r[d]="string"==typeof e?e:i,s[1]=r;for(var p=2;p<o;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},24320:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>o,metadata:()=>r,toc:()=>p});var a=n(87462),i=(n(67294),n(3905));const o={description:"Learn about best practices for creating snap installation flows.",sidebar_position:5},s="Snaps design guidelines",r={unversionedId:"concepts/design-guidelines",id:"concepts/design-guidelines",title:"Snaps design guidelines",description:"Learn about best practices for creating snap installation flows.",source:"@site/snaps/concepts/design-guidelines.md",sourceDirName:"concepts",slug:"/concepts/design-guidelines",permalink:"/update-docusaurus-version-2/snaps/concepts/design-guidelines",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/snaps/concepts/design-guidelines.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{description:"Learn about best practices for creating snap installation flows.",sidebar_position:5},sidebar:"snapsSidebar",previous:{title:"Snaps execution environment",permalink:"/update-docusaurus-version-2/snaps/concepts/execution-environment"},next:{title:"About the Keyring API",permalink:"/update-docusaurus-version-2/snaps/concepts/keyring-api"}},l={},p=[{value:"Why this matters",id:"why-this-matters",level:2},{value:"Guidelines at a glance",id:"guidelines-at-a-glance",level:2},{value:"Think like your users, write like a human",id:"think-like-your-users-write-like-a-human",level:2},{value:"Introducing your snap",id:"introducing-your-snap",level:2},{value:"Details to include when introducing your snap",id:"details-to-include-when-introducing-your-snap",level:3},{value:"Important details include:",id:"important-details-include",level:4},{value:"Embedded in existing flows",id:"embedded-in-existing-flows",level:2},{value:"Making the most of your metadata",id:"making-the-most-of-your-metadata",level:2},{value:"Upleveling your copy",id:"upleveling-your-copy",level:2},{value:"Capitalization",id:"capitalization",level:3},{value:"Active voice",id:"active-voice",level:3}],u={toc:p},d="wrapper";function c(e){let{components:t,...o}=e;return(0,i.kt)(d,(0,a.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"snaps-design-guidelines"},"Snaps design guidelines"),(0,i.kt)("p",null,"This page outlines guiding principles for designers, developers, builders, and writers to create snap installation flows that are accessible to all users. Use these guidelines when introducing your snap within a dapp or website."),(0,i.kt)("h2",{id:"why-this-matters"},"Why this matters"),(0,i.kt)("p",null,"The snap installation process contains critical info about your snap, including what it does, how it enhances your application, and why it\u2019s beneficial for users. It's important to provide this information on your website or dapp to help users understand the purpose and benefits of the snap before installing it. Without this information, users may drop out during installation or install the snap without fully understanding its purpose."),(0,i.kt)("h2",{id:"guidelines-at-a-glance"},"Guidelines at a glance"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Metadata must-haves")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Keep your name to ",(0,i.kt)("strong",{parentName:"li"},"21 characters or less")," (including spaces)."),(0,i.kt)("li",{parentName:"ul"},"Never use \u201csnap\u201d in your snap\u2019s name. Use the space for something more descriptive."),(0,i.kt)("li",{parentName:"ul"},"Your avatar should fit in a ",(0,i.kt)("strong",{parentName:"li"},"32px circular frame, SVG format"),"."),(0,i.kt)("li",{parentName:"ul"},"Always aim for a short and simple copy.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Before")," asking for permission to install, provide users with ",(0,i.kt)("strong",{parentName:"p"},"clear and concise information")," about:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"What")," the snap does and ",(0,i.kt)("em",{parentName:"li"},"how")," it meets their needs."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"How")," the snap works."),(0,i.kt)("li",{parentName:"ul"},"Any ",(0,i.kt)("em",{parentName:"li"},"security precautions")," they may need to know about.")),(0,i.kt)("p",null,"Write in active voice and use sentence case. Avoid jargon\u2014write in plain language that can be understood at a glance."),(0,i.kt)("h2",{id:"think-like-your-users-write-like-a-human"},"Think like your users, write like a human"),(0,i.kt)("p",null,"Consider whether the details that interest you as a developer are relevant to the user\u2019s experience. Often, content can be drastically reduced by cutting jargon and run-on sentences. Read your content out loud to hear what stands out most in your messaging. If something is hard to say, it\u2019s probably hard to read."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Be clear.")),(0,i.kt)("p",{parentName:"li"},"When labeling buttons or actions, use descriptive action verbs instead of vague phrases. ",(0,i.kt)("em",{parentName:"p"},"Install")," is more clear than ",(0,i.kt)("em",{parentName:"p"},"Complete"),", for example.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Be concise.")),(0,i.kt)("p",{parentName:"li"},"Use short, simple words. Make every word earn its place on the screen.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Be consistent.")),(0,i.kt)("p",{parentName:"li"},"Identify synonyms and eliminate them. Each important object and action should have a single word to represent it. Inconsistency can blur the lines for users, creating uncertainty and confusion."))),(0,i.kt)("h2",{id:"introducing-your-snap"},"Introducing your snap"),(0,i.kt)("p",null,"Use conversational language when explaining the snap. If you need to use a technical term, briefly define it so everyone can understand. Avoid jargon whenever possible, and keep your words short and simple. Introduce your snap in the context of your application to make it clear what the user gets if they install it."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Introducing your snap&#39;s features via a modal",src:n(43350).Z,width:"2064",height:"1408"})),(0,i.kt)("admonition",{title:"How to (not) describe what your snap does",type:"note"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("strong",{parentName:"p"},"Don'ts")),(0,i.kt)("p",{parentName:"admonition"},"\u274c ",(0,i.kt)("em",{parentName:"p"},"Allow the snap to perform actions that run periodically at fixed times, dates, or intervals. This can be used to trigger time-sensitive interactions or notifications.")),(0,i.kt)("p",{parentName:"admonition"},"\u274c ",(0,i.kt)("em",{parentName:"p"},"Allow this snap to display notifications regarding your Ethereum Name Service expiration.")),(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("strong",{parentName:"p"},"Do's")),(0,i.kt)("p",{parentName:"admonition"},"\u2705 ",(0,i.kt)("em",{parentName:"p"},"Let this snap schedule and run recurring tasks or notifications.")),(0,i.kt)("p",{parentName:"admonition"},"\u2705 ",(0,i.kt)("em",{parentName:"p"},"Let this snap notify you when your ENS is about to expire."))),(0,i.kt)("h3",{id:"details-to-include-when-introducing-your-snap"},"Details to include when introducing your snap"),(0,i.kt)("p",null,"This is your chance to share the benefits of your snap with the intended user. If it isn\u2019t clear what a user stands to gain from your snap, chances are they won\u2019t even install it. So don\u2019t be afraid to think like a marketer and emphasize the benefits of your snap."),(0,i.kt)("p",null,"Consider introducing your snap on your website with a modal, tooltip, or card. This introduction can happen before or alongside the installation prompt, but should always be clear and descriptive."),(0,i.kt)("h4",{id:"important-details-include"},"Important details include:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"What your snap does, why someone would use it, and how it works."),(0,i.kt)("li",{parentName:"ul"},"Security precautions in plain, basic language that anyone can understand."),(0,i.kt)("li",{parentName:"ul"},"Descriptions of the features that make your snap appealing to the intended users.")),(0,i.kt)("admonition",{title:"Tip",type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Some studies estimate users read only 20-28% of the text on any screen, so write about your snap with language that\u2019s impactful, clear, and direct.")),(0,i.kt)("h2",{id:"embedded-in-existing-flows"},"Embedded in existing flows"),(0,i.kt)("p",null,"Introduce the snap as a natural extension of existing elements on your screen, and suggest installation when the time is right. This can be a make or break moment for your snap, so put yourself in the shoes of the intended user."),(0,i.kt)("p",null,"At what point does it make the most sense to prompt an install? Don\u2019t ask the user to install your snap before they do anything in the dapp or website, as they will probably decline. Instead, ",(0,i.kt)("strong",{parentName:"p"},"wait to prompt installation")," ",(0,i.kt)("strong",{parentName:"p"},"until a point where the snap is required"),"."),(0,i.kt)("p",null,"In the following example, a key management snap is suggested in the context of a network picker screen."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Installation and connection to your snap embedded in existing flows",src:n(73210).Z,width:"3840",height:"2160"})),(0,i.kt)("h2",{id:"making-the-most-of-your-metadata"},"Making the most of your metadata"),(0,i.kt)("p",null,"Your snap\u2019s avatar and name will be among the first things a user sees when deciding whether to install your snap. These are also a key part of your identity, so it\u2019s worth spending a bit of time on this step."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Avatar")),(0,i.kt)("p",null,"Your snap\u2019s avatar should be suitable for a ",(0,i.kt)("strong",{parentName:"p"},"32 px circular frame in SVG format"),". Avoid using images with small details, as they won't be impactful in the allotted space. Aim for something bold, simple, and easily understood."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Name")),(0,i.kt)("p",null,"Your snap's name should be short and easy to remember. It should be ",(0,i.kt)("strong",{parentName:"p"},"21 characters maximum"),", ",(0,i.kt)("strong",{parentName:"p"},"including spaces"),", to ensure that it is easy to read and fits comfortably on small screens."),(0,i.kt)("p",null,"Using a descriptive name can help users understand how they will benefit from installing your snap, and may increase the likelihood that they will install and use it. ",(0,i.kt)("strong",{parentName:"p"},"Never")," use the word ",(0,i.kt)("strong",{parentName:"p"},"\u201csnap\u201d")," in your name \u2014 your name should be specific and memorable, and which will differentiate your snap from others."),(0,i.kt)("admonition",{title:"How to (not) name your snap",type:"note"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("strong",{parentName:"p"},"Don'ts")),(0,i.kt)("p",{parentName:"admonition"},"\u274c ",(0,i.kt)("em",{parentName:"p"},"Solana Snap")),(0,i.kt)("p",{parentName:"admonition"},"\u274c ",(0,i.kt)("em",{parentName:"p"},"Snap for Filecoin")),(0,i.kt)("p",{parentName:"admonition"},"\u274c ",(0,i.kt)("em",{parentName:"p"},"Best manager for Bitcoin")),(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("strong",{parentName:"p"},"Do's")),(0,i.kt)("p",{parentName:"admonition"},"\u2705 ",(0,i.kt)("em",{parentName:"p"},"Solana Manager")),(0,i.kt)("p",{parentName:"admonition"},"\u2705 ",(0,i.kt)("em",{parentName:"p"},"Bitcoin Helper")),(0,i.kt)("p",{parentName:"admonition"},"\u2705 ",(0,i.kt)("em",{parentName:"p"},"Filecoin Wallet"))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"How your snap\u2019s avatar and name is displayed during installation",src:n(55672).Z,width:"3840",height:"2160"}),"\n",(0,i.kt)("img",{alt:"How your snap\u2019s name is displayed during transaction insights",src:n(38689).Z,width:"3840",height:"2160"}),"\n",(0,i.kt)("img",{alt:"How your snap\u2019s avatar and name is displayed during a custom dialog screen",src:n(67788).Z,width:"3840",height:"2160"})),(0,i.kt)("h2",{id:"upleveling-your-copy"},"Upleveling your copy"),(0,i.kt)("p",null,"At MetaMask, we use an in-depth style guide to inform our writing decisions. Here are a couple of ways to easily uplevel your own copy so it feels more at home in the MetaMask ecosystem."),(0,i.kt)("h3",{id:"capitalization"},"Capitalization"),(0,i.kt)("p",null,"With few exceptions, use ",(0,i.kt)("strong",{parentName:"p"},"sentence case as a default"),". Sentence case is capitalizing only the first word of a line of copy. Not only is sentence case is more casual and conversational, but it\u2019s also easier to scan than title case. Keep in mind, there are a handful of times that title case is the way to go."),(0,i.kt)("h3",{id:"active-voice"},"Active voice"),(0,i.kt)("p",null,"Write your copy in active voice. There are certain situations where passive voice is the better option, but it\u2019s more likely that active voice will suit your situation."),(0,i.kt)("admonition",{title:"How to write in active voice",type:"tip"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("em",{parentName:"p"},"Subject")," (person/thing acting) ",(0,i.kt)("em",{parentName:"p"},"verb")," (the action) ",(0,i.kt)("em",{parentName:"p"},"object")," (receives the action).")),(0,i.kt)("admonition",{title:"How to (not) write in active voice",type:"note"},(0,i.kt)("p",{parentName:"admonition"},"\u274c ",(0,i.kt)("em",{parentName:"p"},"The problem is being investigated")),(0,i.kt)("p",{parentName:"admonition"},"\u2705 ",(0,i.kt)("em",{parentName:"p"},"We\u2019re investigating the problem"))))}c.isMDXComponent=!0},67788:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/dialog-4bcc3e4ba573e9c1f0af3096a7f091e9.png"},38689:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/insights-6bc6e1c7c072bcef9496ed9eb1f2ba27.png"},43350:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/install-modal-e30c180920d3764809012f1f833349ae.png"},55672:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/install-2d2e66e5b966958ac6e67e4b05aaa730.png"},73210:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/picker-f699ed66d717994d18700380d3fb87ae.png"}}]);