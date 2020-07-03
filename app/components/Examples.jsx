const React = require('react');
const { Link } = require('react-router');

const Examples = () => {
  return (
    <div>
      <h1 className="text-center">Examples</h1>
      <p>Here are a few examples locations to try out:</p>
      <ol>
        <li>
          <Link to="/?location=Alaska">Alaska, AK</Link>
        </li>
        <li>
          <Link to="/?location=Montevideo">Montevideo, Uruguay</Link>
        </li>
      </ol>
    </div>
  );
}
  
module.exports = Examples;
