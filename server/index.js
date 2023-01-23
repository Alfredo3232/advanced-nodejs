process.env.UV_THREADPOOL_SIZE = 5;
const cluster = require('cluster');

// is the file being executed in master mode ?
if (cluster.isMaster) {
    // cause index.js to be executed again, but in child mode
    cluster.fork();
} else {
    // now this is running as child and this is going to run like a normal server
    const express = require('express');
    const crypto = require('crypto');

    const app = express();

    app.get('/', () => {
        crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
            res.send('Hi there');
        });
    });

    app.listen(3000, () => {
        console.log('Listening on port', 3000);
    });
}