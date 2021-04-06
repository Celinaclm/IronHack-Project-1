class Game{
    constructor(gameScreen){
        this.canvas = null;
        this.ctx = null;
        this.swallows =[];
        this.coconuts =[];
        this.knight = null;
        this.gameIsOver = false;
        this.gameScreen = gameScreen;
        this.resultCoconuts = 0;//this.score
        this.lostCoconuts = undefined;//this.livesElement
        this.yourCoconuts = undefined;//this.scoreElement
    }

    start(){
        this.lostCoconuts = this.gameScreen.querySelector(".lives .value");//this.livesElement
        this.yourCoconuts = this.gameScreen.querySelector(".score .value");//this.scoreElement

        this.canvas = this.gameScreen.querySelector("canvas");
        this.ctx = this.canvas.getContext("2d");

        this.canvasContainer = this.gameScreen.querySelector(".canvas-container");
        this.containerWidth = this.canvasContainer.clientWidth;
        this.containerHeight = this.canvasContainer.clientHeight;
        this.canvas.setAttribute("width", this.containerWidth);
        this.canvas.setAttribute("height", this.containerHeight);

        this.knight = new Knight(this.canvas, 5);//this.player = new Player()

        document.body.addEventListener("keydown", (event) => {
            if(event.key ==="ArrowRight") this.knight.setDirection("right");
            else if(event.key ==="ArrowLeft") this.knight.setDirection("left");
        });
        this.startLoop();
    }

    startLoop(){
        const loop = () => {
            if (this.coconuts.length < 10){
                if(Math.random() > 0,95){//if you want to increment difficulty, change 0,95 for (let) level
                    const randomY = this.Math.floor((this.canvas.width -20) * Math.random());
                    const newCoconut = new Coconut(this.canvas, randomY, 5);
                    this.coconuts.push(newCoconut);
                }
            }
            this.checkCollisions()
            this.knight.updatePosition();
            this.knight.handleScreenCollision();
        }
        this.coconuts = this.coconuts.filter((coconut) =>{
            coconut.updatePosition();
            return coconut.isInsideScreen();
        });
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.knight.draw();
        this.coconuts.forEach((coconut) => {
            coconut.draw();
        });
        if(!this.gameIsOver){
            window.requestAnimationFrame(loop);
        };
        window.requestAnimationFrame(loop);
    };

    checkCollisions(){
        this.coconuts.forEach((coconut) => {
            if(this.knight.didCollide(coconut)){
                this.knight.removeLife();
                console.log("lives", this.knight.lives);
                coconut.y = 0 - coconut.size;
                if(this.knight.lives === 0){
                    this.gameOver();
                }
            }
        });
    }

    gameOver(){}
    updateGameStats(){}
}
