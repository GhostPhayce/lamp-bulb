const Lamp = require('../lamp');

describe("lamp", () => {
    let lamp;
    beforeEach(() => {
        const bulb = { health: 100, turnOn: jest.fn()};
        lamp = new Lamp(bulb);
    })
    it("instantiates the object", () => {
        expect(lamp).toBeInstanceOf(Object);
        expect(lamp.isOn).toEqual(false);
        expect(lamp.bulb.health).toEqual(100);
    })
    it("turns on", () => {
        lamp.switchOn();
        expect(lamp.isOn).toEqual(true);
        expect(lamp.bulb.turnOn).toHaveBeenCalled();
    })
    it("turns off", () => {
        lamp.switchOff();
        expect(lamp.isOn).toEqual(false);
    })
})