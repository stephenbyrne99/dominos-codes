from bs4 import BeautifulSoup
import requests
import re

# Constants
CODE_LENGTH = 8
PAGE_LINK = 'https://www.boards.ie/vbulletin/showthread.php?t=2056744169&page=1000' #IF INDEX > Num pages, returns last, hence 10000


page_response = requests.get(PAGE_LINK, timeout=5)
page_content = BeautifulSoup(page_response.content, "html.parser")
posts = page_content.find_all('div',{'class':'postcontent'})

postContent= []
possibleCodes = []
numPosts = 0

for post in posts:
    postContent.append(post.text)
    numPosts = numPosts + 1

print('Num posts' + str(numPosts))

#may need to change for loop to reverse order
for post in postContent:
    # Isolate post into words
    # Cycle through words in post
    # If word has 8 letters it is a possible code
    # Store possible codes
    # Check if possible codes works -> selenium? or just send to db?
    wordList = re.sub("[^\w]", " ",  post).split()

    #strip white space
    for i,item in enumerate(wordList):
        wordList[i] = wordList[i].strip()

    for word in wordList:
        #check if length right for code
        if len(word) == CODE_LENGTH and word.isupper():
            possibleCodes.append(word)

for code in possibleCodes:
    print('Possible code: ' + code)




