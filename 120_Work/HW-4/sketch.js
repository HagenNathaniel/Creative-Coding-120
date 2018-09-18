// Declare the Setup function

function setup() {

// create a canvas 1280 px wide, by 720 px high

  createCanvas( 1280, 720);


//color background 'grey'

background( 'blue');
}
// create initial 'body' of monster. using an elongated oval, or ellipse
function draw(){

  fill( 'grey');
  ellipse( 450, 450, 210, 250);


  // creates an ellipse, that's taller, than it is wide, for left arm.

    fill( 'brown');
    ellipse( 325, 430, 30, 150);

// create a series of ellipses for right arm.

   fill( 'brown');
   ellipse( 576, 430, 30, 150);

  // create ellipse for left leg.

   fill( 'brown');
   ellipse( 399, 605, 30, 150);

   //create ellipse for right leg.

   fill( 'brown');
   ellipse( 496, 605, 30, 150);

//Create circle for head. (almost forgot!!)

  fill( 'Red');
  ellipse( 448, 320, 80, 95 );

  //create circles for eyes, and mouth.

  fill ('white');
  ellipse (430, 305, 10, 10);

  fill ('white');
  ellipse (459, 305, 10, 10);

  fill ('white');
  ellipse (445, 335, 60, 10);

}
