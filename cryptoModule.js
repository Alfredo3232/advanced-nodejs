process.env.UV_THREADPOOL_SIZE = 2;
// this tells libuv that whenever it creates its threadpool,
// it should only create two threads inside there

const crypto = require('crypto');

const start = Date.now();

// 1 Seconds
crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
    console.log('1: ', Date.now() - start);
});

crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
    console.log('2: ', Date.now() - start);
});

crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
    console.log('3: ', Date.now() - start);
});

crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
    console.log('4: ', Date.now() - start);
});
// 1 Seconds

/* 
    These all roughly took the same amount of time however on the next one, the time will jump
    drastically
*/

// 2 Seconds
crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
    console.log('5: ', Date.now() - start);
});