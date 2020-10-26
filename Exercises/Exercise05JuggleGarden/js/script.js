// Timer code by marynotari --- https://editor.p5js.org/marynotari/sketches/S1T2ZTMp-

// BEE...
// The player will use mouse movement and clicking to control their very own Bee!
// The goal is to keep all the flowers alive before time runs out.

"use strict";

// Countdown timer in the background
let timer = 30

let playerBee = {
  x: 0,
  y: 0,
  size: 30
}

// Our garden
let garden = {
  // An array to store the individual flowers
  flowers: [],
  // How many flowers in the garden
  numFlowers: 10,
  // An array to our the bees
  bees: [],
  // How many bees in the garden
  numBees: 5,
  // The color of the grass (background)
  grassColor: {
    r: 120,
    g: 180,
    b: 120
  }
};

let state = `title`;

// setup() creates the canvas and the flowers in the garden
function setup() {
  createCanvas(300, 300);
  frameRate(60);

  // Create our flowers by counting up to the number of the flowers
  for (let i = 0; i < garden.numFlowers; i++) {
    // Create variables for our arguments for clarity
    let x = random(0, width);
    let y = random(0, height);
    let size = random(50, 80);
    let stemLength = random(50, 100);
    let petalColor = {
      r: random(100, 255),
      g: random(100, 255),
      b: random(100, 255)
    }
    // Create a new flower using the arguments
    let flower = new Flower(x, y, size, stemLength, petalColor);
    // Add the flower to the array of flowers
    garden.flowers.push(flower);
  }

  // Create our bees by counting up to the number of bees
  for (let i = 0; i < garden.numBees; i++) {
    // Create variables for our arguments for clarity
    let x = random(0, width);
    let y = random(0, height);
    // Create a new bee using the arguments
    let bee = new Bee(x, y);
    // Add the bee to the array of bees
    garden.bees.push(bee);
  }

}

// draw()
// Displays our flowers
function draw() {
  if (state === `title`) {
    title();
  }
  else if (state === `simulation`) {
    simulation();
  }
  else if (state === `winScreen`) {
    winScreen();
  }
  else if (state === `loseScreen`) {
    loseScreen();
  }
}

// Displays welcoming text in the opening state with grass background
function title() {
  background(garden.grassColor.r, garden.grassColor.g, garden.grassColor.b);
  textAlign(CENTER, CENTER);
    push();
  fill(255,255,100);
  textSize(50);
  text("You're a Bee", width/2, height/2);
    pop();
    push();
  fill(255,255,255,50)
  textSize(25)
  text("(Click)",width/2,height/2 + height*0.13);
    pop();
}

  // Shows winning text
function winScreen() {
  background(garden.grassColor.r, garden.grassColor.g, garden.grassColor.b);
  textAlign(CENTER, CENTER);
    push();
  fill(255,255,100);
  textSize(50);
  text("GOOD BEE!", width/2, height/2);
    pop();
    push();
  fill(255,255,255,50)
  textSize(25)
  text("(You Win)",width/2,height/2 + height*0.13);
    pop();
}

  // Shows loosing text
function loseScreen() {
  background(garden.grassColor.r, garden.grassColor.g, garden.grassColor.b);
  textAlign(CENTER, CENTER);
    push();
  fill(255,255,100);
  textSize(50);
  text("BAD BEE!", width/2, height/2);
    pop();
    push();
  fill(255,255,255,50)
  textSize(25)
  text("(You Lose)",width/2,height/2 + height*0.13);
    pop();
}

  // Timer that overlays on the simulation showing how much time the player has left to keep the flowers alive
function countDownTimer() {
  // Draw timer
    push();
  textAlign(CENTER, CENTER);
  fill(255,255,255,100);
  textSize(100);
  text(timer, width/2, height/2);
    pop();
    // When the frameCount is divisible by 60 it counts 1 second and the timer goes down by one
  if (frameCount % 60 == 0 && timer > 0) {
    timer --;
  } // When the timer reaches 0 the player wins
  if (timer == 0) {
    state = `winScreen`;
  }
}

  // Simulates the visuals and interactions for all the BEE FLOWER and PLAYER objects
function simulation() {
  // Display the grass
  background(garden.grassColor.r, garden.grassColor.g, garden.grassColor.b);
  // Loop through all the flowers in the array and display them
  for (let i = 0; i < garden.flowers.length; i++) {
    let flower = garden.flowers[i];
    // Check if this flower is alive
    if (flower.alive) {
      // Update the flower by shrinking it and displaying it
      flower.shrink();
      flower.display();
    }
    else {
      state = `loseScreen`
    }
  }

  // Display the Player Controlled Bee
  displayPlayerBee();

  // Loop through all the bees in the array and display them
  for (let i = 0; i < garden.bees.length; i++) {
    let bee = garden.bees[i];
    // Check if this flower is alive
    if (bee.alive) {
      // Shrink and move the bee
      bee.shrink();
      bee.move();

      // NEW! Go through the entire flower array and try to pollinate the flowers!
      // Note that we use j in our for-loop here because we're already inside
      // a for-loop using i!
      for (let j = 0; j < garden.flowers.length; j++) {
        let flower = garden.flowers[j];
        bee.tryToPollinate(flower);
      }
      // Display the bee
      bee.display();
    }
  }
    // Display Countdown timer
    countDownTimer();
}

  // Displays the player controlled bee
function displayPlayerBee() {
  // The bee will stick to the mouse position
  playerBee.x = mouseX;
  playerBee.y = mouseY;

  // The Bee will look slightly redder than the other bees

  push();
  // Wings on either side
  fill(255, 255, 255);
  noStroke();
  ellipse(playerBee.x - playerBee.size / 2, playerBee.y, playerBee.size / 2);
  ellipse(playerBee.x + playerBee.size / 2, playerBee.y, playerBee.size / 2);
  pop();

  // Body
  push();
  fill(255, 225, 50);
  noStroke();
  ellipse(playerBee.x, playerBee.y, playerBee.size);
  pop();

  // Eyes
  push();
  fill(0, 0, 0);
  noStroke();
  ellipse(playerBee.x - playerBee.size / 10, playerBee.y, playerBee.size / 10);
  ellipse(playerBee.x + playerBee.size / 10, playerBee.y, playerBee.size / 10);
  pop();
}

// NEW! mousePressed() calls the equivalent mousePressed() method on every flower
function mousePressed() {

  if (state === `title`) {  // If it is the title screen a click will start the simulation
    state = `simulation`;
  }

  // Loop through every flower in the garden
  for (let i = 0; i < garden.flowers.length; i++) {
    // Get the current flower in the loop
    let flower = garden.flowers[i];
    // Call the flower's mousePressed() method
    flower.mousePressed();
  }
}
