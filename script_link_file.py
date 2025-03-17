
pre_body_scripts = """
<script src="js-pre-body.js"></script>
<script language="javascript">var js_version="1.0"</script>
<script language="javascript1.1">var js_version="1.1"</script>
<script language="javascript1.2">var js_version="1.2"</script>
<script language="javascript1.3">var js_version="1.3"</script>
<script language="javascript1.4">var js_version="1.4"</script>
<script language="javascript1.5">var js_version="1.5"</script>
<script language="javascript1.6">var js_version="1.6"</script>
<script language="javascript1.7">var js_version="1.7"</script>
<script language="javascript1.8">var js_version="1.8"</script>
<script language="javascript1.9">var js_version="1.9"</script>
<script language="javascript1.10">var js_version="1.10"</script>
"""

post_body_scripts = """
<script src="completed-data.js"></script>
<script src="inprogress-data.js"></script>
<script src="variable.js"></script>
<script src="function.js"></script>
<script src="glossary.js"></script>
<script src="md.js"></script>
<script src="postload.js"></script>
"""

if __name__ == "__main__":
  print("pre scripts inside body tag before body content\n")
  print(pre_body_scripts)
  print("post scripts inside body tag before body content\n")
  print(post_body_scripts)
