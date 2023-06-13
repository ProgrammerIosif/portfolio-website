'use server'

import emailjs from "@emailjs/nodejs"

export async function sendEmail(data) {
  var templateParams = {
    name: data.name,
    email: data.email,
    message: data.message
  };
  return emailjs.send(process.env.SERVICE, process.env.TEMPLATE, templateParams, {publicKey: process.env.KEY, privateKey: process.env.PRIVATE_KEY})
    .then(() => {
        return 'Thank you for contacting me! I will respond soon.'
    }, (error) => {
        return 'There has been a problem: ' + error.text
    });
}

