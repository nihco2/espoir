var React = require('react');
import ReactRouter from 'react-router';

var Link = ReactRouter.Link;

let Video = React.createClass({

	render() {
     return (
			<div className = "item">
				<video id = {this.props.video.id}
					poster = {
							this.props.video.poster
					}
					onMouseMove= {
						this.props.handleMouseMove
					}
					preload = "metadata" >
					<source src = {
							this.props.video.src
					}
					type = "video/mp4" / >
				</video>
			</div >);
    }
});

export default Video;
