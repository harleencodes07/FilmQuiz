// ==========================================
// QUESTIONS
// ==========================================

const questions = [
    {
        question: "The movie Titanic was directed by James Cameron.",
        answer: true
    },
    {
        question: "Avatar was released before Titanic.",
        answer: false
    },
    {
        question: "The Lion King is a Disney movie.",
        answer: true
    },
    {
        question: "Harry Potter is based on books written by J.K. Rowling.",
        answer: true
    },
    {
        question: "Frozen features the song 'Let It Go'.",
        answer: true
    },
    {
        question: "The character Iron Man is played by Chris Evans.",
        answer: false
    },
    {
        question: "Emma Watson played Hermione Granger in all eight Harry Potter films.",
        answer: true
    },
    {
        question: "The movie Inception ends by clearly showing the spinning top fall over.",
        answer: false
    },
    {
        question: "Ed Sheeran makes a cameo appearance in Game of Thrones.",
        answer: true
    },
    {
        question: "The Oscar statuette is made entirely of solid gold.",
        answer: false
    },
    {
        question: "The Beatles officially broke up in 1970.",
        answer: true
    },
    {
        question: "Frozen was Disney's first animated movie.",
        answer: false
    },
    {
        question: "Leonardo DiCaprio won his first Oscar for The Revenant.",
        answer: true
    },
    {
        question: "BTS was formed by SM Entertainment.",
        answer: false
    },
    {
        question: "The famous line 'I'll be back' is from The Terminator.",
        answer: true
    }
];

// ==========================================
// VARIABLES
// ==========================================

let currentQuestion = 0;
let score = 0;

// ==========================================
// ELEMENTS
// ==========================================

const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");

const startBtn = document.getElementById("start-btn");
const restartBtn = document.getElementById("restart-btn");

const questionText = document.getElementById("question-text");
const questionNumber = document.getElementById("question-number");

const scoreText = document.getElementById("score");
const finalScore = document.getElementById("final-score");

const feedback = document.getElementById("feedback");

const progressFill = document.getElementById("progress-fill");

const trueBtn = document.getElementById("true-btn");
const falseBtn = document.getElementById("false-btn");

// ==========================================
// START QUIZ
// ==========================================

startBtn.addEventListener("click", () => {

    startScreen.classList.add("hidden");
    quizScreen.classList.remove("hidden");

    loadQuestion();

});

// ==========================================
// LOAD QUESTION
// ==========================================

function loadQuestion(){

    let q = questions[currentQuestion];

    questionText.innerText = q.question;

    questionNumber.innerText =
        `${currentQuestion + 1} / ${questions.length}`;

    progressFill.style.width =
        `${((currentQuestion)/questions.length)*100}%`;

}

// ==========================================
// CHECK ANSWER
// ==========================================

function checkAnswer(userAnswer){

    if(userAnswer === questions[currentQuestion].answer){

        score++;

        feedback.innerHTML = "✅ Correct!";

        feedback.style.color = "green";

    }
    else{

        feedback.innerHTML = "❌ Wrong!";

        feedback.style.color = "#C0392B";

    }

    scoreText.innerText = score;

    currentQuestion++;

    setTimeout(()=>{

        feedback.innerHTML="";

        if(currentQuestion < questions.length){

            loadQuestion();

        }

        else{

            endQuiz();

        }

    },900);

}

// ==========================================
// BUTTON EVENTS
// ==========================================

trueBtn.addEventListener("click",()=>{

    checkAnswer(true);

});

falseBtn.addEventListener("click",()=>{

    checkAnswer(false);

});

// ==========================================
// END QUIZ
// ==========================================

function endQuiz(){

    quizScreen.classList.add("hidden");

    resultScreen.classList.remove("hidden");

    finalScore.innerHTML =
        `${score} / ${questions.length}`;

}

// ==========================================
// RESTART
// ==========================================

restartBtn.addEventListener("click",()=>{

    currentQuestion = 0;

    score = 0;

    scoreText.innerText = 0;

    progressFill.style.width = "0%";

    resultScreen.classList.add("hidden");

    startScreen.classList.remove("hidden");

});

// ==========================================
// EXTRA ANIMATION
// ==========================================

document.querySelectorAll("button").forEach(button=>{

    button.addEventListener("mousedown",()=>{

        button.style.transform="scale(.95)";

    });

    button.addEventListener("mouseup",()=>{

        button.style.transform="scale(1)";

    });

});