var animals = ['lion', 'tiger', 'bear', 'wolf', 'crocodile', 'hippo', 'giraffe', 'bison', 'elk', 'quail', 'deer', 'panther', 'mountain lion' ];

$(document).ready(function () {
  //your code here

//build buttons from the array:
animals.forEach(function(each) {
	// console.log(each);
	var b = $('<button>');
	b.addClass('animal-button btn btn-default btn-lg');
	b.attr('data-animal', each);
	b.text(each);
	//add the buttons to the DOM
	$('#buttons').append(b);
});

//event listener for "submit" button
$('#submit').on('click', function(event) {
	event.preventDefault();

	//grab text from input field and put it in a var
	var newAnimal = $('#input').val().trim();
	console.log(newAnimal);
	//add text from the input field to the array
	animals.push(newAnimal);
	// console.log(animals);
	//create the new animal button
	var c = $('<button>');
	c.addClass('animal-button btn btn-default btn-lg');
	c.attr('data-animal', newAnimal);
	c.text(newAnimal);
	//add the new animal button to the DOM
	$('#buttons').append(c);

});


//event listener for the animal buttons to be clicked
$('.animal-button').on('click', function() {
	//grab the data value from the button and put it in a variable
	var thisAnimal = $(this).data('animal');
	//the data attribute is only working or the original buttons not for new.??
	console.log(thisAnimal);
	//create url variable
	var queryURL = 'http://api.giphy.com/v1/gifs/search?q=' + thisAnimal + '&api_key=GVCTd0mGVPvvKq31RpOcdnKSIexmVIDU&limit=9';

	//ajax call get/then
	$.ajax({
		url: queryURL,
		method: "GET"
	}).then(function(response) {
		console.log(response.data);
	
	// clear existing gifs, 
	$('#gifs').empty();

	//create the div, add the image and append to the DOM
	for (i = 0; i < response.data.length; i++) {

		var gifDiv = $('<div style="padding: 10px">');

		var gifImg = $('<img>').attr('src', response.data[i].images.downsized_still.url);	
		gifImg.attr('data-still', response.data[i].images.downsized_still.url);
		gifImg.attr('data-animate', response.data[i].images.downsized.url);
		gifImg.attr('data-state', still);

		gifDiv.append("<p>Rating: "+response.data[i].rating+"</p>");
		gifDiv.append(gifImg);

		$('#gifs').append(gifDiv);

		};

		
	//include click start and stop using data-

	});

});


//end dcoument.ready function
});