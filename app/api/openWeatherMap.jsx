var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=5b7387c8ebd93b116bcfec67ad95aeb2&units=metric';

//key = 5b7387c8ebd93b116bcfec67ad95aeb2

module.exports = {
  getTemp: function(location) {
    var encodedLocation = encodeURIComponent(location);

    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    return axios.get(requestUrl).then(function(response) {

      if(response.data.name.toLowerCase() !== location.toLowerCase())
      {
        throw new Error("Invalid Input");
      } else if(response.data.cod && response.data.message) {
          throw new Error(response.data.message)
        } else {
          return response.data.main.temp;
        }
    }, function(response) {
        throw new Error(response.response.data.message);
    });
  }
}
