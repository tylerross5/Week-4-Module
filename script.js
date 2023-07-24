var timeLeft = 75;
var timerID;
var timerEl = document.getElementById("timer");
var startButton = document.getElementById("start-btn");
var nextButton = document.getElementById("next-btn");
var questionContainerEl = document.getElementById("question-container");
var startContainerEl = document.getElementById("start-container");
var questionEl = document.getElementById("question");
var answerButtonsEl = document.getElementById("answer-buttons");
var checkAnswerEl = document.getElementById("check-answer");
var submitButton = document.getElementById("submit-btn");


startButton.addEventListener("click", start);
nextButton.addEventListener("click", () => {
    currentQuestionIndex++
    nextQuestion()
});
function start() {
  timerID = setInterval(time, 1000);
  startContainerEl.classList.add("hide");
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerEl.classList.remove("hide");
  time();
  nextQuestion();
};
function Question(question) {
  questionEl.innerText = question.question
  question.answers.forEach(answer => {
      var button = document.createElement("button")
        button.innerText = answer.text
        button.classList.add("btn")
      if (answer.correct) {
          button.dataset.correct = answer.correct
      }
          button.addEventListener("click", pickAnswer)
          answerButtonsEl.appendChild(button)
  })
};
function pickAnswer(e) {
  var selectedButton = e.target;
 
  var correct = selectedButton.dataset.correct;
  checkAnswerEl.classList.remove("hide")
  
  if (correct) {
      checkAnswerEl.innerHTML = "Correct";
  } else {
      checkAnswerEl.innerHTML = "Wrong";
    
  }

  Array.from(answerButtonsEl.children).forEach(button => {
    feedback(button, button.dataset.correct)
})

if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove("hide")
    checkAnswerEl.classList.remove("hide")
} else {
    startButton.classList.remove("hide")
    
}
};

function feedback(element, correct) { 
if (correct) {
    element.classList.add("correct");
} else {
    element.classList.add("wrong");
}
};
function clearStatusClass(element) {
element.classList.remove("correct");
element.classList.remove("wrong");
};

function nextQuestion() {
    reset();
    Question(shuffledQuestions[currentQuestionIndex]);
};

function reset() {
    
    nextButton.classList.add("hide")
    checkAnswerEl.classList.add("hide")
    while (answerButtonsEl.firstChild) {
        answerButtonsEl.removeChild
            (answerButtonsEl.firstChild)
    }
};
function time() {
  timeLeft--;
  timerEl.textContent = "Time: " + timeLeft;
  if (timeLeft <= 0) {
      
  }
}



const questions=[
  {
    question:'Commonly used data types DO NOT include:',
    answers:[
      
      {text: "strings", correct:false},
      {text: "booleans", correct:false},
      {text: "alert", correct:true},
      {text: "nubers", correct:false}
      
    ]
  },


  {
    question:'The condition in an if/else statement is enclosed within__',
    answers:[

      {text: "quotes", correct:false},
      {text: "curly brackets", correct:false},
      {text: "paretheses", correct:true},
      {text: "square brackets", correct:false}
      
    ]
  },


  {
    question:'Arrays in Javascript can be used to store__',
    answers:[

      {text: "numbers and strings", correct:false},
      {text: "other arrays", correct:false},
      {text: "booleans", correct:false},
      {text: "all o the above", correct:true}
      
    ]
  },


  {
    question:'String values must be enclosed within__ when being assigned to variables.',
    answers:[

      {text: "commas", correct:false},
      {text: "curly brackets", correct:false},
      {text: "quotes", correct:true},
      {text: "parenteses", correct:false}
      
    ]
  },


  {
    question:'A very useful tool used during development and debugging for printing content to the debugger is:',
    answers:[

      {text: "Javascript", correct:false},
      {text: "terminal/bash", correct:false},
      {text: "for loops", correct:false},
      {text: "console log", correct:true}
      
    ]
  }
];