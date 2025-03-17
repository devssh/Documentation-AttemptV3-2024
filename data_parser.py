


import os
import re
from helpers_js_glossary import (
display_js_code,
function_syntax,
return_value,
truncate_js_code
)

def read_file(pathname):
  with open(pathname) as file:
    return "".join(file.readlines())

def read_directory(pathname):
  return list(sorted(os.listdir(pathname)))

def read_file_data(filepath):
  print("reading " + filepath)
  return list(eval(read_file(filepath)))

def sort_criteria(document):
  document_index=document[1]
  return document_index

def read_txt_files(pathname):
  files = read_directory(pathname)
  files = [x for x in files if x.endswith(".txt")]
  file_data = [read_file_data(filepath) for filepath in files]
  sorted_file_data = sorted(file_data, key=sort_criteria)
  return sorted_file_data

path = "/Users/devssh/EventServer/Codebase/Documentation/"
document_content = list(read_txt_files(path))

def parse_document_to_JS(document):
  heading = document[0].strip()
  document_index = "\"" + document[1] + "\""
  document_creation_time = "\"" + document[2] + "\""
  document_updated_time = "\"" + document[3] + "\""
  code_block = document[4]
  data_block=" + ".join(document[5:])
  heading_url = re.sub("`", "", heading.lower()).strip()
  heading_url = "\"" + re.sub(" ", "-", heading_url) + "\""
  heading = "\"" + heading + "\""

  document_content_function=function_syntax([], code_block.strip() + "\n" + return_value(data_block))
  return [heading, document_content_function, document_creation_time, document_updated_time, document_index, heading_url]


documents = [parse_document_to_JS(document) for document in document_content]
document_heading=0
document_content_string=1
document_creation_time=2
document_update_time=3
document_index=4
document_url=5

def get_document_view(index):
  return [x[index] for x in documents]

def add_hyperlink(heading_url, heading):
  return "<a href=\"?page=" + heading_url[1:-1] + "\">" + heading + "</a>"

def create_index_point(heading, index, document_indexes, urls):
  index_point = document_indexes[index][1:-1] + " "
  index_point = index_point + add_hyperlink(urls[index], heading[1:-1])
  return index_point
  

def create_index():
  headings = get_document_view(document_heading)
  document_indexes = get_document_view(document_index)
  urls = get_document_view(document_url)
  headings = [create_index_point(heading, i, document_indexes, urls) for i, heading in enumerate(headings)]
  document_body = str(len(documents) + 1) + " documents found\n\nAppendix are not meant for manual human search\n\n"
  document_body = document_body + "00001. <a href=\"?page=documentation-index\">Documentation Index</a>\n"
  document_body = document_body + "\n".join(headings)
  document_index_file = [
"\"Documentation Index\"",
function_syntax([], return_value("`" + document_body + "`")),
"\"2024-05-17 00:00:00\"",
"\"2024-05-17 00:00:00\"",
"\"00001. Documentation Index\"",
"\"documentation-index\""
  ]
  return document_index_file

def to_JS_array(document):
  return "[" + ",".join(document) + "]"

def to_JS_2D_array(list_of_JS_array):
  return "[" + ",\n".join(list_of_JS_array) + "]"

index_document = create_index()
updated_documents = [index_document, *documents]
documents_list = to_JS_2D_array([to_JS_array(x) for x in updated_documents])



if __name__ == "__main__":
  print(index_document)
  print("Checking document array integrity")
  print(truncate_js_code("".join(documents_list))[:1000])

