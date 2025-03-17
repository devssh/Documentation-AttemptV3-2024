

integrity = {
"sha-256-json-integrity-check": "",
"alt-sha-256-check": "",
"acceptable-history-sha-256": {
"": "version-1",
"": "version-1 without newline"
}
"json-serializer-example": """
import json
from html_tag_name import html_tags_base
with open("html_tag_name.json", "w") as file:
  html_tags_base["serialized"] = True
  file.writelines(json.dumps(html_tags_base))
  file.flush()
  file.close()
""",
"json-deserialize-example": """

""",

"sha-256-check": """
Run the following to compute sha-256
from hashlib import sha256
with open("html_tag_name.json", "r") as file:
  data = "".join(file.readlines()).strip() + "\n"
  print(sha256(json_data.encode("utf-8")).hexdigest())
""",

"sha-256-check-description": "Convert the json_data into byte stream of utf-8 encoding. Run the sha-256 digest and convert binary to hexadecimal. Save the value in sha-256-json-integrity-check property.",

"alt-sha-256-check": """
cat html_tag_name.json | sha256sum
sha256sum html_tag_name.json
"""
}


html_tags_base = {
"about": "This is a python dict{map} of basic HTML5 Living Standard tags and their attributes. It is not serialized as part of marshalling process to transfer or store memory between nodes for remote invocation and is human readable and editable. Consult an HTML usage document for example, MDN docs for SpiderMonkey implementation, WebIDL for behaviour guidelines and browser implementation guidelines on Chromium, SpiderMonkey, JavaScriptCore. Extra Markup language tags that are by default in browser can be found in references under SGML, XHTML(W3C), XML based ML like MathML",
"serialized": False,
"date": "July 2024",
"html-tag-format": {
"name": "html-tag-name",
"description": "html-tag-description",
"attributes": [
{
"attribute-name": "attribute-name-n",
"attribute-description": "Description of attribute and common values."
}
],
"attribute-count": 10,
"deprecated": False,
"completed": True,
},
"html-tag-count": 143,
"deprecated-tag-count": 0,
"valid-tag-count": 0,
"attribute-count": 0,
"line-count": 0,
"length": 0,
"page-count": 0,
"reading-time": "At least x minutes at 100 words per minute for cover to cover",
"deprecated-tags": [],
"valid-tags": [],
"attribute-set": [],
"py-tag-access": "python3\nfrom html_tag_name import html_tags_base\nhtml_tags_base[\"html-tags\"][\"a\"]",
"py-tag-access-description": "Print the py-tag-access property of html_tags and run it on terminal.",
"json-tags-description": "Serialized value as .json file. Import it with any json deserializer in any language.",
"completed": False,
"html-tags": {
"*": {
"name": "*",
"description": "Global attributes that are available for every HTML tag. Lookup HTML global attributes and global event attributes. HTML tags are divided into two main categories - display category and input/prompt/forms from user category. Some input attributes are considered global attributes as they can be used on most input tags, textareas, select tags and other such tags for user input.",
"attributes": [
{
"attribute-name": "accept",
"attribute-description": "Restrict an input element on acceptable values. Comma separate values of extension types. Values: video/*|image/png|image/jpeg|.doc|.docx"
},
{
"attribute-name": "accesskey",
"attribute-description": "Shortcut key character to activate or focus on HTML tag. Proceed with caution."
},
{"attribute-name": "aria-*",
"attribute-description": "Contains aria tags for accessibility."
},
{
"attribute-name": "autocapitalize",
"attribute-description": "Capitalize on mobile device virtual keyboard inputs. Values: none/off|on/sentences"
},
{
"attribute-name": "autocomplete",
"attribute-description": "Autocomplete status of input element and which list of options can suggest. Values: on|off|name_of_id"
},
{
"attribute-name": "autofocus",
"attribute-description": "Focus an element and scroll to bring into visibility on load. Unary."
},
{
"attribute-name": "capture",
"attribute-description": "Allows input of new file as captured by camera. user refers to front camera. environment refers to rear camera. Values: user|environment"
},
{
"attribute-name": "class",
"attribute-description": "Stylesheet class name for the element. Multiple class names separated by space."
},
{
"attribute-name": "contenteditable",
"attribute-description": "Allows editing of paragraphs having text content by user. Values: true|false"
},
{
"attribute-name": "crossorigin",
"attribute-description": "Enumerated values are provided for security of assets. Values: anonymous|use-credentials|\"\""
},
{
"attribute-name": "data-*",
"attribute-description": "Embed custom potentially private data attributes on HTML to add string data to retrieve without network request"
},
{
"attribute-name": "dir",
"attribute-description": "Text direction of the content. Values: ltr|rtl|auto"
},
{
"attribute-name": "dirname",
"attribute-description": "Text direction. Values: ltr|rtl|auto"
},
{
"attribute-name": "disabled",
"attribute-description": "Disable an element's mutability, focusability, submittability. Unary."
},
{
"attribute-name": "draggable",
"attribute-description": "Allows dragging and dropping of element. ondrag event. Values: true|false|auto"
},
{
"attribute-name": "elementtiming",
"attribute-description": "Element is tagged for performance with this label."
},
{
"attribute-name": "enterkeyhint",
"attribute-description": "Changes the enter key on virtual keyboard. Values: done|enter|go|next|previous|search|send"
},
{
"attribute-name": "exportparts",
"attribute-description": "Export one or more parts from the shadow DOM separated by comma with modifier."
},
{
"attribute-name": "for",
"attribute-description": "Labels can influence the key value of input element in form by binding with for attribute."
},
{
"attribute-name": "hidden",
"attribute-description": "Hides the DOM element in Shadow DOM till a condition is satisfied and marks it as irrelevant currently. Semantically different from CSS hidden using display and visibility. Unary."
},
{
"attribute-name": "id",
"attribute-description": "Provide a unique ID to tag element for stylesheet or JS text update."
},
{
"attribute-name": "inert",
"attribute-description": "Make an element not interactive, unfocusable, unclickable and only for display. Unary."
},
{
"attribute-name": "inputmode",
"attribute-description": "Change the inputmode layout of a virtual keyboard. Values: numeric|email"
},
{
"attribute-name": "is",
"attribute-description": "Use a defined custom element to access JS. <p is=\"word-count\"></p>"
},
{
"attribute-name": "itemid",
"attribute-description": "Global id like isbn numbers. Many web pages exist solely to itemize a large database."
},
{
"attribute-name": "itemprop",
"attribute-description": "Add key value properties to the element. The key is in itemprop. The value can be attribute-name value or the content of element."
},
{
"attribute-name": "itemref",
"attribute-description": "Link a sibling itemid that is not a parent or child of current itemscope."
},
{
"attribute-name": "itemscope",
"attribute-description": "Collect the itemprop inside this container to represent one item with schema of itemtype. Unary."
},
{
"attribute-name": "itemtype",
"attribute-description": "Microdata related global attributes starting with item. Itemtype value is the url of XML schema."
},
{
"attribute-name": "lang",
"attribute-description": "Contains language tag with subtags. Values: en-GB|fr|ru"
},
{
"attribute-name": "max",
"attribute-description": "Maximum value an input can accept for numbers, dates etc."
},
{
"attribute-name": "maxlength",
"attribute-description": "Maximum length an input can accept for strings."
},
{
"attribute-name": "min",
"attribute-description": "Minimum value an input can accept for numbers, dates etc."
},
{
"attribute-name": "minlength",
"attribute-description": "Minimum length an input can accept for strings."
},
{
"attribute-name": "multiple",
"attribute-description": "Allows a select element or equivalent inputs like datalists to select multiple options. Unary."
},
{
"attribute-name": "nonce",
"attribute-description": "Cryptographic nonce on a script tag for example with a value to validate integrity."
},
{
"attribute-name": "part",
"attribute-description": "Used to assign part id to be exported from shadow DOM"
},
{
"attribute-name": "pattern",
"attribute-description": "Provide a Regular Expression for input."
},
{
"attribute-name": "placeholder",
"attribute-description": "Provide a placeholder text to prompt a default value on input the user should provide."
},
{
"attribute-name": "popover",
"attribute-description": "Assign this container element to popover when it's id is a popovertarget. Unary."
},
{
"attribute-name": "readonly",
"attribute-description": "Turn off the mutability of an input and make it not editable. Unary."
},
{
"attribute-name": "rel",
"attribute-description": "Relationship between the linked document and current document. Values: alternate|author|bookmark|canonical|dns-prefetch|external|expect|help|icon|license|manifest|me|modulepreload|next|nofollow|noopener|noreferrer|opener|pingback|preconnect|prefetch|preload|prerender|prev|privacy-policy|search|stylesheet|tag|terms-of-service"
},
{
"attribute-name": "required",
"attribute-description": "Must submit this input for the form to be submittable. Unary."
},
{
"attribute-name": "role",
"attribute-description": "Aria roles for semantic meaning to content. Values: Many role types"
},
{
"attribute-name": "size",
"attribute-description": "Limit the display size of select input and equivalents. Value is a number indicating visible options."
},
{
"attribute-name": "slot",
"attribute-description": "Used with a custom tag like element-details tag inside template tag to create fragments that can be used."
},
{
"attribute-name": "spellcheck",
"attribute-description": "Spellcheck an element for grammar and spelling. Values: true|false"
},
{
"attribute-name": "step",
"attribute-description": "Step size of the input element."
},
{
"attribute-name": "style",
"attribute-description": "Apply a CSS style."
},
{
"attribute-name": "tabindex",
"attribute-description": "Define a custom Tab key sequential order for element focus."
},
{
"attribute-name": "title",
"attribute-description": "Multiline title for every tag."
},
{
"attribute-name": "translate",
"attribute-description": "Specify whether the text is appropriate for translation and widely not supported. Values: yes|no"
}
],
"attribute-count": 52,
"deprecated": False,
"completed": True
},

"!--": {
"name": "!--",
"description": "Used in angle brackets to write comments which will not be displayed. <!-- comment -->",
"attributes": [],
"attribute-count": 0,
"deprecated": False,
"completed": True
},

"!DOCTYPE": {
"name": "!DOCTYPE",
"description": "Used for !DOCTYPE HTML declarations to mark the schema(and DTD) of HTML document to browser.",
"attributes": [],
"attribute-count": 0,
"deprecated": False,
"completed": True
},

"a": {
"name": "a",
"description": "Anchor tag used for hyperlinks.",
"attributes": [
{
"attribute-name": "download",
"attribute-description": "Adding this attribute will download the URL. Unary."
},
{
"attribute-name": "href",
"attribute-description": "Contains a value of the destination URL."
},
{
"attribute-name": "hreflang",
"attribute-description": "Two letter code to specify the language of the link destination. Values: en"
},
{
"attribute-name": "media",
"attribute-description": "A list of devices, modifier and values that link works on. Grid, resolution dpi, height, width, all, screen, print with and to combine devices."
},
{
"attribute-name": "ping",
"attribute-description": "Monitoring or tracking URL to be pinged in background when link is clicked."
},
{
"attribute-name": "referrerpolicy",
"attribute-description": "How much of the referrer to send on link follow which affects advertisement tracking for example. Values: no-referrer|no-referrer-when-downgrade|origin|origin-when-cross-origin|same-origin|same-origin-when-cross-origin|unsafe-url"
},
{
"attribute-name": "rel",
"attribute-description": "Relationship between the current document and destination document. nofollow is for preventing spider following paid leads and corrupting measurement. Values: alternate|author|bookmark|external|help|license|next|nofollow|noopener|noreferrer|prev|search|tag"
},
{
"attribute-name": "shape",
"attribute-description": "Deprecated like name, coords, rev, charset. used to be for image map having link."
},
{
"attribute-name": "target",
"attribute-description": "Specifies modifier on how to open link. Values: _blank|_parent|_self|_top"
}
],
"attribute-count": 9,
"deprecated": False,
"completed": True
},

"abbr": {
"name": "abbr",
"description": "Defines an abbreviation. <abbr title=\"Automatic Teller Machine\">ATM</abbr>",
"attributes": [],
"attribute-count": 0,
"deprecated": False,
"completed": True
},

"acronym": {
"name": "acronym",
"description": "Deprecated. <acronym title=\"Automatic Teller Machine\">ATM</acronym>",
"attributes": [],
"attribute-count": 0,
"deprecated": True,
"completed": True
},

"address": {
"name": "address",
"description": "Container tag for contact information like emails, names, phone, links",
"attributes": [],
"attribute-count": 0,
"deprecated": False,
"completed": True
},

"applet": {
"name": "applet",
"description": "Deprecated. Used to be for the popular HTML4 features to include embedded applets. Most apps now have their own frontend not related to HTML, CSS or JS anyway.",
"attributes": [],
"attribute-count": 0,
"deprecated": True,
"completed": True
},

"area": {
"name": "area",
"description": "Used to define an areamap in an image for links/click/events. The img tag is linked with usemap attribute. Map tag is container for area tags.",
"attributes": [
{
"attribute-name": "alt",
"attribute-description": "Alternate text to display"
},
{
"attribute-name": "coords",
"attribute-description": "Can accept params for example 4 comma separated numbers for rectangles marking the opposite points x1,y1,x2,y2 or for circle the position and radius as 3 params x1,y1,radius"
},
{
"attribute-name": "download",
"attribute-description": "Anchor tag attribute."
},
{
"attribute-name": "href",
"attribute-description": "Anchor tag attribute."
},
{
"attribute-name": "media",
"attribute-description": "Anchor tag media."
},
{
"attribute-name": "ping",
"attribute-description": "Anchor tag attribute."
},
{
"attribute-name": "referrerpolicy",
"attribute-description": "Anchor tag attribute."
},
{
"attribute-name": "rel",
"attribute-description": "Anchor tag attribute."
},
{
"attribute-name": "shape",
"attribute-description": "Deprecated. Anchor tag attribute."
},
{
"attribute-name": "target",
"attribute-description": "Anchor tag attribute."
}
],
"attribute-count": 10,
"deprecated": False,
"completed": True
},

"article": {
"name": "article",
"description": "An article with independent content. A page can have multiple article tags inside a main tag. Semantically independent sources like in news, blogs, different companies and websites, different authors etc.",
"attributes": [],
"attribute-count": 0,
"deprecated": False,
"completed": True
},

"aside": {
"name": "aside",
"description": "Used to define the sidebar in a page that includes anything not the main semantic content of the page. The indirect related content around the main content. On a side note.",
"attributes": [],
"attribute-count": 0,
"deprecated": False,
"completed": True
},

"audio": {
"name": "audio",
"description": "Container for audio sources with the source tag.",
"attributes": [
{
"attribute-name": "autoplay",
"attribute-description": "Start playing the auto as soon as ready. Unary."
},
{
"attribute-name": "controls",
"attribute-description": "Display controls to audio sources. Unary."
},
{
"attribute-name": "crossorigin",
"attribute-description": "Values: anonymous|use-credentials"
},
{
"attribute-name": "loop",
"attribute-description": "Should audio loop. Unary."
},
{
"attribute-name": "muted",
"attribute-description": "Should audio start muted. Unary."
},
{
"attribute-name": "preload",
"attribute-description": "Should the audio be loaded early. Values: auto|metadata|none"
},
{
"attribute-name": "src",
"attribute-description": "Can add source here or in source tag inside audio tag as a container."
}
],
"attribute-count": 7,
"deprecated": False,
"completed": True
},

"b": {
"name": "b",
"description": "b tag - Bold the text. Bring attention to tag content. Use em tag for strong emphasis. CSS customizable effect. Bold is preferred to bring attention. Emphasis is to reiterate. b tag is for something that should semantically look different.",
"attributes": [],
"attribute-count": 0,
"deprecated": False,
"completed": True
},

"base": {
"name": "base",
"description": "Base url for all urls in the page in the head tag. Makes all anchor tags shorter.",
"attributes": [
{
"attribute-name": "href",
"attribute-description": "Base url. Example \"https://www.example.com/\" "
},
{
"attribute-name": "target",
"attribute-description": "Same as anchor tag"
}
],
"attribute-count": 2,
"deprecated": False,
"completed": True
},

"basefont": {
"name": "basefont",
"description": "Deprecated. Base font for the entire document. Use body tag CSS.",
"attributes": [],
"attribute-count": 0,
"deprecated": True,
"completed": True
},

"bdi": {
"name": "bdi",
"description": "Bi-Directional Isolation of usernames, real names, or any other content for text direction running ltr, rtl, ttb, btt.",
"attributes": [],
"attribute-count": 0,
"deprecated": False,
"completed": True
},

"bdo": {
"name": "bdo",
"description": "Bi-Directional Override-text will override the default directionality of text.",
"attributes": [],
"attribute-count": 0,
"deprecated": False,
"completed": True
},

"big": {
"name": "big",
"description": "Deprecated. Big text. Tags that can be replaced with CSS were deprecated after HTML4 in HTML5.",
"attributes": [],
"attribute-count": 0,
"deprecated": True,
"completed": True
},

"blockquote": {
"name": "blockquote",
"description": "An extended multiline quotation with possibly citation.",
"attributes": [
{
"attribute-name": "cite",
"attribute-description": "Cite the source url to some affiliated website of the quotation's purpose."
}
],
"attribute-count": 1,
"deprecated": False,
"completed": True
},

"body": {
"name": "body",
"description": "Body tag to frameset the document window absolute starting position.",
"attributes": [
{
"attribute-name": "background",
"attribute-description": "Deprecated. Use CSS."
},
{
"attribute-name": "bgcolor",
"attribute-description": "Deprecated. Use CSS."
}
],
"attribute-count": 2,
"deprecated": False,
"completed": True
},

"br": {
"name": "br",
"description": "Break line. The p tag does not accept line breaks, line feeds and newlines inside unless a br tag is used.",
"attributes": [],
"attribute-count": 0,
"deprecated": False,
"completed": True
},

"button": {
"name": "button",
"description": "Clickable button. Has a special interface.",
"attributes": [
{
"attribute-name": "disabled",
"attribute-description": "Unary."
},
{
"attribute-name": "form",
"attribute-description": "Specify form id. Can be ignored if inside form tag as container."
},
{
"attribute-name": "formaction",
"attribute-description": "A URL that can override formaction."
},
{
"attribute-name": "formenctype",
"attribute-description": "Values: application/x-www-form-urlencoded|multipart/form-data|text/plain"
},
{
"attribute-name": "formmethod",
"attribute-description": "Use get for side-effect free forms. A side effect form might be search. Dialog is a modal close form that does not actually submit anything to external API. Values: get|post|dialog"
},
{
"attribute-name": "formnovalidate",
"attribute-description": "Can stop form validation."
},
{
"attribute-name": "formtarget",
"attribute-description": "The same as anchor tag target."
},
{
"attribute-name": "name",
"attribute-description": "Add a key that will be sent with button value as key-value pair on submit."
},
{
"attribute-name": "type",
"attribute-description": "Submit will send data. Reset button. Button value means event listener will handle. Values: submit|reset|button"
},
{
"attribute-name": "value",
"attribute-description": "Value to be appended with name in addition to form data."
}
],
"attribute-count": 10,
"deprecated": False,
"completed": True
},

"canvas": {
"name": "canvas",
"description": "Canvas tag for painting. Read Canvas API spec book.",
"attributes": [
{
"attribute-name": "height",
"attribute-description": "Height."
},
{
"attribute-name": "width",
"attribute-description": "Width."
}
],
"attribute-count": 2,
"deprecated": False,
"completed": True
},

"caption": {
"name": "caption",
"description": "Caption tables above or below them. Use figcaption for images. <table><caption style=\"text-align:top|left|right|bottom\">Heading</caption><tr>...</tr></table>",
"attributes": [
{
"attribute-name": "align",
"attribute-description": "Deprecated. Use text-align CSS. Values: top|left|right|bottom"
}
],
"attribute-count": 1,
"deprecated": False,
"completed": True
},

"center": {
"name": "center",
"description": "Deprecated. Used to center div. Use CSSOM instead.",
"attributes": [],
"attribute-count": 0,
"deprecated": True,
"completed": True
},

"cite": {
"name": "cite",
"description": "Citation from another source. Use cite tag as container. Add URL or text. Citations include creative works like books, social media posts, programs, legal case reports, unique identifier numbers, tweets, blogs, plays, research papers etc",
"attributes": [],
"attribute-count": 0,
"deprecated": False,
"completed": True
},

"code": {
"name": "code",
"description": "Display code in this tag. Feel free to modify the code tag CSS.",
"attributes": [],
"attribute-count": 0,
"deprecated": False,
"completed": True
},

"col": {
"name": "col",
"description": "Column in a colgroup container tag in a table tag after the caption tag. Use the class attribute to set CSS class over the entire column in subsequent td inside tr tags.",
"attributes": [
{
"attribute-name": "align",
"attribute-description": "Deprecated. Use the class attribute to set a class having the width and alignment CSS."
},
{
"attribute-name": "bgcolor",
"attribute-description": "Deprecated. Use the class attribute to set a class having the bgcolor CSS. Can also use style attribute for inline."
},
{
"attribute-name": "span",
"attribute-description": "How many columns does the current col CSS span over. Integer as string."
}
],
"attribute-count": 3,
"deprecated": False,
"completed": True
},

"colgroup": {
"name": "colgroup",
"description": "Used as container to group the column stylesheets in a table. Used to set column width and column color in a table using col tag.",
"attributes": [
{
"attribute-name": "align",
"attribute-description": "Deprecated."
},
{
"attribute-name": "bgcolor",
"attribute-description": "Deprecated."
},
{
"attribute-name": "span",
"attribute-description": "It is not permitted if using col tag inside colgroup as container."
}
],
"attribute-count": 3,
"deprecated": False,
"completed": True
},

"content": {
"name": "content",
"description": "Deprecated. Use the main tag instead. No need to mix syntax of page header, footer, body, content with semantic content/main tag.",
"attributes": [],
"attribute-count": 0,
"deprecated": True,
"completed": True
},

"contenteditable": {
"name": "contenteditable",
"description": "Deprecated. Now is a global attribute. It was part of WYSIWYG for text editor.",
"attributes": [
{
"attribute-name": "enterkeyhint",
"attribute-description": "Enter key hint on virtual keyboards. Check global attributes."
},
{
"attribute-name": "inputmode",
"attribute-description": "Virtual keyboard type like numeric, email. Check global attributes."
}
],
"attribute-count": 2,
"deprecated": True,
"completed": True
},

"data": {
"name": "data",
"description": "Add metadata to a li tag as container. Data is only for machine readable use like JS or search engine or browser. Is an alternate value of the value displayed.",
"attributes": [
{
"attribute-name": "value",
"attribute-description": "Add the metadata here."
}
],
"attribute-count": 1,
"deprecated": False,
"completed": True
},

"datalist": {
"name": "datalist",
"description": "Use as container for option tags. A datalist has id attribute. <input list=\"datalistid\" />. Input tag can suggest options from datalist on typing. It can filter the datalist with current value and allow other values not in datalist. Datalist is a suggestion for autocomplete typing prompt.",
"attributes": [],
"attribute-count": 0,
"deprecated": False,
"completed": True
},

"dd": {
"name": "dd",
"description": "Description Details of the Description Term in the Description List. <dl><dt>Term</dt><dd>Long definition.</dd>...</dl>",
"attributes": [],
"attribute-count": 0,
"deprecated": False,
"completed": True
},

"del": {
"name": "del",
"description": "Strike through a deleted text with del tag and use ins tag to insert better text to signify update. Del tag is usually used for html static page updates(useful for search engines). For strikethrough CSS use CSS or s tag.",
"attributes": [
{
"attribute-name": "cite",
"attribute-description": "URL to a changelog."
},
{
"attribute-name": "datetime",
"attribute-description": "YYYY-MM-DDThh:mm:ssTZD format of when the change occurred."
}
],
"attribute-count": 2,
"deprecated": False,
"completed": True
},

"details": {
"name": "details",
"description": "Container for summary tag as heading and expandable, hideable multiline content. Anything not in summary tag can be opened/closed. Show/hide.",
"attributes": [
{
"attribute-name": "open",
"attribute-description": "Can be set to true string to mark it as permanently open. Do not use false. Instead remove open unary attribute."
}
],
"attribute-count": 1,
"deprecated": False,
"completed": True
},

"dfn": {
"name": "dfn",
"description": "A term that is going to be defined. There are 4 ways to use it. 1. <p><dfn>HTML</dfn> is a markup language.</p> The ancestor of this content is supposed to have HTML definition or perhaps it's the page main content. 2. <dfn title=\"Hyper Text Markup Language\">HTML</dfn> is a markup language. 3. <dfn><abbr title=\"Hyper Text M.. L..\">HTML</abbr></dfn> Can also use dd dt dl instead of abbr. 4. <dfn id=\"html-def\">HTML</dfn> ... Somewhere else in page ... <a href=\"#html-def\">What is HTML?</a>",
"attributes": [],
"attribute-count": 0,
"deprecated": False,
"completed": True
},

"dialog": {
"name": "dialog",
"description": "A modal or non-modal dialog that takes focus and can be dismissed(modal) or interacted with or unable to be dismissed(non-modal). Just use a new page as alternative.",
"attributes": [
{
"attribute-name": "open",
"attribute-description": "Same as details open. Unary."
}
],
"attribute-count": 1,
"deprecated": False,
"completed": True
},

"dir": {
"name": "dir",
"description": "Deprecated. Used to contain files and folders UI. Use list tags and CSS now and customize own.",
"attributes": [],
"attribute-count": 0,
"deprecated": True,
"completed": True
},

"div": {
"name": "div",
"description": "Container for a block(multiline independent screen space) of the HTML. Use for injecting classes or js through id. Most popular and reused tag.",
"attributes": [],
"attribute-count": 0,
"deprecated": False,
"completed": True
},

"dl": {
"name": "dl",
"description": "Description List as container for one or more Description Terms and Description Details.",
"attributes": [],
"attribute-count": 0,
"deprecated": False,
"completed": True
},

"dt": {
"name": "dt",
"description": "Description Term as heading in the Description List going to be explained in Description Details. Use as alternative to abbr tag and details summary tag.",
"attributes": [],
"attribute-count": 0,
"deprecated": False,
"completed": True
},

"em": {
"name": "em",
"description": "Emphasized text. Customize the CSS to your liking. Used to signify reiteration, stress emphasis. Something semantically pronounced differently from usual.",
"attributes": [],
"attribute-count": 0,
"deprecated": False,
"completed": True
},

"embed": {
"name": "embed",
"description": "Embed an external resource like a plug in, webpage, picture, A/V media",
"attributes": [
{
"attribute-name": "height",
"attribute-description": "Pixel height."
},
{
"attribute-name": "src",
"attribute-description": "URL."
},
{
"attribute-name": "type",
"attribute-description": "media_type Values: image/jpg|text/html|video/mkv"
},
{
"attribute-name": "width",
"attribute-description": "Pixel width."
}
],
"attribute-count": 4,
"deprecated": False,
"completed": True
},

"fencedframe": {
"name": "fencedframe",
"description": "Experimental. Restrict an iframe/embed communication in a way that conforms to a standard of privacy preserving user's advertisement feedback.",
"attributes": [],
"attribute-count": 0,
"deprecated": False,
"completed": True
},

"fieldset": {
"name": "fieldset",
"description": "Set the form fieldset. Forms can have multiple fieldset containers which group legend, label and input tags under them. This helps divide a big form into fragments for a single submit.",
"attributes": [
{
"attribute-name": "disabled",
"attribute-description": "See global attributes. Unary. "
},
{
"attribute-name": "form",
"attribute-description": "form_id"
},
{
"attribute-name": "name",
"attribute-description": "fieldset name."
}
],
"attribute-count": 3,
"deprecated": False,
"completed": True
},

"figcaption": {
"name": "figcaption",
"description": "Figure captions above or below an image or figure. A figure is a marked diagram different from any ordinary image. Can be used for ordinary image as well. To be used in figure container with img tag. Figure captions represent an organisational schematic in research papers by topic. Fig1.1 1.2 1.3 2.1 etc.",
"attributes": [],
"attribute-count": 0,
"deprecated": False,
"completed": True
},

"figure": {
"name": "figure",
"description": "A container for img tags and their figcaptions.", 
"attributes": [],
"attribute-count": 0,
"deprecated": False,
"completed": True
},

"font": {
"name": "font",
"description": "Set the font of a text. Deprecated. Use CSS.",
"attributes": [
{
"attribute-name": "color",
"attribute-description": "Deprecated. Short for if only color was to be used for syntax highlight."
}
],
"attribute-count": 1,
"deprecated": True,
"completed": True
},

"footer": {
"name": "footer",
"description": "Page footer. Not table footer. A page can have multiple footer. Use address tag in footer for contact info. Footer can have sitemap, back to top link, related pages, copyright information, author info.",
"attributes": [],
"attribute-count": 0,
"deprecated": False,
"completed": True
},

"form": {
"name": "form",
"description": "Form requiring user input. Form tag is container for building a network request from an API endpoint.",
"attributes": [
{
"attribute-name": "accept",
"attribute-description": "Deprecated. Instead use accept on input tags for the acceptable content_type. Used to comma separate the form content_type to disallow certain input."
},
{
"attribute-name": "accept-charset",
"attribute-description": "Acceptable character set. Since character sets are the primary in security by limiting scope."
},
{
"attribute-name": "action",
"attribute-description": "URL. API endpoint location to send form-data."
},
{
"attribute-name": "autocomplete",
"attribute-description": "See search autocomplete. Regular input tags can have history with this to help user not enter same input manually. Values: on|off"
},
{
"attribute-name": "enctype",
"attribute-description": "Only for post request. Encoding type. Multipart-form-data is most popular. Text-plain can be used if you're already encrypting it yourself or data is public/unimportant anyway. Values: application/x-www-form-urlencoded|multipart-form-data|text-plain"
},
{
"attribute-name": "method",
"attribute-description": "Has delete and update as well as other REST api methods in HTML4 if you're a java/oracle/apache fan for peak HTML flexibility in HTML4. Values: get|post|dialog"
},
{
"attribute-name": "name",
"attribute-description": "Form name."
},
{
"attribute-name": "novalidate",
"attribute-description": "Unary. Don't validate the form. Can be overriden if input or button have validate attribute."
},
{
"attribute-name": "target",
"attribute-description": "See anchor tag aka a tag target."
}
],
"attribute-count": 9,
"deprecated": False,
"completed": True
},

"frame": {
"name": "frame",
"description": "Deprecated. Used to be a frame in frameset.",
"attributes": [],
"attribute-count": 0,
"deprecated": True,
"completed": True
},

"frameset": {
"name": "frameset",
"description": "Deprecated. Used to be container for a photo gallery like display of webpages.",
"attributes": [],
"attribute-count": 0,
"deprecated": True,
"completed": True
},

"h1": {
"name": "h1",
"description": "H1 heading tag. Can customise the CSS. Useful for indexes and LATEX style. Recommended for Website Title.",
"attributes": [],
"attribute-count": 0,
"deprecated": False,
"completed": True
},

"h2": {
"name": "h2",
"description": "Second level subheading size. Recommended for Page Parent Title or Category Title under Website Title.",
"attributes": [],
"attribute-count": 0,
"deprecated": False,
"completed": True
},

"h3": {
"name": "h3",
"description": "Third level subheading size. Recommended for Sub Category Title.",
"attributes": [],
"attribute-count": 0,
"deprecated": False,
"completed": True
},

"h4": {
"name": "h4",
"description": "Fourth level subheading size. Recommended for Page Title under the Sub Category.",
"attributes": [],
"attribute-count": 0,
"deprecated": False,
"completed": True
},

"h5": {
"name": "h5",
"description": "Fifth level subheading size. Recommended for Page Sub Category under the Page Title.",
"attributes": [],
"attribute-count": 0,
"deprecated": False,
"completed": True
},

"h6": {
"name": "h6",
"description": "Sixth level subheading size. Create h7 class on div in CSS. Recommended for Page Sub Heading under the Page Sub Category. For example h1 - Source Code Hub - h2 - HTML - h3 - Tag List h4 - Basic HTML Tags and their Attributes - h5 - Anchor Tag - h6 - The href attribute",
"attributes": [],
"attribute-count": 0,
"deprecated": False,
"completed": True
},

"head": {
"name": "head",
"description": "Machine readable metadata for SEO. Place for advertisement tracking, monitoring scripts and CSS injected at the top/first.",
"attributes": [],
"attribute-count": 0,
"deprecated": False,
"completed": True
},

"header": {
"name": "header",
"description": "Page header. Not the table header. Can be used inside Article Tag for content headings. Use at top for website headings and banner ARIA role. Don't put header in footer tag, address tag or another header tag.",
"attributes": [],
"attribute-count": 0,
"deprecated": False,
"completed": True
},

"hgroup": {
"name": "hgroup",
"description": "A container for Exactly One header tag h1-h6 and many p tags for data related to headings such as alternate headings, visible header sub data. Use CSS to style the hgroup > p tags. <hgroup><h3>It could be Lorem</h3><p>Or Lorem ipsum dolor</p></hgroup>",
"attributes": [],
"attribute-count": 0,
"deprecated": False,
"completed": True
},

"hr": {
"name": "hr",
"description": "Horizontal rule. A horizontal line on page. Signifies thematic break, topic change or separate content in HTML.",
"attributes": [
{
"attribute-name": "align",
"attribute-description": "Deprecated. Use a simple black rule. Use CSS to style it, align it, shade it with shadows."
},
{
"attribute-name": "color",
"attribute-description": "Deprecated. Insufficient and unnecessary. Causes bloat in attributes."
}
],
"attribute-count": 2,
"deprecated": False,
"completed": True
},

"html": {
"name": "html",
"description": "The root of an html document. A container for all tags except !DOCTYPE tag. Always use lang=\"en\" attribute to assist search.",
"attributes": [],
"attribute-count": 0,
"deprecated": False,
"completed": True
},

"i": {
"name": "i",
"description": "Italics tag. Use for technical terms, idioms, taxonomy, generic names, multiword nouns, thoughts, sarcasm etc. Customize the CSS effect. Use b tag CSS for bold effect and bring attention to. em tag for emphasis effect. strong tag for importance, seriousness, urgency. Mark tag for relevance. Cite tag for noun of book, song etc. Dfn tag for markup defining instance of abbr. italic is for voiceover, change of mood, alternate mood that will return to normal once i tag is over. As in poetry and idioms where the meaning is not obvious.",
"attributes": [],
"attribute-count": 0,
"deprecated": False,
"completed": True
},

"iframe": {
"name": "iframe",
"description": "Embed another HTML document in the current one. Always use title for clarity on what the purpose of document is.",
"attributes": [
{
"attribute-name": "align",
"attribute-description": "Deprecated. Use CSS for scrolling, border or alignment."
},
{
"attribute-name": "allow",
"attribute-description": "Allow what Permissions-Policy for iframe. Use the allow list and *. Experimental techs. Permissions-Policy Directives. SensorAPI for fine grain and coarse grain. Attribution Reporting API for conversions. Encrypted Media Extensions API for DRM(Digital Restrictions Management or Digital Rights Management) protected/enabled media. Federated Credentials Management API FedCM for IdP(Identity providers like sign in with google, fb, meta, x, twitter using navigator.credentials) and RP(Relying Party for silentAccess), WebOTP, Web Authentication API, Web Serial API(microprocessor/controller), Audio Output Devices API, Topics API for IBA(Interest based advertising), Web USB API, WebXR. Values: geolocation|accelerometer|ambient-light-sensor|attribution-reporting|autoplay|battery|bluetooth|browsing-topics|camera|compute-pressure|display-capture|document-domain|encrypted-media|fullscreen|gamepad|gyroscope|hid|identity-credentials-get|idle-detection|local-fonts|magnetometer|microphone|midi|otp-credentials|payment|picture-in-picture|publickey-credentials-createget|screen-wake-lock|serial|speaker-selection|storage-access|usb|web-share|window-management|xr-spatial-tracking"
},
{
"attribute-name": "credentialless",
"attribute-description": "Experimental. Will create a no-credential iframe to disallow credential and auth from origin. Allowfullscreen and allowpaymentrequest attributes are now allow=fullscreen and allow=payment. browsingtopics attribute will work with Topics API on iframe to index latest related topics.  "
},
{
"attribute-name": "csp",
"attribute-description": "Experimental. Enforce a Content Security Policy on iframe. Iframe is used in authentication(FedCM, CMA, WAA, Overlap Touch etc) which is valid use case. Fingerprinting vulnerability through iframe is also invalid use case(privacy protection). CSP headers on iframe referrer will give additional clarity."
},
{
"attribute-name": "height",
"attribute-description": "Height in pixels. Default is 150px."
},
{
"attribute-name": "loading",
"attribute-description": "First render performance of page with iframe. Values: eager|lazy"
},
{
"attribute-name": "name",
"attribute-description": "A targettable name for embedded browsing context. Valid targets are target attribute of anchor tag, form tag or base tag; and the formtarget attribute of input tag and button tag; or windowName in window.open(windowName)."
},
{
"attribute-name": "referrerpolicy",
"attribute-description": "See a tag(anchor) referrerpolicy."
},
{
"attribute-name": "sandbox",
"attribute-description": "Allows applying restrictions to the embedded iframe. Can be empty(to apply all restriction) or SSV(space separated value - to lift certain restriction mentioned in SSV). Iframe can be embedded as true owner of website with hidden iframe, allow-scripts, target=_top, allow-same-origin. It can also validate the entire client site for payment, authentication etc. Values: allow-downloads|allow-forms|allow-modals|allow-orientation-lock|allow-pointer-lock|allow-popups|allow-popups-to-escape-sandbox|allow-presentation|allow-same-origin|allow-scripts|allow-storage-access-by-user-activation|allow-top-navigation|allow-top-navigation-by-user-activation|allow-top-navigation-to-custom-protocols"
},
{
"attribute-name": "src",
"attribute-description": "URL. about:blank will also use same-origin policy. Protected from element.removeAttribute from JS to default to same-origin policy."
},
{
"attribute-name": "srcdoc",
"attribute-description": "Instead of src URL. Provide entire html doc as inline string."
},
{
"attribute-name": "width",
"attribute-description": "Pixel Width. Default is 300px."
}
],
"attribute-count": 12,
"deprecated": False,
"completed": True
},

"image": {
"name": "image",
"description": "Deprecated. You can still use it, it will redirect to img tag if you dislike acronyms and abbreviations.",
"attributes": [],
"attribute-count": 0,
"deprecated": True
},

"img": {
"name": "img",
"description": "Image tag.",
"attributes": [
{
"attribute-name": "align",
"attribute-description": ""
},
{
"attribute-name": "alt",
"attribute-description": ""
},
{
"attribute-name": "border",
"attribute-description": ""
},
{
"attribute-name": "crossorigin",
"attribute-description": ""
},
{
"attribute-name": "decoding",
"attribute-description": ""
},
{
"attribute-name": "height",
"attribute-description": ""
},
{
"attribute-name": "intrinsicsize",
"attribute-description": ""
},
{
"attribute-name": "ismap",
"attribute-description": ""
},
{
"attribute-name": "loading",
"attribute-description": ""
},
{
"attribute-name": "referrerpolicy",
"attribute-description": ""
},
{
"attribute-name": "sizes",
"attribute-description": ""
},
{
"attribute-name": "src",
"attribute-description": ""
},
{
"attribute-name": "srcset",
"attribute-description": ""
},
{
"attribute-name": "usemap",
"attribute-description": ""
},
{
"attribute-name": "width",
"attribute-description": ""
}
],
"attribute-count": 15,
"deprecated": False
},

"input": {
"name": "input",
"description": "",
"attributes": [
{
"attribute-name": "accept",
"attribute-description": ""
},
{
"attribute-name": "alt",
"attribute-description": ""
},
{
"attribute-name": "autocomplete",
"attribute-description": ""
},
{
"attribute-name": "capture",
"attribute-description": ""
},
{
"attribute-name": "checked",
"attribute-description": ""
},
{
"attribute-name": "dirname",
"attribute-description": ""
},
{
"attribute-name": "disabled",
"attribute-description": ""
},
{
"attribute-name": "form",
"attribute-description": ""
},
{
"attribute-name": "formaction",
"attribute-description": ""
},
{
"attribute-name": "formenctype",
"attribute-description": ""
},
{
"attribute-name": "formmethod",
"attribute-description": ""
},
{
"attribute-name": "formnovalidate",
"attribute-description": ""
},
{
"attribute-name": "formtarget",
"attribute-description": ""
},
{
"attribute-name": "height",
"attribute-description": ""
},
{
"attribute-name": "list",
"attribute-description": ""
},
{
"attribute-name": "max",
"attribute-description": ""
},
{
"attribute-name": "maxlength",
"attribute-description": ""
},
{
"attribute-name": "minlength",
"attribute-description": ""
},
{
"attribute-name": "min",
"attribute-description": ""
},
{
"attribute-name": "multiple",
"attribute-description": ""
},
{
"attribute-name": "name",
"attribute-description": ""
},
{
"attribute-name": "pattern",
"attribute-description": ""
},
{
"attribute-name": "placeholder",
"attribute-description": ""
},
{
"attribute-name": "readonly",
"attribute-description": ""
},
{
"attribute-name": "required",
"attribute-description": ""
},
{
"attribute-name": "size",
"attribute-description": ""
},
{
"attribute-name": "src",
"attribute-description": ""
},
{
"attribute-name": "step",
"attribute-description": ""
},
{
"attribute-name": "type",
"attribute-description": ""
},
{
"attribute-name": "usemap",
"attribute-description": ""
},
{
"attribute-name": "value",
"attribute-description": ""
},
{
"attribute-name": "width",
"attribute-description": ""
}
],
"attribute-count": 32,
"deprecated": False
},

"ins": {
"name": "ins",
"description": "Insert updated text after del tag.",
"attributes": [
{
"attribute-name": "cite",
"attribute-description": ""
},
{
"attribute-name": "datetime",
"attribute-description": ""
}
],
"attribute-count": 2,
"deprecated": False
},

"kbd": {
"name": "kbd",
"description": "Place Keyboard key character inside this tag to provide equivalent Windows key CMD key alt option etc for different platforms. <kbd>cmd</kbd> + <kbd>C</kbd>",
"attributes": [],
"attribute-count": 0,
"deprecated": False
},

"label": {
"name": "label",
"description": "Label for input in forms to provide key value pairs.",
"attributes": [
{
"attribute-name": "for",
"attribute-description": ""
},
{
"attribute-name": "form",
"attribute-description": ""
}
],
"attribute-count": 2,
"deprecated": False
},

"legend": {
"name": "legend",
"description": "Display a legend for the fieldset.",
"attributes": [

],
"attribute-count": 0,
"deprecated": False
},

"li": {
"name": "li",
"description": "List item.",
"attributes": [
{
"attribute-name": "value",
"attribute-description": ""
}
],
"attribute-count": 1,
"deprecated": False
},

"link": {
"name": "link",
"description": "Link a stylesheet or js script.",
"attributes": [
{
"attribute-name": "as",
"attribute-description": ""
},
{
"attribute-name": "crossorigin",
"attribute-description": ""
},
{
"attribute-name": "href",
"attribute-description": ""
},
{
"attribute-name": "hreflang",
"attribute-description": ""
},
{
"attribute-name": "integrity",
"attribute-description": ""
},
{
"attribute-name": "media",
"attribute-description": ""
},
{
"attribute-name": "referrerpolicy",
"attribute-description": ""
},
{
"attribute-name": "rel",
"attribute-description": ""
},
{
"attribute-name": "sizes",
"attribute-description": ""
},
{
"attribute-name": "type",
"attribute-description": ""
}
],
"attribute-count": 10,
"deprecated": False
},

"main": {
"name": "main",
"description": "Main semantic content of the page.",
"attributes": [],
"attribute-count": 0,
"deprecated": False
},

"map": {
"name": "map",
"description": "",
"attributes": [
{
"attribute-name": "name",
"attribute-description": ""
}
],
"attribute-count": 1,
"deprecated": False
},

"mark": {
"name": "mark",
"description": "Highlight the text. As found in search results with pages marked up in yellow. Used to signify relevance.",
"attributes": [],
"attribute-count": 0,
"deprecated": False
},

"marquee": {
"name": "marquee",
"description": "Deprecated. Can be done easily in CSS. Used to be a marquee similar to the hardware LED lights that display advertisements.",
"attributes": [
{
"attribute-name": "bgcolor",
"attribute-description": ""
},
{
"attribute-name": "loop",
"attribute-description": ""
}
],
"attribute-count": 2,
"deprecated": True
},

"math": {
"name": "math",
"description": "Check MathML spec book for many such tags that are added by default. Check the top level description on SGML, XHTML, XML based ML for many other such ML tags added by default.",
"attributes": [],
"attribute-count": 0,
"deprecated": False
},

"menu": {
"name": "menu",
"description": "",
"attributes": [
{
"attribute-name": "type",
"attribute-description": ""
}
],
"attribute-count": 1,
"deprecated": False
},

"menuitem": {
"name": "menuitem",
"description": "",
"attributes": [

],
"attribute-count": 0,
"deprecated": False
},

"meta": {
"name": "meta",
"description": "Provide metadata that is not human readable to the machine.",
"attributes": [
{
"attribute-name": "charset",
"attribute-description": ""
},
{
"attribute-name": "content",
"attribute-description": ""
},
{
"attribute-name": "http-equiv",
"attribute-description": ""
},
{
"attribute-name": "name",
"attribute-description": ""
}
],
"attribute-count": 4,
"deprecated": False
},

"meter": {
"name": "meter",
"description": "Display metered values. The meter turns green, yellow and red based on high, low, optimal values.",
"attributes": [
{
"attribute-name": "form",
"attribute-description": ""
},
{
"attribute-name": "high",
"attribute-description": ""
},
{
"attribute-name": "low",
"attribute-description": ""
},
{
"attribute-name": "max",
"attribute-description": ""
},
{
"attribute-name": "min",
"attribute-description": ""
},
{
"attribute-name": "optimum",
"attribute-description": ""
},
{
"attribute-name": "value",
"attribute-description": ""
}
],
"attribute-count": 7,
"deprecated": False
},

"nav": {
"name": "nav",
"description": "Display navigation links in the page. For example inline index: Bikes > BMX > Jump Bike 3000",
"attributes": [],
"attribute-count": 0,
"deprecated": False
},

{
"name": "nobr",
"description": "Deprecated. Used to represent the forbidden section of line break where newline is not allowed. Got removed for responsive UI, flexible resizing of page on tablets, mobiles etc. Use CSS instead.",
"attributes": [],
"attribute-count": 0,
"deprecated": True
},
{
"name": "noembed",
"description": "Deprecated. Used to provide substitute for embed tag not working.",
"attributes": [],
"attribute-count": 0,
"deprecated": True
},
{
"name": "noframes",
"description": "Deprecated. ",
"attributes": [],
"attribute-count": 0,
"deprecated": True
},
{
"name": "noscript",
"description": "Container for Text and link to alternate URL if scripts and Javascript are turned off.",
"attributes": [],
"attribute-count": 0,
"deprecated": False
},
{
"name": "object",
"description": "Object tag was designed for embeddable browser plugins. Can be used to embed pictures, html, video, audio etc",
"attributes": [
{
"attribute-name": "border",
"attribute-description": ""
},
{
"attribute-name": "data",
"attribute-description": ""
},
{
"attribute-name": "form",
"attribute-description": ""
},
{
"attribute-name": "height",
"attribute-description": ""
},
{
"attribute-name": "name",
"attribute-description": ""
},
{
"attribute-name": "type",
"attribute-description": ""
},
{
"attribute-name": "usemap",
"attribute-description": ""
},
{
"attribute-name": "width",
"attribute-description": ""
}
],
"attribute-count": 8,
"deprecated": False
},
{
"name": "ol",
"description": "Ordered List.",
"attributes": [
{
"attribute-name": "reversed",
"attribute-description": ""
},
{
"attribute-name": "start",
"attribute-description": ""
},
{
"attribute-name": "type",
"attribute-description": ""
}
],
"attribute-count": 3,
"deprecated": False
},
{
"name": "optgroup",
"description": "Option group is used to put category names for the options under it.",
"attributes": [
{
"attribute-name": "disabled",
"attribute-description": ""
},
{
"attribute-name": "label",
"attribute-description": ""
}
],
"attribute-count": 2,
"deprecated": False
},
{
"name": "option",
"description": "Used to provide options to a select input. Multiple options can be selected.",
"attributes": [
{
"attribute-name": "disabled",
"attribute-description": ""
},
{
"attribute-name": "label",
"attribute-description": ""
},
{
"attribute-name": "selected",
"attribute-description": ""
},
{
"attribute-name": "value",
"attribute-description": ""
}
],
"attribute-count": 4,
"deprecated": False
},
{
"name": "output",
"description": "A container for output of a small calculation that can be injected into it's text.",
"attributes": [
{
"attribute-name": "for",
"attribute-description": ""
},
{
"attribute-name": "form",
"attribute-description": ""
},
{
"attribute-name": "name",
"attribute-description": ""
}
],
"attribute-count": 3,
"deprecated": False
},
{
"name": "p",
"description": "Display a paragraph of text. Automatically removes whitespace and provides one single space between words. Also adds newline before and after the text.",
"attributes": [

],
"attribute-count": 0,
"deprecated": False
},
{
"name": "param",
"description": "Deprecated. ",
"attributes": [
{
"attribute-name": "name",
"attribute-description": ""
},
{
"attribute-name": "value",
"attribute-description": ""
}
],
"attribute-count": 2,
"deprecated": True
},
{
"name": "picture",
"description": "A container for picture gallery slides",
"attributes": [

],
"attribute-count": 0,
"deprecated": False
},
{
"name": "plaintext",
"description": "Deprecated. Used to be for plaintext files. Use a pre tag or mark the file as mimetype plain/text for same effect.",
"attributes": [],
"attribute-count": 0,
"deprecated": True
},
{
"name": "portal",
"description": "Deprecated. Used to be for an alternative to iframe but only for previews without interactivity. Is experimental might come back if popular. Is preload?",
"attributes": [],
"attribute-count": 0,
"deprecated": True
},
{
"name": "pre",
"description": "Pre tag is used to display text preserving whitespace as preformatted like newline and two or more spaces. It will still render html tags inside it. Only way to display html code is replacing the angle brackets with &lt; &gt;",
"attributes": [],
"attribute-count": 0,
"deprecated": False
},
{
"name": "progress",
"description": "Used to display the progress animation of a task.",
"attributes": [
{
"attribute-name": "form",
"attribute-description": ""
},
{
"attribute-name": "max",
"attribute-description": ""
},
{
"attribute-name": "value",
"attribute-description": ""
}
],
"attribute-count": 3,
"deprecated": False
},
{
"name": "q",
"description": "Quote text. Used to display inline quotes.",
"attributes": [
{
"attribute-name": "cite",
"attribute-description": ""
}
],
"attribute-count": 1,
"deprecated": False
},
{
"name": "rb",
"description": "",
"attributes": [],
"attribute-count": 0,
"deprecated": True,
},
{
"name": "rp",
"description": "",
"attributes": [],
"attribute-count": 0,
"deprecated": False
},
{
"name": "rt",
"description": "",
"attributes": [],
"attribute-count": 0,
"deprecated": False
},
{
"name": "rtc",
"description": "",
"attributes": [],
"attribute-count": 0,
"deprecated": True
},
{
"name": "ruby",
"description": "",
"attributes": [],
"attribute-count": 0,
"deprecated": False
},
{
"name": "s",
"description": "Strikethrough some text. The del and ins elements represent document updates. For popularity reasons it has not been replaced by CSS.",
"attributes": [],
"attribute-count": 0,
"deprecated": False
},
{
"name": "samp",
"description": "Used to display sample output. Can be used as alternate CSS to code tag. Sample output might be theoretical while code might be actual output.",
"attributes": [],
"attribute-count": 0,
"deprecated": False
},
{
"name": "script",
"description": "Used to add js scripts.",
"attributes": [
{
"attribute-name": "async",
"attribute-description": ""
},
{
"attribute-name": "crossorigin",
"attribute-description": ""
},
{
"attribute-name": "defer",
"attribute-description": ""
},
{
"attribute-name": "integrity",
"attribute-description": ""
},
{
"attribute-name": "language",
"attribute-description": ""
},
{
"attribute-name": "referrerpolicy",
"attribute-description": ""
},
{
"attribute-name": "src",
"attribute-description": ""
},
{
"attribute-name": "type",
"attribute-description": ""
}
],
"attribute-count": 8,
"deprecated": False
},
{
"name": "search",
"description": "A container for search elements.",
"attributes": [],
"attribute-count": 0,
"deprecated": False
},
{
"name": "section",
"description": "It serves as a container for separate entity from nav, article, main, aside, and divs. Perhaps a secondary navigation mechanism can go here that uses non permalink javascript ways to change text. Also header and some content that is not an article can go here. Section states non-semantic element for storing text.",
"attributes": [],
"attribute-count": 0,
"deprecated": False
},
{
"name": "select",
"description": "Select an input or multiple",
"attributes": [
{
"attribute-name": "autocomplete",
"attribute-description": ""
},
{
"attribute-name": "disabled",
"attribute-description": ""
},
{
"attribute-name": "form",
"attribute-description": ""
},
{
"attribute-name": "multiple",
"attribute-description": ""
},
{
"attribute-name": "name",
"attribute-description": ""
},
{
"attribute-name": "required",
"attribute-description": ""
},
{
"attribute-name": "size",
"attribute-description": ""
}
],
"attribute-count": 7,
"deprecated": False
},
{
"name": "shadow",
"description": "Deprecated. Used to be for storing the shadow DOM before the shadow DOM.",
"attributes": [],
"attribute-count": 0,
"deprecated": True
},
{
"name": "slot",
"description": "Used to store a slot in a template that represents an input key value pair or reusable value.",
"attributes": [],
"attribute-count": 0,
"deprecated": False
},
{
"name": "small",
"description": "Side comment element to display copyright and legal text. It was not removed for CSS of smaller font as it semantically means a side comment of copyright or legal significance.",
"attributes": [],
"attribute-count": 0,
"deprecated": False
},
{
"name": "source",
"description": "",
"attributes": [
{
"attribute-name": "media",
"attribute-description": ""
},
{
"attribute-name": "sizes",
"attribute-description": ""
},
{
"attribute-name": "src",
"attribute-description": ""
},
{
"attribute-name": "srcset",
"attribute-description": ""
},
{
"attribute-name": "type",
"attribute-description": ""
}
],
"attribute-count": 5,
"deprecated": False
},
{
"name": "span",
"description": "Represents an inline container for phrasing content.",
"attributes": [],
"attribute-count": 0,
"deprecated": False
},
{
"name": "strike",
"description": "Deprecated. Use the CSS strikethrough or s tag.",
"attributes": [],
"attribute-count": 0,
"deprecated": True
},
{
"name": "strong",
"description": "Used to signify seriousness, urgency or importance. Customize the CSS. Strong tag means semantic importance. If only stylistic importance for a heading use b tag instead.",
"attributes": [],
"attribute-count": 0,
"deprecated": False
},
{
"name": "style",
"description": "Add a CSS style",
"attributes": [
{
"attribute-name": "media",
"attribute-description": ""
},
{
"attribute-name": "scoped",
"attribute-description": ""
},
{
"attribute-name": "type",
"attribute-description": ""
}
],
"attribute-count": 3,
"deprecated": False
},
{
"name": "sub",
"description": "Subscript",
"attributes": [

],
"attribute-count": 0,
"deprecated": False
},
{
"name": "summary",
"description": "Used in details container tag to give clickable heading that can be selected to show/hide details.",
"attributes": [],
"attribute-count": 0,
"deprecated": False
},
{
"name": "sup",
"description": "Superscript",
"attributes": [],
"attribute-count": 0,
"deprecated": False
},
{
"name": "svg",
"description": "A container for SVG elements.",
"attributes": [],
"attribute-count": 0,
"deprecated": False
},
{
"name": "table",
"description": "A container for tables.",
"attributes": [
{
"attribute-name": "align",
"attribute-description": ""
},
{
"attribute-name": "background",
"attribute-description": ""
},
{
"attribute-name": "bgcolor",
"attribute-description": ""
},
{
"attribute-name": "border",
"attribute-description": ""
},
{
"attribute-name": "summary",
"attribute-description": ""
}
],
"attribute-count": 5,
"deprecated": False
},
{
"name": "tbody",
"description": "Table body.",
"attributes": [
{
"attribute-name": "align",
"attribute-description": ""
},
{
"attribute-name": "bgcolor",
"attribute-description": ""
}
],
"attribute-count": 2,
"deprecated": False
},
{
"name": "td",
"description": "Table datacell element",
"attributes": [
{
"attribute-name": "align",
"attribute-description": ""
},
{
"attribute-name": "background",
"attribute-description": ""
},
{
"attribute-name": "bgcolor",
"attribute-description": ""
},
{
"attribute-name": "colspan",
"attribute-description": ""
},
{
"attribute-name": "headers",
"attribute-description": ""
},
{
"attribute-name": "rowspan",
"attribute-description": ""
}
],
"attribute-count": 6,
"deprecated": False
},
{
"name": "template",
"description": "Used for storing templates in the Shadow DOM.",
"attributes": [],
"attribute-count": 0,
"deprecated": False
},
{
"name": "textarea",
"description": "",
"attributes": [
{
"attribute-name": "autocomplete",
"attribute-description": ""
},
{
"attribute-name": "cols",
"attribute-description": ""
},
{
"attribute-name": "dirname",
"attribute-description": ""
},
{
"attribute-name": "disabled",
"attribute-description": ""
},
{
"attribute-name": "enterkeyhint",
"attribute-description": ""
},
{
"attribute-name": "form",
"attribute-description": ""
},
{
"attribute-name": "inputmode",
"attribute-description": ""
},
{
"attribute-name": "maxlength",
"attribute-description": ""
},
{
"attribute-name": "minlength",
"attribute-description": ""
},
{
"attribute-name": "name",
"attribute-description": ""
},
{
"attribute-name": "placeholder",
"attribute-description": ""
},
{
"attribute-name": "readonly",
"attribute-description": ""
},
{
"attribute-name": "required",
"attribute-description": ""
},
{
"attribute-name": "rows",
"attribute-description": ""
},
{
"attribute-name": "wrap",
"attribute-description": ""
}
],
"attribute-count": 15,
"deprecated": False
},
{
"name": "tfoot",
"description": "Table footer.",
"attributes": [
{
"attribute-name": "align",
"attribute-description": ""
},
{
"attribute-name": "bgcolor",
"attribute-description": ""
}
],
"attribute-count": 2,
"deprecated": False
},
{
"name": "th",
"description": "Used for datacells that are table headers on the left/right/up/down side of a table.",
"attributes": [
{
"attribute-name": "align",
"attribute-description": ""
},
{
"attribute-name": "background",
"attribute-description": ""
},
{
"attribute-name": "bgcolor",
"attribute-description": ""
},
{
"attribute-name": "colspan",
"attribute-description": ""
},
{
"attribute-name": "headers",
"attribute-description": ""
},
{
"attribute-name": "rowspan",
"attribute-description": ""
},
{
"attribute-name": "scope",
"attribute-description": ""
}
],
"attribute-count": 7,
"deprecated": False
},
{
"name": "thead",
"description": "Used as a container for table headers at the top of a table.",
"attributes": [
{
"attribute-name": "align",
"attribute-description": ""
}
],
"attribute-count": 1,
"deprecated": False
},
{
"name": "time",
"description": "Contains time that can be used to add to calendars or schedule reminders.",
"attributes": [
{
"attribute-name": "datetime",
"attribute-description": ""
}
],
"attribute-count": 1,
"deprecated": False
},
{
"name": "title",
"description": "Title of the web page.",
"attributes": [

],
"attribute-count": 0,
"deprecated": False
},
{
"name": "tr",
"description": "Table row.",
"attributes": [
{
"attribute-name": "align",
"attribute-description": ""
},
{
"attribute-name": "bgcolor",
"attribute-description": ""
}
],
"attribute-count": 2,
"deprecated": False
},
{
"name": "track",
"description": "The Embed Text Track element for subtitles on a video, audio.",
"attributes": [
{
"attribute-name": "default",
"attribute-description": ""
},
{
"attribute-name": "kind",
"attribute-description": ""
},
{
"attribute-name": "label",
"attribute-description": ""
},
{
"attribute-name": "src",
"attribute-description": ""
},
{
"attribute-name": "srclang",
"attribute-description": ""
}
],
"attribute-count": 5,
"deprecated": False
},
{
"name": "tt",
"description": "Deprecated. Teletype text animation effect. Use CSS instead. Involves the animation of a prompt cursor moving and typing in real time.",
"attributes": [],
"attribute-count": 0,
"deprecated": True
},
{
"name": "u",
"description": "Unarticulated annotation element to highlight spelling and grammatical mistakes. Not to be confused with deprecated underline tag.",
"attributes": [],
"attribute-count": 0,
"deprecated": False
},
{
"name": "ul",
"description": "Unordered List.",
"attributes": [

],
"attribute-count": 0,
"deprecated": False
},
{
"name": "var",
"description": "Used to semantically tag variables.",
"attributes": [],
"attribute-count": 0,
"deprecated": False
},
{
"name": "video",
"description": "",
"attributes": [
{
"attribute-name": "autoplay",
"attribute-description": ""
},
{
"attribute-name": "controls",
"attribute-description": ""
},
{
"attribute-name": "crossorigin",
"attribute-description": ""
},
{
"attribute-name": "height",
"attribute-description": ""
},
{
"attribute-name": "loop",
"attribute-description": ""
},
{
"attribute-name": "muted",
"attribute-description": ""
},
{
"attribute-name": "playsinline",
"attribute-description": ""
},
{
"attribute-name": "poster",
"attribute-description": ""
},
{
"attribute-name": "preload",
"attribute-description": ""
},
{
"attribute-name": "src",
"attribute-description": ""
},
{
"attribute-name": "width",
"attribute-description": ""
}
],
"attribute-count": 11,
"deprecated": False
},
{
"name": "wbr",
"description": "Word break opportunity. Allows a text to break at precise locations when window is resized.",
"attributes": [],
"attribute-count": 0,
"deprecated": False
},
{
"name": "xmp",
"description": "Deprecated. Used to be for displaying html tags without having to replace angle brackets to exempt a part of html. Is unsafe. Just use a regex to swap angle brackets with & lt ; unicode.",
"attributes": [],
"attribute-count": 0,
"deprecated": True
}


},

"validations": "Run the following to check the various metadata of html-tags\n"

}
