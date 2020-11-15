class Entity {

  constructor(x, y, vx, vy) {
    this.x = x;
    this.y = y;
    this.vx = 0;
    this.vy = 0;
    this.speed = undefined;
    this.jitteriness = undefined;
    this.width = undefined;
    this.height = undefined;
  }

  move() {
    this.x += this.vx;
    this.y += this.vy;
  }

  wrap() {
   if (this.x > width) {
     this.x -= width;
   }
 }

  display() {
  }
}
