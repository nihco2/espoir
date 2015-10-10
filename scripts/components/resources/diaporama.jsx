var React = require('react');

let Diaporama = React.createClass({
	render() {
    function item(itemText) {
      return <li>{itemText}</li>;
    };
    return <ul>{this.props.popin}</ul>;
  }
});

export default Diaporama;
