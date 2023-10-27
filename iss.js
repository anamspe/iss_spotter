// Logic to fetch the data from each API endpoint

const request = require('request');

/**
 * Makes a single API request to retrieve the user's IP address.
 * Input:
 *   - A callback (to pass back an error or the IP string)
 * Returns (via Callback):
 *   - An error, if any (nullable)
 *   - The IP address as a string (null if error). Example: "162.245.144.188"
 */
// const fetchMyIP = function(callback) {
//   // use request to fetch IP address from JSON API

//   request('http://api.ipify.org?format=json', (error, response, body) => {
//     if(error) {
//       callback(error, null);
//       return;
//     }

//     //if non-200 status, assume server error
//     if (response.statusCode !== 200) {
//     const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
//     callback(Error(msg), null);
//     return;
//     }

//     const ip = JSON.parse(body).ip;
//     callback(null, ip);
//   });
// };

// const fetchCoordsByIP = function(ip, callback) {
//   request(`http://ipwho.is/${ip}`, (error, response, body) => {
//     if (error) {
//       callback(error, null);
//       return;
//     }
    
//     const data = JSON.parse(body);

//     if (!data.success) {
//       const message = `Error: Success status was ${data.success}. Server message says: ${data.message} when fecthing for IP ${data.ip}`;
//       callback(Error(message), null);
//       return;
//     }

//     const coords = {
//       latitude: data.latitude,
//       longitude: data.longitude
//     };

//     // const {latitude, longitude} = data;

//     callback(null, coords);
//   });
// };

const fetchISSFlyOverTimes = function(coords, callback) {
  const API = `https://iss-flyover.herokuapp.com/json/?lat=${coords.latitude}&lon=${coords.longitude}`; 

  request(API, (error, response, body) => {
    if (error) {
      callback(error, null);
      return;
    }

    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching ISS pass times. Response: ${body}`;
      callback(Error(msg), null);
      return;
    }


    const info = JSON.parse(body);
    callback(null, info.response);
  });
};

module.exports = { fetchISSFlyOverTimes };