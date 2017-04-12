var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap')

var Weather = React.createClass({

  getInitialState: function() {
    return {
      isLoading: false
    }
  },

  handleSearch: function(location) {
    var that = this;

    this.setState({
      isLoading: true
    })

    openWeatherMap.getTemp(location).then(function(temp) {
        that.setState({
          location: location,
          temp: temp,
          isLoading: false
        })
    }, function(errorMessage) {
      that.setState({
        isLoading: false,
        location: null,
        temp: null
      });
        alert(errorMessage);
    });

  },

  render: function() {

      var {isLoading, location, temp} = this.state;

      function renderMessage()
      {
        if(isLoading)
        {
          return <h3>Fetching weather...</h3>;

        } else if(typeof temp !== 'undefined' && temp !== null && typeof location !== 'undefined' && location !== null)
        {
          return <WeatherMessage location={location} temp={temp}/>
        }
      }
      return (
        <div>
          <h3>Get Weather</h3>
          <WeatherForm onSearch={this.handleSearch}/>
          {renderMessage()}
        </div>
    );
  }
});

module.exports = Weather;
