
import subprocess
import os

from html_file import get_html_data 
from css_file import get_css_data
from script_file import get_script, get_pre_body_script
from javascript_file import get_variable_script, get_function_script, get_glossary_script, get_md_script, get_postload_script
from data_load_file import get_completed_data_script, get_inprogress_data_script

PATH_TO_STATIC = os.getcwd() + "/Static/"

def useSubprocess(command, commandInput=""):
  myprocess = subprocess.Popen(command, text=True, shell=True, stdin=subprocess.PIPE, stdout=subprocess.PIPE, stderr=subprocess.PIPE)
  output, errors = myprocess.communicate(input=commandInput)
  myprocess.wait()
  return [output, errors]

def writeDirectory(namepath):
  useSubprocess("/usr/bin/mkdir -p" + PATH_TO_STATIC + namepath)

def removeDirectory(namepath):
  useSubprocess("/bin/rm -rf " + PATH_TO_STATIC + namepath)

def removeFile(namepath):
  useSubprocess("/bin/rm -rf " + PATH_TO_STATIC + namepath)

def writeNewFile(filename, data):
  mode = "w"
  with open(PATH_TO_STATIC + filename, mode) as file:
    file.write(data)
    file.flush()
    file.close()

def staticFolderSize():
    result = useSubprocess("/usr/bin/du -sh " + PATH_TO_STATIC)
    writeNewFile("size.txt", result[0].split("\t")[0].strip() + "B")

def runnerMethod():
  removeDirectory(PATH_TO_STATIC)
  writeDirectory(PATH_TO_STATIC)
  writeNewFile("jsud.html", get_html_data)
  writeNewFile("jsud.css", get_css_data)
  writeNewFile("jsud.js", get_script)
  writeNewFile("js-pre-body.js", get_pre_body_script)
  writeNewFile("variable.js", get_variable_script)
  writeNewFile("function.js", get_function_script)
  writeNewFile("glossary.js", get_glossary_script)
  writeNewFile("md.js", get_md_script)
  writeNewFile("completed-data.js", get_completed_data_script)
  writeNewFile("inprogress-data.js", get_inprogress_data_script)
  writeNewFile("postload.js", get_postload_script)
  staticFolderSize()

if __name__ == "__main__":
  runnerMethod()

