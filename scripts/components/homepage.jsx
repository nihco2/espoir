var React = require('react');
var texts = require('../../assets/texts.json');
import ReactRouter from 'react-router';

var Link = ReactRouter.Link;

let Homepage = React.createClass({
	render() {
		return ( < div className = "homepage" >
			< div className = "container" >
			< div className = "intro" >
			< h1 > {
				texts.h1
			} < /h1> < h2 > {
			texts.h2
		} < /h2> < h3 > {
		texts.h3
	} < /h3> < h4 > {
	texts.h4
} < /h4>  < p > {
texts.description
} < /p> <Link to={'\/player'}>{texts.go}</Link > < /div>< /div > < /div > );
}
});

export default Homepage;
