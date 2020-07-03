const React = require('react');

const WeatherMessage = ({ location, temp }) => {
  return (
    <div>
      <h3 className="text-center">It's {temp} degrees in {location}</h3>
    </div>
  );
}
  
module.exports = WeatherMessage;
