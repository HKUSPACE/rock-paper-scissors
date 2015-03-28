// 0: Paper, 1: Scissors, 2: Rock

var answers = ['P', 'S', 'R'];
var userAnswer;
var computerAnswer;

var compare = function(uAnswer, cAnswer){
    var result = document.querySelector("#result");
    alert(result);
    if (uAnswer == cAnswer){
        result.innerHTML = "This is a tie game.";
    }
    else if (uAnswer == 'P'){
        if (cAnswer == 'R'){
            result.innerHTML = "You win!";
        }
        else{
            result.innerHTML = "Computer wins...";
        }
    }
    else if (uAnswer == 'S'){
        if (cAnswer == 'P'){
            result.innerHTML = "You win!";
        }
        else{
            result.innerHTML = "Computer wins...";
        }
    }
    else if (uAnswer == 'R'){
        if (cAnswer == 'S'){
            result.innerHTML = "You win!";
        }
        else{
            result.innerHTML = "Computer wins...";
        }
    }
}

compare(userAnswer, answers[computerAnswer]);


