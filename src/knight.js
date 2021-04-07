//Player
class Knight{
    constructor(canvas, lives){
        this.canvas = canvas;
        this.ctx = this.canvas.getContext("2d");

        this.lives = lives;//lost coconuts

        this.width = 120;
        this.height = 200;
        this.image = document.createElement("img");
        this.image.src = "/img/knight.png";
        this.x = canvas.width/2 - this.width/2;
        this.y = canvas.height - 290;

        this.direction = 0;
        this.speed = 5;
    }

    setDirection(direction){//x+1 right || x-1 left
        if(direction === "left") this.direction = -1;//up
        else if(direction === "right") this.direction = 1;//down
    }

    updatePosition(){
        this.x += this.direction * this.speed;//if it would be up and down it would be this.y
    }

    handleScreenCollision(){
        const screenLeft = 0;//screenTop
        const screenRight = this.canvas.width;//screenBottom = this.canvas.height

        const knightLeft = this.x; //playerTop = this.y
        const knightRight = this.x + this.width; //playerBottom = this.y + this.size

        if(knightRight >= screenRight) this.setDirection("left");
        else if(knightLeft <= screenLeft) this.setDirection("right");
    }

    removeLife(){
        this.lives -= 1;
    }

    draw(){
        this.ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
//        this.ctx.fillStyle = "#66D3FA";//change * sprite
//        this.ctx.fillRect(this.x, this.y, this.width, this.height)
    }

    didCollide(coconut){//coconut=enemy
        const knightTop = this.y;
        const knightBottom = this.y + this.height;
        const knightLeft = this.x
        const knightRight = this.x + this.width;

        const coconutTop = coconut.y;
        const coconutBottom = coconut.y + coconut.size;
        const coconutLeft = coconut.x
        const coconutRight = coconut.x + coconut.size;

        const crossLeft = coconutLeft <= knightRight &&  coconutLeft >= knightLeft;
        const crossRight = coconutRight <= knightLeft &&  coconutRight >= knightRight;
        const crossBottom = coconutBottom <= knightTop &&  coconutBottom >= knightBottom;
        const crossTop = coconutTop <= knightBottom &&  coconutTop >= knightTop;
        
        if((crossLeft || crossRight) && (crossTop || crossBottom)){
            return true;
        } else {
            return false;
        }
    }
}