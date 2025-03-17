from head_file import head_template
from html_body_file import body_template
from script_link_file import post_body_scripts, pre_body_scripts

get_html_data="""

<!DOCTYPE HTML>
<HEAD>

""" + head_template + """

</HEAD>
<BODY>

""" + pre_body_scripts + body_template + post_body_scripts + """

</BODY>
</HTML>

"""

if __name__ == "__main__":
  print("HTML file data\n")
  print(get_html_data)
