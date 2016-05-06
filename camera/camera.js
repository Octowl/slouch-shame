// Any copyright is dedicated to the Public Domain.
// http://creativecommons.org/publicdomain/zero/1.0/

/*********************************************
This camera example takes a picture. If a
directory is specified with the --upload-dir
flag, the picture is saved to that directory.
*********************************************/

var tessel = require('tessel');
var av = require('tessel-av');
var camera = new av.Camera();
var twitter = require("../twitter/twitter");

var takePicture = camera.capture();

takePicture.on('data', function (image) {
	console.log("PHOTO");
    twitter(image);
});

takePicture.on('error', function (err) {
    console.error(err);
});

module.exports = {
	// Wait for the camera module to say it's ready
	whenSlouch: camera.capture

};
