const React = require('react');

const WeatherForm = React.createClass({
  handleGetWeather: function (e) {
    e.preventDefault();
    
    const location = this.refs.location.value;

    if (location.length > 0) {
      this.refs.location.value = '';
      this.props.onSearch(location);
    }
  },
  render: function () {
    return (
      <div>
        <form onSubmit={this.handleGetWeather}>
          <div>
            <input type="search" placeholder="Search weather by city" ref="location" />
          </div>
          <div>
            <button className="button expanded hollow" type="submit">Get Weather</button>
          </div>
        </form>
      </div>
    );
  }
});
  
module.exports = WeatherForm;
