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

	initRoutes: function () {
		var routesArray = routes.periodes;
		var current = this.getCurrentRoute();
		var currentIndex = routesArray.indexOf(current);

		console.log('current', current, routesArray, currentIndex);

		var prevRoute = routesArray[currentIndex - 1];
		var nextRoute = routesArray[currentIndex + 1];
		var currentVideo = assets.videos[currentIndex].video;
		var currentPoster = assets.videos[currentIndex].poster;
		console.log(assets.videos, currentIndex + 1)
		var nextPoster = assets.videos[currentIndex + 1].poster;

		if (!prevRoute) {
			console.log('+++', prevRoute)
			$('.left-nav').hide();
		} else if ($('.left-nav').is(':hidden')) {
			$('.left-nav').show();
		}
		if (!nextRoute) {
			$('.right-nav').hide();
		} else if ($('.right-nav').is(':hidden')) {
			$('.right-nav').show();
		}
		return {
			prevRoute: prevRoute,
			nextRoute: nextRoute,
			currentVideo: currentVideo,
			currentPoster: currentPoster,
			nextPoster: nextPoster
		};
	},

	getInitialState: function () {
		console.log(this.initRoutes())
		return this.initRoutes();
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

	hashDidChanged: function () {
		$('#video').addClass('slide');
		this.setState(this.initRoutes());
	},

	componentDidMount: function () {
		var self = this;
		window.addEventListener('hashchange', this.hashDidChanged);
		this.initRoutes();

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

		return ( < div className = "player-container" >
			< nav > < Link to = {
				`\/player\/${this.state.prevRoute}`
			}
			className = "left-nav" > {
				this.state.prevRoute
			} < /Link >< Link to = {
			`\/player\/${this.state.nextRoute}`
		}
		className = "right-nav" > {
				this.state.nextRoute
			} < /Link > < /nav >
			< section className = "wrapper" >
			< video id = "video"
		poster = {
			this.state.currentPoster
		}
		preload = "metadata" >
			< source src = {
				this.state.currentVideo
			}

		type = "video/mp4" / >
			< source src = "movie-hd.mp4"
		type = "video/mp4" / >
			< /video>< /section > < div className = "player"
		onClick = {
			this.handleClickPause
		} > < div className = "play"
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
