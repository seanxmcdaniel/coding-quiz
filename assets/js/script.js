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
  
    // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
    var timeInterval = setInterval(function () {
      // As long as the `timeLeft` is greater than 1
      if (timeLeft > 1) {
        // Set the `textContent` of `timerEl` to show the remaining seconds
        timerEl.textContent = timeLeft;
        // Decrement `timeLeft` by 1
        timeLeft--;
      } else if (timeLeft === 1) {
        // When `timeLeft` is equal to 1, rename to 'second' instead of 'seconds'
        timerEl.textContent = timeLeft;
        timeLeft--;
      } else {
        // Once `timeLeft` gets to 0, set `timerEl` to an empty string
        timerEl.textContent = '';
        // Use `clearInterval()` to stop the timer
        clearInterval(timeInterval);
      }
    }, 1000);
  }

  countdown();
  