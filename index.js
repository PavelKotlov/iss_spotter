const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes } = require('./iss');

// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log(error);
//     return;
//   }

//   fetchCoordsByIP(ip, (error, coordinates) => {
//     if (error) {
//       console.log(error);
//       return;
//     }
  
//     fetchISSFlyOverTimes(coordinates, (error, flyOverTimes) => {
//       if (error) {
//         console.log(error);
//         return;
//       }

//       for (let timing of flyOverTimes.response) {
//         console.log(`Next pass at ${Date(timing.risetime)} for ${timing.duration} seconds!`);
//       }
//     });
//   });
// });
