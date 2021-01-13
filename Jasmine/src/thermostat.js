class Thermostat {
    constructor() {
        this.temp = 20
    }
    getCurrentTemperature() {
        return this.temp
    }
    increase() {
        this.temp+=1
    }
    decrease() {
        this.temp-=1
    }

}