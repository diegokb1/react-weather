const axios = require('axios');

const weatherApi = 'https://api.openweathermap.org/data/2.5/weather?appid=0dcf96451a04eca60958b0ebb4ceb8d2&units=metric';

// 0dcf96451a04eca60958b0ebb4ceb8d2

module.exports = {
  getTemp: function (location) {
    const encodedLocation = encodeURIComponent(location);
    const requestUrl = `${weatherApi}&q=${encodedLocation}`;

    return axios.get(requestUrl).then(res => {
      if (res.data.cod && res.data.message) {
        throw new Error(res.data.message);
      } else {
        return res.data.main.temp;
      }
    }, res => {
      throw new Error(`Unable to fetch weather for ${location}`);
    });
  }
}
