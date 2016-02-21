var React = require('react');
var texts = require('../../../assets/texts/home/texts.json');
import ReactRouter from 'react-router';
import Diaporama from './diaporama.jsx';
var Link = ReactRouter.Link;

let Resources = React.createClass({
	mixins: [ ReactRouter.State ],
	getInitialState: function () {
		return {
			texts: texts,
			nav: null,
			current:'',
			currentPopin:{},
			firstTime:false
		};
	},
	shouldComponentUpdate(params,props){

		if(this.getParams().nav!==this.state.nav){
			this.updateResource();
			return true;
		}
		else{
			return true;
		}
	},
	updateResource:function(){
		$.get(`assets/texts/resources/${this.getParams().nav}/texts.json`, function(result) {
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

	handleClick:function(e){
		this.setState({
			current:$(e.currentTarget).data('resource'),
			currentPopin:this.state.texts[$(e.currentTarget).data('popin')],
			firstTime:true
		});
	},
	render() {
		return (
		<section id="resources">
		<nav><Link to={'\/'} className="back"><img src="assets/images/left-nav.png" alt="back" />{this.state.texts.back}</Link></nav>
		<div className="resources-container">
			<header>
				<nav>
				<Link to={`\/resources\/${this.state.texts.prevResource}`} className="left-nav"><img src="assets/images/left-nav.png" alt="back" />{this.state.texts.prev}</Link>
					<h1 className="periode">{this.state.texts.h1}</h1>
					<Link to={`\/resources\/${this.state.texts.nextResource}`} className="right-nav"><img src="assets/images/right-nav.png" alt="back" />{this.state.texts.next}</Link>
				</nav>
				<h2>{this.state.texts.title}</h2>
			</header>
			<hr />
			<div className="row text-center grid">
			<div className="col-md-4"><button onClick={this.handleClick} data-popin="popin1" data-resource={this.state.texts.ressource1} data-toggle="modal" data-target="#modal"><img src={this.state.texts.ressource1thumb} /><br />{this.state.texts.ressource1}</button></div>
				<div className="col-md-4"><button onClick={this.handleClick} data-popin="popin2" data-resource={this.state.texts.ressource2} data-toggle="modal" data-target="#modal"><img src={this.state.texts.ressource2thumb}/><br />{this.state.texts.ressource2}</button></div>
				<div className="col-md-4"><button onClick={this.handleClick} data-resource={this.state.texts.ressource3} data-popin="popin3" data-toggle="modal" data-target="#modal"><img src={this.state.texts.ressource3thumb}/><br />{this.state.texts.ressource3}</button></div>
			</div>
			<div className="row text-center grid">
			{function(){
				if (this.state.texts.ressource4thumb) {
					return <div className="col-md-4"><button onClick={this.handleClick} data-resource={this.state.texts.ressource4} data-popin="popin4" data-toggle="modal" data-target="#modal"><img src={this.state.texts.ressource4thumb}/><br />{this.state.texts.ressource4}</button></div>;
				}
			}.call(this)}
			{function(){
				if (this.state.texts.ressource5thumb) {
					return <div className="col-md-4"><button onClick={this.handleClick} data-resource={this.state.texts.ressource5} data-popin="popin5" data-toggle="modal" data-target="#modal"><img src={this.state.texts.ressource5thumb}/><br />{this.state.texts.ressource5}</button></div>;
				}
			}.call(this)}
			{function(){
				if (this.state.texts.ressource6thumb) {
					return 	<div className="col-md-4"><button onClick={this.handleClick} data-resource={this.state.texts.ressource6} data-popin="popin6" data-toggle="modal" data-target="#modal"><img src={this.state.texts.ressource6thumb}/><br />{this.state.texts.ressource6}</button></div>;
				}
			}.call(this)}


			</div>
			<div className="row text-center grid">
				{function(){
					if (this.state.texts.ressource7thumb) {
						return 	<div className="col-md-4"><button onClick={this.handleClick} data-resource={this.state.texts.ressource7} data-popin="popin7" data-toggle="modal" data-target="#modal"><img src={this.state.texts.ressource7thumb}/><br />{this.state.texts.ressource7}</button></div>;
					}
				}.call(this)}

			</div>
			<hr />
		</div>
		<div className="modal fade" id="modal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">
			<div className="modal-dialog" role="document">
				<div className="modal-content">
					<div className="modal-header">
						<button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
						<h4 className="modal-title" id="myModalLabel">{this.state.texts.title}:{this.state.current}</h4>
					</div>
					<div className="modal-body">
					<Diaporama popin={this.state.currentPopin} firstTime={this.state.firstTime} />
					</div>
					<div className="modal-footer">
						<div id="btn-last" className="left carousel-control" href="#diaporama" role="button" data-slide="prev"></div>
						<div id="btn-next" className="right carousel-control" href="#diaporama" role="button" data-slide="next"></div>
					</div>
				</div>
			</div>
		</div>
		</section> );
		}
	});

export default Resources;
