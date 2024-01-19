class Thermostat {
    constructor() {
        this.temperature = 20;
        this.powerSavingMode = true; // Power saving mode is on by default
        this.maxTemperature = this.powerSavingMode ? 25 : 32;
    }

    down() {
        if (this.temperature > 10) {
            this.temperature -= 1;
            return this.temperature;
        }
        return 'Lowest temperature is 10C';
    }

    up() {
        if (this.temperature < this.maxTemperature) {
            this.temperature += 1;
            return this.temperature;
        }
        return `Cannot exceed ${this.maxTemperature} degrees in current mode`;
    }

    reset() {
        this.temperature = 20;
        return 'Temperature reset to 20C';
    }

    getTemperature() {
        return this.temperature;
    }

    setPowerSavingMode(on) {
        this.powerSavingMode = on;
        this.maxTemperature = this.powerSavingMode ? 25 : 32;
        return `Power saving mode is ${this.powerSavingMode ? 'on' : 'off'}`;
    }

    getEnergyUsage() {
        if (this.temperature < 18) {
            return 'Low-usage';
        } else if (this.temperature <= 25) {
            return 'Medium-usage';
        } else {
            return 'High-usage';
        }
    }
}

module.exports = Thermostat;
