const Thermostat = require('./thermostat');


describe('Thermostat', () => {
    it('starting temperature is 20C', () => {
    temperature = new Thermostat();
    expect(temperature.getTemperature()).toEqual(20);
    });
    it('decreases the temperature by 1', () => {
        temperature = new Thermostat();
        expect(temperature.down()).toEqual(19);
        });
    it('increases the temperature by 1', () => {
        temperature = new Thermostat();
        expect(temperature.up()).toEqual(21);
        });
    it('increases the temperature by 1 every time the function is called', () => {
        temperature = new Thermostat();
        temperature.up();
        temperature.up();
        expect(temperature.getTemperature()).toEqual(22);
        });
    it('decreases the temperature by 1 every time the function is called but stops at 10C', () => {
            temperature = new Thermostat();
            temperature.down();
            temperature.down();
            temperature.down();
            temperature.down();
            temperature.down();
            temperature.down();
            temperature.down();
            temperature.down();
            temperature.down();
            temperature.down();
            expect(temperature.down()).toEqual('Lowest temperature is 10C');
            });
    it('Turn on Power Saving Mode, max temperature is 25', () => {
            temperature = new Thermostat();
            temperature.setPowerSavingMode(true);
            for (let i = 0; i < 10; i++) {
                temperature.up();}
                expect(temperature.getTemperature()).toEqual(25);
            });
    it('Turn off Power Saving Mode, max temperature is no more 25', () => {
        temperature = new Thermostat();
        temperature.setPowerSavingMode(false);
        for (let i = 0; i < 10; i++) {
            temperature.up();}
            expect(temperature.getTemperature()).toEqual(30);
            });
            
    it('Reset temperature to 20', () => {
        temperature = new Thermostat();
        temperature.setPowerSavingMode(false);
        for (let i = 0; i < 10; i++) {
        temperature.up();}
        temperature.reset();
        expect(temperature.getTemperature()).toEqual(20);
            });
    it('shows the energy usage, if temperature under 18, low usage', () => {
        temperature = new Thermostat();
        temperature.down();
        temperature.down();
        temperature.down();
        expect(temperature.getEnergyUsage()).toEqual('Low-usage')
    });
    it('shows the energy usage, if temperature > 18 and <= 25, Medium-usage', () => {
        temperature = new Thermostat();
        temperature.up();
        expect(temperature.getEnergyUsage()).toEqual('Medium-usage')
    });
    it('shows the energy usage, if temperature > 25, High-usage', () => {
        temperature = new Thermostat();
        temperature.setPowerSavingMode(false);
        for (let i = 0; i < 10; i++) {
        temperature.up();}
        expect(temperature.getEnergyUsage()).toEqual('High-usage')
    });
});