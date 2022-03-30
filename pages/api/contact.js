const nodemailer = require("nodemailer");

const Contact = async (req, res) => {
  try {

    let transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      "from": "mail@" + process.env.HOST_DOMAIN,
      "to": "hello@" + process.env.HOST_DOMAIN,
      "subject": `${req.body.subject}`,
      "html": `
        <p>Name: ${req.body.name}</p>
        <p>Email address: ${req.body.email}</p>
        <p>Company: ${req.body.company}</p>
        <p>Message: ${req.body.message}</p>
        <h5 style="font-weight: 400; font-style: italic; margin-top: 48px; margin-bottom: 12px">
          This email was created using the contact form on ${process.env.HOST_DOMAIN}
        </h5>`,
    });
  } catch (error) {
    console.log(error);
    return res.status(error.statusCode || 500).json({ error: error.message });
  }
  return res.status(200).json({ error: "" });
}

export default Contact;



