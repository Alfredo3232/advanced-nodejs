const express = require('express');

const app = express();

function doWork(durations) {
    const start = Date.now();
    while (Date.now() - start < duration) {
        
    }
}

app.get('/', () => {
    res.send('Hi there');
});

app.listen(3000, () => {
    console.log('Listening on port', 3000);
});