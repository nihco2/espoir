import React from 'react';
import json from '../../assets/assets.json';

let Mycomponent = React.createClass({
  returnSomething(something) {
    return something;
  },
  render() {
    let video = json.video;
    
    return (
      <div>
        <h1 className="Mycomponent">Welcome to &#9883; React Starterify</h1>
        <span>{video}</span>
  
      </div>
    );
  }
});

export default Mycomponent;
