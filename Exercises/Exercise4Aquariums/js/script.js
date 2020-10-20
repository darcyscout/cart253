"use strict";

let school = [];
let schoolSize = 100;

let fishSpecial = {
  x: 0,
  y: 0,
  size: 50,
  r: 200,
  g: 100,
  b: 100,
  vx: 0,
  vy: 0,
  speed: 2,
  killed: false
}

let user = {
  x: 0,
  y: 0,
  size: 100,
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  user.x = mouseX;
  user.y = mouseY;

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
  };
  return fish;
}

// draw()
// Moves and displays our fish
function draw() {
  background(0, 0, 30, 50);

  displayUser();

  for (let i = 0; i < school.length; i++) {
    moveFish(school[i]);
    displayFish(school[i]);
  }
}

// moveFish(fish)
// Chooses whether the provided fish changes direction and moves it
function moveFish(fish) {
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

function moveFishSpecial() {
  if (!fishSpecial.killed) {
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

function checkFishSpecial(fish) {
  if (!fish.killed) {
    let d = dist(user.x, user.y, fish.x, fish.y);
    if (d < user.size / 2 + fish.size / 2) {
      fish.killed = true;
    }
  }
}

// displayFish(fish)
// Displays the provided fish on the canvas
function displayFish(fish) {
  push();
  fill(fish.r, fish.g, fish.b);
  noStroke();
  ellipse(fish.x, fish.y, fish.size);
  pop();
}

function displayUser() {
    push();
    noStroke();
    fill(255);
    triangle(windowWidth / 3, windowHeight, mouseX, mouseY, windowWidth / 3 * 2, windowHeight);
    fill(0);
    bezier(windowWidth / 3 * 2, windowHeight, mouseX, mouseY, mouseX, mouseY, windowWidth / 3, windowHeight);
    pop();
}
