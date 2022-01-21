// Shared DOM Elements
const dieValue = document.getElementById("dieValue");
const dieImage = document.getElementById("dieImage");
const gameBanner = document.getElementById("gameBanner");
const replay = document.getElementById("replay");

// Player One's DOM Elements
const player1Box = document.getElementById("playerOneBox");
const player1Roll = document.getElementById("playerOneRoll");
const player1Pass = document.getElementById("playerOnePass");

const player1Wins = document.getElementById("playerOneWins");
const player1Losses = document.getElementById("playerOneLosses");
const player1Score = document.getElementById("playerOneScore");

// Player Two's DOM Elements
const player2Box = document.getElementById("playerTwoBox");
const player2Roll = document.getElementById("playerTwoRoll");
const player2Pass = document.getElementById("playerTwoPass");

const player2Wins = document.getElementById("playerTwoWins");
const player2Losses = document.getElementById("playerTwoLosses");
const player2Score = document.getElementById("playerTwoScore");

// Starting values

let playerOneScore = 0;
let playerOneWins = 0;
let playerOneLosses = 0;

let playerTwoScore = 0;
let playerTwoWins = 0;
let playerTwoLosses = 0;

// Game function - Player 1

let playerOneStart = () => {
    player1Roll.textContent = "Roll the die"
    let currentRoll = Math.ceil(Math.random() * 6);
    dieImage.src = `./images/${currentRoll}.png`;
    dieImage.style =`visibility: visible`;
    playerOneScore += currentRoll;
    player1Score.textContent = `Score: ${playerOneScore}`;

    if(playerOneWins > 2) {
        gameBanner.textContent = "PLAYER ONE WINS THE MATCH! CONGRATULATIONS!";
        player2Roll.disabled = true;
        player2Pass.disabled = true;
        player1Roll.disabled = true;
        player1Pass.disabled = true;
        replay.style =`visibility: visible`;
    }

    if(playerOneLosses > 2) {
        gameBanner.textContent = "PLAYER TWO WINS BY DEFAULT! BAD LUCK PLAYER ONE!";
        player2Roll.disabled = true;
        player2Pass.disabled = true;
        player1Roll.disabled = true;
        player1Pass.disabled = true;
        replay.style =`visibility: visible`;
    }

    if(playerTwoWins > 2) {
        gameBanner.textContent = "PLAYER TWO WINS THE MATCH! CONGRATULATIONS!";
        player2Roll.disabled = true;
        player2Pass.disabled = true;
        player1Roll.disabled = true;
        player1Pass.disabled = true;
        replay.style =`visibility: visible`;
    }

    if(playerTwoLosses > 2) {
        gameBanner.textContent = "PLAYER ONE WINS BY DEFAULT! BAD LUCK PLAYER TWO!";
        player2Roll.disabled = true;
        player2Pass.disabled = true;
        player1Roll.disabled = true;
        player1Pass.disabled = true;
        replay.style =`visibility: visible`;
    }
    
    if (playerOneScore >= 21) {
        player1Score.textContent = `You've won with a score of ${[playerOneScore]}`;
        playerOneScore = 0;
        playerOneWins ++;
        player1Wins.textContent = `Wins: ${playerTwoWins}`
        player1Roll.textContent = "Play again?"
        player2Roll.disabled = false;
        player2Pass.disabled = false;
        player1Roll.disabled = true;
        player1Pass.disabled = true;
    }
    
    if (currentRoll == 1) {
        player1Score.textContent = `You lost`;
        playerOneScore = 0;
        playerOneLosses ++;
        player1Losses.textContent = `Losses: ${playerOneLosses}`
        player1Roll.textContent = "Play again?"
        player2Roll.disabled = false;
        player2Pass.disabled = false;
        player1Roll.disabled = true;
        player1Pass.disabled = true;
    }
}

// Game function - Player 2

let playerTwoStart = () => {
    player2Roll.textContent = "Roll the die"
    let currentRoll = Math.ceil(Math.random() * 6);
    dieImage.src = `./images/${currentRoll}.png`;
    dieImage.style =`visibility: visible`;
    playerTwoScore += currentRoll;
    player2Score.textContent = `Score: ${playerTwoScore}`;
    
    if(playerTwoWins > 2) {
        gameBanner.textContent = "PLAYER TWO WINS THE MATCH! CONGRATULATIONS!";
        player2Roll.disabled = true;
        player2Pass.disabled = true;
        player1Roll.disabled = true;
        player1Pass.disabled = true;
        replay.style =`visibility: visible`;
    }

    if(playerTwoLosses > 2) {
        gameBanner.textContent = "PLAYER ONE WINS BY DEFAULT! BAD LUCK PLAYER TWO!";
        player2Roll.disabled = true;
        player2Pass.disabled = true;
        player1Roll.disabled = true;
        player1Pass.disabled = true;
        replay.style =`visibility: visible`;
    }

    if(playerOneWins > 2) {
        gameBanner.textContent = "PLAYER ONE WINS THE MATCH! CONGRATULATIONS!";
        player2Roll.disabled = true;
        player2Pass.disabled = true;
        player1Roll.disabled = true;
        player1Pass.disabled = true;
        replay.style =`visibility: visible`;
    }

    if(playerOneLosses > 2) {
        gameBanner.textContent = "PLAYER TWO WINS BY DEFAULT! BAD LUCK PLAYER ONE!";
        player2Roll.disabled = true;
        player2Pass.disabled = true;
        player1Roll.disabled = true;
        player1Pass.disabled = true;
        replay.style =`visibility: visible`;
    }

    if (playerTwoScore >= 21) {
        player2Score.textContent = `You've won with a score of ${[playerTwoScore]}`;
        playerTwoScore = 0;
        playerTwoWins ++;
        player2Wins.textContent = `Wins: ${playerTwoWins}`
        player2Roll.textContent = "Play again?"
        player2Roll.disabled = true;
        player2Pass.disabled = true;
        player1Roll.disabled = false;
        player1Pass.disabled = false;
    }
    
    if (currentRoll == 1) {
        player2Score.textContent = `You lost`;
        playerTwoScore = 0;
        playerTwoLosses ++;
        player2Losses.textContent = `Losses: ${playerTwoLosses}`
        player2Roll.textContent = "Play again?"
        player2Roll.disabled = true;
        player2Pass.disabled = true;
        player1Roll.disabled = false;
        player1Pass.disabled = false;
    }
}

//Pass function - Player 1

let playerOnePass = () => {
    player2Roll.disabled = false;
    player2Pass.disabled = false;
    player1Roll.disabled = true;
    player1Pass.disabled = true;
}

//Pass function - Player 2

let playerTwoPass = () => {
    player2Roll.disabled = true;
    player2Pass.disabled = true;
    player1Roll.disabled = false;
    player1Pass.disabled = false;
}

// Event Listeners

player1Roll.addEventListener("click", playerOneStart);

player2Roll.addEventListener("click", playerTwoStart);

player1Pass.addEventListener("click", playerOnePass);

player2Pass.addEventListener("click", playerTwoPass);

replay.addEventListener("click", () => window.location.reload())