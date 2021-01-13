class Thermostat {
    constructor() {
        this.temp = 20
        this.minTemp = 10
        this.maxTemp = this.powerSavingOn()
    }
    getCurrentTemp() {
           return this.temp
    }
    getMinTemp() {
        return this.minTemp
    }
    increase() {
        this.temp+=1
    }
    decrease() {
        if (this.isMinTemp()) {
            return;
        }
        this.temp-=1
    }
    isMinTemp() {
        return this.temp === this.minTemp;
    }
    powerSavingOn() {
        return this.maxTemp = 25
    }
    powerSavingOff() {
        this.maxTemp+=7
    }
    resetTemp() {
        this.temp = 20
    }

}