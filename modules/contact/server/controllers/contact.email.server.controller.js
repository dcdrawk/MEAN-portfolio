'use strict';

/**
 * Module dependencies.
 */
var nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');
var smtpConfig = 'smtps://user%40gmail.com:pass@smtp.gmail.com';

var config = { host: 'smtp.gmail.com',
   port: 465,
   secure: true };
//var smtpTransport = nodemailer.createTransport(smtpConfig);
//var transporter = nodemailer.createTransport(config);
var transporter = nodemailer.createTransport('smtps://thewebdevin%40gmail.com:w0weetime@smtp.gmail.com');

exports.sendMail = function (req, res) {
  var data = req.body;
  console.log(data);

  transporter.sendMail({
    from: 'Devin',
    to: 'thewebdevin@gmail.com',
    subject: data.subject,
    text: data.text
  });

  res.json(data);
};