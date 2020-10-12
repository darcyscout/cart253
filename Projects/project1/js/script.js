/**************************************************
Template p5 project
Pippin Barr

Here is a description of this template p5 project
**************************************************/

// setup()
//
// Description of setup() goes here.
let middleObject = {
  x: 0,
  y: 0,
  size: 100,
  rotation: 0
}

let circle1 = {
  x: 0,
  y: 0,
  size: 100,
  r: 255,
  g: 255,
  b: 255,
  colourSpeed: 0
}

let circle2 = {
  x: 0,
  y: 0,
  size: 99,
  eclipseDist: -105,
  eclipseSpeed: 0.2
}

let dot = {
  x: 0,
  y: 0,
  r: 255,
  g: 255,
  b: 255,
  colourSpeed: 0,
  alpha: 255,
  dotsToDraw: 10000,
  dotsDrawn: 0
}

function setup() {
  rectMode(CENTER);
  angleMode(DEGREES);
  createCanvas(windowWidth * 0.999,windowHeight * 0.992);  //The canvas sometimes was too big for the browser and had scroll bars
  frameRate(60);
  background(0);   //Background starts absolute black so the transparent background in draw doesn't look grey
  circle1.x = width/2;
  circle1.y = height/2;
  circle2.x = width/2;
  circle2.y = height/2;
}



function draw() {

  background(0, 0, 0, 25);
  // while (dot.dotsDrawn < dot.dotsToDraw) {
  //   dot.x = random(0,width);
  //   dot.y = random(0,height);
  //   dot.alpha = random(0,255);
  //   stroke(255,255,255,dot.alpha);
  //   point(dot.x,dot.y);
  //   dot.dotsDrawn = dot.dotsDrawn + 1;
  // }

  for (let i = 0; i < 1000; i++) {
    dot.x = random(0,width);
    dot.y = random(0,height);
    dot.alpha = random(0,255);
    stroke(dot.r,dot.g,dot.b,dot.alpha);
    point(dot.x,dot.y);
  }
  noStroke();
  fill(circle1.r,circle1.g,circle1.b);
  ellipse(circle1.x,circle1.y,circle1.size,circle1.size);

  dot.g = dot.g + dot.colourSpeed;
  dot.b = dot.b + dot.colourSpeed;
  circle1.g = circle1.g + circle1.colourSpeed;
  circle1.b = circle1.b + circle1.colourSpeed;

  fill(0);
  ellipse(circle2.x + circle2.eclipseDist,circle2.y,circle2.size,circle2.size);
  circle2.eclipseDist = circle2.eclipseDist + circle2.eclipseSpeed;

    // if (circle2.eclipseDist >= 105 || circle2.eclipseDist <= -105) {
    //   circle2.eclipseSpeed = -circle2.eclipseSpeed;
    // }

    if (circle2.eclipseDist >= 0) {
      circle2.eclipseSpeed = 0;
      circle1.colourSpeed = -1;
      dot.colourSpeed = -1;
    }
  // push();
  // noStroke();
  // fill(255,255,255,255);
  // translate(width/2,height/2);
  // rotate(middleObject.rotation);
  // rect(middleObject.x,middleObject.y,middleObject.size,middleObject.size);
  // pop();
  //
  // middleObject.rotation = middleObject.rotation + 1;
}
