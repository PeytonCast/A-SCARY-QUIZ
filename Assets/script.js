
var spanChoiceA = document.getElementById("choice1")
var spanChoiceB = document.getElementById("choice2")
var spanChoiceC = document.getElementById("choice3")
var spanChoiceD = document.getElementById("choice4")
var classBtn = document.querySelector(".btn")
var countdown = document.getElementById('countdown')
var progress = document.getElementById('progress')
var question = document.getElementById('question')
var result = document.getElementById('result')
var storeName = document.getElementById('storeName')
var score = (0)
//sets the timer
var secondsLeft = 120
function setTime() {
    
    var timerInterval = setInterval(function() {
      secondsLeft--;
      countdown.textContent = secondsLeft ;
  
      if(secondsLeft < 0) {
        clearInterval(timerInterval)
        open('index3.html')
    

    
      } }, 1000);}

  setTime()

 
//clears the way for the next question
function clear () {
   progress.textContent = ''
   spanChoiceA.textContent = ''
   spanChoiceB.textContent = ''
   spanChoiceC.textContent = ''
   spanChoiceD.textContent = ''
   spanChoiceB.style.color = ''
    
}
//if this is a rerun we dont want the past in the present
localStorage.removeItem('value')
//question 1
function question1() {
    
    question.textContent = 'What does API stand for?'
    //progress
    progress.textContent = 'Question 1 of 3'

    spanChoiceA.textContent = 'Apples, Pears, and Instagram'
    spanChoiceB.textContent = 'Application Programing Innerface'
    spanChoiceC.textContent = 'Application Packing Intellegence'
    spanChoiceD.textContent = 'Artifical Progaming Intellagence'

    btn1.addEventListener('click', nopeQ1)
    btn2.addEventListener('click', correctQ1)
    btn3.addEventListener('click', nopeQ1)
    btn4.addEventListener('click', nopeQ1)

    //correct function question 1
function correctQ1() {
    setTimeout(() => {  result.textContent = ''; }, 3000);
    score = 1
    result.style.color = 'green'
    result.textContent = 'Correct!';
    localStorage.setItem('value', score)
    clear()
    question2();
    return;
    
}
//function if the user pickes the wrong answer question 1
function nopeQ1() {
     
    setTimeout(() => {  result.textContent = ''; }, 3000);
    result.style.color = 'rgb(160, 51, 51)'
    result.textContent = ' Wrong';
    secondsLeft = secondsLeft -20
    clear()
    question2();
   
    return;
    
    }
    return
  }

//the second question question 2

  function question2() {
    
    question.textContent = 'What is local storage?'
    //progress
    progress.textContent = 'Question 2 of 3'
    spanChoiceA.textContent = 'a type of box'
    spanChoiceB.textContent = 'Your atic'
    spanChoiceC.textContent = 'A storage company'
    spanChoiceD.textContent = 'Storage on the browser'
   
   
    // option
    btn1.addEventListener('click', nope2)
    btn2.addEventListener('click', nope2)
    btn3.addEventListener('click', nope2)
    btn4.addEventListener('click', correct2)
    //function if the user pickes a correct answer question 2
    function correct2() {
    setTimeout(() => {  result.textContent = ''; }, 3000);
    if (score == 0){ score = 1 }else
    if (score == 1) { score = 2}
        result.style.color = 'green'
      result.textContent = 'Correct!';
      secondsLeft = secondsLeft+20
      localStorage.setItem('value', score)
      clear()
        question3();
        return;
        
    }
    //function if the user pickes a incorrect answer question 2
    function nope2() { 
        setTimeout(() => {  result.textContent = ''; }, 3000);
        result.style.color = 'rgb(160, 51, 51)'
        result.textContent = ' Wrong';
        clear()
        question3();
        return;
        
        
        }
 
    return
  }

//the second question question 

function question3() {
    
    question.textContent = 'What does DOM stand for?'
    //progress
    progress.textContent = 'Question 3 of 3'
    spanChoiceA.textContent = 'Document Object Model'
    spanChoiceB.textContent = 'Document Object Maker'
    spanChoiceC.textContent = 'Dollop Of Mystery'
    spanChoiceD.textContent = 'Dab Over Mistakes'
   
   
    // option
    btn1.addEventListener('click', correct3)
    btn2.addEventListener('click', nope3)
    btn3.addEventListener('click', nope3)
    btn4.addEventListener('click', nope3)
    //function if the user pickes a correct answer question 3
    function correct3() {
        if (score == 0) {score = 1 } else
        if (score == 1) {score = 2  }else 
        if (score == 2) {score = 3}
        setTimeout(() => {  result.textContent = ''; }, 3000);
        result.style.color = 'green'
        result.textContent = 'Correct!';
        secondsLeft = secondsLeft+20
        localStorage.setItem('value', score)

        clear()
        secondsLeft = 0
        console.log(score)

        return true;
    }
    //function if the user pickes a incorrect answer question 3
    function nope3() { 
        setTimeout(() => {  result.textContent = ''; }, 3000);
        if (score == 0) {
        localStorage.setItem('value', 0)}
        result.style.color = 'rgb(160, 51, 51)'
        result.textContent = ' Wrong';
        clear()
        secondsLeft = 0

        return false;
        }  
    return
  }

 


question1()

