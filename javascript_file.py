
from js_provider import variables_file, functions_file, glossary_file, md_file, postload_file


get_variable_script = """

console.log(`

This is script loaded after html and css template is loaded
This script runs after the first render to populate html and css and then data variables
This script will run second after the data bindings(both complete and optionally inprogress)

`);

""" + variables_file + """

console.log(`

Variables binding script downloaded and linked

`);

"""

get_function_script = """

console.log(`

This script is loaded in possibly async to get the JS functions binding
This script's binding will be used in postload which will first use window.onload
First the sync starts with the data binding
Second will be the variables binding
Third this binding will introduce the functions bindings from the script's bindings

`);

""" + functions_file + """

console.log(`

Functions script has been linked successfully
The linking order can be forced sync and possible async in browser

`);


"""

get_glossary_script = """

console.log(`

This script is loaded/linked in possibly async to get the JS function and variable glossary
This script is 3rd on sync priority in postload bindings execution

`);

""" + glossary_file + """

console.log(`

The glossary script is linked successfully

`);

"""

get_md_script = """

console.log(`

This script is loaded/linked in possibly async to get the JS metadata
This script is 4th on sync priority in postload

`);

""" + md_file + """

console.log(`

MD script is successfully linked now

`);

"""

get_postload_script = """

console.log(`

This script runs after all the other scripts including this one and all image assets are loaded.
Irrespective of network/internet speed, all the files must be available locally before the postload is run.
window.onload is overwritten to be executed when all files and scripts are done loading(over the network/internet).
This script has begun to be linked now

`);

window.onload = function() {

console.log(`

Postload script is running in window.onload scope now

`);

""" + postload_file + """

console.log(`

Postload script has successfully completed window.onload complete scope

`);

};

console.log(`

Postload script has been linked successfully

`);


"""

if __name__ = "__main__":
  print("variable script\n")
  print(get_variable_script)
  print("function script\n")
  #print(get_function_script)
  print("glossary script\n")
  #print(get_glossary_script)
  print("md script\n")
  #print(get_md_script)
  print("postload script\n")
  #print(get_postload_script)


