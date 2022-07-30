//DONEok so we will need var that are set to the id and classes of the HTML
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
//DONEwe will need a landing page with a start button
//DONEwhen the start button is pressed the start button will be disabled or disapear
//DONEand start the quiz
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

 
//DONEwhen the start button is pressed the TIMER will start
//DONEthe timer will need to be 2 min long
//i will need an array of 
//IF the user gets a queston wrong 
//THEN the timer will decrease by 30 sec
function clear () {
    progress.textContent = ''
    spanChoiceA.textContent = ''
    spanChoiceB.textContent = ''
    spanChoiceC.textContent = ''
    spanChoiceD.textContent = ''
    spanChoiceB.style.color = ''
    
}
//question 1
function question1() {
    
    question.textContent = 'What does API stand for?'
    //progress
    progress.textContent = 'Question 1 of 3'

    spanChoiceA.textContent = 'Apples, Pears, and Instagram'
    spanChoiceB.textContent = 'Application Programing Innerface'
    spanChoiceC.textContent = 'Application Packing Intellegence'
    spanChoiceD.textContent = 'Artifical Progaming Intellagence'

    btn1.addEventListener('click', e=>{nopeQ1(false)})
    btn2.addEventListener('click', e=>{correctQ1(true)})
    btn3.addEventListener('click', e=>{nopeQ1(false)})
    btn4.addEventListener('click', e=>{nopeQ1(false)})

    //correct function question 1
function correctQ1() {

    result.style.color = 'green'
    result.textContent = 'Correct!';
    clear()
    question2();
    localStorage.setItem('value1' , score++, score++)
    return;
    
}
//function if the user pickes the wrong answer question 1
function nopeQ1() { 
    result.style.color = 'rgb(160, 51, 51)'
    result.textContent = ' Wrong -20s to the clock. Answer was B. Application Programing Innerface';
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
    spanChoiceA.textContent = 'something'
    spanChoiceB.textContent = 'something'
    spanChoiceC.textContent = 'something'
    spanChoiceD.textContent = 'something'
   
   
    // option
    btn1.addEventListener('click', e=>{nope2(false)})
    btn2.addEventListener('click', e=>{nope2(false)})
    btn3.addEventListener('click', e=>{nope2(false)})
    btn4.addEventListener('click', e=>{correct2(true)})
    //function if the user pickes a correct answer question 2
    function correct2() {
        result.style.color = 'green'
        result.textContent = 'Correct!';
      secondsLeft = secondsLeft+20
      localStorage.setItem('value2' , score++)
      clear()
        question3();
        return;
        
    }
    //function if the user pickes a incorrect answer question 2
    function nope2() { 
        result.style.color = 'rgb(160, 51, 51)'
        result.textContent = ' Wrong -20s to the clock. Answer was D';
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
    spanChoiceA.textContent = 'something'
    spanChoiceB.textContent = 'something'
    spanChoiceC.textContent = 'something'
    spanChoiceD.textContent = 'something'
   
   
    // option
    btn1.addEventListener('click', e=>{correct3()})
    btn2.addEventListener('click', e=>{nope3()})
    btn3.addEventListener('click', e=>{nope3()})
    btn4.addEventListener('click', e=>{nope3()})
    //function if the user pickes a correct answer question 3
    function correct3() {
        result.style.color = 'green'
        result.textContent = 'Correct!';
        secondsLeft = secondsLeft+20
        localStorage.setItem('value3' , score++)

        clear()
        secondsLeft = 0
        console.log(score)

        return true;
    }
    //function if the user pickes a incorrect answer question 3
    function nope3() { 
        result.style.color = 'rgb(160, 51, 51)'
        result.textContent = ' Wrong -20s to the clock. Answer was A.';
        clear()
        secondsLeft = 0
        console.log(score)

        return false;
        }  
    return
  }

 


question1()





//next to the timer there will be a queston i will need the question to remove itself and the display the next question
//there will be a frationated progress counter that will display the users progress exp 1 of 3

//when the user is finished the user will be given a score 
//the user can then SAVE the score and his or her name in local storage
//if one of the 2 values are empty then alert them that the user must fill the name 
//then the user will be given a requiz button that will restart the quiz 
