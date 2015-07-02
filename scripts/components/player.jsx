var React = require('react');
var assets = require('../../assets/assets.json');

let Player = React.createClass({

	getDuration: function () {
		return this.getVideo().duration;
	},

	getBuffered: function () {
		return this.getVideo().buffered;
	},

	getVolume: function () {
		return this.getVideo().volume;
	},

	getVideo(something) {
		return document.getElementById('video');
	},

	getCurrentTime: function () {
		this.getVideo().currentTime;
	},

	play: function () {
		this.getVideo().play();
	},

	pause: function () {
		this.getVideo().pause();
	},

	timeUpdate: function ($ignore) {

		var progWidth = $that.find('.progress').width();

		// Le temps actuel de la vidéo, basé sur la barre de progression
		var time = Math.round(($('.progress-bar').width() / progWidth) * this.getDuration());

		// Le temps "réel" de la vidéo
		var curTime = this.getCurrentTime();

		// Les secondes sont initialisées à 0 par défaut, les minutes correspondent à la durée divisée par 60
		// tminutes et tseconds sont les minutes et secondes totales
		var seconds = 0,
			minutes = Math.floor(time / 60),
			tminutes = Math.round(this.getDuration() / 60),
			tseconds = Math.round((this.getDuration()) - (tminutes * 60));

		// Si le temps existe (enfin, la durée de la vidéo !)
		if (time) {
			// Les secondes valent la durée moins les minutes
			seconds = Math.round(time) - (60 * minutes);

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
		updProgWidth = (curTime / this.getDuration()) * progWidth

		// Ajout des zéros initiaux pour les valeurs inférieures à 10
		if (seconds < 10) {
			seconds = '0' + seconds;
		}
		if (tseconds < 10) {
			tseconds = '0' + tseconds;
		}

		// Une variable que nous verrons plus tard
		if ($ignore != true) {
			$that.find('.progress-bar').css({
				'width': updProgWidth + 'px'
			});
			$that.find('.progress-button').css({
				'left': (updProgWidth - $that.find('.progress-button').width()) + 'px'
			});
		}

		// Ajustement des durées
		$that.find('.ctime').html(minutes + ':' + seconds)
		$that.find('.ttime').html(tminutes + ':' + tseconds);

		// En mode lecture, mise à jour des valeurs du tampon
		if ($spc.currentTime > 0 && $spc.paused == false && $spc.ended == false) {
			bufferLength();
		}

	},
	componentDidMount: function () {
		//this.play();
	},
	render() {
		let video = assets.video,
			poster = assets.poster;

		return ( < div className = "player-container" >
			< video id = "video"
			poster = {
				poster
			} >
			< source src = {
				video
			}
			type = "video/mp4" / >
			< source src = "movie-hd.mp4"
			type = "video/mp4" / >
			< /video> < div className = "player" > < div className = "play" > < /div > < div className = "progress" > < div className = "progress-bar" >
			< div className = "button-holder" >
			< div className = "progress-button" > < /div> < /div > ' < /div> < div className = "time" > < span className = "ctime" > 00: 00 < /span> < span className = "ttime" > 00: 00 < /span > < /div> < /div > < div className = "volume" > < /div> < /div > < /div>
		);
	}
});

export default Player;
