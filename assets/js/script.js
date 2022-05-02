const start_quiz = document.querySelector("#start-quiz");
const info = document.querySelector('.info');
const questions = document.querySelector('.questions')
const question1 = document.querySelector('#question1');
const question2 = document.querySelector('#question2');
const question3 = document.querySelector("#question3");
const question4 = document.querySelector("#question4");
const question5 = document.querySelector("#question5");
const quiz_end = document.querySelector(".quiz-end");
const finishquiz = document.querySelector("#finish-quiz");
const to_q_5 = document.querySelector("#to-q-5");
const to_q_4 = document.querySelector("#to-q-4");
const to_q_3 = document.querySelector("#to-q-3");
const to_q_2 = document.querySelector("#to-q-2");
const to_q_1 = document.querySelector("#to-q-1");
const try_again = document.querySelector(".try-again")

const quit = document.querySelectorAll(".quit")
const wrong = document.querySelectorAll(".wrong")
const correct = document.querySelectorAll(".correct")

var scoreEl = document.getElementById('score');
var timerEl = document.getElementById('timer');
var timeLeft = 60;
var i = 15
var score = 0

//Function to set timer text depending on answer clicked and to set the score based on correct answers
//clicked by the end of the quiz. 
function setScoreText() {
    scoreEl.textContent = score;
}
function setTimerText() {
    timerEl.textContent = timeLeft;
}

// Functions to make the incorrect answers red and the correct answers green
// and also to subtract 15 seconds from timer on each wrong answer. 
wrong.forEach(function(wrong) {
    wrong.addEventListener('click', function() {
      wrong.style.backgroundColor = 'red';
      if (timeLeft > 0) {
        timeLeft -= i;
        setTimerText();
      }
    console.log("Wrong")
    })
  })

correct.forEach(function(correct) {
    correct.addEventListener('click', function() {
      correct.style.backgroundColor = 'green';
      score++;
    console.log(score)
    })
  })

start_quiz.addEventListener("click", () => {
    info.style.display = 'flex';
    start_quiz.style.display = 'none';
});
to_q_1.addEventListener( 'click', () => {
    var timeInterval = setInterval(function () {
      if (timeLeft > 1) {
        timerEl.textContent = timeLeft;
        timeLeft--;
      } else if (timeLeft <= 0) {
        try_again.style.display = "block"
      } else {
        timerEl.textContent = '';
        clearInterval(timeInterval);
      }
    }, 1000);
}); 


//Event listeners for navigating the quiz
to_q_1.addEventListener("click", () => {
    question1.style.display = 'flex';
    info.style.display = 'none';
});
to_q_2.addEventListener("click", () => {
    question2.style.display = 'flex';
    question1.style.display = 'none';
});
to_q_3.addEventListener("click", () => {
    question3.style.display = 'flex';
    question2.style.display = 'none';
});
to_q_4.addEventListener("click", () => {
    question4.style.display = 'flex';
    question3.style.display = 'none';
});
to_q_5.addEventListener("click", () => {
    question5.style.display = 'flex';
    question4.style.display = 'none';
});
finishquiz.addEventListener("click", () => {
    quiz_end.style.display = 'flex';
    question5.style.display = 'none';
    setScoreText()
});

// Function to reload page on "try again" and on "quit"
function reload() {
    reload = location.reload();
}
try_again.addEventListener("click", reload, false);

quit.forEach(function(quit) {
    quit.addEventListener('click', reload, false)
});


  