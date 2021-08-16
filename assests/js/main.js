
let [comScore,userScore] = [0,0]

let resultRef = document.getElementById('final-result');
let choiseObject = {
    'rock' : {
        'rock' : 'draw',
        'scissors' : 'win',
        'paper' : 'lose'
    },
    'scissors' : {
        'rock' : 'lose',
        'scissors' : 'draw',
        'paper' : 'win'
    },
    'paper' : {
        'rock' : 'win',
        'scissors' : 'lose',
        'paper' : 'draw'
    },
}




function checker(input){
    let choises = ["rock", "paper", "scissors"];
    let num = Math.floor(Math.random()*3);

    document.getElementById('com-result').innerHTML = 
    ` Computer Choose <span style="font-weight: 600;">${choises[num].toUpperCase()}</span>`;

    document.getElementById('user-result').innerHTML =
    ` You Choose <span style="font-weight: 600;">${input.toUpperCase()}</span>`;



    let comChoise = choises[num];

    

    switch(choiseObject[input][comChoise]){
        case 'win':
            resultRef.innerHTML = "YOU WIN";
            resultRef.classList.add("result_dec");
            resultRef.style.cssText = "background-color: rgba(0, 255, 0, 0.25);";
            userScore++ ;
            break;
        
        case 'lose':
            resultRef.innerHTML = "YOU LOSE";
            resultRef.classList.add("result_dec");
            resultRef.style.cssText = "background-color: rgba(255, 0, 0, 0.25);";
            comScore++ ;
            break;

        default:
            resultRef.innerHTML = "DRAW";
            resultRef.classList.add("result_dec");
            resultRef.style.cssText = "background-color: rgba(0, 0, 0, 0.25);"
    }

    document.getElementById("com-score").innerHTML = comScore;
    document.getElementById("user-score").innerHTML = userScore;
}



