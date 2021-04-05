let game;
let splashScreen;
let gameScreen;
let gameOverScreen;

//DOM
function buildDom(htmlString) {
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = htmlString;
    return div.children[0];
};

//splashScreen
function createSplashScreen() {};
function removeSplashScreen(){};

//gameScreen
function createGameScreen(){};
function removeGameScreen(){};

//gameOverScreen
function createGameOverScreen(){};
function removeGameOverScreen(){};

//Setting the game state - start or game over
function startGame(){};
function endGame(score){};

//Protection to run in the order correctly
window.addEventListener("load", () => {
    let game = new Game();
});
