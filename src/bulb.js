class Bulb {
    constructor() {
        this.health = 100;
    }

    turnOn() {
        if (this.health > 0) {
            return this.health -= 10;
        }
        throw new Error("Your bulb is dead mate.");
    }
}

module.exports = Bulb;