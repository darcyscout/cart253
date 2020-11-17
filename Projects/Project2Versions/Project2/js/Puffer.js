class Puffer {

  constructor() {
    this.x = random(0, width);
    this.y = random(0, height);
    this.vx = 0;
    this.vy = 0;
    this.speed = 3;
    this.jitteriness = 0.1;
    this.size = 30;
    this.spikeLength = 10;
    this.pufferColor = {
      r: 245,
      g: 245,
      b: 220,
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

  puff() {
    let d = dist(this.x, this.y, mouseX, mouseY);
    this.pufferColor = {
      r: map(d,300,0,245,255),
      g: map(d,300,0,245,120),
      b: map(d,300,0,220,120),
      a: 50
    };
    if (d < 100 + this.size) {
      this.size += map(d,300,0,0.1,10);
      this.spikeLength += map(d,300,0,0.4,10);
    }





    // if (d < this.size * 2) {
    //   this.pufferColor = {
    //     r: 255,
    //     g: 120,
    //     b: 120,
    //     a: 50
    //   }
    // } else {
    //   this.pufferColor = {
    //     r: 245,
    //     g: 245,
    //     b: 220,
    //     a: 50
    //   }
    // }
  }

  unPuff() {
    this.size -= 1;
    this.size = constrain(this.size, 30, 100);
    this.spikeLength -= 0.5;
    this.spikeLength = constrain(this.spikeLength, 10, 70);
  }

  display() {
      push();
    strokeWeight(0);
    fill(this.pufferColor.r, this.pufferColor.g, this.pufferColor.b, this.pufferColor.a);
    ellipse(this.x,this.y,this.size);
      pop();

      push();
    strokeWeight(1);
    stroke(255,50);
    translate(this.x,this.y);
    line(0,-this.spikeLength,0,this.spikeLength);
      pop();

      push();
    strokeWeight(1);
    stroke(255,50);
    translate(this.x,this.y);
    line(-this.spikeLength,0,this.spikeLength,0);
      pop();
  }
}
