//TODO color change winnerscreen
//EXTRA add possibility to chose player amount
//EXTRA add possibility for custom user names
//EXTRA make it possible to look at scores after game is over
//EXTRA import rules to our page

//imports
import { Player } from "./player.js";
import { roll, resetDices, creatDices, toggleLocked } from "./roll.js";

//* variables
let players = [];
let dices = creatDices();
let querySelectors = [];
let lockFunctArray = [];
let diceFunctions = [];
let rollButton;
let playerNameElement;
let upperSubTotalElement;
let bonusElement;
let upperTotalElement;
let lowerTotalElement;
let grandTotalElement;
let diceButtons = [];
let roundNumber = 0;
let playerTurn = 0;
let currentPlayer = 0;
const playerAmount = 2;
const winScreen = document.querySelector("#playerWon");
const winner = document.querySelector("#winner");

//* assist functions
const setDiceImages = function () {
    for (let i = 0; i < dices.length; i++) {
        diceButtons[i].src = dices[i].getImage();
    }
};

const createListenerFunctionsUpperSection = function () {
    lockFunctArray[0] = function () {
        querySelectors[0].style.border = "2px red solid";
        players[currentPlayer].scoreBord.setAcesLocked();
        calculateUpperSection();
        ScoreboardButtonPress();
    };

    lockFunctArray[1] = function () {
        querySelectors[1].style.border = "2px red solid";
        players[currentPlayer].scoreBord.setTwosLocked();
        calculateUpperSection();
        ScoreboardButtonPress();
    };
    lockFunctArray[2] = function () {
        querySelectors[2].style.border = "2px red solid";
        players[currentPlayer].scoreBord.setThreesLocked();
        calculateUpperSection();
        ScoreboardButtonPress();
    };
    lockFunctArray[3] = function () {
        querySelectors[3].style.border = "2px red solid";
        players[currentPlayer].scoreBord.setFoursLocked();
        calculateUpperSection();
        ScoreboardButtonPress();
    };
    lockFunctArray[4] = function () {
        querySelectors[4].style.border = "2px red solid";
        players[currentPlayer].scoreBord.setFivesLocked();
        calculateUpperSection();
        ScoreboardButtonPress();
    };
    lockFunctArray[5] = function () {
        querySelectors[5].style.border = "2px red solid";
        players[currentPlayer].scoreBord.setSixesLocked();
        calculateUpperSection();
        ScoreboardButtonPress();
    };
};

const createListenerFunctionsLowerSection = function () {
    lockFunctArray[6] = function () {
        querySelectors[6].style.border = "2px red solid";
        players[currentPlayer].scoreBord.setThreeKindLocked();
        calculateLowerSection();
        ScoreboardButtonPress();
    };

    lockFunctArray[7] = function () {
        querySelectors[7].style.border = "2px red solid";
        players[currentPlayer].scoreBord.setFourKindLocked();
        calculateLowerSection();
        ScoreboardButtonPress();
    };

    lockFunctArray[8] = function () {
        querySelectors[8].style.border = "2px red solid";
        players[currentPlayer].scoreBord.setFullHouseLocked();
        calculateLowerSection();
        ScoreboardButtonPress();
    };
    lockFunctArray[9] = function () {
        querySelectors[9].style.border = "2px red solid";
        players[currentPlayer].scoreBord.setSmallStreetLocked();
        calculateLowerSection();
        ScoreboardButtonPress();
    };
    lockFunctArray[10] = function () {
        querySelectors[10].style.border = "2px red solid";
        players[currentPlayer].scoreBord.setLargeStreetLocked();
        calculateLowerSection();
        ScoreboardButtonPress();
    };

    lockFunctArray[11] = function () {
        querySelectors[11].style.border = "2px red solid";
        players[currentPlayer].scoreBord.setYathzeeLocked();
        calculateLowerSection();
        ScoreboardButtonPress();
    };
    lockFunctArray[12] = function () {
        querySelectors[12].style.border = "2px red solid";
        players[currentPlayer].scoreBord.setChangeLocked();
        calculateLowerSection();
        ScoreboardButtonPress();
    };
};

