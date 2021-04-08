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
/* */
//splashScreen
function createSplashScreen() {
  splashScreen = buildDom(`
    <main class="main1">
        <h1>KNIGHT VS COCONUTS</h1>
        <p class="rabbit">coming soon...</p>
        <p class="rabbit">expansion <span>Killer Rabbit</span></p>
        <div><button id="start-button" onClick="playMusic()">START</button></div>
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
                <span class="label"><b>. . . LIVES</b></span>
                <span class="value"></span>
            </div>
            <div class="score">
                <span class="label"><b>. . . SCORE</b></span>
                <span class="value"></span>
            </div>
            <button id="play" onClick="playMusic()"><b>GET START THE MUSIC!</b></button>
            <button id="stop" onClick="stopMusic()"><b>SHUT UP!</b></button>
          </div>
            <img id="palmtree" src="img/palmtree.png" alt="palmtree">
        </header>
        <div class="canvas-container">
            <canvas></canvas>
        </div>
        <div id="despertador">
    </main>
`);
  document.body.appendChild(gameScreen);
  return gameScreen;
}

let audio = new Audio("audio/alexander_nakarada_superepic.mp3");
let audioGameOver = new Audio("audio/lesion_x_bad_feelings_cut.mp3");

function playMusic(){
  audio.currentTime = 0;
  audio.volume = 0.1;
  audio.play();
}

function playFinalMusic(){
  audioGameOver.currentTime = 0;
  audioGameOver.volume = 0.3;
  audioGameOver.play();
}

function stopMusic(){
  audio.pause();
  audioGameOver.pause();
}

function removeGameScreen() {
  gameScreen.remove();
}

//gameOverScreen
function createGameOverScreen(score) {
  gameOverScreen = buildDom(`
  <main class="main2">
      <h2>SORRY M'LORD</h2>
      <p>YOU HAVE BEEN HIT BY TOO MANY COCONUTS!</p>
      <p><b>FINAL SCORE </b><span>${score}</span> </p>
      <div><button id="end-button">TRY AGAIN</button></div>
  </main>
  `);
  const button = gameOverScreen.querySelector("button");
  button.addEventListener("click", startGame);

  document.body.appendChild(gameOverScreen);
}

function removeGameOverScreen() {
  gameOverScreen.remove();
  stopMusic();
}

//Setting the game state - start or game over
function startGame() {
  removeSplashScreen();
  if (gameOverScreen) {
    removeGameOverScreen();
    playMusic();
  }
  createGameScreen();

  game = new Game(gameScreen);
  game.start();
}

function endGame(score) {
  removeGameScreen();
  stopMusic();
  createGameOverScreen(score);
  playFinalMusic();
}

//Protection to run in the order correctly
window.addEventListener("load", createSplashScreen);

