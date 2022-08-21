const gussesedLetter = document.querySelector(".guessed-letters");          //The unordered list where the player’s guessed letters will appear.
const guessButton = document.querySelector(".guess");                       //The button with the text “Guess!” in it.
const inputLetter = document.querySelector(".letter");                     //The text input where the player will guess a letter.
const wordInProgress = document.querySelector(".word-in-progress");         //The empty paragraph where the word in progress will appear.
const remainingGuesses = document.querySelector(".remaining");              // The paragraph where the remaining guesses will display.
const innerSpan = document.querySelector(".remaining span");                           // The span inside the paragraph where the remaining guesses will display.
const messageParagraph = document.querySelector(".message");                // The empty paragraph where messages will appear when the player guesses a letter.
const playAgain = document.querySelector(".play-again");                    // The hidden button that will appear prompting the player to play again.// 

const word = "magnolia";


const dotChain = function(word){
let dotNum = word.length;
const iAmdot = "●";
let dotsOnParade = iAmdot.repeat(dotNum);
wordInProgress.innerText = dotsOnParade;
// return?
}

dotChain(word);         // Hint: You’ll need to use an array and then join it back to a string using the .join("") method.



/**
 * All I'm trying to do here is gtet the data from teh 
 * text box and have it out put to the console log 
 * I spent the day trying a jillion variations
 * of code.
 * 
 * This is where I'm stuck:
 * 
 * Create and name a variable to capture the value of the input. Log out the value of the variable capturing the 
 * input. Then, empty the value of the input. You should see the letter you enter into the input field in the 
 * console when the Guess button is clicked. 
 * 
 * I was going to make arrasy and all that stuff once I could capture the data.
 *  
 */
guessButton.addEventListener('click', inputLetter, (e) =>{
    e.preventDefault();
    console.log("this works");
    let inputLets = inputLetter.value;     
    inputLetter =  "";
    messageParagraph.innerText = inputLets;
    console.log(inputLets);
});
