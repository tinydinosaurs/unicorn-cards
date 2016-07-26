import React from 'react';
import Backbone from 'backbone';
import UnicornArray from '../unicorn-array'

console.log(UnicornArray[2].name);

const Nav = React.createClass({
    render: function() {
      return (
        <ul>
          <li><a href="#unicorn/charlie">larry</a></li>
          <li><a href="#unicorn/spritzie">spritzie</a></li>
          <li><a href="#unicorn/lightning">lightning</a></li>
          <li><a href="#unicorn/sunshine">sunshine</a></li>
          <li><a href="#unicorn/bill">bill</a></li>
        </ul>
      )
    }
});

export default Nav
