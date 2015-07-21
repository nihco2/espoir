var React = require('react');
var texts = require('../../assets/texts.json');
import ReactRouter from 'react-router';

var Link = ReactRouter.Link;

let Credits = React.createClass({
			render() {
				return ( < h1 > {
						texts.credits
					} < /h1> );
				}
			});

		export default Credits;
