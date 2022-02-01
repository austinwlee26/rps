let playerScore = 0
let computerScore = 0

const btnRoc = document.getElementById("roc");
const btnPap = document.getElementById("pap");
const btnSci = document.getElementById("sci");

const resultDisplay = document.querySelector(".contain-result")
const resultSentence = document.createElement("div")
const scoreSentence = document.createElement("div")

btnRoc.addEventListener('click', () => playRound("rock", computerPlay()));
btnPap.addEventListener('click', () => playRound("paper", computerPlay()));
btnSci.addEventListener('click', () => playRound("scissors", computerPlay()));



function playRound(playerSelection, computerSelection) {
    if (playerSelection === "rock" && computerSelection === "rock") {
        resultSentence.textContent = "It's a draw!"
        resultDisplay.appendChild(resultSentence)
        scoreSentence.textContent = "Player: " + playerScore + " | Computer: " + computerScore
        resultDisplay.appendChild(scoreSentence)
        
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        computerScore++
        resultSentence.textContent = "You lose! Paper beats Rock."
        resultDisplay.appendChild(resultSentence)
        scoreSentence.textContent = "Player: " + playerScore + " | Computer: " + computerScore
        resultDisplay.appendChild(scoreSentence)
        
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        playerScore++
        resultSentence.textContent = "You win! Rock beats Scissors."
        resultDisplay.appendChild(resultSentence)
        scoreSentence.textContent = "Player: " + playerScore + " | Computer: " + computerScore
        resultDisplay.appendChild(scoreSentence)
        
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        playerScore++
        resultSentence.textContent = "You win! Paper beats Rock."
        resultDisplay.appendChild(resultSentence)
        scoreSentence.textContent = "Player: " + playerScore + " | Computer: " + computerScore
        resultDisplay.appendChild(scoreSentence)

    } else if (playerSelection === "paper" && computerSelection === "paper") {
        resultSentence.textContent = "It's a draw!"
        resultDisplay.appendChild(resultSentence)
        scoreSentence.textContent = "Player: " + playerScore + " | Computer: " + computerScore
        resultDisplay.appendChild(scoreSentence)

    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        computerScore++
        resultSentence.textContent = "You lose! Scissors beats Paper."
        resultDisplay.appendChild(resultSentence)
        scoreSentence.textContent = "Player: " + playerScore + " | Computer: " + computerScore
        resultDisplay.appendChild(scoreSentence)
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        computerScore++
        resultSentence.textContent = "You lose! Rock beats Scissors."
        resultDisplay.appendChild(resultSentence)
        scoreSentence.textContent = "Player: " + playerScore + " | Computer: " + computerScore
        resultDisplay.appendChild(scoreSentence)
        
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        playerScore++
        resultSentence.textContent = "You win! Scissors beats Paper."
        resultDisplay.appendChild(resultSentence)
        scoreSentence.textContent = "Player: " + playerScore + " | Computer: " + computerScore
        resultDisplay.appendChild(scoreSentence)

    } else if (playerSelection === "scissors" && computerSelection === "scissors") {
        resultSentence.textContent = "It's a draw!"
        resultDisplay.appendChild(resultSentence)
        scoreSentence.textContent = "Player: " + playerScore + " | Computer: " + computerScore
        resultDisplay.appendChild(scoreSentence)
    }

    if (playerScore === 5) {
        alert("Game over! Player wins.")
        playerScore = 0
        computerScore = 0
    } else if (computerScore === 5){
        alert("Game over! Computer wins.")
        playerScore = 0
        computerScore = 0
    }
}


function computerPlay() {
    let choice = Math.floor(Math.random() * 3)
    if (choice === 0) {
        return "rock"
    } else if (choice === 1) {
        return "paper" 
    } else {
        return "scissors"
    }
}