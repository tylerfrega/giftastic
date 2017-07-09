
var apiKey = '6f91a5c2e3274c6eb9d41fbba3ac51cd';
var animal;
var animalList = ['cat', 'dog', 'mouse', 'bird', 'frog', 'squid']; 



//generates buttons for each item in animalList array
for(i=0; i<animalList.length; i++){	
	$('#buttons').append("<button class= 'animalButton btn btn-primary' value =" + animalList[i] + ">"+ animalList[i] + "</button>");
};

//adds new buttons 
$('#submit').on('click', function(){
	var newAnimal = $('input').val();
		animalList.push(newAnimal);
		$('#buttons').append("<button class= 'animalButton btn btn-primary' value =" + newAnimal + "> "+ newAnimal + "</button>");
});
 

//when user clicks button, gifs with corresponding animal value displays
$('body').on('click','button',  function(){
	animal = $(this).val();
	console.log(this);
	$('#gif').html('');


	$.ajax({

		url: 'https://api.giphy.com/v1/gifs/search?api_key=' + apiKey + '&q='+ animal + '&limit=10&offset=0&rating=G&lang=en',
		method: 'GET'

	}).done(function(response){
		console.log(response);

		for(i=0; i<response.data.length; i++){

			var source = response.data[i].images.original_still.url;
			var animalDiv = $("<div class='imageHolder col-md-4'>");
			var h = $('<h4>');
			var animalImage = $("<img data-state= 'still' data-number= " + i + " class = 'animalGif'>");
			

			h.html(response.data[i].rating);
			animalImage.attr('src', source );
			animalDiv.append(animalImage);
          	animalDiv.append(h);
          	$('#gif').prepend(animalDiv);
			
	}

//starts and stops gifs on click
$('img').on('click', function(){

	var num = $(this).attr('data-number');
	var state = $(this).attr("data-state");
	var moving = response.data[num].images.original.url;
	var still =  response.data[num].images.original_still.url;


		if( state === 'still'){
		
			$(this).attr('src', moving);
			$(this).attr("data-state", "animate");

		}else{
			$(this).attr('src', still);
			$(this).attr("data-state", "still");
		}

		});


});

});



