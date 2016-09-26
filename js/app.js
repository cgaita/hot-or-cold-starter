function randomRange(max, min){
	//random number gen	
	return Math.floor(Math.random() * (max - min +1 )) + min;
}
var myRange = randomRange(1, 100);
console.log(myRange);

function userFeedback(){
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
}
function newGame(){	
	myRange = randomRange(1, 100);
	$('#count').html(0);
	$('#feedback').html('Make Your Guess')
	$('#guessList').empty();
}

$(document).ready(function(){
//when you click new game
	$('.new').click(function(){
		newGame();
		console.log(myRange);
	});
	$('#guessButton').click(function(event){
		event.preventDefault();
		//number = user input
		var number = $('#userGuess').val();	
		//clear input bar
		$('#userGuess').val('');
		//prevent non number entry
		if(number % 1 !==0 || number===''){
			$('#feedback').html('Enter Number');
			return;
		}
		//prevent over 100 or under 1
		if (number > 100 || number < 1){
			$('#feedback').html('Enter a Number from 1-100');
			return;
		}
		//track numbers guessed
		$('#guessList').append('<li>' + number + '</li>');
		//track number of many guesses
		$('#count').html(function(i, val){
			return +val +1;
		});
		userFeedback();
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
~3.have peerson make guess in input (must be from 1-100)
~4.make hot or cold range (display in h2#feedback)(50 or further= "ice cold", 30-50 = "cold, 20-30 = warm, 10-20 = "hot, 1-10 ="very hot")
~5.track number of guesses
~6.track guessed numbers (as <li> to ul #nguessList) 
*/

