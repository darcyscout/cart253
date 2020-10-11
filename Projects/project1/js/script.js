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

let dot = {
  x: 0,
  y: 0,
  alpha: 255,
  dotsToDraw: 10000,
  dotsDrawn: 0
}

function setup() {
  rectMode(CENTER);
  angleMode(DEGREES);
  createCanvas(windowWidth * 0.999,windowHeight * 0.992);  //The canvas sometimes was too big for the browser and had scroll bars
  frameRate(60);
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
    stroke(255,255,255,dot.alpha);
    point(dot.x,dot.y);
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
