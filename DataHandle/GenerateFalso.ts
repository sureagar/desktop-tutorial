import { randEmail, randFirstName, randFullName } from '@ngneat/falso';

// const empData = { firstName: randFirstName(), lastName: randFullName(), email: randEmail() };

// let empDataArr = [];

// for (let i = 0; i < 5; i++) {
//     empDataArr.push({ firstName: randFirstName(), lastName: randFullName(), email: randEmail() });
// }
// console.log(empDataArr);

// Generate emp data based on count
export function generateEmpData (count = 5) {
    let empDataArr = [];
    for (let i = 0; i < count; i++) {
        empDataArr.push({ firstName: randFirstName(), lastName: randFullName(), email: randEmail() });
    }
    return empDataArr;
}

// // crate a sample output file
// import * as fs from 'fs';
// import * as path from 'path';

// let empDataArr = generateEmpData(10);
// let flPath = "../testdata/EmpData.json";
// fs.writeFileSync(path.resolve(__dirname, flPath), JSON.stringify(empDataArr, null, 2), 'utf-8');

