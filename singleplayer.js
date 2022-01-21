const rollButton = document.getElementById("roll");
const score = document.getElementById("score");
const diceImage = document.getElementById("diceImage");
let player1Score = 0;

let startSinglePlayer = () => {
    rollButton.textContent = "Roll the die"
    let currentRoll = Math.ceil(Math.random() * 6);
    diceImage.src = `./images/${currentRoll}.png`;
    diceImage.style =`visibility: visible`;
    player1Score += currentRoll;
    score.textContent = `Score: ${player1Score}`;
    if (player1Score >= 21) {
        score.textContent = `You've won with a score of ${[player1Score]}`;
        player1Score = 0;
        rollButton.textContent = "Play again?"
        }
    if (currentRoll == 1) {
            score.textContent = `You lost`;
            player1Score = 0;
            rollButton.textContent = "Play again?"
        }
    }

rollButton.addEventListener("click", startSinglePlayer);