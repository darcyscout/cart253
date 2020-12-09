class Bubbler {

  constructor() {
    this.x = random(0, width);
    this.y = random(0, height);
    this.vx = 0;
    this.vy = 0;
    this.tx = random(0, 3);
    this.ty = random(7, 10);
    this.size = random(20, 80);
    this.speed = map(this.size, 20, 80, 3, 0.5);
    this.particleColor = {
      r: 171,
      g: 250,
      b: 255,
      a: random(5, 10)
    };
  }

  move() {
    this.tx = this.tx + 0.005;  // Movement code is based on Automated Movement lecture notes
    this.ty = this.ty + 0.005;

    let noiseX = noise(this.tx);
    let noiseY = noise(this.ty);

    this.vx = map(noiseX, 0, 1, -this.speed, this.speed);
    this.vy = map(noiseY, 0, 1, -this.speed, this.speed); // Automated Movement code ends here

    this.x = this.x + this.vx;
    this.y = this.y + this.vy;

    if (this.x > width) {
      this.x -= width;
    } else if (this.x < 0) {
      this.x += width;
    } else if (this.y > height) {
      this.y -= height;
    } else if (this.y < 0) {
      this.y += height;
    }
  }

  // link(puffer) {
  //   let d = dist(this.x, this.y, puffer.x, puffer.y);
  //     if (d < (this.size / 2) + (puffer.displaySize / 2)) {
  //       this.particleColor.r = random(120, 255);
  //       this.particleColor.g = random(120, 255);
  //       this.particleColor.b = random(120, 255);
  //     }   else {
  //       this.particleColor.r = 171;
  //       this.particleColor.g = 250;
  //       this.particleColor.b = 255;
  //     }
  // }

  display() {
    this.size = constrain(this.size, 20, 80);
    push();
    strokeWeight(0.3);
    stroke(this.particleColor.r, this.particleColor.g, this.particleColor.b, this.particleColor.a * 7.5);
    fill(this.particleColor.r, this.particleColor.g, this.particleColor.b, this.particleColor.a);
    ellipse(this.x,this.y,this.size);
    pop();
  }
}
