//Enemy
class Swallow {
  constructor(canvas, positionY, speed) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext("2d");

    this.size = this.x = this.canvas.width; //fill
    this.y = positionY;
    this.speed = speed;
    
  }
}
