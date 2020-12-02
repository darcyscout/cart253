"use strict"

let space = {
  puffers: [],
  numPuffers: 5,
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

  for (let i = 0; i < space.numPuffers; i++) {
    let puffer = new Puffer();
    space.puffers.push(puffer);
  }
}

function draw() {
  background(space.spaceColor.r, space.spaceColor.g, space.spaceColor.b, space.spaceColor.a);

  for (let i = 0; i < space.puffers.length; i++) {
    let puffer = space.puffers[i];
    puffer.display();
    puffer.move();
    puffer.puff();
    puffer.unPuff();
  }
}
