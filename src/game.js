class Game {
  constructor(gameScreen) {
    this.canvas = null;
    this.ctx = null;
    this.swallows = [];
    this.coconuts = [];
    this.knight = null;
    this.gameIsOver = false;
    this.gameScreen = gameScreen;
    this.score = 0;
    this.lostCoconuts = undefined; //this.livesElement
    this.yourCoconuts = undefined; //this.scoreElement
  }

  start() {
    this.lostCoconuts = this.gameScreen.querySelector(".lives .value"); //this.livesElement
    this.yourCoconuts = this.gameScreen.querySelector(".score .value"); //this.scoreElement

    this.canvas = this.gameScreen.querySelector("canvas");
    this.ctx = this.canvas.getContext("2d");

    this.canvasContainer = this.gameScreen.querySelector(".canvas-container");
    this.containerWidth = this.canvasContainer.clientWidth;
    this.containerHeight = this.canvasContainer.clientHeight;
    this.canvas.setAttribute("width", this.containerWidth);
    this.canvas.setAttribute("height", this.containerHeight);

    this.knight = new Knight(this.canvas, 5); //this.player = new Player()

    function handleKeyDown(event) {
      if (event.key === "ArrowRight") this.knight.setDirection("right");
      else if (event.key === "ArrowLeft") this.knight.setDirection("left");
    }

    const boundHandleKeyDown = handleKeyDown.bind(this);
    document.body.addEventListener("keydown", boundHandleKeyDown);

    this.startLoop();
  }

  startLoop() {
    const loop = () => {
      if (this.coconuts.length < 10) {
        if (Math.random() > 0.98) {
          const randomY = Math.floor((this.canvas.width - 20) * Math.random());
          const newCoconut = new Coconut(this.canvas, randomY, 5);
          this.coconuts.push(newCoconut);
        }
      }
      if (this.swallows.length < 20) {
        if (Math.random() > 0.99) {
          const randomY = Math.floor((this.canvas.width - 150) * Math.random());
          const newSwallow = new Swallow(this.canvas, 5);
          this.swallows.push(newSwallow);
        }
      }
      this.checkCollisions();
      this.knight.updatePosition();
      this.knight.handleScreenCollision();
      this.swallows = this.swallows.filter((swallow) => {
        swallow.updatePosition();
        console.log(swallow);
        return swallow.isInsideScreen();
      });
      this.coconuts = this.coconuts.filter((coconut) => {
        coconut.updatePosition();
        return coconut.isInsideScreen();
      });

      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

      this.knight.draw();
      this.swallows.forEach((swallow) => {
        swallow.draw();
      });
      this.coconuts.forEach((coconut) => {
        coconut.draw();
      });

      if (!this.gameIsOver) {
        window.requestAnimationFrame(loop);
      }

      this.updateGameStats();
    };
    loop();
  }

  checkCollisions() {
    this.coconuts.forEach((coconut) => {
      if (this.knight.didCollide(coconut)) {
        this.knight.removeLife();
        console.log("lives", this.knight.lives);

        coconut.y = this.canvas.height;

        if (this.knight.lives === 0) {
          this.gameOver();
        }
      }
    });
  }

  gameOver() {
    this.gameIsOver = true;
    endGame(this.score);
  }

  updateGameStats() {
    this.score += 10;
    this.lostCoconuts.innerHTML = this.knight.lives;
    this.yourCoconuts.innerHTML = this.score;
  }
}
