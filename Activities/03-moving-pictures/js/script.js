/**************************************************
Template p5 project
Pippin Barr

Here is a description of this template p5 project.
**************************************************/

// setup()
//
// Description of setup() goes here.
let bg = {
  r: 0,
  g: 0,
  b: 0
};

let circle1 = {
  x: 0,
  y: 250,
  size: 100,
  fill: 255,
  alpha: 200
};

let circle2 = {
  x: 250,
  y: 250,
  size: 80,
  fill: 255,
  alpha: 200
};

function setup() {
  createCanvas(500,500);
  noStroke();
}

function draw() {
background(bg.r,bg.g,bg.b);
  // Circle 1
fill(circle1.fill, circle1.fill, circle1.fill, circle1.alpha);
ellipse(circle1.x,circle1.y,circle1.size,circle1.size);
  // Circle 2
  fill(circle2.fill, circle2.fill, circle2.fill, circle2.alpha);
  ellipse(circle2.x,circle2.y,circle2.size,circle2.size);
}
