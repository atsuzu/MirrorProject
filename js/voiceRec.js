

if (annyang) {

// Let's define our first command. First the text we expect, and then the function it     should call
var commands = {

	'おはよう': function() {
		changeDisplay('おはよう');
	},
	'音楽 止めて': function() {
		changeDisplay('音楽止めて');
		var widgetIframe = document.getElementById('sc-widget'),
		widget       = SC.Widget(widgetIframe);
		widget.pause();
	},
	'音楽 初めて': function() {
	  	changeDisplay('音楽始めて');
		var widgetIframe = document.getElementById('sc-widget'),
		widget       = SC.Widget(widgetIframe);
		widget.play();
	},
	'音楽 飛ばして': function() {
	  	changeDisplay('音楽飛ばして');
		var widgetIframe = document.getElementById('sc-widget'),
		widget       = SC.Widget(widgetIframe);
		    var ranIndex = Math.floor(Math.random() * 100);

	    widget.getCurrentSoundIndex(function(index) {
	        var newPosition = (ranIndex + index) % 100;
	        widget.skip(newPosition);
	    });
	},
	'ボリュームいくつ': function() {
	  	changeDisplay('ボリュームいくつ？');
		var widgetIframe = document.getElementById('sc-widget'),
		widget       = SC.Widget(widgetIframe);

	    widget.getVolume(function(volume) {
	    	compResponse(volume);
	    });
	},
	'ボリューム上げて': function() {
	  	changeDisplay('ボリューム　上げて');
		var widgetIframe = document.getElementById('sc-widget'),
		widget       = SC.Widget(widgetIframe);
	    
	   	widget.getVolume(function(volume) {
	   		volume += 2;
	    	compResponse(volume + 'に上げました');
	    	widget.setVolume(volume);
	    });
	},
	'ボリューム下げて': function() {
	  	changeDisplay('ボリューム　上げて');
		var widgetIframe = document.getElementById('sc-widget'),
		widget       = SC.Widget(widgetIframe);
	    
	   	widget.getVolume(function(volume) {
	   		volume -= 2;
	    	compResponse(volume + 'に下げました');
	    	widget.setVolume(volume);
	    });
	},
	'ボリューム*volume': function(newVolume) {
	  	changeDisplay('ボリューム ' + newVolume);
		var widgetIframe = document.getElementById('sc-widget'),
		widget       = SC.Widget(widgetIframe);
	    
	   	widget.getVolume(function(volume) {
	   		compResponse('ボリュームを' + newVolume + 'に変えました！')
	    	widget.setVolume(newVolume);
	    });
	}		
};

	annyang.setLanguage('ja');

	annyang.addCallback('resultNoMatch', function(text) {
		compResponse('そんなコマンド無いです！');
	});

	annyang.addCallback('result', function(text) {
		changeDisplay(text);
	});

// Initialize annyang with our commands
annyang.init(commands);

// Start listening. You can call this here, or attach this call to an event, button, etc.
annyang.start();
}

var compResponse = function(text) {
	document.getElementById("compSpeaking").innerHTML = text;
}

var changeDisplay = function(text) {
	document.getElementById("p1").innerHTML = 'コマンド: ' + text;
}