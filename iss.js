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

module.exports = {
  fetchMyIP,
  fetchCoordsByIP
};