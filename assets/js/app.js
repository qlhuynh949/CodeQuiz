document.addEventListener('click', function (e) {
  if (e.target && e.target.id == 'btnStartQuiz') {
    startQuiz()
  }
});

let quiz = [{
  question: 'JavaScript can be written',
  id: 1,
  choice1: 'a) directly into JS file and included into HTML',
  choice2: 'b) directly on the server page',
  choice3: 'c) directly into HTML pages',
  choice4: 'd) all of the mentioned',
  answer: 'choice1'
},
{
  question: 'A proper scripting language is a',
  id: 2,
  choice1: 'a) High level programming language',
  choice2: 'b) Assembly level programming language',
  choice3: 'c) Machine level programming language',
  choice4: 'd) Low level programming language',
  answer: 'choice1'
},
{
  question: 'JavaScript Code can be called by using',
  id: 3,
  choice1: 'a) RMI',
  choice2: 'b) Triggering Event',
  choice3: 'c) Preprocessor',
  choice4: 'd) Function / Method',
  answer: 'choice4'
},
{
  question: 'Which of the following is not considered as an error in JavaScript ?',
  id: 4,
  choice1: 'a) Syntax error',
  choice2: 'b) Missing of semicolons',
  choice3: 'c) Division by zero',
  choice4: 'd) All of the mentioned',
  answer: 'choice3'
},
{
  question: 'The snippet that has to be used to check if “a” is not equal to “null” is',
  id: 5,
  choice1: 'a) if (a != null)',
  choice2: 'b) if (!a)',
  choice3: 'c) if (a!null)',
  choice4: 'd) if (a !== null)',
  answer: 'choice4'
},
{
  question: 'The statement a === b refers to',
  id: 6,
  choice1: 'a) Both a and b are equal in value, type and reference address',
  choice2: 'b) Both a and b are equal in value',
  choice3: 'c) Both a and b are equal in value and type',
  choice4: 'd) There is no such statement',
  answer: 'choice3'
},
{
  question: 'Assume that we have to convert “false” that is a non - string to string.The command that we use is(without invoking the “new ” operator)',
  id: 7,
  choice1: 'a) false.toString()',
  choice2: 'b) String(false)',
  choice3: 'c) String newvariable =”false”',
  choice4: 'd) Both false.toString() and String(false)',
  answer: 'choice4'
},
{
  question: 'Among the following, which one is a ternary operator ?',
  id: 8,
  choice1: 'a) +',
  choice2: 'b) :',
  choice3: 'c) –',
  choice4: 'd) ?:',
  answer: 'choice4'
},
{
  question: 'The unordered collection of properties, each of which has a name and a value is called',
  id: 9,
  choice1: 'a) String',
  choice2: 'b) Object',
  choice3: 'c) Serialized Object',
  choice4: 'd) All of the mentioned',
  answer: 'choice2'
},
{
  question: 'The object has three object attributes namely',
  id: 10,
  choice1: 'a) Class, parameters, object’s extensible flag',
  choice2: 'b) Prototype, class, objects’ parameters',
  choice3: 'c) Prototype, class, object’s extensible flag',
  choice4: 'd) Native object, Classes and Interfaces and Object’s extensible flag',
  answer: 'choice3'
},
{
  question: 'A linkage of series of prototype objects is called as :',
  id: 11,
  choice1: 'a) prototype stack',
  choice2: 'b) prototype chain',
  choice3: 'c) prototype class',
  choice4: 'd) prototypes',
  answer: 'choice2'
},
{
  question: `Consider the below given syntax

book[datatype] = assignment_value;
In the above syntax, the datatype within the square brackets must be`,
  id: 12,
  choice1: 'a) An integer',
  choice2: 'b) A String',
  choice3: 'c) An object',
  choice4: 'd) None of the mentioned',
  answer: 'choice2'
},
{
  question: 'To determine whether one object is the prototype of(or is part of the prototype chain of) another object, one should use the',
  id: 13,
  choice1: 'a) isPrototypeOf() method',
  choice2: 'b) equals() method',
  choice3: 'c) === operator',
  choice4: 'd) none of the mentioned',
  answer: 'choice1'
},
{
  question: `Consider the following code snippet

function f() { };
The above prototype represents a`,
  id: 14,
  choice1: 'a) Function f',
  choice2: 'b) A custom constructor',
  choice3: 'c) Prototype of a function',
  choice4: 'd) Not valid',
  answer: 'choice2'
},
{
  question: 'What is the purpose of a return statement in a function?',
  id: 15,
  choice1: 'a) Returns the value and continues executing rest of the statements, if any',
  choice2: 'b) Returns the value and stops the program',
  choice3: 'c) Returns the value and stops executing the function',
  choice4: 'd) Stops executing the function and returns the value',
  answer: 'choice4'
},
{
  question: 'What will happen if a return statement does not have an associated expression ?',
  id: 16,
  choice1: 'a) It returns the value 0',
  choice2: 'b) It will throw an exception',
  choice3: 'c) It returns the undefined value',
  choice4: 'd) None of the mentioned',
  answer: 'choice3'
},
{
  question: 'A function with no return value is called',
  id: 17,
  choice1: 'a) Procedures',
  choice2: 'b) Method',
  choice3: 'c) Static function',
  choice4: 'd) Dynamic function',
  answer: 'choice1'
},
{
  question: 'Which is an equivalent code to invoke a function m of class o that expects two arguments x and y ?',
  id: 18,
  choice1: 'a) o(x, y);',
  choice2: 'b) o.m(x) && o.m(y);',
  choice3: 'c) m(x, y);',
  choice4: 'd) o.m(x, y);',
  answer: 'choice4'
},
{
  question: 'Which is an equivalent code for o.m(x,y) ?',
  id: 19,
  choice1: 'a) o.m(x) && o.m(y);',
  choice2: 'b) o[“m”](x, y);',
  choice3: 'c) o(m)[“x”, ”y”];',
  choice4: 'd) o.m(x && y);',
  answer: 'choice2'
},
{
  question: 'The method or operator used to identify the array is',
  id: 20,
  choice1: 'a) isarrayType()',
  choice2: 'b) ==',
  choice3: 'c) ===',
  choice4: 'd) typeof',
  answer: 'choice4'
},
{
  question: `Consider the following code snippet:

var grand_Total = eval(“10 * 10 + 5”);
The output for the above statement would be:`,
  id: 21,
  choice1: 'a) 10 * 10 + 5',
  choice2: 'b) 105 as a string',
  choice3: 'c) 105 as an integer value',
  choice4: 'd) Exception is thrown',
  answer: 'choice4'
}]


