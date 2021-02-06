import * as ldap  from './ldap.js'
import fs from 'fs'
import readline from 'readline'

console.log(ldap.myLogger())

const rl = readline.createInterface({
    input: fs.createReadStream('.env.sample'),
    output: process.stdout,
    terminal: false
});

rl.on('line', (line2) => {
    console.log(line2)
})