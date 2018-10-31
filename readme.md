## JQUERY + API BOILERPLATE


This example uses the wikipedia api and jquery's getJSON method. When you enter a keyword and hit search, it should pull the descriptions for the results from wikipedia.

![screenshot of app](https://github.com/AaratiAkkapeddi/jquery_api_boilerplate/blob/master/example.png)

You can read more about the getJSON method here -> https://api.jquery.com/jquery.getjson/

First off, you will have to run a local server to get this working (as opposed to simply opening the index.html file in a browser).
To run a simple server, you should
1. navigate to the Terminal app.
2. Once the terminal app is open type in `cd ` (the space at the end is important). Dont hit enter
3. After typing that, drag this boilerplate folder from finder into the terminal window.

You should see something like this...

`cd /Users/aarati/Desktop/api_boilerplate`

4. now hit enter in the terminal window
5. now type `python -m SimpleHTTPServer 8000` into the terminal and hit enter.
6. now, if you navigate to http://localhost:8080 in any browser you should see this project up and running.
7. To stop the server, hit cntrl + C in the terminal window.

When you are using your own apis, there are a few things to note about url structure...
This is the url I used in the example (minus the search term 'potato')...

http://en.wikipedia.org/w/api.php?origin=*&action=query&format=json&list=search&srsearch=potato

the _origin=*_ part of the url is important in avoiding CORS errors you may need to add that yourself to whatever url you end up using.

understand how your api is structured. This will inform how your link should look. For example I know that for a query, I am filling in the 'srsearch' (the last part of the url) with the word i want to look up. Depending on what info you want you will have to do research to figure out the correct _endpoint_ url to use.

Also keep in mind depending what api you use you may need to generate an api key and include this in your url structure as well.

console.log() everything. use it to understand how the json data that is being returned is structured. That's how I figured out I needed to use `data.query.search` to get the actual results for this example (line 8 of main.js)

