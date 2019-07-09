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

#### How do I make an AJAX call?
This app uses jQuery's popular `$.ajax()` shorthand method to retrieve data from GHIPHY's server with an HTTP GET request. 

In order to use this method, we must include the jQuery library:
` <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script> `

### GIPHY API supports emojis across Search, Translate, and Random endpoints! This app uses Search endpoint.
### By clicking on the buttons with emojis in them, we are triggering an AJAX call and hitting the awesome GIPHY API.
### As a result, we get 10 still gifs representing the emotion of our expressive emoji.
### Then, you get to click on the gifs to animate or stop them.
### Lastly, you can create a new button by selecting a new emoji from the drop down menu.  

[Demo Video](https://www.youtube.com/watch?v=BqreERTLjgQ&feature=youtu.be)

## Explore GifTastic app to generate gifs representing emojis! 
## Emojis + Gifs = tons of FUN! 😉
