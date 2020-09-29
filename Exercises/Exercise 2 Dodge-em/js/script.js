/**************************************************
Template p5 project
Pippin Barr

Here is a description of this template p5 project.
**************************************************/

// setup()
//
// Description of setup() goes here.
function setup() {
  createCanvas(windowWidth,windowHeight);
  frameRate(60);
}

let user = {
  x: 0,
  y: 0,
  size: 50,
  fill: 140
}

let circle = {
  x: 25,
  y: 250,
  size: 100,
  r: 220,   // Crimson Red
  g: 20,
  b: 60,
  speed: 20
}

// draw()
//
// Description of draw() goes here.
function draw() {
    background(180,195,172);

  for (let i = 0; i < 1000; i++) {
    let x = random(0,width);
    let y = random(0,height);
    stroke(255);
    point(x,y);
  }

  noStroke();
  user.x = mouseX;
  user.y = mouseY;

  fill(circle.r,circle.g,circle.b);
  ellipse(circle.x,circle.y,circle.size,circle.size);
  circle.x = circle.x + circle.speed;

  fill(user.fill);
  ellipse(user.x,user.y,user.size,user.size);

  let d = dist(user.x,user.y,circle.x,circle.y);

  if (d <= 50) {
    noLoop();
  }

  if (circle.x >= (windowWidth - 50)) {
    circle.x = 25;
    circle.y = random(0,windowHeight);
    circle.speed = circle.speed + 0.5;



  }
}
