//! remove roll from import => just for testing purposes
class Scorebord {
    constructor() {
        this.aces = 0;
        this.twos = 0;
        this.threes = 0;
        this.fours = 0;
        this.fives = 0;
        this.sixes = 0;

        this.threeKind = 0;
        this.fourKind = 0;
        this.fullHouse = 0;
        this.smallStreet = 0;
        this.largeStreet = 0;
        this.yathzee = 0;
        this.change = 0;

        this.upperSubTotal = 0;
        this.bonus = 0;
        this.upperTotal = 0;
        this.lowerTotal = 0;
        this.grandTotal = 0;

        this.acesLocked = false;
        this.twosLocked = false;
        this.threesLocked = false;
        this.foursLocked = false;
        this.fivesLocked = false;
        this.sixesLocked = false;

        this.threeKindLocked = false;
        this.fourKindLocked = false;
        this.fullHouseLocked = false;
        this.smallStreetLocked = false;
        this.largeStreetLocked = false;
        this.yathzeeLocked = false;
        this.changeLocked = false;
    }

    //set uppersection
    setAces = function (aces) {
        this.aces = aces;
    };

    setTwos = function (twos) {
        this.twos = twos;
    };

    setThrees = function (threes) {
        this.threes = threes;
    };

    setFours = function (fours) {
        this.fours = fours;
    };

    setFives = function (fives) {
        this.fives = fives;
    };

    setSixes = function (sixes) {
        this.sixes = sixes;
    };

    //set lower section
    setThreeKind = function (threeKind) {
        this.threeKind = threeKind;
    };

    setFourKind = function (fourKind) {
        this.fourKind = fourKind;
    };

    setFullHouse = function (fullHouse) {
        this.fullHouse = fullHouse;
    };

    setSmallStreet = function (smallStreet) {
        this.smallStreet = smallStreet;
    };

    setLargeStreet = function (largeStreet) {
        this.largeStreet = largeStreet;
    };

    setYathzee = function (yathzee) {
        this.yathzee = yathzee;
    };

    setChange = function (change) {
        this.change = change;
    };

    //set totals
    setUpperSubTotal = function (upperSubTotal) {
        this.upperSubTotal = upperSubTotal;
    };

    setBonus = function () {
        this.bonus = 35;
    };

    setUpperTotal = function (upperTotal) {
        this.upperTotal = upperTotal;
    };

    setLowerTotal = function (lowerTotal) {
        this.lowerTotal = lowerTotal;
    };

    setGrandTotal = function (grandTotal) {
        this.grandTotal = grandTotal;
    };

    //get uppersection
    getAces = function () {
        return this.aces;
    };
    getTwos = function () {
        return this.twos;
    };
    getThrees = function () {
        return this.threes;
    };
    getFours = function () {
        return this.fours;
    };
    getFives = function () {
        return this.fives;
    };
    getSixes = function () {
        return this.sixes;
    };

    //get lower section
    getThreeKind = function () {
        return this.threeKind;
    };
    getFourKind = function () {
        return this.fourKind;
    };
    getFullHouse = function () {
        return this.fullHouse;
    };
    getSmallStreet = function () {
        return this.smallStreet;
    };
    getLargeStreet = function () {
        return this.largeStreet;
    };
    getYathzee = function () {
        return this.yathzee;
    };
    getChange = function () {
        return this.change;
    };

    //get totals
    getUpperSubTotal = function () {
        return this.upperSubTotal;
    };

    getBonus = function () {
        return this.bonus;
    };

    getUpperTotal = function () {
        return this.upperTotal;
    };

    getLowerTotal = function () {
        return this.lowerTotal;
    };

    getGrandTotal = function () {
        return this.grandTotal;
    };

