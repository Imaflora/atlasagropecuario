'use strict';
var password = require('./password').email

const nodemailer = require('nodemailer');

// create reusable transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
    service: 'Outlook365',
    auth: {
        user: 'caio@imaflora.org',
        pass: password
    }
});


function sendMail(email, name, comment) {
    // setup email data with unicode symbols
    let mailOptions = {
        from: 'Atlas Agropecuario <atlas_agropecuario@imaflora.org>', // sender address
        to: 'atlas_agropecuario@imaflora.org', // list of receivers
        subject: 'Comentário no Atlas', // Subject line
        html: `Comentário enviado de ${name}, responder para ${email}<br/><br/> <pre>${comment}</pre>` // html body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message %s sent: %s', info.messageId, info.response);
    });
}


module.exports = {sendMail: sendMail};