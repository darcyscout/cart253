/**************************************************
Template p5 project
Pippin Barr

Here is a description of this template p5 project.
**************************************************/
fontSize = 64;
fontSizeSpeed = 1;

let seeker = {
  x: 0,
  y: 250,
  size: 100
}

let wanderer = {
  x: 0,
  y: 0,
  size: 100,
  speed: 3,
  vx: 0,
  vy: 0,
  fill: 255
}

let state = `title`; //Can be: title. simulation, found, GotAway

function setup() {
  createCanvas(500, 500);
  background(0);
  setupCircles();
}

function setupCircles() {
  seeker.x = width/2;            //  Seeker Circle Starts in the center
  seeker.y = height/2;
  wanderer.x = random(0,width * 0.9);    //
  wanderer.y = random(0,height * 0.9);
  wanderer.vx = random(wanderer.speed,-wanderer.speed);
  wanderer.vy = random(wanderer.speed,-wanderer.speed);
}

function draw() {
  background(0,0,0,50);

  if (state === `title`) {
    title();
  }
  else if (state === `simulation`) {
    simulation();
  }
  else if (state === `found`) {
    found();
  }
  else if (state === `gotAway`) {
    gotAway();
  }
  else if (state === `dontLeave`) {
    dontLeave();
  }
}

function title() {
  push();
  textSize(64);
  fill(100,100,200);
  textAlign(CENTER,CENTER);
  text(`Where?`,width/2,height/2);
  pop();
}

function found() {
  push();
  textSize(80);
  fill(100,100,250);
  textAlign(CENTER,CENTER);
  text(`Found!`,width/2,height/2);
  pop();
}

function gotAway() {     //
  push();
  textSize(64);
  fill(150,150,255);
  textAlign(CENTER,CENTER);
  text(`Got Away`,width/2,height/2);
  pop();
}

function dontLeave() {   // Secret Ending
  push();
  textSize(fontSize);
  fill(150,150,255);
  textAlign(CENTER,CENTER);
  text(`Don't Leave!`,width/2,height/2);
  pop();
  fontSize = fontSize + fontSizeSpeed;
  if (fontSize > 70) {
    fontSizeSpeed = -fontSizeSpeed;
  } else if (fontSize < 58) {
    fontSizeSpeed = -fontSizeSpeed;
  }
}

function simulation() {
  move();
  checkSeekerOffScreen();
  checkWandererOffScreen();
  checkOverlap();
  display();
}

function move() {
  wanderer.x = wanderer.x + wanderer.vx;
  wanderer.y = wanderer.y + wanderer.vy;
}
function checkSeekerOffScreen(){
    if (seeker.x >= width || seeker.x <= 0 || seeker.y >= height|| seeker.y <= 0) {
      state = `dontLeave`;
    }
}

function checkWandererOffScreen() {
  if (wanderer.x >= width || wanderer.x <= 0 || wanderer.y >= height
    || wanderer.y <= 0) {
      state = `gotAway`;
  }
}

function checkOverlap() {
let d = dist(seeker.x,seeker.y,wanderer.x,wanderer.y);
  if (d <= 100) {
      state = `found`;
  }
}

function display() {
  noStroke();
  let a = dist(seeker.x,seeker.y,wanderer.x,wanderer.y);
  wanderer.fill = a/2;
  seeker.x = mouseX;
  seeker.y = mouseY;
  ellipse(seeker.x,seeker.y,seeker.size,seeker.size);
  push();
  fill(wanderer.fill);
  ellipse(wanderer.x,wanderer.y,wanderer.size,wanderer.size);
  pop();
}

function mousePressed() {
  if (state === `title`) {
    state = `simulation`;
  }
}
