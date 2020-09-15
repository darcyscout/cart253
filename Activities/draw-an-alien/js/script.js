/**************************************************
Template p5 project
Pippin Barr

Here is a description of this template p5 project.
**************************************************/

// setup()
//
// Description of setup() goes here.
function setup() {
  //  Create the background
createCanvas(700,700);
background(100,100,105);

// Making the Head
noStroke();

fill(120,140,130);
ellipse(350,300,150,200);

fill(140,160,130);
ellipse(350,200,175,175);

fill(0);
strokeWeight(2);
stroke(255);
ellipse(350,200,160,160);
noStroke();

fill(120,130,130);
ellipse(350,400,150,200);

fill(120,140,140);
ellipse(350,435,180,80);

fill(120,150,150);
ellipse(350,460,190,90);

fill(120,160,160);
ellipse(350,480,200,100);

fill(120,170,160);
ellipse(350,495,210,110);

fill(120,180,160);
ellipse(350,525,225,125);
// Making the eyes
noStroke();
// Whites of the eyes
fill(255);
ellipse(275,525,100,100);
ellipse(425,525,100,100);
// Colour of the eyes
fill(210,170,190);
ellipse(270,540,30,30);
ellipse(430,495,30,30);
// Pupils
strokeWeight(0.8);
stroke(255);
fill(0);
ellipse(268,544,10,10);
ellipse(431,486,10,10);

}

// draw()
//
// Description of draw() goes here.
function draw() {

}
