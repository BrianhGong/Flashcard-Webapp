const storedFlashcards = localStorage.getItem('flashcards');
const flashcards = storedFlashcards ? JSON.parse(storedFlashcards) : backup;
const boxSelect = document.getElementById("boxesSelector");
let selectedBox = "all";
boxSelect.addEventListener("change", () => {
    selectedBox = boxSelect.value;
    console.log(selectedBox);
    start();
    
});

function moveFlashcardToNextBox(flashcard) {
    flashcard.box = Math.min(5, flashcard.box + 1);
    localStorage.setItem('flashcards', JSON.stringify(flashcards));
}

function resetFlashcardToBox1(flashcard) {
    flashcard.box = 1;
    localStorage.setItem('flashcards', JSON.stringify(flashcards));
}

termElement = document.querySelector("#term");
const definitionElement = document.querySelector("#definition");
const flashcardBoxNumber = document.querySelector("#flashcardBoxNumber");
const showAnswerButton = document.querySelector("#showAnswer");
const knowButton = document.querySelector("#know");
const dontknowButton = document.querySelector("#dontknow");

let currentFlashcard;

function getRandomFlashcard() {
    let tempflashcards = flashcards.filter(card => card.box == selectedBox);
    if (selectedBox === "all"  || tempflashcards.length == 0) {
        tempflashcards = flashcards;
    }
    const randomIndex = Math.floor(Math.random() * tempflashcards.length);
    currentFlashcard = tempflashcards[randomIndex];
    displayFlashcard();
}

function displayFlashcard() {
    const term = currentFlashcard.question;
    termElement.textContent = term;
    definitionElement.textContent = "";
    flashcardBoxNumber.textContent = "Box:" + currentFlashcard.box;

}

showAnswerButton.addEventListener("click", () => {
    const definition = currentFlashcard.answer;
    definitionElement.textContent = definition;
});

knowButton.addEventListener("click", () => {
    moveFlashcardToNextBox(currentFlashcard)
    definitionElement.textContent = definition;
    start();
});

dontknowButton.addEventListener("click", () => {
    resetFlashcardToBox1(currentFlashcard)
    definitionElement.textContent = definition;
    start();
});

function start() {
    getRandomFlashcard();
    displayFlashcard();
}

start();


