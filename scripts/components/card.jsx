var React = require('react');
import ReactRouter from 'react-router';

var Link = ReactRouter.Link;

let Cards = React.createClass({
	mixins: [ ReactRouter.State ],
	getInitialState: function () {
    return {
        texts:null
      };
	},
    componentWillMount:function(){
 $.get(`../../assets/texts/cards/${this.getParams().periode}/${this.getParams().nav}/${this.getParams().card}.json`, function(result) {
      if (this.isMounted()) {
        this.setState({
          texts: result
        });
        }
      }.bind(this));
    },
	render() {
    if(this.state.texts){
      return (
			<div>
				<header>
					<nav>
						<ul>
						<li class="back-btn"><img src="img/back-btn.png" alt="back"/> </li>
							<li>retour au récit</li>
						</ul>
					</nav>
					<h1>{this.state.texts.title}</h1>
				</header>   
				 <div class="container">
				 	<div class="row row-centered">
						<div class="col-xs-6 col-centered col-fixed"> 
  						<div class="sep sep-1 sep-left"> </div>
							<p>En 1934, Marie-Magdeleine REVON (née Vavin) (1909-1985) créé à Paris les premiers Cercles Familiaux de Jeunes. Son mari, Louis REVON (1898-1991), est ingénieur en chef à la SNCF. Il profite de son poste dans la structure pour mettre à disposition plusieurs locaux aux CFDJ.</p><br /><br />
							<p>Le couple REVON deviendra un véritable pilier de l'histoire des trois associations. Durant toute l'existence des CFDJ, de 1934 à 1941, Marie-Magdeleine REVON assurera le secrétariat général. Louis en sera le président. Le couple conserve ses fonctions lors de la fusion entre l'EGA et les CFDJ, puis lors de la refonte de l'association en ESPOIR-CFDJ. Louis et Marie-Magdeleine poursuivront respectivement leur rôle de président et de secrétaire générale d'ESPOIR-CFDJ jusqu'en 1968. Ils restent cependant membres du conseil d'administration jusqu'en 1983.</p>
							<div class="sep sep-1 sep-right"> </div>
							<div id="border-1"> <img src="img/agnes-revon.jpg" alt="revon"/></div>
							<h1>toto</h1>
						</div>
					</div>
				 </div>
				<footer>
					<p>Épsiode 1 - <span>Les bagnes pour enfant</span> - Fiche : les couples Revon - Retour au film</p>
				</footer>
			</div>);
    }
    return (<div>Loading...</div>);
    }
});

export default Cards;
