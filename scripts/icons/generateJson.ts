/**
 * This file is only a script file that should only be executed by the npm scripts.
 */
import { createIconFile } from './../../src/icons/index';
import * as cpx from 'cpx';
import * as path from 'path';
import * as fs from 'fs';

createIconFile().then((fileName) => {
    const filePath = path.resolve('src', fileName);
    const out = path.resolve('out', 'src', fileName);
    fs.rename(filePath, out, (err) => {
        if (err) {
            console.error('\x1b[31m%s\x1b[0m', err);
        } else {
            console.log('\x1b[32m%s\x1b[0m', '> Material Icon Theme: Successfully generated icon JSON file');
        }
    });
}).catch(err => {
    console.error('\x1b[31m%s\x1b[0m', err);
});