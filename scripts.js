let keys = document.getElementsByClassName("input");
let guessLetters = [];
let turn = 0;

let word = "";

document.addEventListener('DOMContentLoaded', function() {
    selectRandomWord();
});

selectRandomWord = () => {
    word = validWords[Math.floor(Math.random() * validWords.length)]
    console.log(word);
}
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
        document.getElementById("error-title").innerText = "Not enough Letters!";
        document.getElementById("error-message").innerText = "It should be a 5 letter word. Please try again."
        document.getElementById("errorModal").style.display = 'block';
        setTimeout(function(){
            document.getElementById("errorModal").style.display = 'none';
        }, 3000);
    }else{
        if(guessLetters.join("") === word){
            document.getElementById("wonModal").style.display = 'block';
        }else if(!validWords.includes(guessLetters.join(""))){
            document.getElementById("error-title").innerText = "Not a word in the list!";
            document.getElementById("error-message").innerText = "The word is not in the list. Please try again."
            document.getElementById("errorModal").style.display = 'block';
            setTimeout(function(){
                document.getElementById("errorModal").style.display = 'none';
            }, 3000);
            inputBoxes.forEach(x => x.value = null);
        }else{
            evaluateLetter(inputBoxes);
            turn++;
            if(turn == 5){
                document.getElementById("lostModal").style.display = 'block';
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

newRound = () => {
    turn = 0;
    guessLetters = [];
    selectRandomWord();
    let inputBoxes = document.querySelectorAll('.letter');
    inputBoxes.forEach(x => {x.value = ""; x.classList.remove("letterInRightPosition"); x.classList.remove("letterInWrongPosition")});
    let active_row = document.getElementsByClassName(".active_row");
    if(active_row != undefined && active_row.length != 0 && active_row != null){
        active_row.forEach(x => x.classList.remove("active_row"));
    }
    document.getElementById("row_1").classList.add("active_row");
};

document.getElementById("tryAgain").addEventListener('click', function(){
    newRound();
    document.getElementById("lostModal").style.display = "none";
});

document.getElementById("playAgain").addEventListener('click', function(){
    newRound();
    document.getElementById("wonModal").style.display = "none";
});

