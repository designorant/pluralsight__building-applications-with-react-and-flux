'use strict';

var React = require('react');
var ReactRouter = require('react-router');
var Lifecycle = ReactRouter.Lifecycle;

var AboutPage = React.createClass({

    mixins: [ Lifecycle ],

    routerWillLeave: function() {
        return 'Are you sure you want to leave a page that\'s this exciting?';
    },

    render: function() {
        return (
            <div>
                <h1>About</h1>
                <p>
                    This application uses the following technologies:
                </p>
                <ul>
                    <li>React</li>
                    <li>React Router</li>
                    <li>Flux</li>
                    <li>Node</li>
                    <li>Gulp</li>
                    <li>Browserify</li>
                    <li>Bootstrap</li>
                </ul>
            </div>
        );
    }

});

module.exports = AboutPage;
