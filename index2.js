const { nextISSTimesForMyLocation } = require('./iss_promised');

nextISSTimesForMyLocation()
  .then((flyOvers) => {
    printPassTimes(flyOvers)
  })
  .catch((error) => {
    console.log("It didn't work: ", error.message);
  });

const printPassTimes = (times) => {
  for (let timing of times) {
    console.log(`Next pass at ${Date(timing.risetime)} for ${timing.duration} seconds!`);
  }
};