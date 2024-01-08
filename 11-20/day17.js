// Today I'm continuing to work through David Gray's Youtube series for node.js:

// https://www.youtube.com/watch?v=yQBw8skBdZU&list=PL0Zuz27SZ-6PFkIxaJ6Xx_X46avTM1aYw&index=2&t=139s

// The theme of this video is how to manipulate files on your filesystem with fs.

const fsPromises = require('fs').promises;
const path = require('path');

const fileOps = async () => {
    try {
        // Read file operation
        const data = await fsPromises.readFile(path.join(__dirname, 'files', 'starter.txt'), 'utf8');
        console.log("Data: " + data);
        await fsPromises.writeFile(path.join(__dirname, 'files', 'fsPromiseWrite.txt'), data)
        await fsPromises.appendFile(path.join(__dirname, 'files', 'fsPromiseWrite.txt'), '\n\nWelcome! Welcome new galaxy!')
        await fsPromises.rename(path.join(__dirname, 'files', 'fsPromiseWrite.txt'),
            path.join(__dirname, 'files', 'fsPromiseRename.txt'))
        await fsPromises.unlink(path.join(__dirname, 'files', 'fsPromiseRename.txt'))
    } catch (err) {
        console.error(err);
    }
}

fileOps();

// fs.readFile(path.join(__dirname, 'files', 'starter.txt'), (err, data) => {
//     if (err) throw err;
//     console.log("Read complete.");
//     console.log(data);
// })

/*
fs.writeFile(path.join(__dirname, 'files', 'reply.txt'), 'Welcome new galaxy!', (err) => {
    if (err) throw err;
    console.log('Write complete.');

    // Put the append file operation in the brackets for write file because the operations
    // are asynchronous and this way, we know for sure that the write is complete by the
    // time we start the append operation.
    fs.appendFile(path.join(__dirname, 'files', 'reply.txt'), ' Thank you so much for playing my game!', (err) => {
        if (err) throw err;
        console.log("Append complete.");

        // We have an operation embedded in an operation embedded in an operation. This is
        // callback hell.
        fs.rename(path.join(__dirname, 'files', 'reply.txt'),
            path.join(__dirname, 'files', 'mario.txt'),
            (err) => {
                if (err) throw err;
                console.log("Rename complete.");
            });
    });
});

// Exit on uncaught errors
process.on('uncaughtException', err => {
    console.error(`There was an uncaught error: ${err}`);
    process.exit(1);
})*/