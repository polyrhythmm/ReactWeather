var React = require('react');

var WeatherForm = React.createClass({
  formOnSubmit: function(e) {
    e.preventDefault();

    var location = this.refs.location.value;

    if(location.length > 0)
    {
      this.refs.location.value = '';
      this.props.onSearch(location);
    }
  },
  render: function() {
    return (
      <div>
        <form onSubmit={this.formOnSubmit}>
          <div>
            <input type="search" placeholder="Search weather by city" ref="location"></input>
          </div>
          <div>
            <button className="button expanded hollow">Get Weather</button>
          </div>
        </form>
      </div>
    );
  }
});

module.exports = WeatherForm;
