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
      callback(
        undefined,
        `${data.current.weather_descriptions[0]}. It is currently ${data.current.temperature} °C. It feels like ${data.current.feelslike} °C. The humidity is ${data.current.humidity}%`
      );
    }
  });
};

module.exports = forecast;
