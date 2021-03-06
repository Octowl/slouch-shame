// Any copyright is dedicated to the Public Domain.
// http://creativecommons.org/publicdomain/zero/1.0/

/*********************************************
This basic accelerometer example logs a stream
of x, y, and z data from the accelerometer
*********************************************/

var tessel = require('tessel');
var http = require('http');
var accel = require('accel-mma84').use(tessel.port['A']);

var tweet = require('./twitter/twitter');

var origin = 1;
var slouchMeter = 0;
var deltaX, currX;
// Initialize the accelerometer.
accel.on('ready', function () {
    // Stream accelerometer data
    console.log('Ready to record!');
    accel.on('data', function (xyz) {
        currX = +(xyz[0].toFixed(2))
        deltaX = Math.abs(currX) - origin;
        // slouchMeter += Math.abs(deltaX) > 1 ? deltaX : 0;
        if (deltaX > .05) {
            console.log("TWEETING!");
            var request = http.request({
                hostname: '172.20.10.3', // Where your other process is running
                port: 3001,
                path: '/',
                method: 'POST'
            });

            request.write('hi!');
        }
    });

});

accel.on('error', function (err) {
    console.log('Error:', err);
});
