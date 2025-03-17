



def flatten(array2D):
  return [flat for array1D in array2D for flat in array1D]

def pretty_print(map_or_object):
  import json
  print(json.dumps(map_or_object, sort_keys=True, indent=4))

if __name__ == "__main__":
  print(flatten([[1, 2, 3], [4, 5]]))
  pretty_print({"name": ["J", "D", "B", "Monad"], "defined": "Sun microsystems, Oracle and Bell labs"})
