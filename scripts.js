let keys = document.getElementsByClassName("input");
let guessLetters = [];
let turn = 0;

let word = "";

document.addEventListener('DOMContentLoaded', function() {
    word = validWords[Math.floor(Math.random() * validWords.length)]
    console.log(word);
});

handleInput = () => {
    let inputBoxes = document.querySelectorAll('.active_row .letter');
    for (let index = 0; index != inputBoxes.length; index++) {
        if(guessLetters[index] != undefined){
            inputBoxes[index].value = guessLetters[index]; 
        }else{
            inputBoxes[index].value = "";
        }
          
    }
}

backspaceLetter = () => {
    guessLetters.pop();
    handleInput();
}

document.addEventListener('keydown', function(event) {
    if (event.key.match(/^[a-z]$/i)) {
        if(guessLetters.length != 5){
            guessLetters.push(event.key.toUpperCase());
            handleInput();
        }
    }else if(event.key.match("Enter")){
        evaluateInputWord();
    }else if(event.key.match("Backspace")){
        backspaceLetter();
    }
});

for (var i = 0; i < keys.length; i++) {
    keys[i].addEventListener('click', function(){
        if(guessLetters.length != 5){
            guessLetters.push(this.textContent.toUpperCase());
        }
        handleInput();
    });
}

document.getElementById("btnEnter").addEventListener('click', function(){
    evaluateInputWord();
})

document.getElementById("btnBackspace").addEventListener('click', backspaceLetter);
evaluateInputWord = () => {
    let inputBoxes = document.querySelectorAll('.active_row .letter');
    
    if(guessLetters.length != 5){
        alert("Not enough letters");
        document.getElementById("errorModal").style.display = 'block';
    }else{
        if(guessLetters.join("") === word){
            alert("Welldone");
        }else if(!validWords.includes(guessLetters.join(""))){
            alert("Not a word in the list.");
            inputBoxes.forEach(x => x.value = null);
        }else{
            evaluateLetter(inputBoxes);
            turn++;
            if(turn == 5){
                alert("please try again later!");
                let activeRow = document.querySelector('.active_row');
                activeRow.classList.remove('active_row');
            }else{
                nextRow();
            }
        }
    }
    guessLetters = [];
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

nextRow = () => {
    let activeRow = document.querySelector('.active_row');
    activeRow.classList.remove('active_row');
    let sibling = activeRow.nextElementSibling;
    sibling.classList.add('active_row');
}

