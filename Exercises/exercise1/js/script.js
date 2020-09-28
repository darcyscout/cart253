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
  alpha: 200,
  speed: 0.157
};

let circle2 = {
  x: 500,
  y: 250,
  size: 80,
  fill: 220,
  alpha: 200,
  speed: 0.157
};

let circle3 = {
  x: 250,
  y: 0,
  size: 60,
  r: 0,
  g: 0,
  b: 0,
  alpha: 200,
  speed: 0.157
};

let circle4 = {
  x: 250,
  y: 500,
  size: 40,
  fill: 150,
  alpha: 200,
  speed: 0.157
};

function setup() {
  createCanvas(500,500);
  noStroke();
}

function draw() {
background(bg.r,bg.g,bg.b);
bg.r = map(circle1.size,100,width,0,255);
  // Circle 1
fill(circle1.fill, circle1.fill, circle1.fill, circle1.alpha);
ellipse(circle1.x,circle1.y,circle1.size,circle1.size);
circle1.x = circle1.x + circle1.speed; // Move the circle right
circle1.x = constrain(circle1.x, 0, width/2);
circle1.size = circle1.size + 0.25;
circle1.size = constrain(circle1.size, 0, width);
  // Circle 2

  fill(circle2.fill, circle2.fill, circle2.fill, circle2.alpha);
  ellipse(circle2.x,circle2.y,circle1.size*0.8,circle1.size*0.8);
  circle2.x = circle2.x - circle2.speed; // Move the circle left
  circle2.x = constrain(circle2.x, width/2, width);

  fill(circle3.r, circle3.g, circle3.b, circle3.alpha);
  ellipse(circle3.x,circle3.y,circle1.size*0.6,circle1.size*0.6);
  circle3.y = circle3.y + circle3.speed; // Move the circle down
  circle3.y = constrain(circle3.y, 0, height/2);

  fill(circle4.fill, circle4.fill, circle4.fill, circle4.alpha);
  ellipse(circle4.x,circle4.y,circle1.size*0.4,circle1.size*0.4);
  circle4.y = circle4.y - circle4.speed; // Move the circle down
  circle4.y = constrain(circle4.y, height/2, height);
  circle4.fill = circle4.fill + 0.07;
  circle4.fill = constrain(circle4.fill, 0, 255);

  console.log(circle4.fill);

}
