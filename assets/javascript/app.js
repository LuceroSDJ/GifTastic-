$(document).ready(function() {  
    
//Initiate global variables
//Initial array of pets
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
  
//$(window).on('load', function() {
    renderButtons();
//});     windows on load function should render the buttons as soon as the page load, however, buttons are not generated as expected


//create .on('click') function that will trigger the AJAX call for the new button (user input) 
$('#userRequestsNewGifs').on('click', function(event) {
    event.preventDefault(); 
    
    //grab text from input box and create a variable & get rid of any spaces outside the text
    var userInputText = $('#userSearch').val().trim();
    console.log(userInputText);
    //push user input to pets array
    pets.push(userInputText);
    
    //empty div
    $('#emptyDiv').empty();
    
    //call function to generate new button
    renderButtons(); //BUG: buttons are multiplying. Try emptying the div before adding new  
    
});



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


//closes $(document).ready(function() {  
});
