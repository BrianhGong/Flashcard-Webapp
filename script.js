const boxButtons = document.querySelectorAll('.box');
boxButtons.forEach(function(boxButton) {
    boxButton.addEventListener('click', function() {
        window.location.href = 'flashcard.html';
    });
});

const addButton = document.querySelector("#add");
addButton.addEventListener("click", () => {
    window.location.href = "addflashcard.html";
});


let flashcards =  {
    
}




