var twitter = require('twitter');
var util = require('util');
var c = 0;
module.exports = function () {
    var twitterHandle = '@slouchshame';
    // The status to tweet
	c++;
    var status = "I slouched today!";
    // Enter the oauth key and secret information
    var client = new twitter({
        consumer_key: 'X0CxtlMkTDjcDRMGVAsOJos37',
        consumer_secret: 'Kf2WB35pOw0RZTJt7rvFPmx9SRVO7r5RyG5lupmeZvSeu4SnBn',
        access_token_key: '728664331269877762-iXlzZkfh1zIof9qnQILw0sZL6b5NuR7',
        access_token_secret: 'orrLACwLmwTj1Vmud6tR4z34GUKQfUDiUBZT1vpi4EL4a'
    });
    client.post('statuses/update', {
        status: 'I slouched '+ c +' times today! :('
    }, function (error, tweet, response) {
        if (error) console.error(error);
        console.log(tweet); // Tweet body.
        console.log(response); // Raw response object.
    });
};