const createListenerFunctionsDices = function () {
    for (let i = 0; i < dices.length; i++) {
        diceFunctions[i] = function () {
            toggleLocked(dices[i]);
            placeDices();
        };
    }
};

const createListenerFunctions = function () {
    createListenerFunctionsUpperSection();
    createListenerFunctionsLowerSection();
    createListenerFunctionsDices();
};

const addEventListenersDices = function () {
    dices.forEach((dice) => {
        if (!dice.getHardLocked()) {
            diceButtons[dice.getId() - 1].addEventListener(
                "click",
                diceFunctions[dice.getId() - 1]
            );
        }
    });
};
const addEventListeners = function () {
    //*scoreboard
    //upper
    if (!players[currentPlayer].scoreBord.getAcesLocked()) {
        querySelectors[0].addEventListener("click", lockFunctArray[0]);
    }
    if (!players[currentPlayer].scoreBord.getTwosLocked()) {
        querySelectors[1].addEventListener("click", lockFunctArray[1]);
    }
    if (!players[currentPlayer].scoreBord.getThreesLocked()) {
        querySelectors[2].addEventListener("click", lockFunctArray[2]);
    }
    if (!players[currentPlayer].scoreBord.getFoursLocked()) {
        querySelectors[3].addEventListener("click", lockFunctArray[3]);
    }
    if (!players[currentPlayer].scoreBord.getFivesLocked()) {
        querySelectors[4].addEventListener("click", lockFunctArray[4]);
    }
    if (!players[currentPlayer].scoreBord.getSixesLocked()) {
        querySelectors[5].addEventListener("click", lockFunctArray[5]);
    }

    //lower
    if (!players[currentPlayer].scoreBord.getThreeKindLocked()) {
        querySelectors[6].addEventListener("click", lockFunctArray[6]);
    }
    if (!players[currentPlayer].scoreBord.getFourKindLocked()) {
        querySelectors[7].addEventListener("click", lockFunctArray[7]);
    }
    if (!players[currentPlayer].scoreBord.getFullHouseLocked()) {
        querySelectors[8].addEventListener("click", lockFunctArray[8]);
    }
    if (!players[currentPlayer].scoreBord.getSmallStreetLocked()) {
        querySelectors[9].addEventListener("click", lockFunctArray[9]);
    }
    if (!players[currentPlayer].scoreBord.getLargeStreetLocked()) {
        querySelectors[10].addEventListener("click", lockFunctArray[10]);
    }
    if (!players[currentPlayer].scoreBord.getYathzeeLocked()) {
        querySelectors[11].addEventListener("click", lockFunctArray[11]);
    }
    if (!players[currentPlayer].scoreBord.getChangeLocked()) {
        querySelectors[12].addEventListener("click", lockFunctArray[12]);
    }

    //last round
    if (playerTurn < 3) {
        //*Dices
        addEventListenersDices();

        //* Roll button
        rollButton.addEventListener("click", rollButtonPress);
    }
};

// function to calculate the uppersection of the scoreboard
const calculateUpperSection = function () {
    let sum = 0;
    let allFilled = true;
    if (players[currentPlayer].scoreBord.getAcesLocked()) {
        sum += players[currentPlayer].scoreBord.getAces();
    } else {
        allFilled = false;
    }
    if (players[currentPlayer].scoreBord.getTwosLocked()) {
        sum += players[currentPlayer].scoreBord.getTwos();
    } else {
        allFilled = false;
    }
    if (players[currentPlayer].scoreBord.getThreesLocked()) {
        sum += players[currentPlayer].scoreBord.getThrees();
    } else {
        allFilled = false;
    }
    if (players[currentPlayer].scoreBord.getFoursLocked()) {
        sum += players[currentPlayer].scoreBord.getFours();
    } else {
        allFilled = false;
    }
    if (players[currentPlayer].scoreBord.getFivesLocked()) {
        sum += players[currentPlayer].scoreBord.getFives();
    } else {
        allFilled = false;
    }
    if (players[currentPlayer].scoreBord.getSixesLocked()) {
        sum += players[currentPlayer].scoreBord.getSixes();
    } else {
        allFilled = false;
    }

    //set upper value (subtotal)
    players[currentPlayer].scoreBord.setUpperSubTotal(sum);
    upperSubTotalElement.innerHTML =
        players[currentPlayer].scoreBord.getUpperSubTotal();
    //set bonus
    if (sum >= 63) {
        players[currentPlayer].scoreBord.setBonus();
        bonusElement.innerHTML = players[currentPlayer].scoreBord.getBonus();
    }
    //get upper total
    if (allFilled) {
        players[currentPlayer].scoreBord.setUpperTotal(
            sum + players[currentPlayer].scoreBord.getBonus()
        );
        upperTotalElement.forEach((element) => {
            element.innerHTML =
                players[currentPlayer].scoreBord.getUpperTotal();
        });
    }
};

