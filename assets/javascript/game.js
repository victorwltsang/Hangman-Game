var used = [];
var correct = [];
var randomWord;
var placeholders = "";
var lives = 4;

var initRandomWord = () => {
    //declare a list of household items
    // let words = ["clock", "backpack", "calender", "carpet", "china", "dishwasher", "knives", "paintings", "refrigerator", "tablecloth"];

    let words = ["knives", "fork", "bed", "clothes", "brush", "mat"];

    //random a word from the words array
    randomWord = words[Math.floor(Math.random() * words.length)];
    console.log(randomWord);

    writePlaceholders(randomWord);
};

var writePlaceholders = (randomWord) => {

    for (let i = 0; i < randomWord.length; i++) {
        placeholders += `<span id="letter${i}" class="placeholder">_</span>`;
    }
    document.getElementById("game-placeholder").innerHTML = placeholders;
    document.getElementById("game-lives").innerHTML = lives;
};

var getLetters = (event) => {
    var x = event.keyCode; // Get the Unicode value
    var y = String.fromCharCode(x); // Convert the value into a character
    used.push(y);
    console.log(used);
    document.getElementById("wrong").innerHTML = used;

    validateLetters(y);


};

var validateLetters = (letter) => {
    let haveLetter = randomWord.indexOf(letter);
    console.log(haveLetter);
    if (haveLetter >= 0) {
        document.getElementById(`letter${haveLetter}`).innerHTML = letter;
    } else {
        updateLives();
    }
};

var updateLives = () => {
    lives--;
    document.getElementById("game-lives").innerHTML = lives;
    if (lives <= 0) {
        alert("You Lose");
        let replay = confirm("Replay?");
        if (replay) {
            location.reload();
        }
    }
};

initRandomWord();
