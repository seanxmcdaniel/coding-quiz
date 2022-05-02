# Coding Quiz

For this assignment, I created a Coding Quiz made up of five different questions related to coding. Upon page load, you'll see
a button stating "Start Quiz", and a timer in the top right corner. Clicking that button will prompt a box showing the 
rules for the quiz. You have 60 seconds to complete the quiz, and each incorrect answer deducts 15 seconds from the clock. If 
you run out of time, a "try again" button will pop up and you can go back to the beginnning and try again. At the end of the quiz,
your score will be shown. 

## "Wrong" and "Correct" answers

![Screenshot (25)](https://user-images.githubusercontent.com/102200863/166179011-d8a4c1c3-8a0c-49d2-b606-0a64ccab806d.png)

The screenshot above shows the functions for correct and incorrect answers. For wrong answers, on click the background color of the 
answer will become red. The time left will then be subtracted by 15 (seconds) and the console will log "wrong". For correct
answers, the background color of the answer will turn green, and the score will increase by one point. The console will also log the 
user's current score. 

## Begin the Timer

![Screenshot (26)](https://user-images.githubusercontent.com/102200863/166179189-2af94720-1fb1-4948-8b84-750202ab05ec.png)

This function shows the start of the quiz and the timer. to-q-1 means to question 1, so upon clicking to go to question one the 
timer will begin.

## Navigating the quiz

![Screenshot (27)](https://user-images.githubusercontent.com/102200863/166179308-4013e100-bf01-45de-be3e-df780c3eee1d.png)

The functions here show event listeners for each "Next Question" button on the quiz, as well as the "Finish Quiz" button. Each button
will make the next question visible while making the previous question hidden. Upon clicking "Finish Quiz", the page wll input your 
score in the next box. The two event listeners at the bottom are for the Try Again prompt and the Quit button. Both of these buttons 
will bring you back to the start of the quiz. 

### Link to Deployed Application
https://seanxmcdaniel.github.io/coding-quiz/
