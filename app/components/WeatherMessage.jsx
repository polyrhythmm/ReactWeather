var React = require('react');

var WeatherMessage = ({location, temp}) => {

var message = <p>It's {temp} in {location}</p>;

  return (
    <div>
      {message}
    </div>
  );
}

module.exports = WeatherMessage;
