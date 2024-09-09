const fs = require('node:fs');
const output = '{ "type": "module" }';
fs.writeFileSync('./dist/esm/package.json', output);
