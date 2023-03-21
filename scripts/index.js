// Do not change the import statement
// This statement imports the exported file so it's contents are accessible to us
// This makes the "placeholderQuestions" act like a variable essentially.
import placeholderQuestions from "./placeholder-questions.js";
// Is an object who's contents are the files data
console.log({ placeholderQuestions });
// console.log(placeholderQuestions[0]);
// When I need a question/answer I can iterate over the array


let currentCard = {};
// * Assign the category name to each grid item
let categoryOne = document.getElementById("category_name");
// console.log(categoryOne.textContent);
categoryOne.textContent = placeholderQuestions[0]["category"];
// console.log(categoryOne.textContent);
let categoryTwo = document.getElementById("category2_name");
categoryTwo.textContent = placeholderQuestions[10]["category"];

let categoryThree = document.getElementById("category3_name");
categoryThree.textContent = placeholderQuestions[20]["category"];

let categoryFour = document.getElementById("category4_name");
categoryFour.textContent = placeholderQuestions[30]["category"];

let categoryFive = document.getElementById("category5_name");
categoryFive.textContent = placeholderQuestions[40]["category"];

let categorySix = document.getElementById("category6_name");
categorySix.textContent = placeholderQuestions[50]["category"];

// Assign game board questions
let cat1RdOneFirst = document.getElementById("catone-rd1-200");
cat1RdOneFirst.addEventListener("click", () => {
    cat1RdOneFirst.innerText = placeholderQuestions[0]["question"];
    currentCard = placeholderQuestions[0];
    // return answerQuestion()
});

let cat1RdOneSecond = document.getElementById("catone-rd1-400");
cat1RdOneSecond.addEventListener("click", () => {
    cat1RdOneSecond.innerText = placeholderQuestions[1]["question"];
    currentCard = placeholderQuestions[1];
    // return answerQuestion()
});

let cat1RdOneThird = document.getElementById("catone-rd1-600");
cat1RdOneThird.addEventListener("click", () => {
    cat1RdOneThird.innerText = placeholderQuestions[2]["question"];
    currentCard = placeholderQuestions[2];
});
let cat1RdOneFourth = document.getElementById("catone-rd1-800");
cat1RdOneFourth.addEventListener("click", () => {
    cat1RdOneFourth.innerText = placeholderQuestions[3]["question"];
    currentCard = placeholderQuestions[3];
});
let cat1RdOneFifth = document.getElementById("catone-rd1-1000");
cat1RdOneFifth.addEventListener("click", () => {
    cat1RdOneFifth.innerText = placeholderQuestions[4]["question"];
    currentCard = placeholderQuestions[4];
});

// let question = document.getElementsByClassName("grid-item");
// question.addEventListener("click", revealQuestion());

// async function answerQuestion() {
    
// }

let answerForm = document.getElementById("rd1-form");
answerForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let answer = answerForm.answer.value;
    console.log(answer);
    submitAnswer(currentCard, answer)
});
function changePlayer() {
    
}


function submitAnswer(card, answer) {
    // onclick event
    // if (response.toLowerCase() === placeholderQuestions[0]["answer"])
    console.log("Running submit answer function: ", card, answer);
    if (answer.toLowerCase() === currentCard.answer) {
        // remove tile from board and add score to current player score
        alert("great. pick next tile.");
        currentCard.removeChild();
        let answerBox = document.getElementById("answer-input");
        answerBox.reset();
    } else {
        // subtract from current player score
        alert("NO, sorry");
        // changePlayer();
    }
}

function skipQuestion() {
    // pass question to next player, or remove from board if both player skips

}