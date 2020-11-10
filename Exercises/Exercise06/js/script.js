// I want to create different sound signatures for each of my particles in my fianl project that relates to their shape/what they are doing.

"use strict";

let oscillator;
let oscillator2;

function setup() {
  createCanvas(windowWidth, windowHeight);
  userStartAudio();

  oscillator = new p5.Oscillator(440, `square`);
  oscillator.amp(0.13);

  oscillator2 = new p5.Oscillator(440, `sawtooth`);
  oscillator2.amp(0.16);
}

function draw() {
  background(0);
  ellipse(width/2,height/2,mouseX,mouseY);

  let newFreq = map(mouseY, height, 0, 0, 440);
  oscillator.freq(newFreq);

  let newFreq2 = map(mouseX, width, 0, 0, 440);
  oscillator2.freq(newFreq2);
}

function mousePressed() {
  oscillator.start();
  oscillator2.start();
}
