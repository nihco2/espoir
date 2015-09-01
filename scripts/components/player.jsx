var React = require('react');
var assets = require('../../assets/assets.json');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var routes = require('../../assets/routes.json');
var texts = require('../../assets/texts.json');

let Player = React.createClass({
	getCurrentRoute: function () {
		return location.hash.split('/').pop();
	},

	initRoutes: function (prevOrNext) {
		var routesArray = routes.periodes;
		var cardsArray = routes.cards;
		var current = this.getCurrentRoute();
		var currentIndex = routesArray.indexOf(current);
		var prevRoute = routesArray[currentIndex - 1] ? routesArray[currentIndex - 1] : undefined;
		var nextRoute = routesArray[currentIndex + 1] ? routesArray[currentIndex + 1] : undefined;
		var currentRoute = routesArray[currentIndex] ? routesArray[currentIndex] : undefined;
		var currentVideo = assets.videos[currentIndex] ? assets.videos[currentIndex].video : undefined;
		var currentPoster = assets.videos[currentIndex] ? assets.videos[currentIndex].poster : undefined;
		var currentCard = cardsArray[currentIndex] ? cardsArray[currentIndex] : undefined;
		var nextPoster, prevPoster;

		prevPoster = assets.videos[currentIndex - 1] ? assets.videos[currentIndex - 1].poster : undefined;
		nextPoster = assets.videos[currentIndex + 1] ? assets.videos[currentIndex + 1].poster : undefined;

		if (!prevRoute) {
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
			currentRoute: currentRoute,
			currentVideo: currentVideo,
			currentPoster: currentPoster,
			nextPoster: nextPoster,
			prevPoster: prevPoster,
			currentCard: currentCard
		};
	},

	getInitialState: function () {
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
		var x = e.pageX - $('.js-progress').offset().left - 50;
		var progWidth = document.querySelector('.js-progress').offsetWidth;
		// Mise à jour du temps actuel
		var currentTime = (x / progWidth) * this.getDuration();

		this.getVideo().currentTime = currentTime;
	},

	hashDidChanged: function (event) {
		var oldURL = parseInt(event.oldURL.split('/').pop());
		var newURL = parseInt(event.newURL.split('/').pop());

		if (isNaN(oldURL) || isNaN(newURL)) {
			//$('.carousel').addClass('vertical');
			$('.h-nav').hide();
		} else {
			//$('.carousel').removeClass('vertical');
			$('.h-nav').show();
		}

		if (oldURL > newURL) {
			$('.carousel').carousel('prev');
		} else {
			$('.carousel').carousel('next');
		}
		$('.carousel').on('slid.bs.carousel', function () {

			this.setState(this.initRoutes());

			$('.active').removeClass('active');
			$('#video').parents('.item').addClass('active');
		}.bind(this));
	},

	componentDidMount: function () {
		var self = this;
		window.addEventListener('hashchange', this.hashDidChanged);
		this.initRoutes();
		$('.carousel').carousel({
			interval: false
		});
		self.getVideo().addEventListener('loadedmetadata', function () {
			self.getVideo().addEventListener('timeupdate', function () {
				var progWidth = document.querySelector('.js-progress') ? document.querySelector('.js-progress').offsetWidth - 50 : '';

				// Le temps actuel de la vidéo, basé sur la barre de progression
				var time = Math.round((document.querySelector('.js-progress-bar').offsetWidth / progWidth) * self.getDuration());

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
				document.querySelector('.js-progress-button').style.left = updProgWidth + 'px';

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
		return (<div className = "player-container" >
			<nav className="h-nav">
              <Link to = {
                `\/player\/${this.state.prevRoute}`
              }
              className = "left-nav" > {
                  this.state.prevRoute
              } < /Link > 
              <Link to = {
              `\/player\/${this.state.nextRoute}`
              }
              className = "right-nav" > {
                  this.state.nextRoute
              } < /Link >  
            </nav> 
            <nav className = "v-nav">
            <Link to = {
            `\/cards\/${this.state.currentRoute}/espoir/${this.state.currentCard}`
            }
            className = "top-nav">
            </Link> 
            <Link to = {
            `\/cards\/${this.state.currentRoute}/histoire/${this.state.currentCard}`
            }
            className = "bottom-nav"> </Link> 
            </nav> 
            <section className = "carousel slide">
		    <div className = "carousel-inner" role = "listbox">
              <div className = "item">
                <video poster = {
                    this.state.prevPoster
                }>
                </video>
              </div>
              <div className = "item active">
                <video id = "video"
                poster = {
                    this.state.currentPoster
                }
                preload = "metadata" >
                <source src = {
                    this.state.currentVideo
                }
                type = "video/mp4" / >
                <source src = "movie-hd.mp4"
                  type = "video/mp4" / >
                </video>
              </div >
              <div className = "item">
                <video poster = {
                    this.state.nextPoster
                }>
               </video>
              </div >
		    </div> 
          </section>
          <div className = "player"
          onClick = {
              this.handleClickPause
          }> 
            <div className = "play"
            onClick = {
                this.handleClickPlay
            } > 
            </div>
            <div className = "n-progress js-progress"> 
              <div className = "n-progress-bar js-progress-bar"
		        onMouseDown = {
				this.handleProgressBarMouseDown
			   }>
                <div className = "mask"></div>
                <div className = "button-holder"> 
                  <div className = "js-progress-button progress-button"> </div> 
                </div> 
              </div> 
            <div className = "time"> 
              <span className = "ctime">00:00</span> 
              <span className = "ttime"> 00:00 </span>
            </div> 
          </div> 
          <div className = "volume"> </div> 
        </div> 
      </div>
	);
}
});

export default Player;
