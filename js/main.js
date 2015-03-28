// 0: Paper, 1: Scissors, 2: Rock

var choices = {P:'img/paper.png', S:'img/scissors.png', R:'img/rock.png'}
var answers = ['P', 'S', 'R'];
var userAnswer;
var computerAnswer;

var compare = function(uAnswer, cAnswer){
    var result = document.querySelector("#result");
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

//compare(userAnswer, answers[computerAnswer]);

images = document.querySelectorAll("#choice-selector > img");

for (var i = 0; i<images.length; i++){
    images[i].onclick  = function(e){
        e.preventDefault();
        uAnswer = this.getAttribute("data-choice");
        document.querySelector("#user-choice > img").src = choices[uAnswer];
        computerAnswer = Math.floor(Math.random()*3);
        document.querySelector("#computer-choice >img").src = choices[answers[computerAnswer]];
        compare(uAnswer, answers[computerAnswer]);
    }
}


