var React = require('react');
var texts = require('../../assets/texts/home/texts.json');
var routes = require('../../assets/routes.json');
import ReactRouter from 'react-router';

var Link = ReactRouter.Link;

let Homepage = React.createClass({
		getInitialState: function () {
			return {
				firstPeriode: routes.periodes[0],
				texts: texts
			};
		},
		render() {
			return (
			< div className = "homepage" > < nav > < Link to = {
					'\/resources'
				} > {
					texts.resources
				} < /Link ><a className="credits-link" data-toggle="modal" data-target="#credits">{texts.credits}</a > < /nav>  < div className = "home" > < div className = "container" > < div className = "intro" > < h1 > {
				texts.h1
			} < /h1> < h2 > {
			texts.h2
		} < /h2> < h3 > {
		texts.h3
	} < /h3> < h4 > {
	texts.h4
} < /h4>
<p dangerouslySetInnerHTML={{__html:this.state.texts.description}}></p>
<Link to={`\/player\/${this.state.firstPeriode}`} className="go">{texts.go}</Link> < /div>< /div > < /div > < div className = "menutitle" > {
texts.periodes
} < span className = "arrow" > < /span>< /div > < aside > < Link to = {
		`\/player\/${this.state.texts.periode1}`
	} > < div className = "home-menu item1" > < span className = "periode" > {
		texts.periode1
	} < span className = "periodeTitle" > {
		texts.periode1Title
	} < /span>< /span > < /div >< /Link >
	< Link to = {
		`\/player\/${this.state.texts.periode2}`
	} >
	< div className = "home-menu item2" > < span className = "periode" > {
		texts.periode2
	} < span className = "periodeTitle" > {
		texts.periode2Title
	} < /span>< /span > < /div > < /Link >
	< Link to = {
		`\/player\/${this.state.texts.periode3}`
	} >
	< div className = "home-menu item3" > < span className = "periode" > {
		texts.periode3
	} < span className = "periodeTitle" > {
		texts.periode3Title
	} < /span>< /span > < /div > < /Link >
	< Link to = {
		`\/player\/${this.state.texts.periode4}`
	} >
	< div className = "home-menu item4" > < span className = "periode" > {
		texts.periode4
	} < span className = "periodeTitle" > {
		texts.periode4Title
	} < /span>< /span > < /div > < /Link >
	< Link to = {
		`\/player\/${this.state.texts.periode5}`
	} >
	< div className = "home-menu item5" > < span className = "periode" > {
		texts.periode5
	} < span className = "periodeTitle" > {
		texts.periode5Title
	} < /span>< /span > < /div > < /Link >
	< Link to = {
		`\/player\/${this.state.texts.periode6}`
	} >
	< div className = "home-menu item6" > < span className = "periode" > {
		texts.periode6
	} < span className = "periodeTitle" > {
		texts.periode6Title
	} < /span>< /span > < /div > < /Link > < /aside >
	<div className="modal fade" id="credits" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <h4 className="modal-title" id="myModalLabel">Crédits</h4>
      </div>
      <div className="modal-body">
				<div className="row">
	        <div className="col-md-6">
						<p>Conçu, écrit et réalisé par :</p>
						<p>Chef de projet, Assistant réalisateur :</p>
						<p>Produit par :<br />&nbsp;</p>
						<p>Productrice exécutive :</p>
						<p>Chargée de production :</p>
						<p>Illustré et animé par :</p>
						<p>Assistante animation :</p>
						<p>Equipe éditoriale :</p>
						<p>Image et son :<br />&nbsp;</p>
						<p>Montage :</p>
						<p>Etalonnage :</p>
						<p>Illustration sonore :</p>
						<p>Voix off :<br />&nbsp;</p>
						<p>Enregistrement et mixage :</p>
						<p>Webdesign :</p>
						<p>Développement :</p>
						<p>Avec le soutien de :<br />&nbsp;<br />&nbsp;<br />&nbsp;<br />&nbsp;</p>
						<p>Comité de pilotage webdoc chez ESPOIR CFDJ :<br />&nbsp;<br />&nbsp;</p>
						<p>Archives :<br />&nbsp;<br />&nbsp;<br />&nbsp;<br />&nbsp;<br />&nbsp;</p>
						<p>Avec les interventions de :<br />&nbsp;<br />&nbsp;</p>
					</div>
					<div className="col-md-6">
						<p>Laetitia Moreau</p>
						<p>Nicolas Mantran</p>
						<p>Ségolène Fossard, Circle Line<br />Laëtitia Moreau, Ondaverde</p>
						<p>Myrto Grecos</p>
						<p>Isabel Vendrell</p>
						<p>Aline Rollin</p>
						<p>Flore Vigneron</p>
						<p>Nicolas Mantran, Laëtitia Moreau</p>
						<p>Théo Ivanez, Laetitia Moreau, Nicolas Mantran, Ludovic Fossard, Raphaël Kirgo</p>
						<p>Pierre Simon, Yann Varenne, Mona Flammer</p>
						<p>Luca Casavola</p>
						<p>Leandro Guffanti</p>
						<p>Nathanaël Alimi, Lucille Boudonnat, Cathy Cerda, Nicolas Mantran, Pierre Tissot</p>
						<p>Thomas Houbron, Théo Grand</p>
						<p>Gauthier Mesnil­Blanc</p>
						<p>Nicolas Martin</p>
						<p>Agnès B., Renault, La SNCF, Le Conseil Départemental de Seine ­Et ­Marne, Le Crédit Coopératif, La Fondation Agnès B, La MAIF, Le cabinet Jégard ­ commissaire aux comptes</p>
						<p>Fatima Bennoukh, Dominique Brendel, Henry Colombani, Matthieu Crepon, Marie ­Françoise Leblanc, Alain Monteagle, André Morin</p>
						<p>L’Enfant au Grand Air, Les Centres Familiaux de Jeunes, EGA­CFDJ, ESPOIR CFDJ, Radio Télé Luxembourg, L’Association des foyers CFDJ, Les Amis de Tomkiewicz, Le centre d’exposition « Enfants en Justice, XIX­XXème siècles »</p>
						<p>Jacques Bourquin (Historien, ancien éducateur, fondateur de la RHEI et d’«Enfants en justice, XIX­XXe siècles»), Eric Pierre (Historien de l’enfance et de la jeunesse), Jean­Jacques Yvorel (Historien, chercheur à l’ENPJJ, ancien éducateur), Patrick Dubéchot (Sociologue­démographe, ancien éducateur), Jean­Pierre Rosenczveig (Magistrat, Juge des Enfants, président d’ESPOIR CFDJ), André Morin (Directeur général d’ESPOIR CFDJ, ancien éducateur), Agnès Revon (fille de Marie­Magdeleine et Louis Revon), Georges Rangassami (ancien du foyer de semi­liberté de Vitry­sur­Seine), Alain Buirette (Educateur en placement familial), Christelle Pillon (Educatrice au club de prévention de Fresnes), Sylvie Fabré (Directrice du placement familial de Melun), Marveen Chalmessin (Chef de service au club de prévention de Vitry sur Seine), Nadia Chemli (Chef de service au club de prévention de Villejuif), Blaise Andres­Garay (Cadre technique en AEMO), Houria Taybi (Chef de service en AEMO), Alain Houdy (Psychologue chez ESPOIR CFDJ), Isabelle Désiré (Directrice service accueil de jour), Christelle Bosson (ancienne résidente en placement familial puis en appartement éducatif)</p>
					</div>
				</div>
      </div>
    </div>
  </div>
</div>
	< /div > );
}
});



export default Homepage;
