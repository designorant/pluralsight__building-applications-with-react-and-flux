'use strict';

var React = require('react');
var ReactRouter = require('react-router');
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var Redirect = ReactRouter.Redirect;

var App = require('./components/app');
var HomePage = require('./components/homePage');
var AuthorPage = require('./components/authors/authorPage');
var AboutPage = require('./components/about/aboutPage');
var NotFoundPage = require('./components/notFoundPage');

var routes = (
    <Route path="/" component={App}>
        <IndexRoute component={HomePage} />
        <Route path="authors" component={AuthorPage} />
        <Route path="about" component={AboutPage} />
        <Redirect from="about-us" to="about"/>
        <Redirect from="about/*" to="about"/>
        <Route path="*" component={NotFoundPage}/>
    </Route>
)

module.exports = routes;
