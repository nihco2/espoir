var React = require('react');
import ReactRouter from 'react-router';

var Link = ReactRouter.Link;

let Cards = React.createClass({
	getInitialState(){
	return {
		index:1
		}
	},
	handleClick:function(){
		$('.bottom-nav').trigger('click');
	},

	componentDidMount(){
		var self=this;
		$('#border-4').cycle({ 
			fx:     'fade', 
			speed:  'fast', 
			timeout: 0, 
			next:   '#btn-next', 
			prev:   '#btn-last',
			onPrevNextEvent:function(isNext, zeroBasedSlideIndex, slideElement){
			self.setState({
				index:zeroBasedSlideIndex+1
			})
			}
		});
	},
	render() {
      return (
			<div id="card">
				<header>
					<nav>
						<ul>
              <li className="back-btn" onClick={this.handleClick}><img src="../assets/images/back-btn.png" alt="back"/> </li>
							<li>{this.props.texts.backespoir}</li>
						</ul>
					</nav>
					<h1>{this.props.texts.title}</h1>
					<h2 dangerouslySetInnerHTML={{__html:this.props.texts.exergue}}></h2>
				</header>   
				 <div className="container">
				 	<div className="row row-centered">
						<div className="text-center"> 
							<div id="border-4"> 
								<img src={this.props.texts.diapo1} />
								<img src={this.props.texts.diapo2} />
								<img src={this.props.texts.diapo3} />
								<img src={this.props.texts.diapo3bis} />
								<img src={this.props.texts.diapo4} />
								<img src={this.props.texts.diapo4bis} />
								<img src={this.props.texts.diapo5} />
								<img src={this.props.texts.diapo5bis} />
								<img src={this.props.texts.diapo6} />
								<img src={this.props.texts.diapo7} />
								<img src={this.props.texts.diapo8} />
								<img src={this.props.texts.diapo9} />
								<img src={this.props.texts.diapo10} />
								<img src={this.props.texts.diapo10bis} />
								<img src={this.props.texts.diapo11} />
								<img src={this.props.texts.diapo12} />
								<img src={this.props.texts.diapo13} />
								<img src={this.props.texts.diapo14} />
								<img src={this.props.texts.diapo15} />
								<img src={this.props.texts.diapo16} />
								<img src={this.props.texts.diapo16bis} />
								<img src={this.props.texts.diapo17} />
							</div> 
							<div id="bottom-nav"> 
								<div id="last-next">
									<div id="btn-last"></div>
									<div id="btn-next"></div>
								</div> 
								<div id="page-num">{this.state.index}/22</div>
							</div>
						 <div className="sep sep-4 sep-center "> </div>
                            
           	</div>   
      
  			 		<div className="row">
							<div className="col-md-6 text-justify"> 
								<p dangerouslySetInnerHTML={{__html:this.props.texts.bloctexte1}}></p>
							</div>
							<div className="col-md-6 text-justify"> 
								<p dangerouslySetInnerHTML={{__html:this.props.texts.bloctexte2}}></p>
							</div>
						</div>
					</div>
				 </div>
			</div>);
    }
});

export default Cards;
