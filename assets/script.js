const startButton = document.getElementById('start-btn')
const questionContainerEl = document.getElementById('question-container')
const timeScoreContainerEl = document.getElementById('time-score')
const btnEl = document.getElementById('btn')
const questionEl = document.getElementById('question')
const answerButtonsEl = document.getElementById('answer-buttons')



startButton.addEventListener('click', startQuiz);

function startQuiz() {
startButton.classList.add('hide');
questionContainerEl.classList.remove('hide')
timeScoreContainerEl.classList.remove('hide')
updateCountDown();
getQuestion();
};

function getQuestion() {
    questionEl.innerText = question[0];
};
 
var questions = [
    {
        question: 'What is a string?',
        choices: ["a data value that is made up of ordered sequences of characters",
        "a piece of thread", "String on a musical instrument", "a set of instructions that are followed to solve a problem"],
        answer: 0
    },
    {
        question: "What is an Algorithm?",
        choices: ["a sequence of characters", "a chunk of repeating code", "a set of instructions that are followed to solve a problem",
        "an organized collection of instructions"],
        answer: 3
    },
    {
        question: "What does API stand for?",
        choices: ["American Programming Industry", "Application Programming Interface", "Applied Practice Initiative", "American Pioneering Inc."],
        answer: 1
    },
    {
        question: "What is a boolean?",
        choices: ["an unexpecter error or defect", "a sequence of characters", "a type of pasta", "an expressions used for creating true or false statements"],
        answer: 3
    },
]

 
const startingMinutes = 1.5;
let time = startingMinutes * 60;

const countdownEl = document.getElementById('countdown')
setInterval(updateCountDown,1000);

 function updateCountDown () {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;

    seconds = seconds < 10 ? '0' + seconds : seconds;

    countdownEl.innerHTML = `${minutes}: ${seconds}`;
    time --;
    if (minutes == 0 && seconds == 0) {return};
    
 }