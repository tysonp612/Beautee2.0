const nodemailer = require("nodemailer");
exports.sendVerifiedEmail = (email, name, url) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD,
    },
  });
  const mailOptions = {
    from: process.env.EMAIL_USERNAME,
    to: email,
    subject: name,
    html: `<div style="max-width:700px;margin-bottom:1rem;display:flex;align-items:center;gap:10px;font-family:Roboto;font-weight:600;color:#3b5998"><img src="https://res.cloudinary.com/dmhcnhtng/image/upload/v1645134414/logo_cs1si5.png" alt="" style="width:30px"><span>Action requise : Activate your facebook account</span></div><div style="padding:1rem 0;border-top:1px solid #e5e5e5;border-bottom:1px solid #e5e5e5;color:#141823;font-size:17px;font-family:Roboto"><span>Hello ${name}</span><div style="padding:20px 0"><span style="padding:1.5rem 0">You recently created an account on Facebook. To complete your registration, please confirm your account.</span></div><a href=${url} style="width:200px;padding:10px 15px;background:#4c649b;color:#fff;text-decoration:none;font-weight:600">Confirm your account</a><br><div style="padding-top:20px"><span style="margin:1.5rem 0;color:#898f9c">Facebook allows you to stay in touch with all your friends, once refistered on facebook,you can share photos,organize events and much more.</span></div></div>`,
  };
  transporter.sendMail(mailOptions, (err, success) => {
    if (err) return err;
    return res;
  });
};
