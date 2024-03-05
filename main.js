
{
    // const buttonStartRestart = document.getElementById("startRestart");
    // buttonStartRestart.addEventListener("click", chooseTeam);

    // console.log(buttonStartRestart);

    // const chooseTeam = prompt("Choose your team : Red or Blue");
    // if (chooseTeam.toLowerCase == "red") {

    // }

    // function startRestart(buttonStartRestart) {
        
    // };

    // console.log(buttonStartRestart);
}

// FONCION TOUR
// 9 tours de jeu max
// Chacun son tour (joueurs = red & blue)
// Les indices 1, 3, 5, 7, 9 correspondent à un joueur sinon ils correspondent à l'autre -> condition

const gameTurns = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let i = 0; i < gameTurns.length; i++) {
    if (gameTurns = gameTurns[0]) {
        const gameBoxes = document.querySelectorAll(".box");
        for (let i = 0; i < gameBoxes.length; i++) {
            gameBoxes[i].addEventListener("click", function() {
                gameBoxes[i].style.backgroundImage = "url(img/circle.svg)";
            })
        }
    } else if (gameTurns = gameTurns[1]) {
        const gameBoxes = document.querySelectorAll(".box");
        for (let i = 0; i < gameBoxes.length; i++) {
            gameBoxes[i].addEventListener("click", function() {
                gameBoxes[i].style.backgroundImage = "url(img/cross.svg)";
            })
        }
    }
}



// const gameBoxes = document.querySelectorAll(".box");
// for (let i = 0; i < gameBoxes.length; i++) {
//     gameBoxes[i].addEventListener("click", function() {
//         gameBoxes[i].style.backgroundImage = "url(img/circle.svg)";
//     })
// };

// console.log(gameBoxes);

{
    // const cross = document.createElement("img");
    // cross.src = "img/cross.svg";

    // const circle = document.createElement("img");
    // circle.src = "img/circle.svg";

    // const pieces = [cross, circle];

    // gameBoxes[i].addEventListener("click", function() {
    //     gameBoxes[i].appendChild(pieces);
    // })
}

{
    // const circle = ;
    // const cross = ;

    // boxL1c1.addEventListener("click", function() {
    //     document.getElementById("l1c1").style.backgroundImage = "url(img/cross.svg)";
    // })

    // boxL1c2.addEventListenr("click", function() {
    //     boxL1c2.appendChild(circle);
    // })

    // let pieces = gameBoxes.appendChild(cross);

    // const gameCase = document.getElementsByClassName("case");
    // console.log(gameCase);
}