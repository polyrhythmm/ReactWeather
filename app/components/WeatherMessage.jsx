var React = require('react');

var WeatherMessage = ({location, temp}) => {

var message = <p className="text-center">It's {temp} in {location}</p>;

  return (
    <div>
      {message}
    </div>
  );
}

module.exports = WeatherMessage;
