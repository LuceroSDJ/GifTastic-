var APIkey = 'u2ENViYUD7u21pSzm2R0ydD1mJENc29L'
//queryURL for Giphy API
var queryURL = 'https://api.giphy.com/v1/gifs/trending?api_key=' + APIkey;

$.ajax({
    url: queryURL,
    method: 'GET'
}).then(function(response) {
    //console.log resulting object
    console.log(response);
    console.log(queryURL);
    //append GIFS in html page for default buttons

    //initialize a variable to create new buttons <button>  //I could create an outside function to generate a button and to avoid repeating code
    //append new button
});