// function to calculate the lowersection of the scoreboard
const calculateLowerSection = function () {
    let sum = 0;
    let allFilled = true;
    if (players[currentPlayer].scoreBord.getThreeKindLocked()) {
        sum += players[currentPlayer].scoreBord.getThreeKind();
    } else {
        allFilled = false;
    }
    if (players[currentPlayer].scoreBord.getFourKindLocked()) {
        sum += players[currentPlayer].scoreBord.getFourKind();
    } else {
        allFilled = false;
    }
    if (players[currentPlayer].scoreBord.getFullHouseLocked()) {
        sum += players[currentPlayer].scoreBord.getFullHouse();
    } else {
        allFilled = false;
    }
    if (players[currentPlayer].scoreBord.getSmallStreetLocked()) {
        sum += players[currentPlayer].scoreBord.getSmallStreet();
    } else {
        allFilled = false;
    }
    if (players[currentPlayer].scoreBord.getLargeStreetLocked()) {
        sum += players[currentPlayer].scoreBord.getLargeStreet();
    } else {
        allFilled = false;
    }
    if (players[currentPlayer].scoreBord.getYathzeeLocked()) {
        sum += players[currentPlayer].scoreBord.getYathzee();
    } else {
        allFilled = false;
    }
    if (players[currentPlayer].scoreBord.getChangeLocked()) {
        sum += players[currentPlayer].scoreBord.getChange();
    } else {
        allFilled = false;
    }

    //lower section total value
    if (allFilled) {
        players[currentPlayer].scoreBord.setLowerTotal(sum);
        lowerTotalElement.innerHTML =
            players[currentPlayer].scoreBord.getLowerTotal();
    }
};
// function to update the scoraboard to the next player in line and reset the button borders
const setScoreBoardToNextPlayer = function () {
    // add border to locked dices on scoreboard
    if (players[currentPlayer].scoreBord.getAcesLocked()) {
        querySelectors[0].style.border = "2px red solid";
        querySelectors[0].style.cursor = "default";
        querySelectors[0].innerHTML =
            players[currentPlayer].scoreBord.getAces();
    } else {
        querySelectors[0].style.border = "2px solid var(--dark-grey)";
        querySelectors[0].style.cursor = "pointer";
        querySelectors[0].innerHTML = "";
    }

    if (players[currentPlayer].scoreBord.getTwosLocked()) {
        querySelectors[1].style.border = "2px red solid";
        querySelectors[1].style.cursor = "default";
        querySelectors[1].innerHTML =
            players[currentPlayer].scoreBord.getTwos();
    } else {
        querySelectors[1].style.border = "2px solid var(--dark-grey)";
        querySelectors[1].style.cursor = "pointer";
        querySelectors[1].innerHTML = "";
    }

    if (players[currentPlayer].scoreBord.getThreesLocked()) {
        querySelectors[2].style.border = "2px red solid";
        querySelectors[2].style.cursor = "default";
        querySelectors[2].innerHTML =
            players[currentPlayer].scoreBord.getThrees();
    } else {
        querySelectors[2].style.border = "2px solid var(--dark-grey)";
        querySelectors[2].style.cursor = "pointer";
        querySelectors[2].innerHTML = "";
    }

    if (players[currentPlayer].scoreBord.getFoursLocked()) {
        querySelectors[3].style.border = "2px red solid";
        querySelectors[3].style.cursor = "default";
        querySelectors[3].innerHTML =
            players[currentPlayer].scoreBord.getFours();
    } else {
        querySelectors[3].style.border = "2px solid var(--dark-grey)";
        querySelectors[3].style.cursor = "pointer";
        querySelectors[3].innerHTML = "";
    }

    if (players[currentPlayer].scoreBord.getFivesLocked()) {
        querySelectors[4].style.border = "2px red solid";
        querySelectors[4].style.cursor = "default";
        querySelectors[4].innerHTML =
            players[currentPlayer].scoreBord.getFives();
    } else {
        querySelectors[4].style.border = "2px solid var(--dark-grey)";
        querySelectors[4].style.cursor = "pointer";
        querySelectors[4].innerHTML = "";
    }

    if (players[currentPlayer].scoreBord.getSixesLocked()) {
        querySelectors[5].style.border = "2px red solid";
        querySelectors[5].style.cursor = "default";
        querySelectors[5].innerHTML =
            players[currentPlayer].scoreBord.getSixes();
    } else {
        querySelectors[5].style.border = "2px solid var(--dark-grey)";
        querySelectors[5].style.cursor = "pointer";
        querySelectors[5].innerHTML = "";
    }

    if (players[currentPlayer].scoreBord.getThreeKindLocked()) {
        querySelectors[6].style.border = "2px red solid";
        querySelectors[6].style.cursor = "default";
        querySelectors[6].innerHTML =
            players[currentPlayer].scoreBord.getThreeKind();
    } else {
        querySelectors[6].style.border = "2px solid var(--dark-grey)";
        querySelectors[6].style.cursor = "pointer";
        querySelectors[6].innerHTML = "";
    }

    if (players[currentPlayer].scoreBord.getFourKindLocked()) {
        querySelectors[7].style.border = "2px red solid";
        querySelectors[7].style.cursor = "default";
        querySelectors[7].innerHTML =
            players[currentPlayer].scoreBord.getFourKind();
    } else {
        querySelectors[7].style.border = "2px solid var(--dark-grey)";
        querySelectors[7].style.cursor = "pointer";
        querySelectors[7].innerHTML = "";
    }

    if (players[currentPlayer].scoreBord.getFullHouseLocked()) {
        querySelectors[8].style.border = "2px red solid";
        querySelectors[8].style.cursor = "default";
        querySelectors[8].innerHTML =
            players[currentPlayer].scoreBord.getFullHouse();
    } else {
        querySelectors[8].style.border = "2px solid var(--dark-grey)";
        querySelectors[8].style.cursor = "pointer";
        querySelectors[8].innerHTML = "";
    }

    if (players[currentPlayer].scoreBord.getSmallStreetLocked()) {
        querySelectors[9].style.border = "2px red solid";
        querySelectors[9].style.cursor = "default";
        querySelectors[9].innerHTML =
            players[currentPlayer].scoreBord.getSmallStreet();
    } else {
        querySelectors[9].style.border = "2px solid var(--dark-grey)";
        querySelectors[9].style.cursor = "pointer";
        querySelectors[9].innerHTML = "";
    }

    if (players[currentPlayer].scoreBord.getLargeStreetLocked()) {
        querySelectors[10].style.border = "2px red solid";
        querySelectors[10].style.cursor = "default";
        querySelectors[10].innerHTML =
            players[currentPlayer].scoreBord.getLargeStreet();
    } else {
        querySelectors[10].style.border = "2px solid var(--dark-grey)";
        querySelectors[10].style.cursor = "pointer";
        querySelectors[10].innerHTML = "";
    }

    if (players[currentPlayer].scoreBord.getYathzeeLocked()) {
        querySelectors[11].style.border = "2px red solid";
        querySelectors[11].style.cursor = "default";
        querySelectors[11].innerHTML =
            players[currentPlayer].scoreBord.getYathzee();
    } else {
        querySelectors[11].style.border = "2px solid var(--dark-grey)";
        querySelectors[11].style.cursor = "pointer";
        querySelectors[11].innerHTML = "";
    }

    if (players[currentPlayer].scoreBord.getChangeLocked()) {
        querySelectors[12].style.border = "2px red solid";
        querySelectors[12].style.cursor = "default";
        querySelectors[12].innerHTML =
            players[currentPlayer].scoreBord.getChange();
    } else {
        querySelectors[12].style.border = "2px solid var(--dark-grey)";
        querySelectors[12].style.cursor = "pointer";
        querySelectors[12].innerHTML = "";
    }

    //set name of player on scoreboard
    playerNameElement.innerHTML = players[currentPlayer].getName();

    //the total scores
    if (players[currentPlayer].scoreBord.getUpperSubTotal() > 0) {
        upperSubTotalElement.innerHTML =
            players[currentPlayer].scoreBord.getUpperSubTotal();
    } else {
        upperSubTotalElement.innerHTML = "";
    }
    if (
        players[currentPlayer].scoreBord.getBonus() > 0 ||
        players[currentPlayer].scoreBord.getUpperTotal() > 0
    ) {
        bonusElement.innerHTML = players[currentPlayer].scoreBord.getBonus();
    } else {
        bonusElement.innerHTML = "";
    }
    if (players[currentPlayer].scoreBord.getUpperTotal() > 0) {
        upperTotalElement.forEach((element) => {
            element.innerHTML =
                players[currentPlayer].scoreBord.getUpperTotal();
        });
    } else {
        upperTotalElement.innerHTML = "";
    }
    if (players[currentPlayer].scoreBord.getLowerTotal() > 0) {
        lowerTotalElement.innerHTML =
            players[currentPlayer].scoreBord.getLowerTotal();
    } else {
        lowerTotalElement.innerHTML = "";
    }
    if (players[currentPlayer].scoreBord.getGrandTotal() > 0) {
        grandTotalElement.innerHTML =
            players[currentPlayer].scoreBord.getGrandTotal();
    } else {
        grandTotalElement.innerHTML = "";
    }
};

