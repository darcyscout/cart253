/**************************************************
Template p5 project
Pippin Barr

Here is a description of this template p5 project
**************************************************/

// setup()
//
// Description of setup() goes here.

let dot = {
  x: 0,
  y: 0,
  alpha: 255
}

function setup() {
  createCanvas(windowWidth * 0.999,windowHeight * 0.992);  //The canvas sometimes was too big for the browser and reacted poorly
  frameRate(60);
}



function draw() {
  background(0, 0, 0,);

  for (let i = 0; i < 10000; i++) {
    dot.x = random(0,width);
    dot.y = random(0,height);
    dot.alpha = random(0,255);
    stroke(255,255,255,dot.alpha);
    point(dot.x,dot.y);
    noLoop();
  }
  ellipse(width/2,height/2,100,100);
}
