"use strict"

let space = {
  particles: [],
  numParticles: 100,
  spaceColor: {
    r: 0,
    g: 0,
    b: 0,
    a: 100
  }
};

function setup() {
  createCanvas(windowWidth, windowHeight);

  for (let i = 0; i < space.numParticles; i++) {
    let particle = new Particle();
    space.particles.push(particle);
  }
}

function draw() {
  background(space.spaceColor.r, space.spaceColor.g, space.spaceColor.b, space.spaceColor.a);

  for (let i = 0; i < space.particles.length; i++) {
    let particle = space.particles[i];
    particle.display();
    particle.move();
  }
}
