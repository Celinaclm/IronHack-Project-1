//Enemy2
class Coconut{
    constructor(canvas, positionY, speed){
        this.canvas = canvas;
        this.ctx = this.canvas.getContext("2d");

        this.size = 50;
        this.y = 70;//swallow position
        this.x = positionY//swallow position
        this.image = document.createElement("img");
        this.image.src = "img/coconuts.png";
        this.speed = speed;
    }

    draw(){
        this.ctx.drawImage(this.image, this.x, this.y, this.size, this.size);
//        this.ctx.fillStyle = "#FF6F27";
//        this.ctx.fillRect(this.x, this.y, this.size, this.size)
    }

    updatePosition(){
        this.y += this.speed;    
    }

    isInsideScreen(){
        const coconutTop = this.y; // enemyRight =this.x + this.size;
        const screenBottom = this.canvas.height;
        const isInside = coconutTop <  screenBottom;
        return isInside; //return this.x > 0;
    }
}