const getElements = function () {
    //* scoreboard
    //upper
    querySelectors[0] = document.querySelector("#buttonAces");
    querySelectors[1] = document.querySelector("#buttonTwos");
    querySelectors[2] = document.querySelector("#buttonThrees");
    querySelectors[3] = document.querySelector("#buttonFours");
    querySelectors[4] = document.querySelector("#buttonFives");
    querySelectors[5] = document.querySelector("#buttonSixes");

    //lower
    querySelectors[6] = document.querySelector("#button3OAK");
    querySelectors[7] = document.querySelector("#button4OAK");
    querySelectors[8] = document.querySelector("#buttonFullHouse");
    querySelectors[9] = document.querySelector("#buttonSmallStreet");
    querySelectors[10] = document.querySelector("#buttonLargeStreet");
    querySelectors[11] = document.querySelector("#buttonYathzee");
    querySelectors[12] = document.querySelector("#buttonChange");

    //*roll button
    rollButton = document.getElementById(`diceCup`);

    //*dices
    dices.forEach((dice) => {
        let diceId = dice.getId();
        let element = document.querySelector(`#dice_${diceId}`);
        diceButtons.push(element);
    });

    //* playername
    playerNameElement = document.querySelector("#playerName");

    //* score totals
    upperSubTotalElement = document.querySelector("#buttonSubTotalUpper");
    bonusElement = document.querySelector("#buttonBonus");
    upperTotalElement = document.querySelectorAll(".buttonTotalUpper");
    lowerTotalElement = document.querySelector("#buttonTotalLower");
    grandTotalElement = document.querySelector("#buttonGrandTotal");
};

