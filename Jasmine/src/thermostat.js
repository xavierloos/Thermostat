class Thermostat {
    constructor() {
        this.temp = 20
        this.min_temp = 10
    }
    getCurrentTemperature() {
        return this.temp
    }
    getMinTemperature() {
        return this.min_temp
    }
    increase() {
        this.temp+=1
    }
    decrease() {
        this.temp-=1
    }

}