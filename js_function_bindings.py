
from helpers_js_glossary import return_value

from document_file import documents_list
from js_glossary1 import function_stack1
from js_glossary2 import function_stack2
from js_glossary3 import function_stack3
from js_glossary4 import function_stack4
from js_glossary5 import function_stack5

ref = "globalThis."

data_stack = [
["this.", "documentsList", documents_list],
]

def get_data_stack():
  return data_stack


init_functions = {
"dispatcher": "simple_function",
"total": "24/34",
"definitions": [

{
"name": "getElement",
"params": ["id"],
"body": "document.getElementById(id)",
"simple_return": True,
"description": "Gets an element in DOM node by HTML id attribute from the DOM tree",
"function_type": "function return",
"semantic_type": "html getter"
},

{
"name": "getDivInnerHTML",
"params": ["id"],
"body": "getElement(id).innerHTML",
"globalThis": True,
"simple_return": True,
"description": "Gets the div text value from innerHTML",
"function_type": "function return",
"semantic_type": "data validator"
},

{
"name": "getInputValue",
"params": ["id"],
"body": "getElement(id).value",
"globalThis": True,
"simple_return": True,
"description": "Gets the input value provided by the user",
"function_type": "function return",
"semantic_type": "prompt getter"
},

{
"name": "getDocument",
"params": ["pageIndex"],
"body": "documents[pageIndex]",
"simple_return": True,
"globalThis": True,
"description": "Gets a specific document from documentIndex which uses document index number to access document",
"function_type": "function return",
"semantic_type": "data getter"
},

{
"name": "getDocumentFromURL",
"params": ["pageURL"],
"body": "documents[globalThis.documentURLIndex[pageURL]]",
"simple_return": True,
"globalThis": True,
"description": """
Gets a specific document from documentIndex which uses document index number to access document
pageURL is a native url
pageURL needs to also support permalink with anchor tag to scrollIntoView blocks and sections
""",
"function_type": "function return",
"semantic_type": "data getter"
},

{
"name": "setDivElement",
"params": ["id", "value"],
"body": "getElement(id).innerHTML = value;",
"globalThis": True,
"description": "Sets a div innerHTML value using it's HTML id",
"function_type": "side effect setter",
"semantic_type": "display setter"
},

{
"name": "setInputElement",
"params": ["id", "value"],
"body": "getElement(id).value = value;",
"globalThis": True,
"description": "Sets an input text value using it's HTML id",
"function_type": "side effect setter",
"semantic_type": "display setter"
},

{
"name": "setDocument",
"params": ["pageIndex"],
"body": """
documentData = globalThis.getDocument(pageIndex);
globalThis.currentPageIndex = pageIndex;
globalThis.setDivElement("document-header-2", globalThis.documentData["header"]);
globalThis.setDivElement("document-info", globalThis.documentData["content"]);
globalThis.setInputElement("page-id", pageIndex + 1);
""",
"globalThis": True,
"description": "Sets documentData from the pageIndex and updates the current document visible"
"function_type": "side effect setter",
"semantic_type": "data and display setter"
},

{
"name": "setDocumentFromURL",
"params": ["pageURL"],
"body": """
currentPageIndex = globalThis.documentURLIndex[pageURL];
globalThis.setDocument(globalThis.currentPageIndex);
""",
"globalThis": True,
"description": """
Sets currentPageIndex from the pageURL using the documentURLIndex
It needs to support anchor tags support for index and scrollIntoView as it does not currently as needed
""",
"function_type": "side effect setter",
"semantic_type": "data setter"
},

{
"name": "refreshDocument",
"params": [],
"body": """
setDocument(globalThis.getDocument(globalThis.currentPageIndex));
""",
"globalThis": True,
"description": """
It refreshes the current document from the currentPageIndex using getDocument
How does it affect permalink scrollIntoView
Consider refreshing documentData, urls, tags as well
""",
"function_type": "side effect setter",
"semantic_type": "data setter"
},

{
"name": "acceptablePageIndexRange",
"params": ["number"],
"body": "(number + globalThis.documentTotal) % globalThis.documentTotal;",
"simple_return": True,
"description": """
Uses documentTotal to return the currentPageIndex as a looping number in range for left right navigation with increment and decrement
""",
"function_type": "function return",
"semantic_type": "validation"
},

{
"name": "leftButtonHandler",
"params": [],
"body": """
currentPageIndex = globalThis.acceptablePageIndexRange(globalThis.currentPageIndex - 1);
globalThis.refreshDocument();
""",
"globalThis": True,
"description": """
Updates the currentPageIndex to decrement by 1 and refreshes document
""",
"function_type": "side effect setter",
"semantic_type": "data and display setter",
"handler": "clickEvent"
},

{
"name": "rightButtonHandler"
"params": [],
"body": """
currentPageIndex = globalThis.acceptablePageIndexRange(globalThis.currentPageIndex + 1);
globalThis.refreshDocument();
""",
"globalThis": True,
"description": """
Updates the currentPageIndex to increment by 1 and refreshes document
""",
"function_type": "side effect setter",
"semantic_type": "data and display setter",
"handler": "clickEvent"
},

{
"name": "homeButtonHandler"
"params": [],
"body": """
window.location = globalThis.window.location.href.split("jsud.html")[0] + "jsud.html";
""",
"globalThis": True,
"refersConfigVariable": True,
"description": """
Updates the current location to home page location
""",
"function_type": "side effect setter",
"semantic_type": "redirect",
"handler": "clickEvent"
},

{
"name": "refreshPageInputValue"
"params": [],
"body": """
pageInputValue = parseInt(globalThis.getElement("page-id").value);
""",
"globalThis": True,
"description": """
Sets the pageInputValue to hold/read/update/getter the value provided by page-id input box
""",
"function_type": "side effect setter",
"semantic_type": "getter"
},

{
"name": "pageIndexPromptHandler",
"params": ["keyEvent"],
"body": """
if (keyEvent.key==="Enter") {
globalThis.refreshPageInputValue();
globalThis.currentPageIndex = (this.pageInputValue - 1 + this.documentsTotal) % this.documentsTotal;
globalThis.refreshDocument();
""",
"description": """
On enter key detects and executes a part of key event handler from the listener
It reads the input value and updates currentPageIndex to refresh the documentData displayed
A Handler is different from a Listener
Listener allows others to subscribe to it and allow them to send updates
A handler is subscribed to an event listener to execute
Handler means there is MITM inbuilt function to facilitate and observe
""",
"function_type": "side effect setter",
"semantic_type": "data and display setter",
"handler": "keyEvent"
},

{
"name": "isAlphanumeric",
"params": ["character"],
"body": """
"abcdefghijklmnopqrstuvwxyz1234567890".includes(char.toLowerCase());
""",
"simple_return": True,
"description": """
Checks if a character is alphanumeric or not and returns boolean
isAlphanumeric(".") // -> false
isAlphanumeric("D") // -> true
""",
"function_type": "function return",
"semantic_type": "predicate"
},

{
"name": "removeExtraSpacesBetweenText",
"params": ["text"],
"body": """
" ".concat(text).concat(" ").split(" ").filter(x => x.length > 0).join(" ");
""",
"simple_return": True,
"description": """
Replaces one or more spaces in a string with exactly one space.
Also trims and strips the string from both ends for spaces.
""",
"function_type": "function return",
"semantic_type": "formatting whitespace"
},

{
"name": "formatTextForSearch",
"params": ["text"],
"body": """
let newText = "";
for (let char of text) {
if (globalThis.isAlphanumeric(char)) ) {
newText = newText + char;
} else {
newText = newText + " ";
}
}
return globalThis.removeExtraSpacesBetweenText(newText.toLowerCase());
""",,
"description": """
Formats the given text by removing non alphanumeric text and lowercasing it, to facilitate search
""",
"function_type": "function return",
"semantic_type": "formatting text"
},

{
"name": "refreshSearchPhraseInputValue",
"params": [],
"body": """
searchPhraseInputValue = globalThis.getInputValue("search-phrase").toLowerCase();
""",
"globalThis": True,
"description": """
Get the value of search-phrase input and update searchPhraseInputValue in lowercase
""",
"function_type": "side effect setter",
"semantic_type": "getter"
},

{
"name": "searchValue",
"params": ["phrase"],
"body": """
searchResults = Object.keys(globalThis.documentSearch).filter(x => x.includes(phrase));
if (globalThis.searchResults.length === 0) {
globalThis.setInputElement("search-phrase", phrase + " not found!");
return;
}
globalThis.currentPageIndex = globalThis.documentSearch[globalThis.searchResults[0]];
""",
"globalThis": True,
"description": """
Search documentSearch for keys(pageIndex) that are filtered by phrase on key's value(content text)
Send a simple not found to phrase input if 0 search results
Update the currentPageIndex to first search result found's index
Does not update the documentData
""",
"function_type": "side effect setter",
"semantic_type": "internal state setter for search"
},

{
"name": "searchPhraseHandler",
"params": ["keyEvent"],
"body": """
if (keyEvent.key==="Enter") {
globalThis.refreshSearchPhraseInputValue();
globalThis.searchValue(globalThis.searchPhraseInputValue);
globalThis.refreshDocument();
}
""",
"description": """
Gets the prompt input from user as searchPhraseInputValue.
Then searches the value in populatedIndexes key value store to get the currentPageIndex of the search result.
Then sets the data to the display by refreshing
""",
"function_type": "side effect setter",
"semantic_type": "data and display setter",
"handler": "keyEvent"
},

{
"name": "pageRewriteHandler",
"params": [],
"body": """
setInputElement("page-id", "");
""",
"globalThis": True,
"description": """
Sets the page-id input to be blank on click.
Useful to save the user time to delete the old page-id before inputting new navigation destination
""",
"function_type": "side effect setter",
"semantic_type": "display setter"
},

{
"name": "showInlineLink",
"params": ["link", "text"],
"body": """
const linkHTML = "<a href=\\\""+link+"\\\" target=\\\"_blank\\\" >" + text + " [...]</a>";
globalThis.references[text] = linkHTML;
return linkHTML;
""",
"description": """
Returns an HTML anchor tag that can be added to the content to show an inline link
The link is hidden in ... so that it can fit consisely inline
The link text is displayed in full
Also adds the link to the visited references 
""",
"function_type": "html display function return side effect setter"
"semantic_type": "content tool"
},

{
"name": "showLink",
"params": ["link", "text"],
"body": """
return newline + newline + globalThis.showInlineLink(link, text) + newline + newline;
""",
"description": """
Adds an link but displays the link on it's own line to create emphasis of source
""",
"funcion_type": "function return",
"semantic_type": "content tool"
},

{
"name": "addEventHandler",
"params": ["id", "eventName", "handler"],
"body": """
globalThis.getElement(id).addEventListener(eventName, handler);
""",
"description": """
Adds an Event Listener to the HTML DOM element with the id, event name and event handler
""",
"function_type": "side effect setter",
"semantic_type": "subscriber model observer model"
},

{
"name": "getEcmaScriptEdition",
"params": [],
"body": """
const array = [];
switch (true) {
case !Array.isArray:
return 3;
case !window.Promise:
return 5;
case !array.includes:
return 6;
case !''.padStart:
return 7;
case !Promise.prototype.finally:
return 8;
case !window.BigInt:
return 9;
case !Promise.allSettled:
return 10;
case !''.replaceAll:
return 11;
case !array.at:
return 12;
default:
return 13;
}
""",
"description": """
Does feature detection for the correct version of javascript/ecmascript till ES13 released in the year 2022
Uses a switch dispatcher to return version number
""",
"function_type": "function return",
"semantic_type": "dispatcher"
},

{
"name": "getEcmaScriptYear",
"params": [],
"body": """
globalThis.edition = globalThis.getESEdition();
return {
3: 1999,
5: 2009
}[edition] || 2009 + edition;
""",
"description": """
Returns the year of EcmaScript version release
""",
"function_type": "function return",
"semantic_type": "dispatcher"
},

{
"name": "getEcmaScriptInfo",
"params": [],
"body": """
return 'Edition: ES' + globalThis.getEcmaScriptEdition() + ' | Year: ' + globalThis.getEcmaScriptYear();
""",
"description": """
Returns the current browser's EcmaScript version number and it's year of release
""",
"function_type": "function return",
"semantic_type": "dispatcher"
},

{
"name": "encodeTextToUTF8",
"params": ["text"],
"body": """
new TextEncoder('utf-8').encode(value);
""",
"simple_return": True,
"description": """
Converts text to UTF8 encoding in binary for storage
""",
"function_type": "function return",
"semantic_type": "binary encoder"
},

{
"name": "resolveDataView",
"params": ["binaryArray"],
"body": """
new DataView(binaryArray);
""",
"simple_return": True,
"description": """
Data View resolves the binaries array that was provided as 8 bit unsigned binary from the UTF-8 text encoder.
Resolution involves the current hardware's endianness of working with binary(little endian, big endian etc)
DataView helps resolve the binary in a platform independent way on the browser
""",
"function_type": "function return",
"semantic_type": "binary decoder"
},

{
"name": "binaryToHexadecimal",
"params": ["dataView"],
"body": """
let hexes = [];
for (let i = 0; i < dataView.byteLength; i += 4) {
hexes.push(('00000000' + dataView.getUint32(i).toString(16)).slice(-8));
}
return hexes.join('');
""",
"description": """
Reads a dataview 4 bytes at a time.
Converts every 4 bytes to an unsigned 32 bit int with padding
Then converts it to a string as hexadecimal after slicing the array to remove padding
Finally the hexadecimal array is joined to a return string
""",
"function_type": "function return",
"semantic_type": "hexadecimal decoder"
},

{
"name": "sha256",
"params": ["text"],
"body": """
return globalThis.crypto.subtle.digest('SHA-256', encodeTextToUTF8(text)).then(x => {
let binary = globalThis.resolveDataView(x);
return globalThis.binaryToHexadecimal(binary);
});
""",
"async": True,
"description": """
An async function that uses crypto library to get the SHA-256 digest for a text.
Consider adding an await to make it not async by returning a resolution of the promise in .then()
The async serves as a warning to not use global variables inside.
Using global will result in a collision that will ruin the calculations by creating a violation of lock memory in critical path
""",
"function_type": "function return",
"semantic_type": "256 bit hexadecimal digest"
},

{
"name": "createBlock",
"params": ["heading", "body"],
"body": """
const linkHeading = (" " + heading).slice(1).trim().toLowerCase().replace(/ /g, "-");
var linkLocation = window.location.href;
if (linkLocation.includes("#")) {
linkLocation = linkLocation.split("#")[0];
}
linkLocation = linkLocation + "#" + linkHeading;
return `<div><a id="` + linkHeading + `" href="` + linkLocation  + `"><div class="heading2">` + heading.trim() + `</a></div>
` + body.trim() + `
<hr /></div>
`;
""",
"description": """
""",
"function_type",
"semantic_type"
},

{
"name": "createLinkBlock",
"params": ["heading", "link", "body"],
"body",
"description": """
""",
"function_type",
"semantic_type"
},

{
"name": "createScrollableDiv",
"params": ["fixedHeading", "body"],
"body",
"description": """
""",
"function_type",
"semantic_type"
},

{
"name": "",
"params",
"body",
"description": """
""",
"function_type",
"semantic_type"
}

]}


