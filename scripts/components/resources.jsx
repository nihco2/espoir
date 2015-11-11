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
		<nav><Link to={'\/'} className="back"><img src="../assets/images/left-nav.png" alt="back" />{this.state.texts.back}</Link></nav>
		<div className="resources-container">
			<header>
				<h1>{this.state.texts.h1}</h1>
			</header>
		</div>
		<div className="menu">
			<div className="row">
			<div className="col-md-6">
				<Link to={'\/resources\/EGA'} className="tiroir tiroir1">
					<div className="periode">{this.state.texts.periode1}</div>
					<div className="periodeTitle">{this.state.texts.periode1Title}</div>
				</Link>
			</div>
			<div className="col-md-6">
				<Link to={'\/resources\/EGA-CFDJ'} className="tiroir tiroir2">
					<div className="periode">{this.state.texts.periode2}</div>
					<div className="periodeTitle" dangerouslySetInnerHTML={{__html:this.state.texts.periode2Title}}></div>
				</Link>
			</div>
			</div>
			<div className="row">
				<div className="col-md-6">
					<Link to={'\/resources\/CFDJ'} className="tiroir tiroir3">
						<div className="periode">{this.state.texts.periode3}</div>
						<div className="periodeTitle">{this.state.texts.periode3Title}</div>
					</Link>
				</div>
				<div className="col-md-6">
					<Link to={'\/resources\/ESPOIR-CFDJ'} className="tiroir tiroir4">
					<div className="periode">{this.state.texts.periode4}</div>
					<div className="periodeTitle">{this.state.texts.periode4Title}</div>
					</Link>
				</div>
			</div>
		</div>
		</section> );
		}
	});

export default Resources;
