var React = require('react');
import ReactRouter from 'react-router';

var Link = ReactRouter.Link;

let Cards = React.createClass({
	handleClick:function(){
		$('.bottom-nav').trigger('click');
	},

	componentDidUpdate:function(){
		$('#cardVideoType2').attr('src',this.props.texts.video);
	},

	render() {
      return (
			<div id="card" className="type2">
				<header>
					<nav>
						<ul>
						<li className="back-btn" onClick={this.handleClick}><img src="assets/images/back-btn.png" alt="back"/> </li>
							<li>{this.props.texts.backespoir}</li>
						</ul>
					</nav>
					<h1 dangerouslySetInnerHTML={{__html:this.props.texts.title}}></h1>
					<h2 dangerouslySetInnerHTML={{__html:this.props.texts.exergue}}></h2>
				</header>
				 <div className="container">
				 	<div className="row row-centered">
						<div className="sep sep-1 sep-left"> </div>
  						<div className="col-xs-6 col-centered col-fixed">
  							<p dangerouslySetInnerHTML={{__html:this.props.texts.bloctexte1}}></p>
             	</div>
              <div className="col-xs-6 col-centered col-fixed">
								<p dangerouslySetInnerHTML={{__html:this.props.texts.bloctexte2}}></p>
								<div id="quote">
                 	<div class="sep sep-2 sep-left"> </div>
	                 	<p dangerouslySetInnerHTML={{__html:this.props.texts.citation1}}></p>
	                  <div class="sep sep-2 sep-right"> </div>
            		</div>
							</div>

						 	<video id="cardVideoType2" width="946" height="544" controls poster={this.props.texts.image1}>
								<source src={this.props.texts.video} type="video/mp4" />
							 </video>

							 <div className="sep sep-1 sep-left"> </div>

             <div className="col-xs-6 col-centered col-fixed">
  							<p dangerouslySetInnerHTML={{__html:this.props.texts.bloctexte3}}></p>
             </div>

             <div className="col-xs-6 col-centered col-fixed">
     						<p dangerouslySetInnerHTML={{__html:this.props.texts.bloctexte4}}></p>
								<div id="quote">
                 	<div className="sep sep-2 sep-left"> </div>
	                 	<p dangerouslySetInnerHTML={{__html:this.props.texts.citation2}}></p>
	                  <div className="sep sep-2 sep-right"> </div>
            		</div>
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
