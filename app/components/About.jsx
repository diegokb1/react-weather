const React = require('react');

const About = ({ props }) => {
  return (
    <div>
      <h1 className="text-center page-title">About</h1>
      <p>
        This is a weather app built on React.
      </p>
      <p>
        The app was bulit using:
      </p>
      <ul>
        <li>
          <a href="https://facebook.github.io/react">React</a>
        </li>
        <li>
          <a href="http://openweathermap.org">Open Weather Map</a>
        </li>
      </ul>
    </div>
  );
}
  
module.exports = About;
