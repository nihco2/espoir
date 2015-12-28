var React = require('react');
import ReactRouter from 'react-router';

var Link = ReactRouter.Link;

let Cards = React.createClass({
	handleClick:function(){
		$('.top-nav').trigger('click');
	},

	render() {
      return (
			<div id="card" className="histoire type5">
				<header>
					<nav onClick={this.handleClick}>
						<ul>
              <li className="back-btn"><img src="assets/images/back-btn.png" alt="back"/> </li>
							<li>{this.props.texts.backhistoire}</li>
						</ul>
					</nav>
					 <h1>ESPOIR</h1>
				</header>
				 <div className="container">
				 	<div className="row row-centered">
						<div className="col-lg-12 col-centered">
      				<h2>{this.props.texts.title}</h2>
      				 <div className="lettrine">
        				<p dangerouslySetInnerHTML={{__html:this.props.texts.chapeau}}></p>
      				</div>
      				<div className="sep sep-5 "> </div>
      				<div className="col-lg-12">
        				<div className="col3">
									<p><span className="italic">{this.props.texts.question1}</span></p>
									<p dangerouslySetInnerHTML={{__html:this.props.texts.citation1}}></p>
									<p dangerouslySetInnerHTML={{__html:this.props.texts.bloctexte1}}></p>
        				</div>
      				</div>
      				<div className="col-lg-12 col-centered middle">
								<div className="col-lg-8 "><img src={this.props.texts.image1} /> </div>
        				<div className="col-lg-5 col-centered ">
									<p><span className="italic">{this.props.texts.question2}</span></p>
          				<p dangerouslySetInnerHTML={{__html:this.props.texts.bloctexte2}}></p>
									<p><span className="italic">{this.props.texts.question3}</span></p>
									<p dangerouslySetInnerHTML={{__html:this.props.texts.bloctexte3}}></p>
								</div>
							</div>
      			</div>
							<div className="col-lg-12 col-centered ">
								<div className="col3">
									<p><span className="italic">{this.props.texts.question4}</span></p>
									<p dangerouslySetInnerHTML={{__html:this.props.texts.bloctexte4}}></p>
								</div>
        				<div className="sep sep-6 "> </div>
							</div>
						</div>
					</div>
					<footer>
						<p>{this.props.texts.footer}</p>
					</footer>
				</div>);
    }
});

export default Cards;
