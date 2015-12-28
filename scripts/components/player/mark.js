import React from 'react';

class Mark extends React.Component {
	constructor() {
		super();
	}

	render() {
		return(
			<div onMouseDown={this.props.onMouseDown} key={key} data-index={this.props.index} data-time={this.props.time} data-type={this.props.type} className = 'progress-button cardLinkTop' style={{left: this.props.time*10 + 'px'}}> </div>
		);
	}
}

export default Mark;