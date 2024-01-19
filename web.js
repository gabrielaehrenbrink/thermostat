const express = require('express');
const app = express();
const port = 3000;
const Thermostat = require('./thermostat');

thermostat = new Thermostat();

app.get('/temperature', (req, res) => {
    const temperature = JSON.stringify(thermostat.getTemperature());
    res.json('temperature: ' + temperature + "C");
});


app.post('/up', (req, res) => {
    thermostat.up()
    res.json();
});

app.post('/down', (req, res) => {
    thermostat.down()
    res.json();
});


app.delete('/temperature', (req, res) => {
    thermostat.reset() 
    res.json();
});

console.log(`Server listening on localhost:${port}`);
app.listen(port);