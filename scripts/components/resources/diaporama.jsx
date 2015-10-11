var React = require('react');

let Diaporama = React.createClass({
	countProperties (obj) {
			var count = 0;

			for (var property in obj) {
					if (Object.prototype.hasOwnProperty.call(obj, property)) {
							count++;
					}
			}

			return count;
	},
	componentDidUpdate:function(){
		if(this.props.firstTime && this.countProperties(this.props.popin)>1){
		this.props.firstTime = false;
		console.log('!!!!!!!!!!!!!!!',this.props.firstTime)
 		var self=this;
		$('#diaporama').cycle({ 
			fx:     'fade', 
			speed:  'fast', 
			timeout: 0, 
			next:   '#btn-next', 
			prev:   '#btn-last',
			onPrevNextEvent:function(isNext, zeroBasedSlideIndex, slideElement){
				self.setState({
					index:zeroBasedSlideIndex+1
				});
			}
		});
		}
  },
	render() {
		console.log('....',this.props.popin);
		function mapObject(object, callback) {
			return Object.keys(object).map(function (key) {
				return callback(key, object[key]);
			});
		}
		return <div id="diaporama">{mapObject(this.props.popin, function (key, value) {
			return <img src={value} />;
			})}</div>
  }
});

export default Diaporama;
