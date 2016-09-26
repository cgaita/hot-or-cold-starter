//random number gen	
function randomRange(max, min){
		return Math.floor(Math.random() * (max - min +1 )) + min;
}
		var myRange = randomRange(0, 100);
		console.log(myRange);

function newGame(){	
	myRange = randomRange(0, 100);
	$('#count').html(0);
}

$(document).ready(function(){
//when you click new game
	$('.new').click(function(){
		
		newGame();
	});
	$('#guessButton').click(function(event){
			event.preventDefault();

			var number = $('#userGuess').val();	
			//clear input bar
			$('#userGuess').val('');
			//prevent non number entry
			if(number % 1 !==0 || number===''){
				$('#feedback').html('Enter Number');
				return;
			}
			//track numbers guessed
			$('#guessList').append('<li>' + number + '</li>');
			//track number of many guesses
			$('#count').html(function(i, val){
				return +val +1;
			});
			//hot or cold range
			if(number == myRange){
				$('#feedback').html('Congratulation You Guessed Correctly!');
			} else { 
				if(number <= myRange + 10 && number >= myRange - 10){
					$('#feedback').html('Very Hot');
				} else if(number <= myRange + 20 && number >= myRange - 20){
					$('#feedback').html('Hot');
				} else if(number <= myRange + 30 && number >= myRange - 30){
					$('#feedback').html('Warm');
				} else if(number <= myRange + 30 && number >= myRange - 30){
					$('#feedback').html('Warm');
				} else {
					$('#feedback').html('Ice Cold');
				}
			}
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
`1.start new game (button)
~2.generate random number from 1-100
`3.have peerson make guess in input (must be from 1-100)
`4.make hot or cold range (display in h2#feedback)(50 or further= "ice cold", 30-50 = "cold, 20-30 = warm, 10-20 = "hot, 1-10 ="very hot")
~5.track number of guesses
~6.track guessed numbers (as <li> to ul #nguessList) 
*/

