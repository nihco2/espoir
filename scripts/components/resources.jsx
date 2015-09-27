var React = require('react');
var texts = require('../../assets/texts/resources/texts.json');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

let Resources = React.createClass({
	getInitialState: function () {
		return {
			texts: texts
		};
	},
	render() {
		return ( 
		<section id="resources">
		<nav><Link to={'\/'} className="back"><img src="../../assets/images/left-nav.png" alt="back" />{this.state.texts.back}</Link></nav>
		<div className="resources-container">
			<header>
				<h1>{this.state.texts.h1}</h1>
			</header>
		</div>
		<div className="menu">
			<div className="row">
			<div className="col-md-6"><Link to={'\/resources\/EGA'}><img src="../../assets/images/item1.png" alt="item1" /></Link></div>
				<div className="col-md-6"><Link to={'\/resources\/EGA-CFDJ'}><img src="../../assets/images/item2.png" alt="item2" /></Link></div>
			</div>
			<div className="row">
				<div className="col-md-6"><Link to={'\/resources\/CFDJ'}><img src="../../assets/images/item3.png" alt="item3" /></Link></div>
				<div className="col-md-6"><Link to={'\/resources\/ESPOIR-CFDJ'}><img src="../../assets/images/item4.png" alt="item4" /></Link></div>
			</div>
		</div>
		</section> );
		}
	});

export default Resources;
