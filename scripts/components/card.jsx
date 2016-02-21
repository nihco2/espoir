var React = require('react');

import ReactRouter from 'react-router';

import Type1 from '../components/cards/type1.jsx';
import Type2 from '../components/cards/type2.jsx';
import Type3 from '../components/cards/type3.jsx';
import Type4 from '../components/cards/type4.jsx';
import Type5 from '../components/cards/type5.jsx';
import Type6 from '../components/cards/type6.jsx';

var Link = ReactRouter.Link;

let Cards = React.createClass({
	mixins: [ ReactRouter.State ],
	getInitialState: function () {
    return {
        texts:null
      };
	},
	init: function(){
		if(this.state.texts && (this.state.texts.type === '4')){
			this.refs['type4'].init();
		}
	},
	componentWillReceiveProps(nextProps){
		$.get(`assets/texts/cards/${this.getParams().periode}/${this.props.nav}/${nextProps.card}.json`, function(result) {
				this.setState({
					texts: result,
					periode: this.getParams().periode,
					card: this.props.card
				});
			}.bind(this));
			return true;
	},
	render() {
    if(this.state.texts){
			switch(this.state.texts.type){
				case '1' : return (<Type1 texts={this.state.texts} />);
				break;
				case '2' : return (<Type2 texts={this.state.texts} />);
				break;
				case '3' : return (<Type3 texts={this.state.texts} />);
				break;
				case '4' :
				return (<Type4 texts={this.state.texts} isEspoir={this.props.isEspoir} ref={'type4'} />);
				break;
				case '5' : return (<Type5 texts={this.state.texts} />);
				break;
				case '6' : return (<Type6 texts={this.state.texts} />);
				break;
				default: return (<Type1 />);
				}

    }
    return (<div>Loading...</div>);
    }
});

export default Cards;
