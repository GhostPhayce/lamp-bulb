class Lamp {
    constructor(bulb) {
        this.bulb = bulb;
        this.isOn = false;
    }

    switchOn() {
        this.isOn = true;
        this.bulb.turnOn();
    }

    switchOff() {
        this.isOn = false;
    }

}

module.exports = Lamp;