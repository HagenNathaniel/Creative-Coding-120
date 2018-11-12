// establish array values in program

let bubbles = [];

function setup() {
createCanvas (1280, 720);

}

// use mouseDragged function to create bubbles on canvas. motion will be added later.


function mouseDragged(){
let r = random (10, 65);
let b = new Bubble(mouseX, mouseY, r);
bubbles.push(b);

}

// establish background color, and movement of bubbles on canvas.

function draw() {
  background('lightblue');

  for (let bubble of bubbles) {

    bubble.move();
    bubble.show();
  }

  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].move();
    bubbles[i].show();

  }
}
// establish class and constructor.

class Bubble {
  constructor(x, y, r){
    this.x = x;
    this.y = y;
    this.r = r;

  }

  // establishing movement characgteristics.

  move() {
  this.x = this.x + random(-5, 5);
  this.y = this.y + random(-5, 5);

}
 // creating instructions to have objects show on screen.
show() {
   stroke(255);
   strokeWeight(4);
   noFill();
   ellipse(this.x, this.y, this.r * 2);
 }
}
