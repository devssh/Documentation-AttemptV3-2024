

console.log(`

This script is loaded after body is loaded to provide data

`);

this.data = function(){this.documentsList = [];};
this.data = function(){
this.documentsList = [["Documentation Index",function() {
return `26 documents found

Appendix are not meant for manual human search

00001. <a href="?page=documentation-index">Documentation Index</a>
00002.  <a href="?page=version-of-javascript">Version of javascript</a>
00003.  <a href="?page=mdn-javascript-the-mozilla-development-network">MDN javascript-The Mozilla Development Network</a>
00004.  <a href="?page=byte-code">Byte code</a>
00005.  <a href="?page=just-in-time-compilation-jit">Just in Time Compilation JIT</a>
00006.  <a href="?page=first-class-functions-higher-order-function">First class functions-Higher order function</a>
00007.  <a href="?page=javascript-uses">Javascript Uses</a>
00008.  <a href="?page=window-interface">Window interface</a>
00009.  <a href="?page=indexdb-basics">IndexDb basics</a>
00010.  <a href="?page=document-object-model-dom">Document Object Model DOM</a>
00011.  <a href="?page=web-workers-api">Web Workers API</a>
00012.  <a href="?page=digital-subscriber-line">Digital Subscriber Line</a>
00013.  <a href="?page=internet-basics">Internet basics</a>
00014.  <a href="?page=js-intro">JS Intro</a>
00015.  <a href="?page=js-language-basics">JS Language Basics</a>
00016.  <a href="?page=js-language-advanced">JS Language Advanced</a>
Appendix I <a href="?page=globalthis-this-javascript-ref">globalThis-this-Javascript ref</a>
Appendix II <a href="?page=mdn-web-docs-ref">MDN Web docs Ref</a>
Appendix III <a href="?page=chrome-web-storage-and-quota-concepts-ref">Chrome web storage and Quota concepts Ref</a>
Appendix IV <a href="?page=document-ref">Document ref</a>
Appendix V <a href="?page=window-ref">Window ref</a>
Appendix VI <a href="?page=web-api-references">Web Api References</a>
Appendix VII  <a href="?page=ref-eloquent-javascript">Ref Eloquent javascript</a>
Glossary I <a href="?page=variable-glossary">Variable glossary</a>
Glossary II <a href="?page=function-glossary">Function glossary</a>
Glossary III <a href="?page=references-glossary">References glossary</a>`;
},"2024-05-17 00:00:00","2024-05-17 00:00:00","00001. Documentation Index","documentation-index"],
["Version of javascript",function() {

return  "The Javascript version using <script language='javascript1.x' ></script> is " + js_version + `.

Using feature detection for Ecmascript version,
the version of javascript detected and year of release of the current browser is at least` + ecmaScriptInfo() + `

This depends on the browser version running the Javascript on the client side.
For example: Chrome V8 engine, Firefox: SpiderMonkey

<div class="heading2">

` + ecmaScriptInfo() + `

Maximum version detectable 2022 ES13
</div>



`;
},"2024-04-01 00:00:00","2024-05-17 00:00:00","00002. ","version-of-javascript"],
["MDN javascript-The Mozilla Development Network",function() {

return  "MDN homepage url is " + showInlineLink("https://developer.mozilla.org/en-US/", "MDN home page") + `

Mozilla Developer Network is a website that provides documentation on HTML, CSS and Javascript for the Mozilla Firefox Browser engine. 

The javascript documentation url is ` + showInlineLink("https://developer.mozilla.org/en-US/docs/Learn/JavaScript", "MDN Javascript Guide") + `

The javascript reference url is ` + showInlineLink("https://developer.mozilla.org/en-US/docs/Web/JavaScript", "MDN JS References") + `

The url for web api documentation is ` + showInlineLink("https://developer.mozilla.org/en-US/docs/Web/API", "Web API");
},"2024-04-20 00:00:00","2024-05-17 00:00:00","00003. ","mdn-javascript-the-mozilla-development-network"],
["Byte code",function() {

return  createLinkBlock("Wikipedia Byte Code", "https://en.wikipedia.org/wiki/Bytecode", `
1. Byte code is an intermediary output that many languages give for the source code.
2. Byte code enables platform independence by providing a framework for cross platform
3. Byte code is finally compiled to machine code for a specific system
4. Also known as p-code or portable code or virtual machine code
`) +  createBlock(`Glossary`, `` + `
1. Intermediate representation
2. Platform
3. Runtime system
4. Abstract Syntax Tree
5. Semantic analysis (compilers+
6. Byte opcodes
7. Cross platform
8. P-code-machine aka interpreter
9. Virtual stack machines
10. Register machines
11. Object modules - object file - a file containing relocatable format machine code
12. Smalltalk
13. Perl
14. Byte code engineering library
15. Dalvik
16. Emacs lisp
17. R language
18. Python .pyc
19. SQLite
20. Web assembly
21. Yarv in Ruby
22. Zend engine in PHP
23. LLVM
`);
},"2024-04-29 00:00:00","2024-04-29 00:00:00","00004. ","byte-code"],
["Just in Time Compilation JIT",function() {

return createLinkBlock("JIT Compilation Wikipedia", "https://en.wikipedia.org/wiki/Just-in-time_compilation", `
1. JIT compilation is dynamic compilation at runtime
2. Objective is to provide compiler access at runtime, be as performant or faster than statically compiled code
3. JIT compilers were used to speedup byte code conversion to machine code by delaying compilation to perform optimizations.
4. Javascript by Oracle has a JIT compiler.
5. JIT has advantages over interpreted compilers in terms of optimization capability.
6. JIT compilation in Javascript allows the compiler to provide interpretation in console at runtime, and load code when it is required to enhance performance.
7. Disadvantages of JIT compilation include error messages not thrown until runtime, slower and less safe than statically typed compiled code.
8. Details - types of optimizations - exact nature of drawbacks
9. JIT saves time overhead of recompilation by adding the flexibility of interpretors to run code without compilation time of whole project.
10. Use case - suited for enforcing security guarantee of late binding or dynamic linkage at runtime
11. Von neumann architecture is good for JIT. JIT cannot run on Harvard architecture?
12. Security of JIT is possible exploit because of runtime execution
13. Regex can be done on JIT in limited and certain capacity
14. JIT can cache compiled code to translate continuously and speed up compilation.
`) + createBlock(`Glossary`, `
1. Source code translation and byte code translation to machine code
2. AOT - Ahead of Time compilation
3. Interpretor
4. Dynamic compilation
5. Dynamic programming language - eval, runtime type addition/change, reflection, S-expressions
6. Microarchitecture specific speedups
7. Adaptive optimization
8. Dynamic recompilation
9. Linking
10. Late bound data types
11. LISP has JIT compiler
12. P-code, bytecode or portable code or virtual machine code
13. Virtual machines
14. Harvard architecture vs Von neumann architecture
15. JVM
16. Inline caching
17. Profile guided optimization
18. JIT spraying exploit
19. Runtime environment
20. LLVM - low level virtual machine
21. Copy and patch technique
22. Binary translation
`);
},"2024-04-29 12:22:00","2024-05-17 12:22:00","00005. ","just-in-time-compilation-jit"],
["First class functions-Higher order function",function() {

return  createBlock(`First class functions refers to a programming language functionality to 
`, `
1. Be able to declare a function and assign it to variable
2. Be able to pass functions as parameters or arguments to other functions
3. Be able to return functions as output from other functions
`) + `
A Higher Order Function HOF takes functions as parameters and returns functions

`
;
},"2024-05-08 16:42:52","2024-05-17 16:42:52","00006. ","first-class-functions-higher-order-function"],
["Javascript Uses",function() {

return  createBlock(`Javascript has a few primary use cases 
`, `
1. Manipulate webpage content using the DOM (Document Object Model)
2. Retrieve content from the fetch API with sync and async events
3. Store complex data using IndexDB
4. Draw graphics with canvas API
5. Interacting with hardware low level programming
6. Both on client side browser and server side like Node.js
`) + createBlock(`The standards of javascript
`, `
1.  ECMA-262 for ES2023 which is ES14 from June 2023
2. ECMA-ES6 2015
WebIDL, E4L
`) +  createLinkBlock("ECMA-262 standard doc","https://262.ecma-international.org/5.1/", `
Javascript history - Brendan Eich - Server Side - Netscape Navigator - JScript - Oracle
Javascript HTTP(HTTP1, HTTP1.1, HTTP2, TLS, REST) and Websockets(for example persistant TCP connections)
`) +  createLinkBlock("Javascript Wiki", "https://en.wikipedia.org/wiki/JavaScript", `
Eloquent Javascript - Marijin Haverbeke
Flash and ActionScript
Keith Peters Bit101
`) +  createLinkBlock("Design of JS-Javascript V8 engine Wiki", "https://en.wikipedia.org/wiki/V8_(JavaScript_engine)", `
V8 first generates an abstract syntax tree with its own parser. 
Then, Ignition generates bytecode from this syntax tree using the internal V8 bytecode format
TurboFan compiles this bytecode into machine code. 
In other words, V8 compiles ECMAScript directly to native machine code using just-in-time compilation before executing it.
The compiled code is additionally optimized (and re-optimized) dynamically at runtime,
based on heuristics of the code's execution profile.
Optimization techniques used include inlining, elision of expensive runtime properties, and inline caching.
The garbage collector is a generational incremental collector.
`) + createBlock(`Notable mentions
`, `
1. Ignition interpreter
2. TurboFan compiler optimization
3. Maglev SSA based compiler
4. Sparkplug - parallel
5. Strongtalk assembler
6. WebAssembly and asm.js
7. Java HotSpot Virtual Machine - Sun Microsystems - C1 compiler
8. Crankshaft register based machine
`);
},"2024-05-09 12:20:00","2024-05-17 12:20:00","00007. ","javascript-uses"],
["Window interface",function() {

return  createBlock(`Window API/Interface
`, `
1. Window is an interface which contains a DOM document. 
2. document points to the DOM document loaded in that window
3. document.defaultView returns a Window for the document.
4. When there are tabs open, there are separate window objects for every tab
5. Window inherits EventTarget
`) +  createBlock(`Related topics
`, `
1. HTML iframe tag Window.credentialless
2. Window.crypto
3. Window.launchQueue - Progressive Web Apps (PWA)
4. HTML fencedframe tag, Window.fence
5. Window.history, Window.location, Window.localStorage, Window.indexedDB, Window.navigator, 
Window.caches, Window.cookieStore, Window.timing, Window.performance, Window.scrollX, scrollY,
Window.sessionStorage, speechSynthesis,
Window.visualViewport, devicePixelRatio, alert, setInterval, setTimeout, 
blur, confirm, console, fetch,
createImageBitmap, getComputedStyle,
print, open, postMessage, prompt,
scroll, scrollBy, scrollByLines, scrollTo, scrollByPages, 
structuredClone, 
showDirectoryPicker, showOpenFilePicker, showSaveFilePicker,
list of popular deprecated features still available in old version
6. Navigator API, NavigationTiming
7. WebkitPoint
8. Events - 
bubbled events from document come to window
addEventListener()
List of events:
error, languagechange,
resize, storage,
copy, cut, paste,
offline, online,
devicemotion, 
deviceorientation,
deviceorientationabsolute,
blur, focus,
gamepadconnected, gamepadisconnected,
hashchange, pagehide,
pageshow, popstate,
beforeunload, load, unload,
appinstalled, beforeinstallprompt,
message, messageerror,
afterprint, beforeprint,
rejectionhandled, unhandledrejection
and a list of deprecatedEvents
`);
},"2024-05-09 17:00:00","2024-05-17 17:00:00","00008. ","window-interface"],
["IndexDb basics",function() {

return  createBlock(`IndexDb has
`, `
1. Low level API that is close to instruction set
2. Support for structured data like files and blobs
3. High performance searches
4. Transactional DB for RDBMS
5. Unlike fixed column tables it uses objects. 
It is possible to define schema, 
open connections and 
store objects provided they have key and support structured clone algorithm. 
6. IndexDB supports async non-blocking operations in a transactional way to update DB.
7. Every browser has storage quota and eviction criteria when DB size exceeds local storage limits or 
criteria for when limit is reached.
Firefox for example 
8. A Window.indexedDB.open() returns an IDBRequest object. This interface provides a way to fire async non blocking requests.
`) + showLink("https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API", "IndexedDB MDN") + createLinkBlock(`IndexedDB classes MDN`, "https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API", `
1. IDBFactory is Window.indexedDB
2. 
`) + showLink("https://w3c.github.io/IndexedDB/", "Indexed Database API W3C") + createBlock(`Storage in browser
The main types of storage in browser are
`, `
1. Cookies - state information about navigation
2. WebStorage - localStorage and sessionStorage
3. IndexedDB - larger data structures
4. Cache API - for network request responses
5. Origin Private File System (OPFS)
6. WebAssembly code caches
7. WebSQL
`) + createBlock(`
Eviction Policies`, `
Browser stored data can be - 

"best effort"(default, as long as origin is below quota) 

or

 "persistant"(transparent and evicted by user settings)
Persistant storage gives a popup to user
Chromium browsers accept/deny it based on history of user choices
Private browsing deletes data after use

Critical data - navigator.storage.persist()
`) + createBlock(`
How much data can be store?
`, `
- Cookies - They are added to every request for navigation so they impact performance

- Web Storage - 10 MiB in browser per origin, 5MiB for session storage 5Mib for local storage

- Firefox - Minimum of 10GiB for best effort or 10% of disk storage capacity and eTLD + 1 domain group limit
For persistant storage - 50% of hard disk capacity or 8TiB and no eTLD limit

- Chromium - 60% of hard disk in both best effort and persistant quota per origin

- Safari - For privacy cross-origin have 1/10th their parent quota as separate

60% quota, ` + showLink("https://www.webkit.org/blog/14403/updates-to-storage-policy/", "Webkit blog") + `, 

Older models have 20% quota or 1GiB limit for quota

- navigator.storage.estimate() gives space available(padded space, total space to avoid detection)

- QuotaExceededError, data eviction is more often on Storage pressure devices and proactively by Safari for less used websites
LRU policy is used
navigator.storage.persist - priority is given to persistant over best effort
`) + createBlock(`
Fingerprinting

The things that are disallowed to prevent fingerprinting of users and browser version are
`, `
1. Browser version
2. Timezone and preferred language
3. Video and audio codecs available to system
4. Fonts installed on system
5. State of browser settings
6. Computer's display size and resolution(exact - should be padded)
7. Cover your tracks.eff.org
8. W3C mitigating browser fingerprinting in web specifications 
`) + createBlock(`
Origins
`, `
1. Cross origins can read any embeddings by leaking read access.
examples are script tag, link tag, 
img tag, video tag, audio tag, 
object tag, embed tag,
@fontface, iframe tag

2. X-Frame-Options header can prevent cross-origin framing

3. Use a CSRF token(Cross Site Request Forgery) and make sure the page cannot be read by cross origin having the token.
`) + createBlock(`
Related Terms
`, `
1. Web Storage
2. Structured clone
3. WorkerGlobalScope
4. Window
5. Storage API
6. Fingerprinting security
7. Storage pressure eviction
8. eTLD - effective Top Level Domain
9. Least Recently Used LRU Policy
10. Preflight request in origin
`);
},"2024-05-09 17:19:40","2024-05-17 17:19:40","00009. ","indexdb-basics"],
["Document Object Model DOM",function() {

return  createBlock(`
DOM

`, `
1. DOM is an API(aka interface)
2. It represents and interacts with any HTML or XML-based markup language document.
3. The document is represented as a node tree or DOM tree.
4. Each node is an element, text string or comment among others.
5. Nodes can be accessed, created, moved and changed.
6. Event listeners can also be added to the Nodes and triggered on occurence of a given event.
`) + createLinkBlock("DOM standard", "https://dom.spec.whatwg.org/", `
1.WHATWG - Web Hypertext Application Technology Working Group
2. HTML5 is a HTML Living Standard of WHATWG since 2004
3. WHATWG published the Fetch Standard - CORS and HTTP Origin header semantics
4. WHATWG published the Streams Standard, 
the Encoding Standard(as opposed to IETF encodings registry), 
the MIME type sniffing standard,
the URL standard and 
the WEB IDL standard.
`) + createLinkBlock("DOM wiki", "https://en.wikipedia.org/wiki/Document_Object_Model", `
1. DOM is a cross platform and language independent interface.
2. Principal standarization of DOM is W3C World Wide Web Consortium and WHATWG
`) + createLinkBlock("Document interface", "https://developer.mozilla.org/en-US/docs/Web/API/Document", `
The Document interface serves as an entry point to the DOM tree.
Document inherits from HTMLDocument("text/html") and XMLDocument("XML, SVG and W3C")
Document also inherits from Node interface and EventTarget interface
There are many API(interfaces) to interact with here
Some standards are DOM standard, HTML standard, CSSOM View Module, Pointer Lock 2.0, Selection API
`) +  createBlock(`
Related Terms
`, `
1. WHATWG
2. Shadow DOM subtrees
3. <frameset>
4. 
`);
},"2024-05-09 19:00:00","2024-05-09 19:00:00","00010. ","document-object-model-dom"],
["Web Workers API",function() {

return createLinkBlock(`Structured Clone rules
`, "https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Structured_clone_algorithm", `
1. Workers use postMessage(message, options/transfer) to communicate with each other, DedicatedWorkerGlobalScope.postMessage()
IndexedDB stores objects,
and other APIs copy objects,
USING structuredClone() which internally calls the Structured Clone Algorithm
2. Worker interface creates a background task via the script which can send messages back to the creator
3. Not all interfaces are available to web workers 
4. Worker.postMessage(), Worker.terminate(), WorkerGlobalScope.importScripts()
5. Workers can be - DedicatedWorkerGlobalScope, SharedWorkerGlobalScope, ServiceWorkerGlobalScope
6. The list of API for workers - 
Background Fetch API
Background Synchronization API
Barcode Detection API
Broadcast Channel API
Canvas API
Channel Messaging API
Console API
Compression Streams API
CSS Font Loading API
CustomEvent
Encoding API (e.g. TextEncoder, TextDecoder)
Fetch API
File API
File System API
Idle Detection API
IndexedDB API
Media Capabilities API
Media Source Extensions API (dedicated workers only)
Network Information API
Notifications API
Payment Handler API
Performance API
Permissions API
Prioritized Task Scheduling API
Push API
Server-sent events
Service Worker API
Streams API
Trusted Types API
URL API (e.g. URL)
URL Pattern API
User-Agent Client Hints API
WebCodecs API
Web Crypto API (e.g. Crypto)
Web Locks API
Web Serial API
Web Periodic Background Synchronization API
WebGPU API
WebUSB API
WebSockets API
XMLHttpRequest API
Worker
WorkerGlobalScope
WorkerLocation
WorkerNavigator
`) + showLink("https://worker-playground.glitch.me/", "Worker test sandbox/playground")  + createBlock(`
Related terms:

`, `
1. Service workers
`) + createBlock(`
Structured clone rules
`, `
1. Function cannot be cloned in object
2. Recursively traverse objects and have a map of previously visited nodes to avoid infinite traversal.
3. DOM nodes cannot be cloned, DataCloneError is thrown
4. Certain object properties are not preserved
for e.g. - 
last index of RegExp objects (internal state of regular expression in use)
property descriptors, getters, setters, metadata like features are not duplicated
a readonly object marked with property descriptor("@readonly"), it will be read/write in duplicate by default
Prototype chain is not walked or duplicated
`) + createBlock(`
Here is list of some Web interfaces
`, `
Web/API types
AudioData
Blob
CropTarget
CryptoKey
DOMException: browsers must serialize the properties name and message. Other attributes may also be serialized/cloned.
DOMMatrix
DOMMatrixReadOnly
DOMPoint
DOMPointReadOnly
DOMQuad
DOMRect
DOMRectReadOnly
File
FileList
FileSystemDirectoryHandle
FileSystemFileHandle
FileSystemHandle
GPUCompilationInfo
GPUCompilationMessage
ImageBitmap
ImageData
RTCCertificate
VideoFrame
`) + createBlock(`
References
`, `
1. Transferrable objects - serializable in HTML living standard
2. Object.getOwnPropertyDescriptor(object, "property") - returns object.configurable true object which is copy excluding prototype chain
`);
},"2024-05-10 13:10:00","2024-05-17 13:10:00","00011. ","web-workers-api"],
["Digital Subscriber Line",function() {

return createBlock(`
DSL
`, `
1. The PSTN and ISDN are important to architecture along with ITU-T standards
2. Copper wires have attenuation and limited range(18000 feet length or 5.5km),
limited bandwidth 3400Khz(earlier), crosstalk, limits on bridged taps
64kilobit - 128kilobit limit on ISDN BRI(Basic Rate Interface) or 2.94 Mbps using ISDN PRI(Primary Rate Interface) which uses channels.
BONDING(Bandwidth On Demand Interoperability Group) and Multilink PPP
ISDN is used because - copper wires, remote region, B-ISDN(Broadband ISDN),
better than dial up, uses digital modem,
works using telephone infra,
works for credit card readers, fax
Alternative to ISDN - VoIP Provider over PSTN - ATA(analog telephone terminal adapter), IP Phones, SIP trunking, cost efficient
ISDN is outdated and to be phased out for being inflexible, time consuming and expensive to setup.
ISDN advantages - Bearer services(no manipulation or modification to data, end to end),
Teleservices, Supplementary services, Integrated Services(2 + 1 channels simultaneously ),
Satellite connection, cable TV, banks, ATM, BSNL, ADSL, VDSL, places where QoS does not exist
B channel - bearer, D channel - data
2B + D = 64 * 2 + 16 kilobit/sec - BRA(BRI)
30B + 2D = 2.048Megabit/sec - PRI
3. OSI layers - Physical, Data Link, Network, Transport, Session, Presentation, Application
4. DSL have speeds of 100Mbps and are also known as "always on connections"
5. DSL Home lists the requirements (created by DSL Forum)
Triple/Quad play services to end user's like voice, video, data, IPTV, Video on Demand(VoD), Content on Demand(CoD)
TR069 of the Broadband Forum
Remote management is core of DSL Home
WT-124 - RG access via xPON and others
TR-122 Voice ATA
Limits of VDSL 55Megabit, VDSL2 100Megabit, ADSL 7Megabit
6. DSL Home TR069
Provisioning of services via auto configuration
ISP needs to have Access Control systems
ACS Captive portal
ISP needs Notification mechanisms
ISP needs Firmware update
Status and performance monitoring
Diagnostics
Remote management via SSL/TLS
TR-111 for End Devices(ED) with STUN RFC 3489
7. Network connectivity problems
DSL cannot train or DSL signal not detected or Broadband Ethernet not connected
ATM PVC not detected
IEE 802.1x failure
PPP server not detected
PPP authentication failure
DHCP not available
8. ADSL block diagram for PHY layer -
Data in, Framing TC, RS encoder, Interleaver, Trellis encoder, QAM, IFFT, Tx-filter, D/A,
Telephone Channel,
 A/D, Rx-filter, FFT, QAM demodulator, Trellis decoder, De interleaver, RS decoder, Framing TC, Data out
9. ADSL2 benefits -
12M data rate, 6000m range, no seamless rate change, Power saving mode, avoid 1bit per bin and partial byte per symbol,
64kbps overhead channel rate(Framing Structure 3)
ADSL2+ benefits -
24M data rate, seamless rate adaptation when SNR change, power management, 1bit per bin, partial byte per symbol increase reach,
variable overhead channel rate meets need, loop diagnostic during training
Higher rates, extended reach, improved stability, power management, enhanced spectral compatibility
Rate enhancement tech - mandatory trellis coding, reduced framing overhead, 1-bit constellations, data on pilot tone
LDSL - long reach DSL
RE-ADSL - reach extended ADSL
Reed solomon coding,
10. VDSL Access Technology
Also known as VADSL, Ansi working group T1E1.4
VDSL is 30x faster than HDSL
VADSL was incorrect as VDSL supports both symmetric and asymmetric
VDSL uses higher frequency in copper than POTS and ISDN for Telco 20khz to 30Mhz and more
passive filters called dispatchers preserve baseband for ISDN
HDTV requires 18Megabits/sec downstream
SONET canonical speed 155.52 Mbps
SDH canonical 51.82, 25.92, 12, 96 Mbps

10. VDSL service sets
Symmetric VDSL 
short haul T1 replacements NXT1 rate
6.48 - 21.92Mbps
Short range 1kft
Medium range 3kft
Long range 4.5kft
between T1(1.5mbps) to T3(44.3mbps)

11. VDSL video service
Digital TV broadcast, VoD, HDTV
WebTV, e-commerce, video games, video conferencing, interactive video
DBS
Internet growth, the ADSL runs out of bandwidth
Internet architecture backbone is shifting to ATM(Asynchronous Transfer Mode ITU-T standard)
ATM is preferred FSAN(Full Service Access Network) backbone
Telephony services - DSL provides POTS always
VoIP and Voice over ATM(VToA)
VoDSL and derived channels
Lifeline services
Deployment Scenarios - FTTX
VDSL is only suitable for FTTEx, FTTN, FTTCab would use standalone deployments or NG-DLC or VDSL switch.
MDU businesses would use FTTB which would end VDSL.
VDSL2 activity is -
5 band 100Megabit/sec activity
CHT telecom, Swisscom, Belgacom, Deutsche telecom, KPN, Telephonica
Bandwidth 14x ADSL2+ and 4096 tones (8x ADSL+)
DMT - Discrete multi tone for VDSL2
dBm - decibell milliwatts
VDSL1 has limit of 14.5dBm for CO deployment and 11.5dBm for cabinet
High tx power like 20.5dBm for 8b profile increase range, FEXT impact and raise dS1 power in PSD
`) + createBlock(`Review questions DSL`, `
What is DSL?
What do you understand by "attenuation" in DSL technology?
What do you understand by "bridged taps" in DSL technology?
What is "cross talk" in DSL technology?
Explain DSL Home.
Which services can be enabled by DSL Home?
Which protocol is used for DSL remote management?
Which protocol is used for DSL local management?
What do you understand by TR111?
Explain TR98 and TR133.
What is purpose of TR-104, TR-106, TR-122, WT-135, WT-140, and WT-142 protocols?
What are the options in DSL technology?
What are the services offered by DSL Home- TR-69?
What are the services offered by TR-064?
Difference between TR69 and SNMP?
What are the components of the DSL system?
Explain the Transport system in a DSL system.
Explain the Local system in a DSL system.
Explain the Multi service DSLAM in DSL system.
Explain the DSL Modem/ Router in DSL system.
Explain the POTs splitter in DSL system.
Explain the Micro filter in DSL system.
What are the ADSL standards available as on date?
What do you understand by the ADSL technology?
What do you understand by the RADSL Standards?
What do you understand by the Multirate Symmetric DSL?
What are the benefits of ReachDSL (RDSL)?
What are the benefits of ADSL2?
What are the benefits of ADSL2+?
Explain the benefits of ADSL2/2+.
Explain the features of ADSL2+.
What do you understand by the VDSL Access Technology?
What are the different variants available in VDSL today?
What do you understand by asymmetric VDSL?
What do you understand by symmetric VDSL?
Give a service and rate comparison between ADSL and VDSL technology.
What are the key features of VDSL?
What do you understand by DMT?
`) + createBlock(`
References
`, `
1. Digital Subscriber Line (DSL) aka Digital Subscriber Loop aka Digital Loop Carrier(DLC)
2. Internet Service Provider
3. Copper Loop Transmission Technology
4. Access Network
5. Network Service Provider
6. Corporate Network Service Provider
7. Frame Relay Network Service Provider
8. Analog modem
9. DSL Router
10. Service Level Management (SLM)
11. SLM-DSL, FRoDSL, VoDSL
12. Publically Switched Telephone Network (PSTN)
13. International Telecommunication Union Telecommunication Standardization Sector (ITU-T previously aka CCITT)
14. Open Document Architecture(ODA)
SGML(Standard Generalized Markup Language)
ASN1(Abstract Syntax Notation One)
OGIF (Open Document Interchange Format)
15. Integrated Services Digital Network (ISDN) - support data as well along with PSTN
16. Packet
17. Dial up services
18. MarketResearch.com
19. IHOP
20. Securitycatalyst.com
21. OSI Model(Open Systems Interconnection) by ISO(International Organisation for Standardization)
22. ` + showInlineLink("https://www.geeksforgeeks.org/open-systems-interconnection-model-osi/","OSI Geeks for geeks") + `
23. ` + showInlineLink("https://www.tutorialspoint.com/dsl/dsl_basics.htm", "DSL basics") + `
24. TCP/IP model
25. POTS(Plain Old Telephone Service) line
26. ANSI (American National Standards Institute) - previously Bell labs and AT&T
27. ADSL (Asymmetric DSL)
28. DSLAM (DSL Access Multiplexers) - keep upgrading to next generation
29. Asynchronous Transfer Mode (ATM)
30. X.25 data packet - AO/DI(Always on/Dynamic ISBN)
31. Reference Points in ISDN
32. Customer Premises Equipment (CPE)
33. NT1 (Network Termination Type 1 equipment) - Eg - personal router
34. NT2 (Network Termination Type 2 equipment) - Eg - ISP society box
35. TA (Terminal adapter) - Eg - ISP external building
36. Point R interface - non-ISDN devices(TE2) and TA - translation
37. Point S interface - ISDN device(TE1) and (TA or NT2 ) - customer wire S/T
38. Point T interface - NT2 and NT1 - modem
39. S/T
40. TE (Terminal equipment)
41. Private branch exchange(PBX)
42. Key Telephone System(KTS)
43. Frame relay
44. Pulse code modulation(G.711 encoding)
45. Point U interface - Exchange and Network Termination Unit NT1/NT2 to LT(Line termination)
46. Q.931 - Digital Subscriber Signalling System No. 1 - calling
47. H.320 standard for audio and video coding
48. G.728 CELP(Code excited linear prediction) - Speech coding
49. DCT (Discrete Cosine Transform)
50. H.261 - video coding is H.26x, H.263(video compression)
51. BSNL (Bharat Sanchar Nigam Limited)
52. VDSL (very high speed DSL - eg G.992)
53. Digital Fax Modems
54. Private Line Modem
55. Advanced Metering Infrastructure(AMI) implementation
56. 2B1Q(2 Binary 1 Quaternary)
57. Echo cancellation
58. QAM (Quadrature Amplitude and Phase Modulation)
59. CAP (Carrierless Amplitude Phase modulation) - HSDL(High bitrate digital subscriber line DSL)
60. DMT (Discrete MultiTone)
61. European Telecommunication Standards Institute (ETSI)
62. Hilbert transform - Cauchy
63. Pulse Amplitude Modulation (PAM)
64. Frequency Duplication Multiplexing(FDM)
65. Frequency Division Duplexing (FDD)
66. DSL Home and DSL Forum
67. Residential gateways (RG)
68. IPTV (Internet Protocol TeleVision)
69. DSL Home remote management protocol (TR-69)
TR069
70. STB devices (Set Top Box)
71. Technical Report (TR) eg - TR-122
72. WT-124 Functional Requirements for Broadband Residential Gateway Devices
73. xPON (Passive Optical Network with Extended Reach)
74. PON (Passive Optical Network)
75. Optical Line Terminal(OLT)
76. TDMA (Time Division Multiple Access)
77. GPON (Gigabit PON) G.987
78. GEM (GPON Encapsulation Method)
79. IEEE Ethernet PON 802.3ah-2004
80. Wavelength Division Multiplexers(WDM)
81. Truck roll
82. Network Attached Storage (NAS)
83. xDSL (extended reach)
84. PVC(Permanent Virtual Circuit)
85. Auto Configuration Server
86. Captive portal
87. IEEE 802.1x Port Network Based Access Control
88. Opex (Operating Expenses)
89. Simple Network Management Protocol (SNMP)
90. DHCP (Dynamic Host Configuration Protocol)
91. Simple Object Access Protocol (SOAP)
92. RPC - Remote Procedure Calls
93. STUN - Simple Traversal of User Datagram Protocol (UDP)
Through Network Address Translators (NATs)
94. Management Information Bases (MIBs)
95. NAT (Network Address Translation) - local(private) IP to global public IP address
96. CPE WAN Management Protocal (CWMP for TR069)
97. Data Over Cable Service Interface Specification(DOCSIS)
98. ITU-T SG16 Q21, HGI, DVB, ATIS IIF
99. SONET (Synchronous Optical Network) fiber optic networks
100. Optical carrier transmission rates
101. OC-1, OC-3(aka STS3), OC-12, OC1 is 51.84Megabit/s, OC3 is 3x, OC12 is 12x
102. STS-1 and STS-3 (Synchronous Transport Signal)
103. SDH (Synchronous Digital Hierarchy)
104. STM (Synchronous Transport Module) - protocol for LED signal over fiber optic
105. STM1 - equivalent to OC-3, STM3 equivalent to OC12 0.5Gigabits/sec
106. 40G SONET - WAN networks 40Gigabits/sec, 100G SONET - backbone, STM256
107. PDH networks (Plesiochronous Digital hierarchy)
108. ILEC (Incumbent Local Exchange Carrier) vs CLEC(Competitive)
109. Public Telephone Operators (PTO)
110. Ethernet over Twisted Pair (10BaseT)
111. 8P8C ethernet physical layer, Cat-3 to Cat-8, 40GBaseT(40Gigabits/sec)
112. PLCA (Phy-level Collision Avoidance)
113. Backhaul services - Between the backbone and subnetworks
114. IEEE 1394 Firewire (serial bus - Cat-5 and above)
115. PCI (Peripheral Component Interconnect Express) PCIe motherboard interface
116. Registered jack (RJ11, RJ14, RJ25)
117. Multicast downstream recognition, Network Bridge, Bridged Parameters
118. Frame Relay Access Devices (FRAD)
119. DSU / CSU (Data Service Unit / Channel Service Unit)
120. DSL modem - Layer 1 and 2 management statistics, Layer 3 packet count and statistics
121. IAD (Integrated Access Device) - aggregates multiple to a single link
122. POTS Splitters and Microfilters - external power supply and essential voice service in power failure
123. Services Reference Schema based DSL
124. MTBF - Mean Time Between Failures
125. Low pass microfilters
126. Network Interface Device (NID) - demarcation point (aka NIU, TNI, SNI, TNB, NTD)
127. SNR - Signal to Noise ratio
128. TCM-ISDN - Time compression multiplexed ISDN
129. PSD masks - Power Spectral Density Masks
130. NSC - number of sub carriers
131. G.992 G.DMT
132. ANSI T1.413 Issue 2
133. RADSL - Adaptive Rate DSL for Windows media, real media compressed video over DSL
134. ANSI TR59 RADSL standard
135. IDSL is IDSN DSL
136. SOHO - Small Office and Residential Home
137. SDSL - Symmetric DSL
138. G.lite - fast retrain
139. UAWD - Universal ADSL Working Group
140. Reach DSL - Multiple Virtual Lines (MVL) and jammers - increased reach to 30,000 feet
141. Digital Signal Processors (DSPs)
142. 6000 metres reach with 20kf AWG(American Wire Gauge)
143. ADSL2+ benefits
144. Trellis coding
145. Reed solomon coding
146. HDLC - High-level Data Link Control
147. Sliding Window Protocols and bit stuffing
148. OAM protocol (Ethernet Operations, Administration, and Maintenance) - performance monitoring
149. PMD enhancement - training, performance, power, dynamic (PMD - Photonic Mixer device)
150. RF1 measurement - RF1 near field probes for E-fields and magnetic fields from 30MHz to 3GHz - tone blackout
151. ATU-C with L2 low power state and L3 idle state
152. Seamless Rate Adaptation(SRA) (bi, gi, Bpn, Lp, L)
153. Dynamic Rate Repartitioning(DRR) (bi, gi, Bpn, Lp)
154. Bit swapping(BS) (bi, gi)
155. OLR - (On-Line Reconfiguration)
156. Maximum Margin Algorithm (OLR)
157. ADSL/ADSL2 ATU-C TX Spectrum
158. G.Span
159. BIS and BIS+(nickname for bit i signal in ADSL2)
160. Distance learning and Telemedicine
161. Distance television broadcasting
162. ANSI S1.4 of T1
163. Webhosting, Multiple VoD, HDTV, telecommuting
164. DBS (Direct Broadcasting Satellite)
165. Full Service Access Network (FSAN)
166. VToA (Voice over ATM)
167. Fiber to the trade (FTTTEx)
168. Fiber to the neighbourhood (FTTN)
169. FTTCab (Fiber to the Cabinet)
170. FTTB (Fiber to building/business/basement
171. FTTP (Fiber to the Premise)
172. FTTX - Fiber to the x - contains other categories
173. FTTE - Fiber to the edge
174. FTTH - Fiber to the home
175. FTTD - Fiber to the desk/desktop/door
176. NGDLC - Next Generation Digital Loop Carrier - NG-DLC
177. MDU (multi site unit or multi dwelling unit)
178. NTT (Nippon Telegraph and Telephone)
179. UCOM (Universal Communications) founded 2007
180. KDDI Corporation (Japan) DDI Cellular group
181. PCCW Corporation (Hong Kong) Pacific Century Premium Developments Limited
182. VDSL2 
183. Bin number * Tone spacing = Bin frequency
184. FEXT (Far End Crosstalk)
185. Downstream Transmit Power
186. DS1 (Switch Point delay time of SP1 hysterisis mode and FH2 FL2 window mode) of PSD level raise
187. Central Exchange (CO)
`);
},"2024-05-24 04:34:00","2024-05-24 04:34:00","00012. ","digital-subscriber-line"],
["Internet basics",function() {

return  `

<div class="heading2">How does the Internet work?</div><hr/>

` +  createLinkBlock("How the internet works in 5 minutes-Aaron Titus with Karissa Phelps", "https://www.youtube.com/watch?v=7_LPdttKXPc", `
1. Servers and ISP send messages and files via their IP address to a client computer.
2. An example of client computer using an ISP to receive data from Servers is DSL(Digital Subscriber Line).
` + showInlineLink("https://www.tutorialspoint.com/dsl/index.htm", "DSL") + `
3. An ISP can also be a Server of a domain name
4. Information is sent in packets
5. IP addresses and routers send packets to correct destination
6. 10 to 15 routers per packet sent and received
7. Every packet is wrapped in several layers - 1st layer is IP address of client computer
8. Every router adds it's own IP address and layer to a packet till it reaches it's destination.
9. Server responses also obey the reverse of this rule. Every server response that reaches a router,
unwraps a layer(as opposed to adding a layer from client packet to server) till it reaches the client computer correctly.
`) + showLink(`?page=digital-subscriber-line`, `DSL page`) + createBlock("URL", `
Uniform Resource Locator (Tim Berners Lee RFC 1738)
Alias of URL - Web address, link, address, Universal Document Identifiers, URI
URI - Uniform Resource Identifier

URL exists in the context of HTTP
HTTP has various protocols like HTTP1 HTTP2
HTTP/2 only modifies HTTP1 and 1.1 in framing(formatting) and transported between client and server.
The objectives of HTTP/2 are to reduce latency by enabling full request and response multiplexing, 
minimize protocol overhead via efficient compression (like Gzip) of HTTP header fields and add support for
request prioritization and server push(preemptive sending to client).

HTTPS and other protocols also exist for communication

Scheme is the URL fragment upto the domain name
Eg - http://example.com has scheme http
http://www.example.com is different from http://example.com

Domain name is a hierarchical sequence of names(labels) separated by periods(dots) and ending with an extension.

URL can also be used for FTP(file transfer) and SMTP(email) and other applications like database access(JDBC)
URL has a living standard

`) + showLink("https://url.spec.whatwg.org/", "URL Living standard")  + showLink("https://en.wikipedia.org/wiki/URL", "URL Wiki") + `
Consider a URL http://example.com/index.html
URL fragments can be 
protocol - http
hostname - example.com or www.example.com
filename - index.html

URI - scheme ":" ["//" authority] path ["?" query] ["#" fragment]

IANA (International Assigned Numbers Authority)

Some scheme are http, https, ftp, mailto, file, data, irc

Authority can optionally have @username:password and :port_number

Also CGI(Common Gateway Interface) can be used for URL

Consider http://www.example.com/questions/3361/my-document
"questions" is first part of path(Executable program) and pathinfo refers to "/3361/my-document" which is passed to program "questions"
A clean url does not have a query, it only has a slug like "3361/my-document"

An IRI is considered Internationalized Resource Identifier that only uses Unicode characters
The domain in an IRI is called IDN Internationalized Domain Name
Punycode is used by the Domain Name System (DNS) for converting say chinese to english xn-- the double dashes signify the characters were originally non-ASCII.

A PRL or PRURL is Protocol Relative URL which uses the current protocol of client by default eg- //example.com

Qname - Qualified Name - a fully qualified name in an XML document of an element, attribute or identifier
Eg- x:p, doc in xml document are Qnames
<?xml version="1.0"?>
<doc xmlns:x="https://example.com/ns/foo">
  <x:p/>
</doc>

` + `

HTTP is unencrypted 
HTTPS represents HTTP over a secure TLS channel
TLS is also known as SSL(Secure Sockets Layer)
Owasp contain some extra information over certain protocols
` + showInlineLink("https://cheatsheetseries.owasp.org/cheatsheets/Transport_Layer_Security_Cheat_Sheet.html", "OWASP cheatsheet TLS")
 + `

HTTP is textual(plaintext) and stateless
REST is REpresentational State Transfer that provides constraints of software architecture that allow efficient, reliable and scalable distributed systems.


HTTP belongs to the application layer of OSI model

The complete docs of HTTP on MDN are

` + showLink("https://developer.mozilla.org/en-US/docs/Web/HTTP", "HTTP MDN")
 + createBlock(`Glossary`, `
1. PURL Persistant URL vs Permalink
2. CURIE Compact URI -  considered a datatype that can be used to shorten URL eg- [isbn:0393315703] or [wikipedia:Biome]
3. Typosquatting
4. Url normalization
5. Namespace
`);
},"2024-05-15 02:16:25","2024-05-17 02:16:25","00013. ","internet-basics"],
["JS Intro",function() {

return createBlock(`Intro`, `
1. JS started in Netscape navigator
2. Computer programs require opcodes from an instruction set and the values the opcodes need to execute
3. Web assembly is incredibly fast on microprocessors using registers(almost the speed of elecron frequency/microprocessor frequency)
As known microprocessors are simply chips of gates designed to executed Op codes with many pins for input and control signals.
4. Javascript provides syntax which under the hood is macro for web assembly code. 
5. JS also abstracts the platform and operating system details to the browser implementation for a device.
6. 2000 - 2010 Javascript version 1 - 3
7. 2010 released a minor version 4 that drafted the major changes
8. 2015 ES5 and ES6 implemented major changes
9. 2023 ES continues to add features with backward compatibility for most software written till now
10. MongoDB and CouchDB use Javascript as scripting and query language
11. Node.js provides an environment to execute JS outside scope of browser (spidermonkey, chromium and now retired Edge/IE engine)
12. Eloquent js chapters till chapter 12 are about JS language. 
13. Next 7 chapters till 19th chapter are about web browser.
14. Last 2 chapters are about Node.js standalone environment.
15. Project 1 is building a robot. Project 2 is a DSL. Project 3 is a game on browser. Project 4 is painting on browser.
`);
},"2024-05-27 14:25:00","2024-05-27 14:25:00","00014. ","js-intro"],
["JS Language Basics",function() {

return createBlock(`Values`, `
1. The basic value type is bits of information. (bitstream)
2. Values can be stored in volatile memory like RAM(approx 100 billion bits or around 10Gigabytes) on a home computer.
3. Hard disk has a few orders of magnitude more. 
4. Variables can have type, variable are not all needed at once in RAM. So we can store them in hard disk on excess.
5. JS uses 64 bits for a number. 2^65 -1 is the max number
6. Chunks are created to partition the bits and each chunk can store a value and have a variable name.
7. While older computers used 8 bit or 16 bit causing overflow error, it is not in JS with 64 bits for number.
8. Bigger numbers get shortened to 1.237230264032737e+191 for example for 192 digit number.
9. Since every 10 bits of 2 lead to x1024, 64 bits would be in the order of 10^20 or a 100 quintillion (quintillion = 10 to power 18)
10. Considering sign and decimal point 15 decimal digits as whole number can be stored in JS (10 quadrillion)
11. Scientific notation can be used to store number in JS. var number = 2.998e8
12. Arithmetic uses operators. Operators have operator "precedence" for the BODMAS rules. 
13. Special numbers Infinity and -Infinity. NaN is also a special number.
14. Strings are created with single quote, double quote and backticks. 
15. Escape characters in strings for newline and escaping quotation marks.
16. Unicode standard models the strings to bits.
17. There is complication for string representation.
18. JS uses 16 bits for string representation of character. But unicode uses almost 32 bits. 
19. And emoji take up 2 characters (which would make it 64 bits)
20. Backtick strings are called 'template literals' and can also embed other values using dollar curly brackets.
21. \$\{\} computes a string and includes it in that position in the string
22. unary operators - typeof 4.5 is a valid syntax, that doesn't need brackets for applying typeof to a value like 4.5
23. the minus sign is both a binary operator and unary operator. 10 - 8 here it is binary. -8 here it is unary
24. Boolean type - comparison can produce boolean as well. 
25. Comparison in string "Z" < "a" is true as capital letters are "less" than lowercase.
26. Only NaN == NaN is false where it does not equal itself as it denotes a nonsensical calculation to another nonsense.
27. Logical operators like && || and ! for the "and", "or", "not". 
28. and = && is an invalid variable assignment unlike Haskell. In javascript this throws a SyntaxError
29. JS is surprising close to C++, it allows web assembly for hardware device implementations and tries to be flexible.
30. JS is not flexible enough out of the box without mod to support complete rewrite of syntax unlike haskell which ships with it's own OS to support monad-lisp clojures but it has HOF.
31. Using as litte parenthesis as necessary. && has least precedence in operator so that 1 + 1 == 2 && 10 * 10 > 50 works as expected
32. Ternary Operators work on 3 or more operands, true ? 1 : 2 is ternary operator
33. ?: is the only ternary(conditional) operator in javascript and it uses 2 symbols to disallow implicit reordering LTR -> RTL and reversal.
34. null and undefined denote absence of meaningful value and are empty values. They are to be treated as interchangeable for good design.
35. odd things in js relating automatic type conversion 
36. 8*null -> 0 ; "5" - 1 -> 4 ; "5" + 1 -> "51" ; "five" * 2 -> NaN ; false == 0 -> true ;
37. Type coercion rules happen when mismatch of type occurs to silently fix type problem for reliability in dynamic nature.
38. Null and undefined only produce true when both sides are null or undefined
39. null == 0 -> false ; null == undefined -> true ;
40. "" == false -> true;
41. To prevent accidental type conversions check for 3 things in comparison - false, null, (intended type like string, object etc)
42. null || false || "user" can prevent problems. var textDisplayed =  isReady == null || isReady == false || "user";
43. "Agnes" || "user" -> Agnes ;  null || "user" -> user ; is way of setting default value of variable.
44. There are 3 short circuit operators || && and ??
45. All short circuit operators evaluate left before lazy evaluation of right hand side.
46. || operator evaluates left to true otherwise returns the right hand side. It is used for default value.
47. 0, NaN and "" evaluate to false. Apart from these four, null or undefined evaluates to false only if it is not compared(careful).
48. ?? operators only evaluates null or undefined to false. It does not evaluate 0, NaN, "" to false
49. && operator returns the left hand side if it is false. Otherwise the right is lazy evaluated and return
50. Conditional operator is also short circuit evaluated. Code that is in wrong block is not evaluated.
51. Summary - Javascript features for a pocket calculator
52. Meaningful prose of javascript requires side effects other than nouns and sentence fragments.
53. A fragment of code that produces a value is an expression. Every value written literally is also an expression Eg- 22, "some"
54. Any parenthesis also contain expressions and logical operators are also surrounded by expressions
55. Expressions can nest other expressions recursively
56. Statements are demarcated by semicolons ; 
57. A program is defined as 1 or more statements. So 1; is technically a program which does nothing but has one statement.
58. The definition of side effects in JS - any state change which affects the statements after it or prints to screen
59. Side effects are not only mutation of state, all programs are build on side effects in Object oriented languages
60. How does a program keep internal state? Bindings. Also known as variables.
61. Definition of a binding creates a name that can be reused and holds value
62. Bindings are more like pointers than boxes. They can change value similar to tentacles grabbing objects
63. Keywords for bindings are let, var, const. Let is new, var is different and pre-2015 JS.
64. Binding or variable names can include underscore and dollar symbol but no other special symbols.
65. Variable names also cannot include keywords(in use) and reserved words(for future use)
66. The list of reserved words and keywords include (for example globalThis is missing)
 break case catch class const continue debugger default
 delete do else enum export extends false finally for
 function if implements import interface in instanceof let
 new package private protected public return static super
 switch this throw true try typeof var void while with yield
67. The environment exists at any time containing the bindings and other preexisting functions for interacting with
in case of browser example user keyboard and mouse input and many other things.
68. A lot of values are typed function. Function defines a piece of program wrapped in a value
69. These values can be applied to run the code Eg prompt("Enter passcode")
70. Invoking, calling, applying are aliases for executing a function
71. Parenthesis can be added after the function block definition or value name to run it.
72. Arguments or parameters refer to the values given to functions
73. console.log writes it's arguments to a text output device like a hidden section of browser or terminal in nodejs
74. Bindings cannot have the period or . character. Console.log uses the log property of console object
75. Console shortcut in Mac is Command Option I, F12 on windows and mac, otherwise using developer tools
76. Function returning value is also known as producing a value. Producing a value is a side effect.
77. The result of prompt is a string and can be converted using Number(prompt("Enter a number"))
78. Straight line control flow differs from conditional execution
79. if keyword allows to skip a block of code
80. Number(variable) returns NaN that can be checked with Number.isNaN()
81. Statements in braces { and } are known as a block. Putting semicolon after blocks can prevent compiler from misindentifying.
82. Chaining if else statements create a branch which executes on the condition similar to switch
83. if () {} else if () {} else if {}
84. while keyword creates a loop
85. ** operator is an exponentiation operator 2**5 = 32 which is the square root of 1024 which is useful in crypto
86. do {} while(); and while() {}; are example of do while
87. A loop can prevent invalid input permanently.
88. Technically indentation is not necessary in JS. The entire program can be in a single line.
89. The rule is add spaces, newlines and certain indentation spaces/tabs(preferable converted to spaces) for every open block.
90. For loops is a more comprehensive form of the while loop
91. for(initialize;check;update) {}; Remember to not add a ; after the increment i=i+1
92. For loops are clearer than while, except they add a scope on local and global variable of the block and persistence.
93. For initialize check and update blocks can be left empty because we have break;
94. break as a pointer to check condition of loop can stop the loop without conditional check
95. Continue is a pointer that skips to the update block. Break and continue are control flow modifiers
96. An infinite loop is when there is no stop condition. 
97. % is also known as the remainder operator or mod operator.
98. Combination of loops and % is useful in encrypt (since the numerator can be saved to secretly decrypt :P )
99. Certain shortening of update block in loop can be done with += -= *= ++ -- operators.
100. A switch statement is also known as a dispatcher.
101. Values can be dispatched on switch(value) {case "": break; default: break;} 
102. Every case dispatches a block of code
103. A case without a break can result in an intended fall through to promote DRY code.
104. JS uses camelCase. Alternatives like underscore(snake case), CaptialCase are not for JS bindings.
105. Constants are also in camelCase. true false NaN. Sometimes constants start with a capital letter.
106. Interfaces and classes start with capital letter. Number() String()
107. Technically constructors start with capital letter. Number() is a constructor.
108. Comments are ignored by the compiler. 
109. // is a comment 
110. /*
This is a multiline comment chunk that is ignored 
*/
111. Tracking state of a program involves binding aka variables aka values.
112. Environment is the list of defined bindings.
113. Encapsulation of a piece of program is through special values(bindings) called functions
114. An expression may produce a value( may cause side effects) for a program of desired effect.
115. FizzBuzz (3 5 15) for 1 to 100
116. Chessboard nxn board generation with alternating black(#) and white( ) squares
117. Functions allow us to wrap a piece of program in a value.
118. Function uses are to give names to subprograms, reuse subprograms, isolate subprograms from each other and structure larger programs.
119. Creating a vocabulary is possible with functions
120. When looking at vocubulary it is important to precisely define, be flexible and avoid excessive verbosity
121. Functions can have a single parameters, multiple parameters or no parameters.
122. A function can either return a value, or introduce a side effect such as globalThis.console.log = value
123. return without a value will return undefined
124. A return always stops the function execution after it and returns the value
125. There are no rules on the type of value returned so a function could sometimes return an int and the same function sometimes return a string
126. Since javascript is simply facilitating assembly language it does not impose rules or try to be bulky by default
127. Parameters of a function are similar to regular variables/bindings but their values are given by the caller of the function
128. Each binding has a scope in which it is visible.
129. global referes to the binding scope of all variables outside any function, block or module
130. local refers to binding scope of function parameters or bindings/variables inside a function
131. Every time the function is called a new instance of the binding is created
132. Instance refers to the creation of object from a defined template where every object is unique
133. global and local scope are also known as global bindings and local bindings
134. Every function has its own environment that provides isolation and has rules since every caller of function creates a new function environment
135. Functions that don't use global bindings in them are different from ones that only use local bindings in terms of parallelism
136. Let and const create local bindings.
137. In pre-2015 js var creates global bindings even inside functions if declared although preferably should be var in global scope outside function
138. Scope can look out of their scope but not in reverse. 
139. Global scope can't see inside function. 
140. Local scope can see global scope.
141. If there is overlap of names only the innermost binding is visible on priority
142. Functions can nest in each other creating degrees of locality inside them
143. Lexical scoping is known as each local scope can see the local scopes that contain it.
144. Since global contains everything, every scope can see global.
145. Binding visibility have various approaches and JS only uses the lexical scoping approach.
146. Approaches to passing functions as parameters involve pass by value and pass by reference and other details
147. The function is not the same as it's name. function and function() are distinctly different and can be used in expressions
148. Function declaration is done with function keyword. 
149. function name(param1) {...} is valid 
150. Function declarations are not part of the top to bottom flow of control.
151. Functions are hoisted to the top. This is useful as it gives freedom to write code with call first and definitions later
152. Arrow notation can be used to create arrow functions. => instead of function keyword shortens this.
153. When there is only one parameter the parenthesis can be omitted
154. const name = (param1, param2) => {...} is valid
155. const name = param1 => {...} is valid
156. The arrow points from the parameters to the function body
157. Arrow functions help to make code less verbose. They were added in 2015 and later versions.
158. The call stack keeps context of the calls and which scope has control of the program currently
159. Everytime a function is called the current context is added to the top of the stack
160. Everytime a function returns it pops the top of the stack and uses that context to continue execution
161. Stack is related to memory. Out of memory and exceeded recursion depth errors are examples of too big stack
162. Infinite loops are handled using the stack
163. Optional arguments are allowed after the necessary parameters are provided. 
164. There is no limit on any function on how many arguments can be provided during the function call.
165. Arguments generally refer to the function call and parameters generally refer to function definition
166. Extra arguments are ignored in JS
167. If less than required arguments are passed, the rest are by default passed undefined
168. This helps code get executed even if it is incorrect
169. Code must be checked for number and correctness of position of arguments to their parameters
170. This also means function definition may assume variable arguments and undefined to function overload in same block.
171. Functions can have default parameters with = sign
172. function name(param1, param2=1) {...} is valid with default value 1 instead of undefined
173. Functions can also get all the arguments passed to it irrespective of their count
174. Closure deals with scope of the function. 
175. Since every instance of function call creates a new local scope, closure deals with the properties of these environments
176. Different function calls of the same function don't affect each others bindings
177. Wrapping a value is a good test of the integrity of function closure
178. function wrapValueTest(n) {return () => n;};
179. const wrap1 = wrapValueTest(1);
180. const wrap2 = wrapValueTest(2);
181. console.log(wrap1(), wrap2());
182. This gives the expected output and can test the closure
183. Use of functions in creative ways with closure involves playing with their function signatures for example
184. function multiplier(n) {return number => number * factor};
185. const double = multiplier(2);
186. console.log(double(50)); gives output 100
187. function values can be divided into their code and their environment
188. The function body sees the context in which it was created not the context of where it was called.
189. A function that calls itself is called recursive.
190. Recursion is fine as long as the function does not overflow the stack.
191. Recursion helps to define functions more clearly.
192. Recursion is also closer to how mathematicians use algebra but it is a hack rather than true recursion/identity.
193. Using recursion has a performance cost, recursion is slower or faster in instances than a simple for loop.
194. Recursion is always slower as compared to imperatively defining something in a single block by an order of magnitude.
195. Speed vs elegance represents itself in recursion as a dilemma between human-friendliness and machine-friendliness
196. Any function can be faster by making it bigger and more convoluted
197. Handling complexity is sometimes necessary though as topics can get very complicated to read and understand.
198. Recursion can simplify things to help reduce complexity on priority which is how it has to be balanced.
199. Efficiency can in certain scenarios be distracting.
200. Complexity reduction can be priority in scenarios where it is paralysing
201. Recursion once working correctly can always be rewritten later for performance
202. Branch exploration using recursion is where recursion can shine in performance, memory management and simplicity
203. Recursion by itself does not guarantee the simplest, shortest or most optimal solution.
204. One option for recursion is to define a function with switch dispatcher, that returns null on failure and branches with ?? operator
205. Recursion often also has a variable that returns history of the branch which can also be used to visualize the branches.
206 . Recursion simplified - null and failure auto termination, history and recursion visualization with indent, branch step with some calculation
207. There are two natural ways functions grow in verbosity among many more unnatural ways a function can be created.
208. The first way growing function verbosity occurs, when I find myself writing increasingly similar functions
209. Reasons why code should not be excessively verbose?
210. More code means more space for mistake and bugs, more to read for myself and others to understand.
211. So repeated functionality finds a good function name and gets stored
212. The second way is to start using an undefined function to write the usage logic of the function before definition.
213. By using the TDD second way, only the function name is defined and it's usage defined helps define the function later.
214. This way the encapsulation(wrap) and SOLID principles are better and usage docs and tests read great!
215. The second approach has a broad whole specific intent in place before the function is defined which saves time later.
216. What is a good indicator of how clear a concept is that I'm trying to wrap? - Writing good function name and TDD
217. First step of simplifying is to write a description using words and multiple sentences of the function I am trying to define.
218. The optional step is to have a bad implementation ready to be refactored.
219. The second step is to look at extensibility of the code and possible directions it may take
220. The third step is to have a function name that is overly long by combining words(an awkward name) that does the job
221. The fourth and final step is to pick a single concept the function is trying to do and breaking down and decoupling the awkward function
222. A good trick for functions that return templates is to use string templates(f-strings equivalent in python) instead of making functions that return strings
223. A function must return a side effect that modifies the state of the program
224. Don't try to have functions that don't induce side effects and return too often - prematurely optimization of code
225. How smart and versatile should our function be? Reuse in other scenarios as a module consideration
226. Overlap between a small section of two modules each having their own author that do the same thing is possible
227. How bug free and secure is our implementation of the function in module?
228. Being too busy writing code that I never use is a sign of writing general frameworks for every functionality
229. Resist the urge to write too general code, for potential reuse, it will drown the important functionality in a sea of irrelevance.
230. See zeroPad example for template string trick to reduce function verbosity of functions that return template strings
231. Also see vulnerability of f-string/template string - exploit and injection attack on f-string
232. Sanitize all template strings from client at backend that are used in API/interface(dollar curly brackets in JS on backticks)
233. Functions can either have return value, side effects or both
234. Combinatory functions require return values and are more common in OOP for their reuse value
235. It is useful to have pure functions that don't produce side effects for return value combinatory functions
236. Pure functions also restrict reading global values that are not in parameters
237. This way the pure function can always have same output on same input which is a pleasant property for debugging
238. Pure functions can be substituted by their return value for an input without affecting the program
239. Non pure functions require more scaffolding to test and debug
240. It is efficient to use side effects
241. Using a wrapper around console.log for example instead of using it directly can help track every command that comes to it
242. Organisation of a program involves functions to group code into pieces that have a specific task
243. Function body often contains a checks part then an execution part
244. Numbers, booleans and strings are the atoms from which datastructures are built.
245. Objects allow grouping of values including other objects to build complex structures
246. The weresquirrel is a story for building correlation engine between a simple journal of the day and whether it led to werewolf transformation
247. Data structures will involve a real work practical example wherever mentioned Jacques or weresquirrel to thread examples and group them.
248. Happy that Jacques does not have lycanthropy, he wanted to tabulate his daily activities in a journal to find root cause of transformation
249. Data structures can store this journal information in a variety of ways
250. To work with a chunk of data, it has to be represented in memory
251. Now strings in JS do not have a length limit (around a billion character given practical tests on a browser in 2020s)
252. Javascript though has a better structure called array that will allow easier access than using a string and accessing elements in string
253. Array syntax is square brackets using commas to seperate the elements
254. Array element access also uses the square brackets notation
255. JS uses 0 based counting for array indexes
256. Using 0 index, the index becomes a skip counter. 0 means no skip first element.
257. Expressions like myString.length or Math.max access a property of some value
258. Binding vs value. Values are native to JS and bindings are the variables created to store these values
259. What are "properties" of values like length and max?
260. The Math object is a collection of mathematics related constants and functions
261. Math object is unlike the constructor with capital first letter like Number() or String() mentioned before 
262. All objects don't give error when a non existant property is called
263. The only exceptions are undefined and null which throw an Error if a property is called
264. String.hello returns undefined
265. undefined.hello returns TypeError: null/undefined has no properties
266. Properties can be accessed in 2 ways - with a dot and with square brackets
267. Expressions inside square brackets are evaluated to give a value to use for accessing properties
268. Using dot takes the literal string provided and does not evaluate
269. some.x and some[x] are very different. Not to be confused with some.x and some["x"] and some[x]
270. Why use square notation over dot notation?
271. Square notation allows use of bindings
272. Square notation allows spaces and other forbidden characters in dot notation
273. Square brackets are overloaded to mean 2 things - arrays definition and array element access
274. Property names must be strings? - Does JS internally convert non string keys to strings?
275. Dot notation requires that the string start with a letter or underscore, and contain only A-Za-Z0-9 and _(underscore)
276. Since dot notation disallows numbers we have to use square brackets for arrays
277. Arrays have properties names that are numbers
278. Arrays are stored as objects with properties and the properties names are the indexes
279. myArray[0] is the same as myArray["0"]
280. arrays also have a length property indicating the builtin functions provided by JS
281. How does the string.toUpperCase() access the string even though it is not passed as argument?
282. Pure vs impure functions in native JS methods
283. Methods of the value are special properties of the value that contain functions
284. arrays also have push() and pop() methods allowing them to be used as a stack
285. 
let myArray = [1, 2];
myArray.push(3);
console.log(myArray); 
// returns [1, 2, 3]
console.log(myArray.pop()); returns 3
console.log(myArray); returns [1, 2]
286. LIFO(Last In First Out) is the same as stack which uses push and pop
287. Values of type object are arbitrary collections of properties
288. One reason Objects are created is to simplify the function parameter signature to receive one single argument
289. Braces are used to create an expression that evaluates to the desired object
290. Valid binding names involves starting with letter or underscores and containing A-Za-Z0-9 and _(underscore)
291. let day1 = {squirrel: false, events:["work", "touched tree", "pizza", "running"]};
292. let descriptions = {work: "Went to work", "touched tree": "Touched a tree"};
293. Now work did not need string quotes as it was a valid binding name but "touched tree" needed string quotes
294. Now braces overloading is for 2 things - start of function body(which is grouping statements) and start of object creation
295. Starting function body with braces on newline helps certain compilers and simplifies compiler design
296. Braces are checked by compiler when arrow expression is involved 
297. n => {myObjectProperty: n} will not work because braces are ambiguous with function start(grouping statements) and object creation
298. n => {{myObjectProperty: n}}; will not work and since there is no return it will not return implicitly
299. n => {return {myObjectProperty: n}}; will work as intented
300. let n => 1; n(); will return 1 as expected implicitly returning 1 as braces were not used.
301. n => ({myObjectProperty: n}); will work as intented with parenthesis instead of return.
302. Braces are also known as curly brackets{}.
303. Brackets usually refer to square brackets[].
304. Parenthesis usually refer to round brackets().
305. Property bindings are similar to the tentacle model of bindings
306. Objects are the same as octopuses grasping values. Other bindings may mutate the values they are grasping.
307. delete is a unary operator that removes tentacle bindings or property bindings
308. anObject = {left: 1, right: 2};
309. delete anObject.left;
310. console.log(anObject);
311. // -> {right: 2}
312. It is uncommon but possible to use delete unary operator
313. Mutability of objects test
const a = {};
a.name="abc";
console.log(a);
// -> {"name": "abc"}
314. // now also console doesnt show name in quotes. so {name: "abc"} is what is shows.
315. This works to set properties on const objects. Const only binds the object not make it's properties immutable.
316. a = {newObject: 1} //this is not allowed a is const
317. It is advisable to add quotes anyway for consistency but valid binding names can be enforced by not using quotes which can be useful
318. A binary operator called "in" can check properties names on objects
319. Deleting a property with delete keyword also removes it's property name
320. If a property on object is set to undefined, it still leaves a property name behind.
321. console.log("right" in anObject); // -> true
322. delete anObject.left vs anObject.left = undefined
323. Object.keys(anObject); returns an object's property names
324. Object.assign(anObject, {center: 3}); will assign all the properties of object 2 to object 1
325. typeof [] returns an object
326. Arrays are object specialized to store sequence of things
327. Now jacques will store day1, day2, dayN as array called journal
328. let journal = [
  {events: ["work", "touched tree", "pizza", ...],
  squirrel
  },
...
];
329. Indentation inside arrays and objects can help readability. 
330. But it is not necessary and flat looks better and gives less problem in style on terminal.
331. Mutation of objects involves identity
332. "identity" of two objects may not be same as they point to similar object that each have their own life.
333. == operator compares by identity
334. == is a shallow operator. 
335. It is possible to write myself a deep comparison operator for JS(one of the exercises)
336. Object values can be modified
337. Strings booleans and numbers are immutable
338. Combining and deriving from immutable values is possible but the value can't be edited or modified.
339. let object1 ={};
let objectCopyByReference = object1;
let object2 = {};
console.log(object1==object2);
// -> false 
340. // they are not equal in identity and have separate lives
341. object1.name="abc";
console.log(objectCopyByReference);
// -> {name: "abc"}

342. The lycanthropes log description
343. let events = ["work", "touched tree"];
let squirrel = false;
console.log({events, squirrel})
344. // -> this returns the same as {events: events, squirrel: squirrel}
345. // -> {events: ["work", "touched tree"], squirrel: false}
346. If inside brace notation only a property name is provided without value the same binding name is used to give it's value
347. Using an array as data store and using imperative mutable functions for the data store
348. let journal = []; // we will rebind this to JOURNAL once all the events are added and make it immutable as data read only
function addEntry(events, squirrel) {
journal.push({events, squirrel});
};
349. After sufficient data points a correlation can be drawn using statistics on the journal
350. A statistical variable is not the same as a programming variable
351. Correlation is a measure of dependence between statistical variables
352. The first step for statistics is to have a set of measurements for each variable to be measured
353. In this case every event in events in the journal is a variable, that needs a measurement to make a set of measurements
354. Correlation is usually measured as a range between -1 and +1 between the variables
355. Zero correlation means the variables are not related
356. Positive 1 means the variables are perfectly correlated. Knowing one is same as knowing the other variable
357. Negative 1 means the variables are perfectly related as opposite. Knowing one is the same as inverting it to know the other
358. One simple way to measure correlation between boolean variables is to calculate the Phi Coefficient 
359. Phi Coefficient 𝜑
360. MATHEMATICAL ITALIC SMALL PHI
361. Unicode: U+1D711 &#1D711; &#x1D711; , UTF-8: F0 9D 9C 91 &#xF09D9C91;
362. The Phi Coefficient function input is a frequency table.
363. The frequency table construction details are to pair all variables to cover all combinations of variables as pairs, and then to count observed occurrences for the pairs.
364. The output of the phi coefficient function is a number between -1 and 1 for every pair
365. One of the pairs in the frequency table elements will always be the result variable(squirrel - true/false)
366. The frequency table will always be a 2x2 table with 4 element frequencies between the two boolean variables
367. For a frequency table called n, there are 4 elements n00, n01, n10, n11
368. The way to read it is n00 => the first 0 is always squirrel as false(0) or true(1), the second 0 is some variable as 0 or 1
369. There are also 4 summation variable n0. n1. n.0 and n.1 , where . represents don't care in logic, which sum the rows and columns of the frequency table
370. For example to compare phi between squirrel and pizza the frequency table n is described below
n00 n01
n10 n11
76 9 
4 1
371. 
n00 no squirrel no pizza false false 76 occurrences 
n01 no squirrel true pizza 9 occurrences
n10 squirrel no pizza 4 occurrences
n11 squirrel pizza 1 occurences
372. Now the summation variables are 
n0. is 76 + 9 = 85
n1. is 4 + 1 = 5
n.0 is 76 + 4 = 80
n.1 is 9 + 1 = 10

373. phi is computed as 𝜑 = (n11*n00 - n10*n01)/sqrt(n1.*n0.*n.0*n.1)
374. phi computation numerator is multiply correlation 11 00 and subtract non correlation n10 n01
375. phi numerator is 76 - 36 = 40
376. phi computation denominator is sqrt multiply normalization factor for range -1 to 1
377. phi denominator for perfect correlation 1 and -1 and for no correlation 0 will be left as exercise to understand denominator
378. phi denominator is sqrt(85*5*80*10) = sqrt(340,000) = 100 * sqrt(34) = 583.09
379. phi value is 0.0686 which is tiny about a 6.86% positive correlation

380. For representing this in JS the structure chosen here is a 4x1 array for n, the frequency table [76, 9, 4, 1]
381. Flat array is always preferred over nested arrays, even if the dimensions of matrix is quite large in imperative programming
382. Imperative programming also converts binary of boolean flattened arrays to decimal to use as array index access
383. For example n[1][0] in nested array will be 10 in binary which is 2 in decimal so n[2] in flattened array is equivalent to n[1][0]

384. By not creating any variable bindings for n00 to n11 and n0. to n.1 phi will look as follows
385. function phi(table) {
return (table[3] * table[0] - table[2]*table[1]) / 
Math.sqrt((table[2] + table[3]) *
(table[0] + table[1])*
(table[1] + table[3])*
(table[0] + table[2]));
}

386. console.log(phi([76, 9, 4, 1]));
387. // -> 0.0685
388. This way we have nothing in memory bloating it except the phi result for performance
389. We could run it on ram and display output on screen and write it to paper without having ROM or hdd or ssd to reduce the computer architecture requirement.

390. Now we need to create a function that generates the frequency table n from the journal for Jacques

391. console.log(tableFor("pizza", JOURNAL));
392. // -> [76, 9, 4, 1]

393. Every loop increases the frequency of exactly one index out of 4 in table by 1

394. function tableFor(event, journal) {
let table = [0, 0, 0, 0];
for (let i=0; i<journal.length; i++) {
let entry = journal[i], index=0;
if (entry.events.includes(event)) index += 1;
if (entry.squirrel) index += 2;
table[index] += 1;
}
return table;
};

395. This is read as if false(squirrel) false(event) then index 0
If true true then index 3
If true false then index 2
If false true then index 1
The first if is the second true/false
The second if is the first true/false as the order is irrelevant for switch case

396. Now we loop over all the events like pizza to get all the correlations and see if anything stands out

397. for (let i=0; i<JOURNAL.length; i++) {
let entry = JOURNAL[i]
// tableFor then phi. Will complete after discussing more syntax for loops 
}

398. A simpler way of for loops for an array iteration involves not defining index

399. for (let entry of journal) {...}

400. This is called let element of array syntax of for loop for array iteration. It will be discussed later.

401. console.log(journalEvents(JOURNAL));
402. // -> ["pizza", "carrot", "touched tree", ...] gives the list of events

403. function journalEvents(journal) {
let events = [];
for (let entry of journal) {
for (let event of entry.events) {
if (!events.includes(event)) {
events.push(event); 
//this can be much simpler with map reduce or yield syntax to remove nested for loop
}
}
}
};

404. for (let event of journalEvents(JOURNAL)) {
console.log(templateStr'event: templateBind-phi(templateBind-tableFor(event, JOURNAl))');
// -> carrot: 0.140
// -> pizza: 0.068 ...
}

405. A filter can be simply implemented using if statement on for loop for correlation greater than 10% or negative 10%
correlation > 0.1 || correlation < -0.1 

406. Now peanuts correlates 0.5902 or 59.02% to squirrel transformation
407. Now brushing teeth correlates -0.3805 or 38.02% negatively to squirrel transformation
408. Note how we can't just add the phi values without absolute value to get any meaningful combination
409. What if there was an event called "peanut teeth" which represented "peanuts and not brushing teeth"
410. After calculating it's frequency table phi("peanut teeth") is exactly 1
411. Jacques can now live as a squirrel if he chooses to :D
412. Technically we would have wanted -1 for not transformation so we went in reverse in this example
413. People often do the opposite of intended

414. Here are some important array functions

415. Appending to array
416. push() and pop() add and remove at the end of array
417. unshift() and shift() are add and remove at start of array respectively

418. Prepending to array
419. unshift adds to start of array for rememberUrgently(task) or rememberOnPriority(task)
420. shift removes from start of array for getTask()

421. Queues are used by programs to manage things. LIFO FIFO stacks and queues, LRU queue etc
422. A todo list example is a good way to learn queues

423. indexOf() on an array returns the first index of an element in the array or -1 if not found(i++ iteration)
424. lastIndexOf() does the same on array except it starts checking from the end of the array(i-- iteration)

425. Both indexOf and lastIndexOf also take an optional second parameter for which index to start searching at
426. This way we can iterate over regex matches for example without using regex module

427. slice() on an array is also used with start inclusive index and end exclusive index to cut up an array and return subset
428. Both parameters can also be not provided to slice, second parameter missing cuts to the end, first also missing copies the entire array

429. concat() on arrays can be used to join subset of arrays similar to + operator for strings
430. Concat also appends a single element to an array if one of the arguments is not an array

431. Strings in JS also have some useful properties
432. Even though strings have length and toUpperCase properties and a lot of inbuilt functions, I cannot add properties to string
433. "".length // -> 0
434. "abc".age = 88;
435. console.log("abc".age); // -> undefined
436. let testString = "abc";
437. "abc".age = 88;
438. console.log(testString.age); // -> undefined
439. To make a property stick to string it needs to be wrapped in an object
440. The JS language does not raise an error for trying to set a property on boolean, string, number values even though they are not objects
441. Immutable values cannot be changed. Values are immutable. Only object can have properties containing function and values on them
442. Even though the values are immutable they have properties
443. One difference between array and string is string.indexOf can search for a subset of string while array would only search by character.
444. If expected string to behave like array it does not hold on character model of string on indexOf
445. In short string has reflection and function overloading of it's own class to provide compiler features(even though there is no compiler)
446. "One two three".indexOf("ee")
447. .trim() removes whitespace like spaces, newlines, tabs and similar characters from start and end of string
448. zeroPad is also known as .padStart() which takes desired length and padding character as argument
449. console.log(String(7).padStart(3, "0")); // -> "007"
450. "Hello world".split(" ").join(". ") -> "Hello. world"
451. "LA ".repeat(3) -> "LA LA LA"
452. Accessing individual characters in a string by treating it as an array has one complication that will be discussed later
453. Rest parameters are used with ...params notation and can accept variable arguments for a function as an array
454. console.log(-Infinity < -2) // -> true
455. Parameters before the rest parameters are not included in the array
456. Similarly the array can also be split into variable arguments for a function accepting rest parameters
457. let numbers = myRestParametersFunction(2, 5, 7, 4)
458. console.log(Math.max(...numbers)); // -> 7
459. function myRestParametersFunction(...args) {return args};
460. // or equivalent
let myRestParametersFunction = (...args) => args;
461. max(9, ...numbers, 2) is also valid
462. Triple dot operator also allows spread of arguments inside an array
["hello", ...names, "and Bob"]
463. Triple dot operator works with brackets and braces
464. In braces/objects the repeated values if present, only the last value wins
465. let coordinates = {x: 108, y:29, z: 39}
466. {...coordinates, y:15}; // -> for updating coordinates, y will be set to 15 as it is last and wins
467. The Math object is a grab bag of functions that helps prevent global namespace pollution
468. A namespace provides a binding so that values don't have to live in the global namespace
469. Accidental overwriting from collision of function names can be avoided by using a namespace to protect them
470. Perversely JS only gives a warning for overwriting let(inside certain scope it is constant not to be confused with global let) and const bindings
471. JS does not give warning for overwriting inbuilt functions(called standard bindings) in global namespace or those declared with var or function keyword
472. Math object has sin() cos() tan() asin() acos() atan() and sqrt() min() max() random(returns pseudorandom between 0 and 1)
473. Math.PI also contains PI 
474. Math.cos(angleInRadians)
475. For a random point on a circle take a random angle Math.random() * 2 * Math.PI
476. Then using the angle x coordinate is radius * Math.cos(angleInRadians) and y coordinate is radius * Math.sin(angleInRadians)
477. For a function that take the radius of a circle with centre at (0, 0) function randomPointOnACircle(radius) the output is
478. console.log(randomPointOnACircle(2))
479. // -> {x: 0.37, y: 1.97}
480. Pseudorandom numbers from Math.random give a number between 0 inclusive and 1 exclusive aka [0,1)
481. The theory of pseudo random number involves a 2 points
482. The first point is computers are deterministic machines. They can store state and replicate it exactly.
483. Computers always react the same way when given same input
484. The second point is to give the appearance of a random number, the computer/machine can hold a hidden value
485. Whenever a random number is needed some complicated computations can be performed on the hidden value to create a new value
486. This new value is stored as the updated hidden value and some number derived from this new value is returned
487. This produces ever new, hard-to-predict numbers in a way that seems random but can be tested by updating the seed value(hidden value)
488. The concepts of pseudo random numbers involve Deterministic machine, persistance, private variables of a language, memory access control system
489. For true randomness an 8k video has many pixels on a grid, by selecting a random frame in a very long video with high resolution and high fps Frames per second, true random numbers can be generated. 
490. The randomness entropy of the video should be equivalent to a room filled with lava lamps and people are encouraged to be in the lava lamp room as they block the camera and add to the randomness.
491. True random involves removing persistance and memory, and accepting the input from a source that is not a deterministic machine
492. True random also involves other constraints, such as compiling the entire code from source after writing the source code personally, producing hardware personally to avoid firmware exploits, protecting communication interception of source randomness input such as by having the system in an offline loop with lavalamp and camera and blocking wireless signals with a jammer and electrostatic shielding, protecting the algorithm used to create randomness, and finally protection from exploits involving limitations of physics understanding of a group of physicists and accounting and tracking every physicist in the world of sufficient expertise in certain areas of mathematics and other impossibilites

493. In other Math functions such as Math.floor for [0, 1) and Math.ceil can produce (0, 1] which can then be multiplied for range and offset by value
494. Math.round can round to the nearest number up or down, Math.abs can give absolute values
495. Parameters can be destructured to accept arguments of certain binding. 
496. If arguments are improper for such destructured parameters it throws an error
497. Destructuring phi function example
498. instead of function signature
499. function phi(table) {...}
500. we can use destructured parameters
501. function phi([n00, n01, n10, n11]) {...}
502. This destructuring also works for objects instead of arrays
503. This destructuring also works on variable bindings declaration
504. let {name} = {name: "Bob", age: 23}
505. console.log(name) // -> Bob
506. Trying to destructure null or undefined gives an error similar to direct access of index of null
507. What happens if destructure empty array? It silently passes without error
508. let {name} = {} or let [name] = []
509. console.log(name) // -> undefined 
510. Optional property access helps to resolve the errors involving accepting a value object of certain requirement type
511. While loop can prevent accepting value of certain improper type, simply loop till valid input is received
512. Dot notation of object access comes with a variation of optional dot access
513. Example object.address?.city
514. This notation also works with calling functions and array access
515. "string".notAMethod?.()
516. {}.notAnExistingProperty?.[0]
517. []?.[2]
518. // -> undefined is returned on all of the above
519. ?. Evaluates a value that is not null or undefined. Otherwise it evaluates to undefined
520. Evaluation of an expression is similar to a function return except implicit in compiler
521. JSON JavaScript Object Notation was used by Netscape Navigator in Action Script
522. Because properties grasp values with tentacles than contain it, data is stored in the computer memory as a sequence of bits holding the addresses of the content
523. So properties are more like pointers than containers
524. Nested array also use pointers and links to nest arrays rather than true memory storage
525. Saving data in a file, or using it for persistance, or sending it to another computer over the internet requires a way to do so
526. One way to save data or transport it is to send the entire computer memory along with address of all values
527. A simpler and more efficient way involves JSON and serialization concept
528. A serialized value can be accessed by knowing just one single pointer to the value
529. Then the serialized value can be loaded and used to access all the containing properties in the file
530. Serialized values are flat values instead of nested or pointers
531. JSON(Jason) is used as a data storage and communication format in most languages and systems in the world and is a popular serialization format
532. JSON has a few restrictions to Javascript objects and array
533. These restrictions are all keys(properties) have to be quoted, only simple data expressions allowed, no function calls and bindings or anything involving comptutation
534. The values don't need to be double quoted
535. JSON data example 
{
"squirrel": false,
"events": ["work", "touched tree", "pizza", "running"]
}
536. JS gives us JS.stringify and JS.parse to convert data to and from JSON format
537. JSON encoded strings can be stored as JS strings using stringify
538. JSON encoded string can be decoded from JS strings using parse

539. let string = JSON.stringify({"squirrel": false, "events": [...]})
540. JSON.parse(string)["squirrel"] // -> false
541. Using objects, arrays and bindings allows us to use a bag to move a collection of values
542. Arrays are supposed to be used for conceptually identical values in varying amounts
543. Named properties in array are length and other inbuilt methods
544. Methods that live in properties of values (usually)act on the value they are stored in(property of)
545. typeof null is object 

546. Sum of a range exercise 
Create a range function from python in js that takes start and end, includes start index and excludes end index
Create a sum function that takes an array and sum it
Modify range function to include third parameter of step increment that can take positive and negative
Do not use inbuilt sum and range function equivalents

547. Reversing an array exercise
Create two functions reverseArray and reverseArrayInPlace
Compare performance of reverse with side effects and with pure functions taking arguments
Which is more useful?
Do not use [].reverse() inbuilt

548. A linked list exercise
Create an array using nested objects as shown
[1, 2, 3] => {value: 1, rest: {value: 2, rest: {value: 3, rest: null}}}
Create functions arrayToList and listToArray to transform between array and the list
Create function prepend for the object list to insert at start
Create function nth for object list that returns value of the nth position in object list(equivalent to array index access)
nth should return undefined if nth is not there
Also create variation of nth using recursion and without recursion(if it is possible)

549. Deep comparison exercise
Compare objects with === and use typeof to check objects to the required depth
Take an exception for typeof null equals object
Use Object.keys to iterate over objects



`) + createBlock(`Glossary`, `
1. Typographic conventions
2. Programming
3. Why language matters over binary/assembly
4. What is JavaScript
5. Code references link of EloquentJS
6. Overview of book structure
7. Values Types Operators
8. Numbers and Special numbers
9. Arithmetic
10. Strings
11. Boolean values
12. Unary, Binary, Tertiary Operators
13. Logical operators and comparison
14. Empty values
15. Automatic type conversion and type coercion
16. Short circuiting of logical operators
17. Program structure fundamentals
18. Expressions vs statements vs program
19. Bindings and Return values
20. Control Flow and Conditional execution
21. While and do loops and for loops
22. Dispatching with switch
23. camelCase and Capitalization
24. Multiline comments
25. Functions, definitions, bindings and nested scopes
26. Pass by value or reference
27. Declaration notation, arrow functions
28. The call stack
29. Optional arguments
30. Arguments vs parameters and recursion
31. Simple recursion parameter classes
32. Handling growing function verbosity
33. Functions and side effects
34. Data structures objects and arrays
35. Weresquirrel example
36. Datasets, properties, methods and objects
37. Mutability, immutability and object properties
38. The Lycanthrope's log example and computing correlation phi
39. Array loops and further arrayology syntax
40. Fast access and performant algorithmic properties of strings
41. Rest parameters and spreading arguments
42. Namespaces to avoid global pollution
43. Pseudo random numbers
44. Destructuring function parameters and argument binding
45. Optional property access
46. JSON JavaScript Object Notation and Serialization
47. Basic exercises in implementation
`)
;
},"2024-05-27 15:23:00","2024-06-28 03:16:00","00015. ","js-language-basics"],
["JS Language Advanced",function() {

return createBlock("Advance", `
1. 
`)
 + createBlock("References", `
1. 
`)
;
},"2024-06-28 03:16:00","2024-06-28 03:16:00","00016. ","js-language-advanced"],
["globalThis-this-Javascript ref",function() {

return  createBlock(` globalThis object in javascript browser

`, `
1. globalThis keys
2. globalThis buildin js full version
`) +  createScrollableDiv(`

1. Object.keys(globalThis).join(" ")`, `
window self document name location customElements history navigation locationbar menubar personalbar scrollbars statusbar toolbar status closed frames length top opener parent frameElement navigator origin external screen innerWidth innerHeight scrollX pageXOffset scrollY pageYOffset visualViewport screenX screenY outerWidth outerHeight devicePixelRatio clientInformation screenLeft screenTop styleMedia onsearch isSecureContext trustedTypes performance onappinstalled onbeforeinstallprompt crypto indexedDB sessionStorage localStorage onbeforexrselect onabort onbeforeinput onbeforetoggle onblur oncancel oncanplay oncanplaythrough onchange onclick onclose oncontextlost oncontextmenu oncontextrestored oncuechange ondblclick ondrag ondragend ondragenter ondragleave ondragover ondragstart ondrop ondurationchange onemptied onended onerror onfocus onformdata oninput oninvalid onkeydown onkeypress onkeyup onload onloadeddata onloadedmetadata onloadstart onmousedown onmouseenter onmouseleave onmousemove onmouseout onmouseover onmouseup onmousewheel onpause onplay onplaying onprogress onratechange onreset onresize onscroll onsecuritypolicyviolation onseeked onseeking onselect onslotchange onstalled onsubmit onsuspend ontimeupdate ontoggle onvolumechange onwaiting onwebkitanimationend onwebkitanimationiteration onwebkitanimationstart onwebkittransitionend onwheel onauxclick ongotpointercapture onlostpointercapture onpointerdown onpointermove onpointerrawupdate onpointerup onpointercancel onpointerover onpointerout onpointerenter onpointerleave onselectstart onselectionchange onanimationend onanimationiteration onanimationstart ontransitionrun ontransitionstart ontransitionend ontransitioncancel onafterprint onbeforeprint onbeforeunload onhashchange onlanguagechange onmessage onmessageerror onoffline ononline onpagehide onpageshow onpopstate onrejectionhandled onstorage onunhandledrejection onunload crossOriginIsolated scheduler alert atob blur btoa cancelAnimationFrame cancelIdleCallback captureEvents clearInterval clearTimeout close confirm createImageBitmap fetch find focus getComputedStyle getSelection matchMedia moveBy moveTo open postMessage print prompt queueMicrotask releaseEvents reportError requestAnimationFrame requestIdleCallback resizeBy resizeTo scroll scrollBy scrollTo setInterval setTimeout stop structuredClone webkitCancelAnimationFrame webkitRequestAnimationFrame chrome fence caches cookieStore ondevicemotion ondeviceorientation ondeviceorientationabsolute launchQueue sharedStorage documentPictureInPicture onbeforematch getScreenDetails queryLocalFonts showDirectoryPicker showOpenFilePicker showSaveFilePicker originAgentCluster credentialless speechSynthesis oncontentvisibilityautostatechange onscrollend webkitRequestFileSystem webkitResolveLocalFileSystemURL google gws_wizbind _F_installCss _ _DumpException _s _qs _xjs_toggles _F_toggles _F_jsUrl gbar_ gbar __PVT gapi ___jsl sbmlhf w W_jd WIZ_global_data IJ_values jsl _hd closure_lm_736642 lnk silk _F_installCssProto wiz_progress userfeedback closure_uid_820386815 closure_lm_383567 osapi gadgets shindig googleapis __REACT_DEVTOOLS_APPEND_COMPONENT_STACK__ __REACT_DEVTOOLS_BREAK_ON_CONSOLE_ERRORS__ __REACT_DEVTOOLS_COMPONENT_FILTERS__ __REACT_DEVTOOLS_SHOW_INLINE_WARNINGS_AND_ERRORS__ __REACT_DEVTOOLS_HIDE_CONSOLE_LOGS_IN_STRICT_MODE__ __REACT_DEVTOOLS_BROWSER_THEME__
`) +  createScrollableDiv(`
Object.keys(globalThis).map((x, i) => {return String(i) + ". " + String(x)}).join(" 
")
`, `
0. window 
1. self 
2. document 
3. name 
4. location 
5. customElements 
6. history 
7. navigation 
8. locationbar 
9. menubar 
10. personalbar 
11. scrollbars 
12. statusbar 
13. toolbar 
14. status 
15. closed 
16. frames 
17. length 
18. top 
19. opener 
20. parent 
21. frameElement 
22. navigator 
23. origin 
24. external 
25. screen 
26. innerWidth 
27. innerHeight 
28. scrollX 
29. pageXOffset 
30. scrollY 
31. pageYOffset 
32. visualViewport 
33. screenX 
34. screenY 
35. outerWidth 
36. outerHeight 
37. devicePixelRatio 
38. clientInformation 
39. screenLeft 
40. screenTop 
41. styleMedia 
42. onsearch 
43. isSecureContext 
44. trustedTypes 
45. performance 
46. onappinstalled 
47. onbeforeinstallprompt 
48. crypto 
49. indexedDB 
50. sessionStorage 
51. localStorage 
52. onbeforexrselect 
53. onabort 
54. onbeforeinput 
55. onbeforetoggle 
56. onblur 
57. oncancel 
58. oncanplay 
59. oncanplaythrough 
60. onchange 
61. onclick 
62. onclose 
63. oncontextlost 
64. oncontextmenu 
65. oncontextrestored 
66. oncuechange 
67. ondblclick 
68. ondrag 
69. ondragend 
70. ondragenter 
71. ondragleave 
72. ondragover 
73. ondragstart 
74. ondrop 
75. ondurationchange 
76. onemptied 
77. onended 
78. onerror 
79. onfocus 
80. onformdata 
81. oninput 
82. oninvalid 
83. onkeydown 
84. onkeypress 
85. onkeyup 
86. onload 
87. onloadeddata 
88. onloadedmetadata 
89. onloadstart 
90. onmousedown 
91. onmouseenter 
92. onmouseleave 
93. onmousemove 
94. onmouseout 
95. onmouseover 
96. onmouseup 
97. onmousewheel 
98. onpause 
99. onplay 
100. onplaying 
101. onprogress 
102. onratechange 
103. onreset 
104. onresize 
105. onscroll 
106. onsecuritypolicyviolation 
107. onseeked 
108. onseeking 
109. onselect 
110. onslotchange 
111. onstalled 
112. onsubmit 
113. onsuspend 
114. ontimeupdate 
115. ontoggle 
116. onvolumechange 
117. onwaiting 
118. onwebkitanimationend 
119. onwebkitanimationiteration 
120. onwebkitanimationstart 
121. onwebkittransitionend 
122. onwheel 
123. onauxclick 
124. ongotpointercapture 
125. onlostpointercapture 
126. onpointerdown 
127. onpointermove 
128. onpointerrawupdate 
129. onpointerup 
130. onpointercancel 
131. onpointerover 
132. onpointerout 
133. onpointerenter 
134. onpointerleave 
135. onselectstart 
136. onselectionchange 
137. onanimationend 
138. onanimationiteration 
139. onanimationstart 
140. ontransitionrun 
141. ontransitionstart 
142. ontransitionend 
143. ontransitioncancel 
144. onafterprint 
145. onbeforeprint 
146. onbeforeunload 
147. onhashchange 
148. onlanguagechange 
149. onmessage 
150. onmessageerror 
151. onoffline 
152. ononline 
153. onpagehide 
154. onpageshow 
155. onpopstate 
156. onrejectionhandled 
157. onstorage 
158. onunhandledrejection 
159. onunload 
160. crossOriginIsolated 
161. scheduler 
162. alert 
163. atob 
164. blur 
165. btoa 
166. cancelAnimationFrame 
167. cancelIdleCallback 
168. captureEvents 
169. clearInterval 
170. clearTimeout 
171. close 
172. confirm 
173. createImageBitmap 
174. fetch 
175. find 
176. focus 
177. getComputedStyle 
178. getSelection 
179. matchMedia 
180. moveBy 
181. moveTo 
182. open 
183. postMessage 
184. print 
185. prompt 
186. queueMicrotask 
187. releaseEvents 
188. reportError 
189. requestAnimationFrame 
190. requestIdleCallback 
191. resizeBy 
192. resizeTo 
193. scroll 
194. scrollBy 
195. scrollTo 
196. setInterval 
197. setTimeout 
198. stop 
199. structuredClone 
200. webkitCancelAnimationFrame 
201. webkitRequestAnimationFrame 
202. chrome 
203. fence 
204. caches 
205. cookieStore 
206. ondevicemotion 
207. ondeviceorientation 
208. ondeviceorientationabsolute 
209. launchQueue 
210. sharedStorage 
211. documentPictureInPicture 
212. onbeforematch 
213. getScreenDetails 
214. queryLocalFonts 
215. showDirectoryPicker 
216. showOpenFilePicker 
217. showSaveFilePicker 
218. originAgentCluster 
219. credentialless 
220. speechSynthesis 
221. oncontentvisibilityautostatechange 
222. onscrollend 
223. webkitRequestFileSystem 
224. webkitResolveLocalFileSystemURL 
225. js_version
`) +  createScrollableDiv(`
Sorted globalThis keys

Object.keys(globalThis).sort().map((x, i) => {return String(i) + ". " + String(x)}).join(" 
")
`, `

0. alert 
1. atob 
2. blur 
3. btoa 
4. caches 
5. cancelAnimationFrame 
6. cancelIdleCallback 
7. captureEvents 
8. chrome 
9. clearInterval 
10. clearTimeout 
11. clientInformation 
12. close 
13. closed 
14. confirm 
15. cookieStore 
16. createImageBitmap 
17. credentialless 
18. crossOriginIsolated 
19. crypto 
20. customElements 
21. devicePixelRatio 
22. document 
23. documentPictureInPicture 
24. external 
25. fence 
26. fetch 
27. find 
28. focus 
29. frameElement 
30. frames 
31. getComputedStyle 
32. getScreenDetails 
33. getSelection 
34. history 
35. indexedDB 
36. innerHeight 
37. innerWidth 
38. isSecureContext 
39. js_version 
40. launchQueue 
41. length 
42. localStorage 
43. location 
44. locationbar 
45. matchMedia 
46. menubar 
47. moveBy 
48. moveTo 
49. name 
50. navigation 
51. navigator 
52. onabort 
53. onafterprint 
54. onanimationend 
55. onanimationiteration 
56. onanimationstart 
57. onappinstalled 
58. onauxclick 
59. onbeforeinput 
60. onbeforeinstallprompt 
61. onbeforematch 
62. onbeforeprint 
63. onbeforetoggle 
64. onbeforeunload 
65. onbeforexrselect 
66. onblur 
67. oncancel 
68. oncanplay 
69. oncanplaythrough 
70. onchange 
71. onclick 
72. onclose 
73. oncontentvisibilityautostatechange 
74. oncontextlost 
75. oncontextmenu 
76. oncontextrestored 
77. oncuechange 
78. ondblclick 
79. ondevicemotion 
80. ondeviceorientation 
81. ondeviceorientationabsolute 
82. ondrag 
83. ondragend 
84. ondragenter 
85. ondragleave 
86. ondragover 
87. ondragstart 
88. ondrop 
89. ondurationchange 
90. onemptied 
91. onended 
92. onerror 
93. onfocus 
94. onformdata 
95. ongotpointercapture 
96. onhashchange 
97. oninput 
98. oninvalid 
99. onkeydown 
100. onkeypress 
101. onkeyup 
102. onlanguagechange 
103. onload 
104. onloadeddata 
105. onloadedmetadata 
106. onloadstart 
107. onlostpointercapture 
108. onmessage 
109. onmessageerror 
110. onmousedown 
111. onmouseenter 
112. onmouseleave 
113. onmousemove 
114. onmouseout 
115. onmouseover 
116. onmouseup 
117. onmousewheel 
118. onoffline 
119. ononline 
120. onpagehide 
121. onpageshow 
122. onpause 
123. onplay 
124. onplaying 
125. onpointercancel 
126. onpointerdown 
127. onpointerenter 
128. onpointerleave 
129. onpointermove 
130. onpointerout 
131. onpointerover 
132. onpointerrawupdate 
133. onpointerup 
134. onpopstate 
135. onprogress 
136. onratechange 
137. onrejectionhandled 
138. onreset 
139. onresize 
140. onscroll 
141. onscrollend 
142. onsearch 
143. onsecuritypolicyviolation 
144. onseeked 
145. onseeking 
146. onselect 
147. onselectionchange 
148. onselectstart 
149. onslotchange 
150. onstalled 
151. onstorage 
152. onsubmit 
153. onsuspend 
154. ontimeupdate 
155. ontoggle 
156. ontransitioncancel 
157. ontransitionend 
158. ontransitionrun 
159. ontransitionstart 
160. onunhandledrejection 
161. onunload 
162. onvolumechange 
163. onwaiting 
164. onwebkitanimationend 
165. onwebkitanimationiteration 
166. onwebkitanimationstart 
167. onwebkittransitionend 
168. onwheel 
169. open 
170. opener 
171. origin 
172. originAgentCluster 
173. outerHeight 
174. outerWidth 
175. pageXOffset 
176. pageYOffset 
177. parent 
178. performance 
179. personalbar 
180. postMessage 
181. print 
182. prompt 
183. queryLocalFonts 
184. queueMicrotask 
185. releaseEvents 
186. reportError 
187. requestAnimationFrame 
188. requestIdleCallback 
189. resizeBy 
190. resizeTo 
191. scheduler 
192. screen 
193. screenLeft 
194. screenTop 
195. screenX 
196. screenY 
197. scroll 
198. scrollBy 
199. scrollTo 
200. scrollX 
201. scrollY 
202. scrollbars 
203. self 
204. sessionStorage 
205. setInterval 
206. setTimeout 
207. sharedStorage 
208. showDirectoryPicker 
209. showOpenFilePicker 
210. showSaveFilePicker 
211. speechSynthesis 
212. status 
213. statusbar 
214. stop 
215. structuredClone 
216. styleMedia 
217. toolbar 
218. top 
219. trustedTypes 
220. visualViewport 
221. webkitCancelAnimationFrame 
222. webkitRequestAnimationFrame 
223. webkitRequestFileSystem 
224. webkitResolveLocalFileSystemURL 
225. window
`) +  createScrollableDiv(`

2. Built in globalThis

`, `
Window {window: Window, self: Window, document: document, name: '', location: Location, …}
IJ_values
: 
{eG8Zqf: 1, IvNqzc: false, qgwOed: false, qjWw6c: true, XFWgg: false, …}
WIZ_global_data
: 
{Yllh3e: '%.@.1714365896276512,28285903,4144099916]', SNlM0e: '', zChJod: '%.@.null,"https://www.google.co.uk/log?format\u003djson"]', Im6cmf: '/wizrpcui/_/WizRpcUi', w2btAe: '%.@."","","0",null,null,null,1]', …}
W_jd
: 
{CAkgOE: Array(0), CAkgOI: Array(0), CAkgOM: Array(13), CAkgOQ: Array(3), CAkgOU: Array(3)}
alert
: 
ƒ alert()
atob
: 
ƒ atob()
blur
: 
ƒ blur()
btoa
: 
ƒ btoa()
caches
: 
CacheStorage {}
cancelAnimationFrame
: 
ƒ cancelAnimationFrame()
cancelIdleCallback
: 
ƒ cancelIdleCallback()
captureEvents
: 
ƒ captureEvents()
chrome
: 
{loadTimes: ƒ, csi: ƒ}
clearInterval
: 
ƒ clearInterval()
clearTimeout
: 
ƒ clearTimeout()
clientInformation
: 
Navigator {vendorSub: '', productSub: '20030107', vendor: 'Google Inc.', maxTouchPoints: 0, scheduling: Scheduling, …}
close
: 
ƒ close()
closed
: 
false
closure_lm_383567
: 
_.Re {src: Window, i: {…}, j: 4}
closure_lm_736642
: 
swa {src: Window, Od: {…}, ka: 17}
closure_uid_820386815
: 
1
confirm
: 
ƒ confirm()
cookieStore
: 
CookieStore {onchange: null}
createImageBitmap
: 
ƒ createImageBitmap()
credentialless
: 
false
crossOriginIsolated
: 
false
crypto
: 
Crypto {subtle: SubtleCrypto}
customElements
: 
CustomElementRegistry {}
devicePixelRatio
: 
2
document
: 
document
documentPictureInPicture
: 
DocumentPictureInPicture {window: null, onenter: null}
external
: 
External {}
fence
: 
null
fetch
: 
ƒ fetch()
find
: 
ƒ find()
focus
: 
ƒ focus()
frameElement
: 
null
frames
: 
Window {window: Window, self: Window, document: document, name: '', location: Location, …}
gadgets
: 
{util: {…}, config: {…}, json: {…}, rpc: {…}}
gapi
: 
{loaded_0: null, _: {…}, config: {…}, iframes: {…}, load: ƒ}
gbar
: 
{a: _.Pc, up: {…}, A: ƒ, B: ƒ, P: ƒ, …}
gbar_
: 
{CONFIG: Array(1), _F_toggles_initialize: ƒ, aa: ƒ, ba: ƒ, ca: ƒ, …}
getComputedStyle
: 
ƒ getComputedStyle()
getScreenDetails
: 
ƒ getScreenDetails()
getSelection
: 
ƒ getSelection()
google
: 
{kEI: 'yCUvZqDwEM-3vr0PzOSHuA8', kEXPI: '0,3300102,31,13188,8194,8682,28296,4329,3798,4530,…614,639,1269,1410,319,113,21622033,8035,6550,3746', kBL: 'rimN', kOPI: 89978449, sn: 'webhp', …}
googleapis
: 
{newHttpRequest: ƒ, setUrlParameter: ƒ}
gws_wizbind
: 
{trigger: ƒ, configure: ƒ}
history
: 
History {length: 3, scrollRestoration: 'auto', state: {…}}
indexedDB
: 
IDBFactory {}
innerHeight
: 
1080
innerWidth
: 
1095
isSecureContext
: 
true
jsl
: 
{dh: ƒ, el: ƒ}
launchQueue
: 
LaunchQueue {}
length
: 
0
lnk
: 
{m_222230912: {…}}
localStorage
: 
Storage {sb_wiz.zpc.gws-wiz.: '{"0":[["shantanu deshpande",46,[3,357,362,396,143]… searches"]}},"q":"vBKPPWBo1c6pK30X15CR_v1yudI"}}', length: 1}
location
: 
Location {ancestorOrigins: DOMStringList, href: 'https://www.google.co.uk/', origin: 'https://www.google.co.uk', protocol: 'https:', host: 'www.google.co.uk', …}
locationbar
: 
BarProp {visible: true}
matchMedia
: 
ƒ matchMedia()
menubar
: 
BarProp {visible: true}
moveBy
: 
ƒ moveBy()
moveTo
: 
ƒ moveTo()
name
: 
""
navigation
: 
Navigation {currentEntry: NavigationHistoryEntry, transition: null, canGoBack: false, canGoForward: false, onnavigate: null, …}
navigator
: 
Navigator {vendorSub: '', productSub: '20030107', vendor: 'Google Inc.', maxTouchPoints: 0, scheduling: Scheduling, …}
onabort
: 
null
onafterprint
: 
null
onanimationend
: 
null
onanimationiteration
: 
null
onanimationstart
: 
null
onappinstalled
: 
null
onauxclick
: 
null
onbeforeinput
: 
null
onbeforeinstallprompt
: 
null
onbeforematch
: 
null
onbeforeprint
: 
null
onbeforetoggle
: 
null
onbeforeunload
: 
null
onbeforexrselect
: 
null
onblur
: 
null
oncancel
: 
null
oncanplay
: 
null
oncanplaythrough
: 
null
onchange
: 
null
onclick
: 
null
onclose
: 
null
oncontentvisibilityautostatechange
: 
null
oncontextlost
: 
null
oncontextmenu
: 
null
oncontextrestored
: 
null
oncuechange
: 
null
ondblclick
: 
null
ondevicemotion
: 
null
ondeviceorientation
: 
null
ondeviceorientationabsolute
: 
null
ondrag
: 
null
ondragend
: 
null
ondragenter
: 
null
ondragleave
: 
null
ondragover
: 
null
ondragstart
: 
null
ondrop
: 
null
ondurationchange
: 
null
onemptied
: 
null
onended
: 
null
onerror
: 
ƒ (a,b,d,m,e)
onfocus
: 
null
onformdata
: 
null
ongotpointercapture
: 
null
onhashchange
: 
null
oninput
: 
null
oninvalid
: 
null
onkeydown
: 
null
onkeypress
: 
null
onkeyup
: 
null
onlanguagechange
: 
null
onload
: 
null
onloadeddata
: 
null
onloadedmetadata
: 
null
onloadstart
: 
null
onlostpointercapture
: 
null
onmessage
: 
null
onmessageerror
: 
null
onmousedown
: 
null
onmouseenter
: 
null
onmouseleave
: 
null
onmousemove
: 
null
onmouseout
: 
null
onmouseover
: 
null
onmouseup
: 
null
onmousewheel
: 
null
onoffline
: 
null
ononline
: 
null
onpagehide
: 
null
onpageshow
: 
null
onpause
: 
null
onplay
: 
null
onplaying
: 
null
onpointercancel
: 
null
onpointerdown
: 
null
onpointerenter
: 
null
onpointerleave
: 
null
onpointermove
: 
null
onpointerout
: 
null
onpointerover
: 
null
onpointerrawupdate
: 
null
onpointerup
: 
null
onpopstate
: 
null
onprogress
: 
null
onratechange
: 
null
onrejectionhandled
: 
null
onreset
: 
null
onresize
: 
null
onscroll
: 
null
onscrollend
: 
null
onsearch
: 
null
onsecuritypolicyviolation
: 
null
onseeked
: 
null
onseeking
: 
null
onselect
: 
null
onselectionchange
: 
null
onselectstart
: 
null
onslotchange
: 
null
onstalled
: 
null
onstorage
: 
null
onsubmit
: 
null
onsuspend
: 
null
ontimeupdate
: 
null
ontoggle
: 
null
ontransitioncancel
: 
null
ontransitionend
: 
null
ontransitionrun
: 
null
ontransitionstart
: 
null
onunhandledrejection
: 
null
onunload
: 
null
onvolumechange
: 
null
onwaiting
: 
null
onwebkitanimationend
: 
null
onwebkitanimationiteration
: 
null
onwebkitanimationstart
: 
null
onwebkittransitionend
: 
null
onwheel
: 
null
open
: 
ƒ open()
opener
: 
null
origin
: 
"https://www.google.co.uk"
originAgentCluster
: 
true
osapi
: 
{}
outerHeight
: 
1080
outerWidth
: 
1728
pageXOffset
: 
0
pageYOffset
: 
0
parent
: 
Window {window: Window, self: Window, document: document, name: '', location: Location, …}
performance
: 
Performance {timeOrigin: 1714365896030.2, onresourcetimingbufferfull: null, timing: PerformanceTiming, navigation: PerformanceNavigation, memory: MemoryInfo, …}
personalbar
: 
BarProp {visible: true}
postMessage
: 
ƒ postMessage()
print
: 
ƒ print()
prompt
: 
ƒ prompt()
queryLocalFonts
: 
ƒ queryLocalFonts()
queueMicrotask
: 
ƒ queueMicrotask()
releaseEvents
: 
ƒ releaseEvents()
reportError
: 
ƒ reportError()
requestAnimationFrame
: 
ƒ requestAnimationFrame()
requestIdleCallback
: 
ƒ requestIdleCallback()
resizeBy
: 
ƒ resizeBy()
resizeTo
: 
ƒ resizeTo()
sbmlhf
: 
ƒ (b)
scheduler
: 
Scheduler {}
screen
: 
Screen {availWidth: 1728, availHeight: 1085, width: 1728, height: 1117, colorDepth: 30, …}
screenLeft
: 
0
screenTop
: 
37
screenX
: 
0
screenY
: 
37
scroll
: 
ƒ scroll()
scrollBy
: 
ƒ scrollBy()
scrollTo
: 
ƒ scrollTo()
scrollX
: 
0
scrollY
: 
0
scrollbars
: 
BarProp {visible: true}
self
: 
Window {window: Window, self: Window, document: document, name: '', location: Location, …}
sessionStorage
: 
Storage {_c;;i: 'p:*|l:9007199254740991_2', hsb;;1714365896031: 'p:*|l:1_{"state":null,"url":"/","metadata":{"entry…65896031,"stackId":1714365896032,"stackIndex":0}}', hsb;;1714365896032: 'p:*|l:0_[1714365896031]', length: 3}
setInterval
: 
ƒ setInterval()
setTimeout
: 
ƒ setTimeout()
sharedStorage
: 
SharedStorage {worklet: SharedStorageWorklet}
shindig
: 
{random: ƒ}
showDirectoryPicker
: 
ƒ showDirectoryPicker()
showOpenFilePicker
: 
ƒ showOpenFilePicker()
showSaveFilePicker
: 
ƒ showSaveFilePicker()
silk
: 
{callback: ƒ}
speechSynthesis
: 
SpeechSynthesis {pending: false, speaking: false, paused: false, onvoiceschanged: null}
status
: 
""
statusbar
: 
BarProp {visible: true}
stop
: 
ƒ stop()
structuredClone
: 
ƒ structuredClone()
styleMedia
: 
StyleMedia {type: 'screen'}
toolbar
: 
BarProp {visible: true}
top
: 
Window {window: Window, self: Window, document: document, name: '', location: Location, …}
trustedTypes
: 
TrustedTypePolicyFactory {emptyHTML: emptyHTML "", emptyScript: emptyScript "", defaultPolicy: null}
userfeedback
: 
{api: {…}}
visualViewport
: 
VisualViewport {offsetLeft: 0, offsetTop: 0, pageLeft: 0, pageTop: 0, width: 1095, …}
w
: 
ƒ (a)
webkitCancelAnimationFrame
: 
ƒ webkitCancelAnimationFrame()
webkitRequestAnimationFrame
: 
ƒ webkitRequestAnimationFrame()
webkitRequestFileSystem
: 
ƒ webkitRequestFileSystem()
webkitResolveLocalFileSystemURL
: 
ƒ webkitResolveLocalFileSystemURL()
window
: 
Window {window: Window, self: Window, document: document, name: '', location: Location, …}
wiz_progress
: 
ƒ ()
_
: 
{_DumpException: ƒ}
_DumpException
: 
ƒ (e)
_F_installCss
: 
ƒ (a)
_F_installCssProto
: 
ƒ (a)
_F_jsUrl
: 
"/xjs/_/js/k=xjs.hd.en.s-_9hhP1fG4.O/am=AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAQgAFAABQAAAAAQAAAAAAwBAAQABAADYPQAggAAEBAANABAF4KBMACJgAAACAAIAQgCAAAAgAAABQAAAAAAAAAAAAAA4QQAAAAAAAAAAAAABABwAAAgCAYAAhAAAEAAAAIA9AcAAMUhAAAAAAAAAAAAAAIAAJgrkgAQUBEAAAAAAAAAAAAAAAqXRiYQw/d=1/ed=1/dg=2/br=1/rs=ACT90oGLd_d1CrWONB53SADIwPir49OD4g/ee=ALeJib:B8gLwd;AfeaP:TkrAjf;Afksuc:wMx0R;BMxAGc:E5bFse;BgS6mb:fidj5d;BjwMce:cXX2Wb;CxXAWb:YyRLvc;DM55c:imLrKe;DULqB:RKfG5c;Dkk6ge:wJqrrd;DpcR3d:zL72xf;EABSZ:MXZt9d;ESrPQc:mNTJvc;EVNhjf:pw70Gc;EmZ2Bf:zr1jrb;EnlcNd:WeHg4;Erl4fe:FloWmf,FloWmf;F9mqte:UoRcbe;Fmv9Nc:O1Tzwc;G0KhTb:LIaoZ;G6wU6e:hezEbd;GleZL:J1A7Od;HMDDWe:G8QUdb;HqeXPd:cmbnH;IBADCc:RYquRb;IoGlCf:b5lhvb;IsdWVc:qzxzOb;JXS8fb:Qj0suc;JbMT3:M25sS;JsbNhc:Xd8iUd;KOxcK:OZqGte;KQzWid:ZMKkN;KcokUb:KiuZBf;KeeMUb:HiPxjc;KpRAue:Tia57b;LBgRLc:XVMNvd;LEikZe:byfTOb,lsjVmc;LsNahb:ucGLNb;Me32dd:MEeYgc;NPKaK:PVlQOd;NSEoX:lazG7b;Np8Qkd:Dpx6qc;Nyt6ic:jn2sGd;OgagBe:cNTe0;Oj465e:KG2eXe,KG2eXe;OohIYe:mpEAQb;Pjplud:EEDORb,PoEs9b;Q1Ow7b:x5CSu;Q6C5kf:pfdZCe;QGR0gd:Mlhmy;R2kc8b:ALJqWb;R4IIIb:QWfeKf;R9Ulx:CR7Ufe;RDNBlf:zPRCJb;SLtqO:Kh1xYe;SMDL4c:fTfGO,fTfGO;SNUn3:ZwDk9d,x8cHvb;ShpF6e:N0pvGc;TxfV6d:YORN0b;U96pRd:FsR04;UDrY1c:eps46d;UVmjEd:EesRsb;UyG7Kb:wQd0G;V2HTTe:RolTY;VGRfx:VFqbr;VN6jIc:ddQyuf;VOcgDe:YquhTb;VsAqSb:PGf2Re;VxQ32b:k0XsBb;WCEKNd:I46Hvd;WDGyFe:jcVOxd;Wfmdue:g3MJlb;XUezZ:sa7lqb;YV5bee:IvPZ6d;YkQtAf:rx8ur;ZMvdv:PHFPjb;ZWEUA:afR4Cf;a56pNe:JEfCwb;aAJE9c:WHW6Ef;aZ61od:arTwJ;bDXwRe:UsyOtc;bFZ6gf:RsDQqe;bcPXSc:gSZLJb;cEt90b:ws9Tlc;cFTWae:gT8qnd;coJ8e:KvoW8;dIoSBb:ZgGg9b;dLlj2:Qqt3Gf;daB6be:lMxGPd;dtl0hd:lLQWFe;eBAeSb:Ck63tb;eBZ5Nd:VruDBd;eHDfl:ofjVkb;eO3lse:nFClrf;fWLTFc:TVBJbf;g8nkx:U4MzKc;gaub4:TN6bMe;gtVSi:ekUOYd;h3MYod:cEt90b;hK67qb:QWEO5b;heHB1:sFczq;hjRo6e:F62sG;hsLsYc:Vl118;iFQyKf:QIhFr,vfuNJf;imqimf:jKGL2e;io8t5d:sgY6Zb;jY0zg:Q6tNgc;k2Qxcb:XY51pe;kCQyJ:ueyPK;kMFpHd:OTA3Ae;kbAm9d:MkHyGd;lkq0A:JyBE3e;nAFL3:NTMZac,s39S4;oGtAuc:sOXFj;oSUNyd:fTfGO,fTfGO;oUlnpc:RagDlc;okUaUd:wItadb;p2tIDb:tp1Cx;pKJiXd:VCenhc;pNsl2d:j9Yuyc;pXdRYb:JKoKVe;pj82le:mg5CW;qZx2Fc:j0xrE;qaS3gd:yiLg6e;qavrXe:zQzcXe;qddgKe:d7YSfd,x4FYXe;rQSrae:C6D5Fc;sP4Vbe:VwDzFe;sTsDMc:kHVSUb;tH4IIe:Ymry6;tosKvd:ZCqP3;trZL0b:qY8PFe;uY49fb:COQbmf;uknmt:GkPrzb;uuQkY:u2V3ud;vGrMZ:lPJJ0c;vfVwPd:lcrkwe;w3bZCb:ZPGaIb;w4rSdf:XKiZ9;w9w86d:dt4g2b;wQlYve:aLUfP;wR5FRb:TtcOte;wV5Pjc:L8KGxe;whEZac:F4AmNb;xBbsrc:NEW1Qc;yGxLoc:FmAr0c;yxTchf:KUM7Z;z97YGf:oug9te;zOsCQe:Ko78Df;zaIgPb:Qtpxbd/m=cdos,hsm,jsa,mb4ZUb,d,csi,cEt90b,SNUn3,qddgKe,sTsDMc,dtl0hd,eHDfl"
_F_toggles
: 
[131072]
__PVT
: 
""
__REACT_DEVTOOLS_APPEND_COMPONENT_STACK__
: 
true
__REACT_DEVTOOLS_BREAK_ON_CONSOLE_ERRORS__
: 
false
__REACT_DEVTOOLS_BROWSER_THEME__
: 
"dark"
__REACT_DEVTOOLS_COMPONENT_FILTERS__
: 
[{…}]
__REACT_DEVTOOLS_HIDE_CONSOLE_LOGS_IN_STRICT_MODE__
: 
false
__REACT_DEVTOOLS_SHOW_INLINE_WARNINGS_AND_ERRORS__
: 
true
___jsl
: 
{h: 'm;/_/scs/abc-static/_/js/k=gapi.gapi.en.SCWmpDDGjP…AHpOoo_Pl64J0IIHlj2zBtEJ3ZwdaJC3HA/m=__features__', dpo: false, ms: 'https://apis.google.com', m: '', l: Array(0), …}
_hd
: 
{aa: ƒ, aaa: ƒ, daa: ƒ, haa: ƒ, da: ƒ, …}
_qs
: 
{_DumpException: ƒ}
_s
: 
{_DumpException: ƒ}
_xjs_toggles
: 
(46) [27392, 0, 384, 0, 0, 0, 1048577, 0, 83697746, 402735118, 16781379, 128, 69824, 402718721, 12882163, 4210794, 73433856, 211935236, 160465153, 637669408, 605090304, 570425555, 134316640, 119013461, 8, 939524105, 268828928, 134496448, 33852, 1901056, 2142214, 138418208, 262144, 1015021568, 460032, 267395, 0, 0, 268566528, 137257090, 268502273, 0, 0, 0, 561149097, 49]
Infinity
: 
Infinity
AbortController
: 
ƒ AbortController()
AbortSignal
: 
ƒ AbortSignal()
AbsoluteOrientationSensor
: 
ƒ AbsoluteOrientationSensor()
AbstractRange
: 
ƒ AbstractRange()
Accelerometer
: 
ƒ Accelerometer()
AggregateError
: 
ƒ AggregateError()
AnalyserNode
: 
ƒ AnalyserNode()
Animation
: 
ƒ Animation()
AnimationEffect
: 
ƒ AnimationEffect()
AnimationEvent
: 
ƒ AnimationEvent()
AnimationPlaybackEvent
: 
ƒ AnimationPlaybackEvent()
AnimationTimeline
: 
ƒ AnimationTimeline()
Array
: 
ƒ Array()
ArrayBuffer
: 
ƒ ArrayBuffer()
Atomics
: 
Atomics {load: ƒ, store: ƒ, add: ƒ, sub: ƒ, and: ƒ, …}
Attr
: 
ƒ Attr()
Audio
: 
ƒ Audio()
AudioBuffer
: 
ƒ AudioBuffer()
AudioBufferSourceNode
: 
ƒ AudioBufferSourceNode()
AudioContext
: 
ƒ AudioContext()
AudioData
: 
ƒ AudioData()
AudioDecoder
: 
ƒ AudioDecoder()
AudioDestinationNode
: 
ƒ AudioDestinationNode()
AudioEncoder
: 
ƒ AudioEncoder()
AudioListener
: 
ƒ AudioListener()
AudioNode
: 
ƒ AudioNode()
AudioParam
: 
ƒ AudioParam()
AudioParamMap
: 
ƒ AudioParamMap()
AudioProcessingEvent
: 
ƒ AudioProcessingEvent()
AudioScheduledSourceNode
: 
ƒ AudioScheduledSourceNode()
AudioSinkInfo
: 
ƒ AudioSinkInfo()
AudioWorklet
: 
ƒ AudioWorklet()
AudioWorkletNode
: 
ƒ AudioWorkletNode()
AuthenticatorAssertionResponse
: 
ƒ AuthenticatorAssertionResponse()
AuthenticatorAttestationResponse
: 
ƒ AuthenticatorAttestationResponse()
AuthenticatorResponse
: 
ƒ AuthenticatorResponse()
BackgroundFetchManager
: 
ƒ BackgroundFetchManager()
BackgroundFetchRecord
: 
ƒ BackgroundFetchRecord()
BackgroundFetchRegistration
: 
ƒ BackgroundFetchRegistration()
BarProp
: 
ƒ BarProp()
BarcodeDetector
: 
ƒ BarcodeDetector()
BaseAudioContext
: 
ƒ BaseAudioContext()
BatteryManager
: 
ƒ BatteryManager()
BeforeInstallPromptEvent
: 
ƒ BeforeInstallPromptEvent()
BeforeUnloadEvent
: 
ƒ BeforeUnloadEvent()
BigInt
: 
ƒ BigInt()
BigInt64Array
: 
ƒ BigInt64Array()
BigUint64Array
: 
ƒ BigUint64Array()
BiquadFilterNode
: 
ƒ BiquadFilterNode()
Blob
: 
ƒ Blob()
BlobEvent
: 
ƒ BlobEvent()
Bluetooth
: 
ƒ Bluetooth()
BluetoothCharacteristicProperties
: 
ƒ BluetoothCharacteristicProperties()
BluetoothDevice
: 
ƒ BluetoothDevice()
BluetoothRemoteGATTCharacteristic
: 
ƒ BluetoothRemoteGATTCharacteristic()
BluetoothRemoteGATTDescriptor
: 
ƒ BluetoothRemoteGATTDescriptor()
BluetoothRemoteGATTServer
: 
ƒ BluetoothRemoteGATTServer()
BluetoothRemoteGATTService
: 
ƒ BluetoothRemoteGATTService()
BluetoothUUID
: 
ƒ BluetoothUUID()
Boolean
: 
ƒ Boolean()
BroadcastChannel
: 
ƒ BroadcastChannel()
BrowserCaptureMediaStreamTrack
: 
ƒ BrowserCaptureMediaStreamTrack()
ByteLengthQueuingStrategy
: 
ƒ ByteLengthQueuingStrategy()
CDATASection
: 
ƒ CDATASection()
CSS
: 
CSS {Hz: ƒ, Q: ƒ, ch: ƒ, cm: ƒ, cqb: ƒ, …}
CSSAnimation
: 
ƒ CSSAnimation()
CSSConditionRule
: 
ƒ CSSConditionRule()
CSSContainerRule
: 
ƒ CSSContainerRule()
CSSCounterStyleRule
: 
ƒ CSSCounterStyleRule()
CSSFontFaceRule
: 
ƒ CSSFontFaceRule()
CSSFontPaletteValuesRule
: 
ƒ CSSFontPaletteValuesRule()
CSSGroupingRule
: 
ƒ CSSGroupingRule()
CSSImageValue
: 
ƒ CSSImageValue()
CSSImportRule
: 
ƒ CSSImportRule()
CSSKeyframeRule
: 
ƒ CSSKeyframeRule()
CSSKeyframesRule
: 
ƒ CSSKeyframesRule()
CSSKeywordValue
: 
ƒ CSSKeywordValue()
CSSLayerBlockRule
: 
ƒ CSSLayerBlockRule()
CSSLayerStatementRule
: 
ƒ CSSLayerStatementRule()
CSSMathClamp
: 
ƒ CSSMathClamp()
CSSMathInvert
: 
ƒ CSSMathInvert()
CSSMathMax
: 
ƒ CSSMathMax()
CSSMathMin
: 
ƒ CSSMathMin()
CSSMathNegate
: 
ƒ CSSMathNegate()
CSSMathProduct
: 
ƒ CSSMathProduct()
CSSMathSum
: 
ƒ CSSMathSum()
CSSMathValue
: 
ƒ CSSMathValue()
CSSMatrixComponent
: 
ƒ CSSMatrixComponent()
CSSMediaRule
: 
ƒ CSSMediaRule()
CSSNamespaceRule
: 
ƒ CSSNamespaceRule()
CSSNumericArray
: 
ƒ CSSNumericArray()
CSSNumericValue
: 
ƒ CSSNumericValue()
CSSPageRule
: 
ƒ CSSPageRule()
CSSPerspective
: 
ƒ CSSPerspective()
CSSPositionValue
: 
ƒ CSSPositionValue()
CSSPropertyRule
: 
ƒ CSSPropertyRule()
CSSRotate
: 
ƒ CSSRotate()
CSSRule
: 
ƒ CSSRule()
CSSRuleList
: 
ƒ CSSRuleList()
CSSScale
: 
ƒ CSSScale()
CSSScopeRule
: 
ƒ CSSScopeRule()
CSSSkew
: 
ƒ CSSSkew()
CSSSkewX
: 
ƒ CSSSkewX()
CSSSkewY
: 
ƒ CSSSkewY()
CSSStartingStyleRule
: 
ƒ CSSStartingStyleRule()
CSSStyleDeclaration
: 
ƒ CSSStyleDeclaration()
CSSStyleRule
: 
ƒ CSSStyleRule()
CSSStyleSheet
: 
ƒ CSSStyleSheet()
CSSStyleValue
: 
ƒ CSSStyleValue()
CSSSupportsRule
: 
ƒ CSSSupportsRule()
CSSTransformComponent
: 
ƒ CSSTransformComponent()
CSSTransformValue
: 
ƒ CSSTransformValue()
CSSTransition
: 
ƒ CSSTransition()
CSSTranslate
: 
ƒ CSSTranslate()
CSSUnitValue
: 
ƒ CSSUnitValue()
CSSUnparsedValue
: 
ƒ CSSUnparsedValue()
CSSVariableReferenceValue
: 
ƒ CSSVariableReferenceValue()
Cache
: 
ƒ Cache()
CacheStorage
: 
ƒ CacheStorage()
CanvasCaptureMediaStreamTrack
: 
ƒ CanvasCaptureMediaStreamTrack()
CanvasGradient
: 
ƒ CanvasGradient()
CanvasPattern
: 
ƒ CanvasPattern()
CanvasRenderingContext2D
: 
ƒ CanvasRenderingContext2D()
CaptureController
: 
ƒ CaptureController()
ChannelMergerNode
: 
ƒ ChannelMergerNode()
ChannelSplitterNode
: 
ƒ ChannelSplitterNode()
CharacterData
: 
ƒ CharacterData()
Clipboard
: 
ƒ Clipboard()
ClipboardEvent
: 
ƒ ClipboardEvent()
ClipboardItem
: 
ƒ ClipboardItem()
CloseEvent
: 
ƒ CloseEvent()
CloseWatcher
: 
ƒ CloseWatcher()
Comment
: 
ƒ Comment()
CompositionEvent
: 
ƒ CompositionEvent()
CompressionStream
: 
ƒ CompressionStream()
ConstantSourceNode
: 
ƒ ConstantSourceNode()
ContentVisibilityAutoStateChangeEvent
: 
ƒ ContentVisibilityAutoStateChangeEvent()
ConvolverNode
: 
ƒ ConvolverNode()
CookieChangeEvent
: 
ƒ CookieChangeEvent()
CookieStore
: 
ƒ CookieStore()
CookieStoreManager
: 
ƒ CookieStoreManager()
CountQueuingStrategy
: 
ƒ CountQueuingStrategy()
Credential
: 
ƒ Credential()
CredentialsContainer
: 
ƒ CredentialsContainer()
CropTarget
: 
ƒ CropTarget()
Crypto
: 
ƒ Crypto()
CryptoKey
: 
ƒ CryptoKey()
CustomElementRegistry
: 
ƒ CustomElementRegistry()
CustomEvent
: 
ƒ CustomEvent()
CustomStateSet
: 
ƒ CustomStateSet()
DOMError
: 
ƒ DOMError()
DOMException
: 
ƒ DOMException()
DOMImplementation
: 
ƒ DOMImplementation()
DOMMatrix
: 
ƒ DOMMatrix()
DOMMatrixReadOnly
: 
ƒ DOMMatrixReadOnly()
DOMParser
: 
ƒ DOMParser()
DOMPoint
: 
ƒ DOMPoint()
DOMPointReadOnly
: 
ƒ DOMPointReadOnly()
DOMQuad
: 
ƒ DOMQuad()
DOMRect
: 
ƒ DOMRect()
DOMRectList
: 
ƒ DOMRectList()
DOMRectReadOnly
: 
ƒ DOMRectReadOnly()
DOMStringList
: 
ƒ DOMStringList()
DOMStringMap
: 
ƒ DOMStringMap()
DOMTokenList
: 
ƒ DOMTokenList()
DataTransfer
: 
ƒ DataTransfer()
DataTransferItem
: 
ƒ DataTransferItem()
DataTransferItemList
: 
ƒ DataTransferItemList()
DataView
: 
ƒ DataView()
Date
: 
ƒ Date()
DecompressionStream
: 
ƒ DecompressionStream()
DelayNode
: 
ƒ DelayNode()
DelegatedInkTrailPresenter
: 
ƒ DelegatedInkTrailPresenter()
DeviceMotionEvent
: 
ƒ DeviceMotionEvent()
DeviceMotionEventAcceleration
: 
ƒ DeviceMotionEventAcceleration()
DeviceMotionEventRotationRate
: 
ƒ DeviceMotionEventRotationRate()
DeviceOrientationEvent
: 
ƒ DeviceOrientationEvent()
Document
: 
ƒ Document()
DocumentFragment
: 
ƒ DocumentFragment()
DocumentPictureInPicture
: 
ƒ DocumentPictureInPicture()
DocumentPictureInPictureEvent
: 
ƒ DocumentPictureInPictureEvent()
DocumentTimeline
: 
ƒ DocumentTimeline()
DocumentType
: 
ƒ DocumentType()
DragEvent
: 
ƒ DragEvent()
DynamicsCompressorNode
: 
ƒ DynamicsCompressorNode()
Element
: 
ƒ Element()
ElementInternals
: 
ƒ ElementInternals()
EncodedAudioChunk
: 
ƒ EncodedAudioChunk()
EncodedVideoChunk
: 
ƒ EncodedVideoChunk()
Error
: 
ƒ Error()
ErrorEvent
: 
ƒ ErrorEvent()
EvalError
: 
ƒ EvalError()
Event
: 
ƒ Event()
EventCounts
: 
ƒ EventCounts()
EventSource
: 
ƒ EventSource()
EventTarget
: 
ƒ EventTarget()
External
: 
ƒ External()
EyeDropper
: 
ƒ EyeDropper()
FeaturePolicy
: 
ƒ FeaturePolicy()
FederatedCredential
: 
ƒ FederatedCredential()
Fence
: 
ƒ Fence()
FencedFrameConfig
: 
ƒ FencedFrameConfig()
File
: 
ƒ File()
FileList
: 
ƒ FileList()
FileReader
: 
ƒ FileReader()
FileSystemDirectoryHandle
: 
ƒ FileSystemDirectoryHandle()
FileSystemFileHandle
: 
ƒ FileSystemFileHandle()
FileSystemHandle
: 
ƒ FileSystemHandle()
FileSystemWritableFileStream
: 
ƒ FileSystemWritableFileStream()
FinalizationRegistry
: 
ƒ FinalizationRegistry()
Float32Array
: 
ƒ Float32Array()
Float64Array
: 
ƒ Float64Array()
FocusEvent
: 
ƒ FocusEvent()
FontData
: 
ƒ FontData()
FontFace
: 
ƒ FontFace()
FontFaceSetLoadEvent
: 
ƒ FontFaceSetLoadEvent()
FormData
: 
ƒ FormData()
FormDataEvent
: 
ƒ FormDataEvent()
FragmentDirective
: 
ƒ FragmentDirective()
Function
: 
ƒ Function()
GPU
: 
ƒ GPU()
GPUAdapter
: 
ƒ GPUAdapter()
GPUAdapterInfo
: 
ƒ GPUAdapterInfo()
GPUBindGroup
: 
ƒ GPUBindGroup()
GPUBindGroupLayout
: 
ƒ GPUBindGroupLayout()
GPUBuffer
: 
ƒ GPUBuffer()
GPUBufferUsage
: 
GPUBufferUsage {MAP_READ: 1, MAP_WRITE: 2, COPY_SRC: 4, COPY_DST: 8, INDEX: 16, …}
GPUCanvasContext
: 
ƒ GPUCanvasContext()
GPUColorWrite
: 
GPUColorWrite {RED: 1, GREEN: 2, BLUE: 4, ALPHA: 8, ALL: 15, …}
GPUCommandBuffer
: 
ƒ GPUCommandBuffer()
GPUCommandEncoder
: 
ƒ GPUCommandEncoder()
GPUCompilationInfo
: 
ƒ GPUCompilationInfo()
GPUCompilationMessage
: 
ƒ GPUCompilationMessage()
GPUComputePassEncoder
: 
ƒ GPUComputePassEncoder()
GPUComputePipeline
: 
ƒ GPUComputePipeline()
GPUDevice
: 
ƒ GPUDevice()
GPUDeviceLostInfo
: 
ƒ GPUDeviceLostInfo()
GPUError
: 
ƒ GPUError()
GPUExternalTexture
: 
ƒ GPUExternalTexture()
GPUInternalError
: 
ƒ GPUInternalError()
GPUMapMode
: 
GPUMapMode {READ: 1, WRITE: 2, Symbol(Symbol.toStringTag): 'GPUMapMode'}
GPUOutOfMemoryError
: 
ƒ GPUOutOfMemoryError()
GPUPipelineError
: 
ƒ GPUPipelineError()
GPUPipelineLayout
: 
ƒ GPUPipelineLayout()
GPUQuerySet
: 
ƒ GPUQuerySet()
GPUQueue
: 
ƒ GPUQueue()
GPURenderBundle
: 
ƒ GPURenderBundle()
GPURenderBundleEncoder
: 
ƒ GPURenderBundleEncoder()
GPURenderPassEncoder
: 
ƒ GPURenderPassEncoder()
GPURenderPipeline
: 
ƒ GPURenderPipeline()
GPUSampler
: 
ƒ GPUSampler()
GPUShaderModule
: 
ƒ GPUShaderModule()
GPUShaderStage
: 
GPUShaderStage {VERTEX: 1, FRAGMENT: 2, COMPUTE: 4, Symbol(Symbol.toStringTag): 'GPUShaderStage'}
GPUSupportedFeatures
: 
ƒ GPUSupportedFeatures()
GPUSupportedLimits
: 
ƒ GPUSupportedLimits()
GPUTexture
: 
ƒ GPUTexture()
GPUTextureUsage
: 
GPUTextureUsage {COPY_SRC: 1, COPY_DST: 2, TEXTURE_BINDING: 4, STORAGE_BINDING: 8, RENDER_ATTACHMENT: 16, …}
GPUTextureView
: 
ƒ GPUTextureView()
GPUUncapturedErrorEvent
: 
ƒ GPUUncapturedErrorEvent()
GPUValidationError
: 
ƒ GPUValidationError()
GainNode
: 
ƒ GainNode()
Gamepad
: 
ƒ Gamepad()
GamepadButton
: 
ƒ GamepadButton()
GamepadEvent
: 
ƒ GamepadEvent()
GamepadHapticActuator
: 
ƒ GamepadHapticActuator()
Geolocation
: 
ƒ Geolocation()
GeolocationCoordinates
: 
ƒ GeolocationCoordinates()
GeolocationPosition
: 
ƒ GeolocationPosition()
GeolocationPositionError
: 
ƒ GeolocationPositionError()
GravitySensor
: 
ƒ GravitySensor()
Gyroscope
: 
ƒ Gyroscope()
HID
: 
ƒ HID()
HIDConnectionEvent
: 
ƒ HIDConnectionEvent()
HIDDevice
: 
ƒ HIDDevice()
HIDInputReportEvent
: 
ƒ HIDInputReportEvent()
HTMLAllCollection
: 
ƒ HTMLAllCollection()
HTMLAnchorElement
: 
ƒ HTMLAnchorElement()
HTMLAreaElement
: 
ƒ HTMLAreaElement()
HTMLAudioElement
: 
ƒ HTMLAudioElement()
HTMLBRElement
: 
ƒ HTMLBRElement()
HTMLBaseElement
: 
ƒ HTMLBaseElement()
HTMLBodyElement
: 
ƒ HTMLBodyElement()
HTMLButtonElement
: 
ƒ HTMLButtonElement()
HTMLCanvasElement
: 
ƒ HTMLCanvasElement()
HTMLCollection
: 
ƒ HTMLCollection()
HTMLDListElement
: 
ƒ HTMLDListElement()
HTMLDataElement
: 
ƒ HTMLDataElement()
HTMLDataListElement
: 
ƒ HTMLDataListElement()
HTMLDetailsElement
: 
ƒ HTMLDetailsElement()
HTMLDialogElement
: 
ƒ HTMLDialogElement()
HTMLDirectoryElement
: 
ƒ HTMLDirectoryElement()
HTMLDivElement
: 
ƒ HTMLDivElement()
HTMLDocument
: 
ƒ HTMLDocument()
HTMLElement
: 
ƒ HTMLElement()
HTMLEmbedElement
: 
ƒ HTMLEmbedElement()
HTMLFencedFrameElement
: 
ƒ HTMLFencedFrameElement()
HTMLFieldSetElement
: 
ƒ HTMLFieldSetElement()
HTMLFontElement
: 
ƒ HTMLFontElement()
HTMLFormControlsCollection
: 
ƒ HTMLFormControlsCollection()
HTMLFormElement
: 
ƒ HTMLFormElement()
HTMLFrameElement
: 
ƒ HTMLFrameElement()
HTMLFrameSetElement
: 
ƒ HTMLFrameSetElement()
HTMLHRElement
: 
ƒ HTMLHRElement()
HTMLHeadElement
: 
ƒ HTMLHeadElement()
HTMLHeadingElement
: 
ƒ HTMLHeadingElement()
HTMLHtmlElement
: 
ƒ HTMLHtmlElement()
HTMLIFrameElement
: 
ƒ HTMLIFrameElement()
HTMLImageElement
: 
ƒ HTMLImageElement()
HTMLInputElement
: 
ƒ HTMLInputElement()
HTMLLIElement
: 
ƒ HTMLLIElement()
HTMLLabelElement
: 
ƒ HTMLLabelElement()
HTMLLegendElement
: 
ƒ HTMLLegendElement()
HTMLLinkElement
: 
ƒ HTMLLinkElement()
HTMLMapElement
: 
ƒ HTMLMapElement()
HTMLMarqueeElement
: 
ƒ HTMLMarqueeElement()
HTMLMediaElement
: 
ƒ HTMLMediaElement()
HTMLMenuElement
: 
ƒ HTMLMenuElement()
HTMLMetaElement
: 
ƒ HTMLMetaElement()
HTMLMeterElement
: 
ƒ HTMLMeterElement()
HTMLModElement
: 
ƒ HTMLModElement()
HTMLOListElement
: 
ƒ HTMLOListElement()
HTMLObjectElement
: 
ƒ HTMLObjectElement()
HTMLOptGroupElement
: 
ƒ HTMLOptGroupElement()
HTMLOptionElement
: 
ƒ HTMLOptionElement()
HTMLOptionsCollection
: 
ƒ HTMLOptionsCollection()
HTMLOutputElement
: 
ƒ HTMLOutputElement()
HTMLParagraphElement
: 
ƒ HTMLParagraphElement()
HTMLParamElement
: 
ƒ HTMLParamElement()
HTMLPictureElement
: 
ƒ HTMLPictureElement()
HTMLPreElement
: 
ƒ HTMLPreElement()
HTMLProgressElement
: 
ƒ HTMLProgressElement()
HTMLQuoteElement
: 
ƒ HTMLQuoteElement()
HTMLScriptElement
: 
ƒ HTMLScriptElement()
HTMLSelectElement
: 
ƒ HTMLSelectElement()
HTMLSlotElement
: 
ƒ HTMLSlotElement()
HTMLSourceElement
: 
ƒ HTMLSourceElement()
HTMLSpanElement
: 
ƒ HTMLSpanElement()
HTMLStyleElement
: 
ƒ HTMLStyleElement()
HTMLTableCaptionElement
: 
ƒ HTMLTableCaptionElement()
HTMLTableCellElement
: 
ƒ HTMLTableCellElement()
HTMLTableColElement
: 
ƒ HTMLTableColElement()
HTMLTableElement
: 
ƒ HTMLTableElement()
HTMLTableRowElement
: 
ƒ HTMLTableRowElement()
HTMLTableSectionElement
: 
ƒ HTMLTableSectionElement()
HTMLTemplateElement
: 
ƒ HTMLTemplateElement()
HTMLTextAreaElement
: 
ƒ HTMLTextAreaElement()
HTMLTimeElement
: 
ƒ HTMLTimeElement()
HTMLTitleElement
: 
ƒ HTMLTitleElement()
HTMLTrackElement
: 
ƒ HTMLTrackElement()
HTMLUListElement
: 
ƒ HTMLUListElement()
HTMLUnknownElement
: 
ƒ HTMLUnknownElement()
HTMLVideoElement
: 
ƒ HTMLVideoElement()
HashChangeEvent
: 
ƒ HashChangeEvent()
Headers
: 
ƒ Headers()
Highlight
: 
ƒ Highlight()
HighlightRegistry
: 
ƒ HighlightRegistry()
History
: 
ƒ History()
IDBCursor
: 
ƒ IDBCursor()
IDBCursorWithValue
: 
ƒ IDBCursorWithValue()
IDBDatabase
: 
ƒ IDBDatabase()
IDBFactory
: 
ƒ IDBFactory()
IDBIndex
: 
ƒ IDBIndex()
IDBKeyRange
: 
ƒ IDBKeyRange()
IDBObjectStore
: 
ƒ IDBObjectStore()
IDBOpenDBRequest
: 
ƒ IDBOpenDBRequest()
IDBRequest
: 
ƒ IDBRequest()
IDBTransaction
: 
ƒ IDBTransaction()
IDBVersionChangeEvent
: 
ƒ IDBVersionChangeEvent()
IIRFilterNode
: 
ƒ IIRFilterNode()
IdentityCredential
: 
ƒ IdentityCredential()
IdentityCredentialError
: 
ƒ IdentityCredentialError()
IdentityProvider
: 
ƒ IdentityProvider()
IdleDeadline
: 
ƒ IdleDeadline()
IdleDetector
: 
ƒ IdleDetector()
Image
: 
ƒ Image()
ImageBitmap
: 
ƒ ImageBitmap()
ImageBitmapRenderingContext
: 
ƒ ImageBitmapRenderingContext()
ImageCapture
: 
ƒ ImageCapture()
ImageData
: 
ƒ ImageData()
ImageDecoder
: 
ƒ ImageDecoder()
ImageTrack
: 
ƒ ImageTrack()
ImageTrackList
: 
ƒ ImageTrackList()
Ink
: 
ƒ Ink()
InputDeviceCapabilities
: 
ƒ InputDeviceCapabilities()
InputDeviceInfo
: 
ƒ InputDeviceInfo()
InputEvent
: 
ƒ InputEvent()
Int8Array
: 
ƒ Int8Array()
Int16Array
: 
ƒ Int16Array()
Int32Array
: 
ƒ Int32Array()
IntersectionObserver
: 
ƒ IntersectionObserver()
IntersectionObserverEntry
: 
ƒ IntersectionObserverEntry()
Intl
: 
Intl {getCanonicalLocales: ƒ, supportedValuesOf: ƒ, DateTimeFormat: ƒ, NumberFormat: ƒ, Collator: ƒ, …}
JSON
: 
JSON {Symbol(Symbol.toStringTag): 'JSON', parse: ƒ, stringify: ƒ, rawJSON: ƒ, isRawJSON: ƒ}
Keyboard
: 
ƒ Keyboard()
KeyboardEvent
: 
ƒ KeyboardEvent()
KeyboardLayoutMap
: 
ƒ KeyboardLayoutMap()
KeyframeEffect
: 
ƒ KeyframeEffect()
LargestContentfulPaint
: 
ƒ LargestContentfulPaint()
LaunchParams
: 
ƒ LaunchParams()
LaunchQueue
: 
ƒ LaunchQueue()
LayoutShift
: 
ƒ LayoutShift()
LayoutShiftAttribution
: 
ƒ LayoutShiftAttribution()
LinearAccelerationSensor
: 
ƒ LinearAccelerationSensor()
Location
: 
ƒ Location()
Lock
: 
ƒ Lock()
LockManager
: 
ƒ LockManager()
MIDIAccess
: 
ƒ MIDIAccess()
MIDIConnectionEvent
: 
ƒ MIDIConnectionEvent()
MIDIInput
: 
ƒ MIDIInput()
MIDIInputMap
: 
ƒ MIDIInputMap()
MIDIMessageEvent
: 
ƒ MIDIMessageEvent()
MIDIOutput
: 
ƒ MIDIOutput()
MIDIOutputMap
: 
ƒ MIDIOutputMap()
MIDIPort
: 
ƒ MIDIPort()
Map
: 
ƒ Map()
Math
: 
Math {abs: ƒ, acos: ƒ, acosh: ƒ, asin: ƒ, asinh: ƒ, …}
MathMLElement
: 
ƒ MathMLElement()
MediaCapabilities
: 
ƒ MediaCapabilities()
MediaDeviceInfo
: 
ƒ MediaDeviceInfo()
MediaDevices
: 
ƒ MediaDevices()
MediaElementAudioSourceNode
: 
ƒ MediaElementAudioSourceNode()
MediaEncryptedEvent
: 
ƒ MediaEncryptedEvent()
MediaError
: 
ƒ MediaError()
MediaKeyMessageEvent
: 
ƒ MediaKeyMessageEvent()
MediaKeySession
: 
ƒ MediaKeySession()
MediaKeyStatusMap
: 
ƒ MediaKeyStatusMap()
MediaKeySystemAccess
: 
ƒ MediaKeySystemAccess()
MediaKeys
: 
ƒ MediaKeys()
MediaList
: 
ƒ MediaList()
MediaMetadata
: 
ƒ MediaMetadata()
MediaQueryList
: 
ƒ MediaQueryList()
MediaQueryListEvent
: 
ƒ MediaQueryListEvent()
MediaRecorder
: 
ƒ MediaRecorder()
MediaSession
: 
ƒ MediaSession()
MediaSource
: 
ƒ MediaSource()
MediaSourceHandle
: 
ƒ MediaSourceHandle()
MediaStream
: 
ƒ MediaStream()
MediaStreamAudioDestinationNode
: 
ƒ MediaStreamAudioDestinationNode()
MediaStreamAudioSourceNode
: 
ƒ MediaStreamAudioSourceNode()
MediaStreamEvent
: 
ƒ MediaStreamEvent()
MediaStreamTrack
: 
ƒ MediaStreamTrack()
MediaStreamTrackEvent
: 
ƒ MediaStreamTrackEvent()
MediaStreamTrackGenerator
: 
ƒ MediaStreamTrackGenerator()
MediaStreamTrackProcessor
: 
ƒ MediaStreamTrackProcessor()
MediaStreamTrackVideoStats
: 
ƒ MediaStreamTrackVideoStats()
MessageChannel
: 
ƒ MessageChannel()
MessageEvent
: 
ƒ MessageEvent()
MessagePort
: 
ƒ MessagePort()
MimeType
: 
ƒ MimeType()
MimeTypeArray
: 
ƒ MimeTypeArray()
MouseEvent
: 
ƒ MouseEvent()
MutationEvent
: 
ƒ MutationEvent()
MutationObserver
: 
ƒ MutationObserver()
MutationRecord
: 
ƒ MutationRecord()
NaN
: 
NaN
NamedNodeMap
: 
ƒ NamedNodeMap()
NavigateEvent
: 
ƒ NavigateEvent()
Navigation
: 
ƒ Navigation()
NavigationCurrentEntryChangeEvent
: 
ƒ NavigationCurrentEntryChangeEvent()
NavigationDestination
: 
ƒ NavigationDestination()
NavigationHistoryEntry
: 
ƒ NavigationHistoryEntry()
NavigationPreloadManager
: 
ƒ NavigationPreloadManager()
NavigationTransition
: 
ƒ NavigationTransition()
Navigator
: 
ƒ Navigator()
NavigatorLogin
: 
ƒ NavigatorLogin()
NavigatorManagedData
: 
ƒ NavigatorManagedData()
NavigatorUAData
: 
ƒ NavigatorUAData()
NetworkInformation
: 
ƒ NetworkInformation()
Node
: 
ƒ Node()
NodeFilter
: 
ƒ NodeFilter()
NodeIterator
: 
ƒ NodeIterator()
NodeList
: 
ƒ NodeList()
Notification
: 
ƒ Notification()
Number
: 
ƒ Number()
OTPCredential
: 
ƒ OTPCredential()
Object
: 
ƒ Object()
OfflineAudioCompletionEvent
: 
ƒ OfflineAudioCompletionEvent()
OfflineAudioContext
: 
ƒ OfflineAudioContext()
OffscreenCanvas
: 
ƒ OffscreenCanvas()
OffscreenCanvasRenderingContext2D
: 
ƒ OffscreenCanvasRenderingContext2D()
Option
: 
ƒ Option()
OrientationSensor
: 
ƒ OrientationSensor()
OscillatorNode
: 
ƒ OscillatorNode()
OverconstrainedError
: 
ƒ OverconstrainedError()
PageTransitionEvent
: 
ƒ PageTransitionEvent()
PannerNode
: 
ƒ PannerNode()
PasswordCredential
: 
ƒ PasswordCredential()
Path2D
: 
ƒ Path2D()
PaymentAddress
: 
ƒ PaymentAddress()
PaymentManager
: 
ƒ PaymentManager()
PaymentMethodChangeEvent
: 
ƒ PaymentMethodChangeEvent()
PaymentRequest
: 
ƒ PaymentRequest()
PaymentRequestUpdateEvent
: 
ƒ PaymentRequestUpdateEvent()
PaymentResponse
: 
ƒ PaymentResponse()
Performance
: 
ƒ Performance()
PerformanceElementTiming
: 
ƒ PerformanceElementTiming()
PerformanceEntry
: 
ƒ PerformanceEntry()
PerformanceEventTiming
: 
ƒ PerformanceEventTiming()
PerformanceLongTaskTiming
: 
ƒ PerformanceLongTaskTiming()
PerformanceMark
: 
ƒ PerformanceMark()
PerformanceMeasure
: 
ƒ PerformanceMeasure()
PerformanceNavigation
: 
ƒ PerformanceNavigation()
PerformanceNavigationTiming
: 
ƒ PerformanceNavigationTiming()
PerformanceObserver
: 
ƒ PerformanceObserver()
PerformanceObserverEntryList
: 
ƒ PerformanceObserverEntryList()
PerformancePaintTiming
: 
ƒ PerformancePaintTiming()
PerformanceResourceTiming
: 
ƒ PerformanceResourceTiming()
PerformanceServerTiming
: 
ƒ PerformanceServerTiming()
PerformanceTiming
: 
ƒ PerformanceTiming()
PeriodicSyncManager
: 
ƒ PeriodicSyncManager()
PeriodicWave
: 
ƒ PeriodicWave()
PermissionStatus
: 
ƒ PermissionStatus()
Permissions
: 
ƒ Permissions()
PictureInPictureEvent
: 
ƒ PictureInPictureEvent()
PictureInPictureWindow
: 
ƒ PictureInPictureWindow()
Plugin
: 
ƒ Plugin()
PluginArray
: 
ƒ PluginArray()
PointerEvent
: 
ƒ PointerEvent()
PopStateEvent
: 
ƒ PopStateEvent()
Presentation
: 
ƒ Presentation()
PresentationAvailability
: 
ƒ PresentationAvailability()
PresentationConnection
: 
ƒ PresentationConnection()
PresentationConnectionAvailableEvent
: 
ƒ PresentationConnectionAvailableEvent()
PresentationConnectionCloseEvent
: 
ƒ PresentationConnectionCloseEvent()
PresentationConnectionList
: 
ƒ PresentationConnectionList()
PresentationReceiver
: 
ƒ PresentationReceiver()
PresentationRequest
: 
ƒ PresentationRequest()
ProcessingInstruction
: 
ƒ ProcessingInstruction()
Profiler
: 
ƒ Profiler()
ProgressEvent
: 
ƒ ProgressEvent()
Promise
: 
ƒ Promise()
PromiseRejectionEvent
: 
ƒ PromiseRejectionEvent()
Proxy
: 
ƒ Proxy()
PublicKeyCredential
: 
ƒ PublicKeyCredential()
PushManager
: 
ƒ PushManager()
PushSubscription
: 
ƒ PushSubscription()
PushSubscriptionOptions
: 
ƒ PushSubscriptionOptions()
RTCCertificate
: 
ƒ RTCCertificate()
RTCDTMFSender
: 
ƒ RTCDTMFSender()
RTCDTMFToneChangeEvent
: 
ƒ RTCDTMFToneChangeEvent()
RTCDataChannel
: 
ƒ RTCDataChannel()
RTCDataChannelEvent
: 
ƒ RTCDataChannelEvent()
RTCDtlsTransport
: 
ƒ RTCDtlsTransport()
RTCEncodedAudioFrame
: 
ƒ RTCEncodedAudioFrame()
RTCEncodedVideoFrame
: 
ƒ RTCEncodedVideoFrame()
RTCError
: 
ƒ RTCError()
RTCErrorEvent
: 
ƒ RTCErrorEvent()
RTCIceCandidate
: 
ƒ RTCIceCandidate()
RTCIceTransport
: 
ƒ RTCIceTransport()
RTCPeerConnection
: 
ƒ RTCPeerConnection()
RTCPeerConnectionIceErrorEvent
: 
ƒ RTCPeerConnectionIceErrorEvent()
RTCPeerConnectionIceEvent
: 
ƒ RTCPeerConnectionIceEvent()
RTCRtpReceiver
: 
ƒ RTCRtpReceiver()
RTCRtpSender
: 
ƒ RTCRtpSender()
RTCRtpTransceiver
: 
ƒ RTCRtpTransceiver()
RTCSctpTransport
: 
ƒ RTCSctpTransport()
RTCSessionDescription
: 
ƒ RTCSessionDescription()
RTCStatsReport
: 
ƒ RTCStatsReport()
RTCTrackEvent
: 
ƒ RTCTrackEvent()
RadioNodeList
: 
ƒ RadioNodeList()
Range
: 
ƒ Range()
RangeError
: 
ƒ RangeError()
ReadableByteStreamController
: 
ƒ ReadableByteStreamController()
ReadableStream
: 
ƒ ReadableStream()
ReadableStreamBYOBReader
: 
ƒ ReadableStreamBYOBReader()
ReadableStreamBYOBRequest
: 
ƒ ReadableStreamBYOBRequest()
ReadableStreamDefaultController
: 
ƒ ReadableStreamDefaultController()
ReadableStreamDefaultReader
: 
ƒ ReadableStreamDefaultReader()
ReferenceError
: 
ƒ ReferenceError()
Reflect
: 
Reflect {defineProperty: ƒ, deleteProperty: ƒ, apply: ƒ, construct: ƒ, get: ƒ, …}
RegExp
: 
ƒ RegExp()
RelativeOrientationSensor
: 
ƒ RelativeOrientationSensor()
RemotePlayback
: 
ƒ RemotePlayback()
ReportingObserver
: 
ƒ ReportingObserver()
Request
: 
ƒ Request()
ResizeObserver
: 
ƒ ResizeObserver()
ResizeObserverEntry
: 
ƒ ResizeObserverEntry()
ResizeObserverSize
: 
ƒ ResizeObserverSize()
Response
: 
ƒ Response()
SVGAElement
: 
ƒ SVGAElement()
SVGAngle
: 
ƒ SVGAngle()
SVGAnimateElement
: 
ƒ SVGAnimateElement()
SVGAnimateMotionElement
: 
ƒ SVGAnimateMotionElement()
SVGAnimateTransformElement
: 
ƒ SVGAnimateTransformElement()
SVGAnimatedAngle
: 
ƒ SVGAnimatedAngle()
SVGAnimatedBoolean
: 
ƒ SVGAnimatedBoolean()
SVGAnimatedEnumeration
: 
ƒ SVGAnimatedEnumeration()
SVGAnimatedInteger
: 
ƒ SVGAnimatedInteger()
SVGAnimatedLength
: 
ƒ SVGAnimatedLength()
SVGAnimatedLengthList
: 
ƒ SVGAnimatedLengthList()
SVGAnimatedNumber
: 
ƒ SVGAnimatedNumber()
SVGAnimatedNumberList
: 
ƒ SVGAnimatedNumberList()
SVGAnimatedPreserveAspectRatio
: 
ƒ SVGAnimatedPreserveAspectRatio()
SVGAnimatedRect
: 
ƒ SVGAnimatedRect()
SVGAnimatedString
: 
ƒ SVGAnimatedString()
SVGAnimatedTransformList
: 
ƒ SVGAnimatedTransformList()
SVGAnimationElement
: 
ƒ SVGAnimationElement()
SVGCircleElement
: 
ƒ SVGCircleElement()
SVGClipPathElement
: 
ƒ SVGClipPathElement()
SVGComponentTransferFunctionElement
: 
ƒ SVGComponentTransferFunctionElement()
SVGDefsElement
: 
ƒ SVGDefsElement()
SVGDescElement
: 
ƒ SVGDescElement()
SVGElement
: 
ƒ SVGElement()
SVGEllipseElement
: 
ƒ SVGEllipseElement()
SVGFEBlendElement
: 
ƒ SVGFEBlendElement()
SVGFEColorMatrixElement
: 
ƒ SVGFEColorMatrixElement()
SVGFEComponentTransferElement
: 
ƒ SVGFEComponentTransferElement()
SVGFECompositeElement
: 
ƒ SVGFECompositeElement()
SVGFEConvolveMatrixElement
: 
ƒ SVGFEConvolveMatrixElement()
SVGFEDiffuseLightingElement
: 
ƒ SVGFEDiffuseLightingElement()
SVGFEDisplacementMapElement
: 
ƒ SVGFEDisplacementMapElement()
SVGFEDistantLightElement
: 
ƒ SVGFEDistantLightElement()
SVGFEDropShadowElement
: 
ƒ SVGFEDropShadowElement()
SVGFEFloodElement
: 
ƒ SVGFEFloodElement()
SVGFEFuncAElement
: 
ƒ SVGFEFuncAElement()
SVGFEFuncBElement
: 
ƒ SVGFEFuncBElement()
SVGFEFuncGElement
: 
ƒ SVGFEFuncGElement()
SVGFEFuncRElement
: 
ƒ SVGFEFuncRElement()
SVGFEGaussianBlurElement
: 
ƒ SVGFEGaussianBlurElement()
SVGFEImageElement
: 
ƒ SVGFEImageElement()
SVGFEMergeElement
: 
ƒ SVGFEMergeElement()
SVGFEMergeNodeElement
: 
ƒ SVGFEMergeNodeElement()
SVGFEMorphologyElement
: 
ƒ SVGFEMorphologyElement()
SVGFEOffsetElement
: 
ƒ SVGFEOffsetElement()
SVGFEPointLightElement
: 
ƒ SVGFEPointLightElement()
SVGFESpecularLightingElement
: 
ƒ SVGFESpecularLightingElement()
SVGFESpotLightElement
: 
ƒ SVGFESpotLightElement()
SVGFETileElement
: 
ƒ SVGFETileElement()
SVGFETurbulenceElement
: 
ƒ SVGFETurbulenceElement()
SVGFilterElement
: 
ƒ SVGFilterElement()
SVGForeignObjectElement
: 
ƒ SVGForeignObjectElement()
SVGGElement
: 
ƒ SVGGElement()
SVGGeometryElement
: 
ƒ SVGGeometryElement()
SVGGradientElement
: 
ƒ SVGGradientElement()
SVGGraphicsElement
: 
ƒ SVGGraphicsElement()
SVGImageElement
: 
ƒ SVGImageElement()
SVGLength
: 
ƒ SVGLength()
SVGLengthList
: 
ƒ SVGLengthList()
SVGLineElement
: 
ƒ SVGLineElement()
SVGLinearGradientElement
: 
ƒ SVGLinearGradientElement()
SVGMPathElement
: 
ƒ SVGMPathElement()
SVGMarkerElement
: 
ƒ SVGMarkerElement()
SVGMaskElement
: 
ƒ SVGMaskElement()
SVGMatrix
: 
ƒ SVGMatrix()
SVGMetadataElement
: 
ƒ SVGMetadataElement()
SVGNumber
: 
ƒ SVGNumber()
SVGNumberList
: 
ƒ SVGNumberList()
SVGPathElement
: 
ƒ SVGPathElement()
SVGPatternElement
: 
ƒ SVGPatternElement()
SVGPoint
: 
ƒ SVGPoint()
SVGPointList
: 
ƒ SVGPointList()
SVGPolygonElement
: 
ƒ SVGPolygonElement()
SVGPolylineElement
: 
ƒ SVGPolylineElement()
SVGPreserveAspectRatio
: 
ƒ SVGPreserveAspectRatio()
SVGRadialGradientElement
: 
ƒ SVGRadialGradientElement()
SVGRect
: 
ƒ SVGRect()
SVGRectElement
: 
ƒ SVGRectElement()
SVGSVGElement
: 
ƒ SVGSVGElement()
SVGScriptElement
: 
ƒ SVGScriptElement()
SVGSetElement
: 
ƒ SVGSetElement()
SVGStopElement
: 
ƒ SVGStopElement()
SVGStringList
: 
ƒ SVGStringList()
SVGStyleElement
: 
ƒ SVGStyleElement()
SVGSwitchElement
: 
ƒ SVGSwitchElement()
SVGSymbolElement
: 
ƒ SVGSymbolElement()
SVGTSpanElement
: 
ƒ SVGTSpanElement()
SVGTextContentElement
: 
ƒ SVGTextContentElement()
SVGTextElement
: 
ƒ SVGTextElement()
SVGTextPathElement
: 
ƒ SVGTextPathElement()
SVGTextPositioningElement
: 
ƒ SVGTextPositioningElement()
SVGTitleElement
: 
ƒ SVGTitleElement()
SVGTransform
: 
ƒ SVGTransform()
SVGTransformList
: 
ƒ SVGTransformList()
SVGUnitTypes
: 
ƒ SVGUnitTypes()
SVGUseElement
: 
ƒ SVGUseElement()
SVGViewElement
: 
ƒ SVGViewElement()
Scheduler
: 
ƒ Scheduler()
Scheduling
: 
ƒ Scheduling()
Screen
: 
ƒ Screen()
ScreenDetailed
: 
ƒ ScreenDetailed()
ScreenDetails
: 
ƒ ScreenDetails()
ScreenOrientation
: 
ƒ ScreenOrientation()
ScriptProcessorNode
: 
ƒ ScriptProcessorNode()
ScrollTimeline
: 
ƒ ScrollTimeline()
SecurityPolicyViolationEvent
: 
ƒ SecurityPolicyViolationEvent()
Selection
: 
ƒ Selection()
Sensor
: 
ƒ Sensor()
SensorErrorEvent
: 
ƒ SensorErrorEvent()
Serial
: 
ƒ Serial()
SerialPort
: 
ƒ SerialPort()
ServiceWorker
: 
ƒ ServiceWorker()
ServiceWorkerContainer
: 
ƒ ServiceWorkerContainer()
ServiceWorkerRegistration
: 
ƒ ServiceWorkerRegistration()
Set
: 
ƒ Set()
ShadowRoot
: 
ƒ ShadowRoot()
SharedStorage
: 
ƒ SharedStorage()
SharedStorageWorklet
: 
ƒ SharedStorageWorklet()
SharedWorker
: 
ƒ SharedWorker()
SourceBuffer
: 
ƒ SourceBuffer()
SourceBufferList
: 
ƒ SourceBufferList()
SpeechSynthesisErrorEvent
: 
ƒ SpeechSynthesisErrorEvent()
SpeechSynthesisEvent
: 
ƒ SpeechSynthesisEvent()
SpeechSynthesisUtterance
: 
ƒ SpeechSynthesisUtterance()
StaticRange
: 
ƒ StaticRange()
StereoPannerNode
: 
ƒ StereoPannerNode()
Storage
: 
ƒ Storage()
StorageEvent
: 
ƒ StorageEvent()
StorageManager
: 
ƒ StorageManager()
String
: 
ƒ String()
StylePropertyMap
: 
ƒ StylePropertyMap()
StylePropertyMapReadOnly
: 
ƒ StylePropertyMapReadOnly()
StyleSheet
: 
ƒ StyleSheet()
StyleSheetList
: 
ƒ StyleSheetList()
SubmitEvent
: 
ƒ SubmitEvent()
SubtleCrypto
: 
ƒ SubtleCrypto()
Symbol
: 
ƒ Symbol()
SyncManager
: 
ƒ SyncManager()
SyntaxError
: 
ƒ SyntaxError()
TaskAttributionTiming
: 
ƒ TaskAttributionTiming()
TaskController
: 
ƒ TaskController()
TaskPriorityChangeEvent
: 
ƒ TaskPriorityChangeEvent()
TaskSignal
: 
ƒ TaskSignal()
Text
: 
ƒ Text()
TextDecoder
: 
ƒ TextDecoder()
TextDecoderStream
: 
ƒ TextDecoderStream()
TextEncoder
: 
ƒ TextEncoder()
TextEncoderStream
: 
ƒ TextEncoderStream()
TextEvent
: 
ƒ TextEvent()
TextMetrics
: 
ƒ TextMetrics()
TextTrack
: 
ƒ TextTrack()
TextTrackCue
: 
ƒ TextTrackCue()
TextTrackCueList
: 
ƒ TextTrackCueList()
TextTrackList
: 
ƒ TextTrackList()
TimeRanges
: 
ƒ TimeRanges()
ToggleEvent
: 
ƒ ToggleEvent()
Touch
: 
ƒ Touch()
TouchEvent
: 
ƒ TouchEvent()
TouchList
: 
ƒ TouchList()
TrackEvent
: 
ƒ TrackEvent()
TransformStream
: 
ƒ TransformStream()
TransformStreamDefaultController
: 
ƒ TransformStreamDefaultController()
TransitionEvent
: 
ƒ TransitionEvent()
TreeWalker
: 
ƒ TreeWalker()
TrustedHTML
: 
ƒ TrustedHTML()
TrustedScript
: 
ƒ TrustedScript()
TrustedScriptURL
: 
ƒ TrustedScriptURL()
TrustedTypePolicy
: 
ƒ TrustedTypePolicy()
TrustedTypePolicyFactory
: 
ƒ TrustedTypePolicyFactory()
TypeError
: 
ƒ TypeError()
UIEvent
: 
ƒ UIEvent()
URIError
: 
ƒ URIError()
URL
: 
ƒ URL()
URLPattern
: 
ƒ URLPattern()
URLSearchParams
: 
ƒ URLSearchParams()
USB
: 
ƒ USB()
USBAlternateInterface
: 
ƒ USBAlternateInterface()
USBConfiguration
: 
ƒ USBConfiguration()
USBConnectionEvent
: 
ƒ USBConnectionEvent()
USBDevice
: 
ƒ USBDevice()
USBEndpoint
: 
ƒ USBEndpoint()
USBInTransferResult
: 
ƒ USBInTransferResult()
USBInterface
: 
ƒ USBInterface()
USBIsochronousInTransferPacket
: 
ƒ USBIsochronousInTransferPacket()
USBIsochronousInTransferResult
: 
ƒ USBIsochronousInTransferResult()
USBIsochronousOutTransferPacket
: 
ƒ USBIsochronousOutTransferPacket()
USBIsochronousOutTransferResult
: 
ƒ USBIsochronousOutTransferResult()
USBOutTransferResult
: 
ƒ USBOutTransferResult()
Uint8Array
: 
ƒ Uint8Array()
Uint8ClampedArray
: 
ƒ Uint8ClampedArray()
Uint16Array
: 
ƒ Uint16Array()
Uint32Array
: 
ƒ Uint32Array()
UserActivation
: 
ƒ UserActivation()
VTTCue
: 
ƒ VTTCue()
ValidityState
: 
ƒ ValidityState()
VideoColorSpace
: 
ƒ VideoColorSpace()
VideoDecoder
: 
ƒ VideoDecoder()
VideoEncoder
: 
ƒ VideoEncoder()
VideoFrame
: 
ƒ VideoFrame()
VideoPlaybackQuality
: 
ƒ VideoPlaybackQuality()
ViewTimeline
: 
ƒ ViewTimeline()
ViewTransition
: 
ƒ ViewTransition()
VirtualKeyboard
: 
ƒ VirtualKeyboard()
VirtualKeyboardGeometryChangeEvent
: 
ƒ VirtualKeyboardGeometryChangeEvent()
VisibilityStateEntry
: 
ƒ VisibilityStateEntry()
VisualViewport
: 
ƒ VisualViewport()
WGSLLanguageFeatures
: 
ƒ WGSLLanguageFeatures()
WakeLock
: 
ƒ WakeLock()
WakeLockSentinel
: 
ƒ WakeLockSentinel()
WaveShaperNode
: 
ƒ WaveShaperNode()
WeakMap
: 
ƒ WeakMap()
WeakRef
: 
ƒ WeakRef()
WeakSet
: 
ƒ WeakSet()
WebAssembly
: 
WebAssembly {compile: ƒ, validate: ƒ, instantiate: ƒ, compileStreaming: ƒ, instantiateStreaming: ƒ, …}
WebGL2RenderingContext
: 
ƒ WebGL2RenderingContext()
WebGLActiveInfo
: 
ƒ WebGLActiveInfo()
WebGLBuffer
: 
ƒ WebGLBuffer()
WebGLContextEvent
: 
ƒ WebGLContextEvent()
WebGLFramebuffer
: 
ƒ WebGLFramebuffer()
WebGLProgram
: 
ƒ WebGLProgram()
WebGLQuery
: 
ƒ WebGLQuery()
WebGLRenderbuffer
: 
ƒ WebGLRenderbuffer()
WebGLRenderingContext
: 
ƒ WebGLRenderingContext()
WebGLSampler
: 
ƒ WebGLSampler()
WebGLShader
: 
ƒ WebGLShader()
WebGLShaderPrecisionFormat
: 
ƒ WebGLShaderPrecisionFormat()
WebGLSync
: 
ƒ WebGLSync()
WebGLTexture
: 
ƒ WebGLTexture()
WebGLTransformFeedback
: 
ƒ WebGLTransformFeedback()
WebGLUniformLocation
: 
ƒ WebGLUniformLocation()
WebGLVertexArrayObject
: 
ƒ WebGLVertexArrayObject()
WebKitCSSMatrix
: 
ƒ DOMMatrix()
WebKitMutationObserver
: 
ƒ MutationObserver()
WebSocket
: 
ƒ WebSocket()
WebTransport
: 
ƒ WebTransport()
WebTransportBidirectionalStream
: 
ƒ WebTransportBidirectionalStream()
WebTransportDatagramDuplexStream
: 
ƒ WebTransportDatagramDuplexStream()
WebTransportError
: 
ƒ WebTransportError()
WheelEvent
: 
ƒ WheelEvent()
Window
: 
ƒ Window()
WindowControlsOverlay
: 
ƒ WindowControlsOverlay()
WindowControlsOverlayGeometryChangeEvent
: 
ƒ WindowControlsOverlayGeometryChangeEvent()
Worker
: 
ƒ Worker()
Worklet
: 
ƒ Worklet()
WritableStream
: 
ƒ WritableStream()
WritableStreamDefaultController
: 
ƒ WritableStreamDefaultController()
WritableStreamDefaultWriter
: 
ƒ WritableStreamDefaultWriter()
XMLDocument
: 
ƒ XMLDocument()
XMLHttpRequest
: 
ƒ XMLHttpRequest()
XMLHttpRequestEventTarget
: 
ƒ XMLHttpRequestEventTarget()
XMLHttpRequestUpload
: 
ƒ XMLHttpRequestUpload()
XMLSerializer
: 
ƒ XMLSerializer()
XPathEvaluator
: 
ƒ XPathEvaluator()
XPathExpression
: 
ƒ XPathExpression()
XPathResult
: 
ƒ XPathResult()
XRAnchor
: 
ƒ XRAnchor()
XRAnchorSet
: 
ƒ XRAnchorSet()
XRBoundedReferenceSpace
: 
ƒ XRBoundedReferenceSpace()
XRCPUDepthInformation
: 
ƒ XRCPUDepthInformation()
XRCamera
: 
ƒ XRCamera()
XRDOMOverlayState
: 
ƒ XRDOMOverlayState()
XRDepthInformation
: 
ƒ XRDepthInformation()
XRFrame
: 
ƒ XRFrame()
XRHitTestResult
: 
ƒ XRHitTestResult()
XRHitTestSource
: 
ƒ XRHitTestSource()
XRInputSource
: 
ƒ XRInputSource()
XRInputSourceArray
: 
ƒ XRInputSourceArray()
XRInputSourceEvent
: 
ƒ XRInputSourceEvent()
XRInputSourcesChangeEvent
: 
ƒ XRInputSourcesChangeEvent()
XRLayer
: 
ƒ XRLayer()
XRLightEstimate
: 
ƒ XRLightEstimate()
XRLightProbe
: 
ƒ XRLightProbe()
XRPose
: 
ƒ XRPose()
XRRay
: 
ƒ XRRay()
XRReferenceSpace
: 
ƒ XRReferenceSpace()
XRReferenceSpaceEvent
: 
ƒ XRReferenceSpaceEvent()
XRRenderState
: 
ƒ XRRenderState()
XRRigidTransform
: 
ƒ XRRigidTransform()
XRSession
: 
ƒ XRSession()
XRSessionEvent
: 
ƒ XRSessionEvent()
XRSpace
: 
ƒ XRSpace()
XRSystem
: 
ƒ XRSystem()
XRTransientInputHitTestResult
: 
ƒ XRTransientInputHitTestResult()
XRTransientInputHitTestSource
: 
ƒ XRTransientInputHitTestSource()
XRView
: 
ƒ XRView()
XRViewerPose
: 
ƒ XRViewerPose()
XRViewport
: 
ƒ XRViewport()
XRWebGLBinding
: 
ƒ XRWebGLBinding()
XRWebGLDepthInformation
: 
ƒ XRWebGLDepthInformation()
XRWebGLLayer
: 
ƒ XRWebGLLayer()
XSLTProcessor
: 
ƒ XSLTProcessor()
console
: 
console {debug: ƒ, error: ƒ, info: ƒ, log: ƒ, warn: ƒ, …}
decodeURI
: 
ƒ decodeURI()
decodeURIComponent
: 
ƒ decodeURIComponent()
encodeURI
: 
ƒ encodeURI()
encodeURIComponent
: 
ƒ encodeURIComponent()
escape
: 
ƒ escape()
eval
: 
ƒ eval()
event
: 
undefined
globalThis
: 
Window {window: Window, self: Window, document: document, name: '', location: Location, …}
isFinite
: 
ƒ isFinite()
isNaN
: 
ƒ isNaN()
offscreenBuffering
: 
true
parseFloat
: 
ƒ parseFloat()
parseInt
: 
ƒ parseInt()
undefined
: 
undefined
unescape
: 
ƒ unescape()
webkitMediaStream
: 
ƒ MediaStream()
webkitRTCPeerConnection
: 
ƒ RTCPeerConnection()
webkitSpeechGrammar
: 
ƒ SpeechGrammar()
webkitSpeechGrammarList
: 
ƒ SpeechGrammarList()
webkitSpeechRecognition
: 
ƒ SpeechRecognition()
webkitSpeechRecognitionError
: 
ƒ SpeechRecognitionErrorEvent()
webkitSpeechRecognitionEvent
: 
ƒ SpeechRecognitionEvent()
webkitURL
: 
ƒ URL()
__REACT_DEVTOOLS_GLOBAL_HOOK__
: 
(...)
get __REACT_DEVTOOLS_GLOBAL_HOOK__
: 
()=>O
[[Prototype]]
: 
Window 
`)
;
},"2024-04-29 10:13:00","2024-05-17 10:13:00","Appendix I","globalthis-this-javascript-ref"],
["MDN Web docs Ref",function() {

return  createScrollableDiv(`
MDN Web Docs Glossary - Definitions of Web related terms

`,`
Abstraction
Accent
Accessibility
Accessibility tree
Accessible description
Accessible name
Adobe Flash
Advance measure
Ajax
Algorithm
Alignment container
Alignment subject
Alpha (alpha channel)
ALPN
API
Apple Safari
Application Context
Argument
ARIA
ARPA
ARPANET
Array
ASCII
Aspect ratio
Asynchronous
ATAG
Attribute
Bandwidth
Base64
Baseline
Beacon
Bézier curve
bfcache
BiDi
BigInt
Binding
Bitwise flags
Blink
Block
Block cipher mode of operation
Block-level content
Boolean
Bounding Box
Breadcrumb
Brotli compression
Browser
Browsing context
Buffer
Cache
Cacheable
CalDAV
Call stack
Callback function
Camel case
Canonical order
Canvas
Card sorting
CardDAV
Caret
CDN
Certificate authority
Certified
Challenge-response authentication
Character
Character encoding
Character set
Chrome
CIA
Cipher
Cipher suite
Ciphertext
Class
Clickjacking
Closure
CMS
Code point
Code splitting
Code unit
Codec
Color space
Color wheel
Compile
Compile time
Composite operation
Computer Programming
Conditional
Constant
Constructor
Continuous Media
Control flow
Cookie
Copyleft
CORS
CORS-safelisted request header
CORS-safelisted response header
Crawler
CRLF
Cross Axis
Cross-site scripting (XSS)
CRUD
Cryptanalysis
Cryptographic hash function
Cryptography
CSP
CSRF
CSS
CSS Object Model (CSSOM)
CSS pixel
CSS preprocessor
Data structure
Database
Decryption
Deep copy
Delta
Denial of Service
Deno
Descriptor (CSS)
Deserialization
Developer Tools
Digest
Digital certificate
Distributed Denial of Service
DMZ
DNS
Doctype
Document directive
Document environment
DOM (Document Object Model)
Domain
Domain name
Domain sharding
Dominator
DoS attack
DSL
DTLS (Datagram Transport Layer Security)
DTMF (Dual-Tone Multi-Frequency signaling)
Dynamic typing
ECMA
ECMAScript
Effective connection type
Element
Encapsulation
Encryption
Endianness
Engine
Entity
Entity header
Enumerated
eTLD
Event
Exception
EXIF
Expando
Fallback alignment
Falsy
Favicon
Fetch directive
Fetch metadata request header
Fingerprinting
Firefox OS
Firewall
First contentful paint
First CPU idle
First input delay
First Meaningful Paint
First paint
First-class Function
Flex
Flex Container
Flex Item
Flexbox
Forbidden header name
Forbidden response header name
Fork
Fragmentainer
Frame rate (FPS)
FTP
FTU
Function
Fuzz testing
Gamut
Garbage collection
Gecko
General header
GIF
Git
Global object
Global scope
Global variable
Glyph
Google Chrome
GPL
GPU
Graceful degradation
Grid
Grid Areas
Grid Axis
Grid Cell
Grid Column
Grid container
Grid Lines
Grid Row
Grid Tracks
Guard
Gutters
GZip compression
Hash
Head
High-level programming language
HMAC
Hoisting
Host
Hotlink
Houdini
HPKP
HSTS
HTML
HTML5
HTTP
HTTP header
HTTP/2
HTTP/3
HTTPS
HTTPS RR
Hyperlink
Hypertext
IANA
ICANN
ICE
IDE
Idempotent
Identifier
IDL
IETF
IIFE
IMAP
Immutable
IndexedDB
Information architecture
Inheritance
Ink overflow
Inline-level content
Input method editor
Instance
Internationalization (i18n)
Internet
Interpolation
Intrinsic size
IP Address
IPv4
IPv6
IRC
ISO
ISP
ITU
Jank
Java
JavaScript
JPEG
JSON
JSON type representation
Kebab case
Key
Keyword
Largest contentful paint
Latency
Layout viewport
Lazy load
LGPL
Ligature
Literal
Local scope
Local variable
Locale
Localization
Long task
Loop
Lossless compression
Lossy compression
LTR (Left To Right)
Main Axis
Main thread
Markup
MathML
Media
Media query
Metadata
Method
Microsoft Edge
Microsoft Internet Explorer
Middleware
MIME
MIME type
Minification
MitM
Mixin
Mobile First
Modem
Modularity
Mozilla Firefox
Mutable
MVC
Namespace
NaN
NAT
Native
Navigation directive
Netscape Navigator
Network throttling
NNTP
Node
Node.js
Non-normative
Normative
Null
Nullish value
Number
Object
Object reference
OOP
OpenGL
OpenSSL
Opera Browser
Operand
Operator
Origin
OTA
OWASP
P2P
PAC
Packet
Page load time
Page prediction
Parameter
Parent object
Parse
Parser
Payload body
Payload header
PDF
Perceived performance
Percent-encoding
PHP
Pixel
Placeholder names
Plaintext
Plugin
PNG
Polyfill
Polymorphism
POP3
Port
Prefetch
Preflight request
Prerender
Presto
Primitive
Privileged
Privileged code
Progressive Enhancement
Progressive web apps
Promise
Property
Protocol
Prototype
Prototype-based programming
Proxy server
Pseudo-class
Pseudo-element
Pseudocode
Public-key cryptography
Python
Quality values
Quaternion
QUIC
RAIL
Random Number Generator
Raster image
RDF
Real User Monitoring (RUM)
Recursion
Reflow
Regular expression
Render-blocking
Rendering engine
Repaint
Replay attack
Repo
Reporting directive
Representation header
Request header
Resource Timing
Response header
Responsive web design
REST
RGB
RIL
Robots.txt
Round Trip Time (RTT)
Routers
RSS
Rsync
RTCP (RTP Control Protocol)
RTF
RTL (Right to Left)
RTP (Real-time Transport Protocol) and SRTP (Secure RTP)
RTSP: Real-time streaming protocol
Ruby
Safe
Same-origin policy
SCM
Scope
Screen reader
Script-supporting element
Scroll boundary
Scroll chaining
Scroll container
SCTP
SDK (Software Development Kit)
SDP
Search engine
Second-level Domain
Secure Context
Secure Sockets Layer (SSL)
Selector (CSS)
Self-Executing Anonymous Function
Semantics
SEO
Serializable object
Serialization
Server
Server Timing
Session Hijacking
SGML
Shadow tree
Shallow copy
Shim
Signature
SIMD
Simple header
Simple response header
SISD
Site
Site map
SLD
Sloppy mode
Slug
Smoke Test
SMPTE (Society of Motion Picture and Television Engineers)
SMTP
Snake case
Snap positions
SOAP
SPA (Single-page application)
Specification
Speculative parsing
Speed index
SQL
SQL Injection
SRI
Stacking context
State machine
Statement
Static method
Static typing
Sticky activation
Strict mode
String
Stringifier
STUN
Style origin
Stylesheet
Submit button
SVG
SVN
Symbol
Symmetric-key cryptography
Synchronous
Syntax
Syntax error
Synthetic monitoring
Table Grid Box
Table Wrapper Box
Tag
TCP
TCP handshake
TCP slow start
Telnet
Texel
The Khronos Group
Thread
Three js
Time to first byte
Time to interactive
TLD
TOFU
Top layer
Transient activation
Transport Layer Security (TLS)
Tree shaking
Trident
Truthy
TTL
TURN
Type
Type coercion
Type conversion
TypeScript
UDP (User Datagram Protocol)
UI
Undefined
Unicode
Unix time
URI
URL
URN
Usenet
User agent
UTF-8
UUID
UX
Validator
Value
Variable
Vendor Prefix
Viewport
Visual Viewport
Void element
VoIP
W3C
WAI
WCAG
Web performance
Web server
Web standards
WebAssembly
WebDAV
WebExtensions
WebGL
WebIDL
WebKit
WebM
WebP
WebRTC
WebSockets
WebVTT
WHATWG
Whitespace
WindowProxy
World Wide Web
Wrapper
XFormsDeprecated
XHTML
XInclude
XLink
XML
XMLHttpRequest (XHR)
XPath
XQuery
XSLT
Zstandard compression`.split("\n").map((x, i) => String(i+1) +". " + x).join("\n") + `

`);
},"2024-05-09 18:00:00","2024-05-17 18:00:00","Appendix II","mdn-web-docs-ref"],
["Chrome web storage and Quota concepts Ref",function() {

return  `
Chrome Web Storage and Quota Concepts.
Authors jsbellchromium.org .
Last Updated Jan .
Status public.
.
Related Reading.
Key Concepts.
Chrome Implementation.
Standards.
Quota.
Concepts.
Quota Calculations.
Best Effort vs.
Persistent Permission.
Eviction.
Storage Backend Integration.
Clearing Browsing Data.
User Initiated.
Site Initiated.
Individual storage APIs.
ClearSiteData header.
Quota Eviction.
Retention Lifetimes.
Default (a.k.a.
best effort).
Incognito Guest Mode (implemented as Incognito session).
SessionOnly (a.k.a.
clear on exit).
Save Session State.
In Detail Legacy TEMPORARY vs.
PERSISTENT Model.
TEMPORARY namespace.
PERSISTENT namespace.
Requesting PERSISTENT quota.
Querying PERSISTENT quota.
Using PERSISTENT quota.
.
Related Reading.
Web.Dev Storage for the web.
Key Concepts.
Chrome Implementation.
.
Webvisible storage is scoped to a Browsing Context .
Each user profile is a separate Browsing Context.
An Incognito session is its own Browsing Context.
Guest Mode is implemented as an Incognito Browsing Context.
A Storage Partition is a class owned by a Browsing Context () which manages storagerelated data so these two terms are often used interchangeably..
Storage associated with a Browsing Context is known as Browsing Data.
This includes webvisible storage (cookies localStorage Indexed DB OPFS History API etc).
This also includes nonwebvisible storage e.g.
full (crossorigin) history some permissions passwords autofill etc.
.
Within webvisible Browsing Data there is.
cookie jar manages HTTP cookie data (which spans origins).
originscoped data anything visible only to a single origin via web APIs.
Within originscoped data a subset is quotamanaged data accounted for by the Quota Manager.
e.g.
indexed DB is quotamanaged data.
e.g.
local storage is not quotamanaged data each origin has a MB limit.
Within quotamanaged data there are different storage types.
.
This is particularly subtle and confusing it stems in part from abandoned proposals.
.
temporary data that the browser stores on behalf of an origin.
No permission is needed for the site to write to temporary storage up to a browserdefined quota limit for the origin.
Storage is best effort meaning the browser will do its best to keep the data around but could delete it if disk space is running low more recently used sites need space etc..
persistent an early proposal for quota management on the web defined two separate namespaces TEMPORARY (the default) and PERSISTENT (grantable by permission).
Only Chrome implemented this and only for a deprecated quota API and a deprecated legacy file system API.
Sites need to explicitly request a certain amount of PERSISTENT quota and the user is given a permission prompt to approvedecline.
If approved data written to the PERSISTENT space will not be evicted by the browser if space is running low it will only be removed if the user explicitly clears storage.
(functionally deprecated as of M).
syncable this only applies to data stored via a chrome.syncFileSystem API available to Chrome Apps..
An origin can be marked with various additional policy.
unlimitedStorage can be granted to an origin via an extension this removes quota restrictions and exempts an origin from quotabased eviction.
sessiononly (a.k.a.
clear on exit) originscoped data will be deleted when the browsing session ends (e.g.
shutdown).
.
Standards.
.
The Storage Standard defines originscoped data to exist within an origins storage unit this corresponds to Chromes quotamanaged data for an origin..
The notion of nonquotamanaged data for an origin is not present in the spec..
Each storage unit contains a single bucket this corresponds to Chromes temporary storage type.
.
A bucket has various modes.
besteffort the default data in the bucket will be preserved based on the user agents heuristics but no guarantees should be made to the user about the retention.
persistent assigned via permission when granted the data in the bucket will be preserved unless explicitly cleared by the user.
.
NOTE there are two meanings for persistent the old PERSISTENT namespace used in Chrome and the persistent permission defined in the Storage API.
To disambiguate the latter is often referred to as durable in the Chrome codebase.
More details below..
.
.
.
Note The Legacy File System API and the new File System Access APIs Origin Private File System utilize the same storage within the TEMPORARY bucket..
Quota.
Concepts.
Each origin is given a quota a number of bytes of data it is able to store.
The quota will vary from device to device depending on disk space available.
As data is stored the usage goes up and as data is deleted the usage goes down.
Operations in Indexed DB Cache API WebSQL File System etc.
will fail with a QuotaExceededError if usage would increase past quota.
.
.
This is exposed to script via.
.
navigator.storage.estimate().then(.
(usage quota) > console.log(using usage out of quota).
error > console.warn(error estimating quota error.name error.message).
).
.
Note that the usage change when storingdeleting data is complicated as Chrome optimizes for speed.
For example storage systems typically delete data by appending tombstone records then later compacting to recover space so deletions may temporarily increase the space used.
Storage systems also use compression which reduces the apparent size of data and often allocate in fixed size blocks which increases the apparent size of data..
Quota Calculations.
Based on the amount of storage available (disk space) and the type of operating system Chrome computes a total amount of space it is willing to use (temporary pool) and allows each origin to use up to a fraction of that.
Currently the heuristics are that the total pool size is of the disk and each origin can use at most of that.
.
.
.
.
Heres how you can think about quota if GB is granted to the origin by Chrome and .
GB is used by Indexed DB and .
GB is used by Cache API then usage would be GB and up to GB more could be stored before QuotaExceededErrors would be seen.
.
.
.
Special cases.
In Incognito sessions quotamanaged data is (usually) stored in memory rather than on disk.
The temporary pool is calculated as the minimum of of system memory or MB (randomized by to prevent fingerprinting).
Each origin is given up to of that..
Origins for which the sessiononly policy is applied are further capped at MB (randomized by ) even though the data is stored on disk and they take data from the overall pool.
This heuristic is applied so that sites see a much lower quota which in turn sites often use as a heuristic for whether or not to download large corpuses of data for offline use since its a poor experience to download large amounts of data which will be wiped when the browser is closed..
Starting in M free disk space is no longer factored into the quota calculation.
The quota returned by navigator.storage.estimate() reports the maximum amount of space the quota system will allow the origin to write but does not guarantee that much disk space to be available.
It is possible that reported quota will be greater than free disk space available so origins should always handle outofdiskspace write errors gracefully..
.
These default quota calculations are defined in storagebrowserquotaquotasettings.cc (but can be overridden for different shells e.g.
chromecast).
Best Effort vs.
Persistent Permission.
Storage is by default best effort anything an origin stores will be retained until the browser is low on storage space at which point the data for the origin least recently accessed will be discarded.
.
.
An origin can request persistent permission if granted the origin will not be cleared when the browser is low on space.
This can be used when an origin is storing critical data (e.g.
offline document edits tickets for events or travel etc) although the user can still clear all browser storage.
The permission will be granted automatically based on heuristics about the users engagement with the site.
.
.
navigator.storage.persist().
.then(granted > console.log(is the origin now persistent granted).
.
This can also be checked without requesting persistence.
.
navigator.storage.persisted().
.then(granted > console.log(is the origin persistent granted).
.
Best practice is to request persistent storage if necessary and check if granted before showing any UI that has a guarantee about the data..
.
Note that our statistics show that even best effort data is very infrequently cleared automatically by Chrome.
It is far more common for users to manually clear storage..
.
What does this mean for quota Nothing its just about how Chrome behaves when running out of overall storage space.
You can think about this as an option on the side.
.
.
.
Eviction.
Once an origin uses up all of its quota additional storage operations will fail with QuotaExceededError.
The origin must free up space by deleting data before it can store new data..
.
But what happens when Chrome itself runs out of space If you remember the original calculation Chrome will let an origin use up to of the pool.
This is based on the observation that most sites that a user visits will store very little data while a very small number will benefit from storing a lot and these need to be balanced..
.
.
.
In the above picture origin a is the least recently visited site origin b the next least recently visited and so on.
Origin e and origin k are getting close to their quota limits but havent reached it yet and overall Chrome is using less than the limit it selected so nothing will be evicted.
Origin b has a star () because it was granted the persistent permission..
.
Now lets say the user visits origin n again which happens to be a music playing site and the user pins additional tracks for offline listening.
The site stores even more data (using the quota APIs to make sure its under the limit).
.
.
.
Note that.
Each origin is still within its quota.
But Chrome has exceeded the overall limit.
.
The least recently used best effort origins (those without the persistent permission) start being evicted until Chrome is back under the limit.
.
.
.
When an origin is evicted all of its quotamanaged data (Indexed DB Cache API etc) is deleted..
.
Storage Backend Integration.
.
The Quota Manager lives in storagebrowserquotaquotamanager.cc.
It implements eviction logic tracking usage per origin etc.
Each quotamanaged storage backend implements QuotaClient (storagebrowserquotaquotaclient.h) with a unique QuotaClientID..
.
When data is accessed by a quotamanaged storage backend it calls into QuotaManagerNotifyStorageAccessed() which updates the LRU ordering for origins (necessary for eviction control also presented in some UI).
Before data is added by a quotamanaged storage backend it should call QuotaManagerGetUsageAndQuota() to ensure there is room and fail the request otherwise..
When data is added or removed by a quotamanaged storage backend it calls into QuotaManagerNotifyStorageModified() with a byte delta (positive or negative)..
.
.
.
Clearing Browsing Data.
Browsing Data can be cleared in various ways.
.
User Initiated through UI.
Site Initiated through APIs or HTTP headers.
Quota Eviction by the Quota Manager.
Extension initiated through the browsingData api.
.
Explicit clearing (by the user or site) overrides any persistence guarantees (e.g.
persistence permission).
.
.
.
.
User Initiated.
Clear Browsing Data Clear Site Data chrome.browsingData extension API.
Allow deletion of specific time ranges (any origin modified within that window is wiped).
UI chromesettingsclearBrowserData (and chromesettingssiteData Remove All).
Code BrowsingDataRemoverRemoveWithFilterAndReply() StoragePartitionClearData() QuotaManagerGetOriginsModifiedSince() QuotaManagerDeleteOriginData().
.
.
.
DevTools.
Allows deletion of individual origins storage types (for developers).
UI DevTools > Application > Clear storage > Clear site data.
Code StorageHandlerClearDataForOrigin() StoragePartitionClearData() QuotaManagerGetOriginsModifiedSince() QuotaManagerDeleteOriginData().
.
.
.
Cookies UI (Cookie Tree).
Allows deletion of individual origins.
UI chromesettingssiteData.
Source chromebrowserbrowsingdata.
Enumeration BrowsingDataXXXHelperStartFetching(context) XXXContextGetAllOrigins().
Deletion BrowsingDataXXXHelperDeleteXXX(origin) XXXContextDeleteOrigin(origin).
implementation notes implementation .
.
.
.
.
Android Storage UI.
Allows deletion of individual origins.
StorageInfo.java QuotaManager.
LocalStorageInfo.java (localstorage and cookies).
.
.
.
Site Initiated.
Individual storage APIs.
Quota Managed.
FileSystem delete individual filesdirectories e.g.
entry.remove() directoryEntry.removeRecursively().
Web SQL drop tables.
Indexed DB delete databases e.g.
indexedDB.deleteDatabase(databaseName).
Cache Storage delete caches e.g.
caches.delete(cacheName).
Service Worker unregister e.g.
registration.unregister().
Other.
localStorage localStorage.clear().
sessionStorage sessionStorage.clear().
ClearSiteData header.
Spec httpswc.github.iowebappsecclearsitedata.
ClearSiteData cookies clears cookies (and associated data) related to a responses URL.
ClearSiteData storage clears originscoped data (both quotamanaged and otherwise) for the responses origin.
Quota Eviction.
See QuotaEviction.
.
Retention Lifetimes.
Default (a.k.a.
best effort).
Quota Managed Data is preserved until QuotaManager calls QuotaClientDeleteOriginData.
Others have specific rules (e.g.
LRU cookie priorities) and perorigin quotas (e.g.
MB for localStorage).
Incognito Guest Mode (implemented as Incognito session).
Settings UI (e.g.
chromesettingsclearBrowserData) is NOT available within an Incognito session..
Data can be deleted within an Incognito session via.
DevTools (application).
Guest mode (which does not delete the whole session).
SessionOnly (a.k.a.
clear on exit).
chromesettingscookies.
Keep local data only until you quit the browser applies to all origins.
Clear on exit useradmin configurable site patterns.
code SpecialStoragePolicyIsStorageSessionOnly.
implementation notes on StoragePartition shutdown each backend is shut down it enumerates origins and deletes any set to IsStorageSessionOnly.
caveats see Save Session State which overrides this.
Save Session State.
Called on unusual shutdown (e.g.
Android) where SessionOnly clearing should be skipped.
code BrowserContextSaveSessionState.
implementation notes calls into each backends SetForceKeepSessionState() equivalent sets a flag which causes SessionOnly clearing on shutdown to be bypassed.
known issues httpscrbug.com.
.
.
.
In Detail Legacy TEMPORARY vs.
PERSISTENT Model.
Just to make things extra confusing Chrome also implements an older proposal with similar names but very different behavior..
.
There was an early proposal that each type of storage could be in a temporary area or a persistent area.
This was only ever implemented in Chrome and only for the Legacy File System API and old Quota APIs..
.
TEMPORARY namespace.
.
Temporary corresponds to everything described above data is stored as best effort and quota is granted automatically to each origin..
.
There are multiple APIs that give the same results based on different proposals over the years.
.
Old Chromeonly StorageQuota.
.
navigator.webkitTemporaryStorage.queryUsageAndQuota(.
(usage quota) > console.log(using usage out of quota).
error > console.warn(error estimating quota error.name error.message).
).
.
New in Chrome and Firefox StorageManager.
.
navigator.storage.estimate().then(.
( usage quota ) > console.log(using usage out of quota).
error > console.warn(error estimating quota error.name error.message).
).
.
PERSISTENT namespace.
.
PERSISTENT quota could be requested which would prompt the user.
If granted data could be stored using the Legacy File System API that would not be cleared automatically when storage was running low..
.
You can think of this PERSISTENT quota as a completely parallel storage world completely independent of the description above it has no relationship to the persistent permission other than the name.
Since it only works in Chrome and only works with the Chromeonly Legacy File System API and prompts the user with an unclear question and the user may ignore or deny the request the use of these APIs is not recommended.
While this is still available from the API interface this is functionally deprecated as of M..
Requesting PERSISTENT quota.
.
Old StorageQuota.
.
navigator.webkitPersistentStorage.requestQuota(.
MB.
granted > console.log(granted granted bytes).
error > console.warn(error requesting quota error.name error.message).
).
Querying PERSISTENT quota.
.
Old StorageQuota.
.
navigator.webkitPersistentStorage.queryUsageAndQuota(.
(usage quota) > console.log(using usage out of quota).
error > console.warn(error getting quota error.name error.message).
).
Using PERSISTENT quota.
.
window.webkitRequestFileSystem(.
window.PERSISTENT.
MB.
filesystem > .
console.log(got a file system).
do stuff with filesystem.
.
error > console.warn(error requesting file system error.name error.message).
).
.
.
.
Document History.
removed Flash LSO (removed) and AppCache (deprecatedbeing removed) .
added note about Legacy File System vs.
File System Access API.
Jun added reference to OPFS.
Jan remove WebkitStorageInfo (removed M) .
Jan updates around Persisted quota type being functionally deprecated (M).

`;
},"2024-05-10 17:37:00","2024-05-17 17:37:00","Appendix III","chrome-web-storage-and-quota-concepts-ref"],
["Document ref",function() {

return  `
 Document 

The Document interface represents any web page loaded in the browser and serves as an entry point into the web pages content which is the DOM tree .
The DOM tree includes elements such as ltbodygt and lttablegt among many others .
It provides functionality globally to the document like how to obtain the pages URL and create new elements in the document.
EventTarget Node Document The Document interface describes the common properties and methods for any kind of document.
Depending on the documents type (e.g.
HTML XML SVG ) a larger API is available HTML documents served with the texthtml content type also implement the HTMLDocument interface whereas XML and SVG documents implement the XMLDocument interface.
Constructor Document() Creates a new Document object.
Instance properties This interface also inherits from the Node and EventTarget interfaces.
Document.activeElement Read only Returns the Element that currently has focus.
Document.adoptedStyleSheets Add an array of constructed stylesheets to be used by the document.
These stylesheets may also be shared with shadow DOM subtrees of the same document.
Document.body Returns the ltbodygt or ltframesetgt node of the current document.
Document.characterSet Read only Returns the character set being used by the document.
Document.childElementCount Read only Returns the number of child elements of the current document.
Document.children Read only Returns the child elements of the current document.
Document.compatMode Read only Indicates whether the document is rendered in quirks or strict mode.
Document.contentType Read only Returns the ContentType from the MIME Header of the current document.
Document.currentScript Read only Returns the ltscriptgt element whose script is currently being processed and isnt a JavaScript module .
Document.doctype Read only Returns the Document Type Definition (DTD) of the current document.
Document.documentElement Read only Returns the Element that is a direct child of the document.
For HTML documents this is normally the HTMLHtmlElement object representing the documents lthtmlgt element.
Document.documentURI Read only Returns the document location as a string.
Document.embeds Read only Returns an HTMLCollection of the embedded ltembedgt elements in the document.
Document.featurePolicy Experimental Read only Returns the FeaturePolicy interface with the feature policies applied to the document.
Document.firstElementChild Read only Returns the first child element of the current document.
Document.fonts Returns the FontFaceSet interface of the current document.
Document.forms Read only Returns an HTMLCollection of the ltformgt elements in the document.
Document.fragmentDirective Read only Experimental Returns the FragmentDirective for the current document.
Document.fullscreenElement Read only The element thats currently in full screen mode for this document.
Document.head Read only Returns the ltheadgt element of the current document.
Document.hidden Read only Returns a Boolean value indicating if the page is considered hidden or not.
Document.images Read only Returns an HTMLCollection of the images in the document.
Document.implementation Read only Returns the DOM implementation associated with the current document.
Document.lastElementChild Read only Returns the last child element of the current document.
Document.links Read only Returns an HTMLCollection of the hyperlinks in the document.
Document.pictureInPictureElement Read only Returns the Element currently being presented in pictureinpicture mode in this document.
Document.pictureInPictureEnabled Read only Returns true if the pictureinpicture feature is enabled.
Document.plugins Read only Returns an HTMLCollection of the available plugins.
Document.pointerLockElement Read only Returns the element set as the target for mouse events while the pointer is locked.
null if lock is pending pointer is unlocked or if the target is in another document.
Document.prerendering Read only Experimental Returns a boolean that indicates whether the document is currently in the process of prerendering as initiated via the Speculation Rules API .
Document.scripts Read only Returns an HTMLCollection of the ltscriptgt elements in the document.
Document.scrollingElement Read only Returns a reference to the Element that scrolls the document.
Document.styleSheets Read only Returns a StyleSheetList of CSSStyleSheet objects for stylesheets explicitly linked into or embedded in a document.
Document.timeline Read only Returns timeline as a special instance of DocumentTimeline that is automatically created on page load.
Document.visibilityState Read only Returns a string denoting the visibility state of the document.
Possible values are visible hidden prerender and unloaded .
Extensions for HTMLDocument The Document interface for HTML documents inherits from the HTMLDocument interface or is extended for such documents.
Document.cookie Returns a semicolonseparated list of the cookies for that document or sets a single cookie.
Document.defaultView Read only Returns a reference to the window object.
Document.designMode Getssets the ability to edit the whole document.
Document.dir Getssets directionality (rtlltr) of the document.
Document.fullscreenEnabled Read only Indicates whether fullscreen mode is available.
Document.lastModified Read only Returns the date on which the document was last modified.
Document.location Read only Returns the URI of the current document.
Document.readyState Read only Returns loading status of the document.
Document.referrer Read only Returns the URI of the page that linked to this page.
Document.title Sets or gets the title of the current document.
Document.URL Read only Returns the document location as a string.
Deprecated properties Document.alinkColor Deprecated Returns or sets the color of active links in the document body.
Document.all Deprecated Provides access to all elements in the document it returns an HTMLAllCollection rooted at the document node.
This is a legacy nonstandard property and should not be used.
Document.anchors Deprecated Read only Returns a list of all of the anchors in the document.
Document.applets Deprecated Read only Returns an empty HTMLCollection .
Legacy property that used to return the list of applets within a document.
Document.bgColor Deprecated Getssets the background color of the current document.
Document.charset Deprecated Read only Alias of Document.characterSet .
Use this property instead.
Document.domain Deprecated Getssets the domain of the current document.
Document.fgColor Deprecated Getssets the foreground color or text color of the current document.
Document.fullscreen Deprecated Returns true when the document is in fullscreen mode .
Document.inputEncoding Deprecated Read only Alias of Document.characterSet .
Use this property instead.
Document.lastStyleSheetSet Deprecated Read only Nonstandard Returns the name of the style sheet set that was last enabled.
Has the value null until the style sheet is changed by setting the value of selectedStyleSheetSet .
Document.linkColor Deprecated Getssets the color of hyperlinks in the document.
Document.preferredStyleSheetSet Deprecated Read only Nonstandard Returns the preferred style sheet set as specified by the page author.
Document.rootElement Deprecated Like Document.documentElement but only for ltsvggt root elements.
Use this property instead.
Document.selectedStyleSheetSet Deprecated Nonstandard Returns which style sheet set is currently in use.
Document.styleSheetSets Deprecated Read only Nonstandard Returns a list of the style sheet sets available on the document.
Document.vlinkColor Deprecated Getssets the color of visited hyperlinks.
Document.xmlEncoding Deprecated Returns the encoding as determined by the XML declaration.
Document.xmlStandalone Deprecated Returns true if the XML declaration specifies the document to be standalone ( e.g.
An external part of the DTD affects the documents content) else false .
Document.xmlVersion Deprecated Returns the version number as specified in the XML declaration or .
if the declaration is absent.
Instance methods This interface also inherits from the Node and EventTarget interfaces.
Document.adoptNode() Adopt node from an external document.
Document.append() Inserts a set of Node objects or string objects after the last child of the document.
Document.browsingTopics() Experimental Nonstandard Returns a promise that fulfills with an array of objects representing the top topics for the user one from each of the last three epochs.
By default the method also causes the browser to record the current page visit as observed by the caller so the pages hostname can later be used in topics calculation.
See the Topics API for more details.
Document.captureEvents() Deprecated See Window.captureEvents .
Document.caretPositionFromPoint() Returns a CaretPosition object containing the DOM node containing the caret and carets character offset within that node.
Document.caretRangeFromPoint() Nonstandard Gets a Range object for the document fragment under the specified coordinates.
Document.createAttribute() Creates a new Attr object and returns it.
Document.createAttributeNS() Creates a new attribute node in a given namespace and returns it.
Document.createCDATASection() Creates a new CDATA node and returns it.
Document.createComment() Creates a new comment node and returns it.
Document.createDocumentFragment() Creates a new document fragment.
Document.createElement() Creates a new element with the given tag name.
Document.createElementNS() Creates a new element with the given tag name and namespace URI.
Document.createEvent() Creates an event object.
Document.createNodeIterator() Creates a NodeIterator object.
Document.createProcessingInstruction() Creates a new ProcessingInstruction object.
Document.createRange() Creates a Range object.
Document.createTextNode() Creates a text node.
Document.createTouch() Deprecated Nonstandard Creates a Touch object.
Document.createTouchList() Deprecated Nonstandard Creates a TouchList object.
Document.createTreeWalker() Creates a TreeWalker object.
Document.elementFromPoint() Returns the topmost element at the specified coordinates.
Document.elementsFromPoint() Returns an array of all elements at the specified coordinates.
Document.enableStyleSheetsForSet() Deprecated Nonstandard Enables the style sheets for the specified style sheet set.
Document.exitFullscreen() Stops documents fullscreen element from being displayed fullscreen.
Document.exitPictureInPicture() Remove the video from the floating pictureinpicture window back to its original container.
Document.exitPointerLock() Release the pointer lock.
Document.getAnimations() Returns an array of all Animation objects currently in effect whose target elements are descendants of the document .
Document.getBoxQuads() Experimental Returns a list of DOMQuad objects representing the CSS fragments of the node.
Document.getElementById() Returns an object reference to the identified element.
Document.getElementsByClassName() Returns a list of elements with the given class name.
Document.getElementsByTagName() Returns a list of elements with the given tag name.
Document.getElementsByTagNameNS() Returns a list of elements with the given tag name and namespace.
Document.getSelection() Returns a Selection object representing the range of text selected by the user or the current position of the caret.
Document.hasStorageAccess() Returns a Promise that resolves with a boolean value indicating whether the document has access to unpartitioned cookies.
Document.importNode() Returns a clone of a node from an external document.
Document.mozSetImageElement() Nonstandard Allows you to change the element being used as the background image for a specified element ID.
Document.prepend() Inserts a set of Node objects or string objects before the first child of the document.
Document.querySelector() Returns the first Element node within the document in document order that matches the specified selectors.
Document.querySelectorAll() Returns a list of all the Element nodes within the document that match the specified selectors.
Document.releaseCapture() Nonstandard Releases the current mouse capture if its on an element in this document.
Document.releaseEvents() Deprecated See Window.releaseEvents() .
Document.replaceChildren() Replaces the existing children of a document with a specified new set of children.
Document.requestStorageAccess() Allows a document loaded in a thirdparty context (i.e.
embedded in an ltiframegt ) to request access to unpartitioned cookies in cases where user agents by default block access to unpartitioned cookies by sites loaded in a thirdparty context to improve privacy.
Document.requestStorageAccessFor() Experimental Allows toplevel sites to request thirdparty cookie access on behalf of embedded content originating from another site in the same related website set .
Document.startViewTransition() Experimental Starts a new view transition and returns a ViewTransition object to represent it.
The Document interface is extended with the XPathEvaluator interface Document.createExpression() Compiles an XPathExpression which can then be used for (repeated) evaluations.
Document.createNSResolver() Creates an XPathNSResolver object.
Document.evaluate() Evaluates an XPath expression.
Extension for HTML documents The Document interface for HTML documents inherit from the HTMLDocument interface or is extended for such documents Document.clear() Deprecated This method does nothing.
Document.close() Closes a document stream for writing.
Document.execCommand() Deprecated On an editable document executes a formatting command.
Document.getElementsByName() Returns a list of elements with the given name.
Document.hasFocus() Returns true if the focus is currently located anywhere inside the specified document.
Document.open() Opens a document stream for writing.
Document.queryCommandEnabled() Deprecated Nonstandard Returns true if the formatting command can be executed on the current range.
Document.queryCommandIndeterm() Deprecated Returns true if the formatting command is in an indeterminate state on the current range.
Document.queryCommandState() Deprecated Nonstandard Returns true if the formatting command has been executed on the current range.
Document.queryCommandSupported() Deprecated Nonstandard Returns true if the formatting command is supported on the current range.
Document.queryCommandValue() Deprecated Returns the current value of the current range for a formatting command.
Document.write() Writes text in a document.
Document.writeln() Writes a line of text in a document.
Events Listen to these events using addEventListener() or by assigning an event listener to the oneventname property of this interface.
In addition to the events listed below many events can bubble from nodes contained in the document tree.
afterscriptexecute Nonstandard Fired when a static ltscriptgt element finishes executing its script beforescriptexecute Nonstandard Fired when a static ltscriptgt is about to start executing.
prerenderingchange Experimental Fired on a prerendered document when it is activated (i.e.
the user views the page).
securitypolicyviolation Fired when a content security policy is violated.
visibilitychange Fired when the content of a tab has become visible or has been hidden.
Clipboard events copy Fired when the user initiates a copy action through the browsers user interface.
cut Fired when the user initiates a cut action through the browsers user interface.
paste Fired when the user initiates a paste action through the browsers user interface.
Fullscreen events fullscreenchange Fired when the Document transitions into or out of fullscreen mode.
fullscreenerror Fired if an error occurs while attempting to switch into or out of fullscreen mode.
Load amp unload events DOMContentLoaded Fired when the document has been completely loaded and parsed without waiting for stylesheets images and subframes to finish loading.
readystatechange Fired when the readyState attribute of a document has changed.
Pointer lock events pointerlockchange Fired when the pointer is lockedunlocked.
pointerlockerror Fired when locking the pointer failed.
Scroll events scroll Fired when the document view or an element has been scrolled.
scrollend Fired when the document view or an element has completed scrolling.
Selection events selectionchange Fired when the current text selection on a document is changed.
Specifications Specification DOM Standard interfacedocument HTML Standard thedocumentobject CSSOM View Module extensionstothedocumentinterface Pointer Lock .
extensionstothedocumentinterface Selection API extensionstodocumentinterface Browser compatibility Report problems with this compatibility data on GitHub desktop mobile Chrome Edge Firefox Opera Safari Chrome Android Firefox for Android Opera Android Safari on iOS Samsung Internet WebView Android Document Full support Chrome Toggle history Full support Edge Toggle history Full support Firefox Toggle history Full support Opera Toggle history Full support Safari Toggle history Full support Chrome Android Toggle history Full support Firefox for Android Toggle history Full support Opera Android .
Toggle history Full support Safari on iOS Toggle history Full support Samsung Internet .
Toggle history Full support WebView Android Toggle history DOMContentLoaded event Full support Chrome Toggle history Full support Edge Toggle history Full support Firefox Toggle history Full support Opera Toggle history Full support Safari .
Toggle history Full support Chrome Android Toggle history Full support Firefox for Android Toggle history Full support Opera Android .
Toggle history Full support Safari on iOS Toggle history Full support Samsung Internet .
Toggle history Full support WebView Android .
Toggle history Document() constructor Full support Chrome Toggle history Full support Edge Toggle history Full support Firefox Toggle history Full support Opera Toggle history Full support Safari Toggle history Full support Chrome Android Toggle history Full support Firefox for Android Toggle history Full support Opera Android Toggle history Full support Safari on iOS Toggle history Full support Samsung Internet .
Toggle history Full support WebView Android Toggle history URL Full support Chrome Toggle history Full support Edge Toggle history Full support Firefox Toggle history Full support Opera Toggle history Full support Safari Toggle history Full support Chrome Android Toggle history Full support Firefox for Android Toggle history Full support Opera Android .
Toggle history Full support Safari on iOS Toggle history Full support Samsung Internet .
Toggle history Full support WebView Android .
Toggle history activeElement Full support Chrome Toggle history Full support Edge Toggle history Full support Firefox Toggle history Full support Opera .
Toggle history Full support Safari Toggle history Full support Chrome Android Toggle history Full support Firefox for Android Toggle history Full support Opera Android .
Toggle history Full support Safari on iOS .
Toggle history Full support Samsung Internet .
Toggle history Full support WebView Android Toggle history adoptNode Full support Chrome Toggle history Full support Edge Toggle history Full support Firefox Toggle history Full support Opera .
Toggle history Full support Safari Toggle history Full support Chrome Android Toggle history Full support Firefox for Android Toggle history Full support Opera Android .
Toggle history Full support Safari on iOS Toggle history Full support Samsung Internet .
Toggle history Full support WebView Android .
Toggle history adoptedStyleSheets Full support Chrome Toggle history Full support Edge Toggle history Full support Firefox Toggle history Full support Opera Toggle history Full support Safari .
Toggle history Full support Chrome Android Toggle history Full support Firefox for Android Toggle history Full support Opera Android Toggle history Full support Safari on iOS .
Toggle history Full support Samsung Internet .
Toggle history Full support WebView Android Toggle history afterscriptexecute event Nonstandard No support Chrome No Toggle history No support Edge No Toggle history Full support Firefox Toggle history No support Opera No Toggle history No support Safari No Toggle history No support Chrome Android No Toggle history Full support Firefox for Android Toggle history No support Opera Android No Toggle history No support Safari on iOS No Toggle history No support Samsung Internet No Toggle history No support WebView Android No Toggle history alinkColor Deprecated Full support Chrome more Toggle history Full support Edge Toggle history Full support Firefox Toggle history Full support Opera more Toggle history Full support Safari more Toggle history Full support Chrome Android more Toggle history Full support Firefox for Android Toggle history Full support Opera Android more Toggle history Full support Safari on iOS more Toggle history Full support Samsung Internet .
more Toggle history Full support WebView Android more Toggle history all Deprecated Full support Chrome more Toggle history Full support Edge Toggle history Full support Firefox Toggle history Full support Opera more Toggle history Full support Safari more Toggle history Full support Chrome Android more Toggle history Full support Firefox for Android Toggle history Full support Opera Android more Toggle history Full support Safari on iOS more Toggle history Full support Samsung Internet .
more Toggle history Full support WebView Android more Toggle history anchors Deprecated Full support Chrome Toggle history Full support Edge Toggle history Full support Firefox Toggle history Full support Opera .
Toggle history Full support Safari Toggle history Full support Chrome Android Toggle history Full support Firefox for Android Toggle history Full support Opera Android .
Toggle history Full support Safari on iOS Toggle history Full support Samsung Internet .
Toggle history Full support WebView Android .
Toggle history append Full support Chrome Toggle history Full support Edge Toggle history Full support Firefox Toggle history Full support Opera Toggle history Full support Safari Toggle history Full support Chrome Android Toggle history Full support Firefox for Android Toggle history Full support Opera Android Toggle history Full support Safari on iOS Toggle history Full support Samsung Internet .
Toggle history Full support WebView Android Toggle history applets Deprecated Full support Chrome Toggle history Full support Edge Toggle history Full support Firefox Toggle history Full support Opera .
Toggle history Full support Safari Toggle history Full support Chrome Android Toggle history Full support Firefox for Android Toggle history Full support Opera Android .
Toggle history Full support Safari on iOS Toggle history Full support Samsung Internet .
Toggle history Full support WebView Android .
Toggle history beforescriptexecute event Nonstandard No support Chrome No Toggle history No support Edge No Toggle history Full support Firefox Toggle history No support Opera No Toggle history No support Safari No Toggle history No support Chrome Android No Toggle history Full support Firefox for Android Toggle history No support Opera Android No Toggle history No support Safari on iOS No Toggle history No support Samsung Internet No Toggle history No support WebView Android No Toggle history bgColor Deprecated Full support Chrome more Toggle history Full support Edge Toggle history Full support Firefox Toggle history Full support Opera more Toggle history Full support Safari more Toggle history Full support Chrome Android more Toggle history Full support Firefox for Android Toggle history Full support Opera Android more Toggle history Full support Safari on iOS more Toggle history Full support Samsung Internet .
more Toggle history Full support WebView Android more Toggle history body Full support Chrome Toggle history Full support Edge Toggle history Full support Firefox more Toggle history Full support Opera .
Toggle history Full support Safari Toggle history Full support Chrome Android Toggle history Full support Firefox for Android more Toggle history Full support Opera Android .
Toggle history Full support Safari on iOS Toggle history Full support Samsung Internet .
Toggle history Full support WebView Android .
Toggle history browsingTopics Experimental Nonstandard Full support Chrome Toggle history Full support Edge Toggle history No support Firefox No Toggle history Full support Opera Toggle history No support Safari No Toggle history Full support Chrome Android Toggle history No support Firefox for Android No Toggle history Full support Opera Android Toggle history No support Safari on iOS No Toggle history Full support Samsung Internet .
Toggle history Full support WebView Android Toggle history captureEvents Deprecated Full support Chrome more Toggle history Full support Edge Toggle history Full support Firefox Toggle history Full support Opera more Toggle history Full support Safari more Toggle history Full support Chrome Android more Toggle history Full support Firefox for Android Toggle history Full support Opera Android more Toggle history Full support Safari on iOS more Toggle history Full support Samsung Internet .
more Toggle history Full support WebView Android more Toggle history caretPositionFromPoint No support Chrome No Toggle history No support Edge No Toggle history Full support Firefox Toggle history No support Opera No Toggle history No support Safari No Toggle history No support Chrome Android No Toggle history Full support Firefox for Android Toggle history No support Opera Android No Toggle history No support Safari on iOS No Toggle history No support Samsung Internet No Toggle history No support WebView Android No Toggle history caretRangeFromPoint Nonstandard Full support Chrome Toggle history Full support Edge Toggle history No support Firefox No Toggle history Full support Opera Toggle history Full support Safari Toggle history Full support Chrome Android Toggle history No support Firefox for Android No Toggle history Full support Opera Android Toggle history Full support Safari on iOS Toggle history Full support Samsung Internet .
Toggle history Full support WebView Android Toggle history characterSet Full support Chrome more Toggle history Full support Edge more Toggle history Full support Firefox more Toggle history Full support Opera .
more Toggle history Full support Safari more Toggle history Full support Chrome Android more Toggle history Full support Firefox for Android more Toggle history Full support Opera Android .
more Toggle history Full support Safari on iOS more Toggle history Full support Samsung Internet .
more Toggle history Full support WebView Android more Toggle history childElementCount Full support Chrome Toggle history Full support Edge Toggle history Full support Firefox Toggle history Full support Opera Toggle history Full support Safari Toggle history Full support Chrome Android Toggle history Full support Firefox for Android Toggle history Full support Opera Android Toggle history Full support Safari on iOS Toggle history Full support Samsung Internet .
Toggle history Full support WebView Android .
Toggle history children Full support Chrome Toggle history Full support Edge Toggle history Full support Firefox Toggle history Full support Opera Toggle history Full support Safari Toggle history Full support Chrome Android Toggle history Full support Firefox for Android Toggle history Full support Opera Android Toggle history Full support Safari on iOS Toggle history Full support Samsung Internet .
Toggle history Full support WebView Android .
Toggle history clear Deprecated Full support Chrome more Toggle history Full support Edge Toggle history Full support Firefox Toggle history Full support Opera more Toggle history Full support Safari Toggle history Full support Chrome Android more Toggle history Full support Firefox for Android Toggle history Full support Opera Android more Toggle history Full support Safari on iOS Toggle history Full support Samsung Internet .
more Toggle history Full support WebView Android more Toggle history close Full support Chrome more Toggle history Full support Edge Toggle history Full support Firefox Toggle history Full support Opera more Toggle history Full support Safari more Toggle history Full support Chrome Android more Toggle history Full support Firefox for Android Toggle history Full support Opera Android more Toggle history Full support Safari on iOS more Toggle history Full support Samsung Internet .
more Toggle history Full support WebView Android more Toggle history compatMode Full support Chrome Toggle history Full support Edge Toggle history Full support Firefox Toggle history Full support Opera .
Toggle history Full support Safari .
Toggle history Full support Chrome Android Toggle history Full support Firefox for Android Toggle history Full support Opera Android .
Toggle history Full support Safari on iOS Toggle history Full support Samsung Internet .
Toggle history Full support WebView Android .
Toggle history contentType Full support Chrome Toggle history Full support Edge Toggle history Full support Firefox Toggle history Full support Opera more Toggle history Full support Safari Toggle history Full support Chrome Android Toggle history Full support Firefox for Android Toggle history Full support Opera Android more Toggle history Full support Safari on iOS Toggle history Full support Samsung Internet .
Toggle history Full support WebView Android Toggle history cookie Full support Chrome Toggle history Full support Edge Toggle history Full support Firefox footnote Toggle history Full support Opera Toggle history Full support Safari Toggle history Full support Chrome Android Toggle history Full support Firefox for Android footnote Toggle history Full support Opera Android .
Toggle history Full support Safari on iOS Toggle history Full support Samsung Internet .
Toggle history Full support WebView Android .
Toggle history createAttribute Full support Chrome Toggle history Full support Edge Toggle history Full support Firefox more Toggle history Full support Opera .
Toggle history Full support Safari Toggle history Full support Chrome Android Toggle history Full support Firefox for Android more Toggle history Full support Opera Android .
Toggle history Full support Safari on iOS Toggle history Full support Samsung Internet .
Toggle history Full support WebView Android .
Toggle history createAttributeNS Full support Chrome Toggle history Full support Edge Toggle history Full support Firefox Toggle history Full support Opera .
Toggle history Full support Safari Toggle history Full support Chrome Android Toggle history Full support Firefox for Android Toggle history Full support Opera Android .
Toggle history Full support Safari on iOS Toggle history Full support Samsung Internet .
Toggle history Full support WebView Android .
Toggle history createCDATASection Full support Chrome Toggle history Full support Edge Toggle history Full support Firefox Toggle history Full support Opera .
Toggle history Full support Safari Toggle history Full support Chrome Android Toggle history Full support Firefox for Android Toggle history Full support Opera Android .
Toggle history Full support Safari on iOS Toggle history Full support Samsung Internet .
Toggle history Full support WebView Android .
Toggle history createComment Full support Chrome Toggle history Full support Edge Toggle history Full support Firefox Toggle history Full support Opera .
Toggle history Full support Safari Toggle history Full support Chrome Android Toggle history Full support Firefox for Android Toggle history Full support Opera Android .
Toggle history Full support Safari on iOS Toggle history Full support Samsung Internet .
Toggle history Full support WebView Android .
Toggle history createDocumentFragment Full support Chrome Toggle history Full support Edge Toggle history Full support Firefox Toggle history Full support Opera .
Toggle history Full support Safari Toggle history Full support Chrome Android Toggle history Full support Firefox for Android Toggle history Full support Opera Android .
Toggle history Full support Safari on iOS Toggle history Full support Samsung Internet .
Toggle history Full support WebView Android .
Toggle history createElement Full support Chrome Toggle history Full support Edge Toggle history Full support Firefox footnote Toggle history Full support Opera Toggle history Full support Safari Toggle history Full support Chrome Android Toggle history Full support Firefox for Android Toggle history Full support Opera Android .
Toggle history Full support Safari on iOS Toggle history Full support Samsung Internet .
Toggle history Full support WebView Android .
Toggle history options parameter Full support Chrome footnote Toggle history Full support Edge footnote Toggle history Full support Firefox footnote Toggle history Full support Opera footnote Toggle history No support Safari No Toggle history Full support Chrome Android footnote Toggle history Full support Firefox for Android footnote Toggle history Full support Opera Android footnote Toggle history No support Safari on iOS No Toggle history Full support Samsung Internet .
footnote Toggle history Full support WebView Android footnote Toggle history createElementNS Full support Chrome Toggle history Full support Edge Toggle history Full support Firefox footnote Toggle history Full support Opera .
Toggle history Full support Safari Toggle history Full support Chrome Android Toggle history Full support Firefox for Android Toggle history Full support Opera Android .
Toggle history Full support Safari on iOS Toggle history Full support Samsung Internet .
Toggle history Full support WebView Android .
Toggle history options parameter Full support Chrome footnote Toggle history Full support Edge footnote Toggle history Full support Firefox footnote Toggle history Full support Opera footnote Toggle history No support Safari No Toggle history Full support Chrome Android footnote Toggle history Full support Firefox for Android footnote Toggle history Full support Opera Android footnote Toggle history No support Safari on iOS No Toggle history Full support Samsung Internet .
footnote Toggle history Full support WebView Android footnote Toggle history createEvent Full support Chrome Toggle history Full support Edge Toggle history Full support Firefox footnote Toggle history Full support Opera Toggle history Full support Safari Toggle history Full support Chrome Android Toggle history Full support Firefox for Android Toggle history Full support Opera Android .
Toggle history Full support Safari on iOS Toggle history Full support Samsung Internet .
Toggle history Full support WebView Android .
Toggle history createExpression Full support Chrome Toggle history Full support Edge Toggle history Full support Firefox Toggle history Full support Opera .
Toggle history Full support Safari Toggle history Full support Chrome Android Toggle history Full support Firefox for Android Toggle history Full support Opera Android .
Toggle history Full support Safari on iOS Toggle history Full support Samsung Internet .
Toggle history Full support WebView Android Toggle history createNSResolver Full support Chrome Toggle history Full support Edge Toggle history Full support Firefox Toggle history Full support Opera .
Toggle history Full support Safari Toggle history Full support Chrome Android Toggle history Full support Firefox for Android Toggle history Full support Opera Android .
Toggle history Full support Safari on iOS Toggle history Full support Samsung Internet .
Toggle history Full support WebView Android Toggle history createNodeIterator Full support Chrome Toggle history Full support Edge Toggle history Full support Firefox Toggle history Full support Opera Toggle history Full support Safari Toggle history Full support Chrome Android Toggle history Full support Firefox for Android Toggle history Full support Opera Android .
Toggle history Full support Safari on iOS Toggle history Full support Samsung Internet .
Toggle history Full support WebView Android .
Toggle history createProcessingInstruction Full support Chrome Toggle history Full support Edge Toggle history Full support Firefox Toggle history Full support Opera .
Toggle history Full support Safari Toggle history Full support Chrome Android Toggle history Full support Firefox for Android Toggle history Full support Opera Android .
Toggle history Full support Safari on iOS Toggle history Full support Samsung Internet .
Toggle history Full support WebView Android .
Toggle history createRange Full support Chrome Toggle history Full support Edge Toggle history Full support Firefox Toggle history Full support Opera .
Toggle history Full support Safari Toggle history Full support Chrome Android Toggle history Full support Firefox for Android Toggle history Full support Opera Android .
Toggle history Full support Safari on iOS Toggle history Full support Samsung Internet .
Toggle history Full support WebView Android .
Toggle history createTextNode Full support Chrome Toggle history Full support Edge Toggle history Full support Firefox Toggle history Full support Opera Toggle history Full support Safari Toggle history Full support Chrome Android Toggle history Full support Firefox for Android Toggle history Full support Opera Android .
Toggle history Full support Safari on iOS Toggle history Full support Samsung Internet .
Toggle history Full support WebView Android .
Toggle history createTouch Deprecated Nonstandard No support Chrome No Toggle history No support Edge No Toggle history No support Firefox Toggle history No support Opera No Toggle history No support Safari No Toggle history No support Chrome Android Toggle history Full support Firefox for Android Toggle history No support Opera Android Toggle history Full support Safari on iOS Toggle history No support Samsung Internet ..
Toggle history No support WebView Android .
Toggle history createTouchList Deprecated Nonstandard No support Chrome Toggle history No support Edge No Toggle history No support Firefox Toggle history No support Opera Toggle history No support Safari No Toggle history No support Chrome Android Toggle history Full support Firefox for Android Toggle history No support Opera Android Toggle history Full support Safari on iOS Toggle history No support Samsung Internet ..
Toggle history No support WebView Android .
Toggle history createTreeWalker Full support Chrome Toggle history Full support Edge Toggle history Full support Firefox Toggle history Full support Opera Toggle history Full support Safari Toggle history Full support Chrome Android Toggle history Full support Firefox for Android Toggle history Full support Opera Android .
Toggle history Full support Safari on iOS Toggle history Full support Samsung Internet .
Toggle history Full support WebView Android .
Toggle history whatToShow and filter parameters are optional Full support Chrome Toggle history Full support Edge Toggle history Full support Firefox Toggle history Full support Opera Toggle history Full support Safari Toggle history Full support Chrome Android Toggle history Full support Firefox for Android Toggle history Full support Opera Android Toggle history Full support Safari on iOS Toggle history Full support Samsung Internet .
Toggle history Full support WebView Android Toggle history currentScript Full support Chrome Toggle history Full support Edge Toggle history Full support Firefox Toggle history Full support Opera Toggle history Full support Safari Toggle history Full support Chrome Android Toggle history Full support Firefox for Android Toggle history Full support Opera Android Toggle history Full support Safari on iOS Toggle history Full support Samsung Internet .
Toggle history Full support WebView Android .
Toggle history defaultView Full support Chrome Toggle history Full support Edge Toggle history Full support Firefox Toggle history Full support Opera .
Toggle history Full support Safari Toggle history Full support Chrome Android Toggle history Full support Firefox for Android Toggle history Full support Opera Android .
Toggle history Full support Safari on iOS Toggle history Full support Samsung Internet .
Toggle history Full support WebView Android .
Toggle history designMode Full support Chrome Toggle history Full support Edge Toggle history Full support Firefox Toggle history Full support Opera Toggle history Full support Safari .
Toggle history Full support Chrome Android Toggle history Full support Firefox for Android Toggle history Full support Opera Android .
Toggle history Full support Safari on iOS Toggle history Full support Samsung Internet .
Toggle history Full support WebView Android .
Toggle history dir Full support Chrome more Toggle history Full support Edge Toggle history Full support Firefox footnote Toggle history Full support Opera more Toggle history Full support Safari .
more Toggle history Full support Chrome Android more Toggle history Full support Firefox for Android footnote Toggle history Full support Opera Android more Toggle history Full support Safari on iOS .
more Toggle history Full support Samsung Internet .
more Toggle history Full support WebView Android more Toggle history doctype Full support Chrome Toggle history Full support Edge Toggle history Full support Firefox Toggle history Full support Opera .
Toggle history Full support Safari Toggle history Full support Chrome Android Toggle history Full support Firefox for Android Toggle history Full support Opera Android .
Toggle history Full support Safari on iOS Toggle history Full support Samsung Internet .
Toggle history Full support WebView Android .
Toggle history documentElement Full support Chrome Toggle history Full support Edge Toggle history Full support Firefox Toggle history Full support Opera Toggle history Full support Safari Toggle history Full support Chrome Android Toggle history Full support Firefox for Android Toggle history Full support Opera Android .
Toggle history Full support Safari on iOS Toggle history Full support Samsung Internet .
Toggle history Full support WebView Android .
Toggle history documentURI Full support Chrome Toggle history Full support Edge Toggle history Full support Firefox Toggle history Full support Opera .
Toggle history Full support Safari Toggle history Full support Chrome Android Toggle history Full support Firefox for Android Toggle history Full support Opera Android .
Toggle history Full support Safari on iOS Toggle history Full support Samsung Internet .
Toggle history Full support WebView Android .
Toggle history domain Deprecated Full support Chrome footnote Toggle history Full support Edge Toggle history Full support Firefox footnote Toggle history Full support Opera .
Toggle history Full support Safari Toggle history Full support Chrome Android footnote Toggle history Full support Firefox for Android footnote Toggle history Full support Opera Android .
Toggle history Full support Safari on iOS Toggle history Full support Samsung Internet .
footnote Toggle history Full support WebView Android .
footnote Toggle history elementFromPoint Full support Chrome footnote Toggle history Full support Edge Toggle history Full support Firefox Toggle history Full support Opera .
footnote Toggle history Full support Safari Toggle history Full support Chrome Android footnote Toggle history Full support Firefox for Android Toggle history Full support Opera Android .
footnote Toggle history Full support Safari on iOS .
Toggle history Full support Samsung Internet .
footnote Toggle history Full support WebView Android footnote Toggle history elementsFromPoint Full support Chrome footnote Toggle history Full support Edge more Toggle history Full support Firefox Toggle history Full support Opera Toggle history Full support Safari .
Toggle history Full support Chrome Android footnote Toggle history Full support Firefox for Android Toggle history Full support Opera Android Toggle history Full support Safari on iOS .
Toggle history Full support Samsung Internet .
footnote Toggle history Full support WebView Android footnote Toggle history embeds Full support Chrome more Toggle history Full support Edge Toggle history Full support Firefox Toggle history Full support Opera more Toggle history Full support Safari .
more Toggle history Full support Chrome Android more Toggle history Full support Firefox for Android Toggle history Full support Opera Android more Toggle history Full support Safari on iOS .
more Toggle history Full support Samsung Internet .
more Toggle history Full support WebView Android more Toggle history enableStyleSheetsForSet Deprecated Nonstandard No support Chrome No Toggle history No support Edge No Toggle history Full support Firefox Toggle history No support Opera No Toggle history No support Safari No Toggle history No support Chrome Android No Toggle history Full support Firefox for Android Toggle history No support Opera Android No Toggle history No support Safari on iOS No Toggle history No support Samsung Internet No Toggle history No support WebView Android No Toggle history evaluate Full support Chrome Toggle history Full support Edge Toggle history Full support Firefox Toggle history Full support Opera Toggle history Full support Safari Toggle history Full support Chrome Android Toggle history Full support Firefox for Android Toggle history Full support Opera Android .
Toggle history Full support Safari on iOS Toggle history Full support Samsung Internet .
Toggle history Full support WebView Android Toggle history execCommand Deprecated Full support Chrome Toggle history Full support Edge Toggle history Full support Firefox footnote Toggle history Full support Opera Toggle history Full support Safari .
Toggle history Full support Chrome Android Toggle history Full support Firefox for Android footnote Toggle history Full support Opera Android .
Toggle history Full support Safari on iOS Toggle history Full support Samsung Internet .
Toggle history Full support WebView Android .
Toggle history copy command Deprecated Nonstandard Full support Chrome Toggle history Full support Edge Toggle history Full support Firefox Toggle history Full support Opera Toggle history Full support Safari Toggle history Full support Chrome Android Toggle history Full support Firefox for Android Toggle history Full support Opera Android Toggle history Full support Safari on iOS Toggle history Full support Samsung Internet .
Toggle history Full support WebView Android Toggle history cut command Deprecated Nonstandard Full support Chrome Toggle history Full support Edge Toggle history Full support Firefox Toggle history Full support Opera Toggle history Full support Safari Toggle history Full support Chrome Android Toggle history Full support Firefox for Android Toggle history Full support Opera Android Toggle history Full support Safari on iOS Toggle history Full support Samsung Internet .
Toggle history Full support WebView Android Toggle history defaultParagraphSeparator command Deprecated Nonstandard No support Chrome No Toggle history No support Edge Toggle history Full support Firefox Toggle history No support Opera No Toggle history No support Safari No Toggle history No support Chrome Android No Toggle history Full support Firefox for Android Toggle history No support Opera Android No Toggle history No support Safari on iOS No Toggle history No support Samsung Internet No Toggle history No support WebView Android No Toggle history insertBrOnReturn command Deprecated Nonstandard No support Chrome No Toggle history No support Edge No Toggle history Full support Firefox .
Toggle history No support Opera No Toggle history No support Safari No Toggle history No support Chrome Android No Toggle history Full support Firefox for Android Toggle history No support Opera Android No Toggle history No support Safari on iOS No Toggle history No support Samsung Internet No Toggle history No support WebView Android No Toggle history exitFullscreen Full support Chrome more Toggle history Full support Edge more Toggle history Full support Firefox more Toggle history Full support Opera more Toggle history Full support Safari .
more Toggle history Full support Chrome Android more Toggle history Full support Firefox for Android more Toggle history Full support Opera Android more Toggle history Partial support Safari on iOS prefix more Toggle history Full support Samsung Internet .
more Toggle history Full support WebView Android more Toggle history Returns a Promise Full support Chrome Toggle history Full support Edge Toggle history Full support Firefox Toggle history Full support Opera Toggle history Full support Safari .
Toggle history Full support Chrome Android Toggle history Full support Firefox for Android Toggle history Full support Opera Android Toggle history Full support Safari on iOS .
Toggle history Full support Samsung Internet .
Toggle history Full support WebView Android Toggle history exitPictureInPicture Full support Chrome Toggle history Full support Edge Toggle history No support Firefox No Toggle history Full support Opera Toggle history Full support Safari .
Toggle history Full support Chrome Android Toggle history No support Firefox for Android No Toggle history Full support Opera Android Toggle history Full support Safari on iOS .
Toggle history Full support Samsung Internet .
Toggle history No support WebView Android No Toggle history exitPointerLock Full support Chrome more Toggle history Full support Edge Toggle history Full support Firefox more Toggle history Full support Opera more Toggle history Full support Safari .
Toggle history Full support Chrome Android more Toggle history Full support Firefox for Android more Toggle history Full support Opera Android more Toggle history No support Safari on iOS No Toggle history Full support Samsung Internet .
more Toggle history Full support WebView Android more Toggle history featurePolicy Experimental Full support Chrome Toggle history Full support Edge Toggle history No support Firefox disabled Toggle history Full support Opera Toggle history No support Safari No Toggle history Full support Chrome Android Toggle history No support Firefox for Android No Toggle history Full support Opera Android Toggle history No support Safari on iOS No Toggle history Full support Samsung Internet .
Toggle history Full support WebView Android Toggle history fgColor Deprecated Full support Chrome more Toggle history Full support Edge Toggle history Full support Firefox Toggle history Full support Opera more Toggle history Full support Safari more Toggle history Full support Chrome Android more Toggle history Full support Firefox for Android Toggle history Full support Opera Android more Toggle history Full support Safari on iOS more Toggle history Full support Samsung Internet .
more Toggle history Full support WebView Android more Toggle history firstElementChild Full support Chrome Toggle history Full support Edge Toggle history Full support Firefox Toggle history Full support Opera Toggle history Full support Safari Toggle history Full support Chrome Android Toggle history Full support Firefox for Android Toggle history Full support Opera Android Toggle history Full support Safari on iOS Toggle history Full support Samsung Internet .
Toggle history Full support WebView Android .
Toggle history fonts Full support Chrome Toggle history Full support Edge Toggle history Full support Firefox Toggle history Full support Opera Toggle history Full support Safari Toggle history Full support Chrome Android Toggle history Full support Firefox for Android Toggle history Full support Opera Android Toggle history Full support Safari on iOS Toggle history Full support Samsung Internet .
Toggle history Full support WebView Android Toggle history forms Full support Chrome Toggle history Full support Edge Toggle history Full support Firefox Toggle history Full support Opera .
Toggle history Full support Safari Toggle history Full support Chrome Android Toggle history Full support Firefox for Android Toggle history Full support Opera Android .
Toggle history Full support Safari on iOS Toggle history Full support Samsung Internet .
Toggle history Full support WebView Android .
Toggle history fragmentDirective Experimental Full support Chrome Toggle history Full support Edge Toggle history No support Firefox No Toggle history Full support Opera Toggle history No support Safari No footnote Toggle history Full support Chrome Android Toggle history No support Firefox for Android No Toggle history Full support Opera Android Toggle history No support Safari on iOS No footnote Toggle history Full support Samsung Internet .
Toggle history Full support WebView Android Toggle history freeze event Experimental Full support Chrome Toggle history Full support Edge Toggle history No support Firefox No Toggle history Full support Opera Toggle history No support Safari No Toggle history Full support Chrome Android Toggle history No support Firefox for Android No Toggle history Full support Opera Android Toggle history No support Safari on iOS No Toggle history Full support Samsung Internet .
Toggle history Full support WebView Android Toggle history fullscreen Deprecated Full support Chrome more Toggle history Full support Edge more Toggle history Full support Firefox more Toggle history Full support Opera more Toggle history Full support Safari .
more Toggle history Full support Chrome Android more Toggle history Full support Firefox for Android more Toggle history Full support Opera Android more Toggle history Partial support Safari on iOS altname more Toggle history Full support Samsung Internet .
more Toggle history Full support WebView Android more Toggle history fullscreenElement Full support Chrome more Toggle history Full support Edge more Toggle history Full support Firefox more Toggle history Full support Opera more Toggle history Full support Safari .
more Toggle history Full support Chrome Android more Toggle history Full support Firefox for Android more Toggle history Full support Opera Android more Toggle history Partial support Safari on iOS prefix more Toggle history Full support Samsung Internet .
more Toggle history Full support WebView Android more Toggle history fullscreenEnabled Full support Chrome more Toggle history Full support Edge Toggle history Full support Firefox more Toggle history Full support Opera more Toggle history Full support Safari .
more Toggle history Full support Chrome Android more Toggle history Full support Firefox for Android more Toggle history Full support Opera Android more Toggle history Partial support Safari on iOS prefix more Toggle history Full support Samsung Internet .
more Toggle history Full support WebView Android more Toggle history fullscreenchange event Full support Chrome more Toggle history Full support Edge more Toggle history Full support Firefox more Toggle history Full support Opera more Toggle history Full support Safari .
more Toggle history Full support Chrome Android more Toggle history Full support Firefox for Android more Toggle history Full support Opera Android more Toggle history Partial support Safari on iOS prefix more Toggle history Full support Samsung Internet .
more Toggle history Full support WebView Android more Toggle history fullscreenerror event Full support Chrome more Toggle history Full support Edge more Toggle history Full support Firefox more Toggle history Full support Opera more Toggle history Full support Safari .
more Toggle history Full support Chrome Android more Toggle history Full support Firefox for Android more Toggle history Full support Opera Android more Toggle history Partial support Safari on iOS prefix more Toggle history Full support Samsung Internet .
more Toggle history Full support WebView Android more Toggle history getAnimations Full support Chrome Toggle history Full support Edge Toggle history Full support Firefox Toggle history Full support Opera Toggle history Full support Safari more Toggle history Full support Chrome Android Toggle history Full support Firefox for Android Toggle history Full support Opera Android Toggle history Full support Safari on iOS more Toggle history Full support Samsung Internet .
Toggle history Full support WebView Android Toggle history getBoxQuads Experimental No support Chrome No Toggle history No support Edge No Toggle history No support Firefox disabled Toggle history No support Opera No Toggle history No support Safari No Toggle history No support Chrome Android No Toggle history No support Firefox for Android No Toggle history No support Opera Android No Toggle history No support Safari on iOS No Toggle history No support Samsung Internet No Toggle history No support WebView Android No Toggle history getElementById Full support Chrome Toggle history Full support Edge Toggle history Full support Firefox Toggle history Full support Opera Toggle history Full support Safari Toggle history Full support Chrome Android Toggle history Full support Firefox for Android Toggle history Full support Opera Android .
Toggle history Full support Safari on iOS Toggle history Full support Samsung Internet .
Toggle history Full support WebView Android .
Toggle history getElementsByClassName Full support Chrome Toggle history Full support Edge Toggle history Full support Firefox Toggle history Full support Opera .
Toggle history Full support Safari .
Toggle history Full support Chrome Android Toggle history Full support Firefox for Android Toggle history Full support Opera Android .
Toggle history Full support Safari on iOS Toggle history Full support Samsung Internet .
Toggle history Full support WebView Android .
Toggle history getElementsByName Full support Chrome Toggle history Full support Edge footnote Toggle history Full support Firefox Toggle history Full support Opera Toggle history Full support Safari Toggle history Full support Chrome Android Toggle history Full support Firefox for Android Toggle history Full support Opera Android .
Toggle history Full support Safari on iOS Toggle history Full support Samsung Internet .
Toggle history Full support WebView Android .
Toggle history getElementsByTagName Full support Chrome Toggle history Full support Edge Toggle history Full support Firefox Toggle history Full support Opera .
Toggle history Full support Safari Toggle history Full support Chrome Android Toggle history Full support Firefox for Android Toggle history Full support Opera Android .
Toggle history Full support Safari on iOS Toggle history Full support Samsung Internet .
Toggle history Full support WebView Android .
Toggle history getElementsByTagNameNS Full support Chrome Toggle history Full support Edge Toggle history Full support Firefox Toggle history Full support Opera .
Toggle history Full support Safari Toggle history Full support Chrome Android Toggle history Full support Firefox for Android Toggle history Full support Opera Android .
Toggle history Full support Safari on iOS Toggle history Full support Samsung Internet .
Toggle history Full support WebView Android .
Toggle history getSelection Full support Chrome Toggle history Full support Edge Toggle history Full support Firefox Toggle history Full support Opera .
Toggle history Full support Safari Toggle history Full support Chrome Android Toggle history Full support Firefox for Android Toggle history Full support Opera Android .
Toggle history Full support Safari on iOS .
Toggle history Full support Samsung Internet .
Toggle history Full support WebView Android Toggle history hasFocus Full support Chrome Toggle history Full support Edge Toggle history Full support Firefox Toggle history Full support Opera Toggle history Full support Safari Toggle history Full support Chrome Android Toggle history Full support Firefox for Android Toggle history Full support Opera Android Toggle history Full support Safari on iOS .
Toggle history Full support Samsung Internet .
Toggle history Full support WebView Android Toggle history hasPrivateToken Experimental Full support Chrome Toggle history Full support Edge Toggle history No support Firefox No Toggle history Full support Opera Toggle history No support Safari No Toggle history Full support Chrome Android Toggle history No support Firefox for Android No Toggle history Full support Opera Android Toggle history No support Safari on iOS No Toggle history Full support Samsung Internet .
Toggle history Full support WebView Android Toggle history hasRedemptionRecord Experimental Full support Chrome Toggle history Full support Edge Toggle history No support Firefox No Toggle history Full support Opera Toggle history No support Safari No Toggle history Full support Chrome Android Toggle history No support Firefox for Android No Toggle history Full support Opera Android Toggle history No support Safari on iOS No Toggle history Full support Samsung Internet .
Toggle history Full support WebView Android Toggle history hasStorageAccess Full support Chrome Toggle history Full support Edge Toggle history Full support Firefox Toggle history Full support Opera Toggle history Full support Safari .
Toggle history Full support Chrome Android Toggle history Full support Firefox for Android Toggle history Full support Opera Android Toggle history Full support Safari on iOS .
Toggle history Full support Samsung Internet .
Toggle history Full support WebView Android Toggle history hasUnpartitionedCookieAccess Preview browser support Chrome Toggle history No support Edge No Toggle history No support Firefox No Toggle history No support Opera No Toggle history No support Safari No Toggle history Preview browser support Chrome Android Toggle history No support Firefox for Android No Toggle history No support Opera Android No Toggle history No support Safari on iOS No Toggle history No support Samsung Internet No Toggle history Preview browser support WebView Android Toggle history head Full support Chrome Toggle history Full support Edge Toggle history Full support Firefox Toggle history Full support Opera Toggle history Full support Safari Toggle history Full support Chrome Android Toggle history Full support Firefox for Android Toggle history Full support Opera Android Toggle history Full support Safari on iOS Toggle history Full support Samsung Internet .
Toggle history Full support WebView Android Toggle history hidden Full support Chrome more Toggle history Full support Edge Toggle history Full support Firefox footnote more Toggle history Full support Opera .
Toggle history Full support Safari Toggle history Full support Chrome Android more Toggle history Full support Firefox for Android footnote more Toggle history Full support Opera Android .
Toggle history Full support Safari on iOS Toggle history Full support Samsung Internet .
more Toggle history Full support WebView Android ..
more Toggle history images Full support Chrome Toggle history Full support Edge Toggle history Full support Firefox Toggle history Full support Opera .
Toggle history Full support Safari Toggle history Full support Chrome Android Toggle history Full support Firefox for Android Toggle history Full support Opera Android .
Toggle history Full support Safari on iOS Toggle history Full support Samsung Internet .
Toggle history Full support WebView Android .
Toggle history implementation Full support Chrome Toggle history Full support Edge Toggle history Full support Firefox Toggle history Full support Opera .
Toggle history Full support Safari Toggle history Full support Chrome Android Toggle history Full support Firefox for Android Toggle history Full support Opera Android .
Toggle history Full support Safari on iOS Toggle history Full support Samsung Internet .
Toggle history Full support WebView Android .
Toggle history importNode Full support Chrome Toggle history Full support Edge Toggle history Full support Firefox Toggle history Full support Opera Toggle history Full support Safari Toggle history Full support Chrome Android Toggle history Full support Firefox for Android Toggle history Full support Opera Android .
Toggle history Full support Safari on iOS Toggle history Full support Samsung Internet .
Toggle history Full support WebView Android .
Toggle history lastElementChild Full support Chrome Toggle history Full support Edge Toggle history Full support Firefox Toggle history Full support Opera Toggle history Full support Safari Toggle history Full support Chrome Android Toggle history Full support Firefox for Android Toggle history Full support Opera Android Toggle history Full support Safari on iOS Toggle history Full support Samsung Internet .
Toggle history Full support WebView Android .
Toggle history lastModified Full support Chrome Toggle history Full support Edge Toggle history Full support Firefox Toggle history Full support Opera .
Toggle history Full support Safari Toggle history Full support Chrome Android Toggle history Full support Firefox for Android Toggle history Full support Opera Android .
Toggle history Full support Safari on iOS Toggle history Full support Samsung Internet .
Toggle history Full support WebView Android .
Toggle history lastStyleSheetSet Deprecated Nonstandard No support Chrome No Toggle history No support Edge No Toggle history Full support Firefox Toggle history No support Opera No Toggle history No support Safari No Toggle history No support Chrome Android No Toggle history Full support Firefox for Android Toggle history No support Opera Android No Toggle history No support Safari on iOS No Toggle history No support Samsung Internet No Toggle history No support WebView Android No Toggle history linkColor Deprecated Full support Chrome more Toggle history Full support Edge Toggle history Full support Firefox Toggle history Full support Opera more Toggle history Full support Safari more Toggle history Full support Chrome Android more Toggle history Full support Firefox for Android Toggle history Full support Opera Android more Toggle history Full support Safari on iOS more Toggle history Full support Samsung Internet .
more Toggle history Full support WebView Android more Toggle history links Full support Chrome Toggle history Full support Edge Toggle history Full support Firefox Toggle history Full support Opera .
Toggle history Full support Safari Toggle history Full support Chrome Android Toggle history Full support Firefox for Android Toggle history Full support Opera Android .
Toggle history Full support Safari on iOS Toggle history Full support Samsung Internet .
Toggle history Full support WebView Android .
Toggle history location Full support Chrome Toggle history Full support Edge Toggle history Full support Firefox Toggle history Full support Opera Toggle history Full support Safari Toggle history Full support Chrome Android Toggle history Full support Firefox for Android Toggle history Full support Opera Android .
Toggle history Full support Safari on iOS Toggle history Full support Samsung Internet .
Toggle history Full support WebView Android .
Toggle history mozSetImageElement Nonstandard No support Chrome No Toggle history No support Edge No Toggle history Full support Firefox Toggle history No support Opera No Toggle history No support Safari No Toggle history No support Chrome Android No Toggle history Full support Firefox for Android Toggle history No support Opera Android No Toggle history No support Safari on iOS No Toggle history No support Samsung Internet No Toggle history No support WebView Android No Toggle history open Full support Chrome more Toggle history Full support Edge Toggle history Full support Firefox Toggle history Full support Opera more Toggle history Full support Safari more Toggle history Full support Chrome Android more Toggle history Full support Firefox for Android Toggle history Full support Opera Android more Toggle history Full support Safari on iOS more Toggle history Full support Samsung Internet .
more Toggle history Full support WebView Android more Toggle history parseHTMLUnsafe() static method Full support Chrome Toggle history Full support Edge Toggle history Full support Firefox Toggle history Preview browser support Opera Toggle history Full support Safari .
Toggle history Full support Chrome Android Toggle history Full support Firefox for Android Toggle history No support Opera Android No Toggle history Full support Safari on iOS .
Toggle history No support Samsung Internet No Toggle history Full support WebView Android Toggle history pictureInPictureElement Full support Chrome Toggle history Full support Edge Toggle history No support Firefox No Toggle history Full support Opera Toggle history Full support Safari .
Toggle history Full support Chrome Android Toggle history No support Firefox for Android No Toggle history Full support Opera Android Toggle history Full support Safari on iOS .
Toggle history Full support Samsung Internet .
Toggle history No support WebView Android No Toggle history pictureInPictureEnabled Full support Chrome Toggle history Full support Edge Toggle history No support Firefox No Toggle history Full support Opera Toggle history Full support Safari .
Toggle history Full support Chrome Android Toggle history No support Firefox for Android No Toggle history Full support Opera Android Toggle history Full support Safari on iOS .
Toggle history Full support Samsung Internet .
Toggle history No support WebView Android No Toggle history plugins Full support Chrome more Toggle history Full support Edge Toggle history Full support Firefox Toggle history Full support Opera more Toggle history Full support Safari .
more Toggle history Full support Chrome Android more Toggle history Full support Firefox for Android Toggle history Full support Opera Android more Toggle history Full support Safari on iOS .
more Toggle history Full support Samsung Internet .
more Toggle history Full support WebView Android more Toggle history pointerLockElement Full support Chrome Toggle history Full support Edge Toggle history Full support Firefox more Toggle history Full support Opera Toggle history Full support Safari .
Toggle history Full support Chrome Android Toggle history Full support Firefox for Android more Toggle history Full support Opera Android Toggle history No support Safari on iOS No Toggle history Full support Samsung Internet .
Toggle history Full support WebView Android Toggle history pointerlockchange event Full support Chrome more Toggle history Full support Edge Toggle history Full support Firefox more Toggle history Full support Opera more Toggle history Full support Safari .
Toggle history Full support Chrome Android more Toggle history Full support Firefox for Android more Toggle history Full support Opera Android more Toggle history No support Safari on iOS No Toggle history Full support Samsung Internet .
more Toggle history Full support WebView Android more Toggle history pointerlockerror event Full support Chrome more Toggle history Full support Edge Toggle history Full support Firefox more Toggle history Full support Opera more Toggle history Full support Safari .
Toggle history Full support Chrome Android more Toggle history Full support Firefox for Android more Toggle history Full support Opera Android more Toggle history No support Safari on iOS No Toggle history Full support Samsung Internet .
more Toggle history Full support WebView Android more Toggle history preferredStyleSheetSet Deprecated Nonstandard No support Chrome No Toggle history No support Edge No Toggle history Full support Firefox Toggle history No support Opera No Toggle history No support Safari No Toggle history No support Chrome Android No Toggle history Full support Firefox for Android Toggle history No support Opera Android No Toggle history No support Safari on iOS No Toggle history No support Samsung Internet No Toggle history No support WebView Android No Toggle history prepend Full support Chrome Toggle history Full support Edge Toggle history Full support Firefox Toggle history Full support Opera Toggle history Full support Safari Toggle history Full support Chrome Android Toggle history Full support Firefox for Android Toggle history Full support Opera Android Toggle history Full support Safari on iOS Toggle history Full support Samsung Internet .
Toggle history Full support WebView Android Toggle history prerendering Experimental Full support Chrome Toggle history Full support Edge Toggle history No support Firefox No Toggle history Full support Opera Toggle history No support Safari No Toggle history Full support Chrome Android Toggle history No support Firefox for Android No Toggle history Full support Opera Android Toggle history No support Safari on iOS No Toggle history Full support Samsung Internet .
Toggle history Full support WebView Android Toggle history prerenderingchange event Experimental Full support Chrome Toggle history Full support Edge Toggle history No support Firefox No Toggle history Full support Opera Toggle history No support Safari No Toggle history Full support Chrome Android Toggle history No support Firefox for Android No Toggle history Full support Opera Android Toggle history No support Safari on iOS No Toggle history Full support Samsung Internet .
Toggle history Full support WebView Android Toggle history queryCommandEnabled Deprecated Nonstandard Full support Chrome Toggle history Full support Edge Toggle history Full support Firefox more Toggle history Full support Opera .
Toggle history Full support Safari Toggle history Full support Chrome Android Toggle history Full support Firefox for Android more Toggle history Full support Opera Android .
Toggle history Full support Safari on iOS Toggle history Full support Samsung Internet .
Toggle history Full support WebView Android .
Toggle history queryCommandIndeterm Deprecated Full support Chrome Toggle history Full support Edge Toggle history Full support Firefox Toggle history Full support Opera Toggle history Full support Safari Toggle history Full support Chrome Android Toggle history Full support Firefox for Android Toggle history Full support Opera Android Toggle history Full support Safari on iOS Toggle history Full support Samsung Internet .
Toggle history Full support WebView Android .
Toggle history queryCommandState Deprecated Nonstandard Full support Chrome Toggle history Full support Edge Toggle history Full support Firefox Toggle history Full support Opera .
Toggle history Full support Safari Toggle history Full support Chrome Android Toggle history Full support Firefox for Android Toggle history Full support Opera Android .
Toggle history Full support Safari on iOS Toggle history Full support Samsung Internet .
Toggle history Full support WebView Android .
Toggle history queryCommandSupported Deprecated Nonstandard Full support Chrome Toggle history Full support Edge Toggle history Full support Firefox more Toggle history Full support Opera .
Toggle history Full support Safari Toggle history Full support Chrome Android Toggle history Full support Firefox for Android more Toggle history Full support Opera Android .
Toggle history Full support Safari on iOS Toggle history Full support Samsung Internet .
Toggle history Full support WebView Android .
Toggle history queryCommandValue Deprecated Full support Chrome Toggle history Full support Edge Toggle history Full support Firefox Toggle history Full support Opera .
Toggle history Full support Safari Toggle history Full support Chrome Android Toggle history Full support Firefox for Android Toggle history Full support Opera Android .
Toggle history Full support Safari on iOS Toggle history Full support Samsung Internet .
Toggle history Full support WebView Android .
Toggle history querySelector Full support Chrome Toggle history Full support Edge Toggle history Full support Firefox .
Toggle history Full support Opera Toggle history Full support Safari .
Toggle history Full support Chrome Android Toggle history Full support Firefox for Android Toggle history Full support Opera Android .
Toggle history Full support Safari on iOS Toggle history Full support Samsung Internet .
Toggle history Full support WebView Android .
Toggle history querySelectorAll Full support Chrome Toggle history Full support Edge Toggle history Full support Firefox .
Toggle history Full support Opera Toggle history Full support Safari .
Toggle history Full support Chrome Android Toggle history Full support Firefox for Android Toggle history Full support Opera Android .
Toggle history Full support Safari on iOS Toggle history Full support Samsung Internet .
Toggle history Full support WebView Android .
Toggle history readyState Full support Chrome Toggle history Full support Edge Toggle history Full support Firefox .
Toggle history Full support Opera footnote Toggle history Full support Safari Toggle history Full support Chrome Android Toggle history Full support Firefox for Android Toggle history Full support Opera Android footnote Toggle history Full support Safari on iOS Toggle history Full support Samsung Internet .
Toggle history Full support WebView Android .
Toggle history readystatechange event Full support Chrome Toggle history Full support Edge Toggle history Full support Firefox Toggle history Full support Opera .
Toggle history Full support Safari .
Toggle history Full support Chrome Android Toggle history Full support Firefox for Android Toggle history Full support Opera Android .
Toggle history Full support Safari on iOS Toggle history Full support Samsung Internet .
Toggle history Full support WebView Android Toggle history referrer Full support Chrome Toggle history Full support Edge Toggle history Full support Firefox Toggle history Full support Opera Toggle history Full support Safari Toggle history Full support Chrome Android Toggle history Full support Firefox for Android Toggle history Full support Opera Android .
Toggle history Full support Safari on iOS Toggle history Full support Samsung Internet .
Toggle history Full support WebView Android .
Toggle history releaseCapture Nonstandard No support Chrome No Toggle history No support Edge No Toggle history Full support Firefox Toggle history No support Opera No Toggle history No support Safari No Toggle history No support Chrome Android No Toggle history Full support Firefox for Android Toggle history No support Opera Android No Toggle history No support Safari on iOS No Toggle history No support Samsung Internet No Toggle history No support WebView Android No Toggle history releaseEvents Deprecated Full support Chrome more Toggle history Full support Edge Toggle history Full support Firefox Toggle history Full support Opera more Toggle history Full support Safari more Toggle history Full support Chrome Android more Toggle history Full support Firefox for Android Toggle history Full support Opera Android more Toggle history Full support Safari on iOS more Toggle history Full support Samsung Internet .
more Toggle history Full support WebView Android more Toggle history replaceChildren Full support Chrome Toggle history Full support Edge Toggle history Full support Firefox Toggle history Full support Opera Toggle history Full support Safari Toggle history Full support Chrome Android Toggle history Full support Firefox for Android Toggle history Full support Opera Android Toggle history Full support Safari on iOS Toggle history Full support Samsung Internet .
Toggle history Full support WebView Android Toggle history requestStorageAccess Full support Chrome Toggle history Full support Edge Toggle history Full support Firefox Toggle history Full support Opera Toggle history Full support Safari .
footnote Toggle history Full support Chrome Android Toggle history Full support Firefox for Android Toggle history Full support Opera Android Toggle history Full support Safari on iOS .
footnote Toggle history Full support Samsung Internet .
Toggle history No support WebView Android No Toggle history types parameter Preview browser support Chrome Toggle history No support Edge No Toggle history No support Firefox No Toggle history No support Opera No Toggle history No support Safari No Toggle history No support Chrome Android No Toggle history No support Firefox for Android No Toggle history No support Opera Android No Toggle history No support Safari on iOS No Toggle history No support Samsung Internet No Toggle history No support WebView Android No Toggle history types.BroadcastChannel parameter Preview browser support Chrome Toggle history No support Edge No Toggle history No support Firefox No Toggle history No support Opera No Toggle history No support Safari No Toggle history No support Chrome Android No Toggle history No support Firefox for Android No Toggle history No support Opera Android No Toggle history No support Safari on iOS No Toggle history No support Samsung Internet No Toggle history No support WebView Android No Toggle history types.SharedWorker parameter Preview browser support Chrome Toggle history No support Edge No Toggle history No support Firefox No Toggle history No support Opera No Toggle history No support Safari No Toggle history No support Chrome Android No Toggle history No support Firefox for Android No Toggle history No support Opera Android No Toggle history No support Safari on iOS No Toggle history No support Samsung Internet No Toggle history No support WebView Android No Toggle history types.all parameter Preview browser support Chrome Toggle history No support Edge No Toggle history No support Firefox No Toggle history No support Opera No Toggle history No support Safari No Toggle history No support Chrome Android No Toggle history No support Firefox for Android No Toggle history No support Opera Android No Toggle history No support Safari on iOS No Toggle history No support Samsung Internet No Toggle history No support WebView Android No Toggle history types.caches parameter Preview browser support Chrome Toggle history No support Edge No Toggle history No support Firefox No Toggle history No support Opera No Toggle history No support Safari No Toggle history No support Chrome Android No Toggle history No support Firefox for Android No Toggle history No support Opera Android No Toggle history No support Safari on iOS No Toggle history No support Samsung Internet No Toggle history No support WebView Android No Toggle history types.cookies parameter Preview browser support Chrome Toggle history No support Edge No Toggle history No support Firefox No Toggle history No support Opera No Toggle history No support Safari No Toggle history No support Chrome Android No Toggle history No support Firefox for Android No Toggle history No support Opera Android No Toggle history No support Safari on iOS No Toggle history No support Samsung Internet No Toggle history No support WebView Android No Toggle history types.createObjectURL parameter Preview browser support Chrome Toggle history No support Edge No Toggle history No support Firefox No Toggle history No support Opera No Toggle history No support Safari No Toggle history No support Chrome Android No Toggle history No support Firefox for Android No Toggle history No support Opera Android No Toggle history No support Safari on iOS No Toggle history No support Samsung Internet No Toggle history No support WebView Android No Toggle history types.estimate parameter Preview browser support Chrome Toggle history No support Edge No Toggle history No support Firefox No Toggle history No support Opera No Toggle history No support Safari No Toggle history No support Chrome Android No Toggle history No support Firefox for Android No Toggle history No support Opera Android No Toggle history No support Safari on iOS No Toggle history No support Samsung Internet No Toggle history No support WebView Android No Toggle history types.getDirectory parameter Preview browser support Chrome Toggle history No support Edge No Toggle history No support Firefox No Toggle history No support Opera No Toggle history No support Safari No Toggle history No support Chrome Android No Toggle history No support Firefox for Android No Toggle history No support Opera Android No Toggle history No support Safari on iOS No Toggle history No support Samsung Internet No Toggle history No support WebView Android No Toggle history types.indexedDB parameter Preview browser support Chrome Toggle history No support Edge No Toggle history No support Firefox No Toggle history No support Opera No Toggle history No support Safari No Toggle history No support Chrome Android No Toggle history No support Firefox for Android No Toggle history No support Opera Android No Toggle history No support Safari on iOS No Toggle history No support Samsung Internet No Toggle history No support WebView Android No Toggle history types.localStorage parameter Preview browser support Chrome Toggle history No support Edge No Toggle history No support Firefox No Toggle history No support Opera No Toggle history No support Safari No Toggle history No support Chrome Android No Toggle history No support Firefox for Android No Toggle history No support Opera Android No Toggle history No support Safari on iOS No Toggle history No support Samsung Internet No Toggle history No support WebView Android No Toggle history types.locks parameter Preview browser support Chrome Toggle history No support Edge No Toggle history No support Firefox No Toggle history No support Opera No Toggle history No support Safari No Toggle history No support Chrome Android No Toggle history No support Firefox for Android No Toggle history No support Opera Android No Toggle history No support Safari on iOS No Toggle history No support Samsung Internet No Toggle history No support WebView Android No Toggle history types.revokeObjectURL parameter Preview browser support Chrome Toggle history No support Edge No Toggle history No support Firefox No Toggle history No support Opera No Toggle history No support Safari No Toggle history No support Chrome Android No Toggle history No support Firefox for Android No Toggle history No support Opera Android No Toggle history No support Safari on iOS No Toggle history No support Samsung Internet No Toggle history No support WebView Android No Toggle history types.sessionStorage parameter Preview browser support Chrome Toggle history No support Edge No Toggle history No support Firefox No Toggle history No support Opera No Toggle history No support Safari No Toggle history No support Chrome Android No Toggle history No support Firefox for Android No Toggle history No support Opera Android No Toggle history No support Safari on iOS No Toggle history No support Samsung Internet No Toggle history No support WebView Android No Toggle history requestStorageAccessFor Experimental Full support Chrome footnote Toggle history Full support Edge footnote Toggle history No support Firefox No Toggle history Full support Opera footnote Toggle history No support Safari No Toggle history Full support Chrome Android footnote Toggle history No support Firefox for Android No Toggle history Full support Opera Android footnote Toggle history No support Safari on iOS No Toggle history Full support Samsung Internet .
footnote Toggle history No support WebView Android No Toggle history resume event Experimental Full support Chrome Toggle history Full support Edge Toggle history No support Firefox No Toggle history Full support Opera Toggle history No support Safari No Toggle history Full support Chrome Android Toggle history No support Firefox for Android No Toggle history Full support Opera Android Toggle history No support Safari on iOS No Toggle history Full support Samsung Internet .
Toggle history Full support WebView Android Toggle history rootElement Deprecated Full support Chrome Toggle history Full support Edge Toggle history Full support Firefox Toggle history Full support Opera Toggle history Full support Safari .
Toggle history Full support Chrome Android Toggle history Full support Firefox for Android Toggle history Full support Opera Android Toggle history Full support Safari on iOS .
Toggle history Full support Samsung Internet .
Toggle history Full support WebView Android Toggle history scripts Full support Chrome Toggle history Full support Edge Toggle history Full support Firefox Toggle history Full support Opera .
Toggle history Full support Safari Toggle history Full support Chrome Android Toggle history Full support Firefox for Android Toggle history Full support Opera Android .
Toggle history Full support Safari on iOS Toggle history Full support Samsung Internet .
Toggle history Full support WebView Android .
Toggle history scroll event Full support Chrome Toggle history Full support Edge Toggle history Full support Firefox Toggle history Full support Opera .
Toggle history Full support Safari Toggle history Full support Chrome Android Toggle history Full support Firefox for Android Toggle history Full support Opera Android Toggle history Full support Safari on iOS Toggle history Full support Samsung Internet .
Toggle history Full support WebView Android .
Toggle history scrollend event Full support Chrome Toggle history Full support Edge Toggle history Full support Firefox Toggle history Full support Opera Toggle history No support Safari No footnote Toggle history Full support Chrome Android Toggle history Full support Firefox for Android Toggle history Full support Opera Android Toggle history No support Safari on iOS No footnote Toggle history Full support Samsung Internet .
Toggle history Full support WebView Android Toggle history scrollingElement Full support Chrome Toggle history Full support Edge Toggle history Full support Firefox Toggle history Full support Opera Toggle history Full support Safari Toggle history Full support Chrome Android Toggle history Full support Firefox for Android Toggle history Full support Opera Android Toggle history Full support Safari on iOS Toggle history Full support Samsung Internet .
Toggle history Full support WebView Android Toggle history securitypolicyviolation event Full support Chrome Toggle history Full support Edge Toggle history Full support Firefox Toggle history Full support Opera Toggle history Full support Safari .
Toggle history Full support Chrome Android Toggle history Full support Firefox for Android Toggle history Full support Opera Android Toggle history Full support Safari on iOS .
Toggle history Full support Samsung Internet .
Toggle history Full support WebView Android Toggle history selectedStyleSheetSet Deprecated Nonstandard No support Chrome No Toggle history No support Edge No Toggle history Full support Firefox Toggle history No support Opera No Toggle history No support Safari No Toggle history No support Chrome Android No Toggle history Full support Firefox for Android Toggle history No support Opera Android No Toggle history No support Safari on iOS No Toggle history No support Samsung Internet No Toggle history No support WebView Android No Toggle history selectionchange event Full support Chrome Toggle history Full support Edge Toggle history Full support Firefox Toggle history Full support Opera Toggle history Full support Safari .
Toggle history Full support Chrome Android Toggle history Full support Firefox for Android Toggle history Full support Opera Android Toggle history Full support Safari on iOS Toggle history Full support Samsung Internet .
Toggle history Full support WebView Android Toggle history startViewTransition Experimental Full support Chrome Toggle history Full support Edge Toggle history No support Firefox No Toggle history Full support Opera Toggle history No support Safari No Toggle history Full support Chrome Android Toggle history No support Firefox for Android No Toggle history Full support Opera Android Toggle history No support Safari on iOS No Toggle history Full support Samsung Internet .
Toggle history Full support WebView Android Toggle history styleSheetSets Deprecated Nonstandard No support Chrome No Toggle history No support Edge No Toggle history Full support Firefox Toggle history No support Opera No Toggle history No support Safari No Toggle history No support Chrome Android No Toggle history Full support Firefox for Android Toggle history No support Opera Android No Toggle history No support Safari on iOS No Toggle history No support Samsung Internet No Toggle history No support WebView Android No Toggle history styleSheets Full support Chrome Toggle history Full support Edge Toggle history Full support Firefox Toggle history Full support Opera .
Toggle history Full support Safari Toggle history Full support Chrome Android Toggle history Full support Firefox for Android Toggle history Full support Opera Android .
Toggle history Full support Safari on iOS .
Toggle history Full support Samsung Internet .
Toggle history Full support WebView Android .
Toggle history timeline Full support Chrome Toggle history Full support Edge Toggle history Full support Firefox Toggle history Full support Opera Toggle history Full support Safari .
Toggle history Full support Chrome Android Toggle history Full support Firefox for Android Toggle history Full support Opera Android Toggle history Full support Safari on iOS .
Toggle history Full support Samsung Internet .
Toggle history Full support WebView Android Toggle history title Full support Chrome Toggle history Full support Edge Toggle history Full support Firefox Toggle history Full support Opera .
Toggle history Full support Safari Toggle history Full support Chrome Android Toggle history Full support Firefox for Android Toggle history Full support Opera Android .
Toggle history Full support Safari on iOS Toggle history Full support Samsung Internet .
Toggle history Full support WebView Android .
Toggle history visibilityState Full support Chrome more Toggle history Full support Edge Toggle history Full support Firefox more Toggle history Full support Opera more Toggle history Full support Safari Toggle history Full support Chrome Android more Toggle history Full support Firefox for Android more Toggle history Full support Opera Android more Toggle history Full support Safari on iOS Toggle history Full support Samsung Internet .
more Toggle history Full support WebView Android ..
more Toggle history visibilitychange event Full support Chrome more Toggle history Full support Edge more Toggle history Full support Firefox Toggle history Full support Opera more Toggle history Full support Safari .
more Toggle history Full support Chrome Android more Toggle history Full support Firefox for Android Toggle history Full support Opera Android more Toggle history Full support Safari on iOS .
more Toggle history Full support Samsung Internet .
more Toggle history Full support WebView Android more Toggle history vlinkColor Deprecated Full support Chrome more Toggle history Full support Edge Toggle history Full support Firefox Toggle history Full support Opera more Toggle history Full support Safari more Toggle history Full support Chrome Android more Toggle history Full support Firefox for Android Toggle history Full support Opera Android more Toggle history Full support Safari on iOS more Toggle history Full support Samsung Internet .
more Toggle history Full support WebView Android more Toggle history wasDiscarded Experimental Full support Chrome Toggle history Full support Edge Toggle history No support Firefox No Toggle history Full support Opera Toggle history No support Safari No Toggle history Full support Chrome Android Toggle history No support Firefox for Android No Toggle history Full support Opera Android Toggle history No support Safari on iOS No Toggle history Full support Samsung Internet .
Toggle history Full support WebView Android Toggle history write Full support Chrome Toggle history Full support Edge Toggle history Full support Firefox Toggle history Full support Opera Toggle history Full support Safari Toggle history Full support Chrome Android Toggle history Full support Firefox for Android Toggle history Full support Opera Android .
Toggle history Full support Safari on iOS Toggle history Full support Samsung Internet .
Toggle history Full support WebView Android .
Toggle history writeln Full support Chrome more Toggle history Full support Edge Toggle history Full support Firefox Toggle history Full support Opera more Toggle history Full support Safari more Toggle history Full support Chrome Android more Toggle history Full support Firefox for Android Toggle history Full support Opera Android more Toggle history Full support Safari on iOS more Toggle history Full support Samsung Internet .
more Toggle history Full support WebView Android more Toggle history xmlEncoding Deprecated Full support Chrome Toggle history Full support Edge Toggle history No support Firefox Toggle history Full support Opera Toggle history Full support Safari Toggle history Full support Chrome Android Toggle history No support Firefox for Android Toggle history Full support Opera Android Toggle history Full support Safari on iOS Toggle history Full support Samsung Internet .
Toggle history Full support WebView Android .
Toggle history xmlStandalone Deprecated Full support Chrome Toggle history Full support Edge Toggle history No support Firefox Toggle history Full support Opera Toggle history Full support Safari Toggle history Full support Chrome Android Toggle history No support Firefox for Android Toggle history Full support Opera Android Toggle history Full support Safari on iOS Toggle history Full support Samsung Internet .
Toggle history Full support WebView Android .
Toggle history xmlVersion Deprecated Full support Chrome Toggle history Full support Edge Toggle history No support Firefox Toggle history Full support Opera Toggle history Full support Safari Toggle history Full support Chrome Android Toggle history No support Firefox for Android Toggle history Full support Opera Android Toggle history Full support Safari on iOS Toggle history Full support Samsung Internet .
Toggle history Full support WebView Android .
Toggle history Legend Tip you can clicktap on a cell for more information.
Full support Full support Partial support Partial support In development.
Supported in a prerelease version.
In development.
Supported in a prerelease version.
No support No support Experimental.
Expect behavior to change in the future.
Nonstandard.
Check crossbrowser support before using.
Deprecated.
Not for use in new websites.
See implementation notes.
User must explicitly enable this feature.
Uses a nonstandard name.
Requires a vendor prefix or different name for use.
Has more compatibility info.
The compatibility table on this page is generated from structured data.
If youd like to contribute to the data please check out httpsgithub.commdnbrowsercompatdata and send us a pull request.

`;
},"2024-05-09 20:00:00","2024-05-17 20:00:00","Appendix IV","document-ref"],
["Window ref",function() {

return  `
 Window The Window interface represents a window containing a DOM document the document property points to the DOM document loaded in that window.
A window for a given document can be obtained using the document.defaultView property.
A global variable window representing the window in which the script is running is exposed to JavaScript code.
The Window interface is home to a variety of functions namespaces objects and constructors which are not necessarily directly associated with the concept of a user interface window.
However the Window interface is a suitable place to include these items that need to be globally available.
Many of these are documented in the JavaScript Reference and the DOM Reference .
In a tabbed browser each tab is represented by its own Window object the global window seen by JavaScript code running within a given tab always represents the tab in which the code is running.
That said even in a tabbed browser some properties and methods still apply to the overall window that contains the tab such as resizeTo() and innerHeight .
Generally anything that cant reasonably pertain to a tab pertains to the window instead.
EventTarget Window Instance properties This interface inherits properties from the EventTarget interface.
Note that properties which are objects (e.g.
for overriding the prototype of builtin elements) are listed in a separate section below.
Window.caches Read only Returns the CacheStorage object associated with the current context.
This object enables functionality such as storing assets for offline use and generating custom responses to requests.
Window.clientInformation Read only An alias for Window.navigator .
Window.closed Read only This property indicates whether the current window is closed or not.
Window.console Read only Returns a reference to the console object which provides access to the browsers debugging console.
Window.cookieStore Read only Experimental Secure context Returns a reference to the CookieStore object for the current document context.
Window.credentialless Read only Experimental Returns a boolean that indicates whether the current document was loaded inside a credentialless ltiframegt .
See IFrame credentialless for more details.
Window.crossOriginIsolated Read only Returns a boolean value that indicates whether the website is in a crossorigin isolation state.
Window.crypto Read only Returns the browser crypto object.
Window.customElements Read only Returns a reference to the CustomElementRegistry object which can be used to register new custom elements and get information about previously registered custom elements.
Window.devicePixelRatio Read only Returns the ratio between physical pixels and device independent pixels in the current display.
Window.document Read only Returns a reference to the document that the window contains.
Window.documentPictureInPicture Read only Experimental Secure context Returns a reference to the document PictureinPicture window for the current document context.
Window.fence Read only Experimental Returns a Fence object instance for the current document context.
Available only to documents embedded inside a ltfencedframegt .
Window.frameElement Read only Returns the element in which the window is embedded or null if the window is not embedded.
Window.frames Read only Returns an array of the subframes in the current window.
Window.fullScreen Nonstandard This property indicates whether the window is displayed in full screen or not.
Window.history Read only Returns a reference to the history object.
Window.indexedDB Read only Provides a mechanism for applications to asynchronously access capabilities of indexed databases returns an IDBFactory object.
Window.innerHeight Read only Gets the height of the content area of the browser window including if rendered the horizontal scrollbar.
Window.innerWidth Read only Gets the width of the content area of the browser window including if rendered the vertical scrollbar.
Window.isSecureContext Read only Returns a boolean indicating whether the current context is secure ( true ) or not ( false ).
Window.launchQueue Read only Experimental When a progressive web app (PWA) is launched with a launchhandler clientmode value of focusexisting navigatenew or navigateexisting the launchQueue provides access to the LaunchQueue class which allows custom launch navigation handling to be implemented for the PWA.
Window.length Read only Returns the number of frames in the window.
See also window.frames .
Window.localStorage Read only Returns a reference to the local storage object used to store data that may only be accessed by the origin that created it.
Window.location Getssets the location or current URL of the window object.
Window.locationbar Read only Returns the locationbar object.
Window.menubar Read only Returns the menubar object.
Window.mozInnerScreenX Read only Nonstandard Returns the horizontal (X) coordinate of the topleft corner of the windows viewport in screen coordinates.
This value is reported in CSS pixels.
See mozScreenPixelsPerCSSPixel in nsIDOMWindowUtils for a conversion factor to adapt to screen pixels if needed.
Window.mozInnerScreenY Read only Nonstandard Returns the vertical (Y) coordinate of the topleft corner of the windows viewport in screen coordinates.
This value is reported in CSS pixels.
See mozScreenPixelsPerCSSPixel for a conversion factor to adapt to screen pixels if needed.
Window.name Getssets the name of the window.
Window.navigation Read only Experimental Returns the current window s associated Navigation object.
The entry point for the Navigation API .
Window.navigator Read only Returns a reference to the navigator object.
Window.opener Returns a reference to the window that opened this current window.
Window.origin Read only Returns the global objects origin serialized as a string.
Window.originAgentCluster Read only Experimental Returns true if this window belongs to an originkeyed agent cluster.
Window.outerHeight Read only Gets the height of the outside of the browser window.
Window.outerWidth Read only Gets the width of the outside of the browser window.
Window.pageXOffset Read only An alias for window.scrollX .
Window.pageYOffset Read only An alias for window.scrollY .
Window.parent Read only Returns a reference to the parent of the current window or subframe.
Window.performance Read only Returns a Performance object which includes the timing and navigation attributes each of which is an object providing performancerelated data.
See also Using Navigation Timing for additional information and examples.
Window.personalbar Read only Returns the personalbar object.
Window.scheduler Read only Returns the Scheduler object associated with the current context.
This is the entry point for using the Prioritized Task Scheduling API .
Window.screen Read only Returns a reference to the screen object associated with the window.
Window.screenX and Window.screenLeft Read only Both properties return the horizontal distance from the left border of the users browser viewport to the left side of the screen.
Window.screenY and Window.screenTop Read only Both properties return the vertical distance from the top border of the users browser viewport to the top side of the screen.
Window.scrollbars Read only Returns the scrollbars object.
Window.scrollMaxX Nonstandard Read only The maximum offset that the window can be scrolled to horizontally that is the document width minus the viewport width.
Window.scrollMaxY Nonstandard Read only The maximum offset that the window can be scrolled to vertically (i.e.
the document height minus the viewport height).
Window.scrollX Read only Returns the number of pixels that the document has already been scrolled horizontally.
Window.scrollY Read only Returns the number of pixels that the document has already been scrolled vertically.
Window.self Read only Returns an object reference to the window object itself.
Window.sessionStorage Returns a reference to the session storage object used to store data that may only be accessed by the origin that created it.
Window.sharedStorage Read only Experimental Secure context Returns the WindowSharedStorage object for the current origin.
This is the main entry point for writing data to shared storage using the Shared Storage API .
Window.speechSynthesis Read only Returns a SpeechSynthesis object which is the entry point into using Web Speech API speech synthesis functionality.
Window.statusbar Read only Returns the statusbar object.
Window.toolbar Read only Returns the toolbar object.
Window.top Read only Returns a reference to the topmost window in the window hierarchy.
This property is read only.
Window.visualViewport Read only Returns a VisualViewport object which represents the visual viewport for a given window.
Window.window Read only Returns a reference to the current window.
window[] window[] etc.
Returns a reference to the window object in the frames.
See Window.frames for more details.
Deprecated properties Window.event Deprecated Read only Returns the current event which is the event currently being handled by the JavaScript codes context or undefined if no event is currently being handled.
The Event object passed directly to event handlers should be used instead whenever possible.
Window.external Deprecated Read only Returns an object with functions for adding external search providers to the browser.
Window.orientation Deprecated Read only Returns the orientation in degrees (in degree increments) of the viewport relative to the devices natural orientation.
Window.sidebar Deprecated Nonstandard Read only Returns a reference to the window object of the sidebar Window.status Deprecated Getssets the text in the statusbar at the bottom of the browser.
Instance methods This interface inherits methods from the EventTarget interface.
Window.atob() Decodes a string of data which has been encoded using base encoding.
Window.alert() Displays an alert dialog.
Window.blur() Deprecated Sets focus away from the window.
Window.btoa() Creates a base encoded ASCII string from a string of binary data.
Window.cancelAnimationFrame() Enables you to cancel a callback previously scheduled with Window.requestAnimationFrame .
Window.cancelIdleCallback() Enables you to cancel a callback previously scheduled with Window.requestIdleCallback .
Window.clearInterval() Cancels the repeated execution set using setInterval() .
Window.clearTimeout() Cancels the delayed execution set using setTimeout() .
Window.close() Closes the current window.
Window.confirm() Displays a dialog with a message that the user needs to respond to.
Window.createImageBitmap() Accepts a variety of different image sources and returns a Promise which resolves to an ImageBitmap .
Optionally the source is cropped to the rectangle of pixels originating at (sx sy) with width sw and height sh.
Window.dump() Nonstandard Writes a message to the console.
Window.fetch() Starts the process of fetching a resource from the network.
Window.find() Nonstandard Searches for a given string in a window.
Window.focus() Sets focus on the current window.
Window.getComputedStyle() Gets computed style for the specified element.
Computed style indicates the computed values of all CSS properties of the element.
Window.getDefaultComputedStyle() Nonstandard Gets default computed style for the specified element ignoring author stylesheets.
Window.getScreenDetails() Experimental Secure context Returns a Promise that fulfills with a ScreenDetails object instance representing the details of all the screens available to the users device.
Window.getSelection() Returns the selection object representing the selected item(s).
Window.matchMedia() Returns a MediaQueryList object representing the specified media query string.
Window.moveBy() Moves the current window by a specified amount.
Window.moveTo() Moves the window to the specified coordinates.
Window.open() Opens a new window.
Window.postMessage() Provides a secure means for one window to send a string of data to another window which need not be within the same domain as the first.
Window.print() Opens the Print Dialog to print the current document.
Window.prompt() Returns the text entered by the user in a prompt dialog.
Window.queryLocalFonts() Experimental Secure context Returns a Promise that fulfills with an array of FontData objects representing the font faces available locally.
Window.queueMicrotask() Queues a microtask to be executed at a safe time prior to control returning to the browsers event loop.
Window.reportError() Reports an error in a script emulating an unhandled exception.
Window.requestAnimationFrame() Tells the browser that an animation is in progress requesting that the browser schedule a repaint of the window for the next animation frame.
Window.requestIdleCallback() Enables the scheduling of tasks during a browsers idle periods.
Window.resizeBy() Resizes the current window by a certain amount.
Window.resizeTo() Dynamically resizes window.
Window.scroll() Scrolls the window to a particular place in the document.
Window.scrollBy() Scrolls the document in the window by the given amount.
Window.scrollByLines() Nonstandard Scrolls the document by the given number of lines.
Window.scrollByPages() Nonstandard Scrolls the current document by the specified number of pages.
Window.scrollTo() Scrolls to a particular set of coordinates in the document.
Window.setInterval() Schedules a function to execute every time a given number of milliseconds elapses.
Window.setTimeout() Schedules a function to execute in a given amount of time.
Window.showDirectoryPicker() Experimental Secure context Displays a directory picker which allows the user to select a directory.
Window.showOpenFilePicker() Experimental Secure context Shows a file picker that allows a user to select a file or multiple files.
Window.showSaveFilePicker() Experimental Secure context Shows a file picker that allows a user to save a file.
Window.sizeToContent() Nonstandard Sizes the window according to its content.
Window.stop() This method stops window loading.
Window.structuredClone() Creates a deep clone of a given value using the structured clone algorithm .
Window.updateCommands() Nonstandard Updates the state of commands of the current chrome window (UI).
Deprecated methods Window.back() Nonstandard Deprecated Moves back one in the window history.
This method is deprecated you should instead use history.back() .
Window.captureEvents() Deprecated Registers the window to capture all events of the specified type.
Window.clearImmediate() Nonstandard Deprecated Cancels the repeated execution set using setImmediate() .
Window.forward() Nonstandard Deprecated Moves the window one document forward in the history.
This method is deprecated you should instead use history.forward() .
Window.releaseEvents() Deprecated Releases the window from trapping events of a specific type.
Window.requestFileSystem() Nonstandard Deprecated Lets a website or app gain access to a sandboxed file system for its own use.
Window.setImmediate() Nonstandard Deprecated Executes a function after the browser has finished other heavy tasks.
Window.setResizable() Nonstandard Deprecated Does nothing (noop).
Kept for backward compatibility with Netscape .x.
Window.showModalDialog() Nonstandard Deprecated Displays a modal dialog.
Window.webkitConvertPointFromNodeToPage() Nonstandard Deprecated Transforms a WebKitPoint from the nodes coordinate system to the pages coordinate system.
Window.webkitConvertPointFromPageToNode() Nonstandard Deprecated Transforms a WebKitPoint from the pages coordinate system to the nodes coordinate system.
Events Listen to these events using addEventListener() or by assigning an event listener to the oneventname property of this interface.
In addition to the events listed below many events can bubble from the Document contained in the window object.
error Fired when a resource failed to load or cant be used.
For example if a script has an execution error or an image cant be found or is invalid.
languagechange Fired at the global scope object when the users preferred language changes.
resize Fired when the window has been resized.
storage Fired when a storage area ( localStorage or sessionStorage ) has been modified in the context of another document.
Clipboard events copy Fired when the user initiates a copy action through the browsers user interface.
Also available via the oncopy property.
cut Fired when the user initiates a cut action through the browsers user interface.
Also available via the oncut property.
paste Fired when the user initiates a paste action through the browsers user interface.
Also available via the onpaste property.
Connection events offline Fired when the browser has lost access to the network and the value of navigator.onLine has switched to false .
online Fired when the browser has gained access to the network and the value of navigator.onLine has switched to true .
Device orientation events devicemotion Secure context Fired at a regular interval indicating the amount of physical force of acceleration the device is receiving and the rate of rotation if available.
deviceorientation Secure context Fired when fresh data is available from the magnetometer orientation sensor about the current orientation of the device as compared to the Earth coordinate frame.
deviceorientationabsolute Secure context Fired when fresh data is available from the magnetometer orientation sensor about the current absolute orientation of the device as compared to the Earth coordinate frame.
Focus events blur Fired when an element has lost focus.
focus Fired when an element has gained focus.
Gamepad events gamepadconnected Fired when the browser detects that a gamepad has been connected or the first time a buttonaxis of the gamepad is used.
gamepaddisconnected Fired when the browser detects that a gamepad has been disconnected.
History events hashchange Fired when the fragment identifier of the URL has changed (the part of the URL beginning with and following the symbol).
pagehide Sent when the browser hides the current document while in the process of switching to displaying in its place a different document from the sessions history.
This happens for example when the user clicks the Back button or when they click the Forward button to move ahead in session history.
pageshow Sent when the browser makes the document visible due to navigation tasks including not only when the page is first loaded but also situations such as the user navigating back to the page after having navigated to another within the same tab.
popstate Fired when the active history entry changes.
Load amp unload events beforeunload Fired when the window the document and its resources are about to be unloaded.
load Fired when the whole page has loaded including all dependent resources such as stylesheets images.
unload Deprecated Fired when the document or a child resource is being unloaded.
Manifest events appinstalled Fired when the browser has successfully installed a page as an application.
beforeinstallprompt Fired when a user is about to be prompted to install a web application.
Messaging events message Fired when the window receives a message for example from a call to Window.postMessage() from another browsing context.
messageerror Fired when a Window object receives a message that cant be deserialized.
Print events afterprint Fired after the associated document has started printing or the print preview has been closed.
beforeprint Fired when the associated document is about to be printed or previewed for printing.
Promise rejection events rejectionhandled Sent every time a JavaScript Promise is rejected regardless of whether or not there is a handler in place to catch the rejection.
unhandledrejection Sent when a JavaScript Promise is rejected but there is no handler in place to catch the rejection.
Deprecated events orientationchange Deprecated Fired when the orientation of the device has changed.
vrdisplayactivate Deprecated Nonstandard Fired when a display is able to be presented to.
vrdisplayconnect Deprecated Nonstandard Fired when a compatible VR device has been connected to the computer.
vrdisplaydisconnect Deprecated Nonstandard Fired when a compatible VR device has been disconnected from the computer.
vrdisplaydeactivate Deprecated Nonstandard Fired when a display can no longer be presented to.
vrdisplaypresentchange Deprecated Nonstandard Fired when the presenting state of a VR device changes i.e.
goes from presenting to not presenting or vice versa.
Interfaces See DOM Reference .
Specifications Specification HTML Standard thewindowobject Browser compatibility Report problems with this compatibility data on GitHub desktop mobile server Chrome Edge Firefox Opera Safari Chrome Android Firefox for Android Opera Android Safari on iOS Samsung Internet WebView Android Deno Window Full support Chrome Toggle history Full support Edge Toggle history Full support Firefox Toggle history Full support Opera Toggle history Full support Safari Toggle history Full support Chrome Android Toggle history Full support Firefox for Android Toggle history Full support Opera Android .
Toggle history Full support Safari on iOS Toggle history Full support Samsung Internet .
Toggle history Full support WebView Android Toggle history Full support Deno .
Toggle history DOMContentLoaded event Full support Chrome Toggle history Full support Edge Toggle history Full support Firefox Toggle history Full support Opera Toggle history Full support Safari .
Toggle history Full support Chrome Android Toggle history Full support Firefox for Android Toggle history Full support Opera Android .
Toggle history Full support Safari on iOS Toggle history Full support Samsung Internet .
Toggle history Full support WebView Android Toggle history Compatibility unknown please update this.
Deno Toggle history afterprint event Full support Chrome Toggle history Full support Edge Toggle history Full support Firefox Toggle history Full support Opera Toggle history Full support Safari Toggle history Full support Chrome Android Toggle history Full support Firefox for Android Toggle history Full support Opera Android Toggle history Full support Safari on iOS Toggle history Full support Samsung Internet .
Toggle history Full support WebView Android Toggle history Compatibility unknown please update this.
Deno Toggle history alert Full support Chrome footnote Toggle history Full support Edge Toggle history Full support Firefox Toggle history Full support Opera footnote Toggle history Full support Safari Toggle history Full support Chrome Android footnote Toggle history Full support Firefox for Android Toggle history Full support Opera Android .
footnote Toggle history Full support Safari on iOS Toggle history Full support Samsung Internet .
footnote Toggle history Full support WebView Android .
footnote Toggle history Full support Deno .
Toggle history appinstalled event Full support Chrome Toggle history Full support Edge Toggle history No support Firefox No Toggle history No support Opera No footnote Toggle history No support Safari No Toggle history Full support Chrome Android Toggle history No support Firefox for Android No Toggle history No support Opera Android No footnote Toggle history No support Safari on iOS No Toggle history Full support Samsung Internet .
Toggle history Full support WebView Android Toggle history Compatibility unknown please update this.
Deno Toggle history beforeinstallprompt event Full support Chrome more Toggle history Full support Edge Toggle history No support Firefox No Toggle history Full support Opera more Toggle history No support Safari No Toggle history Full support Chrome Android more Toggle history No support Firefox for Android No Toggle history Full support Opera Android more Toggle history No support Safari on iOS No Toggle history Full support Samsung Internet .
more Toggle history Full support WebView Android more Toggle history Compatibility unknown please update this.
Deno Toggle history beforeprint event Full support Chrome Toggle history Full support Edge Toggle history Full support Firefox Toggle history Full support Opera Toggle history Full support Safari Toggle history Full support Chrome Android Toggle history Full support Firefox for Android Toggle history Full support Opera Android Toggle history Full support Safari on iOS Toggle history Full support Samsung Internet .
Toggle history Full support WebView Android Toggle history Compatibility unknown please update this.
Deno Toggle history beforeunload event Full support Chrome Toggle history Full support Edge Toggle history Full support Firefox Toggle history Full support Opera Toggle history Full support Safari Toggle history Full support Chrome Android Toggle history Full support Firefox for Android Toggle history Full support Opera Android Toggle history Full support Safari on iOS Toggle history Full support Samsung Internet .
Toggle history Full support WebView Android .
Toggle history Compatibility unknown please update this.
Deno Toggle history Activation by setting event.returnValue to any truthy value Deprecated Full support Chrome more Toggle history Full support Edge more Toggle history Full support Firefox Toggle history Full support Opera more Toggle history Full support Safari Toggle history Full support Chrome Android more Toggle history Full support Firefox for Android Toggle history Full support Opera Android more Toggle history No support Safari on iOS No Toggle history Full support Samsung Internet .
more Toggle history Full support WebView Android more Toggle history No support Deno No Toggle history Dialog displays a generic string not event handler return value Deprecated Full support Chrome Toggle history Full support Edge Toggle history Full support Firefox Toggle history Full support Opera Toggle history Full support Safari .
Toggle history Full support Chrome Android Toggle history Full support Firefox for Android Toggle history Full support Opera Android Toggle history Full support Safari on iOS .
Toggle history Full support Samsung Internet .
Toggle history Full support WebView Android Toggle history Compatibility unknown please update this.
Deno Toggle history Activation using event.preventDefault() Full support Chrome Toggle history Full support Edge more Toggle history Full support Firefox Toggle history Full support Opera Toggle history Full support Safari Toggle history Full support Chrome Android Toggle history Full support Firefox for Android Toggle history Full support Opera Android Toggle history No support Safari on iOS No Toggle history Full support Samsung Internet .
Toggle history Full support WebView Android Toggle history No support Deno No Toggle history Activation by returning a string Deprecated Full support Chrome Toggle history Full support Edge Toggle history Full support Firefox Toggle history Full support Opera Toggle history Full support Safari Toggle history Full support Chrome Android Toggle history Full support Firefox for Android Toggle history Full support Opera Android Toggle history No support Safari on iOS No Toggle history Full support Samsung Internet .
Toggle history Full support WebView Android .
Toggle history No support Deno No Toggle history blur Deprecated Full support Chrome Toggle history Full support Edge Toggle history Full support Firefox Toggle history Full support Opera .
Toggle history Full support Safari Toggle history Full support Chrome Android Toggle history Full support Firefox for Android Toggle history Full support Opera Android .
Toggle history Full support Safari on iOS Toggle history Full support Samsung Internet .
Toggle history Full support WebView Android .
Toggle history Full support Deno .
Toggle history blur event Full support Chrome Toggle history Full support Edge Toggle history Full support Firefox footnote Toggle history Full support Opera .
Toggle history Full support Safari .
Toggle history Full support Chrome Android Toggle history Full support Firefox for Android footnote Toggle history Full support Opera Android .
Toggle history Full support Safari on iOS Toggle history Full support Samsung Internet .
Toggle history Full support WebView Android Toggle history Compatibility unknown please update this.
Deno Toggle history cancelAnimationFrame Full support Chrome Toggle history Full support Edge Toggle history Full support Firefox more Toggle history Full support Opera Toggle history Full support Safari more Toggle history Full support Chrome Android Toggle history Full support Firefox for Android more Toggle history Full support Opera Android Toggle history Full support Safari on iOS more Toggle history Full support Samsung Internet .
Toggle history Full support WebView Android .
Toggle history Compatibility unknown please update this.
Deno Toggle history cancelIdleCallback Full support Chrome Toggle history Full support Edge Toggle history Full support Firefox Toggle history Full support Opera Toggle history No support Safari No footnote Toggle history Full support Chrome Android Toggle history Full support Firefox for Android Toggle history Full support Opera Android Toggle history No support Safari on iOS No footnote Toggle history Full support Samsung Internet .
Toggle history Full support WebView Android Toggle history Compatibility unknown please update this.
Deno Toggle history captureEvents Deprecated Full support Chrome Toggle history Full support Edge Toggle history Full support Firefox Toggle history Full support Opera .
Toggle history Full support Safari Toggle history Full support Chrome Android Toggle history Full support Firefox for Android Toggle history Full support Opera Android .
Toggle history Full support Safari on iOS Toggle history Full support Samsung Internet .
Toggle history Full support WebView Android .
Toggle history Compatibility unknown please update this.
Deno Toggle history clearImmediate Deprecated Nonstandard No support Chrome No Toggle history No support Edge Toggle history No support Firefox No Toggle history No support Opera No Toggle history No support Safari No Toggle history No support Chrome Android No Toggle history No support Firefox for Android No Toggle history No support Opera Android No Toggle history No support Safari on iOS No Toggle history No support Samsung Internet No Toggle history No support WebView Android No Toggle history Compatibility unknown please update this.
Deno Toggle history close Full support Chrome Toggle history Full support Edge footnote Toggle history Full support Firefox footnote Toggle history Full support Opera Toggle history Full support Safari Toggle history Full support Chrome Android Toggle history Full support Firefox for Android footnote Toggle history Full support Opera Android .
Toggle history Full support Safari on iOS Toggle history Full support Samsung Internet .
Toggle history Full support WebView Android .
Toggle history Full support Deno .
Toggle history closed Full support Chrome Toggle history Full support Edge Toggle history Full support Firefox Toggle history Full support Opera .
Toggle history Full support Safari Toggle history Full support Chrome Android Toggle history Full support Firefox for Android Toggle history Full support Opera Android .
Toggle history Full support Safari on iOS Toggle history Full support Samsung Internet .
Toggle history Full support WebView Android .
Toggle history Compatibility unknown please update this.
Deno Toggle history confirm Full support Chrome footnote Toggle history Full support Edge Toggle history Full support Firefox Toggle history Full support Opera footnote Toggle history Full support Safari Toggle history Full support Chrome Android footnote Toggle history Full support Firefox for Android Toggle history Full support Opera Android .
footnote Toggle history Full support Safari on iOS Toggle history Full support Samsung Internet .
footnote Toggle history Full support WebView Android footnote Toggle history Full support Deno .
Toggle history cookieStore Experimental Full support Chrome Toggle history Full support Edge Toggle history No support Firefox No footnote Toggle history Full support Opera Toggle history No support Safari No footnote Toggle history Full support Chrome Android Toggle history No support Firefox for Android No footnote Toggle history Full support Opera Android Toggle history No support Safari on iOS No footnote Toggle history Full support Samsung Internet .
Toggle history Full support WebView Android Toggle history Compatibility unknown please update this.
Deno Toggle history credentialless Experimental Full support Chrome Toggle history Full support Edge Toggle history No support Firefox No Toggle history Full support Opera Toggle history No support Safari No Toggle history Full support Chrome Android Toggle history No support Firefox for Android No Toggle history Full support Opera Android Toggle history No support Safari on iOS No Toggle history Full support Samsung Internet .
Toggle history Full support WebView Android Toggle history Compatibility unknown please update this.
Deno Toggle history customElements Full support Chrome Toggle history Full support Edge Toggle history Full support Firefox Toggle history Full support Opera Toggle history Full support Safari .
Toggle history Full support Chrome Android Toggle history Full support Firefox for Android Toggle history Full support Opera Android Toggle history Full support Safari on iOS .
Toggle history Full support Samsung Internet .
Toggle history Full support WebView Android Toggle history Compatibility unknown please update this.
Deno Toggle history devicePixelRatio Full support Chrome Toggle history Full support Edge Toggle history Full support Firefox Toggle history Full support Opera .
Toggle history Partial support Safari Toggle history Full support Chrome Android Toggle history Full support Firefox for Android Toggle history Full support Opera Android .
Toggle history Partial support Safari on iOS Toggle history Full support Samsung Internet .
Toggle history Full support WebView Android .
Toggle history Compatibility unknown please update this.
Deno Toggle history devicemotion event Full support Chrome Toggle history Full support Edge Toggle history Full support Firefox Toggle history Full support Opera Toggle history Full support Safari Toggle history Full support Chrome Android Toggle history Full support Firefox for Android Toggle history Full support Opera Android Toggle history Full support Safari on iOS .
Toggle history Full support Samsung Internet .
Toggle history Full support WebView Android ..
Toggle history Compatibility unknown please update this.
Deno Toggle history deviceorientation event Full support Chrome Toggle history Full support Edge Toggle history Full support Firefox more Toggle history Full support Opera Toggle history Full support Safari Toggle history Full support Chrome Android Toggle history Full support Firefox for Android more Toggle history Full support Opera Android Toggle history Full support Safari on iOS .
Toggle history Full support Samsung Internet .
Toggle history Full support WebView Android Toggle history Compatibility unknown please update this.
Deno Toggle history deviceorientationabsolute event Full support Chrome Toggle history Full support Edge Toggle history Full support Firefox Toggle history Full support Opera Toggle history No support Safari No Toggle history Full support Chrome Android Toggle history Full support Firefox for Android Toggle history Full support Opera Android Toggle history No support Safari on iOS No Toggle history Full support Samsung Internet .
Toggle history Full support WebView Android Toggle history Compatibility unknown please update this.
Deno Toggle history document Full support Chrome Toggle history Full support Edge Toggle history Full support Firefox Toggle history Full support Opera .
Toggle history Full support Safari Toggle history Full support Chrome Android Toggle history Full support Firefox for Android Toggle history Full support Opera Android .
Toggle history Full support Safari on iOS Toggle history Full support Samsung Internet .
Toggle history Full support WebView Android .
Toggle history Compatibility unknown please update this.
Deno Toggle history documentPictureInPicture Experimental Full support Chrome Toggle history Full support Edge Toggle history No support Firefox No Toggle history Full support Opera Toggle history No support Safari No Toggle history No support Chrome Android No Toggle history No support Firefox for Android No Toggle history No support Opera Android No Toggle history No support Safari on iOS No Toggle history No support Samsung Internet No Toggle history No support WebView Android No Toggle history Compatibility unknown please update this.
Deno Toggle history dump Nonstandard No support Chrome No Toggle history No support Edge No Toggle history Partial support Firefox .
more Toggle history No support Opera No Toggle history No support Safari No Toggle history No support Chrome Android No Toggle history Partial support Firefox for Android Toggle history No support Opera Android No Toggle history No support Safari on iOS No Toggle history No support Samsung Internet No Toggle history No support WebView Android No Toggle history Compatibility unknown please update this.
Deno Toggle history error event Full support Chrome Toggle history Full support Edge Toggle history Full support Firefox Toggle history Full support Opera Toggle history Full support Safari .
Toggle history Full support Chrome Android Toggle history Full support Firefox for Android Toggle history Full support Opera Android Toggle history Full support Safari on iOS Toggle history Full support Samsung Internet .
Toggle history Full support WebView Android Toggle history No support Deno No Toggle history event Deprecated Full support Chrome Toggle history Full support Edge Toggle history Full support Firefox Toggle history Full support Opera Toggle history Full support Safari .
Toggle history Full support Chrome Android Toggle history Full support Firefox for Android Toggle history Full support Opera Android .
Toggle history Full support Safari on iOS Toggle history Full support Samsung Internet .
Toggle history Full support WebView Android .
Toggle history Compatibility unknown please update this.
Deno Toggle history external Deprecated Full support Chrome Toggle history Full support Edge Toggle history Full support Firefox footnote more Toggle history Full support Opera Toggle history No support Safari No Toggle history Full support Chrome Android Toggle history Full support Firefox for Android footnote more Toggle history Full support Opera Android Toggle history No support Safari on iOS No Toggle history Full support Samsung Internet .
Toggle history Full support WebView Android ..
Toggle history Compatibility unknown please update this.
Deno Toggle history fence Experimental Full support Chrome Toggle history Full support Edge Toggle history No support Firefox No Toggle history Full support Opera Toggle history No support Safari No Toggle history Full support Chrome Android Toggle history No support Firefox for Android No Toggle history Full support Opera Android Toggle history No support Safari on iOS No Toggle history Full support Samsung Internet .
Toggle history Full support WebView Android Toggle history Compatibility unknown please update this.
Deno Toggle history find Nonstandard Full support Chrome Toggle history Full support Edge Toggle history Full support Firefox Toggle history Full support Opera Toggle history Full support Safari Toggle history Full support Chrome Android Toggle history Full support Firefox for Android Toggle history Full support Opera Android Toggle history Full support Safari on iOS Toggle history Full support Samsung Internet .
Toggle history Full support WebView Android .
Toggle history Compatibility unknown please update this.
Deno Toggle history focus Full support Chrome footnote Toggle history Full support Edge Toggle history Full support Firefox Toggle history Full support Opera .
Toggle history Full support Safari Toggle history Full support Chrome Android Toggle history Full support Firefox for Android Toggle history Full support Opera Android .
Toggle history Full support Safari on iOS Toggle history Full support Samsung Internet .
Toggle history Full support WebView Android .
Toggle history Compatibility unknown please update this.
Deno Toggle history focus event Full support Chrome Toggle history Full support Edge Toggle history Full support Firefox footnote Toggle history Full support Opera .
Toggle history Full support Safari .
Toggle history Full support Chrome Android Toggle history Full support Firefox for Android footnote Toggle history Full support Opera Android .
Toggle history Full support Safari on iOS Toggle history Full support Samsung Internet .
Toggle history Full support WebView Android Toggle history Compatibility unknown please update this.
Deno Toggle history frameElement Full support Chrome Toggle history Full support Edge Toggle history Full support Firefox Toggle history Full support Opera .
Toggle history Full support Safari Toggle history Full support Chrome Android Toggle history Full support Firefox for Android Toggle history Full support Opera Android .
Toggle history Full support Safari on iOS Toggle history Full support Samsung Internet .
Toggle history Full support WebView Android .
Toggle history Compatibility unknown please update this.
Deno Toggle history frames Full support Chrome Toggle history Full support Edge Toggle history Full support Firefox Toggle history Full support Opera .
Toggle history Full support Safari Toggle history Full support Chrome Android Toggle history Full support Firefox for Android Toggle history Full support Opera Android .
Toggle history Full support Safari on iOS Toggle history Full support Samsung Internet .
Toggle history Full support WebView Android .
Toggle history Compatibility unknown please update this.
Deno Toggle history fullScreen Nonstandard No support Chrome No Toggle history No support Edge No Toggle history Full support Firefox Toggle history No support Opera No Toggle history No support Safari No Toggle history No support Chrome Android No Toggle history Full support Firefox for Android Toggle history No support Opera Android No Toggle history No support Safari on iOS No Toggle history No support Samsung Internet No Toggle history No support WebView Android No Toggle history Compatibility unknown please update this.
Deno Toggle history gamepadconnected event Partial support Chrome Toggle history Partial support Edge Toggle history Full support Firefox more Toggle history Partial support Opera Toggle history Full support Safari more Toggle history Partial support Chrome Android Toggle history Full support Firefox for Android more Toggle history Partial support Opera Android Toggle history Full support Safari on iOS more Toggle history Partial support Samsung Internet .
Toggle history Partial support WebView Android Toggle history Compatibility unknown please update this.
Deno Toggle history gamepaddisconnected event Partial support Chrome Toggle history Partial support Edge Toggle history Full support Firefox more Toggle history Partial support Opera Toggle history Full support Safari more Toggle history Partial support Chrome Android Toggle history Full support Firefox for Android more Toggle history Partial support Opera Android Toggle history Full support Safari on iOS more Toggle history Partial support Samsung Internet .
Toggle history Partial support WebView Android Toggle history Compatibility unknown please update this.
Deno Toggle history getComputedStyle Full support Chrome Toggle history Full support Edge Toggle history Full support Firefox footnote Toggle history Full support Opera .
Toggle history Full support Safari Toggle history Full support Chrome Android Toggle history Full support Firefox for Android footnote Toggle history Full support Opera Android .
Toggle history Full support Safari on iOS Toggle history Full support Samsung Internet .
Toggle history Full support WebView Android .
Toggle history Compatibility unknown please update this.
Deno Toggle history Pseudoelement support Full support Chrome Toggle history Full support Edge Toggle history Full support Firefox .
Toggle history Full support Opera Toggle history Full support Safari .
Toggle history Full support Chrome Android Toggle history Full support Firefox for Android Toggle history Full support Opera Android Toggle history Full support Safari on iOS Toggle history Full support Samsung Internet .
Toggle history Full support WebView Android Toggle history Compatibility unknown please update this.
Deno Toggle history getDefaultComputedStyle Nonstandard No support Chrome No Toggle history No support Edge No Toggle history Full support Firefox Toggle history No support Opera No Toggle history No support Safari No Toggle history No support Chrome Android No Toggle history Full support Firefox for Android Toggle history No support Opera Android No Toggle history No support Safari on iOS No Toggle history No support Samsung Internet No Toggle history No support WebView Android No Toggle history Compatibility unknown please update this.
Deno Toggle history Pseudoelement support Nonstandard No support Chrome No Toggle history No support Edge No Toggle history Full support Firefox Toggle history No support Opera No Toggle history No support Safari No Toggle history No support Chrome Android No Toggle history Full support Firefox for Android Toggle history No support Opera Android No Toggle history No support Safari on iOS No Toggle history No support Samsung Internet No Toggle history No support WebView Android No Toggle history Compatibility unknown please update this.
Deno Toggle history getDigitalGoodsService Experimental No support Chrome No Toggle history No support Edge No Toggle history No support Firefox No Toggle history No support Opera No Toggle history No support Safari No Toggle history Full support Chrome Android Toggle history No support Firefox for Android No Toggle history Full support Opera Android Toggle history No support Safari on iOS No Toggle history Full support Samsung Internet .
Toggle history No support WebView Android No Toggle history Compatibility unknown please update this.
Deno Toggle history getScreenDetails Experimental Full support Chrome Toggle history Full support Edge Toggle history No support Firefox No Toggle history Full support Opera Toggle history No support Safari No Toggle history Full support Chrome Android Toggle history No support Firefox for Android No Toggle history Full support Opera Android Toggle history No support Safari on iOS No Toggle history Full support Samsung Internet .
Toggle history Full support WebView Android Toggle history Compatibility unknown please update this.
Deno Toggle history getSelection Full support Chrome Toggle history Full support Edge Toggle history Full support Firefox Toggle history Full support Opera Toggle history Full support Safari Toggle history Full support Chrome Android Toggle history Full support Firefox for Android Toggle history Full support Opera Android .
Toggle history Full support Safari on iOS Toggle history Full support Samsung Internet .
Toggle history Full support WebView Android .
Toggle history Compatibility unknown please update this.
Deno Toggle history hashchange event Full support Chrome more Toggle history Full support Edge Toggle history Full support Firefox .
Toggle history Full support Opera .
Toggle history Full support Safari Toggle history Full support Chrome Android Toggle history Full support Firefox for Android Toggle history Full support Opera Android Toggle history Full support Safari on iOS Toggle history Full support Samsung Internet .
Toggle history Full support WebView Android Toggle history Compatibility unknown please update this.
Deno Toggle history history Full support Chrome Toggle history Full support Edge Toggle history Full support Firefox Toggle history Full support Opera Toggle history Full support Safari Toggle history Full support Chrome Android Toggle history Full support Firefox for Android Toggle history Full support Opera Android .
Toggle history Full support Safari on iOS Toggle history Full support Samsung Internet .
Toggle history Full support WebView Android .
Toggle history Compatibility unknown please update this.
Deno Toggle history innerHeight Full support Chrome Toggle history Full support Edge Toggle history Full support Firefox footnote Toggle history Full support Opera Toggle history Full support Safari Toggle history Full support Chrome Android Toggle history Full support Firefox for Android footnote Toggle history Full support Opera Android .
Toggle history Full support Safari on iOS footnote Toggle history Full support Samsung Internet .
Toggle history Full support WebView Android .
Toggle history Compatibility unknown please update this.
Deno Toggle history innerWidth Full support Chrome Toggle history Full support Edge Toggle history Full support Firefox footnote Toggle history Full support Opera Toggle history Full support Safari Toggle history Full support Chrome Android Toggle history Full support Firefox for Android footnote Toggle history Full support Opera Android .
Toggle history Full support Safari on iOS footnote Toggle history Full support Samsung Internet .
Toggle history Full support WebView Android .
Toggle history Compatibility unknown please update this.
Deno Toggle history languagechange event Full support Chrome Toggle history Full support Edge Toggle history Full support Firefox Toggle history Full support Opera Toggle history Full support Safari .
Toggle history Full support Chrome Android Toggle history Full support Firefox for Android Toggle history Full support Opera Android Toggle history Full support Safari on iOS .
Toggle history Full support Samsung Internet .
Toggle history Full support WebView Android Toggle history Compatibility unknown please update this.
Deno Toggle history launchQueue Experimental Full support Chrome Toggle history Full support Edge Toggle history No support Firefox No Toggle history Full support Opera Toggle history No support Safari No Toggle history Full support Chrome Android Toggle history No support Firefox for Android No Toggle history Full support Opera Android Toggle history No support Safari on iOS No Toggle history Full support Samsung Internet .
Toggle history Full support WebView Android Toggle history Compatibility unknown please update this.
Deno Toggle history length Full support Chrome Toggle history Full support Edge Toggle history Full support Firefox Toggle history Full support Opera .
Toggle history Full support Safari Toggle history Full support Chrome Android Toggle history Full support Firefox for Android Toggle history Full support Opera Android .
Toggle history Full support Safari on iOS Toggle history Full support Samsung Internet .
Toggle history Full support WebView Android .
Toggle history Compatibility unknown please update this.
Deno Toggle history load event Full support Chrome Toggle history Full support Edge Toggle history Full support Firefox Toggle history Full support Opera Toggle history Full support Safari .
Toggle history Full support Chrome Android Toggle history Full support Firefox for Android Toggle history Full support Opera Android .
Toggle history Full support Safari on iOS Toggle history Full support Samsung Internet .
Toggle history Full support WebView Android .
Toggle history Full support Deno .
Toggle history localStorage Full support Chrome Toggle history Full support Edge Toggle history Full support Firefox .
Toggle history Full support Opera .
Toggle history Full support Safari Toggle history Full support Chrome Android Toggle history Full support Firefox for Android Toggle history Full support Opera Android Toggle history Full support Safari on iOS .
Toggle history Full support Samsung Internet .
Toggle history Full support WebView Android Toggle history Full support Deno .
footnote Toggle history location Full support Chrome Toggle history Full support Edge Toggle history Full support Firefox footnote Toggle history Full support Opera Toggle history Full support Safari Toggle history Full support Chrome Android Toggle history Full support Firefox for Android footnote Toggle history Full support Opera Android .
Toggle history Full support Safari on iOS Toggle history Full support Samsung Internet .
Toggle history Full support WebView Android .
Toggle history No support Deno .
disabled Toggle history locationbar Full support Chrome Toggle history Full support Edge Toggle history Full support Firefox Toggle history Full support Opera Toggle history Full support Safari Toggle history Full support Chrome Android Toggle history Full support Firefox for Android Toggle history Full support Opera Android Toggle history Full support Safari on iOS Toggle history Full support Samsung Internet .
Toggle history Full support WebView Android .
Toggle history Compatibility unknown please update this.
Deno Toggle history matchMedia Full support Chrome Toggle history Full support Edge Toggle history Full support Firefox Toggle history Full support Opera .
Toggle history Full support Safari .
Toggle history Full support Chrome Android Toggle history Full support Firefox for Android Toggle history Full support Opera Android .
Toggle history Full support Safari on iOS Toggle history Full support Samsung Internet .
Toggle history Full support WebView Android Toggle history Compatibility unknown please update this.
Deno Toggle history menubar Full support Chrome Toggle history Full support Edge Toggle history Full support Firefox Toggle history Full support Opera Toggle history Full support Safari Toggle history Full support Chrome Android Toggle history Full support Firefox for Android Toggle history Full support Opera Android Toggle history Full support Safari on iOS Toggle history Full support Samsung Internet .
Toggle history Full support WebView Android .
Toggle history Compatibility unknown please update this.
Deno Toggle history message event Full support Chrome Toggle history Full support Edge Toggle history Full support Firefox Toggle history Full support Opera Toggle history Full support Safari Toggle history Full support Chrome Android Toggle history Full support Firefox for Android Toggle history Full support Opera Android Toggle history Full support Safari on iOS Toggle history Full support Samsung Internet .
Toggle history Full support WebView Android Toggle history Compatibility unknown please update this.
Deno Toggle history messageerror event Full support Chrome Toggle history Full support Edge Toggle history Full support Firefox Toggle history Full support Opera Toggle history Full support Safari .
footnote Toggle history Full support Chrome Android Toggle history Full support Firefox for Android Toggle history Full support Opera Android Toggle history Full support Safari on iOS .
footnote Toggle history Full support Samsung Internet .
Toggle history Full support WebView Android Toggle history Compatibility unknown please update this.
Deno Toggle history moveBy Full support Chrome Toggle history Full support Edge Toggle history Full support Firefox Toggle history Full support Opera .
Toggle history Full support Safari Toggle history Full support Chrome Android Toggle history Full support Firefox for Android Toggle history Full support Opera Android .
Toggle history Full support Safari on iOS Toggle history Full support Samsung Internet .
Toggle history Full support WebView Android .
Toggle history Compatibility unknown please update this.
Deno Toggle history moveTo Full support Chrome Toggle history Full support Edge Toggle history Full support Firefox Toggle history Full support Opera .
Toggle history Full support Safari Toggle history Full support Chrome Android Toggle history Full support Firefox for Android Toggle history Full support Opera Android .
Toggle history Full support Safari on iOS Toggle history Full support Samsung Internet .
Toggle history Full support WebView Android .
Toggle history Compatibility unknown please update this.
Deno Toggle history Moved relative to the Multiscreen origin Full support Chrome footnote Toggle history Full support Edge footnote Toggle history Full support Firefox footnote Toggle history Full support Opera footnote Toggle history Partial support Safari Toggle history Full support Chrome Android footnote Toggle history Full support Firefox for Android footnote Toggle history Full support Opera Android footnote Toggle history Partial support Safari on iOS Toggle history Full support Samsung Internet .
footnote Toggle history Full support WebView Android footnote Toggle history Compatibility unknown please update this.
Deno Toggle history mozInnerScreenX Nonstandard No support Chrome No Toggle history No support Edge No Toggle history Full support Firefox .
Toggle history No support Opera No Toggle history No support Safari No Toggle history No support Chrome Android No Toggle history Full support Firefox for Android Toggle history No support Opera Android No Toggle history No support Safari on iOS No Toggle history No support Samsung Internet No Toggle history No support WebView Android No Toggle history Compatibility unknown please update this.
Deno Toggle history mozInnerScreenY Nonstandard No support Chrome No Toggle history No support Edge No Toggle history Full support Firefox .
Toggle history No support Opera No Toggle history No support Safari No Toggle history No support Chrome Android No Toggle history Full support Firefox for Android Toggle history No support Opera Android No Toggle history No support Safari on iOS No Toggle history No support Samsung Internet No Toggle history No support WebView Android No Toggle history Compatibility unknown please update this.
Deno Toggle history name Full support Chrome Toggle history Full support Edge Toggle history Full support Firefox footnote Toggle history Full support Opera .
Toggle history Full support Safari Toggle history Full support Chrome Android Toggle history Full support Firefox for Android footnote Toggle history Full support Opera Android .
Toggle history Full support Safari on iOS Toggle history Full support Samsung Internet .
Toggle history Full support WebView Android .
Toggle history Full support Deno .
Toggle history navigation Experimental Full support Chrome Toggle history Full support Edge Toggle history No support Firefox No footnote Toggle history No support Opera No Toggle history No support Safari No Toggle history Full support Chrome Android Toggle history No support Firefox for Android No footnote Toggle history Full support Opera Android Toggle history No support Safari on iOS No Toggle history Full support Samsung Internet .
Toggle history Full support WebView Android Toggle history Compatibility unknown please update this.
Deno Toggle history navigator Full support Chrome more Toggle history Full support Edge more Toggle history Full support Firefox more Toggle history Full support Opera more Toggle history Full support Safari more Toggle history Full support Chrome Android more Toggle history Full support Firefox for Android more Toggle history Full support Opera Android .
more Toggle history Full support Safari on iOS more Toggle history Full support Samsung Internet .
more Toggle history Full support WebView Android .
more Toggle history Full support Deno .
Toggle history offline event Full support Chrome Toggle history Full support Edge Toggle history Full support Firefox Toggle history Full support Opera Toggle history Full support Safari Toggle history Full support Chrome Android Toggle history Full support Firefox for Android Toggle history Full support Opera Android Toggle history Full support Safari on iOS Toggle history Full support Samsung Internet .
Toggle history Full support WebView Android Toggle history Compatibility unknown please update this.
Deno Toggle history online event Full support Chrome Toggle history Full support Edge Toggle history Full support Firefox Toggle history Full support Opera Toggle history Full support Safari Toggle history Full support Chrome Android Toggle history Full support Firefox for Android Toggle history Full support Opera Android Toggle history Full support Safari on iOS Toggle history Full support Samsung Internet .
Toggle history Full support WebView Android Toggle history Compatibility unknown please update this.
Deno Toggle history open Full support Chrome Toggle history Full support Edge Toggle history Full support Firefox Toggle history Full support Opera Toggle history Full support Safari Toggle history Full support Chrome Android Toggle history Full support Firefox for Android Toggle history Full support Opera Android .
Toggle history Full support Safari on iOS Toggle history Full support Samsung Internet .
Toggle history Full support WebView Android .
Toggle history Compatibility unknown please update this.
Deno Toggle history features parameter accepts attributionsrc value Experimental Full support Chrome Toggle history Full support Edge Toggle history No support Firefox No Toggle history Full support Opera Toggle history No support Safari No Toggle history Full support Chrome Android Toggle history No support Firefox for Android No Toggle history Full support Opera Android Toggle history No support Safari on iOS No Toggle history Full support Samsung Internet .
Toggle history Full support WebView Android Toggle history Compatibility unknown please update this.
Deno Toggle history features parameter accepts popup value Full support Chrome Toggle history Full support Edge Toggle history Full support Firefox Toggle history No support Opera No Toggle history No support Safari No Toggle history Full support Chrome Android Toggle history Full support Firefox for Android Toggle history No support Opera Android No Toggle history No support Safari on iOS No Toggle history Full support Samsung Internet .
Toggle history Full support WebView Android Toggle history Compatibility unknown please update this.
Deno Toggle history One Window.open() call per event Full support Chrome Toggle history Full support Edge Toggle history Full support Firefox Toggle history Full support Opera .
Toggle history Full support Safari Toggle history Full support Chrome Android Toggle history Full support Firefox for Android Toggle history Full support Opera Android .
Toggle history Full support Safari on iOS Toggle history Full support Samsung Internet .
Toggle history Full support WebView Android .
Toggle history Compatibility unknown please update this.
Deno Toggle history Opened relative to the Multiscreen origin Full support Chrome footnote Toggle history Full support Edge footnote Toggle history Full support Firefox Toggle history Full support Opera footnote Toggle history Partial support Safari Toggle history Full support Chrome Android footnote Toggle history Full support Firefox for Android Toggle history Full support Opera Android footnote Toggle history Partial support Safari on iOS Toggle history Full support Samsung Internet .
footnote Toggle history Full support WebView Android footnote Toggle history Compatibility unknown please update this.
Deno Toggle history opener Full support Chrome Toggle history Full support Edge Toggle history Full support Firefox Toggle history Full support Opera Toggle history Full support Safari Toggle history Full support Chrome Android Toggle history Full support Firefox for Android Toggle history Full support Opera Android .
Toggle history Full support Safari on iOS Toggle history Full support Samsung Internet .
Toggle history Full support WebView Android .
Toggle history Compatibility unknown please update this.
Deno Toggle history orientation Deprecated No support Chrome No Toggle history No support Edge No Toggle history No support Firefox No Toggle history No support Opera No Toggle history No support Safari No Toggle history Full support Chrome Android Toggle history Full support Firefox for Android Toggle history Full support Opera Android Toggle history Full support Safari on iOS Toggle history Full support Samsung Internet .
Toggle history Full support WebView Android Toggle history Compatibility unknown please update this.
Deno Toggle history orientationchange event Deprecated No support Chrome No Toggle history No support Edge No Toggle history No support Firefox No Toggle history No support Opera No Toggle history No support Safari No Toggle history Full support Chrome Android Toggle history Full support Firefox for Android Toggle history Full support Opera Android Toggle history Full support Safari on iOS Toggle history Full support Samsung Internet .
Toggle history Full support WebView Android Toggle history Compatibility unknown please update this.
Deno Toggle history originAgentCluster Experimental Full support Chrome Toggle history Full support Edge Toggle history No support Firefox No Toggle history Full support Opera Toggle history No support Safari No Toggle history Full support Chrome Android Toggle history No support Firefox for Android No Toggle history Full support Opera Android Toggle history No support Safari on iOS No Toggle history Full support Samsung Internet .
Toggle history Full support WebView Android Toggle history Compatibility unknown please update this.
Deno Toggle history outerHeight Full support Chrome Toggle history Full support Edge Toggle history Full support Firefox Toggle history Full support Opera Toggle history Full support Safari Toggle history Full support Chrome Android Toggle history Full support Firefox for Android Toggle history Full support Opera Android .
Toggle history Full support Safari on iOS Toggle history Full support Samsung Internet .
Toggle history Full support WebView Android .
Toggle history Compatibility unknown please update this.
Deno Toggle history outerWidth Full support Chrome Toggle history Full support Edge Toggle history Full support Firefox Toggle history Full support Opera Toggle history Full support Safari Toggle history Full support Chrome Android Toggle history Full support Firefox for Android Toggle history Full support Opera Android .
Toggle history Full support Safari on iOS Toggle history Full support Samsung Internet .
Toggle history Full support WebView Android .
Toggle history Compatibility unknown please update this.
Deno Toggle history pagehide event Full support Chrome Toggle history Full support Edge Toggle history Full support Firefox Toggle history Full support Opera Toggle history Full support Safari Toggle history Full support Chrome Android Toggle history Full support Firefox for Android Toggle history Full support Opera Android Toggle history Full support Safari on iOS .
Toggle history Full support Samsung Internet .
Toggle history Full support WebView Android Toggle history Compatibility unknown please update this.
Deno Toggle history pagereveal event Experimental Full support Chrome Toggle history Full support Edge Toggle history No support Firefox No Toggle history Full support Opera Toggle history No support Safari No Toggle history Full support Chrome Android Toggle history No support Firefox for Android No Toggle history No support Opera Android No Toggle history No support Safari on iOS No Toggle history No support Samsung Internet No Toggle history Full support WebView Android Toggle history Compatibility unknown please update this.
Deno Toggle history pageshow event Full support Chrome Toggle history Full support Edge Toggle history Full support Firefox Toggle history Full support Opera Toggle history Full support Safari Toggle history Full support Chrome Android Toggle history Full support Firefox for Android Toggle history Full support Opera Android Toggle history Full support Safari on iOS .
Toggle history Full support Samsung Internet .
Toggle history Full support WebView Android Toggle history Compatibility unknown please update this.
Deno Toggle history pageswap event Experimental Full support Chrome Toggle history Full support Edge Toggle history No support Firefox No Toggle history Preview browser support Opera Toggle history No support Safari No Toggle history Full support Chrome Android Toggle history No support Firefox for Android No Toggle history No support Opera Android No Toggle history No support Safari on iOS No Toggle history No support Samsung Internet No Toggle history Full support WebView Android Toggle history Compatibility unknown please update this.
Deno Toggle history parent Full support Chrome Toggle history Full support Edge Toggle history Full support Firefox Toggle history Full support Opera Toggle history Full support Safari .
Toggle history Full support Chrome Android Toggle history Full support Firefox for Android Toggle history Full support Opera Android .
Toggle history Full support Safari on iOS Toggle history Full support Samsung Internet .
Toggle history Full support WebView Android .
Toggle history Compatibility unknown please update this.
Deno Toggle history personalbar Full support Chrome Toggle history Full support Edge Toggle history Full support Firefox Toggle history Full support Opera .
Toggle history Full support Safari Toggle history Full support Chrome Android Toggle history Full support Firefox for Android Toggle history Full support Opera Android .
Toggle history Full support Safari on iOS Toggle history Full support Samsung Internet .
Toggle history Full support WebView Android .
Toggle history Compatibility unknown please update this.
Deno Toggle history popstate event Full support Chrome footnote Toggle history Full support Edge Toggle history Full support Firefox Toggle history Full support Opera .
Toggle history Full support Safari footnote Toggle history Full support Chrome Android footnote Toggle history Full support Firefox for Android Toggle history Full support Opera Android .
Toggle history Full support Safari on iOS .
footnote Toggle history Full support Samsung Internet .
footnote Toggle history Full support WebView Android footnote Toggle history Compatibility unknown please update this.
Deno Toggle history postMessage Full support Chrome Toggle history Full support Edge Toggle history Full support Firefox footnote Toggle history Full support Opera .
Toggle history Full support Safari Toggle history Full support Chrome Android Toggle history Full support Firefox for Android footnote Toggle history Full support Opera Android .
Toggle history Full support Safari on iOS .
Toggle history Full support Samsung Internet .
Toggle history Full support WebView Android Toggle history Compatibility unknown please update this.
Deno Toggle history transfer parameter Full support Chrome Toggle history Full support Edge Toggle history Full support Firefox Toggle history Full support Opera Toggle history Full support Safari Toggle history Full support Chrome Android Toggle history Full support Firefox for Android Toggle history Full support Opera Android Toggle history Full support Safari on iOS Toggle history Full support Samsung Internet .
Toggle history Full support WebView Android Toggle history Compatibility unknown please update this.
Deno Toggle history print Full support Chrome footnote Toggle history Full support Edge Toggle history Full support Firefox Toggle history Full support Opera footnote Toggle history Full support Safari .
Toggle history Full support Chrome Android footnote Toggle history Full support Firefox for Android Toggle history Full support Opera Android .
footnote Toggle history Full support Safari on iOS Toggle history Full support Samsung Internet .
footnote Toggle history Full support WebView Android .
footnote Toggle history Compatibility unknown please update this.
Deno Toggle history prompt Full support Chrome footnote Toggle history Full support Edge Toggle history Full support Firefox footnote Toggle history Full support Opera footnote Toggle history Full support Safari Toggle history Full support Chrome Android footnote Toggle history Full support Firefox for Android footnote Toggle history Full support Opera Android .
footnote Toggle history Full support Safari on iOS Toggle history Full support Samsung Internet .
footnote Toggle history Full support WebView Android .
footnote Toggle history Full support Deno .
Toggle history queryLocalFonts Experimental Full support Chrome Toggle history Full support Edge Toggle history No support Firefox No Toggle history No support Opera No Toggle history No support Safari No Toggle history No support Chrome Android No Toggle history No support Firefox for Android No Toggle history No support Opera Android No Toggle history No support Safari on iOS No Toggle history No support Samsung Internet No Toggle history No support WebView Android No Toggle history Compatibility unknown please update this.
Deno Toggle history rejectionhandled event Full support Chrome Toggle history Full support Edge Toggle history Full support Firefox Toggle history Full support Opera Toggle history Full support Safari Toggle history Full support Chrome Android Toggle history Full support Firefox for Android Toggle history Full support Opera Android Toggle history Full support Safari on iOS .
Toggle history Full support Samsung Internet .
Toggle history Full support WebView Android Toggle history Full support Deno .
Toggle history releaseEvents Deprecated Full support Chrome Toggle history Full support Edge Toggle history Full support Firefox Toggle history Full support Opera .
Toggle history Full support Safari Toggle history Full support Chrome Android Toggle history Full support Firefox for Android Toggle history Full support Opera Android .
Toggle history Full support Safari on iOS Toggle history Full support Samsung Internet .
Toggle history Full support WebView Android .
Toggle history Compatibility unknown please update this.
Deno Toggle history requestAnimationFrame Full support Chrome more Toggle history Full support Edge footnote Toggle history Full support Firefox footnote more Toggle history Full support Opera more Toggle history Full support Safari more Toggle history Full support Chrome Android more Toggle history Full support Firefox for Android more Toggle history Full support Opera Android more Toggle history Full support Safari on iOS more Toggle history Full support Samsung Internet .
more Toggle history Full support WebView Android .
more Toggle history Compatibility unknown please update this.
Deno Toggle history requestFileSystem Deprecated Nonstandard Full support Chrome prefix Toggle history Full support Edge prefix Toggle history No support Firefox No Toggle history No support Opera No Toggle history No support Safari No Toggle history Full support Chrome Android prefix Toggle history No support Firefox for Android No Toggle history No support Opera Android No Toggle history No support Safari on iOS No Toggle history Full support Samsung Internet .
prefix Toggle history Full support WebView Android prefix Toggle history Compatibility unknown please update this.
Deno Toggle history requestIdleCallback Full support Chrome Toggle history Full support Edge Toggle history Full support Firefox Toggle history Full support Opera Toggle history No support Safari No footnote Toggle history Full support Chrome Android Toggle history Full support Firefox for Android Toggle history Full support Opera Android Toggle history No support Safari on iOS No footnote Toggle history Full support Samsung Internet .
Toggle history Full support WebView Android Toggle history Compatibility unknown please update this.
Deno Toggle history resizeBy Full support Chrome Toggle history Full support Edge Toggle history Full support Firefox footnote Toggle history Full support Opera .
Toggle history Full support Safari Toggle history Full support Chrome Android Toggle history Full support Firefox for Android Toggle history Full support Opera Android .
Toggle history Full support Safari on iOS Toggle history Full support Samsung Internet .
Toggle history Full support WebView Android .
Toggle history Compatibility unknown please update this.
Deno Toggle history resizeTo Full support Chrome Toggle history Full support Edge Toggle history Full support Firefox footnote Toggle history Full support Opera .
Toggle history Full support Safari Toggle history Full support Chrome Android Toggle history Full support Firefox for Android Toggle history Full support Opera Android .
Toggle history Full support Safari on iOS Toggle history Full support Samsung Internet .
Toggle history Full support WebView Android .
Toggle history Compatibility unknown please update this.
Deno Toggle history resize event Full support Chrome footnote Toggle history Full support Edge footnote Toggle history Full support Firefox footnote Toggle history Full support Opera footnote Toggle history Full support Safari .
Toggle history Full support Chrome Android footnote Toggle history Full support Firefox for Android footnote Toggle history Full support Opera Android .
footnote Toggle history Full support Safari on iOS Toggle history Full support Samsung Internet .
footnote Toggle history Full support WebView Android footnote Toggle history Compatibility unknown please update this.
Deno Toggle history resolveLocalFileSystemURL Experimental Nonstandard Full support Chrome prefix Toggle history Full support Edge prefix Toggle history No support Firefox No Toggle history No support Opera No Toggle history No support Safari No Toggle history Full support Chrome Android prefix Toggle history No support Firefox for Android No Toggle history No support Opera Android No Toggle history No support Safari on iOS No Toggle history Full support Samsung Internet .
prefix Toggle history Full support WebView Android .
prefix Toggle history Compatibility unknown please update this.
Deno Toggle history screen Full support Chrome Toggle history Full support Edge Toggle history Full support Firefox Toggle history Full support Opera .
Toggle history Full support Safari Toggle history Full support Chrome Android Toggle history Full support Firefox for Android Toggle history Full support Opera Android .
Toggle history Full support Safari on iOS Toggle history Full support Samsung Internet .
Toggle history Full support WebView Android .
Toggle history Compatibility unknown please update this.
Deno Toggle history screenLeft Full support Chrome Toggle history Full support Edge Toggle history Full support Firefox Toggle history Full support Opera .
Toggle history Full support Safari Toggle history Full support Chrome Android Toggle history Full support Firefox for Android Toggle history Full support Opera Android .
Toggle history Full support Safari on iOS Toggle history Full support Samsung Internet .
Toggle history Full support WebView Android .
Toggle history Compatibility unknown please update this.
Deno Toggle history Relative to the Multiscreen origin Full support Chrome Toggle history Full support Edge Toggle history Full support Firefox Toggle history Full support Opera Toggle history Partial support Safari Toggle history Full support Chrome Android Toggle history Full support Firefox for Android Toggle history Full support Opera Android Toggle history Partial support Safari on iOS Toggle history Full support Samsung Internet .
Toggle history Full support WebView Android Toggle history Compatibility unknown please update this.
Deno Toggle history screenTop Full support Chrome Toggle history Full support Edge Toggle history Full support Firefox Toggle history Full support Opera .
Toggle history Full support Safari Toggle history Full support Chrome Android Toggle history Full support Firefox for Android Toggle history Full support Opera Android .
Toggle history Full support Safari on iOS Toggle history Full support Samsung Internet .
Toggle history Full support WebView Android .
Toggle history Compatibility unknown please update this.
Deno Toggle history Relative to the Multiscreen origin Full support Chrome Toggle history Full support Edge Toggle history Full support Firefox Toggle history Full support Opera Toggle history Partial support Safari Toggle history Full support Chrome Android Toggle history Full support Firefox for Android Toggle history Full support Opera Android Toggle history Partial support Safari on iOS Toggle history Full support Samsung Internet .
Toggle history Full support WebView Android Toggle history Compatibility unknown please update this.
Deno Toggle history screenX Full support Chrome Toggle history Full support Edge Toggle history Full support Firefox footnote Toggle history Full support Opera .
Toggle history Full support Safari Toggle history Full support Chrome Android Toggle history Full support Firefox for Android footnote Toggle history Full support Opera Android .
Toggle history Full support Safari on iOS Toggle history Full support Samsung Internet .
Toggle history Full support WebView Android .
Toggle history Compatibility unknown please update this.
Deno Toggle history Relative to the Multiscreen origin Full support Chrome Toggle history Full support Edge Toggle history Full support Firefox Toggle history Full support Opera Toggle history Partial support Safari Toggle history Full support Chrome Android Toggle history Full support Firefox for Android Toggle history Full support Opera Android Toggle history Partial support Safari on iOS Toggle history Full support Samsung Internet .
Toggle history Full support WebView Android Toggle history Compatibility unknown please update this.
Deno Toggle history screenY Full support Chrome Toggle history Full support Edge Toggle history Full support Firefox footnote Toggle history Full support Opera .
Toggle history Full support Safari Toggle history Full support Chrome Android Toggle history Full support Firefox for Android footnote Toggle history Full support Opera Android .
Toggle history Full support Safari on iOS Toggle history Full support Samsung Internet .
Toggle history Full support WebView Android .
Toggle history Compatibility unknown please update this.
Deno Toggle history Relative to the Multiscreen origin Full support Chrome Toggle history Full support Edge Toggle history Full support Firefox Toggle history Full support Opera Toggle history Partial support Safari Toggle history Full support Chrome Android Toggle history Full support Firefox for Android Toggle history Full support Opera Android Toggle history Partial support Safari on iOS Toggle history Full support Samsung Internet .
Toggle history Full support WebView Android Toggle history Compatibility unknown please update this.
Deno Toggle history scroll Full support Chrome Toggle history Full support Edge Toggle history Full support Firefox Toggle history Full support Opera Toggle history Full support Safari Toggle history Full support Chrome Android Toggle history Full support Firefox for Android Toggle history Full support Opera Android .
Toggle history Full support Safari on iOS Toggle history Full support Samsung Internet .
Toggle history Full support WebView Android .
Toggle history Compatibility unknown please update this.
Deno Toggle history options.behavior parameter Full support Chrome Toggle history Full support Edge Toggle history Full support Firefox Toggle history Full support Opera Toggle history Full support Safari footnote Toggle history Full support Chrome Android Toggle history Full support Firefox for Android Toggle history Full support Opera Android Toggle history Full support Safari on iOS footnote Toggle history Full support Samsung Internet .
Toggle history Full support WebView Android Toggle history Compatibility unknown please update this.
Deno Toggle history options.left parameter Full support Chrome Toggle history Full support Edge Toggle history Full support Firefox Toggle history Full support Opera Toggle history Full support Safari .
Toggle history Full support Chrome Android Toggle history Full support Firefox for Android Toggle history Full support Opera Android Toggle history Full support Safari on iOS .
Toggle history Full support Samsung Internet .
Toggle history Full support WebView Android Toggle history Compatibility unknown please update this.
Deno Toggle history options.top parameter Full support Chrome Toggle history Full support Edge Toggle history Full support Firefox Toggle history Full support Opera Toggle history Full support Safari .
Toggle history Full support Chrome Android Toggle history Full support Firefox for Android Toggle history Full support Opera Android Toggle history Full support Safari on iOS .
Toggle history Full support Samsung Internet .
Toggle history Full support WebView Android Toggle history Compatibility unknown please update this.
Deno Toggle history scrollBy Full support Chrome Toggle history Full support Edge Toggle history Full support Firefox Toggle history Full support Opera Toggle history Full support Safari Toggle history Full support Chrome Android Toggle history Full support Firefox for Android Toggle history Full support Opera Android .
Toggle history Full support Safari on iOS Toggle history Full support Samsung Internet .
Toggle history Full support WebView Android .
Toggle history Compatibility unknown please update this.
Deno Toggle history options.behavior parameter Full support Chrome Toggle history Full support Edge Toggle history Full support Firefox Toggle history Full support Opera Toggle history Full support Safari footnote Toggle history Full support Chrome Android Toggle history Full support Firefox for Android Toggle history Full support Opera Android Toggle history Full support Safari on iOS footnote Toggle history Full support Samsung Internet .
Toggle history Full support WebView Android Toggle history Compatibility unknown please update this.
Deno Toggle history options.left parameter Full support Chrome Toggle history Full support Edge Toggle history Full support Firefox Toggle history Full support Opera Toggle history Full support Safari .
Toggle history Full support Chrome Android Toggle history Full support Firefox for Android Toggle history Full support Opera Android Toggle history Full support Safari on iOS .
Toggle history Full support Samsung Internet .
Toggle history Full support WebView Android Toggle history Compatibility unknown please update this.
Deno Toggle history options.top parameter Full support Chrome Toggle history Full support Edge Toggle history Full support Firefox Toggle history Full support Opera Toggle history Full support Safari .
Toggle history Full support Chrome Android Toggle history Full support Firefox for Android Toggle history Full support Opera Android Toggle history Full support Safari on iOS .
Toggle history Full support Samsung Internet .
Toggle history Full support WebView Android Toggle history Compatibility unknown please update this.
Deno Toggle history scrollByLines Nonstandard No support Chrome No Toggle history No support Edge No Toggle history Full support Firefox Toggle history No support Opera No Toggle history No support Safari No Toggle history No support Chrome Android No Toggle history Full support Firefox for Android Toggle history No support Opera Android No Toggle history No support Safari on iOS No Toggle history No support Samsung Internet No Toggle history No support WebView Android No Toggle history Compatibility unknown please update this.
Deno Toggle history scrollByPages Nonstandard No support Chrome No Toggle history No support Edge No Toggle history Full support Firefox Toggle history No support Opera No Toggle history No support Safari No Toggle history No support Chrome Android No Toggle history Full support Firefox for Android Toggle history No support Opera Android No Toggle history No support Safari on iOS No Toggle history No support Samsung Internet No Toggle history No support WebView Android No Toggle history Compatibility unknown please update this.
Deno Toggle history scrollMaxX Nonstandard No support Chrome No Toggle history No support Edge No Toggle history Full support Firefox Toggle history No support Opera No Toggle history No support Safari No Toggle history No support Chrome Android No Toggle history Full support Firefox for Android Toggle history No support Opera Android No Toggle history No support Safari on iOS No Toggle history No support Samsung Internet No Toggle history No support WebView Android No Toggle history Compatibility unknown please update this.
Deno Toggle history scrollMaxY Nonstandard No support Chrome No Toggle history No support Edge No Toggle history Full support Firefox Toggle history No support Opera No Toggle history No support Safari No Toggle history No support Chrome Android No Toggle history Full support Firefox for Android Toggle history No support Opera Android No Toggle history No support Safari on iOS No Toggle history No support Samsung Internet No Toggle history No support WebView Android No Toggle history Compatibility unknown please update this.
Deno Toggle history scrollTo Full support Chrome Toggle history Full support Edge Toggle history Full support Firefox Toggle history Full support Opera Toggle history Full support Safari Toggle history Full support Chrome Android Toggle history Full support Firefox for Android Toggle history Full support Opera Android .
Toggle history Full support Safari on iOS Toggle history Full support Samsung Internet .
Toggle history Full support WebView Android .
Toggle history Compatibility unknown please update this.
Deno Toggle history options.behavior parameter Full support Chrome Toggle history Full support Edge Toggle history Full support Firefox Toggle history Full support Opera Toggle history Full support Safari footnote Toggle history Full support Chrome Android Toggle history Full support Firefox for Android Toggle history Full support Opera Android Toggle history Full support Safari on iOS footnote Toggle history Full support Samsung Internet .
Toggle history Full support WebView Android Toggle history Compatibility unknown please update this.
Deno Toggle history options.left parameter Full support Chrome Toggle history Full support Edge Toggle history Full support Firefox Toggle history Full support Opera Toggle history Full support Safari .
Toggle history Full support Chrome Android Toggle history Full support Firefox for Android Toggle history Full support Opera Android Toggle history Full support Safari on iOS .
Toggle history Full support Samsung Internet .
Toggle history Full support WebView Android Toggle history Compatibility unknown please update this.
Deno Toggle history options.top parameter Full support Chrome Toggle history Full support Edge Toggle history Full support Firefox Toggle history Full support Opera Toggle history Full support Safari .
Toggle history Full support Chrome Android Toggle history Full support Firefox for Android Toggle history Full support Opera Android Toggle history Full support Safari on iOS .
Toggle history Full support Samsung Internet .
Toggle history Full support WebView Android Toggle history Compatibility unknown please update this.
Deno Toggle history scrollX Full support Chrome more Toggle history Full support Edge more Toggle history Full support Firefox more Toggle history Full support Opera .
more Toggle history Full support Safari more Toggle history Full support Chrome Android more Toggle history Full support Firefox for Android more Toggle history Full support Opera Android .
more Toggle history Full support Safari on iOS more Toggle history Full support Samsung Internet .
more Toggle history Full support WebView Android .
more Toggle history Compatibility unknown please update this.
Deno Toggle history Subpixel precision Full support Chrome Toggle history Full support Edge Toggle history Full support Firefox Toggle history Full support Opera Toggle history No support Safari No Toggle history Full support Chrome Android Toggle history Full support Firefox for Android Toggle history Full support Opera Android Toggle history No support Safari on iOS No Toggle history Full support Samsung Internet .
Toggle history Full support WebView Android Toggle history Compatibility unknown please update this.
Deno Toggle history scrollY Full support Chrome more Toggle history Full support Edge more Toggle history Full support Firefox more Toggle history Full support Opera .
more Toggle history Full support Safari more Toggle history Full support Chrome Android more Toggle history Full support Firefox for Android more Toggle history Full support Opera Android .
more Toggle history Full support Safari on iOS more Toggle history Full support Samsung Internet .
more Toggle history Full support WebView Android .
more Toggle history Compatibility unknown please update this.
Deno Toggle history Subpixel precision Full support Chrome Toggle history Full support Edge Toggle history Full support Firefox Toggle history Full support Opera Toggle history No support Safari No Toggle history Full support Chrome Android Toggle history Full support Firefox for Android Toggle history Full support Opera Android Toggle history No support Safari on iOS No Toggle history Full support Samsung Internet .
Toggle history Full support WebView Android Toggle history Compatibility unknown please update this.
Deno Toggle history scrollbars Full support Chrome Toggle history Full support Edge Toggle history Full support Firefox Toggle history Full support Opera .
Toggle history Full support Safari Toggle history Full support Chrome Android Toggle history Full support Firefox for Android Toggle history Full support Opera Android .
Toggle history Full support Safari on iOS Toggle history Full support Samsung Internet .
Toggle history Full support WebView Android .
Toggle history Compatibility unknown please update this.
Deno Toggle history self Full support Chrome Toggle history Full support Edge Toggle history Full support Firefox Toggle history Full support Opera .
Toggle history Full support Safari Toggle history Full support Chrome Android Toggle history Full support Firefox for Android Toggle history Full support Opera Android .
Toggle history Full support Safari on iOS Toggle history Full support Samsung Internet .
Toggle history Full support WebView Android .
Toggle history Compatibility unknown please update this.
Deno Toggle history sessionStorage Full support Chrome Toggle history Full support Edge Toggle history Full support Firefox Toggle history Full support Opera .
Toggle history Full support Safari Toggle history Full support Chrome Android Toggle history Full support Firefox for Android Toggle history Full support Opera Android Toggle history Full support Safari on iOS .
Toggle history Full support Samsung Internet .
Toggle history Full support WebView Android Toggle history Full support Deno .
Toggle history setImmediate Deprecated Nonstandard No support Chrome No Toggle history No support Edge Toggle history No support Firefox No Toggle history No support Opera No Toggle history No support Safari No Toggle history No support Chrome Android No Toggle history No support Firefox for Android No Toggle history No support Opera Android No Toggle history No support Safari on iOS No Toggle history No support Samsung Internet No Toggle history No support WebView Android No Toggle history Compatibility unknown please update this.
Deno Toggle history setResizable Deprecated Nonstandard No support Chrome No Toggle history No support Edge No Toggle history Full support Firefox Toggle history No support Opera No Toggle history No support Safari No Toggle history No support Chrome Android No Toggle history Full support Firefox for Android Toggle history No support Opera Android No Toggle history No support Safari on iOS No Toggle history No support Samsung Internet No Toggle history No support WebView Android No Toggle history Compatibility unknown please update this.
Deno Toggle history sharedStorage Experimental Full support Chrome Toggle history Full support Edge Toggle history No support Firefox No Toggle history Full support Opera Toggle history No support Safari No Toggle history Full support Chrome Android Toggle history No support Firefox for Android No Toggle history Full support Opera Android Toggle history No support Safari on iOS No Toggle history Full support Samsung Internet .
Toggle history Full support WebView Android Toggle history Compatibility unknown please update this.
Deno Toggle history showDirectoryPicker Experimental Full support Chrome Toggle history Full support Edge Toggle history No support Firefox No Toggle history Full support Opera Toggle history No support Safari No Toggle history No support Chrome Android No Toggle history No support Firefox for Android No Toggle history No support Opera Android No Toggle history No support Safari on iOS No Toggle history No support Samsung Internet No Toggle history No support WebView Android No Toggle history Compatibility unknown please update this.
Deno Toggle history showModalDialog Deprecated Nonstandard No support Chrome Toggle history No support Edge No Toggle history No support Firefox Toggle history No support Opera No Toggle history No support Safari ..
Toggle history No support Chrome Android No Toggle history No support Firefox for Android No Toggle history No support Opera Android No Toggle history No support Safari on iOS No Toggle history No support Samsung Internet No Toggle history No support WebView Android No Toggle history Compatibility unknown please update this.
Deno Toggle history showOpenFilePicker Experimental Full support Chrome Toggle history Full support Edge Toggle history No support Firefox No Toggle history Full support Opera Toggle history No support Safari No Toggle history No support Chrome Android No Toggle history No support Firefox for Android No Toggle history No support Opera Android No Toggle history No support Safari on iOS No Toggle history No support Samsung Internet No Toggle history No support WebView Android No Toggle history Compatibility unknown please update this.
Deno Toggle history showSaveFilePicker Experimental Full support Chrome Toggle history Full support Edge Toggle history No support Firefox No Toggle history Full support Opera Toggle history No support Safari No Toggle history No support Chrome Android No Toggle history No support Firefox for Android No Toggle history No support Opera Android No Toggle history No support Safari on iOS No Toggle history No support Samsung Internet No Toggle history No support WebView Android No Toggle history Compatibility unknown please update this.
Deno Toggle history sizeToContent Nonstandard No support Chrome No Toggle history No support Edge No Toggle history No support Firefox Toggle history No support Opera No Toggle history No support Safari No Toggle history No support Chrome Android No Toggle history No support Firefox for Android Toggle history No support Opera Android No Toggle history No support Safari on iOS No Toggle history No support Samsung Internet No Toggle history No support WebView Android No Toggle history Compatibility unknown please update this.
Deno Toggle history speechSynthesis Full support Chrome Toggle history Full support Edge Toggle history Full support Firefox Toggle history Full support Opera Toggle history Full support Safari Toggle history Full support Chrome Android Toggle history Full support Firefox for Android Toggle history No support Opera Android No Toggle history Full support Safari on iOS Toggle history Full support Samsung Internet .
Toggle history No support WebView Android No footnote Toggle history Compatibility unknown please update this.
Deno Toggle history status Deprecated Full support Chrome Toggle history Full support Edge Toggle history Full support Firefox Toggle history Full support Opera .
Toggle history Full support Safari Toggle history Full support Chrome Android Toggle history Full support Firefox for Android Toggle history Full support Opera Android .
Toggle history Full support Safari on iOS Toggle history Full support Samsung Internet .
Toggle history Full support WebView Android .
Toggle history Compatibility unknown please update this.
Deno Toggle history statusbar Full support Chrome Toggle history Full support Edge Toggle history Full support Firefox Toggle history Full support Opera Toggle history Full support Safari Toggle history Full support Chrome Android Toggle history Full support Firefox for Android Toggle history Full support Opera Android Toggle history Full support Safari on iOS Toggle history Full support Samsung Internet .
Toggle history Full support WebView Android .
Toggle history Compatibility unknown please update this.
Deno Toggle history stop Full support Chrome Toggle history Full support Edge Toggle history Full support Firefox Toggle history Full support Opera .
Toggle history Full support Safari Toggle history Full support Chrome Android Toggle history Full support Firefox for Android Toggle history Full support Opera Android .
Toggle history Full support Safari on iOS Toggle history Full support Samsung Internet .
Toggle history Full support WebView Android .
Toggle history Compatibility unknown please update this.
Deno Toggle history storage event Full support Chrome Toggle history Full support Edge Toggle history Full support Firefox Toggle history Full support Opera Toggle history Full support Safari Toggle history Full support Chrome Android Toggle history Full support Firefox for Android Toggle history Full support Opera Android Toggle history Full support Safari on iOS Toggle history Full support Samsung Internet .
Toggle history Full support WebView Android Toggle history Compatibility unknown please update this.
Deno Toggle history styleMedia Deprecated Nonstandard Full support Chrome Toggle history Full support Edge Toggle history No support Firefox No Toggle history Full support Opera Toggle history Full support Safari Toggle history Full support Chrome Android Toggle history No support Firefox for Android No Toggle history Full support Opera Android Toggle history Full support Safari on iOS Toggle history Full support Samsung Internet .
Toggle history Full support WebView Android Toggle history Compatibility unknown please update this.
Deno Toggle history toolbar Full support Chrome Toggle history Full support Edge Toggle history Full support Firefox Toggle history Full support Opera Toggle history Full support Safari Toggle history Full support Chrome Android Toggle history Full support Firefox for Android Toggle history Full support Opera Android Toggle history Full support Safari on iOS Toggle history Full support Samsung Internet .
Toggle history Full support WebView Android .
Toggle history Compatibility unknown please update this.
Deno Toggle history top Full support Chrome Toggle history Full support Edge Toggle history Full support Firefox footnote Toggle history Full support Opera .
Toggle history Full support Safari Toggle history Full support Chrome Android Toggle history Full support Firefox for Android Toggle history Full support Opera Android .
Toggle history Full support Safari on iOS Toggle history Full support Samsung Internet .
Toggle history Full support WebView Android .
Toggle history Compatibility unknown please update this.
Deno Toggle history unhandledrejection event Full support Chrome Toggle history Full support Edge Toggle history Full support Firefox footnote Toggle history Full support Opera Toggle history Full support Safari Toggle history Full support Chrome Android Toggle history Full support Firefox for Android footnote Toggle history Full support Opera Android Toggle history Full support Safari on iOS .
Toggle history Full support Samsung Internet .
Toggle history Full support WebView Android Toggle history Full support Deno .
Toggle history unload event Deprecated Full support Chrome Toggle history Full support Edge Toggle history Full support Firefox Toggle history Full support Opera Toggle history Full support Safari Toggle history Full support Chrome Android Toggle history Full support Firefox for Android Toggle history Full support Opera Android .
Toggle history Full support Safari on iOS Toggle history Full support Samsung Internet .
Toggle history Full support WebView Android .
Toggle history Full support Deno .
Toggle history updateCommands Nonstandard No support Chrome No Toggle history No support Edge No Toggle history Full support Firefox Toggle history No support Opera No Toggle history No support Safari No Toggle history No support Chrome Android No Toggle history Full support Firefox for Android Toggle history No support Opera Android No Toggle history No support Safari on iOS No Toggle history No support Samsung Internet No Toggle history No support WebView Android No Toggle history Compatibility unknown please update this.
Deno Toggle history visualViewport Full support Chrome Toggle history Full support Edge Toggle history Full support Firefox Toggle history Full support Opera Toggle history Full support Safari Toggle history Full support Chrome Android Toggle history Full support Firefox for Android Toggle history Full support Opera Android Toggle history Full support Safari on iOS Toggle history Full support Samsung Internet .
Toggle history Full support WebView Android Toggle history Compatibility unknown please update this.
Deno Toggle history vrdisplayactivate event Deprecated Nonstandard No support Chrome No Toggle history No support Edge Toggle history No support Firefox disabled more Toggle history No support Opera No Toggle history No support Safari No Toggle history No support Chrome Android No Toggle history Full support Firefox for Android Toggle history No support Opera Android No Toggle history No support Safari on iOS No Toggle history No support Samsung Internet No Toggle history No support WebView Android No Toggle history Compatibility unknown please update this.
Deno Toggle history vrdisplayconnect event Deprecated Nonstandard No support Chrome No Toggle history No support Edge Toggle history No support Firefox disabled more Toggle history No support Opera No Toggle history No support Safari No Toggle history No support Chrome Android No Toggle history Full support Firefox for Android Toggle history No support Opera Android No Toggle history No support Safari on iOS No Toggle history No support Samsung Internet ..
Toggle history No support WebView Android No Toggle history Compatibility unknown please update this.
Deno Toggle history vrdisplaydeactivate event Deprecated Nonstandard No support Chrome No Toggle history No support Edge Toggle history No support Firefox disabled more Toggle history No support Opera No Toggle history No support Safari No Toggle history No support Chrome Android No Toggle history Full support Firefox for Android Toggle history No support Opera Android No Toggle history No support Safari on iOS No Toggle history No support Samsung Internet No Toggle history No support WebView Android No Toggle history Compatibility unknown please update this.
Deno Toggle history vrdisplaydisconnect event Deprecated Nonstandard No support Chrome No Toggle history No support Edge Toggle history No support Firefox disabled more Toggle history No support Opera No Toggle history No support Safari No Toggle history Full support Chrome Android footnote Toggle history Full support Firefox for Android Toggle history No support Opera Android No Toggle history No support Safari on iOS No Toggle history No support Samsung Internet ..
Toggle history No support WebView Android No Toggle history Compatibility unknown please update this.
Deno Toggle history vrdisplaypresentchange event Deprecated Nonstandard No support Chrome No Toggle history No support Edge Toggle history No support Firefox disabled more Toggle history No support Opera No Toggle history No support Safari No Toggle history No support Chrome Android Toggle history Full support Firefox for Android Toggle history No support Opera Android No Toggle history No support Safari on iOS No Toggle history No support Samsung Internet ..
Toggle history No support WebView Android No Toggle history Compatibility unknown please update this.
Deno Toggle history webkitConvertPointFromNodeToPage Deprecated Nonstandard No support Chrome Toggle history No support Edge Toggle history No support Firefox No Toggle history No support Opera Toggle history Full support Safari Toggle history No support Chrome Android Toggle history No support Firefox for Android No Toggle history No support Opera Android Toggle history Full support Safari on iOS Toggle history No support Samsung Internet ..
Toggle history No support WebView Android Toggle history Compatibility unknown please update this.
Deno Toggle history webkitConvertPointFromPageToNode Deprecated Nonstandard No support Chrome Toggle history No support Edge Toggle history No support Firefox No Toggle history No support Opera Toggle history Full support Safari Toggle history No support Chrome Android Toggle history No support Firefox for Android No Toggle history No support Opera Android Toggle history Full support Safari on iOS Toggle history No support Samsung Internet ..
Toggle history No support WebView Android Toggle history Compatibility unknown please update this.
Deno Toggle history window Full support Chrome Toggle history Full support Edge Toggle history Full support Firefox Toggle history Full support Opera .
Toggle history Full support Safari Toggle history Full support Chrome Android Toggle history Full support Firefox for Android Toggle history Full support Opera Android .
Toggle history Full support Safari on iOS Toggle history Full support Samsung Internet .
Toggle history Full support WebView Android .
Toggle history Compatibility unknown please update this.
Deno Toggle history Legend Tip you can clicktap on a cell for more information.
Full support Full support Partial support Partial support In development.
Supported in a prerelease version.
In development.
Supported in a prerelease version.
No support No support Experimental.
Expect behavior to change in the future.
Nonstandard.
Check crossbrowser support before using.
Deprecated.
Not for use in new websites.
See implementation notes.
User must explicitly enable this feature.
Uses a nonstandard name.
Requires a vendor prefix or different name for use.
Has more compatibility info.
The compatibility table on this page is generated from structured data.
If youd like to contribute to the data please check out httpsgithub.commdnbrowsercompatdata and send us a pull request.

`;
},"2024-05-10 13:00:00","2024-05-17 13:00:00","Appendix V","window-ref"],
["Web Api References",function() {

return  `Web Api Mozilla

` + showLink("https://developer.mozilla.org/en-US/docs/Web/API", "Web API")  +  `

Around 60 types/categories/major objective
Around 2314 minor interfaces/API

` + `
A
Audio Output Devices API Experimental
B
Background Fetch API Experimental
Background Sync
Background Tasks
Badging API
Barcode Detection API Experimental
Battery API
Beacon
Bluetooth API Experimental
Broadcast Channel API
C
CSS Counter Styles
CSS Custom Highlight API
CSS Font Loading API
CSS Painting API Experimental
CSS Properties and Values API
CSS Typed Object Model API
CSSOM
Canvas API
Channel Messaging API
Clipboard API
Compression Streams API
Console API
Contact Picker API Experimental
Content Index API Experimental
Cookie Store API
Credential Management API
D
DOM
Device Memory API
Device Orientation Events
Document Picture-in-Picture API Experimental
E
EditContext API Experimental
Encoding API
Encrypted Media Extensions
EyeDropper API Experimental
F
FedCM API Experimental
Fenced Frame API Experimental
Fetch API
File API
File System API
File and Directory Entries API
Force Touch Events Non-standard
Fullscreen API
G
Gamepad API
Geolocation API
Geometry Interfaces
H
HTML DOM
HTML Drag and Drop API
HTML Sanitizer API Experimental Deprecated
History API
Houdini API
I
Idle Detection API Experimental
Image Capture API Experimental
IndexedDB
Ink API Experimental
Input Device Capabilities API Experimental
Insertable Streams for MediaStreamTrack API
Intersection Observer API
K
Keyboard API Experimental
L
Launch Handler API Experimental
Local Font Access API Experimental
M
Media Capabilities API
Media Capture and Streams
Media Session API
Media Source Extensions Experimental
MediaStream Recording
N
Navigation API Experimental
Network Information API
P
Page Visibility API
Payment Handler API Experimental
Payment Request API
Performance API
Periodic Background Sync Experimental
Permissions API
Picture-in-Picture API
Pointer Events
Pointer Lock API
Popover API
Presentation API Experimental
Prioritized Task Scheduling API
Push API
R
Remote Playback API
Reporting API Experimental
Resize Observer API
S
SVG
Screen Capture API
Screen Orientation API
Screen Wake Lock API
Selection API
Sensor API
Server Sent Events
Service Workers API
Shared Storage API Experimental
Speculation Rules API Experimental
Storage
Storage Access API
Streams
T
Topics API Experimental Non-standard
Touch Events
Trusted Types API
U
UI Events
URL API
URL Pattern API Experimental
User-Agent Client Hints API Experimental
V
Vibration API
View Transitions API Experimental
VirtualKeyboard API Experimental
Visual Viewport
W
Web Animations
Web Audio API
Web Authentication API
Web Components
Web Crypto API
Web Locks API
Web MIDI API
Web NFC API Experimental
Web Notifications
Web Serial API Experimental
Web Share API
Web Speech API
Web Storage API
Web Workers API
WebCodecs API
WebGL
WebGPU API Experimental
WebHID API Experimental
WebOTP API
WebRTC
WebSockets API
WebTransport API
WebUSB API Experimental
WebVR API Non-standard Deprecated
WebVTT
WebXR Device API Experimental
Window Controls Overlay API Experimental
Window Management API Experimental
X
XMLHttpRequest API
Interfaces
This is a list of all the interfaces (that is, types of objects) that are available.

A
AbortController
AbortSignal
AbsoluteOrientationSensor
AbstractRange
Accelerometer Experimental
AesCbcParams
AesCtrParams
AesGcmParams
AesKeyGenParams
AmbientLightSensor Experimental
AnalyserNode
ANGLE_instanced_arrays
Animation
AnimationEffect
AnimationEvent
AnimationPlaybackEvent
AnimationTimeline
Attr
AudioBuffer
AudioBufferSourceNode
AudioContext
AudioData Experimental
AudioDecoder Experimental
AudioDestinationNode
AudioEncoder Experimental
AudioListener
AudioNode
AudioParam
AudioParamDescriptor
AudioParamMap
AudioProcessingEvent Deprecated
AudioScheduledSourceNode
AudioSinkInfo Experimental
AudioTrack
AudioTrackList
AudioWorklet
AudioWorkletGlobalScope
AudioWorkletNode
AudioWorkletProcessor
AuthenticatorAssertionResponse
AuthenticatorAttestationResponse
AuthenticatorResponse
B
BackgroundFetchEvent Experimental
BackgroundFetchManager Experimental
BackgroundFetchRecord Experimental
BackgroundFetchRegistration Experimental
BackgroundFetchUpdateUIEvent Experimental
BarcodeDetector Experimental
BarProp
BaseAudioContext
BatteryManager
BeforeInstallPromptEvent Experimental Non-standard
BeforeUnloadEvent
BiquadFilterNode
Blob
BlobEvent
Bluetooth Experimental
BluetoothCharacteristicProperties Experimental
BluetoothDevice Experimental
BluetoothRemoteGATTCharacteristic Experimental
BluetoothRemoteGATTDescriptor Experimental
BluetoothRemoteGATTServer Experimental
BluetoothRemoteGATTService Experimental
BluetoothUUID
BroadcastChannel
ByteLengthQueuingStrategy
C
Cache
CacheStorage
CanMakePaymentEvent Experimental
CanvasCaptureMediaStreamTrack
CanvasGradient
CanvasPattern
CanvasRenderingContext2D
CaptureController Experimental
CaretPosition Experimental
CDATASection
ChannelMergerNode
ChannelSplitterNode
CharacterBoundsUpdateEvent Experimental
CharacterData
Client
Clients
Clipboard
ClipboardEvent
ClipboardItem
CloseEvent
Comment
CompositionEvent
CompressionStream
console
ConstantSourceNode
ContactAddress Experimental
ContactsManager Experimental
ContentIndex Experimental
ContentIndexEvent Experimental
ContentVisibilityAutoStateChangeEvent
ConvolverNode
CookieChangeEvent
CookieStore
CookieStoreManager
CountQueuingStrategy
Credential
CredentialsContainer
Crypto
CryptoKey
CryptoKeyPair
CSPViolationReportBody
CSS
CSSAnimation
CSSConditionRule
CSSContainerRule
CSSCounterStyleRule
CSSFontFaceRule
CSSFontFeatureValuesRule
CSSFontPaletteValuesRule
CSSGroupingRule
CSSImageValue
CSSImportRule
CSSKeyframeRule
CSSKeyframesRule
CSSKeywordValue
CSSLayerBlockRule
CSSLayerStatementRule
CSSMathInvert
CSSMathMax
CSSMathMin
CSSMathNegate
CSSMathProduct
CSSMathSum
CSSMathValue
CSSMatrixComponent
CSSMediaRule
CSSNamespaceRule
CSSNumericArray
CSSNumericValue
CSSPageRule
CSSPerspective
CSSPositionValue Non-standard Deprecated
CSSPrimitiveValue Deprecated
CSSPropertyRule
CSSPseudoElement Experimental
CSSRotate
CSSRule
CSSRuleList
CSSScale
CSSScopeRule
CSSSkew
CSSSkewX
CSSSkewY
CSSStartingStyleRule
CSSStyleDeclaration
CSSStyleRule
CSSStyleSheet
CSSStyleValue
CSSSupportsRule
CSSTransformComponent
CSSTransformValue
CSSTransition
CSSTranslate
CSSUnitValue
CSSUnparsedValue
CSSValue Deprecated
CSSValueList Deprecated
CSSVariableReferenceValue
CustomElementRegistry
CustomEvent
CustomStateSet
D
DataTransfer
DataTransferItem
DataTransferItemList
DecompressionStream
DedicatedWorkerGlobalScope
DelayNode
DeprecationReportBody Experimental
DeviceMotionEvent
DeviceMotionEventAcceleration
DeviceMotionEventRotationRate
DeviceOrientationEvent
DirectoryEntrySync Non-standard Deprecated
DirectoryReaderSync Non-standard Deprecated
Document
DocumentFragment
DocumentPictureInPicture Experimental
DocumentPictureInPictureEvent Experimental
DocumentTimeline
DocumentType
DOMError Deprecated
DOMException
DOMHighResTimeStamp
DOMImplementation
DOMMatrix (WebKitCSSMatrix)
DOMMatrixReadOnly
DOMParser
DOMPoint
DOMPointReadOnly
DOMQuad
DOMRect
DOMRectReadOnly
DOMStringList
DOMStringMap
DOMTokenList
DragEvent
DynamicsCompressorNode
E
EcdhKeyDeriveParams
EcdsaParams
EcKeyGenParams
EcKeyImportParams
EditContext Experimental
Element
ElementInternals
EncodedAudioChunk Experimental
EncodedVideoChunk
ErrorEvent
Event
EventCounts
EventSource
EventTarget
ExtendableCookieChangeEvent
ExtendableEvent
ExtendableMessageEvent
EyeDropper Experimental
F
FeaturePolicy Experimental
FederatedCredential Experimental
Fence Experimental
FencedFrameConfig Experimental
FetchEvent
File
FileEntrySync Non-standard Deprecated
FileList
FileReader
FileReaderSync
FileSystem
FileSystemDirectoryEntry
FileSystemDirectoryHandle
FileSystemDirectoryReader
FileSystemEntry
FileSystemFileEntry
FileSystemFileHandle
FileSystemHandle
FileSystemSync Non-standard Deprecated
FileSystemSyncAccessHandle
FileSystemWritableFileStream
FocusEvent
FontData Experimental
FontFace
FontFaceSet
FontFaceSetLoadEvent
FormData
FormDataEvent
FragmentDirective Experimental
G
GainNode
Gamepad
GamepadButton
GamepadEvent
GamepadHapticActuator
GamepadPose Experimental
Geolocation
GeolocationCoordinates
GeolocationPosition
GeolocationPositionError
GestureEvent Non-standard
GPU Experimental
GPUAdapter Experimental
GPUAdapterInfo Experimental
GPUBindGroup Experimental
GPUBindGroupLayout Experimental
GPUBuffer Experimental
GPUCanvasContext Experimental
GPUCommandBuffer Experimental
GPUCommandEncoder Experimental
GPUCompilationInfo Experimental
GPUCompilationMessage Experimental
GPUComputePassEncoder Experimental
GPUComputePipeline Experimental
GPUDevice Experimental
GPUDeviceLostInfo Experimental
GPUError Experimental
GPUExternalTexture Experimental
GPUInternalError Experimental
GPUOutOfMemoryError Experimental
GPUPipelineError Experimental
GPUPipelineLayout Experimental
GPUQuerySet Experimental
GPUQueue Experimental
GPURenderBundle Experimental
GPURenderBundleEncoder Experimental
GPURenderPassEncoder Experimental
GPURenderPipeline Experimental
GPUSampler Experimental
GPUShaderModule Experimental
GPUSupportedFeatures Experimental
GPUSupportedLimits Experimental
GPUTexture Experimental
GPUTextureView Experimental
GPUUncapturedErrorEvent Experimental
GPUValidationError Experimental
GravitySensor
Gyroscope
H
HashChangeEvent
Headers
HID Experimental
HIDConnectionEvent Experimental
HIDDevice Experimental
HIDInputReportEvent Experimental
Highlight
HighlightRegistry
History
HkdfParams
HmacImportParams
HmacKeyGenParams
HMDVRDevice Non-standard Deprecated
HTMLAllCollection
HTMLAnchorElement
HTMLAreaElement
HTMLAudioElement
HTMLBaseElement
HTMLBodyElement
HTMLBRElement
HTMLButtonElement
HTMLCanvasElement
HTMLCollection
HTMLDataElement
HTMLDataListElement
HTMLDetailsElement
HTMLDialogElement
HTMLDivElement
HTMLDListElement
HTMLDocument
HTMLElement
HTMLEmbedElement
HTMLFencedFrameElement Experimental
HTMLFieldSetElement
HTMLFontElement Deprecated
HTMLFormControlsCollection
HTMLFormElement
HTMLFrameSetElement Deprecated
HTMLHeadElement
HTMLHeadingElement
HTMLHRElement
HTMLHtmlElement
HTMLIFrameElement
HTMLImageElement
HTMLInputElement
HTMLLabelElement
HTMLLegendElement
HTMLLIElement
HTMLLinkElement
HTMLMapElement
HTMLMarqueeElement Deprecated
HTMLMediaElement
HTMLMenuElement
HTMLMenuItemElement Non-standard Deprecated
HTMLMetaElement
HTMLMeterElement
HTMLModElement
HTMLObjectElement
HTMLOListElement
HTMLOptGroupElement
HTMLOptionElement
HTMLOptionsCollection
HTMLOutputElement
HTMLParagraphElement
HTMLParamElement Deprecated
HTMLPictureElement
HTMLPreElement
HTMLProgressElement
HTMLQuoteElement
HTMLScriptElement
HTMLSelectElement
HTMLSlotElement
HTMLSourceElement
HTMLSpanElement
HTMLStyleElement
HTMLTableCaptionElement
HTMLTableCellElement
HTMLTableColElement
HTMLTableElement
HTMLTableRowElement
HTMLTableSectionElement
HTMLTemplateElement
HTMLTextAreaElement
HTMLTimeElement
HTMLTitleElement
HTMLTrackElement
HTMLUListElement
HTMLUnknownElement
HTMLVideoElement
I
IDBCursor
IDBCursorWithValue
IDBDatabase
IDBFactory
IDBIndex
IDBKeyRange
IDBObjectStore
IDBOpenDBRequest
IDBRequest
IDBTransaction
IDBVersionChangeEvent
IdentityCredential Experimental
IdentityProvider Experimental
IdleDeadline
IdleDetector Experimental
IIRFilterNode
ImageBitmap
ImageBitmapRenderingContext
ImageCapture Experimental
ImageData
ImageDecoder Experimental
ImageTrack Experimental
ImageTrackList Experimental
Ink Experimental
InkPresenter Experimental
InputDeviceCapabilities Experimental
InputDeviceInfo
InputEvent
InstallEvent Non-standard Deprecated
IntersectionObserver
IntersectionObserverEntry
InterventionReportBody Experimental
K
Keyboard Experimental
KeyboardEvent
KeyboardLayoutMap Experimental
KeyframeEffect
L
LargestContentfulPaint
LaunchParams Experimental
LaunchQueue Experimental
LayoutShift Experimental
LayoutShiftAttribution Experimental
LinearAccelerationSensor
Location
Lock
LockManager
M
Magnetometer Experimental
MathMLElement
MediaCapabilities
MediaDeviceInfo
MediaDevices
MediaElementAudioSourceNode
MediaEncryptedEvent
MediaError
MediaKeyMessageEvent
MediaKeys
MediaKeySession
MediaKeyStatusMap
MediaKeySystemAccess
MediaList
MediaMetadata
MediaQueryList
MediaQueryListEvent
MediaRecorder
MediaRecorderErrorEvent Non-standard Deprecated
MediaSession
MediaSource
MediaSourceHandle Experimental
MediaStream
MediaStreamAudioDestinationNode
MediaStreamAudioSourceNode
MediaStreamEvent Non-standard Deprecated
MediaStreamTrack
MediaStreamTrackAudioSourceNode
MediaStreamTrackEvent
MediaStreamTrackGenerator Experimental Non-standard
MediaStreamTrackProcessor Experimental
MediaTrackConstraints
MediaTrackSettings
MediaTrackSupportedConstraints
MerchantValidationEvent Deprecated
MessageChannel
MessageEvent
MessagePort
Metadata Experimental Non-standard
MIDIAccess
MIDIConnectionEvent
MIDIInput
MIDIInputMap
MIDIMessageEvent
MIDIOutput
MIDIOutputMap
MIDIPort
MimeType Deprecated
MimeTypeArray Deprecated
MouseEvent
MouseScrollEvent Non-standard Deprecated
MutationEvent Deprecated
MutationObserver
MutationRecord
N
NamedNodeMap
NavigateEvent Experimental
Navigation Experimental
NavigationCurrentEntryChangeEvent Experimental
NavigationDestination Experimental
NavigationHistoryEntry Experimental
NavigationPreloadManager
NavigationTransition Experimental
Navigator
NavigatorLogin Experimental
NavigatorUAData Experimental
NDEFMessage Experimental
NDEFReader Experimental
NDEFReadingEvent Experimental
NDEFRecord Experimental
NetworkInformation
Node
NodeIterator
NodeList
Notification
NotificationEvent
NotRestoredReasonDetails Experimental
NotRestoredReasons Experimental
O
OES_draw_buffers_indexed
OfflineAudioCompletionEvent
OfflineAudioContext
OffscreenCanvas
OffscreenCanvasRenderingContext2D
OrientationSensor
OscillatorNode
OTPCredential Experimental
OverconstrainedError
P
PageTransitionEvent
PaintWorkletGlobalScope Experimental
PannerNode
PasswordCredential Experimental
Path2D
PaymentAddress Non-standard Deprecated
PaymentManager Experimental
PaymentMethodChangeEvent
PaymentRequest
PaymentRequestEvent Experimental
PaymentRequestUpdateEvent
PaymentResponse
Pbkdf2Params
Performance
PerformanceElementTiming Experimental
PerformanceEntry
PerformanceEventTiming
PerformanceLongAnimationFrameTiming Experimental
PerformanceLongTaskTiming Experimental
PerformanceMark
PerformanceMeasure
PerformanceNavigation Deprecated
PerformanceNavigationTiming
PerformanceObserver
PerformanceObserverEntryList
PerformancePaintTiming
PerformanceResourceTiming
PerformanceScriptTiming Experimental
PerformanceServerTiming
PerformanceTiming Deprecated
PeriodicSyncEvent Experimental
PeriodicSyncManager Experimental
PeriodicWave
Permissions
PermissionStatus
PictureInPictureEvent
PictureInPictureWindow
Plugin Deprecated
PluginArray Deprecated
Point Non-standard Deprecated
PointerEvent
PopStateEvent
PositionSensorVRDevice Non-standard Deprecated
Presentation Experimental
PresentationAvailability Experimental
PresentationConnection Experimental
PresentationConnectionAvailableEvent Experimental
PresentationConnectionCloseEvent Experimental
PresentationConnectionList Experimental
PresentationReceiver Experimental
PresentationRequest Experimental
ProcessingInstruction
ProgressEvent
PromiseRejectionEvent
PublicKeyCredential
PushEvent
PushManager
PushMessageData
PushSubscription
PushSubscriptionOptions
R
RadioNodeList
Range
ReadableByteStreamController
ReadableStream
ReadableStreamBYOBReader
ReadableStreamBYOBRequest
ReadableStreamDefaultController
ReadableStreamDefaultReader
RelativeOrientationSensor
RemotePlayback
Report
ReportBody
ReportingObserver
Request
ResizeObserver
ResizeObserverEntry
ResizeObserverSize
Response
RsaHashedImportParams
RsaHashedKeyGenParams
RsaOaepParams
RsaPssParams
RTCAudioSourceStats
RTCCertificate
RTCCertificateStats
RTCCodecStats
RTCDataChannel
RTCDataChannelEvent
RTCDtlsTransport
RTCDTMFSender
RTCDTMFToneChangeEvent
RTCEncodedAudioFrame
RTCEncodedVideoFrame
RTCError
RTCErrorEvent
RTCIceCandidate
RTCIceCandidatePair
RTCIceCandidatePairStats
RTCIceCandidateStats
RTCIceParameters
RTCIceTransport
RTCIdentityAssertion Experimental
RTCInboundRtpStreamStats
RTCOutboundRtpStreamStats
RTCPeerConnection
RTCPeerConnectionIceErrorEvent
RTCPeerConnectionIceEvent
RTCPeerConnectionStats
RTCRemoteOutboundRtpStreamStats
RTCRtpCodecParameters
RTCRtpReceiver
RTCRtpScriptTransform
RTCRtpScriptTransformer
RTCRtpSender
RTCRtpStreamStats
RTCRtpTransceiver
RTCSctpTransport
RTCSessionDescription
RTCStatsReport
RTCTrackEvent
RTCTransformEvent
RTCTransportStats
RTCVideoSourceStats
S
Sanitizer Experimental
Scheduler
Scheduling Experimental
Screen
ScreenDetailed Experimental
ScreenDetails Experimental
ScreenOrientation
ScriptProcessorNode Deprecated
ScrollTimeline Experimental
SecurePaymentConfirmationRequest
SecurityPolicyViolationEvent
Selection
Sensor
SensorErrorEvent
Serial Experimental
SerialPort Experimental
ServiceWorker
ServiceWorkerContainer
ServiceWorkerGlobalScope
ServiceWorkerRegistration
ShadowRoot
SharedStorage Experimental
SharedStorageOperation Experimental
SharedStorageRunOperation Experimental
SharedStorageSelectURLOperation Experimental
SharedStorageWorklet Experimental
SharedStorageWorkletGlobalScope Experimental
SharedWorker
SharedWorkerGlobalScope
SourceBuffer
SourceBufferList
SpeechGrammar Experimental
SpeechGrammarList Experimental
SpeechRecognition
SpeechRecognitionAlternative
SpeechRecognitionErrorEvent
SpeechRecognitionEvent
SpeechRecognitionResult
SpeechRecognitionResultList
SpeechSynthesis
SpeechSynthesisErrorEvent
SpeechSynthesisEvent
SpeechSynthesisUtterance
SpeechSynthesisVoice
StaticRange
StereoPannerNode
Storage
StorageEvent
StorageManager
StylePropertyMap
StylePropertyMapReadOnly
StyleSheet
StyleSheetList
SubmitEvent
SubtleCrypto
SVGAElement
SVGAngle
SVGAnimateColorElement Deprecated
SVGAnimatedAngle
SVGAnimatedBoolean
SVGAnimatedEnumeration
SVGAnimatedInteger
SVGAnimatedLength
SVGAnimatedLengthList
SVGAnimatedNumber
SVGAnimatedNumberList
SVGAnimatedPreserveAspectRatio
SVGAnimatedRect
SVGAnimatedString
SVGAnimatedTransformList
SVGAnimateElement
SVGAnimateMotionElement
SVGAnimateTransformElement
SVGAnimationElement
SVGCircleElement
SVGClipPathElement
SVGComponentTransferFunctionElement
SVGCursorElement Deprecated
SVGDefsElement
SVGDescElement
SVGElement
SVGEllipseElement
SVGEvent
SVGFEBlendElement
SVGFEColorMatrixElement
SVGFEComponentTransferElement
SVGFECompositeElement
SVGFEConvolveMatrixElement
SVGFEDiffuseLightingElement
SVGFEDisplacementMapElement
SVGFEDistantLightElement
SVGFEDropShadowElement
SVGFEFloodElement
SVGFEFuncAElement
SVGFEFuncBElement
SVGFEFuncGElement
SVGFEFuncRElement
SVGFEGaussianBlurElement
SVGFEImageElement
SVGFEMergeElement
SVGFEMergeNodeElement
SVGFEMorphologyElement
SVGFEOffsetElement
SVGFEPointLightElement
SVGFESpecularLightingElement
SVGFESpotLightElement
SVGFETileElement
SVGFETurbulenceElement
SVGFilterElement
SVGFontElement Deprecated
SVGFontFaceElement Deprecated
SVGFontFaceFormatElement Deprecated
SVGFontFaceNameElement Deprecated
SVGFontFaceSrcElement Deprecated
SVGFontFaceUriElement Deprecated
SVGForeignObjectElement
SVGGElement
SVGGeometryElement
SVGGlyphElement Deprecated
SVGGlyphRefElement Deprecated
SVGGradientElement
SVGGraphicsElement
SVGHKernElement Deprecated
SVGImageElement
SVGLength
SVGLengthList
SVGLinearGradientElement
SVGLineElement
SVGMarkerElement
SVGMaskElement
SVGMetadataElement
SVGMissingGlyphElement Deprecated
SVGMPathElement
SVGNumber
SVGNumberList
SVGPathElement
SVGPatternElement
SVGPoint Deprecated
SVGPointList
SVGPolygonElement
SVGPolylineElement
SVGPreserveAspectRatio
SVGRadialGradientElement
SVGRect
SVGRectElement
SVGRenderingIntent Deprecated
SVGScriptElement
SVGSetElement
SVGStopElement
SVGStringList
SVGStyleElement
SVGSVGElement
SVGSwitchElement
SVGSymbolElement
SVGTextContentElement
SVGTextElement
SVGTextPathElement
SVGTextPositioningElement
SVGTitleElement
SVGTransform
SVGTransformList
SVGTRefElement Deprecated
SVGTSpanElement
SVGUnitTypes
SVGUseElement
SVGViewElement
SVGVKernElement Deprecated
SyncEvent
SyncManager
T
TaskAttributionTiming Experimental
TaskController
TaskPriorityChangeEvent
TaskSignal
Text
TextDecoder
TextDecoderStream
TextEncoder
TextEncoderStream
TextFormat Experimental
TextFormatUpdateEvent Experimental
TextMetrics
TextTrack
TextTrackCue
TextTrackCueList
TextTrackList
TextUpdateEvent Experimental
TimeEvent
TimeRanges
ToggleEvent
Touch
TouchEvent
TouchList
TrackEvent
TransformStream
TransformStreamDefaultController
TransitionEvent
TreeWalker
TrustedHTML
TrustedScript
TrustedScriptURL
TrustedTypePolicy
TrustedTypePolicyFactory
U
UIEvent
URL
URLPattern Experimental
URLSearchParams
USB Experimental
USBAlternateInterface Experimental
USBConfiguration Experimental
USBConnectionEvent Experimental
USBDevice Experimental
USBEndpoint Experimental
USBInterface Experimental
USBInTransferResult Experimental
USBIsochronousInTransferPacket Experimental
USBIsochronousInTransferResult Experimental
USBIsochronousOutTransferPacket Experimental
USBIsochronousOutTransferResult Experimental
USBOutTransferResult Experimental
UserActivation
V
ValidityState
VideoColorSpace
VideoDecoder
VideoEncoder
VideoFrame
VideoPlaybackQuality
VideoTrack
VideoTrackList
ViewTimeline Experimental
ViewTransition Experimental
VirtualKeyboard Experimental
VisibilityStateEntry Experimental
VisualViewport
VRDisplay Non-standard Deprecated
VRDisplayCapabilities Non-standard Deprecated
VRDisplayEvent Non-standard Deprecated
VREyeParameters Non-standard Deprecated
VRFieldOfView Non-standard Deprecated
VRFrameData Non-standard Deprecated
VRLayerInit Deprecated
VRPose Non-standard Deprecated
VRStageParameters Non-standard Deprecated
VTTCue
VTTRegion
W
WakeLock
WakeLockSentinel
WaveShaperNode
WebGL2RenderingContext
WebGLActiveInfo
WebGLBuffer
WebGLContextEvent
WebGLFramebuffer
WebGLObject
WebGLProgram
WebGLQuery
WebGLRenderbuffer
WebGLRenderingContext
WebGLSampler
WebGLShader
WebGLShaderPrecisionFormat
WebGLSync
WebGLTexture
WebGLTransformFeedback
WebGLUniformLocation
WebGLVertexArrayObject
WebSocket
WebTransport
WebTransportBidirectionalStream
WebTransportDatagramDuplexStream
WebTransportError
WebTransportReceiveStream Experimental
WebTransportSendStream Experimental
WGSLLanguageFeatures Experimental
WheelEvent
Window
WindowClient
WindowControlsOverlay Experimental
WindowControlsOverlayGeometryChangeEvent Experimental
WindowSharedStorage Experimental
Worker
WorkerGlobalScope
WorkerLocation
WorkerNavigator
Worklet
WorkletGlobalScope
WorkletSharedStorage Experimental
WritableStream
WritableStreamDefaultController
WritableStreamDefaultWriter
X
XMLDocument
XMLHttpRequest
XMLHttpRequestEventTarget
XMLHttpRequestUpload
XMLSerializer
XPathEvaluator
XPathException
XPathExpression
XPathNSResolver
XPathResult
XRAnchor Experimental
XRAnchorSet Experimental
XRBoundedReferenceSpace Experimental
XRCompositionLayer Experimental
XRCPUDepthInformation Experimental
XRCubeLayer Experimental
XRCylinderLayer Experimental
XRDepthInformation Experimental
XREquirectLayer Experimental
XRFrame Experimental
XRHand
XRHitTestResult Experimental
XRHitTestSource Experimental
XRInputSource
XRInputSourceArray Experimental
XRInputSourceEvent
XRInputSourcesChangeEvent
XRJointPose
XRJointSpace
XRLayer Experimental
XRLayerEvent Experimental
XRLightEstimate Experimental
XRLightProbe Experimental
XRMediaBinding Experimental
XRPose
XRProjectionLayer Experimental
XRQuadLayer Experimental
XRRay Experimental
XRReferenceSpace
XRReferenceSpaceEvent
XRRenderState Experimental
XRRigidTransform
XRSession Experimental
XRSessionEvent
XRSpace
XRSubImage Experimental
XRSystem Experimental
XRTransientInputHitTestResult Experimental
XRTransientInputHitTestSource Experimental
XRView Experimental
XRViewerPose
XRViewport
XRWebGLBinding Experimental
XRWebGLDepthInformation Experimental
XRWebGLLayer Experimental
XRWebGLSubImage Experimental
XSLTProcessor
`;
},"2024-04-29 10:23:00","2024-05-17 10:23:00","Appendix VI","web-api-references"],
["Ref Eloquent javascript",function() {

return createBlock(`Links`, `

` + showLink("?page=js-intro", "JS intro") + showLink("?page=js-language", "JS language") + `

`)
;
},"2024-05-27 14:21:51","2024-05-27 14:21:51","Appendix VII ","ref-eloquent-javascript"],
["Variable glossary",function() {

return  `* Denotes escaped character

` + variableGlossary;
},"2024-05-08 15:20:00","2024-05-17 15:20:00","Glossary I","variable-glossary"],
["Function glossary",function() {

return  `* Denotes escaped character

` +  `Don't try hyperlink for functionGlossary it will not have time to load

` + functionGlossary;
},"2024-05-08 15:27:00","2024-05-17 15:27:00","Glossary II","function-glossary"],
["References glossary",function() {

return  `
Pages that have been visited will show links here.

` + Object.keys(references).sort().map((x, i) => String(i+1) + ". " + references[x]).join("\n\n");
},"2024-05-08 15:30:00","2024-05-17 15:30:00","Glossary III","references-glossary"]];
};



