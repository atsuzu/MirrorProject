

if (annyang) {

// Let's define our first command. First the text we expect, and then the function it     should call
var commands = {

	'おはよう': function() {
		changeDisplay('おはよう');
	},
	'音楽 止めて': function() {
		changeDisplay('音楽 止めて');
		var widgetIframe = document.getElementById('sc-widget'),
		widget       = SC.Widget(widgetIframe);
		widget.pause();
	},
	'音楽 初めて': function() {
	  	changeDisplay('音楽かけて');
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
	}	
};

	annyang.setLanguage('ja');

	annyang.addCallback('resultNoMatch', function() {
		changeDisplay('そのコマンドは無いです（笑）');
	});

// Initialize annyang with our commands
annyang.init(commands);

// Start listening. You can call this here, or attach this call to an event, button, etc.
annyang.start();
}

var changeDisplay = function(text) {
	document.getElementById("p1").innerHTML = text;
}