/**************************************************
Created from the Template p5 project by Pippin Barr


                    SURVIVE THE ALIEN ONSLAUGHT!!!
--- As an alien yourself, you must dodge the purple evil aliens long enough
for you to shrink down to a safe size and join your kind.

    *Use Up Arrow and Down Arrow to move*
**************************************************/

//  Setting up the variables for the playable character
let user = {
  x: 0,
  y: 0,
  size: 50,
  fill: 140,   // Grey
  speed: 5,    // Movement speed
  jump: 10     // How far the player moves after each alien dodged
}

let circle = {
  x: 25,
  y: 250,     // Y pos will only be this value at the beginning
  size: 100,
  r: 147,      // Medium purple
  g: 112,      //
  b: 219,      //
  speed: 20
}

let img;
function preload() {
  img = loadImage('assets/images/PurpleSolar.png');   // Image of a purple Star
}

function setup() {
  imageMode(CENTER);
  createCanvas(windowWidth * 0.999,windowHeight * 0.992);  //The canvas sometimes was too big for the browser and reacted poorly
  frameRate(60);                                    //--- in combination with arrow keys control so it is slightly smaller

  user.x = windowWidth * 0.9;           // The player starts in the middle right of the screen
  user.y = windowHeight / 2;

}

// draw()
//
// Description of draw() goes here.
function draw() {
    background(0, 0, 0, 50);    //Background has transparency

  for (let i = 0; i < 1000; i++) {        //Make a thousand white dots appear on the background
    let x = random(0,width);              // --- each frame
    let y = random(0,height);
    stroke(255);
    point(x,y);
  }

  noStroke();  // No outline to all shapes

  if (keyIsDown(DOWN_ARROW)) {            // Arrow Keys up and down movement
    user.y = user.y + user.speed;
  } else if (keyIsDown(UP_ARROW)) {
    user.y = user.y - user.speed;
  }

    //  Purple Alien
  fill(circle.r,circle.g,circle.b);
  ellipse(circle.x,circle.y,circle.size,circle.size); // Outer Purple Circle
  circle.x = circle.x + circle.speed;

  fill(0);
  ellipse(circle.x, circle.y, circle.size * 0.8, circle.size * 0.8); // Inner Black circle

  fill(user.fill);
  ellipse(user.x,user.y,user.size,user.size);         // Drawing the player Circle

  image(img, circle.x, circle.y, 100, 100);           // Purple Star image

  let d = dist(user.x,user.y,circle.x,circle.y);      // Distance from the player and the purple alien will
    user.fill = d / 5;                                // --- change the player colour

  if (d <= user.size) {         // If the player and the alien overlap everything stops
    noLoop();
  }

  if (circle.x >= (windowWidth - (circle.size / 2))) {   // Purple Alien will be sent back to the left side
    circle.x = 25;                                   // --- of the window at a random y pos everytime it reaches
    circle.y = random(0,windowHeight);               // --- the width of the window
    circle.speed = circle.speed + 0.5;              // the Alien's speed will increase each time
    user.speed = user.speed + 0.5;                  // the player's speed also increases
    user.x = user.x - user.jump;                    // the player moves towards the left and gets smaller
    user.jump = user.jump + 1;                      // --- each time the alien gets sent back to the left side
    user.size = user.size - 1;
  }
}
