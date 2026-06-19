// Read text from text file in TypeScript
import * as fs from 'fs';
import * as path from 'path'; // to resolve the file path

let flPath = "../testdata/CssSelectors.txt";
let file = fs.readFileSync(path.resolve(__dirname, flPath), 'utf-8');
let lines = file.split('\n'); // split the file content into lines
for (let line of lines) {
    console.log(line);
}

