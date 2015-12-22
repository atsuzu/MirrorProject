<html>
<head>
	<title>Magic Mirror</title>
	<style type="text/css">
		<?php include('css/main.css') ?>
	</style>
	<link rel="stylesheet" type="text/css" href="css/weather-icons.css">
	<script type="text/javascript">
		var gitHash = '<?php echo trim(`git rev-parse HEAD`) ?>';
	</script>

	<meta name="google" value="notranslate" />
	<meta http-equiv="Content-type" content="text/html; charset=utf-8" />
</head>
<body id="body" onload="init();">
	
<div class = "top-layer">
	<div class="top left"><div class="date small dimmed"></div><div class="time"></div></div>
	<div class="center-hor top">
		<iframe id="sc-widget" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/175250617" width="30%" height="200" scrolling="yes" frameborder="no"></iframe>
	</div>
	<div class="top right"><div class="windsun small dimmed"></div><div class="temp"></div><div class="forecast small dimmed"></div></div>
	<div class="center-ver center-hor"></div>
	<div class="higher-fourth center-hor"><div class="compliment light" id="compSpeaking"></div></div>
	<!-- <div class="bottom center-hor"><div class="news medium"></div></div> -->
	<div class="lower-fourth center-hor"><p id = "command"></p></div>
	<!-- <div class="bottom center-hor "><img class="myImageHolder" src="characterImages/walk/1walk.png"></div> -->
</div>
	<canvas id="myCanvas"  style="border:1px solid #d3d3d3;" class="bottom"> Your browser does not support the HTML5 canvas tag.</canvas>


</div>

<!-- ============== Javascript from Voice Recognition Credits to Annyang ============ -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/annyang/1.0.0/annyang.min.js"></script>
<script src="js/voiceRec.js" type="text/javascript"></script>
<!-- ============== Voice Recognition up to here ================= -->

<!-- ============== Javascript from Sound Cloud ============ -->
<script src="https://w.soundcloud.com/player/api.js"></script>
<script src="js/soundCloud.js" type="text/javascript"></script>
<!-- ============== Sound Cloud up to here ================= -->

<!-- ============== Javascript Character ============ -->
<script src="js/character/character.js" type="text/javascript"></script>
<script src="https://code.createjs.com/easeljs-0.8.2.min.js"></script>
<script src="https://code.createjs.com/preloadjs-0.6.2.min.js"></script>
<!-- ============== Character up to here ================= -->

<!-- ============== Javascript from Magic Mirrior ============ -->
<script src="js/jquery.js"></script>

<!-- This is used for parsing news feed, but I do not use it -->
<!-- <script src="js/jquery.feedToJSON.js"></script> -->
<script src="js/ical_parser.js"></script>
<script src="js/moment-with-locales.min.js"></script>

<!-- This has the configurations for language, compliments, and weather stuff -->
<script src="js/config.js"></script>

<!-- Not sure what this is.. don't think I use it though -->
<!-- <script src="js/rrule.js"></script> -->

<!-- Used to check for git updates if there are any -->
<script src="js/version/version.js" type="text/javascript"></script>

<!-- Used for the calendar thing that I DO NOT use currently -->
<script src="js/calendar/calendar.js" type="text/javascript"></script>

<!-- Used for updating hte "compliments" every few seconds -->
<!-- <script src="js/compliments/compliments.js" type="text/javascript"></script> -->
<!-- Used for the weather -->
<script src="js/weather/weather.js" type="text/javascript"></script>
<!-- Used for the clock -->
<script src="js/time/time.js" type="text/javascript"></script>
<!-- ============== Magic Mirror up to here ================= -->

<script src="js/main.js?nocache=<?php echo md5(microtime()) ?>"></script>
<!-- <script src="js/socket.io.min.js"></script> -->

</body>
</html>
