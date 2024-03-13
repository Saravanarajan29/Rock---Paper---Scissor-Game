
const choices = ["Rock", "Paper", "Scissor"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");
let playerScore = 0;
let computerScore = 0;

function playGame(playerChoice){

    const computerChoice = choices[Math.floor(Math.random() * 3)];
    let result = "";

    if(playerChoice === computerChoice){
        result = "It's a Tie! 🤝";
    }
    else{
        switch(playerChoice){
            case "Rock":
                result = (computerChoice === "Scissor") ? "You Win!😍" : "You Loose!😣";
                break;
            case "Paper":
                result = (computerChoice === "Rock") ? "You Win!😍" : "You Loose!😣";
                break;
            case "Scissor":
                result = (computerChoice === "Paper") ? "You Win!😍" : "You Loose!😣";
                break;
        }
    }
    playerDisplay.textContent = `Player Sign: ${playerChoice}`;
    computerDisplay.textContent = `Computer Sign: ${computerChoice}`;
    resultDisplay.textContent = result;

    resultDisplay.classList.remove("greenText","redText")

    switch(result){
        case "You Win!😍":
            resultDisplay.classList.add("greenText");
            playerScore++;
            playerScoreDisplay.textContent = playerScore;
            break;
        case "You Loose!😣":
            resultDisplay.classList.add("redText");
            computerScore++;
            computerScoreDisplay.textContent = computerScore;
            break;
    }
}