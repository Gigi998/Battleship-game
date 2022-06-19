import "../scss/main.scss";
import { ships } from "./ships";
import {domElements} from "./DOM";

//List of boat positions
let gridPositions = []

//2D array 
for(let i = 0;  i <10; i++){
    gridPositions[i] = [];
    for(let j = 0;  j < 10; j++){
        gridPositions[i][j] = "-"
    }
};

// Game board factory function
const gameBoard = () => {

    const renderGrid = grid => {
        for(let i = 0; i < 100; i++){
            let cell = document.createElement("div");
            cell.id =  "cell" + i;
            cell.classList.add("cells")
            grid.appendChild(cell)
        }
    }
    
    const renderBoatButtons = () => {
        domElements.boatsButtonsEl.style.display = "block";
    }

    return{renderGrid, renderBoatButtons}
}

// Making game object and rendering grid
let game = gameBoard();
game.renderGrid(domElements.yourGrid);
game.renderGrid(domElements.computerGrid);

// Rendering boats
domElements.startButtonEl.addEventListener("click", game.renderBoatButtons)

// Ship objects
const b1 = ships(5, false, false);
const b2 = ships(4, false, false);
const b3 = ships(3, false, false);

const placeBoat = (length) => {
    domElements.yourGrid.onclick = function(event){
        let target = event.target;
        let clickedPosition = target.id
        let clickedPositionId = clickedPosition.slice(4, 6)
        let clikedPositionInt = parseInt(clickedPositionId);
        for(let i = 0; i < length; i++){
            target.style.background = "green";
            target = document.querySelector("#cell" + clikedPositionInt)
            clikedPositionInt += 10;
        }
    domElements.boat1Button.removeEventListener("click", placeBoat)
    }
}



domElements.boat1Button.addEventListener("click", placeBoat)
domElements.boat2Button.addEventListener("click", placeBoat)
domElements.boat3Button.addEventListener("click", placeBoat)



