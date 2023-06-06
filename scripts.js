let keys = document.getElementsByClassName("input");
//let inputLetters = document.getElementsByClassName("letter");
let inputLetters = [];
let guessLetters = [];

let word = "";

document.addEventListener('DOMContentLoaded', function() {
    word = validWords[Math.floor(Math.random() * validWords.length)]
    console.log(word);
});

//todo: optimize the function to work with both keydown and button click
handleInput = (letter) => {
    let inputBoxes = document.querySelectorAll('.active_row .letter');
    if(guessLetters.length != 5){
        guessLetters.push(letter.toUpperCase());
    }
    for (let index = 0; index <= inputBoxes.length; index++) {
        if(guessLetters[index] != undefined){
            inputBoxes[index].value = guessLetters[index]; 
        }
          
    }
}

//todo: a function to read keydown 
for (var i = 0; i < keys.length; i++) {
    keys[i].addEventListener('click', function(){
        handleInput(this.textContent);
    });
}

document.getElementById("btnEnter").addEventListener('click', function(){
    evaluateInputWord();
})

evaluateInputWord = () => {
    let inputBoxes = document.querySelectorAll('.active_row .letter');

    for (let index = 0; index <= inputBoxes.length; index++) {
        if(inputBoxes[index] != undefined && inputBoxes[index].value != null){
            inputLetters.push(inputBoxes[index].value.toUpperCase()); 
        }  
    }

    if(inputLetters.length != 5){
        alert("Not enough letters");
    }else{
        if(inputLetters.join("") === word){
            alert("Welldone");
        }else if(!validWords.includes(inputLetters.join(""))){
            alert("Not a word in the list.");
        }else{
            evaluateLetter(inputBoxes);
        }
    }
    console.log(inputLetters); 
}

evaluateLetter = (inputBoxes) => {
    for (let i = 0; i < word.length; i++) {
        if(inputBoxes[i].value == word[i]){
            inputBoxes[i].classList.add("letterInRightPosition");
        }else if(word.includes(inputBoxes[i].value)){
            inputBoxes[i].classList.add("letterInWrongPosition");
        }
    }    
}
