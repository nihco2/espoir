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
      return (<h1>{
          this.state.texts.title
        } </h1>);
    }
    return (<div>Loading...</div>);
    }
});

export default Cards;
