

const storedFlashcards = localStorage.getItem('flashcards');
const flashcards = storedFlashcards ? JSON.parse(storedFlashcards) : backup;
const boxSelect = document.getElementById("boxesSelector");
let selectedBox = "all";
boxSelect.addEventListener("change", () => {
    selectedBox = boxSelect.value;
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
    
    
    if (selectedBox === "all"  || tempflashcards.length) {
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






var backup = 
[
    
    { question: "안녕하세요", answer: "Hello", box: 1 },
    { question: "사과", answer: "Apple", box: 1 },
    { question: "고양이", answer: "Cat", box: 1 },
    { question: "감사합니다", answer: "Thank you", box: 1 },
    { question: "학교", answer: "School", box: 1 },
    { question: "바다", answer: "Sea", box: 1 },
    { question: "친구", answer: "Friend", box: 1 },
    { question: "물", answer: "Water", box: 1 },
    { question: "노래", answer: "Song", box: 1 },
    { question: "강아지", answer: "Dog", box: 1 },
    { question: "컴퓨터", answer: "Computer", box: 1 },
    { question: "책", answer: "Book", box: 1 },
    { question: "차", answer: "Car", box: 1 },
    { question: "우산", answer: "Umbrella", box: 1 },
    { question: "맛있는", answer: "Delicious", box: 1 },
    { question: "일요일", answer: "Sunday", box: 1 },
    { question: "모자", answer: "Hat", box: 1 },
    { question: "공원", answer: "Park", box: 1 },
    { question: "텔레비전", answer: "Television", box: 1 },
    { question: "우유", answer: "Milk", box: 1 },
    { question: "영화", answer: "Movie", box: 1 },
    { question: "비", answer: "Rain", box: 1 },
    { question: "방", answer: "Room", box: 1 },
    { question: "커피", answer: "Coffee", box: 1 },
    { question: "선물", answer: "Gift", box: 1 },
    { question: "봄", answer: "Spring", box: 1 },
    { question: "바나나", answer: "Banana", box: 1 },
    { question: "화요일", answer: "Tuesday", box: 1 },
    { question: "신발", answer: "Shoes", box: 1 },
    { question: "산", answer: "Mountain", box: 1 },
    { question: "춤", answer: "Dance", box: 1 },
    { question: "여행", answer: "Travel", box: 1 },
    { question: "가방", answer: "Bag", box: 1 },
    { question: "집", answer: "House", box: 1 },
    { question: "피자", answer: "Pizza", box: 1 },
    { question: "가수", answer: "Singer", box: 1 },
    { question: "겨울", answer: "Winter", box: 1 },
    { question: "문", answer: "Door", box: 1 },
    { question: "책상", answer: "Desk", box: 1 },
    { question: "운동", answer: "Exercise", box: 1 },
    { question: "신문", answer: "Newspaper", box: 1 },
    { question: "옷", answer: "Clothes", box: 1 },
    { question: "꽃", answer: "Flower", box: 1 },
    { question: "수요일", answer: "Wednesday", box: 1 },
    { question: "자전거", answer: "Bicycle", box: 1 },
    { question: "음악", answer: "Music", box: 1 },
    { question: "밤", answer: "Night", box: 1 },
    { question: "컵", answer: "Cup", box: 1 },
    { question: "미소", answer: "Smile", box: 1 },
    { question: "포도", answer: "Grape", box: 1 },
    { question: "목요일", answer: "Thursday", box: 1 },
    { question: "운동화", answer: "Sneakers", box: 1 },
    { question: "눈", answer: "Snow", box: 1 },
    { question: "행복", answer: "Happiness", box: 1 },
    { question: "저녁", answer: "Dinner", box: 1 },
    { question: "전화", answer: "Telephone", box: 1 },
    { question: "과일", answer: "Fruit", box: 1 },
    { question: "금요일", answer: "Friday", box: 1 },
    { question: "가족", answer: "Family", box: 1 },
    { question: "해", answer: "Sun", box: 1 },
    { question: "종이", answer: "Paper", box: 1 },
    { question: "축구", answer: "Soccer", box: 1 },
    { question: "공부", answer: "Study", box: 1 },
    { question: "토요일", answer: "Saturday", box: 1 },
    { question: "거울", answer: "Mirror", box: 1 },
    { question: "꿈", answer: "Dream", box: 1 },
    { question: "비행기", answer: "Airplane", box: 1 },
    { question: "모자이크", answer: "Mosaic", box: 1 },
    { question: "자격증", answer: "Qualification", box: 1 },
    { question: "제주도", answer: "Jeju Island", box: 1 },
    { question: "하늘", answer: "Sky", box: 1 },
    { question: "눈물", answer: "Tear", box: 1 },
    { question: "기억", answer: "Memory", box: 1 },
    { question: "시간", answer: "Time", box: 1 },
    { question: "창문", answer: "Window", box: 1 },
    { question: "얼굴", answer: "Face", box: 1 },
    { question: "정원", answer: "Garden", box: 1 },
    { question: "기차", answer: "Train", box: 1 },
    { question: "여름", answer: "Summer", box: 1 },
    { question: "별", answer: "Star", box: 1 },
    { question: "바지", answer: "Pants", box: 1 },
    { question: "사진", answer: "Photograph", box: 1 },
    { question: "축구공", answer: "Soccer ball", box: 1 },
    { question: "가게", answer: "Store", box: 1 },
    { question: "거리", answer: "Street", box: 1 },
    { question: "언어", answer: "Language", box: 1 },
    { question: "소리", answer: "Sound", box: 1 },
    { question: "해변", answer: "Beach", box: 1 },
    { question: "나무", answer: "Tree", box: 1 },
    { question: "사랑", answer: "Love", box: 1 },
    { question: "빨간색", answer: "Red", box: 1 },
    { question: "계란", answer: "Egg", box: 1 },
    { question: "노래방", answer: "Karaoke", box: 1 },
    { question: "바지", answer: "Pants", box: 1 },
    { question: "가슴", answer: "Chest", box: 1 },
    { question: "하루", answer: "Day", box: 1 },
    { question: "기다리다", answer: "Wait", box: 1 },
    { question: "나누다", answer: "Share", box: 1 },
    { question: "편지", answer: "Letter", box: 1 },
    { question: "모임", answer: "Gathering", box: 1 },
    { question: "눈동자", answer: "Pupil", box: 1 },
    { question: "반지", answer: "Ring", box: 1 },
    { question: "무지개", answer: "Rainbow", box: 1 },
    { question: "빨래", answer: "Laundry", box: 1 },
    { question: "현관", answer: "Entrance", box: 1 },
    { question: "도서관", answer: "Library", box: 1 },
    { question: "영어", answer: "English", box: 1 },
    { question: "화장실", answer: "Bathroom", box: 1 },
    { question: "손가락", answer: "Finger", box: 1 },
    { question: "아빠", answer: "Dad", box: 1 },
    { question: "우리", answer: "Us", box: 1 },
    { question: "애", answer: "Baby", box: 1 },
    { question: "과학", answer: "Science", box: 1 },
    { question: "거북이", answer: "Turtle", box: 1 },
    { question: "봄", answer: "Spring", box: 1 },
    { question: "열쇠", answer: "Key", box: 1 },
    { question: "우리집", answer: "Our house", box: 1 },
    { question: "걷다", answer: "Walk", box: 1 },
    { question: "빵", answer: "Bread", box: 1 },
    { question: "과자", answer: "Cookie", box: 1 },
    { question: "표", answer: "Ticket", box: 1 },
    { question: "소포", answer: "Parcel", box: 1 },
    { question: "스포츠", answer: "Sports", box: 1 },
    { question: "육지", answer: "Land", box: 1 },
    { question: "월요일", answer: "Monday", box: 1 },
    { question: "구름", answer: "Cloud", box: 1 },
    { question: "우유", answer: "Milk", box: 1 },
    { question: "사다", answer: "Buy", box: 1 },
    { question: "과일", answer: "Fruit", box: 1 },
    { question: "우주", answer: "Space", box: 1 },
    { question: "모자", answer: "Hat", box: 1 },
    { question: "아이스크림", answer: "Ice cream", box: 1 },
    { question: "유리", answer: "Glass", box: 1 },
    { question: "배", answer: "Pear", box: 1 },
    { question: "얼음", answer: "Ice", box: 1 },
    { question: "언제", answer: "When", box: 1 },
    { question: "오렌지", answer: "Orange", box: 1 },
    { question: "가난한", answer: "Poor", box: 1 },
    { question: "옆", answer: "Next to", box: 1 },
    { question: "과제", answer: "Assignment", box: 1 },
    { question: "웃다", answer: "Laugh", box: 1 },
    { question: "잠", answer: "Sleep", box: 1 },
    { question: "모임", answer: "Meeting", box: 1 },
    { question: "켜다", answer: "Turn on", box: 1 },
    { question: "마지막", answer: "Last", box: 1 },
    { question: "끝", answer: "End", box: 1 },
    { question: "짜다", answer: "Make", box: 1 },
    { question: "걱정", answer: "Worry", box: 1 },
    { question: "귀", answer: "Ear", box: 1 },
    { question: "빨래", answer: "Laundry", box: 1 },
    { question: "유리", answer: "Glass", box: 1 },
    { question: "도착", answer: "Arrival", box: 1 },
    { question: "햇빛", answer: "Sunlight", box: 1 },
    { question: "기다리다", answer: "Wait", box: 1 },
    { question: "평생", answer: "Lifetime", box: 1 },
    { question: "냄비", answer: "Pot", box: 1 },
    { question: "다음", answer: "Next", box: 1 },
    { question: "콘서트", answer: "Concert", box: 1 },
    { question: "미래", answer: "Future", box: 1 },
    { question: "옷장", answer: "Closet", box: 1 },
    { question: "별로", answer: "Not much", box: 1 },
    { question: "세탁기", answer: "Washing machine", box: 1 },
    { question: "사용", answer: "Use", box: 1 },
    { question: "저녁식사", answer: "Dinner", box: 1 },
    { question: "교회", answer: "Church", box: 1 },
    { question: "편지", answer: "Letter", box: 1 },
    { question: "닫다", answer: "Close", box: 1 },
    { question: "얼굴", answer: "Face", box: 1 },
    { question: "책상", answer: "Desk", box: 1 },
    { question: "잔디", answer: "Grass", box: 1 },
    { question: "그림", answer: "Picture", box: 1 },
    { question: "춤", answer: "Dance", box: 1 },
    { question: "피아노", answer: "Piano", box: 1 },
    { question: "포스터", answer: "Poster", box: 1 },
    { question: "놀다", answer: "Play", box: 1 },
    { question: "파티", answer: "Party", box: 1 },
    { question: "영화관", answer: "Movie theater", box: 1 },
    { question: "연습", answer: "Practice", box: 1},
    { question: "시", answer: "Poem", box: 1 },
    { question: "공예", answer: "Crafts", box: 1 },
    { question: "디자인", answer: "Design", box: 1 },
    { question: "건축", answer: "Architecture", box: 1 },
    { question: "음식", answer: "Food", box: 1 },
    { question: "요리", answer: "Cooking", box: 1 },
    { question: "식당", answer: "Restaurant", box: 1 },
    { question: "음식점", answer: "Dining Place", box: 1 },
    { question: "메뉴", answer: "Menu", box: 1 },
    { question: "주문", answer: "Order", box: 1 },
    { question: "음식 배달", answer: "Food Delivery", box: 1}
    { question: "농구", answer: "Basketball", box: 1 },
    { question: "야구", answer: "Baseball", box: 1 },
    { question: "테니스", answer: "Tennis", box: 1 },
    { question: "골프", answer: "Golf", box: 1 },
    { question: "수영", answer: "Swimming", box: 1 },
    { question: "자전거", answer: "Biking", box: 1 },
    { question: "등산", answer: "Hiking", box: 1 },
    { question: "스키", answer: "Skiing", box: 1 },
    { question: "체조", answer: "Gymnastics", box: 1 },
    { question: "헬스", answer: "Fitness", box: 1 }
    
];