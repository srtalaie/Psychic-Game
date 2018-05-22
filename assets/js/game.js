//Variables for wins, losses, ties, user guesses left and letters user has guessed
let wins = 0;
let losses = 0;
let userGuesses = 10;
let userLetters = [];
//Creates array with letters in the alphabet
let computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let computerGuess;
//Sets the computer's letter to random letter in alphabet array
function compLetterChoice(){
    return computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
}
compLetterChoice();
document.onkeydown = function(event){
    //Gets Users key press
    let userInput = event.key;
    
    //Creates instance of the game
    renderGame(userInput, computerGuess);
 
    //Function that runs through all the logic for the game
    function renderGame(userInput, computerGuess){
        if (userInput === computerGuess){
            //If user guesses correctly, wins incremented up by 1 and new computer guess is created. User's guesses is reset to 10 and the array of all previously guessed letters is cleared for the new game
            wins++;
            alert("Congrats you guessed the correct letter: " + computerGuess);
            compLetterChoice();
            userGuesses = 10;
            userLetters = [];
        } else if (userGuesses === 1){
            //If user guesses incorrectly, losses incremented up by 1 and new computer guess is created. User's guesses is reset to 10 and the array of all previously guessed letters is cleared for the new game
            losses++;
            alert('Sorry the correct letter was: ' + computerGuess);
            compLetterChoice();
            userGuesses = 10;
            userLetters = [];
        } else {
            //If user guesses incorrectly but stil has guesses left then 1 guess is removed from the guess pool and the incorrect guess is logged on screen.
            userGuesses--;
            userLetters.push(userInput);  
        }

        //Updates the page with the new data each time a new guess is made
        let game = document.getElementById('game');
        game.innerHTML = 
            `
                <div>You chose: ${userInput}</div>
                <div>Wins: ${wins}</div>
                <div>Losses: ${losses}</div>
                <div>Guesses Left: ${userGuesses}</div>
                <div>Letters Guessed: ${userLetters.toString()}</div>
            `
    }

}