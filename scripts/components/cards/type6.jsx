var React = require('react');
import ReactRouter from 'react-router';

var Link = ReactRouter.Link;

let Cards = React.createClass({
	handleClick:function(){
		$('.bottom-nav').trigger('click');
	},

	render() {
      return (
			<div id="card" className="type6">
				<header>
					<nav>
						<ul>
						<li className="back-btn" onClick={this.handleClick}><img src="assets/images/back-btn.png" alt="back"/> </li>
							<li>{this.props.texts.backespoir}</li>
						</ul>
					</nav>
					<h1>{this.props.texts.title}</h1>
					<h2 dangerouslySetInnerHTML={{__html:this.props.texts.exergue}}></h2>
				</header>
				 <div className="container">
				 	<div className="row row-centered">
						<div className="col-xs-6 col-centered col-fixed">
							<div className="sep sep-1 sep-left"> </div>
							<p dangerouslySetInnerHTML={{__html:this.props.texts.bloctexte1}}></p>
							<p dangerouslySetInnerHTML={{__html:this.props.texts.bloctexte2}}></p>
							<div className="sep sep-1 sep-right"> </div>
							{function(){
								if (this.props.texts.image1) {
									return <div className="photo-container">
										<div className="border">
											<img src="assets/images/border2.png" alt="revon"/>
										</div>
										<div className="photo">
											<img src={this.props.texts.image1} />
										</div>
									</div>
								}
							}.call(this)}

						</div>
						<div className="col-xs-6 col-centered col-fixed">
							<div className="photo-container">
								<div className="border">
									<img src="assets/images/border2.png" alt="revon"/>
								</div>
								<div className="photo">
									<img src={this.props.texts.image2} />
								</div>
							</div>
							<p dangerouslySetInnerHTML={{__html:this.props.texts.bloctexte3}}></p>
							<div classNameName="sep sep-3 sep-left"> </div>
         		</div>
					</div>
				 </div>
				<div className="spacer"></div>
				<footer>
				<p>{this.props.texts.footer}</p>
				</footer>
			</div>);
    }
});

export default Cards;
