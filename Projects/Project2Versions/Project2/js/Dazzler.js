class Dazzler {

  constructor() {
    this.x = random(0, width);
    this.y = random(0, height);
    this.vx = 0;
    this.vy = 0;
    this.tx = random(0, 3);
    this.ty = random(7, 10);
    this.size = random(1, 5);
    this.speed = map(this.size, 1, 5, 1, 0.6);
    this.particleColor = {
      r: 255,
      g: 250,
      b: 171,
      a: 2
    };
  }

  move() {
    this.tx = this.tx + 0.002;  // Movement code is based on Automated Movement lecture notes
    this.ty = this.ty + 0.002;

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

reveal() {
  let d = dist(this.x, this.y, mouseX, mouseY);
  this.particleColor = {
    // r: 255,
    // g: 250,
    // b: 171,
    r: map(d, 400, 0, 245, 255),
    g: map(d, 400, 0, 245, 120),
    b: map(d, 400, 0, 220, 120),
    a: map(d, 400, 0, 0, 8)
  };
}

  display() {
    push();
    strokeWeight(0.3);
    stroke(this.particleColor.r, this.particleColor.g, this.particleColor.b, this.particleColor.a * 4.5);
    fill(this.particleColor.r, this.particleColor.g, this.particleColor.b, this.particleColor.a);
    ellipse(this.x,this.y,this.size);
    pop();
  }
}
