import React from 'react';

class Mark extends React.Component {
	constructor() {
		super();
	}

	render() {
		return(
			<div onMouseDown={this.props.onMouseDown} key={this.props.key} data-index={this.props.index} data-time={this.props.time} data-type={this.props.type} className = 'progress-button' style={{left: this.props.time*10 + 'px'}}>
				<p>{this.props.title}</p>
			</div>
		);
	}
}

export default Mark;
