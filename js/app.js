//random number gen
	
function randomRange(max, min){
		return Math.floor(Math.random() * (max - min +1 )) + min;
}
		var myRange = randomRange(0, 100);
		console.log(myRange);
		

		
function newGame(){		
}

$(document).ready(function(){
//when you click new game
	$('.new').click(function(){

		console.log(randomRange);
		//newGame();
	})
	$('#guessButton').click(function(event){
			event.preventDefault();
			var number = $('#userGuess').val();	
			$('#guessList').append('<li>' + number + '</li>');
			$('#count').html(function(val, i){
				return +val +1;
			})
			//hot or cold range
				if
			//
		});
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

});


/*steps
~1.start new game (button)
~2.generate random number from 1-100
3.have peerson make guess in input (must be from 1-100)
4.make hot or cold range (display in h2#feedback)(50 or further= "ice cold", 30-50 = "cold, 20-30 = warm, 10-20 = "hot, 1-10 ="very hot")
5.track number of guesses
~6.track guessed numbers (as <li> to ul #nguessList) 
*/

