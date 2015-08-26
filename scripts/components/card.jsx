var React = require('react');
var texts = require('../../assets/texts.json');
import ReactRouter from 'react-router';

var Link = ReactRouter.Link;

let Cards = React.createClass({
			render() {
				return ( < h1 > {
						texts.portrait
					} < /h1> );
				}
			});

		export default Cards;
