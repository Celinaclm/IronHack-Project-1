let game;
let splashScreen;
let gameScreen;
let gameOverScreen;

//DOM
function buildDom(htmlString) {
  const tempDiv = document.createElement("div");
  tempDiv.innerHTML = htmlString;
  return tempDiv.children[0];
}

//splashScreen
function createSplashScreen() {
  splashScreen = buildDom(`
    <main>
        <h1><b>KNIGHT VS COCONUTS</b></h1>
        <button>START</button>
    </main>
`);

  document.body.appendChild(splashScreen);
  const startButton = splashScreen.querySelector("button");
  startButton.addEventListener("click", function () {
    startGame();//arrowfunction
  });
};

function removeSplashScreen() {
  splashScreen.remove();
};

//gameScreen
function createGameScreen() {
  gameScreen = buildDom(`
    <main class="game-container">
        <header>
            <div class="lives">
                <span class="label"><b>LOST COCONUTS</b></span>
                <span class="value"></span>
            </div>
            <div class="score">
                <span class="label"><b>YOUR COCONUTS</b></span>
                <Span class="value"></Span>
            </div>
        </header>
        <div class="canvas-container">
            <canvas></canvas>
        </div>
    </main>
`);
document.body.appendChild(gameScreen);
return gameScreen;
};

function removeGameScreen() {
  gameScreen.remove();
};

//gameOverScreen
function createGameOverScreen() {}
function removeGameOverScreen() {}

//Setting the game state - start or game over
function startGame() {
  removeSplashScreen();
  createGameScreen();

  game = new Game(gameScreen);
  game.start();
};

function endGame(score) {}

//Protection to run in the order correctly
window.addEventListener("load", createSplashScreen);
