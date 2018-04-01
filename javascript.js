var playing = false;
var score;
var action;
var timeremaining1;
var correctAnswer;
//if we click on start/reset button

document.getElementById("startreset").onclick = 
    function(){
    //if we are playing
    if(playing == true){
        location.reload(); //reload

    //if not playing    
    }else{	
        playing = true;
        score = 0;   //set score to 0
        document.getElementById("value").innerHTML = score;
        
       //show countdown box
        document.getElementById("timeremaining").style.display = "block";
	        timeremaining1 = 60;
	        hide("gameover");
	    //change timeremaining value to 60

	    document.getElementById("timeremainingvalue").innerHTML = timeremaining1;
       //change button to reset
        document.getElementById("startreset").innerHTML = "Reset Game";


        //Start countdown

        startCountdown();

        generateQA();
    }
}

		
		
		//reduce time by 1 sec in loops
			//check if there is any time left
				//yes->continue
				//no->game over
		//Generate new question and multiple answers



for(i=1;i<5;i++){
	document.getElementById("box" + i).onclick = function(){
	//check if we are playing
	if(playing == true){
		if(this.innerHTML == correctAnswer){
			score ++;
			document.getElementById("value").innerHTML = score;

			//hide wron box and show correct box
			hide("wrong");
			show("correct");

			setTimeout(function(){
				hide("correct");

			}, 1000);

			generateQA();
		}else{
			hide("correct");
			show("wrong");

			setTimeout(function(){
				hide("wrong");

			}, 1000);
		}
	}
}
}
//if we click on answer box
	//if we are playing
		//if answer is correct
			//if yes
				//increase score by 1
				//show correct box for 1 sec
				//generate new ques
			//no
				//show try again box for  1 sec


//Start counter
function startCountdown(){
	action = setInterval(function(){
		timeremaining1 -= 1;

	document.getElementById("timeremainingvalue").innerHTML = timeremaining1;
	if(timeremaining1 == 0){
		//game over
		stopCountdown();
		show("gameover");
		document.getElementById("gameover").innerHTML = "<p>Game Over!</p>" + 
		"<p>Your Score is "	+	score	+ "</p>"
		hide("timeremaining");
		hide("correct");
		hide("wrong");
		playing = false;
		document.getElementById("startreset").innerHTML = "Start Game";

		}
	},1000);

}

//stop counter

function stopCountdown(){
	clearInterval(action);
}

//hide the element
function hide(Id){
	document.getElementById(Id).style.display = "none";
}

//Show the counter
function show(Id){
	document.getElementById(Id).style.display = "block";
}

function generateQA(){
	var x = 1 + Math.round(9*Math.random());
	var y = 1 + Math.round(9*Math.random());

	correctAnswer = x*y;
	document.getElementById("question").innerHTML = x + "X" + y;
	var correctPosition = 1 + Math.round(3*Math.random())
	//Filled one box with the correct answer
	document.getElementById("box" + correctPosition).innerHTML = correctAnswer;
	var answers = [correctAnswer];
	for(i = 1; i<5; i++){
		if(i != correctPosition){
			var wrongAnswer;

			do{
				wrongAnswer = (1 + Math.round(9*Math.random()))*(1 + Math.round(9*Math.random()));
			}
			while(answers.indexOf(wrongAnswer) > -1 )
			document.getElementById("box"+i).innerHTML = wrongAnswer;
			answers.push(wrongAnswer);
		}
	}
}