/**************************************************
Based on Template p5 project
by Pippin Barr
**************************************************/
/*************************************************
A Visual Poem (Conflict and Resolution)
by Darcy Harun
**************************************************/

// Setting up variables
let openingText = {
  alpha: 0,
  alphaChange: 0
}

let openingText2 = {
  alpha: 0,
  alphaChange: 0
}

let titleBg = {
  fill: 0,
  alpha: 25
}

let tCircle1 = {
  x: 0,
  y: 0,
  size: 100,
  r: 255,
  g: 255,
  b: 255,
  colourSpeed: 0,
  sizeChange: 0
}

let tCircle2 = {
  x: 0,
  y: 0,
  size: 99,
  eclipseDist: -105,
  eclipseSpeed: 0.2
}

let tCircle3 = {
  x: 0,
  y: 0,
  size: 10,
  alpha: 0,
  alphaChange: 0,
  r: 255,
  g: 255,
  b: 255,
}

let dot = { // Background dots
  x: 0,
  y: 0,
  r: 255,
  g: 255,
  b: 255,
  colourSpeed: 0,
  alpha: 255,
  dotsDrawnChange: 0,
  dotsDrawn: 1000,
  dotWeight: 1,
  dotWeightChange: 0,
}

let player = { // Player circle
  size: 25,
}

let pCircle1 = {
  x: 0,
  y: 0,
  size: 100,
}

let pCircle2 = {
  x: 0,
  y: 0,
  size: 100,
}

let pCircle3 = {
  x: 0,
  y: 0,
  size: 100,
}

let pCircle4 = {
  x: 0,
  y: 0,
  size: 100,
}

let pCircle5 = {
  x: 0,
  y: 0,
  size: 100,
}

let pCircle6 = {
  x: 0,
  y: 0,
  size: 100,
}

let pCircle7 = {
  x: 0,
  y: 0,
  size: 100,
}

let pCircle8 = {
  x: 0,
  y: 0,
  size: 100,
}

let lightText = {
  alpha: 0,
  alphaChange: 0,
}

let darkText = {
  alpha: 0,
  alphaChange: 0,
}

let state = `title` // Starts with an opening scene

function setup() {
  createCanvas(windowWidth * 0.999, windowHeight * 0.992); // The canvas sometimes was too big for the browser and had scroll bars
  frameRate(60);
  background(0); // Background starts absolute black so the transparent background in draw doesn't look grey
  setupTitletCircles();
  setupPlayingCircles();
}

function setupPlayingCircles() { // 8 Circles in playing state
  pCircle1.x = random(0, width);
  pCircle1.y = random(0, height);
  pCircle2.x = random(0, width);
  pCircle2.y = random(0, height);
  pCircle3.x = random(0, width);
  pCircle3.y = random(0, height);
  pCircle4.x = random(0, width);
  pCircle4.y = random(0, height);
  pCircle5.x = random(0, width);
  pCircle5.y = random(0, height);
  pCircle6.x = random(0, width);
  pCircle6.y = random(0, height);
  pCircle7.x = random(0, width);
  pCircle7.y = random(0, height);
  pCircle8.x = random(0, width);
  pCircle8.y = random(0, height);
}

function setupTitletCircles() { // 3 title circles
  tCircle1.x = width / 2;
  tCircle1.y = height / 2;
  tCircle2.x = width / 2;
  tCircle2.y = height / 2;
  tCircle3.x = width / 2;
  tCircle3.y = height / 2;
}

function draw() { // states
  if (state === `title`) { // Opening state
    title();
  } else if (state === `playing`) { // Player can move the choosing circle
    playing();
  } else if (state === `lightEnding`) { // Light ending
    lightEnding();
  } else if (state === `darkEnding`) { // Dark ending
    darkEnding();
  }
} // Draw End

function titleBackground() {  // Background and dots effect
  background(titleBg.fill, titleBg.fill, titleBg.fill, titleBg.alpha);
  for (let i = 0; i < dot.dotsDrawn; i++) {
    dot.x = random(0, width);
    dot.y = random(0, height);
    dot.alpha = random(0, 255);
    strokeWeight(dot.dotWeight);
    stroke(dot.r, dot.g, dot.b, dot.alpha);
    point(dot.x, dot.y);
  }
}

function titleVariableChanges() { // Changing variables for Title
  openingText.alpha = openingText.alpha + openingText.alphaChange;
  openingText2.alpha = openingText2.alpha + openingText2.alphaChange;
  dot.g = dot.g + dot.colourSpeed;
  dot.b = dot.b + dot.colourSpeed;
  tCircle1.g = tCircle1.g + tCircle1.colourSpeed;
  tCircle1.b = tCircle1.b + tCircle1.colourSpeed;
  tCircle1.size = tCircle1.size + tCircle1.sizeChange
  tCircle2.eclipseDist = tCircle2.eclipseDist + tCircle2.eclipseSpeed;
  tCircle3.alpha = tCircle3.alpha + tCircle3.alphaChange;
}

function displayTitletCircles() { // Drawing Circles for the Title
  noStroke();
  fill(tCircle1.r, tCircle1.g, tCircle1.b);
  ellipse(tCircle1.x, tCircle1.y, tCircle1.size, tCircle1.size);
  fill(0);
  ellipse(tCircle2.x + tCircle2.eclipseDist, tCircle2.y, tCircle2.size, tCircle2.size);
  fill(tCircle3.r, tCircle3.g, tCircle3.b, tCircle3.alpha);
  ellipse(tCircle3.x, tCircle3.y, tCircle3.size, tCircle3.size);
}


