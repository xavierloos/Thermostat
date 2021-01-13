describe("Thermostat", () => {
    var therm
    beforeEach(() =>{
        therm = new Thermostat()
    })
    it("starts at 20 degrees", () => {
        expect(therm.getCurrentTemp()).toEqual(20)
    })
    it("has a min temp of 10 degrees", () => {
        expect(therm.getMinTemp()).toEqual(10)
    })
    it("stops at min degrees", () => {
        for (var i = 0; i < 11; i++) {
            therm.decrease();
        }
        expect(therm.getMinTemp()).toEqual(10)
    })
    describe("increase", () => {
        it("is been defined", () => {
            expect(therm.increase).toBeDefined()
        })
        it("should change up the temp", () => {
            therm.increase()
            expect(therm.getCurrentTemp()).toEqual(21)
        })
    })
    describe("decrease", () => {
        it("is been defined", () => {
            expect(therm.decrease).toBeDefined()
        })
        it("should change up the temp", () => {
            therm.decrease()
            expect(therm.getCurrentTemp()).toEqual(19)
        })
    })
    describe("powerSavingOn", () => {
        it("is been defined", () => {
            expect(therm.powerSavingOn).toBeDefined()
        })
        it("sets the max temp to 25 degrees", () => {
            expect(therm.maxTemp).toEqual(32)
            therm.powerSavingOn()
            expect(therm.maxTemp).toEqual(25)
        })
    })
   describe("powerSavingOff", () => {
        it("is been defined", () => {
            expect(therm.powerSavingOff).toBeDefined()
        })
       it("sets the max temp to 25 degrees", () => {
            therm.powerSavingOn()
            expect(therm.maxTemp).toEqual(25)
            therm.powerSavingOff()
            expect(therm.maxTemp).toEqual(32)
        })
    })
})