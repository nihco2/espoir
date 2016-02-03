import React from 'react';
import Mark from './mark.jsx';

class ProgressBar extends React.Component {
	constructor() {
		super();
	}

	render() {
		let progressClassName =`n-progress js-progress ${this.props.type}`;

		return(
			<div className = {progressClassName}>
				<div className="categoryTitle">{this.props.type}</div>
				<div className = "n-progress-bar js-progress-bar" onMouseDown = {this.props.handleProgressBarMouseDown}>
					{ Object.keys(this.props.currentTimecodes).map(function (key) {
						let time = this.props.currentTimecodes[key].time;
						let index = this.props.currentTimecodes[key].index;
					 	let type = this.props.currentTimecodes[key].type;
						let title = this.props.currentTimecodes[key].title;

						if(this.props.type === type){
						return (
							<Mark onMouseDown={this.props.setCurrentCard} key={key} index={index} time={time} type={type} title={title} />
							);
						}

					}, this)}
          <div className = "button-holder">
						<div className = "js-progress-button progress-button"> </div>
         	</div>
				</div>
				<div className = "time">
					<span className = "ctime">00:00</span>
					<span className = "ttime"> 00:00 </span>
				</div>
				 <div className = "volume"> </div>
			</div>
		);
	}
}

export default ProgressBar;
