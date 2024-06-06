const saluta = require('./utils');
const nomi = require('./nomi');

const os = require("os");
console.log(os.userInfo());
console.log(os.uptime());

const path = require("path");
console.log(path.sep);
console.log(__dirname);

