# Dice Game Project

## Requirements
Two web-apps with a functioning dice game - singleplayer and multiplayer.

## Rules of the Game

### Singleplayer 

Every time you press the button, roll a die.
If your total is 20, you win.
If you roll a 1 before that, you lose.

### Multiplayer

Every time you press the button, roll a die.
If your total is 20, you win.
If you roll a 1 before that, you lose.
Whoever gets to three wins without getting three losses wins the match.

## App Structure

### Variables
playerOneScore = integer
playerTwoScore = integer
playerOneWins = integer
playerTwoWins = integer
playerOneLosses = integer
playerTwoLosses = integer

### DOM Elements

button to start match / reset the match

**Left**
Player 1's Wins & Losses
Player 1's current score
Button for player 1 to roll
Button for player 1 to pass

**Middle** 
The die itself and numerical value underneath

**Right**
Player 2's Wins & Losses
Player 2's current score
Button for player 2 to roll
Button for player 2 to pass 

## Game Logic

startGame() function
    starts on playerOne
    the die rolls
    if they win, they gain a win, and transfer to playerTwo
        -> playertwoloop
    if it's 1, they lose a life, and transfer to playerTwo
        -> playertwoloop
    otherwise, add to their score and they can either pass or roll again
        -> gameloop again
        -> or playertwoloop