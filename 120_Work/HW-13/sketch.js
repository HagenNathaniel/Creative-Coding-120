/*jshint esversion: 6 */

// Declare the Setup function

//setting default gamescreen as 0;

let quizScreen = 0;

// create variable for button object.

var button1;
var button2;
function setup() {

// create a canvas 1280 px wide, by 720 px high, with a red background

createCanvas (1280, 720);

background('red');

button1 = createButton('Game Start');
button1.position (height/2, width/2);
button1.mousePressed(gameStart);

button2 = createButton('Quit Game');
button2.position (height/2 - 15, width/2);
button2.mousePressed(gameEndScreen);
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

background('blue');
textAlign(CENTER);
text("Click to Start Game", height/2, width/2);

}

function gameScreen(){

  //code for game screen/s
}

function gameEndScreen(){

  // code for game end screen, user requested.
}

function mousePressed(){

  if (gameScreen==0){
  gameStart();
}
}

//setting necessary paraeters to start gameEndScreen

function gameStart(){

  quizScreen=1;{
}


// user inputs


}
