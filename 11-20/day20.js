// I'm continuing to work on my Node server, hoping this turns into something I could use
// for my React app...

const http = require('http');
const path = require('path');
const fs = require('fs');
const fsPromises = require('fs').promises;

const logEvents = require('./logEvents');
const EventEmitter = require('events');
class Emitter extends EventEmitter { };
const myEmitter = new Emitter();
myEmitter.on('log', (msg, fileName) => logEvents(msg));
const PORT = process.env.PORT || 3500;

const serveFile = async (filePath, contentType, response) => {
    try {
        const rawData = await fsPromises.readFile(
            filePath,
            !contentType.includes('image') ? 'utf8' : ''
        );
        const data = contentType === 'application/json'
            ? JSON.parse(rawData) : rawData;
        response.writeHead(
            filePath.includes('404.html') ? 404 : 200,
            { 'Content-type': contentType }
        );
        response.end(
            contentType === 'application/json' ? JSON.stringify(data) : data
        );
    } catch (err) {
        console.log(err);
        response.statusCode = 500;
        response.end();
    }
}

const server = http.createServer((req, res) => {
    console.log(req.url, req.method);
    myEmitter.emit('log', `${req.url}: ${req.message}`, 'reqLog.txt');

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
            : contentType === 'text/html' && req.url.slice(-1) === '/' // If content is html and the last character is "/"
                ? path.join(__dirname, 'views', req.url, 'index.html') // If true filePath = this line
                : contentType === 'text/html' // If the content is html
                    ? path.join(__dirname, 'views', req.url) // If true serve a file in the views directory
                    : path.join(__dirname, req.url); // Else serve a file in the Video5 directory.

    // Make .html not required in the browser.
    if (!extension && req.url.slice(-1) !== '/') filePath += '.html';

    const fileExists = fs.existsSync(filePath);

    if (fileExists) {
        serveFile(filePath, contentType, res);
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
                serveFile(path.join(__dirname, 'views', '404.html'), 'text/html', res);
        }
    }
});
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));