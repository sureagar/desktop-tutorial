//Write data to txt file in TypeScript
import * as fs from 'fs';
import * as path from 'path'; // to resolve the file path
let data = "This is a sample text to write to the file.";
let flPath = "../testdata/Output.txt";
fs.writeFileSync(path.resolve(__dirname, flPath), data, 'utf-8');