let correctAnswers = localStorage.getItem('correctAnswers') || 0 //Tracks correctAnswers
let wrongAnswers = localStorage.getItem('wrongAnswers') || 0 //Tracks number of wrong answers
let countDown = localStorage.getItem('countDown') || 120 //2 minutes is 120 seconds
let index = 0 //This is the question index
let highScore = [] //Array to keep track of high scores
let middleDisplay = document.getElementById('middle')
let timerDisplay = document.getElementById('countDisplay')
let leftDisplay = document.getElementById('leftSide')
let subtractTime = 10 //every wrong answer subtract 10 seconds
let interval

//startup splash page
const createStartup = function () {
  let quizCard = document.createElement('div')
  quizCard.className = "card"

  let quizCardBody = document.createElement('div')
  quizCardBody.className = "card-body"

  let quizCardTitle = document.createElement('h1')
  quizCardTitle.className = "card-title"
  quizCardTitle.id = "quizTitle"
  quizCardTitle.textContent = "Javascript Knowledge Quiz Game"

  let quizTitleHR = document.createElement('hr')
  quizTitleHR.id = "descriptionLine "

  let quizCardText = document.createElement('p')
  quizCardText.className = "card-text"
  quizCardText.textContent = "Click start quiz button to start the 2 minute Javascript Knowlege Quiz Game"

  let quizCardStartButton = document.createElement('button')
  quizCardStartButton.classList.add('btn')
  quizCardStartButton.classList.add('btn-primary')
  quizCardStartButton.textContent = "Start"
  quizCardStartButton.id = "btnStartQuiz"

  let quizCardNewLine = document.createElement('br')

  quizCardBody.append(quizCardTitle)
  quizCardBody.append(quizTitleHR)
  quizCardBody.append(quizCardText)
  quizCardBody.append(quizCardNewLine)
  quizCardBody.append(quizCardStartButton)
  middleDisplay.append(quizCardBody)

}