["createBlock", ["heading", "body"],
""" const linkHeading = (" " + heading).slice(1).trim().toLowerCase().replace(/ /g, "-");
var linkLocation = window.location.href;
if (linkLocation.includes("#")) {
linkLocation = linkLocation.split("#")[0];
}
linkLocation = linkLocation + "#" + linkHeading;
return `<div><a id="` + linkHeading + `" href="` + linkLocation  + `"><div class="heading2">` + heading.trim() + `</a></div>
` + body.trim() + `
<hr /></div>
`;
"""
],
["createLinkBlock", ["heading", "link", "body"],
""" const linkHeading = (" " + heading).slice(1).trim().toLowerCase().replace(/ /g, "-");
var linkLocation = window.location.href;
if (linkLocation.includes("#")) {
linkLocation = linkLocation.split("#")[0];
}
linkLocation = linkLocation + "#" + linkHeading;
return `<div><a id="` + linkHeading + `" href="` + linkLocation  + `"><div class="heading2">
#` + linkHeading + `
</a></div>
` + globalThis.showInlineLink(link, heading.trim()) + `
` + body.trim() + `
<hr /></div>
`;
"""
],
["createScrollableDiv", ["fixedHeading", "body"],
""" return fixedHeading + `<div class="scrollable">`+body+`</div>`;
"""
],

