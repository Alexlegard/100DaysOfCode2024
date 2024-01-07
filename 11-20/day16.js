// Today I was working through Dave Gray's react registration form tutorial,
// but I was forced to stop because I had not yet created a server, so I have
// to go back to his other node.js tutorials to learn how to make a Node
// server.

// I worked through part 1 if his Node tutorial:
// https://www.youtube.com/watch?v=JZXQ455OT3A&list=PL0Zuz27SZ-6PFkIxaJ6Xx_X46avTM1aYw&index=1

console.log("Hello World!");
console.log(global);
const os = require('os');
const path = require('path');
const math = require('./math');

console.log("type: " + os.type());
console.log("version: " + os.version());
console.log("homedir: " + os.homedir());

console.log("dirname: " + __dirname);
console.log("filename: " + __filename);

console.log("path.dirname(filename): " + path.dirname(__filename));
console.log("path.basename(filename): " + path.basename(__filename));
console.log("path.extname(filename): " + path.extname(__filename));
console.log("path.parse(filename): " + path.parse(__filename));

console.log(math.add(24, 4));
console.log(math.subtract(24, 4));
console.log(math.multiply(24, 4));
console.log(math.divide(24, 4));
console.log(math.modulus(24, 4));

// math.js

// const add = (a, b) => a + b;
// const subtract = (a, b) => a - b;
// const multiply = (a, b) => a * b;
// const divide = (a, b) => a / b;
// const modulus = (a, b) => a % b;

// module.exports = { add, subtract, multiply, divide, modulus }