const showScore = function () {
  middleDisplay.innerHTML = ""
  let finalScore = localStorage.getItem('correctAnswers') 
  let Card = createScoreCard(finalScore)
  middleDisplay.append(Card)

}

const createScoreCard = function(score)
{
  let scoreCard = document.createElement('div')
  scoreCard.className = "card"

  let scoreCardBody = document.createElement('div')
  scoreCardBody.className = "card-body"

  let scoreCardTitle = document.createElement('h1')
  scoreCardTitle.className = "card-title"
  scoreCardTitle.id = "ScoreTitle"
  scoreCardTitle.textContent = "All Done!!!"

  let scoreTitleHR = document.createElement('hr')
  scoreTitleHR.id = "descriptionLine "

  let scoreCardText = document.createElement('p')
  scoreCardText.className = "card-text"
  scoreCardText.textContent = `Your final score is ${score}`

  let scoreCardForm = document.createElement('form')

   
  let scoreInput = document.createElement('input')
  scoreInput.id ="scoreInput"
  scoreInput.name ="scoreName"
  scoreInput.type ="text"

  let scoreSubmitButton = document.createElement('button')
  scoreSubmitButton.classList.add('btn')
  scoreSubmitButton.classList.add('btn-primary')
  scoreSubmitButton.id = 'ScoreSubmit'
  scoreSubmitButton.value = score
  scoreSubmitButton.textContent ="Submit"

  let scoreCardNewLine1 = document.createElement('br')
  let scoreCardNewLine2 = document.createElement('br')
  let scoreCardNewLine3 = document.createElement('br')


  scoreCardBody.append(scoreCardTitle)
  scoreCardBody.append(scoreTitleHR)
  scoreCardBody.append(scoreCardText)
  scoreCardBody.append(scoreCardNewLine1)
  scoreCardBody.append(scoreCardForm)
  scoreCardBody.append(scoreInput)
  scoreCardBody.append(scoreCardNewLine2)
  scoreCardBody.append(scoreSubmitButton)
  scoreCardBody.append(scoreCardNewLine3)

  return scoreCardBody


}

