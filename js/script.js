const alreadyGussesedLetter = document.querySelector(".guessed-letters");          //The unordered list where the player’s guessed letters will appear.
const guessButton = document.querySelector(".guess");                       //The button with the text “Guess!” in it.
const inputLetter = document.querySelector(".letter");                     //The text input where the player will guess a letter.
const wordInProgress = document.querySelector(".word-in-progress");         //The empty paragraph where the word in progress will appear.
const standingGuesses = document.querySelector(".remaining");              // The paragraph where the remaining guesses will display.
const innerSpan = document.querySelector(".remaining span");                           // The span inside the paragraph where the remaining guesses will display.
const messageParagraph = document.querySelector(".message");                // The empty paragraph where messages will appear when the player guesses a letter.
const playAgain = document.querySelector(".play-again");                    // The hidden button that will appear prompting the player to play again.// 
const form = document.querySelector('form');

const iAmdot = "●";
let dotsOnParade = [];

const getWord = async function () {
 
    let response = await fetch("https://gist.githubusercontent.com/skillcrush-curriculum/7061f1d4d3d5bfe47efbfbcfe42bf57e/raw/5ffc447694486e7dea686f34a6c085ae371b43fe/words.txt");
    let words = await response.text();
    let wordArray = words.split("\n");
    let randomIndex = Math.floor(Math.random() * wordArray.length);
    let word = wordArray[randomIndex].trim();
 //   placeholder(word);
    dotChain(iAmdot, word);
  };

getWord();

const dotChain = function(iAmdot, word){
    let dotNum = word.length;
    let n = 0;
    while(n < dotNum-1){
        dotsOnParade[n] = iAmdot;
        n += 1


    }

    console.log(dotsOnParade);

     wordInProgress.innerText = dotsOnParade.join("");
     innerSpan.innerHTML = `${dotNum-1} guesses`; 
 };

const reWord = function(word){
    console.log(`word ${word}`);
    let wordAsString = String(word);
    return wordAsString;
};


// let remainingGuesses = word.length;
let guessedLetters = [];
let correctGuesses = [];
let finalAnsewer = [];
let letterLocation = [];
let AnsewerArray = [];
let uniqueArray = [];

// innerSpan.innerHTML = `${remainingGuesses} guesses`;  

playAgain.addEventListener('click',function(){
    playAgain.classList.add("hide");
    messageParagraph.innerText = "";  
    innerSpan.innerHTML = `${remainingGuesses} guesses`;  
    alreadyGussesedLetter.innerText = '';
}
);

guessButton.addEventListener('click', (e) =>{
    e.preventDefault();
                           
    let validGusse = letterValidation();
  
    if (typeof validGusse === 'string' || validGusse instanceof String) {
        let valGuess = makeGuess(validGusse, word);
        let guessedArray = valGuess[0];
        let corectLet = valGuess[1]
        if (corectLet !== 0) {wordInProgress.innerText = dotToletters(corectLet, word, iAmdot);}
        alreadyGussesedLetter.innerText = guessedArray.join("");
        let winnerTest = dotToletters(corectLet, word, iAmdot);
        chickenDiner(winnerTest, word);
        let guessesRemain = dimishedGuesses(word, guessedArray);
        console.log(`guessesRemain ${guessesRemain}`);

        if (guessesRemain > -1){
        innerSpan.innerHTML = `${guessesRemain} guesses`;  
        }

        if (guessesRemain > 0){
            innerSpan.innerHTML = `${guessesRemain} guesses`; 
        } else if (guessesRemain === 0){
            console.log('getting here');
            
            playAgain.classList.remove('hide');
            playAgain.classList.add("play-again");
            messageParagraph.innerText = "Sorry, try again?";   
            dotChain(iAmdot, dotNum);      
        }
    }
    inputLetter.value = '';                                                                        // Clears the input value of the form after each try
}
);

