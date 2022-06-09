import { Scorebord } from './scorebord.js';

class Player {
    constructor(id) {
        this.id = id;
        this.scoreBord = new Scorebord();
        this.name = `Player ${id + 1}`;
    }

    getScoreBord = function() {
        return this.scoreBord;    
    }

    getId = function() {
        return this.id;    
    }

    getName = function() {
        return this.name;
    }
}

export {Player};