var React = require('react');
import ReactRouter from 'react-router';
import Nav from './nav.jsx';

var Link = ReactRouter.Link;

let Cards = React.createClass({
	handleClick:function(){
		if($('body').hasClass('espoir')){
			$('.cards:first #cardVideo').get(0).pause();
		}
		else{
			$('.cards:last-child #cardVideo').get(0).pause();
		}
		if(this.props.isEspoir){
			$('.bottom-nav').trigger('click');
		}
		else{
			$('.top-nav').trigger('click');
		}
	},
	init(){
		if($('body').hasClass('espoir')){
			$('.cards:first #cardVideo').get(0).play();
		}
		else{
			$('.cards:last-child #cardVideo').get(0).play();
		}
	},
	getInitialState(){
		return {
			video: this.props.texts.video,
			videoId: this.props.texts.videoId,
			cardVideoName: $('body').hasClass('espoir') ? 'cardVideoEspoir' : 'cardVideoHistoire'
		}
	},
	componentWillReceiveProps :function(nextProps){
		this.setState({
			video: nextProps.texts.video,
			videoId: nextProps.texts.videoId,
			cardVideoName: $('body').hasClass('espoir') ? 'cardVideoEspoir' : 'cardVideoHistoire'
		});
	},

	render() {
      return (
			<div id="card" className="type4">
				<header>
				<Nav back={this.props.texts.backespoir} callback={this.handleClick} />
				</header>
				 <div className="type4">
				 		<video id="cardVideo" controls poster={this.props.texts.image1} src={this.state.video} />
					</div>
			</div>);
    }
});

export default Cards;
