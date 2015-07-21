import React from 'react';
import Player from './components/player.jsx';
import Homepage from './components/homepage.jsx';
import Resources from './components/resources.jsx';
import Credits from './components/credits.jsx';
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
/> < Route path = "resources"
handler = {
	Resources
}
/>  < Route path = "credits"
handler = {
	Credits
}
/>< DefaultRoute handler = {
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
