/**************************************************
Template p5 project
Pippin Barr

Here is a description of this template p5 project.
**************************************************/
fontSize = 64;
fontSizeSpeed = 1;

let seeker = {    // Playable seeker circle
  x: 0,
  y: 250,
  size: 100
}

let wanderer = {  // Wandering circle
  x: 0,
  y: 0,
  size: 100,
  speed: 3,
  vx: 0,
  vy: 0,
  fill: 255
}

let state = `title`;

function setup() {
  createCanvas(500, 500);
  background(0);    // No alpha in setup background to prevent long white flash
  setupCircles();   // Setting up variables for the Seeker and Wanderer
}

function setupCircles() {
  seeker.x = width/2;            //  Seeker Circle Starts in the center
  seeker.y = height/2;
  wanderer.x = random(0,width * 0.9);    // Wanderer spawns at a random location
  wanderer.y = random(0,height * 0.9);
  wanderer.vx = random(wanderer.speed,-wanderer.speed); // Wanderer moves in a random direction
  wanderer.vy = random(wanderer.speed,-wanderer.speed);
}

function draw() {
  background(0,0,0,50);

  if (state === `title`) {    // Beginning Screen, asks question, Where?. Click to start
    title();
  }
  else if (state === `simulation`) {  // Simulates the visuals and keeps track of locations
    simulation();
  }
  else if (state === `found`) {   // Ending activated upon seeking the wanderer
    found();
  }
  else if (state === `gotAway`) { // Ending activated whenn the wanderer gets away
    gotAway();
  }
  else if (state === `dontLeave`) { // Secret Ending with flashy text effect
    dontLeave();
  }
}

function title() {
  push();
  textSize(64);
  fill(100,100,200);    // Indigo Colour
  textAlign(CENTER,CENTER);
  text(`Where?`,width/2,height/2);
  pop();
}

function found() {
  push();
  textSize(80);
  fill(150,150,250);   // Brighter Indigo Colour
  textAlign(CENTER,CENTER);
  text(`Found!`,width/2,height/2);
  pop();
}

function gotAway() {
  push();
  textSize(64);
  fill(100,100,200);  // Indigo Colour
  textAlign(CENTER,CENTER);
  text(`It Got Away`,width/2,height/2);
  pop();
}

function dontLeave() {
  push();
  textSize(fontSize);
  fill(150,150,250);  // Brighter Indigo Colour
  textAlign(CENTER,CENTER);
  text(`Don't Leave!`,width/2,height/2);
  pop();
  fontSize = fontSize + fontSizeSpeed;    // Freaky font effect
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
  wanderer.x = wanderer.x + wanderer.vx;  // Moves the Wanderer
  wanderer.y = wanderer.y + wanderer.vy;
}
function checkSeekerOffScreen(){    //  checks if the seeker has left the screen
    if (seeker.x >= width || seeker.x <= 0 || seeker.y >= height|| seeker.y <= 0) {
      state = `dontLeave`;
    }
}

function checkWandererOffScreen() {   // checks if the wanderer has left the screen
  if (wanderer.x >= width || wanderer.x <= 0 || wanderer.y >= height
    || wanderer.y <= 0) {
      state = `gotAway`;
  }
}

function checkOverlap() {   // checks if the seeker and the wanderer have overlapped
let d = dist(seeker.x,seeker.y,wanderer.x,wanderer.y);
  if (d <= 100) {
      state = `found`;
  }
}

function display() {     // displays the seeker and the wanderer
  noStroke();
  let a = dist(seeker.x,seeker.y,wanderer.x,wanderer.y);  // The wanderer gets darker as it gets closer to the seeker
  wanderer.fill = a/2;
  seeker.x = mouseX;    // The seeker is attached to the user's mouse X and Y
  seeker.y = mouseY;
  ellipse(seeker.x,seeker.y,seeker.size,seeker.size);
  push();
  fill(wanderer.fill);
  ellipse(wanderer.x,wanderer.y,wanderer.size,wanderer.size);
  pop();
}

function mousePressed() {   // Mouse click starts the game
  if (state === `title`) {
    state = `simulation`;
  }
}
