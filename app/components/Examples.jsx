const React = require('react');
const { Link } = require('react-router');

const Examples = () => {
  return (
    <div>
      <h1 className="text-center page-title">Examples</h1>
      <p>Here are a few examples locations to try out:</p>
      <ol>
        <li>
          <Link to="/?location=Anchorage">Anchorage, AK</Link>
        </li>
        <li>
          <Link to="/?location=Montevideo">Montevideo, Uruguay</Link>
        </li>
      </ol>
    </div>
  );
}
  
module.exports = Examples;
