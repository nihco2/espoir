var React = require('react');
import ReactRouter from 'react-router';

var Link = ReactRouter.Link;

let Cards = React.createClass({
	mixins: [ ReactRouter.State ],
	getInitialState: function () {
		console.log(this.getParams());
		var texts = require('../../assets/texts.json');
		return texts;
	},
	render() {
		return ( <h1> {
				this.state.portrait
			} < /h1> );
		}
});

export default Cards;
