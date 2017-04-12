var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = () => {
  return (
    <nav>
      <h1>Nav Component</h1>
      <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>
      <IndexLink to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</IndexLink>
      <IndexLink to="/examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</IndexLink>
    </nav>
  );
}

module.exports = Nav;