const removeEventListenersDices = function () {
    for (let i = 0; i < diceButtons.length; i++) {
        diceButtons[i].removeEventListener("click", diceFunctions[i]);
    }
};

const removeEventListeners = function () {
    for (let i = 0; i < querySelectors.length; i++) {
        querySelectors[i].removeEventListener("click", lockFunctArray[i]);
    }
    removeEventListenersDices();
    rollButton.removeEventListener("click", rollButtonPress);
};

const fillScorebord = function () {
    const values = players[currentPlayer].scoreBord.getValues();
    querySelectors[0].innerText = values["aces"];
    querySelectors[1].innerText = values["twos"];
    querySelectors[2].innerText = values["threes"];
    querySelectors[3].innerText = values["fours"];
    querySelectors[4].innerText = values["fives"];
    querySelectors[5].innerText = values["sixes"];
    querySelectors[6].innerText = values["threeKind"];
    querySelectors[7].innerText = values["fourKind"];
    querySelectors[8].innerText = values["fullHouse"];
    querySelectors[9].innerText = values["smallStreet"];
    querySelectors[10].innerText = values["largeStreet"];
    querySelectors[11].innerText = values["yathzee"];
    querySelectors[12].innerText = values["change"];
};

const calculateGrandScores = function () {
    for (let i = 0; i < players.length; i++) {
        let grandTotal = 0;
        grandTotal += players[i].scoreBord.getUpperTotal();
        grandTotal += players[i].scoreBord.getLowerTotal();
        players[i].scoreBord.setGrandTotal(grandTotal);
    }
};

