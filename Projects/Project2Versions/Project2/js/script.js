"use strict"

let space = {
  puffers: [],  // Particle Arrays
  bubblers: [],
  dazzlers: [], // Particle Arrays
  numPuffers: 30,     // Number of Particles by type
  numBubblers: 100,
  numDazzlers: 1000,  // Number of Particles by type
  spaceColor: {
    r: 0,
    g: 0,
    b: 0,
    a: 100
  }
};

function setup() {
  createCanvas(1200, 800);
  angleMode(DEGREES);

  for (let i = 0; i < space.numPuffers; i++) {    // Create Puffers
    let puffer = new Puffer();
    space.puffers.push(puffer);
  }

  for (let i = 0; i < space.numBubblers; i++) {   // Create Bubblers
    let bubbler = new Bubbler();
    space.bubblers.push(bubbler);
  }

  for (let i = 0; i < space.numDazzlers; i++) {   // Create Dazzlers
    let dazzler = new Dazzler();
    space.dazzlers.push(dazzler);
  }

}

function draw() {
  background(space.spaceColor.r, space.spaceColor.g, space.spaceColor.b, space.spaceColor.a);

  for (let i = 0; i < space.bubblers.length; i++) {
    let bubbler = space.bubblers[i];
    bubbler.move();

    // for (let j = 0; j < space.puffers.length; j++) {
    //   let puffer = space.puffers[j];
    //   bubbler.link(puffer);
    // }

    bubbler.display();
  }

  for (let i = 0; i < space.dazzlers.length; i++) {
    let dazzler = space.dazzlers[i];
    dazzler.move();
    dazzler.reveal();
    dazzler.display();
  }

  for (let i = 0; i < space.puffers.length; i++) {
    let puffer = space.puffers[i];
    puffer.move();
    puffer.puff();
    puffer.unPuff();
    puffer.display();
  }
}
