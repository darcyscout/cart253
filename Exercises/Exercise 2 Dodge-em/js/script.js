/**************************************************
Template p5 project
Pippin Barr

Here is a description of this template p5 project.
**************************************************/

// setup()
//
// Description of setup() goes here.


let user = {
  x: 0,
  y: 0,
  size: 50,
  r: 140,
  g: 140,
  b: 140,
  fill: 140,
  speed: 5,
  jump: 10
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



function setup() {
  createCanvas(windowWidth * 0.999,windowHeight * 0.992);
  frameRate(60);

  user.x = windowWidth * 0.9;
  user.y = windowHeight / 2;

}

// draw()
//
// Description of draw() goes here.
function draw() {
    background(0, 0, 0, 50);

  for (let i = 0; i < 1000; i++) {
    let x = random(0,width);
    let y = random(0,height);
    stroke(255);
    point(x,y);
  }

  noStroke();

  if (keyIsDown(DOWN_ARROW)) {
    user.y = user.y + user.speed;
  } else if (keyIsDown(UP_ARROW)) {
    user.y = user.y - user.speed;
  }

  fill(circle.r,circle.g,circle.b);
  ellipse(circle.x,circle.y,circle.size,circle.size); // Outer Red Circle
  circle.x = circle.x + circle.speed;

  fill(0);
  ellipse(circle.x, circle.y, circle.size * 0.8, circle.size * 0.8); // Outer Black circle

  fill(circle.r,circle.g,circle.b);
  ellipse(circle.x, circle.y, circle.size * 0.6, circle.size * 0.6); // Inner Red Circle

  fill(0);
  ellipse(circle.x, circle.y, circle.size * 0.4, circle.size * 0.4); // Inner Black Circle


  fill(user.fill);
  ellipse(user.x,user.y,user.size,user.size);

  let d = dist(user.x,user.y,circle.x,circle.y);

    user.fill = d / 5;

  if (d <= user.size) {
    noLoop();
  }

  if (circle.x >= (windowWidth - (circle.size / 2))) {
    circle.x = 25;
    circle.y = random(0,windowHeight);
    circle.speed = circle.speed + 0.5;
    user.speed = user.speed + 0.5;
    user.x = user.x - user.jump;
    user.jump = user.jump + 1;
    user.size = user.size - 1;
  }
}
// Keyboard Controls for UP and DOWN user movement
