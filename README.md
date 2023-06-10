# Wordle Game
This is my version of the wordle game built using html, css and javascript

## How to Play

1. Open the [Wordle Game](https://maryamshaheedha.github.io/wordle/) in a web browser.
2. On load a five letter word will be randomly selected from a list of word as the target word. 
3. Enter your guess using your keyboard or the keyboard provided on the screen.
4. Press 'Enter' or click the button at the left corner of the keyboard.
5. You will be notified if your guess is correct or not.
6. You will get a total of 5 turns to guess the correct word

## Features
- Selects a random target word from a predefined list of words.
- Validate only five-letter words
- limited number of guesses
- ability to restart the game on winning or losing.
- ability to store game stat
- User-friendly interface with real-time feedback.

## Technologies Used

- HTML
- CSS
- JavaScript

## Approach Taken
1. Project Setup
  - index.html => View
  - scripts.js => All the logic is stored here
  - wordlist.js => Predefined list of words
  - style.css => All the styling for the web page stored here
2. Designing the interface
  - Inside the `body`, added `header`, `section`, `modals` and a `footer`. 
3. Defining the logic
  - On keydown or letter click on the keyboard, the letter will be pushed to `guessLetter` array and `handleInput()` function will be triggered where the function will show the        letter on the input fields. 
  - On press `Enter` or click on enter button, `evaluateInputWord()` will be triggered where the function will compare the guessed word with the target word.
4. Color Scheme Used
##
| Color             | Hex                                                                |
| ----------------- | ------------------------------------------------------------------ |
| #092530  | ![#092530](https://via.placeholder.com/10/092530?text=+) |
| #074537  | ![#074537](https://via.placeholder.com/10/074537?text=+) |
| #eff5fd  | ![#eff5fd](https://via.placeholder.com/10/eff5fd?text=+) |
| #166648  | ![#166648](https://via.placeholder.com/10/166648?text=+) |
| #fff3f2  | ![#fff3f2](https://via.placeholder.com/10/fff3f2?text=+) |
| #4E9F3D  | ![#4E9F3D](https://via.placeholder.com/10/4E9F3D?text=+) |
| #e1934a  | ![#e1934a](https://via.placeholder.com/10/e1934a?text=+) |
| #77100e  | ![#77100e](https://via.placeholder.com/10/77100e?text=+) |

## Installation
2. Open [Wordle Game](https://maryamshaheedha.github.io/wordle/) in a web browser to play the game.

## Unsolved Problems
- Keeping a track of the users score is unsolved. And keeping a record or caching the users progress is yet to be solved.
- I failed to make the view responsive.

## Contact

For any questions or suggestions, please feel free to contact me:

- Email: [m.shahydha@gmail.com](mailto:m.shahydha@gmail.com)
- GitHub: [MaryamShaheedha](https://github.com/MaryamShaheedha)
