class Thermostat {
    constructor() {
        this.temp = 20
        this.minTemp = 10
        this.maxTemp = 32
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
        this.maxTemp-=7
    }
   
}