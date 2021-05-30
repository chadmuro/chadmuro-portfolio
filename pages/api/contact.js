require('dotenv').config();

export default function (req, res) {
	let nodemailer = require('nodemailer');
	const transporter = nodemailer.createTransport({
		port: 465,
		host: 'smtp.gmail.com',
		auth: {
			user: 'chadmuroportfolio@gmail.com',
			pass: process.env.password,
		},
		tls: {
			requireTLS: true,
		},
	});

	const mailData = {
		from: 'chadmuroportfolio@gmail.com',
		to: 'chadmurodev@gmail.com',
		subject: `Message from ${req.body.name}`,
		text: req.body.message + ' | Sent from: ' + req.body.email,
		html: `<p>Name: ${req.body.name}</p><p>Sent from: ${req.body.email}</p><p>${req.body.message}</p>`,
	};

	let message;
	transporter.sendMail(mailData, function (err, info) {
		if (err) {
			console.log('error');
			message = 'error';
		} else {
			console.log('sent');
			message = 'sent';
		}
	});

	res.send(message);
}