["goToLocation", [],
"""
const urlString = String(this.window.location);

if (urlString.includes("?")) {
var paramString = urlString.split('?')[1];
var hashString = "";
if (paramString.includes("#")) {
hashString = "#" + paramString.split("#")[1];
paramString = paramString.split("#")[0];
}
const paramsArray = paramString.split('&');
var locationParams = {};

for (let i = 0; i < paramsArray.length; i++) {
   let kvpair = paramsArray[i].split('=');
   locationParams[kvpair[0]] = kvpair[1];
}

globalThis.currentPageIndex = this.documentIndex[locationParams["page"]];
globalThis.refreshDocument();
if (hashString.length > 1) {
window.location.hash = hashString;
globalThis.getElement(hashString.slice(1)).scrollIntoView();
}
}

"""
],



["populateIndexes", [],
""" globalThis.documentsList.map((x, i) => {
globalThis.documentIndex[x[5]] = i;
});

globalThis.documentsList.map((x, i) => {
const documentWordsRaw = x[0] + x[1]();
var documentWords = removeNonAlphaNum(documentWordsRaw);
globalThis.documentSearch[documentWords] = i;
});
"""
],
["postload", [],
"""globalThis.refreshDocument();
globalThis.setDivElement("page-total", "/ " + globalThis.documentsTotal);
globalThis.addEvent("left-button", "click", globalThis.leftButtonHandler);
globalThis.addEvent("right-button", "click", globalThis.rightButtonHandler);
globalThis.addEvent("home-button", "click", globalThis.homeButtonHandler);
globalThis.addEvent("page-id", "keyup", globalThis.pageSelectHandler);
globalThis.addEvent("page-id", "click", globalThis.pageRewriteHandler);
globalThis.addEvent("search-phrase", "keyup", globalThis.searchPhraseHandler);
globalThis.populateIndexes();
globalThis.goToLocation();
globalThis.refreshDocument();
"""
]


