#!/usr/bin/env node
var program = require('commander');

program
  //.version('0.0.1') // get that from package.json
  .option('-p, --port <n>', 'The port to listen on', parseInt, 80)
  .option('-r, --repl', 'Start an REPL to give interactive command')
  .parse(process.argv);

console.log('you asked for port ', program.port);
console.log('You want to start the repl :', program.repl);