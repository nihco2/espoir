var React = require('react');
var assets = require('../../assets/assets.json');

let Player = React.createClass({
  returnSomething(something) {
    return something;
  },
  render() {
    let video = assets.video;
    
    return (
      <div className="player-container">
        <video id="video">
          <source src={video} type="video/mp4" />
          <source src="movie-hd.mp4" type="video/mp4" />
        </video>
        <div className="player">
       <div className="play-pause play">
         <span className="play-button">&#9658;</span>
         <div className="pause-button">
           <span> </span>
           <span> </span>
         </div>
       </div>
       <div className="progress">
         <div className="progress-bar">
           <div className="button-holder">
             <div className="progress-button"> </div>
           </div>'
         </div>'
         <div className="time">'
           <span className="ctime">00:00</span>
           <span className="stime"> / </span>
           <span className="ttime">00:00</span>
         </div>
       </div>
       <div className="volume">
         <div className="volume-holder">
           <div className="volume-bar-holder">
             <div className="volume-bar">
               <div className="volume-button-holder">
                 <div className="volume-button"> </div>
               </div>
             </div>
           </div>
         </div>
         <div className="volume-icon v-change-0">
           <span> </span>
         </div>
       </div>
       <div className="fullscreen">
        <a href="#"> </a>
       </div>
      </div>
      </div>
    );
  }
});

export default Player;
