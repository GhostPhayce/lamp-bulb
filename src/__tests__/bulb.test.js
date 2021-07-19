const Bulb = require('../bulb');

describe("bulb", () => {
    let bulb;
    beforeEach(() => {
        bulb = new Bulb();
    })

    it("instantiates the object", () => {
        expect(bulb).toBeInstanceOf(Object);
        expect(bulb.health).toEqual(100);
    })
    it("decrements bulb health", () => {
        bulb.turnOn();
        expect(bulb.health).toEqual(90);
    })
    it("throws error if bulb is dead", () => {
        bulb.health = 0;
        expect(() => bulb.turnOn()).toThrow(Error);
    })
})