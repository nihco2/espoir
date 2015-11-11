var React = require('react');
var assets = require('../../assets/assets.json');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var routes = require('../../assets/routes.json');
var texts = require('../../assets/texts.json');
var Slider = require('react-slick');
var Navigation = require('react-router').Navigation;

import Video from '../components/video.jsx';
import Cards from '../components/card.jsx';

let Player = React.createClass({
	mixins: [Navigation],

	getInitialState: function () {
		return {
			asssets: null,
			routes: null,
      currentVideoId:null,
			texts:texts
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

	hidePlay(){
		$('.play-container').css('opacity',0);
	},
	showPlay(){
		$('.play-container').css('opacity',1);
	},

	getVideo() {
		return document.getElementById(this.state.currentVideoId);
	},

	handleClickPause: function () {
		if (!this.getVideo().paused) {
			this.getVideo().pause();
			this.showPlay();
		}
	},

	handleClickPlay: function (event) {
		event.stopPropagation();
		if (this.getVideo().paused){
			this.getVideo().play();
			this.hidePlay();
		}
		else{
			this.getVideo().pause();
			this.showPlay();
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
	handleResize:function(){
		$('video').width(window.innerWidth);
		$('.cards,.player-container,#slider').height(window.innerHeight);
	},
	initHTML(){
      var self = this;
			var index = 0;
			this.handleResize();
			$(window).on('resize', this.handleResize);
			$(window).on('hashchange', function() {
				self.setCurrentState(0,0);
			});
      $('.player-container').height(window.innerHeight).on('route:change',function(e){

      });

		if(this.props.params.periode==routes.periodes[0]){
			$('.left-nav').hide();
		}
		if(this.props.params.periode==routes.periodes[5]){
			$('.right-nav').hide();
		}
		$('#slider').cycle({
			fx:     'scrollVert',
			prev:   '.bottom-nav',
			next:   '.top-nav, .cardLink',
			timeout: 0,
			onPrevNextEvent:function(isNext, zeroBasedSlideIndex, slideElement){
				index = zeroBasedSlideIndex;
				if(zeroBasedSlideIndex!==0){
					$('.player').hide();
				}
				else{
					$('.cards-container').fadeOut();
				}

			},
			after:function(currSlideElement, nextSlideElement,options, forwardFlag){
				if((index === 0 || forwardFlag===true)){
					$('.player').show();
					$('.cards-container').hide();
				}
				else{
					self.refs['card'].init();
					$('.cards-container').fadeIn();
					$('.border').each(function(){
						var borderHeight = 50;
						if($(this).parent().find('.photo img').height()>$(this).parent().find('.photo img').width()){
							borderHeight = 80;
						}
						$(this).css({
							width: $(this).parent().find('.photo img').width()+45+'px',
							height: $(this).parent().find('.photo img').height()+borderHeight+'px'
						});

						var posY = $(this).find('img').height();
						$(this).parent().find('.photo').css({ 'margin-top':'-'+(posY-borderHeight/2)+'px' , 'margin-left': '22px'});
				 });
				}
			}
		});
	},
	setCurrentState:function(currentEspoirCard,currentHistoireCard){
		var routesArray = routes.periodes;
		var cardsArray = routes.cards;
    var currentRoute = this.props.params.periode;
		var currentIndex = routesArray.indexOf(currentRoute);
		var prevRoute = routesArray[currentIndex - 1] ? routesArray[currentIndex - 1] : '';
		var nextRoute = routesArray[currentIndex + 1] ? routesArray[currentIndex + 1] : '';

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
			nextRoute:nextRoute,
			currentEspoirCard : assets.cards[this.props.params.periode].espoir[currentEspoirCard],
			currentHistoireCard : assets.cards[this.props.params.periode].histoire[currentHistoireCard],
			currentTimecodes : assets.videos[this.props.params.periode].timecodes
		});
	},
	componentWillMount:function(){
		this.setCurrentState(0,0);
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

	setCurrentCard(e){
		var key = $(e.target).data('key');
		this.setCurrentState(key,0);
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
						self.showPlay();
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

				<div id="slider">
						<section className="slides">
							<Slider {...settings}>
								<Video video={this.state.video1} />
								<Video video={this.state.video2} />
								<Video video={this.state.video3} />
								<Video video={this.state.video4} />
								<Video video={this.state.video5} />
								<Video video={this.state.video6} />
							</Slider>
						</section>
						<section className="cards">
							<div className="cards-container">
							<Cards nav="espoir" card={this.state.currentEspoirCard} isEspoir={true} ref={'card'} />
							</div>
						</section>
						<section className="cards">
							<div className="cards-container">
							<Cards nav="histoire" card={this.state.currentHistoireCard} isEspoir={false} ref={'card'} />
							</div>
						</section>
				</div>
				<div className = "player"
          onClick = {
              this.handleClickPause
          }>
					<nav className="h-nav">
						<a onClick={this.handleClick} className = "left-nav" >{this.state.prevRoute}</a>
						<a onClick={this.handleClick} className = "right-nav" >{this.state.nextRoute}</a>
					</nav>
					<nav className = "v-nav">
							<a onClick={this.handleClick} className = "top-nav" ></a>
							<a onClick={this.handleClick} className = "bottom-nav" ></a>
					</nav>
					<div className = "n-progress bar-top js-progress">
						<div className = "n-progress-bar js-progress-bar">
							<div className = "mask"></div>
							{ Object.keys(this.state.currentTimecodes).map(function (key) {
								return (
								<div onMouseDown={this.setCurrentCard} data-key={key} className = "progress-button cardLink" key={key} style={{left: this.state.currentTimecodes[key]*10 + 'px'}}> </div>
									);
							}, this)}


						</div>
          </div>
					<div className="play-container">
						<div className = "play"
							onClick = {
									this.handleClickPlay
							} >
						</div>
						<div className="desc">
							<p className="youwatch">{this.state.texts.youwatch}</p>
							<p className="videoTitle">Le bagne pour les enfants</p>
							<small><Link to = "/">{this.state.texts.back}</Link></small>
						</div>
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
