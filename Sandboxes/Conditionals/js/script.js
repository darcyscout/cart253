/**************************************************
Template p5 project
Pippin Barr

Here is a description of this template p5 project.
**************************************************/

// setup()
//
// Description of setup() goes here.
let backgroundShade = 0;
let circle = {
  x: 50,
  y: 250,
  size: 100,
  speed: 1,
  fill: 255
}

function setup() {
  createCanvas(500,500);
}

function draw() {
  background(backgroundShade);
  backgroundShade = backgroundShade + 0.5;

  noStroke();

  if (backgroundShade === 255) {
    backgroundShade = 0
  }

    if (circle.x > (width - (circle.size/2))) {
      circle.speed = -circle.speed;
    }

    if (circle.x < 50) {
      circle.speed = -circle.speed;
    }

    fill(circle.fill);

    if (mouseX < width/2) {
      fill(255,0,0);
    }

  circle.x = circle.x + circle.speed;

  ellipse(circle.x,circle.y,circle.size);
}
