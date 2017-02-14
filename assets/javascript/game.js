var used = [];
var correct = [];
var randomWord;
var placeholders = "";
var lives;
var wins = 0;
var loss = 0;
document.getElementById("game-wins").innerHTML = wins;
document.getElementById("game-loss").innerHTML = loss;

var initRandomWord = () => {
    //declare a list of household items
    // let words = ["clock", "backpack", "calender", "carpet", "china", "dishwasher", "knives", "paintings", "refrigerator", "tablecloth"];
    lives = 4;
    used = [];
    correct = [];
    placeholders = "";
    document.getElementById("game-placeholder").innerHTML = placeholders;
    document.getElementById("wrong").innerHTML = "";
    let words = ["knives", "fork", "bed", "clothes", "brush", "mat"];

    //random a word from the words array
    randomWord = words[Math.floor(Math.random() * words.length)];
    console.log(randomWord);

    writePlaceholders(randomWord);
};

var writePlaceholders = (randomWord) => {

    for (let i = 0; i < randomWord.length; i++) {
        placeholders += `<span id="letter${i}" class="placeholder">&nbsp;&nbsp;&nbsp;</span>`;
    }
    document.getElementById("game-placeholder").innerHTML = placeholders;
    document.getElementById("game-lives").innerHTML = lives;
};

var getLetters = (event) => {
    var x = event.keyCode; // Get the Unicode value
    var y = String.fromCharCode(x); // Convert the value into a character

    used.push(y);
    console.log(used);
    document.getElementById("ui").value = "";
    document.getElementById("wrong").innerHTML = used;

    validateLetters(y);


};

var validateLetters = (letter) => {
    let haveLetter = randomWord.indexOf(letter);
    let duplicateUsedFront = used.indexOf(letter);
    let duplicateUsedBack = used.lastIndexOf(letter);
    console.log("dup " + duplicateUsedFront);
    console.log("dupB " + duplicateUsedBack);

    console.log(haveLetter);


    if (haveLetter >= 0) {
        document.getElementById(`letter${haveLetter}`).innerHTML = letter;
        correct[haveLetter] = letter;
        console.log(correct);
        if (correct.join("") === randomWord) {
            alert("win");
            wins++;
            document.getElementById("game-wins").innerHTML = wins;

            initRandomWord();
        }
    } else {
        if (duplicateUsedFront == duplicateUsedBack) {
            updateLives();
        }

    }
};

var updateLives = () => {
    lives--;
    document.getElementById("game-lives").innerHTML = lives;
    if (lives <= 0) {
        alert(`You Lose, the word was ${randomWord}`);
        loss++;
        document.getElementById("game-loss").innerHTML = loss;
        initRandomWord();

    }
};

var replay = () => {
    initRandomWord();
}

initRandomWord();
