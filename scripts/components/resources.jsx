var React = require('react');
var texts = require('../../assets/texts.json');
import ReactRouter from 'react-router';

var Link = ReactRouter.Link;

let Resources = React.createClass({
			render() {
				return ( < h1 > {
						texts.resources
					} < /h1> );
				}
			});

		export default Resources;
