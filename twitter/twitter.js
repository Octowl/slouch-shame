var twitter = require('twitter');
var util = require('util');

module.exports = function (slouchedImage) {
	var twitterHandle = '@slouchshame';
	// The status to tweet
	var photoStream = require('fs').readFileSync(slouchedImage);

	// Enter the oauth key and secret information
	var client = new twitter({
		consumer_key: 'X0CxtlMkTDjcDRMGVAsOJos37',
		consumer_secret: 'Kf2WB35pOw0RZTJt7rvFPmx9SRVO7r5RyG5lupmeZvSeu4SnBn',
		access_token_key: '728664331269877762-iXlzZkfh1zIof9qnQILw0sZL6b5NuR7',
		access_token_secret: 'orrLACwLmwTj1Vmud6tR4z34GUKQfUDiUBZT1vpi4EL4a'
	});

	// Make a tweet!
	client.post('media/upload', {
		media: photoStream
	}, function (error, media, response) {

		if (!error) {
			console.log(media);
		}
		var status = {
			status: 'Look who\'s slouching today :O',
			media_ids: media.media_id_string // Pass the media id string
		};

		client.post('statuses/update', status, function (error, tweet, response) {
			if (!error) {
				console.log(tweet);
			}
		});
	});
};
