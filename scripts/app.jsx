import React from 'react';
import Player from './components/player.jsx';
import Homepage from './components/homepage.jsx';
import Router from 'react-router';

var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;
window.React = React;

var routes = ( < Route handler = {
	App
} >
< Route path = "player"
handler = {
	Player
}
/> > < DefaultRoute handler = {
Homepage
}
/> < /Route >

);

var App = React.createClass({
	render() {
		return ( < Homepage / > )
	}
});

Router.run(routes, (Root) => {
	React.render( < Root / > , document.body);
});
//React.render( < Player / > , document.getElementById('content'));
