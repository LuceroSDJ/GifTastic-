# GifTastic-
## Data is provided by GIPHY API to create a dynamic web page using JavaScript and jQuery

### Technologies
* JavaScript
* jQuery

### API (Application Programming Interface)
* GIPHY API 

[Get an API Key](https://developers.giphy.com/dashboard/?create=true) to access their API data.

[Read GIPHY's Software Development Kit](https://developers.giphy.com/docs/) & refer to the following GIPHY parameters:
     * `q`
     * `limit`
     * `rating`

#### What is an API?
An API is the part of the server that receives requests and sends responses. In this case, we will make an AJAX call directly to GHIPHY's server with a request. Then, GHIPHY's API will send us back relevant information.

#### What is AJAX? 
AJAX stands for Asynchronous JavaScript And XML. It can send and receive information in various formats, including JSON, XML, HTML, and text files. AJAX’s most appealing characteristic is its "asynchronous" nature, which means it can communicate with the server, exchange data, and update the page without having to refresh the page.
Source: [MDN Web docs](https://developer.mozilla.org/en-US/docs/Web/Guide/AJAX/Getting_Started)

#### How do I make an AJAX call?
This app uses jQuery's popular `$.ajax()` shorthand method to retrieve data from GHIPHY's server with an HTTP GET request. 
In order to use this method, we must include the jQuery library:
` <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script> `

### GIPHY API supports emojis across Search, Translate, and Random endpoints! This app uses `Search endpoint.`

### Functionality
1. Select an `emoji` from the drop-down menu, and notice the app generates a button with the emoji of your choice.
2. Click on the emoji to make an AJAX call to GHYPHI API.
3. As a result, 10 still-gifs appear repesenting the emoji you selected.
4. Click on the gifs to animate them, and click a second time to stop them.

[Demo Video](https://www.youtube.com/watch?v=BqreERTLjgQ&feature=youtu.be)

## Explore GifTastic app to generate gifs representing emojis! 
## Emojis + Gifs = tons of FUN! 😉
