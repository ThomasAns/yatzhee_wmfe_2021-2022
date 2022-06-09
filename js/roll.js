import { rollAmount } from "./dices.js";

class Dice {
    constructor(value, locked, hardLocked, id) {
        this.value = value;
        this.img = `../app/public/assets/images/${value}.png`;
        this.locked = locked;
        this.hardLocked = hardLocked;
        this.id = id;
    }

    setValue = function (value) {
        this.value = value;
        this.img = `../assets/images/${value}.png`;
    };

    getValue = function () {
        return this.value;
    };

    getImage = function () {
        return this.img;
    };

    setId = function (id) {
        this.id = id;
    };

    getId = function () {
        return this.id;
    };

    setLocked = function (locked) {
        this.locked = locked;
    };

    setHardLocked = function () {
        this.hardLocked = true;
    };

    getLocked = function () {
        return this.locked;
    };

    getHardLocked = function () {
        return this.hardLocked;
    };

    resetLocks = function () {
        this.locked = false;
        this.hardLocked = false;
    };
}

const creatDices = function () {
    let dicesCreated = [];
    for (let i = 0; i < 5; i++) {
        dicesCreated[i] = new Dice(1, false, false, i + 1);
    }
    return dicesCreated;
};

const amountUnlocked = function (dices) {
    let counter = 0;
    dices.forEach((dice) => {
        if (!dice.hardLocked) {
            counter++;
        }
    });
    return counter;
};

const hardLockDices = function (dices) {
    dices.forEach((dice) => {
        if (dice.getLocked()) {
            dice.setHardLocked();
        }
    });
};

const roll = function (dices) {
    hardLockDices(dices);
    let amount = amountUnlocked(dices);
    let value = rollAmount(amount);

    dices.forEach((dice) => {
        if (!dice.hardLocked) {
            amount--;
            dice.setValue(value[amount]);
        }
    });

    if (amount !== 0) {
        console.error("Wrong amount of hardlock dices!");
    }
};

const resetDices = function (dices) {
    dices.forEach((dice) => {
        dice.resetLocks();
    });
};

const toggleLocked = function (dice) {
    dice.getLocked() ? dice.setLocked(false) : dice.setLocked(true);
}

export { roll, resetDices, creatDices, toggleLocked };
