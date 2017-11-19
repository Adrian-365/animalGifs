var animals = ['lion', 'tiger', 'bear', 'wolf', 'crockodile', 'hippo', 'giraffe', 'bison', 'elk', 'quail', 'deer', 'panther', 'mountain lion' ];

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
	// console.log('clicked!!');
	//grab text from the input field 
	var newAnimal = $('#input').val();
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
	//console.log only works for original buttons not for new.??
	console.log(thisAnimal);
	//create url variable
	var queryUrl = 'http://api.giphy.com/v1/gifs/search?q=' + thisAnimal + '&api_key=GVCTd0mGVPvvKq31RpOcdnKSIexmVIDU&limit=1';

	//ajax call get/then
	$.ajax({
		url: queryUrl,
		method: "GET"
	}).then(function(response) {
		console.log(response);
	// clear existing gifs, 
	$('#gifs').empty();

	

	// //then populate a 10 gifs with their g/pg rating
	// var picDiv = $('<img>');
	// picDiv.addClass('col-xs-6 col-md-3 thumbnail');
	// picDiv.addSrc('');


		
	//include click start and stop using data-

	});

});


//end dcoument.ready function
});