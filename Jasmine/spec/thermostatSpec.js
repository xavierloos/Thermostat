describe("Thermostat", () => {
    var therm
    beforeEach(() =>{
        therm = new Thermostat()
    })
    it("starts at 20 degrees", () => {
        expect(therm.getCurrentTemperature()).toEqual(20)
    })
    it("has a min temp of 10 degrees", () => {
        expect(therm.getMinTemperature()).toEqual(10)
    })
    describe("increase", () => {
        it("is been defined", () => {
            expect(therm.increase).toBeDefined()
        })
        it("should change up the temp", () => {
            therm.increase()
            expect(therm.getCurrentTemperature()).toEqual(21)
        })
    })
    describe("decrease", () => {
        it("is been defined", () => {
            expect(therm.decrease).toBeDefined()
        })
        it("should change up the temp", () => {
            therm.decrease()
            expect(therm.getCurrentTemperature()).toEqual(19)
        })
    })
})