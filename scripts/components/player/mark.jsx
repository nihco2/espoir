import React from 'react';

class Mark extends React.Component {
	constructor() {
		super();
	}

	render() {
		return(
			<div>
				<div onMouseDown={this.props.onMouseDown} key={this.props.key} data-index={this.props.index} data-time={this.props.time} data-type={this.props.type} className = 'progress-button mark' style={{left: this.props.time*3.3 + 'px'}}>
					<p className="cardTitle" dangerouslySetInnerHTML={{__html:this.props.title}}></p>
				</div>
			</div>
		);
	}
}

export default Mark;
