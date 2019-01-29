$(document).ready(function() {  
    
//Initiate global variables
//Initial array of pets
var topics = ['dog', 'cat', 'fish'];
    
//create funstion for displaying pets buttons
function renderButtons() {
    //loop through the array of pets
    for(var i = 0; i < topics.length; i++) {
        //generate buttons for each pet in the array on the fly
        var button = $('<button>');
        button.addClass('pet');
        //add data-attribute with value of pets at index i
        button.attr('data-name', topics[i]);
        //add button's text with the value of the pet at index i
        button.text(topics[i]);
        //append button to html #emptyDiv
        $('#emptyDiv').append(button);   
    };
};
  
//$(window).on('load', function() {
renderButtons();   //call function to render initial buttons
//});     windows on load function should render the buttons as soon as the page load, however, buttons are not generated as expected




//create .on('click) function to capture user's input value, push the value into the array to render a new button
$('#userRequestsNewGifs').on('click', function(event) {
    event.preventDefault(); 
    //grab text from input box and create a variable & get rid of any spaces outside the text
    var userInputText = $('#userSearch').val().trim();
    console.log(userInputText);
    //push user input to pets array
    topics.push(userInputText);
    //empty div
    $('#emptyDiv').empty();
    //call function to generate new button
    renderButtons();
});





//function addGif() {
    
    //create .on('click') function that will trigger the AJAX call the button the user clicks
$('button').on('click', function()  {
    var buttonValue = $(this).attr('data-name');   //('data-name', pets[i])
    //construct URL to search for buttonValue 
    var APIkey = 'u2ENViYUD7u21pSzm2R0ydD1mJENc29L'
    //queryURL for Giphy API 
    //host: api.giphy.com ; path: /v1/gifs/search
    var queryURL = 'https://api.giphy.com/v1/gifs/search?q=' + buttonValue +  '&api_key=' + APIkey + '&limit=2';
    
    //hit queryURL with AJAX, then add the response data into div.span with id of images
    $.ajax({
        url: queryURL,
        method: 'GET'
    //THEN, after data is returned execute the following tasks
    }).then(function(response) {
        //console.log resulting object
        console.log(response);
        console.log(queryURL);
        //store an array of results in a variable
        var response = response.data;
        //loop through the response item
        for(var i = 0; i < response.length; i++) {
        
            //do not display pg-13 or r rated images & display the corresponding rating to the images appended to html
            if(response[i].rating !== 'r' && response[i].rating !== 'pg-13') {
                //create a variable to store the response's rating
                var rating = response[i].rating;
                //create a paragraph with the rating & store it in a variable
                var displayRating = $('<p>').text('Rating: ' + rating);
                //append the rating to the div (i will prepend for now to see the most current git at the top)
                $('#images').prepend(displayRating);

                //create an image tag
                var image = $('<img>');
                //add src attribute to image tag from the result item
                image.attr('src', response[i].images.fixed_height.url);
                //append the image to the div
                $('#images').prepend(image);
            };
        };



            //append GIFS in html page for default buttons
            //$('#images').text(JSON.stringify(response));  //this returns a long list of links
        
    });    
});

/* FOR THE MOMENT, I DECIDED NOT TO USE THE METHOD OF CREATING A SEPARATE FUNCTION TO THEN CALL IT HERE
//Now, I have to capture the value of the button when user clicks on it
//when user clicks on a button with class pet, add 10 pet gifs to images div
$(document).on('click', '.pet', function() {
    //var petName = $(this).attr('data-name');
    //alert(petName);
    addGif();
});
*/



///v1/stickers/random    FILTERS RESULTS BY RATING

//closes $(document).ready(function() {  
});
