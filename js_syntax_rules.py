
import re

ASSIGN=" = "
ARROW=" =>"
END=";"
DELIMITER=" "
SEPARATOR=", "
NEWLINE="\n"
JS_NEWLINE="\\n"
END_LINE = NEWLINE + NEWLINE
BACKTICK="`"

VARIABLE_SCOPES = ["var ", "const ", "let "]
BIND_SCOPES = ["this.", "globalThis."]
BIND_SCOPE = "globalThis."
DEFAULT_TRANSIENT_SCOPE="const "
AWAIT="await "
ASYNC="async "

FUNCTION_CONSTRUCTOR = "function "
OPEN_PARENTHESIS = "("
CLOSE_PARENTHESIS = ")"
OPEN_CURLY_BRACES = "{"
CLOSE_CURLY_BRACES = "}"
OPEN_SQUARE_BRACKETS = "["
OPEN_SQUARE_BRACKETS = "]"

RETURN_VALUE="return "
CONSOLE_LOG="console.log"

def __CONSOLE_LOG(message):
  return CONSOLE_LOG + OPEN_PARENTHESIS + message + CLOSE_PARENTHESIS + END + END_LINE

def __bind(variable_name, binding_scope=BIND_SCOPE):
  return binding_scope + variable_name

def __parameters_syntax(params):
  return OPEN_PARENTHESIS + SEPARATOR.join(params) + CLOSE_PARENTHESIS

def __body_syntax(body=""):
  return DELIMITER + OPEN_CURLY_BRACES + NEWLINE + body + NEWLINE + CLOSE_CURLY_BRACES + END + END_LINE;

def __anonymous_function_syntax(body="", params=[]):
  return FUNCTION_CONSTRUCTOR + __parameters_syntax(params) + __body_syntax(body)

def __async_anonymous_function(body, params):
  return ASYNC + __anonymous_function_syntax(body, params)

def __arrow_syntax(body="", params=[]):
  function_signature = __parameters_syntax(params)
  function_body = ARROW + __body_syntax(body)
  return function_signature + function_body

def __single_line_return(body, params):
  return __arrow_syntax(RETURN_VALUE + body, params)

def __bind_value(name, value):
  if not value.strip().endswith(END):
    return __bind(name) + ASSIGN + value.strip() + END + NEWLINE
  return __bind(name) + ASSIGN + value

def __bind_awaited_value(bind_syntax, value):
  return __bind_value(bind_syntax, AWAIT + value)

def print_message(message):
  PRINT_MESSAGE_START = BACKTICK + END_LINE
  PRINT_MESSAGE_END = END_LINE + BACKTICK
  return __CONSOLE_LOG(PRINT_MESSAGE_START + message + PRINT_MESSAGE_END)

def generate_init_js(code_config):
  if code_config["is_single_name"]:
    return [__bind_value(code_config["name"], code_config["value"])]
  return [__bind_value(name, code_config["value"]) for name in code_config["names"]]


def js_multiline_string(value):
  return BACKTICK + re.sub(r"`", "\\`", value) + BACKTICK

CODE_BLACKLIST = ["`", "\"", "'", "<", ">"]

def display_js_code(some_string):
  return "".join(["*" if str(x) in CODE_BLACKLIST else str(x) for x in some_string ])

def truncate_js_code(some_string):
  return re.sub(r"`(?s).+?`", "...", some_string)

if __name__ == "__main__":
  end_with = "END" + END_LINE

  print("__console.log \"\"Hello World\"\"")
  print(__CONSOLE_LOG("\"Hello World\""), end=end_with)
  
  print("__bind bindVariable globalThis")
  print(__bind("bindVariable"), end=end_with)
  
  print("__parameters_syntax [param1, param2, param3]")
  print(__parameters_syntax(["param1", "param2", "param3"]), end=end_with)
  
  print("__body_syntax return value*2;")
  print(__body_syntax("return value*2;"), end=end_with)
  
  print("__anonymous_function_syntax return param1*2; [param1, 2, 3]")
  print(__anonymous_function_syntax("return param1*2;", ["param1", "param2", "param3"]), end=end_with)
  
  print("__async_anonymous_function return param1*2; [param1, 2, 3]")
  print(__async_anonymous_function("return param1*2;", ["param1", "param2", "param3"]), end=end_with)
  
  print("__arrow_syntax return param1*2; [param1, 2, 3]")
  print(__arrow_syntax("return param1*2;", ["param1", "param2", "param3"]), end=end_with)
  
  print("__single_line_return param1*2; [param1]")
  print(__single_line_return("param1*2;", ["param1"]), end=end_with)
  
  print("__bind_value globalThis.myValue 5")
  print(__bind_value("globalThis.myValue", "5"), end=end_with)
  
  print("__bind_value globalThis.myValue (param) => {<newline>return param*2;<newline>};<newline><newline>")
  print(__bind_value("globalThis.myValue", "(param) => {\nreturn param*2;\n};\n\n"), end=end_with)

  print("__bind_awaited_value globalThis.myValue myAsyncFunction()")
  print(__bind_awaited_value("globalThis.myValue", "myAsyncFunction()"), end=end_with)

  print("\n\n\n\nPublic builder functions usage\n\n\n")

  print("print_message Hello World")
  print(print_message("Hello World"), end=end_with)



