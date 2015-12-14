var r = Math.floor(Math.random() * 100);
document.getElementById('sc-widget').setAttribute('src', "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/175250617&start_track=" + r);

(function(){
  var widgetIframe = document.getElementById('sc-widget'),
      widget       = SC.Widget(widgetIframe);

  widget.bind(SC.Widget.Events.READY, function() {
    // set new volume level
    widget.setVolume(2);
  });

  widget.bind(SC.Widget.Events.FINISH, function() {
    var ranIndex = Math.floor(Math.random() * 100);

    widget.getCurrentSoundIndex(function(index) {
        var newPosition = (ranIndex + index) % 100;
        widget.skip(newPosition);
    });

  })

}());
