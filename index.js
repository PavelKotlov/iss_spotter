const { nextISSTimesForMyLocation } = require('./iss');


nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  // success, print out the deets!
  printPassTimes(passTimes);
});

const printPassTimes = (times) => {
  for (let timing of times) {
    console.log(`Next pass at ${Date(timing.risetime)} for ${timing.duration} seconds!`);
  }
};