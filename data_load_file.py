from data_provider import completed_data_file, inprogress_data_file

get_completed_data_script = """

console.log(`

Completed data is begin link

`);

""" + completed_data_file + """

console.log(`

Completed data is linked successfully

`);

"""

get_inprogress_data_script = """

console.log(`

Inprogress data is begin link

`);

""" + inprogress_data_file + """

console.log(`

Inprogress data is linked successfully

`);

"""


if __name__ == "__main__":
  print("completed data script\n")
  print(get_completed_data_script[0:1000])
  print("inprogress data script\n")
  #print(get_inprogress_data_script[0:1000])