const getWinnerId = function () {
    let winnerId = 0;
    for (let i = 0; i < players.length; i++) {
        if (
            players[i].scoreBord.getGrandTotal() >
            players[winnerId].scoreBord.getGrandTotal()
        ) {
            winnerId = i;
        }
    }
    return winnerId;
};

const getWinner = function () {
    calculateGrandScores();
    const winnerId = getWinnerId();
    winner.innerHTML = `${players[
        winnerId
    ].getName()} won the game with a score of ${players[
        winnerId
    ].scoreBord.getGrandTotal()} 🎉🎉🎉`;
    winScreen.style.visibility = "unset";
};

//* game functions
const createPlayers = function () {
    for (let i = 0; i < playerAmount; i++) {
        players[i] = new Player(i);
    }
};

const placeDices = function () {
    for (let i = 0; i < 5; i++) {
        diceButtons[i].classList.remove(`dicesStart`);
        diceButtons[i].style.display = "unset";
        if (dices[i].getLocked()) {
            diceButtons[i].style.zIndex = 1;      
            diceButtons[i].classList.add(`dice${i+1}Locked`);
            diceButtons[i].classList.remove(`dice${i+1}Field`);

        } else {
            diceButtons[i].classList.remove(`dice${i+1}Locked`);
            diceButtons[i].classList.add(`dice${i+1}Field`);
            diceButtons[i].style.animation = 'rollDices 0.5s ease-in-out';
        }
    }
};

const resetDicesDisplay = function () {
    for (let i = 0; i < 5; i++) {
        diceButtons[i].style.display = "none";
        diceButtons[i].classList.add(`dicesStart`);
    }
};

const gameStart = function () {
    createPlayers(); //create the players
    getElements(); // get the elements for listeners
    createListenerFunctions(); // create the listener functions to be used later
    resetDicesDisplay(); //reset the dices to start position
    playerNameElement.innerHTML = players[currentPlayer].getName(); //set name of player on scoreboard
    addEventListeners(); //add event listeners
};

const rollButtonPress = function () {
    if (playerTurn < 3) {
        removeEventListenersDices();
        roll(dices);
        addEventListenersDices();
        placeDices();
        setDiceImages();
        players[currentPlayer].scoreBord.calculateValuesScoreboard(dices);
        fillScorebord();
    }
    playerTurn += 1;
};
const ScoreboardButtonPress = function () {
    playerTurn = 0;
    resetDicesDisplay();
    if (currentPlayer === playerAmount - 1) {
        currentPlayer = 0;
        roundNumber += 1;
    } else {
        currentPlayer += 1;
    }
    //reset
    removeEventListeners();
    resetDices(dices);

    if (roundNumber < 13) {
        setScoreBoardToNextPlayer();
        addEventListeners();
    } else {
        getWinner();
    }
};

//* start game
gameStart();
//html links