function titleIfStatements() { // If statements for the Title state
  if (tCircle2.eclipseDist >= 0) {
    tCircle2.eclipseSpeed = 0;
    tCircle1.colourSpeed = -1;
    dot.colourSpeed = -1;
  }
  if (tCircle1.g <= 0) {
    tCircle1.sizeChange = 1;
    dot.alpha = 255;
  }
  if (tCircle1.size > 500) { // Opening Text
    push();
    textSize(64);
    fill(0, 0, 0, openingText.alpha); // Black Text
    textAlign(CENTER, CENTER);
    text(`WELCOME`, width / 2, height / 2 - 100); //  WELCOME
    pop();

    openingText.alphaChange = 10;
    tCircle3.alphaChange = 10;
  }
  if (tCircle1.size > 525) {
    push();
    textSize(64);
    fill(255, 255, 255, openingText2.alpha); // White Text
    textAlign(CENTER, CENTER);
    text(`CHOOSE`, width / 2, height / 2 + 105); //  CHOOSE
    pop();

    openingText2.alphaChange = 10;
  }
}

function title() { // Title...
  titleBackground();
  titleVariableChanges();
  displayTitletCircles();
  titleIfStatements();
}

function playing() { // Playing state...
  playingBg();
  playerAndTriggers();
  drawPlayingCircles();
} // End of Playing

function playingBg() { // Background for the playing state
  background(255, 0, 0, 25)
  for (let i = 0; i < dot.dotsDrawn; i++) {
    dot.x = random(0, width);
    dot.y = random(0, height);
    dot.alpha = random(0, 255);
    strokeWeight(2);
    stroke(mouseX / 7, mouseX / 7, mouseX / 7, dot.alpha);
    point(dot.x, dot.y);
  }
}

function playerAndTriggers() { // Player circle + triggers for both ending states
  noStroke();
  fill(mouseX / 7, mouseX / 7, mouseX / 7);
  ellipse(mouseX, mouseY, player.size, player.size) // Player circle with mouse control

  if (mouseX >= width) {
    state = `lightEnding`;
  }

  if (mouseX <= 0) {
    state = `darkEnding`;
  }
}

function drawPlayingCircles() { // Draws 8 circles that fade in and out based on player position
  noStroke();
  let d1 = dist(mouseX, mouseY, pCircle1.x, pCircle1.y) / 8;
  fill(mouseX / 7, mouseX / 7, mouseX / 7, d1);
  ellipse(pCircle1.x, pCircle1.y, 100, 100);

  let d2 = dist(mouseX, mouseY, pCircle2.x, pCircle2.y) / 8;
  fill(mouseX / 7, mouseX / 7, mouseX / 7, d2);
  ellipse(pCircle2.x, pCircle2.y, 100, 100);

  let d3 = dist(mouseX, mouseY, pCircle3.x, pCircle3.y) / 8;
  fill(mouseX / 7, mouseX / 7, mouseX / 7, d3);
  ellipse(pCircle3.x, pCircle3.y, 100, 100);

  let d4 = dist(mouseX, mouseY, pCircle4.x, pCircle4.y) / 8;
  fill(mouseX / 7, mouseX / 7, mouseX / 7, d4);
  ellipse(pCircle4.x, pCircle4.y, 100, 100);

  let d5 = dist(mouseX, mouseY, pCircle5.x, pCircle5.y) / 8;
  fill(mouseX / 7, mouseX / 7, mouseX / 7, d5);
  ellipse(pCircle5.x, pCircle5.y, 100, 100);

  let d6 = dist(mouseX, mouseY, pCircle6.x, pCircle6.y) / 8;
  fill(mouseX / 7, mouseX / 7, mouseX / 7, d6);
  ellipse(pCircle6.x, pCircle6.y, 100, 100);

  let d7 = dist(mouseX, mouseY, pCircle7.x, pCircle7.y) / 8;
  fill(mouseX / 7, mouseX / 7, mouseX / 7, d7);
  ellipse(pCircle7.x, pCircle7.y, 100, 100);

  let d8 = dist(mouseX, mouseY, pCircle8.x, pCircle8.y) / 8;
  fill(mouseX / 7, mouseX / 7, mouseX / 7, d8);
  ellipse(pCircle8.x, pCircle8.y, 100, 100);
}

function lightEnding() {  // Light ending state...
  background(255, 255, 255);
  lightText.alpha = lightText.alpha + lightText.alphaChange;
  lightText.alphaChange = 5;
  push();
  textSize(64);
  fill(0, 0, 0, lightText.alpha); // Black Text
  textAlign(CENTER, CENTER);
  text(`I SHOW MYSELF IN THE LIGHT`, width / 2, height / 2); //  I SHOW MYSELF IN THE LIGHT
  pop();
}

function darkEnding() { // dark ending...
  background(0, 0, 0);
  darkText.alpha = darkText.alpha + darkText.alphaChange;
  darkText.alphaChange = 5;
  push();
  textSize(64);
  fill(255, 255, 255, darkText.alpha); // White Text
  textAlign(CENTER, CENTER);
  text(`I FIND MYSELF IN THE DARK`, width / 2, height / 2); //  I FIND MYSELF IN THE DARK
  pop();
}

function mousePressed() { // Once "welcome" and "choose" text appear a click will change it to the playing state
  if (tCircle3.alphaChange >= 10 && state === `title`) {
    state = `playing`;
  }
} // MousePressedEnd
