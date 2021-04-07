//Enemy
class Swallow {
    constructor(canvas, speed){
        this.canvas = canvas;
        this.ctx = this.canvas.getContext("2d");

        this.size = 150;
        this.y = 70;
        this.x = canvas.width
        this.image = document.createElement("img");
        this.image.src = "/img/twoSwallows.png";
        this.speed = speed;
    }

    draw(){
        this.ctx.drawImage(this.image, this.x, this.y, this.size, this.size);
    }
//TO DO: FIX X UPDATE
    updatePosition(){
        console.log(this.x, this.speed);
        this.x -= this.speed;
    }

    isInsideScreen(){
        const swallowRight = this.x + this.size;
        const screenLeft = this.canvas;
        const isInside = swallowRight > screenLeft;
        return isInside;
    }
}
