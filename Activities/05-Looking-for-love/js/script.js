/**************************************************
Template p5 project
Pippin Barr

Here is a description of this template p5 project.
**************************************************/

let circle1 = {
  x: 0,
  y: 250,
  size: 100,
  speed: 5,
  vx: 0,
  vy: 0
}

let circle2 = {
  x: 0,
  y: 250,
  size: 100,
  speed: 5,
  vx: 0,
  vy: 0
}

let state = `title`; //Can be: title. simulation, love, sadness

function setup() {
  createCanvas(500, 500);

  setupCircles();
}

function setupCircles() {
  circle1.x = width/3;
  circle2.x = width/3 * 2;
  circle1.vx = random(circle1.speed,-circle1.speed);
  circle1.vy = random(circle1.speed,-circle1.speed);
  circle2.vx = random(circle2.speed,-circle2.speed);
  circle2.vy = random(circle2.speed,-circle2.speed);
}

function draw() {
  background(0,0,0,30);

  if (state === `title`) {
    title();
  }
  else if (state === `simulation`) {
    simulation();
  }
  else if (state === `love`) {
    love();
  }
  else if (state === `sadness`) {
    sadness();
  }
}

function title() {
  push();
  textSize(64);
  fill(200,100,100);
  textAlign(CENTER,CENTER);
  text(`LOVE?`,width/2,height/2);
  pop();
}

function love() {
  push();
  textSize(80);
  fill(230,110,120);
  textAlign(CENTER,CENTER);
  text(`LOVE!`,width/2,height/2);
  pop();
}

function sadness() {
  push();
  textSize(80);
  fill(150,150,255);
  textAlign(CENTER,CENTER);
  text(`);`,width/2,height/2);
  pop();
}

function simulation() {
  move();
  checkOffScreen();
  checkOverlap();
  display();
}

function move() {
  circle1.x = circle1.x + circle1.vx;
  circle1.y = circle1.y + circle1.vy;
  circle2.x = circle2.x + circle2.vx;
  circle2.y = circle2.y + circle2.vy;
}
function checkOffScreen() {
  if (circle1.x >= width || circle1.x <= 0 || circle1.y >= height|| circle1.y <= 0
    || circle2.x >= width || circle2.x <= 0 || circle2.y >= height
    || circle2.y <= 0) {
      state = `sadness`;
  }
}

function checkOverlap() {
let d = dist(circle1.x,circle1.y,circle2.x,circle2.y);
  if (d <= 100) {
      state = `love`;
  }
}

function display() {
  noStroke();
  ellipse(circle1.x,circle1.y,circle1.size,circle1.size);
  ellipse(circle2.x,circle2.y,circle2.size,circle2.size);
}

function mousePressed() {
  if (state === `title`) {
    state = `simulation`;
  }
}
