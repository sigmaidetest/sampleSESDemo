let AWS = require('aws-sdk');
const ses = new AWS.SES();
exports.handler = function (event, context, callback) {
	ses.sendEmail({
		Destination: {
			ToAddresses: ['randikanavagamuwa@gmail.com'],
			CcAddresses: ['randikanavagamuwa@gmail.com'],
			BccAddresses: []
		},
		Message: {
			Body: {
				Html: {
					Data: '<html>\n<body>\n\n<h1>My First Heading</h1>\n\n<p>My first paragraph.</p>\n\n</body>\n</html>'
				},
				Text: {
					Data: 'Sample TEXT'
				}
			},
			Subject: {
				Data: 'Sample TEXT'
			}
		},
		Source: 'randika@adroitlogic.com',
	}, function (err, data) {
		if (err) console.log(err, err.stack); // an error occurred
		else console.log(data);           // successful response
	});


	callback(null, 'Successfully executed');
}