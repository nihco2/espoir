var React = require('react');
var $ = require('jquery');
var assets = require('../../assets/assets.json');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var routes = require('../../assets/routes.json');
var texts = require('../../assets/texts.json');

let Player = React.createClass({
	getCurrentRoute: function () {
		return location.hash.split('/').pop();
	},
	configPrevNextRoutes: function (prevOrNext) {
		console.log(this.getCurrentRoute(), this.state.periodes)
		let prevRoute,
			nextRoute;
		for (var route in this.state.periodes) {
			console.log(this.state.periodes[route]);
			if (this.state.periodes[route] === this.getCurrentRoute()) {
				break;
			}
			prevRoute = this.state.periodes[route];
			Object.getOwnPropertyNames(this.state.periodes).forEach(function (val, idx, array) {
				console.log(val + " -> " + Object.getOwnPropertyNames(this.state.periodes), this.state.periodes[val], array);
			}.bind(this));
			console.log('prevRoute', prevRoute);
		}
	},
	getInitialState: function () {
		return routes;
	},

	getDuration: function () {
		return this.getVideo().duration;
	},

	getBuffered: function () {
		return this.getVideo().buffered;
	},

	getVolume: function () {
		return this.getVideo().volume;
	},

	getVideo() {
		return document.getElementById('video');
	},

	handleClickPause: function () {
		if (!this.getVideo().paused) {
			this.getVideo().pause();
			$('.play').show();
		} else {
			this.getVideo().play();
			$('.play').hide();
		}
	},

	handleClickPlay: function (event) {
		event.stopPropagation();
		this.getVideo().play();
		$('.play').hide();
	},

	handleProgressBarMouseDown: function (e) {

		if (!this.getVideo().paused) {
			this.getVideo().pause();
		}

		// Position x de la souris lors du clic
		var x = e.pageX - $('.progress').offset().left - 50;
		var progWidth = document.querySelector('.progress').offsetWidth;
		// Mise à jour du temps actuel
		var currentTime = (x / progWidth) * this.getDuration();

		this.getVideo().currentTime = currentTime;
	},

	componentDidMount: function () {
		var self = this;
		self.configPrevNextRoutes();
		self.getVideo().addEventListener('loadedmetadata', function () {
			self.getVideo().addEventListener('timeupdate', function () {
				var progWidth = document.querySelector('.progress') ? document.querySelector('.progress').offsetWidth - 50 : '';

				// Le temps actuel de la vidéo, basé sur la barre de progression
				var time = Math.round((document.querySelector('.progress-bar').offsetWidth / progWidth) * self.getDuration());

				// Le temps "réel" de la vidéo
				var curTime = self.getVideo().currentTime;

				// Les secondes sont initialisées à 0 par défaut, les minutes correspondent à la durée divisée par 60
				// tminutes et tseconds sont les minutes et secondes totales
				var seconds = 0,
					minutes = Math.floor(self.getVideo().currentTime / 60), //Math.floor(time / 60),
					tminutes = Math.round(self.getDuration() / 60),
					tseconds = Math.round((self.getDuration()) - (tminutes * 60));

				// Si le temps existe (enfin, la durée de la vidéo !)
				if (time) {
					// Les secondes valent la durée moins les minutes
					seconds = Math.floor(self.getVideo().currentTime) - (60 * minutes);

					// Si nous avons plus de 59 secondes
					if (seconds > 59) {
						// On augmente les minutes et on soustrait les secondes en trop
						seconds = Math.round(time) - (60 * minutes);
						if (seconds == 60) {
							minutes = Math.round(time / 60);
							seconds = 0;
						}
					}

				}

				// Mise à jour de la barre de progression
				var updProgWidth = (curTime / self.getDuration()) * progWidth

				// Ajout des zéros initiaux pour les valeurs inférieures à 10
				if (seconds < 10) {
					seconds = '0' + seconds;
				}
				if (minutes < 10) {
					minutes = '0' + minutes;
				}
				if (tseconds < 10) {
					tseconds = '0' + tseconds;
				}


				//document.querySelector('.progress-bar').style.width = updProgWidth + 'px';
				document.querySelector('.progress-button').style.left = updProgWidth + 'px';


				// Ajustement des durées
				document.querySelector('.ctime').innerHTML = (minutes + ':' + seconds);
				document.querySelector('.ttime').innerHTML = (tminutes + ':' + tseconds);

				// En mode lecture, mise à jour des valeurs du tampon
				if (self.getVideo().currentTime > 0 && self.getVideo().paused == false && self.getVideo().ended == false) {
					//bufferLength();
				}
			});
		});
	},
	render() {
		let video = assets.video,
			poster = assets.poster;

		return ( < div className = "player-container" >
			< nav > < Link to = {
				`\/player\/${this.state.periodes.period2}`
			}
			className = "left-nav" > {
				this.state.periodes.period2
			} < /Link >< Link to = {
			`\/player\/${this.state.periodes.period2}`
		}
		className = "right-nav" > {
				this.state.periodes.period4
			} < /Link > < /nav >
			< video id = "video"
		poster = {
			poster
		}
		preload = "metadata" >
			< source src = {
				video
			}

		type = "video/mp4" / >
			< source src = "movie-hd.mp4"
		type = "video/mp4" / >
			< /video> < div className = "player" onClick={this.handleClickPause}>  < div className = "play"
		onClick = {
			this.handleClickPlay
		} > < /div >  < div className = "progress" > < div className = "progress-bar"
		onMouseDown = {
				this.handleProgressBarMouseDown
			} >
			< div className = "mask" > < /div > < div className = "button-holder" > < div className = "progress-button" > < /div > < /div > ' < /div > < div className = "time" > < span className = "ctime" > 00: 00 < /span> < span className = "ttime" > 00: 00 < /span > < /div> < /div > < div className = "volume" > < /div> < /div > < /div>
	);
}
});

export default Player;
