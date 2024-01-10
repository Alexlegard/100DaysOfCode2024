// This code is from Dave Gray's fifth video where he creates a web server:
// https://www.youtube.com/watch?v=3ZAKY-CDKog&list=PL0Zuz27SZ-6PFkIxaJ6Xx_X46avTM1aYw&index=5
// (code is not yet complete.)
// To be quite honest this is all a bit too much for me to take in all at
// once, but I'm starting to get it a little bit...

const http = require('http');
const path = require('path');
const fs = require('fs');
const fsPromises = require('fs').promises;

const logEvents = require('./logEvents');
const EventEmitter = require('events');
class Emitter extends EventEmitter { };
const myEmitter = new Emitter();

const PORT = process.env.PORT || 3500;

console.log("Hello galaxy!!");

const server = http.createServer((req, res) => {
    console.log(req.url, req.method);

    // Dave Gray didn't want to use this approach
    // let filePath;
    // if (req.url === '/' || req.url === 'index.html') {
    //     res.statusCode = 200;
    //     res.setHeader('Content-Type', 'text/html');
    //     filePath = path.join(__dirname, 'views', 'index.html');
    //     fs.readFile(filePath, 'utf8', (err, data) => {
    //         res.end(data);
    //     });
    // }

    // He also didn't want to use a switch statement approach because you'd have to think of
    // every type of url basically, and it's just not flexible.

    const extension = path.extname(req.url);

    let contentType;

    switch (extension) {
        case '.css':
            contentType = 'text/css';
            break;
        case '.js':
            contentType = 'text/javascript';
            break;
        case '.json':
            contentType = 'application/json';
            break;
        case '.jpg':
            contentType = 'image/jpeg';
            break;
        case '.png':
            contentType = 'image/png';
            break;
        case '.txt':
            contentType = 'text/plain';
            break;
        default:
            contentType = 'text/html';
    }

    let filePath =
        contentType === 'text/html' && req.url === '/' // If content is html and url is "/"
            ? path.join(__dirname, 'views', 'index.html') // If true filePath = this line
            : contentType === 'text/html' && req.url.slice(-1) === '/' // Else try this new test
                ? path.join(__dirname, 'views', req.url, 'index.html') // If true filePath = this line
                : contentType === 'text/html' // Else try this new test
                    ? path.join(__dirname, 'views', req.url) // If true filePath = this line
                    : path.join(__dirname, req.url); // Else filePath = this line.

    // Make .html not required in the browser.
    if (!extension && req.url.slice(-1) !== '/') filePath += '.html';

    const fileExists = fs.existsSync(filePath);

    if (fileExists) {
        // Serve the file
    } else {
        //console.log(path.parse(filePath));
        switch (path.parse(filePath).base) {
            case 'old-page.html':
                res.writeHead(301, { 'Location': '/new-page.html' });
                res.end();
                break;
            case 'www-page.html':
                res.writeHead(301, { 'Location': '/' });
                res.end();
                break;
            default:
            // Serve a 404 response
        }
    }
});

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));

/*
myEmitter.on('log', (msg) => logEvents(msg));
myEmitter.emit('log', 'Log event emitted!');
*/