//Creates and renders Question Card
const createQuestionCard = function (questionItem) {
  let questionCard = document.createElement('div')
  questionCard.className = "card"

  let questionCardBody = document.createElement('div')
  questionCardBody.className = "card-body"

  let questionCardTitle = document.createElement('h1')
  questionCardTitle.className = "card-title"
  questionCardTitle.id = questionItem.id
  questionCardTitle.textContent = "Question " + questionItem.id

  let questionTitleHR = document.createElement('hr')
  questionTitleHR.id = "descriptionLine "

  let questionCardText = document.createElement('p')
  questionCardText.className = "card-text"
  questionCardText.textContent = questionItem.question

  let questionCardChoiceButton1 = document.createElement('button')
  questionCardChoiceButton1.classList.add('btn')
  questionCardChoiceButton1.classList.add('btn-secondary')

  questionCardChoiceButton1.textContent = questionItem.choice1
  questionCardChoiceButton1.id = 'Question-' + questionItem.id + '-choice1'
  questionCardChoiceButton1.value = 'choice1'

  let questionCardChoiceButton2 = document.createElement('button')
  questionCardChoiceButton2.classList.add('btn')
  questionCardChoiceButton2.classList.add('btn-secondary')
  questionCardChoiceButton2.textContent = questionItem.choice2
  questionCardChoiceButton2.id = 'Question-' + questionItem.id + '-choice2'
  questionCardChoiceButton2.value = 'choice2'

  let questionCardChoiceButton3 = document.createElement('button')
  questionCardChoiceButton3.classList.add('btn')
  questionCardChoiceButton3.classList.add('btn-secondary')
  questionCardChoiceButton3.textContent = questionItem.choice3
  questionCardChoiceButton3.id = 'Question-' + questionItem.id + '-choice3'
  questionCardChoiceButton3.value = 'choice3'


  let questionCardChoiceButton4 = document.createElement('button')
  questionCardChoiceButton4.classList.add('btn')
  questionCardChoiceButton4.classList.add('btn-secondary')
  questionCardChoiceButton4.textContent = questionItem.choice4
  questionCardChoiceButton4.id = 'Question-' + questionItem.id + '-choice4'
  questionCardChoiceButton4.value = 'choice4'


  let questionCardNewLine1 = document.createElement('br')
  let questionCardNewLine2 = document.createElement('br')
  let questionCardNewLine3 = document.createElement('br')
  let questionCardNewLine4 = document.createElement('br')
  let questionCardNewLine5 = document.createElement('br')
  let answerResult = document.createElement('div')
  answerResult.id = "Result" +questionItem.id

  questionCardBody.append(questionCardTitle)
  questionCardBody.append(questionTitleHR)
  questionCardBody.append(questionCardText)
  questionCardBody.append(questionCardNewLine1)
  questionCardBody.append(questionCardChoiceButton1)
  questionCardBody.append(questionCardNewLine2)
  questionCardBody.append(questionCardChoiceButton2)
  questionCardBody.append(questionCardNewLine3)
  questionCardBody.append(questionCardChoiceButton3)
  questionCardBody.append(questionCardNewLine4)
  questionCardBody.append(questionCardChoiceButton4)
  questionCardBody.append(questionCardNewLine5)
  questionCardBody.append(answerResult)
  return questionCardBody

}

//Starts the timed quiz
const startQuiz = function () {
  startTimeQuiz()

}

const startTimeQuiz = function () {
  correctAnswers=0
  wrongAnswers=0

  startCountDown()
  createQuiz(quiz[index])

}

const createQuiz = function (quiz) {

  middleDisplay.innerHTML = ""
  let Card = createQuestionCard(quiz)
  middleDisplay.append(Card)

}


document.addEventListener('click',function(event)
{

  //Detects when a choice is made
  if (event.target.className == 'btn btn-secondary')
  {
      let clickId = event.target.id
      let clickIdArray = clickId.split('-')
      index = parseInt(clickIdArray[1]) - 1

    if (index < (quiz.length ))
    {
      let quizAnswer =quiz[index]
      let userChoice = event.target.value

      let domID = "Result" + quizAnswer.id
      let resultDisplay=''
      let timeLeft = parseInt(localStorage.getItem('timeLeft')) // time left in seconds

      if (userChoice === quizAnswer.answer)
      {
        resultDisplay = "Correct Answer!"
        correctAnswers++
        localStorage.setItem('correctAnswers', correctAnswers)
      }
      else
      {
        resultDisplay = "Incorrect Answer!"
        wrongAnswers++

        timeLeft = timeLeft - subtractTime //Deduct 10 seconds for every wrong answer
        localStorage.setItem('timeLeft', timeLeft) // time left in seconds
        localStorage.setItem('wrongAnswers', wrongAnswers)
        clearInterval(interval)
        setTimer(timeLeft, timerDisplay)
      }

      document.getElementById(domID).innerHTML = resultDisplay
      index++
      if (index < quiz.length)
      {
        setTimeout(function () { 
          createQuiz(quiz[index])
        }, 2000)
      }
    }
    else
    {
      showScore()
    }
  }

}
)

const startCountDown = function () {
  
  setTimer(countDown, timerDisplay)
}


const setTimer = function (duration, display) {
  let timer = duration, minutes, seconds;
    interval = setInterval(function () {
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);

   
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    display.textContent = "Time: " + minutes + ":" + seconds;
   
    if (timer === 0) {
      clearInterval(interval)
      showScore()
    }

    if (--timer < 0) {
         timer = duration;
    }
    else
    {
        localStorage.setItem('timeLeft', timer) // time left in seconds
    }
  }, 1000);
}



//Execute
createStartup()