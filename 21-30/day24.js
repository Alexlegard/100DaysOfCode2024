const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const { logger } = require('./middleware/logEvents');
const PORT = process.env.PORT || 3500;

// Display request type and path whenever we load a route
app.use(logger);

// Allows requests from other urls, such as google.com
const whitelist = ['https://www.google.ca/', 'http://localhost:3500'];
const corsOptions = {
    origin: (origin, callback) => {
        if (whitelist.indexOf(origin) !== -1) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    optionsSuccessStatus: 200
}
app.use(cors());

// All the route handlers can technically be considered middleware.
// However, we will apply several middleware that apply to ALL routes.
// 1) Built-in middleware to handle form data
app.use(express.urlencoded({ extended: false }));

// 2) Built-in middleware for json
app.use(express.json());

// 3) Serve static files
app.use(express.static(path.join(__dirname, '/public')));

app.get('^/$|/index(.html)?', (req, res) => {

    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});
app.get('/new-page(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'new-page.html'));
});
app.get('/old-page(.html)?', (req, res) => {
    res.redirect(301, '/new-page.html');
});

// Route handlers
app.get('/hello(.html)?', (req, res, next) => {
    console.log('Attempted to load hello.html');
    next(); // Next calls the 'Hello World' function below.
}, (req, res) => {
    res.send('Hello World!');
});

const one = (req, res, next) => {
    console.log('one');
    next();
}
const two = (req, res, next) => {
    console.log('two');
    next();
}
const three = (req, res, next) => {
    console.log('three');
    res.send('Finished!');
}
app.get('/chain(.html)?', [one, two, three]);

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', '404.html'));
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));