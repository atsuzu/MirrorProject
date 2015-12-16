var counter = 1;

var myAnim = setInterval(function(){
  $(".myImageHolder").attr('src', "characterImages/walk/" + counter + "walk.png");
  counter += 1;
  if(counter > 61)
  	counter = 1;
}, 50);