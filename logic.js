// The bison is highly recommended....
// I couldn't get the images to flow across, only down

var animals = ['lion', 'tiger', 'bear', 'wolf', 'crocodile', 'hippo', 'giraffe', 'bison', 'elk', 'quail', 'deer', 'panther', 'mountain lion'];

$(document).ready(function() {
    //your code here


//a function to render buttons from the array
function render() {

    $('#buttons').empty();
    //build buttons from the array:
    animals.forEach(function(each) {
        // console.log(each);
        var b = $('<button style="margin: 10px">');
        b.addClass('animal-button btn btn-success btn-lg');
        b.attr('data-animal', each);
        b.text(each);
        //add the buttons to the DOM
        $('#buttons').append(b);
    });
};

    //event listener for "submit" button
    $('#submit').on('click', function(event) {
        event.preventDefault();

        //grab text from input field and put it in a var
        var newAnimal = $('#input').val().trim();
        // console.log(newAnimal);
        //add var into the array
        animals.push(newAnimal);
        // console.log(animals);
        //create the new animal button
        render();
        $('#input').val('');
    });


    //event listener for the animal buttons to be clicked
    $(document).on('click', '.animal-button', function() {
        //grab the data value from the button and put it in a variable
        var thisAnimal = $(this).data('animal');
        //the data attribute is only working or the original buttons not for new.??
        console.log(thisAnimal);
        //create url variable
        var queryURL = 'https://api.giphy.com/v1/gifs/search?q=' + thisAnimal + '&api_key=GVCTd0mGVPvvKq31RpOcdnKSIexmVIDU&limit=9';

        //ajax call get/then
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function(response) {
            console.log(response.data);

            // clear existing gifs, 
            $('#gifs').empty();

            //create the div, add the images (still and animated), state and rating
            for (i = 0; i < response.data.length; i++) {

                var gifDiv = $('<div style="padding: 10px">');


                var gifImg = $('<img>').attr('src', response.data[i].images.downsized_still.url);

                gifImg.attr('data-still', response.data[i].images.downsized_still.url);
                gifImg.attr('data-animate', response.data[i].images.downsized.url);
                gifImg.attr('data-state', 'still');
               
                gifDiv.append("<p>Rating: " + response.data[i].rating + "</p>");
                gifDiv.append(gifImg);
                //append to the DOM
                $('#gifs').append(gifDiv);

            };

        });

    });





    //include click start and stop using data-state

    $(document).on("click", "img", function() {
       
        //The attr jQuery method allows us to get or set the value of any attribute on our HTML element
        var state = $(this).attr("data-state");
        console.log(state);
        // If the clicked image's state is still, update its src attribute to what its data-animate value is.
        // Then, set the image's data-state to animate
        // Else set src to the data-still value
        if (state === "still") {
          $(this).attr("src", $(this).attr("data-animate"));
          $(this).attr("data-state", "animate");
        } else {
          $(this).attr("src", $(this).attr("data-still"));
          $(this).attr("data-state", "still");
        }
    });

//call the render function for the inital load
render();


    //end dcoument.ready function
});
