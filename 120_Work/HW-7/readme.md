Nathaniel Hagen, Section 50.

[https://hagennathaniel.github.io/Creative-Coding-120/120_Work/HW-7/]

## Description of What the Original Code is Doing

The first section, with the "function setup, createcanvas" portions are setting up color of background, and the size of the canvas.

The next several lines, with "ball.x, etc" in them, are stating the balls' limit in regards to how far it can travel on/in the canvas.
using specific variables, you're able to alter the direction of travel of the ball. The loop in the function reads this,
and changes the direction when the given number is reached in the code string. Not any less important,
the top line of code allows the ball to move.

------------------------------------------------------------------------

    ball.x += ball.delta_x * ball.scale_x;
    ball.y += ball.delta_y * ball.scale_y;


    if (ball.x >= width || ball.x <= 0) {
        ball.delta_x = -1 * ball.delta_x;
    }
    if (ball.y >= height || ball.y <= 0) {
        ball.delta_y = -1 * ball.delta_y;

        these lines  provide angle of attack for the creation of the ball,
        along with it's speed and starting point.

-----------------------------------------------------------------

        fill(255);
        ellipse(ball.x, ball.y, ball.width, ball.width);


 these lines of code draw the ball, with a color code.

 and finally...

 ----------------------------------------------------------------

 function mousePressed() {
     ball.scale_x = map(mouseX, 0, width, 0.5, 10);
     ball.scale_y = map(mouseY, 0, height, 0.5, 10);

  These lines of code act as the 'behavior change' for the ball when the mouse
  button is pressed, in this case, it changes direction and speed based on the
  possition of the mouse.

--------------------------------------------------------------

## How did you alter the sketch?

Honestly, not as much as I had originally planned. But...I WAS able to:

At 'mousePressed()' I was able to change the color to cyan, but I originally
wanted to make the ellipse randomize each time the button was pressed, OR on its
own, but could not get it functioning.

I also changed the color of the background, from white, to silver. But for
whatever reason, I lost the 'tails' on the ellipse, which would have made my
above idea cooler!

Changed the size, as well as few other variables in the first few lines of code.
which resulted in a change in starting angle for the ball, and its size.
