// Today I was learning the basics of Express. It lets me do the
// exact same thing as I did when I built that Node server, but
// with far fewer lines of code. Amazing!

const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3500;

app.get('^/$|/index(.html)?', (req, res) => {

    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});
app.get('/new-page(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'new-page.html'));
});
app.get('/old-page(.html)?', (req, res) => {
    res.redirect(301, '/new-page.html');
});

// Route handler with 2 chained functions
app.get('/hello(.html)?', (req, res, next) => {
    console.log('Attempted to load hello.html');
    next(); // Next calls the 'Hello World' function below.
}, (req, res) => {
    res.send('Hello World!');
});

// Pre-declaring functions to be chained later works, too.
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