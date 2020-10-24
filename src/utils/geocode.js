const request = require('postman-request');

const geocode = (address, callback) => {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
    address
  )}.json?access_token=pk.eyJ1IjoiczFuZW5zaXMiLCJhIjoiY2tkdDR5cWY2MWQ0ajM5bGowZmliMWgzZyJ9.vN8WZRgmBWP9VufqlZ_rPQ&language=pt&limit=1`;

  request({ url, json: true }, (error, { body }) => {
    const data = body;
    if (error) {
      callback('Unable to connect to location services!', undefined);
    } else if (!data.features[0]) {
      callback('Unable to find location. Try another search.', undefined);
    } else {
      callback(undefined, {
        latitude: data.features[0].center[1],
        longitude: data.features[0].center[0],
        location: data.features[0].place_name,
      });
    }
  });
};

module.exports = geocode;
