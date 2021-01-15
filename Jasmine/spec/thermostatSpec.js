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
        for (var i = 0; i < 10; i++) {
            therm.decrease()
        }
        expect(therm.temp).toEqual(10)
    })
    describe("increase", () => {
        it("is been defined", () => {
            expect(therm.increase).toBeDefined()
        })
        it("should change up the temp", () => {
            therm.increase()
            expect(therm.temp).toEqual(21)
        })
    })
    describe("decrease", () => {
        it("is been defined", () => {
            expect(therm.decrease).toBeDefined()
        })
        it("should change down the temp", () => {
            therm.decrease()
            expect(therm.temp).toEqual(19)
        })
    })
    describe("switchOn", () => {
        it("is been defined", () => {
            expect(therm.switchOn).toBeDefined()
        })
        it("is on by default", () => {
            expect(therm.switchOn()).toBe(true)
            expect(therm.maxTemp).toEqual(25)
        })
        it("sets the max temp to 25 degrees", () => {
            therm.switchOff()
            expect(therm.getMaxTemp()).toEqual(32)
            therm.switchOn()
            expect(therm.getMaxTemp()).toEqual(25)
        })
    })
   describe("switchOff", () => {
       it("is been defined", () => {
            expect(therm.switchOff).toBeDefined()
        })
       it("sets the max temp to 32 degrees", () => {
            therm.switchOff()
            expect(therm.getMaxTemp()).toEqual(32)
        })
   })
    describe("reset", () => {
        it("is been defined", () => {
            expect(therm.reset()).toBeDefined()
        })
        it("resets the temp to 20", () => {
            therm.increase()
            expect(therm.temp).toEqual(21)
            therm.reset()
            expect(therm.temp).toEqual(20)
        })
    })
    describe("currentUsage", () => {
        it("is been defined", () => {
            expect(therm.currentUsage()).toBeDefined()
        })
        it("is low-usage", () => {
            for (var i = 0; i < 10; i++) {
                therm.decrease();
            }
            expect(therm.currentUsage()).toEqual("Low-Usage")
        })
        it("is medium-usage", () => {
            therm.reset()
            expect(therm.currentUsage()).toEqual("Medium-Usage") 
        })
        it("is high-usage", () => {
            therm.switchOff()
            for (var i = 0; i < 6; i++) {
                therm.increase();
            }
            expect(therm.currentUsage()).toEqual("High-Usage")
        })
    })
})