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
let questText;


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
  textSize(46);
  textAlign(CENTER);
  fill('red');
  text("Click to Start Game", width/2, height*.15);

}

function gameScreen(){
  background('purple');
  textSize(46);
  textAlign(CENTER, CENTER);
  fill('red');

  text('Game On!', width/2, height* .08);

  // display question text here
  questText.display();


  // display answer text and boxes here
  for (let i = 0; i < answerBoxes.length; i++) {
    answerBoxes[i].display();
  }
  button1.remove();
}

function gameEndScreen(){
  background('purple');
  textSize(46);
  textAlign(CENTER, CENTER);
  fill('red');
  var correct = 0;

  //I have no idea why this isn't working
  for(let i=0; i< userAns.length; i++){



    if(userAns[i] == true){
      correct++;

    }
  };




  text('Game Over', width/2, height* .10);
  text('Your Score Is:', width/2 - 130, height* .25)
  // text(userAns, width/2, height* .20);
  text(correct*100+' Points', width/2 + 140, height* .25);
  // text('/', width/2, height* .30);
  // text(userAns.length, width/2, height* .35);
  button1 = createButton('Game Start');
  button1.position (width/2, height/2);
  button1.mousePressed(gameStart);
  button1.onclick = function(gameScreen){
  };


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

function gameStart() {
  questionNum = 0;
  quizScreen=1;
  setupQuestion();

  // user inputs


}

function setupQuestion() {

  answerBoxes = [];
  for (var i = 0; i < questions[questionNum].answers.length; i++) {

    questText = new QuestionDisplay(

      questions[questionNum].question

    )

    answerBoxes[i] = new Answers(
      i,
      questions[questionNum].answers[i].text,
      questions[questionNum].answers[i].isCorrect
    );
  }

}


function questionAnswered(isCorrect) {
  userAns[questionNum] = isCorrect;


  // move on to next question and answers
  questionNum++;
  setupQuestion();

  if (questionNum == questions.length-1) {
    quizScreen++;
  }

}
