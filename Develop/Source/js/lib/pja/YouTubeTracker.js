// PJA code
jQuery(function($){
	var YouTubeTracker = {
		trackingType: "gtm", // default tracking type is gtm if not supplied
		player: {},
		$placeholders: [],
		players: [],
		checkpointIntervalID: 0,
		checkpointsToTrack: [25, 50, 75],

		init: function(_trackingType) {
			console.log("YouTubeTracker: init");
			this.setupElements();
			this.bindEvents();
			if(_trackingType) {
				this.trackingType = _trackingType;
			}
		},

		setupElements: function() {
			console.log("YouTubeTracker: setupElements");
			this.$placeholders = $(".youtube-player");
			this.lastVideoToPlay = '';
		},
		
		bindEvents: function() {
			console.log("YouTubeTracker: bindEvents");
			// iframe API needs this function bound to the window scope
			window.onYouTubeIframeAPIReady = this.onYouTubeIframeAPIReady;
			console.log("YouTubeTracker: this.onYouTubeIframeAPIReady="+this.onYouTubeIframeAPIReady);
			console.log("YouTubeTracker: window.onYouTubeIframeAPIReady="+window.onYouTubeIframeAPIReady);
			this.loadYouTubeAPI();
		},

		onYouTubeIframeAPIReady: function() {
			console.log("YouTubeTracker: onYouTubeIframeAPIReady");
			$.each(YouTubeTracker.$placeholders, function(index, placeholder) {
				console.log("YouTubeTracker: placeholder loop");
				var $placeholder = $(placeholder);
				YouTubeTracker.createPlayer({$placeholder: $placeholder, autoplay: 0});
			});
		},

		loadYouTubeAPI: function() {
			// iFrame API from https://www.youtube.com/iframe_api
			if (!window['YT']) {var YT = {loading: 0,loaded: 0};}if (!window['YTConfig']) {var YTConfig = {'host': 'http://www.youtube.com'};}if (!YT.loading) {YT.loading = 1;(function(){var l = [];YT.ready = function(f) {if (YT.loaded) {f();} else {l.push(f);}};window.onYTReady = function() {YT.loaded = 1;for (var i = 0; i < l.length; i++) {try {l[i]();} catch (e) {}}};YT.setConfig = function(c) {for (var k in c) {if (c.hasOwnProperty(k)) {YTConfig[k] = c[k];}}};var a = document.createElement('script');a.type = 'text/javascript';a.id = 'www-widgetapi-script';a.src = 'https:' + '//s.ytimg.com/yts/jsbin/www-widgetapi-vfljc_Cvy/www-widgetapi.js';a.async = true;var b = document.getElementsByTagName('script')[0];b.parentNode.insertBefore(a, b);})();}
		},

		createPlayer: function(args) {
			console.log("YouTubeTracker: createPlayer");
			var index = this.players.length;
			var videoID = args.$placeholder.attr("data-video-id");
			var width = args.$placeholder.attr("width") ? args.$placeholder.attr("width") : '640';
			var height = args.$placeholder.attr("height") ? args.$placeholder.attr("height") : '390';
			this.players[index] = new YT.Player(args.$placeholder.attr("id"), {
				height: height, // width and height are needed but get overridden by css when responsive classes are present
				width: width,
				videoId: videoID,
				playerVars: {
					'showinfo': 0,
					'rel': 0,
					'autohide': 1,
					'playsinline': 0,
					'wmode': 'transparent',
					'autoplay': args.autoplay
				},
				events: {
					'onReady': this.handlePlayerReady,
					'onStateChange': this.handleStateChange
				}
			});
		},

		setupPlayer: function(args) {
			var $placeholder = $('<div id="' + args.elementID + '" class="youtube-player youtube-player-late-load" data-video-id="' + args.videoID + '" data-video-title="' + args.title + '"></div>');
			if(args.width) { $placeholder.attr("width", args.width); }
			if(args.height) { $placeholder.attr("height", args.height); }
			args.$container.append($placeholder);
			this.createPlayer({
				$placeholder: $placeholder,
				autoplay: 1
			})
		},

		handlePlayerReady: function(event) {
			var $domElement = $(event.target.t);
			var userAgent = navigator.userAgent || navigator.vendor || window.opera;
			if($domElement.hasClass('youtube-player-late-load')) {
				// this is the workaround for the iframe_api bug with onStateChange not getting triggered in certain circumstances
				// this breaks on android and iOS, but luckily the bug is not present there			
				if(!userAgent.match( /iPhone/i) && !userAgent.match( /iPad/i) && !userAgent.match( /Android/i ) && !userAgent.match( /Windows Phone/i )) {
					event.target.pauseVideo();
					event.target.playVideo();
				}
			}
		},

		handleStateChange: function(event) {
			var curTime = Math.round(event.target.getCurrentTime());
			var vidTitle = $(event.target.t).attr("data-video-title");
			switch (event.data) {
				case YT.PlayerState.PLAYING:
					YouTubeTracker.lastVideoToPlay = $(event.target.t).attr("id");
					if (curTime === 0) {
						YouTubeTracker.trackEvent({title: vidTitle, label: 'started'});
						YouTubeTracker.startTrackingCheckpoints(event);
					} else {
						YouTubeTracker.trackEvent({title: vidTitle, label: 'played at ' + curTime + ' secs'});
					}
				break;
				case YT.PlayerState.PAUSED:
					if (Math.floor(event.target.getDuration()) != curTime) {
						// this wasn't working as
						// (Math.floor(event.target.getDuration()) != curTime) && (Math.ceil(event.target.getDuration()) != curTime)
						// not sure why
						if (Math.ceil(event.target.getDuration()) != curTime) {
							YouTubeTracker.trackEvent({title: vidTitle, label: 'paused at ' + curTime + ' secs'});
						}
					}
				break;
				case YT.PlayerState.ENDED:
					YouTubeTracker.trackEvent({title: vidTitle, label: 'ended'});
				break;
			}
		},

		resetLastVideoToPlay: function(){
			videoSrc = $('#' + YouTubeTracker.lastVideoToPlay).attr('src');
			$('#' + YouTubeTracker.lastVideoToPlay).attr('src', videoSrc);
			// clear last video
			YouTubeTracker.lastVideoToPlay = '';
		},

		getPlayerInfo: function(id) {
			if(YouTubeTracker.players[id] == undefined) {
				YouTubeTracker.players[id] = {timePercent: 0};
			}
			return YouTubeTracker.players[id];
		},

		startTrackingCheckpoints: function() {
			if(this.checkpointIntervalID == 0) {
				this.checkpointIntervalID = setInterval(this.checkPlayedPercent, 1000);
			}
		},

		checkPlayedPercent: function() {
			// go through each player make sure atleast one playing
			var anyPlaying = false;
			$.each(YouTubeTracker.players, function (i, p) {
				// check if playing
				if(p) { // p.getPlayerState() was not available after removing and adding the same video.  this fixes an undefined error.
					if (p.getPlayerState() == YT.PlayerState.PLAYING) {
						anyPlaying = true;
						// get the video info
						var duration = p.getDuration();
						var timeSoFar = p.getCurrentTime();
						var id = p.getVideoData().video_id;
						var vidTitle = $(p.t).attr("data-video-title");
						// get what we tracked so far on this video
						var playerPerc = YouTubeTracker.getPlayerInfo(id).timePercent;
						// check if any duraction
						if (duration > 0) {
							// get the percentage played
							var thisPerc = timeSoFar / duration * 100;
							// check each checkpoint
							$.each(YouTubeTracker.checkpointsToTrack, function (j, checkpoint) {
								// check if we reached a checkpoint milestone
								if (playerPerc < checkpoint && thisPerc > checkpoint) {
									YouTubeTracker.players[id].timePercent = checkpoint;
									YouTubeTracker.trackEvent({title: vidTitle, label: 'Watched ' + checkpoint + '%'});
								}
							});
						}
					}
				}
			});
			// check if none player, stop intveral
			if (!anyPlaying) {
				clearInterval(YouTubeTracker.intervalId);
				YouTubeTracker.intervalId = 0;
			}
		},

		removePlayer: function(id) {
			$.each(this.players, function(index, player){
				// get the id attr of each player
				var playerID = $(player.t).attr("id");
				if(playerID == id) {
					// if it matches, remove it
					// first, remove the event listener
					player.removeEventListener("onStateChange","YouTubeTracker.handleStateChange");
					// from the players array
					YouTubeTracker.players.splice(index, 1);
					// from the DOM
					$("#" + playerID).remove();
				}
			});
		},

		trackEvent: function(args) {
			var gaCategory = "Video";
			switch(this.trackingType) {
				case "gtm":
					window.dataLayer.push({
						'event': 'scriptevent',
						'eventCategory': gaCategory,
						'eventAction': args.title,
						'eventLabel': args.label
					});
				break;
				case "classic":
					_gaq.push(['_trackEvent', gaCategory, args.title, args.label]);
				break;
				case "universal":
					ga('send', 'event', gaCategory, args.title, args.label);
				break;
				case "test":
					alert(args.title + "; " + args.label);
			}	
		}
	};
	window.YouTubeTracker = YouTubeTracker;
});