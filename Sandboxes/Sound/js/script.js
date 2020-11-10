"use strict";

let barkSFX;
let peaks; // To store our array of peaks

function preload() {
  barkSFX = loadSound(`assets/sounds/bark.wav`);
}

function setup() {
  createCanvas(600, 600);
  userStartAudio();

  // Use getPeaks() to get the peaks in our sound file
  // We specify "width" as the size of the array of peaks
  // so that we can easily draw the waveform across the
  // width of the canvas, one piece of peak data per pixel
  peaks = barkSFX.getPeaks(width);
}

function draw() {
  background(0);

  // Display the peaks if the sound file is currently playing
  if (barkSFX.isPlaying()) {
    drawPeaks();
  }
}

// drawPeaks() runs through the array of peaks and graphs them
function drawPeaks() {
  push();
  stroke(255);
  // Run through every peak in the array
  for (let i = 0; i < peaks.length; i++) {
    // Get the current peak data
    let peak = peaks[i];
    // Map the data to a y position. The peak data is between -1 and 1
    // but we want to display it on the canvas, so we map to a number
    // between 0 and height
    let y = map(peak, -1, 1, 0, height);
    // Draw a line from the center of the canvas to the mapped peak value
    // with an x set to "i" because we're going through an array the
    // width of the canvas...
    line(i, height / 2, i, y);
  }
  pop();
}

function mousePressed() {
  barkSFX.play();
}
