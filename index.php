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
<body>

	<div class="top left"><div class="date small dimmed"></div><div class="time"></div></div>
	<div class="center-hor top">
		<iframe id="sc-widget" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/175250617" width="30%" height="300" scrolling="no" frameborder="no"></iframe>
	</div>
	<div class="top right"><div class="windsun small dimmed"></div><div class="temp"></div><div class="forecast small dimmed"></div></div>
	<div class="center-ver center-hor"></div>
	<div class="lower-third center-hor"><div class="compliment light"></div></div>
	<!-- <div class="bottom center-hor"><div class="news medium"></div></div> -->
	<div class="bottom center-hor"><p id = "p1"></p></div>

</div>

<!-- ============== Javascript from Voice Recognition Credits to Annyang ============ -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/annyang/1.0.0/annyang.min.js"></script>
<script src="js/voiceRec.js" type="text/javascript"></script>
<!-- ============== Voice Recognition up to here ================= -->

<!-- ============== Javascript from Sound Cloud ============ -->
<script src="https://w.soundcloud.com/player/api.js"></script>
<script src="js/soundCloud.js" type="text/javascript"></script>
<!-- ============== Sound Cloud up to here ================= -->

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
<script src="js/compliments/compliments.js" type="text/javascript"></script>
<!-- Used for the weather -->
<script src="js/weather/weather.js" type="text/javascript"></script>
<!-- Used for the clock -->
<script src="js/time/time.js" type="text/javascript"></script>
<!-- ============== Magic Mirror up to here ================= -->

<script src="js/main.js?nocache=<?php echo md5(microtime()) ?>"></script>
<!-- <script src="js/socket.io.min.js"></script> -->

</body>
</html>
