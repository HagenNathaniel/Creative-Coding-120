// Declare the Setup function

function setup() {

// create a canvas 1280 px wide, by 720 px high

    createCanvas( 1280, 720);

// Color the background 'magenta'

    background( 'blue' );
}
// Declare the draw function

function draw()  {

// tell p5 to create a series of shapes, representing the 'monster'

// starting with the body.

  fill( 'green');
  ellipse ( 450, 450, 210, 250);

//left arm, made up of several pieces

  fill ( 'grey');
  ellipse ( 320, 420, 45, 120);

  fill ( 'grey');
  ellipse (300, 465, 45, 45);

  fill ( 'grey');
  ellipse (355, 375, 45, 45);

}
