
from create_static_documentation import writeNewFile
import re

valid_characters = [
"a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
"n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
".", "<", " ", ">", "[", "]", "(", ")", "\n"
]

symbols = ""
uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

valid_characters = [*valid_characters, *uppercase, *symbols]

def removeTags(data):
  return re.sub(r"<.*?>", " ", data)

def removeHTML():
  with open("test.raw") as file:
    data = "".join(file.readlines())
    data = [x for x in data if x in valid_characters]
    data = "".join(data)
    data = removeTags(data)
    data = re.sub(r"\n", ". ", data)
    data = re.sub(r"\s+", " ", data)
    data = re.sub(r"[.] ", ".\n", data)
    writeNewFile("test.txt", data)

if __name__ == "__main__":
  removeHTML()
