// Any copyright is dedicated to the Public Domain.
// http://creativecommons.org/publicdomain/zero/1.0/

/*********************************************
This camera example takes a picture. If a
directory is specified with the --upload-dir
flag, the picture is saved to that directory.
*********************************************/

var tessel = require('tessel');
var camera = require('camera-vc0706').use(tessel.port['A']);
var twitter = require("../twitter.js");

module.exports = {
	// Wait for the camera module to say it's ready
	whenSlouch: function () {
		camera.on('ready', function () {
			// Take the picture
			camera.takePicture(function (err, image) {
				if (err) {
					console.log('error taking image', err);
				} else {
					// Name the image
					console.log('Taking Picture');
					process.sendfile("slouching", image);
					console.log('done.');
					// Turn the camera off to end the script
					camera.disable();
				}
			});
		});

		camera.on('error', function (err) {
			console.error(err);
		});
	}
};
