class Particle {

  constructor() {
    this.x = random(0, width);
    this.y = random(0, height);
    this.vx = 0;
    this.vy = 0;
    this.speed = 5;
    this.jitteriness = 0.1;
    this.size = random(20, 100);
    this.particleColor = {
      r: random(100, 255),
      g: random(100, 255),
      b: random(100, 255),
      a: 50
    };
  }

  move() {
    let r = random(0, 1);
    if (r < this.jitteriness) {
      this.vx = random(-this.speed, this.speed);
      this.vy = random(-this.speed, this.speed);
    }
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

  display() {
    push();
    strokeWeight(0);
    fill(this.particleColor.r, this.particleColor.g, this.particleColor.b, this.particleColor.a);
    ellipse(this.x,this.y,this.size);
    pop();
  }
}