const letterValidation = function(){                                                // this function checks that the user input was a valid entery.
    console.log(`word inside of letterValidation ${word}`);
    const acceptedLetter = /[a-zA-Z]+$/;                                            // Regex to check stuff aginst. 
    const inputLetter = form.elements;                                              // gets the information from the form
    let letterIn = inputLetter['letter'].value;                                     // gets the information from the form
    
    if(letterIn === "" || letterIn === " "){
    messageParagraph.innerText = "Ops! You forgot to input a letter.";
    letterIn = null;
    } else if (letterIn.length > 1){                                                // tests to no multiple characters 
    messageParagraph.innerText = "One at a time please.";
    letterIn = null;
    } else {
        if(!letterIn.match(acceptedLetter) || typeof validGusse === 'string')
        {
        messageParagraph.innerText = "Ops! that's not a letter.";
        letterIn = null;
        }
        else {
        return String(letterIn);
        }
    }
        return letterIn;
};

const makeGuess = function(ltrs, word){                                      //funtion to test if the letter is part of the word
    console.log(`word inside of makeGuess ${word}`);
    let ltr = String(ltrs).toUpperCase();
    let wordAsCaps = String(word).toUpperCase();
    AnsewerArray = wordAsCaps.split("");                                    // ansewer word as an array
    guessedLetters.push(ltr);
    let timesGuessed = getOccurrence(guessedLetters, ltr);
    let itsRight = 0;

    if (AnsewerArray.includes(ltr) == true){                           // tests if letter is in the ansewer
        messageParagraph.innerText = "You got one!";                  
        itsRight = ltr;
        guessedLetters.pop(ltr);
    } else {
    if (timesGuessed === 1){                                     
        messageParagraph.innerText = "Keep Tyring";    
    } else if (timesGuessed > 1) {                                    
        messageParagraph.innerText = "You already guessed that one";    
        } 
    }
    let uniqueNames = getUnique(guessedLetters);
    return [uniqueNames, itsRight]
    };


const dotToletters = function(validGusse, word, iAmdot) {
    console.log(`word inside of dotToletters ${word}`);
    const wordAsCaps = word.toUpperCase();
    const indexes = [];   
    letterLocation = wordAsCaps.split('');

    if (letterLocation.includes(validGusse)){                      // if statment here that tests if the arravy length is 0
    }  
    if (finalAnsewer.length === 0){
        let n = 0;
        while(n < word.length){
            finalAnsewer[n] = iAmdot;
            n += 1
        }
    }

    for (let index = 0; index < letterLocation.length; index++) {
        if (letterLocation[index] === validGusse) {
        indexes.push(index);
        }
    }

    for (let i of indexes){
        finalAnsewer[i] = validGusse;
    }

    correctGuesses = [];
    return finalAnsewer.join('');
}
   
const chickenDiner = function(wintest, word) {
    console.log(`word inside of chickenDiner ${word}`);
    const wordsUpCa = word.toUpperCase();
    let winnerWinner = 0;
    if (wintest === wordsUpCa){
        messageParagraph.innerHTML = '<p class="highlight">You guessed correct the word! Congrats!</p>';
        winnerWinner = 1;
    }
    return winnerWinner;
}

const getOccurrence = function(array, value) {
    return array.filter((v) => (v === value)).length;
}

const dimishedGuesses = function(word, wrongAnsewers){
    console.log(`word inside of dimishedGuesses ${word}`);
    let guessesLeft = (word.length - wrongAnsewers.length);
    console.log(`guessesLeft ${guessesLeft}`);
    console.log(`word  ${word}, wrongAnsewers  ${wrongAnsewers}`);
    return guessesLeft
}

const getUnique = function(array){                                          // it wasn't in the rules BUT I felt it wouldn't be
                                                                            // cool to hold duplicate guesses against the player
        for(i=0; i < array.length; i++){
        if(uniqueArray.indexOf(array[i]) === -1) {
        uniqueArray.push(array[i]);
        }
    }
    return uniqueArray;
}