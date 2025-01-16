import nodemailer from "nodemailer";

const SendMail = (options) => {
  const transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASSWORD,
    },
  });

  const MailOptions = {
    from: "Hruthik M",
    to: options.to,
    subject: options.subject,
    html: options.html,
  };

  return transporter.sendMail(MailOptions);
};

export default SendMail;
