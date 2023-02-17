const { fetchMyIP, fetchCoordsByIP } = require('./iss');

// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work MyIP!" , error);
//     return;
//   }

//   console.log("It worked MyIP: ", ip);
//   fetchCoordsByIP(ip, (error, coordinates) => {
//     if (error) {
//       console.log("It didn't work! No Coordinates" , error);
//       return;
//     }
  
//     console.log("It worked: our coordinates", coordinates);
//   });

// });