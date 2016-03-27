'use strict';

var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var routes = require('./routes')

ReactDOM.render(<Router routes={routes} />, document.getElementById('app'));
