const alreadyGussesedLetter = document.querySelector(".guessed-letters");          //The unordered list where the player’s guessed letters will appear.
const guessButton = document.querySelector(".guess");                       //The button with the text “Guess!” in it.
// const inputLetter = document.querySelector(".letter");                     //The text input where the player will guess a letter.
const wordInProgress = document.querySelector(".word-in-progress");         //The empty paragraph where the word in progress will appear.
const remainingGuesses = document.querySelector(".remaining");              // The paragraph where the remaining guesses will display.
const innerSpan = document.querySelector(".remaining span");                           // The span inside the paragraph where the remaining guesses will display.
const messageParagraph = document.querySelector(".message");                // The empty paragraph where messages will appear when the player guesses a letter.
const playAgain = document.querySelector(".play-again");                    // The hidden button that will appear prompting the player to play again.// 
const form = document.querySelector('form');

const iAmdot = "●";
const word = "magnolia";
const dotNum = word.length;

let dotsOnParade = [];
let guessedLetters = [];
let correctGuesses = [];
let finalAnsewer = [];
// let indexes = []; 
let letterLocation = [];
let AnsewerArray = [];

const dotChain = function(iAmdot, dotNum){

    let n = 0;
    while(n < dotNum-1){
        dotsOnParade[n] = iAmdot;
        n += 1
    }
    console.log(`dotsOnParade ${ dotsOnParade }`);   
    wordInProgress.innerText = dotsOnParade.join("");
    
 };

dotChain(iAmdot, dotNum);         // Hint: You’ll need to use an array and then join it back to a string using the .join("") method. 

guessButton.addEventListener('click', (e) =>{
    e.preventDefault();
    const validGusse = letterValidation();                              // A correct letter fitlered through conditions
    alreadyGussesedLetter.innerText = makeGuess(validGusse, word).join(" ");
    dotToletters(validGusse, word, iAmdot);
    let winnerTest = dotToletters(validGusse, word, iAmdot);
    console.log(winnerTest);
    chickenDiner(winnerTest, word);

}
);


const letterValidation = function(){
    // this function checks that the user input was a valid entery.

    const acceptedLetter = /[a-zA-Z]/;                                              // Regex to check stuff aginst. 
    const inputLetter = form.elements;                                              // gets the information from the form
    let letterIn = inputLetter['letter'].value;                                     // gets the information from the form
    const isLetters = letterIn.match(acceptedLetter);                               // tests the letter matches Regex value 

    if (letterIn === null || letterIn === ""){                                        // tests to not a null/empty entry
        messageParagraph.innerText = "Ops! You forgot to input a letter.";
        letterIn = null;
    } else if (letterIn.length > 1){                                              // tests to no multiple characters 
        messageParagraph.innerText = "One at a time please.";
    }  else if (!isLetters){                                                      // tests if it's NOT a letter
        messageParagraph.innerText = "Ops! that's not a letter.";
    } else {                                                                      // returns value if input is a letter. 
        messageParagraph.innerText = "THat's a letter!";                          // for sake of later comaprison letter
        return letterIn.toUpperCase();                                            // is returned a capital
    }
};



const makeGuess = function(ltr, word){                            //funtion to test if the letter has been used or is in the solution word.
   
    let wordAsString = String(word);
    let wordAsCaps = wordAsString.toUpperCase();
    AnsewerArray = wordAsCaps.split("");              // ansewer word as an array
 //   guessedLetters.push(ltr);
    let timesGuessed = getOccurrence(guessedLetters, ltr);

        if (AnsewerArray.includes(ltr) === true){                     // tests if letter is in the ansewer
            messageParagraph.innerText = "You got one!";      // second wrong ansewer
         
        } else if (timesGuessed == 0){           //tests if the letter has already been guessed 
    guessedLetters.push(ltr)  
            messageParagraph.innerText = "Keep Tyring";    
        } else if (!ltr){                                   //tests if the letter is not undefned/null      
                                                            // if value is missing "Pass"
        } else if (timesGuessed >= 1)  {                // add a new wrong letter to the wrong letter array
            messageParagraph.innerText = "You already guessed that one";      // second wrong ansewer   
        } 

        return guessedLetters;
    };

    const dotToletters = function(validGusse, word, iAmdot) {

        const wordAsCaps = word.toUpperCase();  
        letterLocation = wordAsCaps.split('');
 
        if (letterLocation.includes(validGusse === true)){ correctGuesses.push(validGusse);}

        // if statment here that tests if the arravy length is 0
        if (finalAnsewer.length === 0){
            let n = 0;
            while(n < word.length){
                finalAnsewer[n] = iAmdot;
                n += 1
            }
        }
               
        const indexes = []; 
 
        for (let index = 0; index < letterLocation.length; index++) {
          if (letterLocation[index] === validGusse) {
            indexes.push(index);
          }
        }

        for (let i of indexes){
            finalAnsewer[i] = validGusse;
        }

        return finalAnsewer
    }


   
 function chickenDiner(wintest, word) {
    const wordsUpCa = word.toUpperCase();
    let winWiner = wintest.join('');

    console.log(`winWiner = ${winWiner} & wordsUpCa = ${wordsUpCa}`); 
    if (winWiner === wordsUpCa){
        messageParagraph.innerHTML = '<p class="highlight">You guessed correct the word! Congrats!</p>';
    }


}

function getOccurrence(array, value) {
    return array.filter((v) => (v === value)).length;
}