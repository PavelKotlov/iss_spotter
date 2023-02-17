const request = require('request-promise-native');
const inspect = require('util').inspect

const fetchMyIP = () => {
  return request('https://api.ipify.org?format=json')
};

const fetchCoordsByIP = (body) => {
  const ipAddress = JSON.parse(body).ip;
  return request(`https://ipwho.is/${ipAddress}?output=json`);
};

const fetchISSFlyOverTimes = (coords) => {
  const coordinates = JSON.parse(coords);
  const {latitude, longitude} = coordinates;
  return request(`https://iss-flyover.herokuapp.com/json/?lat=${latitude}&lon=${longitude}`)
};

const nextISSTimesForMyLocation = () => {
  return fetchMyIP()
    .then(fetchCoordsByIP)
    .then(fetchISSFlyOverTimes)
    .then((times) => {
      const {response} = JSON.parse(times);
      return response;
    });
};

module.exports = {
  nextISSTimesForMyLocation
}