/**************************************************
Template p5 project
Pippin Barr

Here is a description of this template p5 project
**************************************************/

// setup()
//
// Description of setup() goes here.

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

let circle1 = {
  x: 0,
  y: 0,
  size: 100,
  r: 255,
  g: 255,
  b: 255,
  colourSpeed: 0,
  sizeChange: 0
}

let circle2 = {
  x: 0,
  y: 0,
  size: 99,
  eclipseDist: -105,
  eclipseSpeed: 0.2
}

let circle3 = {
  x: 0,
  y: 0,
  size: 10,
  alpha: 0,
  alphaChange: 0,
  r: 255,
  g: 255,
  b: 255,
}

let dot = {
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

let player = {
  size: 25,
}

let state = `title`

function setup() {
  rectMode(CENTER);
  angleMode(DEGREES);
  createCanvas(windowWidth * 0.999,windowHeight * 0.992);  //The canvas sometimes was too big for the browser and had scroll bars
  frameRate(60);
  background(0);   //Background starts absolute black so the transparent background in draw doesn't look grey
  setupTitleCircles();
}

function setupTitleCircles() {
  circle1.x = width/2;
  circle1.y = height/2;
  circle2.x = width/2;
  circle2.y = height/2;
  circle3.x = width/2;
  circle3.y = height/2;
}

function draw() {
  if (state === `title`) {
  title();
} else if (state === `playing`) {
    playing();
  }
} // Draw End

function titleBackground() {
  background(titleBg.fill, titleBg.fill, titleBg.fill, titleBg.alpha);
  for (let i = 0; i < dot.dotsDrawn; i++) {
    dot.x = random(0,width);
    dot.y = random(0,height);
    dot.alpha = random(0,255);
    strokeWeight(dot.dotWeight);
    stroke(dot.r,dot.g,dot.b,dot.alpha);
    point(dot.x,dot.y);
  }
}

function titleVariableChanges() {
  openingText.alpha = openingText.alpha + openingText.alphaChange;
  openingText2.alpha = openingText2.alpha + openingText2.alphaChange;
  dot.g = dot.g + dot.colourSpeed;
  dot.b = dot.b + dot.colourSpeed;
  circle1.g = circle1.g + circle1.colourSpeed;
  circle1.b = circle1.b + circle1.colourSpeed;
  circle1.size = circle1.size + circle1.sizeChange
  circle2.eclipseDist = circle2.eclipseDist + circle2.eclipseSpeed;
  circle3.alpha = circle3.alpha + circle3.alphaChange;
}

function displayTitleCircles() {
  noStroke();
  fill(circle1.r,circle1.g,circle1.b);
  ellipse(circle1.x,circle1.y,circle1.size,circle1.size);
  fill(0);
  ellipse(circle2.x + circle2.eclipseDist,circle2.y,circle2.size,circle2.size);
  fill(circle3.r,circle3.g,circle3.b,circle3.alpha);
  ellipse(circle3.x,circle3.y,circle3.size,circle3.size);
}


function titleIfStatements() {
    if (circle2.eclipseDist >= 0) {
      circle2.eclipseSpeed = 0;
      circle1.colourSpeed = -1;
      dot.colourSpeed = -1;
    }
    if (circle1.g <= 0) {
      circle1.sizeChange = 1;
      // dot.dotWeightChange = 0.1;
      // dot.dotsDrawnChange = -1;
      dot.alpha = 255;
    }
    if (circle1.size > 500) {     // Opening Text
        push();
      textSize(64);
      fill(0,0,0,openingText.alpha);    // Black Text
      textAlign(CENTER,CENTER);
      text(`WELCOME`,width/2,height/2 - 100);   //  WELCOME
        pop();

      openingText.alphaChange = 10;
      circle3.alphaChange = 10;
    }
    if (circle1.size > 525) {
      push();
    textSize(64);
    fill(255,255,255,openingText2.alpha);    // White Text
    textAlign(CENTER,CENTER);
    text(`CHOOSE`,width/2,height/2 + 110);   //  CHOOSE
      pop();

      openingText2.alphaChange = 10;
    }
}

function title() {
  titleBackground();
  titleVariableChanges();
  displayTitleCircles();
  titleIfStatements();
}

function playing () {
  background(255,0,0,50)
  noStroke();
  fill(mouseX/7,mouseX/7,mouseX/7);
  ellipse(mouseX,mouseY,player.size,player.size)                  // Player

  //If player go left Dark Ending, if go right Light ending


  // Moving the player near invisible circles reveals them and changes their colour to the same as the player's



}
function mousePressed() {
    if (circle3.alphaChange >= 10) {
              state = `playing`
      }
  } // MousePressedEnd
