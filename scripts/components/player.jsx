var React = require('react');
var assets = require('../../assets/assets.json');

let Player = React.createClass({
  returnSomething(something) {
    return something;
  },
  render() {
    let video = assets.video,
				poster = assets.poster;
		
    return (
      <div className="player-container">
        <video id="video" poster={poster}>
          <source src={video} type="video/mp4" />
          <source src="movie-hd.mp4" type="video/mp4" />
        </video>
        <div className="player">
					<div className="play"></div>
       		<div className="progress">
						<div className="progress-bar">
							<div className="button-holder">
								<div className="progress-button"> </div>
							</div>'
						</div>
						 <div className="time">
							 <span className="ctime">00:00</span>
							 <span className="ttime">00:00</span>
						 </div>
       		</div>
       		<div className="volume"></div>
      	</div>
      </div>
    );
  }
});

export default Player;
