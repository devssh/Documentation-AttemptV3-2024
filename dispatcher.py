


from js_bindings_init import init_variables, simple_init

def dispatch(code={}):
  if type(code) != type({}):
    return "Invalid dispatch params"
  if "dispatcher" not in list(code.keys()):
    return "No dispatcher provided"
  dispatcher_name = code["dispatcher"]
  if dispatcher_name == "simple_init":
    return "".join(simple_init(code))
  return "Unable to find valid dispatcher name"

if __name__ == "__main__":
  print("Init variables simple_init_dispatcher")
  print(dispatch({"dispatcher": "simple_init", "definitions": []}))
  print(dispatch(init_variables))
  print("Successfuly dispatched")
  
