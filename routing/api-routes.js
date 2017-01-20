var nodemailer = require('nodemailer');
var express = require('express');

//console.log(keys.emailKeys.email);

module.exports = function (app) {
	
	app.post('/email', function(req, res) {
		if(app.settings.env === "development"){
			var keys = require('../keys.js');
		}

	    var transporter = nodemailer.createTransport({
	        service: 'Gmail',
	        auth: {
	            user: keys.emailKeys.email || process.env.EMAIL, // Your email id
	            pass: keys.emailKeys.password || process.env.PASSWORD // Your password
	        }
	    });

		var mailOptions = {
		    from: req.body.from, 
		    to: req.body.to,
		    subject: req.body.subject +" "+ req.body.from, 
		    text: req.body.text
		};
		console.log(mailOptions);

		transporter.sendMail(mailOptions, function(error, info){
		    if(error){
		        console.log(error);
		       
		    }else{
		        console.log('Message sent: ' + info.response);
		        res.send(true);
		       
		    };
		});
	 });

};
