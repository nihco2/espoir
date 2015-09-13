var React = require('react');
import ReactRouter from 'react-router';

var Link = ReactRouter.Link;

let Cards = React.createClass({
	handleClick:function(){
		$('.top-nav').trigger('click');
	},

	render() {
      return (
			<div id="card"> 
				 <div className="type4">
				 		<video controls poster={this.props.texts.image1}>
								<source src={this.props.texts.video} type="video/mp4" /> 
						</video>
							<nav>
							<ul>
								<li className="back-btn" onClick={this.handleClick}>
									<img src="../assets/images/back-btn-bottom.png" alt="back"/> 
								</li>
								<li>{this.props.texts.backespoir}</li>
							</ul>
						</nav>
					</div>
			</div>);
    }
});

export default Cards;