    //get lower and uper values
    getValues = function () {
        let values = [];
        values["aces"] = this.aces;
        values["twos"] = this.twos;
        values["threes"] = this.threes;
        values["fours"] = this.fours;
        values["fives"] = this.fives;
        values["sixes"] = this.sixes;
        values["threeKind"] = this.threeKind;
        values["fourKind"] = this.fourKind;
        values["fullHouse"] = this.fullHouse;
        values["smallStreet"] = this.smallStreet;
        values["largeStreet"] = this.largeStreet;
        values["yathzee"] = this.yathzee;
        values["change"] = this.change;

        return values;
    };

    //set locked
    setAcesLocked = function () {
        this.acesLocked = true;
    };

    setTwosLocked = function () {
        this.twosLocked = true;
    };

    setThreesLocked = function () {
        this.threesLocked = true;
    };

    setFoursLocked = function () {
        this.foursLocked = true;
    };

    setFivesLocked = function () {
        this.fivesLocked = true;
    };

    setSixesLocked = function () {
        this.sixesLocked = true;
    };

    setThreeKindLocked = function () {
        this.threeKindLocked = true;
    };

    setFourKindLocked = function () {
        this.fourKindLocked = true;
    };

    setFullHouseLocked = function () {
        this.fullHouseLocked = true;
    };

    setSmallStreetLocked = function () {
        this.smallStreetLocked = true;
    };

    setLargeStreetLocked = function () {
        this.largeStreetLocked = true;
    };

    setYathzeeLocked = function () {
        this.yathzeeLocked = true;
    };

    setChangeLocked = function () {
        this.changeLocked = true;
    };

    //get locked
    getAcesLocked = function () {
        return this.acesLocked;
    };

    getTwosLocked = function () {
        return this.twosLocked;
    };

    getThreesLocked = function () {
        return this.threesLocked;
    };

    getFoursLocked = function () {
        return this.foursLocked;
    };

    getFivesLocked = function () {
        return this.fivesLocked;
    };

    getSixesLocked = function () {
        return this.sixesLocked;
    };

    getThreeKindLocked = function () {
        return this.threeKindLocked;
    };

    getFourKindLocked = function () {
        return this.fourKindLocked;
    };

    getFullHouseLocked = function () {
        return this.fullHouseLocked;
    };

    getSmallStreetLocked = function () {
        return this.smallStreetLocked;
    };

    getLargeStreetLocked = function () {
        return this.largeStreetLocked;
    };

    getYathzeeLocked = function () {
        return this.yathzeeLocked;
    };

    getChangeLocked = function () {
        return this.changeLocked;
    };

    calculateValuesScoreboard = function (dices) {
        calculateValuesUpperSection(dices, this);
        caluculateValuesLowerSection(dices, this);
    };
}

//assistant functions

const totalOfDices = function (dices) {
    let total = 0;
    dices.forEach((dice) => {
        total += dice.getValue();
    });
    return total;
};

const getDiceValuesSorted = function (dices) {
    let diceRolls = [];
    dices.forEach((dice) => {
        diceRolls.push(dice.getValue());
    });
    return diceRolls.sort();
};

const xOfKind = function (x, dices) {
    let counter = 0;
    let diceRolls = getDiceValuesSorted(dices);
    let lastValue = 0;
    let totalScore = 0;

    diceRolls.forEach((value) => {
        if (value !== lastValue) {
            counter = 0;
            lastValue = value;
        }
        counter++;

        if (counter >= x) {
            totalScore = totalOfDices(dices);
        }
    });
    return totalScore; // default return value
};

const checkFullHouse = function (dices) {
    let diceRolls = getDiceValuesSorted(dices);
    if (diceRolls[0] === diceRolls[1] && diceRolls[3] === diceRolls[4]) {
        //if the first 2 and last 2 dices are the same
        if (diceRolls[1] === diceRolls[2] || diceRolls[2] === diceRolls[3]) {
            //if the middel die is the same as the die before or after it
            return 25; //score you get for a full house
        }
    }
    return 0;
};

