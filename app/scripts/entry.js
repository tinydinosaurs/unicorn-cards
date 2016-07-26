console.log('goodbye blue monday');
import React from 'react';
import { Router, Route, hashHistory } from 'react-router';
import ReactDOM from 'react-dom';

const UniForm = React.createClass({
  createUnicorn: function(e) {
    e.preventDefault();
    console.log('you clicked!');
  },
  render: function() {
    return (
      <form className="uni-form">
        <input type="text" placeholder="name" ref="name" />
        <input type="text" placeholder="age" ref="age" />
        <input type="text" placeholder="color" ref="color" />
        <input type="text" placeholder="power" ref="power" />
        <input type="text" placeholder="image" ref="image" />
        <button onClick={this.createUnicorn}>create unicorn!</button>
      </form>
    )
  }
});

ReactDOM.render(<UniForm />, document.querySelector('main'))
//Backbone router stuff
// import Backbone from 'backbone';
// import Router from './router';

// Backbone.history.start();
