

console.log(`

This is script loaded after data is loaded

`);

window.onload = function() {

this.data();
console.log( `Data: ` + this.documentsList.length + ` documents loaded`);


console.log(`

Initializing variables...

`);
this.currentPageIndex = 0;
this.documentsTotal = documentsList.length;
this.headingColumnIndex = 0;
this.documentContentFunctionColumnIndex = 1;
this.pageInputValue = 1;
this.references = {};
this.glossary = {};
this.evalglossary = {};
this.variableGlossary = "";
this.functionGlossary = "";
this.currenturl = String(this.window.location);
this.documentIndex = {};
this.searchPhraseInputValue = "";
this.documentSearch = {};
this.searchResults = [];
this.glossary.currentPageIndex = 0;
this.glossary.documentsTotal = documentsList.length;
this.glossary.headingColumnIndex = 0;
this.glossary.documentContentFunctionColumnIndex = 1;
this.glossary.pageInputValue = 1;
this.glossary.references = {};
this.glossary.glossary = {};
this.glossary.evalglossary = {};
this.glossary.variableGlossary = "";
this.glossary.functionGlossary = "";
this.glossary.currenturl = String(this.window.location);
this.glossary.documentIndex = {};
this.glossary.searchPhraseInputValue = "";
this.glossary.documentSearch = {};
this.glossary.searchResults = [];

console.log(`

15 variables loading

`);

console.log(`

currentPageIndex
documentsTotal
headingColumnIndex
documentContentFunctionColumnIndex
pageInputValue
references
glossary
evalglossary
variableGlossary
functionGlossary
currenturl
documentIndex
searchPhraseInputValue
documentSearch
searchResults


`);

console.log(`

 `+String(Object.keys(this.glossary).length)+` variables loaded 

`);

console.log(`

`+Object.keys(this.glossary).join("\n").trim() + `

`);
this.evalglossary.currentPageIndex = `this.currentPageIndex = 0;`;
this.evalglossary.documentsTotal = `this.documentsTotal = documentsList.length;`;
this.evalglossary.headingColumnIndex = `this.headingColumnIndex = 0;`;
this.evalglossary.documentContentFunctionColumnIndex = `this.documentContentFunctionColumnIndex = 1;`;
this.evalglossary.pageInputValue = `this.pageInputValue = 1;`;
this.evalglossary.references = `this.references = {};`;
this.evalglossary.glossary = `this.glossary = {};`;
this.evalglossary.evalglossary = `this.evalglossary = {};`;
this.evalglossary.variableGlossary = `this.variableGlossary = "";`;
this.evalglossary.functionGlossary = `this.functionGlossary = "";`;
this.evalglossary.currenturl = `this.currenturl = String(this.window.location);`;
this.evalglossary.documentIndex = `this.documentIndex = {};`;
this.evalglossary.searchPhraseInputValue = `this.searchPhraseInputValue = "";`;
this.evalglossary.documentSearch = `this.documentSearch = {};`;
this.evalglossary.searchResults = `this.searchResults = [];`;

this.variableGlossary = `
console.log(*

Initializing variables...

*);
this.currentPageIndex = 0;
this.documentsTotal = documentsList.length;
this.headingColumnIndex = 0;
this.documentContentFunctionColumnIndex = 1;
this.pageInputValue = 1;
this.references = {};
this.glossary = {};
this.evalglossary = {};
this.variableGlossary = **;
this.functionGlossary = **;
this.currenturl = String(this.window.location);
this.documentIndex = {};
this.searchPhraseInputValue = **;
this.documentSearch = {};
this.searchResults = [];
this.glossary.currentPageIndex = 0;
this.glossary.documentsTotal = documentsList.length;
this.glossary.headingColumnIndex = 0;
this.glossary.documentContentFunctionColumnIndex = 1;
this.glossary.pageInputValue = 1;
this.glossary.references = {};
this.glossary.glossary = {};
this.glossary.evalglossary = {};
this.glossary.variableGlossary = **;
this.glossary.functionGlossary = **;
this.glossary.currenturl = String(this.window.location);
this.glossary.documentIndex = {};
this.glossary.searchPhraseInputValue = **;
this.glossary.documentSearch = {};
this.glossary.searchResults = [];

console.log(*

15 variables loading

*);

console.log(*

currentPageIndex
documentsTotal
headingColumnIndex
documentContentFunctionColumnIndex
pageInputValue
references
glossary
evalglossary
variableGlossary
functionGlossary
currenturl
documentIndex
searchPhraseInputValue
documentSearch
searchResults


*);

console.log(*

 *+String(Object.keys(this.glossary).length)+* variables loaded 

*);

console.log(*

*+Object.keys(this.glossary).join(*\n*).trim() + *

*);
this.evalglossary.currentPageIndex = *this.currentPageIndex = 0;*;
this.evalglossary.documentsTotal = *this.documentsTotal = documentsList.length;*;
this.evalglossary.headingColumnIndex = *this.headingColumnIndex = 0;*;
this.evalglossary.documentContentFunctionColumnIndex = *this.documentContentFunctionColumnIndex = 1;*;
this.evalglossary.pageInputValue = *this.pageInputValue = 1;*;
this.evalglossary.references = *this.references = {};*;
this.evalglossary.glossary = *this.glossary = {};*;
this.evalglossary.evalglossary = *this.evalglossary = {};*;
this.evalglossary.variableGlossary = *this.variableGlossary = **;*;
this.evalglossary.functionGlossary = *this.functionGlossary = **;*;
this.evalglossary.currenturl = *this.currenturl = String(this.window.location);*;
this.evalglossary.documentIndex = *this.documentIndex = {};*;
this.evalglossary.searchPhraseInputValue = *this.searchPhraseInputValue = **;*;
this.evalglossary.documentSearch = *this.documentSearch = {};*;
this.evalglossary.searchResults = *this.searchResults = [];*;
`;

console.log(`

Loaded Variable MD

`);


console.log(`

33
  ` + `+` + String(Object.keys(this.glossary).length) + ` functions + variables loading
  

`);

console.log(`

getElement
getDocument
setDivElement
setInputElement
setDocument
refreshDocument
acceptablePageIndexRange
leftButtonHandler
rightButtonHandler
homeButtonHandler
refreshPageInputValue
pageSelectHandler
removeNonAlphaNum
refreshSearchPhraseInputValue
searchValue
searchPhraseHandler
pageRewriteHandler
showLink
showInlineLink
addEvent
getESEdition
getESYear
ecmaScriptInfo
unsigned8BitIntegerArray
getDataView
getSHA256HexesFromDataView
sha256Hash
createBlock
createLinkBlock
createScrollableDiv
goToLocation
populateIndexes
postload


`);
this.getElement = function(id) {
return document.getElementById(id);
};
this.getDocument = function(pageIndex) {
return globalThis.documentsList[pageIndex];
};
this.setDivElement = function(id, value) {
globalThis.getElement(id).innerHTML = value;
};
this.setInputElement = function(id, value) {
globalThis.getElement(id).value = value;
};
this.setDocument = function(document) {
globalThis.setDivElement("document-header-2", document[globalThis.headingColumnIndex]);
globalThis.setDivElement("document-info", document[globalThis.documentContentFunctionColumnIndex]());
globalThis.setInputElement("page-id", globalThis.currentPageIndex + 1);
};
this.refreshDocument = function() {
globalThis.setDocument(globalThis.getDocument(this.currentPageIndex));
};
this.acceptablePageIndexRange = function(number) {
return (number + globalThis.documentsTotal) % globalThis.documentsTotal;
};
this.leftButtonHandler = function() {
globalThis.currentPageIndex = globalThis.acceptablePageIndexRange(globalThis.currentPageIndex - 1);
globalThis.refreshDocument();
};
this.rightButtonHandler = function() {
globalThis.currentPageIndex = globalThis.acceptablePageIndexRange(globalThis.currentPageIndex + 1);
globalThis.refreshDocument();
};
this.homeButtonHandler = function() {
 window.location = window.location.href.split("javascript.html")[0] + "javascript.html";

};
this.refreshPageInputValue = function() {
globalThis.pageInputValue = parseInt(globalThis.getElement("page-id").value);

};
this.pageSelectHandler = function(e) {
if (e.key==="Enter") {
globalThis.refreshPageInputValue();
globalThis.currentPageIndex = (this.pageInputValue - 1 + this.documentsTotal) % this.documentsTotal;
globalThis.refreshDocument();
}
};
this.removeNonAlphaNum = function(text) {
 var newText = "";
for (let i = 0; i<text.length; i=i+1) {
if ("abcdefghijklmnopqrstuvwxyz1234567890".includes(text[i].toLowerCase()) ) {
newText = newText + text[i].toLowerCase();
continue;
}
newText = newText + " ";
}
newText = newText.split(" ").filter(x => x.length > 0).join(" ");
return newText;

};
this.refreshSearchPhraseInputValue = function() {
globalThis.searchPhraseInputValue = globalThis.getElement("search-phrase").value.toLowerCase();

};
this.searchValue = function(phrase) {
 globalThis.searchResults = Object.keys(globalThis.documentSearch).filter(x => x.includes(phrase));
if (globalThis.searchResults.length === 0) {
globalThis.setInputElement("search-phrase", phrase + " not found!");
return;
}
globalThis.currentPageIndex = globalThis.documentSearch[globalThis.searchResults[0]];

};
this.searchPhraseHandler = function(e) {
if (e.key==="Enter") {
globalThis.refreshSearchPhraseInputValue();
globalThis.searchValue(searchPhraseInputValue);
globalThis.refreshDocument();
}
};
this.pageRewriteHandler = function() {
globalThis.setInputElement("page-id", "");

};
this.showLink = function(link, text) {
 const linkHTML = "<a href=\""+link+"\" target=\"_blank\" >" + text + " [...]</a>";
this.references[text] = linkHTML;
return `

` + linkHTML + `

`;

};
this.showInlineLink = function(link, text) {
 const linkHTML = "<a href=\""+link+"\" target=\"_blank\" >" + text + " [...]</a>";
globalThis.references[text] = linkHTML;
return linkHTML;

};
this.addEvent = function(id, name, handler) {
 globalThis.getElement(id).addEventListener(name, handler);

};
this.getESEdition = function() {
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

};
this.getESYear = function() {
 globalThis.edition = globalThis.getESEdition();
return {
3: 1999,
5: 2009
}[edition] || 2009 + edition;

};
this.ecmaScriptInfo = function() {
 return 'Edition: ES' + getESEdition() + ' | Year: ' + globalThis.getESYear();

};
this.unsigned8BitIntegerArray = function(value) {
 return new TextEncoder('utf-8').encode(value);

};
this.getDataView = function(value) {
 return new DataView(value);

};
this.getSHA256HexesFromDataView = function(dataView) {
 let hexes = [];
for (let i = 0; i < dataView.byteLength; i += 4) {
hexes.push(('00000000' + dataView.getUint32(i).toString(16)).slice(-8));
}
return hexes.join('');

};
this.sha256Hash  =  async  = function(value) {
 return crypto.subtle.digest('SHA-256', unsigned8BitIntegerArray(value)).then(x => {
let view = this.getDataView(x);
const hashValue = this.getSHA256HexesFromDataView(view);
return hashValue;
});

};
this.createBlock = function(heading, body) {
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

};
this.createLinkBlock = function(heading, link, body) {
 const linkHeading = (" " + heading).slice(1).trim().toLowerCase().replace(/ /g, "-");
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

};
this.createScrollableDiv = function(fixedHeading, body) {
 return fixedHeading + `<div class="scrollable">`+body+`</div>`;

};
this.goToLocation = function() {

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


};
this.populateIndexes = function() {
 globalThis.documentsList.map((x, i) => {
globalThis.documentIndex[x[5]] = i; 
});

globalThis.documentsList.map((x, i) => {
const documentWordsRaw = x[0] + x[1]();
var documentWords = removeNonAlphaNum(documentWordsRaw);
globalThis.documentSearch[documentWords] = i;
});

};
this.postload = function() {
globalThis.refreshDocument();
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

};
this.glossary.getElement = function(id) {
return document.getElementById(id);
};
this.glossary.getDocument = function(pageIndex) {
return globalThis.documentsList[pageIndex];
};
this.glossary.setDivElement = function(id, value) {
globalThis.getElement(id).innerHTML = value;
};
this.glossary.setInputElement = function(id, value) {
globalThis.getElement(id).value = value;
};
this.glossary.setDocument = function(document) {
globalThis.setDivElement("document-header-2", document[globalThis.headingColumnIndex]);
globalThis.setDivElement("document-info", document[globalThis.documentContentFunctionColumnIndex]());
globalThis.setInputElement("page-id", globalThis.currentPageIndex + 1);
};
this.glossary.refreshDocument = function() {
globalThis.setDocument(globalThis.getDocument(this.currentPageIndex));
};
this.glossary.acceptablePageIndexRange = function(number) {
return (number + globalThis.documentsTotal) % globalThis.documentsTotal;
};
this.glossary.leftButtonHandler = function() {
globalThis.currentPageIndex = globalThis.acceptablePageIndexRange(globalThis.currentPageIndex - 1);
globalThis.refreshDocument();
};
this.glossary.rightButtonHandler = function() {
globalThis.currentPageIndex = globalThis.acceptablePageIndexRange(globalThis.currentPageIndex + 1);
globalThis.refreshDocument();
};
this.glossary.homeButtonHandler = function() {
 window.location = window.location.href.split("javascript.html")[0] + "javascript.html";

};
this.glossary.refreshPageInputValue = function() {
globalThis.pageInputValue = parseInt(globalThis.getElement("page-id").value);

};
this.glossary.pageSelectHandler = function(e) {
if (e.key==="Enter") {
globalThis.refreshPageInputValue();
globalThis.currentPageIndex = (this.pageInputValue - 1 + this.documentsTotal) % this.documentsTotal;
globalThis.refreshDocument();
}
};
this.glossary.removeNonAlphaNum = function(text) {
 var newText = "";
for (let i = 0; i<text.length; i=i+1) {
if ("abcdefghijklmnopqrstuvwxyz1234567890".includes(text[i].toLowerCase()) ) {
newText = newText + text[i].toLowerCase();
continue;
}
newText = newText + " ";
}
newText = newText.split(" ").filter(x => x.length > 0).join(" ");
return newText;

};
this.glossary.refreshSearchPhraseInputValue = function() {
globalThis.searchPhraseInputValue = globalThis.getElement("search-phrase").value.toLowerCase();

};
this.glossary.searchValue = function(phrase) {
 globalThis.searchResults = Object.keys(globalThis.documentSearch).filter(x => x.includes(phrase));
if (globalThis.searchResults.length === 0) {
globalThis.setInputElement("search-phrase", phrase + " not found!");
return;
}
globalThis.currentPageIndex = globalThis.documentSearch[globalThis.searchResults[0]];

};
this.glossary.searchPhraseHandler = function(e) {
if (e.key==="Enter") {
globalThis.refreshSearchPhraseInputValue();
globalThis.searchValue(searchPhraseInputValue);
globalThis.refreshDocument();
}
};
this.glossary.pageRewriteHandler = function() {
globalThis.setInputElement("page-id", "");

};
this.glossary.showLink = function(link, text) {
 const linkHTML = "<a href=\""+link+"\" target=\"_blank\" >" + text + " [...]</a>";
this.references[text] = linkHTML;
return `

` + linkHTML + `

`;

};
this.glossary.showInlineLink = function(link, text) {
 const linkHTML = "<a href=\""+link+"\" target=\"_blank\" >" + text + " [...]</a>";
globalThis.references[text] = linkHTML;
return linkHTML;

};
this.glossary.addEvent = function(id, name, handler) {
 globalThis.getElement(id).addEventListener(name, handler);

};
this.glossary.getESEdition = function() {
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

};
this.glossary.getESYear = function() {
 globalThis.edition = globalThis.getESEdition();
return {
3: 1999,
5: 2009
}[edition] || 2009 + edition;

};
this.glossary.ecmaScriptInfo = function() {
 return 'Edition: ES' + getESEdition() + ' | Year: ' + globalThis.getESYear();

};
this.glossary.unsigned8BitIntegerArray = function(value) {
 return new TextEncoder('utf-8').encode(value);

};
this.glossary.getDataView = function(value) {
 return new DataView(value);

};
this.glossary.getSHA256HexesFromDataView = function(dataView) {
 let hexes = [];
for (let i = 0; i < dataView.byteLength; i += 4) {
hexes.push(('00000000' + dataView.getUint32(i).toString(16)).slice(-8));
}
return hexes.join('');

};
this.glossary.sha256Hash = function(value) {
 return crypto.subtle.digest('SHA-256', unsigned8BitIntegerArray(value)).then(x => {
let view = this.getDataView(x);
const hashValue = this.getSHA256HexesFromDataView(view);
return hashValue;
});

};
this.glossary.createBlock = function(heading, body) {
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

};
this.glossary.createLinkBlock = function(heading, link, body) {
 const linkHeading = (" " + heading).slice(1).trim().toLowerCase().replace(/ /g, "-");
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

};
this.glossary.createScrollableDiv = function(fixedHeading, body) {
 return fixedHeading + `<div class="scrollable">`+body+`</div>`;

};
this.glossary.goToLocation = function() {

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


};
this.glossary.populateIndexes = function() {
 globalThis.documentsList.map((x, i) => {
globalThis.documentIndex[x[5]] = i; 
});

globalThis.documentsList.map((x, i) => {
const documentWordsRaw = x[0] + x[1]();
var documentWords = removeNonAlphaNum(documentWordsRaw);
globalThis.documentSearch[documentWords] = i;
});

};
this.glossary.postload = function() {
globalThis.refreshDocument();
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

};

console.log(`

`+String(Object.keys(this.glossary).length)+` functions loaded

`);

console.log(`

`+Object.keys(this.glossary).join("\n").trim() + `

`);

globalThis.postload();

async function main() {
globalThis.testA = await globalThis.sha256Hash("a");
}
main();



console.log(`

Initialization calls done

`);
this.evalglossary.getElement = `this.getElement = function(id) {
return document.getElementById(id);
};`;
this.evalglossary.getDocument = `this.getDocument = function(pageIndex) {
return globalThis.documentsList[pageIndex];
};`;
this.evalglossary.setDivElement = `this.setDivElement = function(id, value) {
globalThis.getElement(id).innerHTML = value;
};`;
this.evalglossary.setInputElement = `this.setInputElement = function(id, value) {
globalThis.getElement(id).value = value;
};`;
this.evalglossary.setDocument = `this.setDocument = function(document) {
globalThis.setDivElement("document-header-2", document[globalThis.headingColumnIndex]);
globalThis.setDivElement("document-info", document[globalThis.documentContentFunctionColumnIndex]());
globalThis.setInputElement("page-id", globalThis.currentPageIndex + 1);
};`;
this.evalglossary.refreshDocument = `this.refreshDocument = function() {
globalThis.setDocument(globalThis.getDocument(this.currentPageIndex));
};`;
this.evalglossary.acceptablePageIndexRange = `this.acceptablePageIndexRange = function(number) {
return (number + globalThis.documentsTotal) % globalThis.documentsTotal;
};`;
this.evalglossary.leftButtonHandler = `this.leftButtonHandler = function() {
globalThis.currentPageIndex = globalThis.acceptablePageIndexRange(globalThis.currentPageIndex - 1);
globalThis.refreshDocument();
};`;
this.evalglossary.rightButtonHandler = `this.rightButtonHandler = function() {
globalThis.currentPageIndex = globalThis.acceptablePageIndexRange(globalThis.currentPageIndex + 1);
globalThis.refreshDocument();
};`;
this.evalglossary.homeButtonHandler = `this.homeButtonHandler = function() {
 window.location = window.location.href.split("javascript.html")[0] + "javascript.html";

};`;
this.evalglossary.refreshPageInputValue = `this.refreshPageInputValue = function() {
globalThis.pageInputValue = parseInt(globalThis.getElement("page-id").value);

};`;
this.evalglossary.pageSelectHandler = `this.pageSelectHandler = function(e) {
if (e.key==="Enter") {
globalThis.refreshPageInputValue();
globalThis.currentPageIndex = (this.pageInputValue - 1 + this.documentsTotal) % this.documentsTotal;
globalThis.refreshDocument();
}
};`;
this.evalglossary.removeNonAlphaNum = `this.removeNonAlphaNum = function(text) {
 var newText = "";
for (let i = 0; i<text.length; i=i+1) {
if ("abcdefghijklmnopqrstuvwxyz1234567890".includes(text[i].toLowerCase()) ) {
newText = newText + text[i].toLowerCase();
continue;
}
newText = newText + " ";
}
newText = newText.split(" ").filter(x => x.length > 0).join(" ");
return newText;

};`;
this.evalglossary.refreshSearchPhraseInputValue = `this.refreshSearchPhraseInputValue = function() {
globalThis.searchPhraseInputValue = globalThis.getElement("search-phrase").value.toLowerCase();

};`;
this.evalglossary.searchValue = `this.searchValue = function(phrase) {
 globalThis.searchResults = Object.keys(globalThis.documentSearch).filter(x => x.includes(phrase));
if (globalThis.searchResults.length === 0) {
globalThis.setInputElement("search-phrase", phrase + " not found!");
return;
}
globalThis.currentPageIndex = globalThis.documentSearch[globalThis.searchResults[0]];

};`;
this.evalglossary.searchPhraseHandler = `this.searchPhraseHandler = function(e) {
if (e.key==="Enter") {
globalThis.refreshSearchPhraseInputValue();
globalThis.searchValue(searchPhraseInputValue);
globalThis.refreshDocument();
}
};`;
this.evalglossary.pageRewriteHandler = `this.pageRewriteHandler = function() {
globalThis.setInputElement("page-id", "");

};`;
this.evalglossary.showLink = `this.showLink = function(link, text) {
 const linkHTML = "<a href=\""+link+"\" target=\"_blank\" >" + text + " [...]</a>";
this.references[text] = linkHTML;
return \`

\` + linkHTML + \`

\`;

};`;
this.evalglossary.showInlineLink = `this.showInlineLink = function(link, text) {
 const linkHTML = "<a href=\""+link+"\" target=\"_blank\" >" + text + " [...]</a>";
globalThis.references[text] = linkHTML;
return linkHTML;

};`;
this.evalglossary.addEvent = `this.addEvent = function(id, name, handler) {
 globalThis.getElement(id).addEventListener(name, handler);

};`;
this.evalglossary.getESEdition = `this.getESEdition = function() {
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

};`;
this.evalglossary.getESYear = `this.getESYear = function() {
 globalThis.edition = globalThis.getESEdition();
return {
3: 1999,
5: 2009
}[edition] || 2009 + edition;

};`;
this.evalglossary.ecmaScriptInfo = `this.ecmaScriptInfo = function() {
 return 'Edition: ES' + getESEdition() + ' | Year: ' + globalThis.getESYear();

};`;
this.evalglossary.unsigned8BitIntegerArray = `this.unsigned8BitIntegerArray = function(value) {
 return new TextEncoder('utf-8').encode(value);

};`;
this.evalglossary.getDataView = `this.getDataView = function(value) {
 return new DataView(value);

};`;
this.evalglossary.getSHA256HexesFromDataView = `this.getSHA256HexesFromDataView = function(dataView) {
 let hexes = [];
for (let i = 0; i < dataView.byteLength; i += 4) {
hexes.push(('00000000' + dataView.getUint32(i).toString(16)).slice(-8));
}
return hexes.join('');

};`;
this.evalglossary.sha256Hash = `this.sha256Hash  =  async  = function(value) {
 return crypto.subtle.digest('SHA-256', unsigned8BitIntegerArray(value)).then(x => {
let view = this.getDataView(x);
const hashValue = this.getSHA256HexesFromDataView(view);
return hashValue;
});

};`;
this.evalglossary.createBlock = `this.createBlock = function(heading, body) {
 const linkHeading = (" " + heading).slice(1).trim().toLowerCase().replace(/ /g, "-");
var linkLocation = window.location.href;
if (linkLocation.includes("#")) {
linkLocation = linkLocation.split("#")[0];
}
linkLocation = linkLocation + "#" + linkHeading;
return \`<div><a id="\` + linkHeading + \`" href="\` + linkLocation  + \`"><div class="heading2">\` + heading.trim() + \`</a></div>
\` + body.trim() + \`
<hr /></div>
\`;

};`;
this.evalglossary.createLinkBlock = `this.createLinkBlock = function(heading, link, body) {
 const linkHeading = (" " + heading).slice(1).trim().toLowerCase().replace(/ /g, "-");
var linkLocation = window.location.href;
if (linkLocation.includes("#")) {
linkLocation = linkLocation.split("#")[0];
}
linkLocation = linkLocation + "#" + linkHeading;
return \`<div><a id="\` + linkHeading + \`" href="\` + linkLocation  + \`"><div class="heading2">
#\` + linkHeading + \`
</a></div>
\` + globalThis.showInlineLink(link, heading.trim()) + \`
\` + body.trim() + \`
<hr /></div>
\`;

};`;
this.evalglossary.createScrollableDiv = `this.createScrollableDiv = function(fixedHeading, body) {
 return fixedHeading + \`<div class="scrollable">\`+body+\`</div>\`;

};`;
this.evalglossary.goToLocation = `this.goToLocation = function() {

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


};`;
this.evalglossary.populateIndexes = `this.populateIndexes = function() {
 globalThis.documentsList.map((x, i) => {
globalThis.documentIndex[x[5]] = i; 
});

globalThis.documentsList.map((x, i) => {
const documentWordsRaw = x[0] + x[1]();
var documentWords = removeNonAlphaNum(documentWordsRaw);
globalThis.documentSearch[documentWords] = i;
});

};`;
this.evalglossary.postload = `this.postload = function() {
globalThis.refreshDocument();
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

};`;

this.functionGlossary = `
console.log(*

33
  * + *+* + String(Object.keys(this.glossary).length) + * functions + variables loading
  

*);

console.log(*

getElement
getDocument
setDivElement
setInputElement
setDocument
refreshDocument
acceptablePageIndexRange
leftButtonHandler
rightButtonHandler
homeButtonHandler
refreshPageInputValue
pageSelectHandler
removeNonAlphaNum
refreshSearchPhraseInputValue
searchValue
searchPhraseHandler
pageRewriteHandler
showLink
showInlineLink
addEvent
getESEdition
getESYear
ecmaScriptInfo
unsigned8BitIntegerArray
getDataView
getSHA256HexesFromDataView
sha256Hash
createBlock
createLinkBlock
createScrollableDiv
goToLocation
populateIndexes
postload


*);
this.getElement = function(id) {
return document.getElementById(id);
};
this.getDocument = function(pageIndex) {
return globalThis.documentsList[pageIndex];
};
this.setDivElement = function(id, value) {
globalThis.getElement(id).innerHTML = value;
};
this.setInputElement = function(id, value) {
globalThis.getElement(id).value = value;
};
this.setDocument = function(document) {
globalThis.setDivElement(*document-header-2*, document[globalThis.headingColumnIndex]);
globalThis.setDivElement(*document-info*, document[globalThis.documentContentFunctionColumnIndex]());
globalThis.setInputElement(*page-id*, globalThis.currentPageIndex + 1);
};
this.refreshDocument = function() {
globalThis.setDocument(globalThis.getDocument(this.currentPageIndex));
};
this.acceptablePageIndexRange = function(number) {
return (number + globalThis.documentsTotal) % globalThis.documentsTotal;
};
this.leftButtonHandler = function() {
globalThis.currentPageIndex = globalThis.acceptablePageIndexRange(globalThis.currentPageIndex - 1);
globalThis.refreshDocument();
};
this.rightButtonHandler = function() {
globalThis.currentPageIndex = globalThis.acceptablePageIndexRange(globalThis.currentPageIndex + 1);
globalThis.refreshDocument();
};
this.homeButtonHandler = function() {
 window.location = window.location.href.split(*javascript.html*)[0] + *javascript.html*;

};
this.refreshPageInputValue = function() {
globalThis.pageInputValue = parseInt(globalThis.getElement(*page-id*).value);

};
this.pageSelectHandler = function(e) {
if (e.key===*Enter*) {
globalThis.refreshPageInputValue();
globalThis.currentPageIndex = (this.pageInputValue - 1 + this.documentsTotal) % this.documentsTotal;
globalThis.refreshDocument();
}
};
this.removeNonAlphaNum = function(text) {
 var newText = **;
for (let i = 0; i*text.length; i=i+1) {
if (*abcdefghijklmnopqrstuvwxyz1234567890*.includes(text[i].toLowerCase()) ) {
newText = newText + text[i].toLowerCase();
continue;
}
newText = newText + * *;
}
newText = newText.split(* *).filter(x =* x.length * 0).join(* *);
return newText;

};
this.refreshSearchPhraseInputValue = function() {
globalThis.searchPhraseInputValue = globalThis.getElement(*search-phrase*).value.toLowerCase();

};
this.searchValue = function(phrase) {
 globalThis.searchResults = Object.keys(globalThis.documentSearch).filter(x =* x.includes(phrase));
if (globalThis.searchResults.length === 0) {
globalThis.setInputElement(*search-phrase*, phrase + * not found!*);
return;
}
globalThis.currentPageIndex = globalThis.documentSearch[globalThis.searchResults[0]];

};
this.searchPhraseHandler = function(e) {
if (e.key===*Enter*) {
globalThis.refreshSearchPhraseInputValue();
globalThis.searchValue(searchPhraseInputValue);
globalThis.refreshDocument();
}
};
this.pageRewriteHandler = function() {
globalThis.setInputElement(*page-id*, **);

};
this.showLink = function(link, text) {
 const linkHTML = **a href=\**+link+*\* target=\*_blank\* ** + text + * [...]*/a**;
this.references[text] = linkHTML;
return *

* + linkHTML + *

*;

};
this.showInlineLink = function(link, text) {
 const linkHTML = **a href=\**+link+*\* target=\*_blank\* ** + text + * [...]*/a**;
globalThis.references[text] = linkHTML;
return linkHTML;

};
this.addEvent = function(id, name, handler) {
 globalThis.getElement(id).addEventListener(name, handler);

};
this.getESEdition = function() {
 const array = [];
switch (true) {
case !Array.isArray:
return 3;
case !window.Promise:
return 5;
case !array.includes:
return 6;
case !**.padStart:
return 7;
case !Promise.prototype.finally:
return 8;
case !window.BigInt:
return 9;
case !Promise.allSettled:
return 10;
case !**.replaceAll:
return 11;
case !array.at:
return 12;
default:
return 13;
}

};
this.getESYear = function() {
 globalThis.edition = globalThis.getESEdition();
return {
3: 1999,
5: 2009
}[edition] || 2009 + edition;

};
this.ecmaScriptInfo = function() {
 return *Edition: ES* + getESEdition() + * | Year: * + globalThis.getESYear();

};
this.unsigned8BitIntegerArray = function(value) {
 return new TextEncoder(*utf-8*).encode(value);

};
this.getDataView = function(value) {
 return new DataView(value);

};
this.getSHA256HexesFromDataView = function(dataView) {
 let hexes = [];
for (let i = 0; i * dataView.byteLength; i += 4) {
hexes.push((*00000000* + dataView.getUint32(i).toString(16)).slice(-8));
}
return hexes.join(**);

};
this.sha256Hash  =  async  = function(value) {
 return crypto.subtle.digest(*SHA-256*, unsigned8BitIntegerArray(value)).then(x =* {
let view = this.getDataView(x);
const hashValue = this.getSHA256HexesFromDataView(view);
return hashValue;
});

};
this.createBlock = function(heading, body) {
 const linkHeading = (* * + heading).slice(1).trim().toLowerCase().replace(/ /g, *-*);
var linkLocation = window.location.href;
if (linkLocation.includes(*#*)) {
linkLocation = linkLocation.split(*#*)[0];
}
linkLocation = linkLocation + *#* + linkHeading;
return **div**a id=** + linkHeading + ** href=** + linkLocation  + ****div class=*heading2*** + heading.trim() + **/a**/div*
* + body.trim() + *
*hr /**/div*
*;

};
this.createLinkBlock = function(heading, link, body) {
 const linkHeading = (* * + heading).slice(1).trim().toLowerCase().replace(/ /g, *-*);
var linkLocation = window.location.href;
if (linkLocation.includes(*#*)) {
linkLocation = linkLocation.split(*#*)[0];
}
linkLocation = linkLocation + *#* + linkHeading;
return **div**a id=** + linkHeading + ** href=** + linkLocation  + ****div class=*heading2**
#* + linkHeading + *
*/a**/div*
* + globalThis.showInlineLink(link, heading.trim()) + *
* + body.trim() + *
*hr /**/div*
*;

};
this.createScrollableDiv = function(fixedHeading, body) {
 return fixedHeading + **div class=*scrollable***+body+**/div**;

};
this.goToLocation = function() {

const urlString = String(this.window.location);

if (urlString.includes(*?*)) {
var paramString = urlString.split(*?*)[1];
var hashString = **;
if (paramString.includes(*#*)) {
hashString = *#* + paramString.split(*#*)[1];
paramString = paramString.split(*#*)[0];
}
const paramsArray = paramString.split(*&*);
var locationParams = {};

for (let i = 0; i * paramsArray.length; i++) {
   let kvpair = paramsArray[i].split(*=*);
   locationParams[kvpair[0]] = kvpair[1];
}

globalThis.currentPageIndex = this.documentIndex[locationParams[*page*]];
globalThis.refreshDocument();
if (hashString.length * 1) {
window.location.hash = hashString;
globalThis.getElement(hashString.slice(1)).scrollIntoView();
}
}


};
this.populateIndexes = function() {
 globalThis.documentsList.map((x, i) =* {
globalThis.documentIndex[x[5]] = i; 
});

globalThis.documentsList.map((x, i) =* {
const documentWordsRaw = x[0] + x[1]();
var documentWords = removeNonAlphaNum(documentWordsRaw);
globalThis.documentSearch[documentWords] = i;
});

};
this.postload = function() {
globalThis.refreshDocument();
globalThis.setDivElement(*page-total*, */ * + globalThis.documentsTotal);
globalThis.addEvent(*left-button*, *click*, globalThis.leftButtonHandler);
globalThis.addEvent(*right-button*, *click*, globalThis.rightButtonHandler);
globalThis.addEvent(*home-button*, *click*, globalThis.homeButtonHandler);
globalThis.addEvent(*page-id*, *keyup*, globalThis.pageSelectHandler);
globalThis.addEvent(*page-id*, *click*, globalThis.pageRewriteHandler);
globalThis.addEvent(*search-phrase*, *keyup*, globalThis.searchPhraseHandler);
globalThis.populateIndexes();
globalThis.goToLocation();
globalThis.refreshDocument();

};
this.glossary.getElement = function(id) {
return document.getElementById(id);
};
this.glossary.getDocument = function(pageIndex) {
return globalThis.documentsList[pageIndex];
};
this.glossary.setDivElement = function(id, value) {
globalThis.getElement(id).innerHTML = value;
};
this.glossary.setInputElement = function(id, value) {
globalThis.getElement(id).value = value;
};
this.glossary.setDocument = function(document) {
globalThis.setDivElement(*document-header-2*, document[globalThis.headingColumnIndex]);
globalThis.setDivElement(*document-info*, document[globalThis.documentContentFunctionColumnIndex]());
globalThis.setInputElement(*page-id*, globalThis.currentPageIndex + 1);
};
this.glossary.refreshDocument = function() {
globalThis.setDocument(globalThis.getDocument(this.currentPageIndex));
};
this.glossary.acceptablePageIndexRange = function(number) {
return (number + globalThis.documentsTotal) % globalThis.documentsTotal;
};
this.glossary.leftButtonHandler = function() {
globalThis.currentPageIndex = globalThis.acceptablePageIndexRange(globalThis.currentPageIndex - 1);
globalThis.refreshDocument();
};
this.glossary.rightButtonHandler = function() {
globalThis.currentPageIndex = globalThis.acceptablePageIndexRange(globalThis.currentPageIndex + 1);
globalThis.refreshDocument();
};
this.glossary.homeButtonHandler = function() {
 window.location = window.location.href.split(*javascript.html*)[0] + *javascript.html*;

};
this.glossary.refreshPageInputValue = function() {
globalThis.pageInputValue = parseInt(globalThis.getElement(*page-id*).value);

};
this.glossary.pageSelectHandler = function(e) {
if (e.key===*Enter*) {
globalThis.refreshPageInputValue();
globalThis.currentPageIndex = (this.pageInputValue - 1 + this.documentsTotal) % this.documentsTotal;
globalThis.refreshDocument();
}
};
this.glossary.removeNonAlphaNum = function(text) {
 var newText = **;
for (let i = 0; i*text.length; i=i+1) {
if (*abcdefghijklmnopqrstuvwxyz1234567890*.includes(text[i].toLowerCase()) ) {
newText = newText + text[i].toLowerCase();
continue;
}
newText = newText + * *;
}
newText = newText.split(* *).filter(x =* x.length * 0).join(* *);
return newText;

};
this.glossary.refreshSearchPhraseInputValue = function() {
globalThis.searchPhraseInputValue = globalThis.getElement(*search-phrase*).value.toLowerCase();

};
this.glossary.searchValue = function(phrase) {
 globalThis.searchResults = Object.keys(globalThis.documentSearch).filter(x =* x.includes(phrase));
if (globalThis.searchResults.length === 0) {
globalThis.setInputElement(*search-phrase*, phrase + * not found!*);
return;
}
globalThis.currentPageIndex = globalThis.documentSearch[globalThis.searchResults[0]];

};
this.glossary.searchPhraseHandler = function(e) {
if (e.key===*Enter*) {
globalThis.refreshSearchPhraseInputValue();
globalThis.searchValue(searchPhraseInputValue);
globalThis.refreshDocument();
}
};
this.glossary.pageRewriteHandler = function() {
globalThis.setInputElement(*page-id*, **);

};
this.glossary.showLink = function(link, text) {
 const linkHTML = **a href=\**+link+*\* target=\*_blank\* ** + text + * [...]*/a**;
this.references[text] = linkHTML;
return *

* + linkHTML + *

*;

};
this.glossary.showInlineLink = function(link, text) {
 const linkHTML = **a href=\**+link+*\* target=\*_blank\* ** + text + * [...]*/a**;
globalThis.references[text] = linkHTML;
return linkHTML;

};
this.glossary.addEvent = function(id, name, handler) {
 globalThis.getElement(id).addEventListener(name, handler);

};
this.glossary.getESEdition = function() {
 const array = [];
switch (true) {
case !Array.isArray:
return 3;
case !window.Promise:
return 5;
case !array.includes:
return 6;
case !**.padStart:
return 7;
case !Promise.prototype.finally:
return 8;
case !window.BigInt:
return 9;
case !Promise.allSettled:
return 10;
case !**.replaceAll:
return 11;
case !array.at:
return 12;
default:
return 13;
}

};
this.glossary.getESYear = function() {
 globalThis.edition = globalThis.getESEdition();
return {
3: 1999,
5: 2009
}[edition] || 2009 + edition;

};
this.glossary.ecmaScriptInfo = function() {
 return *Edition: ES* + getESEdition() + * | Year: * + globalThis.getESYear();

};
this.glossary.unsigned8BitIntegerArray = function(value) {
 return new TextEncoder(*utf-8*).encode(value);

};
this.glossary.getDataView = function(value) {
 return new DataView(value);

};
this.glossary.getSHA256HexesFromDataView = function(dataView) {
 let hexes = [];
for (let i = 0; i * dataView.byteLength; i += 4) {
hexes.push((*00000000* + dataView.getUint32(i).toString(16)).slice(-8));
}
return hexes.join(**);

};
this.glossary.sha256Hash = function(value) {
 return crypto.subtle.digest(*SHA-256*, unsigned8BitIntegerArray(value)).then(x =* {
let view = this.getDataView(x);
const hashValue = this.getSHA256HexesFromDataView(view);
return hashValue;
});

};
this.glossary.createBlock = function(heading, body) {
 const linkHeading = (* * + heading).slice(1).trim().toLowerCase().replace(/ /g, *-*);
var linkLocation = window.location.href;
if (linkLocation.includes(*#*)) {
linkLocation = linkLocation.split(*#*)[0];
}
linkLocation = linkLocation + *#* + linkHeading;
return **div**a id=** + linkHeading + ** href=** + linkLocation  + ****div class=*heading2*** + heading.trim() + **/a**/div*
* + body.trim() + *
*hr /**/div*
*;

};
this.glossary.createLinkBlock = function(heading, link, body) {
 const linkHeading = (* * + heading).slice(1).trim().toLowerCase().replace(/ /g, *-*);
var linkLocation = window.location.href;
if (linkLocation.includes(*#*)) {
linkLocation = linkLocation.split(*#*)[0];
}
linkLocation = linkLocation + *#* + linkHeading;
return **div**a id=** + linkHeading + ** href=** + linkLocation  + ****div class=*heading2**
#* + linkHeading + *
*/a**/div*
* + globalThis.showInlineLink(link, heading.trim()) + *
* + body.trim() + *
*hr /**/div*
*;

};
this.glossary.createScrollableDiv = function(fixedHeading, body) {
 return fixedHeading + **div class=*scrollable***+body+**/div**;

};
this.glossary.goToLocation = function() {

const urlString = String(this.window.location);

if (urlString.includes(*?*)) {
var paramString = urlString.split(*?*)[1];
var hashString = **;
if (paramString.includes(*#*)) {
hashString = *#* + paramString.split(*#*)[1];
paramString = paramString.split(*#*)[0];
}
const paramsArray = paramString.split(*&*);
var locationParams = {};

for (let i = 0; i * paramsArray.length; i++) {
   let kvpair = paramsArray[i].split(*=*);
   locationParams[kvpair[0]] = kvpair[1];
}

globalThis.currentPageIndex = this.documentIndex[locationParams[*page*]];
globalThis.refreshDocument();
if (hashString.length * 1) {
window.location.hash = hashString;
globalThis.getElement(hashString.slice(1)).scrollIntoView();
}
}


};
this.glossary.populateIndexes = function() {
 globalThis.documentsList.map((x, i) =* {
globalThis.documentIndex[x[5]] = i; 
});

globalThis.documentsList.map((x, i) =* {
const documentWordsRaw = x[0] + x[1]();
var documentWords = removeNonAlphaNum(documentWordsRaw);
globalThis.documentSearch[documentWords] = i;
});

};
this.glossary.postload = function() {
globalThis.refreshDocument();
globalThis.setDivElement(*page-total*, */ * + globalThis.documentsTotal);
globalThis.addEvent(*left-button*, *click*, globalThis.leftButtonHandler);
globalThis.addEvent(*right-button*, *click*, globalThis.rightButtonHandler);
globalThis.addEvent(*home-button*, *click*, globalThis.homeButtonHandler);
globalThis.addEvent(*page-id*, *keyup*, globalThis.pageSelectHandler);
globalThis.addEvent(*page-id*, *click*, globalThis.pageRewriteHandler);
globalThis.addEvent(*search-phrase*, *keyup*, globalThis.searchPhraseHandler);
globalThis.populateIndexes();
globalThis.goToLocation();
globalThis.refreshDocument();

};

console.log(*

*+String(Object.keys(this.glossary).length)+* functions loaded

*);

console.log(*

*+Object.keys(this.glossary).join(*\n*).trim() + *

*);

globalThis.postload();

async function main() {
globalThis.testA = await globalThis.sha256Hash(*a*);
}
main();



console.log(*

Initialization calls done

*);
this.evalglossary.getElement = *this.getElement = function(id) {
return document.getElementById(id);
};*;
this.evalglossary.getDocument = *this.getDocument = function(pageIndex) {
return globalThis.documentsList[pageIndex];
};*;
this.evalglossary.setDivElement = *this.setDivElement = function(id, value) {
globalThis.getElement(id).innerHTML = value;
};*;
this.evalglossary.setInputElement = *this.setInputElement = function(id, value) {
globalThis.getElement(id).value = value;
};*;
this.evalglossary.setDocument = *this.setDocument = function(document) {
globalThis.setDivElement(*document-header-2*, document[globalThis.headingColumnIndex]);
globalThis.setDivElement(*document-info*, document[globalThis.documentContentFunctionColumnIndex]());
globalThis.setInputElement(*page-id*, globalThis.currentPageIndex + 1);
};*;
this.evalglossary.refreshDocument = *this.refreshDocument = function() {
globalThis.setDocument(globalThis.getDocument(this.currentPageIndex));
};*;
this.evalglossary.acceptablePageIndexRange = *this.acceptablePageIndexRange = function(number) {
return (number + globalThis.documentsTotal) % globalThis.documentsTotal;
};*;
this.evalglossary.leftButtonHandler = *this.leftButtonHandler = function() {
globalThis.currentPageIndex = globalThis.acceptablePageIndexRange(globalThis.currentPageIndex - 1);
globalThis.refreshDocument();
};*;
this.evalglossary.rightButtonHandler = *this.rightButtonHandler = function() {
globalThis.currentPageIndex = globalThis.acceptablePageIndexRange(globalThis.currentPageIndex + 1);
globalThis.refreshDocument();
};*;
this.evalglossary.homeButtonHandler = *this.homeButtonHandler = function() {
 window.location = window.location.href.split(*javascript.html*)[0] + *javascript.html*;

};*;
this.evalglossary.refreshPageInputValue = *this.refreshPageInputValue = function() {
globalThis.pageInputValue = parseInt(globalThis.getElement(*page-id*).value);

};*;
this.evalglossary.pageSelectHandler = *this.pageSelectHandler = function(e) {
if (e.key===*Enter*) {
globalThis.refreshPageInputValue();
globalThis.currentPageIndex = (this.pageInputValue - 1 + this.documentsTotal) % this.documentsTotal;
globalThis.refreshDocument();
}
};*;
this.evalglossary.removeNonAlphaNum = *this.removeNonAlphaNum = function(text) {
 var newText = **;
for (let i = 0; i*text.length; i=i+1) {
if (*abcdefghijklmnopqrstuvwxyz1234567890*.includes(text[i].toLowerCase()) ) {
newText = newText + text[i].toLowerCase();
continue;
}
newText = newText + * *;
}
newText = newText.split(* *).filter(x =* x.length * 0).join(* *);
return newText;

};*;
this.evalglossary.refreshSearchPhraseInputValue = *this.refreshSearchPhraseInputValue = function() {
globalThis.searchPhraseInputValue = globalThis.getElement(*search-phrase*).value.toLowerCase();

};*;
this.evalglossary.searchValue = *this.searchValue = function(phrase) {
 globalThis.searchResults = Object.keys(globalThis.documentSearch).filter(x =* x.includes(phrase));
if (globalThis.searchResults.length === 0) {
globalThis.setInputElement(*search-phrase*, phrase + * not found!*);
return;
}
globalThis.currentPageIndex = globalThis.documentSearch[globalThis.searchResults[0]];

};*;
this.evalglossary.searchPhraseHandler = *this.searchPhraseHandler = function(e) {
if (e.key===*Enter*) {
globalThis.refreshSearchPhraseInputValue();
globalThis.searchValue(searchPhraseInputValue);
globalThis.refreshDocument();
}
};*;
this.evalglossary.pageRewriteHandler = *this.pageRewriteHandler = function() {
globalThis.setInputElement(*page-id*, **);

};*;
this.evalglossary.showLink = *this.showLink = function(link, text) {
 const linkHTML = **a href=\**+link+*\* target=\*_blank\* ** + text + * [...]*/a**;
this.references[text] = linkHTML;
return \*

\* + linkHTML + \*

\*;

};*;
this.evalglossary.showInlineLink = *this.showInlineLink = function(link, text) {
 const linkHTML = **a href=\**+link+*\* target=\*_blank\* ** + text + * [...]*/a**;
globalThis.references[text] = linkHTML;
return linkHTML;

};*;
this.evalglossary.addEvent = *this.addEvent = function(id, name, handler) {
 globalThis.getElement(id).addEventListener(name, handler);

};*;
this.evalglossary.getESEdition = *this.getESEdition = function() {
 const array = [];
switch (true) {
case !Array.isArray:
return 3;
case !window.Promise:
return 5;
case !array.includes:
return 6;
case !**.padStart:
return 7;
case !Promise.prototype.finally:
return 8;
case !window.BigInt:
return 9;
case !Promise.allSettled:
return 10;
case !**.replaceAll:
return 11;
case !array.at:
return 12;
default:
return 13;
}

};*;
this.evalglossary.getESYear = *this.getESYear = function() {
 globalThis.edition = globalThis.getESEdition();
return {
3: 1999,
5: 2009
}[edition] || 2009 + edition;

};*;
this.evalglossary.ecmaScriptInfo = *this.ecmaScriptInfo = function() {
 return *Edition: ES* + getESEdition() + * | Year: * + globalThis.getESYear();

};*;
this.evalglossary.unsigned8BitIntegerArray = *this.unsigned8BitIntegerArray = function(value) {
 return new TextEncoder(*utf-8*).encode(value);

};*;
this.evalglossary.getDataView = *this.getDataView = function(value) {
 return new DataView(value);

};*;
this.evalglossary.getSHA256HexesFromDataView = *this.getSHA256HexesFromDataView = function(dataView) {
 let hexes = [];
for (let i = 0; i * dataView.byteLength; i += 4) {
hexes.push((*00000000* + dataView.getUint32(i).toString(16)).slice(-8));
}
return hexes.join(**);

};*;
this.evalglossary.sha256Hash = *this.sha256Hash  =  async  = function(value) {
 return crypto.subtle.digest(*SHA-256*, unsigned8BitIntegerArray(value)).then(x =* {
let view = this.getDataView(x);
const hashValue = this.getSHA256HexesFromDataView(view);
return hashValue;
});

};*;
this.evalglossary.createBlock = *this.createBlock = function(heading, body) {
 const linkHeading = (* * + heading).slice(1).trim().toLowerCase().replace(/ /g, *-*);
var linkLocation = window.location.href;
if (linkLocation.includes(*#*)) {
linkLocation = linkLocation.split(*#*)[0];
}
linkLocation = linkLocation + *#* + linkHeading;
return \**div**a id=*\* + linkHeading + \** href=*\* + linkLocation  + \****div class=*heading2**\* + heading.trim() + \**/a**/div*
\* + body.trim() + \*
*hr /**/div*
\*;

};*;
this.evalglossary.createLinkBlock = *this.createLinkBlock = function(heading, link, body) {
 const linkHeading = (* * + heading).slice(1).trim().toLowerCase().replace(/ /g, *-*);
var linkLocation = window.location.href;
if (linkLocation.includes(*#*)) {
linkLocation = linkLocation.split(*#*)[0];
}
linkLocation = linkLocation + *#* + linkHeading;
return \**div**a id=*\* + linkHeading + \** href=*\* + linkLocation  + \****div class=*heading2**
#\* + linkHeading + \*
*/a**/div*
\* + globalThis.showInlineLink(link, heading.trim()) + \*
\* + body.trim() + \*
*hr /**/div*
\*;

};*;
this.evalglossary.createScrollableDiv = *this.createScrollableDiv = function(fixedHeading, body) {
 return fixedHeading + \**div class=*scrollable**\*+body+\**/div*\*;

};*;
this.evalglossary.goToLocation = *this.goToLocation = function() {

const urlString = String(this.window.location);

if (urlString.includes(*?*)) {
var paramString = urlString.split(*?*)[1];
var hashString = **;
if (paramString.includes(*#*)) {
hashString = *#* + paramString.split(*#*)[1];
paramString = paramString.split(*#*)[0];
}
const paramsArray = paramString.split(*&*);
var locationParams = {};

for (let i = 0; i * paramsArray.length; i++) {
   let kvpair = paramsArray[i].split(*=*);
   locationParams[kvpair[0]] = kvpair[1];
}

globalThis.currentPageIndex = this.documentIndex[locationParams[*page*]];
globalThis.refreshDocument();
if (hashString.length * 1) {
window.location.hash = hashString;
globalThis.getElement(hashString.slice(1)).scrollIntoView();
}
}


};*;
this.evalglossary.populateIndexes = *this.populateIndexes = function() {
 globalThis.documentsList.map((x, i) =* {
globalThis.documentIndex[x[5]] = i; 
});

globalThis.documentsList.map((x, i) =* {
const documentWordsRaw = x[0] + x[1]();
var documentWords = removeNonAlphaNum(documentWordsRaw);
globalThis.documentSearch[documentWords] = i;
});

};*;
this.evalglossary.postload = *this.postload = function() {
globalThis.refreshDocument();
globalThis.setDivElement(*page-total*, */ * + globalThis.documentsTotal);
globalThis.addEvent(*left-button*, *click*, globalThis.leftButtonHandler);
globalThis.addEvent(*right-button*, *click*, globalThis.rightButtonHandler);
globalThis.addEvent(*home-button*, *click*, globalThis.homeButtonHandler);
globalThis.addEvent(*page-id*, *keyup*, globalThis.pageSelectHandler);
globalThis.addEvent(*page-id*, *click*, globalThis.pageRewriteHandler);
globalThis.addEvent(*search-phrase*, *keyup*, globalThis.searchPhraseHandler);
globalThis.populateIndexes();
globalThis.goToLocation();
globalThis.refreshDocument();

};*;
`;

console.log(`

Loaded Functions MD

`);

};
