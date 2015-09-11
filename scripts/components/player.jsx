var React = require('react');
var assets = require('../../assets/assets.json');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var routes = require('../../assets/routes.json');
var texts = require('../../assets/texts.json');
var Slider = require('react-slick');
var Navigation = require('react-router').Navigation;

import Video from '../components/video.jsx';

let Player = React.createClass({
	mixins: [Navigation],
	
	getInitialState: function () {
		return {
			asssets: null,
			routes: null,
            currentVideoId:null
		}
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
		return document.getElementById(this.state.currentVideoId);
	},

	handleClickPause: function () {
		if (!this.getVideo().paused) {
			this.getVideo().pause();
				$('.play').css('opacity',1);
		} else {
			this.getVideo().play();
				$('.play').css('opacity',0);
		}
	},

	handleClickPlay: function (event) {
		event.stopPropagation();
		if (this.getVideo().paused){
			this.getVideo().play();
			$('.play').css('opacity',0);
		}
		else{
			this.getVideo().pause();
			$('.play').css('opacity',1);
		}
		
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
    
	initHTML(){
      var self = this;
			$('video').width(window.innerWidth);
			$(window).on('hashchange', function() {
				self.setCurrentState();
			});
      $('.player-container').height(window.innerHeight).on('route:change',function(e){
			
      });
					
		if(this.props.params.periode==routes.periodes[0]){
			$('.left-nav').hide();
		}
		if(this.props.params.periode==routes.periodes[5]){
			$('.right-nav').hide();
		}
	},
	setCurrentState:function(){
		var routesArray = routes.periodes;
		var cardsArray = routes.cards;
    var currentRoute = this.props.params.periode;
		var currentIndex = routesArray.indexOf(currentRoute);
		var prevRoute = routesArray[currentIndex - 1] ? routesArray[currentIndex - 1] : '';
		var nextRoute = routesArray[currentIndex + 1] ? routesArray[currentIndex + 1] : '';
		console.log(nextRoute,prevRoute)
    this.setState({
			video1: assets.videos[routes.periodes[0]],
			video2: assets.videos[routes.periodes[1]],
			video3: assets.videos[routes.periodes[2]],
			video4: assets.videos[routes.periodes[3]],
			video5: assets.videos[routes.periodes[4]],
			video6: assets.videos[routes.periodes[5]],
      currentVideoId:assets.videos[this.props.params.periode].id,
			currentRoute:this.props.params.periode,
			prevRoute:prevRoute,
			nextRoute:nextRoute
		});
	},
	componentWillMount:function(){
		this.setCurrentState();
	},
	componentDidMount: function () {
      var self = this;
			
      self.initHTML();
      self.getVideo().addEventListener('loadedmetadata', function () {
          self.getVideo().addEventListener('timeupdate', function () {
              var progWidth = document.querySelector('.js-progress') ? document.querySelector('.js-progress').offsetWidth - 50 : '';

              // Le temps actuel de la vidéo, basé sur la barre de progression
              var time = Math.round(($('.js-progress-bar').width() / progWidth) * self.getDuration());

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
	handleClick:function(e){
		this.getVideo().pause();
		switch($(e.target).attr('class')){
			case 'left-nav':$('.slick-prev').trigger('click');
			break;
			case 'right-nav':$('.slick-next').trigger('click');
			break;
		}
	},
	statics: {
      willTransitionTo: function (transition, params, query, next) {
        
        next();
      },
			willTransitionFrom: function (transition, component) {
			//$('.player-container').trigger('route:change');
			}
	},
	render() {
	  var self = this;
      var settings = {
          dots: false,
          infinite: false,
          arrows: true,
          speed: 500,
          slidesToShow: 1,
          initialSlide:routes.periodes.indexOf(this.props.params.periode),
          slidesToScroll: 1,
          afterChange: function(index){
            $('.h-nav').show();
						$('.play').css('opacity',1);
						if(index===0){
							$('.left-nav').hide();
						}
						else{
							$('.left-nav').show();
						}
						if(index===5){
							$('.right-nav').hide();
						}
						else{
							$('.right-nav').show();
						}
            self.transitionTo('player',{
							periode: routes.periodes[index]
            });
						
          },
					beforeChange:function(index){
						$('.h-nav').hide();
					}
    };
    return (
			<div className = "player-container" >
				<nav className="h-nav">
					<a onClick={this.handleClick} className = "left-nav" >{this.state.prevRoute}</a>
					<a onClick={this.handleClick} className = "right-nav" >{this.state.nextRoute}</a>
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
				<section>
					<Slider {...settings}>
						<Video video={this.state.video1} />
						<Video video={this.state.video2} />
						<Video video={this.state.video3} />
						<Video video={this.state.video4} />
						<Video video={this.state.video5} />
						<Video video={this.state.video6} />
					</Slider>
				</section>
				<div className = "player"
          onClick = {
              this.handleClickPause
          }>
					<div className = "n-progress bar-top js-progress"> 
              <div className = "n-progress-bar js-progress-bar">
								<div className = "mask"></div> 
             	</div>  
          	</div>
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
