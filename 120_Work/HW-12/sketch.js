var balls = [];

// set up the canvas

  function setup() {
      createCanvas(400, 400);

//set up the for loop

      for (var i = 0; i < 50; i++) {
          balls[i] = new Ball(i*20+20, random(20,280), random(-1, 1), random(-1, 1));
      }
  }


// set up the background color, and the text tooltip on the bottom of the screen
  function draw() {
      background(150, 150, 150);
      fill(50, 255, 100);
      textSize(20);
      text("Collision detection and ball reflection", 0, 280, 400, 300);

// create for loop, to establish ball size.

      for (var i = 0; i < balls.length; i++) {

          balls[i].display();
          balls[i].move();

          if (balls[i].x >= width-10 || balls[i].x <= 10) {
              balls[i].dirX *= -1;
          }

          if (balls[i].y >= height-10 || balls[i].y <= 10) {
              balls[i].dirY *= -1;
          }

          for (var j = 0; j < balls.length; j++) {

            // setup for collision system

              if (j > i && i != j && balls[i].collision(balls[j])) {

                  balls[i].color = color(random(255), random(255), random(255), 50);
                  balls[j].color = color(random(255), random(255), random(255), 50);

                  balls[i].dirX*=-1;
                  balls[i].dirY*=-1;
                  balls[j].dirX*=-1;
                  balls[j].dirY*=-1;
              }
          }
      }
  }

// ball edit and color setup code/functions

  function Ball(x, y,dirX,dirY) {


  this.x = x;
  this.y = y;
  this.radius = 10;
  this.dirX = dirX;
  this.dirY = dirY;

  this.color = color(0);

  this.display = function() {
      strokeWeight(1);
      stroke(255);

      fill(this.color);
      ellipse(this.x, this.y, this.radius * 2, this.radius * 2)
  }

  this.move = function() {
      this.x+=this.dirX;
      this.y+=this.dirY;
  }

  // if/else function.

  this.collision = function(other) {
      d = dist(this.x, this.y, other.x, other.y)
      if (d < this.radius + other.radius) {
          return true;
      } else
          return false;
  }
}
