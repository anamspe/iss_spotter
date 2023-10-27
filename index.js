const { fetchISSFlyOverTimes } = require('./iss');

// Fetches user IP
// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work", error);
//     return;
//   }

//   console.log("It worked! Returned IP:", ip);
// });

// Fetches user coordinates
// fetchCoordsByIP('173.183.119.232', (error, coordinates) => {
//   if (error) {
//     console.log("It didn't work", error);
//     return;
//   }

//   console.log("It worked! Here are your coordinates:", coordinates);
// });

//Fetches the times that the ISS will fly over the given coordinates

// const coords = { latitude: '49.2057179', longitude: '-122.910956' }

// fetchISSFlyOverTimes(coords, (error, response) => {
//   if(error) {
//     console.log("It didn't work:", error);
//     return;
//   }

//   console.log("It worked! Returned flyover times:", response);
// });