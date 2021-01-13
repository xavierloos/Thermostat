describe("Thermostat", () => {
    var therm
    beforeEach(() =>{
        therm = new Thermostat()
    })
    it("starts at 20 degreed", () => {
        expect(therm.getCurrentTemperature()).toEqual(20)
    })
   
})