var React = require('react');
import ReactRouter from 'react-router';
import Nav from './nav.jsx';

var Link = ReactRouter.Link;

let Cards = React.createClass({
	handleClick:function(){
		$('#cardVideo').get(0).pause();
		if(this.props.isEspoir){
			$('.bottom-nav').trigger('click');
		}
		else{
			$('.top-nav').trigger('click');
		}
	},

	componentWillMount:function(){
		$('#cardVideo').attr('src',this.props.texts.video);
	},

	render() {
      return (
			<div id="card" className="type4">
				<header>
				<Nav back={this.props.texts.backespoir} callback={this.handleClick} />
				</header>
				 <div className="type4">
				 		<video id="cardVideo" controls poster={this.props.texts.image1}>
								<source src={this.props.texts.video} type="video/mp4" />
						</video>
					</div>
			</div>);
    }
});

export default Cards;
