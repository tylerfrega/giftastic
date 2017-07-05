

var apiKey = '6f91a5c2e3274c6eb9d41fbba3ac51cd';
var animal;
var animalList = ['cat', 'dog', 'mouse', 'bird', 'frog', 'squid'];


for(i=0; i<animalList.length; i++){	
	$('#buttons').append("<button class= 'btn btn-primary' value =" + animalList[i] + ">"+ animalList[i] + "</button>");
};





$('button').on('click', function(){
	animal = $(this).val();

	$('#gif').html('');

	$.ajax({

		url: 'https://api.giphy.com/v1/gifs/search?api_key=' + apiKey + '&q='+ animal + '&limit=10&offset=0&rating=G&lang=en',
		method: 'GET'


	}).done(function(response){
		console.log(response);

		for(i=0; i<response.data.length; i++){

			$('#gif').append("<img src=" + response.data[i].images.original.url + " />");
	}
});

});