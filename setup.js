const {writeFileSync, existsSync, copyFileSync, mkdirSync} = require('node:fs');
const output = '{ "type": "module" }';
writeFileSync('./dist/esm/package.json', output);
if (!existsSync('./dist/css')) mkdirSync('./dist/css');
copyFileSync('./src/css/common.css', './dist/css/common.css');
