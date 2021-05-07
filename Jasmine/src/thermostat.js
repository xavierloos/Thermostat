class Thermostat {
    constructor() {
        this._DEFAULT_TEMPERATURE = 20;
        this.temp = this._DEFAULT_TEMPERATURE
        this.minTemp = this.getMinTemp()
        this.savingMode = true
        this.maxTemp = this.getMaxTemp()
    }
    getCurrentTemp() {
        return this.temp
    }
    getMinTemp() {
        return 10
    }
    getMaxTemp() {
        if (this.savingMode === true)
            return 25
        return 32
    }
    increase() {
        if (this.temp <= this.getMaxTemp())
            return this.temp += 1
    }
    decrease() {
        if (this.temp >= this.minTemp) {
            return this.temp -= 1
        } else {
            alert("You have reached the minimum temperature")
        }

    }
    switchOn() {
        return this.savingMode = true
    }
    switchOff() {
        return this.savingMode = false
    }
    reset() {
        return this.temp = 20
    }
    currentUsage() {
        if (this.temp <= 18)
            return "low-usage"
        else if (this.temp <= 25)
            return "medium-usage"
        return "high-usage"
    }
}