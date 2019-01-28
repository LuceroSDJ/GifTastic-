$(document).ready(function() {  

//topic will change for testing purposes, I will use domestic pets

//Initial array of animals
var pets = ['dog', 'cat', 'fish'];

//create funstion for displaying pets buttons
function renderButtons() {
    //loop through the array of pets
    for(var i = 0; i < pets.length; i++) {
        //generate buttons for each pet in the array on the fly
        var button = $('<button>');
        button.addClass('pet');
        //add data-attribute with value of pets at index i
        button.attr('data-name', pets[i]);
        //add button's text with the value of the pet at index i
        button.text(pets[i]);
        //append button to html #emptyDiv
        $('#emptyDiv').append(button);
        
    };
};

//call function for testing purposes
renderButtons();



var APIkey = 'u2ENViYUD7u21pSzm2R0ydD1mJENc29L'
//queryURL for Giphy API
var queryURL = 'https://api.giphy.com/v1/gifs/trending?api_key=' + APIkey;


/*
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
*/



//create .on('click') function that will trigger the AJAX call for the new button (user input) 
$('#userRequestsNewGifs').on('click', function(event) {
    event.preventDefault(); 
    
//grab text from input box and create a variable & get rid of any spaces outside the text
var inputBoxText = $('#userSearch').val().trim();
console.log(inputBoxText);
//Then, construct Giphy URL 
//Hit the queryURL with ajax then display the new button in the div
$.ajax({
    url: queryURL,
    method: 'GET'
}).then(function(response) {
    //select the div where new buttons must be added & .text(inputBoxText)
    //var button = $('<button>');

});

});

//closes $(document).ready(function() {  
});
