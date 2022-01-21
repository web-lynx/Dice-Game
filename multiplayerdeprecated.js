const rollButton = document.getElementById("rollButton");
const passButton = document.getElementById("passButton");

const playerBox1 = document.getElementById("playerOneBox");
const playerBox2 = document.getElementById("playerTwoBox");

const scoreDisplay1 = document.getElementById("playerOneScore");
const scoreDisplay2 = document.getElementById("playerTwoScore");
const winsDisplay1 = document.getElementById("playerOneWins");
const winsDisplay2 = document.getElementById("playerTwoWins");
const lossDisplay1 = document.getElementById("playerOneLosses");
const lossDisplay2 = document.getElementById("playerTwoLosses");

const dieValue = document.getElementById("dieValue");
const diceImage = document.getElementById("diceImage");

let playerOneScore = 0;
let playerTwoScore = 0;
let playerOneWins = 0;
let playerOneLosses = 0;
let playerTwoWins = 0;
let playerTwoLosses = 0;

let currentPlayer = 1;



let startMultiPlayer = () => {
    switch (currentPlayer) {
        case 1: 
            playerBox1.style.backgroundColor="red"
            playerBox2.style.backgroundColor="white"

            rollButton.textContent = "Roll the die!"
            let roll1 = Math.ceil(Math.random() * 6);
            diceImage.src = `./images/${roll1}.png`;
            diceImage.style =`visibility: visible`;
            playerOneScore += roll1;
            scoreDisplay1.textContent = `Score: ${playerOneScore}`;
        
            if (playerOneScore >= 21) {
                dieValue.textContent = `You've won with a score of ${[playerOneScore]}`;
                playerOneScore = 0;
                playerOneWins ++;
                currentPlayer = 2;
                winsDisplay1.textContent = `Wins: ${playerOneWins}`
                return
            }
        
            if (roll1 == 1) {
                dieValue.textContent = `You lost`;
                playerOneScore = 0;
                playerOneLosses ++;
                currentPlayer = 2;
                lossDisplay1.textContent = `Losses: ${playerOneLosses}`
                return
            }

        case 2:
            playerBox2.style.backgroundColor="red"
            playerBox1.style.backgroundColor="white"

            rollButton.textContent = "Roll the die!"
            let roll2 = Math.ceil(Math.random() * 6);
            dieValue.textContent = `${roll2}`;
            diceImage.src = `./images/${roll2}.png`;
            diceImage.style =`visibility: visible`;
            playerTwoScore += roll2;
            scoreDisplay2.textContent = `Score: ${playerTwoScore}`;
    
            if (playerTwoScore >= 21) {
                dieValue.textContent = `You've won with a score of ${[playerTwoScore]}`;
                playerTwoScore = 0;
                playerTwoWins ++;
                currentPlayer = 1;
                winsDisplay2.textContent = `Wins: ${playerTwoWins}`
                return
            }
        
            if (roll2 == 1) {
                dieValue.textContent = `You lost`;
                playerTwoScore = 0;
                playerTwoLosses ++;
                currentPlayer = 1;
                lossDisplay2.textContent = `Losses: ${playerTwoLosses}`
                return
            }

}
}

rollButton.addEventListener("click", startMultiPlayer);

// let startMultiPlayer = () => {
//     if (currentPlayer = 1) { //player one's turn
//         playerBox1.style.backgroundColor="red"

//         rollButton.textContent = "Roll the die!"
//         let currentRoll = Math.ceil(Math.random() * 6);
//         diceImage.src = `./images/${currentRoll}.png`;
//         diceImage.style =`visibility: visible`;
//         playerOneScore += currentRoll;
//         scoreDisplay1.textContent = `Score: ${playerOneScore}`;
    
//         if (playerOneScore >= 21) {
//         dieValue.textContent = `You've won with a score of ${[playerOneScore]}`;
//         playerOneScore = 0;
//         playerOneWins ++;
//         currentPlayer = 2;
//         winsDisplay1.textContent = `Wins: ${playerOneWins}`
//         }
    
//         if (currentRoll == 1) {
//             dieValue.textContent = `You lost`;
//             playerOneScore = 0;
//             playerOneLosses ++;
//             currentPlayer = 2;
//             lossDisplay1.textContent = `Losses: ${playerOneLosses}`
//         }
    
//     } else { //player two's turn
//         playerBox2.style.backgroundColor="red"

//         rollButton.textContent = "Roll the die!"
//         let currentRoll = Math.ceil(Math.random() * 6);
//         dieValue.textContent = `${currentRoll}`;
//         diceImage.src = `./images/${currentRoll}.png`;
//         diceImage.style =`visibility: visible`;
//         playerTwoScore += currentRoll;
//         scoreDisplay2.textContent = `Score: ${playerTwoScore}`;
    
//         if (playerTwoScore >= 21) {
//         dieValue.textContent = `You've won with a score of ${[playerTwoScore]}`;
//         playerTwoScore = 0;
//         playerTwoWins ++;
//         currentPlayer = 1;
//         winsDisplay2.textContent = `Wins: ${playerOneWins}`
//         }
    
//         if (currentRoll == 1) {
//             dieValue.textContent = `You lost`;
//             playerTwoScore = 0;
//             playerTwoLosses ++;
//             currentPlayer = 2;
//             lossDisplay2.textContent = `Losses: ${playerTwoLosses}`
//         }
//     }
// }

