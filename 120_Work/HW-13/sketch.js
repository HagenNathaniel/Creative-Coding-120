/*jshint esversion: 6 */

// Declare the Setup function

//setting default gamescreen as 0;

let quizScreen = 0;

// create variable for button object.

var button1;
var button2;

let questionNum = 0;
let numOfQuestions = 1;
let answerBoxes;

let userAns = [];


function setup() {

  // create a canvas 1280 px wide, by 720 px high, with a red background

  createCanvas (1280, 720);

  background('red');

  button1 = createButton('Game Start');
  button1.position (width/2, height/2);
  button1.mousePressed(gameStart);
  button1.onclick = function(gameScreen){
  };

  //button2 = createButton('Quit Game');
  //button2.position (540, 600);
  //button2.mousePressed(gameEndScreen);
  //button2.onclick = function(gameEndScreen){myScript};
}
function draw(){

  // displays the contents of the current selected screen

  if (quizScreen == 0) {

    initScreen();

  } else if (quizScreen == 1){

    gameScreen();

  } else if (quizScreen== 2){

    gameEndScreen();

  }
}

// Contents of game screeens

function initScreen() {
  // code for "Game Start" screen

  background('lightblue');
  textAlign(CENTER);
  text("Click to Start Game", width/2, height/2);

}

function gameScreen(){
  background('purple');

  // display question text here


  // display answer text and boxes here
  for (let i = 0; i < answerBoxes.length; i++) {
    answerBoxes[i].display();
  }
}

function gameEndScreen(){

  // code for game end screen, user requested.
}

function mousePressed(){

  if (gameScreen==0){
    gameStart();
  }

  for (let i = 0; i < answerBoxes.length; i++) {
    answerBoxes[i].mousePress();
  }
}

//setting necessary paraeters to start gameEndScreen

function gameStart(){

  quizScreen=1;
  setupQuestion();

  // user inputs


}

function setupQuestion(){
  answerBoxes = [];

  for (var i = 0; i < questions[questionNum].answers.length; i++) {

    answerBoxes[i] = new Answers(
      i,
      questions[questionNum].answers[i].text,
      questions[questionNum].answers[i].isCorrect
    );
  }

}


function questionAnswered(isCorrect){
  userAns[questionNum] = isCorrect;
  questionNum++;
  setupQuestion();
  // move on to next question and answers
}
