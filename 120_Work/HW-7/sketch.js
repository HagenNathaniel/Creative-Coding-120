
// setup ellipse size and angles initally
let ball = {};
ball.width = 39;
ball.x = 10;
ball.y = 10;
ball.delta_x = 4;
ball.delta_y = 6;
ball.scale_x = 1;
ball.scale_y = 1;


//declare global variables


function setup() {
    createCanvas(windowWidth, 720);

  }
function draw() {
background('silver');

// ball is initialized, with angle of attack at 'entry' of canvas
    ball.x += ball.delta_x * ball.scale_x;
    ball.y += ball.delta_y * ball.scale_y;


    if (ball.x >= width || ball.x <= 0) {
        ball.delta_x = -1 * ball.delta_x;
    }
    if (ball.y >= height || ball.y <= 0) {
        ball.delta_y = -1 * ball.delta_y;
    }
    // setting the fill color of the ball

    ellipse(ball.x, ball.y, ball.width, ball.width);

}

function mousePressed() {
// if mouse is pressed, turn ellipse cyan, and change speed and angle
    fill('cyan');

//changed the speed of both x and y angles
    ball.scale_x = map(mouseX, 5, width, 2.7, 10);
    ball.scale_y = map(mouseY, 6, height, 1.0, 10);
// if I had more time, I had the idea to add randomization to the fill
// of the ellipse, or a reset. perhaps both!


// one thing I lost, but can't figure out why, is the 'tail' as the ball
// travels along, it makes VERY interesting designs, and would have
// been cool to see with my orginally planned 'random coloration' idea.

// random function ('random');
// reset function ('reset');

}
