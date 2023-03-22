// Do not change the import statement
// This statement imports the exported file so it's contents are accessible to us
// This makes the "placeholderQuestions" act like a variable essentially.
import placeholderQuestions from "./placeholder-questions.js";
// Is an object who's contents are the files data
// console.log({ placeholderQuestions });
// console.log(placeholderQuestions[0]);
// When I need a question/answer I can iterate over the array

// Window click event, does it work?
// window.onclick = (e) => {
//     console.log(e.target); // to get the element
//     console.log(e.target.tagName); // to get the element tag name alone
//     console.log(e.target.id); // get element id
//   };

window.onclick = (e) => {
    // console.log(e.target); // to get the element
    // console.log(e.target.tagName); // to get the element tag name alone
    // console.log(e.target.id); // get element id
    doTheCardThing(e.target.id);
};
let currentCardValue = "";
function doTheCardThing(id) {
    document.getElementById(id).innerText =
    placeholderQuestions[id.slice(-2)]["question"];
    // console.log(id.slice(-2));
    currentCard = placeholderQuestions[id.slice(-2)];
    currentCardValue = document.getElementById(id)[2];
    // console.log(currentCardValue);
}

let currentCard = {};
// * Assign the category name to each grid item
let categoryOne = document.getElementById("category_name");
// console.log(placeholderQuestions[0]["category"]);
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

let cat1RdTwoFirst = document.getElementById("catone-rd2-400");
cat1RdTwoFirst.addEventListener("click", () => {
    cat1RdTwoFirst.innerText = placeholderQuestions[5]["question"];
    currentCard = placeholderQuestions[5];
    // console.log(cat1RdTwoFirst);
    // return answerQuestion()
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

let answerForm2 = document.getElementById("rd2-form");
answerForm2.addEventListener("submit", (e) => {
    e.preventDefault();
    let answer = answerForm2.answer.value;
    console.log(answer);
    submitAnswer2(currentCard, answer)
});
function changePlayer() {
    
}

function submitAnswer2(card, answer) {
    // onclick event
    // if (response.toLowerCase() === placeholderQuestions[0]["answer"])
    console.log("Running submit answer function: ", card, answer);
    if (answer.toLowerCase() === currentCard.answer.toLowerCase()) {
        // remove tile from board and add score to current player score
        alert("great. pick next tile.");
        // card.removeChild();
        // let answerBox = document.getElementById("answer-input");
        answerForm2.reset();
    } else {
        // subtract from current player score
        alert("NO, sorry");
        answerForm2.reset();
        // changePlayer();
    }
}

function submitAnswer(card, answer) {
    // onclick event
    // if (response.toLowerCase() === placeholderQuestions[0]["answer"])
    console.log("Running submit answer function: ", card, answer);
    if (answer.toLowerCase() === currentCard.answer.toLowerCase()) {
        // remove tile from board and add score to current player score
        alert("great. pick next tile.");
        // card.removeChild();
        // let answerBox = document.getElementById("answer-input");
        answerForm.reset();
    } else {
        // subtract from current player score
        alert("NO, sorry");
        answerForm.reset();
        // changePlayer();
    }
}

function skipQuestion() {
    // pass question to next player, or remove from board if both player skips

}