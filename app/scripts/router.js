import React from 'react';
import ReactDOM from 'react-dom';
import Backbone from 'backbone';
import Nav from './components/nav';
import UnicornList from './components/unicorn-list';
import Login from './components/login';
import UniForm from './components/uni-form';

const Router = Backbone.Router.extend({
  routes: {
    '': 'index',
    'unicorn/:unicornName': 'unicornFunction',
    'unicorns': 'unicornListFunction',
    'login': 'loginFunction'
  },
  unicornListFunction: function(unicorns) {
    ReactDOM.render(<UnicornList />, document.getElementById('header'))
    ReactDOM.render(<Nav />, document.getElementById('nav'))
    ReactDOM.render(<div>hello?</div>, document.getElementById('container'))
  }

});
var router = new Router();

export default router
