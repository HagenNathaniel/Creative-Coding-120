Nathaniel Hagen, Section 50.

[Live Sketch Link](Your Live Link)

## Description of What the Original Code is Doing

<!--
--This is a Comment Block--

The first section, with the "function setup, createcanvas" portions are setting up color of background, and the size of the canvas.

The next several lines, with "ball.x, etc" in them, are stating the balls' limit in regards to how far it can travel on/in the canvas.
using specific variables, you're able to alter the direction of travel of the ball. The loop in the function reads this, and changes the direction when the given number is reached in the code string. Not any less important, the top line of code allows the ball to move.


    ball.x += ball.delta_x * ball.scale_x;
    ball.y += ball.delta_y * ball.scale_y;


    if (ball.x >= width || ball.x <= 0) {
        ball.delta_x = -1 * ball.delta_x;
    }
    if (ball.y >= height || ball.y <= 0) {
        ball.delta_y = -1 * ball.delta_y;
        
        these lines 
-->


## How did you alter the sketch?

<!--
Please describe how and why you changed the sketch?
-->
