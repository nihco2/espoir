import React from 'react';
import Player from './components/player.jsx';
import Homepage from './components/homepage.jsx';
import Resources from './components/resources.jsx';
import ResourcesPeriode from './components/resources/periode.jsx';
import Credits from './components/credits.jsx';
import Card from './components/card.jsx';
import Router from 'react-router';

var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;

var routes = ( < Route handler = {
	App
} >

<Route name="player" path = "player/:periode"
	handler = {
		Player
	}
	/>
  <Route name="resources" path = "resources" handler = {Resources} / >
	<Route path ="resources/:nav" handler = {ResourcesPeriode} />
  <Route name="cards" path = "cards/:periode/:nav/:card" handler = {Card} />
  <Route path = "credits"
  handler = {
      Credits
  }
  />
  <DefaultRoute handler = {
    Homepage
  }
  />
</Route>

);

var App = React.createClass({
	render() {
		return ( < Homepage / > )
	}
});

Router.run(routes, (Root) => {
	React.render( < Root / > , document.body);
});
