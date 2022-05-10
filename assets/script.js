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

function getQuestion(questions) {
    questionEl.innerText = questions.question
}
 









var questions = [
     {
         question: 'What is a string?',
         answers: [
             { text: 'a data value that is made up of ordered sequences of characters', correct: true },
             { text: 'a piece of thread', correct: false },
             { text: 'String on a musical instrument', correct: false },
             { text: 'a set of instructions that are followed to solve a problem', cottect: false },
         ]
    }, {
        question: 'What is an Algorithm?',
        answers: [
            { text: 'a sequence of characters', correct: false },
            { text: 'a chunk of repeating code', correct: false },
            { text: 'a set of instructions that are followed to solve a problem', correct: true },
            { text: 'an organized collection of instructions', correct: false },
        ]
    }, {
        question: 'How old am I',
        answers: [
            { text: '21', correct: true },
            { text: '12', correct: false },
            { text: '20', correct: false },
            { text: '19', correct: false },
        ]
    }, {
        question: 'How old am I',
        answers: [
            { text: '21', correct: true },
            { text: '12', correct: false },
            { text: '20', correct: false },
            { text: '19', correct: false },
        ]
    } 
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