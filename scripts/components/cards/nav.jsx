import React from 'react';

class Mark extends React.Component {
	render() {
		return(
      <nav onClick={this.props.callback} className="back-btn">
        <img src="assets/images/back-btn.png" alt="back"/><br />
        {this.props.back}
      </nav>
		);
	}
}

export default Mark;
