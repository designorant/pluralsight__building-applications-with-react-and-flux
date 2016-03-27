'use strict';

var React = require('react');
var Header = require('./common/header');
global.$ = global.jQuery = require('jquery');

var App = React.createClass({

    propTypes: {
        children: React.PropTypes.object
    },

    render: function() {
        return (
            <div>
                <Header />
                <div className="container-fluid">
                    {this.props.children}
                </div>
            </div>
        );
    }

});

module.exports = App;
