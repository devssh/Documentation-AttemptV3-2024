



init_variables = {
"dispatcher": "simple_init",
"total": "20",
"definitions": [

{
"names": [
"documents", 
"references", 
"glossary", "evalGlossary", 
"documentIndex", "documentSearchIndex", "searchResults",
"documentURLIndex", "documentData"
],
"value": "{}",
"type": "object",
"semantic_type": "EMPTY_OBJECT",
"description": """
Variables that are init of the type globalThis.myVar = {}; 
documents is loaded from the completed data load and inprogress data load
documents has indexes starting from 0 as keys and documentData as content
documents should be updated to use indexedDB and invalidate cache or update cache on changes and config updates push
references tracks the links that are added when visiting a page
glossary tracks the variable and function bindings. 
for glossary the names are the key and the definition includes the definition after regex strips all forbidden characters.
glossary is useful to display code that cannot be eval
It is also more resilient to breaking the string due to unknown characters
evalGlossary contains the same as glossary except regex is not applied
evalGlossary simulates reflection and metaprogramming to verify functions on runtime and can be used to override
documentSearchIndex contains the regex strip lowercase page view which is provided to the search input event handler
documentSearchIndex has index as key starting from zero and content as document content after processing
searchResults adds the searchResults found from the search input event handler
documentIndex has index as keys starting from 0 and document urls as values
documentURLIndex has urls as keys and indexes as values starting from 0
documentData mirrors the current page visible document data
documentData can be used to update the current visible page from event handler on index and url link
"""
},

{
"names": [
"currentPageIndex"
],
"value": "0",
"type": "int",
"description": """
Variables that are init with value 0 int such as globalThis.myVar = 0; 
This tracks the currentPageIndex on the documentIndex for the page
"""
},

{
"names": [
"documentURLs"
],
"value": "documentURLIndex",
"modifier": "Object.keys",
"type": "object",
"semantic_type": "array",
"globalThis": True,
"description": """
Variables that are init with globalThis.myVar = Object.keys(globalThis.value); 
documentURLs is an array of all the urls in the document. This is useful for checking loading status and navigation.
"""
},

{
"names": [
"documentTotal"
],
"value": "documentURLs",
"modifier": "length",
"globalThis": True,
"description": """
Variables that are init with globalThis.myVar = globalThis.value.length; 
documentTotal is used for navigation to display the total number of documents
"""
},

{
"names": [
"pageInputValue"
],
"value": "1",
"type": "int",
"description": """
Variables that are init with int 1 value such as globalThis.myVar = 1; 
This mirrors the input value of the page-id input box
That means get on innerHTML is reflected on pageInputValue
Also an event handler monitors this value to add or subtract 1 to update input value
Should be careful when using because link clicking can update value by more than +-1
"""
},

{
"names": [
"variableGlossary", "functionGlossary",
"searchPhraseInputValue",
"currentPageURL", "currentURLValue",
"currentPageTag", "currentTagValue"
],
"value": "\"\"",
"type": "string",
"semantic_type": "EMPTY_STRING",
"description": """
Variables that are init with empty string value such as globalThis.myVar = \"\"; 
variableGlossary contains the regex formatted variable glossary as a single string
functionGlossary contains the regex formatted function glossary as a single string
searchPhraseInputValue mirrors the input value of the search-phrase input box
"""
},

{
"names": [
"newline"
],
"value": "`\n`",
"type": "string",
"semantic_type": "newline",
"description": """
The newline variable that is used to concat to a JS string to add a newline. 
Newline is used to replace newlines in multiline strings to simplify them and allow trimming and stripping of values
"""
},

{
"names": [
"currentURLValue"
],
"value": "window.location",
"modifier": "String",
"globalThis": True,
"description": """
Variables that are init with globalThis.myVar = String(globalThis.value); 
currenturl mirrors the window.location of the browser.
currenturl is useful for adding permalinks and anchor tags with # to specify subsection of url that should be focussed
"""
}

]}

# also glossary_binding and md_binding return glossary_file and md_file to javascript_file script
#js_provider gives variable_file to javascript_file script
#dispatcher provides file to provider

def generate_config(definition):
  keys = list(definition.keys())
  code_config = {}
  if not any([must_have in keys for must_have in ["name", "names"]]):
    print("Error: Name or names of init variable missing")
    return
  if "value" not in keys:
    print("Error: Value of init variable missing")
    return
  if "name" in keys:
    code_config["name"] = definition["name"]
    code_config["is_single_name"] = True
  if "value" in keys:
    code_config["value"] = definition["value"]
  if "names" in keys:
    code_config["names"] = definition["names"]
    code_config["is_single_name"] = False
  if "globalThis" in keys:
    code_config["value"] = "globalThis." + code_config["value"]
  if "modifier" in keys:
    if definition["modifier"] == "Object.keys":
      code_config["value"] = "Object.keys(" + code_config["value"] + ")"
    if definition["modifier"] == "length":
      code_config["value"] = code_config["value"] + ".length"
    if definition["modifier"] == "String":
      code_config["value"] = "String(" + code_config["value"] + ")"
  return code_config

def generate_code(definition):
  from js_syntax_rules import generate_init_js
  code_config = generate_config(definition)
  return generate_init_js(code_config)

def simple_init(code):
  from py_helpers import flatten
  code2D = [generate_code(definition) for definition in code["definitions"]]
  return flatten(code2D)

if __name__ == "__main__":
  from py_helpers import pretty_print
  pretty_print(init_variables)
  print("\n\n\n\nConfig above, below dispatched\n\n\n\n")
  code = simple_init(init_variables)
  pretty_print(code)
  print(len(code), end=" bindings init")

