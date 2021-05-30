require('dotenv').config();

export default function (req, res) {
	let nodemailer = require('nodemailer');
	const transporter = nodemailer.createTransport({
		port: 587,
		host: 'smtp-mail.outlook.com',
		auth: {
			user: 'chadmurodev@outlook.com',
			pass: process.env.password,
		},
	});

	const mailData = {
		from: 'chadmurodev@outlook.com',
		to: 'chadmurodev@outlook.com',
		subject: `Message from ${req.body.name}`,
		text: req.body.message + ' | Sent from: ' + req.body.email,
		html: `<p>Name: ${req.body.name}</p><p>Sent from: ${req.body.email}</p><p>${req.body.message}</p>`,
	};

	let message;
	transporter.sendMail(mailData, function (err, info) {
		if (err) {
			message = 'error';
		} else {
			message = 'sent';
		}
	});

	res.send(message);
}
