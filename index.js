const express = require('express');
const app = express();
const nodemailer = require('nodemailer');
const path = require('path');
const port = 8080;
require('dotenv').config();

app.use(express.json());
app.use(express.urlencoded());

/**
 * create Transpoter
 */

const transport = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.USER_EMAIL,
        pass: process.env.APP_PASSWD
    }
})

app.get('/', (req, res) => {
    return res.sendFile(path.join(__dirname + '/public/index.html'));
});

app.post('/send', async (req, res) => {
    const { mailbox } = req.body;
    try {
        const info = await transport.sendMail({
            from: `"My App " ${process.env.USER_EMAIL}`,
            to: 'shek25095@gmail.com',
            subject: "Hello from Abhihsek 🚀",
            html: `<b>${mailbox}</b>`
        });
        console.log(info)
        res.send(`✅ Email sent: ${info.messageId}`);
    } catch (e) {
        console.log(e);
    }

});


app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});