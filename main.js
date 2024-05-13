// TYPE OF GAME BUTTON:
const typeGameButton = document.querySelector("#type_game");
typeGameButton.addEventListener("change", typeGameChoose);

// NUMBER OF GAME:
const gamesNumberDisplay = document.querySelector("#games_number");
let gamesNumber = 0;
gamesNumberDisplay.textContent = gamesNumber;

// SCORE:
let redScore = 0;
let blueScore = 0;
const redScoreDisplay = document.querySelector("#redScoreDisplay");
const blueScoreDisplay = document.querySelector("#blueScoreDisplay");

// RESTART GAME:
const restartButton = document.querySelector("#restart");
restartButton.addEventListener("click", restart);
function restart() {
    for (let i = 0; i < gameBoxes.length; i++) {
        gameBoxes[i].style.backgroundImage = "";
    }
    endGameDisplay.style.display = "none";
    round = 0;
    redScore = 0;
    blueScore = 0;
    gamesNumber = 0;
    gamesNumberDisplay.textContent = gamesNumber;
    redScoreDisplay.textContent = redScore;
    blueScoreDisplay.textContent = blueScore;
    playerSelection = true;
}

// RELOAD PLAYGROUND:
function reloadPlayground() {
    for (let i = 0; i < gameBoxes.length; i++) {
        gameBoxes[i].style.backgroundImage = "";
    }
    endGameDisplay.style.display = "none";
    round = 0;
}

// END GAME DISPLAY:
const endGameDisplay = document.querySelector("#alertWins");
const buttonContinue = document.querySelector("#continue");
const winningPlayer = document.querySelector("#winningPlayer");
buttonContinue.addEventListener("click", reloadPlayground);
endGameDisplay.style.display = "none";

// ROUND:
let round = 0;
let playerSelection = true;

// PLAYGROUND:
const gameBoxes = document.querySelectorAll(".box");

// WINNING COMBOS:
const l1 = document.querySelectorAll("#l1c1, #l1c2, #l1c3");
const l2 = document.querySelectorAll("#l2c1, #l2c2, #l2c3");
const l3 = document.querySelectorAll("#l3c1, #l3c2, #l3c3");
const c1 = document.querySelectorAll("#l1c1, #l2c1, #l3c1");
const c2 = document.querySelectorAll("#l1c2, #l2c2, #l3c2");
const c3 = document.querySelectorAll("#l1c3, #l2c3, #l3c3");
const d1 = document.querySelectorAll("#l1c1, #l2c2, #l3c3");
const d2 = document.querySelectorAll("#l1c3, #l2c2, #l3c1");

// END GAME FUNCTION:
function endGame() {
    const winningCombos = [l1, l2, l3, c1, c2, c3, d1, d2];
    for (let i = 0; i < winningCombos.length; i++) {
        if (
            winningCombos[i][0].style.backgroundImage == 'url("img/cross.svg")' &&
            winningCombos[i][1].style.backgroundImage == 'url("img/cross.svg")' &&
            winningCombos[i][2].style.backgroundImage == 'url("img/cross.svg")'
        ) {
            endGameDisplay.style.display = "flex";
            winningPlayer.textContent = "Red";
            playerSelection = true;
            redScore++;
            gamesNumber++;
        } 
        else if (
            winningCombos[i][0].style.backgroundImage == 'url("img/circle.svg")' &&
            winningCombos[i][1].style.backgroundImage == 'url("img/circle.svg")' &&
            winningCombos[i][2].style.backgroundImage == 'url("img/circle.svg")'
        ) {
            endGameDisplay.style.display = "flex";
            winningPlayer.textContent = "Blue";
            playerSelection = true;
            blueScore++;
            gamesNumber++;
        } else if (round == 9) {
            endGameDisplay.style.display = "flex";
            winningPlayer.textContent = "No";
            gamesNumber++;
        }
    gamesNumberDisplay.textContent = gamesNumber;
    redScoreDisplay.textContent = redScore;
    blueScoreDisplay.textContent = blueScore;
    }
};

// TYPE OF GAME FUNCTION:
function typeGameChoose() {
    console.log(typeGameButton.value);
    restart();
    if (typeGameButton.value == "playerVsPlayer") {
        for (let i = 0; i < gameBoxes.length; i++) {
            gameBoxes[i].removeEventListener("click", playerAgainstComputer);
            gameBoxes[i].addEventListener("click", playerVsPlayer);
        };
    } else if (typeGameButton.value == "playerVsComputer") {
        if (round <= 9) {
            if (playerSelection == true) {
                for (let i = 0; i < gameBoxes.length; i++) {
                    gameBoxes[i].removeEventListener("click", playerVsPlayer);
                    gameBoxes[i].addEventListener("click", playerAgainstComputer);                    
                }
                
            }
        }
    };
};

function playerVsPlayer(event) {
    if (event.target.style.backgroundImage == false) {
        if (playerSelection == true) {
            event.target.style.backgroundImage = "url(img/cross.svg)";
            playerSelection = false;
            round++;
            endGame();
        } else {
            event.target.style.backgroundImage = "url(img/circle.svg)";
            playerSelection = true;
            round++;
            endGame();
        };
    }
}

function playerAgainstComputer(event) {
    if (event.target.style.backgroundImage == false) {
        event.target.style.backgroundImage = "url(img/cross.svg)";
        playerSelection = false;
        round++;
        endGame();
        if (playerSelection == false) {
            computerPlay();
        };
    }
}

// MOVE COMPUTER (BLUE):
function computerPlay() {
    const moveComputer = Math.floor(Math.random() * gameBoxes.length);
    if (gameBoxes[moveComputer].style.backgroundImage == false) {
    gameBoxes[moveComputer].style.backgroundImage = "url(img/circle.svg)";
    playerSelection = true;
    round++;
    endGame();
    } else {
        computerPlay();
    }
};