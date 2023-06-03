let keys = document.getElementsByClassName("input");
let inputLetters = document.getElementsByClassName("letter");
let guessLetters = [];

let word = "";

document.addEventListener('DOMContentLoaded', function() {
    word = validWords[Math.floor(Math.random() * validWords.length)]
    console.log(word);
});

handleInput = (letter) => {
    let inputBoxes = document.querySelectorAll('.active_row .letter');
    if(guessLetters.length != 5){
        guessLetters.push(letter);
    }
    for (let index = 0; index <= inputBoxes.length; index++) {
        if(guessLetters[index] != undefined){
            inputBoxes[index].value = guessLetters[index]; 
        }
          
    }
}

for (var i = 0; i < keys.length; i++) {
    keys[i].addEventListener('click', function(){
        handleInput(this.textContent);
    });
}

document.getElementById("btnEnter").addEventListener('click', function(){

})
