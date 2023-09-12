
let box;
const boxButtons = document.querySelectorAll('.box');
boxButtons.forEach(function(boxButton) {
    boxButton.addEventListener('click', function() {
        window.location.href = 'flashcard.html';
        box = boxButton.id;
        
    });
});

const addButton = document.querySelector("#add");
addButton.addEventListener("click", () => {
    window.location.href = "addflashcard.html";
});


