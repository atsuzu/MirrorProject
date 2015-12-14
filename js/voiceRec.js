if (annyang) {
// Let's define our first command. First the text we expect, and then the function it     should call
var commands = {
'おはよう': function() {
  changeDisplay('おはよう');
},
'おやすみ': function() {
  changeDisplay('おやすみ');
},
'ごはん': function() {
  changeDisplay('ごはん');
}
};

annyang.setLanguage('ja');

// Initialize annyang with our commands
annyang.init(commands);

// Start listening. You can call this here, or attach this call to an event, button, etc.
annyang.start();
}

var changeDisplay = function(text) {
	document.getElementById("p1").innerHTML = text;
}