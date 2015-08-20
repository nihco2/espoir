var React = require('react');
var texts = require('../../assets/texts.json');
var routes = require('../../assets/routes.json');
import ReactRouter from 'react-router';

var Link = ReactRouter.Link;

let Homepage = React.createClass({
		getInitialState: function () {
			return {
				firstPeriode: routes.periodes[0]
			};
		},
		render() {
			return ( < div className = "homepage" > < nav > < Link to = {
					'\/resources'
				} > {
					texts.resources
				} < /Link ><Link to={'\/credits'}>{texts.credits}</Link > < /nav> < div className = "container" > < div className = "intro" > < h1 > {
				texts.h1
			} < /h1> < h2 > {
			texts.h2
		} < /h2> < h3 > {
		texts.h3
	} < /h3> < h4 > {
	texts.h4
} < /h4>  < p > {
texts.description
} < /p> <Link to={`\/player\/${this.state.firstPeriode}`} className="go">{texts.go}</Link > < /div>< /div > < aside > < div className = "home-menu item1" > < /div> < div className = "home-menu item2" > < /div > < div className = "home-menu item3" > < /div > < div className = "home-menu item4" > < /div > < div className = "home-menu item5" > < /div > < div className = "home-menu item6" > < /div > < /aside > < /div > );
}
});

export default Homepage;