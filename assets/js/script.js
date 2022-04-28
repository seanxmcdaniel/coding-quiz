const start_quiz = document.querySelector("#start-quiz");
const info = document.querySelector(".info");
const question1 = document.querySelector(".questions");
const quiz_end = document.querySelector(".quiz-end");
const cont_btn = document.querySelector(".cont-btn");

start_quiz.addEventListener('click', () => {
if(info.style.display === 'none') {
    info.style.display = 'flex';
} else {
    info.style.display = 'none';
}
});

var timerEl = document.getElementById('timer');

function countdown() {
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
  }

  countdown();
  