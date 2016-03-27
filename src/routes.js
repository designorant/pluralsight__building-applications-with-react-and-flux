'use strict';

var React = require('react');
var ReactRouter = require('react-router');
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;

var App = require('./components/app');
var HomePage = require('./components/homePage');
var AuthorPage = require('./components/authors/authorPage');
var AboutPage = require('./components/about/aboutPage');

var routes = (
    <Route path="/" component={App}>
        <IndexRoute component={HomePage} />
        <Route path="authors" component={AuthorPage} />
        <Route path="about" component={AboutPage} />
    </Route>
)

module.exports = routes;
