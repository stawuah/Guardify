
const express = require('express');
const app = express();
const DenyXXSsecurityProtection = require('./main.js');

// Use security middleware before defining any routes
app.use(DenyXXSsecurityProtection());

const port = 9883;

app.use((req, res, next) => {
    console.log('Response Header ++++: ', res.getHeaders());
    next();
});

app.use((req, res, next) => {
    console.log('Request Header _____: ', req.headers);
    next();
});

app.get('/xxs', (req, res) => {

console.log('Headers Sent Before:', res.headersSent); // Should log false

// Sending the response ('OK')
res.send('<h2>A package to prevent Cross Site Scripting (XXS)Clickjaicking<h2/> <div><h1>A good start for 2024<h1/><div/> ');

console.log('Headers Sent After Sending Body:', res.headersSent);
});



// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});

app.listen(port, () => {
    console.log(`Middleware server is running on ${port}`);
});