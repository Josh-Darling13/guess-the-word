const alreadyGussesedLetter = document.querySelector(".guessed-letters");          //The unordered list where the player’s guessed letters will appear.
const guessButton = document.querySelector(".guess");                       //The button with the text “Guess!” in it.
// const inputLetter = document.querySelector(".letter");                     //The text input where the player will guess a letter.
const wordInProgress = document.querySelector(".word-in-progress");         //The empty paragraph where the word in progress will appear.
const remainingGuesses = document.querySelector(".remaining");              // The paragraph where the remaining guesses will display.
const innerSpan = document.querySelector(".remaining span");                           // The span inside the paragraph where the remaining guesses will display.
const messageParagraph = document.querySelector(".message");                // The empty paragraph where messages will appear when the player guesses a letter.
const playAgain = document.querySelector(".play-again");                    // The hidden button that will appear prompting the player to play again.// 
const form = document.querySelector('form');

const word = "magnolia";
let guessedLetters = [];

const dotChain = function(word){
let dotNum = word.length;
const iAmdot = "●";
let dotsOnParade = iAmdot.repeat(dotNum);
wordInProgress.innerText = dotsOnParade;
// return?
}


/**
 *  Since wwriting the array isn't 
 * part of this YET... 
 * I'll add that in the next phase of code.
 * 
 */

dotChain(word);         // Hint: You’ll need to use an array and then join it back to a string using the .join("") method. 


/*
guessButton.addEventListener('click', (e) =>{
    e.preventDefault();

    const inputLetter = form.elements;
    let letterIn = inputLetter['letter'].value;
    console.log(letterIn);
    letterIn = '';

});
*/



guessButton.addEventListener('click', (e) =>{
    e.preventDefault();
    const validGusse =  letterValidation();
    makeGuess(validGusse);



}
);


 
const letterValidation = function(){
    // this function checks that the user input was a valid entery.

    const acceptedLetter = /[a-zA-Z]/;                                              // Regex to check stuff aginst. 
    const inputLetter = form.elements;                                              // gets the information from the form
    let letterIn = inputLetter['letter'].value;                                     // gets the information from the form
    const isLetters = letterIn.match(acceptedLetter);                               // tests the letter matches Regex value 

    if (letterIn == null || letterIn == ""){                                        // tests to not a null/empty entry
        messageParagraph.innerText = "Ops! You forgot to input a letter.";
    } else if (letterIn.length > 1){                                              // tests to no multiple characters 
        messageParagraph.innerText = "One at a time please.";
    }  else if (!isLetters){                                                      // tests if it's NOT a letter
        messageParagraph.innerText = "Ops! that's not a letter.";
    } else {                                                                      // returns value if input is a letter. 
        messageParagraph.innerText = "THat's a letter!";                          // for sake of later comaprison letter
        return letterIn.toUpperCase();                                            // is returned a capital
    }
};

const makeGuess = function(ltr){                            //funtion to test if the letter has been used or is in the solution word.

    const wordAsCaps = word.toUpperCase();                  // upprt case letter
    const AnsewerArray = wordAsCaps.split("");              // ansewer word as an array

        if(AnsewerArray.includes(ltr)){                     // tests if letter is in the ansewer
            console.log(AnsewerArray);                              //right answer
        } else if (guessedLetters.includes(ltr)){           //tests if the letter has already been guessed       
            console.log("You already guessed that one");            // second wrong ansewer
        } else if (guessedLetters.push(ltr)){               // adda new wrong letter to the wrong letter array
            console.log(`${guessedLetters} ...  bat!`);             // first wrong ansewer
        }

    };