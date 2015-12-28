var React = require('react');
var texts = require('../../assets/texts/home/texts.json');
var routes = require('../../assets/routes.json');
import ReactRouter from 'react-router';

var Link = ReactRouter.Link;

let Homepage = React.createClass({
		getInitialState: function () {
			return {
				firstPeriode: routes.periodes[0],
				texts: texts
			};
		},
		render() {
			return ( 
			< div className = "homepage" > < nav > < Link to = {
					'\/resources'
				} > {
					texts.resources
				} < /Link ><Link to={'\/credits'}>{texts.credits}</Link > < /nav>  < div className = "home" > < div className = "container" > < div className = "intro" > < h1 > {
				texts.h1
			} < /h1> < h2 > {
			texts.h2
		} < /h2> < h3 > {
		texts.h3
	} < /h3> < h4 > {
	texts.h4
} < /h4>
<p dangerouslySetInnerHTML={{__html:this.state.texts.description}}></p>
<Link to={`\/player\/${this.state.firstPeriode}`} className="go">{texts.go}</Link> < /div>< /div > < /div > < div className = "menutitle" > {
texts.periodes
} < span className = "arrow" > < /span>< /div > < aside > < Link to = {
		`\/player\/${this.state.texts.periode1}`
	} > < div className = "home-menu item1" > < span className = "periode" > {
		texts.periode1
	} < span className = "periodeTitle" > {
		texts.periode1Title
	} < /span>< /span > < /div >< /Link >
	< Link to = {
		`\/player\/${this.state.texts.periode2}`
	} >
	< div className = "home-menu item2" > < span className = "periode" > {
		texts.periode2
	} < span className = "periodeTitle" > {
		texts.periode2Title
	} < /span>< /span > < /div > < /Link >
	< Link to = {
		`\/player\/${this.state.texts.periode3}`
	} >
	< div className = "home-menu item3" > < span className = "periode" > {
		texts.periode3
	} < span className = "periodeTitle" > {
		texts.periode3Title
	} < /span>< /span > < /div > < /Link >
	< Link to = {
		`\/player\/${this.state.texts.periode4}`
	} >
	< div className = "home-menu item4" > < span className = "periode" > {
		texts.periode4
	} < span className = "periodeTitle" > {
		texts.periode4Title
	} < /span>< /span > < /div > < /Link >
	< Link to = {
		`\/player\/${this.state.texts.periode5}`
	} >
	< div className = "home-menu item5" > < span className = "periode" > {
		texts.periode5
	} < span className = "periodeTitle" > {
		texts.periode5Title
	} < /span>< /span > < /div > < /Link >
	< Link to = {
		`\/player\/${this.state.texts.periode6}`
	} >
	< div className = "home-menu item6" > < span className = "periode" > {
		texts.periode6
	} < span className = "periodeTitle" > {
		texts.periode6Title
	} < /span>< /span > < /div > < /Link > < /aside > < /div > );
}
});

export default Homepage;
