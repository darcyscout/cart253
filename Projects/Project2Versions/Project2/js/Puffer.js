class Puffer {

  constructor() {
    this.x = random(0, width);
    this.y = random(0, height);
    this.vx = 0;
    this.vy = 0;
    this.tx = random(0, 3);
    this.ty = random(7, 10);
    this.speed = random(2, 3);
    this.displaySize = 0;
    this.minSize = random(27, 33);
    this.maxSize = random(this.minSize * 2.7, this.minSize * 3.6);
    this.spikeLength = 0;
    this.minSpikeLength = this.minSize / 3;
    this.maxSpikeLength = this.maxSize / 1.35;
    this.spikeRotation = {
      r1: random(0, 360),
      r2: random(0, 360),
      r3: random(0, 360)
    }
    this.displayRotation = 1;
    this.pufferColor = {
      r: 245,
      g: 245,
      b: 220,
      a: 50
    };
    this.increment = 0; // Noise Variable
    this.incrementChange = random(0.003, 0.007); // Noise Variable
    this.waveLength = 0; // Noise Variable
  }

  move() {
    this.tx = this.tx + 0.025; // Movement code is based on Automated Movement lecture notes
    this.ty = this.ty + 0.025;

    let noiseX = noise(this.tx);
    let noiseY = noise(this.ty);

    this.vx = map(noiseX, 0, 1, -this.speed, this.speed);
    this.vy = map(noiseY, 0, 1, -this.speed, this.speed); // Automated Movement code ends here

    this.x = this.x + this.vx;
    this.y = this.y + this.vy;

    if (this.x > width) { // Position wraps around canvas
      this.x -= width;
    } else if (this.x < 0) {
      this.x += width;
    } else if (this.y > height) {
      this.y -= height;
    } else if (this.y < 0) {
      this.y += height;
    }
  }

  puff() { // Becomes Aggressive when mouse is close to it
    let d = dist(this.x, this.y, mouseX, mouseY);
    this.pufferColor = {
      r: map(d, 300, 0, 245, 255),
      g: map(d, 300, 0, 245, 120),
      b: map(d, 300, 0, 220, 120),
      a: 50
    };

    this.waveLength = map(noise(this.increment), 0, 1, -1, 1);
    this.spikeRotation.r1 += this.waveLength * map(d, 200, 0, 3, 0);
    this.increment += this.incrementChange;

    this.waveLength = map(noise(this.increment), 0, 1, -1, 1);
    this.spikeRotation.r2 += this.waveLength * map(d, 200, 0, 6, 0);
    this.increment += this.incrementChange;

    this.waveLength = map(noise(this.increment), 0, 1, -1, 1);
    this.spikeRotation.r3 += this.waveLength * map(d, 200, 0, 2, 0);
    this.increment += this.incrementChange;

    if (d < 100 + this.displaySize) {
      this.displaySize += map(d, 300, 0, 0.1, 10);
      this.spikeLength += map(d, 300, 0, 0.4, 10);
    }
  }

  unPuff() { // Aggression lowers over time
    this.displaySize -= 1;
    this.displaySize = constrain(this.displaySize, this.minSize, this.maxSize);
    this.spikeLength -= 0.5;
    this.spikeLength = constrain(this.spikeLength, this.minSpikeLength, this.maxSpikeLength);
  }

  display() {
    push();
    strokeWeight(0);
    fill(this.pufferColor.r, this.pufferColor.g, this.pufferColor.b, this.pufferColor.a);
    ellipse(this.x, this.y, this.displaySize);
    pop();

    push(); // Spike 1
    strokeWeight(1);
    stroke(255, 50);
    translate(this.x, this.y);
    rotate(this.displayRotation + this.spikeRotation.r1);
    line(0, -this.spikeLength, 0, this.spikeLength);
    pop();

    push(); // Spike 2
    strokeWeight(1);
    stroke(255, 50);
    translate(this.x, this.y);
    rotate(this.displayRotation + this.spikeRotation.r2);
    line(0, -this.spikeLength, 0, this.spikeLength);
    pop();

    push(); // Spike 3
    strokeWeight(1);
    stroke(255, 50);
    translate(this.x, this.y);
    rotate(this.displayRotation + this.spikeRotation.r3);
    line(0, -this.spikeLength, 0, this.spikeLength);
    pop();

  }
}
