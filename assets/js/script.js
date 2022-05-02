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

const wrong = document.querySelectorAll(".wrong")
const correct = document.querySelectorAll(".correct")

var timerEl = document.getElementById('timer');
var timeLeft = 60;
var i = 15

function setTimerText() {
    timerEl.textContent = timeLeft;
}

wrong.forEach(function(wrong) {
    
    wrong.addEventListener('click', function() {
      wrong.style.backgroundColor = 'red';
      if (timeLeft > 0) {
        timeLeft - i;
        setTimerText();
      }
    console.log("Wrong")
    })
  })

correct.forEach(function(correct) {

    correct.addEventListener('click', function() {
      correct.style.backgroundColor = 'green';
    console.log("Correct")
    })
  })

start_quiz.addEventListener("click", () => {
if(info.style.display === 'none') {
    info.style.display = 'flex';
    start_quiz.style.display = 'none';
} else {
    info.style.display = 'none';
}
});

to_q_1.addEventListener( 'click', () => {
    
    var timeInterval = setInterval(function () {
      if (timeLeft > 1) {
        timerEl.textContent = timeLeft;
        timeLeft--;
      } else {
        timerEl.textContent = '';
        clearInterval(timeInterval);
      }
    }, 1000);
}); 

to_q_1.addEventListener("click", () => {
if(question1.style.display === 'none') {
    question1.style.display = 'flex';
    info.style.display = 'none';
} else {
    question1.style.display = 'none';
}
});

to_q_2.addEventListener("click", () => {
if(question2.style.display === 'none') {
    question2.style.display = 'flex';
    question1.style.display = 'none';
} else {
    question2.style.display = 'none';
}
});

to_q_3.addEventListener("click", () => {
if(question3.style.display === 'none') {
    question3.style.display = 'flex';
    question2.style.display = 'none';
} else {
    question3.style.display = 'none';
}
});

to_q_4.addEventListener("click", () => {
if(question4.style.display === 'none') {
    question4.style.display = 'flex';
    question3.style.display = 'none';
} else {
    question4.style.display = 'none';
}
});

to_q_5.addEventListener("click", () => {
if(question5.style.display === 'none') {
    question5.style.display = 'flex';
    question4.style.display = 'none';
} else {
    question5.style.display = 'none';
}
});

finishquiz.addEventListener("click", () => {
if(quiz_end.style.display === 'none') {
    quiz_end.style.display = 'flex';
    question5.style.display = 'none';
} else {
    quiz_end.style.display = 'none';
}
});



  