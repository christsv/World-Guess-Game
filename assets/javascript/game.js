


var wordList = ["chris", "topher", "valenzuela", "san", "chez", "huhhh"];
var chosenWord = "";
var wrongArray = [];
var saver = [];

function wordChooser (){
    // this clear array to nothing so we can add to it
    var chosenWordArray=[];
    // this clears the dashes to zero
//    document.getElementById("dash").innerHTML = "";

    //math.random returns a random integer from 0 to < 1 (never 1)
    // this will return chosenWord (random word i.e x = wordChooser)
    chosenWord = wordList[Math.floor(Math.random() * wordList.length)];

 
    //this adds a dash according to the random word chosen
    for (var i = 0; i <chosenWord.length; i++){
        // .push concantenates "_" to the blank array
        chosenWordArray.push("_");

    }
    //.join(" ") combines the array (i.e " _ _ _ _ ")
    var array = chosenWordArray.join(" ");

    document.getElementById("dash").innerHTML = array;

    console.log(chosenWord);
    return chosenWord;
   
}


// the variable "chosenWord" now has a random name. because we run function

var word = wordChooser();
// this funciton checks if a letter is in the random word.
// parameter "letter" will be used for future
function checks(letter){

    saver = document.getElementById("dash").innerHTML;
//you have to split or it will read the string as a pattern therefore requiring Regexp
    var seperate = saver.split(" ");
    var letterinWord = false;
    var letternotinWord = false;
    console.log(wrongArray);

    for(var i = 0; i < chosenWord.length; i++){
        if (letter === chosenWord[i]) {
 
             seperate[i] = letter;   
             letterinWord = true;    
        }
        else if (letter != chosenWord[i]){
  
            letternotinWord = true;
        }
    }

    var saver = seperate.join(" ");
    if(letterinWord){
        correct(saver);
    }
    else if (letternotinWord){
        wrongArray.push(letter);
        wrongGuess(wrongArray);
    }    

}

function correct(array){
    document.getElementById("dash").innerHTML = array;

}

//addLetter("h");
function wrongGuess(wrongArray){

    document.getElementById("wrong").innerHTML = "Wrong Guess: " + wrongArray + ",";

}




// this is where user inputs 
document.onkeyup = function(event){
    // checks what key was pressed and placed to variable guess
    var guess = event.key;
   checks(guess);

   
}



