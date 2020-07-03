const React = require('react');
const WeatherForm = require('WeatherForm');
const WeatherMessage = require('WeatherMessage');
const weatherApi = require('weatherApi');
const ErrorModal = require('ErrorModal');

const Weather = React.createClass({
  getInitialState: function () {
    return {
      isLoading: false,
      errorMessage: undefined,
    }
  },
  componentDidMount: function () {
    const location = this.props.location.query.location;
    if (location && location.length > 0) {
      this.handleSearch(location);
      window.location.hash = '#/';
    }
  },
  componentWillReceiveProps: function (newProps) {
    const location = newProps.location.query.location;
    if (location && location.length > 0) {
      this.handleSearch(location);
      window.location.hash = '#/';
    }
  },
  handleSearch: function (location) {
    const me = this;

    this.setState({
      isLoading: true,
      errorMessage: undefined,
      temp: undefined,
      location: undefined
    });

    weatherApi.getTemp(location).then(temp => {
      me.setState({ location, temp, isLoading: false });
    }, e => {
      me.setState({ isLoading: false, errorMessage: e.message });
    });
  },
  render: function () {
    const { isLoading, location, temp, errorMessage } = this.state;

    function renderMessage () {
      if (isLoading) {
        return <h3 className="text-center">Fetching weather...</h3>
      } else if (temp && location) {
        return <WeatherMessage location={location} temp={temp} />;
      }
    }

    function renderError () {
      if (typeof errorMessage === 'string') {
        return (
          <ErrorModal message={errorMessage} />
        );
      } 
    }
    
    return (
      <div>
        <h1 className="text-center page-title">Get Weather</h1>
        <WeatherForm onSearch={this.handleSearch} />
        {renderMessage()}
        {renderError()}
      </div>
    );
  }
});
  
module.exports = Weather;
