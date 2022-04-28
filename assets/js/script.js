const start_quiz = document.querySelector("#start-quiz");
const info = document.querySelector('.info');
const questions = document.querySelector('.questions')
const question1 = document.querySelector('#question1');
const question2 = document.querySelector('#question2');
const question3 = document.querySelector("#question3");
const question4 = document.querySelector("#question4");
const question5 = document.querySelector("#question5");
const quiz_end = document.querySelector(".quiz-end");



var timerEl = document.getElementById('timer');

to_q_1.addEventListener( 'click', () => {
    var timeLeft = 60;
    
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

start_quiz.addEventListener("click", () => {
if(info.style.display === 'none') {
    info.style.display = 'flex';
} else {
    info.style.display = 'none';
}
});

const to_q_1 = document.querySelector("#to-q-1");

to_q_1.addEventListener("click", () => {
if(question1.style.display === 'none') {
    question1.style.display = 'flex';
    info.style.display = 'none';
} else {
    question1.style.display = 'none';
}
});

const to_q_2 = document.querySelector("#to-q-2");

to_q_2.addEventListener("click", () => {
if(question2.style.display === 'none') {
    question1.style.display = 'none';
    question2.style.display = 'flex';
} else {
    question2.style.display = 'none';
}
});

const to_q_3 = document.querySelector("#to-q-3");

to_q_3.addEventListener("click", () => {
if(question3.style.display === 'none') {
    question3.style.display = 'flex';
    question2.style.display = 'none';
} else {
    question3.style.display = 'none';
}
});

const to_q_4 = document.querySelector("#to-q-4");

to_q_4.addEventListener("click", () => {
if(question4.style.display === 'none') {
    question4.style.display = 'flex';
    question2.style.display = 'none';
} else {
    question4.style.display = 'none';
}
});

const to_q_5 = document.querySelector("#to-q-5");

to_q_5.addEventListener("click", () => {
if(question5.style.display === 'none') {
    question5.style.display = 'flex';
    question4.style.display = 'none';
} else {
    question5.style.display = 'none';
}
});

const finishquiz = document.querySelector("#finish-quiz");

finishquiz.addEventListener("click", () => {
if(finishquiz.style.display === 'none') {
    finishquiz.style.display = 'flex';
    question5.style.display = 'none';
} else {
    finishquiz.style.display = 'none';
}
});


  