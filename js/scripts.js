function computerPlay(){
    plays = ['Rock', 'Paper', 'Scissors'];
    return play = plays[Math.floor(Math.random() * plays.length)];
}

function playerPlay(){
    return prompt("Rock, paper or scissors?", "Enter your choice");
}

function playRound(playerSelection, computerSelection){
    
    let result;

    switch (playerSelection.toUpperCase()){
        
        case 'ROCK':

            switch(computerSelection){
                case 'Rock':
                    result = "Tie Game!";
                    break;
                case 'Paper':
                    result = "You lose! Paper beats Rock";
                    computerScore++;
                    break;
                case 'Scissors':
                    result = "You win! Rock beats Scissors";
                    playerScore++;
                    break;
            }
            
            counter++;
            break;

        case 'PAPER':
        
            switch(computerSelection){
                case 'Rock':
                    result = "You win! Paper beats Rock";
                    playerScore++;
                    break;
                case 'Paper':
                    result = "Tie game!";
                    break;
                case 'Scissors':
                    result = "You lose! Scissors beats Paper";
                    computerScore++;
                    break;
            }
            counter++;
            break;

        case 'SCISSORS':

            switch(computerSelection){
                case 'Rock':
                    result = "You lose! Rock beats Scissors";
                    computerScore++;
                    break;
                case 'Paper':
                    result = "You win! Scissors beats Paper";
                    playerScore++;
                    break;
                case 'Scissors':
                    result = "Tie game!";
                    break;
            }
            counter++;
            break;

        default: 
            result = "Please enter a valid input";
            break;
    }
    return result;   

}

function game(event){

    if (counter <  4) {
        let playerSelection = event.target.textContent;
        let computerSelection = computerPlay();
        displayRoundStatus(playerSelection,computerSelection);
    } else if (counter = 4) {
        let playerSelection = event.target.textContent;
        let computerSelection = computerPlay();
        displayRoundStatus(playerSelection,computerSelection);
        buttons.forEach((button) => {
            button.disabled = true;
        });

        return;
    }

    function displayRoundStatus(playerSelection, computerSelection){
        if (counter < 4) {
            let para = document.createElement('p');        
            para.textContent = playRound(playerSelection,computerSelection);
            score.textContent = `Your current score is ${playerScore}/5.`
            results.appendChild(para);
        } else if (counter = 4){
            let para = document.createElement('p');
            let final = document.createElement('h4');
            para.textContent = playRound(playerSelection,computerSelection);
            final.textContent = checkScore(playerScore, computerScore);        
            score.textContent = `Your current score is ${playerScore}/5.`
            results.appendChild(para);
            results.appendChild(final);
        } else {
            
            return;
        }
        
    }

    
    
    // ----------- ORIGINAL CODE ----------

    // let playerSelection;
    // let computerSelection;                
    
    // playerSelection = playerPlay();
    // computerSelection = computerPlay();
    // console.log(playRound(playerSelection,computerSelection));
    // console.log("Score for Round 1: " + playerScore);

    // playerSelection = playerPlay();
    // computerSelection = computerPlay();
    // console.log(playRound(playerSelection,computerSelection));
    // console.log("Score for Round 2: " + playerScore);

    // playerSelection = playerPlay();
    // computerSelection = computerPlay();
    // console.log(playRound(playerSelection,computerSelection));
    // console.log("Score for Round 3: " + playerScore);

    // playerSelection = playerPlay();
    // computerSelection = computerPlay();
    // console.log(playRound(playerSelection,computerSelection));
    // console.log("Score for Round 4: " + playerScore);

    // playerSelection = playerPlay();
    // computerSelection = computerPlay();
    // console.log(playRound(playerSelection,computerSelection));
    // console.log("Score for Round 5: " + playerScore);

    // console.log(checkScore(playerScore,computerScore));

}

function checkScore(userScore,compScore){
    if (userScore > compScore){
        return "You won the game!"
    } else if (userScore < compScore){
        return "You lose. Better luck next time!"
    } else {
        return "Tie game!"
    }
}
    

let playerScore = 0;
let computerScore = 0;
let counter = 0;

const buttons = document.querySelectorAll('.btn');
const results = document.querySelector('.results');
const score = document.querySelector('.score');
const final = document.querySelector('.final');

buttons.forEach((button) => {
    button.addEventListener('click', (e) => game(e));

    if (counter >= 4){
        button.disabled = true;
    }
});





