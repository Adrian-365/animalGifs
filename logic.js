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
	$('#buttons').append(b);
});

//event listener for "submit" button
$('#submit').on('click', function() {
	// console.log('clicked!!');
	//grab text from the input field and add it to the array
	var newAnimal = $('#input').value;
	console.log(newAnimal);

});



//end dcoument.ready function
});