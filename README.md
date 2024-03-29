# Thermostat

Course exercise from Makers bootcamp.

## Learning objectives:

- Test-drive a JavaScript class
- Build, and test-drive, a simple program to manage a thermostat. 
- Use express to serve a simple web app.
- Use express routes to expose a JavaScript program.

## Specification for the initial MVP of the program:

- The Thermostat starts with an initial temperature of 20 degrees
- You can increase the temperature with an up method
- You can decrease the temperature with a down method
- The minimum possible temperature is 10 degrees
- The Power saving mode is on by default but it can also be turned off
- If power saving mode is on, the maximum temperature is 25 degrees
- If power saving mode is off, the maximum temperature is 32 degrees
- You can reset the temperature to 20 with a reset method
- You can ask about the thermostat's current energy usage: < 18 is low-usage, <= 25 is medium-usage, anything else is high-usage.