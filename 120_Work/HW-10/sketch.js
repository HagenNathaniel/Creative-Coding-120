//some code courtesy of p5.js examples website, modifications have been made
//to change the output to look more to my liking.

var coswave = [];

function setup() {

// function for creating screen canvas

  createCanvas(900, 900);
  for (var i = 0; i < width; i++) {
    var amount = map(i, 0, width, 0, PI);
    coswave[i] = abs(cos(amount));
  }

  // Establishing background color and noloop function.
  background('green');
  noLoop();
}

// Creating first set of coswave lines, using an array

function draw() {
  var y1 = 0;
  var y2 = height/3;
  for (var i = 0; i < width; i+=3) {
    stroke(coswave[i]*255);
    line(i, y1, i, y2);
  }

// creating second set of coswave lines, with an array, as above, only in another location.

  y1 = y2;
  y2 = y1 + y1;
  for (var i = 0; i < width; i+=3) {
    stroke(coswave[i]*255 / 4);
    line(i, y1, i, y2);
  }

// creating 3rd set of coswave lines, with another array.

  y1 = y2;
  y2 = height;
  for (var i = 0; i < width; i+=3) {
    stroke(255 - coswave[i]*255);
    line(i, y1, i, y2);
  }



  let now = new Date();
  alert( now ); // shows current date/time in popup window

//  getFullYear();
}
