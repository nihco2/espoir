var React = require('react');

let Diaporama = React.createClass({
	componentDidMount:function(){
		$('.carousel').carousel({
		  interval: 5000
		});
		$('#modal').on('hide.bs.modal', function (e) {
		  if($('#vimeo').length){
				$('#vimeo').attr('src','');
			}
		});
		$('#modal').on('show.bs.modal', function (e) {
		  if($('#vimeo').length){
				$('#vimeo').attr('src',this.state.video);
			}
		}.bind(this));
  },
	getInitialState(){
		return {
			video: "https://player.vimeo.com/video/40408278?title=0&byline=0&portrait=0"
		}
	},
	componentDidUpdate(){
		if($('.carousel-inner .item').length<2){
			$('.carousel-control').css('opacity',0);
		}
		else{
			$('.carousel-control').css('opacity',1);
		}
	},
	render() {
		let i=0;
		var self = this;
		function mapObject(object, callback) {
			return Object.keys(object).map(function (key) {
				return callback(key, object[key]);
			});
		}

		return <div id="diaporama"  className="carousel slide">
		 <div className="carousel-inner" role="listbox">
			{mapObject(this.props.popin, function (key, value) {
			let itemClass = (i===0) ? 'item active' : 'item';
			i++;
			if(value === 'https://vimeo.com/40408278'){
				return <iframe id="vimeo" src={self.state.video} width="700" height="525" frameBorder="0" webkitallowfullscreen mozallowfullscreen allowFullscreen></iframe>
			}
			return <div className={itemClass} key={key}><img key={key} src={value} /></div>;
			})}</div></div>
  }
});

export default Diaporama;
