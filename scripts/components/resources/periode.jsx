var React = require('react');
var texts = require('../../../assets/texts/home/texts.json');
import ReactRouter from 'react-router';
var Link = ReactRouter.Link;

let Resources = React.createClass({
	mixins: [ ReactRouter.State ],
	getInitialState: function () {
		return {
			texts: texts
		};
	},
	shouldComponentUpdate(params,props){
	console.log(this.getParams(),this.state.nav)
		if(this.getParams().nav!==this.state.nav){
		console.log('UPDATE')
			this.updateResource();
			return true;
		}
		else{
			return false;
		}
	},
	updateResource:function(){
		$.get(`../../assets/texts/resources/${this.getParams().nav}/texts.json`, function(result) {
      if (this.isMounted()) {
        this.setState({
          texts: result,
					nav: this.getParams().nav
        });
        }
      }.bind(this));
	},
  componentWillMount:function(){
 		this.updateResource();
  },
	render() {
		return ( 
		<section id="resources">
		<nav><Link to={'\/'} className="back"><img src="../../assets/images/left-nav.png" alt="back" />{this.state.texts.back}</Link></nav>
		<div className="resources-container">
			<header>
				<nav>
				<Link to={`\/resources\/${this.state.texts.prevResource}`} className="left-nav"><img src="../../assets/images/left-nav.png" alt="back" />{this.state.texts.prev}</Link>
					<h1 className="periode">{this.state.texts.h1}</h1>
					<Link to={`\/resources\/${this.state.texts.nextResource}`} className="right-nav"><img src="../../assets/images/right-nav.png" alt="back" />{this.state.texts.next}</Link>
				</nav>
				<h2>{this.state.texts.title}</h2>
			</header>
			
		</div>
		
		</section> );
		}
	});

export default Resources;
