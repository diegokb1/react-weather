const React = require('react');

const WeatherMessage = ({ location, temp }) => {
  return (
    <div>
      <h3>It's {temp} degrees in {location}</h3>
    </div>
  );
}
  
module.exports = WeatherMessage;
