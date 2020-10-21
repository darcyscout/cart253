/*


*/


"use strict";

let school = [];
let schoolSize = 100;

let fishSpecial = {
  x: 0,
  y: 0,
  size: 50,
  r: 100,
  g: 255,
  b: 255,
  vx: 0,
  vy: 0,
  speed: 2,
  killed: false
}

let user = {
  x: 0,
  y: 0,
  hitRadius: 50,
}

let endFont = {
  size: 64,
  speed: 4,
}

let state = `playing`;

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(60);

  fishSpecial.x = random(0, width);
  fishSpecial.y = random(0, height);

  for (let i = 0; i < schoolSize; i++) {
    // Create a fish
    let fish = createFish(random(0, width), random(0, height));
    // Add the fish to our array
    school.push(fish);
  }
}

// createFish(x,y)
// Creates a new JavaScript Object describing a fish and returns it
function createFish(x, y) {
  let fish = {
    x: x,
    y: y,
    size: 50,
    r: 200,
    g: 100,
    b: 100,
    vx: 0,
    vy: 0,
    speed: 2,
    killed: false,
  };
  return fish;
}

// draw()
// Moves and displays our fish
function draw() {
  background(0, 0, 30, 50);


  if (state === `playing`) {
    playing();
  } else if (state === `success`) {
    success();
  } else if (state === `failure`) {
    failure();
  }
}

function playing() {
  for (let i = 0; i < school.length; i++) {
    moveFish(school[i]);
    displayFish(school[i]);
    checkFish(school[i]);
  }
  checkFailure();
  displayUser();
  moveFishSpecial();
  displayFishSpecial();
  checkFishSpecial();
}

function success() {
  push();
  textSize(endFont.size);
  fill(150, 150, 250); // Brighter Indigo Colour
  textAlign(CENTER, CENTER);
  text(`Success!`, width / 2, height / 2);
  pop();
  endFont.size = endFont.size + endFont.speed; // Freaky font effect
  if (endFont.size > 120) {
    endFont.speed = -endFont.speed;
  } else if (endFont.size < 58) {
    endFont.speed = -endFont.speed;
  }
}

function failure() {
  push();
  textSize(endFont.size);
  fill(250, 150, 150); //
  textAlign(CENTER, CENTER);
  text(`Failure!`, width / 2, height / 2);
  pop();
  endFont.size = endFont.size + endFont.speed; // Freaky font effect
  if (endFont.size > 120) {
    endFont.speed = -endFont.speed;
  } else if (endFont.size < 58) {
    endFont.speed = -endFont.speed;
  }
}

function checkFailure() {
  if (schoolSize <= 50) {
    state = `failure`;
  }
}

// moveFish(fish)
// Chooses whether the provided fish changes direction and moves it
function moveFish(fish) {
  if (!fish.killed) {
    // Choose whether to change direction
    let change = random(0, 1);
    if (change < 0.05) {
      fish.vx = random(-fish.speed, fish.speed);
      fish.vy = random(-fish.speed, fish.speed);
    }
    // Move the fish
    fish.x = fish.x + fish.vx;
    fish.y = fish.y + fish.vy;
    // Constrain the fish to the canvas
    fish.x = constrain(fish.x, 0, width);
    fish.y = constrain(fish.y, 0, height);
  }
}

function moveFishSpecial() {
  if (!fishSpecial.killed) {
    // Choose whether to change direction
    let change = random(0, 1);
    if (change < 0.05) {
      fishSpecial.vx = random(-fishSpecial.speed, fishSpecial.speed);
      fishSpecial.vy = random(-fishSpecial.speed, fishSpecial.speed);
    }
    // Move the fish
    fishSpecial.x = fishSpecial.x + fishSpecial.vx;
    fishSpecial.y = fishSpecial.y + fishSpecial.vy;
    // Constrain the fish to the canvas
    fishSpecial.x = constrain(fishSpecial.x, 0, width);
    fishSpecial.y = constrain(fishSpecial.y, 0, height);
  }
}

function checkFish(fish) {
  if (!fish.killed) {
    let d = dist(fish.x, fish.y, fishSpecial.x, fishSpecial.y);
    if (d < 100 + fishSpecial.size / 2) {
      fish.killed = true;
      schoolSize = schoolSize - 1;
      fishSpecial.x = random(0, width);
      fishSpecial.y = random(0, height);
    }
  }
}

function checkFishSpecial() {
  if (!fishSpecial.killed) {
    let d = dist(user.x, user.y, fishSpecial.x, fishSpecial.y);
    if (d < user.hitRadius / 2 + fishSpecial.size / 2) {
      if (mouseIsPressed) {
        fishSpecial.killed = true;
        state = `success`;
      }
    }
  }
}

// displayFish(fish)
// Displays the provided fish on the canvas
function displayFish(fish) {
  if (!fish.killed) {
    let d = dist(user.x, user.y, fish.x, fish.y);
    push();
    fill(fish.r + d, fish.g + d, fish.b + d);
    noStroke();
    ellipse(fish.x, fish.y, fish.size);
    pop();
  }
}

function displayFishSpecial() {
  let d = dist(user.x, user.y, fishSpecial.x, fishSpecial.y);
  push();
  fill(fishSpecial.r + d, fishSpecial.g, fishSpecial.b);
  noStroke();
  ellipse(fishSpecial.x, fishSpecial.y, fishSpecial.size);
  pop();
}

function displayUser() {
  user.x = mouseX;
  user.y = mouseY;
  push();
  noStroke();
  fill(255);
  triangle(windowWidth / 3, windowHeight, mouseX, mouseY, windowWidth / 3 * 2, windowHeight);
  fill(0);
  bezier(windowWidth / 3 * 2, windowHeight, mouseX, mouseY, mouseX, mouseY, windowWidth / 3, windowHeight);
  pop();
}
