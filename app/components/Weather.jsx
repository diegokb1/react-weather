const React = require('react');
const WeatherForm = require('WeatherForm');
const WeatherMessage = require('WeatherMessage');
const weatherApi = require('weatherApi');

const Weather = React.createClass({
  getInitialState: function () {
    return {
      isLoading: false
    }
  },
  handleSearch: function (location) {
    const me = this;

    this.setState({ isLoading: true });

    weatherApi.getTemp(location).then(temp => {
      me.setState({ location, temp, isLoading: false });
    }, errorMessage => {
      alert(errorMessage);
      me.setState({ isLoading: false });
    });
  },
  render: function () {
    const { isLoading, location, temp } = this.state;

    function renderMessage () {
      if (isLoading) {
        return <h3 className="text-center">Fetching weather...</h3>
      } else if (temp && location) {
        return <WeatherMessage location={location} temp={temp} />;
      }
    }
    
    return (
      <div>
        <h1 className="text-center">Get Weather</h1>
        <WeatherForm onSearch={this.handleSearch} />
        {renderMessage()}
      </div>
    );
  }
});
  
module.exports = Weather;
