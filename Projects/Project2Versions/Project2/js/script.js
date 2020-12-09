"use strict"

let space = {
  puffers: [], // Particle Arrays
  bubblers: [],
  dazzlers: [], // Particle Arrays
  numPuffers: 30, // Number of Particles by type
  numBubblers: 100,
  numDazzlers: 1000, // Number of Particles by type
  spaceColor: {
    r: 0,
    g: 0,
    b: 0,
    a: 100
  }
};

function setup() { // SETUP
  createCanvas(1200, 800);
  angleMode(DEGREES);

  for (let i = 0; i < space.numPuffers; i++) { // Create Puffers
    let puffer = new Puffer();
    space.puffers.push(puffer);
  }

  for (let i = 0; i < space.numBubblers; i++) { // Create Bubblers
    let bubbler = new Bubbler();
    space.bubblers.push(bubbler);
  }

  for (let i = 0; i < space.numDazzlers; i++) { // Create Dazzlers
    let dazzler = new Dazzler();
    space.dazzlers.push(dazzler);
  }
} // SETUP

function draw() { // DRAW
  background(space.spaceColor.r, space.spaceColor.g, space.spaceColor.b, space.spaceColor.a);

  for (let i = 0; i < space.bubblers.length; i++) { // Controls Bubblers
    let bubbler = space.bubblers[i];
    bubbler.move();
    bubbler.display();
  } // DRAW

  for (let i = 0; i < space.dazzlers.length; i++) { // Controls Dazzlers
    let dazzler = space.dazzlers[i];
    dazzler.move();
    dazzler.reveal(); // Gets revealed by mouse position
    dazzler.display();
  }

  for (let i = 0; i < space.puffers.length; i++) { // Controls Puffers
    let puffer = space.puffers[i];
    puffer.move();
    puffer.puff(); // Gets agitated by mouse position
    puffer.unPuff(); // Aggression lowers over time
    puffer.display();
  }
}
