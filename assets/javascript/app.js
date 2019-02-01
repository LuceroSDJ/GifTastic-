$(document).ready(function() {  //run once the page DOM is ready to execute lines of code inside this function
    
//Initiate global variable
//Initial array of emojis
var topics = ['🤓', '👻', '😻'];
    
//create function to display  buttons
function renderButtons() {
    //loop through the array of topics
    for(var i = 0; i < topics.length; i++) {
        //generate buttons for each emoji in the array on the fly
        var button = $('<button>');
        button.addClass('emoji');
        //add data-attribute with value of emoji at index i
        button.attr('data-name', topics[i]);
        //add button's value of the emoji at index i
        button.text(topics[i]);
        //append button to html #emptyDiv
        $('#emptyDiv').append(button);   
    };
};
  
renderButtons();   //call function to generate initial buttons

//Capture user's input value, push the value into the array to render a new button
$('#userRequestsNewGifs').on('click', function(event) {
    event.preventDefault(); 
    //grab text from input box and create a variable & get rid of any spaces outside the text
    var userInputText = $('#userSearch').val().trim();
    console.log(userInputText);
    //push user input to topics array
    topics.push(userInputText);
    //empty div
    $('#emptyDiv').empty();
    //call function to generate new button
    renderButtons();
});

//Search, Translate, and Random endpoints SUPPORT EMOJIS! 

//on click event function responds when image with class emoji is clicked
$(document).on('click', '.emoji', function(event) {
    event.preventDefault();
    $('#images').empty();
    var buttonValue = $(this).attr('data-name');   //('data-name', emojis[i])
    //trigger the AJAX call when user clicks on a button
    var APIkey = 'u2ENViYUD7u21pSzm2R0ydD1mJENc29L'
    //construct URL to search for buttonValue 
    //queryURL for Giphy API 
    //host: api.giphy.com ; path: /v1/gifs/search
    var queryURL = 'https://api.giphy.com/v1/gifs/search?q=' + buttonValue +  '&api_key=' + APIkey + '&limit=10';    
    //hit queryURL with AJAX, then add the response data into div with id of images
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
            //do not display pg-13 or r rated images & display the corresponding rating under the images & appended to html
            if(response[i].rating !== 'r' && response[i].rating !== 'pg-13') {
                //create a variable to store the response's rating
                var rating = response[i].rating;
                //create a paragraph with the rating & store it in a variable
                var displayRating = $('<p>').text('RATING: ' + rating);
                displayRating.addClass('col-md-6');
                //create an image tag, store it in a variable, add a class
                var image = $('<img>');
                image.addClass('gif');
                image.addClass('col-md-6');
                //add src attribute & data-still & animate to image tag from the result item
                image.attr('src', response[i].images.fixed_height_still.url);     
                image.attr('data-still', response[i].images.fixed_height_still.url);
                image.attr('data-animate', response[i].images.fixed_height.url);   
                image.attr('data-state', 'still');
                //append the rating to the div 
                //append the image to the div
                $('#images').append(image);
                $('#images').append(displayRating);
            };
        };   
    });    
});    


//select all gifs and add an on click event function (document).on click
$(document).on('click', '.gif', function() {
    //capture data-state attribute and store it in a variable
        var state = $(this).attr('data-state');
        //conditions: if a gif's current status is data-still, change it to data-animate & vice-versa
        if(state === 'still') {
            $(this).attr('src', $(this).attr('data-animate'));
            $(this).attr('data-state', 'animate');
        }else{
            $(this).attr('src', $(this).attr('data-still'));
            $(this).attr('data-state', 'still');
        }       
});

});  //closes $(document).ready(function() 
