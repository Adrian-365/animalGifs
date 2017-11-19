var animals = ['lion', 'tiger', 'bear', 'wolf', 'crockodile', 'hippo', 'giraffe', 'bison', 'dog', 'cat', 'elk', 'quail', 'deer', 'panther', 'mouontain lion' ];

animals.forEach(function(each) {
	console.log(each);
	var b = $('<button>');
	b.addClass('animal-button btn btn-default btn-lg');
	b.attribute('data-animal', each);
	b.text(each);
	$('#buttons').append(b);
});