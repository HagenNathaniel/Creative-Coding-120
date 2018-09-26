//Nathaniel Hagen

// setup function, as with my previous HW code, I used 1280x720, which is
// somewhat the standard resolutions of some tablets, and older laptops.
// Also, seting it up with a green background, since the theme here is money.
// As well as dialing back the frameRate of the draw loop to 6 FPS, instead of
// the standard ~60 FPS.

function setup() {
    createCanvas( 1280, 720 );
    background( 'green' );

    frameRate ( 6 );
}

function draw() {

// first up, a silver circle, for the border of the coin, much like a real one.
// I wanted to match the coloration as much as I could with it, so I used
// 'standard' color names, instead of RGB code.

    noCursor();
    fill ( 'Silver' );
    ellipse ( mouseX, mouseY, 120 );

// inside that, a second circle, as the "body" of the coin, with the color gold.

    fill ( 'gold' );
    ellipse (mouseX, mouseY, 116);

// a yellow circle, signalling the DEAD center of the coin, using the X, and Y
// coordinates of the mouse as it's center.

    fill ( 'yellow' );
    ellipse ( mouseX, mouseY, 90 );

// insert a series of rectangles, signifying a stack of coins, offset from the
//center of the mouse cursor, so it is CLOSE or ON the center of the main coin.

    fill ( 'orange' );
    rect ( mouseX - 10, mouseY -23, 20, 50 );

    fill ( 'orange' );
    rect ( mouseX - 22, mouseY -4, 18, 35 );

    fill ( 'orange' );
    rect ( mouseX + 4, mouseY -4, 18, 35 );

    fill ('Black');
    text ("Time is Money Friend!", 640, 0 );
}
