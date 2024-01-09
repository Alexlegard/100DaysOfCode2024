// Today I continued with Dave Gray's Node tutorials (videos 3 and 4): 

// https://www.youtube.com/watch?v=oGO_-DWTmKA&list=PL0Zuz27SZ-6PFkIxaJ6Xx_X46avTM1aYw&index=3

// https://www.youtube.com/watch?v=2vaTy4dkbJM&list=PL0Zuz27SZ-6PFkIxaJ6Xx_X46avTM1aYw&index=4

// I made a logger for the datetime the event was emitted, the uuid
// which is a 32-character hexadecimal number, and a fun message.

// index.js

const logEvents = require('./logEvents');

const EventEmitter = require('events');

class MyEmitter extends EventEmitter { };

// Create object
const myEmitter = new MyEmitter();

// Add listener for the log event
myEmitter.on('log', (msg) => logEvents(msg));

setTimeout(() => {
    //Emit event
    myEmitter.emit('log', 'Log event emitted!');
}, 2000);

// logEvents.js

// const { format } = require('date-fns');
// const { v4: uuid } = require('uuid');
// const fs = require('fs');
// const fsPromises = require('fs').promises;
// const path = require('path');
// const { MessageChannel } = require('worker_threads');



// const logEvents = async (message) => {
//     const dateTime = `${format(new Date(), 'yyyyMMdd\tHH:mm:ss')}`;
//     const logItem = `${dateTime}\t${uuid()}\t${message}\n`;
//     console.log(logItem);
//     try {
//         if (!fs.existsSync(path.join(__dirname, 'logs'))) {
//             await fsPromises.mkdir(path.join(__dirname, 'logs'));
//         }
//         await fsPromises.appendFile(path.join(__dirname, 'logs', 'eventLog.txt'), logItem);
//     } catch (err) {
//         console.error(err);
//     }
// }

// module.exports = logEvents;