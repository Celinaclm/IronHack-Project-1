//Enemy2
class Coconut{
    constructor(canvas, positionY, speed){
        this.canvas = canvas;
        this.ctx = this.canvas.getContext("2d");

        this.size = 50;
        this.y = this.canvas.height - this.canvas.height + 70;//swallow position
        this.x = positionY//swallow position

        this.speed = speed;
    }

    draw(){
        this.ctx.fillStyle = "#FF6F27";

        this.ctx.fillRect(this.x, this.y, this.size, this.size)
    }

    updatePosition(){
        this.y += this.speed;    
    }

    isInsideScreen(){
        const enemyLeft = this.x; // enemyRight =this.x + this.size;
        const screenRight = this.x.width;
        const isInside = enemyLeft <  screenRight;
        return isInside; //return this.x > 0;
    }
}