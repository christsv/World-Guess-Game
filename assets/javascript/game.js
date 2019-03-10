


var wordList = ["chris", "topher", "valenzuela", "san", "chez"];
var chosenWord = "";
var array = [];

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
      //  document.getElementById("dash").push("_"); 
     //   console.log(document.getElementById("dash").push("_"));
        //document.getElementById("dash").innerHTML = document.getElementById("dash").innerHTML + "_ "
    }
    //.join(" ") combines the array (i.e " _ _ _ _ ")
    var array = chosenWordArray.join(" ");
    document.getElementById("dash").innerHTML = array;

    console.log(chosenWord);
    return [chosenWord, array];
   
}


// the variable "chosenWord" now has a random name. because we run function
var word = wordChooser();

// this funciton checks if a letter is in the random word.
// parameter "letter" will be used for future
function checks(letter){
var test =["hi", "hello dude"];

test[1] = test[1].replace(test[1][6],"h");
console.log(chosenWord);
console.log(test);
var ew;
var j;

    for(var i = 0; i < chosenWord.length; i++){
        if (letter === chosenWord[i]) {
 
             j = i*2;
         
           
      
//            word[1] = word[1].replace(word[1][4], letter);
            //ew = word[1].replace(word[1][j], letter);
//         console.log(word[1]);
           
           
        }
        else {
            // make a wrongGuess function
            wrongGuess();
        }
    }
    word[1] = word[1].replace(word[1][1], letter);
    //ew = word[1].replace(word[1][j], letter);
   console.log(word);
    document.getElementById("dash").innerHTML = word[1];
}

checks("h");

function addLetter(letter){

    document.getElementById("dash").innerHTML[1] = "letter";
    return letter;
}
//addLetter("h");
function wrongGuess(){

}




// this is where user inputs 
document.onkeyup = function(event){
    // checks what key was pressed and placed to variable guess
    var guess = event.key;

}



