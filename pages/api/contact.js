const mail = require('@sendgrid/mail');

mail.setApiKey(process.env.SENDGRID_API_KEY);

export default async (req, res) => {
  const body = JSON.parse(req.body);

  const message = `
    Name: ${body.data.name}\r\n
    Email: ${body.data.email}\r\n
    Message: ${body.data.message}
  `;

  const data = {
    to: 'chadmurodev@gmail.com',
    from: 'chadmuroportfolio@gmail.com',
    subject: `New message from ${body.data.name}`,
    text: message,
    html: message.replace(/\r\n/g, '<br />'),
  };

  await mail.send(data);

  res.status(200).json({ status: 'OK' });
};
