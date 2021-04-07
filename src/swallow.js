//Enemy
class Swallow {
    constructor(canvas, positionY, speed){
        this.canvas = canvas;
        this.ctx = this.canvas.getContext("2d");

        this.size = 70;
        this.y = 70;
        this.x = canvas.width//swallow position
        this.image = document.createElement("img");
        this.image.src = "img/twoSwallows.png";
        this.speed = speed;
    }

    draw(){
        this.ctx.drawImage(this.image, this.x, this.y, this.size, this.size);
    }

    updatePosition(){
        this.x -= this.speed;
    }

    isInsideScreen(){
        const swallowRight = this.x + this.size;
        const screenLeft = this.canvas;
        const isInside = swallowRight > screenLeft;
        return isInside;
    }
}
