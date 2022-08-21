const gussesedLetter = document.querySelector(".guessed-letters");          //The unordered list where the player’s guessed letters will appear.
const guessButton = document.querySelector(".guess");                       //The button with the text “Guess!” in it.
// const inputLetter = document.querySelector(".letter");                     //The text input where the player will guess a letter.
const wordInProgress = document.querySelector(".word-in-progress");         //The empty paragraph where the word in progress will appear.
const remainingGuesses = document.querySelector(".remaining");              // The paragraph where the remaining guesses will display.
const innerSpan = document.querySelector(".remaining span");                           // The span inside the paragraph where the remaining guesses will display.
const messageParagraph = document.querySelector(".message");                // The empty paragraph where messages will appear when the player guesses a letter.
const playAgain = document.querySelector(".play-again");                    // The hidden button that will appear prompting the player to play again.// 
const form = document.querySelector('form');

const word = "magnolia";


const dotChain = function(word){
let dotNum = word.length;
const iAmdot = "●";
let dotsOnParade = iAmdot.repeat(dotNum);
wordInProgress.innerText = dotsOnParade;
// return?
}

dotChain(word);         // Hint: You’ll need to use an array and then join it back to a string using the .join("") method.



guessButton.addEventListener('click', (e) =>{
    e.preventDefault();

    const inputLetter = form.elements;
    let letterIn = inputLetter['letter'].value;
    console.log(letterIn);
    letterIn = '';

});
