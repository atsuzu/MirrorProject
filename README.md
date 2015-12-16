Sean's Mirror + Voice Recognition + SoundCloud + Character moving project

1: Mirror 
Credits to : http://michaelteeuw.nl/post/84026273526/and-there-it-is-the-end-result-of-the-magic
Basically wanted to make a mirror that had date, time, and weather information.

2: Voice Recognition
I then decided to add a voice recognition to automate stuff in my room.
I used Annyang, which uses Google API

3:  SoundCloud
I added this to combine with Voice Recognition, so basically I can command it to: start, pause, skip music.

4: Character
I used MMD (MikuMikuDance) to create a moving character model.  Apparently RPi does not support webGL, and so I decided to 2D.  So what I did was just take frame images and play it using javascript.  

Steps I took:
1.  Got the basic interface working with the Magic Mirror stuff that I got from Michael Teeuw.
	- Pretty much did a git pull on his project, adjusted some stuff in config file and removed stuff I didn't want.

2.  Used speech recognition engine that Annyang provided.  https://www.talater.com/annyang/
	- Was also easy to use.

3.  I then added SoundCloud using it's API.  

4.	I then combined the speech recognition and SoundCloud so that I can command it to Start, Stop, and Skip songs.  

5.  For character, I used MMD (MikuMikuDance).  After doing some research though, I learned that Raspberry Pi doesn't support webGL.  So I then captured my characters movements and saved it as AVI file.  After that, I used VLC player to capture and save every other frame.  In my character.js, I used the setInterval function to constantly run my character.  Since all my pictures had a black background, I would have been okay with it since my projects background was black.  But just in case, I decided to convert the black background to transparent using imageMagick.  I created a batch script that searched through all my black background and convert it to transparent. 