const removeDubbelValuesAndSort = function (dices) {
    let diceRolls = getDiceValuesSorted(dices);
    // Verwijderd dubbele waarden in array van dobbelstenen
    for (let i = 0; i < diceRolls.length; i++) {
        for (let j = i + 1; j < diceRolls.length; j++) {
            if (diceRolls[i] === diceRolls[j]) {
                diceRolls[i] = 9; //9 becuase it isn't a following number and it is not a dubbel and it is smaller than 10 so it gets sorted at the end and not in between 1 and 2
            }
        }
    }
    diceRolls.sort();
    return diceRolls;
};

const checkSmallStreet = function (dices) {
    let diceRolls = removeDubbelValuesAndSort(dices);
    let startValue = 0;
    if (diceRolls[0] !== diceRolls[1] - 1) {
        startValue = 1;
    }
    for (let i = startValue; i < startValue + 3; i++) {
        //only 4 sequentials needed
        if (diceRolls[i] !== diceRolls[i + 1] - 1) {
            //if even 1 of the dices isn't the same as the next dice 0 return not possible value (0)
            return 0;
        }
    }
    return 30; //score you get for a small street
};

const checkLargeStreet = function (dices) {
    let diceRolls = removeDubbelValuesAndSort(dices);

    for (let i = 0; i < 4; i++) {
        //<4 because you check with the next and 6 doesn't exist
        if (diceRolls[i] !== diceRolls[i + 1] - 1) {
            //if even 1 of the dices isn't the same as the next dice 0 return not possible value (0)
            return 0;
        }
    }
    return 40; //score you get for a large straat
};

const checkYathzee = function (dices) {
    if (xOfKind(5, dices) !== 0) {
        return 50;
    }
    return 0;
};

/// Scoreboard
const calculateValuesUpperSection = function (dices, scoreboard) {
    //get values from dices
    let upperSectionValues = [];
    for (let i = 0; i < 6; i++) {
        let totalValue = 0;
        dices.forEach((dice) => {
            if (dice.getValue() === i + 1) {
                totalValue += i + 1;
            }
        });
        upperSectionValues[i] = totalValue;
    }

    //set values to scoreboard
    if (!scoreboard.getAcesLocked()) {
        scoreboard.setAces(upperSectionValues[0]);
    }

    if (!scoreboard.getTwosLocked()) {
        scoreboard.setTwos(upperSectionValues[1]);
    }

    if (!scoreboard.getThreesLocked()) {
        scoreboard.setThrees(upperSectionValues[2]);
    }

    if (!scoreboard.getFoursLocked()) {
        scoreboard.setFours(upperSectionValues[3]);
    }

    if (!scoreboard.getFivesLocked()) {
        scoreboard.setFives(upperSectionValues[4]);
    }

    if (!scoreboard.getSixesLocked()) {
        scoreboard.setSixes(upperSectionValues[5]);
    }
};

const caluculateValuesLowerSection = function (dices, scoreboard) {
    if (!scoreboard.getThreeKindLocked()) {
        scoreboard.setThreeKind(xOfKind(3, dices));
    }

    if (!scoreboard.getFourKindLocked()) {
        scoreboard.setFourKind(xOfKind(4, dices));
    }

    if (!scoreboard.getYathzeeLocked()) {
        scoreboard.setYathzee(checkYathzee(dices));
    }

    if (!scoreboard.getFullHouseLocked()) {
        scoreboard.setFullHouse(checkFullHouse(dices));
    }

    if (!scoreboard.getSmallStreetLocked()) {
        scoreboard.setSmallStreet(checkSmallStreet(dices));
    }

    if (!scoreboard.getLargeStreetLocked()) {
        scoreboard.setLargeStreet(checkLargeStreet(dices));
    }

    if (!scoreboard.getChangeLocked()) {
        scoreboard.setChange(totalOfDices(dices));
    }
};

export { Scorebord };
