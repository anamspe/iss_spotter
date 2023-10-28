const request = require('request-promise-native');

const fetchMyIP = function() {
  return request('http://api.ipify.org?format=json');
};

const fetchCoordsByIP = function (body) {
  const ip = JSON.parse(body).ip;
  return request(`http://ipwho.is/${ip}`);
};

const fetchISSFlyOverTimes = function(response) {
  const geoInfo = JSON.parse(response);
  const latitude = geoInfo.latitude;
  const longitude = geoInfo.longitude;
  const API = `http://iss-flyover.herokuapp.com/json/?lat=${latitude}&lon=${longitude}`;
  return request(API);
}

const nextISSTimesForMyLocation = function() {
  return fetchMyIP()
    .then(fetchCoordsByIP)
    .then(fetchISSFlyOverTimes)
    .then((info) => {
      const { response } = JSON.parse(info);
      return response;
    });
};

module.exports = { nextISSTimesForMyLocation };