export const domElements = (() => {
    //Player and computer grid
    let yourGrid = document.querySelector(".your-grid");
    let computerGrid = document.querySelector(".computer-grid");

    // Button elemnts
    let startButtonEl = document.querySelector(".start-button");
    let boatsButtonsEl = document.querySelector(".boat-buttons");
    let boat1Button = document.querySelector(".boat1");
    let boat2Button = document.querySelector(".boat2");
    let boat3Button = document.querySelector(".boat3");
    
    return{
        yourGrid, computerGrid, startButtonEl, boatsButtonsEl, boat1Button, boat2Button, boat3Button

    }
})()