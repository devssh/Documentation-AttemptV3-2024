


get_script = """

console.log(`

This is a script that is executed in the Head of the HTML document. 
It affects loading time and responsiveness of the website.
Only important scripts should be used here which are required for loading the first view and features of document.
This script can also break the html page
This script is used by data collection and analytics software to inject code at the root
`);

"""

get_pre_body_script = """

console.log(`
This is script loaded before body is loaded
A bulky pre body script will slow down the first render of the document depending on network/internet speed
`);

"""

if __name__ == "__main__":
  print("head tags script\n")
  print(get_script)
  print("pre body script\n")
  print(get_pre_body_script)
