const rollDice = function() {
    const dice = Math.floor(Math.random() * 6) + 1;
    return dice;
}

const rollAmount = function(amount) {
    let dices = [];
    for (let i = 0; i < amount; i++) {
        dices[i] = rollDice();
    }
    return dices;
}

export {
    rollAmount
}