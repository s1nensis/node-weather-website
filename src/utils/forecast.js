const request = require('postman-request');

const forecast = (latitude, longitude, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=1c70402988ff704cfcdf459fec74caad&query=${encodeURIComponent(
    latitude
  )},${encodeURIComponent(longitude)}`;

  request({ url, json: true }, (error, { body }) => {
    const data = body;
    if (error) {
      callback('Unable to connect to location services!', undefined);
    } else if (data.error) {
      callback('Unable to find location. Try another search.', undefined);
    } else {
      callback(undefined, {
        temperature: data.current.temperature,
        feelslike: data.current.feelslike,
        description: data.current.weather_descriptions,
      });
    }
  });
};

module.exports = forecast;
