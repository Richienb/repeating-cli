#!/usr/bin/env node
'use strict';
const meow = require('meow');

const cli = meow(`
	Usage
	  $ repeating <count> [string]

	Examples
	  $ echo "foo$(repeating 10)bar"
	  foo          bar
	  $ repeating 3 'unicorn '
	  unicorn unicorn unicorn
`, {
	string: ['_']
});

if (cli.input.length === 0) {
	console.error('Specify how many times to repeat the string');
	process.exit(1);
}

const count = Number(cli.input[0]);
const text = cli.input[1] || ' ';

console.log(text.repeat(count));