function_stack = [

["getElement", ["id"],
return_value("document.getElementById(id)")
],
["getDocument", ["pageIndex"],
return_value(ref + "documentsList[pageIndex]")
],
["setDivElement", ["id", "value"],
ref + "getElement(id).innerHTML = value;"
],
["setInputElement", ["id", "value"],
"globalThis.getElement(id).value = value;"
],
["setDocument", ["document"],
"""globalThis.setDivElement("document-header-2", document[globalThis.headingColumnIndex]);
globalThis.setDivElement("document-info", document[globalThis.documentContentFunctionColumnIndex]());
globalThis.setInputElement("page-id", globalThis.currentPageIndex + 1);"""
],
["refreshDocument", [],
"""globalThis.setDocument(globalThis.getDocument(globalThis.currentPageIndex));"""
],
["acceptablePageIndexRange", ["number"],
return_value("(number + globalThis.documentsTotal) % globalThis.documentsTotal")
],
["leftButtonHandler", [],
"""globalThis.currentPageIndex = globalThis.acceptablePageIndexRange(globalThis.currentPageIndex - 1);
globalThis.refreshDocument();"""
],
["rightButtonHandler", [],
"""globalThis.currentPageIndex = globalThis.acceptablePageIndexRange(globalThis.currentPageIndex + 1);
globalThis.refreshDocument();"""
],
["homeButtonHandler", [],
""" window.location = window.location.href.split("javascript.html")[0] + "javascript.html";
"""
],
["refreshPageInputValue", [],
"""globalThis.pageInputValue = parseInt(globalThis.getElement("page-id").value);
"""
],
["pageSelectHandler", ["e"],
"""if (e.key==="Enter") {
globalThis.refreshPageInputValue();
globalThis.currentPageIndex = (this.pageInputValue - 1 + this.documentsTotal) % this.documentsTotal;
globalThis.refreshDocument();
}"""
],




["removeNonAlphaNum", ["text"], 
""" var newText = "";
for (let i = 0; i<text.length; i=i+1) {
if ("abcdefghijklmnopqrstuvwxyz1234567890".includes(text[i].toLowerCase()) ) {
newText = newText + text[i].toLowerCase();
continue;
}
newText = newText + " ";
}
newText = newText.split(" ").filter(x => x.length > 0).join(" ");
return newText;
"""],
["refreshSearchPhraseInputValue", [],
"""globalThis.searchPhraseInputValue = globalThis.getElement("search-phrase").value.toLowerCase();
"""
],
["searchValue", ["phrase"],
""" globalThis.searchResults = Object.keys(globalThis.documentSearch).filter(x => x.includes(phrase));
if (globalThis.searchResults.length === 0) {
globalThis.setInputElement("search-phrase", phrase + " not found!");
return;
}
globalThis.currentPageIndex = globalThis.documentSearch[globalThis.searchResults[0]];
"""
],
["searchPhraseHandler", ["e"],
"""if (e.key==="Enter") {
globalThis.refreshSearchPhraseInputValue();
globalThis.searchValue(searchPhraseInputValue);
globalThis.refreshDocument();
}"""
],
["pageRewriteHandler", [],
"""globalThis.setInputElement("page-id", "");
"""
],
["showLink", ["link", "text"],
""" const linkHTML = "<a href=\\\""+link+"\\\" target=\\\"_blank\\\" >" + text + " [...]</a>";
this.references[text] = linkHTML;
return `

` + linkHTML + `

`;
"""
],

["showInlineLink", ["link", "text"],
""" const linkHTML = "<a href=\\\""+link+"\\\" target=\\\"_blank\\\" >" + text + " [...]</a>";
globalThis.references[text] = linkHTML;
return linkHTML;
"""
],
["addEvent", ["id", "name", "handler"],
""" globalThis.getElement(id).addEventListener(name, handler);
"""
],
["getESEdition", [],
""" const array = [];
switch (true) {
case !Array.isArray:
return 3;
case !window.Promise:
return 5;
case !array.includes:
return 6;
case !''.padStart:
return 7;
case !Promise.prototype.finally:
return 8;
case !window.BigInt:
return 9;
case !Promise.allSettled:
return 10;
case !''.replaceAll:
return 11;
case !array.at:
return 12;
default:
return 13;
}
"""
],
["getESYear", [],
""" globalThis.edition = globalThis.getESEdition();
return {
3: 1999,
5: 2009
}[edition] || 2009 + edition;
"""
],
["ecmaScriptInfo", [],
""" return 'Edition: ES' + getESEdition() + ' | Year: ' + globalThis.getESYear();
"""
],
["unsigned8BitIntegerArray", ["value"],
""" return new TextEncoder('utf-8').encode(value);
"""
],
["getDataView", ["value"],
""" return new DataView(value);
"""
],
["getSHA256HexesFromDataView", ["dataView"],
""" let hexes = [];
for (let i = 0; i < dataView.byteLength; i += 4) {
hexes.push(('00000000' + dataView.getUint32(i).toString(16)).slice(-8));
}
return hexes.join('');
"""
],
["sha256Hash", ["value"],
""" return crypto.subtle.digest('SHA-256', unsigned8BitIntegerArray(value)).then(x => {
let view = this.getDataView(x);
const hashValue = this.getSHA256HexesFromDataView(view);
return hashValue;
});
""", "async"
],
["createBlock", ["heading", "body"],
""" const linkHeading = (" " + heading).slice(1).trim().toLowerCase().replace(/ /g, "-");
var linkLocation = window.location.href;
if (linkLocation.includes("#")) {
linkLocation = linkLocation.split("#")[0];
}
linkLocation = linkLocation + "#" + linkHeading;
return `<div><a id="` + linkHeading + `" href="` + linkLocation  + `"><div class="heading2">` + heading.trim() + `</a></div>
` + body.trim() + `
<hr /></div>
`;
"""
],
["createLinkBlock", ["heading", "link", "body"], 
""" const linkHeading = (" " + heading).slice(1).trim().toLowerCase().replace(/ /g, "-");
var linkLocation = window.location.href;
if (linkLocation.includes("#")) {
linkLocation = linkLocation.split("#")[0];
}
linkLocation = linkLocation + "#" + linkHeading;
return `<div><a id="` + linkHeading + `" href="` + linkLocation  + `"><div class="heading2">
#` + linkHeading + `
</a></div>
` + globalThis.showInlineLink(link, heading.trim()) + `
` + body.trim() + `
<hr /></div>
`;
"""
],
["createScrollableDiv", ["fixedHeading", "body"],
""" return fixedHeading + `<div class="scrollable">`+body+`</div>`;
"""
],
["goToLocation", [],
"""
const urlString = String(this.window.location);

if (urlString.includes("?")) {
var paramString = urlString.split('?')[1];
var hashString = "";
if (paramString.includes("#")) {
hashString = "#" + paramString.split("#")[1];
paramString = paramString.split("#")[0];
}
const paramsArray = paramString.split('&');
var locationParams = {};

for (let i = 0; i < paramsArray.length; i++) {
   let kvpair = paramsArray[i].split('=');
   locationParams[kvpair[0]] = kvpair[1];
}

globalThis.currentPageIndex = this.documentIndex[locationParams["page"]];
globalThis.refreshDocument();
if (hashString.length > 1) {
window.location.hash = hashString;
globalThis.getElement(hashString.slice(1)).scrollIntoView();
}
}

"""
],



["populateIndexes", [],
""" globalThis.documentsList.map((x, i) => {
globalThis.documentIndex[x[5]] = i; 
});

globalThis.documentsList.map((x, i) => {
const documentWordsRaw = x[0] + x[1]();
var documentWords = removeNonAlphaNum(documentWordsRaw);
globalThis.documentSearch[documentWords] = i;
});
"""
],
["postload", [],
"""globalThis.refreshDocument();
globalThis.setDivElement("page-total", "/ " + globalThis.documentsTotal);
globalThis.addEvent("left-button", "click", globalThis.leftButtonHandler);
globalThis.addEvent("right-button", "click", globalThis.rightButtonHandler);
globalThis.addEvent("home-button", "click", globalThis.homeButtonHandler);
globalThis.addEvent("page-id", "keyup", globalThis.pageSelectHandler);
globalThis.addEvent("page-id", "click", globalThis.pageRewriteHandler);
globalThis.addEvent("search-phrase", "keyup", globalThis.searchPhraseHandler);
globalThis.populateIndexes();
globalThis.goToLocation();
globalThis.refreshDocument();
"""
]
]

def get_function_stack():
  return function_stack


function_execution_stack = [
"""
globalThis.postload();
""",
"""async function SHATest() {
globalThis.SHATestA = await globalThis.sha256Hash("a");
}
globalThis.runSHATest = SHATest;
await globalThis.runSHATest();
console.log(globalThis.SHATestA);
"""
]

def get_function_execution_stack():
  return function_execution_stack



