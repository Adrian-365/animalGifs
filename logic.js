var animals = ['lion', 'tiger', 'bear', 'wolf', 'crockodile', 'hippo', 'giraffe', 'bison', 'dog', 'cat', 'elk', 'quail', 'deer', 'panther', 'mountain lion' ];

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
$('#submit').on('click', function() {
	// console.log('clicked!!');
	//grab text from the input field 
	var newAnimal = $('#input').val();
	// console.log(newAnimal);
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
	console.log(thisAnimal);
	//



});


//end dcoument.ready function
});