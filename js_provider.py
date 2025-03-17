


from helpers_js_glossary import (
variable_syntax, 
assign_value, 
print_message, 
assign_function, 
function_syntax,
js_multiline_string,
display_js_code,
truncate_js_code
)

from js_glossary import get_data_stack, get_variable_stack, get_function_stack, get_function_execution_stack

def parse_data(element):
  variable_type = element[0]
  variable_name = element[1]
  variable_value = element[2]
  variable_string = assign_value(variable_syntax(variable_type, variable_name), variable_value)
  return variable_string

def generate_data_glossary():
  glossary = [parse_data(data) for data in get_data_stack()]
  return glossary

data_glossary = generate_data_glossary()

def add_data_glossary():
  return "\n".join(data_glossary)

def parse_variable(variable_stack_element):
  variable_type = variable_stack_element[0]
  variable_name = variable_stack_element[1]
  variable_value = variable_stack_element[2]
  variable_name_declaration = variable_syntax(variable_type, variable_name)
  variable_string = assign_value(variable_name_declaration, variable_value)
  variable_glossary_name_declaration = "this.glossary." + variable_name
  variable_glossary_string = assign_value(variable_glossary_name_declaration, variable_value)
  variable_eval_declaration = "this.evalglossary." + variable_name
  variable_eval_value = js_multiline_string(variable_string)
  variable_glossary_eval_string = assign_value(variable_eval_declaration, variable_eval_value)
  return [
variable_name,
variable_value,
variable_string,
variable_glossary_string,
variable_glossary_eval_string
  ]

def generate_variable_glossary():
  return [parse_variable(v) for v in get_variable_stack()]

variable_glossary = generate_variable_glossary()
variable_name=0
variable_value=1
variable_string=2
variable_glossary_string=3
variable_glossary_eval_string=4

def array_to_string(some_array):
  return "\n".join(some_array) + "\n"

def provide_variable_glossary_of(index):
  return array_to_string([ele[index] for ele in variable_glossary])

def add_variable_glossary():
  names = provide_variable_glossary_of(variable_name)
  glossary = print_message("Initializing variables...")
  glossary = glossary + provide_variable_glossary_of(variable_string)
  glossary = glossary + provide_variable_glossary_of(variable_glossary_string)
  glossary = glossary + print_message(str(len(variable_glossary)) + " variables loading")
  glossary = glossary + print_message(names)
  glossary = glossary + print_message(""" `+String(Object.keys(this.glossary).length)+` variables loaded """)
  glossary = glossary + print_message("""`+Object.keys(this.glossary).join("\\n").trim() + `""")
  glossary = glossary + provide_variable_glossary_of(variable_glossary_eval_string)
  glossary = glossary + "\nthis.variableGlossary = `" + display_js_code(glossary) + "`;\n"
  glossary = glossary + print_message("Loaded Variable MD")
  return glossary



def parse_function(function_stack_element):
  function_type = function_stack_element[0]
  function_name = function_stack_element[1]
  function_params = function_stack_element[2]
  function_body = function_stack_element[3]
  function_body_definition = function_syntax(function_params, function_body)
  function_name_declaration = variable_syntax(function_type, function_name)
  function_string = assign_function(function_name_declaration, function_body_definition)
  function_glossary_name_declaration = "this.glossary." + function_name
  function_glossary_string = assign_function(function_glossary_name_declaration, function_body_definition)
  function_eval_name_declaration = "this.evalglossary." + function_name
  function_eval_value = js_multiline_string(function_string)
  function_glossary_eval_string = assign_value(function_eval_name_declaration, function_eval_value)
  return [
function_name, 
function_body_definition, 
function_string, 
function_glossary_string,
function_glossary_eval_string
  ]

def generate_function_glossary():
  return [parse_function(v) for v in get_function_stack()]

function_glossary = generate_function_glossary()
function_name = 0
function_body_definition=1
function_string=2
function_glossary_string=3
function_glossary_eval_string=4

def provide_function_glossary_of(index):
  return array_to_string([ele[index] for ele in function_glossary])

def add_function_glossary():
  names = provide_function_glossary_of(function_name)
  glossary = print_message(str(len(function_glossary)) + """
  ` + `+` + String(Object.keys(this.glossary).length) + ` functions + variables loading
  """)
  glossary = glossary + print_message(names)
  glossary = glossary + provide_function_glossary_of(function_string)
  glossary = glossary + provide_function_glossary_of(function_glossary_string)
  glossary = glossary +  print_message("`+String(Object.keys(this.glossary).length)+` functions loaded")
  glossary = glossary + print_message("""`+Object.keys(this.glossary).join("\\n").trim() + `""")
  glossary = glossary + array_to_string(get_function_execution_stack())
  glossary = glossary + print_message("Initialization calls done")
  glossary = glossary + provide_function_glossary_of(function_glossary_eval_string)
  glossary = glossary + "\nthis.functionGlossary = `" + display_js_code(glossary) + "`;\n"
  glossary = glossary + print_message("Loaded Functions MD")
  return glossary

def add_glossary():
  return add_variable_glossary() +"\n"+ add_function_glossary()

if __name__ == "__main__":
  print("\n\n\n\ndata_glossary[0][:100]")
  print(data_glossary[0][:100])
  print("\n\n\n\nvariable_glossary[0]\n")
  print(variable_glossary[0])
  print("\n\n\n\n\n\nfunction_glossary[0]\n")
  print(function_glossary[0])
  print("\n\n\n\n\n\nadd_variable_glossary() - hidden")
  print(add_variable_glossary())
  #print(truncate_js_code(add_variable_glossary()))
  print("\n\n\n\n\n\nadd_function_glossary()")
  #print(add_function_glossary())
  print(truncate_js_code(add_function_glossary()))

