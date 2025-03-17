
get_css_data = """

body {
background-color: black;
color: white;
font-family: monospace;
font-size: 1vw;
margin-left: 2vw;
margin-top: 2vw;
line-height: 200%;
}

a {
color: #1188FF;
text-underline-offset: 0.2em;
}

hr {
margin-bottom: 1vw;
width: 90%;
min-width: 90%;
max-width: 90%;
margin-left: 0vw;
padding-top: 0.5vw;
}

.document {
width: 100%;
min-width: 100%;
max-width: 100%;
overflow: scroll;
word-break: break-all;
word-wrap: break-word;
height: 50vw;
min-height: 50vw;
max-height: 50vw;
}

.document-header {
margin-top: 1vw;
font-size: 3vw;
font-family: monospace;
}

.document-header-2 {
font-size: 2.5vw;
font-family: monospace;
}

.document-footer {
display: flex;
flex-direction: row;
margin-top: 2vw;
}

.left-button, .right-button, .home-button {
width: 4vw;
min-width: 4vw;
max-width: 4vw;
height: 3vw;
min-height: 3vw;
max-height: 3vw;
border: 1px solid slategrey;
padding-top: 1vw;
padding-left: 1vw;
padding-bottom: 0.5vw;
font-size: 4vw;
margin-right: 4vw;
background-color: darkslategrey;
}

.page-id {
width: 8vw;
min-width: 8vw;
max-width: 8vw;
height: 2vw;
min-height: 2vw;
max-height: 2vw;
margin-top: 1vw;
margin-right: 1vw;
font-size: 2vw;
}

.page-total {
width: 15vw;
min-width: 15vw;
max-width: 15vw;
height: 4vw;
min-height: 4vw;
max-height: 4vw;
margin-top: 1vw;
margin-right: 4vw;
font-size: 2vw;
}

.heading2 {
font-size: 2vw;
font-family: monospace;
}

.scrollable {
overflow-x: hidden;
overflow-y: scroll;
min-height: 40vw;
max-height: 40vw;
height: 40vw;
width: 90%;
min-width: 90%;
max-width: 90;
word-break: break-all;
word-wrap: break-word;
white-space: pre-line;
margin-bottom: 2vw;
}

.search {
width: 15vw;
min-width: 15vw;
max-width: 15vw;
height: 4vw;
min-height: 4vw;
max-height: 4vw;
margin-top: 1vw;
font-size: 1.5vw;
}

.search-phrase {
width: 12vw;
min-width: 12vw;
max-width: 12vw;
height: 2vw;
min-height: 2vw;
max-height: 2vw;
margin-top: 1vw;
margin-right: 1vw;
font-size: 1vw;
}

"""

if __name__ == "__main__":
  print("css file data \n")
  print(get_css_data)
