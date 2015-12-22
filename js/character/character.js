
var counter = 1;
var left = 0;

// var img = new Image();
// img.id = "charBlock";

// var c = document.getElementById("myCanvas");
// var ctx = c.getContext("2d");


// img.onload = function () {
//     ctx.drawImage(img, 0, 0);
// }
//img.src = "characterImages/walk/" + counter + "walk.png";

// var myAnim = setInterval(function(){
//   //$(".myImageHolder").attr('src', "characterImages/walk/" + counter + "walk.png");

// 	img.onload = function () {
// 		c.width = c.width;
// 	    ctx.drawImage(img, 550, 150);
// 	}

//   img.src = "characterImages/walk/" + counter + "walk.png";
//   counter += 1;
//   if(counter > 61)
//   	counter = 1;
// }, 50);




// var counter = 1;

// var myAnim = setInterval(function(){
//   $(".myImageHolder").attr('src', "characterImages/walk/" + counter + "walk.png");

//   counter += 1;
//   if(counter > 61)
//     counter = 1;
// }, 50);

function init() {
    var stage = new createjs.Stage("myCanvas");
    var image = new createjs.Bitmap("characterImages/walk/" + counter + "walk.png");
    
    var imageHeight = 0;
    var imageWidth = 0;

    var el = $('#myCanvas');
    var canvas = document.getElementById("myCanvas");
    canvas.setAttribute("width", parseInt(el.css('width')));
    canvas.setAttribute("height", parseInt(el.css('height')));
    canvas.getContext('2d');


   var queue = new createjs.LoadQueue(true);

   for(var i = 1; i <= 61; i++)
   {
      queue.loadFile({id: i+"walk", src:"characterImages/walk/" + i + "walk.png"});
   }
   
   queue.on("complete", handleComplete);

   

  stage.addChild(image);
  

  createjs.Ticker.setFPS(30);
  var direction = 1;
    function handleTick(event) {

      if(image.x >= parseInt(el.css('width')) - imageWidth * 2)
        direction = -1;
      else if(image.x <= - imageWidth)
        direction = 1;

      image.x += 5 * direction;
      image.image = queue.getResult(counter + "walk");
      counter += 1;
      if(counter > 61)
        counter = 1;
      stage.update();
    }

    //start the event AFTER the images are preloaded so that we can get the image width/height
    function handleComplete(event) {
        imageHeight = image.getBounds().height;
        imageWidth = image.getBounds().width / 3;


        image.y = parseInt(el.css('height')) - imageHeight;
        image.x = imageWidth;
        createjs.Ticker.addEventListener("tick", handleTick);
    }
}
