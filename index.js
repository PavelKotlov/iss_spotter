const { nextISSTimesForMyLocation } = require('./iss');


nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  // success, print out the deets!
  for (let timing of passTimes) {
    console.log(`Next pass at ${Date(timing.risetime)} for ${timing.duration} seconds!`);
  }
});

