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
//        <img id="knight" src="img/knight.png" alt="knight">
function createSplashScreen() {
  splashScreen = buildDom(`
    <main>
        <h1><b>KNIGHT VS COCONUTS</b></h1>
        <button>START</button>
    </main>
`);

  document.body.appendChild(splashScreen);
  const startButton = splashScreen.querySelector("button");
  startButton.addEventListener("click", startGame);
}

function removeSplashScreen() {
  splashScreen.remove();
}

//gameScreen
function createGameScreen() {
  gameScreen = buildDom(`
    <main class="game container">
        <header id="lives-score">
            <div class="lives">
                <span class="label"><b>LIVES</b></span>
                <span class="value"></span>
            </div>
            <div class="score">
                <span class="label"><b>SCORE</b></span>
                <span class="value"></span>
            </div>
            <img id="palmtree" src="img/palmtree.png" alt="palmtree">
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
function createGameOverScreen(score) {
  gameOverScreen = buildDom(`
  <main>
      <h1>SORRY M'LORD<br>YOU HAVE BEEN HIT BY TOO MANY COCONUTS!</h1>
      <p><b>FINAL SCORE </b><span>${score}</span> </p>
      <button>Restart</button>
  </main>
  `);
  const button = gameOverScreen.querySelector("button");
  button.addEventListener("click", startGame);

  document.body.appendChild(gameOverScreen);
};

function removeGameOverScreen() {
  gameOverScreen.remove();
};

//Setting the game state - start or game over
function startGame() {
  removeSplashScreen();
  if(gameOverScreen){
    removeGameOverScreen();
  } createGameScreen();

  game = new Game(gameScreen);
  game.start();
};

function endGame(score) {
  removeGameScreen();
  createGameOverScreen(score);
};

//Protection to run in the order correctly
window.addEventListener("load", createSplashScreen);
