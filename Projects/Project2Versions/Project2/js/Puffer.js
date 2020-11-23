class Puffer {

  constructor() {
    this.x = random(0, width);
    this.y = random(0, height);
    this.vx = 0;
    this.vy = 0;
    this.speed = 3;
    this.jitteriness = 0.1;
    this.displaySize = 0;
    this.minSize = random(27,33);
    this.maxSize = random(this.minSize * 2.7, this.minSize * 3.6);
    this.spikeLength = 0;
    this.minSpikeLength = this.minSize/3;
    this.maxSpikeLength = this.maxSize/1.35;
    this.spikeRotation = {
      r1: 0,
      r2: 0,
      r3: 0
    }
    this.displayRotation = 1;
    this.pufferColor = {
      r: 245,
      g: 245,
      b: 220,
      a: 50
    };
    this.increment = 0;
    this.incrementChange = random(0.003, 0.007);
    this.waveLength = 0;
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

  puff() {
    let d = dist(this.x, this.y, mouseX, mouseY);
    this.pufferColor = {
      r: map(d,300,0,245,255),
      g: map(d,300,0,245,120),
      b: map(d,300,0,220,120),
      a: 50
    };

      this.waveLength = map(noise(this.increment),0,1,-1,1);
      this.spikeRotation.r1 += this.waveLength * map(d,200,0,3,0);
      this.increment += this.incrementChange;

      this.waveLength = map(noise(this.increment),0,1,-1,1);
      this.spikeRotation.r2 += this.waveLength * map(d,200,0,6,0);
      this.increment += this.incrementChange;

      this.waveLength = map(noise(this.increment),0,1,-1,1);
      this.spikeRotation.r3 += this.waveLength * map(d,200,0,2,0);
      this.increment += this.incrementChange;

    if (d < 100 + this.displaySize) {
      this.displaySize += map(d,300,0,0.1,10);
      this.spikeLength += map(d,300,0,0.4,10);
    }
  }

  unPuff() {
    this.displaySize -= 1;
    this.displaySize = constrain(this.displaySize, this.minSize, this.maxSize);
    this.spikeLength -= 0.5;
    this.spikeLength = constrain(this.spikeLength, this.minSpikeLength, this.maxSpikeLength);
  }

  display() {
      push();
    strokeWeight(0);
    fill(this.pufferColor.r, this.pufferColor.g, this.pufferColor.b, this.pufferColor.a);
    ellipse(this.x,this.y,this.displaySize);
      pop();

      push();
    strokeWeight(1);
    stroke(255,50);
    translate(this.x,this.y);
    rotate(this.displayRotation + this.spikeRotation.r1);
    line(0,-this.spikeLength,0,this.spikeLength);
      pop();

      push();
    strokeWeight(1);
    stroke(255,50);
    translate(this.x,this.y);
    rotate(this.displayRotation + this.spikeRotation.r2);
    line(0,-this.spikeLength,0,this.spikeLength);
      pop();

      push();
    strokeWeight(1);
    stroke(255,50);
    translate(this.x,this.y);
    rotate(this.displayRotation + this.spikeRotation.r3);
    line(0,-this.spikeLength,0,this.spikeLength);
      pop();

  }
}
