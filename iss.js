const request = require('request');

const fetchMyIP = function(callback) {

  request('https://api.ipify.org?format=json', (error, response, body) => {
    if (error) return callback(error, null);

    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
      callback(Error(msg), null);
      return;
    }

    callback(null, JSON.parse(body).ip);
    
  });
};

const fetchCoordsByIP = function(ip, callback) {
  request(`https://ipwho.is/${ip}?output=json`, (error, response, body) => {
    if (error) return callback(error, null);

    const jsonObject = JSON.parse(body);

    if (!jsonObject.success) {
      const msg = `Success status was ${jsonObject.success}. Server message says: ${jsonObject.message} when fetching for IP ${jsonObject.ip}`;
      callback(Error(msg).message, null);
      return;
    }

    callback(null, {latitude: JSON.parse(body).latitude, longitude: JSON.parse(body).longitude});
    
  });
};

const fetchISSFlyOverTimes = function(coords, callback) {
  request(`https://iss-flyover.herokuapp.com/json/?lat=${coords.latitude}&lon=${coords.longitude}`, (error, response, body) => {
  
    if (error) return callback(error, null);

    const jsonObject = JSON.parse(body);

    if (response.statusCode !== 200) {
      const msg = `Success status was ${jsonObject.success}. Server message says: ${jsonObject.message} when fetching for coordinates ${coords}`;
      callback(Error(msg).message, null);
      return;
    }

    callback(null, jsonObject);
    
  });
};

const nextISSTimesForMyLocation = function(callback) {
  fetchMyIP((error, ip) => {
    if (error) {
      return error;
    }
  
    fetchCoordsByIP(ip, (error, coordinates) => {
      if (error) {
        return error;
      }
    
      fetchISSFlyOverTimes(coordinates, (error, flyOverTimes) => {
        if (error) {
          return callback(error, null);
        }
        
        callback(null, flyOverTimes.response);
      });
    });
  });
};

module.exports = {
  fetchMyIP,
  fetchCoordsByIP,
  fetchISSFlyOverTimes,
  nextISSTimesForMyLocation
};