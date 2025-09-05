const express = require('express');
const app = express();
const nodemailer = require('nodemailer');
const path = require('path');
const port = 8080;


app.get('/', (req, res) => {
    return res.sendFile(path.join(__dirname + '/public/index.html'));
});


app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});




