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
			<div id="card">
				<header>
					<nav>
						<ul>
                        <li className="back-btn"><img src="../assets/images/back-btn.png" alt="back"/> </li>
							<li>retour au récit</li>
						</ul>
					</nav>
					<h1>{this.state.texts.title}</h1>
				</header>   
				 <div className="container">
				 	<div className="row row-centered">
						<div className="col-xs-6 col-centered col-fixed"> 
  						  <div className="sep sep-1 sep-left"> </div>
						  <p>En 1934, Marie-Magdeleine REVON (née Vavin) (1909-1985) créé à Paris les premiers Cercles Familiaux de Jeunes. Son mari, Louis REVON (1898-1991), est ingénieur en chef à la SNCF. Il profite de son poste dans la structure pour mettre à disposition plusieurs locaux aux CFDJ.</p><br /><br />
						  <p>Le couple REVON deviendra un véritable pilier de l'histoire des trois associations. Durant toute l'existence des CFDJ, de 1934 à 1941, Marie-Magdeleine REVON assurera le secrétariat général. Louis en sera le président. Le couple conserve ses fonctions lors de la fusion entre l'EGA et les CFDJ, puis lors de la refonte de l'association en ESPOIR-CFDJ. Louis et Marie-Magdeleine poursuivront respectivement leur rôle de président et de secrétaire générale d'ESPOIR-CFDJ jusqu'en 1968. Ils restent cependant membres du conseil d'administration jusqu'en 1983.</p>
						  <div className="sep sep-1 sep-right"> </div>
						  <div id="border-1"> <img src="img/agnes-revon.jpg" alt="revon"/></div>
                            
						</div>
                        <div className="col-xs-6 col-centered col-fixed">
                              <div id="border-2"> <img src="img/photo2.jpg" alt="revon"/></div>
                              <div id="quote">
                               <div className="sep sep-2 sep-left"> </div>
                               <p>« On y entrait parfois<br />
                               à 12 ans, pour n'en sortir<br />
                                  qu'à l'âge de la majorité...<br />
                                  Soit 21 ans à l'époque.»
                                  </p>
                                  <div className="sep sep-2 sep-right"> </div>
                              </div>
                              <p>L'implication des REVON dans l'histoire des associations est inestimable : ils assurent la survie de l'EGA en transférant biens et enfants au domaine de Garancière en 1940, ils sont acteurs principaux de la fusion entre EGA et CFDJ, ils sont à l'origine de l'ouverture du foyer de semi-liberté à Vitry avec Jean CHAZAL, ils impulsent l'ouverture du deuxième foyer de semi-liberté à Vignely ainsi que le premier club de prévention à Paris, et ils participent activement à l'opération ESPOIR financé par RTL…
                              <br /><br />
            Parmi leurs 6 enfants, leur fille Agnès s'impliquera également dans l'association en tant qu'accompagnatrice pédagogique au foyer de semi-liberté de Vitry-sur-Seine et membre active de l'association.</p>
                              <div className="sep sep-3 sep-left"> </div>
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
