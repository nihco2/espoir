import React from 'react';
import Mark from './mark';

class ProgressBar extends React.Component {
	constructor() {
		super();
	}

	render() {
		return(
			<div className = "n-progress bar-top js-progress">
				<div className = "n-progress-bar js-progress-bar" onMouseDown = {this.props.onMouseDown}>
					{ Object.keys(this.props.currentTimecodes).map(function (key) {
						let time = this.props.currentTimecodes[key].time;
						let type = this.props.currentTimecodes[key].type;
						let index = this.props.currentTimecodes[key].index;

						if(type === 'espoir'){
						return (
							<Mark onMouseDown={this.props.setCurrentCard} key={key} index={index} time={time} type={type} />
							);
						}
					}, this)}
				</div>
			</div>
		);
	}
}

export default ProgressBar;
