/**************************************************
Template p5 project
Pippin Barr

Here is a description of this template p5 project.
**************************************************/


/* Setting up 4 circle objects and a changeable background colour */
let bg = {
  r: 0,
  g: 0,
  b: 0
};

let circle1 = {
  x: 0,
  y: 250,
  size: 100,
  fill: 255,
  alpha: 200,
  speed: 0.157
};

let circle2 = {
  x: 500,
  y: 250,
  size: 80,
  r: 0,
  g: 255,
  b: 0,
  alpha: 200,
  speed: 0.157
};

let circle3 = {
  x: 250,
  y: 0,
  size: 60,
  r: 0,
  g: 0,
  b: 255,
  alpha: 200,
  speed: 0.157
};

let circle4 = {
  x: 250,
  y: 500,
  size: 40,
  fill: 150,
  alpha: 200,
  speed: 0.157
};

function setup() {
  createCanvas(500,500);
  noStroke();
}

function draw() {
background(bg.r,bg.g,bg.b);
bg.r = map(circle1.size,100,width,0,255);   // Map the background red colour to change with the circles' size
bg.g = map(mouseX, 0, width, 0, 255);       // Mouse X position is mapped to the background green tone
bg.b = map(mouseY, 0, height, 0, 255);      // Mouse Y position is mapped to the background blue tone
  // Circle 1
fill(circle1.fill, circle1.fill, circle1.fill, circle1.alpha);
ellipse(circle1.x,circle1.y,circle1.size,circle1.size);
circle1.x = circle1.x + circle1.speed; // Move the circle right
circle1.x = constrain(circle1.x, 0, width/2);
circle1.size = circle1.size + 0.25;   // Make the circle bigger
circle1.size = constrain(circle1.size, 0, width);
circle1.fill = circle1.fill - 0.18;   //  Change the circle colour from white to black over time
circle1.fill = constrain(circle1.fill, 0, 255);

  // Circle 2
  fill(circle2.r, circle2.g, circle2.b, circle2.alpha);
  ellipse(circle2.x,circle2.y,circle1.size*0.8,circle1.size*0.8);  // Change size along with circle1
  circle2.x = circle2.x - circle2.speed; // Move the circle left
  circle2.x = constrain(circle2.x, width/2, width);
  circle2.b = circle2.b + 0.18;          // Change colour from green to blue over time
  circle2.b = constrain(circle2.b, 0, 255);
  circle2.g = circle2.g - 0.18;
  circle2.g = constrain(circle2.g, 0, 255);

  // Circle 3
  fill(circle3.r, circle3.g, circle3.b, circle3.alpha);
  ellipse(circle3.x,circle3.y,circle1.size*0.6,circle1.size*0.6);
  circle3.y = circle3.y + circle3.speed; // Move the circle down
  circle3.y = constrain(circle3.y, 0, height/2);
  circle3.r = circle3.r + 0.18;         // Change colour from blue to red over time
  circle3.r = constrain(circle3.r, 0, 255);
  circle3.b = circle3.b - 0.18;
  circle3.b = constrain(circle3.b, 0, 255);

  // Circle 4
  fill(circle4.fill, circle4.fill, circle4.fill, circle4.alpha);
  ellipse(circle4.x,circle4.y,circle1.size*0.4,circle1.size*0.4);
  circle4.y = circle4.y - circle4.speed; // Move the circle up
  circle4.y = constrain(circle4.y, height/2, height);
  circle4.fill = circle4.fill + 0.07;    // Change colour from grey to white over time; reaching its brightest at the same time as the other circles
  circle4.fill = constrain(circle4.fill, 0, 255);

}
