"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[51717],{78949:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>o,toc:()=>l});var t=s(74848),r=s(28453);const a={description:"See the Jest API and options reference.",sidebar_position:8},i="Jest API and options",o={id:"reference/jest",title:"Jest API and options",description:"See the Jest API and options reference.",source:"@site/snaps/reference/jest.md",sourceDirName:"reference",slug:"/reference/jest",permalink:"/test-integrate-infura/snaps/reference/jest",draft:!1,unlisted:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/snaps/reference/jest.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{description:"See the Jest API and options reference.",sidebar_position:8},sidebar:"snapsSidebar",previous:{title:"Chain Methods API",permalink:"/test-integrate-infura/snaps/reference/keyring-api/chain-methods"}},c={},l=[{value:"API methods",id:"api-methods",level:2},{value:"<code>installSnap</code>",id:"installsnap",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Example",id:"example",level:4},{value:"<code>request</code>",id:"request",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Example",id:"example-1",level:4},{value:"<code>onTransaction</code>",id:"ontransaction",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-2",level:4},{value:"Example",id:"example-2",level:4},{value:"<code>onCronjob</code>",id:"oncronjob",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns-3",level:4},{value:"Example",id:"example-3",level:4},{value:"<code>onHomePage</code>",id:"onhomepage",level:3},{value:"<code>getInterface</code>",id:"getinterface",level:3},{value:"Returns",id:"returns-4",level:4},{value:"Example",id:"example-4",level:4},{value:"Jest matchers",id:"jest-matchers",level:2},{value:"Options",id:"options",level:2},{value:"<code>server</code>",id:"server",level:3},{value:"Example",id:"example-5",level:4}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"jest-api-and-options",children:"Jest API and options"}),"\n",(0,t.jsxs)(n.p,{children:["You can use the ",(0,t.jsx)(n.code,{children:"@metamask/snaps-jest"})," package for ",(0,t.jsx)(n.a,{href:"/test-integrate-infura/snaps/how-to/test-a-snap",children:"end-to-end Snaps testing"}),".\nThis reference describes the available ",(0,t.jsx)(n.a,{href:"#api-methods",children:"API methods"}),", ",(0,t.jsx)(n.a,{href:"#jest-matchers",children:"Jest matchers"}),",\nand ",(0,t.jsx)(n.a,{href:"#options",children:"options"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"api-methods",children:"API methods"}),"\n",(0,t.jsx)(n.h3,{id:"installsnap",children:(0,t.jsx)(n.code,{children:"installSnap"})}),"\n",(0,t.jsx)(n.p,{children:"Installs a Snap in the execution environment.\nWe recommend using this function in each test to ensure that it starts with a clean slate."}),"\n",(0,t.jsx)(n.h4,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(n.p,{children:["By default, if the built-in server is enabled, ",(0,t.jsx)(n.code,{children:"installSnap"})," installs the Snap from the built-in server.\nOtherwise, you must specify a Snap ID to install."]}),"\n",(0,t.jsx)(n.h4,{id:"returns",children:"Returns"}),"\n",(0,t.jsx)(n.p,{children:"An object with functions that can be used to interact with the Snap."}),"\n",(0,t.jsx)(n.h4,{id:"example",children:"Example"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:'import { installSnap } from "@metamask/snaps-jest";\n\ndescribe("MySnap", () => {\n  it("should do something", async () => {\n    await installSnap(/* optional Snap ID */);\n    // ...\n  });\n});\n'})}),"\n",(0,t.jsx)(n.h3,{id:"request",children:(0,t.jsx)(n.code,{children:"request"})}),"\n",(0,t.jsx)(n.p,{children:"Sends a JSON-RPC request to the Snap."}),"\n",(0,t.jsx)(n.h4,{id:"parameters-1",children:"Parameters"}),"\n",(0,t.jsxs)(n.p,{children:["A JSON-RPC request object with an addition optional ",(0,t.jsx)(n.code,{children:"origin"})," property."]}),"\n",(0,t.jsx)(n.h4,{id:"returns-1",children:"Returns"}),"\n",(0,t.jsxs)(n.p,{children:["A promise that resolves to the response from the ",(0,t.jsx)(n.a,{href:"/test-integrate-infura/snaps/reference/entry-points#onrpcrequest",children:(0,t.jsx)(n.code,{children:"onRpcRequest"})})," entry point,\nwhich can be checked using ",(0,t.jsx)(n.a,{href:"#jest-matchers",children:"Jest matchers"}),"."]}),"\n",(0,t.jsx)(n.h4,{id:"example-1",children:"Example"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:'import { installSnap } from "@metamask/snaps-jest";\n\ndescribe("MySnap", () => {\n  it("should respond to foo with bar", async () => {\n    const { request } = await installSnap(/* Optional snap ID */);\n    const response = await request({\n      origin: "http://localhost:8080",\n      method: "foo",\n      params: [],\n    });\n\n    /* Check the response using Jest matchers. Since the response is a standard JSON-RPC response,\n     * you can use any standard Jest matchers to check it, including snapshot matchers. */\n    expect(response).toRespondWith("bar");\n    expect(response).not.toRespondWithError("baz");\n    expect(response).toMatchSnapshot();\n  });\n});\n'})}),"\n",(0,t.jsx)(n.h3,{id:"ontransaction",children:(0,t.jsx)(n.code,{children:"onTransaction"})}),"\n",(0,t.jsx)(n.p,{children:"Sends a transaction to the Snap."}),"\n",(0,t.jsx)(n.h4,{id:"parameters-2",children:"Parameters"}),"\n",(0,t.jsx)(n.p,{children:"A transaction object with the following properties:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"origin"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"chainId"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"from"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"to"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"value"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"data"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"gasLimit"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"maxFeePerGas"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"maxPriorityFeePerGas"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"nonce"})}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"All properties are optional.\nThe addresses are randomly generated by default.\nMost values can be specified as a hex string or a decimal number."}),"\n",(0,t.jsx)(n.h4,{id:"returns-2",children:"Returns"}),"\n",(0,t.jsxs)(n.p,{children:["An object with the user interface that was shown by the Snap, in the\n",(0,t.jsx)(n.a,{href:"/test-integrate-infura/snaps/reference/entry-points#ontransaction",children:(0,t.jsx)(n.code,{children:"onTransaction"})})," entry point."]}),"\n",(0,t.jsx)(n.h4,{id:"example-2",children:"Example"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:'import { installSnap } from "@metamask/snaps-jest";\nimport { panel, text } from "@metamask/snaps-sdk";\n\ndescribe("MySnap", () => {\n  it("should return insights", async () => {\n    const { onTransaction } = await installSnap(/* Optional Snap ID */);\n    const response = await onTransaction({\n      value: "0x0",\n      data: "0x",\n      gasLimit: "0x5208",\n      maxFeePerGas: "0x5208",\n      maxPriorityFeePerGas: "0x5208",\n      nonce: "0x0",\n    });\n  \n    expect(response).toRender(panel([text("Hello, world!")]));\n  });\n});\n'})}),"\n",(0,t.jsx)(n.h3,{id:"oncronjob",children:(0,t.jsx)(n.code,{children:"onCronjob"})}),"\n",(0,t.jsxs)(n.p,{children:["Runs a cronjob in the Snap.\nThe request is normally specified in the Snap manifest file under the\n",(0,t.jsx)(n.a,{href:"/test-integrate-infura/snaps/reference/permissions#endowmentcronjob",children:(0,t.jsx)(n.code,{children:"endowment:cronjob"})})," permission, but this method allows you to\nrun cronjobs that are not specified in the manifest as well."]}),"\n",(0,t.jsx)(n.h4,{id:"parameters-3",children:"Parameters"}),"\n",(0,t.jsx)(n.p,{children:"A JSON-RPC request object."}),"\n",(0,t.jsx)(n.h4,{id:"returns-3",children:"Returns"}),"\n",(0,t.jsxs)(n.p,{children:["A promise that resolves to the response from the ",(0,t.jsx)(n.a,{href:"/test-integrate-infura/snaps/reference/entry-points#oncronjob",children:(0,t.jsx)(n.code,{children:"onCronjob"})})," entry point,\nwhich can be checked using ",(0,t.jsx)(n.a,{href:"#jest-matchers",children:"Jest matchers"}),"."]}),"\n",(0,t.jsx)(n.h4,{id:"example-3",children:"Example"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:'import { installSnap } from "@metamask/snaps-jest";\n\ndescribe("MySnap", () => {\n  it("should end foo cronjobs with response bar", async () => {\n    const { onCronjob } = await installSnap(/* Optional snap ID */);\n    const response = await onCronjob({\n      method: "foo",\n      params: [],\n    });\n\n    // Check the response using Jest matchers.\n    expect(response).toRespondWith("bar");\n    expect(response).not.toRespondWithError("baz");\n  });\n});\n'})}),"\n",(0,t.jsx)(n.h3,{id:"onhomepage",children:(0,t.jsx)(n.code,{children:"onHomePage"})}),"\n",(0,t.jsxs)(n.p,{children:["Requests the home page of the Snap. It\ntakes no arguments, and returns a promise that resolves to the response from the\n",(0,t.jsx)(n.a,{href:"/test-integrate-infura/snaps/reference/entry-points#onhomepage",children:(0,t.jsx)(n.code,{children:"onHomePage"})}),"\nentry point."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:'import { installSnap } from "@metamask/snaps-jest";\nimport { panel, text } from "@metamask/snaps-sdk";\n\ndescribe("MySnap", () => {\n  it("should render the home page", async () => {\n    const { onHomePage } = await installSnap(/* Optional snap ID */);\n    const response = await onHomePage();\n\n    expect(response).toRender(panel([text("Hello, world!")]));\n  });\n});\n'})}),"\n",(0,t.jsx)(n.h3,{id:"getinterface",children:(0,t.jsx)(n.code,{children:"getInterface"})}),"\n",(0,t.jsxs)(n.p,{children:["If your Snap uses ",(0,t.jsx)(n.a,{href:"/test-integrate-infura/snaps/reference/snaps-api#snap_dialog",children:(0,t.jsx)(n.code,{children:"snap_dialog"})})," to show user interfaces, you can use the\n",(0,t.jsx)(n.code,{children:"request.getInterface"})," method to interact with the user interfaces.\nThis method is present on the return value of the ",(0,t.jsx)(n.a,{href:"#request",children:(0,t.jsx)(n.code,{children:"request"})})," method."]}),"\n",(0,t.jsx)(n.h4,{id:"returns-4",children:"Returns"}),"\n",(0,t.jsx)(n.p,{children:"This method waits for the user interface to be shown, and returns an object with functions that can\nbe used to interact with the user interface."}),"\n",(0,t.jsx)(n.h4,{id:"example-4",children:"Example"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:'import { installSnap } from "@metamask/snaps-jest";\nimport { text } from "@metamask/snaps-sdk";\nimport { assert } from "@metamask/utils";\n\ndescribe("MySnap", () => {\n  it("should render an alert with hello world", async () => {\n    const { request } = await installSnap(/* Optional Snap ID */);\n\n    // Note: You cannot resolve the promise yet!\n    const response = request({\n      method: "foo",\n    });\n\n    const ui = await response.getInterface();\n\n    // This is useful if you\'re using TypeScript, since it infers the type of the user interface.\n    assert(ui.type === "alert");\n    expect(ui).toRender(text("Hello, world!"));\n\n    // Select the OK button.\n    await ui.ok();\n\n    // Now you can resolve the promise.\n    const result = await response;\n    expect(result).toRespondWith("bar");\n  });\n});\n'})}),"\n",(0,t.jsx)(n.h2,{id:"jest-matchers",children:"Jest matchers"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"@metamask/snaps-jest"})," includes the following Jest matchers that you can use to assert that a\nresponse from a Snap matches an expected value:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"toRespondWith(expectedResponse)"})," - Checks if a response matches an expected response.\nThis matcher checks the ",(0,t.jsx)(n.code,{children:"result"})," property of the response.\nIf the response is an error, this matcher fails."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"toRespondWithError(expectedError)"})," - Checks if a response matches an expected error.\nThis matcher checks the ",(0,t.jsx)(n.code,{children:"error"})," property of the response.\nIf the response is not an error, this matcher fails."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"toSendNotification(notificationText)"})," - Checks if a Snap sent a notification."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"toRender(expectedInterface)"})," - Checks if a Snap rendered an interface.\nThis is useful for testing the user interface of a Snap, either for a ",(0,t.jsx)(n.a,{href:"/test-integrate-infura/snaps/reference/snaps-api#snap_dialog",children:(0,t.jsx)(n.code,{children:"snap_dialog"})}),"\nor a user interface rendered by the ",(0,t.jsx)(n.a,{href:"/test-integrate-infura/snaps/reference/entry-points#ontransaction",children:"transaction insights API"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"options",children:"Options"}),"\n",(0,t.jsxs)(n.p,{children:["You can pass the following options when ",(0,t.jsxs)(n.a,{href:"/test-integrate-infura/snaps/how-to/test-a-snap#2-configure-metamasksnaps-jest",children:["configuring ",(0,t.jsx)(n.code,{children:"@metamask/snaps-jest"})]}),".\nAll options are optional."]}),"\n",(0,t.jsx)(n.h3,{id:"server",children:(0,t.jsx)(n.code,{children:"server"})}),"\n",(0,t.jsx)(n.p,{children:"Options for the built-in HTTP server included with this package.\nThis server serves the execution environment, simulator, and the Snap bundle during tests."}),"\n",(0,t.jsx)(n.p,{children:"The server options are:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"enabled"})," - Enables or disables the built-in HTTP server.\nSet to ",(0,t.jsx)(n.code,{children:"false"})," to use your own HTTP server, which you can specify when calling ",(0,t.jsx)(n.a,{href:"#installsnap",children:(0,t.jsx)(n.code,{children:"installSnap"})}),", e.g. ",(0,t.jsx)(n.code,{children:'installSnap("local:http://my-server")'}),".\nThe default is ",(0,t.jsx)(n.code,{children:"true"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"port"})," - The port to use for the built-in HTTP server.\nThe default is a random available (unprivileged) port."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"root"})," - The path to the root directory to serve the Snap files from.\nThis is useful if you want to serve the Snap files from a different directory than the one Jest is\nrunning from.\nThe default is the current working directory."]}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"example-5",children:"Example"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",metastring:'title="jest.config.js"',children:'module.exports = {\n  preset: "@metamask/snaps-jest",\n  testEnvironmentOptions: {\n    server: {\n      port: 8080,\n      root: "/path/to/snap/files",\n    },\n  },\n};\n'})})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>o});var t=s(96540);const r={},a=t.createContext(r);function i(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);